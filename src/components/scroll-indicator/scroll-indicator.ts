import { LitElement, html, customElement, property } from 'lit-element';

/**
 * How to declare:
 *
 * ```
 * <scroll-indicator></scroll-indicator>
 * ```
 */
@customElement('scroll-indicator')
export class ScrollIndicator extends LitElement {
  /**
   * Property that allows to set up component height
   */
  @property({ type: Number }) height = 3;

  /**
   * Method to add all the available event listeners
   */
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('readystatechange', () => this.init(), true);
  }

  /**
   * Method to remove all the available event listeners
   */
  disconnectedCallback() {
    document.removeEventListener('readystatechange', () => console.log('removed'), true);
    window.removeEventListener('load', () => console.log('removed'), true);
    window.removeEventListener('scroll', () => console.log('removed'), true);
    super.disconnectedCallback();
  }

  /**
   * Main init method (called after the component has been added into the DOM)
   */
  init() {
    if (
      (typeof window.orientation !== 'undefined' && navigator.userAgent.indexOf('Chrome') !== -1) ||
      (typeof window.orientation !== 'undefined' && navigator.userAgent.indexOf('Firefox') !== -1)
    ) {
      this.hasMovableBar = true;
      this.innerHeight = window.innerHeight + 56;
    }

    if (
      (typeof window.orientation !== 'undefined' && navigator.userAgent.indexOf('SamsungBrowser') !== -1) ||
      (typeof window.orientation !== 'undefined' && navigator.userAgent.indexOf('Edg') !== -1)
    ) {
      this.hasMovableBar = true;
      this.innerHeight = window.innerHeight + 112;
    }

    window.addEventListener('load', () => this.scrollFunction());
    window.addEventListener('scroll', () => window.requestAnimationFrame(this.scrollFunction.bind(this)));
  }

  /**
   * TODO
   */
  scrollFunction() {
    this.width = ((this.getWindowScroll() / this.getScrollHeight()) * 100).toFixed(2);
    this.requestUpdate();
  }

  /**
   * TODO
   */
  getWindowScroll(): number {
    return document.body.scrollTop || document.documentElement.scrollTop;
  }

  /**
   * TODO
   */
  getScrollHeight(): number {
    return document.documentElement.scrollHeight - (this.hasMovableBar ? this.innerHeight : window.innerHeight);
  }

  /**
   * Method to attach shadow CSS to the component
   */
  getStyles(): string {
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
          width: ${this.width || 0}%;
        }
      </style>
    `;
  }

  /**
   * Method to render the component into the DOM
   */
  render(): string {
    return html`
      ${this.getStyles()}
      <div class="progress-container">
        <div class="progress-bar"></div>
      </div>
    `;
  }
}
