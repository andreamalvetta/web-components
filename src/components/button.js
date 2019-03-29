import { LitElement, html } from 'lit-element';
import theme from '../styles/theme';

class Button extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <style>
        :host {
          border: ${this.inverted ? `1px solid ${theme.primary}` : 'none'};
          border-radius: ${theme.baseRadius};
          cursor: ${this.disabled ? 'not-allowed' : 'pointer'};
          display: inline-block;
          font-family: ${theme.fontSans};
          font-size: ${(this.small && `${parseInt(theme.baseFontSize, 10) * 0.875}px`) ||
          (this.large && `${parseInt(theme.baseFontSize, 10) * 1.375}px`) ||
          theme.baseFontSize};
          font-weight: ${theme.fontSemibold};
          line-height: ${(this.small && '2.2') || (this.large && '1.25') || '2.5'};
          padding: ${this.large ? '16px 25px 17px' : '0 12px'};
          position: relative;
          text-align: center;
          color: ${(this.inverted && theme.primary) || (this.link && theme.baseFontColor) || '#fff'};
          background-color: ${(this.primary && theme.primary) ||
          (this.danger && theme.danger) ||
          ((this.inverted || this.link) && '#fff') ||
          (this.disabled && theme.brandGrey) ||
          theme.brandYellow};
          transition: opacity 0.3s ease-in;
        }

        :host(:hover) {
          opacity: 0.8;
        }

        :host(:hover) slot {
          ${this.link && 'text-decoration: underline;'}
        }
      </style>
      <slot></slot>
    `;
  }

  static get properties() {
    return {
      primary: { type: Boolean },
      danger: { type: Boolean },
      small: { type: Boolean },
      large: { type: Boolean },
      inverted: { type: Boolean },
      link: { type: Boolean },
      disabled: { type: Boolean }
    };
  }
}

customElements.define('custom-button', Button);
