/* eslint-disable no-unused-expressions */
// tslint:disable: no-unused-expression no-implicit-dependencies
import { html, fixture, expect } from '@open-wc/testing';

import './lazy-image';

describe('Lazy image component', () => {
  it('is in default state', async () => {
    const el = await fixture('<lazy-image>Lazy image</lazy-image>');
    expect(el).dom.to.equal('<lazy-image>Lazy image</lazy-image>');
  });
});
