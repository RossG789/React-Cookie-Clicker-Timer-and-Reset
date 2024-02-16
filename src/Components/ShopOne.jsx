// import { useState } from "react";

// Could this be put in the main app?

export default function ShopOne(props) {
  //   const [shopCount, setShopCount] = useState(0);
  return (
    <div>
      <h1>Buy Something</h1>
      {/* This needs to change the overall count to add 10 */}
      <button onClick={() => props.addShop((count) => count + 10)}>
        Click me to buy a + 10 Multiplier!
      </button>
    </div>
  );
}
