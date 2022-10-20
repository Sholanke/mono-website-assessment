import React from "react";
import { SvgExternal } from "../../../ui/icons";

const FEATURES = [
  {
    src: "https://monoassets.com/f/118499/x/04b09ee182/icon_plug-and-play-sdks.svg",
    title: "Plug-and-play SDKs",
    cta: "Explore SDKs",
    doc: "",
  },
  {
    src: "https://monoassets.com/f/118499/x/04b09ee182/icon_plug-and-play-sdks.svg",
    title: "Beautiful, seamless UX",
    cta: "See a demo",
    doc: "",
  },
  {
    src: "https://monoassets.com/f/118499/x/04b09ee182/icon_plug-and-play-sdks.svg",
    title: "Always-on support",
    cta: "Join us on Slack",
    doc: "",
  },
];

export default function HomeGetStarted() {
  return (
    <div className="section-container home-page__get-started">
      <div className="section-container__content">
        <h1 className="home-page__get-started__title" data-aos="fade-up">
          Getting Started
        </h1>

        <div
          className="home-page__get-started__feature-card"
          data-aos="fade-up"
        >
          <div className="home-page__get-started__feature-card__text">
            <img
              src="https://monoassets.com/f/118499/x/10923dd075/icon_powerful-apis-1.svg"
              alt="mono get started api"
            />
            <h3>Powerful APIs and easy integrations</h3>

            <a href="/" className="base-button--link">
              Read our API docs <SvgExternal />
            </a>
          </div>
          <div className="home-page__get-started__feature-card__image">
            <img
              src="https://monoassets.com/f/118499/540x380/1298b7c253/api-response-frame.png"
              alt="mono integration"
            />
          </div>
        </div>

        <div className="home-page__get-started__feature-list">
          {FEATURES?.map((feature, i) => (
            <div
              className="home-page__get-started__feature-card"
              data-aos="fade-up"
              key={i}
            >
              <div className="home-page__get-started__feature-card__text">
                <img
                  src="https://monoassets.com/f/118499/x/10923dd075/icon_powerful-apis-1.svg"
                  alt="mono get started api"
                />
                <h3>{feature?.title}</h3>

                <a href="/" className="base-button--link">
                  {feature?.cta} <SvgExternal />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
