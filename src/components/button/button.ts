import { LitElement, html, customElement, property } from 'lit-element';
import theme from '../../styles/theme';
import icon from '../../assets/img/icons/icon-48x48.png';

/**
 * How to declare:
 *
 * ```
 * <lazy-image src="assets/img/img1.jpg" responsive alt="Responsive image" width="1500" height="1000"></lazy-image>
 * ```
 */
@customElement('custom-button')
export class Button extends LitElement {
  /**
   * Property that allows the component to have primary state
   */
  @property({ type: Boolean }) primary = false;

  /**
   * Property that allows the component to have danger state
   */
  @property({ type: Boolean }) danger = false;

  /**
   * Property that allows the component to have small state
   */
  @property({ type: Boolean }) small = false;

  /**
   * Property that allows the component to have large state
   */
  @property({ type: Boolean }) large = false;

  /**
   * Property that allows the component to have inverted state
   */
  @property({ type: Boolean }) inverted = false;

  /**
   * Property that allows the component to have link state
   */
  @property({ type: Boolean }) link = false;

  /**
   * Property that allows the component to have disabled state
   */
  @property({ type: Boolean }) disabled = false;

  /**
   * Property that allows the component to setup a url
   */
  @property({ type: String }) href = '';

  /**
   * Property that allows the component to setup an anchor tag
   */
  @property({ type: String }) anchor = '';

  /**
   * Method to attach shadow CSS to the component
   */
  getStyles(): string {
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

  /**
   * Method to handle the href property on button click
   */
  handleHref() {
    console.log(this.href);
  }

  /**
   * Method to handle the anchor property on button click
   */
  handleAnchor() {
    console.log(this.anchor);
  }

  /**
   * Method to render the component into the DOM
   */
  render(): string {
    return html`
      ${this.getStyles()}
      <button @click="${this.href ? this.handleHref : this.handleAnchor}" ?disabled="${this.disabled}">
        <img src="${icon}" />
        <slot></slot>
      </button>
    `;
  }
}
