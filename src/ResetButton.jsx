export default function ResetButton({ resetCount }) {
  return (
    <>
      <button onClick={() => resetCount(0)}>Reset Counter</button>
    </>
  );
}
