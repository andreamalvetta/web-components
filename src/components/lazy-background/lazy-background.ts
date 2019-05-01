import { LitElement, html, customElement, property } from 'lit-element';
import 'lazysizes/plugins/respimg/ls.respimg';
import lazySizes from 'lazysizes';
import isInViewport from '../../utils/isInViewport';
import theme from '../../styles/theme';

@customElement('lazy-background')
export class LazyBackground extends LitElement {
  @property({ type: String }) bg = '';
  @property({ type: Boolean }) responsive = false;
  @property({ type: String }) position = 'center center';
  @property({ type: String }) size = 'cover';
  @property({ type: String }) color = '#ccc';

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
      (e: { target: { currentSrc: string; src: string } }) => {
        const lazyBg = this.shadowRoot.querySelector('.lazy-background-container .lazy-background');
        lazyBg.style.backgroundImage = `url(${e.target.currentSrc || e.target.src})`;
        lazyBg.classList.add('loaded');
      },
      true
    );
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
                  data-srcset="${theme.imageSizes.map(
                    (size: number, index: number) =>
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
}