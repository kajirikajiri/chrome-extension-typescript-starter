(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [0],
  {
    10: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        c = a(3),
        o = a(1),
        u = function (e) {
          var t = e.value,
            a = e.onClick;
          return r.a.createElement(
            "button",
            {
              className: "square",
              "data-test": "square",
              onClick: function () {
                a();
              },
            },
            t
          );
        },
        i = function (e) {
          var t = e.squares,
            a = e.handleClick,
            n = function (e) {
              return r.a.createElement(u, {
                onClick: function () {
                  return a(e);
                },
                value: t[e],
              });
            };
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(
              "div",
              { className: "board-row" },
              n(0),
              n(1),
              n(2)
            ),
            r.a.createElement(
              "div",
              { className: "board-row" },
              n(3),
              n(4),
              n(5)
            ),
            r.a.createElement(
              "div",
              { className: "board-row" },
              n(6),
              n(7),
              n(8)
            )
          );
        },
        l = function (e) {
          var t = Object(n.useState)(!1),
            a = Object(o.a)(t, 2),
            r = a[0],
            c = a[1];
          return (
            Object(n.useEffect)(function () {
              var t = (function (e) {
                for (
                  var t = [
                      [0, 1, 2],
                      [3, 4, 5],
                      [6, 7, 8],
                      [0, 3, 6],
                      [1, 4, 7],
                      [2, 5, 8],
                      [0, 4, 8],
                      [2, 4, 6],
                    ],
                    a = 0;
                  a < t.length;
                  a++
                ) {
                  var n = Object(o.a)(t[a], 3),
                    r = n[0],
                    c = n[1],
                    u = n[2];
                  if (e[r] && e[r] === e[c] && e[r] === e[u]) return e[r];
                }
                return "";
              })(e);
              c("" !== t);
            }),
            r
          );
        },
        s = function (e) {
          return e ? "X" : "O";
        },
        m = function () {
          var e = Object(n.useState)([Array(9).fill("")]),
            t = Object(o.a)(e, 2),
            a = t[0],
            c = t[1],
            u = Object(n.useState)(0),
            m = Object(o.a)(u, 2),
            f = m[0],
            v = m[1],
            d = a[f],
            b = (function (e) {
              var t = Object(n.useState)(!0),
                a = Object(o.a)(t, 2),
                r = a[0],
                c = a[1];
              return (
                Object(n.useEffect)(function () {
                  c(e % 2 === 0);
                }),
                r
              );
            })(f),
            E = l(d),
            g = (function (e, t) {
              return e
                ? "winner: " +
                    (function (e) {
                      return e ? "O" : "X";
                    })(t)
                : "Next player: " + s(t);
            })(E, b),
            p = (function (e, t) {
              return t.map(function (t, a) {
                var n = a ? "Go to move #" + a : "Go to game start";
                return r.a.createElement(
                  "li",
                  { key: a },
                  r.a.createElement(
                    "button",
                    {
                      onClick: function () {
                        e(a);
                      },
                    },
                    n
                  )
                );
              });
            })(v, a);
          return r.a.createElement(
            "div",
            { className: "game" },
            r.a.createElement(
              "div",
              { className: "game-board" },
              r.a.createElement(i, {
                handleClick: function (e) {
                  if ("" === d[e] && !E) {
                    var t = d.slice();
                    (t[e] = s(b)),
                      (function (e) {
                        var t = f + 1;
                        v(t);
                        var n = a.slice();
                        n[t] = e;
                        for (var r = t + 1; r < 10; r++) delete n[r];
                        c(n);
                      })(t),
                      chrome.browserAction.setBadgeText({ text: String(e) }),
                      chrome.tabs.create(
                        { url: "https://google.com", active: !1 },
                        function (e) {
                          chrome.runtime.sendMessage({ tabId: e.id }, function (
                            e
                          ) {
                            console.log(e);
                          });
                        }
                      );
                  }
                },
                squares: d,
              })
            ),
            r.a.createElement(
              "div",
              { className: "game-info" },
              r.a.createElement(
                "div",
                { className: "status", "data-test": "gameStatus" },
                g
              ),
              r.a.createElement("ol", null, p)
            )
          );
        };
      a(9);
      c.render(n.createElement(m, null), document.getElementById("root"));
    },
    4: function (e, t, a) {
      e.exports = a(10);
    },
    9: function (e, t, a) {},
  },
  [[4, 1, 2]],
]);
//# sourceMappingURL=main.4d10e371.chunk.js.map
