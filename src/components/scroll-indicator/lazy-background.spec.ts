/* eslint-disable no-unused-expressions */
// tslint:disable: no-unused-expression no-implicit-dependencies
import { html, fixture, expect } from '@open-wc/testing';

import './scroll-indicator';

describe('Scroll indicator component', () => {
  it('is in default state', async () => {
    const el = await fixture('<scroll-indicator></scroll-indicator>');
    expect(el).dom.to.equal('<scroll-indicator></scroll-indicator>');
  });
});
