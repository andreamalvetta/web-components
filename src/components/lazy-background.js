import { LitElement, html } from 'lit-element';
import 'lazysizes/plugins/respimg/ls.respimg';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes';
import isInViewport from '../utils/isInViewport';

class LazyBackground extends LitElement {
  constructor() {
    super();
    this.bg = '';
    this.position = 'center center';
    this.color = '#ccc';
    this.size = 'cover';
    this.responsive = false;
    this.imgRootUrl = null;
    this.imgExt = null;
    this.devicePixelRatio = 1;
    this.sizes = [1500, 800, 480, 320];
    this.isImageLoaded = false;
  }

  firstUpdated() {
    this.shadowImg = this.shadowRoot.querySelector('.bg-img');
    this.styleContentWrap();
    if (this.responsive) {
      let url = this.bg.split('_');
      this.setImgRoot(url);
      url = url[2].split('.');
      this.setImgExt(url);
      this.setPixelRatio();
      this.requestUpdate();
    }
    this.shadowImg.addEventListener('lazybeforeunveil', this.showImage(), true);
    this.shadowImg.addEventListener(
      'load',
      e => {
        const lazyBg = this.shadowRoot.querySelector('.lazy-background');
        lazyBg.style.backgroundImage = `url(${e.target.currentSrc || e.target.src})`;
      },
      true
    );
    document.addEventListener('load', () => this.showImage(), true);
    window.addEventListener('scroll', () => window.requestAnimationFrame(this.showImage.bind(this)), true);
    window.addEventListener('resize', () => window.requestAnimationFrame(this.showImage.bind(this)), true);
  }

  styleContentWrap() {
    const contentWrapper = this.querySelector('.content');
    if (contentWrapper) {
      contentWrapper.style.padding = '30px';
      contentWrapper.style.position = 'relative';
      contentWrapper.style.zIndex = 2;
    }
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
        :host {
          position: relative;
          display: block;
          margin-bottom: 5px;
        }
        :host .lazy-background {
          background-color: ${this.color};
          background-size: ${this.size};
          background-position: ${this.position};
          background-repeat: no-repeat;
        }
        :host .bg-img {
          display: none;
        }
      </style>
    `;
  }

  render() {
    return html`
      ${this.getStyles()}
      ${this.responsive
        ? html`
            <div class="lazy-background">
              <img
                class="bg-img"
                data-sizes="auto"
                data-srcset="${this.sizes.map(
                  (size, index) =>
                    `${index > 0 ? ', ' : ''}${this.imgRootUrl}_${size}w_${this.devicePixelRatio}x.${
                      this.imgExt
                    } ${size * this.devicePixelRatio}w`
                )}"
              />
              <slot></slot>
            </div>
          `
        : html`
            <div class="lazy-background">
              <img class="bg-img" data-src="${this.bg}" />
              <slot></slot>
            </div>
          `}
    `;
  }

  static get properties() {
    return {
      bg: { type: String },
      responsive: { type: Boolean },
      position: { type: String },
      size: { type: String },
      color: { type: String }
    };
  }
}

customElements.define('lazy-background', LazyBackground);
