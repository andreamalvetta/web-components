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
    this.responsive = false;
    this.imgRootUrl = null;
    this.imgExt = null;
    this.devicePixelRatio = 1;
    this.mediaQueries = ['(min-width: 801px)', '(min-width: 481px)', '(min-width: 321px)', '(max-width: 320px)'];
    this.sizes = [1500, 800, 480, 320];
    this.isImageLoaded = false;
  }

  firstUpdated() {
    this.shadowImg = this.shadowRoot.querySelector('.bg');
    if (this.responsive) {
      let url = this.bg.split('_');
      this.setImgRoot(url);
      url = url[2].split('.');
      this.setImgExt(url);
      this.setPixelRatio();
      this.requestUpdate();
    }
    this.shadowImg.addEventListener('lazybeforeunveil', this.showImage());
    window.addEventListener('load', () => this.showImage());
    window.addEventListener('scroll', () => window.requestAnimationFrame(this.showImage.bind(this)));
    window.addEventListener('resize', () => window.requestAnimationFrame(this.showImage.bind(this)));
  }

  showImage() {
    if (isInViewport(this.shadowImg, 1.3) && !this.isImageLoaded) {
      this.isImageLoaded = true;
      lazySizes.loader.unveil(this.shadowImg);

      let bg = '';

      if (this.responsive) {
        // Get loaded image
      } else {
        bg = this.shadowImg.getAttribute('data-bg');
      }

      if (bg) {
        this.shadowImg.style.backgroundImage = `url(${bg})`;
      }
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
        :host .bg-container {
          position: relative;
          display: block;
          margin-bottom: 5px;
        }
        :host .bg-container > .bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: block;
          background-color: ${this.color};
          background-position: ${this.position};
          background-size: cover;
          background-repeat: no-repeat;
          z-index: 1;
        }
        :host .bg-container .bg.lazyloaded {
          opacity: 1;
          transition: opacity 300ms;
        }
        :host .bg-container .bg-content {
          position: relative;
          z-index: 2;
        }
      </style>
    `;
  }

  render() {
    return html`
      ${this.getStyles()}
      ${this.responsive
        ? html`
            <div class="bg-container">
              <div
                class="bg"
                data-sizes="auto"
                data-bgset="${this.mediaQueries &&
                  this.sizes.map(
                    (size, index) =>
                      `${index > 0 ? ' | ' : ''}${this.imgRootUrl}_${size}w_${this.devicePixelRatio}x.${this.imgExt} [${
                        this.mediaQueries[index]
                      }]`
                  )}"
              ></div>
              <div class="bg-content">
                <slot></slot>
              </div>
            </div>
          `
        : html`
            <div class="bg-container">
              <div class="bg" data-bg="${this.bg}"></div>
              <div class="bg-content">
                <slot></slot>
              </div>
            </div>
          `}
    `;
  }

  static get properties() {
    return {
      bg: { type: String },
      responsive: { type: Boolean },
      position: { type: String },
      color: { type: String }
    };
  }
}

customElements.define('lazy-background', LazyBackground);
