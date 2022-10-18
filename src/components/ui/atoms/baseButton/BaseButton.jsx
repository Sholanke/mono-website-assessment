import React from "react";

export default function BaseButton({ variant = "primary" }) {
  return <button className={`button--${variant}`}>BaseButton</button>;
}
