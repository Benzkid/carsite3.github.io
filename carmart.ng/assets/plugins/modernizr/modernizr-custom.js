/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-eventlistener-forcetouch-localstorage-touchevents-mq-prefixes-setclasses-shiv-teststyles !*/
! function(e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function o() {
        var e, t, n, o, i, a, s;
        for (var l in C)
            if (C.hasOwnProperty(l)) {
                if (e = [], t = C[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++) a = e[i], s = a.split("."), 1 === s.length ? Modernizr[s[0]] = o : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = o), y.push((o ? "" : "no-") + s.join("-"))
            }
    }

    function i(e) {
        var t = b.className,
            n = Modernizr._config.classPrefix || "";
        if (_ && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), _ ? b.className.baseVal = t : b.className = t)
    }

    function a() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : _ ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function s() {
        var e = t.body;
        return e || (e = a(_ ? "svg" : "body"), e.fake = !0), e
    }

    function l(e, n, r, o) {
        var i, l, u, c, f = "modernizr",
            d = a("div"),
            p = s();
        if (parseInt(r, 10))
            for (; r--;) u = a("div"), u.id = o ? o[r] : f + (r + 1), d.appendChild(u);
        return i = a("style"), i.type = "text/css", i.id = "s" + f, (p.fake ? p : d).appendChild(i), p.appendChild(d), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), d.id = f, p.fake && (p.style.background = "", p.style.overflow = "hidden", c = b.style.overflow, b.style.overflow = "hidden", b.appendChild(p)), l = n(d, e), p.fake ? (p.parentNode.removeChild(p), b.style.overflow = c, b.offsetHeight) : d.parentNode.removeChild(d), !!l
    }

    function u(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function c(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function f(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function d(e, t, n) {
        var o;
        for (var i in e)
            if (e[i] in t) return n === !1 ? e[i] : (o = t[e[i]], r(o, "function") ? f(o, n || t) : o);
        return !1
    }

    function p(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function m(t, n, r) {
        var o;
        if ("getComputedStyle" in e) {
            o = getComputedStyle.call(e, t, n);
            var i = e.console;
            if (null !== o) r && (o = o.getPropertyValue(r));
            else if (i) {
                var a = i.error ? "error" : "log";
                i[a].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else o = !n && t.currentStyle && t.currentStyle[r];
        return o
    }

    function h(t, r) {
        var o = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(p(t[o]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var i = []; o--;) i.push("(" + p(t[o]) + ":" + r + ")");
            return i = i.join(" or "), l("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == m(e, null, "position")
            })
        }
        return n
    }

    function v(e, t, o, i) {
        function s() {
            f && (delete O.style, delete O.modElem)
        }
        if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) {
            var l = h(e, o);
            if (!r(l, "undefined")) return l
        }
        for (var f, d, p, m, v, g = ["modernizr", "tspan", "samp"]; !O.style && g.length;) f = !0, O.modElem = a(g.shift()), O.style = O.modElem.style;
        for (p = e.length, d = 0; p > d; d++)
            if (m = e[d], v = O.style[m], c(m, "-") && (m = u(m)), O.style[m] !== n) {
                if (i || r(o, "undefined")) return s(), "pfx" == t ? m : !0;
                try {
                    O.style[m] = o
                } catch (y) {}
                if (O.style[m] != v) return s(), "pfx" == t ? m : !0
            }
        return s(), !1
    }

    function g(e, t, n, o, i) {
        var a = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + z.join(a + " ") + a).split(" ");
        return r(t, "string") || r(t, "undefined") ? v(s, t, o, i) : (s = (e + " " + j.join(a + " ") + a).split(" "), d(s, t, n))
    }
    var y = [],
        C = [],
        E = {
            _version: "3.5.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                C.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                C.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = E, Modernizr = new Modernizr, Modernizr.addTest("eventlistener", "addEventListener" in e), Modernizr.addTest("localstorage", function() {
        var e = "modernizr";
        try {
            return localStorage.setItem(e, e), localStorage.removeItem(e), !0
        } catch (t) {
            return !1
        }
    });
    var S = E._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    E._prefixes = S;
    var b = t.documentElement,
        _ = "svg" === b.nodeName.toLowerCase();
    _ || ! function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = C.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function o(e, t) {
            var n = C.elements;
            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), C.elements = n + " " + e, u(t)
        }

        function i(e) {
            var t = y[e[v]];
            return t || (t = {}, g++, e[v] = g, y[g] = t), t
        }

        function a(e, n, r) {
            if (n || (n = t), f) return n.createElement(e);
            r || (r = i(n));
            var o;
            return o = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || m.test(e) || o.tagUrn ? o : r.frag.appendChild(o)
        }

        function s(e, n) {
            if (e || (e = t), f) return e.createDocumentFragment();
            n = n || i(e);
            for (var o = n.frag.cloneNode(), a = 0, s = r(), l = s.length; l > a; a++) o.createElement(s[a]);
            return o
        }

        function l(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return C.shivMethods ? a(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(C, t.frag)
        }

        function u(e) {
            e || (e = t);
            var r = i(e);
            return !C.shivCSS || c || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), f || l(e, r), e
        }
        var c, f, d = "3.7.3",
            p = e.html5 || {},
            m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            v = "_html5shiv",
            g = 0,
            y = {};
        ! function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", c = "hidden" in e, f = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                c = !0, f = !0
            }
        }();
        var C = {
            elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: d,
            shivCSS: p.shivCSS !== !1,
            supportsUnknownElements: f,
            shivMethods: p.shivMethods !== !1,
            type: "default",
            shivDocument: u,
            createElement: a,
            createDocumentFragment: s,
            addElements: o
        };
        e.html5 = C, u(t), "object" == typeof module && module.exports && (module.exports = C)
    }("undefined" != typeof e ? e : this, t);
    var x = function() {
        function e(e, t) {
            var o;
            return e ? (t && "string" != typeof t || (t = a(t || "div")), e = "on" + e, o = e in t, !o && r && (t.setAttribute || (t = a("div")), t.setAttribute(e, ""), o = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), o) : !1
        }
        var r = !("onblur" in t.documentElement);
        return e
    }();
    E.hasEvent = x;
    var w = function() {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function(e) {
            var n = t(e);
            return n && n.matches || !1
        } : function(t) {
            var n = !1;
            return l("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
            }), n
        }
    }();
    E.mq = w;
    var T = E.testStyles = l;
    Modernizr.addTest("touchevents", function() {
        var n;
        if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;
        else {
            var r = ["@media (", S.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            T(r, function(e) {
                n = 9 === e.offsetTop
            })
        }
        return n
    });
    var N = "Moz O ms Webkit",
        z = E._config.usePrefixes ? N.split(" ") : [];
    E._cssomPrefixes = z;
    var M = function(t) {
        var r, o = S.length,
            i = e.CSSRule;
        if ("undefined" == typeof i) return n;
        if (!t) return !1;
        if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in i) return "@" + t;
        for (var a = 0; o > a; a++) {
            var s = S[a],
                l = s.toUpperCase() + "_" + r;
            if (l in i) return "@-" + s.toLowerCase() + "-" + t
        }
        return !1
    };
    E.atRule = M;
    var j = E._config.usePrefixes ? N.toLowerCase().split(" ") : [];
    E._domPrefixes = j;
    var F = {
        elem: a("modernizr")
    };
    Modernizr._q.push(function() {
        delete F.elem
    });
    var O = {
        style: F.elem.style
    };
    Modernizr._q.unshift(function() {
        delete O.style
    }), E.testAllProps = g;
    var k = E.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? M(e) : (-1 != e.indexOf("-") && (e = u(e)), t ? g(e, t, n) : g(e, "pfx"))
    };
    Modernizr.addTest("forcetouch", function() {
        return x(k("mouseforcewillbegin", e, !1), e) ? MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN && MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN : !1
    }), o(), i(y), delete E.addTest, delete E.addAsyncTest;
    for (var D = 0; D < Modernizr._q.length; D++) Modernizr._q[D]();
    e.Modernizr = Modernizr
}(window, document);