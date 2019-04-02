/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function() {
  /*

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
  'use strict';
  var m,
    n =
      'undefined' != typeof window && window === this
        ? this
        : 'undefined' != typeof global && null != global
        ? global
        : this,
    ca =
      'function' == typeof Object.defineProperties
        ? Object.defineProperty
        : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value);
          };
  function da() {
    da = function() {};
    n.Symbol || (n.Symbol = ea);
  }
  var ea = (function() {
    var a = 0;
    return function(b) {
      return 'jscomp_symbol_' + (b || '') + a++;
    };
  })();
  function fa() {
    da();
    var a = n.Symbol.iterator;
    a || (a = n.Symbol.iterator = n.Symbol('iterator'));
    'function' != typeof Array.prototype[a] &&
      ca(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function() {
          return ha(this);
        }
      });
    fa = function() {};
  }
  function ha(a) {
    var b = 0;
    return ia(function() {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    });
  }
  function ia(a) {
    fa();
    a = { next: a };
    a[n.Symbol.iterator] = function() {
      return this;
    };
    return a;
  }
  function ja(a) {
    fa();
    da();
    fa();
    var b = a[Symbol.iterator];
    return b ? b.call(a) : ha(a);
  }
  function ka(a) {
    for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
    return c;
  }
  function la() {
    this.aa = this.root = null;
    this.K = !1;
    this.v = this.H = this.R = this.assignedSlot = this.assignedNodes = this.w = null;
    this.childNodes = this.nextSibling = this.previousSibling = this.lastChild = this.firstChild = this.parentNode = this.B = void 0;
    this.W = this.X = !1;
    this.G = {};
  }
  la.prototype.toJSON = function() {
    return {};
  };
  function q(a) {
    a.__shady || (a.__shady = new la());
    return a.__shady;
  }
  function r(a) {
    return a && a.__shady;
  }
  var t = window.ShadyDOM || {};
  t.na = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
  var ma = Object.getOwnPropertyDescriptor(Node.prototype, 'firstChild');
  t.i = !!(ma && ma.configurable && ma.get);
  t.T = t.force || !t.na;
  t.A = t.noPatch || !1;
  t.$ = t.preferPerformance;
  function v(a) {
    return (a = r(a)) && void 0 !== a.firstChild;
  }
  function w(a) {
    return 'ShadyRoot' === a.ga;
  }
  function na(a) {
    return (a = (a = r(a)) && a.root) && oa(a);
  }
  var x = Element.prototype,
    pa =
      x.matches ||
      x.matchesSelector ||
      x.mozMatchesSelector ||
      x.msMatchesSelector ||
      x.oMatchesSelector ||
      x.webkitMatchesSelector,
    qa = document.createTextNode(''),
    ra = 0,
    sa = [];
  new MutationObserver(function() {
    for (; sa.length; )
      try {
        sa.shift()();
      } catch (a) {
        throw ((qa.textContent = ra++), a);
      }
  }).observe(qa, { characterData: !0 });
  function ta(a) {
    sa.push(a);
    qa.textContent = ra++;
  }
  var ua = !!document.contains;
  function va(a, b) {
    for (; b; ) {
      if (b == a) return !0;
      b = b.__shady_parentNode;
    }
    return !1;
  }
  function wa(a) {
    for (var b = a.length - 1; 0 <= b; b--) {
      var c = a[b],
        d = c.getAttribute('id') || c.getAttribute('name');
      d && 'length' !== d && isNaN(d) && (a[d] = c);
    }
    a.item = function(b) {
      return a[b];
    };
    a.namedItem = function(b) {
      if ('length' !== b && isNaN(b) && a[b]) return a[b];
      for (var c = ja(a), d = c.next(); !d.done; d = c.next())
        if (((d = d.value), (d.getAttribute('id') || d.getAttribute('name')) == b)) return d;
      return null;
    };
    return a;
  }
  function y(a, b, c, d) {
    c = void 0 === c ? '' : c;
    for (var e in b) {
      var f = b[e];
      if (!(d && 0 <= d.indexOf(e))) {
        f.configurable = !0;
        var g = c + e;
        if (f.value) a[g] = f.value;
        else
          try {
            Object.defineProperty(a, g, f);
          } catch (h) {}
      }
    }
  }
  function z(a) {
    var b = {};
    Object.getOwnPropertyNames(a).forEach(function(c) {
      b[c] = Object.getOwnPropertyDescriptor(a, c);
    });
    return b;
  }
  var A = [],
    xa;
  function ya(a) {
    xa || ((xa = !0), ta(za));
    A.push(a);
  }
  function za() {
    xa = !1;
    for (var a = !!A.length; A.length; ) A.shift()();
    return a;
  }
  za.list = A;
  function Aa() {
    this.a = !1;
    this.addedNodes = [];
    this.removedNodes = [];
    this.J = new Set();
  }
  function Ba(a) {
    a.a ||
      ((a.a = !0),
      ta(function() {
        a.flush();
      }));
  }
  Aa.prototype.flush = function() {
    if (this.a) {
      this.a = !1;
      var a = this.takeRecords();
      a.length &&
        this.J.forEach(function(b) {
          b(a);
        });
    }
  };
  Aa.prototype.takeRecords = function() {
    if (this.addedNodes.length || this.removedNodes.length) {
      var a = [{ addedNodes: this.addedNodes, removedNodes: this.removedNodes }];
      this.addedNodes = [];
      this.removedNodes = [];
      return a;
    }
    return [];
  };
  function Ca(a, b) {
    var c = q(a);
    c.w || (c.w = new Aa());
    c.w.J.add(b);
    var d = c.w;
    return {
      fa: b,
      ia: d,
      ha: a,
      takeRecords: function() {
        return d.takeRecords();
      }
    };
  }
  function Da(a) {
    var b = a && a.ia;
    b && (b.J.delete(a.fa), b.J.size || (q(a.ha).w = null));
  }
  function Ea(a, b) {
    var c = b.getRootNode();
    return a
      .map(function(a) {
        var b = c === a.target.getRootNode();
        if (b && a.addedNodes) {
          if (
            ((b = Array.from(a.addedNodes).filter(function(a) {
              return c === a.getRootNode();
            })),
            b.length)
          )
            return (a = Object.create(a)), Object.defineProperty(a, 'addedNodes', { value: b, configurable: !0 }), a;
        } else if (b) return a;
      })
      .filter(function(a) {
        return a;
      });
  }
  var Ga = /[&\u00A0"]/g,
    Ha = /[&\u00A0<>]/g;
  function Ia(a) {
    switch (a) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case '\u00a0':
        return '&nbsp;';
    }
  }
  function Ja(a) {
    for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;
    return b;
  }
  var Ka = Ja('area base br col command embed hr img input keygen link meta param source track wbr'.split(' ')),
    La = Ja('style script xmp iframe noembed noframes plaintext noscript'.split(' '));
  function Ma(a, b) {
    'template' === a.localName && (a = a.content);
    for (var c = '', d = b ? b(a) : a.childNodes, e = 0, f = d.length, g = void 0; e < f && (g = d[e]); e++) {
      a: {
        var h = g;
        var k = a,
          l = b;
        switch (h.nodeType) {
          case Node.ELEMENT_NODE:
            k = h.localName;
            for (var p = '<' + k, u = h.attributes, aa = 0, ba; (ba = u[aa]); aa++)
              p += ' ' + ba.name + '="' + ba.value.replace(Ga, Ia) + '"';
            p += '>';
            h = Ka[k] ? p : p + Ma(h, l) + '</' + k + '>';
            break a;
          case Node.TEXT_NODE:
            h = h.data;
            h = k && La[k.localName] ? h : h.replace(Ha, Ia);
            break a;
          case Node.COMMENT_NODE:
            h = '\x3c!--' + h.data + '--\x3e';
            break a;
          default:
            throw (window.console.error(h), Error('not implemented'));
        }
      }
      c += h;
    }
    return c;
  }
  var Na = t.i,
    Oa = {
      querySelector: function(a) {
        return this.__shady_native_querySelector(a);
      },
      querySelectorAll: function(a) {
        return this.__shady_native_querySelectorAll(a);
      }
    },
    Pa = {};
  function Qa(a) {
    Pa[a] = function(b) {
      return b['__shady_native_' + a];
    };
  }
  function Ra(a, b) {
    y(a, b, '__shady_native_');
    for (var c in b) Qa(c);
  }
  function B(a, b) {
    b = void 0 === b ? [] : b;
    for (var c = 0; c < b.length; c++) {
      var d = b[c],
        e = Object.getOwnPropertyDescriptor(a, d);
      e && (Object.defineProperty(a, '__shady_native_' + d, e), e.value ? Oa[d] || (Oa[d] = e.value) : Qa(d));
    }
  }
  var C = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
    D = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1),
    Sa = document.implementation.createHTMLDocument('inert');
  function Ta(a) {
    for (var b; (b = a.__shady_native_firstChild); ) a.__shady_native_removeChild(b);
  }
  var Ua = ['firstElementChild', 'lastElementChild', 'children', 'childElementCount'],
    Va = ['querySelector', 'querySelectorAll'];
  function Wa() {
    var a = ['dispatchEvent', 'addEventListener', 'removeEventListener'];
    window.EventTarget ? B(window.EventTarget.prototype, a) : (B(Node.prototype, a), B(Window.prototype, a));
    Na
      ? B(
          Node.prototype,
          'parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent'.split(' ')
        )
      : Ra(Node.prototype, {
          parentNode: {
            get: function() {
              C.currentNode = this;
              return C.parentNode();
            }
          },
          firstChild: {
            get: function() {
              C.currentNode = this;
              return C.firstChild();
            }
          },
          lastChild: {
            get: function() {
              C.currentNode = this;
              return C.lastChild();
            }
          },
          previousSibling: {
            get: function() {
              C.currentNode = this;
              return C.previousSibling();
            }
          },
          nextSibling: {
            get: function() {
              C.currentNode = this;
              return C.nextSibling();
            }
          },
          childNodes: {
            get: function() {
              var a = [];
              C.currentNode = this;
              for (var c = C.firstChild(); c; ) a.push(c), (c = C.nextSibling());
              return a;
            }
          },
          parentElement: {
            get: function() {
              D.currentNode = this;
              return D.parentNode();
            }
          },
          textContent: {
            get: function() {
              switch (this.nodeType) {
                case Node.ELEMENT_NODE:
                case Node.DOCUMENT_FRAGMENT_NODE:
                  for (
                    var a = document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, !1), c = '', d;
                    (d = a.nextNode());

                  )
                    c += d.nodeValue;
                  return c;
                default:
                  return this.nodeValue;
              }
            },
            set: function(a) {
              if ('undefined' === typeof a || null === a) a = '';
              switch (this.nodeType) {
                case Node.ELEMENT_NODE:
                case Node.DOCUMENT_FRAGMENT_NODE:
                  Ta(this);
                  (0 < a.length || this.nodeType === Node.ELEMENT_NODE) &&
                    this.__shady_native_insertBefore(document.createTextNode(a), void 0);
                  break;
                default:
                  this.nodeValue = a;
              }
            }
          }
        });
    B(Node.prototype, 'appendChild insertBefore removeChild replaceChild cloneNode contains'.split(' '));
    a = {
      firstElementChild: {
        get: function() {
          D.currentNode = this;
          return D.firstChild();
        }
      },
      lastElementChild: {
        get: function() {
          D.currentNode = this;
          return D.lastChild();
        }
      },
      children: {
        get: function() {
          var a = [];
          D.currentNode = this;
          for (var c = D.firstChild(); c; ) a.push(c), (c = D.nextSibling());
          return wa(a);
        }
      },
      childElementCount: {
        get: function() {
          return this.children ? this.children.length : 0;
        }
      }
    };
    Na
      ? (B(Element.prototype, Ua),
        B(Element.prototype, ['previousElementSibling', 'nextElementSibling', 'innerHTML']),
        Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'children') && B(HTMLElement.prototype, ['children']),
        Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'innerHTML') && B(HTMLElement.prototype, ['innerHTML']))
      : (Ra(Element.prototype, a),
        Ra(Element.prototype, {
          previousElementSibling: {
            get: function() {
              D.currentNode = this;
              return D.previousSibling();
            }
          },
          nextElementSibling: {
            get: function() {
              D.currentNode = this;
              return D.nextSibling();
            }
          },
          innerHTML: {
            get: function() {
              return Ma(this, function(a) {
                return a.__shady_native_childNodes;
              });
            },
            set: function(a) {
              var b = 'template' === this.localName ? this.content : this;
              Ta(b);
              var d = this.localName || 'div';
              d =
                this.namespaceURI && this.namespaceURI !== Sa.namespaceURI
                  ? Sa.createElementNS(this.namespaceURI, d)
                  : Sa.createElement(d);
              d.innerHTML = a;
              for (a = 'template' === this.localName ? d.content : d; (d = a.__shady_native_firstChild); )
                b.__shady_native_insertBefore(d, void 0);
            }
          }
        }));
    B(Element.prototype, 'setAttribute getAttribute hasAttribute removeAttribute focus blur'.split(' '));
    B(Element.prototype, Va);
    B(HTMLElement.prototype, ['focus', 'blur', 'contains']);
    Na && B(HTMLElement.prototype, ['parentElement', 'children', 'innerHTML']);
    window.HTMLTemplateElement && B(window.HTMLTemplateElement.prototype, ['innerHTML']);
    Na ? B(DocumentFragment.prototype, Ua) : Ra(DocumentFragment.prototype, a);
    B(DocumentFragment.prototype, Va);
    Na ? (B(Document.prototype, Ua), B(Document.prototype, ['activeElement'])) : Ra(Document.prototype, a);
    B(Document.prototype, ['importNode', 'getElementById']);
    B(Document.prototype, Va);
  }
  var Xa = z({
      get childNodes() {
        return this.__shady_childNodes;
      },
      get firstChild() {
        return this.__shady_firstChild;
      },
      get lastChild() {
        return this.__shady_lastChild;
      },
      get textContent() {
        return this.__shady_textContent;
      },
      set textContent(a) {
        this.__shady_textContent = a;
      },
      get childElementCount() {
        return this.__shady_childElementCount;
      },
      get children() {
        return this.__shady_children;
      },
      get firstElementChild() {
        return this.__shady_firstElementChild;
      },
      get lastElementChild() {
        return this.__shady_lastElementChild;
      },
      get innerHTML() {
        return this.__shady_innerHTML;
      },
      set innerHTML(a) {
        return (this.__shady_innerHTML = a);
      },
      get shadowRoot() {
        return this.__shady_shadowRoot;
      }
    }),
    Ya = z({
      get parentElement() {
        return this.__shady_parentElement;
      },
      get parentNode() {
        return this.__shady_parentNode;
      },
      get nextSibling() {
        return this.__shady_nextSibling;
      },
      get previousSibling() {
        return this.__shady_previousSibling;
      },
      get nextElementSibling() {
        return this.__shady_nextElementSibling;
      },
      get previousElementSibling() {
        return this.__shady_previousElementSibling;
      },
      get className() {
        return this.__shady_className;
      },
      set className(a) {
        return (this.__shady_className = a);
      }
    }),
    Za;
  for (Za in Xa) Xa[Za].enumerable = !1;
  for (var $a in Ya) Ya[$a].enumerable = !1;
  var ab = t.i || t.A,
    bb = ab
      ? function() {}
      : function(a) {
          var b = q(a);
          b.X || ((b.X = !0), y(a, Ya));
        },
    cb = ab
      ? function() {}
      : function(a) {
          var b = q(a);
          b.W || ((b.W = !0), y(a, Xa));
        };
  var db = '__eventWrappers' + Date.now(),
    eb = (function() {
      var a = Object.getOwnPropertyDescriptor(Event.prototype, 'composed');
      return a
        ? function(b) {
            return a.get.call(b);
          }
        : null;
    })(),
    fb = {
      blur: !0,
      focus: !0,
      focusin: !0,
      focusout: !0,
      click: !0,
      dblclick: !0,
      mousedown: !0,
      mouseenter: !0,
      mouseleave: !0,
      mousemove: !0,
      mouseout: !0,
      mouseover: !0,
      mouseup: !0,
      wheel: !0,
      beforeinput: !0,
      input: !0,
      keydown: !0,
      keyup: !0,
      compositionstart: !0,
      compositionupdate: !0,
      compositionend: !0,
      touchstart: !0,
      touchend: !0,
      touchmove: !0,
      touchcancel: !0,
      pointerover: !0,
      pointerenter: !0,
      pointerdown: !0,
      pointermove: !0,
      pointerup: !0,
      pointercancel: !0,
      pointerout: !0,
      pointerleave: !0,
      gotpointercapture: !0,
      lostpointercapture: !0,
      dragstart: !0,
      drag: !0,
      dragenter: !0,
      dragleave: !0,
      dragover: !0,
      drop: !0,
      dragend: !0,
      DOMActivate: !0,
      DOMFocusIn: !0,
      DOMFocusOut: !0,
      keypress: !0
    },
    gb = {
      DOMAttrModified: !0,
      DOMAttributeNameChanged: !0,
      DOMCharacterDataModified: !0,
      DOMElementNameChanged: !0,
      DOMNodeInserted: !0,
      DOMNodeInsertedIntoDocument: !0,
      DOMNodeRemoved: !0,
      DOMNodeRemovedFromDocument: !0,
      DOMSubtreeModified: !0
    };
  function hb(a) {
    return a instanceof Node ? a.__shady_getRootNode() : a;
  }
  function ib(a, b) {
    var c = [],
      d = a;
    for (a = hb(a); d; )
      c.push(d),
        d.__shady_assignedSlot
          ? (d = d.__shady_assignedSlot)
          : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a)
          ? (d = d.host)
          : (d = d.__shady_parentNode);
    c[c.length - 1] === document && c.push(window);
    return c;
  }
  function jb(a) {
    a.__composedPath || (a.__composedPath = ib(a.target, !0));
    return a.__composedPath;
  }
  function kb(a, b) {
    if (!w) return a;
    a = ib(a, !0);
    for (var c = 0, d, e = void 0, f, g = void 0; c < b.length; c++)
      if (((d = b[c]), (f = hb(d)), f !== e && ((g = a.indexOf(f)), (e = f)), !w(f) || -1 < g)) return d;
  }
  function lb(a) {
    function b(b, d) {
      b = new a(b, d);
      b.__composed = d && !!d.composed;
      return b;
    }
    b.__proto__ = a;
    b.prototype = a.prototype;
    return b;
  }
  var mb = { focus: !0, blur: !0 };
  function nb(a) {
    return a.__target !== a.target || a.__relatedTarget !== a.relatedTarget;
  }
  function ob(a, b, c) {
    if ((c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]))
      for (
        var d = 0, e;
        (e = c[d]) && (!nb(a) || a.target !== a.relatedTarget) && (e.call(b, a), !a.__immediatePropagationStopped);
        d++
      );
  }
  function pb(a) {
    var b = a.composedPath();
    Object.defineProperty(a, 'currentTarget', {
      get: function() {
        return d;
      },
      configurable: !0
    });
    for (var c = b.length - 1; 0 <= c; c--) {
      var d = b[c];
      ob(a, d, 'capture');
      if (a.N) return;
    }
    Object.defineProperty(a, 'eventPhase', {
      get: function() {
        return Event.AT_TARGET;
      }
    });
    var e;
    for (c = 0; c < b.length; c++) {
      d = b[c];
      var f = r(d);
      f = f && f.root;
      if (0 === c || (f && f === e))
        if ((ob(a, d, 'bubble'), d !== window && (e = d.__shady_getRootNode()), a.N)) break;
    }
  }
  function qb(a, b, c, d, e, f) {
    for (var g = 0; g < a.length; g++) {
      var h = a[g],
        k = h.type,
        l = h.capture,
        p = h.once,
        u = h.passive;
      if (b === h.node && c === k && d === l && e === p && f === u) return g;
    }
    return -1;
  }
  function rb(a, b, c) {
    if (b) {
      var d = typeof b;
      if ('function' === d || 'object' === d)
        if ('object' !== d || (b.handleEvent && 'function' === typeof b.handleEvent)) {
          if (gb[a]) return this.__shady_native_addEventListener(a, b, c);
          if (c && 'object' === typeof c) {
            var e = !!c.capture;
            var f = !!c.once;
            var g = !!c.passive;
          } else (e = !!c), (g = f = !1);
          var h = (c && c.O) || this,
            k = b[db];
          if (k) {
            if (-1 < qb(k, h, a, e, f, g)) return;
          } else b[db] = [];
          k = function(e) {
            f && this.__shady_removeEventListener(a, b, c);
            e.__target || sb(e);
            if (h !== this) {
              var g = Object.getOwnPropertyDescriptor(e, 'currentTarget');
              Object.defineProperty(e, 'currentTarget', {
                get: function() {
                  return h;
                },
                configurable: !0
              });
            }
            e.__previousCurrentTarget = e.currentTarget;
            if (!w(h) || -1 != e.composedPath().indexOf(h))
              if (e.composed || -1 < e.composedPath().indexOf(h))
                if (nb(e) && e.target === e.relatedTarget)
                  e.eventPhase === Event.BUBBLING_PHASE && e.stopImmediatePropagation();
                else if (e.eventPhase === Event.CAPTURING_PHASE || e.bubbles || e.target === h || h instanceof Window) {
                  var k = 'function' === d ? b.call(h, e) : b.handleEvent && b.handleEvent(e);
                  h !== this &&
                    (g ? (Object.defineProperty(e, 'currentTarget', g), (g = null)) : delete e.currentTarget);
                  return k;
                }
          };
          b[db].push({ node: h, type: a, capture: e, once: f, passive: g, xa: k });
          mb[a]
            ? ((this.__handlers = this.__handlers || {}),
              (this.__handlers[a] = this.__handlers[a] || { capture: [], bubble: [] }),
              this.__handlers[a][e ? 'capture' : 'bubble'].push(k))
            : this.__shady_native_addEventListener(a, k, c);
        }
    }
  }
  function tb(a, b, c) {
    if (b) {
      if (gb[a]) return this.__shady_native_removeEventListener(a, b, c);
      if (c && 'object' === typeof c) {
        var d = !!c.capture;
        var e = !!c.once;
        var f = !!c.passive;
      } else (d = !!c), (f = e = !1);
      var g = (c && c.O) || this,
        h = void 0;
      var k = null;
      try {
        k = b[db];
      } catch (l) {}
      k && ((e = qb(k, g, a, d, e, f)), -1 < e && ((h = k.splice(e, 1)[0].xa), k.length || (b[db] = void 0)));
      this.__shady_native_removeEventListener(a, h || b, c);
      h &&
        mb[a] &&
        this.__handlers &&
        this.__handlers[a] &&
        ((a = this.__handlers[a][d ? 'capture' : 'bubble']), (h = a.indexOf(h)), -1 < h && a.splice(h, 1));
    }
  }
  function ub() {
    for (var a in mb)
      window.__shady_native_addEventListener(
        a,
        function(a) {
          a.__target || (sb(a), pb(a));
        },
        !0
      );
  }
  var vb = z({
    get composed() {
      void 0 === this.__composed &&
        (eb
          ? (this.__composed = 'focusin' === this.type || 'focusout' === this.type || eb(this))
          : !1 !== this.isTrusted && (this.__composed = fb[this.type]));
      return this.__composed || !1;
    },
    composedPath: function() {
      this.__composedPath || (this.__composedPath = ib(this.__target, this.composed));
      return this.__composedPath;
    },
    get target() {
      return kb(this.currentTarget || this.__previousCurrentTarget, this.composedPath());
    },
    get relatedTarget() {
      if (!this.__relatedTarget) return null;
      this.__relatedTargetComposedPath || (this.__relatedTargetComposedPath = ib(this.__relatedTarget, !0));
      return kb(this.currentTarget || this.__previousCurrentTarget, this.__relatedTargetComposedPath);
    },
    stopPropagation: function() {
      Event.prototype.stopPropagation.call(this);
      this.N = !0;
    },
    stopImmediatePropagation: function() {
      Event.prototype.stopImmediatePropagation.call(this);
      this.N = this.__immediatePropagationStopped = !0;
    }
  });
  function sb(a) {
    a.__target = a.target;
    a.__relatedTarget = a.relatedTarget;
    if (t.i) {
      var b = Object.getPrototypeOf(a);
      if (!Object.hasOwnProperty(b, '__shady_patchedProto')) {
        var c = Object.create(b);
        c.__shady_sourceProto = b;
        y(c, vb);
        b.__shady_patchedProto = c;
      }
      a.__proto__ = b.__shady_patchedProto;
    } else y(a, vb);
  }
  var wb = lb(Event),
    xb = lb(CustomEvent),
    yb = lb(MouseEvent);
  function zb() {
    if (!eb && Object.getOwnPropertyDescriptor(Event.prototype, 'isTrusted')) {
      var a = function() {
        var a = new MouseEvent('click', { bubbles: !0, cancelable: !0, composed: !0 });
        this.__shady_dispatchEvent(a);
      };
      Element.prototype.click
        ? (Element.prototype.click = a)
        : HTMLElement.prototype.click && (HTMLElement.prototype.click = a);
    }
  }
  var Ab = Object.getOwnPropertyNames(Document.prototype).filter(function(a) {
    return 'on' === a.substring(0, 2);
  });
  function Bb(a, b) {
    return { index: a, C: [], I: b };
  }
  function Cb(a, b, c, d) {
    var e = 0,
      f = 0,
      g = 0,
      h = 0,
      k = Math.min(b - e, d - f);
    if (0 == e && 0 == f)
      a: {
        for (g = 0; g < k; g++) if (a[g] !== c[g]) break a;
        g = k;
      }
    if (b == a.length && d == c.length) {
      h = a.length;
      for (var l = c.length, p = 0; p < k - g && Db(a[--h], c[--l]); ) p++;
      h = p;
    }
    e += g;
    f += g;
    b -= h;
    d -= h;
    if (0 == b - e && 0 == d - f) return [];
    if (e == b) {
      for (b = Bb(e, 0); f < d; ) b.C.push(c[f++]);
      return [b];
    }
    if (f == d) return [Bb(e, b - e)];
    k = e;
    g = f;
    d = d - g + 1;
    h = b - k + 1;
    b = Array(d);
    for (l = 0; l < d; l++) (b[l] = Array(h)), (b[l][0] = l);
    for (l = 0; l < h; l++) b[0][l] = l;
    for (l = 1; l < d; l++)
      for (p = 1; p < h; p++)
        if (a[k + p - 1] === c[g + l - 1]) b[l][p] = b[l - 1][p - 1];
        else {
          var u = b[l - 1][p] + 1,
            aa = b[l][p - 1] + 1;
          b[l][p] = u < aa ? u : aa;
        }
    k = b.length - 1;
    g = b[0].length - 1;
    d = b[k][g];
    for (a = []; 0 < k || 0 < g; )
      0 == k
        ? (a.push(2), g--)
        : 0 == g
        ? (a.push(3), k--)
        : ((h = b[k - 1][g - 1]),
          (l = b[k - 1][g]),
          (p = b[k][g - 1]),
          (u = l < p ? (l < h ? l : h) : p < h ? p : h),
          u == h
            ? (h == d ? a.push(0) : (a.push(1), (d = h)), k--, g--)
            : u == l
            ? (a.push(3), k--, (d = l))
            : (a.push(2), g--, (d = p)));
    a.reverse();
    b = void 0;
    k = [];
    for (g = 0; g < a.length; g++)
      switch (a[g]) {
        case 0:
          b && (k.push(b), (b = void 0));
          e++;
          f++;
          break;
        case 1:
          b || (b = Bb(e, 0));
          b.I++;
          e++;
          b.C.push(c[f]);
          f++;
          break;
        case 2:
          b || (b = Bb(e, 0));
          b.I++;
          e++;
          break;
        case 3:
          b || (b = Bb(e, 0)), b.C.push(c[f]), f++;
      }
    b && k.push(b);
    return k;
  }
  function Db(a, b) {
    return a === b;
  }
  function Eb(a, b, c) {
    bb(a);
    c = c || null;
    var d = q(a),
      e = q(b),
      f = c ? q(c) : null;
    d.previousSibling = c ? f.previousSibling : b.__shady_lastChild;
    if ((f = r(d.previousSibling))) f.nextSibling = a;
    if ((f = r((d.nextSibling = c)))) f.previousSibling = a;
    d.parentNode = b;
    c ? c === e.firstChild && (e.firstChild = a) : ((e.lastChild = a), e.firstChild || (e.firstChild = a));
    e.childNodes = null;
  }
  function Fb(a, b, c) {
    cb(b);
    var d = q(b);
    void 0 !== d.firstChild && (d.childNodes = null);
    if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      d = a.__shady_childNodes;
      for (var e = 0; e < d.length; e++) Eb(d[e], b, c);
      a = q(a);
      b = void 0 !== a.firstChild ? null : void 0;
      a.firstChild = a.lastChild = b;
      a.childNodes = b;
    } else Eb(a, b, c);
  }
  function Gb(a, b) {
    var c = q(a);
    b = q(b);
    a === b.firstChild && (b.firstChild = c.nextSibling);
    a === b.lastChild && (b.lastChild = c.previousSibling);
    a = c.previousSibling;
    var d = c.nextSibling;
    a && (q(a).nextSibling = d);
    d && (q(d).previousSibling = a);
    c.parentNode = c.previousSibling = c.nextSibling = void 0;
    void 0 !== b.childNodes && (b.childNodes = null);
  }
  function Hb(a) {
    var b = q(a);
    if (void 0 === b.firstChild) {
      b.childNodes = null;
      var c = (b.firstChild = a.__shady_native_firstChild || null);
      b.lastChild = a.__shady_native_lastChild || null;
      cb(a);
      b = c;
      for (c = void 0; b; b = b.__shady_native_nextSibling) {
        var d = q(b);
        d.parentNode = a;
        d.nextSibling = b.__shady_native_nextSibling || null;
        d.previousSibling = c || null;
        c = b;
        bb(b);
      }
    }
  }
  var Ib = null;
  function E() {
    Ib || (Ib = window.ShadyCSS && window.ShadyCSS.ScopingShim);
    return Ib || null;
  }
  function Jb(a, b) {
    var c = E();
    c && c.unscopeNode(a, b);
  }
  function Kb(a, b) {
    var c = E();
    if (!c) return !0;
    if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      c = !0;
      a = a.__shady_childNodes;
      for (var d = 0; c && d < a.length; d++) c = c && Kb(a[d], b);
      return c;
    }
    return a.nodeType !== Node.ELEMENT_NODE ? !0 : c.currentScopeForNode(a) === b;
  }
  function Lb(a) {
    if (a.nodeType !== Node.ELEMENT_NODE) return '';
    var b = E();
    return b ? b.currentScopeForNode(a) : '';
  }
  function Mb(a, b) {
    if (a) {
      a.nodeType === Node.ELEMENT_NODE && b(a);
      a = a.__shady_childNodes;
      for (var c = 0, d; c < a.length; c++) (d = a[c]), d.nodeType === Node.ELEMENT_NODE && Mb(d, b);
    }
  }
  var Nb = window.document,
    Ob = t.$,
    Pb = Object.getOwnPropertyDescriptor(Node.prototype, 'isConnected'),
    Qb = Pb && Pb.get;
  function Rb(a) {
    for (var b; (b = a.__shady_firstChild); ) a.__shady_removeChild(b);
  }
  function Sb(a) {
    var b = r(a);
    if (b && void 0 !== b.B) {
      b = a.__shady_childNodes;
      for (var c = 0, d = b.length, e = void 0; c < d && (e = b[c]); c++) Sb(e);
    }
    if ((a = r(a))) a.B = void 0;
  }
  function Tb(a) {
    var b = a;
    a && 'slot' === a.localName && (b = (b = (b = r(a)) && b.v) && b.length ? b[0] : Tb(a.__shady_nextSibling));
    return b;
  }
  function Ub(a, b, c) {
    if ((a = (a = r(a)) && a.w)) b && a.addedNodes.push(b), c && a.removedNodes.push(c), Ba(a);
  }
  var Wb = z({
    get parentNode() {
      var a = r(this);
      a = a && a.parentNode;
      return void 0 !== a ? a : this.__shady_native_parentNode;
    },
    get firstChild() {
      var a = r(this);
      a = a && a.firstChild;
      return void 0 !== a ? a : this.__shady_native_firstChild;
    },
    get lastChild() {
      var a = r(this);
      a = a && a.lastChild;
      return void 0 !== a ? a : this.__shady_native_lastChild;
    },
    get nextSibling() {
      var a = r(this);
      a = a && a.nextSibling;
      return void 0 !== a ? a : this.__shady_native_nextSibling;
    },
    get previousSibling() {
      var a = r(this);
      a = a && a.previousSibling;
      return void 0 !== a ? a : this.__shady_native_previousSibling;
    },
    get childNodes() {
      if (v(this)) {
        var a = r(this);
        if (!a.childNodes) {
          a.childNodes = [];
          for (var b = this.__shady_firstChild; b; b = b.__shady_nextSibling) a.childNodes.push(b);
        }
        var c = a.childNodes;
      } else c = this.__shady_native_childNodes;
      c.item = function(a) {
        return c[a];
      };
      return c;
    },
    get parentElement() {
      var a = r(this);
      (a = a && a.parentNode) && a.nodeType !== Node.ELEMENT_NODE && (a = null);
      return void 0 !== a ? a : this.__shady_native_parentElement;
    },
    get isConnected() {
      if (Qb && Qb.call(this)) return !0;
      if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
      var a = this.ownerDocument;
      if (ua) {
        if (a.__shady_native_contains(this)) return !0;
      } else if (a.documentElement && a.documentElement.__shady_native_contains(this)) return !0;
      for (a = this; a && !(a instanceof Document); ) a = a.__shady_parentNode || (w(a) ? a.host : void 0);
      return !!(a && a instanceof Document);
    },
    get textContent() {
      if (v(this)) {
        for (var a = [], b = 0, c = this.__shady_childNodes, d; (d = c[b]); b++)
          d.nodeType !== Node.COMMENT_NODE && a.push(d.__shady_textContent);
        return a.join('');
      }
      return this.__shady_native_textContent;
    },
    set textContent(a) {
      if ('undefined' === typeof a || null === a) a = '';
      switch (this.nodeType) {
        case Node.ELEMENT_NODE:
        case Node.DOCUMENT_FRAGMENT_NODE:
          if (!v(this) && t.i) {
            var b = this.__shady_firstChild;
            (b != this.__shady_lastChild || (b && b.nodeType != Node.TEXT_NODE)) && Rb(this);
            this.__shady_native_textContent = a;
          } else
            Rb(this),
              (0 < a.length || this.nodeType === Node.ELEMENT_NODE) &&
                this.__shady_insertBefore(document.createTextNode(a));
          break;
        default:
          this.nodeValue = a;
      }
    },
    insertBefore: function(a, b) {
      if (this.ownerDocument !== Nb && a.ownerDocument !== Nb) return this.__shady_native_insertBefore(a, b), a;
      if (a === this)
        throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
      if (b) {
        var c = r(b);
        c = c && c.parentNode;
        if ((void 0 !== c && c !== this) || (void 0 === c && b.__shady_native_parentNode !== this))
          throw Error(
            "Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node."
          );
      }
      if (b === a) return a;
      var d = [],
        e = (c = F(this)) ? c.host.localName : Lb(this),
        f = a.__shady_parentNode;
      if (f) {
        var g = Lb(a);
        f.__shady_removeChild(a, !!c || !F(a));
      }
      f = !0;
      var h = (!Ob || void 0 === a.__noInsertionPoint) && !Kb(a, e),
        k = c && !a.__noInsertionPoint && (!Ob || a.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
      if (k || h)
        h && (g = g || Lb(a)),
          Mb(a, function(a) {
            k && 'slot' === a.localName && d.push(a);
            if (h) {
              var b = g;
              E() && (b && Jb(a, b), (b = E()) && b.scopeNode(a, e));
            }
          });
      if ('slot' === this.localName || d.length)
        d.length &&
          ((c.c = c.c || []),
          (c.a = c.a || []),
          (c.b = c.b || {}),
          c.c.push.apply(c.c, d instanceof Array ? d : ka(ja(d)))),
          c && G(c);
      v(this) && (Fb(a, this, b), (c = r(this)), na(this) ? (G(c.root), (f = !1)) : c.root && (f = !1));
      f
        ? ((c = w(this) ? this.host : this),
          b ? ((b = Tb(b)), c.__shady_native_insertBefore(a, b)) : c.__shady_native_appendChild(a))
        : a.ownerDocument !== this.ownerDocument && this.ownerDocument.adoptNode(a);
      Ub(this, a);
      return a;
    },
    appendChild: function(a) {
      return this.__shady_insertBefore(a);
    },
    removeChild: function(a, b) {
      b = void 0 === b ? !1 : b;
      if (this.ownerDocument !== Nb) return this.__shady_native_removeChild(a);
      if (a.__shady_parentNode !== this) throw Error('The node to be removed is not a child of this node: ' + a);
      var c = F(a),
        d = c && Vb(c, a),
        e = r(this);
      if (v(this) && (Gb(a, this), na(this))) {
        G(e.root);
        var f = !0;
      }
      if (E() && !b && c) {
        var g = Lb(a);
        Mb(a, function(a) {
          Jb(a, g);
        });
      }
      Sb(a);
      c && ((b = this && 'slot' === this.localName) && (f = !0), (d || b) && G(c));
      f ||
        ((f = w(this) ? this.host : this),
        ((!e.root && 'slot' !== a.localName) || f === a.__shady_native_parentNode) && f.__shady_native_removeChild(a));
      Ub(this, null, a);
      return a;
    },
    replaceChild: function(a, b) {
      this.__shady_insertBefore(a, b);
      this.__shady_removeChild(b);
      return a;
    },
    cloneNode: function(a) {
      if ('template' == this.localName) return this.__shady_native_cloneNode(a);
      var b = this.__shady_native_cloneNode(!1);
      if (a && b.nodeType !== Node.ATTRIBUTE_NODE) {
        a = this.__shady_childNodes;
        for (var c = 0, d; c < a.length; c++) (d = a[c].__shady_cloneNode(!0)), b.__shady_appendChild(d);
      }
      return b;
    },
    getRootNode: function(a) {
      if (this && this.nodeType) {
        var b = q(this),
          c = b.B;
        void 0 === c &&
          (w(this)
            ? ((c = this), (b.B = c))
            : ((c = (c = this.__shady_parentNode) ? c.__shady_getRootNode(a) : this),
              document.documentElement.__shady_native_contains(this) && (b.B = c)));
        return c;
      }
    },
    contains: function(a) {
      return va(this, a);
    }
  });
  function Xb(a, b, c) {
    var d = [];
    Yb(a.__shady_childNodes, b, c, d);
    return d;
  }
  function Yb(a, b, c, d) {
    for (var e = 0, f = a.length, g = void 0; e < f && (g = a[e]); e++) {
      var h;
      if ((h = g.nodeType === Node.ELEMENT_NODE)) {
        h = g;
        var k = b,
          l = c,
          p = d,
          u = k(h);
        u && p.push(h);
        l && l(u) ? (h = u) : (Yb(h.__shady_childNodes, k, l, p), (h = void 0));
      }
      if (h) break;
    }
  }
  var H = z({
      get firstElementChild() {
        var a = r(this);
        if (a && void 0 !== a.firstChild) {
          for (a = this.__shady_firstChild; a && a.nodeType !== Node.ELEMENT_NODE; ) a = a.__shady_nextSibling;
          return a;
        }
        return this.__shady_native_firstElementChild;
      },
      get lastElementChild() {
        var a = r(this);
        if (a && void 0 !== a.lastChild) {
          for (a = this.__shady_lastChild; a && a.nodeType !== Node.ELEMENT_NODE; ) a = a.__shady_previousSibling;
          return a;
        }
        return this.__shady_native_lastElementChild;
      },
      get children() {
        return v(this)
          ? wa(
              Array.prototype.filter.call(this.__shady_childNodes, function(a) {
                return a.nodeType === Node.ELEMENT_NODE;
              })
            )
          : this.__shady_native_children;
      },
      get childElementCount() {
        var a = this.__shady_children;
        return a ? a.length : 0;
      }
    }),
    Zb = z({
      querySelector: function(a) {
        return (
          Xb(
            this,
            function(b) {
              return pa.call(b, a);
            },
            function(a) {
              return !!a;
            }
          )[0] || null
        );
      },
      querySelectorAll: function(a, b) {
        if (b) {
          b = Array.prototype.slice.call(this.__shady_native_querySelectorAll(a));
          var c = this.__shady_getRootNode();
          return b.filter(function(a) {
            return a.__shady_getRootNode() == c;
          });
        }
        return Xb(this, function(b) {
          return pa.call(b, a);
        });
      }
    }),
    $b = t.$ ? Object.assign({}, H) : H;
  Object.assign(H, Zb);
  var ac = z({
    getElementById: function(a) {
      return '' === a
        ? null
        : Xb(
            this,
            function(b) {
              return b.id == a;
            },
            function(a) {
              return !!a;
            }
          )[0] || null;
    }
  });
  var bc = z({
    get activeElement() {
      var a = t.i ? document.__shady_native_activeElement : document.activeElement;
      if (!a || !a.nodeType) return null;
      var b = !!w(this);
      if (!(this === document || (b && this.host !== a && this.host.__shady_native_contains(a)))) return null;
      for (b = F(a); b && b !== this; ) (a = b.host), (b = F(a));
      return this === document ? (b ? null : a) : b === this ? a : null;
    }
  });
  var cc = document.implementation.createHTMLDocument('inert'),
    dc = z({
      get innerHTML() {
        return v(this)
          ? Ma('template' === this.localName ? this.content : this, function(a) {
              return a.__shady_childNodes;
            })
          : this.__shady_native_innerHTML;
      },
      set innerHTML(a) {
        if ('template' === this.localName) this.__shady_native_innerHTML = a;
        else {
          Rb(this);
          var b = this.localName || 'div';
          b =
            this.namespaceURI && this.namespaceURI !== cc.namespaceURI
              ? cc.createElementNS(this.namespaceURI, b)
              : cc.createElement(b);
          for (t.i ? (b.__shady_native_innerHTML = a) : (b.innerHTML = a); (a = b.__shady_firstChild); )
            this.__shady_insertBefore(a);
        }
      }
    });
  var ec = z({
    addEventListener: function(a, b, c) {
      'object' !== typeof c && (c = { capture: !!c });
      c.O = this;
      this.host.__shady_addEventListener(a, b, c);
    },
    removeEventListener: function(a, b, c) {
      'object' !== typeof c && (c = { capture: !!c });
      c.O = this;
      this.host.__shady_removeEventListener(a, b, c);
    }
  });
  function fc(a, b) {
    y(a, ec, b);
    y(a, bc, b);
    y(a, dc, b);
    y(a, H, b);
    t.A && !b ? (y(a, Wb, b), y(a, ac, b)) : t.i || (y(a, Ya), y(a, Xa));
  }
  var gc = {},
    I = t.deferConnectionCallbacks && 'loading' === document.readyState,
    hc;
  function ic(a) {
    var b = [];
    do b.unshift(a);
    while ((a = a.__shady_parentNode));
    return b;
  }
  function jc(a, b, c) {
    if (a !== gc) throw new TypeError('Illegal constructor');
    this.ga = 'ShadyRoot';
    this.host = b;
    this.mode = c && c.mode;
    Hb(b);
    a = q(b);
    a.root = this;
    a.aa = 'closed' !== this.mode ? this : null;
    a = q(this);
    a.firstChild = a.lastChild = a.parentNode = a.nextSibling = a.previousSibling = null;
    a.childNodes = [];
    this.P = this.u = !1;
    this.c = this.b = this.a = null;
    if (t.preferPerformance) for (; (a = b.__shady_native_firstChild); ) b.__shady_native_removeChild(a);
    else G(this);
  }
  function G(a) {
    a.u ||
      ((a.u = !0),
      ya(function() {
        return kc(a);
      }));
  }
  function kc(a) {
    var b;
    if ((b = a.u)) {
      for (var c; a; )
        a: {
          a.u && (c = a), (b = a);
          a = b.host.__shady_getRootNode();
          if (w(a) && (b = r(b.host)) && 0 < b.F) break a;
          a = void 0;
        }
      b = c;
    }
    (c = b) && c._renderSelf();
  }
  jc.prototype._renderSelf = function() {
    var a = I;
    I = !0;
    this.u = !1;
    if (this.a) {
      lc(this);
      for (var b = 0, c; b < this.a.length; b++) {
        c = this.a[b];
        var d = r(c),
          e = d.assignedNodes;
        d.assignedNodes = [];
        d.v = [];
        if ((d.R = e))
          for (d = 0; d < e.length; d++) {
            var f = r(e[d]);
            f.H = f.assignedSlot;
            f.assignedSlot === c && (f.assignedSlot = null);
          }
      }
      for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) mc(this, b);
      for (b = 0; b < this.a.length; b++) {
        c = this.a[b];
        e = r(c);
        if (!e.assignedNodes.length) for (d = c.__shady_firstChild; d; d = d.__shady_nextSibling) mc(this, d, c);
        (d = (d = r(c.__shady_parentNode)) && d.root) && (oa(d) || d.u) && d._renderSelf();
        nc(this, e.v, e.assignedNodes);
        if ((d = e.R)) {
          for (f = 0; f < d.length; f++) r(d[f]).H = null;
          e.R = null;
          d.length > e.assignedNodes.length && (e.K = !0);
        }
        e.K && ((e.K = !1), oc(this, c));
      }
      c = this.a;
      b = [];
      for (e = 0; e < c.length; e++)
        (d = c[e].__shady_parentNode), ((f = r(d)) && f.root) || !(0 > b.indexOf(d)) || b.push(d);
      for (c = 0; c < b.length; c++) {
        f = b[c];
        e = f === this ? this.host : f;
        d = [];
        f = f.__shady_childNodes;
        for (var g = 0; g < f.length; g++) {
          var h = f[g];
          if ('slot' == h.localName) {
            h = r(h).v;
            for (var k = 0; k < h.length; k++) d.push(h[k]);
          } else d.push(h);
        }
        f = Array.prototype.slice.call(e.__shady_native_childNodes);
        g = Cb(d, d.length, f, f.length);
        k = h = 0;
        for (var l = void 0; h < g.length && (l = g[h]); h++) {
          for (var p = 0, u = void 0; p < l.C.length && (u = l.C[p]); p++)
            u.__shady_native_parentNode === e && e.__shady_native_removeChild(u), f.splice(l.index + k, 1);
          k -= l.I;
        }
        k = 0;
        for (l = void 0; k < g.length && (l = g[k]); k++)
          for (h = f[l.index], p = l.index; p < l.index + l.I; p++)
            (u = d[p]), e.__shady_native_insertBefore(u, h), f.splice(p, 0, u);
      }
    }
    if (!t.preferPerformance && !this.P)
      for (b = this.host.__shady_childNodes, c = 0, e = b.length; c < e; c++)
        (d = b[c]),
          (f = r(d)),
          d.__shady_native_parentNode !== this.host ||
            ('slot' !== d.localName && f.assignedSlot) ||
            this.host.__shady_native_removeChild(d);
    this.P = !0;
    I = a;
    hc && hc();
  };
  function mc(a, b, c) {
    var d = q(b),
      e = d.H;
    d.H = null;
    c || (c = (a = a.b[b.__shady_slot || '__catchall']) && a[0]);
    c ? (q(c).assignedNodes.push(b), (d.assignedSlot = c)) : (d.assignedSlot = void 0);
    e !== d.assignedSlot && d.assignedSlot && (q(d.assignedSlot).K = !0);
  }
  function nc(a, b, c) {
    for (var d = 0, e = void 0; d < c.length && (e = c[d]); d++)
      if ('slot' == e.localName) {
        var f = r(e).assignedNodes;
        f && f.length && nc(a, b, f);
      } else b.push(c[d]);
  }
  function oc(a, b) {
    b.__shady_native_dispatchEvent(new Event('slotchange'));
    b = r(b);
    b.assignedSlot && oc(a, b.assignedSlot);
  }
  function lc(a) {
    if (a.c && a.c.length) {
      for (var b = a.c, c, d = 0; d < b.length; d++) {
        var e = b[d];
        Hb(e);
        var f = e.__shady_parentNode;
        Hb(f);
        f = r(f);
        f.F = (f.F || 0) + 1;
        f = pc(e);
        a.b[f] ? ((c = c || {}), (c[f] = !0), a.b[f].push(e)) : (a.b[f] = [e]);
        a.a.push(e);
      }
      if (c) for (var g in c) a.b[g] = qc(a.b[g]);
      a.c = [];
    }
  }
  function pc(a) {
    var b = a.name || a.getAttribute('name') || '__catchall';
    return (a.ea = b);
  }
  function qc(a) {
    return a.sort(function(a, c) {
      a = ic(a);
      for (var b = ic(c), e = 0; e < a.length; e++) {
        c = a[e];
        var f = b[e];
        if (c !== f) return (a = Array.from(c.__shady_parentNode.__shady_childNodes)), a.indexOf(c) - a.indexOf(f);
      }
    });
  }
  function Vb(a, b) {
    if (a.a) {
      lc(a);
      var c = a.b,
        d;
      for (d in c)
        for (var e = c[d], f = 0; f < e.length; f++) {
          var g = e[f];
          if (va(b, g)) {
            e.splice(f, 1);
            var h = a.a.indexOf(g);
            0 <= h && (a.a.splice(h, 1), (h = r(g.__shady_parentNode)) && h.F && h.F--);
            f--;
            g = r(g);
            if ((h = g.v))
              for (var k = 0; k < h.length; k++) {
                var l = h[k],
                  p = l.__shady_native_parentNode;
                p && p.__shady_native_removeChild(l);
              }
            g.v = [];
            g.assignedNodes = [];
            h = !0;
          }
        }
      return h;
    }
  }
  function oa(a) {
    lc(a);
    return !(!a.a || !a.a.length);
  }
  (function(a) {
    a.__proto__ = DocumentFragment.prototype;
    fc(a, '__shady_');
    fc(a);
    Object.defineProperties(a, {
      nodeType: { value: Node.DOCUMENT_FRAGMENT_NODE, configurable: !0 },
      nodeName: { value: '#document-fragment', configurable: !0 },
      nodeValue: { value: null, configurable: !0 }
    });
    ['localName', 'namespaceURI', 'prefix'].forEach(function(b) {
      Object.defineProperty(a, b, { value: void 0, configurable: !0 });
    });
    ['ownerDocument', 'baseURI', 'isConnected'].forEach(function(b) {
      Object.defineProperty(a, b, {
        get: function() {
          return this.host[b];
        },
        configurable: !0
      });
    });
  })(jc.prototype);
  if (window.customElements && t.T && !t.preferPerformance) {
    var rc = new Map();
    hc = function() {
      var a = [];
      rc.forEach(function(b, c) {
        a.push([c, b]);
      });
      rc.clear();
      for (var b = 0; b < a.length; b++) {
        var c = a[b][0];
        a[b][1] ? c.ca() : c.da();
      }
    };
    I &&
      document.addEventListener(
        'readystatechange',
        function() {
          I = !1;
          hc();
        },
        { once: !0 }
      );
    var sc = function(a, b, c) {
        var d = 0,
          e = '__isConnected' + d++;
        if (b || c)
          (a.prototype.connectedCallback = a.prototype.ca = function() {
            I ? rc.set(this, !0) : this[e] || ((this[e] = !0), b && b.call(this));
          }),
            (a.prototype.disconnectedCallback = a.prototype.da = function() {
              I ? this.isConnected || rc.set(this, !1) : this[e] && ((this[e] = !1), c && c.call(this));
            });
        return a;
      },
      define = window.customElements.define;
    Object.defineProperty(window.CustomElementRegistry.prototype, 'define', {
      value: function(a, b) {
        var c = b.prototype.connectedCallback,
          d = b.prototype.disconnectedCallback;
        define.call(window.customElements, a, sc(b, c, d));
        b.prototype.connectedCallback = c;
        b.prototype.disconnectedCallback = d;
      }
    });
  }
  function F(a) {
    a = a.__shady_getRootNode();
    if (w(a)) return a;
  }
  function J(a) {
    this.node = a;
  }
  m = J.prototype;
  m.addEventListener = function(a, b, c) {
    return this.node.__shady_addEventListener(a, b, c);
  };
  m.removeEventListener = function(a, b, c) {
    return this.node.__shady_removeEventListener(a, b, c);
  };
  m.appendChild = function(a) {
    return this.node.__shady_appendChild(a);
  };
  m.insertBefore = function(a, b) {
    return this.node.__shady_insertBefore(a, b);
  };
  m.removeChild = function(a) {
    return this.node.__shady_removeChild(a);
  };
  m.replaceChild = function(a, b) {
    return this.node.__shady_replaceChild(a, b);
  };
  m.cloneNode = function(a) {
    return this.node.__shady_cloneNode(a);
  };
  m.getRootNode = function(a) {
    return this.node.__shady_getRootNode(a);
  };
  m.contains = function(a) {
    return this.node.__shady_contains(a);
  };
  m.dispatchEvent = function(a) {
    return this.node.__shady_dispatchEvent(a);
  };
  m.setAttribute = function(a, b) {
    this.node.__shady_setAttribute(a, b);
  };
  m.getAttribute = function(a) {
    return this.node.__shady_native_getAttribute(a);
  };
  m.removeAttribute = function(a) {
    this.node.__shady_removeAttribute(a);
  };
  m.attachShadow = function(a) {
    return this.node.__shady_attachShadow(a);
  };
  m.focus = function() {
    this.node.__shady_native_focus();
  };
  m.blur = function() {
    this.node.__shady_blur();
  };
  m.importNode = function(a, b) {
    if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_importNode(a, b);
  };
  m.getElementById = function(a) {
    if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_getElementById(a);
  };
  m.querySelector = function(a) {
    return this.node.__shady_querySelector(a);
  };
  m.querySelectorAll = function(a, b) {
    return this.node.__shady_querySelectorAll(a, b);
  };
  m.assignedNodes = function(a) {
    if ('slot' === this.node.localName) return this.node.__shady_assignedNodes(a);
  };
  n.Object.defineProperties(J.prototype, {
    activeElement: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        if (w(this.node) || this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_activeElement;
      }
    },
    _activeElement: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.activeElement;
      }
    },
    host: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        if (w(this.node)) return this.node.host;
      }
    },
    parentNode: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_parentNode;
      }
    },
    firstChild: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_firstChild;
      }
    },
    lastChild: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_lastChild;
      }
    },
    nextSibling: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_nextSibling;
      }
    },
    previousSibling: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_previousSibling;
      }
    },
    childNodes: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_childNodes;
      }
    },
    parentElement: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_parentElement;
      }
    },
    firstElementChild: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_firstElementChild;
      }
    },
    lastElementChild: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_lastElementChild;
      }
    },
    nextElementSibling: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_nextElementSibling;
      }
    },
    previousElementSibling: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_previousElementSibling;
      }
    },
    children: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_children;
      }
    },
    childElementCount: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_childElementCount;
      }
    },
    shadowRoot: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_shadowRoot;
      }
    },
    assignedSlot: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_assignedSlot;
      }
    },
    isConnected: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_isConnected;
      }
    },
    innerHTML: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_innerHTML;
      },
      set: function(a) {
        this.node.__shady_innerHTML = a;
      }
    },
    textContent: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_textContent;
      },
      set: function(a) {
        this.node.__shady_textContent = a;
      }
    },
    slot: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_slot;
      },
      set: function(a) {
        this.node.__shady_slot = a;
      }
    }
  });
  Ab.forEach(function(a) {
    Object.defineProperty(J.prototype, a, {
      get: function() {
        return this.node['__shady_' + a];
      },
      set: function(b) {
        this.node['__shady_' + a] = b;
      },
      configurable: !0
    });
  });
  var tc = new WeakMap();
  function uc(a) {
    if (w(a) || a instanceof J) return a;
    var b = tc.get(a);
    b || ((b = new J(a)), tc.set(a, b));
    return b;
  }
  var vc = z({
    dispatchEvent: function(a) {
      za();
      return this.__shady_native_dispatchEvent(a);
    },
    addEventListener: rb,
    removeEventListener: tb
  });
  var wc = z({
    get assignedSlot() {
      var a = this.__shady_parentNode;
      (a = a && a.__shady_shadowRoot) && kc(a);
      return ((a = r(this)) && a.assignedSlot) || null;
    }
  });
  var xc = window.document;
  function yc(a, b) {
    if ('slot' === b) (a = a.__shady_parentNode), na(a) && G(r(a).root);
    else if ('slot' === a.localName && 'name' === b && (b = F(a))) {
      if (b.a) {
        lc(b);
        var c = a.ea,
          d = pc(a);
        if (d !== c) {
          c = b.b[c];
          var e = c.indexOf(a);
          0 <= e && c.splice(e, 1);
          c = b.b[d] || (b.b[d] = []);
          c.push(a);
          1 < c.length && (b.b[d] = qc(c));
        }
      }
      G(b);
    }
  }
  var zc = z({
    get previousElementSibling() {
      var a = r(this);
      if (a && void 0 !== a.previousSibling) {
        for (a = this.__shady_previousSibling; a && a.nodeType !== Node.ELEMENT_NODE; ) a = a.__shady_previousSibling;
        return a;
      }
      return this.__shady_native_previousElementSibling;
    },
    get nextElementSibling() {
      var a = r(this);
      if (a && void 0 !== a.nextSibling) {
        for (a = this.__shady_nextSibling; a && a.nodeType !== Node.ELEMENT_NODE; ) a = a.__shady_nextSibling;
        return a;
      }
      return this.__shady_native_nextElementSibling;
    },
    get slot() {
      return this.getAttribute('slot');
    },
    set slot(a) {
      this.__shady_setAttribute('slot', a);
    },
    get shadowRoot() {
      var a = r(this);
      return (a && a.aa) || null;
    },
    get className() {
      return this.getAttribute('class') || '';
    },
    set className(a) {
      this.__shady_setAttribute('class', a);
    },
    setAttribute: function(a, b) {
      if (this.ownerDocument !== xc) this.__shady_native_setAttribute(a, b);
      else {
        var c;
        (c = E()) && 'class' === a ? (c.setElementClass(this, b), (c = !0)) : (c = !1);
        c || (this.__shady_native_setAttribute(a, b), yc(this, a));
      }
    },
    removeAttribute: function(a) {
      this.__shady_native_removeAttribute(a);
      yc(this, a);
    },
    attachShadow: function(a) {
      if (!this) throw Error('Must provide a host.');
      if (!a) throw Error('Not enough arguments.');
      return new jc(gc, this, a);
    }
  });
  var Ac = z({
    blur: function() {
      var a = r(this);
      (a = (a = a && a.root) && a.activeElement) ? a.__shady_blur() : this.__shady_native_blur();
    }
  });
  Ab.forEach(function(a) {
    Ac[a] = {
      set: function(b) {
        var c = q(this),
          d = a.substring(2);
        c.G[a] && this.removeEventListener(d, c.G[a]);
        this.__shady_addEventListener(d, b);
        c.G[a] = b;
      },
      get: function() {
        var b = r(this);
        return b && b.G[a];
      },
      configurable: !0
    };
  });
  var Bc = z({
    assignedNodes: function(a) {
      if ('slot' === this.localName) {
        var b = this.__shady_getRootNode();
        b && w(b) && kc(b);
        return (b = r(this)) ? (a && a.flatten ? b.v : b.assignedNodes) || [] : [];
      }
    }
  });
  var Cc = window.document,
    Dc = z({
      importNode: function(a, b) {
        if (a.ownerDocument !== Cc || 'template' === a.localName) return this.__shady_native_importNode(a, b);
        var c = this.__shady_native_importNode(a, !1);
        if (b) {
          a = a.__shady_childNodes;
          b = 0;
          for (var d; b < a.length; b++) (d = this.__shady_importNode(a[b], !0)), c.__shady_appendChild(d);
        }
        return c;
      }
    });
  var Ec = z({ addEventListener: rb.bind(window), removeEventListener: tb.bind(window) });
  var K = {};
  Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'parentElement') && (K.parentElement = Wb.parentElement);
  Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'contains') && (K.contains = Wb.contains);
  Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'children') && (K.children = H.children);
  Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'innerHTML') && (K.innerHTML = dc.innerHTML);
  Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'className') && (K.className = zc.className);
  var Fc = {
      EventTarget: [vc],
      Node: [Wb, window.EventTarget ? null : vc],
      Text: [wc],
      Element: [zc, H, wc, !t.i || 'innerHTML' in Element.prototype ? dc : null, window.HTMLSlotElement ? null : Bc],
      HTMLElement: [Ac, K],
      HTMLSlotElement: [Bc],
      DocumentFragment: [$b, ac],
      Document: [Dc, $b, ac, bc],
      Window: [Ec]
    },
    Gc = t.i ? null : ['innerHTML', 'textContent'];
  function Hc(a) {
    var b = a ? null : Gc,
      c = {},
      d;
    for (d in Fc)
      (c.M = window[d] && window[d].prototype),
        Fc[d].forEach(
          (function(c) {
            return function(d) {
              return c.M && d && y(c.M, d, a, b);
            };
          })(c)
        ),
        (c = { M: c.M });
  }
  if (t.T) {
    var ShadyDOM = {
      inUse: t.T,
      patch: function(a) {
        cb(a);
        bb(a);
        return a;
      },
      isShadyRoot: w,
      enqueue: ya,
      flush: za,
      flushInitial: function(a) {
        !a.P && a.u && kc(a);
      },
      settings: t,
      filterMutations: Ea,
      observeChildren: Ca,
      unobserveChildren: Da,
      deferConnectionCallbacks: t.deferConnectionCallbacks,
      preferPerformance: t.preferPerformance,
      handlesDynamicScoping: !0,
      wrap: t.A
        ? uc
        : function(a) {
            return a;
          },
      Wrapper: J,
      composedPath: jb,
      noPatch: t.A,
      nativeMethods: Oa,
      nativeTree: Pa
    };
    window.ShadyDOM = ShadyDOM;
    Wa();
    Hc('__shady_');
    Object.defineProperty(document, '_activeElement', bc.activeElement);
    y(Window.prototype, Ec, '__shady_');
    t.A || (Hc(), zb());
    ub();
    window.Event = wb;
    window.CustomEvent = xb;
    window.MouseEvent = yb;
    window.ShadowRoot = jc;
  } /*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
  function Ic() {
    this.end = this.start = 0;
    this.rules = this.parent = this.previous = null;
    this.cssText = this.parsedCssText = '';
    this.atRule = !1;
    this.type = 0;
    this.parsedSelector = this.selector = this.keyframesName = '';
  }
  function Jc(a) {
    a = a.replace(Kc, '').replace(Lc, '');
    var b = Mc,
      c = a,
      d = new Ic();
    d.start = 0;
    d.end = c.length;
    for (var e = d, f = 0, g = c.length; f < g; f++)
      if ('{' === c[f]) {
        e.rules || (e.rules = []);
        var h = e,
          k = h.rules[h.rules.length - 1] || null;
        e = new Ic();
        e.start = f + 1;
        e.parent = h;
        e.previous = k;
        h.rules.push(e);
      } else '}' === c[f] && ((e.end = f + 1), (e = e.parent || d));
    return b(d, a);
  }
  function Mc(a, b) {
    var c = b.substring(a.start, a.end - 1);
    a.parsedCssText = a.cssText = c.trim();
    a.parent &&
      ((c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1)),
      (c = Nc(c)),
      (c = c.replace(Oc, ' ')),
      (c = c.substring(c.lastIndexOf(';') + 1)),
      (c = a.parsedSelector = a.selector = c.trim()),
      (a.atRule = 0 === c.indexOf('@')),
      a.atRule
        ? 0 === c.indexOf('@media')
          ? (a.type = Pc)
          : c.match(Qc) && ((a.type = Rc), (a.keyframesName = a.selector.split(Oc).pop()))
        : (a.type = 0 === c.indexOf('--') ? Sc : Tc));
    if ((c = a.rules)) for (var d = 0, e = c.length, f = void 0; d < e && (f = c[d]); d++) Mc(f, b);
    return a;
  }
  function Nc(a) {
    return a.replace(/\\([0-9a-f]{1,6})\s/gi, function(a, c) {
      a = c;
      for (c = 6 - a.length; c--; ) a = '0' + a;
      return '\\' + a;
    });
  }
  function Uc(a, b, c) {
    c = void 0 === c ? '' : c;
    var d = '';
    if (a.cssText || a.rules) {
      var e = a.rules,
        f;
      if ((f = e)) (f = e[0]), (f = !(f && f.selector && 0 === f.selector.indexOf('--')));
      if (f) {
        f = 0;
        for (var g = e.length, h = void 0; f < g && (h = e[f]); f++) d = Uc(h, b, d);
      } else
        b
          ? (b = a.cssText)
          : ((b = a.cssText), (b = b.replace(Vc, '').replace(Wc, '')), (b = b.replace(Xc, '').replace(Yc, ''))),
          (d = b.trim()) && (d = '  ' + d + '\n');
    }
    d && (a.selector && (c += a.selector + ' {\n'), (c += d), a.selector && (c += '}\n\n'));
    return c;
  }
  var Tc = 1,
    Rc = 7,
    Pc = 4,
    Sc = 1e3,
    Kc = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
    Lc = /@import[^;]*;/gim,
    Vc = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
    Wc = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
    Xc = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
    Yc = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
    Qc = /^@[^\s]*keyframes/,
    Oc = /\s+/g;
  var L = !(window.ShadyDOM && window.ShadyDOM.inUse),
    Zc;
  function $c(a) {
    Zc =
      a && a.shimcssproperties
        ? !1
        : L ||
          !(
            navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) ||
            !window.CSS ||
            !CSS.supports ||
            !CSS.supports('box-shadow', '0 0 0 var(--foo)')
          );
  }
  var ad;
  window.ShadyCSS && void 0 !== window.ShadyCSS.cssBuild && (ad = window.ShadyCSS.cssBuild);
  var M = !(!window.ShadyCSS || !window.ShadyCSS.disableRuntime);
  window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss
    ? (Zc = window.ShadyCSS.nativeCss)
    : window.ShadyCSS
    ? ($c(window.ShadyCSS), (window.ShadyCSS = void 0))
    : $c(window.WebComponents && window.WebComponents.flags);
  var N = Zc,
    bd = ad;
  var cd = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
    dd = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
    ed = /(--[\w-]+)\s*([:,;)]|$)/gi,
    fd = /(animation\s*:)|(animation-name\s*:)/,
    gd = /@media\s(.*)/,
    hd = /\{[^}]*\}/g;
  var id = new Set();
  function O(a, b) {
    if (!a) return '';
    'string' === typeof a && (a = Jc(a));
    b && P(a, b);
    return Uc(a, N);
  }
  function jd(a) {
    !a.__cssRules && a.textContent && (a.__cssRules = Jc(a.textContent));
    return a.__cssRules || null;
  }
  function kd(a) {
    return !!a.parent && a.parent.type === Rc;
  }
  function P(a, b, c, d) {
    if (a) {
      var e = !1,
        f = a.type;
      if (d && f === Pc) {
        var g = a.selector.match(gd);
        g && (window.matchMedia(g[1]).matches || (e = !0));
      }
      f === Tc ? b(a) : c && f === Rc ? c(a) : f === Sc && (e = !0);
      if ((a = a.rules) && !e) for (e = 0, f = a.length, g = void 0; e < f && (g = a[e]); e++) P(g, b, c, d);
    }
  }
  function ld(a, b, c, d) {
    var e = document.createElement('style');
    b && e.setAttribute('scope', b);
    e.textContent = a;
    md(e, c, d);
    return e;
  }
  var Q = null;
  function nd(a) {
    a = document.createComment(' Shady DOM styles for ' + a + ' ');
    var b = document.head;
    b.insertBefore(a, (Q ? Q.nextSibling : null) || b.firstChild);
    return (Q = a);
  }
  function md(a, b, c) {
    b = b || document.head;
    b.insertBefore(a, (c && c.nextSibling) || b.firstChild);
    Q ? a.compareDocumentPosition(Q) === Node.DOCUMENT_POSITION_PRECEDING && (Q = a) : (Q = a);
  }
  function od(a, b) {
    for (var c = 0, d = a.length; b < d; b++)
      if ('(' === a[b]) c++;
      else if (')' === a[b] && 0 === --c) return b;
    return -1;
  }
  function pd(a, b) {
    var c = a.indexOf('var(');
    if (-1 === c) return b(a, '', '', '');
    var d = od(a, c + 3),
      e = a.substring(c + 4, d);
    c = a.substring(0, c);
    a = pd(a.substring(d + 1), b);
    d = e.indexOf(',');
    return -1 === d ? b(c, e.trim(), '', a) : b(c, e.substring(0, d).trim(), e.substring(d + 1).trim(), a);
  }
  function qd(a, b) {
    L ? a.setAttribute('class', b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, 'class', b);
  }
  var rd =
    (window.ShadyDOM && window.ShadyDOM.wrap) ||
    function(a) {
      return a;
    };
  function R(a) {
    var b = a.localName,
      c = '';
    b
      ? -1 < b.indexOf('-') || ((c = b), (b = (a.getAttribute && a.getAttribute('is')) || ''))
      : ((b = a.is), (c = a.extends));
    return { is: b, D: c };
  }
  function sd(a) {
    for (var b = [], c = '', d = 0; 0 <= d && d < a.length; d++)
      if ('(' === a[d]) {
        var e = od(a, d);
        c += a.slice(d, e + 1);
        d = e;
      } else ',' === a[d] ? (b.push(c), (c = '')) : (c += a[d]);
    c && b.push(c);
    return b;
  }
  function S(a) {
    if (void 0 !== bd) return bd;
    if (void 0 === a.__cssBuild) {
      var b = a.getAttribute('css-build');
      if (b) a.__cssBuild = b;
      else {
        a: {
          b = 'template' === a.localName ? a.content.firstChild : a.firstChild;
          if (b instanceof Comment && ((b = b.textContent.trim().split(':')), 'css-build' === b[0])) {
            b = b[1];
            break a;
          }
          b = '';
        }
        if ('' !== b) {
          var c = 'template' === a.localName ? a.content.firstChild : a.firstChild;
          c.parentNode.removeChild(c);
        }
        a.__cssBuild = b;
      }
    }
    return a.__cssBuild || '';
  }
  function td(a) {
    a = void 0 === a ? '' : a;
    return '' !== a && N ? (L ? 'shadow' === a : 'shady' === a) : !1;
  }
  function ud() {}
  function vd(a, b) {
    wd(T, a, function(a) {
      U(a, b || '');
    });
  }
  function wd(a, b, c) {
    b.nodeType === Node.ELEMENT_NODE && c(b);
    var d;
    'template' === b.localName ? (d = (b.content || b._content || b).childNodes) : (d = b.children || b.childNodes);
    if (d) for (b = 0; b < d.length; b++) wd(a, d[b], c);
  }
  function U(a, b, c) {
    if (b)
      if (a.classList)
        c
          ? (a.classList.remove('style-scope'), a.classList.remove(b))
          : (a.classList.add('style-scope'), a.classList.add(b));
      else if (a.getAttribute) {
        var d = a.getAttribute('class');
        c
          ? d && ((b = d.replace('style-scope', '').replace(b, '')), qd(a, b))
          : qd(a, (d ? d + ' ' : '') + 'style-scope ' + b);
      }
  }
  function xd(a, b, c) {
    wd(T, a, function(a) {
      U(a, b, !0);
      U(a, c);
    });
  }
  function yd(a, b) {
    wd(T, a, function(a) {
      U(a, b || '', !0);
    });
  }
  function zd(a, b, c, d, e) {
    var f = T;
    e = void 0 === e ? '' : e;
    '' === e &&
      (L || 'shady' === (void 0 === d ? '' : d) ? (e = O(b, c)) : ((a = R(a)), (e = Ad(f, b, a.is, a.D, c) + '\n\n')));
    return e.trim();
  }
  function Ad(a, b, c, d, e) {
    var f = Bd(c, d);
    c = c ? '.' + c : '';
    return O(b, function(b) {
      b.c || ((b.selector = b.g = Cd(a, b, a.b, c, f)), (b.c = !0));
      e && e(b, c, f);
    });
  }
  function Bd(a, b) {
    return b ? '[is=' + a + ']' : a;
  }
  function Cd(a, b, c, d, e) {
    var f = sd(b.selector);
    if (!kd(b)) {
      b = 0;
      for (var g = f.length, h = void 0; b < g && (h = f[b]); b++) f[b] = c.call(a, h, d, e);
    }
    return f
      .filter(function(a) {
        return !!a;
      })
      .join(',');
  }
  function Dd(a) {
    return a.replace(Ed, function(a, c, d) {
      -1 < d.indexOf('+') ? (d = d.replace(/\+/g, '___')) : -1 < d.indexOf('___') && (d = d.replace(/___/g, '+'));
      return ':' + c + '(' + d + ')';
    });
  }
  function Fd(a) {
    for (var b = [], c; (c = a.match(Gd)); ) {
      var d = c.index,
        e = od(a, d);
      if (-1 === e) throw Error(c.input + " selector missing ')'");
      c = a.slice(d, e + 1);
      a = a.replace(c, '\ue000');
      b.push(c);
    }
    return { V: a, matches: b };
  }
  function Hd(a, b) {
    var c = a.split('\ue000');
    return b.reduce(function(a, b, f) {
      return a + b + c[f + 1];
    }, c[0]);
  }
  ud.prototype.b = function(a, b, c) {
    var d = !1;
    a = a.trim();
    var e = Ed.test(a);
    e &&
      ((a = a.replace(Ed, function(a, b, c) {
        return ':' + b + '(' + c.replace(/\s/g, '') + ')';
      })),
      (a = Dd(a)));
    var f = Gd.test(a);
    if (f) {
      var g = Fd(a);
      a = g.V;
      g = g.matches;
    }
    a = a.replace(Id, ':host $1');
    a = a.replace(Jd, function(a, e, f) {
      d || ((a = Kd(f, e, b, c)), (d = d || a.stop), (e = a.ka), (f = a.value));
      return e + f;
    });
    f && (a = Hd(a, g));
    e && (a = Dd(a));
    return a;
  };
  function Kd(a, b, c, d) {
    var e = a.indexOf('::slotted');
    0 <= a.indexOf(':host') ? (a = Ld(a, d)) : 0 !== e && (a = c ? Md(a, c) : a);
    c = !1;
    0 <= e && ((b = ''), (c = !0));
    if (c) {
      var f = !0;
      c &&
        (a = a.replace(Nd, function(a, b) {
          return ' > ' + b;
        }));
    }
    a = a.replace(Od, function(a, b, c) {
      return '[dir="' + c + '"] ' + b + ', ' + b + '[dir="' + c + '"]';
    });
    return { value: a, ka: b, stop: f };
  }
  function Md(a, b) {
    a = a.split(/(\[.+?\])/);
    for (var c = [], d = 0; d < a.length; d++)
      if (1 === d % 2) c.push(a[d]);
      else {
        var e = a[d];
        if ('' !== e || d !== a.length - 1) (e = e.split(':')), (e[0] += b), c.push(e.join(':'));
      }
    return c.join('');
  }
  function Ld(a, b) {
    var c = a.match(Pd);
    return (c = (c && c[2].trim()) || '')
      ? c[0].match(Qd)
        ? a.replace(Pd, function(a, c, f) {
            return b + f;
          })
        : c.split(Qd)[0] === b
        ? c
        : 'should_not_match'
      : a.replace(':host', b);
  }
  function Rd(a) {
    ':root' === a.selector && (a.selector = 'html');
  }
  ud.prototype.c = function(a) {
    return a.match(':host')
      ? ''
      : a.match('::slotted')
      ? this.b(a, ':not(.style-scope)')
      : Md(a.trim(), ':not(.style-scope)');
  };
  n.Object.defineProperties(ud.prototype, {
    a: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return 'style-scope';
      }
    }
  });
  var Ed = /:(nth[-\w]+)\(([^)]+)\)/,
    Jd = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
    Qd = /[[.:#*]/,
    Id = /^(::slotted)/,
    Pd = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
    Nd = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
    Od = /(.*):dir\((?:(ltr|rtl))\)/,
    Gd = /:(?:matches|any|-(?:webkit|moz)-any)/,
    T = new ud();
  function V(a, b, c, d, e) {
    this.s = a || null;
    this.b = b || null;
    this.U = c || [];
    this.j = null;
    this.cssBuild = e || '';
    this.D = d || '';
    this.a = this.l = this.o = null;
  }
  function W(a) {
    return a ? a.__styleInfo : null;
  }
  function Sd(a, b) {
    return (a.__styleInfo = b);
  }
  V.prototype.c = function() {
    return this.s;
  };
  V.prototype._getStyleRules = V.prototype.c;
  function Td(a) {
    var b =
      this.matches ||
      this.matchesSelector ||
      this.mozMatchesSelector ||
      this.msMatchesSelector ||
      this.oMatchesSelector ||
      this.webkitMatchesSelector;
    return b && b.call(this, a);
  }
  var Ud = navigator.userAgent.match('Trident');
  function Vd() {}
  function Wd(a) {
    var b = {},
      c = [],
      d = 0;
    P(
      a,
      function(a) {
        Xd(a);
        a.index = d++;
        a = a.f.cssText;
        for (var c; (c = ed.exec(a)); ) {
          var e = c[1];
          ':' !== c[2] && (b[e] = !0);
        }
      },
      function(a) {
        c.push(a);
      }
    );
    a.b = c;
    a = [];
    for (var e in b) a.push(e);
    return a;
  }
  function Xd(a) {
    if (!a.f) {
      var b = {},
        c = {};
      Yd(a, c) && ((b.m = c), (a.rules = null));
      b.cssText = a.parsedCssText.replace(hd, '').replace(cd, '');
      a.f = b;
    }
  }
  function Yd(a, b) {
    var c = a.f;
    if (c) {
      if (c.m) return Object.assign(b, c.m), !0;
    } else {
      c = a.parsedCssText;
      for (var d; (a = cd.exec(c)); ) {
        d = (a[2] || a[3]).trim();
        if ('inherit' !== d || 'unset' !== d) b[a[1].trim()] = d;
        d = !0;
      }
      return d;
    }
  }
  function Zd(a, b, c) {
    b &&
      (b =
        0 <= b.indexOf(';')
          ? $d(a, b, c)
          : pd(b, function(b, e, f, g) {
              if (!e) return b + g;
              (e = Zd(a, c[e], c)) && 'initial' !== e
                ? 'apply-shim-inherit' === e && (e = 'inherit')
                : (e = Zd(a, c[f] || f, c) || f);
              return b + (e || '') + g;
            }));
    return (b && b.trim()) || '';
  }
  function $d(a, b, c) {
    b = b.split(';');
    for (var d = 0, e, f; d < b.length; d++)
      if ((e = b[d])) {
        dd.lastIndex = 0;
        if ((f = dd.exec(e))) e = Zd(a, c[f[1]], c);
        else if (((f = e.indexOf(':')), -1 !== f)) {
          var g = e.substring(f);
          g = g.trim();
          g = Zd(a, g, c) || g;
          e = e.substring(0, f) + g;
        }
        b[d] = e && e.lastIndexOf(';') === e.length - 1 ? e.slice(0, -1) : e || '';
      }
    return b.join(';');
  }
  function ae(a, b) {
    var c = {},
      d = [];
    P(
      a,
      function(a) {
        a.f || Xd(a);
        var e = a.g || a.parsedSelector;
        b &&
          a.f.m &&
          e &&
          Td.call(b, e) &&
          (Yd(a, c), (a = a.index), (e = parseInt(a / 32, 10)), (d[e] = (d[e] || 0) | (1 << a % 32)));
      },
      null,
      !0
    );
    return { m: c, key: d };
  }
  function be(a, b, c, d) {
    b.f || Xd(b);
    if (b.f.m) {
      var e = R(a);
      a = e.is;
      e = e.D;
      e = a ? Bd(a, e) : 'html';
      var f = b.parsedSelector,
        g = ':host > *' === f || 'html' === f,
        h = 0 === f.indexOf(':host') && !g;
      'shady' === c && ((g = f === e + ' > *.' + e || -1 !== f.indexOf('html')), (h = !g && 0 === f.indexOf(e)));
      if (g || h)
        (c = e), h && (b.g || (b.g = Cd(T, b, T.b, a ? '.' + a : '', e)), (c = b.g || e)), d({ V: c, pa: h, ya: g });
    }
  }
  function ce(a, b, c) {
    var d = {},
      e = {};
    P(
      b,
      function(b) {
        be(a, b, c, function(c) {
          Td.call(a._element || a, c.V) && (c.pa ? Yd(b, d) : Yd(b, e));
        });
      },
      null,
      !0
    );
    return { ra: e, oa: d };
  }
  function de(a, b, c, d) {
    var e = R(b),
      f = Bd(e.is, e.D),
      g = new RegExp('(?:^|[^.#[:])' + (b.extends ? '\\' + f.slice(0, -1) + '\\]' : f) + '($|[.:[\\s>+~])'),
      h = W(b);
    e = h.s;
    h = h.cssBuild;
    var k = ee(e, d);
    return zd(
      b,
      e,
      function(b) {
        var e = '';
        b.f || Xd(b);
        b.f.cssText && (e = $d(a, b.f.cssText, c));
        b.cssText = e;
        if (!L && !kd(b) && b.cssText) {
          var h = (e = b.cssText);
          null == b.Z && (b.Z = fd.test(e));
          if (b.Z)
            if (null == b.L) {
              b.L = [];
              for (var l in k) (h = k[l]), (h = h(e)), e !== h && ((e = h), b.L.push(l));
            } else {
              for (l = 0; l < b.L.length; ++l) (h = k[b.L[l]]), (e = h(e));
              h = e;
            }
          b.cssText = h;
          b.g = b.g || b.selector;
          e = '.' + d;
          l = sd(b.g);
          h = 0;
          for (var ba = l.length, Fa = void 0; h < ba && (Fa = l[h]); h++)
            l[h] = Fa.match(g) ? Fa.replace(f, e) : e + ' ' + Fa;
          b.selector = l.join(',');
        }
      },
      h
    );
  }
  function ee(a, b) {
    a = a.b;
    var c = {};
    if (!L && a)
      for (var d = 0, e = a[d]; d < a.length; e = a[++d]) {
        var f = e,
          g = b;
        f.h = new RegExp('\\b' + f.keyframesName + '(?!\\B|-)', 'g');
        f.a = f.keyframesName + '-' + g;
        f.g = f.g || f.selector;
        f.selector = f.g.replace(f.keyframesName, f.a);
        c[e.keyframesName] = fe(e);
      }
    return c;
  }
  function fe(a) {
    return function(b) {
      return b.replace(a.h, a.a);
    };
  }
  function ge(a, b) {
    var c = he,
      d = jd(a);
    a.textContent = O(d, function(a) {
      var d = (a.cssText = a.parsedCssText);
      a.f && a.f.cssText && ((d = d.replace(Vc, '').replace(Wc, '')), (a.cssText = $d(c, d, b)));
    });
  }
  n.Object.defineProperties(Vd.prototype, {
    a: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return 'x-scope';
      }
    }
  });
  var he = new Vd();
  var X = {},
    ie = window.customElements;
  if (ie && !L && !M) {
    var je = ie.define;
    ie.define = function(a, b, c) {
      X[a] || (X[a] = nd(a));
      je.call(ie, a, b, c);
    };
  }
  function ke() {
    this.cache = {};
  }
  ke.prototype.store = function(a, b, c, d) {
    var e = this.cache[a] || [];
    e.push({ m: b, styleElement: c, l: d });
    100 < e.length && e.shift();
    this.cache[a] = e;
  };
  function le() {}
  var me = new RegExp(T.a + '\\s*([^\\s]*)');
  function ne(a) {
    return (a = (a.classList && a.classList.value ? a.classList.value : a.getAttribute('class') || '').match(me))
      ? a[1]
      : '';
  }
  function oe(a) {
    var b = rd(a).getRootNode();
    return b === a || b === a.ownerDocument ? '' : (a = b.host) ? R(a).is : '';
  }
  function pe(a) {
    for (var b = 0; b < a.length; b++) {
      var c = a[b];
      if (c.target !== document.documentElement && c.target !== document.head)
        for (var d = 0; d < c.addedNodes.length; d++) {
          var e = c.addedNodes[d];
          if (e.nodeType === Node.ELEMENT_NODE) {
            var f = e.getRootNode(),
              g = ne(e);
            if (g && f === e.ownerDocument && (('style' !== e.localName && 'template' !== e.localName) || '' === S(e)))
              yd(e, g);
            else if (f instanceof ShadowRoot)
              for (
                f = oe(e),
                  f !== g && xd(e, g, f),
                  e = window.ShadyDOM.nativeMethods.querySelectorAll.call(e, ':not(.' + T.a + ')'),
                  g = 0;
                g < e.length;
                g++
              ) {
                f = e[g];
                var h = oe(f);
                h && U(f, h);
              }
          }
        }
    }
  }
  if (!(L || (window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping))) {
    var qe = new MutationObserver(pe),
      re = function(a) {
        qe.observe(a, { childList: !0, subtree: !0 });
      };
    if (window.customElements && !window.customElements.polyfillWrapFlushCallback) re(document);
    else {
      var se = function() {
        re(document.body);
      };
      window.HTMLImports
        ? window.HTMLImports.whenReady(se)
        : requestAnimationFrame(function() {
            if ('loading' === document.readyState) {
              var a = function() {
                se();
                document.removeEventListener('readystatechange', a);
              };
              document.addEventListener('readystatechange', a);
            } else se();
          });
    }
    le = function() {
      pe(qe.takeRecords());
    };
  }
  var te = le;
  var ue = {};
  var ve = Promise.resolve();
  function we(a) {
    if ((a = ue[a]))
      (a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0),
        (a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0),
        (a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1);
  }
  function xe(a) {
    return a._applyShimCurrentVersion === a._applyShimNextVersion;
  }
  function ye(a) {
    a._applyShimValidatingVersion = a._applyShimNextVersion;
    a._validating ||
      ((a._validating = !0),
      ve.then(function() {
        a._applyShimCurrentVersion = a._applyShimNextVersion;
        a._validating = !1;
      }));
  }
  var ze = {},
    Ae = new ke();
  function Y() {
    this.Y = {};
    this.c = document.documentElement;
    var a = new Ic();
    a.rules = [];
    this.h = Sd(this.c, new V(a));
    this.S = !1;
    this.b = this.a = null;
  }
  m = Y.prototype;
  m.flush = function() {
    te();
  };
  m.ma = function(a) {
    return jd(a);
  };
  m.va = function(a) {
    return O(a);
  };
  m.prepareTemplate = function(a, b, c) {
    this.prepareTemplateDom(a, b);
    this.prepareTemplateStyles(a, b, c);
  };
  m.prepareTemplateStyles = function(a, b, c) {
    if (!a._prepared && !M) {
      L || X[b] || (X[b] = nd(b));
      a._prepared = !0;
      a.name = b;
      a.extends = c;
      ue[b] = a;
      var d = S(a),
        e = td(d);
      c = { is: b, extends: c };
      for (var f = [], g = a.content.querySelectorAll('style'), h = 0; h < g.length; h++) {
        var k = g[h];
        if (k.hasAttribute('shady-unscoped')) {
          if (!L) {
            var l = k.textContent;
            id.has(l) || (id.add(l), (l = k.cloneNode(!0)), document.head.appendChild(l));
            k.parentNode.removeChild(k);
          }
        } else f.push(k.textContent), k.parentNode.removeChild(k);
      }
      f = f.join('').trim() + (ze[b] || '');
      Be(this);
      if (!e) {
        if ((g = !d)) (g = dd.test(f) || cd.test(f)), (dd.lastIndex = 0), (cd.lastIndex = 0);
        h = Jc(f);
        g && N && this.a && this.a.transformRules(h, b);
        a._styleAst = h;
      }
      g = [];
      N || (g = Wd(a._styleAst));
      if (!g.length || N)
        (h = L ? a.content : null),
          (b = X[b] || null),
          (d = zd(c, a._styleAst, null, d, e ? f : '')),
          (d = d.length ? ld(d, c.is, h, b) : null),
          (a._style = d);
      a.a = g;
    }
  };
  m.qa = function(a, b) {
    ze[b] = a.join(' ');
  };
  m.prepareTemplateDom = function(a, b) {
    if (!M) {
      var c = S(a);
      L || 'shady' === c || a._domPrepared || ((a._domPrepared = !0), vd(a.content, b));
    }
  };
  function Ce(a) {
    var b = R(a),
      c = b.is;
    b = b.D;
    var d = X[c] || null,
      e = ue[c];
    if (e) {
      c = e._styleAst;
      var f = e.a;
      e = S(e);
      b = new V(c, d, f, b, e);
      Sd(a, b);
      return b;
    }
  }
  function De(a) {
    !a.b &&
      window.ShadyCSS &&
      window.ShadyCSS.CustomStyleInterface &&
      ((a.b = window.ShadyCSS.CustomStyleInterface),
      (a.b.transformCallback = function(b) {
        a.ba(b);
      }),
      (a.b.validateCallback = function() {
        requestAnimationFrame(function() {
          (a.b.enqueued || a.S) && a.flushCustomStyles();
        });
      }));
  }
  function Be(a) {
    !a.a &&
      window.ShadyCSS &&
      window.ShadyCSS.ApplyShim &&
      ((a.a = window.ShadyCSS.ApplyShim), (a.a.invalidCallback = we));
    De(a);
  }
  m.flushCustomStyles = function() {
    if (!M && (Be(this), this.b)) {
      var a = this.b.processStyles();
      if (this.b.enqueued && !td(this.h.cssBuild)) {
        if (N) {
          if (!this.h.cssBuild)
            for (var b = 0; b < a.length; b++) {
              var c = this.b.getStyleForCustomStyle(a[b]);
              if (c && N && this.a) {
                var d = jd(c);
                Be(this);
                this.a.transformRules(d);
                c.textContent = O(d);
              }
            }
        } else {
          Ee(this, this.c, this.h);
          for (b = 0; b < a.length; b++) (c = this.b.getStyleForCustomStyle(a[b])) && ge(c, this.h.o);
          this.S && this.styleDocument();
        }
        this.b.enqueued = !1;
      }
    }
  };
  m.styleElement = function(a, b) {
    if (M) {
      if (b) {
        W(a) || Sd(a, new V(null));
        var c = W(a);
        c.j = c.j || {};
        Object.assign(c.j, b);
        Fe(this, a, c);
      }
    } else if ((c = W(a) || Ce(a)))
      if ((a !== this.c && (this.S = !0), b && ((c.j = c.j || {}), Object.assign(c.j, b)), N)) Fe(this, a, c);
      else if ((this.flush(), Ee(this, a, c), c.U && c.U.length)) {
        b = R(a).is;
        var d;
        a: {
          if ((d = Ae.cache[b]))
            for (var e = d.length - 1; 0 <= e; e--) {
              var f = d[e];
              b: {
                var g = c.U;
                for (var h = 0; h < g.length; h++) {
                  var k = g[h];
                  if (f.m[k] !== c.o[k]) {
                    g = !1;
                    break b;
                  }
                }
                g = !0;
              }
              if (g) {
                d = f;
                break a;
              }
            }
          d = void 0;
        }
        g = d ? d.styleElement : null;
        e = c.l;
        (f = d && d.l) || ((f = this.Y[b] = (this.Y[b] || 0) + 1), (f = b + '-' + f));
        c.l = f;
        f = c.l;
        h = he;
        h = g ? g.textContent || '' : de(h, a, c.o, f);
        k = W(a);
        var l = k.a;
        l && !L && l !== g && (l._useCount--, 0 >= l._useCount && l.parentNode && l.parentNode.removeChild(l));
        L
          ? k.a
            ? ((k.a.textContent = h), (g = k.a))
            : h && (g = ld(h, f, a.shadowRoot, k.b))
          : g
          ? g.parentNode || (Ud && -1 < h.indexOf('@media') && (g.textContent = h), md(g, null, k.b))
          : h && (g = ld(h, f, null, k.b));
        g && ((g._useCount = g._useCount || 0), k.a != g && g._useCount++, (k.a = g));
        f = g;
        L ||
          ((g = c.l),
          (k = h = a.getAttribute('class') || ''),
          e && (k = h.replace(new RegExp('\\s*x-scope\\s*' + e + '\\s*', 'g'), ' ')),
          (k += (k ? ' ' : '') + 'x-scope ' + g),
          h !== k && qd(a, k));
        d || Ae.store(b, c.o, f, c.l);
      }
  };
  function Fe(a, b, c) {
    var d = R(b).is;
    if (c.j) {
      var e = c.j,
        f;
      for (f in e) null === f ? b.style.removeProperty(f) : b.style.setProperty(f, e[f]);
    }
    e = ue[d];
    if (!((!e && b !== a.c) || (e && '' !== S(e))) && e && e._style && !xe(e)) {
      if (xe(e) || e._applyShimValidatingVersion !== e._applyShimNextVersion)
        Be(a), a.a && a.a.transformRules(e._styleAst, d), (e._style.textContent = zd(b, c.s)), ye(e);
      L && (a = b.shadowRoot) && (a = a.querySelector('style')) && (a.textContent = zd(b, c.s));
      c.s = e._styleAst;
    }
  }
  function Ge(a, b) {
    return (b = rd(b).getRootNode().host) ? (W(b) || Ce(b) ? b : Ge(a, b)) : a.c;
  }
  function Ee(a, b, c) {
    var d = Ge(a, b),
      e = W(d),
      f = e.o;
    d === a.c || f || (Ee(a, d, e), (f = e.o));
    a = Object.create(f || null);
    d = ce(b, c.s, c.cssBuild);
    b = ae(e.s, b).m;
    Object.assign(a, d.oa, b, d.ra);
    b = c.j;
    for (var g in b) if ((e = b[g]) || 0 === e) a[g] = e;
    g = he;
    b = Object.getOwnPropertyNames(a);
    for (e = 0; e < b.length; e++) (d = b[e]), (a[d] = Zd(g, a[d], a));
    c.o = a;
  }
  m.styleDocument = function(a) {
    this.styleSubtree(this.c, a);
  };
  m.styleSubtree = function(a, b) {
    var c = rd(a),
      d = c.shadowRoot;
    (d || a === this.c) && this.styleElement(a, b);
    if ((a = d && (d.children || d.childNodes))) for (c = 0; c < a.length; c++) this.styleSubtree(a[c]);
    else if ((c = c.children || c.childNodes)) for (a = 0; a < c.length; a++) this.styleSubtree(c[a]);
  };
  m.ba = function(a) {
    var b = this,
      c = S(a);
    c !== this.h.cssBuild && (this.h.cssBuild = c);
    if (!td(c)) {
      var d = jd(a);
      P(d, function(a) {
        if (L) Rd(a);
        else {
          var d = T;
          a.selector = a.parsedSelector;
          Rd(a);
          a.selector = a.g = Cd(d, a, d.c, void 0, void 0);
        }
        N && '' === c && (Be(b), b.a && b.a.transformRule(a));
      });
      N ? (a.textContent = O(d)) : this.h.s.rules.push(d);
    }
  };
  m.getComputedStyleValue = function(a, b) {
    var c;
    N || (c = (W(a) || W(Ge(this, a))).o[b]);
    return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : '';
  };
  m.ua = function(a, b) {
    var c = rd(a).getRootNode();
    b = b ? b.split(/\s/) : [];
    c = c.host && c.host.localName;
    if (!c) {
      var d = a.getAttribute('class');
      if (d) {
        d = d.split(/\s/);
        for (var e = 0; e < d.length; e++)
          if (d[e] === T.a) {
            c = d[e + 1];
            break;
          }
      }
    }
    c && b.push(T.a, c);
    N || ((c = W(a)) && c.l && b.push(he.a, c.l));
    qd(a, b.join(' '));
  };
  m.ja = function(a) {
    return W(a);
  };
  m.ta = function(a, b) {
    U(a, b);
  };
  m.wa = function(a, b) {
    U(a, b, !0);
  };
  m.sa = function(a) {
    return oe(a);
  };
  m.la = function(a) {
    return ne(a);
  };
  Y.prototype.flush = Y.prototype.flush;
  Y.prototype.prepareTemplate = Y.prototype.prepareTemplate;
  Y.prototype.styleElement = Y.prototype.styleElement;
  Y.prototype.styleDocument = Y.prototype.styleDocument;
  Y.prototype.styleSubtree = Y.prototype.styleSubtree;
  Y.prototype.getComputedStyleValue = Y.prototype.getComputedStyleValue;
  Y.prototype.setElementClass = Y.prototype.ua;
  Y.prototype._styleInfoForNode = Y.prototype.ja;
  Y.prototype.transformCustomStyleForDocument = Y.prototype.ba;
  Y.prototype.getStyleAst = Y.prototype.ma;
  Y.prototype.styleAstToString = Y.prototype.va;
  Y.prototype.flushCustomStyles = Y.prototype.flushCustomStyles;
  Y.prototype.scopeNode = Y.prototype.ta;
  Y.prototype.unscopeNode = Y.prototype.wa;
  Y.prototype.scopeForNode = Y.prototype.sa;
  Y.prototype.currentScopeForNode = Y.prototype.la;
  Y.prototype.prepareAdoptedCssText = Y.prototype.qa;
  Object.defineProperties(Y.prototype, {
    nativeShadow: {
      get: function() {
        return L;
      }
    },
    nativeCss: {
      get: function() {
        return N;
      }
    }
  });
  var Z = new Y(),
    He,
    Ie;
  window.ShadyCSS && ((He = window.ShadyCSS.ApplyShim), (Ie = window.ShadyCSS.CustomStyleInterface));
  window.ShadyCSS = {
    ScopingShim: Z,
    prepareTemplate: function(a, b, c) {
      Z.flushCustomStyles();
      Z.prepareTemplate(a, b, c);
    },
    prepareTemplateDom: function(a, b) {
      Z.prepareTemplateDom(a, b);
    },
    prepareTemplateStyles: function(a, b, c) {
      Z.flushCustomStyles();
      Z.prepareTemplateStyles(a, b, c);
    },
    styleSubtree: function(a, b) {
      Z.flushCustomStyles();
      Z.styleSubtree(a, b);
    },
    styleElement: function(a) {
      Z.flushCustomStyles();
      Z.styleElement(a);
    },
    styleDocument: function(a) {
      Z.flushCustomStyles();
      Z.styleDocument(a);
    },
    flushCustomStyles: function() {
      Z.flushCustomStyles();
    },
    getComputedStyleValue: function(a, b) {
      return Z.getComputedStyleValue(a, b);
    },
    nativeCss: N,
    nativeShadow: L,
    cssBuild: bd,
    disableRuntime: M
  };
  He && (window.ShadyCSS.ApplyShim = He);
  Ie && (window.ShadyCSS.CustomStyleInterface = Ie);
}.call(this));

//# sourceMappingURL=webcomponents-sd.js.map
