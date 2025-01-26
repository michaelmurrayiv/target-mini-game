import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface TimerProps {
  timer: number;
}

const Timer: React.FC<TimerProps> = ({ timer }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.timer}>Time Left: {timer}s</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 40,
    right: 20,
  },
  timer: {
    fontSize: 24,
  },
});

export default Timer;
