import React from "react";

export default function HeroAnimationPill({ height = 4, width = 80 }) {
  return (
    <div
      className="hero-animation__pill"
      style={{ "--width": `${width}px`, "--height": `${height}px` }}
    ></div>
  );
}
