(function(E) {
    var window = this;
    if (window.googletag && googletag.evalScripts) {
        googletag.evalScripts();
    }
    if (window.googletag && googletag._loaded_) return;
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var m, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ca = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        da = ca(this),
        ea = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        n = {},
        fa = {},
        q = function(a, b) {
            var c = fa[b];
            if (null == c) return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        },
        t = function(a, b, c) {
            if (b) a: {
                var d = a.split(".");a = 1 === d.length;
                var e = d[0],
                    f;!a && e in n ? f = n : f = da;
                for (e = 0; e < d.length - 1; e++) {
                    var g = d[e];
                    if (!(g in f)) break a;
                    f = f[g]
                }
                d = d[d.length - 1];c = ea && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ba(n, d, {
                    configurable: !0,
                    writable: !0,
                    value: b
                }) : b !== c && (void 0 === fa[d] && (a = 1E9 * Math.random() >>> 0, fa[d] = ea ? da.Symbol(d) : "$jscp$" + a + "$" + d), ba(f, fa[d], {
                    configurable: !0,
                    writable: !0,
                    value: b
                })))
            }
        };
    t("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.g = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.g
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    }, "es6");
    t("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, n.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ha(aa(this))
                }
            })
        }
        return a
    }, "es6");
    var ha = function(a) {
            a = {
                next: a
            };
            a[q(n.Symbol, "iterator")] = function() {
                return this
            };
            return a
        },
        ia = function(a) {
            return a.raw = a
        },
        u = function(a) {
            var b = "undefined" != typeof n.Symbol && q(n.Symbol, "iterator") && a[q(n.Symbol, "iterator")];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        ja = function(a) {
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            return c
        },
        v = function(a) {
            return a instanceof Array ? a : ja(u(a))
        },
        w = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        ka = ea && "function" == typeof q(Object, "assign") ? q(Object, "assign") : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) w(d, e) && (a[e] = d[e])
            }
            return a
        };
    t("Object.assign", function(a) {
        return a || ka
    }, "es6");
    var la = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        na;
    if (ea && "function" == typeof Object.setPrototypeOf) na = Object.setPrototypeOf;
    else {
        var oa;
        a: {
            var pa = {
                    a: !0
                },
                qa = {};
            try {
                qa.__proto__ = pa;
                oa = qa.a;
                break a
            } catch (a) {}
            oa = !1
        }
        na = oa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ra = na,
        x = function(a, b) {
            a.prototype = la(b.prototype);
            a.prototype.constructor = a;
            if (ra) ra(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Qa = b.prototype
        },
        sa = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        };
    t("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    }, "es6");
    t("WeakMap", function(a) {
        function b() {}

        function c(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var d = "$jscomp_hidden_" + Math.random(),
            e = 0,
            f = function(g) {
                this.g = (e += Math.random() + 1).toString();
                if (g) {
                    g = u(g);
                    for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
                }
            };
        f.prototype.set = function(g, h) {
            if (!c(g)) throw Error("Invalid WeakMap key");
            if (!w(g, d)) {
                var k = new b;
                ba(g, d, {
                    value: k
                })
            }
            if (!w(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.g] = h;
            return this
        };
        f.prototype.get = function(g) {
            return c(g) && w(g, d) ? g[d][this.g] : void 0
        };
        f.prototype.has = function(g) {
            return c(g) && w(g, d) && w(g[d], this.g)
        };
        f.prototype.delete = function(g) {
            return c(g) && w(g, d) && w(g[d], this.g) ? delete g[d][this.g] : !1
        };
        return f
    }, "es6");
    t("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(u([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        p = l.next();
                    if (p.done || p.value[0] != h || "s" != p.value[1]) return !1;
                    p = l.next();
                    return p.done || 4 != p.value[0].x || "t" != p.value[1] || !l.next().done ? !1 : !0
                } catch (r) {
                    return !1
                }
            }()) return a;
        var b = new n.WeakMap,
            c = function(h) {
                this.h = {};
                this.g = f();
                this.size = 0;
                if (h) {
                    h = u(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.h[l.id] = []);
            l.o ? l.o.value = k : (l.o = {
                next: this.g,
                u: this.g.u,
                head: this.g,
                key: h,
                value: k
            }, l.list.push(l.o), this.g.u.next = l.o, this.g.u = l.o, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.o && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.h[h.id], h.o.u.next = h.o.next, h.o.next.u = h.o.u, h.o.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.h = {};
            this.g = this.g.u = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).o
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).o) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, k) {
            for (var l = this.entries(), p; !(p = l.next()).done;) p = p.value, h.call(k, p[1], p[0], this)
        };
        c.prototype[q(n.Symbol, "iterator")] = c.prototype.entries;
        var d = function(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var p = h.h[l];
                if (p && w(h.h, l))
                    for (h = 0; h < p.length; h++) {
                        var r = p[h];
                        if (k !== k && r.key !== r.key || k === r.key) return {
                            id: l,
                            list: p,
                            index: h,
                            o: r
                        }
                    }
                return {
                    id: l,
                    list: p,
                    index: -1,
                    o: void 0
                }
            },
            e = function(h, k) {
                var l = h.g;
                return ha(function() {
                    if (l) {
                        for (; l.head != h.g;) l = l.u;
                        for (; l.next != l.head;) return l = l.next, {
                            done: !1,
                            value: k(l)
                        };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.u = h.next = h.head = h
            },
            g = 0;
        return c
    }, "es6");
    var ta = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[q(n.Symbol, "iterator")] = function() {
            return e
        };
        return e
    };
    t("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ta(this, function(b) {
                return b
            })
        }
    }, "es6");
    t("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    var ua = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    t("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = ua(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    t("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = ua(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    t("globalThis", function(a) {
        return a || da
    }, "es_2020");
    t("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(u([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.g = new n.Map;
            if (c) {
                c = u(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.g.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.g.delete(c);
            this.size = this.g.size;
            return c
        };
        b.prototype.clear = function() {
            this.g.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.g.has(c)
        };
        b.prototype.entries = function() {
            return this.g.entries()
        };
        b.prototype.values = function() {
            return q(this.g, "values").call(this.g)
        };
        b.prototype.keys = q(b.prototype, "values");
        b.prototype[q(n.Symbol, "iterator")] = q(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    t("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = ua(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? q(c, "repeat").call(c, Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    }, "es8");
    t("Array.prototype.values", function(a) {
        return a ? a : function() {
            return ta(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    t("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    t("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || q(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    t("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== ua(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    var y = this || self,
        va = function(a) {
            a = a.split(".");
            for (var b = y, c = 0; c < a.length; c++)
                if (b = b[a[c]], null == b) return null;
            return b
        },
        ya = function(a) {
            return Object.prototype.hasOwnProperty.call(a, wa) && a[wa] || (a[wa] = ++xa)
        },
        wa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        xa = 0,
        za = function(a, b) {
            a = a.split(".");
            var c = y;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        };
    var Aa = function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        Ia = function(a) {
            if (!Ba.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ca, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Da, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ea, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Fa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ga, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ha, "&#0;"));
            return a
        },
        Ca = /&/g,
        Da = /</g,
        Ea = />/g,
        Fa = /"/g,
        Ga = /'/g,
        Ha = /\x00/g,
        Ba = /[\x00&<>"']/,
        Ka = function(a, b) {
            var c = 0;
            a = Aa(String(a)).split(".");
            b = Aa(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = Ja(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Ja(0 == f[2].length, 0 == g[2].length) || Ja(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        },
        Ja = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };

    function La() {
        var a = y.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function Ma(a) {
        return -1 != La().indexOf(a)
    };
    var Na = function(a, b) {
            Array.prototype.forEach.call(a, b, void 0)
        },
        Oa = function(a, b) {
            return Array.prototype.filter.call(a, b, void 0)
        },
        Pa = function(a, b) {
            return Array.prototype.map.call(a, b, void 0)
        };

    function Qa(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ra(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Sa(a, b) {
        return 0 <= Array.prototype.indexOf.call(a, b, void 0)
    };
    var Ta = function(a) {
        Ta[" "](a);
        return a
    };
    Ta[" "] = function() {};
    var Ua = {},
        Va = null,
        Xa = function(a) {
            var b;
            void 0 === b && (b = 0);
            Wa();
            b = Ua[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                var g = a[e],
                    h = a[e + 1],
                    k = a[e + 2],
                    l = b[g >> 2];
                g = b[(g & 3) << 4 | h >> 4];
                h = b[(h & 15) << 2 | k >> 6];
                k = b[k & 63];
                c[f++] = l + g + h + k
            }
            l = 0;
            k = d;
            switch (a.length - e) {
                case 2:
                    l = a[e + 1], k = b[(l & 15) << 2] || d;
                case 1:
                    a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
            }
            return c.join("")
        },
        $a = function(a) {
            var b = [];
            Za(a, function(c) {
                b.push(c)
            });
            return b
        },
        Za = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        p = Va[l];
                    if (null != p) return p;
                    if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            Wa();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (64 === h && -1 === e) break;
                b(e << 2 | f >> 4);
                64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
            }
        },
        Wa = function() {
            if (!Va) {
                Va = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    Ua[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === Va[f] && (Va[f] = e)
                    }
                }
            }
        };
    var ab = "undefined" !== typeof Uint8Array,
        bb = {};
    var cb, db = function(a) {
        if (bb !== bb) throw Error("illegal external caller");
        this.T = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    };
    db.prototype.isEmpty = function() {
        return null == this.T
    };
    var eb = "function" === typeof n.Symbol && "symbol" === typeof(0, n.Symbol)() ? (0, n.Symbol)(void 0) : void 0;

    function fb(a, b) {
        Object.isFrozen(a) || (eb ? a[eb] |= b : void 0 !== a.C ? a.C |= b : Object.defineProperties(a, {
            C: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    }

    function gb(a) {
        var b;
        eb ? b = a[eb] : b = a.C;
        return null == b ? 0 : b
    }

    function hb(a) {
        fb(a, 1);
        return a
    }

    function z(a) {
        return Array.isArray(a) ? !!(gb(a) & 2) : !1
    }

    function ib(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as immutable");
        fb(a, 2)
    }

    function jb(a, b) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as mutable");
        b ? fb(a, 8) : Object.isFrozen(a) || (eb ? a[eb] &= -9 : void 0 !== a.C && (a.C &= -9))
    };

    function kb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var lb, mb = Object.freeze(hb([])),
        nb = function(a) {
            if (z(a.j)) throw Error("Cannot mutate an immutable Message");
        },
        ob = "undefined" != typeof n.Symbol && "undefined" != typeof n.Symbol.hasInstance;

    function pb(a) {
        return {
            value: a,
            configurable: !1,
            writable: !1,
            enumerable: !1
        }
    };

    function qb(a, b) {
        var c = void 0 === c ? !1 : c;
        if (Array.isArray(a)) return new b(a);
        if (c) return new b
    };

    function rb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (ab && null != a && a instanceof Uint8Array) return Xa(a);
                    if (a instanceof db) {
                        var b = a.T;
                        b = null == b || "string" === typeof b ? b : ab && b instanceof Uint8Array ? Xa(b) : null;
                        return null == b ? "" : a.T = b
                    }
                }
        }
        return a
    };

    function sb(a, b) {
        b = void 0 === b ? tb : b;
        return ub(a, b)
    }

    function vb(a, b) {
        if (null != a) {
            if (Array.isArray(a)) a = ub(a, b);
            else if (kb(a)) {
                var c = {},
                    d;
                for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = vb(a[d], b));
                a = c
            } else a = b(a);
            return a
        }
    }

    function ub(a, b) {
        for (var c = a.slice(), d = 0; d < c.length; d++) c[d] = vb(c[d], b);
        Array.isArray(a) && gb(a) & 1 && hb(c);
        return c
    }

    function wb(a) {
        if (a && "object" == typeof a && a.toJSON) return a.toJSON();
        a = rb(a);
        return Array.isArray(a) ? sb(a, wb) : a
    }

    function tb(a) {
        if ("object" === typeof a) {
            if (ab && null != a && a instanceof Uint8Array) return new Uint8Array(a);
            if (Array.isArray(a.j) && a.constructor !== Object) {
                var b = sb(a.j);
                xb = b;
                b = new a.constructor(b);
                xb = null;
                yb(b, a);
                return b
            }
        }
        return a
    };
    var zb = function(a) {
            return a.h || (a.h = a.j[a.i + a.A] = {})
        },
        B = function(a, b, c) {
            return -1 === b ? null : b >= a.i ? a.h ? a.h[b] : void 0 : (void 0 === c ? 0 : c) && a.h && (c = a.h[b], null != c) ? c : a.j[b + a.A]
        },
        C = function(a, b, c, d, e) {
            d = void 0 === d ? !1 : d;
            (void 0 === e ? 0 : e) || nb(a);
            if (b >= a.i || d) return zb(a)[b] = c, a;
            void 0 !== a.h && a.i >= a.j.length ? (d = a.j.length - 1, e = b + a.A, e >= d ? (a.j[d] = void 0, a.j[e] = c, a.j.push(a.h)) : a.j[e] = c) : a.j[b + a.A] = c;
            void 0 !== a.h && b in a.h && delete a.h[b];
            return a
        },
        Ab = function(a, b, c, d) {
            c = void 0 === c ? !0 : c;
            var e = B(a, b, d);
            Array.isArray(e) || (e = mb);
            if (z(a.j)) c && (ib(e), Object.freeze(e));
            else if (e === mb || z(e)) e = hb(e.slice()), C(a, b, e, d);
            return e
        },
        D = function(a, b, c) {
            a = B(a, b);
            return null == a ? c : a
        },
        Bb = function(a, b) {
            a = B(a, b);
            a = null == a ? a : !!a;
            return null == a ? !1 : a
        },
        Cb = function(a, b) {
            a = B(a, b);
            a = null == a ? a : +a;
            return null == a ? 0 : a
        },
        Db = function(a, b, c) {
            null == c ? c = mb : hb(c);
            return C(a, b, c)
        };

    function F(a, b, c, d) {
        nb(a);
        c !== d ? C(a, b, c) : C(a, b, void 0, !1);
        return a
    }
    var Hb = function(a, b, c, d) {
            nb(a);
            (c = Eb(a, c)) && c !== b && null != d && (a.g && c in a.g && (a.g[c] = void 0), C(a, c));
            return C(a, b, d)
        },
        Eb = function(a, b) {
            for (var c = 0, d = 0; d < b.length; d++) {
                var e = b[d];
                null != B(a, e) && (0 !== c && C(a, c, void 0, !1, !0), c = e)
            }
            return c
        },
        G = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            var e = d;
            a.g || (a.g = {});
            var f = a.g[c];
            if (f) b = f;
            else if (b = qb(B(a, c, e), b)) a.g[c] = b, z(a.j) && ib(b.j);
            if (null == b) return b;
            z(b.j) && !z(a.j) && (b = b.R(), C(a, c, b.j, d), a.g[c] = b);
            return b
        },
        H = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            var e = z(a.j),
                f = d,
                g = e;
            g = void 0 === g ? !0 : g;
            a.g || (a.g = {});
            var h = z(a.j);
            var k = a.g[c];
            f = Ab(a, c, !0, f);
            var l = h || z(f);
            if (!k) {
                k = [];
                h = h || l;
                for (var p = 0; p < f.length; p++) {
                    var r = f[p];
                    h = h || z(r);
                    r = qb(r, b);
                    void 0 !== r && (k.push(r), l && ib(r.j))
                }
                a.g[c] = k;
                jb(f, !h)
            }
            b = l || g;
            g = z(k);
            b && !g && (Object.isFrozen(k) && (a.g[c] = k = k.slice()), ib(k), Object.freeze(k));
            !b && g && (a.g[c] = k = k.slice());
            a = Ab(a, c, d);
            if (!(c = e) && (c = a)) {
                if (!Array.isArray(a)) throw Error("cannot check mutability state of non-array");
                c = !(gb(a) & 8)
            }
            if (c) {
                for (c = 0; c < k.length; c++)(d = k[c]) && z(d.j) && !e && (k[c] = k[c].R(), a[c] = k[c].j);
                jb(a, !0)
            }
            return k
        },
        Ib = function(a, b, c) {
            nb(a);
            a.g || (a.g = {});
            var d = null == c ? c = void 0 : c.j;
            a.g[b] = c;
            return C(a, b, d)
        },
        Jb = function(a, b, c, d) {
            nb(a);
            a.g || (a.g = {});
            var e = null != d ? d.j : d = void 0;
            a.g[b] = d;
            return Hb(a, b, c, e)
        },
        Kb = function(a, b, c) {
            nb(a);
            if (null != c) {
                var d = hb([]);
                for (var e = !1, f = 0; f < c.length; f++) d[f] = c[f].j, e = e || z(d[f]);
                a.g || (a.g = {});
                a.g[b] = c;
                jb(d, !e)
            } else a.g && (a.g[b] = void 0), d = mb;
            return C(a, b, d)
        },
        Lb = function(a, b) {
            return D(a, b, "")
        },
        Mb = function(a, b, c) {
            b = Eb(a, c) === b ? b : -1;
            return D(a, b, 0)
        };
    var Nb = function(a, b, c) {
        a || (a = xb);
        xb = null;
        var d = this.constructor.g || 0,
            e = 0 < d,
            f = this.constructor.messageId;
        a || (a = f ? [f] : []);
        e && 0 < a.length && kb(a[a.length - 1]) && "g" in a[a.length - 1] && (d = 0);
        this.A = (f ? 0 : -1) - d;
        this.g = void 0;
        this.j = a;
        a: {
            d = this.j.length;a = d - 1;
            if (d && (d = this.j[a], kb(d))) {
                this.h = d;
                b = q(Object, "keys").call(Object, d);
                0 < b.length && Array.prototype.every.call(b, isNaN, void 0) ? this.i = Number.MAX_VALUE : this.i = a - this.A;
                break a
            }
            void 0 !== b && -1 < b ? (this.i = Math.max(b, a + 1 - this.A), this.h = void 0) : this.i = Number.MAX_VALUE
        }
        if (!e && this.h && "g" in this.h) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c)
            for (e = 0; e < c.length; e++) b = c[e], b < this.i ? (b += this.A, (a = this.j[b]) ? Array.isArray(a) && hb(a) : this.j[b] = mb) : (a = zb(this), (d = a[b]) ? Array.isArray(d) && hb(d) : a[b] = mb)
    };
    Nb.prototype.toJSON = function() {
        var a = this.j;
        return lb ? a : sb(a, wb)
    };

    function Ob(a, b) {
        return rb(b)
    }

    function yb(a, b) {
        b.G && (a.G = b.G.slice());
        var c = b.g;
        if (c) {
            b = b.h;
            for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var e = c[d];
                    if (e) {
                        var f = !(!b || !b[d]),
                            g = +d;
                        if (Array.isArray(e)) {
                            if (e.length)
                                for (f = H(a, e[0].constructor, g, f), g = 0; g < Math.min(f.length, e.length); g++) yb(f[g], e[g])
                        } else(f = G(a, e.constructor, g, f)) && yb(f, e)
                    }
                }
        }
    }
    var xb;
    var Pb = function() {
        Nb.apply(this, arguments)
    };
    x(Pb, Nb);
    Pb.prototype.R = function() {
        return this
    };
    if (ob) {
        var Qb = {};
        Object.defineProperties(Pb, (Qb[n.Symbol.hasInstance] = pb(function() {
            throw Error("Cannot perform instanceof checks for MutableMessage");
        }), Qb))
    };

    function Rb(a, b, c, d, e, f) {
        (a = a.g && a.g[c]) ? Array.isArray(a) ? (e = f.M ? hb(a.slice()) : a, Kb(b, c, e)) : Ib(b, c, a): (ab && d instanceof Uint8Array ? e = d.length ? new db(new Uint8Array(d)) : cb || (cb = new db(null)) : (Array.isArray(d) && (e ? ib(d) : Array.isArray(d) && gb(d) & 1 && f.M && (d = d.slice())), e = d), C(b, c, e))
    };
    var I = function() {
        Pb.apply(this, arguments)
    };
    x(I, Pb);
    I.prototype.R = function() {
        if (z(this.j)) {
            var a = {
                M: !0
            };
            var b = z(this.j);
            if (b && !a.M) throw Error("copyRepeatedFields must be true for frozen messages");
            var c = new this.constructor;
            this.G && (c.G = this.G.slice());
            for (var d = this.j, e = 0; e < d.length; e++) {
                var f = d[e];
                if (e === d.length - 1 && kb(f))
                    for (var g in f) {
                        if (Object.prototype.hasOwnProperty.call(f, g)) {
                            var h = +g;
                            q(Number, "isNaN").call(Number, h) ? zb(c)[g] = f[g] : Rb(this, c, h, f[g], b, a)
                        }
                    } else Rb(this, c, e - this.A, f, b, a)
            }
            a = c
        } else a = this;
        return a
    };
    if (ob) {
        var Sb = {};
        Object.defineProperties(I, (Sb[n.Symbol.hasInstance] = pb(Object[n.Symbol.hasInstance]), Sb))
    };
    var Vb = function(a, b) {
        this.h = a === Tb && b || "";
        this.i = Ub
    };
    Vb.prototype.F = !0;
    Vb.prototype.g = function() {
        return this.h
    };
    var Wb = function(a) {
            return a instanceof Vb && a.constructor === Vb && a.i === Ub ? a.h : "type_error:Const"
        },
        J = function(a) {
            return new Vb(Tb, a)
        },
        Ub = {},
        Tb = {};
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function Xb(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    var Yb = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var K = function(a, b) {
        this.h = b === Zb ? a : ""
    };
    K.prototype.toString = function() {
        return this.h + ""
    };
    K.prototype.F = !0;
    K.prototype.g = function() {
        return this.h.toString()
    };
    var cc = function(a, b) {
            a = $b.exec(ac(a).toString());
            var c = a[3] || "";
            return new K(a[1] + bc("?", a[2] || "", b) + bc("#", c), Zb)
        },
        ac = function(a) {
            return a instanceof K && a.constructor === K ? a.h : "type_error:TrustedResourceUrl"
        },
        $b = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        dc = function(a) {
            for (var b = "", c = 0; c < a.length; c++) b += Wb(a[c]);
            return new K(b, Zb)
        },
        Zb = {},
        bc = function(a, b, c) {
            if (null == c) return b;
            if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
            for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var e = c[d];
                    e = Array.isArray(e) ? e : [e];
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                    }
                }
            return b
        };
    var L = function(a, b) {
        this.h = b === ec ? a : ""
    };
    L.prototype.toString = function() {
        return this.h.toString()
    };
    L.prototype.F = !0;
    L.prototype.g = function() {
        return this.h.toString()
    };
    var fc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        gc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        ec = {},
        hc = new L("about:invalid#zClosurez", ec);
    var ic = {},
        jc = function(a, b) {
            this.h = b === ic ? a : "";
            this.F = !0
        };
    jc.prototype.g = function() {
        return this.h.toString()
    };
    jc.prototype.toString = function() {
        return this.h.toString()
    };
    var kc = function(a) {
            return a instanceof jc && a.constructor === jc ? a.h : "type_error:SafeHtml"
        },
        lc = function(a) {
            return a instanceof jc ? a : new jc(Ia("object" == typeof a && a.F ? a.g() : String(a)), ic)
        },
        pc = function(a, b) {
            var c = {
                    src: a
                },
                d = {};
            a = {};
            for (var e in c) Object.prototype.hasOwnProperty.call(c, e) && (a[e] = c[e]);
            for (var f in d) Object.prototype.hasOwnProperty.call(d, f) && (a[f] = d[f]);
            if (b)
                for (var g in b)
                    if (Object.prototype.hasOwnProperty.call(b, g)) {
                        e = g.toLowerCase();
                        if (e in c) throw Error("");
                        e in d && delete a[e];
                        a[g] = b[g]
                    }
            var h;
            b = "";
            if (a)
                for (k in a)
                    if (Object.prototype.hasOwnProperty.call(a, k)) {
                        if (!mc.test(k)) throw Error("");
                        c = a[k];
                        if (null != c) {
                            g = k;
                            if (c instanceof Vb) c = Wb(c);
                            else {
                                if ("style" == g.toLowerCase()) throw Error("");
                                if (/^on/i.test(g)) throw Error("");
                                if (g.toLowerCase() in nc)
                                    if (c instanceof K) c = ac(c).toString();
                                    else if (c instanceof L) c = c instanceof L && c.constructor === L ? c.h : "type_error:SafeUrl";
                                else if ("string" === typeof c) c instanceof L || (c = "object" == typeof c && c.F ? c.g() : String(c), gc.test(c) ? c = new L(c, ec) : (c = String(c), c = c.replace(/(%0A|%0D)/g, ""), c = c.match(fc) ? new L(c, ec) : null)), c = (c || hc).g();
                                else throw Error("");
                            }
                            c.F && (c = c.g());
                            g = g + '="' + Ia(String(c)) + '"';
                            b += " " + g
                        }
                    }
            var k = "<script" + b;
            null == h ? h = [] : Array.isArray(h) || (h = [h]);
            !0 === Yb.script ? k += ">" : (h = oc(h), k += ">" + kc(h).toString() + "\x3c/script>");
            return new jc(k, ic)
        },
        rc = function(a) {
            var b = lc(qc),
                c = [],
                d = function(e) {
                    Array.isArray(e) ? e.forEach(d) : (e = lc(e), c.push(kc(e).toString()))
                };
            a.forEach(d);
            return new jc(c.join(kc(b).toString()), ic)
        },
        oc = function(a) {
            return rc(Array.prototype.slice.call(arguments))
        },
        mc = /^[a-zA-Z0-9-]+$/,
        nc = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        qc = new jc(y.trustedTypes && y.trustedTypes.emptyHTML || "", ic);

    function sc(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };

    function tc(a, b) {
        a.write(kc(b))
    };
    var uc = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var vc = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };
    var xc = function() {
            a: {
                var a = y.document;
                if (a.querySelector && (a = a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && wc.test(a)) break a;a = ""
            }
            return a
        },
        wc = /^[\w+/_-]+[=]{0,2}$/;
    var yc = function() {
        return Ma("iPad") || Ma("Android") && !Ma("Mobile") || Ma("Silk")
    };
    var zc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Ac = function(a) {
            return a ? decodeURI(a) : a
        },
        Bc = /#|$/,
        Cc = function(a, b) {
            var c = a.search(Bc);
            a: {
                var d = 0;
                for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                    var f = a.charCodeAt(d - 1);
                    if (38 == f || 63 == f)
                        if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                    d += e + 1
                }
                d = -1
            }
            if (0 > d) return null;
            e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        };
    var Dc = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        Ta(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        Ec = function(a) {
            var b = void 0 === b ? !1 : b;
            var c = void 0 === c ? y : c;
            for (var d = 0; c && 40 > d++ && (!b && !Dc(c) || !a(c));) a: {
                try {
                    var e = c.parent;
                    if (e && e != c) {
                        c = e;
                        break a
                    }
                } catch (f) {}
                c = null
            }
        },
        Fc = function(a) {
            var b = a;
            Ec(function(c) {
                b = c;
                return !1
            });
            return b
        },
        Jc = function(a, b) {
            if (!Gc() && !Hc()) {
                var c = Math.random();
                if (c < b) return c = Ic(), a[Math.floor(c * a.length)]
            }
            return null
        },
        Ic = function() {
            if (!n.globalThis.crypto) return Math.random();
            try {
                var a = new Uint32Array(1);
                n.globalThis.crypto.getRandomValues(a);
                return a[0] / 65536 / 65536
            } catch (b) {
                return Math.random()
            }
        },
        Kc = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        },
        Lc = function(a) {
            var b = a.length;
            if (0 == b) return 0;
            for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
            return 0 < c ? c : 4294967296 + c
        },
        Hc = uc(function() {
            return Array.prototype.some.call(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Mc, void 0) || 1E-4 > Math.random()
        }),
        Gc = uc(function() {
            return Mc("MSIE")
        }),
        Mc = function(a) {
            return -1 != La().indexOf(a)
        },
        Nc = /^(-?[0-9.]{1,30})$/;

    function Oc(a) {
        if (!Nc.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }
    var Pc = uc(function() {
            return !yc() && (Ma("iPod") || Ma("iPhone") || Ma("Android") || Ma("IEMobile")) ? 2 : yc() ? 1 : 0
        }),
        Qc = function(a, b) {
            a = void 0 === a ? "" : a;
            b = void 0 === b ? window : b;
            return (b = Ac(b.location.href.match(zc)[3] || null)) ? Lc(b + a) : null
        };

    function Rc(a, b) {
        if (a.length && b.head) {
            a = u(a);
            for (var c = a.next(); !c.done; c = a.next())
                if ((c = c.value) && b.head) {
                    var d = Sc("META");
                    b.head.appendChild(d);
                    d.httpEquiv = "origin-trial";
                    d.content = c
                }
        }
    }
    var Tc = function(a) {
            if ("number" !== typeof a.goog_pvsid) try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Math.floor(Math.random() * Math.pow(2, 52)),
                    configurable: !1
                })
            } catch (b) {}
            return Number(a.goog_pvsid) || -1
        },
        Sc = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function Uc(a) {
        var b = sa.apply(1, arguments);
        if (0 === b.length) return new K(a[0], Zb);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return new K(c.join(""), Zb)
    };
    var Vc = {
        Ga: 0,
        Fa: 1,
        Ca: 2,
        xa: 3,
        Da: 4,
        ya: 5,
        Ea: 6,
        Aa: 7,
        Ba: 8,
        wa: 9,
        za: 10
    };
    var Wc = {
        Ia: 0,
        Ja: 1,
        Ha: 2
    };
    var Xc = "a".charCodeAt(),
        Yc = Xb(Vc),
        Zc = Xb(Wc);
    var $c = function(a) {
            if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
            this.h = a;
            this.g = 0
        },
        cd = function(a) {
            var b = M(a, 16);
            return !0 === !!M(a, 1) ? (a = ad(a), a.forEach(function(c) {
                if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
            }), a) : bd(a, b)
        },
        ad = function(a) {
            for (var b = M(a, 12), c = []; b--;) {
                var d = !0 === !!M(a, 1),
                    e = M(a, 16);
                if (d)
                    for (d = M(a, 16); e <= d; e++) c.push(e);
                else c.push(e)
            }
            c.sort(function(f, g) {
                return f - g
            });
            return c
        },
        bd = function(a, b, c) {
            for (var d = [], e = 0; e < b; e++)
                if (M(a, 1)) {
                    var f = e + 1;
                    if (c && -1 === c.indexOf(f)) throw Error("ID: " + f + " is outside of allowed values!");
                    d.push(f)
                }
            return d
        },
        M = function(a, b) {
            if (a.g + b > a.h.length) throw Error("Requested length " + b + " is past end of string.");
            var c = a.h.substring(a.g, a.g + b);
            a.g += b;
            return parseInt(c, 2)
        };
    var ed = function(a, b) {
            try {
                var c = $a(a.split(".")[0]).map(function(e) {
                        return (m = e.toString(2), q(m, "padStart")).call(m, 8, "0")
                    }).join(""),
                    d = new $c(c);
                c = {};
                c.tcString = a;
                c.gdprApplies = !0;
                d.g += 78;
                c.cmpId = M(d, 12);
                c.cmpVersion = M(d, 12);
                d.g += 30;
                c.tcfPolicyVersion = M(d, 6);
                c.isServiceSpecific = !!M(d, 1);
                c.useNonStandardStacks = !!M(d, 1);
                c.specialFeatureOptins = dd(bd(d, 12, Zc), Zc);
                c.purpose = {
                    consents: dd(bd(d, 24, Yc), Yc),
                    legitimateInterests: dd(bd(d, 24, Yc), Yc)
                };
                c.purposeOneTreatment = !!M(d, 1);
                c.publisherCC = String.fromCharCode(Xc + M(d, 6)) + String.fromCharCode(Xc + M(d, 6));
                c.vendor = {
                    consents: dd(cd(d), b),
                    legitimateInterests: dd(cd(d), b)
                };
                return c
            } catch (e) {
                return null
            }
        },
        dd = function(a, b) {
            var c = {};
            if (Array.isArray(b) && 0 !== b.length) {
                b = u(b);
                for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = -1 !== a.indexOf(d)
            } else
                for (a = u(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
            delete c[0];
            return c
        };

    function fd(a) {
        return JSON.stringify([a.map(function(b) {
            var c = {};
            return [(c[b.la] = b.message.toJSON(), c)]
        })])
    };
    var gd = function(a, b) {
        if (n.globalThis.fetch) n.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(function() {});
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };

    function hd(a) {
        a.ka.apply(a, v(sa.apply(1, arguments).map(function(b) {
            return {
                la: 2,
                message: b
            }
        })))
    }

    function id(a) {
        a.ka.apply(a, v(sa.apply(1, arguments).map(function(b) {
            return {
                la: 4,
                message: b
            }
        })))
    };
    var jd = function(a, b, c, d) {
            this.m = a;
            this.l = b;
            this.s = c;
            this.i = d;
            this.h = [];
            this.g = null
        },
        kd = function(a) {
            var b = fd(a.h);
            a.l(a.m + "?e=1", b);
            a.h = [];
            a.g = null
        };
    jd.prototype.ka = function() {
        var a = this;
        this.h.push.apply(this.h, v(sa.apply(0, arguments)));
        this.h.length >= this.i ? (null !== this.g && clearTimeout(this.g), this.g = setTimeout(function() {
            kd(a)
        }, 0)) : null === this.g && (this.g = setTimeout(function() {
            kd(a)
        }, this.s))
    };
    var ld = function(a, b) {
        jd.call(this, "https://pagead2.googlesyndication.com/pagead/ping", gd, void 0 === a ? 1E3 : a, void 0 === b ? 100 : b)
    };
    x(ld, jd);
    var md = function(a) {
            this.g = a;
            this.defaultValue = !1
        },
        nd = function(a) {
            this.g = a;
            this.defaultValue = 0
        },
        od = function(a, b) {
            b = void 0 === b ? [] : b;
            this.g = a;
            this.defaultValue = b
        };
    var pd = new md(456267131),
        qd = new md(427549339),
        rd = new nd(428094087),
        sd = new md(449296995),
        td = new nd(24),
        ud = new od(1934, ["AzoawhTRDevLR66Y6MROu167EDncFPBvcKOaQispTo9ouEt5LvcBjnRFqiAByRT+2cDHG1Yj4dXwpLeIhc98/gIAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A6+nc62kbJgC46ypOwRsNW6RkDn2x7tgRh0wp7jb3DtFF7oEhu1hhm4rdZHZ6zXvnKZLlYcBlQUImC4d3kKihAcAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A/9La288e7MDEU2ifusFnMg1C2Ij6uoa/Z/ylwJIXSsWfK37oESIPbxbt4IU86OGqDEPnNVruUiMjfKo65H/CQwAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="]),
        vd = new md(203),
        wd = new md(1928),
        xd = new md(1941),
        yd = new md(370946349),
        zd = new md(392736476),
        Ad = new nd(406149835),
        Bd = new od(1932),
        Cd = new nd(432059203),
        Dd = new nd(1935);
    var Ed = function(a) {
        this.key = a;
        this.defaultValue = !1;
        this.valueType = "boolean"
    };
    var Fd = function() {
            this.g = {}
        },
        Id = function(a) {
            Gd || (Gd = new Hd);
            var b = Gd.g[a.key];
            if ("proto" === a.valueType) {
                try {
                    var c = JSON.parse(b);
                    if (Array.isArray(c)) return c
                } catch (d) {}
                return a.defaultValue
            }
            return typeof b === typeof a.defaultValue ? b : a.defaultValue
        };
    var Jd = function(a) {
        I.call(this, a)
    };
    x(Jd, I);
    var Kd = function(a) {
        I.call(this, a)
    };
    x(Kd, I);
    var Ld = function(a) {
        I.call(this, a)
    };
    x(Ld, I);
    var Md = [11, 8, 12, 13, 15, 17, 19, 18, 20, 21, 22, 24, 25];
    var Nd = function() {
        this.i = this.i;
        this.l = this.l
    };
    Nd.prototype.i = !1;
    Nd.prototype.S = function() {
        if (this.l)
            for (; this.l.length;) this.l.shift()()
    };
    var Od = function() {};
    var Qd = function(a) {
        I.call(this, a, -1, Pd)
    };
    x(Qd, I);
    var Rd = function(a) {
        I.call(this, a)
    };
    x(Rd, I);
    var Sd = function(a) {
        I.call(this, a)
    };
    x(Sd, I);
    var Pd = [7];
    var Td = function(a) {
        this.g = a || {
            cookie: ""
        }
    };
    Td.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Na;
            d = c.Oa || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.sa
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    Td.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Aa(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    Td.prototype.isEmpty = function() {
        return !this.g.cookie
    };
    Td.prototype.clear = function() {
        for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Aa(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) c = b[a], this.get(c), this.set(c, "", {
            sa: 0,
            path: void 0,
            domain: void 0
        })
    };
    var Ud = new Ed("45368529"),
        Vd = new Ed("45369554");
    var Hd = function() {
            this.g = {};
            var a = y.__fcexpdef || "";
            try {
                var b = JSON.parse(a)[0];
                a = "";
                for (var c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
                this.g = JSON.parse(a)
            } catch (d) {}
        },
        Gd;
    x(Hd, Fd);

    function Wd(a) {
        return (a = Xd(a)) ? G(a, Rd, 4) : null
    }

    function Xd(a) {
        if (a = (new Td(a)).get("FCCDCF", ""))
            if (Id(Ud))
                if (q(a, "startsWith").call(a, "%")) try {
                    var b = decodeURIComponent(a)
                } catch (f) {
                    Yd(1), b = null
                } else b = a;
                else b = a;
        else b = null;
        try {
            if (b)
                if (null == b || "" == b) var c = new Qd;
                else {
                    var d = JSON.parse(b);
                    if (!Array.isArray(d)) throw c = typeof d, Error("Expected to deserialize an Array but got " + ("object" != c ? c : d ? Array.isArray(d) ? "array" : c : "null") + ": " + d);
                    xb = d;
                    var e = new Qd(d);
                    xb = null;
                    c = e
                }
            else c = null;
            return c
        } catch (f) {
            return Yd(2), null
        }
    }

    function Yd(a) {
        new Od;
        var b = new Kd;
        a = C(b, 7, a);
        b = new Jd;
        a = Ib(b, 1, a);
        b = new Ld;
        Jb(b, 22, Md, a);
        Id(Vd)
    };
    Xb(Vc).map(function(a) {
        return Number(a)
    });
    Xb(Wc).map(function(a) {
        return Number(a)
    });
    var Zd = function(a) {
            this.g = a;
            this.h = null
        },
        ae = function(a) {
            a.__tcfapiPostMessageReady || $d(new Zd(a))
        },
        $d = function(a) {
            a.h = function(b) {
                var c = "string" == typeof b.data;
                try {
                    var d = c ? JSON.parse(b.data) : b.data
                } catch (f) {
                    return
                }
                var e = d.__tcfapiCall;
                !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.g.__tcfapi(e.command, e.version, function(f, g) {
                    var h = {};
                    h.__tcfapiReturn = "removeEventListener" === e.command ? {
                        success: f,
                        callId: e.callId
                    } : {
                        returnValue: f,
                        success: g,
                        callId: e.callId
                    };
                    f = c ? JSON.stringify(h) : h;
                    b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f, b.origin);
                    return f
                }, e.parameter)
            };
            a.g.addEventListener("message", a.h);
            a.g.__tcfapiPostMessageReady = !0
        };
    var be = function(a, b) {
        var c = a.document,
            d = function() {
                if (!a.frames[b])
                    if (c.body) {
                        var e = Sc("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    var ce = function(a) {
            this.g = a;
            this.h = a.document;
            this.m = (a = (a = Xd(this.h)) ? G(a, Sd, 5) || null : null) ? B(a, 2) : null;
            this.i = (a = Wd(this.h)) && null != B(a, 1) ? B(a, 1) : null;
            this.l = (a = Wd(this.h)) && null != B(a, 2) ? B(a, 2) : null
        },
        fe = function(a) {
            a.__uspapi || a.frames.__uspapiLocator || (a = new ce(a), de(a), ee(a))
        },
        de = function(a) {
            !a.m || a.g.__uspapi || a.g.frames.__uspapiLocator || (a.g.__uspapiManager = "fc", be(a.g, "__uspapiLocator"), za("__uspapi", function() {
                return a.D.apply(a, v(sa.apply(0, arguments)))
            }))
        };
    ce.prototype.D = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.m
        }, !0)
    };
    var ee = function(a) {
        !a.i || a.g.__tcfapi || a.g.frames.__tcfapiLocator || (a.g.__tcfapiManager = "fc", be(a.g, "__tcfapiLocator"), a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || [], za("__tcfapi", function() {
            return a.s.apply(a, v(sa.apply(0, arguments)))
        }), ae(a.g))
    };
    ce.prototype.s = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("function" === typeof c)
            if (b && 2 !== b) c(null, !1);
            else switch (b = this.g.__tcfapiEventListeners, a) {
                case "getTCData":
                    !d || Array.isArray(d) && d.every(function(e) {
                        return "number" === typeof e
                    }) ? c(ge(this, d, null), !0) : c(null, !1);
                    break;
                case "ping":
                    c({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.0",
                        cmpVersion: 1,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    a = b.push(c);
                    c(ge(this, null, a - 1), !0);
                    break;
                case "removeEventListener":
                    b[d] ? (b[d] = null, c(!0)) : c(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    c(null, !1)
            }
    };
    var ge = function(a, b, c) {
        if (!a.i) return null;
        b = ed(a.i, b);
        b.addtlConsent = null != a.l ? a.l : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    };
    var he = void 0;

    function je() {
        var a = !N(ke).g,
            b = he;
        he = void 0;
        if (!a) {
            if (b) throw Error(b());
            throw Error(String(a));
        }
    };
    var le = function(a) {
        return "string" === typeof a
    };
    var ne = function(a) {
        I.call(this, a, -1, me)
    };
    x(ne, I);
    var oe = function(a, b) {
            return Ib(a, 1, b)
        },
        pe = function(a, b) {
            return Kb(a, 2, b)
        },
        qe = function(a, b) {
            return Db(a, 4, b)
        },
        re = function(a, b) {
            return Kb(a, 5, b)
        },
        se = function(a, b) {
            return F(a, 6, b, 0)
        },
        te = function(a) {
            I.call(this, a)
        };
    x(te, I);
    te.prototype.B = function() {
        return D(this, 1, 0)
    };
    var ue = function(a, b) {
            return F(a, 1, b, 0)
        },
        ve = function(a, b) {
            return F(a, 2, b, 0)
        },
        we = function(a) {
            I.call(this, a)
        };
    x(we, I);
    var me = [2, 4, 5],
        xe = [1, 2];
    var ze = function(a) {
        I.call(this, a, -1, ye)
    };
    x(ze, I);
    var Be = function(a) {
        I.call(this, a, -1, Ae)
    };
    x(Be, I);
    var ye = [2, 3],
        Ae = [5],
        Ce = [1, 2, 3, 4];
    var De = function(a) {
        I.call(this, a)
    };
    x(De, I);
    De.prototype.getTagSessionCorrelator = function() {
        return D(this, 2, 0)
    };
    var Fe = function(a) {
            var b = new De;
            return Jb(b, 4, Ee, a)
        },
        Ee = [4, 5, 7];
    var He = function(a) {
        I.call(this, a, -1, Ge)
    };
    x(He, I);
    var Ge = [3];
    var Je = function(a) {
        I.call(this, a, -1, Ie)
    };
    x(Je, I);
    var Ie = [4];
    var Le = function(a) {
        I.call(this, a, -1, Ke)
    };
    x(Le, I);
    Le.prototype.getTagSessionCorrelator = function() {
        return D(this, 1, 0)
    };
    var Ke = [2];
    var Me = function(a) {
        I.call(this, a)
    };
    x(Me, I);
    var Ne = [4];
    var Oe = function(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var Pe = null,
        Qe = function() {
            if (null === Pe) {
                Pe = "";
                try {
                    var a = "";
                    try {
                        a = y.top.location.hash
                    } catch (c) {
                        a = y.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        Pe = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return Pe
        };
    var Se = function(a) {
        I.call(this, a, -1, Re)
    };
    x(Se, I);
    var Re = [2, 8],
        Te = [3, 4, 5],
        Ue = [6, 7];
    var Ve;
    Ve = {
        Ka: 0,
        ma: 3,
        na: 4,
        oa: 5
    };
    var We = Ve.ma,
        O = Ve.na,
        Xe = Ve.oa,
        Ye = function(a) {
            return null != a ? !a : a
        },
        Ze = function(a, b) {
            for (var c = !1, d = 0; d < a.length; d++) {
                var e = a[d]();
                if (e === b) return e;
                null == e && (c = !0)
            }
            if (!c) return !b
        },
        af = function(a, b) {
            var c = H(a, Se, 2);
            if (!c.length) return $e(a, b);
            a = D(a, 1, 0);
            if (1 === a) return Ye(af(c[0], b));
            c = Pa(c, function(d) {
                return function() {
                    return af(d, b)
                }
            });
            switch (a) {
                case 2:
                    return Ze(c, !1);
                case 3:
                    return Ze(c, !0)
            }
        },
        $e = function(a, b) {
            var c = Eb(a, Te);
            a: {
                switch (c) {
                    case We:
                        var d = Mb(a, 3, Te);
                        break a;
                    case O:
                        d = Mb(a, 4, Te);
                        break a;
                    case Xe:
                        d = Mb(a, 5, Te);
                        break a
                }
                d = void 0
            }
            if (d && (b = (b = b[c]) && b[d])) {
                try {
                    var e = b.apply(null, v(Ab(a, 8)))
                } catch (f) {
                    return
                }
                b = D(a, 1, 0);
                if (4 === b) return !!e;
                d = null != e;
                if (5 === b) return d;
                if (12 === b) a = Lb(a, 7 === Eb(a, Ue) ? 7 : -1);
                else a: {
                    switch (c) {
                        case O:
                            a = Cb(a, 6 === Eb(a, Ue) ? 6 : -1);
                            break a;
                        case Xe:
                            a = Lb(a, 7 === Eb(a, Ue) ? 7 : -1);
                            break a
                    }
                    a = void 0
                }
                if (null != a) {
                    if (6 === b) return e === a;
                    if (9 === b) return null != e && 0 === Ka(String(e), a);
                    if (d) switch (b) {
                        case 7:
                            return e < a;
                        case 8:
                            return e > a;
                        case 12:
                            return le(a) && le(e) && (new RegExp(a)).test(e);
                        case 10:
                            return null != e && -1 === Ka(String(e), a);
                        case 11:
                            return null != e && 1 === Ka(String(e), a)
                    }
                }
            }
        },
        bf = function(a, b) {
            return !a || !(!b || !af(a, b))
        };
    var df = function(a) {
        I.call(this, a, -1, cf)
    };
    x(df, I);
    var cf = [4];
    var ef = function(a) {
        I.call(this, a)
    };
    x(ef, I);
    var gf = function(a) {
        I.call(this, a, -1, ff)
    };
    x(gf, I);
    var ff = [5],
        hf = [1, 2, 3, 6, 7];
    var jf = function(a, b, c) {
            var d = void 0 === d ? new ld(b) : d;
            this.h = a;
            this.m = c;
            this.i = d;
            this.g = [];
            this.l = 0 < this.h && Ic() < 1 / this.h
        },
        lf = function(a, b, c, d, e, f) {
            var g = ve(ue(new te, b), c);
            b = se(pe(oe(re(qe(new ne, d), e), g), a.g), f);
            b = Fe(b);
            a.l && id(a.i, kf(a, b));
            if (1 === f || 3 === f || 4 === f && !a.g.some(function(h) {
                    return h.B() === g.B() && D(h, 2, 0) === c
                })) a.g.push(g), 100 < a.g.length && a.g.shift()
        },
        mf = function(a, b, c, d) {
            if (a.m) {
                var e = new ze;
                b = Kb(e, 2, b);
                c = Kb(b, 3, c);
                d && F(c, 1, d, 0);
                d = new De;
                d = Jb(d, 7, Ee, c);
                a.l && id(a.i, kf(a, d))
            }
        },
        kf = function(a, b) {
            b = F(b, 1, Date.now(), 0);
            var c = Tc(window);
            b = F(b, 2, c, 0);
            return F(b, 6, a.h, 0)
        };
    var N = function(a) {
        var b = "N";
        if (a.N && a.hasOwnProperty(b)) return a.N;
        b = new a;
        return a.N = b
    };
    var nf = function() {
        var a = {};
        this.g = (a[We] = {}, a[O] = {}, a[Xe] = {}, a)
    };
    var of = /^true$/.test("false");
    var pf = of ,
        qf = function(a, b) {
            switch (b) {
                case 1:
                    return Mb(a, 1, hf);
                case 2:
                    return Mb(a, 2, hf);
                case 3:
                    return Mb(a, 3, hf);
                case 6:
                    return Mb(a, 6, hf);
                default:
                    return null
            }
        },
        rf = function(a, b) {
            if (!a) return null;
            switch (b) {
                case 1:
                    return Bb(a, 1);
                case 7:
                    return Lb(a, 3);
                case 2:
                    return Cb(a, 2);
                case 3:
                    return Lb(a, 3);
                case 6:
                    return Ab(a, 4);
                default:
                    return null
            }
        },
        sf = uc(function() {
            if (!pf) return {};
            try {
                var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
                if (a) return JSON.parse(a)
            } catch (b) {}
            return {}
        }),
        vf = function(a, b, c, d) {
            var e = d = void 0 === d ? 0 : d,
                f, g;
            N(P).i[e] = null != (g = null == (f = N(P).i[e]) ? void 0 : f.add(b)) ? g : (new n.Set).add(b);
            e = sf();
            if (null != e[b]) return e[b];
            b = tf(d)[b];
            if (!b) return c;
            b = new gf(b);
            b = uf(b);
            a = rf(b, a);
            return null != a ? a : c
        },
        uf = function(a) {
            var b = N(nf).g;
            if (b) {
                var c = Ra(H(a, ef, 5), function(d) {
                    return bf(G(d, Se, 1), b)
                });
                if (c) return G(c, df, 2)
            }
            return G(a, df, 4)
        },
        P = function() {
            this.h = {};
            this.l = [];
            this.i = {};
            this.g = new n.Map
        },
        wf = function(a, b, c) {
            return !!vf(1, a, void 0 === b ? !1 : b, c)
        },
        xf = function(a, b, c) {
            b = void 0 === b ? 0 : b;
            a = Number(vf(2, a, b, c));
            return isNaN(a) ? b : a
        },
        yf = function(a, b, c) {
            return vf(3, a, void 0 === b ? "" : b, c)
        },
        zf = function(a, b, c) {
            b = void 0 === b ? [] : b;
            return vf(6, a, b, c)
        },
        tf = function(a) {
            return N(P).h[a] || (N(P).h[a] = {})
        },
        Af = function(a, b) {
            var c = tf(b);
            Kc(a, function(d, e) {
                return c[e] = d
            })
        },
        Bf = function(a, b, c, d, e) {
            e = void 0 === e ? !1 : e;
            var f = [],
                g = [];
            Na(b, function(h) {
                var k = tf(h);
                Na(a, function(l) {
                    var p = Eb(l, hf),
                        r = qf(l, p);
                    if (r) {
                        var A, Fb, ie;
                        var Gb = null != (ie = null == (A = N(P).g.get(h)) ? void 0 : null == (Fb = A.get(r)) ? void 0 : Fb.slice(0)) ? ie : [];
                        a: {
                            A = new Be;
                            switch (p) {
                                case 1:
                                    Hb(A, 1, Ce, r);
                                    break;
                                case 2:
                                    Hb(A, 2, Ce, r);
                                    break;
                                case 3:
                                    Hb(A, 3, Ce, r);
                                    break;
                                case 6:
                                    Hb(A, 4, Ce, r);
                                    break;
                                default:
                                    p = void 0;
                                    break a
                            }
                            Db(A, 5, Gb);p = A
                        }
                        if (Gb = p) {
                            var Ya;
                            Gb = !(null == (Ya = N(P).i[h]) || !Ya.has(r))
                        }
                        Gb && f.push(p);
                        if (Ya = p) {
                            var ma;
                            Ya = !(null == (ma = N(P).g.get(h)) || !ma.has(r))
                        }
                        Ya && g.push(p);
                        e || (ma = N(P), ma.g.has(h) || ma.g.set(h, new n.Map), ma.g.get(h).has(r) || ma.g.get(h).set(r, []), d && ma.g.get(h).get(r).push(d));
                        k[r] = l.toJSON()
                    }
                })
            });
            (f.length || g.length) && mf(c, f, g, null != d ? d : void 0)
        },
        Cf = function(a, b) {
            var c = tf(b);
            Na(a, function(d) {
                var e = new gf(d),
                    f = Eb(e, hf);
                (e = qf(e, f)) && (c[e] || (c[e] = d))
            })
        },
        Df = function() {
            return Pa(q(Object, "keys").call(Object, N(P).h), function(a) {
                return Number(a)
            })
        },
        Ef = function(a) {
            Sa(N(P).l, a) || Af(tf(4), a)
        };
    var Q = function(a) {
            this.methodName = a
        },
        Ff = new Q(1),
        Gf = new Q(16),
        Hf = new Q(15),
        If = new Q(2),
        Jf = new Q(3),
        Kf = new Q(4),
        Lf = new Q(5),
        Mf = new Q(6),
        Nf = new Q(7),
        Of = new Q(8),
        Pf = new Q(9),
        Qf = new Q(10),
        Rf = new Q(11),
        Sf = new Q(12),
        Tf = new Q(13),
        Uf = new Q(14),
        R = function(a, b, c) {
            c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
                value: b
            })
        },
        S = function(a, b, c) {
            return b[a.methodName] || c || function() {}
        },
        Vf = function(a) {
            R(Lf, wf, a);
            R(Mf, xf, a);
            R(Nf, yf, a);
            R(Of, zf, a);
            R(Tf, Cf, a);
            R(Hf, Ef, a)
        },
        Wf = function(a) {
            R(Kf, function(b) {
                N(nf).g = b
            }, a);
            R(Pf, function(b, c) {
                var d = N(nf);
                d.g[We][b] || (d.g[We][b] = c)
            }, a);
            R(Qf, function(b, c) {
                var d = N(nf);
                d.g[O][b] || (d.g[O][b] = c)
            }, a);
            R(Rf, function(b, c) {
                var d = N(nf);
                d.g[Xe][b] || (d.g[Xe][b] = c)
            }, a);
            R(Uf, function(b) {
                for (var c = N(nf), d = u([We, O, Xe]), e = d.next(); !e.done; e = d.next()) e = e.value, q(Object, "assign").call(Object, c.g[e], b[e])
            }, a)
        },
        Xf = function(a) {
            a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
                value: !0
            })
        };
    var Yf = function() {
            this.h = function() {};
            this.g = function() {
                return []
            }
        },
        Zf = function(a, b, c) {
            a.h = function(d) {
                S(If, b, function() {
                    return []
                })(d, c)
            };
            a.g = function() {
                return S(Jf, b, function() {
                    return []
                })(c)
            }
        };

    function $f(a, b) {
        b = void 0 === b ? window.document : b;
        Rc(a, b)
    };
    var ag = function(a, b) {
            try {
                var c = a.split(".");
                a = y;
                for (var d = 0, e; null != a && d < c.length; d++) e = a, a = a[c[d]], "function" === typeof a && (a = e[c[d]]());
                var f = a;
                if (typeof f === b) return f
            } catch (g) {}
        },
        bg = function() {
            var a = {};
            this[We] = (a[8] = function(b) {
                try {
                    return null != va(b)
                } catch (c) {}
            }, a[9] = function(b) {
                try {
                    var c = va(b)
                } catch (d) {
                    return
                }
                if (b = "function" === typeof c) c = c && c.toString && c.toString(), b = "string" === typeof c && -1 != c.indexOf("[native code]");
                return b
            }, a[10] = function() {
                return window == window.top
            }, a[6] = function(b) {
                return Sa(N(Yf).g(), parseInt(b, 10))
            }, a[27] = function(b) {
                b = ag(b, "boolean");
                return void 0 !== b ? b : void 0
            }, a[60] = function(b) {
                try {
                    return !!y.document.querySelector(b)
                } catch (c) {}
            }, a[69] = function(b) {
                var c = y.document;
                c = void 0 === c ? document : c;
                var d;
                return !(null == (d = c.featurePolicy) || !(m = d.features(), q(m, "includes")).call(m, b))
            }, a[70] = function(b) {
                var c = y.document;
                c = void 0 === c ? document : c;
                var d;
                return !(null == (d = c.featurePolicy) || !(m = d.allowedFeatures(), q(m, "includes")).call(m, b))
            }, a);
            a = {};
            this[O] = (a[3] = function() {
                return Pc()
            }, a[6] = function(b) {
                b = ag(b, "number");
                return void 0 !== b ? b : void 0
            }, a[11] = function(b) {
                b = Qc(void 0 === b ? "" : b, y);
                return null == b ? void 0 : b % 1E3
            }, a);
            a = {};
            this[Xe] = (a[2] = function() {
                return window.location.href
            }, a[3] = function() {
                try {
                    return window.top.location.hash
                } catch (b) {
                    return ""
                }
            }, a[4] = function(b) {
                b = ag(b, "string");
                return void 0 !== b ? b : void 0
            }, a[10] = function() {
                try {
                    var b = y.document;
                    return b.visibilityState || b.webkitVisibilityState || b.mozVisibilityState || ""
                } catch (c) {
                    return ""
                }
            }, a[11] = function() {
                try {
                    var b, c, d, e, f;
                    return null != (f = null == (d = null == (b = va("google_tag_data")) ? void 0 : null == (c = b.uach) ? void 0 : c.fullVersionList) ? void 0 : null == (e = q(d, "find").call(d, function(g) {
                        return "Google Chrome" === g.brand
                    })) ? void 0 : e.version) ? f : ""
                } catch (g) {
                    return ""
                }
            }, a)
        };
    var cg = function() {
        var a = void 0 === a ? y : a;
        return a.ggeac || (a.ggeac = {})
    };
    var eg = function(a) {
        I.call(this, a, -1, dg)
    };
    x(eg, I);
    eg.prototype.getId = function() {
        return D(this, 1, 0)
    };
    eg.prototype.B = function() {
        return D(this, 7, 0)
    };
    var dg = [2];
    var gg = function(a) {
        I.call(this, a, -1, fg)
    };
    x(gg, I);
    gg.prototype.B = function() {
        return D(this, 5, 0)
    };
    var fg = [2];
    var ig = function(a) {
        I.call(this, a, -1, hg)
    };
    x(ig, I);
    var kg = function(a) {
        I.call(this, a, -1, jg)
    };
    x(kg, I);
    kg.prototype.B = function() {
        return D(this, 1, 0)
    };
    var lg = function(a) {
        I.call(this, a)
    };
    x(lg, I);
    var hg = [1, 4, 2, 3],
        jg = [2];
    var mg = [12, 13, 20],
        ng = function() {},
        og = function(a, b, c, d, e) {
            e = void 0 === e ? {} : e;
            var f = void 0 === e.ga ? !1 : e.ga,
                g = void 0 === e.ta ? {} : e.ta;
            e = void 0 === e.ja ? [] : e.ja;
            a.l = b;
            a.s = {};
            a.D = f;
            a.m = g;
            b = {};
            a.h = (b[c] = [], b[4] = [], b);
            a.i = {};
            (c = Qe()) && Na(c.split(",") || [], function(h) {
                (h = parseInt(h, 10)) && (a.i[h] = !0)
            });
            Na(e, function(h) {
                a.i[h] = !0
            });
            a.g = d;
            return a
        },
        sg = function(a, b, c) {
            var d = [],
                e = pg(a.l, b),
                f;
            if (f = 9 !== b) a.s[b] ? f = !0 : (a.s[b] = !0, f = !1);
            if (f) {
                var g;
                null == (g = a.g) || lf(g, b, c, d, [], 4);
                return d
            }
            if (!e.length) {
                var h;
                null == (h = a.g) || lf(h, b, c, d, [], 3);
                return d
            }
            var k = Sa(mg, b),
                l = [];
            Na(e, function(r) {
                var A = new we;
                if (r = qg(a, r, c, A)) 0 !== Eb(A, xe) && l.push(A), A = r.getId(), d.push(A), rg(a, A, k ? 4 : c), (r = H(r, gf, 2)) && (k ? Bf(r, Df(), a.g, A) : Bf(r, [c], a.g, A))
            });
            var p;
            null == (p = a.g) || lf(p, b, c, d, l, 1);
            return d
        },
        rg = function(a, b, c) {
            a.h[c] || (a.h[c] = []);
            a = a.h[c];
            Sa(a, b) || a.push(b)
        },
        tg = function(a, b) {
            a.l.push.apply(a.l, v(Oa(Pa(b, function(c) {
                return new kg(c)
            }), function(c) {
                return !Sa(mg, c.B())
            })))
        },
        qg = function(a, b, c, d) {
            var e = N(nf).g;
            if (!bf(G(b, Se, 3), e)) return null;
            var f = H(b, eg, 2),
                g = D(b, 6, 0);
            if (g) {
                Hb(d, 1, xe, g);
                f = e[O];
                switch (c) {
                    case 2:
                        var h = f[8];
                        break;
                    case 1:
                        h = f[7]
                }
                c = void 0;
                if (h) try {
                    c = h(g), F(d, 3, c, 0)
                } catch (k) {}
                return (b = ug(b, c)) ? vg(a, [b], 1) : null
            }
            if (g = D(b, 10, 0)) {
                Hb(d, 2, xe, g);
                h = null;
                switch (c) {
                    case 1:
                        h = e[O][9];
                        break;
                    case 2:
                        h = e[O][10];
                        break;
                    default:
                        return null
                }
                c = h ? h(String(g)) : void 0;
                if (void 0 === c && 1 === D(b, 11, 0)) return null;
                void 0 !== c && F(d, 3, c, 0);
                return (b = ug(b, c)) ? vg(a, [b], 1) : null
            }
            d = e ? Oa(f, function(k) {
                return bf(G(k, Se, 3), e)
            }) : f;
            if (!d.length) return null;
            c = d.length * D(b, 1, 0);
            return (b = D(b, 4, 0)) ? wg(a, b, c, d) : vg(a, d, c / 1E3)
        },
        wg = function(a, b, c, d) {
            var e = null != a.m[b] ? a.m[b] : 1E3;
            if (0 >= e) return null;
            d = vg(a, d, c / e);
            a.m[b] = d ? 0 : e - c;
            return d
        },
        vg = function(a, b, c) {
            var d = a.i,
                e = Qa(b, function(f) {
                    return !!d[f.getId()]
                });
            return e ? e : a.D ? null : Jc(b, c)
        },
        xg = function(a, b) {
            R(Ff, function(c) {
                a.i[c] = !0
            }, b);
            R(If, function(c, d) {
                return sg(a, c, d)
            }, b);
            R(Jf, function(c) {
                return (a.h[c] || []).concat(a.h[4])
            }, b);
            R(Sf, function(c) {
                return void tg(a, c)
            }, b);
            R(Gf, function(c, d) {
                return void rg(a, c, d)
            }, b)
        },
        pg = function(a, b) {
            return (a = Qa(a, function(c) {
                return c.B() == b
            })) && H(a, gg, 2) || []
        },
        ug = function(a, b) {
            var c = H(a, eg, 2),
                d = c.length,
                e = D(a, 8, 0);
            a = d * D(a, 1, 0) - 1;
            b = void 0 !== b ? b : Math.floor(1E3 * Ic());
            d = (b - e) % d;
            if (b < e || b - e - d >= a) return null;
            c = c[d];
            e = N(nf).g;
            return !c || e && !bf(G(c, Se, 3), e) ? null : c
        };
    var yg = function() {
            var a = {};
            this.h = function(b, c) {
                return null != a[b] ? a[b] : c
            };
            this.i = function(b, c) {
                return null != a[b] ? a[b] : c
            };
            this.m = function(b, c) {
                return null != a[b] ? a[b] : c
            };
            this.g = function(b, c) {
                return null != a[b] ? a[b] : c
            };
            this.l = function() {}
        },
        zg = function(a) {
            return N(yg).h(a.g, a.defaultValue)
        },
        Ag = function(a) {
            return N(yg).i(a.g, a.defaultValue)
        };
    var Bg = function() {
            this.g = function() {}
        },
        Cg = function(a) {
            N(Bg).g(a)
        };
    var Dg, Eg, Fg, Gg, Hg, Ig, Lg = function(a) {
            var b = N(Jg).g,
                c = {
                    ga: T(211),
                    ja: T(226)
                },
                d = void 0,
                e = 2;
            d = void 0 === d ? cg() : d;
            e = void 0 === e ? 0 : e;
            var f = void 0 === f ? new jf(null != (Gg = null == (Dg = G(a, lg, 5)) ? void 0 : D(Dg, 2, 0)) ? Gg : 0, null != (Hg = null == (Eg = G(a, lg, 5)) ? void 0 : D(Eg, 4, 0)) ? Hg : 0, null != (Ig = null == (Fg = G(a, lg, 5)) ? void 0 : Bb(Fg, 3)) ? Ig : !1) : f;
            d.hasOwnProperty("init-done") ? (S(Sf, d)(Pa(H(a, kg, 2), function(g) {
                return g.toJSON()
            })), S(Tf, d)(Pa(H(a, gf, 1), function(g) {
                return g.toJSON()
            }), e), b && S(Uf, d)(b), Kg(e, d)) : (xg(og(N(ng), H(a, kg, 2), e, f, c), d), Vf(d), Wf(d), Xf(d), Kg(e, d), Bf(H(a, gf, 1), [e], f, void 0, !0), pf = pf || !(!c || !c.La), Cg(N(bg)), b && Cg(b))
        },
        Kg = function(a, b) {
            var c = b = void 0 === b ? cg() : b;
            Zf(N(Yf), c, a);
            Mg(b, a);
            a = b;
            N(Bg).g = S(Uf, a);
            N(yg).l()
        },
        Mg = function(a, b) {
            var c = N(yg);
            c.h = function(d, e) {
                return S(Lf, a, function() {
                    return !1
                })(d, e, b)
            };
            c.i = function(d, e) {
                return S(Mf, a, function() {
                    return 0
                })(d, e, b)
            };
            c.m = function(d, e) {
                return S(Nf, a, function() {
                    return ""
                })(d, e, b)
            };
            c.g = function(d, e) {
                return S(Of, a, function() {
                    return []
                })(d, e, b)
            };
            c.l = function() {
                S(Hf, a)(b)
            }
        };
    var Ng = ia(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
        Og = function() {
            var a = void 0 === a ? "jserror" : a;
            var b = void 0 === b ? .01 : b;
            var c = void 0 === c ? Uc(Ng) : c;
            this.i = a;
            this.h = b;
            this.g = c
        };

    function Pg(a) {
        var b, c;
        return null != (c = (m = ["pbjs"].concat(null != (b = a._pbjsGlobals) ? b : []).map(function(d) {
            return a[d]
        }), q(m, "find")).call(m, function(d) {
            return Array.isArray(null == d ? void 0 : d.que)
        })) ? c : null
    };
    var Qg = function(a) {
        a = void 0 === a ? y : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function Rg(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = Sc("IMG", a.document);
        if (c) {
            var e = function() {
                if (c) {
                    var f = a.google_image_requests,
                        g = Array.prototype.indexOf.call(f, d, void 0);
                    0 <= g && Array.prototype.splice.call(f, g, 1)
                }
                d.removeEventListener && d.removeEventListener("load", e, !1);
                d.removeEventListener && d.removeEventListener("error", e, !1)
            };
            vc(d, "load", e);
            vc(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    }
    var Tg = function(a, b) {
            var c = void 0 === c ? !1 : c;
            var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
            Kc(a, function(e, f) {
                e && (d += "&" + f + "=" + encodeURIComponent(e))
            });
            Sg(d, c)
        },
        Sg = function(a, b) {
            var c = window;
            b = void 0 === b ? !1 : b;
            c.fetch ? c.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Rg(c, a, void 0 === b ? !1 : b)
        };
    var Ug = J("gpt/pubads_impl_"),
        Vg = J("pagead/managed/js/gpt/");
    var Wg = function(a, b) {
            b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
            2048 > b.length && b.push(a)
        },
        Xg = function(a, b) {
            var c = Qg(b);
            c && Wg({
                label: a,
                type: 9,
                value: c
            }, b)
        },
        Yg = function(a, b, c) {
            var d = !1;
            d = void 0 === d ? !1 : d;
            var e = window,
                f = "undefined" !== typeof queueMicrotask;
            return function() {
                d && f && queueMicrotask(function() {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                var g = Qg(),
                    h = 3;
                try {
                    var k = b.apply(this, arguments)
                } catch (l) {
                    h = 13;
                    if (!c) throw l;
                    c(a, l)
                } finally {
                    e.google_measure_js_timing && g && Wg(q(Object, "assign").call(Object, {}, {
                        label: a.toString(),
                        value: g,
                        duration: (Qg() || 0) - g,
                        type: h
                    }, d && f && {
                        taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                    }), e)
                }
                return k
            }
        },
        Zg = function(a, b) {
            return Yg(a, b, function(c, d) {
                var e = new Og;
                var f = void 0 === f ? e.h : f;
                var g = void 0 === g ? e.i : g;
                Math.random() > f || (d.error && d.meta && d.id || (d = new Oe(d, {
                    context: c,
                    id: g
                })), y.google_js_errors = y.google_js_errors || [], y.google_js_errors.push(d), y.error_rep_loaded || (c = y.document, f = new K(ac(e.g).toString(), Zb), e = Sc("SCRIPT", c), e.src = ac(f), sc(e), (c = c.getElementsByTagName("script")[0]) && c.parentNode && c.parentNode.insertBefore(e, c), y.error_rep_loaded = !0))
            })
        };

    function U(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }

    function $g(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }

    function ah() {
        var a = new n.Set;
        var b = void 0 === b ? window : b;
        b = b.googletag;
        b = (null == b ? 0 : b.apiReady) ? b : void 0;
        try {
            if (!b) return a;
            for (var c = b.pubads(), d = u(c.getSlots()), e = d.next(); !e.done; e = d.next()) a.add(e.value.getSlotId().getDomId())
        } catch (f) {}
        return a
    }

    function bh(a) {
        a = a.id;
        return null != a && (ah().has(a) || q(a, "startsWith").call(a, "google_ads_iframe_") || q(a, "startsWith").call(a, "aswift"))
    }

    function ch(a, b, c) {
        if (!a.sources) return !1;
        switch (dh(a)) {
            case 2:
                var d = eh(a);
                if (d) return c.some(function(f) {
                    return fh(d, f)
                });
            case 1:
                var e = gh(a);
                if (e) return b.some(function(f) {
                    return fh(e, f)
                })
        }
        return !1
    }

    function dh(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(function(b) {
            return b.previousRect && b.currentRect
        });
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function gh(a) {
        return hh(a, function(b) {
            return b.currentRect
        })
    }

    function eh(a) {
        return hh(a, function(b) {
            return b.previousRect
        })
    }

    function hh(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }
    var ih = function() {
        Nd.call(this);
        this.h = this.g = this.J = this.I = this.P = 0;
        this.ca = this.Z = Number.NEGATIVE_INFINITY;
        this.V = this.X = this.Y = this.aa = this.fa = this.s = this.ea = this.L = 0;
        this.W = !1;
        this.K = this.H = this.D = 0;
        var a = document.querySelector("[data-google-query-id]");
        this.da = a ? a.getAttribute("data-google-query-id") : null;
        this.m = null;
        this.ba = !1;
        this.U = function() {}
    };
    x(ih, Nd);
    var lh = function() {
            var a = new ih;
            if (zg(vd)) {
                var b = window;
                if (!b.google_plmetrics && window.PerformanceObserver) {
                    b.google_plmetrics = !0;
                    b = u(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]);
                    for (var c = b.next(); !c.done; c = b.next()) c = c.value, jh(a).observe({
                        type: c,
                        buffered: !0
                    });
                    kh(a)
                }
            }
        },
        jh = function(a) {
            a.m || (a.m = new PerformanceObserver(Zg(640, function(b) {
                var c = mh !== window.scrollX || nh !== window.scrollY ? [] : oh,
                    d = ph();
                b = u(b.getEntries());
                for (var e = b.next(); !e.done; e = b.next()) switch (e = e.value, e.entryType) {
                    case "layout-shift":
                        var f = a;
                        if (!e.hadRecentInput) {
                            f.P += Number(e.value);
                            Number(e.value) > f.I && (f.I = Number(e.value));
                            f.J += 1;
                            var g = ch(e, c, d);
                            g && (f.s += e.value, f.aa++);
                            if (5E3 < e.startTime - f.Z || 1E3 < e.startTime - f.ca) f.Z = e.startTime, f.g = 0, f.h = 0;
                            f.ca = e.startTime;
                            f.g += e.value;
                            g && (f.h += e.value);
                            f.g > f.L && (f.L = f.g, f.fa = f.h, f.ea = e.startTime + e.duration)
                        }
                        break;
                    case "largest-contentful-paint":
                        a.Y = Math.floor(e.renderTime || e.loadTime);
                        a.X = e.size;
                        break;
                    case "first-input":
                        a.V = Number((e.processingStart - e.startTime).toFixed(3));
                        a.W = !0;
                        break;
                    case "longtask":
                        e = Math.max(0, e.duration - 50), a.D += e, a.H = Math.max(a.H, e), a.K += 1
                }
            })));
            return a.m
        },
        kh = function(a) {
            var b = Zg(641, function() {
                    var d = document;
                    2 == (d.prerendering ? 3 : {
                        visible: 1,
                        hidden: 2,
                        prerender: 3,
                        preview: 4,
                        unloaded: 5
                    }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && qh(a)
                }),
                c = Zg(641, function() {
                    return void qh(a)
                });
            document.addEventListener("visibilitychange", b);
            document.addEventListener("unload", c);
            a.U = function() {
                document.removeEventListener("visibilitychange", b);
                document.removeEventListener("unload", c);
                jh(a).disconnect()
            }
        };
    ih.prototype.S = function() {
        Nd.prototype.S.call(this);
        this.U()
    };
    var qh = function(a) {
            if (!a.ba) {
                a.ba = !0;
                jh(a).takeRecords();
                var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
                window.LayoutShift && (b += $g("cls", a.P), b += $g("mls", a.I), b += U("nls", a.J), window.LayoutShiftAttribution && (b += $g("cas", a.s), b += U("nas", a.aa)), b += $g("wls", a.L), b += $g("tls", a.ea), window.LayoutShiftAttribution && (b += $g("was", a.fa)));
                window.LargestContentfulPaint && (b += U("lcp", a.Y), b += U("lcps", a.X));
                window.PerformanceEventTiming && a.W && (b += U("fid", a.V));
                window.PerformanceLongTaskTiming && (b += U("cbt", a.D), b += U("mbt", a.H), b += U("nlt", a.K));
                for (var c = 0, d = u(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) bh(e.value) && c++;
                b += U("nif", c);
                c = window.google_unique_id;
                b += U("ifi", "number" === typeof c ? c : 0);
                c = N(Yf).g();
                b += "&eid=" + encodeURIComponent(c.join());
                b += "&top=" + (y === y.top ? 1 : 0);
                b += a.da ? "&qqid=" + encodeURIComponent(a.da) : U("pvsid", Tc(y));
                window.googletag && (b += "&gpt=1");
                window.fetch(b, {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                });
                a.i || (a.i = !0, a.S())
            }
        },
        fh = function(a, b) {
            var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
            a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
            return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
        },
        ph = function() {
            var a = [].concat(v(document.getElementsByTagName("iframe"))).filter(bh),
                b = [].concat(v(ah())).map(function(c) {
                    return document.getElementById(c)
                }).filter(function(c) {
                    return null !== c
                });
            mh = window.scrollX;
            nh = window.scrollY;
            return oh = [].concat(v(a), v(b)).map(function(c) {
                return c.getBoundingClientRect()
            })
        },
        mh = void 0,
        nh = void 0,
        oh = [];
    var V = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        W = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };
    var sh = function(a, b, c) {
        Nd.call(this);
        var d = this;
        this.h = a;
        this.g = [];
        b && rh() && this.g.push(V);
        c && this.g.push(W);
        if (document.hasTrustToken && !zg(yd)) {
            var e = new n.Map;
            this.g.forEach(function(f) {
                e.set(f.issuerOrigin, {
                    issuerOrigin: f.issuerOrigin,
                    state: d.h ? 1 : 12,
                    hasRedemptionRecord: !1
                })
            });
            window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof n.Map ? new n.Map([].concat(v(e), v(window.goog_tt_state_map))) : e;
            window.goog_tt_promise_map && window.goog_tt_promise_map instanceof n.Map || (window.goog_tt_promise_map = new n.Map)
        }
    };
    x(sh, Nd);
    var rh = function() {
            var a = void 0 === a ? window : a;
            a = a.navigator.userAgent;
            var b = /Chrome/.test(a);
            return /Android/.test(a) && b
        },
        th = function() {
            var a = window;
            a = void 0 === a ? window : a;
            return !a.PeriodicSyncManager
        },
        uh = function() {
            var a = void 0 === a ? window.document : a;
            var b = N(yg).g(Bd.g, Bd.defaultValue);
            Rc(b, a)
        },
        vh = function(a) {
            var b = T(221),
                c = T(150);
            return b || ".google.ch" === c || "function" === typeof a.__tcfapi
        },
        X = function(a, b, c) {
            var d, e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
            e && (e.state = b, void 0 != c && (e.hasRedemptionRecord = c))
        },
        wh = function() {
            var a = V.issuerOrigin + V.redemptionPath,
                b = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        issuer: V.issuerOrigin,
                        refreshPolicy: "none"
                    }
                };
            X(V.issuerOrigin, 2);
            return window.fetch(a, b).then(function(c) {
                if (!c.ok) throw Error(c.status + ": Network response was not ok!");
                X(V.issuerOrigin, 6, !0)
            }).catch(function(c) {
                c && "NoModificationAllowedError" === c.name ? X(V.issuerOrigin, 6, !0) : X(V.issuerOrigin, 5)
            })
        },
        xh = function() {
            var a = V.issuerOrigin + V.issuancePath;
            X(V.issuerOrigin, 8);
            return window.fetch(a, {
                keepalive: !0,
                trustToken: {
                    type: "token-request"
                }
            }).then(function(b) {
                if (!b.ok) throw Error(b.status + ": Network response was not ok!");
                X(V.issuerOrigin, 10);
                return wh()
            }).catch(function(b) {
                if (b && "NoModificationAllowedError" === b.name) return X(V.issuerOrigin, 10), wh();
                X(V.issuerOrigin, 9)
            })
        },
        yh = function() {
            X(V.issuerOrigin, 13);
            return document.hasTrustToken(V.issuerOrigin).then(function(a) {
                return a ? wh() : xh()
            })
        },
        zh = function() {
            X(W.issuerOrigin, 13);
            if (window.Promise) {
                var a = document.hasTrustToken(W.issuerOrigin).then(function(e) {
                        return e
                    }).catch(function(e) {
                        return window.Promise.reject({
                            state: 19,
                            error: e
                        })
                    }),
                    b = W.issuerOrigin + W.redemptionPath,
                    c = {
                        keepalive: !0,
                        trustToken: {
                            type: "token-redemption",
                            refreshPolicy: "none"
                        }
                    };
                X(W.issuerOrigin, 16);
                a = a.then(function(e) {
                    return window.fetch(b, c).then(function(f) {
                        if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                        X(W.issuerOrigin, 18, !0)
                    }).catch(function(f) {
                        if (f && "NoModificationAllowedError" === f.name) X(W.issuerOrigin, 18, !0);
                        else {
                            if (e) return window.Promise.reject({
                                state: 17,
                                error: f
                            });
                            X(W.issuerOrigin, 17)
                        }
                    })
                }).then(function() {
                    return document.hasTrustToken(W.issuerOrigin).then(function(e) {
                        return e
                    }).catch(function(e) {
                        return window.Promise.reject({
                            state: 19,
                            error: e
                        })
                    })
                }).then(function(e) {
                    var f = W.issuerOrigin + W.getStatePath;
                    X(W.issuerOrigin, 20);
                    return window.fetch(f + "?ht=" + e, {
                        trustToken: {
                            type: "send-redemption-record",
                            issuers: [W.issuerOrigin]
                        }
                    }).then(function(g) {
                        if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                        X(W.issuerOrigin, 22);
                        return g.text().then(function(h) {
                            return JSON.parse(h)
                        })
                    }).catch(function(g) {
                        return window.Promise.reject({
                            state: 21,
                            error: g
                        })
                    })
                });
                var d = Tc(window);
                return a.then(function(e) {
                    var f = W.issuerOrigin + W.issuancePath;
                    return e && e.srqt && e.cs ? (X(W.issuerOrigin, 23), window.fetch(f + "?cs=" + e.cs + "&correlator=" + d, {
                        keepalive: !0,
                        trustToken: {
                            type: "token-request"
                        }
                    }).then(function(g) {
                        if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                        X(W.issuerOrigin, 25);
                        return e
                    }).catch(function(g) {
                        return window.Promise.reject({
                            state: 24,
                            error: g
                        })
                    })) : e
                }).then(function(e) {
                    if (e && e.srdt && e.cs) return X(W.issuerOrigin, 26), window.fetch(b + "?cs=" + e.cs + "&correlator=" + d, {
                        keepalive: !0,
                        trustToken: {
                            type: "token-redemption",
                            refreshPolicy: "refresh"
                        }
                    }).then(function(f) {
                        if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                        X(W.issuerOrigin, 28, !0)
                    }).catch(function(f) {
                        return window.Promise.reject({
                            state: 27,
                            error: f
                        })
                    })
                }).then(function() {
                    X(W.issuerOrigin, 29)
                }).catch(function(e) {
                    if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                        if ("number" === typeof e.state && e.error instanceof Error) {
                            X(W.issuerOrigin, e.state);
                            var f = Ag(Ad);
                            Math.random() <= f && Tg({
                                state: e.state,
                                err: e.error.toString()
                            }, "dtt_err")
                        } else throw Error(e);
                    else throw e;
                })
            }
        },
        Ah = function(a) {
            if (document.hasTrustToken && !zg(yd) && a.h) {
                var b = window.goog_tt_promise_map;
                if (b && b instanceof n.Map) {
                    var c = [];
                    if (a.g.some(function(e) {
                            return e.issuerOrigin === V.issuerOrigin
                        })) {
                        var d = b.get(V.issuerOrigin);
                        d || (d = yh(), b.set(V.issuerOrigin, d));
                        c.push(d)
                    }
                    a.g.some(function(e) {
                        return e.issuerOrigin === W.issuerOrigin
                    }) && (a = b.get(W.issuerOrigin), a || (a = zh(), b.set(W.issuerOrigin, a)), c.push(a));
                    if (0 < c.length && window.Promise && window.Promise.all) return window.Promise.all(c)
                }
            }
        };
    var Ch = function(a) {
        I.call(this, a, -1, Bh)
    };
    x(Ch, I);
    var Dh = function(a, b) {
            return C(a, 2, b)
        },
        Eh = function(a, b) {
            return C(a, 3, b)
        },
        Fh = function(a, b) {
            return C(a, 4, b)
        },
        Gh = function(a, b) {
            return C(a, 5, b)
        },
        Hh = function(a, b) {
            return C(a, 9, b)
        },
        Ih = function(a, b) {
            return Kb(a, 10, b)
        },
        Jh = function(a, b) {
            return C(a, 11, b)
        },
        Kh = function(a, b) {
            return C(a, 1, b)
        },
        Lh = function(a) {
            I.call(this, a)
        };
    x(Lh, I);
    Lh.prototype.getVersion = function() {
        return Lb(this, 2)
    };
    var Bh = [10, 6];
    var Mh = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Nh(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function Oh(a) {
        var b, c;
        if ("function" !== typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)) return null;
        var d = Nh(a);
        if (d.uach_promise) return d.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(Mh).then(function(e) {
            null != d.uach || (d.uach = e);
            return e
        });
        return d.uach_promise = a
    }

    function Ph(a) {
        var b;
        return Jh(Ih(Hh(Gh(Fh(Eh(Dh(Kh(new Ch, a.platform || ""), a.platformVersion || ""), a.architecture || ""), a.model || ""), a.uaFullVersion || ""), a.bitness || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new Lh;
            d = C(d, 1, c.brand);
            return C(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function Qh(a) {
        var b, c;
        return null != (c = null == (b = Oh(a)) ? void 0 : b.then(function(d) {
            return Ph(d)
        })) ? c : null
    };
    var Rh = ia(["https://www.googletagservices.com/console/host/host.js"]),
        Sh = ia(["https://www.googletagservices.com/console/panel/index.html"]),
        Th = ia(["https://www.googletagservices.com/console/overlay/index.html"]);
    Uc(Rh);
    Uc(Sh);
    Uc(Th);

    function Uh() {
        var a;
        return null != (a = y.googletag) ? a : y.googletag = {
            cmd: []
        }
    }

    function Vh(a, b) {
        var c = Uh();
        c.hasOwnProperty(a) || (c[a] = b)
    };
    var Y = {},
        Wh = (Y[23] = .001, Y[211] = !1, Y[253] = !1, Y[246] = [], Y[226] = [], Y[150] = ".google.com.ng", Y[148] = of , Y[221] = /^true$/.test(""), Y[36] = /^true$/.test("false"), Y[172] = null, Y[259] = null, Y[6] = function(a) {
            try {
                for (var b = null; b != a; b = a, a = a.parent) switch (a.location.protocol) {
                    case "https:":
                        return !0;
                    case "file:":
                        return !0;
                    case "http:":
                        return !1
                }
            } catch (c) {}
            return !0
        }(window), Y[260] = void 0, Y[251] = null, Y[252] = null, Y[258] = null, Y),
        ke = function() {
            this.g = !1
        };

    function T(a) {
        N(ke).g = !0;
        return Wh[a]
    }

    function Xh(a, b) {
        N(ke).g = !0;
        Wh[a] = b
    };
    var Zh = function() {
            return [].concat(v(q(Yh, "values").call(Yh))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        Yh = new n.Map;

    function $h(a, b) {
        var c = a.que,
            d = function() {
                var e;
                null == a || null == (e = a.requestBids) || e.before.call(b, function(f, g) {
                    return Uh().pbjs_hooks.push({
                        context: b,
                        nextFunction: f,
                        requestBidsConfig: g
                    })
                }, 0)
            };
        (null == c ? 0 : c.hasOwnProperty("push")) ? null == c || c.push(d): null == c || c.unshift(d)
    };
    var ai = new n.WeakMap,
        bi = function(a, b) {
            a = [a];
            for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
            return a.join("\v")
        };
    var ci = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))\/tag\/js\/gpt(?:_[a-z]+)*\.js/,
        di = function(a, b) {
            b = void 0 === b ? bi : b;
            var c = ya(a),
                d = function(e) {
                    e = u(e);
                    e.next();
                    e = ja(e);
                    return b(c, e)
                };
            return function() {
                var e = sa.apply(0, arguments),
                    f = this || y,
                    g = ai.get(f);
                g || (g = {}, ai.set(f, g));
                f = g;
                g = [this].concat(v(e));
                e = d ? d(g) : g;
                if (Object.prototype.hasOwnProperty.call(f, e)) f = f[e];
                else {
                    var h = u(g);
                    g = h.next().value;
                    h = ja(h);
                    g = a.apply(g, h);
                    f = f[e] = g
                }
                return f
            }
        }(function(a) {
            return (null == a ? 0 : a.src) ? ci.test(a.src) ? 0 : 1 : 2
        }, function(a, b) {
            var c;
            return a + "\v" + (null == (c = b[0]) ? void 0 : c.src)
        });

    function ei() {
        return 0 === di(T(172))
    };
    var Jg = function() {
        var a = {},
            b = {},
            c = {};
        this.g = (c[We] = (a[3] = ei, a[17] = function() {
            return (m = sa.apply(0, arguments), q(m, "includes")).call(m, String(Qc()))
        }, a[59] = function() {
            var d = sa.apply(0, arguments),
                e = q(d, "includes"),
                f = String,
                g;
            var h = void 0 === h ? window : h;
            var k;
            h = null != (k = null == (g = Ac(h.location.href.match(zc)[3] || null)) ? void 0 : g.split(".")) ? k : [];
            g = 2 > h.length ? null : "uk" === h[h.length - 1] ? 3 > h.length ? null : Lc(h.splice(h.length - 3).join(".")) : Lc(h.splice(h.length - 2).join("."));
            return e.call(d, f(g))
        }, a[21] = function() {
            return T(148)
        }, a[61] = function() {
            return T(221)
        }, a[63] = function() {
            return T(221) || ".google.ch" === T(150)
        }, a[50] = function() {
            return 1 === Math.floor((new Date).getTime() / 24 / 60 / 60 / 1E3) % 2
        }, a[54] = function() {
            return !!T(259)
        }, a), c[O] = (b[1] = function() {
            var d;
            return null != (d = Oc("{{MOD}}")) ? d : -1
        }, b[4] = function() {
            return Oc("5") || 0
        }, b), c)
    };

    function fi(a) {
        var b = new ig(T(246));
        if (!H(b, gf, 1).length && H(a, gf, 1).length) {
            var c = H(a, gf, 1);
            Kb(b, 1, c)
        }!H(b, kg, 2).length && H(a, kg, 2).length && (c = H(a, kg, 2), Kb(b, 2, c));
        !Array.isArray(B(b, 5)) && Array.isArray(B(a, 5)) && (a = G(a, lg, 5), Ib(b, 5, a));
        Lg(b)
    };
    var gi = function(a) {
        I.call(this, a)
    };
    x(gi, I);

    function hi() {
        var a = ii,
            b = Uh(),
            c, d = null != (c = b.fifWin) ? c : window,
            e = d.document;
        c = b.fifWin ? window : d;
        var f = ji(),
            g = new gi;
        je();
        q(Object, "assign").call(Object, Wh, b._vars_);
        g && (Bb(g, 3) && Xh(36, !0), Bb(g, 4) && Xh(148, !0), Bb(g, 5) && Xh(221, !0), Lb(g, 6) && Xh(150, Lb(g, 6)));
        b._vars_ = Wh;
        Vh("_loaded_", !0);
        var h = ki(f, g);
        Vh("getVersion", function() {
            return String(h.qa || h.ha)
        });
        Vh("cmd", []);
        var k;
        f = null != (k = li(e)) ? k : mi(e);
        ni(e, Array.isArray(B(g, 1)) ? G(g, ig, 1) : new ig(a), d, f);
        oi(d);
        try {
            lh()
        } catch (Fb) {}
        Xg("1", d);
        a = pi(h, f);
        if (!T(259)) {
            d = "gpt-impl-" + Math.random();
            try {
                tc(e, pc(a, {
                    id: d,
                    nonce: xc()
                }))
            } catch (Fb) {}
            e.getElementById(d) && (b._loadStarted_ = !0)
        }
        if (!b._loadStarted_) {
            var l = Sc("SCRIPT");
            l.src = ac(a);
            sc(l);
            l.async = !0;
            e = b.fifWin ? c.document : e;
            a = e.body;
            d = e.documentElement;
            var p, r, A = null != (r = null != (p = e.head) ? p : a) ? r : d;
            "complete" !== c.document.readyState && b.fifWin ? vc(c, "load", function() {
                return void A.appendChild(l)
            }) : A.appendChild(l);
            b._loadStarted_ = !0
        }(b = c === c.top) && fe(c);
        (zg(sd) ? Fc(c) === (Dc(c.top) ? c.top : null) : b) && qi(c.top, f)
    }

    function ji() {
        var a = Number("2022080201");
        1 > a || Math.floor(a) !== a ? (Tg({
            v: "2022080201"
        }, "gpt_inv_ver"), a = "1") : a = "2022080201";
        return {
            ha: a,
            O: "",
            ua: new ld,
            va: .01 > Ic(),
            pa: 100
        }
    }

    function ki(a, b) {
        var c = J("2022080201");
        var d = a.O;
        /m\d+/.test(d) ? d = Number(d.substring(1)) : "dev" === d ? d = 1 : (d && Tg({
            mjsv: d
        }, "gpt_inv_ver"), d = void 0);
        return q(Object, "assign").call(Object, {}, a, {
            ia: c,
            qa: d,
            ra: J(""),
            Ma: Tc(window),
            Pa: b
        })
    }

    function li(a) {
        return (a = a.currentScript) ? a : null
    }

    function mi(a) {
        var b;
        a = u(null != (b = a.scripts) ? b : []);
        for (b = a.next(); !b.done; b = a.next())
            if (b = b.value, q(b.src, "includes").call(b.src, "/tag/js/gpt")) return b;
        return null
    }

    function pi(a, b) {
        b = ri(b) ? J("https://pagead2.googlesyndication.com/") : J("https://securepubads.g.doubleclick.net/");
        a = a.O ? dc([b, Vg, a.ra, J("/pubads_impl.js")]) : zg(qd) ? dc([b, Vg, J("m"), a.ia, J("/pubads_impl.js")]) : dc([b, Ug, a.ia, J(".js")]);
        b = {};
        var c = Ag(td),
            d = Ag(rd);
        c && (b.cb = c);
        d && (b.mcb = d);
        return q(Object, "keys").call(Object, b).length ? cc(a, b) : a
    }

    function ni(a, b, c, d) {
        Xh(172, d);
        Xh(259, si(a));
        fi(b);
        N(Yf).h(12);
        N(Yf).h(5);
        uh();
        if (!vh(c)) {
            a = zg(th() ? xd : wd);
            b = zg(zd);
            a = new sh(!0, a, b);
            var e = Date.now(),
                f;
            a = null == (f = Ah(a)) ? void 0 : f.then(function() {
                var g = Ag(Cd);
                Math.random() <= g && Tg({
                    act: String(Date.now() - e)
                }, "gpt_tt")
            });
            0 < Ag(Dd) && Xh(258, a)
        }(f = Qh(c)) && f.then(function(g) {
            a: {
                lb = !0;
                try {
                    var h = JSON.stringify(g.toJSON(), Ob);
                    break a
                } finally {
                    lb = !1
                }
                h = void 0
            }
            return void Xh(251, h)
        });
        $f(N(yg).g(ud.g, ud.defaultValue), c.document)
    }

    function si(a) {
        var b = li(a);
        return "complete" === a.readyState || "loaded" === a.readyState || !(null == b || !b.async)
    }

    function oi(a) {
        var b;
        if (zg(pd)) {
            var c = Pg(a);
            c && (null != (b = Uh()).pbjs_hooks || (b.pbjs_hooks = []), $h(c, a))
        }
    }
    var ti = function() {
        this.g = []
    };
    ti.prototype.addListener = function(a) {
        void 0 !== this.h || this.error ? a(this.h, this.error) : this.g.push(a)
    };
    var ui = function(a, b, c) {
        a.h = b;
        a.error = c;
        for (var d = u(a.g), e = d.next(); !e.done; e = d.next()) e = e.value, e(b, c);
        a.g.length = 0
    };

    function qi(a, b) {
        var c = new ti;
        Xh(260, function(e) {
            return void c.addListener(e)
        });
        if (b = vi(a, b)) {
            var d = new n.globalThis.XMLHttpRequest;
            d.open("GET", b.toString(), !0);
            d.withCredentials = !1;
            d.onload = function() {
                300 > d.status ? (Xg("13", a), ui(c, 204 === d.status ? "" : d.responseText)) : ui(c, void 0, new n.globalThis.Error("resp:" + d.status))
            };
            d.onerror = function() {
                return void ui(c, void 0, new n.globalThis.Error("s:" + d.status + " rs:" + d.readyState))
            };
            d.send()
        } else ui(c, void 0, new n.globalThis.Error("no provided or inferred data"))
    }

    function vi(a, b) {
        if (!b) return null;
        a = a.location.host;
        var c = Cc(b.src, "domain"),
            d = Cc(b.src, "network-code");
        if (!a && !c && !d) return null;
        b = ri(b) ? J("https://pagead2.googlesyndication.com") : J("https://securepubads.g.doubleclick.net");
        return cc(dc([b, J("/pagead/ppub_config")]), {
            ippd: a,
            pppd: c,
            pppnc: d
        })
    }

    function ri(a) {
        return !(null == a || !a.src) && "pagead2.googlesyndication.com" === Ac(a.src.match(zc)[3] || null)
    };
    var ii;
    a: {
        try {
            if (Array.isArray(E)) {
                ii = E;
                break a
            }
        } catch (a) {}
        ii = []
    }
    try {
        hi()
    } catch (a) {
        try {
            var wi = ji();
            if (wi.va) {
                var xi, Z = a.error && a.meta && a.id ? a.error : a,
                    yi, zi = new Me,
                    Ai = new Le;
                try {
                    var Bi = Tc(window);
                    F(Ai, 1, Bi, 0)
                } catch (b) {}
                try {
                    var Ci = N(Yf).g();
                    Db(Ai, 2, Ci)
                } catch (b) {}
                try {
                    F(Ai, 3, window.document.URL, "")
                } catch (b) {}
                yi = Ib(zi, 2, Ai);
                var Di, Ei = new Je;
                Di = F(Ei, 1, 420, 0);
                try {
                    var Fi = le(null == Z ? void 0 : Z.name) ? Z.name : "Unknown error";
                    F(Di, 2, Fi, "")
                } catch (b) {}
                try {
                    var Gi = le(null == Z ? void 0 : Z.message) ? Z.message : "Caught " + Z;
                    F(Di, 3, Gi, "")
                } catch (b) {}
                try {
                    var Hi = le(null == Z ? void 0 : Z.stack) ? Z.stack : Error().stack;
                    Hi && Db(Di, 4, Hi.split(/\n\s*/))
                } catch (b) {}
                xi = Ib(yi, 1, Di);
                var Ii = new He;
                try {
                    F(Ii, 1, wi.O || wi.ha, "")
                } catch (b) {}
                try {
                    var Ji = Zh();
                    F(Ii, 2, Ji, 0)
                } catch (b) {}
                try {
                    var Ki = [].concat(v(q(Yh, "keys").call(Yh)));
                    Db(Ii, 3, Ki)
                } catch (b) {}
                Jb(xi, 4, Ne, Ii);
                F(xi, 5, wi.pa, 0);
                hd(wi.ua, xi)
            }
        } catch (b) {}
    };
}).call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, [
    [
        [null, 7, null, [null, 0.1]],
        [null, 444965520, null, [null, 0.01]],
        [456775434, null, null, [1]],
        [null, 448338836, null, [null, 0.01]],
        [432254233, null, null, [1]],
        [null, 408380992, null, [null, 0.01]],
        [null, 377289019, null, [null, 10000]],
        [null, 529, null, [null, 20]],
        [456862842, null, null, [1]],
        [456782043, null, null, [1]],
        [null, 447000223, null, [null, 0.01]],
        [360245597, null, null, [1]],
        [null, 494, null, [null, 5000],
            [
                [
                    [12, null, null, null, 4, null, "Android", ["navigator.userAgent"]],
                    [null, 5500]
                ]
            ]
        ],
        [null, 517, null, [null, 0.01]],
        [451427449, null, null, [1]],
        [null, 388529191, null, null, [
            [
                [4, null, 59, null, null, null, null, ["4276767238"]],
                [null, 86400]
            ]
        ]],
        [null, 492, null, [null, 0.01]],
        [423059401, null, null, [1]],
        [459590661, null, null, [1]],
        [455646166, null, null, [1]],
        [null, 45374287, null, [null, 1000]],
        [null, 398776877, null, [null, 60000]],
        [444964204, null, null, [1]],
        [null, 374201269, null, [null, 60000]],
        [null, 371364213, null, [null, 60000]],
        [null, 376149757, null, [null, 0.0025]],
        [377936516, null, null, [1]],
        [null, null, 2, [null, null, "1-0-38"]],
        [441772725, null, null, [1]],
        [null, null, null, [], null, 489],
        [392065905, null, null, null, [
            [
                [3, [
                    [4, null, 15, null, null, null, null, ["18190176,155953048"]],
                    [4, null, 15, null, null, null, null, ["49944529"]],
                    [4, null, 15, null, null, null, null, ["5441"]],
                    [4, null, 15, null, null, null, null, ["6177"]],
                    [4, null, 15, null, null, null, null, ["6782"]],
                    [4, null, 15, null, null, null, null, ["6581"]]
                ]],
                [1]
            ]
        ]],
        [null, 360245595, null, [null, 500]],
        [null, 397316938, null, [null, 1000]],
        [440148284, null, null, [1]],
        [460868644, null, null, [1]],
        [null, 425668704, null, [null, 15360]],
        [null, 1921, null, [null, 72]],
        [null, 1920, null, [null, 24]],
        [null, 426169222, null, [null, 1000]],
        [null, 1917, null, [null, 300]],
        [null, 1916, null, [null, 0.001]],
        [458532789, null, null, [1]],
        [null, null, null, [], null, 1939],
        [null, null, null, [null, null, null, ["AzoawhTRDevLR66Y6MROu167EDncFPBvcKOaQispTo9ouEt5LvcBjnRFqiAByRT+2cDHG1Yj4dXwpLeIhc98/gIAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A6+nc62kbJgC46ypOwRsNW6RkDn2x7tgRh0wp7jb3DtFF7oEhu1hhm4rdZHZ6zXvnKZLlYcBlQUImC4d3kKihAcAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A/9La288e7MDEU2ifusFnMg1C2Ij6uoa/Z/ylwJIXSsWfK37oESIPbxbt4IU86OGqDEPnNVruUiMjfKo65H/CQwAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="]], null, 1934],
        [1947, null, null, [1]],
        [null, 1972, null, []],
        [392736476, null, null, []],
        [null, null, null, [], null, 1932],
        [432938498, null, null, []]
    ],
    [
        [12, [
            [200, [
                [42531605],
                [42531606]
            ]],
            [200, [
                [42531607],
                [42531608]
            ]],
            [50, [
                [44764001],
                [44764002]
            ]],
            [20, [
                    [21065724],
                    [21065725, [
                        [203, null, null, [1]]
                    ]]
                ],
                [4, null, 9, null, null, null, null, ["LayoutShift"]]
            ],
            [10, [
                [31061690],
                [31061691, [
                    [83, null, null, [1]],
                    [84, null, null, [1]]
                ]]
            ]],
            [50, [
                [31067825],
                [31067826, [
                    [1971, null, null, [1]]
                ]]
            ]],
            [10, [
                [44769661],
                [44769662, [
                    [1973, null, null, [1]]
                ]]
            ]]
        ]],
        [20, [
            [50, [
                [31062930],
                [31062931, [
                    [380025941, null, null, [1]]
                ]]
            ], null, null, null, null, null, 101, null, 102],
            [50, [
                [31068721],
                [31068722]
            ], null, null, null, null, null, 201, null, 102]
        ]],
        [2, [
            [30, [
                [44768682],
                [44768683, [
                    [1122, null, null, [1]]
                ]],
                [44768686, [
                    [1122, null, null, [1]]
                ]]
            ], null, 51],
            [50, [
                [44770638],
                [44770639, [
                    [423059401, null, null, []]
                ]]
            ], null, null, null, null, null, 301, null, 102],
            [10, [
                [31060888]
            ]],
            [10, [
                [31060889],
                [31060890]
            ], null, null, null, null, null, null, null, 104],
            [10, [
                [31061165],
                [31061166, [
                    [null, 363650251, null, [null, 2]]
                ]],
                [31061167, [
                    [null, 363650251, null, [null, 1]]
                ]]
            ], null, null, null, null, null, 1, null, 102],
            [250, [
                    [31068359],
                    [31068360, [
                        [444587044, null, null, [1]],
                        [440148282, null, null, [1]]
                    ]],
                    [31068361, [
                        [444587044, null, null, [1]],
                        [440148283, null, null, [1]],
                        [440148282, null, null, [1]]
                    ]]
                ],
                [2, [
                    [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]],
                    [4, null, 9, null, null, null, null, ["document.browsingTopics"]]
                ]], null, null, null, null, null, null, 111
            ],
            [10, [
                [44742767],
                [44742768]
            ]],
            [10, [
                [44752585],
                [44752586, [
                    [392065905, null, null, [1]]
                ]]
            ], null, 41],
            [50, [
                    [44753506],
                    [44753507, [
                        [392065905, null, null, []]
                    ]]
                ],
                [3, [
                    [4, null, 15, null, null, null, null, ["18190176,155953048"]],
                    [4, null, 15, null, null, null, null, ["49944529"]],
                    [4, null, 15, null, null, null, null, ["5441"]],
                    [4, null, 15, null, null, null, null, ["6177"]],
                    [4, null, 15, null, null, null, null, ["6782"]],
                    [4, null, 15, null, null, null, null, ["6581"]]
                ]], 41
            ],
            [1, [
                    [44763398],
                    [44763399, [
                        [392065905, null, null, [1]]
                    ]]
                ],
                [4, null, 68], 41
            ]
        ]],
        [4, [
            [null, [
                [44714449, [
                    [null, 7, null, [null, 1]]
                ]],
                [676982961, [
                    [null, 7, null, [null, 0.4]],
                    [212, null, null, [1]]
                ]],
                [676982996, [
                    [null, 7, null, [null, 1]]
                ]]
            ]],
            [null, [
                [44767022]
            ]],
            [10, [
                    [44763381],
                    [44763382, [
                        [359351145, null, null, [1]]
                    ]]
                ],
                [4, null, 68], 40
            ]
        ]],
        [3, [
            [null, [
                [676982960],
                [676982994],
                [676982998]
            ]],
            [null, [
                [1337, [
                    [77, null, null, [1]],
                    [78, null, null, [1]],
                    [85, null, null, [1]],
                    [80, null, null, [1]],
                    [76, null, null, [1]],
                    [84, null, null, [1]],
                    [188, null, null, [1]]
                ]]
            ]],
            [10, [
                [21068766],
                [21068767, [
                    [null, 488, null, [null, 0.1]]
                ]]
            ], null, 42],
            [1000, [
                    [31060545, [
                        [null, null, 363931022, [null, null, "A/gAUAMbMh9fgIc7ltQJV7OpnGOsx50F/T5r7KHJIWEM4curJ+KNuln74lBEujYpRpJLzvJTL1s39OMeVWKYCAQAAACBeyJvcmlnaW4iOiJodHRwczovL3NlY3VyZXB1YmFkcy5nLmRvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiU3VicmVzb3VyY2VXZWJCdW5kbGVzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1RoaXJkUGFydHkiOnRydWV9"]]
                    ]]
                ],
                [2, [
                    [12, null, null, null, 4, null, "Chrome\\/((?!100|101|102)\\d{3,})", ["navigator.userAgent"]],
                    [3, [
                        [2, [
                            [2, [
                                [8, null, null, 1, null, -1],
                                [7, null, null, 1, null, 10]
                            ]],
                            [4, null, 3]
                        ]],
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 29],
                                [7, null, null, 1, null, 50]
                            ]],
                            [4, null, 3]
                        ]]
                    ]]
                ]]
            ],
            [50, [
                [31064225],
                [31064226, [
                    [432254233, null, null, [1]]
                ]]
            ]],
            [1000, [
                    [31067706]
                ],
                [3, [
                    [2, [
                        [2, [
                            [8, null, null, 1, null, -1],
                            [7, null, null, 1, null, 5]
                        ]],
                        [4, null, 3]
                    ]],
                    [2, [
                        [2, [
                            [8, null, null, 1, null, 9],
                            [7, null, null, 1, null, 20]
                        ]],
                        [4, null, 3]
                    ]],
                    [2, [
                        [2, [
                            [8, null, null, 1, null, 29],
                            [7, null, null, 1, null, 35]
                        ]],
                        [4, null, 3]
                    ]],
                    [2, [
                        [2, [
                            [8, null, null, 1, null, 39],
                            [7, null, null, 1, null, 45]
                        ]],
                        [4, null, 3]
                    ]]
                ]]
            ],
            [1000, [
                    [31067707, [
                        [437292966, null, null, [1]]
                    ]]
                ],
                [3, [
                    [2, [
                        [2, [
                            [8, null, null, 1, null, 4],
                            [7, null, null, 1, null, 10]
                        ]],
                        [4, null, 3]
                    ]],
                    [2, [
                        [2, [
                            [8, null, null, 1, null, 19],
                            [7, null, null, 1, null, 30]
                        ]],
                        [4, null, 3]
                    ]],
                    [2, [
                        [2, [
                            [8, null, null, 1, null, 34],
                            [7, null, null, 1, null, 40]
                        ]],
                        [4, null, 3]
                    ]],
                    [2, [
                        [2, [
                            [8, null, null, 1, null, 44],
                            [7, null, null, 1, null, 50]
                        ]],
                        [4, null, 3]
                    ]]
                ]]
            ],
            [null, [
                [31068028, [
                        [null, 1921, null, [null, 24]],
                        [null, 1920, null, [null, 8]]
                    ],
                    [2, [
                        [2, [
                            [8, null, null, 1, null, 39],
                            [7, null, null, 1, null, 45]
                        ]],
                        [4, null, 3]
                    ]]
                ],
                [31068029, [
                        [null, 360261971, null, [null, 3]],
                        [null, 1921, null, [null, 24]],
                        [null, 1920, null, [null, 8]]
                    ],
                    [2, [
                        [2, [
                            [8, null, null, 1, null, 44],
                            [7, null, null, 1, null, 50]
                        ]],
                        [4, null, 3]
                    ]]
                ]
            ]],
            [1, [
                [31068356],
                [31068357, [
                    [444587044, null, null, [1]],
                    [440148282, null, null, [1]]
                ]],
                [31068358, [
                    [444587044, null, null, [1]],
                    [440148283, null, null, [1]],
                    [440148282, null, null, [1]]
                ]]
            ], null, 55],
            [10, [
                [31068528],
                [31068529]
            ]]
        ]],
        [5, [
            [50, [
                    [21062785, null, [4, null, 8, null, null, null, null, ["_gmptnl"]]],
                    [21062786, [
                            [23, null, null, [1]]
                        ],
                        [4, null, 8, null, null, null, null, ["_gmptnl"]]
                    ]
                ],
                [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 43
            ],
            [900, [
                    [21062812, [
                            [23, null, null, [1]]
                        ],
                        [4, null, 8, null, null, null, null, ["_gmptnl"]]
                    ]
                ],
                [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 43
            ],
            [50, [
                    [21063916, null, [4, null, 8, null, null, null, null, ["webkit.messageHandlers._gmptnl"]]],
                    [21063917, [
                            [23, null, null, [1]]
                        ],
                        [4, null, 8, null, null, null, null, ["webkit.messageHandlers._gmptnl"]]
                    ]
                ],
                [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 44
            ],
            [900, [
                    [21064113, [
                            [23, null, null, [1]]
                        ],
                        [4, null, 8, null, null, null, null, ["webkit.messageHandlers._gmptnl"]]
                    ]
                ],
                [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 44
            ],
            [10, [
                [31060437],
                [31060438, [
                    [200, null, null, [1]]
                ]],
                [31060439, [
                    [220, null, null, [1]]
                ]]
            ], null, 24],
            [50, [
                    [31061483],
                    [31067420],
                    [31067421, [
                        [360245597, null, null, []]
                    ]],
                    [31067604],
                    [31067690, [
                        [null, 434620574, null, [null, 300]]
                    ]],
                    [31067691, [
                        [null, 434620574, null, [null, 180]]
                    ]],
                    [31068454],
                    [44765593]
                ],
                [3, [
                    [4, null, 8, null, null, null, null, ["gmaSdk.getQueryInfo"]],
                    [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],
                    [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaSig.postMessage"]]
                ]], 15
            ],
            [10, [
                [31064681],
                [31064682, [
                    [423820325, null, null, [1]]
                ]]
            ]],
            [10, [
                [31064687],
                [31064690, [
                    [null, 425668704, null, [null, 61440]]
                ]]
            ]],
            [1, [
                [31067454],
                [31067455, [
                    [null, 432023148, null, [null, 1]]
                ]]
            ]],
            [100, [
                [31068457],
                [31068458, [
                    [453275889, null, null, [1]]
                ]]
            ]],
            [10, [
                [31068498],
                [31068499, [
                    [441772725, null, null, []]
                ]],
                [31068500, [
                    [427203966, null, null, [1]]
                ]],
                [31068501, [
                    [442109935, null, null, [1]]
                ]]
            ]],
            [100, [
                [31068590],
                [31068591, [
                    [460998422, null, null, [1]]
                ]]
            ]],
            [100, [
                [31068630],
                [31068631, [
                    [449296995, null, null, [1]]
                ]]
            ]],
            [100, [
                [31068741],
                [31068742, [
                    [461886408, null, null, [1]]
                ]]
            ]],
            [10, [
                [31068743],
                [31068744, [
                    [453775731, null, null, [1]]
                ]]
            ]],
            [100, [
                [31068745],
                [31068746, [
                    [462164571, null, null, [1]]
                ]]
            ]],
            [1000, [
                    [31068763, [
                            [null, 24, null, [null, 31068763]]
                        ],
                        [6, null, null, 4, null, 4]
                    ],
                    [31068764, [
                            [null, 24, null, [null, 31068764]]
                        ],
                        [6, null, null, 4, null, 5]
                    ]
                ],
                [4, null, 3], 1
            ],
            [1000, [
                    [31068784, [
                            [null, 24, null, [null, 31068784]]
                        ],
                        [6, null, null, 4, null, 6]
                    ],
                    [31068785, [
                            [null, 24, null, [null, 31068785]]
                        ],
                        [6, null, null, 4, null, 7]
                    ]
                ],
                [4, null, 3], 1
            ],
            [1000, [
                    [31068794, [
                            [null, 24, null, [null, 31068794]]
                        ],
                        [6, null, null, 4, null, 8]
                    ],
                    [31068795, [
                            [null, 24, null, [null, 31068795]]
                        ],
                        [6, null, null, 4, null, 9]
                    ]
                ],
                [4, null, 3], 1
            ],
            [1000, [
                    [31068810, [
                            [null, 24, null, [null, 31068810]]
                        ],
                        [6, null, null, 4, null, 2]
                    ],
                    [31068811, [
                            [null, 24, null, [null, 31068811]]
                        ],
                        [6, null, null, 4, null, 3]
                    ]
                ],
                [4, null, 3], 1
            ],
            [50, [
                [44761477],
                [44761478, [
                    [null, 427198696, null, [null, 1]]
                ]]
            ]],
            [1, [
                [44768257],
                [44768258, [
                    [45374286, null, null, [1]]
                ]]
            ]]
        ]],
        [9, [
            [1000, [
                    [31063049]
                ],
                [4, null, 13, null, null, null, null, ["cxbbhbxm"]]
            ]
        ]],
        [25, [
            [null, [
                    [31064132],
                    [31064133, [
                        [411850510, null, null, [1]]
                    ]]
                ],
                [2, [
                    [4, null, 68],
                    [3, [
                        [6, null, null, null, 4, null, "2g", ["navigator.connection.effectiveType"]],
                        [6, null, null, null, 4, null, "2g", ["navigator.mozConnection.effectiveType"]],
                        [6, null, null, null, 4, null, "2g", ["navigator.webkitConnection.effectiveType"]]
                    ]]
                ]], 40
            ],
            [50, [
                [31068366],
                [31068367, [
                    [null, 455645877, null, [null, 0.1]]
                ]]
            ]],
            [null, [
                [44769862, null, [4, null, 68]],
                [44769865, [
                        [null, 438663674, null, [null, 500]]
                    ],
                    [4, null, 68]
                ],
                [44769866, [
                        [null, 438663674, null, [null, 1000]]
                    ],
                    [4, null, 68]
                ],
                [44769867, [
                        [null, 438663674, null, [null, 1500]]
                    ],
                    [4, null, 68]
                ],
                [44769868, [
                        [null, 438663674, null, [null, 2000]]
                    ],
                    [4, null, 68]
                ],
                [44769869, [
                        [null, 438663674, null, [null, 2500]]
                    ],
                    [4, null, 68]
                ],
                [44769870, [
                        [null, 438663674, null, [null, 3000]]
                    ],
                    [4, null, 68]
                ],
                [44770059, [
                        [null, 438663674, null, [null, 1]]
                    ],
                    [4, null, 68]
                ]
            ]]
        ]],
        [13, [
            [10, [
                [31065824],
                [31065825, [
                    [424117738, null, null, [1]]
                ]]
            ]],
            [50, [
                [31068519],
                [31068520, [
                    [450691643, null, null, [1]]
                ]]
            ]],
            [500, [
                    [31061692],
                    [31061693, [
                        [77, null, null, [1]],
                        [78, null, null, [1]],
                        [85, null, null, [1]],
                        [80, null, null, [1]],
                        [76, null, null, [1]]
                    ]]
                ],
                [4, null, 6, null, null, null, null, ["31061691"]]
            ],
            [50, [
                [31064018],
                [31064019, [
                    [1961, null, null, [1]]
                ]]
            ]],
            [1000, [
                [31065981, null, [2, [
                    [6, null, null, 3, null, 0],
                    [12, null, null, null, 4, null, "Chrome/(9[23456789]|\\d{3,})", ["navigator.userAgent"]],
                    [4, null, 27, null, null, null, null, ["crossOriginIsolated"]]
                ]]]
            ]],
            [1000, [
                    [31067146, null, [4, null, 9, null, null, null, null, ["document.browsingTopics"]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067147, null, [2, [
                        [4, null, 9, null, null, null, null, ["navigator.runAdAuction"]],
                        [4, null, 9, null, null, null, null, ["navigator.joinAdInterestGroup"]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067148, null, [4, null, 8, null, null, null, null, ["attributionReporting"]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067672, null, [2, [
                        [4, null, 69, null, null, null, null, ["browsing-topics"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["browsing-topics"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067673, null, [2, [
                        [4, null, 69, null, null, null, null, ["join-ad-interest-group"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["join-ad-interest-group"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067674, null, [2, [
                        [4, null, 69, null, null, null, null, ["run-ad-auction"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["run-ad-auction"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067675, null, [2, [
                        [4, null, 69, null, null, null, null, ["attribution-reporting"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["attribution-reporting"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31068556, null, [4, null, 8, null, null, null, null, ["sharedStorage"]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31068557, null, [2, [
                        [4, null, 69, null, null, null, null, ["shared-storage"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["shared-storage"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [null, [
                [44768158, null, [2, [
                    [4, null, 8, null, null, null, null, ["attributionReporting"]],
                    [4, null, 70, null, null, null, null, ["attribution-reporting"]]
                ]]],
                [44768159, null, [2, [
                    [4, null, 8, null, null, null, null, ["attributionReporting"]],
                    [4, null, 70, null, null, null, null, ["attribution-reporting"]]
                ]]]
            ]]
        ]],
        [6, [
            [1000, [
                    [31068211, null, [2, [
                        [2, [
                            [8, null, null, 1, null, -1],
                            [7, null, null, 1, null, 10]
                        ]],
                        [4, null, 3]
                    ]]],
                    [31068212, [
                            [501, null, null, [1]]
                        ],
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 29],
                                [7, null, null, 1, null, 40]
                            ]],
                            [4, null, 3]
                        ]]
                    ],
                    [31068213, [
                            [501, null, null, [1]]
                        ],
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 39],
                                [7, null, null, 1, null, 50]
                            ]],
                            [4, null, 3]
                        ]]
                    ]
                ],
                [2, [
                    [4, null, 66],
                    [12, null, null, null, 4, null, "Chrome\\/((?!100|101|102)\\d{3,})", ["navigator.userAgent"]],
                    [1, [
                        [4, null, 8, null, null, null, null, ["navigator.serviceWorker.controller"]]
                    ]],
                    [4, null, 9, null, null, null, null, ["document.head.appendChild"]]
                ]]
            ]
        ]]
    ], null, null, [0.001, 1000, 1, 1000]
])