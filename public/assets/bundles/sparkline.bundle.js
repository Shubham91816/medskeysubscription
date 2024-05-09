!(function (w, A, F) {
  var t;
  (t = function (W) {
    "use strict";
    var v,
      H,
      y,
      T,
      q,
      I,
      l,
      b,
      t,
      r,
      g,
      j,
      o,
      e,
      P,
      L,
      h,
      a,
      p,
      u,
      C,
      s,
      c,
      d,
      n,
      f = {},
      m = 0,
      i = function () {
        return {
          common: {
            type: "line",
            lineColor: "#00f",
            fillColor: "#cdf",
            defaultPixelsPerValue: 3,
            width: "auto",
            height: "auto",
            composite: !1,
            tagValuesAttribute: "values",
            tagOptionsPrefix: "spark",
            enableTagOptions: !1,
            enableHighlight: !0,
            highlightLighten: 1.4,
            tooltipSkipNull: !0,
            tooltipPrefix: "",
            tooltipSuffix: "",
            disableHiddenCheck: !1,
            numberFormatter: !1,
            numberDigitGroupCount: 3,
            numberDigitGroupSep: ",",
            numberDecimalMark: ".",
            disableTooltips: !1,
            disableInteraction: !1,
          },
          line: {
            spotColor: "#f80",
            highlightSpotColor: "#5f5",
            highlightLineColor: "#f22",
            spotRadius: 1.5,
            minSpotColor: "#f80",
            maxSpotColor: "#f80",
            lineWidth: 1,
            normalRangeMin: F,
            normalRangeMax: F,
            normalRangeColor: "#ccc",
            drawNormalOnTop: !1,
            chartRangeMin: F,
            chartRangeMax: F,
            chartRangeMinX: F,
            chartRangeMaxX: F,
            tooltipFormat: new v(
              '<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}'
            ),
          },
          bar: {
            barColor: "#3366cc",
            negBarColor: "#f44",
            stackedBarColor: [
              "#3366cc",
              "#dc3912",
              "#ff9900",
              "#109618",
              "#66aa00",
              "#dd4477",
              "#0099c6",
              "#990099",
            ],
            zeroColor: F,
            nullColor: F,
            zeroAxis: !0,
            barWidth: 4,
            barSpacing: 1,
            chartRangeMax: F,
            chartRangeMin: F,
            chartRangeClip: !1,
            colorMap: F,
            tooltipFormat: new v(
              '<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}'
            ),
          },
          tristate: {
            barWidth: 4,
            barSpacing: 1,
            posBarColor: "#6f6",
            negBarColor: "#f44",
            zeroBarColor: "#999",
            colorMap: {},
            tooltipFormat: new v(
              '<span style="color: {{color}}">&#9679;</span> {{value:map}}'
            ),
            tooltipValueLookups: { map: { "-1": "Loss", 0: "Draw", 1: "Win" } },
          },
          discrete: {
            lineHeight: "auto",
            thresholdColor: F,
            thresholdValue: 0,
            chartRangeMax: F,
            chartRangeMin: F,
            chartRangeClip: !1,
            tooltipFormat: new v("{{prefix}}{{value}}{{suffix}}"),
          },
          bullet: {
            targetColor: "#f33",
            targetWidth: 3,
            performanceColor: "#33f",
            rangeColors: ["#d3dafe", "#a8b6ff", "#7f94ff"],
            base: F,
            tooltipFormat: new v("{{fieldkey:fields}} - {{value}}"),
            tooltipValueLookups: {
              fields: { r: "Range", p: "Performance", t: "Target" },
            },
          },
          pie: {
            offset: 0,
            sliceColors: [
              "#3366cc",
              "#dc3912",
              "#ff9900",
              "#109618",
              "#66aa00",
              "#dd4477",
              "#0099c6",
              "#990099",
            ],
            borderWidth: 0,
            borderColor: "#000",
            tooltipFormat: new v(
              '<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)'
            ),
          },
          box: {
            raw: !1,
            boxLineColor: "#000",
            boxFillColor: "#cdf",
            whiskerColor: "#000",
            outlierLineColor: "#333",
            outlierFillColor: "#fff",
            medianColor: "#f00",
            showOutliers: !0,
            outlierIQR: 1.5,
            spotRadius: 1.5,
            target: F,
            targetColor: "#4a2",
            chartRangeMax: F,
            chartRangeMin: F,
            tooltipFormat: new v("{{field:fields}}: {{value}}"),
            tooltipFormatFieldlistKey: "field",
            tooltipValueLookups: {
              fields: {
                lq: "Lower Quartile",
                med: "Median",
                uq: "Upper Quartile",
                lo: "Left Outlier",
                ro: "Right Outlier",
                lw: "Left Whisker",
                rw: "Right Whisker",
              },
            },
          },
        };
      },
      x = function () {
        var t,
          e = function () {
            this.init.apply(this, arguments);
          };
        return (
          1 < arguments.length
            ? (arguments[0]
                ? ((e.prototype = W.extend(
                    new arguments[0](),
                    arguments[arguments.length - 1]
                  )),
                  (e._super = arguments[0].prototype))
                : (e.prototype = arguments[arguments.length - 1]),
              2 < arguments.length &&
                ((t = Array.prototype.slice.call(arguments, 1, -1)).unshift(
                  e.prototype
                ),
                W.extend.apply(W, t)))
            : (e.prototype = arguments[0]),
          (e.prototype.cls = e)
        );
      };
    (W.SPFormatclassName = v =
      x({
        fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g,
        precre: /(\w+)\.(\d+)/,
        init: function (t, e) {
          (this.format = t), (this.fclassName = e);
        },
        render: function (t, e, i) {
          var s,
            n,
            r,
            a,
            h = this,
            o = t;
          return this.format.replace(this.fre, function () {
            return (
              (s = arguments[1]),
              (n = arguments[3]),
              (r = h.precre.exec(s)) ? ((a = r[2]), (s = r[1])) : (a = !1),
              (r = o[s]) === F
                ? ""
                : n && e && e[n]
                ? e[n].get
                  ? e[n].get(r) || r
                  : e[n][r] || r
                : (r = l(r)
                    ? i.get("numberFormatter")
                      ? i.get("numberFormatter")(r)
                      : g(
                          r,
                          a,
                          i.get("numberDigitGroupCount"),
                          i.get("numberDigitGroupSep"),
                          i.get("numberDecimalMark")
                        )
                    : r)
            );
          });
        },
      })),
      (W.spformat = function (t, e) {
        return new v(t, e);
      }),
      (H = function (t, e, i) {
        return t < e ? e : i < t ? i : t;
      }),
      (y = function (t, e) {
        var i;
        return 2 === e
          ? ((i = A.floor(t.length / 2)),
            t.length % 2 ? t[i] : (t[i - 1] + t[i]) / 2)
          : t.length % 2
          ? (i = (t.length * e + e) / 4) % 1
            ? (t[A.floor(i)] + t[A.floor(i) - 1]) / 2
            : t[i - 1]
          : (i = (t.length * e + 2) / 4) % 1
          ? (t[A.floor(i)] + t[A.floor(i) - 1]) / 2
          : t[i - 1];
      }),
      (T = function (t) {
        var e;
        switch (t) {
          case "undefined":
            t = F;
            break;
          case "null":
            t = null;
            break;
          case "true":
            t = !0;
            break;
          case "false":
            t = !1;
            break;
          default:
            t == (e = parseFloat(t)) && (t = e);
        }
        return t;
      }),
      (q = function (t) {
        for (var e = [], i = t.length; i--; ) e[i] = T(t[i]);
        return e;
      }),
      (I = function (t, e) {
        for (var i = [], s = 0, n = t.length; s < n; s++)
          t[s] !== e && i.push(t[s]);
        return i;
      }),
      (l = function (t) {
        return !isNaN(parseFloat(t)) && isFinite(t);
      }),
      (g = function (t, e, i, s, n) {
        var r;
        for (
          t = (!1 === e ? parseFloat(t).toString() : t.toFixed(e)).split(""),
            (e = (e = W.inArray(".", t)) < 0 ? t.length : e) < t.length &&
              (t[e] = n),
            r = e - i;
          0 < r;
          r -= i
        )
          t.splice(r, 0, s);
        return t.join("");
      }),
      (b = function (t, e, i) {
        for (var s = e.length; s--; )
          if ((!i || null !== e[s]) && e[s] !== t) return !1;
        return !0;
      }),
      (r = function (t) {
        return W.isArray(t) ? t : [t];
      }),
      (t = function (t) {
        var e, i;
        if (w.createStyleSheet)
          try {
            return void (w.createStyleSheet().cssText = t);
          } catch (t) {
            i = !0;
          }
        ((e = w.createElement("style")).type = "text/css"),
          w.getElementsByTagName("head")[0].appendChild(e),
          i
            ? (w.styleSheets[w.styleSheets.length - 1].cssText = t)
            : (e[
                "string" == typeof w.body.style.WebkitAppearance
                  ? "innerText"
                  : "innerHTML"
              ] = t);
      }),
      (W.fn.simpledraw = function (t, e, i, s) {
        var n;
        if (!i || !(n = this.data("_jqs_vcanvas"))) {
          if (!1 === W.fn.sparkline.canvas) return !1;
          if (W.fn.sparkline.canvas === F) {
            var i = w.createElement("canvas");
            if (i.getContext && i.getContext("2d"))
              W.fn.sparkline.canvas = function (t, e, i, s) {
                return new c(t, e, i, s);
              };
            else {
              if (!w.namespaces || w.namespaces.v)
                return (W.fn.sparkline.canvas = !1);
              w.namespaces.add(
                "v",
                "urn:schemas-microsoft-com:vml",
                "#default#VML"
              ),
                (W.fn.sparkline.canvas = function (t, e, i, s) {
                  return new d(t, e, i);
                });
            }
          }
          t === F && (t = W(this).innerWidth()),
            e === F && (e = W(this).innerHeight()),
            (n = W.fn.sparkline.canvas(t, e, this, s)),
            (i = W(this).data("_jqs_mhandler")) && i.registerCanvas(n);
        }
        return n;
      }),
      (W.fn.cleardraw = function () {
        var t = this.data("_jqs_vcanvas");
        t && t.reset();
      }),
      (W.RangeMapclassName = j =
        x({
          init: function (t) {
            var e,
              i,
              s = [];
            for (e in t)
              t.hasOwnProperty(e) &&
                "string" == typeof e &&
                -1 < e.indexOf(":") &&
                (((i = e.split(":"))[0] =
                  0 === i[0].length ? -1 / 0 : parseFloat(i[0])),
                (i[1] = 0 === i[1].length ? 1 / 0 : parseFloat(i[1])),
                (i[2] = t[e]),
                s.push(i));
            (this.map = t), (this.rangelist = s || !1);
          },
          get: function (t) {
            var e,
              i,
              s,
              n = this.rangelist;
            if ((s = this.map[t]) !== F) return s;
            if (n)
              for (e = n.length; e--; )
                if ((i = n[e])[0] <= t && i[1] >= t) return i[2];
            return F;
          },
        })),
      (W.range_map = function (t) {
        return new j(t);
      }),
      (o = x({
        init: function (t, e) {
          var i = W(t);
          (this.$el = i),
            (this.options = e),
            (this.currentPageX = 0),
            (this.currentPageY = 0),
            (this.el = t),
            (this.splist = []),
            (this.tooltip = null),
            (this.over = !1),
            (this.displayTooltips = !e.get("disableTooltips")),
            (this.highlightEnabled = !e.get("disableHighlight"));
        },
        registerSparkline: function (t) {
          this.splist.push(t), this.over && this.updateDisplay();
        },
        registerCanvas: function (t) {
          var e = W(t.canvas);
          (this.canvas = t),
            (this.$canvas = e).mouseenter(W.proxy(this.mouseenter, this)),
            e.mouseleave(W.proxy(this.mouseleave, this)),
            e.click(W.proxy(this.mouseclick, this));
        },
        reset: function (t) {
          (this.splist = []),
            this.tooltip && t && (this.tooltip.remove(), (this.tooltip = F));
        },
        mouseclick: function (t) {
          var e = W.Event("sparklineClick");
          (e.originalEvent = t),
            (e.sparklines = this.splist),
            this.$el.trigger(e);
        },
        mouseenter: function (t) {
          W(w.body).unbind("mousemove.jqs"),
            W(w.body).bind("mousemove.jqs", W.proxy(this.mousemove, this)),
            (this.over = !0),
            (this.currentPageX = t.pageX),
            (this.currentPageY = t.pageY),
            (this.currentEl = t.target),
            !this.tooltip &&
              this.displayTooltips &&
              ((this.tooltip = new e(this.options)),
              this.tooltip.updatePosition(t.pageX, t.pageY)),
            this.updateDisplay();
        },
        mouseleave: function () {
          W(w.body).unbind("mousemove.jqs");
          var t,
            e = this.splist,
            i = e.length,
            s = !1;
          for (
            this.over = !1,
              this.currentEl = null,
              this.tooltip && (this.tooltip.remove(), (this.tooltip = null)),
              t = 0;
            t < i;
            t++
          )
            e[t].clearRegionHighlight() && (s = !0);
          s && this.canvas.render();
        },
        mousemove: function (t) {
          (this.currentPageX = t.pageX),
            (this.currentPageY = t.pageY),
            (this.currentEl = t.target),
            this.tooltip && this.tooltip.updatePosition(t.pageX, t.pageY),
            this.updateDisplay();
        },
        updateDisplay: function () {
          var t,
            e,
            i,
            s = this.splist,
            n = s.length,
            r = !1,
            a = this.$canvas.offset(),
            h = this.currentPageX - a.left,
            o = this.currentPageY - a.top;
          if (this.over) {
            for (e = 0; e < n; e++)
              (i = s[e].setRegionHighlight(this.currentEl, h, o)) && (r = !0);
            if (r) {
              if (
                (((a = W.Event("sparklineRegionChange")).sparklines =
                  this.splist),
                this.$el.trigger(a),
                this.tooltip)
              ) {
                for (t = "", e = 0; e < n; e++)
                  t += s[e].getCurrentRegionTooltip();
                this.tooltip.setContent(t);
              }
              this.disableHighlight || this.canvas.render();
            }
            null === i && this.mouseleave();
          }
        },
      })),
      (e = x({
        sizeStyle:
          "position: static !important;display: block !important;visibility: hidden !important;float: left !important;",
        init: function (t) {
          var e = t.get("tooltipClassname", "jqstooltip"),
            i = this.sizeStyle;
          (this.container = t.get("tooltipContainer") || w.body),
            (this.tooltipOffsetX = t.get("tooltipOffsetX", 10)),
            (this.tooltipOffsetY = t.get("tooltipOffsetY", 12)),
            W("#jqssizetip").remove(),
            W("#jqstooltip").remove(),
            (this.sizetip = W("<div/>", {
              id: "jqssizetip",
              style: i,
              class: e,
            })),
            (this.tooltip = W("<div/>", {
              id: "jqstooltip",
              class: e,
            }).appendTo(this.container)),
            (t = this.tooltip.offset()),
            (this.offsetLeft = t.left),
            (this.offsetTop = t.top),
            (this.hidden = !0),
            W(window).unbind("resize.jqs scroll.jqs"),
            W(window).bind(
              "resize.jqs scroll.jqs",
              W.proxy(this.updateWindowDims, this)
            ),
            this.updateWindowDims();
        },
        updateWindowDims: function () {
          (this.scrollTop = W(window).scrollTop()),
            (this.scrollLeft = W(window).scrollLeft()),
            (this.scrollRight = this.scrollLeft + W(window).width()),
            this.updatePosition();
        },
        getSize: function (t) {
          this.sizetip.html(t).appendTo(this.container),
            (this.width = this.sizetip.width() + 1),
            (this.height = this.sizetip.height()),
            this.sizetip.remove();
        },
        setContent: function (t) {
          t
            ? (this.getSize(t),
              this.tooltip.html(t).css({
                width: this.width,
                height: this.height,
                visibility: "visible",
              }),
              this.hidden && ((this.hidden = !1), this.updatePosition()))
            : (this.tooltip.css("visibility", "hidden"), (this.hidden = !0));
        },
        updatePosition: function (t, e) {
          if (t === F) {
            if (this.mousex === F) return;
            (t = this.mousex - this.offsetLeft),
              (e = this.mousey - this.offsetTop);
          } else
            (this.mousex = t -= this.offsetLeft),
              (this.mousey = e -= this.offsetTop);
          this.height &&
            this.width &&
            !this.hidden &&
            ((e -= this.height + this.tooltipOffsetY),
            (t += this.tooltipOffsetX),
            e < this.scrollTop && (e = this.scrollTop),
            t < this.scrollLeft
              ? (t = this.scrollLeft)
              : t + this.width > this.scrollRight &&
                (t = this.scrollRight - this.width),
            this.tooltip.css({ left: t, top: e }));
        },
        remove: function () {
          this.tooltip.remove(),
            this.sizetip.remove(),
            (this.sizetip = this.tooltip = F),
            W(window).unbind("resize.jqs scroll.jqs");
        },
      })),
      W(function () {
        t(
          '.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;box-sizing: content-box;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}'
        );
      }),
      (n = []),
      (W.fn.sparkline = function (h, i) {
        return this.each(function () {
          var t,
            r = new W.fn.sparkline.options(this, i),
            a = W(this),
            e = function () {
              var t,
                e,
                i,
                s =
                  "html" === h || h === F
                    ? (s =
                        (s = this.getAttribute(r.get("tagValuesAttribute"))) !==
                          F && null !== s
                          ? s
                          : a.html())
                        .replace(/(^\s*<!--)|(-->\s*$)|\s+/g, "")
                        .split(",")
                    : h,
                n =
                  "auto" === r.get("width")
                    ? s.length * r.get("defaultPixelsPerValue")
                    : r.get("width");
              "auto" === r.get("height")
                ? (r.get("composite") && W.data(this, "_jqs_vcanvas")) ||
                  (((i = w.createElement("span")).innerHTML = "a"),
                  a.html(i),
                  (t = W(i).innerHeight() || W(i).height()),
                  W(i).remove(),
                  (i = null))
                : (t = r.get("height")),
                r.get("disableInteraction")
                  ? (e = !1)
                  : (e = W.data(this, "_jqs_mhandler"))
                  ? r.get("composite") || e.reset()
                  : ((e = new o(this, r)), W.data(this, "_jqs_mhandler", e)),
                r.get("composite") && !W.data(this, "_jqs_vcanvas")
                  ? W.data(this, "_jqs_errnotify") ||
                    (alert(
                      "Attempted to attach a composite sparkline to an element with no existing sparkline"
                    ),
                    W.data(this, "_jqs_errnotify", !0))
                  : ((i = new W.fn.sparkline[r.get("type")](
                      this,
                      s,
                      r,
                      n,
                      t
                    )).render(),
                    e && e.registerSparkline(i));
            };
          if (
            (W(this).html() &&
              !r.get("disableHiddenCheck") &&
              W(this).is(":hidden")) ||
            !W(this).parents("body").length
          ) {
            if (!r.get("composite") && W.data(this, "_jqs_pending"))
              for (t = n.length; t; t--)
                n[t - 1][0] == this && n.splice(t - 1, 1);
            n.push([this, e]), W.data(this, "_jqs_pending", !0);
          } else e.call(this);
        });
      }),
      (W.fn.sparkline.defaults = i()),
      (W.sparkline_display_visible = function () {
        for (var t, e = [], i = 0, s = n.length; i < s; i++)
          (t = n[i][0]),
            W(t).is(":visible") && !W(t).parents().is(":hidden")
              ? (n[i][1].call(t),
                W.data(n[i][0], "_jqs_pending", !1),
                e.push(i))
              : W(t).closest("html").length ||
                W.data(t, "_jqs_pending") ||
                (W.data(n[i][0], "_jqs_pending", !1), e.push(i));
        for (i = e.length; i; i--) n.splice(e[i - 1], 1);
      }),
      (W.fn.sparkline.options = x({
        init: function (t, e) {
          var i, s;
          (this.userOptions = e = e || {}),
            (this.tag = t),
            (this.tagValCache = {}),
            (i = (t = W.fn.sparkline.defaults).common),
            (this.tagOptionsPrefix =
              e.enableTagOptions && (e.tagOptionsPrefix || i.tagOptionsPrefix)),
            (t =
              (s = this.getTagSetting("type")) === f
                ? t[e.type || i.type]
                : t[s]),
            (this.mergedOptions = W.extend({}, i, t, e));
        },
        getTagSetting: function (t) {
          var e,
            i,
            s,
            n,
            r = this.tagOptionsPrefix;
          if (!1 === r || r === F) return f;
          if (this.tagValCache.hasOwnProperty(t)) e = this.tagValCache.key;
          else {
            if ((e = this.tag.getAttribute(r + t)) === F || null === e) e = f;
            else if ("[" === e.substr(0, 1))
              for (i = (e = e.substr(1, e.length - 2).split(",")).length; i--; )
                e[i] = T(e[i].replace(/(^\s*)|(\s*$)/g, ""));
            else if ("{" === e.substr(0, 1))
              for (
                s = e.substr(1, e.length - 2).split(","), e = {}, i = s.length;
                i--;

              )
                e[(n = s[i].split(":", 2))[0].replace(/(^\s*)|(\s*$)/g, "")] =
                  T(n[1].replace(/(^\s*)|(\s*$)/g, ""));
            else e = T(e);
            this.tagValCache.key = e;
          }
          return e;
        },
        get: function (t, e) {
          var i = this.getTagSetting(t);
          return i === f && (i = this.mergedOptions[t]) === F ? e : i;
        },
      })),
      (W.fn.sparkline._base = x({
        disabled: !1,
        init: function (t, e, i, s, n) {
          (this.el = t),
            (this.$el = W(t)),
            (this.values = e),
            (this.options = i),
            (this.width = s),
            (this.height = n),
            (this.currentRegion = F);
        },
        initTarget: function () {
          var t = !this.options.get("disableInteraction");
          (this.target = this.$el.simpledraw(
            this.width,
            this.height,
            this.options.get("composite"),
            t
          ))
            ? ((this.canvasWidth = this.target.pixelWidth),
              (this.canvasHeight = this.target.pixelHeight))
            : (this.disabled = !0);
        },
        render: function () {
          return !this.disabled || ((this.el.innerHTML = ""), !1);
        },
        getRegion: function (t, e) {},
        setRegionHighlight: function (t, e, i) {
          var s = this.currentRegion,
            n = !this.options.get("disableHighlight");
          return e > this.canvasWidth || i > this.canvasHeight || e < 0 || i < 0
            ? null
            : s !== (t = this.getRegion(t, e, i)) &&
                (s !== F && n && this.removeHighlight(),
                (this.currentRegion = t) !== F && n && this.renderHighlight(),
                !0);
        },
        clearRegionHighlight: function () {
          return (
            this.currentRegion !== F &&
            (this.removeHighlight(), !(this.currentRegion = F))
          );
        },
        renderHighlight: function () {
          this.changeHighlight(!0);
        },
        removeHighlight: function () {
          this.changeHighlight(!1);
        },
        changeHighlight: function (t) {},
        getCurrentRegionTooltip: function () {
          var t,
            e,
            i,
            s,
            n,
            r,
            a,
            h,
            o,
            l,
            g,
            p,
            u,
            c,
            d = this.options,
            f = "",
            m = [];
          if (this.currentRegion === F) return "";
          if (
            ((t = this.getCurrentRegionFields()),
            (g = d.get("tooltipFormatter")))
          )
            return g(this, d, t);
          if (
            (d.get("tooltipChartTitle") &&
              (f +=
                '<div class="jqs jqstitle">' +
                d.get("tooltipChartTitle") +
                "</div>\n"),
            !(e = this.options.get("tooltipFormat")))
          )
            return "";
          if (
            (W.isArray(e) || (e = [e]),
            W.isArray(t) || (t = [t]),
            (a = this.options.get("tooltipFormatFieldlist")),
            (h = this.options.get("tooltipFormatFieldlistKey")),
            a && h)
          ) {
            for (o = [], r = t.length; r--; )
              (l = t[r][h]), -1 != (c = W.inArray(l, a)) && (o[c] = t[r]);
            t = o;
          }
          for (i = e.length, u = t.length, r = 0; r < i; r++)
            for (
              s =
                (p = "string" == typeof (p = e[r]) ? new v(p) : p).fclass ||
                "jqsfield",
                c = 0;
              c < u;
              c++
            )
              (t[c].isNull && d.get("tooltipSkipNull")) ||
                (W.extend(t[c], {
                  prefix: d.get("tooltipPrefix"),
                  suffix: d.get("tooltipSuffix"),
                }),
                (n = p.render(t[c], d.get("tooltipValueLookups"), d)),
                m.push('<div class="' + s + '">' + n + "</div>"));
          return m.length ? f + m.join("\n") : "";
        },
        getCurrentRegionFields: function () {},
        calcHighlightColor: function (t, e) {
          var i,
            s,
            n,
            r,
            a = e.get("highlightColor"),
            h = e.get("highlightLighten");
          if (a) return a;
          if (
            h &&
            (i =
              /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(t) ||
              /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(t))
          ) {
            for (n = [], s = 4 === t.length ? 16 : 1, r = 0; r < 3; r++)
              n[r] = H(A.round(parseInt(i[r + 1], 16) * s * h), 0, 255);
            return "rgb(" + n.join(",") + ")";
          }
          return t;
        },
      })),
      (i = {
        changeHighlight: function (t) {
          var e = this.currentRegion,
            i = this.target,
            s = this.regionShapes[e];
          s &&
            ((t = this.renderRegion(e, t)),
            W.isArray(t) || W.isArray(s)
              ? (i.replaceWithShapes(s, t),
                (this.regionShapes[e] = W.map(t, function (t) {
                  return t.id;
                })))
              : (i.replaceWithShape(s, t), (this.regionShapes[e] = t.id)));
        },
        render: function () {
          var t,
            e,
            i,
            s,
            n = this.values,
            r = this.target,
            a = this.regionShapes;
          if (this.cls._super.render.call(this)) {
            for (i = n.length; i--; )
              if ((t = this.renderRegion(i)))
                if (W.isArray(t)) {
                  for (e = [], s = t.length; s--; )
                    t[s].append(), e.push(t[s].id);
                  a[i] = e;
                } else t.append(), (a[i] = t.id);
              else a[i] = null;
            r.render();
          }
        },
      }),
      (W.fn.sparkline.line = P =
        x(W.fn.sparkline._base, {
          type: "line",
          init: function (t, e, i, s, n) {
            P._super.init.call(this, t, e, i, s, n),
              (this.vertices = []),
              (this.regionMap = []),
              (this.xvalues = []),
              (this.yvalues = []),
              (this.yminmax = []),
              (this.hightlightSpotId = null),
              (this.lastShapeId = null),
              this.initTarget();
          },
          getRegion: function (t, e, i) {
            for (var s = this.regionMap, n = s.length; n--; )
              if (null !== s[n] && e >= s[n][0] && e <= s[n][1]) return s[n][2];
            return F;
          },
          getCurrentRegionFields: function () {
            var t = this.currentRegion;
            return {
              isNull: null === this.yvalues[t],
              x: this.xvalues[t],
              y: this.yvalues[t],
              color: this.options.get("lineColor"),
              fillColor: this.options.get("fillColor"),
              offset: t,
            };
          },
          renderHighlight: function () {
            var t = this.currentRegion,
              e = this.target,
              t = this.vertices[t],
              i = this.options,
              s = i.get("spotRadius"),
              n = i.get("highlightSpotColor"),
              i = i.get("highlightLineColor");
            t &&
              (s &&
                n &&
                ((s = e.drawCircle(t[0], t[1], s, F, n)),
                (this.highlightSpotId = s.id),
                e.insertAfterShape(this.lastShapeId, s)),
              i) &&
              ((n = e.drawLine(
                t[0],
                this.canvasTop,
                t[0],
                this.canvasTop + this.canvasHeight,
                i
              )),
              (this.highlightLineId = n.id),
              e.insertAfterShape(this.lastShapeId, n));
          },
          removeHighlight: function () {
            var t = this.target;
            this.highlightSpotId &&
              (t.removeShapeId(this.highlightSpotId),
              (this.highlightSpotId = null)),
              this.highlightLineId &&
                (t.removeShapeId(this.highlightLineId),
                (this.highlightLineId = null));
          },
          scanValues: function () {
            for (
              var t,
                e,
                i,
                s,
                n = this.values,
                r = n.length,
                a = this.xvalues,
                h = this.yvalues,
                o = this.yminmax,
                l = 0;
              l < r;
              l++
            )
              (t = n[l]),
                (e = "string" == typeof n[l]),
                (i = "object" == typeof n[l] && n[l] instanceof Array),
                (s = e && n[l].split(":")),
                e && 2 === s.length
                  ? (a.push(Number(s[0])),
                    h.push(Number(s[1])),
                    o.push(Number(s[1])))
                  : i
                  ? (a.push(t[0]), h.push(t[1]), o.push(t[1]))
                  : (a.push(l),
                    null === n[l] || "null" === n[l]
                      ? h.push(null)
                      : (h.push(Number(t)), o.push(Number(t))));
            this.options.get("xvalues") && (a = this.options.get("xvalues")),
              (this.maxy = this.maxyorg = A.max.apply(A, o)),
              (this.miny = this.minyorg = A.min.apply(A, o)),
              (this.maxx = A.max.apply(A, a)),
              (this.minx = A.min.apply(A, a)),
              (this.xvalues = a),
              (this.yvalues = h),
              (this.yminmax = o);
          },
          processRangeOptions: function () {
            var t = this.options,
              e = t.get("normalRangeMin"),
              i = t.get("normalRangeMax");
            e !== F &&
              (e < this.miny && (this.miny = e), i > this.maxy) &&
              (this.maxy = i),
              t.get("chartRangeMin") !== F &&
                (t.get("chartRangeClip") ||
                  t.get("chartRangeMin") < this.miny) &&
                (this.miny = t.get("chartRangeMin")),
              t.get("chartRangeMax") !== F &&
                (t.get("chartRangeClip") ||
                  t.get("chartRangeMax") > this.maxy) &&
                (this.maxy = t.get("chartRangeMax")),
              t.get("chartRangeMinX") !== F &&
                (t.get("chartRangeClipX") ||
                  t.get("chartRangeMinX") < this.minx) &&
                (this.minx = t.get("chartRangeMinX")),
              t.get("chartRangeMaxX") !== F &&
                (t.get("chartRangeClipX") ||
                  t.get("chartRangeMaxX") > this.maxx) &&
                (this.maxx = t.get("chartRangeMaxX"));
          },
          drawNormalRange: function (t, e, i, s, n) {
            var r = this.options.get("normalRangeMin"),
              a = this.options.get("normalRangeMax"),
              e = e + A.round(i - i * ((a - this.miny) / n)),
              i = A.round((i * (a - r)) / n);
            this.target
              .drawRect(t, e, s, i, F, this.options.get("normalRangeColor"))
              .append();
          },
          render: function () {
            var t,
              e,
              i,
              s,
              n,
              r,
              a,
              h,
              o,
              l,
              g,
              p,
              u,
              c,
              d,
              f,
              m,
              v,
              x,
              y,
              C,
              w,
              b = this.options,
              R = this.target,
              S = this.canvasWidth,
              k = this.canvasHeight,
              M = this.vertices,
              _ = b.get("spotRadius"),
              H = this.regionMap;
            if (
              P._super.render.call(this) &&
              (this.scanValues(),
              this.processRangeOptions(),
              (y = this.xvalues),
              (C = this.yvalues),
              this.yminmax.length) &&
              !(this.yvalues.length < 2)
            ) {
              for (
                s = n = 0,
                  t = this.maxx - this.minx == 0 ? 1 : this.maxx - this.minx,
                  e = this.maxy - this.miny == 0 ? 1 : this.maxy - this.miny,
                  i = this.yvalues.length - 1,
                  (_ = _ && (S < 4 * _ || k < 4 * _) ? 0 : _) &&
                    (((v =
                      b.get("highlightSpotColor") &&
                      !b.get("disableInteraction")) ||
                      b.get("minSpotColor") ||
                      (b.get("spotColor") && C[i] === this.miny)) &&
                      (k -= A.ceil(_)),
                    (v ||
                      b.get("maxSpotColor") ||
                      (b.get("spotColor") && C[i] === this.maxy)) &&
                      ((k -= A.ceil(_)), (s += A.ceil(_))),
                    (!v &&
                      ((!b.get("minSpotColor") && !b.get("maxSpotColor")) ||
                        (C[0] !== this.miny && C[0] !== this.maxy))) ||
                      ((n += A.ceil(_)), (S -= A.ceil(_))),
                    v ||
                      b.get("spotColor") ||
                      b.get("minSpotColor") ||
                      (b.get("maxSpotColor") &&
                        (C[i] === this.miny || C[i] === this.maxy))) &&
                    (S -= A.ceil(_)),
                  k--,
                  b.get("normalRangeMin") === F ||
                    b.get("drawNormalOnTop") ||
                    this.drawNormalRange(n, s, k, S, e),
                  a = [(r = [])],
                  g = null,
                  u = C.length,
                  w = 0;
                w < u;
                w++
              )
                (h = y[w]),
                  (p = y[w + 1]),
                  (o = C[w]),
                  (l = n + A.round((h - this.minx) * (S / t))),
                  (p = w < u - 1 ? n + A.round((p - this.minx) * (S / t)) : S),
                  (H[w] = [g || 0, (p = l + (p - l) / 2), w]),
                  (g = p),
                  null === o
                    ? w && (null !== C[w - 1] && a.push((r = [])), M.push(null))
                    : ((o = o < this.miny ? this.miny : o) > this.maxy &&
                        (o = this.maxy),
                      r.length || r.push([l, s + k]),
                      (p = [l, s + A.round(k - k * ((o - this.miny) / e))]),
                      r.push(p),
                      M.push(p));
              for (c = [], d = [], f = a.length, w = 0; w < f; w++)
                (r = a[w]).length &&
                  (b.get("fillColor") &&
                    (r.push([r[r.length - 1][0], s + k]),
                    d.push(r.slice(0)),
                    r.pop()),
                  2 < r.length && (r[0] = [r[0][0], r[1][1]]),
                  c.push(r));
              for (f = d.length, w = 0; w < f; w++)
                R.drawShape(
                  d[w],
                  b.get("fillColor"),
                  b.get("fillColor")
                ).append();
              for (
                b.get("normalRangeMin") !== F &&
                  b.get("drawNormalOnTop") &&
                  this.drawNormalRange(n, s, k, S, e),
                  f = c.length,
                  w = 0;
                w < f;
                w++
              )
                R.drawShape(
                  c[w],
                  b.get("lineColor"),
                  F,
                  b.get("lineWidth")
                ).append();
              if (_ && b.get("valueSpots"))
                for (
                  (m = b.get("valueSpots")).get === F && (m = new j(m)), w = 0;
                  w < u;
                  w++
                )
                  (x = m.get(C[w])) &&
                    R.drawCircle(
                      n + A.round((y[w] - this.minx) * (S / t)),
                      s + A.round(k - k * ((C[w] - this.miny) / e)),
                      _,
                      F,
                      x
                    ).append();
              _ &&
                b.get("spotColor") &&
                null !== C[i] &&
                R.drawCircle(
                  n + A.round((y[y.length - 1] - this.minx) * (S / t)),
                  s + A.round(k - k * ((C[i] - this.miny) / e)),
                  _,
                  F,
                  b.get("spotColor")
                ).append(),
                this.maxy !== this.minyorg &&
                  (_ &&
                    b.get("minSpotColor") &&
                    ((h = y[W.inArray(this.minyorg, C)]),
                    R.drawCircle(
                      n + A.round((h - this.minx) * (S / t)),
                      s + A.round(k - k * ((this.minyorg - this.miny) / e)),
                      _,
                      F,
                      b.get("minSpotColor")
                    ).append()),
                  _) &&
                  b.get("maxSpotColor") &&
                  ((h = y[W.inArray(this.maxyorg, C)]),
                  R.drawCircle(
                    n + A.round((h - this.minx) * (S / t)),
                    s + A.round(k - k * ((this.maxyorg - this.miny) / e)),
                    _,
                    F,
                    b.get("maxSpotColor")
                  ).append()),
                (this.lastShapeId = R.getLastShapeId()),
                (this.canvasTop = s),
                R.render();
            }
          },
        })),
      (W.fn.sparkline.bar = L =
        x(W.fn.sparkline._base, i, {
          type: "bar",
          init: function (t, e, i, s, n) {
            var r,
              a,
              h,
              o,
              l,
              g,
              p,
              u,
              c,
              d,
              f = parseInt(i.get("barWidth"), 10),
              m = parseInt(i.get("barSpacing"), 10),
              v = i.get("chartRangeMin"),
              x = i.get("chartRangeMax"),
              y = i.get("chartRangeClip"),
              C = 1 / 0,
              w = -1 / 0;
            for (
              L._super.init.call(this, t, e, i, s, n), M = 0, _ = e.length;
              M < _;
              M++
            )
              ((r = "string" == typeof (c = e[M]) && -1 < c.indexOf(":")) ||
                W.isArray(c)) &&
                ((o = !0),
                r && (c = e[M] = q(c.split(":"))),
                (c = I(c, null)),
                (r = A.min.apply(A, c)) < C && (C = r),
                w < (r = A.max.apply(A, c))) &&
                (w = r);
            (this.stacked = o),
              (this.regionShapes = {}),
              (this.barWidth = f),
              (this.barSpacing = m),
              (this.totalBarWidth = f + m),
              (this.width = s = e.length * f + (e.length - 1) * m),
              this.initTarget(),
              y && ((a = v === F ? -1 / 0 : v), (h = x === F ? 1 / 0 : x));
            for (
              var b = [], R = o ? [] : b, S = [], k = [], M = 0, _ = e.length;
              M < _;
              M++
            )
              if (o)
                for (
                  l = e[M],
                    e[M] = u = [],
                    g = R[M] = k[M] = S[M] = 0,
                    p = l.length;
                  g < p;
                  g++
                )
                  null !== (c = u[g] = y ? H(l[g], a, h) : l[g]) &&
                    (0 < c && (S[M] += c),
                    C < 0 && 0 < w
                      ? c < 0
                        ? (k[M] += A.abs(c))
                        : (R[M] += c)
                      : (R[M] += A.abs(c - (c < 0 ? w : C))),
                    b.push(c));
              else
                (c = y ? H(e[M], a, h) : e[M]),
                  null !== (c = e[M] = T(c)) && b.push(c);
            (this.max = t = A.max.apply(A, b)),
              (this.min = n = A.min.apply(A, b)),
              (this.stackMax = w = o ? A.max.apply(A, S) : t),
              (this.stackMin = C = o ? A.min.apply(A, b) : n),
              i.get("chartRangeMin") !== F &&
                (i.get("chartRangeClip") || i.get("chartRangeMin") < n) &&
                (n = i.get("chartRangeMin")),
              i.get("chartRangeMax") !== F &&
                (i.get("chartRangeClip") || i.get("chartRangeMax") > t) &&
                (t = i.get("chartRangeMax")),
              (this.zeroAxis = f = i.get("zeroAxis", !0)),
              (this.xaxisOffset = m =
                n <= 0 && 0 <= t && f ? 0 : 0 == f || 0 < n ? n : t),
              (s = o ? A.max.apply(A, R) + A.max.apply(A, k) : t - n),
              (this.canvasHeightEf =
                f && n < 0 ? this.canvasHeight - 2 : this.canvasHeight - 1),
              n < m
                ? (d =
                    (((o && 0 <= t ? w : t) - m) / s) * this.canvasHeight) !==
                    A.ceil(d) && ((this.canvasHeightEf -= 2), (d = A.ceil(d)))
                : (d = this.canvasHeight),
              (this.yoffset = d),
              W.isArray(i.get("colorMap"))
                ? ((this.colorMapByIndex = i.get("colorMap")),
                  (this.colorMapByValue = null))
                : ((this.colorMapByIndex = null),
                  (this.colorMapByValue = i.get("colorMap")),
                  this.colorMapByValue &&
                    this.colorMapByValue.get === F &&
                    (this.colorMapByValue = new j(this.colorMapByValue))),
              (this.range = s);
          },
          getRegion: function (t, e, i) {
            e = A.floor(e / this.totalBarWidth);
            return e < 0 || e >= this.values.length ? F : e;
          },
          getCurrentRegionFields: function () {
            for (
              var t,
                e = this.currentRegion,
                i = r(this.values[e]),
                s = [],
                n = i.length;
              n--;

            )
              (t = i[n]),
                s.push({
                  isNull: null === t,
                  value: t,
                  color: this.calcColor(n, t, e),
                  offset: e,
                });
            return s;
          },
          calcColor: function (t, e, i) {
            var s = this.colorMapByIndex,
              n = this.colorMapByValue,
              r = this.options,
              a = this.stacked
                ? r.get("stackedBarColor")
                : e < 0
                ? r.get("negBarColor")
                : r.get("barColor");
            return (
              0 === e && r.get("zeroColor") !== F && (a = r.get("zeroColor")),
              n && (r = n.get(e)) ? (a = r) : s && s.length > i && (a = s[i]),
              W.isArray(a) ? a[t % a.length] : a
            );
          },
          renderRegion: function (t, e) {
            var i,
              s,
              n,
              r,
              a,
              h,
              o,
              l = this.values[t],
              g = this.options,
              p = this.xaxisOffset,
              u = [],
              c = this.range,
              d = this.stacked,
              f = this.target,
              m = t * this.totalBarWidth,
              v = this.canvasHeightEf,
              x = this.yoffset,
              y = (l = W.isArray(l) ? l : [l]).length,
              C = (l[0], b(null, l)),
              w = b(p, l, !0);
            if (C)
              return g.get("nullColor")
                ? ((n = e
                    ? g.get("nullColor")
                    : this.calcHighlightColor(g.get("nullColor"), g)),
                  f.drawRect(
                    m,
                    (i = 0 < x ? x - 1 : x),
                    this.barWidth - 1,
                    0,
                    n,
                    n
                  ))
                : F;
            for (r = x, a = 0; a < y; a++) {
              if (((o = l[a]), d && o === p)) {
                if (!w || h) continue;
                h = !0;
              }
              (s = 0 < c ? A.floor(v * (A.abs(o - p) / c)) + 1 : 1),
                o < p || (o === p && 0 === x)
                  ? ((i = r), (r += s))
                  : ((i = x - s), (x -= s)),
                (n = this.calcColor(a, o, t)),
                e && (n = this.calcHighlightColor(n, g)),
                u.push(f.drawRect(m, i, this.barWidth - 1, s - 1, n, n));
            }
            return 1 === u.length ? u[0] : u;
          },
        })),
      (W.fn.sparkline.tristate = h =
        x(W.fn.sparkline._base, i, {
          type: "tristate",
          init: function (t, e, i, s, n) {
            var r = parseInt(i.get("barWidth"), 10),
              a = parseInt(i.get("barSpacing"), 10);
            h._super.init.call(this, t, e, i, s, n),
              (this.regionShapes = {}),
              (this.barWidth = r),
              (this.barSpacing = a),
              (this.totalBarWidth = r + a),
              (this.values = W.map(e, Number)),
              (this.width = s = e.length * r + (e.length - 1) * a),
              W.isArray(i.get("colorMap"))
                ? ((this.colorMapByIndex = i.get("colorMap")),
                  (this.colorMapByValue = null))
                : ((this.colorMapByIndex = null),
                  (this.colorMapByValue = i.get("colorMap")),
                  this.colorMapByValue &&
                    this.colorMapByValue.get === F &&
                    (this.colorMapByValue = new j(this.colorMapByValue))),
              this.initTarget();
          },
          getRegion: function (t, e, i) {
            return A.floor(e / this.totalBarWidth);
          },
          getCurrentRegionFields: function () {
            var t = this.currentRegion;
            return {
              isNull: this.values[t] === F,
              value: this.values[t],
              color: this.calcColor(this.values[t], t),
              offset: t,
            };
          },
          calcColor: function (t, e) {
            var i = this.values,
              s = this.options,
              n = this.colorMapByIndex,
              r = this.colorMapByValue,
              t =
                r && (r = r.get(t))
                  ? r
                  : n && n.length > e
                  ? n[e]
                  : i[e] < 0
                  ? s.get("negBarColor")
                  : 0 < i[e]
                  ? s.get("posBarColor")
                  : s.get("zeroBarColor");
            return t;
          },
          renderRegion: function (t, e) {
            var i,
              s = this.values,
              n = this.options,
              r = this.target,
              a = r.pixelHeight,
              a = A.round(a / 2),
              h = t * this.totalBarWidth,
              a =
                s[t] < 0
                  ? (i = a) - 1
                  : 0 < s[t]
                  ? ((i = 0), a - 1)
                  : ((i = a - 1), 2),
              s = this.calcColor(s[t], t);
            if (null !== s)
              return (
                e && (s = this.calcHighlightColor(s, n)),
                r.drawRect(h, i, this.barWidth - 1, a - 1, s, s)
              );
          },
        })),
      (W.fn.sparkline.discrete = a =
        x(W.fn.sparkline._base, i, {
          type: "discrete",
          init: function (t, e, i, s, n) {
            a._super.init.call(this, t, e, i, s, n),
              (this.regionShapes = {}),
              (this.values = e = W.map(e, Number)),
              (this.min = A.min.apply(A, e)),
              (this.max = A.max.apply(A, e)),
              (this.range = this.max - this.min),
              (this.width = s =
                "auto" === i.get("width") ? 2 * e.length : this.width),
              (this.interval = A.floor(s / e.length)),
              (this.itemWidth = s / e.length),
              i.get("chartRangeMin") !== F &&
                (i.get("chartRangeClip") ||
                  i.get("chartRangeMin") < this.min) &&
                (this.min = i.get("chartRangeMin")),
              i.get("chartRangeMax") !== F &&
                (i.get("chartRangeClip") ||
                  i.get("chartRangeMax") > this.max) &&
                (this.max = i.get("chartRangeMax")),
              this.initTarget(),
              this.target &&
                (this.lineHeight =
                  "auto" === i.get("lineHeight")
                    ? A.round(0.3 * this.canvasHeight)
                    : i.get("lineHeight"));
          },
          getRegion: function (t, e, i) {
            return A.floor(e / this.itemWidth);
          },
          getCurrentRegionFields: function () {
            var t = this.currentRegion;
            return {
              isNull: this.values[t] === F,
              value: this.values[t],
              offset: t,
            };
          },
          renderRegion: function (t, e) {
            var i = this.values,
              s = this.options,
              n = this.min,
              r = this.max,
              a = this.range,
              h = this.interval,
              o = this.target,
              l = this.canvasHeight,
              g = this.lineHeight,
              l = l - g,
              i = H(i[t], n, r),
              r = t * h,
              t = A.round(l - ((i - n) / a) * l),
              h =
                s.get("thresholdColor") && i < s.get("thresholdValue")
                  ? s.get("thresholdColor")
                  : s.get("lineColor");
            return (
              e && (h = this.calcHighlightColor(h, s)),
              o.drawLine(r, t, r, t + g, h)
            );
          },
        })),
      (W.fn.sparkline.bullet = p =
        x(W.fn.sparkline._base, {
          type: "bullet",
          init: function (t, e, i, s, n) {
            var r;
            p._super.init.call(this, t, e, i, s, n),
              (this.values = e = q(e)),
              ((t = e.slice())[0] = null === t[0] ? t[2] : t[0]),
              (t[1] = null === e[1] ? t[2] : t[1]),
              (t = A.min.apply(A, e)),
              (r = A.max.apply(A, e)),
              (t = i.get("base") === F ? (t < 0 ? t : 0) : i.get("base")),
              (this.min = t),
              (this.max = r),
              (this.range = r - t),
              (this.shapes = {}),
              (this.valueShapes = {}),
              (this.regiondata = {}),
              (this.width = s = "auto" === i.get("width") ? "4.0em" : s),
              (this.target = this.$el.simpledraw(s, n, i.get("composite"))),
              e.length || (this.disabled = !0),
              this.initTarget();
          },
          getRegion: function (t, e, i) {
            t = this.target.getShapeAt(t, e, i);
            return t !== F && this.shapes[t] !== F ? this.shapes[t] : F;
          },
          getCurrentRegionFields: function () {
            var t = this.currentRegion;
            return {
              fieldkey: t.substr(0, 1),
              value: this.values[t.substr(1)],
              region: t,
            };
          },
          changeHighlight: function (t) {
            var e,
              i = this.currentRegion,
              s = this.valueShapes[i];
            switch ((delete this.shapes[s], i.substr(0, 1))) {
              case "r":
                e = this.renderRange(i.substr(1), t);
                break;
              case "p":
                e = this.renderPerformance(t);
                break;
              case "t":
                e = this.renderTarget(t);
            }
            (this.valueShapes[i] = e.id),
              (this.shapes[e.id] = i),
              this.target.replaceWithShape(s, e);
          },
          renderRange: function (t, e) {
            var i = this.values[t],
              i = A.round(this.canvasWidth * ((i - this.min) / this.range)),
              t = this.options.get("rangeColors")[t - 2];
            return (
              e && (t = this.calcHighlightColor(t, this.options)),
              this.target.drawRect(0, 0, i - 1, this.canvasHeight - 1, t, t)
            );
          },
          renderPerformance: function (t) {
            var e = this.values[1],
              e = A.round(this.canvasWidth * ((e - this.min) / this.range)),
              i = this.options.get("performanceColor");
            return (
              t && (i = this.calcHighlightColor(i, this.options)),
              this.target.drawRect(
                0,
                A.round(0.3 * this.canvasHeight),
                e - 1,
                A.round(0.4 * this.canvasHeight) - 1,
                i,
                i
              )
            );
          },
          renderTarget: function (t) {
            var e = this.values[0],
              e = A.round(
                this.canvasWidth * ((e - this.min) / this.range) -
                  this.options.get("targetWidth") / 2
              ),
              i = A.round(0.1 * this.canvasHeight),
              s = this.canvasHeight - 2 * i,
              n = this.options.get("targetColor");
            return (
              t && (n = this.calcHighlightColor(n, this.options)),
              this.target.drawRect(
                e,
                i,
                this.options.get("targetWidth") - 1,
                s - 1,
                n,
                n
              )
            );
          },
          render: function () {
            var t,
              e,
              i = this.values.length,
              s = this.target;
            if (p._super.render.call(this)) {
              for (t = 2; t < i; t++)
                (e = this.renderRange(t).append()),
                  (this.shapes[e.id] = "r" + t),
                  (this.valueShapes["r" + t] = e.id);
              null !== this.values[1] &&
                ((e = this.renderPerformance().append()),
                (this.shapes[e.id] = "p1"),
                (this.valueShapes.p1 = e.id)),
                null !== this.values[0] &&
                  ((e = this.renderTarget().append()),
                  (this.shapes[e.id] = "t0"),
                  (this.valueShapes.t0 = e.id)),
                s.render();
            }
          },
        })),
      (W.fn.sparkline.pie = u =
        x(W.fn.sparkline._base, {
          type: "pie",
          init: function (t, e, i, s, n) {
            var r,
              a = 0;
            if (
              (u._super.init.call(this, t, e, i, s, n),
              (this.shapes = {}),
              (this.valueShapes = {}),
              (this.values = e = W.map(e, Number)),
              "auto" === i.get("width") && (this.width = this.height),
              0 < e.length)
            )
              for (r = e.length; r--; ) a += e[r];
            (this.total = a),
              this.initTarget(),
              (this.radius = A.floor(
                A.min(this.canvasWidth, this.canvasHeight) / 2
              ));
          },
          getRegion: function (t, e, i) {
            t = this.target.getShapeAt(t, e, i);
            return t !== F && this.shapes[t] !== F ? this.shapes[t] : F;
          },
          getCurrentRegionFields: function () {
            var t = this.currentRegion;
            return {
              isNull: this.values[t] === F,
              value: this.values[t],
              percent: (this.values[t] / this.total) * 100,
              color:
                this.options.get("sliceColors")[
                  t % this.options.get("sliceColors").length
                ],
              offset: t,
            };
          },
          changeHighlight: function (t) {
            var e = this.currentRegion,
              t = this.renderSlice(e, t),
              i = this.valueShapes[e];
            delete this.shapes[i],
              this.target.replaceWithShape(i, t),
              (this.valueShapes[e] = t.id),
              (this.shapes[t.id] = e);
          },
          renderSlice: function (t, e) {
            for (
              var i,
                s,
                n,
                r = this.target,
                a = this.options,
                h = this.radius,
                o = a.get("borderWidth"),
                l = a.get("offset"),
                g = 2 * A.PI,
                p = this.values,
                u = this.total,
                c = l ? 2 * A.PI * (l / 360) : 0,
                d = p.length,
                f = 0;
              f < d;
              f++
            ) {
              if (((s = i = c), 0 < u && (s = c + g * (p[f] / u)), t === f))
                return (
                  (n = a.get("sliceColors")[f % a.get("sliceColors").length]),
                  e && (n = this.calcHighlightColor(n, a)),
                  r.drawPieSlice(h, h, h - o, i, s, F, n)
                );
              c = s;
            }
          },
          render: function () {
            var t,
              e,
              i = this.target,
              s = this.values,
              n = this.options,
              r = this.radius,
              a = n.get("borderWidth"),
              h = n.get("donutWidth");
            if (u._super.render.call(this)) {
              for (
                a &&
                  i
                    .drawCircle(
                      r,
                      r,
                      A.floor(r - a / 2),
                      n.get("borderColor"),
                      F,
                      a
                    )
                    .append(),
                  e = s.length;
                e--;

              )
                s[e] &&
                  ((t = this.renderSlice(e).append()),
                  (this.valueShapes[e] = t.id),
                  (this.shapes[t.id] = e));
              h &&
                i
                  .drawCircle(
                    r,
                    r,
                    r - h,
                    n.get("donutColor"),
                    n.get("donutColor"),
                    0
                  )
                  .append(),
                i.render();
            }
          },
        })),
      (W.fn.sparkline.box = C =
        x(W.fn.sparkline._base, {
          type: "box",
          init: function (t, e, i, s, n) {
            C._super.init.call(this, t, e, i, s, n),
              (this.values = W.map(e, Number)),
              (this.width = "auto" === i.get("width") ? "4.0em" : s),
              this.initTarget(),
              this.values.length || (this.disabled = 1);
          },
          getRegion: function () {
            return 1;
          },
          getCurrentRegionFields: function () {
            var t = [
              { field: "lq", value: this.quartiles[0] },
              { field: "med", value: this.quartiles[1] },
              { field: "uq", value: this.quartiles[2] },
            ];
            return (
              this.loutlier !== F &&
                t.push({ field: "lo", value: this.loutlier }),
              this.routlier !== F &&
                t.push({ field: "ro", value: this.routlier }),
              this.lwhisker !== F &&
                t.push({ field: "lw", value: this.lwhisker }),
              this.rwhisker !== F &&
                t.push({ field: "rw", value: this.rwhisker }),
              t
            );
          },
          render: function () {
            var t,
              e,
              i,
              s,
              n,
              r,
              a,
              h,
              o,
              l,
              g = this.target,
              p = this.values,
              u = p.length,
              c = this.options,
              d = this.canvasWidth,
              f = this.canvasHeight,
              m =
                c.get("chartRangeMin") === F
                  ? A.min.apply(A, p)
                  : c.get("chartRangeMin"),
              v =
                c.get("chartRangeMax") === F
                  ? A.max.apply(A, p)
                  : c.get("chartRangeMax"),
              x = 0;
            if (C._super.render.call(this)) {
              if (c.get("raw"))
                c.get("showOutliers") && 5 < p.length
                  ? ((e = p[0]),
                    (t = p[1]),
                    (s = p[2]),
                    (n = p[3]),
                    (r = p[4]),
                    (a = p[5]),
                    (h = p[6]))
                  : ((t = p[0]),
                    (s = p[1]),
                    (n = p[2]),
                    (r = p[3]),
                    (a = p[4]));
              else if (
                (p.sort(function (t, e) {
                  return t - e;
                }),
                (s = y(p, 1)),
                (n = y(p, 2)),
                (i = (r = y(p, 3)) - s),
                c.get("showOutliers"))
              ) {
                for (t = a = F, o = 0; o < u; o++)
                  t === F && p[o] > s - i * c.get("outlierIQR") && (t = p[o]),
                    p[o] < r + i * c.get("outlierIQR") && (a = p[o]);
                (e = p[0]), (h = p[u - 1]);
              } else (t = p[0]), (a = p[u - 1]);
              (this.quartiles = [s, n, r]),
                (this.lwhisker = t),
                (this.rwhisker = a),
                (this.loutlier = e),
                (this.routlier = h),
                (l = d / (v - m + 1)),
                c.get("showOutliers") &&
                  ((x = A.ceil(c.get("spotRadius"))),
                  (l = (d -= 2 * A.ceil(c.get("spotRadius"))) / (v - m + 1)),
                  e < t &&
                    g
                      .drawCircle(
                        (e - m) * l + x,
                        f / 2,
                        c.get("spotRadius"),
                        c.get("outlierLineColor"),
                        c.get("outlierFillColor")
                      )
                      .append(),
                  a < h) &&
                  g
                    .drawCircle(
                      (h - m) * l + x,
                      f / 2,
                      c.get("spotRadius"),
                      c.get("outlierLineColor"),
                      c.get("outlierFillColor")
                    )
                    .append(),
                g
                  .drawRect(
                    A.round((s - m) * l + x),
                    A.round(0.1 * f),
                    A.round((r - s) * l),
                    A.round(0.8 * f),
                    c.get("boxLineColor"),
                    c.get("boxFillColor")
                  )
                  .append(),
                g
                  .drawLine(
                    A.round((t - m) * l + x),
                    A.round(f / 2),
                    A.round((s - m) * l + x),
                    A.round(f / 2),
                    c.get("lineColor")
                  )
                  .append(),
                g
                  .drawLine(
                    A.round((t - m) * l + x),
                    A.round(f / 4),
                    A.round((t - m) * l + x),
                    A.round(f - f / 4),
                    c.get("whiskerColor")
                  )
                  .append(),
                g
                  .drawLine(
                    A.round((a - m) * l + x),
                    A.round(f / 2),
                    A.round((r - m) * l + x),
                    A.round(f / 2),
                    c.get("lineColor")
                  )
                  .append(),
                g
                  .drawLine(
                    A.round((a - m) * l + x),
                    A.round(f / 4),
                    A.round((a - m) * l + x),
                    A.round(f - f / 4),
                    c.get("whiskerColor")
                  )
                  .append(),
                g
                  .drawLine(
                    A.round((n - m) * l + x),
                    A.round(0.1 * f),
                    A.round((n - m) * l + x),
                    A.round(0.9 * f),
                    c.get("medianColor")
                  )
                  .append(),
                c.get("target") &&
                  ((d = A.ceil(c.get("spotRadius"))),
                  g
                    .drawLine(
                      A.round((c.get("target") - m) * l + x),
                      A.round(f / 2 - d),
                      A.round((c.get("target") - m) * l + x),
                      A.round(f / 2 + d),
                      c.get("targetColor")
                    )
                    .append(),
                  g
                    .drawLine(
                      A.round((c.get("target") - m) * l + x - d),
                      A.round(f / 2),
                      A.round((c.get("target") - m) * l + x + d),
                      A.round(f / 2),
                      c.get("targetColor")
                    )
                    .append()),
                g.render();
            }
          },
        })),
      (s = x({
        init: function (t, e, i, s) {
          (this.target = t), (this.id = e), (this.type = i), (this.args = s);
        },
        append: function () {
          return this.target.appendShape(this), this;
        },
      })),
      (i = x({
        _pxregex: /(\d+)(px)?\s*$/i,
        init: function (t, e, i) {
          t &&
            ((this.width = t),
            (this.height = e),
            (this.target = i),
            (this.lastShapeId = null),
            i[0] && (i = i[0]),
            W.data(i, "_jqs_vcanvas", this));
        },
        drawLine: function (t, e, i, s, n, r) {
          return this.drawShape(
            [
              [t, e],
              [i, s],
            ],
            n,
            r
          );
        },
        drawShape: function (t, e, i, s) {
          return this._genShape("Shape", [t, e, i, s]);
        },
        drawCircle: function (t, e, i, s, n, r) {
          return this._genShape("Circle", [t, e, i, s, n, r]);
        },
        drawPieSlice: function (t, e, i, s, n, r, a) {
          return this._genShape("PieSlice", [t, e, i, s, n, r, a]);
        },
        drawRect: function (t, e, i, s, n, r) {
          return this._genShape("Rect", [t, e, i, s, n, r]);
        },
        getElement: function () {
          return this.canvas;
        },
        getLastShapeId: function () {
          return this.lastShapeId;
        },
        reset: function () {
          alert("reset not implemented");
        },
        _insert: function (t, e) {
          W(e).html(t);
        },
        _calculatePixelDims: function (t, e, i) {
          e = this._pxregex.exec(e);
          (this.pixelHeight = e ? e[1] : W(i).height()),
            (e = this._pxregex.exec(t)),
            (this.pixelWidth = e ? e[1] : W(i).width());
        },
        _genShape: function (t, e) {
          var i = m++;
          return e.unshift(i), new s(this, i, t, e);
        },
        appendShape: function (t) {
          alert("appendShape not implemented");
        },
        replaceWithShape: function (t, e) {
          alert("replaceWithShape not implemented");
        },
        insertAfterShape: function (t, e) {
          alert("insertAfterShape not implemented");
        },
        removeShapeId: function (t) {
          alert("removeShapeId not implemented");
        },
        getShapeAt: function (t, e, i) {
          alert("getShapeAt not implemented");
        },
        render: function () {
          alert("render not implemented");
        },
      })),
      (c = x(i, {
        init: function (t, e, i, s) {
          c._super.init.call(this, t, e, i),
            (this.canvas = w.createElement("canvas")),
            i[0] && (i = i[0]),
            W.data(i, "_jqs_vcanvas", this),
            W(this.canvas).css({
              display: "inline-block",
              width: t,
              height: e,
              verticalAlign: "top",
            }),
            this._insert(this.canvas, i),
            this._calculatePixelDims(t, e, this.canvas),
            (this.canvas.width = this.pixelWidth),
            (this.canvas.height = this.pixelHeight),
            (this.interact = s),
            (this.shapes = {}),
            (this.shapeseq = []),
            (this.currentTargetShapeId = F),
            W(this.canvas).css({
              width: this.pixelWidth,
              height: this.pixelHeight,
            });
        },
        _getContext: function (t, e, i) {
          var s = this.canvas.getContext("2d");
          return (
            t !== F && (s.strokeStyle = t),
            (s.lineWidth = i === F ? 1 : i),
            e !== F && (s.fillStyle = e),
            s
          );
        },
        reset: function () {
          this._getContext().clearRect(0, 0, this.pixelWidth, this.pixelHeight),
            (this.shapes = {}),
            (this.shapeseq = []),
            (this.currentTargetShapeId = F);
        },
        _drawShape: function (t, e, i, s, n) {
          var r,
            a,
            h = this._getContext(i, s, n);
          for (
            h.beginPath(),
              h.moveTo(e[0][0] + 0.5, e[0][1] + 0.5),
              r = 1,
              a = e.length;
            r < a;
            r++
          )
            h.lineTo(e[r][0] + 0.5, e[r][1] + 0.5);
          i !== F && h.stroke(),
            s !== F && h.fill(),
            this.targetX !== F &&
              this.targetY !== F &&
              h.isPointInPath(this.targetX, this.targetY) &&
              (this.currentTargetShapeId = t);
        },
        _drawCircle: function (t, e, i, s, n, r, a) {
          a = this._getContext(n, r, a);
          a.beginPath(),
            a.arc(e, i, s, 0, 2 * A.PI, !1),
            this.targetX !== F &&
              this.targetY !== F &&
              a.isPointInPath(this.targetX, this.targetY) &&
              (this.currentTargetShapeId = t),
            n !== F && a.stroke(),
            r !== F && a.fill();
        },
        _drawPieSlice: function (t, e, i, s, n, r, a, h) {
          var o = this._getContext(a, h);
          o.beginPath(),
            o.moveTo(e, i),
            o.arc(e, i, s, n, r, !1),
            o.lineTo(e, i),
            o.closePath(),
            a !== F && o.stroke(),
            h && o.fill(),
            this.targetX !== F &&
              this.targetY !== F &&
              o.isPointInPath(this.targetX, this.targetY) &&
              (this.currentTargetShapeId = t);
        },
        _drawRect: function (t, e, i, s, n, r, a) {
          return this._drawShape(
            t,
            [
              [e, i],
              [e + s, i],
              [e + s, i + n],
              [e, i + n],
              [e, i],
            ],
            r,
            a
          );
        },
        appendShape: function (t) {
          return (
            (this.shapes[t.id] = t),
            this.shapeseq.push(t.id),
            (this.lastShapeId = t.id),
            t.id
          );
        },
        replaceWithShape: function (t, e) {
          var i,
            s = this.shapeseq;
          for (this.shapes[e.id] = e, i = s.length; i--; )
            s[i] == t && (s[i] = e.id);
          delete this.shapes[t];
        },
        replaceWithShapes: function (t, e) {
          for (var i, s, n = this.shapeseq, r = {}, a = t.length; a--; )
            r[t[a]] = !0;
          for (a = n.length; a--; )
            r[(i = n[a])] && (n.splice(a, 1), delete this.shapes[i], (s = a));
          for (a = e.length; a--; )
            n.splice(s, 0, e[a].id), (this.shapes[e[a].id] = e[a]);
        },
        insertAfterShape: function (t, e) {
          for (var i = this.shapeseq, s = i.length; s--; )
            if (i[s] === t)
              return i.splice(s + 1, 0, e.id), void (this.shapes[e.id] = e);
        },
        removeShapeId: function (t) {
          for (var e = this.shapeseq, i = e.length; i--; )
            if (e[i] === t) {
              e.splice(i, 1);
              break;
            }
          delete this.shapes[t];
        },
        getShapeAt: function (t, e, i) {
          return (
            (this.targetX = e),
            (this.targetY = i),
            this.render(),
            this.currentTargetShapeId
          );
        },
        render: function () {
          var t,
            e,
            i = this.shapeseq,
            s = this.shapes,
            n = i.length;
          for (
            this._getContext().clearRect(
              0,
              0,
              this.pixelWidth,
              this.pixelHeight
            ),
              e = 0;
            e < n;
            e++
          )
            this["_draw" + (t = s[i[e]]).type].apply(this, t.args);
          this.interact || ((this.shapes = {}), (this.shapeseq = []));
        },
      })),
      (d = x(i, {
        init: function (t, e, i) {
          d._super.init.call(this, t, e, i),
            i[0] && (i = i[0]),
            W.data(i, "_jqs_vcanvas", this),
            (this.canvas = w.createElement("span")),
            W(this.canvas).css({
              display: "inline-block",
              position: "relative",
              overflow: "hidden",
              width: t,
              height: e,
              margin: "0px",
              padding: "0px",
              verticalAlign: "top",
            }),
            this._insert(this.canvas, i),
            this._calculatePixelDims(t, e, this.canvas),
            (this.canvas.width = this.pixelWidth),
            (this.canvas.height = this.pixelHeight),
            (i =
              '<v:group coordorigin="0 0" coordsize="' +
              this.pixelWidth +
              " " +
              this.pixelHeight +
              '" style="position:absolute;top:0;left:0;width:' +
              this.pixelWidth +
              "px;height=" +
              this.pixelHeight +
              'px;"></v:group>'),
            this.canvas.insertAdjacentHTML("beforeEnd", i),
            (this.group = W(this.canvas).children()[0]),
            (this.rendered = !1),
            (this.prerender = "");
        },
        _drawShape: function (t, e, i, s, n) {
          for (var r, a, h = [], o = 0, l = e.length; o < l; o++)
            h[o] = e[o][0] + "," + e[o][1];
          return (
            (r = h.splice(0, 1)),
            (n = n === F ? 1 : n),
            (a = h[0] === h[h.length - 1] ? "x " : ""),
            '<v:shape coordorigin="0 0" coordsize="' +
              this.pixelWidth +
              " " +
              this.pixelHeight +
              '"  id="jqsshape' +
              t +
              '" ' +
              (i === F
                ? ' stroked="false" '
                : ' strokeWeight="' + n + 'px" strokeColor="' + i + '" ') +
              (s === F
                ? ' filled="false"'
                : ' fillColor="' + s + '" filled="true" ') +
              ' style="position:absolute;left:0px;top:0px;height:' +
              this.pixelHeight +
              "px;width:" +
              this.pixelWidth +
              'px;padding:0px;margin:0px;"  path="m ' +
              r +
              " l " +
              h.join(", ") +
              " " +
              a +
              'e"> </v:shape>'
          );
        },
        _drawCircle: function (t, e, i, s, n, r, a) {
          return (
            '<v:oval  id="jqsshape' +
            t +
            '" ' +
            (n === F
              ? ' stroked="false" '
              : ' strokeWeight="' + a + 'px" strokeColor="' + n + '" ') +
            (r === F
              ? ' filled="false"'
              : ' fillColor="' + r + '" filled="true" ') +
            ' style="position:absolute;top:' +
            (i -= s) +
            "px; left:" +
            (e -= s) +
            "px; width:" +
            2 * s +
            "px; height:" +
            2 * s +
            'px"></v:oval>'
          );
        },
        _drawPieSlice: function (t, e, i, s, n, r, a, h) {
          var o, l, g, p;
          if (n === r) return "";
          if (
            (r - n == 2 * A.PI && ((n = 0), (r = 2 * A.PI)),
            (o = e + A.round(A.cos(n) * s)),
            (l = i + A.round(A.sin(n) * s)),
            (g = e + A.round(A.cos(r) * s)),
            (p = i + A.round(A.sin(r) * s)),
            o === g && l === p)
          ) {
            if (r - n < A.PI) return "";
            (o = g = e + s), (l = p = i);
          }
          return o === g && l === p && r - n < A.PI
            ? ""
            : '<v:shape coordorigin="0 0" coordsize="' +
                this.pixelWidth +
                " " +
                this.pixelHeight +
                '"  id="jqsshape' +
                t +
                '" ' +
                (a === F
                  ? ' stroked="false" '
                  : ' strokeWeight="1px" strokeColor="' + a + '" ') +
                (h === F
                  ? ' filled="false"'
                  : ' fillColor="' + h + '" filled="true" ') +
                ' style="position:absolute;left:0px;top:0px;height:' +
                this.pixelHeight +
                "px;width:" +
                this.pixelWidth +
                'px;padding:0px;margin:0px;"  path="m ' +
                e +
                "," +
                i +
                " wa " +
                [e - s, i - s, e + s, i + s, o, l, g, p].join(", ") +
                ' x e"> </v:shape>';
        },
        _drawRect: function (t, e, i, s, n, r, a) {
          return this._drawShape(
            t,
            [
              [e, i],
              [e, i + n],
              [e + s, i + n],
              [e + s, i],
              [e, i],
            ],
            r,
            a
          );
        },
        reset: function () {
          this.group.innerHTML = "";
        },
        appendShape: function (t) {
          var e = this["_draw" + t.type].apply(this, t.args);
          return (
            this.rendered
              ? this.group.insertAdjacentHTML("beforeEnd", e)
              : (this.prerender += e),
            (this.lastShapeId = t.id),
            t.id
          );
        },
        replaceWithShape: function (t, e) {
          (t = W("#jqsshape" + t)),
            (e = this["_draw" + e.type].apply(this, e.args));
          t[0].outerHTML = e;
        },
        replaceWithShapes: function (t, e) {
          for (
            var i = W("#jqsshape" + t[0]), s = "", n = e.length, r = 0;
            r < n;
            r++
          )
            s += this["_draw" + e[r].type].apply(this, e[r].args);
          for (i[0].outerHTML = s, r = 1; r < t.length; r++)
            W("#jqsshape" + t[r]).remove();
        },
        insertAfterShape: function (t, e) {
          (t = W("#jqsshape" + t)),
            (e = this["_draw" + e.type].apply(this, e.args));
          t[0].insertAdjacentHTML("afterEnd", e);
        },
        removeShapeId: function (t) {
          t = W("#jqsshape" + t);
          this.group.removeChild(t[0]);
        },
        getShapeAt: function (t, e, i) {
          return t.id.substr(8);
        },
        render: function () {
          this.rendered ||
            ((this.group.innerHTML = this.prerender), (this.rendered = !0));
        },
      }));
  }),
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : jQuery && !jQuery.fn.sparkline && t(jQuery);
})(document, Math);
