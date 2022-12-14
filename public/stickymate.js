/**
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /npm/stickymate@1.3.5/stickymate.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */

function initStickyMate() {
  {
    let e = {
        attribute: "data-sticky",
        elements: !1,
        container: "sticky-container",
        property: "position: -webkit-sticky; position: sticky;",
        supported: function () {
          let t = document.createElement("div");
          return (
            (t.style.cssText = e.property), !!t.style.position.match("sticky")
          );
        },
        wrap: function () {
          if (
            e.supported() &&
            !e.elements &&
            document.querySelectorAll("[" + e.attribute + "]").length
          ) {
            e.elements = document.querySelectorAll("[" + e.attribute + "]");
            for (let t = 0; t < e.elements.length; t++)
              if (!e.elements[t].parentNode.classList.contains(e.container))
                if ("body" == e.elements[t].parentNode.tagName.toLowerCase()) {
                  let s = document.createElement("div");
                  s.classList.add(e.container),
                    (s.style.position = "relative"),
                    e.elements[t].parentNode.insertBefore(s, e.elements[t]),
                    s.appendChild(e.elements[t]);
                } else {
                  e.elements[t].parentNode.classList.add(e.container),
                    "static" ==
                      window
                        .getComputedStyle(e.elements[t].parentNode)
                        .getPropertyValue("position") &&
                      (e.elements[t].parentNode.style.position = "relative");
                }
          }
        },
        get: function () {
          if (e.supported())
            e: for (let t = 0; t < e.elements.length; t++) {
              let s = e.elements[t].getAttribute(e.attribute);
              s = n.tojson(s);
              try {
                s = JSON.parse(s);
              } catch (e) {
                continue e;
              }
              if (!s.from || !s.duration) continue e;
              if (
                ((s.from = s.from.split(/(-?\d*\.?\d+)/).filter(function (e) {
                  return 0 === e || e;
                })),
                (s.duration = s.duration
                  .split(/(-?\d*\.?\d+)/)
                  .filter(function (e) {
                    return 0 === e || e;
                  })),
                !s.from[0].match(/\d|top|center|bottom/))
              )
                continue e;
              if (!s.duration[0].match(/\d/)) continue e;
              if ("top" == s.from) s.from[0] = 0;
              else if ("center" == s.from) {
                let n = -document.documentElement.clientHeight / 2,
                  l = -e.elements[t].offsetHeight / 2;
                s.from[0] = n - l;
              } else if ("bottom" == s.from) {
                let n = -document.documentElement.clientHeight,
                  l = -e.elements[t].offsetHeight;
                s.from[0] = n - l;
              }
              let o = l.unitsToPixels(+s.from[0], s.from[1]);
              o = 0 - o;
              let i = l.unitsToPixels(+s.duration[0], s.duration[1]),
                r = e.elements[t].style.position;
              (e.elements[t].style.position = "static"),
                (i += e.elements[t].offsetTop),
                (i += e.elements[t].offsetHeight),
                (e.elements[t].style.position = r),
                e.set(e.elements[t], e.elements[t].parentElement, o, i);
            }
        },
        set: function (t, s, n, l) {
          t.style.position.match("sticky") ||
            (t.style.cssText = (t.getAttribute("style") || "") + e.property),
            (t.style.top = n + "px"),
            (s.style.minHeight = l + "px");
        },
      },
      t = {
        attribute: "data-animation",
        elements: !1,
        list: [],
        status: { before: "before", active: "active", after: "after" },
        get: function () {
          !t.elements &&
            document.querySelectorAll("[" + t.attribute + "]").length &&
            (t.elements = document.querySelectorAll("[" + t.attribute + "]")),
            (t.list = []);
          e: for (let e = 0; e < t.elements.length; e++) {
            let s = o(t.elements[e]),
              i = t.elements[e].getAttribute(t.attribute);
            i = n.tojson(i);
            let r = /\:(\s+)?\{(\s+)?\"/g,
              a = /\"(\s+)?\,(\s+)?\"/g,
              c = /\"(\s+)?\:(\s+)?\"/g;
            i = i.replace(r, ': {"[').replace(a, '", "[').replace(c, ']": "');
            try {
              i = JSON.parse(i);
            } catch (e) {
              continue e;
            }
            let u = [];
            for (let o in i) {
              if (void 0 === t.elements[e].style[o]) continue e;
              if (Object.keys(i[o]).length < 2) continue e;
              let r = {};
              r[o] = { position: [], values: [], status: null, locked: !1 };
              t: for (let e in i[o]) {
                let t = e
                  .replace(/\[|\]/g, "")
                  .split(/(-?\d*\.?\d+)/)
                  .filter(function (e) {
                    return 0 === e || e;
                  });
                if (t[0].match(/\d/)) {
                  for (let e = 0; e < r[o].position.length; e++)
                    if (t[0] === r[o].position[e][0]) continue t;
                  r[o].position.push(t), r[o].values.push(i[o][e]);
                }
              }
              if ("transform" == o) {
                for (let e = 0; e < r[o].values.length; e++)
                  r[o].values[e] = r[o].values[e].split(/\s(?=[^()]*\()/);
                let e = new Map(
                    [].concat(...r[o].values).map(function (e) {
                      return [e.replace(/\(.*\)/, ""), e];
                    })
                  ),
                  t = r[o].values.map(function (t) {
                    return [
                      ...t
                        .reduce(function (e, t) {
                          return e.set(t.replace(/\(.*\)/, ""), t);
                        }, new Map(e))
                        .values(),
                    ];
                  });
                for (let e = 0; e < r[o].values.length; e++)
                  r[o].values[e] = t[e].join(" ");
              }
              for (let e = 0; e < r[o].values.length; e++)
                r[o].values[e] = r[o].values[e]
                  .split(/(-?\d*\.?\d+)/)
                  .filter(function (e) {
                    return 0 === e || e;
                  });
              n.autocomplete(r[o].values);
              for (let e = 0; e < r[o].position.length; e++) {
                let t = +r[o].position[e][0],
                  n = r[o].position[e][1];
                r[o].position[e] = l.unitsToPixels(t, n) + s;
              }
              u.push(r);
            }
            t.list.push({ element: t.elements[e], params: u });
          }
        },
        detect: function (e, s) {
          s = s || window.pageYOffset;
          let n = t.list[e].params;
          for (let o = 0; o < n.length; o++) {
            let i, r, a;
            for (let e in n[o]) r = e;
            a = n[o][r];
            let c = a.position,
              u = 0,
              m = c.length - 1;
            if (s < c[u] && a.status != t.status.before)
              (a.status = t.status.before),
                (i = 0),
                t.set(t.list[e], i, u, u, o, r);
            else if (s >= c[m] && a.status != t.status.after)
              (a.status = t.status.after),
                (i = 100),
                t.set(t.list[e], i, m, m, o, r);
            else if (s >= c[u] && s < c[m])
              if (
                (a.status != t.status.active && (a.status = t.status.active),
                2 == c.length)
              )
                (i = l.pixelsToPercent(c[u], c[m], s)),
                  t.set(t.list[e], i, u, m, o, r);
              else
                for (let n = 0; n < c.length; n++)
                  if (c[n + 1] && s >= c[n] && s < c[n + 1]) {
                    a.locked ||
                      ((i = l.pixelsToPercent(c[n], c[n + 1], s)),
                      t.set(t.list[e], i, n, n + 1, o, r));
                    let u = "",
                      m = "";
                    for (let e = 0; e < a.values[n].length; e++)
                      (u += a.values[n][e]), (m += a.values[n + 1][e]);
                    u != m || a.locked
                      ? u != m && a.locked && (a.locked = !1)
                      : (a.locked = !0);
                  }
          }
        },
        set: function (e, t, s, o, i, r) {
          (s = e.params[i][r].values[s]), (o = e.params[i][r].values[o]);
          let a = "";
          for (let e = 0; e < s.length; e++)
            0 == t
              ? (a += s[e])
              : 100 == t
              ? (a += o[e])
              : n.numbers(s[e])
              ? (a += l.percentToValue(s[e], o[e], t))
              : (a += s[e]);
          window.requestAnimationFrame(function () {
            "opacity" != r && (e.element.style["-webkit-" + r] = a),
              (e.element.style[r] = a);
          });
        },
      },
      s = {
        attribute: "data-classes",
        elements: !1,
        list: [],
        get: function () {
          s.elements ||
            (s.elements = document.querySelectorAll("[" + s.attribute + "]")),
            (s.list = []);
          for (let e = 0; e < s.elements.length; e++) {
            let t = o(s.elements[e]),
              i = s.elements[e].getAttribute(s.attribute);
            i = n.tojson(i);
            let r = /^(\s+)?\{(\s+)?\"/g,
              a = /\}(\s+)?\,(\s+)?\"/g,
              c = /\"(\s+)?\:(\s+)?\{(\s+)?\"/g;
            (i = i.replace(r, '{"[').replace(a, '}, "[').replace(c, ']": {"')),
              (i = JSON.parse(i));
            let u = { element: s.elements[e], params: [] };
            s.elements[e].hasAttribute("data-classlist-original") ||
              s.elements[e].setAttribute(
                "data-classlist-original",
                s.elements[e].className
              ),
              u.params.push({
                position: 0,
                status: !1,
                classes: s.elements[e].getAttribute("data-classlist-original"),
              });
            let m = 0;
            for (let e in i) {
              let s = e
                  .replace(/\[|\]/g, "")
                  .split(/(-?\d*\.?\d+)/)
                  .filter(function (e) {
                    return 0 === e || e;
                  }),
                n = +s[0],
                o = s[1];
              s = l.unitsToPixels(n, o) + t;
              let r = { position: s, status: !1, classes: u.params[m].classes };
              if (i[e].add) {
                let t = i[e].add.split(/\,?\s+|\,|\s+/g);
                for (let e = 0; e < t.length; e++)
                  r.classes.match(t[e]) || (r.classes += " " + t[e]);
              }
              if (i[e].remove) {
                let t = i[e].remove.split(/\,?\s+|\,|\s+/g);
                for (let e = 0; e < t.length; e++)
                  r.classes.match(t[e]) &&
                    (r.classes = r.classes.replace(t[e], ""));
                r.classes = r.classes
                  .replace(/^\s+|\s+$/, "")
                  .replace(/\s{2,}/, " ");
              }
              u.params.push(r), m++;
            }
            s.list.push(u);
          }
        },
        detect: function (e, t) {
          t = t || window.pageYOffset;
          let n = s.list[e].element,
            l = s.list[e].params;
          for (let e = 0; e < l.length; e++) {
            let o,
              i,
              r = l[e].position;
            l[e - 1] && (o = l[e - 1].position),
              l[e + 1] && (i = l[e + 1].position);
            let a = l[l.length - 1].position,
              c = i && t >= r && t < i && !l[e].status,
              u = t >= r && r == a && !l[e].status;
            (c || u) &&
              ((l[e].status = !0),
              l[e - 1] && (l[e - 1].status = !1),
              l[e + 1] && (l[e + 1].status = !1),
              s.set(n, l[e].classes));
          }
        },
        set: function (e, t) {
          window.requestAnimationFrame(function () {
            e.className = t;
          });
        },
      },
      n = {
        numbers: function (e) {
          return "number" == typeof e || !!e.match(/\d/);
        },
        tojson: function (e) {
          return (
            "{" !== e.substring(0, 1) && (e = "{" + e + "}"),
            (e = e
              .replace(/,(?=[^()]*\))/g, "__")
              .replace(/([\s\r\n]+)?([:\,\{\}])([\s\r\n]+)?/g, "$2")
              .replace(/(['"])?([a-zA-Z0-9\.\%\-_\(\)\s]+)(['"])?/g, '"$2"')
              .replace(/__/g, ","))
          );
        },
        autocomplete: function (e) {
          let t = e[0].slice();
          for (let s = 0; s < e.length; s++)
            e[s].length > t.length && (t = e[s].slice());
          for (let s = 0; s < e.length; s++)
            for (let l = 0; l < t.length; l++)
              e[s][l] &&
                !n.numbers(e[s][l]) &&
                e[s][l].length > t[l].length &&
                (t[l] = e[s][l]);
          for (let s = 0; s < t.length; s++)
            for (let l = 0; l < e.length; l++)
              e[l][s]
                ? n.numbers(e[l][s])
                  ? (e[l][s] = +e[l][s])
                  : n.numbers(e[l][s]) || e[l][s] == t[s] || (e[l][s] = t[s])
                : n.numbers(t[s])
                ? (e[l][s] = +t[s])
                : (e[l][s] = t[s]);
          return e;
        },
      },
      l = {
        unitsToPixels: function (e, t) {
          return (t = t || "px").match("px")
            ? e
            : t.match("vh")
            ? (e / 100) * document.documentElement.clientHeight
            : t.match("vw")
            ? (e / 100) * document.documentElement.clientWidth
            : void 0;
        },
        pixelsToPercent: function (e, t, s) {
          return (100 * (s - e)) / (t - e);
        },
        percentToValue: function (e, t, s) {
          return (s * (t - e)) / 100 + e;
        },
      },
      o = function (e) {
        let t = 0;
        for (; e && !isNaN(e.offsetTop); ) {
          if (e.style.position.match("sticky")) {
            let s = e.style.position;
            (e.style.position = "relative"),
              (t += e.offsetTop - e.scrollTop),
              (e.style.position = s);
          } else t += e.offsetTop - e.scrollTop;
          e = e.offsetParent;
        }
        return t;
      },
      i = function (e) {
        let t = document.documentElement.clientWidth,
          s = document.documentElement.clientHeight;
        setTimeout(function () {
          let n = document.documentElement.clientWidth,
            l = document.documentElement.clientHeight;
          t == n && s == l && e();
        }, 50);
      },
      r = function () {
        if ("IntersectionObserver" in window) {
          let e = {
            animation: function (e) {
              t.detect(e);
            },
            classes: function (e) {
              s.detect(e);
            },
            list: { animation: {}, classes: {} },
          };
          const n = new IntersectionObserver((t, s) => {
            t.forEach((t) => {
              let s = t.target.animation_index,
                n = t.target.scroll_action;
              e.list[n][s] ||
                (e.list[n][s] = function () {
                  e[n](s);
                }),
                t.isIntersecting
                  ? window.addEventListener("scroll", e.list[n][s], {
                      passive: !0,
                    })
                  : window.removeEventListener("scroll", e.list[n][s], {
                      passive: !0,
                    });
            });
          });
          t &&
            t.elements &&
            t.elements.forEach((e, t) => {
              let s = e.parentElement;
              for (; s; ) {
                let t = window.getComputedStyle(s);
                if (
                  "hidden" == t.getPropertyValue("overflow") ||
                  "hidden" == t.getPropertyValue("overflow-x")
                ) {
                  "static" ==
                    window
                      .getComputedStyle(e.parentElement)
                      .getPropertyValue("position") &&
                    (e.parentElement.style.position = "relative");
                  let t = document.createElement("div");
                  (t.style.position = "absolute"),
                    (t.style.pointerEvents = "none"),
                    (t.style.left = "0px"),
                    (t.style.top = "0px"),
                    (t.style.width = "100%"),
                    (t.style.height = "100%"),
                    e.before(t),
                    (e = t);
                  break;
                }
                s = s.parentElement;
              }
              (e.animation_index = t),
                (e.scroll_action = "animation"),
                n.observe(e);
            }),
            s &&
              s.elements &&
              s.elements.forEach((e, t) => {
                (e.animation_index = t),
                  (e.scroll_action = "classes"),
                  n.observe(e);
              });
        } else
          window.addEventListener(
            "scroll",
            function () {
              let e = window.pageYOffset;
              for (let s = 0; s < t.list.length; s++) t.detect(s, e);
              for (let t = 0; t < s.list.length; t++) s.detect(t, e);
            },
            { passive: !0 }
          );
      },
      a = function () {
        e.wrap(), e.get(), t.get(), s.get();
        for (let e = 0; e < t.list.length; e++) t.detect(e);
        for (let e = 0; e < s.list.length; e++) s.detect(e);
      };
    "loading" == document.readyState
      ? (document.addEventListener("DOMContentLoaded", function () {
          a(), r();
        }),
        (window.onload = a))
      : "interactive" == document.readyState
      ? (a(), r(), (window.onload = a))
      : "complete" == document.readyState && (a(), r()),
      window.addEventListener(
        "resize",
        function () {
          i(a);
        },
        { passive: !0 }
      );
  }
}
window.initStickyMate = initStickyMate;
//# sourceMappingURL=/sm/10fd6debbe78120addad33fa49d39dadd71378ca3890b3aecb502e09e8aefe6a.map
