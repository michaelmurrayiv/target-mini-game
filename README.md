# Randomly Appearing Target Mini-Game

## Overview

This project is a simple, tap-based game created using **React Native** and **TypeScript**. The player needs to tap a randomly appearing target (a circle) as many times as possible within a set time limit. The target grows in size as time progresses, and its point value decreases as it grows. This mini-game was developed to demonstrate my proficiency with React Native, TypeScript, and handling dynamic UI elements in a mobile app.

## Game Features

### 1. Gameplay:
- A single target (a circle) randomly appears at various positions on the screen.
- Each time the player taps the target, it disappears briefly (300ms) and reappears in a new random location.
- The player earns one point for each successful tap.
- The game lasts for a fixed duration of **30 seconds**.

### 2. User Interface:
- **Score Counter**: Displays the player’s current score at the top of the screen.
- **Timer**: Shows the remaining time for the game session.
- **Target**: A circular shape (starting at **10px** in diameter) that the player taps to score points.

### 3. Target Behavior:
- The target appears at a random position on the screen after every tap.
- It has a brief disappearance (300ms) to simulate a "reappearing" effect.
- The target begins at **10px** in diameter and grows by **1px** every **50ms**.
- If the target reaches **100px** without being tapped, it resets to a random position at **10px**.
  
### 4. Game Over:
- When the timer reaches zero:
  - An alert pops up showing the final score.
  - The target disappears, and the game stops.
  - The game may be restarted using the replay button. 

### 5. Scoring System:
- The point value decreases as the target grows:
  - **10-20px**: 10 points
  - **21-30px**: 9 points
  - **31-40px**: 8 points
  - **41-50px**: 7 points
  - **51-60px**: 6 points
  - **61-70px**: 5 points
  - **71-80px**: 4 points
  - **81-90px**: 3 points
  - **91-100px**: 2 points

## Technical Details

### 1. React Native & TypeScript:
- This game was developed using **React Native** for cross-platform mobile development.
- **TypeScript** was used for static typing and to ensure better code quality, offering clear development structure and preventing type-related bugs.

### 2. Game Logic:
- The game's logic involves handling random positioning, dynamic resizing, time tracking, and user input (tap events).
- The target growth and scoring system are implemented using React's **state** and **effect hooks** to track and update the target's size, position, and score dynamically.

### 3. User Interface:
- The UI is built using React Native components such as `View`, `Text`, and `TouchableOpacity` to structure the game interface.
- The target itself is a simple `View` styled as a circle, and its position and size are managed using the `position` and `transform` styles.

## Installation & Setup

1. Ensure that you have **Node.js** installed on your computer. You can check the installation with:
   ```bash
   node -v
   npm -v
