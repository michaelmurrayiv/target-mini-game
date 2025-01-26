import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface TimerProps {
  timer: number;
}

const Timer: React.FC<TimerProps> = ({ timer }) => {
  return (
    <View>
      <Text style={styles.timer}>Time Left: {timer}s</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    timer: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FF4500",
    textShadowColor: "#333",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default Timer;
