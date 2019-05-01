/* eslint-disable no-unused-expressions */
// tslint:disable: no-unused-expression no-implicit-dependencies
import { fixture, expect } from '@open-wc/testing';

import './lazy-image';

describe('Lazy image component', () => {
  it('has default state', async () => {
    const el = await fixture('<lazy-image>Lazy image</lazy-image>');
    expect(el).dom.to.equal('<lazy-image>Lazy image</lazy-image>');
  });

  it('runs setImgRoot()', async () => {
    const el = await fixture('<lazy-image>Lazy image</lazy-image>');
    const value = el.setImgRoot(['one', 'two']);
    expect(value).to.be.equal('one');
  });

  it('runs setImgExt()', async () => {
    const el = await fixture('<lazy-image>Lazy image</lazy-image>');
    const value = el.setImgExt(['one', 'two']);
    expect(value).to.be.equal('two');
  });

  it('runs setPixelRatio()', async () => {
    const el = await fixture('<lazy-image>Lazy image</lazy-image>');
    el.setPixelRatio();
  });
});
