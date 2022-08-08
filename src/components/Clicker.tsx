import React from "react";

export function Clicker() {
  const [counter, setCounter] = React.useState<number>(5);
  return (
    <button
      className="p-2 bg-slate-100 hover:bg-slate-400"
      onClick={() => {
        setCounter((p) => p + 1);
      }}
    >
      {counter}
    </button>
  );
}
