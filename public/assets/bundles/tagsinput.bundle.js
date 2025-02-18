!(function (h) {
  "use strict";
  var a = {
    tagClass: function (t) {
      return "label label-info";
    },
    itemValue: function (t) {
      return t && t.toString();
    },
    itemText: function (t) {
      return this.itemValue(t);
    },
    itemTitle: function (t) {
      return null;
    },
    freeInput: !0,
    addOnBlur: !0,
    maxTags: void 0,
    maxChars: void 0,
    confirmKeys: [13, 44],
    delimiter: ",",
    delimiterRegex: null,
    cancelConfirmKeysOnEmpty: !1,
    onTagExists: function (t, e) {
      e.hide().fadeIn();
    },
    trimValue: !1,
    allowDuplicates: !1,
  };
  function r(t, e) {
    (this.isInit = !0),
      (this.itemsArray = []),
      (this.$element = h(t)),
      this.$element.hide(),
      (this.isSelect = "SELECT" === t.tagName),
      (this.multiple = this.isSelect && t.hasAttribute("multiple")),
      (this.objectItems = e && e.itemValue),
      (this.placeholderText = t.hasAttribute("placeholder")
        ? this.$element.attr("placeholder")
        : ""),
      (this.inputSize = Math.max(1, this.placeholderText.length)),
      (this.$container = h('<div class="bootstrap-tagsinput"></div>')),
      (this.$input = h(
        '<input type="text" placeholder="' + this.placeholderText + '"/>'
      ).appendTo(this.$container)),
      this.$element.before(this.$container),
      this.build(e),
      (this.isInit = !1);
  }
  function o(t, e) {
    var n;
    "function" != typeof t[e] &&
      ((n = t[e]),
      (t[e] = function (t) {
        return t[n];
      }));
  }
  function l(t, e) {
    var n;
    "function" != typeof t[e] &&
      ((n = t[e]),
      (t[e] = function () {
        return n;
      }));
  }
  (r.prototype = {
    constructor: r,
    add: function (t, e, n) {
      var i = this;
      if (
        !(i.options.maxTags && i.itemsArray.length >= i.options.maxTags) &&
        (!1 === t || t)
      ) {
        if (
          "object" ==
            typeof (t =
              "string" == typeof t && i.options.trimValue ? h.trim(t) : t) &&
          !i.objectItems
        )
          throw "Can't add objects when itemValue option is not set";
        if (!t.toString().match(/^\s*$/)) {
          if (
            (i.isSelect &&
              !i.multiple &&
              0 < i.itemsArray.length &&
              i.remove(i.itemsArray[0]),
            "string" == typeof t && "INPUT" === this.$element[0].tagName)
          ) {
            var a = i.options.delimiterRegex || i.options.delimiter,
              o = t.split(a);
            if (1 < o.length) {
              for (var r = 0; r < o.length; r++) this.add(o[r], !0);
              return void (e || i.pushVal());
            }
          }
          var s,
            l = i.options.itemValue(t),
            a = i.options.itemText(t),
            u = i.options.tagClass(t),
            p = i.options.itemTitle(t),
            c = h.grep(i.itemsArray, function (t) {
              return i.options.itemValue(t) === l;
            })[0];
          c && !i.options.allowDuplicates
            ? i.options.onTagExists &&
              ((s = h(".tag", i.$container).filter(function () {
                return h(this).data("item") === c;
              })),
              i.options.onTagExists(t, s))
            : i.items().toString().length + t.length + 1 >
                i.options.maxInputLength ||
              ((s = h.Event("beforeItemAdd", {
                item: t,
                cancel: !1,
                options: n,
              })),
              i.$element.trigger(s),
              s.cancel) ||
              (i.itemsArray.push(t),
              (s = h(
                '<span class="tag ' +
                  m(u) +
                  (null !== p ? '" title="' + p : "") +
                  '">' +
                  m(a) +
                  '<span data-role="remove"></span></span>'
              )).data("item", t),
              i.findInputWrapper().before(s),
              s.after(" "),
              (u =
                h('option[value="' + encodeURIComponent(l) + '"]', i.$element)
                  .length ||
                h('option[value="' + m(l) + '"]', i.$element).length),
              i.isSelect &&
                !u &&
                ((p = h("<option selected>" + m(a) + "</option>")).data(
                  "item",
                  t
                ),
                p.attr("value", l),
                i.$element.append(p)),
              e || i.pushVal(),
              (i.options.maxTags !== i.itemsArray.length &&
                i.items().toString().length !== i.options.maxInputLength) ||
                i.$container.addClass("bootstrap-tagsinput-max"),
              h(".typeahead, .twitter-typeahead", i.$container).length &&
                i.$input.typeahead("val", ""),
              this.isInit
                ? i.$element.trigger(
                    h.Event("itemAddedOnInit", { item: t, options: n })
                  )
                : i.$element.trigger(
                    h.Event("itemAdded", { item: t, options: n })
                  ));
        }
      }
    },
    remove: function (e, t, n) {
      var i = this;
      if (
        (e = i.objectItems
          ? (e =
              "object" == typeof e
                ? h.grep(i.itemsArray, function (t) {
                    return i.options.itemValue(t) == i.options.itemValue(e);
                  })
                : h.grep(i.itemsArray, function (t) {
                    return i.options.itemValue(t) == e;
                  }))[e.length - 1]
          : e)
      ) {
        var a = h.Event("beforeItemRemove", {
          item: e,
          cancel: !1,
          options: n,
        });
        if ((i.$element.trigger(a), a.cancel)) return;
        h(".tag", i.$container)
          .filter(function () {
            return h(this).data("item") === e;
          })
          .remove(),
          h("option", i.$element)
            .filter(function () {
              return h(this).data("item") === e;
            })
            .remove(),
          -1 !== h.inArray(e, i.itemsArray) &&
            i.itemsArray.splice(h.inArray(e, i.itemsArray), 1);
      }
      t || i.pushVal(),
        i.options.maxTags > i.itemsArray.length &&
          i.$container.removeClass("bootstrap-tagsinput-max"),
        i.$element.trigger(h.Event("itemRemoved", { item: e, options: n }));
    },
    removeAll: function () {
      var t = this;
      for (
        h(".tag", t.$container).remove(), h("option", t.$element).remove();
        0 < t.itemsArray.length;

      )
        t.itemsArray.pop();
      t.pushVal();
    },
    refresh: function () {
      var o = this;
      h(".tag", o.$container).each(function () {
        var t = h(this),
          e = t.data("item"),
          n = o.options.itemValue(e),
          i = o.options.itemText(e),
          a = o.options.tagClass(e);
        t.attr("class", null),
          t.addClass("tag " + m(a)),
          (t.contents().filter(function () {
            return 3 == this.nodeType;
          })[0].nodeValue = m(i)),
          o.isSelect &&
            h("option", o.$element)
              .filter(function () {
                return h(this).data("item") === e;
              })
              .attr("value", n);
      });
    },
    items: function () {
      return this.itemsArray;
    },
    pushVal: function () {
      var e = this,
        t = h.map(e.items(), function (t) {
          return e.options.itemValue(t).toString();
        });
      e.$element.val(t, !0).trigger("change");
    },
    build: function (t) {
      var n,
        e,
        i,
        s = this;
      (s.options = h.extend({}, a, t)),
        s.objectItems && (s.options.freeInput = !1),
        o(s.options, "itemValue"),
        o(s.options, "itemText"),
        l(s.options, "tagClass"),
        s.options.typeahead &&
          (l((n = s.options.typeahead || {}), "source"),
          s.$input.typeahead(
            h.extend({}, n, {
              source: function (t, a) {
                function e(t) {
                  for (var e = [], n = 0; n < t.length; n++) {
                    var i = s.options.itemText(t[n]);
                    (o[i] = t[n]), e.push(i);
                  }
                  a(e);
                }
                this.map = {};
                var o = this.map,
                  t = n.source(t);
                h.isFunction(t.success)
                  ? t.success(e)
                  : (h.isFunction(t.then) ? t : h.when(t)).then(e);
              },
              updater: function (t) {
                return s.add(this.map[t]), this.map[t];
              },
              matcher: function (t) {
                return (
                  -1 !==
                  t.toLowerCase().indexOf(this.query.trim().toLowerCase())
                );
              },
              sorter: function (t) {
                return t.sort();
              },
              highlighter: function (t) {
                var e = new RegExp("(" + this.query + ")", "gi");
                return t.replace(e, "<strong>$1</strong>");
              },
            })
          )),
        s.options.typeaheadjs &&
          ((t = null),
          (i = {}),
          (e = s.options.typeaheadjs),
          (i = h.isArray(e) ? ((t = e[0]), e[1]) : e),
          s.$input.typeahead(t, i).on(
            "typeahead:selected",
            h.proxy(function (t, e) {
              i.valueKey ? s.add(e[i.valueKey]) : s.add(e),
                s.$input.typeahead("val", "");
            }, s)
          )),
        s.$container.on(
          "click",
          h.proxy(function (t) {
            s.$element.attr("disabled") || s.$input.removeAttr("disabled"),
              s.$input.focus();
          }, s)
        ),
        s.options.addOnBlur &&
          s.options.freeInput &&
          s.$input.on(
            "focusout",
            h.proxy(function (t) {
              0 === h(".typeahead, .twitter-typeahead", s.$container).length &&
                (s.add(s.$input.val()), s.$input.val(""));
            }, s)
          ),
        s.$container.on(
          "keydown",
          "input",
          h.proxy(function (t) {
            var e = h(t.target),
              n = s.findInputWrapper();
            if (s.$element.attr("disabled"))
              s.$input.attr("disabled", "disabled");
            else {
              switch (t.which) {
                case 8:
                  0 === u(e[0]) &&
                    (i = n.prev()).length &&
                    s.remove(i.data("item"));
                  break;
                case 46:
                  0 === u(e[0]) &&
                    (i = n.next()).length &&
                    s.remove(i.data("item"));
                  break;
                case 37:
                  var i = n.prev();
                  0 === e.val().length && i[0] && (i.before(n), e.focus());
                  break;
                case 39:
                  i = n.next();
                  0 === e.val().length && i[0] && (i.after(n), e.focus());
              }
              t = e.val().length;
              Math.ceil(t / 5);
              e.attr("size", Math.max(this.inputSize, e.val().length));
            }
          }, s)
        ),
        s.$container.on(
          "keypress",
          "input",
          h.proxy(function (t) {
            var e,
              n,
              a,
              o,
              i,
              r = h(t.target);
            s.$element.attr("disabled")
              ? s.$input.attr("disabled", "disabled")
              : ((e = r.val()),
                (n = s.options.maxChars && e.length >= s.options.maxChars),
                s.options.freeInput &&
                  ((a = t),
                  (i = s.options.confirmKeys),
                  (o = !1),
                  h.each(i, function (t, e) {
                    if ("number" == typeof e && a.which === e) return !(o = !0);
                    if (a.which === e.which) {
                      var n =
                          !e.hasOwnProperty("altKey") || a.altKey === e.altKey,
                        i =
                          !e.hasOwnProperty("shiftKey") ||
                          a.shiftKey === e.shiftKey,
                        e =
                          !e.hasOwnProperty("ctrlKey") ||
                          a.ctrlKey === e.ctrlKey;
                      if (n && i && e) return !(o = !0);
                    }
                  }),
                  o || n) &&
                  (0 !== e.length &&
                    (s.add(n ? e.substr(0, s.options.maxChars) : e), r.val("")),
                  !1 === s.options.cancelConfirmKeysOnEmpty &&
                    t.preventDefault()),
                (i = r.val().length),
                Math.ceil(i / 5),
                r.attr("size", Math.max(this.inputSize, r.val().length)));
          }, s)
        ),
        s.$container.on(
          "click",
          "[data-role=remove]",
          h.proxy(function (t) {
            s.$element.attr("disabled") ||
              s.remove(h(t.target).closest(".tag").data("item"));
          }, s)
        ),
        s.options.itemValue === a.itemValue &&
          ("INPUT" === s.$element[0].tagName
            ? s.add(s.$element.val())
            : h("option", s.$element).each(function () {
                s.add(h(this).attr("value"), !0);
              }));
    },
    destroy: function () {
      var t = this;
      t.$container.off("keypress", "input"),
        t.$container.off("click", "[role=remove]"),
        t.$container.remove(),
        t.$element.removeData("tagsinput"),
        t.$element.show();
    },
    focus: function () {
      this.$input.focus();
    },
    input: function () {
      return this.$input;
    },
    findInputWrapper: function () {
      for (
        var t = this.$input[0], e = this.$container[0];
        t && t.parentNode !== e;

      )
        t = t.parentNode;
      return h(t);
    },
  }),
    (h.fn.tagsinput = function (n, i, a) {
      var o = [];
      return (
        this.each(function () {
          var t,
            e = h(this).data("tagsinput");
          e
            ? n || i
              ? void 0 !== e[n] &&
                void 0 !==
                  (t =
                    3 === e[n].length && void 0 !== a
                      ? e[n](i, null, a)
                      : e[n](i)) &&
                o.push(t)
              : o.push(e)
            : ((e = new r(this, n)),
              h(this).data("tagsinput", e),
              o.push(e),
              "SELECT" === this.tagName &&
                h("option", h(this)).attr("selected", "selected"),
              h(this).val(h(this).val()));
        }),
        "string" != typeof n || 1 < o.length ? o : o[0]
      );
    }),
    (h.fn.tagsinput.Constructor = r);
  var e = h("<div />");
  function m(t) {
    return t ? e.text(t).html() : "";
  }
  function u(t) {
    var e,
      n = 0;
    return (
      document.selection
        ? (t.focus(),
          (e = document.selection.createRange()).moveStart(
            "character",
            -t.value.length
          ),
          (n = e.text.length))
        : (!t.selectionStart && "0" != t.selectionStart) ||
          (n = t.selectionStart),
      n
    );
  }
  h(function () {
    h(
      "input[data-role=tagsinput], select[multiple][data-role=tagsinput]"
    ).tagsinput();
  });
})(window.jQuery);
