import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import Target from "./src/components/Target";
import Scoreboard from "./src/components/Scoreboard";
import Timer from "./src/components/Timer";
import { getRandomPosition } from "./src/utils/getRandomPosition";
import { getPoints } from "./src/utils/getPoints";
import GameAlert from "./src/components/GameAlert";
import { Audio } from "expo-av";
const GAME_DURATION = 30;



const App = () => {
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(GAME_DURATION);
  const [targetPosition, setTargetPosition] = useState(getRandomPosition());
  const [gameOver, setGameOver] = useState(false);
  const [visible, setVisible] = useState(true);
  const [alertVisible, setAlertVisible] = useState(false);
  const [targetSound, setTargetSound] = useState<Audio.Sound | null>(null);
  const [backgroundMusic, setBackgroundMusic] = useState<Audio.Sound | null>(null);

  // Preload sounds
  useEffect(() => {
    const loadSounds = async () => {
      const targetSound = new Audio.Sound();
      const backgroundMusic = new Audio.Sound();

      // Load target sound and background music
      await targetSound.loadAsync(require("./assets/sounds/targetSound.wav"));
      await backgroundMusic.loadAsync(
        require("./assets/sounds/backgroundMusic.wav")
      );

      // Loop background music
      await backgroundMusic.setIsLoopingAsync(true);
      await backgroundMusic.playAsync(); // Play background music immediately

      setTargetSound(targetSound);
      setBackgroundMusic(backgroundMusic);

      await backgroundMusic.setVolumeAsync(0.1);
      await targetSound.setVolumeAsync(0.5);
    };

    loadSounds();

    return () => {
      // Unload sounds when component unmounts
      if (targetSound) {
        targetSound.unloadAsync();
      }
      if (backgroundMusic) {
        backgroundMusic.unloadAsync();
      }
    };
  }, []);

  // Use useRef to track the latest score value
  const scoreRef = useRef(score);
  useEffect(() => {
    scoreRef.current = score;
  }, [score]);

  // timer countdown effect
  useEffect(() => {
    if (gameOver) return;

    const timerInterval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timerInterval);
          setGameOver(true);
          setAlertVisible(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [gameOver]);

  useEffect(() => {
    const controlBackgroundMusic = async () => {
      if (timer > 0 && backgroundMusic) {
        await backgroundMusic.playAsync();
        await backgroundMusic.setIsLoopingAsync(true);
      } else if (backgroundMusic) {
        await backgroundMusic.pauseAsync();
      }
    };

    controlBackgroundMusic();
  }, [timer, backgroundMusic]);

  // handle target tap
  const handleTargetTap = (size: number) => {
    if (gameOver) return;
    

    targetSound?.replayAsync();

    setScore(score + getPoints(size));
    setVisible(false);

    setTimeout(() => {
      setTargetPosition(getRandomPosition());
      setVisible(true);
    }, 300);
  };

    const handleCloseAlert = () => {
      setAlertVisible(false);
      setScore(0);
      setTimer(GAME_DURATION);
      setGameOver(false);
    };

  return (
    <View style={styles.container}>
      <View style={styles.scoreboard}>
        <Scoreboard score={score} />
        <Timer timer={timer} />
      </View>
      {!gameOver && (
        <Target
          position={targetPosition}
          onTap={handleTargetTap}
          visible={visible}
        />
      )}
      <GameAlert
        visible={alertVisible}
        score={score}
        onClose={handleCloseAlert}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  scoreboard: {
    position: "absolute",
    top: 40,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default App;
