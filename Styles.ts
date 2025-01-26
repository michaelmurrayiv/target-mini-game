import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  target: {
    position: "absolute",
    backgroundColor: "red",
  },
  scoreContainer: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  score: {
    fontSize: 24,
  },
  timerContainer: {
    position: "absolute",
    top: 40,
    right: 20,
  },
  timer: {
    fontSize: 24,
  },
});

export default styles;