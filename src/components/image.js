import { LitElement, html } from 'lit-element';
import 'lazysizes/plugins/respimg/ls.respimg';
import 'lazysizes';
import isInViewport from '../utils/isInViewport';

class Image extends LitElement {
  constructor() {
    super();
    this.src = '';
    this.alt = '';
    this.responsive = false;
    this.placeholderImg = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
    this.imgRootUrl = null;
    this.imgExt = null;
    this.devicePixelRatio = 1;
    this.mediaQueries = ['(min-width: 801px)', '(min-width: 481px)', '(min-width: 321px)', '(max-width: 320px)'];
    this.sizes = [1500, 800, 480, 320];
    this.isImageLoaded = false;
  }

  firstUpdated() {
    this.shadowImg = this.shadowRoot.querySelector('img');
    if (this.responsive) {
      let url = this.src.split('_');
      this.setImgRoot(url);
      url = url[2].split('.');
      this.setImgExt(url);
      this.setPixelRatio();
      this.requestUpdate();
    }
    this.shadowImg.addEventListener('lazybeforeunveil', this.showImage());
    window.addEventListener('scroll', () => this.showImage());
    window.addEventListener('resize', () => this.showImage());
  }

  showImage() {
    if (isInViewport(this.shadowImg, 1.5) && !this.isImageLoaded) {
      this.isImageLoaded = true;
      lazySizes.loader.unveil(this.shadowImg);
    }
  }

  setImgRoot(url) {
    this.imgRootUrl = url[0];
    return this.imgRootUrl;
  }

  setImgExt(url) {
    this.imgExt = url[1];
    return this.imgExt;
  }

  setPixelRatio() {
    const dpr = window.devicePixelRatio;
    if (dpr >= 2) {
      this.devicePixelRatio = 2;
    }
    return this.devicePixelRatio;
  }

  getStyles() {
    return html`
      <style>
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
          /* 16:9 = 56.25% = calc(9 / 16 * 100%) */
          padding-bottom: 66.66%;
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
        }
      </style>
    `;
  }

  render() {
    return html`
      ${this.getStyles()}
      ${this.responsive
        ? html`
            <picture>
              ${this.mediaQueries &&
                this.sizes.map(
                  (size, index) => html`
                    <source
                      media="${this.mediaQueries[index]}"
                      data-srcset="${this.imgRootUrl}_${size}w_${this.devicePixelRatio}x.${this.imgExt}"
                    />
                  `
                )}
              <img src="${this.placeholderImg}" alt="${this.alt}" />
            </picture>
          `
        : html`
            <img data-src="${this.src}" src="${this.placeholderImg}" alt="${this.alt}" />
          `}
    `;
  }

  static get properties() {
    return {
      src: { type: String },
      responsive: { type: Boolean },
      alt: { type: String }
    };
  }
}

customElements.define('lazy-image', Image);
