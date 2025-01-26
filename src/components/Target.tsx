import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

const TARGET_SIZE = 50;

interface TargetProps {
  position: { x: number; y: number };
  onTap: () => void;
  visible: boolean;
}

const Target: React.FC<TargetProps> = ({ position, onTap, visible }) => {
  if (!visible) return null;

  return (
    <TouchableOpacity
      style={[
        styles.target,
        {
          width: TARGET_SIZE,
          height: TARGET_SIZE,
          left: position.x,
          top: position.y,
        },
      ]}
      onPress={onTap}
    />
  );
};

const styles = StyleSheet.create({
  target: {
    position: "absolute",
    borderRadius: TARGET_SIZE / 2, // Circular shape
    backgroundColor: "red",
  },
});

export default Target;
