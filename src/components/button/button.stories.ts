/* eslint-disable no-unused-expressions */
// tslint:disable: no-unused-expression no-implicit-dependencies
import { storiesOf } from '@storybook/polymer';
import { action } from '@storybook/addon-actions';

import './button';

storiesOf('Button', module)
  .add('default', () => '<custom-button>Default</custom-button>')
  .add('primary', () => '<custom-button primary>Primary</custom-button>')
  .add('danger', () => '<custom-button danger>Danger</custom-button>')
  .add('small', () => '<custom-button small>Small</custom-button>')
  .add('large', () => '<custom-button large>Large</custom-button>')
  .add('inverted', () => '<custom-button inverted>Inverted</custom-button>')
  .add('link', () => '<custom-button link>Click me</custom-button>')
  .add('disabled', () => '<custom-button disabled>Click me</custom-button>');
