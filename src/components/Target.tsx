import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";

const MIN_SIZE = 10; 
const MAX_SIZE = 100; 
const GROWTH_RATE = 1; // px
const GROWTH_INTERVAL = 50; // ms

interface TargetProps {
  position: { x: number; y: number };
  onTap: (size: number) => void;
  visible: boolean;
}

const Target: React.FC<TargetProps> = ({ position, onTap, visible }) => {
  const [size, setSize] = useState(MIN_SIZE); // Initialize size at minimum

  // grow target over time
  useEffect(() => {
    if (!visible) return; // target not visible

    // increment size
    const interval = setInterval(() => {
      setSize((prevSize) => {
        if (prevSize >= MAX_SIZE) {
          return MAX_SIZE;
        }
        return prevSize + GROWTH_RATE;
      });
    }, GROWTH_INTERVAL);

    return () => clearInterval(interval); // cleanup
  }, [visible]);

  if (!visible) return null;

  return (
    <TouchableOpacity
      style={[
        styles.target,
        {
          width: size,
          height: size,
          left: position.x,
          top: position.y,
          borderRadius: size / 2, // Ensure the target remains circular as it grows
        },
      ]}
      onPress={() => {
        setSize(MIN_SIZE); 
        onTap(size);
      }}
      > 
      <View style={[styles.circle, styles.outerCircle]}>
        <View style={[styles.circle, styles.middleCircle]}>
          <View style={[styles.circle, styles.innerCircle]} />
        </View>
      </View></TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  target: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1000, // Large value to ensure perfect circle
  },
  outerCircle: {
    backgroundColor: "red",
    width: "100%",
    height: "100%",
  },
  middleCircle: {
    backgroundColor: "white",
    width: "70%",
    height: "70%",
  },
  innerCircle: {
    backgroundColor: "red",
    width: "40%",
    height: "40%",
  },
});

export default Target;
