import { Workbox } from 'workbox-window';

import './styles/main';

WebComponents.waitFor(async () => {
  return Promise.all([
    import('./components/button'),
    import('./components/lazy-image'),
    import('./components/lazy-background'),
    import('./components/scroll-indicator')
  ]).then(() => document.querySelectorAll('.no-fouc').forEach(item => item.classList.remove('no-fouc')));
});

if ('serviceWorker' in navigator) {
  const wb = new Workbox('sw.js');

  wb.addEventListener('installed', event => {
    if (event.isUpdate) {
      if (confirm(`New content is available!. Click OK to refresh`)) {
        window.location.reload();
      }
    }
  });

  wb.register();
}
