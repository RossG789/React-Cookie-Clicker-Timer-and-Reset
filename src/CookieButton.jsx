export default function CookieButton({ cookieClick }) {
  return (
    <>
      <button onClick={() => cookieClick((count) => count + 1)}>Cookie</button>
    </>
  );
}
