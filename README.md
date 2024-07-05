# React Timer Application

This is a React-based timer application that allows users to set a countdown timer with hours, minutes, and seconds. The timer can be controlled via buttons as well as keyboard shortcuts.

## Features

- **Timer Control Buttons**: Increase or decrease the timer values using on-screen buttons.
- **Keyboard Shortcuts**: 
  - Press `s` + `ArrowUp` to increase seconds.
  - Press `s` + `ArrowDown` to decrease seconds.
  - Press `m` + `ArrowUp` to increase minutes.
  - Press `m` + `ArrowDown` to decrease minutes.
  - Press `h` + `ArrowUp` to increase hours.
  - Press `h` + `ArrowDown` to decrease hours.
- **Start/Pause Timer**: Start and pause the timer using a button.
- **Reset Timer**: Reset the timer to zero using a button.
- **Audio Alert**: Play an audio alert when the timer reaches zero.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Abdelrhman-Abdelmoaty22/countDown.git

2. Navigate to the project directory:
   ```bash
   cd react-timer-app
3. Install the dependencies:
   ```bash
   npm install

## Usage

1. Start the application:
   ```bash
   npm start

2. Open your browser and navigate to `http://localhost:3000` to view the app.


## Code Explanation

The main functionality of the timer is implemented in the App component (App.js). Below is an overview of the key parts of the code:

### State Variables
- **`seconds`, `minutes`, `hours`: Store the current time values.
- **`isActive`:Boolean to track if the timer is running.
- **`isReady`:Boolean to check if the timer is ready to start.
- **`isSPressed`, `isMPressed`, `isHPressed`: Booleans to track if the 's', 'm', and 'h' keys are pressed.

### useEffect Hooks

-**Timer interval management: Updates the timer every second when active.
-**Key press handlers: Manage the state of key presses and execute corresponding functions.

### Callback Functions

-**`toggleTimer`: Start or pause the timer.
-**`resetTimer`: Reset the timer to zero.
-**`upSeconds`, `upMinutes`, `upHours`: Increase the timer values.
-**`downSeconds`, `downMinutes`, `downHours`: Decrease the timer values.

### Keyboard Shortcuts
The keyboard shortcuts are handled using `useEffect` hooks which listen for `keydown` and `keyup` events to set the state of key presses and trigger the appropriate timer adjustments.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue.

## Code Description

This React application provides a countdown timer with interactive controls via buttons and keyboard shortcuts. The core functionality includes starting, pausing, and resetting the timer. It also features the ability to increment and decrement hours, minutes, and seconds using both the on-screen buttons and keyboard shortcuts. When the timer reaches zero, an audio alert is played.

The application leverages React hooks such as `useState` for state management and `useEffect` for handling side effects like the timer interval and keyboard event listeners. The `useCallback` hook is used to memoize functions that manage the timer state, ensuring optimal performance. The component's structure is straightforward, ensuring ease of understanding and maintenance.

