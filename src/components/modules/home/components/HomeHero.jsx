import anime from "animejs";
import React, { useEffect, useRef } from "react";
import { SvgRight } from "../../../ui/icons";
import HomeHeroIllustration from "./HomeHeroIllustration";

export default function HomeHero({ pageLoaded }) {
  const tl = useRef();

  useEffect(() => {
    const duration = 1000;
    const offset = `-=${duration - 200}`;

    tl.current = anime.timeline({
      easing: "easeOutExpo",
      autoplay: false,
      duration,
    });

    tl.current
      .add({
        targets: ".home-page__hero__text h1",
        translateY: [100, 0],
        opacity: [0, 1],
      })
      .add(
        {
          targets: ".home-page__hero__text p",
          translateY: [50, 0],
          opacity: [0, 1],
        },
        offset
      )
      .add(
        {
          targets: ".home-page__hero__actions",
          translateY: [20, 0],
          opacity: [0, 1],
        },
        offset
      );
  }, []);

  useEffect(() => {
    if (pageLoaded) tl.current?.play?.();
  }, [pageLoaded]);

  return (
    <div className="home-page__hero section-container">
      <div className="home-page__hero__content section-container__content">
        <div className="home-page__hero__text">
          <h1>Access real-time financial data</h1>
          <p>
            Securely access your customers' bank statements, transactions,
            income, identity, and much more.
          </p>
          <div className="home-page__hero__actions">
            <button className="base-button--primary">
              Get started with connect
              <SvgRight />
            </button>
            <button className="base-button--secondary">
              Contact Sales
              <SvgRight />
            </button>
          </div>
        </div>
        <div className="home-page__hero__illustration">
          <HomeHeroIllustration {...{ pageLoaded }} />
        </div>
      </div>
    </div>
  );
}
