import { LitElement, html } from 'lit-element';
import 'lazysizes';

class Image extends LitElement {
  constructor() {
    super();
    this.src = '';
    this.alt = '';
    this.responsive = false;
    this.lazy = false;
    this.placeholderImg =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsq6mrBwAE8QH5A52ECwAAAABJRU5ErkJggg==';
  }

  firstUpdated() {
    if (this.responsive) {
      let url = this.src.split('_');
      this.imgRootUrl = url[0];
      url = url[2].split('.');
      this.imgExt = url[1];
      this.requestUpdate();
    }

    const shadowImg = this.shadowRoot.querySelector('img');
    shadowImg.addEventListener('lazybeforeunveil', this.unveil(shadowImg));
  }

  unveil(e) {
    lazySizes.loader.unveil(e);
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
              <source
                media="(min-width: 801px)"
                data-srcset="${this.imgRootUrl}_1500w_1x.${this.imgExt} 1x, ${this.imgRootUrl}_1500w_2x.${this
                  .imgExt} 2x"
              />
              <source
                media="(min-width: 481px)"
                data-srcset="${this.imgRootUrl}_800w_1x.${this.imgExt} 1x, ${this.imgRootUrl}_800w_2x.${this.imgExt} 2x"
              />
              <source
                media="(min-width: 321px)"
                data-srcset="${this.imgRootUrl}_480w_1x.${this.imgExt} 1x, ${this.imgRootUrl}_480w_2x.${this.imgExt} 2x"
              />
              <source
                data-srcset="${this.imgRootUrl}_320w_1x.${this.imgExt} 1x, ${this.imgRootUrl}_320w_2x.${this.imgExt} 2x"
              />
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
