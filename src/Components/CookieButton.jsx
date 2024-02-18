export default function CookieButton({ cookieClick, cps }) {
  return (
    <>
      <button onClick={() => cookieClick((count) => count + cps)}>
        Click for a Cookie
      </button>
    </>
  );
}

// useEffect for when the item gets bought it changes counter to the multiplier/ modifier of the shop?
