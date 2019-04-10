import { Workbox } from 'workbox-window';

import './styles/main';

WebComponents.waitFor(async () => {
  return Promise.all([import('./components/button'), import('./components/image')]);
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
