!(function (v, o) {
  v.fn.extend({
    _aria: function (e, t) {
      return this.attr("aria-" + e, t);
    },
    _removeAria: function (e) {
      return this.removeAttr("aria-" + e);
    },
    _enableAria: function (e) {
      return null == e || e
        ? this.removeClass("disabled")._aria("disabled", "false")
        : this.addClass("disabled")._aria("disabled", "true");
    },
    _showAria: function (e) {
      return null == e || e
        ? this.show()._aria("hidden", "false")
        : this.hide()._aria("hidden", "true");
    },
    _selectAria: function (e) {
      return null == e || e
        ? this.addClass("current")._aria("selected", "true")
        : this.removeClass("current")._aria("selected", "false");
    },
    _id: function (e) {
      return e ? this.attr("id", e) : this.attr("id");
    },
  }),
    String.prototype.format ||
      (String.prototype.format = function () {
        for (
          var e =
              1 === arguments.length && v.isArray(arguments[0])
                ? arguments[0]
                : arguments,
            t = this,
            n = 0;
          n < e.length;
          n++
        )
          var a = new RegExp("\\{" + n + "\\}", "gm"), t = t.replace(a, e[n]);
        return t;
      });
  var c = 0,
    r = "jQu3ry_5teps_St@te_",
    u = "-t-",
    f = "-p-",
    p = "-h-",
    C = "Index out of range.",
    l = "One or more corresponding step {0} are missing.";
  function H(i, e, t) {
    var n = i.children(e.headerTag),
      s = i.children(e.bodyTag),
      a =
        (n.length > s.length
          ? M(l, "contents")
          : n.length < s.length && M(l, "titles"),
        e.startIndex);
    (t.stepCount = n.length),
      e.saveState &&
        v.cookie &&
        ((e = v.cookie(r + y(i))), (e = parseInt(e, 0)), !isNaN(e)) &&
        e < t.stepCount &&
        (a = e),
      (t.currentIndex = a),
      n.each(function (e) {
        var t = v(this),
          e = s.eq(e),
          n = e.data("mode"),
          n =
            null == n
              ? L.html
              : I(L, /^\s*$/.test(n) || isNaN(n) ? n : parseInt(n, 0)),
          a = n === L.html || e.data("url") === o ? "" : e.data("url"),
          r = n !== L.html && "1" === e.data("loaded"),
          t = v.extend({}, Q, {
            title: t.html(),
            content: n === L.html ? e.html() : "",
            contentUrl: a,
            contentMode: n,
            contentLoaded: r,
          });
        (e = t), g(i).push(e);
      });
  }
  function i(e, t) {
    var n = e.find(".steps li").eq(t.currentIndex);
    e.triggerHandler("finishing", [t.currentIndex])
      ? (n.addClass("done").removeClass("error"),
        e.triggerHandler("finished", [t.currentIndex]))
      : n.addClass("error");
  }
  function h(e) {
    var t = e.data("eventNamespace");
    return null == t && ((t = "." + y(e)), e.data("eventNamespace", t)), t;
  }
  function m(e, t) {
    var n = y(e);
    return e.find("#" + n + u + t);
  }
  function d(e, t) {
    var n = y(e);
    return e.find("#" + n + f + t);
  }
  function s(e) {
    return e.data("options");
  }
  function b(e) {
    return e.data("state");
  }
  function g(e) {
    return e.data("steps");
  }
  function x(e, t) {
    e = g(e);
    return (t < 0 || t >= e.length) && M(C), e[t];
  }
  function y(e) {
    var t = e.data("uid");
    return (
      null == t &&
        (null == (t = e._id()) && ((t = "steps-uid-".concat(c)), e._id(t)),
        c++,
        e.data("uid", t)),
      t
    );
  }
  function I(e, t) {
    var n;
    if ((N("enumType", e), N("keyOrValue", t), "string" == typeof t))
      return (n = e[t]) === o && M("The enum key '{0}' does not exist.", t), n;
    if ("number" == typeof t) {
      for (var a in e) if (e[a] === t) return t;
      M("Invalid enum value '{0}'.", t);
    } else M("Invalid key or value type.");
  }
  function _(e, t, n) {
    return a(e, t, n, ((e = 1), n.currentIndex + e));
  }
  function A(e, t, n) {
    return a(e, t, n, ((e = 1), n.currentIndex - e));
  }
  function P(e, t, n, a) {
    if (
      ((a < 0 || a >= n.stepCount) && M(C),
      !(t.forceMoveForward && a < n.currentIndex))
    ) {
      var r = n.currentIndex;
      if (e.triggerHandler("stepChanging", [n.currentIndex, a])) {
        (n.currentIndex = a), E(e, t, n), T(e, t, n, r), F(e, t, n), w(e, t, n);
        var i = n,
          s = a,
          o = r,
          l = function () {
            e.triggerHandler("stepChanged", [a, r]);
          },
          n = (n = e).find(".content > .body"),
          d = I(B, t.transitionEffect),
          c = t.transitionEffectSpeed,
          u = n.eq(s),
          f = n.eq(o);
        switch (d) {
          case B.fade:
          case B.slide:
            var p = d === B.fade ? "fadeOut" : "slideUp",
              h = d === B.fade ? "fadeIn" : "slideDown";
            (i.transitionElement = u),
              f[p](c, function () {
                var e = b(v(this)._showAria(!1).parent().parent());
                e.transitionElement &&
                  (e.transitionElement[h](c, function () {
                    v(this)._showAria();
                  })
                    .promise()
                    .done(l),
                  (e.transitionElement = null));
              });
            break;
          case B.slideLeft:
            var p = f.outerWidth(!0),
              m = o < s ? -p : p,
              p = o < s ? p : -p;
            v.when(
              f.animate({ left: m }, c, function () {
                v(this)._showAria(!1);
              }),
              u
                .css("left", p + "px")
                ._showAria()
                .animate({ left: 0 }, c)
            ).done(l);
            break;
          default:
            v.when(f._showAria(!1), u._showAria()).done(l);
        }
      } else e.find(".steps li").eq(r).addClass("error");
    }
  }
  function t(e) {
    var d = v.extend(!0, {}, K, e);
    return this.each(function () {
      var t,
        n,
        a,
        e = v(this),
        r = {
          currentIndex: d.startIndex,
          currentStep: null,
          stepCount: 0,
          transitionElement: null,
        },
        r =
          (e.data("options", d),
          e.data("state", r),
          e.data("steps", []),
          H(e, d, r),
          (t = e),
          (a = r),
          (r = '<{0} class="{1}">{2}</{0}>'),
          (s =
            I(O, (n = d).stepsOrientation) === O.vertical ? " vertical" : ""),
          (i = v(
            r.format(
              n.contentContainerTag,
              "content " + n.clearFixCssClass,
              t.html()
            )
          )),
          (r = v(
            r.format(
              n.stepsContainerTag,
              "steps " + n.clearFixCssClass,
              '<ul role="tablist"></ul>'
            )
          )),
          (l = i.children(n.headerTag)),
          (o = i.children(n.bodyTag)),
          t
            .attr("role", "application")
            .empty()
            .append(r)
            .append(i)
            .addClass(n.cssClass + " " + n.clearFixCssClass + s),
          o.each(function (e) {
            S(t, a, v(this), e);
          }),
          l.each(function (e) {
            D(t, n, a, v(this), e);
          }),
          T(t, n, a),
          t),
        i = n,
        s = a,
        o =
          (i.enablePagination &&
            ((o = '<li><a href="#{0}" role="menuitem">{1}</a></li>'),
            (l = ""),
            i.forceMoveForward ||
              (l += o.format("previous", i.labels.previous)),
            (l += o.format("next", i.labels.next)),
            i.enableFinishButton && (l += o.format("finish", i.labels.finish)),
            i.enableCancelButton && (l += o.format("cancel", i.labels.cancel)),
            r.append(
              '<{0} class="actions {1}"><ul role="menu" aria-label="{2}">{3}</ul></{0}>'.format(
                i.actionContainerTag,
                i.clearFixCssClass,
                i.labels.pagination,
                l
              )
            ),
            F(r, i, s),
            w(r, i, s)),
          e),
        l = d,
        r = h(o);
      o.bind("canceled" + r, l.onCanceled),
        o.bind("contentLoaded" + r, l.onContentLoaded),
        o.bind("finishing" + r, l.onFinishing),
        o.bind("finished" + r, l.onFinished),
        o.bind("init" + r, l.onInit),
        o.bind("stepChanging" + r, l.onStepChanging),
        o.bind("stepChanged" + r, l.onStepChanged),
        l.enableKeyNavigation && o.bind("keyup" + r, j),
        o.find(".actions a").bind("click" + r, U),
        d.autoFocus && 0 === c && m(e, d.startIndex).focus(),
        e.triggerHandler("init", [d.startIndex]);
    });
  }
  function n(e, t, n, a, r) {
    (a < 0 || a > n.stepCount) && M(C),
      (r = v.extend({}, Q, r)),
      (i = a),
      (s = r),
      g(e).splice(i, 0, s),
      n.currentIndex !== n.stepCount &&
        n.currentIndex >= a &&
        (n.currentIndex++, E(e, t, n)),
      n.stepCount++;
    var i = e.find(".content"),
      s = v("<{0}>{1}</{0}>".format(t.headerTag, r.title)),
      o = v("<{0}></{0}>".format(t.bodyTag));
    return (
      (null != r.contentMode && r.contentMode !== L.html) || o.html(r.content),
      0 === a
        ? i.prepend(o).prepend(s)
        : d(e, a - 1)
            .after(o)
            .after(s),
      S(e, n, o, a),
      D(e, t, n, s, a),
      k(e, t, n, a),
      a === n.currentIndex && T(e, t, n),
      F(e, t, n),
      e
    );
  }
  function j(e) {
    var t = v(this),
      n = s(t),
      a = b(t);
    if (n.suppressPaginationOnFocus && t.find(":focus").is(":input"))
      return e.preventDefault(), !1;
    var r = 37,
      i = 39;
    e.keyCode === r
      ? (e.preventDefault(), A(t, n, a))
      : e.keyCode === i && (e.preventDefault(), _(t, n, a));
  }
  function w(t, e, n) {
    if (0 < n.stepCount) {
      var a = n.currentIndex,
        r = x(t, a);
      if (!e.enableContentCache || !r.contentLoaded)
        switch (I(L, r.contentMode)) {
          case L.iframe:
            t.find(".content > .body")
              .eq(n.currentIndex)
              .empty()
              .html(
                '<iframe src="' +
                  r.contentUrl +
                  '" frameborder="0" scrolling="no" />'
              )
              .data("loaded", "1");
            break;
          case L.async:
            var i = d(t, a)
              ._aria("busy", "true")
              .empty()
              .append(q(e.loadingTemplate, { text: e.labels.loading }));
            v.ajax({ url: r.contentUrl, cache: !1 }).done(function (e) {
              i.empty().html(e)._aria("busy", "false").data("loaded", "1"),
                t.triggerHandler("contentLoaded", [a]);
            });
        }
    }
  }
  function a(e, t, n, a) {
    var r = n.currentIndex;
    return (
      0 <= a &&
      a < n.stepCount &&
      !(
        (t.forceMoveForward && a < n.currentIndex) ||
        ((a = (e = (t = m(e, a)).parent()).hasClass("disabled")),
        e._enableAria(),
        t.click(),
        r === n.currentIndex && a && (e._enableAria(!1), 1))
      )
    );
  }
  function U(e) {
    e.preventDefault();
    var e = v(this),
      t = e.parent().parent().parent().parent(),
      n = s(t),
      a = b(t),
      e = e.attr("href");
    switch (e.substring(e.lastIndexOf("#") + 1)) {
      case "cancel":
        t.triggerHandler("canceled");
        break;
      case "finish":
        i(t, a);
        break;
      case "next":
        _(t, n, a);
        break;
      case "previous":
        A(t, n, a);
    }
  }
  function F(e, t, n) {
    var a, r;
    t.enablePagination &&
      ((a = e.find(".actions a[href$='#finish']").parent()),
      (r = e.find(".actions a[href$='#next']").parent()),
      t.forceMoveForward ||
        e
          .find(".actions a[href$='#previous']")
          .parent()
          ._enableAria(0 < n.currentIndex),
      t.enableFinishButton && t.showFinishButtonAlways
        ? (a._enableAria(0 < n.stepCount),
          r._enableAria(1 < n.stepCount && n.stepCount > n.currentIndex + 1))
        : (a._showAria(
            t.enableFinishButton && n.stepCount === n.currentIndex + 1
          ),
          r
            ._showAria(0 === n.stepCount || n.stepCount > n.currentIndex + 1)
            ._enableAria(
              n.stepCount > n.currentIndex + 1 || !t.enableFinishButton
            )));
  }
  function T(e, t, n, a) {
    var r = m(e, n.currentIndex),
      t = v(
        '<span class="current-info audible">' + t.labels.current + " </span>"
      ),
      i = e.find(".content > .title");
    null != a &&
      ((e = m(e, a))
        .parent()
        .addClass("done")
        .removeClass("error")
        ._selectAria(!1),
      i.eq(a).removeClass("current").next(".body").removeClass("current"),
      (t = e.find(".current-info")),
      r.focus()),
      r.prepend(t).parent()._selectAria().removeClass("done")._enableAria(),
      i
        .eq(n.currentIndex)
        .addClass("current")
        .next(".body")
        .addClass("current");
  }
  function k(e, t, n, a) {
    for (var r = y(e), i = a; i < n.stepCount; i++) {
      var s = r + u + i,
        o = r + f + i,
        l = r + p + i,
        d = e.find(".title").eq(i)._id(l);
      e
        .find(".steps a")
        .eq(i)
        ._id(s)
        ._aria("controls", o)
        .attr("href", "#" + l)
        .html(q(t.titleTemplate, { index: i + 1, title: d.html() })),
        e.find(".body").eq(i)._id(o)._aria("labelledby", l);
    }
  }
  function z(e, t, n, a) {
    var r, i, s;
    return !(
      a < 0 ||
      a >= n.stepCount ||
      n.currentIndex === a ||
      ((i = a),
      g(e).splice(i, 1),
      n.currentIndex > a && (n.currentIndex--, E(e, t, n)),
      n.stepCount--,
      (i = a),
      (s = y((r = e))),
      r.find("#" + s + p + i).remove(),
      d(e, a).remove(),
      m(e, a).parent().remove(),
      0 === a && e.find(".steps li").first().addClass("first"),
      a === n.stepCount && e.find(".steps li").eq(a).addClass("last"),
      k(e, t, n, a),
      F(e, t, n),
      0)
    );
  }
  function S(e, t, n, a) {
    var e = y(e),
      r = e + p + a;
    n._id(e + f + a)
      .attr("role", "tabpanel")
      ._aria("labelledby", r)
      .addClass("body")
      ._showAria(t.currentIndex === a);
  }
  function q(e, t) {
    for (var n = e.match(/#([a-z]*)#/gi), a = 0; a < n.length; a++) {
      var r = n[a],
        i = r.substring(1, r.length - 1);
      t[i] === o &&
        M("The key '{0}' does not exist in the substitute collection!", i),
        (e = e.replace(r, t[i]));
    }
    return e;
  }
  function D(e, t, n, a, r) {
    var i = y(e),
      s = i + u + r,
      o = i + f + r,
      i = i + p + r,
      l = e.find(".steps > ul"),
      d = q(t.titleTemplate, { index: r + 1, title: a.html() }),
      s = v(
        '<li role="tab"><a id="' +
          s +
          '" href="#' +
          i +
          '" aria-controls="' +
          o +
          '">' +
          d +
          "</a></li>"
      );
    s._enableAria(t.enableAllSteps || n.currentIndex > r),
      n.currentIndex > r && s.addClass("done"),
      a._id(i).attr("tabindex", "-1").addClass("title"),
      0 === r
        ? l.prepend(s)
        : l
            .find("li")
            .eq(r - 1)
            .after(s),
      0 === r && l.find("li").removeClass("first").eq(r).addClass("first"),
      r === n.stepCount - 1 &&
        l.find("li").removeClass("last").eq(r).addClass("last"),
      s.children("a").bind("click" + h(e), $);
  }
  function E(e, t, n) {
    t.saveState && v.cookie && v.cookie(r + y(e), n.currentIndex);
  }
  function $(e) {
    e.preventDefault();
    var e = v(this),
      t = e.parent().parent().parent().parent(),
      n = s(t),
      a = b(t),
      r = a.currentIndex;
    if (
      (e.parent().is(":not(.disabled):not(.current)") &&
        ((e = e.attr("href")),
        P(t, n, a, parseInt(e.substring(e.lastIndexOf("-") + 1), 0))),
      r === a.currentIndex)
    )
      return m(t, r).focus(), !1;
  }
  function M(e) {
    throw (
      (1 < arguments.length &&
        (e = e.format(Array.prototype.slice.call(arguments, 1))),
      new Error(e))
    );
  }
  function N(e, t) {
    null == t && M("The argument '{0}' is null or undefined.", e);
  }
  (v.fn.steps = function (e) {
    return v.fn.steps[e]
      ? v.fn.steps[e].apply(this, Array.prototype.slice.call(arguments, 1))
      : "object" != typeof e && e
      ? void v.error("Method " + e + " does not exist on jQuery.steps")
      : t.apply(this, arguments);
  }),
    (v.fn.steps.add = function (e) {
      var t = b(this);
      return n(this, s(this), t, t.stepCount, e);
    }),
    (v.fn.steps.destroy = function () {
      var e = this,
        t = s(this),
        n = h(e);
      return (
        e
          .unbind(n)
          .removeData("uid")
          .removeData("options")
          .removeData("state")
          .removeData("steps")
          .removeData("eventNamespace")
          .find(".actions a")
          .unbind(n),
        e.removeClass(t.clearFixCssClass + " vertical"),
        (n = e.find(".content > *"))
          .removeData("loaded")
          .removeData("mode")
          .removeData("url"),
        n
          .removeAttr("id")
          .removeAttr("role")
          .removeAttr("tabindex")
          .removeAttr("class")
          .removeAttr("style")
          ._removeAria("labelledby")
          ._removeAria("hidden"),
        e
          .find(
            ".content > [data-mode='async'],.content > [data-mode='iframe']"
          )
          .empty(),
        (t = v(
          '<{0} class="{1}"></{0}>'.format(e.get(0).tagName, e.attr("class"))
        )),
        null != (n = e._id()) && "" !== n && t._id(n),
        t.html(e.find(".content").html()),
        e.after(t),
        e.remove(),
        t
      );
    }),
    (v.fn.steps.finish = function () {
      i(this, b(this));
    }),
    (v.fn.steps.getCurrentIndex = function () {
      return b(this).currentIndex;
    }),
    (v.fn.steps.getCurrentStep = function () {
      return x(this, b(this).currentIndex);
    }),
    (v.fn.steps.getStep = function (e) {
      return x(this, e);
    }),
    (v.fn.steps.insert = function (e, t) {
      return n(this, s(this), b(this), e, t);
    }),
    (v.fn.steps.next = function () {
      return _(this, s(this), b(this));
    }),
    (v.fn.steps.previous = function () {
      return A(this, s(this), b(this));
    }),
    (v.fn.steps.remove = function (e) {
      return z(this, s(this), b(this), e);
    }),
    (v.fn.steps.setStep = function (e, t) {
      throw new Error("Not yet implemented!");
    }),
    (v.fn.steps.skip = function (e) {
      throw new Error("Not yet implemented!");
    });
  var L = (v.fn.steps.contentMode = { html: 0, iframe: 1, async: 2 }),
    O = (v.fn.steps.stepsOrientation = { horizontal: 0, vertical: 1 }),
    B = (v.fn.steps.transitionEffect = {
      none: 0,
      fade: 1,
      slide: 2,
      slideLeft: 3,
    }),
    Q = (v.fn.steps.stepModel = {
      title: "",
      content: "",
      contentUrl: "",
      contentMode: L.html,
      contentLoaded: !1,
    }),
    K = (v.fn.steps.defaults = {
      headerTag: "h1",
      bodyTag: "div",
      contentContainerTag: "div",
      actionContainerTag: "div",
      stepsContainerTag: "div",
      cssClass: "wizard",
      clearFixCssClass: "clearfix",
      stepsOrientation: O.horizontal,
      titleTemplate: '<span class="number">#index#.</span> #title#',
      loadingTemplate: '<span class="spinner"></span> #text#',
      autoFocus: !1,
      enableAllSteps: !1,
      enableKeyNavigation: !0,
      enablePagination: !0,
      suppressPaginationOnFocus: !0,
      enableContentCache: !0,
      enableCancelButton: !1,
      enableFinishButton: !0,
      preloadContent: !1,
      showFinishButtonAlways: !1,
      forceMoveForward: !1,
      saveState: !1,
      startIndex: 0,
      transitionEffect: B.none,
      transitionEffectSpeed: 200,
      onStepChanging: function (e, t, n) {
        return !0;
      },
      onStepChanged: function (e, t, n) {},
      onCanceled: function (e) {},
      onFinishing: function (e, t) {
        return !0;
      },
      onFinished: function (e, t) {},
      onContentLoaded: function (e, t) {},
      onInit: function (e, t) {},
      labels: {
        cancel: "Cancel",
        current: "current step:",
        pagination: "Pagination",
        finish: "Finish",
        next: "Next",
        previous: "Previous",
        loading: "Loading ...",
      },
    });
})(jQuery);
