import React from "react";
import { View, Text } from "react-native";
import styles from "../../Styles";

interface ScoreboardProps {
  score: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ score }) => {
  return (
    <View style={styles.scoreContainer}>
      <Text style={styles.score}>Score: {score}</Text>
    </View>
  );
};

export default Scoreboard;
