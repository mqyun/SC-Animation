const asyncAnimate = options => {
  return new Promise((resolve, reject) => {
    options.dom.animate(options.options, options.time, options.easing || null, () => {
      resolve();
    });
  });
}

export {
  asyncAnimate
}
