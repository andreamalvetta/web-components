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
    const dpr = window.devicePixelRatio >= 2 ? 2 : 1;
    const el = await fixture('<lazy-image>Lazy image</lazy-image>');
    el.setPixelRatio();
    expect(el._devicePixelRatio).to.be.equal(dpr);
  });

  it('runs responsiveImgHandler()', async () => {
    const dpr = window.devicePixelRatio >= 2 ? 2 : 1;
    const el = await fixture('<lazy-image src="assets/img/img1/img1_1500w_1x.jpg" responsive>Lazy image</lazy-image>');
    el.responsiveImgHandler();
    expect(el._imgRootUrl).to.be.equal('assets/img/img1/img1');
    expect(el._imgExt).to.be.equal('jpg');
    expect(el._devicePixelRatio).to.be.equal(dpr);
  });
});
