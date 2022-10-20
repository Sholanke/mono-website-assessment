import React, { useEffect } from "react";
import anime from "animejs";

export default function SvgLoader() {
  useEffect(() => {
    anime({
      targets: ".svg-spin",
      rotate: "180deg",
      easing: "linear",
      duration: 500,
      loop: true,
    });
  }, []);

  return (
    <svg viewBox="0 0 24 24" fill="none" className="svg-spin">
      <path
        d="M12 1V6"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12 18V23"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M18 12H23"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M1 12H6"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M19.5562 4L16.0206 7.53553"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M7.53516 16.0208L3.99962 19.5563"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M4 4L7.53553 7.53553"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M16.021 16.0208L19.5565 19.5563"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
