/* eslint-disable no-unused-expressions */
// tslint:disable: no-unused-expression no-implicit-dependencies
import { storiesOf } from '@storybook/polymer';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import './button';

const states = {
  Default: '',
  Primary: 'primary',
  Danger: 'danger',
  Inverted: 'inverted',
  Link: 'link',
  Disabled: 'disabled'
};

const sizes = {
  Default: '',
  Small: 'small',
  Large: 'large'
};

storiesOf('Button', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add(
    'default',
    () =>
      `<custom-button
        ${select('States', states, '')} 
        ${select('Sizes', sizes, '')} 
        @click="${action('button-click')}">
        ${text('Label', 'Default')}
      </custom-button>`
  );
