import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import Target from "./src/components/Target";
import Scoreboard from "./src/components/Scoreboard";
import Timer from "./src/components/Timer";
import { getRandomPosition } from "./src/utils/getRandomPosition";
import { getPoints } from "./src/utils/getPoints";
import GameAlert from "./src/components/GameAlert";

const GAME_DURATION = 30;

const App = () => {
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(GAME_DURATION);
  const [targetPosition, setTargetPosition] = useState(getRandomPosition());
  const [gameOver, setGameOver] = useState(false);
  const [visible, setVisible] = useState(true);
  const [alertVisible, setAlertVisible] = useState(false);
  
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

  // handle target tap
  const handleTargetTap = (size: number) => {
    if (gameOver) return;

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
