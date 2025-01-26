import React, { useState, useEffect, useRef } from "react";
import { View, Alert, StyleSheet, Dimensions } from "react-native";
import Target from "./src/components/Target";
import Scoreboard from "./src/components/Scoreboard";
import Timer from "./src/components/Timer";
import { getRandomPosition } from "./src/utils/getRandomPosition";
import { getPoints } from "./src/utils/getPoints";

const GAME_DURATION = 30;
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const TARGET_SIZE = 50;
const TOP_AREA_HEIGHT = 80;

const App = () => {
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(GAME_DURATION);
  const [targetPosition, setTargetPosition] = useState(getRandomPosition());
  const [gameOver, setGameOver] = useState(false);
  const [visible, setVisible] = useState(true);

  // Use useRef to track the latest score value
  const scoreRef = useRef(score);

  // Update scoreRef whenever score changes
  useEffect(() => {
    scoreRef.current = score;
  }, [score]);

  // Timer effect
  useEffect(() => {
    if (gameOver) return;

    const timerInterval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timerInterval);
          setGameOver(true);
          // Using scoreRef to access the latest score
          Alert.alert("Game Over", `Final Score: ${scoreRef.current}`);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [gameOver]);

  // Handle target tap
  const handleTargetTap = (size: number) => {
    if (gameOver) return;

    setScore(score + getPoints(size));
    setVisible(false);

    setTimeout(() => {
      setTargetPosition(getRandomPosition());
      setVisible(true);
    }, 300);
  };

  return (
    <View style={styles.container}>
      <Scoreboard score={score} />
      <Timer timer={timer} />
      {!gameOver && (
        <Target
          position={targetPosition}
          onTap={handleTargetTap}
          visible={visible}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
