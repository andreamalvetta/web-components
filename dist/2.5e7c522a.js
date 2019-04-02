(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    7: function(e, t, n) {
      'use strict';
      var r = new WeakMap(),
        i = function(e) {
          return 'function' == typeof e && r.has(e);
        },
        a = void 0 !== window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback,
        s = function(e, t) {
          for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, r = t; r !== n; ) {
            var i = r.nextSibling;
            e.removeChild(r), (r = i);
          }
        },
        o = {},
        l = {},
        u = '{{lit-'.concat(String(Math.random()).slice(2), '}}'),
        c = '\x3c!--'.concat(u, '--\x3e'),
        h = new RegExp(''.concat(u, '|').concat(c)),
        p = function e(t, n) {
          var r = this;
          babelHelpers.classCallCheck(this, e), (this.parts = []), (this.element = n);
          var i = -1,
            a = 0,
            s = [];
          !(function e(n) {
            for (var o = n.content, l = document.createTreeWalker(o, 133, null, !1), c = 0; l.nextNode(); ) {
              i++;
              var p = l.currentNode;
              if (1 === p.nodeType) {
                if (p.hasAttributes()) {
                  for (var d = p.attributes, y = 0, m = 0; m < d.length; m++) d[m].value.indexOf(u) >= 0 && y++;
                  for (; y-- > 0; ) {
                    var b = t.strings[a],
                      g = f.exec(b)[2],
                      _ = g.toLowerCase() + '$lit$',
                      S = p.getAttribute(_).split(h);
                    r.parts.push({ type: 'attribute', index: i, name: g, strings: S }),
                      p.removeAttribute(_),
                      (a += S.length - 1);
                  }
                }
                'TEMPLATE' === p.tagName && e(p);
              } else if (3 === p.nodeType) {
                var w = p.data;
                if (w.indexOf(u) >= 0) {
                  for (var k = p.parentNode, C = w.split(h), x = C.length - 1, P = 0; P < x; P++)
                    k.insertBefore('' === C[P] ? v() : document.createTextNode(C[P]), p),
                      r.parts.push({ type: 'node', index: ++i });
                  '' === C[x] ? (k.insertBefore(v(), p), s.push(p)) : (p.data = C[x]), (a += x);
                }
              } else if (8 === p.nodeType)
                if (p.data === u) {
                  var N = p.parentNode;
                  (null !== p.previousSibling && i !== c) || (i++, N.insertBefore(v(), p)),
                    (c = i),
                    r.parts.push({ type: 'node', index: i }),
                    null === p.nextSibling ? (p.data = '') : (s.push(p), i--),
                    a++;
                } else
                  for (var H = -1; -1 !== (H = p.data.indexOf(u, H + 1)); ) r.parts.push({ type: 'node', index: -1 });
            }
          })(n);
          for (var o = s, l = 0; l < o.length; l++) {
            var c = o[l];
            c.parentNode.removeChild(c);
          }
        },
        d = function(e) {
          return -1 !== e.index;
        },
        v = function() {
          return document.createComment('');
        },
        f = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,
        y = (function() {
          function e(t, n, r) {
            babelHelpers.classCallCheck(this, e),
              (this._parts = []),
              (this.template = t),
              (this.processor = n),
              (this.options = r);
          }
          return (
            babelHelpers.createClass(e, [
              {
                key: 'update',
                value: function(e) {
                  var t = 0,
                    n = !0,
                    r = !1,
                    i = void 0;
                  try {
                    for (var a, s = this._parts[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
                      var o = a.value;
                      void 0 !== o && o.setValue(e[t]), t++;
                    }
                  } catch (e) {
                    (r = !0), (i = e);
                  } finally {
                    try {
                      n || null == s.return || s.return();
                    } finally {
                      if (r) throw i;
                    }
                  }
                  var l = !0,
                    u = !1,
                    c = void 0;
                  try {
                    for (var h, p = this._parts[Symbol.iterator](); !(l = (h = p.next()).done); l = !0) {
                      var d = h.value;
                      void 0 !== d && d.commit();
                    }
                  } catch (e) {
                    (u = !0), (c = e);
                  } finally {
                    try {
                      l || null == p.return || p.return();
                    } finally {
                      if (u) throw c;
                    }
                  }
                }
              },
              {
                key: '_clone',
                value: function() {
                  var e = this,
                    t = a
                      ? this.template.element.content.cloneNode(!0)
                      : document.importNode(this.template.element.content, !0),
                    n = this.template.parts,
                    r = 0,
                    i = 0;
                  return (
                    (function t(a) {
                      for (
                        var s = document.createTreeWalker(a, 133, null, !1), o = s.nextNode();
                        r < n.length && null !== o;

                      ) {
                        var l = n[r];
                        if (d(l))
                          if (i === l.index) {
                            if ('node' === l.type) {
                              var u = e.processor.handleTextExpression(e.options);
                              u.insertAfterNode(o.previousSibling), e._parts.push(u);
                            } else {
                              var c;
                              (c = e._parts).push.apply(
                                c,
                                babelHelpers.toConsumableArray(
                                  e.processor.handleAttributeExpressions(o, l.name, l.strings, e.options)
                                )
                              );
                            }
                            r++;
                          } else i++, 'TEMPLATE' === o.nodeName && t(o.content), (o = s.nextNode());
                        else e._parts.push(void 0), r++;
                      }
                    })(t),
                    a && (document.adoptNode(t), customElements.upgrade(t)),
                    t
                  );
                }
              }
            ]),
            e
          );
        })(),
        m = (function() {
          function e(t, n, r, i) {
            babelHelpers.classCallCheck(this, e),
              (this.strings = t),
              (this.values = n),
              (this.type = r),
              (this.processor = i);
          }
          return (
            babelHelpers.createClass(e, [
              {
                key: 'getHTML',
                value: function() {
                  for (var e = this.strings.length - 1, t = '', n = 0; n < e; n++) {
                    var r = this.strings[n],
                      i = f.exec(r);
                    t += i ? r.substr(0, i.index) + i[1] + i[2] + '$lit$' + i[3] + u : r + c;
                  }
                  return t + this.strings[e];
                }
              },
              {
                key: 'getTemplateElement',
                value: function() {
                  var e = document.createElement('template');
                  return (e.innerHTML = this.getHTML()), e;
                }
              }
            ]),
            e
          );
        })(),
        b = function(e) {
          return null === e || !('object' === babelHelpers.typeof(e) || 'function' == typeof e);
        },
        g = (function() {
          function e(t, n, r) {
            babelHelpers.classCallCheck(this, e),
              (this.dirty = !0),
              (this.element = t),
              (this.name = n),
              (this.strings = r),
              (this.parts = []);
            for (var i = 0; i < r.length - 1; i++) this.parts[i] = this._createPart();
          }
          return (
            babelHelpers.createClass(e, [
              {
                key: '_createPart',
                value: function() {
                  return new _(this);
                }
              },
              {
                key: '_getValue',
                value: function() {
                  for (var e = this.strings, t = e.length - 1, n = '', r = 0; r < t; r++) {
                    n += e[r];
                    var i = this.parts[r];
                    if (void 0 !== i) {
                      var a = i.value;
                      if (null != a && (Array.isArray(a) || ('string' != typeof a && a[Symbol.iterator]))) {
                        var s = !0,
                          o = !1,
                          l = void 0;
                        try {
                          for (var u, c = a[Symbol.iterator](); !(s = (u = c.next()).done); s = !0) {
                            var h = u.value;
                            n += 'string' == typeof h ? h : String(h);
                          }
                        } catch (e) {
                          (o = !0), (l = e);
                        } finally {
                          try {
                            s || null == c.return || c.return();
                          } finally {
                            if (o) throw l;
                          }
                        }
                      } else n += 'string' == typeof a ? a : String(a);
                    }
                  }
                  return (n += e[t]);
                }
              },
              {
                key: 'commit',
                value: function() {
                  this.dirty && ((this.dirty = !1), this.element.setAttribute(this.name, this._getValue()));
                }
              }
            ]),
            e
          );
        })(),
        _ = (function() {
          function e(t) {
            babelHelpers.classCallCheck(this, e), (this.value = void 0), (this.committer = t);
          }
          return (
            babelHelpers.createClass(e, [
              {
                key: 'setValue',
                value: function(e) {
                  e === o || (b(e) && e === this.value) || ((this.value = e), i(e) || (this.committer.dirty = !0));
                }
              },
              {
                key: 'commit',
                value: function() {
                  for (; i(this.value); ) {
                    var e = this.value;
                    (this.value = o), e(this);
                  }
                  this.value !== o && this.committer.commit();
                }
              }
            ]),
            e
          );
        })(),
        S = (function() {
          function e(t) {
            babelHelpers.classCallCheck(this, e),
              (this.value = void 0),
              (this._pendingValue = void 0),
              (this.options = t);
          }
          return (
            babelHelpers.createClass(e, [
              {
                key: 'appendInto',
                value: function(e) {
                  (this.startNode = e.appendChild(v())), (this.endNode = e.appendChild(v()));
                }
              },
              {
                key: 'insertAfterNode',
                value: function(e) {
                  (this.startNode = e), (this.endNode = e.nextSibling);
                }
              },
              {
                key: 'appendIntoPart',
                value: function(e) {
                  e._insert((this.startNode = v())), e._insert((this.endNode = v()));
                }
              },
              {
                key: 'insertAfterPart',
                value: function(e) {
                  e._insert((this.startNode = v())), (this.endNode = e.endNode), (e.endNode = this.startNode);
                }
              },
              {
                key: 'setValue',
                value: function(e) {
                  this._pendingValue = e;
                }
              },
              {
                key: 'commit',
                value: function() {
                  for (; i(this._pendingValue); ) {
                    var e = this._pendingValue;
                    (this._pendingValue = o), e(this);
                  }
                  var t = this._pendingValue;
                  t !== o &&
                    (b(t)
                      ? t !== this.value && this._commitText(t)
                      : t instanceof m
                      ? this._commitTemplateResult(t)
                      : t instanceof Node
                      ? this._commitNode(t)
                      : Array.isArray(t) || t[Symbol.iterator]
                      ? this._commitIterable(t)
                      : t === l
                      ? ((this.value = l), this.clear())
                      : this._commitText(t));
                }
              },
              {
                key: '_insert',
                value: function(e) {
                  this.endNode.parentNode.insertBefore(e, this.endNode);
                }
              },
              {
                key: '_commitNode',
                value: function(e) {
                  this.value !== e && (this.clear(), this._insert(e), (this.value = e));
                }
              },
              {
                key: '_commitText',
                value: function(e) {
                  var t = this.startNode.nextSibling;
                  (e = null == e ? '' : e),
                    t === this.endNode.previousSibling && 3 === t.nodeType
                      ? (t.data = e)
                      : this._commitNode(document.createTextNode('string' == typeof e ? e : String(e))),
                    (this.value = e);
                }
              },
              {
                key: '_commitTemplateResult',
                value: function(e) {
                  var t = this.options.templateFactory(e);
                  if (this.value instanceof y && this.value.template === t) this.value.update(e.values);
                  else {
                    var n = new y(t, e.processor, this.options),
                      r = n._clone();
                    n.update(e.values), this._commitNode(r), (this.value = n);
                  }
                }
              },
              {
                key: '_commitIterable',
                value: function(t) {
                  Array.isArray(this.value) || ((this.value = []), this.clear());
                  var n,
                    r = this.value,
                    i = 0,
                    a = !0,
                    s = !1,
                    o = void 0;
                  try {
                    for (var l, u = t[Symbol.iterator](); !(a = (l = u.next()).done); a = !0) {
                      var c = l.value;
                      void 0 === (n = r[i]) &&
                        ((n = new e(this.options)),
                        r.push(n),
                        0 === i ? n.appendIntoPart(this) : n.insertAfterPart(r[i - 1])),
                        n.setValue(c),
                        n.commit(),
                        i++;
                    }
                  } catch (e) {
                    (s = !0), (o = e);
                  } finally {
                    try {
                      a || null == u.return || u.return();
                    } finally {
                      if (s) throw o;
                    }
                  }
                  i < r.length && ((r.length = i), this.clear(n && n.endNode));
                }
              },
              {
                key: 'clear',
                value: function() {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startNode;
                  s(this.startNode.parentNode, e.nextSibling, this.endNode);
                }
              }
            ]),
            e
          );
        })(),
        w = (function() {
          function e(t, n, r) {
            if (
              (babelHelpers.classCallCheck(this, e),
              (this.value = void 0),
              (this._pendingValue = void 0),
              2 !== r.length || '' !== r[0] || '' !== r[1])
            )
              throw new Error('Boolean attributes can only contain a single expression');
            (this.element = t), (this.name = n), (this.strings = r);
          }
          return (
            babelHelpers.createClass(e, [
              {
                key: 'setValue',
                value: function(e) {
                  this._pendingValue = e;
                }
              },
              {
                key: 'commit',
                value: function() {
                  for (; i(this._pendingValue); ) {
                    var e = this._pendingValue;
                    (this._pendingValue = o), e(this);
                  }
                  if (this._pendingValue !== o) {
                    var t = !!this._pendingValue;
                    this.value !== t &&
                      (t ? this.element.setAttribute(this.name, '') : this.element.removeAttribute(this.name)),
                      (this.value = t),
                      (this._pendingValue = o);
                  }
                }
              }
            ]),
            e
          );
        })(),
        k = (function(e) {
          function t(e, n, r) {
            var i;
            return (
              babelHelpers.classCallCheck(this, t),
              ((i = babelHelpers.possibleConstructorReturn(
                this,
                babelHelpers.getPrototypeOf(t).call(this, e, n, r)
              )).single = 2 === r.length && '' === r[0] && '' === r[1]),
              i
            );
          }
          return (
            babelHelpers.inherits(t, e),
            babelHelpers.createClass(t, [
              {
                key: '_createPart',
                value: function() {
                  return new C(this);
                }
              },
              {
                key: '_getValue',
                value: function() {
                  return this.single
                    ? this.parts[0].value
                    : babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), '_getValue', this).call(this);
                }
              },
              {
                key: 'commit',
                value: function() {
                  this.dirty && ((this.dirty = !1), (this.element[this.name] = this._getValue()));
                }
              }
            ]),
            t
          );
        })(g),
        C = (function(e) {
          function t() {
            return (
              babelHelpers.classCallCheck(this, t),
              babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments))
            );
          }
          return babelHelpers.inherits(t, e), t;
        })(_),
        x = !1;
      try {
        var P = {
          get capture() {
            return (x = !0), !1;
          }
        };
        window.addEventListener('test', P, P), window.removeEventListener('test', P, P);
      } catch (e) {}
      var N = (function() {
          function e(t, n, r) {
            var i = this;
            babelHelpers.classCallCheck(this, e),
              (this.value = void 0),
              (this._pendingValue = void 0),
              (this.element = t),
              (this.eventName = n),
              (this.eventContext = r),
              (this._boundHandleEvent = function(e) {
                return i.handleEvent(e);
              });
          }
          return (
            babelHelpers.createClass(e, [
              {
                key: 'setValue',
                value: function(e) {
                  this._pendingValue = e;
                }
              },
              {
                key: 'commit',
                value: function() {
                  for (; i(this._pendingValue); ) {
                    var e = this._pendingValue;
                    (this._pendingValue = o), e(this);
                  }
                  if (this._pendingValue !== o) {
                    var t = this._pendingValue,
                      n = this.value,
                      r =
                        null == t ||
                        (null != n && (t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive)),
                      a = null != t && (null == n || r);
                    r && this.element.removeEventListener(this.eventName, this._boundHandleEvent, this._options),
                      a &&
                        ((this._options = H(t)),
                        this.element.addEventListener(this.eventName, this._boundHandleEvent, this._options)),
                      (this.value = t),
                      (this._pendingValue = o);
                  }
                }
              },
              {
                key: 'handleEvent',
                value: function(e) {
                  'function' == typeof this.value
                    ? this.value.call(this.eventContext || this.element, e)
                    : this.value.handleEvent(e);
                }
              }
            ]),
            e
          );
        })(),
        H = function(e) {
          return e && (x ? { capture: e.capture, passive: e.passive, once: e.once } : e.capture);
        },
        A = new ((function() {
          function e() {
            babelHelpers.classCallCheck(this, e);
          }
          return (
            babelHelpers.createClass(e, [
              {
                key: 'handleAttributeExpressions',
                value: function(e, t, n, r) {
                  var i = t[0];
                  return '.' === i
                    ? new k(e, t.slice(1), n).parts
                    : '@' === i
                    ? [new N(e, t.slice(1), r.eventContext)]
                    : '?' === i
                    ? [new w(e, t.slice(1), n)]
                    : new g(e, t, n).parts;
                }
              },
              {
                key: 'handleTextExpression',
                value: function(e) {
                  return new S(e);
                }
              }
            ]),
            e
          );
        })())();
      function T(e) {
        var t = E.get(e.type);
        void 0 === t && ((t = { stringsArray: new WeakMap(), keyString: new Map() }), E.set(e.type, t));
        var n = t.stringsArray.get(e.strings);
        if (void 0 !== n) return n;
        var r = e.strings.join(u);
        return (
          void 0 === (n = t.keyString.get(r)) && ((n = new p(e, e.getTemplateElement())), t.keyString.set(r, n)),
          t.stringsArray.set(e.strings, n),
          n
        );
      }
      var E = new Map(),
        V = new WeakMap();
      (window.litHtmlVersions || (window.litHtmlVersions = [])).push('1.0.0');
      var O = function(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          return new m(e, n, 'html', A);
        },
        R = 133;
      function M(e, t) {
        for (
          var n = e.element.content,
            r = e.parts,
            i = document.createTreeWalker(n, R, null, !1),
            a = z(r),
            s = r[a],
            o = -1,
            l = 0,
            u = [],
            c = null;
          i.nextNode();

        ) {
          o++;
          var h = i.currentNode;
          for (
            h.previousSibling === c && (c = null), t.has(h) && (u.push(h), null === c && (c = h)), null !== c && l++;
            void 0 !== s && s.index === o;

          )
            (s.index = null !== c ? -1 : s.index - l), (s = r[(a = z(r, a))]);
        }
        u.forEach(function(e) {
          return e.parentNode.removeChild(e);
        });
      }
      var U = function(e) {
          for (var t = 11 === e.nodeType ? 0 : 1, n = document.createTreeWalker(e, R, null, !1); n.nextNode(); ) t++;
          return t;
        },
        z = function(e) {
          for (var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1) + 1; t < e.length; t++) {
            var n = e[t];
            if (d(n)) return t;
          }
          return -1;
        };
      var q = function(e, t) {
          return ''.concat(e, '--').concat(t);
        },
        j = !0;
      void 0 === window.ShadyCSS
        ? (j = !1)
        : void 0 === window.ShadyCSS.prepareTemplateDom &&
          (console.warn(
            'Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1.'
          ),
          (j = !1));
      var F = function(e) {
          return function(t) {
            var n = q(t.type, e),
              r = E.get(n);
            void 0 === r && ((r = { stringsArray: new WeakMap(), keyString: new Map() }), E.set(n, r));
            var i = r.stringsArray.get(t.strings);
            if (void 0 !== i) return i;
            var a = t.strings.join(u);
            if (void 0 === (i = r.keyString.get(a))) {
              var s = t.getTemplateElement();
              j && window.ShadyCSS.prepareTemplateDom(s, e), (i = new p(t, s)), r.keyString.set(a, i);
            }
            return r.stringsArray.set(t.strings, i), i;
          };
        },
        L = ['html', 'svg'],
        I = new Set(),
        B = function(e, t, n) {
          I.add(n);
          var r = e.querySelectorAll('style');
          if (0 !== r.length) {
            for (var i = document.createElement('style'), a = 0; a < r.length; a++) {
              var s = r[a];
              s.parentNode.removeChild(s), (i.textContent += s.textContent);
            }
            if (
              ((function(e) {
                L.forEach(function(t) {
                  var n = E.get(q(t, e));
                  void 0 !== n &&
                    n.keyString.forEach(function(e) {
                      var t = e.element.content,
                        n = new Set();
                      Array.from(t.querySelectorAll('style')).forEach(function(e) {
                        n.add(e);
                      }),
                        M(e, n);
                    });
                });
              })(n),
              (function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                  r = e.element.content,
                  i = e.parts;
                if (null != n)
                  for (var a = document.createTreeWalker(r, R, null, !1), s = z(i), o = 0, l = -1; a.nextNode(); )
                    for (
                      l++, a.currentNode === n && ((o = U(t)), n.parentNode.insertBefore(t, n));
                      -1 !== s && i[s].index === l;

                    ) {
                      if (o > 0) {
                        for (; -1 !== s; ) (i[s].index += o), (s = z(i, s));
                        return;
                      }
                      s = z(i, s);
                    }
                else r.appendChild(t);
              })(t, i, t.element.content.firstChild),
              window.ShadyCSS.prepareTemplateStyles(t.element, n),
              window.ShadyCSS.nativeShadow)
            ) {
              var o = t.element.content.querySelector('style');
              e.insertBefore(o.cloneNode(!0), e.firstChild);
            } else {
              t.element.content.insertBefore(i, t.element.content.firstChild);
              var l = new Set();
              l.add(i), M(t, l);
            }
          } else window.ShadyCSS.prepareTemplateStyles(t.element, n);
        },
        W = n(0),
        J = n.n(W);
      window.JSCompiler_renameProperty = function(e, t) {
        return e;
      };
      var $ = {
          toAttribute: function(e, t) {
            switch (t) {
              case Boolean:
                return e ? '' : null;
              case Object:
              case Array:
                return null == e ? e : JSON.stringify(e);
            }
            return e;
          },
          fromAttribute: function(e, t) {
            switch (t) {
              case Boolean:
                return null !== e;
              case Number:
                return null === e ? null : Number(e);
              case Object:
              case Array:
                return JSON.parse(e);
            }
            return e;
          }
        },
        D = function(e, t) {
          return t !== e && (t == t || e == e);
        },
        G = { attribute: !0, type: String, converter: $, reflect: !1, hasChanged: D },
        K = Promise.resolve(!0),
        Q = (function(e) {
          function t() {
            var e;
            return (
              babelHelpers.classCallCheck(this, t),
              ((e = babelHelpers.possibleConstructorReturn(
                this,
                babelHelpers.getPrototypeOf(t).call(this)
              ))._updateState = 0),
              (e._instanceProperties = void 0),
              (e._updatePromise = K),
              (e._hasConnectedResolver = void 0),
              (e._changedProperties = new Map()),
              (e._reflectingProperties = void 0),
              e.initialize(),
              e
            );
          }
          return (
            babelHelpers.inherits(t, e),
            babelHelpers.createClass(
              t,
              [
                {
                  key: 'initialize',
                  value: function() {
                    this._saveInstanceProperties(), this._requestUpdate();
                  }
                },
                {
                  key: '_saveInstanceProperties',
                  value: function() {
                    var e = this;
                    this.constructor._classProperties.forEach(function(t, n) {
                      if (e.hasOwnProperty(n)) {
                        var r = e[n];
                        delete e[n],
                          e._instanceProperties || (e._instanceProperties = new Map()),
                          e._instanceProperties.set(n, r);
                      }
                    });
                  }
                },
                {
                  key: '_applyInstanceProperties',
                  value: function() {
                    var e = this;
                    this._instanceProperties.forEach(function(t, n) {
                      return (e[n] = t);
                    }),
                      (this._instanceProperties = void 0);
                  }
                },
                {
                  key: 'connectedCallback',
                  value: function() {
                    (this._updateState = 32 | this._updateState),
                      this._hasConnectedResolver &&
                        (this._hasConnectedResolver(), (this._hasConnectedResolver = void 0));
                  }
                },
                { key: 'disconnectedCallback', value: function() {} },
                {
                  key: 'attributeChangedCallback',
                  value: function(e, t, n) {
                    t !== n && this._attributeToProperty(e, n);
                  }
                },
                {
                  key: '_propertyToAttribute',
                  value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : G,
                      r = this.constructor,
                      i = r._attributeNameForProperty(e, n);
                    if (void 0 !== i) {
                      var a = r._propertyValueToAttribute(t, n);
                      if (void 0 === a) return;
                      (this._updateState = 8 | this._updateState),
                        null == a ? this.removeAttribute(i) : this.setAttribute(i, a),
                        (this._updateState = -9 & this._updateState);
                    }
                  }
                },
                {
                  key: '_attributeToProperty',
                  value: function(e, t) {
                    if (!(8 & this._updateState)) {
                      var n = this.constructor,
                        r = n._attributeToPropertyMap.get(e);
                      if (void 0 !== r) {
                        var i = n._classProperties.get(r) || G;
                        (this._updateState = 16 | this._updateState),
                          (this[r] = n._propertyValueFromAttribute(t, i)),
                          (this._updateState = -17 & this._updateState);
                      }
                    }
                  }
                },
                {
                  key: '_requestUpdate',
                  value: function(e, t) {
                    var n = !0;
                    if (void 0 !== e) {
                      var r = this.constructor,
                        i = r._classProperties.get(e) || G;
                      r._valueHasChanged(this[e], t, i.hasChanged)
                        ? (this._changedProperties.has(e) || this._changedProperties.set(e, t),
                          !0 !== i.reflect ||
                            16 & this._updateState ||
                            (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map()),
                            this._reflectingProperties.set(e, i)))
                        : (n = !1);
                    }
                    !this._hasRequestedUpdate && n && this._enqueueUpdate();
                  }
                },
                {
                  key: 'requestUpdate',
                  value: function(e, t) {
                    return this._requestUpdate(e, t), this.updateComplete;
                  }
                },
                {
                  key: '_enqueueUpdate',
                  value: (function() {
                    var e = babelHelpers.asyncToGenerator(
                      J.a.mark(function e() {
                        var t,
                          n,
                          r,
                          i,
                          a = this;
                        return J.a.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this._updateState = 4 | this._updateState),
                                    (r = this._updatePromise),
                                    (this._updatePromise = new Promise(function(e, r) {
                                      (t = e), (n = r);
                                    })),
                                    (e.prev = 3),
                                    (e.next = 6),
                                    r
                                  );
                                case 6:
                                  e.next = 10;
                                  break;
                                case 8:
                                  (e.prev = 8), (e.t0 = e.catch(3));
                                case 10:
                                  if (this._hasConnected) {
                                    e.next = 13;
                                    break;
                                  }
                                  return (
                                    (e.next = 13),
                                    new Promise(function(e) {
                                      return (a._hasConnectedResolver = e);
                                    })
                                  );
                                case 13:
                                  if (((e.prev = 13), null == (i = this.performUpdate()))) {
                                    e.next = 18;
                                    break;
                                  }
                                  return (e.next = 18), i;
                                case 18:
                                  e.next = 23;
                                  break;
                                case 20:
                                  (e.prev = 20), (e.t1 = e.catch(13)), n(e.t1);
                                case 23:
                                  t(!this._hasRequestedUpdate);
                                case 24:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[3, 8], [13, 20]]
                        );
                      })
                    );
                    return function() {
                      return e.apply(this, arguments);
                    };
                  })()
                },
                {
                  key: 'performUpdate',
                  value: function() {
                    this._instanceProperties && this._applyInstanceProperties();
                    var e = !1,
                      t = this._changedProperties;
                    try {
                      (e = this.shouldUpdate(t)) && this.update(t);
                    } catch (t) {
                      throw ((e = !1), t);
                    } finally {
                      this._markUpdated();
                    }
                    e &&
                      (1 & this._updateState || ((this._updateState = 1 | this._updateState), this.firstUpdated(t)),
                      this.updated(t));
                  }
                },
                {
                  key: '_markUpdated',
                  value: function() {
                    (this._changedProperties = new Map()), (this._updateState = -5 & this._updateState);
                  }
                },
                {
                  key: 'shouldUpdate',
                  value: function(e) {
                    return !0;
                  }
                },
                {
                  key: 'update',
                  value: function(e) {
                    var t = this;
                    void 0 !== this._reflectingProperties &&
                      this._reflectingProperties.size > 0 &&
                      (this._reflectingProperties.forEach(function(e, n) {
                        return t._propertyToAttribute(n, t[n], e);
                      }),
                      (this._reflectingProperties = void 0));
                  }
                },
                { key: 'updated', value: function(e) {} },
                { key: 'firstUpdated', value: function(e) {} },
                {
                  key: '_hasConnected',
                  get: function() {
                    return 32 & this._updateState;
                  }
                },
                {
                  key: '_hasRequestedUpdate',
                  get: function() {
                    return 4 & this._updateState;
                  }
                },
                {
                  key: 'hasUpdated',
                  get: function() {
                    return 1 & this._updateState;
                  }
                },
                {
                  key: 'updateComplete',
                  get: function() {
                    return this._updatePromise;
                  }
                }
              ],
              [
                {
                  key: '_ensureClassProperties',
                  value: function() {
                    var e = this;
                    if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
                      this._classProperties = new Map();
                      var t = Object.getPrototypeOf(this)._classProperties;
                      void 0 !== t &&
                        t.forEach(function(t, n) {
                          return e._classProperties.set(n, t);
                        });
                    }
                  }
                },
                {
                  key: 'createProperty',
                  value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G;
                    if (
                      (this._ensureClassProperties(),
                      this._classProperties.set(e, t),
                      !t.noAccessor && !this.prototype.hasOwnProperty(e))
                    ) {
                      var n = 'symbol' === babelHelpers.typeof(e) ? Symbol() : '__'.concat(e);
                      Object.defineProperty(this.prototype, e, {
                        get: function() {
                          return this[n];
                        },
                        set: function(t) {
                          var r = this[e];
                          (this[n] = t), this._requestUpdate(e, r);
                        },
                        configurable: !0,
                        enumerable: !0
                      });
                    }
                  }
                },
                {
                  key: 'finalize',
                  value: function() {
                    if (!this.hasOwnProperty(JSCompiler_renameProperty('finalized', this)) || !this.finalized) {
                      var e = Object.getPrototypeOf(this);
                      if (
                        ('function' == typeof e.finalize && e.finalize(),
                        (this.finalized = !0),
                        this._ensureClassProperties(),
                        (this._attributeToPropertyMap = new Map()),
                        this.hasOwnProperty(JSCompiler_renameProperty('properties', this)))
                      ) {
                        var t = this.properties,
                          n = [].concat(
                            babelHelpers.toConsumableArray(Object.getOwnPropertyNames(t)),
                            babelHelpers.toConsumableArray(
                              'function' == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t) : []
                            )
                          ),
                          r = !0,
                          i = !1,
                          a = void 0;
                        try {
                          for (var s, o = n[Symbol.iterator](); !(r = (s = o.next()).done); r = !0) {
                            var l = s.value;
                            this.createProperty(l, t[l]);
                          }
                        } catch (e) {
                          (i = !0), (a = e);
                        } finally {
                          try {
                            r || null == o.return || o.return();
                          } finally {
                            if (i) throw a;
                          }
                        }
                      }
                    }
                  }
                },
                {
                  key: '_attributeNameForProperty',
                  value: function(e, t) {
                    var n = t.attribute;
                    return !1 === n
                      ? void 0
                      : 'string' == typeof n
                      ? n
                      : 'string' == typeof e
                      ? e.toLowerCase()
                      : void 0;
                  }
                },
                {
                  key: '_valueHasChanged',
                  value: function(e, t) {
                    return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : D)(e, t);
                  }
                },
                {
                  key: '_propertyValueFromAttribute',
                  value: function(e, t) {
                    var n = t.type,
                      r = t.converter || $,
                      i = 'function' == typeof r ? r : r.fromAttribute;
                    return i ? i(e, n) : e;
                  }
                },
                {
                  key: '_propertyValueToAttribute',
                  value: function(e, t) {
                    if (void 0 !== t.reflect) {
                      var n = t.type,
                        r = t.converter;
                      return ((r && r.toAttribute) || $.toAttribute)(e, n);
                    }
                  }
                },
                {
                  key: 'observedAttributes',
                  get: function() {
                    var e = this;
                    this.finalize();
                    var t = [];
                    return (
                      this._classProperties.forEach(function(n, r) {
                        var i = e._attributeNameForProperty(r, n);
                        void 0 !== i && (e._attributeToPropertyMap.set(i, r), t.push(i));
                      }),
                      t
                    );
                  }
                }
              ]
            ),
            t
          );
        })(babelHelpers.wrapNativeSuper(HTMLElement));
      Q.finalized = !0;
      var X = 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype;
      Symbol();
      n.d(t, 'a', function() {
        return Z;
      }),
        n.d(t, 'b', function() {
          return O;
        }),
        (window.litElementVersions || (window.litElementVersions = [])).push('2.0.1');
      var Y = function(e) {
          return e.flat
            ? e.flat(1 / 0)
            : (function e(t) {
                for (
                  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], r = 0, i = t.length;
                  r < i;
                  r++
                ) {
                  var a = t[r];
                  Array.isArray(a) ? e(a, n) : n.push(a);
                }
                return n;
              })(e);
        },
        Z = (function(e) {
          function t() {
            return (
              babelHelpers.classCallCheck(this, t),
              babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).apply(this, arguments))
            );
          }
          return (
            babelHelpers.inherits(t, e),
            babelHelpers.createClass(
              t,
              [
                {
                  key: 'initialize',
                  value: function() {
                    babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), 'initialize', this).call(this),
                      (this.renderRoot = this.createRenderRoot()),
                      window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles();
                  }
                },
                {
                  key: 'createRenderRoot',
                  value: function() {
                    return this.attachShadow({ mode: 'open' });
                  }
                },
                {
                  key: 'adoptStyles',
                  value: function() {
                    var e = this.constructor._styles;
                    0 !== e.length &&
                      (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow
                        ? X
                          ? (this.renderRoot.adoptedStyleSheets = e.map(function(e) {
                              return e.styleSheet;
                            }))
                          : (this._needsShimAdoptedStyleSheets = !0)
                        : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(
                            e.map(function(e) {
                              return e.cssText;
                            }),
                            this.localName
                          ));
                  }
                },
                {
                  key: 'connectedCallback',
                  value: function() {
                    babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), 'connectedCallback', this).call(this),
                      this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this);
                  }
                },
                {
                  key: 'update',
                  value: function(e) {
                    var n = this;
                    babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), 'update', this).call(this, e);
                    var r = this.render();
                    r instanceof m &&
                      this.constructor.render(r, this.renderRoot, { scopeName: this.localName, eventContext: this }),
                      this._needsShimAdoptedStyleSheets &&
                        ((this._needsShimAdoptedStyleSheets = !1),
                        this.constructor._styles.forEach(function(e) {
                          var t = document.createElement('style');
                          (t.textContent = e.cssText), n.renderRoot.appendChild(t);
                        }));
                  }
                },
                { key: 'render', value: function() {} }
              ],
              [
                {
                  key: 'finalize',
                  value: function() {
                    babelHelpers.get(babelHelpers.getPrototypeOf(t), 'finalize', this).call(this),
                      (this._styles = this.hasOwnProperty(JSCompiler_renameProperty('styles', this))
                        ? this._getUniqueStyles()
                        : this._styles || []);
                  }
                },
                {
                  key: '_getUniqueStyles',
                  value: function() {
                    var e = this.styles,
                      t = [];
                    Array.isArray(e)
                      ? Y(e)
                          .reduceRight(function(e, t) {
                            return e.add(t), e;
                          }, new Set())
                          .forEach(function(e) {
                            return t.unshift(e);
                          })
                      : e && t.push(e);
                    return t;
                  }
                }
              ]
            ),
            t
          );
        })(Q);
      (Z.finalized = !0),
        (Z.render = function(e, t, n) {
          var r = n.scopeName,
            i = V.has(t),
            a = t instanceof ShadowRoot && j && e instanceof m,
            o = a && !I.has(r),
            l = o ? document.createDocumentFragment() : t;
          if (
            ((function(e, t, n) {
              var r = V.get(t);
              void 0 === r &&
                (s(t, t.firstChild), V.set(t, (r = new S(Object.assign({ templateFactory: T }, n)))), r.appendInto(t)),
                r.setValue(e),
                r.commit();
            })(e, l, Object.assign({ templateFactory: F(r) }, n)),
            o)
          ) {
            var u = V.get(l);
            V.delete(l),
              u.value instanceof y && B(l, u.value.template, r),
              s(t, t.firstChild),
              t.appendChild(l),
              V.set(t, u);
          }
          !i && a && window.ShadyCSS.styleElement(t.host);
        });
    }
  }
]);
//# sourceMappingURL=2.5e7c522a.js.map
