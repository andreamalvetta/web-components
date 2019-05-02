/* eslint-disable no-unused-expressions */
// tslint:disable: no-unused-expression no-implicit-dependencies
import { html } from 'lit-element';
import { storiesOf } from '@storybook/polymer';
import { action } from '@storybook/addon-actions';

import './button';

storiesOf('Button', module)
  .add(
    'default',
    () =>
      html`
        <custom-button @click="${action('button-click')}">Default</custom-button>
      `
  )
  .add(
    'primary',
    () =>
      html`
        <custom-button primary>Primary</custom-button>
      `
  )
  .add(
    'danger',
    () =>
      html`
        <custom-button danger>Danger</custom-button>
      `
  )
  .add(
    'small',
    () =>
      html`
        <custom-button small>Small</custom-button>
      `
  )
  .add(
    'large',
    () =>
      html`
        <custom-button large>Large</custom-button>
      `
  )
  .add(
    'inverted',
    () =>
      html`
        <custom-button inverted>Inverted</custom-button>
      `
  )
  .add(
    'link',
    () =>
      html`
        <custom-button link>Click me</custom-button>
      `
  )
  .add(
    'disabled',
    () =>
      html`
        <custom-button disabled>Click me</custom-button>
      `
  );
