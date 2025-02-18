!(function (t) {
  "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : "object" == typeof exports
    ? t(require("jquery"))
    : t(jQuery);
})(function (k, _) {
  function b() {
    return new Date(Date.UTC.apply(Date, arguments));
  }
  function C() {
    var t = new Date();
    return b(t.getFullYear(), t.getMonth(), t.getDate());
  }
  function n(t, e) {
    return (
      t.getUTCFullYear() === e.getUTCFullYear() &&
      t.getUTCMonth() === e.getUTCMonth() &&
      t.getUTCDate() === e.getUTCDate()
    );
  }
  function t(t, e) {
    return function () {
      return (
        e !== _ && k.fn.datepicker.deprecated(e), this[t].apply(this, arguments)
      );
    };
  }
  function T(t, e) {
    k.data(t, "datepicker", this),
      (this._events = []),
      (this._secondaryEvents = []),
      this._process_options(e),
      (this.dates = new i()),
      (this.viewDate = this.o.defaultViewDate),
      (this.focusDate = null),
      (this.element = k(t)),
      (this.isInput = this.element.is("input")),
      (this.inputField = this.isInput
        ? this.element
        : this.element.find("input")),
      (this.component =
        !!this.element.hasClass("date") &&
        this.element.find(
          ".add-on, .input-group-addon, .input-group-append, .input-group-prepend, .btn"
        )),
      this.component && 0 === this.component.length && (this.component = !1),
      null === this.o.isInline
        ? (this.isInline = !this.component && !this.isInput)
        : (this.isInline = this.o.isInline),
      (this.picker = k(U.template)),
      this._check_template(this.o.templates.leftArrow) &&
        this.picker.find(".prev").html(this.o.templates.leftArrow),
      this._check_template(this.o.templates.rightArrow) &&
        this.picker.find(".next").html(this.o.templates.rightArrow),
      this._buildEvents(),
      this._attachEvents(),
      this.isInline
        ? this.picker.addClass("datepicker-inline").appendTo(this.element)
        : this.picker.addClass("datepicker-dropdown dropdown-menu"),
      this.o.rtl && this.picker.addClass("datepicker-rtl"),
      this.o.calendarWeeks &&
        this.picker
          .find(
            ".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear"
          )
          .attr("colspan", function (t, e) {
            return Number(e) + 1;
          }),
      this._process_options({
        startDate: this._o.startDate,
        endDate: this._o.endDate,
        daysOfWeekDisabled: this.o.daysOfWeekDisabled,
        daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
        datesDisabled: this.o.datesDisabled,
      }),
      (this._allow_update = !1),
      this.setViewMode(this.o.startView),
      (this._allow_update = !0),
      this.fillDow(),
      this.fillMonths(),
      this.update(),
      this.isInline && this.show();
  }
  function h(t, e) {
    k.data(t, "datepicker", this),
      (this.element = k(t)),
      (this.inputs = k.map(e.inputs, function (t) {
        return t.jquery ? t[0] : t;
      })),
      delete e.inputs,
      (this.keepEmptyValues = e.keepEmptyValues),
      delete e.keepEmptyValues,
      s
        .call(k(this.inputs), e)
        .on("changeDate", k.proxy(this.dateUpdated, this)),
      (this.pickers = k.map(this.inputs, function (t) {
        return k.data(t, "datepicker");
      })),
      this.updateDates();
  }
  e = {
    get: function (t) {
      return this.slice(t)[0];
    },
    contains: function (t) {
      for (var e = t && t.valueOf(), i = 0, a = this.length; i < a; i++)
        if (0 <= this[i].valueOf() - e && this[i].valueOf() - e < 864e5)
          return i;
      return -1;
    },
    remove: function (t) {
      this.splice(t, 1);
    },
    replace: function (t) {
      t &&
        (Array.isArray(t) || (t = [t]), this.clear(), this.push.apply(this, t));
    },
    clear: function () {
      this.length = 0;
    },
    copy: function () {
      var t = new i();
      return t.replace(this), t;
    },
  };
  var e,
    i = function () {
      var t = [];
      return t.push.apply(t, arguments), k.extend(t, e), t;
    };
  T.prototype = {
    constructor: T,
    _resolveViewName: function (i) {
      return (
        k.each(U.viewModes, function (t, e) {
          if (i === t || -1 !== k.inArray(i, e.names)) return (i = t), !1;
        }),
        i
      );
    },
    _resolveDaysOfWeek: function (t) {
      return Array.isArray(t) || (t = t.split(/[,\s]*/)), k.map(t, Number);
    },
    _check_template: function (t) {
      try {
        return t === _ || "" === t
          ? !1
          : (t.match(/[<>]/g) || []).length <= 0 || 0 < k(t).length;
      } catch (t) {
        return !1;
      }
    },
    _process_options: function (t) {
      this._o = k.extend({}, this._o, t);
      var e,
        i,
        a = (this.o = k.extend({}, this._o)),
        t = a.language,
        s =
          (M[t] || ((t = t.split("-")[0]), M[t]) || (t = l.language),
          (a.language = t),
          (a.startView = this._resolveViewName(a.startView)),
          (a.minViewMode = this._resolveViewName(a.minViewMode)),
          (a.maxViewMode = this._resolveViewName(a.maxViewMode)),
          (a.startView = Math.max(
            this.o.minViewMode,
            Math.min(this.o.maxViewMode, a.startView)
          )),
          !0 !== a.multidate &&
            ((a.multidate = Number(a.multidate) || !1), !1 !== a.multidate) &&
            (a.multidate = Math.max(0, a.multidate)),
          (a.multidateSeparator = String(a.multidateSeparator)),
          (a.weekStart %= 7),
          (a.weekEnd = (a.weekStart + 6) % 7),
          U.parseFormat(a.format)),
        n =
          (a.startDate !== -1 / 0 &&
            (a.startDate
              ? a.startDate instanceof Date
                ? (a.startDate = this._local_to_utc(
                    this._zero_time(a.startDate)
                  ))
                : (a.startDate = U.parseDate(
                    a.startDate,
                    s,
                    a.language,
                    a.assumeNearbyYear
                  ))
              : (a.startDate = -1 / 0)),
          a.endDate !== 1 / 0 &&
            (a.endDate
              ? a.endDate instanceof Date
                ? (a.endDate = this._local_to_utc(this._zero_time(a.endDate)))
                : (a.endDate = U.parseDate(
                    a.endDate,
                    s,
                    a.language,
                    a.assumeNearbyYear
                  ))
              : (a.endDate = 1 / 0)),
          (a.daysOfWeekDisabled = this._resolveDaysOfWeek(
            a.daysOfWeekDisabled || []
          )),
          (a.daysOfWeekHighlighted = this._resolveDaysOfWeek(
            a.daysOfWeekHighlighted || []
          )),
          (a.datesDisabled = a.datesDisabled || []),
          Array.isArray(a.datesDisabled) ||
            (a.datesDisabled = a.datesDisabled.split(",")),
          (a.datesDisabled = k.map(a.datesDisabled, function (t) {
            return U.parseDate(t, s, a.language, a.assumeNearbyYear);
          })),
          String(a.orientation).toLowerCase().split(/\s+/g)),
        t = a.orientation.toLowerCase(),
        n = k.grep(n, function (t) {
          return /^auto|left|right|top|bottom$/.test(t);
        });
      if (((a.orientation = { x: "auto", y: "auto" }), t && "auto" !== t))
        if (1 === n.length)
          switch (n[0]) {
            case "top":
            case "bottom":
              a.orientation.y = n[0];
              break;
            case "left":
            case "right":
              a.orientation.x = n[0];
          }
        else
          (t = k.grep(n, function (t) {
            return /^left|right$/.test(t);
          })),
            (a.orientation.x = t[0] || "auto"),
            (t = k.grep(n, function (t) {
              return /^top|bottom$/.test(t);
            })),
            (a.orientation.y = t[0] || "auto");
      a.defaultViewDate instanceof Date || "string" == typeof a.defaultViewDate
        ? (a.defaultViewDate = U.parseDate(
            a.defaultViewDate,
            s,
            a.language,
            a.assumeNearbyYear
          ))
        : a.defaultViewDate
        ? ((t = a.defaultViewDate.year || new Date().getFullYear()),
          (e = a.defaultViewDate.month || 0),
          (i = a.defaultViewDate.day || 1),
          (a.defaultViewDate = b(t, e, i)))
        : (a.defaultViewDate = C());
    },
    _applyEvents: function (t) {
      for (var e, i, a, s = 0; s < t.length; s++)
        (e = t[s][0]),
          2 === t[s].length
            ? ((i = _), (a = t[s][1]))
            : 3 === t[s].length && ((i = t[s][1]), (a = t[s][2])),
          e.on(a, i);
    },
    _unapplyEvents: function (t) {
      for (var e, i, a, s = 0; s < t.length; s++)
        (e = t[s][0]),
          2 === t[s].length
            ? ((a = _), (i = t[s][1]))
            : 3 === t[s].length && ((a = t[s][1]), (i = t[s][2])),
          e.off(i, a);
    },
    _buildEvents: function () {
      var t = {
        keyup: k.proxy(function (t) {
          -1 === k.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) &&
            this.update();
        }, this),
        keydown: k.proxy(this.keydown, this),
        paste: k.proxy(this.paste, this),
      };
      !0 === this.o.showOnFocus && (t.focus = k.proxy(this.show, this)),
        this.isInput
          ? (this._events = [[this.element, t]])
          : this.component && this.inputField.length
          ? (this._events = [
              [this.inputField, t],
              [this.component, { click: k.proxy(this.show, this) }],
            ])
          : (this._events = [
              [
                this.element,
                {
                  click: k.proxy(this.show, this),
                  keydown: k.proxy(this.keydown, this),
                },
              ],
            ]),
        this._events.push(
          [
            this.element,
            "*",
            {
              blur: k.proxy(function (t) {
                this._focused_from = t.target;
              }, this),
            },
          ],
          [
            this.element,
            {
              blur: k.proxy(function (t) {
                this._focused_from = t.target;
              }, this),
            },
          ]
        ),
        this.o.immediateUpdates &&
          this._events.push([
            this.element,
            {
              "changeYear changeMonth": k.proxy(function (t) {
                this.update(t.date);
              }, this),
            },
          ]),
        (this._secondaryEvents = [
          [this.picker, { click: k.proxy(this.click, this) }],
          [
            this.picker,
            ".prev, .next",
            { click: k.proxy(this.navArrowsClick, this) },
          ],
          [
            this.picker,
            ".day:not(.disabled)",
            { click: k.proxy(this.dayCellClick, this) },
          ],
          [k(window), { resize: k.proxy(this.place, this) }],
          [
            k(document),
            {
              "mousedown touchstart": k.proxy(function (t) {
                this.element.is(t.target) ||
                  this.element.find(t.target).length ||
                  this.picker.is(t.target) ||
                  this.picker.find(t.target).length ||
                  this.isInline ||
                  this.hide();
              }, this),
            },
          ],
        ]);
    },
    _attachEvents: function () {
      this._detachEvents(), this._applyEvents(this._events);
    },
    _detachEvents: function () {
      this._unapplyEvents(this._events);
    },
    _attachSecondaryEvents: function () {
      this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents);
    },
    _detachSecondaryEvents: function () {
      this._unapplyEvents(this._secondaryEvents);
    },
    _trigger: function (t, e) {
      (e = e || this.dates.get(-1)), (e = this._utc_to_local(e));
      this.element.trigger({
        type: t,
        date: e,
        viewMode: this.viewMode,
        dates: k.map(this.dates, this._utc_to_local),
        format: k.proxy(function (t, e) {
          0 === arguments.length
            ? ((t = this.dates.length - 1), (e = this.o.format))
            : "string" == typeof t && ((e = t), (t = this.dates.length - 1)),
            (e = e || this.o.format);
          var i = this.dates.get(t);
          return U.formatDate(i, e, this.o.language);
        }, this),
      });
    },
    show: function () {
      if (
        !(
          this.inputField.is(":disabled") ||
          (this.inputField.prop("readonly") && !1 === this.o.enableOnReadonly)
        )
      )
        return (
          this.isInline || this.picker.appendTo(this.o.container),
          this.place(),
          this.picker.show(),
          this._attachSecondaryEvents(),
          this._trigger("show"),
          (window.navigator.msMaxTouchPoints || "ontouchstart" in document) &&
            this.o.disableTouchKeyboard &&
            k(this.element).blur(),
          this
        );
    },
    hide: function () {
      return (
        !this.isInline &&
          this.picker.is(":visible") &&
          ((this.focusDate = null),
          this.picker.hide().detach(),
          this._detachSecondaryEvents(),
          this.setViewMode(this.o.startView),
          this.o.forceParse && this.inputField.val() && this.setValue(),
          this._trigger("hide")),
        this
      );
    },
    destroy: function () {
      return (
        this.hide(),
        this._detachEvents(),
        this._detachSecondaryEvents(),
        this.picker.remove(),
        delete this.element.data().datepicker,
        this.isInput || delete this.element.data().date,
        this
      );
    },
    paste: function (t) {
      var e;
      if (
        t.originalEvent.clipboardData &&
        t.originalEvent.clipboardData.types &&
        -1 !== k.inArray("text/plain", t.originalEvent.clipboardData.types)
      )
        e = t.originalEvent.clipboardData.getData("text/plain");
      else {
        if (!window.clipboardData) return;
        e = window.clipboardData.getData("Text");
      }
      this.setDate(e), this.update(), t.preventDefault();
    },
    _utc_to_local: function (t) {
      var e;
      return (
        t &&
        ((e = new Date(
          t.getTime() + 6e4 * t.getTimezoneOffset()
        )).getTimezoneOffset() !== t.getTimezoneOffset()
          ? new Date(t.getTime() + 6e4 * e.getTimezoneOffset())
          : e)
      );
    },
    _local_to_utc: function (t) {
      return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset());
    },
    _zero_time: function (t) {
      return t && new Date(t.getFullYear(), t.getMonth(), t.getDate());
    },
    _zero_utc_time: function (t) {
      return t && b(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate());
    },
    getDates: function () {
      return k.map(this.dates, this._utc_to_local);
    },
    getUTCDates: function () {
      return k.map(this.dates, function (t) {
        return new Date(t);
      });
    },
    getDate: function () {
      return this._utc_to_local(this.getUTCDate());
    },
    getUTCDate: function () {
      var t = this.dates.get(-1);
      return t !== _ ? new Date(t) : null;
    },
    clearDates: function () {
      this.inputField.val(""),
        this._trigger("changeDate"),
        this.update(),
        this.o.autoclose && this.hide();
    },
    setDates: function () {
      var t = Array.isArray(arguments[0]) ? arguments[0] : arguments;
      return (
        this.update.apply(this, t),
        this._trigger("changeDate"),
        this.setValue(),
        this
      );
    },
    setUTCDates: function () {
      var t = Array.isArray(arguments[0]) ? arguments[0] : arguments;
      return this.setDates.apply(this, k.map(t, this._utc_to_local)), this;
    },
    setDate: t("setDates"),
    setUTCDate: t("setUTCDates"),
    remove: t(
      "destroy",
      "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"
    ),
    setValue: function () {
      var t = this.getFormattedDate();
      return this.inputField.val(t), this;
    },
    getFormattedDate: function (e) {
      e === _ && (e = this.o.format);
      var i = this.o.language;
      return k
        .map(this.dates, function (t) {
          return U.formatDate(t, e, i);
        })
        .join(this.o.multidateSeparator);
    },
    getStartDate: function () {
      return this.o.startDate;
    },
    setStartDate: function (t) {
      return (
        this._process_options({ startDate: t }),
        this.update(),
        this.updateNavArrows(),
        this
      );
    },
    getEndDate: function () {
      return this.o.endDate;
    },
    setEndDate: function (t) {
      return (
        this._process_options({ endDate: t }),
        this.update(),
        this.updateNavArrows(),
        this
      );
    },
    setDaysOfWeekDisabled: function (t) {
      return (
        this._process_options({ daysOfWeekDisabled: t }), this.update(), this
      );
    },
    setDaysOfWeekHighlighted: function (t) {
      return (
        this._process_options({ daysOfWeekHighlighted: t }), this.update(), this
      );
    },
    setDatesDisabled: function (t) {
      return this._process_options({ datesDisabled: t }), this.update(), this;
    },
    place: function () {
      var t, e, i, a, s, n, o, r, h, l, d;
      return (
        this.isInline ||
          ((t = this.picker.outerWidth()),
          (e = this.picker.outerHeight()),
          (i = (l = k(this.o.container)).width()),
          (a = ("body" === this.o.container ? k(document) : l).scrollTop()),
          (l = l.offset()),
          (s = [0]),
          this.element.parents().each(function () {
            var t = k(this).css("z-index");
            "auto" !== t && 0 !== Number(t) && s.push(Number(t));
          }),
          (n = Math.max.apply(Math, s) + this.o.zIndexOffset),
          (d = (
            this.component ? this.component.parent() : this.element
          ).offset()),
          (o = this.component
            ? this.component.outerHeight(!0)
            : this.element.outerHeight(!1)),
          (r = this.component
            ? this.component.outerWidth(!0)
            : this.element.outerWidth(!1)),
          (h = d.left - l.left),
          (l = d.top - l.top),
          "body" !== this.o.container && (l += a),
          this.picker.removeClass(
            "datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"
          ),
          "auto" !== this.o.orientation.x
            ? (this.picker.addClass(
                "datepicker-orient-" + this.o.orientation.x
              ),
              "right" === this.o.orientation.x && (h -= t - r))
            : d.left < 0
            ? (this.picker.addClass("datepicker-orient-left"),
              (h -= d.left - 10))
            : i < h + t
            ? (this.picker.addClass("datepicker-orient-right"), (h += r - t))
            : this.o.rtl
            ? this.picker.addClass("datepicker-orient-right")
            : this.picker.addClass("datepicker-orient-left"),
          "auto" === (d = this.o.orientation.y) &&
            (d = -a + l - e < 0 ? "bottom" : "top"),
          this.picker.addClass("datepicker-orient-" + d),
          "top" === d
            ? (l -= e + parseInt(this.picker.css("padding-top")))
            : (l += o),
          this.o.rtl
            ? this.picker.css({ top: l, right: i - (h + r), zIndex: n })
            : this.picker.css({ top: l, left: h, zIndex: n })),
        this
      );
    },
    _allow_update: !0,
    update: function () {
      var t, i, e;
      return (
        this._allow_update &&
          ((t = this.dates.copy()),
          (e = !(i = [])),
          arguments.length
            ? (k.each(
                arguments,
                k.proxy(function (t, e) {
                  e instanceof Date && (e = this._local_to_utc(e)), i.push(e);
                }, this)
              ),
              (e = !0))
            : ((i =
                (i = this.isInput
                  ? this.element.val()
                  : this.element.data("date") || this.inputField.val()) &&
                this.o.multidate
                  ? i.split(this.o.multidateSeparator)
                  : [i]),
              delete this.element.data().date),
          (i = k.map(
            i,
            k.proxy(function (t) {
              return U.parseDate(
                t,
                this.o.format,
                this.o.language,
                this.o.assumeNearbyYear
              );
            }, this)
          )),
          (i = k.grep(
            i,
            k.proxy(function (t) {
              return !this.dateWithinRange(t) || !t;
            }, this),
            !0
          )),
          this.dates.replace(i),
          this.o.updateViewDate &&
            (this.dates.length
              ? (this.viewDate = new Date(this.dates.get(-1)))
              : this.viewDate < this.o.startDate
              ? (this.viewDate = new Date(this.o.startDate))
              : this.viewDate > this.o.endDate
              ? (this.viewDate = new Date(this.o.endDate))
              : (this.viewDate = this.o.defaultViewDate)),
          e
            ? (this.setValue(), this.element.change())
            : this.dates.length &&
              String(t) !== String(this.dates) &&
              e &&
              (this._trigger("changeDate"), this.element.change()),
          !this.dates.length &&
            t.length &&
            (this._trigger("clearDate"), this.element.change()),
          this.fill()),
        this
      );
    },
    fillDow: function () {
      if (this.o.showWeekDays) {
        var t = this.o.weekStart,
          e = "<tr>";
        for (
          this.o.calendarWeeks && (e += '<th class="cw">&#160;</th>');
          t < this.o.weekStart + 7;

        )
          (e += '<th class="dow'),
            -1 !== k.inArray(t, this.o.daysOfWeekDisabled) &&
              (e += " disabled"),
            (e += '">' + M[this.o.language].daysMin[t++ % 7] + "</th>");
        (e += "</tr>"), this.picker.find(".datepicker-days thead").append(e);
      }
    },
    fillMonths: function () {
      for (
        var t = this._utc_to_local(this.viewDate), e = "", i = 0;
        i < 12;
        i++
      )
        e +=
          '<span class="month' +
          (t && t.getMonth() === i ? " focused" : "") +
          '">' +
          M[this.o.language].monthsShort[i] +
          "</span>";
      this.picker.find(".datepicker-months td").html(e);
    },
    setRange: function (t) {
      t && t.length
        ? (this.range = k.map(t, function (t) {
            return t.valueOf();
          }))
        : delete this.range,
        this.fill();
    },
    getClassNames: function (t) {
      var e = [],
        i = this.viewDate.getUTCFullYear(),
        a = this.viewDate.getUTCMonth(),
        s = C();
      return (
        t.getUTCFullYear() < i ||
        (t.getUTCFullYear() === i && t.getUTCMonth() < a)
          ? e.push("old")
          : (t.getUTCFullYear() > i ||
              (t.getUTCFullYear() === i && t.getUTCMonth() > a)) &&
            e.push("new"),
        this.focusDate &&
          t.valueOf() === this.focusDate.valueOf() &&
          e.push("focused"),
        this.o.todayHighlight && n(t, s) && e.push("today"),
        -1 !== this.dates.contains(t) && e.push("active"),
        this.dateWithinRange(t) || e.push("disabled"),
        this.dateIsDisabled(t) && e.push("disabled", "disabled-date"),
        -1 !== k.inArray(t.getUTCDay(), this.o.daysOfWeekHighlighted) &&
          e.push("highlighted"),
        this.range &&
          (t > this.range[0] &&
            t < this.range[this.range.length - 1] &&
            e.push("range"),
          -1 !== k.inArray(t.valueOf(), this.range) && e.push("selected"),
          t.valueOf() === this.range[0] && e.push("range-start"),
          t.valueOf() === this.range[this.range.length - 1]) &&
          e.push("range-end"),
        e
      );
    },
    _fill_yearsView: function (t, e, i, a, s, n, o) {
      for (
        var r,
          h,
          l,
          d = "",
          c = i / 10,
          t = this.picker.find(t),
          u = Math.floor(a / i) * i,
          p = u + 9 * c,
          f = Math.floor(this.viewDate.getFullYear() / c) * c,
          g = k.map(this.dates, function (t) {
            return Math.floor(t.getUTCFullYear() / c) * c;
          }),
          D = u - c;
        D <= p + c;
        D += c
      )
        (r = [e]),
          (h = null),
          D === u - c ? r.push("old") : D === p + c && r.push("new"),
          -1 !== k.inArray(D, g) && r.push("active"),
          (D < s || n < D) && r.push("disabled"),
          D === f && r.push("focused"),
          o !== k.noop &&
            ((l = o(new Date(D, 0, 1))) === _
              ? (l = {})
              : "boolean" == typeof l
              ? (l = { enabled: l })
              : "string" == typeof l && (l = { classes: l }),
            !1 === l.enabled && r.push("disabled"),
            l.classes && (r = r.concat(l.classes.split(/\s+/))),
            l.tooltip) &&
            (h = l.tooltip),
          (d +=
            '<span class="' +
            r.join(" ") +
            '"' +
            (h ? ' title="' + h + '"' : "") +
            ">" +
            D +
            "</span>");
      t.find(".datepicker-switch").text(u + "-" + p), t.find("td").html(d);
    },
    fill: function () {
      var t,
        e,
        i = new Date(this.viewDate),
        a = i.getUTCFullYear(),
        s = i.getUTCMonth(),
        n =
          this.o.startDate !== -1 / 0
            ? this.o.startDate.getUTCFullYear()
            : -1 / 0,
        o =
          this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
        r = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
        h = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
        l = M[this.o.language].today || M.en.today || "",
        d = M[this.o.language].clear || M.en.clear || "",
        c = M[this.o.language].titleFormat || M.en.titleFormat,
        u = C(),
        u =
          (!0 === this.o.todayBtn || "linked" === this.o.todayBtn) &&
          u >= this.o.startDate &&
          u <= this.o.endDate &&
          !this.weekOfDateIsDisabled(u);
      if (!isNaN(a) && !isNaN(s)) {
        this.picker
          .find(".datepicker-days .datepicker-switch")
          .text(U.formatDate(i, c, this.o.language)),
          this.picker
            .find("tfoot .today")
            .text(l)
            .css("display", u ? "table-cell" : "none"),
          this.picker
            .find("tfoot .clear")
            .text(d)
            .css("display", !0 === this.o.clearBtn ? "table-cell" : "none"),
          this.picker
            .find("thead .datepicker-title")
            .text(this.o.title)
            .css(
              "display",
              "string" == typeof this.o.title && "" !== this.o.title
                ? "table-cell"
                : "none"
            ),
          this.updateNavArrows(),
          this.fillMonths();
        for (
          var p = b(a, s, 0),
            i = p.getUTCDate(),
            f =
              (p.setUTCDate(i - ((p.getUTCDay() - this.o.weekStart + 7) % 7)),
              new Date(p)),
            g =
              (p.getUTCFullYear() < 100 && f.setUTCFullYear(p.getUTCFullYear()),
              f.setUTCDate(f.getUTCDate() + 42),
              (f = f.valueOf()),
              []);
          p.valueOf() < f;

        ) {
          (m = p.getUTCDay()) === this.o.weekStart &&
            (g.push("<tr>"), this.o.calendarWeeks) &&
            ((D = new Date(+p + ((this.o.weekStart - m - 7) % 7) * 864e5)),
            (D = new Date(Number(D) + ((11 - D.getUTCDay()) % 7) * 864e5)),
            (y = new Date(
              Number((y = b(D.getUTCFullYear(), 0, 1))) +
                ((11 - y.getUTCDay()) % 7) * 864e5
            )),
            g.push('<td class="cw">' + ((D - y) / 864e5 / 7 + 1) + "</td>")),
            (D = this.getClassNames(p)).push("day");
          var D,
            m,
            y = p.getUTCDate();
          this.o.beforeShowDay !== k.noop &&
            ((e = this.o.beforeShowDay(this._utc_to_local(p))) === _
              ? (e = {})
              : "boolean" == typeof e
              ? (e = { enabled: e })
              : "string" == typeof e && (e = { classes: e }),
            !1 === e.enabled && D.push("disabled"),
            e.classes && (D = D.concat(e.classes.split(/\s+/))),
            e.tooltip && (t = e.tooltip),
            e.content) &&
            (y = e.content),
            (D =
              "function" == typeof k.uniqueSort
                ? k.uniqueSort(D)
                : k.unique(D)),
            g.push(
              '<td class="' +
                D.join(" ") +
                '"' +
                (t ? ' title="' + t + '"' : "") +
                ' data-date="' +
                p.getTime().toString() +
                '">' +
                y +
                "</td>"
            ),
            (t = null),
            m === this.o.weekEnd && g.push("</tr>"),
            p.setUTCDate(p.getUTCDate() + 1);
        }
        this.picker.find(".datepicker-days tbody").html(g.join(""));
        var v,
          c = M[this.o.language].monthsTitle || M.en.monthsTitle || "Months",
          w = this.picker
            .find(".datepicker-months")
            .find(".datepicker-switch")
            .text(this.o.maxViewMode < 2 ? c : a)
            .end()
            .find("tbody span")
            .removeClass("active");
        k.each(this.dates, function (t, e) {
          e.getUTCFullYear() === a && w.eq(e.getUTCMonth()).addClass("active");
        }),
          (a < n || r < a) && w.addClass("disabled"),
          a === n && w.slice(0, o).addClass("disabled"),
          a === r && w.slice(h + 1).addClass("disabled"),
          this.o.beforeShowMonth !== k.noop &&
            ((v = this),
            k.each(w, function (t, e) {
              (t = new Date(a, t, 1)), (t = v.o.beforeShowMonth(t));
              t === _
                ? (t = {})
                : "boolean" == typeof t
                ? (t = { enabled: t })
                : "string" == typeof t && (t = { classes: t }),
                !1 !== t.enabled ||
                  k(e).hasClass("disabled") ||
                  k(e).addClass("disabled"),
                t.classes && k(e).addClass(t.classes),
                t.tooltip && k(e).prop("title", t.tooltip);
            })),
          this._fill_yearsView(
            ".datepicker-years",
            "year",
            10,
            a,
            n,
            r,
            this.o.beforeShowYear
          ),
          this._fill_yearsView(
            ".datepicker-decades",
            "decade",
            100,
            a,
            n,
            r,
            this.o.beforeShowDecade
          ),
          this._fill_yearsView(
            ".datepicker-centuries",
            "century",
            1e3,
            a,
            n,
            r,
            this.o.beforeShowCentury
          );
      }
    },
    updateNavArrows: function () {
      if (this._allow_update) {
        var t,
          e,
          i = new Date(this.viewDate),
          a = i.getUTCFullYear(),
          s = i.getUTCMonth(),
          n =
            this.o.startDate !== -1 / 0
              ? this.o.startDate.getUTCFullYear()
              : -1 / 0,
          o =
            this.o.startDate !== -1 / 0
              ? this.o.startDate.getUTCMonth()
              : -1 / 0,
          r =
            this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
          h = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
          l = 1;
        switch (this.viewMode) {
          case 4:
            l *= 10;
          case 3:
            l *= 10;
          case 2:
            l *= 10;
          case 1:
            (t = Math.floor(a / l) * l <= n),
              (e = Math.floor(a / l) * l + l > r);
            break;
          case 0:
            (t = a <= n && s <= o), (e = r <= a && h <= s);
        }
        this.picker.find(".prev").toggleClass("disabled", t),
          this.picker.find(".next").toggleClass("disabled", e);
      }
    },
    click: function (t) {
      var e, i;
      t.preventDefault(),
        t.stopPropagation(),
        (t = k(t.target)).hasClass("datepicker-switch") &&
          this.viewMode !== this.o.maxViewMode &&
          this.setViewMode(this.viewMode + 1),
        t.hasClass("today") &&
          !t.hasClass("day") &&
          (this.setViewMode(0),
          this._setDate(C(), "linked" === this.o.todayBtn ? null : "view")),
        t.hasClass("clear") && this.clearDates(),
        t.hasClass("disabled") ||
          ((t.hasClass("month") ||
            t.hasClass("year") ||
            t.hasClass("decade") ||
            t.hasClass("century")) &&
            (this.viewDate.setUTCDate(1),
            1 === this.viewMode
              ? ((i = t.parent().find("span").index(t)),
                (e = this.viewDate.getUTCFullYear()),
                this.viewDate.setUTCMonth(i))
              : ((i = 0),
                (e = Number(t.text())),
                this.viewDate.setUTCFullYear(e)),
            this._trigger(U.viewModes[this.viewMode - 1].e, this.viewDate),
            this.viewMode === this.o.minViewMode
              ? this._setDate(b(e, i, 1))
              : (this.setViewMode(this.viewMode - 1), this.fill()))),
        this.picker.is(":visible") &&
          this._focused_from &&
          this._focused_from.focus(),
        delete this._focused_from;
    },
    dayCellClick: function (t) {
      (t = k(t.currentTarget).data("date")), (t = new Date(t));
      this.o.updateViewDate &&
        (t.getUTCFullYear() !== this.viewDate.getUTCFullYear() &&
          this._trigger("changeYear", this.viewDate),
        t.getUTCMonth() !== this.viewDate.getUTCMonth()) &&
        this._trigger("changeMonth", this.viewDate),
        this._setDate(t);
    },
    navArrowsClick: function (t) {
      t = k(t.currentTarget).hasClass("prev") ? -1 : 1;
      0 !== this.viewMode && (t *= 12 * U.viewModes[this.viewMode].navStep),
        (this.viewDate = this.moveMonth(this.viewDate, t)),
        this._trigger(U.viewModes[this.viewMode].e, this.viewDate),
        this.fill();
    },
    _toggle_multidate: function (t) {
      var e = this.dates.contains(t);
      if (
        (t || this.dates.clear(),
        -1 !== e
          ? (!0 === this.o.multidate ||
              1 < this.o.multidate ||
              this.o.toggleActive) &&
            this.dates.remove(e)
          : (!1 === this.o.multidate && this.dates.clear(), this.dates.push(t)),
        "number" == typeof this.o.multidate)
      )
        for (; this.dates.length > this.o.multidate; ) this.dates.remove(0);
    },
    _setDate: function (t, e) {
      (e && "date" !== e) || this._toggle_multidate(t && new Date(t)),
        ((!e && this.o.updateViewDate) || "view" === e) &&
          (this.viewDate = t && new Date(t)),
        this.fill(),
        this.setValue(),
        (e && "view" === e) || this._trigger("changeDate"),
        this.inputField.trigger("change"),
        !this.o.autoclose || (e && "date" !== e) || this.hide();
    },
    moveDay: function (t, e) {
      var i = new Date(t);
      return i.setUTCDate(t.getUTCDate() + e), i;
    },
    moveWeek: function (t, e) {
      return this.moveDay(t, 7 * e);
    },
    moveMonth: function (t, e) {
      if (!(i = t) || isNaN(i.getTime())) return this.o.defaultViewDate;
      var i;
      if (!e) return t;
      var a,
        s,
        n = new Date(t.valueOf()),
        o = n.getUTCDate(),
        r = n.getUTCMonth(),
        h = Math.abs(e);
      if (((e = 0 < e ? 1 : -1), 1 === h))
        (s =
          -1 === e
            ? function () {
                return n.getUTCMonth() === r;
              }
            : function () {
                return n.getUTCMonth() !== a;
              }),
          (a = r + e),
          n.setUTCMonth(a),
          (a = (a + 12) % 12);
      else {
        for (var l = 0; l < h; l++) n = this.moveMonth(n, e);
        (a = n.getUTCMonth()),
          n.setUTCDate(o),
          (s = function () {
            return a !== n.getUTCMonth();
          });
      }
      for (; s(); ) n.setUTCDate(--o), n.setUTCMonth(a);
      return n;
    },
    moveYear: function (t, e) {
      return this.moveMonth(t, 12 * e);
    },
    moveAvailableDate: function (t, e, i) {
      do {
        if (((t = this[i](t, e)), !this.dateWithinRange(t))) return !1;
      } while (((i = "moveDay"), this.dateIsDisabled(t)));
      return t;
    },
    weekOfDateIsDisabled: function (t) {
      return -1 !== k.inArray(t.getUTCDay(), this.o.daysOfWeekDisabled);
    },
    dateIsDisabled: function (e) {
      return (
        this.weekOfDateIsDisabled(e) ||
        0 <
          k.grep(this.o.datesDisabled, function (t) {
            return n(e, t);
          }).length
      );
    },
    dateWithinRange: function (t) {
      return t >= this.o.startDate && t <= this.o.endDate;
    },
    keydown: function (t) {
      if (this.picker.is(":visible")) {
        var e,
          i,
          a = !1,
          s = this.focusDate || this.viewDate;
        switch (t.keyCode) {
          case 27:
            this.focusDate
              ? ((this.focusDate = null),
                (this.viewDate = this.dates.get(-1) || this.viewDate),
                this.fill())
              : this.hide(),
              t.preventDefault(),
              t.stopPropagation();
            break;
          case 37:
          case 38:
          case 39:
          case 40:
            this.o.keyboardNavigation &&
              7 !== this.o.daysOfWeekDisabled.length &&
              ((e = 37 === t.keyCode || 38 === t.keyCode ? -1 : 1),
              0 === this.viewMode
                ? t.ctrlKey
                  ? (i = this.moveAvailableDate(s, e, "moveYear")) &&
                    this._trigger("changeYear", this.viewDate)
                  : t.shiftKey
                  ? (i = this.moveAvailableDate(s, e, "moveMonth")) &&
                    this._trigger("changeMonth", this.viewDate)
                  : 37 === t.keyCode || 39 === t.keyCode
                  ? (i = this.moveAvailableDate(s, e, "moveDay"))
                  : this.weekOfDateIsDisabled(s) ||
                    (i = this.moveAvailableDate(s, e, "moveWeek"))
                : 1 === this.viewMode
                ? ((38 !== t.keyCode && 40 !== t.keyCode) || (e *= 4),
                  (i = this.moveAvailableDate(s, e, "moveMonth")))
                : 2 === this.viewMode &&
                  ((38 !== t.keyCode && 40 !== t.keyCode) || (e *= 4),
                  (i = this.moveAvailableDate(s, e, "moveYear"))),
              i) &&
              ((this.focusDate = this.viewDate = i),
              this.setValue(),
              this.fill(),
              t.preventDefault());
            break;
          case 13:
            this.o.forceParse &&
              ((s = this.focusDate || this.dates.get(-1) || this.viewDate),
              this.o.keyboardNavigation &&
                (this._toggle_multidate(s), (a = !0)),
              (this.focusDate = null),
              (this.viewDate = this.dates.get(-1) || this.viewDate),
              this.setValue(),
              this.fill(),
              this.picker.is(":visible")) &&
              (t.preventDefault(), t.stopPropagation(), this.o.autoclose) &&
              this.hide();
            break;
          case 9:
            (this.focusDate = null),
              (this.viewDate = this.dates.get(-1) || this.viewDate),
              this.fill(),
              this.hide();
        }
        a &&
          (this.dates.length
            ? this._trigger("changeDate")
            : this._trigger("clearDate"),
          this.inputField.trigger("change"));
      } else
        (40 !== t.keyCode && 27 !== t.keyCode) ||
          (this.show(), t.stopPropagation());
    },
    setViewMode: function (t) {
      (this.viewMode = t),
        this.picker
          .children("div")
          .hide()
          .filter(".datepicker-" + U.viewModes[this.viewMode].clsName)
          .show(),
        this.updateNavArrows(),
        this._trigger("changeViewMode", new Date(this.viewDate));
    },
  };
  h.prototype = {
    updateDates: function () {
      (this.dates = k.map(this.pickers, function (t) {
        return t.getUTCDate();
      })),
        this.updateRanges();
    },
    updateRanges: function () {
      var i = k.map(this.dates, function (t) {
        return t.valueOf();
      });
      k.each(this.pickers, function (t, e) {
        e.setRange(i);
      });
    },
    clearDates: function () {
      k.each(this.pickers, function (t, e) {
        e.clearDates();
      });
    },
    dateUpdated: function (t) {
      if (!this.updating) {
        this.updating = !0;
        var i = k.data(t.target, "datepicker");
        if (i !== _) {
          var a = i.getUTCDate(),
            s = this.keepEmptyValues,
            t = k.inArray(t.target, this.inputs),
            e = t - 1,
            n = t + 1,
            o = this.inputs.length;
          if (-1 !== t) {
            if (
              (k.each(this.pickers, function (t, e) {
                e.getUTCDate() || (e !== i && s) || e.setUTCDate(a);
              }),
              a < this.dates[e])
            )
              for (
                ;
                0 <= e &&
                a < this.dates[e] &&
                0 < (this.pickers[e].element.val() || "").length;

              )
                this.pickers[e--].setUTCDate(a);
            else if (a > this.dates[n])
              for (
                ;
                n < o &&
                a > this.dates[n] &&
                0 < (this.pickers[n].element.val() || "").length;

              )
                this.pickers[n++].setUTCDate(a);
            this.updateDates(), delete this.updating;
          }
        }
      }
    },
    destroy: function () {
      k.map(this.pickers, function (t) {
        t.destroy();
      }),
        k(this.inputs).off("changeDate", this.dateUpdated),
        delete this.element.data().datepicker;
    },
    remove: t(
      "destroy",
      "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"
    ),
  };
  var a = k.fn.datepicker,
    s = function (n) {
      var o,
        r = Array.apply(null, arguments);
      if (
        (r.shift(),
        this.each(function () {
          var t,
            e,
            i = k(this),
            a = i.data("datepicker"),
            s = "object" == typeof n && n;
          a ||
            ((t = (function (t, e) {
              var i,
                a = k(t).data(),
                s = {},
                n = new RegExp("^" + e.toLowerCase() + "([A-Z])");
              function o(t, e) {
                return e.toLowerCase();
              }
              for (i in ((e = new RegExp("^" + e.toLowerCase())), a))
                e.test(i) && (s[i.replace(n, o)] = a[i]);
              return s;
            })(this, "date")),
            (e = (function (t) {
              var i,
                a = {};
              if (M[t] || ((t = t.split("-")[0]), M[t]))
                return (
                  (i = M[t]),
                  k.each(d, function (t, e) {
                    e in i && (a[e] = i[e]);
                  }),
                  a
                );
            })(k.extend({}, l, t, s).language)),
            (e = k.extend({}, l, e, t, s)),
            (a = new (
              i.hasClass("input-daterange") || e.inputs
                ? (k.extend(e, {
                    inputs: e.inputs || i.find("input").toArray(),
                  }),
                  h)
                : T
            )(this, e)),
            i.data("datepicker", a)),
            "string" == typeof n &&
              "function" == typeof a[n] &&
              (o = a[n].apply(a, r));
        }),
        o === _ || o instanceof T || o instanceof h)
      )
        return this;
      if (1 < this.length)
        throw new Error(
          "Using only allowed for the collection of a single element (" +
            n +
            " function)"
        );
      return o;
    },
    l =
      ((k.fn.datepicker = s),
      (k.fn.datepicker.defaults = {
        assumeNearbyYear: !1,
        autoclose: !1,
        beforeShowDay: k.noop,
        beforeShowMonth: k.noop,
        beforeShowYear: k.noop,
        beforeShowDecade: k.noop,
        beforeShowCentury: k.noop,
        calendarWeeks: !1,
        clearBtn: !1,
        toggleActive: !1,
        daysOfWeekDisabled: [],
        daysOfWeekHighlighted: [],
        datesDisabled: [],
        endDate: 1 / 0,
        forceParse: !0,
        format: "mm/dd/yyyy",
        isInline: null,
        keepEmptyValues: !1,
        keyboardNavigation: !0,
        language: "en",
        minViewMode: 0,
        maxViewMode: 4,
        multidate: !1,
        multidateSeparator: ",",
        orientation: "auto",
        rtl: !1,
        startDate: -1 / 0,
        startView: 0,
        todayBtn: !1,
        todayHighlight: !1,
        updateViewDate: !0,
        weekStart: 0,
        disableTouchKeyboard: !1,
        enableOnReadonly: !0,
        showOnFocus: !0,
        zIndexOffset: 10,
        container: "body",
        immediateUpdates: !1,
        title: "",
        templates: { leftArrow: "&#x00AB;", rightArrow: "&#x00BB;" },
        showWeekDays: !0,
      })),
    d = (k.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"]),
    M =
      ((k.fn.datepicker.Constructor = T),
      (k.fn.datepicker.dates = {
        en: {
          days: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          monthsShort: [
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
          ],
          today: "Today",
          clear: "Clear",
          titleFormat: "MM yyyy",
        },
      })),
    U = {
      viewModes: [
        { names: ["days", "month"], clsName: "days", e: "changeMonth" },
        {
          names: ["months", "year"],
          clsName: "months",
          e: "changeYear",
          navStep: 1,
        },
        {
          names: ["years", "decade"],
          clsName: "years",
          e: "changeDecade",
          navStep: 10,
        },
        {
          names: ["decades", "century"],
          clsName: "decades",
          e: "changeCentury",
          navStep: 100,
        },
        {
          names: ["centuries", "millennium"],
          clsName: "centuries",
          e: "changeMillennium",
          navStep: 1e3,
        },
      ],
      validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
      nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
      parseFormat: function (t) {
        if ("function" == typeof t.toValue && "function" == typeof t.toDisplay)
          return t;
        var e = t.replace(this.validParts, "\0").split("\0"),
          t = t.match(this.validParts);
        if (e && e.length && t && 0 !== t.length)
          return { separators: e, parts: t };
        throw new Error("Invalid date format.");
      },
      parseDate: function (t, e, i, a) {
        if (!t) return _;
        if (!(t instanceof Date)) {
          if ((e = "string" == typeof e ? U.parseFormat(e) : e).toValue)
            return e.toValue(t, e, i);
          var s,
            n,
            o,
            r = { d: "moveDay", m: "moveMonth", w: "moveWeek", y: "moveYear" },
            h = { yesterday: "-1d", today: "+0d", tomorrow: "+1d" };
          if (
            /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(
              (t = t in h ? h[t] : t)
            )
          ) {
            for (
              c = t.match(/([\-+]\d+)([dmwy])/gi), t = new Date(), y = 0;
              y < c.length;
              y++
            )
              (s = c[y].match(/([\-+]\d+)([dmwy])/i)),
                (n = Number(s[1])),
                (o = r[s[2].toLowerCase()]),
                (t = T.prototype[o](t, n));
            return T.prototype._zero_utc_time(t);
          }
          var l,
            d,
            c = (t && t.match(this.nonpunctuation)) || [],
            u = {},
            p = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
            f = {
              yyyy: function (t, e) {
                return t.setUTCFullYear(
                  a
                    ? (!0 === (t = a) && (t = 10),
                      (i = e) < 100 &&
                        (i += 2e3) > new Date().getFullYear() + t &&
                        (i -= 100),
                      i)
                    : e
                );
                var i;
              },
              m: function (t, e) {
                if (!isNaN(t)) {
                  for (--e; e < 0; ) e += 12;
                  for (t.setUTCMonth((e %= 12)); t.getUTCMonth() !== e; )
                    t.setUTCDate(t.getUTCDate() - 1);
                }
                return t;
              },
              d: function (t, e) {
                return t.setUTCDate(e);
              },
            },
            g =
              ((f.yy = f.yyyy),
              (f.M = f.MM = f.mm = f.m),
              (f.dd = f.d),
              (t = C()),
              e.parts.slice());
          if (
            (c.length !== g.length &&
              (g = k(g)
                .filter(function (t, e) {
                  return -1 !== k.inArray(e, p);
                })
                .toArray()),
            c.length === g.length)
          ) {
            for (var D, m, y = 0, v = g.length; y < v; y++) {
              if (((l = parseInt(c[y], 10)), (s = g[y]), isNaN(l)))
                switch (s) {
                  case "MM":
                    (d = k(M[i].months).filter(w)),
                      (l = k.inArray(d[0], M[i].months) + 1);
                    break;
                  case "M":
                    (d = k(M[i].monthsShort).filter(w)),
                      (l = k.inArray(d[0], M[i].monthsShort) + 1);
                }
              u[s] = l;
            }
            for (y = 0; y < p.length; y++)
              (m = p[y]) in u &&
                !isNaN(u[m]) &&
                ((D = new Date(t)), f[m](D, u[m]), isNaN(D) || (t = D));
          }
        }
        return t;
        function w() {
          var t = this.slice(0, c[y].length),
            e = c[y].slice(0, t.length);
          return t.toLowerCase() === e.toLowerCase();
        }
      },
      formatDate: function (t, e, i) {
        if (!t) return "";
        if ((e = "string" == typeof e ? U.parseFormat(e) : e).toDisplay)
          return e.toDisplay(t, e, i);
        for (
          var a = {
              d: t.getUTCDate(),
              D: M[i].daysShort[t.getUTCDay()],
              DD: M[i].days[t.getUTCDay()],
              m: t.getUTCMonth() + 1,
              M: M[i].monthsShort[t.getUTCMonth()],
              MM: M[i].months[t.getUTCMonth()],
              yy: t.getUTCFullYear().toString().substring(2),
              yyyy: t.getUTCFullYear(),
            },
            s =
              ((a.dd = (a.d < 10 ? "0" : "") + a.d),
              (a.mm = (a.m < 10 ? "0" : "") + a.m),
              (t = []),
              k.extend([], e.separators)),
            n = 0,
            o = e.parts.length;
          n <= o;
          n++
        )
          s.length && t.push(s.shift()), t.push(a[e.parts[n]]);
        return t.join("");
      },
      headTemplate:
        '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' +
        l.templates.leftArrow +
        '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' +
        l.templates.rightArrow +
        "</th></tr></thead>",
      contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
      footTemplate:
        '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>',
    };
  (U.template =
    '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' +
    U.headTemplate +
    "<tbody></tbody>" +
    U.footTemplate +
    '</table></div><div class="datepicker-months"><table class="table-condensed">' +
    U.headTemplate +
    U.contTemplate +
    U.footTemplate +
    '</table></div><div class="datepicker-years"><table class="table-condensed">' +
    U.headTemplate +
    U.contTemplate +
    U.footTemplate +
    '</table></div><div class="datepicker-decades"><table class="table-condensed">' +
    U.headTemplate +
    U.contTemplate +
    U.footTemplate +
    '</table></div><div class="datepicker-centuries"><table class="table-condensed">' +
    U.headTemplate +
    U.contTemplate +
    U.footTemplate +
    "</table></div></div>"),
    (k.fn.datepicker.DPGlobal = U),
    (k.fn.datepicker.noConflict = function () {
      return (k.fn.datepicker = a), this;
    }),
    (k.fn.datepicker.version = "1.10.0"),
    (k.fn.datepicker.deprecated = function (t) {
      var e = window.console;
      e && e.warn && e.warn("DEPRECATED: " + t);
    }),
    k(document).on(
      "focus.datepicker.data-api click.datepicker.data-api",
      '[data-provide="datepicker"]',
      function (t) {
        var e = k(this);
        e.data("datepicker") || (t.preventDefault(), s.call(e, "show"));
      }
    ),
    k(function () {
      s.call(k('[data-provide="datepicker-inline"]'));
    });
});
