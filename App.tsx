import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

// Constants for the target size and game duration
const TARGET_SIZE = 50; // constant size for the target
const GAME_DURATION = 5; // seconds
const TOP_AREA_HEIGHT = 80;

// Get screen width and height dynamically using Dimensions API
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const App = () => {
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(GAME_DURATION);
  const [targetPosition, setTargetPosition] = useState<{
    x: number;
    y: number;
  }>({ x: screenWidth / 2, y: screenHeight / 2 });
  const [gameOver, setGameOver] = useState(false);
  const [visible, setVisible] = useState(true);

useEffect(() => {
  if (gameOver) {
    setVisible(false);
    alert(`Game Over! Final Score: ${score}`); // Use the latest score here
  }
}, [gameOver]); // Trigger alert only when gameOver changes

useEffect(() => {
  if (gameOver) return;

  const timerInterval = setInterval(() => {
    setTimer((prevTimer) => {
      if (prevTimer <= 1) {
        clearInterval(timerInterval);
        setGameOver(true); // gameOver state triggers the alert
        return 0;
      }
      return prevTimer - 1;
    });
  }, 1000);

  return () => clearInterval(timerInterval);
}, [gameOver]);

  // Handle target tap (score and reset target position)
  const handleTargetTap = () => {
    if (gameOver) return;
    setScore(score + 1); // Fixed 1 point for each tap
    setVisible(false);

    setTimeout(() => {
      setTargetPosition(getRandomPosition());
      setVisible(true);
    }, 300);
  };



  // Get random position on the screen
  const getRandomPosition = (): { x: number; y: number } => {
    const randomX = Math.floor(Math.random() * (screenWidth - TARGET_SIZE));
    const randomY =
      Math.floor(
        Math.random() * (screenHeight - TARGET_SIZE - TOP_AREA_HEIGHT)
      ) + TOP_AREA_HEIGHT;
    return { x: randomX, y: randomY };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Score: {score}</Text>
      <Text style={styles.timer}>Time Left: {timer}s</Text>

      {visible && (
        <TouchableOpacity
        style={[
          styles.target,
          {
            width: TARGET_SIZE,
            height: TARGET_SIZE,
            left: targetPosition.x,
            top: targetPosition.y,
          },
        ]}
        onPress={handleTargetTap}
      />
      )}

      {gameOver && <Text style={styles.gameOver}>Game Over!</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  score: {
    fontSize: 24,
    position: "absolute",
    top: 40,
    left: 20,
  },
  timer: {
    fontSize: 24,
    position: "absolute",
    top: 40,
    right: 20,
  },
  target: {
    position: "absolute",
    width: TARGET_SIZE,
    height: TARGET_SIZE,
    borderRadius: TARGET_SIZE / 2, // Makes the target circular
    backgroundColor: "red",
  },
  gameOver: {
    fontSize: 30,
    color: "#e74c3c",
    marginTop: 20,
  },
});

export default App;
