import React, { useEffect, useState } from "react";
import anime from "animejs";
import { SvgVerified, SvgLoader, SvgDebit } from "../../../ui/icons/";
import HeroAnimationPill from "./HomeHeroPill";

export default function HomeHeroIllustration() {
  const [selectedBankAccount, setSelectedBankAccount] = useState(false);

  useEffect(() => {
    const duration = 1000;
    const offset = `-=${duration - 600}`;

    const tl = anime.timeline({
      easing: "easeOutExpo",
      duration,
    });

    tl.add({
      targets: ".hero-animation .client-app__splash-screen-container",
      opacity: [0, 1],
    })
      .add(
        {
          targets: ".hero-animation .mouse",
          opacity: 1,
        },
        offset
      )
      .add(
        {
          targets: ".hero-animation .mouse",
          translateX: 0,
          translateY: 400,
        },
        offset
      )
      .add(
        {
          targets: ".hero-animation .client-app__button",
          keyframes: [
            { scale: 1 },
            { scale: 0.85 },
            { scale: 1 },
            { scale: 1 },
            { scale: 1 },
          ],
        },
        offset
      )
      .add(
        {
          targets: ".hero-animation__connect-line:nth-child(1) path",
          strokeDashoffset: "0",
          strokeDasharray: [{ value: "200px" }, { value: "5, 5" }],
        },
        offset
      )
      .add(
        {
          targets: ".hero-animation .mouse",
          translateY: 0,
        },
        offset
      )
      .add(
        {
          targets: ".hero-animation .mono-gateway",
          backgroundColor: "#262626",
        },
        `-=1000`
      )
      .add(
        {
          targets: ".hero-animation .mono-gateway__select-bank",
          translateY: 0,
        },
        offset
      )
      .add(
        {
          targets: ".hero-animation .client-app__button",
          background: "#e5e5e5",
        },
        `-=${duration}`
      )
      .add(
        {
          targets: ".hero-animation .mouse",
          translateY: 180,
          translateX: 200,
        },
        offset
      )
      .add(
        {
          targets:
            ".hero-animation .mono-gateway__select-bank .mono-gateway__select-bank__option:nth-child(4)",
          keyframes: [
            { scale: 1 },
            { scale: 0.9 },
            { scale: 1 },
            { scale: 1 },
            { scale: 1 },
          ],
        },
        offset
      )
      .add(
        {
          targets: ".hero-animation .mouse",
          translateY: -70,
        },
        offset
      )
      .add(
        {
          targets: ".hero-animation__connect-line:nth-child(2) path",
          strokeDashoffset: "0",
          strokeDasharray: [{ value: "316px" }, { value: "5, 5" }],
        },
        offset
      )
      .add(
        {
          targets: ".hero-animation__connect-line:nth-child(1) path",
          opacity: 0,
        },
        "-=1000"
      )
      .add(
        {
          targets: ".hero-animation .mono-gateway-accounts__accounts-list",
          translateY: 0,
        },
        offset
      )
      .add(
        {
          targets: ".hero-animation .mouse",
          translateY: 23,
          translateX: 400,
        },
        offset
      )
      .add(
        {
          targets:
            ".hero-animation .mono-gateway-accounts__accounts-list .mono-gateway-accounts__accounts-list__option:nth-child(2)",
          keyframes: [
            { scale: 1 },
            { scale: 0.9 },
            { scale: 1 },
            { scale: 1 },
            { scale: 1 },
          ],
          begin: (anim) => {
            setTimeout(() => {
              setSelectedBankAccount(anim.began);
            }, 400);
          },
        },
        offset
      )
      .add({
        targets: ".hero-animation .mouse",
        translateY: -70,
        translateX: 200,
        opacity: 0,
      })
      .add(
        {
          targets: ".hero-animation__connect-line:nth-child(2) path",
          opacity: [1, 0],
          duration: 500,
        },
        "-=1000"
      )
      .add(
        {
          targets: ".hero-animation__connect-line:nth-child(3) path",
          strokeDashoffset: "0",
          duration: 1300,
          strokeDasharray: [{ value: "373px" }, { value: "5, 5" }],
        },
        offset
      )
      .add(
        {
          targets: ".hero-animation .mono-gateway__select-bank",
          opacity: 0,
          duration: 500,
        },
        offset
      )
      .add(
        {
          targets: ".hero-animation .mono-gateway__loading",
          opacity: [0, 1],
          duration: 500,
        },
        offset
      )
      .add({
        targets: ".hero-animation .mono-gateway__loading",
        opacity: [1, 0],
        duration: 500,
      })
      .add({
        targets: ".hero-animation .mono-gateway__success",
        opacity: [0, 1],
        duration: 500,
      })
      .add(
        {
          targets: ".hero-animation__connect-line:nth-child(3) path",
          opacity: [1, 0],
          duration: 500,
        },
        offset
      )
      .add(
        {
          targets: ".hero-animation__connect-line:nth-child(1) path",
          opacity: [0, 1],
          strokeDashoffset: ["188px", "397px"],
          strokeDasharray: [200, 200],
        },
        offset
      )
      .add(
        {
          targets: ".hero-animation__connect-line:nth-child(1) path",
          strokeDasharray: ["5,5", "5,5"],
        },
        "-=800"
      )
      .add(
        {
          targets: ".hero-animation .client-app__splash-screen-container",
          translateY: "-100%",
        },
        `-=700`
      )
      .add(
        {
          targets: ".hero-animation .client-app__home",
          translateY: 0,
        },
        `-=${duration}`
      );
  }, []);

  return (
    <>
      <div className="hero-animation">
        <div className="hero-animation__screen client-app">
          <div className="client-app__splash-screen-container">
            <div className="client-app__splash-screen">
              <div className="client-app__splash-screen__icon"></div>
              <HeroAnimationPill width={150} height={8} />
              <HeroAnimationPill width={80} height={4} />
            </div>
            <div className="client-app__button">
              <HeroAnimationPill width={80} height={4} />
            </div>
          </div>
          <div
            className="client-app__home"
            style={{ transform: "translateY(100%)" }}
          >
            <div className="client-app__home__header">
              <div className="client-app__home__header__drop-down">
                <HeroAnimationPill width={50} />
              </div>

              <p>N12,000.00</p>
              <HeroAnimationPill height={10} />
            </div>

            {[...Array(5)].map((_, i) => (
              <div key={i} className="client-app__home__transaction">
                <SvgDebit />

                <div>
                  <HeroAnimationPill height={7} width={70} />
                  <HeroAnimationPill height={4} width={50} />
                </div>

                <p>N300.00</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-animation__screen mono-gateway">
          <div
            className="mono-gateway__select-bank"
            style={{ transform: "translateY(100%)" }}
          >
            <div className="mono-gateway__select-bank__search">
              <p>Search Bank</p>
              <div></div>
            </div>
            {[...Array(6)].map((_, i) => (
              <div className="mono-gateway__select-bank__option" key={i}>
                <span></span>
                <div>
                  <HeroAnimationPill width={20} />
                  <HeroAnimationPill width={40} />
                </div>
              </div>
            ))}
          </div>

          <div className="mono-gateway__loading">
            <SvgLoader />
            Authorizing...
          </div>

          <div className="mono-gateway__success">
            <SvgVerified />
            Authorized
          </div>
        </div>

        <div className="hero-animation__screen mono-gateway-accounts">
          <div
            className="mono-gateway-accounts__accounts-list"
            style={{ transform: "translateY(120%)" }}
          >
            <p>Select account</p>
            {[...Array(4)].map((_, i) => (
              <div
                className="mono-gateway-accounts__accounts-list__option"
                data-active={selectedBankAccount && i === 0}
              >
                <HeroAnimationPill height={8} width={70} />
                <HeroAnimationPill height={3} width={40} />
              </div>
            ))}
          </div>
        </div>

        <div className="mouse" style={{ opacity: 0 }}></div>

        <div>
          <svg
            width="87"
            height="232"
            viewBox="0 0 87 232"
            fill="none"
            className="hero-animation__connect-line"
          >
            <path
              d="M1 206.547L72.876 230.184C79.3439 232.311 86 227.493 86 220.685V6.63705e-07"
              stroke="#60A944"
              style={{
                strokeDashoffset: "316px",
                strokeDasharray: "316px",
              }}
            ></path>
          </svg>

          <svg
            width="70"
            height="232"
            viewBox="0 0 56 232"
            fill="none"
            className="hero-animation__connect-line"
          >
            <path
              d="M1.00002 231.5L1.00003 10.8154C1.00003 4.00682 7.65618 -0.811075 14.124 1.31593L55 14.7583"
              stroke="black"
              style={{
                strokeDashoffset: "316px",
                strokeDasharray: "316px",
              }}
            ></path>
          </svg>

          <svg
            width="62"
            height="316"
            viewBox="0 0 62 316"
            fill="none"
            className="hero-animation__connect-line"
          >
            <path
              d="M61.5 4.72401e-07V305.162C61.5 311.977 54.832 316.796 48.3613 314.657L1 299"
              stroke="#61a945"
              style={{
                strokeDashoffset: "373px",
                strokeDasharray: "373px",
              }}
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
