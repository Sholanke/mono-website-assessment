import React from "react";

const BUSINESSES = [
  {
    src: "https://monoassets.com/f/118499/x/f1f896ba4f/image-13autochek.svg",
    alt: "auto check",
  },
  {
    src: "https://monoassets.com/f/118499/x/0875cb7d78/image-8quidax.svg",
    alt: "quidax",
  },
  {
    src: "https://monoassets.com/f/118499/x/3c5c720fe5/image-9aella.svg",
    alt: "aella",
  },
  {
    src: "https://monoassets.com/f/118499/x/38e16f083e/image-7renmoney.svg",
    alt: "ren money",
  },
];

export default function HomeBusinesses() {
  return (
    <div className="home-page__businesses section-container ">
      <div className="section-container__content">
        <p>Businesses building with Mono Connect</p>

        <div className="home-page__businesses__logos">
          {BUSINESSES?.map(({ src, alt }) => (
            <figure>
              <img {...{ src, alt }} />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
