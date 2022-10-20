import React, { useEffect } from "react";

import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { generateStickyMateClasses } from "../utils";
import { SvgLeft, SvgRight } from "../../../ui/icons";
import { scrollByHeight } from "../../../../utils/scroll";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function HomeIntegration({ steps, bannerStyle = false }) {
  useEffect(() => {
    window.initStickyMate();
  }, []);

  return (
    <div className="section-container home-page__integration">
      <div className="section-container__content">
        <h3 className="home-page__integration__title" data-aos="fade-up">
          How it works
        </h3>
        <p className="home-page__integration__description" data-aos="fade-up">
          Through a swift SDK and API integration, you can start retrieving
          verified data on account information, identity, real-time
          transactions, balances, and income.
        </p>
      </div>

      <div
        className="section-container__content"
        data-sticky={`from: 0, duration: ${steps?.length * 2}00vh`}
      >
        <div className="section-container__content home-page__integration__sticky-content">
          <div className="home-page__integration__header">
            <div className="home-page__integration__header__title">
              <span>
                {steps?.map((_, i) => (
                  <span
                    data-classes={generateStickyMateClasses(
                      i,
                      "active",
                      null,
                      steps?.length - 1 === i ? false : true
                    )}
                    key={i}
                  >
                    {i + 1}
                  </span>
                ))}
              </span>
              <h4>
                {steps?.map((step, i) => (
                  <span
                    data-classes={generateStickyMateClasses(
                      i,
                      "fade-up",
                      null,
                      steps?.length - 1 === i ? false : true
                    )}
                    key={i}
                  >
                    {step?.title}
                  </span>
                ))}
              </h4>
            </div>

            <div className="home-page__integration__header__controls">
              <button
                className="base-button--secondary"
                onClick={() => scrollByHeight(true)}
              >
                <SvgLeft />
              </button>
              <button
                className="base-button--primary"
                onClick={() => scrollByHeight(false)}
              >
                Next <SvgRight />
              </button>
            </div>
          </div>

          {bannerStyle ? (
            <div
              className="home-page__integration__sandbox banner"
              data-animation="opacity: { -100vh: 0, -50vh: 1 }, transform: { -100vh: scale(1.15), -50vh: scale(1) }"
            >
              {steps?.map?.((step, i) => (
                <div
                  className="home-page__integration__banner-image"
                  data-classes={generateStickyMateClasses(
                    i,
                    "active",
                    i === 0 ? -200 : null,
                    steps?.length - 1 === i ? false : true
                  )}
                  key={i}
                >
                  <img src={step?.screen} alt={step?.title} />
                </div>
              ))}
            </div>
          ) : (
            <div
              className="home-page__integration__sandbox"
              data-animation="opacity: { -100vh: 0, -50vh: 1 }, transform: { -100vh: scale(1.15), -50vh: scale(1) }"
            >
              {steps?.map((step, i) => (
                <div
                  className="home-page__integration__sandbox__code"
                  data-classes={generateStickyMateClasses(
                    i,
                    "fade-up",
                    i === 0 ? -50 : null
                  )}
                  key={i}
                >
                  <SyntaxHighlighter language="javascript" style={dracula}>
                    {step?.code}
                  </SyntaxHighlighter>
                </div>
              ))}

              <div className="home-page__integration__sandbox__device">
                {steps?.map((step, i) => (
                  <img
                    className="__device-screen"
                    data-classes={generateStickyMateClasses(
                      i,
                      "active",
                      i === 0 ? -50 : null,
                      false
                    )}
                    src={step.screen}
                    alt={step.title}
                    key={i}
                  />
                ))}

                <img
                  className="__device-frame"
                  src="/assets/images/device-frame.png"
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
