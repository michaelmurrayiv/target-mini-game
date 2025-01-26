import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "../../Styles";
interface TimerProps {
  timer: number;
}

const Timer: React.FC<TimerProps> = ({ timer }) => {
  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timer}>Time Left: {timer}s</Text>
    </View>
  );
};

export default Timer;
