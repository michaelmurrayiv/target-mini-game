import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ScoreboardProps {
  score: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ score }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.score}>Score: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  score: {
    fontSize: 24,
  },
});

export default Scoreboard;
