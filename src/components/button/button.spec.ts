/* eslint-disable no-unused-expressions */
// tslint:disable: no-unused-expression no-implicit-dependencies
import { html, fixture, expect } from '@open-wc/testing';

import './button';

describe('Button component', () => {
  it('is in default state', async () => {
    const el = await fixture('<custom-button>Default</custom-button>');
    expect(el).dom.to.equal('<custom-button>Default</custom-button>');
    expect(el).dom.to.equalSnapshot();
  });

  it('is in primary state', async () => {
    const el = await fixture('<custom-button primary>Primary</custom-button>');
    expect(el.primary).to.be.true;
    expect(el).dom.to.equal('<custom-button primary>Primary</custom-button>');
    expect(el).dom.to.equalSnapshot();
  });

  it('is in danger state', async () => {
    const el = await fixture('<custom-button danger>Danger</custom-button>');
    expect(el.danger).to.be.true;
    expect(el).dom.to.equal('<custom-button danger>Danger</custom-button>');
    expect(el).dom.to.equalSnapshot();
  });

  it('is in small state', async () => {
    const el = await fixture('<custom-button small>Small</custom-button>');
    expect(el.small).to.be.true;
    expect(el).dom.to.equal('<custom-button small>Small</custom-button>');
    expect(el).dom.to.equalSnapshot();
  });

  it('is in large state', async () => {
    const el = await fixture('<custom-button large>Large</custom-button>');
    expect(el.large).to.be.true;
    expect(el).dom.to.equal('<custom-button large>Large</custom-button>');
    expect(el).dom.to.equalSnapshot();
  });

  it('is in inverted state', async () => {
    const el = await fixture('<custom-button inverted>Inverted</custom-button>');
    expect(el.inverted).to.be.true;
    expect(el).dom.to.equal('<custom-button inverted>Inverted</custom-button>');
    expect(el).dom.to.equalSnapshot();
  });

  it('is in link state', async () => {
    const el = await fixture('<custom-button link>Link</custom-button>');
    expect(el.link).to.be.true;
    expect(el).dom.to.equal('<custom-button link>Link</custom-button>');
    expect(el).dom.to.equalSnapshot();
  });

  it('is in disabled state', async () => {
    const el = await fixture('<custom-button disabled>Disabled</custom-button>');
    expect(el.disabled).to.be.true;
    expect(el).dom.to.equal('<custom-button disabled>Disabled</custom-button>');
    expect(el).dom.to.equalSnapshot();
  });
});
