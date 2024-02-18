import { useState } from "react";
import "./App.css";
import CookieButton from "./Components/CookieButton";
import Timer from "./Components/Timer";
import UpgradeShop from "./Components/Upgrade";
// import ShopOne from "./Components/ShopOne";

function App() {
  const [count, setCount] = useState(0);
  const [cps, setCps] = useState(1);

  return (
    <div>
      <Timer count={count} setCount={setCount} cps={cps} />
      <CookieButton cookieClick={setCount} cps={cps} />
      <UpgradeShop
        count={count}
        subtractCookies={setCount}
        upgradeCps={setCps}
      />
    </div>
  );
}

export default App;
