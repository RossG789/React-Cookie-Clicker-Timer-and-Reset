import { useState } from "react";
import "./App.css";
import ResetButton from "./ResetButton";
import Timer from "./Timer";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Timer count={count} setCount={setCount} />
      <ResetButton resetCount={setCount} />
    </div>
  );
}

export default App;
