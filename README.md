# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook that leads to an infinite render loop.  The provided code attempts to update state directly within the effect, creating a circular dependency. This results in the component continuously re-rendering, potentially causing performance issues or even application crashes.

The `bug.js` file contains the faulty code, while `bugSolution.js` demonstrates the corrected implementation.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the infinite re-renders in the browser's console.