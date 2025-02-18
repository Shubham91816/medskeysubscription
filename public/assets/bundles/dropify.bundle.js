!(function (i, e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "object" == typeof exports
    ? (module.exports = e(require("jquery")))
    : (i.Dropify = e(i.jQuery));
})(this, function (o) {
  var e = "dropify";
  function t(i, e) {
    window.File &&
      window.FileReader &&
      window.FileList &&
      window.Blob &&
      ((this.element = i),
      (this.input = o(this.element)),
      (this.wrapper = null),
      (this.preview = null),
      (this.filenameWrapper = null),
      (this.settings = o.extend(
        !0,
        {
          defaultFile: "",
          maxFileSize: 0,
          minWidth: 0,
          maxWidth: 0,
          minHeight: 0,
          maxHeight: 0,
          showRemove: !0,
          showLoader: !0,
          showErrors: !0,
          errorTimeout: 3e3,
          errorsPosition: "overlay",
          imgFileExtensions: ["png", "jpg", "jpeg", "gif", "bmp"],
          maxFileSizePreview: "5M",
          allowedFormats: ["portrait", "square", "landscape"],
          allowedFileExtensions: ["*"],
          messages: {
            default: "Drag and drop a file here or click",
            replace: "Drag and drop or click to replace",
            remove: "Remove",
            error: "Ooops, something wrong happended.",
          },
          error: {
            fileSize: "The file size is too big ({{ value }} max).",
            minWidth: "The image width is too small ({{ value }}}px min).",
            maxWidth: "The image width is too big ({{ value }}}px max).",
            minHeight: "The image height is too small ({{ value }}}px min).",
            maxHeight: "The image height is too big ({{ value }}px max).",
            imageFormat: "The image format is not allowed ({{ value }} only).",
            fileExtension: "The file is not allowed ({{ value }} only).",
          },
          tpl: {
            wrap: '<div class="dropify-wrapper"></div>',
            loader: '<div class="dropify-loader"></div>',
            message:
              '<div class="dropify-message"><span class="file-icon" /> <p>{{ default }}</p></div>',
            preview:
              '<div class="dropify-preview"><span class="dropify-render"></span><div class="dropify-infos"><div class="dropify-infos-inner"><p class="dropify-infos-message">{{ replace }}</p></div></div></div>',
            filename:
              '<p class="dropify-filename"><span class="dropify-filename-inner"></span></p>',
            clearButton:
              '<button type="button" class="dropify-clear">{{ remove }}</button>',
            errorLine: '<p class="dropify-error">{{ error }}</p>',
            errorsContainer:
              '<div class="dropify-errors-container"><ul></ul></div>',
          },
        },
        e,
        this.input.data()
      )),
      (this.errorsEvent = o.Event("dropify.errors")),
      (this.isDisabled = !1),
      (this.isInit = !1),
      (this.file = {
        object: null,
        name: null,
        size: null,
        width: null,
        height: null,
        type: null,
      }),
      Array.isArray(this.settings.allowedFormats) ||
        (this.settings.allowedFormats =
          this.settings.allowedFormats.split(" ")),
      Array.isArray(this.settings.allowedFileExtensions) ||
        (this.settings.allowedFileExtensions =
          this.settings.allowedFileExtensions.split(" ")),
      (this.onChange = this.onChange.bind(this)),
      (this.clearElement = this.clearElement.bind(this)),
      (this.onFileReady = this.onFileReady.bind(this)),
      this.translateMessages(),
      this.createElements(),
      this.setContainerSize(),
      (this.errorsEvent.errors = []),
      this.input.on("change", this.onChange));
  }
  return (
    (t.prototype.onChange = function () {
      this.resetPreview(), this.readFile(this.element);
    }),
    (t.prototype.createElements = function () {
      (this.isInit = !0),
        this.input.wrap(o(this.settings.tpl.wrap)),
        (this.wrapper = this.input.parent());
      var i = o(this.settings.tpl.message).insertBefore(this.input),
        i =
          (o(this.settings.tpl.errorLine).appendTo(i),
          !0 === this.isTouchDevice() &&
            this.wrapper.addClass("touch-fallback"),
          this.input.attr("disabled") &&
            ((this.isDisabled = !0), this.wrapper.addClass("disabled")),
          !0 === this.settings.showLoader &&
            ((this.loader = o(this.settings.tpl.loader)),
            this.loader.insertBefore(this.input)),
          (this.preview = o(this.settings.tpl.preview)),
          this.preview.insertAfter(this.input),
          !1 === this.isDisabled &&
            !0 === this.settings.showRemove &&
            ((this.clearButton = o(this.settings.tpl.clearButton)),
            this.clearButton.insertAfter(this.input),
            this.clearButton.on("click", this.clearElement)),
          (this.filenameWrapper = o(this.settings.tpl.filename)),
          this.filenameWrapper.prependTo(
            this.preview.find(".dropify-infos-inner")
          ),
          !0 === this.settings.showErrors &&
            ((this.errorsContainer = o(this.settings.tpl.errorsContainer)),
            "outside" === this.settings.errorsPosition
              ? this.errorsContainer.insertAfter(this.wrapper)
              : this.errorsContainer.insertBefore(this.input)),
          this.settings.defaultFile || "");
      "" !== i.trim() &&
        ((this.file.name = this.cleanFilename(i)),
        this.setPreview(this.isImage(), i));
    }),
    (t.prototype.readFile = function (i) {
      var e, t, s, r, n;
      i.files &&
        i.files[0] &&
        ((e = new FileReader()),
        (t = new Image()),
        (i = i.files[0]),
        (s = null),
        (r = this),
        (n = o.Event("dropify.fileReady")),
        this.clearErrors(),
        this.showLoader(),
        this.setFileInformations(i),
        (this.errorsEvent.errors = []),
        this.checkFileSize(),
        this.isFileExtensionAllowed(),
        this.isImage() &&
        this.file.size < this.sizeToByte(this.settings.maxFileSizePreview)
          ? (this.input.on("dropify.fileReady", this.onFileReady),
            e.readAsDataURL(i),
            (e.onload = function (i) {
              (s = i.target.result),
                (t.src = i.target.result),
                (t.onload = function () {
                  r.setFileDimensions(this.width, this.height),
                    r.validateImage(),
                    r.input.trigger(n, [!0, s]);
                });
            }.bind(this)))
          : this.onFileReady(!1));
    }),
    (t.prototype.onFileReady = function (i, e, t) {
      if (
        (this.input.off("dropify.fileReady", this.onFileReady),
        0 === this.errorsEvent.errors.length)
      )
        this.setPreview(e, t);
      else {
        this.input.trigger(this.errorsEvent, [this]);
        for (var s, r = this.errorsEvent.errors.length - 1; 0 <= r; r--) {
          var n = this.errorsEvent.errors[r].namespace.split(".").pop();
          this.showError(n);
        }
        void 0 !== this.errorsContainer &&
          (this.errorsContainer.addClass("visible"),
          (s = this.errorsContainer),
          setTimeout(function () {
            s.removeClass("visible");
          }, this.settings.errorTimeout)),
          this.wrapper.addClass("has-error"),
          this.resetPreview(),
          this.clearElement();
      }
    }),
    (t.prototype.setFileInformations = function (i) {
      (this.file.object = i),
        (this.file.name = i.name),
        (this.file.size = i.size),
        (this.file.type = i.type),
        (this.file.width = null),
        (this.file.height = null);
    }),
    (t.prototype.setFileDimensions = function (i, e) {
      (this.file.width = i), (this.file.height = e);
    }),
    (t.prototype.setPreview = function (i, e) {
      this.wrapper.removeClass("has-error").addClass("has-preview"),
        this.filenameWrapper
          .children(".dropify-filename-inner")
          .html(this.file.name);
      var t = this.preview.children(".dropify-render");
      this.hideLoader(),
        (!0 === i
          ? ((i = o("<img />").attr("src", e)),
            this.settings.height && i.css("max-height", this.settings.height),
            i)
          : (o("<i />").attr("class", "dropify-font-file").appendTo(t),
            o('<span class="dropify-extension" />').html(this.getFileType()))
        ).appendTo(t),
        this.preview.fadeIn();
    }),
    (t.prototype.resetPreview = function () {
      this.wrapper.removeClass("has-preview");
      var i = this.preview.children(".dropify-render");
      i.find(".dropify-extension").remove(),
        i.find("i").remove(),
        i.find("img").remove(),
        this.preview.hide(),
        this.hideLoader();
    }),
    (t.prototype.cleanFilename = function (i) {
      var e = i.split("\\").pop();
      return e == i && (e = i.split("/").pop()), "" !== i ? e : "";
    }),
    (t.prototype.clearElement = function () {
      var i;
      0 === this.errorsEvent.errors.length
        ? ((i = o.Event("dropify.beforeClear")),
          this.input.trigger(i, [this]),
          !1 !== i.result &&
            (this.resetFile(),
            this.input.val(""),
            this.resetPreview(),
            this.input.trigger(o.Event("dropify.afterClear"), [this])))
        : (this.resetFile(), this.input.val(""), this.resetPreview());
    }),
    (t.prototype.resetFile = function () {
      (this.file.object = null),
        (this.file.name = null),
        (this.file.size = null),
        (this.file.type = null),
        (this.file.width = null),
        (this.file.height = null);
    }),
    (t.prototype.setContainerSize = function () {
      this.settings.height && this.wrapper.height(this.settings.height);
    }),
    (t.prototype.isTouchDevice = function () {
      return (
        "ontouchstart" in window ||
        0 < navigator.MaxTouchPoints ||
        0 < navigator.msMaxTouchPoints
      );
    }),
    (t.prototype.getFileType = function () {
      return this.file.name.split(".").pop().toLowerCase();
    }),
    (t.prototype.isImage = function () {
      return (
        "-1" != this.settings.imgFileExtensions.indexOf(this.getFileType())
      );
    }),
    (t.prototype.isFileExtensionAllowed = function () {
      return (
        "-1" != this.settings.allowedFileExtensions.indexOf("*") ||
        "-1" !=
          this.settings.allowedFileExtensions.indexOf(this.getFileType()) ||
        (this.pushError("fileExtension"), !1)
      );
    }),
    (t.prototype.translateMessages = function () {
      for (var i in this.settings.tpl)
        for (var e in this.settings.messages)
          this.settings.tpl[i] = this.settings.tpl[i].replace(
            "{{ " + e + " }}",
            this.settings.messages[e]
          );
    }),
    (t.prototype.checkFileSize = function () {
      0 !== this.sizeToByte(this.settings.maxFileSize) &&
        this.file.size > this.sizeToByte(this.settings.maxFileSize) &&
        this.pushError("fileSize");
    }),
    (t.prototype.sizeToByte = function (i) {
      var e,
        t,
        s = 0;
      return (
        0 !== i &&
          ((t = 1048576),
          "K" === (e = i.slice(-1).toUpperCase())
            ? (s = 1024 * parseFloat(i))
            : "M" === e
            ? (s = parseFloat(i) * t)
            : "G" === e && (s = 1073741824 * parseFloat(i))),
        s
      );
    }),
    (t.prototype.validateImage = function () {
      0 !== this.settings.minWidth &&
        this.settings.minWidth >= this.file.width &&
        this.pushError("minWidth"),
        0 !== this.settings.maxWidth &&
          this.settings.maxWidth <= this.file.width &&
          this.pushError("maxWidth"),
        0 !== this.settings.minHeight &&
          this.settings.minHeight >= this.file.height &&
          this.pushError("minHeight"),
        0 !== this.settings.maxHeight &&
          this.settings.maxHeight <= this.file.height &&
          this.pushError("maxHeight"),
        "-1" == this.settings.allowedFormats.indexOf(this.getImageFormat()) &&
          this.pushError("imageFormat");
    }),
    (t.prototype.getImageFormat = function () {
      return this.file.width == this.file.height
        ? "square"
        : this.file.width < this.file.height
        ? "portrait"
        : this.file.width > this.file.height
        ? "landscape"
        : void 0;
    }),
    (t.prototype.pushError = function (i) {
      i = o.Event("dropify.error." + i);
      this.errorsEvent.errors.push(i), this.input.trigger(i, [this]);
    }),
    (t.prototype.clearErrors = function () {
      void 0 !== this.errorsContainer &&
        this.errorsContainer.children("ul").html("");
    }),
    (t.prototype.showError = function (i) {
      void 0 !== this.errorsContainer &&
        this.errorsContainer
          .children("ul")
          .append("<li>" + this.getError(i) + "</li>");
    }),
    (t.prototype.getError = function (i) {
      var e = this.settings.error[i],
        t = "";
      return (
        "fileSize" === i
          ? (t = this.settings.maxFileSize)
          : "minWidth" === i
          ? (t = this.settings.minWidth)
          : "maxWidth" === i
          ? (t = this.settings.maxWidth)
          : "minHeight" === i
          ? (t = this.settings.minHeight)
          : "maxHeight" === i
          ? (t = this.settings.maxHeight)
          : "imageFormat" === i
          ? (t = this.settings.allowedFormats.join(", "))
          : "fileExtension" === i &&
            (t = this.settings.allowedFileExtensions.join(", ")),
        "" !== t ? e.replace("{{ value }}", t) : e
      );
    }),
    (t.prototype.showLoader = function () {
      void 0 !== this.loader && this.loader.show();
    }),
    (t.prototype.hideLoader = function () {
      void 0 !== this.loader && this.loader.hide();
    }),
    (t.prototype.destroy = function () {
      this.input.siblings().remove(), this.input.unwrap(), (this.isInit = !1);
    }),
    (t.prototype.init = function () {
      this.createElements();
    }),
    (t.prototype.isDropified = function () {
      return this.isInit;
    }),
    (o.fn[e] = function (i) {
      return (
        this.each(function () {
          o.data(this, e) || o.data(this, e, new t(this, i));
        }),
        this
      );
    }),
    t
  );
});
