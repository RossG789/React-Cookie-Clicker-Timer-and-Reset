import { useEffect } from "react";

export default function Timer(props) {
  useEffect(() => {
    const interval = setInterval(() => {
      props.setCount((count) => count + 1);
    }, 1000);
    // Clean Up Function
    return () => clearInterval(interval);
  }, [props.count]);
  return (
    <div>
      <h1>Cookie Count: {props.count}</h1>
    </div>
  );
}
