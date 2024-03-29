import { LitElement, html, css, customElement, property } from 'lit-element';
import 'lazysizes/plugins/respimg/ls.respimg';
import lazySizes from 'lazysizes';
import isInViewport from '../../utils/isInViewport';
import theme from '../../styles/theme';

/**
 * How to declare:
 *
 * ```
 * <custom-button>Default</custom-button>
 * ```
 */
@customElement('lazy-image')
export class LazyImage extends LitElement {
  /**
   * Property that allows to set up image src
   */
  @property({ type: String }) src = '';

  /**
   * Property that allows to declare if the background is responsive or not
   */
  @property({ type: Boolean }) responsive = false;

  /**
   * Property that allows to set up image alt description
   */
  @property({ type: String }) alt = '';

  /**
   * Property that allows to set up image width
   */
  @property({ type: Number }) width = 0;

  /**
   * Property that allows to set up image height
   */
  @property({ type: Number }) height = 0;

  /**
   * TODO
   */
  private _isImageLoaded: boolean;

  /**
   * TODO
   */
  private _imgRootUrl: string;

  /**
   * TODO
   */
  private _imgExt: string;

  /**
   * TODO
   */
  private _devicePixelRatio: number;

  /**
   * Method to add all the available event listeners
   */
  connectedCallback() {
    super.connectedCallback();
    if (this.responsive) {
      this.responsiveImgHandler();
    }
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
    document.addEventListener('readystatechange', () => {
      const shadowImg = this.shadowRoot.querySelector('img');
      shadowImg.addEventListener('lazybeforeunveil', this.showImage(shadowImg));
      window.addEventListener('scroll', () => window.requestAnimationFrame(() => this.showImage(shadowImg)));
      window.addEventListener('resize', () => window.requestAnimationFrame(() => this.showImage(shadowImg)));
    });
  }

  /**
   * TODO
   */
  removeEventListeners() {
    document.removeEventListener('readystatechange', () => console.log('removed'));
    window.removeEventListener('scroll', () => console.log('removed'));
    window.removeEventListener('resize', () => console.log('removed'));
  }
  /**
   * TODO
   */
  showImage(shadowImg: HTMLElement) {
    if (isInViewport(shadowImg, 1.5) && !this._isImageLoaded) {
      this._isImageLoaded = true;
      lazySizes.loader.unveil(shadowImg);
    }
  }

  /**
   * TODO
   */
  responsiveImgHandler() {
    let url = this.src.split('_');
    this.setImgRoot(url);
    url = url[2].split('.');
    this.setImgExt(url);
    this.setPixelRatio();
    this.requestUpdate();
  }

  /**
   * Method to set up the image root URL
   * @param url Array of string containing image informations
   * @returns Image root URL
   */
  setImgRoot(url: string[]): string {
    this._imgRootUrl = url[0];
    return this._imgRootUrl;
  }

  /**
   * Method to set up the image extension
   * @param url Array of string containing image informations
   * @returns Image extension
   */
  setImgExt(url: string[]): string {
    this._imgExt = url[1];
    return this._imgExt;
  }

  /**
   * Method to device pixel ratio
   * @returns Device pixel ratio value
   */
  setPixelRatio(): number {
    this._devicePixelRatio = window.devicePixelRatio >= 2 ? 2 : 1;
    return this._devicePixelRatio;
  }

  /**
   * Method to attach shadow CSS to the component
   */
  static get styles(): string {
    return css`
      :host picture {
        position: relative;
        display: block;
        margin-bottom: 5px;
      }
      :host picture:after {
        content: '';
        display: block;
        height: 0;
        width: 100%;
      }
      :host picture > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
      }
      :host img {
        width: 100%;
        opacity: 0;
      }
      :host img.lazyloaded {
        opacity: 1;
        transition: opacity 300ms;
      }
    `;
  }

  /**
   * Method to render the component into the DOM
   */
  render(): string {
    return html`
      <style>
        :host picture:after {
          /* 16:9 = 56.25% = calc(9 / 16 * 100%) */
          padding-bottom: ${!isNaN(this.height / this.width) ? ((this.height / this.width) * 100).toFixed(2) : 56.25}%;
        }
      </style>
      ${this.responsive
        ? html`
            <picture>
              ${theme.mediaQueries &&
                theme.imageSizes.map(
                  (size: number, index: number) => html`
                    <source
                      media="${theme.mediaQueries[index]}"
                      data-srcset="${this._imgRootUrl}_${size}w_${this._devicePixelRatio}x.${this._imgExt}"
                    />
                  `
                )}
              <img src="${theme.placeholderImg}" alt="${this.alt}" />
            </picture>
          `
        : html`
            <img data-src="${this.src}" src="${theme.placeholderImg}" alt="${this.alt}" />
          `}
    `;
  }
}
