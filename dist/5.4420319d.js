(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    4: function(n, e, o) {
      'use strict';
      o.r(e);
      var t = o(6),
        r = {
          brandBlue: 'rgb(12, 122, 192)',
          brandRed: 'rgb(179, 32, 35)',
          brandYellow: 'rgb(244, 167, 0)',
          brandGrey: 'rgb(84, 106, 120)',
          primary: 'rgb(12, 122, 192)',
          secondary: 'rgb(84, 106, 120)',
          warning: 'rgb(244, 167, 0)',
          danger: 'rgb(179, 32, 35)',
          fontMono: "'Courier', monospace",
          fontSans: "'Source Sans Pro', 'Arial', sans-serif",
          fontSerif: "'Bree Serif', 'Times', serif",
          baseFontColor: 'rgb(84, 106, 120)',
          baseFontFamily: "'Source Sans Pro', 'Arial', sans-serif",
          baseFontSize: '16px',
          fontNormal: 400,
          fontSemibold: 600,
          fontBold: 700,
          baseLineHeight: 1.5,
          headings: '6 5 4 3 2 1',
          baseBorder: '1px solid rgb(84, 106, 120)',
          baseRadius: '0.25rem',
          baseBoxShadow: 'rgba(42, 53, 60, 0.2) 0 0 5px'
        };
      function a() {
        const n = babelHelpers.taggedTemplateLiteral([
          '\n      ',
          '\n      <button @click="',
          '" ?disabled="',
          '">\n        <slot></slot>\n      </button>\n    '
        ]);
        return (
          (a = function() {
            return n;
          }),
          n
        );
      }
      function s() {
        const n = babelHelpers.taggedTemplateLiteral([
          '\n      <style>\n        :host button {\n          border: none;\n          border-radius: ',
          ';\n          cursor: pointer;\n          display: inline-block;\n          font-family: ',
          ';\n          font-size: ',
          ';\n          font-weight: ',
          ';\n          line-height: 2.5;\n          padding: 0 12px;\n          position: relative;\n          text-align: center;\n          color: #fff;\n          background-color: ',
          ';\n          transition: opacity 0.3s ease-in;\n        }\n\n        :host button:hover {\n          opacity: 0.8;\n        }\n\n        :host([primary]) button {\n          background-color: ',
          ';\n        }\n\n        :host([danger]) button {\n          background-color: ',
          ';\n        }\n\n        :host([inverted]) button {\n          color: ',
          ';\n          border: 1px solid ',
          ';\n          background-color: #fff;\n        }\n\n        :host([disabled]) button {\n          cursor: not-allowed;\n          background-color: ',
          ';\n        }\n\n        :host([small]) button {\n          font-size: ',
          'px;\n          line-height: 2.2;\n        }\n\n        :host([large]) button {\n          font-size: ',
          'px;\n          line-height: 1.25;\n          padding: 16px 25px 17px;\n        }\n\n        :host([link]) button {\n          color: ',
          ';\n          background-color: #fff;\n        }\n\n        :host([link]) button:hover {\n          text-decoration: underline;\n        }\n      </style>\n    '
        ]);
        return (
          (s = function() {
            return n;
          }),
          n
        );
      }
      customElements.define(
        'custom-button',
        class extends t.a {
          constructor() {
            super();
          }
          getStyles() {
            return Object(t.b)(
              s(),
              r.baseRadius,
              r.fontSans,
              r.baseFontSize,
              r.fontSemibold,
              r.brandYellow,
              r.primary,
              r.danger,
              r.primary,
              r.primary,
              r.brandGrey,
              0.875 * parseInt(r.baseFontSize, 10),
              1.375 * parseInt(r.baseFontSize, 10),
              r.baseFontColor
            );
          }
          handleHref() {
            console.log(this.href);
          }
          handleAnchor() {
            console.log(this.anchor);
          }
          render() {
            return Object(t.b)(a(), this.getStyles(), this.href ? this.handleHref : this.handleAnchor, this.disabled);
          }
          static get properties() {
            return {
              primary: { type: Boolean },
              danger: { type: Boolean },
              small: { type: Boolean },
              large: { type: Boolean },
              inverted: { type: Boolean },
              link: { type: Boolean },
              disabled: { type: Boolean },
              href: { type: String },
              anchor: { type: String }
            };
          }
        }
      );
    }
  }
]);
//# sourceMappingURL=5.4420319d.js.map
