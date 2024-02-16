import { useState } from "react";
import "./App.css";
import CookieButton from "./CookieButton";
import Timer from "./Timer";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Timer count={count} setCount={setCount} />
      <CookieButton cookieClick={setCount} />
    </div>
  );
}

export default App;
