import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ScoreboardProps {
  score: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ score }) => {
  return (
    <View>
      <Text style={styles.score}>Score: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  score: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFD700",
    textShadowColor: "#333",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
export default Scoreboard;
