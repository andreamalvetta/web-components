import { LitElement, html } from 'lit-element';
import isInViewport from '../utils/isInViewport';

class Image extends LitElement {
  constructor() {
    super();
    this.src = '';
    this.alt = '';
    this.responsive = false;
    this.placeholderImg = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2"%3E%3C/svg%3E`;
    this.imgRootUrl = null;
    this.imgExt = null;
    this.devicePixelRatio = 1;
    this.mediaQueries = ['(min-width: 801px)', '(min-width: 481px)', '(min-width: 321px)', '(max-width: 320px)'];
    this.sizes = [1500, 800, 480, 320];
    this.isImageLoaded = false;
    this.resizeEnd = null;
  }

  firstUpdated() {
    this.shadowImg = this.shadowRoot.querySelector('img');
    if (this.responsive) {
      let url = this.src.split('_');
      this.setImgRoot(url);
      url = url[2].split('.');
      this.setImgExt(url);
      this.setPixelRatio();
      this.setImgHeight();
      this.requestUpdate();
    }
    this.shadowImg.addEventListener('lazybeforeunveil', this.showImage());
    window.addEventListener('scroll', event => this.showImage());
    window.addEventListener('resize', () => {
      this.shadowImg.style.height = 'auto';
      clearTimeout(this.resizeEnd);
      this.resizeEnd = setTimeout(() => {
        const evt = new Event('resizeend');
        window.dispatchEvent(evt);
      }, 100);
    });
    window.addEventListener('resizeend', () => {
      this.setImgHeight();
      this.showImage();
    });
  }

  showImage() {
    if (isInViewport(this.shadowImg) && !this.isImageLoaded) {
      this.isImageLoaded = true;
      lazySizes.loader.unveil(this.shadowImg);
    }
  }

  setImgHeight() {
    this.shadowImg.style.height = parseInt((this.shadowImg.width / 3) * 2) + 'px';
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
    if (dpr === 2 || dpr > 2) {
      this.devicePixelRatio = 2;
    }
    return this.devicePixelRatio;
  }

  getStyles() {
    return html`
      <style>
        :host img {
          width: 100%;
          height: auto;
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
