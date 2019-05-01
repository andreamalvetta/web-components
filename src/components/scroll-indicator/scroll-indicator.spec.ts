/* eslint-disable no-unused-expressions */
// tslint:disable: no-unused-expression no-implicit-dependencies
import { fixture, expect } from '@open-wc/testing';

import './scroll-indicator';

describe('Scroll indicator component', () => {
  it('has default state', async () => {
    const el = await fixture('<scroll-indicator></scroll-indicator>');
    expect(el).dom.to.equal('<scroll-indicator></scroll-indicator>');
  });

  it('runs init()', async () => {
    const el = await fixture('<scroll-indicator></scroll-indicator>');
    el.init();
  });

  it('runs scrollFunction()', async () => {
    const el = await fixture('<scroll-indicator></scroll-indicator>');
    el.scrollFunction();
  });

  it('runs getWindowScroll()', async () => {
    const el = await fixture('<scroll-indicator></scroll-indicator>');
    el.getWindowScroll();
  });

  it('runs getScrollHeight()', async () => {
    const el = await fixture('<scroll-indicator></scroll-indicator>');
    el.getScrollHeight();
  });
});
