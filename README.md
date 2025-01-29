Randomly Appearing Target Mini-Game

Overview  
This is a simple tap-based game built with React Native and TypeScript for iOS. The goal is to tap a randomly appearing target before it grows too large, earning points based on its size. The game demonstrates handling dynamic UI elements, animations, and user interactions in a mobile app.

How to Play

- Tap the circle when it appears on the screen.
- The circle grows in size over time, reducing its point value.
- If it reaches 100px without being tapped, it resets to 10px at a new random position.
- The game lasts 30 seconds, and the final score is displayed at the end.
- Press the replay button to restart.

Scoring System

- 10-20px: 10 points
- 21-30px: 9 points
- 31-40px: 8 points
- 41-50px: 7 points
- 51-60px: 6 points
- 61-70px: 5 points
- 71-80px: 4 points
- 81-90px: 3 points
- 91-100px: 2 points

Running the App (iOS)

Prerequisites

- Node.js (Check with "node -v")
- Expo CLI (Install with "npm install -g expo-cli")
- Xcode (For iOS simulator)

Installation and Running

Running on iOS Simulator

1. Clone the repository:  
   git clone https://github.com/your-repo/random-target-game.git
2. Navigate to the project folder:  
   cd target-mini-game
3. Install Node.js and npm if not already installed
4. Run the expo simulator:  
   npx expo start
5. Open iOS simulator by pressing 'i' or scan the QR code on the Expo Go Mobile app

Running on iPhone (Expo Go)

1. Start the Expo server:  
   npm start
2. Open Expo Go on your iPhone and scan the QR code.

Technical Details

- Built with React Native and TypeScript.
- Uses state and effect hooks (useState, useEffect) for animations and scoring.
- The UI is dynamically updated based on user interactions.

Challenges Faced

1. Organizing Stylesheets – Initially considered a global stylesheet but opted for component-specific styles.
2. Audio Issues – Sound does not play on iPhone unless silent mode is off in Expo Go.
3. Screen Size Differences – Scaled elements based on my phone, which looked slightly off on the iOS simulator.
