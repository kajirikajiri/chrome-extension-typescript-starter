!(function (e) {
  function t(t) {
    for (
      var o, u, i = t[0], c = t[1], a = t[2], s = 0, p = [];
      s < i.length;
      s++
    )
      (u = i[s]),
        Object.prototype.hasOwnProperty.call(n, u) && n[u] && p.push(n[u][0]),
        (n[u] = 0);
    for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
    for (f && f(t); p.length; ) p.shift()();
    return l.push.apply(l, a || []), r();
  }
  function r() {
    for (var e, t = 0; t < l.length; t++) {
      for (var r = l[t], o = !0, i = 1; i < r.length; i++) {
        var c = r[i];
        0 !== n[c] && (o = !1);
      }
      o && (l.splice(t--, 1), (e = u((u.s = r[0]))));
    }
    return e;
  }
  var o = {},
    n = { 3: 0 },
    l = [];
  function u(t) {
    if (o[t]) return o[t].exports;
    var r = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, u), (r.l = !0), r.exports;
  }
  (u.m = e),
    (u.c = o),
    (u.d = function (e, t, r) {
      u.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (u.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (u.t = function (e, t) {
      if ((1 & t && (e = u(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (u.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          u.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (u.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return u.d(t, "a", t), t;
    }),
    (u.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (u.p = "");
  var i = (window.webpackJsonp = window.webpackJsonp || []),
    c = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var a = 0; a < i.length; a++) t(i[a]);
  var f = c;
  l.push([5, 0]), r();
})({
  5: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    const o = r(0);
    o("#save").click(function () {
      var e = o("#color").val(),
        t = o("#like").prop("checked");
      chrome.storage.sync.set({ favoriteColor: e, likesColor: t }, function () {
        var e = o("#status");
        e.text("Options saved."),
          setTimeout(function () {
            e.text("");
          }, 750);
      });
    }),
      o(function () {
        chrome.storage.sync.get(
          { favoriteColor: "red", likesColor: !0 },
          function (e) {
            o("#color").val(e.favoriteColor),
              o("#like").prop("checked", e.likesColor);
          }
        );
      });
  },
});
