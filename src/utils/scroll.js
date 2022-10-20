export const scrollByHeight = (reverse = false) => {
  window.scrollBy(
    0,
    reverse ? window.innerHeight * -2 : window.innerHeight * 2
  );

  window.initStickyMate();
};
