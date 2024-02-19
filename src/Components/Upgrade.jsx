export default function UpgradeShop(props) {
  const upgrades = [
    { id: 1, upgradeName: "+ 5 Cookies/Click", price: 100, multiplier: 5 },
    { id: 2, upgradeName: "+ 10 Cookies/Click", price: 250, multiplier: 10 },
  ];

  return (
    <div>
      <h1>Cookie Clicker Upgrades Shop</h1>
      {upgrades.map((upgrade) => (
        <div key={upgrade.id}>
          <h2>{upgrade.upgradeName}</h2>
          <button
            onClick={() => {
              //   console.log(props.count);
              if (props.count >= upgrade.price) {
                props.subtractCookies((count) => count - upgrade.price);
                props.upgradeCps((cps) => cps + upgrade.multiplier);
              } else {
                alert("Get yo money up king");
              }
            }}
          >
            Buy for {upgrade.price} cookies
          </button>
        </div>
      ))}
    </div>
  );
}
