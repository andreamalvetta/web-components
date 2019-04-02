(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    5: function(n, e, t) {
      'use strict';
      t.r(e);
      var o = t(7),
        r = 'rgb(244, 167, 0)',
        l = 'rgb(84, 106, 120)',
        a = 'rgb(12, 122, 192)',
        i = 'rgb(179, 32, 35)',
        s = "'Source Sans Pro', 'Arial', sans-serif",
        c = 'rgb(84, 106, 120)',
        u = '16px',
        b = 600,
        p = '0.25rem';
      function h() {
        var n = babelHelpers.taggedTemplateLiteral([
          '\n      ',
          '\n      <button @click="',
          '" ?disabled="',
          '">\n        <slot></slot>\n      </button>\n    '
        ]);
        return (
          (h = function() {
            return n;
          }),
          n
        );
      }
      function d() {
        var n = babelHelpers.taggedTemplateLiteral([
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
          (d = function() {
            return n;
          }),
          n
        );
      }
      var f = (function(n) {
        function e() {
          return (
            babelHelpers.classCallCheck(this, e),
            babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(e).call(this))
          );
        }
        return (
          babelHelpers.inherits(e, n),
          babelHelpers.createClass(
            e,
            [
              {
                key: 'getStyles',
                value: function() {
                  return Object(o.b)(
                    d(),
                    p,
                    s,
                    u,
                    b,
                    r,
                    a,
                    i,
                    a,
                    a,
                    l,
                    0.875 * parseInt(u, 10),
                    1.375 * parseInt(u, 10),
                    c
                  );
                }
              },
              {
                key: 'handleHref',
                value: function() {
                  console.log(this.href);
                }
              },
              {
                key: 'handleAnchor',
                value: function() {
                  console.log(this.anchor);
                }
              },
              {
                key: 'render',
                value: function() {
                  return Object(o.b)(
                    h(),
                    this.getStyles(),
                    this.href ? this.handleHref : this.handleAnchor,
                    this.disabled
                  );
                }
              }
            ],
            [
              {
                key: 'properties',
                get: function() {
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
            ]
          ),
          e
        );
      })(o.a);
      customElements.define('custom-button', f);
    }
  }
]);
//# sourceMappingURL=4.34052eca.js.map
