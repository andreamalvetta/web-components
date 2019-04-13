import { LitElement, html } from 'lit-element';
import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/respimg/ls.respimg';
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
    this.sizes = [1500, 800, 480, 320];
    this.isImageLoaded = false;
    this.fit = 'cover';
    this.position = 'center center';
  }

  firstUpdated() {
    this.shadowImg = this.shadowRoot.querySelector('.bg-img');
    this.createContentWrap();
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

  createContentWrap() {
    const content = this.innerHTML;
    let contentWithWrap = `<div class="content">${content}</div>`;
    this.innerHTML = contentWithWrap;
    contentWithWrap = this.querySelector('.content');
    if (contentWithWrap) {
      contentWithWrap.style.padding = '30px';
      contentWithWrap.style.position = 'relative';
      contentWithWrap.style.zIndex = 2;
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
        :host .lazy-background {
          position: relative;
          display: block;
          margin-bottom: 5px;
        }
        :host .bg-container {
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
        :host .bg-img {
          position: absolute;
          display: block;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-position: ${this.position};
          object-fit: ${this.fit};
          font-family: 'object-fit: ${this.fit}';
          opacity: 0;
        }
        :host .bg-img.lazyloaded {
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
            <div class="lazy-background">
              <div class="bg-container">
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
            <div class="lazy-background">
              <div class="bg-container">
                <img class="bg-img" data-src="${this.bg}" data-sizes="auto" />
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
      fit: { type: String },
      color: { type: String }
    };
  }
}

customElements.define('lazy-background', LazyBackground);
