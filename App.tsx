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
const GAME_DURATION = 30; // seconds

// Get screen width and height dynamically using Dimensions API
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const App = () => {
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(GAME_DURATION);
  const [targetPosition, setTargetPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState(false);

  // Timer effect (countdown)
  useEffect(() => {
    if (gameOver) return;

    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(timerInterval);
          setGameOver(true);
          alert(`Game Over! Final Score: ${score}`);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [score, gameOver]);

  // Handle target tap (score and reset target position)
  const handleTargetTap = () => {
    if (gameOver) return;
    setScore(score + 10); // Fixed 10 points for each tap
    setTargetPosition(getRandomPosition());
  };

  // Get random position on the screen
  const getRandomPosition = (): { x: number; y: number } => {
    const randomX = Math.floor(Math.random() * (screenWidth - TARGET_SIZE)); // Position within screen width minus target size
    const randomY = Math.floor(Math.random() * (screenHeight - TARGET_SIZE)); // Position within screen height minus target size
    return { x: randomX, y: randomY };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Score: {score}</Text>
      <Text style={styles.timer}>Time Left: {timer}s</Text>

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
