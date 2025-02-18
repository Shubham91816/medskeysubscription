!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis ? globalThis : e || self).Sweetalert2 =
        t());
})(this, function () {
  "use strict";
  const P = {},
    C = (a) =>
      new Promise((e) => {
        if (!a) return e();
        var t = window.scrollX,
          o = window.scrollY;
        (P.restoreFocusTimeout = setTimeout(() => {
          P.previousActiveElement instanceof HTMLElement
            ? (P.previousActiveElement.focus(),
              (P.previousActiveElement = null))
            : document.body && document.body.focus(),
            e();
        }, 100)),
          window.scrollTo(t, o);
      });
  var E = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap(),
  };
  function A(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
    const o = G();
    i(o) &&
      (t && ((o.style.transition = "none"), (o.style.width = "100%")),
      setTimeout(() => {
        (o.style.transition = `width ${e / 1e3}s linear`),
          (o.style.width = "0%");
      }, 10));
  }
  const B = "swal2-",
    T = [
      "container",
      "shown",
      "height-auto",
      "iosfix",
      "popup",
      "modal",
      "no-backdrop",
      "no-transition",
      "toast",
      "toast-shown",
      "show",
      "hide",
      "close",
      "title",
      "html-container",
      "actions",
      "confirm",
      "deny",
      "cancel",
      "default-outline",
      "footer",
      "icon",
      "icon-content",
      "image",
      "input",
      "file",
      "range",
      "select",
      "radio",
      "checkbox",
      "label",
      "textarea",
      "inputerror",
      "input-label",
      "validation-message",
      "progress-steps",
      "active-progress-step",
      "progress-step",
      "progress-step-line",
      "loader",
      "loading",
      "styled",
      "top",
      "top-start",
      "top-end",
      "top-left",
      "top-right",
      "center",
      "center-start",
      "center-end",
      "center-left",
      "center-right",
      "bottom",
      "bottom-start",
      "bottom-end",
      "bottom-left",
      "bottom-right",
      "grow-row",
      "grow-column",
      "grow-fullscreen",
      "rtl",
      "timer-progress-bar",
      "timer-progress-bar-container",
      "scrollbar-measure",
      "icon-success",
      "icon-warning",
      "icon-info",
      "icon-question",
      "icon-error",
    ].reduce((e, t) => ((e[t] = B + t), e), {}),
    d = ["success", "warning", "info", "question", "error"].reduce(
      (e, t) => ((e[t] = B + t), e),
      {}
    ),
    D = "SweetAlert2:",
    V = (e) => e.charAt(0).toUpperCase() + e.slice(1),
    w = (e) => {
      console.warn(D + " " + ("object" == typeof e ? e.join(" ") : e));
    },
    L = (e) => {
      console.error(D + " " + e);
    },
    N = [],
    F = (e) => ("function" == typeof e ? e() : e),
    _ = (e) => e && "function" == typeof e.toPromise,
    S = (e) => (_(e) ? e.toPromise() : Promise.resolve(e)),
    R = (e) => e && Promise.resolve(e) === e,
    $ = () => document.body.querySelector("." + T.container),
    t = (e) => {
      var t = $();
      return t ? t.querySelector(e) : null;
    },
    e = (e) => t("." + e),
    j = () => e(T.popup),
    u = () => e(T.icon),
    U = () => e(T.title),
    W = () => e(T["html-container"]),
    Y = () => e(T.image),
    Z = () => e(T["progress-steps"]),
    K = () => e(T["validation-message"]),
    O = () => t(`.${T.actions} .` + T.confirm),
    p = () => t(`.${T.actions} .` + T.cancel),
    m = () => t(`.${T.actions} .` + T.deny),
    h = () => t("." + T.loader),
    X = () => e(T.actions),
    J = () => e(T.footer),
    G = () => e(T["timer-progress-bar"]),
    Q = () => e(T.close),
    ee = () => {
      var e = j().querySelectorAll(
          '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
        ),
        e = Array.from(e).sort((e, t) => {
          (e = parseInt(e.getAttribute("tabindex"))),
            (t = parseInt(t.getAttribute("tabindex")));
          return t < e ? 1 : e < t ? -1 : 0;
        }),
        t = j().querySelectorAll(
          '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n'
        ),
        t = Array.from(t).filter((e) => "-1" !== e.getAttribute("tabindex"));
      return [...new Set(e.concat(t))].filter((e) => i(e));
    },
    te = () =>
      r(document.body, T.shown) &&
      !r(document.body, T["toast-shown"]) &&
      !r(document.body, T["no-backdrop"]),
    oe = () => j() && r(j(), T.toast),
    g = (t, e) => {
      (t.textContent = ""),
        e &&
          ((e = new DOMParser().parseFromString(e, "text/html")),
          Array.from(e.querySelector("head").childNodes).forEach((e) => {
            t.appendChild(e);
          }),
          Array.from(e.querySelector("body").childNodes).forEach((e) => {
            e instanceof HTMLVideoElement || e instanceof HTMLAudioElement
              ? t.appendChild(e.cloneNode(!0))
              : t.appendChild(e);
          }));
    },
    r = (t, e) => {
      if (!e) return !1;
      var o = e.split(/\s+/);
      for (let e = 0; e < o.length; e++)
        if (!t.classList.contains(o[e])) return !1;
      return !0;
    },
    f = (e, t, o) => {
      var a, n;
      (a = e),
        (n = t),
        Array.from(a.classList).forEach((e) => {
          Object.values(T).includes(e) ||
            Object.values(d).includes(e) ||
            Object.values(n.showClass).includes(e) ||
            a.classList.remove(e);
        }),
        t.customClass &&
          t.customClass[o] &&
          ("string" == typeof t.customClass[o] || t.customClass[o].forEach
            ? b(e, t.customClass[o])
            : w(
                `Invalid type of customClass.${o}! Expected string or iterable object, got "${typeof t
                  .customClass[o]}"`
              ));
    },
    ae = (e, t) => {
      if (!t) return null;
      switch (t) {
        case "select":
        case "textarea":
        case "file":
          return e.querySelector(`.${T.popup} > .` + T[t]);
        case "checkbox":
          return e.querySelector(`.${T.popup} > .${T.checkbox} input`);
        case "radio":
          return (
            e.querySelector(`.${T.popup} > .${T.radio} input:checked`) ||
            e.querySelector(`.${T.popup} > .${T.radio} input:first-child`)
          );
        case "range":
          return e.querySelector(`.${T.popup} > .${T.range} input`);
        default:
          return e.querySelector(`.${T.popup} > .` + T.input);
      }
    },
    ne = (e) => {
      var t;
      e.focus(),
        "file" !== e.type && ((t = e.value), (e.value = ""), (e.value = t));
    },
    se = (e, t, o) => {
      e &&
        t &&
        (t = "string" == typeof t ? t.split(/\s+/).filter(Boolean) : t).forEach(
          (t) => {
            Array.isArray(e)
              ? e.forEach((e) => {
                  o ? e.classList.add(t) : e.classList.remove(t);
                })
              : o
              ? e.classList.add(t)
              : e.classList.remove(t);
          }
        );
    },
    b = (e, t) => {
      se(e, t, !0);
    },
    M = (e, t) => {
      se(e, t, !1);
    },
    v = (e, t) => {
      var o = Array.from(e.children);
      for (let e = 0; e < o.length; e++) {
        var a = o[e];
        if (a instanceof HTMLElement && r(a, t)) return a;
      }
    },
    y = (e, t, o) => {
      (o = o === "" + parseInt(o) ? parseInt(o) : o) || 0 === parseInt(o)
        ? (e.style[t] = "number" == typeof o ? o + "px" : o)
        : e.style.removeProperty(t);
    },
    z = function (e) {
      e &&
        (e.style.display =
          1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : "flex");
    },
    I = (e) => {
      e && (e.style.display = "none");
    },
    ie = (e, t, o, a) => {
      e = e.querySelector(t);
      e && (e.style[o] = a);
    },
    re = function (e, t) {
      t
        ? z(
            e,
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : "flex"
          )
        : I(e);
    },
    i = (e) =>
      !(!e || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length)),
    le = (e) => !!(e.scrollHeight > e.clientHeight),
    ce = (e) => {
      var e = window.getComputedStyle(e),
        t = parseFloat(e.getPropertyValue("animation-duration") || "0"),
        e = parseFloat(e.getPropertyValue("transition-duration") || "0");
      return 0 < t || 0 < e;
    },
    de = () => "undefined" == typeof window || "undefined" == typeof document,
    ue = `
 <div aria-labelledby="${T.title}" aria-describedby="${T["html-container"]}" class="${T.popup}" tabindex="-1">
   <button type="button" class="${T.close}"></button>
   <ul class="${T["progress-steps"]}"></ul>
   <div class="${T.icon}"></div>
   <img class="${T.image}" />
   <h2 class="${T.title}" id="${T.title}"></h2>
   <div class="${T["html-container"]}" id="${T["html-container"]}"></div>
   <input class="${T.input}" />
   <input type="file" class="${T.file}" />
   <div class="${T.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${T.select}"></select>
   <div class="${T.radio}"></div>
   <label for="${T.checkbox}" class="${T.checkbox}">
     <input type="checkbox" />
     <span class="${T.label}"></span>
   </label>
   <textarea class="${T.textarea}"></textarea>
   <div class="${T["validation-message"]}" id="${T["validation-message"]}"></div>
   <div class="${T.actions}">
     <div class="${T.loader}"></div>
     <button type="button" class="${T.confirm}"></button>
     <button type="button" class="${T.deny}"></button>
     <button type="button" class="${T.cancel}"></button>
   </div>
   <div class="${T.footer}"></div>
   <div class="${T["timer-progress-bar-container"]}">
     <div class="${T["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, ""),
    x = () => {
      P.currentInstance.resetValidationMessage();
    },
    we = (e, t) => {
      var o, a;
      e instanceof HTMLElement
        ? t.appendChild(e)
        : "object" == typeof e
        ? ((a = t), (o = e).jquery ? pe(a, o) : g(a, o.toString()))
        : e && g(t, e);
    },
    pe = (t, o) => {
      if (((t.textContent = ""), 0 in o))
        for (let e = 0; e in o; e++) t.appendChild(o[e].cloneNode(!0));
      else t.appendChild(o.cloneNode(!0));
    },
    me = (() => {
      if (!de()) {
        var e = document.createElement("div"),
          t = {
            WebkitAnimation: "webkitAnimationEnd",
            animation: "animationend",
          };
        for (const o in t)
          if (
            Object.prototype.hasOwnProperty.call(t, o) &&
            void 0 !== e.style[o]
          )
            return t[o];
      }
      return !1;
    })(),
    he = (e, t) => {
      var o,
        a,
        n,
        s,
        i,
        r,
        l,
        c,
        d,
        u = X(),
        w = h();
      (t.showConfirmButton || t.showDenyButton || t.showCancelButton ? z : I)(
        u
      ),
        f(u, t, "actions"),
        (u = u),
        (o = w),
        (a = t),
        (l = O()),
        (c = m()),
        (d = p()),
        ge(l, "confirm", a),
        ge(c, "deny", a),
        ge(d, "cancel", a),
        (n = l),
        (s = c),
        (i = d),
        (r = a).buttonsStyling
          ? (b([n, s, i], T.styled),
            r.confirmButtonColor &&
              ((n.style.backgroundColor = r.confirmButtonColor),
              b(n, T["default-outline"])),
            r.denyButtonColor &&
              ((s.style.backgroundColor = r.denyButtonColor),
              b(s, T["default-outline"])),
            r.cancelButtonColor &&
              ((i.style.backgroundColor = r.cancelButtonColor),
              b(i, T["default-outline"])))
          : M([n, s, i], T.styled),
        a.reverseButtons &&
          (a.toast
            ? (u.insertBefore(d, l), u.insertBefore(c, l))
            : (u.insertBefore(d, o),
              u.insertBefore(c, o),
              u.insertBefore(l, o))),
        g(w, t.loaderHtml),
        f(w, t, "loader");
    };
  function ge(e, t, o) {
    re(e, o[`show${V(t)}Button`], "inline-block"),
      g(e, o[t + "ButtonText"]),
      e.setAttribute("aria-label", o[t + "ButtonAriaLabel"]),
      (e.className = T[t]),
      f(e, o, t + "Button"),
      b(e, o[t + "ButtonClass"]);
  }
  const fe = (e, t) => {
      var o,
        a,
        n = $();
      n &&
        ((o = n),
        "string" == typeof (a = t.backdrop)
          ? (o.style.background = a)
          : a || b([document.documentElement, document.body], T["no-backdrop"]),
        (o = n),
        (a = t.position) in T
          ? b(o, T[a])
          : (w('The "position" parameter is not valid, defaulting to "center"'),
            b(o, T.center)),
        (a = n),
        (o = t.grow) &&
          "string" == typeof o &&
          (o = "grow-" + o) in T &&
          b(a, T[o]),
        f(n, t, "container"));
    },
    be = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
    ve = (e, t) => {
      (e.placeholder && !t.inputPlaceholder) ||
        (e.placeholder = t.inputPlaceholder);
    },
    ye = (e, t, o) => {
      var a, n;
      o.inputLabel &&
        ((e.id = T.input),
        (a = document.createElement("label")),
        (n = T["input-label"]),
        a.setAttribute("for", e.id),
        (a.className = n),
        "object" == typeof o.customClass && b(a, o.customClass.inputLabel),
        (a.innerText = o.inputLabel),
        t.insertAdjacentElement("beforebegin", a));
    },
    xe = (e) => v(j(), T[e] || T.input),
    ke = (e, t) => {
      ["string", "number"].includes(typeof t)
        ? (e.value = "" + t)
        : R(t) ||
          w(
            `Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`
          );
    },
    n = {},
    Ce =
      ((n.text =
        n.email =
        n.password =
        n.number =
        n.tel =
        n.url =
          (e, t) => (
            ke(e, t.inputValue), ye(e, e, t), ve(e, t), (e.type = t.input), e
          )),
      (n.file = (e, t) => (ye(e, e, t), ve(e, t), e)),
      (n.range = (e, t) => {
        var o = e.querySelector("input"),
          a = e.querySelector("output");
        return (
          ke(o, t.inputValue),
          (o.type = t.input),
          ke(a, t.inputValue),
          ye(o, e, t),
          e
        );
      }),
      (n.select = (e, t) => {
        var o;
        return (
          (e.textContent = ""),
          t.inputPlaceholder &&
            ((o = document.createElement("option")),
            g(o, t.inputPlaceholder),
            (o.value = ""),
            (o.disabled = !0),
            (o.selected = !0),
            e.appendChild(o)),
          ye(e, e, t),
          e
        );
      }),
      (n.radio = (e) => ((e.textContent = ""), e)),
      (n.checkbox = (e, t) => {
        var o = ae(j(), "checkbox"),
          e =
            ((o.value = "1"),
            (o.id = T.checkbox),
            (o.checked = Boolean(t.inputValue)),
            e.querySelector("span"));
        return g(e, t.inputPlaceholder), o;
      }),
      (n.textarea = (o, e) => (
        ke(o, e.inputValue),
        ve(o, e),
        ye(o, o, e),
        setTimeout(() => {
          if ("MutationObserver" in window) {
            const t = parseInt(window.getComputedStyle(j()).width);
            new MutationObserver(() => {
              var e =
                o.offsetWidth +
                ((e = o),
                parseInt(window.getComputedStyle(e).marginLeft) +
                  parseInt(window.getComputedStyle(e).marginRight));
              j().style.width = e > t ? e + "px" : null;
            }).observe(o, { attributes: !0, attributeFilter: ["style"] });
          }
        }),
        o
      )),
      (e, t) => {
        var o = W();
        if (o) {
          f(o, t, "htmlContainer"),
            t.html
              ? (we(t.html, o), z(o, "block"))
              : t.text
              ? ((o.textContent = t.text), z(o, "block"))
              : I(o);
          {
            var o = e,
              r = t;
            const l = j(),
              a = E.innerParams.get(o),
              c = !a || r.input !== a.input;
            be.forEach((e) => {
              var t = v(l, T[e]),
                o = e,
                a = r.inputAttributes,
                n = ae(j(), o);
              if (n) {
                var s = n;
                for (let e = 0; e < s.attributes.length; e++) {
                  var i = s.attributes[e].name;
                  ["type", "value", "style"].includes(i) ||
                    s.removeAttribute(i);
                }
                for (const o in a) n.setAttribute(o, a[o]);
              }
              (t.className = T[e]), c && I(t);
            }),
              r.input &&
                (c &&
                  ((e) => {
                    if (n[e.input]) {
                      const t = xe(e.input),
                        o = n[e.input](t, e);
                      z(t),
                        e.inputAutoFocus &&
                          setTimeout(() => {
                            ne(o);
                          });
                    } else
                      L(
                        `Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${e.input}"`
                      );
                  })(r),
                (o = r),
                (e = xe(o.input)),
                "object" == typeof o.customClass) &&
                b(e, o.customClass.input);
          }
        }
      }),
    Ae = (e, t) => {
      for (const r in d) t.icon !== r && M(e, d[r]);
      b(e, d[t.icon]);
      var o = e,
        a = t;
      if (a.iconColor) {
        (o.style.color = a.iconColor), (o.style.borderColor = a.iconColor);
        for (const l of [
          ".swal2-success-line-tip",
          ".swal2-success-line-long",
          ".swal2-x-mark-line-left",
          ".swal2-x-mark-line-right",
        ])
          ie(o, l, "backgroundColor", a.iconColor);
        ie(o, ".swal2-success-ring", "borderColor", a.iconColor);
      }
      {
        var n = j(),
          s = window.getComputedStyle(n).getPropertyValue("background-color"),
          i = n.querySelectorAll(
            "[class^=swal2-success-circular-line], .swal2-success-fix"
          );
        for (let e = 0; e < i.length; e++) i[e].style.backgroundColor = s;
      }
      f(e, t, "icon");
    },
    Be = (e, t) => {
      let o,
        a = e.innerHTML;
      t.iconHtml
        ? (o = Pe(t.iconHtml))
        : "success" === t.icon
        ? ((o =
            '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n'),
          (a = a.replace(/ style=".*?"/g, "")))
        : (o =
            "error" === t.icon
              ? '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n'
              : Pe({ question: "?", warning: "!", info: "i" }[t.icon])),
        a.trim() !== o.trim() && g(e, o);
    },
    Pe = (e) => `<div class="${T["icon-content"]}">${e}</div>`,
    Ee = (e, t) => {
      var o = t.showClass || {};
      (e.className = T.popup + " " + (i(e) ? o.popup : "")),
        t.toast
          ? (b([document.documentElement, document.body], T["toast-shown"]),
            b(e, T.toast))
          : b(e, T.modal),
        f(e, t, "popup"),
        "string" == typeof t.customClass && b(e, t.customClass),
        t.icon && b(e, T["icon-" + t.icon]);
    },
    Te = (e) => {
      var t = document.createElement("li");
      return b(t, T["progress-step"]), g(t, e), t;
    },
    Le = (e) => {
      var t = document.createElement("li");
      return (
        b(t, T["progress-step-line"]),
        e.progressStepsDistance && y(t, "width", e.progressStepsDistance),
        t
      );
    },
    Se = (e, t) => {
      var o = t,
        a = $(),
        n = j();
      if (a && n) {
        if (o.toast) {
          y(a, "width", o.width), (n.style.width = "100%");
          const i = h();
          i && n.insertBefore(i, u());
        } else y(n, "width", o.width);
        y(n, "padding", o.padding),
          o.color && (n.style.color = o.color),
          o.background && (n.style.background = o.background),
          I(K()),
          Ee(n, o);
      }
      fe(0, t);
      {
        var s = t;
        const r = Z();
        if (r) {
          const { progressSteps: l, currentProgressStep: c } = s;
          l && 0 !== l.length && void 0 !== c
            ? (z(r),
              (r.textContent = ""),
              c >= l.length &&
                w(
                  "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
                ),
              l.forEach((e, t) => {
                e = Te(e);
                if (
                  (r.appendChild(e),
                  t === c && b(e, T["active-progress-step"]),
                  t !== l.length - 1)
                ) {
                  const e = Le(s);
                  r.appendChild(e);
                }
              }))
            : I(r);
        }
      }
      (a = t),
        (n = E.innerParams.get(e)),
        (o = u()),
        n && a.icon === n.icon
          ? (Be(o, a), Ae(o, a))
          : a.icon || a.iconHtml
          ? a.icon && -1 === Object.keys(d).indexOf(a.icon)
            ? (L(
                `Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${a.icon}"`
              ),
              I(o))
            : (z(o), Be(o, a), Ae(o, a), b(o, a.showClass.icon))
          : I(o),
        (n = t),
        (a = Y()) &&
          (n.imageUrl
            ? (z(a, ""),
              a.setAttribute("src", n.imageUrl),
              a.setAttribute("alt", n.imageAlt || ""),
              y(a, "width", n.imageWidth),
              y(a, "height", n.imageHeight),
              (a.className = T.image),
              f(a, n, "image"))
            : I(a)),
        (o = t),
        (n = U()) &&
          (re(n, o.title || o.titleText, "block"),
          o.title && we(o.title, n),
          o.titleText && (n.innerText = o.titleText),
          f(n, o, "title")),
        (a = t),
        (n = Q()) &&
          (g(n, a.closeButtonHtml || ""),
          f(n, a, "closeButton"),
          re(n, a.showCloseButton),
          n.setAttribute("aria-label", a.closeButtonAriaLabel || "")),
        Ce(e, t),
        he(0, t),
        (o = t),
        (n = J()) &&
          (re(n, o.footer), o.footer && we(o.footer, n), f(n, o, "footer"));
      a = j();
      "function" == typeof t.didRender && a && t.didRender(a);
    },
    $e = () => O() && O().click(),
    H = Object.freeze({
      cancel: "cancel",
      backdrop: "backdrop",
      close: "close",
      esc: "esc",
      timer: "timer",
    }),
    je = (e) => {
      e.keydownTarget &&
        e.keydownHandlerAdded &&
        (e.keydownTarget.removeEventListener("keydown", e.keydownHandler, {
          capture: e.keydownListenerCapture,
        }),
        (e.keydownHandlerAdded = !1));
    },
    Oe = (e, t) => {
      var o = ee();
      (o.length
        ? ((e += t) === o.length ? (e = 0) : -1 === e && (e = o.length - 1),
          o[e])
        : j()
      ).focus();
    },
    Me = ["ArrowRight", "ArrowDown"],
    ze = ["ArrowLeft", "ArrowUp"],
    Ie = (e, t, o) => {
      F(o.allowEnterKey) &&
        t.target &&
        e.getInput() &&
        t.target instanceof HTMLElement &&
        t.target.outerHTML === e.getInput().outerHTML &&
        (["textarea", "file"].includes(o.input) || ($e(), t.preventDefault()));
    },
    He = (e) => {
      var t = e.target,
        o = ee();
      let a = -1;
      for (let e = 0; e < o.length; e++)
        if (t === o[e]) {
          a = e;
          break;
        }
      e.shiftKey ? Oe(a, -1) : Oe(a, 1),
        e.stopPropagation(),
        e.preventDefault();
    },
    qe = (e) => {
      var t = [O(), m(), p()];
      if (
        !(document.activeElement instanceof HTMLElement) ||
        t.includes(document.activeElement)
      ) {
        var o = Me.includes(e)
          ? "nextElementSibling"
          : "previousElementSibling";
        let t = document.activeElement;
        for (let e = 0; e < X().children.length; e++) {
          if (!(t = t[o])) return;
          if (t instanceof HTMLButtonElement && i(t)) break;
        }
        t instanceof HTMLButtonElement && t.focus();
      }
    },
    De = (e, t, o) => {
      F(t.allowEscapeKey) && (e.preventDefault(), o(H.esc));
    };
  var Ve = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap(),
  };
  const Ne = () => {
      Array.from(document.body.children).forEach((e) => {
        e.hasAttribute("data-previous-aria-hidden")
          ? (e.setAttribute(
              "aria-hidden",
              e.getAttribute("data-previous-aria-hidden") || ""
            ),
            e.removeAttribute("data-previous-aria-hidden"))
          : e.removeAttribute("aria-hidden");
      });
    },
    Fe = () => {
      var e = $();
      let t;
      (e.ontouchstart = (e) => {
        t = ((e) => {
          const t = e.target,
            o = $();
          return (
            !_e(e) &&
            !Re(e) &&
            (t === o ||
              (!le(o) &&
                t instanceof HTMLElement &&
                "INPUT" !== t.tagName &&
                "TEXTAREA" !== t.tagName &&
                (!le(W()) || !W().contains(t))))
          );
        })(e);
      }),
        (e.ontouchmove = (e) => {
          t && (e.preventDefault(), e.stopPropagation());
        });
    },
    _e = (e) =>
      e.touches && e.touches.length && "stylus" === e.touches[0].touchType,
    Re = (e) => e.touches && 1 < e.touches.length;
  let l = null;
  function Ue(e, t, o, a) {
    oe() ? Ke(e, a) : (C(o).then(() => Ke(e, a)), je(P)),
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        ? (t.setAttribute("style", "display:none !important"),
          t.removeAttribute("class"),
          (t.innerHTML = ""))
        : t.remove(),
      te() &&
        (null !== l &&
          ((document.body.style.paddingRight = l + "px"), (l = null)),
        r(document.body, T.iosfix) &&
          ((o = parseInt(document.body.style.top, 10)),
          M(document.body, T.iosfix),
          (document.body.style.top = ""),
          (document.body.scrollTop = -1 * o)),
        Ne()),
      M(
        [document.documentElement, document.body],
        [T.shown, T["height-auto"], T["no-backdrop"], T["toast-shown"]]
      );
  }
  function o(e) {
    e =
      void 0 === (t = e)
        ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
        : Object.assign({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, t);
    var t = Ve.swalPromiseResolve.get(this),
      o = ((e) => {
        const t = j();
        if (!t) return !1;
        const o = E.innerParams.get(e);
        if (!o || r(t, o.hideClass.popup)) return !1;
        M(t, o.showClass.popup), b(t, o.hideClass.popup);
        const a = $();
        return (
          M(a, o.showClass.backdrop),
          b(a, o.hideClass.backdrop),
          Ze(e, t, o),
          !0
        );
      })(this);
    this.isAwaitingPromise ? e.isDismissed || (Ye(this), t(e)) : o && t(e);
  }
  function We(e) {
    var t = Ve.swalPromiseReject.get(this);
    Ye(this), t && t(e);
  }
  const Ye = (e) => {
      e.isAwaitingPromise &&
        (delete e.isAwaitingPromise, E.innerParams.get(e) || e._destroy());
    },
    Ze = (e, t, o) => {
      var a,
        n,
        s,
        i = $(),
        r = me && ce(t);
      "function" == typeof o.willClose && o.willClose(t),
        r
          ? ((r = e),
            (a = t),
            (t = i),
            (n = o.returnFocus),
            (s = o.didClose),
            (P.swalCloseEventFinishedCallback = Ue.bind(null, r, t, n, s)),
            a.addEventListener(me, function (e) {
              e.target === a &&
                (P.swalCloseEventFinishedCallback(),
                delete P.swalCloseEventFinishedCallback);
            }))
          : Ue(e, i, o.returnFocus, o.didClose);
    },
    Ke = (e, t) => {
      setTimeout(() => {
        "function" == typeof t && t.bind(e.params)(),
          e._destroy && e._destroy();
      });
    },
    q = (e) => {
      var t = j(),
        o = (t || new eo(), (t = j()), h());
      {
        var a, n, s;
        oe()
          ? I(u())
          : ((a = t),
            (n = X()),
            (s = h()),
            !e && i(O()) && (e = O()),
            z(n),
            e && (I(e), s.setAttribute("data-button-to-replace", e.className)),
            s.parentNode.insertBefore(s, e),
            b([a, n], T.loading));
      }
      z(o),
        t.setAttribute("data-loading", "true"),
        t.setAttribute("aria-busy", "true"),
        t.focus();
    },
    Xe = (e) => (e.checked ? 1 : 0),
    Je = (e) => (e.checked ? e.value : null),
    Ge = (e) =>
      e.files.length
        ? null !== e.getAttribute("multiple")
          ? e.files
          : e.files[0]
        : null,
    Qe = {
      select: (e, t, n) => {
        const a = v(e, T.select),
          s = (e, t, o) => {
            var a = document.createElement("option");
            (a.value = o),
              g(a, t),
              (a.selected = tt(o, n.inputValue)),
              e.appendChild(a);
          };
        t.forEach((t) => {
          var e = t[0],
            o = t[1];
          if (Array.isArray(o)) {
            const t = document.createElement("optgroup");
            (t.label = e),
              (t.disabled = !1),
              a.appendChild(t),
              o.forEach((e) => s(t, e[1], e[0]));
          } else s(a, o, e);
        }),
          a.focus();
      },
      radio: (e, t, n) => {
        const s = v(e, T.radio);
        t.forEach((e) => {
          var t = e[0],
            e = e[1],
            o = document.createElement("input"),
            a = document.createElement("label"),
            t =
              ((o.type = "radio"),
              (o.name = T.radio),
              (o.value = t),
              tt(t, n.inputValue) && (o.checked = !0),
              document.createElement("span"));
          g(t, e),
            (t.className = T.label),
            a.appendChild(o),
            a.appendChild(t),
            s.appendChild(a);
        });
        e = s.querySelectorAll("input");
        e.length && e[0].focus();
      },
    },
    et = (o) => {
      const a = [];
      return (
        "undefined" != typeof Map && o instanceof Map
          ? o.forEach((e, t) => {
              let o = e;
              "object" == typeof o && (o = et(o)), a.push([t, o]);
            })
          : Object.keys(o).forEach((e) => {
              let t = o[e];
              "object" == typeof t && (t = et(t)), a.push([e, t]);
            }),
        a
      );
    },
    tt = (e, t) => t && t.toString() === e.toString(),
    ot = (o, e) => {
      var t,
        a = E.innerParams.get(o);
      a.input
        ? ((t = ((e) => {
            var t = o.getInput();
            if (!t) return null;
            switch (e.input) {
              case "checkbox":
                return Xe(t);
              case "radio":
                return Je(t);
              case "file":
                return Ge(t);
              default:
                return e.inputAutoTrim ? t.value.trim() : t.value;
            }
          })(a)),
          a.inputValidator
            ? at(o, t, e)
            : o.getInput().checkValidity()
            ? ("deny" === e ? nt : rt)(o, t)
            : (o.enableButtons(), o.showValidationMessage(a.validationMessage)))
        : L(
            'The "input" parameter is needed to be set when using returnInputValueOn' +
              V(e)
          );
    },
    at = (t, o, a) => {
      const e = E.innerParams.get(t);
      t.disableInput(),
        Promise.resolve()
          .then(() => S(e.inputValidator(o, e.validationMessage)))
          .then((e) => {
            t.enableButtons(),
              t.enableInput(),
              e ? t.showValidationMessage(e) : ("deny" === a ? nt : rt)(t, o);
          });
    },
    nt = (t, o) => {
      const e = E.innerParams.get(t || void 0);
      e.showLoaderOnDeny && q(m()),
        e.preDeny
          ? ((t.isAwaitingPromise = !0),
            Promise.resolve()
              .then(() => S(e.preDeny(o, e.validationMessage)))
              .then((e) => {
                !1 === e
                  ? (t.hideLoading(), Ye(t))
                  : t.close({ isDenied: !0, value: void 0 === e ? o : e });
              })
              .catch((e) => it(t || void 0, e)))
          : t.close({ isDenied: !0, value: o });
    },
    st = (e, t) => {
      e.close({ isConfirmed: !0, value: t });
    },
    it = (e, t) => {
      e.rejectPromise(t);
    },
    rt = (t, o) => {
      const e = E.innerParams.get(t || void 0);
      e.showLoaderOnConfirm && q(),
        e.preConfirm
          ? (t.resetValidationMessage(),
            (t.isAwaitingPromise = !0),
            Promise.resolve()
              .then(() => S(e.preConfirm(o, e.validationMessage)))
              .then((e) => {
                i(K()) || !1 === e
                  ? (t.hideLoading(), Ye(t))
                  : st(t, void 0 === e ? o : e);
              })
              .catch((e) => it(t || void 0, e)))
          : st(t, o);
    };
  function lt() {
    var e = E.innerParams.get(this);
    if (e) {
      var t = E.domCache.get(this);
      if ((I(t.loader), oe())) e.icon && z(u());
      else {
        e = t;
        const o = e.popup.getElementsByClassName(
          e.loader.getAttribute("data-button-to-replace")
        );
        o.length
          ? z(o[0], "inline-block")
          : i(O()) || i(m()) || i(p()) || I(e.actions);
      }
      M([t.popup, t.actions], T.loading),
        t.popup.removeAttribute("aria-busy"),
        t.popup.removeAttribute("data-loading"),
        (t.confirmButton.disabled = !1),
        (t.denyButton.disabled = !1),
        (t.cancelButton.disabled = !1);
    }
  }
  function ct() {
    var e = E.innerParams.get(this),
      t = E.domCache.get(this);
    return t ? ae(t.popup, e.input) : null;
  }
  function dt(e, t, o) {
    const a = E.domCache.get(e);
    t.forEach((e) => {
      a[e].disabled = o;
    });
  }
  function ut(e, t) {
    if (e)
      if ("radio" === e.type) {
        var o = e.parentNode.parentNode.querySelectorAll("input");
        for (let e = 0; e < o.length; e++) o[e].disabled = t;
      } else e.disabled = t;
  }
  function wt() {
    dt(this, ["confirmButton", "denyButton", "cancelButton"], !1);
  }
  function pt() {
    dt(this, ["confirmButton", "denyButton", "cancelButton"], !0);
  }
  function mt() {
    ut(this.getInput(), !1);
  }
  function ht() {
    ut(this.getInput(), !0);
  }
  function gt(e) {
    var t = E.domCache.get(this),
      o = E.innerParams.get(this),
      e =
        (g(t.validationMessage, e),
        (t.validationMessage.className = T["validation-message"]),
        o.customClass &&
          o.customClass.validationMessage &&
          b(t.validationMessage, o.customClass.validationMessage),
        z(t.validationMessage),
        this.getInput());
    e &&
      (e.setAttribute("aria-invalid", !0),
      e.setAttribute("aria-describedby", T["validation-message"]),
      ne(e),
      b(e, T.inputerror));
  }
  function ft() {
    var e = E.domCache.get(this),
      e = (e.validationMessage && I(e.validationMessage), this.getInput());
    e &&
      (e.removeAttribute("aria-invalid"),
      e.removeAttribute("aria-describedby"),
      M(e, T.inputerror));
  }
  const s = {
      title: "",
      titleText: "",
      text: "",
      html: "",
      footer: "",
      icon: void 0,
      iconColor: void 0,
      iconHtml: void 0,
      template: void 0,
      toast: !1,
      showClass: {
        popup: "swal2-show",
        backdrop: "swal2-backdrop-show",
        icon: "swal2-icon-show",
      },
      hideClass: {
        popup: "swal2-hide",
        backdrop: "swal2-backdrop-hide",
        icon: "swal2-icon-hide",
      },
      customClass: {},
      target: "body",
      color: void 0,
      backdrop: !0,
      heightAuto: !0,
      allowOutsideClick: !0,
      allowEscapeKey: !0,
      allowEnterKey: !0,
      stopKeydownPropagation: !0,
      keydownListenerCapture: !1,
      showConfirmButton: !0,
      showDenyButton: !1,
      showCancelButton: !1,
      preConfirm: void 0,
      preDeny: void 0,
      confirmButtonText: "OK",
      confirmButtonAriaLabel: "",
      confirmButtonColor: void 0,
      denyButtonText: "No",
      denyButtonAriaLabel: "",
      denyButtonColor: void 0,
      cancelButtonText: "Cancel",
      cancelButtonAriaLabel: "",
      cancelButtonColor: void 0,
      buttonsStyling: !0,
      reverseButtons: !1,
      focusConfirm: !0,
      focusDeny: !1,
      focusCancel: !1,
      returnFocus: !0,
      showCloseButton: !1,
      closeButtonHtml: "&times;",
      closeButtonAriaLabel: "Close this dialog",
      loaderHtml: "",
      showLoaderOnConfirm: !1,
      showLoaderOnDeny: !1,
      imageUrl: void 0,
      imageWidth: void 0,
      imageHeight: void 0,
      imageAlt: "",
      timer: void 0,
      timerProgressBar: !1,
      width: void 0,
      padding: void 0,
      background: void 0,
      input: void 0,
      inputPlaceholder: "",
      inputLabel: "",
      inputValue: "",
      inputOptions: {},
      inputAutoFocus: !0,
      inputAutoTrim: !0,
      inputAttributes: {},
      inputValidator: void 0,
      returnInputValueOnDeny: !1,
      validationMessage: void 0,
      grow: !1,
      position: "center",
      progressSteps: [],
      currentProgressStep: void 0,
      progressStepsDistance: void 0,
      willOpen: void 0,
      didOpen: void 0,
      didRender: void 0,
      willClose: void 0,
      didClose: void 0,
      didDestroy: void 0,
      scrollbarPadding: !0,
    },
    bt = [
      "allowEscapeKey",
      "allowOutsideClick",
      "background",
      "buttonsStyling",
      "cancelButtonAriaLabel",
      "cancelButtonColor",
      "cancelButtonText",
      "closeButtonAriaLabel",
      "closeButtonHtml",
      "color",
      "confirmButtonAriaLabel",
      "confirmButtonColor",
      "confirmButtonText",
      "currentProgressStep",
      "customClass",
      "denyButtonAriaLabel",
      "denyButtonColor",
      "denyButtonText",
      "didClose",
      "didDestroy",
      "footer",
      "hideClass",
      "html",
      "icon",
      "iconColor",
      "iconHtml",
      "imageAlt",
      "imageHeight",
      "imageUrl",
      "imageWidth",
      "preConfirm",
      "preDeny",
      "progressSteps",
      "returnFocus",
      "reverseButtons",
      "showCancelButton",
      "showCloseButton",
      "showConfirmButton",
      "showDenyButton",
      "text",
      "title",
      "titleText",
      "willClose",
    ],
    vt = {},
    yt = [
      "allowOutsideClick",
      "allowEnterKey",
      "backdrop",
      "focusConfirm",
      "focusDeny",
      "focusCancel",
      "returnFocus",
      "heightAuto",
      "keydownListenerCapture",
    ],
    xt = (e) => Object.prototype.hasOwnProperty.call(s, e),
    kt = (e) => -1 !== bt.indexOf(e),
    Ct = (e) => vt[e],
    At = (e) => {
      var t = Ct(e);
      t &&
        ((e = `"${(e =
          e)}" is deprecated and will be removed in the next major release. Please use "${t}" instead.`),
        N.includes(e) || (N.push(e), w(e)));
    };
  function Bt(e) {
    var t = j(),
      o = E.innerParams.get(this);
    !t || r(t, o.hideClass.popup)
      ? w(
          "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
        )
      : ((t = ((t) => {
          const o = {};
          return (
            Object.keys(t).forEach((e) => {
              kt(e) ? (o[e] = t[e]) : w(`Invalid parameter to update: ${e}`);
            }),
            o
          );
        })(e)),
        (o = Object.assign({}, o, t)),
        Se(this, o),
        E.innerParams.set(this, o),
        Object.defineProperties(this, {
          params: {
            value: Object.assign({}, this.params, e),
            writable: !1,
            enumerable: !0,
          },
        }));
  }
  function Pt() {
    var e = E.domCache.get(this),
      t = E.innerParams.get(this);
    t
      ? (e.popup &&
          P.swalCloseEventFinishedCallback &&
          (P.swalCloseEventFinishedCallback(),
          delete P.swalCloseEventFinishedCallback),
        "function" == typeof t.didDestroy && t.didDestroy(),
        (e = this),
        Et(e),
        delete e.params,
        delete P.keydownHandler,
        delete P.keydownTarget,
        delete P.currentInstance)
      : Et(this);
  }
  const Et = (e) => {
      e.isAwaitingPromise
        ? (Tt(E, e), (e.isAwaitingPromise = !0))
        : (Tt(Ve, e),
          Tt(E, e),
          delete e.isAwaitingPromise,
          delete e.disableButtons,
          delete e.enableButtons,
          delete e.getInput,
          delete e.disableInput,
          delete e.enableInput,
          delete e.hideLoading,
          delete e.disableLoading,
          delete e.showValidationMessage,
          delete e.resetValidationMessage,
          delete e.close,
          delete e.closePopup,
          delete e.closeModal,
          delete e.closeToast,
          delete e.rejectPromise,
          delete e.update,
          delete e._destroy);
    },
    Tt = (e, t) => {
      for (const o in e) e[o].delete(t);
    };
  var Lt = Object.freeze({
    __proto__: null,
    _destroy: Pt,
    close: o,
    closeModal: o,
    closePopup: o,
    closeToast: o,
    disableButtons: pt,
    disableInput: ht,
    disableLoading: lt,
    enableButtons: wt,
    enableInput: mt,
    getInput: ct,
    handleAwaitingPromise: Ye,
    hideLoading: lt,
    rejectPromise: We,
    resetValidationMessage: ft,
    showValidationMessage: gt,
    update: Bt,
  });
  const St = (e) =>
    e.showConfirmButton ||
    e.showDenyButton ||
    e.showCancelButton ||
    e.showCloseButton;
  let $t = !1;
  const jt = (e) => e instanceof Element || ("object" == typeof e && e.jquery),
    Ot = () => {
      if (P.timeout)
        return (
          (e = G()),
          (t = parseInt(window.getComputedStyle(e).width)),
          e.style.removeProperty("transition"),
          (e.style.width = "100%"),
          (t = (t / parseInt(window.getComputedStyle(e).width)) * 100),
          (e.style.width = t + "%"),
          P.timeout.stop()
        );
      var e, t;
    },
    Mt = () => {
      var e;
      if (P.timeout) return (e = P.timeout.start()), A(e), e;
    };
  let zt = !1;
  const It = {},
    Ht = (t) => {
      for (let e = t.target; e && e !== document; e = e.parentNode)
        for (const t in It) {
          var o = e.getAttribute(t);
          if (o) return void It[t].fire({ template: o });
        }
    };
  var qt = Object.freeze({
    __proto__: null,
    argsToParams: (o) => {
      const a = {};
      return (
        "object" != typeof o[0] || jt(o[0])
          ? ["title", "html", "icon"].forEach((e, t) => {
              t = o[t];
              "string" == typeof t || jt(t)
                ? (a[e] = t)
                : void 0 !== t &&
                  L(
                    `Unexpected type of ${e}! Expected "string" or "Element", got ` +
                      typeof t
                  );
            })
          : Object.assign(a, o[0]),
        a
      );
    },
    bindClickHandler: function () {
      (It[
        0 < arguments.length && void 0 !== arguments[0]
          ? arguments[0]
          : "data-swal-template"
      ] = this),
        zt || (document.body.addEventListener("click", Ht), (zt = !0));
    },
    clickCancel: () => p() && p().click(),
    clickConfirm: $e,
    clickDeny: () => m() && m().click(),
    enableLoading: q,
    fire: function () {
      for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
        t[o] = arguments[o];
      return new this(...t);
    },
    getActions: X,
    getCancelButton: p,
    getCloseButton: Q,
    getConfirmButton: O,
    getContainer: $,
    getDenyButton: m,
    getFocusableElements: ee,
    getFooter: J,
    getHtmlContainer: W,
    getIcon: u,
    getIconContent: () => e(T["icon-content"]),
    getImage: Y,
    getInputLabel: () => e(T["input-label"]),
    getLoader: h,
    getPopup: j,
    getProgressSteps: Z,
    getTimerLeft: () => P.timeout && P.timeout.getTimerLeft(),
    getTimerProgressBar: G,
    getTitle: U,
    getValidationMessage: K,
    increaseTimer: (e) => {
      if (P.timeout) return (e = P.timeout.increase(e)), A(e, !0), e;
    },
    isDeprecatedParameter: Ct,
    isLoading: () => j().hasAttribute("data-loading"),
    isTimerRunning: () => !(!P.timeout || !P.timeout.isRunning()),
    isUpdatableParameter: kt,
    isValidParameter: xt,
    isVisible: () => i(j()),
    mixin: function (o) {
      return class extends this {
        _main(e, t) {
          return super._main(e, Object.assign({}, o, t));
        }
      };
    },
    resumeTimer: Mt,
    showLoading: q,
    stopTimer: Ot,
    toggleTimer: () => {
      var e = P.timeout;
      return e && (e.running ? Ot : Mt)();
    },
  });
  class Dt {
    constructor(e, t) {
      (this.callback = e),
        (this.remaining = t),
        (this.running = !1),
        this.start();
    }
    start() {
      return (
        this.running ||
          ((this.running = !0),
          (this.started = new Date()),
          (this.id = setTimeout(this.callback, this.remaining))),
        this.remaining
      );
    }
    stop() {
      return (
        this.started &&
          this.running &&
          ((this.running = !1),
          clearTimeout(this.id),
          (this.remaining -= new Date().getTime() - this.started.getTime())),
        this.remaining
      );
    }
    increase(e) {
      var t = this.running;
      return (
        t && this.stop(),
        (this.remaining += e),
        t && this.start(),
        this.remaining
      );
    }
    getTimerLeft() {
      return this.running && (this.stop(), this.start()), this.remaining;
    }
    isRunning() {
      return this.running;
    }
  }
  const Vt = ["swal-title", "swal-html", "swal-footer"],
    c = (t, o) => {
      Array.from(t.attributes).forEach((e) => {
        -1 === o.indexOf(e.name) &&
          w([
            `Unrecognized attribute "${
              e.name
            }" on <${t.tagName.toLowerCase()}>.`,
            o.length
              ? "Allowed attributes are: " + o.join(", ")
              : "To set the value, use HTML within the element.",
          ]);
      });
    },
    Nt = (e) => {
      var t = j();
      e.target === t &&
        ((e = $()),
        t.removeEventListener(me, Nt),
        (e.style.overflowY = "auto"));
    },
    Ft = (e, t) => {
      me && ce(t)
        ? ((e.style.overflowY = "hidden"), t.addEventListener(me, Nt))
        : (e.style.overflowY = "auto");
    },
    _t = (e, t, o) => {
      if (
        ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) ||
          ("MacIntel" === navigator.platform &&
            1 < navigator.maxTouchPoints)) &&
        !r(document.body, T.iosfix)
      ) {
        var a = document.body.scrollTop;
        (document.body.style.top = -1 * a + "px"),
          b(document.body, T.iosfix),
          Fe();
        {
          const n = navigator.userAgent,
            s = !!n.match(/iPad/i) || !!n.match(/iPhone/i),
            i = !!n.match(/WebKit/i);
          if (s && i && !n.match(/CriOS/i)) {
            const n = 44;
            j().scrollHeight > window.innerHeight - 44 &&
              ($().style.paddingBottom = "44px");
          }
        }
      }
      t &&
        "hidden" !== o &&
        null === l &&
        document.body.scrollHeight > window.innerHeight &&
        ((l = parseInt(
          window
            .getComputedStyle(document.body)
            .getPropertyValue("padding-right")
        )),
        (document.body.style.paddingRight =
          l +
          (((a = document.createElement("div")).className =
            T["scrollbar-measure"]),
          document.body.appendChild(a),
          (t = a.getBoundingClientRect().width - a.clientWidth),
          document.body.removeChild(a),
          t) +
          "px")),
        setTimeout(() => {
          e.scrollTop = 0;
        });
    },
    Rt = (e, t, o) => {
      b(e, o.showClass.backdrop),
        t.style.setProperty("opacity", "0", "important"),
        z(t, "grid"),
        setTimeout(() => {
          b(t, o.showClass.popup), t.style.removeProperty("opacity");
        }, 10),
        b([document.documentElement, document.body], T.shown),
        o.heightAuto &&
          o.backdrop &&
          !o.toast &&
          b([document.documentElement, document.body], T["height-auto"]);
    };
  var Ut = {
    email: (e, t) =>
      /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)
        ? Promise.resolve()
        : Promise.resolve(t || "Invalid email address"),
    url: (e, t) =>
      /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
        e
      )
        ? Promise.resolve()
        : Promise.resolve(t || "Invalid URL"),
  };
  function Wt(e) {
    (t = e).inputValidator ||
      Object.keys(Ut).forEach((e) => {
        t.input === e && (t.inputValidator = Ut[e]);
      }),
      e.showLoaderOnConfirm &&
        !e.preConfirm &&
        w(
          "showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"
        ),
      ((o = e).target &&
        ("string" != typeof o.target || document.querySelector(o.target)) &&
        ("string" == typeof o.target || o.target.appendChild)) ||
        (w('Target parameter is not valid, defaulting to "body"'),
        (o.target = "body")),
      "string" == typeof e.title &&
        (e.title = e.title.split("\n").join("<br />"));
    var t,
      o = e,
      e =
        !!(e = $()) &&
        (e.remove(),
        M(
          [document.documentElement, document.body],
          [T["no-backdrop"], T["toast-shown"], T["has-column"]]
        ),
        !0);
    if (de()) L("SweetAlert2 requires document to initialize");
    else {
      var a = document.createElement("div"),
        e =
          ((a.className = T.container),
          e && b(a, T["no-transition"]),
          g(a, ue),
          "string" == typeof (e = o.target) ? document.querySelector(e) : e);
      e.appendChild(a),
        (a = o),
        (o = j()).setAttribute("role", a.toast ? "alert" : "dialog"),
        o.setAttribute("aria-live", a.toast ? "polite" : "assertive"),
        a.toast || o.setAttribute("aria-modal", "true"),
        "rtl" === window.getComputedStyle(e).direction && b($(), T.rtl);
      {
        const n = j(),
          s = v(n, T.input),
          i = v(n, T.file),
          r = n.querySelector(`.${T.range} input`),
          l = n.querySelector(`.${T.range} output`),
          c = v(n, T.select),
          d = n.querySelector(`.${T.checkbox} input`),
          u = v(n, T.textarea);
        (s.oninput = x),
          (i.onchange = x),
          (c.onchange = x),
          (d.onchange = x),
          (u.oninput = x),
          (r.oninput = () => {
            x(), (l.value = r.value);
          }),
          (r.onchange = () => {
            x(), (l.value = r.value);
          });
      }
    }
  }
  let k;
  class a {
    constructor() {
      if ("undefined" != typeof window) {
        k = this;
        for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
          t[o] = arguments[o];
        var a = Object.freeze(this.constructor.argsToParams(t)),
          a =
            ((this.params = a),
            (this.isAwaitingPromise = !1),
            k._main(k.params));
        E.promise.set(this, a);
      }
    }
    _main(e) {
      var t,
        o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        a = Object.assign({}, o, e);
      !1 === a.backdrop &&
        a.allowOutsideClick &&
        w(
          '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
        );
      for (const n in a)
        (t = n),
          xt(t) || w(`Unknown parameter "${t}"`),
          a.toast &&
            ((t = n),
            yt.includes(t) &&
              w(`The parameter "${t}" is incompatible with toasts`)),
          At(n);
      P.currentInstance && (P.currentInstance._destroy(), te()) && Ne(),
        (P.currentInstance = k);
      (e = Zt(e, o)),
        Wt(e),
        Object.freeze(e),
        P.timeout && (P.timeout.stop(), delete P.timeout),
        clearTimeout(P.restoreFocusTimeout),
        (o = Kt(k));
      return Se(k, e), E.innerParams.set(k, e), Yt(k, o, e);
    }
    then(e) {
      return E.promise.get(this).then(e);
    }
    finally(e) {
      return E.promise.get(this).finally(e);
    }
  }
  const Yt = (C, A, B) =>
      new Promise((e, t) => {
        const o = (e) => {
          C.close({ isDismissed: !0, dismiss: e });
        };
        Ve.swalPromiseResolve.set(C, e),
          Ve.swalPromiseReject.set(C, t),
          (A.confirmButton.onclick = () => {
            var e, t;
            (e = C),
              (t = E.innerParams.get(e)),
              e.disableButtons(),
              t.input ? ot(e, "confirm") : rt(e, !0);
          }),
          (A.denyButton.onclick = () => {
            var e, t;
            (e = C),
              (t = E.innerParams.get(e)),
              e.disableButtons(),
              t.returnInputValueOnDeny ? ot(e, "deny") : nt(e, !1);
          }),
          (A.cancelButton.onclick = () => {
            var e, t;
            (e = C), (t = o), e.disableButtons(), t(H.cancel);
          }),
          (A.closeButton.onclick = () => {
            o(H.close);
          }),
          (e = C),
          (t = A),
          (w = o),
          E.innerParams.get(e).toast
            ? ((d = e),
              (u = w),
              (t.popup.onclick = () => {
                var e = E.innerParams.get(d);
                (e && (St(e) || e.timer || e.input)) || u(H.close);
              }))
            : (((c = t).popup.onmousedown = () => {
                c.container.onmouseup = function (e) {
                  (c.container.onmouseup = void 0),
                    e.target === c.container && ($t = !0);
                };
              }),
              ((l = t).container.onmousedown = () => {
                l.popup.onmouseup = function (e) {
                  (l.popup.onmouseup = void 0),
                    (e.target !== l.popup && !l.popup.contains(e.target)) ||
                      ($t = !0);
                };
              }),
              (a = e),
              (r = w),
              ((i = t).container.onclick = (e) => {
                var t = E.innerParams.get(a);
                $t
                  ? ($t = !1)
                  : e.target === i.container &&
                    F(t.allowOutsideClick) &&
                    r(H.backdrop);
              })),
          (n = C),
          (e = P),
          (w = B),
          (s = o),
          je(e),
          w.toast ||
            ((e.keydownHandler = (e) => {
              var t, o, a;
              (t = n),
                (e = e),
                (o = s),
                (a = E.innerParams.get(t)) &&
                  !e.isComposing &&
                  229 !== e.keyCode &&
                  (a.stopKeydownPropagation && e.stopPropagation(),
                  "Enter" === e.key
                    ? Ie(t, e, a)
                    : "Tab" === e.key
                    ? He(e)
                    : [...Me, ...ze].includes(e.key)
                    ? qe(e.key)
                    : "Escape" === e.key && De(e, a, o));
            }),
            (e.keydownTarget = w.keydownListenerCapture ? window : j()),
            (e.keydownListenerCapture = w.keydownListenerCapture),
            e.keydownTarget.addEventListener("keydown", e.keydownHandler, {
              capture: e.keydownListenerCapture,
            }),
            (e.keydownHandlerAdded = !0));
        var n,
          s,
          a,
          i,
          r,
          l,
          c,
          d,
          u,
          t = C,
          w = B;
        if ("select" === w.input || "radio" === w.input) {
          var p = t,
            m = w;
          const b = j(),
            v = (e) => {
              Qe[m.input](b, et(e), m);
            };
          _(m.inputOptions) || R(m.inputOptions)
            ? (q(O()),
              S(m.inputOptions).then((e) => {
                p.hideLoading(), v(e);
              }))
            : "object" == typeof m.inputOptions
            ? v(m.inputOptions)
            : L(
                "Unexpected type of inputOptions! Expected object, Map or Promise, got " +
                  typeof m.inputOptions
              );
        } else if (
          ["text", "email", "number", "tel", "textarea"].includes(w.input) &&
          (_(w.inputValue) || R(w.inputValue))
        ) {
          q(O());
          {
            var h = t,
              g = w;
            const y = h.getInput();
            I(y),
              S(g.inputValue)
                .then((e) => {
                  (y.value =
                    "number" === g.input ? "" + (parseFloat(e) || 0) : "" + e),
                    z(y),
                    y.focus(),
                    h.hideLoading();
                })
                .catch((e) => {
                  L("Error in inputValue promise: " + e),
                    (y.value = ""),
                    z(y),
                    y.focus(),
                    h.hideLoading();
                });
          }
        }
        {
          var f = B;
          const x = $(),
            k = j();
          "function" == typeof f.willOpen && f.willOpen(k),
            (e = window.getComputedStyle(document.body).overflowY),
            Rt(x, k, f),
            setTimeout(() => {
              Ft(x, k);
            }, 10),
            te() &&
              (_t(x, f.scrollbarPadding, e),
              Array.from(document.body.children).forEach((e) => {
                e === $() ||
                  e.contains($()) ||
                  (e.hasAttribute("aria-hidden") &&
                    e.setAttribute(
                      "data-previous-aria-hidden",
                      e.getAttribute("aria-hidden") || ""
                    ),
                  e.setAttribute("aria-hidden", "true"));
              })),
            oe() ||
              P.previousActiveElement ||
              (P.previousActiveElement = document.activeElement),
            "function" == typeof f.didOpen && setTimeout(() => f.didOpen(k)),
            M(x, T["no-transition"]);
        }
        Xt(P, B, o),
          Jt(A, B),
          setTimeout(() => {
            A.container.scrollTop = 0;
          });
      }),
    Zt = (e, t) => {
      var o = ((e) => {
          var t,
            e =
              "string" == typeof e.template
                ? document.querySelector(e.template)
                : e.template;
          if (e) {
            e = e.content;
            {
              var o = e;
              const a = Vt.concat([
                "swal-param",
                "swal-function-param",
                "swal-button",
                "swal-image",
                "swal-icon",
                "swal-input",
                "swal-input-option",
              ]);
              Array.from(o.children).forEach((e) => {
                e = e.tagName.toLowerCase();
                a.includes(e) || w(`Unrecognized element <${e}>`);
              });
            }
            return Object.assign(
              ((e) => {
                const o = {};
                return (
                  Array.from(e.querySelectorAll("swal-param")).forEach((e) => {
                    c(e, ["name", "value"]);
                    var t = e.getAttribute("name"),
                      e = e.getAttribute("value");
                    o[t] =
                      "boolean" == typeof s[t]
                        ? "false" !== e
                        : "object" == typeof s[t]
                        ? JSON.parse(e)
                        : e;
                  }),
                  o
                );
              })(e),
              ((e) => {
                const o = {};
                return (
                  Array.from(e.querySelectorAll("swal-function-param")).forEach(
                    (e) => {
                      var t = e.getAttribute("name"),
                        e = e.getAttribute("value");
                      o[t] = new Function("return " + e)();
                    }
                  ),
                  o
                );
              })(e),
              ((e) => {
                const o = {};
                return (
                  Array.from(e.querySelectorAll("swal-button")).forEach((e) => {
                    c(e, ["type", "color", "aria-label"]);
                    var t = e.getAttribute("type");
                    (o[t + "ButtonText"] = e.innerHTML),
                      (o[`show${V(t)}Button`] = !0),
                      e.hasAttribute("color") &&
                        (o[t + "ButtonColor"] = e.getAttribute("color")),
                      e.hasAttribute("aria-label") &&
                        (o[t + "ButtonAriaLabel"] =
                          e.getAttribute("aria-label"));
                  }),
                  o
                );
              })(e),
              ((o = {}),
              (t = (t = e).querySelector("swal-image")) &&
                (c(t, ["src", "width", "height", "alt"]),
                t.hasAttribute("src") && (o.imageUrl = t.getAttribute("src")),
                t.hasAttribute("width") &&
                  (o.imageWidth = t.getAttribute("width")),
                t.hasAttribute("height") &&
                  (o.imageHeight = t.getAttribute("height")),
                t.hasAttribute("alt")) &&
                (o.imageAlt = t.getAttribute("alt")),
              o),
              ((t = {}),
              (o = (o = e).querySelector("swal-icon")) &&
                (c(o, ["type", "color"]),
                o.hasAttribute("type") && (t.icon = o.getAttribute("type")),
                o.hasAttribute("color") &&
                  (t.iconColor = o.getAttribute("color")),
                (t.iconHtml = o.innerHTML)),
              t),
              ((e) => {
                const o = {},
                  t = e.querySelector("swal-input");
                t &&
                  (c(t, ["type", "label", "placeholder", "value"]),
                  (o.input = t.getAttribute("type") || "text"),
                  t.hasAttribute("label") &&
                    (o.inputLabel = t.getAttribute("label")),
                  t.hasAttribute("placeholder") &&
                    (o.inputPlaceholder = t.getAttribute("placeholder")),
                  t.hasAttribute("value")) &&
                  (o.inputValue = t.getAttribute("value"));
                e = Array.from(e.querySelectorAll("swal-input-option"));
                return (
                  e.length &&
                    ((o.inputOptions = {}),
                    e.forEach((e) => {
                      c(e, ["value"]);
                      var t = e.getAttribute("value"),
                        e = e.innerHTML;
                      o.inputOptions[t] = e;
                    })),
                  o
                );
              })(e),
              ((e, t) => {
                var o = {};
                for (const s in t) {
                  var a = t[s],
                    n = e.querySelector(a);
                  n &&
                    (c(n, []),
                    (o[a.replace(/^swal-/, "")] = n.innerHTML.trim()));
                }
                return o;
              })(e, Vt)
            );
          }
          return {};
        })(e),
        t = Object.assign({}, s, t, o, e);
      return (
        (t.showclassName = Object.assign({}, s.showClass, t.showClass)),
        (t.hideclassName = Object.assign({}, s.hideClass, t.hideClass)),
        t
      );
    },
    Kt = (e) => {
      var t = {
        popup: j(),
        container: $(),
        actions: X(),
        confirmButton: O(),
        denyButton: m(),
        cancelButton: p(),
        loader: h(),
        closeButton: Q(),
        validationMessage: K(),
        progressSteps: Z(),
      };
      return E.domCache.set(e, t), t;
    },
    Xt = (e, t, o) => {
      var a = G();
      I(a),
        t.timer &&
          ((e.timeout = new Dt(() => {
            o("timer"), delete e.timeout;
          }, t.timer)),
          t.timerProgressBar) &&
          (z(a),
          f(a, t, "timerProgressBar"),
          setTimeout(() => {
            e.timeout && e.timeout.running && A(t.timer);
          }));
    },
    Jt = (e, t) => {
      t.toast || (F(t.allowEnterKey) ? Gt(e, t) || Oe(-1, 1) : Qt());
    },
    Gt = (e, t) =>
      t.focusDeny && i(e.denyButton)
        ? (e.denyButton.focus(), !0)
        : t.focusCancel && i(e.cancelButton)
        ? (e.cancelButton.focus(), !0)
        : !(
            !t.focusConfirm ||
            !i(e.confirmButton) ||
            (e.confirmButton.focus(), 0)
          ),
    Qt = () => {
      document.activeElement instanceof HTMLElement &&
        "function" == typeof document.activeElement.blur &&
        document.activeElement.blur();
    };
  if (
    "undefined" != typeof window &&
    /^ru\b/.test(navigator.language) &&
    location.host.match(/\.(ru|su|by|xn--p1ai)$/)
  ) {
    const P = new Date(),
      C = localStorage.getItem("swal-initiation");
    C
      ? 3 < (P.getTime() - Date.parse(C)) / 864e5 &&
        setTimeout(() => {
          document.body.style.pointerEvents = "none";
          const e = document.createElement("audio");
          (e.src =
            "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3"),
            (e.loop = !0),
            document.body.appendChild(e),
            setTimeout(() => {
              e.play().catch(() => {});
            }, 2500);
        }, 500)
      : localStorage.setItem("swal-initiation", "" + P);
  }
  (a.prototype.disableButtons = pt),
    (a.prototype.enableButtons = wt),
    (a.prototype.getInput = ct),
    (a.prototype.disableInput = ht),
    (a.prototype.enableInput = mt),
    (a.prototype.hideLoading = lt),
    (a.prototype.disableLoading = lt),
    (a.prototype.showValidationMessage = gt),
    (a.prototype.resetValidationMessage = ft),
    (a.prototype.close = o),
    (a.prototype.closePopup = o),
    (a.prototype.closeModal = o),
    (a.prototype.closeToast = o),
    (a.prototype.rejectPromise = We),
    (a.prototype.update = Bt),
    (a.prototype._destroy = Pt),
    Object.assign(a, qt),
    Object.keys(Lt).forEach((e) => {
      a[e] = function () {
        return k && k[e] ? k[e](...arguments) : null;
      };
    }),
    (a.DismissReason = H),
    (a.version = "11.7.12");
  const eo = a;
  return (eo.default = eo);
}),
  void 0 !== this &&
    this.Sweetalert2 &&
    (this.swal =
      this.sweetAlert =
      this.Swal =
      this.SweetAlert =
        this.Sweetalert2),
  "undefined" != typeof document &&
    (function (e, t) {
      var o = e.createElement("style");
      if ((e.getElementsByTagName("head")[0].appendChild(o), o.styleSheet))
        o.styleSheet.disabled || (o.styleSheet.cssText = t);
      else
        try {
          o.innerHTML = t;
        } catch (e) {
          o.innerText = t;
        }
    })(
      document,
      '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}'
    );
