import { LitElement, html, customElement, property } from 'lit-element';
import theme from '../../styles/theme';
import icon from '../../assets/img/icons/icon-48x48.png';

@customElement('custom-button')
export class Button extends LitElement {
  @property({ type: Boolean }) primary = false;
  @property({ type: Boolean }) danger = false;
  @property({ type: Boolean }) small = false;
  @property({ type: Boolean }) large = false;
  @property({ type: Boolean }) inverted = false;
  @property({ type: Boolean }) link = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) href = '';
  @property({ type: String }) anchor = '';

  getStyles() {
    return html`
      <style>
        :host button {
          border: none;
          border-radius: ${theme.baseRadius};
          cursor: pointer;
          display: inline-block;
          font-family: ${theme.fontSans};
          font-size: ${theme.baseFontSize};
          font-weight: ${theme.fontNormal};
          line-height: 2.5;
          padding: 0 12px;
          position: relative;
          text-align: center;
          color: #fff;
          background-color: ${theme.brandYellow};
          transition: opacity 0.3s ease-in;
        }

        :host button:hover {
          opacity: 0.8;
        }

        :host([primary]) button {
          background-color: ${theme.primary};
        }

        :host([danger]) button {
          background-color: ${theme.danger};
        }

        :host([inverted]) button {
          color: ${theme.primary};
          border: 1px solid ${theme.primary};
          background-color: #fff;
        }

        :host([disabled]) button {
          cursor: not-allowed;
          background-color: ${theme.brandGrey};
        }

        :host([small]) button {
          font-size: ${parseInt(theme.baseFontSize, 10) * 0.875}px;
          line-height: 2.2;
        }

        :host([large]) button {
          font-size: ${parseInt(theme.baseFontSize, 10) * 1.375}px;
          line-height: 1.25;
          padding: 16px 25px 17px;
        }

        :host([link]) button {
          color: ${theme.baseFontColor};
          background-color: #fff;
        }

        :host([link]) button:hover {
          text-decoration: underline;
        }

        :host button img {
          width: 20px;
          position: relative;
          margin-right: 8px;
          overflow: hidden;
          border-radius: 50%;
          margin-top: 10px;
          float: left;
        }

        :host([large]) button img {
          margin-top: 4px;
        }

        :host([small]) button img {
          margin-top: 5px;
        }
      </style>
    `;
  }

  handleHref() {
    console.log(this.href);
  }

  handleAnchor() {
    console.log(this.anchor);
  }

  render() {
    return html`
      ${this.getStyles()}
      <button @click="${this.href ? this.handleHref : this.handleAnchor}" ?disabled="${this.disabled}">
        <img src="${icon}" />
        <slot></slot>
      </button>
    `;
  }
}