import { LitElement, html } from 'lit-element';

class ScrollIndicator extends LitElement {
  constructor() {
    super();
    this.height = 5;
    this.width = 0;
  }

  firstUpdated() {
    window.addEventListener('scroll', () => this.scrollFunction());
  }

  scrollFunction() {
    this.width = ((this.getWindowScroll() / this.getScrollHeight()) * 100).toFixed(2);
    this.requestUpdate();
  }

  getWindowScroll() {
    return document.body.scrollTop || document.documentElement.scrollTop;
  }

  getScrollHeight() {
    return document.documentElement.scrollHeight - document.documentElement.clientHeight;
  }

  getStyles() {
    return html`
      <style>
        :host .progress-container {
          height: ${this.height}px;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1;
        }
        :host .progress-bar {
          height: ${this.height}px;
          background: #4caf50;
          width: ${this.width}%;
        }
      </style>
    `;
  }

  render() {
    return html`
      ${this.getStyles()}
      <div class="progress-container">
        <div class="progress-bar"></div>
      </div>
    `;
  }
}

customElements.define('scroll-indicator', ScrollIndicator);
