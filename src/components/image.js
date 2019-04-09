import { LitElement, html } from 'lit-element';

class Image extends LitElement {
  constructor() {
    super();
    this.src = '';
    this.alt = '';
    this.responsive = false;
    this.placeholderImg =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsq6mrBwAE8QH5A52ECwAAAABJRU5ErkJggg==';
    this.imgRootUrl = null;
    this.imgExt = null;
    this.devicePixelRatio = 1;
    this.mediaQueries = ['(min-width: 801px)', '(min-width: 481px)', '(min-width: 321px)', '(max-width: 320px)'];
    this.sizes = [1500, 800, 480, 320];
  }

  firstUpdated() {
    const shadowImg = this.shadowRoot.querySelector('.lazy');
    if (this.responsive) {
      let url = this.src.split('_');
      this.setImgRoot(url);
      url = url[2].split('.');
      this.setImgExt(url);
      this.setPixelRatio();
      shadowImg.addEventListener('lazybeforesizes', this.requestUpdate());
    }
    shadowImg.addEventListener('lazybeforeunveil', this.showImage(shadowImg));
  }

  showImage(e) {
    lazySizes.loader.unveil(e);
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
              <img class="lazy" src="${this.placeholderImg}" alt="${this.alt}" />
            </picture>
          `
        : html`
            <img class="lazy" data-src="${this.src}" src="${this.placeholderImg}" alt="${this.alt}" />
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
