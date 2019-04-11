import { Workbox } from 'workbox-window';

import './styles/main';

WebComponents.waitFor(async () => {
  return Promise.all([
    import('./components/button'),
    import('./components/lazy-image'),
    import('./components/scroll-indicator')
  ]);
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
