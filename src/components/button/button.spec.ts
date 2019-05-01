/* eslint-disable no-unused-expressions */
// tslint:disable: no-unused-expression no-implicit-dependencies
import { fixture, expect } from '@open-wc/testing';

import './button';

describe('Button component', () => {
  it('has default state', async () => {
    const el = await fixture('<custom-button>Default</custom-button>');
    expect(el).dom.to.equal('<custom-button>Default</custom-button>');
    expect(el).dom.to.equalSnapshot();
  });

  it('has primary state', async () => {
    const el = await fixture('<custom-button primary>Primary</custom-button>');
    expect(el.primary).to.be.true;
    expect(el).dom.to.equal('<custom-button primary>Primary</custom-button>');
    expect(el).dom.to.equalSnapshot();
  });

  it('has danger state', async () => {
    const el = await fixture('<custom-button danger>Danger</custom-button>');
    expect(el.danger).to.be.true;
    expect(el).dom.to.equal('<custom-button danger>Danger</custom-button>');
    expect(el).dom.to.equalSnapshot();
  });

  it('has small state', async () => {
    const el = await fixture('<custom-button small>Small</custom-button>');
    expect(el.small).to.be.true;
    expect(el).dom.to.equal('<custom-button small>Small</custom-button>');
    expect(el).dom.to.equalSnapshot();
  });

  it('has large state', async () => {
    const el = await fixture('<custom-button large>Large</custom-button>');
    expect(el.large).to.be.true;
    expect(el).dom.to.equal('<custom-button large>Large</custom-button>');
    expect(el).dom.to.equalSnapshot();
  });

  it('has inverted state', async () => {
    const el = await fixture('<custom-button inverted>Inverted</custom-button>');
    expect(el.inverted).to.be.true;
    expect(el).dom.to.equal('<custom-button inverted>Inverted</custom-button>');
    expect(el).dom.to.equalSnapshot();
  });

  it('has link state', async () => {
    const el = await fixture('<custom-button link>Link</custom-button>');
    expect(el.link).to.be.true;
    expect(el).dom.to.equal('<custom-button link>Link</custom-button>');
    expect(el).dom.to.equalSnapshot();
  });

  it('has disabled state', async () => {
    const el = await fixture('<custom-button disabled>Disabled</custom-button>');
    expect(el.disabled).to.be.true;
    expect(el).dom.to.equal('<custom-button disabled>Disabled</custom-button>');
    expect(el).dom.to.equalSnapshot();
  });

  it('has href attribute', async () => {
    const el = await fixture('<custom-button href="example">Href tag</custom-button>');
    expect(el.href).to.be.equal('example');
    expect(el).dom.to.equal('<custom-button href="example">Href tag</custom-button>');
    expect(el).dom.to.equalSnapshot();
  });

  it('has anchor attribute', async () => {
    const el = await fixture('<custom-button anchor="example">Anchor tag</custom-button>');
    expect(el.anchor).to.be.equal('example');
    expect(el).dom.to.equal('<custom-button anchor="example">Anchor tag</custom-button>');
    expect(el).dom.to.equalSnapshot();
  });

  it('runs handleHref()', async () => {
    const el = await fixture('<custom-button href="example">Href tag</custom-button>');
    el.handleHref();
    expect(el.href).to.be.equal('example');
  });

  it('runs handleAnchor()', async () => {
    const el = await fixture('<custom-button anchor="example">Anchor tag</custom-button>');
    el.handleAnchor();
    expect(el.anchor).to.be.equal('example');
  });
});
