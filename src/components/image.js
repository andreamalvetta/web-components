import { LitElement, html } from 'lit-element';

class Image extends LitElement {
  constructor() {
    super();
    this.src = '#';
    this.alt = '';
    this.responsive = false;
    this.lazy = false;
    this.addEventListener('lazybeforeunveil', this.unveil);
  }

  unveil() {
    console.log('unveil');
  }

  render() {
    return html`
      ${this.responsive
        ? html`
            <picture>
              <source
                media="(min-width: 801px)"
                data-srcset="./images/img5/img5_1500w_1x.jpg 1x, ./images/img5/img5_1500w_2x.jpg 2x"
              />
              <source
                media="(min-width: 481px)"
                data-srcset="./images/img5/img5_800w_1x.jpg 1x, ./images/img5/img5_800w_2x.jpg 2x"
              />
              <source
                media="(min-width: 321px)"
                data-srcset="./images/img5/img5_480w_1x.jpg 1x, ./images/img5/img5_480w_2x.jpg 2x"
              />
              <source data-srcset="./images/img5/img5_320w_1x.jpg 1x, ./images/img5/img5_320w_2x.jpg 2x" />
              <img
                data-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsq6mrBwAE8QH5A52ECwAAAABJRU5ErkJggg=="
                alt="${this.alt}"
                class="${this.lazy ? 'lazyload' : ''}"
              />
            </picture>
          `
        : html`
            <img
              data-src="${this.lazy ? this.src : ''}"
              src="${!this.lazy ? this.src : '#'}"
              alt="${this.alt}"
              class="${this.lazy ? 'lazyload' : ''}"
            />
          `}
    `;
  }

  static get properties() {
    return {
      src: { type: String },
      responsive: { type: Boolean },
      alt: { type: String },
      lazy: { type: Boolean }
    };
  }
}

customElements.define('custom-image', Image);
