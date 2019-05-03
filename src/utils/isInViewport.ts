const isInViewport = (el: HTMLElement, multiplier: number = 1): boolean => {
  const scroll = window.scrollY || window.pageYOffset;
  const boundsTop = el.getBoundingClientRect().top + scroll;

  const viewport = {
    top: scroll,
    bottom: scroll + window.innerHeight * multiplier
  };

  const bounds = {
    top: boundsTop,
    bottom: boundsTop + el.clientHeight * multiplier
  };

  return (
    (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
    (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
  );
};

export default isInViewport;
