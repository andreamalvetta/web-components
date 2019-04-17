import { Workbox } from 'workbox-window';

import './styles/main';

WebComponents.waitFor(async () => {
  return Promise.all([
    import('./components/button'),
    import('./components/lazy-image'),
    import('./components/lazy-background'),
    import('./components/scroll-indicator')
  ]).then(() => document.querySelector('.no-fouc').classList.remove('no-fouc'));
});

if ('serviceWorker' in navigator) {
  const wb = new Workbox('sw.js');

  wb.addEventListener('waiting', event => {
    if (confirm('New content is available! Click OK to refresh')) {
      wb.addEventListener('controlling', event => {
        window.location.reload();
      });
      wb.messageSW({ type: 'SKIP_WAITING' });
    }
  });
  wb.register();
}
