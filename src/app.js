import './styles/main';

WebComponents.waitFor(async () => {
  return Promise.all([import('./components/button')]);
});
