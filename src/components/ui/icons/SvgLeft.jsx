import React from "react";

export default function SvgLeft() {
  return (
    <svg
      style={{transform: "rotate(180deg)"}}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M6 10H14"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M10 6L14 10L10 14"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
