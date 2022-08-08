import React from "react";
import { AnimatedDivider } from "./AnimatedDivider";

interface LetterHeaderProps {
  title: React.ReactNode;
  url: string;
  desc?: React.ReactNode;
}

export function LetterHeader({ title, url, desc }: LetterHeaderProps) {
  return (
    <>
      <div className="relative flex items-center justify-center py-12">
        <div className="absolute">
          <a
            href={url}
            className="p-4 text-5xl bg-opacity-75 md:text-6xl font-brand bg-ryan-black block hover:underline text-center"
          >
            <h1 className="mx-auto max-w-prose">{title}</h1>
          </a>
        </div>
        <AnimatedDivider speed={3} />
      </div>
      {desc ? (
        <>
          <div className="text-center text-lg font-hyper tracking-wide mx-auto max-w-prose">
            {desc}
          </div>
        </>
      ) : null}
    </>
  );
}
