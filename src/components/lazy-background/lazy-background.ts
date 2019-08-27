import { LitElement, html, css, customElement, property } from 'lit-element';
import 'lazysizes/plugins/respimg/ls.respimg';
import lazySizes from 'lazysizes';
import isInViewport from '../../utils/isInViewport';
import theme from '../../styles/theme';

/**
 * How to declare:
 *
 * ```
 * <lazy-background class="white" bg="assets/img/bg/bg_1500w_1x.jpg" responsive color="#666"></lazy-background>
 * ```
 */
@customElement('lazy-background')
export class LazyBackground extends LitElement {
  /**
   * Property that allows to set up background url
   */
  @property({ type: String }) bg = '';

  /**
   * Property that allows to declare if the background is responsive or not
   */
  @property({ type: Boolean }) responsive = false;

  /**
   * Property that allows to set up the position of the background image
   */
  @property({ type: String }) position = 'center center';

  /**
   * Property that allows to set up the size of the background image
   */
  @property({ type: String }) size = 'cover';

  /**
   * Property that allows to set up the background color
   */
  @property({ type: String }) color = '#ccc';

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
    this.styleContentWrap();
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
        const shadowImg = this.shadowRoot.querySelector('img');
        shadowImg.addEventListener('lazybeforeunveil', this.showImage(shadowImg));
        shadowImg.addEventListener('load', (e: Event) => {
          const lazyBg = this.shadowRoot.querySelector('.lazy-background-container .lazy-background');
          const target = e.target as HTMLImageElement;
          lazyBg.style.backgroundImage = `url(${target.currentSrc || target.src})`;
          lazyBg.classList.add('loaded');
        });
        window.addEventListener('scroll', () => window.requestAnimationFrame(() => this.showImage(shadowImg)));
        window.addEventListener('resize', () => window.requestAnimationFrame(() => this.showImage(shadowImg)));
      },
      true
    );
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
   * Method to add default stylesheet on the child content
   */
  styleContentWrap() {
    const contentWrapper = this.querySelector('.content');
    if (contentWrapper) {
      contentWrapper.style.padding = '30px';
      contentWrapper.style.position = 'relative';
      contentWrapper.style.zIndex = 2;
    }
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
    let url = this.bg.split('_');
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
      :host {
        margin-bottom: 5px;
        display: block;
        position: relative;
      }
      :host .lazy-background-container {
        position: relative;
        display: block;

        width: 100%;
      }
      :host .lazy-background-container .lazy-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background-repeat: no-repeat;
        opacity: 0;
        z-index: 1;
      }
      :host .lazy-background-container .lazy-background.loaded {
        opacity: 1;
        transition: opacity 300ms;
      }
      :host .bg-img {
        display: none;
      }
    `;
  }

  /**
   * Method to render the component into the DOM
   */
  render(): string {
    return html`
      <div class="lazy-background-container" style="background-color: ${this.color};">
        <div class="lazy-background" style="background-size: ${this.size}; background-position: ${this.position};">
          ${this.responsive
            ? html`
                <img
                  class="bg-img"
                  data-sizes="auto"
                  data-srcset="${theme.imageSizes.map(
                    (size: number, index: number) =>
                      `${index > 0 ? ', ' : ''}${this._imgRootUrl}_${size}w_${this._devicePixelRatio}x.${
                        this._imgExt
                      } ${size * this._devicePixelRatio}w`
                  )}"
                />
              `
            : html`
                <img class="bg-img" data-src="${this.bg}" />
              `}
        </div>
        <slot></slot>
      </div>
    `;
  }
}
