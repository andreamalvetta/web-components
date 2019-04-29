import { LitElement, html, customElement, property } from 'lit-element';
import 'lazysizes/plugins/respimg/ls.respimg';
import lazySizes from 'lazysizes';
import isInViewport from '../utils/isInViewport';
import theme from '../styles/theme';

@customElement('lazy-image')
export class LazyImage extends LitElement {
  @property({ type: String }) src = '';
  @property({ type: Boolean }) responsive = false;
  @property({ type: String }) alt = '';
  @property({ type: Number }) width = 0;
  @property({ type: Number }) height = 0;

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('readystatechange', () => this.init(), true);
  }

  disconnectedCallback() {
    document.removeEventListener('readystatechange', () => console.log('removed'), true);
    window.removeEventListener('scroll', () => console.log('removed'), true);
    window.removeEventListener('resize', () => console.log('removed'), true);
    super.disconnectedCallback();
  }

  init() {
    this.shadowImg = this.shadowRoot.querySelector('img');
    if (this.responsive) {
      let url = this.src.split('_');
      this.setImgRoot(url);
      url = url[2].split('.');
      this.setImgExt(url);
      this.setPixelRatio();
      this.requestUpdate();
    }
    this.shadowImg.addEventListener('lazybeforeunveil', this.showImage(), true);
    window.addEventListener('scroll', () => window.requestAnimationFrame(this.showImage.bind(this)), true);
    window.addEventListener('resize', () => window.requestAnimationFrame(this.showImage.bind(this)), true);
  }

  showImage() {
    if (isInViewport(this.shadowImg, 1.5) && !this.isImageLoaded) {
      this.isImageLoaded = true;
      lazySizes.loader.unveil(this.shadowImg);
    }
  }

  setImgRoot(url: string[]) {
    this.imgRootUrl = url[0];
    return this.imgRootUrl;
  }

  setImgExt(url: string[]) {
    this.imgExt = url[1];
    return this.imgExt;
  }

  setPixelRatio() {
    this.devicePixelRatio = window.devicePixelRatio >= 2 ? 2 : 1;
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
          padding-bottom: ${!isNaN(this.height / this.width) ? ((this.height / this.width) * 100).toFixed(2) : 56.25}%;
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
      </style>
    `;
  }

  render() {
    return html`
      ${this.getStyles()}
      ${this.responsive
        ? html`
            <picture>
              ${theme.mediaQueries &&
                theme.imageSizes.map(
                  (size: number, index: number) => html`
                    <source
                      media="${theme.mediaQueries[index]}"
                      data-srcset="${this.imgRootUrl}_${size}w_${this.devicePixelRatio}x.${this.imgExt}"
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
