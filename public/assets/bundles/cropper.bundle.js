!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(require("jquery"))
    : "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : e((t || self).jQuery);
})(this, function (c) {
  "use strict";
  function C(t) {
    return (C =
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
  function D(t, e) {
    for (var i = 0; i < e.length; i++) {
      var a = e[i];
      (a.enumerable = a.enumerable || !1),
        (a.configurable = !0),
        "value" in a && (a.writable = !0),
        Object.defineProperty(t, a.key, a);
    }
  }
  function j(e, t) {
    var i,
      a = Object.keys(e);
    return (
      Object.getOwnPropertySymbols &&
        ((i = Object.getOwnPropertySymbols(e)),
        t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
        a.push.apply(a, i)),
      a
    );
  }
  function A(a) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? j(n, !0).forEach(function (t) {
            var e = a,
              i = n[(t = t)];
            t in e
              ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = i);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(n))
        : j(n).forEach(function (t) {
            Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return a;
  }
  function S(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) {
          for (var e = 0, i = new Array(t.length); e < t.length; e++)
            i[e] = t[e];
          return i;
        }
      })(t) ||
      (function (t) {
        if (
          Symbol.iterator in Object(t) ||
          "[object Arguments]" === Object.prototype.toString.call(t)
        )
          return Array.from(t);
      })(t) ||
      (function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      })()
    );
  }
  c = c && c.hasOwnProperty("default") ? c.default : c;
  var t = "undefined" != typeof window && void 0 !== window.document,
    h = t ? window : {},
    e = t && "ontouchstart" in h.document.documentElement,
    i = t && "PointerEvent" in h,
    d = "cropper",
    P = "all",
    I = "crop",
    U = "move",
    q = "zoom",
    B = "e",
    k = "w",
    O = "s",
    T = "n",
    E = "ne",
    W = "nw",
    N = "se",
    H = "sw",
    $ = "".concat(d, "-crop"),
    Q = "".concat(d, "-disabled"),
    L = "".concat(d, "-hidden"),
    K = "".concat(d, "-hide"),
    Z = "".concat(d, "-invisible"),
    n = "".concat(d, "-modal"),
    F = "".concat(d, "-move"),
    l = "".concat(d, "Action"),
    m = "".concat(d, "Preview"),
    G = "crop",
    V = "move",
    J = "none",
    _ = "crop",
    tt = "cropend",
    et = "cropmove",
    it = "cropstart",
    at = "dblclick",
    nt = i ? "pointerdown" : e ? "touchstart" : "mousedown",
    ot = i ? "pointermove" : e ? "touchmove" : "mousemove",
    ht = i ? "pointerup pointercancel" : e ? "touchend touchcancel" : "mouseup",
    rt = "zoom",
    st = "image/jpeg",
    ct = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,
    dt = /^data:/,
    lt = /^data:image\/jpeg;base64,/,
    pt = /^img|canvas$/i,
    mt = {
      viewMode: 0,
      dragMode: G,
      initialAspectRatio: NaN,
      aspectRatio: NaN,
      data: null,
      preview: "",
      responsive: !0,
      restore: !0,
      checkCrossOrigin: !0,
      checkOrientation: !0,
      modal: !0,
      guides: !0,
      center: !0,
      highlight: !0,
      background: !0,
      autoCrop: !0,
      autoCropArea: 0.8,
      movable: !0,
      rotatable: !0,
      scalable: !0,
      zoomable: !0,
      zoomOnTouch: !0,
      zoomOnWheel: !0,
      wheelZoomRatio: 0.1,
      cropBoxMovable: !0,
      cropBoxResizable: !0,
      toggleDragModeOnDblclick: !0,
      minCanvasWidth: 0,
      minCanvasHeight: 0,
      minCropBoxWidth: 0,
      minCropBoxHeight: 0,
      minContainerWidth: 200,
      minContainerHeight: 100,
      ready: null,
      cropstart: null,
      cropmove: null,
      cropend: null,
      crop: null,
      zoom: null,
    },
    ut = Number.isNaN || h.isNaN;
  function p(t) {
    return "number" == typeof t && !ut(t);
  }
  function gt(t) {
    return 0 < t && t < 1 / 0;
  }
  function ft(t) {
    return void 0 === t;
  }
  function o(t) {
    return "object" === C(t) && null !== t;
  }
  var vt = Object.prototype.hasOwnProperty;
  function u(t) {
    if (!o(t)) return !1;
    try {
      var e = t.constructor,
        i = e.prototype;
      return e && i && vt.call(i, "isPrototypeOf");
    } catch (t) {
      return !1;
    }
  }
  function g(t) {
    return "function" == typeof t;
  }
  var wt = Array.prototype.slice;
  function bt(t) {
    return Array.from ? Array.from(t) : wt.call(t);
  }
  function z(i, a) {
    return (
      i &&
        g(a) &&
        (Array.isArray(i) || p(i.length)
          ? bt(i).forEach(function (t, e) {
              a.call(i, t, e, i);
            })
          : o(i) &&
            Object.keys(i).forEach(function (t) {
              a.call(i, i[t], t, i);
            })),
      i
    );
  }
  var f =
      Object.assign ||
      function (i) {
        for (
          var t = arguments.length, e = new Array(1 < t ? t - 1 : 0), a = 1;
          a < t;
          a++
        )
          e[a - 1] = arguments[a];
        return (
          o(i) &&
            0 < e.length &&
            e.forEach(function (e) {
              o(e) &&
                Object.keys(e).forEach(function (t) {
                  i[t] = e[t];
                });
            }),
          i
        );
      },
    yt = /\.\d*(?:0|9){12}\d*$/;
  function Y(t, e) {
    e = 1 < arguments.length && void 0 !== e ? e : 1e11;
    return yt.test(t) ? Math.round(t * e) / e : t;
  }
  var xt = /^width|height|left|top|marginLeft|marginTop$/;
  function v(t, e) {
    var i = t.style;
    z(e, function (t, e) {
      xt.test(e) && p(t) && (t = "".concat(t, "px")), (i[e] = t);
    });
  }
  function w(t, e) {
    var i;
    e &&
      (p(t.length)
        ? z(t, function (t) {
            w(t, e);
          })
        : t.classList
        ? t.classList.add(e)
        : (i = t.className.trim())
        ? i.indexOf(e) < 0 && (t.className = "".concat(i, " ").concat(e))
        : (t.className = e));
  }
  function X(t, e) {
    e &&
      (p(t.length)
        ? z(t, function (t) {
            X(t, e);
          })
        : t.classList
        ? t.classList.remove(e)
        : 0 <= t.className.indexOf(e) &&
          (t.className = t.className.replace(e, "")));
  }
  function r(t, e, i) {
    e &&
      (p(t.length)
        ? z(t, function (t) {
            r(t, e, i);
          })
        : (i ? w : X)(t, e));
  }
  var Mt = /([a-z\d])([A-Z])/g;
  function Ct(t) {
    return t.replace(Mt, "$1-$2").toLowerCase();
  }
  function Dt(t, e) {
    return o(t[e])
      ? t[e]
      : t.dataset
      ? t.dataset[e]
      : t.getAttribute("data-".concat(Ct(e)));
  }
  function b(t, e, i) {
    o(i)
      ? (t[e] = i)
      : t.dataset
      ? (t.dataset[e] = i)
      : t.setAttribute("data-".concat(Ct(e)), i);
  }
  var Bt,
    kt,
    Ot = /\s\s*/,
    Tt =
      ((kt = !1),
      t &&
        ((Bt = !1),
        (i = function () {}),
        (e = Object.defineProperty({}, "once", {
          get: function () {
            return (kt = !0), Bt;
          },
          set: function (t) {
            Bt = t;
          },
        })),
        h.addEventListener("test", i, e),
        h.removeEventListener("test", i, e)),
      kt);
  function a(i, t, a, e) {
    var n = 3 < arguments.length && void 0 !== e ? e : {},
      o = a;
    t.trim()
      .split(Ot)
      .forEach(function (t) {
        var e;
        Tt ||
          ((e = i.listeners) &&
            e[t] &&
            e[t][a] &&
            ((o = e[t][a]),
            delete e[t][a],
            0 === Object.keys(e[t]).length && delete e[t],
            0 === Object.keys(e).length) &&
            delete i.listeners),
          i.removeEventListener(t, o, n);
      });
  }
  function y(o, t, h, e) {
    var r = 3 < arguments.length && void 0 !== e ? e : {},
      s = h;
    t.trim()
      .split(Ot)
      .forEach(function (a) {
        var t, n;
        r.once &&
          !Tt &&
          ((t = o.listeners),
          (s = function () {
            delete n[a][h], o.removeEventListener(a, s, r);
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            h.apply(o, e);
          }),
          (n = void 0 === t ? {} : t)[a] || (n[a] = {}),
          n[a][h] && o.removeEventListener(a, n[a][h], r),
          (n[a][h] = s),
          (o.listeners = n)),
          o.addEventListener(a, s, r);
      });
  }
  function x(t, e, i) {
    var a;
    return (
      g(Event) && g(CustomEvent)
        ? (a = new CustomEvent(e, { detail: i, bubbles: !0, cancelable: !0 }))
        : (a = document.createEvent("CustomEvent")).initCustomEvent(
            e,
            !0,
            !0,
            i
          ),
      t.dispatchEvent(a)
    );
  }
  function Et(t) {
    t = t.getBoundingClientRect();
    return {
      left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
      top: t.top + (window.pageYOffset - document.documentElement.clientTop),
    };
  }
  var Wt = h.location,
    Nt = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
  function Ht(t) {
    t = t.match(Nt);
    return (
      null !== t &&
      (t[1] !== Wt.protocol || t[2] !== Wt.hostname || t[3] !== Wt.port)
    );
  }
  function Lt(t) {
    var e = "timestamp=".concat(new Date().getTime());
    return t + (-1 === t.indexOf("?") ? "?" : "&") + e;
  }
  function M(t) {
    var e = t.rotate,
      i = t.scaleX,
      a = t.scaleY,
      n = t.translateX,
      t = t.translateY,
      o = [],
      n =
        (p(n) && 0 !== n && o.push("translateX(".concat(n, "px)")),
        p(t) && 0 !== t && o.push("translateY(".concat(t, "px)")),
        p(e) && 0 !== e && o.push("rotate(".concat(e, "deg)")),
        p(i) && 1 !== i && o.push("scaleX(".concat(i, ")")),
        p(a) && 1 !== a && o.push("scaleY(".concat(a, ")")),
        o.length ? o.join(" ") : "none");
    return { WebkitTransform: n, msTransform: n, transform: n };
  }
  function s(t, e) {
    var i = t.pageX,
      t = t.pageY,
      a = { endX: i, endY: t };
    return e ? a : A({ startX: i, startY: t }, a);
  }
  function R(t, e) {
    var i,
      a = t.aspectRatio,
      n = t.height,
      t = t.width,
      e = 1 < arguments.length && void 0 !== e ? e : "contain",
      o = gt(t),
      h = gt(n);
    return (
      o && h
        ? ((i = n * a),
          ("contain" === e && t < i) || ("cover" === e && i < t)
            ? (n = t / a)
            : (t = n * a))
        : o
        ? (n = t / a)
        : h && (t = n * a),
      { width: t, height: n }
    );
  }
  var zt = String.fromCharCode,
    Yt = /^data:.*,/;
  var Xt,
    Rt,
    jt,
    At,
    t = {
      render: function () {
        this.initContainer(),
          this.initCanvas(),
          this.initCropBox(),
          this.renderCanvas(),
          this.cropped && this.renderCropBox();
      },
      initContainer: function () {
        var t = this.element,
          e = this.options,
          i = this.container,
          a = this.cropper,
          i =
            (w(a, L),
            X(t, L),
            {
              width: Math.max(
                i.offsetWidth,
                Number(e.minContainerWidth) || 200
              ),
              height: Math.max(
                i.offsetHeight,
                Number(e.minContainerHeight) || 100
              ),
            });
        v(a, { width: (this.containerData = i).width, height: i.height }),
          w(t, L),
          X(a, L);
      },
      initCanvas: function () {
        var t = this.containerData,
          e = this.imageData,
          i = this.options.viewMode,
          a = Math.abs(e.rotate) % 180 == 90,
          n = a ? e.naturalHeight : e.naturalWidth,
          a = a ? e.naturalWidth : e.naturalHeight,
          o = n / a,
          h = t.width,
          r = t.height,
          o =
            (t.height * o > t.width
              ? 3 === i
                ? (h = t.height * o)
                : (r = t.width / o)
              : 3 === i
              ? (r = t.width / o)
              : (h = t.height * o),
            {
              aspectRatio: o,
              naturalWidth: n,
              naturalHeight: a,
              width: h,
              height: r,
            });
        (o.left = (t.width - h) / 2),
          (o.top = (t.height - r) / 2),
          (o.oldLeft = o.left),
          (o.oldTop = o.top),
          (this.canvasData = o),
          (this.limited = 1 === i || 2 === i),
          this.limitCanvas(!0, !0),
          (this.initialImageData = f({}, e)),
          (this.initialCanvasData = f({}, o));
      },
      limitCanvas: function (t, e) {
        var i = this.options,
          a = this.containerData,
          n = this.canvasData,
          o = this.cropBoxData,
          h = i.viewMode,
          r = n.aspectRatio,
          s = this.cropped && o;
        t &&
          ((t = Number(i.minCanvasWidth) || 0),
          (i = Number(i.minCanvasHeight) || 0),
          1 < h
            ? ((t = Math.max(t, a.width)),
              (i = Math.max(i, a.height)),
              3 === h && (t < i * r ? (t = i * r) : (i = t / r)))
            : 0 < h &&
              (t
                ? (t = Math.max(t, s ? o.width : 0))
                : i
                ? (i = Math.max(i, s ? o.height : 0))
                : s &&
                  ((t = o.width) < (i = o.height) * r
                    ? (t = i * r)
                    : (i = t / r))),
          (t = (r = R({ aspectRatio: r, width: t, height: i })).width),
          (i = r.height),
          (n.minWidth = t),
          (n.minHeight = i),
          (n.maxWidth = 1 / 0),
          (n.maxHeight = 1 / 0)),
          e &&
            ((s ? 0 : 1) < h
              ? ((r = a.width - n.width),
                (t = a.height - n.height),
                (n.minLeft = Math.min(0, r)),
                (n.minTop = Math.min(0, t)),
                (n.maxLeft = Math.max(0, r)),
                (n.maxTop = Math.max(0, t)),
                s &&
                  this.limited &&
                  ((n.minLeft = Math.min(o.left, o.left + (o.width - n.width))),
                  (n.minTop = Math.min(o.top, o.top + (o.height - n.height))),
                  (n.maxLeft = o.left),
                  (n.maxTop = o.top),
                  2 === h) &&
                  (n.width >= a.width &&
                    ((n.minLeft = Math.min(0, r)),
                    (n.maxLeft = Math.max(0, r))),
                  n.height >= a.height) &&
                  ((n.minTop = Math.min(0, t)), (n.maxTop = Math.max(0, t))))
              : ((n.minLeft = -n.width),
                (n.minTop = -n.height),
                (n.maxLeft = a.width),
                (n.maxTop = a.height)));
      },
      renderCanvas: function (t, e) {
        var i,
          a,
          n,
          o,
          h = this.canvasData,
          r = this.imageData;
        e &&
          ((e = {
            width: r.naturalWidth * Math.abs(r.scaleX || 1),
            height: r.naturalHeight * Math.abs(r.scaleY || 1),
            degree: r.rotate || 0,
          }),
          (r = e.width),
          (o = e.height),
          (e = e.degree),
          (i =
            90 == (e = Math.abs(e) % 180)
              ? { width: o, height: r }
              : ((a = ((e % 90) * Math.PI) / 180),
                (i = Math.sin(a)),
                (n = r * (a = Math.cos(a)) + o * i),
                (r = r * i + o * a),
                90 < e ? { width: r, height: n } : { width: n, height: r })),
          (a = h.width * ((o = i.width) / h.naturalWidth)),
          (n = h.height * ((e = i.height) / h.naturalHeight)),
          (h.left -= (a - h.width) / 2),
          (h.top -= (n - h.height) / 2),
          (h.width = a),
          (h.height = n),
          (h.aspectRatio = o / e),
          (h.naturalWidth = o),
          (h.naturalHeight = e),
          this.limitCanvas(!0, !1)),
          (h.width > h.maxWidth || h.width < h.minWidth) &&
            (h.left = h.oldLeft),
          (h.height > h.maxHeight || h.height < h.minHeight) &&
            (h.top = h.oldTop),
          (h.width = Math.min(Math.max(h.width, h.minWidth), h.maxWidth)),
          (h.height = Math.min(Math.max(h.height, h.minHeight), h.maxHeight)),
          this.limitCanvas(!1, !0),
          (h.left = Math.min(Math.max(h.left, h.minLeft), h.maxLeft)),
          (h.top = Math.min(Math.max(h.top, h.minTop), h.maxTop)),
          (h.oldLeft = h.left),
          (h.oldTop = h.top),
          v(
            this.canvas,
            f(
              { width: h.width, height: h.height },
              M({ translateX: h.left, translateY: h.top })
            )
          ),
          this.renderImage(t),
          this.cropped && this.limited && this.limitCropBox(!0, !0);
      },
      renderImage: function (t) {
        var e = this.canvasData,
          i = this.imageData,
          a = i.naturalWidth * (e.width / e.naturalWidth),
          n = i.naturalHeight * (e.height / e.naturalHeight);
        f(i, {
          width: a,
          height: n,
          left: (e.width - a) / 2,
          top: (e.height - n) / 2,
        }),
          v(
            this.image,
            f(
              { width: i.width, height: i.height },
              M(f({ translateX: i.left, translateY: i.top }, i))
            )
          ),
          t && this.output();
      },
      initCropBox: function () {
        var t = this.options,
          e = this.canvasData,
          i = t.aspectRatio || t.initialAspectRatio,
          t = Number(t.autoCropArea) || 0.8,
          a = { width: e.width, height: e.height };
        i &&
          (e.height * i > e.width
            ? (a.height = a.width / i)
            : (a.width = a.height * i)),
          (this.cropBoxData = a),
          this.limitCropBox(!0, !0),
          (a.width = Math.min(Math.max(a.width, a.minWidth), a.maxWidth)),
          (a.height = Math.min(Math.max(a.height, a.minHeight), a.maxHeight)),
          (a.width = Math.max(a.minWidth, a.width * t)),
          (a.height = Math.max(a.minHeight, a.height * t)),
          (a.left = e.left + (e.width - a.width) / 2),
          (a.top = e.top + (e.height - a.height) / 2),
          (a.oldLeft = a.left),
          (a.oldTop = a.top),
          (this.initialCropBoxData = f({}, a));
      },
      limitCropBox: function (t, e) {
        var i,
          a,
          n = this.options,
          o = this.containerData,
          h = this.canvasData,
          r = this.cropBoxData,
          s = this.limited,
          c = n.aspectRatio;
        t &&
          ((t = Number(n.minCropBoxWidth) || 0),
          (n = Number(n.minCropBoxHeight) || 0),
          (i = s
            ? Math.min(o.width, h.width, h.width + h.left, o.width - h.left)
            : o.width),
          (a = s
            ? Math.min(o.height, h.height, h.height + h.top, o.height - h.top)
            : o.height),
          (t = Math.min(t, o.width)),
          (n = Math.min(n, o.height)),
          c &&
            (t && n
              ? t < n * c
                ? (n = t / c)
                : (t = n * c)
              : t
              ? (n = t / c)
              : n && (t = n * c),
            i < a * c ? (a = i / c) : (i = a * c)),
          (r.minWidth = Math.min(t, i)),
          (r.minHeight = Math.min(n, a)),
          (r.maxWidth = i),
          (r.maxHeight = a)),
          e &&
            (s
              ? ((r.minLeft = Math.max(0, h.left)),
                (r.minTop = Math.max(0, h.top)),
                (r.maxLeft = Math.min(o.width, h.left + h.width) - r.width),
                (r.maxTop = Math.min(o.height, h.top + h.height) - r.height))
              : ((r.minLeft = 0),
                (r.minTop = 0),
                (r.maxLeft = o.width - r.width),
                (r.maxTop = o.height - r.height)));
      },
      renderCropBox: function () {
        var t = this.options,
          e = this.containerData,
          i = this.cropBoxData;
        (i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft),
          (i.height > i.maxHeight || i.height < i.minHeight) &&
            (i.top = i.oldTop),
          (i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth)),
          (i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight)),
          this.limitCropBox(!1, !0),
          (i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft)),
          (i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop)),
          (i.oldLeft = i.left),
          (i.oldTop = i.top),
          t.movable &&
            t.cropBoxMovable &&
            b(this.face, l, i.width >= e.width && i.height >= e.height ? U : P),
          v(
            this.cropBox,
            f(
              { width: i.width, height: i.height },
              M({ translateX: i.left, translateY: i.top })
            )
          ),
          this.cropped && this.limited && this.limitCanvas(!0, !0),
          this.disabled || this.output();
      },
      output: function () {
        this.preview(), x(this.element, _, this.getData());
      },
    },
    i = {
      initPreview: function () {
        var t = this.element,
          i = this.crossOrigin,
          e = this.options.preview,
          a = i ? this.crossOriginUrl : this.url,
          n = t.alt || "The image to preview",
          o = document.createElement("img");
        i && (o.crossOrigin = i),
          (o.src = a),
          (o.alt = n),
          this.viewBox.appendChild(o),
          (this.viewBoxImage = o),
          e &&
            ("string" == typeof (o = e)
              ? (o = t.ownerDocument.querySelectorAll(e))
              : e.querySelector && (o = [e]),
            z((this.previews = o), function (t) {
              var e = document.createElement("img");
              b(t, m, {
                width: t.offsetWidth,
                height: t.offsetHeight,
                html: t.innerHTML,
              }),
                i && (e.crossOrigin = i),
                (e.src = a),
                (e.alt = n),
                (e.style.cssText =
                  'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"'),
                (t.innerHTML = ""),
                t.appendChild(e);
            }));
      },
      resetPreview: function () {
        z(this.previews, function (e) {
          var i = Dt(e, m),
            i =
              (v(e, { width: i.width, height: i.height }),
              (e.innerHTML = i.html),
              e),
            e = m;
          if (o(i[e]))
            try {
              delete i[e];
            } catch (t) {
              i[e] = void 0;
            }
          else if (i.dataset)
            try {
              delete i.dataset[e];
            } catch (t) {
              i.dataset[e] = void 0;
            }
          else i.removeAttribute("data-".concat(Ct(e)));
        });
      },
      preview: function () {
        var h = this.imageData,
          t = this.canvasData,
          e = this.cropBoxData,
          r = e.width,
          s = e.height,
          c = h.width,
          d = h.height,
          l = e.left - t.left - h.left,
          p = e.top - t.top - h.top;
        this.cropped &&
          !this.disabled &&
          (v(
            this.viewBoxImage,
            f(
              { width: c, height: d },
              M(f({ translateX: -l, translateY: -p }, h))
            )
          ),
          z(this.previews, function (t) {
            var e = Dt(t, m),
              i = e.width,
              e = e.height,
              a = i,
              n = e,
              o = 1;
            r && (n = s * (o = i / r)),
              s && e < n && ((a = r * (o = e / s)), (n = e)),
              v(t, { width: a, height: n }),
              v(
                t.getElementsByTagName("img")[0],
                f(
                  { width: c * o, height: d * o },
                  M(f({ translateX: -l * o, translateY: -p * o }, h))
                )
              );
          }));
      },
    },
    e = {
      bind: function () {
        var t = this.element,
          e = this.options,
          i = this.cropper;
        g(e.cropstart) && y(t, it, e.cropstart),
          g(e.cropmove) && y(t, et, e.cropmove),
          g(e.cropend) && y(t, tt, e.cropend),
          g(e.crop) && y(t, _, e.crop),
          g(e.zoom) && y(t, rt, e.zoom),
          y(i, nt, (this.onCropStart = this.cropStart.bind(this))),
          e.zoomable &&
            e.zoomOnWheel &&
            y(i, "wheel", (this.onWheel = this.wheel.bind(this)), {
              passive: !1,
              capture: !0,
            }),
          e.toggleDragModeOnDblclick &&
            y(i, at, (this.onDblclick = this.dblclick.bind(this))),
          y(t.ownerDocument, ot, (this.onCropMove = this.cropMove.bind(this))),
          y(t.ownerDocument, ht, (this.onCropEnd = this.cropEnd.bind(this))),
          e.responsive &&
            y(window, "resize", (this.onResize = this.resize.bind(this)));
      },
      unbind: function () {
        var t = this.element,
          e = this.options,
          i = this.cropper;
        g(e.cropstart) && a(t, it, e.cropstart),
          g(e.cropmove) && a(t, et, e.cropmove),
          g(e.cropend) && a(t, tt, e.cropend),
          g(e.crop) && a(t, _, e.crop),
          g(e.zoom) && a(t, rt, e.zoom),
          a(i, nt, this.onCropStart),
          e.zoomable &&
            e.zoomOnWheel &&
            a(i, "wheel", this.onWheel, { passive: !1, capture: !0 }),
          e.toggleDragModeOnDblclick && a(i, at, this.onDblclick),
          a(t.ownerDocument, ot, this.onCropMove),
          a(t.ownerDocument, ht, this.onCropEnd),
          e.responsive && a(window, "resize", this.onResize);
      },
    },
    St = {
      resize: function () {
        var i,
          a,
          n,
          t = this.options,
          e = this.container,
          o = this.containerData,
          h = Number(t.minContainerWidth) || 200,
          r = Number(t.minContainerHeight) || 100;
        this.disabled ||
          o.width <= h ||
          o.height <= r ||
          (1 == (n = e.offsetWidth / o.width) && e.offsetHeight === o.height) ||
          (t.restore &&
            ((i = this.getCanvasData()), (a = this.getCropBoxData())),
          this.render(),
          t.restore &&
            (this.setCanvasData(
              z(i, function (t, e) {
                i[e] = t * n;
              })
            ),
            this.setCropBoxData(
              z(a, function (t, e) {
                a[e] = t * n;
              })
            )));
      },
      dblclick: function () {
        var t, e;
        this.disabled ||
          this.options.dragMode === J ||
          this.setDragMode(
            ((t = this.dragBox),
            (e = $),
            (
              t.classList
                ? t.classList.contains(e)
                : -1 < t.className.indexOf(e)
            )
              ? V
              : G)
          );
      },
      wheel: function (t) {
        var e = this,
          i = Number(this.options.wheelZoomRatio) || 0.1,
          a = 1;
        this.disabled ||
          (t.preventDefault(), this.wheeling) ||
          ((this.wheeling = !0),
          setTimeout(function () {
            e.wheeling = !1;
          }, 50),
          t.deltaY
            ? (a = 0 < t.deltaY ? 1 : -1)
            : t.wheelDelta
            ? (a = -t.wheelDelta / 120)
            : t.detail && (a = 0 < t.detail ? 1 : -1),
          this.zoom(-a * i, t));
      },
      cropStart: function (t) {
        var e,
          i = t.buttons,
          a = t.button;
        this.disabled ||
          (("mousedown" === t.type ||
            ("pointerdown" === t.type && "mouse" === t.pointerType)) &&
            ((p(i) && 1 !== i) || (p(a) && 0 !== a) || t.ctrlKey)) ||
          ((i = this.options),
          (e = this.pointers),
          t.changedTouches
            ? z(t.changedTouches, function (t) {
                e[t.identifier] = s(t);
              })
            : (e[t.pointerId || 0] = s(t)),
          (a =
            1 < Object.keys(e).length && i.zoomable && i.zoomOnTouch
              ? q
              : Dt(t.target, l)),
          ct.test(a) &&
            !1 !== x(this.element, it, { originalEvent: t, action: a }) &&
            (t.preventDefault(),
            (this.action = a),
            (this.cropping = !1),
            a === I) &&
            ((this.cropping = !0), w(this.dragBox, n)));
      },
      cropMove: function (t) {
        var e,
          i = this.action;
        !this.disabled &&
          i &&
          ((e = this.pointers),
          t.preventDefault(),
          !1 !== x(this.element, et, { originalEvent: t, action: i })) &&
          (t.changedTouches
            ? z(t.changedTouches, function (t) {
                f(e[t.identifier] || {}, s(t, !0));
              })
            : f(e[t.pointerId || 0] || {}, s(t, !0)),
          this.change(t));
      },
      cropEnd: function (t) {
        var e, i;
        this.disabled ||
          ((e = this.action),
          (i = this.pointers),
          t.changedTouches
            ? z(t.changedTouches, function (t) {
                delete i[t.identifier];
              })
            : delete i[t.pointerId || 0],
          e &&
            (t.preventDefault(),
            Object.keys(i).length || (this.action = ""),
            this.cropping &&
              ((this.cropping = !1),
              r(this.dragBox, n, this.cropped && this.options.modal)),
            x(this.element, tt, { originalEvent: t, action: e })));
      },
    },
    Pt = {
      change: function (t) {
        var e = this.options,
          i = this.canvasData,
          a = this.containerData,
          n = this.cropBoxData,
          o = this.pointers,
          h = this.action,
          r = e.aspectRatio,
          s = n.left,
          c = n.top,
          d = n.width,
          l = n.height,
          p = s + d,
          m = c + l,
          u = 0,
          g = 0,
          f = a.width,
          v = a.height,
          w = !0;
        function b(t) {
          switch (t) {
            case B:
              p + D.x > f && (D.x = f - p);
              break;
            case k:
              s + D.x < u && (D.x = u - s);
              break;
            case T:
              c + D.y < g && (D.y = g - c);
              break;
            case O:
              m + D.y > v && (D.y = v - m);
          }
        }
        !r && t.shiftKey && (r = d && l ? d / l : 1),
          this.limited &&
            ((u = n.minLeft),
            (g = n.minTop),
            (f = u + Math.min(a.width, i.width, i.left + i.width)),
            (v = g + Math.min(a.height, i.height, i.top + i.height)));
        var y,
          x,
          M,
          C = o[Object.keys(o)[0]],
          D = { x: C.endX - C.startX, y: C.endY - C.startY };
        switch (h) {
          case P:
            (s += D.x), (c += D.y);
            break;
          case B:
            0 <= D.x && (f <= p || (r && (c <= g || v <= m)))
              ? (w = !1)
              : (b(B),
                (d += D.x) < 0 && ((h = k), (s -= d = -d)),
                r && (c += (n.height - (l = d / r)) / 2));
            break;
          case T:
            D.y <= 0 && (c <= g || (r && (s <= u || f <= p)))
              ? (w = !1)
              : (b(T),
                (l -= D.y),
                (c += D.y),
                l < 0 && ((h = O), (c -= l = -l)),
                r && (s += (n.width - (d = l * r)) / 2));
            break;
          case k:
            D.x <= 0 && (s <= u || (r && (c <= g || v <= m)))
              ? (w = !1)
              : (b(k),
                (d -= D.x),
                (s += D.x),
                d < 0 && ((h = B), (s -= d = -d)),
                r && (c += (n.height - (l = d / r)) / 2));
            break;
          case O:
            0 <= D.y && (v <= m || (r && (s <= u || f <= p)))
              ? (w = !1)
              : (b(O),
                (l += D.y) < 0 && ((h = T), (c -= l = -l)),
                r && (s += (n.width - (d = l * r)) / 2));
            break;
          case E:
            if (r) {
              if (D.y <= 0 && (c <= g || f <= p)) {
                w = !1;
                break;
              }
              b(T), (l -= D.y), (c += D.y), (d = l * r);
            } else
              b(T),
                b(B),
                !(0 <= D.x) || p < f
                  ? (d += D.x)
                  : D.y <= 0 && c <= g && (w = !1),
                (D.y <= 0 && !(g < c)) || ((l -= D.y), (c += D.y));
            d < 0 && l < 0
              ? ((h = H), (c -= l = -l), (s -= d = -d))
              : d < 0
              ? ((h = W), (s -= d = -d))
              : l < 0 && ((h = N), (c -= l = -l));
            break;
          case W:
            if (r) {
              if (D.y <= 0 && (c <= g || s <= u)) {
                w = !1;
                break;
              }
              b(T), (l -= D.y), (c += D.y), (s += n.width - (d = l * r));
            } else
              b(T),
                b(k),
                !(D.x <= 0) || u < s
                  ? ((d -= D.x), (s += D.x))
                  : D.y <= 0 && c <= g && (w = !1),
                (D.y <= 0 && !(g < c)) || ((l -= D.y), (c += D.y));
            d < 0 && l < 0
              ? ((h = N), (c -= l = -l), (s -= d = -d))
              : d < 0
              ? ((h = E), (s -= d = -d))
              : l < 0 && ((h = H), (c -= l = -l));
            break;
          case H:
            if (r) {
              if (D.x <= 0 && (s <= u || v <= m)) {
                w = !1;
                break;
              }
              b(k), (d -= D.x), (s += D.x), (l = d / r);
            } else
              b(O),
                b(k),
                !(D.x <= 0) || u < s
                  ? ((d -= D.x), (s += D.x))
                  : 0 <= D.y && v <= m && (w = !1),
                (0 <= D.y && !(m < v)) || (l += D.y);
            d < 0 && l < 0
              ? ((h = E), (c -= l = -l), (s -= d = -d))
              : d < 0
              ? ((h = N), (s -= d = -d))
              : l < 0 && ((h = W), (c -= l = -l));
            break;
          case N:
            if (r) {
              if (0 <= D.x && (f <= p || v <= m)) {
                w = !1;
                break;
              }
              b(B), (l = (d += D.x) / r);
            } else
              b(O),
                b(B),
                !(0 <= D.x) || p < f
                  ? (d += D.x)
                  : 0 <= D.y && v <= m && (w = !1),
                (0 <= D.y && !(m < v)) || (l += D.y);
            d < 0 && l < 0
              ? ((h = W), (c -= l = -l), (s -= d = -d))
              : d < 0
              ? ((h = H), (s -= d = -d))
              : l < 0 && ((h = E), (c -= l = -l));
            break;
          case U:
            this.move(D.x, D.y), (w = !1);
            break;
          case q:
            this.zoom(
              ((x = A({}, (y = o))),
              (M = []),
              z(y, function (n, t) {
                delete x[t],
                  z(x, function (t) {
                    var e = Math.abs(n.startX - t.startX),
                      i = Math.abs(n.startY - t.startY),
                      a = Math.abs(n.endX - t.endX),
                      t = Math.abs(n.endY - t.endY),
                      e = Math.sqrt(e * e + i * i),
                      i = (Math.sqrt(a * a + t * t) - e) / e;
                    M.push(i);
                  });
              }),
              M.sort(function (t, e) {
                return Math.abs(t) < Math.abs(e);
              }),
              M[0]),
              t
            ),
              (w = !1);
            break;
          case I:
            D.x && D.y
              ? ((y = Et(this.cropper)),
                (s = C.startX - y.left),
                (c = C.startY - y.top),
                (d = n.minWidth),
                (l = n.minHeight),
                0 < D.x
                  ? (h = 0 < D.y ? N : E)
                  : D.x < 0 && ((s -= d), (h = 0 < D.y ? H : W)),
                D.y < 0 && (c -= l),
                this.cropped ||
                  (X(this.cropBox, L),
                  (this.cropped = !0),
                  this.limited && this.limitCropBox(!0, !0)))
              : (w = !1);
        }
        w &&
          ((n.width = d),
          (n.height = l),
          (n.left = s),
          (n.top = c),
          (this.action = h),
          this.renderCropBox()),
          z(o, function (t) {
            (t.startX = t.endX), (t.startY = t.endY);
          });
      },
    },
    It = {
      crop: function () {
        return (
          !this.ready ||
            this.cropped ||
            this.disabled ||
            ((this.cropped = !0),
            this.limitCropBox(!0, !0),
            this.options.modal && w(this.dragBox, n),
            X(this.cropBox, L),
            this.setCropBoxData(this.initialCropBoxData)),
          this
        );
      },
      reset: function () {
        return (
          this.ready &&
            !this.disabled &&
            ((this.imageData = f({}, this.initialImageData)),
            (this.canvasData = f({}, this.initialCanvasData)),
            (this.cropBoxData = f({}, this.initialCropBoxData)),
            this.renderCanvas(),
            this.cropped) &&
            this.renderCropBox(),
          this
        );
      },
      clear: function () {
        return (
          this.cropped &&
            !this.disabled &&
            (f(this.cropBoxData, { left: 0, top: 0, width: 0, height: 0 }),
            (this.cropped = !1),
            this.renderCropBox(),
            this.limitCanvas(!0, !0),
            this.renderCanvas(),
            X(this.dragBox, n),
            w(this.cropBox, L)),
          this
        );
      },
      replace: function (e, t) {
        t = 1 < arguments.length && void 0 !== t && t;
        return (
          !this.disabled &&
            e &&
            (this.isImg && (this.element.src = e),
            t
              ? ((this.url = e),
                (this.image.src = e),
                this.ready &&
                  ((this.viewBoxImage.src = e),
                  z(this.previews, function (t) {
                    t.getElementsByTagName("img")[0].src = e;
                  })))
              : (this.isImg && (this.replaced = !0),
                (this.options.data = null),
                this.uncreate(),
                this.load(e))),
          this
        );
      },
      enable: function () {
        return (
          this.ready &&
            this.disabled &&
            ((this.disabled = !1), X(this.cropper, Q)),
          this
        );
      },
      disable: function () {
        return (
          this.ready &&
            !this.disabled &&
            ((this.disabled = !0), w(this.cropper, Q)),
          this
        );
      },
      destroy: function () {
        var t = this.element;
        return (
          t[d] &&
            ((t[d] = void 0),
            this.isImg && this.replaced && (t.src = this.originalUrl),
            this.uncreate()),
          this
        );
      },
      move: function (t, e) {
        var e = 1 < arguments.length && void 0 !== e ? e : t,
          i = this.canvasData,
          a = i.left,
          i = i.top;
        return this.moveTo(
          ft(t) ? t : a + Number(t),
          ft(e) ? e : i + Number(e)
        );
      },
      moveTo: function (t, e) {
        var e = 1 < arguments.length && void 0 !== e ? e : t,
          i = this.canvasData,
          a = !1;
        return (
          (t = Number(t)),
          (e = Number(e)),
          this.ready &&
            !this.disabled &&
            this.options.movable &&
            (p(t) && ((i.left = t), (a = !0)),
            p(e) && ((i.top = e), (a = !0)),
            a) &&
            this.renderCanvas(!0),
          this
        );
      },
      zoom: function (t, e) {
        var i = this.canvasData;
        return (
          (t = (t = Number(t)) < 0 ? 1 / (1 - t) : 1 + t),
          this.zoomTo((i.width * t) / i.naturalWidth, null, e)
        );
      },
      zoomTo: function (t, e, i) {
        var a,
          n,
          o,
          h = this.options,
          r = this.canvasData,
          s = r.width,
          c = r.height,
          d = r.naturalWidth,
          l = r.naturalHeight;
        if (
          0 <= (t = Number(t)) &&
          this.ready &&
          !this.disabled &&
          h.zoomable
        ) {
          (h = d * t), (l = l * t);
          if (
            !1 ===
            x(this.element, rt, { ratio: t, oldRatio: s / d, originalEvent: i })
          )
            return this;
          i
            ? ((t = this.pointers),
              (d = Et(this.cropper)),
              (t =
                t && Object.keys(t).length
                  ? ((o = n = a = 0),
                    z(t, function (t) {
                      var e = t.startX,
                        t = t.startY;
                      (a += e), (n += t), (o += 1);
                    }),
                    { pageX: (a /= o), pageY: (n /= o) })
                  : { pageX: i.pageX, pageY: i.pageY }),
              (r.left -= (h - s) * ((t.pageX - d.left - r.left) / s)),
              (r.top -= (l - c) * ((t.pageY - d.top - r.top) / c)))
            : u(e) && p(e.x) && p(e.y)
            ? ((r.left -= (h - s) * ((e.x - r.left) / s)),
              (r.top -= (l - c) * ((e.y - r.top) / c)))
            : ((r.left -= (h - s) / 2), (r.top -= (l - c) / 2)),
            (r.width = h),
            (r.height = l),
            this.renderCanvas(!0);
        }
        return this;
      },
      rotate: function (t) {
        return this.rotateTo((this.imageData.rotate || 0) + Number(t));
      },
      rotateTo: function (t) {
        return (
          p((t = Number(t))) &&
            this.ready &&
            !this.disabled &&
            this.options.rotatable &&
            ((this.imageData.rotate = t % 360), this.renderCanvas(!0, !0)),
          this
        );
      },
      scaleX: function (t) {
        var e = this.imageData.scaleY;
        return this.scale(t, p(e) ? e : 1);
      },
      scaleY: function (t) {
        var e = this.imageData.scaleX;
        return this.scale(p(e) ? e : 1, t);
      },
      scale: function (t, e) {
        var e = 1 < arguments.length && void 0 !== e ? e : t,
          i = this.imageData,
          a = !1;
        return (
          (t = Number(t)),
          (e = Number(e)),
          this.ready &&
            !this.disabled &&
            this.options.scalable &&
            (p(t) && ((i.scaleX = t), (a = !0)),
            p(e) && ((i.scaleY = e), (a = !0)),
            a) &&
            this.renderCanvas(!0, !0),
          this
        );
      },
      getData: function (t) {
        var i,
          a,
          t = 0 < arguments.length && void 0 !== t && t,
          e = this.options,
          n = this.imageData,
          o = this.canvasData,
          h = this.cropBoxData;
        return (
          this.ready && this.cropped
            ? ((i = {
                x: h.left - o.left,
                y: h.top - o.top,
                width: h.width,
                height: h.height,
              }),
              (a = n.width / n.naturalWidth),
              z(i, function (t, e) {
                i[e] = t / a;
              }),
              t &&
                ((o = Math.round(i.y + i.height)),
                (h = Math.round(i.x + i.width)),
                (i.x = Math.round(i.x)),
                (i.y = Math.round(i.y)),
                (i.width = h - i.x),
                (i.height = o - i.y)))
            : (i = { x: 0, y: 0, width: 0, height: 0 }),
          e.rotatable && (i.rotate = n.rotate || 0),
          e.scalable &&
            ((i.scaleX = n.scaleX || 1), (i.scaleY = n.scaleY || 1)),
          i
        );
      },
      setData: function (t) {
        var e,
          i = this.options,
          a = this.imageData,
          n = this.canvasData,
          o = {};
        return (
          this.ready &&
            !this.disabled &&
            u(t) &&
            ((e = !1),
            i.rotatable &&
              p(t.rotate) &&
              t.rotate !== a.rotate &&
              ((a.rotate = t.rotate), (e = !0)),
            i.scalable &&
              (p(t.scaleX) &&
                t.scaleX !== a.scaleX &&
                ((a.scaleX = t.scaleX), (e = !0)),
              p(t.scaleY)) &&
              t.scaleY !== a.scaleY &&
              ((a.scaleY = t.scaleY), (e = !0)),
            e && this.renderCanvas(!0, !0),
            (i = a.width / a.naturalWidth),
            p(t.x) && (o.left = t.x * i + n.left),
            p(t.y) && (o.top = t.y * i + n.top),
            p(t.width) && (o.width = t.width * i),
            p(t.height) && (o.height = t.height * i),
            this.setCropBoxData(o)),
          this
        );
      },
      getContainerData: function () {
        return this.ready ? f({}, this.containerData) : {};
      },
      getImageData: function () {
        return this.sized ? f({}, this.imageData) : {};
      },
      getCanvasData: function () {
        var e = this.canvasData,
          i = {};
        return (
          this.ready &&
            z(
              [
                "left",
                "top",
                "width",
                "height",
                "naturalWidth",
                "naturalHeight",
              ],
              function (t) {
                i[t] = e[t];
              }
            ),
          i
        );
      },
      setCanvasData: function (t) {
        var e = this.canvasData,
          i = e.aspectRatio;
        return (
          this.ready &&
            !this.disabled &&
            u(t) &&
            (p(t.left) && (e.left = t.left),
            p(t.top) && (e.top = t.top),
            p(t.width)
              ? ((e.width = t.width), (e.height = t.width / i))
              : p(t.height) &&
                ((e.height = t.height), (e.width = t.height * i)),
            this.renderCanvas(!0)),
          this
        );
      },
      getCropBoxData: function () {
        var t,
          e = this.cropBoxData;
        return (
          (t =
            this.ready && this.cropped
              ? { left: e.left, top: e.top, width: e.width, height: e.height }
              : t) || {}
        );
      },
      setCropBoxData: function (t) {
        var e,
          i,
          a = this.cropBoxData,
          n = this.options.aspectRatio;
        return (
          this.ready &&
            this.cropped &&
            !this.disabled &&
            u(t) &&
            (p(t.left) && (a.left = t.left),
            p(t.top) && (a.top = t.top),
            p(t.width) &&
              t.width !== a.width &&
              ((e = !0), (a.width = t.width)),
            p(t.height) &&
              t.height !== a.height &&
              ((i = !0), (a.height = t.height)),
            n && (e ? (a.height = a.width / n) : i && (a.width = a.height * n)),
            this.renderCropBox()),
          this
        );
      },
      getCroppedCanvas: function (t) {
        t = 0 < arguments.length && void 0 !== t ? t : {};
        if (!this.ready || !window.HTMLCanvasElement) return null;
        var e = this.canvasData,
          i =
            ((w = this.image),
            (g = this.imageData),
            (B = g.aspectRatio),
            (n = g.naturalWidth),
            (r = g.naturalHeight),
            (m = void 0 === (m = g.rotate) ? 0 : m),
            (u = void 0 === (u = g.scaleX) ? 1 : u),
            (g = void 0 === (g = g.scaleY) ? 1 : g),
            (o = e.aspectRatio),
            (l = e.naturalWidth),
            (h = e.naturalHeight),
            (d = void 0 === (d = t.fillColor) ? "transparent" : d),
            (f = void 0 === (f = t.imageSmoothingEnabled) || f),
            (v = void 0 === (v = t.imageSmoothingQuality) ? "low" : v),
            (s = void 0 === (s = t.maxWidth) ? 1 / 0 : s),
            (c = void 0 === (c = t.maxHeight) ? 1 / 0 : c),
            (i = void 0 === (i = t.minWidth) ? 0 : i),
            (a = void 0 === (a = t.minHeight) ? 0 : a),
            (O = document.createElement("canvas")),
            (k = O.getContext("2d")),
            (p = R({ aspectRatio: o, width: s, height: c })),
            (o = R({ aspectRatio: o, width: i, height: a }, "cover")),
            (l = Math.min(p.width, Math.max(o.width, l))),
            (p = Math.min(p.height, Math.max(o.height, h))),
            (o = R({ aspectRatio: B, width: s, height: c })),
            (h = R({ aspectRatio: B, width: i, height: a }, "cover")),
            (s = Math.min(o.width, Math.max(h.width, n))),
            (c = Math.min(o.height, Math.max(h.height, r))),
            (B = [-s / 2, -c / 2, s, c]),
            (O.width = Y(l)),
            (O.height = Y(p)),
            (k.fillStyle = d),
            k.fillRect(0, 0, l, p),
            k.save(),
            k.translate(l / 2, p / 2),
            k.rotate((m * Math.PI) / 180),
            k.scale(u, g),
            (k.imageSmoothingEnabled = f),
            (k.imageSmoothingQuality = v),
            k.drawImage.apply(
              k,
              [w].concat(
                S(
                  B.map(function (t) {
                    return Math.floor(Y(t));
                  })
                )
              )
            ),
            k.restore(),
            O);
        if (!this.cropped) return i;
        var a = this.getData(),
          n = a.x,
          o = a.y,
          h = a.width,
          r = a.height,
          s = i.width / Math.floor(e.naturalWidth),
          c = (1 != s && ((n *= s), (o *= s), (h *= s), (r *= s)), h / r),
          d = R({
            aspectRatio: c,
            width: t.maxWidth || 1 / 0,
            height: t.maxHeight || 1 / 0,
          }),
          l = R(
            {
              aspectRatio: c,
              width: t.minWidth || 0,
              height: t.minHeight || 0,
            },
            "cover"
          ),
          p = R({
            aspectRatio: c,
            width: t.width || (1 != s ? i.width : h),
            height: t.height || (1 != s ? i.height : r),
          }),
          m = p.width,
          u = p.height,
          m = Math.min(d.width, Math.max(l.width, m)),
          u = Math.min(d.height, Math.max(l.height, u)),
          g = document.createElement("canvas"),
          f = g.getContext("2d"),
          v =
            ((g.width = Y(m)),
            (g.height = Y(u)),
            (f.fillStyle = t.fillColor || "transparent"),
            f.fillRect(0, 0, m, u),
            t.imageSmoothingEnabled),
          w = t.imageSmoothingQuality;
        (f.imageSmoothingEnabled = void 0 === v || v),
          w && (f.imageSmoothingQuality = w);
        var b,
          y,
          x,
          M,
          C,
          D,
          c,
          B = i.width,
          k = i.height,
          O = n,
          a = o,
          e =
            (O <= -h || B < O
              ? (C = x = b = O = 0)
              : O <= 0
              ? ((x = -O), (O = 0), (C = b = Math.min(B, h + O)))
              : O <= B && ((x = 0), (C = b = Math.min(h, B - O))),
            b <= 0 || a <= -r || k < a
              ? (D = M = y = a = 0)
              : a <= 0
              ? ((M = -a), (a = 0), (D = y = Math.min(k, r + a)))
              : a <= k && ((M = 0), (D = y = Math.min(r, k - a))),
            [O, a, b, y]);
        return (
          0 < C && 0 < D && e.push(x * (c = m / h), M * c, C * c, D * c),
          f.drawImage.apply(
            f,
            [i].concat(
              S(
                e.map(function (t) {
                  return Math.floor(Y(t));
                })
              )
            )
          ),
          g
        );
      },
      setAspectRatio: function (t) {
        var e = this.options;
        return (
          this.disabled ||
            ft(t) ||
            ((e.aspectRatio = Math.max(0, t) || NaN),
            this.ready &&
              (this.initCropBox(), this.cropped) &&
              this.renderCropBox()),
          this
        );
      },
      setDragMode: function (t) {
        var e,
          i,
          a = this.options,
          n = this.dragBox,
          o = this.face;
        return (
          this.ready &&
            !this.disabled &&
            ((i = a.movable && t === V),
            (a.dragMode = t = (e = t === G) || i ? t : J),
            b(n, l, t),
            r(n, $, e),
            r(n, F, i),
            a.cropBoxMovable || (b(o, l, t), r(o, $, e), r(o, F, i))),
          this
        );
      },
    },
    Ut = h.Cropper,
    qt =
      ((Rt = [
        {
          key: "noConflict",
          value: function () {
            return (window.Cropper = Ut), $t;
          },
        },
        {
          key: "setDefaults",
          value: function (t) {
            f(mt, u(t) && t);
          },
        },
      ]),
      D((Xt = $t).prototype, [
        {
          key: "init",
          value: function () {
            var t,
              e = this.element,
              i = e.tagName.toLowerCase();
            if (!e[d]) {
              if (((e[d] = this), "img" === i)) {
                if (
                  ((this.isImg = !0),
                  (t = e.getAttribute("src") || ""),
                  !(this.originalUrl = t))
                )
                  return;
                t = e.src;
              } else
                "canvas" === i &&
                  window.HTMLCanvasElement &&
                  (t = e.toDataURL());
              this.load(t);
            }
          },
        },
        {
          key: "load",
          value: function (t) {
            var e,
              i,
              a,
              n,
              o,
              h,
              r = this;
            t &&
              ((this.url = t),
              (this.imageData = {}),
              (e = this.element),
              (i = this.options).rotatable ||
                i.scalable ||
                (i.checkOrientation = !1),
              i.checkOrientation && window.ArrayBuffer
                ? dt.test(t)
                  ? lt.test(t)
                    ? this.read(
                        ((n = t.replace(Yt, "")),
                        (o = atob(n)),
                        (n = new ArrayBuffer(o.length)),
                        z((h = new Uint8Array(n)), function (t, e) {
                          h[e] = o.charCodeAt(e);
                        }),
                        n)
                      )
                    : this.clone()
                  : ((a = new XMLHttpRequest()),
                    (n = this.clone.bind(this)),
                    (this.reloading = !0),
                    ((this.xhr = a).onabort = n),
                    (a.onerror = n),
                    (a.ontimeout = n),
                    (a.onprogress = function () {
                      a.getResponseHeader("content-type") !== st && a.abort();
                    }),
                    (a.onload = function () {
                      r.read(a.response);
                    }),
                    (a.onloadend = function () {
                      (r.reloading = !1), (r.xhr = null);
                    }),
                    i.checkCrossOrigin && Ht(t) && e.crossOrigin && (t = Lt(t)),
                    a.open("GET", t),
                    (a.responseType = "arraybuffer"),
                    (a.withCredentials = "use-credentials" === e.crossOrigin),
                    a.send())
                : this.clone());
          },
        },
        {
          key: "read",
          value: function (i) {
            var t,
              e = this.options,
              a = this.imageData,
              n = (function (t) {
                var e,
                  i,
                  a,
                  n,
                  o,
                  h,
                  r,
                  s = new DataView(t);
                try {
                  if (255 === s.getUint8(0) && 216 === s.getUint8(1))
                    for (var c = s.byteLength, d = 2; d + 1 < c; ) {
                      if (255 === s.getUint8(d) && 225 === s.getUint8(d + 1)) {
                        a = d;
                        break;
                      }
                      d += 1;
                    }
                  if (
                    (a &&
                      ((o = a + 10),
                      "Exif" !==
                        (function (t, e, i) {
                          var a = "";
                          i += e;
                          for (var n = e; n < i; n += 1) a += zt(t.getUint8(n));
                          return a;
                        })(s, a + 4, 4) ||
                        (!(i = 18761 === (h = s.getUint16(o))) &&
                          19789 !== h) ||
                        42 !== s.getUint16(o + 2, i) ||
                        (8 <= (r = s.getUint32(o + 4, i)) && (n = o + r))),
                    n)
                  )
                    for (var l, p = s.getUint16(n, i), m = 0; m < p; m += 1)
                      if (((l = n + 12 * m + 2), 274 === s.getUint16(l, i))) {
                        (l += 8), (e = s.getUint16(l, i)), s.setUint16(l, 1, i);
                        break;
                      }
                } catch (t) {
                  e = 1;
                }
                return e;
              })(i),
              o = 0,
              h = 1,
              r = 1;
            1 < n &&
              ((this.url = (function () {
                for (var t = [], e = new Uint8Array(i); 0 < e.length; )
                  t.push(zt.apply(null, bt(e.subarray(0, 8192)))),
                    (e = e.subarray(8192));
                return "data:"
                  .concat("image/jpeg", ";base64,")
                  .concat(btoa(t.join("")));
              })()),
              (o = (t = (function () {
                var t = 0,
                  e = 1,
                  i = 1;
                switch (n) {
                  case 2:
                    e = -1;
                    break;
                  case 3:
                    t = -180;
                    break;
                  case 4:
                    i = -1;
                    break;
                  case 5:
                    (t = 90), (i = -1);
                    break;
                  case 6:
                    t = 90;
                    break;
                  case 7:
                    (t = 90), (e = -1);
                    break;
                  case 8:
                    t = -90;
                }
                return { rotate: t, scaleX: e, scaleY: i };
              })()).rotate),
              (h = t.scaleX),
              (r = t.scaleY)),
              e.rotatable && (a.rotate = o),
              e.scalable && ((a.scaleX = h), (a.scaleY = r)),
              this.clone();
          },
        },
        {
          key: "clone",
          value: function () {
            var t = this.element,
              e = this.url,
              i = t.crossOrigin,
              a = e,
              n =
                (this.options.checkCrossOrigin &&
                  Ht(e) &&
                  ((i = i || "anonymous"), (a = Lt(e))),
                (this.crossOrigin = i),
                (this.crossOriginUrl = a),
                document.createElement("img"));
            i && (n.crossOrigin = i),
              (n.src = a || e),
              (n.alt = t.alt || "The image to crop"),
              ((this.image = n).onload = this.start.bind(this)),
              (n.onerror = this.stop.bind(this)),
              w(n, K),
              t.parentNode.insertBefore(n, t.nextSibling);
          },
        },
        {
          key: "start",
          value: function () {
            var i = this,
              t = this.image;
            function e(t, e) {
              f(i.imageData, {
                naturalWidth: t,
                naturalHeight: e,
                aspectRatio: t / e,
              }),
                (i.sizing = !1),
                (i.sized = !0),
                i.build();
            }
            (t.onload = null), (t.onerror = null), (this.sizing = !0);
            var a,
              n,
              o =
                h.navigator &&
                /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(
                  h.navigator.userAgent
                );
            !t.naturalWidth || o
              ? ((a = document.createElement("img")),
                (n = document.body || document.documentElement),
                ((this.sizingImage = a).onload = function () {
                  e(a.width, a.height), o || n.removeChild(a);
                }),
                (a.src = t.src),
                o ||
                  ((a.style.cssText =
                    "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;"),
                  n.appendChild(a)))
              : e(t.naturalWidth, t.naturalHeight);
          },
        },
        {
          key: "stop",
          value: function () {
            var t = this.image;
            (t.onload = null),
              (t.onerror = null),
              t.parentNode.removeChild(t),
              (this.image = null);
          },
        },
        {
          key: "build",
          value: function () {
            var t, e, i, a, n, o, h, r, s;
            this.sized &&
              !this.ready &&
              ((t = this.element),
              (e = this.options),
              (i = this.image),
              (a = t.parentNode),
              ((n = document.createElement("div")).innerHTML =
                '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>'),
              (o = (n = n.querySelector(
                ".".concat(d, "-container")
              )).querySelector(".".concat(d, "-canvas"))),
              (h = n.querySelector(".".concat(d, "-drag-box"))),
              (s = (r = n.querySelector(
                ".".concat(d, "-crop-box")
              )).querySelector(".".concat(d, "-face"))),
              (this.container = a),
              (this.cropper = n),
              (this.canvas = o),
              (this.dragBox = h),
              (this.cropBox = r),
              (this.viewBox = n.querySelector(".".concat(d, "-view-box"))),
              (this.face = s),
              o.appendChild(i),
              w(t, L),
              a.insertBefore(n, t.nextSibling),
              this.isImg || X(i, K),
              this.initPreview(),
              this.bind(),
              (e.initialAspectRatio = Math.max(0, e.initialAspectRatio) || NaN),
              (e.aspectRatio = Math.max(0, e.aspectRatio) || NaN),
              (e.viewMode =
                Math.max(0, Math.min(3, Math.round(e.viewMode))) || 0),
              w(r, L),
              e.guides ||
                w(r.getElementsByClassName("".concat(d, "-dashed")), L),
              e.center ||
                w(r.getElementsByClassName("".concat(d, "-center")), L),
              e.background && w(n, "".concat(d, "-bg")),
              e.highlight || w(s, Z),
              e.cropBoxMovable && (w(s, F), b(s, l, P)),
              e.cropBoxResizable ||
                (w(r.getElementsByClassName("".concat(d, "-line")), L),
                w(r.getElementsByClassName("".concat(d, "-point")), L)),
              this.render(),
              (this.ready = !0),
              this.setDragMode(e.dragMode),
              e.autoCrop && this.crop(),
              this.setData(e.data),
              g(e.ready) && y(t, "ready", e.ready, { once: !0 }),
              x(t, "ready"));
          },
        },
        {
          key: "unbuild",
          value: function () {
            this.ready &&
              ((this.ready = !1),
              this.unbind(),
              this.resetPreview(),
              this.cropper.parentNode.removeChild(this.cropper),
              X(this.element, L));
          },
        },
        {
          key: "uncreate",
          value: function () {
            this.ready
              ? (this.unbuild(), (this.ready = !1), (this.cropped = !1))
              : this.sizing
              ? ((this.sizingImage.onload = null),
                (this.sizing = !1),
                (this.sized = !1))
              : this.reloading
              ? ((this.xhr.onabort = null), this.xhr.abort())
              : this.image && this.stop();
          },
        },
      ]),
      D(Xt, Rt),
      $t);
  function $t(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
      i = this;
    if (!(i instanceof $t))
      throw new TypeError("Cannot call a class as a function");
    if (!t || !pt.test(t.tagName))
      throw new Error(
        "The first argument is required and must be an <img> or <canvas> element."
      );
    (this.element = t),
      (this.options = f({}, mt, u(e) && e)),
      (this.cropped = !1),
      (this.disabled = !1),
      (this.pointers = {}),
      (this.ready = !1),
      (this.reloading = !1),
      (this.replaced = !1),
      (this.sized = !1),
      (this.sizing = !1),
      this.init();
  }
  f(qt.prototype, t, i, e, St, Pt, It),
    c.fn &&
      ((jt = c.fn.cropper),
      (At = "cropper"),
      (c.fn.cropper = function (h) {
        for (
          var r, t = arguments.length, s = new Array(1 < t ? t - 1 : 0), e = 1;
          e < t;
          e++
        )
          s[e - 1] = arguments[e];
        return (
          this.each(function (t, e) {
            var i = c(e),
              a = "destroy" === h;
            if (!(o = i.data(At))) {
              if (a) return;
              var n = c.extend({}, i.data(), c.isPlainObject(h) && h),
                o = new qt(e, n);
              i.data(At, o);
            }
            "string" == typeof h &&
              ((e = o[h]), c.isFunction(e)) &&
              ((r = e.apply(o, s)) === o && (r = void 0), a) &&
              i.removeData(At);
          }),
          void 0 !== r ? r : this
        );
      }),
      (c.fn.cropper.Constructor = qt),
      (c.fn.cropper.setDefaults = qt.setDefaults),
      (c.fn.cropper.noConflict = function () {
        return (c.fn.cropper = jt), this;
      }));
});
