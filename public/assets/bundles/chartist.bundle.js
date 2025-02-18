const namespaces = {
    svg: "http://www.w3.org/2000/svg",
    xmlns: "http://www.w3.org/2000/xmlns/",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    ct: "http://gionkunz.github.com/chartist-js/ct",
  },
  precision = 8,
  escapingMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
function ensureUnit(e, t) {
  return "number" == typeof e ? e + t : e;
}
function quantity(e) {
  var t;
  return "string" == typeof e
    ? {
        value: (t = /^(\d+)\s*(.*)$/g.exec(e)) ? +t[1] : 0,
        unit: (null == t ? void 0 : t[2]) || void 0,
      }
    : { value: Number(e) };
}
function alphaNumerate(e) {
  return String.fromCharCode(97 + (e % 26));
}
const EPSILON = 2221e-19;
function orderOfMagnitude(e) {
  return Math.floor(Math.log(Math.abs(e)) / Math.LN10);
}
function projectLength(e, t, s) {
  return (t / s.range) * e;
}
function roundWithPrecision(e, t) {
  t = Math.pow(10, t || precision);
  return Math.round(e * t) / t;
}
function rho(e) {
  if (1 === e) return e;
  function t(e) {
    return e * e + 1;
  }
  let s = 2,
    i = 2,
    a;
  if (e % 2 == 0) return 2;
  for (
    ;
    (s = t(s) % e),
      (i = t(t(i)) % e),
      1 ===
        (a = (function e(t, s) {
          return t % s == 0 ? s : e(s, t % s);
        })(Math.abs(s - i), e));

  );
  return a;
}
function polarToCartesian(e, t, s, i) {
  i = ((i - 90) * Math.PI) / 180;
  return { x: e + s * Math.cos(i), y: t + s * Math.sin(i) };
}
function getBounds(t, e, s) {
  var i = 3 < arguments.length && void 0 !== arguments[3] && arguments[3],
    a = {
      high: e.high,
      low: e.low,
      valueRange: 0,
      oom: 0,
      step: 0,
      min: 0,
      max: 0,
      range: 0,
      numberOfSteps: 0,
      values: [],
    },
    r =
      ((a.valueRange = a.high - a.low),
      (a.oom = orderOfMagnitude(a.valueRange)),
      (a.step = Math.pow(10, a.oom)),
      (a.min = Math.floor(a.low / a.step) * a.step),
      (a.max = Math.ceil(a.high / a.step) * a.step),
      (a.range = a.max - a.min),
      (a.numberOfSteps = Math.round(a.range / a.step)),
      projectLength(t, a.step, a)),
    n = r < s,
    r = i ? rho(a.range) : 0;
  if (i && projectLength(t, 1, a) >= s) a.step = 1;
  else if (i && r < a.step && projectLength(t, r, a) >= s) a.step = r;
  else {
    let e = 0;
    for (;;) {
      if (n && projectLength(t, a.step, a) <= s) a.step *= 2;
      else {
        if (n || !(projectLength(t, a.step / 2, a) >= s)) break;
        if (((a.step /= 2), i && a.step % 1 != 0)) {
          a.step *= 2;
          break;
        }
      }
      if (1e3 < e++)
        throw new Error(
          "Exceeded maximum number of iterations while optimizing scale step!"
        );
    }
  }
  function o(e, t) {
    return e === (e += t) && (e *= 1 + (0 < t ? EPSILON : -EPSILON)), e;
  }
  a.step = Math.max(a.step, EPSILON);
  let l = a.min,
    h = a.max;
  for (; l + a.step <= a.low; ) l = o(l, a.step);
  for (; h - a.step >= a.high; ) h = o(h, -a.step);
  (a.min = l), (a.max = h), (a.range = a.max - a.min);
  var c = [];
  for (let e = a.min; e <= a.max; e = o(e, a.step)) {
    var u = roundWithPrecision(e);
    u !== c[c.length - 1] && c.push(u);
  }
  return (a.values = c), a;
}
function extend() {
  for (
    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
      e = arguments.length,
      s = new Array(1 < e ? e - 1 : 0),
      i = 1;
    i < e;
    i++
  )
    s[i - 1] = arguments[i];
  for (let e = 0; e < s.length; e++) {
    var a = s[e];
    for (const n in a) {
      var r = a[n];
      "object" != typeof r || null === r || r instanceof Array
        ? (t[n] = r)
        : (t[n] = extend(t[n], r));
    }
  }
  return t;
}
const noop = (e) => e;
function times(e, s) {
  return Array.from({ length: e }, s ? (e, t) => s(t) : () => {});
}
const sum = (e, t) => e + (t || 0),
  serialMap = (e, s) =>
    times(Math.max(...e.map((e) => e.length)), (t) => s(...e.map((e) => e[t])));
function safeHasProperty(e, t) {
  return null !== e && "object" == typeof e && Reflect.has(e, t);
}
function isNumeric(e) {
  return null !== e && isFinite(e);
}
function isFalseyButZero(e) {
  return !e && 0 !== e;
}
function getNumberOrUndefined(e) {
  return isNumeric(e) ? Number(e) : void 0;
}
function isArrayOfArrays(e) {
  return !!Array.isArray(e) && e.every(Array.isArray);
}
function each(e, i) {
  let a = 0;
  e[
    2 < arguments.length && void 0 !== arguments[2] && arguments[2]
      ? "reduceRight"
      : "reduce"
  ]((e, t, s) => i(t, a++, s), void 0);
}
function getMetaData(e, t) {
  e = Array.isArray(e) ? e[t] : safeHasProperty(e, "data") ? e.data[t] : null;
  return safeHasProperty(e, "meta") ? e.meta : void 0;
}
function isDataHoleValue(e) {
  return null == e || ("number" == typeof e && isNaN(e));
}
function isArrayOfSeries(e) {
  return (
    Array.isArray(e) &&
    e.every((e) => Array.isArray(e) || safeHasProperty(e, "data"))
  );
}
function isMultiValue(e) {
  return (
    "object" == typeof e &&
    null !== e &&
    (Reflect.has(e, "x") || Reflect.has(e, "y"))
  );
}
function getMultiValue(e) {
  var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "y";
  return isMultiValue(e) && safeHasProperty(e, t)
    ? getNumberOrUndefined(e[t])
    : getNumberOrUndefined(e);
}
function getHighLow(e, t, i) {
  const a = {
      high:
        void 0 ===
        (t = { ...t, ...(i ? ("x" === i ? t.axisX : t.axisY) : {}) }).high
          ? -Number.MAX_VALUE
          : +t.high,
      low: void 0 === t.low ? Number.MAX_VALUE : +t.low,
    },
    r = void 0 === t.high,
    n = void 0 === t.low;
  return (
    (r || n) &&
      (function t(s) {
        if (!isDataHoleValue(s))
          if (Array.isArray(s)) for (let e = 0; e < s.length; e++) t(s[e]);
          else {
            var e = Number(i && safeHasProperty(s, i) ? s[i] : s);
            r && e > a.high && (a.high = e), n && e < a.low && (a.low = e);
          }
      })(e),
    (!t.referenceValue && 0 !== t.referenceValue) ||
      ((a.high = Math.max(t.referenceValue, a.high)),
      (a.low = Math.min(t.referenceValue, a.low))),
    a.high <= a.low &&
      (0 === a.low
        ? (a.high = 1)
        : a.low < 0
        ? (a.high = 0)
        : (0 < a.high || (a.high = 1), (a.low = 0))),
    a
  );
}
function normalizeData(e) {
  var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
    s = 2 < arguments.length ? arguments[2] : void 0,
    i = 3 < arguments.length ? arguments[3] : void 0;
  let a;
  (s = {
    labels: (e.labels || []).slice(),
    series: normalizeSeries(e.series, s, i),
  }),
    (i = s.labels.length);
  return (
    isArrayOfArrays(s.series)
      ? ((a = Math.max(i, ...s.series.map((e) => e.length))),
        s.series.forEach((e) => {
          e.push(...times(Math.max(0, a - e.length)));
        }))
      : (a = s.series.length),
    s.labels.push(...times(Math.max(0, a - i), () => "")),
    t && reverseData(s),
    s
  );
}
function reverseData(e) {
  var t;
  null != (t = e.labels) && t.reverse(), e.series.reverse();
  for (const s of e.series)
    safeHasProperty(s, "data")
      ? s.data.reverse()
      : Array.isArray(s) && s.reverse();
}
function normalizeMulti(e, t) {
  let s, i;
  var a;
  if (
    ("object" != typeof e
      ? ((a = getNumberOrUndefined(e)), "x" === t ? (s = a) : (i = a))
      : (safeHasProperty(e, "x") && (s = getNumberOrUndefined(e.x)),
        safeHasProperty(e, "y") && (i = getNumberOrUndefined(e.y))),
    void 0 !== s || void 0 !== i)
  )
    return { x: s, y: i };
}
function normalizePrimitive(e, t) {
  if (!isDataHoleValue(e))
    return t ? normalizeMulti(e, t) : getNumberOrUndefined(e);
}
function normalizeSingleSeries(e, t) {
  return Array.isArray(e)
    ? e.map((e) =>
        safeHasProperty(e, "value")
          ? normalizePrimitive(e.value, t)
          : normalizePrimitive(e, t)
      )
    : normalizeSingleSeries(e.data, t);
}
function normalizeSeries(e, t, s) {
  return isArrayOfSeries(e)
    ? e.map((e) => normalizeSingleSeries(e, t))
    : ((e = normalizeSingleSeries(e, t)), s ? e.map((e) => [e]) : e);
}
function splitIntoSegments(t, s, e) {
  var i = { increasingX: !1, fillHoles: !1, ...e },
    a = [];
  let r = !0;
  for (let e = 0; e < t.length; e += 2)
    void 0 === getMultiValue(s[e / 2].value)
      ? i.fillHoles || (r = !0)
      : ((r = i.increasingX && 2 <= e && t[e] <= t[e - 2] ? !0 : r) &&
          (a.push({ pathCoordinates: [], valueData: [] }), (r = !1)),
        a[a.length - 1].pathCoordinates.push(t[e], t[e + 1]),
        a[a.length - 1].valueData.push(s[e / 2]));
  return a;
}
function serialize(e) {
  let t = "";
  return null == e
    ? e
    : ((t =
        "number" == typeof e
          ? "" + e
          : "object" == typeof e
          ? JSON.stringify({ data: e })
          : String(e)),
      Object.keys(escapingMap).reduce(
        (e, t) => e.replaceAll(t, escapingMap[t]),
        t
      ));
}
function deserialize(e) {
  if ("string" != typeof e) return e;
  if ("NaN" === e) return NaN;
  let t = (e = Object.keys(escapingMap).reduce(
    (e, t) => e.replaceAll(escapingMap[t], t),
    e
  ));
  if ("string" == typeof e)
    try {
      t = void 0 !== (t = JSON.parse(e)).data ? t.data : t;
    } catch (e) {}
  return t;
}
class SvgList {
  call(t, s) {
    return this.svgElements.forEach((e) => Reflect.apply(e[t], e, s)), this;
  }
  attr() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.call("attr", t);
  }
  elem() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.call("elem", t);
  }
  root() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.call("root", t);
  }
  getNode() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.call("getNode", t);
  }
  foreignObject() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.call("foreignObject", t);
  }
  text() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.call("text", t);
  }
  empty() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.call("empty", t);
  }
  remove() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.call("remove", t);
  }
  addClass() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.call("addClass", t);
  }
  removeClass() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.call("removeClass", t);
  }
  removeAllClasses() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.call("removeAllClasses", t);
  }
  animate() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.call("animate", t);
  }
  constructor(t) {
    this.svgElements = [];
    for (let e = 0; e < t.length; e++) this.svgElements.push(new Svg(t[e]));
  }
}
const easings = {
  easeInSine: [0.47, 0, 0.745, 0.715],
  easeOutSine: [0.39, 0.575, 0.565, 1],
  easeInOutSine: [0.445, 0.05, 0.55, 0.95],
  easeInQuad: [0.55, 0.085, 0.68, 0.53],
  easeOutQuad: [0.25, 0.46, 0.45, 0.94],
  easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
  easeInCubic: [0.55, 0.055, 0.675, 0.19],
  easeOutCubic: [0.215, 0.61, 0.355, 1],
  easeInOutCubic: [0.645, 0.045, 0.355, 1],
  easeInQuart: [0.895, 0.03, 0.685, 0.22],
  easeOutQuart: [0.165, 0.84, 0.44, 1],
  easeInOutQuart: [0.77, 0, 0.175, 1],
  easeInQuint: [0.755, 0.05, 0.855, 0.06],
  easeOutQuint: [0.23, 1, 0.32, 1],
  easeInOutQuint: [0.86, 0, 0.07, 1],
  easeInExpo: [0.95, 0.05, 0.795, 0.035],
  easeOutExpo: [0.19, 1, 0.22, 1],
  easeInOutExpo: [1, 0, 0, 1],
  easeInCirc: [0.6, 0.04, 0.98, 0.335],
  easeOutCirc: [0.075, 0.82, 0.165, 1],
  easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
  easeInBack: [0.6, -0.28, 0.735, 0.045],
  easeOutBack: [0.175, 0.885, 0.32, 1.275],
  easeInOutBack: [0.68, -0.55, 0.265, 1.55],
};
function createAnimation(t, s, e) {
  let i = 3 < arguments.length && void 0 !== arguments[3] && arguments[3],
    a = 4 < arguments.length ? arguments[4] : void 0;
  const { easing: r, ...n } = e,
    o = {};
  let l, h;
  r && (l = Array.isArray(r) ? r : easings[r]),
    (n.begin = ensureUnit(n.begin, "ms")),
    (n.dur = ensureUnit(n.dur, "ms")),
    l &&
      ((n.calcMode = "spline"),
      (n.keySplines = l.join(" ")),
      (n.keyTimes = "0;1")),
    i &&
      ((n.fill = "freeze"),
      (o[s] = n.from),
      t.attr(o),
      (h = quantity(n.begin || 0).value),
      (n.begin = "indefinite"));
  const c = t.elem("animate", { attributeName: s, ...n }),
    u =
      (i &&
        setTimeout(() => {
          try {
            c._node.beginElement();
          } catch (e) {
            (o[s] = n.to), t.attr(o), c.remove();
          }
        }, h),
      c.getNode());
  a &&
    u.addEventListener("beginEvent", () =>
      a.emit("animationBegin", { element: t, animate: u, params: e })
    ),
    u.addEventListener("endEvent", () => {
      a && a.emit("animationEnd", { element: t, animate: u, params: e }),
        i && ((o[s] = n.to), t.attr(o), c.remove());
    });
}
class Svg {
  attr(s, e) {
    return "string" == typeof s
      ? e
        ? this._node.getAttributeNS(e, s)
        : this._node.getAttribute(s)
      : (Object.keys(s).forEach((e) => {
          var t;
          void 0 !== s[e] &&
            (-1 !== e.indexOf(":")
              ? ((t = e.split(":")),
                this._node.setAttributeNS(namespaces[t[0]], e, String(s[e])))
              : this._node.setAttribute(e, String(s[e])));
        }),
        this);
  }
  elem(e, t, s) {
    var i = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
    return new Svg(e, t, s, this, i);
  }
  parent() {
    return this._node.parentNode instanceof SVGElement
      ? new Svg(this._node.parentNode)
      : null;
  }
  root() {
    let e = this._node;
    for (; "svg" !== e.nodeName && e.parentElement; ) e = e.parentElement;
    return new Svg(e);
  }
  querySelector(e) {
    e = this._node.querySelector(e);
    return e ? new Svg(e) : null;
  }
  querySelectorAll(e) {
    e = this._node.querySelectorAll(e);
    return new SvgList(e);
  }
  getNode() {
    return this._node;
  }
  foreignObject(e, t, s) {
    var i = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
    let a;
    (a =
      "string" == typeof e
        ? (((r = document.createElement("div")).innerHTML = e), r.firstChild)
        : e) instanceof Element && a.setAttribute("xmlns", namespaces.xmlns);
    var r = this.elem("foreignObject", t, s, i);
    return r._node.appendChild(a), r;
  }
  text(e) {
    return this._node.appendChild(document.createTextNode(e)), this;
  }
  empty() {
    for (; this._node.firstChild; )
      this._node.removeChild(this._node.firstChild);
    return this;
  }
  remove() {
    var e;
    return (
      null != (e = this._node.parentNode) && e.removeChild(this._node),
      this.parent()
    );
  }
  replace(e) {
    var t;
    return (
      null != (t = this._node.parentNode) &&
        t.replaceChild(e._node, this._node),
      e
    );
  }
  append(e) {
    return (
      1 < arguments.length &&
      void 0 !== arguments[1] &&
      arguments[1] &&
      this._node.firstChild
        ? this._node.insertBefore(e._node, this._node.firstChild)
        : this._node.appendChild(e._node),
      this
    );
  }
  classes() {
    var e = this._node.getAttribute("class");
    return e ? e.trim().split(/\s+/) : [];
  }
  addClass(e) {
    return (
      this._node.setAttribute(
        "class",
        this.classes()
          .concat(e.trim().split(/\s+/))
          .filter(function (e, t, s) {
            return s.indexOf(e) === t;
          })
          .join(" ")
      ),
      this
    );
  }
  removeClass(e) {
    const t = e.trim().split(/\s+/);
    return (
      this._node.setAttribute(
        "class",
        this.classes()
          .filter((e) => -1 === t.indexOf(e))
          .join(" ")
      ),
      this
    );
  }
  removeAllClasses() {
    return this._node.setAttribute("class", ""), this;
  }
  height() {
    return this._node.getBoundingClientRect().height;
  }
  width() {
    return this._node.getBoundingClientRect().width;
  }
  animate(s) {
    let i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
      a = 2 < arguments.length ? arguments[2] : void 0;
    return (
      Object.keys(s).forEach((t) => {
        var e = s[t];
        Array.isArray(e)
          ? e.forEach((e) => createAnimation(this, t, e, !1, a))
          : createAnimation(this, t, e, i, a);
      }),
      this
    );
  }
  constructor(e, t, s, i, a = !1) {
    e instanceof Element
      ? (this._node = e)
      : ((this._node = document.createElementNS(namespaces.svg, e)),
        "svg" === e && this.attr({ "xmlns:ct": namespaces.ct })),
      t && this.attr(t),
      s && this.addClass(s),
      i &&
        (a && i._node.firstChild
          ? i._node.insertBefore(this._node, i._node.firstChild)
          : i._node.appendChild(this._node));
  }
}
function createSvg(t) {
  var e =
      1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "100%",
    s = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "100%",
    i = 3 < arguments.length ? arguments[3] : void 0,
    e =
      (Array.from(t.querySelectorAll("svg"))
        .filter((e) => e.getAttributeNS(namespaces.xmlns, "ct"))
        .forEach((e) => t.removeChild(e)),
      new Svg("svg")
        .attr({ width: e, height: s })
        .attr({ style: "width: ".concat(e, "; height: ").concat(s, ";") }));
  return i && e.addClass(i), t.appendChild(e.getNode()), e;
}
function normalizePadding(e) {
  return "number" == typeof e
    ? { top: e, right: e, bottom: e, left: e }
    : void 0 === e
    ? { top: 0, right: 0, bottom: 0, left: 0 }
    : {
        top: "number" == typeof e.top ? e.top : 0,
        right: "number" == typeof e.right ? e.right : 0,
        bottom: "number" == typeof e.bottom ? e.bottom : 0,
        left: "number" == typeof e.left ? e.left : 0,
      };
}
function createChartRect(e, t) {
  var s = Boolean(t.axisX || t.axisY),
    i = (null == (i = t.axisY) ? void 0 : i.offset) || 0,
    a = (null == (a = t.axisX) ? void 0 : a.offset) || 0,
    r = null == (r = t.axisY) ? void 0 : r.position,
    n = null == (n = t.axisX) ? void 0 : n.position,
    o = e.width() || quantity(t.width).value || 0,
    e = e.height() || quantity(t.height).value || 0,
    t = normalizePadding(t.chartPadding),
    o = Math.max(o, i + t.left + t.right),
    e = Math.max(e, a + t.top + t.bottom),
    l = {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0,
      padding: t,
      width() {
        return this.x2 - this.x1;
      },
      height() {
        return this.y1 - this.y2;
      },
    };
  return (
    s
      ? ("start" === n
          ? ((l.y2 = t.top + a), (l.y1 = Math.max(e - t.bottom, l.y2 + 1)))
          : ((l.y2 = t.top), (l.y1 = Math.max(e - t.bottom - a, l.y2 + 1))),
        "start" === r
          ? ((l.x1 = t.left + i), (l.x2 = Math.max(o - t.right, l.x1 + 1)))
          : ((l.x1 = t.left), (l.x2 = Math.max(o - t.right - i, l.x1 + 1))))
      : ((l.x1 = t.left),
        (l.x2 = Math.max(o - t.right, l.x1 + 1)),
        (l.y2 = t.top),
        (l.y1 = Math.max(e - t.bottom, l.y2 + 1))),
    l
  );
}
function createGrid(e, t, s, i, a, r, n, o) {
  (e = {
    ["".concat(s.units.pos, "1")]: e,
    ["".concat(s.units.pos, "2")]: e,
    ["".concat(s.counterUnits.pos, "1")]: i,
    ["".concat(s.counterUnits.pos, "2")]: i + a,
  }),
    (i = r.elem("line", e, n.join(" ")));
  o.emit("draw", {
    type: "grid",
    axis: s,
    index: t,
    group: r,
    element: i,
    ...e,
  });
}
function createGridBackground(e, t, s, i) {
  t = e.elem(
    "rect",
    { x: t.x1, y: t.y2, width: t.width(), height: t.height() },
    s,
    !0
  );
  i.emit("draw", { type: "gridBackground", group: e, element: t });
}
function createLabel(e, t, s, i, a, r, n, o, l, h) {
  (e = {
    [a.units.pos]: e + n[a.units.pos],
    [a.counterUnits.pos]: n[a.counterUnits.pos],
    [a.units.len]: t,
    [a.counterUnits.len]: Math.max(0, r - 10),
  }),
    (n = Math.round(e[a.units.len])),
    (t = Math.round(e[a.counterUnits.len])),
    (r = document.createElement("span")),
    (r.class = l.join(" ")),
    (r.style[a.units.len] = n + "px"),
    (r.style[a.counterUnits.len] = t + "px"),
    (r.textContent = String(i)),
    (l = o.foreignObject(r, { style: "overflow: visible;", ...e }));
  h.emit("draw", {
    type: "label",
    axis: a,
    index: s,
    group: o,
    element: l,
    text: i,
    ...e,
  });
}
function optionsProvider(s, i, a) {
  let r;
  const t = [];
  function n(e) {
    var t = r;
    (r = extend({}, s)),
      i &&
        i.forEach((e) => {
          window.matchMedia(e[0]).matches && (r = extend(r, e[1]));
        }),
      a &&
        e &&
        a.emit("optionsChanged", { previousOptions: t, currentOptions: r });
  }
  if (window.matchMedia)
    return (
      i &&
        i.forEach((e) => {
          e = window.matchMedia(e[0]);
          e.addEventListener("change", n), t.push(e);
        }),
      n(),
      {
        removeMediaQueryListeners: function () {
          t.forEach((e) => e.removeEventListener("change", n));
        },
        getCurrentOptions() {
          return r;
        },
      }
    );
  throw new Error(
    "window.matchMedia not found! Make sure you're using a polyfill."
  );
}
Svg.Easing = easings;
const elementDescriptions = {
    m: ["x", "y"],
    l: ["x", "y"],
    c: ["x1", "y1", "x2", "y2", "x", "y"],
    a: ["rx", "ry", "xAr", "lAf", "sf", "x", "y"],
  },
  defaultOptions$3 = { accuracy: 3 };
function element(e, t, s, i, a, r) {
  a = {
    command: a ? e.toLowerCase() : e.toUpperCase(),
    ...t,
    ...(r ? { data: r } : {}),
  };
  s.splice(i, 0, a);
}
function forEachParam(a, r) {
  a.forEach((s, i) => {
    elementDescriptions[s.command.toLowerCase()].forEach((e, t) => {
      r(s, e, i, t, a);
    });
  });
}
class SvgPath {
  static join(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      s = 2 < arguments.length ? arguments[2] : void 0,
      i = new SvgPath(e, s);
    for (let e = 0; e < t.length; e++) {
      var a = t[e];
      for (let e = 0; e < a.pathElements.length; e++)
        i.pathElements.push(a.pathElements[e]);
    }
    return i;
  }
  position(e) {
    return void 0 !== e
      ? ((this.pos = Math.max(0, Math.min(this.pathElements.length, e))), this)
      : this.pos;
  }
  remove(e) {
    return this.pathElements.splice(this.pos, e), this;
  }
  move(e, t) {
    var s = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      i = 3 < arguments.length ? arguments[3] : void 0;
    return (
      element("M", { x: +e, y: +t }, this.pathElements, this.pos++, s, i), this
    );
  }
  line(e, t) {
    var s = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      i = 3 < arguments.length ? arguments[3] : void 0;
    return (
      element("L", { x: +e, y: +t }, this.pathElements, this.pos++, s, i), this
    );
  }
  curve(e, t, s, i, a, r) {
    var n = 6 < arguments.length && void 0 !== arguments[6] && arguments[6],
      o = 7 < arguments.length ? arguments[7] : void 0;
    return (
      element(
        "C",
        { x1: +e, y1: +t, x2: +s, y2: +i, x: +a, y: +r },
        this.pathElements,
        this.pos++,
        n,
        o
      ),
      this
    );
  }
  arc(e, t, s, i, a, r, n) {
    var o = 7 < arguments.length && void 0 !== arguments[7] && arguments[7],
      l = 8 < arguments.length ? arguments[8] : void 0;
    return (
      element(
        "A",
        { rx: e, ry: t, xAr: s, lAf: i, sf: a, x: r, y: n },
        this.pathElements,
        this.pos++,
        o,
        l
      ),
      this
    );
  }
  parse(e) {
    (e = e
      .replace(/([A-Za-z])(-?[0-9])/g, "$1 $2")
      .replace(/([0-9])([A-Za-z])/g, "$1 $2")
      .split(/[\s,]+/)
      .reduce(
        (e, t) => (
          t.match(/[A-Za-z]/) && e.push([]), e[e.length - 1].push(t), e
        ),
        []
      )),
      "Z" === e[e.length - 1][0].toUpperCase() && e.pop(),
      (e = e.map((i) => {
        var e = i.shift(),
          t = elementDescriptions[e.toLowerCase()];
        return {
          command: e,
          ...t.reduce((e, t, s) => ((e[t] = +i[s]), e), {}),
        };
      }));
    return (
      this.pathElements.splice(this.pos, 0, ...e), (this.pos += e.length), this
    );
  }
  stringify() {
    const i = Math.pow(10, this.options.accuracy);
    return (
      this.pathElements.reduce((e, t) => {
        var s = elementDescriptions[t.command.toLowerCase()].map((e) => {
          e = t[e];
          return this.options.accuracy ? Math.round(e * i) / i : e;
        });
        return e + t.command + s.join(",");
      }, "") + (this.close ? "Z" : "")
    );
  }
  scale(s, i) {
    return (
      forEachParam(this.pathElements, (e, t) => {
        e[t] *= "x" === t[0] ? s : i;
      }),
      this
    );
  }
  translate(s, i) {
    return (
      forEachParam(this.pathElements, (e, t) => {
        e[t] += "x" === t[0] ? s : i;
      }),
      this
    );
  }
  transform(r) {
    return (
      forEachParam(this.pathElements, (e, t, s, i, a) => {
        s = r(e, t, s, i, a);
        (!s && 0 !== s) || (e[t] = s);
      }),
      this
    );
  }
  clone() {
    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
      e = new SvgPath(e || this.close);
    return (
      (e.pos = this.pos),
      (e.pathElements = this.pathElements.slice().map((e) => ({ ...e }))),
      (e.options = { ...this.options }),
      e
    );
  }
  splitByCommand(t) {
    const s = [new SvgPath()];
    return (
      this.pathElements.forEach((e) => {
        e.command === t.toUpperCase() &&
          0 !== s[s.length - 1].pathElements.length &&
          s.push(new SvgPath()),
          s[s.length - 1].pathElements.push(e);
      }),
      s
    );
  }
  constructor(e = !1, t) {
    (this.close = e),
      (this.pathElements = []),
      (this.pos = 0),
      (this.options = { ...defaultOptions$3, ...t });
  }
}
function none(e) {
  const l = { fillHoles: !1, ...e };
  return function (t, s) {
    var i = new SvgPath();
    let a = !0;
    for (let e = 0; e < t.length; e += 2) {
      var r = t[e],
        n = t[e + 1],
        o = s[e / 2];
      void 0 !== getMultiValue(o.value)
        ? (a ? i.move(r, n, !1, o) : i.line(r, n, !1, o), (a = !1))
        : l.fillHoles || (a = !0);
    }
    return i;
  };
}
function simple(e) {
  const u = { divisor: 2, fillHoles: !1, ...e },
    d = 1 / Math.max(1, u.divisor);
  return function (t, s) {
    var i = new SvgPath();
    let a = 0,
      r = 0,
      n;
    for (let e = 0; e < t.length; e += 2) {
      var o = t[e],
        l = t[e + 1],
        h = (o - a) * d,
        c = s[e / 2];
      void 0 !== c.value
        ? (void 0 === n
            ? i.move(o, l, !1, c)
            : i.curve(a + h, r, o - h, l, o, l, !1, c),
          (a = o),
          (r = l),
          (n = c))
        : u.fillHoles || ((a = r = 0), (n = void 0));
    }
    return i;
  };
}
function step(e) {
  const c = { postpone: !0, fillHoles: !1, ...e };
  return function (t, s) {
    var i = new SvgPath();
    let a = 0,
      r = 0,
      n;
    for (let e = 0; e < t.length; e += 2) {
      var o = t[e],
        l = t[e + 1],
        h = s[e / 2];
      void 0 !== h.value
        ? (void 0 === n
            ? i.move(o, l, !1, h)
            : (c.postpone ? i.line(o, r, !1, n) : i.line(a, l, !1, h),
              i.line(o, l, !1, h)),
          (a = o),
          (r = l),
          (n = h))
        : c.fillHoles || ((a = r = 0), (n = void 0));
    }
    return i;
  };
}
function cardinal(e) {
  const n = { tension: 1, fillHoles: !1, ...e },
    o = Math.min(1, Math.max(0, n.tension)),
    l = 1 - o;
  return function t(s, i) {
    var e = splitIntoSegments(s, i, { fillHoles: n.fillHoles });
    if (e.length) {
      if (1 < e.length)
        return SvgPath.join(e.map((e) => t(e.pathCoordinates, e.valueData)));
      if (((s = e[0].pathCoordinates), (i = e[0].valueData), s.length <= 4))
        return none()(s, i);
      var a = new SvgPath().move(s[0], s[1], !1, i[0]);
      for (let e = 0, t = s.length; t - 2 * Number(!0) > e; e += 2) {
        var r = [
          { x: +s[e - 2], y: +s[e - 1] },
          { x: +s[e], y: +s[e + 1] },
          { x: +s[e + 2], y: +s[e + 3] },
          { x: +s[e + 4], y: +s[e + 5] },
        ];
        t - 4 === e ? (r[3] = r[2]) : e || (r[0] = { x: +s[e], y: +s[e + 1] }),
          a.curve(
            (o * (-r[0].x + 6 * r[1].x + r[2].x)) / 6 + l * r[2].x,
            (o * (-r[0].y + 6 * r[1].y + r[2].y)) / 6 + l * r[2].y,
            (o * (r[1].x + 6 * r[2].x - r[3].x)) / 6 + l * r[2].x,
            (o * (r[1].y + 6 * r[2].y - r[3].y)) / 6 + l * r[2].y,
            r[2].x,
            r[2].y,
            !1,
            i[(e + 2) / 2]
          );
      }
      return a;
    }
    return none()([], []);
  };
}
function monotoneCubic(e) {
  const d = { fillHoles: !1, ...e };
  return function t(s, i) {
    var e = splitIntoSegments(s, i, {
      fillHoles: d.fillHoles,
      increasingX: !0,
    });
    if (e.length) {
      if (1 < e.length)
        return SvgPath.join(e.map((e) => t(e.pathCoordinates, e.valueData)));
      if (((s = e[0].pathCoordinates), (i = e[0].valueData), s.length <= 4))
        return none()(s, i);
      var a = [],
        r = [],
        n = s.length / 2,
        o = [],
        l = [],
        h = [],
        c = [];
      for (let e = 0; e < n; e++) (a[e] = s[2 * e]), (r[e] = s[2 * e + 1]);
      for (let e = 0; e < n - 1; e++)
        (h[e] = r[e + 1] - r[e]),
          (c[e] = a[e + 1] - a[e]),
          (l[e] = h[e] / c[e]);
      (o[0] = l[0]), (o[n - 1] = l[n - 2]);
      for (let e = 1; e < n - 1; e++)
        (0 !== l[e] &&
          0 !== l[e - 1] &&
          0 < l[e - 1] == 0 < l[e] &&
          ((o[e] =
            (3 * (c[e - 1] + c[e])) /
            ((2 * c[e] + c[e - 1]) / l[e - 1] + (c[e] + 2 * c[e - 1]) / l[e])),
          isFinite(o[e]))) ||
          (o[e] = 0);
      var u = new SvgPath().move(a[0], r[0], !1, i[0]);
      for (let e = 0; e < n - 1; e++)
        u.curve(
          a[e] + c[e] / 3,
          r[e] + (o[e] * c[e]) / 3,
          a[e + 1] - c[e] / 3,
          r[e + 1] - (o[e + 1] * c[e]) / 3,
          a[e + 1],
          r[e + 1],
          !1,
          i[e + 1]
        );
      return u;
    }
    return none()([], []);
  };
}
var index = Object.freeze({
  __proto__: null,
  none: none,
  simple: simple,
  step: step,
  cardinal: cardinal,
  monotoneCubic: monotoneCubic,
});
class EventEmitter {
  on(e, t) {
    var { allListeners: s, listeners: i } = this;
    ("*" === e ? s : (i.has(e) || i.set(e, new Set()), i.get(e))).add(t);
  }
  off(e, t) {
    var { allListeners: s, listeners: i } = this;
    "*" === e
      ? t
        ? s.delete(t)
        : s.clear()
      : i.has(e) &&
        ((s = i.get(e)), t ? s.delete(t) : s.clear(), s.size || i.delete(e));
  }
  emit(t, s) {
    var { allListeners: e, listeners: i } = this;
    i.has(t) && i.get(t).forEach((e) => e(s)), e.forEach((e) => e(t, s));
  }
  constructor() {
    (this.listeners = new Map()), (this.allListeners = new Set());
  }
}
const instances = new WeakMap();
class BaseChart {
  update(e, t) {
    var s = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
    return (
      e &&
        ((this.data = e || {}),
        (this.data.labels = this.data.labels || []),
        (this.data.series = this.data.series || []),
        this.eventEmitter.emit("data", { type: "update", data: this.data })),
      t &&
        ((this.options = extend({}, s ? this.options : this.defaultOptions, t)),
        this.initializeTimeoutId ||
          (null != (e = this.optionsProvider) && e.removeMediaQueryListeners(),
          (this.optionsProvider = optionsProvider(
            this.options,
            this.responsiveOptions,
            this.eventEmitter
          )))),
      !this.initializeTimeoutId &&
        this.optionsProvider &&
        this.createChart(this.optionsProvider.getCurrentOptions()),
      this
    );
  }
  detach() {
    var e;
    return (
      this.initializeTimeoutId
        ? window.clearTimeout(this.initializeTimeoutId)
        : (window.removeEventListener("resize", this.resizeListener),
          null != (e = this.optionsProvider) && e.removeMediaQueryListeners()),
      instances.delete(this.container),
      this
    );
  }
  on(e, t) {
    return this.eventEmitter.on(e, t), this;
  }
  off(e, t) {
    return this.eventEmitter.off(e, t), this;
  }
  initialize() {
    window.addEventListener("resize", this.resizeListener),
      (this.optionsProvider = optionsProvider(
        this.options,
        this.responsiveOptions,
        this.eventEmitter
      )),
      this.eventEmitter.on("optionsChanged", () => this.update()),
      this.options.plugins &&
        this.options.plugins.forEach((e) => {
          Array.isArray(e) ? e[0](this, e[1]) : e(this);
        }),
      this.eventEmitter.emit("data", { type: "initial", data: this.data }),
      this.createChart(this.optionsProvider.getCurrentOptions()),
      (this.initializeTimeoutId = null);
  }
  constructor(e, t, s, i, a) {
    (this.data = t),
      (this.defaultOptions = s),
      (this.options = i),
      (this.responsiveOptions = a),
      (this.eventEmitter = new EventEmitter()),
      (this.resizeListener = () => this.update()),
      (this.initializeTimeoutId = setTimeout(() => this.initialize(), 0));
    t = "string" == typeof e ? document.querySelector(e) : e;
    if (!t) throw new Error("Target element is not found");
    this.container = t;
    s = instances.get(t);
    s && s.detach(), instances.set(t, this);
  }
}
const axisUnits = {
  x: {
    pos: "x",
    len: "width",
    dir: "horizontal",
    rectStart: "x1",
    rectEnd: "x2",
    rectOffset: "y2",
  },
  y: {
    pos: "y",
    len: "height",
    dir: "vertical",
    rectStart: "y2",
    rectEnd: "y1",
    rectOffset: "x1",
  },
};
class Axis {
  createGridAndLabels(r, n, o, l) {
    const h = "x" === this.units.pos ? o.axisX : o.axisY,
      c = this.ticks.map((e, t) => this.projectValue(e, t)),
      u = this.ticks.map(h.labelInterpolationFnc);
    c.forEach((e, t) => {
      var s = u[t],
        i = { x: 0, y: 0 };
      let a;
      (a = c[t + 1]
        ? c[t + 1] - e
        : Math.max(this.axisLength - e, this.axisLength / this.ticks.length)),
        ("" !== s && isFalseyButZero(s)) ||
          ("x" === this.units.pos
            ? ((e = this.chartRect.x1 + e),
              (i.x = o.axisX.labelOffset.x),
              "start" === o.axisX.position
                ? (i.y = this.chartRect.padding.top + o.axisX.labelOffset.y + 5)
                : (i.y = this.chartRect.y1 + o.axisX.labelOffset.y + 5))
            : ((e = this.chartRect.y1 - e),
              (i.y = o.axisY.labelOffset.y - a),
              "start" === o.axisY.position
                ? (i.x = this.chartRect.padding.left + o.axisY.labelOffset.x)
                : (i.x = this.chartRect.x2 + o.axisY.labelOffset.x + 10)),
          h.showGrid &&
            createGrid(
              e,
              t,
              this,
              this.gridOffset,
              this.chartRect[this.counterUnits.len](),
              r,
              [o.classNames.grid, o.classNames[this.units.dir]],
              l
            ),
          h.showLabel &&
            createLabel(
              e,
              a,
              t,
              s,
              this,
              h.offset,
              i,
              n,
              [
                o.classNames.label,
                o.classNames[this.units.dir],
                "start" === h.position
                  ? o.classNames[h.position]
                  : o.classNames.end,
              ],
              l
            ));
    });
  }
  constructor(e, t, s) {
    (this.units = e),
      (this.chartRect = t),
      (this.ticks = s),
      (this.counterUnits = e === axisUnits.x ? axisUnits.y : axisUnits.x),
      (this.axisLength = t[this.units.rectEnd] - t[this.units.rectStart]),
      (this.gridOffset = t[this.units.rectOffset]);
  }
}
class AutoScaleAxis extends Axis {
  projectValue(e) {
    e = Number(getMultiValue(e, this.units.pos));
    return (this.axisLength * (e - this.bounds.min)) / this.bounds.range;
  }
  constructor(e, t, s, i) {
    (t = i.highLow || getHighLow(t, i, e.pos)),
      (t = getBounds(
        s[e.rectEnd] - s[e.rectStart],
        t,
        i.scaleMinSpace || 20,
        i.onlyInteger
      )),
      (i = { min: t.min, max: t.max });
    super(e, s, t.values), (this.bounds = t), (this.range = i);
  }
}
class FixedScaleAxis extends Axis {
  projectValue(e) {
    e = Number(getMultiValue(e, this.units.pos));
    return (
      (this.axisLength * (e - this.range.min)) /
      (this.range.max - this.range.min)
    );
  }
  constructor(e, t, s, i) {
    const a = i.highLow || getHighLow(t, i, e.pos),
      r = i.divisor || 1;
    (t = (i.ticks || times(r, (e) => a.low + ((a.high - a.low) / r) * e)).sort(
      (e, t) => Number(e) - Number(t)
    )),
      (i = { min: a.low, max: a.high });
    super(e, s, t), (this.range = i);
  }
}
class StepAxis extends Axis {
  projectValue(e, t) {
    return this.stepLength * t;
  }
  constructor(e, t, s, i) {
    var a = i.ticks || [],
      e = (super(e, s, a), Math.max(1, a.length - (i.stretch ? 1 : 0)));
    (this.stepLength = this.axisLength / e),
      (this.stretch = Boolean(i.stretch));
  }
}
function getSeriesOption(e, t, s) {
  var i;
  return !(
    safeHasProperty(e, "name") &&
    e.name &&
    null != (i = t.series) &&
    i[e.name]
  ) || void 0 === (i = (null == t ? void 0 : t.series[e.name])[s])
    ? t[s]
    : i;
}
const defaultOptions$2 = {
  axisX: {
    offset: 30,
    position: "end",
    labelOffset: { x: 0, y: 0 },
    showLabel: !0,
    showGrid: !0,
    labelInterpolationFnc: noop,
    type: void 0,
  },
  axisY: {
    offset: 40,
    position: "start",
    labelOffset: { x: 0, y: 0 },
    showLabel: !0,
    showGrid: !0,
    labelInterpolationFnc: noop,
    type: void 0,
    scaleMinSpace: 20,
    onlyInteger: !1,
  },
  width: void 0,
  height: void 0,
  showLine: !0,
  showPoint: !0,
  showArea: !1,
  areaBase: 0,
  lineSmooth: !0,
  showGridBackground: !1,
  low: void 0,
  high: void 0,
  chartPadding: { top: 15, right: 15, bottom: 5, left: 10 },
  fullWidth: !1,
  reverseData: !1,
  classNames: {
    chart: "ct-chart-line",
    label: "ct-label",
    labelGroup: "ct-labels",
    series: "ct-series",
    line: "ct-line",
    point: "ct-point",
    area: "ct-area",
    grid: "ct-grid",
    gridGroup: "ct-grids",
    gridBackground: "ct-grid-background",
    vertical: "ct-vertical",
    horizontal: "ct-horizontal",
    start: "ct-start",
    end: "ct-end",
  },
};
class LineChart extends BaseChart {
  createChart(u) {
    var e = this["data"];
    const d = normalizeData(e, u.reverseData, !0);
    var t = createSvg(this.container, u.width, u.height, u.classNames.chart),
      s = (this.svg = t).elem("g").addClass(u.classNames.gridGroup);
    const m = t.elem("g");
    var i = t.elem("g").addClass(u.classNames.labelGroup);
    const p = createChartRect(t, u);
    let g, f;
    (g =
      void 0 === u.axisX.type
        ? new StepAxis(axisUnits.x, d.series, p, {
            ...u.axisX,
            ticks: d.labels,
            stretch: u.fullWidth,
          })
        : new u.axisX.type(axisUnits.x, d.series, p, u.axisX)),
      (f =
        void 0 === u.axisY.type
          ? new AutoScaleAxis(axisUnits.y, d.series, p, {
              ...u.axisY,
              high: (isNumeric(u.high) ? u : u.axisY).high,
              low: (isNumeric(u.low) ? u : u.axisY).low,
            })
          : new u.axisY.type(axisUnits.y, d.series, p, u.axisY)),
      g.createGridAndLabels(s, i, u, this.eventEmitter),
      f.createGridAndLabels(s, i, u, this.eventEmitter),
      u.showGridBackground &&
        createGridBackground(
          s,
          p,
          u.classNames.gridBackground,
          this.eventEmitter
        ),
      each(
        e.series,
        (a, r) => {
          const n = m.elem("g");
          var e = safeHasProperty(a, "name") && a.name,
            t = safeHasProperty(a, "className") && a.className;
          const s = safeHasProperty(a, "meta") ? a.meta : void 0,
            i =
              (e && n.attr({ "ct:series-name": e }),
              s && n.attr({ "ct:meta": serialize(s) }),
              n.addClass(
                [
                  u.classNames.series,
                  t ||
                    ""
                      .concat(u.classNames.series, "-")
                      .concat(alphaNumerate(r)),
                ].join(" ")
              ),
              []),
            o = [];
          d.series[r].forEach((e, t) => {
            var s = {
              x: p.x1 + g.projectValue(e, t, d.series[r]),
              y: p.y1 - f.projectValue(e, t, d.series[r]),
            };
            i.push(s.x, s.y),
              o.push({ value: e, valueIndex: t, meta: getMetaData(a, t) });
          });
          e = {
            lineSmooth: getSeriesOption(a, u, "lineSmooth"),
            showPoint: getSeriesOption(a, u, "showPoint"),
            showLine: getSeriesOption(a, u, "showLine"),
            showArea: getSeriesOption(a, u, "showArea"),
            areaBase: getSeriesOption(a, u, "areaBase"),
          };
          let l;
          t = (l =
            "function" == typeof e.lineSmooth
              ? e.lineSmooth
              : (e.lineSmooth ? monotoneCubic : none)())(i, o);
          if (
            (e.showPoint &&
              t.pathElements.forEach((e) => {
                var s = e["data"],
                  i = n.elem(
                    "line",
                    { x1: e.x, y1: e.y, x2: e.x + 0.01, y2: e.y },
                    u.classNames.point
                  );
                if (s) {
                  let e, t;
                  safeHasProperty(s.value, "x") && (e = s.value.x),
                    safeHasProperty(s.value, "y") && (t = s.value.y),
                    i.attr({
                      "ct:value": [e, t].filter(isNumeric).join(","),
                      "ct:meta": serialize(s.meta),
                    });
                }
                this.eventEmitter.emit("draw", {
                  type: "point",
                  value: null == s ? void 0 : s.value,
                  index: (null == s ? void 0 : s.valueIndex) || 0,
                  meta: null == s ? void 0 : s.meta,
                  series: a,
                  seriesIndex: r,
                  axisX: g,
                  axisY: f,
                  group: n,
                  element: i,
                  x: e.x,
                  y: e.y,
                  chartRect: p,
                });
              }),
            e.showLine &&
              ((h = n.elem(
                "path",
                { d: t.stringify() },
                u.classNames.line,
                !0
              )),
              this.eventEmitter.emit("draw", {
                type: "line",
                values: d.series[r],
                path: t.clone(),
                chartRect: p,
                index: r,
                series: a,
                seriesIndex: r,
                meta: s,
                axisX: g,
                axisY: f,
                group: n,
                element: h,
              })),
            e.showArea && f.range)
          ) {
            var h = Math.max(Math.min(e.areaBase, f.range.max), f.range.min);
            const c = p.y1 - f.projectValue(h);
            t.splitByCommand("M")
              .filter((e) => 1 < e.pathElements.length)
              .map((e) => {
                var t = e.pathElements[0],
                  s = e.pathElements[e.pathElements.length - 1];
                return e
                  .clone(!0)
                  .position(0)
                  .remove(1)
                  .move(t.x, c)
                  .line(t.x, t.y)
                  .position(e.pathElements.length + 1)
                  .line(s.x, c);
              })
              .forEach((e) => {
                var t = n.elem(
                  "path",
                  { d: e.stringify() },
                  u.classNames.area,
                  !0
                );
                this.eventEmitter.emit("draw", {
                  type: "area",
                  values: d.series[r],
                  path: e.clone(),
                  series: a,
                  seriesIndex: r,
                  axisX: g,
                  axisY: f,
                  chartRect: p,
                  index: r,
                  group: n,
                  element: t,
                  meta: s,
                });
              });
          }
        },
        u.reverseData
      ),
      this.eventEmitter.emit("created", {
        chartRect: p,
        axisX: g,
        axisY: f,
        svg: t,
        options: u,
      });
  }
  constructor(e, t, s, i) {
    super(e, t, defaultOptions$2, extend({}, defaultOptions$2, s), i),
      (this.data = t);
  }
}
function getSerialSums(e) {
  return serialMap(e, function () {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return Array.from(t).reduce(
      (e, t) => ({
        x: e.x + (safeHasProperty(t, "x") ? t.x : 0),
        y: e.y + (safeHasProperty(t, "y") ? t.y : 0),
      }),
      { x: 0, y: 0 }
    );
  });
}
const defaultOptions$1 = {
  axisX: {
    offset: 30,
    position: "end",
    labelOffset: { x: 0, y: 0 },
    showLabel: !0,
    showGrid: !0,
    labelInterpolationFnc: noop,
    scaleMinSpace: 30,
    onlyInteger: !1,
  },
  axisY: {
    offset: 40,
    position: "start",
    labelOffset: { x: 0, y: 0 },
    showLabel: !0,
    showGrid: !0,
    labelInterpolationFnc: noop,
    scaleMinSpace: 20,
    onlyInteger: !1,
  },
  width: void 0,
  height: void 0,
  high: void 0,
  low: void 0,
  referenceValue: 0,
  chartPadding: { top: 15, right: 15, bottom: 5, left: 10 },
  seriesBarDistance: 15,
  stackBars: !1,
  stackMode: "accumulate",
  horizontalBars: !1,
  distributeSeries: !1,
  reverseData: !1,
  showGridBackground: !1,
  classNames: {
    chart: "ct-chart-bar",
    horizontalBars: "ct-horizontal-bars",
    label: "ct-label",
    labelGroup: "ct-labels",
    series: "ct-series",
    bar: "ct-bar",
    grid: "ct-grid",
    gridGroup: "ct-grids",
    gridBackground: "ct-grid-background",
    vertical: "ct-vertical",
    horizontal: "ct-horizontal",
    start: "ct-start",
    end: "ct-end",
  },
};
class BarChart extends BaseChart {
  createChart(m) {
    const i = this["data"],
      p = normalizeData(i, m.reverseData, m.horizontalBars ? "x" : "y", !0);
    var e = createSvg(
        this.container,
        m.width,
        m.height,
        m.classNames.chart +
          (m.horizontalBars ? " " + m.classNames.horizontalBars : "")
      ),
      t =
        m.stackBars && !0 !== m.stackMode && p.series.length
          ? getHighLow(
              [getSerialSums(p.series)],
              m,
              m.horizontalBars ? "x" : "y"
            )
          : getHighLow(p.series, m, m.horizontalBars ? "x" : "y"),
      s = (this.svg = e).elem("g").addClass(m.classNames.gridGroup);
    const a = e.elem("g");
    var r = e.elem("g").addClass(m.classNames.labelGroup);
    "number" == typeof m.high && (t.high = m.high),
      "number" == typeof m.low && (t.low = m.low);
    const g = createChartRect(e, m);
    let f;
    var n = m.distributeSeries && m.stackBars ? p.labels.slice(0, 1) : p.labels;
    let v, x, y;
    m.horizontalBars
      ? ((f = x =
          new (void 0 === m.axisX.type ? AutoScaleAxis : m.axisX.type)(
            axisUnits.x,
            p.series,
            g,
            { ...m.axisX, highLow: t, referenceValue: 0 }
          )),
        (v = y =
          void 0 === m.axisY.type
            ? new StepAxis(axisUnits.y, p.series, g, { ticks: n })
            : new m.axisY.type(axisUnits.y, p.series, g, m.axisY)))
      : ((v = x =
          void 0 === m.axisX.type
            ? new StepAxis(axisUnits.x, p.series, g, { ticks: n })
            : new m.axisX.type(axisUnits.x, p.series, g, m.axisX)),
        (f = y =
          new (void 0 === m.axisY.type ? AutoScaleAxis : m.axisY.type)(
            axisUnits.y,
            p.series,
            g,
            { ...m.axisY, highLow: t, referenceValue: 0 }
          )));
    const w = m.horizontalBars
        ? g.x1 + f.projectValue(0)
        : g.y1 - f.projectValue(0),
      b = "accumulate" === m.stackMode,
      S = "accumulate-relative" === m.stackMode,
      E = [],
      A = [];
    let M = E;
    v.createGridAndLabels(s, r, m, this.eventEmitter),
      f.createGridAndLabels(s, r, m, this.eventEmitter),
      m.showGridBackground &&
        createGridBackground(
          s,
          g,
          m.classNames.gridBackground,
          this.eventEmitter
        ),
      each(
        i.series,
        (l, h) => {
          const c = h - (i.series.length - 1) / 2;
          let u;
          u =
            m.distributeSeries && !m.stackBars
              ? v.axisLength / p.series.length / 2
              : m.distributeSeries && m.stackBars
              ? v.axisLength / 2
              : v.axisLength / p.series[h].length / 2;
          const d = a.elem("g");
          var e = safeHasProperty(l, "name") && l.name,
            t = safeHasProperty(l, "className") && l.className,
            s = safeHasProperty(l, "meta") ? l.meta : void 0;
          e && d.attr({ "ct:series-name": e }),
            s && d.attr({ "ct:meta": serialize(s) }),
            d.addClass(
              [
                m.classNames.series,
                t ||
                  "".concat(m.classNames.series, "-").concat(alphaNumerate(h)),
              ].join(" ")
            ),
            p.series[h].forEach((e, t) => {
              var s = safeHasProperty(e, "x") && e.x,
                i = safeHasProperty(e, "y") && e.y;
              let a;
              a =
                m.distributeSeries && !m.stackBars
                  ? h
                  : m.distributeSeries && m.stackBars
                  ? 0
                  : t;
              let r;
              (r = m.horizontalBars
                ? {
                    x: g.x1 + f.projectValue(s || 0, t, p.series[h]),
                    y: g.y1 - v.projectValue(i || 0, a, p.series[h]),
                  }
                : {
                    x: g.x1 + v.projectValue(s || 0, a, p.series[h]),
                    y: g.y1 - f.projectValue(i || 0, t, p.series[h]),
                  }),
                v instanceof StepAxis &&
                  (v.stretch ||
                    (r[v.units.pos] += u * (m.horizontalBars ? -1 : 1)),
                  (r[v.units.pos] +=
                    m.stackBars || m.distributeSeries
                      ? 0
                      : c * m.seriesBarDistance * (m.horizontalBars ? -1 : 1)));
              var n,
                o = (M = S ? (0 <= i || 0 <= s ? E : A) : M)[t] || w;
              (M[t] = o - (w - r[v.counterUnits.pos])),
                void 0 !== e &&
                  ((n = {
                    ["".concat(v.units.pos, "1")]: r[v.units.pos],
                    ["".concat(v.units.pos, "2")]: r[v.units.pos],
                  }),
                  m.stackBars && (b || S || !m.stackMode)
                    ? ((n["".concat(v.counterUnits.pos, "1")] = o),
                      (n["".concat(v.counterUnits.pos, "2")] = M[t]))
                    : ((n["".concat(v.counterUnits.pos, "1")] = w),
                      (n["".concat(v.counterUnits.pos, "2")] =
                        r[v.counterUnits.pos])),
                  (n.x1 = Math.min(Math.max(n.x1, g.x1), g.x2)),
                  (n.x2 = Math.min(Math.max(n.x2, g.x1), g.x2)),
                  (n.y1 = Math.min(Math.max(n.y1, g.y2), g.y1)),
                  (n.y2 = Math.min(Math.max(n.y2, g.y2), g.y1)),
                  (o = getMetaData(l, t)),
                  (s = d
                    .elem("line", n, m.classNames.bar)
                    .attr({
                      "ct:value": [s, i].filter(isNumeric).join(","),
                      "ct:meta": serialize(o),
                    })),
                  this.eventEmitter.emit("draw", {
                    type: "bar",
                    value: e,
                    index: t,
                    meta: o,
                    series: l,
                    seriesIndex: h,
                    axisX: x,
                    axisY: y,
                    chartRect: g,
                    group: d,
                    element: s,
                    ...n,
                  }));
            });
        },
        m.reverseData
      ),
      this.eventEmitter.emit("created", {
        chartRect: g,
        axisX: x,
        axisY: y,
        svg: e,
        options: m,
      });
  }
  constructor(e, t, s, i) {
    super(e, t, defaultOptions$1, extend({}, defaultOptions$1, s), i),
      (this.data = t);
  }
}
const defaultOptions = {
  width: void 0,
  height: void 0,
  chartPadding: 5,
  classNames: {
    chartPie: "ct-chart-pie",
    chartDonut: "ct-chart-donut",
    series: "ct-series",
    slicePie: "ct-slice-pie",
    sliceDonut: "ct-slice-donut",
    label: "ct-label",
  },
  startAngle: 0,
  total: void 0,
  donut: !1,
  donutWidth: 60,
  showLabel: !0,
  labelOffset: 0,
  labelPosition: "inside",
  labelInterpolationFnc: noop,
  labelDirection: "neutral",
  ignoreEmptyValues: !1,
};
function determineAnchorPosition(e, t, s) {
  t = t.x > e.x;
  return (t && "explode" === s) || (!t && "implode" === s)
    ? "start"
    : (t && "implode" === s) || (!t && "explode" === s)
    ? "end"
    : "middle";
}
class PieChart extends BaseChart {
  createChart(l) {
    const h = this["data"],
      c = normalizeData(h),
      u = [];
    let d,
      m,
      p = l.startAngle;
    const s = createSvg(
        this.container,
        l.width,
        l.height,
        l.donut ? l.classNames.chartDonut : l.classNames.chartPie
      ),
      g = createChartRect((this.svg = s), l);
    let e = Math.min(g.width() / 2, g.height() / 2);
    const t = l.total || c.series.reduce(sum, 0),
      f = quantity(l.donutWidth),
      v =
        ("%" === f.unit && (f.value *= e / 100),
        (e -= l.donut ? f.value / 2 : 0),
        (m =
          "outside" === l.labelPosition || l.donut
            ? e
            : "center" === l.labelPosition
            ? 0
            : e / 2),
        l.labelOffset && (m += l.labelOffset),
        { x: g.x1 + g.width() / 2, y: g.y2 + g.height() / 2 }),
      x =
        1 ===
        h.series.filter((e) =>
          safeHasProperty(e, "value") ? 0 !== e.value : 0 !== e
        ).length;
    h.series.forEach((e, t) => (u[t] = s.elem("g"))),
      l.showLabel && (d = s.elem("g")),
      h.series.forEach((i, a) => {
        if (0 !== c.series[a] || !l.ignoreEmptyValues) {
          var r = safeHasProperty(i, "name") && i.name,
            n = safeHasProperty(i, "className") && i.className,
            o = safeHasProperty(i, "meta") ? i.meta : void 0;
          r && u[a].attr({ "ct:series-name": r }),
            u[a].addClass(
              [
                null == (r = l.classNames) ? void 0 : r.series,
                n ||
                  ""
                    .concat(null == (r = l.classNames) ? void 0 : r.series, "-")
                    .concat(alphaNumerate(a)),
              ].join(" ")
            );
          let s = 0 < t ? p + (c.series[a] / t) * 360 : 0;
          (n = Math.max(0, p - (0 === a || x ? 0 : 0.2))),
            (r =
              (359.99 <= s - n && (s = n + 359.99),
              polarToCartesian(v.x, v.y, e, n))),
            (n = polarToCartesian(v.x, v.y, e, s)),
            (n = new SvgPath(!l.donut)
              .move(n.x, n.y)
              .arc(e, e, 0, Number(180 < s - p), 0, r.x, r.y)),
            (r =
              (l.donut || n.line(v.x, v.y),
              u[a].elem(
                "path",
                { d: n.stringify() },
                l.donut ? l.classNames.sliceDonut : l.classNames.slicePie
              )));
          if (
            (r.attr({ "ct:value": c.series[a], "ct:meta": serialize(o) }),
            l.donut && r.attr({ style: "stroke-width: " + f.value + "px" }),
            this.eventEmitter.emit("draw", {
              type: "slice",
              value: c.series[a],
              totalDataSum: t,
              index: a,
              meta: o,
              series: i,
              group: u[a],
              element: r,
              path: n.clone(),
              center: v,
              radius: e,
              startAngle: p,
              endAngle: s,
              chartRect: g,
            }),
            l.showLabel)
          ) {
            let e;
            e =
              1 === h.series.length
                ? { x: v.x, y: v.y }
                : polarToCartesian(v.x, v.y, m, p + (s - p) / 2);
            let t;
            t = (
              c.labels && !isFalseyButZero(c.labels[a]) ? c.labels : c.series
            )[a];
            r = l.labelInterpolationFnc(t, a);
            (!r && 0 !== r) ||
              ((n = d
                .elem(
                  "text",
                  {
                    dx: e.x,
                    dy: e.y,
                    "text-anchor": determineAnchorPosition(
                      v,
                      e,
                      l.labelDirection
                    ),
                  },
                  l.classNames.label
                )
                .text(String(r))),
              this.eventEmitter.emit("draw", {
                type: "label",
                index: a,
                group: d,
                element: n,
                text: "" + r,
                chartRect: g,
                series: i,
                meta: o,
                ...e,
              }));
          }
          p = s;
        }
      }),
      this.eventEmitter.emit("created", { chartRect: g, svg: s, options: l });
  }
  constructor(e, t, s, i) {
    super(e, t, defaultOptions, extend({}, defaultOptions, s), i),
      (this.data = t);
  }
}
export {
  AutoScaleAxis,
  Axis,
  BarChart,
  BaseChart,
  EPSILON,
  EventEmitter,
  FixedScaleAxis,
  index as Interpolation,
  LineChart,
  PieChart,
  StepAxis,
  Svg,
  SvgList,
  SvgPath,
  alphaNumerate,
  axisUnits,
  createChartRect,
  createGrid,
  createGridBackground,
  createLabel,
  createSvg,
  deserialize,
  determineAnchorPosition,
  each,
  easings,
  ensureUnit,
  escapingMap,
  extend,
  getBounds,
  getHighLow,
  getMetaData,
  getMultiValue,
  getNumberOrUndefined,
  getSeriesOption,
  isArrayOfArrays,
  isArrayOfSeries,
  isDataHoleValue,
  isFalseyButZero,
  isMultiValue,
  isNumeric,
  namespaces,
  noop,
  normalizeData,
  normalizePadding,
  optionsProvider,
  orderOfMagnitude,
  polarToCartesian,
  precision,
  projectLength,
  quantity,
  rho,
  roundWithPrecision,
  safeHasProperty,
  serialMap,
  serialize,
  splitIntoSegments,
  sum,
  times,
};
