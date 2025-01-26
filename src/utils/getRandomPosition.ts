import { Dimensions } from "react-native";

const TARGET_SIZE = 50;
const TOP_AREA_HEIGHT = 80;

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

// get random position for target within the screen and below the score area
export const getRandomPosition = (): { x: number; y: number } => {
  const randomX = Math.floor(Math.random() * (screenWidth - TARGET_SIZE));
  const randomY =
    Math.floor(Math.random() * (screenHeight - TARGET_SIZE - TOP_AREA_HEIGHT)) +
    TOP_AREA_HEIGHT;

  return { x: randomX, y: randomY };
};
