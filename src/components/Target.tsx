import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import styles from "../../Styles";

const MIN_SIZE = 10; // Minimum target size
const MAX_SIZE = 100; // Maximum target size
const GROWTH_RATE = 1; // Pixels to grow per interval
const GROWTH_INTERVAL = 50; // Interval in milliseconds

interface TargetProps {
  position: { x: number; y: number };
  onTap: (size: number) => void;
  visible: boolean;
}

const Target: React.FC<TargetProps> = ({ position, onTap, visible }) => {
  const [size, setSize] = useState(MIN_SIZE); // Initialize size at minimum

  // Effect to grow the target over time
  useEffect(() => {
    if (!visible) return; // Stop growth if not visible

    const interval = setInterval(() => {
      setSize((prevSize) => {
        if (prevSize >= MAX_SIZE) {
          return MAX_SIZE;
        }
        return prevSize + GROWTH_RATE; // Increment size
      });
    }, GROWTH_INTERVAL);

    return () => clearInterval(interval); // Cleanup on unmount or visibility change
  }, [visible]);

  if (!visible) return null; // Do not render if not visible

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
    />
  );
};



export default Target;
