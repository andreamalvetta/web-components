WebComponents.waitFor(async () => {
  return Promise.all([import('./components/author.js'), import('./components/author-quote.js')]);
});
