/* eslint-disable no-unused-expressions */
// tslint:disable: no-unused-expression no-implicit-dependencies
import { html, fixture, expect } from '@open-wc/testing';

import './lazy-background';

describe('Lazy background component', () => {
  it('is in default state', async () => {
    const el = await fixture('<lazy-background>Lazy background</lazy-background>');
    expect(el).dom.to.equal('<lazy-background>Lazy background</lazy-background>');
  });
});
