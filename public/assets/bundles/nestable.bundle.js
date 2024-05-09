!(function (h, r, p, n) {
  var a = "ontouchstart" in p,
    c = (function () {
      var t = p.createElement("div"),
        e = p.documentElement;
      if (!("pointerEvents" in t.style)) return !1;
      (t.style.pointerEvents = "auto"),
        (t.style.pointerEvents = "x"),
        e.appendChild(t);
      var s =
        r.getComputedStyle &&
        "auto" === r.getComputedStyle(t, "").pointerEvents;
      return e.removeChild(t), !!s;
    })(),
    s = {
      listNodeName: "ol",
      itemNodeName: "li",
      rootClass: "dd",
      listClass: "dd-list",
      itemClass: "dd-item",
      dragClass: "dd-dragel",
      handleClass: "dd-handle",
      collapsedClass: "dd-collapsed",
      placeClass: "dd-placeholder",
      noDragClass: "dd-nodrag",
      emptyClass: "dd-empty",
      expandBtnHTML:
        '<button data-action="expand" type="button">Expand</button>',
      collapseBtnHTML:
        '<button data-action="collapse" type="button">Collapse</button>',
      group: 0,
      maxDepth: 5,
      threshold: 20,
    };
  function i(t, e) {
    (this.w = h(p)),
      (this.el = h(t)),
      (this.options = h.extend({}, s, e)),
      this.init();
  }
  (i.prototype = {
    init: function () {
      function t(t) {
        var e = h(t.target);
        if (!e.hasClass(i.options.handleClass)) {
          if (e.closest("." + i.options.noDragClass).length) return;
          e = e.closest("." + i.options.handleClass);
        }
        !e.length ||
          i.dragEl ||
          ((i.isTouch = /^touch/.test(t.type)),
          i.isTouch && 1 !== t.touches.length) ||
          (t.preventDefault(), i.dragStart(t.touches ? t.touches[0] : t));
      }
      function e(t) {
        i.dragEl &&
          (t.preventDefault(), i.dragMove(t.touches ? t.touches[0] : t));
      }
      function s(t) {
        i.dragEl &&
          (t.preventDefault(), i.dragStop(t.touches ? t.touches[0] : t));
      }
      var i = this;
      i.reset(),
        i.el.data("nestable-group", this.options.group),
        (i.placeEl = h('<div class="' + i.options.placeClass + '"/>')),
        h.each(this.el.find(i.options.itemNodeName), function (t, e) {
          i.setParent(h(e));
        }),
        i.el.on("click", "button", function (t) {
          var e;
          i.dragEl ||
            ((e = (t = h(t.currentTarget)).data("action")),
            (t = t.parent(i.options.itemNodeName)),
            "collapse" === e && i.collapseItem(t),
            "expand" === e && i.expandItem(t));
        });
      a &&
        (i.el[0].addEventListener("touchstart", t, !1),
        r.addEventListener("touchmove", e, !1),
        r.addEventListener("touchend", s, !1),
        r.addEventListener("touchcancel", s, !1)),
        i.el.on("mousedown", t),
        i.w.on("mousemove", e),
        i.w.on("mouseup", s);
    },
    serialize: function () {
      var a = this;
      return (step = function (t, s) {
        var i = [];
        return (
          t.children(a.options.itemNodeName).each(function () {
            var t = h(this),
              e = h.extend({}, t.data()),
              t = t.children(a.options.listNodeName);
            t.length && (e.children = step(t, s + 1)), i.push(e);
          }),
          i
        );
      })(a.el.find(a.options.listNodeName).first(), 0);
    },
    serialise: function () {
      return this.serialize();
    },
    reset: function () {
      (this.mouse = {
        offsetX: 0,
        offsetY: 0,
        startX: 0,
        startY: 0,
        lastX: 0,
        lastY: 0,
        nowX: 0,
        nowY: 0,
        distX: 0,
        distY: 0,
        dirAx: 0,
        dirX: 0,
        dirY: 0,
        lastDirX: 0,
        lastDirY: 0,
        distAxX: 0,
        distAxY: 0,
      }),
        (this.isTouch = !1),
        (this.moving = !1),
        (this.dragEl = null),
        (this.dragRootEl = null),
        (this.dragDepth = 0),
        (this.hasNewRoot = !1),
        (this.pointEl = null);
    },
    expandItem: function (t) {
      t.removeClass(this.options.collapsedClass),
        t.children('[data-action="expand"]').hide(),
        t.children('[data-action="collapse"]').show(),
        t.children(this.options.listNodeName).show();
    },
    collapseItem: function (t) {
      t.children(this.options.listNodeName).length &&
        (t.addClass(this.options.collapsedClass),
        t.children('[data-action="collapse"]').hide(),
        t.children('[data-action="expand"]').show(),
        t.children(this.options.listNodeName).hide());
    },
    expandAll: function () {
      var t = this;
      t.el.find(t.options.itemNodeName).each(function () {
        t.expandItem(h(this));
      });
    },
    collapseAll: function () {
      var t = this;
      t.el.find(t.options.itemNodeName).each(function () {
        t.collapseItem(h(this));
      });
    },
    setParent: function (t) {
      t.children(this.options.listNodeName).length &&
        (t.prepend(h(this.options.expandBtnHTML)),
        t.prepend(h(this.options.collapseBtnHTML))),
        t.children('[data-action="expand"]').hide();
    },
    unsetParent: function (t) {
      t.removeClass(this.options.collapsedClass),
        t.children("[data-action]").remove(),
        t.children(this.options.listNodeName).remove();
    },
    dragStart: function (t) {
      var e = this.mouse,
        s = h(t.target),
        i = s.closest(this.options.itemNodeName);
      this.placeEl.css("height", i.height()),
        (e.offsetX = t.offsetX !== n ? t.offsetX : t.pageX - s.offset().left),
        (e.offsetY = t.offsetY !== n ? t.offsetY : t.pageY - s.offset().top),
        (e.startX = e.lastX = t.pageX),
        (e.startY = e.lastY = t.pageY),
        (this.dragRootEl = this.el),
        (this.dragEl = h(p.createElement(this.options.listNodeName)).addClass(
          this.options.listClass + " " + this.options.dragClass
        )),
        this.dragEl.css("width", i.width()),
        i.after(this.placeEl),
        i[0].parentNode.removeChild(i[0]),
        i.appendTo(this.dragEl),
        h(p.body).append(this.dragEl),
        this.dragEl.css({
          left: t.pageX - e.offsetX,
          top: t.pageY - e.offsetY,
        });
      for (
        var a, o = this.dragEl.find(this.options.itemNodeName), l = 0;
        l < o.length;
        l++
      )
        (a = h(o[l]).parents(this.options.listNodeName).length) >
          this.dragDepth && (this.dragDepth = a);
    },
    dragStop: function (t) {
      var e = this.dragEl.children(this.options.itemNodeName).first();
      e[0].parentNode.removeChild(e[0]),
        this.placeEl.replaceWith(e),
        this.dragEl.remove(),
        this.el.trigger("change"),
        this.hasNewRoot && this.dragRootEl.trigger("change"),
        this.reset();
    },
    dragMove: function (t) {
      var e,
        s = this.options,
        i = this.mouse,
        a =
          (this.dragEl.css({
            left: t.pageX - i.offsetX,
            top: t.pageY - i.offsetY,
          }),
          (i.lastX = i.nowX),
          (i.lastY = i.nowY),
          (i.nowX = t.pageX),
          (i.nowY = t.pageY),
          (i.distX = i.nowX - i.lastX),
          (i.distY = i.nowY - i.lastY),
          (i.lastDirX = i.dirX),
          (i.lastDirY = i.dirY),
          (i.dirX = 0 === i.distX ? 0 : 0 < i.distX ? 1 : -1),
          (i.dirY = 0 === i.distY ? 0 : 0 < i.distY ? 1 : -1),
          Math.abs(i.distX) > Math.abs(i.distY) ? 1 : 0);
      if (i.moving) {
        i.dirAx !== a
          ? ((i.distAxX = 0), (i.distAxY = 0))
          : ((i.distAxX += Math.abs(i.distX)),
            0 !== i.dirX && i.dirX !== i.lastDirX && (i.distAxX = 0),
            (i.distAxY += Math.abs(i.distY)),
            0 !== i.dirY && i.dirY !== i.lastDirY && (i.distAxY = 0)),
          (i.dirAx = a),
          i.dirAx &&
            i.distAxX >= s.threshold &&
            ((i.distAxX = 0),
            (o = this.placeEl.prev(s.itemNodeName)),
            0 < i.distX &&
              o.length &&
              !o.hasClass(s.collapsedClass) &&
              ((e = o.find(s.listNodeName).last()),
              this.placeEl.parents(s.listNodeName).length + this.dragDepth <=
                s.maxDepth) &&
              (e.length
                ? (e = o.children(s.listNodeName).last()).append(this.placeEl)
                : ((e = h("<" + s.listNodeName + "/>").addClass(
                    s.listClass
                  )).append(this.placeEl),
                  o.append(e),
                  this.setParent(o))),
            i.distX < 0) &&
            (this.placeEl.next(s.itemNodeName).length ||
              ((l = this.placeEl.parent()),
              this.placeEl.closest(s.itemNodeName).after(this.placeEl),
              l.children().length) ||
              this.unsetParent(l.parent()));
        var o = !1;
        if (
          (c || (this.dragEl[0].style.visibility = "hidden"),
          (this.pointEl = h(
            p.elementFromPoint(
              t.pageX - p.body.scrollLeft,
              t.pageY - (r.pageYOffset || p.documentElement.scrollTop)
            )
          )),
          c || (this.dragEl[0].style.visibility = "visible"),
          this.pointEl.hasClass(s.handleClass) &&
            (this.pointEl = this.pointEl.parent(s.itemNodeName)),
          this.pointEl.hasClass(s.emptyClass))
        )
          o = !0;
        else if (!this.pointEl.length || !this.pointEl.hasClass(s.itemClass))
          return;
        var l,
          n = this.pointEl.closest("." + s.rootClass),
          d = this.dragRootEl.data("nestable-id") !== n.data("nestable-id");
        (i.dirAx && !d && !o) ||
          (d && s.group !== n.data("nestable-group")) ||
          this.dragDepth - 1 + this.pointEl.parents(s.listNodeName).length >
            s.maxDepth ||
          ((t =
            t.pageY < this.pointEl.offset().top + this.pointEl.height() / 2),
          (l = this.placeEl.parent()),
          o
            ? ((e = h(p.createElement(s.listNodeName)).addClass(
                s.listClass
              )).append(this.placeEl),
              this.pointEl.replaceWith(e))
            : t
            ? this.pointEl.before(this.placeEl)
            : this.pointEl.after(this.placeEl),
          l.children().length || this.unsetParent(l.parent()),
          this.dragRootEl.find(s.itemNodeName).length ||
            this.dragRootEl.append('<div class="' + s.emptyClass + '"/>'),
          d &&
            ((this.dragRootEl = n),
            (this.hasNewRoot = this.el[0] !== this.dragRootEl[0])));
      } else (i.dirAx = a), (i.moving = !0);
    },
  }),
    (h.fn.nestable = function (e) {
      var s = this;
      return (
        this.each(function () {
          var t = h(this).data("nestable");
          t
            ? "string" == typeof e && "function" == typeof t[e] && (s = t[e]())
            : (h(this).data("nestable", new i(this, e)),
              h(this).data("nestable-id", new Date().getTime()));
        }),
        s || this
      );
    });
})(window.jQuery || window.Zepto, window, document);
