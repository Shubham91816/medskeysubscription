!(function (i) {
  ("undefined" != typeof jQuery && jQuery) ||
  "function" != typeof define ||
  !define.amd
    ? ("undefined" != typeof jQuery && jQuery) || "object" != typeof exports
      ? i(jQuery, document, window, navigator)
      : i(require("jquery"), document, window, navigator)
    : define(["jquery"], function (t) {
        return i(t, document, window, navigator);
      });
})(function (r, n, a, t, c) {
  "use strict";
  function i(t, i, s) {
    (this.VERSION = "2.3.1"),
      (this.input = t),
      (this.plugin_count = s),
      (this.current_plugin = 0),
      (this.calc_count = 0),
      (this.update_tm = 0),
      (this.old_from = 0),
      (this.old_to = 0),
      (this.old_min_interval = null),
      (this.raf_id = null),
      (this.dragging = !1),
      (this.force_redraw = !1),
      (this.no_diapason = !1),
      (this.has_tab_index = !0),
      (this.is_key = !1),
      (this.is_update = !1),
      (this.is_start = !0),
      (this.is_finish = !1),
      (this.is_active = !1),
      (this.is_resize = !1),
      (this.is_click = !1),
      (i = i || {}),
      (this.$cache = {
        win: r(a),
        body: r(n.body),
        input: r(t),
        cont: null,
        rs: null,
        min: null,
        max: null,
        from: null,
        to: null,
        single: null,
        bar: null,
        line: null,
        s_single: null,
        s_from: null,
        s_to: null,
        shad_single: null,
        shad_from: null,
        shad_to: null,
        edge: null,
        grid: null,
        grid_labels: [],
      }),
      (this.coords = {
        x_gap: 0,
        x_pointer: 0,
        w_rs: 0,
        w_rs_old: 0,
        w_handle: 0,
        p_gap: 0,
        p_gap_left: 0,
        p_gap_right: 0,
        p_step: 0,
        p_pointer: 0,
        p_handle: 0,
        p_single_fake: 0,
        p_single_real: 0,
        p_from_fake: 0,
        p_from_real: 0,
        p_to_fake: 0,
        p_to_real: 0,
        p_bar_x: 0,
        p_bar_w: 0,
        grid_gap: 0,
        big_num: 0,
        big: [],
        big_w: [],
        big_p: [],
        big_x: [],
      }),
      (this.labels = {
        w_min: 0,
        w_max: 0,
        w_from: 0,
        w_to: 0,
        w_single: 0,
        p_min: 0,
        p_max: 0,
        p_from_fake: 0,
        p_from_left: 0,
        p_to_fake: 0,
        p_to_left: 0,
        p_single_fake: 0,
        p_single_left: 0,
      });
    var o,
      e,
      t = (s = this.$cache.input).prop("value"),
      h = {
        skin: "flat",
        type: "single",
        min: 10,
        max: 100,
        from: null,
        to: null,
        step: 1,
        min_interval: 0,
        max_interval: 0,
        drag_interval: !1,
        values: [],
        p_values: [],
        from_fixed: !1,
        from_min: null,
        from_max: null,
        from_shadow: !1,
        to_fixed: !1,
        to_min: null,
        to_max: null,
        to_shadow: !1,
        prettify_enabled: !0,
        prettify_separator: " ",
        prettify: null,
        force_edges: !1,
        keyboard: !0,
        grid: !1,
        grid_margin: !0,
        grid_num: 4,
        grid_snap: !1,
        hide_min_max: !1,
        hide_from_to: !1,
        prefix: "",
        postfix: "",
        max_postfix: "",
        decorate_both: !0,
        values_separator: " — ",
        input_values_separator: ";",
        disable: !1,
        block: !1,
        extra_classes: "",
        scope: null,
        onStart: null,
        onChange: null,
        onFinish: null,
        onUpdate: null,
      };
    for (e in ("INPUT" !== s[0].nodeName &&
      console &&
      console.warn &&
      console.warn("Base element should be <input>!", s[0]),
    ((o = {
      skin: s.data("skin"),
      type: s.data("type"),
      min: s.data("min"),
      max: s.data("max"),
      from: s.data("from"),
      to: s.data("to"),
      step: s.data("step"),
      min_interval: s.data("minInterval"),
      max_interval: s.data("maxInterval"),
      drag_interval: s.data("dragInterval"),
      values: s.data("values"),
      from_fixed: s.data("fromFixed"),
      from_min: s.data("fromMin"),
      from_max: s.data("fromMax"),
      from_shadow: s.data("fromShadow"),
      to_fixed: s.data("toFixed"),
      to_min: s.data("toMin"),
      to_max: s.data("toMax"),
      to_shadow: s.data("toShadow"),
      prettify_enabled: s.data("prettifyEnabled"),
      prettify_separator: s.data("prettifySeparator"),
      force_edges: s.data("forceEdges"),
      keyboard: s.data("keyboard"),
      grid: s.data("grid"),
      grid_margin: s.data("gridMargin"),
      grid_num: s.data("gridNum"),
      grid_snap: s.data("gridSnap"),
      hide_min_max: s.data("hideMinMax"),
      hide_from_to: s.data("hideFromTo"),
      prefix: s.data("prefix"),
      postfix: s.data("postfix"),
      max_postfix: s.data("maxPostfix"),
      decorate_both: s.data("decorateBoth"),
      values_separator: s.data("valuesSeparator"),
      input_values_separator: s.data("inputValuesSeparator"),
      disable: s.data("disable"),
      block: s.data("block"),
      extra_classes: s.data("extraClasses"),
    }).values = o.values && o.values.split(",")),
    o))
      !o.hasOwnProperty(e) || (o[e] !== c && "" !== o[e]) || delete o[e];
    t !== c &&
      "" !== t &&
      ((t = t.split(
        o.input_values_separator || i.input_values_separator || ";"
      ))[0] &&
        t[0] == +t[0] &&
        (t[0] = +t[0]),
      t[1] && t[1] == +t[1] && (t[1] = +t[1]),
      i && i.values && i.values.length
        ? ((h.from = t[0] && i.values.indexOf(t[0])),
          (h.to = t[1] && i.values.indexOf(t[1])))
        : ((h.from = t[0] && +t[0]), (h.to = t[1] && +t[1]))),
      r.extend(h, i),
      r.extend(h, o),
      (this.options = h),
      (this.update_check = {}),
      this.validate(),
      (this.result = {
        input: this.$cache.input,
        slider: null,
        min: this.options.min,
        max: this.options.max,
        from: this.options.from,
        from_percent: 0,
        from_value: null,
        to: this.options.to,
        to_percent: 0,
        to_value: null,
      }),
      this.init();
  }
  var s,
    o = 0,
    e =
      ((t = t.userAgent),
      (s = /msie\s\d+/i),
      0 < t.search(s) &&
        s.exec(t).toString().split(" ")[1] < 9 &&
        (r("html").addClass("lt-ie9"), !0));
  Function.prototype.bind ||
    (Function.prototype.bind = function (s) {
      var o = this,
        e = [].slice;
      if ("function" != typeof o) throw new TypeError();
      var h = e.call(arguments, 1),
        r = function () {
          var t, i;
          return this instanceof r
            ? (((t = function () {}).prototype = o.prototype),
              (t = new t()),
              (i = o.apply(t, h.concat(e.call(arguments)))),
              Object(i) === i ? i : t)
            : o.apply(s, h.concat(e.call(arguments)));
        };
      return r;
    }),
    Array.prototype.indexOf ||
      (Array.prototype.indexOf = function (t, i) {
        var s;
        if (null == this) throw new TypeError('"this" is null or not defined');
        var o = Object(this),
          e = o.length >>> 0;
        if (0 != e) {
          i = +i || 0;
          if (!(e <= (i = Math.abs(i) === 1 / 0 ? 0 : i)))
            for (s = Math.max(0 <= i ? i : e - Math.abs(i), 0); s < e; ) {
              if (s in o && o[s] === t) return s;
              s++;
            }
        }
        return -1;
      });
  (i.prototype = {
    init: function (t) {
      (this.no_diapason = !1),
        (this.coords.p_step = this.convertToPercent(this.options.step, !0)),
        (this.target = "base"),
        this.toggleInput(),
        this.append(),
        this.setMinMax(),
        t
          ? ((this.force_redraw = !0), this.calc(!0), this.callOnUpdate())
          : ((this.force_redraw = !0), this.calc(!0), this.callOnStart()),
        this.updateScene();
    },
    append: function () {
      var t =
        '<span class="irs irs--' +
        this.options.skin +
        " js-irs-" +
        this.plugin_count +
        " " +
        this.options.extra_classes +
        '"></span>';
      this.$cache.input.before(t),
        this.$cache.input.prop("readonly", !0),
        (this.$cache.cont = this.$cache.input.prev()),
        (this.result.slider = this.$cache.cont),
        this.$cache.cont.html(
          '<span class="irs"><span class="irs-line" tabindex="0"></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span>'
        ),
        (this.$cache.rs = this.$cache.cont.find(".irs")),
        (this.$cache.min = this.$cache.cont.find(".irs-min")),
        (this.$cache.max = this.$cache.cont.find(".irs-max")),
        (this.$cache.from = this.$cache.cont.find(".irs-from")),
        (this.$cache.to = this.$cache.cont.find(".irs-to")),
        (this.$cache.single = this.$cache.cont.find(".irs-single")),
        (this.$cache.line = this.$cache.cont.find(".irs-line")),
        (this.$cache.grid = this.$cache.cont.find(".irs-grid")),
        "single" === this.options.type
          ? (this.$cache.cont.append(
              '<span class="irs-bar irs-bar--single"></span><span class="irs-shadow shadow-single"></span><span class="irs-handle single"><i></i><i></i><i></i></span>'
            ),
            (this.$cache.bar = this.$cache.cont.find(".irs-bar")),
            (this.$cache.edge = this.$cache.cont.find(".irs-bar-edge")),
            (this.$cache.s_single = this.$cache.cont.find(".single")),
            (this.$cache.from[0].style.visibility = "hidden"),
            (this.$cache.to[0].style.visibility = "hidden"),
            (this.$cache.shad_single = this.$cache.cont.find(".shadow-single")))
          : (this.$cache.cont.append(
              '<span class="irs-bar"></span><span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-handle from"><i></i><i></i><i></i></span><span class="irs-handle to"><i></i><i></i><i></i></span>'
            ),
            (this.$cache.bar = this.$cache.cont.find(".irs-bar")),
            (this.$cache.s_from = this.$cache.cont.find(".from")),
            (this.$cache.s_to = this.$cache.cont.find(".to")),
            (this.$cache.shad_from = this.$cache.cont.find(".shadow-from")),
            (this.$cache.shad_to = this.$cache.cont.find(".shadow-to")),
            this.setTopHandler()),
        this.options.hide_from_to &&
          ((this.$cache.from[0].style.display = "none"),
          (this.$cache.to[0].style.display = "none"),
          (this.$cache.single[0].style.display = "none")),
        this.appendGrid(),
        this.options.disable
          ? (this.appendDisableMask(), (this.$cache.input[0].disabled = !0))
          : ((this.$cache.input[0].disabled = !1),
            this.removeDisableMask(),
            this.bindEvents()),
        this.options.disable ||
          (this.options.block
            ? this.appendDisableMask()
            : this.removeDisableMask()),
        this.options.drag_interval &&
          (this.$cache.bar[0].style.cursor = "ew-resize");
    },
    setTopHandler: function () {
      var t = this.options.min,
        i = this.options.max,
        s = this.options.from,
        o = this.options.to;
      t < s && o === i
        ? this.$cache.s_from.addClass("type_last")
        : o < i && this.$cache.s_to.addClass("type_last");
    },
    changeLevel: function (t) {
      switch (t) {
        case "single":
          (this.coords.p_gap = this.toFixed(
            this.coords.p_pointer - this.coords.p_single_fake
          )),
            this.$cache.s_single.addClass("state_hover");
          break;
        case "from":
          (this.coords.p_gap = this.toFixed(
            this.coords.p_pointer - this.coords.p_from_fake
          )),
            this.$cache.s_from.addClass("state_hover"),
            this.$cache.s_from.addClass("type_last"),
            this.$cache.s_to.removeClass("type_last");
          break;
        case "to":
          (this.coords.p_gap = this.toFixed(
            this.coords.p_pointer - this.coords.p_to_fake
          )),
            this.$cache.s_to.addClass("state_hover"),
            this.$cache.s_to.addClass("type_last"),
            this.$cache.s_from.removeClass("type_last");
          break;
        case "both":
          (this.coords.p_gap_left = this.toFixed(
            this.coords.p_pointer - this.coords.p_from_fake
          )),
            (this.coords.p_gap_right = this.toFixed(
              this.coords.p_to_fake - this.coords.p_pointer
            )),
            this.$cache.s_to.removeClass("type_last"),
            this.$cache.s_from.removeClass("type_last");
      }
    },
    appendDisableMask: function () {
      this.$cache.cont.append('<span class="irs-disable-mask"></span>'),
        this.$cache.cont.addClass("irs-disabled");
    },
    removeDisableMask: function () {
      this.$cache.cont.remove(".irs-disable-mask"),
        this.$cache.cont.removeClass("irs-disabled");
    },
    remove: function () {
      this.$cache.cont.remove(),
        (this.$cache.cont = null),
        this.$cache.line.off("keydown.irs_" + this.plugin_count),
        this.$cache.body.off("touchmove.irs_" + this.plugin_count),
        this.$cache.body.off("mousemove.irs_" + this.plugin_count),
        this.$cache.win.off("touchend.irs_" + this.plugin_count),
        this.$cache.win.off("mouseup.irs_" + this.plugin_count),
        e &&
          (this.$cache.body.off("mouseup.irs_" + this.plugin_count),
          this.$cache.body.off("mouseleave.irs_" + this.plugin_count)),
        (this.$cache.grid_labels = []),
        (this.coords.big = []),
        (this.coords.big_w = []),
        (this.coords.big_p = []),
        (this.coords.big_x = []),
        cancelAnimationFrame(this.raf_id);
    },
    bindEvents: function () {
      this.no_diapason ||
        (this.$cache.body.on(
          "touchmove.irs_" + this.plugin_count,
          this.pointerMove.bind(this)
        ),
        this.$cache.body.on(
          "mousemove.irs_" + this.plugin_count,
          this.pointerMove.bind(this)
        ),
        this.$cache.win.on(
          "touchend.irs_" + this.plugin_count,
          this.pointerUp.bind(this)
        ),
        this.$cache.win.on(
          "mouseup.irs_" + this.plugin_count,
          this.pointerUp.bind(this)
        ),
        this.$cache.line.on(
          "touchstart.irs_" + this.plugin_count,
          this.pointerClick.bind(this, "click")
        ),
        this.$cache.line.on(
          "mousedown.irs_" + this.plugin_count,
          this.pointerClick.bind(this, "click")
        ),
        this.$cache.line.on(
          "focus.irs_" + this.plugin_count,
          this.pointerFocus.bind(this)
        ),
        this.options.drag_interval && "double" === this.options.type
          ? (this.$cache.bar.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "both")
            ),
            this.$cache.bar.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "both")
            ))
          : (this.$cache.bar.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerClick.bind(this, "click")
            ),
            this.$cache.bar.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerClick.bind(this, "click")
            )),
        ("single" === this.options.type
          ? (this.$cache.single.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "single")
            ),
            this.$cache.s_single.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "single")
            ),
            this.$cache.shad_single.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerClick.bind(this, "click")
            ),
            this.$cache.single.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "single")
            ),
            this.$cache.s_single.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "single")
            ),
            this.$cache.edge.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerClick.bind(this, "click")
            ),
            this.$cache.shad_single)
          : (this.$cache.single.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerDown.bind(this, null)
            ),
            this.$cache.single.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerDown.bind(this, null)
            ),
            this.$cache.from.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "from")
            ),
            this.$cache.s_from.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "from")
            ),
            this.$cache.to.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "to")
            ),
            this.$cache.s_to.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "to")
            ),
            this.$cache.shad_from.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerClick.bind(this, "click")
            ),
            this.$cache.shad_to.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerClick.bind(this, "click")
            ),
            this.$cache.from.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "from")
            ),
            this.$cache.s_from.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "from")
            ),
            this.$cache.to.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "to")
            ),
            this.$cache.s_to.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "to")
            ),
            this.$cache.shad_from.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerClick.bind(this, "click")
            ),
            this.$cache.shad_to)
        ).on(
          "mousedown.irs_" + this.plugin_count,
          this.pointerClick.bind(this, "click")
        ),
        this.options.keyboard &&
          this.$cache.line.on(
            "keydown.irs_" + this.plugin_count,
            this.key.bind(this, "keyboard")
          ),
        e &&
          (this.$cache.body.on(
            "mouseup.irs_" + this.plugin_count,
            this.pointerUp.bind(this)
          ),
          this.$cache.body.on(
            "mouseleave.irs_" + this.plugin_count,
            this.pointerUp.bind(this)
          )));
    },
    pointerFocus: function (t) {
      var i, s;
      this.target ||
        ((s = (i =
          "single" === this.options.type
            ? this.$cache.single
            : this.$cache.from).offset().left),
        (s += i.width() / 2 - 1),
        this.pointerClick("single", {
          preventDefault: function () {},
          pageX: s,
        }));
    },
    pointerMove: function (t) {
      this.dragging &&
        ((t =
          t.pageX ||
          (t.originalEvent.touches && t.originalEvent.touches[0].pageX)),
        (this.coords.x_pointer = t - this.coords.x_gap),
        this.calc());
    },
    pointerUp: function (t) {
      this.current_plugin === this.plugin_count &&
        this.is_active &&
        ((this.is_active = !1),
        this.$cache.cont.find(".state_hover").removeClass("state_hover"),
        (this.force_redraw = !0),
        e && r("*").prop("unselectable", !1),
        this.updateScene(),
        this.restoreOriginalMinInterval(),
        (r.contains(this.$cache.cont[0], t.target) || this.dragging) &&
          this.callOnFinish(),
        (this.dragging = !1));
    },
    pointerDown: function (t, i) {
      i.preventDefault();
      var s =
        i.pageX ||
        (i.originalEvent.touches && i.originalEvent.touches[0].pageX);
      2 !== i.button &&
        ("both" === t && this.setTempMinInterval(),
        (t = t || this.target || "from"),
        (this.current_plugin = this.plugin_count),
        (this.target = t),
        (this.is_active = !0),
        (this.dragging = !0),
        (this.coords.x_gap = this.$cache.rs.offset().left),
        (this.coords.x_pointer = s - this.coords.x_gap),
        this.calcPointerPercent(),
        this.changeLevel(t),
        e && r("*").prop("unselectable", !0),
        this.$cache.line.trigger("focus"),
        this.updateScene());
    },
    pointerClick: function (t, i) {
      i.preventDefault();
      var s =
        i.pageX ||
        (i.originalEvent.touches && i.originalEvent.touches[0].pageX);
      2 !== i.button &&
        ((this.current_plugin = this.plugin_count),
        (this.target = t),
        (this.is_click = !0),
        (this.coords.x_gap = this.$cache.rs.offset().left),
        (this.coords.x_pointer = +(s - this.coords.x_gap).toFixed()),
        (this.force_redraw = !0),
        this.calc(),
        this.$cache.line.trigger("focus"));
    },
    key: function (t, i) {
      if (
        !(
          this.current_plugin !== this.plugin_count ||
          i.altKey ||
          i.ctrlKey ||
          i.shiftKey ||
          i.metaKey
        )
      ) {
        switch (i.which) {
          case 83:
          case 65:
          case 40:
          case 37:
            i.preventDefault(), this.moveByKey(!1);
            break;
          case 87:
          case 68:
          case 38:
          case 39:
            i.preventDefault(), this.moveByKey(!0);
        }
        return !0;
      }
    },
    moveByKey: function (t) {
      var i = this.coords.p_pointer,
        s = (this.options.max - this.options.min) / 100,
        s = this.options.step / s;
      t ? (i += s) : (i -= s),
        (this.coords.x_pointer = this.toFixed((this.coords.w_rs / 100) * i)),
        (this.is_key = !0),
        this.calc();
    },
    setMinMax: function () {
      var t, i;
      this.options &&
        (this.options.hide_min_max
          ? ((this.$cache.min[0].style.display = "none"),
            (this.$cache.max[0].style.display = "none"))
          : (this.options.values.length
              ? (this.$cache.min.html(
                  this.decorate(this.options.p_values[this.options.min])
                ),
                this.$cache.max.html(
                  this.decorate(this.options.p_values[this.options.max])
                ))
              : ((t = this._prettify(this.options.min)),
                (i = this._prettify(this.options.max)),
                (this.result.min_pretty = t),
                (this.result.max_pretty = i),
                this.$cache.min.html(this.decorate(t, this.options.min)),
                this.$cache.max.html(this.decorate(i, this.options.max))),
            (this.labels.w_min = this.$cache.min.outerWidth(!1)),
            (this.labels.w_max = this.$cache.max.outerWidth(!1))));
    },
    setTempMinInterval: function () {
      var t = this.result.to - this.result.from;
      null === this.old_min_interval &&
        (this.old_min_interval = this.options.min_interval),
        (this.options.min_interval = t);
    },
    restoreOriginalMinInterval: function () {
      null !== this.old_min_interval &&
        ((this.options.min_interval = this.old_min_interval),
        (this.old_min_interval = null));
    },
    calc: function (t) {
      if (
        this.options &&
        (this.calc_count++,
        (10 !== this.calc_count && !t) ||
          ((this.calc_count = 0),
          (this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
          this.calcHandlePercent()),
        this.coords.w_rs)
      ) {
        this.calcPointerPercent();
        var i,
          s,
          o = this.getHandleX();
        switch (
          ("both" === this.target &&
            ((this.coords.p_gap = 0), (o = this.getHandleX())),
          "click" === this.target &&
            ((this.coords.p_gap = this.coords.p_handle / 2),
            (o = this.getHandleX()),
            this.options.drag_interval
              ? (this.target = "both_one")
              : (this.target = this.chooseHandle(o))),
          this.target)
        ) {
          case "base":
            var e = (this.options.max - this.options.min) / 100,
              h = (this.result.from - this.options.min) / e,
              e = (this.result.to - this.options.min) / e;
            (this.coords.p_single_real = this.toFixed(h)),
              (this.coords.p_from_real = this.toFixed(h)),
              (this.coords.p_to_real = this.toFixed(e)),
              (this.coords.p_single_real = this.checkDiapason(
                this.coords.p_single_real,
                this.options.from_min,
                this.options.from_max
              )),
              (this.coords.p_from_real = this.checkDiapason(
                this.coords.p_from_real,
                this.options.from_min,
                this.options.from_max
              )),
              (this.coords.p_to_real = this.checkDiapason(
                this.coords.p_to_real,
                this.options.to_min,
                this.options.to_max
              )),
              (this.coords.p_single_fake = this.convertToFakePercent(
                this.coords.p_single_real
              )),
              (this.coords.p_from_fake = this.convertToFakePercent(
                this.coords.p_from_real
              )),
              (this.coords.p_to_fake = this.convertToFakePercent(
                this.coords.p_to_real
              )),
              (this.target = null);
            break;
          case "single":
            this.options.from_fixed ||
              ((this.coords.p_single_real = this.convertToRealPercent(o)),
              (this.coords.p_single_real = this.calcWithStep(
                this.coords.p_single_real
              )),
              (this.coords.p_single_real = this.checkDiapason(
                this.coords.p_single_real,
                this.options.from_min,
                this.options.from_max
              )),
              (this.coords.p_single_fake = this.convertToFakePercent(
                this.coords.p_single_real
              )));
            break;
          case "from":
            this.options.from_fixed ||
              ((this.coords.p_from_real = this.convertToRealPercent(o)),
              (this.coords.p_from_real = this.calcWithStep(
                this.coords.p_from_real
              )),
              this.coords.p_from_real > this.coords.p_to_real &&
                (this.coords.p_from_real = this.coords.p_to_real),
              (this.coords.p_from_real = this.checkDiapason(
                this.coords.p_from_real,
                this.options.from_min,
                this.options.from_max
              )),
              (this.coords.p_from_real = this.checkMinInterval(
                this.coords.p_from_real,
                this.coords.p_to_real,
                "from"
              )),
              (this.coords.p_from_real = this.checkMaxInterval(
                this.coords.p_from_real,
                this.coords.p_to_real,
                "from"
              )),
              (this.coords.p_from_fake = this.convertToFakePercent(
                this.coords.p_from_real
              )));
            break;
          case "to":
            this.options.to_fixed ||
              ((this.coords.p_to_real = this.convertToRealPercent(o)),
              (this.coords.p_to_real = this.calcWithStep(
                this.coords.p_to_real
              )),
              this.coords.p_to_real < this.coords.p_from_real &&
                (this.coords.p_to_real = this.coords.p_from_real),
              (this.coords.p_to_real = this.checkDiapason(
                this.coords.p_to_real,
                this.options.to_min,
                this.options.to_max
              )),
              (this.coords.p_to_real = this.checkMinInterval(
                this.coords.p_to_real,
                this.coords.p_from_real,
                "to"
              )),
              (this.coords.p_to_real = this.checkMaxInterval(
                this.coords.p_to_real,
                this.coords.p_from_real,
                "to"
              )),
              (this.coords.p_to_fake = this.convertToFakePercent(
                this.coords.p_to_real
              )));
            break;
          case "both":
            this.options.from_fixed ||
              this.options.to_fixed ||
              ((o = this.toFixed(o + 0.001 * this.coords.p_handle)),
              (this.coords.p_from_real =
                this.convertToRealPercent(o) - this.coords.p_gap_left),
              (this.coords.p_from_real = this.calcWithStep(
                this.coords.p_from_real
              )),
              (this.coords.p_from_real = this.checkDiapason(
                this.coords.p_from_real,
                this.options.from_min,
                this.options.from_max
              )),
              (this.coords.p_from_real = this.checkMinInterval(
                this.coords.p_from_real,
                this.coords.p_to_real,
                "from"
              )),
              (this.coords.p_from_fake = this.convertToFakePercent(
                this.coords.p_from_real
              )),
              (this.coords.p_to_real =
                this.convertToRealPercent(o) + this.coords.p_gap_right),
              (this.coords.p_to_real = this.calcWithStep(
                this.coords.p_to_real
              )),
              (this.coords.p_to_real = this.checkDiapason(
                this.coords.p_to_real,
                this.options.to_min,
                this.options.to_max
              )),
              (this.coords.p_to_real = this.checkMinInterval(
                this.coords.p_to_real,
                this.coords.p_from_real,
                "to"
              )),
              (this.coords.p_to_fake = this.convertToFakePercent(
                this.coords.p_to_real
              )));
            break;
          case "both_one":
            this.options.from_fixed ||
              this.options.to_fixed ||
              ((h = this.convertToRealPercent(o)),
              (e = this.result.from_percent),
              (s = h + (i = (e = this.result.to_percent - e) / 2)),
              100 < (s = (h = h - i) < 0 ? (h = 0) + e : s) &&
                (h = (s = 100) - e),
              (this.coords.p_from_real = this.calcWithStep(h)),
              (this.coords.p_from_real = this.checkDiapason(
                this.coords.p_from_real,
                this.options.from_min,
                this.options.from_max
              )),
              (this.coords.p_from_fake = this.convertToFakePercent(
                this.coords.p_from_real
              )),
              (this.coords.p_to_real = this.calcWithStep(s)),
              (this.coords.p_to_real = this.checkDiapason(
                this.coords.p_to_real,
                this.options.to_min,
                this.options.to_max
              )),
              (this.coords.p_to_fake = this.convertToFakePercent(
                this.coords.p_to_real
              )));
        }
        "single" === this.options.type
          ? ((this.coords.p_bar_x = this.coords.p_handle / 2),
            (this.coords.p_bar_w = this.coords.p_single_fake),
            (this.result.from_percent = this.coords.p_single_real),
            (this.result.from = this.convertToValue(this.coords.p_single_real)),
            (this.result.from_pretty = this._prettify(this.result.from)),
            this.options.values.length &&
              (this.result.from_value = this.options.values[this.result.from]))
          : ((this.coords.p_bar_x = this.toFixed(
              this.coords.p_from_fake + this.coords.p_handle / 2
            )),
            (this.coords.p_bar_w = this.toFixed(
              this.coords.p_to_fake - this.coords.p_from_fake
            )),
            (this.result.from_percent = this.coords.p_from_real),
            (this.result.from = this.convertToValue(this.coords.p_from_real)),
            (this.result.from_pretty = this._prettify(this.result.from)),
            (this.result.to_percent = this.coords.p_to_real),
            (this.result.to = this.convertToValue(this.coords.p_to_real)),
            (this.result.to_pretty = this._prettify(this.result.to)),
            this.options.values.length &&
              ((this.result.from_value = this.options.values[this.result.from]),
              (this.result.to_value = this.options.values[this.result.to]))),
          this.calcMinMax(),
          this.calcLabels();
      }
    },
    calcPointerPercent: function () {
      this.coords.w_rs
        ? (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer)
            ? (this.coords.x_pointer = 0)
            : this.coords.x_pointer > this.coords.w_rs &&
              (this.coords.x_pointer = this.coords.w_rs),
          (this.coords.p_pointer = this.toFixed(
            (this.coords.x_pointer / this.coords.w_rs) * 100
          )))
        : (this.coords.p_pointer = 0);
    },
    convertToRealPercent: function (t) {
      return (t / (100 - this.coords.p_handle)) * 100;
    },
    convertToFakePercent: function (t) {
      return (t / 100) * (100 - this.coords.p_handle);
    },
    getHandleX: function () {
      var t = 100 - this.coords.p_handle,
        i = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
      return i < 0 ? (i = 0) : t < i && (i = t), i;
    },
    calcHandlePercent: function () {
      "single" === this.options.type
        ? (this.coords.w_handle = this.$cache.s_single.outerWidth(!1))
        : (this.coords.w_handle = this.$cache.s_from.outerWidth(!1)),
        (this.coords.p_handle = this.toFixed(
          (this.coords.w_handle / this.coords.w_rs) * 100
        ));
    },
    chooseHandle: function (t) {
      return "single" === this.options.type
        ? "single"
        : this.coords.p_from_real +
            (this.coords.p_to_real - this.coords.p_from_real) / 2 <=
          t
        ? this.options.to_fixed
          ? "from"
          : "to"
        : this.options.from_fixed
        ? "to"
        : "from";
    },
    calcMinMax: function () {
      this.coords.w_rs &&
        ((this.labels.p_min = (this.labels.w_min / this.coords.w_rs) * 100),
        (this.labels.p_max = (this.labels.w_max / this.coords.w_rs) * 100));
    },
    calcLabels: function () {
      this.coords.w_rs &&
        !this.options.hide_from_to &&
        ("single" === this.options.type
          ? ((this.labels.w_single = this.$cache.single.outerWidth(!1)),
            (this.labels.p_single_fake =
              (this.labels.w_single / this.coords.w_rs) * 100),
            (this.labels.p_single_left =
              this.coords.p_single_fake +
              this.coords.p_handle / 2 -
              this.labels.p_single_fake / 2))
          : ((this.labels.w_from = this.$cache.from.outerWidth(!1)),
            (this.labels.p_from_fake =
              (this.labels.w_from / this.coords.w_rs) * 100),
            (this.labels.p_from_left =
              this.coords.p_from_fake +
              this.coords.p_handle / 2 -
              this.labels.p_from_fake / 2),
            (this.labels.p_from_left = this.toFixed(this.labels.p_from_left)),
            (this.labels.p_from_left = this.checkEdges(
              this.labels.p_from_left,
              this.labels.p_from_fake
            )),
            (this.labels.w_to = this.$cache.to.outerWidth(!1)),
            (this.labels.p_to_fake =
              (this.labels.w_to / this.coords.w_rs) * 100),
            (this.labels.p_to_left =
              this.coords.p_to_fake +
              this.coords.p_handle / 2 -
              this.labels.p_to_fake / 2),
            (this.labels.p_to_left = this.toFixed(this.labels.p_to_left)),
            (this.labels.p_to_left = this.checkEdges(
              this.labels.p_to_left,
              this.labels.p_to_fake
            )),
            (this.labels.w_single = this.$cache.single.outerWidth(!1)),
            (this.labels.p_single_fake =
              (this.labels.w_single / this.coords.w_rs) * 100),
            (this.labels.p_single_left =
              (this.labels.p_from_left +
                this.labels.p_to_left +
                this.labels.p_to_fake) /
                2 -
              this.labels.p_single_fake / 2),
            (this.labels.p_single_left = this.toFixed(
              this.labels.p_single_left
            ))),
        (this.labels.p_single_left = this.checkEdges(
          this.labels.p_single_left,
          this.labels.p_single_fake
        )));
    },
    updateScene: function () {
      this.raf_id && (cancelAnimationFrame(this.raf_id), (this.raf_id = null)),
        clearTimeout(this.update_tm),
        (this.update_tm = null),
        this.options &&
          (this.drawHandles(),
          this.is_active
            ? (this.raf_id = requestAnimationFrame(this.updateScene.bind(this)))
            : (this.update_tm = setTimeout(this.updateScene.bind(this), 300)));
    },
    drawHandles: function () {
      (this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
        this.coords.w_rs &&
          (this.coords.w_rs !== this.coords.w_rs_old &&
            ((this.target = "base"), (this.is_resize = !0)),
          (this.coords.w_rs === this.coords.w_rs_old && !this.force_redraw) ||
            (this.setMinMax(),
            this.calc(!0),
            this.drawLabels(),
            this.options.grid && (this.calcGridMargin(), this.calcGridLabels()),
            (this.force_redraw = !0),
            (this.coords.w_rs_old = this.coords.w_rs),
            this.drawShadow()),
          this.coords.w_rs) &&
          (this.dragging || this.force_redraw || this.is_key) &&
          ((this.old_from !== this.result.from ||
            this.old_to !== this.result.to ||
            this.force_redraw ||
            this.is_key) &&
            (this.drawLabels(),
            (this.$cache.bar[0].style.left = this.coords.p_bar_x + "%"),
            (this.$cache.bar[0].style.width = this.coords.p_bar_w + "%"),
            "single" === this.options.type
              ? ((this.$cache.bar[0].style.left = 0),
                (this.$cache.bar[0].style.width =
                  this.coords.p_bar_w + this.coords.p_bar_x + "%"),
                (this.$cache.s_single[0].style.left =
                  this.coords.p_single_fake + "%"))
              : ((this.$cache.s_from[0].style.left =
                  this.coords.p_from_fake + "%"),
                (this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%"),
                (this.old_from === this.result.from && !this.force_redraw) ||
                  (this.$cache.from[0].style.left =
                    this.labels.p_from_left + "%"),
                (this.old_to === this.result.to && !this.force_redraw) ||
                  (this.$cache.to[0].style.left = this.labels.p_to_left + "%")),
            (this.$cache.single[0].style.left =
              this.labels.p_single_left + "%"),
            this.writeToInput(),
            (this.old_from === this.result.from &&
              this.old_to === this.result.to) ||
              this.is_start ||
              (this.$cache.input.trigger("change"),
              this.$cache.input.trigger("input")),
            (this.old_from = this.result.from),
            (this.old_to = this.result.to),
            this.is_resize ||
              this.is_update ||
              this.is_start ||
              this.is_finish ||
              this.callOnChange(),
            (this.is_key || this.is_click) &&
              ((this.is_key = !1), (this.is_click = !1), this.callOnFinish()),
            (this.is_update = !1),
            (this.is_resize = !1),
            (this.is_finish = !1)),
          (this.is_start = !1),
          (this.is_key = !1),
          (this.is_click = !1),
          (this.force_redraw = !1));
    },
    drawLabels: function () {
      var t, i, s, o, e;
      this.options &&
        ((s = this.options.values.length),
        (t = this.options.p_values),
        this.options.hide_from_to ||
          ("single" === this.options.type
            ? ((o = s
                ? this.decorate(t[this.result.from])
                : ((i = this._prettify(this.result.from)),
                  this.decorate(i, this.result.from))),
              this.$cache.single.html(o),
              this.calcLabels(),
              this.labels.p_single_left < this.labels.p_min + 1
                ? (this.$cache.min[0].style.visibility = "hidden")
                : (this.$cache.min[0].style.visibility = "visible"),
              this.labels.p_single_left + this.labels.p_single_fake >
              100 - this.labels.p_max - 1
                ? (this.$cache.max[0].style.visibility = "hidden")
                : (this.$cache.max[0].style.visibility = "visible"))
            : ((t = s
                ? ((o = this.options.decorate_both
                    ? ((o = this.decorate(t[this.result.from])),
                      (o += this.options.values_separator) +
                        this.decorate(t[this.result.to]))
                    : this.decorate(
                        t[this.result.from] +
                          this.options.values_separator +
                          t[this.result.to]
                      )),
                  (e = this.decorate(t[this.result.from])),
                  this.decorate(t[this.result.to]))
                : ((i = this._prettify(this.result.from)),
                  (s = this._prettify(this.result.to)),
                  (o = this.options.decorate_both
                    ? ((o = this.decorate(i, this.result.from)),
                      (o += this.options.values_separator) +
                        this.decorate(s, this.result.to))
                    : this.decorate(
                        i + this.options.values_separator + s,
                        this.result.to
                      )),
                  (e = this.decorate(i, this.result.from)),
                  this.decorate(s, this.result.to))),
              this.$cache.single.html(o),
              this.$cache.from.html(e),
              this.$cache.to.html(t),
              this.calcLabels(),
              (i = Math.min(
                this.labels.p_single_left,
                this.labels.p_from_left
              )),
              (s = this.labels.p_single_left + this.labels.p_single_fake),
              (o = this.labels.p_to_left + this.labels.p_to_fake),
              (e = Math.max(s, o)),
              this.labels.p_from_left + this.labels.p_from_fake >=
              this.labels.p_to_left
                ? ((this.$cache.from[0].style.visibility = "hidden"),
                  (this.$cache.to[0].style.visibility = "hidden"),
                  (this.$cache.single[0].style.visibility = "visible"),
                  (e =
                    this.result.from === this.result.to
                      ? ("from" === this.target
                          ? (this.$cache.from[0].style.visibility = "visible")
                          : "to" === this.target
                          ? (this.$cache.to[0].style.visibility = "visible")
                          : this.target ||
                            (this.$cache.from[0].style.visibility = "visible"),
                        (this.$cache.single[0].style.visibility = "hidden"),
                        o)
                      : ((this.$cache.from[0].style.visibility = "hidden"),
                        (this.$cache.to[0].style.visibility = "hidden"),
                        (this.$cache.single[0].style.visibility = "visible"),
                        Math.max(s, o))))
                : ((this.$cache.from[0].style.visibility = "visible"),
                  (this.$cache.to[0].style.visibility = "visible"),
                  (this.$cache.single[0].style.visibility = "hidden")),
              i < this.labels.p_min + 1
                ? (this.$cache.min[0].style.visibility = "hidden")
                : (this.$cache.min[0].style.visibility = "visible"),
              e > 100 - this.labels.p_max - 1
                ? (this.$cache.max[0].style.visibility = "hidden")
                : (this.$cache.max[0].style.visibility = "visible"))));
    },
    drawShadow: function () {
      var t,
        i,
        s = this.options,
        o = this.$cache,
        e = "number" == typeof s.from_min && !isNaN(s.from_min),
        h = "number" == typeof s.from_max && !isNaN(s.from_max),
        r = "number" == typeof s.to_min && !isNaN(s.to_min),
        n = "number" == typeof s.to_max && !isNaN(s.to_max);
      "single" === s.type
        ? s.from_shadow && (e || h)
          ? ((t = this.convertToPercent(e ? s.from_min : s.min)),
            (i = this.convertToPercent(h ? s.from_max : s.max) - t),
            (t = this.toFixed(t - (this.coords.p_handle / 100) * t)),
            (i = this.toFixed(i - (this.coords.p_handle / 100) * i)),
            (t += this.coords.p_handle / 2),
            (o.shad_single[0].style.display = "block"),
            (o.shad_single[0].style.left = t + "%"),
            (o.shad_single[0].style.width = i + "%"))
          : (o.shad_single[0].style.display = "none")
        : (s.from_shadow && (e || h)
            ? ((t = this.convertToPercent(e ? s.from_min : s.min)),
              (i = this.convertToPercent(h ? s.from_max : s.max) - t),
              (t = this.toFixed(t - (this.coords.p_handle / 100) * t)),
              (i = this.toFixed(i - (this.coords.p_handle / 100) * i)),
              (t += this.coords.p_handle / 2),
              (o.shad_from[0].style.display = "block"),
              (o.shad_from[0].style.left = t + "%"),
              (o.shad_from[0].style.width = i + "%"))
            : (o.shad_from[0].style.display = "none"),
          s.to_shadow && (r || n)
            ? ((e = this.convertToPercent(r ? s.to_min : s.min)),
              (h = this.convertToPercent(n ? s.to_max : s.max) - e),
              (e = this.toFixed(e - (this.coords.p_handle / 100) * e)),
              (h = this.toFixed(h - (this.coords.p_handle / 100) * h)),
              (e += this.coords.p_handle / 2),
              (o.shad_to[0].style.display = "block"),
              (o.shad_to[0].style.left = e + "%"),
              (o.shad_to[0].style.width = h + "%"))
            : (o.shad_to[0].style.display = "none"));
    },
    writeToInput: function () {
      "single" === this.options.type
        ? (this.options.values.length
            ? this.$cache.input.prop("value", this.result.from_value)
            : this.$cache.input.prop("value", this.result.from),
          this.$cache.input.data("from", this.result.from))
        : (this.options.values.length
            ? this.$cache.input.prop(
                "value",
                this.result.from_value +
                  this.options.input_values_separator +
                  this.result.to_value
              )
            : this.$cache.input.prop(
                "value",
                this.result.from +
                  this.options.input_values_separator +
                  this.result.to
              ),
          this.$cache.input.data("from", this.result.from),
          this.$cache.input.data("to", this.result.to));
    },
    callOnStart: function () {
      this.writeToInput(),
        this.options.onStart &&
          "function" == typeof this.options.onStart &&
          (this.options.scope
            ? this.options.onStart.call(this.options.scope, this.result)
            : this.options.onStart(this.result));
    },
    callOnChange: function () {
      this.writeToInput(),
        this.options.onChange &&
          "function" == typeof this.options.onChange &&
          (this.options.scope
            ? this.options.onChange.call(this.options.scope, this.result)
            : this.options.onChange(this.result));
    },
    callOnFinish: function () {
      this.writeToInput(),
        this.options.onFinish &&
          "function" == typeof this.options.onFinish &&
          (this.options.scope
            ? this.options.onFinish.call(this.options.scope, this.result)
            : this.options.onFinish(this.result));
    },
    callOnUpdate: function () {
      this.writeToInput(),
        this.options.onUpdate &&
          "function" == typeof this.options.onUpdate &&
          (this.options.scope
            ? this.options.onUpdate.call(this.options.scope, this.result)
            : this.options.onUpdate(this.result));
    },
    toggleInput: function () {
      this.$cache.input.toggleClass("irs-hidden-input"),
        this.has_tab_index
          ? this.$cache.input.prop("tabindex", -1)
          : this.$cache.input.removeProp("tabindex"),
        (this.has_tab_index = !this.has_tab_index);
    },
    convertToPercent: function (t, i) {
      var s = this.options.max - this.options.min;
      return s
        ? ((i = i ? t : t - this.options.min), this.toFixed(i / (s / 100)))
        : ((this.no_diapason = !0), 0);
    },
    convertToValue: function (t) {
      var i,
        s = this.options.min,
        o = this.options.max,
        e = s.toString().split(".")[1],
        h = o.toString().split(".")[1],
        r = 0,
        n = 0;
      if (0 === t) return this.options.min;
      if (100 === t) return this.options.max;
      e && (r = a = e.length),
        h && (r = i = h.length),
        a && i && (r = i <= a ? a : i),
        s < 0 &&
          ((s = +(s + (n = Math.abs(s))).toFixed(r)),
          (o = +(o + n).toFixed(r)));
      var a,
        e = ((o - s) / 100) * t + s,
        h = this.options.step.toString().split(".")[1],
        e = h
          ? +e.toFixed(h.length)
          : +(e = (e /= this.options.step) * this.options.step).toFixed(0);
      return (
        n && (e -= n),
        (a = h ? +e.toFixed(h.length) : this.toFixed(e)) < this.options.min
          ? (a = this.options.min)
          : a > this.options.max && (a = this.options.max),
        a
      );
    },
    calcWithStep: function (t) {
      var i = Math.round(t / this.coords.p_step) * this.coords.p_step;
      return 100 < i && (i = 100), this.toFixed((i = 100 === t ? 100 : i));
    },
    checkMinInterval: function (t, i, s) {
      var o,
        e = this.options;
      return e.min_interval
        ? ((o = this.convertToValue(t)),
          (i = this.convertToValue(i)),
          "from" === s
            ? i - o < e.min_interval && (o = i - e.min_interval)
            : o - i < e.min_interval && (o = i + e.min_interval),
          this.convertToPercent(o))
        : t;
    },
    checkMaxInterval: function (t, i, s) {
      var o,
        e = this.options;
      return e.max_interval
        ? ((o = this.convertToValue(t)),
          (i = this.convertToValue(i)),
          "from" === s
            ? i - o > e.max_interval && (o = i - e.max_interval)
            : o - i > e.max_interval && (o = i + e.max_interval),
          this.convertToPercent(o))
        : t;
    },
    checkDiapason: function (t, i, s) {
      var t = this.convertToValue(t),
        o = this.options;
      return (
        "number" != typeof i && (i = o.min),
        (s = "number" != typeof s ? o.max : s) < (t = t < i ? i : t) && (t = s),
        this.convertToPercent(t)
      );
    },
    toFixed: function (t) {
      return +(t = t.toFixed(20));
    },
    _prettify: function (t) {
      return this.options.prettify_enabled
        ? (this.options.prettify && "function" == typeof this.options.prettify
            ? this.options
            : this
          ).prettify(t)
        : t;
    },
    prettify: function (t) {
      return t
        .toString()
        .replace(
          /(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,
          "$1" + this.options.prettify_separator
        );
    },
    checkEdges: function (t, i) {
      return (
        this.options.force_edges &&
          (t < 0 ? (t = 0) : 100 - i < t && (t = 100 - i)),
        this.toFixed(t)
      );
    },
    validate: function () {
      var t,
        i,
        s = this.options,
        o = this.result,
        e = s.values,
        h = e.length;
      if (
        ("string" == typeof s.min && (s.min = +s.min),
        "string" == typeof s.max && (s.max = +s.max),
        "string" == typeof s.from && (s.from = +s.from),
        "string" == typeof s.to && (s.to = +s.to),
        "string" == typeof s.step && (s.step = +s.step),
        "string" == typeof s.from_min && (s.from_min = +s.from_min),
        "string" == typeof s.from_max && (s.from_max = +s.from_max),
        "string" == typeof s.to_min && (s.to_min = +s.to_min),
        "string" == typeof s.to_max && (s.to_max = +s.to_max),
        "string" == typeof s.grid_num && (s.grid_num = +s.grid_num),
        s.max < s.min && (s.max = s.min),
        h)
      )
        for (
          s.p_values = [],
            s.min = 0,
            s.max = h - 1,
            s.step = 1,
            s.grid_num = s.max,
            s.grid_snap = !0,
            i = 0;
          i < h;
          i++
        )
          (t = +e[i]),
            (t = isNaN(t) ? e[i] : ((e[i] = t), this._prettify(t))),
            s.p_values.push(t);
      ("number" == typeof s.from && !isNaN(s.from)) || (s.from = s.min),
        ("number" == typeof s.to && !isNaN(s.to)) || (s.to = s.max),
        "single" === s.type
          ? (s.from < s.min && (s.from = s.min),
            s.from > s.max && (s.from = s.max))
          : (s.from < s.min && (s.from = s.min),
            s.from > s.max && (s.from = s.max),
            s.to < s.min && (s.to = s.min),
            s.to > s.max && (s.to = s.max),
            this.update_check.from &&
              (this.update_check.from !== s.from &&
                s.from > s.to &&
                (s.from = s.to),
              this.update_check.to !== s.to) &&
              s.to < s.from &&
              (s.to = s.from),
            s.from > s.to && (s.from = s.to),
            s.to < s.from && (s.to = s.from)),
        ("number" != typeof s.step || isNaN(s.step) || !s.step || s.step < 0) &&
          (s.step = 1),
        "number" == typeof s.from_min &&
          s.from < s.from_min &&
          (s.from = s.from_min),
        "number" == typeof s.from_max &&
          s.from > s.from_max &&
          (s.from = s.from_max),
        "number" == typeof s.to_min && s.to < s.to_min && (s.to = s.to_min),
        "number" == typeof s.to_max && s.from > s.to_max && (s.to = s.to_max),
        o &&
          (o.min !== s.min && (o.min = s.min),
          o.max !== s.max && (o.max = s.max),
          (o.from < o.min || o.from > o.max) && (o.from = s.from),
          o.to < o.min || o.to > o.max) &&
          (o.to = s.to),
        ("number" != typeof s.min_interval ||
          isNaN(s.min_interval) ||
          !s.min_interval ||
          s.min_interval < 0) &&
          (s.min_interval = 0),
        ("number" != typeof s.max_interval ||
          isNaN(s.max_interval) ||
          !s.max_interval ||
          s.max_interval < 0) &&
          (s.max_interval = 0),
        s.min_interval &&
          s.min_interval > s.max - s.min &&
          (s.min_interval = s.max - s.min),
        s.max_interval &&
          s.max_interval > s.max - s.min &&
          (s.max_interval = s.max - s.min);
    },
    decorate: function (t, i) {
      var s = "",
        o = this.options;
      return (
        o.prefix && (s += o.prefix),
        (s += t),
        o.max_postfix &&
          (o.values.length && t === o.p_values[o.max]
            ? ((s += o.max_postfix), o.postfix && (s += " "))
            : i === o.max && ((s += o.max_postfix), o.postfix) && (s += " ")),
        o.postfix && (s += o.postfix),
        s
      );
    },
    updateFrom: function () {
      (this.result.from = this.options.from),
        (this.result.from_percent = this.convertToPercent(this.result.from)),
        (this.result.from_pretty = this._prettify(this.result.from)),
        this.options.values &&
          (this.result.from_value = this.options.values[this.result.from]);
    },
    updateTo: function () {
      (this.result.to = this.options.to),
        (this.result.to_percent = this.convertToPercent(this.result.to)),
        (this.result.to_pretty = this._prettify(this.result.to)),
        this.options.values &&
          (this.result.to_value = this.options.values[this.result.to]);
    },
    updateResult: function () {
      (this.result.min = this.options.min),
        (this.result.max = this.options.max),
        this.updateFrom(),
        this.updateTo();
    },
    appendGrid: function () {
      if (this.options.grid) {
        var t,
          i,
          s,
          o,
          e,
          h,
          r = this.options,
          n = r.max - r.min,
          a = r.grid_num,
          c = 0,
          l = 4,
          _ = "";
        for (
          this.calcGridMargin(),
            r.grid_snap && (a = n / r.step),
            s = this.toFixed(100 / (a = 50 < a ? 50 : a)),
            4 < a && (l = 3),
            7 < a && (l = 2),
            14 < a && (l = 1),
            28 < a && (l = 0),
            t = 0;
          t < a + 1;
          t++
        ) {
          for (
            o = l,
              100 < (c = this.toFixed(s * t)) && (c = 100),
              e = ((this.coords.big[t] = c) - s * (t - 1)) / (o + 1),
              i = 1;
            i <= o && 0 !== c;
            i++
          )
            _ +=
              '<span class="irs-grid-pol small" style="left: ' +
              this.toFixed(c - e * i) +
              '%"></span>';
          (_ += '<span class="irs-grid-pol" style="left: ' + c + '%"></span>'),
            (h = this.convertToValue(c)),
            (_ +=
              '<span class="irs-grid-text js-grid-text-' +
              t +
              '" style="left: ' +
              c +
              '%">' +
              (h = r.values.length ? r.p_values[h] : this._prettify(h)) +
              "</span>");
        }
        (this.coords.big_num = Math.ceil(a + 1)),
          this.$cache.cont.addClass("irs-with-grid"),
          this.$cache.grid.html(_),
          this.cacheGridLabels();
      }
    },
    cacheGridLabels: function () {
      for (var t, i = this.coords.big_num, s = 0; s < i; s++)
        (t = this.$cache.grid.find(".js-grid-text-" + s)),
          this.$cache.grid_labels.push(t);
      this.calcGridLabels();
    },
    calcGridLabels: function () {
      for (var t, i = [], s = [], o = this.coords.big_num, e = 0; e < o; e++)
        (this.coords.big_w[e] = this.$cache.grid_labels[e].outerWidth(!1)),
          (this.coords.big_p[e] = this.toFixed(
            (this.coords.big_w[e] / this.coords.w_rs) * 100
          )),
          (this.coords.big_x[e] = this.toFixed(this.coords.big_p[e] / 2)),
          (i[e] = this.toFixed(this.coords.big[e] - this.coords.big_x[e])),
          (s[e] = this.toFixed(i[e] + this.coords.big_p[e]));
      for (
        this.options.force_edges &&
          (i[0] < -this.coords.grid_gap &&
            ((i[0] = -this.coords.grid_gap),
            (s[0] = this.toFixed(i[0] + this.coords.big_p[0])),
            (this.coords.big_x[0] = this.coords.grid_gap)),
          s[o - 1] > 100 + this.coords.grid_gap) &&
          ((s[o - 1] = 100 + this.coords.grid_gap),
          (i[o - 1] = this.toFixed(s[o - 1] - this.coords.big_p[o - 1])),
          (this.coords.big_x[o - 1] = this.toFixed(
            this.coords.big_p[o - 1] - this.coords.grid_gap
          ))),
          this.calcGridCollision(2, i, s),
          this.calcGridCollision(4, i, s),
          e = 0;
        e < o;
        e++
      )
        (t = this.$cache.grid_labels[e][0]),
          this.coords.big_x[e] !== Number.POSITIVE_INFINITY &&
            (t.style.marginLeft = -this.coords.big_x[e] + "%");
    },
    calcGridCollision: function (t, i, s) {
      for (
        var o, e, h = this.coords.big_num, r = 0;
        r < h && !(h <= (o = r + t / 2));
        r += t
      )
        (e = this.$cache.grid_labels[o][0]),
          s[r] <= i[o]
            ? (e.style.visibility = "visible")
            : (e.style.visibility = "hidden");
    },
    calcGridMargin: function () {
      this.options.grid_margin &&
        ((this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
        this.coords.w_rs) &&
        ("single" === this.options.type
          ? (this.coords.w_handle = this.$cache.s_single.outerWidth(!1))
          : (this.coords.w_handle = this.$cache.s_from.outerWidth(!1)),
        (this.coords.p_handle = this.toFixed(
          (this.coords.w_handle / this.coords.w_rs) * 100
        )),
        (this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - 0.1)),
        (this.$cache.grid[0].style.width =
          this.toFixed(100 - this.coords.p_handle) + "%"),
        (this.$cache.grid[0].style.left = this.coords.grid_gap + "%"));
    },
    update: function (t) {
      this.input &&
        ((this.is_update = !0),
        (this.options.from = this.result.from),
        (this.options.to = this.result.to),
        (this.update_check.from = this.result.from),
        (this.update_check.to = this.result.to),
        (this.options = r.extend(this.options, t)),
        this.validate(),
        this.updateResult(t),
        this.toggleInput(),
        this.remove(),
        this.init(!0));
    },
    reset: function () {
      this.input && (this.updateResult(), this.update());
    },
    destroy: function () {
      this.input &&
        (this.toggleInput(),
        this.$cache.input.prop("readonly", !1),
        r.data(this.input, "ionRangeSlider", null),
        this.remove(),
        (this.input = null),
        (this.options = null));
    },
  }),
    (r.fn.ionRangeSlider = function (t) {
      return this.each(function () {
        r.data(this, "ionRangeSlider") ||
          r.data(this, "ionRangeSlider", new i(this, t, o++));
      });
    });
  for (
    var h = 0, l = ["ms", "moz", "webkit", "o"], _ = 0;
    _ < l.length && !a.requestAnimationFrame;
    ++_
  )
    (a.requestAnimationFrame = a[l[_] + "RequestAnimationFrame"]),
      (a.cancelAnimationFrame =
        a[l[_] + "CancelAnimationFrame"] ||
        a[l[_] + "CancelRequestAnimationFrame"]);
  a.requestAnimationFrame ||
    (a.requestAnimationFrame = function (t, i) {
      var s = new Date().getTime(),
        o = Math.max(0, 16 - (s - h)),
        e = a.setTimeout(function () {
          t(s + o);
        }, o);
      return (h = s + o), e;
    }),
    a.cancelAnimationFrame ||
      (a.cancelAnimationFrame = function (t) {
        clearTimeout(t);
      });
});
