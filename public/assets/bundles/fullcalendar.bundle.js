var FullCalendar = (function (e) {
  "use strict";
  var H,
    C,
    B,
    j,
    z,
    U,
    W = {},
    L = [],
    F = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function R(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function V(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }
  function E(e, t, n) {
    var r,
      i,
      s,
      o = {};
    for (s in t)
      "key" == s ? (r = t[s]) : "ref" == s ? (i = t[s]) : (o[s] = t[s]);
    if (
      (2 < arguments.length &&
        (o.children = 3 < arguments.length ? H.call(arguments, 2) : n),
      "function" == typeof e && null != e.defaultProps)
    )
      for (s in e.defaultProps) void 0 === o[s] && (o[s] = e.defaultProps[s]);
    return G(e, o, r, i, null);
  }
  function G(e, t, n, r, i) {
    e = {
      type: e,
      props: t,
      key: n,
      ref: r,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: null == i ? ++B : i,
    };
    return null == i && null != C.vnode && C.vnode(e), e;
  }
  function x(e) {
    return e.children;
  }
  function Q(e, t, n) {
    "-" === t[0]
      ? e.setProperty(t, null == n ? "" : n)
      : (e[t] =
          null == n ? "" : "number" != typeof n || F.test(t) ? n : n + "px");
  }
  function q(e, t, n, r, i) {
    var s;
    e: if ("style" === t)
      if ("string" == typeof n) e.style.cssText = n;
      else {
        if (("string" == typeof r && (e.style.cssText = r = ""), r))
          for (t in r) (n && t in n) || Q(e.style, t, "");
        if (n) for (t in n) (r && n[t] === r[t]) || Q(e.style, t, n[t]);
      }
    else if ("o" === t[0] && "n" === t[1])
      (s = t !== (t = t.replace(/Capture$/, ""))),
        (t = (t.toLowerCase() in e ? t.toLowerCase() : t).slice(2)),
        e.l || (e.l = {}),
        (e.l[t + s] = n)
          ? r || e.addEventListener(t, s ? Z : Y, s)
          : e.removeEventListener(t, s ? Z : Y, s);
    else if ("dangerouslySetInnerHTML" !== t) {
      if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (
        "width" !== t &&
        "height" !== t &&
        "href" !== t &&
        "list" !== t &&
        "form" !== t &&
        "tabIndex" !== t &&
        "download" !== t &&
        t in e
      )
        try {
          e[t] = null == n ? "" : n;
          break e;
        } catch (e) {}
      "function" != typeof n &&
        (null == n || (!1 === n && -1 == t.indexOf("-"))
          ? e.removeAttribute(t)
          : e.setAttribute(t, n));
    }
  }
  function Y(e) {
    z = !0;
    try {
      return this.l[e.type + !1](C.event ? C.event(e) : e);
    } finally {
      z = !1;
    }
  }
  function Z(e) {
    z = !0;
    try {
      return this.l[e.type + !0](C.event ? C.event(e) : e);
    } finally {
      z = !1;
    }
  }
  function T(e, t) {
    (this.props = e), (this.context = t);
  }
  function X(e, t) {
    if (null == t) return e.__ ? X(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++)
      if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return "function" == typeof e.type ? X(e) : null;
  }
  function J(e) {
    (z ? setTimeout : ue)(e);
  }
  function $(e) {
    ((e.__d || ((e.__d = !0), !de.push(e)) || K.__r++) &&
      U === C.debounceRendering) ||
      ((U = C.debounceRendering) || J)(K);
  }
  function K() {
    var e, t, n, r, i, s, o;
    for (
      de.sort(function (e, t) {
        return e.__v.__b - t.__v.__b;
      });
      (t = de.shift());

    )
      t.__d &&
        ((e = de.length),
        (r = void 0),
        (s = (i = (t = t).__v).__e),
        (o = t.__P) &&
          ((n = []),
          ((r = R({}, i)).__v = i.__v + 1),
          re(
            o,
            i,
            r,
            t.__n,
            void 0 !== o.ownerSVGElement,
            null != i.__h ? [s] : null,
            n,
            null == s ? X(i) : s,
            i.__h
          ),
          ie(n, i),
          i.__e != s) &&
          (function e(t) {
            var n, r;
            if (null != (t = t.__) && null != t.__c) {
              for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++)
                if (null != (r = t.__k[n]) && null != r.__e) {
                  t.__e = t.__c.base = r.__e;
                  break;
                }
              return e(t);
            }
          })(i),
        de.length > e) &&
        de.sort(function (e, t) {
          return e.__v.__b - t.__v.__b;
        });
    K.__r = 0;
  }
  function ee(e, t, n, r, i, s, o, a, l, c) {
    var d,
      u,
      h,
      f,
      g,
      p,
      v,
      m = (r && r.__k) || L,
      y = m.length;
    for (n.__k = [], d = 0; d < t.length; d++)
      if (
        null !=
        (f = n.__k[d] =
          null == (f = t[d]) || "boolean" == typeof f
            ? null
            : "string" == typeof f ||
              "number" == typeof f ||
              "bigint" == typeof f
            ? G(null, f, null, null, f)
            : Array.isArray(f)
            ? G(x, { children: f }, null, null, null)
            : 0 < f.__b
            ? G(f.type, f.props, f.key, f.ref || null, f.__v)
            : f)
      ) {
        if (
          ((f.__ = n),
          (f.__b = n.__b + 1),
          null === (h = m[d]) || (h && f.key == h.key && f.type === h.type))
        )
          m[d] = void 0;
        else
          for (u = 0; u < y; u++) {
            if ((h = m[u]) && f.key == h.key && f.type === h.type) {
              m[u] = void 0;
              break;
            }
            h = null;
          }
        re(e, f, (h = h || W), i, s, o, a, l, c),
          (g = f.__e),
          (u = f.ref) &&
            h.ref != u &&
            ((v = v || []),
            h.ref && v.push(h.ref, null, f),
            v.push(u, f.__c || g, f)),
          null != g
            ? (null == p && (p = g),
              "function" == typeof f.type && f.__k === h.__k
                ? (f.__d = l =
                    (function e(t, n, r) {
                      for (var i, s = t.__k, o = 0; s && o < s.length; o++)
                        (i = s[o]) &&
                          ((i.__ = t),
                          (n =
                            "function" == typeof i.type
                              ? e(i, n, r)
                              : ne(r, i, i, s, i.__e, n)));
                      return n;
                    })(f, l, e))
                : (l = ne(e, f, h, m, g, l)),
              "function" == typeof n.type && (n.__d = l))
            : l && h.__e == l && l.parentNode != e && (l = X(h));
      }
    for (n.__e = p, d = y; d--; )
      null != m[d] &&
        ("function" == typeof n.type &&
          null != m[d].__e &&
          m[d].__e == n.__d &&
          (n.__d = (function e(t) {
            var n, r;
            if (null == t.type || "string" == typeof t.type) return t.__e;
            if (t.__k)
              for (n = t.__k.length - 1; 0 <= n; n--)
                if ((r = t.__k[n]) && (r = e(r))) return r;
            return null;
          })(r).nextSibling),
        (function e(t, n, r) {
          var i, s;
          if (
            (C.unmount && C.unmount(t),
            !(i = t.ref) ||
              (i.current && i.current !== t.__e) ||
              se(i, null, n),
            null != (i = t.__c))
          ) {
            if (i.componentWillUnmount)
              try {
                i.componentWillUnmount();
              } catch (t) {
                C.__e(t, n);
              }
            (i.base = i.__P = null), (t.__c = void 0);
          }
          if ((i = t.__k))
            for (s = 0; s < i.length; s++)
              i[s] && e(i[s], n, r || "function" != typeof t.type);
          r || null == t.__e || V(t.__e), (t.__ = t.__e = t.__d = void 0);
        })(m[d], m[d]));
    if (v) for (d = 0; d < v.length; d++) se(v[d], v[++d], v[++d]);
  }
  function te(e, t) {
    return (
      (t = t || []),
      null != e &&
        "boolean" != typeof e &&
        (Array.isArray(e)
          ? e.some(function (e) {
              te(e, t);
            })
          : t.push(e)),
      t
    );
  }
  function ne(e, t, n, r, i, s) {
    var o, a, l;
    if (void 0 !== t.__d) (o = t.__d), (t.__d = void 0);
    else if (null == n || i != s || null == i.parentNode)
      e: if (null == s || s.parentNode !== e) e.appendChild(i), (o = null);
      else {
        for (a = s, l = 0; (a = a.nextSibling) && l < r.length; l += 1)
          if (a == i) break e;
        e.insertBefore(i, s), (o = s);
      }
    return void 0 !== o ? o : i.nextSibling;
  }
  function re(e, t, n, r, i, s, o, a, l) {
    var c,
      d,
      u,
      h,
      f,
      g,
      p,
      v,
      m,
      y,
      b,
      E,
      S,
      A,
      D,
      w = t.type;
    if (void 0 === t.constructor) {
      null != n.__h &&
        ((l = n.__h), (a = t.__e = n.__e), (t.__h = null), (s = [a])),
        (c = C.__b) && c(t);
      try {
        e: if ("function" == typeof w) {
          if (
            ((v = t.props),
            (m = (c = w.contextType) && r[c.__c]),
            (y = c ? (m ? m.props.value : c.__) : r),
            n.__c
              ? (p = (d = t.__c = n.__c).__ = d.__E)
              : ("prototype" in w && w.prototype.render
                  ? (t.__c = d = new w(v, y))
                  : ((t.__c = d = new T(v, y)),
                    (d.constructor = w),
                    (d.render = oe)),
                m && m.sub(d),
                (d.props = v),
                d.state || (d.state = {}),
                (d.context = y),
                (d.__n = r),
                (u = d.__d = !0),
                (d.__h = []),
                (d._sb = [])),
            null == d.__s && (d.__s = d.state),
            null != w.getDerivedStateFromProps &&
              (d.__s == d.state && (d.__s = R({}, d.__s)),
              R(d.__s, w.getDerivedStateFromProps(v, d.__s))),
            (h = d.props),
            (f = d.state),
            (d.__v = t),
            u)
          )
            null == w.getDerivedStateFromProps &&
              null != d.componentWillMount &&
              d.componentWillMount(),
              null != d.componentDidMount && d.__h.push(d.componentDidMount);
          else {
            if (
              (null == w.getDerivedStateFromProps &&
                v !== h &&
                null != d.componentWillReceiveProps &&
                d.componentWillReceiveProps(v, y),
              (!d.__e &&
                null != d.shouldComponentUpdate &&
                !1 === d.shouldComponentUpdate(v, d.__s, y)) ||
                t.__v === n.__v)
            ) {
              for (
                t.__v !== n.__v &&
                  ((d.props = v), (d.state = d.__s), (d.__d = !1)),
                  t.__e = n.__e,
                  t.__k = n.__k,
                  t.__k.forEach(function (e) {
                    e && (e.__ = t);
                  }),
                  b = 0;
                b < d._sb.length;
                b++
              )
                d.__h.push(d._sb[b]);
              (d._sb = []), d.__h.length && o.push(d);
              break e;
            }
            null != d.componentWillUpdate && d.componentWillUpdate(v, d.__s, y),
              null != d.componentDidUpdate &&
                d.__h.push(function () {
                  d.componentDidUpdate(h, f, g);
                });
          }
          if (
            ((d.context = y),
            (d.props = v),
            (d.__P = e),
            (E = C.__r),
            (S = 0),
            "prototype" in w && w.prototype.render)
          ) {
            for (
              d.state = d.__s,
                d.__d = !1,
                E && E(t),
                c = d.render(d.props, d.state, d.context),
                A = 0;
              A < d._sb.length;
              A++
            )
              d.__h.push(d._sb[A]);
            d._sb = [];
          } else
            for (
              ;
              (d.__d = !1),
                E && E(t),
                (c = d.render(d.props, d.state, d.context)),
                (d.state = d.__s),
                d.__d && ++S < 25;

            );
          (d.state = d.__s),
            null != d.getChildContext && (r = R(R({}, r), d.getChildContext())),
            u ||
              null == d.getSnapshotBeforeUpdate ||
              (g = d.getSnapshotBeforeUpdate(h, f)),
            (D =
              null != c && c.type === x && null == c.key
                ? c.props.children
                : c),
            ee(e, Array.isArray(D) ? D : [D], t, n, r, i, s, o, a, l),
            (d.base = t.__e),
            (t.__h = null),
            d.__h.length && o.push(d),
            p && (d.__E = d.__ = null),
            (d.__e = !1);
        } else
          null == s && t.__v === n.__v
            ? ((t.__k = n.__k), (t.__e = n.__e))
            : (t.__e = (function (e, t, n, r, i, s, o, a) {
                var l,
                  c,
                  d,
                  u = n.props,
                  h = t.props,
                  f = t.type,
                  g = 0;
                if (("svg" === f && (i = !0), null != s))
                  for (; g < s.length; g++)
                    if (
                      (l = s[g]) &&
                      "setAttribute" in l == !!f &&
                      (f ? l.localName === f : 3 === l.nodeType)
                    ) {
                      (e = l), (s[g] = null);
                      break;
                    }
                if (null == e) {
                  if (null === f) return document.createTextNode(h);
                  (e = i
                    ? document.createElementNS("http://www.w3.org/2000/svg", f)
                    : document.createElement(f, h.is && h)),
                    (s = null),
                    (a = !1);
                }
                if (null === f) u === h || (a && e.data === h) || (e.data = h);
                else {
                  if (
                    ((s = s && H.call(e.childNodes)),
                    (c = (u = n.props || W).dangerouslySetInnerHTML),
                    (d = h.dangerouslySetInnerHTML),
                    !a)
                  ) {
                    if (null != s)
                      for (u = {}, g = 0; g < e.attributes.length; g++)
                        u[e.attributes[g].name] = e.attributes[g].value;
                    (!d && !c) ||
                      (d &&
                        ((c && d.__html == c.__html) ||
                          d.__html === e.innerHTML)) ||
                      (e.innerHTML = (d && d.__html) || "");
                  }
                  if (
                    ((function (e, t, n, r, i) {
                      for (var s in n)
                        "children" === s ||
                          "key" === s ||
                          s in t ||
                          q(e, s, null, n[s], r);
                      for (s in t)
                        (i && "function" != typeof t[s]) ||
                          "children" === s ||
                          "key" === s ||
                          "value" === s ||
                          "checked" === s ||
                          n[s] === t[s] ||
                          q(e, s, t[s], n[s], r);
                    })(e, h, u, i, a),
                    d)
                  )
                    t.__k = [];
                  else if (
                    ((g = t.props.children),
                    ee(
                      e,
                      Array.isArray(g) ? g : [g],
                      t,
                      n,
                      r,
                      i && "foreignObject" !== f,
                      s,
                      o,
                      s ? s[0] : n.__k && X(n, 0),
                      a
                    ),
                    null != s)
                  )
                    for (g = s.length; g--; ) null != s[g] && V(s[g]);
                  a ||
                    ("value" in h &&
                      void 0 !== (g = h.value) &&
                      (g !== e.value ||
                        ("progress" === f && !g) ||
                        ("option" === f && g !== u.value)) &&
                      q(e, "value", g, u.value, !1),
                    "checked" in h &&
                      void 0 !== (g = h.checked) &&
                      g !== e.checked &&
                      q(e, "checked", g, u.checked, !1));
                }
                return e;
              })(n.__e, t, n, r, i, s, o, l));
        (c = C.diffed) && c(t);
      } catch (e) {
        (t.__v = null),
          (!l && null == s) ||
            ((t.__e = a), (t.__h = !!l), (s[s.indexOf(a)] = null)),
          C.__e(e, t, n);
      }
    }
  }
  function ie(e, t) {
    C.__c && C.__c(t, e),
      e.some(function (t) {
        try {
          (e = t.__h),
            (t.__h = []),
            e.some(function (e) {
              e.call(t);
            });
        } catch (e) {
          C.__e(e, t.__v);
        }
      });
  }
  function se(e, t, n) {
    try {
      "function" == typeof e ? e(t) : (e.current = t);
    } catch (e) {
      C.__e(e, n);
    }
  }
  function oe(e, t, n) {
    return this.constructor(e, n);
  }
  function ae(e, t, n) {
    var r, i, s;
    C.__ && C.__(e, t),
      (i = (r = "function" == typeof n) ? null : (n && n.__k) || t.__k),
      (s = []),
      re(
        t,
        (e = ((!r && n) || t).__k = E(x, null, [e])),
        i || W,
        W,
        void 0 !== t.ownerSVGElement,
        !r && n ? [n] : !i && t.firstChild ? H.call(t.childNodes) : null,
        s,
        !r && n ? n : i ? i.__e : t.firstChild,
        r
      ),
      ie(s, e);
  }
  (H = L.slice),
    (C = {
      __e: function (e, t, n, r) {
        for (var i, s, o; (t = t.__); )
          if ((i = t.__c) && !i.__)
            try {
              if (
                ((s = i.constructor) &&
                  null != s.getDerivedStateFromError &&
                  (i.setState(s.getDerivedStateFromError(e)), (o = i.__d)),
                null != i.componentDidCatch &&
                  (i.componentDidCatch(e, r || {}), (o = i.__d)),
                o)
              )
                return (i.__E = i);
            } catch (t) {
              e = t;
            }
        throw e;
      },
    }),
    (B = 0),
    (z = !(j = function (e) {
      return null != e && void 0 === e.constructor;
    })),
    (T.prototype.setState = function (e, t) {
      var n =
        null != this.__s && this.__s !== this.state
          ? this.__s
          : (this.__s = R({}, this.state));
      (e = "function" == typeof e ? e(R({}, n), this.props) : e) && R(n, e),
        null != e && this.__v && (t && this._sb.push(t), $(this));
    }),
    (T.prototype.forceUpdate = function (e) {
      this.__v && ((this.__e = !0), e && this.__h.push(e), $(this));
    }),
    (T.prototype.render = x);
  var r,
    le,
    ce,
    de = [],
    ue =
      "function" == typeof Promise
        ? Promise.prototype.then.bind(Promise.resolve())
        : setTimeout,
    he = (K.__r = 0),
    fe = [],
    ge = [],
    pe = C.__b,
    ve = C.__r,
    me = C.diffed,
    ye = C.__c,
    be = C.unmount;
  function Ee() {
    for (var t; (t = fe.shift()); )
      if (t.__P && t.__H)
        try {
          t.__H.__h.forEach(Ae), t.__H.__h.forEach(De), (t.__H.__h = []);
        } catch (e) {
          (t.__H.__h = []), C.__e(e, t.__v);
        }
  }
  (C.__b = function (e) {
    (r = null), pe && pe(e);
  }),
    (C.__r = function (e) {
      ve && ve(e);
      e = (r = e.__c).__H;
      e &&
        (le === r
          ? ((e.__h = []),
            (r.__h = []),
            e.__.forEach(function (e) {
              e.__N && (e.__ = e.__N), (e.__V = ge), (e.__N = e.i = void 0);
            }))
          : (e.__h.forEach(Ae), e.__h.forEach(De), (e.__h = []))),
        (le = r);
    }),
    (C.diffed = function (e) {
      me && me(e);
      e = e.__c;
      e &&
        e.__H &&
        (!e.__H.__h.length ||
          (1 !== fe.push(e) && ce === C.requestAnimationFrame) ||
          (
            (ce = C.requestAnimationFrame) ||
            function (e) {
              function t() {
                clearTimeout(r), Se && cancelAnimationFrame(n), setTimeout(e);
              }
              var n,
                r = setTimeout(t, 100);
              Se && (n = requestAnimationFrame(t));
            }
          )(Ee),
        e.__H.__.forEach(function (e) {
          e.i && (e.__H = e.i),
            e.__V !== ge && (e.__ = e.__V),
            (e.i = void 0),
            (e.__V = ge);
        })),
        (le = r = null);
    }),
    (C.__c = function (e, n) {
      n.some(function (t) {
        try {
          t.__h.forEach(Ae),
            (t.__h = t.__h.filter(function (e) {
              return !e.__ || De(e);
            }));
        } catch (e) {
          n.some(function (e) {
            e.__h && (e.__h = []);
          }),
            (n = []),
            C.__e(e, t.__v);
        }
      }),
        ye && ye(e, n);
    }),
    (C.unmount = function (e) {
      be && be(e);
      var t,
        e = e.__c;
      e &&
        e.__H &&
        (e.__H.__.forEach(function (e) {
          try {
            Ae(e);
          } catch (e) {
            t = e;
          }
        }),
        (e.__H = void 0),
        t) &&
        C.__e(t, e.__v);
    });
  var Se = "function" == typeof requestAnimationFrame;
  function Ae(e) {
    var t = r,
      n = e.__c;
    "function" == typeof n && ((e.__c = void 0), n()), (r = t);
  }
  function De(e) {
    var t = r;
    (e.__c = e.__()), (r = t);
  }
  new T().isPureReactComponent = !0;
  var we = C.__b,
    Ce =
      ((C.__b = function (e) {
        e.type &&
          e.type.__f &&
          e.ref &&
          ((e.props.ref = e.ref), (e.ref = null)),
          we && we(e);
      }),
      C.__e),
    Re =
      ((C.__e = function (e, t, n, r) {
        if (e.then)
          for (var i, s = t; (s = s.__); )
            if ((i = s.__c) && i.__c)
              return (
                null == t.__e && ((t.__e = n.__e), (t.__k = n.__k)), i.__c(e, t)
              );
        Ce(e, t, n, r);
      }),
      C.unmount);
  function xe(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }
  (C.unmount = function (e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), Re && Re(e);
  }),
    (new T().__c = function (e, t) {
      function n() {
        o || ((o = !0), (r.__R = null), s ? s(a) : a());
      }
      var r = t.__c,
        i = this,
        s = (null == i.t && (i.t = []), i.t.push(r), xe(i.__v)),
        o = !1,
        a =
          ((r.__R = n),
          function () {
            var e, t;
            if (!--i.__u)
              for (
                i.state.__a &&
                  ((e = i.state.__a),
                  (i.__v.__k[0] = (function t(e, n, r) {
                    return (
                      e &&
                        ((e.__v = null),
                        (e.__k =
                          e.__k &&
                          e.__k.map(function (e) {
                            return t(e, n, r);
                          })),
                        e.__c) &&
                        e.__c.__P === n &&
                        (e.__e && r.insertBefore(e.__e, e.__d),
                        (e.__c.__e = !0),
                        (e.__c.__P = r)),
                      e
                    );
                  })(e, e.__c.__P, e.__c.__O))),
                  i.setState({ __a: (i.__b = null) });
                (t = i.t.pop());

              )
                t.forceUpdate();
          }),
        t = !0 === t.__h;
      i.__u++ || t || i.setState({ __a: (i.__b = i.__v.__k[0]) }), e.then(n, n);
    });
  function Te(e, t, n) {
    if (
      (++n[1] === n[0] && e.o.delete(t),
      e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
    )
      for (n = e.u; n; ) {
        for (; 3 < n.length; ) n.pop()();
        if (n[1] < n[0]) break;
        e.u = n = n[2];
      }
  }
  function _e(e) {
    return (
      (this.getChildContext = function () {
        return e.context;
      }),
      e.children
    );
  }
  function ke(e) {
    var n = this,
      t = e.i;
    (n.componentWillUnmount = function () {
      ae(null, n.l), (n.l = null), (n.i = null);
    }),
      n.i && n.i !== t && n.componentWillUnmount(),
      e.__v
        ? (n.l ||
            ((n.i = t),
            (n.l = {
              nodeType: 1,
              parentNode: t,
              childNodes: [],
              appendChild: function (e) {
                this.childNodes.push(e), n.i.appendChild(e);
              },
              insertBefore: function (e, t) {
                this.childNodes.push(e), n.i.appendChild(e);
              },
              removeChild: function (e) {
                this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1),
                  n.i.removeChild(e);
              },
            })),
          ae(E(_e, { context: n.context }, e.__v), n.l))
        : n.l && n.componentWillUnmount();
  }
  function Me(e, t) {
    e = E(ke, { __v: e, i: t });
    return (e.containerInfo = t), e;
  }
  new T().__a = function (n) {
    var r = this,
      i = xe(r.__v),
      s = r.o.get(n);
    return (
      s[0]++,
      function (e) {
        function t() {
          r.props.revealOrder ? (s.push(e), Te(r, n, s)) : e();
        }
        i ? i(t) : t();
      }
    );
  };
  var Ie =
      ("undefined" != typeof Symbol &&
        Symbol.for &&
        Symbol.for("react.element")) ||
      60103,
    Oe =
      /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    Ne = "undefined" != typeof document,
    Pe =
      ((T.prototype.isReactComponent = {}),
      [
        "componentWillMount",
        "componentWillReceiveProps",
        "componentWillUpdate",
      ].forEach(function (t) {
        Object.defineProperty(T.prototype, t, {
          configurable: !0,
          get: function () {
            return this["UNSAFE_" + t];
          },
          set: function (e) {
            Object.defineProperty(this, t, {
              configurable: !0,
              writable: !0,
              value: e,
            });
          },
        });
      }),
      C.event);
  function He() {}
  function Be() {
    return this.cancelBubble;
  }
  function je() {
    return this.defaultPrevented;
  }
  C.event = function (e) {
    return (
      ((e = Pe ? Pe(e) : e).persist = He),
      (e.isPropagationStopped = Be),
      (e.isDefaultPrevented = je),
      (e.nativeEvent = e)
    );
  };
  var ze = {
      configurable: !0,
      get: function () {
        return this.class;
      },
    },
    Ue = C.vnode,
    We =
      ((C.vnode = function (e) {
        var t,
          n = e.type,
          r = e.props,
          i = r;
        if ("string" == typeof n) {
          var s,
            o = -1 === n.indexOf("-"),
            i = {};
          for (s in r) {
            var a = r[s];
            (Ne && "children" === s && "noscript" === n) ||
              ("value" === s && "defaultValue" in r && null == a) ||
              ("defaultValue" === s && "value" in r && null == r.value
                ? (s = "value")
                : "download" === s && !0 === a
                ? (a = "")
                : /ondoubleclick/i.test(s)
                ? (s = "ondblclick")
                : /^onchange(textarea|input)/i.test(s + n) &&
                  ((t = r.type),
                  !(
                    "undefined" != typeof Symbol && "symbol" == typeof Symbol()
                      ? /fil|che|rad/i
                      : /fil|che|ra/i
                  ).test(t))
                ? (s = "oninput")
                : /^onfocus$/i.test(s)
                ? (s = "onfocusin")
                : /^onblur$/i.test(s)
                ? (s = "onfocusout")
                : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s)
                ? (s = s.toLowerCase())
                : o && Oe.test(s)
                ? (s = s.replace(/[A-Z0-9]/g, "-$&").toLowerCase())
                : null === a && (a = void 0),
              /^oninput$/i.test(s) &&
                ((s = s.toLowerCase()), i[s]) &&
                (s = "oninputCapture"),
              (i[s] = a));
          }
          "select" == n &&
            i.multiple &&
            Array.isArray(i.value) &&
            (i.value = te(r.children).forEach(function (e) {
              e.props.selected = -1 != i.value.indexOf(e.props.value);
            })),
            "select" == n &&
              null != i.defaultValue &&
              (i.value = te(r.children).forEach(function (e) {
                e.props.selected = i.multiple
                  ? -1 != i.defaultValue.indexOf(e.props.value)
                  : i.defaultValue == e.props.value;
              })),
            (e.props = i),
            r.class != r.className &&
              ((ze.enumerable = "className" in r),
              null != r.className && (i.className = r.className),
              Object.defineProperty(i, "className", ze));
        }
        (e.$$typeof = Ie), Ue && Ue(e);
      }),
      C.__r);
  C.__r = function (e) {
    We && We(e), e.__c;
  };
  const Le = [],
    Fe = new Map();
  function Ve(t) {
    Le.push(t),
      Fe.forEach((e) => {
        Qe(e, t);
      });
  }
  function Ge(e) {
    let t = Fe.get(e);
    if (!t || !t.isConnected) {
      (t = e.querySelector("style[data-fullcalendar]")) ||
        ((t = document.createElement("style")).setAttribute(
          "data-fullcalendar",
          ""
        ),
        (s = qe =
          void 0 === qe
            ? (s = document.querySelector('meta[name="csp-nonce"]')) &&
              s.hasAttribute("content")
              ? s.getAttribute("content")
              : ((s = document.querySelector("script[nonce]")) && s.nonce) || ""
            : qe) && (t.nonce = s),
        (n = e === document ? document.head : e),
        (r =
          e === document
            ? n.querySelector(
                "script,link[rel=stylesheet],link[as=style],style"
              )
            : n.firstChild),
        n.insertBefore(t, r)),
        Fe.set(e, t);
      var n,
        r,
        i = t;
      for (const o of Le) Qe(i, o);
    }
    var s;
  }
  function Qe(e, t) {
    const n = e["sheet"],
      r = n.cssRules.length;
    t.split("}").forEach((e, t) => {
      (e = e.trim()) && n.insertRule(e + "}", r + t);
    });
  }
  let qe;
  function Ye(e) {
    e.parentNode && e.parentNode.removeChild(e);
  }
  function l(e, t) {
    if (e.closest) return e.closest(t);
    if (document.documentElement.contains(e))
      do {
        if (Ze(e, t)) return e;
      } while (
        null !== (e = e.parentElement || e.parentNode) &&
        1 === e.nodeType
      );
    return null;
  }
  function Ze(e, t) {
    return (e.matches || e.matchesSelector || e.msMatchesSelector).call(e, t);
  }
  function Xe(e, t) {
    var n = e instanceof HTMLElement ? [e] : e,
      r = [];
    for (let e = 0; e < n.length; e += 1) {
      var i = n[e].querySelectorAll(t);
      for (let e = 0; e < i.length; e += 1) r.push(i[e]);
    }
    return r;
  }
  "undefined" != typeof document && Ge(document),
    Ve(
      ':root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}'
    );
  const Je = /(top|left|right|bottom|width|height)$/i;
  function $e(e, t) {
    for (var n in t) Ke(e, n, t[n]);
  }
  function Ke(e, t, n) {
    null == n
      ? (e.style[t] = "")
      : "number" == typeof n && Je.test(t)
      ? (e.style[t] = n + "px")
      : (e.style[t] = n);
  }
  function et(e) {
    var t;
    return null != (t = null == (t = e.composedPath) ? void 0 : t.call(e)[0])
      ? t
      : e.target;
  }
  let tt = 0;
  function t() {
    return "fc-dom-" + (tt += 1);
  }
  function nt(e) {
    e.preventDefault();
  }
  function rt(e, t, n, r) {
    (s = n), (o = r);
    let i = (e) => {
      var t = l(e.target, s);
      t && o.call(t, e, t);
    };
    var s, o;
    return (
      e.addEventListener(t, i),
      () => {
        e.removeEventListener(t, i);
      }
    );
  }
  const it = [
    "webkitTransitionEnd",
    "otransitionend",
    "oTransitionEnd",
    "msTransitionEnd",
    "transitionend",
  ];
  function st(t, n) {
    let r = (e) => {
      n(e),
        it.forEach((e) => {
          t.removeEventListener(e, r);
        });
    };
    it.forEach((e) => {
      t.addEventListener(e, r);
    });
  }
  function ot(e) {
    return Object.assign({ onClick: e }, at(e));
  }
  function at(t) {
    return {
      tabIndex: 0,
      onKeyDown(e) {
        ("Enter" !== e.key && " " !== e.key) || (t(e), e.preventDefault());
      },
    };
  }
  let lt = 0;
  function c() {
    return (lt += 1), String(lt);
  }
  function ct() {
    document.body.classList.add("fc-not-allowed");
  }
  function dt() {
    document.body.classList.remove("fc-not-allowed");
  }
  function ut(e) {
    (e.style.userSelect = "none"), e.addEventListener("selectstart", nt);
  }
  function ht(e) {
    (e.style.userSelect = ""), e.removeEventListener("selectstart", nt);
  }
  function ft(e) {
    e.addEventListener("contextmenu", nt);
  }
  function gt(e) {
    e.removeEventListener("contextmenu", nt);
  }
  function pt(e) {
    let t,
      n,
      r = [],
      i = [];
    for (
      "string" == typeof e
        ? (i = e.split(/\s*,\s*/))
        : "function" == typeof e
        ? (i = [e])
        : Array.isArray(e) && (i = e),
        t = 0;
      t < i.length;
      t += 1
    )
      "string" == typeof (n = i[t])
        ? r.push(
            "-" === n.charAt(0)
              ? { field: n.substring(1), order: -1 }
              : { field: n, order: 1 }
          )
        : "function" == typeof n && r.push({ func: n });
    return r;
  }
  function vt(e, t, n) {
    let r, i;
    for (r = 0; r < n.length; r += 1)
      if (
        ((s = e),
        (o = t),
        (i = (a = n[r]).func
          ? a.func(s, o)
          : mt(s[a.field], o[a.field]) * (a.order || 1)))
      )
        return i;
    var s, o, a;
    return 0;
  }
  function mt(e, t) {
    return e || t
      ? null == t
        ? -1
        : null == e
        ? 1
        : "string" == typeof e || "string" == typeof t
        ? String(e).localeCompare(String(t))
        : e - t
      : 0;
  }
  function yt(e, t) {
    e = String(e);
    return "000".substr(0, t - e.length) + e;
  }
  function bt(e, t, n) {
    return "function" == typeof e
      ? e(...t)
      : "string" == typeof e
      ? t.reduce((e, t, n) => e.replace("$" + n, t || ""), e)
      : n;
  }
  function Et(e, t) {
    return e - t;
  }
  function St(e) {
    return e % 1 == 0;
  }
  const At = ["years", "months", "days", "milliseconds"],
    Dt = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
  function p(e, t) {
    return "string" == typeof e
      ? ((n = e),
        (n = Dt.exec(n))
          ? {
              years: 0,
              months: 0,
              days: (r = n[1] ? -1 : 1) * (n[2] ? parseInt(n[2], 10) : 0),
              milliseconds:
                r *
                (60 * (n[3] ? parseInt(n[3], 10) : 0) * 60 * 1e3 +
                  60 * (n[4] ? parseInt(n[4], 10) : 0) * 1e3 +
                  1e3 * (n[5] ? parseInt(n[5], 10) : 0) +
                  (n[6] ? parseInt(n[6], 10) : 0)),
            }
          : null)
      : "object" == typeof e && e
      ? wt(e)
      : "number" == typeof e
      ? wt({ [t || "milliseconds"]: e })
      : null;
    var n, r;
  }
  function wt(e) {
    var t = {
        years: e.years || e.year || 0,
        months: e.months || e.month || 0,
        days: e.days || e.day || 0,
        milliseconds:
          60 * (e.hours || e.hour || 0) * 60 * 1e3 +
          60 * (e.minutes || e.minute || 0) * 1e3 +
          1e3 * (e.seconds || e.second || 0) +
          (e.milliseconds || e.millisecond || e.ms || 0),
      },
      e = e.weeks || e.week;
    return e && ((t.days += 7 * e), (t.specifiedWeeks = !0)), t;
  }
  function Ct(e, t) {
    return {
      years: e.years + t.years,
      months: e.months + t.months,
      days: e.days + t.days,
      milliseconds: e.milliseconds + t.milliseconds,
    };
  }
  function Rt(e, t) {
    return {
      years: e.years * t,
      months: e.months * t,
      days: e.days * t,
      milliseconds: e.milliseconds * t,
    };
  }
  function xt(e) {
    return h(e) / 864e5;
  }
  function h(e) {
    return (
      31536e6 * e.years + 2592e6 * e.months + 864e5 * e.days + e.milliseconds
    );
  }
  function Tt(t, n) {
    let r = null;
    for (let e = 0; e < At.length; e += 1) {
      var i = At[e];
      if (n[i]) {
        var s = t[i] / n[i];
        if (!St(s) || (null !== r && r !== s)) return null;
        r = s;
      } else if (t[i]) return null;
    }
    return r;
  }
  function _t(e) {
    var t = e.milliseconds;
    if (t) {
      if (t % 1e3 != 0) return { unit: "millisecond", value: t };
      if (t % 6e4 != 0) return { unit: "second", value: t / 1e3 };
      if (t % 36e5 != 0) return { unit: "minute", value: t / 6e4 };
      if (t) return { unit: "hour", value: t / 36e5 };
    }
    return e.days
      ? e.specifiedWeeks && e.days % 7 == 0
        ? { unit: "week", value: e.days / 7 }
        : { unit: "day", value: e.days }
      : e.months
      ? { unit: "month", value: e.months }
      : e.years
      ? { unit: "year", value: e.years }
      : { unit: "millisecond", value: 0 };
  }
  const kt = Object.prototype["hasOwnProperty"];
  function Mt(t, e) {
    var n = {};
    if (e)
      for (var r in e)
        if (e[r] === En) {
          var i = [];
          for (let e = t.length - 1; 0 <= e; --e) {
            var s = t[e][r];
            if ("object" == typeof s && s) i.unshift(s);
            else if (void 0 !== s) {
              n[r] = s;
              break;
            }
          }
          i.length && (n[r] = Mt(i));
        }
    for (let e = t.length - 1; 0 <= e; --e) {
      var o,
        a = t[e];
      for (o in a) o in n || (n[o] = a[o]);
    }
    return n;
  }
  function _(e, t) {
    var n,
      r = {};
    for (n in e) t(e[n], n) && (r[n] = e[n]);
    return r;
  }
  function k(e, t) {
    var n,
      r = {};
    for (n in e) r[n] = t(e[n], n);
    return r;
  }
  function It(e) {
    var t,
      n = {};
    for (t of e) n[t] = !0;
    return n;
  }
  function Ot(e) {
    var t,
      n = [];
    for (t in e) n.push(e[t]);
    return n;
  }
  function v(e, t) {
    if (e !== t) {
      for (var n in e) if (kt.call(e, n) && !(n in t)) return !1;
      for (var r in t) if (kt.call(t, r) && e[r] !== t[r]) return !1;
    }
    return !0;
  }
  const Nt = /^on[A-Z]/;
  function Pt(e, t) {
    var n,
      r,
      i = [];
    for (n in e) !kt.call(e, n) || n in t || i.push(n);
    for (r in t) kt.call(t, r) && e[r] !== t[r] && i.push(r);
    return i;
  }
  function Ht(e, t, n = {}) {
    if (e !== t) {
      for (var r in t)
        if (
          !(
            r in e &&
            ((i = e[r]),
            (s = t[r]),
            (r = n[r]),
            i === s || !0 === r || (r && r(i, s)))
          )
        )
          return !1;
      var i, s, o;
      for (o in e) if (!(o in t)) return !1;
    }
    return !0;
  }
  function Bt(t, n = 0, r, i = 1) {
    var s = [];
    null == r && (r = Object.keys(t).length);
    for (let e = n; e < r; e += i) {
      var o = t[e];
      void 0 !== o && s.push(o);
    }
    return s;
  }
  function d(n, r, i) {
    if (n !== r) {
      let e,
        t = n.length;
      if (t !== r.length) return !1;
      for (e = 0; e < t; e += 1)
        if (!(i ? i(n[e], r[e]) : n[e] === r[e])) return !1;
    }
    return !0;
  }
  const jt = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  function zt(e, t) {
    e = qt(e);
    return (e[2] += 7 * t), i(e);
  }
  function u(e, t) {
    e = qt(e);
    return (e[2] += t), i(e);
  }
  function m(e, t) {
    e = qt(e);
    return (e[6] += t), i(e);
  }
  function Ut(e, t) {
    return o(e, t) / 7;
  }
  function o(e, t) {
    return (t.valueOf() - e.valueOf()) / 864e5;
  }
  function Wt(e, t) {
    var n = y(e),
      r = y(t);
    return {
      years: 0,
      months: 0,
      days: Math.round(o(n, r)),
      milliseconds: t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf()),
    };
  }
  function Lt(e, t) {
    e = Ft(e, t);
    return null !== e && e % 7 == 0 ? e / 7 : null;
  }
  function Ft(e, t) {
    return Zt(e) === Zt(t) ? Math.round(o(e, t)) : null;
  }
  function y(e) {
    return i([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]);
  }
  function Vt(e, t, n, r) {
    (t = i([
      t,
      0,
      1 +
        (function (e, t, n) {
          n = 7 + t - n;
          return (-(7 + i([e, 0, n]).getUTCDay() - t) % 7) + n - 1;
        })(t, n, r),
    ])),
      (n = y(e)),
      (r = Math.round(o(t, n)));
    return Math.floor(r / 7) + 1;
  }
  function Gt(e) {
    return [
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds(),
    ];
  }
  function Qt(e) {
    return new Date(
      e[0],
      e[1] || 0,
      null == e[2] ? 1 : e[2],
      e[3] || 0,
      e[4] || 0,
      e[5] || 0
    );
  }
  function qt(e) {
    return [
      e.getUTCFullYear(),
      e.getUTCMonth(),
      e.getUTCDate(),
      e.getUTCHours(),
      e.getUTCMinutes(),
      e.getUTCSeconds(),
      e.getUTCMilliseconds(),
    ];
  }
  function i(e) {
    return 1 === e.length && (e = e.concat([0])), new Date(Date.UTC(...e));
  }
  function Yt(e) {
    return !isNaN(e.valueOf());
  }
  function Zt(e) {
    return (
      1e3 * e.getUTCHours() * 60 * 60 +
      1e3 * e.getUTCMinutes() * 60 +
      1e3 * e.getUTCSeconds() +
      e.getUTCMilliseconds()
    );
  }
  function Xt(e, t, n = !1) {
    let r = e.toISOString();
    return (
      (r = r.replace(".000", "")),
      10 < (r = n ? r.replace("T00:00:00Z", "") : r).length &&
        (null == t
          ? (r = r.replace("Z", ""))
          : 0 !== t && (r = r.replace("Z", en(t, !0)))),
      r
    );
  }
  function Jt(e) {
    return e.toISOString().replace(/T.*$/, "");
  }
  function $t(e) {
    return e.toISOString().match(/^\d{4}-\d{2}/)[0];
  }
  function Kt(e) {
    return (
      yt(e.getUTCHours(), 2) +
      ":" +
      yt(e.getUTCMinutes(), 2) +
      ":" +
      yt(e.getUTCSeconds(), 2)
    );
  }
  function en(e, t = !1) {
    var n = e < 0 ? "-" : "+",
      e = Math.abs(e),
      r = Math.floor(e / 60),
      e = Math.round(e % 60);
    return t
      ? n + yt(r, 2) + ":" + yt(e, 2)
      : "GMT" + n + r + (e ? ":" + yt(e, 2) : "");
  }
  function b(n, r, i) {
    let s, o;
    return function (...e) {
      var t;
      return (
        s
          ? d(s, e) ||
            (i && i(o), (t = n.apply(this, e)), r && r(t, o)) ||
            (o = t)
          : (o = n.apply(this, e)),
        (s = e),
        o
      );
    };
  }
  function tn(n, r, i) {
    let s, o;
    return (e) => {
      var t;
      return (
        s
          ? v(s, e) ||
            (i && i(o), (t = n.call(this, e)), r && r(t, o)) ||
            (o = t)
          : (o = n.call(this, e)),
        (s = e),
        o
      );
    };
  }
  const nn = {
      week: 3,
      separator: 0,
      omitZeroMinute: 0,
      meridiem: 0,
      omitCommas: 0,
    },
    rn = {
      timeZoneName: 7,
      era: 6,
      year: 5,
      month: 4,
      day: 2,
      weekday: 2,
      hour: 1,
      minute: 1,
      second: 1,
    },
    sn = /\s*([ap])\.?m\.?/i,
    on = /,/g,
    an = /\s+/g,
    ln = /\u200e/g,
    cn = /UTC|GMT/;
  class dn {
    constructor(e) {
      let t = {},
        n = {},
        r = 0;
      for (var i in e)
        i in nn
          ? ((n[i] = e[i]), (r = Math.max(nn[i], r)))
          : ((t[i] = e[i]), i in rn && (r = Math.max(rn[i], r)));
      (this.standardDateProps = t),
        (this.extendedSettings = n),
        (this.severity = r),
        (this.buildFormattingFunc = b(un));
    }
    format(e, t) {
      return this.buildFormattingFunc(
        this.standardDateProps,
        this.extendedSettings,
        t
      )(e);
    }
    formatRange(e, t, n, r) {
      var { standardDateProps: i, extendedSettings: s } = this,
        o =
          ((l = e.marker),
          (c = t.marker),
          (o = n.calendarSystem).getMarkerYear(l) !== o.getMarkerYear(c)
            ? 5
            : o.getMarkerMonth(l) !== o.getMarkerMonth(c)
            ? 4
            : o.getMarkerDay(l) !== o.getMarkerDay(c)
            ? 2
            : Zt(l) !== Zt(c)
            ? 1
            : 0);
      if (!o) return this.format(e, n);
      let a = o;
      !(1 < a) ||
        ("numeric" !== i.year && "2-digit" !== i.year) ||
        ("numeric" !== i.month && "2-digit" !== i.month) ||
        ("numeric" !== i.day && "2-digit" !== i.day) ||
        (a = 1);
      var l = this.format(e, n),
        c = this.format(t, n);
      return l === c
        ? l
        : ((o = (function (n, r, i, s) {
            let o = 0;
            for (; o < n.length; ) {
              var a = n.indexOf(r, o);
              if (-1 === a) break;
              var l = n.substr(0, a);
              o = a + r.length;
              let e = n.substr(o),
                t = 0;
              for (; t < i.length; ) {
                var c = i.indexOf(s, t);
                if (-1 === c) break;
                var d = i.substr(0, c),
                  c = ((t = c + s.length), i.substr(t));
                if (l === d && e === c) return { before: l, after: e };
              }
            }
            return null;
          })(
            l,
            (i = (o = un(
              (function (e, t) {
                var n,
                  r = {};
                for (n in e) (n in rn && !(rn[n] <= t)) || (r[n] = e[n]);
                return r;
              })(i, a),
              s,
              n
            ))(e)),
            c,
            (e = o(t))
          )),
          (t = s.separator || r || n.defaultSeparator || ""),
          o ? o.before + i + t + e + o.after : l + t + c);
    }
    getLargestUnit() {
      switch (this.severity) {
        case 7:
        case 6:
        case 5:
          return "year";
        case 4:
          return "month";
        case 3:
          return "week";
        case 2:
          return "day";
        default:
          return "time";
      }
    }
  }
  function un(e, a, l) {
    var t = Object.keys(e).length;
    {
      if (1 === t && "short" === e.timeZoneName)
        return (e) => en(e.timeZoneOffset);
      if (0 === t && a.week)
        return (e) => {
          return (
            (e = l.computeWeekNumber(e.marker)),
            (t = l.weekText),
            (n = l.weekTextLong),
            (r = l.locale),
            (i = a.week),
            (s = []),
            "long" === i
              ? s.push(n)
              : ("short" !== i && "narrow" !== i) || s.push(t),
            ("long" !== i && "short" !== i) || s.push(" "),
            s.push(r.simpleNumberFormat.format(e)),
            "rtl" === r.options.direction && s.reverse(),
            s.join("")
          );
          var t, n, r, i, s;
        };
      {
        var c = e,
          d = a,
          u = l;
        (c = Object.assign({}, c)),
          (d = Object.assign({}, d)),
          (t = d),
          (e = c).timeZoneName &&
            (e.hour || (e.hour = "2-digit"),
            e.minute || (e.minute = "2-digit")),
          "long" === e.timeZoneName && (e.timeZoneName = "short"),
          t.omitZeroMinute &&
            (e.second || e.millisecond) &&
            delete t.omitZeroMinute,
          (c.timeZone = "UTC");
        let s,
          o = new Intl.DateTimeFormat(u.locale.codes, c);
        return (
          d.omitZeroMinute &&
            (delete (e = Object.assign({}, c)).minute,
            (s = new Intl.DateTimeFormat(u.locale.codes, e))),
          (e) => {
            var t,
              n,
              r = e["marker"],
              i = s && !r.getUTCMinutes() ? s : o;
            return (
              (i = i.format(r)),
              (r = e),
              (e = c),
              (t = d),
              (n = u),
              (i = i.replace(ln, "")),
              "short" === e.timeZoneName &&
                (i = (function (e, t) {
                  let n = !1;
                  return (
                    (e = e.replace(cn, () => ((n = !0), t))),
                    n || (e += " " + t),
                    e
                  );
                })(
                  i,
                  "UTC" === n.timeZone || null == r.timeZoneOffset
                    ? "UTC"
                    : en(r.timeZoneOffset)
                )),
              t.omitCommas && (i = i.replace(on, "").trim()),
              t.omitZeroMinute && (i = i.replace(":00", "")),
              !1 === t.meridiem
                ? (i = i.replace(sn, "").trim())
                : "narrow" === t.meridiem
                ? (i = i.replace(sn, (e, t) => t.toLocaleLowerCase()))
                : "short" === t.meridiem
                ? (i = i.replace(sn, (e, t) => t.toLocaleLowerCase() + "m"))
                : "lowercase" === t.meridiem &&
                  (i = i.replace(sn, (e) => e.toLocaleLowerCase())),
              (i = i.replace(an, " ")).trim()
            );
          }
        );
      }
    }
  }
  function hn(e, t) {
    t = t.markerToArray(e.marker);
    return {
      marker: e.marker,
      timeZoneOffset: e.timeZoneOffset,
      array: t,
      year: t[0],
      month: t[1],
      day: t[2],
      hour: t[3],
      minute: t[4],
      second: t[5],
      millisecond: t[6],
    };
  }
  function fn(e, t, n, r) {
    e = hn(e, n.calendarSystem);
    return {
      date: e,
      start: e,
      end: t ? hn(t, n.calendarSystem) : null,
      timeZone: n.timeZone,
      localeCodes: n.locale.codes,
      defaultSeparator: r || n.defaultSeparator,
    };
  }
  class gn {
    constructor(e) {
      this.cmdStr = e;
    }
    format(e, t, n) {
      return t.cmdFormatter(this.cmdStr, fn(e, null, t, n));
    }
    formatRange(e, t, n, r) {
      return n.cmdFormatter(this.cmdStr, fn(e, t, n, r));
    }
  }
  class pn {
    constructor(e) {
      this.func = e;
    }
    format(e, t, n) {
      return this.func(fn(e, null, t, n));
    }
    formatRange(e, t, n, r) {
      return this.func(fn(e, t, n, r));
    }
  }
  function a(e) {
    return "object" == typeof e && e
      ? new dn(e)
      : "string" == typeof e
      ? new gn(e)
      : "function" == typeof e
      ? new pn(e)
      : null;
  }
  const vn = {
      navLinkDayClick: n,
      navLinkWeekClick: n,
      duration: p,
      bootstrapFontAwesome: n,
      buttonIcons: n,
      customButtons: n,
      defaultAllDayEventDuration: p,
      defaultTimedEventDuration: p,
      nextDayThreshold: p,
      scrollTime: p,
      scrollTimeReset: Boolean,
      slotMinTime: p,
      slotMaxTime: p,
      dayPopoverFormat: a,
      slotDuration: p,
      snapDuration: p,
      headerToolbar: n,
      footerToolbar: n,
      defaultRangeSeparator: String,
      titleRangeSeparator: String,
      forceEventDuration: Boolean,
      dayHeaders: Boolean,
      dayHeaderFormat: a,
      dayHeaderClassNames: n,
      dayHeaderContent: n,
      dayHeaderDidMount: n,
      dayHeaderWillUnmount: n,
      dayCellClassNames: n,
      dayCellContent: n,
      dayCellDidMount: n,
      dayCellWillUnmount: n,
      initialView: String,
      aspectRatio: Number,
      weekends: Boolean,
      weekNumberCalculation: n,
      weekNumbers: Boolean,
      weekNumberClassNames: n,
      weekNumberContent: n,
      weekNumberDidMount: n,
      weekNumberWillUnmount: n,
      editable: Boolean,
      viewClassNames: n,
      viewDidMount: n,
      viewWillUnmount: n,
      nowIndicator: Boolean,
      nowIndicatorClassNames: n,
      nowIndicatorContent: n,
      nowIndicatorDidMount: n,
      nowIndicatorWillUnmount: n,
      showNonCurrentDates: Boolean,
      lazyFetching: Boolean,
      startParam: String,
      endParam: String,
      timeZoneParam: String,
      timeZone: String,
      locales: n,
      locale: n,
      themeSystem: String,
      dragRevertDuration: Number,
      dragScroll: Boolean,
      allDayMaintainDuration: Boolean,
      unselectAuto: Boolean,
      dropAccept: n,
      eventOrder: pt,
      eventOrderStrict: Boolean,
      handleWindowResize: Boolean,
      windowResizeDelay: Number,
      longPressDelay: Number,
      eventDragMinDistance: Number,
      expandRows: Boolean,
      height: n,
      contentHeight: n,
      direction: String,
      weekNumberFormat: a,
      eventResizableFromStart: Boolean,
      displayEventTime: Boolean,
      displayEventEnd: Boolean,
      weekText: String,
      weekTextLong: String,
      progressiveEventRendering: Boolean,
      businessHours: n,
      initialDate: n,
      now: n,
      eventDataTransform: n,
      stickyHeaderDates: n,
      stickyFooterScrollbar: n,
      viewHeight: n,
      defaultAllDay: Boolean,
      eventSourceFailure: n,
      eventSourceSuccess: n,
      eventDisplay: String,
      eventStartEditable: Boolean,
      eventDurationEditable: Boolean,
      eventOverlap: n,
      eventConstraint: n,
      eventAllow: n,
      eventBackgroundColor: String,
      eventBorderColor: String,
      eventTextColor: String,
      eventColor: String,
      eventClassNames: n,
      eventContent: n,
      eventDidMount: n,
      eventWillUnmount: n,
      selectConstraint: n,
      selectOverlap: n,
      selectAllow: n,
      droppable: Boolean,
      unselectCancel: String,
      slotLabelFormat: n,
      slotLaneClassNames: n,
      slotLaneContent: n,
      slotLaneDidMount: n,
      slotLaneWillUnmount: n,
      slotLabelClassNames: n,
      slotLabelContent: n,
      slotLabelDidMount: n,
      slotLabelWillUnmount: n,
      dayMaxEvents: n,
      dayMaxEventRows: n,
      dayMinWidth: Number,
      slotLabelInterval: p,
      allDayText: String,
      allDayClassNames: n,
      allDayContent: n,
      allDayDidMount: n,
      allDayWillUnmount: n,
      slotMinWidth: Number,
      navLinks: Boolean,
      eventTimeFormat: a,
      rerenderDelay: Number,
      moreLinkText: n,
      moreLinkHint: n,
      selectMinDistance: Number,
      selectable: Boolean,
      selectLongPressDelay: Number,
      eventLongPressDelay: Number,
      selectMirror: Boolean,
      eventMaxStack: Number,
      eventMinHeight: Number,
      eventMinWidth: Number,
      eventShortHeight: Number,
      slotEventOverlap: Boolean,
      plugins: n,
      firstDay: Number,
      dayCount: Number,
      dateAlignment: String,
      dateIncrement: p,
      hiddenDays: n,
      fixedWeekCount: Boolean,
      validRange: n,
      visibleRange: n,
      titleFormat: n,
      eventInteractive: Boolean,
      noEventsText: String,
      viewHint: n,
      navLinkHint: n,
      closeHint: String,
      timeHint: String,
      eventHint: String,
      moreLinkClick: n,
      moreLinkClassNames: n,
      moreLinkContent: n,
      moreLinkDidMount: n,
      moreLinkWillUnmount: n,
      monthStartFormat: a,
      handleCustomRendering: n,
      customRenderingMetaMap: n,
      customRenderingReplacesEl: Boolean,
    },
    S = {
      eventDisplay: "auto",
      defaultRangeSeparator: " - ",
      titleRangeSeparator: " – ",
      defaultTimedEventDuration: "01:00:00",
      defaultAllDayEventDuration: { day: 1 },
      forceEventDuration: !1,
      nextDayThreshold: "00:00:00",
      dayHeaders: !0,
      initialView: "",
      aspectRatio: 1.35,
      headerToolbar: { start: "title", center: "", end: "today prev,next" },
      weekends: !0,
      weekNumbers: !1,
      weekNumberCalculation: "local",
      editable: !1,
      nowIndicator: !1,
      scrollTime: "06:00:00",
      scrollTimeReset: !0,
      slotMinTime: "00:00:00",
      slotMaxTime: "24:00:00",
      showNonCurrentDates: !0,
      lazyFetching: !0,
      startParam: "start",
      endParam: "end",
      timeZoneParam: "timeZone",
      timeZone: "local",
      locales: [],
      locale: "",
      themeSystem: "standard",
      dragRevertDuration: 500,
      dragScroll: !0,
      allDayMaintainDuration: !1,
      unselectAuto: !0,
      dropAccept: "*",
      eventOrder: "start,-duration,allDay,title",
      dayPopoverFormat: { month: "long", day: "numeric", year: "numeric" },
      handleWindowResize: !0,
      windowResizeDelay: 100,
      longPressDelay: 1e3,
      eventDragMinDistance: 5,
      expandRows: !1,
      navLinks: !1,
      selectable: !1,
      eventMinHeight: 15,
      eventMinWidth: 30,
      eventShortHeight: 30,
      monthStartFormat: { month: "long", day: "numeric" },
    },
    mn = {
      datesSet: n,
      eventsSet: n,
      eventAdd: n,
      eventChange: n,
      eventRemove: n,
      windowResize: n,
      eventClick: n,
      eventMouseEnter: n,
      eventMouseLeave: n,
      select: n,
      unselect: n,
      loading: n,
      _unmount: n,
      _beforeprint: n,
      _afterprint: n,
      _noEventDrop: n,
      _noEventResize: n,
      _resize: n,
      _scrollRequest: n,
    },
    yn = {
      buttonText: n,
      buttonHints: n,
      views: n,
      plugins: n,
      initialEvents: n,
      events: n,
      eventSources: n,
    },
    bn = {
      headerToolbar: En,
      footerToolbar: En,
      buttonText: En,
      buttonHints: En,
      buttonIcons: En,
      dateIncrement: En,
      plugins: Sn,
      events: Sn,
      eventSources: Sn,
      resources: Sn,
    };
  function En(e, t) {
    return "object" == typeof e && "object" == typeof t && e && t
      ? v(e, t)
      : e === t;
  }
  function Sn(e, t) {
    return Array.isArray(e) && Array.isArray(t) ? d(e, t) : e === t;
  }
  const An = {
    type: String,
    component: n,
    buttonText: String,
    buttonTextKey: String,
    dateProfileGeneratorClass: n,
    usesMinMaxTime: Boolean,
    classNames: n,
    content: n,
    didMount: n,
    willUnmount: n,
  };
  function Dn(e) {
    return Mt(e, bn);
  }
  function wn(e, t) {
    var n,
      r,
      i = {},
      s = {};
    for (n in t) n in e && (i[n] = t[n](e[n]));
    for (r in e) r in t || (s[r] = e[r]);
    return { refined: i, extra: s };
  }
  function n(e) {
    return e;
  }
  function Cn(e, t, n, r) {
    return {
      instanceId: c(),
      defId: e,
      range: t,
      forcedStartTzo: null == n ? null : n,
      forcedEndTzo: null == r ? null : r,
    };
  }
  function Rn(e, t, n) {
    let { dateEnv: r, pluginHooks: i, options: s } = n,
      { defs: o, instances: a } = e;
    for (var l in ((a = _(a, (e) => !o[e.defId].recurringDef)), o)) {
      var c,
        d = o[l];
      if (d.recurringDef) {
        let e = d.recurringDef["duration"];
        for (c of (function (e, t, n, r, i) {
          let s = i[e.recurringDef.typeId].expand(
            e.recurringDef.typeData,
            { start: r.subtract(n.start, t), end: n.end },
            r
          );
          return (s = e.allDay ? s.map(y) : s);
        })(
          d,
          (e =
            e ||
            (d.allDay
              ? s.defaultAllDayEventDuration
              : s.defaultTimedEventDuration)),
          t,
          r,
          i.recurringTypes
        )) {
          var u = Cn(l, { start: c, end: r.add(c, e) });
          a[u.instanceId] = u;
        }
      }
    }
    return { defs: o, instances: a };
  }
  function xn(e, t, n, r, i, s) {
    var o,
      a = { defs: {}, instances: {} },
      l = Fn(n);
    for (o of e) {
      var c = Wn(o, t, n, r, l, i, s);
      c && Tn(c, a);
    }
    return a;
  }
  function Tn(e, t = { defs: {}, instances: {} }) {
    return (
      (t.defs[e.def.defId] = e.def),
      e.instance && (t.instances[e.instance.instanceId] = e.instance),
      t
    );
  }
  function _n(t, r) {
    r = t.instances[r];
    if (r) {
      let n = t.defs[r.defId],
        e = Mn(t, (e) => {
          return (t = n), Boolean(t.groupId && t.groupId === e.groupId);
          var t;
        });
      return (e.defs[n.defId] = n), (e.instances[r.instanceId] = r), e;
    }
    return { defs: {}, instances: {} };
  }
  function kn(e, t) {
    return {
      defs: Object.assign(Object.assign({}, e.defs), t.defs),
      instances: Object.assign(Object.assign({}, e.instances), t.instances),
    };
  }
  function Mn(e, t) {
    let n = _(e.defs, t),
      r = _(e.instances, (e) => n[e.defId]);
    return { defs: n, instances: r };
  }
  function In(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.split(/\s+/) : [];
  }
  const On = {
      display: String,
      editable: Boolean,
      startEditable: Boolean,
      durationEditable: Boolean,
      constraint: n,
      overlap: n,
      allow: n,
      className: In,
      classNames: In,
      color: String,
      backgroundColor: String,
      borderColor: String,
      textColor: String,
    },
    Nn = {
      display: null,
      startEditable: null,
      durationEditable: null,
      constraints: [],
      overlap: null,
      allows: [],
      backgroundColor: "",
      borderColor: "",
      textColor: "",
      classNames: [],
    };
  function Pn(e, t) {
    (n = e.constraint), (t = t);
    var n,
      t = Array.isArray(n)
        ? xn(n, null, t, !0)
        : "object" == typeof n && n
        ? xn([n], null, t, !0)
        : null != n
        ? String(n)
        : null;
    return {
      display: e.display || null,
      startEditable: null != e.startEditable ? e.startEditable : e.editable,
      durationEditable:
        null != e.durationEditable ? e.durationEditable : e.editable,
      constraints: null != t ? [t] : [],
      overlap: null != e.overlap ? e.overlap : null,
      allows: null != e.allow ? [e.allow] : [],
      backgroundColor: e.backgroundColor || e.color || "",
      borderColor: e.borderColor || e.color || "",
      textColor: e.textColor || "",
      classNames: (e.className || []).concat(e.classNames || []),
    };
  }
  function Hn(e) {
    return e.reduce(Bn, Nn);
  }
  function Bn(e, t) {
    return {
      display: (null != t.display ? t : e).display,
      startEditable: (null != t.startEditable ? t : e).startEditable,
      durationEditable: (null != t.durationEditable ? t : e).durationEditable,
      constraints: e.constraints.concat(t.constraints),
      overlap: ("boolean" == typeof t.overlap ? t : e).overlap,
      allows: e.allows.concat(t.allows),
      backgroundColor: t.backgroundColor || e.backgroundColor,
      borderColor: t.borderColor || e.borderColor,
      textColor: t.textColor || e.textColor,
      classNames: e.classNames.concat(t.classNames),
    };
  }
  const jn = {
      id: String,
      groupId: String,
      title: String,
      url: String,
      interactive: Boolean,
    },
    zn = { start: n, end: n, date: n, allDay: Boolean },
    Un = Object.assign(Object.assign(Object.assign({}, jn), zn), {
      extendedProps: n,
    });
  function Wn(e, t, n, r, i = Fn(n), s, o) {
    var a,
      { refined: e, extra: i } = Ln(e, n, i),
      l = (function () {
        let e = null;
        return (e =
          null == (e = t ? t.defaultAllDay : e) ? n.options.defaultAllDay : e);
      })(),
      c = (function (n, r, e, i) {
        for (let t = 0; t < i.length; t += 1) {
          var s = i[t].parse(n, e);
          if (s) {
            let e = n["allDay"];
            return {
              allDay: (e =
                null == e && null == (e = r) && null == (e = s.allDayGuess)
                  ? !1
                  : e),
              duration: s.duration,
              typeData: s.typeData,
              typeId: t,
            };
          }
        }
        return null;
      })(e, l, n.dateEnv, n.pluginHooks.recurringTypes);
    return c
      ? (((a = Vn(
          e,
          i,
          t ? t.sourceId : "",
          c.allDay,
          Boolean(c.duration),
          n,
          s
        )).recurringDef = {
          typeId: c.typeId,
          typeData: c.typeData,
          duration: c.duration,
        }),
        { def: a, instance: null })
      : (c = (function (e, t, n, r) {
          let i,
            s,
            o = e["allDay"],
            a = null,
            l = !1,
            c = null,
            d = null != e.start ? e.start : e.date;
          if ((i = n.dateEnv.createMarkerMeta(d))) a = i.marker;
          else if (!r) return null;
          return (
            null != e.end && (s = n.dateEnv.createMarkerMeta(e.end)),
            (o =
              null == o
                ? null != t
                  ? t
                  : (!i || i.isTimeUnspecified) && (!s || s.isTimeUnspecified)
                : o) && (a = a && y(a)),
            (c = s && ((c = s.marker), o && (c = y(c)), a) && c <= a ? null : c)
              ? (l = !0)
              : r ||
                ((l = n.options.forceEventDuration || !1),
                (c = n.dateEnv.add(
                  a,
                  o
                    ? n.options.defaultAllDayEventDuration
                    : n.options.defaultTimedEventDuration
                ))),
            {
              allDay: o,
              hasEnd: l,
              range: { start: a, end: c },
              forcedStartTzo: i ? i.forcedTzo : null,
              forcedEndTzo: s ? s.forcedTzo : null,
            }
          );
        })(e, l, n, r))
      ? ((l = Cn(
          (a = Vn(e, i, t ? t.sourceId : "", c.allDay, c.hasEnd, n, s)).defId,
          c.range,
          c.forcedStartTzo,
          c.forcedEndTzo
        )),
        o && a.publicId && o[a.publicId] && (l.instanceId = o[a.publicId]),
        { def: a, instance: l })
      : null;
  }
  function Ln(e, t, n = Fn(t)) {
    return wn(e, n);
  }
  function Fn(e) {
    return Object.assign(
      Object.assign(Object.assign({}, On), Un),
      e.pluginHooks.eventRefiners
    );
  }
  function Vn(e, t, n, r, i, s, o) {
    var a,
      l = {
        title: e.title || "",
        groupId: e.groupId || "",
        publicId: e.id || "",
        url: e.url || "",
        recurringDef: null,
        defId: (o && e.id ? o[e.id] : "") || c(),
        sourceId: n,
        allDay: r,
        hasEnd: i,
        interactive: e.interactive,
        ui: Pn(e, s),
        extendedProps: Object.assign(
          Object.assign({}, e.extendedProps || {}),
          t
        ),
      };
    for (a of s.pluginHooks.eventDefMemberAdders) Object.assign(l, a(e));
    return Object.freeze(l.ui.classNames), Object.freeze(l.extendedProps), l;
  }
  const Gn = {
    startTime: "09:00",
    endTime: "17:00",
    daysOfWeek: [1, 2, 3, 4, 5],
    display: "inverse-background",
    classNames: "fc-non-business",
    groupId: "_businessHours",
  };
  function Qn(e, t) {
    return xn(
      (function (e) {
        let t;
        return (t = (t =
          !0 === e
            ? [{}]
            : Array.isArray(e)
            ? e.filter((e) => e.daysOfWeek)
            : "object" == typeof e && e
            ? [e]
            : []).map((e) => Object.assign(Object.assign({}, Gn), e)));
      })(e),
      null,
      t
    );
  }
  function qn(e) {
    var t = Math.floor(o(e.start, e.end)) || 1,
      e = y(e.start);
    return { start: e, end: u(e, t) };
  }
  function Yn(e, t = p(0)) {
    let n = null,
      r = null;
    var i;
    return (
      e.end &&
        ((r = y(e.end)), (i = e.end.valueOf() - r.valueOf())) &&
        i >= h(t) &&
        (r = u(r, 1)),
      e.start && ((n = y(e.start)), r) && r <= n && (r = u(n, 1)),
      { start: n, end: r }
    );
  }
  function Zn(e) {
    e = Yn(e);
    return 1 < o(e.start, e.end);
  }
  function Xn(e, t, n, r) {
    return "year" === r
      ? p(n.diffWholeYears(e, t), "year")
      : "month" === r
      ? p(n.diffWholeMonths(e, t), "month")
      : Wt(e, t);
  }
  function Jn(e, t) {
    return (
      e.left >= t.left && e.left < t.right && e.top >= t.top && e.top < t.bottom
    );
  }
  function $n(e, t) {
    e = {
      left: Math.max(e.left, t.left),
      right: Math.min(e.right, t.right),
      top: Math.max(e.top, t.top),
      bottom: Math.min(e.bottom, t.bottom),
    };
    return e.left < e.right && e.top < e.bottom && e;
  }
  function Kn(e, t) {
    return {
      left: Math.min(Math.max(e.left, t.left), t.right),
      top: Math.min(Math.max(e.top, t.top), t.bottom),
    };
  }
  function er(e) {
    return { left: (e.left + e.right) / 2, top: (e.top + e.bottom) / 2 };
  }
  function tr(e, t) {
    return { left: e.left - t.left, top: e.top - t.top };
  }
  let nr;
  function rr() {
    return (nr =
      null == nr
        ? "undefined" == typeof document ||
          (((e = document.createElement("div")).style.position = "absolute"),
          (e.style.top = "0px"),
          (e.style.left = "0px"),
          (e.innerHTML = "<table><tr><td><div></div></td></tr></table>"),
          (e.querySelector("table").style.height = "100px"),
          (e.querySelector("div").style.height = "100%"),
          document.body.appendChild(e),
          (t = 0 < e.querySelector("div").offsetHeight),
          document.body.removeChild(e),
          t)
        : nr);
    var e, t;
  }
  const ir = { defs: {}, instances: {} };
  class sr {
    constructor() {
      (this.getKeysForEventDefs = b(this._getKeysForEventDefs)),
        (this.splitDateSelection = b(this._splitDateSpan)),
        (this.splitEventStore = b(this._splitEventStore)),
        (this.splitIndividualUi = b(this._splitIndividualUi)),
        (this.splitEventDrag = b(this._splitInteraction)),
        (this.splitEventResize = b(this._splitInteraction)),
        (this.eventUiBuilders = {});
    }
    splitProps(e) {
      var t,
        n = this.getKeyInfo(e),
        r = this.getKeysForEventDefs(e.eventStore),
        i = this.splitDateSelection(e.dateSelection),
        s = this.splitIndividualUi(e.eventUiBases, r),
        o = this.splitEventStore(e.eventStore, r),
        a = this.splitEventDrag(e.eventDrag),
        l = this.splitEventResize(e.eventResize),
        c = {};
      for (t in ((this.eventUiBuilders = k(
        n,
        (e, t) => this.eventUiBuilders[t] || b(or)
      )),
      n)) {
        var d = n[t],
          u = o[t] || ir,
          h = this.eventUiBuilders[t];
        c[t] = {
          businessHours: d.businessHours || e.businessHours,
          dateSelection: i[t] || null,
          eventStore: u,
          eventUiBases: h(e.eventUiBases[""], d.ui, s[t]),
          eventSelection: u.instances[e.eventSelection] ? e.eventSelection : "",
          eventDrag: a[t] || null,
          eventResize: l[t] || null,
        };
      }
      return c;
    }
    _splitDateSpan(e) {
      var t,
        n = {};
      if (e) for (t of this.getKeysForDateSpan(e)) n[t] = e;
      return n;
    }
    _getKeysForEventDefs(e) {
      return k(e.defs, (e) => this.getKeysForEventDef(e));
    }
    _splitEventStore(e, t) {
      var n,
        r,
        { defs: i, instances: s } = e,
        o = {};
      for (n in i)
        for (var a of t[n])
          o[a] || (o[a] = { defs: {}, instances: {} }), (o[a].defs[n] = i[n]);
      for (r in s) {
        var l,
          c = s[r];
        for (l of t[c.defId]) o[l] && (o[l].instances[r] = c);
      }
      return o;
    }
    _splitIndividualUi(e, t) {
      var n,
        r = {};
      for (n in e)
        if (n) for (var i of t[n]) r[i] || (r[i] = {}), (r[i][n] = e[n]);
      return r;
    }
    _splitInteraction(i) {
      let s = {};
      if (i) {
        let t = this._splitEventStore(
            i.affectedEvents,
            this._getKeysForEventDefs(i.affectedEvents)
          ),
          e = this._getKeysForEventDefs(i.mutatedEvents),
          n = this._splitEventStore(i.mutatedEvents, e),
          r = (e) => {
            s[e] ||
              (s[e] = {
                affectedEvents: t[e] || ir,
                mutatedEvents: n[e] || ir,
                isEvent: i.isEvent,
              });
          };
        for (var o in t) r(o);
        for (var a in n) r(a);
      }
      return s;
    }
  }
  function or(e, t, n) {
    var r = [],
      e = (e && r.push(e), t && r.push(t), { "": Hn(r) });
    return n && Object.assign(e, n), e;
  }
  function ar(e, t) {
    let n,
      r,
      i = [],
      s = t["start"];
    for (e.sort(lr), n = 0; n < e.length; n += 1)
      (r = e[n]).start > s && i.push({ start: s, end: r.start }),
        r.end > s && (s = r.end);
    return s < t.end && i.push({ start: s, end: t.end }), i;
  }
  function lr(e, t) {
    return e.start.valueOf() - t.start.valueOf();
  }
  function w(e, t) {
    let { start: n, end: r } = e,
      i = null;
    return (
      null !== t.start &&
        (n =
          null === n
            ? t.start
            : new Date(Math.max(n.valueOf(), t.start.valueOf()))),
      null != t.end &&
        (r =
          null === r
            ? t.end
            : new Date(Math.min(r.valueOf(), t.end.valueOf()))),
      (i = null === n || null === r || n < r ? { start: n, end: r } : i)
    );
  }
  function cr(e, t) {
    return (
      (null === e.start ? null : e.start.valueOf()) ===
        (null === t.start ? null : t.start.valueOf()) &&
      (null === e.end ? null : e.end.valueOf()) ===
        (null === t.end ? null : t.end.valueOf())
    );
  }
  function dr(e, t) {
    return (
      (null === e.end || null === t.start || e.end > t.start) &&
      (null === e.start || null === t.end || e.start < t.end)
    );
  }
  function ur(e, t) {
    return (
      (null === e.start || (null !== t.start && t.start >= e.start)) &&
      (null === e.end || (null !== t.end && t.end <= e.end))
    );
  }
  function A(e, t) {
    return (null === e.start || t >= e.start) && (null === e.end || t < e.end);
  }
  function hr(e, t, n, r) {
    return {
      dow: e.getUTCDay(),
      isDisabled: Boolean(r && !A(r.activeRange, e)),
      isOther: Boolean(r && !A(r.currentRange, e)),
      isToday: Boolean(t && A(t, e)),
      isPast: Boolean(n ? e < n : !!t && e < t.start),
      isFuture: Boolean(n ? n < e : !!t && e >= t.end),
    };
  }
  function fr(e, t) {
    var n = ["fc-day", "fc-day-" + jt[e.dow]];
    return (
      e.isDisabled
        ? n.push("fc-day-disabled")
        : (e.isToday && (n.push("fc-day-today"), n.push(t.getClass("today"))),
          e.isPast && n.push("fc-day-past"),
          e.isFuture && n.push("fc-day-future"),
          e.isOther && n.push("fc-day-other")),
      n
    );
  }
  const gr = a({ year: "numeric", month: "long", day: "numeric" }),
    pr = a({ week: "long" });
  function vr(e, n, r = "day", t = !0) {
    const { dateEnv: i, options: s, calendarApi: o } = e;
    var a,
      l,
      e = i.format(n, "week" === r ? pr : gr);
    return s.navLinks
      ? ((a = i.toDate(n)),
        (l = (e) => {
          var t =
            "day" === r
              ? s.navLinkDayClick
              : "week" === r
              ? s.navLinkWeekClick
              : null;
          "function" == typeof t
            ? t.call(o, i.toDate(n), e)
            : ("string" == typeof t && (r = t), o.zoomTo(n, r));
        }),
        Object.assign(
          { title: bt(s.navLinkHint, [e, a], e), "data-navlink": "" },
          t ? ot(l) : { onClick: l }
        ))
      : { "aria-label": e };
  }
  let mr,
    yr = null;
  function br() {
    return (yr =
      null === yr
        ? ($e((e = document.createElement("div")), {
            position: "absolute",
            top: -1e3,
            left: 0,
            border: 0,
            padding: 0,
            overflow: "scroll",
            direction: "rtl",
          }),
          (e.innerHTML = "<div></div>"),
          document.body.appendChild(e),
          (t =
            e.firstChild.getBoundingClientRect().left >
            e.getBoundingClientRect().left),
          Ye(e),
          t)
        : yr);
    var e, t;
  }
  function Er() {
    return (mr =
      mr ||
      (((e = document.createElement("div")).style.overflow = "scroll"),
      (e.style.position = "absolute"),
      (e.style.top = "-9999px"),
      (e.style.left = "-9999px"),
      document.body.appendChild(e),
      (t = Sr(e)),
      document.body.removeChild(e),
      t));
    var e, t;
  }
  function Sr(e) {
    return {
      x: e.offsetHeight - e.clientHeight,
      y: e.offsetWidth - e.clientWidth,
    };
  }
  function Ar(e, t = !1) {
    var n = window.getComputedStyle(e),
      r = parseInt(n.borderLeftWidth, 10) || 0,
      i = parseInt(n.borderRightWidth, 10) || 0,
      s = parseInt(n.borderTopWidth, 10) || 0,
      o = parseInt(n.borderBottomWidth, 10) || 0,
      e = Sr(e),
      a = e.y - r - i,
      r = {
        borderLeft: r,
        borderRight: i,
        borderTop: s,
        borderBottom: o,
        scrollbarBottom: e.x - s - o,
        scrollbarLeft: 0,
        scrollbarRight: 0,
      };
    return (
      br() && "rtl" === n.direction
        ? (r.scrollbarLeft = a)
        : (r.scrollbarRight = a),
      t &&
        ((r.paddingLeft = parseInt(n.paddingLeft, 10) || 0),
        (r.paddingRight = parseInt(n.paddingRight, 10) || 0),
        (r.paddingTop = parseInt(n.paddingTop, 10) || 0),
        (r.paddingBottom = parseInt(n.paddingBottom, 10) || 0)),
      r
    );
  }
  function Dr(e, t = !1, n) {
    (n = n ? e.getBoundingClientRect() : wr(e)),
      (e = Ar(e, t)),
      (n = {
        left: n.left + e.borderLeft + e.scrollbarLeft,
        right: n.right - e.borderRight - e.scrollbarRight,
        top: n.top + e.borderTop,
        bottom: n.bottom - e.borderBottom - e.scrollbarBottom,
      });
    return (
      t &&
        ((n.left += e.paddingLeft),
        (n.right -= e.paddingRight),
        (n.top += e.paddingTop),
        (n.bottom -= e.paddingBottom)),
      n
    );
  }
  function wr(e) {
    e = e.getBoundingClientRect();
    return {
      left: e.left + window.pageXOffset,
      top: e.top + window.pageYOffset,
      right: e.right + window.pageXOffset,
      bottom: e.bottom + window.pageYOffset,
    };
  }
  function Cr(e) {
    for (var t = []; e instanceof HTMLElement; ) {
      var n = window.getComputedStyle(e);
      if ("fixed" === n.position) break;
      /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && t.push(e),
        (e = e.parentNode);
    }
    return t;
  }
  function Rr(e, t, n) {
    function r(e) {
      s || ((s = !0), t(e));
    }
    function i(e) {
      s || ((s = !0), n(e));
    }
    let s = !1,
      o = e(r, i);
    o && "function" == typeof o.then && o.then(r, i);
  }
  class xr {
    constructor() {
      (this.handlers = {}), (this.thisContext = null);
    }
    setThisContext(e) {
      this.thisContext = e;
    }
    setOptions(e) {
      this.options = e;
    }
    on(e, t) {
      var n;
      (n = this.handlers), (t = t), (n[e] || (n[e] = [])).push(t);
    }
    off(e, t) {
      var n, r;
      (n = this.handlers),
        (e = e),
        (r = t) ? n[e] && (n[e] = n[e].filter((e) => e !== r)) : delete n[e];
    }
    trigger(e, ...t) {
      var n,
        r = this.handlers[e] || [],
        e = this.options && this.options[e];
      for (n of [].concat(e || [], r)) n.apply(this.thisContext, t);
    }
    hasHandlers(e) {
      return Boolean(
        (this.handlers[e] && this.handlers[e].length) ||
          (this.options && this.options[e])
      );
    }
  }
  class Tr {
    constructor(e, t, n, r) {
      this.els = t;
      t = this.originClientRect = e.getBoundingClientRect();
      n && this.buildElHorizontals(t.left), r && this.buildElVerticals(t.top);
    }
    buildElHorizontals(e) {
      var t,
        n = [],
        r = [];
      for (t of this.els) {
        var i = t.getBoundingClientRect();
        n.push(i.left - e), r.push(i.right - e);
      }
      (this.lefts = n), (this.rights = r);
    }
    buildElVerticals(e) {
      var t,
        n = [],
        r = [];
      for (t of this.els) {
        var i = t.getBoundingClientRect();
        n.push(i.top - e), r.push(i.bottom - e);
      }
      (this.tops = n), (this.bottoms = r);
    }
    leftToIndex(e) {
      let t,
        { lefts: n, rights: r } = this,
        i = n.length;
      for (t = 0; t < i; t += 1) if (e >= n[t] && e < r[t]) return t;
    }
    topToIndex(e) {
      let t,
        { tops: n, bottoms: r } = this,
        i = n.length;
      for (t = 0; t < i; t += 1) if (e >= n[t] && e < r[t]) return t;
    }
    getWidth(e) {
      return this.rights[e] - this.lefts[e];
    }
    getHeight(e) {
      return this.bottoms[e] - this.tops[e];
    }
    similarTo(e) {
      return (
        _r(this.tops || [], e.tops || []) &&
        _r(this.bottoms || [], e.bottoms || []) &&
        _r(this.lefts || [], e.lefts || []) &&
        _r(this.rights || [], e.rights || [])
      );
    }
  }
  function _r(t, n) {
    var r = t.length;
    if (r !== n.length) return !1;
    for (let e = 0; e < r; e++)
      if (Math.round(t[e]) !== Math.round(n[e])) return !1;
    return !0;
  }
  class kr {
    getMaxScrollTop() {
      return this.getScrollHeight() - this.getClientHeight();
    }
    getMaxScrollLeft() {
      return this.getScrollWidth() - this.getClientWidth();
    }
    canScrollVertically() {
      return 0 < this.getMaxScrollTop();
    }
    canScrollHorizontally() {
      return 0 < this.getMaxScrollLeft();
    }
    canScrollUp() {
      return 0 < this.getScrollTop();
    }
    canScrollDown() {
      return this.getScrollTop() < this.getMaxScrollTop();
    }
    canScrollLeft() {
      return 0 < this.getScrollLeft();
    }
    canScrollRight() {
      return this.getScrollLeft() < this.getMaxScrollLeft();
    }
  }
  class Mr extends kr {
    constructor(e) {
      super(), (this.el = e);
    }
    getScrollTop() {
      return this.el.scrollTop;
    }
    getScrollLeft() {
      return this.el.scrollLeft;
    }
    setScrollTop(e) {
      this.el.scrollTop = e;
    }
    setScrollLeft(e) {
      this.el.scrollLeft = e;
    }
    getScrollWidth() {
      return this.el.scrollWidth;
    }
    getScrollHeight() {
      return this.el.scrollHeight;
    }
    getClientHeight() {
      return this.el.clientHeight;
    }
    getClientWidth() {
      return this.el.clientWidth;
    }
  }
  class Ir extends kr {
    getScrollTop() {
      return window.pageYOffset;
    }
    getScrollLeft() {
      return window.pageXOffset;
    }
    setScrollTop(e) {
      window.scroll(window.pageXOffset, e);
    }
    setScrollLeft(e) {
      window.scroll(e, window.pageYOffset);
    }
    getScrollWidth() {
      return document.documentElement.scrollWidth;
    }
    getScrollHeight() {
      return document.documentElement.scrollHeight;
    }
    getClientHeight() {
      return document.documentElement.clientHeight;
    }
    getClientWidth() {
      return document.documentElement.clientWidth;
    }
  }
  class Or {
    constructor(e) {
      this.iconOverrideOption &&
        this.setIconOverride(e[this.iconOverrideOption]);
    }
    setIconOverride(e) {
      let t, n;
      if ("object" == typeof e && e) {
        for (n in ((t = Object.assign({}, this.iconClasses)), e))
          t[n] = this.applyIconOverridePrefix(e[n]);
        this.iconClasses = t;
      } else !1 === e && (this.iconClasses = {});
    }
    applyIconOverridePrefix(e) {
      var t = this.iconOverridePrefix;
      return (e = t && 0 !== e.indexOf(t) ? t + e : e);
    }
    getClass(e) {
      return this.classes[e] || "";
    }
    getIconClass(e, t) {
      t =
        (t && this.rtlIconClasses && this.rtlIconClasses[e]) ||
        this.iconClasses[e];
      return t ? this.baseIconClass + " " + t : "";
    }
    getCustomButtonIconClass(e) {
      let t;
      return this.iconOverrideCustomButtonOption &&
        (t = e[this.iconOverrideCustomButtonOption])
        ? this.baseIconClass + " " + this.applyIconOverridePrefix(t)
        : "";
    }
  }
  function Nr(e) {
    e();
    let t = C.debounceRendering,
      n = [];
    for (
      C.debounceRendering = function (e) {
        n.push(e);
      },
        ae(E(Pr, {}), document.createElement("div"));
      n.length;

    )
      n.shift()();
    C.debounceRendering = t;
  }
  (Or.prototype.classes = {}),
    (Or.prototype.iconClasses = {}),
    (Or.prototype.baseIconclassName = ""),
    (Or.prototype.iconOverridePrefix = "");
  class Pr extends T {
    render() {
      return E("div", {});
    }
    componentDidMount() {
      this.setState({});
    }
  }
  function Hr(e) {
    let t =
        ((e = {
          __c: (r = "__cC" + he++),
          __: e,
          Consumer: function (e, t) {
            return e.children(t);
          },
          Provider: function (e) {
            var n, t;
            return (
              this.getChildContext ||
                ((n = []),
                (((t = {})[r] = this).getChildContext = function () {
                  return t;
                }),
                (this.shouldComponentUpdate = function (e) {
                  this.props.value !== e.value &&
                    n.some(function (e) {
                      (e.__e = !0), $(e);
                    });
                }),
                (this.sub = function (e) {
                  n.push(e);
                  var t = e.componentWillUnmount;
                  e.componentWillUnmount = function () {
                    n.splice(n.indexOf(e), 1), t && t.call(e);
                  };
                })),
              e.children
            );
          },
        }).Provider.__ =
        e.Consumer.contextType =
          e),
      n = t.Provider;
    var r;
    return (
      (t.Provider = function () {
        var e = !this.getChildContext,
          t = n.apply(this, arguments);
        if (e) {
          let n = [];
          (this.shouldComponentUpdate = (t) => {
            this.props.value !== t.value &&
              n.forEach((e) => {
                (e.context = t.value), e.forceUpdate();
              });
          }),
            (this.sub = (e) => {
              n.push(e);
              let t = e.componentWillUnmount;
              e.componentWillUnmount = () => {
                n.splice(n.indexOf(e), 1), t && t.call(e);
              };
            });
        }
        return t;
      }),
      t
    );
  }
  class Br {
    constructor(e, t, n, r) {
      (this.execFunc = e),
        (this.emitter = t),
        (this.scrollTime = n),
        (this.scrollTimeReset = r),
        (this.handleScrollRequest = (e) => {
          (this.queuedRequest = Object.assign({}, this.queuedRequest || {}, e)),
            this.drain();
        }),
        t.on("_scrollRequest", this.handleScrollRequest),
        this.fireInitialScroll();
    }
    detach() {
      this.emitter.off("_scrollRequest", this.handleScrollRequest);
    }
    update(e) {
      e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain();
    }
    fireInitialScroll() {
      this.handleScrollRequest({ time: this.scrollTime });
    }
    drain() {
      this.queuedRequest &&
        this.execFunc(this.queuedRequest) &&
        (this.queuedRequest = null);
    }
  }
  const f = Hr({});
  function jr(e, t, n, r, i, s, o, a, l, c, d, u, h) {
    return {
      dateEnv: i,
      options: n,
      pluginHooks: o,
      emitter: c,
      dispatch: a,
      getCurrentData: l,
      calendarApi: d,
      viewSpec: e,
      viewApi: t,
      dateProfileGenerator: r,
      theme: s,
      isRtl: "rtl" === n.direction,
      addResizeHandler(e) {
        c.on("_resize", e);
      },
      removeResizeHandler(e) {
        c.off("_resize", e);
      },
      createScrollResponder: (e) =>
        new Br(e, c, p(n.scrollTime), n.scrollTimeReset),
      registerInteractiveComponent: u,
      unregisterInteractiveComponent: h,
    };
  }
  class zr extends T {
    shouldComponentUpdate(e, t) {
      return (
        this.debug && console.log(Pt(e, this.props), Pt(t, this.state)),
        !Ht(this.props, e, this.propEquality) ||
          !Ht(this.state, t, this.stateEquality)
      );
    }
    safeSetState(e) {
      Ht(
        this.state,
        Object.assign(Object.assign({}, this.state), e),
        this.stateEquality
      ) || this.setState(e);
    }
  }
  (zr.addPropsEquality = function (e) {
    var t = Object.create(this.prototype.propEquality);
    Object.assign(t, e), (this.prototype.propEquality = t);
  }),
    (zr.addStateEquality = function (e) {
      var t = Object.create(this.prototype.stateEquality);
      Object.assign(t, e), (this.prototype.stateEquality = t);
    }),
    (zr.contextType = f),
    (zr.prototype.propEquality = {}),
    (zr.prototype.stateEquality = {});
  class s extends zr {}
  function g(e, t) {
    "function" == typeof e ? e(t) : e && (e.current = t);
  }
  s.contextType = f;
  class D extends s {
    constructor() {
      super(...arguments), (this.uid = c());
    }
    prepareHits() {}
    queryHit(e, t, n, r) {
      return null;
    }
    isValidSegDownEl(e) {
      return (
        !this.props.eventDrag &&
        !this.props.eventResize &&
        !l(e, ".fc-event-mirror")
      );
    }
    isValidDateDownEl(e) {
      return !(
        l(e, ".fc-event:not(.fc-bg-event)") ||
        l(e, ".fc-more-link") ||
        l(e, "a[data-navlink]") ||
        l(e, ".fc-popover")
      );
    }
  }
  function Ur(e, t) {
    return null == (e = "function" == typeof e ? e() : e)
      ? t.createNowMarker()
      : t.createMarker(e);
  }
  class Wr {
    constructor(e) {
      (this.props = e),
        (this.nowDate = Ur(e.nowInput, e.dateEnv)),
        this.initHiddenDays();
    }
    buildPrev(e, t, n) {
      var r = this.props["dateEnv"],
        r = r.subtract(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
      return this.build(r, -1, n);
    }
    buildNext(e, t, n) {
      var r = this.props["dateEnv"],
        r = r.add(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
      return this.build(r, 1, n);
    }
    build(e, t, n = !0) {
      let r,
        i,
        s,
        o,
        a,
        l,
        c = this["props"];
      return (
        (r = this.buildValidRange()),
        (r = this.trimHiddenDays(r)),
        n &&
          ((n = e),
          (e =
            null != r.start && n < r.start
              ? r.start
              : null != r.end && n >= r.end
              ? new Date(r.end.valueOf() - 1)
              : n)),
        (i = this.buildCurrentRangeInfo(e, t)),
        (s = /^(year|month|week|day)$/.test(i.unit)),
        (o = this.buildRenderRange(this.trimHiddenDays(i.range), i.unit, s)),
        (o = this.trimHiddenDays(o)),
        (a = o),
        c.showNonCurrentDates || (a = w(a, i.range)),
        (a = w((a = this.adjustActiveRange(a)), r)),
        (l = dr(i.range, r)),
        {
          currentDate: (e = A(o, e) ? e : o.start),
          validRange: r,
          currentRange: i.range,
          currentRangeUnit: i.unit,
          isRangeAllDay: s,
          activeRange: a,
          renderRange: o,
          slotMinTime: c.slotMinTime,
          slotMaxTime: c.slotMaxTime,
          isValid: l,
          dateIncrement: this.buildDateIncrement(i.duration),
        }
      );
    }
    buildValidRange() {
      var e = this.props.validRangeInput,
        e =
          "function" == typeof e
            ? e.call(this.props.calendarApi, this.nowDate)
            : e;
      return this.refineRange(e) || { start: null, end: null };
    }
    buildCurrentRangeInfo(e, t) {
      let n,
        r = this["props"],
        i = null,
        s = null,
        o = null;
      return (
        r.duration
          ? ((i = r.duration),
            (s = r.durationUnit),
            (o = this.buildRangeFromDuration(e, t, i, s)))
          : (n = this.props.dayCount)
          ? ((s = "day"), (o = this.buildRangeFromDayCount(e, t, n)))
          : (o = this.buildCustomVisibleRange(e))
          ? (s = r.dateEnv.greatestWholeUnit(o.start, o.end).unit)
          : ((i = this.getFallbackDuration()),
            (s = _t(i).unit),
            (o = this.buildRangeFromDuration(e, t, i, s))),
        { duration: i, unit: s, range: o }
      );
    }
    getFallbackDuration() {
      return p({ day: 1 });
    }
    adjustActiveRange(e) {
      let {
          dateEnv: t,
          usesMinMaxTime: n,
          slotMinTime: r,
          slotMaxTime: i,
        } = this.props,
        { start: s, end: o } = e;
      return (
        n &&
          (xt(r) < 0 && ((s = y(s)), (s = t.add(s, r))), 1 < xt(i)) &&
          ((o = u((o = y(o)), -1)), (o = t.add(o, i))),
        { start: s, end: o }
      );
    }
    buildRangeFromDuration(e, t, n, r) {
      let i,
        s,
        o,
        { dateEnv: a, dateAlignment: l } = this.props;
      var c;
      function d() {
        (i = a.startOf(e, l)), (s = a.add(i, n)), (o = { start: i, end: s });
      }
      return (
        l ||
          ((c = this.props["dateIncrement"]),
          (l = c && h(c) < h(n) ? _t(c).unit : r)),
        xt(n) <= 1 &&
          this.isHiddenDay(i) &&
          (i = y((i = this.skipHiddenDays(i, t)))),
        d(),
        this.trimHiddenDays(o) || ((e = this.skipHiddenDays(e, t)), d()),
        o
      );
    }
    buildRangeFromDayCount(e, t, n) {
      let r,
        { dateEnv: i, dateAlignment: s } = this.props,
        o = 0,
        a = e;
      for (
        a = y((a = s ? i.startOf(a, s) : a)),
          a = this.skipHiddenDays(a, t),
          r = a;
        (r = u(r, 1)), this.isHiddenDay(r) || (o += 1), o < n;

      );
      return { start: a, end: r };
    }
    buildCustomVisibleRange(e) {
      var t = this["props"],
        n = t.visibleRangeInput,
        t =
          "function" == typeof n
            ? n.call(t.calendarApi, t.dateEnv.toDate(e))
            : n,
        e = this.refineRange(t);
      return !e || (null != e.start && null != e.end) ? e : null;
    }
    buildRenderRange(e, t, n) {
      return e;
    }
    buildDateIncrement(e) {
      var t = this.props["dateIncrement"];
      return (
        t || ((t = this.props.dateAlignment) ? p(1, t) : e || p({ days: 1 }))
      );
    }
    refineRange(t) {
      if (t) {
        let e = (function (e, t) {
          let n = null,
            r = null;
          return (
            e.start && (n = t.createMarker(e.start)),
            e.end && (r = t.createMarker(e.end)),
            (!n && !r) || (n && r && r < n) ? null : { start: n, end: r }
          );
        })(t, this.props.dateEnv);
        return (e = e && Yn(e));
      }
      return null;
    }
    initHiddenDays() {
      let e,
        t = this.props.hiddenDays || [],
        n = [],
        r = 0;
      for (!1 === this.props.weekends && t.push(0, 6), e = 0; e < 7; e += 1)
        (n[e] = -1 !== t.indexOf(e)) || (r += 1);
      if (!r) throw new Error("invalid hiddenDays");
      this.isHiddenDayHash = n;
    }
    trimHiddenDays(e) {
      let { start: t, end: n } = e;
      return (
        (t = t && this.skipHiddenDays(t)),
        (n = n && this.skipHiddenDays(n, -1, !0)),
        null == t || null == n || t < n ? { start: t, end: n } : null
      );
    }
    isHiddenDay(e) {
      return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e];
    }
    skipHiddenDays(e, t = 1, n = !1) {
      for (; this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7]; )
        e = u(e, t);
      return e;
    }
  }
  function Lr(e, t, n) {
    n.emitter.trigger(
      "select",
      Object.assign(Object.assign({}, Fr(e, n)), {
        jsEvent: t ? t.origEvent : null,
        view: n.viewApi || n.calendarApi.view,
      })
    );
  }
  function Fr(e, t) {
    var n,
      r,
      i,
      s = {};
    for (n of t.pluginHooks.dateSpanTransforms) Object.assign(s, n(e, t));
    return (
      Object.assign(
        s,
        ((r = e),
        (i = t.dateEnv),
        Object.assign(Object.assign({}, ci(r.range, i, r.allDay)), {
          allDay: r.allDay,
        }))
      ),
      s
    );
  }
  function Vr(e, t, n) {
    let { dateEnv: r, options: i } = n,
      s = t;
    return (s = e
      ? ((s = y(s)), r.add(s, i.defaultAllDayEventDuration))
      : r.add(s, i.defaultTimedEventDuration));
  }
  function Gr(e, t, n, r) {
    var i,
      s,
      o,
      a,
      l,
      c,
      d,
      u,
      h = Kr(e.defs, t),
      f = { defs: {}, instances: {} };
    for (i in e.defs) {
      var g = e.defs[i];
      f.defs[i] = (function (e, t, n, r) {
        var i = n.standardProps || {},
          s =
            (null == i.hasEnd &&
              t.durationEditable &&
              (n.startDelta || n.endDelta) &&
              (i.hasEnd = !0),
            Object.assign(Object.assign(Object.assign({}, e), i), {
              ui: Object.assign(Object.assign({}, e.ui), i.ui),
            }));
        n.extendedProps &&
          (s.extendedProps = Object.assign(
            Object.assign({}, s.extendedProps),
            n.extendedProps
          ));
        for (var o of r.pluginHooks.eventDefMutationAppliers) o(s, n, r);
        return !s.hasEnd && r.options.forceEventDuration && (s.hasEnd = !0), s;
      })(g, h[i], n, r);
    }
    for (s in e.instances) {
      var p = e.instances[s],
        v = f.defs[p.defId];
      f.instances[s] =
        ((v = v),
        (o = h[(p = p).defId]),
        (a = n),
        (u = d = c = void 0),
        (c = (l = r).dateEnv),
        (d = a.standardProps && !0 === a.standardProps.allDay),
        (u = a.standardProps && !1 === a.standardProps.hasEnd),
        (p = Object.assign({}, p)),
        d && (p.range = qn(p.range)),
        a.datesDelta &&
          o.startEditable &&
          (p.range = {
            start: c.add(p.range.start, a.datesDelta),
            end: c.add(p.range.end, a.datesDelta),
          }),
        a.startDelta &&
          o.durationEditable &&
          (p.range = {
            start: c.add(p.range.start, a.startDelta),
            end: p.range.end,
          }),
        a.endDelta &&
          o.durationEditable &&
          (p.range = {
            start: p.range.start,
            end: c.add(p.range.end, a.endDelta),
          }),
        u &&
          (p.range = {
            start: p.range.start,
            end: Vr(v.allDay, p.range.start, l),
          }),
        v.allDay &&
          (p.range = { start: y(p.range.start), end: y(p.range.end) }),
        p.range.end < p.range.start &&
          (p.range.end = Vr(v.allDay, p.range.start, l)),
        p);
    }
    return f;
  }
  class Qr {
    constructor(e, t) {
      (this.context = e), (this.internalEventSource = t);
    }
    remove() {
      this.context.dispatch({
        type: "REMOVE_EVENT_SOURCE",
        sourceId: this.internalEventSource.sourceId,
      });
    }
    refetch() {
      this.context.dispatch({
        type: "FETCH_EVENT_SOURCES",
        sourceIds: [this.internalEventSource.sourceId],
        isRefetch: !0,
      });
    }
    get id() {
      return this.internalEventSource.publicId;
    }
    get url() {
      return this.internalEventSource.meta.url;
    }
    get format() {
      return this.internalEventSource.meta.format;
    }
  }
  class M {
    constructor(e, t, n) {
      (this._context = e), (this._def = t), (this._instance = n || null);
    }
    setProp(e, t) {
      e in zn
        ? console.warn(
            "Could not set date-related prop 'name'. Use one of the date-related methods instead."
          )
        : "id" === e
        ? ((t = jn[e](t)), this.mutate({ standardProps: { publicId: t } }))
        : e in jn
        ? ((t = jn[e](t)), this.mutate({ standardProps: { [e]: t } }))
        : e in On
        ? (On[e](t),
          this.mutate({
            standardProps: {
              ui:
                "color" === e
                  ? { backgroundColor: t, borderColor: t }
                  : "editable" === e
                  ? { startEditable: t, durationEditable: t }
                  : { [e]: t },
            },
          }))
        : console.warn(
            `Could not set prop '${e}'. Use setExtendedProp instead.`
          );
    }
    setExtendedProp(e, t) {
      this.mutate({ extendedProps: { [e]: t } });
    }
    setStart(e, t = {}) {
      var n = this._context["dateEnv"],
        e = n.createMarker(e);
      e &&
        this._instance &&
        ((e = Xn(this._instance.range.start, e, n, t.granularity)),
        t.maintainDuration
          ? this.mutate({ datesDelta: e })
          : this.mutate({ startDelta: e }));
    }
    setEnd(e, t = {}) {
      let n,
        r = this._context["dateEnv"];
      (null == e || (n = r.createMarker(e))) &&
        this._instance &&
        (n
          ? ((e = Xn(this._instance.range.end, n, r, t.granularity)),
            this.mutate({ endDelta: e }))
          : this.mutate({ standardProps: { hasEnd: !1 } }));
    }
    setDates(t, n, r = {}) {
      let i,
        s = this._context["dateEnv"],
        o = { allDay: r.allDay },
        a = s.createMarker(t);
      if (a && (null == n || (i = s.createMarker(n))) && this._instance) {
        let e = this._instance.range;
        t = Xn((e = !0 === r.allDay ? qn(e) : e).start, a, s, r.granularity);
        i
          ? ((n = Xn(e.end, i, s, r.granularity)),
            t.years === n.years &&
            t.months === n.months &&
            t.days === n.days &&
            t.milliseconds === n.milliseconds
              ? this.mutate({ datesDelta: t, standardProps: o })
              : this.mutate({ startDelta: t, endDelta: n, standardProps: o }))
          : ((o.hasEnd = !1), this.mutate({ datesDelta: t, standardProps: o }));
      }
    }
    moveStart(e) {
      e = p(e);
      e && this.mutate({ startDelta: e });
    }
    moveEnd(e) {
      e = p(e);
      e && this.mutate({ endDelta: e });
    }
    moveDates(e) {
      e = p(e);
      e && this.mutate({ datesDelta: e });
    }
    setAllDay(e, t = {}) {
      let n = { allDay: e },
        r = t["maintainDuration"];
      null == r && (r = this._context.options.allDayMaintainDuration),
        this._def.allDay !== e && (n.hasEnd = r),
        this.mutate({ standardProps: n });
    }
    formatRange(e) {
      var t = this._context["dateEnv"],
        n = this._instance,
        e = a(e);
      return this._def.hasEnd
        ? t.formatRange(n.range.start, n.range.end, e, {
            forcedStartTzo: n.forcedStartTzo,
            forcedEndTzo: n.forcedEndTzo,
          })
        : t.format(n.range.start, e, { forcedTzo: n.forcedStartTzo });
    }
    mutate(i) {
      var s = this._instance;
      if (s) {
        let e = this._def,
          t = this._context,
          n = t.getCurrentData()["eventStore"],
          r = _n(n, s.instanceId);
        r = Gr(
          r,
          {
            "": {
              display: "",
              startEditable: !0,
              durationEditable: !0,
              constraints: [],
              overlap: null,
              allows: [],
              backgroundColor: "",
              borderColor: "",
              textColor: "",
              classNames: [],
            },
          },
          i,
          t
        );
        i = new M(t, e, s);
        (this._def = r.defs[e.defId]),
          (this._instance = r.instances[s.instanceId]),
          t.dispatch({ type: "MERGE_EVENTS", eventStore: r }),
          t.emitter.trigger("eventChange", {
            oldEvent: i,
            event: this,
            relatedEvents: Yr(r, t, s),
            revert() {
              t.dispatch({ type: "RESET_EVENTS", eventStore: n });
            },
          });
      }
    }
    remove() {
      let e = this._context,
        t = qr(this);
      e.dispatch({ type: "REMOVE_EVENTS", eventStore: t }),
        e.emitter.trigger("eventRemove", {
          event: this,
          relatedEvents: [],
          revert() {
            e.dispatch({ type: "MERGE_EVENTS", eventStore: t });
          },
        });
    }
    get source() {
      var e = this._def["sourceId"];
      return e
        ? new Qr(this._context, this._context.getCurrentData().eventSources[e])
        : null;
    }
    get start() {
      return this._instance
        ? this._context.dateEnv.toDate(this._instance.range.start)
        : null;
    }
    get end() {
      return this._instance && this._def.hasEnd
        ? this._context.dateEnv.toDate(this._instance.range.end)
        : null;
    }
    get startStr() {
      var e = this._instance;
      return e
        ? this._context.dateEnv.formatIso(e.range.start, {
            omitTime: this._def.allDay,
            forcedTzo: e.forcedStartTzo,
          })
        : "";
    }
    get endStr() {
      var e = this._instance;
      return e && this._def.hasEnd
        ? this._context.dateEnv.formatIso(e.range.end, {
            omitTime: this._def.allDay,
            forcedTzo: e.forcedEndTzo,
          })
        : "";
    }
    get id() {
      return this._def.publicId;
    }
    get groupId() {
      return this._def.groupId;
    }
    get allDay() {
      return this._def.allDay;
    }
    get title() {
      return this._def.title;
    }
    get url() {
      return this._def.url;
    }
    get display() {
      return this._def.ui.display || "auto";
    }
    get startEditable() {
      return this._def.ui.startEditable;
    }
    get durationEditable() {
      return this._def.ui.durationEditable;
    }
    get constraint() {
      return this._def.ui.constraints[0] || null;
    }
    get overlap() {
      return this._def.ui.overlap;
    }
    get allow() {
      return this._def.ui.allows[0] || null;
    }
    get backgroundColor() {
      return this._def.ui.backgroundColor;
    }
    get borderColor() {
      return this._def.ui.borderColor;
    }
    get textColor() {
      return this._def.ui.textColor;
    }
    get classNames() {
      return this._def.ui.classNames;
    }
    get extendedProps() {
      return this._def.extendedProps;
    }
    toPlainObject(e = {}) {
      var t = this._def,
        n = t["ui"],
        { startStr: r, endStr: i } = this,
        s = { allDay: t.allDay };
      return (
        t.title && (s.title = t.title),
        r && (s.start = r),
        i && (s.end = i),
        t.publicId && (s.id = t.publicId),
        t.groupId && (s.groupId = t.groupId),
        t.url && (s.url = t.url),
        n.display && "auto" !== n.display && (s.display = n.display),
        e.collapseColor &&
        n.backgroundColor &&
        n.backgroundColor === n.borderColor
          ? (s.color = n.backgroundColor)
          : (n.backgroundColor && (s.backgroundColor = n.backgroundColor),
            n.borderColor && (s.borderColor = n.borderColor)),
        n.textColor && (s.textColor = n.textColor),
        n.classNames.length && (s.classNames = n.classNames),
        Object.keys(t.extendedProps).length &&
          (e.collapseExtendedProps
            ? Object.assign(s, t.extendedProps)
            : (s.extendedProps = t.extendedProps)),
        s
      );
    }
    toJSON() {
      return this.toPlainObject();
    }
  }
  function qr(e) {
    var t = e._def,
      e = e._instance;
    return {
      defs: { [t.defId]: t },
      instances: e ? { [e.instanceId]: e } : {},
    };
  }
  function Yr(e, t, n) {
    var r,
      { defs: i, instances: s } = e,
      o = [],
      a = n ? n.instanceId : "";
    for (r in s) {
      var l = s[r],
        c = i[l.defId];
      l.instanceId !== a && o.push(new M(t, c, l));
    }
    return o;
  }
  function Zr(e, t, n, r) {
    var i,
      s,
      o,
      a,
      l,
      c,
      d = {},
      u = {},
      h = {},
      f = [],
      g = [],
      p = Kr(e.defs, t);
    for (i in e.defs) {
      var v = e.defs[i];
      "inverse-background" === p[v.defId].display &&
        (v.groupId
          ? ((d[v.groupId] = []), h[v.groupId] || (h[v.groupId] = v))
          : (u[i] = []));
    }
    for (s in e.instances) {
      var m = e.instances[s],
        y = e.defs[m.defId],
        b = p[y.defId],
        E = m.range,
        E = !y.allDay && r ? Yn(E, r) : E,
        S = w(E, n);
      S &&
        ("inverse-background" === b.display
          ? (y.groupId ? d[y.groupId] : u[m.defId]).push(S)
          : "none" !== b.display &&
            ("background" === b.display ? f : g).push({
              def: y,
              ui: b,
              instance: m,
              range: S,
              isStart: E.start && E.start.valueOf() === S.start.valueOf(),
              isEnd: E.end && E.end.valueOf() === S.end.valueOf(),
            }));
    }
    for (o in d)
      for (a of ar(d[o], n)) {
        var A = h[o],
          D = p[A.defId];
        f.push({
          def: A,
          ui: D,
          instance: null,
          range: a,
          isStart: !1,
          isEnd: !1,
        });
      }
    for (l in u)
      for (c of ar(u[l], n))
        f.push({
          def: e.defs[l],
          ui: p[l],
          instance: null,
          range: c,
          isStart: !1,
          isEnd: !1,
        });
    return { bg: f, fg: g };
  }
  function Xr(e) {
    return (
      "background" === e.ui.display || "inverse-background" === e.ui.display
    );
  }
  function Jr(e, t) {
    e.fcSeg = t;
  }
  function $r(e) {
    return e.fcSeg || e.parentNode.fcSeg || null;
  }
  function Kr(e, t) {
    return k(e, (e) => ei(e, t));
  }
  function ei(e, t) {
    var n = [];
    return (
      t[""] && n.push(t[""]),
      t[e.defId] && n.push(t[e.defId]),
      n.push(e.ui),
      Hn(n)
    );
  }
  function ti(e, n) {
    e = e.map(ni);
    return e.sort((e, t) => vt(e, t, n)), e.map((e) => e._seg);
  }
  function ni(e) {
    var t = e["eventRange"],
      n = t.def,
      t = (t.instance || t).range,
      r = t.start ? t.start.valueOf() : 0,
      t = t.end ? t.end.valueOf() : 0;
    return Object.assign(Object.assign(Object.assign({}, n.extendedProps), n), {
      id: n.publicId,
      start: r,
      end: t,
      duration: t - r,
      allDay: Number(n.allDay),
      _seg: e,
    });
  }
  function ri(e, t, n, r, i, s, o) {
    let { dateEnv: a, options: l } = n,
      { displayEventTime: c, displayEventEnd: d } = l,
      u = e.eventRange.def,
      h = e.eventRange.instance;
    null == c && (c = !1 !== r), null == d && (d = !1 !== i);
    var n = h.range.start,
      r = h.range.end,
      i = s || e.start || e.eventRange.range.start,
      e = o || e.end || e.eventRange.range.end,
      f = y(n).valueOf() === y(i).valueOf(),
      g = y(m(r, -1)).valueOf() === y(m(e, -1)).valueOf();
    return c && !u.allDay && (f || g)
      ? ((i = f ? n : i),
        d && u.hasEnd
          ? a.formatRange(i, g ? r : e, t, {
              forcedStartTzo: s ? null : h.forcedStartTzo,
              forcedEndTzo: o ? null : h.forcedEndTzo,
            })
          : a.format(i, t, { forcedTzo: s ? null : h.forcedStartTzo }))
      : "";
  }
  function I(e, t, n) {
    e = e.eventRange.range;
    return {
      isPast: e.end < (n || t.start),
      isFuture: e.start >= (n || t.end),
      isToday: t && A(t, e.start),
    };
  }
  function ii(e) {
    return e.instance
      ? e.instance.instanceId
      : e.def.defId + ":" + e.range.start.toISOString();
  }
  function si(e, t) {
    let { def: n, instance: r } = e.eventRange,
      i = n["url"];
    if (i) return { href: i };
    let { emitter: s, options: o } = t,
      a = o["eventInteractive"];
    return (a =
      null == a && null == (a = n.interactive)
        ? Boolean(s.hasHandlers("eventClick"))
        : a)
      ? at((e) => {
          s.trigger("eventClick", {
            el: e.target,
            event: new M(t, n, r),
            jsEvent: e,
            view: t.viewApi,
          });
        })
      : {};
  }
  const oi = { start: n, end: n, allDay: Boolean };
  function ai(e, t) {
    return (
      cr(e.range, t.range) &&
      e.allDay === t.allDay &&
      (function (e, t) {
        for (var n in t)
          if ("range" !== n && "allDay" !== n && e[n] !== t[n]) return !1;
        for (var r in e) if (!(r in t)) return !1;
        return !0;
      })(e, t)
    );
  }
  function li(e, t, n) {
    return Object.assign(Object.assign({}, ci(e, t, n)), {
      timeZone: t.timeZone,
    });
  }
  function ci(e, t, n) {
    return {
      start: t.toDate(e.start),
      end: t.toDate(e.end),
      startStr: t.formatIso(e.start, { omitTime: n }),
      endStr: t.formatIso(e.end, { omitTime: n }),
    };
  }
  let di = {};
  di.gregory = class {
    getMarkerYear(e) {
      return e.getUTCFullYear();
    }
    getMarkerMonth(e) {
      return e.getUTCMonth();
    }
    getMarkerDay(e) {
      return e.getUTCDate();
    }
    arrayToMarker(e) {
      return i(e);
    }
    markerToArray(e) {
      return qt(e);
    }
  };
  const ui =
    /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
  function hi(t) {
    t = ui.exec(t);
    if (t) {
      var n = new Date(
        Date.UTC(
          Number(t[1]),
          t[3] ? Number(t[3]) - 1 : 0,
          Number(t[5] || 1),
          Number(t[7] || 0),
          Number(t[8] || 0),
          Number(t[10] || 0),
          t[12] ? 1e3 * Number("0." + t[12]) : 0
        )
      );
      if (Yt(n)) {
        let e = null;
        return (
          t[13] &&
            (e =
              ("-" === t[15] ? -1 : 1) *
              (60 * Number(t[16] || 0) + Number(t[18] || 0))),
          { marker: n, isTimeUnspecified: !t[6], timeZoneOffset: e }
        );
      }
    }
    return null;
  }
  class fi {
    constructor(e) {
      var t = (this.timeZone = e.timeZone),
        n = "local" !== t && "UTC" !== t;
      e.namedTimeZoneImpl &&
        n &&
        (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(t)),
        (this.canComputeOffset = Boolean(!n || this.namedTimeZoneImpl)),
        (this.calendarSystem = ((t = e.calendarSystem), new di[t]())),
        (this.locale = e.locale),
        (this.weekDow = e.locale.week.dow),
        (this.weekDoy = e.locale.week.doy),
        "ISO" === e.weekNumberCalculation &&
          ((this.weekDow = 1), (this.weekDoy = 4)),
        "number" == typeof e.firstDay && (this.weekDow = e.firstDay),
        "function" == typeof e.weekNumberCalculation &&
          (this.weekNumberFunc = e.weekNumberCalculation),
        (this.weekText = (null != e.weekText ? e : e.locale.options).weekText),
        (this.weekTextLong =
          (null != e.weekTextLong ? e : e.locale.options).weekTextLong ||
          this.weekText),
        (this.cmdFormatter = e.cmdFormatter),
        (this.defaultSeparator = e.defaultSeparator);
    }
    createMarker(e) {
      e = this.createMarkerMeta(e);
      return null === e ? null : e.marker;
    }
    createNowMarker() {
      return this.canComputeOffset
        ? this.timestampToMarker(new Date().valueOf())
        : i(Gt(new Date()));
    }
    createMarkerMeta(e) {
      if ("string" == typeof e) return this.parse(e);
      let t = null;
      return (
        "number" == typeof e
          ? (t = this.timestampToMarker(e))
          : e instanceof Date
          ? ((e = e.valueOf()), isNaN(e) || (t = this.timestampToMarker(e)))
          : Array.isArray(e) && (t = i(e)),
        null !== t && Yt(t)
          ? { marker: t, isTimeUnspecified: !1, forcedTzo: null }
          : null
      );
    }
    parse(e) {
      e = hi(e);
      if (null === e) return null;
      let t = e["marker"],
        n = null;
      return (
        null !== e.timeZoneOffset &&
          (this.canComputeOffset
            ? (t = this.timestampToMarker(
                t.valueOf() - 60 * e.timeZoneOffset * 1e3
              ))
            : (n = e.timeZoneOffset)),
        { marker: t, isTimeUnspecified: e.isTimeUnspecified, forcedTzo: n }
      );
    }
    getYear(e) {
      return this.calendarSystem.getMarkerYear(e);
    }
    getMonth(e) {
      return this.calendarSystem.getMarkerMonth(e);
    }
    getDay(e) {
      return this.calendarSystem.getMarkerDay(e);
    }
    add(e, t) {
      e = this.calendarSystem.markerToArray(e);
      return (
        (e[0] += t.years),
        (e[1] += t.months),
        (e[2] += t.days),
        (e[6] += t.milliseconds),
        this.calendarSystem.arrayToMarker(e)
      );
    }
    subtract(e, t) {
      e = this.calendarSystem.markerToArray(e);
      return (
        (e[0] -= t.years),
        (e[1] -= t.months),
        (e[2] -= t.days),
        (e[6] -= t.milliseconds),
        this.calendarSystem.arrayToMarker(e)
      );
    }
    addYears(e, t) {
      e = this.calendarSystem.markerToArray(e);
      return (e[0] += t), this.calendarSystem.arrayToMarker(e);
    }
    addMonths(e, t) {
      e = this.calendarSystem.markerToArray(e);
      return (e[1] += t), this.calendarSystem.arrayToMarker(e);
    }
    diffWholeYears(e, t) {
      var n = this["calendarSystem"];
      return Zt(e) === Zt(t) &&
        n.getMarkerDay(e) === n.getMarkerDay(t) &&
        n.getMarkerMonth(e) === n.getMarkerMonth(t)
        ? n.getMarkerYear(t) - n.getMarkerYear(e)
        : null;
    }
    diffWholeMonths(e, t) {
      var n = this["calendarSystem"];
      return Zt(e) === Zt(t) && n.getMarkerDay(e) === n.getMarkerDay(t)
        ? n.getMarkerMonth(t) -
            n.getMarkerMonth(e) +
            12 * (n.getMarkerYear(t) - n.getMarkerYear(e))
        : null;
    }
    greatestWholeUnit(e, t) {
      var n,
        r = this.diffWholeYears(e, t);
      return null !== r
        ? { unit: "year", value: r }
        : null !== (r = this.diffWholeMonths(e, t))
        ? { unit: "month", value: r }
        : null !== (r = Lt(e, t))
        ? { unit: "week", value: r }
        : null !== (r = Ft(e, t))
        ? { unit: "day", value: r }
        : ((n = e),
          St((r = (t.valueOf() - n.valueOf()) / 36e5))
            ? { unit: "hour", value: r }
            : ((n = e),
              St((r = (t.valueOf() - n.valueOf()) / 6e4))
                ? { unit: "minute", value: r }
                : ((n = e),
                  St((r = (t.valueOf() - n.valueOf()) / 1e3))
                    ? { unit: "second", value: r }
                    : {
                        unit: "millisecond",
                        value: t.valueOf() - e.valueOf(),
                      })));
    }
    countDurationsBetween(e, t, n) {
      let r;
      return n.years && null !== (r = this.diffWholeYears(e, t))
        ? r / (xt(n) / 365)
        : n.months && null !== (r = this.diffWholeMonths(e, t))
        ? r / (xt(n) / 30)
        : n.days && null !== (r = Ft(e, t))
        ? r / xt(n)
        : (t.valueOf() - e.valueOf()) / h(n);
    }
    startOf(e, t) {
      return "year" === t
        ? this.startOfYear(e)
        : "month" === t
        ? this.startOfMonth(e)
        : "week" === t
        ? this.startOfWeek(e)
        : "day" === t
        ? y(e)
        : "hour" === t
        ? i([
            (n = e).getUTCFullYear(),
            n.getUTCMonth(),
            n.getUTCDate(),
            n.getUTCHours(),
          ])
        : "minute" === t
        ? i([
            (n = e).getUTCFullYear(),
            n.getUTCMonth(),
            n.getUTCDate(),
            n.getUTCHours(),
            n.getUTCMinutes(),
          ])
        : "second" === t
        ? i([
            (t = e).getUTCFullYear(),
            t.getUTCMonth(),
            t.getUTCDate(),
            t.getUTCHours(),
            t.getUTCMinutes(),
            t.getUTCSeconds(),
          ])
        : null;
      var n;
    }
    startOfYear(e) {
      return this.calendarSystem.arrayToMarker([
        this.calendarSystem.getMarkerYear(e),
      ]);
    }
    startOfMonth(e) {
      return this.calendarSystem.arrayToMarker([
        this.calendarSystem.getMarkerYear(e),
        this.calendarSystem.getMarkerMonth(e),
      ]);
    }
    startOfWeek(e) {
      return this.calendarSystem.arrayToMarker([
        this.calendarSystem.getMarkerYear(e),
        this.calendarSystem.getMarkerMonth(e),
        e.getUTCDate() - ((e.getUTCDay() - this.weekDow + 7) % 7),
      ]);
    }
    computeWeekNumber(e) {
      return this.weekNumberFunc
        ? this.weekNumberFunc(this.toDate(e))
        : ((e = e),
          (t = this.weekDow),
          (n = this.weekDoy),
          (r = e.getUTCFullYear()),
          (i = Vt(e, r, t, n)) < 1
            ? Vt(e, r - 1, t, n)
            : 1 <= (e = Vt(e, r + 1, t, n))
            ? Math.min(i, e)
            : i);
      var t, n, r, i;
    }
    format(e, t, n = {}) {
      return t.format(
        {
          marker: e,
          timeZoneOffset:
            null != n.forcedTzo ? n.forcedTzo : this.offsetForMarker(e),
        },
        this
      );
    }
    formatRange(e, t, n, r = {}) {
      return (
        r.isEndExclusive && (t = m(t, -1)),
        n.formatRange(
          {
            marker: e,
            timeZoneOffset:
              null != r.forcedStartTzo
                ? r.forcedStartTzo
                : this.offsetForMarker(e),
          },
          {
            marker: t,
            timeZoneOffset:
              null != r.forcedEndTzo ? r.forcedEndTzo : this.offsetForMarker(t),
          },
          this,
          r.defaultSeparator
        )
      );
    }
    formatIso(e, t = {}) {
      let n = null;
      return Xt(
        e,
        (n = t.omitTimeZoneOffset
          ? n
          : null != t.forcedTzo
          ? t.forcedTzo
          : this.offsetForMarker(e)),
        t.omitTime
      );
    }
    timestampToMarker(e) {
      return "local" === this.timeZone
        ? i(Gt(new Date(e)))
        : "UTC" !== this.timeZone && this.namedTimeZoneImpl
        ? i(this.namedTimeZoneImpl.timestampToArray(e))
        : new Date(e);
    }
    offsetForMarker(e) {
      return "local" === this.timeZone
        ? -Qt(qt(e)).getTimezoneOffset()
        : "UTC" === this.timeZone
        ? 0
        : this.namedTimeZoneImpl
        ? this.namedTimeZoneImpl.offsetForArray(qt(e))
        : null;
    }
    toDate(e, t) {
      return "local" === this.timeZone
        ? Qt(qt(e))
        : "UTC" === this.timeZone
        ? new Date(e.valueOf())
        : this.namedTimeZoneImpl
        ? new Date(
            e.valueOf() -
              1e3 * this.namedTimeZoneImpl.offsetForArray(qt(e)) * 60
          )
        : new Date(e.valueOf() - (t || 0));
    }
  }
  class gi {
    constructor() {
      (this.strictOrder = !1),
        (this.allowReslicing = !1),
        (this.maxCoord = -1),
        (this.maxStackCnt = -1),
        (this.levelCoords = []),
        (this.entriesByLevel = []),
        (this.stackCnts = {});
    }
    addSegs(e) {
      var t,
        n = [];
      for (t of e) this.insertEntry(t, n);
      return n;
    }
    insertEntry(e, t) {
      var n = this.findInsertion(e);
      return this.isInsertionValid(n, e)
        ? (this.insertEntryAt(e, n), 1)
        : this.handleInvalidInsertion(n, e, t);
    }
    isInsertionValid(e, t) {
      return (
        (-1 === this.maxCoord || e.levelCoord + t.thickness <= this.maxCoord) &&
        (-1 === this.maxStackCnt || e.stackCnt < this.maxStackCnt)
      );
    }
    handleInvalidInsertion(e, t, n) {
      return this.allowReslicing && e.touchingEntry
        ? this.splitEntry(t, e.touchingEntry, n)
        : (n.push(t), 0);
    }
    splitEntry(e, t, n) {
      let r = 0,
        i = [],
        s = e.span,
        o = t.span;
      return (
        s.start < o.start &&
          (r += this.insertEntry(
            {
              index: e.index,
              thickness: e.thickness,
              span: { start: s.start, end: o.start },
            },
            i
          )),
        s.end > o.end &&
          (r += this.insertEntry(
            {
              index: e.index,
              thickness: e.thickness,
              span: { start: o.end, end: s.end },
            },
            i
          )),
        r
          ? (n.push(
              { index: e.index, thickness: e.thickness, span: yi(o, s) },
              ...i
            ),
            r)
          : (n.push(e), 0)
      );
    }
    insertEntryAt(e, t) {
      var { entriesByLevel: n, levelCoords: r } = this;
      -1 === t.lateral
        ? (bi(r, t.level, t.levelCoord), bi(n, t.level, [e]))
        : bi(n[t.level], t.lateral, e),
        (this.stackCnts[vi(e)] = t.stackCnt);
    }
    findInsertion(s) {
      let {
          levelCoords: o,
          entriesByLevel: a,
          strictOrder: l,
          stackCnts: c,
        } = this,
        e = o.length,
        d = 0,
        u = -1,
        h = -1,
        f = null,
        g = 0;
      for (let i = 0; i < e; i += 1) {
        var p = o[i];
        if (!l && p >= d + s.thickness) break;
        let e,
          t = a[i],
          n = Ei(t, s.span.start, pi),
          r = n[0] + n[1];
        for (; (e = t[r]) && e.span.start < s.span.end; ) {
          var v = p + e.thickness;
          v > d && ((d = v), (f = e), (u = i), (h = r)),
            v === d && (g = Math.max(g, c[vi(e)] + 1)),
            (r += 1);
        }
      }
      let t = 0;
      if (f) for (t = u + 1; t < e && o[t] < d; ) t += 1;
      let n = -1;
      return (
        t < e && o[t] === d && (n = Ei(a[t], s.span.end, pi)[0]),
        {
          touchingLevel: u,
          touchingLateral: h,
          touchingEntry: f,
          stackCnt: g,
          levelCoord: d,
          level: t,
          lateral: n,
        }
      );
    }
    toRects() {
      var { entriesByLevel: t, levelCoords: n } = this,
        r = t.length,
        i = [];
      for (let e = 0; e < r; e += 1) {
        var s,
          o = t[e],
          a = n[e];
        for (s of o)
          i.push(Object.assign(Object.assign({}, s), { levelCoord: a }));
      }
      return i;
    }
  }
  function pi(e) {
    return e.span.end;
  }
  function vi(e) {
    return e.index + ":" + e.span.start;
  }
  function mi(e) {
    let n = [];
    for (var r of e) {
      let e = [],
        t = { span: r.span, entries: [r] };
      for (var i of n)
        yi(i.span, t.span)
          ? (t = {
              entries: i.entries.concat(t.entries),
              span:
                ((s = i.span),
                (o = t.span),
                {
                  start: Math.min(s.start, o.start),
                  end: Math.max(s.end, o.end),
                }),
            })
          : e.push(i);
      e.push(t), (n = e);
    }
    var s, o;
    return n;
  }
  function yi(e, t) {
    var n = Math.max(e.start, t.start),
      e = Math.min(e.end, t.end);
    return n < e ? { start: n, end: e } : null;
  }
  function bi(e, t, n) {
    e.splice(t, 0, n);
  }
  function Ei(e, t, n) {
    let r = 0,
      i = e.length;
    if (!i || t < n(e[r])) return [0, 0];
    if (t > n(e[i - 1])) return [i, 0];
    for (; r < i; ) {
      var s = Math.floor(r + (i - r) / 2),
        o = n(e[s]);
      if (t < o) i = s;
      else {
        if (!(o < t)) return [s, 1];
        r = s + 1;
      }
    }
    return [r, 0];
  }
  class Si {
    constructor(e) {
      (this.component = e.component),
        (this.isHitComboAllowed = e.isHitComboAllowed || null);
    }
    destroy() {}
  }
  function Ai(e) {
    return { [e.component.uid]: e };
  }
  const Di = {};
  class wi {
    constructor(e, t) {
      this.emitter = new xr();
    }
    destroy() {}
    setMirrorIsVisible(e) {}
    setMirrorNeedsRevert(e) {}
    setAutoScrollEnabled(e) {}
  }
  const Ci = {},
    Ri = { startTime: p, duration: p, create: Boolean, sourceId: String };
  function xi(e) {
    var { refined: e, extra: t } = wn(e, Ri);
    return {
      startTime: e.startTime || null,
      duration: e.duration || null,
      create: null == e.create || e.create,
      sourceId: e.sourceId,
      leftoverProps: t,
    };
  }
  class Ti extends s {
    constructor() {
      super(...arguments),
        (this.state = { forPrint: !1 }),
        (this.handleBeforePrint = () => {
          this.setState({ forPrint: !0 });
        }),
        (this.handleAfterPrint = () => {
          this.setState({ forPrint: !1 });
        });
    }
    render() {
      var e = this["props"],
        t = e["options"],
        n = this.state["forPrint"],
        r = n || "auto" === t.height || "auto" === t.contentHeight,
        i = r || null == t.height ? "" : t.height,
        t = [
          "fc",
          n ? "fc-media-print" : "fc-media-screen",
          "fc-direction-" + t.direction,
          e.theme.getClass("root"),
        ];
      return rr() || t.push("fc-liquid-hack"), e.children(t, i, r, n);
    }
    componentDidMount() {
      var e = this.props["emitter"];
      e.on("_beforeprint", this.handleBeforePrint),
        e.on("_afterprint", this.handleAfterPrint);
    }
    componentWillUnmount() {
      var e = this.props["emitter"];
      e.off("_beforeprint", this.handleBeforePrint),
        e.off("_afterprint", this.handleAfterPrint);
    }
  }
  function _i(e, t) {
    return a(
      !e || 10 < t
        ? { weekday: "short" }
        : 1 < t
        ? { weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 }
        : { weekday: "long" }
    );
  }
  const ki = "fc-col-header-cell";
  function Mi(e) {
    return e.text;
  }
  class Ii extends s {
    constructor() {
      super(...arguments),
        (this.id = c()),
        (this.queuedDomNodes = []),
        (this.currentDomNodes = []),
        (this.handleEl = (e) => {
          this.props.elRef && g(this.props.elRef, e);
        });
    }
    render() {
      const { props: e, context: t } = this,
        n = t["options"],
        { customGenerator: r, defaultGenerator: i, renderProps: s } = e,
        o = Ni(e);
      let a,
        l,
        c = !1,
        d = [];
      if (null != r) {
        const e = "function" == typeof r ? r(s, E) : r;
        if (!0 === e) c = !0;
        else {
          const t = e && "object" == typeof e;
          t && "html" in e
            ? (o.dangerouslySetInnerHTML = { __html: e.html })
            : t && "domNodes" in e
            ? (d = Array.prototype.slice.call(e.domNodes))
            : t || "function" == typeof e
            ? (l = e)
            : (a = e);
        }
      } else c = !Oi(e.generatorName, n);
      return (
        c && i && (a = i(s)),
        (this.queuedDomNodes = d),
        (this.currentGeneratorMeta = l),
        E(e.elTag, o, a)
      );
    }
    componentDidMount() {
      this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
    }
    componentDidUpdate() {
      this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
    }
    componentWillUnmount() {
      this.triggerCustomRendering(!1);
    }
    triggerCustomRendering(e) {
      var t;
      const { props: n, context: r } = this,
        { handleCustomRendering: i, customRenderingMetaMap: s } = r.options;
      if (i) {
        const r =
          null != (t = this.currentGeneratorMeta)
            ? t
            : null == s
            ? void 0
            : s[n.generatorName];
        r &&
          i(
            Object.assign(
              Object.assign(
                {
                  id: this.id,
                  isActive: e,
                  containerEl: this.base,
                  reportNewContainerEl: this.handleEl,
                  generatorMeta: r,
                },
                n
              ),
              { elClasses: (n.elClasses || []).filter(Pi) }
            )
          );
      }
    }
    applyQueueudDomNodes() {
      var { queuedDomNodes: e, currentDomNodes: t } = this,
        n = this.base;
      if (!d(e, t)) {
        t.forEach(Ye);
        for (var r of e) n.appendChild(r);
        this.currentDomNodes = e;
      }
    }
  }
  function Oi(e, t) {
    return Boolean(
      t.handleCustomRendering &&
        e &&
        (null == (t = t.customRenderingMetaMap) ? void 0 : t[e])
    );
  }
  function Ni(e, t) {
    var n = Object.assign(Object.assign({}, e.elAttrs), { ref: e.elRef });
    return (
      (e.elClasses || t) &&
        (n.className = (e.elClasses || [])
          .concat(t || [])
          .concat(n.className || [])
          .filter(Boolean)
          .join(" ")),
      e.elStyle && (n.style = e.elStyle),
      n
    );
  }
  function Pi(e) {
    return Boolean(e);
  }
  Ii.addPropsEquality({
    elClasses: d,
    elStyle: v,
    elAttrs: function (e, t) {
      var n;
      for (n of Pt(e, t)) if (!Nt.test(n)) return !1;
      return !0;
    },
    renderProps: v,
  });
  const Hi = Hr(0);
  class O extends T {
    constructor() {
      super(...arguments),
        (this.InnerContent = function (e, t) {
          var n = e.props;
          return E(
            Ii,
            Object.assign(
              {
                renderProps: n.renderProps,
                generatorName: n.generatorName,
                customGenerator: n.customGenerator,
                defaultGenerator: n.defaultGenerator,
                renderId: e.context,
              },
              t
            )
          );
        }.bind(void 0, this)),
        (this.handleRootEl = (e) => {
          (this.rootEl = e), this.props.elRef && g(this.props.elRef, e);
        });
    }
    render() {
      var e,
        t,
        n = this["props"],
        r = (function (e, t) {
          t = "function" == typeof e ? e(t) : e || [];
          return "string" == typeof t ? [t] : t;
        })(n.classNameGenerator, n.renderProps);
      return n.children
        ? ((e = Ni(n, r)),
          (t = n.children(this.InnerContent, n.renderProps, e)),
          n.elTag ? E(n.elTag, e, t) : t)
        : E(
            Ii,
            Object.assign(Object.assign({}, n), {
              elRef: this.handleRootEl,
              elTag: n.elTag || "div",
              elClasses: (n.elClasses || []).concat(r),
              renderId: this.context,
            })
          );
    }
    componentDidMount() {
      var e, t;
      null != (t = (e = this.props).didMount) &&
        t.call(
          e,
          Object.assign(Object.assign({}, this.props.renderProps), {
            el: this.rootEl || this.base,
          })
        );
    }
    componentWillUnmount() {
      var e, t;
      null != (t = (e = this.props).willUnmount) &&
        t.call(
          e,
          Object.assign(Object.assign({}, this.props.renderProps), {
            el: this.rootEl || this.base,
          })
        );
    }
  }
  O.contextType = Hi;
  class Bi extends s {
    render() {
      let { dateEnv: e, options: t, theme: n, viewApi: r } = this.context,
        i = this["props"],
        { date: s, dateProfile: o } = i,
        a = hr(s, i.todayRange, null, o),
        l = [ki].concat(fr(a, n)),
        c = e.format(s, i.dayHeaderFormat),
        d = !a.isDisabled && 1 < i.colCnt ? vr(this.context, s) : {},
        u = Object.assign(
          Object.assign(
            Object.assign({ date: e.toDate(s), view: r }, i.extraRenderProps),
            { text: c }
          ),
          a
        );
      return E(
        O,
        {
          elTag: "th",
          elClasses: l,
          elAttrs: Object.assign(
            {
              role: "columnheader",
              colSpan: i.colSpan,
              "data-date": a.isDisabled ? void 0 : Jt(s),
            },
            i.extraDataAttrs
          ),
          renderProps: u,
          generatorName: "dayHeaderContent",
          customGenerator: t.dayHeaderContent,
          defaultGenerator: Mi,
          classNameGenerator: t.dayHeaderClassNames,
          didMount: t.dayHeaderDidMount,
          willUnmount: t.dayHeaderWillUnmount,
        },
        (e) =>
          E(
            "div",
            { className: "fc-scrollgrid-sync-inner" },
            !a.isDisabled &&
              E(e, {
                elTag: "a",
                elAttrs: d,
                elClasses: [
                  "fc-col-header-cell-cushion",
                  i.isSticky && "fc-sticky",
                ],
              })
          )
      );
    }
  }
  const ji = a({ weekday: "long" });
  class zi extends s {
    render() {
      let t = this["props"],
        { dateEnv: n, theme: e, viewApi: r, options: i } = this.context,
        s = u(new Date(2592e5), t.dow),
        o = {
          dow: t.dow,
          isDisabled: !1,
          isFuture: !1,
          isPast: !1,
          isToday: !1,
          isOther: !1,
        },
        a = n.format(s, t.dayHeaderFormat),
        l = Object.assign(
          Object.assign(
            Object.assign(Object.assign({ date: s }, o), { view: r }),
            t.extraRenderProps
          ),
          { text: a }
        );
      return E(
        O,
        {
          elTag: "th",
          elClasses: [ki, ...fr(o, e), ...(t.extraClassNames || [])],
          elAttrs: Object.assign(
            { role: "columnheader", colSpan: t.colSpan },
            t.extraDataAttrs
          ),
          renderProps: l,
          generatorName: "dayHeaderContent",
          customGenerator: i.dayHeaderContent,
          defaultGenerator: Mi,
          classNameGenerator: i.dayHeaderClassNames,
          didMount: i.dayHeaderDidMount,
          willUnmount: i.dayHeaderWillUnmount,
        },
        (e) =>
          E(
            "div",
            { className: "fc-scrollgrid-sync-inner" },
            E(e, {
              elTag: "a",
              elClasses: [
                "fc-col-header-cell-cushion",
                t.isSticky && "fc-sticky",
              ],
              elAttrs: { "aria-label": n.format(s, ji) },
            })
          )
      );
    }
  }
  class Ui extends T {
    constructor(e, t) {
      super(e, t),
        (this.initialNowDate = Ur(t.options.now, t.dateEnv)),
        (this.initialNowQueriedMs = new Date().valueOf()),
        (this.state = this.computeTiming().currentState);
    }
    render() {
      var { props: e, state: t } = this;
      return e.children(t.nowDate, t.todayRange);
    }
    componentDidMount() {
      this.setTimeout();
    }
    componentDidUpdate(e) {
      e.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout());
    }
    componentWillUnmount() {
      this.clearTimeout();
    }
    computeTiming() {
      var { props: e, context: t } = this,
        n = m(
          this.initialNowDate,
          new Date().valueOf() - this.initialNowQueriedMs
        ),
        r = t.dateEnv.startOf(n, e.unit),
        t = t.dateEnv.add(r, p(1, e.unit)),
        e = t.valueOf() - n.valueOf(),
        e = Math.min(864e5, e);
      return {
        currentState: { nowDate: r, todayRange: Wi(r) },
        nextState: { nowDate: t, todayRange: Wi(t) },
        waitMs: e,
      };
    }
    setTimeout() {
      let { nextState: e, waitMs: t } = this.computeTiming();
      this.timeoutId = setTimeout(() => {
        this.setState(e, () => {
          this.setTimeout();
        });
      }, t);
    }
    clearTimeout() {
      this.timeoutId && clearTimeout(this.timeoutId);
    }
  }
  function Wi(e) {
    e = y(e);
    return { start: e, end: u(e, 1) };
  }
  Ui.contextType = f;
  class Li extends s {
    constructor() {
      super(...arguments), (this.createDayHeaderFormatter = b(Fi));
    }
    render() {
      let e = this["context"],
        {
          dates: n,
          dateProfile: r,
          datesRepDistinctDays: i,
          renderIntro: s,
        } = this.props,
        o = this.createDayHeaderFormatter(
          e.options.dayHeaderFormat,
          i,
          n.length
        );
      return E(Ui, { unit: "day" }, (e, t) =>
        E(
          "tr",
          { role: "row" },
          s && s("day"),
          n.map((e) =>
            i
              ? E(Bi, {
                  key: e.toISOString(),
                  date: e,
                  dateProfile: r,
                  todayRange: t,
                  colCnt: n.length,
                  dayHeaderFormat: o,
                })
              : E(zi, {
                  key: e.getUTCDay(),
                  dow: e.getUTCDay(),
                  dayHeaderFormat: o,
                })
          )
        )
      );
    }
  }
  function Fi(e, t, n) {
    return e || _i(t, n);
  }
  class Vi {
    constructor(e, t) {
      let n = e.start,
        r = e["end"],
        i = [],
        s = [],
        o = -1;
      for (; n < r; )
        t.isHiddenDay(n) ? i.push(o + 0.5) : ((o += 1), i.push(o), s.push(n)),
          (n = u(n, 1));
      (this.dates = s), (this.indices = i), (this.cnt = s.length);
    }
    sliceRange(e) {
      var t = this.getDateDayIndex(e.start),
        e = this.getDateDayIndex(u(e.end, -1)),
        n = Math.max(0, t),
        r = Math.min(this.cnt - 1, e);
      return (n = Math.ceil(n)) <= (r = Math.floor(r))
        ? { firstIndex: n, lastIndex: r, isStart: t === n, isEnd: e === r }
        : null;
    }
    getDateDayIndex(e) {
      var t = this["indices"],
        e = Math.floor(o(this.dates[0], e));
      return e < 0 ? t[0] - 1 : e >= t.length ? t[t.length - 1] + 1 : t[e];
    }
  }
  class Gi {
    constructor(e, t) {
      let n,
        r,
        i,
        s = e["dates"];
      if (t) {
        for (
          r = s[0].getUTCDay(), n = 1;
          n < s.length && s[n].getUTCDay() !== r;
          n += 1
        );
        i = Math.ceil(s.length / n);
      } else (i = 1), (n = s.length);
      (this.rowCnt = i),
        (this.colCnt = n),
        (this.daySeries = e),
        (this.cells = this.buildCells()),
        (this.headerDates = this.buildHeaderDates());
    }
    buildCells() {
      var e = [];
      for (let t = 0; t < this.rowCnt; t += 1) {
        var n = [];
        for (let e = 0; e < this.colCnt; e += 1) n.push(this.buildCell(t, e));
        e.push(n);
      }
      return e;
    }
    buildCell(e, t) {
      e = this.daySeries.dates[e * this.colCnt + t];
      return { key: e.toISOString(), date: e };
    }
    buildHeaderDates() {
      var t = [];
      for (let e = 0; e < this.colCnt; e += 1) t.push(this.cells[0][e].date);
      return t;
    }
    sliceRange(e) {
      var r = this["colCnt"],
        i = this.daySeries.sliceRange(e),
        s = [];
      if (i) {
        let { firstIndex: e, lastIndex: t } = i,
          n = e;
        for (; n <= t; ) {
          var o = Math.floor(n / r),
            a = Math.min((o + 1) * r, t + 1);
          s.push({
            row: o,
            firstCol: n % r,
            lastCol: (a - 1) % r,
            isStart: i.isStart && n === e,
            isEnd: i.isEnd && a - 1 === t,
          }),
            (n = a);
        }
      }
      return s;
    }
  }
  class Qi {
    constructor() {
      (this.sliceBusinessHours = b(this._sliceBusinessHours)),
        (this.sliceDateSelection = b(this._sliceDateSpan)),
        (this.sliceEventStore = b(this._sliceEventStore)),
        (this.sliceEventDrag = b(this._sliceInteraction)),
        (this.sliceEventResize = b(this._sliceInteraction)),
        (this.forceDayIfListItem = !1);
    }
    sliceProps(e, t, n, r, ...i) {
      var s = e["eventUiBases"],
        o = this.sliceEventStore(e.eventStore, s, t, n, ...i);
      return {
        dateSelectionSegs: this.sliceDateSelection(
          e.dateSelection,
          t,
          n,
          s,
          r,
          ...i
        ),
        businessHourSegs: this.sliceBusinessHours(
          e.businessHours,
          t,
          n,
          r,
          ...i
        ),
        fgEventSegs: o.fg,
        bgEventSegs: o.bg,
        eventDrag: this.sliceEventDrag(e.eventDrag, s, t, n, ...i),
        eventResize: this.sliceEventResize(e.eventResize, s, t, n, ...i),
        eventSelection: e.eventSelection,
      };
    }
    sliceNowDate(e, t, n, r, ...i) {
      return this._sliceDateSpan(
        { range: { start: e, end: m(e, 1) }, allDay: !1 },
        t,
        n,
        {},
        r,
        ...i
      );
    }
    _sliceBusinessHours(e, t, n, r, ...i) {
      return e
        ? this._sliceEventStore(Rn(e, qi(t, Boolean(n)), r), {}, t, n, ...i).bg
        : [];
    }
    _sliceEventStore(e, t, n, r, ...i) {
      return e
        ? ((e = Zr(e, t, qi(n, Boolean(r)), r)),
          {
            bg: this.sliceEventRanges(e.bg, i),
            fg: this.sliceEventRanges(e.fg, i),
          })
        : { bg: [], fg: [] };
    }
    _sliceInteraction(e, t, n, r, ...i) {
      return e
        ? ((t = Zr(e.mutatedEvents, t, qi(n, Boolean(r)), r)),
          {
            segs: this.sliceEventRanges(t.fg, i),
            affectedInstances: e.affectedEvents.instances,
            isEvent: e.isEvent,
          })
        : null;
    }
    _sliceDateSpan(e, t, n, r, i, ...s) {
      if (e) {
        var t = qi(t, Boolean(n)),
          n = w(e.range, t);
        if (n) {
          (t = e = Object.assign(Object.assign({}, e), { range: n })), (n = r);
          var o,
            a = {
              def: (i = Vn(
                (i = Ln({ editable: !1 }, (r = i))).refined,
                i.extra,
                "",
                t.allDay,
                !0,
                r
              )),
              ui: ei(i, n),
              instance: Cn(i.defId, t.range),
              range: t.range,
              isStart: !0,
              isEnd: !0,
            },
            r = this.sliceRange(e.range, ...s);
          for (o of r) o.eventRange = a;
          return r;
        }
      }
      return [];
    }
    sliceEventRanges(e, t) {
      var n,
        r = [];
      for (n of e) r.push(...this.sliceEventRange(n, t));
      return r;
    }
    sliceEventRange(e, t) {
      let n = e.range;
      this.forceDayIfListItem &&
        "list-item" === e.ui.display &&
        (n = { start: n.start, end: u(n.start, 1) });
      var r,
        t = this.sliceRange(n, ...t);
      for (r of t)
        (r.eventRange = e),
          (r.isStart = e.isStart && r.isStart),
          (r.isEnd = e.isEnd && r.isEnd);
      return t;
    }
  }
  function qi(e, t) {
    var n = e.activeRange;
    return t
      ? n
      : {
          start: m(n.start, e.slotMinTime.milliseconds),
          end: m(n.end, e.slotMaxTime.milliseconds - 864e5),
        };
  }
  function Yi(e, t, n) {
    (n = n.options.eventDataTransform), (t = t ? t.eventDataTransform : null);
    return t && (e = Zi(e, t)), (e = n ? Zi(e, n) : e);
  }
  function Zi(e, t) {
    let n;
    if (t) {
      n = [];
      for (var r of e) {
        var i = t(r);
        i ? n.push(i) : null == i && n.push(r);
      }
    } else n = e;
    return n;
  }
  function Xi(e, t, n) {
    let r = e["defs"],
      i = k(e.instances, (e) =>
        r[e.defId].allDay
          ? e
          : Object.assign(Object.assign({}, e), {
              range: {
                start: n.createMarker(
                  t.toDate(e.range.start, e.forcedStartTzo)
                ),
                end: n.createMarker(t.toDate(e.range.end, e.forcedEndTzo)),
              },
              forcedStartTzo: n.canComputeOffset ? null : e.forcedStartTzo,
              forcedEndTzo: n.canComputeOffset ? null : e.forcedEndTzo,
            })
      );
    return { defs: r, instances: i };
  }
  function Ji(e, t) {
    return Mn(e, (e) => e.sourceId !== t);
  }
  function $i(e, t, n) {
    var r,
      i = e.mutatedEvents["instances"];
    for (r in i) if (!ur(t.validRange, i[r].range)) return !1;
    return es({ eventDrag: e }, n);
  }
  function Ki(e, t, n) {
    return !!ur(t.validRange, e.range) && es({ dateSelection: e }, n);
  }
  function es(e, t) {
    var n = t.getCurrentData(),
      n = Object.assign(
        {
          businessHours: n.businessHours,
          dateSelection: "",
          eventStore: n.eventStore,
          eventUiBases: n.eventUiBases,
          eventSelection: "",
          eventDrag: null,
          eventResize: null,
        },
        e
      );
    return (t.pluginHooks.isPropsValid || ts)(n, t);
  }
  function ts(e, t, n = {}, r) {
    return !(
      (e.eventDrag &&
        !(function (e, t, n, r) {
          let i = t.getCurrentData(),
            s = e.eventDrag,
            o = s.mutatedEvents,
            a = o.defs,
            l = o.instances,
            c = Kr(a, s.isEvent ? e.eventUiBases : { "": i.selectionConfig });
          r && (c = k(c, r));
          (r = e.eventStore), (d = s.affectedEvents.instances);
          var d,
            u,
            h = {
              defs: r.defs,
              instances: _(r.instances, (e) => !d[e.instanceId]),
            },
            f = h.defs,
            g = h.instances,
            p = Kr(f, e.eventUiBases);
          for (u in l) {
            var v = l[u],
              m = v.range,
              y = c[v.defId],
              b = a[v.defId];
            if (!ns(y.constraints, m, h, e.businessHours, t)) return;
            var E,
              S = t.options["eventOverlap"],
              A = "function" == typeof S ? S : null;
            for (E in g) {
              var D = g[E];
              if (dr(m, D.range)) {
                if (!1 === p[D.defId].overlap && s.isEvent) return;
                if (!1 === y.overlap) return;
                if (A && !A(new M(t, f[D.defId], D), new M(t, b, v))) return;
              }
            }
            var w,
              C = i.eventStore;
            for (w of y.allows) {
              var R = Object.assign(Object.assign({}, n), {
                  range: v.range,
                  allDay: b.allDay,
                }),
                x = C.defs[b.defId],
                T = C.instances[u],
                x = x ? new M(t, x, T) : new M(t, b);
              if (!w(Fr(R, t), x)) return;
            }
          }
          return 1;
        })(e, t, n, r)) ||
      (e.dateSelection &&
        !(function (e, t, n, r) {
          let i = e.eventStore,
            s = i.defs,
            o = i.instances,
            a = e.dateSelection,
            l = a.range,
            c = t.getCurrentData()["selectionConfig"];
          if (ns((c = r ? r(c) : c).constraints, l, i, e.businessHours, t)) {
            var d,
              u,
              r = t.options["selectOverlap"],
              h = "function" == typeof r ? r : null;
            for (d in o) {
              var f = o[d];
              if (dr(l, f.range)) {
                if (!1 === c.overlap) return;
                if (h && !h(new M(t, s[f.defId], f), null)) return;
              }
            }
            for (u of c.allows) {
              var g = Object.assign(Object.assign({}, n), a);
              if (!u(Fr(g, t), null)) return;
            }
            return 1;
          }
        })(e, t, n, r))
    );
  }
  function ns(e, t, n, r, i) {
    for (var s of e)
      if (
        !(function (e, t) {
          for (var n of e) if (ur(n, t)) return 1;
          return;
        })(
          (function (t, e, n, r, i) {
            return "businessHours" === t
              ? rs(Rn(r, e, i))
              : "string" == typeof t
              ? rs(Mn(n, (e) => e.groupId === t))
              : "object" == typeof t && t
              ? rs(Rn(t, e, i))
              : [];
          })(s, t, n, r, i),
          t
        )
      )
        return;
    return 1;
  }
  function rs(e) {
    var t,
      n = e["instances"],
      r = [];
    for (t in n) r.push(n[t].range);
    return r;
  }
  class is extends Error {
    constructor(e, t) {
      super(e), (this.response = t);
    }
  }
  function ss(e, t, n) {
    var r = { method: (e = e.toUpperCase()) };
    return (
      "GET" === e
        ? (t += (-1 === t.indexOf("?") ? "?" : "&") + new URLSearchParams(n))
        : ((r.body = new URLSearchParams(n)),
          (r.headers = {
            "Content-Type": "application/x-www-form-urlencoded",
          })),
      fetch(t, r).then((t) => {
        if (t.ok)
          return t.json().then(
            (e) => [e, t],
            () => {
              throw new is("Failure parsing JSON", t);
            }
          );
        throw new is("Request failed", t);
      })
    );
  }
  class os {
    constructor(e) {
      (this.drainedOption = e),
        (this.isRunning = !1),
        (this.isDirty = !1),
        (this.pauseDepths = {}),
        (this.timeoutId = 0);
    }
    request(e) {
      (this.isDirty = !0),
        this.isPaused() ||
          (this.clearTimeout(),
          null == e
            ? this.tryDrain()
            : (this.timeoutId = setTimeout(this.tryDrain.bind(this), e)));
    }
    pause(e = "") {
      var t = this["pauseDepths"];
      (t[e] = (t[e] || 0) + 1), this.clearTimeout();
    }
    resume(e = "", t) {
      var n = this["pauseDepths"];
      e in n && ((t || (--n[e], n[e] <= 0)) && delete n[e], this.tryDrain());
    }
    isPaused() {
      return Object.keys(this.pauseDepths).length;
    }
    tryDrain() {
      if (!this.isRunning && !this.isPaused()) {
        for (this.isRunning = !0; this.isDirty; )
          (this.isDirty = !1), this.drained();
        this.isRunning = !1;
      }
    }
    clear() {
      this.clearTimeout(), (this.isDirty = !1), (this.pauseDepths = {});
    }
    clearTimeout() {
      this.timeoutId && (clearTimeout(this.timeoutId), (this.timeoutId = 0));
    }
    drained() {
      this.drainedOption && this.drainedOption();
    }
  }
  const as = /^(visible|hidden)$/;
  class ls extends s {
    constructor() {
      super(...arguments),
        (this.handleEl = (e) => {
          (this.el = e), g(this.props.elRef, e);
        });
    }
    render() {
      var e = this["props"],
        { liquid: t, liquidIsAbsolute: n } = e,
        r = t && n,
        i = ["fc-scroller"];
      return (
        t && i.push(n ? "fc-scroller-liquid-absolute" : "fc-scroller-liquid"),
        E(
          "div",
          {
            ref: this.handleEl,
            className: i.join(" "),
            style: {
              overflowX: e.overflowX,
              overflowY: e.overflowY,
              left: (r && -(e.overcomeLeft || 0)) || "",
              right: (r && -(e.overcomeRight || 0)) || "",
              bottom: (r && -(e.overcomeBottom || 0)) || "",
              marginLeft: (!r && -(e.overcomeLeft || 0)) || "",
              marginRight: (!r && -(e.overcomeRight || 0)) || "",
              marginBottom: (!r && -(e.overcomeBottom || 0)) || "",
              maxHeight: e.maxHeight || "",
            },
          },
          e.children
        )
      );
    }
    needsXScrolling() {
      if (!as.test(this.props.overflowX)) {
        var e = this["el"],
          t = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(),
          n = e["children"];
        for (let e = 0; e < n.length; e += 1)
          if (n[e].getBoundingClientRect().width > t) return !0;
      }
      return !1;
    }
    needsYScrolling() {
      if (!as.test(this.props.overflowY)) {
        var e = this["el"],
          t =
            this.el.getBoundingClientRect().height - this.getXScrollbarWidth(),
          n = e["children"];
        for (let e = 0; e < n.length; e += 1)
          if (n[e].getBoundingClientRect().height > t) return !0;
      }
      return !1;
    }
    getXScrollbarWidth() {
      return as.test(this.props.overflowX)
        ? 0
        : this.el.offsetHeight - this.el.clientHeight;
    }
    getYScrollbarWidth() {
      return as.test(this.props.overflowY)
        ? 0
        : this.el.offsetWidth - this.el.clientWidth;
    }
  }
  class N {
    constructor(e) {
      (this.masterCallback = e),
        (this.currentMap = {}),
        (this.depths = {}),
        (this.callbackMap = {}),
        (this.handleValue = (e, t) => {
          let { depths: n, currentMap: r } = this,
            i = !1,
            s = !1;
          null !== e
            ? ((i = t in r), (r[t] = e), (n[t] = (n[t] || 0) + 1), (s = !0))
            : (--n[t],
              n[t] || (delete r[t], delete this.callbackMap[t], (i = !0))),
            this.masterCallback &&
              (i && this.masterCallback(null, String(t)), s) &&
              this.masterCallback(e, String(t));
        });
    }
    createRef(t) {
      let e = this.callbackMap[t];
      return (e =
        e ||
        (this.callbackMap[t] = (e) => {
          this.handleValue(e, String(t));
        }));
    }
    collect(e, t, n) {
      return Bt(this.currentMap, e, t, n);
    }
    getAll() {
      return Ot(this.currentMap);
    }
  }
  function cs(e) {
    let t = Xe(e, ".fc-scrollgrid-shrink"),
      n = 0;
    for (var r of t)
      n = Math.max(
        n,
        (function (e) {
          var t = e.querySelector(".fc-scrollgrid-shrink-frame"),
            n = e.querySelector(".fc-scrollgrid-shrink-cushion");
          if (!t) throw new Error("needs fc-scrollgrid-shrink-frame className");
          if (n)
            return (
              e.getBoundingClientRect().width -
              t.getBoundingClientRect().width +
              n.getBoundingClientRect().width
            );
          throw new Error("needs fc-scrollgrid-shrink-cushion className");
        })(r)
      );
    return Math.ceil(n);
  }
  function ds(e, t) {
    return e.liquid && t.liquid;
  }
  function us(e, t) {
    return null != t.maxHeight || ds(e, t);
  }
  function hs(e, t, n, r) {
    var i = n["expandRows"];
    return "function" == typeof t.content
      ? t.content(n)
      : E(
          "table",
          {
            role: "presentation",
            className: [
              t.tableClassName,
              e.syncRowHeights ? "fc-scrollgrid-sync-table" : "",
            ].join(" "),
            style: {
              minWidth: n.tableMinWidth,
              width: n.clientWidth,
              height: i ? n.clientHeight : "",
            },
          },
          n.tableColGroupNode,
          E(
            r ? "thead" : "tbody",
            { role: "presentation" },
            "function" == typeof t.rowContent ? t.rowContent(n) : t.rowContent
          )
        );
  }
  function fs(e, t) {
    return d(e, t, v);
  }
  function gs(e, t) {
    var n,
      r = [];
    for (n of e) {
      var i = n.span || 1;
      for (let e = 0; e < i; e += 1)
        r.push(
          E("col", {
            style: {
              width: "shrink" === n.width ? ps(t) : n.width || "",
              minWidth: n.minWidth || "",
            },
          })
        );
    }
    return E("colgroup", {}, ...r);
  }
  function ps(e) {
    return null == e ? 4 : e;
  }
  function vs(e) {
    for (var t of e) if ("shrink" === t.width) return !0;
    return !1;
  }
  function ms(e, t) {
    t = ["fc-scrollgrid", t.theme.getClass("table")];
    return e && t.push("fc-scrollgrid-liquid"), t;
  }
  function ys(e, t) {
    var n = [
      "fc-scrollgrid-section",
      "fc-scrollgrid-section-" + e.type,
      e.className,
    ];
    return (
      t &&
        e.liquid &&
        null == e.maxHeight &&
        n.push("fc-scrollgrid-section-liquid"),
      e.isSticky && n.push("fc-scrollgrid-section-sticky"),
      n
    );
  }
  function bs(e) {
    return E("div", {
      className: "fc-scrollgrid-sticky-shim",
      style: { width: e.clientWidth, minWidth: e.tableMinWidth },
    });
  }
  function Es(e) {
    let t = e["stickyHeaderDates"];
    return (t =
      null != t && "auto" !== t
        ? t
        : "auto" === e.height || "auto" === e.viewHeight);
  }
  function Ss(e) {
    let t = e["stickyFooterScrollbar"];
    return (t =
      null != t && "auto" !== t
        ? t
        : "auto" === e.height || "auto" === e.viewHeight);
  }
  class As extends s {
    constructor() {
      super(...arguments),
        (this.processCols = b((e) => e, fs)),
        (this.renderMicroColGroup = b(gs)),
        (this.scrollerRefs = new N()),
        (this.scrollerElRefs = new N(this._handleScrollerEl.bind(this))),
        (this.state = {
          shrinkWidth: null,
          forceYScrollbars: !1,
          scrollerClientWidths: {},
          scrollerClientHeights: {},
        }),
        (this.handleSizing = () => {
          this.safeSetState(
            Object.assign(
              { shrinkWidth: this.computeShrinkWidth() },
              this.computeScrollerDims()
            )
          );
        });
    }
    render() {
      var { props: e, state: t, context: n } = this,
        r = e.sections || [],
        i = this.processCols(e.cols),
        s = this.renderMicroColGroup(i, t.shrinkWidth),
        i = ms(e.liquid, n);
      e.collapsibleWidth && i.push("fc-scrollgrid-collapsible");
      let o,
        a = r.length,
        l = 0,
        c = [],
        d = [],
        u = [];
      for (; l < a && "header" === (o = r[l]).type; )
        c.push(this.renderSection(o, s, !0)), (l += 1);
      for (; l < a && "body" === (o = r[l]).type; )
        d.push(this.renderSection(o, s, !1)), (l += 1);
      for (; l < a && "footer" === (o = r[l]).type; )
        u.push(this.renderSection(o, s, !0)), (l += 1);
      (t = !rr()), (n = { role: "rowgroup" });
      return E(
        "table",
        { role: "grid", className: i.join(" "), style: { height: e.height } },
        Boolean(!t && c.length) && E("thead", n, ...c),
        Boolean(!t && d.length) && E("tbody", n, ...d),
        Boolean(!t && u.length) && E("tfoot", n, ...u),
        t && E("tbody", n, ...c, ...d, ...u)
      );
    }
    renderSection(e, t, n) {
      return "outerContent" in e
        ? E(x, { key: e.key }, e.outerContent)
        : E(
            "tr",
            {
              key: e.key,
              role: "presentation",
              className: ys(e, this.props.liquid).join(" "),
            },
            this.renderChunkTd(e, t, e.chunk, n)
          );
    }
    renderChunkTd(e, t, n, r) {
      var i, s, o, a, l, c;
      return "outerContent" in n
        ? n.outerContent
        : ((i = this["props"]),
          ({
            forceYScrollbars: l,
            scrollerClientWidths: s,
            scrollerClientHeights: o,
          } = this.state),
          (c = us(i, e)),
          (a = ds(i, e)),
          (l = i.liquid ? (l ? "scroll" : c ? "auto" : "hidden") : "visible"),
          (c = e.key),
          (t = hs(
            e,
            n,
            {
              tableColGroupNode: t,
              tableMinWidth: "",
              clientWidth: i.collapsibleWidth || void 0 === s[c] ? null : s[c],
              clientHeight: void 0 !== o[c] ? o[c] : null,
              expandRows: e.expandRows,
              syncRowHeights: !1,
              rowSyncHeights: [],
              reportRowHeightChange: () => {},
            },
            r
          )),
          E(
            r ? "th" : "td",
            { ref: n.elRef, role: "presentation" },
            E(
              "div",
              {
                className:
                  "fc-scroller-harness" +
                  (a ? " fc-scroller-harness-liquid" : ""),
              },
              E(
                ls,
                {
                  ref: this.scrollerRefs.createRef(c),
                  elRef: this.scrollerElRefs.createRef(c),
                  overflowY: l,
                  overflowX: i.liquid ? "hidden" : "visible",
                  maxHeight: e.maxHeight,
                  liquid: a,
                  liquidIsAbsolute: !0,
                },
                t
              )
            )
          ));
    }
    _handleScrollerEl(e, t) {
      t = (function (e, t) {
        for (var n of e) if (n.key === t) return n;
        return null;
      })(this.props.sections, t);
      t && g(t.chunk.scrollerElRef, e);
    }
    componentDidMount() {
      this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
    }
    componentDidUpdate() {
      this.handleSizing();
    }
    componentWillUnmount() {
      this.context.removeResizeHandler(this.handleSizing);
    }
    computeShrinkWidth() {
      return vs(this.props.cols) ? cs(this.scrollerElRefs.getAll()) : 0;
    }
    computeScrollerDims() {
      let e = Er(),
        { scrollerRefs: t, scrollerElRefs: n } = this,
        r = !1,
        i = {},
        s = {};
      for (var o in t.currentMap) {
        o = t.currentMap[o];
        if (o && o.needsYScrolling()) {
          r = !0;
          break;
        }
      }
      for (var a of this.props.sections) {
        var a = a.key,
          l = n.currentMap[a];
        l &&
          ((l = l.parentNode),
          (i[a] = Math.floor(l.getBoundingClientRect().width - (r ? e.y : 0))),
          (s[a] = Math.floor(l.getBoundingClientRect().height)));
      }
      return {
        forceYScrollbars: r,
        scrollerClientWidths: i,
        scrollerClientHeights: s,
      };
    }
  }
  As.addStateEquality({ scrollerClientWidths: v, scrollerClientHeights: v });
  class Ds extends s {
    constructor() {
      super(...arguments),
        (this.handleEl = (e) => {
          (this.el = e) && Jr(e, this.props.seg);
        });
    }
    render() {
      var { props: e, context: t } = this,
        n = t["options"],
        r = e["seg"],
        i = r["eventRange"],
        s = i["ui"],
        s = {
          event: new M(t, i.def, i.instance),
          view: t.viewApi,
          timeText: e.timeText,
          textColor: s.textColor,
          backgroundColor: s.backgroundColor,
          borderColor: s.borderColor,
          isDraggable:
            !e.disableDragging &&
            (function (e, t) {
              let n = t["pluginHooks"],
                r = n.isDraggableTransformers,
                { def: i, ui: s } = e.eventRange,
                o = s.startEditable;
              for (var a of r) o = a(o, i, s, t);
              return o;
            })(r, t),
          isStartResizable:
            !e.disableResizing &&
            ((i = t), (s = r).isStart) &&
            s.eventRange.ui.durationEditable &&
            i.options.eventResizableFromStart,
          isEndResizable:
            !e.disableResizing &&
            (t = r).isEnd &&
            t.eventRange.ui.durationEditable,
          isMirror: Boolean(e.isDragging || e.isResizing || e.isDateSelecting),
          isStart: Boolean(r.isStart),
          isEnd: Boolean(r.isEnd),
          isPast: Boolean(e.isPast),
          isFuture: Boolean(e.isFuture),
          isToday: Boolean(e.isToday),
          isSelected: Boolean(e.isSelected),
          isDragging: Boolean(e.isDragging),
          isResizing: Boolean(e.isResizing),
        };
      return E(
        O,
        Object.assign({}, e, {
          elRef: this.handleEl,
          elClasses: [
            ...((i = ["fc-event"]),
            (t = s).isMirror && i.push("fc-event-mirror"),
            t.isDraggable && i.push("fc-event-draggable"),
            (t.isStartResizable || t.isEndResizable) &&
              i.push("fc-event-resizable"),
            t.isDragging && i.push("fc-event-dragging"),
            t.isResizing && i.push("fc-event-resizing"),
            t.isSelected && i.push("fc-event-selected"),
            t.isStart && i.push("fc-event-start"),
            t.isEnd && i.push("fc-event-end"),
            t.isPast && i.push("fc-event-past"),
            t.isToday && i.push("fc-event-today"),
            t.isFuture && i.push("fc-event-future"),
            i),
            ...r.eventRange.ui.classNames,
            ...(e.elClasses || []),
          ],
          renderProps: s,
          generatorName: "eventContent",
          customGenerator: n.eventContent,
          defaultGenerator: e.defaultGenerator,
          classNameGenerator: n.eventClassNames,
          didMount: n.eventDidMount,
          willUnmount: n.eventWillUnmount,
        })
      );
    }
    componentDidUpdate(e) {
      this.el && this.props.seg !== e.seg && Jr(this.el, this.props.seg);
    }
  }
  class ws extends s {
    render() {
      var { props: e, context: t } = this,
        n = t["options"],
        r = e["seg"],
        i = r.eventRange["ui"],
        n = ri(
          r,
          n.eventTimeFormat || e.defaultTimeFormat,
          t,
          e.defaultDisplayEventTime,
          e.defaultDisplayEventEnd
        );
      return E(
        Ds,
        Object.assign({}, e, {
          elTag: "a",
          elStyle: {
            borderColor: i.borderColor,
            backgroundColor: i.backgroundColor,
          },
          elAttrs: si(r, t),
          defaultGenerator: Cs,
          timeText: n,
        }),
        (e, t) =>
          E(
            x,
            null,
            E(e, {
              elTag: "div",
              elClasses: ["fc-event-main"],
              elStyle: { color: t.textColor },
            }),
            Boolean(t.isStartResizable) &&
              E("div", {
                className: "fc-event-resizer fc-event-resizer-start",
              }),
            Boolean(t.isEndResizable) &&
              E("div", { className: "fc-event-resizer fc-event-resizer-end" })
          )
      );
    }
  }
  function Cs(e) {
    return E(
      "div",
      { className: "fc-event-main-frame" },
      e.timeText && E("div", { className: "fc-event-time" }, e.timeText),
      E(
        "div",
        { className: "fc-event-title-container" },
        E(
          "div",
          { className: "fc-event-title fc-sticky" },
          e.event.title || E(x, null, " ")
        )
      )
    );
  }
  const Rs = (n) =>
      E(f.Consumer, null, (e) => {
        var t = e["options"],
          e = {
            isAxis: n.isAxis,
            date: e.dateEnv.toDate(n.date),
            view: e.viewApi,
          };
        return E(
          O,
          Object.assign({}, n, {
            elTag: n.elTag || "div",
            renderProps: e,
            generatorName: "nowIndicatorContent",
            customGenerator: t.nowIndicatorContent,
            classNameGenerator: t.nowIndicatorClassNames,
            didMount: t.nowIndicatorDidMount,
            willUnmount: t.nowIndicatorWillUnmount,
          })
        );
      }),
    xs = a({ day: "numeric" });
  class Ts extends s {
    constructor() {
      super(...arguments), (this.refineRenderProps = tn(ks));
    }
    render() {
      var { props: e, context: t } = this,
        n = t["options"],
        r = this.refineRenderProps({
          date: e.date,
          dateProfile: e.dateProfile,
          todayRange: e.todayRange,
          isMonthStart: e.isMonthStart || !1,
          showDayNumber: e.showDayNumber,
          extraRenderProps: e.extraRenderProps,
          viewApi: t.viewApi,
          dateEnv: t.dateEnv,
          monthStartFormat: n.monthStartFormat,
        });
      return E(
        O,
        Object.assign({}, e, {
          elClasses: [...fr(r, t.theme), ...(e.elClasses || [])],
          elAttrs: Object.assign(
            Object.assign({}, e.elAttrs),
            r.isDisabled ? {} : { "data-date": Jt(e.date) }
          ),
          renderProps: r,
          generatorName: "dayCellContent",
          customGenerator: n.dayCellContent,
          defaultGenerator: e.defaultGenerator,
          classNameGenerator: r.isDisabled ? void 0 : n.dayCellClassNames,
          didMount: n.dayCellDidMount,
          willUnmount: n.dayCellWillUnmount,
        })
      );
    }
  }
  function _s(e) {
    return Boolean(e.dayCellContent || Oi("dayCellContent", e));
  }
  function ks(e) {
    var { date: t, dateEnv: n, dateProfile: r, isMonthStart: i } = e,
      r = hr(t, e.todayRange, null, r),
      s = e.showDayNumber ? n.format(t, i ? e.monthStartFormat : xs) : "";
    return Object.assign(
      Object.assign(Object.assign({ date: n.toDate(t), view: e.viewApi }, r), {
        isMonthStart: i,
        dayNumberText: s,
      }),
      e.extraRenderProps
    );
  }
  class Ms extends s {
    render() {
      var e = this["props"],
        t = e["seg"];
      return E(Ds, {
        elTag: "div",
        elClasses: ["fc-bg-event"],
        elStyle: { backgroundColor: t.eventRange.ui.backgroundColor },
        defaultGenerator: Is,
        seg: t,
        timeText: "",
        isDragging: !1,
        isResizing: !1,
        isDateSelecting: !1,
        isSelected: !1,
        isPast: e.isPast,
        isFuture: e.isFuture,
        isToday: e.isToday,
        disableDragging: !0,
        disableResizing: !0,
      });
    }
  }
  function Is(e) {
    var t = e.event["title"];
    return t && E("div", { className: "fc-event-title" }, e.event.title);
  }
  function Os(e) {
    return E("div", { className: "fc-" + e });
  }
  const Ns = (i) =>
    E(f.Consumer, null, (e) => {
      var { dateEnv: e, options: t } = e,
        n = i["date"],
        r = t.weekNumberFormat || i.defaultFormat,
        e = { num: e.computeWeekNumber(n), text: e.format(n, r), date: n };
      return E(
        O,
        Object.assign({}, i, {
          renderProps: e,
          generatorName: "weekNumberContent",
          customGenerator: t.weekNumberContent,
          defaultGenerator: Ps,
          classNameGenerator: t.weekNumberClassNames,
          didMount: t.weekNumberDidMount,
          willUnmount: t.weekNumberWillUnmount,
        })
      );
    });
  function Ps(e) {
    return e.text;
  }
  class Hs extends s {
    constructor() {
      super(...arguments),
        (this.state = { titleId: t() }),
        (this.handleRootEl = (e) => {
          (this.rootEl = e), this.props.elRef && g(this.props.elRef, e);
        }),
        (this.handleDocumentMouseDown = (e) => {
          e = et(e);
          this.rootEl.contains(e) || this.handleCloseClick();
        }),
        (this.handleDocumentKeyDown = (e) => {
          "Escape" === e.key && this.handleCloseClick();
        }),
        (this.handleCloseClick = () => {
          var e = this.props["onClose"];
          e && e();
        });
    }
    render() {
      var { theme: e, options: t } = this.context,
        { props: n, state: r } = this,
        i = ["fc-popover", e.getClass("popover")].concat(
          n.extraClassNames || []
        );
      return Me(
        E(
          "div",
          Object.assign({}, n.extraAttrs, {
            id: n.id,
            className: i.join(" "),
            "aria-labelledby": r.titleId,
            ref: this.handleRootEl,
          }),
          E(
            "div",
            { className: "fc-popover-header " + e.getClass("popoverHeader") },
            E(
              "span",
              { className: "fc-popover-title", id: r.titleId },
              n.title
            ),
            E("span", {
              className: "fc-popover-close " + e.getIconClass("close"),
              title: t.closeHint,
              onClick: this.handleCloseClick,
            })
          ),
          E(
            "div",
            { className: "fc-popover-body " + e.getClass("popoverContent") },
            n.children
          )
        ),
        n.parentEl
      );
    }
    componentDidMount() {
      document.addEventListener("mousedown", this.handleDocumentMouseDown),
        document.addEventListener("keydown", this.handleDocumentKeyDown),
        this.updateSize();
    }
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleDocumentMouseDown),
        document.removeEventListener("keydown", this.handleDocumentKeyDown);
    }
    updateSize() {
      var e,
        t = this.context["isRtl"],
        { alignmentEl: n, alignGridTop: r } = this.props,
        i = this["rootEl"],
        s = (function (e) {
          let t = Cr(e),
            n = e.getBoundingClientRect();
          for (var r of t) {
            r = $n(n, r.getBoundingClientRect());
            if (!r) return null;
            n = r;
          }
          return n;
        })(n);
      s &&
        ((e = i.getBoundingClientRect()),
        (r = (r ? l(n, ".fc-scrollgrid").getBoundingClientRect() : s).top),
        (n = t ? s.right - e.width : s.left),
        (r = Math.max(r, 10)),
        (n = Math.min(n, document.documentElement.clientWidth - 10 - e.width)),
        (n = Math.max(n, 10)),
        (t = i.offsetParent.getBoundingClientRect()),
        $e(i, { top: r - t.top, left: n - t.left }));
    }
  }
  class Bs extends D {
    constructor() {
      super(...arguments),
        (this.handleRootEl = (e) => {
          (this.rootEl = e)
            ? this.context.registerInteractiveComponent(this, {
                el: e,
                useEventCenter: !1,
              })
            : this.context.unregisterInteractiveComponent(this);
        });
    }
    render() {
      let { options: r, dateEnv: e } = this.context,
        i = this["props"],
        { startDate: t, todayRange: n, dateProfile: s } = i,
        o = e.format(t, r.dayPopoverFormat);
      return E(
        Ts,
        { elRef: this.handleRootEl, date: t, dateProfile: s, todayRange: n },
        (e, t, n) =>
          E(
            Hs,
            {
              elRef: n.ref,
              id: i.id,
              title: o,
              extraClassNames: ["fc-more-popover"].concat(n.className || []),
              extraAttrs: n,
              parentEl: i.parentEl,
              alignmentEl: i.alignmentEl,
              alignGridTop: i.alignGridTop,
              onClose: i.onClose,
            },
            _s(r) &&
              E(e, { elTag: "div", elClasses: ["fc-more-popover-misc"] }),
            i.children
          )
      );
    }
    queryHit(e, t, n, r) {
      var { rootEl: i, props: s } = this;
      return 0 <= e && e < n && 0 <= t && t < r
        ? {
            dateProfile: s.dateProfile,
            dateSpan: Object.assign(
              {
                allDay: !s.forceTimed,
                range: { start: s.startDate, end: s.endDate },
              },
              s.extraDateSpan
            ),
            dayEl: i,
            rect: { left: 0, top: 0, right: n, bottom: r },
            layer: 1,
          }
        : null;
    }
  }
  class js extends s {
    constructor() {
      super(...arguments),
        (this.state = { isPopoverOpen: !1, popoverId: t() }),
        (this.handleLinkEl = (e) => {
          (this.linkEl = e), this.props.elRef && g(this.props.elRef, e);
        }),
        (this.handleClick = (e) => {
          let { props: t, context: i } = this,
            n = i.options["moreLinkClick"],
            r = Us(t).start;
          function s(e) {
            var { def: t, instance: n, range: r } = e.eventRange;
            return {
              event: new M(i, t, n),
              start: i.dateEnv.toDate(r.start),
              end: i.dateEnv.toDate(r.end),
              isStart: e.isStart,
              isEnd: e.isEnd,
            };
          }
          (n =
            "function" == typeof n
              ? n({
                  date: r,
                  allDay: Boolean(t.allDayDate),
                  allSegs: t.allSegs.map(s),
                  hiddenSegs: t.hiddenSegs.map(s),
                  jsEvent: e,
                  view: i.viewApi,
                })
              : n) && "popover" !== n
            ? "string" == typeof n && i.calendarApi.zoomTo(r, n)
            : this.setState({ isPopoverOpen: !0 });
        }),
        (this.handlePopoverClose = () => {
          this.setState({ isPopoverOpen: !1 });
        });
    }
    render() {
      let { props: o, state: a } = this;
      return E(f.Consumer, null, (e) => {
        var { viewApi: e, options: t, calendarApi: n } = e,
          r = t["moreLinkText"],
          i = o["moreCnt"],
          s = Us(o),
          n = "function" == typeof r ? r.call(n, i) : `+${i} ` + r,
          r = bt(t.moreLinkHint, [i], n),
          i = { num: i, shortText: "+" + i, text: n, view: e };
        return E(
          x,
          null,
          Boolean(o.moreCnt) &&
            E(
              O,
              {
                elTag: o.elTag || "a",
                elRef: this.handleLinkEl,
                elClasses: [...(o.elClasses || []), "fc-more-link"],
                elStyle: o.elStyle,
                elAttrs: Object.assign(
                  Object.assign(
                    Object.assign({}, o.elAttrs),
                    ot(this.handleClick)
                  ),
                  {
                    title: r,
                    "aria-expanded": a.isPopoverOpen,
                    "aria-controls": a.isPopoverOpen ? a.popoverId : "",
                  }
                ),
                renderProps: i,
                generatorName: "moreLinkContent",
                customGenerator: t.moreLinkContent,
                defaultGenerator: o.defaultGenerator || zs,
                classNameGenerator: t.moreLinkClassNames,
                didMount: t.moreLinkDidMount,
                willUnmount: t.moreLinkWillUnmount,
              },
              o.children
            ),
          a.isPopoverOpen &&
            E(
              Bs,
              {
                id: a.popoverId,
                startDate: s.start,
                endDate: s.end,
                dateProfile: o.dateProfile,
                todayRange: o.todayRange,
                extraDateSpan: o.extraDateSpan,
                parentEl: this.parentEl,
                alignmentEl: o.alignmentElRef
                  ? o.alignmentElRef.current
                  : this.linkEl,
                alignGridTop: o.alignGridTop,
                forceTimed: o.forceTimed,
                onClose: this.handlePopoverClose,
              },
              o.popoverContent()
            )
        );
      });
    }
    componentDidMount() {
      this.updateParentEl();
    }
    componentDidUpdate() {
      this.updateParentEl();
    }
    updateParentEl() {
      this.linkEl && (this.parentEl = l(this.linkEl, ".fc-view-harness"));
    }
  }
  function zs(e) {
    return e.text;
  }
  function Us(e) {
    return e.allDayDate
      ? { start: e.allDayDate, end: u(e.allDayDate, 1) }
      : ((e = e["hiddenSegs"]),
        { start: Ws(e), end: e.reduce(Fs).eventRange.range.end });
  }
  function Ws(e) {
    return e.reduce(Ls).eventRange.range.start;
  }
  function Ls(e, t) {
    return e.eventRange.range.start < t.eventRange.range.start ? e : t;
  }
  function Fs(e, t) {
    return e.eventRange.range.end > t.eventRange.range.end ? e : t;
  }
  class Vs extends s {
    render() {
      let { props: e, context: t } = this,
        n = t["options"],
        r = { view: t.viewApi };
      return E(
        O,
        Object.assign({}, e, {
          elTag: e.elTag || "div",
          elClasses: [...Gs(e.viewSpec), ...(e.elClasses || [])],
          renderProps: r,
          classNameGenerator: n.viewClassNames,
          generatorName: void 0,
          didMount: n.viewDidMount,
          willUnmount: n.viewWillUnmount,
        }),
        () => e.children
      );
    }
  }
  function Gs(e) {
    return [`fc-${e.type}-view`, "fc-view"];
  }
  const Qs = {
    id: String,
    defaultAllDay: Boolean,
    url: String,
    format: String,
    events: n,
    eventDataTransform: n,
    success: n,
    failure: n,
  };
  function qs(e, i, t = Ys(i)) {
    let n;
    if (
      ("string" == typeof e
        ? (n = { url: e })
        : "function" == typeof e || Array.isArray(e)
        ? (n = { events: e })
        : "object" == typeof e && e && (n = e),
      n)
    ) {
      var { refined: t, extra: r } = wn(n, t),
        s = (function (t) {
          var n = i.pluginHooks.eventSourceDefs;
          for (let e = n.length - 1; 0 <= e; --e) {
            var r = n[e].parseMeta(t);
            if (r) return { sourceDefId: e, meta: r };
          }
          return null;
        })(t);
      if (s)
        return {
          _raw: e,
          isFetching: !1,
          latestFetchId: "",
          fetchRange: null,
          defaultAllDay: t.defaultAllDay,
          eventDataTransform: t.eventDataTransform,
          success: t.success,
          failure: t.failure,
          publicId: t.id || "",
          sourceId: c(),
          sourceDefId: s.sourceDefId,
          meta: s.meta,
          ui: Pn(t, i),
          extendedProps: r,
        };
    }
    return null;
  }
  function Ys(e) {
    return Object.assign(
      Object.assign(Object.assign({}, On), Qs),
      e.pluginHooks.eventSourceRefiners
    );
  }
  class Zs {
    getCurrentData() {
      return this.currentDataManager.getCurrentData();
    }
    dispatch(e) {
      this.currentDataManager.dispatch(e);
    }
    get view() {
      return this.getCurrentData().viewApi;
    }
    batchRendering(e) {
      e();
    }
    updateSize() {
      this.trigger("_resize", !0);
    }
    setOption(e, t) {
      this.dispatch({ type: "SET_OPTION", optionName: e, rawOptionValue: t });
    }
    getOption(e) {
      return this.currentDataManager.currentCalendarOptionsInput[e];
    }
    getAvailableLocaleCodes() {
      return Object.keys(this.getCurrentData().availableRawLocales);
    }
    on(e, t) {
      var n = this["currentDataManager"];
      n.currentCalendarOptionsRefiners[e]
        ? n.emitter.on(e, t)
        : console.warn(`Unknown listener name '${e}'`);
    }
    off(e, t) {
      this.currentDataManager.emitter.off(e, t);
    }
    trigger(e, ...t) {
      this.currentDataManager.emitter.trigger(e, ...t);
    }
    changeView(t, n) {
      this.batchRendering(() => {
        var e;
        this.unselect(),
          n
            ? n.start && n.end
              ? (this.dispatch({ type: "CHANGE_VIEW_TYPE", viewType: t }),
                this.dispatch({
                  type: "SET_OPTION",
                  optionName: "visibleRange",
                  rawOptionValue: n,
                }))
              : ((e = this.getCurrentData()["dateEnv"]),
                this.dispatch({
                  type: "CHANGE_VIEW_TYPE",
                  viewType: t,
                  dateMarker: e.createMarker(n),
                }))
            : this.dispatch({ type: "CHANGE_VIEW_TYPE", viewType: t });
      });
    }
    zoomTo(e, t) {
      (t = t || "day"),
        (t = this.getCurrentData().viewSpecs[t] || this.getUnitViewSpec(t)),
        this.unselect(),
        t
          ? this.dispatch({
              type: "CHANGE_VIEW_TYPE",
              viewType: t.type,
              dateMarker: e,
            })
          : this.dispatch({ type: "CHANGE_DATE", dateMarker: e });
    }
    getUnitViewSpec(e) {
      let t,
        n,
        { viewSpecs: r, toolbarConfig: i } = this.getCurrentData(),
        s = [].concat(
          i.header ? i.header.viewsWithButtons : [],
          i.footer ? i.footer.viewsWithButtons : []
        );
      for (var o in r) s.push(o);
      for (t = 0; t < s.length; t += 1)
        if ((n = r[s[t]]) && n.singleUnit === e) return n;
      return null;
    }
    prev() {
      this.unselect(), this.dispatch({ type: "PREV" });
    }
    next() {
      this.unselect(), this.dispatch({ type: "NEXT" });
    }
    prevYear() {
      var e = this.getCurrentData();
      this.unselect(),
        this.dispatch({
          type: "CHANGE_DATE",
          dateMarker: e.dateEnv.addYears(e.currentDate, -1),
        });
    }
    nextYear() {
      var e = this.getCurrentData();
      this.unselect(),
        this.dispatch({
          type: "CHANGE_DATE",
          dateMarker: e.dateEnv.addYears(e.currentDate, 1),
        });
    }
    today() {
      var e = this.getCurrentData();
      this.unselect(),
        this.dispatch({
          type: "CHANGE_DATE",
          dateMarker: Ur(e.calendarOptions.now, e.dateEnv),
        });
    }
    gotoDate(e) {
      var t = this.getCurrentData();
      this.unselect(),
        this.dispatch({
          type: "CHANGE_DATE",
          dateMarker: t.dateEnv.createMarker(e),
        });
    }
    incrementDate(e) {
      var t = this.getCurrentData(),
        e = p(e);
      e &&
        (this.unselect(),
        this.dispatch({
          type: "CHANGE_DATE",
          dateMarker: t.dateEnv.add(t.currentDate, e),
        }));
    }
    getDate() {
      var e = this.getCurrentData();
      return e.dateEnv.toDate(e.currentDate);
    }
    formatDate(e, t) {
      var n = this.getCurrentData()["dateEnv"];
      return n.format(n.createMarker(e), a(t));
    }
    formatRange(e, t, n) {
      var r = this.getCurrentData()["dateEnv"];
      return r.formatRange(r.createMarker(e), r.createMarker(t), a(n), n);
    }
    formatIso(e, t) {
      var n = this.getCurrentData()["dateEnv"];
      return n.formatIso(n.createMarker(e), { omitTime: t });
    }
    select(e, t) {
      (e =
        null == t
          ? null != e.start
            ? e
            : { start: e, end: null }
          : { start: e, end: t }),
        (t = this.getCurrentData()),
        (e = (function (o, e, t) {
          var n = (function (e) {
              let { refined: t, extra: n } = wn(o, oi),
                r = t.start ? e.createMarkerMeta(t.start) : null,
                i = t.end ? e.createMarkerMeta(t.end) : null,
                s = t["allDay"];
              return (
                null == s &&
                  (s = r && r.isTimeUnspecified && (!i || i.isTimeUnspecified)),
                Object.assign(
                  {
                    range: {
                      start: r ? r.marker : null,
                      end: i ? i.marker : null,
                    },
                    allDay: s,
                  },
                  n
                )
              );
            })(e),
            r = n["range"];
          if (!r.start) return null;
          if (!r.end) {
            if (null == t) return null;
            r.end = e.add(r.start, t);
          }
          return n;
        })(e, t.dateEnv, p({ days: 1 })));
      e &&
        (this.dispatch({ type: "SELECT_DATES", selection: e }), Lr(e, null, t));
    }
    unselect(e) {
      var t = this.getCurrentData();
      t.dateSelection &&
        (this.dispatch({ type: "UNSELECT_DATES" }),
        (t = t).emitter.trigger("unselect", {
          jsEvent: e ? e.origEvent : null,
          view: t.viewApi || t.calendarApi.view,
        }));
    }
    addEvent(e, t) {
      if (e instanceof M)
        return (
          (i = e._def),
          (s = e._instance),
          this.getCurrentData().eventStore.defs[i.defId] ||
            (this.dispatch({
              type: "ADD_EVENTS",
              eventStore: Tn({ def: i, instance: s }),
            }),
            this.triggerEventAdd(e)),
          e
        );
      let n,
        r = this.getCurrentData();
      if (t instanceof Qr) n = t.internalEventSource;
      else if ("boolean" == typeof t) t && ([n] = Ot(r.eventSources));
      else if (null != t) {
        var i = this.getEventSourceById(t);
        if (!i)
          return (
            console.warn(`Could not find an event source with ID "${t}"`), null
          );
        n = i.internalEventSource;
      }
      var s = Wn(e, n, r, !1);
      return s
        ? ((t = new M(r, s.def, s.def.recurringDef ? null : s.instance)),
          this.dispatch({ type: "ADD_EVENTS", eventStore: Tn(s) }),
          this.triggerEventAdd(t),
          t)
        : null;
    }
    triggerEventAdd(e) {
      var t = this.getCurrentData()["emitter"];
      t.trigger("eventAdd", {
        event: e,
        relatedEvents: [],
        revert: () => {
          this.dispatch({ type: "REMOVE_EVENTS", eventStore: qr(e) });
        },
      });
    }
    getEventById(e) {
      var t,
        n = this.getCurrentData(),
        { defs: r, instances: i } = n.eventStore;
      for (t in ((e = String(e)), r)) {
        var s = r[t];
        if (s.publicId === e) {
          if (s.recurringDef) return new M(n, s, null);
          for (var o in i) {
            o = i[o];
            if (o.defId === s.defId) return new M(n, s, o);
          }
        }
      }
      return null;
    }
    getEvents() {
      var e = this.getCurrentData();
      return Yr(e.eventStore, e);
    }
    removeAllEvents() {
      this.dispatch({ type: "REMOVE_ALL_EVENTS" });
    }
    getEventSources() {
      var e,
        t = this.getCurrentData(),
        n = t.eventSources,
        r = [];
      for (e in n) r.push(new Qr(t, n[e]));
      return r;
    }
    getEventSourceById(e) {
      var t,
        n = this.getCurrentData(),
        r = n.eventSources;
      for (t in ((e = String(e)), r))
        if (r[t].publicId === e) return new Qr(n, r[t]);
      return null;
    }
    addEventSource(e) {
      var t = this.getCurrentData();
      return e instanceof Qr
        ? (t.eventSources[e.internalEventSource.sourceId] ||
            this.dispatch({
              type: "ADD_EVENT_SOURCES",
              sources: [e.internalEventSource],
            }),
          e)
        : (e = qs(e, t))
        ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [e] }),
          new Qr(t, e))
        : null;
    }
    removeAllEventSources() {
      this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
    }
    refetchEvents() {
      this.dispatch({ type: "FETCH_EVENT_SOURCES", isRefetch: !0 });
    }
    scrollToTime(e) {
      e = p(e);
      e && this.trigger("_scrollRequest", { time: e });
    }
  }
  var Xs = {
      __proto__: null,
      BASE_OPTION_DEFAULTS: S,
      BaseComponent: s,
      BgEvent: Ms,
      CalendarImpl: Zs,
      CalendarRoot: Ti,
      ContentContainer: O,
      CustomRenderingStore: class extends class {
        constructor() {
          this.handlers = [];
        }
        set(e) {
          this.currentValue = e;
          for (var t of this.handlers) t(e);
        }
        subscribe(e) {
          this.handlers.push(e),
            void 0 !== this.currentValue && e(this.currentValue);
        }
      } {
        constructor() {
          super(...arguments), (this.map = new Map());
        }
        handle(e) {
          var t = this["map"];
          let n = !1;
          e.isActive
            ? (t.set(e.id, e), (n = !0))
            : t.has(e.id) && (t.delete(e.id), (n = !0)),
            n && this.set(t);
        }
      },
      DateComponent: D,
      DateEnv: fi,
      DateProfileGenerator: Wr,
      DayCellContainer: Ts,
      DayHeader: Li,
      DaySeriesModel: Vi,
      DayTableModel: Gi,
      DelayedRunner: os,
      ElementDragging: wi,
      ElementScrollController: Mr,
      Emitter: xr,
      EventContainer: Ds,
      EventImpl: M,
      Interaction: Si,
      MoreLinkContainer: js,
      NamedTimeZoneImpl: class {
        constructor(e) {
          this.timeZoneName = e;
        }
      },
      NowIndicatorContainer: Rs,
      NowTimer: Ui,
      PositionCache: Tr,
      RefMap: N,
      ScrollController: kr,
      ScrollResponder: Br,
      Scroller: ls,
      SegHierarchy: gi,
      SimpleScrollGrid: As,
      Slicer: Qi,
      Splitter: sr,
      StandardEvent: ws,
      TableDateCell: Bi,
      TableDowCell: zi,
      Theme: Or,
      ViewContainer: Vs,
      ViewContextType: f,
      WeekNumberContainer: Ns,
      WindowScrollController: Ir,
      addDays: u,
      addDurations: Ct,
      addMs: m,
      addWeeks: zt,
      allowContextMenu: gt,
      allowSelection: ht,
      applyMutationToEventStore: Gr,
      applyStyle: $e,
      asCleanDays: function (e) {
        return e.years || e.months || e.milliseconds ? 0 : e.days;
      },
      asRoughMinutes: function (e) {
        return h(e) / 6e4;
      },
      asRoughMs: h,
      asRoughSeconds: function (e) {
        return h(e) / 1e3;
      },
      binarySearch: Ei,
      buildElAttrs: Ni,
      buildEntryKey: vi,
      buildEventApis: Yr,
      buildEventRangeKey: ii,
      buildIsoString: Xt,
      buildNavLinkAttrs: vr,
      buildSegTimeText: ri,
      collectFromHash: Bt,
      combineEventUis: Hn,
      compareByFieldSpecs: vt,
      compareNumbers: Et,
      compareObjs: Ht,
      computeEarliestSegStart: Ws,
      computeEdges: Ar,
      computeFallbackHeaderFormat: _i,
      computeInnerRect: Dr,
      computeRect: wr,
      computeShrinkWidth: cs,
      computeVisibleDayRange: Yn,
      config: Ci,
      constrainPoint: Kn,
      createDuration: p,
      createEmptyEventStore: function () {
        return { defs: {}, instances: {} };
      },
      createEventInstance: Cn,
      createEventUi: Pn,
      createFormatter: a,
      diffDates: Xn,
      diffDayAndTime: Wt,
      diffDays: o,
      diffPoints: tr,
      diffWeeks: Ut,
      diffWholeDays: Ft,
      diffWholeWeeks: Lt,
      disableCursor: ct,
      elementClosest: l,
      elementMatches: Ze,
      enableCursor: dt,
      eventTupleToStore: Tn,
      filterHash: _,
      findDirectChildren: function (e, t) {
        var n = e instanceof HTMLElement ? [e] : e,
          r = [];
        for (let e = 0; e < n.length; e += 1) {
          var i = n[e].children;
          for (let e = 0; e < i.length; e += 1) {
            var s = i[e];
            (t && !Ze(s, t)) || r.push(s);
          }
        }
        return r;
      },
      findElements: Xe,
      flexibleCompare: mt,
      formatDayString: Jt,
      formatIsoMonthStr: $t,
      formatIsoTimeString: Kt,
      getAllowYScrolling: us,
      getCanVGrowWithinCell: rr,
      getClippingParents: Cr,
      getDateMeta: hr,
      getDayClassNames: fr,
      getDefaultEventEnd: Vr,
      getElSeg: $r,
      getEntrySpanEnd: pi,
      getEventTargetViaRoot: et,
      getIsRtlScrollbarOnLeft: br,
      getRectCenter: er,
      getRelevantEvents: _n,
      getScrollGridClassNames: ms,
      getScrollbarWidths: Er,
      getSectionClassNames: ys,
      getSectionHasLiquidHeight: ds,
      getSegAnchorAttrs: si,
      getSegMeta: I,
      getSlotClassNames: function (e, t) {
        var n = ["fc-slot", "fc-slot-" + jt[e.dow]];
        return (
          e.isDisabled
            ? n.push("fc-slot-disabled")
            : (e.isToday &&
                (n.push("fc-slot-today"), n.push(t.getClass("today"))),
              e.isPast && n.push("fc-slot-past"),
              e.isFuture && n.push("fc-slot-future")),
          n
        );
      },
      getStickyFooterScrollbar: Ss,
      getStickyHeaderDates: Es,
      getUniqueDomId: t,
      greatestDurationDenominator: _t,
      groupIntersectingEntries: mi,
      guid: c,
      hasBgRendering: Xr,
      hasCustomDayCellContent: _s,
      hasShrinkWidth: vs,
      identity: n,
      injectStyles: Ve,
      interactionSettingsStore: Di,
      interactionSettingsToStore: Ai,
      intersectRanges: w,
      intersectRects: $n,
      intersectSpans: yi,
      isArraysEqual: d,
      isColPropsEqual: fs,
      isDateSelectionValid: Ki,
      isDateSpansEqual: ai,
      isInt: St,
      isInteractionValid: $i,
      isMultiDayRange: Zn,
      isPropsEqual: v,
      isPropsValid: ts,
      isValidDate: Yt,
      mapHash: k,
      memoize: b,
      memoizeArraylike: function (s, o, a) {
        let l = [],
          c = [];
        return (e) => {
          let t = l.length,
            n = e.length,
            r = 0;
          for (; r < t; r += 1) {
            var i;
            e[r]
              ? d(l[r], e[r]) ||
                (a && a(c[r]), (i = s.apply(this, e[r])), o && o(i, c[r])) ||
                (c[r] = i)
              : a && a(c[r]);
          }
          for (; r < n; r += 1) c[r] = s.apply(this, e[r]);
          return (l = e), c.splice(n), c;
        };
      },
      memoizeHashlike: function (i, s, o) {
        let a = {},
          l = {};
        return (e) => {
          var t,
            n,
            r = {};
          for (t in e)
            l[t]
              ? d(a[t], e[t])
                ? (r[t] = l[t])
                : (o && o(l[t]),
                  (n = i.apply(this, e[t])),
                  (r[t] = s && s(n, l[t]) ? l[t] : n))
              : (r[t] = i.apply(this, e[t]));
          return (a = e), (l = r);
        };
      },
      memoizeObjArg: tn,
      mergeEventStores: kn,
      multiplyDuration: Rt,
      padStart: yt,
      parseBusinessHours: Qn,
      parseClassNames: In,
      parseDragMeta: xi,
      parseEventDef: Vn,
      parseFieldSpecs: pt,
      parseMarker: hi,
      pointInsideRect: Jn,
      preventContextMenu: ft,
      preventDefault: nt,
      preventSelection: ut,
      rangeContainsMarker: A,
      rangeContainsRange: ur,
      rangesEqual: cr,
      rangesIntersect: dr,
      refineEventDef: Ln,
      refineProps: wn,
      removeElement: Ye,
      removeExact: function (e, t) {
        let n = 0,
          r = 0;
        for (; r < e.length; )
          e[r] === t ? (e.splice(r, 1), (n += 1)) : (r += 1);
        return n;
      },
      renderChunkContent: hs,
      renderFill: Os,
      renderMicroColGroup: gs,
      renderScrollShim: bs,
      requestJson: ss,
      sanitizeShrinkWidth: ps,
      setRef: g,
      sliceEventStore: Zr,
      sortEventSegs: ti,
      startOfDay: y,
      translateRect: function (e, t, n) {
        return {
          left: e.left + t,
          right: e.right + t,
          top: e.top + n,
          bottom: e.bottom + n,
        };
      },
      triggerDateSelect: Lr,
      unpromisify: Rr,
      whenTransitionDone: st,
      wholeDivideDurations: Tt,
    },
    Js = {
      __proto__: null,
      createPortal: Me,
      createContext: Hr,
      flushSync: Nr,
      Component: T,
      Fragment: x,
      cloneElement: function (e, t, n) {
        var r,
          i,
          s,
          o = R({}, e.props);
        for (s in t)
          "key" == s ? (r = t[s]) : "ref" == s ? (i = t[s]) : (o[s] = t[s]);
        return (
          2 < arguments.length &&
            (o.children = 3 < arguments.length ? H.call(arguments, 2) : n),
          G(e.type, o, r || e.key, i || e.ref, null)
        );
      },
      createElement: E,
      createRef: function () {
        return { current: null };
      },
      h: E,
      hydrate: function e(t, n) {
        ae(t, n, e);
      },
      get isValidElement() {
        return j;
      },
      get options() {
        return C;
      },
      render: ae,
      toChildArray: te,
    };
  const $s = [],
    Ks = {
      code: "en",
      week: { dow: 0, doy: 4 },
      direction: "ltr",
      buttonText: {
        prev: "prev",
        next: "next",
        prevYear: "prev year",
        nextYear: "next year",
        year: "year",
        today: "today",
        month: "month",
        week: "week",
        day: "day",
        list: "list",
      },
      weekText: "W",
      weekTextLong: "Week",
      closeHint: "Close",
      timeHint: "Time",
      eventHint: "Event",
      allDayText: "all-day",
      moreLinkText: "more",
      noEventsText: "No events to display",
    },
    eo = Object.assign(Object.assign({}, Ks), {
      buttonHints: {
        prev: "Previous $0",
        next: "Next $0",
        today: (e, t) => ("day" === t ? "Today" : "This " + e),
      },
      viewHint: "$0 view",
      navLinkHint: "Go to $0",
      moreLinkHint: (e) => `Show ${e} more event` + (1 === e ? "" : "s"),
    });
  function to(e) {
    var t,
      n = 0 < e.length ? e[0].code : "en",
      e = $s.concat(e),
      r = { en: eo };
    for (t of e) r[t.code] = t;
    return { map: r, defaultCode: n };
  }
  function no(e, t) {
    return "object" != typeof e || Array.isArray(e)
      ? ((t = t),
        (r = [].concat((n = e) || [])),
        ro(
          n,
          r,
          (function (t, n) {
            for (let e = 0; e < t.length; e += 1) {
              var r = t[e].toLocaleLowerCase().split("-");
              for (let e = r.length; 0 < e; --e) {
                var i = r.slice(0, e).join("-");
                if (n[i]) return n[i];
              }
            }
            return null;
          })(r, t) || eo
        ))
      : ro(e.code, [e.code], e);
    var n, r;
  }
  function ro(e, t, n) {
    var n = Mt([Ks, n], ["buttonText"]),
      r = (delete n.code, n)["week"];
    return (
      delete n.week,
      {
        codeArg: e,
        codes: t,
        week: r,
        simpleNumberFormat: new Intl.NumberFormat(e),
        options: n,
      }
    );
  }
  function P(e) {
    return {
      id: c(),
      name: e.name,
      premiumReleaseDate: e.premiumReleaseDate
        ? new Date(e.premiumReleaseDate)
        : void 0,
      deps: e.deps || [],
      reducers: e.reducers || [],
      isLoadingFuncs: e.isLoadingFuncs || [],
      contextInit: [].concat(e.contextInit || []),
      eventRefiners: e.eventRefiners || {},
      eventDefMemberAdders: e.eventDefMemberAdders || [],
      eventSourceRefiners: e.eventSourceRefiners || {},
      isDraggableTransformers: e.isDraggableTransformers || [],
      eventDragMutationMassagers: e.eventDragMutationMassagers || [],
      eventDefMutationAppliers: e.eventDefMutationAppliers || [],
      dateSelectionTransformers: e.dateSelectionTransformers || [],
      datePointTransforms: e.datePointTransforms || [],
      dateSpanTransforms: e.dateSpanTransforms || [],
      views: e.views || {},
      viewPropsTransformers: e.viewPropsTransformers || [],
      isPropsValid: e.isPropsValid || null,
      externalDefTransforms: e.externalDefTransforms || [],
      viewContainerAppends: e.viewContainerAppends || [],
      eventDropTransformers: e.eventDropTransformers || [],
      componentInteractions: e.componentInteractions || [],
      calendarInteractions: e.calendarInteractions || [],
      themeClasses: e.themeClasses || {},
      eventSourceDefs: e.eventSourceDefs || [],
      cmdFormatter: e.cmdFormatter,
      recurringTypes: e.recurringTypes || [],
      namedTimeZonedImpl: e.namedTimeZonedImpl,
      initialView: e.initialView || "",
      elementDraggingImpl: e.elementDraggingImpl,
      optionChangeHandlers: e.optionChangeHandlers || {},
      scrollGridImpl: e.scrollGridImpl || null,
      listenerRefiners: e.listenerRefiners || {},
      optionRefiners: e.optionRefiners || {},
      propSetHandlers: e.propSetHandlers || {},
    };
  }
  function io() {
    let n,
      r = [],
      i = [];
    return (t, e) => (
      (n && d(t, r) && d(e, i)) ||
        (n = (function (e) {
          let a = {},
            l = {
              premiumReleaseDate: void 0,
              reducers: [],
              isLoadingFuncs: [],
              contextInit: [],
              eventRefiners: {},
              eventDefMemberAdders: [],
              eventSourceRefiners: {},
              isDraggableTransformers: [],
              eventDragMutationMassagers: [],
              eventDefMutationAppliers: [],
              dateSelectionTransformers: [],
              datePointTransforms: [],
              dateSpanTransforms: [],
              views: {},
              viewPropsTransformers: [],
              isPropsValid: null,
              externalDefTransforms: [],
              viewContainerAppends: [],
              eventDropTransformers: [],
              componentInteractions: [],
              calendarInteractions: [],
              themeClasses: {},
              eventSourceDefs: [],
              cmdFormatter: null,
              recurringTypes: [],
              namedTimeZonedImpl: null,
              initialView: "",
              elementDraggingImpl: null,
              optionChangeHandlers: {},
              scrollGridImpl: null,
              listenerRefiners: {},
              optionRefiners: {},
              propSetHandlers: {},
            };
          function c(e) {
            for (var t of e) {
              const e = t.name,
                o = a[e];
              void 0 === o
                ? ((a[e] = t.id),
                  c(t.deps),
                  (s = t),
                  (l = {
                    premiumReleaseDate:
                      ((n = (i = l).premiumReleaseDate),
                      (r = s.premiumReleaseDate),
                      void 0 === n
                        ? r
                        : void 0 === r
                        ? n
                        : new Date(Math.max(n.valueOf(), r.valueOf()))),
                    reducers: i.reducers.concat(s.reducers),
                    isLoadingFuncs: i.isLoadingFuncs.concat(s.isLoadingFuncs),
                    contextInit: i.contextInit.concat(s.contextInit),
                    eventRefiners: Object.assign(
                      Object.assign({}, i.eventRefiners),
                      s.eventRefiners
                    ),
                    eventDefMemberAdders: i.eventDefMemberAdders.concat(
                      s.eventDefMemberAdders
                    ),
                    eventSourceRefiners: Object.assign(
                      Object.assign({}, i.eventSourceRefiners),
                      s.eventSourceRefiners
                    ),
                    isDraggableTransformers: i.isDraggableTransformers.concat(
                      s.isDraggableTransformers
                    ),
                    eventDragMutationMassagers:
                      i.eventDragMutationMassagers.concat(
                        s.eventDragMutationMassagers
                      ),
                    eventDefMutationAppliers: i.eventDefMutationAppliers.concat(
                      s.eventDefMutationAppliers
                    ),
                    dateSelectionTransformers:
                      i.dateSelectionTransformers.concat(
                        s.dateSelectionTransformers
                      ),
                    datePointTransforms: i.datePointTransforms.concat(
                      s.datePointTransforms
                    ),
                    dateSpanTransforms: i.dateSpanTransforms.concat(
                      s.dateSpanTransforms
                    ),
                    views: Object.assign(Object.assign({}, i.views), s.views),
                    viewPropsTransformers: i.viewPropsTransformers.concat(
                      s.viewPropsTransformers
                    ),
                    isPropsValid: s.isPropsValid || i.isPropsValid,
                    externalDefTransforms: i.externalDefTransforms.concat(
                      s.externalDefTransforms
                    ),
                    viewContainerAppends: i.viewContainerAppends.concat(
                      s.viewContainerAppends
                    ),
                    eventDropTransformers: i.eventDropTransformers.concat(
                      s.eventDropTransformers
                    ),
                    calendarInteractions: i.calendarInteractions.concat(
                      s.calendarInteractions
                    ),
                    componentInteractions: i.componentInteractions.concat(
                      s.componentInteractions
                    ),
                    themeClasses: Object.assign(
                      Object.assign({}, i.themeClasses),
                      s.themeClasses
                    ),
                    eventSourceDefs: i.eventSourceDefs.concat(
                      s.eventSourceDefs
                    ),
                    cmdFormatter: s.cmdFormatter || i.cmdFormatter,
                    recurringTypes: i.recurringTypes.concat(s.recurringTypes),
                    namedTimeZonedImpl:
                      s.namedTimeZonedImpl || i.namedTimeZonedImpl,
                    initialView: i.initialView || s.initialView,
                    elementDraggingImpl:
                      i.elementDraggingImpl || s.elementDraggingImpl,
                    optionChangeHandlers: Object.assign(
                      Object.assign({}, i.optionChangeHandlers),
                      s.optionChangeHandlers
                    ),
                    scrollGridImpl: s.scrollGridImpl || i.scrollGridImpl,
                    listenerRefiners: Object.assign(
                      Object.assign({}, i.listenerRefiners),
                      s.listenerRefiners
                    ),
                    optionRefiners: Object.assign(
                      Object.assign({}, i.optionRefiners),
                      s.optionRefiners
                    ),
                    propSetHandlers: Object.assign(
                      Object.assign({}, i.propSetHandlers),
                      s.propSetHandlers
                    ),
                  }))
                : o !== t.id && console.warn(`Duplicate plugin '${e}'`);
            }
            var n, r, i, s;
          }
          return t && c(t), c(e), l;
        })(e)),
      (r = t),
      (i = e),
      n
    );
  }
  class so extends Or {}
  function oo(e, t, n, r) {
    return (
      t[e] ||
      ((n = (function (e, t, n, r) {
        let i = n[e],
          s = r[e],
          o = (e) =>
            i && null !== i[e] ? i[e] : s && null !== s[e] ? s[e] : null,
          a = o("component"),
          l = o("superType"),
          c = null;
        if (l) {
          if (l === e)
            throw new Error(
              "Can't have a custom view type that references itself"
            );
          c = oo(l, t, n, r);
        }
        return (a = !a && c ? c.component : a)
          ? {
              type: e,
              component: a,
              defaults: Object.assign(
                Object.assign({}, c ? c.defaults : {}),
                i ? i.rawOptions : {}
              ),
              overrides: Object.assign(
                Object.assign({}, c ? c.overrides : {}),
                s ? s.rawOptions : {}
              ),
            }
          : null;
      })(e, t, n, r)) && (t[e] = n),
      n)
    );
  }
  function ao(e) {
    return k(e, lo);
  }
  function lo(e) {
    let t = "function" == typeof e ? { component: e } : e,
      n = t["component"];
    return (
      t.content
        ? (n = co(t))
        : !n ||
          n.prototype instanceof s ||
          (n = co(Object.assign(Object.assign({}, t), { content: n }))),
      { superType: t.type, component: n, rawOptions: t }
    );
  }
  function co(n) {
    return (t) =>
      E(f.Consumer, null, (e) =>
        E(O, {
          elTag: "div",
          elClasses: Gs(e.viewSpec),
          renderProps: Object.assign(Object.assign({}, t), {
            nextDayThreshold: e.options.nextDayThreshold,
          }),
          generatorName: void 0,
          customGenerator: n.content,
          classNameGenerator: n.classNames,
          didMount: n.didMount,
          willUnmount: n.willUnmount,
        })
      );
  }
  function uo(e, u, h, f) {
    let t = ao(e),
      g = ao(u.views);
    return k(
      (function (e, t) {
        let n,
          r = {};
        for (n in e) oo(n, r, e, t);
        for (n in t) oo(n, r, e, t);
        return r;
      })(t, g),
      (s) => {
        {
          var o = s,
            a = ((s = g), u),
            l = h,
            c = f;
          let e =
              o.overrides.duration ||
              o.defaults.duration ||
              l.duration ||
              a.duration,
            t = null,
            n = "",
            r = "",
            i = {};
          e &&
            (t = (function (e) {
              let t = JSON.stringify(e),
                n = ho[t];
              return void 0 === n && ((n = p(e)), (ho[t] = n)), n;
            })(e)) &&
            ((d = _t(t)),
            (n = d.unit),
            1 === d.value && ((r = n), (i = s[n] ? s[n].rawOptions : {})));
          var d = (e) => {
              var e = e.buttonText || {},
                t = o.defaults.buttonTextKey;
              return null != t && null != e[t]
                ? e[t]
                : null != e[o.type]
                ? e[o.type]
                : null != e[r]
                ? e[r]
                : null;
            },
            s = (e) => {
              var e = e.buttonHints || {},
                t = o.defaults.buttonTextKey;
              return null != t && null != e[t]
                ? e[t]
                : null != e[o.type]
                ? e[o.type]
                : null != e[r]
                ? e[r]
                : null;
            };
          return {
            type: o.type,
            component: o.component,
            duration: t,
            durationUnit: n,
            singleUnit: r,
            optionDefaults: o.defaults,
            optionOverrides: Object.assign(Object.assign({}, i), o.overrides),
            buttonTextOverride: d(l) || d(a) || o.overrides.buttonText,
            buttonTextDefault: d(c) || o.defaults.buttonText || d(S) || o.type,
            buttonTitleOverride: s(l) || s(a) || o.overrides.buttonHint,
            buttonTitleDefault: s(c) || o.defaults.buttonHint || s(S),
          };
        }
      }
    );
  }
  (so.prototype.classes = {
    root: "fc-theme-standard",
    tableCellShaded: "fc-cell-shaded",
    buttonGroup: "fc-button-group",
    button: "fc-button fc-button-primary",
    buttonActive: "fc-button-active",
  }),
    (so.prototype.baseIconclassName = "fc-icon"),
    (so.prototype.iconClasses = {
      close: "fc-icon-x",
      prev: "fc-icon-chevron-left",
      next: "fc-icon-chevron-right",
      prevYear: "fc-icon-chevrons-left",
      nextYear: "fc-icon-chevrons-right",
    }),
    (so.prototype.rtlIconClasses = {
      prev: "fc-icon-chevron-right",
      next: "fc-icon-chevron-left",
      prevYear: "fc-icon-chevrons-right",
      nextYear: "fc-icon-chevrons-left",
    }),
    (so.prototype.iconOverrideOption = "buttonIcons"),
    (so.prototype.iconOverrideCustomButtonOption = "icon"),
    (so.prototype.iconOverridePrefix = "fc-icon-");
  let ho = {};
  function fo(e) {
    for (var t in e) if (e[t].isFetching) return !0;
    return !1;
  }
  function go(e, t, n, r) {
    let i = {};
    for (var s of t) i[s.sourceId] = s;
    return n && (i = po(i, n, r)), Object.assign(Object.assign({}, e), i);
  }
  function po(e, t, n) {
    return vo(
      e,
      _(e, (e) =>
        yo(e, n)
          ? !n.options.lazyFetching ||
            !e.fetchRange ||
            e.isFetching ||
            t.start < e.fetchRange.start ||
            t.end > e.fetchRange.end
          : !e.latestFetchId
      ),
      t,
      !1,
      n
    );
  }
  function vo(e, t, n, r, i) {
    var s,
      o = {};
    for (s in e) {
      var a = e[s];
      t[s]
        ? (o[s] = (function (n, r, e, i) {
            let { options: s, calendarApi: o } = i,
              t = i.pluginHooks.eventSourceDefs[n.sourceDefId],
              a = c();
            return (
              t.fetch(
                { eventSource: n, range: r, isRefetch: e, context: i },
                (e) => {
                  let t = e["rawEvents"];
                  s.eventSourceSuccess &&
                    (t = s.eventSourceSuccess.call(o, t, e.response) || t),
                    n.success && (t = n.success.call(o, t, e.response) || t),
                    i.dispatch({
                      type: "RECEIVE_EVENTS",
                      sourceId: n.sourceId,
                      fetchId: a,
                      fetchRange: r,
                      rawEvents: t,
                    });
                },
                (e) => {
                  let t = !1;
                  s.eventSourceFailure &&
                    (s.eventSourceFailure.call(o, e), (t = !0)),
                    n.failure && (n.failure(e), (t = !0)),
                    t || console.warn(e.message, e),
                    i.dispatch({
                      type: "RECEIVE_EVENT_ERROR",
                      sourceId: n.sourceId,
                      fetchId: a,
                      fetchRange: r,
                      error: e,
                    });
                }
              ),
              Object.assign(Object.assign({}, n), {
                isFetching: !0,
                latestFetchId: a,
              })
            );
          })(a, n, r, i))
        : (o[s] = a);
    }
    return o;
  }
  function mo(e, t) {
    return _(e, (e) => yo(e, t));
  }
  function yo(e, t) {
    return !t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange;
  }
  function bo(e, t, n, r, i) {
    return {
      header: e.headerToolbar ? Eo(e.headerToolbar, e, t, n, r, i) : null,
      footer: e.footerToolbar ? Eo(e.footerToolbar, e, t, n, r, i) : null,
    };
  }
  function Eo(e, t, n, r, i, s) {
    let o = {},
      a = [],
      l = !1;
    for (var c in e) {
      var d = (function (e, l, t, c, d, u) {
        let h = "rtl" === l.direction,
          f = l.customButtons || {},
          g = t.buttonText || {},
          p = l.buttonText || {},
          v = t.buttonHints || {},
          m = l.buttonHints || {},
          n = e ? e.split(" ") : [],
          y = [],
          b = !1;
        return {
          widgets: n.map((e) =>
            e.split(",").map((t) => {
              if ("title" === t) return (b = !0), { buttonName: t };
              let n, e, r, i, s, o;
              var a;
              return (
                (n = f[t])
                  ? ((r = (e) => {
                      n.click && n.click.call(e.target, e, e.target);
                    }),
                    (i =
                      (i = c.getCustomButtonIconClass(n)) ||
                      c.getIconClass(t, h)) || (s = n.text),
                    (o = n.hint || n.text))
                  : (e = d[t])
                  ? (y.push(t),
                    (r = () => {
                      u.changeView(t);
                    }),
                    (s = e.buttonTextOverride) ||
                      (i = c.getIconClass(t, h)) ||
                      (s = e.buttonTextDefault),
                    (a = e.buttonTextOverride || e.buttonTextDefault),
                    (o = bt(
                      e.buttonTitleOverride ||
                        e.buttonTitleDefault ||
                        l.viewHint,
                      [a, t],
                      a
                    )))
                  : u[t] &&
                    ((r = () => {
                      u[t]();
                    }),
                    (s = g[t]) || (i = c.getIconClass(t, h)) || (s = p[t]),
                    (o =
                      "prevYear" === t || "nextYear" === t
                        ? ((a = "prevYear" === t ? "prev" : "next"),
                          bt(v[a] || m[a], [p.year || "year", "year"], p[t]))
                        : (e) => bt(v[t] || m[t], [p[e] || e, e], p[t]))),
                {
                  buttonName: t,
                  buttonClick: r,
                  buttonIcon: i,
                  buttonText: s,
                  buttonHint: o,
                }
              );
            })
          ),
          viewsWithButtons: y,
          hasTitle: b,
        };
      })(e[c], t, n, r, i, s);
      (o[c] = d.widgets), a.push(...d.viewsWithButtons), (l = l || d.hasTitle);
    }
    return { sectionWidgets: o, viewsWithButtons: a, hasTitle: l };
  }
  class So {
    constructor(e, t, n) {
      (this.type = e), (this.getCurrentData = t), (this.dateEnv = n);
    }
    get calendar() {
      return this.getCurrentData().calendarApi;
    }
    get title() {
      return this.getCurrentData().viewTitle;
    }
    get activeStart() {
      return this.dateEnv.toDate(
        this.getCurrentData().dateProfile.activeRange.start
      );
    }
    get activeEnd() {
      return this.dateEnv.toDate(
        this.getCurrentData().dateProfile.activeRange.end
      );
    }
    get currentStart() {
      return this.dateEnv.toDate(
        this.getCurrentData().dateProfile.currentRange.start
      );
    }
    get currentEnd() {
      return this.dateEnv.toDate(
        this.getCurrentData().dateProfile.currentRange.end
      );
    }
    getOption(e) {
      return this.getCurrentData().options[e];
    }
  }
  function Ao(e, t) {
    var n = Ot(t.getCurrentData().eventSources);
    if (
      1 === n.length &&
      1 === e.length &&
      Array.isArray(n[0]._raw) &&
      Array.isArray(e[0])
    )
      t.dispatch({
        type: "RESET_RAW_EVENTS",
        sourceId: n[0].sourceId,
        rawEvents: e[0],
      });
    else {
      var r,
        i,
        s,
        o = [];
      for (r of e) {
        let t = !1;
        for (let e = 0; e < n.length; e += 1)
          if (n[e]._raw === r) {
            n.splice(e, 1), (t = !0);
            break;
          }
        t || o.push(r);
      }
      for (i of n)
        t.dispatch({ type: "REMOVE_EVENT_SOURCE", sourceId: i.sourceId });
      for (s of o) t.calendarApi.addEventSource(s);
    }
  }
  const Do = [
    P({
      name: "array-event-source",
      eventSourceDefs: [
        {
          ignoreRange: !0,
          parseMeta: (e) => (Array.isArray(e.events) ? e.events : null),
          fetch(e, t) {
            t({ rawEvents: e.eventSource.meta });
          },
        },
      ],
    }),
    P({
      name: "func-event-source",
      eventSourceDefs: [
        {
          parseMeta: (e) => ("function" == typeof e.events ? e.events : null),
          fetch(e, t, n) {
            var r = e.context["dateEnv"];
            Rr(
              e.eventSource.meta.bind(null, li(e.range, r)),
              (e) => t({ rawEvents: e }),
              n
            );
          },
        },
      ],
    }),
    P({
      name: "json-event-source",
      eventSourceRefiners: {
        method: String,
        extraParams: n,
        startParam: String,
        endParam: String,
        timeZoneParam: String,
      },
      eventSourceDefs: [
        {
          parseMeta: (e) =>
            !e.url || ("json" !== e.format && e.format)
              ? null
              : {
                  url: e.url,
                  format: "json",
                  method: (e.method || "GET").toUpperCase(),
                  extraParams: e.extraParams,
                  startParam: e.startParam,
                  endParam: e.endParam,
                  timeZoneParam: e.timeZoneParam,
                },
          fetch(c, n, e) {
            var t = c.eventSource["meta"],
              r = (function (e, t) {
                let n,
                  r,
                  i,
                  s,
                  { dateEnv: o, options: a } = c.context,
                  l = {};
                return (
                  null == (n = e.startParam) && (n = a.startParam),
                  null == (r = e.endParam) && (r = a.endParam),
                  null == (i = e.timeZoneParam) && (i = a.timeZoneParam),
                  (s =
                    "function" == typeof e.extraParams
                      ? e.extraParams()
                      : e.extraParams || {}),
                  Object.assign(l, s),
                  (l[n] = o.formatIso(t.start)),
                  (l[r] = o.formatIso(t.end)),
                  "local" !== o.timeZone && (l[i] = o.timeZone),
                  l
                );
              })(t, c.range);
            ss(t.method, t.url, r).then(([e, t]) => {
              n({ rawEvents: e, response: t });
            }, e);
          },
        },
      ],
    }),
    P({
      name: "simple-recurring-event",
      recurringTypes: [
        {
          parse(n, r) {
            if (
              n.daysOfWeek ||
              n.startTime ||
              n.endTime ||
              n.startRecur ||
              n.endRecur
            ) {
              let e,
                t = {
                  daysOfWeek: n.daysOfWeek || null,
                  startTime: n.startTime || null,
                  endTime: n.endTime || null,
                  startRecur: n.startRecur
                    ? r.createMarker(n.startRecur)
                    : null,
                  endRecur: n.endRecur ? r.createMarker(n.endRecur) : null,
                };
              return (
                !(e = n.duration ? n.duration : e) &&
                  n.startTime &&
                  n.endTime &&
                  ((r = n.endTime),
                  (i = n.startTime),
                  (e = {
                    years: r.years - i.years,
                    months: r.months - i.months,
                    days: r.days - i.days,
                    milliseconds: r.milliseconds - i.milliseconds,
                  })),
                {
                  allDayGuess: Boolean(!n.startTime && !n.endTime),
                  duration: e,
                  typeData: t,
                }
              );
            }
            var i;
            return null;
          },
          expand(i, s, o) {
            var a,
              s = w(s, { start: i.startRecur, end: i.endRecur });
            if (s) {
              var l = i.daysOfWeek,
                c = i.startTime,
                i = s,
                d = o;
              let e = l ? It(l) : null,
                t = y(i.start),
                n = i.end,
                r = [];
              for (; t < n; )
                (e && !e[t.getUTCDay()]) ||
                  ((a = c ? d.add(t, c) : t), r.push(a)),
                  (t = u(t, 1));
              return r;
            }
            return [];
          },
        },
      ],
      eventRefiners: {
        daysOfWeek: n,
        startTime: p,
        endTime: p,
        duration: p,
        startRecur: n,
        endRecur: n,
      },
    }),
    P({
      name: "change-handler",
      optionChangeHandlers: {
        events(e, t) {
          Ao([e], t);
        },
        eventSources: Ao,
      },
    }),
    P({
      name: "misc",
      isLoadingFuncs: [(e) => fo(e.eventSources)],
      propSetHandlers: {
        dateProfile: function (e, t) {
          t.emitter.trigger(
            "datesSet",
            Object.assign(Object.assign({}, li(e.activeRange, t.dateEnv)), {
              view: t.viewApi,
            })
          );
        },
        eventStore: function (e, t) {
          var n = t["emitter"];
          n.hasHandlers("eventsSet") && n.trigger("eventsSet", Yr(e, t));
        },
      },
    }),
  ];
  class wo {
    constructor(e, t) {
      (this.runTaskOption = e),
        (this.drainedOption = t),
        (this.queue = []),
        (this.delayedRunner = new os(this.drain.bind(this)));
    }
    request(e, t) {
      this.queue.push(e), this.delayedRunner.request(t);
    }
    pause(e) {
      this.delayedRunner.pause(e);
    }
    resume(e, t) {
      this.delayedRunner.resume(e, t);
    }
    drain() {
      for (var e = this["queue"]; e.length; ) {
        for (var t, n = []; (t = e.shift()); ) this.runTask(t), n.push(t);
        this.drained(n);
      }
    }
    runTask(e) {
      this.runTaskOption && this.runTaskOption(e);
    }
    drained(e) {
      this.drainedOption && this.drainedOption(e);
    }
  }
  function Co(e, t, n) {
    var r = /^(year|month)$/.test(e.currentRangeUnit)
      ? e.currentRange
      : e.activeRange;
    return n.formatRange(
      r.start,
      r.end,
      a(
        t.titleFormat ||
          ("year" === (n = e.currentRangeUnit)
            ? { year: "numeric" }
            : "month" === n
            ? { year: "numeric", month: "long" }
            : null !== (n = Ft(e.currentRange.start, e.currentRange.end)) &&
              1 < n
            ? { year: "numeric", month: "short", day: "numeric" }
            : { year: "numeric", month: "long", day: "numeric" })
      ),
      {
        isEndExclusive: e.isRangeAllDay,
        defaultSeparator: t.titleRangeSeparator,
      }
    );
  }
  class Ro {
    constructor(e) {
      (this.computeCurrentViewData = b(this._computeCurrentViewData)),
        (this.organizeRawLocales = b(to)),
        (this.buildLocale = b(no)),
        (this.buildPluginHooks = io()),
        (this.buildDateEnv = b(xo)),
        (this.buildTheme = b(To)),
        (this.parseToolbars = b(bo)),
        (this.buildViewSpecs = b(uo)),
        (this.buildDateProfileGenerator = tn(_o)),
        (this.buildViewApi = b(ko)),
        (this.buildViewUiProps = tn(Oo)),
        (this.buildEventUiBySource = b(Mo, v)),
        (this.buildEventUiBases = b(Io)),
        (this.parseContextBusinessHours = tn(Po)),
        (this.buildTitle = b(Co)),
        (this.emitter = new xr()),
        (this.actionRunner = new wo(
          this._handleAction.bind(this),
          this.updateData.bind(this)
        )),
        (this.currentCalendarOptionsInput = {}),
        (this.currentCalendarOptionsRefined = {}),
        (this.currentViewOptionsInput = {}),
        (this.currentViewOptionsRefined = {}),
        (this.currentCalendarOptionsRefiners = {}),
        (this.optionsForRefining = []),
        (this.optionsForHandling = []),
        (this.getCurrentData = () => this.data),
        (this.dispatch = (e) => {
          this.actionRunner.request(e);
        }),
        (this.props = e),
        this.actionRunner.pause();
      var t = {},
        n = this.computeOptionsData(e.optionOverrides, t, e.calendarApi),
        r = n.calendarOptions.initialView || n.pluginHooks.initialView,
        i = this.computeCurrentViewData(r, n, e.optionOverrides, t);
      (e.calendarApi.currentDataManager = this).emitter.setThisContext(
        e.calendarApi
      ),
        this.emitter.setOptions(i.options);
      (u = n.calendarOptions), (d = n.dateEnv);
      let s = null != (c = u.initialDate) ? d.createMarker(c) : Ur(u.now, d),
        o = i.dateProfileGenerator.build(s);
      A(o.activeRange, s) || (s = o.currentRange.start);
      var a,
        l = {
          dateEnv: n.dateEnv,
          options: n.calendarOptions,
          pluginHooks: n.pluginHooks,
          calendarApi: e.calendarApi,
          dispatch: this.dispatch,
          emitter: this.emitter,
          getCurrentData: this.getCurrentData,
        };
      for (a of n.pluginHooks.contextInit) a(l);
      (c = n.calendarOptions), (u = l), (d = (d = o) ? d.activeRange : null);
      var c,
        d,
        u,
        h,
        i = go(
          {},
          (function (e, t) {
            var n,
              r = Ys(t),
              i = [].concat(e.eventSources || []),
              s = [];
            e.initialEvents && i.unshift(e.initialEvents),
              e.events && i.unshift(e.events);
            for (n of i) {
              var o = qs(n, t, r);
              o && s.push(o);
            }
            return s;
          })(c, u),
          d,
          u
        ),
        f = {
          dynamicOptionOverrides: t,
          currentViewType: r,
          currentDate: s,
          dateProfile: o,
          businessHours: this.parseContextBusinessHours(l),
          eventSources: i,
          eventUiBases: {},
          eventStore: { defs: {}, instances: {} },
          renderableEventStore: { defs: {}, instances: {} },
          dateSelection: null,
          eventSelection: "",
          eventDrag: null,
          eventResize: null,
          selectionConfig: this.buildViewUiProps(l).selectionConfig,
        },
        g = Object.assign(Object.assign({}, l), f);
      for (h of n.pluginHooks.reducers) Object.assign(f, h(null, null, g));
      No(f, l) && this.emitter.trigger("loading", !0),
        (this.state = f),
        this.updateData(),
        this.actionRunner.resume();
    }
    resetOptions(e, t) {
      var n = this["props"];
      void 0 === t
        ? (n.optionOverrides = e)
        : ((n.optionOverrides = Object.assign(
            Object.assign({}, n.optionOverrides || {}),
            e
          )),
          this.optionsForRefining.push(...t)),
        (void 0 !== t && !t.length) ||
          this.actionRunner.request({ type: "NOTHING" });
    }
    _handleAction(e) {
      var { props: t, state: n, emitter: r } = this,
        i =
          ((i = n.dynamicOptionOverrides),
          "SET_OPTION" !== (s = e).type
            ? i
            : Object.assign(Object.assign({}, i), {
                [s.optionName]: s.rawOptionValue,
              })),
        s = this.computeOptionsData(t.optionOverrides, i, t.calendarApi),
        o =
          ((o = n.currentViewType),
          (o = "CHANGE_VIEW_TYPE" === e.type ? e.viewType : o)),
        a = this.computeCurrentViewData(o, s, t.optionOverrides, i);
      (t.calendarApi.currentDataManager = this),
        r.setThisContext(t.calendarApi),
        r.setOptions(a.options);
      let l = {
          dateEnv: s.dateEnv,
          options: s.calendarOptions,
          pluginHooks: s.pluginHooks,
          calendarApi: t.calendarApi,
          dispatch: this.dispatch,
          emitter: r,
          getCurrentData: this.getCurrentData,
        },
        { currentDate: c, dateProfile: d } = n;
      this.data &&
        this.data.dateProfileGenerator !== a.dateProfileGenerator &&
        (d = a.dateProfileGenerator.build(c)),
        (c = ((h = c), "CHANGE_DATE" !== e.type ? h : e.dateMarker)),
        (d = (function (e, t, n, r) {
          let i;
          switch (t.type) {
            case "CHANGE_VIEW_TYPE":
              return r.build(t.dateMarker || n);
            case "CHANGE_DATE":
              return r.build(t.dateMarker);
            case "PREV":
              if ((i = r.buildPrev(e, n)).isValid) return i;
              break;
            case "NEXT":
              if ((i = r.buildNext(e, n)).isValid) return i;
          }
          return e;
        })(d, e, c, a.dateProfileGenerator)),
        ("PREV" !== e.type && "NEXT" !== e.type && A(d.currentRange, c)) ||
          (c = d.currentRange.start);
      var u,
        h = (function (e, t, n, r) {
          var i,
            s,
            o,
            a,
            l,
            c,
            d = n ? n.activeRange : null;
          switch (t.type) {
            case "ADD_EVENT_SOURCES":
              return go(e, t.sources, d, r);
            case "REMOVE_EVENT_SOURCE":
              return (c = t.sourceId), _(e, (e) => e.sourceId !== c);
            case "PREV":
            case "NEXT":
            case "CHANGE_DATE":
            case "CHANGE_VIEW_TYPE":
              return n ? po(e, d, r) : e;
            case "FETCH_EVENT_SOURCES":
              return vo(
                e,
                t.sourceIds ? It(t.sourceIds) : mo(e, r),
                d,
                t.isRefetch || !1,
                r
              );
            case "RECEIVE_EVENTS":
            case "RECEIVE_EVENT_ERROR":
              return (
                (i = e),
                (s = t.sourceId),
                (o = t.fetchId),
                (a = t.fetchRange),
                (l = i[s]) && o === l.latestFetchId
                  ? Object.assign(Object.assign({}, i), {
                      [s]: Object.assign(Object.assign({}, l), {
                        isFetching: !1,
                        fetchRange: a,
                      }),
                    })
                  : i
              );
            case "REMOVE_ALL_EVENT_SOURCES":
              return {};
            default:
              return e;
          }
        })(n.eventSources, e, d, l),
        f = (function (e, t, n, r, i) {
          switch (t.type) {
            case "RECEIVE_EVENTS":
              var s = e,
                o = n[t.sourceId],
                a = t.fetchId,
                l = t.fetchRange,
                c = t.rawEvents,
                d = i;
              if (o && a === o.latestFetchId) {
                let e = xn(Yi(c, o, d), o, d);
                return l && (e = Rn(e, l, d)), kn(Ji(s, o.sourceId), e);
              }
              return s;
            case "RESET_RAW_EVENTS":
              var u = e,
                a = n[t.sourceId],
                c = t.rawEvents,
                l = r.activeRange,
                d = i,
                { defIdMap: o, instanceIdMap: s } = (function () {
                  const { defs: e, instances: t } = u,
                    n = {},
                    r = {};
                  for (var i in e) {
                    const t = e[i],
                      r = t["publicId"];
                    r && (n[r] = i);
                  }
                  for (var s in t) {
                    const n = t[s],
                      o = e[n.defId],
                      a = o["publicId"];
                    a && (r[a] = s);
                  }
                  return { defIdMap: n, instanceIdMap: r };
                })();
              return Rn(xn(Yi(c, a, d), a, d, !1, o, s), l, d);
            case "ADD_EVENTS":
              return (
                (b = t.eventStore),
                (E = r ? r.activeRange : null),
                kn(e, (b = E ? Rn(b, E, i) : b))
              );
            case "RESET_EVENTS":
              return t.eventStore;
            case "MERGE_EVENTS":
              return kn(e, t.eventStore);
            case "PREV":
            case "NEXT":
            case "CHANGE_DATE":
            case "CHANGE_VIEW_TYPE":
              return r ? Rn(e, r.activeRange, i) : e;
            case "REMOVE_EVENTS":
              var h,
                f,
                g = t.eventStore,
                { defs: p, instances: v } = e,
                m = {},
                y = {};
              for (h in p) g.defs[h] || (m[h] = p[h]);
              for (f in v) !g.instances[f] && m[v[f].defId] && (y[f] = v[f]);
              return { defs: m, instances: y };
            case "REMOVE_EVENT_SOURCE":
              return Ji(e, t.sourceId);
            case "REMOVE_ALL_EVENT_SOURCES":
              return Mn(e, (e) => !e.sourceId);
            case "REMOVE_ALL_EVENTS":
              return { defs: {}, instances: {} };
            default:
              return e;
          }
          var b, E;
        })(n.eventStore, e, h, d, l),
        a =
          (fo(h) &&
            !a.options.progressiveEventRendering &&
            n.renderableEventStore) ||
          f,
        { eventUiSingleBase: g, selectionConfig: p } = this.buildViewUiProps(l),
        v = this.buildEventUiBySource(h),
        m = {
          dynamicOptionOverrides: i,
          currentViewType: o,
          currentDate: c,
          dateProfile: d,
          eventSources: h,
          eventStore: f,
          renderableEventStore: a,
          selectionConfig: p,
          eventUiBases: this.buildEventUiBases(a.defs, g, v),
          businessHours: this.parseContextBusinessHours(l),
          dateSelection: (function (e, t) {
            switch (t.type) {
              case "UNSELECT_DATES":
                return null;
              case "SELECT_DATES":
                return t.selection;
              default:
                return e;
            }
          })(n.dateSelection, e),
          eventSelection: (function (e, t) {
            switch (t.type) {
              case "UNSELECT_EVENT":
                return "";
              case "SELECT_EVENT":
                return t.eventInstanceId;
              default:
                return e;
            }
          })(n.eventSelection, e),
          eventDrag: (function (e, t) {
            var n;
            switch (t.type) {
              case "UNSET_EVENT_DRAG":
                return null;
              case "SET_EVENT_DRAG":
                return {
                  affectedEvents: (n = t.state).affectedEvents,
                  mutatedEvents: n.mutatedEvents,
                  isEvent: n.isEvent,
                };
              default:
                return e;
            }
          })(n.eventDrag, e),
          eventResize: (function (e, t) {
            var n;
            switch (t.type) {
              case "UNSET_EVENT_RESIZE":
                return null;
              case "SET_EVENT_RESIZE":
                return {
                  affectedEvents: (n = t.state).affectedEvents,
                  mutatedEvents: n.mutatedEvents,
                  isEvent: n.isEvent,
                };
              default:
                return e;
            }
          })(n.eventResize, e),
        },
        y = Object.assign(Object.assign({}, l), m);
      for (u of s.pluginHooks.reducers) Object.assign(m, u(n, e, y));
      (i = No(n, l)), (o = No(m, l));
      !i && o ? r.trigger("loading", !0) : i && !o && r.trigger("loading", !1),
        (this.state = m),
        t.onAction && t.onAction(e);
    }
    updateData() {
      var { props: e, state: t } = this,
        n = this.data,
        r = this.computeOptionsData(
          e.optionOverrides,
          t.dynamicOptionOverrides,
          e.calendarApi
        ),
        i = this.computeCurrentViewData(
          t.currentViewType,
          r,
          e.optionOverrides,
          t.dynamicOptionOverrides
        ),
        s = (this.data = Object.assign(
          Object.assign(
            Object.assign(
              {
                viewTitle: this.buildTitle(t.dateProfile, i.options, r.dateEnv),
                calendarApi: e.calendarApi,
                dispatch: this.dispatch,
                emitter: this.emitter,
                getCurrentData: this.getCurrentData,
              },
              r
            ),
            i
          ),
          t
        )),
        o = r.pluginHooks.optionChangeHandlers,
        a = n && n.calendarOptions,
        l = r.calendarOptions;
      if (a && a !== l)
        for (var c in (a.timeZone !== l.timeZone &&
          ((t.eventSources = s.eventSources =
            (function (e, t, n) {
              t = t ? t.activeRange : null;
              return vo(e, mo(e, n), t, !0, n);
            })(s.eventSources, t.dateProfile, s)),
          (t.eventStore = s.eventStore =
            Xi(s.eventStore, n.dateEnv, s.dateEnv)),
          (t.renderableEventStore = s.renderableEventStore =
            Xi(s.renderableEventStore, n.dateEnv, s.dateEnv))),
        o))
          (-1 === this.optionsForHandling.indexOf(c) && a[c] === l[c]) ||
            o[c](l[c], s);
      (this.optionsForHandling = []), e.onData && e.onData(s);
    }
    computeOptionsData(e, t, n) {
      var r, i, s, o, a;
      return this.optionsForRefining.length ||
        e !== this.stableOptionOverrides ||
        t !== this.stableDynamicOptionOverrides
        ? (({
            refinedOptions: e,
            pluginHooks: t,
            localeDefaults: r,
            availableLocaleData: i,
            extra: s,
          } = this.processRawCalendarOptions(e, t)),
          Ho(s),
          (s = this.buildDateEnv(
            e.timeZone,
            e.locale,
            e.weekNumberCalculation,
            e.firstDay,
            e.weekText,
            t,
            i,
            e.defaultRangeSeparator
          )),
          (o = this.buildViewSpecs(
            t.views,
            this.stableOptionOverrides,
            this.stableDynamicOptionOverrides,
            r
          )),
          (a = this.buildTheme(e, t)),
          (n = this.parseToolbars(e, this.stableOptionOverrides, a, o, n)),
          (this.stableCalendarOptionsData = {
            calendarOptions: e,
            pluginHooks: t,
            dateEnv: s,
            viewSpecs: o,
            theme: a,
            toolbarConfig: n,
            localeDefaults: r,
            availableRawLocales: i.map,
          }))
        : this.stableCalendarOptionsData;
    }
    processRawCalendarOptions(e, t) {
      let { locales: n, locale: r } = Dn([S, e, t]),
        i = this.organizeRawLocales(n),
        s = i.map,
        o = this.buildLocale(r || i.defaultCode, s).options,
        a = this.buildPluginHooks(e.plugins || [], Do),
        l = (this.currentCalendarOptionsRefiners = Object.assign(
          Object.assign(
            Object.assign(Object.assign(Object.assign({}, vn), mn), yn),
            a.listenerRefiners
          ),
          a.optionRefiners
        )),
        c = {},
        d = Dn([S, o, e, t]),
        u = {},
        h = this.currentCalendarOptionsInput,
        f = this.currentCalendarOptionsRefined,
        g = !1;
      for (var p in d)
        -1 === this.optionsForRefining.indexOf(p) &&
        (d[p] === h[p] || (bn[p] && p in h && bn[p](h[p], d[p])))
          ? (u[p] = f[p])
          : l[p]
          ? ((u[p] = l[p](d[p])), (g = !0))
          : (c[p] = h[p]);
      return (
        g &&
          ((this.currentCalendarOptionsInput = d),
          (this.currentCalendarOptionsRefined = u),
          (this.stableOptionOverrides = e),
          (this.stableDynamicOptionOverrides = t)),
        this.optionsForHandling.push(...this.optionsForRefining),
        (this.optionsForRefining = []),
        {
          rawOptions: this.currentCalendarOptionsInput,
          refinedOptions: this.currentCalendarOptionsRefined,
          pluginHooks: a,
          availableLocaleData: i,
          localeDefaults: o,
          extra: c,
        }
      );
    }
    _computeCurrentViewData(e, t, n, r) {
      var i = t.viewSpecs[e];
      if (i)
        return (
          ({ refinedOptions: n, extra: r } = this.processRawViewOptions(
            i,
            t.pluginHooks,
            t.localeDefaults,
            n,
            r
          )),
          Ho(r),
          {
            viewSpec: i,
            options: n,
            dateProfileGenerator: this.buildDateProfileGenerator({
              dateProfileGeneratorClass:
                i.optionDefaults.dateProfileGeneratorClass,
              duration: i.duration,
              durationUnit: i.durationUnit,
              usesMinMaxTime: i.optionDefaults.usesMinMaxTime,
              dateEnv: t.dateEnv,
              calendarApi: this.props.calendarApi,
              slotMinTime: n.slotMinTime,
              slotMaxTime: n.slotMaxTime,
              showNonCurrentDates: n.showNonCurrentDates,
              dayCount: n.dayCount,
              dateAlignment: n.dateAlignment,
              dateIncrement: n.dateIncrement,
              hiddenDays: n.hiddenDays,
              weekends: n.weekends,
              nowInput: n.now,
              validRangeInput: n.validRange,
              visibleRangeInput: n.visibleRange,
              fixedWeekCount: n.fixedWeekCount,
            }),
            viewApi: this.buildViewApi(e, this.getCurrentData, t.dateEnv),
          }
        );
      throw new Error(
        `viewType "${e}" is not available. Please make sure you've loaded all neccessary plugins`
      );
    }
    processRawViewOptions(e, t, n, r, i) {
      let s = Dn([S, e.optionDefaults, n, r, e.optionOverrides, i]),
        o = Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(Object.assign(Object.assign({}, vn), mn), yn),
              An
            ),
            t.listenerRefiners
          ),
          t.optionRefiners
        ),
        a = {},
        l = this.currentViewOptionsInput,
        c = this.currentViewOptionsRefined,
        d = !1,
        u = {};
      for (var h in s)
        s[h] === l[h] || (bn[h] && bn[h](s[h], l[h]))
          ? (a[h] = c[h])
          : (s[h] === this.currentCalendarOptionsInput[h] ||
            (bn[h] && bn[h](s[h], this.currentCalendarOptionsInput[h]))
              ? h in this.currentCalendarOptionsRefined &&
                (a[h] = this.currentCalendarOptionsRefined[h])
              : o[h]
              ? (a[h] = o[h](s[h]))
              : (u[h] = s[h]),
            (d = !0));
      return (
        d &&
          ((this.currentViewOptionsInput = s),
          (this.currentViewOptionsRefined = a)),
        {
          rawOptions: this.currentViewOptionsInput,
          refinedOptions: this.currentViewOptionsRefined,
          extra: u,
        }
      );
    }
  }
  function xo(e, t, n, r, i, s, o, a) {
    t = no(t || o.defaultCode, o.map);
    return new fi({
      calendarSystem: "gregory",
      timeZone: e,
      namedTimeZoneImpl: s.namedTimeZonedImpl,
      locale: t,
      weekNumberCalculation: n,
      firstDay: r,
      weekText: i,
      cmdFormatter: s.cmdFormatter,
      defaultSeparator: a,
    });
  }
  function To(e, t) {
    return new (t.themeClasses[e.themeSystem] || so)(e);
  }
  function _o(e) {
    return new (e.dateProfileGeneratorClass || Wr)(e);
  }
  function ko(e, t, n) {
    return new So(e, t, n);
  }
  function Mo(e) {
    return k(e, (e) => e.ui);
  }
  function Io(e, t, n) {
    var r,
      i = { "": t };
    for (r in e) {
      var s = e[r];
      s.sourceId && n[s.sourceId] && (i[r] = n[s.sourceId]);
    }
    return i;
  }
  function Oo(e) {
    var t = e["options"];
    return {
      eventUiSingleBase: Pn(
        {
          display: t.eventDisplay,
          editable: t.editable,
          startEditable: t.eventStartEditable,
          durationEditable: t.eventDurationEditable,
          constraint: t.eventConstraint,
          overlap: "boolean" == typeof t.eventOverlap ? t.eventOverlap : void 0,
          allow: t.eventAllow,
          backgroundColor: t.eventBackgroundColor,
          borderColor: t.eventBorderColor,
          textColor: t.eventTextColor,
          color: t.eventColor,
        },
        e
      ),
      selectionConfig: Pn(
        {
          constraint: t.selectConstraint,
          overlap:
            "boolean" == typeof t.selectOverlap ? t.selectOverlap : void 0,
          allow: t.selectAllow,
        },
        e
      ),
    };
  }
  function No(e, t) {
    for (var n of t.pluginHooks.isLoadingFuncs) if (n(e)) return !0;
    return !1;
  }
  function Po(e) {
    return Qn(e.options.businessHours, e);
  }
  function Ho(e, t) {
    for (var n in e)
      console.warn(`Unknown option '${n}'` + (t ? ` for view '${t}'` : ""));
  }
  class Bo extends s {
    render() {
      return E(
        "div",
        { className: "fc-toolbar-chunk" },
        ...this.props.widgetGroups.map((e) => this.renderWidgetGroup(e))
      );
    }
    renderWidgetGroup(e) {
      let t = this["props"],
        n = this.context["theme"],
        r = [],
        i = !0;
      for (var s of e) {
        var o,
          a,
          {
            buttonName: s,
            buttonClick: l,
            buttonText: c,
            buttonIcon: d,
            buttonHint: u,
          } = s;
        "title" === s
          ? ((i = !1),
            r.push(
              E("h2", { className: "fc-toolbar-title", id: t.titleId }, t.title)
            ))
          : ((o = s === t.activeButton),
            (a =
              (!t.isTodayEnabled && "today" === s) ||
              (!t.isPrevEnabled && "prev" === s) ||
              (!t.isNextEnabled && "next" === s)),
            (s = [`fc-${s}-button`, n.getClass("button")]),
            o && s.push(n.getClass("buttonActive")),
            r.push(
              E(
                "button",
                {
                  type: "button",
                  title: "function" == typeof u ? u(t.navUnit) : u,
                  disabled: a,
                  "aria-pressed": o,
                  className: s.join(" "),
                  onClick: l,
                },
                c || (d ? E("span", { className: d }) : "")
              )
            ));
      }
      return 1 < r.length
        ? E("div", { className: (i && n.getClass("buttonGroup")) || "" }, ...r)
        : r[0];
    }
  }
  class jo extends s {
    render() {
      let e,
        t,
        { model: n, extraClassName: r } = this.props,
        i = !1,
        s = n.sectionWidgets,
        o = s.center;
      return (
        (e = s.left ? ((i = !0), s.left) : s.start),
        (t = s.right ? ((i = !0), s.right) : s.end),
        E(
          "div",
          {
            className: [r || "", "fc-toolbar", i ? "fc-toolbar-ltr" : ""].join(
              " "
            ),
          },
          this.renderSection("start", e || []),
          this.renderSection("center", o || []),
          this.renderSection("end", t || [])
        )
      );
    }
    renderSection(e, t) {
      var n = this["props"];
      return E(Bo, {
        key: e,
        widgetGroups: t,
        title: n.title,
        navUnit: n.navUnit,
        activeButton: n.activeButton,
        isTodayEnabled: n.isTodayEnabled,
        isPrevEnabled: n.isPrevEnabled,
        isNextEnabled: n.isNextEnabled,
        titleId: n.titleId,
      });
    }
  }
  class zo extends s {
    constructor() {
      super(...arguments),
        (this.state = { availableWidth: null }),
        (this.handleEl = (e) => {
          (this.el = e), g(this.props.elRef, e), this.updateAvailableWidth();
        }),
        (this.handleResize = () => {
          this.updateAvailableWidth();
        });
    }
    render() {
      let { props: e, state: t } = this,
        n = e["aspectRatio"],
        r = [
          "fc-view-harness",
          n || e.liquid || e.height
            ? "fc-view-harness-active"
            : "fc-view-harness-passive",
        ],
        i = "",
        s = "";
      return (
        n
          ? null !== t.availableWidth
            ? (i = t.availableWidth / n)
            : (s = (1 / n) * 100 + "%")
          : (i = e.height || ""),
        E(
          "div",
          {
            "aria-labelledby": e.labeledById,
            ref: this.handleEl,
            className: r.join(" "),
            style: { height: i, paddingBottom: s },
          },
          e.children
        )
      );
    }
    componentDidMount() {
      this.context.addResizeHandler(this.handleResize);
    }
    componentWillUnmount() {
      this.context.removeResizeHandler(this.handleResize);
    }
    updateAvailableWidth() {
      this.el &&
        this.props.aspectRatio &&
        this.setState({ availableWidth: this.el.offsetWidth });
    }
  }
  class Uo extends Si {
    constructor(e) {
      super(e),
        (this.handleSegClick = (e, t) => {
          var n,
            r = this["component"],
            i = r["context"],
            s = $r(t);
          s &&
            r.isValidSegDownEl(e.target) &&
            ((n = (n = l(e.target, ".fc-event-forced-url"))
              ? n.querySelector("a[href]").href
              : ""),
            i.emitter.trigger("eventClick", {
              el: t,
              event: new M(r.context, s.eventRange.def, s.eventRange.instance),
              jsEvent: e,
              view: i.viewApi,
            }),
            n) &&
            !e.defaultPrevented &&
            (window.location.href = n);
        }),
        (this.destroy = rt(e.el, "click", ".fc-event", this.handleSegClick));
    }
  }
  class Wo extends Si {
    constructor(e) {
      super(e),
        (this.handleEventElRemove = (e) => {
          e === this.currentSegEl &&
            this.handleSegLeave(null, this.currentSegEl);
        }),
        (this.handleSegEnter = (e, t) => {
          $r(t) &&
            ((this.currentSegEl = t),
            this.triggerEvent("eventMouseEnter", e, t));
        }),
        (this.handleSegLeave = (e, t) => {
          this.currentSegEl &&
            ((this.currentSegEl = null),
            this.triggerEvent("eventMouseLeave", e, t));
        }),
        (this.removeHoverListeners = (function (e, r, i) {
          let s;
          return rt(e, "mouseover", ".fc-event", (e, n) => {
            if (n !== s) {
              (s = n), r(e, n);
              let t = (e) => {
                (s = null), i(e, n), n.removeEventListener("mouseleave", t);
              };
              n.addEventListener("mouseleave", t);
            }
          });
        })(e.el, this.handleSegEnter, this.handleSegLeave));
    }
    destroy() {
      this.removeHoverListeners();
    }
    triggerEvent(e, t, n) {
      var r = this["component"],
        i = r["context"],
        s = $r(n);
      (t && !r.isValidSegDownEl(t.target)) ||
        i.emitter.trigger(e, {
          el: n,
          event: new M(i, s.eventRange.def, s.eventRange.instance),
          jsEvent: t,
          view: i.viewApi,
        });
    }
  }
  class Lo extends zr {
    constructor() {
      super(...arguments),
        (this.buildViewContext = b(jr)),
        (this.buildViewPropTransformers = b(Vo)),
        (this.buildToolbarProps = b(Fo)),
        (this.headerRef = { current: null }),
        (this.footerRef = { current: null }),
        (this.interactionsStore = {}),
        (this.state = { viewLabelId: t() }),
        (this.registerInteractiveComponent = (e, t) => {
          let n = {
              component: e,
              el: t.el,
              useEventCenter: null == t.useEventCenter || t.useEventCenter,
              isHitComboAllowed: t.isHitComboAllowed || null,
            },
            r = [Uo, Wo]
              .concat(this.props.pluginHooks.componentInteractions)
              .map((e) => new e(n));
          (this.interactionsStore[e.uid] = r), (Di[e.uid] = n);
        }),
        (this.unregisterInteractiveComponent = (e) => {
          var t = this.interactionsStore[e.uid];
          if (t) {
            for (var n of t) n.destroy();
            delete this.interactionsStore[e.uid];
          }
          delete Di[e.uid];
        }),
        (this.resizeRunner = new os(() => {
          this.props.emitter.trigger("_resize", !0),
            this.props.emitter.trigger("windowResize", {
              view: this.props.viewApi,
            });
        })),
        (this.handleWindowResize = (e) => {
          var t = this.props["options"];
          t.handleWindowResize &&
            e.target === window &&
            this.resizeRunner.request(t.windowResizeDelay);
        });
    }
    render() {
      let e,
        t = this["props"],
        { toolbarConfig: n, options: r } = t,
        i = this.buildToolbarProps(
          t.viewSpec,
          t.dateProfile,
          t.dateProfileGenerator,
          t.currentDate,
          Ur(t.options.now, t.dateEnv),
          t.viewTitle
        ),
        s = !1,
        o = "";
      t.isHeightAuto || t.forPrint
        ? (o = "")
        : null != r.height
        ? (s = !0)
        : null != r.contentHeight
        ? (o = r.contentHeight)
        : (e = Math.max(r.aspectRatio, 0.5));
      var a = this.buildViewContext(
          t.viewSpec,
          t.viewApi,
          t.options,
          t.dateProfileGenerator,
          t.dateEnv,
          t.theme,
          t.pluginHooks,
          t.dispatch,
          t.getCurrentData,
          t.emitter,
          t.calendarApi,
          this.registerInteractiveComponent,
          this.unregisterInteractiveComponent
        ),
        l = n.header && n.header.hasTitle ? this.state.viewLabelId : "";
      return E(
        f.Provider,
        { value: a },
        n.header &&
          E(
            jo,
            Object.assign(
              {
                ref: this.headerRef,
                extraClassName: "fc-header-toolbar",
                model: n.header,
                titleId: l,
              },
              i
            )
          ),
        E(
          zo,
          { liquid: s, height: o, aspectRatio: e, labeledById: l },
          this.renderView(t),
          this.buildAppendContent()
        ),
        n.footer &&
          E(
            jo,
            Object.assign(
              {
                ref: this.footerRef,
                extraClassName: "fc-footer-toolbar",
                model: n.footer,
                titleId: "",
              },
              i
            )
          )
      );
    }
    componentDidMount() {
      let t = this["props"];
      (this.calendarInteractions = t.pluginHooks.calendarInteractions.map(
        (e) => new e(t)
      )),
        window.addEventListener("resize", this.handleWindowResize);
      var e,
        n = t.pluginHooks["propSetHandlers"];
      for (e in n) n[e](t[e], t);
    }
    componentDidUpdate(e) {
      var t,
        n = this["props"],
        r = n.pluginHooks["propSetHandlers"];
      for (t in r) n[t] !== e[t] && r[t](n[t], n);
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.handleWindowResize),
        this.resizeRunner.clear();
      for (var e of this.calendarInteractions) e.destroy();
      this.props.emitter.trigger("_unmount");
    }
    buildAppendContent() {
      let t = this["props"];
      return E(x, {}, ...t.pluginHooks.viewContainerAppends.map((e) => e(t)));
    }
    renderView(e) {
      var t,
        n = e["pluginHooks"],
        r = e["viewSpec"],
        i = {
          dateProfile: e.dateProfile,
          businessHours: e.businessHours,
          eventStore: e.renderableEventStore,
          eventUiBases: e.eventUiBases,
          dateSelection: e.dateSelection,
          eventSelection: e.eventSelection,
          eventDrag: e.eventDrag,
          eventResize: e.eventResize,
          isHeightAuto: e.isHeightAuto,
          forPrint: e.forPrint,
        };
      for (t of this.buildViewPropTransformers(n.viewPropsTransformers))
        Object.assign(i, t.transform(i, e));
      return E(r.component, Object.assign({}, i));
    }
  }
  function Fo(e, t, n, r, i, s) {
    var o = n.build(i, void 0, !1),
      a = n.buildPrev(t, r, !1),
      n = n.buildNext(t, r, !1);
    return {
      title: s,
      activeButton: e.type,
      navUnit: e.singleUnit,
      isTodayEnabled: o.isValid && !A(t.currentRange, i),
      isPrevEnabled: a.isValid,
      isNextEnabled: n.isValid,
    };
  }
  function Vo(e) {
    return e.map((e) => new e());
  }
  function Go(e) {
    var t = no(e.locale || "en", to([]).map);
    return new fi(
      Object.assign(
        Object.assign({ timeZone: S.timeZone, calendarSystem: "gregory" }, e),
        { locale: t }
      )
    );
  }
  Ci.touchMouseIgnoreWait = 500;
  let Qo = 0,
    qo = 0,
    Yo = !1;
  class Zo {
    constructor(e) {
      (this.subjectEl = null),
        (this.selector = ""),
        (this.handleSelector = ""),
        (this.shouldIgnoreMove = !1),
        (this.shouldWatchScroll = !0),
        (this.isDragging = !1),
        (this.isTouchDragging = !1),
        (this.wasTouchScroll = !1),
        (this.handleMouseDown = (e) => {
          this.shouldIgnoreMouse() ||
            0 !== e.button ||
            e.ctrlKey ||
            !this.tryStart(e) ||
            ((e = this.createEventFromMouse(e, !0)),
            this.emitter.trigger("pointerdown", e),
            this.initScrollWatch(e),
            this.shouldIgnoreMove ||
              document.addEventListener("mousemove", this.handleMouseMove),
            document.addEventListener("mouseup", this.handleMouseUp));
        }),
        (this.handleMouseMove = (e) => {
          e = this.createEventFromMouse(e);
          this.recordCoords(e), this.emitter.trigger("pointermove", e);
        }),
        (this.handleMouseUp = (e) => {
          document.removeEventListener("mousemove", this.handleMouseMove),
            document.removeEventListener("mouseup", this.handleMouseUp),
            this.emitter.trigger("pointerup", this.createEventFromMouse(e)),
            this.cleanup();
        }),
        (this.handleTouchStart = (e) => {
          var t;
          this.tryStart(e) &&
            ((this.isTouchDragging = !0),
            (t = this.createEventFromTouch(e, !0)),
            this.emitter.trigger("pointerdown", t),
            this.initScrollWatch(t),
            (t = e.target),
            this.shouldIgnoreMove ||
              t.addEventListener("touchmove", this.handleTouchMove),
            t.addEventListener("touchend", this.handleTouchEnd),
            t.addEventListener("touchcancel", this.handleTouchEnd),
            window.addEventListener("scroll", this.handleTouchScroll, !0));
        }),
        (this.handleTouchMove = (e) => {
          e = this.createEventFromTouch(e);
          this.recordCoords(e), this.emitter.trigger("pointermove", e);
        }),
        (this.handleTouchEnd = (e) => {
          var t;
          this.isDragging &&
            ((t = e.target).removeEventListener(
              "touchmove",
              this.handleTouchMove
            ),
            t.removeEventListener("touchend", this.handleTouchEnd),
            t.removeEventListener("touchcancel", this.handleTouchEnd),
            window.removeEventListener("scroll", this.handleTouchScroll, !0),
            this.emitter.trigger("pointerup", this.createEventFromTouch(e)),
            this.cleanup(),
            (this.isTouchDragging = !1),
            (Qo += 1),
            setTimeout(() => {
              --Qo;
            }, Ci.touchMouseIgnoreWait));
        }),
        (this.handleTouchScroll = () => {
          this.wasTouchScroll = !0;
        }),
        (this.handleScroll = (e) => {
          var t, n;
          this.shouldIgnoreMove ||
            ((t = window.pageXOffset - this.prevScrollX + this.prevPageX),
            (n = window.pageYOffset - this.prevScrollY + this.prevPageY),
            this.emitter.trigger("pointermove", {
              origEvent: e,
              isTouch: this.isTouchDragging,
              subjectEl: this.subjectEl,
              pageX: t,
              pageY: n,
              deltaX: t - this.origPageX,
              deltaY: n - this.origPageY,
            }));
        }),
        (this.containerEl = e),
        (this.emitter = new xr()),
        e.addEventListener("mousedown", this.handleMouseDown),
        e.addEventListener("touchstart", this.handleTouchStart, {
          passive: !0,
        }),
        1 === (qo += 1) &&
          window.addEventListener("touchmove", Xo, { passive: !1 });
    }
    destroy() {
      this.containerEl.removeEventListener("mousedown", this.handleMouseDown),
        this.containerEl.removeEventListener(
          "touchstart",
          this.handleTouchStart,
          { passive: !0 }
        ),
        --qo || window.removeEventListener("touchmove", Xo, { passive: !1 });
    }
    tryStart(e) {
      var t = this.querySubjectEl(e),
        e = e.target;
      return !(
        !t ||
        (this.handleSelector && !l(e, this.handleSelector)) ||
        ((this.subjectEl = t),
        (this.isDragging = !0),
        (this.wasTouchScroll = !1))
      );
    }
    cleanup() {
      (Yo = !1),
        (this.isDragging = !1),
        (this.subjectEl = null),
        this.destroyScrollWatch();
    }
    querySubjectEl(e) {
      return this.selector ? l(e.target, this.selector) : this.containerEl;
    }
    shouldIgnoreMouse() {
      return Qo || this.isTouchDragging;
    }
    cancelTouchScroll() {
      this.isDragging && (Yo = !0);
    }
    initScrollWatch(e) {
      this.shouldWatchScroll &&
        (this.recordCoords(e),
        window.addEventListener("scroll", this.handleScroll, !0));
    }
    recordCoords(e) {
      this.shouldWatchScroll &&
        ((this.prevPageX = e.pageX),
        (this.prevPageY = e.pageY),
        (this.prevScrollX = window.pageXOffset),
        (this.prevScrollY = window.pageYOffset));
    }
    destroyScrollWatch() {
      this.shouldWatchScroll &&
        window.removeEventListener("scroll", this.handleScroll, !0);
    }
    createEventFromMouse(e, t) {
      let n = 0,
        r = 0;
      return (
        t
          ? ((this.origPageX = e.pageX), (this.origPageY = e.pageY))
          : ((n = e.pageX - this.origPageX), (r = e.pageY - this.origPageY)),
        {
          origEvent: e,
          isTouch: !1,
          subjectEl: this.subjectEl,
          pageX: e.pageX,
          pageY: e.pageY,
          deltaX: n,
          deltaY: r,
        }
      );
    }
    createEventFromTouch(e, t) {
      let n,
        r,
        i = e.touches,
        s = 0,
        o = 0;
      return (
        (r = (i && i.length ? ((n = i[0].pageX), i[0]) : ((n = e.pageX), e))
          .pageY),
        t
          ? ((this.origPageX = n), (this.origPageY = r))
          : ((s = n - this.origPageX), (o = r - this.origPageY)),
        {
          origEvent: e,
          isTouch: !0,
          subjectEl: this.subjectEl,
          pageX: n,
          pageY: r,
          deltaX: s,
          deltaY: o,
        }
      );
    }
  }
  function Xo(e) {
    Yo && e.preventDefault();
  }
  class Jo {
    constructor() {
      (this.isVisible = !1),
        (this.sourceEl = null),
        (this.mirrorEl = null),
        (this.sourceElRect = null),
        (this.parentNode = document.body),
        (this.zIndex = 9999),
        (this.revertDuration = 0);
    }
    start(e, t, n) {
      (this.sourceEl = e),
        (this.sourceElRect = this.sourceEl.getBoundingClientRect()),
        (this.origScreenX = t - window.pageXOffset),
        (this.origScreenY = n - window.pageYOffset),
        (this.deltaX = 0),
        (this.deltaY = 0),
        this.updateElPosition();
    }
    handleMove(e, t) {
      (this.deltaX = e - window.pageXOffset - this.origScreenX),
        (this.deltaY = t - window.pageYOffset - this.origScreenY),
        this.updateElPosition();
    }
    setIsVisible(e) {
      e
        ? this.isVisible ||
          (this.mirrorEl && (this.mirrorEl.style.display = ""),
          (this.isVisible = e),
          this.updateElPosition())
        : this.isVisible &&
          (this.mirrorEl && (this.mirrorEl.style.display = "none"),
          (this.isVisible = e));
    }
    stop(e, t) {
      var n = () => {
        this.cleanup(), t();
      };
      e &&
      this.mirrorEl &&
      this.isVisible &&
      this.revertDuration &&
      (this.deltaX || this.deltaY)
        ? this.doRevertAnimation(n, this.revertDuration)
        : setTimeout(n, 0);
    }
    doRevertAnimation(e, t) {
      let n = this.mirrorEl,
        r = this.sourceEl.getBoundingClientRect();
      (n.style.transition = "top " + t + "ms,left " + t + "ms"),
        $e(n, { left: r.left, top: r.top }),
        st(n, () => {
          (n.style.transition = ""), e();
        });
    }
    cleanup() {
      this.mirrorEl && (Ye(this.mirrorEl), (this.mirrorEl = null)),
        (this.sourceEl = null);
    }
    updateElPosition() {
      this.sourceEl &&
        this.isVisible &&
        $e(this.getMirrorEl(), {
          left: this.sourceElRect.left + this.deltaX,
          top: this.sourceElRect.top + this.deltaY,
        });
    }
    getMirrorEl() {
      let e = this.sourceElRect,
        t = this.mirrorEl;
      return (
        t ||
          (((t = this.mirrorEl = this.sourceEl.cloneNode(!0)).style.userSelect =
            "none"),
          t.classList.add("fc-event-dragging"),
          $e(t, {
            position: "fixed",
            zIndex: this.zIndex,
            visibility: "",
            boxSizing: "border-box",
            width: e.right - e.left,
            height: e.bottom - e.top,
            right: "auto",
            bottom: "auto",
            margin: 0,
          }),
          this.parentNode.appendChild(t)),
        t
      );
    }
  }
  class $o extends kr {
    constructor(e, t) {
      super(),
        (this.handleScroll = () => {
          (this.scrollTop = this.scrollController.getScrollTop()),
            (this.scrollLeft = this.scrollController.getScrollLeft()),
            this.handleScrollChange();
        }),
        (this.scrollController = e),
        (this.doesListening = t),
        (this.scrollTop = this.origScrollTop = e.getScrollTop()),
        (this.scrollLeft = this.origScrollLeft = e.getScrollLeft()),
        (this.scrollWidth = e.getScrollWidth()),
        (this.scrollHeight = e.getScrollHeight()),
        (this.clientWidth = e.getClientWidth()),
        (this.clientHeight = e.getClientHeight()),
        (this.clientRect = this.computeClientRect()),
        this.doesListening &&
          this.getEventTarget().addEventListener("scroll", this.handleScroll);
    }
    destroy() {
      this.doesListening &&
        this.getEventTarget().removeEventListener("scroll", this.handleScroll);
    }
    getScrollTop() {
      return this.scrollTop;
    }
    getScrollLeft() {
      return this.scrollLeft;
    }
    setScrollTop(e) {
      this.scrollController.setScrollTop(e),
        this.doesListening ||
          ((this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0)),
          this.handleScrollChange());
    }
    setScrollLeft(e) {
      this.scrollController.setScrollLeft(e),
        this.doesListening ||
          ((this.scrollLeft = Math.max(
            Math.min(e, this.getMaxScrollLeft()),
            0
          )),
          this.handleScrollChange());
    }
    getClientWidth() {
      return this.clientWidth;
    }
    getClientHeight() {
      return this.clientHeight;
    }
    getScrollWidth() {
      return this.scrollWidth;
    }
    getScrollHeight() {
      return this.scrollHeight;
    }
    handleScrollChange() {}
  }
  class Ko extends $o {
    constructor(e, t) {
      super(new Mr(e), t);
    }
    getEventTarget() {
      return this.scrollController.el;
    }
    computeClientRect() {
      return Dr(this.scrollController.el);
    }
  }
  class ea extends $o {
    constructor(e) {
      super(new Ir(), e);
    }
    getEventTarget() {
      return window;
    }
    computeClientRect() {
      return {
        left: this.scrollLeft,
        right: this.scrollLeft + this.clientWidth,
        top: this.scrollTop,
        bottom: this.scrollTop + this.clientHeight,
      };
    }
    handleScrollChange() {
      this.clientRect = this.computeClientRect();
    }
  }
  const ta = ("function" == typeof performance ? performance : Date).now;
  class na {
    constructor() {
      (this.isEnabled = !0),
        (this.scrollQuery = [window, ".fc-scroller"]),
        (this.edgeThreshold = 50),
        (this.maxVelocity = 300),
        (this.pointerScreenX = null),
        (this.pointerScreenY = null),
        (this.isAnimating = !1),
        (this.scrollCaches = null),
        (this.everMovedUp = !1),
        (this.everMovedDown = !1),
        (this.everMovedLeft = !1),
        (this.everMovedRight = !1),
        (this.animate = () => {
          var e, t;
          this.isAnimating &&
            ((e = this.computeBestEdge(
              this.pointerScreenX + window.pageXOffset,
              this.pointerScreenY + window.pageYOffset
            ))
              ? ((t = ta()),
                this.handleSide(e, (t - this.msSinceRequest) / 1e3),
                this.requestAnimation(t))
              : (this.isAnimating = !1));
        });
    }
    start(e, t, n) {
      this.isEnabled &&
        ((this.scrollCaches = this.buildCaches(n)),
        (this.pointerScreenX = null),
        (this.pointerScreenY = null),
        (this.everMovedUp = !1),
        (this.everMovedDown = !1),
        (this.everMovedLeft = !1),
        (this.everMovedRight = !1),
        this.handleMove(e, t));
    }
    handleMove(e, t) {
      var n, r;
      this.isEnabled &&
        ((e = e - window.pageXOffset),
        (t = t - window.pageYOffset),
        (n = null === this.pointerScreenY ? 0 : t - this.pointerScreenY),
        (r = null === this.pointerScreenX ? 0 : e - this.pointerScreenX),
        n < 0 ? (this.everMovedUp = !0) : 0 < n && (this.everMovedDown = !0),
        r < 0 ? (this.everMovedLeft = !0) : 0 < r && (this.everMovedRight = !0),
        (this.pointerScreenX = e),
        (this.pointerScreenY = t),
        this.isAnimating ||
          ((this.isAnimating = !0), this.requestAnimation(ta())));
    }
    stop() {
      if (this.isEnabled) {
        this.isAnimating = !1;
        for (var e of this.scrollCaches) e.destroy();
        this.scrollCaches = null;
      }
    }
    requestAnimation(e) {
      (this.msSinceRequest = e), requestAnimationFrame(this.animate);
    }
    handleSide(e, t) {
      let n = e["scrollCache"],
        r = this["edgeThreshold"],
        i = r - e.distance,
        s = ((i * i) / (r * r)) * this.maxVelocity * t,
        o = 1;
      switch (e.name) {
        case "left":
          o = -1;
        case "right":
          n.setScrollLeft(n.getScrollLeft() + s * o);
          break;
        case "top":
          o = -1;
        case "bottom":
          n.setScrollTop(n.getScrollTop() + s * o);
      }
    }
    computeBestEdge(e, t) {
      let n = this["edgeThreshold"],
        r = null,
        i = this.scrollCaches || [];
      for (var s of i) {
        var o = s.clientRect,
          a = e - o.left,
          l = o.right - e,
          c = t - o.top,
          o = o.bottom - t;
        0 <= a &&
          0 <= l &&
          0 <= c &&
          0 <= o &&
          (c <= n &&
            this.everMovedUp &&
            s.canScrollUp() &&
            (!r || r.distance > c) &&
            (r = { scrollCache: s, name: "top", distance: c }),
          o <= n &&
            this.everMovedDown &&
            s.canScrollDown() &&
            (!r || r.distance > o) &&
            (r = { scrollCache: s, name: "bottom", distance: o }),
          a <= n &&
            this.everMovedLeft &&
            s.canScrollLeft() &&
            (!r || r.distance > a) &&
            (r = { scrollCache: s, name: "left", distance: a }),
          l <= n) &&
          this.everMovedRight &&
          s.canScrollRight() &&
          (!r || r.distance > l) &&
          (r = { scrollCache: s, name: "right", distance: l });
      }
      return r;
    }
    buildCaches(e) {
      return this.queryScrollEls(e).map((e) =>
        e === window ? new ea(!1) : new Ko(e, !1)
      );
    }
    queryScrollEls(e) {
      var t,
        n = [];
      for (t of this.scrollQuery)
        "object" == typeof t
          ? n.push(t)
          : n.push(
              ...Array.prototype.slice.call(e.getRootNode().querySelectorAll(t))
            );
      return n;
    }
  }
  class ra extends wi {
    constructor(e, t) {
      super(e),
        (this.containerEl = e),
        (this.delay = null),
        (this.minDistance = 0),
        (this.touchScrollAllowed = !0),
        (this.mirrorNeedsRevert = !1),
        (this.isInteracting = !1),
        (this.isDragging = !1),
        (this.isDelayEnded = !1),
        (this.isDistanceSurpassed = !1),
        (this.delayTimeoutId = null),
        (this.onPointerDown = (e) => {
          this.isDragging ||
            ((this.isInteracting = !0),
            (this.isDelayEnded = !1),
            (this.isDistanceSurpassed = !1),
            ut(document.body),
            ft(document.body),
            e.isTouch || e.origEvent.preventDefault(),
            this.emitter.trigger("pointerdown", e),
            this.isInteracting &&
              !this.pointer.shouldIgnoreMove &&
              (this.mirror.setIsVisible(!1),
              this.mirror.start(e.subjectEl, e.pageX, e.pageY),
              this.startDelay(e),
              this.minDistance || this.handleDistanceSurpassed(e)));
        }),
        (this.onPointerMove = (e) => {
          var t, n, r;
          this.isInteracting &&
            (this.emitter.trigger("pointermove", e),
            this.isDistanceSurpassed ||
              (({ deltaX: n, deltaY: r } = e),
              (t = this.minDistance) * t <= n * n + r * r &&
                this.handleDistanceSurpassed(e)),
            this.isDragging) &&
            ("scroll" !== e.origEvent.type &&
              (this.mirror.handleMove(e.pageX, e.pageY),
              this.autoScroller.handleMove(e.pageX, e.pageY)),
            this.emitter.trigger("dragmove", e));
        }),
        (this.onPointerUp = (e) => {
          this.isInteracting &&
            ((this.isInteracting = !1),
            ht(document.body),
            gt(document.body),
            this.emitter.trigger("pointerup", e),
            this.isDragging && (this.autoScroller.stop(), this.tryStopDrag(e)),
            this.delayTimeoutId) &&
            (clearTimeout(this.delayTimeoutId), (this.delayTimeoutId = null));
        });
      e = this.pointer = new Zo(e);
      e.emitter.on("pointerdown", this.onPointerDown),
        e.emitter.on("pointermove", this.onPointerMove),
        e.emitter.on("pointerup", this.onPointerUp),
        t && (e.selector = t),
        (this.mirror = new Jo()),
        (this.autoScroller = new na());
    }
    destroy() {
      this.pointer.destroy(), this.onPointerUp({});
    }
    startDelay(e) {
      "number" == typeof this.delay
        ? (this.delayTimeoutId = setTimeout(() => {
            (this.delayTimeoutId = null), this.handleDelayEnd(e);
          }, this.delay))
        : this.handleDelayEnd(e);
    }
    handleDelayEnd(e) {
      (this.isDelayEnded = !0), this.tryStartDrag(e);
    }
    handleDistanceSurpassed(e) {
      (this.isDistanceSurpassed = !0), this.tryStartDrag(e);
    }
    tryStartDrag(e) {
      this.isDelayEnded &&
        this.isDistanceSurpassed &&
        ((this.pointer.wasTouchScroll && !this.touchScrollAllowed) ||
          ((this.isDragging = !0),
          (this.mirrorNeedsRevert = !1),
          this.autoScroller.start(e.pageX, e.pageY, this.containerEl),
          this.emitter.trigger("dragstart", e),
          !1 === this.touchScrollAllowed && this.pointer.cancelTouchScroll()));
    }
    tryStopDrag(e) {
      this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e));
    }
    stopDrag(e) {
      (this.isDragging = !1), this.emitter.trigger("dragend", e);
    }
    setIgnoreMove(e) {
      this.pointer.shouldIgnoreMove = e;
    }
    setMirrorIsVisible(e) {
      this.mirror.setIsVisible(e);
    }
    setMirrorNeedsRevert(e) {
      this.mirrorNeedsRevert = e;
    }
    setAutoScrollEnabled(e) {
      this.autoScroller.isEnabled = e;
    }
  }
  class ia {
    constructor(e) {
      (this.origRect = wr(e)),
        (this.scrollCaches = Cr(e).map((e) => new Ko(e, !0)));
    }
    destroy() {
      for (var e of this.scrollCaches) e.destroy();
    }
    computeLeft() {
      let e = this.origRect.left;
      for (var t of this.scrollCaches)
        e += t.origScrollLeft - t.getScrollLeft();
      return e;
    }
    computeTop() {
      let e = this.origRect.top;
      for (var t of this.scrollCaches) e += t.origScrollTop - t.getScrollTop();
      return e;
    }
    isWithinClipping(e, t) {
      var n,
        r = { left: e, top: t };
      for (n of this.scrollCaches)
        if (
          !(function (e) {
            e = e.tagName;
            return "HTML" === e || "BODY" === e;
          })(n.getEventTarget()) &&
          !Jn(r, n.clientRect)
        )
          return !1;
      return !0;
    }
  }
  class sa {
    constructor(e, t) {
      (this.useSubjectCenter = !1),
        (this.requireInitial = !0),
        (this.initialHit = null),
        (this.movingHit = null),
        (this.finalHit = null),
        (this.handlePointerDown = (e) => {
          var t = this["dragging"];
          (this.initialHit = null),
            (this.movingHit = null),
            (this.finalHit = null),
            this.prepareHits(),
            this.processFirstCoord(e),
            this.initialHit || !this.requireInitial
              ? (t.setIgnoreMove(!1), this.emitter.trigger("pointerdown", e))
              : t.setIgnoreMove(!0);
        }),
        (this.handleDragStart = (e) => {
          this.emitter.trigger("dragstart", e), this.handleMove(e, !0);
        }),
        (this.handleDragMove = (e) => {
          this.emitter.trigger("dragmove", e), this.handleMove(e);
        }),
        (this.handlePointerUp = (e) => {
          this.releaseHits(), this.emitter.trigger("pointerup", e);
        }),
        (this.handleDragEnd = (e) => {
          this.movingHit && this.emitter.trigger("hitupdate", null, !0, e),
            (this.finalHit = this.movingHit),
            (this.movingHit = null),
            this.emitter.trigger("dragend", e);
        }),
        (this.droppableStore = t),
        e.emitter.on("pointerdown", this.handlePointerDown),
        e.emitter.on("dragstart", this.handleDragStart),
        e.emitter.on("dragmove", this.handleDragMove),
        e.emitter.on("pointerup", this.handlePointerUp),
        e.emitter.on("dragend", this.handleDragEnd),
        (this.dragging = e),
        (this.emitter = new xr());
    }
    processFirstCoord(e) {
      let t,
        n = { left: e.pageX, top: e.pageY },
        r = n,
        i = e.subjectEl;
      i instanceof HTMLElement && ((t = wr(i)), (r = Kn(r, t)));
      var e = (this.initialHit = this.queryHitForOffset(r.left, r.top));
      e
        ? (this.useSubjectCenter && t && (e = $n(t, e.rect)) && (r = er(e)),
          (this.coordAdjust = tr(r, n)))
        : (this.coordAdjust = { left: 0, top: 0 });
    }
    handleMove(e, t) {
      var n = this.queryHitForOffset(
        e.pageX + this.coordAdjust.left,
        e.pageY + this.coordAdjust.top
      );
      (!t && oa(this.movingHit, n)) ||
        ((this.movingHit = n), this.emitter.trigger("hitupdate", n, !1, e));
    }
    prepareHits() {
      this.offsetTrackers = k(
        this.droppableStore,
        (e) => (e.component.prepareHits(), new ia(e.el))
      );
    }
    releaseHits() {
      var e,
        t = this["offsetTrackers"];
      for (e in t) t[e].destroy();
      this.offsetTrackers = {};
    }
    queryHitForOffset(e, t) {
      let { droppableStore: n, offsetTrackers: r } = this,
        i = null;
      for (var s in n) {
        var o,
          a,
          l,
          c,
          d,
          u = n[s].component,
          h = r[s];
        h &&
          h.isWithinClipping(e, t) &&
          ((o = h.computeLeft()),
          (l = t - (a = h.computeTop())),
          (h = h["origRect"]),
          (c = h.right - h.left),
          (h = h.bottom - h.top),
          0 <= (d = e - o)) &&
          d < c &&
          0 <= l &&
          l < h &&
          (d = u.queryHit(d, l, c, h)) &&
          ur(d.dateProfile.activeRange, d.dateSpan.range) &&
          (!i || d.layer > i.layer) &&
          ((d.componentId = s),
          (d.context = u.context),
          (d.rect.left += o),
          (d.rect.right += o),
          (d.rect.top += a),
          (d.rect.bottom += a),
          (i = d));
      }
      return i;
    }
  }
  function oa(e, t) {
    return (
      (!e && !t) || (Boolean(e) === Boolean(t) && ai(e.dateSpan, t.dateSpan))
    );
  }
  function aa(e, t) {
    var n,
      r,
      i,
      s = {};
    for (n of t.pluginHooks.datePointTransforms) Object.assign(s, n(e, t));
    return (
      Object.assign(s, {
        date: (i = t.dateEnv).toDate((r = e).range.start),
        dateStr: i.formatIso(r.range.start, { omitTime: r.allDay }),
        allDay: r.allDay,
      }),
      s
    );
  }
  class la extends Si {
    constructor(e) {
      super(e),
        (this.subjectEl = null),
        (this.subjectSeg = null),
        (this.isDragging = !1),
        (this.eventRange = null),
        (this.relevantEvents = null),
        (this.receivingContext = null),
        (this.validMutation = null),
        (this.mutatedRelevantEvents = null),
        (this.handlePointerDown = (e) => {
          var t = e.origEvent.target,
            { component: n, dragging: r } = this,
            i = r["mirror"],
            s = n.context["options"],
            o = n.context,
            a =
              ((this.subjectEl = e.subjectEl),
              (this.subjectSeg = $r(e.subjectEl))),
            a = (this.eventRange = a.eventRange).instance.instanceId,
            o =
              ((this.relevantEvents = _n(o.getCurrentData().eventStore, a)),
              (r.minDistance = e.isTouch ? 0 : s.eventDragMinDistance),
              (r.delay =
                e.isTouch && a !== n.props.eventSelection
                  ? (function () {
                      let e = n.context["options"],
                        t = e.eventLongPressDelay;
                      return (t = null == t ? e.longPressDelay : t);
                    })()
                  : null),
              s.fixedMirrorParent
                ? (i.parentNode = s.fixedMirrorParent)
                : (i.parentNode = l(t, ".fc")),
              (i.revertDuration = s.dragRevertDuration),
              n.isValidSegDownEl(t) && !l(t, ".fc-event-resizer"));
          r.setIgnoreMove(!o),
            (this.isDragging =
              o && e.subjectEl.classList.contains("fc-event-draggable"));
        }),
        (this.handleDragStart = (e) => {
          var t = this.component.context,
            n = this.eventRange,
            r = n.instance.instanceId;
          e.isTouch
            ? r !== this.component.props.eventSelection &&
              t.dispatch({ type: "SELECT_EVENT", eventInstanceId: r })
            : t.dispatch({ type: "UNSELECT_EVENT" }),
            this.isDragging &&
              (t.calendarApi.unselect(e),
              t.emitter.trigger("eventDragStart", {
                el: this.subjectEl,
                event: new M(t, n.def, n.instance),
                jsEvent: e.origEvent,
                view: t.viewApi,
              }));
        }),
        (this.handleHitUpdate = (l, c) => {
          if (this.isDragging) {
            let e = this.relevantEvents,
              t = this.hitDragging.initialHit,
              n = this.component.context,
              r = null,
              i = null,
              s = null,
              o = !1,
              a = {
                affectedEvents: e,
                mutatedEvents: { defs: {}, instances: {} },
                isEvent: !0,
              };
            var d;
            l &&
              ((d = (r = l.context).options),
              n === r || (d.editable && d.droppable)
                ? (i = (function (e, t, n) {
                    let r = e.dateSpan,
                      i = t.dateSpan,
                      s = r.range.start,
                      o = i.range.start,
                      a = {};
                    var l,
                      c = Xn(
                        (s =
                          r.allDay !== i.allDay &&
                          ((a.allDay = i.allDay),
                          (a.hasEnd = t.context.options.allDayMaintainDuration),
                          i.allDay)
                            ? y(s)
                            : s),
                        o,
                        e.context.dateEnv,
                        e.componentId === t.componentId ? e.largeUnit : null
                      ),
                      d =
                        (c.milliseconds && (a.allDay = !1),
                        { datesDelta: c, standardProps: a });
                    for (l of n) l(d, e, t);
                    return d;
                  })(
                    t,
                    l,
                    r.getCurrentData().pluginHooks.eventDragMutationMassagers
                  )) &&
                  ((s = Gr(e, r.getCurrentData().eventUiBases, i, r)),
                  (a.mutatedEvents = s),
                  $i(a, l.dateProfile, r) ||
                    ((o = !0),
                    (i = null),
                    (s = null),
                    (a.mutatedEvents = { defs: {}, instances: {} })))
                : (r = null)),
              this.displayDrag(r, a),
              (o ? ct : dt)(),
              c ||
                (n === r && oa(t, l) && (i = null),
                this.dragging.setMirrorNeedsRevert(!i),
                this.dragging.setMirrorIsVisible(
                  !l ||
                    !this.subjectEl
                      .getRootNode()
                      .querySelector(".fc-event-mirror")
                ),
                (this.receivingContext = r),
                (this.validMutation = i),
                (this.mutatedRelevantEvents = s));
          }
        }),
        (this.handlePointerUp = () => {
          this.isDragging || this.cleanup();
        }),
        (this.handleDragEnd = (d) => {
          if (this.isDragging) {
            let e = this.component.context,
              t = e.viewApi,
              { receivingContext: n, validMutation: r } = this,
              i = this.eventRange.def,
              s = this.eventRange.instance,
              o = new M(e, i, s),
              a = this.relevantEvents,
              l = this.mutatedRelevantEvents,
              c = this.hitDragging["finalHit"];
            if (
              (this.clearDrag(),
              e.emitter.trigger("eventDragStop", {
                el: this.subjectEl,
                event: o,
                jsEvent: d.origEvent,
                view: t,
              }),
              r)
            )
              if (n === e) {
                var u,
                  h = new M(
                    e,
                    l.defs[i.defId],
                    s ? l.instances[s.instanceId] : null
                  ),
                  h =
                    (e.dispatch({ type: "MERGE_EVENTS", eventStore: l }),
                    {
                      oldEvent: o,
                      event: h,
                      relatedEvents: Yr(l, e, s),
                      revert() {
                        e.dispatch({ type: "MERGE_EVENTS", eventStore: a });
                      },
                    }),
                  f = {};
                for (u of e.getCurrentData().pluginHooks.eventDropTransformers)
                  Object.assign(f, u(r, e));
                e.emitter.trigger(
                  "eventDrop",
                  Object.assign(Object.assign(Object.assign({}, h), f), {
                    el: d.subjectEl,
                    delta: r.datesDelta,
                    jsEvent: d.origEvent,
                    view: t,
                  })
                ),
                  e.emitter.trigger("eventChange", h);
              } else {
                var g;
                n &&
                  ((h = {
                    event: o,
                    relatedEvents: Yr(a, e, s),
                    revert() {
                      e.dispatch({ type: "MERGE_EVENTS", eventStore: a });
                    },
                  }),
                  e.emitter.trigger(
                    "eventLeave",
                    Object.assign(Object.assign({}, h), {
                      draggedEl: d.subjectEl,
                      view: t,
                    })
                  ),
                  e.dispatch({ type: "REMOVE_EVENTS", eventStore: a }),
                  e.emitter.trigger("eventRemove", h),
                  (h = l.defs[i.defId]),
                  (g = l.instances[s.instanceId]),
                  (h = new M(n, h, g)),
                  n.dispatch({ type: "MERGE_EVENTS", eventStore: l }),
                  (h = {
                    event: h,
                    relatedEvents: Yr(l, n, g),
                    revert() {
                      n.dispatch({ type: "REMOVE_EVENTS", eventStore: l });
                    },
                  }),
                  n.emitter.trigger("eventAdd", h),
                  d.isTouch &&
                    n.dispatch({
                      type: "SELECT_EVENT",
                      eventInstanceId: s.instanceId,
                    }),
                  n.emitter.trigger(
                    "drop",
                    Object.assign(Object.assign({}, aa(c.dateSpan, n)), {
                      draggedEl: d.subjectEl,
                      jsEvent: d.origEvent,
                      view: c.context.viewApi,
                    })
                  ),
                  n.emitter.trigger(
                    "eventReceive",
                    Object.assign(Object.assign({}, h), {
                      draggedEl: d.subjectEl,
                      view: c.context.viewApi,
                    })
                  ));
              }
            else e.emitter.trigger("_noEventDrop");
          }
          this.cleanup();
        });
      var t = this["component"],
        t = t.context["options"],
        n = (this.dragging = new ra(e.el)),
        n =
          ((n.pointer.selector = la.SELECTOR),
          (n.touchScrollAllowed = !1),
          (n.autoScroller.isEnabled = t.dragScroll),
          (this.hitDragging = new sa(this.dragging, Di)));
      (n.useSubjectCenter = e.useEventCenter),
        n.emitter.on("pointerdown", this.handlePointerDown),
        n.emitter.on("dragstart", this.handleDragStart),
        n.emitter.on("hitupdate", this.handleHitUpdate),
        n.emitter.on("pointerup", this.handlePointerUp),
        n.emitter.on("dragend", this.handleDragEnd);
    }
    destroy() {
      this.dragging.destroy();
    }
    displayDrag(e, t) {
      var n = this.component.context,
        r = this.receivingContext;
      r &&
        r !== e &&
        (r === n
          ? r.dispatch({
              type: "SET_EVENT_DRAG",
              state: {
                affectedEvents: t.affectedEvents,
                mutatedEvents: { defs: {}, instances: {} },
                isEvent: !0,
              },
            })
          : r.dispatch({ type: "UNSET_EVENT_DRAG" })),
        e && e.dispatch({ type: "SET_EVENT_DRAG", state: t });
    }
    clearDrag() {
      var e = this.component.context,
        t = this["receivingContext"];
      t && t.dispatch({ type: "UNSET_EVENT_DRAG" }),
        e !== t && e.dispatch({ type: "UNSET_EVENT_DRAG" });
    }
    cleanup() {
      (this.subjectSeg = null),
        (this.isDragging = !1),
        (this.eventRange = null),
        (this.relevantEvents = null),
        (this.receivingContext = null),
        (this.validMutation = null),
        (this.mutatedRelevantEvents = null);
    }
  }
  la.SELECTOR = ".fc-event-draggable, .fc-event-resizable";
  var ca = { fixedMirrorParent: n },
    da = {
      dateClick: n,
      eventDragStart: n,
      eventDragStop: n,
      eventDrop: n,
      eventResizeStart: n,
      eventResizeStop: n,
      eventResize: n,
      drop: n,
      eventReceive: n,
      eventLeave: n,
    };
  class ua {
    constructor(e, t) {
      (this.receivingContext = null),
        (this.droppableEvent = null),
        (this.suppliedDragMeta = null),
        (this.dragMeta = null),
        (this.handleDragStart = (e) => {
          this.dragMeta = this.buildDragMeta(e.subjectEl);
        }),
        (this.handleHitUpdate = (e, t, n) => {
          let r = this.hitDragging["dragging"],
            i = null,
            s = null,
            o = !1,
            a = {
              affectedEvents: { defs: {}, instances: {} },
              mutatedEvents: { defs: {}, instances: {} },
              isEvent: this.dragMeta.create,
            };
          e &&
            ((i = e.context), this.canDropElOnCalendar(n.subjectEl, i)) &&
            ((s = (function (e, t, n) {
              var r,
                i = Object.assign({}, t.leftoverProps);
              for (r of n.pluginHooks.externalDefTransforms)
                Object.assign(i, r(e, t));
              let { refined: s, extra: o } = Ln(i, n),
                a = Vn(
                  s,
                  o,
                  t.sourceId,
                  e.allDay,
                  n.options.forceEventDuration || Boolean(t.duration),
                  n
                ),
                l = e.range.start;
              e.allDay && t.startTime && (l = n.dateEnv.add(l, t.startTime));
              n = t.duration
                ? n.dateEnv.add(l, t.duration)
                : Vr(e.allDay, l, n);
              return { def: a, instance: Cn(a.defId, { start: l, end: n }) };
            })(e.dateSpan, this.dragMeta, i)),
            (a.mutatedEvents = Tn(s)),
            (o = !$i(a, e.dateProfile, i))) &&
            ((a.mutatedEvents = { defs: {}, instances: {} }), (s = null)),
            this.displayDrag(i, a),
            r.setMirrorIsVisible(
              t || !s || !document.querySelector(".fc-event-mirror")
            ),
            (o ? ct : dt)(),
            t ||
              (r.setMirrorNeedsRevert(!s),
              (this.receivingContext = i),
              (this.droppableEvent = s));
        }),
        (this.handleDragEnd = (t) => {
          let { receivingContext: n, droppableEvent: r } = this;
          if ((this.clearDrag(), n && r)) {
            var e = this.hitDragging.finalHit,
              i = e.context.viewApi,
              s = this.dragMeta;
            if (
              (n.emitter.trigger(
                "drop",
                Object.assign(Object.assign({}, aa(e.dateSpan, n)), {
                  draggedEl: t.subjectEl,
                  jsEvent: t.origEvent,
                  view: i,
                })
              ),
              s.create)
            ) {
              let e = Tn(r);
              n.dispatch({ type: "MERGE_EVENTS", eventStore: e }),
                t.isTouch &&
                  n.dispatch({
                    type: "SELECT_EVENT",
                    eventInstanceId: r.instance.instanceId,
                  }),
                n.emitter.trigger("eventReceive", {
                  event: new M(n, r.def, r.instance),
                  relatedEvents: [],
                  revert() {
                    n.dispatch({ type: "REMOVE_EVENTS", eventStore: e });
                  },
                  draggedEl: t.subjectEl,
                  view: i,
                });
            }
          }
          (this.receivingContext = null), (this.droppableEvent = null);
        });
      e = this.hitDragging = new sa(e, Di);
      (e.requireInitial = !1),
        e.emitter.on("dragstart", this.handleDragStart),
        e.emitter.on("hitupdate", this.handleHitUpdate),
        e.emitter.on("dragend", this.handleDragEnd),
        (this.suppliedDragMeta = t);
    }
    buildDragMeta(e) {
      return "object" == typeof this.suppliedDragMeta
        ? xi(this.suppliedDragMeta)
        : "function" == typeof this.suppliedDragMeta
        ? xi(this.suppliedDragMeta(e))
        : ((e = e),
          (t = Ci.dataAttrPrefix),
          xi(
            (e = e.getAttribute("data-" + ((t ? t + "-" : "") + "event")) || "")
              ? JSON.parse(e)
              : { create: !1 }
          ));
      var t;
    }
    displayDrag(e, t) {
      var n = this.receivingContext;
      n && n !== e && n.dispatch({ type: "UNSET_EVENT_DRAG" }),
        e && e.dispatch({ type: "SET_EVENT_DRAG", state: t });
    }
    clearDrag() {
      this.receivingContext &&
        this.receivingContext.dispatch({ type: "UNSET_EVENT_DRAG" });
    }
    canDropElOnCalendar(e, t) {
      var n = t.options.dropAccept;
      return "function" == typeof n
        ? n.call(t.calendarApi, e)
        : "string" != typeof n || !n || Boolean(Ze(e, n));
    }
  }
  Ci.dataAttrPrefix = "";
  class ha extends wi {
    constructor(e) {
      super(e),
        (this.shouldIgnoreMove = !1),
        (this.mirrorSelector = ""),
        (this.currentMirrorEl = null),
        (this.handlePointerDown = (e) => {
          this.emitter.trigger("pointerdown", e),
            this.shouldIgnoreMove || this.emitter.trigger("dragstart", e);
        }),
        (this.handlePointerMove = (e) => {
          this.shouldIgnoreMove || this.emitter.trigger("dragmove", e);
        }),
        (this.handlePointerUp = (e) => {
          this.emitter.trigger("pointerup", e),
            this.shouldIgnoreMove || this.emitter.trigger("dragend", e);
        });
      e = this.pointer = new Zo(e);
      e.emitter.on("pointerdown", this.handlePointerDown),
        e.emitter.on("pointermove", this.handlePointerMove),
        e.emitter.on("pointerup", this.handlePointerUp);
    }
    destroy() {
      this.pointer.destroy();
    }
    setIgnoreMove(e) {
      this.shouldIgnoreMove = e;
    }
    setMirrorIsVisible(e) {
      e
        ? this.currentMirrorEl &&
          ((this.currentMirrorEl.style.visibility = ""),
          (this.currentMirrorEl = null))
        : (e = this.mirrorSelector
            ? document.querySelector(this.mirrorSelector)
            : null) && ((this.currentMirrorEl = e).style.visibility = "hidden");
    }
  }
  ca = P({
    name: "@fullcalendar/interaction",
    componentInteractions: [
      class extends Si {
        constructor(e) {
          super(e),
            (this.handlePointerDown = (e) => {
              var t = this["dragging"],
                e = e.origEvent.target;
              t.setIgnoreMove(!this.component.isValidDateDownEl(e));
            }),
            (this.handleDragEnd = (e) => {
              var t,
                n = this["component"],
                r = this.dragging["pointer"];
              r.wasTouchScroll ||
                (({ initialHit: r, finalHit: t } = this.hitDragging),
                r &&
                  t &&
                  oa(r, t) &&
                  ((t = n["context"]),
                  (n = Object.assign(Object.assign({}, aa(r.dateSpan, t)), {
                    dayEl: r.dayEl,
                    jsEvent: e.origEvent,
                    view: t.viewApi || t.calendarApi.view,
                  })),
                  t.emitter.trigger("dateClick", n)));
            }),
            (this.dragging = new ra(e.el)),
            (this.dragging.autoScroller.isEnabled = !1);
          e = this.hitDragging = new sa(this.dragging, Ai(e));
          e.emitter.on("pointerdown", this.handlePointerDown),
            e.emitter.on("dragend", this.handleDragEnd);
        }
        destroy() {
          this.dragging.destroy();
        }
      },
      class extends Si {
        constructor(e) {
          super(e),
            (this.dragSelection = null),
            (this.handlePointerDown = (e) => {
              var { component: n, dragging: t } = this,
                r = n.context["options"],
                r = r.selectable && n.isValidDateDownEl(e.origEvent.target);
              t.setIgnoreMove(!r),
                (t.delay = e.isTouch
                  ? (function () {
                      let e = n.context["options"],
                        t = e.selectLongPressDelay;
                      return (t = null == t ? e.longPressDelay : t);
                    })()
                  : null);
            }),
            (this.handleDragStart = (e) => {
              this.component.context.calendarApi.unselect(e);
            }),
            (this.handleHitUpdate = (e, t) => {
              let n = this.component["context"],
                r = null,
                i = !1;
              var s;
              e &&
                ((s = this.hitDragging.initialHit),
                ((r =
                  e.componentId === s.componentId &&
                  this.isHitComboAllowed &&
                  !this.isHitComboAllowed(s, e)
                    ? r
                    : (function (e, t, n) {
                        var r,
                          i = e.dateSpan,
                          s = t.dateSpan,
                          s = [
                            i.range.start,
                            i.range.end,
                            s.range.start,
                            s.range.end,
                          ],
                          o = (s.sort(Et), {});
                        for (r of n) {
                          var a = r(e, t);
                          if (!1 === a) return null;
                          a && Object.assign(o, a);
                        }
                        return (
                          (o.range = { start: s[0], end: s[3] }),
                          (o.allDay = i.allDay),
                          o
                        );
                      })(s, e, n.pluginHooks.dateSelectionTransformers)) &&
                  Ki(r, e.dateProfile, n)) ||
                  ((i = !0), (r = null))),
                r
                  ? n.dispatch({ type: "SELECT_DATES", selection: r })
                  : t || n.dispatch({ type: "UNSELECT_DATES" }),
                (i ? ct : dt)(),
                t || (this.dragSelection = r);
            }),
            (this.handlePointerUp = (e) => {
              this.dragSelection &&
                (Lr(this.dragSelection, e, this.component.context),
                (this.dragSelection = null));
            });
          var t = e["component"],
            t = t.context["options"],
            n = (this.dragging = new ra(e.el)),
            n =
              ((n.touchScrollAllowed = !1),
              (n.minDistance = t.selectMinDistance || 0),
              (n.autoScroller.isEnabled = t.dragScroll),
              (this.hitDragging = new sa(this.dragging, Ai(e))));
          n.emitter.on("pointerdown", this.handlePointerDown),
            n.emitter.on("dragstart", this.handleDragStart),
            n.emitter.on("hitupdate", this.handleHitUpdate),
            n.emitter.on("pointerup", this.handlePointerUp);
        }
        destroy() {
          this.dragging.destroy();
        }
      },
      la,
      class extends Si {
        constructor(e) {
          super(e),
            (this.draggingSegEl = null),
            (this.draggingSeg = null),
            (this.eventRange = null),
            (this.relevantEvents = null),
            (this.validMutation = null),
            (this.mutatedRelevantEvents = null),
            (this.handlePointerDown = (e) => {
              var t = this["component"],
                n = $r(this.querySegEl(e)),
                n = (this.eventRange = n.eventRange);
              (this.dragging.minDistance =
                t.context.options.eventDragMinDistance),
                this.dragging.setIgnoreMove(
                  !this.component.isValidSegDownEl(e.origEvent.target) ||
                    (e.isTouch &&
                      this.component.props.eventSelection !==
                        n.instance.instanceId)
                );
            }),
            (this.handleDragStart = (e) => {
              var t = this.component["context"],
                n = this.eventRange,
                r =
                  ((this.relevantEvents = _n(
                    t.getCurrentData().eventStore,
                    this.eventRange.instance.instanceId
                  )),
                  this.querySegEl(e));
              (this.draggingSegEl = r),
                (this.draggingSeg = $r(r)),
                t.calendarApi.unselect(),
                t.emitter.trigger("eventResizeStart", {
                  el: r,
                  event: new M(t, n.def, n.instance),
                  jsEvent: e.origEvent,
                  view: t.viewApi,
                });
            }),
            (this.handleHitUpdate = (e, t, n) => {
              let r = this.component["context"],
                i = this.relevantEvents,
                s = this.hitDragging.initialHit,
                o = this.eventRange.instance,
                a = null,
                l = null,
                c = !1,
                d = {
                  affectedEvents: i,
                  mutatedEvents: { defs: {}, instances: {} },
                  isEvent: !0,
                };
              (a =
                !e ||
                (e.componentId === s.componentId &&
                  this.isHitComboAllowed &&
                  !this.isHitComboAllowed(s, e))
                  ? a
                  : (function (e, t, n, r) {
                      var i = e.context.dateEnv,
                        t = Xn(
                          e.dateSpan.range.start,
                          t.dateSpan.range.start,
                          i,
                          e.largeUnit
                        );
                      if (n) {
                        if (i.add(r.start, t) < r.end) return { startDelta: t };
                      } else if (i.add(r.end, t) > r.start)
                        return { endDelta: t };
                      return null;
                    })(
                      s,
                      e,
                      n.subjectEl.classList.contains("fc-event-resizer-start"),
                      o.range
                    )) &&
                ((l = Gr(i, r.getCurrentData().eventUiBases, a, r)),
                (d.mutatedEvents = l),
                $i(d, e.dateProfile, r) ||
                  ((c = !0), (a = null), (l = null), (d.mutatedEvents = null))),
                l
                  ? r.dispatch({ type: "SET_EVENT_RESIZE", state: d })
                  : r.dispatch({ type: "UNSET_EVENT_RESIZE" }),
                (c ? ct : dt)(),
                t ||
                  (a && oa(s, e) && (a = null),
                  (this.validMutation = a),
                  (this.mutatedRelevantEvents = l));
            }),
            (this.handleDragEnd = (e) => {
              let t = this.component["context"],
                n = this.eventRange.def,
                r = this.eventRange.instance,
                i = new M(t, n, r),
                s = this.relevantEvents,
                o = this.mutatedRelevantEvents;
              var a;
              t.emitter.trigger("eventResizeStop", {
                el: this.draggingSegEl,
                event: i,
                jsEvent: e.origEvent,
                view: t.viewApi,
              }),
                this.validMutation
                  ? ((a = new M(
                      t,
                      o.defs[n.defId],
                      r ? o.instances[r.instanceId] : null
                    )),
                    t.dispatch({ type: "MERGE_EVENTS", eventStore: o }),
                    (a = {
                      oldEvent: i,
                      event: a,
                      relatedEvents: Yr(o, t, r),
                      revert() {
                        t.dispatch({ type: "MERGE_EVENTS", eventStore: s });
                      },
                    }),
                    t.emitter.trigger(
                      "eventResize",
                      Object.assign(Object.assign({}, a), {
                        el: this.draggingSegEl,
                        startDelta: this.validMutation.startDelta || p(0),
                        endDelta: this.validMutation.endDelta || p(0),
                        jsEvent: e.origEvent,
                        view: t.viewApi,
                      })
                    ),
                    t.emitter.trigger("eventChange", a))
                  : t.emitter.trigger("_noEventResize"),
                (this.draggingSeg = null),
                (this.relevantEvents = null),
                (this.validMutation = null);
            });
          var t = e["component"],
            n = (this.dragging = new ra(e.el)),
            n =
              ((n.pointer.selector = ".fc-event-resizer"),
              (n.touchScrollAllowed = !1),
              (n.autoScroller.isEnabled = t.context.options.dragScroll),
              (this.hitDragging = new sa(this.dragging, Ai(e))));
          n.emitter.on("pointerdown", this.handlePointerDown),
            n.emitter.on("dragstart", this.handleDragStart),
            n.emitter.on("hitupdate", this.handleHitUpdate),
            n.emitter.on("dragend", this.handleDragEnd);
        }
        destroy() {
          this.dragging.destroy();
        }
        querySegEl(e) {
          return l(e.subjectEl, ".fc-event");
        }
      },
    ],
    calendarInteractions: [
      class {
        constructor(e) {
          (this.context = e),
            (this.isRecentPointerDateSelect = !1),
            (this.matchesCancel = !1),
            (this.matchesEvent = !1),
            (this.onSelect = (e) => {
              e.jsEvent && (this.isRecentPointerDateSelect = !0);
            }),
            (this.onDocumentPointerDown = (e) => {
              var t = this.context.options.unselectCancel,
                e = et(e.origEvent);
              (this.matchesCancel = !!l(e, t)),
                (this.matchesEvent = !!l(e, la.SELECTOR));
            }),
            (this.onDocumentPointerUp = (e) => {
              var t = this["context"],
                n = this["documentPointer"],
                r = t.getCurrentData();
              n.wasTouchScroll ||
                (r.dateSelection &&
                  !this.isRecentPointerDateSelect &&
                  t.options.unselectAuto &&
                  !this.matchesCancel &&
                  t.calendarApi.unselect(e),
                r.eventSelection &&
                  !this.matchesEvent &&
                  t.dispatch({ type: "UNSELECT_EVENT" })),
                (this.isRecentPointerDateSelect = !1);
            });
          var t = (this.documentPointer = new Zo(document));
          (t.shouldIgnoreMove = !0),
            (t.shouldWatchScroll = !1),
            t.emitter.on("pointerdown", this.onDocumentPointerDown),
            t.emitter.on("pointerup", this.onDocumentPointerUp),
            e.emitter.on("select", this.onSelect);
        }
        destroy() {
          this.context.emitter.off("select", this.onSelect),
            this.documentPointer.destroy();
        }
      },
    ],
    elementDraggingImpl: ra,
    optionRefiners: ca,
    listenerRefiners: da,
  });
  function fa(e, t) {
    var n,
      r = [];
    for (let e = 0; e < t; e += 1) r[e] = [];
    for (n of e) r[n.row].push(n);
    return r;
  }
  function ga(e, t) {
    var n,
      r = [];
    for (let e = 0; e < t; e += 1) r[e] = [];
    for (n of e) r[n.firstCol].push(n);
    return r;
  }
  function pa(t, n) {
    var r = [];
    if (t) {
      for (let e = 0; e < n; e += 1)
        r[e] = {
          affectedInstances: t.affectedInstances,
          isEvent: t.isEvent,
          segs: [],
        };
      for (var e of t.segs) r[e.row].segs.push(e);
    } else for (let e = 0; e < n; e += 1) r[e] = null;
    return r;
  }
  Ve(
    ':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}'
  );
  const va = a({
    hour: "numeric",
    minute: "2-digit",
    omitZeroMinute: !0,
    meridiem: "narrow",
  });
  function ma(e) {
    var t = e.eventRange.ui["display"];
    return (
      "list-item" === t ||
      ("auto" === t &&
        !e.eventRange.def.allDay &&
        e.firstCol === e.lastCol &&
        e.isStart &&
        e.isEnd)
    );
  }
  class ya extends s {
    render() {
      var e = this["props"];
      return E(
        ws,
        Object.assign({}, e, {
          elClasses: [
            "fc-daygrid-event",
            "fc-daygrid-block-event",
            "fc-h-event",
          ],
          defaultTimeFormat: va,
          defaultDisplayEventEnd: e.defaultDisplayEventEnd,
          disableResizing: !e.seg.eventRange.def.allDay,
        })
      );
    }
  }
  class ba extends s {
    render() {
      var { props: e, context: t } = this,
        n = t["options"],
        r = e["seg"],
        r = ri(r, n.eventTimeFormat || va, t, !0, e.defaultDisplayEventEnd);
      return E(
        Ds,
        Object.assign({}, e, {
          elTag: "a",
          elClasses: ["fc-daygrid-event", "fc-daygrid-dot-event"],
          elAttrs: si(e.seg, t),
          defaultGenerator: Ea,
          timeText: r,
          isResizing: !1,
          isDateSelecting: !1,
        })
      );
    }
  }
  function Ea(e) {
    return E(
      x,
      null,
      E("div", {
        className: "fc-daygrid-event-dot",
        style: { borderColor: e.borderColor || e.backgroundColor },
      }),
      e.timeText && E("div", { className: "fc-event-time" }, e.timeText),
      E(
        "div",
        { className: "fc-event-title" },
        e.event.title || E(x, null, " ")
      )
    );
  }
  class Sa extends s {
    constructor() {
      super(...arguments), (this.compileSegs = b(Aa));
    }
    render() {
      let r = this["props"],
        { allSegs: e, invisibleSegs: t } = this.compileSegs(r.singlePlacements);
      return E(js, {
        elClasses: ["fc-daygrid-more-link"],
        dateProfile: r.dateProfile,
        todayRange: r.todayRange,
        allDayDate: r.allDayDate,
        moreCnt: r.moreCnt,
        allSegs: e,
        hiddenSegs: t,
        alignmentElRef: r.alignmentElRef,
        alignGridTop: r.alignGridTop,
        extraDateSpan: r.extraDateSpan,
        popoverContent: () => {
          let n =
            (r.eventDrag ? r.eventDrag.affectedInstances : null) ||
            (r.eventResize ? r.eventResize.affectedInstances : null) ||
            {};
          return E(
            x,
            null,
            e.map((e) => {
              var t = e.eventRange.instance.instanceId;
              return E(
                "div",
                {
                  className: "fc-daygrid-event-harness",
                  key: t,
                  style: { visibility: n[t] ? "hidden" : "" },
                },
                ma(e)
                  ? E(
                      ba,
                      Object.assign(
                        {
                          seg: e,
                          isDragging: !1,
                          isSelected: t === r.eventSelection,
                          defaultDisplayEventEnd: !1,
                        },
                        I(e, r.todayRange)
                      )
                    )
                  : E(
                      ya,
                      Object.assign(
                        {
                          seg: e,
                          isDragging: !1,
                          isResizing: !1,
                          isDateSelecting: !1,
                          isSelected: t === r.eventSelection,
                          defaultDisplayEventEnd: !1,
                        },
                        I(e, r.todayRange)
                      )
                    )
              );
            })
          );
        },
      });
    }
  }
  function Aa(e) {
    var t,
      n = [],
      r = [];
    for (t of e) n.push(t.seg), t.isVisible || r.push(t.seg);
    return { allSegs: n, invisibleSegs: r };
  }
  const Da = a({ week: "narrow" });
  class wa extends D {
    constructor() {
      super(...arguments),
        (this.rootElRef = { current: null }),
        (this.state = { dayNumberId: t() }),
        (this.handleRootEl = (e) => {
          g(this.rootElRef, e), g(this.props.elRef, e);
        });
    }
    render() {
      let { context: n, props: r, state: i, rootElRef: s } = this,
        { options: o, dateEnv: e } = n,
        { date: a, dateProfile: t } = r;
      const l =
        r.showDayNumber &&
        (function (e, t, n) {
          var { start: t, end: r } = t,
            i = m(r, -1),
            s = n.getYear(t),
            o = n.getMonth(t),
            a = n.getYear(i),
            i = n.getMonth(i);
          return (
            !(s === a && o === i) &&
            Boolean(
              e.valueOf() === t.valueOf() ||
                (1 === n.getDay(e) && e.valueOf() < r.valueOf())
            )
          );
        })(a, t.currentRange, e);
      return E(
        Ts,
        {
          elTag: "td",
          elRef: this.handleRootEl,
          elClasses: ["fc-daygrid-day", ...(r.extraClassNames || [])],
          elAttrs: Object.assign(
            Object.assign(
              Object.assign({}, r.extraDataAttrs),
              r.showDayNumber ? { "aria-labelledby": i.dayNumberId } : {}
            ),
            { role: "gridcell" }
          ),
          defaultGenerator: Ca,
          date: a,
          dateProfile: t,
          todayRange: r.todayRange,
          showDayNumber: r.showDayNumber,
          isMonthStart: l,
          extraRenderProps: r.extraRenderProps,
        },
        (e, t) =>
          E(
            "div",
            {
              ref: r.innerElRef,
              className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
              style: { minHeight: r.minHeight },
            },
            r.showWeekNumber &&
              E(Ns, {
                elTag: "a",
                elClasses: ["fc-daygrid-week-number"],
                elAttrs: vr(n, a, "week"),
                date: a,
                defaultFormat: Da,
              }),
            !t.isDisabled && (r.showDayNumber || _s(o) || r.forceDayTop)
              ? E(
                  "div",
                  { className: "fc-daygrid-day-top" },
                  E(e, {
                    elTag: "a",
                    elClasses: [
                      "fc-daygrid-day-number",
                      l && "fc-daygrid-month-start",
                    ],
                    elAttrs: Object.assign(Object.assign({}, vr(n, a)), {
                      id: i.dayNumberId,
                    }),
                  })
                )
              : r.showDayNumber
              ? E(
                  "div",
                  {
                    className: "fc-daygrid-day-top",
                    style: { visibility: "hidden" },
                  },
                  E("a", { className: "fc-daygrid-day-number" }, " ")
                )
              : void 0,
            E(
              "div",
              { className: "fc-daygrid-day-events", ref: r.fgContentElRef },
              r.fgContent,
              E(
                "div",
                {
                  className: "fc-daygrid-day-bottom",
                  style: { marginTop: r.moreMarginTop },
                },
                E(Sa, {
                  allDayDate: a,
                  singlePlacements: r.singlePlacements,
                  moreCnt: r.moreCnt,
                  alignmentElRef: s,
                  alignGridTop: !r.showDayNumber,
                  extraDateSpan: r.extraDateSpan,
                  dateProfile: r.dateProfile,
                  eventSelection: r.eventSelection,
                  eventDrag: r.eventDrag,
                  eventResize: r.eventResize,
                  todayRange: r.todayRange,
                })
              )
            ),
            E("div", { className: "fc-daygrid-day-bg" }, r.bgContent)
          )
      );
    }
  }
  function Ca(e) {
    return e.dayNumberText || E(x, null, " ");
  }
  function Ra(e, t, n, r) {
    var i, s;
    return e.firstCol === t && e.lastCol === n - 1
      ? e
      : ((r = w((s = (i = e.eventRange).range), {
          start: r[t].date,
          end: u(r[n - 1].date, 1),
        })),
        Object.assign(Object.assign({}, e), {
          firstCol: t,
          lastCol: n - 1,
          eventRange: {
            def: i.def,
            ui: Object.assign(Object.assign({}, i.ui), {
              durationEditable: !1,
            }),
            instance: i.instance,
            range: r,
          },
          isStart: e.isStart && r.start.valueOf() === s.start.valueOf(),
          isEnd: e.isEnd && r.end.valueOf() === s.end.valueOf(),
        }));
  }
  class xa extends gi {
    constructor() {
      super(...arguments), (this.hiddenConsumes = !1), (this.forceHidden = {});
    }
    addSegs(e) {
      var e = super.addSegs(e),
        t = this["entriesByLevel"],
        n = (e) => !this.forceHidden[vi(e)];
      for (let e = 0; e < t.length; e += 1) t[e] = t[e].filter(n);
      return e;
    }
    handleInvalidInsertion(e, t, n) {
      var { entriesByLevel: r, forceHidden: i } = this,
        { touchingEntry: s, touchingLevel: o, touchingLateral: a } = e;
      if (this.hiddenConsumes && s) {
        const e = vi(s);
        if (!i[e])
          if (this.allowReslicing) {
            const e = Object.assign(Object.assign({}, s), {
              span: yi(s.span, t.span),
            });
            (i[vi(e)] = !0), (r[o][a] = e), this.splitEntry(s, t, n);
          } else (i[e] = !0), n.push(s);
      }
      return super.handleInvalidInsertion(e, t, n);
    }
  }
  class Ta extends D {
    constructor() {
      super(...arguments),
        (this.cellElRefs = new N()),
        (this.frameElRefs = new N()),
        (this.fgElRefs = new N()),
        (this.segHarnessRefs = new N()),
        (this.rootElRef = { current: null }),
        (this.state = {
          framePositions: null,
          maxContentHeight: null,
          eventInstanceHeights: {},
        }),
        (this.handleResize = (e) => {
          e && this.updateSizing(!0);
        });
    }
    render() {
      let { props: i, state: e, context: t } = this,
        n = t["options"],
        r = i.cells.length,
        s = ga(i.businessHourSegs, r),
        o = ga(i.bgEventSegs, r),
        a = ga(this.getHighlightSegs(), r),
        l = ga(this.getMirrorSegs(), r),
        {
          singleColPlacements: c,
          multiColPlacements: d,
          moreCnts: u,
          moreMarginTops: h,
        } = (function (t, e, n, r, i, s, o) {
          var a,
            l,
            c = new xa(),
            d =
              ((c.allowReslicing = !0),
              (c.strictOrder = r),
              !0 === e || !0 === n
                ? ((c.maxCoord = s), (c.hiddenConsumes = !0))
                : "number" == typeof e
                ? (c.maxStackCnt = e)
                : "number" == typeof n &&
                  ((c.maxStackCnt = n), (c.hiddenConsumes = !0)),
              []),
            u = [];
          for (let e = 0; e < t.length; e += 1) {
            var h = t[e],
              f = h.eventRange.instance["instanceId"],
              f = i[f];
            null != f
              ? d.push({
                  index: e,
                  thickness: f,
                  span: { start: h.firstCol, end: h.lastCol + 1 },
                })
              : u.push(h);
          }
          let g = c.addSegs(d),
            y = c.toRects(),
            {
              singleColPlacements: p,
              multiColPlacements: v,
              leftoverMargins: m,
            } = (function (s, o) {
              var a = (function (e, t) {
                  var n,
                    r = [];
                  for (let e = 0; e < t; e += 1) r.push([]);
                  for (n of e)
                    for (let e = n.span.start; e < n.span.end; e += 1)
                      r[e].push(n);
                  return r;
                })(y, o.length),
                l = [],
                c = [],
                d = [];
              for (let i = 0; i < o.length; i += 1) {
                let e = a[i],
                  t = [],
                  n = 0,
                  r = 0;
                for (var u of e) {
                  var h = s[u.index];
                  t.push({
                    seg: Ra(h, i, i + 1, o),
                    isVisible: !0,
                    isAbsolute: !1,
                    absoluteTop: u.levelCoord,
                    marginTop: u.levelCoord - n,
                  }),
                    (n = u.levelCoord + u.thickness);
                }
                var f,
                  g = [];
                (n = 0), (r = 0);
                for (f of e) {
                  var p = s[f.index],
                    v = 1 < f.span.end - f.span.start,
                    m = f.span.start === i;
                  (r += f.levelCoord - n),
                    (n = f.levelCoord + f.thickness),
                    v
                      ? ((r += f.thickness),
                        m &&
                          g.push({
                            seg: Ra(p, f.span.start, f.span.end, o),
                            isVisible: !0,
                            isAbsolute: !0,
                            absoluteTop: f.levelCoord,
                            marginTop: 0,
                          }))
                      : m &&
                        (g.push({
                          seg: Ra(p, f.span.start, f.span.end, o),
                          isVisible: !0,
                          isAbsolute: !1,
                          absoluteTop: f.levelCoord,
                          marginTop: r,
                        }),
                        (r = 0));
                }
                l.push(t), c.push(g), d.push(r);
              }
              return {
                singleColPlacements: l,
                multiColPlacements: c,
                leftoverMargins: d,
              };
            })(t, o),
            b = [],
            E = [];
          for (a of u) {
            v[a.firstCol].push({
              seg: a,
              isVisible: !1,
              isAbsolute: !0,
              absoluteTop: 0,
              marginTop: 0,
            });
            for (let e = a.firstCol; e <= a.lastCol; e += 1)
              p[e].push({
                seg: Ra(a, e, e + 1, o),
                isVisible: !1,
                isAbsolute: !1,
                absoluteTop: 0,
                marginTop: 0,
              });
          }
          for (let e = 0; e < o.length; e += 1) b.push(0);
          for (l of g) {
            var S = t[l.index],
              A = l.span;
            v[A.start].push({
              seg: Ra(S, A.start, A.end, o),
              isVisible: !1,
              isAbsolute: !0,
              absoluteTop: 0,
              marginTop: 0,
            });
            for (let e = A.start; e < A.end; e += 1)
              (b[e] += 1),
                p[e].push({
                  seg: Ra(S, e, e + 1, o),
                  isVisible: !1,
                  isAbsolute: !1,
                  absoluteTop: 0,
                  marginTop: 0,
                });
          }
          for (let e = 0; e < o.length; e += 1) E.push(m[e]);
          return {
            singleColPlacements: p,
            multiColPlacements: v,
            moreCnts: b,
            moreMarginTops: E,
          };
        })(
          ti(i.fgEventSegs, n.eventOrder),
          i.dayMaxEvents,
          i.dayMaxEventRows,
          n.eventOrderStrict,
          e.eventInstanceHeights,
          e.maxContentHeight,
          i.cells
        ),
        f =
          (i.eventDrag && i.eventDrag.affectedInstances) ||
          (i.eventResize && i.eventResize.affectedInstances) ||
          {};
      return E(
        "tr",
        { ref: this.rootElRef, role: "row" },
        i.renderIntro && i.renderIntro(),
        i.cells.map((e, t) => {
          var n = this.renderFgSegs(
              t,
              (i.forPrint ? c : d)[t],
              i.todayRange,
              f
            ),
            r = this.renderFgSegs(
              t,
              (function (e, r) {
                if (!e.length) return [];
                let t = (function () {
                  var e,
                    t = {};
                  for (e of r)
                    for (var n of e)
                      t[n.seg.eventRange.instance.instanceId] = n.absoluteTop;
                  return t;
                })();
                return e.map((e) => ({
                  seg: e,
                  isVisible: !0,
                  isAbsolute: !0,
                  absoluteTop: t[e.eventRange.instance.instanceId],
                  marginTop: 0,
                }));
              })(l[t], d),
              i.todayRange,
              {},
              Boolean(i.eventDrag),
              Boolean(i.eventResize),
              !1
            );
          return E(wa, {
            key: e.key,
            elRef: this.cellElRefs.createRef(e.key),
            innerElRef: this.frameElRefs.createRef(e.key),
            dateProfile: i.dateProfile,
            date: e.date,
            showDayNumber: i.showDayNumbers,
            showWeekNumber: i.showWeekNumbers && 0 === t,
            forceDayTop: i.showWeekNumbers,
            todayRange: i.todayRange,
            eventSelection: i.eventSelection,
            eventDrag: i.eventDrag,
            eventResize: i.eventResize,
            extraRenderProps: e.extraRenderProps,
            extraDataAttrs: e.extraDataAttrs,
            extraClassNames: e.extraClassNames,
            extraDateSpan: e.extraDateSpan,
            moreCnt: u[t],
            moreMarginTop: h[t],
            singlePlacements: c[t],
            fgContentElRef: this.fgElRefs.createRef(e.key),
            fgContent: E(x, null, E(x, null, n), E(x, null, r)),
            bgContent: E(
              x,
              null,
              this.renderFillSegs(a[t], "highlight"),
              this.renderFillSegs(s[t], "non-business"),
              this.renderFillSegs(o[t], "bg-event")
            ),
            minHeight: i.cellMinHeight,
          });
        })
      );
    }
    componentDidMount() {
      this.updateSizing(!0), this.context.addResizeHandler(this.handleResize);
    }
    componentDidUpdate(e, t) {
      var n = this.props;
      this.updateSizing(!v(e, n));
    }
    componentWillUnmount() {
      this.context.removeResizeHandler(this.handleResize);
    }
    getHighlightSegs() {
      var e = this["props"];
      return e.eventDrag && e.eventDrag.segs.length
        ? e.eventDrag.segs
        : e.eventResize && e.eventResize.segs.length
        ? e.eventResize.segs
        : e.dateSelectionSegs;
    }
    getMirrorSegs() {
      var e = this["props"];
      return e.eventResize && e.eventResize.segs.length
        ? e.eventResize.segs
        : [];
    }
    renderFgSegs(a, e, l, c, d, u, h) {
      var f = this["context"],
        g = this.props["eventSelection"],
        p = this.state["framePositions"],
        v = 1 === this.props.cells.length,
        m = d || u || h,
        y = [];
      if (p)
        for (var b of e) {
          let e = b["seg"],
            t = e.eventRange.instance["instanceId"],
            n = t + ":" + a,
            r = b.isVisible && !c[t],
            i = b.isAbsolute,
            s = "",
            o = "";
          i &&
            (f.isRtl
              ? ((o = 0), (s = p.lefts[e.lastCol] - p.lefts[e.firstCol]))
              : ((s = 0), (o = p.rights[e.firstCol] - p.rights[e.lastCol]))),
            y.push(
              E(
                "div",
                {
                  className:
                    "fc-daygrid-event-harness" +
                    (i ? " fc-daygrid-event-harness-abs" : ""),
                  key: n,
                  ref: m ? null : this.segHarnessRefs.createRef(n),
                  style: {
                    visibility: r ? "" : "hidden",
                    marginTop: i ? "" : b.marginTop,
                    top: i ? b.absoluteTop : "",
                    left: s,
                    right: o,
                  },
                },
                ma(e)
                  ? E(
                      ba,
                      Object.assign(
                        {
                          seg: e,
                          isDragging: d,
                          isSelected: t === g,
                          defaultDisplayEventEnd: v,
                        },
                        I(e, l)
                      )
                    )
                  : E(
                      ya,
                      Object.assign(
                        {
                          seg: e,
                          isDragging: d,
                          isResizing: u,
                          isDateSelecting: h,
                          isSelected: t === g,
                          defaultDisplayEventEnd: v,
                        },
                        I(e, l)
                      )
                    )
              )
            );
        }
      return y;
    }
    renderFillSegs(e, t) {
      var n = this.context["isRtl"],
        r = this.props["todayRange"],
        i = this.state["framePositions"],
        s = [];
      if (i)
        for (var o of e) {
          var a = n
            ? { right: 0, left: i.lefts[o.lastCol] - i.lefts[o.firstCol] }
            : { left: 0, right: i.rights[o.firstCol] - i.rights[o.lastCol] };
          s.push(
            E(
              "div",
              {
                key: ii(o.eventRange),
                className: "fc-daygrid-bg-harness",
                style: a,
              },
              "bg-event" === t
                ? E(Ms, Object.assign({ seg: o }, I(o, r)))
                : Os(t)
            )
          );
        }
      return E(x, {}, ...s);
    }
    updateSizing(e) {
      let { props: t, state: n, frameElRefs: r } = this;
      var i, s;
      t.forPrint ||
        null === t.clientWidth ||
        (e &&
          (e = t.cells.map((e) => r.currentMap[e.key])).length &&
          ((s = this.rootElRef.current),
          (i = new Tr(s, e, !0, !1)),
          (n.framePositions && n.framePositions.similarTo(i)) ||
            this.setState({ framePositions: new Tr(s, e, !0, !1) })),
        (i = this.state.eventInstanceHeights),
        (s = this.queryEventInstanceHeights()),
        (e = !0 === t.dayMaxEvents || !0 === t.dayMaxEventRows),
        this.safeSetState({
          eventInstanceHeights: Object.assign(Object.assign({}, i), s),
          maxContentHeight: e ? this.computeMaxContentHeight() : null,
        }));
    }
    queryEventInstanceHeights() {
      var e,
        t = this.segHarnessRefs.currentMap,
        n = {};
      for (e in t) {
        var r = Math.round(t[e].getBoundingClientRect().height),
          i = e.split(":")[0];
        n[i] = Math.max(n[i] || 0, r);
      }
      return n;
    }
    computeMaxContentHeight() {
      var e = this.props.cells[0].key,
        t = this.cellElRefs.currentMap[e],
        e = this.fgElRefs.currentMap[e];
      return t.getBoundingClientRect().bottom - e.getBoundingClientRect().top;
    }
    getCellEls() {
      let t = this.cellElRefs.currentMap;
      return this.props.cells.map((e) => t[e.key]);
    }
  }
  Ta.addStateEquality({ eventInstanceHeights: v });
  class _a extends D {
    constructor() {
      super(...arguments),
        (this.splitBusinessHourSegs = b(fa)),
        (this.splitBgEventSegs = b(fa)),
        (this.splitFgEventSegs = b(fa)),
        (this.splitDateSelectionSegs = b(fa)),
        (this.splitEventDrag = b(pa)),
        (this.splitEventResize = b(pa)),
        (this.rowRefs = new N());
    }
    render() {
      let { props: r, context: e } = this,
        i = r.cells.length,
        s = this.splitBusinessHourSegs(r.businessHourSegs, i),
        o = this.splitBgEventSegs(r.bgEventSegs, i),
        a = this.splitFgEventSegs(r.fgEventSegs, i),
        l = this.splitDateSelectionSegs(r.dateSelectionSegs, i),
        c = this.splitEventDrag(r.eventDrag, i),
        d = this.splitEventResize(r.eventResize, i),
        u =
          7 <= i && r.clientWidth
            ? r.clientWidth / e.options.aspectRatio / 6
            : null;
      return E(Ui, { unit: "day" }, (e, n) =>
        E(
          x,
          null,
          r.cells.map((e, t) =>
            E(Ta, {
              ref: this.rowRefs.createRef(t),
              key: e.length ? e[0].date.toISOString() : t,
              showDayNumbers: 1 < i,
              showWeekNumbers: r.showWeekNumbers,
              todayRange: n,
              dateProfile: r.dateProfile,
              cells: e,
              renderIntro: r.renderRowIntro,
              businessHourSegs: s[t],
              eventSelection: r.eventSelection,
              bgEventSegs: o[t].filter(ka),
              fgEventSegs: a[t],
              dateSelectionSegs: l[t],
              eventDrag: c[t],
              eventResize: d[t],
              dayMaxEvents: r.dayMaxEvents,
              dayMaxEventRows: r.dayMaxEventRows,
              clientWidth: r.clientWidth,
              clientHeight: r.clientHeight,
              cellMinHeight: u,
              forPrint: r.forPrint,
            })
          )
        )
      );
    }
    componentDidMount() {
      var e = this.rowRefs.currentMap[0].getCellEls()[0];
      (this.rootEl = e ? e.closest(".fc-daygrid-body") : null),
        this.rootEl &&
          this.context.registerInteractiveComponent(this, {
            el: this.rootEl,
            isHitComboAllowed: this.props.isHitComboAllowed,
          });
    }
    componentWillUnmount() {
      this.rootEl &&
        (this.context.unregisterInteractiveComponent(this),
        (this.rootEl = null));
    }
    prepareHits() {
      (this.rowPositions = new Tr(
        this.rootEl,
        this.rowRefs.collect().map((e) => e.getCellEls()[0]),
        !1,
        !0
      )),
        (this.colPositions = new Tr(
          this.rootEl,
          this.rowRefs.currentMap[0].getCellEls(),
          !0,
          !1
        ));
    }
    queryHit(e, t) {
      var n,
        { colPositions: r, rowPositions: i } = this,
        e = r.leftToIndex(e),
        t = i.topToIndex(t);
      return null != t && null != e
        ? ((n = this.props.cells[t][e]),
          {
            dateProfile: this.props.dateProfile,
            dateSpan: Object.assign(
              { range: this.getCellRange(t, e), allDay: !0 },
              n.extraDateSpan
            ),
            dayEl: this.getCellEl(t, e),
            rect: {
              left: r.lefts[e],
              right: r.rights[e],
              top: i.tops[t],
              bottom: i.bottoms[t],
            },
            layer: 0,
          })
        : null;
    }
    getCellEl(e, t) {
      return this.rowRefs.currentMap[e].getCellEls()[t];
    }
    getCellRange(e, t) {
      e = this.props.cells[e][t].date;
      return { start: e, end: u(e, 1) };
    }
  }
  function ka(e) {
    return e.eventRange.def.allDay;
  }
  class Ma extends D {
    constructor() {
      super(...arguments),
        (this.elRef = { current: null }),
        (this.needsScrollReset = !1);
    }
    render() {
      let e = this["props"],
        { dayMaxEventRows: t, dayMaxEvents: n, expandRows: r } = e,
        i = !0 === n || !0 === t;
      i && !r && ((i = !1), (t = null), (n = null));
      var s = [
        "fc-daygrid-body",
        i ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
        r ? "" : "fc-daygrid-body-natural",
      ];
      return E(
        "div",
        {
          ref: this.elRef,
          className: s.join(" "),
          style: { width: e.clientWidth, minWidth: e.tableMinWidth },
        },
        E(
          "table",
          {
            role: "presentation",
            className: "fc-scrollgrid-sync-table",
            style: {
              width: e.clientWidth,
              minWidth: e.tableMinWidth,
              height: r ? e.clientHeight : "",
            },
          },
          e.colGroupNode,
          E(
            "tbody",
            { role: "presentation" },
            E(_a, {
              dateProfile: e.dateProfile,
              cells: e.cells,
              renderRowIntro: e.renderRowIntro,
              showWeekNumbers: e.showWeekNumbers,
              clientWidth: e.clientWidth,
              clientHeight: e.clientHeight,
              businessHourSegs: e.businessHourSegs,
              bgEventSegs: e.bgEventSegs,
              fgEventSegs: e.fgEventSegs,
              dateSelectionSegs: e.dateSelectionSegs,
              eventSelection: e.eventSelection,
              eventDrag: e.eventDrag,
              eventResize: e.eventResize,
              dayMaxEvents: n,
              dayMaxEventRows: t,
              forPrint: e.forPrint,
              isHitComboAllowed: e.isHitComboAllowed,
            })
          )
        )
      );
    }
    componentDidMount() {
      this.requestScrollReset();
    }
    componentDidUpdate(e) {
      e.dateProfile !== this.props.dateProfile
        ? this.requestScrollReset()
        : this.flushScrollReset();
    }
    requestScrollReset() {
      (this.needsScrollReset = !0), this.flushScrollReset();
    }
    flushScrollReset() {
      var e, t, n;
      this.needsScrollReset &&
        this.props.clientWidth &&
        ((n = (function (e, t) {
          let n;
          return (n =
            (n = t.currentRangeUnit.match(/year|month/)
              ? e.querySelector(`[data-date="${$t(t.currentDate)}-01"]`)
              : n) || e.querySelector(`[data-date="${Jt(t.currentDate)}"]`));
        })(this.elRef.current, this.props.dateProfile)) &&
          ((t = (e = n.closest(".fc-daygrid-body")).closest(".fc-scroller")),
          (n = n.getBoundingClientRect().top - e.getBoundingClientRect().top),
          (t.scrollTop = n ? 1 + n : 0)),
        (this.needsScrollReset = !1));
    }
  }
  class Ia extends Qi {
    constructor() {
      super(...arguments), (this.forceDayIfListItem = !0);
    }
    sliceRange(e, t) {
      return t.sliceRange(e);
    }
  }
  class Oa extends D {
    constructor() {
      super(...arguments),
        (this.slicer = new Ia()),
        (this.tableRef = { current: null });
    }
    render() {
      var { props: e, context: t } = this;
      return E(
        Ma,
        Object.assign(
          { ref: this.tableRef },
          this.slicer.sliceProps(
            e,
            e.dateProfile,
            e.nextDayThreshold,
            t,
            e.dayTableModel
          ),
          {
            dateProfile: e.dateProfile,
            cells: e.dayTableModel.cells,
            colGroupNode: e.colGroupNode,
            tableMinWidth: e.tableMinWidth,
            renderRowIntro: e.renderRowIntro,
            dayMaxEvents: e.dayMaxEvents,
            dayMaxEventRows: e.dayMaxEventRows,
            showWeekNumbers: e.showWeekNumbers,
            expandRows: e.expandRows,
            headerAlignElRef: e.headerAlignElRef,
            clientWidth: e.clientWidth,
            clientHeight: e.clientHeight,
            forPrint: e.forPrint,
          }
        )
      );
    }
  }
  class Na extends Wr {
    buildRenderRange(e, t, n) {
      var r = this["props"];
      return Pa({
        currentRange: super.buildRenderRange(e, t, n),
        snapToWeek: /^(year|month)$/.test(t),
        fixedWeekCount: r.fixedWeekCount,
        dateEnv: r.dateEnv,
      });
    }
  }
  function Pa(e) {
    let t,
      { dateEnv: n, currentRange: r } = e,
      { start: i, end: s } = r;
    return (
      e.snapToWeek &&
        ((i = n.startOfWeek(i)),
        (t = n.startOfWeek(s)).valueOf() !== s.valueOf()) &&
        (s = zt(t, 1)),
      e.fixedWeekCount &&
        ((e = n.startOfWeek(n.startOfMonth(u(r.end, -1)))),
        (s = zt(s, 6 - Math.ceil(Ut(e, s))))),
      { start: i, end: s }
    );
  }
  class Ha extends D {
    constructor() {
      super(...arguments), (this.headerElRef = { current: null });
    }
    renderSimpleLayout(e, t) {
      var { props: n, context: r } = this,
        i = [],
        s = Es(r.options);
      return (
        e &&
          i.push({
            type: "header",
            key: "header",
            isSticky: s,
            chunk: {
              elRef: this.headerElRef,
              tableClassName: "fc-col-header",
              rowContent: e,
            },
          }),
        i.push({
          type: "body",
          key: "body",
          liquid: !0,
          chunk: { content: t },
        }),
        E(
          Vs,
          { elClasses: ["fc-daygrid"], viewSpec: r.viewSpec },
          E(As, {
            liquid: !n.isHeightAuto && !n.forPrint,
            collapsibleWidth: n.forPrint,
            cols: [],
            sections: i,
          })
        )
      );
    }
    renderHScrollLayout(e, t, n, r) {
      var i,
        s,
        o,
        a,
        l,
        c = this.context.pluginHooks.scrollGridImpl;
      if (c)
        return (
          ({ props: i, context: s } = this),
          (o = !i.forPrint && Es(s.options)),
          (a = !i.forPrint && Ss(s.options)),
          (l = []),
          e &&
            l.push({
              type: "header",
              key: "header",
              isSticky: o,
              chunks: [
                {
                  key: "main",
                  elRef: this.headerElRef,
                  tableClassName: "fc-col-header",
                  rowContent: e,
                },
              ],
            }),
          l.push({
            type: "body",
            key: "body",
            liquid: !0,
            chunks: [{ key: "main", content: t }],
          }),
          a &&
            l.push({
              type: "footer",
              key: "footer",
              isSticky: !0,
              chunks: [{ key: "main", content: bs }],
            }),
          E(
            Vs,
            { elClasses: ["fc-daygrid"], viewSpec: s.viewSpec },
            E(c, {
              liquid: !i.isHeightAuto && !i.forPrint,
              forPrint: i.forPrint,
              collapsibleWidth: i.forPrint,
              colGroups: [{ cols: [{ span: n, minWidth: r }] }],
              sections: l,
            })
          )
        );
      throw new Error("No ScrollGrid implementation");
    }
  }
  function Ba(e, t) {
    t = new Vi(e.renderRange, t);
    return new Gi(t, /year|month|week/.test(e.currentRangeUnit));
  }
  da = P({
    name: "@fullcalendar/daygrid",
    initialView: "dayGridMonth",
    views: {
      dayGrid: {
        component: class extends Ha {
          constructor() {
            super(...arguments),
              (this.buildDayTableModel = b(Ba)),
              (this.headerRef = { current: null }),
              (this.tableRef = { current: null });
          }
          render() {
            let { options: t, dateProfileGenerator: e } = this.context,
              n = this["props"],
              r = this.buildDayTableModel(n.dateProfile, e),
              i =
                t.dayHeaders &&
                E(Li, {
                  ref: this.headerRef,
                  dateProfile: n.dateProfile,
                  dates: r.headerDates,
                  datesRepDistinctDays: 1 === r.rowCnt,
                }),
              s = (e) =>
                E(Oa, {
                  ref: this.tableRef,
                  dateProfile: n.dateProfile,
                  dayTableModel: r,
                  businessHours: n.businessHours,
                  dateSelection: n.dateSelection,
                  eventStore: n.eventStore,
                  eventUiBases: n.eventUiBases,
                  eventSelection: n.eventSelection,
                  eventDrag: n.eventDrag,
                  eventResize: n.eventResize,
                  nextDayThreshold: t.nextDayThreshold,
                  colGroupNode: e.tableColGroupNode,
                  tableMinWidth: e.tableMinWidth,
                  dayMaxEvents: t.dayMaxEvents,
                  dayMaxEventRows: t.dayMaxEventRows,
                  showWeekNumbers: t.weekNumbers,
                  expandRows: !n.isHeightAuto,
                  headerAlignElRef: this.headerElRef,
                  clientWidth: e.clientWidth,
                  clientHeight: e.clientHeight,
                  forPrint: n.forPrint,
                });
            return t.dayMinWidth
              ? this.renderHScrollLayout(i, s, r.colCnt, t.dayMinWidth)
              : this.renderSimpleLayout(i, s);
          }
        },
        dateProfileGeneratorClass: Na,
      },
      dayGridDay: { type: "dayGrid", duration: { days: 1 } },
      dayGridWeek: { type: "dayGrid", duration: { weeks: 1 } },
      dayGridMonth: {
        type: "dayGrid",
        duration: { months: 1 },
        fixedWeekCount: !0,
      },
      dayGridYear: { type: "dayGrid", duration: { years: 1 } },
    },
  });
  Ve(
    '.fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:"\\00a0"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:"\\00a0-\\00a0"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}'
  );
  class ja extends sr {
    getKeyInfo() {
      return { allDay: {}, timed: {} };
    }
    getKeysForDateSpan(e) {
      return e.allDay ? ["allDay"] : ["timed"];
    }
    getKeysForEventDef(e) {
      return e.allDay ? (Xr(e) ? ["timed", "allDay"] : ["allDay"]) : ["timed"];
    }
  }
  const za = a({
    hour: "numeric",
    minute: "2-digit",
    omitZeroMinute: !0,
    meridiem: "short",
  });
  function Ua(i) {
    let s = [
      "fc-timegrid-slot",
      "fc-timegrid-slot-label",
      i.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor",
    ];
    return E(f.Consumer, null, (e) => {
      var t, n, r;
      return i.isLabeled
        ? (({ dateEnv: e, options: t, viewApi: r } = e),
          (n =
            null == t.slotLabelFormat
              ? za
              : Array.isArray(t.slotLabelFormat)
              ? a(t.slotLabelFormat[0])
              : a(t.slotLabelFormat)),
          (r = {
            level: 0,
            time: i.time,
            date: e.toDate(i.date),
            view: r,
            text: e.format(i.date, n),
          }),
          E(
            O,
            {
              elTag: "td",
              elClasses: s,
              elAttrs: { "data-time": i.isoTimeStr },
              renderProps: r,
              generatorName: "slotLabelContent",
              customGenerator: t.slotLabelContent,
              defaultGenerator: Wa,
              classNameGenerator: t.slotLabelClassNames,
              didMount: t.slotLabelDidMount,
              willUnmount: t.slotLabelWillUnmount,
            },
            (e) =>
              E(
                "div",
                {
                  className:
                    "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame",
                },
                E(e, {
                  elTag: "div",
                  elClasses: [
                    "fc-timegrid-slot-label-cushion",
                    "fc-scrollgrid-shrink-cushion",
                  ],
                })
              )
          ))
        : E("td", { className: s.join(" "), "data-time": i.isoTimeStr });
    });
  }
  function Wa(e) {
    return e.text;
  }
  class La extends s {
    render() {
      return this.props.slatMetas.map((e) =>
        E("tr", { key: e.key }, E(Ua, Object.assign({}, e)))
      );
    }
  }
  const Fa = a({ week: "short" });
  class Va extends D {
    constructor() {
      super(...arguments),
        (this.allDaySplitter = new ja()),
        (this.headerElRef = { current: null }),
        (this.rootElRef = { current: null }),
        (this.scrollerElRef = { current: null }),
        (this.state = { slatCoords: null }),
        (this.handleScrollTopRequest = (e) => {
          var t = this.scrollerElRef.current;
          t && (t.scrollTop = e);
        }),
        (this.renderHeadAxis = (e, t = "") => {
          let n = this.context["options"],
            r = this.props["dateProfile"],
            i = r.renderRange,
            s =
              1 === o(i.start, i.end) ? vr(this.context, i.start, "week") : {};
          return n.weekNumbers && "day" === e
            ? E(
                Ns,
                {
                  elTag: "th",
                  elClasses: ["fc-timegrid-axis", "fc-scrollgrid-shrink"],
                  elAttrs: { "aria-hidden": !0 },
                  date: i.start,
                  defaultFormat: Fa,
                },
                (e) =>
                  E(
                    "div",
                    {
                      className: [
                        "fc-timegrid-axis-frame",
                        "fc-scrollgrid-shrink-frame",
                        "fc-timegrid-axis-frame-liquid",
                      ].join(" "),
                      style: { height: t },
                    },
                    E(e, {
                      elTag: "a",
                      elClasses: [
                        "fc-timegrid-axis-cushion",
                        "fc-scrollgrid-shrink-cushion",
                        "fc-scrollgrid-sync-inner",
                      ],
                      elAttrs: s,
                    })
                  )
              )
            : E(
                "th",
                { "aria-hidden": !0, className: "fc-timegrid-axis" },
                E("div", {
                  className: "fc-timegrid-axis-frame",
                  style: { height: t },
                })
              );
        }),
        (this.renderTableRowAxis = (t) => {
          var { options: e, viewApi: n } = this.context,
            n = { text: e.allDayText, view: n };
          return E(
            O,
            {
              elTag: "td",
              elClasses: ["fc-timegrid-axis", "fc-scrollgrid-shrink"],
              elAttrs: { "aria-hidden": !0 },
              renderProps: n,
              generatorName: "allDayContent",
              customGenerator: e.allDayContent,
              defaultGenerator: Ga,
              classNameGenerator: e.allDayClassNames,
              didMount: e.allDayDidMount,
              willUnmount: e.allDayWillUnmount,
            },
            (e) =>
              E(
                "div",
                {
                  className: [
                    "fc-timegrid-axis-frame",
                    "fc-scrollgrid-shrink-frame",
                    null == t ? " fc-timegrid-axis-frame-liquid" : "",
                  ].join(" "),
                  style: { height: t },
                },
                E(e, {
                  elTag: "span",
                  elClasses: [
                    "fc-timegrid-axis-cushion",
                    "fc-scrollgrid-shrink-cushion",
                    "fc-scrollgrid-sync-inner",
                  ],
                })
              )
          );
        }),
        (this.handleSlatCoords = (e) => {
          this.setState({ slatCoords: e });
        });
    }
    renderSimpleLayout(e, t, n) {
      var { context: r, props: i } = this,
        s = [],
        o = Es(r.options);
      return (
        e &&
          s.push({
            type: "header",
            key: "header",
            isSticky: o,
            chunk: {
              elRef: this.headerElRef,
              tableClassName: "fc-col-header",
              rowContent: e,
            },
          }),
        t &&
          (s.push({ type: "body", key: "all-day", chunk: { content: t } }),
          s.push({
            type: "body",
            key: "all-day-divider",
            outerContent: E(
              "tr",
              { role: "presentation", className: "fc-scrollgrid-section" },
              E("td", {
                className:
                  "fc-timegrid-divider " + r.theme.getClass("tableCellShaded"),
              })
            ),
          })),
        s.push({
          type: "body",
          key: "body",
          liquid: !0,
          expandRows: Boolean(r.options.expandRows),
          chunk: { scrollerElRef: this.scrollerElRef, content: n },
        }),
        E(
          Vs,
          {
            elRef: this.rootElRef,
            elClasses: ["fc-timegrid"],
            viewSpec: r.viewSpec,
          },
          E(As, {
            liquid: !i.isHeightAuto && !i.forPrint,
            collapsibleWidth: i.forPrint,
            cols: [{ width: "shrink" }],
            sections: s,
          })
        )
      );
    }
    renderHScrollLayout(e, t, n, r, i, s, o) {
      var a = this.context.pluginHooks.scrollGridImpl;
      if (!a) throw new Error("No ScrollGrid implementation");
      var { context: l, props: c } = this,
        d = !c.forPrint && Es(l.options),
        u = !c.forPrint && Ss(l.options),
        h = [];
      e &&
        h.push({
          type: "header",
          key: "header",
          isSticky: d,
          syncRowHeights: !0,
          chunks: [
            {
              key: "axis",
              rowContent: (e) =>
                E(
                  "tr",
                  { role: "presentation" },
                  this.renderHeadAxis("day", e.rowSyncHeights[0])
                ),
            },
            {
              key: "cols",
              elRef: this.headerElRef,
              tableClassName: "fc-col-header",
              rowContent: e,
            },
          ],
        }),
        t &&
          (h.push({
            type: "body",
            key: "all-day",
            syncRowHeights: !0,
            chunks: [
              {
                key: "axis",
                rowContent: (e) =>
                  E(
                    "tr",
                    { role: "presentation" },
                    this.renderTableRowAxis(e.rowSyncHeights[0])
                  ),
              },
              { key: "cols", content: t },
            ],
          }),
          h.push({
            key: "all-day-divider",
            type: "body",
            outerContent: E(
              "tr",
              { role: "presentation", className: "fc-scrollgrid-section" },
              E("td", {
                colSpan: 2,
                className:
                  "fc-timegrid-divider " + l.theme.getClass("tableCellShaded"),
              })
            ),
          }));
      let f = l.options.nowIndicator;
      return (
        h.push({
          type: "body",
          key: "body",
          liquid: !0,
          expandRows: Boolean(l.options.expandRows),
          chunks: [
            {
              key: "axis",
              content: (e) =>
                E(
                  "div",
                  { className: "fc-timegrid-axis-chunk" },
                  E(
                    "table",
                    {
                      "aria-hidden": !0,
                      style: { height: e.expandRows ? e.clientHeight : "" },
                    },
                    e.tableColGroupNode,
                    E("tbody", null, E(La, { slatMetas: s }))
                  ),
                  E(
                    "div",
                    { className: "fc-timegrid-now-indicator-container" },
                    E(Ui, { unit: f ? "minute" : "day" }, (e) => {
                      var t = f && o && o.safeComputeTop(e);
                      return "number" == typeof t
                        ? E(Rs, {
                            elClasses: ["fc-timegrid-now-indicator-arrow"],
                            elStyle: { top: t },
                            isAxis: !0,
                            date: e,
                          })
                        : null;
                    })
                  )
                ),
            },
            { key: "cols", scrollerElRef: this.scrollerElRef, content: n },
          ],
        }),
        u &&
          h.push({
            key: "footer",
            type: "footer",
            isSticky: !0,
            chunks: [
              { key: "axis", content: bs },
              { key: "cols", content: bs },
            ],
          }),
        E(
          Vs,
          {
            elRef: this.rootElRef,
            elClasses: ["fc-timegrid"],
            viewSpec: l.viewSpec,
          },
          E(a, {
            liquid: !c.isHeightAuto && !c.forPrint,
            forPrint: c.forPrint,
            collapsibleWidth: !1,
            colGroups: [
              { width: "shrink", cols: [{ width: "shrink" }] },
              { cols: [{ span: r, minWidth: i }] },
            ],
            sections: h,
          })
        )
      );
    }
    getAllDayMaxEventProps() {
      let { dayMaxEvents: e, dayMaxEventRows: t } = this.context.options;
      return (
        (!0 !== e && !0 !== t) || ((e = void 0), (t = 5)),
        { dayMaxEvents: e, dayMaxEventRows: t }
      );
    }
  }
  function Ga(e) {
    return e.text;
  }
  class Qa {
    constructor(e, t, n) {
      (this.positions = e), (this.dateProfile = t), (this.slotDuration = n);
    }
    safeComputeTop(e) {
      var t = this["dateProfile"];
      if (A(t.currentRange, e)) {
        var n = y(e),
          e = e.valueOf() - n.valueOf();
        if (e >= h(t.slotMinTime) && e < h(t.slotMaxTime))
          return this.computeTimeTop(p(e));
      }
      return null;
    }
    computeDateTop(e, t) {
      return (t = t || y(e)), this.computeTimeTop(p(e.valueOf() - t.valueOf()));
    }
    computeTimeTop(e) {
      var { positions: t, dateProfile: n } = this,
        r = t.els.length,
        e = (e.milliseconds - h(n.slotMinTime)) / h(this.slotDuration),
        e = Math.max(0, e);
      return (
        (e = Math.min(r, e)),
        (n = Math.floor(e)),
        (e = e - (n = Math.min(n, r - 1))),
        t.tops[n] + t.getHeight(n) * e
      );
    }
  }
  class qa extends s {
    render() {
      let { props: r, context: i } = this,
        s = i["options"],
        o = r["slatElRefs"];
      return E(
        "tbody",
        null,
        r.slatMetas.map((e, t) => {
          var n = {
            time: e.time,
            date: i.dateEnv.toDate(e.date),
            view: i.viewApi,
          };
          return E(
            "tr",
            { key: e.key, ref: o.createRef(e.key) },
            r.axis && E(Ua, Object.assign({}, e)),
            E(O, {
              elTag: "td",
              elClasses: [
                "fc-timegrid-slot",
                "fc-timegrid-slot-lane",
                !e.isLabeled && "fc-timegrid-slot-minor",
              ],
              elAttrs: { "data-time": e.isoTimeStr },
              renderProps: n,
              generatorName: "slotLaneContent",
              customGenerator: s.slotLaneContent,
              classNameGenerator: s.slotLaneClassNames,
              didMount: s.slotLaneDidMount,
              willUnmount: s.slotLaneWillUnmount,
            })
          );
        })
      );
    }
  }
  class Ya extends s {
    constructor() {
      super(...arguments),
        (this.rootElRef = { current: null }),
        (this.slatElRefs = new N());
    }
    render() {
      var { props: e, context: t } = this;
      return E(
        "div",
        { ref: this.rootElRef, className: "fc-timegrid-slots" },
        E(
          "table",
          {
            "aria-hidden": !0,
            className: t.theme.getClass("table"),
            style: {
              minWidth: e.tableMinWidth,
              width: e.clientWidth,
              height: e.minHeight,
            },
          },
          e.tableColGroupNode,
          E(qa, {
            slatElRefs: this.slatElRefs,
            axis: e.axis,
            slatMetas: e.slatMetas,
          })
        )
      );
    }
    componentDidMount() {
      this.updateSizing();
    }
    componentDidUpdate() {
      this.updateSizing();
    }
    componentWillUnmount() {
      this.props.onCoords && this.props.onCoords(null);
    }
    updateSizing() {
      var t,
        { context: e, props: n } = this;
      n.onCoords &&
        null !== n.clientWidth &&
        this.rootElRef.current.offsetHeight &&
        n.onCoords(
          new Qa(
            new Tr(
              this.rootElRef.current,
              ((t = this.slatElRefs.currentMap),
              n.slatMetas.map((e) => t[e.key])),
              !1,
              !0
            ),
            this.props.dateProfile,
            e.options.slotDuration
          )
        );
    }
  }
  function Za(e, t) {
    let n,
      r = [];
    for (n = 0; n < t; n += 1) r.push([]);
    if (e) for (n = 0; n < e.length; n += 1) r[e[n].col].push(e[n]);
    return r;
  }
  function Xa(t, n) {
    var r = [];
    if (t) {
      for (let e = 0; e < n; e += 1)
        r[e] = {
          affectedInstances: t.affectedInstances,
          isEvent: t.isEvent,
          segs: [],
        };
      for (var e of t.segs) r[e.col].segs.push(e);
    } else for (let e = 0; e < n; e += 1) r[e] = null;
    return r;
  }
  class Ja extends s {
    render() {
      let e = this["props"];
      return E(
        js,
        {
          elClasses: ["fc-timegrid-more-link"],
          elStyle: { top: e.top, bottom: e.bottom },
          allDayDate: null,
          moreCnt: e.hiddenSegs.length,
          allSegs: e.hiddenSegs,
          hiddenSegs: e.hiddenSegs,
          extraDateSpan: e.extraDateSpan,
          dateProfile: e.dateProfile,
          todayRange: e.todayRange,
          popoverContent: () => al(e.hiddenSegs, e),
          defaultGenerator: $a,
          forceTimed: !0,
        },
        (e) =>
          E(e, {
            elTag: "div",
            elClasses: ["fc-timegrid-more-link-inner", "fc-sticky"],
          })
      );
    }
  }
  function $a(e) {
    return e.shortText;
  }
  function Ka(e, t) {
    if (!e) return [[], 0];
    let { level: n, lateralStart: r, lateralEnd: i } = e,
      s = r,
      o = [];
    for (; s < i; ) o.push(t(n, s)), (s += 1);
    return o.sort(el), [o.map(tl), o[0][1]];
  }
  function el(e, t) {
    return t[1] - e[1];
  }
  function tl(e) {
    return e[0];
  }
  function nl(n, r) {
    const i = {};
    return (...e) => {
      var t = n(...e);
      return t in i ? i[t] : (i[t] = r(...e));
    };
  }
  function rl(t, n, r = null, i = 0) {
    var s = [];
    if (r)
      for (let e = 0; e < t.length; e += 1) {
        var o = t[e],
          a = r.computeDateTop(o.start, n),
          o = Math.max(a + (i || 0), r.computeDateTop(o.end, n));
        s.push({ start: Math.round(a), end: Math.round(o) });
      }
    return s;
  }
  const il = a({ hour: "numeric", minute: "2-digit", meridiem: !1 });
  class sl extends s {
    render() {
      return E(
        ws,
        Object.assign({}, this.props, {
          elClasses: [
            "fc-timegrid-event",
            "fc-v-event",
            this.props.isShort && "fc-timegrid-event-short",
          ],
          defaultTimeFormat: il,
        })
      );
    }
  }
  class ol extends s {
    constructor() {
      super(...arguments), (this.sortEventSegs = b(ti));
    }
    render() {
      let { props: t, context: e } = this,
        n = e["options"],
        r = n.selectMirror,
        i =
          (t.eventDrag && t.eventDrag.segs) ||
          (t.eventResize && t.eventResize.segs) ||
          (r && t.dateSelectionSegs) ||
          [],
        s =
          (t.eventDrag && t.eventDrag.affectedInstances) ||
          (t.eventResize && t.eventResize.affectedInstances) ||
          {},
        o = this.sortEventSegs(t.fgEventSegs, n.eventOrder);
      return E(
        Ts,
        {
          elTag: "td",
          elRef: t.elRef,
          elClasses: ["fc-timegrid-col", ...(t.extraClassNames || [])],
          elAttrs: Object.assign({ role: "gridcell" }, t.extraDataAttrs),
          date: t.date,
          dateProfile: t.dateProfile,
          todayRange: t.todayRange,
          extraRenderProps: t.extraRenderProps,
        },
        (e) =>
          E(
            "div",
            { className: "fc-timegrid-col-frame" },
            E(
              "div",
              { className: "fc-timegrid-col-bg" },
              this.renderFillSegs(t.businessHourSegs, "non-business"),
              this.renderFillSegs(t.bgEventSegs, "bg-event"),
              this.renderFillSegs(t.dateSelectionSegs, "highlight")
            ),
            E(
              "div",
              { className: "fc-timegrid-col-events" },
              this.renderFgSegs(o, s, !1, !1, !1)
            ),
            E(
              "div",
              { className: "fc-timegrid-col-events" },
              this.renderFgSegs(
                i,
                {},
                Boolean(t.eventDrag),
                Boolean(t.eventResize),
                Boolean(r),
                "mirror"
              )
            ),
            E(
              "div",
              { className: "fc-timegrid-now-indicator-container" },
              this.renderNowIndicator(t.nowIndicatorSegs)
            ),
            _s(n) && E(e, { elTag: "div", elClasses: ["fc-timegrid-col-misc"] })
          )
      );
    }
    renderFgSegs(e, t, n, r, i, s) {
      var o = this["props"];
      return o.forPrint
        ? al(e, o)
        : this.renderPositionedFgSegs(e, t, n, r, i, s);
    }
    renderPositionedFgSegs(e, a, l, c, d, u) {
      let {
          eventMaxStack: t,
          eventShortHeight: h,
          eventOrderStrict: n,
          eventMinHeight: r,
        } = this.context.options,
        {
          date: i,
          slatCoords: s,
          eventSelection: f,
          todayRange: g,
          nowDate: p,
        } = this.props,
        v = l || c || d,
        o = rl(e, i, s, r),
        { segPlacements: m, hiddenGroups: y } = (function (t, n, e, r) {
          var i = [],
            s = [];
          for (let e = 0; e < t.length; e += 1) {
            var o = n[e];
            o ? i.push({ index: e, thickness: 1, span: o }) : s.push(t[e]);
          }
          (u = i),
            (e = e),
            (r = r),
            (a = new gi()),
            null != e && (a.strictOrder = e),
            null != r && (a.maxStackCnt = r),
            (e = mi(a.addSegs(u))),
            (l = (function (l) {
              const n = l["entriesByLevel"],
                s = nl(
                  (e, t) => e + ":" + t,
                  (r, i) => {
                    var e = Ka(
                        (function () {
                          let { levelCoords: e, entriesByLevel: s } = l,
                            o = s[r][i],
                            t = e[r] + o.thickness,
                            n = e.length,
                            a = r;
                          for (; a < n && e[a] < t; a += 1);
                          for (; a < n; a += 1) {
                            let e,
                              t = s[a],
                              n = Ei(t, o.span.start, pi),
                              r = n[0] + n[1],
                              i = r;
                            for (; (e = t[i]) && e.span.start < o.span.end; )
                              i += 1;
                            if (r < i)
                              return {
                                level: a,
                                lateralStart: r,
                                lateralEnd: i,
                              };
                          }
                          return null;
                        })(),
                        s
                      ),
                      t = n[r][i];
                    return [
                      Object.assign(Object.assign({}, t), {
                        nextLevelNodes: e[0],
                      }),
                      t.thickness + e[1],
                    ];
                  }
                );
              return Ka(
                n.length
                  ? { level: 0, lateralStart: 0, lateralEnd: n[0].length }
                  : null,
                s
              )[0];
            })(a)),
            (l = (function () {
              const u = nl(
                (e, t, n) => vi(e),
                (e, t, n) => {
                  let r,
                    { nextLevelNodes: i, thickness: s } = e,
                    o = s + n,
                    a = s / o,
                    l = [];
                  if (i.length)
                    for (var c of i) {
                      var d;
                      void 0 === r
                        ? ((d = u(c, t, o)), (r = d[0]), l.push(d[1]))
                        : ((d = u(c, r, 0)), l.push(d[1]));
                    }
                  else r = 1;
                  n = (r - t) * a;
                  return [
                    r - n,
                    Object.assign(Object.assign({}, e), {
                      thickness: n,
                      nextLevelNodes: l,
                    }),
                  ];
                }
              );
              return l.map((e) => u(e, 0, 0)[1]);
            })());
          var a,
            l,
            c,
            d,
            { segRects: r, hiddenGroups: u } = {
              segRects: (function () {
                let i = [];
                const s = nl(
                  (e, t, n) => vi(e),
                  (e, t, n) => {
                    var r = Object.assign(Object.assign({}, e), {
                      levelCoord: t,
                      stackDepth: n,
                      stackForward: 0,
                    });
                    return (
                      i.push(r),
                      (r.stackForward =
                        o(e.nextLevelNodes, t + e.thickness, n + 1) + 1)
                    );
                  }
                );
                function o(e, t, n) {
                  let r = 0;
                  for (var i of e) r = Math.max(s(i, t, n), r);
                  return r;
                }
                return o(l, 0, 0), i;
              })(),
              hiddenGroups: e,
            },
            h = [];
          for (c of r) h.push({ seg: t[c.index], rect: c });
          for (d of s) h.push({ seg: d, rect: null });
          return { segPlacements: h, hiddenGroups: u };
        })(e, o, n, t);
      return E(
        x,
        null,
        this.renderHiddenGroups(y, e),
        m.map((e) => {
          var { seg: e, rect: t } = e,
            n = e.eventRange.instance.instanceId,
            r = v || Boolean(!a[n] && t),
            i = ll(t && t.span),
            s = !v && t ? this.computeSegHStyle(t) : { left: 0, right: 0 },
            o = Boolean(t) && 0 < t.stackForward,
            t = Boolean(t) && t.span.end - t.span.start < h;
          return E(
            "div",
            {
              className:
                "fc-timegrid-event-harness" +
                (o ? " fc-timegrid-event-harness-inset" : ""),
              key: u || n,
              style: Object.assign(
                Object.assign({ visibility: r ? "" : "hidden" }, i),
                s
              ),
            },
            E(
              sl,
              Object.assign(
                {
                  seg: e,
                  isDragging: l,
                  isResizing: c,
                  isDateSelecting: d,
                  isSelected: n === f,
                  isShort: t,
                },
                I(e, g, p)
              )
            )
          );
        })
      );
    }
    renderHiddenGroups(e, r) {
      let {
        extraDateSpan: i,
        dateProfile: s,
        todayRange: o,
        nowDate: a,
        eventSelection: l,
        eventDrag: c,
        eventResize: d,
      } = this.props;
      return E(
        x,
        null,
        e.map((e) => {
          var t,
            n = ll(e.span),
            e = ((e = e.entries), (t = r), e.map((e) => t[e.index]));
          return E(Ja, {
            key: Xt(Ws(e)),
            hiddenSegs: e,
            top: n.top,
            bottom: n.bottom,
            extraDateSpan: i,
            dateProfile: s,
            todayRange: o,
            nowDate: a,
            eventSelection: l,
            eventDrag: c,
            eventResize: d,
          });
        })
      );
    }
    renderFillSegs(n, r) {
      let { props: i, context: e } = this,
        t = rl(n, i.date, i.slatCoords, e.options.eventMinHeight).map(
          (e, t) => {
            t = n[t];
            return E(
              "div",
              {
                key: ii(t.eventRange),
                className: "fc-timegrid-bg-harness",
                style: ll(e),
              },
              "bg-event" === r
                ? E(
                    Ms,
                    Object.assign({ seg: t }, I(t, i.todayRange, i.nowDate))
                  )
                : Os(r)
            );
          }
        );
      return E(x, null, t);
    }
    renderNowIndicator(e) {
      let { slatCoords: n, date: r } = this.props;
      return n
        ? e.map((e, t) =>
            E(Rs, {
              key: t,
              elClasses: ["fc-timegrid-now-indicator-line"],
              elStyle: { top: n.computeDateTop(e.start, r) },
              isAxis: !1,
              date: r,
            })
          )
        : null;
    }
    computeSegHStyle(e) {
      let t,
        n,
        { isRtl: r, options: i } = this.context,
        s = i.slotEventOverlap,
        o = e.levelCoord,
        a = e.levelCoord + e.thickness;
      s && (a = Math.min(1, o + 2 * (a - o))),
        (n = r ? ((t = 1 - a), o) : ((t = o), 1 - a));
      var l = {
        zIndex: e.stackDepth + 1,
        left: 100 * t + "%",
        right: 100 * n + "%",
      };
      return (
        s && !e.stackForward && (l[r ? "marginLeft" : "marginRight"] = 20), l
      );
    }
  }
  function al(
    e,
    {
      todayRange: n,
      nowDate: r,
      eventSelection: i,
      eventDrag: t,
      eventResize: s,
    }
  ) {
    let o =
      (t ? t.affectedInstances : null) ||
      (s ? s.affectedInstances : null) ||
      {};
    return E(
      x,
      null,
      e.map((e) => {
        var t = e.eventRange.instance.instanceId;
        return E(
          "div",
          { key: t, style: { visibility: o[t] ? "hidden" : "" } },
          E(
            sl,
            Object.assign(
              {
                seg: e,
                isDragging: !1,
                isResizing: !1,
                isDateSelecting: !1,
                isSelected: t === i,
                isShort: !1,
              },
              I(e, n, r)
            )
          )
        );
      })
    );
  }
  function ll(e) {
    return e ? { top: e.start, bottom: -e.end } : { top: "", bottom: "" };
  }
  class cl extends s {
    constructor() {
      super(...arguments),
        (this.splitFgEventSegs = b(Za)),
        (this.splitBgEventSegs = b(Za)),
        (this.splitBusinessHourSegs = b(Za)),
        (this.splitNowIndicatorSegs = b(Za)),
        (this.splitDateSelectionSegs = b(Za)),
        (this.splitEventDrag = b(Xa)),
        (this.splitEventResize = b(Xa)),
        (this.rootElRef = { current: null }),
        (this.cellElRefs = new N());
    }
    render() {
      let { props: n, context: e } = this,
        t =
          e.options.nowIndicator &&
          n.slatCoords &&
          n.slatCoords.safeComputeTop(n.nowDate),
        r = n.cells.length,
        i = this.splitFgEventSegs(n.fgEventSegs, r),
        s = this.splitBgEventSegs(n.bgEventSegs, r),
        o = this.splitBusinessHourSegs(n.businessHourSegs, r),
        a = this.splitNowIndicatorSegs(n.nowIndicatorSegs, r),
        l = this.splitDateSelectionSegs(n.dateSelectionSegs, r),
        c = this.splitEventDrag(n.eventDrag, r),
        d = this.splitEventResize(n.eventResize, r);
      return E(
        "div",
        { className: "fc-timegrid-cols", ref: this.rootElRef },
        E(
          "table",
          {
            role: "presentation",
            style: { minWidth: n.tableMinWidth, width: n.clientWidth },
          },
          n.tableColGroupNode,
          E(
            "tbody",
            { role: "presentation" },
            E(
              "tr",
              { role: "row" },
              n.axis &&
                E(
                  "td",
                  {
                    "aria-hidden": !0,
                    className: "fc-timegrid-col fc-timegrid-axis",
                  },
                  E(
                    "div",
                    { className: "fc-timegrid-col-frame" },
                    E(
                      "div",
                      { className: "fc-timegrid-now-indicator-container" },
                      "number" == typeof t &&
                        E(Rs, {
                          elClasses: ["fc-timegrid-now-indicator-arrow"],
                          elStyle: { top: t },
                          isAxis: !0,
                          date: n.nowDate,
                        })
                    )
                  )
                ),
              n.cells.map((e, t) =>
                E(ol, {
                  key: e.key,
                  elRef: this.cellElRefs.createRef(e.key),
                  dateProfile: n.dateProfile,
                  date: e.date,
                  nowDate: n.nowDate,
                  todayRange: n.todayRange,
                  extraRenderProps: e.extraRenderProps,
                  extraDataAttrs: e.extraDataAttrs,
                  extraClassNames: e.extraClassNames,
                  extraDateSpan: e.extraDateSpan,
                  fgEventSegs: i[t],
                  bgEventSegs: s[t],
                  businessHourSegs: o[t],
                  nowIndicatorSegs: a[t],
                  dateSelectionSegs: l[t],
                  eventDrag: c[t],
                  eventResize: d[t],
                  slatCoords: n.slatCoords,
                  eventSelection: n.eventSelection,
                  forPrint: n.forPrint,
                })
              )
            )
          )
        )
      );
    }
    componentDidMount() {
      this.updateCoords();
    }
    componentDidUpdate() {
      this.updateCoords();
    }
    updateCoords() {
      var t,
        e = this["props"];
      e.onColCoords &&
        null !== e.clientWidth &&
        e.onColCoords(
          new Tr(
            this.rootElRef.current,
            ((t = this.cellElRefs.currentMap), e.cells.map((e) => t[e.key])),
            !0,
            !1
          )
        );
    }
  }
  class dl extends D {
    constructor() {
      super(...arguments),
        (this.processSlotOptions = b(ul)),
        (this.state = { slatCoords: null }),
        (this.handleRootEl = (e) => {
          e
            ? this.context.registerInteractiveComponent(this, {
                el: e,
                isHitComboAllowed: this.props.isHitComboAllowed,
              })
            : this.context.unregisterInteractiveComponent(this);
        }),
        (this.handleScrollRequest = (t) => {
          var n = this.props["onScrollTopRequest"],
            r = this.state["slatCoords"];
          if (n && r) {
            if (t.time) {
              let e = r.computeTimeTop(t.time);
              (e = Math.ceil(e)) && (e += 1), n(e);
            }
            return !0;
          }
          return !1;
        }),
        (this.handleColCoords = (e) => {
          this.colCoords = e;
        }),
        (this.handleSlatCoords = (e) => {
          this.setState({ slatCoords: e }),
            this.props.onSlatCoords && this.props.onSlatCoords(e);
        });
    }
    render() {
      var { props: e, state: t } = this;
      return E(
        "div",
        {
          className: "fc-timegrid-body",
          ref: this.handleRootEl,
          style: { width: e.clientWidth, minWidth: e.tableMinWidth },
        },
        E(Ya, {
          axis: e.axis,
          dateProfile: e.dateProfile,
          slatMetas: e.slatMetas,
          clientWidth: e.clientWidth,
          minHeight: e.expandRows ? e.clientHeight : "",
          tableMinWidth: e.tableMinWidth,
          tableColGroupNode: e.axis ? e.tableColGroupNode : null,
          onCoords: this.handleSlatCoords,
        }),
        E(cl, {
          cells: e.cells,
          axis: e.axis,
          dateProfile: e.dateProfile,
          businessHourSegs: e.businessHourSegs,
          bgEventSegs: e.bgEventSegs,
          fgEventSegs: e.fgEventSegs,
          dateSelectionSegs: e.dateSelectionSegs,
          eventSelection: e.eventSelection,
          eventDrag: e.eventDrag,
          eventResize: e.eventResize,
          todayRange: e.todayRange,
          nowDate: e.nowDate,
          nowIndicatorSegs: e.nowIndicatorSegs,
          clientWidth: e.clientWidth,
          tableMinWidth: e.tableMinWidth,
          tableColGroupNode: e.tableColGroupNode,
          slatCoords: t.slatCoords,
          onColCoords: this.handleColCoords,
          forPrint: e.forPrint,
        })
      );
    }
    componentDidMount() {
      this.scrollResponder = this.context.createScrollResponder(
        this.handleScrollRequest
      );
    }
    componentDidUpdate(e) {
      this.scrollResponder.update(e.dateProfile !== this.props.dateProfile);
    }
    componentWillUnmount() {
      this.scrollResponder.detach();
    }
    queryHit(e, t) {
      var n,
        r,
        { dateEnv: i, options: s } = this.context,
        o = this["colCoords"],
        a = this.props["dateProfile"],
        l = this.state["slatCoords"],
        { snapDuration: s, snapsPerSlot: c } = this.processSlotOptions(
          this.props.slotDuration,
          s.snapDuration
        ),
        e = o.leftToIndex(e),
        d = l.positions.topToIndex(t);
      return null != e && null != d
        ? ((n = this.props.cells[e]),
          (r = l.positions.tops[d]),
          (l = l.positions.getHeight(d)),
          (d = d * c + Math.floor(((t - r) / l) * c)),
          (t = this.props.cells[e].date),
          (c = Ct(a.slotMinTime, Rt(s, d))),
          (d = i.add(t, c)),
          (t = i.add(d, s)),
          {
            dateProfile: a,
            dateSpan: Object.assign(
              { range: { start: d, end: t }, allDay: !1 },
              n.extraDateSpan
            ),
            dayEl: o.els[e],
            rect: {
              left: o.lefts[e],
              right: o.rights[e],
              top: r,
              bottom: r + l,
            },
            layer: 0,
          })
        : null;
    }
  }
  function ul(e, t) {
    let n = t || e,
      r = Tt(e, n);
    return (
      null === r && ((n = e), (r = 1)), { snapDuration: n, snapsPerSlot: r }
    );
  }
  class hl extends Qi {
    sliceRange(t, n) {
      var r = [];
      for (let e = 0; e < n.length; e += 1) {
        var i = w(t, n[e]);
        i &&
          r.push({
            start: i.start,
            end: i.end,
            isStart: i.start.valueOf() === t.start.valueOf(),
            isEnd: i.end.valueOf() === t.end.valueOf(),
            col: e,
          });
      }
      return r;
    }
  }
  class fl extends D {
    constructor() {
      super(...arguments),
        (this.buildDayRanges = b(gl)),
        (this.slicer = new hl()),
        (this.timeColsRef = { current: null });
    }
    render() {
      let { props: n, context: r } = this,
        { dateProfile: i, dayTableModel: s } = n,
        { nowIndicator: o, nextDayThreshold: a } = r.options,
        l = this.buildDayRanges(s, i, r.dateEnv);
      return E(Ui, { unit: o ? "minute" : "day" }, (e, t) =>
        E(
          dl,
          Object.assign(
            { ref: this.timeColsRef },
            this.slicer.sliceProps(n, i, null, r, l),
            {
              forPrint: n.forPrint,
              axis: n.axis,
              dateProfile: i,
              slatMetas: n.slatMetas,
              slotDuration: n.slotDuration,
              cells: s.cells[0],
              tableColGroupNode: n.tableColGroupNode,
              tableMinWidth: n.tableMinWidth,
              clientWidth: n.clientWidth,
              clientHeight: n.clientHeight,
              expandRows: n.expandRows,
              nowDate: e,
              nowIndicatorSegs: o && this.slicer.sliceNowDate(e, i, a, r, l),
              todayRange: t,
              onScrollTopRequest: n.onScrollTopRequest,
              onSlatCoords: n.onSlatCoords,
            }
          )
        )
      );
    }
  }
  function gl(e, t, n) {
    var r,
      i = [];
    for (r of e.headerDates)
      i.push({ start: n.add(r, t.slotMinTime), end: n.add(r, t.slotMaxTime) });
    return i;
  }
  const pl = [
    { hours: 1 },
    { minutes: 30 },
    { minutes: 15 },
    { seconds: 30 },
    { seconds: 15 },
  ];
  function vl(e, t, n, r, i) {
    let s = new Date(0),
      o = e,
      a = p(0),
      l =
        n ||
        (function (e) {
          let t, n, r;
          for (t = pl.length - 1; 0 <= t; --t)
            if (null !== (r = Tt((n = p(pl[t])), e)) && 1 < r) return n;
          return e;
        })(r),
      c = [];
    for (; h(o) < h(t); ) {
      var d = i.add(s, o),
        u = null !== Tt(a, l);
      c.push({
        date: d,
        time: o,
        key: d.toISOString(),
        isoTimeStr: Kt(d),
        isLabeled: u,
      }),
        (o = Ct(o, r)),
        (a = Ct(a, r));
    }
    return c;
  }
  function ml(e, t) {
    e = new Vi(e.renderRange, t);
    return new Gi(e, !1);
  }
  var yl = P({
    name: "@fullcalendar/timegrid",
    initialView: "timeGridWeek",
    optionRefiners: { allDaySlot: Boolean },
    views: {
      timeGrid: {
        component: class extends Va {
          constructor() {
            super(...arguments),
              (this.buildTimeColsModel = b(ml)),
              (this.buildSlatMetas = b(vl));
          }
          render() {
            let {
                options: t,
                dateEnv: e,
                dateProfileGenerator: n,
              } = this.context,
              r = this["props"],
              i = r["dateProfile"],
              s = this.buildTimeColsModel(i, n),
              o = this.allDaySplitter.splitProps(r),
              a = this.buildSlatMetas(
                i.slotMinTime,
                i.slotMaxTime,
                t.slotLabelInterval,
                t.slotDuration,
                e
              ),
              l = t["dayMinWidth"],
              c = !l,
              d = l,
              u =
                t.dayHeaders &&
                E(Li, {
                  dates: s.headerDates,
                  dateProfile: i,
                  datesRepDistinctDays: !0,
                  renderIntro: c ? this.renderHeadAxis : null,
                }),
              h =
                !1 !== t.allDaySlot &&
                ((e) =>
                  E(
                    Oa,
                    Object.assign(
                      {},
                      o.allDay,
                      {
                        dateProfile: i,
                        dayTableModel: s,
                        nextDayThreshold: t.nextDayThreshold,
                        tableMinWidth: e.tableMinWidth,
                        colGroupNode: e.tableColGroupNode,
                        renderRowIntro: c ? this.renderTableRowAxis : null,
                        showWeekNumbers: !1,
                        expandRows: !1,
                        headerAlignElRef: this.headerElRef,
                        clientWidth: e.clientWidth,
                        clientHeight: e.clientHeight,
                        forPrint: r.forPrint,
                      },
                      this.getAllDayMaxEventProps()
                    )
                  )),
              f = (e) =>
                E(
                  fl,
                  Object.assign({}, o.timed, {
                    dayTableModel: s,
                    dateProfile: i,
                    axis: c,
                    slotDuration: t.slotDuration,
                    slatMetas: a,
                    forPrint: r.forPrint,
                    tableColGroupNode: e.tableColGroupNode,
                    tableMinWidth: e.tableMinWidth,
                    clientWidth: e.clientWidth,
                    clientHeight: e.clientHeight,
                    onSlatCoords: this.handleSlatCoords,
                    expandRows: e.expandRows,
                    onScrollTopRequest: this.handleScrollTopRequest,
                  })
                );
            return d
              ? this.renderHScrollLayout(
                  u,
                  h,
                  f,
                  s.colCnt,
                  l,
                  a,
                  this.state.slatCoords
                )
              : this.renderSimpleLayout(u, h, f);
          }
        },
        usesMinMaxTime: !0,
        allDaySlot: !0,
        slotDuration: "00:30:00",
        slotEventOverlap: !0,
      },
      timeGridDay: { type: "timeGrid", duration: { days: 1 } },
      timeGridWeek: { type: "timeGrid", duration: { weeks: 1 } },
    },
  });
  Ve(
    ':root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:"";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}'
  );
  class bl extends s {
    constructor() {
      super(...arguments), (this.state = { textId: t() });
    }
    render() {
      let { theme: t, dateEnv: e, options: n, viewApi: r } = this.context,
        { cellId: i, dayDate: s, todayRange: o } = this.props,
        a = this.state["textId"],
        l = hr(s, o),
        c = n.listDayFormat ? e.format(s, n.listDayFormat) : "",
        d = n.listDaySideFormat ? e.format(s, n.listDaySideFormat) : "",
        u = Object.assign(
          {
            date: e.toDate(s),
            view: r,
            textId: a,
            text: c,
            sideText: d,
            navLinkAttrs: vr(this.context, s),
            sideNavLinkAttrs: vr(this.context, s, "day", !1),
          },
          l
        );
      return E(
        O,
        {
          elTag: "tr",
          elClasses: ["fc-list-day", ...fr(l, t)],
          elAttrs: { "data-date": Jt(s) },
          renderProps: u,
          generatorName: "dayHeaderContent",
          customGenerator: n.dayHeaderContent,
          defaultGenerator: El,
          classNameGenerator: n.dayHeaderClassNames,
          didMount: n.dayHeaderDidMount,
          willUnmount: n.dayHeaderWillUnmount,
        },
        (e) =>
          E(
            "th",
            { scope: "colgroup", colSpan: 3, id: i, "aria-labelledby": a },
            E(e, {
              elTag: "div",
              elClasses: ["fc-list-day-cushion", t.getClass("tableCellShaded")],
            })
          )
      );
    }
  }
  function El(e) {
    return E(
      x,
      null,
      e.text &&
        E(
          "a",
          Object.assign(
            { id: e.textId, className: "fc-list-day-text" },
            e.navLinkAttrs
          ),
          e.text
        ),
      e.sideText &&
        E(
          "a",
          Object.assign(
            { "aria-hidden": !0, className: "fc-list-day-side-text" },
            e.sideNavLinkAttrs
          ),
          e.sideText
        )
    );
  }
  const Sl = a({ hour: "numeric", minute: "2-digit", meridiem: "short" });
  class Al extends s {
    render() {
      let { props: e, context: n } = this,
        t = n["options"],
        { seg: r, timeHeaderId: i, eventHeaderId: s, dateHeaderId: o } = e,
        a = t.eventTimeFormat || Sl;
      return E(
        Ds,
        Object.assign({}, e, {
          elTag: "tr",
          elClasses: [
            "fc-list-event",
            r.eventRange.def.url && "fc-event-forced-url",
          ],
          defaultGenerator: () => {
            return (
              (e = r),
              (t = si(e, n)),
              E("a", Object.assign({}, t), e.eventRange.def.title)
            );
            var e, t;
          },
          seg: r,
          timeText: "",
          disableDragging: !0,
          disableResizing: !0,
        }),
        (e, t) =>
          E(
            x,
            null,
            (function (i, s, o, a, l) {
              var c = o["options"];
              if (!1 === c.displayEventTime) return null;
              {
                let e,
                  t = i.eventRange.def,
                  n = i.eventRange.instance,
                  r = !1;
                return (t.allDay
                  ? (r = !0)
                  : Zn(i.eventRange.range)
                  ? i.isStart
                    ? (e = ri(i, s, o, null, null, n.range.start, i.end))
                    : i.isEnd
                    ? (e = ri(i, s, o, null, null, i.start, n.range.end))
                    : (r = !0)
                  : (e = ri(i, s, o)),
                r)
                  ? ((i = { text: o.options.allDayText, view: o.viewApi }),
                    E(O, {
                      elTag: "td",
                      elClasses: ["fc-list-event-time"],
                      elAttrs: { headers: a + " " + l },
                      renderProps: i,
                      generatorName: "allDayContent",
                      customGenerator: c.allDayContent,
                      defaultGenerator: Dl,
                      classNameGenerator: c.allDayClassNames,
                      didMount: c.allDayDidMount,
                      willUnmount: c.allDayWillUnmount,
                    }))
                  : E("td", { className: "fc-list-event-time" }, e);
              }
            })(r, a, n, i, o),
            E(
              "td",
              { "aria-hidden": !0, className: "fc-list-event-graphic" },
              E("span", {
                className: "fc-list-event-dot",
                style: { borderColor: t.borderColor || t.backgroundColor },
              })
            ),
            E(e, {
              elTag: "td",
              elClasses: ["fc-list-event-title"],
              elAttrs: { headers: s + " " + o },
            })
          )
      );
    }
  }
  function Dl(e) {
    return e.text;
  }
  function wl(e) {
    return e.text;
  }
  function Cl(e) {
    let t = y(e.renderRange.start),
      n = e.renderRange.end,
      r = [],
      i = [];
    for (; t < n; )
      r.push(t), i.push({ start: t, end: u(t, 1) }), (t = u(t, 1));
    return { dayDates: r, dayRanges: i };
  }
  function Rl(e) {
    return !1 === e ? null : a(e);
  }
  var xl = P({
    name: "@fullcalendar/list",
    optionRefiners: {
      listDayFormat: Rl,
      listDaySideFormat: Rl,
      noEventsClassNames: n,
      noEventsContent: n,
      noEventsDidMount: n,
      noEventsWillUnmount: n,
    },
    views: {
      list: {
        component: class extends D {
          constructor() {
            super(...arguments),
              (this.computeDateVars = b(Cl)),
              (this.eventStoreToSegs = b(this._eventStoreToSegs)),
              (this.state = {
                timeHeaderId: t(),
                eventHeaderId: t(),
                dateHeaderIdRoot: t(),
              }),
              (this.setRootEl = (e) => {
                e
                  ? this.context.registerInteractiveComponent(this, { el: e })
                  : this.context.unregisterInteractiveComponent(this);
              });
          }
          render() {
            var { props: e, context: t } = this,
              { dayDates: n, dayRanges: r } = this.computeDateVars(
                e.dateProfile
              ),
              r = this.eventStoreToSegs(e.eventStore, e.eventUiBases, r);
            return E(
              Vs,
              {
                elRef: this.setRootEl,
                elClasses: [
                  "fc-list",
                  t.theme.getClass("table"),
                  !1 !== t.options.stickyHeaderDates ? "fc-list-sticky" : "",
                ],
                viewSpec: t.viewSpec,
              },
              E(
                ls,
                {
                  liquid: !e.isHeightAuto,
                  overflowX: e.isHeightAuto ? "visible" : "hidden",
                  overflowY: e.isHeightAuto ? "visible" : "auto",
                },
                0 < r.length
                  ? this.renderSegList(r, n)
                  : this.renderEmptyMessage()
              )
            );
          }
          renderEmptyMessage() {
            var { options: e, viewApi: t } = this.context,
              t = { text: e.noEventsText, view: t };
            return E(
              O,
              {
                elTag: "div",
                elClasses: ["fc-list-empty"],
                renderProps: t,
                generatorName: "noEventsContent",
                customGenerator: e.noEventsContent,
                defaultGenerator: wl,
                classNameGenerator: e.noEventsClassNames,
                didMount: e.noEventsDidMount,
                willUnmount: e.noEventsWillUnmount,
              },
              (e) =>
                E(e, { elTag: "div", elClasses: ["fc-list-empty-cushion"] })
            );
          }
          renderSegList(e, l) {
            let { theme: c, options: d } = this.context,
              {
                timeHeaderId: u,
                eventHeaderId: h,
                dateHeaderIdRoot: f,
              } = this.state,
              g = (function (e) {
                let t,
                  n,
                  r = [];
                for (t = 0; t < e.length; t += 1)
                  (n = e[t]), (r[n.dayIndex] || (r[n.dayIndex] = [])).push(n);
                return r;
              })(e);
            return E(Ui, { unit: "day" }, (t, n) => {
              var r = [];
              for (let e = 0; e < g.length; e += 1) {
                var i = g[e];
                if (i) {
                  var s,
                    o = Jt(l[e]),
                    a = f + "-" + o;
                  r.push(
                    E(bl, { key: o, cellId: a, dayDate: l[e], todayRange: n })
                  );
                  for (s of ti(i, d.eventOrder))
                    r.push(
                      E(
                        Al,
                        Object.assign(
                          {
                            key: o + ":" + s.eventRange.instance.instanceId,
                            seg: s,
                            isDragging: !1,
                            isResizing: !1,
                            isDateSelecting: !1,
                            isSelected: !1,
                            timeHeaderId: u,
                            eventHeaderId: h,
                            dateHeaderId: a,
                          },
                          I(s, n, t)
                        )
                      )
                    );
                }
              }
              return E(
                "table",
                { className: "fc-list-table " + c.getClass("table") },
                E(
                  "thead",
                  null,
                  E(
                    "tr",
                    null,
                    E("th", { scope: "col", id: u }, d.timeHint),
                    E("th", { scope: "col", "aria-hidden": !0 }),
                    E("th", { scope: "col", id: h }, d.eventHint)
                  )
                ),
                E("tbody", null, r)
              );
            });
          }
          _eventStoreToSegs(e, t, n) {
            return this.eventRangesToSegs(
              Zr(
                e,
                t,
                this.props.dateProfile.activeRange,
                this.context.options.nextDayThreshold
              ).fg,
              n
            );
          }
          eventRangesToSegs(e, t) {
            var n,
              r = [];
            for (n of e) r.push(...this.eventRangeToSegs(n, t));
            return r;
          }
          eventRangeToSegs(e, t) {
            let n,
              r,
              i,
              s = this.context["dateEnv"],
              o = this.context.options["nextDayThreshold"],
              a = e.range,
              l = e.def.allDay,
              c = [];
            for (n = 0; n < t.length; n += 1)
              if (
                (r = w(a, t[n])) &&
                ((i = {
                  component: this,
                  eventRange: e,
                  start: r.start,
                  end: r.end,
                  isStart: e.isStart && r.start.valueOf() === a.start.valueOf(),
                  isEnd: e.isEnd && r.end.valueOf() === a.end.valueOf(),
                  dayIndex: n,
                }),
                c.push(i),
                !i.isEnd) &&
                !l &&
                n + 1 < t.length &&
                a.end < s.add(t[n + 1].start, o)
              ) {
                (i.end = a.end), (i.isEnd = !0);
                break;
              }
            return c;
          }
        },
        buttonTextKey: "list",
        listDayFormat: { month: "long", day: "numeric", year: "numeric" },
      },
      listDay: {
        type: "list",
        duration: { days: 1 },
        listDayFormat: { weekday: "long" },
      },
      listWeek: {
        type: "list",
        duration: { weeks: 1 },
        listDayFormat: { weekday: "long" },
        listDaySideFormat: { month: "long", day: "numeric", year: "numeric" },
      },
      listMonth: {
        type: "list",
        duration: { month: 1 },
        listDaySideFormat: { weekday: "long" },
      },
      listYear: {
        type: "list",
        duration: { year: 1 },
        listDaySideFormat: { weekday: "long" },
      },
    },
  });
  class Tl extends D {
    constructor() {
      super(...arguments),
        (this.buildDayTableModel = b(Ba)),
        (this.slicer = new Ia()),
        (this.state = { labelId: t() });
    }
    render() {
      var { props: e, state: t, context: n } = this,
        { dateProfile: r, forPrint: i } = e,
        s = n["options"],
        o = this.buildDayTableModel(r, n.dateProfileGenerator),
        a = this.slicer.sliceProps(e, r, s.nextDayThreshold, n, o),
        l = null != e.tableWidth ? e.tableWidth / s.aspectRatio : null,
        c = o.cells.length,
        c = null != l ? l / c : null;
      return E(
        "div",
        {
          ref: e.elRef,
          "data-date": e.isoDateStr,
          className: "fc-multimonth-month",
          style: { width: e.width },
          role: "grid",
          "aria-labelledby": t.labelId,
        },
        E(
          "div",
          {
            className: "fc-multimonth-header",
            style: { marginBottom: c },
            role: "presentation",
          },
          E(
            "div",
            { className: "fc-multimonth-title", id: t.labelId },
            n.dateEnv.format(e.dateProfile.currentRange.start, e.titleFormat)
          ),
          E(
            "table",
            {
              className: [
                "fc-multimonth-header-table",
                n.theme.getClass("table"),
              ].join(" "),
              role: "presentation",
            },
            E(
              "thead",
              { role: "rowgroup" },
              E(Li, {
                dateProfile: e.dateProfile,
                dates: o.headerDates,
                datesRepDistinctDays: !1,
              })
            )
          )
        ),
        E(
          "div",
          {
            className: [
              "fc-multimonth-daygrid",
              "fc-daygrid",
              "fc-daygrid-body",
              !i && "fc-daygrid-body-balanced",
              i && "fc-daygrid-body-unbalanced",
              i && "fc-daygrid-body-natural",
            ].join(" "),
            style: { marginTop: -c },
          },
          E(
            "table",
            {
              className: [
                "fc-multimonth-daygrid-table",
                n.theme.getClass("table"),
              ].join(" "),
              style: { height: i ? "" : l },
              role: "presentation",
            },
            E(
              "tbody",
              { role: "rowgroup" },
              E(
                _a,
                Object.assign({}, a, {
                  dateProfile: r,
                  cells: o.cells,
                  eventSelection: e.eventSelection,
                  dayMaxEvents: !i,
                  dayMaxEventRows: !i,
                  showWeekNumbers: s.weekNumbers,
                  clientWidth: e.clientWidth,
                  clientHeight: e.clientHeight,
                  forPrint: i,
                })
              )
            )
          )
        )
      );
    }
  }
  const _l = p(1, "month");
  function kl(e, t, n, r, i) {
    const { start: s, end: o } = t.currentRange;
    let a = s;
    for (var l = []; a.valueOf() < o.valueOf(); ) {
      const s = n.add(a, _l),
        o = { start: e.skipHiddenDays(a), end: e.skipHiddenDays(s, -1, !0) };
      var c = Pa({
          currentRange: o,
          snapToWeek: !0,
          fixedWeekCount: r,
          dateEnv: n,
        }),
        c = {
          start: e.skipHiddenDays(c.start),
          end: e.skipHiddenDays(c.end, -1, !0),
        },
        d = t.activeRange ? w(t.activeRange, i ? c : o) : null;
      l.push({
        currentDate: t.currentDate,
        isValid: t.isValid,
        validRange: t.validRange,
        renderRange: c,
        activeRange: d,
        currentRange: o,
        currentRangeUnit: "month",
        isRangeAllDay: !0,
        dateIncrement: t.dateIncrement,
        slotMinTime: t.slotMaxTime,
        slotMaxTime: t.slotMinTime,
      }),
        (a = s);
    }
    return l;
  }
  const Ml = a({ year: "numeric", month: "long" }),
    Il = a({ month: "long" });
  function Ol(e, t) {
    return (
      e ||
      (t[0].currentRange.start.getUTCFullYear() !==
      t[t.length - 1].currentRange.start.getUTCFullYear()
        ? Ml
        : Il)
    );
  }
  var Nl = {
      multiMonthTitleFormat: a,
      multiMonthMaxColumns: Number,
      multiMonthMinWidth: Number,
    },
    Nl =
      (Ve(
        ".fc .fc-multimonth{border:1px solid var(--fc-border-color);display:flex;flex-wrap:wrap;overflow-x:hidden;overflow-y:auto}.fc .fc-multimonth-title{font-size:1.2em;font-weight:700;padding:1em 0;text-align:center}.fc .fc-multimonth-daygrid{background:var(--fc-page-bg-color)}.fc .fc-multimonth-daygrid-table,.fc .fc-multimonth-header-table{table-layout:fixed;width:100%}.fc .fc-multimonth-daygrid-table{border-top-style:hidden!important}.fc .fc-multimonth-singlecol .fc-multimonth{position:relative}.fc .fc-multimonth-singlecol .fc-multimonth-header{background:var(--fc-page-bg-color);position:relative;top:0;z-index:2}.fc .fc-multimonth-singlecol .fc-multimonth-daygrid{position:relative;z-index:1}.fc .fc-multimonth-singlecol .fc-multimonth-daygrid-table,.fc .fc-multimonth-singlecol .fc-multimonth-header-table{border-left-style:hidden;border-right-style:hidden}.fc .fc-multimonth-singlecol .fc-multimonth-month:last-child .fc-multimonth-daygrid-table{border-bottom-style:hidden}.fc .fc-multimonth-multicol{line-height:1}.fc .fc-multimonth-multicol .fc-multimonth-month{padding:0 1.2em 1.2em}.fc .fc-multimonth-multicol .fc-daygrid-more-link{border:1px solid var(--fc-event-border-color);display:block;float:none;padding:1px}.fc .fc-multimonth-compact{line-height:1}.fc .fc-multimonth-compact .fc-multimonth-daygrid-table,.fc .fc-multimonth-compact .fc-multimonth-header-table{font-size:.9em}.fc-media-screen .fc-multimonth-singlecol .fc-multimonth-header{position:sticky}.fc-media-print .fc-multimonth{overflow:visible}"
      ),
      P({
        name: "@fullcalendar/multimonth",
        initialView: "multiMonthYear",
        optionRefiners: Nl,
        views: {
          multiMonth: {
            component: class extends D {
              constructor() {
                super(...arguments),
                  (this.splitDateProfileByMonth = b(kl)),
                  (this.buildMonthFormat = b(Ol)),
                  (this.scrollElRef = { current: null }),
                  (this.firstMonthElRef = { current: null }),
                  (this.needsScrollReset = !1),
                  (this.handleSizing = (e) => {
                    e && this.updateSize();
                  });
              }
              render() {
                const { context: e, props: r, state: t } = this,
                  n = e["options"],
                  { clientWidth: i, clientHeight: s } = t,
                  o = t.monthHPadding || 0,
                  a =
                    Math.min(
                      null != i
                        ? Math.floor(i / (n.multiMonthMinWidth + o))
                        : 1,
                      n.multiMonthMaxColumns
                    ) || 1,
                  l = 100 / a + "%",
                  c = null == i ? null : i / a - o,
                  d = null != i && 1 === a,
                  u = this.splitDateProfileByMonth(
                    e.dateProfileGenerator,
                    r.dateProfile,
                    e.dateEnv,
                    !d && n.fixedWeekCount,
                    n.showNonCurrentDates
                  ),
                  h = this.buildMonthFormat(n.multiMonthTitleFormat, u),
                  f = [
                    "fc-multimonth",
                    d ? "fc-multimonth-singlecol" : "fc-multimonth-multicol",
                    null != c && c < 400 ? "fc-multimonth-compact" : "",
                  ];
                return E(
                  Vs,
                  {
                    elRef: this.scrollElRef,
                    elClasses: f,
                    viewSpec: e.viewSpec,
                  },
                  u.map((e, t) => {
                    var n = $t(e.currentRange.start);
                    return E(
                      Tl,
                      Object.assign({}, r, {
                        key: n,
                        isoDateStr: n,
                        elRef: 0 === t ? this.firstMonthElRef : void 0,
                        titleFormat: h,
                        dateProfile: e,
                        width: l,
                        tableWidth: c,
                        clientWidth: i,
                        clientHeight: s,
                      })
                    );
                  })
                );
              }
              componentDidMount() {
                this.updateSize(),
                  this.context.addResizeHandler(this.handleSizing),
                  this.requestScrollReset();
              }
              componentDidUpdate(e) {
                v(e, this.props) || this.handleSizing(!1),
                  e.dateProfile !== this.props.dateProfile
                    ? this.requestScrollReset()
                    : this.flushScrollReset();
              }
              componentWillUnmount() {
                this.context.removeResizeHandler(this.handleSizing);
              }
              updateSize() {
                var e = this.scrollElRef.current,
                  t = this.firstMonthElRef.current;
                e &&
                  this.setState({
                    clientWidth: e.clientWidth,
                    clientHeight: e.clientHeight,
                  }),
                  t &&
                    e &&
                    null == this.state.monthHPadding &&
                    this.setState({
                      monthHPadding: e.clientWidth - t.firstChild.offsetWidth,
                    });
              }
              requestScrollReset() {
                (this.needsScrollReset = !0), this.flushScrollReset();
              }
              flushScrollReset() {
                var e, t;
                this.needsScrollReset &&
                  null != this.state.monthHPadding &&
                  ((t = this.props.dateProfile["currentDate"]),
                  (t = (e = this.scrollElRef.current).querySelector(
                    `[data-date="${$t(t)}"]`
                  )),
                  (e.scrollTop =
                    t.getBoundingClientRect().top -
                    this.firstMonthElRef.current.getBoundingClientRect().top),
                  (this.needsScrollReset = !1));
              }
              shouldComponentUpdate() {
                return !0;
              }
            },
            dateProfileGeneratorClass: Na,
            multiMonthMinWidth: 350,
            multiMonthMaxColumns: 3,
          },
          multiMonthYear: {
            type: "multiMonth",
            duration: { years: 1 },
            fixedWeekCount: !0,
            showNonCurrentDates: !1,
          },
        },
      }));
  return (
    Do.push(ca, da, yl, xl, Nl),
    (e.Calendar = class extends Zs {
      constructor(e, t = {}) {
        var n;
        super(),
          (this.isRendering = !1),
          (this.isRendered = !1),
          (this.currentClassNames = []),
          (this.customContentRenderId = 0),
          (this.handleAction = (e) => {
            switch (e.type) {
              case "SET_EVENT_DRAG":
              case "SET_EVENT_RESIZE":
                this.renderRunner.tryDrain();
            }
          }),
          (this.handleData = (e) => {
            (this.currentData = e),
              this.renderRunner.request(e.calendarOptions.rerenderDelay);
          }),
          (this.handleRenderRequest = () => {
            if (this.isRendering) {
              this.isRendered = !0;
              let i = this["currentData"];
              Nr(() => {
                ae(
                  E(
                    Ti,
                    {
                      options: i.calendarOptions,
                      theme: i.theme,
                      emitter: i.emitter,
                    },
                    (e, t, n, r) => (
                      this.setClassNames(e),
                      this.setHeight(t),
                      E(
                        Hi.Provider,
                        { value: this.customContentRenderId },
                        E(
                          Lo,
                          Object.assign({ isHeightAuto: n, forPrint: r }, i)
                        )
                      )
                    )
                  ),
                  this.el
                );
              });
            } else
              this.isRendered &&
                ((this.isRendered = !1),
                ae(null, this.el),
                this.setClassNames([]),
                this.setHeight(""));
          }),
          (n = e).isConnected && Ge(n.getRootNode()),
          (this.el = e),
          (this.renderRunner = new os(this.handleRenderRequest)),
          new Ro({
            optionOverrides: t,
            calendarApi: this,
            onAction: this.handleAction,
            onData: this.handleData,
          });
      }
      render() {
        var e = this.isRendering;
        e ? (this.customContentRenderId += 1) : (this.isRendering = !0),
          this.renderRunner.request(),
          e && this.updateSize();
      }
      destroy() {
        this.isRendering &&
          ((this.isRendering = !1), this.renderRunner.request());
      }
      updateSize() {
        Nr(() => {
          super.updateSize();
        });
      }
      batchRendering(e) {
        this.renderRunner.pause("batchRendering"),
          e(),
          this.renderRunner.resume("batchRendering");
      }
      pauseRendering() {
        this.renderRunner.pause("pauseRendering");
      }
      resumeRendering() {
        this.renderRunner.resume("pauseRendering", !0);
      }
      resetOptions(e, t) {
        this.currentDataManager.resetOptions(e, t);
      }
      setClassNames(e) {
        if (!d(e, this.currentClassNames)) {
          var t,
            n,
            r = this.el["classList"];
          for (t of this.currentClassNames) r.remove(t);
          for (n of e) r.add(n);
          this.currentClassNames = e;
        }
      }
      setHeight(e) {
        Ke(this.el, "height", e);
      }
    }),
    (e.Draggable = class {
      constructor(e, t = {}) {
        (this.handlePointerDown = (e) => {
          var t = this["dragging"],
            { minDistance: n, longPressDelay: r } = this.settings;
          (t.minDistance =
            null != n ? n : e.isTouch ? 0 : S.eventDragMinDistance),
            (t.delay = e.isTouch ? (null != r ? r : S.longPressDelay) : 0);
        }),
          (this.handleDragStart = (e) => {
            e.isTouch &&
              this.dragging.delay &&
              e.subjectEl.classList.contains("fc-event") &&
              this.dragging.mirror
                .getMirrorEl()
                .classList.add("fc-event-selected");
          }),
          (this.settings = t);
        e = this.dragging = new ra(e);
        (e.touchScrollAllowed = !1),
          null != t.itemSelector && (e.pointer.selector = t.itemSelector),
          null != t.appendTo && (e.mirror.parentNode = t.appendTo),
          e.emitter.on("pointerdown", this.handlePointerDown),
          e.emitter.on("dragstart", this.handleDragStart),
          new ua(e, t.eventData);
      }
      destroy() {
        this.dragging.destroy();
      }
    }),
    (e.Internal = Xs),
    (e.JsonRequestError = is),
    (e.Preact = Js),
    (e.ThirdPartyDraggable = class {
      constructor(e, t) {
        let n = document;
        t =
          e === document || e instanceof Element ? ((n = e), t || {}) : e || {};
        e = this.dragging = new ha(n);
        "string" == typeof t.itemSelector
          ? (e.pointer.selector = t.itemSelector)
          : n === document && (e.pointer.selector = "[data-event]"),
          "string" == typeof t.mirrorSelector &&
            (e.mirrorSelector = t.mirrorSelector),
          new ua(e, t.eventData);
      }
      destroy() {
        this.dragging.destroy();
      }
    }),
    (e.createPlugin = P),
    (e.formatDate = function (e, t = {}) {
      var n = Go(t),
        t = a(t),
        e = n.createMarkerMeta(e);
      return e ? n.format(e.marker, t, { forcedTzo: e.forcedTzo }) : "";
    }),
    (e.formatRange = function (e, t, n) {
      var r = Go("object" == typeof n && n ? n : {}),
        i = a(n),
        e = r.createMarkerMeta(e),
        t = r.createMarkerMeta(t);
      return e && t
        ? r.formatRange(e.marker, t.marker, i, {
            forcedStartTzo: e.forcedTzo,
            forcedEndTzo: t.forcedTzo,
            isEndExclusive: n.isEndExclusive,
            defaultSeparator: S.defaultRangeSeparator,
          })
        : "";
    }),
    (e.globalLocales = $s),
    (e.globalPlugins = Do),
    (e.sliceEvents = function (e, t) {
      return Zr(
        e.eventStore,
        e.eventUiBases,
        e.dateProfile.activeRange,
        t ? e.nextDayThreshold : null
      ).fg;
    }),
    (e.version = "6.1.8"),
    Object.defineProperty(e, "__esModule", { value: !0 }),
    e
  );
})({});
