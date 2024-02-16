export default function CookieButton({ cookieClick }) {
  return (
    <>
      <button onClick={() => cookieClick((count) => count + 1)}>
        Click for a Cookie
      </button>
    </>
  );
}

// useEffect for when the item gets bought it changes counter to the multiplier/ modifier of the shop?
