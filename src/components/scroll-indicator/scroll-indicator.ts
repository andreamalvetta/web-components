import { LitElement, html, css, customElement, property } from 'lit-element';

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
   * TODO
   */
  private _hasMovableBar: boolean;

  /**
   * TODO
   */
  private _innerHeight: number;

  /**
   * TODO
   */
  private _width: string;

  /**
   * Method to add all the available event listeners
   */
  connectedCallback() {
    super.connectedCallback();
    this.innerHeightHandler();
    this.addEventListeners();
  }

  /**
   * Method to remove all the available event listeners
   */
  disconnectedCallback() {
    this.removeEventListeners();
    super.disconnectedCallback();
  }

  /**
   * TODO
   */
  addEventListeners() {
    document.addEventListener(
      'readystatechange',
      () => {
        window.addEventListener('load', () => this.scrollFunction());
        window.addEventListener('scroll', () => window.requestAnimationFrame(this.scrollFunction.bind(this)));
      },
      true
    );
  }

  /**
   * TODO
   */
  removeEventListeners() {
    document.removeEventListener('readystatechange', () => console.log('removed'), true);
    window.removeEventListener('load', () => console.log('removed'), true);
    window.removeEventListener('scroll', () => console.log('removed'), true);
  }

  /**
   * TODO
   */
  innerHeightHandler() {
    if (
      (typeof window.orientation !== 'undefined' && navigator.userAgent.indexOf('Chrome') !== -1) ||
      (typeof window.orientation !== 'undefined' && navigator.userAgent.indexOf('Firefox') !== -1)
    ) {
      this._hasMovableBar = true;
      this._innerHeight = window.innerHeight + 56;
    }

    if (
      (typeof window.orientation !== 'undefined' && navigator.userAgent.indexOf('SamsungBrowser') !== -1) ||
      (typeof window.orientation !== 'undefined' && navigator.userAgent.indexOf('Edg') !== -1)
    ) {
      this._hasMovableBar = true;
      this._innerHeight = window.innerHeight + 112;
    }
  }

  /**
   * TODO
   */
  scrollFunction() {
    this._width = ((this.getWindowScroll() / this.getScrollHeight()) * 100).toFixed(2);
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
    return document.documentElement.scrollHeight - (this._hasMovableBar ? this._innerHeight : window.innerHeight);
  }

  /**
   * Method to attach shadow CSS to the component
   */
  static get styles(): string {
    return css`
      :host .progress-container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
      }
      :host .progress-bar {
        background: #4caf50;
      }
    `;
  }

  /**
   * Method to render the component into the DOM
   */
  render(): string {
    return html`
      <div class="progress-container" style="height: ${this.height}px;">
        <div class="progress-bar" style="height: ${this.height}px; width: ${this._width || 0}%;"></div>
      </div>
    `;
  }
}
