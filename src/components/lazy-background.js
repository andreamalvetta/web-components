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
        const lazyBg = this.shadowRoot.querySelector('.lazy-background-container .lazy-background');
        lazyBg.style.backgroundImage = `url(${e.target.currentSrc || e.target.src})`;
        lazyBg.classList.add('loaded');
      },
      true
    );
    window.addEventListener('load', () => this.showImage(), true);
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
          margin-bottom: 5px;
          display: block;
          position: relative;
        }
        :host .lazy-background-container {
          position: relative;
          display: block;
          background-color: ${this.color};
          width: 100%;
        }
        :host .lazy-background-container .lazy-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: ${this.size};
          background-position: ${this.position};
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
      </style>
    `;
  }

  render() {
    return html`
      ${this.getStyles()}
      ${this.responsive
        ? html`
            <div class="lazy-background-container">
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
              </div>
              <slot></slot>
            </div>
          `
        : html`
            <div class="lazy-background-container">
              <div class="lazy-background">
                <img class="bg-img" data-src="${this.bg}" />
              </div>
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
