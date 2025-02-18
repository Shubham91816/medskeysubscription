!(function (r) {
  (r.color = {}),
    (r.color.make = function (e, t, i, o) {
      var n = {};
      return (
        (n.r = e || 0),
        (n.g = t || 0),
        (n.b = i || 0),
        (n.a = null != o ? o : 1),
        (n.add = function (e, t) {
          for (var i = 0; i < e.length; ++i) n[e.charAt(i)] += t;
          return n.normalize();
        }),
        (n.scale = function (e, t) {
          for (var i = 0; i < e.length; ++i) n[e.charAt(i)] *= t;
          return n.normalize();
        }),
        (n.toString = function () {
          return 1 <= n.a
            ? "rgb(" + [n.r, n.g, n.b].join(",") + ")"
            : "rgba(" + [n.r, n.g, n.b, n.a].join(",") + ")";
        }),
        (n.normalize = function () {
          function e(e, t, i) {
            return t < e ? e : i < t ? i : t;
          }
          return (
            (n.r = e(0, parseInt(n.r), 255)),
            (n.g = e(0, parseInt(n.g), 255)),
            (n.b = e(0, parseInt(n.b), 255)),
            (n.a = e(0, n.a, 1)),
            n
          );
        }),
        (n.clone = function () {
          return r.color.make(n.r, n.b, n.g, n.a);
        }),
        n.normalize()
      );
    }),
    (r.color.extract = function (e, t) {
      for (
        var i;
        ("" == (i = e.css(t).toLowerCase()) || "transparent" == i) &&
        (e = e.parent()).length &&
        !r.nodeName(e.get(0), "body");

      );
      return r.color.parse((i = "rgba(0, 0, 0, 0)" == i ? "transparent" : i));
    }),
    (r.color.parse = function (e) {
      var t,
        i = r.color.make;
      return (t =
        /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(
          e
        ))
        ? i(parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3], 10))
        : (t =
            /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(
              e
            ))
        ? i(
            parseInt(t[1], 10),
            parseInt(t[2], 10),
            parseInt(t[3], 10),
            parseFloat(t[4])
          )
        : (t =
            /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(
              e
            ))
        ? i(
            2.55 * parseFloat(t[1]),
            2.55 * parseFloat(t[2]),
            2.55 * parseFloat(t[3])
          )
        : (t =
            /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(
              e
            ))
        ? i(
            2.55 * parseFloat(t[1]),
            2.55 * parseFloat(t[2]),
            2.55 * parseFloat(t[3]),
            parseFloat(t[4])
          )
        : (t = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(e))
        ? i(parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16))
        : (t = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(e))
        ? i(
            parseInt(t[1] + t[1], 16),
            parseInt(t[2] + t[2], 16),
            parseInt(t[3] + t[3], 16)
          )
        : "transparent" == (e = r.trim(e).toLowerCase())
        ? i(255, 255, 255, 0)
        : i((t = o[e] || [0, 0, 0])[0], t[1], t[2]);
    });
  var o = {
    aqua: [0, 255, 255],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    black: [0, 0, 0],
    blue: [0, 0, 255],
    brown: [165, 42, 42],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgrey: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkviolet: [148, 0, 211],
    fuchsia: [255, 0, 255],
    gold: [255, 215, 0],
    green: [0, 128, 0],
    indigo: [75, 0, 130],
    khaki: [240, 230, 140],
    lightblue: [173, 216, 230],
    lightcyan: [224, 255, 255],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    navy: [0, 0, 128],
    olive: [128, 128, 0],
    orange: [255, 165, 0],
    pink: [255, 192, 203],
    purple: [128, 0, 128],
    violet: [128, 0, 128],
    red: [255, 0, 0],
    silver: [192, 192, 192],
    white: [255, 255, 255],
    yellow: [255, 255, 0],
  };
})(jQuery),
  (function ($) {
    var f = Object.prototype.hasOwnProperty;
    function K(e, t) {
      var i = t.children("." + e)[0];
      if (
        null == i &&
        (((i = document.createElement("canvas")).className = e),
        $(i)
          .css({ direction: "ltr", position: "absolute", left: 0, top: 0 })
          .appendTo(t),
        !i.getContext)
      ) {
        if (!window.G_vmlCanvasManager)
          throw new Error(
            "Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode."
          );
        i = window.G_vmlCanvasManager.initElement(i);
      }
      this.element = i;
      (e = this.context = i.getContext("2d")),
        (i = window.devicePixelRatio || 1),
        (e =
          e.webkitBackingStorePixelRatio ||
          e.mozBackingStorePixelRatio ||
          e.msBackingStorePixelRatio ||
          e.oBackingStorePixelRatio ||
          e.backingStorePixelRatio ||
          1);
      (this.pixelRatio = i / e),
        this.resize(t.width(), t.height()),
        (this.textContainer = null),
        (this.text = {}),
        (this._textCache = {});
    }
    function o(y, C, e, t) {
      var H = [],
        L = {
          colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
          legend: {
            show: !0,
            noColumns: 1,
            labelFormatter: null,
            labelBoxBorderColor: "#ccc",
            container: null,
            position: "ne",
            margin: 5,
            backgroundColor: null,
            backgroundOpacity: 0.85,
            sorted: null,
          },
          xaxis: {
            show: null,
            position: "bottom",
            mode: null,
            font: null,
            color: null,
            tickColor: null,
            transform: null,
            inverseTransform: null,
            min: null,
            max: null,
            autoscaleMargin: null,
            ticks: null,
            tickFormatter: null,
            labelWidth: null,
            labelHeight: null,
            reserveSpace: null,
            tickLength: null,
            alignTicksWithAxis: null,
            tickDecimals: null,
            tickSize: null,
            minTickSize: null,
          },
          yaxis: { autoscaleMargin: 0.02, position: "left" },
          xaxes: [],
          yaxes: [],
          series: {
            points: {
              show: !1,
              radius: 3,
              lineWidth: 2,
              fill: !0,
              fillColor: "#ffffff",
              symbol: "circle",
            },
            lines: { lineWidth: 2, fill: !1, fillColor: null, steps: !1 },
            bars: {
              show: !1,
              lineWidth: 2,
              barWidth: 1,
              fill: !0,
              fillColor: null,
              align: "left",
              horizontal: !1,
              zero: !0,
            },
            shadowSize: 3,
            highlightColor: null,
          },
          grid: {
            show: !0,
            aboveData: !1,
            color: "#545454",
            backgroundColor: null,
            borderColor: null,
            tickColor: null,
            margin: 0,
            labelMargin: 5,
            axisMargin: 8,
            borderWidth: 2,
            minBorderMargin: null,
            markings: null,
            markingsColor: "#f4f4f4",
            markingsLineWidth: 2,
            clickable: !1,
            hoverable: !1,
            autoHighlight: !0,
            mouseActiveRadius: 10,
          },
          interaction: { redrawOverlayInterval: 1e3 / 60 },
          hooks: {},
        },
        T = null,
        l = null,
        h = null,
        k = null,
        c = null,
        Y = [],
        j = [],
        w = { left: 0, right: 0, top: 0, bottom: 0 },
        M = 0,
        S = 0,
        E = {
          processOptions: [],
          processRawData: [],
          processDatapoints: [],
          processOffset: [],
          drawBackground: [],
          drawSeries: [],
          draw: [],
          bindEvents: [],
          drawOverlay: [],
          shutdown: [],
        },
        z = this;
      (z.setData = d),
        (z.setupGrid = P),
        (z.draw = W),
        (z.getPlaceholder = function () {
          return y;
        }),
        (z.getCanvas = function () {
          return T.element;
        }),
        (z.getPlotOffset = function () {
          return w;
        }),
        (z.width = function () {
          return M;
        }),
        (z.height = function () {
          return S;
        }),
        (z.offset = function () {
          var e = h.offset();
          return (e.left += w.left), (e.top += w.top), e;
        }),
        (z.getData = function () {
          return H;
        }),
        (z.getAxes = function () {
          var i = {};
          return (
            $.each(Y.concat(j), function (e, t) {
              t && (i[t.direction + (1 != t.n ? t.n : "") + "axis"] = t);
            }),
            i
          );
        }),
        (z.getXAxes = function () {
          return Y;
        }),
        (z.getYAxes = function () {
          return j;
        }),
        (z.c2p = f),
        (z.p2c = function (e) {
          var t,
            i,
            o,
            n = {};
          for (t = 0; t < Y.length; ++t)
            if (
              (i = Y[t]) &&
              i.used &&
              ((o = "x" + i.n),
              null == e[o] && 1 == i.n && (o = "x"),
              null != e[o])
            ) {
              n.left = i.p2c(e[o]);
              break;
            }
          for (t = 0; t < j.length; ++t)
            if (
              (i = j[t]) &&
              i.used &&
              ((o = "y" + i.n),
              null == e[o] && 1 == i.n && (o = "y"),
              null != e[o])
            ) {
              n.top = i.p2c(e[o]);
              break;
            }
          return n;
        }),
        (z.getOptions = function () {
          return L;
        }),
        (z.highlight = Q),
        (z.unhighlight = J),
        (z.triggerRedrawOverlay = v),
        (z.pointOffset = function (e) {
          return {
            left: parseInt(Y[G(e, "x") - 1].p2c(+e.x) + w.left, 10),
            top: parseInt(j[G(e, "y") - 1].p2c(+e.y) + w.top, 10),
          };
        }),
        (z.shutdown = p),
        (z.destroy = function () {
          p(),
            y.removeData("plot").empty(),
            (H = []),
            (Y = []),
            (j = []),
            (m = []),
            (z = E = c = k = h = l = T = L = null);
        }),
        (z.resize = function () {
          var e = y.width(),
            t = y.height();
          T.resize(e, t), l.resize(e, t);
        }),
        (z.hooks = E);
      for (var A = { Canvas: K }, i = 0; i < t.length; ++i) {
        var o = t[i];
        o.init(z, A), o.options && $.extend(!0, L, o.options);
      }
      $.extend(!0, L, e),
        e && e.colors && (L.colors = e.colors),
        null == L.xaxis.color &&
          (L.xaxis.color = $.color
            .parse(L.grid.color)
            .scale("a", 0.22)
            .toString()),
        null == L.yaxis.color &&
          (L.yaxis.color = $.color
            .parse(L.grid.color)
            .scale("a", 0.22)
            .toString()),
        null == L.xaxis.tickColor &&
          (L.xaxis.tickColor = L.grid.tickColor || L.xaxis.color),
        null == L.yaxis.tickColor &&
          (L.yaxis.tickColor = L.grid.tickColor || L.yaxis.color),
        null == L.grid.borderColor && (L.grid.borderColor = L.grid.color),
        null == L.grid.tickColor &&
          (L.grid.tickColor = $.color
            .parse(L.grid.color)
            .scale("a", 0.22)
            .toString());
      var n,
        r,
        a,
        s,
        e = (e = y.css("font-size")) ? +e.replace("px", "") : 13,
        u = {
          style: y.css("font-style"),
          size: Math.round(0.8 * e),
          variant: y.css("font-variant"),
          weight: y.css("font-weight"),
          family: y.css("font-family"),
        };
      for (a = L.xaxes.length || 1, n = 0; n < a; ++n)
        (r = L.xaxes[n]) && !r.tickColor && (r.tickColor = r.color),
          (r = $.extend(!0, {}, L.xaxis, r)),
          (L.xaxes[n] = r).font &&
            ((r.font = $.extend({}, u, r.font)),
            r.font.color || (r.font.color = r.color),
            r.font.lineHeight ||
              (r.font.lineHeight = Math.round(1.15 * r.font.size)));
      for (a = L.yaxes.length || 1, n = 0; n < a; ++n)
        (r = L.yaxes[n]) && !r.tickColor && (r.tickColor = r.color),
          (r = $.extend(!0, {}, L.yaxis, r)),
          (L.yaxes[n] = r).font &&
            ((r.font = $.extend({}, u, r.font)),
            r.font.color || (r.font.color = r.color),
            r.font.lineHeight ||
              (r.font.lineHeight = Math.round(1.15 * r.font.size)));
      for (
        L.xaxis.noTicks &&
          null == L.xaxis.ticks &&
          (L.xaxis.ticks = L.xaxis.noTicks),
          L.yaxis.noTicks &&
            null == L.yaxis.ticks &&
            (L.yaxis.ticks = L.yaxis.noTicks),
          L.x2axis &&
            ((L.xaxes[1] = $.extend(!0, {}, L.xaxis, L.x2axis)),
            (L.xaxes[1].position = "top"),
            null == L.x2axis.min && (L.xaxes[1].min = null),
            null == L.x2axis.max) &&
            (L.xaxes[1].max = null),
          L.y2axis &&
            ((L.yaxes[1] = $.extend(!0, {}, L.yaxis, L.y2axis)),
            (L.yaxes[1].position = "right"),
            null == L.y2axis.min && (L.yaxes[1].min = null),
            null == L.y2axis.max) &&
            (L.yaxes[1].max = null),
          L.grid.coloredAreas && (L.grid.markings = L.grid.coloredAreas),
          L.grid.coloredAreasColor &&
            (L.grid.markingsColor = L.grid.coloredAreasColor),
          L.lines && $.extend(!0, L.series.lines, L.lines),
          L.points && $.extend(!0, L.series.points, L.points),
          L.bars && $.extend(!0, L.series.bars, L.bars),
          null != L.shadowSize && (L.series.shadowSize = L.shadowSize),
          null != L.highlightColor &&
            (L.series.highlightColor = L.highlightColor),
          n = 0;
        n < L.xaxes.length;
        ++n
      )
        _(Y, n + 1).options = L.xaxes[n];
      for (n = 0; n < L.yaxes.length; ++n) _(j, n + 1).options = L.yaxes[n];
      for (s in E)
        L.hooks[s] && L.hooks[s].length && (E[s] = E[s].concat(L.hooks[s]));
      B(E.processOptions, [L]),
        y
          .css("padding", 0)
          .children()
          .filter(function () {
            return (
              !$(this).hasClass("flot-overlay") &&
              !$(this).hasClass("flot-base")
            );
          })
          .remove(),
        "static" == y.css("position") && y.css("position", "relative"),
        (T = new K("flot-base", y)),
        (l = new K("flot-overlay", y)),
        (k = T.context),
        (c = l.context),
        (h = $(l.element).unbind());
      e = y.data("plot");
      function B(e, t) {
        t = [z].concat(t);
        for (var i = 0; i < e.length; ++i) e[i].apply(this, t);
      }
      function d(R) {
        var e,
          t = (H = (function (e) {
            for (var t = [], i = 0; i < e.length; ++i) {
              var o = $.extend(!0, {}, L.series);
              null != e[i].data
                ? ((o.data = e[i].data),
                  delete e[i].data,
                  $.extend(!0, o, e[i]),
                  (e[i].data = o.data))
                : (o.data = e[i]),
                t.push(o);
            }
            return t;
          })(R)).length,
          i = -1;
        for (e = 0; e < H.length; ++e) {
          var o = H[e].color;
          null != o && (t--, "number" == typeof o) && i < o && (i = o);
        }
        t <= i && (t = i + 1);
        var n,
          r = [],
          a = L.colors,
          s = a.length,
          l = 0;
        for (e = 0; e < t; e++)
          (n = $.color.parse(a[e % s] || "#666")),
            e % s == 0 && e && (l = 0 <= l ? (l < 0.5 ? -l - 0.2 : 0) : -l),
            (r[e] = n.scale("rgb", 1 + l));
        var c,
          h = 0;
        for (e = 0; e < H.length; ++e) {
          if (
            (null == (c = H[e]).color
              ? ((c.color = r[h].toString()), ++h)
              : "number" == typeof c.color && (c.color = r[c.color].toString()),
            null == c.lines.show)
          ) {
            var u,
              d = !0;
            for (u in c)
              if (c[u] && c[u].show) {
                d = !1;
                break;
              }
            d && (c.lines.show = !0);
          }
          null == c.lines.zero && (c.lines.zero = !!c.lines.fill),
            (c.xaxis = _(Y, G(c, "x"))),
            (c.yaxis = _(j, G(c, "y")));
        }
        var f,
          p,
          g,
          m,
          x,
          b,
          v,
          k,
          y,
          w,
          M,
          S,
          T,
          z,
          C = Number.POSITIVE_INFINITY,
          A = Number.NEGATIVE_INFINITY,
          P = Number.MAX_VALUE;
        function W(e, t, i) {
          t < e.datamin && t != -P && (e.datamin = t),
            i > e.datamax && i != P && (e.datamax = i);
        }
        for (
          $.each(X(), function (e, t) {
            (t.datamin = C), (t.datamax = A), (t.used = !1);
          }),
            f = 0;
          f < H.length;
          ++f
        )
          ((x = H[f]).datapoints = { points: [] }),
            B(E.processRawData, [x, x.data, x.datapoints]);
        for (f = 0; f < H.length; ++f)
          if (
            ((x = H[f]),
            (M = x.data),
            (S = x.datapoints.format) ||
              ((S = []).push({ x: !0, number: !0, required: !0 }),
              S.push({ y: !0, number: !0, required: !0 }),
              (x.bars.show || (x.lines.show && x.lines.fill)) &&
                ((z = !!(
                  (x.bars.show && x.bars.zero) ||
                  (x.lines.show && x.lines.zero)
                )),
                S.push({
                  y: !0,
                  number: !0,
                  required: !1,
                  defaultValue: 0,
                  autoscale: z,
                }),
                x.bars.horizontal) &&
                (delete S[S.length - 1].y, (S[S.length - 1].x = !0)),
              (x.datapoints.format = S)),
            null == x.datapoints.pointsize)
          ) {
            (x.datapoints.pointsize = S.length),
              (v = x.datapoints.pointsize),
              (b = x.datapoints.points);
            var q = x.lines.show && x.lines.steps;
            for (
              x.xaxis.used = x.yaxis.used = !0, p = g = 0;
              p < M.length;
              ++p, g += v
            ) {
              var I = null == (w = M[p]);
              if (!I)
                for (m = 0; m < v; ++m)
                  (k = w[m]),
                    (y = S[m]) &&
                      (y.number &&
                        null != k &&
                        ((k = +k),
                        isNaN(k)
                          ? (k = null)
                          : k == 1 / 0
                          ? (k = P)
                          : k == -1 / 0 && (k = -P)),
                      null == k) &&
                      (y.required && (I = !0), null != y.defaultValue) &&
                      (k = y.defaultValue),
                    (b[g + m] = k);
              if (I)
                for (m = 0; m < v; ++m)
                  null != (k = b[g + m]) &&
                    !1 !== (y = S[m]).autoscale &&
                    (y.x && W(x.xaxis, k, k), y.y) &&
                    W(x.yaxis, k, k),
                    (b[g + m] = null);
              else if (
                q &&
                0 < g &&
                null != b[g - v] &&
                b[g - v] != b[g] &&
                b[g - v + 1] != b[g + 1]
              ) {
                for (m = 0; m < v; ++m) b[g + v + m] = b[g + m];
                (b[g + 1] = b[g - v + 1]), (g += v);
              }
            }
          }
        for (f = 0; f < H.length; ++f)
          (x = H[f]), B(E.processDatapoints, [x, x.datapoints]);
        for (f = 0; f < H.length; ++f) {
          (x = H[f]),
            (b = x.datapoints.points),
            (v = x.datapoints.pointsize),
            (S = x.datapoints.format);
          var F = C,
            O = C,
            D = A,
            N = A;
          for (p = 0; p < b.length; p += v)
            if (null != b[p])
              for (m = 0; m < v; ++m)
                (k = b[p + m]),
                  (y = S[m]) &&
                    !1 !== y.autoscale &&
                    k != P &&
                    k != -P &&
                    (y.x && (k < F && (F = k), D < k) && (D = k), y.y) &&
                    (k < O && (O = k), N < k) &&
                    (N = k);
          if (x.bars.show) {
            switch (x.bars.align) {
              case "left":
                T = 0;
                break;
              case "right":
                T = -x.bars.barWidth;
                break;
              default:
                T = -x.bars.barWidth / 2;
            }
            x.bars.horizontal
              ? ((O += T), (N += T + x.bars.barWidth))
              : ((F += T), (D += T + x.bars.barWidth));
          }
          W(x.xaxis, F, D), W(x.yaxis, O, N);
        }
        $.each(X(), function (e, t) {
          t.datamin == C && (t.datamin = null),
            t.datamax == A && (t.datamax = null);
        });
      }
      function G(e, t) {
        e = e[t + "axis"];
        return (e =
          "number" != typeof (e = "object" == typeof e ? e.n : e) ? 1 : e);
      }
      function X() {
        return $.grep(Y.concat(j), function (e) {
          return e;
        });
      }
      function f(e) {
        for (var t, i = {}, o = 0; o < Y.length; ++o)
          (t = Y[o]) && t.used && (i["x" + t.n] = t.c2p(e.left));
        for (o = 0; o < j.length; ++o)
          (t = j[o]) && t.used && (i["y" + t.n] = t.c2p(e.top));
        return (
          void 0 !== i.x1 && (i.x = i.x1), void 0 !== i.y1 && (i.y = i.y1), i
        );
      }
      function _(e, t) {
        return (
          e[t - 1] ||
            (e[t - 1] = {
              n: t,
              direction: e == Y ? "x" : "y",
              options: $.extend(!0, {}, e == Y ? L.xaxis : L.yaxis),
            }),
          e[t - 1]
        );
      }
      function p() {
        x && clearTimeout(x),
          h.unbind("mousemove", D),
          h.unbind("mouseleave", N),
          h.unbind("click", R),
          B(E.shutdown, [h]);
      }
      function P() {
        var e,
          t,
          i = X(),
          o = L.grid.show;
        for (t in w) {
          var n = L.grid.margin || 0;
          w[t] = "number" == typeof n ? n : n[t] || 0;
        }
        for (t in (B(E.processOffset, [w]), w))
          "object" == typeof L.grid.borderWidth
            ? (w[t] += o ? L.grid.borderWidth[t] : 0)
            : (w[t] += o ? L.grid.borderWidth : 0);
        if (
          ($.each(i, function (e, t) {
            var i,
              o = t.options,
              o =
                ((t.show = null == o.show ? t.used : o.show),
                (t.reserveSpace =
                  null == o.reserveSpace ? t.show : o.reserveSpace),
                t),
              t = o.options,
              n = +(null != t.min ? t.min : o.datamin),
              r = +(null != t.max ? t.max : o.datamax),
              a = r - n;
            0 == a
              ? ((i = 0 == r ? 1 : 0.01),
                null == t.min && (n -= i),
                (null != t.max && null == t.min) || (r += i))
              : null != (i = t.autoscaleMargin) &&
                (null == t.min &&
                  (n -= a * i) < 0 &&
                  null != o.datamin &&
                  0 <= o.datamin &&
                  (n = 0),
                null == t.max) &&
                0 < (r += a * i) &&
                null != o.datamax &&
                o.datamax <= 0 &&
                (r = 0),
              (o.min = n),
              (o.max = r);
          }),
          o)
        ) {
          var r = $.grep(i, function (e) {
            return e.show || e.reserveSpace;
          });
          for (
            $.each(r, function (e, t) {
              var i = t,
                o = i.options,
                n =
                  ((n =
                    "number" == typeof o.ticks && 0 < o.ticks
                      ? o.ticks
                      : 0.3 *
                        Math.sqrt("x" == i.direction ? T.width : T.height)),
                  (i.max - i.min) / n),
                r = -Math.floor(Math.log(n) / Math.LN10),
                a = o.tickDecimals;
              null != a && a < r && (r = a);
              var s,
                l = Math.pow(10, -r),
                c = n / l;
              if (
                (c < 1.5
                  ? (d = 1)
                  : c < 3
                  ? ((d = 2),
                    2.25 < c && (null == a || r + 1 <= a) && ((d = 2.5), ++r))
                  : (d = c < 7.5 ? 5 : 10),
                (d *= l),
                null != o.minTickSize &&
                  d < o.minTickSize &&
                  (d = o.minTickSize),
                (i.delta = n),
                (i.tickDecimals = Math.max(0, null != a ? a : r)),
                (i.tickSize = o.tickSize || d),
                "time" == o.mode && !i.tickGenerator)
              )
                throw new Error("Time mode requires the flot.time plugin.");
              i.tickGenerator ||
                ((i.tickGenerator = function (e) {
                  for (
                    var t,
                      i,
                      o,
                      n = [],
                      r = ((i = e.min), (o = e.tickSize) * Math.floor(i / o)),
                      a = 0,
                      s = Number.NaN;
                    (t = s),
                      (s = r + a * e.tickSize),
                      n.push(s),
                      ++a,
                      s < e.max && s != t;

                  );
                  return n;
                }),
                (i.tickFormatter = function (e, t) {
                  var i = t.tickDecimals ? Math.pow(10, t.tickDecimals) : 1,
                    e = "" + Math.round(e * i) / i;
                  if (null != t.tickDecimals) {
                    var o = e.indexOf("."),
                      o = -1 == o ? 0 : e.length - o - 1;
                    if (o < t.tickDecimals)
                      return (
                        (o ? e : e + ".") +
                        ("" + i).substr(1, t.tickDecimals - o)
                      );
                  }
                  return e;
                })),
                $.isFunction(o.tickFormatter) &&
                  (i.tickFormatter = function (e, t) {
                    return "" + o.tickFormatter(e, t);
                  }),
                null != o.alignTicksWithAxis &&
                  (s = ("x" == i.direction ? Y : j)[
                    o.alignTicksWithAxis - 1
                  ]) &&
                  s.used &&
                  s != i &&
                  (0 < (c = i.tickGenerator(i)).length &&
                    (null == o.min && (i.min = Math.min(i.min, c[0])),
                    null == o.max) &&
                    1 < c.length &&
                    (i.max = Math.max(i.max, c[c.length - 1])),
                  (i.tickGenerator = function (e) {
                    for (var t, i = [], o = 0; o < s.ticks.length; ++o)
                      (t = (s.ticks[o].v - s.min) / (s.max - s.min)),
                        (t = e.min + t * (e.max - e.min)),
                        i.push(t);
                    return i;
                  }),
                  i.mode ||
                    null != o.tickDecimals ||
                    ((l = Math.max(
                      0,
                      1 - Math.floor(Math.log(i.delta) / Math.LN10)
                    )),
                    1 < (n = i.tickGenerator(i)).length &&
                      /\..*0$/.test((n[1] - n[0]).toFixed(l))) ||
                    (i.tickDecimals = l));
              var h,
                u,
                d,
                f = t,
                a = f.options.ticks,
                p = [];
              for (
                null == a || ("number" == typeof a && 0 < a)
                  ? (p = f.tickGenerator(f))
                  : a && (p = $.isFunction(a) ? a(f) : a),
                  f.ticks = [],
                  h = 0;
                h < p.length;
                ++h
              ) {
                var g = null,
                  m = p[h];
                "object" == typeof m
                  ? ((u = +m[0]), 1 < m.length && (g = m[1]))
                  : (u = +m),
                  null == g && (g = f.tickFormatter(u, f)),
                  isNaN(u) || f.ticks.push({ v: u, label: g });
              }
              (d = (r = t).ticks),
                r.options.autoscaleMargin &&
                  0 < d.length &&
                  (null == r.options.min && (r.min = Math.min(r.min, d[0].v)),
                  null == r.options.max) &&
                  1 < d.length &&
                  (r.max = Math.max(r.max, d[d.length - 1].v));
              for (
                var c = t,
                  n = c.options,
                  x = c.ticks || [],
                  b = n.labelWidth || 0,
                  v = n.labelHeight || 0,
                  k =
                    b ||
                    ("x" == c.direction
                      ? Math.floor(T.width / (x.length || 1))
                      : null),
                  i = c.direction + "Axis " + c.direction + c.n + "Axis",
                  y =
                    "flot-" +
                    c.direction +
                    "-axis flot-" +
                    c.direction +
                    c.n +
                    "-axis " +
                    i,
                  w = n.font || "flot-tick-label tickLabel",
                  M = 0;
                M < x.length;
                ++M
              ) {
                var S = x[M];
                S.label &&
                  ((S = T.getTextInfo(y, S.label, w, null, k)),
                  (b = Math.max(b, S.width)),
                  (v = Math.max(v, S.height)));
              }
              (c.labelWidth = n.labelWidth || b),
                (c.labelHeight = n.labelHeight || v);
            }),
              e = r.length - 1;
            0 <= e;
            --e
          )
            !(function (i) {
              var e = i.labelWidth,
                t = i.labelHeight,
                o = i.options.position,
                n = "x" === i.direction,
                r = i.options.tickLength,
                a = L.grid.axisMargin,
                s = L.grid.labelMargin,
                l = !0,
                c = !0,
                h = !0,
                u = !1;
              $.each(n ? Y : j, function (e, t) {
                t &&
                  (t.show || t.reserveSpace) &&
                  (t === i
                    ? (u = !0)
                    : t.options.position === o && (u ? (c = !1) : (l = !1)),
                  u || (h = !1));
              }),
                c && (a = 0),
                null == r && (r = h ? "full" : 5),
                isNaN(+r) || (s += +r),
                n
                  ? ((t += s),
                    "bottom" == o
                      ? ((w.bottom += t + a),
                        (i.box = { top: T.height - w.bottom, height: t }))
                      : ((i.box = { top: w.top + a, height: t }),
                        (w.top += t + a)))
                  : ((e += s),
                    "left" == o
                      ? ((i.box = { left: w.left + a, width: e }),
                        (w.left += e + a))
                      : ((w.right += e + a),
                        (i.box = { left: T.width - w.right, width: e }))),
                (i.position = o),
                (i.tickLength = r),
                (i.box.padding = s),
                (i.innermost = l);
            })(r[e]);
          var a,
            s = L.grid.minBorderMargin;
          if (null == s)
            for (a = s = 0; a < H.length; ++a)
              s = Math.max(
                s,
                2 * (H[a].points.radius + H[a].points.lineWidth / 2)
              );
          var l = { left: s, right: s, top: s, bottom: s };
          $.each(X(), function (e, t) {
            t.reserveSpace &&
              t.ticks &&
              t.ticks.length &&
              ("x" === t.direction
                ? ((l.left = Math.max(l.left, t.labelWidth / 2)),
                  (l.right = Math.max(l.right, t.labelWidth / 2)))
                : ((l.bottom = Math.max(l.bottom, t.labelHeight / 2)),
                  (l.top = Math.max(l.top, t.labelHeight / 2))));
          }),
            (w.left = Math.ceil(Math.max(l.left, w.left))),
            (w.right = Math.ceil(Math.max(l.right, w.right))),
            (w.top = Math.ceil(Math.max(l.top, w.top))),
            (w.bottom = Math.ceil(Math.max(l.bottom, w.bottom))),
            $.each(r, function (e, t) {
              "x" == (t = t).direction
                ? ((t.box.left = w.left - t.labelWidth / 2),
                  (t.box.width = T.width - w.left - w.right + t.labelWidth))
                : ((t.box.top = w.top - t.labelHeight / 2),
                  (t.box.height = T.height - w.bottom - w.top + t.labelHeight));
            });
        }
        if (
          ((M = T.width - w.left - w.right),
          (S = T.height - w.bottom - w.top),
          $.each(i, function (e, t) {
            function i(e) {
              return e;
            }
            var o, n, r, a;
            (n = (t = t).options.transform || i),
              (r = t.options.inverseTransform),
              (a =
                "x" == t.direction
                  ? ((o = t.scale = M / Math.abs(n(t.max) - n(t.min))),
                    Math.min(n(t.max), n(t.min)))
                  : ((o = -(o = t.scale = S / Math.abs(n(t.max) - n(t.min)))),
                    Math.max(n(t.max), n(t.min)))),
              (t.p2c =
                n == i
                  ? function (e) {
                      return (e - a) * o;
                    }
                  : function (e) {
                      return (n(e) - a) * o;
                    }),
              (t.c2p = r
                ? function (e) {
                    return r(a + e / o);
                  }
                : function (e) {
                    return a + e / o;
                  });
          }),
          o &&
            $.each(X(), function (e, t) {
              var i,
                o,
                n,
                r,
                a,
                s = t.box,
                l = t.direction + "Axis " + t.direction + t.n + "Axis",
                c =
                  "flot-" +
                  t.direction +
                  "-axis flot-" +
                  t.direction +
                  t.n +
                  "-axis " +
                  l,
                h = t.options.font || "flot-tick-label tickLabel";
              if ((T.removeText(c), t.show && 0 != t.ticks.length))
                for (var u = 0; u < t.ticks.length; ++u)
                  !(i = t.ticks[u]).label ||
                    i.v < t.min ||
                    i.v > t.max ||
                    ("x" == t.direction
                      ? ((r = "center"),
                        (o = w.left + t.p2c(i.v)),
                        "bottom" == t.position
                          ? (n = s.top + s.padding)
                          : ((n = s.top + s.height - s.padding),
                            (a = "bottom")))
                      : ((a = "middle"),
                        (n = w.top + t.p2c(i.v)),
                        "left" == t.position
                          ? ((o = s.left + s.width - s.padding), (r = "right"))
                          : (o = s.left + s.padding)),
                    T.addText(c, o, n, i.label, h, null, null, r, a));
            }),
          null != L.legend.container
            ? $(L.legend.container).html("")
            : y.find(".legend").remove(),
          L.legend.show)
        ) {
          for (
            var c,
              h,
              u,
              d = [],
              f = [],
              p = !1,
              g = L.legend.labelFormatter,
              m = 0;
            m < H.length;
            ++m
          )
            (c = H[m]).label &&
              (h = g ? g(c.label, c) : c.label) &&
              f.push({ label: h, color: c.color });
          L.legend.sorted &&
            ($.isFunction(L.legend.sorted)
              ? f.sort(L.legend.sorted)
              : "reverse" == L.legend.sorted
              ? f.reverse()
              : ((u = "descending" != L.legend.sorted),
                f.sort(function (e, t) {
                  return e.label == t.label
                    ? 0
                    : e.label < t.label != u
                    ? 1
                    : -1;
                })));
          for (var x, b, v, m = 0; m < f.length; ++m) {
            var k = f[m];
            m % L.legend.noColumns == 0 &&
              (p && d.push("</tr>"), d.push("<tr>"), (p = !0)),
              d.push(
                '<td class="legendColorBox"><div style="border:1px solid ' +
                  L.legend.labelBoxBorderColor +
                  ';padding:1px"><div style="width:4px;height:0;border:5px solid ' +
                  k.color +
                  ';overflow:hidden"></div></div></td><td class="legendLabel">' +
                  k.label +
                  "</td>"
              );
          }
          p && d.push("</tr>"),
            0 != d.length &&
              ((i =
                '<table style="font-size:smaller;color:' +
                L.grid.color +
                '">' +
                d.join("") +
                "</table>"),
              null != L.legend.container
                ? $(L.legend.container).html(i)
                : ((x = ""),
                  (b = L.legend.position),
                  null == (v = L.legend.margin)[0] && (v = [v, v]),
                  "n" == b.charAt(0)
                    ? (x += "top:" + (v[1] + w.top) + "px;")
                    : "s" == b.charAt(0) &&
                      (x += "bottom:" + (v[1] + w.bottom) + "px;"),
                  "e" == b.charAt(1)
                    ? (x += "right:" + (v[0] + w.right) + "px;")
                    : "w" == b.charAt(1) &&
                      (x += "left:" + (v[0] + w.left) + "px;"),
                  (b = $(
                    '<div class="legend">' +
                      i.replace(
                        'style="',
                        'style="position:absolute;' + x + ";"
                      ) +
                      "</div>"
                  ).appendTo(y)),
                  0 != L.legend.backgroundOpacity &&
                    (null == (v = L.legend.backgroundColor) &&
                      (((v =
                        (v = L.grid.backgroundColor) && "string" == typeof v
                          ? $.color.parse(v)
                          : $.color.extract(b, "background-color")).a = 1),
                      (v = v.toString())),
                    (i = b.children()),
                    $(
                      '<div style="position:absolute;width:' +
                        i.width() +
                        "px;height:" +
                        i.height() +
                        "px;" +
                        x +
                        "background-color:" +
                        v +
                        ';"> </div>'
                    )
                      .prependTo(b)
                      .css("opacity", L.legend.backgroundOpacity))));
        }
      }
      function W() {
        T.clear(), B(E.drawBackground, [k]);
        var e = L.grid;
        e.show &&
          e.backgroundColor &&
          (k.save(),
          k.translate(w.left, w.top),
          (k.fillStyle = U(
            L.grid.backgroundColor,
            S,
            0,
            "rgba(255, 255, 255, 0)"
          )),
          k.fillRect(0, 0, M, S),
          k.restore()),
          e.show && !e.aboveData && F();
        for (var t = 0; t < H.length; ++t) {
          B(E.drawSeries, [k, H[t]]), (i = void 0);
          var i = H[t];
          if (i.lines.show) {
            o = void 0;
            r = void 0;
            a = void 0;
            s = void 0;
            var o = i;
            var n = function (e, t, i, o, n) {
              var r = e.points,
                a = e.pointsize,
                s = null,
                l = null;
              k.beginPath();
              for (var c = a; c < r.length; c += a) {
                var h = r[c - a],
                  u = r[c - a + 1],
                  d = r[c],
                  f = r[c + 1];
                if (null != h && null != d) {
                  if (u <= f && u < n.min) {
                    if (f < n.min) continue;
                    (h = ((n.min - u) / (f - u)) * (d - h) + h), (u = n.min);
                  } else if (f <= u && f < n.min) {
                    if (u < n.min) continue;
                    (d = ((n.min - u) / (f - u)) * (d - h) + h), (f = n.min);
                  }
                  if (f <= u && u > n.max) {
                    if (f > n.max) continue;
                    (h = ((n.max - u) / (f - u)) * (d - h) + h), (u = n.max);
                  } else if (u <= f && f > n.max) {
                    if (u > n.max) continue;
                    (d = ((n.max - u) / (f - u)) * (d - h) + h), (f = n.max);
                  }
                  if (h <= d && h < o.min) {
                    if (d < o.min) continue;
                    (u = ((o.min - h) / (d - h)) * (f - u) + u), (h = o.min);
                  } else if (d <= h && d < o.min) {
                    if (h < o.min) continue;
                    (f = ((o.min - h) / (d - h)) * (f - u) + u), (d = o.min);
                  }
                  if (d <= h && h > o.max) {
                    if (d > o.max) continue;
                    (u = ((o.max - h) / (d - h)) * (f - u) + u), (h = o.max);
                  } else if (h <= d && d > o.max) {
                    if (h > o.max) continue;
                    (f = ((o.max - h) / (d - h)) * (f - u) + u), (d = o.max);
                  }
                  (h == s && u == l) || k.moveTo(o.p2c(h) + t, n.p2c(u) + i),
                    (s = d),
                    (l = f),
                    k.lineTo(o.p2c(d) + t, n.p2c(f) + i);
                }
              }
              k.stroke();
            };
            k.save(), k.translate(w.left, w.top), (k.lineJoin = "round");
            var r = o.lines.lineWidth,
              a = o.shadowSize;
            0 < r &&
              0 < a &&
              ((k.lineWidth = a),
              (k.strokeStyle = "rgba(0,0,0,0.1)"),
              (s = Math.PI / 18),
              n(
                o.datapoints,
                Math.sin(s) * (r / 2 + a / 2),
                Math.cos(s) * (r / 2 + a / 2),
                o.xaxis,
                o.yaxis
              ),
              (k.lineWidth = a / 2),
              n(
                o.datapoints,
                Math.sin(s) * (r / 2 + a / 4),
                Math.cos(s) * (r / 2 + a / 4),
                o.xaxis,
                o.yaxis
              ));
            (k.lineWidth = r), (k.strokeStyle = o.color);
            var s = g(o.lines, o.color, 0, S);
            s &&
              ((k.fillStyle = s),
              (function (e, t, i) {
                for (
                  var o = e.points,
                    n = e.pointsize,
                    r = Math.min(Math.max(0, i.min), i.max),
                    a = 0,
                    s = !1,
                    l = 1,
                    c = 0,
                    h = 0;
                  !(0 < n && a > o.length + n);

                ) {
                  var u,
                    d,
                    f = o[(a += n) - n],
                    p = o[a - n + l],
                    g = o[a],
                    m = o[a + l];
                  if (s) {
                    if (0 < n && null != f && null == g) {
                      (h = a), (n = -n), (l = 2);
                      continue;
                    }
                    if (n < 0 && a == c + n) {
                      k.fill(), (s = !1), (l = 1), (a = c = h + (n = -n));
                      continue;
                    }
                  }
                  if (null != f && null != g) {
                    if (f <= g && f < t.min) {
                      if (g < t.min) continue;
                      (p = ((t.min - f) / (g - f)) * (m - p) + p), (f = t.min);
                    } else if (g <= f && g < t.min) {
                      if (f < t.min) continue;
                      (m = ((t.min - f) / (g - f)) * (m - p) + p), (g = t.min);
                    }
                    if (g <= f && f > t.max) {
                      if (g > t.max) continue;
                      (p = ((t.max - f) / (g - f)) * (m - p) + p), (f = t.max);
                    } else if (f <= g && g > t.max) {
                      if (f > t.max) continue;
                      (m = ((t.max - f) / (g - f)) * (m - p) + p), (g = t.max);
                    }
                    s ||
                      (k.beginPath(), k.moveTo(t.p2c(f), i.p2c(r)), (s = !0)),
                      p >= i.max && m >= i.max
                        ? (k.lineTo(t.p2c(f), i.p2c(i.max)),
                          k.lineTo(t.p2c(g), i.p2c(i.max)))
                        : p <= i.min && m <= i.min
                        ? (k.lineTo(t.p2c(f), i.p2c(i.min)),
                          k.lineTo(t.p2c(g), i.p2c(i.min)))
                        : ((u = f),
                          (d = g),
                          p <= m && p < i.min && m >= i.min
                            ? ((f = ((i.min - p) / (m - p)) * (g - f) + f),
                              (p = i.min))
                            : m <= p &&
                              m < i.min &&
                              p >= i.min &&
                              ((g = ((i.min - p) / (m - p)) * (g - f) + f),
                              (m = i.min)),
                          m <= p && p > i.max && m <= i.max
                            ? ((f = ((i.max - p) / (m - p)) * (g - f) + f),
                              (p = i.max))
                            : p <= m &&
                              m > i.max &&
                              p <= i.max &&
                              ((g = ((i.max - p) / (m - p)) * (g - f) + f),
                              (m = i.max)),
                          f != u && k.lineTo(t.p2c(u), i.p2c(p)),
                          k.lineTo(t.p2c(f), i.p2c(p)),
                          k.lineTo(t.p2c(g), i.p2c(m)),
                          g != d &&
                            (k.lineTo(t.p2c(g), i.p2c(m)),
                            k.lineTo(t.p2c(d), i.p2c(m))));
                  }
                }
              })(o.datapoints, o.xaxis, o.yaxis));
            0 < r && n(o.datapoints, 0, 0, o.xaxis, o.yaxis);
            k.restore();
          }
          if (
            (i.bars.show &&
              !(function (c) {
                var e;
                switch (
                  (k.save(),
                  k.translate(w.left, w.top),
                  (k.lineWidth = c.bars.lineWidth),
                  (k.strokeStyle = c.color),
                  c.bars.align)
                ) {
                  case "left":
                    e = 0;
                    break;
                  case "right":
                    e = -c.bars.barWidth;
                    break;
                  default:
                    e = -c.bars.barWidth / 2;
                }
                var t = c.bars.fill
                  ? function (e, t) {
                      return g(c.bars, c.color, e, t);
                    }
                  : null;
                (function (e, t, i, o, n, r) {
                  for (
                    var a = e.points, s = e.pointsize, l = 0;
                    l < a.length;
                    l += s
                  )
                    null != a[l] &&
                      O(
                        a[l],
                        a[l + 1],
                        a[l + 2],
                        t,
                        i,
                        o,
                        n,
                        r,
                        k,
                        c.bars.horizontal,
                        c.bars.lineWidth
                      );
                })(c.datapoints, e, e + c.bars.barWidth, t, c.xaxis, c.yaxis),
                  k.restore();
              })(i),
            i.points.show)
          ) {
            a = void 0;
            s = void 0;
            r = void 0;
            n = void 0;
            o = void 0;
            a = i;
            i = function (e, t, i, o, n, r, a, s) {
              for (
                var l = e.points, c = e.pointsize, h = 0;
                h < l.length;
                h += c
              ) {
                var u = l[h],
                  d = l[h + 1];
                null == u ||
                  u < r.min ||
                  u > r.max ||
                  d < a.min ||
                  d > a.max ||
                  (k.beginPath(),
                  (u = r.p2c(u)),
                  (d = a.p2c(d) + o),
                  "circle" == s
                    ? k.arc(u, d, t, 0, n ? Math.PI : 2 * Math.PI, !1)
                    : s(k, u, d, t, n),
                  k.closePath(),
                  i && ((k.fillStyle = i), k.fill()),
                  k.stroke());
              }
            };
            k.save(), k.translate(w.left, w.top);
            (s = a.points.lineWidth),
              (r = a.shadowSize),
              (n = a.points.radius),
              (o = a.points.symbol);
            0 == s && (s = 1e-4);
            0 < s &&
              0 < r &&
              ((r = r / 2),
              (k.lineWidth = r),
              (k.strokeStyle = "rgba(0,0,0,0.1)"),
              i(a.datapoints, n, null, r + r / 2, !0, a.xaxis, a.yaxis, o),
              (k.strokeStyle = "rgba(0,0,0,0.2)"),
              i(a.datapoints, n, null, r / 2, !0, a.xaxis, a.yaxis, o));
            (k.lineWidth = s),
              (k.strokeStyle = a.color),
              i(
                a.datapoints,
                n,
                g(a.points, a.color),
                0,
                !1,
                a.xaxis,
                a.yaxis,
                o
              ),
              k.restore();
          }
        }
        B(E.draw, [k]), e.show && e.aboveData && F(), T.render(), v();
      }
      function I(e, t) {
        for (var i, o, n, r, a, s = X(), l = 0; l < s.length; ++l)
          if (
            (i = s[l]).direction == t &&
            e[(o = e[(o = t + i.n + "axis")] || 1 != i.n ? o : t + "axis")]
          ) {
            (r = e[o].from), (a = e[o].to);
            break;
          }
        return (
          e[o] ||
            ((i = ("x" == t ? Y : j)[0]), (r = e[t + "1"]), (a = e[t + "2"])),
          null != r && null != a && a < r && ((n = r), (r = a), (a = n)),
          { from: r, to: a, axis: i }
        );
      }
      function F() {
        k.save(), k.translate(w.left, w.top);
        var e,
          t,
          i = L.grid.markings;
        if (i)
          for (
            $.isFunction(i) &&
              (((c = z.getAxes()).xmin = c.xaxis.min),
              (c.xmax = c.xaxis.max),
              (c.ymin = c.yaxis.min),
              (c.ymax = c.yaxis.max),
              (i = i(c))),
              e = 0;
            e < i.length;
            ++e
          ) {
            var o,
              n,
              r,
              a = i[e],
              s = I(a, "x"),
              l = I(a, "y");
            null == s.from && (s.from = s.axis.min),
              null == s.to && (s.to = s.axis.max),
              null == l.from && (l.from = l.axis.min),
              null == l.to && (l.to = l.axis.max),
              s.to < s.axis.min ||
                s.from > s.axis.max ||
                l.to < l.axis.min ||
                l.from > l.axis.max ||
                ((s.from = Math.max(s.from, s.axis.min)),
                (s.to = Math.min(s.to, s.axis.max)),
                (l.from = Math.max(l.from, l.axis.min)),
                (l.to = Math.min(l.to, l.axis.max)),
                (o = s.from === s.to),
                (n = l.from === l.to),
                o && n) ||
                ((s.from = Math.floor(s.axis.p2c(s.from))),
                (s.to = Math.floor(s.axis.p2c(s.to))),
                (l.from = Math.floor(l.axis.p2c(l.from))),
                (l.to = Math.floor(l.axis.p2c(l.to))),
                o || n
                  ? ((r =
                      (n = a.lineWidth || L.grid.markingsLineWidth) % 2
                        ? 0.5
                        : 0),
                    k.beginPath(),
                    (k.strokeStyle = a.color || L.grid.markingsColor),
                    (k.lineWidth = n),
                    o
                      ? (k.moveTo(s.to + r, l.from), k.lineTo(s.to + r, l.to))
                      : (k.moveTo(s.from, l.to + r), k.lineTo(s.to, l.to + r)),
                    k.stroke())
                  : ((k.fillStyle = a.color || L.grid.markingsColor),
                    k.fillRect(s.from, l.to, s.to - s.from, l.from - l.to)));
          }
        for (var c = X(), h = L.grid.borderWidth, u = 0; u < c.length; ++u) {
          var d,
            f,
            p,
            g = c[u],
            m = g.box,
            x = g.tickLength;
          if (g.show && 0 != g.ticks.length) {
            for (
              k.lineWidth = 1,
                "x" == g.direction
                  ? ((d = 0),
                    (f =
                      "full" == x
                        ? "top" == g.position
                          ? 0
                          : S
                        : m.top - w.top + ("top" == g.position ? m.height : 0)))
                  : ((f = 0),
                    (d =
                      "full" == x
                        ? "left" == g.position
                          ? 0
                          : M
                        : m.left -
                          w.left +
                          ("left" == g.position ? m.width : 0))),
                g.innermost ||
                  ((k.strokeStyle = g.options.color),
                  k.beginPath(),
                  (v = p = 0),
                  "x" == g.direction ? (v = M + 1) : (p = S + 1),
                  1 == k.lineWidth &&
                    ("x" == g.direction
                      ? (f = Math.floor(f) + 0.5)
                      : (d = Math.floor(d) + 0.5)),
                  k.moveTo(d, f),
                  k.lineTo(d + v, f + p),
                  k.stroke()),
                k.strokeStyle = g.options.tickColor,
                k.beginPath(),
                e = 0;
              e < g.ticks.length;
              ++e
            ) {
              var b = g.ticks[e].v,
                v = (p = 0);
              isNaN(b) ||
                b < g.min ||
                b > g.max ||
                ("full" == x &&
                  (("object" == typeof h && 0 < h[g.position]) || 0 < h) &&
                  (b == g.min || b == g.max)) ||
                ("x" == g.direction
                  ? ((d = g.p2c(b)),
                    (p = "full" == x ? -S : x),
                    "top" == g.position && (p = -p))
                  : ((f = g.p2c(b)),
                    (v = "full" == x ? -M : x),
                    "left" == g.position && (v = -v)),
                1 == k.lineWidth &&
                  ("x" == g.direction
                    ? (d = Math.floor(d) + 0.5)
                    : (f = Math.floor(f) + 0.5)),
                k.moveTo(d, f),
                k.lineTo(d + v, f + p));
            }
            k.stroke();
          }
        }
        h &&
          ((t = L.grid.borderColor),
          "object" == typeof h || "object" == typeof t
            ? ("object" != typeof t &&
                (t = { top: t, right: t, bottom: t, left: t }),
              0 <
                (h =
                  "object" != typeof h
                    ? { top: h, right: h, bottom: h, left: h }
                    : h).top &&
                ((k.strokeStyle = t.top),
                (k.lineWidth = h.top),
                k.beginPath(),
                k.moveTo(0 - h.left, 0 - h.top / 2),
                k.lineTo(M, 0 - h.top / 2),
                k.stroke()),
              0 < h.right &&
                ((k.strokeStyle = t.right),
                (k.lineWidth = h.right),
                k.beginPath(),
                k.moveTo(M + h.right / 2, 0 - h.top),
                k.lineTo(M + h.right / 2, S),
                k.stroke()),
              0 < h.bottom &&
                ((k.strokeStyle = t.bottom),
                (k.lineWidth = h.bottom),
                k.beginPath(),
                k.moveTo(M + h.right, S + h.bottom / 2),
                k.lineTo(0, S + h.bottom / 2),
                k.stroke()),
              0 < h.left &&
                ((k.strokeStyle = t.left),
                (k.lineWidth = h.left),
                k.beginPath(),
                k.moveTo(0 - h.left / 2, S + h.bottom),
                k.lineTo(0 - h.left / 2, 0),
                k.stroke()))
            : ((k.lineWidth = h),
              (k.strokeStyle = L.grid.borderColor),
              k.strokeRect(-h / 2, -h / 2, M + h, S + h))),
          k.restore();
      }
      function O(e, t, i, o, n, r, a, s, l, c, h) {
        var u, d, f, p, g, m, x, b, v;
        c
          ? ((g = !(b = m = x = !0)),
            (p = t + o),
            (f = t + n),
            (d = e) < (u = i) && ((v = d), (d = u), (u = v), (m = !(g = !0))))
          : ((b = !(g = m = x = !0)),
            (u = e + o),
            (d = e + n),
            (p = t) < (f = i) && ((v = p), (p = f), (f = v), (x = !(b = !0)))),
          d < a.min ||
            u > a.max ||
            p < s.min ||
            f > s.max ||
            (u < a.min && ((u = a.min), (g = !1)),
            d > a.max && ((d = a.max), (m = !1)),
            f < s.min && ((f = s.min), (b = !1)),
            p > s.max && ((p = s.max), (x = !1)),
            (u = a.p2c(u)),
            (f = s.p2c(f)),
            (d = a.p2c(d)),
            (p = s.p2c(p)),
            r && ((l.fillStyle = r(f, p)), l.fillRect(u, p, d - u, f - p)),
            0 < h &&
              (g || m || x || b) &&
              (l.beginPath(),
              l.moveTo(u, f),
              g ? l.lineTo(u, p) : l.moveTo(u, p),
              x ? l.lineTo(d, p) : l.moveTo(d, p),
              m ? l.lineTo(d, f) : l.moveTo(d, f),
              b ? l.lineTo(u, f) : l.moveTo(u, f),
              l.stroke()));
      }
      function g(e, t, i, o) {
        var n = e.fill;
        return n
          ? e.fillColor
            ? U(e.fillColor, i, o, t)
            : (((e = $.color.parse(t)).a = "number" == typeof n ? n : 0.4),
              e.normalize(),
              e.toString())
          : null;
      }
      e && (e.shutdown(), l.clear()),
        y.data("plot", z),
        d(C),
        P(),
        W(),
        L.grid.hoverable && (h.mousemove(D), h.bind("mouseleave", N)),
        L.grid.clickable && h.click(R),
        B(E.bindEvents, [h]);
      var m = [],
        x = null;
      function D(e) {
        L.grid.hoverable &&
          b("plothover", e, function (e) {
            return 0 != e.hoverable;
          });
      }
      function N(e) {
        L.grid.hoverable &&
          b("plothover", e, function (e) {
            return !1;
          });
      }
      function R(e) {
        b("plotclick", e, function (e) {
          return 0 != e.clickable;
        });
      }
      function b(e, t, i) {
        var o = h.offset(),
          n = t.pageX - o.left - w.left,
          r = t.pageY - o.top - w.top,
          a = f({ left: n, top: r }),
          s =
            ((a.pageX = t.pageX),
            (a.pageY = t.pageY),
            (function (e, t, i) {
              for (
                var o,
                  n = L.grid.mouseActiveRadius,
                  r = n * n + 1,
                  a = null,
                  s = H.length - 1;
                0 <= s;
                --s
              )
                if (i(H[s])) {
                  var l,
                    c,
                    h = H[s],
                    u = h.xaxis,
                    d = h.yaxis,
                    f = h.datapoints.points,
                    p = u.c2p(e),
                    g = d.c2p(t),
                    m = n / u.scale,
                    x = n / d.scale,
                    b = h.datapoints.pointsize;
                  if (
                    (u.options.inverseTransform && (m = Number.MAX_VALUE),
                    d.options.inverseTransform && (x = Number.MAX_VALUE),
                    h.lines.show || h.points.show)
                  )
                    for (o = 0; o < f.length; o += b) {
                      var v,
                        k = f[o],
                        y = f[o + 1];
                      null == k ||
                        m < k - p ||
                        k - p < -m ||
                        x < y - g ||
                        y - g < -x ||
                        ((v =
                          (v = Math.abs(u.p2c(k) - e)) * v +
                          (v = Math.abs(d.p2c(y) - t)) * v) < r &&
                          ((r = v), (a = [s, o / b])));
                    }
                  if (h.bars.show && !a) {
                    switch (h.bars.align) {
                      case "left":
                        l = 0;
                        break;
                      case "right":
                        l = -h.bars.barWidth;
                        break;
                      default:
                        l = -h.bars.barWidth / 2;
                    }
                    for (c = l + h.bars.barWidth, o = 0; o < f.length; o += b) {
                      var k = f[o],
                        y = f[o + 1],
                        w = f[o + 2];
                      null != k &&
                        (H[s].bars.horizontal
                          ? p <= Math.max(w, k) &&
                            p >= Math.min(w, k) &&
                            y + l <= g &&
                            g <= y + c
                          : k + l <= p &&
                            p <= k + c &&
                            g >= Math.min(w, y) &&
                            g <= Math.max(w, y)) &&
                        (a = [s, o / b]);
                    }
                  }
                }
              return a
                ? ((s = a[0]),
                  (o = a[1]),
                  (b = H[s].datapoints.pointsize),
                  {
                    datapoint: H[s].datapoints.points.slice(o * b, (o + 1) * b),
                    dataIndex: o,
                    series: H[s],
                    seriesIndex: s,
                  })
                : null;
            })(n, r, i));
        if (
          (s &&
            ((s.pageX = parseInt(
              s.series.xaxis.p2c(s.datapoint[0]) + o.left + w.left,
              10
            )),
            (s.pageY = parseInt(
              s.series.yaxis.p2c(s.datapoint[1]) + o.top + w.top,
              10
            ))),
          L.grid.autoHighlight)
        ) {
          for (var l = 0; l < m.length; ++l) {
            var c = m[l];
            c.auto != e ||
              (s &&
                c.series == s.series &&
                c.point[0] == s.datapoint[0] &&
                c.point[1] == s.datapoint[1]) ||
              J(c.series, c.point);
          }
          s && Q(s.series, s.datapoint, e);
        }
        y.trigger(e, [a, s]);
      }
      function v() {
        var e = L.interaction.redrawOverlayInterval;
        -1 == e ? q() : (x = x || setTimeout(q, e));
      }
      function q() {
        var e, t, i, o, n, r, a, s;
        for (
          x = null, c.save(), l.clear(), c.translate(w.left, w.top), e = 0;
          e < m.length;
          ++e
        )
          (i = m[e]).series.bars.show
            ? (function (e, t) {
                var i,
                  o =
                    "string" == typeof e.highlightColor
                      ? e.highlightColor
                      : $.color.parse(e.color).scale("a", 0.5).toString(),
                  n = o;
                switch (e.bars.align) {
                  case "left":
                    i = 0;
                    break;
                  case "right":
                    i = -e.bars.barWidth;
                    break;
                  default:
                    i = -e.bars.barWidth / 2;
                }
                (c.lineWidth = e.bars.lineWidth),
                  (c.strokeStyle = o),
                  O(
                    t[0],
                    t[1],
                    t[2] || 0,
                    i,
                    i + e.bars.barWidth,
                    function () {
                      return n;
                    },
                    e.xaxis,
                    e.yaxis,
                    c,
                    e.bars.horizontal,
                    e.bars.lineWidth
                  );
              })(i.series, i.point)
            : ((t = i.series),
              (i = i.point),
              (s = a = r = n = o = void 0),
              (n = i[0]),
              (i = i[1]),
              (r = t.xaxis),
              (a = t.yaxis),
              (s =
                "string" == typeof t.highlightColor
                  ? t.highlightColor
                  : $.color.parse(t.color).scale("a", 0.5).toString()),
              n < r.min ||
                n > r.max ||
                i < a.min ||
                i > a.max ||
                ((o = t.points.radius + t.points.lineWidth / 2),
                (c.lineWidth = o),
                (c.strokeStyle = s),
                (s = 1.5 * o),
                (n = r.p2c(n)),
                (i = a.p2c(i)),
                c.beginPath(),
                "circle" == t.points.symbol
                  ? c.arc(n, i, s, 0, 2 * Math.PI, !1)
                  : t.points.symbol(c, n, i, s, !1),
                c.closePath(),
                c.stroke()));
        c.restore(), B(E.drawOverlay, [c]);
      }
      function Q(e, t, i) {
        "number" == typeof e && (e = H[e]),
          "number" == typeof t &&
            ((o = e.datapoints.pointsize),
            (t = e.datapoints.points.slice(o * t, o * (t + 1))));
        var o = V(e, t);
        -1 == o
          ? (m.push({ series: e, point: t, auto: i }), v())
          : i || (m[o].auto = !1);
      }
      function J(e, t) {
        var i;
        null == e && null == t
          ? ((m = []), v())
          : ("number" == typeof e && (e = H[e]),
            "number" == typeof t &&
              ((i = e.datapoints.pointsize),
              (t = e.datapoints.points.slice(i * t, i * (t + 1)))),
            -1 != (i = V(e, t)) && (m.splice(i, 1), v()));
      }
      function V(e, t) {
        for (var i = 0; i < m.length; ++i) {
          var o = m[i];
          if (o.series == e && o.point[0] == t[0] && o.point[1] == t[1])
            return i;
        }
        return -1;
      }
      function U(e, t, i, o) {
        if ("string" == typeof e) return e;
        for (
          var n = k.createLinearGradient(0, i, 0, t),
            r = 0,
            a = e.colors.length;
          r < a;
          ++r
        ) {
          var s,
            l = e.colors[r];
          "string" != typeof l &&
            ((s = $.color.parse(o)),
            null != l.brightness && (s = s.scale("rgb", l.brightness)),
            null != l.opacity && (s.a *= l.opacity),
            (l = s.toString())),
            n.addColorStop(r / (a - 1), l);
        }
        return n;
      }
    }
    $.fn.detach ||
      ($.fn.detach = function () {
        return this.each(function () {
          this.parentNode && this.parentNode.removeChild(this);
        });
      }),
      (K.prototype.resize = function (e, t) {
        if (e <= 0 || t <= 0)
          throw new Error(
            "Invalid dimensions for plot, width = " + e + ", height = " + t
          );
        var i = this.element,
          o = this.context,
          n = this.pixelRatio;
        this.width != e &&
          ((i.width = e * n), (i.style.width = e + "px"), (this.width = e)),
          this.height != t &&
            ((i.height = t * n),
            (i.style.height = t + "px"),
            (this.height = t)),
          o.restore(),
          o.save(),
          o.scale(n, n);
      }),
      (K.prototype.clear = function () {
        this.context.clearRect(0, 0, this.width, this.height);
      }),
      (K.prototype.render = function () {
        var e,
          t = this._textCache;
        for (e in t)
          if (f.call(t, e)) {
            var i,
              o = this.getTextLayer(e),
              n = t[e];
            for (i in (o.hide(), n))
              if (f.call(n, i)) {
                var r,
                  a = n[i];
                for (r in a)
                  if (f.call(a, r)) {
                    for (var s, l = a[r].positions, c = 0; (s = l[c]); c++)
                      s.active
                        ? s.rendered || (o.append(s.element), (s.rendered = !0))
                        : (l.splice(c--, 1), s.rendered && s.element.detach());
                    0 == l.length && delete a[r];
                  }
              }
            o.show();
          }
      }),
      (K.prototype.getTextLayer = function (e) {
        var t = this.text[e];
        return (
          null == t &&
            (null == this.textContainer &&
              (this.textContainer = $("<div class='flot-text'></div>")
                .css({
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  "font-size": "smaller",
                  color: "#545454",
                })
                .insertAfter(this.element)),
            (t = this.text[e] =
              $("<div></div>")
                .addClass(e)
                .css({
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                })
                .appendTo(this.textContainer))),
          t
        );
      }),
      (K.prototype.getTextInfo = function (e, t, i, o, n) {
        var r, a, s;
        return (
          (t = "" + t),
          (r =
            "object" == typeof i
              ? i.style +
                " " +
                i.variant +
                " " +
                i.weight +
                " " +
                i.size +
                "px/" +
                i.lineHeight +
                "px " +
                i.family
              : i),
          null ==
            (s = (a =
              null ==
              (a = (s =
                null == (s = this._textCache[e])
                  ? (this._textCache[e] = {})
                  : s)[r])
                ? (s[r] = {})
                : a)[t]) &&
            ((n = $("<div></div>")
              .html(t)
              .css({ position: "absolute", "max-width": n, top: -9999 })
              .appendTo(this.getTextLayer(e))),
            "object" == typeof i
              ? n.css({ font: r, color: i.color })
              : "string" == typeof i && n.addClass(i),
            (s = a[t] =
              {
                width: n.outerWidth(!0),
                height: n.outerHeight(!0),
                element: n,
                positions: [],
              }),
            n.detach()),
          s
        );
      }),
      (K.prototype.addText = function (e, t, i, o, n, r, a, s, l) {
        var e = this.getTextInfo(e, o, n, r, a),
          c = e.positions;
        "center" == s ? (t -= e.width / 2) : "right" == s && (t -= e.width),
          "middle" == l
            ? (i -= e.height / 2)
            : "bottom" == l && (i -= e.height);
        for (var h, u = 0; (h = c[u]); u++)
          if (h.x == t && h.y == i) return void (h.active = !0);
        (h = {
          active: !0,
          rendered: !1,
          element: c.length ? e.element.clone() : e.element,
          x: t,
          y: i,
        }),
          c.push(h),
          h.element.css({
            top: Math.round(i),
            left: Math.round(t),
            "text-align": s,
          });
      }),
      (K.prototype.removeText = function (e, t, i, o, n, r) {
        if (null == o) {
          var a = this._textCache[e];
          if (null != a)
            for (var s in a)
              if (f.call(a, s)) {
                var l,
                  c = a[s];
                for (l in c)
                  if (f.call(c, l))
                    for (var h = c[l].positions, u = 0; (d = h[u]); u++)
                      d.active = !1;
              }
        } else
          for (
            var d, h = this.getTextInfo(e, o, n, r).positions, u = 0;
            (d = h[u]);
            u++
          )
            d.x == t && d.y == i && (d.active = !1);
      }),
      ($.plot = function (e, t, i) {
        return new o($(e), t, i, $.plot.plugins);
      }),
      ($.plot.version = "0.8.3"),
      ($.plot.plugins = []),
      ($.fn.plot = function (e, t) {
        return this.each(function () {
          $.plot(this, e, t);
        });
      });
  })(jQuery),
  (function (a, s, l) {
    var c,
      h = [],
      u = (a.resize = a.extend(a.resize, {})),
      d = !1,
      i = "setTimeout",
      f = "resize",
      p = f + "-special-event",
      g = "pendingDelay",
      o = "activeDelay",
      n = "throttleWindow";
    function m(e) {
      !0 === d && (d = e || 1);
      for (var t = h.length - 1; 0 <= t; t--) {
        var i,
          o,
          n,
          r = a(h[t]);
        r[0] == s || r.is(":visible")
          ? ((i = r.width()),
            (o = r.height()),
            !(n = r.data(p)) ||
              (i === n.w && o === n.h) ||
              (r.trigger(f, [(n.w = i), (n.h = o)]), (d = e || !0)))
          : (((n = r.data(p)).w = 0), (n.h = 0));
      }
      null !== c &&
        (d && (null == e || e - d < 1e3)
          ? (c = s.requestAnimationFrame(m))
          : ((c = setTimeout(m, u[g])), (d = !1)));
    }
    (u[g] = 200),
      (u[o] = 20),
      (u[n] = !0),
      (a.event.special[f] = {
        setup: function () {
          if (!u[n] && this[i]) return !1;
          var e = a(this);
          h.push(this),
            e.data(p, { w: e.width(), h: e.height() }),
            1 === h.length && ((c = l), m());
        },
        teardown: function () {
          if (!u[n] && this[i]) return !1;
          for (var e = a(this), t = h.length - 1; 0 <= t; t--)
            if (h[t] == this) {
              h.splice(t, 1);
              break;
            }
          e.removeData(p),
            h.length ||
              ((d ? cancelAnimationFrame : clearTimeout)(c), (c = null));
        },
        add: function (e) {
          var r;
          return (
            !(!u[n] && this[i]) &&
            (a.isFunction(e)
              ? ((r = e), t)
              : ((r = e.handler), void (e.handler = t)))
          );
          function t(e, t, i) {
            var o = a(this),
              n = o.data(p) || {};
            (n.w = t !== l ? t : o.width()),
              (n.h = i !== l ? i : o.height()),
              r.apply(this, arguments);
          }
        },
      }),
      s.requestAnimationFrame ||
        (s.requestAnimationFrame =
          s.webkitRequestAnimationFrame ||
          s.mozRequestAnimationFrame ||
          s.oRequestAnimationFrame ||
          s.msRequestAnimationFrame ||
          function (e, t) {
            return s.setTimeout(function () {
              e(new Date().getTime());
            }, u[o]);
          }),
      s.cancelAnimationFrame ||
        (s.cancelAnimationFrame =
          s.webkitCancelRequestAnimationFrame ||
          s.mozCancelRequestAnimationFrame ||
          s.oCancelRequestAnimationFrame ||
          s.msCancelRequestAnimationFrame ||
          clearTimeout);
  })(jQuery, this),
  jQuery.plot.plugins.push({
    init: function (t) {
      function i() {
        var e = t.getPlaceholder();
        0 != e.width() &&
          0 != e.height() &&
          (t.resize(), t.setupGrid(), t.draw());
      }
      t.hooks.bindEvents.push(function (e, t) {
        e.getPlaceholder().resize(i);
      }),
        t.hooks.shutdown.push(function (e, t) {
          e.getPlaceholder().unbind("resize", i);
        });
    },
    options: {},
    name: "resize",
    version: "1.0",
  }),
  (function (k) {
    k.plot.plugins.push({
      init: function (c) {
        var n,
          h = null,
          u = null,
          d = null,
          f = null,
          p = null,
          r = !1,
          g = null,
          m = [];
        function x(e) {
          var t;
          0 < u.series.pie.innerRadius &&
            (e.save(),
            (t =
              1 < u.series.pie.innerRadius
                ? u.series.pie.innerRadius
                : d * u.series.pie.innerRadius),
            (e.globalCompositeOperation = "destination-out"),
            e.beginPath(),
            (e.fillStyle = u.series.pie.stroke.color),
            e.arc(0, 0, t, 0, 2 * Math.PI, !1),
            e.fill(),
            e.closePath(),
            e.restore(),
            e.save(),
            e.beginPath(),
            (e.strokeStyle = u.series.pie.stroke.color),
            e.arc(0, 0, t, 0, 2 * Math.PI, !1),
            e.stroke(),
            e.closePath(),
            e.restore());
        }
        function b(e, t) {
          for (
            var i,
              o,
              n = c.getData(),
              r = c.getOptions(),
              a =
                1 < r.series.pie.radius
                  ? r.series.pie.radius
                  : d * r.series.pie.radius,
              s = 0;
            s < n.length;
            ++s
          ) {
            var l = n[s];
            if (l.pie.show) {
              if (
                (g.save(),
                g.beginPath(),
                g.moveTo(0, 0),
                g.arc(0, 0, a, l.startAngle, l.startAngle + l.angle / 2, !1),
                g.arc(
                  0,
                  0,
                  a,
                  l.startAngle + l.angle / 2,
                  l.startAngle + l.angle,
                  !1
                ),
                g.closePath(),
                (i = e - f),
                (o = t - p),
                g.isPointInPath)
              ) {
                if (g.isPointInPath(e - f, t - p))
                  return (
                    g.restore(),
                    {
                      datapoint: [l.percent, l.data],
                      dataIndex: 0,
                      series: l,
                      seriesIndex: s,
                    }
                  );
              } else if (
                (function (e, t) {
                  for (
                    var i = !1, o = -1, n = e.length, r = n - 1;
                    ++o < n;
                    r = o
                  )
                    ((e[o][1] <= t[1] && t[1] < e[r][1]) ||
                      (e[r][1] <= t[1] && t[1] < e[o][1])) &&
                      t[0] <
                        ((e[r][0] - e[o][0]) * (t[1] - e[o][1])) /
                          (e[r][1] - e[o][1]) +
                          e[o][0] &&
                      (i = !i);
                  return i;
                })(
                  [
                    [0, 0],
                    [a * Math.cos(l.startAngle), a * Math.sin(l.startAngle)],
                    [
                      a * Math.cos(l.startAngle + l.angle / 4),
                      a * Math.sin(l.startAngle + l.angle / 4),
                    ],
                    [
                      a * Math.cos(l.startAngle + l.angle / 2),
                      a * Math.sin(l.startAngle + l.angle / 2),
                    ],
                    [
                      a * Math.cos(l.startAngle + l.angle / 1.5),
                      a * Math.sin(l.startAngle + l.angle / 1.5),
                    ],
                    [
                      a * Math.cos(l.startAngle + l.angle),
                      a * Math.sin(l.startAngle + l.angle),
                    ],
                  ],
                  [i, o]
                )
              )
                return (
                  g.restore(),
                  {
                    datapoint: [l.percent, l.data],
                    dataIndex: 0,
                    series: l,
                    seriesIndex: s,
                  }
                );
              g.restore();
            }
          }
          return null;
        }
        function i(e) {
          t("plothover", e);
        }
        function o(e) {
          t("plotclick", e);
        }
        function t(e, t) {
          var i,
            o,
            n = c.offset(),
            r = b(parseInt(t.pageX - n.left), parseInt(t.pageY - n.top));
          if (u.grid.autoHighlight)
            for (var a = 0; a < m.length; ++a) {
              var s,
                l = m[a];
              l.auto != e ||
                (r && l.series == r.series) ||
                ((s = void 0),
                null == (s = l.series) && ((m = []), c.triggerRedrawOverlay()),
                -1 != (s = v(s)) && (m.splice(s, 1), c.triggerRedrawOverlay()));
            }
          r &&
            ((n = r.series),
            (i = e),
            -1 == (o = v(n))
              ? (m.push({ series: n, auto: i }), c.triggerRedrawOverlay())
              : i || (m[o].auto = !1));
          n = { pageX: t.pageX, pageY: t.pageY };
          h.trigger(e, [n, r]);
        }
        function v(e) {
          for (var t = 0; t < m.length; ++t) if (m[t].series == e) return t;
          return -1;
        }
        c.hooks.processOptions.push(function (e, t) {
          t.series.pie.show &&
            ((t.grid.show = !1),
            "auto" == t.series.pie.label.show &&
              (t.legend.show
                ? (t.series.pie.label.show = !1)
                : (t.series.pie.label.show = !0)),
            "auto" == t.series.pie.radius &&
              (t.series.pie.label.show
                ? (t.series.pie.radius = 0.75)
                : (t.series.pie.radius = 1)),
            1 < t.series.pie.tilt
              ? (t.series.pie.tilt = 1)
              : t.series.pie.tilt < 0 && (t.series.pie.tilt = 0));
        }),
          c.hooks.bindEvents.push(function (e, t) {
            e = e.getOptions();
            e.series.pie.show &&
              (e.grid.hoverable && t.unbind("mousemove").mousemove(i),
              e.grid.clickable) &&
              t.unbind("click").click(o);
          }),
          c.hooks.processDatapoints.push(function (e, t, i, o) {
            e.getOptions().series.pie.show &&
              ((e = e),
              r ||
                ((r = !0),
                (n = e.getCanvas()),
                (h = k(n).parent()),
                (u = e.getOptions()),
                e.setData(
                  (function (e) {
                    for (
                      var t = 0,
                        i = 0,
                        o = 0,
                        n = u.series.pie.combine.color,
                        r = [],
                        a = 0;
                      a < e.length;
                      ++a
                    ) {
                      var s = e[a].data;
                      k.isArray(s) && 1 == s.length && (s = s[0]),
                        k.isArray(s)
                          ? !isNaN(parseFloat(s[1])) && isFinite(s[1])
                            ? (s[1] = +s[1])
                            : (s[1] = 0)
                          : (s =
                              !isNaN(parseFloat(s)) && isFinite(s)
                                ? [1, +s]
                                : [1, 0]),
                        (e[a].data = [s]);
                    }
                    for (a = 0; a < e.length; ++a) t += e[a].data[0][1];
                    for (a = 0; a < e.length; ++a)
                      (s = e[a].data[0][1]) / t <=
                        u.series.pie.combine.threshold &&
                        ((i += s), o++, (n = n || e[a].color));
                    for (a = 0; a < e.length; ++a) {
                      s = e[a].data[0][1];
                      (o < 2 || s / t > u.series.pie.combine.threshold) &&
                        r.push(
                          k.extend(e[a], {
                            data: [[1, s]],
                            color: e[a].color,
                            label: e[a].label,
                            angle: (s * Math.PI * 2) / t,
                            percent: s / (t / 100),
                          })
                        );
                    }
                    1 < o &&
                      r.push({
                        data: [[1, i]],
                        color: n,
                        label: u.series.pie.combine.label,
                        angle: (i * Math.PI * 2) / t,
                        percent: i / (t / 100),
                      });
                    return r;
                  })(e.getData())
                )));
          }),
          c.hooks.drawOverlay.push(function (e, t) {
            if (e.getOptions().series.pie.show) {
              var i = t,
                o = e.getOptions(),
                n =
                  1 < o.series.pie.radius
                    ? o.series.pie.radius
                    : d * o.series.pie.radius;
              i.save(), i.translate(f, p), i.scale(1, o.series.pie.tilt);
              for (var r = 0; r < m.length; ++r) {
                a = void 0;
                var a = m[r].series;
                a.angle <= 0 ||
                  isNaN(a.angle) ||
                  ((i.fillStyle =
                    "rgba(255, 255, 255, " +
                    o.series.pie.highlight.opacity +
                    ")"),
                  i.beginPath(),
                  1e-9 < Math.abs(a.angle - 2 * Math.PI) && i.moveTo(0, 0),
                  i.arc(0, 0, n, a.startAngle, a.startAngle + a.angle / 2, !1),
                  i.arc(
                    0,
                    0,
                    n,
                    a.startAngle + a.angle / 2,
                    a.startAngle + a.angle,
                    !1
                  ),
                  i.closePath(),
                  i.fill());
              }
              x(i), i.restore();
            }
          }),
          c.hooks.draw.push(function (e, t) {
            if (e.getOptions().series.pie.show) {
              if (h) {
                for (
                  var a = e.getPlaceholder().width(),
                    s = e.getPlaceholder().height(),
                    i = h.children().filter(".legend").children().width() || 0,
                    l =
                      ((g = t),
                      (r = !1),
                      (d = Math.min(a, s / u.series.pie.tilt) / 2),
                      (p = s / 2 + u.series.pie.offset.top),
                      (f = a / 2),
                      "auto" == u.series.pie.offset.left
                        ? (u.legend.position.match("w")
                            ? (f += i / 2)
                            : (f -= i / 2),
                          f < d ? (f = d) : a - d < f && (f = a - d))
                        : (f += u.series.pie.offset.left),
                      e.getData()),
                    o = 0;
                  0 < o && (d *= 0.95),
                    (o += 1),
                    n(),
                    u.series.pie.tilt <= 0.8 &&
                      (function () {
                        var e = u.series.pie.shadow.left,
                          t = u.series.pie.shadow.top,
                          i = u.series.pie.shadow.alpha,
                          o =
                            1 < u.series.pie.radius
                              ? u.series.pie.radius
                              : d * u.series.pie.radius;
                        if (
                          !(
                            a / 2 - e <= o ||
                            o * u.series.pie.tilt >= s / 2 - t ||
                            o <= 10
                          )
                        ) {
                          g.save(),
                            g.translate(e, t),
                            (g.globalAlpha = i),
                            (g.fillStyle = "#000"),
                            g.translate(f, p),
                            g.scale(1, u.series.pie.tilt);
                          for (var n = 1; n <= 10; n++)
                            g.beginPath(),
                              g.arc(0, 0, o, 0, 2 * Math.PI, !1),
                              g.fill(),
                              (o -= n);
                          g.restore();
                        }
                      })(),
                    !(function () {
                      for (
                        var i = Math.PI * u.series.pie.startAngle,
                          o =
                            1 < u.series.pie.radius
                              ? u.series.pie.radius
                              : d * u.series.pie.radius,
                          n =
                            (g.save(),
                            g.translate(f, p),
                            g.scale(1, u.series.pie.tilt),
                            g.save(),
                            i),
                          e = 0;
                        e < l.length;
                        ++e
                      )
                        (l[e].startAngle = n), t(l[e].angle, l[e].color, !0);
                      if ((g.restore(), 0 < u.series.pie.stroke.width)) {
                        g.save(),
                          (g.lineWidth = u.series.pie.stroke.width),
                          (n = i);
                        for (e = 0; e < l.length; ++e)
                          t(l[e].angle, u.series.pie.stroke.color, !1);
                        g.restore();
                      }
                      return (
                        x(g),
                        g.restore(),
                        !u.series.pie.label.show ||
                          (function () {
                            for (
                              var e = i,
                                r =
                                  1 < u.series.pie.label.radius
                                    ? u.series.pie.label.radius
                                    : d * u.series.pie.label.radius,
                                t = 0;
                              t < l.length;
                              ++t
                            ) {
                              if (
                                l[t].percent >=
                                  100 * u.series.pie.label.threshold &&
                                !(function (e, t, i) {
                                  if (0 != e.data[0][1]) {
                                    var o = u.legend.labelFormatter,
                                      n = u.series.pie.label.formatter,
                                      n =
                                        ((o = o ? o(e.label, e) : e.label),
                                        n && (o = n(o, e)),
                                        (t + e.angle + t) / 2),
                                      t = f + Math.round(Math.cos(n) * r),
                                      n =
                                        p +
                                        Math.round(Math.sin(n) * r) *
                                          u.series.pie.tilt,
                                      o =
                                        "<span class='pieLabel' id='pieLabel" +
                                        i +
                                        "' style='position:absolute;top:" +
                                        n +
                                        "px;left:" +
                                        t +
                                        "px;'>" +
                                        o +
                                        "</span>",
                                      o =
                                        (h.append(o),
                                        h.children("#pieLabel" + i)),
                                      i = n - o.height() / 2,
                                      n = t - o.width() / 2;
                                    if (
                                      (o.css("top", i),
                                      o.css("left", n),
                                      0 < 0 - i ||
                                        0 < 0 - n ||
                                        s - (i + o.height()) < 0 ||
                                        a - (n + o.width()) < 0)
                                    )
                                      return;
                                    0 !=
                                      u.series.pie.label.background.opacity &&
                                      (null ==
                                        (t =
                                          u.series.pie.label.background
                                            .color) && (t = e.color),
                                      (e = "top:" + i + "px;left:" + n + "px;"),
                                      k(
                                        "<div class='pieLabelBackground' style='position:absolute;width:" +
                                          o.width() +
                                          "px;height:" +
                                          o.height() +
                                          "px;" +
                                          e +
                                          "background-color:" +
                                          t +
                                          ";'></div>"
                                      )
                                        .css(
                                          "opacity",
                                          u.series.pie.label.background.opacity
                                        )
                                        .insertBefore(o));
                                  }
                                  return 1;
                                })(l[t], e, t)
                              )
                                return;
                              e += l[t].angle;
                            }
                            return 1;
                          })()
                      );
                      function t(e, t, i) {
                        e <= 0 ||
                          isNaN(e) ||
                          (i
                            ? (g.fillStyle = t)
                            : ((g.strokeStyle = t), (g.lineJoin = "round")),
                          g.beginPath(),
                          1e-9 < Math.abs(e - 2 * Math.PI) && g.moveTo(0, 0),
                          g.arc(0, 0, o, n, n + e / 2, !1),
                          g.arc(0, 0, o, n + e / 2, n + e, !1),
                          g.closePath(),
                          (n += e),
                          i ? g.fill() : g.stroke());
                      }
                    })() && o < 10;

                );
                10 <= o &&
                  (n(),
                  h.prepend(
                    "<div class='error'>Could not draw pie with labels contained inside canvas</div>"
                  )),
                  e.setSeries &&
                    e.insertLegend &&
                    (e.setSeries(l), e.insertLegend());
              }
              function n() {
                g.clearRect(0, 0, a, s),
                  h
                    .children()
                    .filter(".pieLabel, .pieLabelBackground")
                    .remove();
              }
            }
          });
      },
      options: {
        series: {
          pie: {
            show: !1,
            radius: "auto",
            innerRadius: 0,
            startAngle: 1.5,
            tilt: 1,
            shadow: { left: 5, top: 15, alpha: 0.02 },
            offset: { top: 0, left: "auto" },
            stroke: { color: "#fff", width: 1 },
            label: {
              show: "auto",
              formatter: function (e, t) {
                return (
                  "<div style='font-size:x-small;text-align:center;padding:2px;color:" +
                  t.color +
                  ";'>" +
                  e +
                  "<br/>" +
                  Math.round(t.percent) +
                  "%</div>"
                );
              },
              radius: 1,
              background: { color: null, opacity: 0 },
              threshold: 0,
            },
            combine: { threshold: -1, color: null, label: "Other" },
            highlight: { opacity: 0.5 },
          },
        },
      },
      name: "pie",
      version: "1.1",
    });
  })(jQuery),
  (function (x) {
    function t(e, t, i, o) {
      var n = "categories" == t.xaxis.options.mode,
        r = "categories" == t.yaxis.options.mode;
      if (n || r) {
        var a,
          s = o.format;
        s ||
          ((t = t),
          (s = []).push({ x: !0, number: !0, required: !0 }),
          s.push({ y: !0, number: !0, required: !0 }),
          (t.bars.show || (t.lines.show && t.lines.fill)) &&
            ((a = !!(
              (t.bars.show && t.bars.zero) ||
              (t.lines.show && t.lines.zero)
            )),
            s.push({
              y: !0,
              number: !0,
              required: !1,
              defaultValue: 0,
              autoscale: a,
            }),
            t.bars.horizontal) &&
            (delete s[s.length - 1].y, (s[s.length - 1].x = !0)),
          (o.format = s));
        for (var l = 0; l < s.length; ++l)
          s[l].x && n && (s[l].number = !1), s[l].y && r && (s[l].number = !1);
      }
    }
    function b(e) {
      var t,
        i = [];
      for (t in e.categories) {
        var o = e.categories[t];
        o >= e.min && o <= e.max && i.push([o, t]);
      }
      return (
        i.sort(function (e, t) {
          return e[0] - t[0];
        }),
        i
      );
    }
    function o(e, t, i) {
      if ("categories" == e[t].options.mode) {
        if (!e[t].categories) {
          var o = {},
            n = e[t].options.categories || {};
          if (x.isArray(n)) for (var r = 0; r < n.length; ++r) o[n[r]] = r;
          else for (var a in n) o[a] = n[a];
          e[t].categories = o;
        }
        e[t].options.ticks || (e[t].options.ticks = b);
        for (
          var s = t,
            l = e[t].categories,
            c = i.points,
            h = i.pointsize,
            u = i.format,
            d = s.charAt(0),
            f = (function (e) {
              var t,
                i = -1;
              for (t in e) e[t] > i && (i = e[t]);
              return i + 1;
            })(l),
            p = 0;
          p < c.length;
          p += h
        )
          if (null != c[p])
            for (var g = 0; g < h; ++g) {
              var m = c[p + g];
              null != m &&
                u[g][d] &&
                (m in l || ((l[m] = f), ++f), (c[p + g] = l[m]));
            }
      }
    }
    function i(e, t, i) {
      o(t, "xaxis", i), o(t, "yaxis", i);
    }
    x.plot.plugins.push({
      init: function (e) {
        e.hooks.processRawData.push(t), e.hooks.processDatapoints.push(i);
      },
      options: { xaxis: { categories: null }, yaxis: { categories: null } },
      name: "categories",
      version: "1.0",
    });
  })(jQuery),
  (function (i) {
    function b(e, t) {
      return t * Math.floor(e / t);
    }
    function a(e, t, i, o) {
      if ("function" == typeof e.strftime) return e.strftime(t);
      function n(e, t) {
        return (
          (t = "" + (null == t ? "0" : t)), 1 == (e = "" + e).length ? t + e : e
        );
      }
      var r = [],
        a = !1,
        s = e.getHours(),
        l = s < 12;
      null == i &&
        (i = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ]),
        null == o && (o = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
      for (
        var c = 12 < s ? s - 12 : 0 == s ? 12 : s, h = 0;
        h < t.length;
        ++h
      ) {
        var u = t.charAt(h);
        if (a) {
          switch (u) {
            case "a":
              u = "" + o[e.getDay()];
              break;
            case "b":
              u = "" + i[e.getMonth()];
              break;
            case "d":
              u = n(e.getDate());
              break;
            case "e":
              u = n(e.getDate(), " ");
              break;
            case "h":
            case "H":
              u = n(s);
              break;
            case "I":
              u = n(c);
              break;
            case "l":
              u = n(c, " ");
              break;
            case "m":
              u = n(e.getMonth() + 1);
              break;
            case "M":
              u = n(e.getMinutes());
              break;
            case "q":
              u = "" + (Math.floor(e.getMonth() / 3) + 1);
              break;
            case "S":
              u = n(e.getSeconds());
              break;
            case "y":
              u = n(e.getFullYear() % 100);
              break;
            case "Y":
              u = "" + e.getFullYear();
              break;
            case "p":
              u = l ? "am" : "pm";
              break;
            case "P":
              u = l ? "AM" : "PM";
              break;
            case "w":
              u = "" + e.getDay();
          }
          r.push(u), (a = !1);
        } else "%" == u ? (a = !0) : r.push(u);
      }
      return r.join("");
    }
    function o(e) {
      function t(e, t, i, o) {
        e[t] = function () {
          return i[o].apply(i, arguments);
        };
      }
      for (
        var i = { date: e },
          o =
            (null != e.strftime && t(i, "strftime", e, "strftime"),
            t(i, "getTime", e, "getTime"),
            t(i, "setTime", e, "setTime"),
            [
              "Date",
              "Day",
              "FullYear",
              "Hours",
              "Milliseconds",
              "Minutes",
              "Month",
              "Seconds",
            ]),
          n = 0;
        n < o.length;
        n++
      )
        t(i, "get" + o[n], e, "getUTC" + o[n]),
          t(i, "set" + o[n], e, "setUTC" + o[n]);
      return i;
    }
    function v(e, t) {
      var i;
      return "browser" == t.timezone
        ? new Date(e)
        : t.timezone &&
          "utc" != t.timezone &&
          "undefined" != typeof timezoneJS &&
          void 0 !== timezoneJS.Date
        ? ((i = new timezoneJS.Date()).setTimezone(t.timezone), i.setTime(e), i)
        : o(new Date(e));
    }
    var k = {
        second: 1e3,
        minute: 6e4,
        hour: 36e5,
        day: 864e5,
        month: 2592e6,
        quarter: 7776e6,
        year: 525949.2 * 60 * 1e3,
      },
      e = [
        [1, "second"],
        [2, "second"],
        [5, "second"],
        [10, "second"],
        [30, "second"],
        [1, "minute"],
        [2, "minute"],
        [5, "minute"],
        [10, "minute"],
        [30, "minute"],
        [1, "hour"],
        [2, "hour"],
        [4, "hour"],
        [8, "hour"],
        [12, "hour"],
        [1, "day"],
        [2, "day"],
        [3, "day"],
        [0.25, "month"],
        [0.5, "month"],
        [1, "month"],
        [2, "month"],
      ],
      y = e.concat([
        [3, "month"],
        [6, "month"],
        [1, "year"],
      ]),
      w = e.concat([
        [1, "quarter"],
        [2, "quarter"],
        [1, "year"],
      ]);
    i.plot.plugins.push({
      init: function (e) {
        e.hooks.processOptions.push(function (e, t) {
          i.each(e.getAxes(), function (e, t) {
            var x = t.options;
            "time" == x.mode &&
              ((t.tickGenerator = function (e) {
                var t = [],
                  i = v(e.min, x),
                  o = 0,
                  n =
                    (x.tickSize && "quarter" === x.tickSize[1]) ||
                    (x.minTickSize && "quarter" === x.minTickSize[1])
                      ? w
                      : y;
                null != x.minTickSize &&
                  (o =
                    "number" == typeof x.tickSize
                      ? x.tickSize
                      : x.minTickSize[0] * k[x.minTickSize[1]]);
                for (
                  var r = 0;
                  r < n.length - 1 &&
                  !(
                    e.delta <
                      (n[r][0] * k[n[r][1]] + n[r + 1][0] * k[n[r + 1][1]]) /
                        2 && n[r][0] * k[n[r][1]] >= o
                  );
                  ++r
                );
                var a,
                  s,
                  l = n[r][0],
                  c =
                    ("year" == (h = n[r][1]) &&
                      (null != x.minTickSize && "year" == x.minTickSize[1]
                        ? (l = Math.floor(x.minTickSize[0]))
                        : ((a = Math.pow(
                            10,
                            Math.floor(Math.log(e.delta / k.year) / Math.LN10)
                          )),
                          (l =
                            (s = e.delta / k.year / a) < 1.5
                              ? 1
                              : s < 3
                              ? 2
                              : s < 7.5
                              ? 5
                              : 10),
                          (l *= a)),
                      l < 1) &&
                      (l = 1),
                    (e.tickSize = x.tickSize || [l, h]),
                    e.tickSize[0]),
                  h = e.tickSize[1],
                  u = c * k[h],
                  d =
                    ("second" == h
                      ? i.setSeconds(b(i.getSeconds(), c))
                      : "minute" == h
                      ? i.setMinutes(b(i.getMinutes(), c))
                      : "hour" == h
                      ? i.setHours(b(i.getHours(), c))
                      : "month" == h
                      ? i.setMonth(b(i.getMonth(), c))
                      : "quarter" == h
                      ? i.setMonth(3 * b(i.getMonth() / 3, c))
                      : "year" == h && i.setFullYear(b(i.getFullYear(), c)),
                    i.setMilliseconds(0),
                    k.minute <= u && i.setSeconds(0),
                    k.hour <= u && i.setMinutes(0),
                    k.day <= u && i.setHours(0),
                    4 * k.day <= u && i.setDate(1),
                    2 * k.month <= u && i.setMonth(b(i.getMonth(), 3)),
                    2 * k.quarter <= u && i.setMonth(b(i.getMonth(), 6)),
                    k.year <= u && i.setMonth(0),
                    0),
                  f = Number.NaN;
                do {
                  var p,
                    g,
                    m = f,
                    f = i.getTime();
                } while (
                  (t.push(f),
                  "month" == h || "quarter" == h
                    ? c < 1
                      ? (i.setDate(1),
                        (p = i.getTime()),
                        i.setMonth(i.getMonth() + ("quarter" == h ? 3 : 1)),
                        (g = i.getTime()),
                        i.setTime(f + d * k.hour + (g - p) * c),
                        (d = i.getHours()),
                        i.setHours(0))
                      : i.setMonth(i.getMonth() + c * ("quarter" == h ? 3 : 1))
                    : "year" == h
                    ? i.setFullYear(i.getFullYear() + c)
                    : i.setTime(f + u),
                  f < e.max && f != m)
                );
                return t;
              }),
              (t.tickFormatter = function (e, t) {
                var i,
                  o,
                  n,
                  r,
                  e = v(e, t.options);
                return null != x.timeformat
                  ? a(e, x.timeformat, x.monthNames, x.dayNames)
                  : ((i =
                      (t.options.tickSize &&
                        "quarter" == t.options.tickSize[1]) ||
                      (t.options.minTickSize &&
                        "quarter" == t.options.minTickSize[1])),
                    (o = t.tickSize[0] * k[t.tickSize[1]]),
                    (t = t.max - t.min),
                    (n = x.twelveHourClock ? " %p" : ""),
                    (r = x.twelveHourClock ? "%I" : "%H"),
                    a(
                      e,
                      o < k.minute
                        ? r + ":%M:%S" + n
                        : o < k.day
                        ? t < 2 * k.day
                          ? r + ":%M" + n
                          : "%b %d " + r + ":%M" + n
                        : o < k.month
                        ? "%b %d"
                        : (i && o < k.quarter) || (!i && o < k.year)
                        ? t < k.year
                          ? "%b"
                          : "%b %Y"
                        : i && o < k.year
                        ? t < k.year
                          ? "Q%q"
                          : "Q%q %Y"
                        : "%Y",
                      x.monthNames,
                      x.dayNames
                    ));
              }));
          });
        });
      },
      options: {
        xaxis: {
          timezone: null,
          timeformat: null,
          twelveHourClock: !1,
          monthNames: null,
        },
      },
      name: "time",
      version: "1.0",
    }),
      (i.plot.formatDate = a),
      (i.plot.dateGenerator = v);
  })(jQuery),
  (function (g) {
    g.plot.plugins.push({
      init: function (c) {
        var a = {
            first: { x: -1, y: -1 },
            second: { x: -1, y: -1 },
            show: !1,
            active: !1,
          },
          t = {},
          i = null;
        function o(e) {
          a.active &&
            (u(e), c.getPlaceholder().trigger("plotselecting", [r()]));
        }
        function n(e) {
          1 == e.which &&
            (document.body.focus(),
            void 0 !== document.onselectstart &&
              null == t.onselectstart &&
              ((t.onselectstart = document.onselectstart),
              (document.onselectstart = function () {
                return !1;
              })),
            void 0 !== document.ondrag &&
              null == t.ondrag &&
              ((t.ondrag = document.ondrag),
              (document.ondrag = function () {
                return !1;
              })),
            h(a.first, e),
            (a.active = !0),
            (i = function (e) {
              (i = null),
                void 0 !== document.onselectstart &&
                  (document.onselectstart = t.onselectstart),
                void 0 !== document.ondrag && (document.ondrag = t.ondrag),
                (a.active = !1),
                u(e),
                p()
                  ? s()
                  : (c.getPlaceholder().trigger("plotunselected", []),
                    c.getPlaceholder().trigger("plotselecting", [null]));
            }),
            g(document).one("mouseup", i));
        }
        function r() {
          var o, n, r;
          return p() && a.show
            ? ((o = {}),
              (n = a.first),
              (r = a.second),
              g.each(c.getAxes(), function (e, t) {
                var i;
                t.used &&
                  ((i = t.c2p(n[t.direction])),
                  (t = t.c2p(r[t.direction])),
                  (o[e] = { from: Math.min(i, t), to: Math.max(i, t) }));
              }),
              o)
            : null;
        }
        function s() {
          var e = r();
          c.getPlaceholder().trigger("plotselected", [e]),
            e.xaxis &&
              e.yaxis &&
              c.getPlaceholder().trigger("selected", [
                {
                  x1: e.xaxis.from,
                  y1: e.yaxis.from,
                  x2: e.xaxis.to,
                  y2: e.yaxis.to,
                },
              ]);
        }
        function l(e, t, i) {
          return t < e ? e : i < t ? i : t;
        }
        function h(e, t) {
          var i = c.getOptions(),
            o = c.getPlaceholder().offset(),
            n = c.getPlotOffset();
          (e.x = l(0, t.pageX - o.left - n.left, c.width())),
            (e.y = l(0, t.pageY - o.top - n.top, c.height())),
            "y" == i.selection.mode && (e.x = e == a.first ? 0 : c.width()),
            "x" == i.selection.mode && (e.y = e == a.first ? 0 : c.height());
        }
        function u(e) {
          null != e.pageX &&
            (h(a.second, e),
            p() ? ((a.show = !0), c.triggerRedrawOverlay()) : d(!0));
        }
        function d(e) {
          a.show &&
            ((a.show = !1),
            c.triggerRedrawOverlay(),
            e || c.getPlaceholder().trigger("plotunselected", []));
        }
        function f(e, t) {
          var i,
            o,
            n,
            r,
            a,
            s,
            l = c.getAxes();
          for (n in l)
            if (
              (i = l[n]).direction == t &&
              e[(o = e[(o = t + i.n + "axis")] || 1 != i.n ? o : t + "axis")]
            ) {
              (a = e[o].from), (s = e[o].to);
              break;
            }
          return (
            e[o] ||
              ((i = ("x" == t ? c.getXAxes() : c.getYAxes())[0]),
              (a = e[t + "1"]),
              (s = e[t + "2"])),
            null != a && null != s && s < a && ((r = a), (a = s), (s = r)),
            { from: a, to: s, axis: i }
          );
        }
        function p() {
          var e = c.getOptions().selection.minSize;
          return (
            Math.abs(a.second.x - a.first.x) >= e &&
            Math.abs(a.second.y - a.first.y) >= e
          );
        }
        (c.clearSelection = d),
          (c.setSelection = function (e, t) {
            var i,
              o = c.getOptions();
            "y" == o.selection.mode
              ? ((a.first.x = 0), (a.second.x = c.width()))
              : ((i = f(e, "x")),
                (a.first.x = i.axis.p2c(i.from)),
                (a.second.x = i.axis.p2c(i.to))),
              "x" == o.selection.mode
                ? ((a.first.y = 0), (a.second.y = c.height()))
                : ((i = f(e, "y")),
                  (a.first.y = i.axis.p2c(i.from)),
                  (a.second.y = i.axis.p2c(i.to))),
              (a.show = !0),
              c.triggerRedrawOverlay(),
              !t && p() && s();
          }),
          (c.getSelection = r),
          c.hooks.bindEvents.push(function (e, t) {
            null != e.getOptions().selection.mode &&
              (t.mousemove(o), t.mousedown(n));
          }),
          c.hooks.drawOverlay.push(function (e, t) {
            var i, o, n;
            a.show &&
              p() &&
              ((i = e.getPlotOffset()),
              (e = e.getOptions()),
              t.save(),
              t.translate(i.left, i.top),
              (i = g.color.parse(e.selection.color)),
              (t.strokeStyle = i.scale("a", 0.8).toString()),
              (t.lineWidth = 1),
              (t.lineJoin = e.selection.shape),
              (t.fillStyle = i.scale("a", 0.4).toString()),
              (e = Math.min(a.first.x, a.second.x) + 0.5),
              (i = Math.min(a.first.y, a.second.y) + 0.5),
              (o = Math.abs(a.second.x - a.first.x) - 1),
              (n = Math.abs(a.second.y - a.first.y) - 1),
              t.fillRect(e, i, o, n),
              t.strokeRect(e, i, o, n),
              t.restore());
          }),
          c.hooks.shutdown.push(function (e, t) {
            t.unbind("mousemove", o),
              t.unbind("mousedown", n),
              i && g(document).unbind("mouseup", i);
          });
      },
      options: {
        selection: { mode: null, color: "#e8cfac", shape: "round", minSize: 5 },
      },
      name: "selection",
      version: "1.1",
    });
  })(jQuery);
