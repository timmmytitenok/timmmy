export function Cursor() {
  return (
    <span
      className="inline-block h-[1em] w-0.5 shrink-0 align-middle bg-white"
      style={{
        animation: "cursor-blink 0.9s step-end infinite",
      }}
      aria-hidden
    />
  );
}
