import classNames from "classnames";

export interface AnimatedDividerProps {
  color?: "red" | "white";
  size?: number;
  speed?: "default" | 1 | 3 | 5;
}

export function AnimatedDivider(props: AnimatedDividerProps) {
  const { color = "red", size = 5, speed = "default" } = props;

  const cls = classNames(
    "w-full stroke-current",
    { "text-red-600": color === "red" },
    { "text-white": color === "white" }
  );

  const animationClass = classNames(
    "animate-translate",
    { "[animation-duration:1s]": speed === 1 },
    { "[animation-duration:3s]": speed === 3 },
    { "[animation-duration:5s]": speed === 5 },
    "motion-reduce:[animation-duration:10s]"
  );

  return (
    <svg viewBox="0 0 1500 100" className={cls}>
      <pattern
        id="pattern-circles"
        x="0"
        y="0"
        width="200"
        height="100"
        patternUnits="userSpaceOnUse"
      >
        <path
          fill="transparent"
          stroke="currentColor"
          strokeWidth={size}
          d="M 0 50 Q 50 0, 100 50 Q 150 100, 200 50"
        ></path>
      </pattern>
      <rect
        x="0"
        y="0"
        width="200%"
        height="100%"
        fill="url(#pattern-circles)"
        className={animationClass}
        stroke="transparent"
      ></rect>
    </svg>
  );
}
