import { LitElement, html } from 'lit-element';

class AuthorQuote extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <style>
        :host {
          background: red;
          color: white;
          padding: 0;
          border: 0;
          font-size: 1.2rem;
          display: block;
          margin-top: 1rem;
        }
      </style>
      <slot></slot>
    `;
  }

  static get properties() {
    return {
      text: { type: String }
    };
  }
}

customElements.define('author-quote', AuthorQuote);
