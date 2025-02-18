!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.Raphael = e())
    : (t.Raphael = e());
})(window, function () {
  return (
    (i = {
      "./dev/raphael.amd.js": function (t, e, i) {
        (i = [
          i("./dev/raphael.core.js"),
          i("./dev/raphael.svg.js"),
          i("./dev/raphael.vml.js"),
        ]),
          (e = function (t) {
            return t;
          }.apply(e, i));
        void 0 !== e && (t.exports = e);
      },
      "./dev/raphael.core.js": function (t, e, i) {
        (i = [i("./node_modules/eve-raphael/eve.js")]),
          (e = function (T) {
            function A(t) {
              var e, i;
              return A.is(t, "function")
                ? p
                  ? t()
                  : T.on("raphael.DOMload", t)
                : A.is(t, m)
                ? A._engine.create[b](A, t.splice(0, 3 + A.is(t[0], D))).add(t)
                : ((e = Array.prototype.slice.call(arguments, 0)),
                  A.is(e[e.length - 1], "function")
                    ? ((i = e.pop()),
                      p
                        ? i.call(A._engine.create[b](A, e))
                        : T.on("raphael.DOMload", function () {
                            i.call(A._engine.create[b](A, e));
                          }))
                    : A._engine.create[b](A, arguments));
            }
            (A.version = "2.3.0"), (A.eve = T);
            function h() {
              this.ca = this.customAttributes = {};
            }
            function l(t, e, i, r) {
              return [
                ["M", t, e],
                ["m", 0, -(r = null == r ? i : r)],
                ["a", i, r, 0, 1, 1, 0, 2 * r],
                ["a", i, r, 0, 1, 1, 0, -2 * r],
                ["z"],
              ];
            }
            var p,
              G = /[, ]+/,
              f = {
                circle: 1,
                rect: 1,
                path: 1,
                ellipse: 1,
                text: 1,
                image: 1,
              },
              y = /\{(\d+)\}/g,
              P = "hasOwnProperty",
              d = { doc: document, win: window },
              v = {
                was: Object.prototype[P].call(d.win, "Raphael"),
                is: d.win.Raphael,
              },
              b = "apply",
              E = "concat",
              Y =
                "ontouchstart" in window ||
                window.TouchEvent ||
                (window.DocumentTouch && document instanceof DocumentTouch),
              w = "",
              _ = " ",
              z = String,
              I = "split",
              W =
                "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[
                  I
                ](_),
              q = {
                mousedown: "touchstart",
                mousemove: "touchmove",
                mouseup: "touchend",
              },
              X = z.prototype.toLowerCase,
              C = Math,
              k = C.max,
              S = C.min,
              M = C.abs,
              x = C.pow,
              B = C.PI,
              D = "number",
              V = "string",
              m = "array",
              U = Object.prototype.toString,
              $ =
                ((A._ISURL = /^url\(['"]?(.+?)['"]?\)$/i),
                /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
              Z = { NaN: 1, Infinity: 1, "-Infinity": 1 },
              Q = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
              J = C.round,
              R = parseFloat,
              u = parseInt,
              K = z.prototype.toUpperCase,
              tt = (A._availableAttrs = {
                "arrow-end": "none",
                "arrow-start": "none",
                blur: 0,
                "clip-rect": "0 0 1e9 1e9",
                cursor: "default",
                cx: 0,
                cy: 0,
                fill: "#fff",
                "fill-opacity": 1,
                font: '10px "Arial"',
                "font-family": '"Arial"',
                "font-size": "10",
                "font-style": "normal",
                "font-weight": 400,
                gradient: 0,
                height: 0,
                href: "http://raphaeljs.com/",
                "letter-spacing": 0,
                opacity: 1,
                path: "M0,0",
                r: 0,
                rx: 0,
                ry: 0,
                src: "",
                stroke: "#000",
                "stroke-dasharray": "",
                "stroke-linecap": "butt",
                "stroke-linejoin": "butt",
                "stroke-miterlimit": 0,
                "stroke-opacity": 1,
                "stroke-width": 1,
                target: "_blank",
                "text-anchor": "middle",
                title: "Raphael",
                transform: "",
                width: 0,
                x: 0,
                y: 0,
                class: "",
              }),
              et = (A._availableAnimAttrs = {
                blur: D,
                "clip-rect": "csv",
                cx: D,
                cy: D,
                fill: "colour",
                "fill-opacity": D,
                "font-size": D,
                height: D,
                opacity: D,
                path: "path",
                r: D,
                rx: D,
                ry: D,
                stroke: "colour",
                "stroke-opacity": D,
                "stroke-width": D,
                transform: "transform",
                width: D,
                x: D,
                y: D,
              }),
              it =
                /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
              rt = { hs: 1, rg: 1 },
              nt = /,?([achlmqrstvxz]),?/gi,
              st =
                /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
              ot =
                /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
              at =
                /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
              n =
                ((A._radial_gradient =
                  /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/),
                {}),
              ht = function (t, e) {
                return R(t) - R(e);
              },
              lt = function (t) {
                return t;
              },
              ut = (A._rectPath = function (t, e, i, r, n) {
                return n
                  ? [
                      ["M", t + n, e],
                      ["l", i - 2 * n, 0],
                      ["a", n, n, 0, 0, 1, n, n],
                      ["l", 0, r - 2 * n],
                      ["a", n, n, 0, 0, 1, -n, n],
                      ["l", 2 * n - i, 0],
                      ["a", n, n, 0, 0, 1, -n, -n],
                      ["l", 0, 2 * n - r],
                      ["a", n, n, 0, 0, 1, n, -n],
                      ["z"],
                    ]
                  : [
                      ["M", t, e],
                      ["l", i, 0],
                      ["l", 0, r],
                      ["l", -i, 0],
                      ["z"],
                    ];
              }),
              ct = (A._getPath = {
                path: function (t) {
                  return t.attr("path");
                },
                circle: function (t) {
                  t = t.attrs;
                  return l(t.cx, t.cy, t.r);
                },
                ellipse: function (t) {
                  t = t.attrs;
                  return l(t.cx, t.cy, t.rx, t.ry);
                },
                rect: function (t) {
                  t = t.attrs;
                  return ut(t.x, t.y, t.width, t.height, t.r);
                },
                image: function (t) {
                  t = t.attrs;
                  return ut(t.x, t.y, t.width, t.height);
                },
                text: function (t) {
                  t = t._getBBox();
                  return ut(t.x, t.y, t.width, t.height);
                },
                set: function (t) {
                  t = t._getBBox();
                  return ut(t.x, t.y, t.width, t.height);
                },
              }),
              pt = (A.mapPath = function (t, e) {
                if (e)
                  for (
                    var i, r, n, s, o, a = 0, h = (t = It(t)).length;
                    a < h;
                    a++
                  )
                    for (n = 1, s = (o = t[a]).length; n < s; n += 2)
                      (i = e.x(o[n], o[n + 1])),
                        (r = e.y(o[n], o[n + 1])),
                        (o[n] = i),
                        (o[n + 1] = r);
                return t;
              });
            if (
              ((A._g = d),
              (A.type =
                d.win.SVGAngle ||
                d.doc.implementation.hasFeature(
                  "http://www.w3.org/TR/SVG11/feature#BasicStructure",
                  "1.1"
                )
                  ? "SVG"
                  : "VML"),
              "VML" == A.type)
            ) {
              var t,
                e = d.doc.createElement("div");
              if (
                ((e.innerHTML = '<v:shape adj="1"/>'),
                ((t = e.firstChild).style.behavior = "url(#default#VML)"),
                !t || "object" != typeof t.adj)
              )
                return (A.type = w);
              e = null;
            }
            function ft(t) {
              if ("function" == typeof t || Object(t) !== t) return t;
              var e,
                i = new t.constructor();
              for (e in t) t[P](e) && (i[e] = ft(t[e]));
              return i;
            }
            (A.svg = !(A.vml = "VML" == A.type)),
              (A._Paper = h),
              (A.fn = t = h.prototype = A.prototype),
              (A._id = 0),
              (A.is = function (t, e) {
                return "finite" == (e = X.call(e))
                  ? !Z[P](+t)
                  : "array" == e
                  ? t instanceof Array
                  : ("null" == e && null === t) ||
                    (e == typeof t && null !== t) ||
                    ("object" == e && t === Object(t)) ||
                    ("array" == e && Array.isArray && Array.isArray(t)) ||
                    U.call(t).slice(8, -1).toLowerCase() == e;
              }),
              (A.angle = function (t, e, i, r, n, s) {
                var o, a;
                return null == n
                  ? ((a = e - r),
                    (o = t - i) || a
                      ? (180 + (180 * C.atan2(-a, -o)) / B + 360) % 360
                      : 0)
                  : A.angle(t, e, n, s) - A.angle(i, r, n, s);
              }),
              (A.rad = function (t) {
                return ((t % 360) * B) / 180;
              }),
              (A.deg = function (t) {
                return Math.round((((180 * t) / B) % 360) * 1e3) / 1e3;
              }),
              (A.snapTo = function (t, e, i) {
                if (((i = A.is(i, "finite") ? i : 10), A.is(t, m))) {
                  for (var r = t.length; r--; )
                    if (M(t[r] - e) <= i) return t[r];
                } else {
                  var n = e % (t = +t);
                  if (n < i) return e - n;
                  if (t - i < n) return e - n + t;
                }
                return e;
              });
            A.createUUID =
              ((mt = /[xy]/g),
              (vt = function (t) {
                var e = (16 * C.random()) | 0;
                return ("x" == t ? e : (3 & e) | 8).toString(16);
              }),
              function () {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
                  .replace(mt, vt)
                  .toUpperCase();
              });
            function dt() {
              return "hsb(" + [this.h, this.s, this.b] + ")";
            }
            function gt() {
              return "hsl(" + [this.h, this.s, this.l] + ")";
            }
            function xt(t, e, i) {
              var r;
              return (
                null == e &&
                  A.is(t, "object") &&
                  "r" in t &&
                  "g" in t &&
                  "b" in t &&
                  ((i = t.b), (e = t.g), (t = t.r)),
                null == e &&
                  A.is(t, V) &&
                  ((t = (r = A.getRGB(t)).r), (e = r.g), (i = r.b)),
                (1 < t || 1 < e || 1 < i) &&
                  ((t /= 255), (e /= 255), (i /= 255)),
                [t, e, i]
              );
            }
            function yt(t, e, i, r) {
              return (
                (t = {
                  r: (t *= 255),
                  g: (e *= 255),
                  b: (i *= 255),
                  hex: A.rgb(t, e, i),
                  toString: wt,
                }),
                A.is(r, "finite") && (t.opacity = r),
                t
              );
            }
            A.setWindow = function (t) {
              T("raphael.setWindow", A, d.win, t),
                (d.win = t),
                (d.doc = d.win.document),
                A._engine.initWin && A._engine.initWin(d.win);
            };
            var mt,
              vt,
              bt = function (t) {
                if (A.vml) {
                  var i,
                    r = /^\s+|\s+$/g;
                  try {
                    var e = new ActiveXObject("htmlfile");
                    e.write("<body>"), e.close(), (i = e.body);
                  } catch (t) {
                    i = createPopup().document.body;
                  }
                  var n = i.createTextRange();
                  bt = L(function (t) {
                    try {
                      i.style.color = z(t).replace(r, w);
                      var e = n.queryCommandValue("ForeColor");
                      return (
                        "#" +
                        (
                          "000000" +
                          (e =
                            ((255 & e) << 16) |
                            (65280 & e) |
                            ((16711680 & e) >>> 16)).toString(16)
                        ).slice(-6)
                      );
                    } catch (t) {
                      return "none";
                    }
                  });
                } else {
                  var s = d.doc.createElement("i");
                  (s.title = "Raphaël Colour Picker"),
                    (s.style.display = "none"),
                    d.doc.body.appendChild(s),
                    (bt = L(function (t) {
                      return (
                        (s.style.color = t),
                        d.doc.defaultView
                          .getComputedStyle(s, w)
                          .getPropertyValue("color")
                      );
                    }));
                }
                return bt(t);
              },
              wt = function () {
                return this.hex;
              };
            function L(n, s, o) {
              function a() {
                var t = Array.prototype.slice.call(arguments, 0),
                  e = t.join("␀"),
                  i = (a.cache = a.cache || {}),
                  r = (a.count = a.count || []);
                return (
                  i[P](e)
                    ? (function (t, e) {
                        for (var i = 0, r = t.length; i < r; i++)
                          if (t[i] === e) return t.push(t.splice(i, 1)[0]);
                      })(r, e)
                    : (1e3 <= r.length && delete i[r.shift()],
                      r.push(e),
                      (i[e] = n[b](s, t))),
                  o ? o(i[e]) : i[e]
                );
              }
              return a;
            }
            (A.color = function (t) {
              var e;
              return (
                A.is(t, "object") && "h" in t && "s" in t && "b" in t
                  ? ((e = A.hsb2rgb(t)),
                    (t.r = e.r),
                    (t.g = e.g),
                    (t.b = e.b),
                    (t.hex = e.hex))
                  : A.is(t, "object") && "h" in t && "s" in t && "l" in t
                  ? ((e = A.hsl2rgb(t)),
                    (t.r = e.r),
                    (t.g = e.g),
                    (t.b = e.b),
                    (t.hex = e.hex))
                  : (A.is(t, "string") && (t = A.getRGB(t)),
                    A.is(t, "object") && "r" in t && "g" in t && "b" in t
                      ? ((e = A.rgb2hsl(t)),
                        (t.h = e.h),
                        (t.s = e.s),
                        (t.l = e.l),
                        (e = A.rgb2hsb(t)),
                        (t.v = e.b))
                      : ((t = { hex: "none" }).r =
                          t.g =
                          t.b =
                          t.h =
                          t.s =
                          t.v =
                          t.l =
                            -1)),
                (t.toString = wt),
                t
              );
            }),
              (A.hsb2rgb = function (t, e, i, r) {
                var n, s, o;
                return (
                  this.is(t, "object") &&
                    "h" in t &&
                    "s" in t &&
                    "b" in t &&
                    ((i = t.b), (e = t.s), (r = t.o), (t = t.h)),
                  (o =
                    (e = i * e) *
                    (1 - M(((t = ((t *= 360) % 360) / 60) % 2) - 1))),
                  (n = s = i = i - e),
                  yt(
                    (n += [e, o, 0, 0, o, e][(t = ~~t)]),
                    (s += [o, e, e, o, 0, 0][t]),
                    (i += [0, 0, o, e, e, o][t]),
                    r
                  )
                );
              }),
              (A.hsl2rgb = function (t, e, i, r) {
                var n, s, o;
                return (
                  this.is(t, "object") &&
                    "h" in t &&
                    "s" in t &&
                    "l" in t &&
                    ((i = t.l), (e = t.s), (t = t.h)),
                  (1 < t || 1 < e || 1 < i) &&
                    ((t /= 360), (e /= 100), (i /= 100)),
                  (o =
                    (e = 2 * e * (i < 0.5 ? i : 1 - i)) *
                    (1 - M(((t = ((t *= 360) % 360) / 60) % 2) - 1))),
                  (n = s = i = i - e / 2),
                  yt(
                    (n += [e, o, 0, 0, o, e][(t = ~~t)]),
                    (s += [o, e, e, o, 0, 0][t]),
                    (i += [0, 0, o, e, e, o][t]),
                    r
                  )
                );
              }),
              (A.rgb2hsb = function (t, e, i) {
                var r, n;
                return (
                  (t = (i = xt(t, e, i))[0]),
                  (e = i[1]),
                  (i = i[2]),
                  {
                    h:
                      ((((0 == (n = (r = k(t, e, i)) - S(t, e, i))
                        ? null
                        : r == t
                        ? (e - i) / n
                        : r == e
                        ? (i - t) / n + 2
                        : (t - e) / n + 4) +
                        360) %
                        6) *
                        60) /
                      360,
                    s: 0 == n ? 0 : n / r,
                    b: r,
                    toString: dt,
                  }
                );
              }),
              (A.rgb2hsl = function (t, e, i) {
                var r, n, s;
                return (
                  (t = (i = xt(t, e, i))[0]),
                  (e = i[1]),
                  (i = i[2]),
                  (r = ((n = k(t, e, i)) + (s = S(t, e, i))) / 2),
                  {
                    h:
                      ((((0 == (s = n - s)
                        ? null
                        : n == t
                        ? (e - i) / s
                        : n == e
                        ? (i - t) / s + 2
                        : (t - e) / s + 4) +
                        360) %
                        6) *
                        60) /
                      360,
                    s: 0 == s ? 0 : r < 0.5 ? s / (2 * r) : s / (2 - 2 * r),
                    l: r,
                    toString: gt,
                  }
                );
              }),
              (A._path2string = function () {
                return this.join(",").replace(nt, "$1");
              });
            A._preload = function (t, e) {
              var i = d.doc.createElement("img");
              (i.style.cssText = "position:absolute;left:-9999em;top:-9999em"),
                (i.onload = function () {
                  e.call(this),
                    (this.onload = null),
                    d.doc.body.removeChild(this);
                }),
                (i.onerror = function () {
                  d.doc.body.removeChild(this);
                }),
                d.doc.body.appendChild(i),
                (i.src = t);
            };
            function _t() {
              return this.hex;
            }
            function kt(t, e) {
              for (var i = [], r = 0, n = t.length; r < n - 2 * !e; r += 2) {
                var s = [
                  { x: +t[r - 2], y: +t[r - 1] },
                  { x: +t[r], y: +t[r + 1] },
                  { x: +t[r + 2], y: +t[r + 3] },
                  { x: +t[r + 4], y: +t[r + 5] },
                ];
                e
                  ? r
                    ? n - 4 == r
                      ? (s[3] = { x: +t[0], y: +t[1] })
                      : n - 2 == r &&
                        ((s[2] = { x: +t[0], y: +t[1] }),
                        (s[3] = { x: +t[2], y: +t[3] }))
                    : (s[0] = { x: +t[n - 2], y: +t[n - 1] })
                  : n - 4 == r
                  ? (s[3] = s[2])
                  : r || (s[0] = { x: +t[r], y: +t[r + 1] }),
                  i.push([
                    "C",
                    (-s[0].x + 6 * s[1].x + s[2].x) / 6,
                    (-s[0].y + 6 * s[1].y + s[2].y) / 6,
                    (s[1].x + 6 * s[2].x - s[3].x) / 6,
                    (s[1].y + 6 * s[2].y - s[3].y) / 6,
                    s[2].x,
                    s[2].y,
                  ]);
              }
              return i;
            }
            (A.getRGB = L(function (t) {
              var e, i, r, n, s, o;
              return !t || (t = z(t)).indexOf("-") + 1
                ? { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: _t }
                : "none" == t
                ? { r: -1, g: -1, b: -1, hex: "none", toString: _t }
                : (t = (t =
                    rt[P](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()
                      ? t
                      : bt(t)).match($))
                ? (t[2] &&
                    ((r = u(t[2].substring(5), 16)),
                    (i = u(t[2].substring(3, 5), 16)),
                    (e = u(t[2].substring(1, 3), 16))),
                  t[3] &&
                    ((r = u((s = t[3].charAt(3)) + s, 16)),
                    (i = u((s = t[3].charAt(2)) + s, 16)),
                    (e = u((s = t[3].charAt(1)) + s, 16))),
                  t[4] &&
                    ((o = t[4][I](it)),
                    (e = R(o[0])),
                    "%" == o[0].slice(-1) && (e *= 2.55),
                    (i = R(o[1])),
                    "%" == o[1].slice(-1) && (i *= 2.55),
                    (r = R(o[2])),
                    "%" == o[2].slice(-1) && (r *= 2.55),
                    "rgba" == t[1].toLowerCase().slice(0, 4) && (n = R(o[3])),
                    o[3]) &&
                    "%" == o[3].slice(-1) &&
                    (n /= 100),
                  t[5]
                    ? ((o = t[5][I](it)),
                      (e = R(o[0])),
                      "%" == o[0].slice(-1) && (e *= 2.55),
                      (i = R(o[1])),
                      "%" == o[1].slice(-1) && (i *= 2.55),
                      (r = R(o[2])),
                      "%" == o[2].slice(-1) && (r *= 2.55),
                      ("deg" != o[0].slice(-3) && "°" != o[0].slice(-1)) ||
                        (e /= 360),
                      "hsba" == t[1].toLowerCase().slice(0, 4) && (n = R(o[3])),
                      o[3] && "%" == o[3].slice(-1) && (n /= 100),
                      A.hsb2rgb(e, i, r, n))
                    : t[6]
                    ? ((o = t[6][I](it)),
                      (e = R(o[0])),
                      "%" == o[0].slice(-1) && (e *= 2.55),
                      (i = R(o[1])),
                      "%" == o[1].slice(-1) && (i *= 2.55),
                      (r = R(o[2])),
                      "%" == o[2].slice(-1) && (r *= 2.55),
                      ("deg" != o[0].slice(-3) && "°" != o[0].slice(-1)) ||
                        (e /= 360),
                      "hsla" == t[1].toLowerCase().slice(0, 4) && (n = R(o[3])),
                      o[3] && "%" == o[3].slice(-1) && (n /= 100),
                      A.hsl2rgb(e, i, r, n))
                    : (((t = { r: e, g: i, b: r, toString: _t }).hex =
                        "#" +
                        (16777216 | r | (i << 8) | (e << 16))
                          .toString(16)
                          .slice(1)),
                      A.is(n, "finite") && (t.opacity = n),
                      t))
                : { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: _t };
            }, A)),
              (A.hsb = L(function (t, e, i) {
                return A.hsb2rgb(t, e, i).hex;
              })),
              (A.hsl = L(function (t, e, i) {
                return A.hsl2rgb(t, e, i).hex;
              })),
              (A.rgb = L(function (t, e, i) {
                function r(t) {
                  return (t + 0.5) | 0;
                }
                return (
                  "#" +
                  (16777216 | r(i) | (r(e) << 8) | (r(t) << 16))
                    .toString(16)
                    .slice(1)
                );
              })),
              (A.getColor = function (t) {
                var t = (this.getColor.start = this.getColor.start || {
                    h: 0,
                    s: 1,
                    b: t || 0.75,
                  }),
                  e = this.hsb2rgb(t.h, t.s, t.b);
                return (
                  (t.h += 0.075),
                  1 < t.h &&
                    ((t.h = 0), (t.s -= 0.2), t.s <= 0) &&
                    (this.getColor.start = { h: 0, s: 1, b: t.b }),
                  e.hex
                );
              }),
              (A.getColor.reset = function () {
                delete this.start;
              }),
              (A.parsePathString = function (t) {
                var e, s, o;
                return t
                  ? (e = F(t)).arr
                    ? N(e.arr)
                    : ((s = {
                        a: 7,
                        c: 6,
                        h: 1,
                        l: 2,
                        m: 2,
                        r: 4,
                        q: 4,
                        s: 4,
                        t: 2,
                        v: 1,
                        z: 0,
                      }),
                      (o = []),
                      (o = A.is(t, m) && A.is(t[0], m) ? N(t) : o).length ||
                        z(t).replace(st, function (t, e, i) {
                          var r = [],
                            n = e.toLowerCase();
                          if (
                            (i.replace(at, function (t, e) {
                              e && r.push(+e);
                            }),
                            "m" == n &&
                              2 < r.length &&
                              (o.push([e][E](r.splice(0, 2))),
                              (n = "l"),
                              (e = "m" == e ? "l" : "L")),
                            "r" == n)
                          )
                            o.push([e][E](r));
                          else
                            for (
                              ;
                              s[n] <= r.length &&
                              (o.push([e][E](r.splice(0, s[n]))), s[n]);

                            );
                        }),
                      (o.toString = A._path2string),
                      (e.arr = N(o)),
                      o)
                  : null;
              }),
              (A.parseTransformString = L(
                function (t) {
                  var n;
                  return t
                    ? ((n = []),
                      (n = A.is(t, m) && A.is(t[0], m) ? N(t) : n).length ||
                        z(t).replace(ot, function (t, e, i) {
                          var r = [];
                          X.call(e);
                          i.replace(at, function (t, e) {
                            e && r.push(+e);
                          }),
                            n.push([e][E](r));
                        }),
                      (n.toString = A._path2string),
                      n)
                    : null;
                },
                this,
                function (t) {
                  if (!t) return t;
                  for (var e = [], i = 0; i < t.length; i++) {
                    for (var r = [], n = 0; n < t[i].length; n++)
                      r.push(t[i][n]);
                    e.push(r);
                  }
                  return e;
                }
              ));
            var F = function (e) {
              var i = (F.ps = F.ps || {});
              return (
                i[e] ? (i[e].sleep = 100) : (i[e] = { sleep: 100 }),
                setTimeout(function () {
                  for (var t in i)
                    i[P](t) &&
                      t != e &&
                      (i[t].sleep--, i[t].sleep || delete i[t]);
                }),
                i[e]
              );
            };
            function Ct(t, e, i, r, n) {
              return (
                t *
                  (t * (-3 * e + 9 * i - 9 * r + 3 * n) +
                    6 * e -
                    12 * i +
                    6 * r) -
                3 * e +
                3 * i
              );
            }
            function H(t, e, i, r, n, s, o, a, h) {
              for (
                var l =
                    (h = 1 < (h = null == h ? 1 : h) ? 1 : h < 0 ? 0 : h) / 2,
                  u = [
                    -0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699,
                    0.7699, -0.9041, 0.9041, -0.9816, 0.9816,
                  ],
                  c = [
                    0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601,
                    0.1601, 0.1069, 0.1069, 0.0472, 0.0472,
                  ],
                  p = 0,
                  f = 0;
                f < 12;
                f++
              ) {
                var d = l * u[f] + l,
                  g = Ct(d, t, i, n, o),
                  d = Ct(d, e, r, s, a);
                p += c[f] * C.sqrt(g * g + d * d);
              }
              return l * p;
            }
            function St(t, e, i) {
              var r = A.bezierBBox(t),
                n = A.bezierBBox(e);
              if (!A.isBBoxIntersect(r, n)) return i ? 0 : [];
              for (
                var r = H.apply(0, t),
                  n = H.apply(0, e),
                  s = k(~~(r / 5), 1),
                  o = k(~~(n / 5), 1),
                  a = [],
                  h = [],
                  l = {},
                  u = i ? 0 : [],
                  c = 0;
                c < s + 1;
                c++
              ) {
                var p = A.findDotsAtSegment.apply(A, t.concat(c / s));
                a.push({ x: p.x, y: p.y, t: c / s });
              }
              for (c = 0; c < o + 1; c++)
                (p = A.findDotsAtSegment.apply(A, e.concat(c / o))),
                  h.push({ x: p.x, y: p.y, t: c / o });
              for (c = 0; c < s; c++)
                for (var f = 0; f < o; f++) {
                  var d = a[c],
                    g = a[c + 1],
                    x = h[f],
                    y = h[f + 1],
                    m = M(g.x - d.x) < 0.001 ? "y" : "x",
                    v = M(y.x - x.x) < 0.001 ? "y" : "x",
                    b = (function (t, e, i, r, n, s, o, a) {
                      if (
                        !(
                          k(t, i) < S(n, o) ||
                          S(t, i) > k(n, o) ||
                          k(e, r) < S(s, a) ||
                          S(e, r) > k(s, a)
                        )
                      ) {
                        var h =
                            (t * r - e * i) * (n - o) -
                            (t - i) * (n * a - s * o),
                          l =
                            (t * r - e * i) * (s - a) -
                            (e - r) * (n * a - s * o),
                          u = (t - i) * (s - a) - (e - r) * (n - o);
                        if (u) {
                          var h = h / u,
                            l = l / u,
                            u = +h.toFixed(2),
                            c = +l.toFixed(2);
                          if (
                            !(
                              u < +S(t, i).toFixed(2) ||
                              u > +k(t, i).toFixed(2) ||
                              u < +S(n, o).toFixed(2) ||
                              u > +k(n, o).toFixed(2) ||
                              c < +S(e, r).toFixed(2) ||
                              c > +k(e, r).toFixed(2) ||
                              c < +S(s, a).toFixed(2) ||
                              c > +k(s, a).toFixed(2)
                            )
                          )
                            return { x: h, y: l };
                        }
                      }
                    })(d.x, d.y, g.x, g.y, x.x, x.y, y.x, y.y);
                  b &&
                    l[b.x.toFixed(4)] != b.y.toFixed(4) &&
                    ((l[b.x.toFixed(4)] = b.y.toFixed(4)),
                    (m = d.t + M((b[m] - d[m]) / (g[m] - d[m])) * (g.t - d.t)),
                    (g = x.t + M((b[v] - x[v]) / (y[v] - x[v])) * (y.t - x.t)),
                    0 <= m) &&
                    m <= 1.001 &&
                    0 <= g &&
                    g <= 1.001 &&
                    (i
                      ? u++
                      : u.push({ x: b.x, y: b.y, t1: S(m, 1), t2: S(g, 1) }));
                }
              return u;
            }
            function Mt(t, e, i) {
              (t = A._path2curve(t)), (e = A._path2curve(e));
              for (
                var r, n, s, o, a, h, l, u, c = i ? 0 : [], p = 0, f = t.length;
                p < f;
                p++
              ) {
                var d = t[p];
                if ("M" == d[0]) (r = s = d[1]), (g = o = d[2]);
                else
                  for (
                    var g =
                        "C" == d[0]
                          ? ((r = (l = [r, g].concat(d.slice(1)))[6]), l[7])
                          : ((l = [r, g, r, g, s, o, s, o]), (r = s), o),
                      x = 0,
                      y = e.length;
                    x < y;
                    x++
                  ) {
                    var m = e[x];
                    if ("M" == m[0]) (n = a = m[1]), (v = h = m[2]);
                    else {
                      var v =
                          "C" == m[0]
                            ? ((n = (u = [n, v].concat(m.slice(1)))[6]), u[7])
                            : ((u = [n, v, n, v, a, h, a, h]), (n = a), h),
                        b = St(l, u, i);
                      if (i) c += b;
                      else {
                        for (var w = 0, _ = b.length; w < _; w++)
                          (b[w].segment1 = p),
                            (b[w].segment2 = x),
                            (b[w].bez1 = l),
                            (b[w].bez2 = u);
                        c = c.concat(b);
                      }
                    }
                  }
              }
              return c;
            }
            (A.findDotsAtSegment = function (t, e, i, r, n, s, o, a, h) {
              var l = 1 - h,
                u = x(l, 3),
                c = x(l, 2),
                p = h * h,
                f = p * h,
                d = u * t + 3 * c * h * i + 3 * l * h * h * n + f * o,
                u = u * e + 3 * c * h * r + 3 * l * h * h * s + f * a,
                c = t + 2 * h * (i - t) + p * (n - 2 * i + t),
                f = e + 2 * h * (r - e) + p * (s - 2 * r + e),
                g = i + 2 * h * (n - i) + p * (o - 2 * n + i),
                p = r + 2 * h * (s - r) + p * (a - 2 * s + r),
                t = l * t + h * i,
                i = l * e + h * r,
                e = l * n + h * o,
                r = l * s + h * a,
                n = 90 - (180 * C.atan2(c - g, f - p)) / B;
              return (
                (g < c || f < p) && (n += 180),
                {
                  x: d,
                  y: u,
                  m: { x: c, y: f },
                  n: { x: g, y: p },
                  start: { x: t, y: i },
                  end: { x: e, y: r },
                  alpha: n,
                }
              );
            }),
              (A.bezierBBox = function (t, e, i, r, n, s, o, a) {
                A.is(t, "array") || (t = [t, e, i, r, n, s, o, a]);
                e = zt.apply(null, t);
                return {
                  x: e.min.x,
                  y: e.min.y,
                  x2: e.max.x,
                  y2: e.max.y,
                  width: e.max.x - e.min.x,
                  height: e.max.y - e.min.y,
                };
              }),
              (A.isPointInsideBBox = function (t, e, i) {
                return e >= t.x && e <= t.x2 && i >= t.y && i <= t.y2;
              }),
              (A.isBBoxIntersect = function (t, e) {
                var i = A.isPointInsideBBox;
                return (
                  i(e, t.x, t.y) ||
                  i(e, t.x2, t.y) ||
                  i(e, t.x, t.y2) ||
                  i(e, t.x2, t.y2) ||
                  i(t, e.x, e.y) ||
                  i(t, e.x2, e.y) ||
                  i(t, e.x, e.y2) ||
                  i(t, e.x2, e.y2) ||
                  (((t.x < e.x2 && t.x > e.x) || (e.x < t.x2 && e.x > t.x)) &&
                    ((t.y < e.y2 && t.y > e.y) || (e.y < t.y2 && e.y > t.y)))
                );
              }),
              (A.pathIntersection = function (t, e) {
                return Mt(t, e);
              }),
              (A.pathIntersectionNumber = function (t, e) {
                return Mt(t, e, 1);
              }),
              (A.isPointInsidePath = function (t, e, i) {
                var r = A.pathBBox(t);
                return (
                  A.isPointInsideBBox(r, e, i) &&
                  Mt(
                    t,
                    [
                      ["M", e, i],
                      ["H", r.x2 + 10],
                    ],
                    1
                  ) %
                    2 ==
                    1
                );
              }),
              (A._removedFactory = function (t) {
                return function () {
                  T(
                    "raphael.log",
                    null,
                    "Raphaël: you are calling to method “" +
                      t +
                      "” of removed object",
                    t
                  );
                };
              });
            function Bt(t, e, i, r) {
              return [t, e, i, r, i, r];
            }
            function Lt(t, e, i, r, n, s) {
              return [
                (1 / 3) * t + (2 / 3) * i,
                (1 / 3) * e + (2 / 3) * r,
                (1 / 3) * n + (2 / 3) * i,
                (1 / 3) * s + (2 / 3) * r,
                n,
                s,
              ];
            }
            function Ft(t, e, i, r, n, s, o, a, h) {
              var l = 1 - h;
              return {
                x:
                  x(l, 3) * t +
                  3 * x(l, 2) * h * i +
                  3 * l * h * h * n +
                  x(h, 3) * o,
                y:
                  x(l, 3) * e +
                  3 * x(l, 2) * h * r +
                  3 * l * h * h * s +
                  x(h, 3) * a,
              };
            }
            function Tt(t) {
              var e = t[0];
              switch (e.toLowerCase()) {
                case "t":
                  return [e, 0, 0];
                case "m":
                  return [e, 1, 0, 0, 1, 0, 0];
                case "r":
                  return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                case "s":
                  return 5 == t.length
                    ? [e, 1, 1, t[3], t[4]]
                    : 3 == t.length
                    ? [e, 1, 1]
                    : [e, 1];
              }
            }
            var At = (A.pathBBox = function (t) {
                var e = F(t);
                if (e.bbox) return ft(e.bbox);
                if (!t)
                  return { x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0 };
                for (
                  var i,
                    r,
                    n = 0,
                    s = 0,
                    o = [],
                    a = [],
                    h = 0,
                    l = (t = It(t)).length;
                  h < l;
                  h++
                )
                  "M" == (r = t[h])[0]
                    ? ((n = r[1]), (s = r[2]), o.push(n), a.push(s))
                    : ((i = zt(n, s, r[1], r[2], r[3], r[4], r[5], r[6])),
                      (o = o[E](i.min.x, i.max.x)),
                      (a = a[E](i.min.y, i.max.y)),
                      (n = r[5]),
                      (s = r[6]));
                var u = S[b](0, o),
                  c = S[b](0, a),
                  p = k[b](0, o),
                  f = k[b](0, a),
                  d = p - u,
                  g = f - c,
                  p = {
                    x: u,
                    y: c,
                    x2: p,
                    y2: f,
                    width: d,
                    height: g,
                    cx: u + d / 2,
                    cy: c + g / 2,
                  };
                return (e.bbox = ft(p)), p;
              }),
              N = function (t) {
                t = ft(t);
                return (t.toString = A._path2string), t;
              },
              e = (A._pathToRelative = function (t) {
                var e = F(t);
                if (e.rel) return N(e.rel);
                var i = [],
                  r = 0,
                  n = 0,
                  s = 0,
                  o = 0,
                  a = 0;
                "M" ==
                  (t =
                    A.is(t, m) && A.is(t && t[0], m)
                      ? t
                      : A.parsePathString(t))[0][0] &&
                  ((s = r = t[0][1]),
                  (o = n = t[0][2]),
                  a++,
                  i.push(["M", r, n]));
                for (var h = a, l = t.length; h < l; h++) {
                  var u = (i[h] = []),
                    c = t[h];
                  if (c[0] != X.call(c[0]))
                    switch (((u[0] = X.call(c[0])), u[0])) {
                      case "a":
                        (u[1] = c[1]),
                          (u[2] = c[2]),
                          (u[3] = c[3]),
                          (u[4] = c[4]),
                          (u[5] = c[5]),
                          (u[6] = +(c[6] - r).toFixed(3)),
                          (u[7] = +(c[7] - n).toFixed(3));
                        break;
                      case "v":
                        u[1] = +(c[1] - n).toFixed(3);
                        break;
                      case "m":
                        (s = c[1]), (o = c[2]);
                      default:
                        for (var p = 1, f = c.length; p < f; p++)
                          u[p] = +(c[p] - (p % 2 ? r : n)).toFixed(3);
                    }
                  else {
                    (u = i[h] = []),
                      "m" == c[0] && ((s = c[1] + r), (o = c[2] + n));
                    for (var d = 0, g = c.length; d < g; d++) i[h][d] = c[d];
                  }
                  var x = i[h].length;
                  switch (i[h][0]) {
                    case "z":
                      (r = s), (n = o);
                      break;
                    case "h":
                      r += +i[h][x - 1];
                      break;
                    case "v":
                      n += +i[h][x - 1];
                      break;
                    default:
                      (r += +i[h][x - 2]), (n += +i[h][x - 1]);
                  }
                }
                return (i.toString = A._path2string), (e.rel = N(i)), i;
              }),
              Pt = (A._pathToAbsolute = function (t) {
                var e = F(t);
                if (e.abs) return N(e.abs);
                if (
                  !(t =
                    A.is(t, m) && A.is(t && t[0], m)
                      ? t
                      : A.parsePathString(t)) ||
                  !t.length
                )
                  return [["M", 0, 0]];
                for (
                  var i,
                    r,
                    n = [],
                    s = 0,
                    o = 0,
                    a = 0,
                    h = 0,
                    l = 0,
                    u =
                      ("M" == t[0][0] &&
                        ((a = s = +t[0][1]),
                        (h = o = +t[0][2]),
                        l++,
                        (n[0] = ["M", s, o])),
                      3 == t.length &&
                        "M" == t[0][0] &&
                        "R" == t[1][0].toUpperCase() &&
                        "Z" == t[2][0].toUpperCase()),
                    c = l,
                    p = t.length;
                  c < p;
                  c++
                ) {
                  if ((n.push((i = [])), (r = t[c])[0] != K.call(r[0])))
                    switch (((i[0] = K.call(r[0])), i[0])) {
                      case "A":
                        (i[1] = r[1]),
                          (i[2] = r[2]),
                          (i[3] = r[3]),
                          (i[4] = r[4]),
                          (i[5] = r[5]),
                          (i[6] = +(r[6] + s)),
                          (i[7] = +(r[7] + o));
                        break;
                      case "V":
                        i[1] = +r[1] + o;
                        break;
                      case "H":
                        i[1] = +r[1] + s;
                        break;
                      case "R":
                        for (
                          var f = [s, o][E](r.slice(1)), d = 2, g = f.length;
                          d < g;
                          d++
                        )
                          (f[d] = +f[d] + s), (f[++d] = +f[d] + o);
                        n.pop(), (n = n[E](kt(f, u)));
                        break;
                      case "M":
                        (a = +r[1] + s), (h = +r[2] + o);
                      default:
                        for (d = 1, g = r.length; d < g; d++)
                          i[d] = +r[d] + (d % 2 ? s : o);
                    }
                  else if ("R" == r[0])
                    (f = [s, o][E](r.slice(1))),
                      n.pop(),
                      (n = n[E](kt(f, u))),
                      (i = ["R"][E](r.slice(-2)));
                  else for (var x = 0, y = r.length; x < y; x++) i[x] = r[x];
                  switch (i[0]) {
                    case "Z":
                      (s = a), (o = h);
                      break;
                    case "H":
                      s = i[1];
                      break;
                    case "V":
                      o = i[1];
                      break;
                    case "M":
                      (a = i[i.length - 2]), (h = i[i.length - 1]);
                    default:
                      (s = i[i.length - 2]), (o = i[i.length - 1]);
                  }
                }
                return (n.toString = A._path2string), (e.abs = N(n)), n;
              }),
              Et = function (t, e, i, r, n, s, o, a, h, l) {
                var u = (120 * B) / 180,
                  c = (B / 180) * (+n || 0),
                  p = [],
                  f = L(function (t, e, i) {
                    return {
                      x: t * C.cos(i) - e * C.sin(i),
                      y: t * C.sin(i) + e * C.cos(i),
                    };
                  }),
                  s =
                    (l
                      ? ((v = l[0]), (b = l[1]), (y = l[2]), (m = l[3]))
                      : ((t = (g = f(t, e, -c)).x),
                        (e = g.y),
                        (a = (g = f(a, h, -c)).x),
                        (h = g.y),
                        C.cos((B / 180) * n),
                        C.sin((B / 180) * n),
                        1 <
                          (d =
                            ((g = (t - a) / 2) * g) / (i * i) +
                            ((x = (e - h) / 2) * x) / (r * r)) &&
                          ((i *= d = C.sqrt(d)), (r *= d)),
                        (y =
                          ((d =
                            (s == o ? -1 : 1) *
                            C.sqrt(
                              M(
                                ((d = i * i) * (s = r * r) -
                                  d * x * x -
                                  s * g * g) /
                                  (d * x * x + s * g * g)
                              )
                            )) *
                            i *
                            x) /
                            r +
                          (t + a) / 2),
                        (v = C.asin(
                          (
                            (e - (m = (d * -r * g) / i + (e + h) / 2)) /
                            r
                          ).toFixed(9)
                        )),
                        (b = C.asin(((h - m) / r).toFixed(9))),
                        (v = t < y ? B - v : v) < 0 && (v = 2 * B + v),
                        (b = a < y ? B - b : b) < 0 && (b = 2 * B + b),
                        o && b < v && (v -= 2 * B),
                        !o && v < b && (b -= 2 * B)),
                    b - v),
                  u =
                    (M(s) > u &&
                      ((x = b),
                      (d = a),
                      (g = h),
                      (a = y + i * C.cos((b = v + u * (o && v < b ? 1 : -1)))),
                      (h = m + r * C.sin(b)),
                      (p = Et(a, h, i, r, n, 0, o, d, g, [b, x, y, m]))),
                    (s = b - v),
                    C.cos(v)),
                  n = C.sin(v),
                  o = C.cos(b),
                  d = C.sin(b),
                  g = C.tan(s / 4),
                  x = (4 / 3) * i * g,
                  y = (4 / 3) * r * g,
                  m = [t, e],
                  v = [t + x * n, e - y * u],
                  b = [a + x * d, h - y * o],
                  s = [a, h];
                if (((v[0] = 2 * m[0] - v[0]), (v[1] = 2 * m[1] - v[1]), l))
                  return [v, b, s][E](p);
                for (
                  var w = [],
                    _ = 0,
                    k = (p = [v, b, s][E](p).join()[I](",")).length;
                  _ < k;
                  _++
                )
                  w[_] =
                    _ % 2 ? f(p[_ - 1], p[_], c).y : f(p[_], p[_ + 1], c).x;
                return w;
              },
              zt = L(function (t, e, i, r, n, s, o, a) {
                var h,
                  l = n - 2 * i + t - (o - 2 * n + i),
                  u = 2 * (i - t) - 2 * (n - i),
                  c = t - i,
                  p = (-u + C.sqrt(u * u - 4 * l * c)) / 2 / l,
                  f = (-u - C.sqrt(u * u - 4 * l * c)) / 2 / l,
                  d = [e, a],
                  g = [t, o];
                return (
                  "1e12" < M(p) && (p = 0.5),
                  "1e12" < M(f) && (f = 0.5),
                  0 < p &&
                    p < 1 &&
                    ((h = Ft(t, e, i, r, n, s, o, a, p)),
                    g.push(h.x),
                    d.push(h.y)),
                  0 < f &&
                    f < 1 &&
                    ((h = Ft(t, e, i, r, n, s, o, a, f)),
                    g.push(h.x),
                    d.push(h.y)),
                  (p =
                    (-(u = 2 * (r - e) - 2 * (s - r)) +
                      C.sqrt(
                        u * u -
                          4 *
                            (l = s - 2 * r + e - (a - 2 * s + r)) *
                            (c = e - r)
                      )) /
                    2 /
                    l),
                  (f = (-u - C.sqrt(u * u - 4 * l * c)) / 2 / l),
                  "1e12" < M(p) && (p = 0.5),
                  "1e12" < M(f) && (f = 0.5),
                  0 < p &&
                    p < 1 &&
                    ((h = Ft(t, e, i, r, n, s, o, a, p)),
                    g.push(h.x),
                    d.push(h.y)),
                  0 < f &&
                    f < 1 &&
                    ((h = Ft(t, e, i, r, n, s, o, a, f)),
                    g.push(h.x),
                    d.push(h.y)),
                  {
                    min: { x: S[b](0, g), y: S[b](0, d) },
                    max: { x: k[b](0, g), y: k[b](0, d) },
                  }
                );
              }),
              It = (A._path2curve = L(
                function (t, e) {
                  var i = !e && F(t);
                  if (!e && i.curve) return N(i.curve);
                  function r(t, e, i) {
                    var r, n;
                    if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                    switch (
                      (t[0] in { T: 1, Q: 1 } || (e.qx = e.qy = null), t[0])
                    ) {
                      case "M":
                        (e.X = t[1]), (e.Y = t[2]);
                        break;
                      case "A":
                        t = ["C"][E](Et[b](0, [e.x, e.y][E](t.slice(1))));
                        break;
                      case "S":
                        (n =
                          "C" == i || "S" == i
                            ? ((r = 2 * e.x - e.bx), 2 * e.y - e.by)
                            : ((r = e.x), e.y)),
                          (t = ["C", r, n][E](t.slice(1)));
                        break;
                      case "T":
                        "Q" == i || "T" == i
                          ? ((e.qx = 2 * e.x - e.qx), (e.qy = 2 * e.y - e.qy))
                          : ((e.qx = e.x), (e.qy = e.y)),
                          (t = ["C"][E](Lt(e.x, e.y, e.qx, e.qy, t[1], t[2])));
                        break;
                      case "Q":
                        (e.qx = t[1]),
                          (e.qy = t[2]),
                          (t = ["C"][E](Lt(e.x, e.y, t[1], t[2], t[3], t[4])));
                        break;
                      case "L":
                        t = ["C"][E](Bt(e.x, e.y, t[1], t[2]));
                        break;
                      case "H":
                        t = ["C"][E](Bt(e.x, e.y, t[1], e.y));
                        break;
                      case "V":
                        t = ["C"][E](Bt(e.x, e.y, e.x, t[1]));
                        break;
                      case "Z":
                        t = ["C"][E](Bt(e.x, e.y, e.X, e.Y));
                    }
                    return t;
                  }
                  function n(t, e) {
                    if (7 < t[e].length) {
                      t[e].shift();
                      for (var i = t[e]; i.length; )
                        (u[e] = "A"),
                          a && (c[e] = "A"),
                          t.splice(e++, 0, ["C"][E](i.splice(0, 6)));
                      t.splice(e, 1), (g = k(o.length, (a && a.length) || 0));
                    }
                  }
                  function s(t, e, i, r, n) {
                    t &&
                      e &&
                      "M" == t[n][0] &&
                      "M" != e[n][0] &&
                      (e.splice(n, 0, ["M", r.x, r.y]),
                      (i.bx = 0),
                      (i.by = 0),
                      (i.x = t[n][1]),
                      (i.y = t[n][2]),
                      (g = k(o.length, (a && a.length) || 0)));
                  }
                  for (
                    var o = Pt(t),
                      a = e && Pt(e),
                      h = {
                        x: 0,
                        y: 0,
                        bx: 0,
                        by: 0,
                        X: 0,
                        Y: 0,
                        qx: null,
                        qy: null,
                      },
                      l = {
                        x: 0,
                        y: 0,
                        bx: 0,
                        by: 0,
                        X: 0,
                        Y: 0,
                        qx: null,
                        qy: null,
                      },
                      u = [],
                      c = [],
                      p = "",
                      f = "",
                      d = 0,
                      g = k(o.length, (a && a.length) || 0);
                    d < g;
                    d++
                  ) {
                    "C" != (p = o[d] ? o[d][0] : p) &&
                      ((u[d] = p), d) &&
                      (f = u[d - 1]),
                      (o[d] = r(o[d], h, f)),
                      "A" != u[d] && "C" == p && (u[d] = "C"),
                      n(o, d),
                      a &&
                        ("C" != (p = a[d] ? a[d][0] : p) &&
                          ((c[d] = p), d) &&
                          (f = c[d - 1]),
                        (a[d] = r(a[d], l, f)),
                        "A" != c[d] && "C" == p && (c[d] = "C"),
                        n(a, d)),
                      s(o, a, h, l, d),
                      s(a, o, l, h, d);
                    var x = o[d],
                      y = a && a[d],
                      m = x.length,
                      v = a && y.length;
                    (h.x = x[m - 2]),
                      (h.y = x[m - 1]),
                      (h.bx = R(x[m - 4]) || h.x),
                      (h.by = R(x[m - 3]) || h.y),
                      (l.bx = a && (R(y[v - 4]) || l.x)),
                      (l.by = a && (R(y[v - 3]) || l.y)),
                      (l.x = a && y[v - 2]),
                      (l.y = a && y[v - 1]);
                  }
                  return a || (i.curve = N(o)), a ? [o, a] : o;
                },
                null,
                N
              )),
              Dt =
                ((A._parseDots = L(function (t) {
                  for (var e = [], i = 0, r = t.length; i < r; i++) {
                    var n = {},
                      s = t[i].match(/^([^:]*):?([\d\.]*)/);
                    if (((n.color = A.getRGB(s[1])), n.color.error))
                      return null;
                    (n.opacity = n.color.opacity),
                      (n.color = n.color.hex),
                      s[2] && (n.offset = s[2] + "%"),
                      e.push(n);
                  }
                  for (r = e.length - (i = 1); i < r; i++)
                    if (!e[i].offset) {
                      for (
                        var o = R(e[i - 1].offset || 0), a = 0, h = i + 1;
                        h < r;
                        h++
                      )
                        if (e[h].offset) {
                          a = e[h].offset;
                          break;
                        }
                      a || ((a = 100), (h = r));
                      for (var l = ((a = R(a)) - o) / (h - i + 1); i < h; i++)
                        (o += l), (e[i].offset = o + "%");
                    }
                  return e;
                })),
                (A._tear = function (t, e) {
                  t == e.top && (e.top = t.prev),
                    t == e.bottom && (e.bottom = t.next),
                    t.next && (t.next.prev = t.prev),
                    t.prev && (t.prev.next = t.next);
                })),
              Rt =
                ((A._tofront = function (t, e) {
                  e.top !== t &&
                    (Dt(t, e),
                    (t.next = null),
                    (t.prev = e.top),
                    (e.top.next = t),
                    (e.top = t));
                }),
                (A._toback = function (t, e) {
                  e.bottom !== t &&
                    (Dt(t, e),
                    (t.next = e.bottom),
                    (t.prev = null),
                    (e.bottom.prev = t),
                    (e.bottom = t));
                }),
                (A._insertafter = function (t, e, i) {
                  Dt(t, i),
                    e == i.top && (i.top = t),
                    e.next && (e.next.prev = t),
                    (t.next = e.next),
                    ((t.prev = e).next = t);
                }),
                (A._insertbefore = function (t, e, i) {
                  Dt(t, i),
                    e == i.bottom && (i.bottom = t),
                    e.prev && (e.prev.next = t),
                    (t.prev = e.prev),
                    ((e.prev = t).next = e);
                }),
                (A.toMatrix = function (t, e) {
                  var i = At(t),
                    t = {
                      _: { transform: w },
                      getBBox: function () {
                        return i;
                      },
                    };
                  return Ht(t, e), t.matrix;
                })),
              Ht =
                ((A.transformPath = function (t, e) {
                  return pt(t, Rt(t, e));
                }),
                (A._extractTransform = function (t, e) {
                  if (null == e) return t._.transform;
                  e = z(e).replace(/\.{3}|\u2026/g, t._.transform || w);
                  var i,
                    r = A.parseTransformString(e),
                    n = 0,
                    s = 1,
                    o = 1,
                    a = t._,
                    h = new j();
                  if (((a.transform = r || []), r))
                    for (var l = 0, u = r.length; l < u; l++) {
                      var c,
                        p,
                        f,
                        d,
                        g,
                        x = r[l],
                        y = x.length,
                        m = z(x[0]).toLowerCase(),
                        v = x[0] != m,
                        b = v ? h.invert() : 0;
                      "t" == m && 3 == y
                        ? v
                          ? ((c = b.x(0, 0)),
                            (p = b.y(0, 0)),
                            (f = b.x(x[1], x[2])),
                            (d = b.y(x[1], x[2])),
                            h.translate(f - c, d - p))
                          : h.translate(x[1], x[2])
                        : "r" == m
                        ? 2 == y
                          ? ((g = g || t.getBBox(1)),
                            h.rotate(
                              x[1],
                              g.x + g.width / 2,
                              g.y + g.height / 2
                            ),
                            (n += x[1]))
                          : 4 == y &&
                            (v
                              ? ((f = b.x(x[2], x[3])),
                                (d = b.y(x[2], x[3])),
                                h.rotate(x[1], f, d))
                              : h.rotate(x[1], x[2], x[3]),
                            (n += x[1]))
                        : "s" == m
                        ? 2 == y || 3 == y
                          ? ((g = g || t.getBBox(1)),
                            h.scale(
                              x[1],
                              x[y - 1],
                              g.x + g.width / 2,
                              g.y + g.height / 2
                            ),
                            (s *= x[1]),
                            (o *= x[y - 1]))
                          : 5 == y &&
                            (v
                              ? ((f = b.x(x[3], x[4])),
                                (d = b.y(x[3], x[4])),
                                h.scale(x[1], x[2], f, d))
                              : h.scale(x[1], x[2], x[3], x[4]),
                            (s *= x[1]),
                            (o *= x[2]))
                        : "m" == m &&
                          7 == y &&
                          h.add(x[1], x[2], x[3], x[4], x[5], x[6]),
                        (a.dirtyT = 1),
                        (t.matrix = h);
                    }
                  (t.matrix = h),
                    (a.sx = s),
                    (a.sy = o),
                    (a.deg = n),
                    (a.dx = e = h.e),
                    (a.dy = i = h.f),
                    1 == s && 1 == o && !n && a.bbox
                      ? ((a.bbox.x += +e), (a.bbox.y += +i))
                      : (a.dirtyT = 1);
                })),
              Nt = (A._equaliseTransform = function (t, e) {
                (e = z(e).replace(/\.{3}|\u2026/g, t)),
                  (t = A.parseTransformString(t) || []),
                  (e = A.parseTransformString(e) || []);
                for (
                  var i,
                    r,
                    n,
                    s,
                    o = k(t.length, e.length),
                    a = [],
                    h = [],
                    l = 0;
                  l < o;
                  l++
                ) {
                  if (
                    ((n = t[l] || Tt(e[l])),
                    (s = e[l] || Tt(n)),
                    n[0] != s[0] ||
                      ("r" == n[0].toLowerCase() &&
                        (n[2] != s[2] || n[3] != s[3])) ||
                      ("s" == n[0].toLowerCase() &&
                        (n[3] != s[3] || n[4] != s[4])))
                  )
                    return;
                  for (
                    a[l] = [], h[l] = [], i = 0, r = k(n.length, s.length);
                    i < r;
                    i++
                  )
                    i in n && (a[l][i] = n[i]), i in s && (h[l][i] = s[i]);
                }
                return { from: a, to: h };
              });
            function j(t, e, i, r, n, s) {
              null != t
                ? ((this.a = +t),
                  (this.b = +e),
                  (this.c = +i),
                  (this.d = +r),
                  (this.e = +n),
                  (this.f = +s))
                : ((this.a = 1),
                  (this.b = 0),
                  (this.c = 0),
                  (this.d = 1),
                  (this.e = 0),
                  (this.f = 0));
            }
            function jt(t) {
              return t[0] * t[0] + t[1] * t[1];
            }
            function Ot(t) {
              var e = C.sqrt(jt(t));
              t[0] && (t[0] /= e), t[1] && (t[1] /= e);
            }
            (A._getContainer = function (t, e, i, r) {
              var n =
                null != r || A.is(t, "object") ? t : d.doc.getElementById(t);
              if (null != n)
                return n.tagName
                  ? null == e
                    ? {
                        container: n,
                        width: n.style.pixelWidth || n.offsetWidth,
                        height: n.style.pixelHeight || n.offsetHeight,
                      }
                    : { container: n, width: e, height: i }
                  : { container: 1, x: t, y: e, width: i, height: r };
            }),
              (A.pathToRelative = e),
              (A._engine = {}),
              (A.path2curve = It),
              (A.matrix = function (t, e, i, r, n, s) {
                return new j(t, e, i, r, n, s);
              }),
              ((e = j.prototype).add = function (t, e, i, r, n, s) {
                var o,
                  a,
                  h,
                  l,
                  u = [[], [], []],
                  c = [
                    [this.a, this.c, this.e],
                    [this.b, this.d, this.f],
                    [0, 0, 1],
                  ],
                  p = [
                    [t, i, n],
                    [e, r, s],
                    [0, 0, 1],
                  ];
                for (
                  t &&
                    t instanceof j &&
                    (p = [
                      [t.a, t.c, t.e],
                      [t.b, t.d, t.f],
                      [0, 0, 1],
                    ]),
                    o = 0;
                  o < 3;
                  o++
                )
                  for (a = 0; a < 3; a++) {
                    for (h = l = 0; h < 3; h++) l += c[o][h] * p[h][a];
                    u[o][a] = l;
                  }
                (this.a = u[0][0]),
                  (this.b = u[1][0]),
                  (this.c = u[0][1]),
                  (this.d = u[1][1]),
                  (this.e = u[0][2]),
                  (this.f = u[1][2]);
              }),
              (e.invert = function () {
                var t = this,
                  e = t.a * t.d - t.b * t.c;
                return new j(
                  t.d / e,
                  -t.b / e,
                  -t.c / e,
                  t.a / e,
                  (t.c * t.f - t.d * t.e) / e,
                  (t.b * t.e - t.a * t.f) / e
                );
              }),
              (e.clone = function () {
                return new j(this.a, this.b, this.c, this.d, this.e, this.f);
              }),
              (e.translate = function (t, e) {
                this.add(1, 0, 0, 1, t, e);
              }),
              (e.scale = function (t, e, i, r) {
                null == e && (e = t),
                  (i || r) && this.add(1, 0, 0, 1, i, r),
                  this.add(t, 0, 0, e, 0, 0),
                  (i || r) && this.add(1, 0, 0, 1, -i, -r);
              }),
              (e.rotate = function (t, e, i) {
                (t = A.rad(t)), (e = e || 0), (i = i || 0);
                var r = +C.cos(t).toFixed(9),
                  t = +C.sin(t).toFixed(9);
                this.add(r, t, -t, r, e, i), this.add(1, 0, 0, 1, -e, -i);
              }),
              (e.x = function (t, e) {
                return t * this.a + e * this.c + this.e;
              }),
              (e.y = function (t, e) {
                return t * this.b + e * this.d + this.f;
              }),
              (e.get = function (t) {
                return +this[z.fromCharCode(97 + t)].toFixed(4);
              }),
              (e.toString = function () {
                return A.svg
                  ? "matrix(" +
                      [
                        this.get(0),
                        this.get(1),
                        this.get(2),
                        this.get(3),
                        this.get(4),
                        this.get(5),
                      ].join() +
                      ")"
                  : [
                      this.get(0),
                      this.get(2),
                      this.get(1),
                      this.get(3),
                      0,
                      0,
                    ].join();
              }),
              (e.toFilter = function () {
                return (
                  "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                  this.get(0) +
                  ", M12=" +
                  this.get(2) +
                  ", M21=" +
                  this.get(1) +
                  ", M22=" +
                  this.get(3) +
                  ", Dx=" +
                  this.get(4) +
                  ", Dy=" +
                  this.get(5) +
                  ", sizingmethod='auto expand')"
                );
              }),
              (e.offset = function () {
                return [this.e.toFixed(4), this.f.toFixed(4)];
              }),
              (e.split = function () {
                var t = {},
                  e =
                    ((t.dx = this.e),
                    (t.dy = this.f),
                    [
                      [this.a, this.c],
                      [this.b, this.d],
                    ]),
                  i =
                    ((t.scalex = C.sqrt(jt(e[0]))),
                    Ot(e[0]),
                    (t.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1]),
                    (e[1] = [
                      e[1][0] - e[0][0] * t.shear,
                      e[1][1] - e[0][1] * t.shear,
                    ]),
                    (t.scaley = C.sqrt(jt(e[1]))),
                    Ot(e[1]),
                    (t.shear /= t.scaley),
                    -e[0][1]),
                  e = e[1][1];
                return (
                  e < 0
                    ? ((t.rotate = A.deg(C.acos(e))),
                      i < 0 && (t.rotate = 360 - t.rotate))
                    : (t.rotate = A.deg(C.asin(i))),
                  (t.isSimple = !(
                    +t.shear.toFixed(9) ||
                    (t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate)
                  )),
                  (t.isSuperSimple =
                    !+t.shear.toFixed(9) &&
                    t.scalex.toFixed(9) == t.scaley.toFixed(9) &&
                    !t.rotate),
                  (t.noRotation = !+t.shear.toFixed(9) && !t.rotate),
                  t
                );
              }),
              (e.toTransformString = function (t) {
                t = t || this[I]();
                return t.isSimple
                  ? ((t.scalex = +t.scalex.toFixed(4)),
                    (t.scaley = +t.scaley.toFixed(4)),
                    (t.rotate = +t.rotate.toFixed(4)),
                    (t.dx || t.dy ? "t" + [t.dx, t.dy] : w) +
                      (1 != t.scalex || 1 != t.scaley
                        ? "s" + [t.scalex, t.scaley, 0, 0]
                        : w) +
                      (t.rotate ? "r" + [t.rotate, 0, 0] : w))
                  : "m" +
                      [
                        this.get(0),
                        this.get(1),
                        this.get(2),
                        this.get(3),
                        this.get(4),
                        this.get(5),
                      ];
              });
            function Gt() {
              this.returnValue = !1;
            }
            function Yt() {
              return this.originalEvent.preventDefault();
            }
            function Wt() {
              this.cancelBubble = !0;
            }
            function qt() {
              return this.originalEvent.stopPropagation();
            }
            function Xt(t) {
              var e = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
                i = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft;
              return { x: t.clientX + i, y: t.clientY + e };
            }
            for (
              var Vt = d.doc.addEventListener
                  ? function (s, t, o, a) {
                      function e(t) {
                        var e = Xt(t);
                        return o.call(a, t, e.x, e.y);
                      }
                      var i;
                      return (
                        s.addEventListener(t, e, !1),
                        Y &&
                          q[t] &&
                          ((i = function (t) {
                            for (
                              var e = Xt(t),
                                i = t,
                                r = 0,
                                n = t.targetTouches && t.targetTouches.length;
                              r < n;
                              r++
                            )
                              if (t.targetTouches[r].target == s) {
                                ((t = t.targetTouches[r]).originalEvent = i),
                                  (t.preventDefault = Yt),
                                  (t.stopPropagation = qt);
                                break;
                              }
                            return o.call(a, t, e.x, e.y);
                          }),
                          s.addEventListener(q[t], i, !1)),
                        function () {
                          return (
                            s.removeEventListener(t, e, !1),
                            Y && q[t] && s.removeEventListener(q[t], i, !1),
                            !0
                          );
                        }
                      );
                    }
                  : d.doc.attachEvent
                  ? function (t, e, r, n) {
                      function i(t) {
                        t = t || d.win.event;
                        var e =
                            d.doc.documentElement.scrollTop ||
                            d.doc.body.scrollTop,
                          i =
                            d.doc.documentElement.scrollLeft ||
                            d.doc.body.scrollLeft,
                          i = t.clientX + i,
                          e = t.clientY + e;
                        return (
                          (t.preventDefault = t.preventDefault || Gt),
                          (t.stopPropagation = t.stopPropagation || Wt),
                          r.call(n, t, i, e)
                        );
                      }
                      t.attachEvent("on" + e, i);
                      return function () {
                        return t.detachEvent("on" + e, i), !0;
                      };
                    }
                  : void 0,
                g = [],
                Ut = function (t) {
                  for (
                    var e,
                      i = t.clientX,
                      r = t.clientY,
                      n =
                        d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
                      s =
                        d.doc.documentElement.scrollLeft ||
                        d.doc.body.scrollLeft,
                      o = g.length;
                    o--;

                  ) {
                    if (((e = g[o]), Y && t.touches)) {
                      for (var a, h = t.touches.length; h--; )
                        if ((a = t.touches[h]).identifier == e.el._drag.id) {
                          (i = a.clientX),
                            (r = a.clientY),
                            (t.originalEvent || t).preventDefault();
                          break;
                        }
                    } else t.preventDefault();
                    var l,
                      u = e.el.node,
                      c = u.nextSibling,
                      p = u.parentNode,
                      f = u.style.display;
                    d.win.opera && p.removeChild(u),
                      (u.style.display = "none"),
                      (l = e.el.paper.getElementByPoint(i, r)),
                      (u.style.display = f),
                      d.win.opera &&
                        (c ? p.insertBefore(u, c) : p.appendChild(u)),
                      l && T("raphael.drag.over." + e.el.id, e.el, l),
                      (i += s),
                      (r += n),
                      T(
                        "raphael.drag.move." + e.el.id,
                        e.move_scope || e.el,
                        i - e.el._drag.x,
                        r - e.el._drag.y,
                        i,
                        r,
                        t
                      );
                  }
                },
                $t = function (t) {
                  A.unmousemove(Ut).unmouseup($t);
                  for (var e, i = g.length; i--; )
                    ((e = g[i]).el._drag = {}),
                      T(
                        "raphael.drag.end." + e.el.id,
                        e.end_scope || e.start_scope || e.move_scope || e.el,
                        t
                      );
                  g = [];
                },
                s = (A.el = {}),
                Zt = W.length;
              Zt--;

            )
              !(function (r) {
                (A[r] = s[r] =
                  function (t, e) {
                    return (
                      A.is(t, "function") &&
                        ((this.events = this.events || []),
                        this.events.push({
                          name: r,
                          f: t,
                          unbind: Vt(
                            this.shape || this.node || d.doc,
                            r,
                            t,
                            e || this
                          ),
                        })),
                      this
                    );
                  }),
                  (A["un" + r] = s["un" + r] =
                    function (t) {
                      for (var e = this.events || [], i = e.length; i--; )
                        e[i].name != r ||
                          (!A.is(t, "undefined") && e[i].f != t) ||
                          (e[i].unbind(), e.splice(i, 1), e.length) ||
                          delete this.events;
                      return this;
                    });
              })(W[Zt]);
            (s.data = function (t, e) {
              var i = (n[this.id] = n[this.id] || {});
              if (0 == arguments.length) return i;
              if (1 != arguments.length)
                return (
                  (i[t] = e), T("raphael.data.set." + this.id, this, e, t), this
                );
              if (A.is(t, "object")) {
                for (var r in t) t[P](r) && this.data(r, t[r]);
                return this;
              }
              return T("raphael.data.get." + this.id, this, i[t], t), i[t];
            }),
              (s.removeData = function (t) {
                return (
                  null == t
                    ? delete n[this.id]
                    : n[this.id] && delete n[this.id][t],
                  this
                );
              }),
              (s.getData = function () {
                return ft(n[this.id] || {});
              }),
              (s.hover = function (t, e, i, r) {
                return this.mouseover(t, i).mouseout(e, r || i);
              }),
              (s.unhover = function (t, e) {
                return this.unmouseover(t).unmouseout(e);
              });
            var i = [];
            (s.drag = function (a, h, l, u, c, p) {
              function t(t) {
                (t.originalEvent || t).preventDefault();
                var e = t.clientX,
                  i = t.clientY,
                  r = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
                  n = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft;
                if (((this._drag.id = t.identifier), Y && t.touches))
                  for (var s, o = t.touches.length; o--; )
                    if (
                      ((s = t.touches[o]),
                      (this._drag.id = s.identifier),
                      s.identifier == this._drag.id)
                    ) {
                      (e = s.clientX), (i = s.clientY);
                      break;
                    }
                (this._drag.x = e + n),
                  (this._drag.y = i + r),
                  g.length || A.mousemove(Ut).mouseup($t),
                  g.push({
                    el: this,
                    move_scope: u,
                    start_scope: c,
                    end_scope: p,
                  }),
                  h && T.on("raphael.drag.start." + this.id, h),
                  a && T.on("raphael.drag.move." + this.id, a),
                  l && T.on("raphael.drag.end." + this.id, l),
                  T(
                    "raphael.drag.start." + this.id,
                    c || u || this,
                    this._drag.x,
                    this._drag.y,
                    t
                  );
              }
              return (
                (this._drag = {}),
                i.push({ el: this, start: t }),
                this.mousedown(t),
                this
              );
            }),
              (s.onDragOver = function (t) {
                t
                  ? T.on("raphael.drag.over." + this.id, t)
                  : T.unbind("raphael.drag.over." + this.id);
              }),
              (s.undrag = function () {
                for (var t = i.length; t--; )
                  i[t].el == this &&
                    (this.unmousedown(i[t].start),
                    i.splice(t, 1),
                    T.unbind("raphael.drag.*." + this.id));
                i.length || A.unmousemove(Ut).unmouseup($t), (g = []);
              }),
              (t.circle = function (t, e, i) {
                t = A._engine.circle(this, t || 0, e || 0, i || 0);
                return this.__set__ && this.__set__.push(t), t;
              }),
              (t.rect = function (t, e, i, r, n) {
                t = A._engine.rect(
                  this,
                  t || 0,
                  e || 0,
                  i || 0,
                  r || 0,
                  n || 0
                );
                return this.__set__ && this.__set__.push(t), t;
              }),
              (t.ellipse = function (t, e, i, r) {
                t = A._engine.ellipse(this, t || 0, e || 0, i || 0, r || 0);
                return this.__set__ && this.__set__.push(t), t;
              }),
              (t.path = function (t) {
                !t || A.is(t, V) || A.is(t[0], m) || (t += w);
                var e = A._engine.path(A.format[b](A, arguments), this);
                return this.__set__ && this.__set__.push(e), e;
              }),
              (t.image = function (t, e, i, r, n) {
                t = A._engine.image(
                  this,
                  t || "about:blank",
                  e || 0,
                  i || 0,
                  r || 0,
                  n || 0
                );
                return this.__set__ && this.__set__.push(t), t;
              }),
              (t.text = function (t, e, i) {
                t = A._engine.text(this, t || 0, e || 0, z(i));
                return this.__set__ && this.__set__.push(t), t;
              }),
              (t.set = function (t) {
                A.is(t, "array") ||
                  (t = Array.prototype.splice.call(
                    arguments,
                    0,
                    arguments.length
                  ));
                var e = new de(t);
                return (
                  this.__set__ && this.__set__.push(e),
                  (e.paper = this),
                  (e.type = "set"),
                  e
                );
              }),
              (t.setStart = function (t) {
                this.__set__ = t || this.set();
              }),
              (t.setFinish = function (t) {
                var e = this.__set__;
                return delete this.__set__, e;
              }),
              (t.getSize = function () {
                var t = this.canvas.parentNode;
                return { width: t.offsetWidth, height: t.offsetHeight };
              }),
              (t.setSize = function (t, e) {
                return A._engine.setSize.call(this, t, e);
              }),
              (t.setViewBox = function (t, e, i, r, n) {
                return A._engine.setViewBox.call(this, t, e, i, r, n);
              }),
              (t.top = t.bottom = null),
              (t.raphael = A);
            function Qt() {
              return this.x + _ + this.y + _ + this.width + " × " + this.height;
            }
            (t.getElementByPoint = function (t, e) {
              var i,
                r,
                n,
                s,
                o,
                a = this.canvas,
                h = d.doc.elementFromPoint(t, e);
              if (
                !(h =
                  d.win.opera &&
                  "svg" == h.tagName &&
                  ((r = (i = a).getBoundingClientRect()),
                  (i = i.ownerDocument),
                  (n = i.body),
                  (i = i.documentElement),
                  (s = i.clientTop || n.clientTop || 0),
                  (o = i.clientLeft || n.clientLeft || 0),
                  (s = {
                    y:
                      r.top +
                      (d.win.pageYOffset || i.scrollTop || n.scrollTop) -
                      s,
                    x:
                      r.left +
                      (d.win.pageXOffset || i.scrollLeft || n.scrollLeft) -
                      o,
                  }),
                  ((r = a.createSVGRect()).x = t - s.x),
                  (r.y = e - s.y),
                  (r.width = r.height = 1),
                  (i = a.getIntersectionList(r, null)).length)
                    ? i[i.length - 1]
                    : h)
              )
                return null;
              for (; h.parentNode && h != a.parentNode && !h.raphael; )
                h = h.parentNode;
              return (h =
                (h = h == this.canvas.parentNode ? a : h) && h.raphael
                  ? this.getById(h.raphaelid)
                  : null);
            }),
              (t.getElementsByBBox = function (e) {
                var i = this.set();
                return (
                  this.forEach(function (t) {
                    A.isBBoxIntersect(t.getBBox(), e) && i.push(t);
                  }),
                  i
                );
              }),
              (t.getById = function (t) {
                for (var e = this.bottom; e; ) {
                  if (e.id == t) return e;
                  e = e.next;
                }
                return null;
              }),
              (t.forEach = function (t, e) {
                for (var i = this.bottom; i; ) {
                  if (!1 === t.call(e, i)) return this;
                  i = i.next;
                }
                return this;
              }),
              (t.getElementsByPoint = function (e, i) {
                var r = this.set();
                return (
                  this.forEach(function (t) {
                    t.isPointInside(e, i) && r.push(t);
                  }),
                  r
                );
              }),
              (s.isPointInside = function (t, e) {
                var i = (this.realPath = ct[this.type](this));
                return (
                  this.attr("transform") &&
                    this.attr("transform").length &&
                    (i = A.transformPath(i, this.attr("transform"))),
                  A.isPointInsidePath(i, t, e)
                );
              }),
              (s.getBBox = function (t) {
                var e;
                return this.removed
                  ? {}
                  : ((e = this._),
                    t
                      ? ((!e.dirty && e.bboxwt) ||
                          ((this.realPath = ct[this.type](this)),
                          (e.bboxwt = At(this.realPath)),
                          (e.bboxwt.toString = Qt),
                          (e.dirty = 0)),
                        e.bboxwt)
                      : ((!e.dirty && !e.dirtyT && e.bbox) ||
                          ((!e.dirty && this.realPath) ||
                            ((e.bboxwt = 0),
                            (this.realPath = ct[this.type](this))),
                          (e.bbox = At(pt(this.realPath, this.matrix))),
                          (e.bbox.toString = Qt),
                          (e.dirty = e.dirtyT = 0)),
                        e.bbox));
              }),
              (s.clone = function () {
                var t;
                return this.removed
                  ? null
                  : ((t = this.paper[this.type]().attr(this.attr())),
                    this.__set__ && this.__set__.push(t),
                    t);
              }),
              (s.glow = function (t) {
                if ("text" == this.type) return null;
                for (
                  var e = {
                      width:
                        ((t = t || {}).width || 10) +
                        (+this.attr("stroke-width") || 1),
                      fill: t.fill || !1,
                      opacity: null == t.opacity ? 0.5 : t.opacity,
                      offsetx: t.offsetx || 0,
                      offsety: t.offsety || 0,
                      color: t.color || "#000",
                    },
                    i = e.width / 2,
                    r = this.paper,
                    n = r.set(),
                    s = this.realPath || ct[this.type](this),
                    s = this.matrix ? pt(s, this.matrix) : s,
                    o = 1;
                  o < 1 + i;
                  o++
                )
                  n.push(
                    r.path(s).attr({
                      stroke: e.color,
                      fill: e.fill ? e.color : "none",
                      "stroke-linejoin": "round",
                      "stroke-linecap": "round",
                      "stroke-width": +((e.width / i) * o).toFixed(3),
                      opacity: +(e.opacity / i).toFixed(3),
                    })
                  );
                return n.insertBefore(this).translate(e.offsetx, e.offsety);
              });
            function Jt(f, d) {
              return function (t, e, i) {
                for (
                  var r,
                    n,
                    s,
                    o,
                    a,
                    h = "",
                    l = {},
                    u = 0,
                    c = 0,
                    p = (t = It(t)).length;
                  c < p;
                  c++
                ) {
                  if ("M" == (s = t[c])[0]) (r = +s[1]), (n = +s[2]);
                  else {
                    if (
                      e <
                      u + (o = Kt(r, n, s[1], s[2], s[3], s[4], s[5], s[6]))
                    ) {
                      if (d && !l.start) {
                        if (
                          ((h += [
                            "C" +
                              (a = Kt(
                                r,
                                n,
                                s[1],
                                s[2],
                                s[3],
                                s[4],
                                s[5],
                                s[6],
                                e - u
                              )).start.x,
                            a.start.y,
                            a.m.x,
                            a.m.y,
                            a.x,
                            a.y,
                          ]),
                          i)
                        )
                          return h;
                        (l.start = h),
                          (h = [
                            "M" + a.x,
                            a.y + "C" + a.n.x,
                            a.n.y,
                            a.end.x,
                            a.end.y,
                            s[5],
                            s[6],
                          ].join()),
                          (u += o),
                          (r = +s[5]),
                          (n = +s[6]);
                        continue;
                      }
                      if (!f && !d)
                        return {
                          x: (a = Kt(
                            r,
                            n,
                            s[1],
                            s[2],
                            s[3],
                            s[4],
                            s[5],
                            s[6],
                            e - u
                          )).x,
                          y: a.y,
                          alpha: a.alpha,
                        };
                    }
                    (u += o), (r = +s[5]), (n = +s[6]);
                  }
                  h += s.shift() + s;
                }
                return (
                  (l.end = h),
                  (a = (a = f
                    ? u
                    : d
                    ? l
                    : A.findDotsAtSegment(
                        r,
                        n,
                        s[0],
                        s[1],
                        s[2],
                        s[3],
                        s[4],
                        s[5],
                        1
                      )).alpha
                    ? { x: a.x, y: a.y, alpha: a.alpha }
                    : a)
                );
              };
            }
            var Kt = function (t, e, i, r, n, s, o, a, h) {
                return null == h
                  ? H(t, e, i, r, n, s, o, a)
                  : A.findDotsAtSegment(
                      t,
                      e,
                      i,
                      r,
                      n,
                      s,
                      o,
                      a,
                      (function (t, e, i, r, n, s, o, a, h) {
                        if (!(h < 0 || H(t, e, i, r, n, s, o, a) < h)) {
                          for (
                            var l = 0.5,
                              u = 1 - l,
                              c = H(t, e, i, r, n, s, o, a, u);
                            0.01 < M(c - h);

                          )
                            c = H(
                              t,
                              e,
                              i,
                              r,
                              n,
                              s,
                              o,
                              a,
                              (u += (c < h ? 1 : -1) * (l /= 2))
                            );
                          return u;
                        }
                      })(t, e, i, r, n, s, o, a, h)
                    );
              },
              te = Jt(1),
              ee = Jt(),
              ie = Jt(0, 1),
              r =
                ((A.getTotalLength = te),
                (A.getPointAtLength = ee),
                (A.getSubpath = function (t, e, i) {
                  return this.getTotalLength(t) - i < 1e-6 ||
                    ((t = ie(t, i, 1)), e)
                    ? ie(t, e).end
                    : t;
                }),
                (s.getTotalLength = function () {
                  var t = this.getPath();
                  if (t)
                    return this.node.getTotalLength
                      ? this.node.getTotalLength()
                      : te(t);
                }),
                (s.getPointAtLength = function (t) {
                  var e = this.getPath();
                  if (e) return ee(e, t);
                }),
                (s.getPath = function () {
                  var t,
                    e = A._getPath[this.type];
                  if ("text" != this.type && "set" != this.type)
                    return (t = e ? e(this) : t);
                }),
                (s.getSubpath = function (t, e) {
                  var i = this.getPath();
                  if (i) return A.getSubpath(i, t, e);
                }),
                (A.easing_formulas = {
                  linear: function (t) {
                    return t;
                  },
                  "<": function (t) {
                    return x(t, 1.7);
                  },
                  ">": function (t) {
                    return x(t, 0.48);
                  },
                  "<>": function (t) {
                    var t = 0.48 - t / 1.04,
                      e = C.sqrt(0.1734 + t * t),
                      i = e - t,
                      e = -e - t,
                      t =
                        x(M(i), 1 / 3) * (i < 0 ? -1 : 1) +
                        x(M(e), 1 / 3) * (e < 0 ? -1 : 1) +
                        0.5;
                    return 3 * (1 - t) * t * t + t * t * t;
                  },
                  backIn: function (t) {
                    return t * t * (2.70158 * t - 1.70158);
                  },
                  backOut: function (t) {
                    return (t -= 1) * t * (2.70158 * t + 1.70158) + 1;
                  },
                  elastic: function (t) {
                    return t == !!t
                      ? t
                      : x(2, -10 * t) * C.sin((2 * B * (t - 0.075)) / 0.3) + 1;
                  },
                  bounce: function (t) {
                    var e = 7.5625,
                      i = 2.75,
                      e =
                        t < 1 / i
                          ? e * t * t
                          : t < 2 / i
                          ? e * (t -= 1.5 / i) * t + 0.75
                          : t < 2.5 / i
                          ? e * (t -= 2.25 / i) * t + 0.9375
                          : e * (t -= 2.625 / i) * t + 0.984375;
                    return e;
                  },
                })),
              O =
                ((r.easeIn = r["ease-in"] = r["<"]),
                (r.easeOut = r["ease-out"] = r[">"]),
                (r.easeInOut = r["ease-in-out"] = r["<>"]),
                (r["back-in"] = r.backIn),
                (r["back-out"] = r.backOut),
                []),
              re =
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (t) {
                  setTimeout(t, 16);
                },
              ne = function () {
                for (var t = +new Date(), e = 0; e < O.length; e++) {
                  var i = O[e];
                  if (!i.el.removed && !i.paused) {
                    var r,
                      n = t - i.start,
                      s = i.ms,
                      o = i.easing,
                      a = i.from,
                      h = i.diff,
                      l = i.to,
                      u = (i.t, i.el),
                      c = {},
                      p = {};
                    if (
                      (i.initstatus
                        ? ((n =
                            ((i.initstatus * i.anim.top - i.prev) /
                              (i.percent - i.prev)) *
                            s),
                          (i.status = i.initstatus),
                          delete i.initstatus,
                          i.stop && O.splice(e--, 1))
                        : (i.status =
                            (i.prev + (i.percent - i.prev) * (n / s)) /
                            i.anim.top),
                      !(n < 0))
                    )
                      if (n < s) {
                        var f,
                          d = o(n / s);
                        for (f in a)
                          if (a[P](f)) {
                            switch (et[f]) {
                              case D:
                                g = +a[f] + d * s * h[f];
                                break;
                              case "colour":
                                g =
                                  "rgb(" +
                                  [
                                    se(J(a[f].r + d * s * h[f].r)),
                                    se(J(a[f].g + d * s * h[f].g)),
                                    se(J(a[f].b + d * s * h[f].b)),
                                  ].join(",") +
                                  ")";
                                break;
                              case "path":
                                for (
                                  var g = [], x = 0, y = a[f].length;
                                  x < y;
                                  x++
                                ) {
                                  g[x] = [a[f][x][0]];
                                  for (
                                    var m = 1, v = a[f][x].length;
                                    m < v;
                                    m++
                                  )
                                    g[x][m] = +a[f][x][m] + d * s * h[f][x][m];
                                  g[x] = g[x].join(_);
                                }
                                g = g.join(_);
                                break;
                              case "transform":
                                if (h[f].real)
                                  for (
                                    g = [], x = 0, y = a[f].length;
                                    x < y;
                                    x++
                                  )
                                    for (
                                      g[x] = [a[f][x][0]],
                                        m = 1,
                                        v = a[f][x].length;
                                      m < v;
                                      m++
                                    )
                                      g[x][m] = a[f][x][m] + d * s * h[f][x][m];
                                else {
                                  function b(t) {
                                    return +a[f][t] + d * s * h[f][t];
                                  }
                                  g = [
                                    ["m", b(0), b(1), b(2), b(3), b(4), b(5)],
                                  ];
                                }
                                break;
                              case "csv":
                                if ("clip-rect" == f)
                                  for (g = [], x = 4; x--; )
                                    g[x] = +a[f][x] + d * s * h[f][x];
                                break;
                              default:
                                var w = [][E](a[f]);
                                for (
                                  g = [],
                                    x = u.paper.customAttributes[f].length;
                                  x--;

                                )
                                  g[x] = +w[x] + d * s * h[f][x];
                            }
                            c[f] = g;
                          }
                        u.attr(c),
                          !(function (t, e, i) {
                            setTimeout(function () {
                              T("raphael.anim.frame." + t, e, i);
                            });
                          })(u.id, u, i.anim);
                      } else {
                        if (
                          (!(function (t, e, i) {
                            setTimeout(function () {
                              T("raphael.anim.frame." + e.id, e, i),
                                T("raphael.anim.finish." + e.id, e, i),
                                A.is(t, "function") && t.call(e);
                            });
                          })(i.callback, u, i.anim),
                          u.attr(l),
                          O.splice(e--, 1),
                          1 < i.repeat && !i.next)
                        ) {
                          for (r in l) l[P](r) && (p[r] = i.totalOrigin[r]);
                          i.el.attr(p),
                            ae(
                              i.anim,
                              i.el,
                              i.anim.percents[0],
                              null,
                              i.totalOrigin,
                              i.repeat - 1
                            );
                        }
                        i.next &&
                          !i.stop &&
                          ae(
                            i.anim,
                            i.el,
                            i.next,
                            null,
                            i.totalOrigin,
                            i.repeat
                          );
                      }
                  }
                }
                O.length && re(ne);
              },
              se = function (t) {
                return 255 < t ? 255 : t < 0 ? 0 : t;
              };
            function oe(t, e, i, r, n, s) {
              var h = 3 * e,
                l = 3 * (r - e) - h,
                u = 1 - h - l,
                r = 3 * i,
                e = 3 * (n - i) - r,
                n = 1 - r - e;
              function c(t) {
                return ((u * t + l) * t + h) * t;
              }
              return (
                (i = (function (t, e) {
                  var i, r, n, s, o, a;
                  for (n = t, a = 0; a < 8; a++) {
                    if (((s = c(n) - t), M(s) < e)) return n;
                    if (M((o = (3 * u * n + 2 * l) * n + h)) < 1e-6) break;
                    n -= s / o;
                  }
                  if (((r = 1), (n = t) < (i = 0))) return i;
                  if (r < n) return r;
                  for (; i < r; ) {
                    if (((s = c(n)), M(s - t) < e)) return n;
                    s < t ? (i = n) : (r = n), (n = (r - i) / 2 + i);
                  }
                  return n;
                })((i = t), 1 / (200 * s))),
                ((n * i + e) * i + r) * i
              );
            }
            function c(t, e) {
              var i = [],
                r = {};
              if (((this.ms = e), (this.times = 1), t)) {
                for (var n in t) t[P](n) && ((r[R(n)] = t[n]), i.push(R(n)));
                i.sort(ht);
              }
              (this.anim = r),
                (this.top = i[i.length - 1]),
                (this.percents = i);
            }
            function ae(t, e, i, r, n, s) {
              i = R(i);
              var o,
                a,
                h,
                l,
                u,
                c = t.ms,
                p = {},
                f = {},
                d = {};
              if (r)
                for (x = 0, y = O.length; x < y; x++) {
                  var g = O[x];
                  if (g.el.id == e.id && g.anim == t) {
                    g.percent != i ? (O.splice(x, 1), (h = 1)) : (a = g),
                      e.attr(g.totalOrigin);
                    break;
                  }
                }
              else r = +f;
              for (var x = 0, y = t.percents.length; x < y; x++) {
                if (t.percents[x] == i || t.percents[x] > r * t.top) {
                  (i = t.percents[x]),
                    (u = t.percents[x - 1] || 0),
                    (c = (c / t.top) * (i - u)),
                    (l = t.percents[x + 1]),
                    (o = t.anim[i]);
                  break;
                }
                r && e.attr(t.anim[t.percents[x]]);
              }
              if (o) {
                if (a) (a.initstatus = r), (a.start = new Date() - a.ms * r);
                else {
                  for (var m in o)
                    if (o[P](m) && (et[P](m) || e.paper.customAttributes[P](m)))
                      switch (
                        ((p[m] = e.attr(m)),
                        null == p[m] && (p[m] = tt[m]),
                        (f[m] = o[m]),
                        et[m])
                      ) {
                        case D:
                          d[m] = (f[m] - p[m]) / c;
                          break;
                        case "colour":
                          p[m] = A.getRGB(p[m]);
                          var v = A.getRGB(f[m]);
                          d[m] = {
                            r: (v.r - p[m].r) / c,
                            g: (v.g - p[m].g) / c,
                            b: (v.b - p[m].b) / c,
                          };
                          break;
                        case "path":
                          var v = It(p[m], f[m]),
                            b = v[1];
                          for (
                            p[m] = v[0], d[m] = [], x = 0, y = p[m].length;
                            x < y;
                            x++
                          ) {
                            d[m][x] = [0];
                            for (var w = 1, _ = p[m][x].length; w < _; w++)
                              d[m][x][w] = (b[x][w] - p[m][x][w]) / c;
                          }
                          break;
                        case "transform":
                          var k = e._,
                            C = Nt(k[m], f[m]);
                          if (C)
                            for (
                              p[m] = C.from,
                                f[m] = C.to,
                                d[m] = [],
                                d[m].real = !0,
                                x = 0,
                                y = p[m].length;
                              x < y;
                              x++
                            )
                              for (
                                d[m][x] = [p[m][x][0]],
                                  w = 1,
                                  _ = p[m][x].length;
                                w < _;
                                w++
                              )
                                d[m][x][w] = (f[m][x][w] - p[m][x][w]) / c;
                          else {
                            (C = e.matrix || new j()),
                              (k = {
                                _: { transform: k.transform },
                                getBBox: function () {
                                  return e.getBBox(1);
                                },
                              });
                            (p[m] = [C.a, C.b, C.c, C.d, C.e, C.f]),
                              Ht(k, f[m]),
                              (f[m] = k._.transform),
                              (d[m] = [
                                (k.matrix.a - C.a) / c,
                                (k.matrix.b - C.b) / c,
                                (k.matrix.c - C.c) / c,
                                (k.matrix.d - C.d) / c,
                                (k.matrix.e - C.e) / c,
                                (k.matrix.f - C.f) / c,
                              ]);
                          }
                          break;
                        case "csv":
                          var S = z(o[m])[I](G),
                            M = z(p[m])[I](G);
                          if ("clip-rect" == m)
                            for (p[m] = M, d[m] = [], x = M.length; x--; )
                              d[m][x] = (S[x] - p[m][x]) / c;
                          f[m] = S;
                          break;
                        default:
                          for (
                            S = [][E](o[m]),
                              M = [][E](p[m]),
                              d[m] = [],
                              x = e.paper.customAttributes[m].length;
                            x--;

                          )
                            d[m][x] = ((S[x] || 0) - (M[x] || 0)) / c;
                      }
                  var B,
                    L = o.easing,
                    F = A.easing_formulas[L];
                  if (
                    ((F =
                      F ||
                      ((F = z(L).match(Q)) && 5 == F.length
                        ? ((B = F),
                          function (t) {
                            return oe(t, +B[1], +B[2], +B[3], +B[4], c);
                          })
                        : lt)),
                    (g = {
                      anim: t,
                      percent: i,
                      timestamp: (L = o.start || t.start || +new Date()),
                      start: L + (t.del || 0),
                      status: 0,
                      initstatus: r || 0,
                      stop: !1,
                      ms: c,
                      easing: F,
                      from: p,
                      diff: d,
                      to: f,
                      el: e,
                      callback: o.callback,
                      prev: u,
                      next: l,
                      repeat: s || t.times,
                      origin: e.attr(),
                      totalOrigin: n,
                    }),
                    O.push(g),
                    r &&
                      !a &&
                      !h &&
                      ((g.stop = !0),
                      (g.start = new Date() - c * r),
                      1 == O.length))
                  )
                    return ne();
                  h && (g.start = new Date() - g.ms * r),
                    1 == O.length && re(ne);
                }
                T("raphael.anim.start." + e.id, e, t);
              }
            }
            function he(t) {
              for (var e = 0; e < O.length; e++)
                O[e].el.paper == t && O.splice(e--, 1);
            }
            (s.animateWith = function (t, e, i, r, n, s) {
              var o = this;
              if (o.removed) s && s.call(o);
              else {
                i = i instanceof c ? i : A.animation(i, r, n, s);
                ae(i, o, i.percents[0], null, o.attr());
                for (var a = 0, h = O.length; a < h; a++)
                  if (O[a].anim == e && O[a].el == t) {
                    O[h - 1].start = O[a].start;
                    break;
                  }
              }
              return o;
            }),
              (s.onAnimation = function (t) {
                return (
                  t
                    ? T.on("raphael.anim.frame." + this.id, t)
                    : T.unbind("raphael.anim.frame." + this.id),
                  this
                );
              }),
              (c.prototype.delay = function (t) {
                var e = new c(this.anim, this.ms);
                return (e.times = this.times), (e.del = +t || 0), e;
              }),
              (c.prototype.repeat = function (t) {
                var e = new c(this.anim, this.ms);
                return (e.del = this.del), (e.times = C.floor(k(t, 0)) || 1), e;
              }),
              (A.animation = function (t, e, i, r) {
                if (t instanceof c) return t;
                (!A.is(i, "function") && i) ||
                  ((r = r || i || null), (i = null)),
                  (e = +e || 0);
                var n,
                  s,
                  o = {};
                for (s in (t = Object(t)))
                  t[P](s) &&
                    R(s) != s &&
                    R(s) + "%" != s &&
                    ((n = !0), (o[s] = t[s]));
                if (n)
                  return (
                    i && (o.easing = i),
                    r && (o.callback = r),
                    new c({ 100: o }, e)
                  );
                if (r) {
                  var a,
                    h = 0;
                  for (a in t) {
                    var l = u(a);
                    t[P](a) && h < l && (h = l);
                  }
                  t[(h += "%")].callback || (t[h].callback = r);
                }
                return new c(t, e);
              }),
              (s.animate = function (t, e, i, r) {
                var n = this;
                return (
                  n.removed
                    ? r && r.call(n)
                    : ae(
                        (t = t instanceof c ? t : A.animation(t, e, i, r)),
                        n,
                        t.percents[0],
                        null,
                        n.attr()
                      ),
                  n
                );
              }),
              (s.setTime = function (t, e) {
                return (
                  t && null != e && this.status(t, S(e, t.ms) / t.ms), this
                );
              }),
              (s.status = function (t, e) {
                var i,
                  r,
                  n = [],
                  s = 0;
                if (null != e) return ae(t, this, -1, S(e, 1)), this;
                for (i = O.length; s < i; s++)
                  if ((r = O[s]).el.id == this.id && (!t || r.anim == t)) {
                    if (t) return r.status;
                    n.push({ anim: r.anim, status: r.status });
                  }
                return t ? 0 : n;
              }),
              (s.pause = function (t) {
                for (var e = 0; e < O.length; e++)
                  O[e].el.id != this.id ||
                    (t && O[e].anim != t) ||
                    (!1 !==
                      T("raphael.anim.pause." + this.id, this, O[e].anim) &&
                      (O[e].paused = !0));
                return this;
              }),
              (s.resume = function (t) {
                for (var e, i = 0; i < O.length; i++)
                  O[i].el.id != this.id ||
                    (t && O[i].anim != t) ||
                    ((e = O[i]),
                    !1 !== T("raphael.anim.resume." + this.id, this, e.anim) &&
                      (delete e.paused, this.status(e.anim, e.status)));
                return this;
              }),
              (s.stop = function (t) {
                for (var e = 0; e < O.length; e++)
                  O[e].el.id != this.id ||
                    (t && O[e].anim != t) ||
                    (!1 !==
                      T("raphael.anim.stop." + this.id, this, O[e].anim) &&
                      O.splice(e--, 1));
                return this;
              }),
              T.on("raphael.remove", he),
              T.on("raphael.clear", he),
              (s.toString = function () {
                return "Raphaël’s object";
              });
            var le,
              ue,
              ce,
              o,
              pe,
              fe,
              de = function (t) {
                if (
                  ((this.items = []), (this.length = 0), (this.type = "set"), t)
                )
                  for (var e = 0, i = t.length; e < i; e++)
                    !t[e] ||
                      (t[e].constructor != s.constructor &&
                        t[e].constructor != de) ||
                      ((this[this.items.length] = this.items[
                        this.items.length
                      ] =
                        t[e]),
                      this.length++);
              },
              a = de.prototype;
            for (le in ((a.push = function () {
              for (var t, e, i = 0, r = arguments.length; i < r; i++)
                !(t = arguments[i]) ||
                  (t.constructor != s.constructor && t.constructor != de) ||
                  ((this[(e = this.items.length)] = this.items[e] = t),
                  this.length++);
              return this;
            }),
            (a.pop = function () {
              return (
                this.length && delete this[this.length--], this.items.pop()
              );
            }),
            (a.forEach = function (t, e) {
              for (var i = 0, r = this.items.length; i < r; i++)
                if (!1 === t.call(e, this.items[i], i)) return this;
              return this;
            }),
            s))
              s[P](le) &&
                (a[le] = (function (i) {
                  return function () {
                    var e = arguments;
                    return this.forEach(function (t) {
                      t[i][b](t, e);
                    });
                  };
                })(le));
            return (
              (a.attr = function (t, e) {
                if (t && A.is(t, m) && A.is(t[0], "object"))
                  for (var i = 0, r = t.length; i < r; i++)
                    this.items[i].attr(t[i]);
                else
                  for (var n = 0, s = this.items.length; n < s; n++)
                    this.items[n].attr(t, e);
                return this;
              }),
              (a.clear = function () {
                for (; this.length; ) this.pop();
              }),
              (a.splice = function (t, e, i) {
                (t = t < 0 ? k(this.length + t, 0) : t),
                  (e = k(0, S(this.length - t, e)));
                for (
                  var r = [], n = [], s = [], o = 2;
                  o < arguments.length;
                  o++
                )
                  s.push(arguments[o]);
                for (o = 0; o < e; o++) n.push(this[t + o]);
                for (; o < this.length - t; o++) r.push(this[t + o]);
                var a = s.length;
                for (o = 0; o < a + r.length; o++)
                  this.items[t + o] = this[t + o] = o < a ? s[o] : r[o - a];
                for (o = this.items.length = this.length -= e - a; this[o]; )
                  delete this[o++];
                return new de(n);
              }),
              (a.exclude = function (t) {
                for (var e = 0, i = this.length; e < i; e++)
                  if (this[e] == t) return this.splice(e, 1), !0;
              }),
              (a.animate = function (t, e, i, r) {
                (!A.is(i, "function") && i) || (r = i || null);
                var n,
                  s = this.items.length,
                  o = s,
                  a = this;
                if (s) {
                  r &&
                    (n = function () {
                      --s || r.call(a);
                    }),
                    (i = A.is(i, V) ? i : n);
                  for (
                    var h = A.animation(t, e, i, n),
                      l = this.items[--o].animate(h);
                    o--;

                  )
                    this.items[o] &&
                      !this.items[o].removed &&
                      this.items[o].animateWith(l, h, h),
                      (this.items[o] && !this.items[o].removed) || s--;
                }
                return this;
              }),
              (a.insertAfter = function (t) {
                for (var e = this.items.length; e--; )
                  this.items[e].insertAfter(t);
                return this;
              }),
              (a.getBBox = function () {
                for (
                  var t, e = [], i = [], r = [], n = [], s = this.items.length;
                  s--;

                )
                  this.items[s].removed ||
                    ((t = this.items[s].getBBox()),
                    e.push(t.x),
                    i.push(t.y),
                    r.push(t.x + t.width),
                    n.push(t.y + t.height));
                return {
                  x: (e = S[b](0, e)),
                  y: (i = S[b](0, i)),
                  x2: (r = k[b](0, r)),
                  y2: (n = k[b](0, n)),
                  width: r - e,
                  height: n - i,
                };
              }),
              (a.clone = function (t) {
                t = this.paper.set();
                for (var e = 0, i = this.items.length; e < i; e++)
                  t.push(this.items[e].clone());
                return t;
              }),
              (a.toString = function () {
                return "Raphaël‘s set";
              }),
              (a.glow = function (i) {
                var r = this.paper.set();
                return (
                  this.forEach(function (t, e) {
                    t = t.glow(i);
                    null != t &&
                      t.forEach(function (t, e) {
                        r.push(t);
                      });
                  }),
                  r
                );
              }),
              (a.isPointInside = function (e, i) {
                var r = !1;
                return (
                  this.forEach(function (t) {
                    if (t.isPointInside(e, i)) return !(r = !0);
                  }),
                  r
                );
              }),
              (A.registerFont = function (t) {
                if (t.face) {
                  this.fonts = this.fonts || {};
                  var e,
                    i = { w: t.w, face: {}, glyphs: {} },
                    r = t.face["font-family"];
                  for (e in t.face) t.face[P](e) && (i.face[e] = t.face[e]);
                  if (
                    (this.fonts[r]
                      ? this.fonts[r].push(i)
                      : (this.fonts[r] = [i]),
                    !t.svg)
                  )
                    for (var n in ((i.face["units-per-em"] = u(
                      t.face["units-per-em"],
                      10
                    )),
                    t.glyphs))
                      if (t.glyphs[P](n)) {
                        var s = t.glyphs[n];
                        if (
                          ((i.glyphs[n] = {
                            w: s.w,
                            k: {},
                            d:
                              s.d &&
                              "M" +
                                s.d.replace(/[mlcxtrv]/g, function (t) {
                                  return (
                                    {
                                      l: "L",
                                      c: "C",
                                      x: "z",
                                      t: "m",
                                      r: "l",
                                      v: "c",
                                    }[t] || "M"
                                  );
                                }) +
                                "z",
                          }),
                          s.k)
                        )
                          for (var o in s.k)
                            s[P](o) && (i.glyphs[n].k[o] = s.k[o]);
                      }
                }
                return t;
              }),
              (t.getFont = function (t, e, i, r) {
                if (
                  ((r = r || "normal"),
                  (i = i || "normal"),
                  (e =
                    +e ||
                    { normal: 400, bold: 700, lighter: 300, bolder: 800 }[e] ||
                    400),
                  A.fonts)
                ) {
                  var n,
                    s = A.fonts[t];
                  if (!s) {
                    var o,
                      a = new RegExp(
                        "(^|\\s)" +
                          t.replace(/[^\w\d\s+!~.:_-]/g, w) +
                          "(\\s|$)",
                        "i"
                      );
                    for (o in A.fonts)
                      if (A.fonts[P](o) && a.test(o)) {
                        s = A.fonts[o];
                        break;
                      }
                  }
                  if (s)
                    for (
                      var h = 0, l = s.length;
                      h < l &&
                      ((n = s[h]).face["font-weight"] != e ||
                        (n.face["font-style"] != i && n.face["font-style"]) ||
                        n.face["font-stretch"] != r);
                      h++
                    );
                  return n;
                }
              }),
              (t.print = function (t, e, i, r, n, s, o, a) {
                (s = s || "middle"),
                  (o = k(S(o || 0, 1), -1)),
                  (a = k(S(a || 1, 3), 1));
                var h = z(i)[I](w),
                  l = 0,
                  u = 0,
                  c = w;
                if ((r = A.is(r, "string") ? this.getFont(r) : r))
                  for (
                    var p,
                      f,
                      d = (n || 16) / r.face["units-per-em"],
                      i = r.face.bbox[I](G),
                      g = +i[0],
                      x = i[3] - i[1],
                      y = 0,
                      m =
                        +i[1] + ("baseline" == s ? x + +r.face.descent : x / 2),
                      v = 0,
                      b = h.length;
                    v < b;
                    v++
                  )
                    "\n" == h[v]
                      ? ((u = f = l = 0), (y += x * a))
                      : ((p = (u && r.glyphs[h[v - 1]]) || {}),
                        (f = r.glyphs[h[v]]),
                        (l += u
                          ? (p.w || r.w) + ((p.k && p.k[h[v]]) || 0) + r.w * o
                          : 0),
                        (u = 1)),
                      f &&
                        f.d &&
                        (c += A.transformPath(f.d, [
                          "t",
                          l * d,
                          y * d,
                          "s",
                          d,
                          d,
                          g,
                          m,
                          "t",
                          (t - g) / d,
                          (e - m) / d,
                        ]));
                return this.path(c).attr({ fill: "#000", stroke: "none" });
              }),
              (t.add = function (t) {
                if (A.is(t, "array"))
                  for (var e, i = this.set(), r = 0, n = t.length; r < n; r++)
                    (e = t[r] || {}),
                      f[P](e.type) && i.push(this[e.type]().attr(e));
                return i;
              }),
              (A.format = function (t, e) {
                var i = A.is(e, m) ? [0][E](e) : arguments;
                return (
                  (t =
                    t && A.is(t, V) && i.length - 1
                      ? t.replace(y, function (t, e) {
                          return null == i[++e] ? w : i[e];
                        })
                      : t) || w
                );
              }),
              (A.fullfill =
                ((ue = /\{([^\}]+)\}/g),
                (ce =
                  /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g),
                function (t, r) {
                  return String(t).replace(ue, function (t, e) {
                    return (
                      (t = t),
                      (s = i = r),
                      e.replace(ce, function (t, e, i, r, n) {
                        (e = e || r),
                          s &&
                            "function" == typeof (s = e in s ? s[e] : s) &&
                            n &&
                            (s = s());
                      }),
                      (s = (null == s || s == i ? t : s) + "")
                    );
                    var i, s;
                  });
                })),
              (A.ninja = function () {
                if (v.was) d.win.Raphael = v.is;
                else {
                  window.Raphael = void 0;
                  try {
                    delete window.Raphael;
                  } catch (t) {}
                }
                return A;
              }),
              (A.st = a),
              T.on("raphael.DOMload", function () {
                p = !0;
              }),
              (o = document),
              (pe = "DOMContentLoaded"),
              null == o.readyState &&
                o.addEventListener &&
                (o.addEventListener(
                  pe,
                  (fe = function () {
                    o.removeEventListener(pe, fe, !1),
                      (o.readyState = "complete");
                  }),
                  !1
                ),
                (o.readyState = "loading")),
              (function t() {
                /in/.test(o.readyState)
                  ? setTimeout(t, 9)
                  : A.eve("raphael.DOMload");
              })(),
              A
            );
          }.apply(e, i));
        void 0 !== e && (t.exports = e);
      },
      "./dev/raphael.svg.js": function (t, e, i) {
        (i = [i("./dev/raphael.core.js")]),
          (e = function (B) {
            if (!B || B.svg) {
              function L(t, e) {
                var r = "linear",
                  i = t.id + e,
                  n = 0.5,
                  s = 0.5,
                  o = t.node,
                  a = t.paper,
                  h = o.style,
                  l = B._g.doc.getElementById(i);
                if (!l) {
                  if (
                    ((e = (e = E(e).replace(
                      B._radial_gradient,
                      function (t, e, i) {
                        return (
                          (r = "radial"),
                          e &&
                            i &&
                            ((n = g(e)),
                            (e = 2 * (0.5 < (s = g(i))) - 1),
                            0.25 < y(n - 0.5, 2) + y(s - 0.5, 2)) &&
                            (s = x.sqrt(0.25 - y(n - 0.5, 2)) * e + 0.5) &&
                            0.5 != s &&
                            (s = s.toFixed(5) - 1e-5 * e),
                          H
                        );
                      }
                    )).split(/\s*\-\s*/)),
                    "linear" == r)
                  ) {
                    var u = e.shift(),
                      u = -g(u);
                    if (isNaN(u)) return null;
                    var u = [0, 0, x.cos(B.rad(u)), x.sin(B.rad(u))],
                      c = 1 / (I(D(u[2]), D(u[3])) || 1);
                    (u[2] *= c),
                      (u[3] *= c),
                      u[2] < 0 && ((u[0] = -u[2]), (u[2] = 0)),
                      u[3] < 0 && ((u[1] = -u[3]), (u[3] = 0));
                  }
                  var p = B._parseDots(e);
                  if (!p) return null;
                  if (
                    ((i = i.replace(/[\(\)\s,\xb0#]/g, "_")),
                    t.gradient &&
                      i != t.gradient.id &&
                      (a.defs.removeChild(t.gradient), delete t.gradient),
                    !t.gradient)
                  ) {
                    (l = j(r + "Gradient", { id: i })),
                      (t.gradient = l),
                      j(
                        l,
                        "radial" == r
                          ? { fx: n, fy: s }
                          : {
                              x1: u[0],
                              y1: u[1],
                              x2: u[2],
                              y2: u[3],
                              gradientTransform: t.matrix.invert(),
                            }
                      ),
                      a.defs.appendChild(l);
                    for (var f = 0, d = p.length; f < d; f++)
                      l.appendChild(
                        j("stop", {
                          offset: p[f].offset || (f ? "100%" : "0%"),
                          "stop-color": p[f].color || "#fff",
                          "stop-opacity": isFinite(p[f].opacity)
                            ? p[f].opacity
                            : 1,
                        })
                      );
                  }
                }
                return (
                  j(o, { fill: m(i), opacity: 1, "fill-opacity": 1 }),
                  (h.fill = H),
                  (h.opacity = 1),
                  (h.fillOpacity = 1)
                );
              }
              function F(t) {
                var e = t.getBBox(1);
                j(t.pattern, {
                  patternTransform:
                    t.matrix.invert() + " translate(" + e.x + "," + e.y + ")",
                });
              }
              function T(t, e, i) {
                if ("path" == t.type) {
                  for (
                    var r,
                      n,
                      s,
                      o,
                      a,
                      h,
                      l,
                      u,
                      c,
                      p = E(e).toLowerCase().split("-"),
                      f = t.paper,
                      d = i ? "end" : "start",
                      g = t.node,
                      x = t.attrs,
                      y = x["stroke-width"],
                      m = p.length,
                      v = "classic",
                      b = 3,
                      w = 3,
                      _ = 5;
                    m--;

                  )
                    switch (p[m]) {
                      case "block":
                      case "classic":
                      case "oval":
                      case "diamond":
                      case "open":
                      case "none":
                        v = p[m];
                        break;
                      case "wide":
                        w = 5;
                        break;
                      case "narrow":
                        w = 2;
                        break;
                      case "long":
                        b = 5;
                        break;
                      case "short":
                        b = 2;
                    }
                  for (u in ((u =
                    "open" == v
                      ? ((b += 2),
                        (w += 2),
                        (_ += 2),
                        (n = 1),
                        (h = i ? 4 : 1),
                        { fill: "none", stroke: x.stroke })
                      : ((h = n = b / 2), { fill: x.stroke, stroke: "none" })),
                  t._.arrows
                    ? i
                      ? (t._.arrows.endPath && C[t._.arrows.endPath]--,
                        t._.arrows.endMarker && C[t._.arrows.endMarker]--)
                      : (t._.arrows.startPath && C[t._.arrows.startPath]--,
                        t._.arrows.startMarker && C[t._.arrows.startMarker]--)
                    : (t._.arrows = {}),
                  "none" != v
                    ? ((o = "raphael-marker-" + d + v + b + w + "-obj" + t.id),
                      B._g.doc.getElementById((s = "raphael-marker-" + v))
                        ? C[s]++
                        : (f.defs.appendChild(
                            j(j("path"), {
                              "stroke-linecap": "round",
                              d: k[v],
                              id: s,
                            })
                          ),
                          (C[s] = 1)),
                      (l = B._g.doc.getElementById(o))
                        ? (C[o]++, (a = l.getElementsByTagName("use")[0]))
                        : ((l = j(j("marker"), {
                            id: o,
                            markerHeight: w,
                            markerWidth: b,
                            orient: "auto",
                            refX: h,
                            refY: w / 2,
                          })),
                          (a = j(j("use"), {
                            "xlink:href": "#" + s,
                            transform:
                              (i
                                ? "rotate(180 " + b / 2 + " " + w / 2 + ") "
                                : H) +
                              "scale(" +
                              b / _ +
                              "," +
                              w / _ +
                              ")",
                            "stroke-width": (1 / ((b / _ + w / _) / 2)).toFixed(
                              4
                            ),
                          })),
                          l.appendChild(a),
                          f.defs.appendChild(l),
                          (C[o] = 1)),
                      j(a, u),
                      (h = n * ("diamond" != v && "oval" != v)),
                      (l = i
                        ? ((r = t._.arrows.startdx * y || 0),
                          B.getTotalLength(x.path) - h * y)
                        : ((r = h * y),
                          B.getTotalLength(x.path) -
                            (t._.arrows.enddx * y || 0))),
                      ((u = {})["marker-" + d] = "url(#" + o + ")"),
                      (l || r) && (u.d = B.getSubpath(x.path, r, l)),
                      j(g, u),
                      (t._.arrows[d + "Path"] = s),
                      (t._.arrows[d + "Marker"] = o),
                      (t._.arrows[d + "dx"] = h),
                      (t._.arrows[d + "Type"] = v),
                      (t._.arrows[d + "String"] = e))
                    : ((l = i
                        ? ((r = t._.arrows.startdx * y || 0),
                          B.getTotalLength(x.path) - r)
                        : ((r = 0),
                          B.getTotalLength(x.path) -
                            (t._.arrows.enddx * y || 0))),
                      t._.arrows[d + "Path"] &&
                        j(g, { d: B.getSubpath(x.path, r, l) }),
                      delete t._.arrows[d + "Path"],
                      delete t._.arrows[d + "Marker"],
                      delete t._.arrows[d + "dx"],
                      delete t._.arrows[d + "Type"],
                      delete t._.arrows[d + "String"]),
                  C))
                    C[P](u) &&
                      !C[u] &&
                      (c = B._g.doc.getElementById(u)) &&
                      c.parentNode.removeChild(c);
                }
              }
              function A(t, e, i) {
                if ((e = h[E(e).toLowerCase()])) {
                  for (
                    var r = t.attrs["stroke-width"] || "1",
                      n =
                        { round: r, square: r, butt: 0 }[
                          t.attrs["stroke-linecap"] || i["stroke-linecap"]
                        ] || 0,
                      s = [],
                      o = e.length;
                    o--;

                  )
                    s[o] = e[o] * r + (o % 2 ? 1 : -1) * n;
                  j(t.node, { "stroke-dasharray": s.join(",") });
                } else j(t.node, { "stroke-dasharray": "none" });
              }
              function p(t, e) {
                var i,
                  r = t.node,
                  n = t.attrs,
                  s = r.style.visibility;
                for (i in ((r.style.visibility = "hidden"), e))
                  if (e[P](i) && B._availableAttrs[P](i)) {
                    var o = e[i];
                    switch (((n[i] = o), i)) {
                      case "blur":
                        t.blur(o);
                        break;
                      case "title":
                        var a = r.getElementsByTagName("title");
                        a.length && (a = a[0])
                          ? (a.firstChild.nodeValue = o)
                          : ((a = j("title")),
                            (h = B._g.doc.createTextNode(o)),
                            a.appendChild(h),
                            r.appendChild(a));
                        break;
                      case "href":
                      case "target":
                        var h = r.parentNode;
                        "a" != h.tagName.toLowerCase() &&
                          ((a = j("a")),
                          h.insertBefore(a, r),
                          a.appendChild(r),
                          (h = a)),
                          "target" == i
                            ? h.setAttributeNS(
                                N,
                                "show",
                                "blank" == o ? "new" : o
                              )
                            : h.setAttributeNS(N, i, o);
                        break;
                      case "cursor":
                        r.style.cursor = o;
                        break;
                      case "transform":
                        t.transform(o);
                        break;
                      case "arrow-start":
                        T(t, o);
                        break;
                      case "arrow-end":
                        T(t, o, 1);
                        break;
                      case "clip-rect":
                        var l,
                          u = E(o).split(R);
                        4 == u.length &&
                          (t.clip &&
                            t.clip.parentNode.parentNode.removeChild(
                              t.clip.parentNode
                            ),
                          (p = j("clipPath")),
                          (l = j("rect")),
                          (p.id = B.createUUID()),
                          j(l, { x: u[0], y: u[1], width: u[2], height: u[3] }),
                          p.appendChild(l),
                          t.paper.defs.appendChild(p),
                          j(r, { "clip-path": "url(#" + p.id + ")" }),
                          (t.clip = l)),
                          o ||
                            ((u = r.getAttribute("clip-path")) &&
                              ((l = B._g.doc.getElementById(
                                u.replace(/(^url\(#|\)$)/g, H)
                              )) && l.parentNode.removeChild(l),
                              j(r, { "clip-path": H }),
                              delete t.clip));
                        break;
                      case "path":
                        "path" == t.type &&
                          (j(r, {
                            d: o ? (n.path = B._pathToAbsolute(o)) : "M0,0",
                          }),
                          (t._.dirty = 1),
                          t._.arrows) &&
                          ("startString" in t._.arrows &&
                            T(t, t._.arrows.startString),
                          "endString" in t._.arrows) &&
                          T(t, t._.arrows.endString, 1);
                        break;
                      case "width":
                        if ((r.setAttribute(i, o), (t._.dirty = 1), !n.fx))
                          break;
                        (i = "x"), (o = n.x);
                      case "x":
                        n.fx && (o = -n.x - (n.width || 0));
                      case "rx":
                        if ("rx" == i && "rect" == t.type) break;
                      case "cx":
                        r.setAttribute(i, o),
                          t.pattern && F(t),
                          (t._.dirty = 1);
                        break;
                      case "height":
                        if ((r.setAttribute(i, o), (t._.dirty = 1), !n.fy))
                          break;
                        (i = "y"), (o = n.y);
                      case "y":
                        n.fy && (o = -n.y - (n.height || 0));
                      case "ry":
                        if ("ry" == i && "rect" == t.type) break;
                      case "cy":
                        r.setAttribute(i, o),
                          t.pattern && F(t),
                          (t._.dirty = 1);
                        break;
                      case "r":
                        "rect" == t.type
                          ? j(r, { rx: o, ry: o })
                          : r.setAttribute(i, o),
                          (t._.dirty = 1);
                        break;
                      case "src":
                        "image" == t.type && r.setAttributeNS(N, "href", o);
                        break;
                      case "stroke-width":
                        (1 == t._.sx && 1 == t._.sy) ||
                          (o /= I(D(t._.sx), D(t._.sy)) || 1),
                          r.setAttribute(i, o),
                          n["stroke-dasharray"] &&
                            A(t, n["stroke-dasharray"], e),
                          t._.arrows &&
                            ("startString" in t._.arrows &&
                              T(t, t._.arrows.startString),
                            "endString" in t._.arrows) &&
                            T(t, t._.arrows.endString, 1);
                        break;
                      case "stroke-dasharray":
                        A(t, o, e);
                        break;
                      case "fill":
                        var c = E(o).match(B._ISURL);
                        if (c) {
                          var p = j("pattern"),
                            f = j("image");
                          (p.id = B.createUUID()),
                            j(p, {
                              x: 0,
                              y: 0,
                              patternUnits: "userSpaceOnUse",
                              height: 1,
                              width: 1,
                            }),
                            j(f, { x: 0, y: 0, "xlink:href": c[1] }),
                            p.appendChild(f),
                            !(function (i) {
                              B._preload(c[1], function () {
                                var t = this.offsetWidth,
                                  e = this.offsetHeight;
                                j(i, { width: t, height: e }),
                                  j(f, { width: t, height: e });
                              });
                            })(p),
                            t.paper.defs.appendChild(p),
                            j(r, { fill: "url(#" + p.id + ")" }),
                            (t.pattern = p),
                            t.pattern && F(t);
                          break;
                        }
                        var d,
                          g,
                          x = B.getRGB(o);
                        if (x.error) {
                          if (
                            ("circle" == t.type ||
                              "ellipse" == t.type ||
                              "r" != E(o).charAt()) &&
                            L(t, o)
                          ) {
                            ("opacity" in n || "fill-opacity" in n) &&
                              (d = B._g.doc.getElementById(
                                r
                                  .getAttribute("fill")
                                  .replace(/^url\(#|\)$/g, H)
                              )) &&
                              ((g = d.getElementsByTagName("stop")),
                              j(g[g.length - 1], {
                                "stop-opacity":
                                  ("opacity" in n ? n.opacity : 1) *
                                  ("fill-opacity" in n ? n["fill-opacity"] : 1),
                              })),
                              (n.gradient = o),
                              (n.fill = "none");
                            break;
                          }
                        } else
                          delete e.gradient,
                            delete n.gradient,
                            !B.is(n.opacity, "undefined") &&
                              B.is(e.opacity, "undefined") &&
                              j(r, { opacity: n.opacity }),
                            !B.is(n["fill-opacity"], "undefined") &&
                              B.is(e["fill-opacity"], "undefined") &&
                              j(r, { "fill-opacity": n["fill-opacity"] });
                        x[P]("opacity") &&
                          j(r, {
                            "fill-opacity":
                              1 < x.opacity ? x.opacity / 100 : x.opacity,
                          });
                      case "stroke":
                        (x = B.getRGB(o)),
                          r.setAttribute(i, x.hex),
                          "stroke" == i &&
                            x[P]("opacity") &&
                            j(r, {
                              "stroke-opacity":
                                1 < x.opacity ? x.opacity / 100 : x.opacity,
                            }),
                          "stroke" == i &&
                            t._.arrows &&
                            ("startString" in t._.arrows &&
                              T(t, t._.arrows.startString),
                            "endString" in t._.arrows) &&
                            T(t, t._.arrows.endString, 1);
                        break;
                      case "gradient":
                        ("circle" != t.type &&
                          "ellipse" != t.type &&
                          "r" == E(o).charAt()) ||
                          L(t, o);
                        break;
                      case "opacity":
                        n.gradient &&
                          !n[P]("stroke-opacity") &&
                          j(r, { "stroke-opacity": 1 < o ? o / 100 : o });
                      case "fill-opacity":
                        if (n.gradient) {
                          (d = B._g.doc.getElementById(
                            r.getAttribute("fill").replace(/^url\(#|\)$/g, H)
                          )) &&
                            ((g = d.getElementsByTagName("stop")),
                            j(g[g.length - 1], { "stop-opacity": o }));
                          break;
                        }
                      default:
                        "font-size" == i && (o = z(o, 10) + "px");
                        u = i.replace(/(\-.)/g, function (t) {
                          return t.substring(1).toUpperCase();
                        });
                        (r.style[u] = o), (t._.dirty = 1), r.setAttribute(i, o);
                    }
                  }
                var y = t,
                  m = e;
                if (
                  "text" == y.type &&
                  (m[P]("text") ||
                    m[P]("font") ||
                    m[P]("font-size") ||
                    m[P]("x") ||
                    m[P]("y"))
                ) {
                  var v = y.attrs,
                    b = y.node,
                    w = b.firstChild
                      ? z(
                          B._g.doc.defaultView
                            .getComputedStyle(b.firstChild, H)
                            .getPropertyValue("font-size"),
                          10
                        )
                      : 10;
                  if (m[P]("text")) {
                    for (v.text = m.text; b.firstChild; )
                      b.removeChild(b.firstChild);
                    for (
                      var _,
                        k = E(m.text).split("\n"),
                        C = [],
                        S = 0,
                        M = k.length;
                      S < M;
                      S++
                    )
                      (_ = j("tspan")),
                        S && j(_, { dy: w * O, x: v.x }),
                        _.appendChild(B._g.doc.createTextNode(k[S])),
                        b.appendChild(_),
                        (C[S] = _);
                  } else
                    for (
                      S = 0, M = (C = b.getElementsByTagName("tspan")).length;
                      S < M;
                      S++
                    )
                      S ? j(C[S], { dy: w * O, x: v.x }) : j(C[0], { dy: 0 });
                  j(b, { x: v.x, y: v.y }), (y._.dirty = 1);
                  (m = y._getBBox()), (y = v.y - (m.y + m.height / 2));
                  y && B.is(y, "finite") && j(C[0], { dy: y });
                }
                r.style.visibility = s;
              }
              function r(t) {
                return t.parentNode &&
                  "a" === t.parentNode.tagName.toLowerCase()
                  ? t.parentNode
                  : t;
              }
              function a(t, e) {
                ((this[0] = this.node = t).raphael = !0),
                  (this.id = (
                    "0000" +
                    ((Math.random() * Math.pow(36, 5)) << 0).toString(36)
                  ).slice(-5)),
                  (t.raphaelid = this.id),
                  (this.matrix = B.matrix()),
                  (this.realPath = null),
                  (this.paper = e),
                  (this.attrs = this.attrs || {}),
                  (this._ = {
                    transform: [],
                    sx: 1,
                    sy: 1,
                    deg: 0,
                    dx: 0,
                    dy: 0,
                    dirty: 1,
                  }),
                  e.bottom || (e.bottom = this),
                  (this.prev = e.top),
                  e.top && (e.top.next = this),
                  ((e.top = this).next = null);
              }
              var t,
                P = "hasOwnProperty",
                E = String,
                g = parseFloat,
                z = parseInt,
                x = Math,
                I = x.max,
                D = x.abs,
                y = x.pow,
                R = /[, ]+/,
                f = B.eve,
                H = "",
                N = "http://www.w3.org/1999/xlink",
                k = {
                  block: "M5,0 0,2.5 5,5z",
                  classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                  diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                  open: "M6,1 1,3.5 6,6",
                  oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z",
                },
                C = {},
                j =
                  ((B.toString = function () {
                    return (
                      "Your browser supports SVG.\nYou are running Raphaël " +
                      this.version
                    );
                  }),
                  function (t, e) {
                    if (e)
                      for (var i in ("string" == typeof t && (t = j(t)), e))
                        e[P](i) &&
                          ("xlink:" == i.substring(0, 6)
                            ? t.setAttributeNS(N, i.substring(6), E(e[i]))
                            : t.setAttribute(i, E(e[i])));
                    else
                      (t = B._g.doc.createElementNS(
                        "http://www.w3.org/2000/svg",
                        t
                      )).style &&
                        (t.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                    return t;
                  }),
                m = function (t) {
                  var e;
                  return !(e = document.documentMode) || (9 !== e && 10 !== e)
                    ? "url('" +
                        ((e = document.location).protocol +
                          "//" +
                          e.host +
                          e.pathname +
                          e.search) +
                        "#" +
                        t +
                        "')"
                    : "url('#" + t + "')";
                },
                h = {
                  "-": [3, 1],
                  ".": [1, 1],
                  "-.": [3, 1, 1, 1],
                  "-..": [3, 1, 1, 1, 1, 1],
                  ". ": [1, 3],
                  "- ": [4, 3],
                  "--": [8, 3],
                  "- .": [4, 3, 1, 3],
                  "--.": [8, 3, 1, 3],
                  "--..": [8, 3, 1, 3, 1, 3],
                },
                O = 1.2,
                e = B.el,
                i =
                  (((a.prototype = e).constructor = a),
                  (B._engine.path = function (t, e) {
                    var i = j("path"),
                      i = (e.canvas && e.canvas.appendChild(i), new a(i, e));
                    return (
                      (i.type = "path"),
                      p(i, { fill: "none", stroke: "#000", path: t }),
                      i
                    );
                  }),
                  (e.rotate = function (t, e, i) {
                    var r;
                    return (
                      this.removed ||
                        ((t = E(t).split(R)).length - 1 &&
                          ((e = g(t[1])), (i = g(t[2]))),
                        (t = g(t[0])),
                        (null != (e = null == i ? i : e) && null != i) ||
                          ((e = (r = this.getBBox(1)).x + r.width / 2),
                          (i = r.y + r.height / 2)),
                        this.transform(
                          this._.transform.concat([["r", t, e, i]])
                        )),
                      this
                    );
                  }),
                  (e.scale = function (t, e, i, r) {
                    var n;
                    return (
                      this.removed ||
                        ((t = E(t).split(R)).length - 1 &&
                          ((e = g(t[1])), (i = g(t[2])), (r = g(t[3]))),
                        (t = g(t[0])),
                        null == e && (e = t),
                        (null != (i = null == r ? r : i) && null != r) ||
                          (n = this.getBBox(1)),
                        (i = null == i ? n.x + n.width / 2 : i),
                        (r = null == r ? n.y + n.height / 2 : r),
                        this.transform(
                          this._.transform.concat([["s", t, e, i, r]])
                        )),
                      this
                    );
                  }),
                  (e.translate = function (t, e) {
                    return (
                      this.removed ||
                        ((t = E(t).split(R)).length - 1 && (e = g(t[1])),
                        (t = g(t[0]) || 0),
                        this.transform(
                          this._.transform.concat([["t", t, (e = +e || 0)]])
                        )),
                      this
                    );
                  }),
                  (e.transform = function (t) {
                    var e = this._;
                    return null == t
                      ? e.transform
                      : (B._extractTransform(this, t),
                        this.clip &&
                          j(this.clip, { transform: this.matrix.invert() }),
                        this.pattern && F(this),
                        this.node && j(this.node, { transform: this.matrix }),
                        (1 == e.sx && 1 == e.sy) ||
                          ((t = this.attrs[P]("stroke-width")
                            ? this.attrs["stroke-width"]
                            : 1),
                          this.attr({ "stroke-width": t })),
                        this);
                  }),
                  (e.hide = function () {
                    return (
                      this.removed || (this.node.style.display = "none"), this
                    );
                  }),
                  (e.show = function () {
                    return this.removed || (this.node.style.display = ""), this;
                  }),
                  (e.remove = function () {
                    var t = r(this.node);
                    if (!this.removed && t.parentNode) {
                      var e,
                        i = this.paper;
                      for (e in (i.__set__ && i.__set__.exclude(this),
                      f.unbind("raphael.*.*." + this.id),
                      this.gradient && i.defs.removeChild(this.gradient),
                      B._tear(this, i),
                      t.parentNode.removeChild(t),
                      this.removeData(),
                      this))
                        this[e] =
                          "function" == typeof this[e]
                            ? B._removedFactory(e)
                            : null;
                      this.removed = !0;
                    }
                  }),
                  (e._getBBox = function () {
                    "none" == this.node.style.display &&
                      (this.show(), (t = !0));
                    var t,
                      e,
                      i = !1,
                      r =
                        (this.paper.canvas.parentElement
                          ? (e = this.paper.canvas.parentElement.style)
                          : this.paper.canvas.parentNode &&
                            (e = this.paper.canvas.parentNode.style),
                        e &&
                          "none" == e.display &&
                          ((i = !0), (e.display = "")),
                        {});
                    try {
                      r = this.node.getBBox();
                    } catch (t) {
                      r = {
                        x: this.node.clientLeft,
                        y: this.node.clientTop,
                        width: this.node.clientWidth,
                        height: this.node.clientHeight,
                      };
                    } finally {
                      (r = r || {}), i && (e.display = "none");
                    }
                    return t && this.hide(), r;
                  }),
                  (e.attr = function (t, e) {
                    if (!this.removed) {
                      if (null == t) {
                        var i,
                          r = {};
                        for (i in this.attrs)
                          this.attrs[P](i) && (r[i] = this.attrs[i]);
                        return (
                          r.gradient &&
                            "none" == r.fill &&
                            (r.fill = r.gradient) &&
                            delete r.gradient,
                          (r.transform = this._.transform),
                          r
                        );
                      }
                      if (null == e && B.is(t, "string")) {
                        if (
                          "fill" == t &&
                          "none" == this.attrs.fill &&
                          this.attrs.gradient
                        )
                          return this.attrs.gradient;
                        if ("transform" == t) return this._.transform;
                        for (
                          var n = t.split(R), s = {}, o = 0, a = n.length;
                          o < a;
                          o++
                        )
                          (t = n[o]) in this.attrs
                            ? (s[t] = this.attrs[t])
                            : B.is(this.paper.customAttributes[t], "function")
                            ? (s[t] = this.paper.customAttributes[t].def)
                            : (s[t] = B._availableAttrs[t]);
                        return a - 1 ? s : s[n[0]];
                      }
                      if (null == e && B.is(t, "array")) {
                        for (s = {}, o = 0, a = t.length; o < a; o++)
                          s[t[o]] = this.attr(t[o]);
                        return s;
                      }
                      var h, l;
                      for (l in (null != e
                        ? ((h = {})[t] = e)
                        : null != t && B.is(t, "object") && (h = t),
                      h))
                        f("raphael.attr." + l + "." + this.id, this, h[l]);
                      for (l in this.paper.customAttributes)
                        if (
                          this.paper.customAttributes[P](l) &&
                          h[P](l) &&
                          B.is(this.paper.customAttributes[l], "function")
                        ) {
                          var u,
                            c = this.paper.customAttributes[l].apply(
                              this,
                              [].concat(h[l])
                            );
                          for (u in ((this.attrs[l] = h[l]), c))
                            c[P](u) && (h[u] = c[u]);
                        }
                      p(this, h);
                    }
                    return this;
                  }),
                  (e.toFront = function () {
                    var t;
                    return (
                      this.removed ||
                        ((t = r(this.node)).parentNode.appendChild(t),
                        (t = this.paper).top != this && B._tofront(this, t)),
                      this
                    );
                  }),
                  (e.toBack = function () {
                    var t, e;
                    return (
                      this.removed ||
                        ((e = (t = r(this.node)).parentNode).insertBefore(
                          t,
                          e.firstChild
                        ),
                        B._toback(this, this.paper),
                        this.paper),
                      this
                    );
                  }),
                  (e.insertAfter = function (t) {
                    var e, i;
                    return (
                      !this.removed &&
                        t &&
                        ((e = r(this.node)),
                        (i = r(t.node || t[t.length - 1].node)).nextSibling
                          ? i.parentNode.insertBefore(e, i.nextSibling)
                          : i.parentNode.appendChild(e),
                        B._insertafter(this, t, this.paper)),
                      this
                    );
                  }),
                  (e.insertBefore = function (t) {
                    var e, i;
                    return (
                      !this.removed &&
                        t &&
                        ((e = r(this.node)),
                        (i = r(t.node || t[0].node)).parentNode.insertBefore(
                          e,
                          i
                        ),
                        B._insertbefore(this, t, this.paper)),
                      this
                    );
                  }),
                  (e.blur = function (t) {
                    var e,
                      i,
                      r = this;
                    return (
                      0 != +t
                        ? ((e = j("filter")),
                          (i = j("feGaussianBlur")),
                          (r.attrs.blur = t),
                          (e.id = B.createUUID()),
                          j(i, { stdDeviation: +t || 1.5 }),
                          e.appendChild(i),
                          r.paper.defs.appendChild(e),
                          (r._blur = e),
                          j(r.node, { filter: "url(#" + e.id + ")" }))
                        : (r._blur &&
                            (r._blur.parentNode.removeChild(r._blur),
                            delete r._blur,
                            delete r.attrs.blur),
                          r.node.removeAttribute("filter")),
                      r
                    );
                  }),
                  (B._engine.circle = function (t, e, i, r) {
                    var n = j("circle"),
                      t = (t.canvas && t.canvas.appendChild(n), new a(n, t));
                    return (
                      (t.attrs = {
                        cx: e,
                        cy: i,
                        r: r,
                        fill: "none",
                        stroke: "#000",
                      }),
                      (t.type = "circle"),
                      j(n, t.attrs),
                      t
                    );
                  }),
                  (B._engine.rect = function (t, e, i, r, n, s) {
                    var o = j("rect"),
                      t = (t.canvas && t.canvas.appendChild(o), new a(o, t));
                    return (
                      (t.attrs = {
                        x: e,
                        y: i,
                        width: r,
                        height: n,
                        rx: s || 0,
                        ry: s || 0,
                        fill: "none",
                        stroke: "#000",
                      }),
                      (t.type = "rect"),
                      j(o, t.attrs),
                      t
                    );
                  }),
                  (B._engine.ellipse = function (t, e, i, r, n) {
                    var s = j("ellipse"),
                      t = (t.canvas && t.canvas.appendChild(s), new a(s, t));
                    return (
                      (t.attrs = {
                        cx: e,
                        cy: i,
                        rx: r,
                        ry: n,
                        fill: "none",
                        stroke: "#000",
                      }),
                      (t.type = "ellipse"),
                      j(s, t.attrs),
                      t
                    );
                  }),
                  (B._engine.image = function (t, e, i, r, n, s) {
                    var o = j("image"),
                      o =
                        (j(o, {
                          x: i,
                          y: r,
                          width: n,
                          height: s,
                          preserveAspectRatio: "none",
                        }),
                        o.setAttributeNS(N, "href", e),
                        t.canvas && t.canvas.appendChild(o),
                        new a(o, t));
                    return (
                      (o.attrs = { x: i, y: r, width: n, height: s, src: e }),
                      (o.type = "image"),
                      o
                    );
                  }),
                  (B._engine.text = function (t, e, i, r) {
                    var n = j("text"),
                      n = (t.canvas && t.canvas.appendChild(n), new a(n, t));
                    return (
                      (n.attrs = {
                        x: e,
                        y: i,
                        "text-anchor": "middle",
                        text: r,
                        "font-family": B._availableAttrs["font-family"],
                        "font-size": B._availableAttrs["font-size"],
                        stroke: "none",
                        fill: "#000",
                      }),
                      (n.type = "text"),
                      p(n, n.attrs),
                      n
                    );
                  }),
                  (B._engine.setSize = function (t, e) {
                    return (
                      (this.width = t || this.width),
                      (this.height = e || this.height),
                      this.canvas.setAttribute("width", this.width),
                      this.canvas.setAttribute("height", this.height),
                      this._viewBox &&
                        this.setViewBox.apply(this, this._viewBox),
                      this
                    );
                  }),
                  (B._engine.create = function () {
                    var t,
                      e,
                      i,
                      r,
                      n,
                      s,
                      o = B._getContainer.apply(0, arguments),
                      a = o && o.container;
                    if (a)
                      return (
                        (r = o.x),
                        (n = o.y),
                        (s = o.width),
                        (o = o.height),
                        (t = j("svg")),
                        (e = "overflow:hidden;"),
                        (r = r || 0),
                        (n = n || 0),
                        j(t, {
                          height: (o = o || 342),
                          version: 1.1,
                          width: (s = s || 512),
                          xmlns: "http://www.w3.org/2000/svg",
                          "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        }),
                        1 == a
                          ? ((t.style.cssText =
                              e +
                              "position:absolute;left:" +
                              r +
                              "px;top:" +
                              n +
                              "px"),
                            B._g.doc.body.appendChild(t),
                            (i = 1))
                          : ((t.style.cssText = e + "position:relative"),
                            a.firstChild
                              ? a.insertBefore(t, a.firstChild)
                              : a.appendChild(t)),
                        ((a = new B._Paper()).width = s),
                        (a.height = o),
                        (a.canvas = t),
                        a.clear(),
                        (a._left = a._top = 0),
                        i && (a.renderfix = function () {}),
                        a.renderfix(),
                        a
                      );
                    throw new Error("SVG container not found.");
                  }),
                  (B._engine.setViewBox = function (t, e, i, r, n) {
                    f("raphael.setViewBox", this, this._viewBox, [
                      t,
                      e,
                      i,
                      r,
                      n,
                    ]);
                    var s,
                      o = this.getSize(),
                      a = I(i / o.width, r / o.height),
                      h = this.top,
                      o = n ? "xMidYMid meet" : "xMinYMin",
                      l =
                        null == t
                          ? (this._vbSize && (a = 1),
                            delete this._vbSize,
                            "0 0 " + this.width + " " + this.height)
                          : ((this._vbSize = a),
                            t + " " + e + " " + i + " " + r);
                    for (
                      j(this.canvas, { viewBox: l, preserveAspectRatio: o });
                      a && h;

                    )
                      (s =
                        "stroke-width" in h.attrs
                          ? h.attrs["stroke-width"]
                          : 1),
                        h.attr({ "stroke-width": s }),
                        (h._.dirty = 1),
                        (h._.dirtyT = 1),
                        (h = h.prev);
                    return (this._viewBox = [t, e, i, r, !!n]), this;
                  }),
                  (B.prototype.renderfix = function () {
                    var e = this.canvas,
                      t = e.style;
                    try {
                      i = e.getScreenCTM() || e.createSVGMatrix();
                    } catch (t) {
                      i = e.createSVGMatrix();
                    }
                    var e = -i.e % 1,
                      i = -i.f % 1;
                    (e || i) &&
                      (e &&
                        ((this._left = (this._left + e) % 1),
                        (t.left = this._left + "px")),
                      i) &&
                      ((this._top = (this._top + i) % 1),
                      (t.top = this._top + "px"));
                  }),
                  (B.prototype.clear = function () {
                    B.eve("raphael.clear", this);
                    for (var t = this.canvas; t.firstChild; )
                      t.removeChild(t.firstChild);
                    (this.bottom = this.top = null),
                      (this.desc = j("desc")).appendChild(
                        B._g.doc.createTextNode(
                          "Created with Raphaël " + B.version
                        )
                      ),
                      t.appendChild(this.desc),
                      t.appendChild((this.defs = j("defs")));
                  }),
                  (B.prototype.remove = function () {
                    for (var t in (f("raphael.remove", this),
                    this.canvas.parentNode &&
                      this.canvas.parentNode.removeChild(this.canvas),
                    this))
                      this[t] =
                        "function" == typeof this[t]
                          ? B._removedFactory(t)
                          : null;
                  }),
                  B.st);
              for (t in e)
                e[P](t) &&
                  !i[P](t) &&
                  (i[t] = (function (i) {
                    return function () {
                      var e = arguments;
                      return this.forEach(function (t) {
                        t[i].apply(t, e);
                      });
                    };
                  })(t));
            }
          }.apply(e, i));
        void 0 !== e && (t.exports = e);
      },
      "./dev/raphael.vml.js": function (t, e, i) {
        (i = [i("./dev/raphael.core.js")]),
          (e = function (g) {
            if (!g || g.vml) {
              function x(t, e, i) {
                var r = g.matrix();
                return r.rotate(-t, 0.5, 0.5), { dx: r.x(e, i), dy: r.y(e, i) };
              }
              function y(t, e, i, r, n, s) {
                var o,
                  a = t._,
                  h = t.matrix,
                  l = a.fillpos,
                  t = t.node,
                  u = t.style,
                  c = 1,
                  p = "",
                  f = I / e,
                  d = I / i;
                (u.visibility = "hidden"),
                  e &&
                    i &&
                    ((t.coordsize = B(f) + T + B(d)),
                    (u.rotation = s * (e * i < 0 ? -1 : 1)),
                    s && ((r = (o = x(s, r, n)).dx), (n = o.dy)),
                    e < 0 && (p += "x"),
                    i < 0 && (p += " y") && (c = -1),
                    (u.flip = p),
                    (t.coordorigin = r * -f + T + n * -d),
                    (l || a.fillsize) &&
                      ((p = (p = t.getElementsByTagName(L)) && p[0]),
                      t.removeChild(p),
                      l &&
                        ((o = x(s, h.x(l[0], l[1]), h.y(l[0], l[1]))),
                        (p.position = o.dx * c + T + o.dy * c)),
                      a.fillsize &&
                        (p.size =
                          a.fillsize[0] * B(e) + T + a.fillsize[1] * B(i)),
                      t.appendChild(p)),
                    (u.visibility = "visible"));
              }
              function m(t, e, i) {
                for (
                  var r = w(e).toLowerCase().split("-"),
                    e = i ? "end" : "start",
                    n = r.length,
                    s = "classic",
                    o = "medium",
                    a = "medium";
                  n--;

                )
                  switch (r[n]) {
                    case "block":
                    case "classic":
                    case "oval":
                    case "diamond":
                    case "open":
                    case "none":
                      s = r[n];
                      break;
                    case "wide":
                    case "narrow":
                      a = r[n];
                      break;
                    case "long":
                    case "short":
                      o = r[n];
                  }
                i = t.node.getElementsByTagName("stroke")[0];
                (i[e + "arrow"] = s),
                  (i[e + "arrowlength"] = o),
                  (i[e + "arrowwidth"] = a);
              }
              function p(t, e) {
                t.attrs = t.attrs || {};
                var i,
                  r = t.node,
                  n = t.attrs,
                  s = r.style,
                  o =
                    D[t.type] &&
                    (e.x != n.x ||
                      e.y != n.y ||
                      e.width != n.width ||
                      e.height != n.height ||
                      e.cx != n.cx ||
                      e.cy != n.cy ||
                      e.rx != n.rx ||
                      e.ry != n.ry ||
                      e.r != n.r),
                  a =
                    R[t.type] &&
                    (n.cx != e.cx ||
                      n.cy != e.cy ||
                      n.r != e.r ||
                      n.rx != e.rx ||
                      n.ry != e.ry),
                  h = t;
                for (i in e) e[b](i) && (n[i] = e[i]);
                if (
                  (o && ((n.path = g._getPath[t.type](t)), (t._.dirty = 1)),
                  e.href && (r.href = e.href),
                  e.title && (r.title = e.title),
                  e.target && (r.target = e.target),
                  e.cursor && (s.cursor = e.cursor),
                  "blur" in e && t.blur(e.blur),
                  ((e.path && "path" == t.type) || o) &&
                    ((r.path = (function (t) {
                      var e = /[ahqstv]/gi,
                        i = g._pathToAbsolute;
                      if (
                        (w(t).match(e) && (i = g._path2curve),
                        (e = /[clmz]/g),
                        i == g._pathToAbsolute && !w(t).match(e))
                      )
                        return (o = w(t).replace(E, function (t, e, i) {
                          var r = [],
                            n = "m" == e.toLowerCase(),
                            s = P[e];
                          return (
                            i.replace(z, function (t) {
                              n &&
                                2 == r.length &&
                                ((s += r + P["m" == e ? "l" : "L"]), (r = [])),
                                r.push(C(t * I));
                            }),
                            s + r
                          );
                        }));
                      for (
                        var r, n, s = i(t), o = [], a = 0, h = s.length;
                        a < h;
                        a++
                      ) {
                        (r = s[a]),
                          "z" == (n = s[a][0].toLowerCase()) && (n = "x");
                        for (var l = 1, u = r.length; l < u; l++)
                          n += C(r[l] * I) + (l != u - 1 ? "," : A);
                        o.push(n);
                      }
                      return o.join(T);
                    })(
                      ~w(n.path).toLowerCase().indexOf("r")
                        ? g._pathToAbsolute(n.path)
                        : n.path
                    )),
                    (t._.dirty = 1),
                    "image" == t.type) &&
                    ((t._.fillpos = [n.x, n.y]),
                    (t._.fillsize = [n.width, n.height]),
                    y(t, 1, 1, 0, 0, 0)),
                  "transform" in e && t.transform(e.transform),
                  a &&
                    ((o = +n.cx),
                    (a = +n.cy),
                    (l = +n.rx || +n.r || 0),
                    (c = +n.ry || +n.r || 0),
                    (r.path = g.format(
                      "ar{0},{1},{2},{3},{4},{1},{4},{1}x",
                      C((o - l) * I),
                      C((a - c) * I),
                      C((o + l) * I),
                      C((a + c) * I),
                      C(o * I)
                    )),
                    (t._.dirty = 1)),
                  "clip-rect" in e &&
                    (4 == (l = w(e["clip-rect"]).split(F)).length &&
                      ((l[2] = +l[2] + +l[0]),
                      (l[3] = +l[3] + +l[1]),
                      ((c = (a = r.clipRect || g._g.doc.createElement("div"))
                        .style).clip = g.format(
                        "rect({1}px {2}px {3}px {0}px)",
                        l
                      )),
                      r.clipRect ||
                        ((c.position = "absolute"),
                        (c.top = 0),
                        (c.left = 0),
                        (c.width = t.paper.width + "px"),
                        (c.height = t.paper.height + "px"),
                        r.parentNode.insertBefore(a, r),
                        a.appendChild(r),
                        (r.clipRect = a))),
                    e["clip-rect"] ||
                      (r.clipRect && (r.clipRect.style.clip = "auto"))),
                  t.textpath &&
                    ((o = t.textpath.style),
                    e.font && (o.font = e.font),
                    e["font-family"] &&
                      (o.fontFamily =
                        '"' +
                        e["font-family"]
                          .split(",")[0]
                          .replace(/^['"]+|['"]+$/g, A) +
                        '"'),
                    e["font-size"] && (o.fontSize = e["font-size"]),
                    e["font-weight"] && (o.fontWeight = e["font-weight"]),
                    e["font-style"]) &&
                    (o.fontStyle = e["font-style"]),
                  "arrow-start" in e && m(h, e["arrow-start"]),
                  "arrow-end" in e && m(h, e["arrow-end"], 1),
                  (null == e.opacity &&
                    null == e.fill &&
                    null == e.src &&
                    null == e.stroke &&
                    null == e["stroke-width"] &&
                    null == e["stroke-opacity"] &&
                    null == e["fill-opacity"] &&
                    null == e["stroke-dasharray"] &&
                    null == e["stroke-miterlimit"] &&
                    null == e["stroke-linejoin"] &&
                    null == e["stroke-linecap"]) ||
                    ((l = (l = r.getElementsByTagName(L)) && l[0]) ||
                      (l = v(L)),
                    "image" == t.type && e.src && (l.src = e.src),
                    e.fill && (l.on = !0),
                    (null != l.on && "none" != e.fill && null !== e.fill) ||
                      (l.on = !1),
                    l.on &&
                      e.fill &&
                      ((c = w(e.fill).match(g._ISURL))
                        ? (l.parentNode == r && r.removeChild(l),
                          (l.rotate = !0),
                          (l.src = c[1]),
                          (l.type = "tile"),
                          (a = t.getBBox(1)),
                          (l.position = a.x + T + a.y),
                          (t._.fillpos = [a.x, a.y]),
                          g._preload(c[1], function () {
                            t._.fillsize = [
                              this.offsetWidth,
                              this.offsetHeight,
                            ];
                          }))
                        : ((l.color = g.getRGB(e.fill).hex),
                          (l.src = A),
                          (l.type = "solid"),
                          g.getRGB(e.fill).error &&
                            (h.type in { circle: 1, ellipse: 1 } ||
                              "r" != w(e.fill).charAt()) &&
                            (function (t, e, i) {
                              t.attrs = t.attrs || {};
                              var r = t.attrs,
                                n = Math.pow,
                                s,
                                o,
                                a = "linear",
                                h = ".5 .5";
                              if (
                                ((t.attrs.gradient = e),
                                (e = (e = w(e).replace(
                                  g._radial_gradient,
                                  function (t, e, i) {
                                    a = "radial";
                                    if (e && i) {
                                      e = _(e);
                                      i = _(i);
                                      n(e - 0.5, 2) + n(i - 0.5, 2) > 0.25 &&
                                        (i =
                                          k.sqrt(0.25 - n(e - 0.5, 2)) *
                                            ((i > 0.5) * 2 - 1) +
                                          0.5);
                                      h = e + T + i;
                                    }
                                    return A;
                                  }
                                )).split(/\s*\-\s*/)),
                                a == "linear")
                              ) {
                                var l = e.shift();
                                l = -_(l);
                                if (isNaN(l)) return null;
                              }
                              var u = g._parseDots(e);
                              if (!u) return null;
                              if (((t = t.shape || t.node), u.length)) {
                                t.removeChild(i);
                                i.on = true;
                                i.method = "none";
                                i.color = u[0].color;
                                i.color2 = u[u.length - 1].color;
                                var c = [];
                                for (var p = 0, f = u.length; p < f; p++)
                                  u[p].offset &&
                                    c.push(u[p].offset + T + u[p].color);
                                i.colors = c.length
                                  ? c.join()
                                  : "0% " + i.color;
                                if (a == "radial") {
                                  i.type = "gradientTitle";
                                  i.focus = "100%";
                                  i.focussize = "0 0";
                                  i.focusposition = h;
                                  i.angle = 0;
                                } else {
                                  i.type = "gradient";
                                  i.angle = (270 - l) % 360;
                                }
                                t.appendChild(i);
                              }
                              return 1;
                            })(h, e.fill, l) &&
                            ((n.fill = "none"),
                            (n.gradient = e.fill),
                            (l.rotate = !1)))),
                    ("fill-opacity" in e || "opacity" in e) &&
                      ((u =
                        ((+n["fill-opacity"] + 1 || 2) - 1) *
                        ((+n.opacity + 1 || 2) - 1) *
                        ((+g.getRGB(e.fill).o + 1 || 2) - 1)),
                      (u = M(S(u, 0), 1)),
                      (l.opacity = u),
                      l.src) &&
                      (l.color = "none"),
                    r.appendChild(l),
                    (o = !1),
                    (a =
                      r.getElementsByTagName("stroke") &&
                      r.getElementsByTagName("stroke")[0]) ||
                      (o = a = v("stroke")),
                    ((e.stroke && "none" != e.stroke) ||
                      e["stroke-width"] ||
                      null != e["stroke-opacity"] ||
                      e["stroke-dasharray"] ||
                      e["stroke-miterlimit"] ||
                      e["stroke-linejoin"] ||
                      e["stroke-linecap"]) &&
                      (a.on = !0),
                    ("none" != e.stroke &&
                      null !== e.stroke &&
                      null != a.on &&
                      0 != e.stroke &&
                      0 != e["stroke-width"]) ||
                      (a.on = !1),
                    (c = g.getRGB(e.stroke)),
                    a.on && e.stroke && (a.color = c.hex),
                    (u =
                      ((+n["stroke-opacity"] + 1 || 2) - 1) *
                      ((+n.opacity + 1 || 2) - 1) *
                      ((+c.o + 1 || 2) - 1)),
                    (l = 0.75 * (_(e["stroke-width"]) || 1)),
                    (u = M(S(u, 0), 1)),
                    null == e["stroke-width"] && (l = n["stroke-width"]),
                    e["stroke-width"] && (a.weight = l),
                    l && l < 1 && (u *= l) && (a.weight = 1),
                    (a.opacity = u),
                    e["stroke-linejoin"] &&
                      (a.joinstyle = e["stroke-linejoin"] || "miter"),
                    (a.miterlimit = e["stroke-miterlimit"] || 8),
                    e["stroke-linecap"] &&
                      (a.endcap =
                        "butt" == e["stroke-linecap"]
                          ? "flat"
                          : "square" == e["stroke-linecap"]
                          ? "square"
                          : "round"),
                    "stroke-dasharray" in e &&
                      (a.dashstyle = (c = {
                        "-": "shortdash",
                        ".": "shortdot",
                        "-.": "shortdashdot",
                        "-..": "shortdashdotdot",
                        ". ": "dot",
                        "- ": "dash",
                        "--": "longdash",
                        "- .": "dashdot",
                        "--.": "longdashdot",
                        "--..": "longdashdotdot",
                      })[b](e["stroke-dasharray"])
                        ? c[e["stroke-dasharray"]]
                        : A),
                    o && r.appendChild(a)),
                  "text" == h.type)
                ) {
                  h.paper.canvas.style.display = A;
                  var l = h.paper.span,
                    u = n.font && n.font.match(/\d+(?:\.\d*)?(?=px)/),
                    s = l.style;
                  n.font && (s.font = n.font),
                    n["font-family"] && (s.fontFamily = n["font-family"]),
                    n["font-weight"] && (s.fontWeight = n["font-weight"]),
                    n["font-style"] && (s.fontStyle = n["font-style"]),
                    (u = _(n["font-size"] || (u && u[0])) || 10),
                    (s.fontSize = 100 * u + "px"),
                    h.textpath.string &&
                      (l.innerHTML = w(h.textpath.string)
                        .replace(/</g, "&#60;")
                        .replace(/&/g, "&#38;")
                        .replace(/\n/g, "<br>"));
                  for (
                    var c = l.getBoundingClientRect(),
                      p =
                        ((h.W = n.w = (c.right - c.left) / 100),
                        (h.H = n.h = (c.bottom - c.top) / 100),
                        (h.X = n.x),
                        (h.Y = n.y + h.H / 2),
                        (("x" in e) || ("y" in e)) &&
                          (h.path.v = g.format(
                            "m{0},{1}l{2},{1}",
                            C(n.x * I),
                            C(n.y * I),
                            C(n.x * I) + 1
                          )),
                        [
                          "x",
                          "y",
                          "text",
                          "font",
                          "font-family",
                          "font-weight",
                          "font-style",
                          "font-size",
                        ]),
                      f = 0,
                      d = p.length;
                    f < d;
                    f++
                  )
                    if (p[f] in e) {
                      h._.dirty = 1;
                      break;
                    }
                  switch (n["text-anchor"]) {
                    case "start":
                      (h.textpath.style["v-text-align"] = "left"),
                        (h.bbx = h.W / 2);
                      break;
                    case "end":
                      (h.textpath.style["v-text-align"] = "right"),
                        (h.bbx = -h.W / 2);
                      break;
                    default:
                      (h.textpath.style["v-text-align"] = "center"),
                        (h.bbx = 0);
                  }
                  h.textpath.style["v-text-kern"] = !0;
                }
              }
              function l(t, e) {
                ((this[0] = this.node = t).raphael = !0),
                  (this.id = g._oid++),
                  (t.raphaelid = this.id),
                  (this.X = 0),
                  (this.Y = 0),
                  (this.attrs = {}),
                  (this.paper = e),
                  (this.matrix = g.matrix()),
                  (this._ = {
                    transform: [],
                    sx: 1,
                    sy: 1,
                    dx: 0,
                    dy: 0,
                    deg: 0,
                    dirty: 1,
                    dirtyT: 1,
                  }),
                  e.bottom || (e.bottom = this),
                  (this.prev = e.top),
                  e.top && (e.top.next = this),
                  ((e.top = this).next = null);
              }
              var v,
                t,
                b = "hasOwnProperty",
                w = String,
                _ = parseFloat,
                k = Math,
                C = k.round,
                S = k.max,
                M = k.min,
                B = k.abs,
                L = "fill",
                F = /[, ]+/,
                f = g.eve,
                T = " ",
                A = "",
                P = {
                  M: "m",
                  L: "l",
                  C: "c",
                  Z: "x",
                  m: "t",
                  l: "r",
                  c: "v",
                  z: "x",
                },
                E = /([clmz]),?([^clmz]*)/gi,
                r = / progid:\S+Blur\([^\)]+\)/g,
                z = /-?[^,\s-]+/g,
                u =
                  "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",
                I = 21600,
                D = { path: 1, rect: 1, image: 1 },
                R = { circle: 1, ellipse: 1 },
                e =
                  ((g.toString = function () {
                    return (
                      "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " +
                      this.version
                    );
                  }),
                  g.el),
                i =
                  (((l.prototype = e).constructor = l),
                  (e.transform = function (t) {
                    var e, i, r, n, s, o, a;
                    return null == t
                      ? this._.transform
                      : ((r = (i = this.paper._viewBoxShift)
                          ? "s" + [i.scale, i.scale] + "-1-1t" + [i.dx, i.dy]
                          : A),
                        i &&
                          (e = t =
                            w(t).replace(
                              /\.{3}|\u2026/g,
                              this._.transform || A
                            )),
                        g._extractTransform(this, r + t),
                        (i = this.matrix.clone()),
                        (r = this.skew),
                        (t = this.node),
                        (a = ~w(this.attrs.fill).indexOf("-")),
                        (n = !w(this.attrs.fill).indexOf("url(")),
                        i.translate(1, 1),
                        n || a || "image" == this.type
                          ? ((r.matrix = "1 0 0 1"),
                            (r.offset = "0 0"),
                            (n = i.split()),
                            (a && n.noRotation) || !n.isSimple
                              ? ((t.style.filter = i.toFilter()),
                                (a = this.getBBox()),
                                (s = this.getBBox(1)),
                                (o = a.x - s.x),
                                (a = a.y - s.y),
                                (t.coordorigin = o * -I + T + a * -I),
                                y(this, 1, 1, o, a, 0))
                              : ((t.style.filter = A),
                                y(
                                  this,
                                  n.scalex,
                                  n.scaley,
                                  n.dx,
                                  n.dy,
                                  n.rotate
                                )))
                          : ((t.style.filter = A),
                            (r.matrix = w(i)),
                            (r.offset = i.offset())),
                        null !== e &&
                          ((this._.transform = e),
                          g._extractTransform(this, e)),
                        this);
                  }),
                  (e.rotate = function (t, e, i) {
                    var r;
                    return this.removed
                      ? this
                      : null != t
                      ? ((t = w(t).split(F)).length - 1 &&
                          ((e = _(t[1])), (i = _(t[2]))),
                        (t = _(t[0])),
                        (null != (e = null == i ? i : e) && null != i) ||
                          ((e = (r = this.getBBox(1)).x + r.width / 2),
                          (i = r.y + r.height / 2)),
                        (this._.dirtyT = 1),
                        this.transform(
                          this._.transform.concat([["r", t, e, i]])
                        ),
                        this)
                      : void 0;
                  }),
                  (e.translate = function (t, e) {
                    return (
                      this.removed ||
                        ((t = w(t).split(F)).length - 1 && (e = _(t[1])),
                        (t = _(t[0]) || 0),
                        (e = +e || 0),
                        this._.bbox &&
                          ((this._.bbox.x += t), (this._.bbox.y += e)),
                        this.transform(this._.transform.concat([["t", t, e]]))),
                      this
                    );
                  }),
                  (e.scale = function (t, e, i, r) {
                    var n;
                    return (
                      this.removed ||
                        ((t = w(t).split(F)).length - 1 &&
                          ((e = _(t[1])),
                          (i = _(t[2])),
                          (r = _(t[3])),
                          isNaN(i) && (i = null),
                          isNaN(r)) &&
                          (r = null),
                        (t = _(t[0])),
                        null == e && (e = t),
                        (null != (i = null == r ? r : i) && null != r) ||
                          (n = this.getBBox(1)),
                        (i = null == i ? n.x + n.width / 2 : i),
                        (r = null == r ? n.y + n.height / 2 : r),
                        this.transform(
                          this._.transform.concat([["s", t, e, i, r]])
                        ),
                        (this._.dirtyT = 1)),
                      this
                    );
                  }),
                  (e.hide = function () {
                    return (
                      this.removed || (this.node.style.display = "none"), this
                    );
                  }),
                  (e.show = function () {
                    return this.removed || (this.node.style.display = A), this;
                  }),
                  (e.auxGetBBox = g.el.getBBox),
                  (e.getBBox = function () {
                    var t,
                      e,
                      i = this.auxGetBBox();
                    return this.paper && this.paper._viewBoxShift
                      ? ((e = 1 / this.paper._viewBoxShift.scale),
                        ((t = {}).x = i.x - this.paper._viewBoxShift.dx),
                        (t.x *= e),
                        (t.y = i.y - this.paper._viewBoxShift.dy),
                        (t.y *= e),
                        (t.width = i.width * e),
                        (t.height = i.height * e),
                        (t.x2 = t.x + t.width),
                        (t.y2 = t.y + t.height),
                        t)
                      : i;
                  }),
                  (e._getBBox = function () {
                    return this.removed
                      ? {}
                      : {
                          x: this.X + (this.bbx || 0) - this.W / 2,
                          y: this.Y - this.H,
                          width: this.W,
                          height: this.H,
                        };
                  }),
                  (e.remove = function () {
                    if (!this.removed && this.node.parentNode) {
                      for (var t in (this.paper.__set__ &&
                        this.paper.__set__.exclude(this),
                      g.eve.unbind("raphael.*.*." + this.id),
                      g._tear(this, this.paper),
                      this.node.parentNode.removeChild(this.node),
                      this.shape &&
                        this.shape.parentNode.removeChild(this.shape),
                      this))
                        this[t] =
                          "function" == typeof this[t]
                            ? g._removedFactory(t)
                            : null;
                      this.removed = !0;
                    }
                  }),
                  (e.attr = function (t, e) {
                    if (!this.removed) {
                      if (null == t) {
                        var i,
                          r = {};
                        for (i in this.attrs)
                          this.attrs[b](i) && (r[i] = this.attrs[i]);
                        return (
                          r.gradient &&
                            "none" == r.fill &&
                            (r.fill = r.gradient) &&
                            delete r.gradient,
                          (r.transform = this._.transform),
                          r
                        );
                      }
                      if (null == e && g.is(t, "string")) {
                        if (
                          t == L &&
                          "none" == this.attrs.fill &&
                          this.attrs.gradient
                        )
                          return this.attrs.gradient;
                        for (
                          var n = t.split(F), s = {}, o = 0, a = n.length;
                          o < a;
                          o++
                        )
                          (t = n[o]) in this.attrs
                            ? (s[t] = this.attrs[t])
                            : g.is(this.paper.customAttributes[t], "function")
                            ? (s[t] = this.paper.customAttributes[t].def)
                            : (s[t] = g._availableAttrs[t]);
                        return a - 1 ? s : s[n[0]];
                      }
                      if (this.attrs && null == e && g.is(t, "array")) {
                        for (s = {}, o = 0, a = t.length; o < a; o++)
                          s[t[o]] = this.attr(t[o]);
                        return s;
                      }
                      var h, l;
                      for (l in (null != e && ((h = {})[t] = e),
                      (h = null == e && g.is(t, "object") ? t : h)))
                        f("raphael.attr." + l + "." + this.id, this, h[l]);
                      if (h) {
                        for (l in this.paper.customAttributes)
                          if (
                            this.paper.customAttributes[b](l) &&
                            h[b](l) &&
                            g.is(this.paper.customAttributes[l], "function")
                          ) {
                            var u,
                              c = this.paper.customAttributes[l].apply(
                                this,
                                [].concat(h[l])
                              );
                            for (u in ((this.attrs[l] = h[l]), c))
                              c[b](u) && (h[u] = c[u]);
                          }
                        h.text &&
                          "text" == this.type &&
                          (this.textpath.string = h.text),
                          p(this, h);
                      }
                    }
                    return this;
                  }),
                  (e.toFront = function () {
                    return (
                      this.removed ||
                        this.node.parentNode.appendChild(this.node),
                      this.paper &&
                        this.paper.top != this &&
                        g._tofront(this, this.paper),
                      this
                    );
                  }),
                  (e.toBack = function () {
                    return (
                      this.removed ||
                        (this.node.parentNode.firstChild != this.node &&
                          (this.node.parentNode.insertBefore(
                            this.node,
                            this.node.parentNode.firstChild
                          ),
                          g._toback(this, this.paper))),
                      this
                    );
                  }),
                  (e.insertAfter = function (t) {
                    return (
                      this.removed ||
                        ((t =
                          t.constructor == g.st.constructor
                            ? t[t.length - 1]
                            : t).node.nextSibling
                          ? t.node.parentNode.insertBefore(
                              this.node,
                              t.node.nextSibling
                            )
                          : t.node.parentNode.appendChild(this.node),
                        g._insertafter(this, t, this.paper)),
                      this
                    );
                  }),
                  (e.insertBefore = function (t) {
                    return (
                      this.removed ||
                        ((t =
                          t.constructor == g.st.constructor
                            ? t[0]
                            : t).node.parentNode.insertBefore(
                          this.node,
                          t.node
                        ),
                        g._insertbefore(this, t, this.paper)),
                      this
                    );
                  }),
                  (e.blur = function (t) {
                    var e = this.node.runtimeStyle,
                      i = (i = e.filter).replace(r, A);
                    return (
                      0 != +t
                        ? ((this.attrs.blur = t),
                          (e.filter =
                            i +
                            T +
                            " progid:DXImageTransform.Microsoft.Blur(pixelradius=" +
                            (+t || 1.5) +
                            ")"),
                          (e.margin = g.format(
                            "-{0}px 0 0 -{0}px",
                            C(+t || 1.5)
                          )))
                        : ((e.filter = i),
                          (e.margin = 0),
                          delete this.attrs.blur),
                      this
                    );
                  }),
                  (g._engine.path = function (t, e) {
                    var i = v("shape"),
                      r =
                        ((i.style.cssText = u),
                        (i.coordsize = I + T + I),
                        (i.coordorigin = e.coordorigin),
                        new l(i, e)),
                      n = { fill: "none", stroke: "#000" },
                      t =
                        (t && (n.path = t),
                        (r.type = "path"),
                        (r.path = []),
                        (r.Path = A),
                        p(r, n),
                        e.canvas && e.canvas.appendChild(i),
                        v("skew"));
                    return (
                      (t.on = !0),
                      i.appendChild(t),
                      (r.skew = t),
                      r.transform(A),
                      r
                    );
                  }),
                  (g._engine.rect = function (t, e, i, r, n, s) {
                    var o = g._rectPath(e, i, r, n, s),
                      t = t.path(o),
                      a = t.attrs;
                    return (
                      (t.X = a.x = e),
                      (t.Y = a.y = i),
                      (t.W = a.width = r),
                      (t.H = a.height = n),
                      (a.r = s),
                      (a.path = o),
                      (t.type = "rect"),
                      t
                    );
                  }),
                  (g._engine.ellipse = function (t, e, i, r, n) {
                    t = t.path();
                    t.attrs;
                    return (
                      (t.X = e - r),
                      (t.Y = i - n),
                      (t.W = 2 * r),
                      (t.H = 2 * n),
                      (t.type = "ellipse"),
                      p(t, { cx: e, cy: i, rx: r, ry: n }),
                      t
                    );
                  }),
                  (g._engine.circle = function (t, e, i, r) {
                    t = t.path();
                    t.attrs;
                    return (
                      (t.X = e - r),
                      (t.Y = i - r),
                      (t.W = t.H = 2 * r),
                      (t.type = "circle"),
                      p(t, { cx: e, cy: i, r: r }),
                      t
                    );
                  }),
                  (g._engine.image = function (t, e, i, r, n, s) {
                    var o = g._rectPath(i, r, n, s),
                      t = t.path(o).attr({ stroke: "none" }),
                      a = t.attrs,
                      h = t.node,
                      l = h.getElementsByTagName(L)[0];
                    return (
                      (a.src = e),
                      (t.X = a.x = i),
                      (t.Y = a.y = r),
                      (t.W = a.width = n),
                      (t.H = a.height = s),
                      (a.path = o),
                      (t.type = "image"),
                      l.parentNode == h && h.removeChild(l),
                      (l.rotate = !0),
                      (l.src = e),
                      (l.type = "tile"),
                      (t._.fillpos = [i, r]),
                      (t._.fillsize = [n, s]),
                      h.appendChild(l),
                      y(t, 1, 1, 0, 0, 0),
                      t
                    );
                  }),
                  (g._engine.text = function (t, e, i, r) {
                    var n = v("shape"),
                      s = v("path"),
                      o = v("textpath"),
                      a =
                        ((i = i || 0),
                        (r = r || ""),
                        (s.v = g.format(
                          "m{0},{1}l{2},{1}",
                          C((e = e || 0) * I),
                          C(i * I),
                          C(e * I) + 1
                        )),
                        (s.textpathok = !0),
                        (o.string = w(r)),
                        (o.on = !0),
                        (n.style.cssText = u),
                        (n.coordsize = I + T + I),
                        (n.coordorigin = "0 0"),
                        new l(n, t)),
                      h = {
                        fill: "#000",
                        stroke: "none",
                        font: g._availableAttrs.font,
                        text: r,
                      },
                      r =
                        ((a.shape = n),
                        (a.path = s),
                        (a.textpath = o),
                        (a.type = "text"),
                        (a.attrs.text = w(r)),
                        (a.attrs.x = e),
                        (a.attrs.y = i),
                        (a.attrs.w = 1),
                        (a.attrs.h = 1),
                        p(a, h),
                        n.appendChild(o),
                        n.appendChild(s),
                        t.canvas.appendChild(n),
                        v("skew"));
                    return (
                      (r.on = !0),
                      n.appendChild(r),
                      (a.skew = r),
                      a.transform(A),
                      a
                    );
                  }),
                  (g._engine.setSize = function (t, e) {
                    var i = this.canvas.style;
                    return (
                      (this.width = t) == +t && (t += "px"),
                      (this.height = e) == +e && (e += "px"),
                      (i.width = t),
                      (i.height = e),
                      (i.clip = "rect(0 " + t + " " + e + " 0)"),
                      this._viewBox &&
                        g._engine.setViewBox.apply(this, this._viewBox),
                      this
                    );
                  }),
                  (g._engine.setViewBox = function (t, e, i, r, n) {
                    g.eve("raphael.setViewBox", this, this._viewBox, [
                      t,
                      e,
                      i,
                      r,
                      n,
                    ]);
                    var s,
                      o = this.getSize(),
                      a = o.width,
                      h = o.height;
                    return (
                      n &&
                        (i * (s = h / r) < a && (t -= (a - i * s) / 2 / s),
                        r * (s = a / i) < h) &&
                        (e -= (h - r * s) / 2 / s),
                      (this._viewBox = [t, e, i, r, !!n]),
                      (this._viewBoxShift = { dx: -t, dy: -e, scale: o }),
                      this.forEach(function (t) {
                        t.transform("...");
                      }),
                      this
                    );
                  }),
                  (g._engine.initWin = function (t) {
                    var e = t.document;
                    (e.styleSheets.length < 31
                      ? e.createStyleSheet()
                      : e.styleSheets[0]
                    ).addRule(".rvml", "behavior:url(#default#VML)");
                    try {
                      e.namespaces.rvml ||
                        e.namespaces.add(
                          "rvml",
                          "urn:schemas-microsoft-com:vml"
                        ),
                        (v = function (t) {
                          return e.createElement(
                            "<rvml:" + t + ' class="rvml">'
                          );
                        });
                    } catch (t) {
                      v = function (t) {
                        return e.createElement(
                          "<" +
                            t +
                            ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">'
                        );
                      };
                    }
                  }),
                  g._engine.initWin(g._g.win),
                  (g._engine.create = function () {
                    var t,
                      e,
                      i,
                      r = g._getContainer.apply(0, arguments),
                      n = r.container,
                      s = r.height,
                      o = r.width,
                      a = r.x,
                      r = r.y;
                    if (n)
                      return (
                        (i = (e = (t = new g._Paper()).canvas =
                          g._g.doc.createElement("div")).style),
                        (a = a || 0),
                        (r = r || 0),
                        (s = s || 342),
                        (t.width = o = o || 512) == +o && (o += "px"),
                        (t.height = s) == +s && (s += "px"),
                        (t.coordsize = 1e3 * I + T + 1e3 * I),
                        (t.coordorigin = "0 0"),
                        (t.span = g._g.doc.createElement("span")),
                        (t.span.style.cssText =
                          "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;"),
                        e.appendChild(t.span),
                        (i.cssText = g.format(
                          "top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",
                          o,
                          s
                        )),
                        1 == n
                          ? (g._g.doc.body.appendChild(e),
                            (i.left = a + "px"),
                            (i.top = r + "px"),
                            (i.position = "absolute"))
                          : n.firstChild
                          ? n.insertBefore(e, n.firstChild)
                          : n.appendChild(e),
                        (t.renderfix = function () {}),
                        t
                      );
                    throw new Error("VML container not found.");
                  }),
                  (g.prototype.clear = function () {
                    g.eve("raphael.clear", this),
                      (this.canvas.innerHTML = A),
                      (this.span = g._g.doc.createElement("span")),
                      (this.span.style.cssText =
                        "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;"),
                      this.canvas.appendChild(this.span),
                      (this.bottom = this.top = null);
                  }),
                  (g.prototype.remove = function () {
                    for (var t in (g.eve("raphael.remove", this),
                    this.canvas.parentNode.removeChild(this.canvas),
                    this))
                      this[t] =
                        "function" == typeof this[t]
                          ? g._removedFactory(t)
                          : null;
                    return !0;
                  }),
                  g.st);
              for (t in e)
                e[b](t) &&
                  !i[b](t) &&
                  (i[t] = (function (i) {
                    return function () {
                      var e = arguments;
                      return this.forEach(function (t) {
                        t[i].apply(t, e);
                      });
                    };
                  })(t));
            }
          }.apply(e, i));
        void 0 !== e && (t.exports = e);
      },
      "./node_modules/eve-raphael/eve.js": function (t, e, i) {
        var f, d, p, g, x, y, r, m, v;
        function b(t, e) {
          return t - e;
        }
        function w() {
          for (var t = 0, e = this.length; t < e; t++)
            if (void 0 !== this[t]) return this[t];
        }
        function _() {
          for (var t = this.length; --t; )
            if (void 0 !== this[t]) return this[t];
        }
        function k(t, e) {
          var i,
            r = d,
            n = Array.prototype.slice.call(arguments, 2),
            s = k.listeners(t),
            o = 0,
            a = [],
            h = {},
            l = [],
            u = f;
          (l.firstDefined = w), (l.lastDefined = _), (f = t);
          for (var c = (d = 0), p = s.length; c < p; c++)
            "zIndex" in s[c] &&
              (a.push(s[c].zIndex), s[c].zIndex < 0) &&
              (h[s[c].zIndex] = s[c]);
          for (a.sort(b); a[o] < 0; )
            if (((i = h[a[o++]]), l.push(i.apply(e, n)), d)) return (d = r), l;
          for (c = 0; c < p; c++)
            if ("zIndex" in (i = s[c]))
              if (i.zIndex == a[o]) {
                if ((l.push(i.apply(e, n)), d)) break;
                do {
                  if (((i = h[a[++o]]) && l.push(i.apply(e, n)), d)) break;
                } while (i);
              } else h[i.zIndex] = i;
            else if ((l.push(i.apply(e, n)), d)) break;
          return (d = r), (f = u), l;
        }
        (p = "hasOwnProperty"),
          (g = /[\.\/]/),
          (x = /\s*,\s*/),
          (y = { n: {} }),
          (r = Object.prototype.toString),
          (m = String),
          (v =
            Array.isArray ||
            function (t) {
              return t instanceof Array || "[object Array]" == r.call(t);
            }),
          (k._events = y),
          (k.listeners = function (t) {
            for (
              var e,
                i,
                r,
                n,
                s,
                o,
                a,
                h = v(t) ? t : t.split(g),
                l = [y],
                u = [],
                c = 0,
                p = h.length;
              c < p;
              c++
            ) {
              for (a = [], s = 0, o = l.length; s < o; s++)
                for (r = [(e = l[s].n)[h[c]], e["*"]], n = 2; n--; )
                  (i = r[n]) && (a.push(i), (u = u.concat(i.f || [])));
              l = a;
            }
            return u;
          }),
          (k.separator = function (t) {
            g = t
              ? ((t =
                  "[" + (t = m(t).replace(/(?=[\.\^\]\[\-])/g, "\\")) + "]"),
                new RegExp(t))
              : /[\.\/]/;
          }),
          (k.on = function (t, e) {
            if ("function" != typeof e) return function () {};
            for (
              var i = v(t) ? (v(t[0]) ? t : [t]) : m(t).split(x),
                r = 0,
                n = i.length;
              r < n;
              r++
            ) {
              u = l = s = h = a = void 0;
              for (
                var s,
                  o = i[r],
                  a = v(o) ? o : m(o).split(g),
                  h = y,
                  l = 0,
                  u = a.length;
                l < u;
                l++
              )
                h =
                  ((h = h.n).hasOwnProperty(a[l]) && h[a[l]]) ||
                  (h[a[l]] = { n: {} });
              for (h.f = h.f || [], l = 0, u = h.f.length; l < u; l++)
                if (h.f[l] == e) {
                  s = !0;
                  break;
                }
              s || h.f.push(e);
            }
            return function (t) {
              +t == +t && (e.zIndex = +t);
            };
          }),
          (k.f = function (t) {
            var e = [].slice.call(arguments, 1);
            return function () {
              k.apply(
                null,
                [t, null].concat(e).concat([].slice.call(arguments, 0))
              );
            };
          }),
          (k.stop = function () {
            d = 1;
          }),
          (k.nt = function (t) {
            var e = v(f) ? f.join(".") : f;
            return t
              ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e)
              : e;
          }),
          (k.nts = function () {
            return v(f) ? f : f.split(g);
          }),
          (k.off = k.unbind =
            function (t, e) {
              if (t)
                if (1 < (a = v(t) ? (v(t[0]) ? t : [t]) : m(t).split(x)).length)
                  for (var i = 0, r = a.length; i < r; i++) k.off(a[i], e);
                else {
                  var n,
                    s,
                    o,
                    a = v(t) ? t : m(t).split(g),
                    h = [y];
                  for (i = 0, r = a.length; i < r; i++)
                    for (u = 0; u < h.length; u += o.length - 2) {
                      if (((o = [u, 1]), (n = h[u].n), "*" != a[i]))
                        n[a[i]] && o.push(n[a[i]]);
                      else for (s in n) n[p](s) && o.push(n[s]);
                      h.splice.apply(h, o);
                    }
                  for (i = 0, r = h.length; i < r; i++)
                    for (n = h[i]; n.n; ) {
                      if (e) {
                        if (n.f) {
                          for (u = 0, c = n.f.length; u < c; u++)
                            if (n.f[u] == e) {
                              n.f.splice(u, 1);
                              break;
                            }
                          n.f.length || delete n.f;
                        }
                        for (s in n.n)
                          if (n.n[p](s) && n.n[s].f) {
                            for (
                              var l = n.n[s].f, u = 0, c = l.length;
                              u < c;
                              u++
                            )
                              if (l[u] == e) {
                                l.splice(u, 1);
                                break;
                              }
                            l.length || delete n.n[s].f;
                          }
                      } else
                        for (s in (delete n.f, n.n))
                          n.n[p](s) && n.n[s].f && delete n.n[s].f;
                      n = n.n;
                    }
                }
              else k._events = y = { n: {} };
            }),
          (k.once = function (t, e) {
            function i() {
              return k.off(t, i), e.apply(this, arguments);
            }
            return k.on(t, i);
          }),
          (k.version = "0.5.0"),
          (k.toString = function () {
            return "You are running Eve 0.5.0";
          }),
          t.exports
            ? (t.exports = k)
            : void 0 !==
                (e = function () {
                  return k;
                }.apply(e, [])) && (t.exports = e);
      },
    }),
    (r = {}),
    (n.m = i),
    (n.c = r),
    (n.d = function (t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            i,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return i;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = "./dev/raphael.amd.js"))
  );
  function n(t) {
    var e;
    return (
      r[t] ||
      ((e = r[t] = { i: t, l: !1, exports: {} }),
      i[t].call(e.exports, e, e.exports, n),
      (e.l = !0),
      e)
    ).exports;
  }
  var i, r;
}),
  function () {
    function u(t, e) {
      return function () {
        return t.apply(e, arguments);
      };
    }
    function t(t, e) {
      for (var i in e) n.call(e, i) && (t[i] = e[i]);
      function r() {
        this.constructor = t;
      }
      (r.prototype = e.prototype),
        (t.prototype = new r()),
        (t.__super__ = e.prototype);
    }
    var d,
      k,
      e,
      i,
      a = [].slice,
      n = {}.hasOwnProperty,
      h =
        [].indexOf ||
        function (t) {
          for (var e = 0, i = this.length; e < i; e++)
            if (e in this && this[e] === t) return e;
          return -1;
        };
    function r() {}
    function s(t) {
      this.resizeHandler = u(this.resizeHandler, this);
      var s = this;
      if (
        ("string" == typeof t.element
          ? (this.el = d(document.getElementById(t.element)))
          : (this.el = d(t.element)),
        null == this.el || 0 === this.el.length)
      )
        throw new Error("Graph container element not found");
      "static" === this.el.css("position") &&
        this.el.css("position", "relative"),
        (this.options = d.extend(
          {},
          this.gridDefaults,
          this.defaults || {},
          t
        )),
        "string" == typeof this.options.units &&
          (this.options.postUnits = t.units),
        (this.raphael = new Raphael(this.el[0])),
        (this.elementWidth = null),
        (this.elementHeight = null),
        (this.dirty = !1),
        (this.selectFrom = null),
        this.init && this.init(),
        this.setData(this.options.data),
        this.el.bind("mousemove", function (t) {
          var e,
            i,
            r = s.el.offset(),
            n = t.pageX - r.left;
          return s.selectFrom
            ? ((e = s.data[s.hitTest(Math.min(n, s.selectFrom))]._x),
              (i = s.data[s.hitTest(Math.max(n, s.selectFrom))]._x),
              s.selectionRect.attr({ x: e, width: i - e }))
            : s.fire("hovermove", n, t.pageY - r.top);
        }),
        this.el.bind("mouseleave", function (t) {
          return (
            s.selectFrom && (s.selectionRect.hide(), (s.selectFrom = null)),
            s.fire("hoverout")
          );
        }),
        this.el.bind("touchstart touchmove touchend", function (t) {
          var t =
              t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
            e = s.el.offset();
          return s.fire("hovermove", t.pageX - e.left, t.pageY - e.top);
        }),
        this.el.bind("click", function (t) {
          var e = s.el.offset();
          return s.fire("gridclick", t.pageX - e.left, t.pageY - e.top);
        }),
        this.options.rangeSelect &&
          ((this.selectionRect = this.raphael
            .rect(0, 0, 0, this.el.innerHeight())
            .attr({ fill: this.options.rangeSelectColor, stroke: !1 })
            .toBack()
            .hide()),
          this.el.bind("mousedown", function (t) {
            var e = s.el.offset();
            return s.startRange(t.pageX - e.left);
          }),
          this.el.bind("mouseup", function (t) {
            var e = s.el.offset();
            return (
              s.endRange(t.pageX - e.left),
              s.fire("hovermove", t.pageX - e.left, t.pageY - e.top)
            );
          })),
        this.options.resize &&
          d(window).bind("resize", function (t) {
            return (
              null != s.timeoutId && window.clearTimeout(s.timeoutId),
              (s.timeoutId = window.setTimeout(s.resizeHandler, 100))
            );
          }),
        this.el.css("-webkit-tap-highlight-color", "rgba(0,0,0,0)"),
        this.postInit && this.postInit();
    }
    function o(t) {
      (this.options = d.extend({}, k.Hover.defaults, (t = null == t ? {} : t))),
        (this.el = d("<div class='" + this.options.class + "'></div>")),
        this.el.hide(),
        this.options.parent.append(this.el);
    }
    function l(t) {
      if (
        ((this.hilight = u(this.hilight, this)),
        (this.onHoverOut = u(this.onHoverOut, this)),
        (this.onHoverMove = u(this.onHoverMove, this)),
        (this.onGridClick = u(this.onGridClick, this)),
        !(this instanceof k.Line))
      )
        return new k.Line(t);
      l.__super__.constructor.call(this, t);
    }
    function c(t) {
      if (!(this instanceof k.Area)) return new k.Area(t);
      (t = d.extend({}, e, t)),
        (this.cumulative = !t.behaveLikeLine),
        "auto" === t.fillOpacity &&
          (t.fillOpacity = t.behaveLikeLine ? 0.8 : 1),
        c.__super__.constructor.call(this, t);
    }
    function p(t) {
      if (
        ((this.onHoverOut = u(this.onHoverOut, this)),
        (this.onHoverMove = u(this.onHoverMove, this)),
        (this.onGridClick = u(this.onGridClick, this)),
        !(this instanceof k.Bar))
      )
        return new k.Bar(t);
      p.__super__.constructor.call(this, d.extend({}, t, { parseTime: !1 }));
    }
    function f(t) {
      (this.resizeHandler = u(this.resizeHandler, this)),
        (this.select = u(this.select, this)),
        (this.click = u(this.click, this));
      var e = this;
      if (!(this instanceof k.Donut)) return new k.Donut(t);
      if (
        ((this.options = d.extend({}, this.defaults, t)),
        "string" == typeof t.element
          ? (this.el = d(document.getElementById(t.element)))
          : (this.el = d(t.element)),
        null === this.el || 0 === this.el.length)
      )
        throw new Error("Graph placeholder not found.");
      void 0 !== t.data &&
        0 !== t.data.length &&
        ((this.raphael = new Raphael(this.el[0])),
        this.options.resize &&
          d(window).bind("resize", function (t) {
            return (
              null != e.timeoutId && window.clearTimeout(e.timeoutId),
              (e.timeoutId = window.setTimeout(e.resizeHandler, 100))
            );
          }),
        this.setData(t.data));
    }
    function g(t, e, i, r, n, s, o, a, h, l) {
      (this.cx = t),
        (this.cy = e),
        (this.inner = i),
        (this.outer = r),
        (this.color = o),
        (this.backgroundColor = a),
        (this.index = h),
        (this.raphael = l),
        (this.deselect = u(this.deselect, this)),
        (this.select = u(this.select, this)),
        (this.sin_p0 = Math.sin(n)),
        (this.cos_p0 = Math.cos(n)),
        (this.sin_p1 = Math.sin(s)),
        (this.cos_p1 = Math.cos(s)),
        (this.is_long = s - n > Math.PI ? 1 : 0),
        (this.path = this.calcSegment(
          this.inner + 3,
          this.inner + this.outer - 5
        )),
        (this.selectedPath = this.calcSegment(
          this.inner + 3,
          this.inner + this.outer
        )),
        (this.hilight = this.calcArc(this.inner));
    }
    (k = window.Morris = {}),
      (d = jQuery),
      (k.EventEmitter =
        ((r.prototype.on = function (t, e) {
          return (
            null == this.handlers && (this.handlers = {}),
            null == this.handlers[t] && (this.handlers[t] = []),
            this.handlers[t].push(e),
            this
          );
        }),
        (r.prototype.fire = function () {
          var t,
            e,
            i,
            r,
            n,
            s = arguments[0],
            o = 2 <= arguments.length ? a.call(arguments, 1) : [];
          if (null != this.handlers && null != this.handlers[s]) {
            for (n = [], e = 0, i = (r = this.handlers[s]).length; e < i; e++)
              (t = r[e]), n.push(t.apply(null, o));
            return n;
          }
        }),
        r)),
      (k.commas = function (t) {
        var e, i;
        return null != t
          ? ((i = t < 0 ? "-" : ""),
            (t = Math.abs(t)),
            (i += (e = Math.floor(t).toFixed(0)).replace(
              /(?=(?:\d{3})+$)(?!^)/g,
              ","
            )),
            (t = t.toString()).length > e.length && (i += t.slice(e.length)),
            i)
          : "-";
      }),
      (k.pad2 = function (t) {
        return (t < 10 ? "0" : "") + t;
      }),
      (k.Grid =
        ((i = k.EventEmitter),
        t(s, i),
        (s.prototype.gridDefaults = {
          dateFormat: null,
          axes: !0,
          grid: !0,
          gridLineColor: "#aaa",
          gridStrokeWidth: 0.5,
          gridTextColor: "#888",
          gridTextSize: 12,
          gridTextFamily: "sans-serif",
          gridTextWeight: "normal",
          hideHover: !1,
          yLabelFormat: null,
          xLabelAngle: 0,
          numLines: 5,
          padding: 25,
          parseTime: !0,
          postUnits: "",
          preUnits: "",
          ymax: "auto",
          ymin: "auto 0",
          goals: [],
          goalStrokeWidth: 1,
          goalLineColors: ["#666633", "#999966", "#cc6666", "#663333"],
          events: [],
          eventStrokeWidth: 1,
          eventLineColors: ["#005a04", "#ccffbb", "#3a5f0b", "#005502"],
          rangeSelect: null,
          rangeSelectColor: "#eef",
          resize: !1,
        }),
        (s.prototype.setData = function (r, t) {
          var n, s, o, e, a, h, l, u, c, p, f, d, i;
          if (
            (null == t && (t = !0),
            null != (this.options.data = r) && 0 !== r.length)
          )
            return (
              (p = this.cumulative ? 0 : null),
              (f = this.cumulative ? 0 : null),
              0 < this.options.goals.length &&
                ((i = Math.min.apply(Math, this.options.goals)),
                (e = Math.max.apply(Math, this.options.goals)),
                (f = null != f ? Math.min(f, i) : i),
                (p = null != p ? Math.max(p, e) : e)),
              (this.data = function () {
                var t,
                  e,
                  i = [];
                for (o = t = 0, e = r.length; t < e; o = ++t)
                  (h = r[o]),
                    ((a = { src: h }).label = h[this.options.xkey]),
                    this.options.parseTime
                      ? ((a.x = k.parseDate(a.label)),
                        this.options.dateFormat
                          ? (a.label = this.options.dateFormat(a.x))
                          : "number" == typeof a.label &&
                            (a.label = new Date(a.label).toString()))
                      : ((a.x = o),
                        this.options.xLabelFormat &&
                          (a.label = this.options.xLabelFormat(a))),
                    (u = 0),
                    (a.y = function () {
                      var t,
                        e,
                        i = this.options.ykeys,
                        r = [];
                      for (s = t = 0, e = i.length; t < e; s = ++t)
                        (d = i[s]),
                          null !=
                            (d =
                              null !=
                                (d =
                                  "string" == typeof (d = h[d])
                                    ? parseFloat(d)
                                    : d) && "number" != typeof d
                                ? null
                                : d) &&
                            (this.cumulative
                              ? (u += d)
                              : null != p
                              ? ((p = Math.max(d, p)), (f = Math.min(d, f)))
                              : (p = f = d)),
                          this.cumulative &&
                            null != u &&
                            ((p = Math.max(u, p)), (f = Math.min(u, f))),
                          r.push(d);
                      return r;
                    }.call(this)),
                    i.push(a);
                return i;
              }.call(this)),
              this.options.parseTime &&
                (this.data = this.data.sort(function (t, e) {
                  return (t.x > e.x) - (e.x > t.x);
                })),
              (this.xmin = this.data[0].x),
              (this.xmax = this.data[this.data.length - 1].x),
              (this.events = []),
              0 < this.options.events.length &&
                (this.options.parseTime
                  ? (this.events = function () {
                      for (
                        var t = this.options.events,
                          e = [],
                          i = 0,
                          r = t.length;
                        i < r;
                        i++
                      )
                        (n = t[i]), e.push(k.parseDate(n));
                      return e;
                    }.call(this))
                  : (this.events = this.options.events),
                (this.xmax = Math.max(
                  this.xmax,
                  Math.max.apply(Math, this.events)
                )),
                (this.xmin = Math.min(
                  this.xmin,
                  Math.min.apply(Math, this.events)
                ))),
              this.xmin === this.xmax && (--this.xmin, (this.xmax += 1)),
              (this.ymin = this.yboundary("min", f)),
              (this.ymax = this.yboundary("max", p)),
              this.ymin === this.ymax && (f && --this.ymin, (this.ymax += 1)),
              (!0 !== (i = this.options.axes) &&
                "both" !== i &&
                "y" !== i &&
                !0 !== this.options.grid) ||
                (this.options.ymax === this.gridDefaults.ymax &&
                this.options.ymin === this.gridDefaults.ymin
                  ? ((this.grid = this.autoGridLines(
                      this.ymin,
                      this.ymax,
                      this.options.numLines
                    )),
                    (this.ymin = Math.min(this.ymin, this.grid[0])),
                    (this.ymax = Math.max(
                      this.ymax,
                      this.grid[this.grid.length - 1]
                    )))
                  : ((l =
                      (this.ymax - this.ymin) / (this.options.numLines - 1)),
                    (this.grid = function () {
                      var t,
                        e,
                        i = [];
                      for (
                        c = t = this.ymin, e = this.ymax;
                        0 < l ? t <= e : e <= t;
                        c = t += l
                      )
                        i.push(c);
                      return i;
                    }.call(this)))),
              (this.dirty = !0),
              t ? this.redraw() : void 0
            );
          (this.data = []),
            this.raphael.clear(),
            null != this.hover && this.hover.hide();
        }),
        (s.prototype.yboundary = function (t, e) {
          var i,
            r = this.options["y" + t];
          return "string" == typeof r
            ? "auto" === r.slice(0, 4)
              ? 5 < r.length
                ? ((i = parseInt(r.slice(5), 10)),
                  null == e ? i : Math[t](e, i))
                : null != e
                ? e
                : 0
              : parseInt(r, 10)
            : r;
        }),
        (s.prototype.autoGridLines = function (t, e, i) {
          var r,
            n,
            s = Math.floor(Math.log(e - t) / Math.log(10)),
            s = Math.pow(10, s),
            o = Math.floor(t / s) * s,
            a = Math.ceil(e / s) * s,
            h = (a - o) / (i - 1);
          return (
            1 === s &&
              1 < h &&
              Math.ceil(h) !== h &&
              ((h = Math.ceil(h)), (a = o + h * (i - 1))),
            o < 0 &&
              0 < a &&
              ((o = Math.floor(t / h) * h), (a = Math.ceil(e / h) * h)),
            (h < 1
              ? ((r = Math.floor(Math.log(h) / Math.log(10))),
                function () {
                  var t,
                    e = [];
                  for (n = t = o; 0 < h ? t <= a : a <= t; n = t += h)
                    e.push(parseFloat(n.toFixed(1 - r)));
                  return e;
                })
              : function () {
                  var t,
                    e = [];
                  for (n = t = o; 0 < h ? t <= a : a <= t; n = t += h)
                    e.push(n);
                  return e;
                })()
          );
        }),
        (s.prototype._calc = function () {
          var n,
            r,
            t = this.el.width(),
            e = this.el.height();
          if (
            (this.elementWidth !== t ||
              this.elementHeight !== e ||
              this.dirty) &&
            ((this.elementWidth = t),
            (this.elementHeight = e),
            (this.dirty = !1),
            (this.left = this.options.padding),
            (this.right = this.elementWidth - this.options.padding),
            (this.top = this.options.padding),
            (this.bottom = this.elementHeight - this.options.padding),
            (!0 !== (t = this.options.axes) && "both" !== t && "y" !== t) ||
              ((e = function () {
                for (var t = this.grid, e = [], i = 0, r = t.length; i < r; i++)
                  (n = t[i]),
                    e.push(this.measureText(this.yAxisFormat(n)).width);
                return e;
              }.call(this)),
              (this.left += Math.max.apply(Math, e))),
            (!0 !== (t = this.options.axes) && "both" !== t && "x" !== t) ||
              ((e = function () {
                var t,
                  e,
                  i = [];
                for (
                  r = t = 0, e = this.data.length;
                  0 <= e ? t < e : e < t;
                  r = 0 <= e ? ++t : --t
                )
                  i.push(
                    this.measureText(
                      this.data[r].text,
                      -this.options.xLabelAngle
                    ).height
                  );
                return i;
              }.call(this)),
              (this.bottom -= Math.max.apply(Math, e))),
            (this.width = Math.max(1, this.right - this.left)),
            (this.height = Math.max(1, this.bottom - this.top)),
            (this.dx = this.width / (this.xmax - this.xmin)),
            (this.dy = this.height / (this.ymax - this.ymin)),
            this.calc)
          )
            return this.calc();
        }),
        (s.prototype.transY = function (t) {
          return this.bottom - (t - this.ymin) * this.dy;
        }),
        (s.prototype.transX = function (t) {
          return 1 === this.data.length
            ? (this.left + this.right) / 2
            : this.left + (t - this.xmin) * this.dx;
        }),
        (s.prototype.redraw = function () {
          if (
            (this.raphael.clear(),
            this._calc(),
            this.drawGrid(),
            this.drawGoals(),
            this.drawEvents(),
            this.draw)
          )
            return this.draw();
        }),
        (s.prototype.measureText = function (t, e) {
          return (
            null == e && (e = 0),
            (e = (t = this.raphael
              .text(100, 100, t)
              .attr("font-size", this.options.gridTextSize)
              .attr("font-family", this.options.gridTextFamily)
              .attr("font-weight", this.options.gridTextWeight)
              .rotate(e)).getBBox()),
            t.remove(),
            e
          );
        }),
        (s.prototype.yAxisFormat = function (t) {
          return this.yLabelFormat(t);
        }),
        (s.prototype.yLabelFormat = function (t) {
          return "function" == typeof this.options.yLabelFormat
            ? this.options.yLabelFormat(t)
            : "" + this.options.preUnits + k.commas(t) + this.options.postUnits;
        }),
        (s.prototype.drawGrid = function () {
          var t, e, i, r, n, s, o, a;
          if (
            !1 !== this.options.grid ||
            !0 === (n = this.options.axes) ||
            "both" === n ||
            "y" === n
          ) {
            for (a = [], i = 0, r = (s = this.grid).length; i < r; i++)
              (t = s[i]),
                (e = this.transY(t)),
                (!0 !== (o = this.options.axes) && "both" !== o && "y" !== o) ||
                  this.drawYAxisLabel(
                    this.left - this.options.padding / 2,
                    e,
                    this.yAxisFormat(t)
                  ),
                this.options.grid
                  ? a.push(
                      this.drawGridLine(
                        "M" +
                          this.left +
                          "," +
                          e +
                          "H" +
                          (this.left + this.width)
                      )
                    )
                  : a.push(void 0);
            return a;
          }
        }),
        (s.prototype.drawGoals = function () {
          for (
            var t,
              e,
              i,
              r = this.options.goals,
              n = [],
              s = (i = 0),
              o = r.length;
            i < o;
            s = ++i
          )
            (e = r[s]),
              (t =
                this.options.goalLineColors[
                  s % this.options.goalLineColors.length
                ]),
              n.push(this.drawGoal(e, t));
          return n;
        }),
        (s.prototype.drawEvents = function () {
          for (
            var t, e, i, r = this.events, n = [], s = (i = 0), o = r.length;
            i < o;
            s = ++i
          )
            (e = r[s]),
              (t =
                this.options.eventLineColors[
                  s % this.options.eventLineColors.length
                ]),
              n.push(this.drawEvent(e, t));
          return n;
        }),
        (s.prototype.drawGoal = function (t, e) {
          return this.raphael
            .path("M" + this.left + "," + this.transY(t) + "H" + this.right)
            .attr("stroke", e)
            .attr("stroke-width", this.options.goalStrokeWidth);
        }),
        (s.prototype.drawEvent = function (t, e) {
          return this.raphael
            .path("M" + this.transX(t) + "," + this.bottom + "V" + this.top)
            .attr("stroke", e)
            .attr("stroke-width", this.options.eventStrokeWidth);
        }),
        (s.prototype.drawYAxisLabel = function (t, e, i) {
          return this.raphael
            .text(t, e, i)
            .attr("font-size", this.options.gridTextSize)
            .attr("font-family", this.options.gridTextFamily)
            .attr("font-weight", this.options.gridTextWeight)
            .attr("fill", this.options.gridTextColor)
            .attr("text-anchor", "end");
        }),
        (s.prototype.drawGridLine = function (t) {
          return this.raphael
            .path(t)
            .attr("stroke", this.options.gridLineColor)
            .attr("stroke-width", this.options.gridStrokeWidth);
        }),
        (s.prototype.startRange = function (t) {
          return (
            this.hover.hide(),
            (this.selectFrom = t),
            this.selectionRect.attr({ x: t, width: 0 }).show()
          );
        }),
        (s.prototype.endRange = function (t) {
          var e;
          if (this.selectFrom)
            return (
              (e = Math.min(this.selectFrom, t)),
              (t = Math.max(this.selectFrom, t)),
              this.options.rangeSelect.call(this.el, {
                start: this.data[this.hitTest(e)].x,
                end: this.data[this.hitTest(t)].x,
              }),
              (this.selectFrom = null)
            );
        }),
        (s.prototype.resizeHandler = function () {
          return (
            (this.timeoutId = null),
            this.raphael.setSize(this.el.width(), this.el.height()),
            this.redraw()
          );
        }),
        s)),
      (k.parseDate = function (t) {
        var e, i, r, n, s, o, a;
        return "number" == typeof t
          ? t
          : ((o = t.match(/^(\d+) Q(\d)$/)),
            (a = t.match(/^(\d+)-(\d+)$/)),
            (e = t.match(/^(\d+)-(\d+)-(\d+)$/)),
            (r = t.match(/^(\d+) W(\d+)$/)),
            (n = t.match(
              /^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+)(Z|([+-])(\d\d):?(\d\d))?$/
            )),
            (s = t.match(
              /^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+):(\d+(\.\d+)?)(Z|([+-])(\d\d):?(\d\d))?$/
            )),
            o
              ? new Date(
                  parseInt(o[1], 10),
                  3 * parseInt(o[2], 10) - 1,
                  1
                ).getTime()
              : a
              ? new Date(
                  parseInt(a[1], 10),
                  parseInt(a[2], 10) - 1,
                  1
                ).getTime()
              : e
              ? new Date(
                  parseInt(e[1], 10),
                  parseInt(e[2], 10) - 1,
                  parseInt(e[3], 10)
                ).getTime()
              : r
              ? (4 !== (o = new Date(parseInt(r[1], 10), 0, 1)).getDay() &&
                  o.setMonth(0, 1 + ((4 - o.getDay() + 7) % 7)),
                o.getTime() + 6048e5 * parseInt(r[2], 10))
              : n
              ? n[6]
                ? ((i = 0),
                  "Z" !== n[6] &&
                    ((i = 60 * parseInt(n[8], 10) + parseInt(n[9], 10)),
                    "+" === n[7]) &&
                    (i = 0 - i),
                  Date.UTC(
                    parseInt(n[1], 10),
                    parseInt(n[2], 10) - 1,
                    parseInt(n[3], 10),
                    parseInt(n[4], 10),
                    parseInt(n[5], 10) + i
                  ))
                : new Date(
                    parseInt(n[1], 10),
                    parseInt(n[2], 10) - 1,
                    parseInt(n[3], 10),
                    parseInt(n[4], 10),
                    parseInt(n[5], 10)
                  ).getTime()
              : s
              ? ((a = parseFloat(s[6])),
                (e = Math.floor(a)),
                (o = Math.round(1e3 * (a - e))),
                s[8]
                  ? ((i = 0),
                    "Z" !== s[8] &&
                      ((i = 60 * parseInt(s[10], 10) + parseInt(s[11], 10)),
                      "+" === s[9]) &&
                      (i = 0 - i),
                    Date.UTC(
                      parseInt(s[1], 10),
                      parseInt(s[2], 10) - 1,
                      parseInt(s[3], 10),
                      parseInt(s[4], 10),
                      parseInt(s[5], 10) + i,
                      e,
                      o
                    ))
                  : new Date(
                      parseInt(s[1], 10),
                      parseInt(s[2], 10) - 1,
                      parseInt(s[3], 10),
                      parseInt(s[4], 10),
                      parseInt(s[5], 10),
                      e,
                      o
                    ).getTime())
              : new Date(parseInt(t, 10), 0, 1).getTime());
      }),
      (k.Hover =
        ((o.defaults = { class: "morris-hover morris-default-style" }),
        (o.prototype.update = function (t, e, i) {
          return t
            ? (this.html(t), this.show(), this.moveTo(e, i))
            : this.hide();
        }),
        (o.prototype.html = function (t) {
          return this.el.html(t);
        }),
        (o.prototype.moveTo = function (t, e) {
          var i,
            r = this.options.parent.innerWidth(),
            n = this.options.parent.innerHeight(),
            s = this.el.outerWidth(),
            o = this.el.outerHeight(),
            t = Math.min(Math.max(0, t - s / 2), r - s);
          return (
            (null == e || ((i = e - o - 10) < 0 && n < (i = e + 10) + o)) &&
              (i = n / 2 - o / 2),
            this.el.css({ left: t + "px", top: parseInt(i) + "px" })
          );
        }),
        (o.prototype.show = function () {
          return this.el.show();
        }),
        (o.prototype.hide = function () {
          return this.el.hide();
        }),
        o)),
      (k.Line =
        ((i = k.Grid),
        t(l, i),
        (l.prototype.init = function () {
          if ("always" !== this.options.hideHover)
            return (
              (this.hover = new k.Hover({ parent: this.el })),
              this.on("hovermove", this.onHoverMove),
              this.on("hoverout", this.onHoverOut),
              this.on("gridclick", this.onGridClick)
            );
        }),
        (l.prototype.defaults = {
          lineWidth: 3,
          pointSize: 4,
          lineColors: [
            "#0b62a4",
            "#7A92A3",
            "#4da74d",
            "#afd8f8",
            "#edc240",
            "#cb4b4b",
            "#9440ed",
          ],
          pointStrokeWidths: [1],
          pointStrokeColors: ["#ffffff"],
          pointFillColors: [],
          smooth: !0,
          xLabels: "auto",
          xLabelFormat: null,
          xLabelMargin: 24,
          hideHover: !1,
        }),
        (l.prototype.calc = function () {
          return this.calcPoints(), this.generatePaths();
        }),
        (l.prototype.calcPoints = function () {
          for (var n, s, t = this.data, e = [], i = 0, r = t.length; i < r; i++)
            ((n = t[i])._x = this.transX(n.x)),
              (n._y = function () {
                for (var t = n.y, e = [], i = 0, r = t.length; i < r; i++)
                  (s = t[i]), e.push(null != s ? this.transY(s) : s);
                return e;
              }.call(this)),
              e.push(
                (n._ymax = Math.min.apply(
                  Math,
                  [this.bottom].concat(
                    (function () {
                      for (
                        var t = n._y, e = [], i = 0, r = t.length;
                        i < r;
                        i++
                      )
                        null != (s = t[i]) && e.push(s);
                      return e;
                    })()
                  )
                ))
              );
          return e;
        }),
        (l.prototype.hitTest = function (t) {
          var e, i, r, n;
          if (0 === this.data.length) return null;
          for (
            e = i = 0, r = (n = this.data.slice(1)).length;
            i < r && !(t < (n[e]._x + this.data[e]._x) / 2);
            e = ++i
          );
          return e;
        }),
        (l.prototype.onGridClick = function (t, e) {
          var i = this.hitTest(t);
          return this.fire("click", i, this.data[i].src, t, e);
        }),
        (l.prototype.onHoverMove = function (t, e) {
          t = this.hitTest(t);
          return this.displayHoverForRow(t);
        }),
        (l.prototype.onHoverOut = function () {
          if (!1 !== this.options.hideHover)
            return this.displayHoverForRow(null);
        }),
        (l.prototype.displayHoverForRow = function (t) {
          var e;
          return null != t
            ? ((e = this.hover).update.apply(e, this.hoverContentForRow(t)),
              this.hilight(t))
            : (this.hover.hide(), this.hilight());
        }),
        (l.prototype.hoverContentForRow = function (t) {
          for (
            var e,
              i,
              r = this.data[t],
              n = "<div class='morris-hover-row-label'>" + r.label + "</div>",
              s = r.y,
              o = (i = 0),
              a = s.length;
            i < a;
            o = ++i
          )
            (e = s[o]),
              (n +=
                "<div class='morris-hover-point' style='color: " +
                this.colorFor(r, o, "label") +
                "'>\n  " +
                this.options.labels[o] +
                ":\n  " +
                this.yLabelFormat(e) +
                "\n</div>");
          return [
            (n =
              "function" == typeof this.options.hoverCallback
                ? this.options.hoverCallback(t, this.options, n, r.src)
                : n),
            r._x,
            r._ymax,
          ];
        }),
        (l.prototype.generatePaths = function () {
          var n, s, o, a;
          return (this.paths = function () {
            var t,
              e,
              i,
              r = [];
            for (
              s = t = 0, e = this.options.ykeys.length;
              0 <= e ? t < e : e < t;
              s = 0 <= e ? ++t : --t
            )
              (a =
                "boolean" == typeof this.options.smooth
                  ? this.options.smooth
                  : ((i = this.options.ykeys[s]),
                    0 <= h.call(this.options.smooth, i))),
                1 <
                (n = function () {
                  for (
                    var t = this.data, e = [], i = 0, r = t.length;
                    i < r;
                    i++
                  )
                    void 0 !== (o = t[i])._y[s] &&
                      e.push({ x: o._x, y: o._y[s] });
                  return e;
                }.call(this)).length
                  ? r.push(k.Line.createPath(n, a, this.bottom))
                  : r.push(null);
            return r;
          }.call(this));
        }),
        (l.prototype.draw = function () {
          var t;
          if (
            ((!0 !== (t = this.options.axes) && "both" !== t && "x" !== t) ||
              this.drawXAxis(),
            this.drawSeries(),
            !1 === this.options.hideHover)
          )
            return this.displayHoverForRow(this.data.length - 1);
        }),
        (l.prototype.drawXAxis = function () {
          var t,
            n,
            e,
            i,
            r,
            s = this,
            o = this.bottom + this.options.padding / 2,
            a = null,
            h = null,
            l = function (t, e) {
              var i,
                e = s.drawXAxisLabel(s.transX(e), o, t),
                t = e.getBBox();
              return (
                e.transform("r" + -s.options.xLabelAngle),
                (i = e.getBBox()),
                e.transform("t0," + i.height / 2 + "..."),
                0 !== s.options.xLabelAngle &&
                  ((t =
                    -0.5 *
                    t.width *
                    Math.cos((s.options.xLabelAngle * Math.PI) / 180)),
                  e.transform("t" + t + ",0...")),
                (i = e.getBBox()),
                (null == a || a >= i.x + i.width || (null != h && h >= i.x)) &&
                0 <= i.x &&
                i.x + i.width < s.el.width()
                  ? (0 !== s.options.xLabelAngle &&
                      ((t =
                        (1.25 * s.options.gridTextSize) /
                        Math.sin((s.options.xLabelAngle * Math.PI) / 180)),
                      (h = i.x - t)),
                    (a = i.x - s.options.xLabelMargin))
                  : e.remove()
              );
            },
            u = this.options.parseTime
              ? 1 === this.data.length && "auto" === this.options.xLabels
                ? [[this.data[0].label, this.data[0].x]]
                : k.labelSeries(
                    this.xmin,
                    this.xmax,
                    this.width,
                    this.options.xLabels,
                    this.options.xLabelFormat
                  )
              : function () {
                  for (
                    var t = this.data, e = [], i = 0, r = t.length;
                    i < r;
                    i++
                  )
                    (n = t[i]), e.push([n.label, n.x]);
                  return e;
                }.call(this);
          for (u.reverse(), r = [], e = 0, i = u.length; e < i; e++)
            (t = u[e]), r.push(l(t[0], t[1]));
          return r;
        }),
        (l.prototype.drawSeries = function () {
          var t, e, i, r, n, s;
          for (
            this.seriesPoints = [], t = e = r = this.options.ykeys.length - 1;
            r <= 0 ? e <= 0 : 0 <= e;
            t = r <= 0 ? ++e : --e
          )
            this._drawLineFor(t);
          for (
            s = [], t = i = n = this.options.ykeys.length - 1;
            n <= 0 ? i <= 0 : 0 <= i;
            t = n <= 0 ? ++i : --i
          )
            s.push(this._drawPointFor(t));
          return s;
        }),
        (l.prototype._drawPointFor = function (t) {
          var e, i, r, n, s, o;
          for (
            this.seriesPoints[t] = [],
              o = [],
              r = 0,
              n = (s = this.data).length;
            r < n;
            r++
          )
            (e = null) != (i = s[r])._y[t] &&
              (e = this.drawLinePoint(
                i._x,
                i._y[t],
                this.colorFor(i, t, "point"),
                t
              )),
              o.push(this.seriesPoints[t].push(e));
          return o;
        }),
        (l.prototype._drawLineFor = function (t) {
          var e = this.paths[t];
          if (null !== e)
            return this.drawLinePath(e, this.colorFor(null, t, "line"), t);
        }),
        (l.createPath = function (t, e, i) {
          var r,
            n,
            s,
            o,
            a,
            h,
            l,
            u,
            c,
            p = "";
          for (
            e && (s = k.Line.gradients(t)),
              l = { y: null },
              o = u = 0,
              c = t.length;
            u < c;
            o = ++u
          )
            null != (r = t[o]).y &&
              (null != l.y
                ? e
                  ? ((n = s[o]),
                    (h = s[o - 1]),
                    (a = (r.x - l.x) / 4),
                    (p +=
                      "C" +
                      (l.x + a) +
                      "," +
                      Math.min(i, l.y + a * h) +
                      "," +
                      (r.x - a) +
                      "," +
                      Math.min(i, r.y - a * n) +
                      "," +
                      r.x +
                      "," +
                      r.y))
                  : (p += "L" + r.x + "," + r.y)
                : (e && null == s[o]) || (p += "M" + r.x + "," + r.y)),
              (l = r);
          return p;
        }),
        (l.gradients = function (t) {
          for (
            var e,
              i,
              r,
              n,
              s = function (t, e) {
                return (t.y - e.y) / (t.x - e.x);
              },
              o = [],
              a = (n = 0),
              h = t.length;
            n < h;
            a = ++n
          )
            null != (e = t[a]).y
              ? ((i = t[a + 1] || { y: null }),
                null != (r = t[a - 1] || { y: null }).y && null != i.y
                  ? o.push(s(r, i))
                  : null != r.y
                  ? o.push(s(r, e))
                  : null != i.y
                  ? o.push(s(e, i))
                  : o.push(null))
              : o.push(null);
          return o;
        }),
        (l.prototype.hilight = function (t) {
          var e, i, r, n, s;
          if (null !== this.prevHilight && this.prevHilight !== t)
            for (
              e = i = 0, n = this.seriesPoints.length - 1;
              0 <= n ? i <= n : n <= i;
              e = 0 <= n ? ++i : --i
            )
              this.seriesPoints[e][this.prevHilight] &&
                this.seriesPoints[e][this.prevHilight].animate(
                  this.pointShrinkSeries(e)
                );
          if (null !== t && this.prevHilight !== t)
            for (
              e = r = 0, s = this.seriesPoints.length - 1;
              0 <= s ? r <= s : s <= r;
              e = 0 <= s ? ++r : --r
            )
              this.seriesPoints[e][t] &&
                this.seriesPoints[e][t].animate(this.pointGrowSeries(e));
          return (this.prevHilight = t);
        }),
        (l.prototype.colorFor = function (t, e, i) {
          return "function" == typeof this.options.lineColors
            ? this.options.lineColors.call(this, t, e, i)
            : ("point" === i &&
                this.options.pointFillColors[
                  e % this.options.pointFillColors.length
                ]) ||
                this.options.lineColors[e % this.options.lineColors.length];
        }),
        (l.prototype.drawXAxisLabel = function (t, e, i) {
          return this.raphael
            .text(t, e, i)
            .attr("font-size", this.options.gridTextSize)
            .attr("font-family", this.options.gridTextFamily)
            .attr("font-weight", this.options.gridTextWeight)
            .attr("fill", this.options.gridTextColor);
        }),
        (l.prototype.drawLinePath = function (t, e, i) {
          return this.raphael
            .path(t)
            .attr("stroke", e)
            .attr("stroke-width", this.lineWidthForSeries(i));
        }),
        (l.prototype.drawLinePoint = function (t, e, i, r) {
          return this.raphael
            .circle(t, e, this.pointSizeForSeries(r))
            .attr("fill", i)
            .attr("stroke-width", this.pointStrokeWidthForSeries(r))
            .attr("stroke", this.pointStrokeColorForSeries(r));
        }),
        (l.prototype.pointStrokeWidthForSeries = function (t) {
          return this.options.pointStrokeWidths[
            t % this.options.pointStrokeWidths.length
          ];
        }),
        (l.prototype.pointStrokeColorForSeries = function (t) {
          return this.options.pointStrokeColors[
            t % this.options.pointStrokeColors.length
          ];
        }),
        (l.prototype.lineWidthForSeries = function (t) {
          return this.options.lineWidth instanceof Array
            ? this.options.lineWidth[t % this.options.lineWidth.length]
            : this.options.lineWidth;
        }),
        (l.prototype.pointSizeForSeries = function (t) {
          return this.options.pointSize instanceof Array
            ? this.options.pointSize[t % this.options.pointSize.length]
            : this.options.pointSize;
        }),
        (l.prototype.pointGrowSeries = function (t) {
          return Raphael.animation(
            { r: this.pointSizeForSeries(t) + 3 },
            25,
            "linear"
          );
        }),
        (l.prototype.pointShrinkSeries = function (t) {
          return Raphael.animation(
            { r: this.pointSizeForSeries(t) },
            25,
            "linear"
          );
        }),
        l)),
      (k.labelSeries = function (t, e, i, r, n) {
        var s,
          o,
          a,
          h,
          l,
          u,
          c,
          p = (200 * (e - t)) / i,
          i = new Date(t),
          f = k.LABEL_SPECS[r];
        if (void 0 === f)
          for (l = 0, u = (c = k.AUTO_LABEL_ORDER).length; l < u; l++)
            if (((a = c[l]), p >= (a = k.LABEL_SPECS[a]).span)) {
              f = a;
              break;
            }
        for (
          void 0 === f && (f = k.LABEL_SPECS.second),
            s = (f = n ? d.extend({}, f, { fmt: n }) : f).start(i),
            o = [];
          (h = s.getTime()) <= e;

        )
          t <= h && o.push([f.fmt(s), h]), f.incr(s);
        return o;
      }),
      (k.LABEL_SPECS = {
        decade: {
          span: 1728e8,
          start: function (t) {
            return new Date(t.getFullYear() - (t.getFullYear() % 10), 0, 1);
          },
          fmt: function (t) {
            return "" + t.getFullYear();
          },
          incr: function (t) {
            return t.setFullYear(t.getFullYear() + 10);
          },
        },
        year: {
          span: 1728e7,
          start: function (t) {
            return new Date(t.getFullYear(), 0, 1);
          },
          fmt: function (t) {
            return "" + t.getFullYear();
          },
          incr: function (t) {
            return t.setFullYear(t.getFullYear() + 1);
          },
        },
        month: {
          span: 24192e5,
          start: function (t) {
            return new Date(t.getFullYear(), t.getMonth(), 1);
          },
          fmt: function (t) {
            return t.getFullYear() + "-" + k.pad2(t.getMonth() + 1);
          },
          incr: function (t) {
            return t.setMonth(t.getMonth() + 1);
          },
        },
        week: {
          span: 6048e5,
          start: function (t) {
            return new Date(t.getFullYear(), t.getMonth(), t.getDate());
          },
          fmt: function (t) {
            return (
              t.getFullYear() +
              "-" +
              k.pad2(t.getMonth() + 1) +
              "-" +
              k.pad2(t.getDate())
            );
          },
          incr: function (t) {
            return t.setDate(t.getDate() + 7);
          },
        },
        day: {
          span: 864e5,
          start: function (t) {
            return new Date(t.getFullYear(), t.getMonth(), t.getDate());
          },
          fmt: function (t) {
            return (
              t.getFullYear() +
              "-" +
              k.pad2(t.getMonth() + 1) +
              "-" +
              k.pad2(t.getDate())
            );
          },
          incr: function (t) {
            return t.setDate(t.getDate() + 1);
          },
        },
        hour: (i = function (e) {
          return {
            span: 60 * e * 1e3,
            start: function (t) {
              return new Date(
                t.getFullYear(),
                t.getMonth(),
                t.getDate(),
                t.getHours()
              );
            },
            fmt: function (t) {
              return k.pad2(t.getHours()) + ":" + k.pad2(t.getMinutes());
            },
            incr: function (t) {
              return t.setUTCMinutes(t.getUTCMinutes() + e);
            },
          };
        })(60),
        "30min": i(30),
        "15min": i(15),
        "10min": i(10),
        "5min": i(5),
        minute: i(1),
        "30sec": (i = function (e) {
          return {
            span: 1e3 * e,
            start: function (t) {
              return new Date(
                t.getFullYear(),
                t.getMonth(),
                t.getDate(),
                t.getHours(),
                t.getMinutes()
              );
            },
            fmt: function (t) {
              return (
                k.pad2(t.getHours()) +
                ":" +
                k.pad2(t.getMinutes()) +
                ":" +
                k.pad2(t.getSeconds())
              );
            },
            incr: function (t) {
              return t.setUTCSeconds(t.getUTCSeconds() + e);
            },
          };
        })(30),
        "15sec": i(15),
        "10sec": i(10),
        "5sec": i(5),
        second: i(1),
      }),
      (k.AUTO_LABEL_ORDER = [
        "decade",
        "year",
        "month",
        "week",
        "day",
        "hour",
        "30min",
        "15min",
        "10min",
        "5min",
        "minute",
        "30sec",
        "15sec",
        "10sec",
        "5sec",
        "second",
      ]),
      (k.Area =
        ((i = k.Line),
        t(c, i),
        (e = { fillOpacity: "auto", behaveLikeLine: !1 }),
        (c.prototype.calcPoints = function () {
          for (
            var n, s, o, t = this.data, e = [], i = 0, r = t.length;
            i < r;
            i++
          )
            ((n = t[i])._x = this.transX(n.x)),
              (s = 0),
              (n._y = function () {
                for (var t = n.y, e = [], i = 0, r = t.length; i < r; i++)
                  (o = t[i]),
                    this.options.behaveLikeLine
                      ? e.push(this.transY(o))
                      : ((s += o || 0), e.push(this.transY(s)));
                return e;
              }.call(this)),
              e.push((n._ymax = Math.max.apply(Math, n._y)));
          return e;
        }),
        (c.prototype.drawSeries = function () {
          var t, e, i, r, n, s, o, a;
          for (
            this.seriesPoints = [],
              a = [],
              i = 0,
              r = (e = (
                this.options.behaveLikeLine
                  ? function () {
                      s = [];
                      for (
                        var t = 0, e = this.options.ykeys.length - 1;
                        0 <= e ? t <= e : e <= t;
                        0 <= e ? t++ : t--
                      )
                        s.push(t);
                      return s;
                    }
                  : function () {
                      o = [];
                      for (
                        var t = (n = this.options.ykeys.length - 1);
                        n <= 0 ? t <= 0 : 0 <= t;
                        n <= 0 ? t++ : t--
                      )
                        o.push(t);
                      return o;
                    }
              ).apply(this)).length;
            i < r;
            i++
          )
            (t = e[i]),
              this._drawFillFor(t),
              this._drawLineFor(t),
              a.push(this._drawPointFor(t));
          return a;
        }),
        (c.prototype._drawFillFor = function (t) {
          var e = this.paths[t];
          if (null !== e)
            return (
              (e =
                e +
                ("L" +
                  this.transX(this.xmax) +
                  "," +
                  this.bottom +
                  "L" +
                  this.transX(this.xmin) +
                  "," +
                  this.bottom) +
                "Z"),
              this.drawFilledPath(e, this.fillForSeries(t))
            );
        }),
        (c.prototype.fillForSeries = function (t) {
          t = Raphael.rgb2hsl(this.colorFor(this.data[t], t, "line"));
          return Raphael.hsl(
            t.h,
            this.options.behaveLikeLine ? 0.9 * t.s : 0.75 * t.s,
            Math.min(0.98, this.options.behaveLikeLine ? 1.2 * t.l : 1.25 * t.l)
          );
        }),
        (c.prototype.drawFilledPath = function (t, e) {
          return this.raphael
            .path(t)
            .attr("fill", e)
            .attr("fill-opacity", this.options.fillOpacity)
            .attr("stroke", "none");
        }),
        c)),
      (k.Bar =
        ((i = k.Grid),
        t(p, i),
        (p.prototype.init = function () {
          if (
            ((this.cumulative = this.options.stacked),
            "always" !== this.options.hideHover)
          )
            return (
              (this.hover = new k.Hover({ parent: this.el })),
              this.on("hovermove", this.onHoverMove),
              this.on("hoverout", this.onHoverOut),
              this.on("gridclick", this.onGridClick)
            );
        }),
        (p.prototype.defaults = {
          barSizeRatio: 0.75,
          barGap: 3,
          barColors: [
            "#0b62a4",
            "#7a92a3",
            "#4da74d",
            "#afd8f8",
            "#edc240",
            "#cb4b4b",
            "#9440ed",
          ],
          barOpacity: 1,
          barRadius: [0, 0, 0, 0],
          xLabelMargin: 50,
        }),
        (p.prototype.calc = function () {
          var t;
          if ((this.calcBars(), !1 === this.options.hideHover))
            return (t = this.hover).update.apply(
              t,
              this.hoverContentForRow(this.data.length - 1)
            );
        }),
        (p.prototype.calcBars = function () {
          for (
            var n, s, t, e = this.data, i = [], r = (t = 0), o = e.length;
            t < o;
            r = ++t
          )
            ((n = e[r])._x =
              this.left + (this.width * (r + 0.5)) / this.data.length),
              i.push(
                (n._y = function () {
                  for (var t = n.y, e = [], i = 0, r = t.length; i < r; i++)
                    (s = t[i]), e.push(null != s ? this.transY(s) : null);
                  return e;
                }.call(this))
              );
          return i;
        }),
        (p.prototype.draw = function () {
          var t;
          return (
            (!0 !== (t = this.options.axes) && "both" !== t && "x" !== t) ||
              this.drawXAxis(),
            this.drawSeries()
          );
        }),
        (p.prototype.drawXAxis = function () {
          for (
            var t,
              e,
              i,
              r,
              n =
                this.bottom +
                (this.options.xAxisLabelTopPadding || this.options.padding / 2),
              s = null,
              o = null,
              a = [],
              h = (r = 0),
              l = this.data.length;
            0 <= l ? r < l : l < r;
            h = 0 <= l ? ++r : --r
          )
            (e = this.data[this.data.length - 1 - h]),
              (i = (e = this.drawXAxisLabel(e._x, n, e.label)).getBBox()),
              e.transform("r" + -this.options.xLabelAngle),
              (t = e.getBBox()),
              e.transform("t0," + t.height / 2 + "..."),
              0 !== this.options.xLabelAngle &&
                ((i =
                  -0.5 *
                  i.width *
                  Math.cos((this.options.xLabelAngle * Math.PI) / 180)),
                e.transform("t" + i + ",0...")),
              (null == s || s >= t.x + t.width || (null != o && o >= t.x)) &&
              0 <= t.x &&
              t.x + t.width < this.el.width()
                ? (0 !== this.options.xLabelAngle &&
                    ((i =
                      (1.25 * this.options.gridTextSize) /
                      Math.sin((this.options.xLabelAngle * Math.PI) / 180)),
                    (o = t.x - i)),
                  a.push((s = t.x - this.options.xLabelMargin)))
                : a.push(e.remove());
          return a;
        }),
        (p.prototype.drawSeries = function () {
          var n,
            s,
            o,
            a,
            h,
            l,
            u,
            c,
            p,
            f = this.width / this.options.data.length,
            t = this.options.stacked ? 1 : this.options.ykeys.length,
            d =
              (f * this.options.barSizeRatio - this.options.barGap * (t - 1)) /
              t;
          return (
            this.options.barSize && (d = Math.min(d, this.options.barSize)),
            (t = f - d * t - this.options.barGap * (t - 1)),
            (a = t / 2),
            (p = this.ymin <= 0 && 0 <= this.ymax ? this.transY(0) : null),
            (this.bars = function () {
              var t,
                e,
                i = this.data,
                r = [];
              for (n = t = 0, e = i.length; t < e; n = ++t)
                (h = i[n]),
                  (s = 0),
                  r.push(
                    function () {
                      var t,
                        e,
                        i = h._y,
                        r = [];
                      for (l = t = 0, e = i.length; t < e; l = ++t)
                        null !== (c = i[l])
                          ? ((c = p
                              ? ((u = Math.min(c, p)), Math.max(c, p))
                              : ((u = c), this.bottom)),
                            (o = this.left + n * f + a),
                            this.options.stacked ||
                              (o += l * (d + this.options.barGap)),
                            (c = c - u),
                            this.options.verticalGridCondition &&
                              this.options.verticalGridCondition(h.x) &&
                              this.drawBar(
                                this.left + n * f,
                                this.top,
                                f,
                                Math.abs(this.top - this.bottom),
                                this.options.verticalGridColor,
                                this.options.verticalGridOpacity,
                                this.options.barRadius
                              ),
                            this.options.stacked && (u -= s),
                            this.drawBar(
                              o,
                              u,
                              d,
                              c,
                              this.colorFor(h, l, "bar"),
                              this.options.barOpacity,
                              this.options.barRadius
                            ),
                            r.push((s += c)))
                          : r.push(null);
                      return r;
                    }.call(this)
                  );
              return r;
            }.call(this))
          );
        }),
        (p.prototype.colorFor = function (t, e, i) {
          var r;
          return "function" == typeof this.options.barColors
            ? ((t = { x: t.x, y: t.y[e], label: t.label }),
              (r = {
                index: e,
                key: this.options.ykeys[e],
                label: this.options.labels[e],
              }),
              this.options.barColors.call(this, t, r, i))
            : this.options.barColors[e % this.options.barColors.length];
        }),
        (p.prototype.hitTest = function (t) {
          return 0 === this.data.length
            ? null
            : ((t = Math.max(Math.min(t, this.right), this.left)),
              Math.min(
                this.data.length - 1,
                Math.floor((t - this.left) / (this.width / this.data.length))
              ));
        }),
        (p.prototype.onGridClick = function (t, e) {
          var i = this.hitTest(t);
          return this.fire("click", i, this.data[i].src, t, e);
        }),
        (p.prototype.onHoverMove = function (t, e) {
          var i,
            t = this.hitTest(t);
          return (i = this.hover).update.apply(i, this.hoverContentForRow(t));
        }),
        (p.prototype.onHoverOut = function () {
          if (!1 !== this.options.hideHover) return this.hover.hide();
        }),
        (p.prototype.hoverContentForRow = function (t) {
          for (
            var e,
              i,
              r = this.data[t],
              n = "<div class='morris-hover-row-label'>" + r.label + "</div>",
              s = r.y,
              o = (i = 0),
              a = s.length;
            i < a;
            o = ++i
          )
            (e = s[o]),
              (n +=
                "<div class='morris-hover-point' style='color: " +
                this.colorFor(r, o, "label") +
                "'>\n  " +
                this.options.labels[o] +
                ":\n  " +
                this.yLabelFormat(e) +
                "\n</div>");
          return [
            (n =
              "function" == typeof this.options.hoverCallback
                ? this.options.hoverCallback(t, this.options, n, r.src)
                : n),
            this.left + ((t + 0.5) * this.width) / this.data.length,
          ];
        }),
        (p.prototype.drawXAxisLabel = function (t, e, i) {
          return this.raphael
            .text(t, e, i)
            .attr("font-size", this.options.gridTextSize)
            .attr("font-family", this.options.gridTextFamily)
            .attr("font-weight", this.options.gridTextWeight)
            .attr("fill", this.options.gridTextColor);
        }),
        (p.prototype.drawBar = function (t, e, i, r, n, s, o) {
          var a = Math.max.apply(Math, o),
            a =
              0 === a || r < a
                ? this.raphael.rect(t, e, i, r)
                : this.raphael.path(this.roundedRect(t, e, i, r, o));
          return a
            .attr("fill", n)
            .attr("fill-opacity", s)
            .attr("stroke", "none");
        }),
        (p.prototype.roundedRect = function (t, e, i, r, n) {
          return [
            "M",
            t,
            (n = null == n ? [0, 0, 0, 0] : n)[0] + e,
            "Q",
            t,
            e,
            t + n[0],
            e,
            "L",
            t + i - n[1],
            e,
            "Q",
            t + i,
            e,
            t + i,
            e + n[1],
            "L",
            t + i,
            e + r - n[2],
            "Q",
            t + i,
            e + r,
            t + i - n[2],
            e + r,
            "L",
            t + n[3],
            e + r,
            "Q",
            t,
            e + r,
            t,
            e + r - n[3],
            "Z",
          ];
        }),
        p)),
      (k.Donut =
        ((i = k.EventEmitter),
        t(f, i),
        (f.prototype.defaults = {
          colors: [
            "#0B62A4",
            "#3980B5",
            "#679DC6",
            "#95BBD7",
            "#B0CCE1",
            "#095791",
            "#095085",
            "#083E67",
            "#052C48",
            "#042135",
          ],
          backgroundColor: "#FFFFFF",
          labelColor: "#000000",
          formatter: k.commas,
          resize: !1,
        }),
        (f.prototype.redraw = function () {
          var t,
            e,
            i,
            r,
            n,
            s,
            o,
            a,
            h,
            l,
            u,
            c,
            p,
            f,
            d,
            g,
            x,
            y,
            m,
            v,
            b,
            w,
            _;
          for (
            this.raphael.clear(),
              e = this.el.width() / 2,
              i = this.el.height() / 2,
              p = (Math.min(e, i) - 10) / 3,
              f = u = 0,
              x = (v = this.values).length;
            f < x;
            f++
          )
            u += c = v[f];
          for (
            a = 5 / (2 * p),
              t = 1.9999 * Math.PI - a * this.data.length,
              n = s = 0,
              this.segments = [],
              r = d = 0,
              y = (b = this.values).length;
            d < y;
            r = ++d
          )
            (c = b[r]),
              (l = new k.DonutSegment(
                e,
                i,
                2 * p,
                p,
                s,
                (h = s + a + (c / u) * t),
                this.data[r].color ||
                  this.options.colors[n % this.options.colors.length],
                this.options.backgroundColor,
                n,
                this.raphael
              )).render(),
              this.segments.push(l),
              l.on("hover", this.select),
              l.on("click", this.click),
              (s = h),
              (n += 1);
          for (
            this.text1 = this.drawEmptyDonutLabel(
              e,
              i - 10,
              this.options.labelColor,
              15,
              800
            ),
              this.text2 = this.drawEmptyDonutLabel(
                e,
                10 + i,
                this.options.labelColor,
                14
              ),
              o = Math.max.apply(Math, this.values),
              _ = [],
              g = n = 0,
              m = (w = this.values).length;
            g < m;
            g++
          ) {
            if ((c = w[g]) === o) {
              this.select(n);
              break;
            }
            _.push((n += 1));
          }
          return _;
        }),
        (f.prototype.setData = function (t) {
          var n;
          return (
            (this.data = t),
            (this.values = function () {
              for (var t = this.data, e = [], i = 0, r = t.length; i < r; i++)
                (n = t[i]), e.push(parseFloat(n.value));
              return e;
            }.call(this)),
            this.redraw()
          );
        }),
        (f.prototype.click = function (t) {
          return this.fire("click", t, this.data[t]);
        }),
        (f.prototype.select = function (t) {
          for (var e = this.segments, i = 0, r = e.length; i < r; i++)
            e[i].deselect();
          return (
            this.segments[t].select(),
            (t = this.data[t]),
            this.setLabels(t.label, this.options.formatter(t.value, t))
          );
        }),
        (f.prototype.setLabels = function (t, e) {
          var i =
              (2 * (Math.min(this.el.width() / 2, this.el.height() / 2) - 10)) /
              3,
            r = 1.8 * i,
            n = i / 2,
            i = i / 3;
          return (
            this.text1.attr({ text: t, transform: "" }),
            (t = this.text1.getBBox()),
            (n = Math.min(r / t.width, n / t.height)),
            this.text1.attr({
              transform:
                "S" +
                n +
                "," +
                n +
                "," +
                (t.x + t.width / 2) +
                "," +
                (t.y + t.height),
            }),
            this.text2.attr({ text: e, transform: "" }),
            (n = this.text2.getBBox()),
            (t = Math.min(r / n.width, i / n.height)),
            this.text2.attr({
              transform:
                "S" + t + "," + t + "," + (n.x + n.width / 2) + "," + n.y,
            })
          );
        }),
        (f.prototype.drawEmptyDonutLabel = function (t, e, i, r, n) {
          t = this.raphael.text(t, e, "").attr("font-size", r).attr("fill", i);
          return null != n && t.attr("font-weight", n), t;
        }),
        (f.prototype.resizeHandler = function () {
          return (
            (this.timeoutId = null),
            this.raphael.setSize(this.el.width(), this.el.height()),
            this.redraw()
          );
        }),
        f)),
      (k.DonutSegment =
        ((i = k.EventEmitter),
        t(g, i),
        (g.prototype.calcArcPoints = function (t) {
          return [
            this.cx + t * this.sin_p0,
            this.cy + t * this.cos_p0,
            this.cx + t * this.sin_p1,
            this.cy + t * this.cos_p1,
          ];
        }),
        (g.prototype.calcSegment = function (t, e) {
          var i = this.calcArcPoints(t),
            r = i[0],
            n = i[1],
            s = i[2],
            i = i[3],
            o = this.calcArcPoints(e),
            a = o[0],
            h = o[1],
            l = o[2],
            o = o[3];
          return (
            "M" +
            r +
            "," +
            n +
            "A" +
            t +
            "," +
            t +
            ",0," +
            this.is_long +
            ",0," +
            s +
            "," +
            i +
            "L" +
            l +
            "," +
            o +
            "A" +
            e +
            "," +
            e +
            ",0," +
            this.is_long +
            ",1," +
            a +
            "," +
            h +
            "Z"
          );
        }),
        (g.prototype.calcArc = function (t) {
          var e = this.calcArcPoints(t),
            i = e[0],
            r = e[1],
            n = e[2],
            e = e[3];
          return (
            "M" +
            i +
            "," +
            r +
            "A" +
            t +
            "," +
            t +
            ",0," +
            this.is_long +
            ",0," +
            n +
            "," +
            e
          );
        }),
        (g.prototype.render = function () {
          var t = this;
          return (
            (this.arc = this.drawDonutArc(this.hilight, this.color)),
            (this.seg = this.drawDonutSegment(
              this.path,
              this.color,
              this.backgroundColor,
              function () {
                return t.fire("hover", t.index);
              },
              function () {
                return t.fire("click", t.index);
              }
            ))
          );
        }),
        (g.prototype.drawDonutArc = function (t, e) {
          return this.raphael
            .path(t)
            .attr({ stroke: e, "stroke-width": 2, opacity: 0 });
        }),
        (g.prototype.drawDonutSegment = function (t, e, i, r, n) {
          return this.raphael
            .path(t)
            .attr({ fill: e, stroke: i, "stroke-width": 3 })
            .hover(r)
            .click(n);
        }),
        (g.prototype.select = function () {
          if (!this.selected)
            return (
              this.seg.animate({ path: this.selectedPath }, 150, "<>"),
              this.arc.animate({ opacity: 1 }, 150, "<>"),
              (this.selected = !0)
            );
        }),
        (g.prototype.deselect = function () {
          if (this.selected)
            return (
              this.seg.animate({ path: this.path }, 150, "<>"),
              this.arc.animate({ opacity: 0 }, 150, "<>"),
              (this.selected = !1)
            );
        }),
        g));
  }.call(this);
