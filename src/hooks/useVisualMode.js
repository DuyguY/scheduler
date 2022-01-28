import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setMode(newMode);
    if (replace === true) {
      setHistory((prevHistory) => [...prevHistory.slice(0, -1), newMode]);
    } else {
      setHistory((prevHistory) => [...prevHistory, newMode]);
    }
  }
  function back() {
    if (history.length < 2) {
      return;
    }
    const prevMode = history[history.length - 2];
    setMode(prevMode);
    setHistory((prevHistory) => [...prevHistory.slice(0, -1)]);
  }
  return { mode, transition, back };
}
