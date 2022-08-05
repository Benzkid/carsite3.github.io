(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var n, aa;

    function ba(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function da(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ea = da(this),
        fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        p = {},
        ha = {};

    function t(a, b) {
        var c = ha[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function u(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in p ? f = p : f = ea;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = fa && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ca(p, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ha[d] && (a = 1E9 * Math.random() >>> 0, ha[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, ha[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    u("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.h = f;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.h
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    u("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, p.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ea[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ia(ba(this))
                }
            })
        }
        return a
    }, "es6");

    function ia(a) {
        a = {
            next: a
        };
        a[t(p.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }

    function ja(a) {
        return a.raw = a
    }

    function v(a) {
        var b = "undefined" != typeof p.Symbol && t(p.Symbol, "iterator") && a[t(p.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: ba(a)
        }
    }

    function ka(a) {
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        return c
    }

    function la(a) {
        return a instanceof Array ? a : ka(v(a))
    }

    function ma(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    var na = fa && "function" == typeof t(Object, "assign") ? t(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) ma(d, e) && (a[e] = d[e])
        }
        return a
    };
    u("Object.assign", function(a) {
        return a || na
    }, "es6");
    var oa = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        pa;
    if (fa && "function" == typeof Object.setPrototypeOf) pa = Object.setPrototypeOf;
    else {
        var qa;
        a: {
            var ra = {
                    a: !0
                },
                sa = {};
            try {
                sa.__proto__ = ra;
                qa = sa.a;
                break a
            } catch (a) {}
            qa = !1
        }
        pa = qa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ta = pa;

    function w(a, b) {
        a.prototype = oa(b.prototype);
        a.prototype.constructor = a;
        if (ta) ta(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.ec = b.prototype
    }

    function ua() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    u("Promise", function(a) {
        function b(g) {
            this.h = 0;
            this.j = void 0;
            this.i = [];
            this.B = !1;
            var h = this.l();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        }

        function c() {
            this.h = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.i = function(g) {
            if (null == this.h) {
                this.h = [];
                var h = this;
                this.j(function() {
                    h.m()
                })
            }
            this.h.push(g)
        };
        var e = ea.setTimeout;
        c.prototype.j = function(g) {
            e(g, 0)
        };
        c.prototype.m = function() {
            for (; this.h && this.h.length;) {
                var g = this.h;
                this.h = [];
                for (var h = 0; h < g.length; ++h) {
                    var k =
                        g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.l(l)
                    }
                }
            }
            this.h = null
        };
        c.prototype.l = function(g) {
            this.j(function() {
                throw g;
            })
        };
        b.prototype.l = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.R),
                reject: g(this.m)
            }
        };
        b.prototype.R = function(g) {
            if (g === this) this.m(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.W(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.P(g) : this.v(g)
            }
        };
        b.prototype.P = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.m(k);
                return
            }
            "function" == typeof h ? this.ia(h, g) : this.v(g)
        };
        b.prototype.m = function(g) {
            this.D(2, g)
        };
        b.prototype.v = function(g) {
            this.D(1, g)
        };
        b.prototype.D = function(g, h) {
            if (0 != this.h) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.h);
            this.h = g;
            this.j = h;
            2 === this.h && this.T();
            this.H()
        };
        b.prototype.T = function() {
            var g = this;
            e(function() {
                if (g.J()) {
                    var h = ea.console;
                    "undefined" !== typeof h && h.error(g.j)
                }
            }, 1)
        };
        b.prototype.J =
            function() {
                if (this.B) return !1;
                var g = ea.CustomEvent,
                    h = ea.Event,
                    k = ea.dispatchEvent;
                if ("undefined" === typeof k) return !0;
                "function" === typeof g ? g = new g("unhandledrejection", {
                    cancelable: !0
                }) : "function" === typeof h ? g = new h("unhandledrejection", {
                    cancelable: !0
                }) : (g = ea.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
                g.promise = this;
                g.reason = this.j;
                return k(g)
            };
        b.prototype.H = function() {
            if (null != this.i) {
                for (var g = 0; g < this.i.length; ++g) f.i(this.i[g]);
                this.i = null
            }
        };
        var f = new c;
        b.prototype.W = function(g) {
            var h = this.l();
            g.ka(h.resolve, h.reject)
        };
        b.prototype.ia = function(g, h) {
            var k = this.l();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        b.prototype.then = function(g, h) {
            function k(r, A) {
                return "function" == typeof r ? function(K) {
                    try {
                        l(r(K))
                    } catch (B) {
                        m(B)
                    }
                } : A
            }
            var l, m, q = new b(function(r, A) {
                l = r;
                m = A
            });
            this.ka(k(g, l), k(h, m));
            return q
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.ka = function(g, h) {
            function k() {
                switch (l.h) {
                    case 1:
                        g(l.j);
                        break;
                    case 2:
                        h(l.j);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.h);
                }
            }
            var l = this;
            null == this.i ? f.i(k) : this.i.push(k);
            this.B = !0
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, k) {
                k(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, k) {
                for (var l = v(g), m = l.next(); !m.done; m = l.next()) d(m.value).ka(h, k)
            })
        };
        b.all = function(g) {
            var h = v(g),
                k = h.next();
            return k.done ? d([]) : new b(function(l, m) {
                function q(K) {
                    return function(B) {
                        r[K] = B;
                        A--;
                        0 == A && l(r)
                    }
                }
                var r = [],
                    A = 0;
                do r.push(void 0), A++, d(k.value).ka(q(r.length - 1), m), k = h.next();
                while (!k.done)
            })
        };
        return b
    }, "es6");
    u("Array.prototype.find", function(a) {
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
    u("WeakMap", function(a) {
        function b(g) {
            this.h = (f += Math.random() + 1).toString();
            if (g) {
                g = v(g);
                for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
            }
        }

        function c() {}

        function d(g) {
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
        var e = "$jscomp_hidden_" + Math.random(),
            f = 0;
        b.prototype.set = function(g, h) {
            if (!d(g)) throw Error("Invalid WeakMap key");
            if (!ma(g, e)) {
                var k = new c;
                ca(g, e, {
                    value: k
                })
            }
            if (!ma(g, e)) throw Error("WeakMap key fail: " + g);
            g[e][this.h] = h;
            return this
        };
        b.prototype.get = function(g) {
            return d(g) && ma(g, e) ? g[e][this.h] : void 0
        };
        b.prototype.has = function(g) {
            return d(g) && ma(g, e) && ma(g[e], this.h)
        };
        b.prototype.delete = function(g) {
            return d(g) && ma(g, e) && ma(g[e], this.h) ? delete g[e][this.h] : !1
        };
        return b
    }, "es6");
    u("Map", function(a) {
        function b() {
            var h = {};
            return h.N = h.next = h.head = h
        }

        function c(h, k) {
            var l = h.h;
            return ia(function() {
                if (l) {
                    for (; l.head != h.h;) l = l.N;
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
        }

        function d(h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
            var m = h.i[l];
            if (m && ma(h.i, l))
                for (h = 0; h < m.length; h++) {
                    var q = m[h];
                    if (k !== k && q.key !== q.key || k === q.key) return {
                        id: l,
                        list: m,
                        index: h,
                        C: q
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                C: void 0
            }
        }

        function e(h) {
            this.i = {};
            this.h = b();
            this.size = 0;
            if (h) {
                h = v(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(v([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x ||
                        "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (q) {
                    return !1
                }
            }()) return a;
        var f = new p.WeakMap;
        e.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.i[l.id] = []);
            l.C ? l.C.value = k : (l.C = {
                next: this.h,
                N: this.h.N,
                head: this.h,
                key: h,
                value: k
            }, l.list.push(l.C), this.h.N.next = l.C, this.h.N = l.C, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.C && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.i[h.id], h.C.N.next = h.C.next, h.C.next.N = h.C.N, h.C.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.i = {};
            this.h = this.h.N = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).C
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).C) && h.value
        };
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        };
        e.prototype.forEach = function(h, k) {
            for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value,
                h.call(k, m[1], m[0], this)
        };
        e.prototype[t(p.Symbol, "iterator")] = e.prototype.entries;
        var g = 0;
        return e
    }, "es6");

    function va(a, b) {
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
        e[t(p.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    u("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return va(this, function(b) {
                return b
            })
        }
    }, "es6");
    u("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");

    function wa(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    u("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = wa(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    u("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = wa(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    u("globalThis", function(a) {
        return a || ea
    }, "es_2020");
    u("Set", function(a) {
        function b(c) {
            this.h = new p.Map;
            if (c) {
                c = v(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.h.size
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(v([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x ||
                        f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.h.set(c, c);
            this.size = this.h.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.h.delete(c);
            this.size = this.h.size;
            return c
        };
        b.prototype.clear = function() {
            this.h.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.h.has(c)
        };
        b.prototype.entries = function() {
            return this.h.entries()
        };
        b.prototype.values = function() {
            return t(this.h, "values").call(this.h)
        };
        b.prototype.keys = t(b.prototype,
            "values");
        b.prototype[t(p.Symbol, "iterator")] = t(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.h.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    u("Array.prototype.values", function(a) {
        return a ? a : function() {
            return va(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    u("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    u("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || t(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    u("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== wa(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    u("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = wa(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? t(c, "repeat").call(c, Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    }, "es8");
    u("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return p.Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return p.Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    }, "es9");
    var x = this || self;

    function xa(a) {
        a = a.split(".");
        for (var b = x, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function ya(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function za(a) {
        var b = ya(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function Aa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function Ba(a) {
        return Object.prototype.hasOwnProperty.call(a, Ca) && a[Ca] || (a[Ca] = ++Da)
    }
    var Ca = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Da = 0;

    function Ea(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Fa(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Ga(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ga = Ea : Ga = Fa;
        return Ga.apply(null, arguments)
    }

    function Ha(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ia(a, b) {
        a = a.split(".");
        var c = x;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Ja(a) {
        return a
    };
    var Ka = (new Date).getTime();

    function La(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Ma(a, b) {
        var c = 0;
        a = La(String(a)).split(".");
        b = La(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = Na(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Na(0 == f[2].length, 0 == g[2].length) || Na(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }

    function Na(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function Oa() {
        var a = x.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function y(a) {
        return -1 != Oa().indexOf(a)
    };

    function Pa() {
        return y("Trident") || y("MSIE")
    }

    function Qa() {
        return (y("Chrome") || y("CriOS")) && !y("Edge") || y("Silk")
    }

    function Ra(a) {
        var b = {};
        a.forEach(function(c) {
            b[c[0]] = c[1]
        });
        return function(c) {
            return b[t(c, "find").call(c, function(d) {
                return d in b
            })] || ""
        }
    }

    function Sa() {
        var a = Oa();
        if (Pa()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        for (var d; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = Ra(b);
        return y("Opera") ? a(["Version", "Opera"]) :
            y("Edge") ? a(["Edge"]) : y("Edg/") ? a(["Edg"]) : y("Silk") ? a(["Silk"]) : Qa() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function Ta(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Ua(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Va(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Wa(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Xa(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Ya(a, b) {
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

    function Za(a, b) {
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

    function $a(a, b) {
        return 0 <= Ta(a, b)
    }

    function ab(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function bb(a) {
        bb[" "](a);
        return a
    }
    bb[" "] = function() {};
    var cb = Pa();
    !y("Android") || Qa();
    Qa();
    !y("Safari") || Qa();
    var db = {},
        eb = null;

    function fb(a) {
        var b;
        void 0 === b && (b = 0);
        gb();
        b = db[b];
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
    }

    function hb(a) {
        var b = [];
        ib(a, function(c) {
            b.push(c)
        });
        return b
    }

    function ib(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    m = eb[l];
                if (null != m) return m;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        gb();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (64 === h && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
        }
    }

    function gb() {
        if (!eb) {
            eb = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                db[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === eb[f] && (eb[f] = e)
                }
            }
        }
    };
    var jb = "undefined" !== typeof Uint8Array,
        kb = {};
    var lb;

    function mb(a) {
        if (kb !== kb) throw Error("illegal external caller");
        this.xa = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    }
    mb.prototype.isEmpty = function() {
        return null == this.xa
    };
    var nb = "function" === typeof p.Symbol && "symbol" === typeof(0, p.Symbol)() ? (0, p.Symbol)(void 0) : void 0;

    function ob(a, b) {
        Object.isFrozen(a) || (nb ? a[nb] |= b : void 0 !== a.K ? a.K |= b : Object.defineProperties(a, {
            K: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    }

    function pb(a, b) {
        Object.isExtensible(a) && (nb ? a[nb] && (a[nb] &= ~b) : void 0 !== a.K && (a.K &= ~b))
    }

    function qb(a) {
        var b;
        nb ? b = a[nb] : b = a.K;
        return null == b ? 0 : b
    }

    function rb(a) {
        ob(a, 1);
        return a
    }

    function sb(a) {
        return a ? !!(qb(a) & 2) : !1
    }

    function tb(a) {
        ob(a, 16);
        return a
    }

    function ub(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as shared mutably");
        pb(a, 16)
    };

    function vb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var wb, xb = Object.freeze(rb([]));

    function yb(a) {
        if (sb(a.u)) throw Error("Cannot mutate an immutable Message");
    }
    var zb = "undefined" != typeof p.Symbol && "undefined" != typeof p.Symbol.hasInstance;

    function Ab(a) {
        return {
            value: a,
            configurable: !1,
            writable: !1,
            enumerable: !1
        }
    };

    function Bb(a, b, c, d) {
        c = void 0 === c ? !1 : c;
        d = void 0 === d ? !1 : d;
        if (Array.isArray(a)) return new b(d ? tb(a) : a);
        if (c) return new b
    };

    function Cb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (jb && null != a && a instanceof Uint8Array) return fb(a);
                    if (a instanceof mb) {
                        var b = a.xa;
                        b = null == b || "string" === typeof b ? b : jb && b instanceof Uint8Array ? fb(b) : null;
                        return null == b ? "" : a.xa = b
                    }
                }
        }
        return a
    };

    function Db(a, b, c) {
        if (null != a) {
            if (Array.isArray(a)) a = Eb(a, b, c);
            else if (vb(a)) {
                var d = {},
                    e;
                for (e in a) Object.prototype.hasOwnProperty.call(a, e) && (d[e] = Db(a[e], b, c));
                a = d
            } else a = b(a);
            return a
        }
    }

    function Eb(a, b, c) {
        var d = Array.prototype.slice.call(a);
        c(a, d);
        for (a = 0; a < d.length; a++) d[a] = Db(d[a], b, c);
        return d
    }

    function Fb(a) {
        if (a && "object" == typeof a && a.toJSON) return a.toJSON();
        a = Cb(a);
        return Array.isArray(a) ? Eb(a, Fb, Gb) : a
    }

    function Gb() {};

    function Hb(a) {
        return a.i || (a.i = a.u[a.j + a.U] = {})
    }

    function z(a, b, c) {
        return -1 === b ? null : b >= a.j ? a.i ? a.i[b] : void 0 : (void 0 === c ? 0 : c) && a.i && (c = a.i[b], null != c) ? c : a.u[b + a.U]
    }

    function C(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        (void 0 === e ? 0 : e) || yb(a);
        if (b >= a.j || d) return Hb(a)[b] = c, a;
        void 0 !== a.i && a.j >= a.u.length ? (d = a.u.length - 1, e = b + a.U, e >= d ? (a.u[d] = void 0, a.u[e] = c, a.u.push(a.i)) : a.u[e] = c) : a.u[b + a.U] = c;
        void 0 !== a.i && b in a.i && delete a.i[b];
        return a
    }

    function Ib(a, b) {
        return Array.isArray(z(a, Jb(a, Kb, b)))
    }

    function Lb(a, b, c, d) {
        var e = z(a, b, d);
        Array.isArray(e) ? e && qb(e) & 1 || rb(e) : e = xb;
        if (sb(a.u)) c & 1 || (ob(e, 2), Object.freeze(e));
        else if (e === xb || sb(e)) e = rb(Array.prototype.slice.call(e)), C(a, b, e, d);
        return e
    }

    function Mb(a, b, c) {
        return Lb(a, b, 0, void 0 === c ? !1 : c)
    }

    function Nb(a, b) {
        a = z(a, b);
        return null == a ? a : !!a
    }

    function D(a, b, c) {
        a = z(a, b);
        return null == a ? c : a
    }

    function E(a, b, c) {
        a = Nb(a, b);
        return null == a ? void 0 === c ? !1 : c : a
    }

    function Ob(a, b) {
        a = z(a, b);
        a = null == a ? a : +a;
        return null == a ? 0 : a
    }

    function Pb(a, b, c) {
        null == c ? c = xb : rb(c);
        return C(a, b, c)
    }

    function Qb(a, b, c) {
        yb(a);
        0 !== c ? C(a, b, c) : C(a, b, void 0, !1);
        return a
    }

    function Rb(a, b, c, d) {
        yb(a);
        (c = Sb(a, c)) && c !== b && null != d && (a.h && c in a.h && (a.h[c] = void 0), C(a, c));
        return C(a, b, d)
    }

    function Jb(a, b, c) {
        return Sb(a, b) === c ? c : -1
    }

    function Sb(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != z(a, e) && (0 !== c && C(a, c, void 0, !1, !0), c = e)
        }
        return c
    }

    function F(a, b, c) {
        var d = void 0 === d ? !1 : d;
        a.h || (a.h = {});
        var e = a.h[c];
        if (e) b = e;
        else if (b = Bb(z(a, c, d), b)) a.h[c] = b, ob(b.u, qb(a.u) & -33);
        if (null == b) return b;
        sb(b.u) && !sb(a.u) && (b = b.wa(), C(a, c, b.u, d), a.h[c] = b);
        return b
    }

    function G(a, b, c) {
        var d = void 0 === d ? !1 : d;
        var e = sb(a.u),
            f = e;
        f = void 0 === f ? !0 : f;
        a.h || (a.h = {});
        var g = a.h[c];
        var h = Lb(a, c, 2, d),
            k = !!(qb(a.u) & 16),
            l = sb(h);
        l = sb(a.u) || l;
        if (!g) {
            g = [];
            for (var m = l, q = 0; q < h.length; q++) {
                var r = h[q];
                m = m || sb(r);
                r = Bb(r, b, !1, k);
                void 0 !== r && (g.push(r), l && ob(r.u, 2))
            }
            a.h[c] = g;
            m ? pb(h, 8) : ob(h, 8)
        }
        b = l || f;
        f = sb(g);
        b && !f && (Object.isFrozen(g) && (a.h[c] = g = g.slice()), ob(g, 2), Object.freeze(g));
        !b && f && (a.h[c] = g = g.slice());
        a = Mb(a, c, d);
        if (!(c = e) && (c = a)) {
            if (!a) throw Error("cannot check mutability state of non-array");
            c = !(qb(a) & 8)
        }
        if (c) {
            for (c = 0; c < g.length; c++)(d = g[c]) && sb(d.u) && !e && (g[c] = g[c].wa(), a[c] = g[c].u);
            ob(a, 8)
        }
        return g
    }

    function Tb(a, b, c) {
        yb(a);
        a.h || (a.h = {});
        var d = null == c ? c = void 0 : c.u;
        a.h[b] = c;
        return C(a, b, d)
    }

    function Ub(a, b, c, d) {
        yb(a);
        a.h || (a.h = {});
        var e = null != d ? d.u : d = void 0;
        a.h[b] = d;
        return Rb(a, b, c, e)
    }

    function Vb(a, b, c) {
        yb(a);
        if (null != c) {
            var d = rb([]);
            for (var e = !1, f = 0; f < c.length; f++) d[f] = c[f].u, e = e || sb(d[f]);
            a.h || (a.h = {});
            a.h[b] = c;
            c = d;
            e ? pb(c, 8) : ob(c, 8)
        } else a.h && (a.h[b] = void 0), d = xb;
        return C(a, b, d)
    }

    function Wb(a, b) {
        return D(a, b, "")
    }

    function Xb(a, b, c) {
        return D(a, Jb(a, c, b), 0)
    }

    function Yb(a, b, c, d) {
        return F(a, b, Jb(a, d, c))
    };

    function Zb(a, b, c) {
        a || (a = $b);
        $b = null;
        var d = this.constructor.h || 0,
            e = 0 < d,
            f = this.constructor.messageId;
        a ? qb(a) & 16 && ob(a, 32) : (a = f ? [f] : [], ob(a, 48));
        e && 0 < a.length && vb(a[a.length - 1]) && "g" in a[a.length - 1] && (d = 0);
        this.U = (f ? 0 : -1) - d;
        this.h = void 0;
        this.u = a;
        a: {
            f = this.u.length;d = f - 1;
            if (f && (f = this.u[d], vb(f))) {
                this.i = f;
                b = t(Object, "keys").call(Object, f);
                if (f = 0 < b.length) b: {
                    f = isNaN;a = b.length;
                    for (var g = "string" === typeof b ? b.split("") : b, h = 0; h < a; h++)
                        if (h in g && !f.call(void 0, g[h], h, b)) {
                            f = !1;
                            break b
                        }
                    f = !0
                }
                f ? this.j = Number.MAX_VALUE :
                    this.j = d - this.U;
                break a
            }
            void 0 !== b && -1 < b ? (this.j = Math.max(b, d + 1 - this.U), this.i = void 0) : this.j = Number.MAX_VALUE
        }
        if (!e && this.i && "g" in this.i) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c)
            for (e = 0; e < c.length; e++) d = c[e], d < this.j ? (d += this.U, (b = this.u[d]) ? Array.isArray(b) && rb(b) : this.u[d] = xb) : (b = Hb(this), (f = b[d]) ? Array.isArray(f) && rb(f) : b[d] = xb)
    }
    Zb.prototype.toJSON = function() {
        var a = this.u;
        return wb ? a : Eb(a, Fb, Gb)
    };

    function ac(a, b) {
        if (null == b || "" == b) return new a;
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error("Expected to deserialize an Array but got " + ya(b) + ": " + b);
        $b = b;
        tb(b);
        a = new a(b);
        $b = null;
        return a
    }

    function bc(a, b) {
        return Cb(b)
    }
    var $b;

    function cc() {
        Zb.apply(this, arguments)
    }
    w(cc, Zb);
    cc.prototype.wa = function() {
        return this
    };
    if (zb) {
        var dc = {};
        Object.defineProperties(cc, (dc[p.Symbol.hasInstance] = Ab(function() {
            throw Error("Cannot perform instanceof checks for MutableMessage");
        }), dc))
    };

    function ec(a, b, c, d, e, f) {
        (a = a.h && a.h[c]) ? Array.isArray(a) ? (e = f.sa ? rb(a.slice()) : a, Vb(b, c, e)) : Tb(b, c, a): (jb && d instanceof Uint8Array ? e = d.length ? new mb(new Uint8Array(d)) : lb || (lb = new mb(null)) : (Array.isArray(d) && (e ? ob(d, 2) : d && qb(d) & 1 && f.sa ? (e = d.slice(), f = (qb(d) | 0) & -51, nb ? e[nb] = f : void 0 !== e.K ? e.K = f : Object.defineProperties(e, {
            K: {
                value: f,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }), d = e) : ub(d)), e = d), C(b, c, e))
    };

    function H() {
        cc.apply(this, arguments)
    }
    w(H, cc);
    H.prototype.wa = function() {
        if (sb(this.u)) {
            var a = {
                sa: !0
            };
            var b = sb(this.u);
            if (b && !a.sa) throw Error("copyRepeatedFields must be true for frozen messages");
            b || ub(this.u);
            var c = new this.constructor;
            this.Qa && (c.Qa = this.Qa.slice());
            for (var d = this.u, e = 0; e < d.length; e++) {
                var f = d[e];
                if (e === d.length - 1 && vb(f))
                    for (var g in f) {
                        if (Object.prototype.hasOwnProperty.call(f, g)) {
                            var h = +g;
                            t(Number, "isNaN").call(Number, h) ? Hb(c)[g] = f[g] : ec(this, c, h, f[g], b, a)
                        }
                    } else ec(this, c, e - this.U, f, b, a)
            }
            a = c
        } else a = this;
        return a
    };
    if (zb) {
        var fc = {};
        Object.defineProperties(H, (fc[p.Symbol.hasInstance] = Ab(Object[p.Symbol.hasInstance]), fc))
    };

    function gc(a) {
        H.call(this, a, -1, hc)
    }
    w(gc, H);

    function ic(a) {
        H.call(this, a)
    }
    w(ic, H);
    var hc = [2, 3];

    function jc(a, b) {
        this.i = a === kc && b || "";
        this.h = lc
    }
    var lc = {},
        kc = {};
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function mc(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function nc(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function oc(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function pc(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    };
    var qc;

    function rc() {
        if (void 0 === qc) {
            var a = null,
                b = x.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Ja,
                        createScript: Ja,
                        createScriptURL: Ja
                    })
                } catch (c) {
                    x.console && x.console.error(c.message)
                }
                qc = a
            } else qc = a
        }
        return qc
    };
    var sc = {};

    function tc(a, b) {
        this.h = b === sc ? a : ""
    }
    tc.prototype.toString = function() {
        return this.h.toString()
    };

    function uc(a, b) {
        this.h = b === vc ? a : ""
    }
    uc.prototype.toString = function() {
        return this.h + ""
    };

    function wc(a, b) {
        a = xc.exec(yc(a).toString());
        var c = a[3] || "";
        return zc(a[1] + Ac("?", a[2] || "", b) + Ac("#", c))
    }

    function yc(a) {
        return a instanceof uc && a.constructor === uc ? a.h : "type_error:TrustedResourceUrl"
    }
    var xc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        vc = {};

    function zc(a) {
        var b = rc();
        a = b ? b.createScriptURL(a) : a;
        return new uc(a, vc)
    }

    function Ac(a, b, c) {
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

    function Bc(a, b) {
        this.h = b === Cc ? a : ""
    }
    Bc.prototype.toString = function() {
        return this.h.toString()
    };
    var Cc = {};
    var Dc;
    try {
        new URL("s://g"), Dc = !0
    } catch (a) {
        Dc = !1
    }
    var Ec = Dc;
    var Fc = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function Gc(a, b, c) {
        if (b instanceof uc) a.href = yc(b).toString();
        else {
            if (-1 === Fc.indexOf(c)) throw Error('TrustedResourceUrl href attribute required with rel="' + c + '"');
            if (b instanceof Bc) b = b instanceof Bc && b.constructor === Bc ? b.h : "type_error:SafeUrl";
            else {
                a: if (Ec) {
                    try {
                        var d = new URL(b)
                    } catch (e) {
                        d = "https:";
                        break a
                    }
                    d = d.protocol
                } else b: {
                    d = document.createElement("a");
                    try {
                        d.href = b
                    } catch (e) {
                        d = void 0;
                        break b
                    }
                    d = -1 !== [":", ""].indexOf(d.protocol) ? "https:" : d.protocol
                }
                b = "javascript:" === d ? "about:invalid" : b
            }
            a.href = b
        }
        a.rel =
            c
    };

    function Hc(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Ic(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Jc(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };

    function Kc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function Lc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    };

    function Mc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function Nc(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!za(f) || Aa(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (Aa(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                Ua(g ? ab(f) : f, d)
            }
        }
    }

    function Oc(a) {
        this.h = a || x.document || document
    }
    n = Oc.prototype;
    n.getElementsByTagName = function(a, b) {
        return (b || this.h).getElementsByTagName(String(a))
    };
    n.createElement = function(a) {
        var b = this.h;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    n.createTextNode = function(a) {
        return this.h.createTextNode(String(a))
    };
    n.append = function(a, b) {
        Nc(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments)
    };
    n.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function Pc() {
        return !Qc() && (y("iPod") || y("iPhone") || y("Android") || y("IEMobile"))
    }

    function Qc() {
        return y("iPad") || y("Android") && !y("Mobile") || y("Silk")
    };
    var Rc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Sc = /#|$/;

    function Tc(a) {
        var b = a.search(Sc),
            c;
        a: {
            for (c = 0; 0 <= (c = a.indexOf("client", c)) && c < b;) {
                var d = a.charCodeAt(c - 1);
                if (38 == d || 63 == d)
                    if (d = a.charCodeAt(c + 6), !d || 61 == d || 38 == d || 35 == d) break a;
                c += 7
            }
            c = -1
        }
        if (0 > c) return null;
        d = a.indexOf("&", c);
        if (0 > d || d > b) d = b;
        return decodeURIComponent(a.slice(c + 7, -1 !== d ? d : 0).replace(/\+/g, " "))
    };

    function Uc(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    bb(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function Vc(a) {
        return Uc(a.top) ? a.top : null
    }

    function Wc(a, b) {
        var c = Xc("SCRIPT", a);
        c.src = yc(b);
        var d, e;
        (d = (b = null == (e = (d = (c.ownerDocument && c.ownerDocument.defaultView || window).document).querySelector) ? void 0 : e.call(d, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", d);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function Yc(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Zc(a, b) {
        if (!$c() && !cd()) {
            var c = Math.random();
            if (c < b) return c = dd(), a[Math.floor(c * a.length)]
        }
        return null
    }

    function dd() {
        if (!p.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            p.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function ed(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function fd(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var cd = Ic(function() {
            return Xa(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], gd) || 1E-4 > Math.random()
        }),
        $c = Ic(function() {
            return gd("MSIE")
        });

    function gd(a) {
        return -1 != Oa().indexOf(a)
    }
    var hd = /^([0-9.]+)px$/,
        id = /^(-?[0-9.]{1,30})$/;

    function jd(a) {
        if (!id.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function J(a) {
        return (a = hd.exec(a)) ? +a[1] : null
    }

    function kd(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (g) {
                d = !1
            }
            if (d) return a;
            a: {
                try {
                    var e = a.parent;
                    if (e && e != a) {
                        var f = e;
                        break a
                    }
                } catch (g) {}
                f = null
            }
            if (!(a = f)) break
        }
        return null
    }
    var ld = Ic(function() {
        return Pc() ? 2 : Qc() ? 1 : 0
    });

    function md(a) {
        ed({
            display: "none"
        }, function(b, c) {
            a.style.setProperty(c, b, "important")
        })
    }
    var nd = [];

    function od() {
        var a = nd;
        nd = [];
        a = v(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    }

    function pd(a, b) {
        if (a.length && b.head) {
            a = v(a);
            for (var c = a.next(); !c.done; c = a.next())
                if ((c = c.value) && b.head) {
                    var d = Xc("META");
                    b.head.appendChild(d);
                    d.httpEquiv = "origin-trial";
                    d.content = c
                }
        }
    }

    function qd(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * Math.pow(2, 52)),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    }

    function rd(a) {
        var b = sd;
        "complete" === b.readyState || "interactive" === b.readyState ? (nd.push(a), 1 == nd.length && (p.Promise ? p.Promise.resolve().then(od) : window.setImmediate ? setImmediate(od) : setTimeout(od, 0))) : b.addEventListener("DOMContentLoaded", a)
    }

    function Xc(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    var td = null;
    var sd = document,
        L = window;
    var ud = null;

    function vd(a, b) {
        b = void 0 === b ? [] : b;
        var c = !1;
        x.google_logging_queue || (c = !0, x.google_logging_queue = []);
        x.google_logging_queue.push([a, b]);
        if (a = c) {
            if (null == ud) {
                ud = !1;
                try {
                    var d = Vc(x);
                    d && -1 !== d.location.hash.indexOf("google_logging") && (ud = !0);
                    x.localStorage.getItem("google_logging") && (ud = !0)
                } catch (e) {}
            }
            a = ud
        }
        a && (d = x.document, a = new jc(kc, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), a = zc(a instanceof jc && a.constructor === jc && a.h === lc ? a.i : "type_error:Const"), Wc(d, a))
    };

    function wd(a) {
        a = void 0 === a ? x : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function xd(a) {
        return (a = a || wd()) ? Uc(a.master) ? a.master : null : null
    };

    function yd(a) {
        var b = ua.apply(1, arguments);
        if (0 === b.length) return zc(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return zc(c.join(""))
    };

    function zd(a) {
        var b = void 0 === b ? 1 : b;
        a = xd(wd(a)) || a;
        a.google_unique_id = (a.google_unique_id || 0) + b;
        return a.google_unique_id
    }

    function Ad(a) {
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }

    function Bd() {
        var a = void 0 === a ? L : a;
        if (!a) return !1;
        try {
            return !(!a.navigator.standalone && !a.top.navigator.standalone)
        } catch (b) {
            return !1
        }
    }

    function Cd(a) {
        if (!a) return "";
        a = a.toLowerCase();
        "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };
    var Dd = {
        Qb: 0,
        Pb: 1,
        Mb: 2,
        Hb: 3,
        Nb: 4,
        Ib: 5,
        Ob: 6,
        Kb: 7,
        Lb: 8,
        Gb: 9,
        Jb: 10
    };
    var Ed = {
        Sb: 0,
        Tb: 1,
        Rb: 2
    };

    function Fd() {
        this.i = new Gd(this);
        this.h = 0
    }
    Fd.prototype.resolve = function(a) {
        Hd(this);
        this.h = 1;
        this.l = a;
        Id(this.i)
    };
    Fd.prototype.reject = function(a) {
        Hd(this);
        this.h = 2;
        this.j = a;
        Id(this.i)
    };

    function Hd(a) {
        if (0 != a.h) throw Error("Already resolved/rejected.");
    }

    function Gd(a) {
        this.h = a
    }
    Gd.prototype.then = function(a, b) {
        if (this.i) throw Error("Then functions already set.");
        this.i = a;
        this.j = b;
        Id(this)
    };

    function Id(a) {
        switch (a.h.h) {
            case 0:
                break;
            case 1:
                a.i && a.i(a.h.l);
                break;
            case 2:
                a.j && a.j(a.h.j);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    };

    function Jd() {
        this.v = this.v;
        this.B = this.B
    }
    Jd.prototype.v = !1;
    Jd.prototype.j = function() {
        if (this.B)
            for (; this.B.length;) this.B.shift()()
    };

    function Kd(a) {
        this.h = a.slice(0)
    }
    n = Kd.prototype;
    n.forEach = function(a) {
        var b = this;
        this.h.forEach(function(c, d) {
            return void a(c, d, b)
        })
    };
    n.filter = function(a) {
        return new Kd(Va(this.h, a))
    };
    n.apply = function(a) {
        return new Kd(a(this.h.slice(0)))
    };
    n.sort = function(a) {
        return new Kd(this.h.slice(0).sort(a))
    };
    n.get = function(a) {
        return this.h[a]
    };
    n.add = function(a) {
        var b = this.h.slice(0);
        b.push(a);
        return new Kd(b)
    };

    function Ld(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };

    function Md() {
        this.h = {};
        this.i = {}
    }
    Md.prototype.set = function(a, b) {
        var c = Nd(a);
        this.h[c] = b;
        this.i[c] = a
    };
    Md.prototype.get = function(a, b) {
        a = Nd(a);
        return void 0 !== this.h[a] ? this.h[a] : b
    };
    Md.prototype.clear = function() {
        this.h = {};
        this.i = {}
    };

    function Nd(a) {
        return a instanceof Object ? String(Ba(a)) : a + ""
    };

    function Od(a, b) {
        this.h = a;
        this.i = b
    }

    function Pd(a) {
        return null != a.h ? a.h.value : null
    }

    function Qd(a, b) {
        null != a.h && b(a.h.value);
        return a
    }
    Od.prototype.map = function(a) {
        return null != this.h ? (a = a(this.h.value), a instanceof Od ? a : Rd(a)) : this
    };

    function Sd(a, b) {
        null != a.h || b(a.i);
        return a
    }

    function Rd(a) {
        return new Od({
            value: a
        }, null)
    }

    function Td(a) {
        return new Od(null, a)
    }

    function Ud(a) {
        try {
            return Rd(a())
        } catch (b) {
            return Td(b)
        }
    };

    function Vd(a) {
        this.h = new Md;
        if (a)
            for (var b = 0; b < a.length; ++b) this.add(a[b])
    }
    Vd.prototype.add = function(a) {
        this.h.set(a, !0)
    };
    Vd.prototype.contains = function(a) {
        return void 0 !== this.h.h[Nd(a)]
    };

    function Wd() {
        this.h = new Md
    }
    Wd.prototype.set = function(a, b) {
        var c = this.h.get(a);
        c || (c = new Vd, this.h.set(a, c));
        c.add(b)
    };

    function M(a) {
        H.call(this, a, -1, Xd)
    }
    w(M, H);
    M.prototype.getId = function() {
        return z(this, 3)
    };
    var Xd = [4];

    function Yd(a) {
        var b = void 0 === a.Ka ? void 0 : a.Ka,
            c = void 0 === a.qb ? void 0 : a.qb,
            d = void 0 === a.Ya ? void 0 : a.Ya;
        this.h = void 0 === a.kb ? void 0 : a.kb;
        this.l = new Kd(b || []);
        this.j = d;
        this.i = c
    };

    function Zd(a) {
        var b = [],
            c = a.l;
        c && c.h.length && b.push({
            Z: "a",
            fa: $d(c)
        });
        null != a.h && b.push({
            Z: "as",
            fa: a.h
        });
        null != a.i && b.push({
            Z: "i",
            fa: String(a.i)
        });
        null != a.j && b.push({
            Z: "rp",
            fa: String(a.j)
        });
        b.sort(function(d, e) {
            return d.Z.localeCompare(e.Z)
        });
        b.unshift({
            Z: "t",
            fa: "aa"
        });
        return b
    }

    function $d(a) {
        a = a.h.slice(0).map(ae);
        a = JSON.stringify(a);
        return fd(a)
    }

    function ae(a) {
        var b = {};
        null != z(a, 7) && (b.q = z(a, 7));
        null != z(a, 2) && (b.o = z(a, 2));
        null != z(a, 5) && (b.p = z(a, 5));
        return b
    };

    function be(a) {
        H.call(this, a)
    }
    w(be, H);
    be.prototype.setLocation = function(a) {
        return C(this, 1, a)
    };

    function ce(a, b) {
        this.Na = a;
        this.Xa = b
    }

    function de(a) {
        var b = [].slice.call(arguments).filter(Hc(function(e) {
            return null === e
        }));
        if (!b.length) return null;
        var c = [],
            d = {};
        b.forEach(function(e) {
            c = c.concat(e.Na || []);
            d = t(Object, "assign").call(Object, d, e.Xa)
        });
        return new ce(c, d)
    }

    function ee(a) {
        switch (a) {
            case 1:
                return new ce(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new ce(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new ce(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new ce(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function fe(a) {
        if (null == a) a = null;
        else {
            var b = Zd(a);
            a = [];
            b = v(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = String(c.fa);
                a.push(c.Z + "." + (20 >= d.length ? d : d.slice(0, 19) + "_"))
            }
            a = new ce(null, {
                google_placement_id: a.join("~")
            })
        }
        return a
    };
    var ge = {},
        he = new ce(["google-auto-placed"], (ge.google_reactive_ad_format = 40, ge.google_tag_origin = "qs", ge));

    function ie(a) {
        H.call(this, a)
    }
    w(ie, H);

    function je(a) {
        H.call(this, a)
    }
    w(je, H);
    je.prototype.getName = function() {
        return z(this, 4)
    };

    function ke(a) {
        H.call(this, a)
    }
    w(ke, H);

    function le(a) {
        H.call(this, a)
    }
    w(le, H);

    function me(a) {
        H.call(this, a)
    }
    w(me, H);
    var ne = [1, 2, 3];

    function oe(a) {
        H.call(this, a)
    }
    w(oe, H);

    function pe(a) {
        H.call(this, a, -1, qe)
    }
    w(pe, H);
    var qe = [6, 7, 9, 10, 11];

    function re(a) {
        H.call(this, a, -1, se)
    }
    w(re, H);

    function te(a) {
        H.call(this, a)
    }
    w(te, H);

    function ue(a) {
        H.call(this, a)
    }
    w(ue, H);
    var se = [1],
        ve = [1, 2];

    function we(a) {
        H.call(this, a, -1, xe)
    }
    w(we, H);

    function ye(a) {
        H.call(this, a)
    }
    w(ye, H);

    function ze(a) {
        H.call(this, a, -1, Ae)
    }
    w(ze, H);

    function Be(a) {
        H.call(this, a)
    }
    w(Be, H);

    function Ce(a) {
        H.call(this, a)
    }
    w(Ce, H);

    function De(a) {
        H.call(this, a)
    }
    w(De, H);

    function Fe(a) {
        H.call(this, a)
    }
    w(Fe, H);
    var xe = [1, 2, 5, 7],
        Ae = [2, 5, 6, 11];

    function Ge(a) {
        H.call(this, a)
    }
    w(Ge, H);

    function He(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    };

    function N(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }

    function O(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? 0 : b
    }

    function Ie(a, b) {
        b = void 0 === b ? [] : b;
        this.h = a;
        this.defaultValue = b
    };
    var Je = new N(1084),
        Ke = new N(1082, !0),
        Le = new O(62, .001),
        Me = new O(1130, 100),
        Ne = new function(a, b) {
            this.h = a;
            this.defaultValue = void 0 === b ? "" : b
        }(14),
        Oe = new O(1114, 1),
        Pe = new O(1110),
        Qe = new O(1111),
        Re = new O(1112),
        Se = new O(1113),
        Te = new O(1104),
        Ue = new O(1108),
        Ve = new O(1106),
        We = new O(1107),
        Xe = new O(1105),
        Ye = new O(1115, 1),
        Ze = new N(1121),
        $e = new N(1180),
        af = new N(1144),
        bf = new N(1143),
        cf = new N(1186),
        df = new N(316),
        ef = new N(313),
        ff = new N(369),
        gf = new N(1093),
        hf = new O(1098),
        jf = new N(1129, !0),
        kf = new N(1128),
        lf = new N(1026),
        mf = new N(1090),
        nf = new N(1177),
        of = new N(1053, !0),
        pf = new N(1162),
        qf = new N(1175),
        rf = new N(1120),
        sf = new N(1100, !0),
        tf = new N(1171),
        uf = new O(1046),
        vf = new N(218),
        wf = new N(217),
        xf = new N(1179),
        yf = new N(227),
        zf = new N(1198),
        Af = new N(282),
        Bf = new N(1086),
        Cf = new O(1079, 5),
        Df = new N(1141, !0),
        Ef = new N(1197),
        Ff = new N(1190),
        Gf = new Ie(1934, ["AzoawhTRDevLR66Y6MROu167EDncFPBvcKOaQispTo9ouEt5LvcBjnRFqiAByRT+2cDHG1Yj4dXwpLeIhc98/gIAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
            "A6+nc62kbJgC46ypOwRsNW6RkDn2x7tgRh0wp7jb3DtFF7oEhu1hhm4rdZHZ6zXvnKZLlYcBlQUImC4d3kKihAcAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A/9La288e7MDEU2ifusFnMg1C2Ij6uoa/Z/ylwJIXSsWfK37oESIPbxbt4IU86OGqDEPnNVruUiMjfKo65H/CQwAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
        ]),
        Hf = new N(203),
        If = new N(84),
        Jf = new N(1928),
        Kf = new N(1941),
        Lf = new N(370946349),
        Mf = new N(392736476),
        Nf = new O(406149835),
        Of = new Ie(1932),
        Pf = new O(1935);

    function P(a) {
        var b = "ua";
        if (a.ua && a.hasOwnProperty(b)) return a.ua;
        b = new a;
        return a.ua = b
    };

    function Qf() {
        var a = {};
        this.i = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.l = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.h = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.m = function() {}
    }

    function Q(a) {
        return P(Qf).i(a.h, a.defaultValue)
    }

    function R(a) {
        return P(Qf).j(a.h, a.defaultValue)
    }

    function Rf() {
        return P(Qf).l(Ne.h, Ne.defaultValue)
    };

    function Sf(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        He(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };

    function Tf(a, b, c) {
        function d(f) {
            f = Uf(f);
            return null == f ? !1 : c > f
        }

        function e(f) {
            f = Uf(f);
            return null == f ? !1 : c < f
        }
        switch (b) {
            case 0:
                return {
                    init: Vf(a.previousSibling, e),
                    la: function(f) {
                        return Vf(f.previousSibling, e)
                    },
                    oa: 0
                };
            case 2:
                return {
                    init: Vf(a.lastChild, e),
                    la: function(f) {
                        return Vf(f.previousSibling, e)
                    },
                    oa: 0
                };
            case 3:
                return {
                    init: Vf(a.nextSibling, d),
                    la: function(f) {
                        return Vf(f.nextSibling, d)
                    },
                    oa: 3
                };
            case 1:
                return {
                    init: Vf(a.firstChild, d),
                    la: function(f) {
                        return Vf(f.nextSibling, d)
                    },
                    oa: 3
                }
        }
        throw Error("Un-handled RelativePosition: " +
            b);
    }

    function Uf(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Vf(a, b) {
        return a && b(a) ? a : null
    };
    var Wf = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };

    function Xf(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = Xc("IMG", a.document);
        if (c) {
            var e = function() {
                if (c) {
                    var f = a.google_image_requests,
                        g = Ta(f, d);
                    0 <= g && Array.prototype.splice.call(f, g, 1)
                }
                Lc(d, "load", e);
                Lc(d, "error", e)
            };
            Kc(d, "load", e);
            Kc(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    }

    function Yf(a) {
        var b = void 0 === b ? !1 : b;
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=dtt_err";
        ed(a, function(d, e) {
            d && (c += "&" + e + "=" + encodeURIComponent(d))
        });
        Zf(c, b)
    }

    function Zf(a, b) {
        var c = window;
        b = void 0 === b ? !1 : b;
        c.fetch ? c.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : Xf(c, a, void 0 === b ? !1 : b)
    };

    function $f() {
        this.j = "&";
        this.i = {};
        this.l = 0;
        this.h = []
    }

    function ag(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function bg(a, b, c, d, e) {
        var f = [];
        ed(a, function(g, h) {
            (g = cg(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function cg(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(cg(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(bg(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function dg(a, b) {
        var c = "https://pagead2.googlesyndication.com" + b,
            d = eg(a) - b.length;
        if (0 > d) return "";
        a.h.sort(function(m, q) {
            return m - q
        });
        b = null;
        for (var e = "", f = 0; f < a.h.length; f++)
            for (var g = a.h[f], h = a.i[g], k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                var l = bg(h[k], a.j, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.j;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }

    function eg(a) {
        var b = 1,
            c;
        for (c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    };

    function fg() {
        this.h = Math.random()
    }

    function gg() {
        var a = hg,
            b = x.google_srt;
        0 <= b && 1 >= b && (a.h = b)
    }

    function ig(a, b, c, d, e) {
        if ((d ? a.h : Math.random()) < (e || .01)) try {
            if (c instanceof $f) var f = c;
            else f = new $f, ed(c, function(h, k) {
                var l = f,
                    m = l.l++;
                h = ag(k, h);
                l.h.push(m);
                l.i[m] = h
            });
            var g = dg(f, "/pagead/gen_204?id=" + b + "&");
            g && Xf(x, g, !1)
        } catch (h) {}
    };
    var jg = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5
    };

    function kg() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new lg;
        this.sideRailProcessedFixedElements = new p.Set;
        this.sideRailAvailableSpace = new p.Map
    }

    function mg(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new p.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new p.Map)) : a.google_reactive_ads_global_state = new kg;
        return a.google_reactive_ads_global_state
    }

    function lg() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };

    function ng(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function og(a) {
        return ng(a).clientWidth
    };

    function pg(a) {
        return null !== a && void 0 !== a
    }
    var qg = void 0;

    function rg(a, b) {
        var c = qg;
        qg = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };

    function sg(a) {
        return "string" === typeof a
    }

    function tg(a) {
        return void 0 === a
    };

    function ug(a) {
        H.call(this, a, -1, vg)
    }
    w(ug, H);
    var vg = [2, 8],
        wg = [3, 4, 5],
        xg = [6, 7];
    var yg;
    yg = {
        Ub: 0,
        gb: 3,
        hb: 4,
        ib: 5
    };
    var zg = yg.gb,
        Ag = yg.hb,
        Bg = yg.ib;

    function Cg(a) {
        return null != a ? !a : a
    }

    function Dg(a, b) {
        for (var c = !1, d = 0; d < a.length; d++) {
            var e = a[d]();
            if (e === b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function Eg(a, b) {
        var c = G(a, ug, 2);
        if (!c.length) return Fg(a, b);
        a = D(a, 1, 0);
        if (1 === a) return Cg(Eg(c[0], b));
        c = Wa(c, function(d) {
            return function() {
                return Eg(d, b)
            }
        });
        switch (a) {
            case 2:
                return Dg(c, !1);
            case 3:
                return Dg(c, !0)
        }
    }

    function Fg(a, b) {
        var c = Sb(a, wg);
        a: {
            switch (c) {
                case zg:
                    var d = Xb(a, 3, wg);
                    break a;
                case Ag:
                    d = Xb(a, 4, wg);
                    break a;
                case Bg:
                    d = Xb(a, 5, wg);
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b.apply(null, la(Mb(a, 8)))
            } catch (f) {
                return
            }
            b = D(a, 1, 0);
            if (4 === b) return !!e;
            d = null != e;
            if (5 === b) return d;
            if (12 === b) a = Wb(a, Jb(a, xg, 7));
            else a: {
                switch (c) {
                    case Ag:
                        a = Ob(a, Jb(a, xg, 6));
                        break a;
                    case Bg:
                        a = Wb(a, Jb(a, xg, 7));
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 === b) return e === a;
                if (9 === b) return null != e && 0 === Ma(String(e), a);
                if (d) switch (b) {
                    case 7:
                        return e <
                            a;
                    case 8:
                        return e > a;
                    case 12:
                        return sg(a) && sg(e) && (new RegExp(a)).test(e);
                    case 10:
                        return null != e && -1 === Ma(String(e), a);
                    case 11:
                        return null != e && 1 === Ma(String(e), a)
                }
            }
        }
    }

    function Gg(a, b) {
        return !a || !(!b || !Eg(a, b))
    };

    function Hg(a) {
        H.call(this, a, -1, Ig)
    }
    w(Hg, H);
    var Ig = [4];

    function Jg(a) {
        H.call(this, a)
    }
    w(Jg, H);

    function Kg(a) {
        H.call(this, a, -1, Lg)
    }
    w(Kg, H);
    var Lg = [5],
        Mg = [1, 2, 3, 6, 7];

    function Ng(a) {
        a.Za.apply(a, la(ua.apply(1, arguments).map(function(b) {
            return {
                fb: 4,
                message: b
            }
        })))
    }

    function Og(a) {
        a.Za.apply(a, la(ua.apply(1, arguments).map(function(b) {
            return {
                fb: 7,
                message: b
            }
        })))
    };

    function Pg(a) {
        return JSON.stringify([a.map(function(b) {
            var c = {};
            return [(c[b.fb] = b.message.toJSON(), c)]
        })])
    };

    function Qg(a, b) {
        if (p.globalThis.fetch) p.globalThis.fetch(a, {
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

    function Rg(a, b, c, d) {
        this.m = a;
        this.l = b;
        this.v = c;
        this.j = d;
        this.i = [];
        this.h = null
    }

    function Sg(a) {
        var b = Pg(a.i);
        a.l(a.m + "?e=1", b);
        a.i = [];
        a.h = null
    }
    Rg.prototype.Za = function() {
        var a = this;
        this.i.push.apply(this.i, la(ua.apply(0, arguments)));
        this.i.length >= this.j ? (null !== this.h && clearTimeout(this.h), this.h = setTimeout(function() {
            Sg(a)
        }, 0)) : null === this.h && (this.h = setTimeout(function() {
            Sg(a)
        }, this.v))
    };

    function Tg(a, b) {
        Rg.call(this, "https://pagead2.googlesyndication.com/pagead/ping", Qg, void 0 === a ? 1E3 : a, void 0 === b ? 100 : b)
    }
    w(Tg, Rg);

    function Ug(a) {
        H.call(this, a, -1, Vg)
    }
    w(Ug, H);

    function Wg(a, b) {
        return Tb(a, 1, b)
    }

    function Xg(a, b) {
        return Vb(a, 2, b)
    }

    function Yg(a, b) {
        return Pb(a, 4, b)
    }

    function Zg(a, b) {
        return Vb(a, 5, b)
    }

    function $g(a, b) {
        return Qb(a, 6, b)
    }

    function ah(a) {
        H.call(this, a)
    }
    w(ah, H);
    ah.prototype.X = function() {
        return D(this, 1, 0)
    };

    function bh(a, b) {
        return Qb(a, 1, b)
    }

    function ch(a, b) {
        return Qb(a, 2, b)
    }

    function dh(a) {
        H.call(this, a)
    }
    w(dh, H);
    var Vg = [2, 4, 5],
        eh = [1, 2];

    function fh(a) {
        H.call(this, a, -1, gh)
    }
    w(fh, H);

    function hh(a) {
        H.call(this, a, -1, ih)
    }
    w(hh, H);
    var gh = [2, 3],
        ih = [5],
        jh = [1, 2, 3, 4];

    function kh(a) {
        H.call(this, a)
    }
    w(kh, H);
    kh.prototype.getTagSessionCorrelator = function() {
        return D(this, 2, 0)
    };

    function lh(a) {
        var b = new kh;
        return Ub(b, 4, mh, a)
    }
    var mh = [4, 5, 7];

    function nh(a, b, c) {
        var d = void 0 === d ? new Tg(b) : d;
        this.i = a;
        this.m = c;
        this.j = d;
        this.h = [];
        this.l = 0 < this.i && dd() < 1 / this.i
    }

    function oh(a, b, c, d, e, f) {
        var g = ch(bh(new ah, b), c);
        b = $g(Xg(Wg(Zg(Yg(new Ug, d), e), g), a.h), f);
        b = lh(b);
        a.l && Ng(a.j, ph(a, b));
        if (1 === f || 3 === f || 4 === f && !a.h.some(function(h) {
                return h.X() === g.X() && D(h, 2, 0) === c
            })) a.h.push(g), 100 < a.h.length && a.h.shift()
    }

    function qh(a, b, c, d) {
        if (a.m) {
            var e = new fh;
            b = Vb(e, 2, b);
            c = Vb(b, 3, c);
            d && Qb(c, 1, d);
            d = new kh;
            d = Ub(d, 7, mh, c);
            a.l && Ng(a.j, ph(a, d))
        }
    }

    function ph(a, b) {
        b = Qb(b, 1, Date.now());
        var c = qd(window);
        b = Qb(b, 2, c);
        return Qb(b, 6, a.i)
    };

    function rh() {
        var a = {};
        this.h = (a[zg] = {}, a[Ag] = {}, a[Bg] = {}, a)
    };
    var sh = /^true$/.test("false");

    function th(a, b) {
        switch (b) {
            case 1:
                return Xb(a, 1, Mg);
            case 2:
                return Xb(a, 2, Mg);
            case 3:
                return Xb(a, 3, Mg);
            case 6:
                return Xb(a, 6, Mg);
            default:
                return null
        }
    }

    function uh(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return E(a, 1);
            case 7:
                return Wb(a, 3);
            case 2:
                return Ob(a, 2);
            case 3:
                return Wb(a, 3);
            case 6:
                return Mb(a, 4);
            default:
                return null
        }
    }
    var vh = Ic(function() {
        if (!sh) return {};
        try {
            var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch (b) {}
        return {}
    });

    function wh(a, b, c, d) {
        var e = d = void 0 === d ? 0 : d,
            f, g;
        P(xh).j[e] = null != (g = null == (f = P(xh).j[e]) ? void 0 : f.add(b)) ? g : (new p.Set).add(b);
        e = vh();
        if (null != e[b]) return e[b];
        b = yh(d)[b];
        if (!b) return c;
        b = new Kg(b);
        b = zh(b);
        a = uh(b, a);
        return null != a ? a : c
    }

    function zh(a) {
        var b = P(rh).h;
        if (b) {
            var c = Za(G(a, Jg, 5), function(d) {
                return Gg(F(d, ug, 1), b)
            });
            if (c) return F(c, Hg, 2)
        }
        return F(a, Hg, 4)
    }

    function xh() {
        this.i = {};
        this.l = [];
        this.j = {};
        this.h = new p.Map
    }

    function Ah(a, b, c) {
        return !!wh(1, a, void 0 === b ? !1 : b, c)
    }

    function Bh(a, b, c) {
        b = void 0 === b ? 0 : b;
        a = Number(wh(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function Ch(a, b, c) {
        return wh(3, a, void 0 === b ? "" : b, c)
    }

    function Dh(a, b, c) {
        b = void 0 === b ? [] : b;
        return wh(6, a, b, c)
    }

    function yh(a) {
        return P(xh).i[a] || (P(xh).i[a] = {})
    }

    function Eh(a, b) {
        var c = yh(b);
        ed(a, function(d, e) {
            return c[e] = d
        })
    }

    function Fh(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = [],
            g = [];
        Ua(b, function(h) {
            var k = yh(h);
            Ua(a, function(l) {
                var m = Sb(l, Mg),
                    q = th(l, m);
                if (q) {
                    var r, A, K;
                    var B = null != (K = null == (r = P(xh).h.get(h)) ? void 0 : null == (A = r.get(q)) ? void 0 : A.slice(0)) ? K : [];
                    a: {
                        r = new hh;
                        switch (m) {
                            case 1:
                                Rb(r, 1, jh, q);
                                break;
                            case 2:
                                Rb(r, 2, jh, q);
                                break;
                            case 3:
                                Rb(r, 3, jh, q);
                                break;
                            case 6:
                                Rb(r, 4, jh, q);
                                break;
                            default:
                                m = void 0;
                                break a
                        }
                        Pb(r, 5, B);m = r
                    }
                    if (B = m) {
                        var I;
                        B = !(null == (I = P(xh).j[h]) || !I.has(q))
                    }
                    B && f.push(m);
                    if (I = m) {
                        var T;
                        I = !(null == (T = P(xh).h.get(h)) ||
                            !T.has(q))
                    }
                    I && g.push(m);
                    e || (T = P(xh), T.h.has(h) || T.h.set(h, new p.Map), T.h.get(h).has(q) || T.h.get(h).set(q, []), d && T.h.get(h).get(q).push(d));
                    k[q] = l.toJSON()
                }
            })
        });
        (f.length || g.length) && qh(c, f, g, null != d ? d : void 0)
    }

    function Gh(a, b) {
        var c = yh(b);
        Ua(a, function(d) {
            var e = new Kg(d),
                f = Sb(e, Mg);
            (e = th(e, f)) && (c[e] || (c[e] = d))
        })
    }

    function Hh() {
        return Wa(t(Object, "keys").call(Object, P(xh).i), function(a) {
            return Number(a)
        })
    }

    function Ih(a) {
        $a(P(xh).l, a) || Eh(yh(4), a)
    };

    function Jh(a) {
        this.methodName = a
    }
    var Kh = new Jh(1),
        Lh = new Jh(16),
        Mh = new Jh(15),
        Nh = new Jh(2),
        Oh = new Jh(3),
        Ph = new Jh(4),
        Qh = new Jh(5),
        Rh = new Jh(6),
        Sh = new Jh(7),
        Th = new Jh(8),
        Uh = new Jh(9),
        Vh = new Jh(10),
        Wh = new Jh(11),
        Xh = new Jh(12),
        Yh = new Jh(13),
        Zh = new Jh(14);

    function $h(a, b, c) {
        c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
            value: b
        })
    }

    function ei(a, b, c) {
        return b[a.methodName] || c || function() {}
    }

    function fi(a) {
        $h(Qh, Ah, a);
        $h(Rh, Bh, a);
        $h(Sh, Ch, a);
        $h(Th, Dh, a);
        $h(Yh, Gh, a);
        $h(Mh, Ih, a)
    }

    function gi(a) {
        $h(Ph, function(b) {
            P(rh).h = b
        }, a);
        $h(Uh, function(b, c) {
            var d = P(rh);
            d.h[zg][b] || (d.h[zg][b] = c)
        }, a);
        $h(Vh, function(b, c) {
            var d = P(rh);
            d.h[Ag][b] || (d.h[Ag][b] = c)
        }, a);
        $h(Wh, function(b, c) {
            var d = P(rh);
            d.h[Bg][b] || (d.h[Bg][b] = c)
        }, a);
        $h(Zh, function(b) {
            for (var c = P(rh), d = v([zg, Ag, Bg]), e = d.next(); !e.done; e = d.next()) e = e.value, t(Object, "assign").call(Object, c.h[e], b[e])
        }, a)
    }

    function hi(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function ii() {
        this.l = function() {};
        this.h = function() {};
        this.j = function() {};
        this.i = function() {
            return []
        }
    }

    function ji(a, b, c) {
        a.l = ei(Kh, b, function() {});
        a.j = function(d) {
            ei(Nh, b, function() {
                return []
            })(d, c)
        };
        a.i = function() {
            return ei(Oh, b, function() {
                return []
            })(c)
        };
        a.h = function(d) {
            ei(Lh, b, function() {})(d, c)
        }
    };

    function ki(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    }

    function li(a) {
        return !!(a.error && a.meta && a.id)
    };
    var mi = null;

    function ni() {
        if (null === mi) {
            mi = "";
            try {
                var a = "";
                try {
                    a = x.top.location.hash
                } catch (c) {
                    a = x.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    mi = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return mi
    };

    function oi() {
        var a = void 0 === a ? x : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function pi() {
        var a = void 0 === a ? x : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function qi(a, b) {
        var c = pi() || oi();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.taskId = this.slotId = void 0
    };
    var ri = x.performance,
        si = !!(ri && ri.mark && ri.measure && ri.clearMarks),
        ti = Ic(function() {
            var a;
            if (a = si) a = ni(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function ui() {
        this.i = [];
        this.j = x || x;
        var a = null;
        x && (x.google_js_reporting_queue = x.google_js_reporting_queue || [], this.i = x.google_js_reporting_queue, a = x.google_measure_js_timing);
        this.h = ti() || (null != a ? a : 1 > Math.random())
    }

    function vi(a) {
        a && ri && ti() && (ri.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), ri.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    ui.prototype.start = function(a, b) {
        if (!this.h) return null;
        a = new qi(a, b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        ri && ti() && ri.mark(b);
        return a
    };
    ui.prototype.end = function(a) {
        if (this.h && "number" === typeof a.value) {
            a.duration = (pi() || oi()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            ri && ti() && ri.mark(b);
            !this.h || 2048 < this.i.length || this.i.push(a)
        }
    };
    var wi = ja(["https://www.googletagservices.com/console/host/host.js"]),
        xi = ja(["https://www.googletagservices.com/console/panel/index.html"]),
        yi = ja(["https://www.googletagservices.com/console/overlay/index.html"]);
    yd(wi);
    yd(xi);
    yd(yi);

    function zi(a, b) {
        do {
            var c = Yc(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    };

    function Ai(a, b) {
        for (var c = ["width", "height"], d = 0; d < c.length; d++) {
            var e = "google_ad_" + c[d];
            if (!b.hasOwnProperty(e)) {
                var f = J(a[c[d]]);
                f = null === f ? null : Math.round(f);
                null != f && (b[e] = f)
            }
        }
    }

    function Bi(a, b) {
        return !((id.test(b.google_ad_width) || hd.test(a.style.width)) && (id.test(b.google_ad_height) || hd.test(a.style.height)))
    }

    function Ci(a, b) {
        return (a = Di(a, b)) ? a.y : 0
    }

    function Di(a, b) {
        try {
            var c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (e) {
            return null
        }
    }

    function Ei(a) {
        var b = 0,
            c;
        for (c in Wf) - 1 != a.indexOf(c) && (b |= Wf[c]);
        return b
    }

    function Fi(a, b, c, d, e) {
        if (a !== a.top) return Vc(a) ? 3 : 16;
        if (!(488 > og(a))) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        var f = og(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = "true" != e.google_full_width_responsive) a: {
                c = og(a);
                for (b = b.parentElement; b; b = b.parentElement)
                    if ((d = Yc(b, a)) && (e = J(d.width)) && !(e >= c) && "visible" != d.overflow) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function Gi(a, b, c, d) {
        var e = Fi(b, c, a, .3, d);
        !0 !== e ? a = e : "true" == d.google_full_width_responsive || zi(c, b) ? (b = og(b), a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
        return a
    }

    function Hi(a, b, c) {
        a = a.style;
        "rtl" == b ? a.marginRight = c : a.marginLeft = c
    }

    function Ii(a, b) {
        if (3 == b.nodeType) return /\S/.test(b.data);
        if (1 == b.nodeType) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            try {
                var c = Yc(b, a)
            } catch (d) {}
            return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
        }
        return !1
    }

    function Ji(a, b, c) {
        a = Di(b, a);
        return "rtl" == c ? -a.x : a.x
    }

    function Ki(a, b) {
        var c;
        c = (c = b.parentElement) ? (c = Yc(c, a)) ? c.direction : "" : "";
        if (c) {
            b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
            b.style.borderSpacing = b.style.padding = "0";
            Hi(b, c, "0px");
            b.style.width = og(a) + "px";
            if (0 !== Ji(a, b, c)) {
                Hi(b, c, "0px");
                var d = Ji(a, b, c);
                Hi(b, c, -1 * d + "px");
                a = Ji(a, b, c);
                0 !== a && a !== d && Hi(b, c, d / (a - d) * d + "px")
            }
            b.style.zIndex = 30
        }
    };

    function Li(a, b) {
        this.l = a;
        this.j = b
    }
    Li.prototype.minWidth = function() {
        return this.l
    };
    Li.prototype.height = function() {
        return this.j
    };
    Li.prototype.h = function(a) {
        return 300 < a && 300 < this.j ? this.l : Math.min(1200, Math.round(a))
    };
    Li.prototype.i = function() {};

    function Mi(a, b, c, d) {
        d = void 0 === d ? function(f) {
            return f
        } : d;
        var e;
        return a.style && a.style[c] && d(a.style[c]) || (e = Yc(a, b)) && e[c] && d(e[c]) || null
    }

    function Ni(a) {
        return function(b) {
            return b.minWidth() <= a
        }
    }

    function Oi(a, b, c, d) {
        var e = a && Pi(c, b),
            f = Qi(b, d);
        return function(g) {
            return !(e && g.height() >= f)
        }
    }

    function Ri(a) {
        return function(b) {
            return b.height() <= a
        }
    }

    function Pi(a, b) {
        return Ci(a, b) < ng(b).clientHeight - 100
    }

    function Si(a, b) {
        var c = Mi(b, a, "height", J);
        if (c) return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = Mi(b, a, "height", J);
        b.style.height = d;
        if (c) return c;
        c = Infinity;
        do(d = b.style && J(b.style.height)) && (c = Math.min(c, d)), (d = Mi(b, a, "maxHeight", J)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }

    function Qi(a, b) {
        var c = 0 == Ad(a);
        return b && c ? Math.max(250, 2 * ng(a).clientHeight / 3) : 250
    };
    var S = {},
        Ti = (S.google_ad_channel = !0, S.google_ad_client = !0, S.google_ad_host = !0, S.google_ad_host_channel = !0, S.google_adtest = !0, S.google_tag_for_child_directed_treatment = !0, S.google_tag_for_under_age_of_consent = !0, S.google_tag_partner = !0, S.google_restrict_data_processing = !0, S.google_page_url = !0, S.google_debug_params = !0, S.google_adbreak_test = !0, S.google_ad_frequency_hint = !0, S.google_admob_interstitial_slot = !0, S.google_admob_rewarded_slot = !0, S.google_max_ad_content_rating = !0, S.google_traffic_source = !0,
            S),
        Ui = RegExp("(^| )adsbygoogle($| )");

    function Vi(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = Mc(d.bc);
            a[e] = d.value
        }
    };

    function Wi(a, b, c, d) {
        this.l = a;
        this.i = b;
        this.j = c;
        this.h = d
    }
    Wi.prototype.query = function(a) {
        var b = [];
        try {
            b = a.querySelectorAll(this.l)
        } catch (f) {}
        if (!b.length) return [];
        a = ab(b);
        a = Xi(this, a);
        "number" === typeof this.i && (b = this.i, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
        if ("number" === typeof this.j) {
            b = [];
            for (var c = 0; c < a.length; c++) {
                var d = Yi(a[c]),
                    e = this.j;
                0 > e && (e += d.length);
                0 <= e && e < d.length && b.push(d[e])
            }
            a = b
        }
        return a
    };
    Wi.prototype.toString = function() {
        return JSON.stringify({
            nativeQuery: this.l,
            occurrenceIndex: this.i,
            paragraphIndex: this.j,
            ignoreMode: this.h
        })
    };

    function Xi(a, b) {
        if (null == a.h) return b;
        switch (a.h) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.h);
        }
    }

    function Yi(a) {
        var b = [];
        Ld(a.getElementsByTagName("p"), function(c) {
            100 <= Zi(c) && b.push(c)
        });
        return b
    }

    function Zi(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        Ld(a.childNodes, function(c) {
            b += Zi(c)
        });
        return b
    }

    function $i(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    };
    var aj = ja(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);

    function bj() {
        var a = void 0 === a ? "jserror" : a;
        var b = void 0 === b ? .01 : b;
        var c = void 0 === c ? yd(aj) : c;
        this.j = a;
        this.h = null;
        this.l = !1;
        this.v = Math.random();
        this.m = b;
        this.i = this.I;
        this.B = c
    }
    n = bj.prototype;
    n.ab = function(a) {
        this.h = a
    };
    n.cb = function(a) {
        this.l = a
    };
    n.bb = function(a) {
        this.i = a
    };
    n.I = function(a, b, c, d, e) {
        c = void 0 === c ? this.m : c;
        e = void 0 === e ? this.j : e;
        if ((this.l ? this.v : Math.random()) > c) return !1;
        li(b) || (b = new ki(b, {
            context: a,
            id: e
        }));
        if (d || this.h) b.meta = {}, this.h && this.h(b.meta), d && d(b.meta);
        x.google_js_errors = x.google_js_errors || [];
        x.google_js_errors.push(b);
        x.error_rep_loaded || (Wc(x.document, zc(yc(this.B).toString())), x.error_rep_loaded = !0);
        return !1
    };
    n.pa = function(a, b, c) {
        try {
            return b()
        } catch (d) {
            if (!this.i(a, d, this.m, c, this.j)) throw d;
        }
    };
    n.Va = function(a, b) {
        var c = this;
        return function() {
            var d = ua.apply(0, arguments);
            return c.pa(a, function() {
                return b.apply(void 0, d)
            })
        }
    };
    n.Wa = function(a, b) {
        var c = this;
        b.catch(function(d) {
            d = d ? d : "unknown rejection";
            c.I(a, d instanceof Error ? d : Error(d))
        })
    };

    function cj(a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    }

    function dj(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = d || window,
            g = "undefined" !== typeof queueMicrotask;
        return function() {
            e && g && queueMicrotask(function() {
                f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                f.google_rum_task_id_counter += 1
            });
            var h = pi(),
                k = 3;
            try {
                var l = b.apply(this, arguments)
            } catch (m) {
                k = 13;
                if (!c) throw m;
                c(a, m)
            } finally {
                f.google_measure_js_timing && h && cj(t(Object, "assign").call(Object, {}, {
                    label: a.toString(),
                    value: h,
                    duration: (pi() || 0) - h,
                    type: k
                }, e && g && {
                    taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter ||
                        1
                }), f)
            }
            return l
        }
    }

    function ej(a, b) {
        return dj(a, b, function(c, d) {
            (new bj).I(c, d)
        }, void 0, !1)
    };

    function fj(a, b, c) {
        return dj(a, b, void 0, c, !0).apply()
    }

    function gj(a) {
        if (!a) return null;
        var b = z(a, 7);
        if (z(a, 1) || a.getId() || 0 < Mb(a, 4).length) {
            var c = a.getId();
            b = Mb(a, 4);
            var d = z(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + $i(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + $i(b[c]);
            a = (b = e) ? new Wi(b, z(a, 2), z(a, 5), hj(z(a, 6))) : null
        } else a = b ? new Wi(b, z(a, 2), z(a, 5), hj(z(a, 6))) : null;
        return a
    }
    var ij = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function hj(a) {
        return null == a ? a : ij[a]
    }
    var jj = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function kj(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function lj(a) {
        a = kj(a);
        return a.optimization = a.optimization || {}
    };

    function mj(a) {
        switch (z(a, 8)) {
            case 1:
            case 2:
                if (null == a) var b = null;
                else b = F(a, M, 1), null == b ? b = null : (a = z(a, 2), b = null == a ? null : new Yd({
                    Ka: [b],
                    Ya: a
                }));
                return null != b ? Rd(b) : Td(Error("Missing dimension when creating placement id"));
            case 3:
                return Td(Error("Missing dimension when creating placement id"));
            default:
                return Td(Error("Invalid type: " + z(a, 8)))
        }
    };

    function nj(a, b) {
        function c() {
            d.push({
                anchor: e.anchor,
                position: e.position
            });
            return e.anchor == b.anchor && e.position == b.position
        }
        for (var d = [], e = a; e;) {
            switch (e.position) {
                case 1:
                    if (c()) return d;
                    e.position = 2;
                case 2:
                    if (c()) return d;
                    if (e.anchor.firstChild) {
                        e = {
                            anchor: e.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else e.position = 3;
                case 3:
                    if (c()) return d;
                    e.position = 4;
                case 4:
                    if (c()) return d
            }
            for (; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body;) {
                e = {
                    anchor: e.anchor.parentNode,
                    position: 3
                };
                if (c()) return d;
                e.position = 4;
                if (c()) return d
            }
            e && e.anchor.nextSibling ? e = {
                anchor: e.anchor.nextSibling,
                position: 1
            } : e = null
        }
        return d
    };

    function oj(a, b) {
        this.i = a;
        this.h = b
    }

    function pj(a, b) {
        var c = new Wd,
            d = new Vd;
        b.forEach(function(e) {
            if (Yb(e, ke, 1, ne)) {
                e = Yb(e, ke, 1, ne);
                if (F(e, ie, 1) && F(F(e, ie, 1), M, 1) && F(e, ie, 2) && F(F(e, ie, 2), M, 1)) {
                    var f = qj(a, F(F(e, ie, 1), M, 1)),
                        g = qj(a, F(F(e, ie, 2), M, 1));
                    if (f && g)
                        for (f = v(nj({
                                anchor: f,
                                position: z(F(e, ie, 1), 2)
                            }, {
                                anchor: g,
                                position: z(F(e, ie, 2), 2)
                            })), g = f.next(); !g.done; g = f.next()) g = g.value, c.set(Ba(g.anchor), g.position)
                }
                F(e, ie, 3) && F(F(e, ie, 3), M, 1) && (f = qj(a, F(F(e, ie, 3), M, 1))) && c.set(Ba(f), z(F(e, ie, 3), 2))
            } else Yb(e, le, 2, ne) ? rj(a, Yb(e, le, 2, ne), c) : Yb(e,
                me, 3, ne) && sj(a, Yb(e, me, 3, ne), d)
        });
        return new oj(c, d)
    }

    function rj(a, b, c) {
        F(b, ie, 2) ? (b = F(b, ie, 2), (a = qj(a, F(b, M, 1))) && c.set(Ba(a), z(b, 2))) : F(b, M, 1) && (a = tj(a, F(b, M, 1))) && a.forEach(function(d) {
            d = Ba(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3)
        })
    }

    function sj(a, b, c) {
        F(b, M, 1) && (a = tj(a, F(b, M, 1))) && a.forEach(function(d) {
            c.add(Ba(d))
        })
    }

    function qj(a, b) {
        return (a = tj(a, b)) && 0 < a.length ? a[0] : null
    }

    function tj(a, b) {
        return (b = gj(b)) ? b.query(a) : null
    };

    function uj() {
        this.h = new p.Set
    }

    function vj(a) {
        a = wj(a);
        return a.has("all") || a.has("after")
    }

    function xj(a) {
        a = wj(a);
        return a.has("all") || a.has("before")
    }

    function yj(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (zj(b)) return !0;
            if (a.h.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(function(d) {
            return a.h.add(d)
        });
        return !1
    }

    function zj(a) {
        var b = wj(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }

    function wj(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new p.Set(a.split("|")) : new p.Set
    };

    function Aj(a, b) {
        if (!a) return !1;
        a = Yc(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function Bj(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function Cj(a) {
        return !!a.nextSibling || !!a.parentNode && Cj(a.parentNode)
    };

    function Dj(a) {
        a = void 0 === a ? window : a;
        a = a.googletag;
        return (null == a ? 0 : a.apiReady) ? a : void 0
    };

    function Ej(a) {
        var b = Dj(a);
        return b ? Va(Wa(b.pubads().getSlots(), function(c) {
            return a.document.getElementById(c.getSlotElementId())
        }), function(c) {
            return null != c
        }) : null
    }

    function Fj(a, b) {
        return ab(a.document.querySelectorAll(b))
    }

    function Gj(a) {
        var b = [];
        a = v(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            for (var d = !0, e = 0; e < b.length; e++) {
                var f = b[e];
                if (f.contains(c)) {
                    d = !1;
                    break
                }
                if (c.contains(f)) {
                    d = !1;
                    b[e] = c;
                    break
                }
            }
            d && b.push(c)
        }
        return b
    };

    function Hj(a, b, c, d, e) {
        this.h = a;
        this.H = b;
        this.j = c;
        this.m = e || null;
        this.v = (this.D = d) ? pj(a.document, G(d, je, 5)) : pj(a.document, []);
        this.B = new uj;
        this.i = 0;
        this.l = !1
    }

    function Ij(a, b) {
        if (a.l) return !0;
        a.l = !0;
        var c = G(a.j, pe, 1);
        a.i = 0;
        var d = Jj(a.D);
        var e = a.h;
        try {
            var f = e.localStorage.getItem("google_ama_settings");
            var g = f ? ac(Ge, f) : null
        } catch (ad) {
            g = null
        }
        var h = null !== g && E(g, 2, !1);
        g = kj(e);
        h && (g.eatf = !0, vd(7, [!0, 0, !1]));
        var k = Q(kf) || Q(jf);
        f = Q(jf);
        if (k) {
            b: {
                var l = {
                        ob: !1,
                        pb: !1
                    },
                    m = Fj(e, ".google-auto-placed"),
                    q = Fj(e, "ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]"),
                    r = Fj(e, "ins.adsbygoogle[data-ad-format=autorelaxed]");
                var A = (Ej(e) || Fj(e, "div[id^=div-gpt-ad]")).concat(Fj(e,
                    "iframe[id^=google_ads_iframe]"));
                var K = Fj(e, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"),
                    B = Fj(e, "ins.adsbygoogle-ablated-ad-slot"),
                    I = Fj(e, "div.googlepublisherpluginad"),
                    T = Fj(e, "html > ins.adsbygoogle");k = [].concat(Fj(e, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"), Fj(e, "body ins.adsbygoogle"));h = [];l = v([
                    [l.Wb, m],
                    [l.ob, q],
                    [l.Zb, r],
                    [l.Xb, A],
                    [l.ac, K],
                    [l.Vb, B],
                    [l.Yb, I],
                    [l.pb, T]
                ]);
                for (m = l.next(); !m.done; m = l.next()) q = v(m.value),
                m = q.next().value,
                q = q.next().value,
                !1 === m ? h = h.concat(q) : k = k.concat(q);k = Gj(k);l = Gj(h);h = k.slice(0);k = v(l);
                for (l = k.next(); !l.done; l = k.next())
                    for (l = l.value, m = 0; m < h.length; m++)(l.contains(h[m]) || h[m].contains(l)) &&
                        h.splice(m, 1);e = ng(e).clientHeight;
                for (k = 0; k < h.length; k++)
                    if (l = h[k].getBoundingClientRect(), !(0 === l.height && !f || l.top > e)) {
                        e = !0;
                        break b
                    }
                e = !1
            }
            g = e ? g.eatfAbg = !0 : !1
        }
        else g = h;
        if (g) return !0;
        g = new Vd([2]);
        for (e = 0; e < c.length; e++) {
            f = a;
            k = c[e];
            h = e;
            l = b;
            if (!F(k, be, 4) || !g.contains(z(F(k, be, 4), 1)) || 1 !== z(k, 8) || k && Array.isArray(z(k, 4)) && d[z(F(k, be, 4), 2)]) f = null;
            else {
                f.i++;
                if (l = Kj(f, k, l, d)) m = kj(f.h), m.numAutoAdsPlaced || (m.numAutoAdsPlaced = 0), F(k, M, 1) && null != z(F(k, M, 1), 5) && (m.numPostPlacementsPlaced ? m.numPostPlacementsPlaced++ :
                    m.numPostPlacementsPlaced = 1), null == m.placed && (m.placed = []), m.numAutoAdsPlaced++, m.placed.push({
                    index: h,
                    element: l.ja
                }), vd(7, [!1, f.i, !0]);
                f = l
            }
            if (f) return !0
        }
        vd(7, [!1, a.i, !1]);
        return !1
    }

    function Kj(a, b, c, d) {
        if (b && Array.isArray(z(b, 4)) && d[z(F(b, be, 4), 2)] || 1 != z(b, 8)) return null;
        d = F(b, M, 1);
        if (!d) return null;
        d = gj(d);
        if (!d) return null;
        d = d.query(a.h.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = jj[z(b, 2)];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) {
            a: {
                f = a.h;
                switch (e) {
                    case 0:
                        f = Aj(Bj(d), f);
                        break a;
                    case 3:
                        f = Aj(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = Aj(g ? 1 == g.nodeType ? g : Bj(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !Cj(d))) c = 1 == e || 2 == e ? d : d.parentNode,
            c = !(c && !He(c) && 0 >= c.offsetWidth);
            f = !c
        }
        if (!(c = f)) {
            c = a.v;
            f = z(b, 2);
            g = Ba(d);
            g = c.i.h.get(g);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.h.contains(Ba(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.h.contains(Ba(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (!c) {
            c = a.B;
            f = z(b, 2);
            a: switch (f) {
                case 1:
                    g = vj(d.previousElementSibling) || xj(d);
                    break a;
                case 4:
                    g = vj(d) || xj(d.nextElementSibling);
                    break a;
                case 2:
                    g = xj(d.firstElementChild);
                    break a;
                case 3:
                    g = vj(d.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " +
                        f);
            }
            c = g || yj(c, d, f)
        }
        if (c) return null;
        c = F(b, oe, 3);
        f = {};
        c && (f.eb = z(c, 1), f.La = z(c, 2), f.lb = !!Nb(c, 3));
        c = F(b, be, 4) && z(F(b, be, 4), 2) ? z(F(b, be, 4), 2) : null;
        c = ee(c);
        g = null != z(b, 12) ? z(b, 12) : null;
        g = null == g ? null : new ce(null, {
            google_ml_rank: g
        });
        b = Lj(a, b);
        b = de(a.m, c, g, b);
        c = a.h;
        a = a.H;
        var h = c.document,
            k = f.lb || !1;
        g = (new Oc(h)).createElement("DIV");
        var l = g.style;
        l.width = "100%";
        l.height = "auto";
        l.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign = "center";
        f.vb && Vi(k, f.vb);
        h = (new Oc(h)).createElement("INS");
        k = h.style;
        k.display =
            "block";
        k.margin = "auto";
        k.backgroundColor = "transparent";
        f.eb && (k.marginTop = f.eb);
        f.La && (k.marginBottom = f.La);
        f.jb && Vi(k, f.jb);
        g.appendChild(h);
        f = {
            ta: g,
            ja: h
        };
        f.ja.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Na) f.ta.className = h.join(" ");
        h = f.ja;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var m = f.ta;
                var q = void 0 === q ? 0 : q;
                if (Q(ef)) {
                    q = void 0 === q ? 0 : q;
                    var r = Tf(d, e, q);
                    if (r.init) {
                        var A = r.init;
                        for (d = A; d = r.la(d);) A = d;
                        var K = {
                            anchor: A,
                            position: r.oa
                        }
                    } else K = {
                        anchor: d,
                        position: e
                    };
                    m["google-ama-order-assurance"] = q;
                    Sf(m, K.anchor, K.position)
                } else Sf(m, d, e);
                b: {
                    var B = f.ja;B.dataset.adsbygoogleStatus = "reserved";B.className += " adsbygoogle-noablate";m = {
                        element: B
                    };
                    var I = b && b.Xa;
                    if (B.hasAttribute("data-pub-vars")) {
                        try {
                            I = JSON.parse(B.getAttribute("data-pub-vars"))
                        } catch (T) {
                            break b
                        }
                        B.removeAttribute("data-pub-vars")
                    }
                    I && (m.params = I);
                    (c.adsbygoogle = c.adsbygoogle || []).push(m)
                }
            } catch (T) {
                (B = f.ta) && B.parentNode && (I = B.parentNode, I.removeChild(B),
                    He(I) && (I.style.display = I.getAttribute("data-init-display") || "none"));
                B = !1;
                break a
            }
            B = !0
        }
        return B ? f : null
    }

    function Lj(a, b) {
        return Pd(Sd(mj(b).map(fe), function(c) {
            kj(a.h).exception = c
        }))
    }

    function Jj(a) {
        var b = {};
        a && Mb(a, 6).forEach(function(c) {
            b[c] = !0
        });
        return b
    };

    function Mj(a) {
        H.call(this, a)
    }
    w(Mj, H);
    var Nj = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");

    function Oj(a, b) {
        this.h = a;
        this.i = b
    }

    function Pj(a, b, c) {
        this.url = a;
        this.A = b;
        this.Ra = !!c;
        this.depth = null
    };

    function Qj() {
        var a = Rj;
        this.m = hg;
        this.i = null;
        this.l = this.I;
        this.h = void 0 === a ? null : a;
        this.j = !1
    }
    n = Qj.prototype;
    n.bb = function(a) {
        this.l = a
    };
    n.ab = function(a) {
        this.i = a
    };
    n.cb = function(a) {
        this.j = a
    };
    n.pa = function(a, b, c) {
        try {
            if (this.h && this.h.h) {
                var d = this.h.start(a.toString(), 3);
                var e = b();
                this.h.end(d)
            } else e = b()
        } catch (h) {
            b = !0;
            try {
                vi(d), b = this.l(a, new ki(h, {
                    message: Sj(h)
                }), void 0, c)
            } catch (k) {
                this.I(217, k)
            }
            if (b) {
                var f, g;
                null == (f = window.console) || null == (g = f.error) || g.call(f, h)
            } else throw h;
        }
        return e
    };
    n.Va = function(a, b) {
        var c = this;
        return function() {
            var d = ua.apply(0, arguments);
            return c.pa(a, function() {
                return b.apply(void 0, d)
            })
        }
    };
    n.I = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new $f;
            f.h.push(1);
            f.i[1] = ag("context", a);
            li(b) || (b = new ki(b, {
                message: Sj(b)
            }));
            if (b.msg) {
                var g = b.msg.substring(0, 512);
                f.h.push(2);
                f.i[2] = ag("msg", g)
            }
            var h = b.meta || {};
            if (this.i) try {
                this.i(h)
            } catch (bd) {}
            if (d) try {
                d(h)
            } catch (bd) {}
            b = [h];
            f.h.push(3);
            f.i[3] = b;
            d = x;
            b = [];
            g = null;
            do {
                var k = d;
                if (Uc(k)) {
                    var l = k.location.href;
                    g = k.document && k.document.referrer || null
                } else l = g, g = null;
                b.push(new Pj(l || "", k));
                try {
                    d = k.parent
                } catch (bd) {
                    d = null
                }
            } while (d && k != d);
            l = 0;
            for (var m =
                    b.length - 1; l <= m; ++l) b[l].depth = m - l;
            k = x;
            if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
                for (m = 1; m < b.length; ++m) {
                    var q = b[m];
                    q.url || (q.url = k.location.ancestorOrigins[m - 1] || "", q.Ra = !0)
                }
            var r = new Pj(x.location.href, x, !1);
            k = null;
            var A = b.length - 1;
            for (q = A; 0 <= q; --q) {
                var K = b[q];
                !k && Nj.test(K.url) && (k = K);
                if (K.url && !K.Ra) {
                    r = K;
                    break
                }
            }
            K = null;
            var B = b.length && b[A].url;
            0 != r.depth && B && (K = b[A]);
            var I = new Oj(r, K);
            if (I.i) {
                var T = I.i.url || "";
                f.h.push(4);
                f.i[4] = ag("top", T)
            }
            var ad = {
                url: I.h.url || ""
            };
            if (I.h.url) {
                var Ee = I.h.url.match(Rc),
                    ai = Ee[1],
                    bi = Ee[3],
                    ci = Ee[4];
                r = "";
                ai && (r += ai + ":");
                bi && (r += "//", r += bi, ci && (r += ":" + ci));
                var di = r
            } else di = "";
            ad = [ad, {
                url: di
            }];
            f.h.push(5);
            f.i[5] = ad;
            ig(this.m, e, f, this.j, c)
        } catch (bd) {
            try {
                ig(this.m, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: Sj(bd),
                    url: I && I.h.url
                }, this.j, c)
            } catch (Iq) {}
        }
        return !0
    };
    n.Wa = function(a, b) {
        var c = this;
        b.catch(function(d) {
            d = d ? d : "unknown rejection";
            c.I(a, d instanceof Error ? d : Error(d))
        })
    };

    function Sj(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                for (var d; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (e) {
                b = c
            }
        }
        return b
    };

    function U(a) {
        a = void 0 === a ? "" : a;
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, U) : this.stack = Error().stack || ""
    }
    w(U, Error);
    var hg, Tj, Rj = new ui;

    function Uj(a) {
        null != a && (x.google_measure_js_timing = a);
        x.google_measure_js_timing || (a = Rj, a.h = !1, a.i != a.j.google_js_reporting_queue && (ti() && Ua(a.i, vi), a.i.length = 0))
    }(function(a) {
        hg = a || new fg;
        "number" !== typeof x.google_srt && (x.google_srt = Math.random());
        gg();
        Tj = new Qj;
        Tj.cb(!0);
        "complete" == x.document.readyState ? Uj() : Rj.h && Kc(x, "load", function() {
            Uj()
        })
    })();

    function Vj(a, b, c) {
        return Tj.pa(a, b, c)
    }

    function Wj(a, b) {
        return Tj.Va(a, b)
    }

    function Xj(a, b, c) {
        var d = P(ii).i();
        !b.eid && d.length && (b.eid = d.toString());
        ig(hg, a, b, !0, c)
    }

    function Yj(a, b) {
        Tj.Wa(a, b)
    }

    function Zj(a, b, c, d) {
        var e;
        li(b) ? e = b.msg || Sj(b.error) : e = Sj(b);
        return 0 == e.indexOf("TagError") ? (c = b instanceof ki ? b.error : b, c.pbr || (c.pbr = !0, Tj.I(a, b, .1, d, "puberror")), !1) : Tj.I(a, b, c, d)
    };

    function ak(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        var c = b;
        return c ? Ud(function() {
            return ac(Mj, c)
        }) : Rd(null)
    };

    function bk() {
        this.S = {}
    }

    function ck() {
        if (dk) return dk;
        var a = xd() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? dk = b : a.google_persistent_state_async = dk = new bk
    }

    function ek(a) {
        return fk[a] || "google_ps_" + a
    }

    function gk(a, b, c) {
        b = ek(b);
        a = a.S;
        var d = a[b];
        return void 0 === d ? a[b] = c : d
    }
    var dk = null,
        hk = {},
        fk = (hk[8] = "google_prev_ad_formats_by_region", hk[9] = "google_prev_ad_slotnames_by_region", hk);

    function ik(a) {
        this.h = a || {
            cookie: ""
        }
    }
    ik.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.cc;
            d = c.dc || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.tb
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" +
            e : "")
    };
    ik.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.h.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = La(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    ik.prototype.isEmpty = function() {
        return !this.h.cookie
    };
    ik.prototype.clear = function() {
        for (var a = (this.h.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = La(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) c = b[a], this.get(c), this.set(c, "", {
            tb: 0,
            path: void 0,
            domain: void 0
        })
    };

    function jk(a) {
        H.call(this, a)
    }
    w(jk, H);

    function kk(a) {
        var b = new jk;
        return C(b, 5, a)
    };

    function lk(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }

    function mk(a, b, c) {
        b = void 0 === b ? 500 : b;
        c = void 0 === c ? !1 : c;
        Jd.call(this);
        this.h = a;
        this.i = null;
        this.m = {};
        this.J = 0;
        this.H = b;
        this.D = c;
        this.l = null
    }
    w(mk, Jd);
    mk.prototype.j = function() {
        this.m = {};
        this.l && (Lc(this.h, "message", this.l), delete this.l);
        delete this.m;
        delete this.h;
        delete this.i;
        Jd.prototype.j.call(this)
    };

    function nk(a) {
        return "function" === typeof a.h.__tcfapi || null != ok(a)
    }
    mk.prototype.addEventListener = function(a) {
        function b(g, h) {
            clearTimeout(f);
            g ? (d = g, d.internalErrorState = lk(d), d.internalBlockOnErrors = c.D, h && 0 === d.internalErrorState || (d.tcString = "tcunavailable", h || (d.internalErrorState = 3))) : (d.tcString = "tcunavailable", d.internalErrorState = 3);
            a(d)
        }
        var c = this,
            d = {
                internalBlockOnErrors: this.D
            },
            e = Jc(function() {
                return a(d)
            }),
            f = 0; - 1 !== this.H && (f = setTimeout(function() {
            d.tcString = "tcunavailable";
            d.internalErrorState = 1;
            e()
        }, this.H));
        try {
            pk(this, "addEventListener", b)
        } catch (g) {
            d.tcString =
                "tcunavailable", d.internalErrorState = 3, f && (clearTimeout(f), f = 0), e()
        }
    };
    mk.prototype.removeEventListener = function(a) {
        a && a.listenerId && pk(this, "removeEventListener", null, a.listenerId)
    };

    function pk(a, b, c, d) {
        c || (c = function() {});
        if ("function" === typeof a.h.__tcfapi) a = a.h.__tcfapi, a(b, 2, c, d);
        else if (ok(a)) {
            qk(a);
            var e = ++a.J;
            a.m[e] = c;
            a.i && (c = {}, a.i.postMessage((c.__tcfapiCall = {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            }, c), "*"))
        } else c({}, !1)
    }

    function ok(a) {
        if (a.i) return a.i;
        a.i = kd(a.h, "__tcfapiLocator");
        return a.i
    }

    function qk(a) {
        a.l || (a.l = function(b) {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.m[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, Kc(a.h, "message", a.l))
    };

    function rk(a) {
        var b = a.A,
            c = a.va,
            d = a.Ma;
        a = sk({
            A: b,
            ba: a.ba,
            ma: void 0 === a.ma ? !1 : a.ma,
            na: void 0 === a.na ? !1 : a.na
        });
        null != a.h || "tcunav" != a.i.message ? d(a) : tk(b, c).then(function(e) {
            return e.map(uk)
        }).then(function(e) {
            return e.map(function(f) {
                return vk(b, f)
            })
        }).then(d)
    }

    function sk(a) {
        var b = a.A,
            c = a.ba,
            d = void 0 === a.ma ? !1 : a.ma;
        if (a = (void 0 === a.na ? 0 : a.na) || !nk(new mk(b))) {
            if (!d) {
                if (!(c = !c))
                    if (c = ak(b), null == c.h) Tj.I(806, c.i, void 0, void 0), c = !1;
                    else if ((c = c.h.value) && null != z(c, 1)) b: switch (c = z(c, 1), c) {
                    case 1:
                        c = !0;
                        break b;
                    default:
                        throw Error("Unhandled AutoGdprFeatureStatus: " + c);
                } else c = !1;
                d = c
            }
            a = d
        }
        if (a) return vk(b, kk(!0));
        c = ck();
        return (c = gk(c, 24)) ? vk(b, uk(c)) : Td(Error("tcunav"))
    }

    function tk(a, b) {
        return p.Promise.race([wk(), xk(a, b)])
    }

    function wk() {
        return (new p.Promise(function(a) {
            var b = ck();
            a = {
                resolve: a
            };
            var c = gk(b, 25, []);
            c.push(a);
            b.S[ek(25)] = c
        })).then(yk)
    }

    function xk(a, b) {
        return new p.Promise(function(c) {
            a.setTimeout(c, b, Td(Error("tcto")))
        })
    }

    function yk(a) {
        return a ? Rd(a) : Td(Error("tcnull"))
    }

    function uk(a) {
        var b = void 0 === b ? !1 : b;
        if (!1 === a.gdprApplies) var c = !0;
        else void 0 === a.internalErrorState && (a.internalErrorState = lk(a)), c = "error" === a.cmpStatus || 0 !== a.internalErrorState ? !a.internalBlockOnErrors : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0;
        if (c)
            if (!1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !b || "string" !== typeof a.tcString || !a.tcString.length) a = !0;
            else {
                var d = void 0 === d ? "755" : d;
                b: {
                    if (a.publisher && a.publisher.restrictions &&
                        (b = a.publisher.restrictions["1"], void 0 !== b)) {
                        b = b[void 0 === d ? "755" : d];
                        break b
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (d = !(!b || !b[void 0 === d ? "755" : d])) && a.purposeOneTreatment && "CH" === a.publisherCC ? a = !0 : (d && (a = a.purpose.consents, d = !(!a || !a["1"])), a = d)) : a = !0
            }
        else a = !1;
        return kk(a)
    }

    function vk(a, b) {
        a: {
            a = void 0 === a ? window : a;
            if (Nb(b, 5)) try {
                var c = a.localStorage;
                break a
            } catch (d) {}
            c = null
        }
        return (b = c) ? Rd(b) : Td(Error("unav"))
    };

    function zk(a) {
        H.call(this, a)
    }
    w(zk, H);

    function Ak(a) {
        H.call(this, a, -1, Bk)
    }
    w(Ak, H);
    var Bk = [1, 2];

    function Ck(a) {
        this.exception = a
    }

    function Dk(a, b, c) {
        this.j = a;
        this.h = b;
        this.i = c
    }
    Dk.prototype.start = function() {
        this.l()
    };
    Dk.prototype.l = function() {
        try {
            switch (this.j.document.readyState) {
                case "complete":
                case "interactive":
                    Ij(this.h, !0);
                    Ek(this);
                    break;
                default:
                    Ij(this.h, !1) ? Ek(this) : this.j.setTimeout(Ga(this.l, this), 100)
            }
        } catch (a) {
            Ek(this, a)
        }
    };

    function Ek(a, b) {
        try {
            var c = a.i,
                d = c.resolve,
                e = a.h;
            kj(e.h);
            G(e.j, pe, 1);
            d.call(c, new Ck(b))
        } catch (f) {
            a.i.reject(f)
        }
    };
    var Fk = "a".charCodeAt(),
        Gk = oc(Dd),
        Hk = oc(Ed);

    function Ik(a) {
        if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
        this.i = a;
        this.h = 0
    }

    function Jk(a) {
        var b = Kk(a, 16);
        return !0 === !!Kk(a, 1) ? (a = Lk(a), a.forEach(function(c) {
            if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
        }), a) : Mk(a, b)
    }

    function Lk(a) {
        for (var b = Kk(a, 12), c = []; b--;) {
            var d = !0 === !!Kk(a, 1),
                e = Kk(a, 16);
            if (d)
                for (d = Kk(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort(function(f, g) {
            return f - g
        });
        return c
    }

    function Mk(a, b, c) {
        for (var d = [], e = 0; e < b; e++)
            if (Kk(a, 1)) {
                var f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error("ID: " + f + " is outside of allowed values!");
                d.push(f)
            }
        return d
    }

    function Kk(a, b) {
        if (a.h + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
        var c = a.i.substring(a.h, a.h + b);
        a.h += b;
        return parseInt(c, 2)
    };

    function Nk(a, b) {
        try {
            var c = hb(a.split(".")[0]).map(function(e) {
                    return (aa = e.toString(2), t(aa, "padStart")).call(aa, 8, "0")
                }).join(""),
                d = new Ik(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.h += 78;
            c.cmpId = Kk(d, 12);
            c.cmpVersion = Kk(d, 12);
            d.h += 30;
            c.tcfPolicyVersion = Kk(d, 6);
            c.isServiceSpecific = !!Kk(d, 1);
            c.useNonStandardStacks = !!Kk(d, 1);
            c.specialFeatureOptins = Ok(Mk(d, 12, Hk), Hk);
            c.purpose = {
                consents: Ok(Mk(d, 24, Gk), Gk),
                legitimateInterests: Ok(Mk(d, 24, Gk), Gk)
            };
            c.purposeOneTreatment = !!Kk(d, 1);
            c.publisherCC = String.fromCharCode(Fk +
                Kk(d, 6)) + String.fromCharCode(Fk + Kk(d, 6));
            c.vendor = {
                consents: Ok(Jk(d), b),
                legitimateInterests: Ok(Jk(d), b)
            };
            return c
        } catch (e) {
            return null
        }
    }

    function Ok(a, b) {
        var c = {};
        if (Array.isArray(b) && 0 !== b.length) {
            b = v(b);
            for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = -1 !== a.indexOf(d)
        } else
            for (a = v(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
        delete c[0];
        return c
    };

    function Pk(a) {
        this.key = a;
        this.defaultValue = !1;
        this.valueType = "boolean"
    };

    function Qk() {
        this.h = {}
    }

    function Rk(a) {
        Sk || (Sk = new Tk);
        var b = Sk.h[a.key];
        if ("proto" === a.valueType) {
            try {
                var c = JSON.parse(b);
                if (Array.isArray(c)) return c
            } catch (d) {}
            return a.defaultValue
        }
        return typeof b === typeof a.defaultValue ? b : a.defaultValue
    };

    function Uk(a) {
        H.call(this, a)
    }
    w(Uk, H);

    function Vk(a) {
        H.call(this, a)
    }
    w(Vk, H);

    function Wk(a) {
        H.call(this, a)
    }
    w(Wk, H);
    var Xk = [11, 8, 12, 13, 15, 17, 19, 18, 20, 21, 22, 24, 25];

    function Yk() {};

    function Zk(a) {
        H.call(this, a, -1, $k)
    }
    w(Zk, H);

    function al(a) {
        H.call(this, a)
    }
    w(al, H);

    function bl(a) {
        H.call(this, a)
    }
    w(bl, H);
    var $k = [7];
    var cl = new Pk("45368529"),
        dl = new Pk("45369554");

    function Tk() {
        this.h = {};
        var a = x.__fcexpdef || "";
        try {
            var b = JSON.parse(a)[0];
            a = "";
            for (var c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
            this.h = JSON.parse(a)
        } catch (d) {}
    }
    var Sk;
    w(Tk, Qk);

    function el(a) {
        return (a = fl(a)) ? F(a, al, 4) : null
    }

    function fl(a) {
        if (a = (new ik(a)).get("FCCDCF", ""))
            if (Rk(cl))
                if (t(a, "startsWith").call(a, "%")) try {
                    var b = decodeURIComponent(a)
                } catch (c) {
                    gl(1), b = null
                } else b = a;
                else b = a;
        else b = null;
        try {
            return b ? ac(Zk, b) : null
        } catch (c) {
            return gl(2), null
        }
    }

    function gl(a) {
        new Yk;
        var b = new Vk;
        a = C(b, 7, a);
        b = new Uk;
        a = Tb(b, 1, a);
        b = new Wk;
        Ub(b, 22, Xk, a);
        Rk(dl)
    };
    oc(Dd).map(function(a) {
        return Number(a)
    });
    oc(Ed).map(function(a) {
        return Number(a)
    });

    function hl(a) {
        this.h = a;
        this.i = null
    }

    function il(a) {
        a.__tcfapiPostMessageReady || jl(new hl(a))
    }

    function jl(a) {
        a.i = function(b) {
            var c = "string" == typeof b.data;
            try {
                var d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            var e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.h.__tcfapi(e.command, e.version, function(f, g) {
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
                b.source && "function" === typeof b.source.postMessage &&
                    b.source.postMessage(f, b.origin);
                return f
            }, e.parameter)
        };
        a.h.addEventListener("message", a.i);
        a.h.__tcfapiPostMessageReady = !0
    };

    function kl(a, b) {
        function c() {
            if (!a.frames[b])
                if (d.body) {
                    var e = Xc("IFRAME", d);
                    e.style.display = "none";
                    e.style.width = "0px";
                    e.style.height = "0px";
                    e.style.border = "none";
                    e.style.zIndex = "-1000";
                    e.style.left = "-1000px";
                    e.style.top = "-1000px";
                    e.name = b;
                    d.body.appendChild(e)
                } else a.setTimeout(c, 5)
        }
        var d = a.document;
        c()
    };

    function ll(a) {
        this.h = a;
        this.i = a.document;
        this.m = (a = (a = fl(this.i)) ? F(a, bl, 5) || null : null) ? z(a, 2) : null;
        this.j = (a = el(this.i)) && null != z(a, 1) ? z(a, 1) : null;
        this.l = (a = el(this.i)) && null != z(a, 2) ? z(a, 2) : null
    }

    function ml() {
        var a = window,
            b = Q(tf);
        a.__uspapi || a.frames.__uspapiLocator || (a = new ll(a), nl(a), b && ol(a))
    }

    function nl(a) {
        !a.m || a.h.__uspapi || a.h.frames.__uspapiLocator || (a.h.__uspapiManager = "fc", kl(a.h, "__uspapiLocator"), Ia("__uspapi", function() {
            return a.B.apply(a, la(ua.apply(0, arguments)))
        }))
    }
    ll.prototype.B = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.m
        }, !0)
    };

    function ol(a) {
        !a.j || a.h.__tcfapi || a.h.frames.__tcfapiLocator || (a.h.__tcfapiManager = "fc", kl(a.h, "__tcfapiLocator"), a.h.__tcfapiEventListeners = a.h.__tcfapiEventListeners || [], Ia("__tcfapi", function() {
            return a.v.apply(a, la(ua.apply(0, arguments)))
        }), il(a.h))
    }
    ll.prototype.v = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("function" === typeof c)
            if (b && 2 !== b) c(null, !1);
            else switch (b = this.h.__tcfapiEventListeners, a) {
                case "getTCData":
                    !d || Array.isArray(d) && d.every(function(e) {
                        return "number" === typeof e
                    }) ? c(pl(this, d, null), !0) : c(null, !1);
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
                    c(pl(this, null, a - 1), !0);
                    break;
                case "removeEventListener":
                    b[d] ?
                        (b[d] = null, c(!0)) : c(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    c(null, !1)
            }
    };

    function pl(a, b, c) {
        if (!a.j) return null;
        b = Nk(a.j, b);
        b.addtlConsent = null != a.l ? a.l : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    };

    function ql(a) {
        H.call(this, a)
    }
    w(ql, H);
    ql.prototype.getWidth = function() {
        return D(this, 1, 0)
    };
    ql.prototype.getHeight = function() {
        return D(this, 2, 0)
    };

    function rl(a) {
        H.call(this, a)
    }
    w(rl, H);

    function sl(a) {
        H.call(this, a)
    }
    w(sl, H);
    var tl = [4, 5];

    function ul(a) {
        var b = /[a-zA-Z0-9._~-]/,
            c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
            if (!d.match(c)) {
                var e = decodeURIComponent(d);
                if (e.match(b)) return e
            }
            return d.toUpperCase()
        })
    }

    function vl(a) {
        for (var b = "", c = /[/%?&=]/, d = 0; d < a.length; ++d) {
            var e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function wl(a) {
        a = Mb(a, 2);
        if (!a) return !1;
        for (var b = 0; b < a.length; b++)
            if (1 == a[b]) return !0;
        return !1
    }

    function xl(a, b) {
        a = vl(ul(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        var c = fd(a),
            d = yl(a);
        return t(b, "find").call(b, function(e) {
            var f = Array.isArray(z(e, 7)) ? z(F(e, Be, 7), 1) : z(e, 1);
            e = Array.isArray(z(e, 7)) ? z(F(e, Be, 7), 2) : 2;
            if ("number" !== typeof f) return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function yl(a) {
        for (var b = {};;) {
            b[fd(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var zl = {},
        Al = (zl.google_ad_channel = !0, zl.google_ad_host = !0, zl);

    function Bl(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        Xj("ama", b, .01)
    }

    function Cl(a) {
        var b = {};
        ed(Al, function(c, d) {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function Dl(a) {
        a = F(a, ye, 3);
        return !a || z(a, 1) <= Date.now() ? !1 : !0
    }

    function El(a) {
        return (a = Fl(Gl(a))) ? Dl(a) ? a : null : null
    }

    function Hl(a, b) {
        try {
            b.removeItem("google_ama_config")
        } catch (c) {
            Bl(a, {
                lserr: 1
            })
        }
    }

    function Fl(a) {
        try {
            return a ? ac(we, a) : null
        } catch (b) {
            return null
        }
    }

    function Gl(a) {
        if (Q(df)) return null;
        try {
            return a.getItem("google_ama_config")
        } catch (b) {
            return null
        }
    };

    function Il(a) {
        H.call(this, a)
    }
    w(Il, H);

    function Jl(a) {
        H.call(this, a, -1, Kl)
    }
    w(Jl, H);
    var Kl = [1];

    function Ll(a) {
        H.call(this, a, -1, Ml)
    }
    w(Ll, H);
    Ll.prototype.getId = function() {
        return D(this, 1, 0)
    };
    Ll.prototype.X = function() {
        return D(this, 7, 0)
    };
    var Ml = [2];

    function Nl(a) {
        H.call(this, a, -1, Ol)
    }
    w(Nl, H);
    Nl.prototype.X = function() {
        return D(this, 5, 0)
    };
    var Ol = [2];

    function Pl(a) {
        H.call(this, a, -1, Ql)
    }
    w(Pl, H);

    function Rl(a) {
        H.call(this, a, -1, Sl)
    }
    w(Rl, H);
    Rl.prototype.X = function() {
        return D(this, 1, 0)
    };

    function Tl(a) {
        H.call(this, a)
    }
    w(Tl, H);
    var Ql = [1, 4, 2, 3],
        Sl = [2];

    function Ul(a) {
        H.call(this, a, -1, Vl)
    }
    w(Ul, H);

    function Wl(a) {
        return Yb(a, Jl, 14, Kb)
    }
    var Vl = [19],
        Kb = [13, 14];
    var Xl = void 0;

    function Yl() {
        rg(Xl, pg);
        return Xl
    }

    function Zl(a) {
        rg(Xl, tg);
        Xl = a
    };

    function $l(a, b, c, d) {
        c = void 0 === c ? "" : c;
        return 1 === b && am(c, void 0 === d ? null : d) ? !0 : bm(a, c, function(e) {
            return Xa(G(e, ic, 2), function(f) {
                return z(f, 1) === b
            })
        })
    }

    function am(a, b) {
        return b ? Ib(b, 13) ? E(Yb(b, Il, 13, Kb), 1) : Ib(b, 14) && "" !== a && 1 === Mb(Wl(b), 1).length && Mb(Wl(b), 1)[0] === a ? E(F(Wl(b), Il, 2), 1) : !1 : !1
    }

    function cm(a, b) {
        b = D(b, 18, 0); - 1 !== b && (a.tmod = b)
    }

    function dm(a) {
        var b = void 0 === b ? "" : b;
        var c = Vc(L) || L;
        return em(c, a) ? !0 : bm(L, b, function(d) {
            return Xa(Mb(d, 3), function(e) {
                return e === a
            })
        })
    }

    function fm(a) {
        return bm(x, void 0 === a ? "" : a, function() {
            return !0
        })
    }

    function em(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && $a(a.split(","), b.toString())
    }

    function bm(a, b, c) {
        a = Vc(a) || a;
        var d = gm(a);
        b && (b = Cd(String(b)));
        return nc(d, function(e, f) {
            return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
        })
    }

    function gm(a) {
        a = hm(a);
        var b = {};
        ed(a, function(c, d) {
            try {
                var e = new gc(c);
                b[d] = e
            } catch (f) {}
        });
        return b
    }

    function hm(a) {
        return Q(Ke) ? (a = sk({
            A: a,
            ba: Yl()
        }), null != a.h ? (im("ok"), a = jm(a.h.value)) : (im(a.i.message), a = {}), a) : jm(a.localStorage)
    }

    function jm(a) {
        try {
            var b = a.getItem("google_adsense_settings");
            if (!b) return {};
            var c = JSON.parse(b);
            return c !== Object(c) ? {} : mc(c, function(d, e) {
                return Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d)
            })
        } catch (d) {
            return {}
        }
    }

    function im(a) {
        Q(Je) && Xj("abg_adsensesettings_lserr", {
            s: a,
            g: Q(Ke),
            c: Yl(),
            r: .01
        }, .01)
    };

    function V(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function km(a) {
        a = V(a);
        var b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Ja: !0,
            Db: b,
            ra: a.ablation_viewport_offset
        } : null
    }

    function lm(a, b) {
        a = V(a);
        a.had_ads_ablation = !0;
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = b
    }

    function mm(a) {
        V(L).allow_second_reactive_tag = a
    }

    function nm() {
        var a = V(window);
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    };

    function om(a) {
        var b, c, d;
        return null != (d = null == (b = V(a)) ? void 0 : null == (c = b.head_tag_slot_vars) ? void 0 : c.google_ad_host) ? d : pm(a)
    }

    function pm(a) {
        var b, c;
        return null != (c = null == (b = a.document.querySelector('meta[name="google-adsense-platform-account"]')) ? void 0 : b.getAttribute("content")) ? c : null
    };

    function qm(a, b, c, d) {
        rm(new sm(a, b, c, d))
    }

    function sm(a, b, c, d) {
        this.A = a;
        this.i = b;
        this.j = c;
        this.h = d
    }

    function rm(a) {
        Sd(Qd(sk({
            A: a.A,
            ba: E(a.i, 6)
        }), function(b) {
            tm(a, b, !0)
        }), function() {
            um(a)
        })
    }

    function tm(a, b, c) {
        Sd(Qd(vm(b), function(d) {
            wm("ok");
            a.h(d)
        }), function() {
            Hl(a.A, b);
            c ? um(a) : a.h(null)
        })
    }

    function um(a) {
        Sd(Qd(xm(a), a.h), function() {
            ym(a)
        })
    }

    function ym(a) {
        rk({
            A: a.A,
            ba: E(a.i, 6),
            va: 50,
            Ma: function(b) {
                zm(a, b)
            }
        })
    }

    function vm(a) {
        return (a = El(a)) ? Rd(a) : Td(Error("invlocst"))
    }

    function xm(a) {
        if (om(a.A)) return Td(Error("invtag"));
        a: {
            var b = a.A;
            var c = a.j;a = a.i;
            if (null == a ? 0 : Ib(a, 13)) {
                var d, e;
                b = (b = null == a ? void 0 : null == (d = Yb(a, Il, 13, Kb)) ? void 0 : null == (e = F(d, zk, 2)) ? void 0 : F(e, Ak, 2)) && 0 < G(b, pe, 1).length ? b : null
            } else {
                if (null == a ? 0 : Ib(a, 14)) {
                    var f;
                    d = null == a ? void 0 : null == (f = Wl(a)) ? void 0 : Mb(f, 1);
                    var g, h, k;
                    e = null == a ? void 0 : null == (g = Wl(a)) ? void 0 : null == (h = F(g, Il, 2)) ? void 0 : null == (k = F(h, zk, 2)) ? void 0 : F(k, Ak, 2);
                    if (d && 1 === d.length && d[0] === c && e && 0 < G(e, pe, 1).length && Wb(a, 17) === b.location.host) {
                        b =
                            e;
                        break a
                    }
                }
                b = null
            }
        }
        b ? (c = new we, g = G(b, pe, 1), c = Vb(c, 1, g), b = G(b, ze, 2), b = Vb(c, 7, b), b = Rd(b)) : b = Td(Error("invtag"));
        return b
    }

    function zm(a, b) {
        Sd(Qd(b, function(c) {
            tm(a, c, !1)
        }), function(c) {
            wm(c.message);
            a.h(null)
        })
    }

    function wm(a) {
        Xj("abg::amalserr", {
            status: a,
            guarding: "true",
            timeout: 50,
            rate: .01
        }, .01)
    };

    function Am(a, b, c, d) {
        try {
            var e = xl(a, G(c, ze, 7));
            if (e && wl(e)) {
                if (z(e, 4)) {
                    var f = {},
                        g = new ce(null, (f.google_package = z(e, 4), f));
                    d = de(d, g)
                }
                var h = new Hj(a, b, c, e, d);
                fj(1E3, function() {
                    var k = new Fd;
                    (new Dk(a, h, k)).start();
                    return k.i
                }, a).then(Ha(Bm, a), Ha(Cm, a))
            }
        } catch (k) {
            Bl(a, {
                atf: -1
            })
        }
    }

    function Bm(a) {
        Bl(a, {
            atf: 1
        })
    }

    function Cm(a, b) {
        (a.google_ama_state = a.google_ama_state || {}).exception = b;
        Bl(a, {
            atf: 0
        })
    };

    function Dm(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = Em(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function Em(a) {
        var b = "";
        ed(a.split("_"), function(c) {
            b += c.substr(0, 2)
        });
        return b
    };
    cb || !y("Safari") || Qa();

    function Fm() {
        var a = this;
        this.promise = new p.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };

    function Gm() {
        var a = new Fm;
        return {
            promise: a.promise,
            resolve: a.resolve
        }
    };

    function Hm(a) {
        a = void 0 === a ? function() {} : a;
        x.google_llp || (x.google_llp = {});
        var b = x.google_llp,
            c = b[7];
        if (c) return c;
        c = Gm();
        b[7] = c;
        a();
        return c
    }

    function Im(a) {
        return Hm(function() {
            Wc(x.document, a)
        }).promise
    };

    function Jm(a) {
        var b = {};
        return {
            enable_page_level_ads: (b.pltais = !0, b),
            google_ad_client: a
        }
    };

    function Km(a) {
        if (x.google_apltlad || x !== x.top || !a.google_ad_client) return null;
        x.google_apltlad = !0;
        var b = Jm(a.google_ad_client),
            c = b.enable_page_level_ads;
        ed(a, function(d, e) {
            Ti[e] && "google_ad_client" !== e && (c[e] = d)
        });
        c.google_pgb_reactive = 7;
        Q(cf) && (c.easpf = !0, c.easpi = Q(rf), Q(pf) && (c.easpa = !0), c.asntp = R(Te), c.asntpv = R(Xe), c.asntpl = R(Ve), c.asntpm = R(We), c.asntpc = R(Ue), c.asna = R(Pe), c.asnd = R(Qe), c.asnp = R(Re), c.asns = R(Se), c.asmat = R(Oe), c.asptt = R(Ye));
        if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section =
            a.google_ad_section || a.google_ad_region;
        return b
    }

    function Lm(a) {
        return Aa(a.enable_page_level_ads) && 7 === a.enable_page_level_ads.google_pgb_reactive
    };

    function Mm(a, b) {
        V(L).ama_ran_on_page || fj(1001, function() {
            return Nm(new Om(a, b))
        }, x)
    }

    function Om(a, b) {
        this.h = x;
        this.i = a;
        this.j = b
    }

    function Nm(a) {
        Q(Df) ? qm(a.h, a.j, a.i.google_ad_client || "", function(b) {
            var c = a.h,
                d = a.i;
            V(L).ama_ran_on_page || b && Pm(c, d, b)
        }) : rk({
            A: a.h,
            ba: E(a.j, 6),
            va: 50,
            Ma: function(b) {
                return Qm(a, b)
            }
        })
    }

    function Qm(a, b) {
        Sd(Qd(b, function(c) {
            Rm("ok");
            var d = a.h,
                e = a.i;
            if (!V(L).ama_ran_on_page) {
                var f = El(c);
                f ? Pm(d, e, f) : Hl(d, c)
            }
        }), function(c) {
            return Rm(c.message)
        })
    }

    function Rm(a) {
        Xj("abg::amalserr", {
            status: a,
            guarding: !0,
            timeout: 50,
            rate: .01
        }, .01)
    }

    function Pm(a, b, c) {
        if (Array.isArray(z(c, 24))) {
            var d = lj(a);
            d.availableAbg = !0;
            var e, f;
            d.ablationFromStorage = !!(null == (e = F(c, re, 24)) ? 0 : null == (f = F(e, te, 3)) ? 0 : Yb(f, ue, 2, ve))
        }
        if (Lm(b) && (d = xl(a, G(c, ze, 7)), !d || !Nb(d, 8))) return;
        V(L).ama_ran_on_page = !0;
        var g;
        if (null == (g = F(c, Fe, 15)) ? 0 : Nb(g, 23)) V(a).enable_overlap_observer = !0;
        if ((g = F(c, Ce, 13)) && 1 === z(g, 1)) {
            var h = 0,
                k = F(g, De, 6);
            k && z(k, 3) && (h = z(k, 3) || 0);
            lm(a, h)
        } else if (null == (h = F(c, re, 24)) ? 0 : null == (k = F(h, te, 3)) ? 0 : Yb(k, ue, 2, ve)) lj(a).ablatingThisPageview = !0, lm(a,
            1);
        vd(3, [c.toJSON()]);
        var l = b.google_ad_client || "";
        b = Cl(Aa(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
        var m = de(he, new ce(null, b));
        Vj(782, function() {
            Am(a, l, c, m)
        })
    };
    /* 
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var Sm = ja(["https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700&text=shoppingmode"]),
        Tm = ja(["https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700"]),
        Um = ja(["https://fonts.googleapis.com"]),
        Vm = ja(["https://fonts.gstatic.com"]);

    function Wm() {
        for (var a = L.document, b = v([yd(Um), yd(Vm)]), c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = a.createElement("LINK");
            d.crossOrigin = "";
            Gc(d, c, "preconnect");
            a.head.appendChild(d)
        }
    };

    function Xm(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function Ym(a) {
        var b = L.document;
        if (b.currentScript) return Xm(b.currentScript, a);
        b = v(b.scripts);
        for (var c = b.next(); !c.done; c = b.next())
            if (0 === Xm(c.value, a)) return 0;
        return 1
    };

    function Zm(a, b) {
        var c = {},
            d = {},
            e = {},
            f = {};
        return f[zg] = (c[55] = function() {
            return 0 === a
        }, c[23] = function(g) {
            return $l(L, Number(g))
        }, c[24] = function(g) {
            return dm(Number(g))
        }, c[61] = function() {
            return E(b, 6)
        }, c[63] = function() {
            return E(b, 6) || ".google.ch" === Wb(b, 8)
        }, c), f[Ag] = (d[7] = function(g) {
            try {
                var h = window.localStorage
            } catch (q) {
                h = null
            }
            g = Number(g);
            g = void 0 === g ? 0 : g;
            g = 0 !== g ? "google_experiment_mod" + g : "google_experiment_mod";
            a: {
                var k = -1;
                try {
                    h && (k = parseInt(h.getItem(g), 10))
                } catch (q) {
                    k = null;
                    break a
                }
                k = 0 <= k && 1E3 >
                k ? k : null
            }
            if (null === k) {
                k = cd() ? null : Math.floor(1E3 * dd());
                var l;
                if (l = null != k && h) a: {
                    var m = String(k);
                    try {
                        if (h) {
                            h.setItem(g, m);
                            l = m;
                            break a
                        }
                    } catch (q) {}
                    l = null
                }
                h = l ? k : null
            } else h = k;
            return null != h ? h : void 0
        }, d), f[Bg] = (e[6] = function() {
            return Wb(b, 15)
        }, e), f
    };

    function $m(a) {
        a = void 0 === a ? x : a;
        return a.ggeac || (a.ggeac = {})
    };

    function an() {
        var a = P(Qf).h(Gf.h, Gf.defaultValue),
            b = L.document;
        b = void 0 === b ? window.document : b;
        pd(a, b)
    };

    function bn(a, b) {
        try {
            var c = a.split(".");
            a = x;
            for (var d = 0, e; null != a && d < c.length; d++) e = a, a = a[c[d]], "function" === typeof a && (a = e[c[d]]());
            var f = a;
            if (typeof f === b) return f
        } catch (g) {}
    }

    function cn() {
        var a = {};
        this[zg] = (a[8] = function(b) {
            try {
                return null != xa(b)
            } catch (c) {}
        }, a[9] = function(b) {
            try {
                var c = xa(b)
            } catch (d) {
                return
            }
            if (b = "function" === typeof c) c = c && c.toString && c.toString(), b = "string" === typeof c && -1 != c.indexOf("[native code]");
            return b
        }, a[10] = function() {
            return window == window.top
        }, a[6] = function(b) {
            return $a(P(ii).i(), parseInt(b, 10))
        }, a[27] = function(b) {
            b = bn(b, "boolean");
            return void 0 !== b ? b : void 0
        }, a[60] = function(b) {
            try {
                return !!x.document.querySelector(b)
            } catch (c) {}
        }, a[69] = function(b) {
            var c =
                x.document;
            c = void 0 === c ? document : c;
            var d;
            return !(null == (d = c.featurePolicy) || !(aa = d.features(), t(aa, "includes")).call(aa, b))
        }, a[70] = function(b) {
            var c = x.document;
            c = void 0 === c ? document : c;
            var d;
            return !(null == (d = c.featurePolicy) || !(aa = d.allowedFeatures(), t(aa, "includes")).call(aa, b))
        }, a);
        a = {};
        this[Ag] = (a[3] = function() {
            return ld()
        }, a[6] = function(b) {
            b = bn(b, "number");
            return void 0 !== b ? b : void 0
        }, a[11] = function(b) {
            b = void 0 === b ? "" : b;
            var c = x;
            b = void 0 === b ? "" : b;
            c = void 0 === c ? window : c;
            b = (c = (c = c.location.href.match(Rc)[3] ||
                null) ? decodeURI(c) : c) ? fd(c + b) : null;
            return null == b ? void 0 : b % 1E3
        }, a);
        a = {};
        this[Bg] = (a[2] = function() {
            return window.location.href
        }, a[3] = function() {
            try {
                return window.top.location.hash
            } catch (b) {
                return ""
            }
        }, a[4] = function(b) {
            b = bn(b, "string");
            return void 0 !== b ? b : void 0
        }, a[10] = function() {
            try {
                var b = x.document;
                return b.visibilityState || b.webkitVisibilityState || b.mozVisibilityState || ""
            } catch (c) {
                return ""
            }
        }, a[11] = function() {
            try {
                var b, c, d, e, f;
                return null != (f = null == (d = null == (b = xa("google_tag_data")) ? void 0 : null == (c =
                    b.uach) ? void 0 : c.fullVersionList) ? void 0 : null == (e = t(d, "find").call(d, function(g) {
                    return "Google Chrome" === g.brand
                })) ? void 0 : e.version) ? f : ""
            } catch (g) {
                return ""
            }
        }, a)
    };
    var dn = [12, 13, 20];

    function en() {}
    en.prototype.init = function(a, b, c, d) {
        var e = this;
        d = void 0 === d ? {} : d;
        var f = void 0 === d.Oa ? !1 : d.Oa,
            g = void 0 === d.ub ? {} : d.ub;
        d = void 0 === d.wb ? [] : d.wb;
        this.l = a;
        this.v = {};
        this.B = f;
        this.m = g;
        a = {};
        this.i = (a[b] = [], a[4] = [], a);
        this.j = {};
        (b = ni()) && Ua(b.split(",") || [], function(h) {
            (h = parseInt(h, 10)) && (e.j[h] = !0)
        });
        Ua(d, function(h) {
            e.j[h] = !0
        });
        this.h = c;
        return this
    };

    function fn(a, b, c) {
        var d = [],
            e = gn(a.l, b),
            f;
        if (f = 9 !== b) a.v[b] ? f = !0 : (a.v[b] = !0, f = !1);
        if (f) {
            var g;
            null == (g = a.h) || oh(g, b, c, d, [], 4);
            return d
        }
        if (!e.length) {
            var h;
            null == (h = a.h) || oh(h, b, c, d, [], 3);
            return d
        }
        var k = $a(dn, b),
            l = [];
        Ua(e, function(q) {
            var r = new dh;
            if (q = hn(a, q, c, r)) 0 !== Sb(r, eh) && l.push(r), r = q.getId(), d.push(r), jn(a, r, k ? 4 : c), (q = G(q, Kg, 2)) && (k ? Fh(q, Hh(), a.h, r) : Fh(q, [c], a.h, r))
        });
        var m;
        null == (m = a.h) || oh(m, b, c, d, l, 1);
        return d
    }

    function jn(a, b, c) {
        a.i[c] || (a.i[c] = []);
        a = a.i[c];
        $a(a, b) || a.push(b)
    }

    function kn(a, b) {
        a.l.push.apply(a.l, la(Va(Wa(b, function(c) {
            return new Rl(c)
        }), function(c) {
            return !$a(dn, c.X())
        })))
    }

    function hn(a, b, c, d) {
        var e = P(rh).h;
        if (!Gg(F(b, ug, 3), e)) return null;
        var f = G(b, Ll, 2),
            g = D(b, 6, 0);
        if (g) {
            Rb(d, 1, eh, g);
            f = e[Ag];
            switch (c) {
                case 2:
                    var h = f[8];
                    break;
                case 1:
                    h = f[7]
            }
            c = void 0;
            if (h) try {
                c = h(g), Qb(d, 3, c)
            } catch (k) {}
            return (b = ln(b, c)) ? mn(a, [b], 1) : null
        }
        if (g = D(b, 10, 0)) {
            Rb(d, 2, eh, g);
            h = null;
            switch (c) {
                case 1:
                    h = e[Ag][9];
                    break;
                case 2:
                    h = e[Ag][10];
                    break;
                default:
                    return null
            }
            c = h ? h(String(g)) : void 0;
            if (void 0 === c && 1 === D(b, 11, 0)) return null;
            void 0 !== c && Qb(d, 3, c);
            return (b = ln(b, c)) ? mn(a, [b], 1) : null
        }
        d = e ? Va(f, function(k) {
            return Gg(F(k,
                ug, 3), e)
        }) : f;
        if (!d.length) return null;
        c = d.length * D(b, 1, 0);
        return (b = D(b, 4, 0)) ? nn(a, b, c, d) : mn(a, d, c / 1E3)
    }

    function nn(a, b, c, d) {
        var e = null != a.m[b] ? a.m[b] : 1E3;
        if (0 >= e) return null;
        d = mn(a, d, c / e);
        a.m[b] = d ? 0 : e - c;
        return d
    }

    function mn(a, b, c) {
        var d = a.j,
            e = Ya(b, function(f) {
                return !!d[f.getId()]
            });
        return e ? e : a.B ? null : Zc(b, c)
    }

    function on(a, b) {
        $h(Kh, function(c) {
            a.j[c] = !0
        }, b);
        $h(Nh, function(c, d) {
            return fn(a, c, d)
        }, b);
        $h(Oh, function(c) {
            return (a.i[c] || []).concat(a.i[4])
        }, b);
        $h(Xh, function(c) {
            return void kn(a, c)
        }, b);
        $h(Lh, function(c, d) {
            return void jn(a, c, d)
        }, b)
    }

    function gn(a, b) {
        return (a = Ya(a, function(c) {
            return c.X() == b
        })) && G(a, Nl, 2) || []
    }

    function ln(a, b) {
        var c = G(a, Ll, 2),
            d = c.length,
            e = D(a, 8, 0);
        a = d * D(a, 1, 0) - 1;
        b = void 0 !== b ? b : Math.floor(1E3 * dd());
        d = (b - e) % d;
        if (b < e || b - e - d >= a) return null;
        c = c[d];
        e = P(rh).h;
        return !c || e && !Gg(F(c, ug, 3), e) ? null : c
    };

    function pn() {
        this.h = function() {}
    }

    function qn(a) {
        P(pn).h(a)
    };
    var rn, sn, tn, un, vn, wn;

    function xn(a, b, c, d) {
        var e = 1;
        d = void 0 === d ? $m() : d;
        e = void 0 === e ? 0 : e;
        var f = void 0 === f ? new nh(null != (un = null == (rn = F(a, Tl, 5)) ? void 0 : D(rn, 2, 0)) ? un : 0, null != (vn = null == (sn = F(a, Tl, 5)) ? void 0 : D(sn, 4, 0)) ? vn : 0, null != (wn = null == (tn = F(a, Tl, 5)) ? void 0 : E(tn, 3)) ? wn : !1) : f;
        d.hasOwnProperty("init-done") ? (ei(Xh, d)(Wa(G(a, Rl, 2), function(g) {
            return g.toJSON()
        })), ei(Yh, d)(Wa(G(a, Kg, 1), function(g) {
            return g.toJSON()
        }), e), b && ei(Zh, d)(b), yn(e, d)) : (on(P(en).init(G(a, Rl, 2), e, f, c), d), fi(d), gi(d), hi(d), yn(e, d), Fh(G(a, Kg, 1), [e], f,
            void 0, !0), sh = sh || !(!c || !c.rb), qn(P(cn)), b && qn(b))
    }

    function yn(a, b) {
        var c = b = void 0 === b ? $m() : b;
        ji(P(ii), c, a);
        zn(b, a);
        a = b;
        P(pn).h = ei(Zh, a);
        P(Qf).m()
    }

    function zn(a, b) {
        var c = P(Qf);
        c.i = function(d, e) {
            return ei(Qh, a, function() {
                return !1
            })(d, e, b)
        };
        c.j = function(d, e) {
            return ei(Rh, a, function() {
                return 0
            })(d, e, b)
        };
        c.l = function(d, e) {
            return ei(Sh, a, function() {
                return ""
            })(d, e, b)
        };
        c.h = function(d, e) {
            return ei(Th, a, function() {
                return []
            })(d, e, b)
        };
        c.m = function() {
            ei(Mh, a)(b)
        }
    };

    function An(a, b, c) {
        var d = V(a);
        if (d.plle) yn(1, $m(a));
        else {
            d.plle = !0;
            d = F(b, Pl, 12);
            var e = E(b, 9);
            xn(d, Zm(c, b), {
                Oa: e && !!a.google_disable_experiments,
                rb: e
            }, $m(a));
            if (c = Wb(b, 15)) c = Number(c), P(ii).l(c);
            b = v(Mb(b, 19));
            for (c = b.next(); !c.done; c = b.next()) c = c.value, P(ii).h(c);
            P(ii).j(12);
            P(ii).j(10);
            a = Vc(a) || a;
            Dm(a.location, "google_mc_lab") && P(ii).h(44738307);
            Dm(a.location, "google_auto_storify_swipeable") && P(ii).h(44769175);
            Dm(a.location, "google_auto_storify_scrollable") && P(ii).h(44769174)
        }
    };

    function Bn(a, b, c) {
        a = a.style;
        a.border = "none";
        a.height = c + "px";
        a.width = b + "px";
        a.margin = 0;
        a.padding = 0;
        a.position = "relative";
        a.visibility = "visible";
        a.backgroundColor = "transparent"
    };
    var Cn = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function Dn(a, b) {
        if (15 == b) {
            if (728 <= a) return 728;
            if (468 <= a) return 468
        } else if (90 == b) {
            if (200 <= a) return 200;
            if (180 <= a) return 180;
            if (160 <= a) return 160;
            if (120 <= a) return 120
        }
        return null
    };

    function W(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        Li.call(this, a, b);
        this.ga = c;
        this.sb = d
    }
    w(W, Li);
    W.prototype.qa = function() {
        return this.ga
    };
    W.prototype.i = function(a, b, c) {
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };

    function En(a) {
        return function(b) {
            return !!(b.ga & a)
        }
    };
    var Fn = {},
        Gn = (Fn.image_stacked = 1 / 1.91, Fn.image_sidebyside = 1 / 3.82, Fn.mobile_banner_image_sidebyside = 1 / 3.82, Fn.pub_control_image_stacked = 1 / 1.91, Fn.pub_control_image_sidebyside = 1 / 3.82, Fn.pub_control_image_card_stacked = 1 / 1.91, Fn.pub_control_image_card_sidebyside = 1 / 3.74, Fn.pub_control_text = 0, Fn.pub_control_text_card = 0, Fn),
        Hn = {},
        In = (Hn.image_stacked = 80, Hn.image_sidebyside = 0, Hn.mobile_banner_image_sidebyside = 0, Hn.pub_control_image_stacked = 80, Hn.pub_control_image_sidebyside = 0, Hn.pub_control_image_card_stacked =
            85, Hn.pub_control_image_card_sidebyside = 0, Hn.pub_control_text = 80, Hn.pub_control_text_card = 80, Hn),
        Jn = {},
        Kn = (Jn.pub_control_image_stacked = 100, Jn.pub_control_image_sidebyside = 200, Jn.pub_control_image_card_stacked = 150, Jn.pub_control_image_card_sidebyside = 250, Jn.pub_control_text = 100, Jn.pub_control_text_card = 150, Jn);

    function Ln(a) {
        var b = 0;
        a.V && b++;
        a.L && b++;
        a.M && b++;
        if (3 > b) return {
            O: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.V.split(",");
        var c = a.M.split(",");
        a = a.L.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            O: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            O: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " + (b.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')
        };
        for (var d = [], e = [], f = 0; f < b.length; f++) {
            var g =
                Number(c[f]);
            if (t(Number, "isNaN").call(Number, g) || 0 === g) return {
                O: "Wrong value '" + c[f] + "' for data-matched-content-rows-num."
            };
            d.push(g);
            g = Number(a[f]);
            if (t(Number, "isNaN").call(Number, g) || 0 === g) return {
                O: "Wrong value '" + a[f] + "' for data-matched-content-columns-num."
            };
            e.push(g)
        }
        return {
            M: d,
            L: e,
            Ta: b
        }
    }

    function Mn(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    };
    var Nn = bb("script");

    function On(a, b, c, d, e, f, g, h, k, l, m, q) {
        this.v = a;
        this.W = b;
        this.ga = void 0 === c ? null : c;
        this.h = void 0 === d ? null : d;
        this.R = void 0 === e ? null : e;
        this.i = void 0 === f ? null : f;
        this.j = void 0 === g ? null : g;
        this.H = void 0 === h ? null : h;
        this.J = void 0 === k ? null : k;
        this.l = void 0 === l ? null : l;
        this.m = void 0 === m ? null : m;
        this.P = void 0 === q ? null : q;
        this.T = this.D = this.B = null
    }
    On.prototype.size = function() {
        return this.W
    };

    function Pn(a, b, c) {
        null != a.ga && (c.google_responsive_formats = a.ga);
        null != a.R && (c.google_safe_for_responsive_override = a.R);
        null != a.i && (!0 === a.i ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.i));
        null != a.j && !0 !== a.j && (c.gfwrnher = a.j);
        var d = a.m || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.l || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.size().h(b);
        var e = a.size().height();
        if (!c.google_ad_resize) {
            c.google_ad_width = d;
            c.google_ad_height =
                e;
            var f = a.size();
            b = f.h(b) + "x" + f.height();
            c.google_ad_format = b;
            c.google_responsive_auto_format = a.v;
            null != a.h && (c.armr = a.h);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === a.i && (c.gfwrnh = a.size().height() + "px")
        }
        null != a.H && (c.gfwroml = a.H);
        null != a.J && (c.gfwromr = a.J);
        null != a.l && (c.gfwroh = a.l);
        null != a.m && (c.gfwrow = a.m);
        null != a.P && (c.gfwroz = a.P);
        null != a.B && (c.gml = a.B);
        null != a.D && (c.gmr = a.D);
        null != a.T && (c.gzi = a.T);
        b = Vc(window) || window;
        Dm(b.location, "google_responsive_dummy_ad") &&
            ($a([1, 2, 3, 4, 5, 6, 7, 8], a.v) || 1 === a.h) && 2 !== a.h && (a = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }), c.dash = "<" + Nn + ">window.top.postMessage('" + a + "', '*');\n          </" + Nn + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' + d + "x" + e + "</p>\n            <p>Rendered size:" + d + "x" + e + "</p>\n          </div>")
    };
    var Qn = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];

    function Rn(a, b) {
        Li.call(this, a, b)
    }
    w(Rn, Li);
    Rn.prototype.h = function(a) {
        return Math.min(1200, Math.max(this.minWidth(), Math.round(a)))
    };

    function Sn(a, b) {
        Tn(a, b);
        if ("pedestal" == b.google_content_recommendation_ui_type) return new On(9, new Rn(a, Math.floor(a * b.google_phwr)));
        var c = Pc();
        468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * Gn.mobile_banner_image_sidebyside + In.mobile_banner_image_sidebyside) + 96), a = {
            da: a,
            ca: c,
            L: 1,
            M: 12,
            V: "mobile_banner_image_sidebyside"
        }) : (a = Mn(a), a = {
            da: a.width,
            ca: a.height,
            L: 1,
            M: 13,
            V: "image_sidebyside"
        }) : (a = Mn(a), a = {
            da: a.width,
            ca: a.height,
            L: 4,
            M: 2,
            V: "image_stacked"
        });
        Un(b, a);
        return new On(9, new Rn(a.da,
            a.ca))
    }

    function Vn(a, b) {
        Tn(a, b);
        var c = Ln({
            M: b.google_content_recommendation_rows_num,
            L: b.google_content_recommendation_columns_num,
            V: b.google_content_recommendation_ui_type
        });
        if (c.O) a = {
            da: 0,
            ca: 0,
            L: 0,
            M: 0,
            V: "image_stacked",
            O: c.O
        };
        else {
            var d = 2 === c.Ta.length && 468 <= a ? 1 : 0;
            var e = c.Ta[d];
            e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
            var f = Kn[e];
            for (var g = c.L[d]; a / g < f && 1 < g;) g--;
            f = g;
            c = c.M[d];
            d = Math.floor(((a - 8 * f - 8) / f * Gn[e] + In[e]) * c + 8 * c + 8);
            a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    Bb: "Calculated slot width is too large: " + a
                } :
                1500 < d ? {
                    width: 0,
                    height: 0,
                    Bb: "Calculated slot height is too large: " + d
                } : {
                    width: a,
                    height: d
                };
            a = {
                da: a.width,
                ca: a.height,
                L: f,
                M: c,
                V: e
            }
        }
        if (a.O) throw new U(a.O);
        Un(b, a);
        return new On(9, new Rn(a.da, a.ca))
    }

    function Tn(a, b) {
        if (0 >= a) throw new U("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function Un(a, b) {
        a.google_content_recommendation_ui_type = b.V;
        a.google_content_recommendation_columns_num = b.L;
        a.google_content_recommendation_rows_num = b.M
    };

    function Wn(a, b) {
        Li.call(this, a, b)
    }
    w(Wn, Li);
    Wn.prototype.h = function() {
        return this.minWidth()
    };
    Wn.prototype.i = function(a, b, c) {
        Ki(a, c);
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };
    var Xn = {
        "image-top": function(a) {
            return 600 >= a ? 284 + .414 * (a - 250) : 429
        },
        "image-middle": function(a) {
            return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
        },
        "image-side": function(a) {
            return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
        },
        "text-only": function(a) {
            return 500 >= a ? 187 - .228 * (a - 250) : 130
        },
        "in-article": function(a) {
            return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
        }
    };

    function Yn(a, b) {
        Li.call(this, a, b)
    }
    w(Yn, Li);
    Yn.prototype.h = function() {
        return Math.min(1200, this.minWidth())
    };

    function Zn(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if ("in-article" == f) {
            var g = a;
            if ("false" == e.google_full_width_responsive) a = g;
            else if (a = Fi(b, c, g, .2, e), !0 !== a) e.gfwrnwer = a, a = g;
            else if (a = og(b))
                if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                    b: {
                        g = c;
                        for (var h = 0; 100 > h && g.parentElement; ++h) {
                            for (var k = g.parentElement.childNodes, l = 0; l < k.length; ++l) {
                                var m = k[l];
                                if (m != g && Ii(b, m)) break b
                            }
                            g = g.parentElement;
                            g.style.width = "100%";
                            g.style.height = "auto"
                        }
                    }
                    Ki(b, c)
                }
            else a = g;
            else a = g
        }
        if (250 > a) throw new U("Fluid responsive ads must be at least 250px wide: availableWidth=" +
            a);
        a = Math.min(1200, Math.floor(a));
        if (d && "in-article" != f) {
            f = Math.ceil(d);
            if (50 > f) throw new U("Fluid responsive ads must be at least 50px tall: height=" + f);
            return new On(11, new Li(a, f))
        }
        if ("in-article" != f && (d = e.google_ad_layout_key)) {
            f = "" + d;
            b = Math.pow(10, 3);
            if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length) {
                e = [];
                for (g = 0; g < d; g++) e.push(parseInt(c[g], 36) / b);
                b = e
            } else b = null;
            if (!b) throw new U("Invalid data-ad-layout-key value: " + f);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++) c += b[g] * d, d *= f;
            f = Math.ceil(1E3 *
                c - -725 + 10);
            if (isNaN(f)) throw new U("Invalid height: height=" + f);
            if (50 > f) throw new U("Fluid responsive ads must be at least 50px tall: height=" + f);
            if (1200 < f) throw new U("Fluid responsive ads must be at most 1200px tall: height=" + f);
            return new On(11, new Li(a, f))
        }
        d = Xn[f];
        if (!d) throw new U("Invalid data-ad-layout value: " + f);
        c = Pi(c, b);
        b = og(b);
        b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
        return new On(11, "in-article" == f ? new Yn(a, b) : new Li(a, b))
    };

    function $n(a) {
        return function(b) {
            for (var c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function ao(a, b) {
        for (var c = bo.slice(0), d = c.length, e = null, f = 0; f < d; ++f) {
            var g = c[f];
            if (a(g)) {
                if (!b || b(g)) return g;
                null === e && (e = g)
            }
        }
        return e
    };
    var co = [new W(970, 90, 2), new W(728, 90, 2), new W(468, 60, 2), new W(336, 280, 1), new W(320, 100, 2), new W(320, 50, 2), new W(300, 600, 4), new W(300, 250, 1), new W(250, 250, 1), new W(234, 60, 2), new W(200, 200, 1), new W(180, 150, 1), new W(160, 600, 4), new W(125, 125, 1), new W(120, 600, 4), new W(120, 240, 4), new W(120, 120, 1, !0)],
        bo = [co[6], co[12], co[3], co[0], co[7], co[14], co[1], co[8], co[10], co[4], co[15], co[2], co[11], co[5], co[13], co[9], co[16]];

    function eo(a, b, c, d, e) {
        "false" == e.google_full_width_responsive ? c = {
            F: a,
            G: 1
        } : "autorelaxed" == b && e.google_full_width_responsive || fo(b) || e.google_ad_resize ? (b = Gi(a, c, d, e), c = !0 !== b ? {
            F: a,
            G: b
        } : {
            F: og(c) || a,
            G: !0
        }) : c = {
            F: a,
            G: 2
        };
        b = c.G;
        return !0 !== b ? {
            F: a,
            G: b
        } : d.parentElement ? {
            F: c.F,
            G: b
        } : {
            F: a,
            G: b
        }
    }

    function go(a, b, c, d, e) {
        var f = Vj(247, function() {
                return eo(a, b, c, d, e)
            }),
            g = f.F;
        f = f.G;
        var h = !0 === f,
            k = J(d.style.width),
            l = J(d.style.height),
            m = ho(g, b, c, d, e, h);
        g = m.aa;
        h = m.Y;
        var q = m.qa;
        m = m.Sa;
        var r = io(b, q),
            A, K = (A = Mi(d, c, "marginLeft", J)) ? A + "px" : "",
            B = (A = Mi(d, c, "marginRight", J)) ? A + "px" : "";
        A = Mi(d, c, "zIndex") || "";
        return new On(r, g, q, null, m, f, h, K, B, l, k, A)
    }

    function fo(a) {
        return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function ho(a, b, c, d, e, f) {
        b = "auto" == b ? .25 >= a / Math.min(1200, og(c)) ? 4 : 3 : Ei(b);
        var g = !1,
            h = !1;
        if (488 > og(c)) {
            var k = zi(d, c);
            var l = Pi(d, c);
            g = !l && k;
            h = l && k
        }
        l = [Ni(a), En(b)];
        l.push(Oi(488 > og(c), c, d, h));
        null != e.google_max_responsive_height && l.push(Ri(e.google_max_responsive_height));
        var m = [function(r) {
            return !r.sb
        }];
        if (g || h) g = Si(c, d), m.push(Ri(g));
        var q = ao($n(l), $n(m));
        if (!q) throw new U("No slot size for availableWidth=" + a);
        l = Vj(248, function() {
            var r;
            a: if (f) {
                if (e.gfwrnh && (r = J(e.gfwrnh))) {
                    r = {
                        aa: new Wn(a, r),
                        Y: !0
                    };
                    break a
                }
                r = a / 1.2;
                var A = Math;
                var K = A.min;
                if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var B = Infinity;
                else {
                    B = d;
                    var I = Infinity;
                    do {
                        var T = Mi(B, c, "height", J);
                        T && (I = Math.min(I, T));
                        (T = Mi(B, c, "maxHeight", J)) && (I = Math.min(I, T))
                    } while ((B = B.parentElement) && "HTML" != B.tagName);
                    B = I
                }
                A = K.call(A, r, B);
                if (A < .5 * r || 100 > A) A = r;
                Q(Af) && !Pi(d, c) && (A = Math.max(A, .5 * ng(c).clientHeight));
                r = {
                    aa: new Wn(a, Math.floor(A)),
                    Y: A < r ? 102 : !0
                }
            } else r = {
                aa: q,
                Y: 100
            };
            return r
        });
        g = l.aa;
        l = l.Y;
        return "in-article" === e.google_ad_layout &&
            jo(c) ? {
                aa: ko(a, c, d, g, e),
                Y: !1,
                qa: b,
                Sa: k
            } : {
                aa: g,
                Y: l,
                qa: b,
                Sa: k
            }
    }

    function io(a, b) {
        if ("auto" == a) return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8
        }
        throw Error("bad mask");
    }

    function ko(a, b, c, d, e) {
        var f = e.google_ad_height || Mi(c, b, "height", J);
        b = Zn(a, b, c, f, e).size();
        return b.minWidth() * b.height() > a * d.height() ? new W(b.minWidth(), b.height(), 1) : d
    }

    function jo(a) {
        return Q(yf) || a.location && "#hffwroe2etoq" == a.location.hash
    };

    function lo(a, b, c, d, e) {
        var f;
        (f = og(b)) ? 488 > og(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, Ki(b, c), f = {
            F: f,
            G: !0
        }) : f = {
            F: a,
            G: 5
        } : f = {
            F: a,
            G: 4
        }: f = {
            F: a,
            G: 10
        };
        var g = f;
        f = g.F;
        g = g.G;
        if (!0 !== g || a == f) return new On(12, new Li(a, d), null, null, !0, g, 100);
        a = ho(f, "auto", b, c, e, !0);
        return new On(1, a.aa, a.qa, 2, !0, g, a.Y)
    };

    function mo(a, b) {
        var c = b.google_ad_format;
        if ("autorelaxed" == c) {
            a: {
                if ("pedestal" != b.google_content_recommendation_ui_type)
                    for (a = v(Qn), c = a.next(); !c.done; c = a.next())
                        if (null != b[c.value]) {
                            b = !0;
                            break a
                        }
                b = !1
            }
            return b ? 9 : 5
        }
        if (fo(c)) return 1;
        if ("link" === c) return 4;
        if ("fluid" == c) {
            if (c = "in-article" === b.google_ad_layout) c = Q(yf) || a.location && ("#hffwroe2etop" == a.location.hash || "#hffwroe2etoq" == a.location.hash);
            return c ? (no(b), 1) : 8
        }
        if (27 === b.google_reactive_ad_format) return no(b), 1
    }

    function oo(a, b, c, d, e) {
        e = b.offsetWidth || (c.google_ad_resize || (void 0 === e ? !1 : e)) && Mi(b, d, "width", J) || c.google_ad_width || 0;
        4 === a && (c.google_ad_format = "auto", a = 1);
        var f = (f = po(a, e, b, c, d)) ? f : go(e, c.google_ad_format, d, b, c);
        f.size().i(d, c, b);
        Pn(f, e, c);
        1 != a && (a = f.size().height(), b.style.height = a + "px")
    }

    function po(a, b, c, d, e) {
        var f = d.google_ad_height || Mi(c, e, "height", J);
        switch (a) {
            case 5:
                return f = Vj(247, function() {
                    return eo(b, d.google_ad_format, e, c, d)
                }), a = f.F, f = f.G, !0 === f && b != a && Ki(e, c), !0 === f ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = f), Sn(a, d);
            case 9:
                return Vn(b, d);
            case 8:
                return Zn(b, e, c, f, d);
            case 10:
                return lo(b, e, c, f, d)
        }
    }

    function no(a) {
        a.google_ad_format = "auto";
        a.armr = 3
    };

    function qo(a, b) {
        var c = Vc(b);
        if (c) {
            c = og(c);
            var d = Yc(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" !== d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };
    var ro = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/slotcar_library", ".js"]),
        so = ja(["https://googleads.g.doubleclick.net/pagead/html/", "/", "/zrt_lookup.html"]),
        to = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl", ".js"]),
        uo = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_with_ama", ".js"]),
        vo = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_instrumented", ".js"]);

    function wo(a) {
        Tj.ab(function(b) {
            b.shv = String(a);
            b.mjsv = "m202208040101";
            var c = P(ii).i(),
                d = V(x);
            d.eids || (d.eids = []);
            b.eid = c.concat(d.eids).join(",")
        })
    };

    function xo(a) {
        var b = a.xb;
        return a.mb || ("dev" === b ? "dev" : "")
    };
    var yo = {},
        zo = (yo.google_ad_modifications = !0, yo.google_analytics_domain_name = !0, yo.google_analytics_uacct = !0, yo.google_pause_ad_requests = !0, yo.google_user_agent_client_hint = !0, yo);

    function Ao(a) {
        return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null
    }

    function Bo(a) {
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
        return null
    }

    function Co(a) {
        switch (a) {
            case "true":
                return !0;
            case "false":
                return !1;
            case "null":
                return null;
            case "undefined":
                break;
            default:
                try {
                    var b = a.match(/^(?:'(.*)'|"(.*)")$/);
                    if (b) return b[1] || b[2] || "";
                    if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                        var c = parseFloat(a);
                        return c === c ? c : void 0
                    }
                } catch (d) {}
        }
    };
    var Do = new p.WeakMap;

    function Eo() {
        function a(e) {
            e = v(e);
            e.next();
            e = ka(e);
            return c(d, e)
        }
        var b = Fo;
        var c = void 0 === c ? Go : c;
        var d = Ba(b);
        return function() {
            var e = ua.apply(0, arguments),
                f = this || x,
                g = Do.get(f);
            g || (g = {}, Do.set(f, g));
            f = g;
            g = [this].concat(la(e));
            e = a ? a(g) : g;
            if (Object.prototype.hasOwnProperty.call(f, e)) f = f[e];
            else {
                var h = v(g);
                g = h.next().value;
                h = ka(h);
                g = b.apply(g, h);
                f = f[e] = g
            }
            return f
        }
    }

    function Go(a, b) {
        a = [a];
        for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
        return a.join("\v")
    };

    function Ho(a) {
        return Q(xf) ? Eo()(a) : Fo(a)
    }

    function Fo(a) {
        if (a.google_ad_client) return String(a.google_ad_client);
        var b, c, d, e, f;
        if (null != (e = null != (d = null == (b = V(a).head_tag_slot_vars) ? void 0 : b.google_ad_client) ? d : null == (c = a.document.querySelector(".adsbygoogle[data-ad-client]")) ? void 0 : c.getAttribute("data-ad-client"))) b = e;
        else {
            b: {
                b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(a) ||
                /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !Bd() ? Ao : Bo;
                for (c = b.length - 1; 0 <= c; c--)
                    if (d = b[c], !d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) {
                        b = d;
                        break b
                    }
                b = null
            }
            if (b) {
                a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                for (c = {}; d = a.exec(b);) c[d[1]] = Co(d[2]);
                b = c.google_ad_client ? c.google_ad_client : ""
            } else b = ""
        }
        return null != (f = b) ? f : ""
    };
    var Io = "undefined" === typeof sttc ? void 0 : sttc;

    function Jo(a) {
        var b = Tj;
        try {
            return rg(a, sg), new Ul(JSON.parse(a))
        } catch (c) {
            b.I(838, c instanceof Error ? c : Error(String(c)), void 0, function(d) {
                d.jspb = String(a)
            })
        }
        return new Ul
    };

    function Ko(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }

    function Lo(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }

    function Mo() {
        var a = new p.Set,
            b = Dj();
        try {
            if (!b) return a;
            for (var c = b.pubads(), d = v(c.getSlots()), e = d.next(); !e.done; e = d.next()) a.add(e.value.getSlotId().getDomId())
        } catch (f) {}
        return a
    }

    function No(a) {
        a = a.id;
        return null != a && (Mo().has(a) || t(a, "startsWith").call(a, "google_ads_iframe_") || t(a, "startsWith").call(a, "aswift"))
    }

    function Oo(a, b, c) {
        if (!a.sources) return !1;
        switch (Po(a)) {
            case 2:
                var d = Qo(a);
                if (d) return c.some(function(f) {
                    return Ro(d, f)
                });
            case 1:
                var e = So(a);
                if (e) return b.some(function(f) {
                    return Ro(e, f)
                })
        }
        return !1
    }

    function Po(a) {
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

    function So(a) {
        return To(a, function(b) {
            return b.currentRect
        })
    }

    function Qo(a) {
        return To(a, function(b) {
            return b.previousRect
        })
    }

    function To(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function Uo() {
        Jd.call(this);
        this.i = this.h = this.R = this.P = this.H = 0;
        this.Fa = this.Ca = Number.NEGATIVE_INFINITY;
        this.ya = this.Aa = this.Ba = this.Da = this.Ia = this.m = this.Ha = this.W = 0;
        this.za = !1;
        this.T = this.J = this.D = 0;
        var a = document.querySelector("[data-google-query-id]");
        this.Ga = a ? a.getAttribute("data-google-query-id") : null;
        this.l = null;
        this.Ea = !1;
        this.ia = function() {}
    }
    w(Uo, Jd);

    function Vo() {
        var a = new Uo;
        if (Q(Hf)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = v(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]);
                for (var c = b.next(); !c.done; c = b.next()) c = c.value, Wo(a).observe({
                    type: c,
                    buffered: !0
                });
                Xo(a)
            }
        }
    }

    function Wo(a) {
        a.l || (a.l = new PerformanceObserver(ej(640, function(b) {
            var c = Yo !== window.scrollX || Zo !== window.scrollY ? [] : $o,
                d = ap();
            b = v(b.getEntries());
            for (var e = b.next(); !e.done; e = b.next()) switch (e = e.value, e.entryType) {
                case "layout-shift":
                    var f = a;
                    if (!e.hadRecentInput) {
                        f.H += Number(e.value);
                        Number(e.value) > f.P && (f.P = Number(e.value));
                        f.R += 1;
                        var g = Oo(e, c, d);
                        g && (f.m += e.value, f.Da++);
                        if (5E3 < e.startTime - f.Ca || 1E3 < e.startTime - f.Fa) f.Ca = e.startTime, f.h = 0, f.i = 0;
                        f.Fa = e.startTime;
                        f.h += e.value;
                        g && (f.i += e.value);
                        f.h > f.W && (f.W = f.h, f.Ia = f.i, f.Ha = e.startTime + e.duration)
                    }
                    break;
                case "largest-contentful-paint":
                    a.Ba = Math.floor(e.renderTime || e.loadTime);
                    a.Aa = e.size;
                    break;
                case "first-input":
                    a.ya = Number((e.processingStart - e.startTime).toFixed(3));
                    a.za = !0;
                    break;
                case "longtask":
                    e = Math.max(0, e.duration - 50), a.D += e, a.J = Math.max(a.J, e), a.T += 1
            }
        })));
        return a.l
    }

    function Xo(a) {
        var b = ej(641, function() {
                var d = document;
                2 == (d.prerendering ? 3 : {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && bp(a)
            }),
            c = ej(641, function() {
                return void bp(a)
            });
        document.addEventListener("visibilitychange", b);
        document.addEventListener("unload", c);
        a.ia = function() {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("unload", c);
            Wo(a).disconnect()
        }
    }
    Uo.prototype.j = function() {
        Jd.prototype.j.call(this);
        this.ia()
    };

    function bp(a) {
        if (!a.Ea) {
            a.Ea = !0;
            Wo(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += Lo("cls", a.H), b += Lo("mls", a.P), b += Ko("nls", a.R), window.LayoutShiftAttribution && (b += Lo("cas", a.m), b += Ko("nas", a.Da)), b += Lo("wls", a.W), b += Lo("tls", a.Ha), window.LayoutShiftAttribution && (b += Lo("was", a.Ia)));
            window.LargestContentfulPaint && (b += Ko("lcp", a.Ba), b += Ko("lcps", a.Aa));
            window.PerformanceEventTiming && a.za && (b += Ko("fid", a.ya));
            window.PerformanceLongTaskTiming &&
                (b += Ko("cbt", a.D), b += Ko("mbt", a.J), b += Ko("nlt", a.T));
            for (var c = 0, d = v(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) No(e.value) && c++;
            b += Ko("nif", c);
            b += Ko("ifi", Ad(window));
            c = P(ii).i();
            b += "&eid=" + encodeURIComponent(c.join());
            b += "&top=" + (x === x.top ? 1 : 0);
            b += a.Ga ? "&qqid=" + encodeURIComponent(a.Ga) : Ko("pvsid", qd(x));
            window.googletag && (b += "&gpt=1");
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.v || (a.v = !0, a.j())
        }
    }

    function Ro(a, b) {
        var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }

    function ap() {
        var a = [].concat(la(document.getElementsByTagName("iframe"))).filter(No),
            b = [].concat(la(Mo())).map(function(c) {
                return document.getElementById(c)
            }).filter(function(c) {
                return null !== c
            });
        Yo = window.scrollX;
        Zo = window.scrollY;
        return $o = [].concat(la(a), la(b)).map(function(c) {
            return c.getBoundingClientRect()
        })
    }
    var Yo = void 0,
        Zo = void 0,
        $o = [];
    var X = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        Y = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };

    function cp(a, b, c) {
        Jd.call(this);
        var d = this;
        this.i = a;
        this.h = [];
        b && dp() && this.h.push(X);
        c && this.h.push(Y);
        if (document.hasTrustToken && !Q(Lf)) {
            var e = new p.Map;
            this.h.forEach(function(f) {
                e.set(f.issuerOrigin, {
                    issuerOrigin: f.issuerOrigin,
                    state: d.i ? 1 : 12,
                    hasRedemptionRecord: !1
                })
            });
            window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof p.Map ? new p.Map([].concat(la(e), la(window.goog_tt_state_map))) : e;
            window.goog_tt_promise_map && window.goog_tt_promise_map instanceof p.Map || (window.goog_tt_promise_map =
                new p.Map)
        }
    }
    w(cp, Jd);

    function dp() {
        var a = void 0 === a ? window : a;
        a = a.navigator.userAgent;
        var b = /Chrome/.test(a);
        return /Android/.test(a) && b
    }

    function ep() {
        var a = void 0 === a ? window.document : a;
        var b = P(Qf).h(Of.h, Of.defaultValue);
        pd(b, a)
    }

    function fp(a, b) {
        return a || ".google.ch" === b || "function" === typeof L.__tcfapi
    }

    function Z(a, b, c) {
        var d, e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
        e && (e.state = b, void 0 != c && (e.hasRedemptionRecord = c))
    }

    function gp() {
        var a = X.issuerOrigin + X.redemptionPath,
            b = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    issuer: X.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        Z(X.issuerOrigin, 2);
        return window.fetch(a, b).then(function(c) {
            if (!c.ok) throw Error(c.status + ": Network response was not ok!");
            Z(X.issuerOrigin, 6, !0)
        }).catch(function(c) {
            c && "NoModificationAllowedError" === c.name ? Z(X.issuerOrigin, 6, !0) : Z(X.issuerOrigin, 5)
        })
    }

    function hp() {
        var a = X.issuerOrigin + X.issuancePath;
        Z(X.issuerOrigin, 8);
        return window.fetch(a, {
            keepalive: !0,
            trustToken: {
                type: "token-request"
            }
        }).then(function(b) {
            if (!b.ok) throw Error(b.status + ": Network response was not ok!");
            Z(X.issuerOrigin, 10);
            return gp()
        }).catch(function(b) {
            if (b && "NoModificationAllowedError" === b.name) return Z(X.issuerOrigin, 10), gp();
            Z(X.issuerOrigin, 9)
        })
    }

    function ip() {
        Z(X.issuerOrigin, 13);
        return document.hasTrustToken(X.issuerOrigin).then(function(a) {
            return a ? gp() : hp()
        })
    }

    function jp() {
        Z(Y.issuerOrigin, 13);
        if (p.Promise) {
            var a = document.hasTrustToken(Y.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return p.Promise.reject({
                        state: 19,
                        error: e
                    })
                }),
                b = Y.issuerOrigin + Y.redemptionPath,
                c = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "none"
                    }
                };
            Z(Y.issuerOrigin, 16);
            a = a.then(function(e) {
                return window.fetch(b, c).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 18, !0)
                }).catch(function(f) {
                    if (f && "NoModificationAllowedError" ===
                        f.name) Z(Y.issuerOrigin, 18, !0);
                    else {
                        if (e) return p.Promise.reject({
                            state: 17,
                            error: f
                        });
                        Z(Y.issuerOrigin, 17)
                    }
                })
            }).then(function() {
                return document.hasTrustToken(Y.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return p.Promise.reject({
                        state: 19,
                        error: e
                    })
                })
            }).then(function(e) {
                var f = Y.issuerOrigin + Y.getStatePath;
                Z(Y.issuerOrigin, 20);
                return window.fetch(f + "?ht=" + e, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [Y.issuerOrigin]
                    }
                }).then(function(g) {
                    if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 22);
                    return g.text().then(function(h) {
                        return JSON.parse(h)
                    })
                }).catch(function(g) {
                    return p.Promise.reject({
                        state: 21,
                        error: g
                    })
                })
            });
            var d = qd(window);
            return a.then(function(e) {
                var f = Y.issuerOrigin + Y.issuancePath;
                return e && e.srqt && e.cs ? (Z(Y.issuerOrigin, 23), window.fetch(f + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(function(g) {
                    if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 25);
                    return e
                }).catch(function(g) {
                    return p.Promise.reject({
                        state: 24,
                        error: g
                    })
                })) : e
            }).then(function(e) {
                if (e && e.srdt && e.cs) return Z(Y.issuerOrigin, 26), window.fetch(b + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "refresh"
                    }
                }).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 28, !0)
                }).catch(function(f) {
                    return p.Promise.reject({
                        state: 27,
                        error: f
                    })
                })
            }).then(function() {
                Z(Y.issuerOrigin, 29)
            }).catch(function(e) {
                if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                    if ("number" ===
                        typeof e.state && e.error instanceof Error) {
                        Z(Y.issuerOrigin, e.state);
                        var f = R(Nf);
                        Math.random() <= f && Yf({
                            state: e.state,
                            err: e.error.toString()
                        })
                    } else throw Error(e);
                else throw e;
            })
        }
    }

    function kp(a) {
        if (document.hasTrustToken && !Q(Lf) && a.i) {
            var b = window.goog_tt_promise_map;
            if (b && b instanceof p.Map) {
                var c = [];
                if (a.h.some(function(e) {
                        return e.issuerOrigin === X.issuerOrigin
                    })) {
                    var d = b.get(X.issuerOrigin);
                    d || (d = ip(), b.set(X.issuerOrigin, d));
                    c.push(d)
                }
                a.h.some(function(e) {
                    return e.issuerOrigin === Y.issuerOrigin
                }) && (a = b.get(Y.issuerOrigin), a || (a = jp(), b.set(Y.issuerOrigin, a)), c.push(a));
                if (0 < c.length && p.Promise && p.Promise.all) return p.Promise.all(c)
            }
        }
    };

    function lp(a) {
        H.call(this, a, -1, mp)
    }
    w(lp, H);

    function np(a, b) {
        return C(a, 2, b)
    }

    function op(a, b) {
        return C(a, 3, b)
    }

    function pp(a, b) {
        return C(a, 4, b)
    }

    function qp(a, b) {
        return C(a, 5, b)
    }

    function rp(a, b) {
        return C(a, 9, b)
    }

    function sp(a, b) {
        return Vb(a, 10, b)
    }

    function tp(a, b) {
        return C(a, 11, b)
    }

    function up(a, b) {
        return C(a, 1, b)
    }

    function vp(a, b) {
        return C(a, 7, b)
    }

    function wp(a) {
        H.call(this, a)
    }
    w(wp, H);
    wp.prototype.getVersion = function() {
        return Wb(this, 2)
    };
    var mp = [10, 6];
    var xp = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function yp() {
        var a;
        return null != (a = L.google_tag_data) ? a : L.google_tag_data = {}
    }

    function zp() {
        var a, b;
        if ("function" !== typeof(null == (a = L.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)) return null;
        var c = yp();
        if (c.uach_promise) return c.uach_promise;
        a = L.navigator.userAgentData.getHighEntropyValues(xp).then(function(d) {
            null != c.uach || (c.uach = d);
            return d
        });
        return c.uach_promise = a
    }

    function Ap(a) {
        var b;
        return tp(sp(qp(np(up(pp(vp(rp(op(new lp, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new wp;
            d = C(d, 1, c.brand);
            return C(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function Bp() {
        var a, b;
        return null != (b = null == (a = zp()) ? void 0 : a.then(function(c) {
            return Ap(c)
        })) ? b : null
    };

    function Cp(a, b) {
        b.google_ad_host || (a = pm(a)) && (b.google_ad_host = a)
    }

    function Dp(a, b, c) {
        c = void 0 === c ? "" : c;
        L.google_sa_impl && !L.document.getElementById("google_shimpl") && (delete L.google_sa_queue, delete L.google_sa_impl);
        L.google_sa_queue || (L.google_sa_queue = [], L.google_process_slots = Wj(215, function() {
            return Ep(L.google_sa_queue)
        }), a = Fp(c, a, b), Wc(L.document, a).id = "google_shimpl")
    }

    function Ep(a) {
        var b = a.shift();
        "function" === typeof b && Vj(216, b);
        a.length && x.setTimeout(Wj(215, function() {
            return Ep(a)
        }), 0)
    }

    function Gp(a, b, c) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
    }

    function Fp(a, b, c) {
        var d = Math.random() < R(uf) ? zc(yc(b.zb).toString()) : null;
        b = E(c, 4) ? b.yb : b.Ab;
        d = d ? d : zc(yc(b).toString());
        b = {};
        a: {
            if (E(c, 4)) {
                if (c = a || Ho(L)) {
                    var e = {};
                    c = (e.client = c, e.plah = L.location.host, e);
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            c = {}
        }
        Hp(c, b);
        a: {
            if (!Q(cf) && (Q(rf) || Q(bf)) && (a = a || Ho(L), c = om(L), a)) {
                e = {};
                a = (e.client = a, e.plah = L.location.host, e.ama_t = "adsense", e.asntp = R(Te), e.asntpv = R(Xe), e.asntpl = R(Ve), e.asntpm = R(We), e.asntpc = R(Ue), e.asna = R(Pe), e.asnd = R(Qe), e.asnp = R(Re), e.asns =
                    R(Se), e.asmat = R(Oe), e.asptt = R(Ye), e.easpi = Q(rf), e.asro = Q(Ze), e.host = c, e.easai = Q(pf), e);
                break a
            }
            a = {}
        }
        Hp(a, b);
        Hp(Rf() ? {
            bust: Rf()
        } : {}, b);
        return wc(d, b)
    }

    function Hp(a, b) {
        ed(a, function(c, d) {
            void 0 === b[d] && (b[d] = c)
        })
    }

    function Ip(a) {
        a: {
            var b = void 0 === b ? !1 : b;
            for (var c = [x.top], d = [], e = 0, f; f = c[e++];) {
                b && !Uc(f) || d.push(f);
                try {
                    if (f.frames)
                        for (var g = 0; g < f.frames.length && 1024 > c.length; ++g) c.push(f.frames[g])
                } catch (k) {}
            }
            for (b = 0; b < d.length; b++) try {
                var h = d[b].frames.google_esf;
                if (h) {
                    td = h;
                    break a
                }
            } catch (k) {}
            td = null
        }
        if (td) return null;d = Xc("IFRAME");d.id = "google_esf";d.name = "google_esf";d.src = yc(a.Fb).toString();d.style.display = "none";
        return d
    }

    function Jp(a, b, c, d) {
        Kp(a, b, c, d, function(e, f) {
            e = e.document;
            for (var g = void 0, h = 0; !g || e.getElementById(g + (Q(Ff) ? "_host" : "_anchor"));) g = "aswift_" + h++;
            e = g;
            g = Number(f.google_ad_width || 0);
            f = Number(f.google_ad_height || 0);
            if (Q(Ff)) h = Xc("DIV"), h.id = e + "_host", Bn(h, g, f), h.style.display = "inline-block", f = {
                Pa: h,
                Ua: h
            };
            else {
                h = Xc("INS");
                h.id = e + "_anchor";
                Bn(h, g, f);
                h.style.display = "block";
                var k = Xc("INS");
                k.id = e + "_expand";
                Bn(k, g, f);
                k.style.display = "inline-table";
                k.appendChild(h);
                f = {
                    Pa: h,
                    Ua: k
                }
            }
            g = f;
            f = g.Ua;
            g = g.Pa;
            c.appendChild(f);
            return {
                nb: e,
                outerInsElement: f,
                innerInsElement: g
            }
        })
    }

    function Kp(a, b, c, d, e) {
        var f = e(a, b);
        e = f.nb;
        Lp(a, c, b);
        c = Ka;
        var g = (new Date).getTime();
        b.google_lrv = Wb(d, 2);
        b.google_async_iframe_id = e;
        b.google_start_time = c;
        b.google_bpp = g > c ? g - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[e] = b;
        d = a.document.getElementById(e + (Q(Ff) ? "_host" : "_anchor")) ? function(h) {
            return h()
        } : function(h) {
            return window.setTimeout(h, 0)
        };
        Gp(a, function() {
            if (Q(Ef)) {
                var h = f.outerInsElement;
                var k = f.innerInsElement;
                if (!h || !k)
                    if (k = a.document.getElementById(String(b.google_async_iframe_id) + (Q(Ff) ?
                            "_host" : "_anchor")), h = a.document.getElementById(String(b.google_async_iframe_id) + (Q(Ff) ? "_host" : "_expand")), null == k || null == h) throw Error("no_ins");
                h = {
                    pubWin: a,
                    vars: b,
                    outerInsElement: h,
                    innerInsElement: k
                }
            } else h = {
                pubWin: a,
                vars: b
            };
            (h = a.google_sa_impl(h)) && h.catch && Yj(911, h)
        }, d)
    }

    function Lp(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || "html" != d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !Cn[c.google_ad_width + "x" + c.google_ad_height] && "aa" == c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
                c.google_orig_ad_height || c.google_ad_height
            ];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = fd(e.join(":")).toString();
            var h = void 0 === h ? !1 : h;
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = "";
                void 0 !== h && h || (f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "");
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        for (var k = b.parentElement.childNodes, l = 0, m = 0; m < k.length; ++m) {
                            var q = k[m];
                            if (q.nodeName && q.nodeName.toString().toLowerCase() ===
                                g) {
                                if (b === q) {
                                    g = "." + l;
                                    break a
                                }++l
                            }
                        }
                    }
                    g = ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            h = e.join() + ":";
            b = [];
            if (a) try {
                var r = a.parent;
                for (e = 0; r && r !== a && 25 > e; ++e) {
                    var A = r.frames;
                    for (d = 0; d < A.length; ++d)
                        if (a === A[d]) {
                            b.push(d);
                            break
                        }
                    a = r;
                    r = a.parent
                }
            } catch (K) {}
            c.google_ad_dom_fingerprint = fd(h + b.join()).toString()
        }
    }

    function Mp() {
        var a = Vc(x);
        a && (a = mg(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = {
            debugCard: null,
            debugCardRequested: !1
        }))
    }

    function Np(a) {
        ep();
        fp(Yl(), Wb(a, 8)) || Wj(779, function() {
            var b = window;
            b = void 0 === b ? window : b;
            b = Q(b.PeriodicSyncManager ? Jf : Kf);
            var c = Q(Mf);
            b = new cp(!0, b, c);
            0 < R(Pf) ? L.google_trust_token_operation_promise = kp(b) : kp(b)
        })();
        a = Bp();
        null != a && a.then(function(b) {
            a: {
                wb = !0;
                try {
                    var c = JSON.stringify(b.toJSON(), bc);
                    break a
                } finally {
                    wb = !1
                }
                c = void 0
            }
            L.google_user_agent_client_hint = c
        });
        an()
    };

    function Op(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            case "google_allow_expandable_ads":
                return /^true$/.test(b);
            default:
                return b
        }
    }

    function Pp(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "";
            (c = Tc(c)) && (b.google_ad_client = Op("google_ad_client", c))
        }
        a = a.attributes;
        c = a.length;
        for (var d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                var f = La(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                b.hasOwnProperty(f) || (e = Op(f, e.value), null !== e && (b[f] = e))
            }
        }
    }

    function Qp(a) {
        if (a = wd(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function Rp(a, b, c, d) {
        Pp(a, b);
        if (c.document && c.document.body && !mo(c, b) && !b.google_reactive_ad_format) {
            var e = parseInt(a.style.width, 10),
                f = qo(a, c);
            if (0 < f && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!Cn[e + "x" + g];
                var h = f;
                if (e) {
                    var k = Dn(f, g);
                    if (k) h = k, b.google_ad_format = k + "x" + g + "_0ads_al";
                    else throw new U("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null, b.google_override_format = !0);
                f = h;
                a.style.width = f + "px";
                g = go(f, "auto", c, a, b);
                h = f;
                g.size().i(c, b,
                    a);
                Pn(g, h, b);
                g = g.size();
                b.google_responsive_formats = null;
                g.minWidth() > f && !e && (b.google_ad_width = g.minWidth(), a.style.width = g.minWidth() + "px")
            }
        }
        e = a.offsetWidth || Mi(a, c, "width", J) || b.google_ad_width || 0;
        f = Ha(go, e, "auto", c, a, b, !1, !0);
        if (!Q(mf) && 488 > og(c)) {
            g = Vc(c) || c;
            h = b.google_ad_client;
            d = g.location && "#ftptohbh" === g.location.hash ? 2 : Dm(g.location, "google_responsive_slot_preview") || Q(wf) ? 1 : Q(vf) ? 2 : $l(g, 1, h, d) ? 1 : 0;
            if (g = 0 !== d) b: if (b.google_reactive_ad_format || Q(nf) && b.google_ad_resize || mo(c, b) || Bi(a, b)) g = !1;
                else {
                    for (g = a; g; g = g.parentElement) {
                        h = Yc(g, c);
                        if (!h) {
                            b.gfwrnwer = 18;
                            g = !1;
                            break b
                        }
                        if (!$a(["static", "relative"], h.position)) {
                            b.gfwrnwer = 17;
                            g = !1;
                            break b
                        }
                    }
                    g = Fi(c, a, e, .3, b);
                    !0 !== g ? (b.gfwrnwer = g, g = !1) : g = c === c.top ? !0 : !1
                }
            g ? (b.google_resizing_allowed = !0, b.ovlp = !0, 2 === d ? (d = {}, Pn(f(), e, d), b.google_resizing_width = d.google_ad_width, b.google_resizing_height = d.google_ad_height, b.iaaso = !1) : (b.google_ad_format = "auto", b.iaaso = !0, b.armr = 1), d = !0) : d = !1
        } else d = !1;
        if (e = mo(c, b)) oo(e, a, b, c, d);
        else {
            if (Bi(a, b)) {
                if (d = Yc(a, c)) a.style.width =
                    d.width, a.style.height = d.height, Ai(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = Qp(c)
            } else Ai(a.style, b);
            c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? oo(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = Gi(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };

    function Sp(a) {
        this.j = new p.Set;
        this.A = xd() || window;
        this.h = R(Me);
        var b = 0 < this.h && dd() < 1 / this.h;
        this.v = (this.i = !!gk(ck(), 30, b)) ? qd(this.A) : 0;
        this.m = this.i ? Ho(this.A) : "";
        this.l = null != a ? a : new Tg(100)
    }

    function Tp() {
        var a = P(Sp);
        var b = new ql;
        b = C(b, 1, ng(a.A).scrollWidth);
        b = C(b, 2, ng(a.A).scrollHeight);
        var c = new ql;
        c = C(c, 1, og(a.A));
        c = C(c, 2, ng(a.A).clientHeight);
        var d = new sl;
        d = C(d, 1, a.v);
        d = C(d, 2, a.m);
        d = C(d, 3, a.h);
        var e = new rl;
        b = Tb(e, 2, b);
        b = Tb(b, 1, c);
        b = Ub(d, 4, tl, b);
        a.i && !a.j.has(1) && (a.j.add(1), Og(a.l, b))
    };
    var Up = ja(["(a=0)=>{let b;const c=class{};}"]);

    function Vp() {
        var a = Up[0];
        var b = rc();
        a = b ? b.createScript(a) : a;
        a = new tc(a, sc);
        try {
            b = window;
            var c = a instanceof tc && a.constructor === tc ? a.h : "type_error:SafeScript";
            b.eval(c) === c && b.eval(c.toString());
            return [!0, ""]
        } catch (d) {
            return [!1, String(d)]
        }
    };

    function Wp(a) {
        var b = window;
        var c = void 0 === c ? null : c;
        Kc(b, "message", function(d) {
            try {
                var e = JSON.parse(d.data)
            } catch (f) {
                return
            }!e || "sc-cnf" !== e.googMsgType || c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d) || a(e, d)
        })
    };

    function Xp(a, b) {
        b = void 0 === b ? 500 : b;
        Jd.call(this);
        this.i = a;
        this.va = b;
        this.h = null;
        this.m = {};
        this.l = null
    }
    w(Xp, Jd);
    Xp.prototype.j = function() {
        this.m = {};
        this.l && (Lc(this.i, "message", this.l), delete this.l);
        delete this.m;
        delete this.i;
        delete this.h;
        Jd.prototype.j.call(this)
    };

    function Yp(a) {
        Jd.call(this);
        this.l = a;
        this.h = null;
        this.i = !1
    }
    w(Yp, Jd);
    var Zp = null,
        $p = [],
        aq = new p.Map,
        bq = -1;

    function cq(a) {
        return Ui.test(a.className) && "done" != a.dataset.adsbygoogleStatus
    }

    function dq(a, b, c) {
        a.dataset.adsbygoogleStatus = "done";
        eq(a, b, c)
    }

    function eq(a, b, c) {
        var d = window;
        d.google_spfd || (d.google_spfd = Rp);
        var e = b.google_reactive_ads_config;
        e || Rp(a, b, d, c);
        Cp(d, b);
        if (!fq(a, b, d)) {
            e || (d.google_lpabyc = Ci(a, d) + Mi(a, d, "height", J));
            if (e) {
                e = e.page_level_pubvars || {};
                if (V(L).page_contains_reactive_tag && !V(L).allow_second_reactive_tag) {
                    if (e.pltais) {
                        mm(!1);
                        return
                    }
                    throw new U("Only one 'enable_page_level_ads' allowed per page.");
                }
                V(L).page_contains_reactive_tag = !0;
                mm(7 === e.google_pgb_reactive)
            }
            b.google_unique_id = zd(d);
            ed(zo, function(f, g) {
                b[g] = b[g] ||
                    d[g]
            });
            b.google_loader_used = "aa";
            b.google_reactive_tag_first = 1 === (V(L).first_tag_on_page || 0);
            Vj(164, function() {
                Jp(d, b, a, c)
            })
        }
    }

    function fq(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
            f = km(c);
        if (f && f.Ja && "on" != b.google_adtest && !e) {
            e = Ci(a, c);
            var g = ng(c).clientHeight;
            if (!f.ra || f.ra && ((0 == g ? null : e / g) || 0) >= f.ra) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = Ba(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", d), "slot" == f.Db && (null !== jd(a.getAttribute("width")) &&
                a.setAttribute("width", 0), null !== jd(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = Yc(a, c)) && "none" == f.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format ||
            !a ? !1 : (x.console && x.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function gq(a) {
        var b = document.getElementsByTagName("INS");
        for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
            var e = d;
            if (cq(e) && "reserved" != e.dataset.adsbygoogleStatus && (!a || d.id === a)) return d
        }
        return null
    }

    function hq(a, b, c) {
        if (a && a.shift)
            for (var d = 20; 0 < a.length && 0 < d;) {
                try {
                    iq(a.shift(), b, c)
                } catch (e) {
                    setTimeout(function() {
                        throw e;
                    })
                }--d
            }
    }

    function jq() {
        var a = Xc("INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        md(a);
        return a
    }

    function kq(a, b) {
        var c = {};
        ed(jg, function(f, g) {
            !1 === a.enable_page_level_ads ? c[g] = !1 : a.hasOwnProperty(g) && (c[g] = a[g])
        });
        Aa(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        var d = jq();
        sd.body.appendChild(d);
        var e = {};
        e = (e.google_reactive_ads_config = c, e.google_ad_client = a.google_ad_client, e);
        e.google_pause_ad_requests = !!V(L).pause_ad_requests;
        dq(d, e, b)
    }

    function lq(a, b) {
        function c() {
            return kq(a, b)
        }
        mg(x).wasPlaTagProcessed = !0;
        var d = x.document;
        if (d.body || "complete" == d.readyState || "interactive" == d.readyState) c();
        else {
            var e = Jc(Wj(191, c));
            Kc(d, "DOMContentLoaded", e);
            (new x.MutationObserver(function(f, g) {
                d.body && (e(), g.disconnect())
            })).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function iq(a, b, c) {
        var d = {};
        Vj(165, function() {
            mq(a, d, b, c)
        }, function(e) {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }

    function nq(a) {
        delete a.google_checked_head;
        ed(a, function(b, c) {
            Ti[c] || (delete a[c], x.console.warn("AdSense head tag doesn't support " + c.replace("google", "data").replace(/_/g, "-") + " attribute."))
        })
    }

    function oq(a, b) {
        var c = L.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || L.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = V(window);
            if (d.head_tag_slot_vars) pq(c);
            else {
                var e = {};
                Pp(c, e);
                nq(e);
                var f = pc(e);
                d.head_tag_slot_vars = f;
                c = {
                    google_ad_client: e.google_ad_client,
                    enable_page_level_ads: e
                };
                L.adsbygoogle || (L.adsbygoogle = []);
                d = L.adsbygoogle;
                d.loaded ? d.push(c) : d.splice(0, 0, c);
                var g;
                e.google_adbreak_test || (null == (g = Yb(b, Il, 13, Kb)) ? 0 : E(g, 3)) && Q(Bf) ? qq(f, a) : Wp(function() {
                    qq(f, a)
                })
            }
        }
    }

    function pq(a) {
        var b = V(window).head_tag_slot_vars,
            c = a.getAttribute("src") || "";
        if ((a = Tc(c) || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client) throw new U("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
    }

    function rq(a) {
        if ("object" === typeof a && null != a) {
            if ("string" === typeof a.type) return 2;
            if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks) return 3
        }
        return 0
    }

    function mq(a, b, c, d) {
        if (null == a) throw new U("push() called with no parameters.");
        Ib(d, 14) && sq(a, Mb(Wl(d), 1), Wb(d, 2));
        var e = rq(a);
        if (0 !== e) Q(sf) && (d = nm(), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(), d.adsbygoogle_execution_start_time = Ka)), null == Zp ? (tq(a), $p.push(a)) : 3 === e ? Vj(787, function() {
            Zp.handleAdConfig(a)
        }) : Yj(730, Zp.handleAdBreak(a));
        else {
            Ka = (new Date).getTime();
            Dp(c, d, uq(a));
            vq();
            a: {
                if (void 0 != a.enable_page_level_ads) {
                    if ("string" === typeof a.google_ad_client) {
                        e = !0;
                        break a
                    }
                    throw new U("'google_ad_client' is missing from the tag config.");
                }
                e = !1
            }
            if (e) wq(a, d);
            else if ((e = a.params) && ed(e, function(g, h) {
                    b[h] = g
                }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                e = xq(a.element);
                Pp(e, b);
                c = V(x).head_tag_slot_vars || {};
                ed(c, function(g, h) {
                    b.hasOwnProperty(h) || (b[h] = g)
                });
                if (e.hasAttribute("data-require-head") && !V(x).head_tag_slot_vars) throw new U("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new U("Ad client is missing from the slot.");
                b.google_apsail = fm(b.google_ad_client);
                var f = (c = 0 === (V(L).first_tag_on_page || 0) && Km(b)) && Lm(c);
                c && (f || (wq(c, d), V(L).skip_next_reactive_tag = !0), Q(zf) && f && yq(c));
                0 === (V(L).first_tag_on_page || 0) && (V(L).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!V(L).pause_ad_requests;
                dq(e, b, d);
                !Q(zf) && c && f && yq(c)
            }
        }
    }
    var zq = !1;

    function sq(a, b, c) {
        Q( of ) && !zq && (zq = !0, (a = uq(a)) || (a = Ho(L)), Xj("predictive_abg", {
            a_c: a,
            p_c: b,
            b_v: c
        }, .01))
    }

    function uq(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }

    function vq() {
        if (Q(ff)) {
            var a = km(L);
            if (!(a = a && a.Ja)) {
                try {
                    var b = L.localStorage
                } catch (c) {
                    b = null
                }
                b = b ? Fl(Gl(b)) : null;
                a = !(b && Dl(b) && b)
            }
            a || lm(L, 1)
        }
    }

    function yq(a) {
        rd(function() {
            mg(x).wasPlaTagProcessed || x.adsbygoogle && x.adsbygoogle.push(a)
        })
    }

    function wq(a, b) {
        if (V(L).skip_next_reactive_tag) V(L).skip_next_reactive_tag = !1;
        else {
            0 === (V(L).first_tag_on_page || 0) && (V(L).first_tag_on_page = 1);
            if (a.tag_partner) {
                var c = a.tag_partner,
                    d = V(x);
                d.tag_partners = d.tag_partners || [];
                d.tag_partners.push(c)
            }
            Mm(a, b);
            lq(a, b)
        }
    }

    function xq(a) {
        if (a) {
            if (!cq(a) && (a.id ? a = gq(a.id) : a = null, !a)) throw new U("'element' has already been filled.");
            if (!("innerHTML" in a)) throw new U("'element' is not a good DOM element.");
        } else if (a = gq(), !a) throw new U("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }

    function Aq() {
        var a = new mk(L),
            b = new Xp(L),
            c = new Yp(L),
            d = L.__cmp ? 1 : 0;
        a = nk(a) ? 1 : 0;
        var e, f;
        (f = "function" === typeof(null == (e = b.i) ? void 0 : e.__uspapi)) || (b.h ? b = b.h : (b.h = kd(b.i, "__uspapiLocator"), b = b.h), f = null != b);
        b = f ? 1 : 0;
        c.i || (c.h || (c.h = kd(c.l, "googlefcPresent")), c.i = !0);
        Xj("cmpMet", {
            tcfv1: d,
            tcfv2: a,
            usp: b,
            fc: c.h ? 1 : 0,
            ptt: 9
        }, R(Le))
    }

    function Bq(a) {
        a = {
            value: E(a, 16)
        };
        var b = .01;
        R(hf) && (a.eid = R(hf), b = 1);
        a.frequency = b;
        Xj("new_abg_tag", a, b)
    }

    function Cq(a) {
        ck().S[ek(26)] = !!Number(a)
    }

    function Dq(a) {
        Number(a) ? V(L).pause_ad_requests = !0 : (V(L).pause_ad_requests = !1, a = function() {
            if (!V(L).pause_ad_requests) {
                var b = void 0 === b ? {} : b;
                if ("function" === typeof window.CustomEvent) var c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b);
                else c = document.createEvent("CustomEvent"), c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail);
                L.dispatchEvent(c)
            }
        }, x.setTimeout(a, 0), x.setTimeout(a, 1E3))
    }

    function Eq(a) {
        Xj("adsenseGfpKnob", {
            value: a,
            ptt: 9
        }, .1);
        switch (a) {
            case 0:
            case 2:
                a = !0;
                break;
            case 1:
                a = !1;
                break;
            default:
                throw Error("Illegal value of cookieOptions: " + a);
        }
        L._gfp_a_ = a
    }

    function Fq(a) {
        a && a.call && "function" === typeof a && window.setTimeout(a, 0)
    }

    function qq(a, b) {
        b = Im(wc(zc(yc(b.Cb).toString()), Rf() ? {
            bust: Rf()
        } : {})).then(function(c) {
            null == Zp && (c.init(a), Zp = c, Gq())
        });
        Yj(723, b);
        t(b, "finally").call(b, function() {
            $p.length = 0;
            Xj("slotcar", {
                event: "api_ld",
                time: Date.now() - Ka,
                time_pr: Date.now() - bq
            })
        })
    }

    function Gq() {
        for (var a = v(t(aq, "keys").call(aq)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = aq.get(b); - 1 !== c && (x.clearTimeout(c), aq.delete(b))
        }
        a = {};
        for (b = 0; b < $p.length; a = {
                ha: a.ha,
                ea: a.ea
            }, b++) aq.has(b) || (a.ea = $p[b], a.ha = rq(a.ea), Vj(723, function(d) {
            return function() {
                3 === d.ha ? Zp.handleAdConfig(d.ea) : 2 === d.ha && Yj(730, Zp.handleAdBreakBeforeReady(d.ea))
            }
        }(a)))
    }

    function tq(a) {
        var b = $p.length;
        if (2 === rq(a) && "preroll" === a.type && null != a.adBreakDone) {
            -1 === bq && (bq = Date.now());
            var c = x.setTimeout(function() {
                try {
                    (0, a.adBreakDone)({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }), aq.set(b, -1), Xj("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    })
                } catch (d) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", d instanceof Error ? d : Error(String(d)))
                }
            }, 1E3 * R(Cf));
            aq.set(b, c)
        }
    }

    function Hq() {
        if (Q(rf) && !Q(Ze)) {
            if (Q(af)) {
                var a = L.document,
                    b = a.createElement("LINK"),
                    c = Q(qf) ? yd(Sm) : yd(Tm);
                Gc(b, c, "stylesheet");
                a.head.appendChild(b)
            }
            if (Q($e)) {
                Wm();
                return
            }
        }
        Q($e) && Wm()
    };
    (function(a, b, c, d) {
        d = void 0 === d ? function() {} : d;
        Tj.bb(Zj);
        Vj(166, function() {
            var e = Jo(b);
            wo(Wb(e, 2));
            Zl(E(e, 6));
            d();
            vd(16, [1, e.toJSON()]);
            var f = xd(wd(L)) || L,
                g = c(xo({
                    mb: a,
                    xb: Wb(e, 2)
                }), e);
            cm(f, e);
            An(f, e, null === L.document.currentScript ? 1 : Ym(g.Eb));
            Tp();
            if ((!Pa() || 0 <= Ma(Sa(), 11)) && (null == (L.Prototype || {}).Version || !Q(lf))) {
                Uj(Q(If));
                Np(e);
                ml();
                try {
                    Vo()
                } catch (q) {}
                Mp();
                oq(g, e);
                f = window;
                var h = f.adsbygoogle;
                if (!h || !h.loaded) {
                    if (Q(gf) && !E(e, 16)) try {
                        if (L.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]')) return
                    } catch (q) {}
                    Hq();
                    Bq(e);
                    R(Le) && Aq();
                    var k = {
                        push: function(q) {
                            iq(q, g, e)
                        },
                        loaded: !0
                    };
                    try {
                        Object.defineProperty(k, "requestNonPersonalizedAds", {
                            set: Cq
                        }), Object.defineProperty(k, "pauseAdRequests", {
                            set: Dq
                        }), Object.defineProperty(k, "cookieOptions", {
                            set: Eq
                        }), Object.defineProperty(k, "onload", {
                            set: Fq
                        })
                    } catch (q) {}
                    if (h)
                        for (var l = v(["requestNonPersonalizedAds", "pauseAdRequests", "cookieOptions"]), m = l.next(); !m.done; m = l.next()) m = m.value, void 0 !== h[m] && (k[m] = h[m]);
                    "_gfp_a_" in window || (window._gfp_a_ = !0);
                    hq(h, g, e);
                    f.adsbygoogle = k;
                    h &&
                        (k.onload = h.onload);
                    (f = Ip(g)) && document.documentElement.appendChild(f);
                    f = Vp();
                    Xj("modern_js", {
                        fy: D(e, 1, 0),
                        supports: f[0],
                        c: 2012,
                        e: f[1]
                    }, .01)
                }
            }
        })
    })("m202208040101", Io, function(a, b) {
        var c = 2012 < D(b, 1, 0) ? "_fy" + D(b, 1, 0) : "",
            d = Wb(b, 3),
            e = Wb(b, 2);
        b = yd(ro, a, c);
        d = yd(so, e, d);
        return {
            Cb: b,
            Ab: yd(to, a, c),
            yb: yd(uo, a, c),
            zb: yd(vo, a, c),
            Fb: d,
            Eb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}).call(this, "[2019,\"r20220803\",\"r20190131\",null,null,null,null,\".google.com.ng\",null,null,null,[[[1082,null,null,[1]],[null,62,null,[null,0.001]],[null,1130,null,[null,100]],[null,1126,null,[null,5000],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,5500]]]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[1131,null,null,[1]],[null,1142,null,[null,8]],[null,1165,null,[null,1000]],[null,1195,null,[null,1]],[null,1193,null,[null,100]],[null,1114,null,[null,1]],[null,1116,null,[null,300]],[null,1117,null,[null,100]],[null,1115,null,[null,1]],[null,1194,null,[null,1]],[1187,null,null,[1]],[null,1159,null,[null,500]],[null,1119,null,[null,300]],[1122,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1087,null,null,[1]],[1167,null,null,[1]],[1129,null,null,[1]],[null,1169,null,[null,15000]],[1053,null,null,[1]],[1100,null,null,[1]],[1161,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[null,1168,null,[null,15000]],[1036,null,null,[1]],[1184,null,null,[1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1034,null,[]],[null,1080,null,[null,5]],[1054,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[1033,null,null,[1]],[1141,null,null,[1]],[380254521,null,null,[],[[[1,[[4,null,63]]],[1]]]],[381914117,null,null,[1]],[null,null,null,[],null,1939],[null,null,null,[null,null,null,[\"AzoawhTRDevLR66Y6MROu167EDncFPBvcKOaQispTo9ouEt5LvcBjnRFqiAByRT+2cDHG1Yj4dXwpLeIhc98\/gIAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A6+nc62kbJgC46ypOwRsNW6RkDn2x7tgRh0wp7jb3DtFF7oEhu1hhm4rdZHZ6zXvnKZLlYcBlQUImC4d3kKihAcAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A\/9La288e7MDEU2ifusFnMg1C2Ij6uoa\/Z\/ylwJIXSsWfK37oESIPbxbt4IU86OGqDEPnNVruUiMjfKo65H\/CQwAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\"]],null,1934],[1947,null,null,[1]],[null,1972,null,[]],[392736476,null,null,[]],[null,null,null,[],null,1932],[432938498,null,null,[]]],[[12,[[200,[[42531605],[42531606]]],[200,[[42531607],[42531608]]],[50,[[44764001],[44764002]]],[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]]],[50,[[31067825],[31067826,[[1971,null,null,[1]]]]]],[10,[[44769661],[44769662,[[1973,null,null,[1]]]]]]]],[10,[[50,[[31068486],[31068487,[[1141,null,null,[]]]]]],[1,[[31068788],[31068789,[[1196,null,null,[1]]]]]],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[20,[[44760911],[44760912,[[1160,null,null,[1]]]],[44763827,[[1170,null,null,[1]]]],[44768832,[[1160,null,null,[1]]]]]],[10,[[44767166],[44767167]]],[null,[[44769173],[44769174],[44769175]]],[1,[[44769305],[44769306,[[313,null,null,[1]]]]]],[null,[[44755592],[44755593,[[null,null,1166,[null,null,\"h.3.0.0\"]]]],[44755594,[[null,null,1166,[null,null,\"h.3.0.0\"]]]],[44755653,[[null,null,1166,[null,null,\"h.3.0.0\"]]]]],null,51],[1,[[44770147],[44770148,[[null,null,1166,[null,null,\"h.3.0.0\"]]]]],null,51],[10,[[44770149],[44770150,[[null,null,1166,[null,null,\"h.3.0.0\"]]]]],null,51],[10,[[21066428],[21066429]]],[50,[[31067983],[31067984,[[null,1169,null,[null,61440]],[null,1168,null,[null,61440]]]]]],[1,[[31068226,[[null,1103,null,[null,31068226]]]],[31068227,[[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,31068227]],[1182,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[1162,null,null,[1]],[1120,null,null,[1]],[1164,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[10,[[31068260],[31068261,[[1177,null,null,[1]]]]]],[10,[[31068655,[[null,1103,null,[null,31068655]]]],[31068656,[[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,31068656]],[1182,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[null,1119,null,[null,300]],[1162,null,null,[1]],[1120,null,null,[1]],[1164,null,null,[1]]]],[31068657,[[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,31068657]],[1182,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[1186,null,null,[1]],[null,1119,null,[null,300]],[1162,null,null,[1]],[1120,null,null,[1]],[1164,null,null,[1]]]],[31068710,[[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,31068710]],[1182,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[1186,null,null,[1]],[1188,null,null,[1]],[null,1119,null,[null,300]],[1162,null,null,[1]],[1120,null,null,[1]],[1164,null,null,[1]]]],[44771003,[[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44771003]],[1182,null,null,[1]],[null,1114,null,[null,0.4]],[null,1116,null,[null,50]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[1186,null,null,[1]],[1188,null,null,[1]],[null,1119,null,[null,300]],[1162,null,null,[1]],[1120,null,null,[1]],[1164,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[1000,[[31068735,[[null,null,14,[null,null,\"31068735\"]]],[6,null,null,null,6,null,\"31068735\"]],[31068736,[[null,null,14,[null,null,\"31068736\"]]],[6,null,null,null,6,null,\"31068736\"]]],[4,null,55]],[1000,[[31068757,[[null,null,14,[null,null,\"31068757\"]]],[6,null,null,null,6,null,\"31068757\"]],[31068758,[[null,null,14,[null,null,\"31068758\"]]],[6,null,null,null,6,null,\"31068758\"]]],[4,null,55]],[10,[[31068770],[31068771,[[1197,null,null,[1]]]]]],[1000,[[31068774,[[null,null,14,[null,null,\"31068774\"]]],[6,null,null,null,6,null,\"31068774\"]],[31068775,[[null,null,14,[null,null,\"31068775\"]]],[6,null,null,null,6,null,\"31068775\"]]],[4,null,55]],[1000,[[31068808,[[null,null,14,[null,null,\"31068808\"]]],[6,null,null,null,6,null,\"31068808\"]],[31068809,[[null,null,14,[null,null,\"31068809\"]]],[6,null,null,null,6,null,\"31068809\"]]],[4,null,55]],[10,[[31068812,[[null,1103,null,[null,31068812]]]],[31068813,[[null,1195,null,[null,5]],[null,1103,null,[null,31068813]],[1182,null,null,[1]],[null,1114,null,[null,0.4]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[null,1194,null,[null,2]],[1186,null,null,[1]],[1120,null,null,[1]]]],[31068814,[[null,1195,null,[null,5]],[null,1103,null,[null,31068814]],[1182,null,null,[1]],[null,1114,null,[null,0.4]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[null,1194,null,[null,2]],[1186,null,null,[1]],[1188,null,null,[1]],[1120,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[50,[[44768688],[44768689,[[1190,null,null,[1]]]]],null,57],[1,[[44768761,[[null,1103,null,[null,44768761]],[1121,null,null,[1]]]],[44768762,[[null,1103,null,[null,44768762]],[1182,null,null,[1]],[null,1114,null,[null,0.4]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[1121,null,null,[1]],[1120,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[null,[[44770725,[[null,1195,null,[null,5]],[null,1103,null,[null,44770725]],[1182,null,null,[1]],[null,1114,null,[null,0.9]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[null,1194,null,[null,2]],[1120,null,null,[1]]]],[44770726,[[null,1195,null,[null,5]],[null,1103,null,[null,44770726]],[1182,null,null,[1]],[null,1114,null,[null,0.9]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[1180,null,null,[1]],[null,1194,null,[null,2]],[1120,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[10,[[44770727,[[null,1195,null,[null,5]],[null,1103,null,[null,44770727]],[1182,null,null,[1]],[null,1114,null,[null,0.4]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[null,1194,null,[null,2]],[1120,null,null,[1]]]],[44770728,[[null,1195,null,[null,5]],[null,1103,null,[null,44770728]],[1182,null,null,[1]],[null,1114,null,[null,0.4]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1108,null,[null,300]],[null,1115,null,[null,-1]],[null,1194,null,[null,2]],[1120,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[10,[[44770731,[[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44770731]],[1182,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[1162,null,null,[1]],[1120,null,null,[1]],[1164,null,null,[1]]]],[44770732,[[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44770732]],[1182,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1108,null,[null,300]],[null,1115,null,[null,-1]],[1162,null,null,[1]],[1120,null,null,[1]],[1164,null,null,[1]]]]],[4,null,55],49],[10,[[44770765],[44770766,[[1134,null,null,[1]]]]]],[500,[[44770826,[[null,1195,null,[null,5]],[null,1103,null,[null,44770826]],[1192,null,null,[1]],[1182,null,null,[1]],[null,1114,null,[null,0.4]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[null,1194,null,[null,2]],[1120,null,null,[1]]]]],[2,[[4,null,55],[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]],49],[300,[[44770827,[[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44770827]],[1192,null,null,[1]],[1182,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[1162,null,null,[1]],[1120,null,null,[1]],[1164,null,null,[1]]]]],[2,[[4,null,55],[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]],49],[1,[[44770844,[[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44770844]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[1162,null,null,[1]],[1120,null,null,[1]],[1164,null,null,[1]]]],[44770845,[[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1195,null,[null,2]],[null,1103,null,[null,44770845]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[null,1194,null,[null,2]],[1162,null,null,[1]],[1120,null,null,[1]],[1164,null,null,[1]]]],[44770846,[[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1195,null,[null,5]],[null,1103,null,[null,44770846]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[null,1194,null,[null,2]],[1162,null,null,[1]],[1120,null,null,[1]],[1164,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[1,[[44770880],[44770881,[[1171,null,null,[1]]]]]],[50,[[31061761],[31067422],[31067423,[[null,1032,null,[]]]],[31067605],[31068455],[31068456]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],15]]],[20,[[50,[[31062930],[31062931,[[380025941,null,null,[1]]]]],null,null,null,null,null,101,null,102],[50,[[31068721],[31068722]],null,null,null,null,null,201,null,102]]],[11,[[50,[[44766067],[44766069,[[1957,null,null,[1]]]]],null,48],[1,[[31068602],[31068603,[[447540095,null,null,[1]]]]],null,55],[10,[[31068604],[31068605,[[447540095,null,null,[1]]]]],[2,[[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"document.browsingTopics\"]]]],55],[1,[[31068606],[31068607,[[447540098,null,null,[1]],[447540095,null,null,[1]],[447540096,null,null,[1]]]],[31068608,[[447540098,null,null,[1]],[447540095,null,null,[1]],[447540097,null,null,[1]],[447540096,null,null,[1]]]]],null,55]]],[17,[[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[10,[[31060047]],null,null,null,44,null,900],[10,[[31060048],[31060049]],null,null,null,null,null,null,null,101],[10,[[31060566]]],[10,[[31068609],[31068610,[[447540098,null,null,[1]],[447540095,null,null,[1]],[447540096,null,null,[1]]]],[31068611,[[447540098,null,null,[1]],[447540095,null,null,[1]],[447540097,null,null,[1]],[447540096,null,null,[1]]]]],[2,[[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"document.browsingTopics\"]]]],null,null,null,null,null,null,112]]],[13,[[10,[[31065824],[31065825,[[424117738,null,null,[1]]]]]],[50,[[31068519],[31068520,[[450691643,null,null,[1]]]]]],[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[50,[[31064018],[31064019,[[1961,null,null,[1]]]]]],[1000,[[31065981,null,[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/(9[23456789]|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]]]]],[1000,[[31067146,null,[4,null,9,null,null,null,null,[\"document.browsingTopics\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067147,null,[2,[[4,null,9,null,null,null,null,[\"navigator.runAdAuction\"]],[4,null,9,null,null,null,null,[\"navigator.joinAdInterestGroup\"]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067148,null,[4,null,8,null,null,null,null,[\"attributionReporting\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067672,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067673,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067674,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067675,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068556,null,[4,null,8,null,null,null,null,[\"sharedStorage\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068557,null,[2,[[4,null,69,null,null,null,null,[\"shared-storage\"]],[1,[[4,null,70,null,null,null,null,[\"shared-storage\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[null,[[44768158,null,[2,[[4,null,8,null,null,null,null,[\"attributionReporting\"]],[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[44768159,null,[2,[[4,null,8,null,null,null,null,[\"attributionReporting\"]],[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]]]],null,null,[0.001,\"1000\",1,\"1000\"]],null,[[\"ca-pub-5855149998903976\",\"ca-pub-5896340931738974\",\"ca-pub-6764341647679797\",\"ca-pub-7898541075507723\",\"ca-pub-8610050614645263\"],[null,[]]],\"31068809\",null,null,443623087,[44759875,44759926,44759842,44763505]]");