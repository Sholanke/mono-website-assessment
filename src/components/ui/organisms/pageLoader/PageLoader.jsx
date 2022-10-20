import anime from "animejs";
import React, { useEffect, useRef } from "react";
import "./index.scss";

export default function PageLoader({ onPageLoad }) {
  const tl = useRef();

  useEffect(() => {
    const duration = 1400;

    tl.current = anime.timeline({
      easing: "cubicBezier(.79, .33, .14, .53)",
      autoplay: false,
      duration,
    });

    tl.current
      .add({
        targets: ".page-loader__mono-logo span:nth-child(1)",
        matrix: "1, 0.37, 0, 0.94, 0, 0",
        duration: 500,
      })
      .add(
        {
          targets: ".page-loader__mono-logo span:nth-child(2)",
          matrix: "1, 0.37, 0, 0.94, 0, 0",
          duration: 500,
        },
        "-=500"
      )
      .add(
        {
          targets: ".page-loader__mono-logo span:nth-child(3)",
          matrix: "1, 0.37, 0, 0.94, 0, 0",
          duration: 500,
        },
        "-=500"
      )
      .add({
        targets: ".page-loader__mono-logo span:nth-child(1)",
        left: -105,
        duration: 500,
      })
      .add(
        {
          targets: ".page-loader__mono-logo span:nth-child(3)",
          duration: 500,
          left: 33,
        },
        "-=500"
      )
      .add({
        targets: ".page-loader",
        clipPath: [
          {
            value: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          },
          {
            value: "polygon(0% 0%, 60% 0%, 50% 100%, 0% 100%)",
          },
          { value: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
        ],
      });

    tl.current.restart();
    tl.current.finished.then(() => {
      onPageLoad();
    });
  }, []);

  return (
    <div className="page-loader">
      <div className="page-loader__mono-logo">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
