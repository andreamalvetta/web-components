import { LitElement, html } from "lit-element";

class WebComponent extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <style>
        :host {
          background: #1e88e5;
          color: white;
          padding: 2rem 4rem;
          border: 0;
          font-size: 1.5rem;
          display: block;
          margin: 1rem 0;
        }
      </style>
      hello: ${this.msg}
    `;
  }

  static get properties() {
    return {
      msg: { type: String }
    };
  }
}

customElements.define("web-component", WebComponent);
