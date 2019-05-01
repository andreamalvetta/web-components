/* eslint-disable no-unused-expressions */
// tslint:disable: no-unused-expression no-implicit-dependencies
import { fixture, expect } from '@open-wc/testing';

import './lazy-background';

describe('Lazy background component', () => {
  it('has default state', async () => {
    const el = await fixture('<lazy-background>Lazy background</lazy-background>');
    expect(el).dom.to.equal('<lazy-background>Lazy background</lazy-background>');
  });

  it('runs styleContentWrap()', async () => {
    const el = await fixture('<lazy-background>Lazy background</lazy-background>');
    el.styleContentWrap();
  });

  it('runs setImgRoot()', async () => {
    const el = await fixture('<lazy-background>Lazy background</lazy-background>');
    const value = el.setImgRoot(['one', 'two']);
    expect(value).to.be.equal('one');
  });

  it('runs setImgExt()', async () => {
    const el = await fixture('<lazy-background>Lazy background</lazy-background>');
    const value = el.setImgExt(['one', 'two']);
    expect(value).to.be.equal('two');
  });

  it('runs setPixelRatio()', async () => {
    const el = await fixture('<lazy-background>Lazy background</lazy-background>');
    el.setPixelRatio();
  });
});
