export default function UpgradeShop(props) {
  const upgrades = [
    { id: 1, upgradeName: "1.2 x Multiplier", price: 100, multiplier: 5 },
    { id: 2, upgradeName: "1.5 x Multiplier", price: 250, multiplier: 10 },
  ];

  return (
    <div>
      <h1>Cookie Clicker Upgrades Shop</h1>
      {upgrades.map((upgrade) => (
        <div key={upgrade.id}>
          <h2>{upgrade.upgradeName}</h2>
          <button
            onClick={() =>
              props.multiplyCount((count) => count + upgrade.multiplier)
            }
          >
            Buy for {upgrade.price} cookies
          </button>
        </div>
      ))}
    </div>
  );
}
