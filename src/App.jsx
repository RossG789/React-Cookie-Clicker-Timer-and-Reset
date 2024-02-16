import { useState } from "react";
import "./App.css";
import CookieButton from "./Components/CookieButton";
import Timer from "./Components/Timer";
import UpgradeShop from "./Components/Upgrade";
// import ShopOne from "./Components/ShopOne";

function App() {
  const [count, setCount] = useState(0);

  const [visible, setVisible] = useState(true);

  const toggleElement = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <Timer count={count} setCount={setCount} />
      <CookieButton cookieClick={setCount} />
      <UpgradeShop count={count} multiplyCount={setCount} />
    </div>
  );
}

export default App;
