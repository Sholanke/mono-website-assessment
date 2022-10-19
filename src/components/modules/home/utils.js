export const generateStickyMateClasses = (
  i,
  className = "active",
  startPoint,
  remove = true
) => {
  startPoint = startPoint ? `${startPoint}vh` : `${i === 0 ? -2 : i * 2}00vh`;

  return `${startPoint}: {add: ${className}} ${
    remove ? `, ${(i + 1) * 2}00vh: {remove: ${className}}` : ""
  }`;
};
