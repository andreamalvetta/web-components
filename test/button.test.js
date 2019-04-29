/* eslint-disable no-unused-expressions */
import { html, fixture, expect } from '@open-wc/testing';

import '../src/components/button.ts';

describe('Button component', () => {
  it('is false by default', async () => {
    const el = await fixture('<custom-button>Default</custom-button>');
    expect(el).dom.to.equal('<custom-button>Default</custom-button>');
  });

  //   it('false values will have a light-dom of <p>NOPE</p>', async () => {
  //     const el = await fixture('<get-result></get-result>');
  //     expect(el).dom.to.equal('<get-result><p>NOPE</p></get-result>');
  //   });

  //   it('true values will have a light-dom of <p>YEAH</p>', async () => {
  //     const foo = 1;
  //     const el = await fixture(
  //       html`
  //         <get-result .success=${foo === 1}></get-result>
  //       `
  //     );
  //     expect(el.success).to.be.true;
  //     expect(el).dom.to.equal('<get-result><p>YEAH</p></get-result>');
  //   });
});
