import { LitElement, html } from 'lit-element';

class ScrollIndicator extends LitElement {
  constructor() {
    super();
    this.height = 3;
    this.width = 0;
  }

  firstUpdated() {
    if (typeof window.orientation !== 'undefined') {
      let offset = 56;
      this.hasMovableBar = true;

      if (navigator.userAgent.indexOf('Safari') !== -1) {
        offset = 0;
      }

      if (navigator.userAgent.indexOf('SamsungBrowser') !== -1) {
        offset = 112;
      }

      this.innerHeight = window.innerHeight + offset;
    }

    window.addEventListener('load', () => this.scrollFunction());
    window.addEventListener('scroll', () => window.requestAnimationFrame(this.scrollFunction.bind(this)));
  }

  scrollFunction() {
    this.width = ((this.getWindowScroll() / this.getScrollHeight()) * 100).toFixed(2);
    this.requestUpdate();
  }

  getWindowScroll() {
    return document.body.scrollTop || document.documentElement.scrollTop;
  }

  getScrollHeight() {
    return document.documentElement.scrollHeight - (this.hasMovableBar ? this.innerHeight : window.innerHeight);
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
