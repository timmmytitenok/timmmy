"use client";

import { Cursor } from "./Cursor";

const FIRST_LINE = "TIMMMY";
const SECOND_LINE = "TITENOK";

export function TypewriterName() {
  return (
    <h1 className="flex flex-col items-center text-center text-6xl font-bold tracking-[0.08em] sm:text-8xl md:text-9xl">
      <span className="text-white">{FIRST_LINE}</span>
      <span className="mt-2 flex items-center justify-center">
        <span
          className="inline-block overflow-hidden whitespace-nowrap text-white typewriter-reveal"
          style={{
            width: 0,
            animation: "typewriter-reveal 700ms steps(7) forwards",
          }}
        >
          {SECOND_LINE}
        </span>
        <Cursor />
      </span>
    </h1>
  );
}
