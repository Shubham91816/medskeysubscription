!(function (t, e) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = e(require("jQuery"));
  else if ("function" == typeof define && define.amd) define(["jQuery"], e);
  else {
    var n,
      o = "object" == typeof exports ? e(require("jQuery")) : e(t.jQuery);
    for (n in o) ("object" == typeof exports ? exports : t)[n] = o[n];
  }
})(self, function (ze) {
  return (() => {
    "use strict";
    var H = {
        9770: (t, e, n) => {
          var o = n(1145),
            n = n.n(o);
          (n().summernote = n().summernote || { lang: {} }),
            n().extend(n().summernote.lang, {
              "en-US": {
                font: {
                  bold: "Bold",
                  italic: "Italic",
                  underline: "Underline",
                  clear: "Remove Font Style",
                  height: "Line Height",
                  name: "Font Family",
                  strikethrough: "Strikethrough",
                  subscript: "Subscript",
                  superscript: "Superscript",
                  size: "Font Size",
                  sizeunit: "Font Size Unit",
                },
                image: {
                  image: "Picture",
                  insert: "Insert Image",
                  resizeFull: "Resize full",
                  resizeHalf: "Resize half",
                  resizeQuarter: "Resize quarter",
                  resizeNone: "Original size",
                  floatLeft: "Float Left",
                  floatRight: "Float Right",
                  floatNone: "Remove float",
                  shapeRounded: "Shape: Rounded",
                  shapeCircle: "Shape: Circle",
                  shapeThumbnail: "Shape: Thumbnail",
                  shapeNone: "Shape: None",
                  dragImageHere: "Drag image or text here",
                  dropImage: "Drop image or Text",
                  selectFromFiles: "Select from files",
                  maximumFileSize: "Maximum file size",
                  maximumFileSizeError: "Maximum file size exceeded.",
                  url: "Image URL",
                  remove: "Remove Image",
                  original: "Original",
                },
                video: {
                  video: "Video",
                  videoLink: "Video Link",
                  insert: "Insert Video",
                  url: "Video URL",
                  providers:
                    "(YouTube, Google Drive, Vimeo, Vine, Instagram, DailyMotion, Youku, Peertube)",
                },
                link: {
                  link: "Link",
                  insert: "Insert Link",
                  unlink: "Unlink",
                  edit: "Edit",
                  textToDisplay: "Text to display",
                  url: "To what URL should this link go?",
                  openInNewWindow: "Open in new window",
                  useProtocol: "Use default protocol",
                },
                table: {
                  table: "Table",
                  addRowAbove: "Add row above",
                  addRowBelow: "Add row below",
                  addColLeft: "Add column left",
                  addColRight: "Add column right",
                  delRow: "Delete row",
                  delCol: "Delete column",
                  delTable: "Delete table",
                },
                hr: { insert: "Insert Horizontal Rule" },
                style: {
                  style: "Style",
                  p: "Normal",
                  blockquote: "Quote",
                  pre: "Code",
                  h1: "Header 1",
                  h2: "Header 2",
                  h3: "Header 3",
                  h4: "Header 4",
                  h5: "Header 5",
                  h6: "Header 6",
                },
                lists: { unordered: "Unordered list", ordered: "Ordered list" },
                options: {
                  help: "Help",
                  fullscreen: "Full Screen",
                  codeview: "Code View",
                },
                paragraph: {
                  paragraph: "Paragraph",
                  outdent: "Outdent",
                  indent: "Indent",
                  left: "Align left",
                  center: "Align center",
                  right: "Align right",
                  justify: "Justify full",
                },
                color: {
                  recent: "Recent Color",
                  more: "More Color",
                  background: "Background Color",
                  foreground: "Text Color",
                  transparent: "Transparent",
                  setTransparent: "Set transparent",
                  reset: "Reset",
                  resetToDefault: "Reset to default",
                  cpSelect: "Select",
                },
                shortcut: {
                  shortcuts: "Keyboard shortcuts",
                  close: "Close",
                  textFormatting: "Text formatting",
                  action: "Action",
                  paragraphFormatting: "Paragraph formatting",
                  documentStyle: "Document Style",
                  extraKeys: "Extra keys",
                },
                help: {
                  escape: "Escape",
                  insertParagraph: "Insert Paragraph",
                  undo: "Undo the last command",
                  redo: "Redo the last command",
                  tab: "Tab",
                  untab: "Untab",
                  bold: "Set a bold style",
                  italic: "Set a italic style",
                  underline: "Set a underline style",
                  strikethrough: "Set a strikethrough style",
                  removeFormat: "Clean a style",
                  justifyLeft: "Set left align",
                  justifyCenter: "Set center align",
                  justifyRight: "Set right align",
                  justifyFull: "Set full align",
                  insertUnorderedList: "Toggle unordered list",
                  insertOrderedList: "Toggle ordered list",
                  outdent: "Outdent on current paragraph",
                  indent: "Indent on current paragraph",
                  formatPara:
                    "Change current block's format as a paragraph(P tag)",
                  formatH1: "Change current block's format as H1",
                  formatH2: "Change current block's format as H2",
                  formatH3: "Change current block's format as H3",
                  formatH4: "Change current block's format as H4",
                  formatH5: "Change current block's format as H5",
                  formatH6: "Change current block's format as H6",
                  insertHorizontalRule: "Insert horizontal rule",
                  "linkDialog.show": "Show Link Dialog",
                },
                history: { undo: "Undo", redo: "Redo" },
                specialChar: {
                  specialChar: "SPECIAL CHARACTERS",
                  select: "Select Special characters",
                },
                output: { noSelection: "No Selection Made!" },
              },
            });
        },
        1145: (t) => {
          t.exports = ze;
        },
      },
      z = {};
    function o(t) {
      var e = z[t];
      return (
        void 0 !== e || ((e = z[t] = { exports: {} }), H[t](e, e.exports, o)),
        e.exports
      );
    }
    (o.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return o.d(e, { a: e }), e;
    }),
      (o.d = (t, e) => {
        for (var n in e)
          o.o(e, n) &&
            !o.o(t, n) &&
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
      }),
      (o.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
      (o.r = (t) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      });
    var B = {};
    {
      o.r(B);
      var t = o(1145),
        w = o.n(t),
        M =
          (o(9770), ["sans-serif", "serif", "monospace", "cursive", "fantasy"]);
      function O(t) {
        return -1 === w().inArray(t.toLowerCase(), M) ? "'".concat(t, "'") : t;
      }
      var t = navigator.userAgent,
        e,
        n =
          ((e = /MSIE|Trident/i.test(t)) &&
            ((n = /MSIE (\d+[.]\d+)/.exec(t)) && (E = parseFloat(n[1])),
            (n = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(t))) &&
            (E = parseFloat(n[1])),
          /Edge\/\d+/.test(t)),
        i =
          "ontouchstart" in window ||
          0 < navigator.MaxTouchPoints ||
          0 < navigator.msMaxTouchPoints,
        r = e
          ? "DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted"
          : "input";
      const N = {
        isMac: -1 < navigator.appVersion.indexOf("Mac"),
        isMSIE: e,
        isEdge: n,
        isFF: !n && /firefox/i.test(t),
        isPhantom: /PhantomJS/i.test(t),
        isWebkit: !n && /webkit/i.test(t),
        isChrome: !n && /chrome/i.test(t),
        isSafari: !n && /safari/i.test(t) && !/chrome/i.test(t),
        browserVersion: E,
        isSupportTouch: i,
        isFontInstalled: function (t) {
          var e = "Comic Sans MS" === t ? "Courier New" : "Comic Sans MS",
            n = "mmmmmmmmmmwwwww",
            o = document.createElement("canvas").getContext("2d"),
            i = ((o.font = "200px '" + e + "'"), o.measureText(n).width);
          return (
            (o.font = "200px " + O(t) + ', "' + e + '"'),
            i !== o.measureText(n).width
          );
        },
        isW3CRangeSupport: !!document.createRange,
        inputEventName: r,
        genericFontFamilies: M,
        validFontName: O,
      };
      var U = 0;
      const P = {
        eq: function (e) {
          return function (t) {
            return e === t;
          };
        },
        eq2: function (t, e) {
          return t === e;
        },
        peq2: function (n) {
          return function (t, e) {
            return t[n] === e[n];
          };
        },
        ok: function () {
          return !0;
        },
        fail: function () {
          return !1;
        },
        self: function (t) {
          return t;
        },
        not: function (t) {
          return function () {
            return !t.apply(t, arguments);
          };
        },
        and: function (e, n) {
          return function (t) {
            return e(t) && n(t);
          };
        },
        invoke: function (t, e) {
          return function () {
            return t[e].apply(t, arguments);
          };
        },
        resetUniqueId: function () {
          U = 0;
        },
        uniqueId: function (t) {
          var e = ++U + "";
          return t ? t + e : e;
        },
        rect2bnd: function (t) {
          var e = w()(document);
          return {
            top: t.top + e.scrollTop(),
            left: t.left + e.scrollLeft(),
            width: t.right - t.left,
            height: t.bottom - t.top,
          };
        },
        invertObject: function (t) {
          var e,
            n = {};
          for (e in t)
            Object.prototype.hasOwnProperty.call(t, e) && (n[t[e]] = e);
          return n;
        },
        namespaceToCamel: function (t, e) {
          return (
            (e = e || "") +
            t
              .split(".")
              .map(function (t) {
                return t.substring(0, 1).toUpperCase() + t.substring(1);
              })
              .join("")
          );
        },
        debounce: function (o, i, r) {
          var a;
          return function () {
            var t = this,
              e = arguments,
              n = r && !a;
            clearTimeout(a),
              (a = setTimeout(function () {
                (a = null), r || o.apply(t, e);
              }, i)),
              n && o.apply(t, e);
          };
        },
        isValidUrl: function (t) {
          return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi.test(
            t
          );
        },
      };
      function j(t) {
        return t[0];
      }
      function W(t) {
        return t[t.length - 1];
      }
      function K(t) {
        return t.slice(1);
      }
      function V(t, e) {
        if (t && t.length && e) {
          if (t.indexOf) return -1 !== t.indexOf(e);
          if (t.contains) return t.contains(e);
        }
        return !1;
      }
      const R = {
        head: j,
        last: W,
        initial: function (t) {
          return t.slice(0, t.length - 1);
        },
        tail: K,
        prev: function (t, e) {
          return !(t && t.length && e) || -1 === (e = t.indexOf(e))
            ? null
            : t[e - 1];
        },
        next: function (t, e) {
          return !(t && t.length && e) || -1 === (e = t.indexOf(e))
            ? null
            : t[e + 1];
        },
        find: function (t, e) {
          for (var n = 0, o = t.length; n < o; n++) {
            var i = t[n];
            if (e(i)) return i;
          }
        },
        contains: V,
        all: function (t, e) {
          for (var n = 0, o = t.length; n < o; n++) if (!e(t[n])) return !1;
          return !0;
        },
        sum: function (t, n) {
          return (
            (n = n || P.self),
            t.reduce(function (t, e) {
              return t + n(e);
            }, 0)
          );
        },
        from: function (t) {
          for (var e = [], n = t.length, o = -1; ++o < n; ) e[o] = t[o];
          return e;
        },
        isEmpty: function (t) {
          return !t || !t.length;
        },
        clusterBy: function (t, o) {
          return t.length
            ? K(t).reduce(
                function (t, e) {
                  var n = W(t);
                  return (
                    o(W(n), e) ? (n[n.length] = e) : (t[t.length] = [e]), t
                  );
                },
                [[t[0]]]
              )
            : [];
        },
        compact: function (t) {
          for (var e = [], n = 0, o = t.length; n < o; n++)
            t[n] && e.push(t[n]);
          return e;
        },
        unique: function (t) {
          for (var e = [], n = 0, o = t.length; n < o; n++)
            V(e, t[n]) || e.push(t[n]);
          return e;
        },
      };
      var q = String.fromCharCode(160);
      function a(t) {
        return t && w()(t).hasClass("note-editable");
      }
      function s(e) {
        return (
          (e = e.toUpperCase()),
          function (t) {
            return t && t.nodeName.toUpperCase() === e;
          }
        );
      }
      function l(t) {
        return t && 3 === t.nodeType;
      }
      function c(t) {
        return (
          t &&
          /^BR|^IMG|^HR|^IFRAME|^BUTTON|^INPUT|^AUDIO|^VIDEO|^EMBED/.test(
            t.nodeName.toUpperCase()
          )
        );
      }
      function u(t) {
        return (
          !a(t) && t && /^DIV|^P|^LI|^H[1-7]/.test(t.nodeName.toUpperCase())
        );
      }
      var e = s("PRE"),
        _ = s("LI"),
        G = s("TABLE"),
        Y = s("DATA");
      function d(t) {
        return !(tt(t) || Z(t) || Q(t) || u(t) || G(t) || J(t) || Y(t));
      }
      function Z(t) {
        return t && /^UL|^OL/.test(t.nodeName.toUpperCase());
      }
      var Q = s("HR");
      function X(t) {
        return t && /^TD|^TH/.test(t.nodeName.toUpperCase());
      }
      var J = s("BLOCKQUOTE");
      function tt(t) {
        return X(t) || J(t) || a(t);
      }
      (n = s("A")), (t = s("BODY"));
      var h = N.isMSIE && N.browserVersion < 11 ? "&nbsp;" : "<br>";
      function f(t) {
        return l(t) ? t.nodeValue.length : t ? t.childNodes.length : 0;
      }
      function p(t) {
        var e = f(t);
        return (
          0 === e ||
          (!l(t) && 1 === e && t.innerHTML === h) ||
          !(!R.all(t.childNodes, l) || "" !== t.innerHTML)
        );
      }
      function et(t) {
        c(t) || f(t) || (t.innerHTML = h);
      }
      function m(t, e) {
        for (; t; ) {
          if (e(t)) return t;
          if (a(t)) break;
          t = t.parentNode;
        }
        return null;
      }
      function v(t, e) {
        e = e || P.fail;
        var n = [];
        return (
          m(t, function (t) {
            return a(t) || n.push(t), e(t);
          }),
          n
        );
      }
      function nt(t, e) {
        e = e || P.fail;
        for (var n = []; t && !e(t); ) n.push(t), (t = t.nextSibling);
        return n;
      }
      function ot(t, e) {
        var n = e.nextSibling,
          e = e.parentNode;
        return n ? e.insertBefore(t, n) : e.appendChild(t), t;
      }
      function it(n, t) {
        return (
          w().each(t, function (t, e) {
            n.appendChild(e);
          }),
          n
        );
      }
      function g(t) {
        return 0 === t.offset;
      }
      function b(t) {
        return t.offset === f(t.node);
      }
      function rt(t) {
        return g(t) || b(t);
      }
      function at(t, e) {
        for (; t && t !== e; ) {
          if (0 !== y(t)) return !1;
          t = t.parentNode;
        }
        return !0;
      }
      function st(t, e) {
        if (!e) return !1;
        for (; t && t !== e; ) {
          if (y(t) !== f(t.parentNode) - 1) return !1;
          t = t.parentNode;
        }
        return !0;
      }
      function y(t) {
        for (var e = 0; (t = t.previousSibling); ) e += 1;
        return e;
      }
      function k(t) {
        return !!(t && t.childNodes && t.childNodes.length);
      }
      function lt(t, e) {
        var n, o;
        if (0 === t.offset) {
          if (a(t.node)) return null;
          (n = t.node.parentNode), (o = y(t.node));
        } else
          o = k(t.node)
            ? f((n = t.node.childNodes[t.offset - 1]))
            : ((n = t.node), e ? 0 : t.offset - 1);
        return { node: n, offset: o };
      }
      function ct(t, e) {
        var n;
        if (f(t.node) === t.offset) {
          if (a(t.node)) return null;
          var o = (function t(e) {
              if (!e.nextSibling) return;
              if (e.parent !== e.nextSibling.parent) return;
              return l(e.nextSibling) ? e.nextSibling : t(e.nextSibling);
            })(t.node),
            o = o ? ((n = o), 0) : ((n = t.node.parentNode), y(t.node) + 1);
        } else
          o = k(t.node)
            ? ((n = t.node.childNodes[t.offset]), 0)
            : ((n = t.node), e ? f(t.node) : t.offset + 1);
        return { node: n, offset: o };
      }
      function ut(t, e) {
        var n,
          o = 0;
        if (p(t.node))
          return null === t.node
            ? null
            : { node: (n = t.node.nextSibling), offset: (o = 0) };
        if (f(t.node) === t.offset) {
          if (a(t.node)) return null;
          (n = t.node.parentNode),
            (o = y(t.node) + 1),
            a(n) && ((n = t.node.nextSibling), (o = 0));
        } else if (k(t.node)) {
          if (((o = 0), p((n = t.node.childNodes[t.offset]))))
            return p(t.node.nextSibling)
              ? null
              : { node: t.node.nextSibling, offset: o };
        } else if (((n = t.node), (o = e ? f(t.node) : t.offset + 1), p(n)))
          return null;
        return { node: n, offset: o };
      }
      function dt(t, e) {
        return t.node === e.node && t.offset === e.offset;
      }
      function ht(t, e) {
        var n,
          o = e && e.isSkipPaddingBlankHTML,
          i = e && e.isNotSplitEdgePoint,
          e = e && e.isDiscardEmptySplits;
        if ((e && (o = !0), rt(t) && (l(t.node) || i))) {
          if (g(t)) return t.node;
          if (b(t)) return t.node.nextSibling;
        }
        return l(t.node)
          ? t.node.splitText(t.offset)
          : ((i = t.node.childNodes[t.offset]),
            it((n = ot(t.node.cloneNode(!1), t.node)), nt(i)),
            o || (et(t.node), et(n)),
            e && (p(t.node) && C(t.node), p(n))
              ? (C(n), t.node.nextSibling)
              : n);
      }
      function ft(t, n, o) {
        t = v(n.node, P.eq(t));
        return t.length
          ? 1 === t.length
            ? ht(n, o)
            : t.reduce(function (t, e) {
                return (
                  t === n.node && (t = ht(n, o)),
                  ht({ node: e, offset: t ? y(t) : f(e) }, o)
                );
              })
          : null;
      }
      function pt(t) {
        return document.createElement(t);
      }
      function C(t, e) {
        if (t && t.parentNode) {
          if (t.removeNode) return t.removeNode(e);
          var n = t.parentNode;
          if (!e) {
            for (var o = [], i = 0, r = t.childNodes.length; i < r; i++)
              o.push(t.childNodes[i]);
            for (var a = 0, s = o.length; a < s; a++) n.insertBefore(o[a], t);
          }
          n.removeChild(t);
        }
      }
      var mt = s("TEXTAREA");
      function vt(t, e) {
        t = mt(t[0]) ? t.val() : t.html();
        return e ? t.replace(/[\n\r]/g, "") : t;
      }
      const L = {
        NBSP_CHAR: q,
        ZERO_WIDTH_NBSP_CHAR: "\ufeff",
        blank: h,
        emptyPara: "<p>".concat(h, "</p>"),
        makePredByNodeName: s,
        isEditable: a,
        isControlSizing: function (t) {
          return t && w()(t).hasClass("note-control-sizing");
        },
        isText: l,
        isElement: function (t) {
          return t && 1 === t.nodeType;
        },
        isVoid: c,
        isPara: u,
        isPurePara: function (t) {
          return u(t) && !_(t);
        },
        isHeading: function (t) {
          return t && /^H[1-7]/.test(t.nodeName.toUpperCase());
        },
        isInline: d,
        isBlock: P.not(d),
        isBodyInline: function (t) {
          return d(t) && !m(t, u);
        },
        isBody: t,
        isParaInline: function (t) {
          return d(t) && !!m(t, u);
        },
        isPre: e,
        isList: Z,
        isTable: G,
        isData: Y,
        isCell: X,
        isBlockquote: J,
        isBodyContainer: tt,
        isAnchor: n,
        isDiv: s("DIV"),
        isLi: _,
        isBR: s("BR"),
        isSpan: s("SPAN"),
        isB: s("B"),
        isU: s("U"),
        isS: s("S"),
        isI: s("I"),
        isImg: s("IMG"),
        isTextarea: mt,
        deepestChildIsEmpty: function (t) {
          do {
            if (
              null === t.firstElementChild ||
              "" === t.firstElementChild.innerHTML
            )
              break;
          } while ((t = t.firstElementChild));
          return p(t);
        },
        isEmpty: p,
        isEmptyAnchor: P.and(n, p),
        isClosestSibling: function (t, e) {
          return t.nextSibling === e || t.previousSibling === e;
        },
        withClosestSiblings: function (t, e) {
          e = e || P.ok;
          var n = [];
          return (
            t.previousSibling &&
              e(t.previousSibling) &&
              n.push(t.previousSibling),
            n.push(t),
            t.nextSibling && e(t.nextSibling) && n.push(t.nextSibling),
            n
          );
        },
        nodeLength: f,
        isLeftEdgePoint: g,
        isRightEdgePoint: b,
        isEdgePoint: rt,
        isLeftEdgeOf: at,
        isRightEdgeOf: st,
        isLeftEdgePointOf: function (t, e) {
          return g(t) && at(t.node, e);
        },
        isRightEdgePointOf: function (t, e) {
          return b(t) && st(t.node, e);
        },
        prevPoint: lt,
        nextPoint: ct,
        nextPointWithEmptyNode: ut,
        isSamePoint: dt,
        isVisiblePoint: function (t) {
          var e;
          return !(
            !l(t.node) &&
            k(t.node) &&
            !p(t.node) &&
            ((e = t.node.childNodes[t.offset - 1]),
            (t = t.node.childNodes[t.offset]),
            (e && !c(e)) || (t && !c(t))) &&
            !G(t)
          );
        },
        prevPointUntil: function (t, e) {
          for (; t; ) {
            if (e(t)) return t;
            t = lt(t);
          }
          return null;
        },
        nextPointUntil: function (t, e) {
          for (; t; ) {
            if (e(t)) return t;
            t = ct(t);
          }
          return null;
        },
        isCharPoint: function (t) {
          return (
            !!l(t.node) &&
            (t = t.node.nodeValue.charAt(t.offset - 1)) &&
            " " !== t &&
            t !== q
          );
        },
        isSpacePoint: function (t) {
          return (
            !!l(t.node) &&
            (" " === (t = t.node.nodeValue.charAt(t.offset - 1)) || t === q)
          );
        },
        walkPoint: function (t, e, n, o) {
          for (var i = t; i && (n(i), !dt(i, e)); )
            i = ut(i, o && t.node !== i.node && e.node !== i.node);
        },
        ancestor: m,
        singleChildAncestor: function (t, e) {
          for (t = t.parentNode; t && 1 === f(t); ) {
            if (e(t)) return t;
            if (a(t)) break;
            t = t.parentNode;
          }
          return null;
        },
        listAncestor: v,
        lastAncestor: function (t, e) {
          return (t = v(t)), R.last(t.filter(e));
        },
        listNext: nt,
        listPrev: function (t, e) {
          e = e || P.fail;
          for (var n = []; t && !e(t); ) n.push(t), (t = t.previousSibling);
          return n;
        },
        listDescendant: function (i, r) {
          var a = [];
          return (
            (r = r || P.ok),
            (function t(e) {
              i !== e && r(e) && a.push(e);
              for (var n = 0, o = e.childNodes.length; n < o; n++)
                t(e.childNodes[n]);
            })(i),
            a
          );
        },
        commonAncestor: function (t, e) {
          for (var n = v(t), o = e; o; o = o.parentNode)
            if (-1 < n.indexOf(o)) return o;
          return null;
        },
        wrap: function (t, e) {
          var n = t.parentNode,
            e = w()("<" + e + ">")[0];
          return n.insertBefore(e, t), e.appendChild(t), e;
        },
        insertAfter: ot,
        appendChildNodes: it,
        position: y,
        hasChildren: k,
        makeOffsetPath: function (t, e) {
          return v(e, P.eq(t)).map(y).reverse();
        },
        fromOffsetPath: function (t, e) {
          for (var n = t, o = 0, i = e.length; o < i; o++)
            n =
              n.childNodes.length <= e[o]
                ? n.childNodes[n.childNodes.length - 1]
                : n.childNodes[e[o]];
          return n;
        },
        splitTree: ft,
        splitPoint: function (t, e) {
          var n,
            o = e ? u : tt,
            i = v(t.node, o),
            r = R.last(i) || t.node,
            o = o(r) ? ((n = i[i.length - 2]), r) : (n = r).parentNode;
          return {
            rightNode: (i =
              (i =
                n &&
                ft(n, t, {
                  isSkipPaddingBlankHTML: e,
                  isNotSplitEdgePoint: e,
                })) || o !== t.node
                ? i
                : t.node.childNodes[t.offset]),
            container: o,
          };
        },
        create: pt,
        createText: function (t) {
          return document.createTextNode(t);
        },
        remove: C,
        removeWhile: function (t, e) {
          for (; t && !a(t) && e(t); ) {
            var n = t.parentNode;
            C(t), (t = n);
          }
        },
        replace: function (t, e) {
          return t.nodeName.toUpperCase() === e.toUpperCase()
            ? t
            : ((e = pt(e)),
              t.style.cssText && (e.style.cssText = t.style.cssText),
              it(e, R.from(t.childNodes)),
              ot(e, t),
              C(t),
              e);
        },
        html: function (t, e) {
          return (
            (t = vt(t)),
            (t = e
              ? (t = t.replace(
                  /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g,
                  function (t, e, n) {
                    n = n.toUpperCase();
                    (e = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(n) && !!e),
                      (n = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(n));
                    return t + (e || n ? "\n" : "");
                  }
                )).trim()
              : t)
          );
        },
        value: vt,
        posFromPlaceholder: function (t) {
          var e = (t = w()(t)).offset(),
            t = t.outerHeight(!0);
          return { left: e.left, top: e.top + t };
        },
        attachEvents: function (e, n) {
          Object.keys(n).forEach(function (t) {
            e.on(t, n[t]);
          });
        },
        detachEvents: function (e, n) {
          Object.keys(n).forEach(function (t) {
            e.off(t, n[t]);
          });
        },
        isCustomStyleTag: function (t) {
          return t && !l(t) && R.contains(t.classList, "note-styletag");
        },
      };
      function gt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var bt = (function () {
        function n(t, e) {
          if (!(this instanceof n))
            throw new TypeError("Cannot call a class as a function");
          (this.$note = t),
            (this.memos = {}),
            (this.modules = {}),
            (this.layoutInfo = {}),
            (this.options = w().extend(!0, {}, e)),
            (w().summernote.ui = w().summernote.ui_template(this.options)),
            (this.ui = w().summernote.ui),
            this.initialize();
        }
        var t, e, o;
        return (
          (t = n),
          (e = [
            {
              key: "initialize",
              value: function () {
                return (
                  (this.layoutInfo = this.ui.createLayout(this.$note)),
                  this._initialize(),
                  this.$note.hide(),
                  this
                );
              },
            },
            {
              key: "destroy",
              value: function () {
                this._destroy(),
                  this.$note.removeData("summernote"),
                  this.ui.removeLayout(this.$note, this.layoutInfo);
              },
            },
            {
              key: "reset",
              value: function () {
                var t = this.isDisabled();
                this.code(L.emptyPara),
                  this._destroy(),
                  this._initialize(),
                  t && this.disable();
              },
            },
            {
              key: "_initialize",
              value: function () {
                var e = this,
                  n =
                    ((this.options.id = P.uniqueId(w().now())),
                    (this.options.container =
                      this.options.container || this.layoutInfo.editor),
                    w().extend({}, this.options.buttons)),
                  o =
                    (Object.keys(n).forEach(function (t) {
                      e.memo("button." + t, n[t]);
                    }),
                    w().extend(
                      {},
                      this.options.modules,
                      w().summernote.plugins || {}
                    ));
                Object.keys(o).forEach(function (t) {
                  e.module(t, o[t], !0);
                }),
                  Object.keys(this.modules).forEach(function (t) {
                    e.initializeModule(t);
                  });
              },
            },
            {
              key: "_destroy",
              value: function () {
                var e = this;
                Object.keys(this.modules)
                  .reverse()
                  .forEach(function (t) {
                    e.removeModule(t);
                  }),
                  Object.keys(this.memos).forEach(function (t) {
                    e.removeMemo(t);
                  }),
                  this.triggerEvent("destroy", this);
              },
            },
            {
              key: "code",
              value: function (t) {
                var e = this.invoke("codeview.isActivated");
                if (void 0 === t)
                  return (
                    this.invoke("codeview.sync"),
                    e
                      ? this.layoutInfo.codable.val()
                      : this.layoutInfo.editable.html()
                  );
                e
                  ? this.invoke("codeview.sync", t)
                  : this.layoutInfo.editable.html(t),
                  this.$note.val(t),
                  this.triggerEvent("change", t, this.layoutInfo.editable);
              },
            },
            {
              key: "isDisabled",
              value: function () {
                return (
                  "false" === this.layoutInfo.editable.attr("contenteditable")
                );
              },
            },
            {
              key: "enable",
              value: function () {
                this.layoutInfo.editable.attr("contenteditable", !0),
                  this.invoke("toolbar.activate", !0),
                  this.triggerEvent("disable", !1),
                  (this.options.editing = !0);
              },
            },
            {
              key: "disable",
              value: function () {
                this.invoke("codeview.isActivated") &&
                  this.invoke("codeview.deactivate"),
                  this.layoutInfo.editable.attr("contenteditable", !1),
                  (this.options.editing = !1),
                  this.invoke("toolbar.deactivate", !0),
                  this.triggerEvent("disable", !0);
              },
            },
            {
              key: "triggerEvent",
              value: function () {
                var t = R.head(arguments),
                  e = R.tail(R.from(arguments)),
                  n = this.options.callbacks[P.namespaceToCamel(t, "on")];
                n && n.apply(this.$note[0], e),
                  this.$note.trigger("summernote." + t, e);
              },
            },
            {
              key: "initializeModule",
              value: function (t) {
                t = this.modules[t];
                (t.shouldInitialize = t.shouldInitialize || P.ok),
                  t.shouldInitialize() &&
                    (t.initialize && t.initialize(), t.events) &&
                    L.attachEvents(this.$note, t.events);
              },
            },
            {
              key: "module",
              value: function (t, e, n) {
                if (1 === arguments.length) return this.modules[t];
                (this.modules[t] = new e(this)), n || this.initializeModule(t);
              },
            },
            {
              key: "removeModule",
              value: function (t) {
                var e = this.modules[t];
                e.shouldInitialize() &&
                  (e.events && L.detachEvents(this.$note, e.events),
                  e.destroy) &&
                  e.destroy(),
                  delete this.modules[t];
              },
            },
            {
              key: "memo",
              value: function (t, e) {
                if (1 === arguments.length) return this.memos[t];
                this.memos[t] = e;
              },
            },
            {
              key: "removeMemo",
              value: function (t) {
                this.memos[t] &&
                  this.memos[t].destroy &&
                  this.memos[t].destroy(),
                  delete this.memos[t];
              },
            },
            {
              key: "createInvokeHandlerAndUpdateState",
              value: function (e, n) {
                var o = this;
                return function (t) {
                  o.createInvokeHandler(e, n)(t),
                    o.invoke("buttons.updateCurrentStyle");
                };
              },
            },
            {
              key: "createInvokeHandler",
              value: function (e, n) {
                var o = this;
                return function (t) {
                  t.preventDefault();
                  t = w()(t.target);
                  o.invoke(e, n || t.closest("[data-value]").data("value"), t);
                };
              },
            },
            {
              key: "invoke",
              value: function () {
                var t = R.head(arguments),
                  e = R.tail(R.from(arguments)),
                  t = t.split("."),
                  n = 1 < t.length,
                  o = n && R.head(t),
                  n = n ? R.last(t) : R.head(t),
                  t = this.modules[o || "editor"];
                return !o && this[n]
                  ? this[n].apply(this, e)
                  : t && t[n] && t.shouldInitialize()
                  ? t[n].apply(t, e)
                  : void 0;
              },
            },
          ]) && gt(t.prototype, e),
          o && gt(t, o),
          n
        );
      })();
      function yt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function kt(t, e) {
        for (
          var n,
            o = t.parentElement(),
            i = document.body.createTextRange(),
            r = R.from(o.childNodes),
            a = 0;
          a < r.length;
          a++
        )
          if (!L.isText(r[a])) {
            if (
              (i.moveToElementText(r[a]),
              0 <= i.compareEndPoints("StartToStart", t))
            )
              break;
            n = r[a];
          }
        if (0 !== a && L.isText(r[a - 1])) {
          for (
            var s = document.body.createTextRange(),
              l = null,
              c =
                (s.moveToElementText(n || o),
                s.collapse(!n),
                (l = n ? n.nextSibling : o.firstChild),
                t.duplicate()),
              u =
                (c.setEndPoint("StartToStart", s),
                c.text.replace(/[\r\n]/g, "").length);
            u > l.nodeValue.length && l.nextSibling;

          )
            (u -= l.nodeValue.length), (l = l.nextSibling);
          l.nodeValue;
          e &&
            l.nextSibling &&
            L.isText(l.nextSibling) &&
            u === l.nodeValue.length &&
            ((u -= l.nodeValue.length), (l = l.nextSibling)),
            (o = l),
            (a = u);
        }
        return { cont: o, offset: a };
      }
      function wt(t) {
        function r(t, e) {
          if (L.isText(t)) {
            var n = L.listPrev(t, P.not(L.isText)),
              o = R.last(n).previousSibling,
              i = o || t.parentNode;
            (e += R.sum(R.tail(n), L.nodeLength)), (n = !o);
          } else {
            if (((i = t.childNodes[e] || t), L.isText(i))) return r(i, 0);
            (e = 0), (n = !1);
          }
          return { node: i, collapseToStart: n, offset: e };
        }
        var e = document.body.createTextRange(),
          t = r(t.node, t.offset);
        return (
          e.moveToElementText(t.node),
          e.collapse(t.collapseToStart),
          e.moveStart("character", t.offset),
          e
        );
      }
      w().fn.extend({
        summernote: function () {
          var t = w().type(R.head(arguments)),
            e = "string" === t,
            t = "object" === t,
            o = w().extend(
              {},
              w().summernote.options,
              t ? R.head(arguments) : {}
            ),
            t =
              ((o.langInfo = w().extend(
                !0,
                {},
                w().summernote.lang["en-US"],
                w().summernote.lang[o.lang]
              )),
              (o.icons = w().extend(
                !0,
                {},
                w().summernote.options.icons,
                o.icons
              )),
              (o.tooltip =
                "auto" === o.tooltip ? !N.isSupportTouch : o.tooltip),
              this.each(function (t, e) {
                var n,
                  e = w()(e);
                e.data("summernote") ||
                  ((n = new bt(e, o)),
                  e.data("summernote", n),
                  e.data("summernote").triggerEvent("init", n.layoutInfo));
              }),
              this.first());
          if (t.length) {
            t = t.data("summernote");
            if (e) return t.invoke.apply(t, R.from(arguments));
            o.focus && t.invoke("editor.focus");
          }
          return this;
        },
      });
      var x = (function () {
        function r(t, e, n, o) {
          if (!(this instanceof r))
            throw new TypeError("Cannot call a class as a function");
          (this.sc = t),
            (this.so = e),
            (this.ec = n),
            (this.eo = o),
            (this.isOnEditable = this.makeIsOn(L.isEditable)),
            (this.isOnList = this.makeIsOn(L.isList)),
            (this.isOnAnchor = this.makeIsOn(L.isAnchor)),
            (this.isOnCell = this.makeIsOn(L.isCell)),
            (this.isOnData = this.makeIsOn(L.isData));
        }
        var t, e, n;
        return (
          (t = r),
          (e = [
            {
              key: "nativeRange",
              value: function () {
                var t;
                return N.isW3CRangeSupport
                  ? ((t = document.createRange()).setStart(this.sc, this.so),
                    t.setEnd(this.ec, this.eo),
                    t)
                  : ((t = wt({ node: this.sc, offset: this.so })).setEndPoint(
                      "EndToEnd",
                      wt({ node: this.ec, offset: this.eo })
                    ),
                    t);
              },
            },
            {
              key: "getPoints",
              value: function () {
                return { sc: this.sc, so: this.so, ec: this.ec, eo: this.eo };
              },
            },
            {
              key: "getStartPoint",
              value: function () {
                return { node: this.sc, offset: this.so };
              },
            },
            {
              key: "getEndPoint",
              value: function () {
                return { node: this.ec, offset: this.eo };
              },
            },
            {
              key: "select",
              value: function () {
                var t,
                  e = this.nativeRange();
                return (
                  N.isW3CRangeSupport
                    ? (0 < (t = document.getSelection()).rangeCount &&
                        t.removeAllRanges(),
                      t.addRange(e))
                    : e.select(),
                  this
                );
              },
            },
            {
              key: "scrollIntoView",
              value: function (t) {
                var e = w()(t).height();
                return (
                  t.scrollTop + e < this.sc.offsetTop &&
                    (t.scrollTop += Math.abs(
                      t.scrollTop + e - this.sc.offsetTop
                    )),
                  this
                );
              },
            },
            {
              key: "normalize",
              value: function () {
                function t(t, e) {
                  if (!t) return t;
                  if (
                    L.isVisiblePoint(t) &&
                    (!L.isEdgePoint(t) ||
                      (L.isRightEdgePoint(t) && !e) ||
                      (L.isLeftEdgePoint(t) && e) ||
                      (L.isRightEdgePoint(t) &&
                        e &&
                        L.isVoid(t.node.nextSibling)) ||
                      (L.isLeftEdgePoint(t) &&
                        !e &&
                        L.isVoid(t.node.previousSibling)) ||
                      (L.isBlock(t.node) && L.isEmpty(t.node)))
                  )
                    return t;
                  var n,
                    o = L.ancestor(t.node, L.isBlock),
                    i = !1,
                    r =
                      (i ||
                        ((r = L.prevPoint(t) || { node: null }),
                        (i =
                          (L.isLeftEdgePointOf(t, o) || L.isVoid(r.node)) &&
                          !e)),
                      !1);
                  if (
                    (r ||
                      ((n = L.nextPoint(t) || { node: null }),
                      (r =
                        (L.isRightEdgePointOf(t, o) || L.isVoid(n.node)) && e)),
                    i || r)
                  ) {
                    if (L.isVisiblePoint(t)) return t;
                    e = !e;
                  }
                  return (
                    (e
                      ? L.nextPointUntil(L.nextPoint(t), L.isVisiblePoint)
                      : L.prevPointUntil(L.prevPoint(t), L.isVisiblePoint)) || t
                  );
                }
                var e = t(this.getEndPoint(), !1),
                  n = this.isCollapsed() ? e : t(this.getStartPoint(), !0);
                return new r(n.node, n.offset, e.node, e.offset);
              },
            },
            {
              key: "nodes",
              value: function (n, t) {
                n = n || P.ok;
                var o = t && t.includeAncestor,
                  i = t && t.fullyContains,
                  t = this.getStartPoint(),
                  e = this.getEndPoint(),
                  r = [],
                  a = [];
                return (
                  L.walkPoint(
                    t,
                    e,
                    function (t) {
                      var e;
                      L.isEditable(t.node) ||
                        (i
                          ? (L.isLeftEdgePoint(t) && a.push(t.node),
                            L.isRightEdgePoint(t) &&
                              R.contains(a, t.node) &&
                              (e = t.node))
                          : (e = o ? L.ancestor(t.node, n) : t.node),
                        e && n(e) && r.push(e));
                    },
                    !0
                  ),
                  R.unique(r)
                );
              },
            },
            {
              key: "commonAncestor",
              value: function () {
                return L.commonAncestor(this.sc, this.ec);
              },
            },
            {
              key: "expand",
              value: function (t) {
                var e,
                  n = L.ancestor(this.sc, t),
                  t = L.ancestor(this.ec, t);
                return n || t
                  ? ((e = this.getPoints()),
                    n && ((e.sc = n), (e.so = 0)),
                    t && ((e.ec = t), (e.eo = L.nodeLength(t))),
                    new r(e.sc, e.so, e.ec, e.eo))
                  : new r(this.sc, this.so, this.ec, this.eo);
              },
            },
            {
              key: "collapse",
              value: function (t) {
                return t
                  ? new r(this.sc, this.so, this.sc, this.so)
                  : new r(this.ec, this.eo, this.ec, this.eo);
              },
            },
            {
              key: "splitText",
              value: function () {
                var t = this.sc === this.ec,
                  e = this.getPoints();
                return (
                  L.isText(this.ec) &&
                    !L.isEdgePoint(this.getEndPoint()) &&
                    this.ec.splitText(this.eo),
                  L.isText(this.sc) &&
                    !L.isEdgePoint(this.getStartPoint()) &&
                    ((e.sc = this.sc.splitText(this.so)), (e.so = 0), t) &&
                    ((e.ec = e.sc), (e.eo = this.eo - this.so)),
                  new r(e.sc, e.so, e.ec, e.eo)
                );
              },
            },
            {
              key: "deleteContents",
              value: function () {
                var t, e, o, i;
                return this.isCollapsed()
                  ? this
                  : ((t = this.splitText()),
                    (e = t.nodes(null, { fullyContains: !0 })),
                    (o = L.prevPointUntil(t.getStartPoint(), function (t) {
                      return !R.contains(e, t.node);
                    })),
                    (i = []),
                    w().each(e, function (t, e) {
                      var n = e.parentNode;
                      o.node !== n && 1 === L.nodeLength(n) && i.push(n),
                        L.remove(e, !1);
                    }),
                    w().each(i, function (t, e) {
                      L.remove(e, !1);
                    }),
                    new r(o.node, o.offset, o.node, o.offset).normalize());
              },
            },
            {
              key: "makeIsOn",
              value: function (e) {
                return function () {
                  var t = L.ancestor(this.sc, e);
                  return !!t && t === L.ancestor(this.ec, e);
                };
              },
            },
            {
              key: "isLeftEdgeOf",
              value: function (t) {
                return (
                  !!L.isLeftEdgePoint(this.getStartPoint()) &&
                  (t = L.ancestor(this.sc, t)) &&
                  L.isLeftEdgeOf(this.sc, t)
                );
              },
            },
            {
              key: "isCollapsed",
              value: function () {
                return this.sc === this.ec && this.so === this.eo;
              },
            },
            {
              key: "wrapBodyInlineWithPara",
              value: function () {
                var t, e, n;
                return L.isBodyContainer(this.sc) && L.isEmpty(this.sc)
                  ? ((this.sc.innerHTML = L.emptyPara),
                    new r(this.sc.firstChild, 0, this.sc.firstChild, 0))
                  : ((e = this.normalize()),
                    L.isParaInline(this.sc) || L.isPara(this.sc)
                      ? e
                      : (L.isInline(e.sc)
                          ? ((n = L.listAncestor(e.sc, P.not(L.isInline))),
                            (t = R.last(n)),
                            L.isInline(t) ||
                              (t = n[n.length - 2] || e.sc.childNodes[e.so]))
                          : (t = e.sc.childNodes[0 < e.so ? e.so - 1 : 0]),
                        t &&
                          (n = (n = L.listPrev(
                            t,
                            L.isParaInline
                          ).reverse()).concat(
                            L.listNext(t.nextSibling, L.isParaInline)
                          )).length &&
                          ((e = L.wrap(R.head(n), "p")),
                          L.appendChildNodes(e, R.tail(n))),
                        this.normalize()));
              },
            },
            {
              key: "insertNode",
              value: function (t) {
                var e = this,
                  e =
                    ((L.isText(t) || L.isInline(t)) &&
                      (e = this.wrapBodyInlineWithPara().deleteContents()),
                    L.splitPoint(e.getStartPoint(), L.isInline(t)));
                return (
                  e.rightNode
                    ? (e.rightNode.parentNode.insertBefore(t, e.rightNode),
                      L.isEmpty(e.rightNode) &&
                        L.isPara(t) &&
                        e.rightNode.parentNode.removeChild(e.rightNode))
                    : e.container.appendChild(t),
                  t
                );
              },
            },
            {
              key: "pasteHTML",
              value: function (t) {
                t = w().trim(t);
                var t = w()("<div></div>").html(t)[0],
                  t = R.from(t.childNodes),
                  e = this,
                  n = !1;
                return (
                  0 <= e.so && ((t = t.reverse()), (n = !0)),
                  (t = t.map(function (t) {
                    return e.insertNode(t);
                  })),
                  (t = n ? t.reverse() : t)
                );
              },
            },
            {
              key: "toString",
              value: function () {
                var t = this.nativeRange();
                return N.isW3CRangeSupport ? t.toString() : t.text;
              },
            },
            {
              key: "getWordRange",
              value: function (t) {
                var e,
                  n = this.getEndPoint();
                return L.isCharPoint(n)
                  ? ((e = L.prevPointUntil(n, function (t) {
                      return !L.isCharPoint(t);
                    })),
                    t &&
                      (n = L.nextPointUntil(n, function (t) {
                        return !L.isCharPoint(t);
                      })),
                    new r(e.node, e.offset, n.node, n.offset))
                  : this;
              },
            },
            {
              key: "getWordsRange",
              value: function (t) {
                function e(t) {
                  return !L.isCharPoint(t) && !L.isSpacePoint(t);
                }
                var n,
                  o = this.getEndPoint();
                return e(o)
                  ? this
                  : ((n = L.prevPointUntil(o, e)),
                    t && (o = L.nextPointUntil(o, e)),
                    new r(n.node, n.offset, o.node, o.offset));
              },
            },
            {
              key: "getWordsMatchRange",
              value: function (e) {
                var n = this.getEndPoint(),
                  t = L.prevPointUntil(n, function (t) {
                    return (
                      (!L.isCharPoint(t) && !L.isSpacePoint(t)) ||
                      ((t = new r(t.node, t.offset, n.node, n.offset)),
                      (t = e.exec(t.toString())) && 0 === t.index)
                    );
                  }),
                  t = new r(t.node, t.offset, n.node, n.offset),
                  o = t.toString(),
                  i = e.exec(o);
                return i && i[0].length === o.length ? t : null;
              },
            },
            {
              key: "bookmark",
              value: function (t) {
                return {
                  s: { path: L.makeOffsetPath(t, this.sc), offset: this.so },
                  e: { path: L.makeOffsetPath(t, this.ec), offset: this.eo },
                };
              },
            },
            {
              key: "paraBookmark",
              value: function (t) {
                return {
                  s: {
                    path: R.tail(L.makeOffsetPath(R.head(t), this.sc)),
                    offset: this.so,
                  },
                  e: {
                    path: R.tail(L.makeOffsetPath(R.last(t), this.ec)),
                    offset: this.eo,
                  },
                };
              },
            },
            {
              key: "getClientRects",
              value: function () {
                return this.nativeRange().getClientRects();
              },
            },
          ]) && yt(t.prototype, e),
          n && yt(t, n),
          r
        );
      })();
      const A = {
        create: function (t, e, n, o) {
          return 4 === arguments.length
            ? new x(t, e, n, o)
            : 2 === arguments.length
            ? new x((n = t), (o = e), n, o)
            : (e = this.createFromSelection()) || 1 !== arguments.length
            ? e
            : ((n = t),
              L.isEditable(n) && (n = n.lastChild),
              this.createFromBodyElement(n, L.emptyPara === t.innerHTML));
        },
        createFromBodyElement: function (t) {
          var e =
            1 < arguments.length && void 0 !== arguments[1] && arguments[1];
          return this.createFromNode(t).collapse(e);
        },
        createFromSelection: function () {
          if (N.isW3CRangeSupport) {
            var t = document.getSelection();
            if (!t || 0 === t.rangeCount) return null;
            if (L.isBody(t.anchorNode)) return null;
            var t = t.getRangeAt(0),
              e = t.startContainer,
              n = t.startOffset,
              o = t.endContainer,
              t = t.endOffset;
          } else {
            var i = document.selection.createRange(),
              r = i.duplicate(),
              i = (r.collapse(!1), i.collapse(!0), kt(i, !0)),
              r = kt(r, !1);
            (e = (i =
              L.isText(i.node) &&
              L.isLeftEdgePoint(i) &&
              L.isTextNode(r.node) &&
              L.isRightEdgePoint(r) &&
              r.node.nextSibling === i.node
                ? r
                : i).cont),
              (n = i.offset),
              (o = r.cont),
              (t = r.offset);
          }
          return new x(e, n, o, t);
        },
        createFromNode: function (t) {
          var e = t,
            n = 0,
            o = L.nodeLength(t);
          return (
            L.isVoid(e) && ((n = L.listPrev(e).length - 1), (e = e.parentNode)),
            L.isBR(t)
              ? ((o = L.listPrev(t).length - 1), (t = t.parentNode))
              : L.isVoid(t) && ((o = L.listPrev(t).length), (t = t.parentNode)),
            this.create(e, n, t, o)
          );
        },
        createFromNodeBefore: function (t) {
          return this.createFromNode(t).collapse(!0);
        },
        createFromNodeAfter: function (t) {
          return this.createFromNode(t).collapse();
        },
        createFromBookmark: function (t, e) {
          var n = L.fromOffsetPath(t, e.s.path),
            o = e.s.offset,
            t = L.fromOffsetPath(t, e.e.path),
            e = e.e.offset;
          return new x(n, o, t, e);
        },
        createFromParaBookmark: function (t, e) {
          var n = t.s.offset,
            o = t.e.offset,
            i = L.fromOffsetPath(R.head(e), t.s.path),
            e = L.fromOffsetPath(R.last(e), t.e.path);
          return new x(i, n, e, o);
        },
      };
      var S = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        ESCAPE: 27,
        SPACE: 32,
        DELETE: 46,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        NUM0: 48,
        NUM1: 49,
        NUM2: 50,
        NUM3: 51,
        NUM4: 52,
        NUM5: 53,
        NUM6: 54,
        NUM7: 55,
        NUM8: 56,
        B: 66,
        E: 69,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        R: 82,
        S: 83,
        U: 85,
        V: 86,
        Y: 89,
        Z: 90,
        SLASH: 191,
        LEFTBRACKET: 219,
        BACKSLASH: 220,
        RIGHTBRACKET: 221,
        HOME: 36,
        END: 35,
        PAGEUP: 33,
        PAGEDOWN: 34,
      };
      const F = {
        isEdit: function (t) {
          return R.contains(
            [S.BACKSPACE, S.TAB, S.ENTER, S.SPACE, S.DELETE],
            t
          );
        },
        isMove: function (t) {
          return R.contains([S.LEFT, S.UP, S.RIGHT, S.DOWN], t);
        },
        isNavigation: function (t) {
          return R.contains([S.HOME, S.END, S.PAGEUP, S.PAGEDOWN], t);
        },
        nameFromCode: P.invertObject(S),
        code: S,
      };
      function Ct(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var xt = (function () {
        function e(t) {
          if (!(this instanceof e))
            throw new TypeError("Cannot call a class as a function");
          (this.stack = []),
            (this.stackOffset = -1),
            (this.context = t),
            (this.$editable = t.layoutInfo.editable),
            (this.editable = this.$editable[0]);
        }
        var t, n, o;
        return (
          (t = e),
          (n = [
            {
              key: "makeSnapshot",
              value: function () {
                var t = A.create(this.editable);
                return {
                  contents: this.$editable.html(),
                  bookmark:
                    t && t.isOnEditable()
                      ? t.bookmark(this.editable)
                      : {
                          s: { path: [], offset: 0 },
                          e: { path: [], offset: 0 },
                        },
                };
              },
            },
            {
              key: "applySnapshot",
              value: function (t) {
                null !== t.contents && this.$editable.html(t.contents),
                  null !== t.bookmark &&
                    A.createFromBookmark(this.editable, t.bookmark).select();
              },
            },
            {
              key: "rewind",
              value: function () {
                this.$editable.html() !==
                  this.stack[this.stackOffset].contents && this.recordUndo(),
                  (this.stackOffset = 0),
                  this.applySnapshot(this.stack[this.stackOffset]);
              },
            },
            {
              key: "commit",
              value: function () {
                (this.stack = []), (this.stackOffset = -1), this.recordUndo();
              },
            },
            {
              key: "reset",
              value: function () {
                (this.stack = []),
                  (this.stackOffset = -1),
                  this.$editable.html(""),
                  this.recordUndo();
              },
            },
            {
              key: "undo",
              value: function () {
                this.$editable.html() !==
                  this.stack[this.stackOffset].contents && this.recordUndo(),
                  0 < this.stackOffset &&
                    (this.stackOffset--,
                    this.applySnapshot(this.stack[this.stackOffset]));
              },
            },
            {
              key: "redo",
              value: function () {
                this.stack.length - 1 > this.stackOffset &&
                  (this.stackOffset++,
                  this.applySnapshot(this.stack[this.stackOffset]));
              },
            },
            {
              key: "recordUndo",
              value: function () {
                this.stackOffset++,
                  this.stack.length > this.stackOffset &&
                    (this.stack = this.stack.slice(0, this.stackOffset)),
                  this.stack.push(this.makeSnapshot()),
                  this.stack.length > this.context.options.historyLimit &&
                    (this.stack.shift(), --this.stackOffset);
              },
            },
          ]) && Ct(t.prototype, n),
          o && Ct(t, o),
          e
        );
      })();
      function St(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var Tt = (function () {
        function t() {
          if (!(this instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: "jQueryCSS",
              value: function (n, t) {
                var o = {};
                return (
                  w().each(t, function (t, e) {
                    o[e] = n.css(e);
                  }),
                  o
                );
              },
            },
            {
              key: "fromNode",
              value: function (t) {
                var e =
                    this.jQueryCSS(t, [
                      "font-family",
                      "font-size",
                      "text-align",
                      "list-style-type",
                      "line-height",
                    ]) || {},
                  t = t[0].style.fontSize || e["font-size"];
                return (
                  (e["font-size"] = parseInt(t, 10)),
                  (e["font-size-unit"] = t.match(/[a-z%]+$/)),
                  e
                );
              },
            },
            {
              key: "stylePara",
              value: function (t, n) {
                w().each(
                  t.nodes(L.isPara, { includeAncestor: !0 }),
                  function (t, e) {
                    w()(e).css(n);
                  }
                );
              },
            },
            {
              key: "styleNodes",
              value: function (t, e) {
                t = t.splitText();
                var n,
                  o,
                  i,
                  r = (e && e.nodeName) || "SPAN",
                  a = !(!e || !e.expandClosestSibling),
                  e = !(!e || !e.onlyPartialContains);
                return t.isCollapsed()
                  ? [t.insertNode(L.create(r))]
                  : ((i = L.makePredByNodeName(r)),
                    (n = t
                      .nodes(L.isText, { fullyContains: !0 })
                      .map(function (t) {
                        return L.singleChildAncestor(t, i) || L.wrap(t, r);
                      })),
                    a
                      ? (e &&
                          ((o = t.nodes()),
                          (i = P.and(i, function (t) {
                            return R.contains(o, t);
                          }))),
                        n.map(function (t) {
                          var t = L.withClosestSiblings(t, i),
                            n = R.head(t),
                            e = R.tail(t);
                          return (
                            w().each(e, function (t, e) {
                              L.appendChildNodes(n, e.childNodes), L.remove(e);
                            }),
                            R.head(t)
                          );
                        }))
                      : n);
              },
            },
            {
              key: "current",
              value: function (t) {
                var e = w()(L.isElement(t.sc) ? t.sc : t.sc.parentNode),
                  e = this.fromNode(e);
                try {
                  e = w().extend(e, {
                    "font-bold": document.queryCommandState("bold")
                      ? "bold"
                      : "normal",
                    "font-italic": document.queryCommandState("italic")
                      ? "italic"
                      : "normal",
                    "font-underline": document.queryCommandState("underline")
                      ? "underline"
                      : "normal",
                    "font-subscript": document.queryCommandState("subscript")
                      ? "subscript"
                      : "normal",
                    "font-superscript": document.queryCommandState(
                      "superscript"
                    )
                      ? "superscript"
                      : "normal",
                    "font-strikethrough": document.queryCommandState(
                      "strikethrough"
                    )
                      ? "strikethrough"
                      : "normal",
                    "font-family":
                      document.queryCommandValue("fontname") ||
                      e["font-family"],
                  });
                } catch (t) {}
                t.isOnList()
                  ? ((n =
                      -1 <
                      ["circle", "disc", "disc-leading-zero", "square"].indexOf(
                        e["list-style-type"]
                      )),
                    (e["list-style"] = n ? "unordered" : "ordered"))
                  : (e["list-style"] = "none");
                var n = L.ancestor(t.sc, L.isPara);
                return (
                  n && n.style["line-height"]
                    ? (e["line-height"] = n.style.lineHeight)
                    : ((n =
                        parseInt(e["line-height"], 10) /
                        parseInt(e["font-size"], 10)),
                      (e["line-height"] = n.toFixed(1))),
                  (e.anchor = t.isOnAnchor() && L.ancestor(t.sc, L.isAnchor)),
                  (e.ancestors = L.listAncestor(t.sc, L.isEditable)),
                  (e.range = t),
                  e
                );
              },
            },
          ]) && St(e.prototype, n),
          o && St(e, o),
          t
        );
      })();
      function Et(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var It = (function () {
        function t() {
          if (!(this instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: "insertOrderedList",
              value: function (t) {
                this.toggleList("OL", t);
              },
            },
            {
              key: "insertUnorderedList",
              value: function (t) {
                this.toggleList("UL", t);
              },
            },
            {
              key: "indent",
              value: function (t) {
                var i = this,
                  t = A.create(t).wrapBodyInlineWithPara(),
                  e = t.nodes(L.isPara, { includeAncestor: !0 }),
                  e = R.clusterBy(e, P.peq2("parentNode"));
                w().each(e, function (t, e) {
                  var n,
                    o = R.head(e);
                  L.isLi(o)
                    ? (n = i.findList(o.previousSibling))
                      ? e.map(function (t) {
                          return n.appendChild(t);
                        })
                      : (i.wrapList(e, o.parentNode.nodeName),
                        e
                          .map(function (t) {
                            return t.parentNode;
                          })
                          .map(function (t) {
                            return i.appendToPrevious(t);
                          }))
                    : w().each(e, function (t, e) {
                        w()(e).css("marginLeft", function (t, e) {
                          return (parseInt(e, 10) || 0) + 25;
                        });
                      });
                }),
                  t.select();
              },
            },
            {
              key: "outdent",
              value: function (t) {
                var o = this,
                  t = A.create(t).wrapBodyInlineWithPara(),
                  e = t.nodes(L.isPara, { includeAncestor: !0 }),
                  e = R.clusterBy(e, P.peq2("parentNode"));
                w().each(e, function (t, e) {
                  var n = R.head(e);
                  L.isLi(n)
                    ? o.releaseList([e])
                    : w().each(e, function (t, e) {
                        w()(e).css("marginLeft", function (t, e) {
                          return 25 < (e = parseInt(e, 10) || 0) ? e - 25 : "";
                        });
                      });
                }),
                  t.select();
              },
            },
            {
              key: "toggleList",
              value: function (n, t) {
                var o,
                  i = this,
                  t = A.create(t).wrapBodyInlineWithPara(),
                  e = t.nodes(L.isPara, { includeAncestor: !0 }),
                  r = t.paraBookmark(e),
                  a = R.clusterBy(e, P.peq2("parentNode"));
                R.find(e, L.isPurePara)
                  ? ((o = []),
                    w().each(a, function (t, e) {
                      o = o.concat(i.wrapList(e, n));
                    }),
                    (e = o))
                  : (t = t
                      .nodes(L.isList, { includeAncestor: !0 })
                      .filter(function (t) {
                        return !w().nodeName(t, n);
                      })).length
                  ? w().each(t, function (t, e) {
                      L.replace(e, n);
                    })
                  : (e = this.releaseList(a, !0)),
                  A.createFromParaBookmark(r, e).select();
              },
            },
            {
              key: "wrapList",
              value: function (t, e) {
                var n = R.head(t),
                  o = R.last(t),
                  n = L.isList(n.previousSibling) && n.previousSibling,
                  i = L.isList(o.nextSibling) && o.nextSibling,
                  n = n || L.insertAfter(L.create(e || "UL"), o);
                return (
                  (t = t.map(function (t) {
                    return L.isPurePara(t) ? L.replace(t, "LI") : t;
                  })),
                  L.appendChildNodes(n, t),
                  i &&
                    (L.appendChildNodes(n, R.from(i.childNodes)), L.remove(i)),
                  t
                );
              },
            },
            {
              key: "releaseList",
              value: function (t, a) {
                var s = this,
                  l = [];
                return (
                  w().each(t, function (t, e) {
                    var n = R.head(e),
                      o = R.last(e),
                      i = a ? L.lastAncestor(n, L.isList) : n.parentNode,
                      r = i.parentNode;
                    "LI" === i.parentNode.nodeName
                      ? (e.map(function (t) {
                          var e = s.findNextSiblings(t);
                          r.nextSibling
                            ? r.parentNode.insertBefore(t, r.nextSibling)
                            : r.parentNode.appendChild(t),
                            e.length &&
                              (s.wrapList(e, i.nodeName),
                              t.appendChild(e[0].parentNode));
                        }),
                        0 === i.children.length && r.removeChild(i),
                        0 === r.childNodes.length &&
                          r.parentNode.removeChild(r))
                      : ((o =
                          1 < i.childNodes.length
                            ? L.splitTree(
                                i,
                                {
                                  node: o.parentNode,
                                  offset: L.position(o) + 1,
                                },
                                { isSkipPaddingBlankHTML: !0 }
                              )
                            : null),
                        (n = L.splitTree(
                          i,
                          { node: n.parentNode, offset: L.position(n) },
                          { isSkipPaddingBlankHTML: !0 }
                        )),
                        (e = a
                          ? L.listDescendant(n, L.isLi)
                          : R.from(n.childNodes).filter(L.isLi)),
                        (!a && L.isList(i.parentNode)) ||
                          (e = e.map(function (t) {
                            return L.replace(t, "P");
                          })),
                        w().each(R.from(e).reverse(), function (t, e) {
                          L.insertAfter(e, i);
                        }),
                        (n = R.compact([i, n, o])),
                        w().each(n, function (t, e) {
                          e = [e].concat(L.listDescendant(e, L.isList));
                          w().each(e.reverse(), function (t, e) {
                            L.nodeLength(e) || L.remove(e, !0);
                          });
                        })),
                      (l = l.concat(e));
                  }),
                  l
                );
              },
            },
            {
              key: "appendToPrevious",
              value: function (t) {
                return t.previousSibling
                  ? L.appendChildNodes(t.previousSibling, [t])
                  : this.wrapList([t], "LI");
              },
            },
            {
              key: "findList",
              value: function (t) {
                return t
                  ? R.find(t.children, function (t) {
                      return -1 < ["OL", "UL"].indexOf(t.nodeName);
                    })
                  : null;
              },
            },
            {
              key: "findNextSiblings",
              value: function (t) {
                for (var e = []; t.nextSibling; )
                  e.push(t.nextSibling), (t = t.nextSibling);
                return e;
              },
            },
          ]) && Et(e.prototype, n),
          o && Et(e, o),
          t
        );
      })();
      function $t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var Nt = (function () {
        function e(t) {
          if (!(this instanceof e))
            throw new TypeError("Cannot call a class as a function");
          (this.bullet = new It()), (this.options = t.options);
        }
        var t, n, o;
        return (
          (t = e),
          (n = [
            {
              key: "insertTab",
              value: function (t, e) {
                var n = L.createText(new Array(e + 1).join(L.NBSP_CHAR));
                (t = t.deleteContents()).insertNode(n, !0),
                  (t = A.create(n, e)).select();
              },
            },
            {
              key: "insertParagraph",
              value: function (t, e) {
                e = (e = (e =
                  e || A.create(t)).deleteContents()).wrapBodyInlineWithPara();
                var n = L.ancestor(e.sc, L.isPara);
                if (n) {
                  if (L.isLi(n) && (L.isEmpty(n) || L.deepestChildIsEmpty(n)))
                    return void this.bullet.toggleList(n.parentNode.nodeName);
                  var o,
                    i,
                    r = null;
                  1 === this.options.blockquoteBreakingLevel
                    ? (r = L.ancestor(n, L.isBlockquote))
                    : 2 === this.options.blockquoteBreakingLevel &&
                      (r = L.lastAncestor(n, L.isBlockquote)),
                    r
                      ? ((o = w()(L.emptyPara)[0]),
                        L.isRightEdgePoint(e.getStartPoint()) &&
                          L.isBR(e.sc.nextSibling) &&
                          w()(e.sc.nextSibling).remove(),
                        (i = L.splitTree(r, e.getStartPoint(), {
                          isDiscardEmptySplits: !0,
                        }))
                          ? i.parentNode.insertBefore(o, i)
                          : L.insertAfter(o, r))
                      : ((o = L.splitTree(n, e.getStartPoint())),
                        (i = (i = L.listDescendant(n, L.isEmptyAnchor)).concat(
                          L.listDescendant(o, L.isEmptyAnchor)
                        )),
                        w().each(i, function (t, e) {
                          L.remove(e);
                        }),
                        (L.isHeading(o) ||
                          L.isPre(o) ||
                          L.isCustomStyleTag(o)) &&
                          L.isEmpty(o) &&
                          (o = L.replace(o, "p")));
                } else {
                  r = e.sc.childNodes[e.so];
                  (o = w()(L.emptyPara)[0]),
                    r ? e.sc.insertBefore(o, r) : e.sc.appendChild(o);
                }
                A.create(o, 0).normalize().select().scrollIntoView(t);
              },
            },
          ]) && $t(t.prototype, n),
          o && $t(t, o),
          e
        );
      })();
      function Pt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function T(t, c, u, v) {
        var g = { colPos: 0, rowPos: 0 },
          d = [],
          h = [];
        function b(t, e, n, o, i, r, a) {
          n = {
            baseRow: n,
            baseCell: o,
            isRowSpan: i,
            isColSpan: r,
            isVirtual: a,
          };
          d[t] || (d[t] = []), (d[t][e] = n);
        }
        function y(t, e) {
          if (!d[t]) return e;
          if (!d[t][e]) return e;
          for (var n = e; d[t][n]; ) if (!d[t][++n]) return n;
        }
        function k(t, e, n, o) {
          t === g.rowPos &&
            g.colPos >= n.cellIndex &&
            n.cellIndex <= e &&
            !o &&
            g.colPos++;
        }
        function e() {
          for (var t = v.rows, e = 0; e < t.length; e++)
            for (var n = t[e].cells, o = 0; o < n.length; o++) {
              m = p = f = h = d = u = c = l = s = a = r = i = void 0;
              var i = t[e],
                r = n[o],
                a = y(i.rowIndex, r.cellIndex),
                s = 1 < r.colSpan,
                l = 1 < r.rowSpan,
                c = i.rowIndex === g.rowPos && r.cellIndex === g.colPos,
                u =
                  (b(i.rowIndex, a, i, r, l, s, !1),
                  r.attributes.rowSpan
                    ? parseInt(r.attributes.rowSpan.value, 10)
                    : 0);
              if (1 < u)
                for (var d = 1; d < u; d++) {
                  var h = i.rowIndex + d;
                  k(h, a, r, c), b(h, a, i, r, !0, s, !0);
                }
              var f = r.attributes.colSpan
                ? parseInt(r.attributes.colSpan.value, 10)
                : 0;
              if (1 < f)
                for (var p = 1; p < f; p++) {
                  var m = y(i.rowIndex, a + p);
                  k(i.rowIndex, m, r, c), b(i.rowIndex, m, i, r, l, !0, !0);
                }
            }
        }
        (this.getActionList = function () {
          for (
            var t = c === T.where.Row ? g.rowPos : -1,
              e = c === T.where.Column ? g.colPos : -1,
              n = 0,
              o = !0;
            o;

          ) {
            var i = 0 <= t ? t : n,
              r = 0 <= e ? e : n,
              a = d[i];
            if (!a) return (o = !1), h;
            var s = a[r];
            if (!s) return (o = !1), h;
            var l = T.resultAction.Ignore;
            switch (u) {
              case T.requestAction.Add:
                l = (function (t) {
                  switch (c) {
                    case T.where.Column:
                      if (t.isColSpan) return T.resultAction.SumSpanCount;
                      if (t.isRowSpan && t.isVirtual)
                        return T.resultAction.Ignore;
                      break;
                    case T.where.Row:
                      if (t.isRowSpan) return T.resultAction.SumSpanCount;
                      if (t.isColSpan && t.isVirtual)
                        return T.resultAction.Ignore;
                  }
                  return T.resultAction.AddCell;
                })(s);
                break;
              case T.requestAction.Delete:
                l = (function (t) {
                  switch (c) {
                    case T.where.Column:
                      if (t.isColSpan) return T.resultAction.SubtractSpanCount;
                      break;
                    case T.where.Row:
                      if (!t.isVirtual && t.isRowSpan)
                        return T.resultAction.AddCell;
                      if (t.isRowSpan) return T.resultAction.SubtractSpanCount;
                  }
                  return T.resultAction.RemoveCell;
                })(s);
            }
            h.push(
              ((a = l),
              {
                baseCell: s.baseCell,
                action: a,
                virtualTable: { rowIndex: i, cellIndex: r },
              })
            ),
              n++;
          }
          return h;
        }),
          t &&
            t.tagName &&
            ("td" === t.tagName.toLowerCase() ||
              "th" === t.tagName.toLowerCase()) &&
            ((g.colPos = t.cellIndex), t.parentElement) &&
            t.parentElement.tagName &&
            "tr" === t.parentElement.tagName.toLowerCase() &&
            (g.rowPos = t.parentElement.rowIndex),
          e();
      }
      (T.where = { Row: 0, Column: 1 }),
        (T.requestAction = { Add: 0, Delete: 1 }),
        (T.resultAction = {
          Ignore: 0,
          SubtractSpanCount: 1,
          RemoveCell: 2,
          AddCell: 3,
          SumSpanCount: 4,
        });
      var Rt = (function () {
        function t() {
          if (!(this instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: "tab",
              value: function (t, e) {
                var t = L.ancestor(t.commonAncestor(), L.isCell),
                  n = L.ancestor(t, L.isTable),
                  n = L.listDescendant(n, L.isCell),
                  e = R[e ? "prev" : "next"](n, t);
                e && A.create(e, 0).select();
              },
            },
            {
              key: "addRow",
              value: function (t, e) {
                for (
                  var t = L.ancestor(t.commonAncestor(), L.isCell),
                    n = w()(t).closest("tr"),
                    o = this.recoverAttributes(n),
                    i = w()("<tr" + o + "></tr>"),
                    r = new T(
                      t,
                      T.where.Row,
                      T.requestAction.Add,
                      w()(n).closest("table")[0]
                    ).getActionList(),
                    a = 0;
                  a < r.length;
                  a++
                ) {
                  var s = r[a],
                    l = this.recoverAttributes(s.baseCell);
                  switch (s.action) {
                    case T.resultAction.AddCell:
                      i.append("<td" + l + ">" + L.blank + "</td>");
                      break;
                    case T.resultAction.SumSpanCount:
                      if ("top" === e)
                        if (
                          (s.baseCell.parent
                            ? s.baseCell.closest("tr").rowIndex
                            : 0) <= n[0].rowIndex
                        ) {
                          var c = w()("<div></div>")
                            .append(
                              w()(
                                "<td" + l + ">" + L.blank + "</td>"
                              ).removeAttr("rowspan")
                            )
                            .html();
                          i.append(c);
                          break;
                        }
                      c = parseInt(s.baseCell.rowSpan, 10);
                      c++, s.baseCell.setAttribute("rowSpan", c);
                  }
                }
                "top" === e
                  ? n.before(i)
                  : 1 < t.rowSpan
                  ? ((o = n[0].rowIndex + (t.rowSpan - 2)),
                    w()(w()(n).parent().find("tr")[o]).after(w()(i)))
                  : n.after(i);
              },
            },
            {
              key: "addCol",
              value: function (t, e) {
                var t = L.ancestor(t.commonAncestor(), L.isCell),
                  n = w()(t).closest("tr");
                w()(n).siblings().push(n);
                for (
                  var o = new T(
                      t,
                      T.where.Column,
                      T.requestAction.Add,
                      w()(n).closest("table")[0]
                    ).getActionList(),
                    i = 0;
                  i < o.length;
                  i++
                ) {
                  var r,
                    a = o[i],
                    s = this.recoverAttributes(a.baseCell);
                  switch (a.action) {
                    case T.resultAction.AddCell:
                      "right" === e
                        ? w()(a.baseCell).after(
                            "<td" + s + ">" + L.blank + "</td>"
                          )
                        : w()(a.baseCell).before(
                            "<td" + s + ">" + L.blank + "</td>"
                          );
                      break;
                    case T.resultAction.SumSpanCount:
                      "right" === e
                        ? ((r = parseInt(a.baseCell.colSpan, 10)),
                          r++,
                          a.baseCell.setAttribute("colSpan", r))
                        : w()(a.baseCell).before(
                            "<td" + s + ">" + L.blank + "</td>"
                          );
                  }
                }
              },
            },
            {
              key: "recoverAttributes",
              value: function (t) {
                var e = "";
                if (t)
                  for (var n = t.attributes || [], o = 0; o < n.length; o++)
                    "id" !== n[o].name.toLowerCase() &&
                      n[o].specified &&
                      (e += " " + n[o].name + "='" + n[o].value + "'");
                return e;
              },
            },
            {
              key: "deleteRow",
              value: function (t) {
                for (
                  var t = L.ancestor(t.commonAncestor(), L.isCell),
                    e = w()(t).closest("tr"),
                    n = e.children("td, th").index(w()(t)),
                    o = e[0].rowIndex,
                    i = new T(
                      t,
                      T.where.Row,
                      T.requestAction.Delete,
                      w()(e).closest("table")[0]
                    ).getActionList(),
                    r = 0;
                  r < i.length;
                  r++
                )
                  if (i[r]) {
                    var a = i[r].baseCell,
                      s = i[r].virtualTable,
                      l = a.rowSpan && 1 < a.rowSpan,
                      c = l ? parseInt(a.rowSpan, 10) : 0;
                    switch (i[r].action) {
                      case T.resultAction.Ignore:
                        continue;
                      case T.resultAction.AddCell:
                        var u = e.next("tr")[0];
                        if (!u) continue;
                        var d = e[0].cells[n];
                        l &&
                          (2 < c
                            ? (c--,
                              u.insertBefore(d, u.cells[n]),
                              u.cells[n].setAttribute("rowSpan", c),
                              (u.cells[n].innerHTML = ""))
                            : 2 === c &&
                              (u.insertBefore(d, u.cells[n]),
                              u.cells[n].removeAttribute("rowSpan"),
                              (u.cells[n].innerHTML = "")));
                        continue;
                      case T.resultAction.SubtractSpanCount:
                        l &&
                          (2 < c
                            ? (c--,
                              a.setAttribute("rowSpan", c),
                              s.rowIndex !== o &&
                                a.cellIndex === n &&
                                (a.innerHTML = ""))
                            : 2 === c &&
                              (a.removeAttribute("rowSpan"),
                              s.rowIndex !== o) &&
                              a.cellIndex === n &&
                              (a.innerHTML = ""));
                        continue;
                      case T.resultAction.RemoveCell:
                        continue;
                    }
                  }
                e.remove();
              },
            },
            {
              key: "deleteCol",
              value: function (t) {
                for (
                  var t = L.ancestor(t.commonAncestor(), L.isCell),
                    e = w()(t).closest("tr"),
                    n = e.children("td, th").index(w()(t)),
                    o = new T(
                      t,
                      T.where.Column,
                      T.requestAction.Delete,
                      w()(e).closest("table")[0]
                    ).getActionList(),
                    i = 0;
                  i < o.length;
                  i++
                )
                  if (o[i])
                    switch (o[i].action) {
                      case T.resultAction.Ignore:
                        continue;
                      case T.resultAction.SubtractSpanCount:
                        var r,
                          a = o[i].baseCell;
                        a.colSpan &&
                          1 < a.colSpan &&
                          (2 < (r = a.colSpan ? parseInt(a.colSpan, 10) : 0)
                            ? (r--,
                              a.setAttribute("colSpan", r),
                              a.cellIndex === n && (a.innerHTML = ""))
                            : 2 === r &&
                              (a.removeAttribute("colSpan"),
                              a.cellIndex === n) &&
                              (a.innerHTML = ""));
                        continue;
                      case T.resultAction.RemoveCell:
                        L.remove(o[i].baseCell, !0);
                        continue;
                    }
              },
            },
            {
              key: "createTable",
              value: function (t, e, n) {
                for (var o = [], i = 0; i < t; i++)
                  o.push("<td>" + L.blank + "</td>");
                for (var r = o.join(""), a = [], s = 0; s < e; s++)
                  a.push("<tr>" + r + "</tr>");
                var l = a.join(""),
                  l = w()("<table>" + l + "</table>");
                return (
                  n && n.tableClassName && l.addClass(n.tableClassName), l[0]
                );
              },
            },
            {
              key: "deleteTable",
              value: function (t) {
                t = L.ancestor(t.commonAncestor(), L.isCell);
                w()(t).closest("table").remove();
              },
            },
          ]) && Pt(e.prototype, n),
          o && Pt(e, o),
          t
        );
      })();
      function Lt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var E = (function () {
        function r(t) {
          var a = this;
          if (!(this instanceof r))
            throw new TypeError("Cannot call a class as a function");
          (this.context = t),
            (this.$note = t.layoutInfo.note),
            (this.$editor = t.layoutInfo.editor),
            (this.$editable = t.layoutInfo.editable),
            (this.options = t.options),
            (this.lang = this.options.langInfo),
            (this.editable = this.$editable[0]),
            (this.lastRange = null),
            (this.snapshot = null),
            (this.style = new Tt()),
            (this.table = new Rt()),
            (this.typing = new Nt(t)),
            (this.bullet = new It()),
            (this.history = new xt(t)),
            this.context.memo("help.escape", this.lang.help.escape),
            this.context.memo("help.undo", this.lang.help.undo),
            this.context.memo("help.redo", this.lang.help.redo),
            this.context.memo("help.tab", this.lang.help.tab),
            this.context.memo("help.untab", this.lang.help.untab),
            this.context.memo(
              "help.insertParagraph",
              this.lang.help.insertParagraph
            ),
            this.context.memo(
              "help.insertOrderedList",
              this.lang.help.insertOrderedList
            ),
            this.context.memo(
              "help.insertUnorderedList",
              this.lang.help.insertUnorderedList
            ),
            this.context.memo("help.indent", this.lang.help.indent),
            this.context.memo("help.outdent", this.lang.help.outdent),
            this.context.memo("help.formatPara", this.lang.help.formatPara),
            this.context.memo(
              "help.insertHorizontalRule",
              this.lang.help.insertHorizontalRule
            ),
            this.context.memo("help.fontName", this.lang.help.fontName);
          for (
            var e = [
                "bold",
                "italic",
                "underline",
                "strikethrough",
                "superscript",
                "subscript",
                "justifyLeft",
                "justifyCenter",
                "justifyRight",
                "justifyFull",
                "formatBlock",
                "removeFormat",
                "backColor",
              ],
              n = 0,
              o = e.length;
            n < o;
            n++
          )
            (this[e[n]] = (function (e) {
              return function (t) {
                a.beforeCommand(),
                  document.execCommand(e, !1, t),
                  a.afterCommand(!0);
              };
            })(e[n])),
              this.context.memo("help." + e[n], this.lang.help[e[n]]);
          (this.fontName = this.wrapCommand(function (t) {
            return a.fontStyling("font-family", N.validFontName(t));
          })),
            (this.fontSize = this.wrapCommand(function (t) {
              var e = a.currentStyle()["font-size-unit"];
              return a.fontStyling("font-size", t + e);
            })),
            (this.fontSizeUnit = this.wrapCommand(function (t) {
              var e = a.currentStyle()["font-size"];
              return a.fontStyling("font-size", e + t);
            }));
          for (var i = 1; i <= 6; i++)
            (this["formatH" + i] = (function (t) {
              return function () {
                a.formatBlock("H" + t);
              };
            })(i)),
              this.context.memo(
                "help.formatH" + i,
                this.lang.help["formatH" + i]
              );
          (this.insertParagraph = this.wrapCommand(function () {
            a.typing.insertParagraph(a.editable);
          })),
            (this.insertOrderedList = this.wrapCommand(function () {
              a.bullet.insertOrderedList(a.editable);
            })),
            (this.insertUnorderedList = this.wrapCommand(function () {
              a.bullet.insertUnorderedList(a.editable);
            })),
            (this.indent = this.wrapCommand(function () {
              a.bullet.indent(a.editable);
            })),
            (this.outdent = this.wrapCommand(function () {
              a.bullet.outdent(a.editable);
            })),
            (this.insertNode = this.wrapCommand(function (t) {
              a.isLimited(w()(t).text().length) ||
                (a.getLastRange().insertNode(t),
                a.setLastRange(A.createFromNodeAfter(t).select()));
            })),
            (this.insertText = this.wrapCommand(function (t) {
              a.isLimited(t.length) ||
                ((t = a.getLastRange().insertNode(L.createText(t))),
                a.setLastRange(A.create(t, L.nodeLength(t)).select()));
            })),
            (this.pasteHTML = this.wrapCommand(function (t) {
              a.isLimited(t.length) ||
                ((t = a.context.invoke("codeview.purify", t)),
                (t = a.getLastRange().pasteHTML(t)),
                a.setLastRange(A.createFromNodeAfter(R.last(t)).select()));
            })),
            (this.formatBlock = this.wrapCommand(function (t, e) {
              var n = a.options.callbacks.onApplyCustomStyle;
              n
                ? n.call(a, e, a.context, a.onFormatBlock)
                : a.onFormatBlock(t, e);
            })),
            (this.insertHorizontalRule = this.wrapCommand(function () {
              var t = a.getLastRange().insertNode(L.create("HR"));
              t.nextSibling &&
                a.setLastRange(A.create(t.nextSibling, 0).normalize().select());
            })),
            (this.lineHeight = this.wrapCommand(function (t) {
              a.style.stylePara(a.getLastRange(), { lineHeight: t });
            })),
            (this.createLink = this.wrapCommand(function (t) {
              var n = t.url,
                e = t.text,
                o = t.isNewWindow,
                i = t.checkProtocol,
                t = t.range || a.getLastRange(),
                r = e.length - t.toString().length;
              (0 < r && a.isLimited(r)) ||
                ((r = t.toString() !== e),
                "string" == typeof n && (n = n.trim()),
                a.options.onCreateLink
                  ? (n = a.options.onCreateLink(n))
                  : i &&
                    (n = /^([A-Za-z][A-Za-z0-9+-.]*\:|#|\/)/.test(n)
                      ? n
                      : a.options.defaultProtocol + n),
                (i = []),
                r
                  ? ((r = (t = t.deleteContents()).insertNode(
                      w()("<A>" + e + "</A>")[0]
                    )),
                    i.push(r))
                  : (i = a.style.styleNodes(t, {
                      nodeName: "A",
                      expandClosestSibling: !0,
                      onlyPartialContains: !0,
                    })),
                w().each(i, function (t, e) {
                  w()(e).attr("href", n),
                    o
                      ? w()(e).attr("target", "_blank")
                      : w()(e).removeAttr("target");
                }),
                a.setLastRange(a.createRangeFromList(i).select()));
            })),
            (this.color = this.wrapCommand(function (t) {
              var e = t.foreColor,
                t = t.backColor;
              e && document.execCommand("foreColor", !1, e),
                t && document.execCommand("backColor", !1, t);
            })),
            (this.foreColor = this.wrapCommand(function (t) {
              document.execCommand("foreColor", !1, t);
            })),
            (this.insertTable = this.wrapCommand(function (t) {
              t = t.split("x");
              a.getLastRange()
                .deleteContents()
                .insertNode(a.table.createTable(t[0], t[1], a.options));
            })),
            (this.removeMedia = this.wrapCommand(function () {
              var t = w()(a.restoreTarget()).parent();
              t.closest("figure").length
                ? t.closest("figure").remove()
                : (t = w()(a.restoreTarget()).detach()),
                a.context.triggerEvent("media.delete", t, a.$editable);
            })),
            (this.floatMe = this.wrapCommand(function (t) {
              var e = w()(a.restoreTarget());
              e.toggleClass("note-float-left", "left" === t),
                e.toggleClass("note-float-right", "right" === t),
                e.css("float", "none" === t ? "" : t);
            })),
            (this.resize = this.wrapCommand(function (t) {
              var e = w()(a.restoreTarget());
              0 === (t = parseFloat(t))
                ? e.css("width", "")
                : e.css({ width: 100 * t + "%", height: "" });
            }));
        }
        var t, e, n;
        return (
          (t = r),
          (e = [
            {
              key: "initialize",
              value: function () {
                var e = this;
                this.$editable
                  .on("keydown", function (t) {
                    if (
                      (t.keyCode === F.code.ENTER &&
                        e.context.triggerEvent("enter", t),
                      e.context.triggerEvent("keydown", t),
                      (e.snapshot = e.history.makeSnapshot()),
                      (e.hasKeyShortCut = !1),
                      t.isDefaultPrevented() ||
                        (e.options.shortcuts
                          ? (e.hasKeyShortCut = e.handleKeyMap(t))
                          : e.preventDefaultEditableShortCuts(t)),
                      e.isLimited(1, t))
                    ) {
                      t = e.getLastRange();
                      if (t.eo - t.so == 0) return !1;
                    }
                    e.setLastRange(),
                      e.options.recordEveryKeystroke &&
                        !1 === e.hasKeyShortCut &&
                        e.history.recordUndo();
                  })
                  .on("keyup", function (t) {
                    e.setLastRange(), e.context.triggerEvent("keyup", t);
                  })
                  .on("focus", function (t) {
                    e.setLastRange(), e.context.triggerEvent("focus", t);
                  })
                  .on("blur", function (t) {
                    e.context.triggerEvent("blur", t);
                  })
                  .on("mousedown", function (t) {
                    e.context.triggerEvent("mousedown", t);
                  })
                  .on("mouseup", function (t) {
                    e.setLastRange(),
                      e.history.recordUndo(),
                      e.context.triggerEvent("mouseup", t);
                  })
                  .on("scroll", function (t) {
                    e.context.triggerEvent("scroll", t);
                  })
                  .on("paste", function (t) {
                    e.setLastRange(), e.context.triggerEvent("paste", t);
                  })
                  .on("input", function () {
                    e.isLimited(0) &&
                      e.snapshot &&
                      e.history.applySnapshot(e.snapshot);
                  }),
                  this.$editable.attr("spellcheck", this.options.spellCheck),
                  this.$editable.attr("autocorrect", this.options.spellCheck),
                  this.options.disableGrammar &&
                    this.$editable.attr("data-gramm", !1),
                  this.$editable.html(L.html(this.$note) || L.emptyPara),
                  this.$editable.on(
                    N.inputEventName,
                    P.debounce(function () {
                      e.context.triggerEvent(
                        "change",
                        e.$editable.html(),
                        e.$editable
                      );
                    }, 10)
                  ),
                  this.$editable
                    .on("focusin", function (t) {
                      e.context.triggerEvent("focusin", t);
                    })
                    .on("focusout", function (t) {
                      e.context.triggerEvent("focusout", t);
                    }),
                  this.options.airMode
                    ? this.options.overrideContextMenu &&
                      this.$editor.on("contextmenu", function (t) {
                        return e.context.triggerEvent("contextmenu", t), !1;
                      })
                    : (this.options.width &&
                        this.$editor.outerWidth(this.options.width),
                      this.options.height &&
                        this.$editable.outerHeight(this.options.height),
                      this.options.maxHeight &&
                        this.$editable.css(
                          "max-height",
                          this.options.maxHeight
                        ),
                      this.options.minHeight &&
                        this.$editable.css(
                          "min-height",
                          this.options.minHeight
                        )),
                  this.history.recordUndo(),
                  this.setLastRange();
              },
            },
            {
              key: "destroy",
              value: function () {
                this.$editable.off();
              },
            },
            {
              key: "handleKeyMap",
              value: function (t) {
                var e = this.options.keyMap[N.isMac ? "mac" : "pc"],
                  n = [],
                  o =
                    (t.metaKey && n.push("CMD"),
                    t.ctrlKey && !t.altKey && n.push("CTRL"),
                    t.shiftKey && n.push("SHIFT"),
                    F.nameFromCode[t.keyCode]),
                  e = (o && n.push(o), e[n.join("+")]);
                if ("TAB" !== o || this.options.tabDisable)
                  if (e) {
                    if (!1 !== this.context.invoke(e))
                      return t.preventDefault(), !0;
                  } else F.isEdit(t.keyCode) && this.afterCommand();
                else this.afterCommand();
                return !1;
              },
            },
            {
              key: "preventDefaultEditableShortCuts",
              value: function (t) {
                (t.ctrlKey || t.metaKey) &&
                  R.contains([66, 73, 85], t.keyCode) &&
                  t.preventDefault();
              },
            },
            {
              key: "isLimited",
              value: function (t, e) {
                return (
                  (t = t || 0),
                  (void 0 === e ||
                    !(
                      F.isMove(e.keyCode) ||
                      F.isNavigation(e.keyCode) ||
                      e.ctrlKey ||
                      e.metaKey ||
                      R.contains([F.code.BACKSPACE, F.code.DELETE], e.keyCode)
                    )) &&
                    0 < this.options.maxTextLength &&
                    this.$editable.text().length + t >
                      this.options.maxTextLength
                );
              },
            },
            {
              key: "createRange",
              value: function () {
                return this.focus(), this.setLastRange(), this.getLastRange();
              },
            },
            {
              key: "createRangeFromList",
              value: function (t) {
                var e = A.createFromNodeBefore(R.head(t)).getStartPoint(),
                  t = A.createFromNodeAfter(R.last(t)).getEndPoint();
                return A.create(e.node, e.offset, t.node, t.offset);
              },
            },
            {
              key: "setLastRange",
              value: function (t) {
                t
                  ? (this.lastRange = t)
                  : ((this.lastRange = A.create(this.editable)),
                    0 ===
                      w()(this.lastRange.sc).closest(".note-editable").length &&
                      (this.lastRange = A.createFromBodyElement(
                        this.editable
                      )));
              },
            },
            {
              key: "getLastRange",
              value: function () {
                return this.lastRange || this.setLastRange(), this.lastRange;
              },
            },
            {
              key: "saveRange",
              value: function (t) {
                t && this.getLastRange().collapse().select();
              },
            },
            {
              key: "restoreRange",
              value: function () {
                this.lastRange && (this.lastRange.select(), this.focus());
              },
            },
            {
              key: "saveTarget",
              value: function (t) {
                this.$editable.data("target", t);
              },
            },
            {
              key: "clearTarget",
              value: function () {
                this.$editable.removeData("target");
              },
            },
            {
              key: "restoreTarget",
              value: function () {
                return this.$editable.data("target");
              },
            },
            {
              key: "currentStyle",
              value: function () {
                var t = A.create();
                return (t = t && t.normalize())
                  ? this.style.current(t)
                  : this.style.fromNode(this.$editable);
              },
            },
            {
              key: "styleFromNode",
              value: function (t) {
                return this.style.fromNode(t);
              },
            },
            {
              key: "undo",
              value: function () {
                this.context.triggerEvent(
                  "before.command",
                  this.$editable.html()
                ),
                  this.history.undo(),
                  this.context.triggerEvent(
                    "change",
                    this.$editable.html(),
                    this.$editable
                  );
              },
            },
            {
              key: "commit",
              value: function () {
                this.context.triggerEvent(
                  "before.command",
                  this.$editable.html()
                ),
                  this.history.commit(),
                  this.context.triggerEvent(
                    "change",
                    this.$editable.html(),
                    this.$editable
                  );
              },
            },
            {
              key: "redo",
              value: function () {
                this.context.triggerEvent(
                  "before.command",
                  this.$editable.html()
                ),
                  this.history.redo(),
                  this.context.triggerEvent(
                    "change",
                    this.$editable.html(),
                    this.$editable
                  );
              },
            },
            {
              key: "beforeCommand",
              value: function () {
                this.context.triggerEvent(
                  "before.command",
                  this.$editable.html()
                ),
                  document.execCommand(
                    "styleWithCSS",
                    !1,
                    this.options.styleWithCSS
                  ),
                  this.focus();
              },
            },
            {
              key: "afterCommand",
              value: function (t) {
                this.normalizeContent(),
                  this.history.recordUndo(),
                  t ||
                    this.context.triggerEvent(
                      "change",
                      this.$editable.html(),
                      this.$editable
                    );
              },
            },
            {
              key: "tab",
              value: function () {
                var t = this.getLastRange();
                if (t.isCollapsed() && t.isOnCell()) this.table.tab(t);
                else {
                  if (0 === this.options.tabSize) return !1;
                  this.isLimited(this.options.tabSize) ||
                    (this.beforeCommand(),
                    this.typing.insertTab(t, this.options.tabSize),
                    this.afterCommand());
                }
              },
            },
            {
              key: "untab",
              value: function () {
                var t = this.getLastRange();
                if (t.isCollapsed() && t.isOnCell()) this.table.tab(t, !0);
                else if (0 === this.options.tabSize) return !1;
              },
            },
            {
              key: "wrapCommand",
              value: function (t) {
                return function () {
                  this.beforeCommand(),
                    t.apply(this, arguments),
                    this.afterCommand();
                };
              },
            },
            {
              key: "insertImage",
              value: function (t, e) {
                var n,
                  o = this;
                return (
                  (n = t),
                  w()
                    .Deferred(function (t) {
                      var e = w()("<img>");
                      e.one("load", function () {
                        e.off("error abort"), t.resolve(e);
                      })
                        .one("error abort", function () {
                          e.off("load").detach(), t.reject(e);
                        })
                        .css({ display: "none" })
                        .appendTo(document.body)
                        .attr("src", n);
                    })
                    .promise()
                    .then(function (t) {
                      o.beforeCommand(),
                        "function" == typeof e
                          ? e(t)
                          : ("string" == typeof e && t.attr("data-filename", e),
                            t.css(
                              "width",
                              Math.min(o.$editable.width(), t.width())
                            )),
                        t.show(),
                        o.getLastRange().insertNode(t[0]),
                        o.setLastRange(A.createFromNodeAfter(t[0]).select()),
                        o.afterCommand();
                    })
                    .fail(function (t) {
                      o.context.triggerEvent("image.upload.error", t);
                    })
                );
              },
            },
            {
              key: "insertImagesAsDataURL",
              value: function (t) {
                var i = this;
                w().each(t, function (t, e) {
                  var n,
                    o = e.name;
                  i.options.maximumImageFileSize &&
                  i.options.maximumImageFileSize < e.size
                    ? i.context.triggerEvent(
                        "image.upload.error",
                        i.lang.image.maximumFileSizeError
                      )
                    : ((n = e),
                      w()
                        .Deferred(function (e) {
                          w()
                            .extend(new FileReader(), {
                              onload: function (t) {
                                t = t.target.result;
                                e.resolve(t);
                              },
                              onerror: function (t) {
                                e.reject(t);
                              },
                            })
                            .readAsDataURL(n);
                        })
                        .promise()
                        .then(function (t) {
                          return i.insertImage(t, o);
                        })
                        .fail(function () {
                          i.context.triggerEvent("image.upload.error");
                        }));
                });
              },
            },
            {
              key: "insertImagesOrCallback",
              value: function (t) {
                this.options.callbacks.onImageUpload
                  ? this.context.triggerEvent("image.upload", t)
                  : this.insertImagesAsDataURL(t);
              },
            },
            {
              key: "getSelectedText",
              value: function () {
                var t = this.getLastRange();
                return (t = t.isOnAnchor()
                  ? A.createFromNode(L.ancestor(t.sc, L.isAnchor))
                  : t).toString();
              },
            },
            {
              key: "onFormatBlock",
              value: function (t, e) {
                var n;
                document.execCommand(
                  "FormatBlock",
                  !1,
                  N.isMSIE ? "<" + t + ">" : t
                ),
                  e &&
                    e.length &&
                    (e =
                      e[0].tagName.toUpperCase() !== t.toUpperCase()
                        ? e.find(t)
                        : e) &&
                    e.length &&
                    ((n = this.createRange()),
                    (n = w()([n.sc, n.ec]).closest(t)).removeClass(),
                    (t = e[0].className || "")) &&
                    n.addClass(t);
              },
            },
            {
              key: "formatPara",
              value: function () {
                this.formatBlock("P");
              },
            },
            {
              key: "fontStyling",
              value: function (t, e) {
                var n,
                  o,
                  i = this.getLastRange();
                "" !== i
                  ? ((n = this.style.styleNodes(i)),
                    this.$editor.find(".note-status-output").html(""),
                    w()(n).css(t, e),
                    i.isCollapsed()
                      ? (t = R.head(n)) &&
                        !L.nodeLength(t) &&
                        ((t.innerHTML = L.ZERO_WIDTH_NBSP_CHAR),
                        A.createFromNode(t.firstChild).select(),
                        this.setLastRange(),
                        this.$editable.data("bogus", t))
                      : this.setLastRange(this.createRangeFromList(n).select()))
                  : ((o = w().now()),
                    this.$editor
                      .find(".note-status-output")
                      .html(
                        '<div id="note-status-output-' +
                          o +
                          '" class="alert alert-info">' +
                          this.lang.output.noSelection +
                          "</div>"
                      ),
                    setTimeout(function () {
                      w()("#note-status-output-" + o).remove();
                    }, 5e3));
              },
            },
            {
              key: "unlink",
              value: function () {
                var t,
                  e = this.getLastRange();
                e.isOnAnchor() &&
                  ((t = L.ancestor(e.sc, L.isAnchor)),
                  (e = A.createFromNode(t)).select(),
                  this.setLastRange(),
                  this.beforeCommand(),
                  document.execCommand("unlink"),
                  this.afterCommand());
              },
            },
            {
              key: "getLinkInfo",
              value: function () {
                var t = this.getLastRange().expand(L.isAnchor),
                  e = w()(R.head(t.nodes(L.isAnchor))),
                  t = {
                    range: t,
                    text: t.toString(),
                    url: e.length ? e.attr("href") : "",
                  };
                return (
                  e.length && (t.isNewWindow = "_blank" === e.attr("target")), t
                );
              },
            },
            {
              key: "addRow",
              value: function (t) {
                var e = this.getLastRange(this.$editable);
                e.isCollapsed() &&
                  e.isOnCell() &&
                  (this.beforeCommand(),
                  this.table.addRow(e, t),
                  this.afterCommand());
              },
            },
            {
              key: "addCol",
              value: function (t) {
                var e = this.getLastRange(this.$editable);
                e.isCollapsed() &&
                  e.isOnCell() &&
                  (this.beforeCommand(),
                  this.table.addCol(e, t),
                  this.afterCommand());
              },
            },
            {
              key: "deleteRow",
              value: function () {
                var t = this.getLastRange(this.$editable);
                t.isCollapsed() &&
                  t.isOnCell() &&
                  (this.beforeCommand(),
                  this.table.deleteRow(t),
                  this.afterCommand());
              },
            },
            {
              key: "deleteCol",
              value: function () {
                var t = this.getLastRange(this.$editable);
                t.isCollapsed() &&
                  t.isOnCell() &&
                  (this.beforeCommand(),
                  this.table.deleteCol(t),
                  this.afterCommand());
              },
            },
            {
              key: "deleteTable",
              value: function () {
                var t = this.getLastRange(this.$editable);
                t.isCollapsed() &&
                  t.isOnCell() &&
                  (this.beforeCommand(),
                  this.table.deleteTable(t),
                  this.afterCommand());
              },
            },
            {
              key: "resizeTo",
              value: function (t, e, n) {
                var o;
                (n = n
                  ? {
                      width:
                        (n = t.y / t.x) < (o = e.data("ratio")) ? t.x : t.y / o,
                      height: n < o ? t.x * o : t.y,
                    }
                  : { width: t.x, height: t.y }),
                  e.css(n);
              },
            },
            {
              key: "hasFocus",
              value: function () {
                return this.$editable.is(":focus");
              },
            },
            {
              key: "focus",
              value: function () {
                this.hasFocus() || this.$editable.focus();
              },
            },
            {
              key: "isEmpty",
              value: function () {
                return (
                  L.isEmpty(this.$editable[0]) ||
                  L.emptyPara === this.$editable.html()
                );
              },
            },
            {
              key: "empty",
              value: function () {
                this.context.invoke("code", L.emptyPara);
              },
            },
            {
              key: "normalizeContent",
              value: function () {
                this.$editable[0].normalize();
              },
            },
          ]) && Lt(t.prototype, e),
          n && Lt(t, n),
          r
        );
      })();
      function At(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function Ft(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function Dt(t, e) {
        var n,
          o,
          i,
          r,
          a =
            ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
            t["@@iterator"];
        if (a)
          return (
            (o = !(n = !0)),
            {
              s: function () {
                a = a.call(t);
              },
              n: function () {
                var t = a.next();
                return (n = t.done), t;
              },
              e: function (t) {
                (o = !0), (i = t);
              },
              f: function () {
                try {
                  n || null == a.return || a.return();
                } finally {
                  if (o) throw i;
                }
              },
            }
          );
        if (
          Array.isArray(t) ||
          (a = (function (t, e) {
            var n;
            if (t)
              return "string" == typeof t
                ? Ht(t, e)
                : "Map" ===
                    (n =
                      "Object" ===
                        (n = Object.prototype.toString.call(t).slice(8, -1)) &&
                      t.constructor
                        ? t.constructor.name
                        : n) || "Set" === n
                ? Array.from(t)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Ht(t, e)
                : void 0;
          })(t)) ||
          (e && t && "number" == typeof t.length)
        )
          return (
            a && (t = a),
            (r = 0),
            {
              s: (e = function () {}),
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: e,
            }
          );
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function Ht(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      function zt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function Bt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function Mt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function Ot(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      (i = (function () {
        function e(t) {
          if (!(this instanceof e))
            throw new TypeError("Cannot call a class as a function");
          (this.context = t), (this.$editable = t.layoutInfo.editable);
        }
        var t, n, o;
        return (
          (t = e),
          (n = [
            {
              key: "initialize",
              value: function () {
                this.$editable.on("paste", this.pasteByEvent.bind(this));
              },
            },
            {
              key: "pasteByEvent",
              value: function (t) {
                var e,
                  n = this,
                  o = t.originalEvent.clipboardData;
                o && o.items && o.items.length
                  ? "file" ===
                      (e = 1 < o.items.length ? o.items[1] : R.head(o.items))
                        .kind && -1 !== e.type.indexOf("image/")
                    ? (this.context.invoke("editor.insertImagesOrCallback", [
                        e.getAsFile(),
                      ]),
                      t.preventDefault())
                    : "string" === e.kind &&
                      this.context.invoke(
                        "editor.isLimited",
                        o.getData("Text").length
                      ) &&
                      t.preventDefault()
                  : window.clipboardData &&
                    ((e = window.clipboardData.getData("text")),
                    this.context.invoke("editor.isLimited", e.length)) &&
                    t.preventDefault(),
                  setTimeout(function () {
                    n.context.invoke("editor.afterCommand");
                  }, 10);
              },
            },
          ]) && At(t.prototype, n),
          o && At(t, o),
          e
        );
      })()),
        (r = (function () {
          function e(t) {
            if (!(this instanceof e))
              throw new TypeError("Cannot call a class as a function");
            (this.context = t),
              (this.$eventListener = w()(document)),
              (this.$editor = t.layoutInfo.editor),
              (this.$editable = t.layoutInfo.editable),
              (this.options = t.options),
              (this.lang = this.options.langInfo),
              (this.documentEventHandlers = {}),
              (this.$dropzone = w()(
                [
                  '<div class="note-dropzone">',
                  '<div class="note-dropzone-message"></div>',
                  "</div>",
                ].join("")
              ).prependTo(this.$editor));
          }
          var t, n, o;
          return (
            (t = e),
            (n = [
              {
                key: "initialize",
                value: function () {
                  this.options.disableDragAndDrop
                    ? ((this.documentEventHandlers.onDrop = function (t) {
                        t.preventDefault();
                      }),
                      (this.$eventListener = this.$dropzone),
                      this.$eventListener.on(
                        "drop",
                        this.documentEventHandlers.onDrop
                      ))
                    : this.attachDragAndDropEvent();
                },
              },
              {
                key: "attachDragAndDropEvent",
                value: function () {
                  var i = this,
                    o = w()(),
                    r = this.$dropzone.find(".note-dropzone-message");
                  (this.documentEventHandlers.onDragenter = function (t) {
                    var e = i.context.invoke("codeview.isActivated"),
                      n = 0 < i.$editor.width() && 0 < i.$editor.height();
                    e ||
                      o.length ||
                      !n ||
                      (i.$editor.addClass("dragover"),
                      i.$dropzone.width(i.$editor.width()),
                      i.$dropzone.height(i.$editor.height()),
                      r.text(i.lang.image.dragImageHere)),
                      (o = o.add(t.target));
                  }),
                    (this.documentEventHandlers.onDragleave = function (t) {
                      ((o = o.not(t.target)).length &&
                        "BODY" !== t.target.nodeName) ||
                        ((o = w()()), i.$editor.removeClass("dragover"));
                    }),
                    (this.documentEventHandlers.onDrop = function () {
                      (o = w()()), i.$editor.removeClass("dragover");
                    }),
                    this.$eventListener
                      .on("dragenter", this.documentEventHandlers.onDragenter)
                      .on("dragleave", this.documentEventHandlers.onDragleave)
                      .on("drop", this.documentEventHandlers.onDrop),
                    this.$dropzone
                      .on("dragenter", function () {
                        i.$dropzone.addClass("hover"),
                          r.text(i.lang.image.dropImage);
                      })
                      .on("dragleave", function () {
                        i.$dropzone.removeClass("hover"),
                          r.text(i.lang.image.dragImageHere);
                      }),
                    this.$dropzone
                      .on("drop", function (t) {
                        var o = t.originalEvent.dataTransfer;
                        t.preventDefault(),
                          o && o.files && o.files.length
                            ? (i.$editable.focus(),
                              i.context.invoke(
                                "editor.insertImagesOrCallback",
                                o.files
                              ))
                            : w().each(o.types, function (t, e) {
                                var n;
                                -1 < e.toLowerCase().indexOf("_moz_") ||
                                  ((n = o.getData(e)),
                                  -1 < e.toLowerCase().indexOf("text")
                                    ? i.context.invoke("editor.pasteHTML", n)
                                    : w()(n).each(function (t, e) {
                                        i.context.invoke(
                                          "editor.insertNode",
                                          e
                                        );
                                      }));
                              });
                      })
                      .on("dragover", !1);
                },
              },
              {
                key: "destroy",
                value: function () {
                  var e = this;
                  Object.keys(this.documentEventHandlers).forEach(function (t) {
                    e.$eventListener.off(
                      t.substr(2).toLowerCase(),
                      e.documentEventHandlers[t]
                    );
                  }),
                    (this.documentEventHandlers = {});
                },
              },
            ]) && Ft(t.prototype, n),
            o && Ft(t, o),
            e
          );
        })()),
        (t = (function () {
          function e(t) {
            if (!(this instanceof e))
              throw new TypeError("Cannot call a class as a function");
            (this.context = t),
              (this.$editor = t.layoutInfo.editor),
              (this.$editable = t.layoutInfo.editable),
              (this.$codable = t.layoutInfo.codable),
              (this.options = t.options),
              (this.CodeMirrorConstructor = window.CodeMirror),
              this.options.codemirror.CodeMirrorConstructor &&
                (this.CodeMirrorConstructor =
                  this.options.codemirror.CodeMirrorConstructor);
          }
          var t, n, o;
          return (
            (t = e),
            (n = [
              {
                key: "sync",
                value: function (t) {
                  var e = this.isActivated(),
                    n = this.CodeMirrorConstructor;
                  e &&
                    (t
                      ? n
                        ? this.$codable.data("cmEditor").getDoc().setValue(t)
                        : this.$codable.val(t)
                      : n && this.$codable.data("cmEditor").save());
                },
              },
              {
                key: "initialize",
                value: function () {
                  var e = this;
                  this.$codable.on("keyup", function (t) {
                    t.keyCode === F.code.ESCAPE && e.deactivate();
                  });
                },
              },
              {
                key: "isActivated",
                value: function () {
                  return this.$editor.hasClass("codeview");
                },
              },
              {
                key: "toggle",
                value: function () {
                  this.isActivated() ? this.deactivate() : this.activate(),
                    this.context.triggerEvent("codeview.toggled");
                },
              },
              {
                key: "purify",
                value: function (t) {
                  var i;
                  return (
                    this.options.codeviewFilter &&
                      ((t = t.replace(this.options.codeviewFilterRegex, "")),
                      this.options.codeviewIframeFilter) &&
                      ((i = this.options.codeviewIframeWhitelistSrc.concat(
                        this.options.codeviewIframeWhitelistSrcBase
                      )),
                      (t = t.replace(
                        /(<iframe.*?>.*?(?:<\/iframe>)?)/gi,
                        function (t) {
                          if (
                            !/<.+src(?==?('|"|\s)?)[\s\S]+src(?=('|"|\s)?)[^>]*?>/i.test(
                              t
                            )
                          ) {
                            var e,
                              n = Dt(i);
                            try {
                              for (n.s(); !(e = n.n()).done; ) {
                                var o = e.value;
                                if (
                                  new RegExp(
                                    'src="(https?:)?//' +
                                      o.replace(
                                        /[-\/\\^$*+?.()|[\]{}]/g,
                                        "\\$&"
                                      ) +
                                      '/(.+)"'
                                  ).test(t)
                                )
                                  return t;
                              }
                            } catch (t) {
                              n.e(t);
                            } finally {
                              n.f();
                            }
                          }
                          return "";
                        }
                      ))),
                    t
                  );
                },
              },
              {
                key: "activate",
                value: function () {
                  var e,
                    n,
                    o = this,
                    t = this.CodeMirrorConstructor;
                  this.$codable.val(
                    L.html(this.$editable, this.options.prettifyHtml)
                  ),
                    this.$codable.height(this.$editable.height()),
                    this.context.invoke("toolbar.updateCodeview", !0),
                    this.context.invoke("airPopover.updateCodeview", !0),
                    this.$editor.addClass("codeview"),
                    this.$codable.focus(),
                    t
                      ? ((e = t.fromTextArea(
                          this.$codable[0],
                          this.options.codemirror
                        )),
                        this.options.codemirror.tern &&
                          ((n = new t.TernServer(this.options.codemirror.tern)),
                          (e.ternServer = n),
                          e.on("cursorActivity", function (t) {
                            n.updateArgHints(t);
                          })),
                        e.on("blur", function (t) {
                          o.context.triggerEvent(
                            "blur.codeview",
                            e.getValue(),
                            t
                          );
                        }),
                        e.on("change", function () {
                          o.context.triggerEvent(
                            "change.codeview",
                            e.getValue(),
                            e
                          );
                        }),
                        e.setSize(null, this.$editable.outerHeight()),
                        this.$codable.data("cmEditor", e))
                      : (this.$codable.on("blur", function (t) {
                          o.context.triggerEvent(
                            "blur.codeview",
                            o.$codable.val(),
                            t
                          );
                        }),
                        this.$codable.on("input", function () {
                          o.context.triggerEvent(
                            "change.codeview",
                            o.$codable.val(),
                            o.$codable
                          );
                        }));
                },
              },
              {
                key: "deactivate",
                value: function () {
                  this.CodeMirrorConstructor &&
                    ((t = this.$codable.data("cmEditor")),
                    this.$codable.val(t.getValue()),
                    t.toTextArea());
                  var t = this.purify(
                      L.value(this.$codable, this.options.prettifyHtml) ||
                        L.emptyPara
                    ),
                    e = this.$editable.html() !== t;
                  this.$editable.html(t),
                    this.$editable.height(
                      this.options.height ? this.$codable.height() : "auto"
                    ),
                    this.$editor.removeClass("codeview"),
                    e &&
                      this.context.triggerEvent(
                        "change",
                        this.$editable.html(),
                        this.$editable
                      ),
                    this.$editable.focus(),
                    this.context.invoke("toolbar.updateCodeview", !1),
                    this.context.invoke("airPopover.updateCodeview", !1);
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.isActivated() && this.deactivate();
                },
              },
            ]) && zt(t.prototype, n),
            o && zt(t, o),
            e
          );
        })()),
        (e = (function () {
          function e(t) {
            if (!(this instanceof e))
              throw new TypeError("Cannot call a class as a function");
            (this.$document = w()(document)),
              (this.$statusbar = t.layoutInfo.statusbar),
              (this.$editable = t.layoutInfo.editable),
              (this.$codable = t.layoutInfo.codable),
              (this.options = t.options);
          }
          var t, n, o;
          return (
            (t = e),
            (n = [
              {
                key: "initialize",
                value: function () {
                  var i = this;
                  this.options.airMode || this.options.disableResizeEditor
                    ? this.destroy()
                    : this.$statusbar.on("mousedown", function (t) {
                        t.preventDefault(), t.stopPropagation();
                        function e(t) {
                          var e = t.clientY - (24 + n),
                            t = t.clientY - (24 + o),
                            e =
                              0 < i.options.minheight
                                ? Math.max(e, i.options.minheight)
                                : e;
                          (e =
                            0 < i.options.maxHeight
                              ? Math.min(e, i.options.maxHeight)
                              : e),
                            (t =
                              0 < i.options.minheight
                                ? Math.max(t, i.options.minheight)
                                : t),
                            (t =
                              0 < i.options.maxHeight
                                ? Math.min(t, i.options.maxHeight)
                                : t),
                            i.$editable.height(e),
                            i.$codable.height(t);
                        }
                        var n =
                            i.$editable.offset().top - i.$document.scrollTop(),
                          o = i.$codable.offset().top - i.$document.scrollTop();
                        i.$document
                          .on("mousemove", e)
                          .one("mouseup", function () {
                            i.$document.off("mousemove", e);
                          });
                      });
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.$statusbar.off(), this.$statusbar.addClass("locked");
                },
              },
            ]) && Bt(t.prototype, n),
            o && Bt(t, o),
            e
          );
        })()),
        (n = (function () {
          function n(t) {
            var e = this;
            if (!(this instanceof n))
              throw new TypeError("Cannot call a class as a function");
            (this.context = t),
              (this.$editor = t.layoutInfo.editor),
              (this.$toolbar = t.layoutInfo.toolbar),
              (this.$editable = t.layoutInfo.editable),
              (this.$codable = t.layoutInfo.codable),
              (this.$window = w()(window)),
              (this.$scrollbar = w()("html, body")),
              (this.scrollbarClassName = "note-fullscreen-body"),
              (this.onResize = function () {
                e.resizeTo({
                  h: e.$window.height() - e.$toolbar.outerHeight(),
                });
              });
          }
          var t, e, o;
          return (
            (t = n),
            (e = [
              {
                key: "resizeTo",
                value: function (t) {
                  this.$editable.css("height", t.h),
                    this.$codable.css("height", t.h),
                    this.$codable.data("cmeditor") &&
                      this.$codable.data("cmeditor").setsize(null, t.h);
                },
              },
              {
                key: "toggle",
                value: function () {
                  this.$editor.toggleClass("fullscreen");
                  var t = this.isFullscreen();
                  this.$scrollbar.toggleClass(this.scrollbarClassName, t),
                    t
                      ? (this.$editable.data(
                          "orgHeight",
                          this.$editable.css("height")
                        ),
                        this.$editable.data(
                          "orgMaxHeight",
                          this.$editable.css("maxHeight")
                        ),
                        this.$editable.css("maxHeight", ""),
                        this.$window
                          .on("resize", this.onResize)
                          .trigger("resize"))
                      : (this.$window.off("resize", this.onResize),
                        this.resizeTo({ h: this.$editable.data("orgHeight") }),
                        this.$editable.css(
                          "maxHeight",
                          this.$editable.css("orgMaxHeight")
                        )),
                    this.context.invoke("toolbar.updateFullscreen", t);
                },
              },
              {
                key: "isFullscreen",
                value: function () {
                  return this.$editor.hasClass("fullscreen");
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.$scrollbar.removeClass(this.scrollbarClassName);
                },
              },
            ]) && Mt(t.prototype, e),
            o && Mt(t, o),
            n
          );
        })());
      var Ut = (function () {
        function e(t) {
          var n = this;
          if (!(this instanceof e))
            throw new TypeError("Cannot call a class as a function");
          (this.context = t),
            (this.$document = w()(document)),
            (this.$editingArea = t.layoutInfo.editingArea),
            (this.options = t.options),
            (this.lang = this.options.langInfo),
            (this.events = {
              "summernote.mousedown": function (t, e) {
                n.update(e.target, e) && e.preventDefault();
              },
              "summernote.keyup summernote.scroll summernote.change summernote.dialog.shown":
                function () {
                  n.update();
                },
              "summernote.disable summernote.blur": function () {
                n.hide();
              },
              "summernote.codeview.toggled": function () {
                n.update();
              },
            });
        }
        var t, n, o;
        return (
          (t = e),
          (n = [
            {
              key: "initialize",
              value: function () {
                var r = this;
                (this.$handle = w()(
                  [
                    '<div class="note-handle">',
                    '<div class="note-control-selection">',
                    '<div class="note-control-selection-bg"></div>',
                    '<div class="note-control-holder note-control-nw"></div>',
                    '<div class="note-control-holder note-control-ne"></div>',
                    '<div class="note-control-holder note-control-sw"></div>',
                    '<div class="',
                    this.options.disableResizeImage
                      ? "note-control-holder"
                      : "note-control-sizing",
                    ' note-control-se"></div>',
                    this.options.disableResizeImage
                      ? ""
                      : '<div class="note-control-selection-info"></div>',
                    "</div>",
                    "</div>",
                  ].join("")
                ).prependTo(this.$editingArea)),
                  this.$handle.on("mousedown", function (t) {
                    var e, n, o, i;
                    L.isControlSizing(t.target) &&
                      (t.preventDefault(),
                      t.stopPropagation(),
                      (e = r.$handle
                        .find(".note-control-selection")
                        .data("target")),
                      (n = e.offset()),
                      (o = r.$document.scrollTop()),
                      r.$document
                        .on(
                          "mousemove",
                          (i = function (t) {
                            r.context.invoke(
                              "editor.resizeTo",
                              {
                                x: t.clientX - n.left,
                                y: t.clientY - (n.top - o),
                              },
                              e,
                              !t.shiftKey
                            ),
                              r.update(e[0], t);
                          })
                        )
                        .one("mouseup", function (t) {
                          t.preventDefault(),
                            r.$document.off("mousemove", i),
                            r.context.invoke("editor.afterCommand");
                        }),
                      e.data("ratio") ||
                        e.data("ratio", e.height() / e.width()));
                  }),
                  this.$handle.on("wheel", function (t) {
                    t.preventDefault(), r.update();
                  });
              },
            },
            {
              key: "destroy",
              value: function () {
                this.$handle.remove();
              },
            },
            {
              key: "update",
              value: function (t, e) {
                var n, o, i, r;
                return (
                  !this.context.isDisabled() &&
                  ((n = L.isImg(t)),
                  (o = this.$handle.find(".note-control-selection")),
                  this.context.invoke("imagePopover.update", t, e),
                  n
                    ? ((r = {
                        left:
                          (r = (e = w()(t)).position()).left +
                          parseInt(e.css("marginLeft"), 10),
                        top: r.top + parseInt(e.css("marginTop"), 10),
                      }),
                      (i = { w: e.outerWidth(!1), h: e.outerHeight(!1) }),
                      o
                        .css({
                          display: "block",
                          left: r.left,
                          top: r.top,
                          width: i.w,
                          height: i.h,
                        })
                        .data("target", e),
                      ((r = new Image()).src = e.attr("src")),
                      (e =
                        i.w +
                        "x" +
                        i.h +
                        " (" +
                        this.lang.image.original +
                        ": " +
                        r.width +
                        "x" +
                        r.height +
                        ")"),
                      o.find(".note-control-selection-info").text(e),
                      this.context.invoke("editor.saveTarget", t))
                    : this.hide(),
                  n)
                );
              },
            },
            {
              key: "hide",
              value: function () {
                this.context.invoke("editor.clearTarget"),
                  this.$handle.children().hide();
              },
            },
          ]) && Ot(t.prototype, n),
          o && Ot(t, o),
          e
        );
      })();
      function jt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var Wt =
          /^([A-Za-z][A-Za-z0-9+-.]*\:[\/]{2}|tel:|mailto:[A-Z0-9._%+-]+@|xmpp:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i,
        Kt = (function () {
          function e(t) {
            var n = this;
            if (!(this instanceof e))
              throw new TypeError("Cannot call a class as a function");
            (this.context = t),
              (this.options = t.options),
              (this.events = {
                "summernote.keyup": function (t, e) {
                  e.isDefaultPrevented() || n.handleKeyup(e);
                },
                "summernote.keydown": function (t, e) {
                  n.handleKeydown(e);
                },
              });
          }
          var t, n, o;
          return (
            (t = e),
            (n = [
              {
                key: "initialize",
                value: function () {
                  this.lastWordRange = null;
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.lastWordRange = null;
                },
              },
              {
                key: "replace",
                value: function () {
                  var t, e;
                  this.lastWordRange &&
                    (t = (e = this.lastWordRange.toString()).match(Wt)) &&
                    (t[1] || t[2]) &&
                    ((t = t[1] ? e : "http://" + e),
                    (e = this.options.showDomainOnlyForAutolink
                      ? e
                          .replace(
                            /^(?:https?:\/\/)?(?:tel?:?)?(?:mailto?:?)?(?:xmpp?:?)?(?:www\.)?/i,
                            ""
                          )
                          .split("/")[0]
                      : e),
                    (e = w()("<a></a>").html(e).attr("href", t)[0]),
                    this.context.options.linkTargetBlank &&
                      w()(e).attr("target", "_blank"),
                    this.lastWordRange.insertNode(e),
                    (this.lastWordRange = null),
                    this.context.invoke("editor.focus"));
                },
              },
              {
                key: "handleKeydown",
                value: function (t) {
                  R.contains([F.code.ENTER, F.code.SPACE], t.keyCode) &&
                    ((t = this.context
                      .invoke("editor.createRange")
                      .getWordRange()),
                    (this.lastWordRange = t));
                },
              },
              {
                key: "handleKeyup",
                value: function (t) {
                  R.contains([F.code.ENTER, F.code.SPACE], t.keyCode) &&
                    this.replace();
                },
              },
            ]) && jt(t.prototype, n),
            o && jt(t, o),
            e
          );
        })();
      function Vt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var qt = (function () {
        function n(t) {
          var e = this;
          if (!(this instanceof n))
            throw new TypeError("Cannot call a class as a function");
          (this.$note = t.layoutInfo.note),
            (this.events = {
              "summernote.change": function () {
                e.$note.val(t.invoke("code"));
              },
            });
        }
        var t, e, o;
        return (
          (t = n),
          (e = [
            {
              key: "shouldInitialize",
              value: function () {
                return L.isTextarea(this.$note[0]);
              },
            },
          ]) && Vt(t.prototype, e),
          o && Vt(t, o),
          n
        );
      })();
      function _t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var Gt = (function () {
        function e(t) {
          var n = this;
          if (!(this instanceof e))
            throw new TypeError("Cannot call a class as a function");
          (this.context = t),
            (this.options = t.options.replace || {}),
            (this.keys = [
              F.code.ENTER,
              F.code.SPACE,
              F.code.PERIOD,
              F.code.COMMA,
              F.code.SEMICOLON,
              F.code.SLASH,
            ]),
            (this.previousKeydownCode = null),
            (this.events = {
              "summernote.keyup": function (t, e) {
                e.isDefaultPrevented() || n.handleKeyup(e);
              },
              "summernote.keydown": function (t, e) {
                n.handleKeydown(e);
              },
            });
        }
        var t, n, o;
        return (
          (t = e),
          (n = [
            {
              key: "shouldInitialize",
              value: function () {
                return !!this.options.match;
              },
            },
            {
              key: "initialize",
              value: function () {
                this.lastWord = null;
              },
            },
            {
              key: "destroy",
              value: function () {
                this.lastWord = null;
              },
            },
            {
              key: "replace",
              value: function () {
                var n, t;
                this.lastWord &&
                  ((t = (n = this).lastWord.toString()),
                  this.options.match(t, function (t) {
                    var e;
                    t &&
                      ((e = ""),
                      "string" == typeof t
                        ? (e = L.createText(t))
                        : t instanceof jQuery
                        ? (e = t[0])
                        : t instanceof Node && (e = t),
                      e) &&
                      (n.lastWord.insertNode(e),
                      (n.lastWord = null),
                      n.context.invoke("editor.focus"));
                  }));
              },
            },
            {
              key: "handleKeydown",
              value: function (t) {
                var e;
                (this.previousKeydownCode &&
                  R.contains(this.keys, this.previousKeydownCode)) ||
                  (R.contains(this.keys, t.keyCode) &&
                    ((e = this.context
                      .invoke("editor.createRange")
                      .getWordRange()),
                    (this.lastWord = e))),
                  (this.previousKeydownCode = t.keyCode);
              },
            },
            {
              key: "handleKeyup",
              value: function (t) {
                R.contains(this.keys, t.keyCode) && this.replace();
              },
            },
          ]) && _t(t.prototype, n),
          o && _t(t, o),
          e
        );
      })();
      function Yt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var Zt = (function () {
        function n(t) {
          var e = this;
          if (!(this instanceof n))
            throw new TypeError("Cannot call a class as a function");
          (this.context = t),
            (this.$editingArea = t.layoutInfo.editingArea),
            (this.options = t.options),
            !0 === this.options.inheritPlaceholder &&
              (this.options.placeholder =
                this.context.$note.attr("placeholder") ||
                this.options.placeholder),
            (this.events = {
              "summernote.init summernote.change": function () {
                e.update();
              },
              "summernote.codeview.toggled": function () {
                e.update();
              },
            });
        }
        var t, e, o;
        return (
          (t = n),
          (e = [
            {
              key: "shouldInitialize",
              value: function () {
                return !!this.options.placeholder;
              },
            },
            {
              key: "initialize",
              value: function () {
                var t = this;
                (this.$placeholder = w()(
                  '<div class="note-placeholder"></div>'
                )),
                  this.$placeholder
                    .on("click", function () {
                      t.context.invoke("focus");
                    })
                    .html(this.options.placeholder)
                    .prependTo(this.$editingArea),
                  this.update();
              },
            },
            {
              key: "destroy",
              value: function () {
                this.$placeholder.remove();
              },
            },
            {
              key: "update",
              value: function () {
                var t =
                  !this.context.invoke("codeview.isActivated") &&
                  this.context.invoke("editor.isEmpty");
                this.$placeholder.toggle(t);
              },
            },
          ]) && Yt(t.prototype, e),
          o && Yt(t, o),
          n
        );
      })();
      function Qt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var Xt = (function () {
        function e(t) {
          if (!(this instanceof e))
            throw new TypeError("Cannot call a class as a function");
          (this.ui = w().summernote.ui),
            (this.context = t),
            (this.$toolbar = t.layoutInfo.toolbar),
            (this.options = t.options),
            (this.lang = this.options.langInfo),
            (this.invertedKeyMap = P.invertObject(
              this.options.keyMap[N.isMac ? "mac" : "pc"]
            ));
        }
        var t, n, o;
        return (
          (t = e),
          (n = [
            {
              key: "representShortcut",
              value: function (t) {
                t = this.invertedKeyMap[t];
                return this.options.shortcuts && t
                  ? " (" +
                      (t = (t = N.isMac
                        ? t.replace("CMD", "⌘").replace("SHIFT", "⇧")
                        : t)
                        .replace("BACKSLASH", "\\")
                        .replace("SLASH", "/")
                        .replace("LEFTBRACKET", "[")
                        .replace("RIGHTBRACKET", "]")) +
                      ")"
                  : "";
              },
            },
            {
              key: "button",
              value: function (t) {
                return (
                  !this.options.tooltip && t.tooltip && delete t.tooltip,
                  (t.container = this.options.container),
                  this.ui.button(t)
                );
              },
            },
            {
              key: "initialize",
              value: function () {
                this.addToolbarButtons(),
                  this.addImagePopoverButtons(),
                  this.addLinkPopoverButtons(),
                  this.addTablePopoverButtons(),
                  (this.fontInstalledMap = {});
              },
            },
            {
              key: "destroy",
              value: function () {
                delete this.fontInstalledMap;
              },
            },
            {
              key: "isFontInstalled",
              value: function (t) {
                return (
                  Object.prototype.hasOwnProperty.call(
                    this.fontInstalledMap,
                    t
                  ) ||
                    (this.fontInstalledMap[t] =
                      N.isFontInstalled(t) ||
                      R.contains(this.options.fontNamesIgnoreCheck, t)),
                  this.fontInstalledMap[t]
                );
              },
            },
            {
              key: "isFontDeservedToAdd",
              value: function (t) {
                return (
                  "" !== (t = t.toLowerCase()) &&
                  this.isFontInstalled(t) &&
                  -1 === N.genericFontFamilies.indexOf(t)
                );
              },
            },
            {
              key: "colorPalette",
              value: function (s, t, n, o) {
                var l = this;
                return this.ui
                  .buttonGroup({
                    className: "note-color " + s,
                    children: [
                      this.button({
                        className: "note-current-color-button",
                        contents: this.ui.icon(
                          this.options.icons.font + " note-recent-color"
                        ),
                        tooltip: t,
                        click: function (t) {
                          t = w()(t.currentTarget);
                          n && o
                            ? l.context.invoke("editor.color", {
                                backColor: t.attr("data-backColor"),
                                foreColor: t.attr("data-foreColor"),
                              })
                            : n
                            ? l.context.invoke("editor.color", {
                                backColor: t.attr("data-backColor"),
                              })
                            : o &&
                              l.context.invoke("editor.color", {
                                foreColor: t.attr("data-foreColor"),
                              });
                        },
                        callback: function (t) {
                          var e = t.find(".note-recent-color");
                          n &&
                            (e.css(
                              "background-color",
                              l.options.colorButton.backColor
                            ),
                            t.attr(
                              "data-backColor",
                              l.options.colorButton.backColor
                            )),
                            o
                              ? (e.css(
                                  "color",
                                  l.options.colorButton.foreColor
                                ),
                                t.attr(
                                  "data-foreColor",
                                  l.options.colorButton.foreColor
                                ))
                              : e.css("color", "transparent");
                        },
                      }),
                      this.button({
                        className: "dropdown-toggle",
                        contents: this.ui.dropdownButtonContents(
                          "",
                          this.options
                        ),
                        tooltip: this.lang.color.more,
                        data: { toggle: "dropdown" },
                      }),
                      this.ui.dropdown({
                        items:
                          (n
                            ? [
                                '<div class="note-palette">',
                                '<div class="note-palette-title">' +
                                  this.lang.color.background +
                                  "</div>",
                                "<div>",
                                '<button type="button" class="note-color-reset btn btn-light btn-default" data-event="backColor" data-value="transparent">',
                                this.lang.color.transparent,
                                "</button>",
                                "</div>",
                                '<div class="note-holder" data-event="backColor">\x3c!-- back colors --\x3e</div>',
                                "<div>",
                                '<button type="button" class="note-color-select btn btn-light btn-default" data-event="openPalette" data-value="backColorPicker-' +
                                  this.options.id +
                                  '">',
                                this.lang.color.cpSelect,
                                "</button>",
                                '<input type="color" id="backColorPicker-' +
                                  this.options.id +
                                  '" class="note-btn note-color-select-btn" value="' +
                                  this.options.colorButton.backColor +
                                  '" data-event="backColorPalette-' +
                                  this.options.id +
                                  '">',
                                "</div>",
                                '<div class="note-holder-custom" id="backColorPalette-' +
                                  this.options.id +
                                  '" data-event="backColor"></div>',
                                "</div>",
                              ].join("")
                            : "") +
                          (o
                            ? [
                                '<div class="note-palette">',
                                '<div class="note-palette-title">' +
                                  this.lang.color.foreground +
                                  "</div>",
                                "<div>",
                                '<button type="button" class="note-color-reset btn btn-light btn-default" data-event="removeFormat" data-value="foreColor">',
                                this.lang.color.resetToDefault,
                                "</button>",
                                "</div>",
                                '<div class="note-holder" data-event="foreColor">\x3c!-- fore colors --\x3e</div>',
                                "<div>",
                                '<button type="button" class="note-color-select btn btn-light btn-default" data-event="openPalette" data-value="foreColorPicker-' +
                                  this.options.id +
                                  '">',
                                this.lang.color.cpSelect,
                                "</button>",
                                '<input type="color" id="foreColorPicker-' +
                                  this.options.id +
                                  '" class="note-btn note-color-select-btn" value="' +
                                  this.options.colorButton.foreColor +
                                  '" data-event="foreColorPalette-' +
                                  this.options.id +
                                  '">',
                                "</div>",
                                '<div class="note-holder-custom" id="foreColorPalette-' +
                                  this.options.id +
                                  '" data-event="foreColor"></div>',
                                "</div>",
                              ].join("")
                            : ""),
                        callback: function (n) {
                          n.find(".note-holder").each(function (t, e) {
                            e = w()(e);
                            e.append(
                              l.ui
                                .palette({
                                  colors: l.options.colors,
                                  colorsName: l.options.colorsName,
                                  eventName: e.data("event"),
                                  container: l.options.container,
                                  tooltip: l.options.tooltip,
                                })
                                .render()
                            );
                          });
                          var o = [
                            [
                              "#FFFFFF",
                              "#FFFFFF",
                              "#FFFFFF",
                              "#FFFFFF",
                              "#FFFFFF",
                              "#FFFFFF",
                              "#FFFFFF",
                              "#FFFFFF",
                            ],
                          ];
                          n.find(".note-holder-custom").each(function (t, e) {
                            e = w()(e);
                            e.append(
                              l.ui
                                .palette({
                                  colors: o,
                                  colorsName: o,
                                  eventName: e.data("event"),
                                  container: l.options.container,
                                  tooltip: l.options.tooltip,
                                })
                                .render()
                            );
                          }),
                            n.find("input[type=color]").each(function (t, e) {
                              w()(e).change(function () {
                                var t = n
                                    .find("#" + w()(this).data("event"))
                                    .find(".note-color-btn")
                                    .first(),
                                  e = this.value.toUpperCase();
                                t
                                  .css("background-color", e)
                                  .attr("aria-label", e)
                                  .attr("data-value", e)
                                  .attr("data-original-title", e),
                                  t.click();
                              });
                            });
                        },
                        click: function (t) {
                          t.stopPropagation();
                          var e,
                            n,
                            o,
                            i = w()("." + s).find(".note-dropdown-menu"),
                            t = w()(t.target),
                            r = t.data("event"),
                            a = t.attr("data-value");
                          "openPalette" === r
                            ? ((e = i.find("#" + a)),
                              (o = (i = w()(
                                i
                                  .find("#" + e.data("event"))
                                  .find(".note-color-row")[0]
                              ))
                                .find(".note-color-btn")
                                .last()
                                .detach()),
                              (n = e.val()),
                              o
                                .css("background-color", n)
                                .attr("aria-label", n)
                                .attr("data-value", n)
                                .attr("data-original-title", n),
                              i.prepend(o),
                              e.click())
                            : (R.contains(["backColor", "foreColor"], r) &&
                                ((n =
                                  "backColor" === r
                                    ? "background-color"
                                    : "color"),
                                (i = t
                                  .closest(".note-color")
                                  .find(".note-recent-color")),
                                (o = t
                                  .closest(".note-color")
                                  .find(".note-current-color-button")),
                                i.css(n, a),
                                o.attr("data-" + r, a)),
                              l.context.invoke("editor." + r, a));
                        },
                      }),
                    ],
                  })
                  .render();
              },
            },
            {
              key: "addToolbarButtons",
              value: function () {
                for (
                  var o = this,
                    t =
                      (this.context.memo("button.style", function () {
                        return o.ui
                          .buttonGroup([
                            o.button({
                              className: "dropdown-toggle",
                              contents: o.ui.dropdownButtonContents(
                                o.ui.icon(o.options.icons.magic),
                                o.options
                              ),
                              tooltip: o.lang.style.style,
                              data: { toggle: "dropdown" },
                            }),
                            o.ui.dropdown({
                              className: "dropdown-style",
                              items: o.options.styleTags,
                              title: o.lang.style.style,
                              template: function (t) {
                                var e = (t =
                                    "string" == typeof t
                                      ? {
                                          tag: t,
                                          title:
                                            Object.prototype.hasOwnProperty.call(
                                              o.lang.style,
                                              t
                                            )
                                              ? o.lang.style[t]
                                              : t,
                                        }
                                      : t).tag,
                                  n = t.title;
                                return (
                                  "<" +
                                  e +
                                  (t.style ? ' style="' + t.style + '" ' : "") +
                                  (t.className
                                    ? ' class="' + t.className + '"'
                                    : "") +
                                  ">" +
                                  n +
                                  "</" +
                                  e +
                                  ">"
                                );
                              },
                              click:
                                o.context.createInvokeHandler(
                                  "editor.formatBlock"
                                ),
                            }),
                          ])
                          .render();
                      }),
                      0),
                    e = this.options.styleTags.length;
                  t < e;
                  t++
                )
                  !(function (t) {
                    var e = o.options.styleTags[t];
                    o.context.memo("button.style." + e, function () {
                      return o
                        .button({
                          className: "note-btn-style-" + e,
                          contents:
                            '<div data-value="' +
                            e +
                            '">' +
                            e.toUpperCase() +
                            "</div>",
                          tooltip: o.lang.style[e],
                          click:
                            o.context.createInvokeHandler("editor.formatBlock"),
                        })
                        .render();
                    });
                  })(t);
                this.context.memo("button.bold", function () {
                  return o
                    .button({
                      className: "note-btn-bold",
                      contents: o.ui.icon(o.options.icons.bold),
                      tooltip: o.lang.font.bold + o.representShortcut("bold"),
                      click:
                        o.context.createInvokeHandlerAndUpdateState(
                          "editor.bold"
                        ),
                    })
                    .render();
                }),
                  this.context.memo("button.italic", function () {
                    return o
                      .button({
                        className: "note-btn-italic",
                        contents: o.ui.icon(o.options.icons.italic),
                        tooltip:
                          o.lang.font.italic + o.representShortcut("italic"),
                        click:
                          o.context.createInvokeHandlerAndUpdateState(
                            "editor.italic"
                          ),
                      })
                      .render();
                  }),
                  this.context.memo("button.underline", function () {
                    return o
                      .button({
                        className: "note-btn-underline",
                        contents: o.ui.icon(o.options.icons.underline),
                        tooltip:
                          o.lang.font.underline +
                          o.representShortcut("underline"),
                        click:
                          o.context.createInvokeHandlerAndUpdateState(
                            "editor.underline"
                          ),
                      })
                      .render();
                  }),
                  this.context.memo("button.clear", function () {
                    return o
                      .button({
                        contents: o.ui.icon(o.options.icons.eraser),
                        tooltip:
                          o.lang.font.clear +
                          o.representShortcut("removeFormat"),
                        click: o.context.createInvokeHandler(
                          "editor.removeFormat"
                        ),
                      })
                      .render();
                  }),
                  this.context.memo("button.strikethrough", function () {
                    return o
                      .button({
                        className: "note-btn-strikethrough",
                        contents: o.ui.icon(o.options.icons.strikethrough),
                        tooltip:
                          o.lang.font.strikethrough +
                          o.representShortcut("strikethrough"),
                        click: o.context.createInvokeHandlerAndUpdateState(
                          "editor.strikethrough"
                        ),
                      })
                      .render();
                  }),
                  this.context.memo("button.superscript", function () {
                    return o
                      .button({
                        className: "note-btn-superscript",
                        contents: o.ui.icon(o.options.icons.superscript),
                        tooltip: o.lang.font.superscript,
                        click:
                          o.context.createInvokeHandlerAndUpdateState(
                            "editor.superscript"
                          ),
                      })
                      .render();
                  }),
                  this.context.memo("button.subscript", function () {
                    return o
                      .button({
                        className: "note-btn-subscript",
                        contents: o.ui.icon(o.options.icons.subscript),
                        tooltip: o.lang.font.subscript,
                        click:
                          o.context.createInvokeHandlerAndUpdateState(
                            "editor.subscript"
                          ),
                      })
                      .render();
                  }),
                  this.context.memo("button.fontname", function () {
                    var t = o.context.invoke("editor.currentStyle");
                    return (
                      o.options.addDefaultFonts &&
                        w().each(t["font-family"].split(","), function (t, e) {
                          (e = e.trim().replace(/['"]+/g, "")),
                            o.isFontDeservedToAdd(e) &&
                              -1 === o.options.fontNames.indexOf(e) &&
                              o.options.fontNames.push(e);
                        }),
                      o.ui
                        .buttonGroup([
                          o.button({
                            className: "dropdown-toggle",
                            contents: o.ui.dropdownButtonContents(
                              '<span class="note-current-fontname"></span>',
                              o.options
                            ),
                            tooltip: o.lang.font.name,
                            data: { toggle: "dropdown" },
                          }),
                          o.ui.dropdownCheck({
                            className: "dropdown-fontname",
                            checkClassName: o.options.icons.menuCheck,
                            items: o.options.fontNames.filter(
                              o.isFontInstalled.bind(o)
                            ),
                            title: o.lang.font.name,
                            template: function (t) {
                              return (
                                '<span style="font-family: ' +
                                N.validFontName(t) +
                                '">' +
                                t +
                                "</span>"
                              );
                            },
                            click:
                              o.context.createInvokeHandlerAndUpdateState(
                                "editor.fontName"
                              ),
                          }),
                        ])
                        .render()
                    );
                  }),
                  this.context.memo("button.fontsize", function () {
                    return o.ui
                      .buttonGroup([
                        o.button({
                          className: "dropdown-toggle",
                          contents: o.ui.dropdownButtonContents(
                            '<span class="note-current-fontsize"></span>',
                            o.options
                          ),
                          tooltip: o.lang.font.size,
                          data: { toggle: "dropdown" },
                        }),
                        o.ui.dropdownCheck({
                          className: "dropdown-fontsize",
                          checkClassName: o.options.icons.menuCheck,
                          items: o.options.fontSizes,
                          title: o.lang.font.size,
                          click:
                            o.context.createInvokeHandlerAndUpdateState(
                              "editor.fontSize"
                            ),
                        }),
                      ])
                      .render();
                  }),
                  this.context.memo("button.fontsizeunit", function () {
                    return o.ui
                      .buttonGroup([
                        o.button({
                          className: "dropdown-toggle",
                          contents: o.ui.dropdownButtonContents(
                            '<span class="note-current-fontsizeunit"></span>',
                            o.options
                          ),
                          tooltip: o.lang.font.sizeunit,
                          data: { toggle: "dropdown" },
                        }),
                        o.ui.dropdownCheck({
                          className: "dropdown-fontsizeunit",
                          checkClassName: o.options.icons.menuCheck,
                          items: o.options.fontSizeUnits,
                          title: o.lang.font.sizeunit,
                          click: o.context.createInvokeHandlerAndUpdateState(
                            "editor.fontSizeUnit"
                          ),
                        }),
                      ])
                      .render();
                  }),
                  this.context.memo("button.color", function () {
                    return o.colorPalette(
                      "note-color-all",
                      o.lang.color.recent,
                      !0,
                      !0
                    );
                  }),
                  this.context.memo("button.forecolor", function () {
                    return o.colorPalette(
                      "note-color-fore",
                      o.lang.color.foreground,
                      !1,
                      !0
                    );
                  }),
                  this.context.memo("button.backcolor", function () {
                    return o.colorPalette(
                      "note-color-back",
                      o.lang.color.background,
                      !0,
                      !1
                    );
                  }),
                  this.context.memo("button.ul", function () {
                    return o
                      .button({
                        contents: o.ui.icon(o.options.icons.unorderedlist),
                        tooltip:
                          o.lang.lists.unordered +
                          o.representShortcut("insertUnorderedList"),
                        click: o.context.createInvokeHandler(
                          "editor.insertUnorderedList"
                        ),
                      })
                      .render();
                  }),
                  this.context.memo("button.ol", function () {
                    return o
                      .button({
                        contents: o.ui.icon(o.options.icons.orderedlist),
                        tooltip:
                          o.lang.lists.ordered +
                          o.representShortcut("insertOrderedList"),
                        click: o.context.createInvokeHandler(
                          "editor.insertOrderedList"
                        ),
                      })
                      .render();
                  });
                var n = this.button({
                    contents: this.ui.icon(this.options.icons.alignLeft),
                    tooltip:
                      this.lang.paragraph.left +
                      this.representShortcut("justifyLeft"),
                    click:
                      this.context.createInvokeHandler("editor.justifyLeft"),
                  }),
                  i = this.button({
                    contents: this.ui.icon(this.options.icons.alignCenter),
                    tooltip:
                      this.lang.paragraph.center +
                      this.representShortcut("justifyCenter"),
                    click: this.context.createInvokeHandler(
                      "editor.justifyCenter"
                    ),
                  }),
                  r = this.button({
                    contents: this.ui.icon(this.options.icons.alignRight),
                    tooltip:
                      this.lang.paragraph.right +
                      this.representShortcut("justifyRight"),
                    click: this.context.createInvokeHandler(
                      "editor.justifyRight"
                    ),
                  }),
                  a = this.button({
                    contents: this.ui.icon(this.options.icons.alignJustify),
                    tooltip:
                      this.lang.paragraph.justify +
                      this.representShortcut("justifyFull"),
                    click:
                      this.context.createInvokeHandler("editor.justifyFull"),
                  }),
                  s = this.button({
                    contents: this.ui.icon(this.options.icons.outdent),
                    tooltip:
                      this.lang.paragraph.outdent +
                      this.representShortcut("outdent"),
                    click: this.context.createInvokeHandler("editor.outdent"),
                  }),
                  l = this.button({
                    contents: this.ui.icon(this.options.icons.indent),
                    tooltip:
                      this.lang.paragraph.indent +
                      this.representShortcut("indent"),
                    click: this.context.createInvokeHandler("editor.indent"),
                  });
                this.context.memo("button.justifyLeft", P.invoke(n, "render")),
                  this.context.memo(
                    "button.justifyCenter",
                    P.invoke(i, "render")
                  ),
                  this.context.memo(
                    "button.justifyRight",
                    P.invoke(r, "render")
                  ),
                  this.context.memo(
                    "button.justifyFull",
                    P.invoke(a, "render")
                  ),
                  this.context.memo("button.outdent", P.invoke(s, "render")),
                  this.context.memo("button.indent", P.invoke(l, "render")),
                  this.context.memo("button.paragraph", function () {
                    return o.ui
                      .buttonGroup([
                        o.button({
                          className: "dropdown-toggle",
                          contents: o.ui.dropdownButtonContents(
                            o.ui.icon(o.options.icons.alignLeft),
                            o.options
                          ),
                          tooltip: o.lang.paragraph.paragraph,
                          data: { toggle: "dropdown" },
                        }),
                        o.ui.dropdown([
                          o.ui.buttonGroup({
                            className: "note-align",
                            children: [n, i, r, a],
                          }),
                          o.ui.buttonGroup({
                            className: "note-list",
                            children: [s, l],
                          }),
                        ]),
                      ])
                      .render();
                  }),
                  this.context.memo("button.height", function () {
                    return o.ui
                      .buttonGroup([
                        o.button({
                          className: "dropdown-toggle",
                          contents: o.ui.dropdownButtonContents(
                            o.ui.icon(o.options.icons.textHeight),
                            o.options
                          ),
                          tooltip: o.lang.font.height,
                          data: { toggle: "dropdown" },
                        }),
                        o.ui.dropdownCheck({
                          items: o.options.lineHeights,
                          checkClassName: o.options.icons.menuCheck,
                          className: "dropdown-line-height",
                          title: o.lang.font.height,
                          click:
                            o.context.createInvokeHandler("editor.lineHeight"),
                        }),
                      ])
                      .render();
                  }),
                  this.context.memo("button.table", function () {
                    return o.ui
                      .buttonGroup(
                        [
                          o.button({
                            className: "dropdown-toggle",
                            contents: o.ui.dropdownButtonContents(
                              o.ui.icon(o.options.icons.table),
                              o.options
                            ),
                            tooltip: o.lang.table.table,
                            data: { toggle: "dropdown" },
                          }),
                          o.ui.dropdown({
                            title: o.lang.table.table,
                            className: "note-table",
                            items: [
                              '<div class="note-dimension-picker">',
                              '<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div>',
                              '<div class="note-dimension-picker-highlighted"></div>',
                              '<div class="note-dimension-picker-unhighlighted"></div>',
                              "</div>",
                              '<div class="note-dimension-display">1 x 1</div>',
                            ].join(""),
                          }),
                        ],
                        {
                          callback: function (t) {
                            t.find(".note-dimension-picker-mousecatcher")
                              .css({
                                width: o.options.insertTableMaxSize.col + "em",
                                height: o.options.insertTableMaxSize.row + "em",
                              })
                              .mouseup(
                                o.context.createInvokeHandler(
                                  "editor.insertTable"
                                )
                              )
                              .on("mousemove", o.tableMoveHandler.bind(o));
                          },
                        }
                      )
                      .render();
                  }),
                  this.context.memo("button.link", function () {
                    return o
                      .button({
                        contents: o.ui.icon(o.options.icons.link),
                        tooltip:
                          o.lang.link.link +
                          o.representShortcut("linkDialog.show"),
                        click: o.context.createInvokeHandler("linkDialog.show"),
                      })
                      .render();
                  }),
                  this.context.memo("button.picture", function () {
                    return o
                      .button({
                        contents: o.ui.icon(o.options.icons.picture),
                        tooltip: o.lang.image.image,
                        click:
                          o.context.createInvokeHandler("imageDialog.show"),
                      })
                      .render();
                  }),
                  this.context.memo("button.video", function () {
                    return o
                      .button({
                        contents: o.ui.icon(o.options.icons.video),
                        tooltip: o.lang.video.video,
                        click:
                          o.context.createInvokeHandler("videoDialog.show"),
                      })
                      .render();
                  }),
                  this.context.memo("button.hr", function () {
                    return o
                      .button({
                        contents: o.ui.icon(o.options.icons.minus),
                        tooltip:
                          o.lang.hr.insert +
                          o.representShortcut("insertHorizontalRule"),
                        click: o.context.createInvokeHandler(
                          "editor.insertHorizontalRule"
                        ),
                      })
                      .render();
                  }),
                  this.context.memo("button.fullscreen", function () {
                    return o
                      .button({
                        className: "btn-fullscreen note-codeview-keep",
                        contents: o.ui.icon(o.options.icons.arrowsAlt),
                        tooltip: o.lang.options.fullscreen,
                        click:
                          o.context.createInvokeHandler("fullscreen.toggle"),
                      })
                      .render();
                  }),
                  this.context.memo("button.codeview", function () {
                    return o
                      .button({
                        className: "btn-codeview note-codeview-keep",
                        contents: o.ui.icon(o.options.icons.code),
                        tooltip: o.lang.options.codeview,
                        click: o.context.createInvokeHandler("codeview.toggle"),
                      })
                      .render();
                  }),
                  this.context.memo("button.redo", function () {
                    return o
                      .button({
                        contents: o.ui.icon(o.options.icons.redo),
                        tooltip:
                          o.lang.history.redo + o.representShortcut("redo"),
                        click: o.context.createInvokeHandler("editor.redo"),
                      })
                      .render();
                  }),
                  this.context.memo("button.undo", function () {
                    return o
                      .button({
                        contents: o.ui.icon(o.options.icons.undo),
                        tooltip:
                          o.lang.history.undo + o.representShortcut("undo"),
                        click: o.context.createInvokeHandler("editor.undo"),
                      })
                      .render();
                  }),
                  this.context.memo("button.help", function () {
                    return o
                      .button({
                        contents: o.ui.icon(o.options.icons.question),
                        tooltip: o.lang.options.help,
                        click: o.context.createInvokeHandler("helpDialog.show"),
                      })
                      .render();
                  });
              },
            },
            {
              key: "addImagePopoverButtons",
              value: function () {
                var t = this;
                this.context.memo("button.resizeFull", function () {
                  return t
                    .button({
                      contents: '<span class="note-fontsize-10">100%</span>',
                      tooltip: t.lang.image.resizeFull,
                      click: t.context.createInvokeHandler(
                        "editor.resize",
                        "1"
                      ),
                    })
                    .render();
                }),
                  this.context.memo("button.resizeHalf", function () {
                    return t
                      .button({
                        contents: '<span class="note-fontsize-10">50%</span>',
                        tooltip: t.lang.image.resizeHalf,
                        click: t.context.createInvokeHandler(
                          "editor.resize",
                          "0.5"
                        ),
                      })
                      .render();
                  }),
                  this.context.memo("button.resizeQuarter", function () {
                    return t
                      .button({
                        contents: '<span class="note-fontsize-10">25%</span>',
                        tooltip: t.lang.image.resizeQuarter,
                        click: t.context.createInvokeHandler(
                          "editor.resize",
                          "0.25"
                        ),
                      })
                      .render();
                  }),
                  this.context.memo("button.resizeNone", function () {
                    return t
                      .button({
                        contents: t.ui.icon(t.options.icons.rollback),
                        tooltip: t.lang.image.resizeNone,
                        click: t.context.createInvokeHandler(
                          "editor.resize",
                          "0"
                        ),
                      })
                      .render();
                  }),
                  this.context.memo("button.floatLeft", function () {
                    return t
                      .button({
                        contents: t.ui.icon(t.options.icons.floatLeft),
                        tooltip: t.lang.image.floatLeft,
                        click: t.context.createInvokeHandler(
                          "editor.floatMe",
                          "left"
                        ),
                      })
                      .render();
                  }),
                  this.context.memo("button.floatRight", function () {
                    return t
                      .button({
                        contents: t.ui.icon(t.options.icons.floatRight),
                        tooltip: t.lang.image.floatRight,
                        click: t.context.createInvokeHandler(
                          "editor.floatMe",
                          "right"
                        ),
                      })
                      .render();
                  }),
                  this.context.memo("button.floatNone", function () {
                    return t
                      .button({
                        contents: t.ui.icon(t.options.icons.rollback),
                        tooltip: t.lang.image.floatNone,
                        click: t.context.createInvokeHandler(
                          "editor.floatMe",
                          "none"
                        ),
                      })
                      .render();
                  }),
                  this.context.memo("button.removeMedia", function () {
                    return t
                      .button({
                        contents: t.ui.icon(t.options.icons.trash),
                        tooltip: t.lang.image.remove,
                        click:
                          t.context.createInvokeHandler("editor.removeMedia"),
                      })
                      .render();
                  });
              },
            },
            {
              key: "addLinkPopoverButtons",
              value: function () {
                var t = this;
                this.context.memo("button.linkDialogShow", function () {
                  return t
                    .button({
                      contents: t.ui.icon(t.options.icons.link),
                      tooltip: t.lang.link.edit,
                      click: t.context.createInvokeHandler("linkDialog.show"),
                    })
                    .render();
                }),
                  this.context.memo("button.unlink", function () {
                    return t
                      .button({
                        contents: t.ui.icon(t.options.icons.unlink),
                        tooltip: t.lang.link.unlink,
                        click: t.context.createInvokeHandler("editor.unlink"),
                      })
                      .render();
                  });
              },
            },
            {
              key: "addTablePopoverButtons",
              value: function () {
                var t = this;
                this.context.memo("button.addRowUp", function () {
                  return t
                    .button({
                      className: "btn-md",
                      contents: t.ui.icon(t.options.icons.rowAbove),
                      tooltip: t.lang.table.addRowAbove,
                      click: t.context.createInvokeHandler(
                        "editor.addRow",
                        "top"
                      ),
                    })
                    .render();
                }),
                  this.context.memo("button.addRowDown", function () {
                    return t
                      .button({
                        className: "btn-md",
                        contents: t.ui.icon(t.options.icons.rowBelow),
                        tooltip: t.lang.table.addRowBelow,
                        click: t.context.createInvokeHandler(
                          "editor.addRow",
                          "bottom"
                        ),
                      })
                      .render();
                  }),
                  this.context.memo("button.addColLeft", function () {
                    return t
                      .button({
                        className: "btn-md",
                        contents: t.ui.icon(t.options.icons.colBefore),
                        tooltip: t.lang.table.addColLeft,
                        click: t.context.createInvokeHandler(
                          "editor.addCol",
                          "left"
                        ),
                      })
                      .render();
                  }),
                  this.context.memo("button.addColRight", function () {
                    return t
                      .button({
                        className: "btn-md",
                        contents: t.ui.icon(t.options.icons.colAfter),
                        tooltip: t.lang.table.addColRight,
                        click: t.context.createInvokeHandler(
                          "editor.addCol",
                          "right"
                        ),
                      })
                      .render();
                  }),
                  this.context.memo("button.deleteRow", function () {
                    return t
                      .button({
                        className: "btn-md",
                        contents: t.ui.icon(t.options.icons.rowRemove),
                        tooltip: t.lang.table.delRow,
                        click:
                          t.context.createInvokeHandler("editor.deleteRow"),
                      })
                      .render();
                  }),
                  this.context.memo("button.deleteCol", function () {
                    return t
                      .button({
                        className: "btn-md",
                        contents: t.ui.icon(t.options.icons.colRemove),
                        tooltip: t.lang.table.delCol,
                        click:
                          t.context.createInvokeHandler("editor.deleteCol"),
                      })
                      .render();
                  }),
                  this.context.memo("button.deleteTable", function () {
                    return t
                      .button({
                        className: "btn-md",
                        contents: t.ui.icon(t.options.icons.trash),
                        tooltip: t.lang.table.delTable,
                        click:
                          t.context.createInvokeHandler("editor.deleteTable"),
                      })
                      .render();
                  });
              },
            },
            {
              key: "build",
              value: function (t, e) {
                for (var n = 0, o = e.length; n < o; n++) {
                  for (
                    var i = e[n],
                      r = Array.isArray(i) ? i[0] : i,
                      a = Array.isArray(i)
                        ? 1 === i.length
                          ? [i[0]]
                          : i[1]
                        : [i],
                      s = this.ui
                        .buttonGroup({ className: "note-" + r })
                        .render(),
                      l = 0,
                      c = a.length;
                    l < c;
                    l++
                  ) {
                    var u = this.context.memo("button." + a[l]);
                    u && s.append("function" == typeof u ? u(this.context) : u);
                  }
                  s.appendTo(t);
                }
              },
            },
            {
              key: "updateCurrentStyle",
              value: function (t) {
                var e,
                  o,
                  i,
                  r,
                  a,
                  t = t || this.$toolbar,
                  n = this.context.invoke("editor.currentStyle");
                this.updateBtnStates(t, {
                  ".note-btn-bold": function () {
                    return "bold" === n["font-bold"];
                  },
                  ".note-btn-italic": function () {
                    return "italic" === n["font-italic"];
                  },
                  ".note-btn-underline": function () {
                    return "underline" === n["font-underline"];
                  },
                  ".note-btn-subscript": function () {
                    return "subscript" === n["font-subscript"];
                  },
                  ".note-btn-superscript": function () {
                    return "superscript" === n["font-superscript"];
                  },
                  ".note-btn-strikethrough": function () {
                    return "strikethrough" === n["font-strikethrough"];
                  },
                }),
                  n["font-family"] &&
                    ((e = n["font-family"].split(",").map(function (t) {
                      return t
                        .replace(/[\'\"]/g, "")
                        .replace(/\s+$/, "")
                        .replace(/^\s+/, "");
                    })),
                    (o = R.find(e, this.isFontInstalled.bind(this))),
                    t.find(".dropdown-fontname a").each(function (t, e) {
                      var e = w()(e),
                        n = e.data("value") + "" == o + "";
                      e.toggleClass("checked", n);
                    }),
                    t
                      .find(".note-current-fontname")
                      .text(o)
                      .css("font-family", o)),
                  n["font-size"] &&
                    ((i = n["font-size"]),
                    t.find(".dropdown-fontsize a").each(function (t, e) {
                      var e = w()(e),
                        n = e.data("value") + "" == i + "";
                      e.toggleClass("checked", n);
                    }),
                    t.find(".note-current-fontsize").text(i),
                    (r = n["font-size-unit"]),
                    t.find(".dropdown-fontsizeunit a").each(function (t, e) {
                      var e = w()(e),
                        n = e.data("value") + "" == r + "";
                      e.toggleClass("checked", n);
                    }),
                    t.find(".note-current-fontsizeunit").text(r)),
                  n["line-height"] &&
                    ((a = n["line-height"]),
                    t.find(".dropdown-line-height a").each(function (t, e) {
                      var n = w()(e),
                        e = w()(e).data("value") + "" == a + "";
                      n.toggleClass("checked", e);
                    }),
                    t.find(".note-current-line-height").text(a));
              },
            },
            {
              key: "updateBtnStates",
              value: function (n, t) {
                var o = this;
                w().each(t, function (t, e) {
                  o.ui.toggleBtnActive(n.find(t), e());
                });
              },
            },
            {
              key: "tableMoveHandler",
              value: function (t) {
                var e = w()(t.target.parentNode),
                  n = e.next(),
                  o = e.find(".note-dimension-picker-mousecatcher"),
                  i = e.find(".note-dimension-picker-highlighted"),
                  e = e.find(".note-dimension-picker-unhighlighted");
                r =
                  void 0 === t.offsetX
                    ? ((r = w()(t.target).offset()),
                      { x: t.pageX - r.left, y: t.pageY - r.top })
                    : { x: t.offsetX, y: t.offsetY };
                var t = Math.ceil(r.x / 18) || 1,
                  r = Math.ceil(r.y / 18) || 1;
                i.css({ width: t + "em", height: r + "em" }),
                  o.data("value", t + "x" + r),
                  3 < t &&
                    t < this.options.insertTableMaxSize.col &&
                    e.css({ width: t + 1 + "em" }),
                  3 < r &&
                    r < this.options.insertTableMaxSize.row &&
                    e.css({ height: r + 1 + "em" }),
                  n.html(t + " x " + r);
              },
            },
          ]) && Qt(t.prototype, n),
          o && Qt(t, o),
          e
        );
      })();
      function Jt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var te = (function () {
        function e(t) {
          if (!(this instanceof e))
            throw new TypeError("Cannot call a class as a function");
          (this.context = t),
            (this.$window = w()(window)),
            (this.$document = w()(document)),
            (this.ui = w().summernote.ui),
            (this.$note = t.layoutInfo.note),
            (this.$editor = t.layoutInfo.editor),
            (this.$toolbar = t.layoutInfo.toolbar),
            (this.$editable = t.layoutInfo.editable),
            (this.$statusbar = t.layoutInfo.statusbar),
            (this.options = t.options),
            (this.isFollowing = !1),
            (this.followScroll = this.followScroll.bind(this));
        }
        var t, n, o;
        return (
          (t = e),
          (n = [
            {
              key: "shouldInitialize",
              value: function () {
                return !this.options.airMode;
              },
            },
            {
              key: "initialize",
              value: function () {
                var t = this;
                (this.options.toolbar = this.options.toolbar || []),
                  this.options.toolbar.length
                    ? this.context.invoke(
                        "buttons.build",
                        this.$toolbar,
                        this.options.toolbar
                      )
                    : this.$toolbar.hide(),
                  this.options.toolbarContainer &&
                    this.$toolbar.appendTo(this.options.toolbarContainer),
                  this.changeContainer(!1),
                  this.$note.on(
                    "summernote.keyup summernote.mouseup summernote.change",
                    function () {
                      t.context.invoke("buttons.updateCurrentStyle");
                    }
                  ),
                  this.context.invoke("buttons.updateCurrentStyle"),
                  this.options.followingToolbar &&
                    this.$window.on("scroll resize", this.followScroll);
              },
            },
            {
              key: "destroy",
              value: function () {
                this.$toolbar.children().remove(),
                  this.options.followingToolbar &&
                    this.$window.off("scroll resize", this.followScroll);
              },
            },
            {
              key: "followScroll",
              value: function () {
                if (this.$editor.hasClass("fullscreen")) return !1;
                var t = this.$editor.outerHeight(),
                  e = this.$editor.width(),
                  n = this.$toolbar.height(),
                  o = this.$statusbar.height(),
                  i = 0,
                  r =
                    (this.options.otherStaticBar &&
                      (i = w()(this.options.otherStaticBar).outerHeight()),
                    this.$document.scrollTop()),
                  a = this.$editor.offset().top,
                  s = a - i,
                  a = a + t - i - n - o;
                !this.isFollowing && s < r && r < a - n
                  ? ((this.isFollowing = !0),
                    this.$editable.css({
                      marginTop: this.$toolbar.outerHeight(),
                    }),
                    this.$toolbar.css({
                      position: "fixed",
                      top: i,
                      width: e,
                      zIndex: 1e3,
                    }))
                  : this.isFollowing &&
                    (r < s || a < r) &&
                    ((this.isFollowing = !1),
                    this.$toolbar.css({
                      position: "relative",
                      top: 0,
                      width: "100%",
                      zIndex: "auto",
                    }),
                    this.$editable.css({ marginTop: "" }));
              },
            },
            {
              key: "changeContainer",
              value: function (t) {
                t
                  ? this.$toolbar.prependTo(this.$editor)
                  : this.options.toolbarContainer &&
                    this.$toolbar.appendTo(this.options.toolbarContainer),
                  this.options.followingToolbar && this.followScroll();
              },
            },
            {
              key: "updateFullscreen",
              value: function (t) {
                this.ui.toggleBtnActive(
                  this.$toolbar.find(".btn-fullscreen"),
                  t
                ),
                  this.changeContainer(t);
              },
            },
            {
              key: "updateCodeview",
              value: function (t) {
                this.ui.toggleBtnActive(this.$toolbar.find(".btn-codeview"), t),
                  t ? this.deactivate() : this.activate();
              },
            },
            {
              key: "activate",
              value: function (t) {
                var e = this.$toolbar.find("button");
                t || (e = e.not(".note-codeview-keep")),
                  this.ui.toggleBtn(e, !0);
              },
            },
            {
              key: "deactivate",
              value: function (t) {
                var e = this.$toolbar.find("button");
                t || (e = e.not(".note-codeview-keep")),
                  this.ui.toggleBtn(e, !1);
              },
            },
          ]) && Jt(t.prototype, n),
          o && Jt(t, o),
          e
        );
      })();
      function ee(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var ne = (function () {
        function e(t) {
          if (!(this instanceof e))
            throw new TypeError("Cannot call a class as a function");
          (this.context = t),
            (this.ui = w().summernote.ui),
            (this.$body = w()(document.body)),
            (this.$editor = t.layoutInfo.editor),
            (this.options = t.options),
            (this.lang = this.options.langInfo),
            t.memo(
              "help.linkDialog.show",
              this.options.langInfo.help["linkDialog.show"]
            );
        }
        var t, n, o;
        return (
          (t = e),
          (n = [
            {
              key: "initialize",
              value: function () {
                var t = this.options.dialogsInBody
                    ? this.$body
                    : this.options.container,
                  e = [
                    '<div class="form-group note-form-group">',
                    '<label for="note-dialog-link-txt-'
                      .concat(this.options.id, '" class="note-form-label">')
                      .concat(this.lang.link.textToDisplay, "</label>"),
                    '<input id="note-dialog-link-txt-'.concat(
                      this.options.id,
                      '" class="note-link-text form-control note-form-control note-input" type="text"/>'
                    ),
                    "</div>",
                    '<div class="form-group note-form-group">',
                    '<label for="note-dialog-link-url-'
                      .concat(this.options.id, '" class="note-form-label">')
                      .concat(this.lang.link.url, "</label>"),
                    '<input id="note-dialog-link-url-'.concat(
                      this.options.id,
                      '" class="note-link-url form-control note-form-control note-input" type="text" value="http://"/>'
                    ),
                    "</div>",
                    this.options.disableLinkTarget
                      ? ""
                      : w()("<div></div>")
                          .append(
                            this.ui
                              .checkbox({
                                className: "sn-checkbox-open-in-new-window",
                                text: this.lang.link.openInNewWindow,
                                checked: !0,
                              })
                              .render()
                          )
                          .html(),
                    w()("<div></div>")
                      .append(
                        this.ui
                          .checkbox({
                            className: "sn-checkbox-use-protocol",
                            text: this.lang.link.useProtocol,
                            checked: !0,
                          })
                          .render()
                      )
                      .html(),
                  ].join(""),
                  n = '<input type="button" href="#" class="'
                    .concat(
                      "btn btn-primary note-btn note-btn-primary note-link-btn",
                      '" value="'
                    )
                    .concat(this.lang.link.insert, '" disabled>');
                this.$dialog = this.ui
                  .dialog({
                    className: "link-dialog",
                    title: this.lang.link.insert,
                    fade: this.options.dialogsFade,
                    body: e,
                    footer: n,
                  })
                  .render()
                  .appendTo(t);
              },
            },
            {
              key: "destroy",
              value: function () {
                this.ui.hideDialog(this.$dialog), this.$dialog.remove();
              },
            },
            {
              key: "bindEnterKey",
              value: function (t, e) {
                t.on("keypress", function (t) {
                  t.keyCode === F.code.ENTER &&
                    (t.preventDefault(), e.trigger("click"));
                });
              },
            },
            {
              key: "toggleLinkBtn",
              value: function (t, e, n) {
                this.ui.toggleBtn(t, e.val() && n.val());
              },
            },
            {
              key: "showLinkDialog",
              value: function (s) {
                var l = this;
                return w()
                  .Deferred(function (e) {
                    var n = l.$dialog.find(".note-link-text"),
                      o = l.$dialog.find(".note-link-url"),
                      i = l.$dialog.find(".note-link-btn"),
                      r = l.$dialog.find(
                        ".sn-checkbox-open-in-new-window input[type=checkbox]"
                      ),
                      a = l.$dialog.find(
                        ".sn-checkbox-use-protocol input[type=checkbox]"
                      );
                    l.ui.onDialogShown(l.$dialog, function () {
                      l.context.triggerEvent("dialog.shown"),
                        !s.url && P.isValidUrl(s.text) && (s.url = s.text),
                        n
                          .on("input paste propertychange", function () {
                            (s.text = n.val()), l.toggleLinkBtn(i, n, o);
                          })
                          .val(s.text),
                        o
                          .on("input paste propertychange", function () {
                            s.text || n.val(o.val()), l.toggleLinkBtn(i, n, o);
                          })
                          .val(s.url),
                        N.isSupportTouch || o.trigger("focus"),
                        l.toggleLinkBtn(i, n, o),
                        l.bindEnterKey(o, i),
                        l.bindEnterKey(n, i);
                      var t =
                          void 0 !== s.isNewWindow
                            ? s.isNewWindow
                            : l.context.options.linkTargetBlank,
                        t =
                          (r.prop("checked", t),
                          !s.url && l.context.options.useProtocol);
                      a.prop("checked", t),
                        i.one("click", function (t) {
                          t.preventDefault(),
                            e.resolve({
                              range: s.range,
                              url: o.val(),
                              text: n.val(),
                              isNewWindow: r.is(":checked"),
                              checkProtocol: a.is(":checked"),
                            }),
                            l.ui.hideDialog(l.$dialog);
                        });
                    }),
                      l.ui.onDialogHidden(l.$dialog, function () {
                        n.off(),
                          o.off(),
                          i.off(),
                          "pending" === e.state() && e.reject();
                      }),
                      l.ui.showDialog(l.$dialog);
                  })
                  .promise();
              },
            },
            {
              key: "show",
              value: function () {
                var e = this,
                  t = this.context.invoke("editor.getLinkInfo");
                this.context.invoke("editor.saveRange"),
                  this.showLinkDialog(t)
                    .then(function (t) {
                      e.context.invoke("editor.restoreRange"),
                        e.context.invoke("editor.createLink", t);
                    })
                    .fail(function () {
                      e.context.invoke("editor.restoreRange");
                    });
              },
            },
          ]) && ee(t.prototype, n),
          o && ee(t, o),
          e
        );
      })();
      function oe(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var ie = (function () {
        function e(t) {
          var n = this;
          if (!(this instanceof e))
            throw new TypeError("Cannot call a class as a function");
          (this.context = t),
            (this.ui = w().summernote.ui),
            (this.options = t.options),
            (this.events = {
              "summernote.keyup summernote.mouseup summernote.change summernote.scroll":
                function () {
                  n.update();
                },
              "summernote.disable summernote.dialog.shown": function () {
                n.hide();
              },
              "summernote.blur": function (t, e) {
                (e.originalEvent &&
                  e.originalEvent.relatedTarget &&
                  n.$popover[0].contains(e.originalEvent.relatedTarget)) ||
                  n.hide();
              },
            });
        }
        var t, n, o;
        return (
          (t = e),
          (n = [
            {
              key: "shouldInitialize",
              value: function () {
                return !R.isEmpty(this.options.popover.link);
              },
            },
            {
              key: "initialize",
              value: function () {
                this.$popover = this.ui
                  .popover({
                    className: "note-link-popover",
                    callback: function (t) {
                      t.find(".popover-content,.note-popover-content").prepend(
                        '<span><a target="_blank"></a>&nbsp;</span>'
                      );
                    },
                  })
                  .render()
                  .appendTo(this.options.container);
                var t = this.$popover.find(
                  ".popover-content,.note-popover-content"
                );
                this.context.invoke(
                  "buttons.build",
                  t,
                  this.options.popover.link
                ),
                  this.$popover.on("mousedown", function (t) {
                    t.preventDefault();
                  });
              },
            },
            {
              key: "destroy",
              value: function () {
                this.$popover.remove();
              },
            },
            {
              key: "update",
              value: function () {
                var t, e;
                this.context.invoke("editor.hasFocus") &&
                (e = this.context.invoke(
                  "editor.getLastRange"
                )).isCollapsed() &&
                e.isOnAnchor()
                  ? ((e = L.ancestor(e.sc, L.isAnchor)),
                    (t = w()(e).attr("href")),
                    this.$popover.find("a").attr("href", t).text(t),
                    (t = L.posFromPlaceholder(e)),
                    (e = w()(this.options.container).offset()),
                    (t.top -= e.top),
                    (t.left -= e.left),
                    this.$popover.css({
                      display: "block",
                      left: t.left,
                      top: t.top,
                    }))
                  : this.hide();
              },
            },
            {
              key: "hide",
              value: function () {
                this.$popover.hide();
              },
            },
          ]) && oe(t.prototype, n),
          o && oe(t, o),
          e
        );
      })();
      function re(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var ae = (function () {
        function e(t) {
          if (!(this instanceof e))
            throw new TypeError("Cannot call a class as a function");
          (this.context = t),
            (this.ui = w().summernote.ui),
            (this.$body = w()(document.body)),
            (this.$editor = t.layoutInfo.editor),
            (this.options = t.options),
            (this.lang = this.options.langInfo);
        }
        var t, n, o;
        return (
          (t = e),
          (n = [
            {
              key: "initialize",
              value: function () {
                var t = "",
                  e =
                    (this.options.maximumImageFileSize &&
                      ((e = Math.floor(
                        Math.log(this.options.maximumImageFileSize) /
                          Math.log(1024)
                      )),
                      (e =
                        +(
                          this.options.maximumImageFileSize / Math.pow(1024, e)
                        ).toFixed(2) +
                        " " +
                        " KMGTP"[e] +
                        "B"),
                      (t = "<small>".concat(
                        this.lang.image.maximumFileSize + " : " + e,
                        "</small>"
                      ))),
                    this.options.dialogsInBody
                      ? this.$body
                      : this.options.container),
                  t = [
                    '<div class="form-group note-form-group note-group-select-from-files">',
                    '<label for="note-dialog-image-file-' +
                      this.options.id +
                      '" class="note-form-label">' +
                      this.lang.image.selectFromFiles +
                      "</label>",
                    '<input id="note-dialog-image-file-' +
                      this.options.id +
                      '" class="note-image-input form-control-file note-form-control note-input" ',
                    ' type="file" name="files" accept="' +
                      this.options.acceptImageFileTypes +
                      '" multiple="multiple"/>',
                    t,
                    "</div>",
                    '<div class="form-group note-group-image-url">',
                    '<label for="note-dialog-image-url-' +
                      this.options.id +
                      '" class="note-form-label">' +
                      this.lang.image.url +
                      "</label>",
                    '<input id="note-dialog-image-url-' +
                      this.options.id +
                      '" class="note-image-url form-control note-form-control note-input" type="text"/>',
                    "</div>",
                  ].join(""),
                  n = '<input type="button" href="#" class="'
                    .concat(
                      "btn btn-primary note-btn note-btn-primary note-image-btn",
                      '" value="'
                    )
                    .concat(this.lang.image.insert, '" disabled>');
                this.$dialog = this.ui
                  .dialog({
                    title: this.lang.image.insert,
                    fade: this.options.dialogsFade,
                    body: t,
                    footer: n,
                  })
                  .render()
                  .appendTo(e);
              },
            },
            {
              key: "destroy",
              value: function () {
                this.ui.hideDialog(this.$dialog), this.$dialog.remove();
              },
            },
            {
              key: "bindEnterKey",
              value: function (t, e) {
                t.on("keypress", function (t) {
                  t.keyCode === F.code.ENTER &&
                    (t.preventDefault(), e.trigger("click"));
                });
              },
            },
            {
              key: "show",
              value: function () {
                var e = this;
                this.context.invoke("editor.saveRange"),
                  this.showImageDialog()
                    .then(function (t) {
                      e.ui.hideDialog(e.$dialog),
                        e.context.invoke("editor.restoreRange"),
                        "string" == typeof t
                          ? e.options.callbacks.onImageLinkInsert
                            ? e.context.triggerEvent("image.link.insert", t)
                            : e.context.invoke("editor.insertImage", t)
                          : e.context.invoke(
                              "editor.insertImagesOrCallback",
                              t
                            );
                    })
                    .fail(function () {
                      e.context.invoke("editor.restoreRange");
                    });
              },
            },
            {
              key: "showImageDialog",
              value: function () {
                var i = this;
                return w().Deferred(function (e) {
                  var t = i.$dialog.find(".note-image-input"),
                    n = i.$dialog.find(".note-image-url"),
                    o = i.$dialog.find(".note-image-btn");
                  i.ui.onDialogShown(i.$dialog, function () {
                    i.context.triggerEvent("dialog.shown"),
                      t.replaceWith(
                        t
                          .clone()
                          .on("change", function (t) {
                            e.resolve(t.target.files || t.target.value);
                          })
                          .val("")
                      ),
                      n
                        .on("input paste propertychange", function () {
                          i.ui.toggleBtn(o, n.val());
                        })
                        .val(""),
                      N.isSupportTouch || n.trigger("focus"),
                      o.click(function (t) {
                        t.preventDefault(), e.resolve(n.val());
                      }),
                      i.bindEnterKey(n, o);
                  }),
                    i.ui.onDialogHidden(i.$dialog, function () {
                      t.off(),
                        n.off(),
                        o.off(),
                        "pending" === e.state() && e.reject();
                    }),
                    i.ui.showDialog(i.$dialog);
                });
              },
            },
          ]) && re(t.prototype, n),
          o && re(t, o),
          e
        );
      })();
      function se(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var le = (function () {
        function e(t) {
          var n = this;
          if (!(this instanceof e))
            throw new TypeError("Cannot call a class as a function");
          (this.context = t),
            (this.ui = w().summernote.ui),
            (this.editable = t.layoutInfo.editable[0]),
            (this.options = t.options),
            (this.events = {
              "summernote.disable summernote.dialog.shown": function () {
                n.hide();
              },
              "summernote.blur": function (t, e) {
                (e.originalEvent &&
                  e.originalEvent.relatedTarget &&
                  n.$popover[0].contains(e.originalEvent.relatedTarget)) ||
                  n.hide();
              },
            });
        }
        var t, n, o;
        return (
          (t = e),
          (n = [
            {
              key: "shouldInitialize",
              value: function () {
                return !R.isEmpty(this.options.popover.image);
              },
            },
            {
              key: "initialize",
              value: function () {
                this.$popover = this.ui
                  .popover({ className: "note-image-popover" })
                  .render()
                  .appendTo(this.options.container);
                var t = this.$popover.find(
                  ".popover-content,.note-popover-content"
                );
                this.context.invoke(
                  "buttons.build",
                  t,
                  this.options.popover.image
                ),
                  this.$popover.on("mousedown", function (t) {
                    t.preventDefault();
                  });
              },
            },
            {
              key: "destroy",
              value: function () {
                this.$popover.remove();
              },
            },
            {
              key: "update",
              value: function (t, e) {
                var n, o;
                L.isImg(t)
                  ? ((t = w()(t).offset()),
                    (n = w()(this.options.container).offset()),
                    (o = {}),
                    this.options.popatmouse
                      ? ((o.left = e.pageX - 20), (o.top = e.pageY))
                      : (o = t),
                    (o.top -= n.top),
                    (o.left -= n.left),
                    this.$popover.css({
                      display: "block",
                      left: o.left,
                      top: o.top,
                    }))
                  : this.hide();
              },
            },
            {
              key: "hide",
              value: function () {
                this.$popover.hide();
              },
            },
          ]) && se(t.prototype, n),
          o && se(t, o),
          e
        );
      })();
      function ce(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var ue = (function () {
        function e(t) {
          var n = this;
          if (!(this instanceof e))
            throw new TypeError("Cannot call a class as a function");
          (this.context = t),
            (this.ui = w().summernote.ui),
            (this.options = t.options),
            (this.events = {
              "summernote.mousedown": function (t, e) {
                n.update(e.target);
              },
              "summernote.keyup summernote.scroll summernote.change":
                function () {
                  n.update();
                },
              "summernote.disable summernote.dialog.shown": function () {
                n.hide();
              },
              "summernote.blur": function (t, e) {
                (e.originalEvent &&
                  e.originalEvent.relatedTarget &&
                  n.$popover[0].contains(e.originalEvent.relatedTarget)) ||
                  n.hide();
              },
            });
        }
        var t, n, o;
        return (
          (t = e),
          (n = [
            {
              key: "shouldInitialize",
              value: function () {
                return !R.isEmpty(this.options.popover.table);
              },
            },
            {
              key: "initialize",
              value: function () {
                this.$popover = this.ui
                  .popover({ className: "note-table-popover" })
                  .render()
                  .appendTo(this.options.container);
                var t = this.$popover.find(
                  ".popover-content,.note-popover-content"
                );
                this.context.invoke(
                  "buttons.build",
                  t,
                  this.options.popover.table
                ),
                  N.isFF &&
                    document.execCommand("enableInlineTableEditing", !1, !1),
                  this.$popover.on("mousedown", function (t) {
                    t.preventDefault();
                  });
              },
            },
            {
              key: "destroy",
              value: function () {
                this.$popover.remove();
              },
            },
            {
              key: "update",
              value: function (t) {
                var e, n;
                return (
                  !this.context.isDisabled() &&
                  ((e =
                    L.isCell(t) ||
                    L.isCell(null == t ? void 0 : t.parentElement))
                    ? ((t = L.posFromPlaceholder(t)),
                      (n = w()(this.options.container).offset()),
                      (t.top -= n.top),
                      (t.left -= n.left),
                      this.$popover.css({
                        display: "block",
                        left: t.left,
                        top: t.top,
                      }))
                    : this.hide(),
                  e)
                );
              },
            },
            {
              key: "hide",
              value: function () {
                this.$popover.hide();
              },
            },
          ]) && ce(t.prototype, n),
          o && ce(t, o),
          e
        );
      })();
      function de(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var he = (function () {
        function e(t) {
          if (!(this instanceof e))
            throw new TypeError("Cannot call a class as a function");
          (this.context = t),
            (this.ui = w().summernote.ui),
            (this.$body = w()(document.body)),
            (this.$editor = t.layoutInfo.editor),
            (this.options = t.options),
            (this.lang = this.options.langInfo);
        }
        var t, n, o;
        return (
          (t = e),
          (n = [
            {
              key: "initialize",
              value: function () {
                var t = this.options.dialogsInBody
                    ? this.$body
                    : this.options.container,
                  e = [
                    '<div class="form-group note-form-group row-fluid">',
                    '<label for="note-dialog-video-url-'
                      .concat(this.options.id, '" class="note-form-label">')
                      .concat(
                        this.lang.video.url,
                        ' <small class="text-muted">'
                      )
                      .concat(this.lang.video.providers, "</small></label>"),
                    '<input id="note-dialog-video-url-'.concat(
                      this.options.id,
                      '" class="note-video-url form-control note-form-control note-input" type="text"/>'
                    ),
                    "</div>",
                  ].join(""),
                  n = '<input type="button" href="#" class="'
                    .concat(
                      "btn btn-primary note-btn note-btn-primary note-video-btn",
                      '" value="'
                    )
                    .concat(this.lang.video.insert, '" disabled>');
                this.$dialog = this.ui
                  .dialog({
                    title: this.lang.video.insert,
                    fade: this.options.dialogsFade,
                    body: e,
                    footer: n,
                  })
                  .render()
                  .appendTo(t);
              },
            },
            {
              key: "destroy",
              value: function () {
                this.ui.hideDialog(this.$dialog), this.$dialog.remove();
              },
            },
            {
              key: "bindEnterKey",
              value: function (t, e) {
                t.on("keypress", function (t) {
                  t.keyCode === F.code.ENTER &&
                    (t.preventDefault(), e.trigger("click"));
                });
              },
            },
            {
              key: "createVideoNode",
              value: function (t) {
                var e = t.match(
                    /\/\/(?:(?:www|m)\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w|-]{11})(?:(?:[\?&]t=)(\S+))?$/
                  ),
                  n = t.match(
                    /(?:\.|\/\/)drive\.google\.com\/file\/d\/(.[a-zA-Z0-9_-]*)\/view/
                  ),
                  o = t.match(
                    /(?:www\.|\/\/)instagram\.com\/p\/(.[a-zA-Z0-9_-]*)/
                  ),
                  i = t.match(/\/\/vine\.co\/v\/([a-zA-Z0-9]+)/),
                  r = t.match(
                    /\/\/(player\.)?vimeo\.com\/([a-z]*\/)*(\d+)[?]?.*/
                  ),
                  a = t.match(
                    /.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/
                  ),
                  s = t.match(/\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/),
                  l = t.match(
                    /\/\/(.*)\/videos\/watch\/([^?]*)(?:\?(?:start=(\w*))?(?:&stop=(\w*))?(?:&loop=([10]))?(?:&autoplay=([10]))?(?:&muted=([10]))?)?/
                  ),
                  c = t.match(/\/\/v\.qq\.com.*?vid=(.+)/),
                  u = t.match(
                    /\/\/v\.qq\.com\/x?\/?(page|cover).*?\/([^\/]+)\.html\??.*/
                  ),
                  d = t.match(/^.+.(mp4|m4v)$/),
                  h = t.match(/^.+.(ogg|ogv)$/),
                  f = t.match(/^.+.(webm)$/),
                  p = t.match(
                    /(?:www\.|\/\/)facebook\.com\/([^\/]+)\/videos\/([0-9]+)/
                  );
                if (e && 11 === e[1].length) {
                  var m = e[1],
                    v = 0;
                  if (void 0 !== e[2]) {
                    var g = e[2].match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
                    if (g)
                      for (
                        var b = [3600, 60, 1], y = 0, k = b.length;
                        y < k;
                        y++
                      )
                        v +=
                          void 0 !== g[y + 1]
                            ? b[y] * parseInt(g[y + 1], 10)
                            : 0;
                  }
                  m = w()("<iframe>")
                    .attr("frameborder", 0)
                    .attr(
                      "src",
                      "//www.youtube.com/embed/" +
                        m +
                        (0 < v ? "?start=" + v : "")
                    )
                    .attr("width", "640")
                    .attr("height", "360");
                } else if (n && n[0].length)
                  m = w()("<iframe>")
                    .attr("frameborder", 0)
                    .attr(
                      "src",
                      "https://drive.google.com/file/d/" + n[1] + "/preview"
                    )
                    .attr("width", "640")
                    .attr("height", "480");
                else if (o && o[0].length)
                  m = w()("<iframe>")
                    .attr("frameborder", 0)
                    .attr("src", "https://instagram.com/p/" + o[1] + "/embed/")
                    .attr("width", "612")
                    .attr("height", "710")
                    .attr("scrolling", "no")
                    .attr("allowtransparency", "true");
                else if (i && i[0].length)
                  m = w()("<iframe>")
                    .attr("frameborder", 0)
                    .attr("src", i[0] + "/embed/simple")
                    .attr("width", "600")
                    .attr("height", "600")
                    .attr("class", "vine-embed");
                else if (r && r[3].length)
                  m = w()(
                    "<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>"
                  )
                    .attr("frameborder", 0)
                    .attr("src", "//player.vimeo.com/video/" + r[3])
                    .attr("width", "640")
                    .attr("height", "360");
                else if (a && a[2].length)
                  m = w()("<iframe>")
                    .attr("frameborder", 0)
                    .attr("src", "//www.dailymotion.com/embed/video/" + a[2])
                    .attr("width", "640")
                    .attr("height", "360");
                else if (s && s[1].length)
                  m = w()(
                    "<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>"
                  )
                    .attr("frameborder", 0)
                    .attr("height", "498")
                    .attr("width", "510")
                    .attr("src", "//player.youku.com/embed/" + s[1]);
                else if (l && l[0].length) {
                  (e = 0),
                    (n = ("undefined" !== l[2] && (e = l[2]), 0)),
                    (o = ("undefined" !== l[3] && (n = l[3]), 0)),
                    (i = ("undefined" !== l[4] && (o = l[4]), 0)),
                    (r = ("undefined" !== l[5] && (i = l[5]), 0));
                  "undefined" !== l[6] && (r = l[6]),
                    (m = w()(
                      '<iframe allowfullscreen sandbox="allow-same-origin allow-scripts allow-popups">'
                    )
                      .attr("frameborder", 0)
                      .attr(
                        "src",
                        "//" +
                          l[1] +
                          "/videos/embed/" +
                          l[2] +
                          "?loop=" +
                          o +
                          "&autoplay=" +
                          i +
                          "&muted=" +
                          r +
                          (0 < e ? "&start=" + e : "") +
                          (0 < n ? "&end=" + v : "")
                      )
                      .attr("width", "560")
                      .attr("height", "315"));
                } else if ((c && c[1].length) || (u && u[2].length))
                  (a = c && c[1].length ? c[1] : u[2]),
                    (m = w()(
                      "<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>"
                    )
                      .attr("frameborder", 0)
                      .attr("height", "310")
                      .attr("width", "500")
                      .attr(
                        "src",
                        "https://v.qq.com/txp/iframe/player.html?vid=" +
                          a +
                          "&amp;auto=0"
                      ));
                else if (d || h || f)
                  m = w()("<video controls>")
                    .attr("src", t)
                    .attr("width", "640")
                    .attr("height", "360");
                else {
                  if (!p || !p[0].length) return !1;
                  m = w()("<iframe>")
                    .attr("frameborder", 0)
                    .attr(
                      "src",
                      "https://www.facebook.com/plugins/video.php?href=" +
                        encodeURIComponent(p[0]) +
                        "&show_text=0&width=560"
                    )
                    .attr("width", "560")
                    .attr("height", "301")
                    .attr("scrolling", "no")
                    .attr("allowtransparency", "true");
                }
                return m.addClass("note-video-clip"), m[0];
              },
            },
            {
              key: "show",
              value: function () {
                var e = this,
                  t = this.context.invoke("editor.getSelectedText");
                this.context.invoke("editor.saveRange"),
                  this.showVideoDialog(t)
                    .then(function (t) {
                      e.ui.hideDialog(e.$dialog),
                        e.context.invoke("editor.restoreRange");
                      t = e.createVideoNode(t);
                      t && e.context.invoke("editor.insertNode", t);
                    })
                    .fail(function () {
                      e.context.invoke("editor.restoreRange");
                    });
              },
            },
            {
              key: "showVideoDialog",
              value: function () {
                var o = this;
                return w().Deferred(function (e) {
                  var n = o.$dialog.find(".note-video-url"),
                    t = o.$dialog.find(".note-video-btn");
                  o.ui.onDialogShown(o.$dialog, function () {
                    o.context.triggerEvent("dialog.shown"),
                      n.on("input paste propertychange", function () {
                        o.ui.toggleBtn(t, n.val());
                      }),
                      N.isSupportTouch || n.trigger("focus"),
                      t.click(function (t) {
                        t.preventDefault(), e.resolve(n.val());
                      }),
                      o.bindEnterKey(n, t);
                  }),
                    o.ui.onDialogHidden(o.$dialog, function () {
                      n.off(), t.off(), "pending" === e.state() && e.reject();
                    }),
                    o.ui.showDialog(o.$dialog);
                });
              },
            },
          ]) && de(t.prototype, n),
          o && de(t, o),
          e
        );
      })();
      function fe(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var pe = (function () {
        function e(t) {
          if (!(this instanceof e))
            throw new TypeError("Cannot call a class as a function");
          (this.context = t),
            (this.ui = w().summernote.ui),
            (this.$body = w()(document.body)),
            (this.$editor = t.layoutInfo.editor),
            (this.options = t.options),
            (this.lang = this.options.langInfo);
        }
        var t, n, o;
        return (
          (t = e),
          (n = [
            {
              key: "initialize",
              value: function () {
                var t = this.options.dialogsInBody
                    ? this.$body
                    : this.options.container,
                  e = [
                    '<p class="text-center">',
                    '<a href="http://summernote.org/" target="_blank" rel="noopener noreferrer">Summernote 0.8.20</a> · ',
                    '<a href="https://github.com/summernote/summernote" target="_blank" rel="noopener noreferrer">Project</a> · ',
                    '<a href="https://github.com/summernote/summernote/issues" target="_blank" rel="noopener noreferrer">Issues</a>',
                    "</p>",
                  ].join("");
                this.$dialog = this.ui
                  .dialog({
                    title: this.lang.options.help,
                    fade: this.options.dialogsFade,
                    body: this.createShortcutList(),
                    footer: e,
                    callback: function (t) {
                      t.find(".modal-body,.note-modal-body").css({
                        "max-height": 300,
                        overflow: "scroll",
                      });
                    },
                  })
                  .render()
                  .appendTo(t);
              },
            },
            {
              key: "destroy",
              value: function () {
                this.ui.hideDialog(this.$dialog), this.$dialog.remove();
              },
            },
            {
              key: "createShortcutList",
              value: function () {
                var o = this,
                  i = this.options.keyMap[N.isMac ? "mac" : "pc"];
                return Object.keys(i)
                  .map(function (t) {
                    var e = i[t],
                      n = w()('<div><div class="help-list-item"></div></div>');
                    return (
                      n
                        .append(
                          w()("<label><kbd>" + t + "</kdb></label>").css({
                            width: 180,
                            "margin-right": 10,
                          })
                        )
                        .append(
                          w()("<span></span>").html(
                            o.context.memo("help." + e) || e
                          )
                        ),
                      n.html()
                    );
                  })
                  .join("");
              },
            },
            {
              key: "showHelpDialog",
              value: function () {
                var e = this;
                return w()
                  .Deferred(function (t) {
                    e.ui.onDialogShown(e.$dialog, function () {
                      e.context.triggerEvent("dialog.shown"), t.resolve();
                    }),
                      e.ui.showDialog(e.$dialog);
                  })
                  .promise();
              },
            },
            {
              key: "show",
              value: function () {
                var t = this;
                this.context.invoke("editor.saveRange"),
                  this.showHelpDialog().then(function () {
                    t.context.invoke("editor.restoreRange");
                  });
              },
            },
          ]) && fe(t.prototype, n),
          o && fe(t, o),
          e
        );
      })();
      function me(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var ve = (function () {
        function e(t) {
          var n = this;
          if (!(this instanceof e))
            throw new TypeError("Cannot call a class as a function");
          (this.context = t),
            (this.ui = w().summernote.ui),
            (this.options = t.options),
            (this.hidable = !0),
            (this.onContextmenu = !1),
            (this.pageX = null),
            (this.pageY = null),
            (this.events = {
              "summernote.contextmenu": function (t) {
                n.options.editing &&
                  (t.preventDefault(),
                  t.stopPropagation(),
                  (n.onContextmenu = !0),
                  n.update(!0));
              },
              "summernote.mousedown": function (t, e) {
                (n.pageX = e.pageX), (n.pageY = e.pageY);
              },
              "summernote.keyup summernote.mouseup summernote.scroll":
                function (t, e) {
                  n.options.editing &&
                    !n.onContextmenu &&
                    ((n.pageX = e.pageX), (n.pageY = e.pageY), n.update()),
                    (n.onContextmenu = !1);
                },
              "summernote.disable summernote.change summernote.dialog.shown summernote.blur":
                function () {
                  n.hide();
                },
              "summernote.focusout": function () {
                n.$popover.is(":active,:focus") || n.hide();
              },
            });
        }
        var t, n, o;
        return (
          (t = e),
          (n = [
            {
              key: "shouldInitialize",
              value: function () {
                return (
                  this.options.airMode && !R.isEmpty(this.options.popover.air)
                );
              },
            },
            {
              key: "initialize",
              value: function () {
                var t = this,
                  e =
                    ((this.$popover = this.ui
                      .popover({ className: "note-air-popover" })
                      .render()
                      .appendTo(this.options.container)),
                    this.$popover.find(".popover-content"));
                this.context.invoke(
                  "buttons.build",
                  e,
                  this.options.popover.air
                ),
                  this.$popover.on("mousedown", function () {
                    t.hidable = !1;
                  }),
                  this.$popover.on("mouseup", function () {
                    t.hidable = !0;
                  });
              },
            },
            {
              key: "destroy",
              value: function () {
                this.$popover.remove();
              },
            },
            {
              key: "update",
              value: function (t) {
                var e = this.context.invoke("editor.currentStyle");
                !e.range || (e.range.isCollapsed() && !t)
                  ? this.hide()
                  : ((e = { left: this.pageX, top: this.pageY }),
                    (t = w()(this.options.container).offset()),
                    (e.top -= t.top),
                    (e.left -= t.left),
                    this.$popover.css({
                      display: "block",
                      left: Math.max(e.left, 0) + -5,
                      top: e.top + 5,
                    }),
                    this.context.invoke(
                      "buttons.updateCurrentStyle",
                      this.$popover
                    ));
              },
            },
            {
              key: "updateCodeview",
              value: function (t) {
                this.ui.toggleBtnActive(this.$popover.find(".btn-codeview"), t),
                  t && this.hide();
              },
            },
            {
              key: "hide",
              value: function () {
                this.hidable && this.$popover.hide();
              },
            },
          ]) && me(t.prototype, n),
          o && me(t, o),
          e
        );
      })();
      function ge(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var be = (function () {
        function e(t) {
          var n = this;
          if (!(this instanceof e))
            throw new TypeError("Cannot call a class as a function");
          (this.context = t),
            (this.ui = w().summernote.ui),
            (this.$editable = t.layoutInfo.editable),
            (this.options = t.options),
            (this.hint = this.options.hint || []),
            (this.direction = this.options.hintDirection || "bottom"),
            (this.hints = Array.isArray(this.hint) ? this.hint : [this.hint]),
            (this.events = {
              "summernote.keyup": function (t, e) {
                e.isDefaultPrevented() || n.handleKeyup(e);
              },
              "summernote.keydown": function (t, e) {
                n.handleKeydown(e);
              },
              "summernote.disable summernote.dialog.shown summernote.blur":
                function () {
                  n.hide();
                },
            });
        }
        var t, n, o;
        return (
          (t = e),
          (n = [
            {
              key: "shouldInitialize",
              value: function () {
                return 0 < this.hints.length;
              },
            },
            {
              key: "initialize",
              value: function () {
                var e = this;
                (this.lastWordRange = null),
                  (this.matchingWord = null),
                  (this.$popover = this.ui
                    .popover({
                      className: "note-hint-popover",
                      hideArrow: !0,
                      direction: "",
                    })
                    .render()
                    .appendTo(this.options.container)),
                  this.$popover.hide(),
                  (this.$content = this.$popover.find(
                    ".popover-content,.note-popover-content"
                  )),
                  this.$content.on("click", ".note-hint-item", function (t) {
                    e.$content.find(".active").removeClass("active"),
                      w()(t.currentTarget).addClass("active"),
                      e.replace();
                  }),
                  this.$popover.on("mousedown", function (t) {
                    t.preventDefault();
                  });
              },
            },
            {
              key: "destroy",
              value: function () {
                this.$popover.remove();
              },
            },
            {
              key: "selectItem",
              value: function (t) {
                this.$content.find(".active").removeClass("active"),
                  t.addClass("active"),
                  (this.$content[0].scrollTop =
                    t[0].offsetTop - this.$content.innerHeight() / 2);
              },
            },
            {
              key: "moveDown",
              value: function () {
                var t = this.$content.find(".note-hint-item.active"),
                  e = t.next();
                e.length
                  ? this.selectItem(e)
                  : ((e = t.parent().next()).length ||
                      (e = this.$content.find(".note-hint-group").first()),
                    this.selectItem(e.find(".note-hint-item").first()));
              },
            },
            {
              key: "moveUp",
              value: function () {
                var t = this.$content.find(".note-hint-item.active"),
                  e = t.prev();
                e.length
                  ? this.selectItem(e)
                  : ((e = t.parent().prev()).length ||
                      (e = this.$content.find(".note-hint-group").last()),
                    this.selectItem(e.find(".note-hint-item").last()));
              },
            },
            {
              key: "replace",
              value: function () {
                var t,
                  e = this.$content.find(".note-hint-item.active");
                e.length &&
                  ((e = this.nodeFromItem(e)),
                  null !== this.matchingWord && 0 === this.matchingWord.length
                    ? (this.lastWordRange.so = this.lastWordRange.eo)
                    : null !== this.matchingWord &&
                      0 < this.matchingWord.length &&
                      !this.lastWordRange.isCollapsed() &&
                      0 <
                        (t =
                          this.lastWordRange.eo -
                          this.lastWordRange.so -
                          this.matchingWord.length) &&
                      (this.lastWordRange.so += t),
                  this.lastWordRange.insertNode(e),
                  ("next" === this.options.hintSelect
                    ? ((t = document.createTextNode("")),
                      w()(e).after(t),
                      A.createFromNodeBefore(t))
                    : A.createFromNodeAfter(e)
                  ).select(),
                  (this.lastWordRange = null),
                  this.hide(),
                  this.context.invoke("editor.focus"),
                  this.context.triggerEvent(
                    "change",
                    this.$editable.html(),
                    this.$editable
                  ));
              },
            },
            {
              key: "nodeFromItem",
              value: function (t) {
                var e = this.hints[t.data("index")],
                  t = t.data("item"),
                  e = e.content ? e.content(t) : t;
                return (e = "string" == typeof e ? L.createText(e) : e);
              },
            },
            {
              key: "createItemTemplates",
              value: function (n, t) {
                var o = this.hints[n];
                return t.map(function (t) {
                  var e = w()('<div class="note-hint-item"></div>');
                  return (
                    e.append(o.template ? o.template(t) : t + ""),
                    e.data({ index: n, item: t }),
                    e
                  );
                });
              },
            },
            {
              key: "handleKeydown",
              value: function (t) {
                this.$popover.is(":visible") &&
                  (t.keyCode === F.code.ENTER
                    ? (t.preventDefault(), this.replace())
                    : t.keyCode === F.code.UP
                    ? (t.preventDefault(), this.moveUp())
                    : t.keyCode === F.code.DOWN &&
                      (t.preventDefault(), this.moveDown()));
              },
            },
            {
              key: "searchKeyword",
              value: function (t, e, n) {
                t = this.hints[t];
                t && t.match.test(e) && t.search
                  ? ((e = t.match.exec(e)),
                    (this.matchingWord = e[0]),
                    t.search(e[1], n))
                  : n();
              },
            },
            {
              key: "createGroup",
              value: function (e, t) {
                var n = this,
                  o = w()(
                    '<div class="note-hint-group note-hint-group-' +
                      e +
                      '"></div>'
                  );
                return (
                  this.searchKeyword(e, t, function (t) {
                    (t = t || []).length &&
                      (o.html(n.createItemTemplates(e, t)), n.show());
                  }),
                  o
                );
              },
            },
            {
              key: "handleKeyup",
              value: function (t) {
                var n = this;
                if (
                  !R.contains([F.code.ENTER, F.code.UP, F.code.DOWN], t.keyCode)
                ) {
                  var e,
                    o,
                    i,
                    r = this.context.invoke("editor.getLastRange");
                  if ("words" === this.options.hintMode) {
                    if (
                      ((e = r.getWordsRange(r)),
                      (o = e.toString()),
                      this.hints.forEach(function (t) {
                        if (t.match.test(o))
                          return (e = r.getWordsMatchRange(t.match)), !1;
                      }),
                      !e)
                    )
                      return void this.hide();
                  } else e = r.getWordRange();
                  (o = e.toString()),
                    this.hints.length && o
                      ? (this.$content.empty(),
                        (t = P.rect2bnd(R.last(e.getClientRects()))),
                        (i = w()(this.options.container).offset()),
                        t &&
                          ((t.top -= i.top),
                          (t.left -= i.left),
                          this.$popover.hide(),
                          (this.lastWordRange = e),
                          this.hints.forEach(function (t, e) {
                            t.match.test(o) &&
                              n.createGroup(e, o).appendTo(n.$content);
                          }),
                          this.$content
                            .find(".note-hint-item:first")
                            .addClass("active"),
                          "top" === this.direction
                            ? this.$popover.css({
                                left: t.left,
                                top: t.top - this.$popover.outerHeight() - 5,
                              })
                            : this.$popover.css({
                                left: t.left,
                                top: t.top + t.height + 5,
                              })))
                      : this.hide();
                }
              },
            },
            {
              key: "show",
              value: function () {
                this.$popover.show();
              },
            },
            {
              key: "hide",
              value: function () {
                this.$popover.hide();
              },
            },
          ]) && ge(t.prototype, n),
          o && ge(t, o),
          e
        );
      })();
      function ye(t) {
        return (ye =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function ke(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      w().summernote = w().extend(w().summernote, {
        version: "0.8.20",
        plugins: {},
        dom: L,
        range: A,
        lists: R,
        options: {
          langInfo: w().summernote.lang["en-US"],
          editing: !0,
          modules: {
            editor: E,
            clipboard: i,
            dropzone: r,
            codeview: t,
            statusbar: e,
            fullscreen: n,
            handle: Ut,
            hintPopover: be,
            autoLink: Kt,
            autoSync: qt,
            autoReplace: Gt,
            placeholder: Zt,
            buttons: Xt,
            toolbar: te,
            linkDialog: ne,
            linkPopover: ie,
            imageDialog: ae,
            imagePopover: le,
            tablePopover: ue,
            videoDialog: he,
            helpDialog: pe,
            airPopover: ve,
          },
          buttons: {},
          lang: "en-US",
          followingToolbar: !1,
          toolbarPosition: "top",
          otherStaticBar: "",
          codeviewKeepButton: !1,
          toolbar: [
            ["style", ["style"]],
            ["font", ["bold", "underline", "clear"]],
            ["fontname", ["fontname"]],
            ["color", ["color"]],
            ["para", ["ul", "ol", "paragraph"]],
            ["table", ["table"]],
            ["insert", ["link", "picture", "video"]],
            ["view", ["fullscreen", "codeview", "help"]],
          ],
          popatmouse: !0,
          popover: {
            image: [
              [
                "resize",
                ["resizeFull", "resizeHalf", "resizeQuarter", "resizeNone"],
              ],
              ["float", ["floatLeft", "floatRight", "floatNone"]],
              ["remove", ["removeMedia"]],
            ],
            link: [["link", ["linkDialogShow", "unlink"]]],
            table: [
              ["add", ["addRowDown", "addRowUp", "addColLeft", "addColRight"]],
              ["delete", ["deleteRow", "deleteCol", "deleteTable"]],
            ],
            air: [
              ["color", ["color"]],
              ["font", ["bold", "underline", "clear"]],
              ["para", ["ul", "paragraph"]],
              ["table", ["table"]],
              ["insert", ["link", "picture"]],
              ["view", ["fullscreen", "codeview"]],
            ],
          },
          airMode: !1,
          overrideContextMenu: !1,
          width: null,
          height: null,
          linkTargetBlank: !0,
          useProtocol: !0,
          defaultProtocol: "http://",
          focus: !1,
          tabDisabled: !1,
          tabSize: 4,
          styleWithCSS: !1,
          shortcuts: !0,
          textareaAutoSync: !0,
          tooltip: "auto",
          container: null,
          maxTextLength: 0,
          blockquoteBreakingLevel: 2,
          spellCheck: !0,
          disableGrammar: !1,
          placeholder: null,
          inheritPlaceholder: !1,
          recordEveryKeystroke: !1,
          historyLimit: 200,
          showDomainOnlyForAutolink: !1,
          hintMode: "word",
          hintSelect: "after",
          hintDirection: "bottom",
          styleTags: [
            "p",
            "blockquote",
            "pre",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
          ],
          fontNames: [
            "Arial",
            "Arial Black",
            "Comic Sans MS",
            "Courier New",
            "Helvetica Neue",
            "Helvetica",
            "Impact",
            "Lucida Grande",
            "Tahoma",
            "Times New Roman",
            "Verdana",
          ],
          fontNamesIgnoreCheck: [],
          addDefaultFonts: !0,
          fontSizes: ["8", "9", "10", "11", "12", "14", "18", "24", "36"],
          fontSizeUnits: ["px", "pt"],
          colors: [
            [
              "#000000",
              "#424242",
              "#636363",
              "#9C9C94",
              "#CEC6CE",
              "#EFEFEF",
              "#F7F7F7",
              "#FFFFFF",
            ],
            [
              "#FF0000",
              "#FF9C00",
              "#FFFF00",
              "#00FF00",
              "#00FFFF",
              "#0000FF",
              "#9C00FF",
              "#FF00FF",
            ],
            [
              "#F7C6CE",
              "#FFE7CE",
              "#FFEFC6",
              "#D6EFD6",
              "#CEDEE7",
              "#CEE7F7",
              "#D6D6E7",
              "#E7D6DE",
            ],
            [
              "#E79C9C",
              "#FFC69C",
              "#FFE79C",
              "#B5D6A5",
              "#A5C6CE",
              "#9CC6EF",
              "#B5A5D6",
              "#D6A5BD",
            ],
            [
              "#E76363",
              "#F7AD6B",
              "#FFD663",
              "#94BD7B",
              "#73A5AD",
              "#6BADDE",
              "#8C7BC6",
              "#C67BA5",
            ],
            [
              "#CE0000",
              "#E79439",
              "#EFC631",
              "#6BA54A",
              "#4A7B8C",
              "#3984C6",
              "#634AA5",
              "#A54A7B",
            ],
            [
              "#9C0000",
              "#B56308",
              "#BD9400",
              "#397B21",
              "#104A5A",
              "#085294",
              "#311873",
              "#731842",
            ],
            [
              "#630000",
              "#7B3900",
              "#846300",
              "#295218",
              "#083139",
              "#003163",
              "#21104A",
              "#4A1031",
            ],
          ],
          colorsName: [
            [
              "Black",
              "Tundora",
              "Dove Gray",
              "Star Dust",
              "Pale Slate",
              "Gallery",
              "Alabaster",
              "White",
            ],
            [
              "Red",
              "Orange Peel",
              "Yellow",
              "Green",
              "Cyan",
              "Blue",
              "Electric Violet",
              "Magenta",
            ],
            [
              "Azalea",
              "Karry",
              "Egg White",
              "Zanah",
              "Botticelli",
              "Tropical Blue",
              "Mischka",
              "Twilight",
            ],
            [
              "Tonys Pink",
              "Peach Orange",
              "Cream Brulee",
              "Sprout",
              "Casper",
              "Perano",
              "Cold Purple",
              "Careys Pink",
            ],
            [
              "Mandy",
              "Rajah",
              "Dandelion",
              "Olivine",
              "Gulf Stream",
              "Viking",
              "Blue Marguerite",
              "Puce",
            ],
            [
              "Guardsman Red",
              "Fire Bush",
              "Golden Dream",
              "Chelsea Cucumber",
              "Smalt Blue",
              "Boston Blue",
              "Butterfly Bush",
              "Cadillac",
            ],
            [
              "Sangria",
              "Mai Tai",
              "Buddha Gold",
              "Forest Green",
              "Eden",
              "Venice Blue",
              "Meteorite",
              "Claret",
            ],
            [
              "Rosewood",
              "Cinnamon",
              "Olive",
              "Parsley",
              "Tiber",
              "Midnight Blue",
              "Valentino",
              "Loulou",
            ],
          ],
          colorButton: { foreColor: "#000000", backColor: "#FFFF00" },
          lineHeights: ["1.0", "1.2", "1.4", "1.5", "1.6", "1.8", "2.0", "3.0"],
          tableClassName: "table table-bordered",
          insertTableMaxSize: { col: 10, row: 10 },
          dialogsInBody: !1,
          dialogsFade: !1,
          maximumImageFileSize: null,
          acceptImageFileTypes: "image/*",
          callbacks: {
            onBeforeCommand: null,
            onBlur: null,
            onBlurCodeview: null,
            onChange: null,
            onChangeCodeview: null,
            onDialogShown: null,
            onEnter: null,
            onFocus: null,
            onImageLinkInsert: null,
            onImageUpload: null,
            onImageUploadError: null,
            onInit: null,
            onKeydown: null,
            onKeyup: null,
            onMousedown: null,
            onMouseup: null,
            onPaste: null,
            onScroll: null,
          },
          codemirror: { mode: "text/html", htmlMode: !0, lineNumbers: !0 },
          codeviewFilter: !0,
          codeviewFilterRegex:
            /<\/*(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|ilayer|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|t(?:itle|extarea)|xml)[^>]*?>/gi,
          codeviewIframeFilter: !0,
          codeviewIframeWhitelistSrc: [],
          codeviewIframeWhitelistSrcBase: [
            "www.youtube.com",
            "www.youtube-nocookie.com",
            "www.facebook.com",
            "vine.co",
            "instagram.com",
            "player.vimeo.com",
            "www.dailymotion.com",
            "player.youku.com",
            "jumpingbean.tv",
            "v.qq.com",
          ],
          keyMap: {
            pc: {
              ESC: "escape",
              ENTER: "insertParagraph",
              "CTRL+Z": "undo",
              "CTRL+Y": "redo",
              TAB: "tab",
              "SHIFT+TAB": "untab",
              "CTRL+B": "bold",
              "CTRL+I": "italic",
              "CTRL+U": "underline",
              "CTRL+SHIFT+S": "strikethrough",
              "CTRL+BACKSLASH": "removeFormat",
              "CTRL+SHIFT+L": "justifyLeft",
              "CTRL+SHIFT+E": "justifyCenter",
              "CTRL+SHIFT+R": "justifyRight",
              "CTRL+SHIFT+J": "justifyFull",
              "CTRL+SHIFT+NUM7": "insertUnorderedList",
              "CTRL+SHIFT+NUM8": "insertOrderedList",
              "CTRL+LEFTBRACKET": "outdent",
              "CTRL+RIGHTBRACKET": "indent",
              "CTRL+NUM0": "formatPara",
              "CTRL+NUM1": "formatH1",
              "CTRL+NUM2": "formatH2",
              "CTRL+NUM3": "formatH3",
              "CTRL+NUM4": "formatH4",
              "CTRL+NUM5": "formatH5",
              "CTRL+NUM6": "formatH6",
              "CTRL+ENTER": "insertHorizontalRule",
              "CTRL+K": "linkDialog.show",
            },
            mac: {
              ESC: "escape",
              ENTER: "insertParagraph",
              "CMD+Z": "undo",
              "CMD+SHIFT+Z": "redo",
              TAB: "tab",
              "SHIFT+TAB": "untab",
              "CMD+B": "bold",
              "CMD+I": "italic",
              "CMD+U": "underline",
              "CMD+SHIFT+S": "strikethrough",
              "CMD+BACKSLASH": "removeFormat",
              "CMD+SHIFT+L": "justifyLeft",
              "CMD+SHIFT+E": "justifyCenter",
              "CMD+SHIFT+R": "justifyRight",
              "CMD+SHIFT+J": "justifyFull",
              "CMD+SHIFT+NUM7": "insertUnorderedList",
              "CMD+SHIFT+NUM8": "insertOrderedList",
              "CMD+LEFTBRACKET": "outdent",
              "CMD+RIGHTBRACKET": "indent",
              "CMD+NUM0": "formatPara",
              "CMD+NUM1": "formatH1",
              "CMD+NUM2": "formatH2",
              "CMD+NUM3": "formatH3",
              "CMD+NUM4": "formatH4",
              "CMD+NUM5": "formatH5",
              "CMD+NUM6": "formatH6",
              "CMD+ENTER": "insertHorizontalRule",
              "CMD+K": "linkDialog.show",
            },
          },
          icons: {
            align: "note-icon-align",
            alignCenter: "note-icon-align-center",
            alignJustify: "note-icon-align-justify",
            alignLeft: "note-icon-align-left",
            alignRight: "note-icon-align-right",
            rowBelow: "note-icon-row-below",
            colBefore: "note-icon-col-before",
            colAfter: "note-icon-col-after",
            rowAbove: "note-icon-row-above",
            rowRemove: "note-icon-row-remove",
            colRemove: "note-icon-col-remove",
            indent: "note-icon-align-indent",
            outdent: "note-icon-align-outdent",
            arrowsAlt: "note-icon-arrows-alt",
            bold: "note-icon-bold",
            caret: "note-icon-caret",
            circle: "note-icon-circle",
            close: "note-icon-close",
            code: "note-icon-code",
            eraser: "note-icon-eraser",
            floatLeft: "note-icon-float-left",
            floatRight: "note-icon-float-right",
            font: "note-icon-font",
            frame: "note-icon-frame",
            italic: "note-icon-italic",
            link: "note-icon-link",
            unlink: "note-icon-chain-broken",
            magic: "note-icon-magic",
            menuCheck: "note-icon-menu-check",
            minus: "note-icon-minus",
            orderedlist: "note-icon-orderedlist",
            pencil: "note-icon-pencil",
            picture: "note-icon-picture",
            question: "note-icon-question",
            redo: "note-icon-redo",
            rollback: "note-icon-rollback",
            square: "note-icon-square",
            strikethrough: "note-icon-strikethrough",
            subscript: "note-icon-subscript",
            superscript: "note-icon-superscript",
            table: "note-icon-table",
            textHeight: "note-icon-text-height",
            trash: "note-icon-trash",
            underline: "note-icon-underline",
            undo: "note-icon-undo",
            unorderedlist: "note-icon-unorderedlist",
            video: "note-icon-video",
          },
        },
      });
      var we = (function () {
        function i(t, e, n, o) {
          if (!(this instanceof i))
            throw new TypeError("Cannot call a class as a function");
          (this.markup = t),
            (this.children = e),
            (this.options = n),
            (this.callback = o);
        }
        var t, e, n;
        return (
          (t = i),
          (e = [
            {
              key: "render",
              value: function (t) {
                var e,
                  n = w()(this.markup);
                return (
                  this.options &&
                    this.options.contents &&
                    n.html(this.options.contents),
                  this.options &&
                    this.options.className &&
                    n.addClass(this.options.className),
                  this.options &&
                    this.options.data &&
                    w().each(this.options.data, function (t, e) {
                      n.attr("data-" + t, e);
                    }),
                  this.options &&
                    this.options.click &&
                    n.on("click", this.options.click),
                  this.children &&
                    ((e = n.find(".note-children-container")),
                    this.children.forEach(function (t) {
                      t.render(e.length ? e : n);
                    })),
                  this.callback && this.callback(n, this.options),
                  this.options &&
                    this.options.callback &&
                    this.options.callback(n),
                  t && t.append(n),
                  n
                );
              },
            },
          ]) && ke(t.prototype, e),
          n && ke(t, n),
          i
        );
      })();
      const D = {
        create: function (n, o) {
          return function () {
            var t = "object" === ye(arguments[1]) ? arguments[1] : arguments[0],
              e = Array.isArray(arguments[0]) ? arguments[0] : [];
            return t && t.children && (e = t.children), new we(n, e, t, o);
          };
        },
      };
      function Ce(t) {
        return (Ce =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function xe(t, e) {
        return t + " " + He(e.icons.caret, "span");
      }
      var Se = D.create(
          '<div class="note-editor note-frame panel panel-default"></div>'
        ),
        Te = D.create(
          '<div class="panel-heading note-toolbar" role="toolbar"></div>'
        ),
        I = D.create('<div class="note-editing-area"></div>'),
        $ = D.create(
          '<textarea class="note-codable" aria-multiline="true"></textarea>'
        ),
        Ee = D.create(
          '<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"></div>'
        ),
        Ie = D.create(
          [
            '<output class="note-status-output" role="status" aria-live="polite"></output>',
            '<div class="note-statusbar" role="status">',
            '<div class="note-resizebar" aria-label="Resize">',
            '<div class="note-icon-bar"></div>',
            '<div class="note-icon-bar"></div>',
            '<div class="note-icon-bar"></div>',
            "</div>",
            "</div>",
          ].join("")
        ),
        $e = D.create('<div class="note-editor note-airframe"></div>'),
        Ne = D.create(
          [
            '<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"></div>',
            '<output class="note-status-output" role="status" aria-live="polite"></output>',
          ].join("")
        ),
        Pe = D.create('<div class="note-btn-group btn-group"></div>'),
        Re = D.create(
          '<ul class="note-dropdown-menu dropdown-menu"></ul>',
          function (t, o) {
            var e = Array.isArray(o.items)
              ? o.items
                  .map(function (t) {
                    var e = "string" == typeof t ? t : t.value || "",
                      n = o.template ? o.template(t) : t,
                      t = "object" === Ce(t) ? t.option : void 0;
                    return (
                      '<li aria-label="' +
                      e +
                      '"><a href="#" ' +
                      ('data-value="' + e + '"') +
                      (void 0 !== t ? ' data-option="' + t + '"' : "") +
                      ">" +
                      n +
                      "</a></li>"
                    );
                  })
                  .join("")
              : o.items;
            t.html(e).attr({ "aria-label": o.title }),
              o && o.codeviewKeepButton && t.addClass("note-codeview-keep");
          }
        ),
        Le = D.create(
          '<ul class="note-dropdown-menu dropdown-menu note-check"></ul>',
          function (t, o) {
            var e = Array.isArray(o.items)
              ? o.items
                  .map(function (t) {
                    var e = "string" == typeof t ? t : t.value || "",
                      n = o.template ? o.template(t) : t;
                    return (
                      '<li aria-label="' +
                      t +
                      '"><a href="#" data-value="' +
                      e +
                      '">' +
                      He(o.checkClassName) +
                      " " +
                      n +
                      "</a></li>"
                    );
                  })
                  .join("")
              : o.items;
            t.html(e).attr({ "aria-label": o.title }),
              o && o.codeviewKeepButton && t.addClass("note-codeview-keep");
          }
        ),
        Ae = D.create(
          '<div class="modal note-modal" aria-hidden="false" tabindex="-1" role="dialog"></div>',
          function (t, e) {
            e.fade && t.addClass("fade"),
              t.attr({ "aria-label": e.title }),
              t.html(
                [
                  '<div class="modal-dialog">',
                  '<div class="modal-content">',
                  e.title
                    ? '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</button><h4 class="modal-title">' +
                      e.title +
                      "</h4></div>"
                    : "",
                  '<div class="modal-body">' + e.body + "</div>",
                  e.footer
                    ? '<div class="modal-footer">' + e.footer + "</div>"
                    : "",
                  "</div>",
                  "</div>",
                ].join("")
              );
          }
        ),
        Fe = D.create(
          [
            '<div class="note-popover popover in">',
            '<div class="arrow"></div>',
            '<div class="popover-content note-children-container"></div>',
            "</div>",
          ].join(""),
          function (t, e) {
            var n = void 0 !== e.direction ? e.direction : "bottom";
            t.addClass(n), e.hideArrow && t.find(".arrow").hide();
          }
        ),
        De = D.create('<div class="checkbox"></div>', function (t, e) {
          t.html(
            [
              "<label" + (e.id ? ' for="note-' + e.id + '"' : "") + ">",
              '<input type="checkbox"' +
                (e.id ? ' id="note-' + e.id + '"' : ""),
              e.checked ? " checked" : "",
              ' aria-checked="' + (e.checked ? "true" : "false") + '"/>',
              e.text || "",
              "</label>",
            ].join("")
          );
        }),
        He = function (t, e) {
          return t.match(/^</)
            ? t
            : "<" + (e = e || "i") + ' class="' + t + '"></' + e + ">";
        };
      w().summernote = w().extend(w().summernote, {
        ui_template: function (f) {
          return {
            editor: Se,
            toolbar: Te,
            editingArea: I,
            codable: $,
            editable: Ee,
            statusbar: Ie,
            airEditor: $e,
            airEditable: Ne,
            buttonGroup: Pe,
            dropdown: Re,
            dropdownButtonContents: xe,
            dropdownCheck: Le,
            dialog: Ae,
            popover: Fe,
            checkbox: De,
            icon: He,
            options: f,
            palette: function (t, e) {
              return D.create(
                '<div class="note-color-palette"></div>',
                function (t, e) {
                  for (var n = [], o = 0, i = e.colors.length; o < i; o++) {
                    for (
                      var r = e.eventName,
                        a = e.colors[o],
                        s = e.colorsName[o],
                        l = [],
                        c = 0,
                        u = a.length;
                      c < u;
                      c++
                    ) {
                      var d = a[c],
                        h = s[c];
                      l.push(
                        [
                          '<button type="button" class="note-color-btn"',
                          'style="background-color:',
                          d,
                          '" ',
                          'data-event="',
                          r,
                          '" ',
                          'data-value="',
                          d,
                          '" ',
                          'title="',
                          h,
                          '" ',
                          'aria-label="',
                          h,
                          '" ',
                          'data-toggle="button" tabindex="-1"></button>',
                        ].join("")
                      );
                    }
                    n.push(
                      '<div class="note-color-row">' + l.join("") + "</div>"
                    );
                  }
                  t.html(n.join("")),
                    e.tooltip &&
                      t.find(".note-color-btn").tooltip({
                        container: e.container || f.container,
                        trigger: "hover",
                        placement: "bottom",
                      });
                }
              )(t, e);
            },
            button: function (t, e) {
              return D.create(
                '<button type="button" class="note-btn btn btn-default btn-sm" tabindex="-1"></button>',
                function (t, e) {
                  e &&
                    e.tooltip &&
                    t
                      .attr({ title: e.tooltip, "aria-label": e.tooltip })
                      .tooltip({
                        container: e.container || f.container,
                        trigger: "hover",
                        placement: "bottom",
                      })
                      .on("click", function (t) {
                        w()(t.currentTarget).tooltip("hide");
                      }),
                    e && e.codeviewButton && t.addClass("note-codeview-keep");
                }
              )(t, e);
            },
            toggleBtn: function (t, e) {
              t.toggleClass("disabled", !e), t.attr("disabled", !e);
            },
            toggleBtnActive: function (t, e) {
              t.toggleClass("active", e);
            },
            onDialogShown: function (t, e) {
              t.one("shown.bs.modal", e);
            },
            onDialogHidden: function (t, e) {
              t.one("hidden.bs.modal", e);
            },
            showDialog: function (t) {
              t.modal("show");
            },
            hideDialog: function (t) {
              t.modal("hide");
            },
            createLayout: function (t) {
              var e = (
                f.airMode
                  ? $e([I([$(), Ne()])])
                  : "bottom" === f.toolbarPosition
                  ? Se([I([$(), Ee()]), Te(), Ie()])
                  : Se([Te(), I([$(), Ee()]), Ie()])
              ).render();
              return (
                e.insertAfter(t),
                {
                  note: t,
                  editor: e,
                  toolbar: e.find(".note-toolbar"),
                  editingArea: e.find(".note-editing-area"),
                  editable: e.find(".note-editable"),
                  codable: e.find(".note-codable"),
                  statusbar: e.find(".note-statusbar"),
                }
              );
            },
            removeLayout: function (t, e) {
              t.html(e.editable.html()), e.editor.remove(), t.show();
            },
          };
        },
        interface: "bs3",
      });
    }
    return B;
  })();
});
