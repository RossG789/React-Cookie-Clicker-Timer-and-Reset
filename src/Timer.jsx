import { useState, useEffect } from "react";

export default function Timer({ count, setCount }) {
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    // Clean Up Function
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>Cookie Count: {count}</h1>
    </div>
  );
}
