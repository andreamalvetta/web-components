import { Workbox } from 'workbox-window';

import './styles/main';

WebComponents.waitFor(async () => {
  import('./components/button').then(() => {
    document.querySelectorAll('custom-button').forEach(item => item.classList.remove('no-fouc'));
  });
});
WebComponents.waitFor(async () => {
  import('./components/lazy-image').then(() => {
    document.querySelectorAll('lazy-image').forEach(item => item.classList.remove('no-fouc'));
  });
});
WebComponents.waitFor(async () => {
  import('./components/lazy-background').then(() => {
    document.querySelectorAll('lazy-background').forEach(item => item.classList.remove('no-fouc'));
  });
});
WebComponents.waitFor(async () => {
  import('./components/scroll-indicator');
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
