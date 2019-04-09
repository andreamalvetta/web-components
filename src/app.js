import 'lazysizes/plugins/respimg/ls.respimg';
import 'lazysizes';

import './styles/main';

WebComponents.waitFor(async () => {
  return Promise.all([import('./components/button'), import('./components/image')]);
});
