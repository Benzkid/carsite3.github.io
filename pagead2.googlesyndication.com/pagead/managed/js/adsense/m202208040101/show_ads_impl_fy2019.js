(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var q, ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ca(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ea = ca(this),
        fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        ha = {},
        ia = {};

    function ja(a, b) {
        var c = ia[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function ka(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in ha ? f = ha : f = ea;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = fa && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ba(ha, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ia[d] && (a = 1E9 * Math.random() >>> 0, ia[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d), ba(f, ia[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    ka("globalThis", function(a) {
        return a || ea
    }, "es_2020");
    var la = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ma;
    if (fa && "function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
    else {
        var na;
        a: {
            var oa = {
                    a: !0
                },
                pa = {};
            try {
                pa.__proto__ = oa;
                na = pa.a;
                break a
            } catch (a) {}
            na = !1
        }
        ma = na ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var qa = ma;

    function ra(a, b) {
        a.prototype = la(b.prototype);
        a.prototype.constructor = a;
        if (qa) qa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Gf = b.prototype
    }
    ka("AggregateError", function(a) {
        function b(c, d) {
            d = Error(d);
            "stack" in d && (this.stack = d.stack);
            this.errors = c;
            this.message = d.message
        }
        if (a) return a;
        ra(b, Error);
        b.prototype.name = "AggregateError";
        return b
    }, "es_2021");
    ka("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : Array.from(b);
            return Promise.all(b.map(function(c) {
                return Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new ha.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    var u = this || self;

    function ta(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function ua(a) {
        var b = ta(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function va(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function xa(a) {
        return Object.prototype.hasOwnProperty.call(a, ya) && a[ya] || (a[ya] = ++za)
    }
    var ya = "closure_uid_" + (1E9 * Math.random() >>> 0),
        za = 0;

    function Aa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Ba(a, b, c) {
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

    function Ca(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ca = Aa : Ca = Ba;
        return Ca.apply(null, arguments)
    }

    function Da(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ea() {
        return Date.now()
    }

    function Fa(a, b) {
        a = a.split(".");
        var c = u;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Ga(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Gf = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Aj = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function Ia(a) {
        return a
    };
    var Ja = {
        Hi: 0,
        Gi: 1,
        Fi: 2
    };
    var Ka = {};

    function La(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, La);
        else {
            const c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    Ga(La, Error);
    La.prototype.name = "CustomError";
    var Ma;

    function Na(a, b) {
        a = a.split("%s");
        let c = "";
        const d = a.length - 1;
        for (let e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        La.call(this, c + a[d])
    }
    Ga(Na, La);
    Na.prototype.name = "AssertionError";

    function Oa(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Pa(a) {
        if (!Qa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ra, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Sa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ta, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ua, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Va, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Wa, "&#0;"));
        return a
    }
    var Ra = /&/g,
        Sa = /</g,
        Ta = />/g,
        Ua = /"/g,
        Va = /'/g,
        Wa = /\x00/g,
        Qa = /[\x00&<>"']/;

    function Xa(a, b) {
        return -1 != a.indexOf(b)
    }

    function Ya(a, b) {
        let c = 0;
        a = Oa(String(a)).split(".");
        b = Oa(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = a[g] || "",
                f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length) break;
                c = Za(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || Za(0 == e[2].length, 0 == f[2].length) || Za(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }

    function Za(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function $a() {
        var a = u.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function v(a) {
        return Xa($a(), a)
    };

    function ab() {
        return v("Opera")
    }

    function bb() {
        return v("Trident") || v("MSIE")
    }

    function cb() {
        return v("Firefox") || v("FxiOS")
    }

    function db() {
        return v("Safari") && !(eb() || v("Coast") || ab() || v("Edge") || v("Edg/") || v("OPR") || cb() || v("Silk") || v("Android"))
    }

    function eb() {
        return (v("Chrome") || v("CriOS")) && !v("Edge") || v("Silk")
    }

    function fb() {
        return v("Android") && !(eb() || cb() || ab() || v("Silk"))
    }

    function gb(a) {
        const b = {};
        a.forEach(c => {
            b[c[0]] = c[1]
        });
        return c => b[c.find(d => d in b)] || ""
    }

    function hb() {
        var a = $a();
        if (bb()) {
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
        let d;
        for (; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = gb(b);
        return ab() ? a(["Version", "Opera"]) :
            v("Edge") ? a(["Edge"]) : v("Edg/") ? a(["Edg"]) : v("Silk") ? a(["Silk"]) : eb() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function ib(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function jb(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function kb(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = "string" === typeof a ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function lb(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function mb(a, b, c) {
        let d = c;
        jb(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function nb(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function ob(a, b) {
        return 0 <= ib(a, b)
    }

    function pb(a, b) {
        b = ib(a, b);
        let c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function qb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function rb(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function sb(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function tb(a, b) {
        if (!ua(a) || !ua(b) || a.length != b.length) return !1;
        const c = a.length,
            d = ub;
        for (let e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    }

    function ub(a, b) {
        return a === b
    }

    function vb(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = vb.apply(null, sb(d, e, e + 8192));
                    for (let g = 0; g < f.length; g++) b.push(f[g])
                } else b.push(d)
        }
        return b
    }

    function wb(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; 0 < c; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };

    function xb(a) {
        xb[" "](a);
        return a
    }
    xb[" "] = function() {};

    function yb(a, b) {
        try {
            return xb(a[b]), !0
        } catch (c) {}
        return !1
    }

    function zb(a, b, c, d) {
        d = d ? d(b) : b;
        return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
    };
    var Ab = ab(),
        Bb = bb(),
        Cb = v("Edge"),
        Db = Cb || Bb,
        Eb = v("Gecko") && !(Xa($a().toLowerCase(), "webkit") && !v("Edge")) && !(v("Trident") || v("MSIE")) && !v("Edge"),
        Fb = Xa($a().toLowerCase(), "webkit") && !v("Edge");

    function Gb() {
        var a = u.document;
        return a ? a.documentMode : void 0
    }
    var Hb;
    a: {
        var Ib = "",
            Jb = function() {
                var a = $a();
                if (Eb) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Cb) return /Edge\/([\d\.]+)/.exec(a);
                if (Bb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Fb) return /WebKit\/(\S+)/.exec(a);
                if (Ab) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Jb && (Ib = Jb ? Jb[1] : "");
        if (Bb) {
            var Kb = Gb();
            if (null != Kb && Kb > parseFloat(Ib)) {
                Hb = String(Kb);
                break a
            }
        }
        Hb = Ib
    }
    var Lb = Hb,
        Mb = {};

    function Nb(a) {
        return zb(Mb, a, function() {
            return 0 <= Ya(Lb, a)
        })
    }
    var Ob;
    if (u.document && Bb) {
        var Pb = Gb();
        Ob = Pb ? Pb : parseInt(Lb, 10) || void 0
    } else Ob = void 0;
    var Qb = Ob;
    fb();
    eb();
    db();
    var Rb = {},
        Sb = null;

    function Tb(a, b) {
        void 0 === b && (b = 0);
        Ub();
        b = Rb[b];
        const c = Array(Math.floor(a.length / 3)),
            d = b[64] || "";
        let e = 0,
            f = 0;
        for (; e < a.length - 2; e += 3) {
            var g = a[e],
                h = a[e + 1],
                l = a[e + 2],
                k = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | l >> 6];
            l = b[l & 63];
            c[f++] = k + g + h + l
        }
        k = 0;
        l = d;
        switch (a.length - e) {
            case 2:
                k = a[e + 1], l = b[(k & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | k >> 4] + l + d
        }
        return c.join("")
    }

    function Vb(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return Tb(b, 3)
    }

    function Wb(a) {
        var b = [];
        Xb(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Yb(a) {
        var b = a.length,
            c = 3 * b / 4;
        c % 3 ? c = Math.floor(c) : Xa("=.", a[b - 1]) && (c = Xa("=.", a[b - 2]) ? c - 2 : c - 1);
        var d = new Uint8Array(c),
            e = 0;
        Xb(a, function(f) {
            d[e++] = f
        });
        return e !== c ? d.subarray(0, e) : d
    }

    function Xb(a, b) {
        function c(l) {
            for (; d < a.length;) {
                var k = a.charAt(d++),
                    m = Sb[k];
                if (null != m) return m;
                if (!/^[\s\xa0]*$/.test(k)) throw Error("Unknown base64 encoding at char: " + k);
            }
            return l
        }
        Ub();
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

    function Ub() {
        if (!Sb) {
            Sb = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                Rb[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Sb[f] && (Sb[f] = e)
                }
            }
        }
    };
    var Zb = "undefined" !== typeof Uint8Array;

    function $b(a) {
        return Zb && null != a && a instanceof Uint8Array
    }
    let ac;
    var bc = {};
    let cc;

    function dc(a) {
        if (a !== bc) throw Error("illegal external caller");
    }

    function ec() {
        return cc || (cc = new fc(null, bc))
    }
    var fc = class {
        constructor(a, b) {
            dc(b);
            this.P = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        }
        isEmpty() {
            return null == this.P
        }
    };
    const gc = Symbol(void 0);

    function hc(a, b) {
        Object.isFrozen(a) || (gc ? a[gc] |= b : void 0 !== a.sa ? a.sa |= b : Object.defineProperties(a, {
            sa: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    }

    function ic(a, b) {
        Object.isExtensible(a) && (gc ? a[gc] && (a[gc] &= ~b) : void 0 !== a.sa && (a.sa &= ~b))
    }

    function jc(a) {
        let b;
        gc ? b = a[gc] : b = a.sa;
        return null == b ? 0 : b
    }

    function kc(a, b) {
        gc ? a[gc] = b : void 0 !== a.sa ? a.sa = b : Object.defineProperties(a, {
            sa: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function lc(a) {
        hc(a, 1);
        return a
    }

    function mc(a) {
        return a ? !!(jc(a) & 2) : !1
    }

    function nc(a) {
        hc(a, 16);
        return a
    }

    function oc(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as shared mutably");
        ic(a, 16)
    }

    function pc(a, b) {
        b ? hc(a, 8) : ic(a, 8)
    }

    function qc(a, b) {
        kc(b, (jc(a) | 0) & -51)
    };

    function rc(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let sc;
    var tc = Object.freeze(lc([]));

    function uc(a) {
        if (mc(a.M)) throw Error("Cannot mutate an immutable Message");
    }

    function vc(a) {
        return {
            value: a,
            configurable: !1,
            writable: !1,
            enumerable: !1
        }
    };

    function wc(a, b, c = !1, d = !1) {
        if (Array.isArray(a)) return new b(d ? nc(a) : a);
        if (c) return new b
    };

    function xc(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if ($b(a)) return Tb(a);
                    if (a instanceof fc) {
                        var b = a.P;
                        b = null == b || "string" === typeof b ? b : Zb && b instanceof Uint8Array ? Tb(b) : null;
                        return null == b ? "" : a.P = b
                    }
                }
        }
        return a
    };

    function yc(a, b, c) {
        if (null != a) {
            if (Array.isArray(a)) a = zc(a, b, c);
            else if (rc(a)) {
                const d = {};
                for (let e in a) Object.prototype.hasOwnProperty.call(a, e) && (d[e] = yc(a[e], b, c));
                a = d
            } else a = b(a);
            return a
        }
    }

    function zc(a, b, c) {
        const d = Array.prototype.slice.call(a);
        c(a, d);
        for (a = 0; a < d.length; a++) d[a] = yc(d[a], b, c);
        return d
    }

    function Ac(a) {
        if (a && "object" == typeof a && a.toJSON) return a.toJSON();
        a = xc(a);
        return Array.isArray(a) ? zc(a, Ac, Bc) : a
    }

    function Cc(a) {
        if ("object" === typeof a) {
            if ($b(a)) return new Uint8Array(a);
            if (Array.isArray(a.M) && a.constructor !== Object) return Dc(a)
        }
        return a
    }

    function Bc() {};

    function Ec(a) {
        return a.A || (a.A = a.M[a.B + a.za] = {})
    }

    function y(a, b, c = !1) {
        return -1 === b ? null : b >= a.B ? a.A ? a.A[b] : void 0 : c && a.A && (c = a.A[b], null != c) ? c : a.M[b + a.za]
    }

    function z(a, b, c, d = !1, e = !1) {
        e || uc(a);
        if (b >= a.B || d) return Ec(a)[b] = c, a;
        void 0 !== a.A && a.B >= a.M.length ? (d = a.M.length - 1, e = b + a.za, e >= d ? (a.M[d] = void 0, a.M[e] = c, a.M.push(a.A)) : a.M[e] = c) : a.M[b + a.za] = c;
        void 0 !== a.A && b in a.A && delete a.A[b];
        return a
    }

    function Fc(a, b) {
        return null != y(a, b)
    }

    function Gc(a, b) {
        return Array.isArray(y(a, b))
    }

    function Hc(a, b, c, d) {
        let e = y(a, b, d);
        Array.isArray(e) ? e && jc(e) & 1 || lc(e) : e = tc;
        if (mc(a.M)) c & 1 || (hc(e, 2), Object.freeze(e));
        else if (e === tc || mc(e)) e = lc(Array.prototype.slice.call(e)), z(a, b, e, d);
        return e
    }

    function Ic(a, b, c = !1) {
        return Hc(a, b, 0, c)
    }

    function Jc(a, b) {
        a = y(a, b);
        return null == a ? a : +a
    }

    function B(a, b) {
        a = y(a, b);
        return null == a ? a : !!a
    }

    function C(a, b, c) {
        a = y(a, b);
        return null == a ? c : a
    }

    function Kc(a, b, c = !1) {
        a = B(a, b);
        return null == a ? c : a
    }

    function Lc(a, b, c) {
        null == c ? c = tc : lc(c);
        return z(a, b, c)
    }

    function Mc(a, b, c, d) {
        uc(a);
        c !== d ? z(a, b, c) : z(a, b, void 0, !1);
        return a
    }

    function Nc(a, b, c, d) {
        uc(a);
        (c = Oc(a, c)) && c !== b && null != d && (a.j && c in a.j && (a.j[c] = void 0), z(a, c));
        return z(a, b, d)
    }

    function Oc(a, b) {
        let c = 0;
        for (let d = 0; d < b.length; d++) {
            const e = b[d];
            null != y(a, e) && (0 !== c && z(a, c, void 0, !1, !0), c = e)
        }
        return c
    }

    function E(a, b, c, d = !1) {
        {
            a.j || (a.j = {});
            const e = a.j[c];
            if (e) b = e;
            else if (b = wc(y(a, c, d), b)) a.j[c] = b, hc(b.M, jc(a.M) & -33)
        }
        if (null == b) return b;
        mc(b.M) && !mc(a.M) && (b = b.Tc(), z(a, c, b.M, d), a.j[c] = b);
        return b
    }

    function Pc(a, b, c, d, e = !0) {
        a.j || (a.j = {});
        let f = a.j[c];
        d = Hc(a, c, 2, d);
        const g = !!(jc(a.M) & 16);
        var h = mc(d);
        h = mc(a.M) || h;
        if (!f) {
            f = [];
            let k = h;
            for (let m = 0; m < d.length; m++) {
                var l = d[m];
                k = k || mc(l);
                l = wc(l, b, !1, g);
                void 0 !== l && (f.push(l), h && hc(l.M, 2))
            }
            a.j[c] = f;
            pc(d, !k)
        }
        b = h || e;
        e = mc(f);
        b && !e && (Object.isFrozen(f) && (a.j[c] = f = f.slice()), hc(f, 2), Object.freeze(f));
        !b && e && (a.j[c] = f = f.slice());
        return f
    }

    function F(a, b, c, d = !1) {
        const e = mc(a.M);
        b = Pc(a, b, c, d, e);
        a = Ic(a, c, d);
        if (!(c = e) && (c = a)) {
            if (!a) throw Error("cannot check mutability state of non-array");
            c = !(jc(a) & 8)
        }
        if (c) {
            for (c = 0; c < b.length; c++)(d = b[c]) && mc(d.M) && !e && (b[c] = b[c].Tc(), a[c] = b[c].M);
            pc(a, !0)
        }
        return b
    }

    function Qc(a, b, c) {
        uc(a);
        a.j || (a.j = {});
        let d;
        null == c ? d = c = void 0 : d = c.M;
        a.j[b] = c;
        return z(a, b, d)
    }

    function Rc(a, b, c, d) {
        uc(a);
        a.j || (a.j = {});
        let e;
        null != d ? e = d.M : e = d = void 0;
        a.j[b] = d;
        return Nc(a, b, c, e)
    }

    function Sc(a, b, c) {
        uc(a);
        let d;
        if (null != c) {
            d = lc([]);
            let e = !1;
            for (let f = 0; f < c.length; f++) d[f] = c[f].M, e = e || mc(d[f]);
            a.j || (a.j = {});
            a.j[b] = c;
            pc(d, !e)
        } else a.j && (a.j[b] = void 0), d = tc;
        return z(a, b, d)
    }

    function J(a, b) {
        return C(a, b, "")
    }

    function Tc(a) {
        return y(a, 13 === Oc(a, Uc) ? 13 : -1)
    }

    function Vc(a, b, c, d) {
        c = Oc(a, d) === c ? c : -1;
        return E(a, b, c)
    }

    function Wc(a, b, c) {
        return Mc(a, b, c, !1)
    }

    function Xc(a, b) {
        return Mc(a, b, 1, 0)
    };

    function Yc(a, b) {
        if (null == b || "" == b) return new a;
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error("Expected to deserialize an Array but got " + ta(b) + ": " + b);
        Zc = b;
        nc(b);
        a = new a(b);
        Zc = null;
        return a
    }

    function Dc(a) {
        var b = zc(a.M, Cc, qc);
        nc(b);
        Zc = b;
        b = new a.constructor(b);
        Zc = null;
        $c(b, a);
        return b
    }

    function ad(a) {
        sc = !0;
        try {
            return JSON.stringify(a.toJSON(), bd)
        } finally {
            sc = !1
        }
    }
    var cd = class {
        constructor(a, b, c) {
            a || (a = Zc);
            Zc = null;
            var d = this.constructor.j || 0,
                e = 0 < d,
                f = this.constructor.messageId;
            a ? jc(a) & 16 && hc(a, 32) : (a = f ? [f] : [], hc(a, 48));
            e && 0 < a.length && rc(a[a.length - 1]) && "g" in a[a.length - 1] && (d = 0);
            this.za = (f ? 0 : -1) - d;
            this.j = void 0;
            this.M = a;
            a: {
                f = this.M.length;d = f - 1;
                if (f && (f = this.M[d], rc(f))) {
                    this.A = f;
                    f = Object.keys(f);
                    if (b = 0 < f.length) b: {
                        b = f;f = isNaN;a = b.length;
                        const g = "string" === typeof b ? b.split("") : b;
                        for (let h = 0; h < a; h++)
                            if (h in g && !f.call(void 0, g[h], h, b)) {
                                b = !1;
                                break b
                            }
                        b = !0
                    }
                    b ? this.B =
                        Number.MAX_VALUE : this.B = d - this.za;
                    break a
                }
                void 0 !== b && -1 < b ? (this.B = Math.max(b, d + 1 - this.za), this.A = void 0) : this.B = Number.MAX_VALUE
            }
            if (!e && this.A && "g" in this.A) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
            if (c)
                for (e = 0; e < c.length; e++) d = c[e], d < this.B ? (d += this.za, (b = this.M[d]) ? Array.isArray(b) && lc(b) : this.M[d] = tc) : (b = Ec(this), (f = b[d]) ? Array.isArray(f) && lc(f) : b[d] = tc)
        }
        toJSON() {
            const a = this.M;
            return sc ? a : zc(a, Ac, Bc)
        }
    };

    function bd(a, b) {
        return xc(b)
    }

    function $c(a, b) {
        b.tb && (a.tb = b.tb.slice());
        const c = b.j;
        if (c) {
            b = b.A;
            for (let f in c) {
                if (!Object.prototype.hasOwnProperty.call(c, f)) continue;
                const g = c[f];
                if (g) {
                    var d = !(!b || !b[f]),
                        e = +f;
                    if (Array.isArray(g)) {
                        if (g.length)
                            for (d = F(a, g[0].constructor, e, d), e = 0; e < Math.min(d.length, g.length); e++) $c(d[e], g[e])
                    } else(d = E(a, g.constructor, e, d)) && $c(d, g)
                }
            }
        }
    }
    let Zc;
    var dd = class extends cd {
        Tc() {
            return this
        }
    };
    Object.defineProperties(dd, {
        [Symbol.hasInstance]: vc(() => {
            throw Error("Cannot perform instanceof checks for MutableMessage");
        })
    });

    function ed(a, b, c, d, e, f) {
        (a = a.j && a.j[c]) ? Array.isArray(a) ? (e = f.jb ? lc(a.slice()) : a, Sc(b, c, e)) : Qc(b, c, a): (Zb && d instanceof Uint8Array ? e = d.length ? new fc(new Uint8Array(d), bc) : ec() : (Array.isArray(d) && (e ? hc(d, 2) : d && jc(d) & 1 && f.jb ? (e = d.slice(), kc(e, (jc(d) | 0) & -51), d = e) : oc(d)), e = d), z(b, c, e))
    };
    class K extends dd {
        Tc() {
            if (mc(this.M)) {
                var {
                    jb: a
                } = {
                    jb: !0
                };
                a = {
                    jb: a
                };
                const c = mc(this.M);
                if (c && !a.jb) throw Error("copyRepeatedFields must be true for frozen messages");
                c || oc(this.M);
                const d = new this.constructor;
                this.tb && (d.tb = this.tb.slice());
                const e = this.M;
                for (let f = 0; f < e.length; f++) {
                    const g = e[f];
                    if (f === e.length - 1 && rc(g))
                        for (b in g) {
                            if (!Object.prototype.hasOwnProperty.call(g, b)) continue;
                            const h = +b;
                            Number.isNaN(h) ? Ec(d)[b] = g[b] : ed(this, d, h, g[b], c, a)
                        } else ed(this, d, f - this.za, g, c, a)
                }
                var b = d
            } else b = this;
            return b
        }
    }
    Object.defineProperties(K, {
        [Symbol.hasInstance]: vc(Object[Symbol.hasInstance])
    });

    function fd(a, b) {
        this.j = a === gd && b || "";
        this.l = hd
    }
    fd.prototype.na = !0;
    fd.prototype.ka = function() {
        return this.j
    };

    function id(a) {
        return a instanceof fd && a.constructor === fd && a.l === hd ? a.j : "type_error:Const"
    }

    function jd(a) {
        return new fd(gd, a)
    }
    var hd = {},
        gd = {};
    var kd = jd("https://tpc.googlesyndication.com/sodar/%{basename}.js");
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function ld(a, b) {
        for (const c in a) b.call(void 0, a[c], c, a)
    }

    function md(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function nd(a) {
        var b = od;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function pd(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function qd(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const rd = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function sd(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < rd.length; f++) c = rd[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var td = {
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
    var ud;

    function vd() {
        if (void 0 === ud) {
            var a = null,
                b = u.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Ia,
                        createScript: Ia,
                        createScriptURL: Ia
                    })
                } catch (c) {
                    u.console && u.console.error(c.message)
                }
                ud = a
            } else ud = a
        }
        return ud
    };
    const wd = {};

    function xd(a) {
        return a instanceof yd && a.constructor === yd ? a.j : "type_error:SafeScript"
    }
    class yd {
        constructor(a, b) {
            this.j = b === wd ? a : "";
            this.na = !0
        }
        toString() {
            return this.j.toString()
        }
        ka() {
            return this.j.toString()
        }
    };
    var Ad = class {
        constructor(a, b) {
            this.j = b === zd ? a : ""
        }
        toString() {
            return this.j + ""
        }
    };
    Ad.prototype.na = !0;
    Ad.prototype.ka = function() {
        return this.j.toString()
    };

    function Bd(a, b) {
        a = Cd.exec(Dd(a).toString());
        var c = a[3] || "";
        return Ed(a[1] + Fd("?", a[2] || "", b) + Fd("#", c))
    }

    function Dd(a) {
        return a instanceof Ad && a.constructor === Ad ? a.j : "type_error:TrustedResourceUrl"
    }

    function Gd(a, b) {
        var c = id(a);
        if (!Hd.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(Id, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof fd ? id(d) : encodeURIComponent(String(d))
        });
        return Ed(a)
    }
    var Id = /%{(\w+)}/g,
        Hd = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        Cd = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        zd = {};

    function Ed(a) {
        const b = vd();
        a = b ? b.createScriptURL(a) : a;
        return new Ad(a, zd)
    }

    function Fd(a, b, c) {
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
    var Kd = class {
        constructor(a, b) {
            this.j = b === Jd ? a : ""
        }
        toString() {
            return this.j.toString()
        }
    };
    Kd.prototype.na = !0;
    Kd.prototype.ka = function() {
        return this.j.toString()
    };

    function Ld(a) {
        return a instanceof Kd && a.constructor === Kd ? a.j : "type_error:SafeUrl"
    }
    var Md = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        Nd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Od(a) {
        if (a instanceof Kd) return a;
        a = "object" == typeof a && a.na ? a.ka() : String(a);
        Nd.test(a) ? a = new Kd(a, Jd) : (a = String(a).replace(/(%0A|%0D)/g, ""), a = a.match(Md) ? new Kd(a, Jd) : null);
        return a
    }
    var Jd = {},
        Pd = new Kd("about:invalid#zClosurez", Jd);
    const Qd = {};

    function Rd(a) {
        return a instanceof Sd && a.constructor === Sd ? a.j : "type_error:SafeStyle"
    }

    function Td(a) {
        let b = "";
        for (let c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error(`Name allows only [-_a-zA-Z0-9], got: ${c}`);
                let d = a[c];
                null != d && (d = Array.isArray(d) ? d.map(Ud).join(" ") : Ud(d), b += `${c}:${d};`)
            }
        return b ? new Sd(b, Qd) : Vd
    }
    class Sd {
        constructor(a, b) {
            this.j = b === Qd ? a : "";
            this.na = !0
        }
        ka() {
            return this.j
        }
        toString() {
            return this.j.toString()
        }
    }
    var Vd = new Sd("", Qd);

    function Ud(a) {
        if (a instanceof Kd) return 'url("' + Ld(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof fd) a = id(a);
        else {
            a = String(a);
            var b = a.replace(Wd, "$1").replace(Wd, "$1").replace(Xd, "url");
            if (Yd.test(b)) {
                if (b = !Zd.test(a)) {
                    let c = b = !0;
                    for (let d = 0; d < a.length; d++) {
                        const e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && $d(a)
                }
                a = b ? ae(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new Na("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function $d(a) {
        let b = !0;
        const c = /^[-_a-zA-Z0-9]$/;
        for (let d = 0; d < a.length; d++) {
            const e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    const Yd = RegExp("^[-,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        Xd = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        Wd = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        Zd = /\/\*/;

    function ae(a) {
        return a.replace(Xd, (b, c, d, e) => {
            let f = "";
            d = d.replace(/^(['"])(.*)\1$/, (g, h, l) => {
                f = h;
                return l
            });
            b = (Od(d) || Pd).ka();
            return c + f + b + f + e
        })
    };
    const be = {};

    function ce(a) {
        return a instanceof de && a.constructor === de ? a.j : "type_error:SafeStyleSheet"
    }
    class de {
        constructor(a, b) {
            this.j = b === be ? a : "";
            this.na = !0
        }
        toString() {
            return this.j.toString()
        }
        ka() {
            return this.j
        }
    };
    const ee = {};

    function fe(a) {
        return a instanceof ge && a.constructor === ge ? a.j : "type_error:SafeHtml"
    }

    function he(a) {
        return a instanceof ge ? a : ie(Pa("object" == typeof a && a.na ? a.ka() : String(a)))
    }

    function ie(a) {
        const b = vd();
        a = b ? b.createHTML(a) : a;
        return new ge(a, ee)
    }

    function je(a, b, c) {
        var d = String(a);
        if (!ke.test(d)) throw Error("");
        if (d.toUpperCase() in le) throw Error("");
        return me(String(a), b, c)
    }

    function me(a, b, c) {
        var d = "";
        if (b)
            for (let g in b)
                if (Object.prototype.hasOwnProperty.call(b, g)) {
                    if (!ke.test(g)) throw Error("");
                    var e = b[g];
                    if (null != e) {
                        var f = g;
                        if (e instanceof fd) e = id(e);
                        else if ("style" == f.toLowerCase()) {
                            if (!va(e)) throw Error("");
                            e instanceof Sd || (e = Td(e));
                            e = Rd(e)
                        } else {
                            if (/^on/i.test(f)) throw Error("");
                            if (f.toLowerCase() in ne)
                                if (e instanceof Ad) e = Dd(e).toString();
                                else if (e instanceof Kd) e = Ld(e);
                            else if ("string" === typeof e) e = (Od(e) || Pd).ka();
                            else throw Error("");
                        }
                        e.na && (e = e.ka());
                        f = `${f}="` +
                            Pa(String(e)) + '"';
                        d += " " + f
                    }
                }
        b = `<${a}` + d;
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === td[a.toLowerCase()] ? b += ">" : (c = oe(c), b += ">" + fe(c).toString() + "</" + a + ">");
        return ie(b)
    }

    function pe(a) {
        const b = he(qe),
            c = [],
            d = e => {
                Array.isArray(e) ? e.forEach(d) : (e = he(e), c.push(fe(e).toString()))
            };
        a.forEach(d);
        return ie(c.join(fe(b).toString()))
    }

    function oe(a) {
        return pe(Array.prototype.slice.call(arguments))
    }
    class ge {
        constructor(a, b) {
            this.j = b === ee ? a : "";
            this.na = !0
        }
        ka() {
            return this.j.toString()
        }
        toString() {
            return this.j.toString()
        }
    }
    const ke = /^[a-zA-Z0-9-]+$/,
        ne = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        le = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };
    var re = ie("<!DOCTYPE html>"),
        qe = new ge(u.trustedTypes && u.trustedTypes.emptyHTML || "", ee),
        se = ie("<br>");
    var te;
    try {
        new URL("s://g"), te = !0
    } catch (a) {
        te = !1
    }
    const ue = te;

    function ve(a) {
        a: if (ue) {
            try {
                var b = new URL(a)
            } catch (c) {
                b = "https:";
                break a
            }
            b = b.protocol
        } else b: {
            b = document.createElement("a");
            try {
                b.href = a
            } catch (c) {
                b = void 0;
                break b
            }
            b = -1 !== [":", ""].indexOf(b.protocol) ? "https:" : b.protocol
        }
        return "javascript:" === b ? "about:invalid" : a
    };

    function we(a) {
        var b = xe(ye) || Pd;
        a.href = b instanceof Kd ? Ld(b) : ve(b)
    };

    function ze(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };
    const Ae = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function Be(a, b, c) {
        if (b instanceof Ad) a.href = Dd(b).toString();
        else {
            if (-1 === Ae.indexOf(c)) throw Error(`TrustedResourceUrl href attribute required with rel="${c}"`);
            a.href = b instanceof Kd ? Ld(b) : ve(b)
        }
        a.rel = c
    };

    function Ce(a) {
        var b;
        let c;
        const d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    }

    function De(a, b) {
        a.src = Dd(b);
        Ce(a)
    };

    function Ee() {
        return !1
    }

    function Fe() {
        return !0
    }

    function Ge(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function He(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Ie(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Je(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function Le(a, b) {
        let c = 0;
        return function(d) {
            u.clearTimeout(c);
            const e = arguments;
            c = u.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function Me(a, b) {
        function c() {
            e = u.setTimeout(d, 63);
            let h = g;
            g = [];
            a.apply(b, h)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        let e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };
    var Ne = {
            passive: !0
        },
        Oe = Ie(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                u.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Pe(a) {
        return a ? a.passive && Oe() ? a : a.capture || !1 : !1
    }

    function L(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Pe(d)), !0) : !1
    }

    function Qe(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Pe(d)), !0) : !1
    };

    function Re(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                f.onload = null;
                f.onerror = null;
                let g;
                null == (g = f.parentElement) || g.removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            De(f, a);
            "complete" !== b.document.readyState ? L(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };
    async function Se(a) {
        var b = "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.j}` + `&tv=${a.l}&st=` + `${a.cb}`;
        let c = void 0;
        try {
            c = await Te(b)
        } catch (g) {}
        if (c) {
            b = a.ub || c.sodar_query_id;
            var d = void 0 !== c.rc_enable && a.A ? c.rc_enable : "n",
                e = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms,
                f = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
            if (b && c.bg_hash_basename && c.bg_binary) return {
                context: a.B,
                Ae: c.bg_hash_basename,
                ze: c.bg_binary,
                cf: a.j + "_" + a.l,
                ub: b,
                cb: a.cb,
                Xb: d,
                nc: e,
                Vb: f
            }
        }
    }
    let Te = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });
    async function Ue(a) {
        var b = await Se(a);
        if (b) {
            a = window;
            let c = a.GoogleGcLKhOms;
            c && "function" === typeof c.push || (c = a.GoogleGcLKhOms = []);
            c.push({
                _ctx_: b.context,
                _bgv_: b.Ae,
                _bgp_: b.ze,
                _li_: b.cf,
                _jk_: b.ub,
                _st_: b.cb,
                _rc_: b.Xb,
                _dl_: b.nc,
                _g2_: b.Vb
            });
            if (b = a.GoogleDX5YKUSk) a.GoogleDX5YKUSk = void 0, b[1]();
            a = Gd(kd, {
                basename: "sodar2"
            });
            Re(a)
        }
    };

    function Ve(a, b) {
        return Qc(a, 5, b)
    }

    function We(a, b) {
        return Mc(a, 3, b, "")
    }
    var Xe = class extends K {
        constructor() {
            super(void 0)
        }
    };

    function Ye(a, b) {
        return Mc(a, 1, b, "")
    }
    var Ze = class extends K {
        constructor(a) {
            super(a)
        }
    };

    function $e(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    }
    var af = class {
            constructor(a) {
                this.j = a.l;
                this.l = a.A;
                this.B = a.B;
                this.ub = a.ub;
                this.win = a.T();
                this.cb = a.cb;
                this.Xb = a.Xb;
                this.nc = a.nc;
                this.Vb = a.Vb;
                this.A = a.j
            }
        },
        bf = class {
            constructor(a, b, c) {
                this.l = a;
                this.A = b;
                this.B = c;
                this.win = window;
                this.cb = "env";
                this.Xb = "n";
                this.nc = "0";
                this.Vb = "1";
                this.j = !0
            }
            T() {
                return this.win
            }
            build() {
                return new af(this)
            }
        };
    var df = class extends K {
            constructor(a) {
                super(a, -1, cf)
            }
        },
        cf = [2, 3];

    function ef(a, b) {
        return z(a, 1, b)
    }

    function ff(a, b) {
        return z(a, 2, b)
    }

    function gf(a, b) {
        return z(a, 3, b)
    }

    function hf(a, b) {
        return z(a, 4, b)
    }
    var jf = class extends K {
        constructor() {
            super(void 0)
        }
        getVersion() {
            return y(this, 5)
        }
    };
    var kf = window;
    var lf = {
        Qf: "google_adtest",
        Uf: "google_ad_client",
        Vf: "google_ad_format",
        Xf: "google_ad_height",
        kg: "google_ad_width",
        bg: "google_ad_layout",
        cg: "google_ad_layout_key",
        dg: "google_ad_output",
        eg: "google_ad_region",
        hg: "google_ad_slot",
        ig: "google_ad_type",
        jg: "google_ad_url",
        lg: "google_allow_expandable_ads",
        Cg: "google_analytics_domain_name",
        Dg: "google_analytics_uacct",
        Rg: "google_container_id",
        bh: "google_gl",
        Ah: "google_enable_ose",
        Kh: "google_full_width_responsive",
        Ki: "google_rl_filtering",
        Ji: "google_rl_mode",
        Li: "google_rt",
        Ii: "google_rl_dest_url",
        oi: "google_max_radlink_len",
        vi: "google_num_radlinks",
        wi: "google_num_radlinks_per_unit",
        Tf: "google_ad_channel",
        ni: "google_max_num_ads",
        ri: "google_max_responsive_height",
        Mg: "google_color_border",
        zh: "google_enable_content_recommendations",
        Yg: "google_content_recommendation_ui_type",
        Xg: "google_source_type",
        Wg: "google_content_recommendation_rows_num",
        Vg: "google_content_recommendation_columns_num",
        Ug: "google_content_recommendation_ad_positions",
        Zg: "google_content_recommendation_use_square_imgs",
        Og: "google_color_link",
        Ng: "google_color_line",
        Qg: "google_color_url",
        Rf: "google_ad_block",
        gg: "google_ad_section",
        Sf: "google_ad_callback",
        Jg: "google_captcha_token",
        Pg: "google_color_text",
        xg: "google_alternate_ad_url",
        ag: "google_ad_host_tier_id",
        Kg: "google_city",
        Yf: "google_ad_host",
        Zf: "google_ad_host_channel",
        yg: "google_alternate_color",
        Lg: "google_color_bg",
        Bh: "google_encoding",
        Ih: "google_font_face",
        gh: "google_cust_ch",
        jh: "google_cust_job",
        ih: "google_cust_interests",
        hh: "google_cust_id",
        kh: "google_cust_u_url",
        Mh: "google_hints",
        bi: "google_image_size",
        si: "google_mtl",
        lj: "google_cpm",
        Tg: "google_contents",
        ui: "google_native_settings_key",
        ah: "google_country",
        dj: "google_targeting",
        Jh: "google_font_size",
        oh: "google_disable_video_autoplay",
        yj: "google_video_product_type",
        xj: "google_video_doc_id",
        wj: "google_cust_gender",
        Zi: "google_cust_lh",
        Yi: "google_cust_l",
        kj: "google_tfs",
        ti: "google_native_ad_template",
        gi: "google_kw",
        aj: "google_tag_for_child_directed_treatment",
        bj: "google_tag_for_under_age_of_consent",
        Ni: "google_region",
        fh: "google_cust_criteria",
        fg: "google_safe",
        eh: "google_ctr_threshold",
        Oi: "google_resizing_allowed",
        Qi: "google_resizing_width",
        Pi: "google_resizing_height",
        vj: "google_cust_age",
        LANGUAGE: "google_language",
        hi: "google_kw_type",
        Bi: "google_pucrd",
        Ai: "google_page_url",
        cj: "google_tag_partner",
        Ui: "google_restrict_data_processing",
        Nf: "google_adbreak_test",
        Wf: "google_ad_frequency_hint",
        Of: "google_admob_interstitial_slot",
        Pf: "google_admob_rewarded_slot",
        mi: "google_max_ad_content_rating",
        Ei: "google_ad_public_floor",
        Ci: "google_ad_private_floor",
        uj: "google_traffic_source"
    };
    var mf = Ie(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = fe(qe);
        return !b.parentElement
    });

    function nf(a, b) {
        if (mf())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = fe(b)
    }
    var of = /^[\w+/_-]+[=]{0,2}$/;

    function pf(a, b) {
        b = (b || u).document;
        return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && of .test(a) ? a : "" : ""
    };

    function qf(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function rf(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function sf(a) {
        return rf.apply(null, arguments) / arguments.length
    };

    function tf(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    tf.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    tf.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    tf.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function uf(a, b) {
        this.width = a;
        this.height = b
    }

    function vf(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    q = uf.prototype;
    q.aspectRatio = function() {
        return this.width / this.height
    };
    q.isEmpty = function() {
        return !(this.width * this.height)
    };
    q.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    q.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    q.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function wf(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : u.document.createElement("div");
        return a.replace(xf, function(e, f) {
            var g = c[e];
            if (g) return g;
            "#" == f.charAt(0) && (f = Number("0" + f.slice(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (g = ie(e + " "), nf(d, g), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var xf = /&([^;\s<&]+);?/g;

    function yf(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function zf(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function Af(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function Bf(a) {
        return a ? new Cf(Df(a)) : Ma || (Ma = new Cf)
    }

    function Ef(a, b) {
        ld(b, function(c, d) {
            c && "object" == typeof c && c.na && (c = c.ka());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Ff.hasOwnProperty(d) ? a.setAttribute(Ff[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var Ff = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function Gf(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new uf(a.clientWidth, a.clientHeight)
    }

    function Hf(a) {
        var b = a.scrollingElement ? a.scrollingElement : Fb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return Bb && Nb("10") && a.pageYOffset != b.scrollTop ? new tf(b.scrollLeft, b.scrollTop) : new tf(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function If(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function Jf(a, b, c, d) {
        function e(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!ua(f) || va(f) && 0 < f.nodeType) e(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (va(f)) {
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
                jb(g ? rb(f) : f, e)
            }
        }
    }

    function Kf(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Lf(a, b) {
        var c = Kf(a, "DIV");
        Bb ? (b = oe(se, b), nf(c, b), c.removeChild(c.firstChild)) : nf(c, b);
        if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
        else {
            for (a = a.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
            c = a
        }
        return c
    }

    function Mf(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    }

    function Df(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    var Nf = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        Of = {
            IMG: " ",
            BR: "\n"
        };

    function Pf(a) {
        var b = [];
        Qf(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function Qf(a, b, c) {
        if (!(a.nodeName in Nf))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Of) b.push(Of[a.nodeName]);
        else
            for (a = a.firstChild; a;) Qf(a, b, c), a = a.nextSibling
    }

    function Rf(a, b, c) {
        if (!b && !c) return null;
        var d = b ? String(b).toUpperCase() : null;
        return Sf(a, function(e) {
            return (!d || e.nodeName == d) && (!c || "string" === typeof e.className && ob(e.className.split(/\s+/), c))
        })
    }

    function Sf(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function Cf(a) {
        this.j = a || u.document || document
    }
    q = Cf.prototype;
    q.Re = function(a) {
        return "string" === typeof a ? this.j.getElementById(a) : a
    };
    q.Mf = Cf.prototype.Re;
    q.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    q.ha = function(a, b, c) {
        var d = this.j,
            e = arguments,
            f = e[1],
            g = Kf(d, String(e[0]));
        f && ("string" === typeof f ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : Ef(g, f));
        2 < e.length && Jf(d, g, e, 2);
        return g
    };
    q.createElement = function(a) {
        return Kf(this.j, a)
    };
    q.createTextNode = function(a) {
        return this.j.createTextNode(String(a))
    };

    function Tf(a, b) {
        return Lf(a.j, b)
    }
    q.T = function() {
        var a = this.j;
        return a.parentWindow || a.defaultView
    };
    q.appendChild = function(a, b) {
        a.appendChild(b)
    };
    q.append = function(a, b) {
        Jf(Df(a), a, arguments, 1)
    };
    q.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    q.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    q.Oe = Mf;

    function Uf() {
        return !Vf() && (v("iPod") || v("iPhone") || v("Android") || v("IEMobile"))
    }

    function Vf() {
        return v("iPad") || v("Android") && !v("Mobile") || v("Silk")
    };
    var Wf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Xf(a) {
        try {
            return !!a && null != a.location.href && yb(a, "foo")
        } catch (b) {
            return !1
        }
    }

    function Yf(a, b = !1, c = !1, d = u) {
        c = c ? Zf(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !Xf(c) || !a(c));) c = Zf(c)
    }

    function Zf(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch (b) {}
        return null
    }

    function $f(a) {
        return Xf(a.top) ? a.top : null
    }

    function ag(a, b) {
        const c = bg("SCRIPT", a);
        De(c, b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function cg(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function dg() {
        if (!ha.globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            ha.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (a) {
            return Math.random()
        }
    }

    function eg(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function fg(a) {
        const b = [];
        eg(a, function(c) {
            b.push(c)
        });
        return b
    }

    function gg(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var ig = Ie(() => nb(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], hg) || 1E-4 > Math.random());
    const hg = a => Xa($a(), a);
    var jg = /^([0-9.]+)px$/,
        kg = /^(-?[0-9.]{1,30})$/;

    function lg(a) {
        if (!kg.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function mg(a) {
        return /^true$/.test(a)
    }

    function ng(a) {
        return (a = jg.exec(a)) ? +a[1] : null
    }

    function og() {
        var a = u.document.URL;
        if (!a) return "";
        const b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            const c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (c) {}
        return ""
    }
    var pg = {
        mg: "allow-forms",
        ng: "allow-modals",
        og: "allow-orientation-lock",
        pg: "allow-pointer-lock",
        qg: "allow-popups",
        rg: "allow-popups-to-escape-sandbox",
        sg: "allow-presentation",
        tg: "allow-same-origin",
        ug: "allow-scripts",
        vg: "allow-top-navigation",
        wg: "allow-top-navigation-by-user-activation"
    };
    const qg = Ie(() => fg(pg));

    function rg() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = qg();
        return a.length ? kb(b, c => !ob(a, c)) : b
    }

    function sg() {
        const a = bg("IFRAME"),
            b = {};
        jb(qg(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var tg = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch (c) {
                return !1
            }
        },
        ug = (a, b) => {
            for (let c = 0; 50 > c; ++c) {
                if (tg(a, b)) return a;
                if (!(a = Zf(a))) break
            }
            return null
        },
        vg = Ie(() => Uf() ? 2 : Vf() ? 1 : 0),
        M = (a, b) => {
            eg(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        };
    const wg = {
        ["http://googleads.g.doubleclick.net"]: !0,
        ["http://pagead2.googlesyndication.com"]: !0,
        ["https://googleads.g.doubleclick.net"]: !0,
        ["https://pagead2.googlesyndication.com"]: !0
    };
    var xg = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/;
    const yg = /.*domain\.test$/,
        zg = /\.prod\.google\.com(:\d+)?$/;
    var Ag = a => wg[a] || xg.test(a) || yg.test(a) || zg.test(a);
    let Cg = [];
    const Dg = () => {
        const a = Cg;
        Cg = [];
        for (const b of a) try {
            b()
        } catch (c) {}
    };
    var Eg = (a, b) => {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * 2 ** 52),
                configurable: !1
            })
        } catch (c) {
            b && b.la(784, c)
        }
        a = Number(a.goog_pvsid);
        b && (!a || 0 >= a) && b.la(784, Error(`Invalid correlator, ${a}`));
        return a || -1
    };

    function Fg(a, b, c, d = []) {
        const e = new a.MutationObserver(f => {
            for (const g of f)
                for (const h of g.removedNodes)
                    if (d && (h === b || Mf(h, b))) {
                        for (const l of d) l.disconnect();
                        d.length = 0;
                        c();
                        return
                    }
        });
        d.push(e);
        e.observe(a.document.documentElement, {
            childList: !0,
            subtree: !0
        });
        Yf(f => {
            if (!f.parent || !Xf(f.parent)) return !1;
            const g = f.parent.document.getElementsByTagName("iframe");
            for (let k = 0; k < g.length; k++) try {
                a: {
                    var h = g[k];
                    try {
                        var l = h.contentWindow || (h.contentDocument ? If(h.contentDocument) : null);
                        break a
                    } catch (m) {}
                    l =
                    null
                }
                if (l == f) {
                    Fg(f.parent, g[k], c, d);
                    break
                }
            }
            catch (m) {}
            return !1
        }, !1, !1, a)
    }
    var Gg = (a, b) => {
            Fg(If(Df(a)), a, b)
        },
        Hg = (a, b) => {
            "complete" === a.document.readyState ? (Cg.push(b), 1 == Cg.length && (window.Promise ? Promise.resolve().then(Dg) : window.setImmediate ? setImmediate(Dg) : setTimeout(Dg, 0))) : a.addEventListener("load", b)
        },
        Ig = (a, b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        });

    function bg(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    }
    var Jg = a => {
        let b = a;
        for (; a && a != a.parent;) a = a.parent, Xf(a) && (b = a);
        return b
    };

    function Kg(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    q = Kg.prototype;
    q.getWidth = function() {
        return this.right - this.left
    };
    q.getHeight = function() {
        return this.bottom - this.top
    };

    function Lg(a) {
        return new Kg(a.top, a.right, a.bottom, a.left)
    }
    q.contains = function(a) {
        return this && a ? a instanceof Kg ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function Mg(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    q.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    q.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    q.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function Ng(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function Og(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new Ng(c, e, d - c, a - e)
        }
        return null
    }

    function Pg(a, b) {
        var c = Og(a, b);
        if (!c || !c.height || !c.width) return [new Ng(a.left, a.top, a.width, a.height)];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            g = a.top + a.height,
            h = b.left + b.width,
            l = b.top + b.height;
        b.top > a.top && (c.push(new Ng(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        l < g && (c.push(new Ng(a.left, l, a.width, g - l)), e = l - d);
        b.left > a.left && c.push(new Ng(a.left, d, b.left - a.left, e));
        h < f && c.push(new Ng(h, d, f - h, e));
        return c
    }
    Ng.prototype.contains = function(a) {
        return a instanceof tf ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    Ng.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Ng.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Ng.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    const Qg = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function Rg(a = u) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function Sg() {
        const a = Rg();
        return a && a.initialIntersection
    }

    function Tg() {
        const a = Sg();
        return a && va(a.rootBounds) ? new uf(a.rootBounds.width, a.rootBounds.height) : null
    }

    function Ug(a) {
        return (a = a || Rg()) ? Xf(a.master) ? a.master : null : null
    }

    function Vg(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            pb(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = g => {
            if (a.ampInaboxInitialized) g = !0;
            else {
                var h, l = "amp-ini-load" === g.data;
                a.ampInaboxPendingMessages && !l && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g), g = h[1], a.ampInaboxInitialized ||
                    g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || ag(a.document, g ? Gd(jd("https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"), {
                        ampVersion: g
                    }) : Ed(id(jd("https://cdn.ampproject.org/amp4ads-host-v0.js")))));
                g = !1
            }
            g && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, L(a, "message", f), d = () => {
            Qe(a, "message", f)
        });
        return e
    };

    function N(a, ...b) {
        if (0 === b.length) return Ed(a[0]);
        const c = [a[0]];
        for (let d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return Ed(c.join(""))
    }

    function Wg(a, b) {
        let c = Dd(a).toString();
        if (/#/.test(c)) throw Error("");
        let d = /\?/.test(c) ? "&" : "?";
        b.forEach((e, f) => {
            e = e instanceof Array ? e : [e];
            for (let g = 0; g < e.length; g++) {
                const h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return Ed(c)
    };

    function Xg(a) {
        a = a[0];
        const b = vd();
        a = b ? b.createScript(a) : a;
        return new yd(a, wd)
    };

    function Yg(a) {
        return new de(a[0], be)
    };
    class Zg {
        constructor(a) {
            this.bf = a
        }
    }

    function $g(a) {
        return new Zg(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const ye = [$g("data"), $g("http"), $g("https"), $g("mailto"), $g("ftp"), new Zg(a => /^[^:]*([/?#]|$)/.test(a))];

    function xe(a = ye) {
        for (let b = 0; b < a.length; ++b) {
            const c = a[b];
            if (c instanceof Zg && c.bf("#")) return new Kd("#", Jd)
        }
    };

    function ah(a) {
        return Ed(Dd(a).toString())
    };

    function bh(a, b, c) {
        if ("string" === typeof b)(b = ch(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = ch(c, d);
                f && (c.style[f] = e)
            }
    }
    var dh = {};

    function ch(a, b) {
        var c = dh[b];
        if (!c) {
            var d = zf(b);
            c = d;
            void 0 === a.style[d] && (d = (Fb ? "Webkit" : Eb ? "Moz" : Bb ? "ms" : null) + Af(d), void 0 !== a.style[d] && (c = d));
            dh[b] = c
        }
        return c
    }

    function eh(a, b) {
        var c = Df(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function fh(a, b) {
        return eh(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function gh(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function hh(a) {
        var b = Df(a),
            c = new tf(0, 0);
        var d = b ? Df(b) : document;
        d = !Bb || 9 <= Number(Qb) || "CSS1Compat" == Bf(d).j.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = gh(a);
        b = Hf(Bf(b).j);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function ih(a) {
        var b = jh;
        if ("none" != fh(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function jh(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Fb && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = gh(a), new uf(a.right - a.left, a.bottom - a.top)) : new uf(b, c)
    }

    function kh(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }

    function lh(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? kh(a, b) : 0
    }
    var mh = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function nh(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in mh ? mh[b] : kh(a, b)
    };
    var oh = a => "number" === typeof a && 0 < a,
        qh = (a, b) => {
            a = ph(a);
            if (!a) return b;
            const c = b.slice(-1);
            return b + ("?" === c || "#" === c ? "" : "&") + a
        },
        ph = a => Object.entries(rh(a)).map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`).join("&"),
        rh = a => {
            const b = {};
            eg(a, (c, d) => {
                if (c || 0 === c || !1 === c) "boolean" === typeof c && (c = c ? 1 : 0), b[d] = c
            });
            return b
        },
        sh = () => {
            try {
                return kf.history.length
            } catch (a) {
                return 0
            }
        },
        th = a => {
            a = Ug(Rg(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1
        },
        uh = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a :
                0
        },
        vh = a => {
            a.u_tz = -(new Date).getTimezoneOffset();
            a.u_his = sh();
            let b;
            a.u_h = null == (b = kf.screen) ? void 0 : b.height;
            let c;
            a.u_w = null == (c = kf.screen) ? void 0 : c.width;
            let d;
            a.u_ah = null == (d = kf.screen) ? void 0 : d.availHeight;
            let e;
            a.u_aw = null == (e = kf.screen) ? void 0 : e.availWidth;
            let f;
            a.u_cd = null == (f = kf.screen) ? void 0 : f.colorDepth
        },
        wh = a => {
            let b;
            b = (b = 9 !== a.nodeType && a.id) ? "/" + b : "";
            a: {
                if (a && a.nodeName && a.parentElement) {
                    var c = a.nodeName.toString().toLowerCase();
                    const d = a.parentElement.childNodes;
                    let e = 0;
                    for (let f = 0; f <
                        d.length; ++f) {
                        const g = d[f];
                        if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                            if (a === g) {
                                c = "." + e;
                                break a
                            }++e
                        }
                    }
                }
                c = ""
            }
            return (a.nodeName && a.nodeName.toString().toLowerCase()) + b + c
        },
        xh = a => function() {
            if (a) {
                const b = a;
                a = null;
                b.apply(null, arguments)
            }
        },
        yh = () => {
            if (!kf) return !1;
            try {
                return !(!kf.navigator.standalone && !kf.top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        zh = a => (a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1,
        Ah = a => {
            let b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(0 < b && 0 < c)) {
                a: {
                    try {
                        const e =
                            String(a.google_ad_format);
                        if (e && e.match) {
                            const f = e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                const g = parseInt(f[1], 10),
                                    h = parseInt(f[2], 10);
                                if (0 < g && 0 < h) {
                                    var d = {
                                        width: g,
                                        height: h
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = 0 < b ? b : a.width;c = 0 < c ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        },
        Bh = a => a == a.top;
    class Ch {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const Dh = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Eh = class {
            constructor(a, b) {
                this.j = a;
                this.l = b
            }
        },
        Fh = class {
            constructor(a, b, c) {
                this.url = a;
                this.win = b;
                this.zd = !!c;
                this.depth = null
            }
        };

    function Gh(a, b, c = null, d = !1) {
        Hh(a, b, c, d)
    }

    function Hh(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = bg("IMG", a.document);
        if (c || d) {
            const f = g => {
                c && c(g);
                d && pb(a.google_image_requests, e);
                Qe(e, "load", f);
                Qe(e, "error", f)
            };
            L(e, "load", f);
            L(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Jh = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            eg(a, (d, e) => {
                d && (c += `&${e}=${encodeURIComponent(d)}`)
            });
            Ih(c)
        },
        Ih = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Gh(b, a, void 0, !1)
        };

    function Kh(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Lh(a, b, c, d, e) {
        const f = [];
        eg(a, function(g, h) {
            (g = Mh(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Mh(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Mh(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Lh(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Nh(a) {
        let b = 1;
        for (const c in a.l) b = c.length > b ? c.length : b;
        return 3997 - b - a.A.length - 1
    }

    function Oh(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Nh(a) - b.length;
        if (0 > d) return "";
        a.j.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.j.length; f++) {
            const g = a.j[f],
                h = a.l[g];
            for (let l = 0; l < h.length; l++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let k = Lh(h[l], a.A, ",$");
                if (k) {
                    k = e + k;
                    if (d >= k.length) {
                        d -= k.length;
                        c += k;
                        e = a.A;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }
    class Ph {
        constructor() {
            this.A = "&";
            this.l = {};
            this.B = 0;
            this.j = []
        }
    };

    function Qh() {
        var a = Rh,
            b = u.google_srt;
        0 <= b && 1 >= b && (a.j = b)
    }

    function Sh(a, b, c, d, e) {
        if ((d ? a.j : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Ph ? f = c : (f = new Ph, eg(c, (h, l) => {
                var k = f;
                const m = k.B++;
                h = Kh(l, h);
                k.j.push(m);
                k.l[m] = h
            }));
            const g = Oh(f, "/pagead/gen_204?id=" + b + "&");
            g && Gh(u, g)
        } catch (f) {}
    }
    class Th {
        constructor() {
            this.j = Math.random()
        }
    };
    let Uh = null;

    function Vh() {
        if (null === Uh) {
            Uh = "";
            try {
                let a = "";
                try {
                    a = u.top.location.hash
                } catch (b) {
                    a = u.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    Uh = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return Uh
    };
    var Wh = () => {
            const a = u.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Ea()
        },
        Xh = () => {
            const a = u.performance;
            return a && a.now ? a.now() : null
        };
    class Yh {
        constructor(a, b) {
            var c = Xh() || Wh();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.taskId = this.slotId = void 0
        }
    };
    const Zh = u.performance,
        $h = !!(Zh && Zh.mark && Zh.measure && Zh.clearMarks),
        ai = Ie(() => {
            var a;
            if (a = $h) a = Vh(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function bi(a) {
        a && Zh && ai() && (Zh.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Zh.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function ci() {
        var a = di;
        a.l = !1;
        a.j != a.A.google_js_reporting_queue && (ai() && jb(a.j, bi), a.j.length = 0)
    }

    function ei(a, b) {
        if (!a.l) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw bi(c), e;
        }
        a.end(c);
        return d
    }
    class fi {
        constructor(a) {
            this.j = [];
            this.A = a || u;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.j = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.l = ai() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.l) return null;
            a = new Yh(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Zh && ai() && Zh.mark(b);
            return a
        }
        end(a) {
            if (this.l && "number" === typeof a.value) {
                a.duration = (Xh() || Wh()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Zh && ai() && Zh.mark(b);
                !this.l || 2048 < this.j.length ||
                    this.j.push(a)
            }
        }
    };

    function gi(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = hi(a.stack, b));
        return b
    }

    function hi(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
            return a.replace(RegExp("\n *", "g"), "\n")
        } catch (c) {
            return b
        }
    }
    class ii {
        constructor(a = null) {
            this.B = Rh;
            this.l = null;
            this.D = this.la;
            this.j = a;
            this.A = !1
        }
        xa() {
            return this.B
        }
        Rd(a) {
            this.l = a
        }
        C(a) {
            this.A = a
        }
        yb(a, b, c) {
            let d, e;
            try {
                this.j && this.j.l ? (e = this.j.start(a.toString(), 3), d = b(), this.j.end(e)) : d = b()
            } catch (f) {
                b = !0;
                try {
                    bi(e), b = this.D(a, new Ch(f, {
                        message: gi(f)
                    }), void 0, c)
                } catch (g) {
                    this.la(217, g)
                }
                if (b) {
                    let g, h;
                    null == (g = window.console) || null == (h = g.error) || h.call(g, f)
                } else throw f;
            }
            return d
        }
        ma(a, b) {
            return (...c) => this.yb(a, () => b.apply(void 0, c))
        }
        la(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const I = new Ph;
                var g = I;
                g.j.push(1);
                g.l[1] = Kh("context", a);
                b.error && b.meta && b.id || (b = new Ch(b, {
                    message: gi(b)
                }));
                if (b.msg) {
                    g = I;
                    var h = b.msg.substring(0, 512);
                    g.j.push(2);
                    g.l[2] = Kh("msg", h)
                }
                var l = b.meta || {};
                b = l;
                if (this.l) try {
                    this.l(b)
                } catch (wa) {}
                if (d) try {
                    d(b)
                } catch (wa) {}
                d = I;
                l = [l];
                d.j.push(3);
                d.l[3] = l;
                d = u;
                l = [];
                b = null;
                do {
                    var k = d;
                    if (Xf(k)) {
                        var m = k.location.href;
                        b = k.document && k.document.referrer || null
                    } else m = b, b = null;
                    l.push(new Fh(m || "", k));
                    try {
                        d = k.parent
                    } catch (wa) {
                        d = null
                    }
                } while (d && k != d);
                for (let wa =
                        0, Ha = l.length - 1; wa <= Ha; ++wa) l[wa].depth = Ha - wa;
                k = u;
                if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == l.length - 1)
                    for (m = 1; m < l.length; ++m) {
                        var n = l[m];
                        n.url || (n.url = k.location.ancestorOrigins[m - 1] || "", n.zd = !0)
                    }
                var p = l;
                let aa = new Fh(u.location.href, u, !1);
                k = null;
                const sa = p.length - 1;
                for (n = sa; 0 <= n; --n) {
                    var r = p[n];
                    !k && Dh.test(r.url) && (k = r);
                    if (r.url && !r.zd) {
                        aa = r;
                        break
                    }
                }
                r = null;
                const X = p.length && p[sa].url;
                0 != aa.depth && X && (r = p[sa]);
                f = new Eh(aa, r);
                if (f.l) {
                    p = I;
                    var t = f.l.url || "";
                    p.j.push(4);
                    p.l[4] = Kh("top", t)
                }
                var x = {
                    url: f.j.url || ""
                };
                if (f.j.url) {
                    var w = f.j.url.match(Wf),
                        A = w[1],
                        D = w[3],
                        H = w[4];
                    t = "";
                    A && (t += A + ":");
                    D && (t += "//", t += D, H && (t += ":" + H));
                    var G = t
                } else G = "";
                A = I;
                x = [x, {
                    url: G
                }];
                A.j.push(5);
                A.l[5] = x;
                Sh(this.B, e, I, this.A, c)
            } catch (I) {
                try {
                    Sh(this.B, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: gi(I),
                        url: f && f.j.url
                    }, this.A, c)
                } catch (aa) {}
            }
            return !0
        }
        Ha(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.la(a, c instanceof Error ? c : Error(c))
            })
        }
    };
    const ji = a => null !== a && void 0 !== a;
    let ki = void 0;

    function li(a, b) {
        const c = ki;
        ki = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };
    var mi = a => "string" === typeof a,
        ni = a => void 0 === a;

    function oi() {
        var a = pi;
        return b => {
            for (const c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }
    };
    var qi;
    qi = {
        Di: 0,
        Zd: 3,
        be: 4,
        de: 5
    };
    var ri = qi.Zd,
        si = qi.be,
        ti = qi.de;

    function ui(a, ...b) {
        vi(a, ...b.map(c => ({
            If: 7,
            message: c
        })))
    };

    function wi(a) {
        return JSON.stringify([a.map(b => [{
            [b.If]: b.message.toJSON()
        }])])
    };
    var xi = (a, b) => {
        ha.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function vi(a, ...b) {
        a.l.push(...b);
        100 <= a.l.length ? (null !== a.j && clearTimeout(a.j), a.j = setTimeout(() => {
            yi(a)
        }, 0)) : null === a.j && (a.j = setTimeout(() => {
            yi(a)
        }, 100))
    }

    function yi(a) {
        const b = wi(a.l);
        a.A("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
        a.l = [];
        a.j = null
    }
    var zi = class {
            constructor() {
                this.A = xi;
                this.l = [];
                this.j = null
            }
        },
        Ai = class extends zi {};
    var O = a => {
        var b = "Fc";
        if (a.Fc && a.hasOwnProperty(b)) return a.Fc;
        b = new a;
        return a.Fc = b
    };
    class Bi {
        constructor(a) {
            this.methodName = a
        }
    }
    var Ci = new Bi(15),
        Di = new Bi(2),
        Ei = new Bi(3),
        Fi = new Bi(5),
        Gi = new Bi(6),
        Hi = new Bi(7),
        Ii = new Bi(8),
        Ji = new Bi(14),
        Ki = (a, b, c) => b[a.methodName] || c || (() => {});

    function Li(a, b) {
        a.j = c => {
            Ki(Di, b, () => [])(c, 1)
        };
        a.l = () => Ki(Ei, b, () => [])(1)
    }
    class Mi {
        constructor() {
            this.j = () => {};
            this.l = () => []
        }
    };
    let Rh, Ni;
    const di = new fi(u);
    (a => {
        Rh = a || new Th;
        "number" !== typeof u.google_srt && (u.google_srt = Math.random());
        Qh();
        Ni = new ii(di);
        Ni.C(!0);
        "complete" == u.document.readyState ? u.google_measure_js_timing || ci() : di.l && L(u, "load", () => {
            u.google_measure_js_timing || ci()
        })
    })();
    var Oi = (a, b, c) => Ni.yb(a, b, c),
        Pi = (a, b) => Ni.ma(a, b),
        Qi = (a, b, c) => {
            const d = O(Mi).l();
            !b.eid && d.length && (b.eid = d.toString());
            Sh(Rh, a, b, !0, c)
        },
        Ri = (a, b) => Ni.la(a, b, void 0, void 0);
    var Si = (a, b) => {
        const c = og();
        return a + (-1 == a.indexOf("?") ? "?" : "&") + [0 < c.length ? "google_debug" + (c ? "=" + c : "") + "&" : "", "xpc=", b, "&p=", encodeURIComponent(u.document.location.protocol), "//", encodeURIComponent(u.document.location.host)].join("")
    };
    Ed(id(jd("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var Ti = (a, b, c, d = null) => {
            const e = g => {
                let h;
                try {
                    h = JSON.parse(g.data)
                } catch (l) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            L(a, "message", e);
            let f = !1;
            return () => {
                let g = !1;
                f || (f = !0, g = Qe(a, "message", e));
                return g
            }
        },
        Ui = (a, b, c, d = null) => {
            const e = Ti(a, b, Ge(c, () => e()), d);
            return e
        },
        Vi = (a, b, c, d, e) => {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) 1 < e && Vi(a[f], b, c, d, --e)
        };

    function Wi(a, b, c, d) {
        Ag(d.origin) && "expandable-xpc-ready" == c.notify && Xi(a, b)
    }

    function Xi(a, b) {
        var c = a.Ec;
        c.google_eas_queue = c.google_eas_queue || [];
        c.google_eas_queue.push({
            a: a.id,
            b: a.url,
            c: a.width,
            d: a.height,
            e: a.Pa,
            f: a.sf,
            g: a.qe,
            h: a.Ze,
            i: void 0
        });
        u.setTimeout(Pi(220, xh(() => {
            ag(c.document, ah(b))
        })), 0)
    };
    var Zi = class extends K {
            constructor() {
                super(void 0, -1, Yi)
            }
        },
        Yi = [15];
    var $i = class extends K {
        constructor() {
            super(void 0)
        }
        getCorrelator() {
            return C(this, 1, 0)
        }
        setCorrelator(a) {
            return Mc(this, 1, a, 0)
        }
    };
    var aj = class extends K {
        constructor() {
            super(void 0)
        }
    };
    let bj = null,
        cj = null;
    var dj = () => {
            if (null != bj) return bj;
            bj = !1;
            try {
                const a = $f(u);
                a && -1 !== a.location.hash.indexOf("google_logging") && (bj = !0);
                u.localStorage.getItem("google_logging") && (bj = !0)
            } catch (a) {}
            return bj
        },
        ej = () => {
            if (null != cj) return cj;
            cj = !1;
            try {
                const a = $f(u);
                if (a && -1 !== a.location.hash.indexOf("auto_ads_logging") || u.localStorage.getItem("auto_ads_logging")) cj = !0
            } catch (a) {}
            return cj
        },
        fj = (a, b = []) => {
            let c = !1;
            u.google_logging_queue || (c = !0, u.google_logging_queue = []);
            u.google_logging_queue.push([a, b]);
            c && dj() && ag(u.document,
                Ed(id(jd("https://pagead2.googlesyndication.com/pagead/js/logging_library.js"))))
        };
    let gj = (new Date).getTime();
    var hj = a => {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? .05 : a
    };
    var ij = {
        Xh: 0,
        Wh: 1,
        Th: 2,
        Oh: 3,
        Uh: 4,
        Ph: 5,
        Vh: 6,
        Rh: 7,
        Sh: 8,
        Nh: 9,
        Qh: 10
    };
    var jj = {
        Zh: 0,
        ai: 1,
        Yh: 2
    };

    function kj(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function lj(a) {
        a = lb(a, b => new Kg(b.top, b.right, b.bottom, b.left));
        a = mj(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function mj(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return mb(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, Lg(a[0]))
    };
    var od = {
        Mi: 0,
        Ch: 1,
        Fh: 2,
        Dh: 3,
        Eh: 4,
        Lh: 8,
        Xi: 9,
        ki: 10,
        li: 11,
        Ti: 16,
        mh: 17,
        lh: 24,
        ii: 25,
        Fg: 26,
        Eg: 27,
        ce: 30,
        di: 32,
        fi: 40
    };
    var nj = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5
        },
        oj = {
            [1]: 1,
            [2]: 1,
            [3]: 1,
            [4]: 1,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };

    function pj(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map)) : a.google_reactive_ads_global_state = new qj;
        return a.google_reactive_ads_global_state
    }
    class qj {
        constructor() {
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
            this.floatingAdsStacking = new rj;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map
        }
    }
    var rj = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var sj = 728 * 1.38,
        tj = (a, b = 420) => (a = P(a).clientWidth) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384,
        uj = a => {
            var b = P(a).clientWidth;
            a = a.innerWidth;
            return (b = b && a ? b / a : 0) ? 1.05 < b ? 262144 : .95 > b ? 524288 : 0 : 131072
        },
        wj = a => Math.max(0, vj(a, !0) - P(a).clientHeight),
        P = a => {
            a = a.document;
            let b = {};
            a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
            return b || {}
        },
        vj = (a, b) => {
            const c = P(a);
            return b ? c.scrollHeight == P(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight
        },
        yj = (a, b) => xj(b) || 10 === b || !a.adCount ? !1 : 1 == b || 2 == b ? !(!a.adCount[1] &&
            !a.adCount[2]) : (a = a.adCount[b]) ? 1 <= a : !1,
        zj = (a, b) => a && a.source ? a.source === b || a.source.parent === b : !1,
        Aj = a => void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset,
        Bj = a => void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset,
        Cj = a => {
            const b = {};
            let c;
            Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
            if (c)
                for (a = 0; a < c.length; a++) {
                    const d = c[a];
                    if ("key" in d && "value" in d) {
                        const e =
                            d.value;
                        b[d.key] = null == e ? null : String(e)
                    }
                }
            return b
        },
        Dj = (a, b, c, d, e) => {
            Sh(c, b, {
                c: e.data.substring(0, 500),
                u: a.location.href.substring(0, 500)
            }, !0, .1);
            return !0
        },
        xj = a => 26 === a || 27 === a || 40 === a;

    function Ej(a) {
        if (0 != a.j) throw Error("Already resolved/rejected.");
    }
    var Hj = class {
        constructor() {
            this.l = new Fj(this);
            this.j = 0
        }
        resolve(a) {
            Ej(this);
            this.j = 1;
            this.B = a;
            Gj(this.l)
        }
    };

    function Gj(a) {
        switch (a.j.j) {
            case 0:
                break;
            case 1:
                a.l && a.l(a.j.B);
                break;
            case 2:
                a.A && a.A(a.j.A);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var Fj = class {
        constructor(a) {
            this.j = a
        }
        then(a, b) {
            if (this.l) throw Error("Then functions already set.");
            this.l = a;
            this.A = b;
            Gj(this)
        }
    };

    function Ij(a, b) {
        Jj(a).forEach(b, void 0)
    }

    function Jj(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function Kj(a, b) {
        return void 0 !== a.j[Lj(b)]
    }

    function Mj(a) {
        var b = [],
            c;
        for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
        return b
    }

    function Nj(a) {
        var b = [],
            c;
        for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    }
    const Oj = class {
        constructor() {
            this.j = {};
            this.l = {}
        }
        set(a, b) {
            const c = Lj(a);
            this.j[c] = b;
            this.l[c] = a
        }
        remove(a) {
            a = Lj(a);
            this.j[a] = void 0;
            this.l[a] = void 0
        }
        get(a, b) {
            a = Lj(a);
            return void 0 !== this.j[a] ? this.j[a] : b
        }
        qb() {
            return Mj(this).length
        }
        clear() {
            this.j = {};
            this.l = {}
        }
    };

    function Lj(a) {
        return a instanceof Object ? String(xa(a)) : a + ""
    };
    const Pj = class {
        constructor(a) {
            this.j = new Oj;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.j.set(a, !0)
        }
        remove(a) {
            this.j.remove(a)
        }
        contains(a) {
            return Kj(this.j, a)
        }
    };
    const Qj = new Pj("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));

    function Rj(a) {
        a && "function" == typeof a.va && a.va()
    };

    function Sj() {
        this.F = this.F;
        this.I = this.I
    }
    Sj.prototype.F = !1;
    Sj.prototype.va = function() {
        this.F || (this.F = !0, this.l())
    };

    function Tj(a, b) {
        a.F ? b() : (a.I || (a.I = []), a.I.push(b))
    }
    Sj.prototype.l = function() {
        if (this.I)
            for (; this.I.length;) this.I.shift()()
    };

    function Uj(a) {
        a.j.forEach((b, c) => {
            var d = a.element;
            b ? d.style.setProperty(c, b.value, b.priority) : d.style.removeProperty(c)
        })
    }

    function Vj(a, b, c) {
        if (!a.j.has(b)) {
            var d = a.j,
                e = d.set;
            var f = a.element;
            const g = f.style.getPropertyValue(b);
            f = g ? {
                value: g,
                priority: f.style.getPropertyPriority(b)
            } : null;
            e.call(d, b, f)
        }
        a.element.style.setProperty(b, c, "important")
    }
    var Wj = class extends Sj {
        constructor(a) {
            super();
            this.element = a;
            this.j = new Map
        }
        l() {
            Uj(this);
            super.l()
        }
    };

    function Xj(a, b) {
        const c = new Yj({
            first: a.P,
            second: b.P
        });
        a.ba(() => Q(c, {
            first: a.P,
            second: b.P
        }));
        b.ba(() => Q(c, {
            first: a.P,
            second: b.P
        }));
        return c
    }

    function Zj(...a) {
        const b = [...a],
            c = () => b.every(f => f.P),
            d = new Yj(c()),
            e = () => {
                Q(d, c())
            };
        b.forEach(f => f.ba(e));
        return ak(d)
    }

    function bk(...a) {
        const b = [...a],
            c = () => -1 !== b.findIndex(f => f.P),
            d = new Yj(c()),
            e = () => {
                Q(d, c())
            };
        b.forEach(f => f.ba(e));
        return ak(d)
    }

    function Q(a, b) {
        a.P = b;
        a.j.forEach(c => {
            c(a.P)
        })
    }

    function ak(a, b = ck) {
        var c = a.P;
        const d = new Yj(a.P);
        a.ba(e => {
            b(e, c) || (c = e, Q(d, e))
        });
        return d
    }

    function dk(a, b) {
        return a.ba(b, !0)
    }

    function ek(a, b, c) {
        return dk(a, d => {
            d === b && c()
        })
    }

    function fk(a, b) {
        if (!1 === a.P) b();
        else {
            var c = {
                Jb: null
            };
            c.Jb = ek(a, !1, () => {
                c.Jb && (c.Jb(), c.Jb = null);
                b()
            })
        }
    }

    function gk(a, b, c) {
        ak(a).ba(d => {
            d === b && c()
        })
    }

    function hk(a, b) {
        a.l && a.l();
        a.l = b.ba(c => Q(a, c), !0)
    }
    class Yj {
        constructor(a) {
            this.P = a;
            this.j = new Map;
            this.A = 1;
            this.l = null
        }
        ba(a, b = !1) {
            const c = this.A++;
            this.j.set(c, a);
            b && a(this.P);
            return () => {
                this.j.delete(c)
            }
        }
        map(a) {
            const b = new Yj(a(this.P));
            this.ba(c => Q(b, a(c)));
            return b
        }
    }

    function ck(a, b) {
        return a == b
    };

    function ik(a, b) {
        jb(a.j, c => {
            c(b)
        })
    }
    var jk = class {
        constructor() {
            this.j = []
        }
    };
    class kk {
        constructor(a) {
            this.j = a
        }
        ba(a) {
            this.j.j.push(a)
        }
        map(a) {
            const b = new jk;
            this.ba(c => ik(b, a(c)));
            return new kk(b)
        }
    }

    function lk(...a) {
        const b = new jk;
        a.forEach(c => {
            c.ba(d => {
                ik(b, d)
            })
        });
        return new kk(b)
    };

    function mk(a) {
        return ak(Xj(a.j, a.A).map(b => {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : nk(c, b)
        }))
    }
    var pk = class {
        constructor(a) {
            this.l = a;
            this.j = new Yj(null);
            this.A = new Yj(null);
            this.B = new jk;
            this.F = b => {
                null == this.j.P && 1 == b.touches.length && Q(this.j, b.touches[0])
            };
            this.C = b => {
                const c = this.j.P;
                null != c && (b = ok(c, b.changedTouches), null != b && (Q(this.j, null), Q(this.A, null), ik(this.B, nk(c, b))))
            };
            this.D = b => {
                var c = this.j.P;
                null != c && (c = ok(c, b.changedTouches), null != c && (Q(this.A, c), b.preventDefault()))
            }
        }
    };

    function nk(a, b) {
        return {
            Xd: b.pageX - a.pageX,
            Yd: b.pageY - a.pageY
        }
    }

    function ok(a, b) {
        if (null == b) return null;
        for (let c = 0; c < b.length; ++c)
            if (b[c].identifier == a.identifier) return b[c];
        return null
    };

    function qk(a) {
        return ak(Xj(a.j, a.l).map(b => {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : rk(c, b)
        }))
    }
    var sk = class {
        constructor(a, b) {
            this.B = a;
            this.C = b;
            this.j = new Yj(null);
            this.l = new Yj(null);
            this.A = new jk;
            this.G = c => {
                Q(this.j, c)
            };
            this.D = c => {
                const d = this.j.P;
                null != d && (Q(this.j, null), Q(this.l, null), ik(this.A, rk(d, c)))
            };
            this.F = c => {
                null != this.j.P && (Q(this.l, c), c.preventDefault())
            }
        }
    };

    function rk(a, b) {
        return {
            Xd: b.screenX - a.screenX,
            Yd: b.screenY - a.screenY
        }
    };
    var vk = (a, b) => {
        const c = new tk(a, b);
        return () => uk(c)
    };

    function uk(a) {
        if (a.j) return !1;
        if (null == a.l) return wk(a), !0;
        const b = a.l + 1E3 - (new Date).getTime();
        if (1 > b) return wk(a), !0;
        xk(a, b);
        return !0
    }

    function wk(a) {
        a.l = (new Date).getTime();
        a.B()
    }

    function xk(a, b) {
        a.j = !0;
        a.A.setTimeout(() => {
            a.j = !1;
            wk(a)
        }, b)
    }
    class tk {
        constructor(a, b) {
            this.A = a;
            this.B = b;
            this.l = null;
            this.j = !1
        }
    };

    function yk(a) {
        return zk(qk(a.j), mk(a.l))
    }

    function Ak(a) {
        return lk(new kk(a.j.A), new kk(a.l.B))
    }
    var Bk = class {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };

    function zk(a, b) {
        return Xj(a, b).map(({
            first: c,
            second: d
        }) => c || d || null)
    };

    function Ck(a, b) {
        return new Dk(a, b)
    }

    function Ek(a) {
        a.win.requestAnimationFrame(() => {
            a.F || Q(a.A, new uf(a.element.offsetWidth, a.element.offsetHeight))
        })
    }

    function Fk(a) {
        a.j || (a.j = !0, a.B.observe(a.element));
        return ak(a.A, vf)
    }
    var Dk = class extends Sj {
        constructor(a, b) {
            super();
            this.win = a;
            this.element = b;
            this.j = !1;
            this.A = new Yj(new uf(this.element.offsetWidth, this.element.offsetHeight));
            this.B = new ResizeObserver(() => {
                Ek(this)
            })
        }
        l() {
            this.B.disconnect();
            super.l()
        }
    };

    function Gk(a, b) {
        return {
            top: a.j - b,
            right: a.A + a.l,
            bottom: a.j + b,
            left: a.A
        }
    }
    class Hk {
        constructor(a, b, c) {
            this.A = a;
            this.j = b;
            this.l = c
        }
    };

    function Ik(a, b) {
        a = a.getBoundingClientRect();
        return new Jk(a.top + Aj(b), a.bottom - a.top)
    }

    function Kk(a) {
        return new Jk(Math.round(a.j), Math.round(a.l))
    }
    class Jk {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        getHeight() {
            return this.l
        }
    };

    function Lk(a, b) {
        a.D = !0;
        a.A = b;
        a.l.forEach(c => {
            c(a.A)
        });
        a.l = []
    }
    class Mk {
        constructor(a) {
            this.j = a;
            this.l = [];
            this.D = !1;
            this.C = this.A = null;
            this.F = vk(a, () => {
                if (null != this.C) {
                    var b = vj(this.j, !0) - this.C;
                    1E3 < b && Lk(this, b)
                }
            });
            this.B = null
        }
        init(a, b) {
            null == a ? (this.C = a = vj(this.j, !0), this.j.addEventListener("scroll", this.F), null != b && b(a)) : this.B = this.j.setTimeout(() => {
                this.init(void 0, b)
            }, a)
        }
        va() {
            null != this.B && this.j.clearTimeout(this.B);
            this.j.removeEventListener("scroll", this.F);
            this.l = [];
            this.A = null
        }
        addListener(a) {
            this.D ? a(this.A) : this.l.push(a)
        }
    };

    function Nk(a) {
        return new Ok(a, new Wj(a.document.body), new Wj(a.document.documentElement))
    }

    function Pk(a) {
        null === a.l && (a.l = a.B.pageYOffset, Vj(a.j, "position", "fixed"), Vj(a.j, "top", `${-a.l}px`), Vj(a.j, "width", "100%"));
        Vj(a.j, "overflow-x", "hidden");
        Vj(a.j, "overflow-y", "hidden");
        Vj(a.A, "overflow-x", "hidden");
        Vj(a.A, "overflow-y", "hidden")
    }

    function Qk(a) {
        null !== a.l && (a.B.scrollTo(0, a.l), a.l = null)
    }
    var Ok = class {
        constructor(a, b, c) {
            this.B = a;
            this.j = b;
            this.A = c;
            this.l = null
        }
    };
    var Rk = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    class Sk {
        constructor(a = 1) {
            this.j = a
        }
        next() {
            var a = 48271 * this.j % 2147483647;
            this.j = 0 > 2147483647 * a ? a + 2147483647 : a;
            return this.j / 2147483647
        }
    };

    function Tk(a, b, c) {
        const d = [];
        for (const e of a.j) b(e) ? d.push(e) : c(e);
        return new Uk(d)
    }

    function Vk(a, b = 1) {
        a = a.j.slice(0);
        const c = new Sk(b);
        wb(a, () => c.next());
        return new Uk(a)
    }
    const Uk = class {
        constructor(a) {
            this.j = a.slice(0)
        }
        forEach(a) {
            this.j.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new Uk(kb(this.j, a))
        }
        apply(a) {
            return new Uk(a(this.j.slice(0)))
        }
        sort(a) {
            return new Uk(this.j.slice(0).sort(a))
        }
        get(a) {
            return this.j[a]
        }
        add(a) {
            const b = this.j.slice(0);
            b.push(a);
            return new Uk(b)
        }
    };
    class Wk {
        constructor(a) {
            this.j = new Pj(a)
        }
        contains(a) {
            return this.j.contains(a)
        }
    };

    function Xk(a) {
        return new Yk({
            value: a
        }, null)
    }

    function Zk(a) {
        return new Yk(null, Error(a))
    }

    function $k(a) {
        try {
            return Xk(a())
        } catch (b) {
            return new Yk(null, b)
        }
    }

    function al(a) {
        return null != a.j ? a.j.value : null
    }

    function bl(a, b) {
        null != a.j && b(a.j.value)
    }

    function cl(a, b) {
        null != a.j || b(a.l);
        return a
    }
    class Yk {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        map(a) {
            return null != this.j ? (a = a(this.j.value), a instanceof Yk ? a : Xk(a)) : this
        }
    };
    class dl {
        constructor() {
            this.j = new Oj
        }
        set(a, b) {
            let c = this.j.get(a);
            c || (c = new Pj, this.j.set(a, c));
            c.add(b)
        }
    };

    function el(a) {
        return !a
    }

    function fl(a) {
        const b = {
            Cc: a
        };
        return () => {
            if (b.Cc) {
                const c = b.Cc;
                delete b.Cc;
                c()
            }
        }
    };
    var hl = class extends K {
            constructor(a) {
                super(a, -1, gl)
            }
            getId() {
                return y(this, 3)
            }
        },
        gl = [4];
    class il {
        constructor(a, {
            cd: b,
            he: c,
            Xe: d,
            Md: e
        }) {
            this.C = a;
            this.A = c;
            this.B = new Uk(b || []);
            this.l = e;
            this.j = d
        }
    };
    var jl = a => {
            var b = a.split("~").filter(c => 0 < c.length);
            a = new Oj;
            for (const c of b) b = c.indexOf("."), -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        ll = a => {
            var b = kl(a);
            a = [];
            for (let c of b) b = String(c.hb), a.push(c.Ka + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const kl = a => {
            const b = [],
                c = a.B;
            c && c.j.length && b.push({
                Ka: "a",
                hb: ml(c)
            });
            null != a.A && b.push({
                Ka: "as",
                hb: a.A
            });
            null != a.j && b.push({
                Ka: "i",
                hb: String(a.j)
            });
            null != a.l && b.push({
                Ka: "rp",
                hb: String(a.l)
            });
            b.sort(function(d, e) {
                return d.Ka.localeCompare(e.Ka)
            });
            b.unshift({
                Ka: "t",
                hb: nl(a.C)
            });
            return b
        },
        nl = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        ml = a => {
            a = a.j.slice(0).map(ol);
            a = JSON.stringify(a);
            return gg(a)
        },
        ol = a => {
            const b = {};
            Fc(a, 7) && (b.q = y(a, 7));
            Fc(a, 2) &&
                (b.o = y(a, 2));
            Fc(a, 5) && (b.p = y(a, 5));
            return b
        };

    function pl() {
        var a = new ql;
        return z(a, 2, 1)
    }
    var ql = class extends K {
        constructor(a) {
            super(a)
        }
        setLocation(a) {
            return z(this, 1, a)
        }
    };

    function rl(a) {
        const b = [].slice.call(arguments).filter(He(e => null === e));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.gd || []);
            d = Object.assign(d, e.rb())
        });
        return new sl(c, d)
    }

    function tl(a) {
        switch (a) {
            case 1:
                return new sl(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new sl(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new sl(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new sl(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function ul(a) {
        return null == a ? null : new sl(null, {
            google_ml_rank: a
        })
    }

    function vl(a) {
        return null == a ? null : new sl(null, {
            google_placement_id: ll(a)
        })
    }
    class sl {
        constructor(a, b) {
            this.gd = a;
            this.j = b
        }
        rb() {
            return this.j
        }
    };
    var wl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        xl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        zl = class extends K {
            constructor(a) {
                super(a, -1, yl)
            }
        },
        Al = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Bl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        yl = [1];
    var Cl = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var Dl = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var El = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Fl = class extends K {
            constructor(a) {
                super(a)
            }
        };
    var Gl = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var Il = class extends K {
            constructor(a) {
                super(a, -1, Hl)
            }
        },
        Jl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Kl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Hl = [3];
    var Ml = class extends K {
            constructor(a) {
                super(a, -1, Ll)
            }
        },
        Ll = [2];
    var Nl = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var Pl = class extends K {
            constructor(a) {
                super(a, -1, Ol)
            }
        },
        Ol = [1];
    var Ql = class extends K {
        constructor(a) {
            super(a)
        }
        Z() {
            return E(this, hl, 1)
        }
        l() {
            return y(this, 2)
        }
    };
    var Rl = class extends K {
            constructor(a) {
                super(a)
            }
            getName() {
                return y(this, 4)
            }
        },
        Sl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Tl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Ul = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Vl = [1, 2, 3];
    var Xl = class extends K {
            constructor(a) {
                super(a, -1, Wl)
            }
        },
        Yl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Wl = [1];
    var Zl = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var am = class extends K {
            constructor(a) {
                super(a, -1, $l)
            }
        },
        $l = [3, 4];
    var bm = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var dm = class extends K {
            constructor(a) {
                super(a, -1, cm)
            }
            Z() {
                return E(this, hl, 1)
            }
            l() {
                return y(this, 2)
            }
        },
        cm = [6, 7, 9, 10, 11];
    var fm = class extends K {
            constructor(a) {
                super(a, -1, em)
            }
        },
        em = [4];
    var hm = class extends K {
            constructor(a) {
                super(a, -1, gm)
            }
        },
        im = class extends K {
            constructor() {
                super(void 0)
            }
        },
        gm = [6];
    var km = class extends K {
            constructor(a) {
                super(a, -1, jm)
            }
        },
        mm = class extends K {
            constructor(a) {
                super(a, -1, lm)
            }
        },
        nm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        om = class extends K {
            constructor(a) {
                super(a)
            }
        },
        pm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        qm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        jm = [1],
        lm = [1],
        rm = [1, 2];
    var sm = class extends K {
        constructor(a) {
            super(a)
        }
    };

    function tm(a) {
        return E(a, um, 13)
    }

    function vm(a) {
        return E(a, wm, 15)
    }
    var ym = class extends K {
            constructor(a) {
                super(a, -1, xm)
            }
        },
        zm = class extends K {
            constructor() {
                super(void 0)
            }
        },
        Am = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Cm = class extends K {
            constructor(a) {
                super(a, -1, Bm)
            }
        },
        Dm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Em = class extends K {
            constructor(a) {
                super(a)
            }
        },
        um = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Fm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        wm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Gm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Hm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        xm = [1, 2, 5, 7],
        Bm = [2, 5, 6, 11];
    var Im = class extends K {
        constructor(a) {
            super(a)
        }
    };

    function Jm(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? Yc(Im, b) : null
        } catch (b) {
            return null
        }
    }

    function Km(a, b) {
        if (void 0 !== a.Ac) {
            let c = Jm(b);
            c || (c = new Im);
            void 0 !== a.Ac && z(c, 2, a.Ac);
            z(c, 1, Ea() + 864E5);
            a = ad(c);
            try {
                b.localStorage.setItem("google_ama_settings", a)
            } catch (d) {}
        } else if ((a = Jm(b)) && y(a, 1) < Ea()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (c) {}
    };
    var Lm = {
            Ba: "ama_success",
            ta: .1,
            wa: !0
        },
        Mm = {
            Ba: "ama_failure",
            ta: .1,
            wa: !0
        },
        Nm = {
            Ba: "ama_inf_scr",
            ta: .1,
            wa: !0
        },
        Om = {
            Ba: "ama_inf_scr",
            ta: .1,
            wa: !0
        },
        Pm = {
            Ba: "ama_coverage",
            ta: .1,
            wa: !0
        },
        Qm = {
            Ba: "ama_inf_scr",
            ta: 1,
            wa: !0
        },
        Rm = {
            Ba: "ama_opt",
            ta: .1,
            wa: !0
        },
        Sm = {
            Ba: "ama_aud_sen",
            ta: 1,
            wa: !0
        };

    function Tm(a, b) {
        for (var c = 0; c < b.length; c++) a.ua(b[c]);
        return a
    }

    function Um(a, b) {
        a.A = a.A ? a.A : b;
        return a
    }
    class Vm {
        constructor(a) {
            this.F = {};
            this.F.c = a;
            this.C = [];
            this.A = null;
            this.D = [];
            this.G = 0
        }
        bb(a) {
            this.F.wpc = a;
            return this
        }
        ua(a) {
            for (var b = 0; b < this.C.length; b++)
                if (this.C[b] == a) return this;
            this.C.push(a);
            return this
        }
        B(a) {
            var b = qd(this.F);
            0 < this.G && (b.t = this.G);
            b.err = this.C.join();
            b.warn = this.D.join();
            this.A && (b.excp_n = this.A.name, b.excp_m = this.A.message && this.A.message.substring(0, 512), b.excp_s = this.A.stack && hi(this.A.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };

    function Wm(a, b, c) {
        !b.wa || "pvc" in c || (c.pvc = Eg(a.j));
        Qi(b.Ba, c, b.ta)
    }

    function Xm(a, b, c) {
        c = c.B(a.j);
        b.wa && (c.pvc = Eg(a.j));
        0 < b.ta && (c.r = b.ta, Wm(a, b, c))
    }
    var Ym = class {
        constructor(a) {
            this.j = a
        }
    };

    function Zm(a, b, c) {
        let d;
        Wm(a.l, Sm, Object.assign({}, c, {
            evt: b,
            vh: P(a.A).clientHeight,
            eid: null == (d = E(a.j, Bl, 4)) ? void 0 : J(d, 2)
        }))
    }
    var $m = class {
        constructor(a, b, c) {
            this.A = a;
            this.l = b;
            this.j = c
        }
    };

    function an(a) {
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
    }

    function bn(a) {
        return Jj(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };
    var R = class {
            constructor(a, b = !1) {
                this.j = a;
                this.defaultValue = b
            }
        },
        S = class {
            constructor(a, b = 0) {
                this.j = a;
                this.defaultValue = b
            }
        },
        cn = class {
            constructor(a) {
                this.j = a;
                this.defaultValue = ""
            }
        };
    var dn = new R(1084),
        en = new R(1082, !0),
        fn = new R(236),
        gn = new S(1130, 100),
        hn = new R(1150),
        jn = new S(1126, 5E3),
        kn = new S(1032, 200),
        ln = new cn(14),
        mn = new R(1131, !0),
        nn = new S(1142, 8),
        on = new S(1165, 1E3),
        pn = new S(1158),
        qn = new S(1157),
        rn = new S(1195, 1),
        sn = new S(1193, 100),
        tn = new R(1191),
        un = new S(1103),
        vn = new R(1192),
        wn = new R(1176),
        xn = new R(1189),
        yn = new S(1114, 1),
        zn = new S(1116, 300),
        An = new S(1110),
        Bn = new S(1111),
        Cn = new S(1112),
        Dn = new S(1113),
        En = new S(1104),
        Fn = new S(1108),
        Gn = new S(1106),
        Hn = new S(1107),
        In = new S(1105),
        Jn = new S(1115, 1),
        Kn = new R(1121),
        Ln = new S(1194, 1),
        Mn = new R(1186),
        Nn = new R(1188),
        On = new S(1159, 500),
        Pn = new S(1119, 300),
        Qn = new R(1122, !0),
        Rn = new R(1196),
        Sn = new R(1170),
        Tn = new R(1160),
        Un = new R(316),
        Vn = new R(334),
        Wn = new S(54),
        Xn = new R(313),
        Yn = new S(66, -1),
        Zn = new S(65, -1),
        $n = new R(369),
        ao = new R(368),
        bo = new S(1169, 15E3),
        co = new R(1162),
        eo = new R(1175),
        fo = new R(1120),
        go = new R(1171),
        ho = new R(1151),
        io = new R(1164),
        jo = new R(1179),
        ko = new S(1072, .75),
        lo = new S(1168, 15E3),
        mo = new R(290),
        no = new R(154),
        oo = new cn(1166),
        po = new R(1147),
        qo = new R(1197),
        ro = new R(1190),
        so = new R(380254521),
        to = new R(381914117, !0),
        uo = new R(447540098),
        vo = new R(449967574),
        wo = new R(447540095),
        xo = new R(447540097),
        yo = new R(447540099),
        zo = new R(447540096),
        Ao = new R(83),
        Bo = new R(439828594),
        Co = new R(77),
        Do = new R(78),
        Eo = new R(309),
        Fo = new R(80),
        Go = new R(76),
        Ho = new R(1957),
        Io = new R(380025941),
        Jo = new R(84),
        Ko = new R(1973),
        Lo = new R(188),
        Mo = new R(1971),
        No = new R(1928),
        Oo = new R(1941),
        Po = new R(370946349),
        Qo = new R(392736476),
        Ro = new S(406149835),
        So = new R(432946749),
        To = new R(432938498),
        Uo = new S(1935);
    var Vo = class {
            constructor() {
                const a = {};
                this.A = (b, c) => null != a[b] ? a[b] : c;
                this.B = (b, c) => null != a[b] ? a[b] : c;
                this.j = (b, c) => null != a[b] ? a[b] : c;
                this.C = (b, c) => null != a[b] ? a[b] : c;
                this.l = () => {}
            }
        },
        T = a => O(Vo).A(a.j, a.defaultValue),
        U = a => O(Vo).B(a.j, a.defaultValue);

    function Wo(a, b) {
        a = (new Cf(a)).createElement("DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function Xo(a, b, c) {
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
        an(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function Yo(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            an(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var $o = (a, b, c, d = 0) => {
            var e = Zo(b, c, d);
            if (e.init) {
                for (c = b = e.init; c = e.Pb(c);) b = c;
                e = {
                    anchor: b,
                    position: e.ec
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            Xo(a, e.anchor, e.position)
        },
        ap = (a, b, c, d = 0) => {
            T(Xn) ? $o(a, b, c, d) : Xo(a, b, c)
        };

    function Zo(a, b, c) {
        const d = f => {
                f = bp(f);
                return null == f ? !1 : c < f
            },
            e = f => {
                f = bp(f);
                return null == f ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    init: cp(a.previousSibling, d),
                    Pb: f => cp(f.previousSibling, d),
                    ec: 0
                };
            case 2:
                return {
                    init: cp(a.lastChild, d),
                    Pb: f => cp(f.previousSibling, d),
                    ec: 0
                };
            case 3:
                return {
                    init: cp(a.nextSibling, e),
                    Pb: f => cp(f.nextSibling, e),
                    ec: 3
                };
            case 1:
                return {
                    init: cp(a.firstChild, e),
                    Pb: f => cp(f.nextSibling, e),
                    ec: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function bp(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function cp(a, b) {
        return a && b(a) ? a : null
    };
    var dp = (a, b = !1) => {
        try {
            return b ? (new uf(a.innerWidth, a.innerHeight)).round() : Gf(a || window).round()
        } catch (c) {
            return new uf(-12245933, -12245933)
        }
    };

    function ep(a = u) {
        a = a.devicePixelRatio;
        return "number" === typeof a ? +a.toFixed(3) : null
    }

    function fp(a, b = u) {
        a = a.scrollingElement || ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return new tf(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function gp(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };

    function hp(a) {
        -1 === a.l && (a.l = mb(a.j, (b, c, d) => c ? b + 2 ** d : b, 0));
        return a.l
    }
    class ip {
        constructor() {
            this.j = [];
            this.l = -1
        }
        set(a, b = !0) {
            0 <= a && 52 > a && Number.isInteger(a) && this.j[a] !== b && (this.j[a] = b, this.l = -1)
        }
        get(a) {
            return !!this.j[a]
        }
    };
    N `https://www.googletagservices.com/console/host/host.js`;
    N `https://www.googletagservices.com/console/panel/index.html`;
    N `https://www.googletagservices.com/console/overlay/index.html`;
    var jp = (a, b, c) => {
        b = b || a.google_ad_width;
        c = c || a.google_ad_height;
        if (a && a.top == a) return !1;
        const d = a.document,
            e = d.documentElement;
        if (b && c) {
            let f = 1,
                g = 1;
            a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : d.body && (f = d.body.clientWidth, g = d.body.clientHeight);
            if (g > 2 * c || f > 2 * b) return !1
        }
        return !0
    };

    function kp(a, b) {
        eg(a, (c, d) => {
            b[d] = c
        })
    }
    var lp = a => {
        let b = a.location.href;
        if (a == a.top) return {
            url: b,
            Hc: !0
        };
        let c = !1;
        const d = a.document;
        d && d.referrer && (b = d.referrer, a.parent == a.top && (c = !0));
        (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 == b.indexOf(a) && (c = !1, b = a);
        return {
            url: b,
            Hc: c
        }
    };

    function mp(a) {
        if (a == a.top) return 0;
        for (; a && a != a.top && Xf(a); a = a.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };
    var np = (a, b) => {
            try {
                const c = b.document.documentElement.getBoundingClientRect(),
                    d = a.getBoundingClientRect();
                return {
                    x: d.left - c.left,
                    y: d.top - c.top
                }
            } catch (c) {
                return null
            }
        },
        op = (a, b) => {
            const c = 40 === a.google_reactive_ad_format,
                d = 16 === a.google_reactive_ad_format;
            return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top
        },
        pp = (a, b, c) => {
            a = a.style;
            "rtl" == b ? a.marginRight = c : a.marginLeft = c
        };
    const qp = (a, b, c) => {
        a = np(b, a);
        return "rtl" == c ? -a.x : a.x
    };
    var rp = (a, b) => {
            b = b.parentElement;
            return b ? (a = cg(b, a)) ? a.direction : "" : ""
        },
        sp = (a, b, c) => {
            if (0 === qp(a, b, c)) return !1;
            pp(b, c, "0px");
            const d = qp(a, b, c);
            pp(b, c, -1 * d + "px");
            a = qp(a, b, c);
            0 !== a && a !== d && pp(b, c, d / (a - d) * d + "px");
            return !0
        };
    const tp = RegExp("(^| )adsbygoogle($| )");

    function up(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            const e = zf(d.Mc);
            a[e] = d.value
        }
    }

    function vp(a, b, c, d, e, f) {
        a = wp(a, e);
        a.qa.setAttribute("data-ad-format", d ? d : "auto");
        xp(a, b, c, f);
        return a
    }

    function yp(a, b, c = null) {
        a = wp(a, {});
        xp(a, b, null, c);
        return a
    }

    function xp(a, b, c, d) {
        var e = [];
        if (d = d && d.gd) a.Ra.className = d.join(" ");
        a = a.qa;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function wp(a, b) {
        var c = Wo(a, b.clearBoth || !1),
            d = c.style;
        d.textAlign = "center";
        b.dc && up(d, b.dc);
        a = (new Cf(a)).createElement("INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.Uc && (d.marginTop = b.Uc);
        b.vc && (d.marginBottom = b.vc);
        b.eb && up(d, b.eb);
        c.appendChild(a);
        return {
            Ra: c,
            qa: a
        }
    }

    function zp(a, b, c) {
        b.dataset.adsbygoogleStatus = "reserved";
        b.className += " adsbygoogle-noablate";
        var d = {
            element: b
        };
        c = c && c.rb();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function Ap(a) {
        const b = bn(a.document);
        jb(b, function(c) {
            const d = Bp(a, c);
            var e;
            if (e = d) e = np(c, a), e = !((e ? e.y : 0) < P(a).clientHeight);
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), zp(a, c))
        })
    }

    function Bp(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in lf) a[lf[c]] && (b[lf[c]] = a[lf[c]]);
        return b
    };

    function Cp(a) {
        var b = [];
        Ij(a.getElementsByTagName("p"), function(c) {
            100 <= Dp(c) && b.push(c)
        });
        return b
    }

    function Dp(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        Ij(a.childNodes, function(c) {
            b += Dp(c)
        });
        return b
    }

    function Ep(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Fp(a, b) {
        if (null == a.j) return b;
        switch (a.j) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.j);
        }
    }
    const Gp = class {
        constructor(a, b, c, d) {
            this.B = a;
            this.l = b;
            this.A = c;
            this.j = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.B)
            } catch (f) {}
            if (!b.length) return [];
            a = rb(b);
            a = Fp(this, a);
            "number" === typeof this.l && (b = this.l, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.A) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = Cp(a[c]),
                        e = this.A;
                    0 > e && (e += d.length);
                    0 <= e && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.B,
                occurrenceIndex: this.l,
                paragraphIndex: this.A,
                ignoreMode: this.j
            })
        }
    };
    class Hp {
        constructor() {
            var a = N `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.j = null;
            this.l = !1;
            this.B = Math.random();
            this.A = this.la;
            this.D = a
        }
        Rd(a) {
            this.j = a
        }
        C(a) {
            this.l = a
        }
        la(a, b, c = .01, d, e = "jserror") {
            if ((this.l ? this.B : Math.random()) > c) return !1;
            b.error && b.meta && b.id || (b = new Ch(b, {
                context: a,
                id: e
            }));
            if (d || this.j) b.meta = {}, this.j && this.j(b.meta), d && d(b.meta);
            u.google_js_errors = u.google_js_errors || [];
            u.google_js_errors.push(b);
            u.error_rep_loaded || (ag(u.document, ah(this.D)), u.error_rep_loaded = !0);
            return !1
        }
        yb(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.A(a, d, .01, c, "jserror")) throw d;
            }
        }
        ma(a, b) {
            return (...c) => this.yb(a, () => b.apply(void 0, c))
        }
        Ha(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.la(a, c instanceof Error ? c : Error(c))
            })
        }
    };
    const Ip = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    var Jp = (a, b, c, d) => {
            const e = d || window,
                f = "undefined" !== typeof queueMicrotask;
            return function() {
                f && queueMicrotask(() => {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                const g = Xh();
                let h, l = 3;
                try {
                    h = b.apply(this, arguments)
                } catch (k) {
                    l = 13;
                    if (!c) throw k;
                    c(a, k)
                } finally {
                    e.google_measure_js_timing && g && Ip(Object.assign({}, {
                        label: a.toString(),
                        value: g,
                        duration: (Xh() || 0) - g,
                        type: l
                    }, f && {
                        taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                    }), e)
                }
                return h
            }
        },
        Kp = (a, b) => Jp(754, a, (c, d) => {
            (new Hp).la(c, d)
        }, b);

    function Lp(a, b, c) {
        return Jp(a, b, void 0, c).apply()
    }

    function Mp(a, b) {
        return Kp(a, b).apply()
    }

    function Np(a) {
        if (!a) return null;
        var b = y(a, 7);
        if (y(a, 1) || a.getId() || 0 < Ic(a, 4).length) {
            var c = a.getId();
            b = Ic(a, 4);
            var d = y(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + Ep(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + Ep(b[c]);
            a = (b = e) ? new Gp(b, y(a, 2), y(a, 5), Op(y(a, 6))) : null
        } else a = b ? new Gp(b, y(a, 2), y(a, 5), Op(y(a, 6))) : null;
        return a
    }
    var Pp = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Op(a) {
        return null == a ? a : Pp[a]
    }

    function Qp(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = y(a[c], 1),
                e = y(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.Mc = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function Rp(a, b) {
        var c = {};
        a && (c.Uc = y(a, 1), c.vc = y(a, 2), c.clearBoth = !!B(a, 3));
        b && (c.dc = Qp(F(b, Zl, 3)), c.eb = Qp(F(b, Zl, 4)));
        return c
    }
    var Sp = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        Tp = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    const Up = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            return vp(d.document, a, null, null, this.j, b)
        }
        A() {
            return null
        }
    };
    const Vp = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            var e = 0 < F(this.j, am, 9).length ? F(this.j, am, 9)[0] : null,
                f = Rp(E(this.j, bm, 3), e);
            if (!e) return null;
            if (e = y(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = (new Cf(d)).createElement(g);
                c.style.clear = f.clearBoth ? "both" : "none";
                "A" == g && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.dc && up(c.style, f.dc);
                d = (new Cf(d)).createElement("INS");
                f.eb && up(d.style, f.eb);
                c.appendChild(d);
                f = {
                    Ra: c,
                    qa: d
                };
                f.qa.setAttribute("data-ad-type", "text");
                f.qa.setAttribute("data-native-settings-key",
                    e);
                xp(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        A() {
            var a = 0 < F(this.j, am, 9).length ? F(this.j, am, 9)[0] : null;
            if (!a) return null;
            a = F(a, Zl, 3);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if ("height" == y(c, 1) && 0 < parseInt(y(c, 2), 10)) return parseInt(y(c, 2), 10)
            }
            return null
        }
    };
    const Wp = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            if (!this.j) return null;
            const e = this.j.google_ad_format || null,
                f = this.j.google_ad_slot || null;
            if (c = c.style) {
                var g = [];
                for (let h = 0; h < c.length; h++) {
                    const l = c.item(h);
                    "width" !== l && "height" !== l && g.push({
                        Mc: l,
                        value: c.getPropertyValue(l)
                    })
                }
                c = {
                    eb: g
                }
            } else c = {};
            a = vp(d.document, a, f, e, c, b);
            a.qa.setAttribute("data-pub-vars", JSON.stringify(this.j));
            return a
        }
        A() {
            return this.j ? parseInt(this.j.google_ad_height, 10) || null : null
        }
        rb() {
            return this.j
        }
    };
    class Xp {
        constructor(a) {
            this.l = a
        }
        j() {
            return new sl([], {
                google_ad_type: this.l,
                google_reactive_ad_format: 26,
                google_ad_format: "fluid"
            })
        }
    };
    const Yp = class {
        constructor(a, b) {
            this.B = a;
            this.A = b
        }
        l() {
            return this.A
        }
        j(a) {
            a = this.B.query(a.document);
            return 0 < a.length ? a[0] : null
        }
    };

    function Zp(a, b, c) {
        const d = [];
        for (let r = 0; r < a.length; r++) {
            var e = a[r];
            var f = r,
                g = b,
                h = c,
                l = e.Z();
            if (l) {
                var k = Np(l);
                if (k) {
                    var m = Sp[e.l()],
                        n = void 0 === m ? null : m;
                    if (null === n) e = null;
                    else {
                        m = (m = E(e, bm, 3)) ? B(m, 3) : null;
                        k = new Yp(k, n);
                        n = Ic(e, 10).slice(0);
                        Fc(l, 5) && n.push(1);
                        var p = h ? h : {};
                        h = y(e, 12);
                        l = Gc(e, 4) ? E(e, ql, 4) : null;
                        1 == y(e, 8) || 2 == y(e, 8) && T(Sn) ? (p = p.ye || null, e = new $p(k, new Up(Rp(E(e, bm, 3), null)), p, m, 0, n, l, g, f, h, e)) : e = 2 == y(e, 8) ? new $p(k, new Vp(e), p.Ye || new Xp("text"), m, 1, n, l, g, f, h, e) : null
                    }
                } else e = null
            } else e = null;
            null !== e && d.push(e)
        }
        return d
    }

    function aq(a) {
        return a.C
    }

    function bq(a) {
        return a.pa
    }

    function cq(a) {
        var b = a.J;
        a = a.A.document.createElement("div");
        T(Rn) ? a.className = "google-auto-placed-ad-placeholder" : a.className = "google-auto-placed";
        var c = a.style;
        c.textAlign = "center";
        c.width = "100%";
        c.height = "0px";
        c.clear = b ? "both" : "none";
        return a
    }

    function dq(a) {
        return T(Rn) ? (a.N || (a.N = a.I.j(a.A)), a.N) : a.I.j(a.A)
    }

    function eq(a) {
        return a.F instanceof Wp ? a.F.rb() : null
    }

    function fq(a, b, c) {
        Kj(a.L, b) || a.L.set(b, []);
        a.L.get(b).push(c)
    }

    function gq(a, b) {
        a.C = !0;
        T(Rn) && (a.j && Yo(a.j), a.j = null);
        null != b && a.U.push(b)
    }

    function hq(a) {
        return Wo(a.A.document, a.J || !1)
    }

    function iq(a) {
        return a.F.A(a.A)
    }

    function jq(a, b = null, c = null) {
        return new $p(a.I, b || a.F, c || a.O, a.J, a.Ta, a.Ic, a.mc, a.A, a.ga, a.G, a.B, a.D, a.W)
    }
    class $p {
        constructor(a, b, c, d, e, f, g, h, l, k = null, m = null, n = null, p = null) {
            this.I = a;
            this.F = b;
            this.O = c;
            this.J = d;
            this.Ta = e;
            this.Ic = f;
            this.mc = g ? g : new ql;
            this.A = h;
            this.ga = l;
            this.G = k;
            this.B = m;
            (a = !m) || (a = !(m.Z() && null != y(m.Z(), 5)));
            this.pa = !a;
            this.D = n;
            this.W = p;
            this.U = [];
            this.C = !1;
            this.L = new Oj;
            this.N = this.j = null
        }
        T() {
            return this.A
        }
        l() {
            return this.I.l()
        }
    };
    var kq = a => (null == a ? 0 : a.google_ad_slot) ? Xk(new il(1, {
            he: a.google_ad_slot
        })) : Zk("Missing dimension when creating placement id"),
        mq = a => {
            switch (a.Ta) {
                case 0:
                case 1:
                    var b = a.B;
                    null == b ? a = null : (a = b.Z(), null == a ? a = null : (b = b.l(), a = null == b ? null : new il(0, {
                        cd: [a],
                        Md: b
                    })));
                    return null != a ? Xk(a) : Zk("Missing dimension when creating placement id");
                case 2:
                    return a = lq(a), null != a ? Xk(a) : Zk("Missing dimension when creating placement id");
                default:
                    return Zk("Invalid type: " + a.Ta)
            }
        };
    const lq = a => {
        if (null == a || null == a.D) return null;
        const b = E(a.D, hl, 1),
            c = E(a.D, hl, 2);
        if (null == b || null == c) return null;
        const d = a.W;
        if (null == d) return null;
        a = a.l();
        return null == a ? null : new il(0, {
            cd: [b, c],
            Xe: d,
            Md: Tp[a]
        })
    };

    function nq(a) {
        const b = eq(a.V);
        return (b ? kq(b) : mq(a.V)).map(c => ll(c))
    }

    function oq(a) {
        a.j = a.j || nq(a);
        return a.j
    }

    function pq(a, b) {
        if (a.V.C) throw Error("AMA:AP:AP");
        ap(b, a.Z(), a.V.l());
        gq(a.V, b)
    }
    const qq = class {
        constructor(a, b, c) {
            this.V = a;
            this.l = b;
            this.X = c;
            this.j = null
        }
        Z() {
            return this.l
        }
        fill(a, b) {
            var c = this.V;
            (a = c.F.l(a, b, this.l, c.A)) && pq(this, a.Ra);
            return a
        }
    };
    const rq = (a, b) => {
        if (3 == b.nodeType) return 3 == b.nodeType ? (b = b.data, a = Xa(b, "&") ? wf(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (1 == b.nodeType) {
            var c = a.getComputedStyle(b);
            if ("0" == c.opacity || "none" == c.display || "hidden" == c.visibility) return !1;
            if ((c = b.tagName) && Qj.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (rq(a, b[c])) return !0
        }
        return !1
    };
    var sq = a => {
        if (460 <= a) return a = Math.min(a, 1200), Math.ceil(800 > a ? a / 4 : 200);
        a = Math.min(a, 600);
        return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };
    const tq = class {
        constructor() {
            this.j = {
                clearBoth: !0
            }
        }
        l(a, b, c, d) {
            return vp(d.document, a, null, null, this.j, b)
        }
        A(a) {
            return sq(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };
    class uq {
        constructor(a) {
            this.l = a
        }
        j(a) {
            a = Math.floor(a.l);
            const b = sq(a);
            return new sl(["ap_container"], {
                google_reactive_ad_format: 27,
                google_responsive_auto_format: 16,
                google_max_num_ads: 1,
                google_ad_type: this.l,
                google_ad_format: a + "x" + b,
                google_ad_width: a,
                google_ad_height: b
            })
        }
    };
    const vq = class {
        constructor(a, b) {
            this.B = a;
            this.A = b
        }
        j() {
            return this.B
        }
        l() {
            return this.A
        }
    };
    const wq = {
        TABLE: {
            kb: new Wk([1, 2])
        },
        THEAD: {
            kb: new Wk([0, 3, 1, 2])
        },
        TBODY: {
            kb: new Wk([0, 3, 1, 2])
        },
        TR: {
            kb: new Wk([0, 3, 1, 2])
        },
        TD: {
            kb: new Wk([0, 3])
        }
    };

    function xq(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = ib(e, f), 0 > c || b.push(new yq(a, [f], c, f, 3, Pf(f).trim(), d));
        return b
    }

    function zq(a, b, c) {
        let d = [];
        const e = [],
            f = b.childNodes,
            g = f.length;
        let h = 0,
            l = "";
        for (let n = 0; n < g; n++) {
            var k = f[n];
            if (1 == k.nodeType || 3 == k.nodeType) {
                a: {
                    var m = k;
                    if (1 != m.nodeType) {
                        m = null;
                        break a
                    }
                    if ("BR" == m.tagName) break a;
                    const p = c.getComputedStyle(m).getPropertyValue("display");m = "inline" == p || "inline-block" == p ? null : m
                }
                m ? (d.length && l && e.push(new yq(a, d, n - 1, m, 0, l, c)), d = [], h = n + 1, l = "") : (d.push(k), k = Pf(k).trim(), l += k && l ? " " + k : k)
            }
        }
        d.length && l && e.push(new yq(a, d, h, b, 2, l, c));
        return e
    }

    function Aq(a, b) {
        return a.j - b.j
    }

    function Bq(a) {
        const b = pl();
        return new $p(new vq(a.pc, a.qc), new Up({
            clearBoth: !0
        }), null, !0, 2, [], b, a.l, null, null, null, a.A, a.j)
    }
    class yq {
        constructor(a, b, c, d, e, f, g) {
            this.A = a;
            this.ib = b.slice(0);
            this.j = c;
            this.pc = d;
            this.qc = e;
            this.B = f;
            this.l = g
        }
        T() {
            return this.l
        }
    };

    function Cq(a) {
        return qb(a.B ? zq(a.j, a.Aa, a.l) : [], a.A ? xq(a.j, a.A, a.Aa, a.l) : []).filter(b => {
            var c = b.pc.tagName;
            c ? (c = wq[c.toUpperCase()], b = null != c && c.kb.contains(b.qc)) : b = !1;
            return !b
        })
    }
    class Dq {
        constructor(a, b, c) {
            this.Aa = a;
            this.A = b.Kb;
            this.B = b.pd;
            this.j = b.articleStructure;
            this.l = c
        }
    };

    function Eq(a, b) {
        return Mp(() => {
            if (T(Rn)) {
                var c = [],
                    d = Aj(b),
                    e = Bj(b);
                for (var f of a) {
                    var g = f;
                    if (!g.j && !g.C) {
                        var h = g;
                        var l = g,
                            k = cq(l);
                        try {
                            var m = dq(l);
                            if (m) {
                                ap(k, m, l.l());
                                var n = k
                            } else n = null
                        } catch (t) {
                            throw Yo(k), t;
                        }
                        h.j = n
                    }
                    h = g.j;
                    g = dq(f);
                    h && g && (h = Fq(h, e, d), c.push(new qq(f, g, h)))
                }
                n = c
            } else {
                n = [];
                f = [];
                try {
                    m = [];
                    for (let t = 0; t < a.length; t++) {
                        var p = a[t],
                            r = dq(p);
                        r && m.push({
                            Jd: p,
                            anchorElement: r
                        })
                    }
                    for (r = 0; r < m.length; r++) {
                        p = f;
                        h = p.push; {
                            k = m[r];
                            const t = k.anchorElement,
                                x = k.Jd,
                                w = cq(x);
                            try {
                                ap(w, t, x.l()), l = w
                            } catch (A) {
                                throw Yo(w),
                                    A;
                            }
                        }
                        h.call(p, l)
                    }
                    c = Aj(b);
                    d = Bj(b);
                    for (h = 0; h < f.length; h++) e = Fq(f[h], d, c), g = m[h], n.push(new qq(g.Jd, g.anchorElement, e))
                } finally {
                    for (m = 0; m < f.length; m++) Yo(f[m])
                }
            }
            return n
        }, b)
    }

    function Fq(a, b, c) {
        a = a.getBoundingClientRect();
        return new Hk(a.left + b, a.top + c, a.right - a.left)
    };

    function Gq(a, b) {
        const c = Cq(b);
        c.sort(Aq);
        return new Hq(a, b, c)
    }

    function Iq(a, b, c) {
        return new $p(new vq(b, c), new Up({}), null, !0, 2, [], null, a.j, null, null, null, a.C.j, null)
    }
    var Hq = class {
        constructor(a, b, c) {
            this.j = a;
            this.C = b;
            this.B = c;
            this.l = !1;
            this.A = 0
        }
        next() {
            if (!this.l) {
                if (this.A >= this.B.length) var a = null;
                else {
                    {
                        const b = this.B[this.A++].ib[0];
                        va(b) && 1 == b.nodeType ? a = Iq(this, b, 0) : (a = this.j.document.createElement("div"), M(a, {
                            display: "none"
                        }), b.parentNode.insertBefore(a, b), a = Iq(this, a, 3))
                    }
                    a = Eq([a], this.j)[0] || null
                }
                if (a) return a;
                this.l = !0
            }
            return null
        }
    };
    var Jq = class {
        constructor(a) {
            this.l = a
        }
        j() {
            return this.l.next()
        }
    };
    const Kq = {
            1: "0.5vp",
            2: "300px"
        },
        Lq = {
            1: 700,
            2: 1200
        },
        Mq = {
            [1]: {
                Ud: "3vp",
                Rc: "1vp",
                Td: "0.3vp"
            },
            [2]: {
                Ud: "900px",
                Rc: "300px",
                Td: "90px"
            }
        };

    function Nq(a, b, c) {
        var d = Oq(a),
            e = P(a).clientHeight || Lq[d],
            f = void 0;
        c && (f = (c = (c = Pq(F(c, Il, 2), d)) ? E(c, Kl, 7) : void 0) ? Qq(c, e) : void 0);
        c = f;
        f = Oq(a);
        a = P(a).clientHeight || Lq[f];
        const g = Rq(Mq[f].Rc, a);
        a = null === g ? Sq(f, a) : new Tq(g, g, Uq(g, g, 8), 8, .3, c);
        c = Rq(Mq[d].Ud, e);
        f = Rq(Mq[d].Rc, e);
        e = Rq(Mq[d].Td, e);
        d = a.A;
        c && e && f && void 0 !== b && (d = .5 >= b ? f + (1 - 2 * b) * (c - f) : e + (2 - 2 * b) * (f - e));
        b = d;
        return new Tq(d, b, Uq(d, b, a.l), a.l, a.B, a.j)
    }

    function Vq(a, b) {
        const c = Oq(a);
        a = P(a).clientHeight || Lq[c];
        if (b = Pq(F(b, Il, 2), c))
            if (b = Wq(b, a)) return b;
        return Sq(c, a)
    }

    function Xq(a) {
        const b = Oq(a);
        return Sq(b, P(a).clientHeight || Lq[b])
    }

    function Yq(a, b) {
        let c = {
            Zb: a.A,
            Xa: a.C
        };
        for (let d of a.D) d.adCount <= b && (c = d.Qc);
        return c
    }

    function Zq(a, b, c) {
        var d = B(b, 2);
        b = E(b, Il, 1);
        const e = P(c).clientHeight || Lq[Oq(c)];
        var f;
        c = null != (f = Rq(null == b ? void 0 : y(b, 2), e)) ? f : a.A;
        let g;
        f = null != (g = Rq(null == b ? void 0 : y(b, 5), e)) ? g : a.C;
        var h;
        d = d ? [] : null != (h = $q(null == b ? void 0 : F(b, Jl, 3), e)) ? h : a.D;
        var l;
        h = null != (l = null == b ? void 0 : y(b, 4)) ? l : a.l;
        var k;
        l = null != (k = null == b ? void 0 : Jc(b, 6)) ? k : a.B;
        let m;
        k = null != (m = (null == b ? 0 : Gc(b, 7)) ? Qq(E(b, Kl, 7), e) : null) ? m : a.j;
        return new Tq(c, f, d, h, l, k)
    }
    class Tq {
        constructor(a, b, c, d, e, f) {
            this.A = a;
            this.C = b;
            this.D = c.sort((g, h) => g.adCount - h.adCount);
            this.l = d;
            this.B = e;
            this.j = f
        }
    }

    function Pq(a, b) {
        for (let c of a)
            if (y(c, 1) == b) return c;
        return null
    }

    function $q(a, b) {
        if (void 0 === a) return null;
        const c = [];
        for (let d of a) {
            a = y(d, 1);
            const e = Rq(y(d, 2), b);
            if ("number" !== typeof a || null === e) return null;
            c.push({
                adCount: a,
                Qc: {
                    Zb: e,
                    Xa: Rq(y(d, 3), b)
                }
            })
        }
        return c
    }

    function Wq(a, b) {
        const c = Rq(y(a, 2), b),
            d = Rq(y(a, 5), b);
        if (null === c) return null;
        const e = y(a, 4);
        if (null == e) return null;
        var f = F(a, Jl, 3);
        f = $q(f, b);
        if (null === f) return null;
        const g = E(a, Kl, 7);
        return new Tq(c, d, f, e, Jc(a, 6), g ? Qq(g, b) : void 0)
    }

    function Sq(a, b) {
        a = Rq(Kq[a], b);
        return new Tq(null === a ? Infinity : a, null, [], 3, null)
    }

    function Rq(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function Oq(a) {
        a = 900 <= P(a).clientWidth;
        return Uf() && !a ? 1 : 2
    }

    function Uq(a, b, c) {
        if (4 > c) return [];
        const d = Math.ceil(c / 2);
        return [{
            adCount: d,
            Qc: {
                Zb: 2 * a,
                Xa: 2 * b
            }
        }, {
            adCount: d + Math.ceil((c - d) / 2),
            Qc: {
                Zb: 3 * a,
                Xa: 3 * b
            }
        }]
    }

    function Qq(a, b) {
        return {
            Dd: Rq(y(a, 2), b) || 0,
            Bd: y(a, 3) || 1,
            gb: Rq(y(a, 1), b) || 0
        }
    };

    function ar(a, b, c) {
        return kj({
            top: a.j.top - (c + 1),
            right: a.j.right + (c + 1),
            bottom: a.j.bottom + (c + 1),
            left: a.j.left - (c + 1)
        }, b.j)
    }

    function br(a) {
        if (!a.length) return null;
        const b = lj(a.map(c => c.j));
        a = a.reduce((c, d) => c + d.l, 0);
        return new cr(b, a)
    }
    class cr {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };

    function dr(a = window) {
        a = a.googletag;
        return (null == a ? 0 : a.apiReady) ? a : void 0
    };
    var jr = (a, b) => {
        const c = rb(b.document.querySelectorAll(".google-auto-placed")),
            d = er(b),
            e = fr(b),
            f = gr(b),
            g = hr(b),
            h = rb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            l = rb(b.document.querySelectorAll("div.googlepublisherpluginad")),
            k = rb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        let m = [].concat(rb(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), rb(b.document.querySelectorAll("body ins.adsbygoogle")));
        b = [];
        for (const [n, p] of [
                [a.Qb, c],
                [a.Sa, d],
                [a.Ve, e],
                [a.Rb, f],
                [a.Sb, g],
                [a.Te, h],
                [a.Ue, l],
                [a.We, k]
            ]) a = p, !1 === n ? b = b.concat(a) : m = m.concat(a);
        a = ir(m);
        b = ir(b);
        a = a.slice(0);
        for (const n of b)
            for (b = 0; b < a.length; b++)(n.contains(a[b]) || a[b].contains(n)) && a.splice(b, 1);
        return a
    };
    const kr = a => {
            const b = dr(a);
            return b ? kb(lb(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null
        },
        er = a => rb(a.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")),
        fr = a => rb(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        gr = a => (kr(a) || rb(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(rb(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        hr = a => rb(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var ir = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };
    var lr = Ni.ma(453, jr),
        mr;
    mr = Ni.ma(454, (a, b) => {
        const c = rb(b.document.querySelectorAll(".google-auto-placed")),
            d = er(b),
            e = fr(b),
            f = gr(b),
            g = hr(b),
            h = rb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            l = rb(b.document.querySelectorAll("div.googlepublisherpluginad"));
        b = rb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        return ir([].concat(!0 === a.Qb ? c : [], !0 === a.Sa ? d : [], !0 === a.Ve ? e : [], !0 === a.Rb ? f : [], !0 === a.Sb ? g : [], !0 === a.Te ? h : [], !0 === a.Ue ? l : [], !0 === a.We ? b : []))
    });

    function nr(a, b, c) {
        const d = or(a);
        b = pr(d, b, c);
        return new qr(a, d, b)
    }

    function rr(a) {
        return 1 < (a.bottom - a.top) * (a.right - a.left)
    }

    function sr(a) {
        return a.j.map(b => b.box)
    }

    function tr(a) {
        return a.j.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    class qr {
        constructor(a, b, c) {
            this.A = a;
            this.j = b.slice(0);
            this.B = c.slice(0);
            this.l = null
        }
    }

    function or(a) {
        const b = lr({
                Sa: !1
            }, a),
            c = Bj(a),
            d = Aj(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && Xa(e.className, "google-auto-placed")) || rr(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                zj: e ? 1 : 0
            } : null
        }).filter(He(e => null === e))
    }

    function pr(a, b, c) {
        return void 0 != b && a.length <= (void 0 != c ? c : 8) ? ur(a, b) : lb(a, d => new cr(d.box, 1))
    }

    function ur(a, b) {
        a = lb(a, d => new cr(d.box, 1));
        const c = [];
        for (; 0 < a.length;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (ar(d, a[f], b)) {
                        d = br([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function vr(a, b, c) {
        const d = Gk(c, b);
        return !nb(a, e => kj(e, d))
    }

    function wr(a, b, c, d, e) {
        e = e.X;
        const f = Gk(e, b),
            g = Gk(e, c),
            h = Gk(e, d);
        return !nb(a, l => kj(l, g) || kj(l, f) && !kj(l, h))
    }

    function xr(a, b, c, d) {
        const e = sr(a);
        if (vr(e, b, d.X)) return !0;
        if (!wr(e, b, c.Dd, c.gb, d)) return !1;
        const f = new cr(Gk(d.X, 0), 1);
        a = kb(a.B, g => ar(g, f, c.gb));
        b = mb(a, (g, h) => g + h.l, 1);
        return 0 === a.length || b > c.Bd ? !1 : !0
    };
    var yr = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function zr(a, b) {
        const c = new dl,
            d = new Pj;
        b.forEach(e => {
            if (Vc(e, Sl, 1, Vl)) {
                e = Vc(e, Sl, 1, Vl);
                if (E(e, Ql, 1) && E(e, Ql, 1).Z() && E(e, Ql, 2) && E(e, Ql, 2).Z()) {
                    const g = Ar(a, E(e, Ql, 1).Z()),
                        h = Ar(a, E(e, Ql, 2).Z());
                    if (g && h)
                        for (var f of yr({
                                anchor: g,
                                position: E(e, Ql, 1).l()
                            }, {
                                anchor: h,
                                position: E(e, Ql, 2).l()
                            })) c.set(xa(f.anchor), f.position)
                }
                E(e, Ql, 3) && E(e, Ql, 3).Z() && (f = Ar(a, E(e, Ql, 3).Z())) && c.set(xa(f), E(e, Ql, 3).l())
            } else Vc(e, Tl, 2, Vl) ? Br(a, Vc(e, Tl, 2, Vl), c) : Vc(e, Ul, 3, Vl) && Cr(a, Vc(e, Ul, 3, Vl), d)
        });
        return new Dr(c, d)
    }
    class Dr {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    }
    const Br = (a, b, c) => {
            E(b, Ql, 2) ? (b = E(b, Ql, 2), (a = Ar(a, b.Z())) && c.set(xa(a), b.l())) : E(b, hl, 1) && (a = Er(a, E(b, hl, 1))) && a.forEach(d => {
                d = xa(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        Cr = (a, b, c) => {
            E(b, hl, 1) && (a = Er(a, E(b, hl, 1))) && a.forEach(d => {
                c.add(xa(d))
            })
        },
        Ar = (a, b) => (a = Er(a, b)) && 0 < a.length ? a[0] : null,
        Er = (a, b) => (b = Np(b)) ? b.query(a) : null;

    function Fr(a, b, c) {
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
            if (Gr(b)) return !0;
            if (a.j.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.j.add(d));
        return !1
    }

    function Hr(a) {
        a = Ir(a);
        return a.has("all") || a.has("after")
    }

    function Jr(a) {
        a = Ir(a);
        return a.has("all") || a.has("before")
    }

    function Ir(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function Gr(a) {
        const b = Ir(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }
    var Kr = class {
        constructor() {
            this.j = new Set
        }
    };

    function Lr(a) {
        return function(b) {
            return Eq(b, a)
        }
    }

    function Mr(a) {
        const b = P(a).clientHeight;
        return b ? Da(Nr, b + Aj(a)) : Ee
    }

    function Or(a, b, c) {
        if (0 > a) throw Error("ama::ead:nd");
        if (Infinity === a) return Ee;
        const d = sr(c || nr(b));
        return e => vr(d, a, e.X)
    }

    function Pr(a, b, c, d) {
        if (0 > a || 0 > b.Dd || 0 > b.Bd || 0 > b.gb) throw Error("ama::ead:nd");
        return Infinity === a ? Ee : e => xr(d || nr(c, b.gb), a, b, e)
    }

    function Qr(a) {
        if (!a.length) return Ee;
        const b = new Wk(a);
        return c => b.contains(c.Ta)
    }

    function Rr(a) {
        return function(b) {
            for (let c of b.Ic)
                if (-1 < a.indexOf(c)) return !1;
            return !0
        }
    }

    function Sr(a) {
        return a.length ? function(b) {
            const c = b.Ic;
            return a.some(d => -1 < c.indexOf(d))
        } : Fe
    }

    function Tr(a, b) {
        if (0 >= a) return Fe;
        const c = P(b).scrollHeight - a;
        return function(d) {
            return d.X.j <= c
        }
    }

    function Ur(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[y(c.mc, 2) || 0]
        }
    }

    function Vr(a) {
        return a.length ? b => a.includes(y(b.mc, 1) || 0) : Fe
    }

    function Wr(a, b) {
        const c = zr(a, b);
        return function(d) {
            var e = d.Z();
            d = Tp[d.V.l()];
            var f = xa(e);
            f = c.l.j.get(f);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.j.contains(xa(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.j.contains(xa(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }

    function Yr() {
        const a = new Kr;
        return function(b) {
            var c = b.Z();
            b = Tp[b.V.l()];
            a: switch (b) {
                case 1:
                    var d = Hr(c.previousElementSibling) || Jr(c);
                    break a;
                case 4:
                    d = Hr(c) || Jr(c.nextElementSibling);
                    break a;
                case 2:
                    d = Jr(c.firstElementChild);
                    break a;
                case 3:
                    d = Hr(c.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + b);
            }
            return !(d || Fr(a, c, b))
        }
    }
    const Nr = (a, b) => b.X.j >= a,
        Zr = (a, b, c) => {
            c = c.X.l;
            return a <= c && c <= b
        };
    var $r = class {
        constructor(a, b) {
            this.A = a;
            this.l = b
        }
        j() {
            const a = Mr(this.A);
            let b = this.l.next();
            for (; b;) {
                if (a(b)) return b;
                b = this.l.next()
            }
            return null
        }
    };
    var as = class {
        constructor(a, b) {
            this.l = a;
            this.A = b
        }
        j() {
            var a = new dm;
            var b = E(this.A.j, hl, 1);
            a = Qc(a, 1, b);
            a = z(a, 2, 2);
            a = z(a, 8, 1);
            a = Zp([a], this.l);
            return Eq(a, this.l)[0] || null
        }
    };

    function bs(a, b) {
        if (!b) return !1;
        const c = xa(b),
            d = a.j.get(c);
        if (null != d) return d;
        if (1 == b.nodeType && ("UL" == b.tagName || "OL" == b.tagName) && "none" != a.l.getComputedStyle(b).getPropertyValue("list-style-type")) return a.j.set(c, !0), !0;
        b = bs(a, b.parentNode);
        a.j.set(c, b);
        return b
    }

    function cs(a, b) {
        return nb(b.ib, c => bs(a, c))
    }
    class ds {
        constructor(a) {
            this.j = new Oj;
            this.l = a
        }
    };
    class es {
        constructor(a, b) {
            this.B = a;
            this.j = [];
            this.l = [];
            this.A = b
        }
    };
    var gs = (a, {
            Cj: b = !1,
            Dj: c = 3,
            Ef: d = null
        } = {}) => {
            a = Cq(a);
            return fs(a, b, c, d)
        },
        fs = (a, b = !1, c = 3, d = null) => {
            if (2 > c) throw Error("minGroupSize should be at least 2, found " + c);
            var e = a.slice(0);
            e.sort(Aq);
            a = [];
            b = new es(b, d);
            for (const k of e) {
                d = b;
                e = {
                    hc: k,
                    Tb: 51 > k.B.length ? !1 : null != d.A ? !cs(d.A, k) : !0
                };
                if (d.B || e.Tb) {
                    if (d.j.length) {
                        var f = d.j[d.j.length - 1].hc;
                        b: {
                            var g = f.T();
                            var h = f.ib[f.ib.length - 1];f = e.hc.ib[0];
                            if (!h || !f) {
                                g = !1;
                                break b
                            }
                            var l = h.parentElement;
                            const m = f.parentElement;
                            if (l && m && l == m) {
                                l = 0;
                                for (h = h.nextSibling; 10 >
                                    l && h;) {
                                    if (h == f) {
                                        g = !0;
                                        break b
                                    }
                                    if (rq(g, h)) break;
                                    h = h.nextSibling;
                                    l++
                                }
                                g = !1
                            } else g = !1
                        }
                    } else g = !0;
                    g ? (d.j.push(e), e.Tb && d.l.push(e.hc)) : (d.j = [e], d.l = e.Tb ? [e.hc] : [])
                }
                if (b.l.length >= c) {
                    if (1 >= b.l.length) d = null;
                    else {
                        e = b.l[1];
                        for (d = b; d.j.length && !d.j[0].Tb;) d.j.shift();
                        d.j.shift();
                        d.l.shift();
                        d = e
                    }
                    d && a.push(d)
                }
            }
            return a
        };
    var is = (a, b) => {
            a = hs(a, b);
            const c = new ds(b);
            return Rk(a, d => gs(d, {
                Ef: c
            }))
        },
        hs = (a, b) => {
            const c = new Oj;
            a.forEach(d => {
                var e = Np(E(d, hl, 1));
                if (e) {
                    const f = e.toString();
                    Kj(c, f) || c.set(f, {
                        articleStructure: d,
                        pe: e,
                        Kb: null,
                        pd: !1
                    });
                    e = c.get(f);
                    (d = (d = E(d, hl, 2)) ? y(d, 7) : null) ? e.Kb = e.Kb ? e.Kb + "," + d : d: e.pd = !0
                }
            });
            return Nj(c).map(d => {
                const e = d.pe.query(b.document);
                return e.length ? new Dq(e[0], d, b) : null
            }).filter(d => null != d)
        };
    const js = a => {
            a = a.Aa.getBoundingClientRect();
            return 0 < a.width && 0 < a.height
        },
        ks = a => {
            let b = 0;
            a.forEach(c => b = Math.max(b, c.Aa.getBoundingClientRect().width));
            return c => c.Aa.getBoundingClientRect().width > .5 * b
        },
        ls = a => {
            const b = P(a).clientHeight || 0;
            return c => c.Aa.getBoundingClientRect().height >= .75 * b
        },
        ms = (a, b) => a.Aa.getBoundingClientRect().top - b.Aa.getBoundingClientRect().top;
    var ns = (a, b, c) => {
        b = hs(b, a);
        b = b.filter(js).filter(ks(b)).filter(ls(a));
        b.sort(ms);
        if (b = b[0] || null) {
            a: switch (C(c, 1, 0)) {
                case 1:
                    c = 1;
                    break a;
                case 2:
                    c = 2;
                    break a;
                case 3:
                    c = 3;
                    break a;
                default:
                    throw Error(`Unknown player position: ${C(c,1,0)}`);
            }
            a: switch (c) {
                case 1:
                    a = new as(a, b);
                    break a;
                case 2:
                    a = new Jq(Gq(a, b));
                    break a;
                case 3:
                    a = new $r(a, Gq(a, b));
                    break a;
                default:
                    throw Error(`Unknown position: ${c}`);
            }
            a = a.j()
        }
        else a = null;
        return a
    };
    var os = class {
            constructor(a) {
                this.j = a
            }
        },
        rs = (a, b, c, d) => {
            if (0 < a.document.getElementsByTagName("google-read-aloud-player").length) return Zk("Player already created");
            var e = a.document;
            const f = e.createElement("div");
            f.id = "google-auto-placed-read-aloud-player";
            M(f, {
                margin: "5px"
            });
            const g = e.createElement("script");
            var h = Xg `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;`;
            g.textContent = xd(h);
            Ce(g);
            f.appendChild(g);
            ps(e, f, jd("https://www.google-analytics.com/analytics.js"));
            ps(e, f, jd("https://www.gstatic.com/readaloud/player/web/api/audiosense/js/api.js"));
            e = e.createElement("google-read-aloud-player");
            e.setAttribute("data-api-key", "AIzaSyDTBU0XpbvyTzmA5nS-09w7cnopRavFpxs");
            e.setAttribute("data-tracking-ids", "UA-199725947-1,UA-168915890-13");
            e.setAttribute("data-url", c.url);
            e.setAttribute("data-voice", "en-us-m-6");
            d && (Fc(d, 1) && 0 != C(d, 1, 0) && e.setAttribute("data-docking-begin-trigger", qs[C(d, 1, 0)]), Fc(d, 2) && e.setAttribute("data-experiment", J(d, 2)));
            f.appendChild(e);
            pq(b,
                f);
            return Xk(new os(a.document.getElementsByTagName("google-read-aloud-player")[0]))
        };
    const ps = (a, b, c) => {
            a = a.createElement("script");
            De(a, Ed(id(c)));
            a.setAttribute("async", "true");
            b.appendChild(a)
        },
        qs = {
            [1]: "out-of-view"
        };
    class ss {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.j = b
            })
        }
    };

    function ts() {
        const {
            promise: a,
            resolve: b
        } = new ss;
        return {
            promise: a,
            resolve: b
        }
    };

    function us(a, b, c = () => {}) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d) return d;
        d = ts();
        b[a] = d;
        c();
        return d
    }

    function vs(a, b, c) {
        return us(a, b, () => {
            ag(b.document, c)
        }).promise
    };

    function ws(a, b, c) {
        a = vs(7, a, c).then(d => {
            d.init(b);
            d.handleAdConfig({
                preloadAdBreaks: "on",
                sound: "on"
            });
            return d
        });
        Ni.Ha(915, a);
        return new xs(a)
    }

    function ys(a, b) {
        a = a.j.then(c => {
            c.handleAdBreak({
                type: "preroll",
                name: "audiosense-preroll",
                adBreakDone: b
            })
        });
        Ni.Ha(956, a)
    }
    var xs = class {
        constructor(a) {
            this.j = a
        }
    };

    function zs(a) {
        const b = a.A.j;
        b.addEventListener("firstplay", () => {
            a.j || (a.j = !0, b.pause(), ys(a.B, () => b.play()), Zm(a.l, "play", {}))
        })
    }
    var As = class {
        constructor(a, b, c) {
            this.A = a;
            this.B = b;
            this.l = c;
            this.j = !1
        }
    };

    function Bs(a, b, c, d, e) {
        let f;
        const g = null == (f = E(c, Xl, 6)) ? void 0 : F(f, Yl, 1);
        return g && 0 != g.length ? (c = E(c, wl, 27)) ? E(c, xl, 2) ? Xk(new Cs(a, b, g, c, d, e)) : Zk("No AudioSenseConfig.PlacementConfig found") : Zk("No AudioSenseConfig found") : Zk("No ArticleStructure found")
    }

    function Ds(a) {
        const b = ns(a.B, a.G, E(a.l, xl, 2));
        if (b) {
            var c = !!a.C.Ab && Es(a);
            c && (a.D = ws(a.B, a.F, a.C.Ab));
            var d = rs(a.B, b, a.C, E(a.l, Bl, 4) || void 0);
            null != d.j ? (a.A = d.j.value, a.A.j.addEventListener("firstview", () => {
                Zm(a.j, "view", {})
            }), c && zs(new As(a.A, a.D, a.j)), Zm(a.j, "place", {
                sts: "ok",
                pp: b.X.j
            })) : Zm(a.j, "place", {
                sts: "wf"
            })
        } else Zm(a.j, "place", {
            sts: "pf"
        })
    }

    function Es(a) {
        return (a = E(a.l, zl, 3)) ? F(a, Al, 1).some(b => 1 === C(b, 1, 0)) : !1
    }
    var Cs = class {
        constructor(a, b, c, d, e, f) {
            this.B = a;
            this.j = new $m(a, b, d);
            this.G = c;
            this.l = d;
            this.C = e;
            this.F = f;
            this.A = this.D = null
        }
    };
    const Fs = ["-webkit-text-fill-color"];

    function Gs(a) {
        if (Db) {
            {
                const c = cg(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = Hs(a)
                } else a = Is()
            }
        } else a = Is();
        return a
    }
    var Is = () => {
        const a = {
            all: "initial"
        };
        jb(Fs, b => {
            a[b] = "unset"
        });
        return a
    };

    function Hs(a) {
        jb(Fs, b => {
            delete a[b]
        });
        return a
    };
    class Js {
        constructor(a) {
            this.j = a
        }
        ra(a) {
            const b = a.document.createElement("div");
            M(b, Gs(a));
            M(b, {
                width: "100%",
                margin: "auto"
            });
            b.appendChild(this.j);
            const c = a.document.createElement("div");
            M(c, Gs(a));
            c.className = "auto-prose-searchbox-wrapper";
            c.appendChild(b);
            return c
        }
    };
    var Ks = {},
        Ls = {},
        Ms = {},
        Ns = {},
        Os = {};

    function Ps() {
        throw Error("Do not instantiate directly");
    }
    Ps.prototype.hd = null;
    Ps.prototype.ra = function() {
        return this.content
    };
    Ps.prototype.toString = function() {
        return this.content
    };

    function Qs(a) {
        if (a.jd !== Ks) throw Error("Sanitized content was not of kind HTML.");
        return ie(a.toString())
    }

    function Rs() {
        Ps.call(this)
    }
    Ga(Rs, Ps);
    Rs.prototype.jd = Ks;

    function Ss(a, b) {
        return null != a && a.jd === b
    };

    function Ts(a) {
        if (null != a) switch (a.hd) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function Us(a) {
        return Ss(a, Ks) ? a : a instanceof ge ? Vs(fe(a).toString()) : a instanceof ge ? Vs(fe(a).toString()) : Vs(String(String(a)).replace(Ws, Xs), Ts(a))
    }
    var Vs = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.hd = d);
            return c
        }
    }(Rs);

    function Ys(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function Zs(a) {
        return Ss(a, Ks) ? String(String(a.ra()).replace($s, "").replace(at, "&lt;")).replace(bt, Xs) : String(a).replace(Ws, Xs)
    }

    function ct(a) {
        a = String(a);
        const b = (d, e, f) => {
            const g = Math.min(e.length - f, d.length);
            for (let l = 0; l < g; l++) {
                var h = e[f + l];
                if (d[l] !== ("A" <= h && "Z" >= h ? h.toLowerCase() : h)) return !1
            }
            return !0
        };
        for (var c = 0; - 1 != (c = a.indexOf("<", c));) {
            if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
            c += 1
        }
        return a
    }

    function dt(a) {
        if (null == a) return " null ";
        if (Ss(a, Ls)) return a.ra();
        if (a instanceof yd || a instanceof yd) return xd(a).toString();
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(et, ft) + "'"
        }
    }

    function V(a) {
        Ss(a, Os) ? a = Ys(a.ra()) : null == a ? a = "" : a instanceof Sd ? a = Ys(Rd(a)) : a instanceof Sd ? a = Ys(Rd(a)) : a instanceof de ? a = Ys(ce(a)) : a instanceof de ? a = Ys(ce(a)) : (a = String(a), a = gt.test(a) ? a : "zSoyz");
        return a
    }
    const ht = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function Xs(a) {
        return ht[a]
    }
    const it = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "&": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };

    function ft(a) {
        return it[a]
    }
    const jt = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function kt(a) {
        return jt[a]
    }
    const Ws = /[\x00\x22\x26\x27\x3c\x3e]/g,
        bt = /[\x00\x22\x27\x3c\x3e]/g,
        et = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
        lt = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        gt = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|rgba|hsl|hsla|calc|max|min|cubic-bezier)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        mt =
        /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;

    function nt(a) {
        return String(a).replace(lt, kt)
    }
    const $s = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        at = /</g;
    /* 
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var ot = class {
        constructor(a) {
            this.j = a
        }
        init() {
            var a = Vs('<style>.autoprose-input {width: 100%; padding: 0; border: none; margin: 0; height: auto; outline: none;}.autoprose-input-td {background: #fff; border-color: #bdc1c6; border-width: 1px 0 1px 1px; border-style: solid; border-radius: 24px 0 0 24px; -moz-border-radius: 24px 0 0 24px; -webkit-border-radius: 24px 0 0 24px; padding-left: 24px; width: 100%;}.autoprose-searchbox {width: 100%; padding: 0; border: none; margin: 0; height: auto; background: rgb(255, 255, 255); outline: none;}.autoprose-searchbox-clear-button {padding-right: 5px; visibility: hidden;}.autoprose-searchbox-clear-td {background: #fff; border-color: #bdc1c6; border-width: 1px 0 1px 0; border-style: solid;}.autoprose-search-button {border-color: #bdc1c6; background-color: #fff; background-image: none; font-size: 0; padding: 6px 27px; width: auto; vertical-align: middle; border: 1px solid #bdc1c6; border-radius: 0 24px 24px 0; -moz-border-radius: 0 24px 24px 0; -webkit-border-radius: 0 24px 24px 0; height: 100%;}.autoprose-searchbox-div {padding: 5px;}.autoprose-searchbox-table {height: 38px; margin-left: auto; margin-right: auto;}</style><div class="autoprose-searchbox-div"><table class="autoprose-searchbox-table" cellspacing="0" cellpadding="0"><tr><td class="autoprose-input-td"><input autocomplete="off" class="autoprose-input" dir="ltr" name="search" placeholder="Search" size="40" spellcheck="false" title="search" type="text"></td><td class="autoprose-searchbox-clear-td"><div class="autoprose-searchbox-clear-button" title="clear results"><svg width="14" height="14" viewBox="0 0 14 14" fill="none visibility: hidden;" mlns="http://www.w3.org/2000/svg" stlye="float: right;"><path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#80868b"/></svg></div></td><td><button class="autoprose-search-button"><svg width="13" height="13" viewBox="0 0 13 13"><title>search</title><path d="m4.8495 7.8226c0.82666 0 1.5262-0.29146 2.0985-0.87438 0.57232-0.58292 0.86378-1.2877 0.87438-2.1144 0.010599-0.82666-0.28086-1.5262-0.87438-2.0985-0.59352-0.57232-1.293-0.86378-2.0985-0.87438-0.8055-0.010599-1.5103 0.28086-2.1144 0.87438-0.60414 0.59352-0.8956 1.293-0.87438 2.0985 0.021197 0.8055 0.31266 1.5103 0.87438 2.1144 0.56172 0.60414 1.2665 0.8956 2.1144 0.87438zm4.4695 0.2115 3.681 3.6819-1.259 1.284-3.6817-3.7 0.0019784-0.69479-0.090043-0.098846c-0.87973 0.76087-1.92 1.1413-3.1207 1.1413-1.3553 0-2.5025-0.46363-3.4417-1.3909s-1.4088-2.0686-1.4088-3.4239c0-1.3553 0.4696-2.4966 1.4088-3.4239 0.9392-0.92727 2.0864-1.3969 3.4417-1.4088 1.3553-0.011889 2.4906 0.45771 3.406 1.4088 0.9154 0.95107 1.379 2.0924 1.3909 3.4239 0 1.2126-0.38043 2.2588-1.1413 3.1385l0.098834 0.090049z" fill="#1a73e8"></path></svg></button></td></tr></table></div>');
            a = Qs(a);
            this.j.appendChild(Lf(document, a))
        }
    };

    function pt(a) {
        const b = hq(a.A.V),
            c = a.C.ra(a.D, () => a.remove());
        b.appendChild(c);
        a.B && (b.className = a.B);
        return {
            Ke: b,
            Ge: c
        }
    }
    class qt {
        constructor(a, b, c, d) {
            this.D = a;
            this.A = b;
            this.C = c;
            this.B = d || null;
            this.j = null;
            this.l = new Yj(null)
        }
        init() {
            const a = pt(this);
            this.j = a.Ke;
            pq(this.A, this.j);
            Q(this.l, a.Ge)
        }
        remove() {
            this.j && this.j.parentNode && this.j.parentNode.removeChild(this.j);
            this.j = null;
            Q(this.l, null)
        }
        F() {
            return this.l
        }
    };

    function rt(a) {
        var b;
        let c;
        const d = st(a.l, F(a.j, dm, 1), null == (b = E(a.j, El, 31)) ? void 0 : null == (c = E(b, Fl, 2)) ? void 0 : C(c, 1, 0));
        if (d) {
            var e;
            null == (e = E(a.j, El, 31)) || E(e, Cl, 5);
            b = a.l.document.createElement("div");
            (new qt(a.l, d, new Js(b))).init();
            var f;
            (new ot(b, null == (f = E(a.j, El, 31)) ? void 0 : E(f, Dl, 4))).init()
        }
    }
    var tt = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    };

    function st(a, b, c) {
        b = b.filter(d => {
            a: {
                var e = y(E(d, ql, 4), 1);
                switch (c) {
                    case 1:
                        e = 4 === e || 2 === e;
                        break a;
                    case 2:
                        e = 5 === e || 3 === e;
                        break a;
                    default:
                        e = !1
                }
            }
            d = 1 === y(d, 8);
            return e && d
        });
        b = Zp(b, a);
        a = Eq(b, a);
        a.sort(ut);
        b = [1, 3].includes(c) ? 0 : a.length - 1;
        return a[b] || null
    }

    function ut(a, b) {
        return a.X.j - b.X.j
    };
    var vt = class {
        constructor(a) {
            this.j = a
        }
        ra(a) {
            const b = a.document.createElement("div");
            M(b, Gs(a));
            M(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.j);
            const c = a.document.createElement("div");
            M(c, Gs(a));
            M(c, {
                width: "100%",
                "text-align": "center",
                display: "block",
                padding: "5px 5px 2px",
                "box-sizing": "border-box",
                "background-color": "#FFF"
            });
            c.appendChild(b);
            return c
        }
    };
    var wt = (a, b) => (b = E(b, Xl, 6)) ? is(F(b, Yl, 1), a).map(c => Bq(c)) : [];

    function xt(a, b, c) {
        a.Ca.contentWindow.google.search.cse.element.getElement("auto-rs-prose").execute(b, void 0, {
            rsToken: c,
            afsExperimentId: a.A
        })
    }
    var yt = class {
        constructor(a, b, c, d, e, f) {
            this.Ca = a;
            this.l = "9d449ff4a772956c6";
            this.j = b;
            this.host = c;
            this.language = d;
            this.B = e;
            this.A = f
        }
        init() {
            this.Ca.setAttribute("id", "prose-iframe");
            this.Ca.setAttribute("width", "100%");
            this.Ca.setAttribute("height", "100%");
            var a = this.Ca,
                b = Td({
                    "box-sizing": "border-box",
                    border: "unset"
                });
            a.style.cssText = Rd(b);
            a = "https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(this.host);
            var c = Od(a) || Pd;
            a = this.j;
            b = this.host;
            var d = this.language,
                e = this.B.replace("${website}",
                    this.host.startsWith("www.") ? this.host.slice(4) : this.host),
                f = Vs;
            Ss(c, Ms) || Ss(c, Ns) ? c = nt(c) : c instanceof Kd ? c = nt(Ld(c)) : c instanceof Kd ? c = nt(Ld(c)) : c instanceof Ad ? c = nt(Dd(c).toString()) : c instanceof Ad ? c = nt(Dd(c).toString()) : (c = String(c), c = mt.test(c) ? c.replace(lt, kt) : "about:invalid#zSoyz");
            a = f('<style>.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; height: 16px; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}</style><img class="cse-favicon" src="' +
                Zs(c) + '" alt="' + Zs(b) + ' icon"><p class="cse-header"><strong>' + Us(e) + '</strong></p><div class="gcse-search" data-gname="' + Zs("auto-rs-prose") + '" data-adclient="' + Zs(a) + '" data-adchannel="AutoRsVariant" data-as_sitesearch="' + Zs(b) + '" data-gl="' + Zs(d) + '" data-personalizedAds="false"></div>');
            a = Qs(a);
            b = {
                style: Td({
                    margin: 0
                })
            };
            d = {
                src: Gd(jd("https://cse.google.com/cse.js?cx=%{cxId}&language=%{lang}"), {
                    cxId: this.l,
                    lang: this.language
                })
            };
            e = {};
            f = {};
            for (g in d) Object.prototype.hasOwnProperty.call(d, g) && (f[g] =
                d[g]);
            for (const h in e) Object.prototype.hasOwnProperty.call(e, h) && (f[h] = e[h]);
            var g = me("script", f);
            g = je("body", b, [a, g]);
            this.Ca.srcdoc = fe(g)
        }
    };

    function zt(a, b) {
        return new At(a, b)
    }

    function Bt(a) {
        const b = Ct(a);
        jb(a.j.maxZIndexListeners, c => c(b))
    }

    function Ct(a) {
        a = fg(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    class Dt {
        constructor(a) {
            this.j = pj(a).floatingAdsStacking
        }
        addListener(a) {
            this.j.maxZIndexListeners.push(a);
            a(Ct(this))
        }
    }

    function Et(a) {
        if (null == a.j) {
            var b = a.l,
                c = a.A;
            const d = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[d] = c;
            Bt(b);
            a.j = d
        }
    }

    function Ft(a) {
        if (null != a.j) {
            var b = a.l;
            delete b.j.maxZIndexRestrictions[a.j];
            Bt(b);
            a.j = null
        }
    }
    class At {
        constructor(a, b) {
            this.l = a;
            this.A = b;
            this.j = null
        }
    };

    function Gt(a) {
        L(a.l, "click", () => Ht(a));
        L(a.G, "click", () => void Ht(a));
        const b = a.width / a.win.innerWidth;
        L(a.win, "resize", () => {
            a.width = Math.floor(b * a.win.innerWidth);
            a.j.style.width = `${a.width}px`;
            a.j.style.height = `${a.win.innerHeight}px`;
            a.l.style.width = `${a.win.innerWidth}px`;
            a.l.style.height = `${a.win.innerHeight}px`;
            a.C && (a.B.style.transform = `translateX(${a.width}px)`)
        })
    }

    function Ht(a) {
        a.C = !0;
        a.j.scrollTop = 0;
        a.B.style.transitionDuration = ".5s";
        a.B.style.transform = `translateX(${a.width}px)`;
        a.l.style.opacity = "0";
        a.A.style.transitionDelay = ".5s";
        xb(a.A.offsetWidth);
        a.A.style.visibility = "hidden";
        setTimeout(() => {
            a.win.document.documentElement.style.overflow = ""
        }, 500);
        for (const b of a.F) try {
            b()
        } catch (c) {
            console.error(c)
        }
    }
    var It = class {
        constructor(a, b) {
            this.win = a;
            this.width = b;
            this.F = [];
            this.C = !0;
            b = new Cf(a.document);
            this.l = b.ha("DIV", {
                "class": "adpub-drawer-modal-background"
            });
            var c = a.document.createElementNS("http://www.w3.org/2000/svg", "svg");
            c.setAttribute("viewBox", "0 0 24 24");
            var d = a.document.createElementNS("http://www.w3.org/2000/svg", "path");
            d.setAttribute("fill", "#5f6368");
            d.setAttribute("d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z");
            c.appendChild(d);
            this.G = b.ha("DIV", {
                "class": "adpub-drawer-close-button"
            }, c);
            this.j = b.ha("DIV", {
                "class": "adpub-drawer-contents"
            });
            this.B = b.ha("DIV", {
                "class": "adpub-drawer"
            }, this.G, this.j);
            this.A = b.ha("DIV", {
                "class": "adpub-drawer-container"
            }, this.l, this.B);
            this.D = b.ha("DIV", {
                "class": "adpub-drawer-root"
            });
            c = this.D.attachShadow({
                mode: "open"
            });
            d = c.appendChild;
            var e = this.win.innerHeight - 5;
            var f = this.width,
                g = a.innerWidth;
            e = Vs("<style>.adpub-drawer-container {height: 100%; position: fixed; top: 0; transition: visibility 0s linear .5s; visibility: hidden; width: 100%; z-index: " +
                V(100002) + ";}.adpub-drawer-modal-background {background-color: black; height: " + V(e + 5) + "px; opacity: 0; position: absolute; transition: opacity .5s ease-in-out; width: " + V(g) + "px;}.adpub-drawer {position: absolute; transform: translateX(" + V(f) + "px); transition: transform .5s ease-in-out; height: 100%; overflow: auto; right: 0; border-radius: 20px 0 0 20px;}.adpub-drawer-close-button {color: #5f6368; height: 24px; width: 24px; top: 20px; right: 20px; position: fixed; cursor: pointer;}.adpub-drawer-contents {background: white; height: " +
                V(e) + "px; overflow-y: auto; padding-top: " + V(5) + "px; width: " + V(f) + "px;}</style>");
            d.call(c, Tf(b, Qs(e)));
            c.appendChild(this.A);
            M(this.D, Gs(a))
        }
        init() {
            this.win.document.body.appendChild(this.D);
            Gt(this)
        }
        W(a) {
            for (; this.j.firstChild;) this.j.removeChild(this.j.firstChild);
            this.j.appendChild(a)
        }
        show() {
            this.C = !1;
            this.win.document.documentElement.style.overflow = "hidden";
            this.A.style.transitionDelay = "0s";
            this.A.style.visibility = "visible";
            this.l.style.opacity = ".5";
            this.B.style.transform = "translateX(0)"
        }
        ga(a) {
            this.F.push(a)
        }
    };

    function Jt(a) {
        L(a.J, "click", () => Kt(a));
        L(a.B, "mousedown", () => {
            const d = f => {
                    Lt(a, f.movementY)
                },
                e = () => {
                    Mt(a);
                    Qe(a.B, "mousemove", d);
                    Qe(a.B, "mouseup", e);
                    Qe(a.B, "mouseleave", e)
                };
            L(a.B, "mousemove", d);
            L(a.B, "mouseup", e);
            L(a.B, "mouseleave", e)
        });
        L(a.j, "touchstart", d => {
            let e = d.touches[0];
            const f = h => {
                    const l = h.touches[0];
                    0 === Nt(a) ? a.l.classList.add("scrollable") : a.l.classList.remove("scrollable");
                    if (e) {
                        var k = 0 === Nt(a) && a.l.scrollTop;
                        const m = l.target === a.B || l.target.parentElement === a.B;
                        if (!k || m) k = l.screenY - e.screenY,
                            Lt(a, k), k = 0 < k && 0 === a.l.scrollTop, k = a.I && !k, h.cancelable && !k && h.preventDefault()
                    }
                    e = l
                },
                g = () => {
                    Mt(a);
                    Qe(a.j, "touchmove", f);
                    Qe(a.j, "touchend", g);
                    Qe(a.j, "touchcancel", g)
                };
            L(a.j, "touchmove", f, {
                passive: !1
            });
            L(a.j, "touchend", g);
            L(a.j, "touchcancel", g)
        });
        L(a.C, "touchstart", () => {});
        const b = a.A / a.win.innerHeight,
            c = a.F / a.A;
        L(a.win, "resize", () => {
            a.A = Math.floor(b * a.win.innerHeight);
            a.F = Math.floor(c * a.A);
            a.D = a.win.innerHeight - (a.A + 30 - 20);
            const d = a.I ? 0 : a.A - a.F;
            a.l.style.height = `${a.A}px`;
            a.j.style.transform = a.L ? `translateY(${a.A+ 
a.D}px)` : `translateY(${d+a.D}px)`
        })
    }

    function Ot(a, b) {
        var c = ["https://cse.google.com"];
        const d = ["touchstart", "touchmove", "touchend", "touchcancel"],
            e = (k, m, n) => {
                try {
                    const p = n.map(r => new Touch(r));
                    k.dispatchEvent(new TouchEvent(m, {
                        bubbles: !0,
                        cancelable: !0,
                        touches: p
                    }))
                } catch (p) {
                    m = new UIEvent(m, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: 1,
                        view: a.win
                    });
                    for (const r of n) k.dispatchEvent(Object.assign(m, {
                        touches: [r]
                    }))
                }
            },
            f = k => {
                k = k.contentDocument;
                for (const m of d) L(k, m, n => {
                    n = [...n.touches].map(p => ({
                        clientX: p.clientX,
                        clientY: p.clientY,
                        force: p.force,
                        identifier: p.identifier,
                        pageX: p.pageX,
                        pageY: p.pageY,
                        radiusX: p.radiusX,
                        radiusY: p.radiusY,
                        rotationAngle: p.rotationAngle,
                        screenX: p.screenX,
                        screenY: p.screenY,
                        target: a.l
                    }));
                    e(a.j, m, n)
                })
            },
            g = k => {
                if (void 0 === c || c.includes(k.origin)) {
                    var m;
                    if (d.includes(null == (m = k.data) ? void 0 : m.type)) {
                        var n;
                        Array.isArray(null == (n = k.data) ? void 0 : n.touches) && (m = k.data.type, k = k.data.touches.map(p => Object.assign({}, p, {
                            target: a.l
                        })), e(a.j, m, k))
                    }
                }
            },
            h = k => {
                k.contentWindow ? L(k.contentWindow, "message", g) : console.error("Loaded iframe missing content window.")
            };
        let l;
        "complete" === (null == (l = b.contentDocument) ? void 0 : l.readyState) && (h(b), f(b));
        L(b, "load", () => {
            h(b);
            f(b)
        })
    }

    function Pt(a, b, c) {
        let d;
        a.U.set(b, null != (d = a.win.document.documentElement.style.getPropertyValue(b)) ? d : "");
        a.win.document.documentElement.style.setProperty(b, c)
    }

    function Qt(a, b) {
        let c;
        const d = null != (c = a.U.get(b)) ? c : "";
        a.win.document.documentElement.style.setProperty(b, d)
    }

    function Kt(a) {
        a.L = !0;
        a.I = !1;
        Qt(a, "position");
        Qt(a, "width");
        Qt(a, "transform");
        Qt(a, "overflow");
        Qt(a, "touch-action");
        null != a.G && (a.win.document.documentElement.scrollTop = a.G, a.win.document.body.scrollTop = a.G);
        Qt(a, "scroll-behavior");
        a.C.style.transform = "";
        a.l.scrollTop = 0;
        a.l.classList.remove("scrollable");
        a.j.style.transitionDuration = ".5s";
        a.j.style.transform = `translateY(${a.A+a.D}px)`;
        a.J.style.opacity = "0";
        a.C.style.transitionDelay = ".5s";
        xb(a.C.offsetHeight);
        a.C.style.visibility = "hidden";
        for (const b of a.O) try {
            b()
        } catch (c) {
            console.error(c)
        }
    }

    function Lt(a, b) {
        a.j.style.transitionDuration = "0s";
        b = Math.max(Nt(a) + b, 0) + a.D;
        a.j.style.transform = `translateY(${b}px)`;
        xb(a.j.offsetHeight);
        a.j.style.transitionDuration = ".5s"
    }

    function Mt(a) {
        const b = Nt(a);
        if (a.I) 50 < b ? Kt(a) : 0 !== b && Rt(a, 0);
        else {
            const c = a.A - a.F;
            b < c - 50 ? Rt(a, 0) : b > c + 50 ? Kt(a) : b !== c && Rt(a, a.A - a.F)
        }
    }

    function Nt(a) {
        let b;
        const c = null != (b = a.j.style.transform) ? b : null;
        return Number(((new DOMMatrix(c)).f - a.D).toFixed(1))
    }

    function Rt(a, b) {
        a.L = !1;
        0 === b && (a.I = !0, a.l.classList.add("scrollable"));
        a.C.style.transitionDelay = "0s";
        a.C.style.visibility = "visible";
        a.J.style.opacity = ".5";
        a.j.style.transform = `translateY(${b+a.D}px)`
    }
    var St = class {
        constructor(a, b, c) {
            this.win = a;
            this.F = b;
            this.A = c;
            this.O = [];
            this.U = new Map;
            this.I = !1;
            this.L = !0;
            this.G = null;
            b = new Cf(a.document);
            this.J = b.ha("DIV", {
                "class": "cse-modal-background",
                tabindex: 1
            });
            var d = b.ha("DIV", {
                "class": "cse-drawer-handle-icon"
            });
            this.B = b.ha("DIV", {
                "class": "cse-drawer-handle"
            }, d);
            this.l = b.ha("DIV", {
                "class": "cse-drawer-contents"
            });
            this.j = b.ha("DIV", {
                "class": "cse-drawer"
            }, this.B, this.l);
            this.C = b.ha("DIV", {
                "class": "cse-drawer-container"
            }, this.J, this.j);
            this.N = b.ha("DIV", {
                "class": "adpub-drawer-root"
            });
            this.D = a.innerHeight - (c + 30 - 20);
            c = this.N.attachShadow({
                mode: "open"
            });
            d = c.appendChild;
            var e = this.A;
            var f = this.D;
            e = Vs("<style>.cse-drawer-container {height: 100%; left: 0; position: fixed; top: 0; transition: visibility 0s linear .5s; visibility: hidden; width: 100%; z-index: " + V(100002) + ";}.cse-modal-background {background-color: black; height: 100vh; opacity: 0; overflow: hidden; position: absolute; transition: opacity .5s ease-in-out; width: 100%;}.cse-drawer {background: white; position: absolute; transform: translateY(" +
                V(e + f) + "px); transition: transform .5s ease-in-out; width: 100%;}.cse-drawer-handle {align-items: flex-end; border-radius: " + V(20) + "px " + V(20) + "px 0 0; background: white; display: flex; height: " + V(30) + "px; justify-content: center; margin-top: " + V(-20) + "px;}.cse-drawer-handle-icon {background: #dadce0; border-radius: 2px; height: 4px; margin-bottom: 8px; width: 50px;}.cse-drawer-contents {background: white; height: " + V(e) + "px; scrollbar-width: none; overflow: hidden;}.cse-drawer-scroller::-webkit-scrollbar {display: none;}.scrollable {overflow: auto;}</style>");
            d.call(c, Tf(b, Qs(e)));
            c.appendChild(this.C);
            M(this.N, Gs(a))
        }
        init() {
            this.win.document.body.appendChild(this.N);
            Jt(this)
        }
        W(a) {
            for (; this.l.firstChild;) this.l.removeChild(this.l.firstChild);
            this.l.appendChild(a)
        }
        show() {
            this.G = this.win.document.documentElement.scrollTop + this.win.document.body.scrollTop;
            Pt(this, "transform", `translateY(${-this.G}px)`);
            Pt(this, "position", "fixed");
            Pt(this, "width", "100%");
            Pt(this, "overflow", "hidden");
            Pt(this, "touch-action", "none");
            Pt(this, "scroll-behavior", "auto");
            this.C.style.transform =
                `translateY(${this.G}px)`;
            Rt(this, this.A - this.F)
        }
        ga(a) {
            this.O.push(a)
        }
    };

    function Tt(a) {
        a.B.init();
        a.B.W(a.D);
        a.B instanceof St && Ot(a.B, a.D);
        a.B.ga(() => void Ft(a.J));
        a.G.init()
    }

    function Ut(a) {
        let b;
        a.l.id = "cse-overlay-div";
        M(a.l, {
            "background-color": "white",
            border: "none",
            "border-radius": "16px 16px 16px 16px",
            "box-shadow": "0 3px 10px rgb(34 25 25 / 40%)",
            display: "none",
            "flex-direction": "column",
            height: "90%",
            left: "2.5%",
            margin: "auto",
            overflow: "auto",
            position: "fixed",
            padding: "1%",
            top: "5%",
            transition: "all 0.25s linear",
            width: "95%",
            "z-index": 100002
        });
        b = a.A.createElement("DIV");
        b.id = "cse-overlay-close-button";
        M(b, {
            "background-image": "url(//www.google.com/images/nav_logo114.png)",
            "background-position": "-140px -230px",
            "background-repeat": "no-repeat",
            cursor: "pointer",
            display: "block",
            "float": "right",
            height: "12px",
            opacity: 1,
            position: "absolute",
            right: "15px",
            top: "15px",
            width: "12px"
        });
        a.C.classList.add("gsc-modal-background-image");
        a.C.setAttribute("tabindex", 0);
        a.j.document.body.appendChild(a.l);
        a.j.document.body.appendChild(a.C);
        const c = () => {
            "flex" === a.l.style.display && (a.l.style.display = "none");
            a.C.classList.remove("gsc-modal-background-image-visible");
            Ft(a.J)
        };
        b.onclick = c;
        a.C.onclick =
            c;
        a.l.appendChild(b);
        a.l.appendChild(a.D);
        a.G.init()
    }

    function Vt(a) {
        (function(c, d) {
            c[d] = c[d] || function() {
                (c[d].q = c[d].q || []).push(arguments)
            };
            c[d].t = 1 * new Date
        })(a.j, "_googCsa");
        const b = a.O.map(c => ({
            container: c,
            relatedSearches: 5
        }));
        a.j._googCsa("relatedsearch", {
            pubId: a.N,
            styleId: "5134551505",
            hl: a.I,
            fexp: a.L,
            channel: "AutoRsVariant",
            resultsPageBaseUrl: "http://google.com",
            resultsPageQueryParam: "q",
            relatedSearchTargeting: "content",
            relatedSearchResultClickedCallback: a.W.bind(a),
            relatedSearchUseResultCallback: !0
        }, b)
    }
    var Wt = class {
        constructor(a, b, c, d, e, f) {
            this.j = a;
            this.O = b;
            this.I = (null == d ? void 0 : J(d, 1)) || "en";
            this.U = (null == d ? void 0 : J(d, 2)) || "Search results from ${website}";
            this.F = e;
            this.L = f;
            this.N = c.replace("ca", "partner");
            this.J = zt(new Dt(a), 1E5);
            this.A = new Cf(a.document);
            this.F ? 2 === vg() ? (b = Math.round(.95 * this.j.innerHeight) - 30, b = new St(this.j, b, b)) : b = new It(this.j, Math.round(.8 * this.j.innerWidth)) : b = null;
            this.B = b;
            this.l = this.A.createElement("DIV");
            this.C = this.A.createElement("DIV");
            this.D = this.A.createElement("IFRAME");
            this.G = new yt(this.D, this.N, a.location.host, this.I, this.U, this.L)
        }
        init() {
            if (0 !== this.O.length && (this.F || !this.j.document.querySelector('script[src*="cse.google.com/cse"]'))) {
                if (this.F) Tt(this);
                else {
                    Ut(this);
                    var a = this.A.createElement("SCRIPT"),
                        b = N `https://cse.google.com/cse.js?cx=9d449ff4a772956c6`;
                    b = Wg(b, new Map([
                        ["language", this.I]
                    ]));
                    De(a, b);
                    this.j.document.head.appendChild(a)
                }
                a = this.A.createElement("SCRIPT");
                De(a, N `https://www.google.com/adsense/search/async-ads.js`);
                this.j.document.head.appendChild(a);
                Vt(this)
            }
        }
        W(a, b) {
            Et(this.J);
            if (this.F) {
                xt(this.G, a, b);
                const c = new ResizeObserver(e => {
                        this.D.height = e[0].target.scrollHeight
                    }),
                    d = () => {
                        let e;
                        const f = null == (e = this.D.contentDocument) ? void 0 : e.documentElement;
                        f ? c.observe(f) : (console.warn("iframe body missing"), setTimeout(d, 1E3))
                    };
                d();
                this.B.show()
            } else this.C.classList.add("gsc-modal-background-image-visible"), this.l.style.display = "flex", xt(this.G, a, b)
        }
    };

    function Xt(a) {
        var b = wt(a.l, a.j);
        b = Eq(b, a.l).sort(Yt);
        var c = 0 == b.length ? [] : [b[Math.floor(b.length / 2)]];
        var d = a.l;
        b = [];
        for (let k = 0; k < c.length; k++) {
            const m = c[k],
                n = "autors-container-" + k,
                p = d.document.createElement("div");
            p.setAttribute("id", n);
            (new qt(d, m, new vt(p))).init();
            b.push(n)
        }
        var e;
        let f, g;
        c = (null == (e = E(a.j, Gl, 28)) ? void 0 : null == (f = E(e, Cl, 6)) ? void 0 : C(f, 1, 0)) || (null == (g = E(a.j, Gl, 28)) ? void 0 : C(g, 3, 0)) || 0;
        let h;
        e = (null == (h = E(a.j, Gl, 28)) ? void 0 : Kc(h, 4)) || !1;
        let l;
        (new Wt(a.l, b, a.A, null == (l = E(a.j,
            Gl, 28)) ? void 0 : E(l, Dl, 5), e, c)).init()
    }
    var Zt = class {
        constructor(a, b, c) {
            this.l = a;
            this.j = b;
            this.A = c
        }
    };

    function Yt(a, b) {
        return a.X.j - b.X.j
    };
    var $t = (a, b) => {
        const c = [];
        E(a, fm, 18) && c.push(2);
        b.da && c.push(0);
        E(a, Gl, 28) && 1 == C(E(a, Gl, 28), 1, 0) && c.push(1);
        E(a, El, 31) && 1 == C(E(a, El, 31), 1, 0) && c.push(5);
        E(a, wl, 27) && 1 == C(E(a, wl, 27), 1, 0) && c.push(3);
        E(a, hm, 29) && c.push(4);
        E(a, sm, 30) && c.push(6);
        return c
    };

    function au(a, b) {
        const c = Bf(a).createElement("IMG");
        bu(a, c);
        c.src = "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg";
        M(c, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: null == b ? "auto" : "pointer"
        });
        b && c.addEventListener("click", d => {
            b();
            d.stopPropagation()
        });
        return c
    }

    function cu(a, b) {
        const c = b.document.createElement("button");
        bu(b, c);
        M(c, {
            display: "inline",
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.l));
        c.addEventListener("click", d => {
            a.A();
            d.stopPropagation()
        });
        return c
    }

    function du(a, b, c) {
        const d = Bf(b).createElement("IMG");
        d.src = "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg";
        d.setAttribute("aria-label", a.B);
        bu(b, d);
        M(d, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        d.addEventListener("click", e => {
            c();
            e.stopPropagation()
        });
        return d
    }

    function eu(a) {
        const b = a.document.createElement("ins");
        bu(a, b);
        M(b, {
            "float": "left",
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)"
        });
        return b
    }
    class fu {
        constructor(a, b, c) {
            this.l = a;
            this.B = b;
            this.A = c;
            this.j = new Yj(!1)
        }
        ra(a, b, c, d) {
            const e = au(a, d),
                f = au(a),
                g = cu(this, a),
                h = du(this, a, c);
            a = eu(a);
            a.appendChild(e);
            a.appendChild(f);
            a.appendChild(g);
            a.appendChild(h);
            this.j.ba(l => {
                M(e, {
                    display: l ? "none" : "inline"
                });
                M(f, {
                    display: l ? "inline" : "none"
                });
                l ? (M(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), M(h, {
                        margin: "0px 12px 0px 8px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms"
                    })) :
                    (M(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), M(h, {
                        margin: "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 100ms, opacity 50ms, width 100ms"
                    }))
            }, !0);
            return a
        }
        ud() {
            return 40
        }
        Fd() {
            Q(this.j, !1);
            return 0
        }
        Gd() {
            Q(this.j, !0)
        }
    }

    function bu(a, b) {
        M(b, Gs(a));
        M(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    };

    function gu(a, b) {
        const c = b.document.createElement("button");
        hu(a, b, c);
        b = {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": a.l
        };
        a.j && (b["border-top"] = a.j, b["border-bottom"] = a.j);
        M(c, b);
        c.addEventListener("click", d => {
            a.D();
            d.stopPropagation()
        });
        return c
    }

    function iu(a, b, c, d) {
        const e = b.document.createElement("div");
        M(e, Gs(b));
        M(e, {
            "align-items": "center",
            "background-color": a.l,
            display: "flex",
            "justify-content": "center"
        });
        const f = b.document.createElement("span");
        f.appendChild(b.document.createTextNode(d));
        M(f, Gs(b));
        M(f, {
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            padding: "8px 0px"
        });
        b = b.matchMedia("(min-width: 768px)");
        d = g => {
            g.matches ? (M(e, {
                    "flex-direction": "row"
                }), a.j && M(e, {
                    "border-top": a.j,
                    "border-bottom": a.j
                }), M(f, {
                    "margin-left": "8px",
                    "text-align": "start"
                }),
                M(c, {
                    border: "0",
                    "margin-right": "8px",
                    width: "auto"
                })) : (M(e, {
                border: "0",
                "flex-direction": "column"
            }), M(f, {
                "margin-left": "0",
                "text-align": "center"
            }), M(c, {
                "margin-right": "0",
                width: "100%"
            }), a.j && M(c, {
                "border-top": a.j,
                "border-bottom": a.j
            }))
        };
        d(b);
        b.addEventListener("change", d);
        e.appendChild(c);
        e.appendChild(f);
        return e
    }

    function hu(a, b, c) {
        M(c, Gs(b));
        M(c, {
            "font-family": "Arial,sans-serif",
            "font-weight": a.F,
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: a.G,
            "user-select": "none",
            cursor: "pointer"
        })
    }
    class ju {
        constructor(a, b, c, d, e, f = null, g = null, h = null) {
            this.C = a;
            this.D = b;
            this.G = c;
            this.l = d;
            this.F = e;
            this.B = f;
            this.j = g;
            this.A = h
        }
        ra(a) {
            const b = a.document.createElement("div");
            hu(this, a, b);
            M(b, {
                display: "inline-flex",
                padding: "8px 0px",
                "background-color": this.l
            });
            if (this.B) {
                var c = Bf(a).createElement("IMG");
                c.src = this.B;
                hu(this, a, c);
                M(c, {
                    margin: "0px 8px 0px 0px",
                    width: "24px",
                    height: "24px"
                })
            } else c = null;
            c && b.appendChild(c);
            c = a.document.createElement("span");
            hu(this, a, c);
            M(c, {
                "line-height": "24px"
            });
            c.appendChild(a.document.createTextNode(this.C));
            b.appendChild(c);
            c = gu(this, a);
            c.appendChild(b);
            return this.A ? iu(this, a, c, this.A) : c
        }
    };
    var ku = (a, b) => {
        b = b.filter(c => 5 == y(E(c, ql, 4), 1) && 1 == y(c, 8));
        b = Zp(b, a);
        a = Eq(b, a);
        a.sort((c, d) => d.X.j - c.X.j);
        return a[0] || null
    };
    var pu = a => {
            let b = 0;
            try {
                var c = a.K;
                b |= c != c.top ? 512 : 0;
                var d = a.K;
                var e = Math.min(d.screen.width || 0, d.screen.height || 0);
                b |= e ? 320 > e ? 8192 : 0 : 2048;
                var f = a.K;
                b |= f.navigator && lu(f.navigator.userAgent) ? 1048576 : 0;
                if (a.Jc) var g = b | (a.K.innerHeight >= a.Jc ? 0 : 1024);
                else {
                    var h = a.K;
                    g = b | (h.innerHeight >= h.innerWidth ? 0 : 8)
                }
                b = g;
                b |= tj(a.K, a.Cd);
                b |= uj(a.K)
            } catch (l) {
                b |= 32
            }
            switch (a.Be) {
                case 2:
                    mu(a.K, a.xa) && (b |= 16777216);
                    break;
                case 1:
                    nu(a.K, a.xa) && (b |= 16777216)
            }
            a.Ce && ou(a.K, a.xa) && (b |= 16777216);
            return b
        },
        lu = a => /Android 2/.test(a) ||
        /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a),
        mu = (a, b = null) => {
            const c = qu(a.innerWidth, 3, 0, Math.min(Math.round(a.innerWidth / 320 * 50), ru) + 15, 3);
            return su(a, c, b)
        },
        nu = (a, b = null) => {
            const c = a.innerWidth,
                d = a.innerHeight,
                e = Math.min(Math.round(a.innerWidth / 320 * 50), ru) + 15,
                f = qu(c, 3, d - e, d, 3);
            25 < e && f.push({
                x: c - 25,
                y: d - 25
            });
            return su(a, f, b)
        },
        ou = (a, b = null) => null != tu(a, b),
        tu = (a, b = null) => {
            var c = a.innerWidth;
            const d = a.innerHeight,
                e = U(pn);
            c =
                qu(c, 10, d - e, d, 10);
            return uu(a, c, b)
        },
        vu = (a, b) => {
            const c = a.innerWidth,
                d = a.innerHeight;
            let e = d;
            for (; e > b;) {
                var f = qu(c, 3, e - b, e, 3);
                f = uu(a, f);
                if (!f) return d - e;
                e = f.getBoundingClientRect().top - 1
            }
            return null
        },
        su = (a, b, c = null) => null != uu(a, b, c);

    function uu(a, b, c = null) {
        for (const d of b)
            if (b = wu(a, d, c)) return b;
        return null
    }

    function wu(a, b, c = null) {
        const d = xu(a.document, b.x, b.y);
        return d ? yu(d, a, b, c) || zu(d, a, b, c) || null : null
    }
    var xu = (a, b, c) => {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b, c));
        return a.elementFromPoint(b, c)
    };

    function zu(a, b, c, d = null) {
        const e = b.document;
        for (a = a.offsetParent; a && a != e.body; a = a.offsetParent) {
            const f = yu(a, b, c, d);
            if (f) return f
        }
        return null
    }
    var qu = (a, b, c, d, e) => {
        const f = [];
        for (let k = 0; k < e; k++)
            for (let m = 0; m < b; m++) {
                var g = f,
                    h = b - 1,
                    l = e - 1;
                g.push.call(g, {
                    x: (0 == h ? 0 : m / h) * a,
                    y: c + (0 == l ? 0 : k / l) * (d - c)
                })
            }
        return f
    };

    function yu(a, b, c, d = null) {
        if ("fixed" !== fh(a, "position")) return null;
        var e = "GoogleActiveViewInnerContainer" == a.getAttribute("class") || 1 >= ih(a).width && 1 >= ih(a).height ? !0 : !1;
        d && Sh(d, "ach_evt", {
            url: b.location.href,
            tn: a.tagName,
            id: a.getAttribute("id"),
            cls: a.getAttribute("class"),
            ign: e,
            pw: b.innerWidth,
            ph: b.innerHeight,
            x: c.x,
            y: c.y
        }, !0, 1);
        return e ? null : a
    }
    const ru = 90 * 1.38;

    function Au(a) {
        if (a.G) {
            const b = Aj(a.j);
            if (b > a.l + 100 || b < a.l - 100) Bu(a), a.l = wj(a.j)
        }
        a.I && a.j.clearTimeout(a.I);
        a.I = a.j.setTimeout(() => Cu(a), 200)
    }

    function Cu(a) {
        var b = wj(a.j);
        a.l && a.l > b && (a.l = b);
        b = Aj(a.j);
        b >= a.l - 100 && (a.l = Math.max(a.l, b), Du(a))
    }

    function Eu(a) {
        a.j.removeEventListener("scroll", a.L)
    }

    function Bu(a) {
        a.G = !1;
        const b = a.C.Fd();
        switch (b) {
            case 0:
                Q(a.B, a.D);
                break;
            case 1:
                a.A && (M(a.A, {
                    display: "none"
                }), Q(a.B, null));
                break;
            default:
                throw Error("Unhandled OnHideOutcome: " + b);
        }
    }

    function Du(a) {
        a.A || (a.A = Fu(a));
        M(a.A, {
            display: "block"
        });
        a.G = !0;
        a.C.Gd();
        Q(a.B, a.D)
    }

    function Fu(a) {
        var b = vu(a.j, a.C.ud() + 60);
        b = null == b ? 30 : b + 30;
        const c = a.j.document.createElement("div");
        M(c, Gs(a.j));
        M(c, {
            position: "fixed",
            left: "0px",
            bottom: b + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none",
            "pointer-events": "none"
        });
        a.D = a.C.ra(a.j, () => a.remove(), () => {
            Eu(a);
            Bu(a)
        }, () => {
            Eu(a);
            Du(a)
        });
        c.appendChild(a.D);
        a.J && (c.className = a.J);
        a.j.document.body.appendChild(c);
        return c
    }
    class Gu {
        constructor(a, b, c) {
            this.j = a;
            this.C = b;
            this.D = null;
            this.B = new Yj(null);
            this.J = c || null;
            this.A = null;
            this.G = !1;
            this.l = 0;
            this.I = null;
            this.L = () => Au(this)
        }
        init() {
            this.j.addEventListener("scroll", this.L);
            this.l = wj(this.j);
            Cu(this)
        }
        remove() {
            this.A && this.A.parentNode && this.A.parentNode.removeChild(this.A);
            this.A = null;
            Eu(this);
            Q(this.B, null)
        }
        F() {
            return this.B
        }
    };

    function Hu(a) {
        Q(a.D, 0);
        null != a.A && (a.A.remove(), a.A = null);
        null != a.l && (a.l.remove(), a.l = null)
    }

    function Iu(a) {
        a.l = new Gu(a.C, a.J, a.G);
        a.l.init();
        hk(a.B, a.l.F());
        Q(a.D, 2)
    }
    class Ju {
        constructor(a, b, c, d, e) {
            this.C = a;
            this.I = b;
            this.L = c;
            this.J = d;
            this.G = e;
            this.D = new Yj(0);
            this.B = new Yj(null);
            this.l = this.A = this.j = null
        }
        init() {
            this.I ? (this.A = new qt(this.C, this.I, this.L, this.G), this.A.init(), hk(this.B, this.A.F()), Q(this.D, 1), null == this.j && (this.j = new Mk(this.C), this.j.init(2E3)), this.j.addListener(() => {
                Hu(this);
                Iu(this)
            })) : Iu(this)
        }
        remove() {
            Hu(this);
            this.j && (this.j.va(), this.j = null)
        }
        F() {
            return this.B
        }
    };
    var Ku = (a, b, c, d, e) => {
        a = new Ju(a, ku(a, e), new ju(b, d, "#FFF", "#4A4A4A", "normal"), new fu(b, c, d), "google-dns-link-placeholder");
        a.init();
        return a
    };
    var Lu = a => a.googlefc = a.googlefc || {},
        Mu = a => {
            a = a.googlefc = a.googlefc || {};
            return a.ccpa = a.ccpa || {}
        };

    function Nu(a) {
        var b = Mu(a.j);
        if (Ou(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
            var c = b.getLocalizedDnsText();
            b = b.getLocalizedDnsCollapseText();
            null != c && null != b && (a.l = Ku(a.j, c, b, () => Pu(a), a.B))
        }
    }

    function Qu(a) {
        const b = Lu(a.j);
        Mu(a.j).overrideDnsLink = !0;
        b.callbackQueue = b.callbackQueue || [];
        b.callbackQueue.push({
            INITIAL_CCPA_DATA_READY: () => Nu(a)
        })
    }

    function Pu(a) {
        Et(a.A);
        Mu(a.j).openConfirmationDialog(b => {
            b && a.l && (a.l.remove(), a.l = null);
            Ft(a.A)
        })
    }
    class Ru {
        constructor(a, b, c) {
            this.j = a;
            this.A = zt(b, 2147483643);
            this.B = c;
            this.l = null
        }
    }

    function Ou(a, b) {
        switch (a) {
            case b.CCPA_DOES_NOT_APPLY:
            case b.OPTED_OUT:
                return !1;
            case b.NOT_OPTED_OUT:
                return !0;
            default:
                return !0
        }
    };

    function Su(a) {
        const b = a.document.createElement("ins");
        Tu(a, b);
        M(b, {
            display: "flex",
            padding: "8px 0px",
            width: "100%"
        });
        return b
    }

    function Uu(a, b, c, d) {
        const e = Bf(a).createElement("IMG");
        e.src = b;
        d && e.setAttribute("aria-label", d);
        Tu(a, e);
        M(e, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        e.addEventListener("click", f => {
            c();
            f.stopPropagation()
        });
        return e
    }

    function Vu(a, b) {
        const c = b.document.createElement("span");
        Tu(b, c);
        M(c, {
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.B));
        c.addEventListener("click", d => {
            a.l();
            d.stopPropagation()
        });
        return c
    }

    function Wu(a, b) {
        const c = b.document.createElement("span");
        c.appendChild(b.document.createTextNode(a.A));
        M(c, Gs(b));
        M(c, {
            "border-top": "11px solid #ECEDED",
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            "line-height": "1414px",
            padding: "8px 32px",
            "text-align": "center"
        });
        return c
    }

    function Xu(a) {
        const b = a.document.createElement("div");
        M(b, Gs(a));
        M(b, {
            "align-items": "flex-start",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
            display: "inline-flex",
            "flex-direction": "column",
            "float": "left"
        });
        return b
    }
    class Yu {
        constructor(a, b, c, d) {
            this.B = a;
            this.C = b;
            this.A = c;
            this.l = d;
            this.j = new Yj(!1)
        }
        ra(a, b, c, d) {
            c = Su(a);
            const e = Uu(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d),
                f = Uu(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.l),
                g = Vu(this, a),
                h = Uu(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.C);
            M(h, {
                "margin-left": "auto"
            });
            c.appendChild(e);
            c.appendChild(f);
            c.appendChild(g);
            c.appendChild(h);
            const l = Wu(this, a);
            a = Xu(a);
            a.appendChild(c);
            a.appendChild(l);
            this.j.ba(k => {
                M(e, {
                    display: k ? "none" : "inline"
                });
                M(f, {
                    display: k ? "inline" : "none"
                });
                k ? (M(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), M(h, {
                        "margin-right": "12px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 50ms, opacity 50ms 50ms, width 50ms"
                    }), M(l, {
                        "border-width": "1px",
                        "line-height": "14px",
                        "max-width": "100vw",
                        opacity: "1",
                        padding: "8px 32px",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms"
                    })) :
                    (M(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), M(h, {
                        "margin-right": "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms"
                    }), M(l, {
                        "border-width": "0px",
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        padding: "0",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms"
                    }))
            }, !0);
            return a
        }
        ud() {
            return 71
        }
        Fd() {
            Q(this.j, !1);
            return 0
        }
        Gd() {
            Q(this.j, !0)
        }
    }

    function Tu(a, b) {
        M(b, Gs(a));
        M(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    };

    function Zu(a) {
        $u(a.l, b => {
            var c = a.B,
                d = b.Bf,
                e = b.Ee,
                f = b.re;
            b = b.showRevocationMessage;
            (new Ju(c, ku(c, a.A), new ju(d, b, "#1A73E8", "#FFF", "bold", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg", "2px solid #ECEDED", f), new Yu(d, e, f, b), "google-revocation-link-placeholder")).init()
        }, () => {
            Ft(a.j)
        })
    }
    class av {
        constructor(a, b, c, d) {
            this.B = a;
            this.j = zt(b, 2147483643);
            this.A = c;
            this.l = d
        }
    };
    var bv = a => {
        if (!a || !Fc(a, 1)) return !1;
        a = y(a, 1);
        switch (a) {
            case 1:
                return !0;
            case 2:
                return !1;
            default:
                throw Error("Unhandled AutoConsentUiStatus: " + a);
        }
    };

    function cv(a) {
        if (!0 !== a.l.adsbygoogle_ama_fc_has_run) {
            var b = !1;
            bv(a.j) && (b = new av(a.l, a.C, a.B || F(a.j, dm, 4), a.A), Et(b.j), Zu(b), b = !0);
            var c;
            a: if ((c = a.j) && Fc(c, 3)) switch (c = y(c, 3), c) {
                case 1:
                    c = !0;
                    break a;
                case 2:
                    c = !1;
                    break a;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + c);
            } else c = !1;
            c && (Qu(new Ru(a.l, a.C, a.B || F(a.j, dm, 4))), b = !0);
            if (c = (c = a.j) ? !0 === B(c, 5) : !1) c = ((c = a.j) ? !0 === B(c, 6) : !1) || T(ho);
            c && (b = !0);
            b && (a.A.start(), a.l.adsbygoogle_ama_fc_has_run = !0)
        }
    }
    class dv {
        constructor(a, b, c, d, e) {
            this.l = a;
            this.A = b;
            this.j = c;
            this.C = d;
            this.B = e || null
        }
    };
    var ev = (a, b, c, d, e, f) => {
            try {
                const g = a.j,
                    h = bg("SCRIPT", g);
                h.async = !0;
                De(h, b);
                g.head.appendChild(h);
                h.addEventListener("load", () => {
                    e();
                    d && g.head.removeChild(h)
                });
                h.addEventListener("error", () => {
                    0 < c ? ev(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
                })
            } catch (g) {
                f()
            }
        },
        fv = (a, b, c = () => {}, d = () => {}) => {
            ev(Bf(a), b, 0, !1, c, d)
        };
    var gv = (a = null) => {
        a = a || u;
        return a.googlefc || (a.googlefc = {})
    };
    pd(ij).map(a => Number(a));
    pd(jj).map(a => Number(a));
    var hv = (a, b) => {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = bg("IFRAME", c);
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
    const iv = a => {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    };

    function jv(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = iv(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? !a.internalBlockOnErrors : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }

    function kv(a) {
        return jv(a) ? !1 !== a.gdprApplies && "tcunavailable" !== a.tcString && void 0 !== a.gdprApplies && "string" === typeof a.tcString && a.tcString.length ? lv(a, "1") : !0 : !1
    }

    function lv(a, b) {
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var c = a.publisher.restrictions[b];
                if (void 0 !== c) {
                    c = c["755"];
                    break a
                }
            }
            c = void 0
        }
        if (0 === c) return !1;a.purpose && a.vendor ? (c = a.vendor.consents, (c = !(!c || !c["755"])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents, c = !(!a || !a[b])), b = c)) : b = !0;
        return b
    }

    function mv(a) {
        var b = ["3", "4"];
        return !1 === a.gdprApplies ? !0 : b.every(c => lv(a, c))
    }

    function nv(a) {
        if (a.A) return a.A;
        a.A = ug(a.j, "__tcfapiLocator");
        return a.A
    }

    function ov(a) {
        return "function" === typeof a.j.__tcfapi || null != nv(a)
    }

    function pv(a, b, c, d) {
        c || (c = () => {});
        if ("function" === typeof a.j.__tcfapi) a = a.j.__tcfapi, a(b, 2, c, d);
        else if (nv(a)) {
            qv(a);
            const e = ++a.J;
            a.C[e] = c;
            a.A && a.A.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function rv(a, b) {
        let c = {
            internalErrorState: 0,
            internalBlockOnErrors: a.D
        };
        const d = Je(() => b(c));
        let e = 0; - 1 !== a.G && (e = setTimeout(() => {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.G));
        pv(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = iv(c), c.internalBlockOnErrors = a.D, jv(c) ? (0 != c.internalErrorState && (c.tcString = "tcunavailable"), pv(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f), d()) : ("error" === c.cmpStatus || 0 !== c.internalErrorState) && (f = e) && clearTimeout(f))
        })
    }

    function qv(a) {
        a.B || (a.B = b => {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.C[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, L(a.j, "message", a.B))
    }
    class sv extends Sj {
        constructor(a, b = 500, c = !1) {
            super();
            this.j = a;
            this.A = null;
            this.C = {};
            this.J = 0;
            this.G = b;
            this.D = c;
            this.B = null
        }
        l() {
            this.C = {};
            this.B && (Qe(this.j, "message", this.B), delete this.B);
            delete this.C;
            delete this.j;
            delete this.A;
            super.l()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.D
            };
            const c = Je(() => a(b));
            let d = 0; - 1 !== this.G && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.G));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = iv(b), b.internalBlockOnErrors =
                    this.D, g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                pv(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && pv(this, "removeEventListener", null, a.listenerId)
        }
    };

    function $u(a, b, c) {
        const d = gv(a.j);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: () => {
                const e = gv(a.j),
                    f = new sv(a.j);
                ov(f) && rv(f, g => {
                    300 === g.cmpId && g.tcString && "tcunavailable" !== g.tcString && b({
                        Bf: e.getDefaultConsentRevocationText(),
                        Ee: e.getDefaultConsentRevocationCloseText(),
                        re: e.getDefaultConsentRevocationAttestationText(),
                        showRevocationMessage: () => e.showRevocationMessage()
                    })
                });
                c()
            }
        })
    }

    function tv(a) {
        const b = Gd(jd("https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {
            id: a.l,
            ers: 2
        });
        fv(a.j, b, () => {}, () => {})
    }
    class uv {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        start() {
            if (this.j === this.j.top) try {
                hv(this.j, "googlefcPresent"), tv(this)
            } catch (a) {}
        }
    };
    var vv = (a, b, c) => {
        const d = E(a, Xl, 6);
        if (!d) return [];
        c = is(F(d, Yl, 1), c);
        return (a = vm(a)) && B(a, 11) ? c.map(e => Bq(e)) : c.map(e => {
            const f = pl();
            return new $p(new vq(e.pc, e.qc), new tq, new uq(b), !0, 2, [], f, e.l, null, null, null, e.A, e.j)
        })
    };
    var xv = class extends K {
        constructor() {
            super(void 0, -1, wv)
        }
    };

    function yv(a, b) {
        return z(a, 1, b)
    }

    function zv(a, b) {
        return Sc(a, 2, b)
    }
    var Bv = class extends K {
            constructor(a) {
                super(a, -1, Av)
            }
        },
        Cv = class extends K {
            constructor(a) {
                super(a)
            }
            getHeight() {
                return C(this, 2, 0)
            }
        },
        wv = [5],
        Av = [2];
    var Dv = class extends K {
            constructor() {
                super(void 0)
            }
        },
        Ev = [1, 2];
    var Fv = class extends K {
        constructor() {
            super(void 0)
        }
    };

    function Gv(a) {
        return new sl(["pedestal_container"], {
            google_reactive_ad_format: 30,
            google_phwr: 2.189,
            google_ad_width: Math.floor(a),
            google_ad_format: "autorelaxed",
            google_full_width_responsive: !0,
            google_enable_content_recommendations: !0,
            google_content_recommendation_ui_type: "pedestal"
        })
    }
    class Hv {
        j(a) {
            return Gv(Math.floor(a.l))
        }
    };
    var Iv = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        Wi: 4,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR",
        4: "SCROLL_TRIGGERED_IMMERSIVE"
    };

    function Jv(a) {
        var b = ["Could not locate a suitable placement in the content below the fold."],
            c;
        a = null == (c = pj(a)) ? void 0 : c.tagSpecificState[1];
        if (null == a) c = null;
        else {
            var d;
            c = 4 === (null == (d = a.debugCard) ? void 0 : d.getAdType()) ? a.debugCard : null
        }(d = c) && d.displayAdLoadedContent(b)
    };
    var Kv = class extends K {
        constructor() {
            super(void 0)
        }
    };

    function Lv(a, b) {
        if (b) {
            var c = b.adClient;
            if ("string" === typeof c && c) {
                a.rc = c;
                a.A = !!b.adTest;
                c = b.pubVars;
                va(c) && (a.H = c);
                if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
                    a.D = {};
                    for (d of b.fillMessage) a.D[d.key] = d.value
                }
                a.B = b.adWidth;
                a.l = b.adHeight;
                oh(a.B) && oh(a.l) || Qi("rctnosize", b);
                var d = !0
            } else d = !1
        } else d = !1;
        return d && a.G(b)
    }
    class Mv {
        constructor() {
            this.D = this.H = this.A = this.rc = null;
            this.l = this.B = 0
        }
        G() {
            return !0
        }
    };

    function Nv(a, b = []) {
        const c = Date.now();
        return kb(b, d => c - d < 1E3 * a)
    }

    function Ov(a, b) {
        try {
            const c = a.getItem("__lsv__");
            if (!c) return [];
            let d;
            try {
                d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || nb(d, e => !Number.isInteger(e))) return a.removeItem("__lsv__"), [];
            d = Nv(b, d);
            d.length || null == a || a.removeItem("__lsv__");
            return d
        } catch (c) {
            return null
        }
    }

    function Pv(a, b) {
        var c;
        if (!(c = 0 >= b) && !(c = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                const e = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var d = "__storage_test__" === e
            } catch (e) {
                d = !1
            }
            c = !d
        }
        return c ? null : Ov(a, b)
    };
    var Qv = (a, b, c) => {
        let d = 0;
        try {
            d |= a != a.top ? 512 : 0;
            d |= uj(a);
            d |= tj(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var e;
            if (e = b) {
                var f = Pv(c, 3600);
                e = !(f && 1 > f.length)
            }
            e && (d |= 134217728);
            T(Io) && (d |= 128)
        } catch (g) {
            d |= 32
        }
        return d
    };
    class Rv extends Mv {
        constructor() {
            super();
            this.C = !1;
            this.j = null;
            this.F = !1
        }
        G(a) {
            this.C = !!a.enableAma;
            var b = a.amaConfig;
            if (b) try {
                var c = Yc(ym, b)
            } catch (d) {
                c = null
            } else c = null;
            this.j = c;
            Array.isArray(a.fillMessage) && (this.F = !0);
            return !0
        }
    };
    const Sv = {};

    function Tv(a, b, c) {
        let d = Uv(a, c, b);
        if (!d) return !0;
        let e = -1;
        const f = c.D.l;
        for (; d.xb && d.xb.length;) {
            const h = d.xb.shift();
            var g = iq(h.V);
            const l = h.X.j,
                k = !!c.A.Pc || !!c.A.Vc || c.Ga() || !!c.A.md || l > e;
            g = !g || g <= d.Gb;
            if (k && g && Vv(c, h, {
                    Yb: d.Gb
                })) {
                e = l;
                if (d.Eb.j.length + 1 >= f) return !0;
                d = Uv(a, c, b);
                if (!d) return !0
            }
        }
        return c.B
    }
    const Uv = (a, b, c) => {
        var d = b.D.l,
            e = b.D.B,
            f = b.D;
        f = nr(b.T(), f.j ? f.j.gb : void 0, d);
        if (f.j.length >= d) return null;
        e ? (d = f.l || (f.l = P(f.A).scrollHeight || null), e = !d || 0 > d ? -1 : f.l * e - tr(f)) : e = void 0;
        a = null == e || 50 <= e ? Wv(b, f, {
            types: a
        }, c) : null;
        return {
            Eb: f,
            Gb: e,
            xb: a
        }
    };
    Sv[2] = Da(function(a, b) {
        a = Wv(b, nr(b.T()), {
            types: a,
            Na: Xq(b.T())
        }, 2);
        if (0 == a.length) return !0;
        for (var c = 0; c < a.length; c++)
            if (Vv(b, a[c])) return !0;
        return b.B ? (b.C.push(11), !0) : !1
    }, [0]);
    Sv[5] = Da(Tv, [0], 5);
    Sv[10] = Da(function(a, b) {
        a = [];
        const c = b.W;
        c.includes(3) && a.push(2);
        c.includes(1) && a.push(0);
        c.includes(2) && !T(Tn) && a.push(1);
        return Tv(a, 10, b)
    }, 10);
    Sv[3] = function(a) {
        if (!a.B) return !1;
        var b = Wv(a, nr(a.T()), {
            types: [0],
            Na: Xq(a.T())
        }, 3);
        if (0 == b.length) return !0;
        for (var c = b.length - 1; 0 <= c; c--)
            if (Vv(a, b[c])) return !0;
        a.C.push(11);
        return !0
    };
    const Xv = a => {
            var b;
            a.A.Wd ? b = new Tq(0, null, [], 3, null) : b = Xq(a.T());
            return {
                types: [0],
                Na: b
            }
        },
        Zv = a => {
            const b = a.T().document.body.getBoundingClientRect().width;
            Yv(a, Gv(b))
        },
        aw = (a, b) => {
            var c = Xv(a);
            c.Af = [5];
            c = Wv(a, nr(a.T()), c, 8);
            $v(a, c.reverse(), b)
        },
        $v = (a, b, c) => {
            for (const d of b)
                if (b = c.j(d.X), Vv(a, d, {
                        sc: b
                    })) return !0;
            return !1
        };
    Sv[8] = function(a) {
        var b = a.T().document;
        if ("complete" != b.readyState) return b.addEventListener("readystatechange", () => Sv[8](a), {
            once: !0
        }), !0;
        if (!a.B) return !1;
        if (!a.Wb()) return !0;
        b = Xv(a);
        b.Nc = [2, 4, 5];
        b = Wv(a, nr(a.T()), b, 8);
        const c = new Hv;
        if ($v(a, b, c)) return !0;
        if (a.A.od) switch (a.A.Id || 0) {
            case 1:
                aw(a, c);
                break;
            default:
                Zv(a)
        }
        return !0
    };
    Sv[6] = Da(Tv, [2], 6);
    Sv[7] = Da(Tv, [1], 7);
    Sv[9] = function(a) {
        const b = Uv([0, 2], a, 9);
        if (!b || !b.xb) return a.C.push(17), Jv(a.T()), a.B;
        for (const e of b.xb) {
            var c = e;
            var d = a.A.Bc || null;
            null == d ? c = null : (d = jq(c.V, new bw, new cw(d, a.T())), c = new qq(d, c.Z(), c.X));
            if (c && !(iq(c.V) > b.Gb) && Vv(a, c, {
                    Yb: b.Gb,
                    wc: !0
                })) return a = c.V.U, gq(e.V, 0 < a.length ? a[0] : null), !0
        }
        a.C.push(17);
        Jv(a.T());
        return a.B
    };
    class bw {
        l(a, b, c, d) {
            return yp(d.document, a, b)
        }
        A(a) {
            return P(a).clientHeight || 0
        }
    };
    var dw = class {
        constructor(a, b, c) {
            this.l = a;
            this.j = b;
            this.Eb = c
        }
        ia(a) {
            return this.j ? Pr(this.l, this.j, a, this.Eb) : Or(this.l, a, this.Eb)
        }
        ja() {
            return this.j ? 16 : 9
        }
    };
    var ew = class {
        constructor(a) {
            this.tc = a
        }
        ia(a) {
            return Wr(a.document, this.tc)
        }
        ja() {
            return 11
        }
    };
    var fw = class {
        constructor(a) {
            this.Xa = a
        }
        ia(a) {
            return Tr(this.Xa, a)
        }
        ja() {
            return 13
        }
    };
    var gw = class {
        ia(a) {
            return Mr(a)
        }
        ja() {
            return 12
        }
    };
    var hw = class {
        constructor(a) {
            this.nb = a
        }
        ia() {
            return Rr(this.nb)
        }
        ja() {
            return 2
        }
    };
    var iw = class {
        constructor(a) {
            this.j = a
        }
        ia() {
            return Ur(this.j)
        }
        ja() {
            return 3
        }
    };
    var jw = class {
        ia() {
            return Yr()
        }
        ja() {
            return 17
        }
    };
    var kw = class {
        constructor(a) {
            this.j = a
        }
        ia() {
            return Qr(this.j)
        }
        ja() {
            return 1
        }
    };
    var lw = class {
        ia() {
            return He(aq)
        }
        ja() {
            return 7
        }
    };
    var mw = class {
        constructor(a) {
            this.Nc = a
        }
        ia() {
            return Sr(this.Nc)
        }
        ja() {
            return 6
        }
    };
    var nw = class {
        constructor(a) {
            this.j = a
        }
        ia() {
            return Vr(this.j)
        }
        ja() {
            return 5
        }
    };
    var ow = class {
        constructor(a, b) {
            this.minWidth = a;
            this.maxWidth = b
        }
        ia() {
            return Da(Zr, this.minWidth, this.maxWidth)
        }
        ja() {
            return 10
        }
    };
    var pw = class {
        constructor(a) {
            this.B = a.l.slice(0);
            this.l = a.j.slice(0);
            this.A = a.A;
            this.C = a.B;
            this.j = a.C
        }
    };

    function qw(a) {
        var b = new rw;
        b.C = a;
        b.l.push(new kw(a));
        return b
    }

    function sw(a, b) {
        a.l.push(new mw(b));
        return a
    }

    function tw(a, b) {
        a.l.push(new hw(b));
        return a
    }

    function uw(a, b) {
        a.l.push(new nw(b));
        return a
    }

    function vw(a, b) {
        a.l.push(new iw(b));
        return a
    }

    function ww(a) {
        a.l.push(new lw);
        return a
    }

    function xw(a) {
        a.j.push(new gw);
        return a
    }

    function yw(a, b = 0, c, d) {
        a.j.push(new dw(b, c, d));
        return a
    }

    function zw(a, b = 0, c = Infinity) {
        a.j.push(new ow(b, c));
        return a
    }

    function Aw(a) {
        a.j.push(new jw);
        return a
    }

    function Bw(a, b = 0) {
        a.j.push(new fw(b));
        return a
    }

    function Cw(a, b) {
        a.A = b;
        return a
    }
    var rw = class {
        constructor() {
            this.A = 0;
            this.B = !1;
            this.l = [].slice(0);
            this.j = [].slice(0)
        }
        build() {
            return new pw(this)
        }
    };
    class cw {
        constructor(a, b) {
            this.l = a;
            this.A = b
        }
        j() {
            var a = this.l,
                b = this.A;
            const c = a.H || {};
            c.google_ad_client = a.rc;
            c.google_ad_height = P(b).clientHeight || 0;
            c.google_ad_width = P(b).clientWidth || 0;
            c.google_reactive_ad_format = 9;
            b = new Kv;
            z(b, 1, a.C);
            a.j && Qc(b, 2, a.j);
            a.F && z(b, 3, !0);
            c.google_rasc = ad(b);
            a.A && (c.google_adtest = "on");
            return new sl(["fsi_container"], c)
        }
    };
    var Dw = ll(new il(0, {})),
        Ew = ll(new il(1, {})),
        Fw = a => a === Dw || a === Ew;

    function Gw(a, b, c) {
        Kj(a.j, b) || a.j.set(b, []);
        a.j.get(b).push(c)
    }
    class Hw {
        constructor() {
            this.j = new Oj
        }
    };

    function Iw(a, b) {
        b && (a.j.apv = y(b, 4), Gc(b, 23) && (a.j.sat = "" + y(E(b, Am, 23), 1)));
        return a
    }

    function Jw(a, b) {
        a.j.afm = b.join(",");
        return a
    }
    class Kw extends Vm {
        constructor(a) {
            super(a);
            this.j = {}
        }
        I(a) {
            null != a && (this.j.allp = a);
            return this
        }
        B(a) {
            try {
                this.j.su = a.location.hostname
            } catch (b) {
                this.j.su = "_ex"
            }
            a = super.B(a);
            sd(a, this.j);
            return a
        }
    }

    function Lw(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function Mw(a, b) {
        a.l.op = Nw(b)
    }

    function Ow(a, b, c) {
        30 >= c.length ? a.l[b] = Pw(c) : (a.l[b] = Pw(c.slice(0, 30)), a.l[b + "_c"] = c.length.toString())
    }

    function Qw(a, b, c) {
        Ow(a, "fap", b);
        a.l.fad = Nw(c)
    }

    function Rw(a, b, c) {
        Ow(a, "fmp", b);
        a.l.fmd = Nw(c)
    }

    function Sw(a, b, c) {
        Ow(a, "vap", b);
        a.l.vad = Nw(c)
    }

    function Tw(a, b, c) {
        Ow(a, "vmp", b);
        a.l.vmd = Nw(c)
    }

    function Uw(a, b, c) {
        Ow(a, "pap", b);
        a.l.pad = Nw(c)
    }

    function Vw(a, b, c) {
        Ow(a, "pmp", b);
        a.l.pmd = Nw(c)
    }

    function Ww(a, b) {
        Ow(a, "psq", b)
    }
    var Xw = class extends Kw {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.l = {}
        }
        B(a) {
            a = super.B(a);
            Object.assign(a, this.l);
            return a
        }
    };

    function Pw(a) {
        return a.map(b => {
            let c;
            return null != (c = null == b ? void 0 : b.toString()) ? c : "null"
        }).join("~")
    }

    function Nw(a) {
        return null == a ? "null" : "string" === typeof a ? a : "boolean" === typeof a ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };
    var Yw = class extends K {
        constructor() {
            super(void 0)
        }
    };

    function Zw(a, b) {
        return Lc(a, 1, b)
    }

    function $w() {
        var a = new ax;
        uc(a);
        Hc(a, 2, 2, !1).push("irr");
        return a
    }

    function bx(a, b) {
        return z(a, 3, b)
    }

    function cx(a, b) {
        return z(a, 4, b)
    }

    function dx(a, b) {
        return z(a, 5, b)
    }

    function ex(a, b) {
        return z(a, 7, b)
    }

    function fx(a, b) {
        return z(a, 8, b)
    }

    function gx(a, b) {
        return z(a, 9, b)
    }

    function hx(a, b) {
        return Sc(a, 10, b)
    }

    function ix(a, b) {
        return Lc(a, 11, b)
    }
    var ax = class extends K {
            constructor() {
                super(void 0, -1, jx)
            }
        },
        jx = [1, 2, 10, 11];

    function kx(a, b, c) {
        const d = b.V;
        if (!Kj(a.j, d)) {
            let e;
            a.j.set(d, new lx(null != (e = al(oq(b))) ? e : ""))
        }
        c(a.j.get(d))
    }

    function mx(a, b) {
        kx(a, b, c => {
            c.j = !0
        })
    }

    function nx(a, b) {
        kx(a, b, c => {
            c.l = !0
        })
    }

    function ox(a, b) {
        kx(a, b, c => {
            c.A = !0
        });
        a.I.push(b.V)
    }

    function px(a, b, c) {
        kx(a, b, d => {
            d.Va = c
        })
    }

    function qx(a, b, c) {
        const d = [];
        let e = 0;
        for (const f of c.filter(b)) {
            let g;
            if (Fw(null != (g = f.Va) ? g : "")) ++e;
            else {
                let h;
                b = a.l.get(null != (h = f.Va) ? h : "", null);
                d.push(b)
            }
        }
        return {
            list: d.sort((f, g) => (null != f ? f : -1) - (null != g ? g : -1)),
            Wa: e
        }
    }

    function rx(a, b) {
        Mw(b, a.l.qb());
        var c = Nj(a.j).filter(f => 0 === (f.Ja.startsWith(Dw) ? 0 : 1)),
            d = Nj(a.j).filter(f => 1 === (f.Ja.startsWith(Dw) ? 0 : 1)),
            e = qx(a, f => f.j, c);
        Qw(b, e.list, e.Wa);
        e = qx(a, f => f.j, d);
        Rw(b, e.list, e.Wa);
        e = qx(a, f => f.l, c);
        Sw(b, e.list, e.Wa);
        e = qx(a, f => f.l, d);
        Tw(b, e.list, e.Wa);
        c = qx(a, f => f.A, c);
        Uw(b, c.list, c.Wa);
        d = qx(a, f => f.A, d);
        Vw(b, d.list, d.Wa);
        Ww(b, a.I.map(f => {
            let g;
            return null == (g = a.j.get(f)) ? void 0 : g.Va
        }).map(f => {
            let g;
            return null != (g = a.l.get(f)) ? g : null
        }))
    }

    function sx() {
        var a = O(tx);
        if (!a.B) return $w();
        let b, c;
        const d = ix(hx(gx(fx(ex(dx(cx(bx(Zw(new ax, null != (b = a.B) ? b : []), a.C), a.F), a.G), a.J), a.L), null != (c = a.D) ? c : 0), Nj(a.j).map(e => {
            var f;
            var g = new Yw;
            g = z(g, 1, e.Ja);
            var h = a.l.get(null != (f = e.Va) ? f : "", -1);
            f = z(g, 2, h);
            f = z(f, 3, e.j);
            return z(f, 4, e.l)
        })), a.I.map(e => {
            let f;
            return null == (f = a.j.get(e)) ? void 0 : f.Va
        }).map(e => {
            let f;
            return null != (f = a.l.get(e)) ? f : null
        }));
        null != a.A && z(d, 6, a.A);
        return d
    }
    var tx = class {
        constructor() {
            this.B = null;
            this.G = this.F = !1;
            this.A = null;
            this.L = this.C = this.J = !1;
            this.D = null;
            this.l = new Oj;
            this.j = new Oj;
            this.I = []
        }
    };
    class lx {
        constructor(a) {
            this.A = this.l = this.j = !1;
            this.Va = null;
            this.Ja = a
        }
    };
    class ux {
        constructor(a = 0) {
            this.j = a
        }
    };
    class vx {
        constructor(a) {
            this.l = a;
            this.j = -1
        }
    };

    function wx(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function xx(a, b) {
        const c = a.B.filter(d => Mj(d.Nb).every(e => d.Nb.get(e) === b.get(e)));
        return 0 === c.length ? (a.l.push(19), null) : c.reduce((d, e) => d.Nb.qb() > e.Nb.qb() ? d : e, c[0])
    }

    function yx(a, b) {
        b = oq(b);
        if (null == b.j) return a.l.push(18), null;
        b = b.j.value;
        if (Kj(a.A, b)) return a.A.get(b);
        var c = jl(b);
        c = xx(a, c);
        a.A.set(b, c);
        return c
    }

    function zx(a, b) {
        let c;
        return (null == (c = yx(a, b)) ? void 0 : c.tf) || Number.MAX_VALUE
    }

    function Ax(a, b) {
        const c = U(ko) || 0;
        if (0 == b.length || 0 == c) return !0;
        const d = (new Uk(b)).filter(e => {
            let f;
            e = (null == (f = yx(a, e)) ? void 0 : f.Ja) || "";
            return "" != e && !(e === Dw || e === Ew)
        });
        return c <= d.j.length / b.length
    }
    var Bx = class {
        constructor(a) {
            this.j = a;
            this.A = new Oj;
            let b;
            this.B = ((null == (b = E(a, mm, 2)) ? void 0 : F(b, nm, 1)) || []).map(c => ({
                Nb: jl(J(c, 1)),
                tf: C(c, 2, 0),
                Ja: J(c, 1)
            }));
            this.l = []
        }
    };

    function Cx(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => zx(a.j, c) - zx(a.j, d))
    }

    function Dx(a, b) {
        var c = b.X.j,
            d = Math,
            e = d.min;
        const f = b.Z(),
            g = b.V.l();
        c += 200 * e.call(d, 20, 0 == g || 3 == g ? wx(f.parentElement) : wx(f));
        d = a.A;
        0 > d.j && (d.j = P(d.l).scrollHeight || 0);
        d = d.j - b.X.j;
        c += 1E3 < d ? 0 : 2 * (1E3 - d);
        a = a.l;
        b = b.Z();
        return c + ("string" === typeof b.className && 0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot") ? a.j : 0)
    }

    function Ex(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => Dx(a, c) - Dx(a, d))
    }

    function Fx(a, b) {
        return b.sort((c, d) => {
            const e = c.V.G,
                f = d.V.G;
            var g;
            null == e || null == f ? g = null == e && null == f ? Dx(a, c) - Dx(a, d) : null == e ? 1 : -1 : g = e - f;
            return g
        })
    }
    class Gx {
        constructor(a, b = 0, c = null) {
            this.A = new vx(a);
            this.l = new ux(b);
            this.j = c && new Bx(c)
        }
    };

    function Hx(a) {
        a.j.forEach(b => {
            b.j && Yo(b.j);
            b.j = null
        })
    }

    function Ix(a, b, c = 0) {
        var d = a.j;
        for (var e of b.B) d = Tk(d, e.ia(a.A), Jx(e.ja(), c));
        e = d = d.apply(Lr(a.A));
        for (const g of b.l) e = Tk(e, g.ia(a.A), Kx(g.ja(), c));
        switch (b.A) {
            case 1:
                e = Ex(a.l, e);
                break;
            case 2:
                e = Fx(a.l, e);
                break;
            case 3:
                const g = O(tx);
                e = Cx(a.l, e);
                d.forEach(h => {
                    mx(g, h);
                    var l;
                    null != (l = a.l.j) && (l = yx(l, h), null != (null == l ? void 0 : l.Ja) && px(O(tx), h, l.Ja))
                });
                e.forEach(h => nx(g, h))
        }
        b.C && (e = Vk(e, yf(a.A.location.href + a.A.localStorage.google_experiment_mod)));
        let f;
        1 === (null == (f = b.j) ? void 0 : f.length) && Gw(a.B, b.j[0], {
            te: d.j.length,
            Jf: e.j.length
        });
        return e.j.slice(0)
    }
    class Lx {
        constructor(a, b, c = 0, d = null) {
            this.j = new Uk(a);
            this.l = new Gx(b, c, d);
            this.A = b;
            this.B = new Hw
        }
    }
    const Jx = (a, b) => c => fq(c, b, a),
        Kx = (a, b) => c => fq(c.V, b, a);

    function Mx(a, b, c, d) {
        a: {
            switch (b) {
                case 0:
                    a = Nx(Ox(c), a);
                    break a;
                case 3:
                    a = Nx(c, a);
                    break a;
                case 2:
                    var e = c.lastChild;
                    a = Nx(e ? 1 == e.nodeType ? e : Ox(e) : null, a);
                    break a
            }
            a = !1
        }
        if (d = !a && !(!d && 2 == b && !Px(c))) b = 1 == b || 2 == b ? c : c.parentNode,
        d = !(b && !an(b) && 0 >= b.offsetWidth);
        return d
    }

    function Nx(a, b) {
        if (!a) return !1;
        a = cg(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function Ox(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function Px(a) {
        return !!a.nextSibling || !!a.parentNode && Px(a.parentNode)
    };
    var Qx = !Bb && !db();

    function Rx(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (Qx && a.dataset) {
            if (fb() && !("adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var Sx = (a, b, c) => {
            if (!b) return null;
            const d = Kf(document, "INS");
            d.id = "google_pedestal_container";
            d.style.width = "100%";
            d.style.zIndex = "-1";
            if (c) {
                var e = a.getComputedStyle(c),
                    f = "";
                if (e && "static" != e.position) {
                    var g = c.parentNode.lastElementChild;
                    for (f = e.position; g && g != c;) {
                        if ("none" != a.getComputedStyle(g).display) {
                            f = a.getComputedStyle(g).position;
                            break
                        }
                        g = g.previousElementSibling
                    }
                }
                if (c = f) d.style.position = c
            }
            b.appendChild(d);
            if (d) {
                var h = a.document;
                f = h.createElement("div");
                f.style.width = "100%";
                f.style.height =
                    "2000px";
                c = P(a).clientHeight;
                e = h.body.scrollHeight;
                a = a.innerHeight;
                g = h.body.getBoundingClientRect().bottom;
                d.appendChild(f);
                var l = f.getBoundingClientRect().top;
                h = h.body.getBoundingClientRect().top;
                d.removeChild(f);
                f = e;
                e <= a && 0 < c && 0 < g && (f = g - h);
                a = l - h >= .8 * f
            } else a = !1;
            return a ? d : (b.removeChild(d), null)
        },
        Tx = a => {
            const b = a.document.body;
            var c = Sx(a, b, null);
            if (c) return c;
            if (a.document.body) {
                c = Math.floor(a.document.body.getBoundingClientRect().width);
                for (var d = [{
                        element: a.document.body,
                        depth: 0,
                        height: 0
                    }], e = -1, f = null; 0 < d.length;) {
                    const h = d.pop(),
                        l = h.element;
                    var g = h.height;
                    0 < h.depth && g > e && (e = g, f = l);
                    if (5 > h.depth)
                        for (let k = 0; k < l.children.length; k++) {
                            const m = l.children[k];
                            g = c;
                            const n = m.getBoundingClientRect().width;
                            (null == n || null == g ? 0 : n >= .9 * g && n <= 1.01 * g) && d.push({
                                element: m,
                                depth: h.depth + 1,
                                height: m.getBoundingClientRect().height
                            })
                        }
                }
                c = f
            } else c = null;
            return c ? Sx(a, c.parentNode || b, c) : null
        },
        Vx = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, Uf() || (b |= 1048576), 1200 >= Math.floor(a.document.body.getBoundingClientRect().width) ||
                    (b |= 32768), Ux(a) && (b |= 33554432)
            } catch (c) {
                b |= 32
            }
            return b
        },
        Ux = a => {
            a = a.document.getElementsByClassName("adsbygoogle");
            for (let b = 0; b < a.length; b++)
                if ("autorelaxed" == Rx(a[b])) return !0;
            return !1
        };

    function Wx(a) {
        const b = vj(a, !0),
            c = P(a).scrollWidth,
            d = P(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = Aj(a);
        const g = [];
        var h = [];
        const l = [],
            k = [];
        var m = [],
            n = [],
            p = [];
        let r = 0,
            t = 0,
            x = Infinity,
            w = Infinity,
            A = null;
        var D = jr({
            Sa: !1
        }, a);
        for (var H of D) {
            D = H.getBoundingClientRect();
            const aa = b - (D.bottom + f);
            var G = void 0,
                I = void 0;
            if (H.className && Xa(H.className, "adsbygoogle-ablated-ad-slot")) {
                G = H.getAttribute("google_element_uid");
                I = a.google_sv_map;
                if (!G || !I || !I[G]) continue;
                G = (I = Ah(I[G])) ? I.height : 0;
                I = I ? I.width : 0
            } else if (G = D.bottom - D.top, I = D.right - D.left, 1 >= G || 1 >= I) continue;
            g.push(G);
            l.push(I);
            k.push(G * I);
            H.className && Xa(H.className, "google-auto-placed") ? (t += 1, H.className && Xa(H.className, "pedestal_container") && (A = G)) : (x = Math.min(x, aa), n.push(D), r += 1, h.push(G), m.push(G * I));
            w = Math.min(w, aa);
            p.push(D)
        }
        x = Infinity === x ? null : x;
        w = Infinity === w ? null : w;
        f = Xx(n);
        p = Xx(p);
        h = Yx(b, h);
        n = Yx(b, g);
        m = Yx(b * c, m);
        H = Yx(b * c, k);
        return new Zx(a, {
            Je: e,
            Lc: b,
            nf: c,
            mf: d,
            df: r,
            se: t,
            ve: $x(g),
            we: $x(l),
            ue: $x(k),
            jf: f,
            hf: p,
            gf: x,
            ff: w,
            zc: h,
            yc: n,
            ne: m,
            me: H,
            pf: A
        })
    }

    function ay(a, b, c, d) {
        const e = Uf() && !(900 <= P(a.l).clientWidth);
        d = kb(d, f => ob(a.A, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.j.Je,
            pg_h: by(a.j.Lc),
            pg_w: by(a.j.nf),
            pg_hs: by(a.j.mf),
            c: by(a.j.df),
            aa_c: by(a.j.se),
            av_h: by(a.j.ve),
            av_w: by(a.j.we),
            av_a: by(a.j.ue),
            s: by(a.j.jf),
            all_s: by(a.j.hf),
            b: by(a.j.gf),
            all_b: by(a.j.ff),
            d: by(a.j.zc),
            all_d: by(a.j.yc),
            ard: by(a.j.ne),
            all_ard: by(a.j.me),
            pd_h: by(a.j.pf),
            dt: e ? "m" : "d"
        }
    }
    class Zx {
        constructor(a, b) {
            this.l = a;
            this.j = b;
            this.A = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function $x(a) {
        return sf.apply(null, kb(a, b => 0 < b)) || null
    }

    function Yx(a, b) {
        return 0 >= a ? null : rf.apply(null, b) / a
    }

    function Xx(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                0 < c && (b = Math.min(c, b))
            }
        return Infinity !== b ? b : null
    }

    function by(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function cy(a, b) {
        b = (P(b).clientHeight || 0) - Aj(b);
        let c = 0;
        for (let d = 0; d < a.length; d++) {
            const e = a[d].getBoundingClientRect();
            rr(e) && e.top <= b && (c += 1)
        }
        return c
    }

    function dy(a) {
        const b = {};
        var c = lr({
            Sa: !1,
            Qb: !1,
            Rb: !1,
            Sb: !1
        }, a).map(d => d.getBoundingClientRect()).filter(rr);
        b.ie = c.length;
        c = mr({
            Rb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(rr);
        b.Le = c.length;
        c = mr({
            Sb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(rr);
        b.kf = c.length;
        c = mr({
            Qb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(rr);
        b.le = c.length;
        c = (P(a).clientHeight || 0) - Aj(a);
        c = lr({
            Sa: !1
        }, a).map(d => d.getBoundingClientRect()).filter(rr).filter(Ca(ey, null, c));
        b.je = c.length;
        a = Wx(a);
        c = null != a.j.zc ? a.j.zc :
            null;
        null != c && (b.ef = c);
        a = null != a.j.yc ? a.j.yc : null;
        null != a && (b.ke = a);
        return b
    }

    function Vv(a, b, {
        Yb: c,
        sc: d,
        wc: e
    } = {}) {
        return Lp(997, () => fy(a, b, {
            Yb: c,
            sc: d,
            wc: e
        }), a.j)
    }

    function Wv(a, b, c, d) {
        var e = c.Na ? c.Na : a.D;
        const f = Yq(e, b.j.length);
        e = a.A.Yc ? e.j : void 0;
        const g = Aw(Bw(xw(zw(yw(ww(uw(vw(sw(tw(qw(c.types), a.U), c.Nc || []), a.O), c.Af || [])), f.Zb || void 0, e, b), c.minWidth, c.maxWidth)), f.Xa || void 0));
        a.N && g.j.push(new ew(a.N));
        b = 1;
        a.A.Vc ? b = 2 : a.Ga() && (b = 3);
        Cw(g, b);
        a.A.Pc && (g.B = !0);
        return Lp(995, () => Ix(a.l, g.build(), d), a.j)
    }

    function Yv(a, b) {
        const c = Tx(a.j);
        if (c) {
            const d = rl(a.J, b),
                e = vp(a.j.document, a.F, null, null, {}, d);
            e && (ap(e.Ra, c, 2, 256), Lp(996, () => gy(a, e, d), a.j))
        }
    }

    function hy(a) {
        return a.G ? a.G : a.G = a.j.google_ama_state
    }

    function fy(a, b, {
        Yb: c,
        sc: d,
        wc: e
    } = {}) {
        const f = b.V;
        if (f.C) return !1;
        var g = b.Z();
        if (!Mx(a.j, f.l(), g, a.B)) return !1;
        c = null == c ? null : new sl(null, {
            google_max_responsive_height: c
        });
        g = tl(y(f.mc, 2) || 0);
        const h = ul(f.G),
            l = iy(a, f),
            k = rl(a.J, f.O ? f.O.j(b.X) : null, c, d || null, g, h, l),
            m = b.fill(a.F, k);
        if (e && !jy(a, m, k) || !Lp(996, () => gy(a, m, k), a.j)) return !1;
        fj(9, [f.G, f.Ta]);
        a.Ga() && ox(O(tx), b);
        return !0
    }

    function iy(a, b) {
        return al(cl(mq(b).map(vl), () => {
            a.C.push(18)
        }))
    }

    function jy(a, b, c) {
        if (!b) return !1;
        var d = b.qa,
            e = d.style.width;
        d.style.width = "100%";
        var f = d.offsetWidth;
        d.style.width = e;
        d = a.j;
        e = b.qa;
        c = c && c.rb() || {};
        if (d !== d.top) var g = $f(d) ? 3 : 16;
        else if (488 > P(d).clientWidth)
            if (d.innerHeight >= d.innerWidth)
                if (g = P(d).clientWidth, !g || .3 < (g - f) / g) g = 6;
                else {
                    if (g = "true" != c.google_full_width_responsive) b: {
                        var h = e.parentElement;
                        for (g = P(d).clientWidth; h; h = h.parentElement) {
                            const l = cg(h, d);
                            if (!l) continue;
                            const k = ng(l.width);
                            if (k && !(k >= g) && "visible" != l.overflow) {
                                g = !0;
                                break b
                            }
                        }
                        g = !1
                    }
                    g = g ? 7 : !0
                }
        else g = 5;
        else g = 4;
        if (!0 !== g) f = g;
        else {
            if (!(c = "true" == c.google_full_width_responsive)) a: {
                do
                    if ((c = cg(e, d)) && "fixed" == c.position) {
                        c = !1;
                        break a
                    }
                while (e = e.parentElement);
                c = !0
            }
            c ? (d = P(d).clientWidth, f = d - f, f = d && 0 <= f ? !0 : d ? -10 > f ? 11 : 0 > f ? 14 : 12 : 10) : f = 9
        }
        if (f) {
            a = a.j;
            b = b.qa;
            if (f = rp(a, b)) b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none", b.style.borderSpacing = b.style.padding = "0", pp(b, f, "0px"), b.style.width = P(a).clientWidth + "px", sp(a, b, f), b.style.zIndex = 30;
            return !0
        }
        Yo(b.Ra);
        return !1
    }

    function gy(a, b, c) {
        if (!b) return !1;
        try {
            zp(a.j, b.qa, c)
        } catch (d) {
            return Yo(b.Ra), a.C.push(6), !1
        }
        return !0
    }
    class ky {
        constructor(a, b, c, d, e = {}, f = []) {
            this.l = a;
            this.F = b;
            this.j = c;
            this.D = d.Na;
            this.U = d.nb || [];
            this.J = d.Me || null;
            this.O = d.Ie || [];
            this.N = d.tc || [];
            this.A = e;
            this.B = !1;
            this.L = [];
            this.C = [];
            this.I = this.G = void 0;
            this.W = f
        }
        T() {
            return this.j
        }
        ua(a) {
            this.L.push(a)
        }
        Ga() {
            var a;
            let b;
            if (0 == (null != (b = null == (a = this.l.l.j) ? void 0 : [...Ic(a.j, 1)].length) ? b : 0)) return !1;
            if (0 == (U(ko) || 0)) return !0;
            if (void 0 === this.I) {
                const c = Cw(xw(ww(qw([0, 1, 2]))), 1).build();
                a = Lp(995, () => Ix(this.l, c), this.j);
                let d;
                this.I = (null == (d = this.l.l.j) ?
                    void 0 : Ax(d, a)) || !1
            }
            return this.I
        }
        Gc() {
            return !!this.A.Od
        }
        Wb() {
            return !Ux(this.j)
        }
    }
    const ey = (a, b) => b.top <= a;

    function ly(a, b, c, d, e, f = 0, g = 0) {
        this.Da = a;
        this.jc = f;
        this.ic = g;
        this.errors = b;
        this.La = c;
        this.j = d;
        this.l = e
    };
    var my = (a, {
        Wb: b = !1,
        Gc: c = !1,
        Cf: d = !1,
        Ga: e = !1
    } = {}) => {
        const f = [];
        d && f.push(9);
        if (e) {
            a.includes(4) && !c && b && f.push(8);
            a.includes(1) && f.push(1);
            d = a.includes(3);
            e = a.includes(2) && !T(Tn);
            const g = a.includes(1);
            (d || e || g) && f.push(10)
        } else a.includes(3) && f.push(6), a.includes(4) && !c && b && f.push(8), a.includes(1) && f.push(1, 5), a.includes(2) && !T(Tn) && f.push(7);
        a.includes(4) && c && b && f.push(8);
        return f
    };

    function ny(a, b, c) {
        a = my(a, {
            Wb: b.Wb(),
            Gc: b.Gc(),
            Cf: !!b.A.Bc,
            Ga: b.Ga()
        });
        return new oy(a, b, c)
    }

    function py(a, b) {
        const c = Sv[b];
        return c ? Lp(998, () => c(a.j), a.C) : (a.j.ua(12), !0)
    }
    class oy {
        constructor(a, b, c) {
            this.B = a.slice(0);
            this.l = a.slice(0);
            this.A = pb(this.l, 1);
            this.j = b;
            this.C = c
        }
    };
    const qy = class {
        constructor(a) {
            this.j = a;
            this.exception = void 0
        }
    };
    class ry {
        j() {
            return new sl([], {
                google_reactive_ad_format: 40,
                google_tag_origin: "qs"
            })
        }
    };
    class sy {
        j() {
            return new sl(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function ty(a) {
        return bn(a.j.document).map(b => {
            const c = new vq(b, 3);
            b = new Wp(Bp(a.j, b));
            return new $p(c, b, a.l, !1, 0, [], null, a.j, null)
        })
    }
    class uy {
        constructor(a) {
            var b = new sy;
            this.j = a;
            this.l = b || null
        }
    };
    const vy = {
        Uc: "10px",
        vc: "10px"
    };

    function wy(a) {
        return Jj(a.j.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new $p(new vq(b, 1), new Up(vy), a.l, !1, 0, [], null, a.j, null))
    }
    class xy {
        constructor(a, b) {
            this.j = a;
            this.l = b || null
        }
    };

    function yy(a, b) {
        return null == a ? b + "ShouldNotBeNull" : 0 == a ? b + "ShouldNotBeZero" : -1 > a ? b + "ShouldNotBeLessMinusOne" : null
    }

    function zy(a, b, c) {
        const d = yy(c.Ob, "gapsMeasurementWindow") || yy(c.pb, "gapsPerMeasurementWindow") || yy(c.vb, "maxGapsToReport");
        return null != d ? Zk(d) : c.bd || -1 != c.pb || -1 != c.vb ? Xk(new Ay(a, b, c)) : Zk("ShouldHaveLimits")
    }

    function By(a) {
        return hy(a.A) && hy(a.A).placed || []
    }

    function Cy(a) {
        return By(a).map(b => Kk(Ik(b.element, a.j)))
    }

    function Dy(a) {
        return By(a).map(b => b.index)
    }

    function Ey(a, b) {
        const c = b.V;
        return !a.D && c.B && Fc(c.B, 8) && 1 == y(c.B, 8) ? [] : c.C ? (c.U || []).map(d => Kk(Ik(d, a.j))) : [Kk(new Jk(b.X.j, 0))]
    }

    function Fy(a) {
        a.sort((e, f) => e.j - f.j);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.j;
            d = d.j + d.l;
            f <= c ? c = Math.max(c, d) : (b.push(new Jk(c, f - c)), c = d)
        }
        return b
    }

    function Gy(a, b) {
        b = b.map(c => {
            var d = new Cv;
            d = z(d, 1, c.j);
            c = c.getHeight();
            return z(d, 2, c)
        });
        return zv(yv(new Bv, a), b)
    }

    function Hy(a) {
        const b = F(a, Cv, 2).map(c => `G${C(c,1,0)}~${c.getHeight()}`);
        return `W${C(a,1,0)}${b.join("")}`
    }

    function Iy(a, b) {
        const c = [];
        let d = 0;
        for (const e of Mj(b)) {
            const f = b.get(e);
            f.sort((g, h) => h.getHeight() - g.getHeight());
            a.I || f.splice(a.C, f.length);
            !a.F && d + f.length > a.l && f.splice(a.l - d, f.length);
            c.push(Gy(e, f));
            d += f.length;
            if (!a.F && d >= a.l) break
        }
        return c
    }

    function Jy(a) {
        const b = F(a, Bv, 5).map(c => Hy(c));
        return `M${C(a,1,0)}H${C(a,2,0)}C${C(a,3,0)}B${Number(!!Kc(a,4))}${b.join("")}`
    }

    function Ky(a) {
        var b = Eq(a.A.l.j.j.slice(0), a.j),
            c = Cy(a),
            d = new Pj(Dy(a));
        for (var e = 0; e < b.length; ++e)
            if (!d.contains(e)) {
                var f = Ey(a, b[e]);
                c.push(...f)
            }
        c.push(new Jk(0, 0));
        c.push(Kk(new Jk(P(a.j).scrollHeight, 0)));
        b = Fy(c);
        c = new Oj;
        for (d = 0; d < b.length; ++d) e = b[d], f = a.G ? 0 : Math.floor(e.j / a.B), Kj(c, f) || c.set(f, []), c.get(f).push(e);
        b = Iy(a, c);
        c = new xv;
        c = z(c, 1, a.l);
        c = z(c, 2, a.B);
        c = z(c, 3, a.C);
        a = z(c, 4, a.D);
        return Sc(a, 5, b)
    }

    function Ly(a) {
        a = Ky(a);
        return Jy(a)
    }
    var Ay = class {
        constructor(a, b, c) {
            this.G = -1 == c.Ob;
            this.B = c.Ob;
            this.I = -1 == c.pb;
            this.C = c.pb;
            this.F = -1 == c.vb;
            this.l = c.vb;
            this.D = c.yd;
            this.A = b;
            this.j = a
        }
    };

    function My(a) {
        var b = new Ny;
        return z(b, 1, a)
    }
    var Ny = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var Oy = class extends K {
        constructor() {
            super(void 0)
        }
    };

    function Py(a) {
        var b = sx();
        Qc(a, 1, b)
    }

    function Qy(a, b) {
        return Sc(a, 3, b)
    }

    function Ry(a, b) {
        Sc(a, 4, b)
    }

    function Sy(a, b) {
        var c = Ny;
        uc(a);
        const d = Pc(a, c, 4, void 0, !1);
        b = null != b ? b : new c;
        c = Hc(a, 4, 2);
        d.push(b);
        c.push(b.M);
        if (Ka !== Ka) throw Error("requires a valid immutable API token");
        mc(b.M) && pc(c, !1);
        return a
    }

    function Ty(a, b) {
        return Sc(a, 5, b)
    }
    var Vy = class extends K {
            constructor() {
                super(void 0, -1, Uy)
            }
            I(a) {
                return z(this, 8, a)
            }
        },
        Uy = [3, 4, 5, 6];
    const Wy = a => {
            const b = /[a-zA-Z0-9._~-]/,
                c = /%[89a-zA-Z]./;
            return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
                if (!d.match(c)) {
                    const e = decodeURIComponent(d);
                    if (e.match(b)) return e
                }
                return d.toUpperCase()
            })
        },
        Xy = a => {
            let b = "";
            const c = /[/%?&=]/;
            for (let d = 0; d < a.length; ++d) {
                const e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        };
    var Yy = (a, b) => {
        a = Ic(a, 2);
        if (!a) return !1;
        for (let c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    };
    const $y = (a, b) => {
            a = Xy(Wy(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
            const c = gg(a),
                d = Zy(a);
            return b.find(e => {
                const f = Gc(e, 7) ? y(E(e, Dm, 7), 1) : y(e, 1);
                e = Gc(e, 7) ? y(E(e, Dm, 7), 2) : 2;
                if ("number" !== typeof f) return !1;
                switch (e) {
                    case 1:
                        return f == c;
                    case 2:
                        return d[f] || !1
                }
                return !1
            }) || null
        },
        Zy = a => {
            const b = {};
            for (;;) {
                b[gg(a)] = !0;
                if (!a) return b;
                a = a.substring(0, a.lastIndexOf("/"))
            }
        };
    const az = {
        google_ad_channel: !0,
        google_ad_host: !0
    };
    var bz = (a, b) => {
            a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
            Qi("ama", b, .01)
        },
        cz = a => {
            const b = {};
            eg(az, (c, d) => {
                d in a && (b[d] = a[d])
            });
            return b
        };
    var dz = a => {
        try {
            try {
                a.localStorage.removeItem("google_ama_config")
            } catch (b) {
                bz(a, {
                    lserr: 1
                })
            }
        } catch (b) {
            bz(a, {
                lserr: 1
            })
        }
    };

    function ez(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function fz(a, b) {
        a = ez(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        const c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    };
    var gz = class extends K {
            constructor() {
                super(void 0)
            }
            bb(a) {
                return z(this, 2, a)
            }
        },
        hz = [4, 5];

    function iz() {
        if (jz) return jz;
        const a = Ug() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? jz = b : a.google_persistent_state_async = jz = new kz
    }

    function W(a, b, c) {
        b = lz[b] || "google_ps_" + b;
        a = a.S;
        const d = a[b];
        return void 0 === d ? a[b] = c : d
    }

    function mz(a, b, c) {
        return a.S[lz[b] || "google_ps_" + b] = c
    }

    function nz(a, b) {
        return mz(a, b, W(a, b, 0) + 1)
    }

    function oz() {
        var a = iz();
        return W(a, 20, {})
    }

    function pz() {
        var a = iz();
        const b = W(a, 31, !1);
        b || mz(a, 31, !0);
        return !b
    }

    function qz() {
        var a = iz();
        return W(a, 26)
    }

    function rz() {
        var a = iz();
        return W(a, 28, [])
    }
    class kz {
        constructor() {
            this.S = {}
        }
    }
    var jz = null;
    const lz = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };
    var sz = {
            google_ad_block: "ad_block",
            google_ad_client: "client",
            google_ad_output: "output",
            google_ad_callback: "callback",
            google_ad_height: "h",
            google_ad_resize: "twa",
            google_ad_slot: "slotname",
            google_ad_unit_key: "adk",
            google_ad_dom_fingerprint: "adf",
            google_placement_id: "pi",
            google_ad_width: "w",
            google_captcha_token: "captok",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_ctr_threshold: "ctr_t",
            google_cust_criteria: "cust_params",
            gfwrnwer: "fwrn",
            gfwrnher: "fwrnh",
            google_image_size: "image_size",
            google_last_modified_time: "lmt",
            google_loeid: "loeid",
            google_max_num_ads: "num_ads",
            google_max_radlink_len: "max_radlink_len",
            google_mtl: "mtl",
            google_native_settings_key: "nsk",
            google_enable_content_recommendations: "ecr",
            google_num_radlinks: "num_radlinks",
            google_num_radlinks_per_unit: "num_radlinks_per_unit",
            google_pucrd: "pucrd",
            google_reactive_plaf: "plaf",
            google_reactive_plat: "plat",
            google_reactive_fba: "fba",
            google_reactive_sra_channels: "plach",
            google_responsive_auto_format: "rafmt",
            armr: "armr",
            google_plas: "plas",
            google_rl_dest_url: "rl_dest_url",
            google_rl_filtering: "rl_filtering",
            google_rl_mode: "rl_mode",
            google_rt: "rt",
            google_video_play_muted: "vpmute",
            google_source_type: "src_type",
            google_restrict_data_processing: "rdp",
            google_tag_for_child_directed_treatment: "tfcd",
            google_tag_for_under_age_of_consent: "tfua",
            google_tag_origin: "to",
            google_ad_semantic_area: "sem",
            google_tfs: "tfs",
            google_package: "pwprc",
            google_tag_partner: "tp",
            fra: "fpla",
            google_ml_rank: "mlr",
            google_apsail: "psa",
            google_ad_channel: "channel",
            google_ad_type: "ad_type",
            google_ad_format: "format",
            google_color_bg: "color_bg",
            google_color_border: "color_border",
            google_color_link: "color_link",
            google_color_text: "color_text",
            google_color_url: "color_url",
            google_page_url: "url",
            google_allow_expandable_ads: "ea",
            google_ad_section: "region",
            google_cpm: "cpm",
            google_encoding: "oe",
            google_safe: "adsafe",
            google_font_face: "f",
            google_font_size: "fs",
            google_hints: "hints",
            google_ad_host: "host",
            google_ad_host_channel: "h_ch",
            google_ad_host_tier_id: "ht_id",
            google_kw_type: "kw_type",
            google_kw: "kw",
            google_contents: "contents",
            google_targeting: "targeting",
            google_adtest: "adtest",
            google_alternate_color: "alt_color",
            google_alternate_ad_url: "alternate_ad_url",
            google_cust_age: "cust_age",
            google_cust_ch: "cust_ch",
            google_cust_gender: "cust_gender",
            google_cust_interests: "cust_interests",
            google_cust_job: "cust_job",
            google_cust_l: "cust_l",
            google_cust_lh: "cust_lh",
            google_cust_u_url: "cust_u_url",
            google_cust_id: "cust_id",
            google_language: "hl",
            google_city: "gcs",
            google_country: "gl",
            google_region: "gr",
            google_content_recommendation_ad_positions: "ad_pos",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_content_recommendation_ui_type: "crui",
            google_content_recommendation_use_square_imgs: "cr_sq_img",
            google_color_line: "color_line",
            google_disable_video_autoplay: "disable_video_autoplay",
            google_full_width_responsive_allowed: "fwr",
            google_full_width_responsive: "fwrattr",
            efwr: "efwr",
            google_pgb_reactive: "pra",
            google_resizing_allowed: "rs",
            google_resizing_height: "rh",
            google_resizing_width: "rw",
            rpe: "rpe",
            google_responsive_formats: "resp_fmts",
            google_safe_for_responsive_override: "sfro",
            google_video_doc_id: "video_doc_id",
            google_video_product_type: "video_product_type",
            google_webgl_support: "wgl",
            easpf: "easpf",
            easpi: "easpi",
            easpa: "easai",
            asntp: "asntp",
            asntpv: "asntpv",
            asntpl: "asntpl",
            asntpm: "asntpm",
            asntpc: "asntpc",
            asna: "asna",
            asnd: "asnd",
            asnp: "asnp",
            asns: "asns",
            asmat: "asmat",
            asptt: "asptt"
        },
        tz = a => (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) &&
        RegExp("google_ad_client").test(a[1]) ? a[1] : null,
        uz = a => {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
            return null
        },
        vz = a => {
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
                        const b = a.match(/^(?:'(.*)'|"(.*)")$/);
                        if (b) return b[1] || b[2] || "";
                        if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                            const c =
                                parseFloat(a);
                            return c === c ? c : void 0
                        }
                    } catch (b) {}
            }
        };
    const wz = new WeakMap;

    function xz() {
        var a = yz,
            b = zz;
        const c = xa(a),
            d = ([, ...f]) => b(c, f),
            e = ([f, ...g]) => a.apply(f, g);
        return function(...f) {
            const g = this || u;
            let h = wz.get(g);
            h || (h = {}, wz.set(g, h));
            return zb(h, [this, ...f], e, d)
        }
    }

    function zz(a, b) {
        a = [a];
        for (let c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
        return a.join("\v")
    };

    function yz(a) {
        if (a.google_ad_client) return String(a.google_ad_client);
        var b, c, d;
        let e, f;
        if (null != (e = null != (d = null == (b = ez(a).head_tag_slot_vars) ? void 0 : b.google_ad_client) ? d : null == (c = a.document.querySelector(".adsbygoogle[data-ad-client]")) ? void 0 : c.getAttribute("data-ad-client"))) b = e;
        else {
            b: {
                b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube",
                    "i").test(a) || /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !yh() ? tz : uz;
                for (c = b.length - 1; 0 <= c; c--)
                    if (d = b[c], !d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) {
                        b = d;
                        break b
                    }
                b = null
            }
            if (b) {
                a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                for (c = {}; d = a.exec(b);) c[d[1]] = vz(d[2]);
                b = c;
                b = b.google_ad_client ? b.google_ad_client : ""
            } else b = ""
        }
        return null != (f = b) ? f : ""
    };

    function Az(a, b) {
        var c = new gz;
        c = z(c, 1, a.B).bb(a.webPropertyCode);
        c = z(c, 3, a.l);
        b = Rc(c, 5, hz, b);
        a.j && !a.A.has(2) && (a.A.add(2), ui(a.xa, b))
    }
    var Bz = class {
        constructor(a) {
            this.A = new Set;
            this.win = Ug() || window;
            this.l = U(gn);
            var b = 0 < this.l && dg() < 1 / this.l;
            this.B = (this.j = !!W(iz(), 30, b)) ? Eg(this.win) : 0;
            this.j ? (b = this.win, b = T(jo) ? xz()(b) : yz(b)) : b = "";
            this.webPropertyCode = b;
            this.xa = null != a ? a : new Ai
        }
    };
    var Dz = (a, b, c, d, e, f, g = null, h = null, l) => {
            Cz(a, new Ym(a), b, c, d, e, f, g, new Mk(a), h, l)
        },
        Cz = (a, b, c, d, e, f, g, h = null, l = null, k = null, m) => {
            if (c)
                if (d) {
                    var n = $t(d, e);
                    try {
                        const p = new Ez(a, b, c, d, e, n, f, g, h, l, k, m);
                        Lp(990, () => Fz(p), a)
                    } catch (p) {
                        ej() && fj(15, [p]), Xm(b, Mm, Um(Jw(Iw((new Kw(0)).bb(c), d), n).ua(1), p)), Az(O(Bz), Sy(new Vy, My(1)))
                    }
                } else Xm(b, Mm, (new Kw(0)).bb(c).ua(8)), Az(O(Bz), Sy(new Vy, My(8)));
            else Xm(b, Mm, (new Kw(0)).ua(9)), Az(O(Bz), Sy(new Vy, My(9)))
        };

    function Fz(a) {
        a.I.forEach(b => {
            switch (b) {
                case 0:
                    Lp(991, () => Gz(a), a.l);
                    break;
                case 1:
                    Xt(new Zt(a.l, a.j, a.C));
                    break;
                case 5:
                    rt(new tt(a.l, a.j));
                    break;
                case 2:
                    Hz(a);
                    break;
                case 3:
                    Iz(a);
                    break;
                case 4:
                    Jz(a);
                    break;
                case 6:
                    a.runStorify()
            }
        })
    }

    function Gz(a) {
        Kz(a);
        if (tm(a.j) && 1 === y(tm(a.j), 1)) {
            var b = E(tm(a.j), Fm, 6);
            b && 2 === y(b, 1) && (Ap(a.l), a.F = "b")
        }
        var c = a.B.rf;
        b = Vq(a.l, c);
        if (a.B.da && Gc(a.B.da, 10)) {
            var d = Jc(E(a.B.da, Em, 10), 1);
            null !== d && void 0 !== d && (b = Nq(a.l, d, c))
        }
        Gc(a.j, 26) && (b = Zq(b, E(a.j, Hm, 26), a.l));
        c = a.B.da ? Ic(a.B.da, 6) : [];
        d = a.B.da ? F(a.B.da, Rl, 5) : [];
        const e = a.B.da ? Ic(a.B.da, 2) : [],
            f = Lp(993, () => {
                var l = a.j,
                    k = F(l, dm, 1);
                const m = a.B.da && Yy(a.B.da, 1) ? "text_image" : "text";
                var n = new ry;
                let p = Zp(k, a.l, {
                    ye: n,
                    Ye: new Xp(m)
                });
                k.length != p.length && a.J.push(13);
                p = p.concat(wy(new xy(a.l, n)));
                k = 0;
                n = T($n);
                let r = !1;
                if (tm(l) && 1 === y(tm(l), 1)) {
                    var t = E(tm(l), Fm, 6);
                    t && (k = y(t, 2) || 0, 1 === y(t, 1) && (r = !0))
                }
                var x, w;
                let A;
                t = (null == (x = E(l, km, 24)) ? void 0 : null == (w = E(x, om, 3)) ? void 0 : null == (A = E(w, pm, 3)) ? void 0 : Vc(A, qm, 2, rm)) || !1;
                if (n || r || t)
                    if (x = ty(new uy(a.l)), w = O(tx), p = p.concat(x), w.J = !0, w.D = x.length, "n" === a.F) {
                        let D, H;
                        a.F = (null == (D = E(l, km, 24)) ? 0 : null == (H = Ic(D, 1)) ? 0 : H.length) ? "o" : "p"
                    }
                p = p.concat(vv(l, m, a.l));
                l = E(l, km, 24);
                return new Lx(p, a.l, k, l)
            }, a.l);
        a.A = new ky(f, a.C, a.l, {
            Na: b,
            Me: a.W,
            nb: a.B.nb,
            Ie: c,
            tc: d
        }, Lz(a), e);
        let g, h;
        (null == (g = hy(a.A)) ? 0 : null == (h = g.optimization) ? 0 : h.ablatingThisPageview) && !a.A.Ga() && (Ap(a.l), O(tx).C = !0, a.F = "f");
        a.G = ny(e, a.A, a.l);
        Lp(992, () => {
            var l = a.G;
            const k = new Hj;
            for (l.j.B = !0; 0 < l.l.length;) py(l, l.l[0]) || l.j.ua(5), l.l.shift();
            try {
                var m = k.resolve,
                    n = l.j.l.j.filter(aq).j.length,
                    p = l.j.L.slice(0),
                    r = l.j;
                let w;
                var t = [...r.C, ...((null == (w = r.l.l.j) ? void 0 : [...w.l]) || [])];
                var x = new ly(n, p, t, l.j.l.j.j.length, l.j.l.B.j, l.j.l.j.filter(aq).filter(bq).j.length, l.j.l.j.filter(bq).j.length);
                m.call(k, new qy(x))
            } catch (w) {
                l = w, Ej(k), k.j = 2, k.A = l, Gj(k.l)
            }
            return k.l
        }, a.l).then(Lp(994, () => a.ya.bind(a), a.l), a.U.bind(a))
    }

    function Hz(a) {
        const b = E(a.j, fm, 18);
        b && cv(new dv(a.l, new uv(a.l, a.C), b, new Dt(a.l), F(a.j, dm, 1)))
    }

    function Iz(a) {
        bl(Bs(a.l, a.D, a.j, a.ga, {
            google_ad_client: a.C
        }), b => Ds(b))
    }

    function Jz(a) {
        const b = E(a.j, hm, 29);
        if (b) {
            var c, d;
            Mz(a.pa, {
                win: a.l,
                webPropertyCode: a.C,
                rd: b,
                dd: null != (d = null == (c = E(a.j, Xl, 6)) ? void 0 : F(c, Yl, 1)) ? d : []
            })
        }
    }

    function Kz(a) {
        Nz(a) && Oz(a, "p", Pz(a))
    }

    function Lz(a) {
        const b = T(ao);
        if (!vm(a.j)) return {
            Pc: b,
            Vc: !1,
            md: !1,
            Wd: !1,
            od: !1,
            Od: !1,
            qf: 0,
            Id: 0,
            Yc: Qz(a),
            Bc: a.O
        };
        const c = vm(a.j);
        let d = Jc(c, 8);
        return {
            Pc: b || Kc(c, 14, !1),
            Vc: Kc(c, 2, !1),
            md: Kc(c, 3, !1),
            Wd: Kc(c, 4, !1),
            od: Kc(c, 5, !1),
            Od: Kc(c, 6, !1),
            qf: null == d ? 0 : d,
            Id: y(c, 10),
            Yc: Qz(a),
            Bc: a.O
        }
    }

    function Qz(a) {
        return a.B.da && Gc(a.B.da, 10) ? .5 <= (Jc(E(a.B.da, Em, 10), 1) || 0) : !0
    }

    function Rz(a, b) {
        for (var c = Tm(Tm(new Kw(b.Da), b.errors), a.J), d = b.La, e = 0; e < d.length; e++) a: {
            for (var f = d[e], g = 0; g < c.D.length; g++)
                if (c.D[g] == f) break a;c.D.push(f)
        }
        c.j.pp = b.ic;
        c.j.ppp = b.jc;
        c.j.ppos = b.placementPositionDiffs;
        c.j.eatf = b.Lb;
        c.j.eatfAbg = b.Mb;
        c.j.reatf = b.sb;
        c.j.a = a.G.B.slice(0).join(",");
        c = Jw(Iw(c, a.j), a.I).bb(a.C);
        if (d = b.Fb) c.j.as_count = d.ie, c.j.d_count = d.Le, c.j.ng_count = d.kf, c.j.am_count = d.le, c.j.atf_count = d.je, c.j.mdns = Lw(d.ef), c.j.alldns = Lw(d.ke);
        c = c.I(b.wb);
        if (d = b.Ne) {
            e = [];
            for (var h of Mj(d)) 0 <
                d.get(h).length && (f = d.get(h)[0], e.push("(" + [h, f.te, f.Jf].join() + ")"));
            c.j.fd = e.join(",")
        }
        h = b.Lc;
        null != h && (c.j.pgh = h);
        c.j.abl = b.vd;
        c.j.rr = a.F;
        void 0 !== b.exception && Um(c, b.exception).ua(1);
        return c
    }

    function Sz(a, b) {
        var c = Rz(a, b);
        Xm(a.D, 0 < b.errors.length || 0 < a.J.length || void 0 !== b.exception ? 0 < a.N ? Om : Mm : 0 < a.N ? Nm : Lm, c);
        if (E(a.j, km, 24)) {
            if (null != (b = a.A.l.l.j)) {
                const p = O(tx);
                var d = [...Ic(b.j, 1)];
                p.B = d;
                var e;
                let r;
                d = !!(null == (e = E(b.j, om, 3)) ? 0 : null == (r = E(e, pm, 3)) ? 0 : Vc(r, qm, 2, rm));
                p.G = d;
                e = new Oj;
                var f, g;
                for (var h of null != (g = null == (f = E(b.j, mm, 2)) ? void 0 : F(f, nm, 1)) ? g : []) e.set(J(h, 1), C(h, 2, 0));
                p.l = e
            }
            h = hy(a.A);
            f = O(tx);
            var l;
            g = !!(null == h ? 0 : null == (l = h.optimization) ? 0 : l.ablationFromStorage);
            f.A = g;
            let n;
            if (null ==
                h ? 0 : null == (n = h.optimization) ? 0 : n.ablatingThisPageview) f.F = !0;
            var k;
            l = !!(null == h ? 0 : null == (k = h.optimization) ? 0 : k.availableAbg);
            f.L = l;
            var m;
            k = O(tx);
            c = new Xw(c);
            k.B ? (l = null != (m = k.B) ? m : [], c.l.sl = l.join("~"), c.l.ab = Nw(k.F), c.l.rr = Nw(k.J), c.l.oab = Nw(k.G), null != k.A && (c.l.sab = Nw(k.A)), k.C && (c.l.fb = Nw(k.C)), c.l.ls = Nw(k.L), Mw(c, k.l.qb()), null != k.D && (c.l.rp = Nw(k.D)), rx(k, c)) : (m = c, k = "irr".replace(RegExp("~", "g"), ""), m.l.e = m.l.e ? m.l.e + ("~" + k) : k);
            m = c;
            Xm(a.D, Rm, m)
        }
    }

    function Tz(a, b) {
        const c = O(Bz);
        if (c.j) {
            var d = new Vy,
                e = b.La.filter(f => null !== f);
            b = a.J.concat(b.errors, b.exception ? [1] : []).filter(f => null !== f);
            Ry(Ty(Qy(d, a.G.B.slice(0).map(f => {
                var g = new Fv;
                return z(g, 1, f)
            })), e.map(f => {
                var g = new Oy;
                return z(g, 1, f)
            })), b.map(f => My(f)));
            E(a.j, km, 24) && Py(d);
            Az(c, d)
        }
    }

    function Uz(a) {
        return tm(a.j) && 1 === y(tm(a.j), 1) ? !(E(tm(a.j), Fm, 6) && 1 <= (y(E(tm(a.j), Fm, 6), 3) || 0)) : !1
    }

    function Vz(a) {
        if (Uz(a)) {
            a = a.A;
            var b = mr({
                Rb: !0,
                Sb: !0
            }, a.j);
            a = 0 < cy(b, a.j)
        } else a = a.A.j, b = lr({
            Sa: !1,
            Qb: !1
        }, a), a = 0 < cy(b, a);
        return a
    }

    function Wz(a) {
        if (Nz(a)) {
            var b = Pz(a);
            a.L.init(null == b ? void 0 : b, () => {
                Oz(a, "s", b)
            });
            a.L.addListener(c => {
                Oz(a, "d", Pz(a), c);
                a.L.va();
                let d, e;
                if (null == (d = a.j) ? 0 : null == (e = vm(d)) ? 0 : Kc(e, 21, !1)) {
                    let f, g;
                    null != (f = a.j) && null != (g = vm(f)) && z(g, 18, !1);
                    try {
                        let h;
                        if (null == (h = a.I) ? 0 : h.includes(0)) a.N++, Gz(a), Oz(a, "r", Pz(a), c)
                    } catch (h) {
                        Oz(a, "f", Pz(a), c), Xm(a.D, Om, Um(Jw(Iw((new Kw(0)).bb(a.C), a.j), a.I).ua(1), h))
                    }
                }
            })
        }
    }

    function Xz(a, b, c) {
        {
            var d = hy(a.A);
            const f = b.j,
                g = f.j,
                h = f.ic;
            let l = f.Da,
                k = f.jc,
                m = f.errors.slice(),
                n = f.La.slice(),
                p = b.exception;
            let r;
            var e = null != (r = ez(a.l).had_ads_ablation) ? r : !1;
            d ? (d.numAutoAdsPlaced ? l += d.numAutoAdsPlaced : a.G.A && n.push(13), void 0 !== d.exception && (p = d.exception), d.numPostPlacementsPlaced && (k += d.numPostPlacementsPlaced), c = {
                Da: l,
                ic: h,
                jc: k,
                wb: g,
                errors: f.errors.slice(),
                La: n,
                exception: p,
                sb: c,
                Lb: !!d.eatf,
                Mb: !!d.eatfAbg,
                vd: e
            }) : (n.push(12), a.G.A && n.push(13), c = {
                Da: l,
                ic: h,
                jc: k,
                wb: g,
                errors: m,
                La: n,
                exception: p,
                sb: c,
                Lb: !1,
                Mb: !1,
                vd: e
            })
        }
        c.Fb = dy(a.A.j);
        if (b = b.j.l) c.Ne = b;
        c.Lc = P(a.l).scrollHeight;
        if (ej()) {
            d = a.A.l.j.j.slice(0);
            b = [];
            for (const f of d) {
                d = {};
                e = f.L;
                for (const g of Mj(e)) d[g] = e.get(g);
                d = {
                    anchorElement: dq(f),
                    position: f.l(),
                    clearBoth: f.J,
                    locationType: f.Ta,
                    placed: f.C,
                    placementProto: f.B ? f.B.toJSON() : null,
                    articleStructure: f.D ? f.D.toJSON() : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            fj(14, [{
                placementIdentifiers: b
            }, a.A.F, c.Fb])
        }
        return c
    }

    function Yz(a, b) {
        var c = a.A.j;
        c = c.googleSimulationState = c.googleSimulationState || {};
        c.amaConfigPlacementCount = b.wb;
        c.numAutoAdsPlaced = b.Da;
        c.hasAtfAd = b.sb;
        void 0 !== b.exception && (c.exception = b.exception);
        null != a.A && (a = zy(a.l, a.A, {
            Ob: -1,
            pb: -1,
            vb: -1,
            yd: !0,
            bd: !0
        }), null != a.j ? (c.placementPositionDiffs = Ly(a.j.value), b = Ky(a.j.value), a = new Dv, a = Rc(a, 2, Ev, b), c.placementPositionDiffsReport = ad(a)) : (b = a.l.message, c.placementPositionDiffs = "E" + b, a = new Dv, a = Nc(a, 1, Ev, b), c.placementPositionDiffsReport = ad(a)))
    }

    function Oz(a, b, c, d) {
        b = {
            r: b,
            pg_h: P(a.l).scrollHeight,
            su: a.l.location.hostname,
            d: void 0 == c ? -1 : c
        };
        void 0 !== d && (b.pg_hd = d);
        Wm(a.D, Qm, b)
    }

    function Nz(a) {
        let b, c, d;
        return null != (d = null == (b = a.j) ? void 0 : null == (c = vm(b)) ? void 0 : Kc(c, 18, !1)) ? d : !1
    }

    function Pz(a) {
        let b = null;
        vm(a.j) && Fc(vm(a.j), 19) && (b = y(vm(a.j), 19));
        return b
    }
    class Ez {
        constructor(a, b, c, d, e, f, g, h, l, k, m, n) {
            this.l = a;
            this.D = b;
            this.C = c;
            this.j = d;
            this.B = e;
            this.I = f;
            this.W = l || null;
            this.J = [];
            this.L = k;
            this.O = m;
            this.pa = g;
            this.Ma = h;
            this.N = 0;
            this.ga = n ? n : {
                url: a.location.href,
                Ab: void 0
            };
            this.F = "n"
        }
        runStorify() {
            const a = E(this.j, sm, 30);
            if (a) {
                var b, c, d = null != (c = null == (b = E(this.j, Xl, 6)) ? void 0 : F(b, Yl, 1)) ? c : [];
                this.Ma.runStorify(this.l, ad(a), this.C, d.map(e => ad(e)))
            }
        }
        ya(a) {
            try {
                T(Rn) && Hx(this.A.l);
                const b = Vz(this) || Uz(this) ? Vz(this) : void 0;
                Km({
                    Ac: b
                }, this.l);
                Wz(this);
                const c =
                    Xz(this, a, Vz(this));
                Gc(this.j, 25) && B(E(this.j, Gm, 25), 1) && Yz(this, c);
                Sz(this, c);
                Tz(this, c);
                Pi(753, () => {
                    if (T(Vn) && null != this.A) {
                        var d = zy(this.l, this.A, {
                                Ob: U(Zn),
                                pb: U(Yn),
                                vb: U(Wn),
                                yd: !0,
                                bd: !1
                            }),
                            e = qd(c);
                        null != d.j ? (d = Ly(d.j.value), e.placementPositionDiffs = d) : e.placementPositionDiffs = "E" + d.l.message;
                        e = Rz(this, e);
                        Xm(this.D, Pm, e)
                    }
                })()
            } catch (b) {
                this.U(b)
            }
        }
        U(a) {
            Sz(this, {
                Da: 0,
                wb: void 0,
                errors: [],
                La: [],
                exception: a,
                sb: void 0,
                Lb: void 0,
                Mb: void 0,
                Fb: void 0
            });
            Tz(this, {
                Da: 0,
                wb: void 0,
                errors: [],
                La: [],
                exception: a,
                sb: void 0,
                Lb: void 0,
                Mb: void 0,
                Fb: void 0
            })
        }
    };
    var Zz = class extends K {
        constructor(a) {
            super(a)
        }
    };

    function $z(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? $k(() => Yc(Zz, c)) : Xk(null)
    };

    function aA(a) {
        this.j = a || {
            cookie: ""
        }
    }
    q = aA.prototype;
    q.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        "object" === typeof c && (h = c.Fj, g = c.Df || !1, f = c.domain || void 0, e = c.path || void 0, d = c.Ad);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    };
    q.get = function(a, b) {
        const c = a + "=",
            d = (this.j.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = Oa(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    q.remove = function(a, b, c) {
        const d = void 0 !== this.get(a);
        this.set(a, "", {
            Ad: 0,
            path: b,
            domain: c
        });
        return d
    };
    q.isEmpty = function() {
        return !this.j.cookie
    };
    q.qb = function() {
        return this.j.cookie ? (this.j.cookie || "").split(";").length : 0
    };
    q.clear = function() {
        var a = (this.j.cookie || "").split(";");
        const b = [],
            c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = Oa(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
    };

    function bA(a, b = window) {
        if (B(a, 5)) try {
            return b.localStorage
        } catch (c) {}
        return null
    }

    function cA(a) {
        return "null" !== a.origin
    }

    function dA(a, b, c) {
        b = B(b, 5) && cA(c) ? c.document.cookie : null;
        return null === b ? null : (new aA({
            cookie: b
        })).get(a) || ""
    };

    function eA(a, b) {
        return z(a, 5, b)
    }
    var fA = class extends K {
        constructor() {
            super(void 0)
        }
    };
    var iA = ({
        win: a,
        Ub: b,
        wd: c = !1,
        xd: d = !1
    }) => {
        if (!gA({
                win: a,
                Ub: b,
                wd: c,
                xd: d
            })) return hA(a, eA(new fA, !0));
        (b = W(iz(), 24)) ? (b = eA(new fA, kv(b)), a = hA(a, b)) : a = new Yk(null, Error("tcunav"));
        return a
    };

    function gA({
        win: a,
        Ub: b,
        wd: c,
        xd: d
    }) {
        if (!(d = !d && ov(new sv(a)))) {
            if (c = !c) {
                if (b) {
                    a = $z(a);
                    if (null != a.j)
                        if ((a = a.j.value) && Fc(a, 1)) b: switch (a = y(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else Ri(806, a.l), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function hA(a, b) {
        return (a = bA(b, a)) ? Xk(a) : new Yk(null, Error("unav"))
    };
    var jA = class extends K {
        constructor(a) {
            super(a)
        }
    };
    class kA {
        constructor(a, b, c, d) {
            this.j = a;
            this.A = b;
            this.C = c;
            this.l = !1;
            this.B = d
        }
    };

    function Mz(a, {
        win: b,
        webPropertyCode: c,
        rd: d,
        dd: e
    }) {
        a = vs(8, b, a.j).then(f => f.runGallerify({
            win: b,
            webPropertyCode: c,
            serializedGallerifyConfig: ad(d),
            serializedArticleStructures: e.map(g => ad(g))
        }));
        Ni.Ha(927, a)
    }
    var lA = class {
        constructor(a) {
            this.j = a
        }
    };
    var mA = {
            Gg: "google_ads_preview",
            qh: "google_mc_lab",
            Hh: "google_anchor_debug",
            Gh: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            ci: "google_scr_debug",
            ei: "google_ia_debug_allow_onclick",
            zi: "googleads",
            ce: "google_pedestal_debug",
            Si: "google_responsive_slot_preview",
            Ri: "google_responsive_dummy_ad",
            zg: "google_auto_gallery",
            Bg: "google_auto_storify_swipeable",
            Ag: "google_auto_storify_scrollable"
        },
        nA = {
            google_bottom_anchor_debug: 1,
            google_anchor_debug: 2,
            google_ia_debug: 8,
            google_scr_debug: 9,
            googleads: 2,
            google_pedestal_debug: 30
        };

    function oA(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = pA(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function pA(a) {
        let b = "";
        eg(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    }

    function qA() {
        var a = u.location;
        let b = !1;
        eg(mA, c => {
            oA(a, c) && (b = !0)
        });
        return b
    }

    function rA(a, b) {
        switch (a) {
            case 1:
                return oA(b, "google_ia_debug");
            case 2:
                return oA(b, "google_bottom_anchor_debug");
            case 3:
                return oA(b, "google_anchor_debug") || oA(b, "googleads");
            case 4:
                return oA(b, "google_scr_debug")
        }
    };

    function sA({
        win: a,
        webPropertyCode: b,
        ob: c
    }) {
        if (oA(a.location, "google_auto_gallery")) {
            var d = new hm;
            var e = new im;
            e = z(e, 1, !0);
            d = Qc(d, 3, e);
            Mz(new lA(c), {
                win: a,
                webPropertyCode: b,
                rd: d,
                dd: []
            })
        }
    };
    var tA = "a".charCodeAt(),
        uA = pd(ij),
        vA = pd(jj);

    function wA(a, b) {
        if (a.j + b > a.l.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.l.substring(a.j, a.j + b);
        a.j += b;
        return parseInt(c, 2)
    }

    function xA(a) {
        return String.fromCharCode(tA + wA(a, 6)) + String.fromCharCode(tA + wA(a, 6))
    }

    function yA(a) {
        let b = wA(a, 12);
        const c = [];
        for (; b--;) {
            var d = !0 === !!wA(a, 1),
                e = wA(a, 16);
            if (d)
                for (d = wA(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function zA(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (wA(a, 1)) {
                const f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function AA(a) {
        const b = wA(a, 16);
        return !0 === !!wA(a, 1) ? (a = yA(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : zA(a, b)
    }
    class BA {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.l = a;
            this.j = 0
        }
    };
    var DA = (a, b) => {
        try {
            var c = Wb(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join("");
            const d = new BA(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.j += 78;
            c.cmpId = wA(d, 12);
            c.cmpVersion = wA(d, 12);
            d.j += 30;
            c.tcfPolicyVersion = wA(d, 6);
            c.isServiceSpecific = !!wA(d, 1);
            c.useNonStandardStacks = !!wA(d, 1);
            c.specialFeatureOptins = CA(zA(d, 12, vA), vA);
            c.purpose = {
                consents: CA(zA(d, 24, uA), uA),
                legitimateInterests: CA(zA(d, 24, uA), uA)
            };
            c.purposeOneTreatment = !!wA(d, 1);
            c.publisherCC = xA(d);
            c.vendor = {
                consents: CA(AA(d), b),
                legitimateInterests: CA(AA(d),
                    b)
            };
            return c
        } catch (d) {
            return null
        }
    };
    const CA = (a, b) => {
        const c = {};
        if (Array.isArray(b) && 0 !== b.length)
            for (const d of b) c[d] = -1 !== a.indexOf(d);
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var EA = class {
        constructor(a) {
            this.key = a;
            this.defaultValue = !1;
            this.valueType = "boolean"
        }
    };

    function FA(a) {
        GA || (GA = new HA);
        const b = GA.j[a.key];
        if ("proto" === a.valueType) {
            try {
                const c = JSON.parse(b);
                if (Array.isArray(c)) return c
            } catch (c) {}
            return a.defaultValue
        }
        return typeof b === typeof a.defaultValue ? b : a.defaultValue
    }
    var IA = class {
        constructor() {
            this.j = {}
        }
    };
    var JA = class extends K {
            constructor() {
                super(void 0)
            }
        },
        KA = class extends K {
            constructor() {
                super(void 0)
            }
        };
    var LA = class extends K {
            constructor() {
                super(void 0)
            }
        },
        MA = [11, 8, 12, 13, 15, 17, 19, 18, 20, 21, 22, 24, 25];
    var NA = class {};
    var PA = class extends K {
            constructor(a) {
                super(a, -1, OA)
            }
        },
        QA = class extends K {
            constructor(a) {
                super(a)
            }
        },
        RA = class extends K {
            constructor(a) {
                super(a)
            }
        },
        OA = [7];
    var SA = new EA("45368529"),
        TA = new EA("45369554");
    var HA = class extends IA {
            constructor() {
                super();
                var a = u.__fcexpdef || "";
                try {
                    const b = JSON.parse(a)[0];
                    a = "";
                    for (let c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
                    this.j = JSON.parse(a)
                } catch (b) {}
            }
        },
        GA;

    function UA(a) {
        return (a = VA(a)) ? E(a, QA, 4) : null
    }

    function VA(a) {
        if (a = (new aA(a)).get("FCCDCF", ""))
            if (FA(SA))
                if (a.startsWith("%")) try {
                    var b = decodeURIComponent(a)
                } catch (c) {
                    WA(1), b = null
                } else b = a;
                else b = a;
        else b = null;
        try {
            return b ? Yc(PA, b) : null
        } catch (c) {
            return WA(2), null
        }
    }

    function WA(a) {
        new NA;
        var b = new KA;
        a = z(b, 7, a);
        b = new JA;
        a = Qc(b, 1, a);
        b = new LA;
        Rc(b, 22, MA, a);
        FA(TA)
    };

    function XA(a) {
        a.__tcfapiPostMessageReady || YA(new ZA(a))
    }

    function YA(a) {
        a.l = b => {
            const c = "string" == typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.j.__tcfapi(e.command, e.version, (f, g) => {
                const h = {};
                h.__tcfapiReturn = "removeEventListener" === e.command ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f,
                    b.origin);
                return f
            }, e.parameter)
        };
        a.j.addEventListener("message", a.l);
        a.j.__tcfapiPostMessageReady = !0
    }
    var ZA = class {
        constructor(a) {
            this.j = a;
            this.l = null
        }
    };

    function $A(a) {
        var b = T(go);
        a.__uspapi || a.frames.__uspapiLocator || (a = new aB(a), bB(a), b && cB(a))
    }

    function bB(a) {
        !a.C || a.j.__uspapi || a.j.frames.__uspapiLocator || (a.j.__uspapiManager = "fc", hv(a.j, "__uspapiLocator"), Fa("__uspapi", (...b) => dB(a, ...b)))
    }

    function cB(a) {
        !a.A || a.j.__tcfapi || a.j.frames.__tcfapiLocator || (a.j.__tcfapiManager = "fc", hv(a.j, "__tcfapiLocator"), a.j.__tcfapiEventListeners = a.j.__tcfapiEventListeners || [], Fa("__tcfapi", (...b) => eB(a, ...b)), XA(a.j))
    }

    function dB(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.C
        }, !0)
    }

    function eB(a, b, c, d, e = null) {
        if ("function" === typeof d)
            if (c && 2 !== c) d(null, !1);
            else switch (c = a.j.__tcfapiEventListeners, b) {
                case "getTCData":
                    !e || Array.isArray(e) && e.every(f => "number" === typeof f) ? d(fB(a, e, null), !0) : d(null, !1);
                    break;
                case "ping":
                    d({
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
                    b = c.push(d);
                    d(fB(a, null, b - 1), !0);
                    break;
                case "removeEventListener":
                    c[e] ? (c[e] = null, d(!0)) : d(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    d(null, !1)
            }
    }

    function fB(a, b, c) {
        if (!a.A) return null;
        b = DA(a.A, b);
        b.addtlConsent = null != a.B ? a.B : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    }
    class aB {
        constructor(a) {
            this.j = a;
            this.l = a.document;
            this.C = (a = (a = VA(this.l)) ? E(a, RA, 5) || null : null) ? y(a, 2) : null;
            this.A = (a = UA(this.l)) && Fc(a, 1) ? y(a, 1) : null;
            this.B = (a = UA(this.l)) && Fc(a, 2) ? y(a, 2) : null
        }
    };

    function gB(a) {
        const b = a[0] / 255,
            c = a[1] / 255;
        a = a[2] / 255;
        return .2126 * (.03928 >= b ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) + .7152 * (.03928 >= c ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) + .0722 * (.03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4))
    }

    function hB(a, b) {
        a = gB(a);
        b = gB(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    };
    var iB = Promise;
    class jB {
        constructor(a) {
            this.A = a
        }
        l(a, b, c) {
            this.A.then(d => {
                d.l(a, b, c)
            })
        }
        j(a, b) {
            return this.A.then(c => c.j(a, b))
        }
    };
    class kB {
        constructor(a) {
            this.data = a
        }
    };

    function lB(a, b) {
        mB(a, b);
        return new nB(a)
    }
    class nB {
        constructor(a) {
            this.A = a
        }
        l(a, b, c = []) {
            const d = new MessageChannel;
            mB(d.port1, b);
            this.A.postMessage(a, [d.port2].concat(c))
        }
        j(a, b) {
            return new iB(c => {
                this.l(a, c, b)
            })
        }
    }

    function mB(a, b) {
        b && (a.onmessage = c => {
            b(new kB(c.data, lB(c.ports[0])))
        })
    };
    var qB = ({
        destination: a,
        Ca: b,
        origin: c,
        Pa: d = "ZNWN1d",
        onMessage: e,
        Ed: f
    }) => oB({
        destination: a,
        Se: () => b.contentWindow,
        lf: pB(c),
        Pa: d,
        onMessage: e,
        Ed: f
    });
    const oB = ({
            destination: a,
            Se: b,
            lf: c,
            Ij: d,
            Pa: e,
            onMessage: f,
            Ed: g
        }) => {
            const h = Object.create(null);
            c.forEach(l => {
                h[l] = !0
            });
            return new jB(new iB((l, k) => {
                const m = n => {
                    if (n.source && n.source === b())
                        if (!0 !== h[n.origin]) {
                            a.removeEventListener("message", m, !1);
                            const p = c.join(", ");
                            k(Error(`Origin mismatch while establishing channel "${e}". Expected ${1===c.length?p:`one of [${p}]`}, but received ${n.origin}.`))
                        } else(n.data.n || n.data) === e && (a.removeEventListener("message", m, !1), d && n.data.t !== d ? k(Error(`Token mismatch while establishing channel "${e}". Expected ${d}, but received ${n.data.t}.`)) :
                            (l(lB(n.ports[0], f)), g && g(n)))
                };
                a.addEventListener("message", m, !1)
            }))
        },
        pB = a => {
            a = "string" === typeof a ? [a] : a;
            const b = Object.create(null);
            a.forEach(c => {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };
    var rB = class {
        constructor(a) {
            this.oc = a
        }
        runStorify(a, b, c, d) {
            const e = vs(11, a, this.oc).then(f => {
                f.runStorify(a, b, c, d)
            });
            Ni.Ha(1021, e)
        }
    };
    var sB = (a, b, c, d, e, f, g, h = null, l) => {
        try {
            var k = a.localStorage
        } catch (t) {
            k = null
        }
        if (k) {
            if (T(Un)) var m = null;
            else try {
                m = k.getItem("google_ama_config")
            } catch (t) {
                m = null
            }
            try {
                var n = m ? Yc(ym, m) : null
            } catch (t) {
                n = null
            }
            m = n
        } else m = null;
        a: {
            if (d) try {
                var p = Yc(ym, d);
                break a
            } catch (t) {
                bz(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            p = null
        }
        if (d = p) {
            if (e) {
                p = new zm;
                Qc(d, 3, p);
                m = vm(d) && y(vm(d), 13) ? y(vm(d), 13) : 1;
                z(p, 1, Date.now() + 864E5 * m);
                p = Dc(d);
                vm(d) && (m = new wm, n = vm(d), n = B(n, 23), m = z(m, 23, null == n ? void 0 : n), n = Kc(vm(d), 12, !1), m = z(m, 12, n), n = Kc(vm(d), 15, !1), m =
                    z(m, 15, n), Qc(p, 15, m));
                m = F(p, dm, 1);
                for (n = 0; n < m.length; n++) z(m[n], 11, tc);
                Qc(p, 22);
                if (T(Un)) dz(a);
                else try {
                    (e || a.localStorage).setItem("google_ama_config", ad(p))
                } catch (t) {
                    bz(a, {
                        lserr: 1
                    })
                }
            }
            e = $y(a, F(d, Cm, 7));
            a: {
                if (e && (p = y(e, 3), m = E(d, Pl, 9), p && m)) {
                    b: {
                        m = F(m, Nl, 1);
                        for (r of m)
                            if (y(r, 1) == p) {
                                var r = E(r, Ml, 2) || null;
                                break b
                            }
                        r = null
                    }
                    if (r) break a
                }
                r = E(d, Ml, 8) || new Ml
            }
            r = {
                rf: r
            };
            e && (r.da = e);
            e && Yy(e, 3) && (r.nb = [1]);
            if (7 == c.google_pgb_reactive && (e = r.da, !e || !B(e, 8))) return !1;
            fz(a, 2) && (fj(5, [d.toJSON()]), c = cz(c), f = new lA(f),
                g = new rB(g), e = r.da, c.google_package = e && y(e, 4) || "", Dz(a, b, d, r, f, g, new sl(["google-auto-placed"], c), h, {
                    url: a.location.href,
                    Ab: l
                }));
            return !0
        }
        m && (bz(a, {
            cfg: 1,
            cl: 1
        }), dz(a));
        return !1
    };
    const tB = [255, 255, 255];

    function uB(a) {
        function b(d) {
            return [Number(d[1]), Number(d[2]), Number(d[3]), 4 < d.length ? Number(d[4]) : 1]
        }
        var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
        if (c || (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))) return b(c);
        if ("transparent" === a) return [0, 0, 0, 0];
        throw Error(`Invalid color: ${a}`);
    }

    function vB(a) {
        var b = getComputedStyle(a);
        if ("none" !== b.backgroundImage) return null;
        b = uB(b.backgroundColor);
        var c = wB(b);
        if (c) return c;
        a = (a = a.parentElement) ? vB(a) : tB;
        if (!a) return null;
        c = b[3];
        return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])]
    }

    function wB(a) {
        return 1 === a[3] ? [a[0], a[1], a[2]] : null
    };
    var yB = class {
        constructor() {
            var a = U(Ln),
                b = U(rn);
            this.B = a;
            this.A = b;
            this.l = new xB;
            this.j = 0
        }
    };
    class xB {
        constructor() {
            this.j = new Map;
            this.l = 0
        }
        get A() {
            return this.l
        }
    };

    function zB(a) {
        M(a, {
            border: "0",
            "box-shadow": "none",
            display: "inline",
            "float": "none",
            margin: "0",
            outline: "0",
            padding: "0"
        })
    };

    function AB(a, b, c, d, e) {
        a = {
            wp: e.B,
            c: e.G,
            e: U(un),
            m: a,
            q: b,
            v: Math.round(c - d)
        };
        Qi("adfil-clk", a, 1)
    };
    const BB = [{
        kc: "5984482117",
        lc: "1907259590",
        ac: 480,
        Oa: 220
    }, {
        kc: "1530485620",
        lc: "2837189651",
        ac: 400,
        Oa: 180
    }, {
        kc: "4440010542",
        lc: "9211025045",
        ac: 360,
        Oa: 160
    }, {
        kc: "1138882718",
        lc: "6584860439",
        ac: -Infinity,
        Oa: 150
    }];

    function CB(a) {
        return BB.find(b => b.ac <= a)
    };

    function DB(a) {
        const b = a.document.createElement("div");
        M(b, Gs(a));
        a.document.body.appendChild(b);
        a = b.attachShadow({
            mode: "open"
        });
        b.classList.add("adpub-drawer-root");
        return {
            Sd: b,
            shadowRoot: a
        }
    }

    function EB(a, b) {
        b = b.getElementById(a);
        if (!b) throw Error(`Element (${a}) does not exist`);
        return b
    }

    function FB(a, b) {
        const c = new Yj(b.P);
        gk(b, !0, () => void Q(c, !0));
        gk(b, !1, () => {
            a.setTimeout(() => {
                b.P || Q(c, !1)
            }, 700)
        });
        return ak(c)
    };
    var GB = void 0;

    function HB() {
        void 0 === GB && (GB = 20);
        return GB
    };

    function IB(a) {
        if (a.F) throw Error("Accessing domItems after disposal");
        return a.B
    }

    function JB(a) {
        const {
            Kc: b,
            De: c
        } = IB(a);
        b.addEventListener("click", () => void a.collapse());
        c.addEventListener("click", () => void a.collapse())
    }
    var KB = class extends Sj {
        constructor(a, b, c, d) {
            super();
            this.B = b;
            this.j = new Yj(!1);
            this.A = FB(a, this.j);
            gk(this.A, !0, () => {
                Pk(c);
                Et(d)
            });
            gk(this.A, !1, () => {
                Uj(c.j);
                Uj(c.A);
                Qk(c);
                Ft(d)
            })
        }
        show({
            nd: a = !1
        } = {}) {
            IB(this).lb.classList.add("hd-revealed");
            Q(this.j, !0);
            a && gk(this.A, !1, () => {
                this.va()
            })
        }
        collapse() {
            IB(this).lb.classList.remove("hd-revealed");
            Q(this.j, !1)
        }
        init() {
            JB(this)
        }
        l() {
            const a = this.B.Oc.Sd,
                b = a.parentNode;
            b && b.removeChild(a);
            super.l()
        }
    };
    var LB = void 0;

    function MB() {
        void 0 === LB && (LB = 20);
        return LB
    }
    var NB = void 0;

    function OB() {
        void 0 === NB && (NB = 30);
        return NB
    }

    function PB(a) {
        return Vs('<div class="ved-handle" id="' + Zs(a) + '"><div class="ved-handle-icon"></div></div>')
    };

    function QB(a) {
        return yk(a.j).map(b => b ? RB(a, b) : 0)
    }

    function RB(a, b) {
        switch (a.direction) {
            case 0:
                return SB(-b.Yd);
            case 1:
                return SB(-b.Xd);
            default:
                throw Error(`Unhandled direction: ${a.direction}`);
        }
    }

    function TB(a) {
        return Ak(a.j).map(b => RB(a, b))
    }
    var UB = class {
        constructor(a) {
            this.j = a;
            this.direction = 0
        }
    };

    function SB(a) {
        return 0 === a ? 0 : a
    };

    function Y(a) {
        if (a.F) throw Error("Accessing domItems after disposal");
        return a.C
    }

    function VB(a) {
        Y(a).lb.classList.add("ved-revealed");
        Q(a.A, !0)
    }

    function WB(a) {
        return FB(a.win, a.A)
    }

    function XB(a, b) {
        const c = new Yj(b());
        (new kk(a.G)).ba(() => void Q(c, b()));
        return ak(c)
    }

    function YB(a) {
        const {
            ea: b,
            cc: c
        } = Y(a);
        return XB(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function ZB(a) {
        const {
            ea: b,
            cc: c
        } = Y(a);
        return XB(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top - 1)
    }

    function $B(a) {
        const {
            ea: b
        } = Y(a);
        return XB(a, () => b.scrollTop === b.scrollHeight - b.clientHeight)
    }

    function aC(a) {
        return bk(YB(a), $B(a))
    }

    function bC(a) {
        const {
            ea: b,
            Ya: c
        } = Y(a);
        return XB(a, () => c.getBoundingClientRect().top < b.getBoundingClientRect().top - 1)
    }

    function cC(a) {
        ek(YB(a), !0, () => {
            const {
                qd: b,
                zb: c
            } = Y(a);
            b.classList.remove("ved-hidden");
            c.classList.add("ved-with-background")
        });
        ek(YB(a), !1, () => {
            const {
                qd: b,
                zb: c
            } = Y(a);
            b.classList.add("ved-hidden");
            c.classList.remove("ved-with-background")
        })
    }

    function dC(a) {
        const b = Ck(a.win, Y(a).xc);
        dk(Fk(b), () => void eC(a));
        Tj(a, Da(Rj, b))
    }

    function fC(a) {
        ek(gC(a), !0, () => {
            Y(a).Hd.classList.remove("ved-hidden")
        });
        ek(gC(a), !1, () => {
            Y(a).Hd.classList.add("ved-hidden")
        })
    }

    function hC(a) {
        const b = () => void ik(a.D),
            {
                Kc: c,
                Ya: d,
                Qe: e
            } = Y(a);
        c.addEventListener("click", b);
        d.addEventListener("click", b);
        e.addEventListener("click", b);
        gk(iC(a), !0, b)
    }

    function jC(a) {
        fk(a.j, () => void ik(a.G))
    }

    function eC(a) {
        if (!a.j.P) {
            var {
                kd: b,
                xc: c
            } = Y(a), d = c.getBoundingClientRect().height;
            d = Math.max(kC(a), d);
            Q(a.j, !0);
            var e = lC(a);
            b.style.setProperty("height", `${d}px`);
            e();
            a.win.requestAnimationFrame(() => {
                a.win.requestAnimationFrame(() => {
                    Q(a.j, !1)
                })
            })
        }
    }

    function gC(a) {
        const {
            ea: b,
            Ya: c
        } = Y(a);
        return XB(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function iC(a) {
        return Zj(a.B.map(el), mC(a))
    }

    function mC(a) {
        return XB(a, () => 0 === Y(a).ea.scrollTop)
    }

    function nC(a, b) {
        Y(a).ea.scrollTop = b;
        jC(a)
    }

    function oC(a, b) {
        ({
            zb: a
        } = Y(a));
        a = a.getBoundingClientRect().top;
        return b.getBoundingClientRect().top - a
    }

    function pC(a, b) {
        Q(a.B, !0);
        const {
            zb: c,
            ea: d
        } = Y(a);
        d.scrollTop = 0;
        d.classList.add("ved-scrolling-paused");
        c.style.setProperty("margin-top", `-${b}px`);
        return () => void qC(a, b)
    }

    function qC(a, b) {
        const {
            zb: c,
            ea: d
        } = Y(a);
        c.style.removeProperty("margin-top");
        d.classList.remove("ved-scrolling-paused");
        nC(a, b);
        Q(a.B, !1)
    }

    function lC(a) {
        const b = Y(a).ea.scrollTop;
        pC(a, b);
        return () => void qC(a, b)
    }

    function kC(a) {
        const {
            ea: b,
            cc: c,
            kd: d,
            Ya: e
        } = Y(a);
        a = b.getBoundingClientRect();
        const f = c.getBoundingClientRect();
        var g = d.getBoundingClientRect();
        const h = e.getBoundingClientRect();
        g = g.top - f.top;
        return Math.max(a.height - h.height - g, Math.min(a.height, a.bottom - f.top) - g)
    }
    var rC = class extends Sj {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.C = b;
            this.J = c;
            this.D = new jk;
            this.G = new jk;
            this.A = new Yj(!1);
            this.B = new Yj(!1);
            this.j = new Yj(!1)
        }
        init() {
            nC(this, oC(this, Y(this).Ya));
            cC(this);
            dC(this);
            fC(this);
            hC(this);
            Y(this).ea.addEventListener("scroll", () => void jC(this))
        }
        l() {
            const a = this.C.Oc.Sd,
                b = a.parentNode;
            b && b.removeChild(a);
            super.l()
        }
    };

    function sC(a) {
        ek(Zj(aC(a.j), bC(a.j)), !0, fl(() => {
            Y(a.j).Ya.classList.remove("ved-snap-point-top")
        }));
        ek(ZB(a.j), !0, () => {
            Y(a.j).ea.classList.add("ved-no-snap")
        });
        ek(ZB(a.j), !1, () => {
            Y(a.j).ea.classList.remove("ved-no-snap")
        });
        gk(ZB(a.j), !1, () => {
            var b = a.j;
            var c = Y(b).cc;
            c = pC(b, oC(b, c));
            b.win.setTimeout(c, 100)
        })
    }

    function tC(a) {
        const b = a.j.J;
        QB(b).ba(c => {
            c = -c;
            if (0 < c) {
                const {
                    Vd: d
                } = Y(a.j);
                d.classList.add("ved-no-animation");
                d.style.setProperty("transform", `translateY(${c}px)`)
            } else({
                Vd: c
            } = Y(a.j)), c.classList.remove("ved-no-animation"), c.style.removeProperty("transform")
        });
        TB(b).ba(c => {
            30 < -c && a.collapse()
        })
    }
    var uC = class extends Sj {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.j = b;
            gk(WB(b), !0, () => {
                Pk(c);
                Et(d)
            });
            gk(WB(b), !1, () => {
                Uj(c.j);
                Uj(c.A);
                Qk(c);
                Ft(d)
            })
        }
        show({
            nd: a = !1
        } = {}) {
            VB(this.j);
            a && gk(WB(this.j), !1, () => {
                this.va()
            })
        }
        collapse() {
            var a = this.j;
            Y(a).lb.classList.remove("ved-revealed");
            Q(a.A, !1)
        }
        isVisible() {
            return WB(this.j)
        }
        init() {
            (new kk(this.j.D)).ba(() => {
                this.collapse()
            });
            sC(this);
            tC(this);
            xb(this.win.document.body.offsetHeight)
        }
    };

    function vC(a, b, c) {
        const d = CB(a.document.body.clientWidth),
            e = b.j ? wC(a, b, c, d) : xC(a, b, c, d);
        e.show({
            nd: !0
        });
        yC.push(() => {
            e.va()
        })
    }

    function wC(a, b, c, d) {
        c = zC(a, b, c, d, a.innerWidth, "100%", "15px", "13px", "center");
        b = zt(new Dt(a), 1E5);
        d = DB(a);
        var e = d.shadowRoot,
            f = e.appendChild,
            g = new Cf(a.document);
        var h = Vs("<style>#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + V(100001) + "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " + V(95) +
            "%; transition: transform " + V(.5) + "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round " + V(MB()) + "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " +
            V(75 / 95 * 100) + "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " + V(20 / 95 * 100) + "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " +
            V(75 / 95 * 100) + "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " + V(75 / 95 * 100) + "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " + V(OB() + 50) + "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " +
            V(MB()) + "px " + V(MB()) + "px 0 0; background: white; display: flex; height: " + V(OB()) + 'px; justify-content: center; cursor: grab;}.ved-handle-icon {background: #dadce0; border-radius: 2px; height: 4px; margin-bottom: 8px; width: 50px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">' +
            PB("ved-moving-handle") + '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">' + PB("ved-fixed-handle") + "</div></div></div>");
        f.call(e, Tf(g, Qs(h)));
        f = EB("ved-content-container", e);
        f.appendChild(c);
        xb(a.document.body.offsetHeight);
        c = {
            lb: EB("ved-drawer-container", e),
            Kc: EB("ved-modal-background", e),
            Vd: EB("ved-ui-revealer", e),
            ea: EB("ved-scroller",
                e),
            zb: EB("ved-scrolled-stack", e),
            Qe: EB("ved-fully-closed-anchor", e),
            Ya: EB("ved-partially-extended-anchor", e),
            kd: EB("ved-content-sizer", e),
            xc: f,
            Ej: EB("ved-moving-handle", e),
            cc: EB("ved-moving-handle-holder", e),
            Pe: EB("ved-fixed-handle", e),
            qd: EB("ved-fixed-handle-holder", e),
            Hd: EB("ved-over-scroll-block", e),
            Oc: d
        };
        d = c.Pe;
        d = new Bk(new sk(a, d), new pk(d));
        e = d.j;
        e.C.addEventListener("mousedown", e.G);
        e.B.addEventListener("mouseup", e.D);
        e.B.addEventListener("mousemove", e.F, {
            passive: !1
        });
        e = d.l;
        e.l.addEventListener("touchstart",
            e.F);
        e.l.addEventListener("touchend", e.C);
        e.l.addEventListener("touchmove", e.D, {
            passive: !1
        });
        c = new rC(a, c, new UB(d));
        c.init();
        a = new uC(a, c, Nk(a), b);
        Tj(a, Da(Rj, c));
        a.init();
        return a
    }

    function xC(a, b, c, d) {
        a: {
            var e = a.document.body.clientWidth;
            var f = .9 * e;
            for (e = 768 >= e ? 3 : 4; 1 <= e; e--) {
                var g = d.Oa * e + 42;
                if (g <= f) {
                    f = g;
                    break a
                }
            }
        }
        c = zC(a, b, c, d, f, "600px", "24px", "24px", "start");e = `${f}px`;
        var h = AC(b),
            l = J(b.A, 14);b = zt(new Dt(a), 1E5);d = DB(a);f = d.shadowRoot;g = f.appendChild;
        var k = new Cf(a.document);h = h || !1;e = Vs("<style>#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + V(100001) + "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " +
            V(e) + "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: " + V(HB()) + "px; transition: transform " + V(.5) + "s ease-in-out;" + (h ? "left: 0; border-top-right-radius: " + V(HB()) + "px; border-bottom-right-radius: " + V(HB()) + "px; transform: translateX(-100%);" : "right: 0; border-top-left-radius: " + V(HB()) + "px; border-bottom-left-radius: " + V(HB()) + "px; transform: translateX(100%);") + "}.hd-revealed > #hd-drawer {transform: translateY(0);}#hd-control-bar {" + (h ?
                "text-align: left;" : "text-align: right;") + 'height: 24px;}#hd-close-button {border: none; background: none; cursor: pointer;}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}</style><div id="hd-drawer-container"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-close-button" aria-label="' + Zs(l) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#5F6368"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>');
        g.call(f, Tf(k, Qs(e)));e = EB("hd-content-container", f);e.appendChild(c);xb(a.document.body.offsetHeight);c = {
            lb: EB("hd-drawer-container", f),
            Kc: EB("hd-modal-background", f),
            xc: e,
            De: EB("hd-close-button", f),
            Oc: d
        };a = new KB(a, c, Nk(a), b);a.init();
        return a
    }

    function zC(a, b, c, d, e, f, g, h, l) {
        var k = b.A,
            m = !!b.l,
            n = J(k, 10),
            p = n.indexOf("TERM");
        var r = T(vn) ? T(vn) ? {
            Wc: "adfiliates-rockskipper",
            uc: "ads"
        } : void 0 : m ? {
            Wc: "vert-pla-adfiliates-e4-srp",
            uc: "plas"
        } : {
            Wc: "vert-pla-adfiliates-srp",
            uc: "plas"
        };
        var t = r;
        r = U(nn);
        e = Math.max(Math.floor((e - Math.floor(e / d.Oa) * d.Oa) / 2), 5);
        var x = b.F ? "on" : "",
            w = J(k, 3),
            A = `${U(un)}`,
            D = J(k, 7),
            H = J(k, 6),
            G = b.B,
            I = n.substring(0, p);
        n = n.substring(p + 4);
        d = T(vn) ? d.lc : d.kc;
        m = !m;
        p = t.Wc;
        t = t.uc;
        var aa = !!Kc(k, 13);
        c = Vs('<link href="https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap" rel="stylesheet"><div style="font-family: Roboto, sans-serif;"><div style="border: 0 solid #eee; border-bottom-width: 1px; color: #3c4043; font-size: 13px; line-height: 20px; padding: 0 ' +
            Zs(V(g)) + " " + Zs(V(h)) + "; text-align: " + Zs(V(l)) + ';">' + (m ? '<div style="max-width: ' + Zs(V(f)) + '">' + Us(w) + '\u00a0<a href="https://support.google.com/adsense/answer/11188578" target="_blank" style="color: #1967d2; text-decoration: none; white-space: nowrap">' + Us(H) + "</a></div>" : "") + "</div><div style=\"border-bottom: 1px solid #eee; color: #202124; font-family: 'Google Sans'; font-size: 15px; line-height: 24px; padding: 15px " + Zs(V(g)) + "; text-align: " + Zs(V(l)) + '"><div style="display: -webkit-box; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><span style="bottom: -2px; color: #1967d2; font-family: \'Google Material Icons\'; padding-right: 5px; position: relative">shoppingmode</span><span style="color:#80868b"> ' +
            Us(I) + "</span>" + Us(c) + '<span style="color:#80868b">' + Us(n) + '</span></div></div><div id="adfil-csa" style="margin:5px ' + Zs(V(e)) + "px\"></div><script>(function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(arguments)},g[o]['t']=1*new Date})(window,'_googCsa');const pageOptions = {'pubId': " + ct(dt(p)) + ", 'styleId': " + ct(dt(d)) + ", 'disableCarousel': true, 'query': " + ct(dt(c)) + ", 'hl': " + ct(dt(D)) + ", 'personalizedAds': 'false', 'fexp': " + ct(dt(A)) + ", 'adfiliateWp': " + ct(dt(G)) + ", 'adtest': " +
            ct(dt(x)) + "}; const adBlock = {'container': 'adfil-csa', 'linkTarget': '_blank', 'number': " + ct(dt(r)) + ", 'width': document.body.offsetWidth - 30}; _googCsa(" + ct(dt(t)) + ", pageOptions, adBlock);\x3c/script>" + (aa ? "<script>const el = document.getElementById('adfil-csa'); el.style.height = '800px'; el.style.width = '75vw'; el.style.overflow = 'hidden'; el.style.overflowWrap = 'break-word'; el.textContent = JSON.stringify(window._googCsa.q);\x3c/script>" : '<script async="async" src="https://www.google.com/adsense/search/ads.js">\x3c/script>') +
            "</div>");
        b = je("body", {
            dir: AC(b) ? "rtl" : "ltr",
            lang: J(k, 7),
            style: Td({
                margin: "0",
                height: "100%",
                "padding-top": "0px",
                overflow: T(xn) ? null : "hidden"
            })
        }, Qs(c));
        k = a.document.createElement("IFRAME");
        M(k, {
            border: "0",
            width: "100%"
        });
        BC(a, k);
        k.srcdoc = fe(b);
        return k
    }

    function BC(a, b) {
        const c = a.requestAnimationFrame;
        b.onload = () => {
            const d = b.contentDocument.body,
                e = new ResizeObserver(() => {
                    c(() => {
                        b.height = `${d.parentElement.offsetHeight}px`
                    })
                });
            e.observe(d);
            yC.push(() => {
                e.disconnect()
            })
        }
    }
    const yC = [];
    var CC = class {
        constructor(a, b, c, d, e, f) {
            this.L = a;
            this.N = b;
            this.A = c;
            this.G = d;
            this.I = e;
            this.C = f
        }
        get j() {
            return this.L
        }
        get F() {
            return this.N
        }
        get B() {
            return this.A
        }
        get D() {
            return this.G
        }
        get J() {
            return this.I
        }
        get l() {
            return this.C
        }
    };

    function DC(a, b) {
        const c = a.document.createElement("SPAN");
        c.appendChild(a.document.createTextNode("shoppingmode"));
        zB(c);
        M(c, b);
        c.className = "google-material-icons";
        return c
    };

    function EC(a) {
        return a.performance.now()
    };
    var FC = (a, b) => pu({
        K: a,
        Cd: 3E3,
        Jc: a.innerWidth > sj ? 650 : 0,
        xa: Rh,
        Be: b
    });
    class GC {
        constructor(a, b) {
            this.A = a;
            this.j = !1;
            this.B = b;
            this.l = this.B.ma(264, c => {
                this.j && (HC || (c = Date.now()), this.A(c), HC ? IC.call(u, this.l) : u.setTimeout(this.l, 17))
            })
        }
        start() {
            this.j || (this.j = !0, HC ? IC.call(u, this.l) : this.l(0))
        }
    }
    var IC = u.requestAnimationFrame || u.webkitRequestAnimationFrame,
        HC = !!IC && !/'iPhone'/.test(u.navigator.userAgent);

    function JC(a) {
        return a * a * a
    }

    function KC(a) {
        a = 1 - a;
        return 1 - a * a * a
    }
    class LC {
        constructor(a, b) {
            var c = Ni;
            this.l = a;
            this.F = b;
            this.L = 100;
            this.progress = 0;
            this.j = null;
            this.J = !1;
            this.A = [];
            this.B = null;
            this.C = new GC(Ca(this.N, this), c)
        }
        N(a) {
            if (this.J) this.C.j = !1;
            else {
                null === this.j && (this.j = a);
                this.progress = (a - this.j) / this.L;
                1 <= this.progress && (this.progress = 1);
                a = this.B ? this.B(this.progress) : this.progress;
                this.A = [];
                for (let b = 0; b < this.l.length; b++) this.A.push((this.F[b] - this.l[b]) * a + this.l[b]);
                this.D();
                1 == this.progress && (this.C.j = !1, this.G())
            }
        }
        G() {}
        D() {}
        play() {
            this.J = !1;
            this.C.start()
        }
        reset(a,
            b, c) {
            this.j = null;
            this.l = a;
            this.F = b;
            this.L = c;
            this.progress = 0
        }
    };
    class MC extends LC {
        constructor(a, b, c, d, e) {
            super([b], [c]);
            this.O = a;
            this.I = d ? d : null;
            this.B = e || null
        }
        D() {
            const a = {};
            a.left = this.A[0] + "px";
            bh(this.O, a)
        }
        G() {
            this.I && this.I()
        }
    };
    let NC = "",
        OC = "";

    function PC(a) {
        return a.document.getElementById("google-adfil-sa")
    }

    function QC(a, b) {
        const c = document.createElement("SPAN");
        zB(c);
        M(c, {
            position: "absolute",
            top: "2.5px",
            bottom: "2.5px",
            left: "60px",
            right: "60px",
            display: "flex",
            "flex-direction": "row",
            "justify-content": "center",
            color: "#1967D2",
            cursor: "pointer"
        });
        var d = AC(b);
        b.j || M(c, {
            "justify-content": ""
        });
        c.appendChild(DC(a, {
            "font-family": '"Google Material Icons"',
            "font-size": "18px",
            "font-style": "normal",
            "font-weight": "normal",
            "text-decoration": "none",
            width: "15px",
            height: "15px",
            "margin-left": d ? "8px" : "",
            "margin-right": d ?
                "" : "8px",
            "margin-top": "11px",
            "line-height": "normal"
        }));
        d = document.createElement("SPAN");
        d.id = "google-adfil-sa-qtx";
        d.appendChild(a.document.createTextNode(J(b.A, 11).replace("TERM", NC)));
        M(d, {
            height: "40px",
            "align-items": "center",
            "line-height": "40px",
            "font-size": "16px",
            "font-weight": "400",
            "font-style": "normal",
            "font-family": "Roboto",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            overflow: "hidden",
            "-webkit-tap-highlight-color": "transparent"
        });
        const e = EC(a);
        c.addEventListener("click", f => {
            AB(OC, NC,
                EC(a), e, b);
            vC(a, b, NC);
            f.preventDefault();
            return !1
        });
        c.appendChild(d);
        return c
    }

    function RC(a, b) {
        const c = document.createElement("SPAN");
        c.id = "gda";
        const d = SC(a, b);
        c.appendChild(d);
        c.addEventListener("click", e => {
            const f = AC(b),
                g = (b.j ? f : !f) ? a.innerWidth : -a.innerWidth;
            (new MC(PC(a), 0, g, () => {}, JC)).play();
            const h = TC(b);
            h.appendChild(DC(a, {
                "font-family": '"Google Material Icons"',
                "font-size": "18px",
                "font-style": "normal",
                "font-weight": "normal",
                "text-decoration": "none",
                "margin-right": "8px",
                "margin-top": "10px",
                left: "13px",
                top: "14px",
                margin: "0",
                position: "absolute",
                "line-height": "normal"
            }));
            h.addEventListener("click", l => {
                const k = (b.j ? f : !f) ? a.innerWidth : -a.innerWidth;
                (new MC(PC(a), k, 0, () => {}, KC)).play();
                a.document.body.removeChild(h);
                l.preventDefault();
                return !1
            });
            a.document.body.appendChild(h);
            e.preventDefault();
            return !1
        });
        return c
    }

    function SC(a, b) {
        var c = a.document;
        a = c.createElementNS("http://www.w3.org/2000/svg", "svg");
        var d = AC(b);
        b = b.j ? d : !d;
        M(a, {
            bottom: "12.5px",
            display: "block",
            height: "20px",
            left: b ? "" : "0",
            right: b ? "0" : "",
            margin: "0 20px",
            "pointer-events": "initial",
            position: "absolute",
            top: "12.5px",
            transform: "none",
            width: "20px"
        });
        b = c.createElementNS("http://www.w3.org/2000/svg", "defs");
        a.appendChild(b);
        c = c.createElementNS("http://www.w3.org/2000/svg", "g");
        c.setAttribute("class", "down");
        c.setAttribute("stroke", "#616161");
        c.setAttribute("stroke-linecap",
            "square");
        c.setAttribute("stroke-width", "2px");
        b = c.ownerDocument;
        d = b.createElementNS("http://www.w3.org/2000/svg", "line");
        d.setAttribute("x1", "6");
        d.setAttribute("y1", "14");
        d.setAttribute("x2", "14");
        d.setAttribute("y2", "6");
        c.appendChild(d);
        b = b.createElementNS("http://www.w3.org/2000/svg", "line");
        b.setAttribute("x1", "6");
        b.setAttribute("y1", "6");
        b.setAttribute("x2", "14");
        b.setAttribute("y2", "14");
        c.appendChild(b);
        a.appendChild(c);
        return a
    }

    function UC(a, b) {
        const c = document.createElement("DIV");
        c.id = "google-adfil-ea";
        b.j || M(c, {
            width: "60px",
            height: "45px",
            cursor: "pointer"
        });
        const d = VC(a, b);
        c.appendChild(d);
        const e = EC(a);
        c.addEventListener("click", f => {
            AB(OC, NC, EC(a), e, b);
            vC(a, b, NC);
            f.preventDefault();
            return !1
        });
        return c
    }

    function VC(a, b) {
        var c = a.document;
        a = c.createElementNS("http://www.w3.org/2000/svg", "svg");
        var d = AC(b);
        d = b.j ? d : !d;
        M(a, {
            bottom: "12.5px",
            display: "block",
            height: "20px",
            margin: "0 20px",
            "pointer-events": "initial",
            position: "absolute",
            left: d ? "0" : "",
            right: d ? "" : "0",
            top: "12.5px",
            transform: "none",
            width: "20px"
        });
        d = c.createElementNS("http://www.w3.org/2000/svg", "defs");
        a.appendChild(d);
        c = c.createElementNS("http://www.w3.org/2000/svg", "g");
        c.setAttribute("class", "down");
        c.setAttribute("stroke", "#616161");
        c.setAttribute("stroke-width",
            "2px");
        c.setAttribute("stroke-linecap", "square");
        b.j ? (b = c.ownerDocument, d = b.createElementNS("http://www.w3.org/2000/svg", "line"), d.setAttribute("x1", "6"), d.setAttribute("y1", "12"), d.setAttribute("x2", "10"), d.setAttribute("y2", "8"), c.appendChild(d), b = b.createElementNS("http://www.w3.org/2000/svg", "line"), b.setAttribute("x1", "10"), b.setAttribute("y1", "8"), b.setAttribute("x2", "14"), b.setAttribute("y2", "12"), c.appendChild(b)) : AC(b) ? (b = c.ownerDocument, d = b.createElementNS("http://www.w3.org/2000/svg", "line"),
            d.setAttribute("x1", "6"), d.setAttribute("y1", "6"), d.setAttribute("x2", "10"), d.setAttribute("y2", "10"), c.appendChild(d), b = b.createElementNS("http://www.w3.org/2000/svg", "line"), b.setAttribute("x1", "10"), b.setAttribute("y1", "10"), b.setAttribute("x2", "6"), b.setAttribute("y2", "14"), c.appendChild(b)) : (b = c.ownerDocument, d = b.createElementNS("http://www.w3.org/2000/svg", "line"), d.setAttribute("x1", "10"), d.setAttribute("y1", "6"), d.setAttribute("x2", "6"), d.setAttribute("y2", "10"), c.appendChild(d), b = b.createElementNS("http://www.w3.org/2000/svg",
            "line"), b.setAttribute("x1", "6"), b.setAttribute("y1", "10"), b.setAttribute("x2", "10"), b.setAttribute("y2", "14"), c.appendChild(b));
        a.appendChild(c);
        return a
    }

    function TC(a) {
        const b = document.createElement("div");
        b.id = "gca";
        const c = AC(a);
        a = a.j ? c : !c;
        M(b, {
            position: "fixed",
            bottom: "0%",
            left: a ? "" : "0%",
            right: a ? "0%" : "",
            width: "45px",
            height: "45px",
            background: "white",
            "border-top-left-radius": "20px",
            "border-top-right-radius": "20px",
            "box-shadow": "0px 0px 10px 0px #00000026",
            color: "#1967D2",
            "z-index": U(on).toString()
        });
        return b
    }

    function WC(a) {
        (new MutationObserver(b => {
            b.forEach(c => {
                "attributes" === c.type && "0px" === a.document.body.style.paddingBottom && M(a.document.body, {
                    "padding-bottom": "45px"
                })
            })
        })).observe(a.document.body, {
            attributes: !0
        })
    }

    function XC(a) {
        try {
            let b, c;
            return null !== (null == (b = a.location) ? void 0 : null == (c = b.href) ? void 0 : c.match(/goog_fsa=1/))
        } catch (b) {
            return !1
        }
    };
    var aD = class {
        constructor(a) {
            this.l = a;
            this.j = new YC;
            for (var b of this.l) {
                var c = J(b, 1);
                for (var d of F(b, ZC, 2)) {
                    a = this.j;
                    var e = J(d, 1),
                        f = c,
                        g = a.l.has(f) ? a.l.get(f) : a.C++;
                    a.l.set(f, g);
                    a.B.set(g, f);
                    f = 0;
                    for (let h = 0; h < e.length; h++) {
                        const l = e.charCodeAt(h);
                        a.j[f].contains(l) || (a.j.push(new $C), a.j[a.size].C = f, a.j[a.size].F = l, a.j[f].A.set(l, a.size), a.size++);
                        f = a.j[f].A.get(l)
                    }
                    a.j[f].B = !0;
                    a.j[f].D = g;
                    a.j[f].G = a.A.length;
                    a.A.push(e.length)
                }
            }
            b = this.j;
            d = [];
            for (d.push(0); 0 < d.length;) {
                c = d.shift();
                a = b;
                e = c;
                g = a.j[e];
                if (0 === e) g.j = 0, g.l = 0;
                else if (0 === g.C) g.j = 0, g.l = g.B ? e : a.j[a.j[e].j].l;
                else {
                    g = a.j[a.j[e].C].j;
                    for (f = a.j[e].F;;) {
                        if (a.j[g].contains(f)) {
                            a.j[e].j = a.j[g].A.get(f);
                            break
                        }
                        if (0 === g) {
                            a.j[e].j = 0;
                            break
                        }
                        g = a.j[g].j
                    }
                    a.j[e].l = a.j[e].B ? e : a.j[a.j[e].j].l
                }
                for (const h of b.j[c].childNodes) d.push(h)
            }
        }
        match(a) {
            return this.j.match(a)
        }
    };
    class YC {
        constructor() {
            this.size = 1;
            this.j = [new $C];
            this.A = [];
            this.l = new Map;
            this.B = new Map;
            this.C = 0
        }
        match(a) {
            let b = 0;
            const c = [];
            for (let f = 0; f < a.length; f++) {
                for (;;) {
                    var d = a.charCodeAt(f);
                    const g = this.j[b];
                    var e = String.fromCharCode(d);
                    e = e.toLowerCase() === e ? e.toUpperCase().charCodeAt(0) : e.toLowerCase().charCodeAt(0);
                    if (g.contains(d)) {
                        b = g.A.get(d);
                        break
                    }
                    if (T(tn) && g.contains(e)) {
                        b = g.A.get(e);
                        break
                    }
                    if (0 === b) break;
                    b = g.j
                }
                for (d = b;;) {
                    d = this.j[d].l;
                    if (0 === d) break;
                    c.push(new bD(f + 1 - this.A[this.j[d].G], f, this.B.get(this.j[d].D)));
                    d = this.j[d].j
                }
            }
            return c
        }
    }
    class $C {
        constructor() {
            this.A = new Map;
            this.L = !1;
            this.W = this.J = this.I = this.U = this.N = this.O = -1
        }
        contains(a) {
            return this.A.has(a)
        }
        set C(a) {
            this.O = a
        }
        get C() {
            return this.O
        }
        set F(a) {
            this.N = a
        }
        get F() {
            return this.N
        }
        set B(a) {
            this.L = a
        }
        get B() {
            return this.L
        }
        set D(a) {
            this.J = a
        }
        get D() {
            return this.J
        }
        set j(a) {
            this.U = a
        }
        get j() {
            return this.U
        }
        set l(a) {
            this.I = a
        }
        get l() {
            return this.I
        }
        set G(a) {
            this.W = a
        }
        get G() {
            return this.W
        }
        get childNodes() {
            return this.A.values()
        }
    }
    var bD = class {
        constructor(a, b, c) {
            this.A = a;
            this.l = b;
            this.D = c
        }
        get B() {
            return this.A
        }
        get C() {
            return this.l
        }
        get j() {
            return this.D
        }
        get length() {
            return this.l - this.A
        }
    };
    const cD = /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/;

    function dD(a, b) {
        switch (b) {
            case 1:
                return !0;
            default:
                return "" === a || cD.test(a)
        }
    };
    const eD = ["block", "inline", "inline-block", "list-item", "table-cell"];

    function fD(a, b, c, d, e, f) {
        if (EC(a) >= c.D) return !1;
        for (let I = 0; I < b.childNodes.length; I++) {
            const aa = b.childNodes[I];
            if (aa.nodeType === Node.TEXT_NODE && "" !== aa.textContent) {
                a: {
                    var g = a;
                    var h = c,
                        l = b,
                        k = aa.textContent,
                        m = d,
                        n = e,
                        p = f;
                    const sa = [];b: {
                        var r = k;
                        switch (h.C) {
                            case 1:
                                var t = Array(r.length),
                                    x = 0;
                                for (var w = 0; w < r.length; w++) cD.test(r[w]) || x++, t[w] = x;
                                r = t;
                                break b;
                            default:
                                t = Array(r.length);
                                for (w = x = 0; w < r.length;) {
                                    for (;
                                        /\s/.test(r[w]);) t[w] = x, w++;
                                    for (var A = !1; w < r.length && !/\s/.test(r[w]);) A = !0, t[w] = x, w++;
                                    A && (x++, t[w -
                                        1] = x)
                                }
                                r = t
                        }
                    }
                    if (k.includes("\u00bb")) n = [];
                    else {
                        t = n.match(k);
                        n = new Map;
                        for (const X of t) t = X.B, n.has(t) ? (x = n.get(t), X.length > x.length && n.set(t, X)) : n.set(t, X);
                        n = Array.from(n.values())
                    }
                    x = -1;
                    for (const X of n) {
                        t = X.B;
                        n = X.C;
                        if (!(w = !dD(k.charAt(t - 1), h.C) || !dD(k.charAt(n + 1), h.C))) {
                            w = p;
                            A = X.j;
                            var D = w.l,
                                H = w.j + r[t] - U(sn);
                            for (const wa of D.j.keys()) {
                                var G = D.j.get(wa);
                                let Ha = 0;
                                for (; Ha < G.length && G[Ha] < H;) Ha++;
                                D.l -= Ha;
                                0 < Ha && D.j.set(wa, G.slice(Ha))
                            }
                            D = w;
                            H = D.l;
                            w = !((H.j.has(A) ? H.j.get(A).length : 0) < D.B && w.l.A < w.A)
                        }
                        if (!w) {
                            if (w = !h.l) w = g.getComputedStyle(l), A = w.fontSize.match(/\d+/), w = !(A && 12 <= Number(A[0]) && 22 >= Number(A[0]) && ob(eD, w.display));
                            if (w) {
                                p.j += r[r.length - 1];
                                g = [];
                                break a
                            }
                            x += 1;
                            x < t && sa.push(g.document.createTextNode(k.substring(x, t)));
                            x = sa;
                            w = x.push;
                            A = g;
                            D = h;
                            H = X.j;
                            G = k.substring(t, n + 1);
                            A = D.l ? gD(A, D, H, G) : hD(A, D, H, G);
                            w.call(x, A);
                            x = m;
                            w = X.j;
                            x.j++;
                            x.l.add(w);
                            x = p.l;
                            w = X.j;
                            t = p.j + r[t];
                            A = [];
                            x.j.has(w) && (A = x.j.get(w));
                            A.push(t);
                            x.l++;
                            x.j.set(w, A);
                            x = n
                        }
                    }
                    h = x + 1;0 !== h && h < k.length && sa.push(g.document.createTextNode(k.substring(h)));p.j +=
                    r[r.length - 1];g = sa
                }
                if (0 < g.length && !T(Kn)) {
                    for (const sa of g) b.insertBefore(sa, aa), iD(sa);
                    b.removeChild(aa);
                    I += g.length - 1
                }
            }
            else if (jD(aa, c) && !fD(a, aa, c, d, e, f)) return !1
        }
        return !0
    }

    function iD(a) {
        if (a.nodeType === Node.ELEMENT_NODE) {
            if ("A" === a.tagName) {
                var b = wB(uB(getComputedStyle(a.parentElement).color)),
                    c = wB(uB(getComputedStyle(a).color));
                var d = vB(a);
                if (d = b && c && d ? hB(c, d) < Math.min(hB(b, d), 4.5) ? b : null : b) {
                    b = d[0];
                    c = d[1];
                    d = d[2];
                    b = Number(b);
                    c = Number(c);
                    d = Number(d);
                    if (b != (b & 255) || c != (c & 255) || d != (d & 255)) throw Error('"(' + b + "," + c + "," + d + '") is not a valid RGB color');
                    c = b << 16 | c << 8 | d;
                    b = 16 > b ? "#" + (16777216 | c).toString(16).slice(1) : "#" + c.toString(16);
                    M(a, {
                        color: b
                    })
                }
            }
            for (b = 0; b < a.childElementCount; b++) iD(a.children[b])
        }
    }

    function jD(a, b) {
        if (a.nodeType !== Node.ELEMENT_NODE) return !1;
        let c;
        if (null == (c = a.classList) ? 0 : c.contains("google-adfil-skip")) return !1;
        let d, e;
        switch (null == (d = a.tagName) ? void 0 : null == (e = d.toUpperCase) ? void 0 : e.call(d)) {
            case "IFRAME":
            case "AUDIO":
            case "BUTTON":
            case "CANVAS":
            case "CITE":
            case "CODE":
            case "EMBED":
            case "FOOTER":
            case "FORM":
            case "KBD":
            case "LABEL":
            case "OBJECT":
            case "PRE":
            case "SAMP":
            case "SCRIPT":
            case "SELECT":
            case "STYLE":
            case "SUB":
            case "SUPER":
            case "SVG":
            case "TEXTAREA":
            case "TIME":
            case "VAR":
            case "VIDEO":
            case null:
                return !1;
            case "A":
                return !!b.l;
            default:
                if (!(b = !!b.l)) {
                    let f, g, h, l, k, m;
                    b = !((null == (g = (f = a.className).toUpperCase) ? 0 : null == (h = g.call(f)) ? 0 : h.includes("CRUMB")) || (null == (k = (l = a.id).toUpperCase) ? 0 : null == (m = k.call(l)) ? 0 : m.includes("CRUMB")))
                }
                return b
        }
    }

    function gD(a, b, c, d) {
        const e = a.document.createElement("SPAN");
        e.appendChild(a.document.createTextNode(d));
        (new IntersectionObserver(f => {
            f.forEach(g => {
                g.isIntersecting && g.target.textContent && (NC = c, OC = d, PC(a) ? a.document.getElementById("google-adfil-sa-qtx").innerText = J(b.A, 11).replace("TERM", NC) : ou(a) || (g = a.getComputedStyle(a.document.body).paddingBottom.match(/\d+/), M(a.document.body, {
                        "padding-bottom": (g && g.length ? Number(g[0]) + 45 : 45) + "px"
                    }), WC(a), g = document.createElement("div"), g.id = "google-adfil-sa",
                    g.dir = AC(b) ? "rtl" : "ltr", M(g, {
                        background: "white",
                        "border-style": "solid",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        bottom: "0",
                        height: "45px",
                        position: "fixed",
                        "text-align": "center",
                        width: "100%",
                        border: "0px",
                        left: "0px",
                        "box-shadow": "0px 0px 10px 0px #00000026",
                        "z-index": U(on).toString()
                    }), g.appendChild(RC(a, b)), g.appendChild(QC(a, b)), g.appendChild(UC(a, b)), a.document.getElementsByTagName("body")[0].appendChild(g)))
            })
        }, {
            threshold: .98
        })).observe(e);
        return e
    }

    function hD(a, b, c, d) {
        const e = a.document.createElement("SPAN");
        kD(e);
        e.appendChild(a.document.createTextNode(d));
        const f = a.document.createElement("A");
        zB(f);
        M(f, {
            "text-decoration": "none"
        });
        we(f);
        f.className = "google-adfil";
        f.appendChild(DC(a, {
            bottom: "-1px",
            "font-family": '"Google Material Icons", "goog-matfb"',
            "font-size": "90%",
            "font-style": "normal",
            "font-weight": "normal",
            position: "relative",
            "text-decoration": "none"
        }));
        f.appendChild(a.document.createTextNode("\u00a0"));
        f.appendChild(e);
        const g = EC(a);
        f.addEventListener("click", h => {
            Oi(999, () => {
                AB(d, c, EC(a), g, b);
                vC(a, b, c)
            }, l => {
                l.e = `${U(un)}`
            });
            h.preventDefault();
            h.stopImmediatePropagation();
            return !1
        });
        return f
    }

    function kD(a) {
        zB(a);
        M(a, {
            "text-decoration": "underline"
        });
        M(a, {
            "text-decoration-style": "dotted"
        });
        M(a, {
            "-webkit-text-decoration-line": "underline",
            "-webkit-text-decoration-style": "dotted"
        })
    };
    var mD = class {
        constructor() {
            this.j = 0;
            this.l = new Set;
            this.A = 0;
            this.B = this.C = null
        }
        sendGen204(a, b, c, d, e, f, g, h) {
            var l, k, m = U(un);
            a = (null == (l = a.location) ? void 0 : l.hostname) || "";
            l = Array.from(null != (k = this.B) ? k : []).sort().join(",");
            k = this.C || "";
            let n = 0;
            for (const p of F(d, lD, 2)) n += F(p, ZC, 2).length;
            b = {
                wp: b,
                c,
                e: m,
                h: a,
                ld: l,
                lx: k,
                m: n,
                n: this.j,
                o: f,
                p: F(d, lD, 2).length,
                t: this.l.size,
                w: this.A,
                x: Math.round(e)
            };
            Qi("adfil-imp", Object.assign({}, b, g ? {
                sap: Number(g.j),
                tap: Number(g.F),
                bap: Number(g.B),
                nsr: g.J,
                im: Number(g.l),
                mo: Number(g.D),
                ae: Number(h.l),
                fs: Number(h.j)
            } : {}), 1)
        }
    };
    var nD = class {
        constructor(a, b, c, d) {
            this.win = a;
            this.vars = b;
            this.l = c;
            this.A = d
        }
        get window() {
            return this.win
        }
        get C() {
            return this.vars
        }
        get j() {
            return this.l
        }
        get B() {
            return this.A
        }
    };
    var oD = class {
        constructor(a) {
            this.l = a
        }
        get j() {
            return this.l
        }
    };

    function pD(a) {
        return a ? (a = a.match(/^[a-z]{2,3}/i)) ? a[0].toLowerCase() : "" : ""
    }

    function qD(a) {
        return new Set(a.map(pD).filter(b => b.length))
    };
    var rD = class {
        constructor(a, b, c, d) {
            this.B = a;
            this.D = b;
            this.F = c;
            this.C = d
        }
        get l() {
            return this.B
        }
        get A() {
            return this.D
        }
        get G() {
            return this.F
        }
        get j() {
            return this.C
        }
    };

    function AC(a) {
        return 2 === C(a.A, 12, 0)
    }
    var tD = class {
        constructor(a, b, c, d, e, f, g = !1) {
            this.B = a;
            this.j = b;
            this.A = c;
            this.G = d;
            this.D = e;
            this.l = f;
            this.F = g;
            this.C = ob(sD, J(c, 7)) ? 1 : 0
        }
    };
    const sD = ["ja", "zh_CN", "zh_TW"];

    function uD(a, b, c, d, e) {
        const f = vD(c);
        if (f) {
            var g = 488 > P(a).clientWidth,
                h = wD(a, g, c),
                l = new nD(a, b, c, d);
            fj(17, [d, f, g, h]);
            Oi(898, () => {
                a: {
                    try {
                        var k = a.document
                    } catch (I) {
                        break a
                    }
                    if (a.performance) {
                        var m = EC(a),
                            n = U(Pn),
                            p = n ? m + n : Infinity;
                        !T(Kn) && !T(wn) && 0 < F(f, lD, 2).length && xD(a.document);
                        b.hasOwnProperty("adfcb") || (b.adfcb = ig() ? null : Math.floor(20 * dg()));
                        n = b.adfcb;
                        if (null != n) {
                            if (T(co) || XC(a))
                                if (XC(a)) var r = new CC(!0, !1, !1, e.j, 0, g);
                                else {
                                    r = pu({
                                        K: a,
                                        Cd: 3E3,
                                        Jc: U(qn),
                                        xa: Rh,
                                        Ce: !0
                                    });
                                    var t = FC(a, 2),
                                        x = FC(a, 1);
                                    var w = 0 < r ||
                                        !h.l || T(io) && !h.j || 0 === h.G ? !1 : !h.A || 0 < x || g && 0 === t ? !0 : !1;
                                    r = new CC(w, 0 === t, 0 === x, e.j, r, g)
                                }
                            else r = null;
                            yD(a, r, l);
                            t = new mD;
                            p = new tD(d, g, f, n, p, r, "on" === b.google_adtest);
                            if ((k = k.body) && zD(k)) {
                                k = k.textContent || "";
                                c: switch (p.C) {
                                    case 1:
                                        x = 0;
                                        for (w = k.length - 1; 0 <= w; w--) cD.test(k[w]) || x++;
                                        break c;
                                    default:
                                        x = k.trim(), x = "" === x ? 0 : x.split(/\s+/).length
                                }
                                t.A = x;
                                w = pD(J(p.A, 7));
                                var A = a.document.documentElement;
                                A = pD(A.lang) || pD(A.getAttribute("xml:lang"));
                                if ("" !== A) var D = new Set([A]);
                                else {
                                    A = a.location;
                                    var H = A.host.match(/^[a-z]{2}\./i);
                                    H = H ? [H[0]] : [];
                                    for (G of A.pathname.split("/")) 2 === G.length && H.push(G);
                                    var G = qD(H);
                                    G.size || (A = a.navigator, G = qD((null == (D = A.languages) ? 0 : D.length) ? A.languages : [A.language]));
                                    D = G
                                }
                                t.C = w;
                                t.B = new Set(D);
                                if (x < U(zn)) p = "sw";
                                else if (a.document.querySelector('script[src*="www.google.com/adsense/search/ads.js"]')) p = "si";
                                else if (D.has(w))
                                    if (EC(a) >= p.D) p = "l";
                                    else {
                                        G = p.A;
                                        if (0 === F(G, lD, 2).length || p.l && !p.l.j) p = !0;
                                        else {
                                            p.l || (D = a.document, x = D.createElement("style"), x.textContent = ce(Yg `@font-face{font-family:"goog-matfb";size-adjust:17.16%;src:local("Times New Roman");}`),
                                                D.head.appendChild(x));
                                            D = new aD(F(G, lD, 2));
                                            d: {
                                                G = D.j;x = 0;
                                                for (w = 0; w < k.length; w++) {
                                                    for (;;) {
                                                        A = k.charCodeAt(w);
                                                        if (G.j[x].contains(A)) {
                                                            x = G.j[x].A.get(A);
                                                            break
                                                        }
                                                        if (0 === x) break;
                                                        x = G.j[x].j
                                                    }
                                                    for (A = x;;) {
                                                        A = G.j[A].l;
                                                        if (0 === A) break;
                                                        k = !0;
                                                        break d
                                                    }
                                                }
                                                k = !1
                                            }
                                            k ? (k = new yB, p = fD(a, a.document.body, p, t, D, k)) : p = !0
                                        }
                                        p = p ? "a" : "p"
                                    }
                                else p = "sl"
                            } else p = "se";
                            m = EC(a) - m;
                            !T(Kn) && 0 < t.j && (Kc(f, 13) || (k = a.document, D = k.createElement("LINK"), Be(D, N `https://www.google.com/adsense/search/ads.js`, "prefetch"), D.as = "script", D.fetchPriority = "low", k.head.appendChild(D)),
                                T(wn) && xD(a.document));
                            t.sendGen204(a, d, n, f, m, p, r, h);
                            fj(18, [n, m, p, t])
                        }
                    }
                }
            }, k => {
                k.e = `${U(un)}`
            })
        }
    }

    function yD(a, b, c) {
        T(co) && b && !b.j && (a = tu(a)) && Gg(a, () => {
            uD(c.window, c.C, c.j, c.B, new oD(!0))
        })
    }

    function wD(a, b, c) {
        if (!T(co) && !XC(a)) return null;
        a = AD(c) && Kc(BD(c), 5);
        b = AD(c) && Kc(BD(c), 6) && (b || !Kc(BD(c), 7));
        const d = F(vD(c), lD, 2).length;
        c = AD(c) && Kc(BD(c), 8);
        return new rD(a, b, d, c)
    }

    function zD(a) {
        try {
            xb(new ResizeObserver(() => {}))
        } catch (b) {
            return !1
        }
        return a.classList && void 0 !== a.classList.contains && void 0 !== a.attachShadow
    }

    function xD(a) {
        const b = a.createElement("LINK"),
            c = T(eo) ? N `https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700&text=shoppingmode` : N `https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700`;
        Be(b, c, "stylesheet");
        a.head.appendChild(b)
    };
    var DD = class extends K {
            constructor(a) {
                super(a, -1, CD)
            }
        },
        ZC = class extends K {
            constructor(a) {
                super(a)
            }
        },
        lD = class extends K {
            constructor(a) {
                super(a, -1, ED)
            }
        },
        CD = [2],
        ED = [2];

    function vD(a) {
        try {
            const h = a.l.match(/\bgoog_cpmi=([^&]*)/);
            if (h) {
                var b = decodeURIComponent(h[1]);
                var c = new DD(JSON.parse(b))
            } else c = null
        } catch (h) {
            c = null
        }
        if (!c)
            if (T(fo)) {
                var d, e;
                c = null != (e = null == (d = a.j) ? void 0 : E(d, DD, 1)) ? e : null
            } else c = null;
        if (!(d = c))
            if (T(fo)) {
                var f, g;
                d = null != (g = null == (f = a.aa) ? void 0 : E(f, DD, 11)) ? g : null
            } else d = null;
        return d
    }

    function AD(a) {
        return !!a.aa && Array.isArray(Tc(a.aa)) || !!a.j && Gc(a.j, 2)
    }

    function BD(a) {
        let b, c, d;
        return null != (d = (null == (b = a.aa) ? void 0 : Vc(b, FD, 13, Uc)) || (null == (c = a.j) ? void 0 : E(c, FD, 2))) ? d : null
    }
    var GD = class {
        constructor(a, b = null, c = null) {
            this.l = a;
            this.aa = b;
            this.j = c
        }
    };

    function HD(a) {
        T(Mn) && (a.easpf = !0, a.easpi = T(fo), T(co) && (a.easpa = !0), a.asntp = U(En), a.asntpv = U(In), a.asntpl = U(Gn), a.asntpm = U(Hn), a.asntpc = U(Fn), a.asna = U(An), a.asnd = U(Bn), a.asnp = U(Cn), a.asns = U(Dn), a.asmat = U(yn), a.asptt = U(Jn))
    };
    var JD = a => {
        const b = a.H;
        null == b.google_ad_output && (b.google_ad_output = "html");
        if (null != b.google_ad_client) {
            var c;
            (c = String(b.google_ad_client)) ? (c = c.toLowerCase(), "ca-" != c.substring(0, 3) && (c = "ca-" + c)) : c = "";
            b.google_ad_client = c
        }
        null != b.google_ad_slot && (b.google_ad_slot = String(b.google_ad_slot));
        b.google_webgl_support = !!kf.WebGLRenderingContext;
        b.google_ad_section = b.google_ad_section || b.google_ad_region || "";
        b.google_country = b.google_country || b.google_gl || "";
        c = (new Date).getTime();
        Array.isArray(b.google_color_bg) &&
            (b.google_color_bg = ID(a, b.google_color_bg, c));
        Array.isArray(b.google_color_text) && (b.google_color_text = ID(a, b.google_color_text, c));
        Array.isArray(b.google_color_link) && (b.google_color_link = ID(a, b.google_color_link, c));
        Array.isArray(b.google_color_url) && (b.google_color_url = ID(a, b.google_color_url, c));
        Array.isArray(b.google_color_border) && (b.google_color_border = ID(a, b.google_color_border, c));
        Array.isArray(b.google_color_line) && (b.google_color_line = ID(a, b.google_color_line, c))
    };

    function ID(a, b, c) {
        a.j |= 2;
        return b[c % b.length]
    };

    function KD(a, b) {
        var c = Ni,
            d;
        var e;
        d = (e = (e = Rg()) && (d = e.initialLayoutRect) && "number" === typeof d.top && "number" === typeof d.left && "number" === typeof d.width && "number" === typeof d.height ? new Ng(d.left, d.top, d.width, d.height) : null) ? new tf(e.left, e.top) : (d = Sg()) && va(d.rootBounds) ? new tf(d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d) return d;
        try {
            var f = new tf(0, 0),
                g = If(Df(b));
            if (yb(g, "parent")) {
                do {
                    if (g == a) var h = hh(b);
                    else {
                        var l = gh(b);
                        h = new tf(l.left, l.top)
                    }
                    d =
                        h;
                    f.x += d.x;
                    f.y += d.y
                } while (g && g != a && g != g.parent && (b = g.frameElement) && (g = g.parent))
            }
            return f
        } catch (k) {
            return c.la(888, k), new tf(-12245933, -12245933)
        }
    };
    var FD = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var MD = class extends K {
            constructor(a) {
                super(a, -1, LD)
            }
        },
        LD = [1];
    var OD = class extends K {
            constructor(a) {
                super(a, -1, ND)
            }
        },
        ND = [19],
        Uc = [13, 14];

    function PD(a, b) {
        b && !a.j && (a.j = b.split(":").find(c => 0 === c.indexOf("ID=")) || null)
    }
    var QD = class {
            constructor() {
                this.j = null;
                this.l = {
                    [ri]: {},
                    [si]: {},
                    [ti]: {}
                };
                const a = b => this.j ? gg(`${b} + ${this.j}`) % 1E3 : void 0;
                this.l[si] = {
                    [9]: (...b) => a(b[0])
                }
            }
        },
        RD;
    let SD = void 0;

    function TD() {
        li(SD, ji);
        return SD
    };

    function UD(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : md(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }

    function VD(a) {
        T(dn) && Qi("abg_adsensesettings_lserr", {
            s: a,
            g: T(en),
            c: TD(),
            r: .01
        }, .01)
    };
    var WD = (a = u) => a.ggeac || (a.ggeac = {});

    function XD(a = document) {
        let b;
        return !(null == (b = a.featurePolicy) || !b.allowedFeatures().includes("browsing-topics"))
    };
    class YD {
        constructor() {
            this.j = () => {}
        }
    };
    var $D = (a = WD()) => {
            Li(O(Mi), a);
            ZD(a);
            O(YD).j = Ki(Ji, a);
            O(Vo).l()
        },
        ZD = a => {
            const b = O(Vo);
            b.A = (c, d) => Ki(Fi, a, () => !1)(c, d, 1);
            b.B = (c, d) => Ki(Gi, a, () => 0)(c, d, 1);
            b.j = (c, d) => Ki(Hi, a, () => "")(c, d, 1);
            b.C = (c, d) => Ki(Ii, a, () => [])(c, d, 1);
            b.l = () => {
                Ki(Ci, a)(1)
            }
        };
    var aE = a => {
        const b = O(Mi).l();
        a = ez(a);
        a.eids || (a.eids = []);
        return b.concat(a.eids).join(",")
    };

    function bE(a, b, c) {
        return c ? dA(b, c, a.j) : null
    }

    function cE(a, b, c, d) {
        if (d) {
            var e = {
                Ad: y(c, 2) - Date.now() / 1E3,
                path: y(c, 3),
                domain: y(c, 4),
                Df: !1
            };
            a = a.j;
            B(d, 5) && cA(a) && (new aA(a.document)).set(b, y(c, 1), e)
        }
    }

    function dE(a, b, c) {
        if (c && dA(b, c, a.j))
            for (const e of eE(a.j.location.hostname)) {
                var d = a.j;
                B(c, 5) && cA(d) && (new aA(d.document)).remove(b, "/", e)
            }
    }
    var fE = class {
        constructor(a) {
            this.j = a;
            this.l = 0
        }
    };

    function eE(a) {
        if ("localhost" === a) return ["localhost"];
        a = a.split(".");
        if (2 > a.length) return [];
        const b = [];
        for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
        return b
    };

    function gE(a, b, c) {
        return Pi(629, d => {
            delete a._gfp_s_;
            if (!d) throw Error("Invalid JSONP response");
            d = d._cookies_;
            if (!d) return Promise.resolve();
            if (0 === d.length) throw Error("Invalid JSONP response");
            for (const f of d) {
                var e = f._domain_;
                const g = f._value_,
                    h = f._expires_,
                    l = f._path_;
                d = f._version_ || 1;
                if ("string" !== typeof e || "string" !== typeof g || "number" !== typeof h || "string" !== typeof l || "number" !== typeof d || !g) throw Error("Invalid JSONP response");
                e = hf(gf(ff(ef(new jf, g), h), l), e);
                switch (d) {
                    case 1:
                        cE(c, "__gads",
                            e, b);
                        break;
                    case 2:
                        T(so) && cE(c, "__gpi", e, b)
                }
            }
            return Promise.resolve()
        })
    }

    function hE(a, b, c) {
        let d = void 0;
        if (0 === a.l) {
            if (bE(a, "__gads", b)) var e = !0;
            else if (e = a.j, B(b, 5) && cA(e) && (new aA(e.document)).set("GoogleAdServingTest", "Good", void 0), e = "Good" === dA("GoogleAdServingTest", b, a.j)) {
                var f = a.j;
                B(b, 5) && cA(f) && (new aA(f.document)).remove("GoogleAdServingTest", void 0, void 0)
            }
            a.l = e ? 2 : 1
        }
        2 === a.l && (d = gE(c, b, a));
        c._gfp_p_ = !0;
        return d
    }

    function iE(a, b, c, d) {
        d = {
            domain: c.location.hostname,
            callback: "_gfp_s_",
            client: d
        };
        var e = bE(b, "__gads", a);
        e && (d.cookie = e);
        T(so) && ((e = bE(b, "__gpi", a)) && !e.includes("&") && (d.gpic = e), d.gpid_exp = "1");
        const f = Bd(Ed(id(jd("https://partner.googleadservices.com/gampad/cookie.js"))), d),
            g = hE(b, a, c);
        g ? new Promise(h => {
            c._gfp_s_ = l => {
                g(l).then(h)
            };
            ag(c.document, f)
        }) : Promise.resolve()
    }
    var jE = (a, b, c) => {
        "_gfp_p_" in b || (b._gfp_p_ = !1, "_gfp_a_" in b || (b._gfp_a_ = !0));
        const d = new fE(b);
        c = b.google_ad_client || c;
        var e = b._gfp_a_;
        if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
        if (e) {
            e = b._gfp_p_;
            if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_p_"}: ${e}`);
            e ? Promise.resolve() : iE(a, d, b, c)
        } else Promise.resolve();
        a = bE(d, "__gads", a) || "";
        RD || (RD = new QD);
        b = RD;
        PD(b, a);
        a = b.l;
        O(YD).j(a);
        O(Mi).j(20);
        O(Mi).j(17)
    };
    var pi = {
        tj: 0,
        pj: 1,
        nj: 2,
        oj: 3,
        rj: 5,
        sj: 6,
        qj: 7
    };
    var kE = class {
        constructor(a) {
            this.K = a.K;
            this.pubWin = a.pubWin;
            this.H = a.H;
            this.aa = a.aa;
            this.ca = a.ca;
            this.Ua = a.Ua;
            this.innerInsElement = a.innerInsElement;
            this.outerInsElement = a.outerInsElement;
            this.B = -1;
            this.j = 0;
            this.l = this.J = null;
            this.I = this.F = 0;
            this.A = [];
            this.mb = this.D = "";
            this.C = this.G = null
        }
    };
    var lE = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= tj(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var mE = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= tj(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var nE = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, b |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
            } catch (c) {
                b |= 32
            }
            return b
        },
        oE = (a, b, c) => {
            let d = 0;
            try {
                d |= tj(a, 2500);
                if (T(Eo)) {
                    const g = P(a).clientHeight;
                    d |= g ? 320 > g ? 2097152 : 0 : 1073741824
                }
                d |= uj(a);
                var e;
                if (e = 0 < b) {
                    var f = Pv(c, b);
                    e = !(f && 1 > f.length)
                }
                e && (d |= 134217728)
            } catch (g) {
                d |= 32
            }
            return d
        };

    function pE(a, b = null) {
        if (!T(Ho)) return 32;
        let c = a != a.top ? 512 : 0;
        var d;
        lu(null == (d = a.navigator) ? void 0 : d.userAgent) && (c |= 1048576);
        d = a.innerWidth;
        1200 > d && (c |= 65536);
        const e = a.innerHeight;
        650 > e && (c |= 2097152);
        b && 0 === c && (qE({
            K: a,
            Qd: 1,
            position: 3 === b ? "left" : "right",
            R: d,
            Y: e,
            Fa: new Set,
            minWidth: 120,
            minHeight: 500
        }) || (c |= 16));
        return c
    }

    function rE(a) {
        if (0 !== pE(a)) return "";
        const b = [],
            c = a.innerWidth,
            d = a.innerHeight;
        for (const e of ["left", "right"]) {
            const f = qE({
                K: a,
                Qd: 1,
                position: e,
                R: c,
                Y: d,
                Fa: new Set,
                minWidth: 120,
                minHeight: 500
            });
            f && b.push(`${f.width}x${f.height}_${String(e).charAt(0)}`)
        }
        return b.join("|")
    }

    function sE(a, b) {
        return null !== Sf(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c))
    }

    function tE(a, b) {
        return Sf(a, c => c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position)
    }

    function uE(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            "fixed" === d.position && "none" !== d.display && "hidden" !== d.visibility && b.push(c)
        }
        return b
    }

    function vE(a) {
        return Math.round(10 * Math.round(a / 10))
    }

    function wE(a) {
        return `${a.position}-${vE(a.R)}x${vE(a.Y)}-${vE(a.scrollY+a.Za)}Y`
    }

    function xE(a) {
        return `f-${wE({position:a.position,Za:a.Za,scrollY:0,R:a.R,Y:a.Y})}`
    }

    function yE(a, b) {
        a = Math.min(null != a ? a : Infinity, null != b ? b : Infinity);
        return Infinity !== a ? a : 0
    }

    function zE(a, b, c) {
        const d = pj(c.K).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0),
                    g = Math.min(e.bottom + 10, c.Y),
                    h = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.R);
                for (var l = .3 * c.R; f <= g; f += 10) {
                    if (0 < e && h < l) {
                        var k = xE({
                            position: "left",
                            Za: f,
                            R: c.R,
                            Y: c.Y
                        });
                        b.set(k, yE(b.get(k), h))
                    }
                    if (h < c.R && e > c.R - l) {
                        k = xE({
                            position: "right",
                            Za: f,
                            R: c.R,
                            Y: c.Y
                        });
                        const m = c.R - e;
                        b.set(k, yE(b.get(k), m))
                    }
                }
                d.add(a)
            }
        }
    }

    function qE(a) {
        var b = pj(a.K).sideRailAvailableSpace,
            c = {
                K: a.K,
                R: a.R,
                Y: a.Y,
                Fa: a.Fa
            },
            d = `f-${vE(c.R)}x${vE(c.Y)}`;
        if (!b.has(d)) {
            b.set(d, 0);
            pj(c.K).sideRailProcessedFixedElements.clear();
            d = new Set([...Array.from(c.K.document.querySelectorAll("[data-anchor-status]")), ...c.Fa]);
            for (var e of uE(c.K)) sE(e, d) || zE(e, b, c)
        }
        c = [];
        d = .9 * a.Y;
        var f = Aj(a.K),
            g = e = (a.Y - d) / 2,
            h = d / 11;
        for (var l = 0; 12 > l; l++) {
            var k = c,
                m = k.push;
            a: {
                var n = g;
                var p = a.position,
                    r = b,
                    t = {
                        K: a.K,
                        R: a.R,
                        Y: a.Y,
                        Fa: a.Fa
                    };
                const w = xE({
                        position: p,
                        Za: n,
                        R: t.R,
                        Y: t.Y
                    }),
                    A = wE({
                        position: p,
                        Za: n,
                        scrollY: f,
                        R: t.R,
                        Y: t.Y
                    });
                if (r.has(A)) {
                    n = yE(r.get(w), r.get(A));
                    break a
                }
                const D = "left" === p ? 20 : t.R - 20;
                let H = D;p = .3 * t.R / 7 * ("left" === p ? 1 : -1);
                for (let G = 0; 8 > G; G++) {
                    const I = xu(t.K.document, Math.round(H), Math.round(n));
                    var x = sE(I, t.Fa);
                    const aa = tE(I, t.K);
                    if (!x && null !== aa) {
                        zE(aa, r, t);
                        r.delete(A);
                        break
                    }
                    x || (x = I.offsetHeight >= .25 * t.Y, x = I.offsetWidth >= .9 * t.R && x);
                    if (x) r.set(A, Math.round(Math.abs(H - D) + 20));
                    else if (H !== D) H -= p, p /= 2;
                    else {
                        r.set(A, 0);
                        break
                    }
                    H += p
                }
                n = yE(r.get(w), r.get(A))
            }
            m.call(k, n);
            g += h
        }
        b = a.Qd;
        f = a.position;
        d = Math.round(d / 12);
        e = Math.round(e);
        g = a.minWidth;
        a = a.minHeight;
        m = [];
        h = Array(c.length).fill(0);
        for (k = 0; k < c.length; k++) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[k];) m.pop();
            h[k] = 0 === m.length ? 0 : m[m.length - 1] + 1;
            m.push(k)
        }
        m = [];
        l = c.length - 1;
        k = Array(c.length).fill(0);
        for (n = l; 0 <= n; n--) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[n];) m.pop();
            k[n] = 0 === m.length ? l : m[m.length - 1] - 1;
            m.push(n)
        }
        m = null;
        for (l = 0; l < c.length; l++)
            if (n = {
                    position: f,
                    width: Math.round(c[l]),
                    height: Math.round((k[l] - h[l] + 1) * d),
                    Hj: e + h[l] * d
                }, r = n.width >= g && n.height >= a, 0 === b && r) {
                m = n;
                break
            } else 1 === b && r && (!m || n.width * n.height > m.width * m.height) && (m = n);
        return m
    };
    const AE = {
        [27]: 512,
        [26]: 128
    };
    var BE = (a, b, c, d) => {
            switch (c) {
                case 1:
                case 2:
                    return 0 === FC(a, c);
                case 3:
                case 4:
                    return 0 === pE(a, c);
                case 8:
                    return b = "on" === b.google_adtest || oA(a.location, "google_ia_debug") ? -1 : 3600, 0 == (nE(a) | oE(a, b, d));
                case 9:
                    return b = !("on" === b.google_adtest || oA(a.location, "google_scr_debug")), !Qv(a, b, d);
                case 30:
                    return 0 == Vx(a);
                case 26:
                    return 0 == mE(a);
                case 27:
                    return 0 === lE(a);
                case 40:
                    return !0;
                default:
                    return !1
            }
        },
        CE = (a, b, c, d) => {
            switch (c) {
                case 0:
                case 40:
                case 10:
                case 11:
                    return 0;
                case 1:
                case 2:
                    return FC(a, c);
                case 3:
                case 4:
                    return pE(a,
                        c);
                case 8:
                    return b = "on" === b.google_adtest || oA(a.location, "google_ia_debug") ? -1 : 3600, nE(a) | oE(a, b, d);
                case 9:
                    return Qv(a, !("on" === b.google_adtest || oA(a.location, "google_scr_debug")), d);
                case 16:
                    return op(b, a) ? 0 : 8388608;
                case 30:
                    return Vx(a);
                case 26:
                    return mE(a);
                case 27:
                    return lE(a);
                default:
                    return 32
            }
        },
        DE = (a, b, c) => {
            const d = b.google_reactive_ad_format;
            if (!nd(d)) return !1;
            a = $f(a);
            if (!a || !BE(a, b, d, c)) return !1;
            b = pj(a);
            if (yj(b, d)) return !1;
            b.adCount[d] || (b.adCount[d] = 0);
            b.adCount[d]++;
            return !0
        },
        FE = a => {
            const b =
                a.google_reactive_ad_format;
            return !a.google_reactive_ads_config && EE(a) && 16 !== b && 10 !== b && 11 !== b && 40 !== b
        },
        GE = a => {
            if (!a.hash) return null;
            let b = null;
            eg(mA, c => {
                !b && oA(a, c) && (b = nA[c])
            });
            return b
        },
        IE = (a, b) => {
            const c = pj(a).tagSpecificState[1] || null;
            null != c && null == c.debugCard && eg(Iv, d => {
                !c.debugCardRequested && "number" === typeof d && rA(d, a.location) && (c.debugCardRequested = !0, HE(a, b, e => {
                    c.debugCard = e.createDebugCard(d, a)
                }))
            })
        },
        KE = (a, b, c) => {
            if (!b) return null;
            const d = pj(b);
            let e = 0;
            eg(od, f => {
                const g = AE[f];
                g && 0 ===
                    JE(a, b, f, c) && (e |= g)
            });
            d.wasPlaTagProcessed && (e |= 256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? "" + e : null
        },
        LE = (a, b, c) => {
            const d = [];
            eg(od, e => {
                if (T(Ho) || 3 !== e && 4 !== e) {
                    var f = JE(b, a, e, c);
                    0 !== f && d.push(e + ":" + f)
                }
            });
            return d.join(",") || null
        },
        ME = a => {
            const b = [],
                c = {};
            eg(a, (d, e) => {
                if ((e = nj[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (!1 === d) d = 2;
                    else return;
                    b.push(e + ":" + d)
                }
            });
            return b.join(",")
        },
        NE = a => {
            a = a.overlays;
            if (!a) return "";
            a = a.bottom;
            return "boolean" === typeof a ? a ? "1" : "0" : ""
        },
        JE = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            const f = pj(b),
                g = yj(f, c);
            if (a.google_reactive_ad_format == c || g) e |= 64;
            let h = !1;
            eg(f.reactiveTypeDisabledByPublisher, (l, k) => {
                String(c) === String(k) && (h = !0)
            });
            h && GE(b.location) !== c && (e |= 128);
            return e | CE(b, a, c, d)
        },
        OE = (a, b) => {
            if (a) {
                var c = pj(a),
                    d = {};
                eg(b, (e, f) => {
                    (f = nj[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0)
                });
                eg(od, e => {
                    d[oj[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        PE = (a, b, c) => {
            b = Ni.ma(b, c);
            return vs(1, window, Bd(ah(a), O(Vo).j(ln.j, ln.defaultValue) ? {
                bust: O(Vo).j(ln.j, ln.defaultValue)
            } : {})).then(b)
        },
        HE = (a, b, c) => {
            c = Ni.ma(212, c);
            vs(3, a, ah(b)).then(c)
        };
    const QE = a => {
        a.adsbygoogle || (a.adsbygoogle = [], ag(a.document, ah(N `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`)))
    };
    var RE = (a, b) => {
            L(a, "load", () => {
                QE(a);
                a.adsbygoogle.push(b)
            })
        },
        SE = a => {
            a = a.google_reactive_ad_format;
            return nd(a) ? "" + a : null
        },
        EE = a => !!SE(a) || null != a.google_pgb_reactive,
        TE = a => {
            a = SE(a);
            return 26 == a || 27 == a || 30 == a || 16 == a || 40 == a
        };
    var UE = a => "number" === typeof a.google_reactive_sra_index,
        ZE = (a, b, c) => {
            const d = b.K || b.pubWin,
                e = b.H;
            e.google_reactive_plat = LE(d, e, c);
            var f = ME(a);
            f && (e.google_reactive_plaf = f);
            (f = NE(a)) && (e.google_reactive_fba = f);
            (f = rE(d)) && (e.google_plas = f);
            VE(a, e);
            f = GE(b.pubWin.location);
            WE(a, f, e);
            f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
            HD(e);
            T(po) && (e.fsapi = !0);
            Tg() || dp(b.pubWin.top);
            f = Ui(b.pubWin, "rsrai", Pi(429, (g, h) => XE(b, d, e.google_ad_client, a, g, h, c)), Ni.ma(430, Da(Dj, b.pubWin, 431, Rh)));
            b.A.push(f);
            pj(d).wasReactiveTagRequestSent = !0;
            YE(b, a, c)
        };
    const YE = (a, b, c) => {
        const d = a.H,
            e = va(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = Ui(a.pubWin, "apcnf", Pi(353, (f, g) => {
            var h = a.pubWin,
                l = d.google_ad_client,
                k = ah(a.ca.ob),
                m = ah(a.ca.oc),
                n = ah(a.ca.Ab);
            return Ag(g.origin) ? sB(h, l, e, f.config, c, k, m, null, n) : !1
        }), Ni.ma(353, Da(Dj, a.pubWin, 353, Rh)));
        a.A.push(b)
    };
    var XE = (a, b, c, d, e, f, g) => {
            if (!Ag(f.origin)) return !1;
            f = e.data;
            if (!Array.isArray(f)) return !1;
            if (!fz(b, 1)) return !0;
            f && fj(6, [f]);
            e = e.amaConfig;
            const h = [],
                l = [],
                k = pj(b);
            let m = null;
            for (let n = 0; n < f.length; n++) {
                if (!f[n]) continue;
                const p = f[n],
                    r = p.adFormat;
                k && p.enabledInAsfe && (k.reactiveTypeEnabledInAsfe[r] = !0);
                if (!p.noCreative) {
                    p.google_reactive_sra_index = n;
                    if (9 === r && e) {
                        p.pubVars = Object.assign(p.pubVars || {}, $E(d, p));
                        const t = new Rv;
                        if (Lv(t, p)) {
                            m = t;
                            continue
                        }
                    }
                    h.push(p);
                    l.push(r)
                }
            }
            h.length && (Qi("rasra::pm", {
                rt: l.join(","),
                c
            }, .1), PE(a.ca.Kd, 522, n => {
                aF(h, b, c, n, d, g)
            }));
            e && sB(b, c, d, e, g, ah(a.ca.ob), ah(a.ca.oc), m);
            return !0
        },
        $E = (a, b) => {
            const c = b.adFormat,
                d = b.adKey;
            delete b.adKey;
            const e = {};
            a = a.page_level_pubvars;
            va(a) && Object.assign(e, a);
            e.google_ad_unit_key = d;
            e.google_reactive_sra_index = b.google_reactive_sra_index;
            30 === c && (e.google_reactive_ad_format = 30);
            e.google_pgb_reactive = e.google_pgb_reactive || 5;
            return b.pubVars = e
        },
        aF = (a, b, c, d, e, f) => {
            const g = [];
            for (let h = 0; h < a.length; h++) {
                const l = a[h],
                    k = l.adFormat,
                    m = l.adKey,
                    n = d.configProcessorForAdFormat(k);
                k && n && m ? (l.pubVars = $E(e, l), delete l.google_reactive_sra_index, g.push(k), Oi(466, () => n.verifyAndProcessConfig(b, l, f))) : Qi("rasra::ivc", {
                    af: k,
                    ak: m,
                    c
                }, .1)
            }
            Qi("rasra::pr", {
                rt: g.join(","),
                c
            }, .1)
        },
        VE = (a, b) => {
            const c = [];
            let d = !1;
            eg(nj, (e, f) => {
                let g;
                if (a.hasOwnProperty(f)) {
                    const h = a[f];
                    va(h) && h.google_ad_channel && (g = String(h.google_ad_channel))
                }
                f = nj[f] - 1;
                c[f] && "+" != c[f] || (c[f] = g ? g.replace(/,/g, "+") : "+", d = d || g)
            });
            d && (b.google_reactive_sra_channels = c.join(","))
        },
        WE = (a, b, c) => {
            const d = a.page_level_pubvars;
            !c.google_adtest &&
                ("on" == a.google_adtest || d && "on" == d.google_adtest || b) && (c.google_adtest = "on")
        };
    xb("script");
    var bF = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function cF(a, b) {
        if (!op(b, a)) return () => {};
        a = dF(b, a);
        if (!a) return () => {};
        const c = rz();
        b = qd(b);
        const d = {
            Ia: a,
            H: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => pb(c, d)
    }

    function dF(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !tp.test(a.className);) a = a.parentElement;
        return a
    }

    function eF(a, b) {
        for (let g = 0; g < a.childNodes.length; g++) {
            const h = {},
                l = a.childNodes[g];
            var c = l.style,
                d = h,
                e = ["width", "height"];
            for (let k = 0; k < e.length; k++) {
                const m = "google_ad_" + e[k];
                if (!d.hasOwnProperty(m)) {
                    var f = ng(c[e[k]]);
                    f = null === f ? null : Math.round(f);
                    null != f && (d[m] = f)
                }
            }
            if (h.google_ad_width == b.google_ad_width && h.google_ad_height == b.google_ad_height) return l
        }
        return null
    }

    function fF(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function gF(a, b) {
        const c = b.innerHeight >= b.innerWidth ? 1 : 2;
        if (a.j != c) {
            a.j = c;
            a = rz();
            for (const d of a)
                if (d.Ia.offsetWidth != d.offsetWidth || d.H.google_full_width_responsive_allowed) d.offsetWidth = d.Ia.offsetWidth, Oi(467, () => {
                    var e = d.Ia,
                        f = d.H;
                    const g = eF(e, f);
                    f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "", e.style.marginRight = f.gfwromr || "", e.style.height = f.gfwroh ? f.gfwroh + "px" : "", e.style.width = f.gfwrow ? f.gfwrow + "px" : "", e.style.zIndex = f.gfwroz || "", delete f.google_full_width_responsive_allowed);
                    delete f.google_ad_format;
                    delete f.google_ad_width;
                    delete f.google_ad_height;
                    delete f.google_content_recommendation_ui_type;
                    delete f.google_content_recommendation_rows_num;
                    delete f.google_content_recommendation_columns_num;
                    b.google_spfd(e, f, b);
                    const h = eF(e, f);
                    !h && g && 1 == e.childNodes.length ? (fF(g, !1), f.google_reactive_ad_format = 16, f.google_ad_section = "responsive_resize", e.dataset.adsbygoogleStatus = "reserved", e.className += " adsbygoogle-noablate", QE(b), b.adsbygoogle.push({
                            element: e,
                            params: f
                        })) : h && g ? h !=
                        g && (fF(g, !1), fF(h, !0)) : Qi("auto_size_refresh", {
                            context: "showOrHideElm",
                            url: b.location.href,
                            nodes: e.childNodes.length
                        })
                })
        }
    }
    var hF = class extends Sj {
        constructor() {
            super(...arguments);
            this.j = null
        }
        init(a) {
            const b = iz();
            if (!W(b, 27, !1)) {
                mz(b, 27, !0);
                this.j = a.innerHeight >= a.innerWidth ? 1 : 2;
                var c = () => gF(this, a);
                L(a, "resize", c);
                Tj(this, () => {
                    Qe(a, "resize", c)
                })
            }
        }
    };
    var iF = class {
        constructor(a, b, c) {
            this.K = a;
            this.Ia = b;
            this.H = c;
            this.j = null;
            this.l = this.A = 0
        }
        B() {
            10 <= ++this.A && u.clearInterval(this.j);
            var a = rp(this.K, this.Ia);
            a = sp(this.K, this.Ia, a);
            const b = np(this.Ia, this.K);
            null != b && 0 === b.x || u.clearInterval(this.j);
            a && (this.l++, Qi("rspv:al", {
                aligns: this.l,
                attempt: this.A,
                client: this.H.google_ad_client,
                eoffs: String(null != b ? b.x : null),
                eids: aE(this.H),
                slot: this.H.google_ad_slot,
                url: this.H.google_page_url
            }, .01))
        }
    };

    function jF(a, b) {
        var c = eA(a, kv(b));
        c = z(c, 2, b.tcString);
        c = z(c, 4, b.addtlConsent || "");
        z(c, 7, b.internalErrorState);
        c = !mv(b);
        z(a, 9, c);
        null != b.gdprApplies && z(a, 3, b.gdprApplies)
    }

    function kF(a) {
        const b = new sv(a.pubWin, -1, T(Mo));
        if (!ov(b)) return Promise.resolve(null);
        const c = iz(),
            d = W(c, 24);
        if (d) return Promise.resolve(d);
        const e = new Promise(f => {
            f = {
                resolve: f
            };
            const g = W(c, 25, []);
            g.push(f);
            mz(c, 25, g)
        });
        d || null === d || (mz(c, 24, null), b.addEventListener(f => {
            if (jv(f)) {
                mz(c, 24, f);
                jF(a.l, f);
                for (const g of W(c, 25, [])) g.resolve(f);
                mz(c, 25, [])
            } else mz(c, 24, null)
        }));
        return e
    };

    function lF(a) {
        const b = {};
        b.dtd = mF((new Date).getTime(), gj);
        return qh(b, a)
    }

    function mF(a, b, c = 1E5) {
        a -= b;
        return a >= c ? "M" : 0 <= a ? a : "-M"
    };
    var oF = (a, b, c) => {
        let d;
        const e = (null == (d = b.parentElement) ? 0 : d.classList.contains("adsbygoogle")) ? b.parentElement : b;
        c.addEventListener("load", () => nF(e));
        return Ui(a, "adpnt", (f, g) => {
            var h;
            if (zj(g, c.contentWindow)) {
                f = Cj(f).qid;
                try {
                    c.setAttribute("data-google-query-id", f);
                    null != a.googletag || (a.googletag = {
                        cmd: []
                    });
                    const l = null != (h = a.googletag.queryIds) ? h : [];
                    l.push(f);
                    500 < l.length && l.shift();
                    a.googletag.queryIds = l
                } catch (l) {}
                e.dataset.adStatus && Qi("adsense_late_fill", {
                    status: e.dataset.adStatus
                });
                e.dataset.adStatus =
                    "filled";
                h = !0
            } else h = !1;
            return h
        })
    };

    function nF(a) {
        setTimeout(() => {
            "filled" !== a.dataset.adStatus && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };

    function pF(a, b, c) {
        try {
            if (!Ag(c.origin) || a.j && !zj(c, a.j.contentWindow)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        "string" === typeof d && (e = a.Ma[d]) && a.W.yb(168, () => {
            e.call(a, b, c)
        })
    }
    class qF extends Sj {
        constructor(a, b) {
            var c = Ni,
                d = Rh;
            super();
            this.A = a;
            this.j = b;
            this.W = c;
            this.xa = d;
            this.Ma = {};
            this.fe = this.W.ma(168, (e, f) => void pF(this, e, f));
            this.xe = this.W.ma(169, (e, f) => Dj(this.A, "ras::xsf", this.xa, e, f));
            this.ga = [];
            this.pa(this.Ma);
            this.ga.push(Ti(this.A, "sth", this.fe, this.xe))
        }
        l() {
            for (const a of this.ga) a();
            this.ga.length = 0;
            super.l()
        }
    };
    class rF extends qF {
        constructor(a, b = null) {
            super(a, b);
            this.A = a
        }
    };
    var sF = class extends rF {
        constructor(a, b) {
            super(a, b);
            this.B = () => {};
            this.j && L(this.j, "load", this.B)
        }
        l() {
            this.j && Qe(this.j, "load", this.B);
            super.l();
            this.j = null
        }
        pa(a) {
            a["adsense-labs"] = b => {
                if (b = Cj(b).settings) try {
                    var c = new df(JSON.parse(b));
                    if (Fc(c, 1)) {
                        var d = this.A,
                            e = y(c, 1) || "";
                        if (T(en) ? null != iA({
                                win: d,
                                Ub: TD()
                            }).j : 1) {
                            if (T(en)) {
                                var f = iA({
                                    win: d,
                                    Ub: TD()
                                });
                                if (null != f.j) {
                                    VD("ok");
                                    var g = UD(f.j.value)
                                } else VD(f.l.message), g = {}
                            } else g = UD(d.localStorage);
                            null !== c && (g[e] = c.toJSON());
                            try {
                                d.localStorage.setItem("google_adsense_settings",
                                    JSON.stringify(g))
                            } catch (h) {}
                        }
                    }
                } catch (h) {}
            }
        }
    };

    function tF(a) {
        a.B = a.D;
        a.J.style.transition = "height 500ms";
        a.C.style.transition = "height 500ms";
        a.G.style.transition = "height 500ms";
        a.j.style.transition = "height 500ms";
        uF(a)
    }

    function vF(a, b) {
        (a.j.contentWindow || a.j.contentWindow).postMessage(JSON.stringify({
            msg_type: "expand-on-scroll-result",
            eos_success: !0,
            eos_amount: b,
            googMsgType: "sth"
        }), "*")
    }

    function uF(a) {
        const b = `rect(0px, ${a.j.width}px, ${a.B}px, 0px)`;
        a.j.style.clip = b;
        a.G.style.clip = b;
        a.j.setAttribute("height", a.B);
        a.j.style.height = a.B + "px";
        a.G.setAttribute("height", a.B);
        a.G.style.height = a.B + "px";
        a.C.style.height = a.B + "px";
        a.J.style.height = a.B + "px"
    }

    function wF(a, b) {
        b = lg(b.r_nh);
        a.D = null == b ? 0 : b;
        if (0 >= a.D) return "1";
        a.N = hh(a.J).y;
        a.L = Aj(a.A);
        if (a.N + a.B < a.L) return "2";
        if (a.N > vj(a.A) - a.A.innerHeight) return "3";
        b = a.L;
        a.j.setAttribute("height", a.D);
        a.j.style.height = a.D + "px";
        a.G.style.overflow = "hidden";
        a.J.style.position = "relative";
        a.J.style.transition = "height 100ms";
        a.C.style.transition = "height 100ms";
        a.G.style.transition = "height 100ms";
        a.j.style.transition = "height 100ms";
        b = Math.min(b + a.A.innerHeight - a.N, a.B);
        bh(a.C, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.j.width}px, ${b}px, 0px)`;
        bh(a.j, {
            clip: b
        });
        bh(a.G, {
            clip: b
        });
        return "0"
    }

    function xF(a, b = {}) {
        a.U && (b.eid = a.U);
        b.qid = a.Bb;
        Qi("eoscrl", b, hj(String(a.Cb)))
    }
    class yF extends rF {
        constructor(a, b) {
            super(a.K, b);
            this.G = a.outerInsElement.firstElementChild;
            this.C = a.outerInsElement;
            this.J = this.C.parentElement && this.C.parentElement.classList.contains("adsbygoogle") ? this.C.parentElement : this.C;
            this.B = parseInt(this.C.style.height, 10);
            this.U = null;
            this.Db = this.Xc = !1;
            this.Bb = "";
            this.ya = this.L = this.D = 0;
            this.ge = this.B / 5;
            this.N = hh(this.J).y;
            this.Cb = null;
            this.ee = Me(Pi(651, () => {
                this.N = hh(this.J).y;
                var c = this.L;
                this.L = Aj(this.A);
                this.B < this.D ? (c = this.L - c, 0 < c && (this.ya +=
                    c, this.ya >= this.ge ? (tF(this), vF(this, this.D)) : (this.B = Math.min(this.D, this.B + c), vF(this, c), uF(this)))) : Qe(this.A, "scroll", this.O)
            }), this);
            this.O = () => {
                var c = this.ee;
                kf.requestAnimationFrame ? kf.requestAnimationFrame(c) : c()
            }
        }
        pa(a) {
            a["expand-on-scroll"] = (b, c) => {
                b = Cj(b);
                this.U = b.i_expid;
                this.Bb = b.qid;
                this.Cb = b.gen204_fraction;
                this.Xc || (this.Xc = !0, b = wF(this, b), "0" === b && L(this.A, "scroll", this.O, Ne), c.source.postMessage(JSON.stringify({
                        msg_type: "expand-on-scroll-result",
                        eos_success: "0" === b,
                        googMsgType: "sth"
                    }),
                    "*"), xF(this, {
                    err: b
                }))
            };
            a["expand-on-scroll-force-expand"] = () => {
                this.Db || (this.Db = !0, tF(this), Qe(this.A, "scroll", this.O))
            }
        }
        l() {
            this.O && Qe(this.A, "scroll", this.O, Ne);
            super.l()
        }
    };

    function zF(a) {
        const b = a.L.getBoundingClientRect(),
            c = 0 > b.top + b.height;
        return !(b.top > a.A.innerHeight) && !c
    }
    class AF extends Sj {
        constructor(a, b, c) {
            super();
            this.A = a;
            this.C = b;
            this.L = c;
            this.D = 0;
            this.B = zF(this);
            this.J = Le(this.G, this);
            this.j = Pi(433, () => {
                var d = this.J;
                kf.requestAnimationFrame ? kf.requestAnimationFrame(d) : d()
            });
            L(this.A, "scroll", this.j, Ne)
        }
        G() {
            const a = zF(this);
            if (a && !this.B) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.C.contentWindow;
                c && (Vi(c, "ig", b, "*", 2), 10 <= ++this.D && this.j && Qe(this.A, "scroll", this.j, Ne))
            }
            this.B = a
        }
    };

    function BF(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function CF(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function DF(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };

    function EF(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return "string" === typeof c ? c : c.Mc + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        bh(a, "transition", b.join(","))
    }
    var FF = Ie(function() {
        if (Bb) return Nb("10.0");
        var a = Kf(document, "DIV"),
            b = Fb ? "-webkit" : Eb ? "-moz" : Bb ? "-ms" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = je("div", {
            style: c
        });
        nf(a, b);
        a = a.firstChild;
        b = a.style[zf("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[ch(a, "transition")] || "")
    });

    function GF(a, b, c) {
        0 > a.l[b].indexOf(c) && (a.l[b] += c)
    }

    function HF(a, b) {
        0 <= a.j.indexOf(b) || (a.j = b + a.j)
    }

    function IF(a, b) {
        0 > a.A.indexOf(b) && (a.A = b + a.A)
    }

    function JF(a, b, c, d) {
        return "" != a.A || b ? null : "" == a.j.replace(KF, "") ? null != c && a.l[0] || null != d && a.l[1] ? !1 : !0 : !1
    }

    function LF(a) {
        var b = JF(a, "", null, 0);
        if (null === b) return "XS";
        b = b ? "C" : "N";
        a = a.j;
        return 0 <= a.indexOf("a") ? b + "A" : 0 <= a.indexOf("f") ? b + "F" : b + "S"
    }
    var MF = class {
        constructor(a, b) {
            this.l = ["", ""];
            this.j = a || "";
            this.A = b || ""
        }
        toString() {
            return [this.l[0], this.l[1], this.j, this.A].join("|")
        }
    };

    function NF(a) {
        let b = a.W;
        a.J = function() {};
        OF(a, a.G, b);
        let c = a.G.parentElement;
        if (!c) return a.j;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : cg(c, b)
            } catch (g) {
                IF(a.j, "c")
            }
            const f = PF(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.U = !0);
            if (d && !f && QF(e)) {
                HF(a.j, "l");
                a.L = c;
                break
            }
            d = d && f;
            if (e && RF(a, e)) break;
            c = c.parentElement;
            if (!c) {
                if (b === a.Cb) break;
                try {
                    if (c = b.frameElement, b = b.parent, !Xf(b)) {
                        HF(a.j, "c");
                        break
                    }
                } catch (g) {
                    HF(a.j,
                        "c");
                    break
                }
            }
        }
        a.I && a.B && SF(a);
        return a.j
    }

    function TF(a) {
        function b() {
            UF(c, f, g);
            if (h && !l && !g) {
                const k = function(m) {
                    for (let n = 0; n < m.length; n++) bh(h, m[n], "0px")
                };
                k(VF);
                k(WF)
            }
        }
        const c = a.G;
        c.style.overflow = a.Bb ? "visible" : "hidden";
        a.I && (a.L ? (EF(c, XF), EF(a.L, XF)) : EF(c, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        null !== a.O && (c.style.opacity = a.O);
        const d = null != a.F && null != a.A && (a.pa || a.A > a.F) ? a.A : null,
            e = null != a.D && null != a.l && (a.pa || a.l > a.D) ? a.l : null;
        if (a.N) {
            const k = a.N.length;
            for (let m = 0; m < k; m++) UF(a.N[m], d, e)
        }
        const f = a.A,
            g = a.l,
            h = a.L,
            l = a.U;
        a.I ? u.setTimeout(b, 1E3) : b()
    }

    function YF(a) {
        if (a.B && !a.Ma || null == a.A && null == a.l && null == a.O && a.B) return a.j;
        var b = a.B;
        a.B = !1;
        NF(a);
        a.B = b;
        if (!b || null != a.ga && !JF(a.j, a.ga, a.A, a.l)) return a.j;
        0 <= a.j.j.indexOf("n") && (a.F = null, a.D = null);
        if (null == a.F && null !== a.A || null == a.D && null !== a.l) a.I = !1;
        (0 == a.A || 0 == a.l) && 0 <= a.j.j.indexOf("l") && (a.A = 0, a.l = 0);
        b = a.j;
        b.l[0] = "";
        b.l[1] = "";
        b.j = "";
        b.A = "";
        TF(a);
        return NF(a)
    }

    function RF(a, b) {
        let c = !1;
        "none" == b.display && (HF(a.j, "n"), a.B && (c = !0));
        "hidden" != b.visibility && "collapse" != b.visibility || HF(a.j, "v");
        "hidden" == b.overflow && HF(a.j, "o");
        "absolute" == b.position ? (HF(a.j, "a"), c = !0) : "fixed" == b.position && (HF(a.j, "f"), c = !0);
        return c
    }

    function OF(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const g = b.parentElement.childNodes;
        for (let l = 0; l < g.length; l++) {
            var h = g[l];
            h == b ? e = !0 : (h = ZF(a, h, c), d |= h, e && (f |= h))
        }
        f & 1 && (d & 2 && GF(a.j, 0, "o"), d & 4 && GF(a.j, 1, "o"));
        return !(d & 1)
    }

    function PF(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (x) {
            IF(a.j, "s")
        }
        var f = c.getAttribute("width"),
            g = lg(f),
            h = c.getAttribute("height"),
            l = lg(h),
            k = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        b = OF(a, c, b);
        var m = d && d.width;
        const n = d && d.height;
        var p = e && e.width,
            r = e && e.height,
            t = ng(m) == a.F && ng(n) == a.D;
        m = t ? m : p;
        r = t ? n : r;
        p = ng(m);
        t = ng(r);
        g = null !== a.F && (null !== p && a.F >= p || null !== g && a.F >= g);
        t = null !== a.D && (null !== t && a.D >= t || null !== l && a.D >= l);
        l = !b && QF(d);
        t = b || t || l || !(f || m || d && (!$F(String(d.minWidth)) || !aG(String(d.maxWidth))));
        k = b || g || l || k || !(h || r || d && (!$F(String(d.minHeight)) || !aG(String(d.maxHeight))));
        bG(a, 0, t, c, "width", f, a.F, a.A);
        cG(a, 0, "d", t, e, d, "width", m, a.F, a.A);
        cG(a, 0, "m", t, e, d, "minWidth", e && e.minWidth, a.F, a.A);
        cG(a, 0, "M", t, e, d, "maxWidth", e && e.maxWidth, a.F, a.A);
        a.Db ? (c = /^html|body$/i.test(c.nodeName), f = ng(n), h = d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1, h = null != a.l && d && f && Math.round(f) !== a.l && !h && "100%" !== d.minHeight, a.B && !c && h && (e.setProperty("height", "auto", "important"), d && !$F(String(d.minHeight)) && e.setProperty("min-height",
            "0px", "important"), d && !aG(String(d.maxHeight)) && a.l && Math.round(f) < a.l && e.setProperty("max-height", "none", "important"))) : (bG(a, 1, k, c, "height", h, a.D, a.l), cG(a, 1, "d", k, e, d, "height", r, a.D, a.l), cG(a, 1, "m", k, e, d, "minHeight", e && e.minHeight, a.D, a.l), cG(a, 1, "M", k, e, d, "maxHeight", e && e.maxHeight, a.D, a.l));
        return b
    }

    function SF(a) {
        function b() {
            if (0 < c) {
                var k = cg(e, d) || {};
                const m = ng(k.width);
                k = ng(k.height);
                null !== m && null !== f && h && h(0, f - m);
                null !== k && null !== g && h && h(1, g - k);
                --c
            } else u.clearInterval(l), h && (h(0, 0), h(1, 0))
        }
        let c = 31.25;
        const d = a.W,
            e = a.G,
            f = a.A,
            g = a.l,
            h = a.J;
        let l;
        u.setTimeout(function() {
            l = u.setInterval(b, 16)
        }, 990)
    }

    function ZF(a, b, c) {
        if (3 == b.nodeType) return /\S/.test(b.data) ? 1 : 0;
        if (1 == b.nodeType) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = cg(b, c)
            } catch (e) {}
            if (d) {
                if ("none" == d.display || "fixed" == d.position) return 0;
                if ("absolute" == d.position) {
                    if (!a.C.boundingClientRect || "hidden" == d.visibility || "collapse" == d.visibility) return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.C.boundingClientRect.left ? 2 : 0) | (c.bottom > a.C.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function bG(a, b, c, d, e, f, g, h) {
        if (null != h) {
            if ("string" == typeof f) {
                if ("100%" == f || !f) return;
                f = lg(f);
                null == f && (IF(a.j, "n"), GF(a.j, b, "d"))
            }
            if (null != f)
                if (c) {
                    if (a.B)
                        if (a.I) {
                            const l = Math.max(f + h - (g || 0), 0),
                                k = a.J;
                            a.J = function(m, n) {
                                m == b && d.setAttribute(e, l - n);
                                k && k(m, n)
                            }
                        } else d.setAttribute(e, h)
                } else GF(a.j, b, "d")
        }
    }

    function cG(a, b, c, d, e, f, g, h, l, k) {
        if (null != k) {
            f = f && f[g];
            "string" != typeof f || ("m" == c ? $F(f) : aG(f)) || (f = ng(f), null == f ? HF(a.j, "p") : null != l && HF(a.j, f == l ? "E" : "e"));
            if ("string" == typeof h) {
                if ("m" == c ? $F(h) : aG(h)) return;
                h = ng(h);
                null == h && (IF(a.j, "p"), GF(a.j, b, c))
            }
            if (null != h)
                if (d && e) {
                    if (a.B)
                        if (a.I) {
                            const m = Math.max(h + k - (l || 0), 0),
                                n = a.J;
                            a.J = function(p, r) {
                                p == b && (e[g] = m - r + "px");
                                n && n(p, r)
                            }
                        } else e[g] = k + "px"
                } else GF(a.j, b, c)
        }
    }
    var hG = class {
        constructor(a, b, c, d, e, f, g) {
            this.Cb = a;
            this.N = c;
            this.G = b;
            this.W = (a = this.G.ownerDocument) && (a.defaultView || a.parentWindow);
            this.C = new dG(this.G);
            this.B = g;
            this.Ma = eG(this.C, d.Sc, d.height, d.Pd);
            this.F = this.B ? this.C.boundingClientRect ? this.C.boundingClientRect.right - this.C.boundingClientRect.left : null : e;
            this.D = this.B ? this.C.boundingClientRect ? this.C.boundingClientRect.bottom - this.C.boundingClientRect.top : null : f;
            this.A = fG(d.width);
            this.l = fG(d.height);
            this.O = this.B ? fG(d.opacity) : null;
            this.ga =
                d.check;
            this.I = "animate" == d.Sc && !gG(this.C, this.l, this.ya) && FF();
            this.Bb = !!d.Zc;
            this.j = new MF;
            gG(this.C, this.l, this.ya) && HF(this.j, "r");
            e = this.C;
            e.j && e.l >= e.A && HF(this.j, "b");
            this.L = this.J = null;
            this.U = !1;
            this.pa = !!d.zf;
            this.Db = !!d.Nd;
            this.ya = !!d.Pd
        }
    };

    function gG(a, b, c) {
        var d;
        (d = a.j) && !(d = !a.B) && (c ? (b = a.l + Math.min(b, fG(a.getHeight())), a = a.j && b >= a.A) : a = a.j && a.l >= a.A, d = a);
        return d
    }
    var dG = class {
        constructor(a) {
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c && $f(c);
            this.j = !!c;
            this.boundingClientRect = null;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (g) {}
            var d = a;
            let e = 0,
                f = this.boundingClientRect;
            for (; d;) try {
                f && (e += f.top);
                const g = d.ownerDocument,
                    h = g && (g.defaultView || g.parentWindow);
                (d = h && h.frameElement) && (f = d.getBoundingClientRect())
            } catch (g) {
                break
            }
            this.l = e;
            c = c || u;
            this.A = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement : c.document.body).clientHeight;
            b = b && BF(b);
            this.B = !!a && !(2 == b || 3 == b) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.B
        }
        getWidth() {
            return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
        }
        getHeight() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function eG(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return gG(a, c, d)
        }
    }

    function QF(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function iG(a, b, c, d) {
        return YF(new hG(a, b, d, c, null, null, !0))
    }
    var jG = new MF("s", ""),
        KF = RegExp("[lonvafrbpEe]", "g");

    function aG(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function $F(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function UF(a, b, c) {
        null !== b && null !== lg(a.getAttribute("width")) && a.setAttribute("width", b);
        null !== c && null !== lg(a.getAttribute("height")) && a.setAttribute("height", c);
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    }
    var VF = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        WF = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");
    let kG = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
        lG = VF;
    for (let a = 0; a < lG.length; a++) kG += ", " + lG[a] + " .2s cubic-bezier(.4, 0, 1, 1)";
    lG = WF;
    for (let a = 0; a < lG.length; a++) kG += ", " + lG[a] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
    var XF = kG;

    function fG(a) {
        return "string" === typeof a ? lg(a) : "number" === typeof a && isFinite(a) ? a : null
    };

    function mG(a, b, c) {
        const d = {
            scrl: Aj(a.A || window),
            adk: a.D,
            adf: a.C,
            fmt: a.B
        };
        b && (d.str = gG(b, lg(c.r_nh), mg(c.r_cab)), d.ad_y = b.l, d.vph = b.A);
        eg(c, (e, f) => {
            d[f] = e
        });
        return d
    }

    function nG(a, b, c) {
        const d = hj(String(b.gen204_fraction));
        b = mG(a, c, b);
        b.url = a.A.document.URL;
        Qi("resize", b, d)
    }
    class oG extends rF {
        constructor(a, b, c) {
            super(a, b);
            this.D = String(c.google_ad_unit_key || "");
            this.C = String(c.google_ad_dom_fingerprint || "");
            this.B = String(c.google_ad_format || "")
        }
        pa(a) {
            a["resize-me"] = (b, c) => {
                b = Cj(b);
                var d = b.r_chk;
                if (null == d || "" === d) {
                    var e = lg(b.r_nw),
                        f = lg(b.r_nh),
                        g = lg(b.r_no);
                    null != g || 0 !== e && 0 !== f || (g = 0);
                    var h = b.r_str;
                    h = h ? h : null; {
                        var l = g,
                            k = mg(b.r_ao),
                            m = mg(b.r_ifr),
                            n = mg(b.r_cab);
                        const t = window;
                        if (this.j && t)
                            if ("no_rsz" === h) b.err = "7", nG(this, b, null), f = !0;
                            else if (g = new dG(this.j), g.j) {
                            var p =
                                g.getWidth();
                            null != p && (b.w = p);
                            p = g.getHeight();
                            null != p && (b.h = p);
                            if (eG(g, h, f, n)) {
                                var r = this.j.ownerDocument.getElementById(this.j.id + (T(ro) ? "_host" : "_anchor"));
                                p = r ? [this.j] : null;
                                r = r || this.j;
                                const x = T(no);
                                d = iG(t, r, {
                                    width: e,
                                    height: f,
                                    opacity: l,
                                    check: d,
                                    Sc: h,
                                    Zc: k,
                                    zf: m,
                                    Nd: x,
                                    Pd: n
                                }, p);
                                b.r_cui && mg(b.r_cui.toString()) && M(r, {
                                    height: (null === f ? 0 : f - 48) + "px",
                                    top: "24px"
                                });
                                null != e && (b.nw = e);
                                null != f && (b.nh = f);
                                b.rsz = d.toString();
                                b.abl = LF(d);
                                b.frsz = ("force" === h).toString();
                                b.err = "0";
                                nG(this, b, g);
                                f = !0
                            } else b.err = "1", nG(this,
                                b, g), f = !1
                        } else b.err = "3", nG(this, b, null), f = !1;
                        else b.err = "2", nG(this, b, null), f = !1
                    }
                    e = {
                        msg_type: "resize-result"
                    };
                    e.r_str = h;
                    e.r_status = f;
                    c = c.source;
                    e.googMsgType = "sth";
                    c.postMessage(JSON.stringify(e), "*");
                    this.j.dataset.googleQueryId || this.j.setAttribute("data-google-query-id", b.qid)
                }
            }
        }
        l() {
            super.l();
            this.j = null
        }
    };
    const pG = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    const qG = /^blogger$/,
        rG = /^wordpress(.|\s|$)/i,
        sG = /^joomla!/i,
        tG = /^drupal/i,
        uG = /\/wp-content\//,
        vG = /\/wp-content\/plugins\/advanced-ads/,
        wG = /\/wp-content\/themes\/genesis/,
        xG = /\/wp-content\/plugins\/genesis/;

    function yG(a) {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src") || "";
                if (vG.test(e)) return 5;
                if (xG.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href") || "", wG.test(e) || xG.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
                f = f.getAttribute("content") ||
                    "";
                if (qG.test(f)) return 1;
                if (rG.test(f)) return 2;
                if (sG.test(f)) return 3;
                if (tG.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = d.getAttribute("href") || "", uG.test(d))) return 2;
        return 0
    };
    let zG = navigator;
    var AG = a => {
            let b = 1;
            let c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        BG = (a, b) => {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return AG(a.toLowerCase())
        };
    const CG = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        DG = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        EG = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var FG = () => {
        const a = new ip;
        u.SVGElement && u.document.createElementNS && a.set(0);
        const b = sg();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        u.crypto && u.crypto.subtle && a.set(3);
        u.TextDecoder && u.TextEncoder && a.set(4);
        return hp(a)
    };
    var GG = new Map([
        [".google.com", a => N `https://adservice.google.com/adsid/integrator.${a}`],
        [".google.ad", a => N `https://adservice.google.ad/adsid/integrator.${a}`],
        [".google.ae", a => N `https://adservice.google.ae/adsid/integrator.${a}`],
        [".google.com.af", a => N `https://adservice.google.com.af/adsid/integrator.${a}`],
        [".google.com.ag", a => N `https://adservice.google.com.ag/adsid/integrator.${a}`],
        [".google.com.ai", a => N `https://adservice.google.com.ai/adsid/integrator.${a}`],
        [".google.al", a => N `https://adservice.google.al/adsid/integrator.${a}`],
        [".google.co.ao", a => N `https://adservice.google.co.ao/adsid/integrator.${a}`],
        [".google.com.ar", a => N `https://adservice.google.com.ar/adsid/integrator.${a}`],
        [".google.as", a => N `https://adservice.google.as/adsid/integrator.${a}`],
        [".google.at", a => N `https://adservice.google.at/adsid/integrator.${a}`],
        [".google.com.au", a => N `https://adservice.google.com.au/adsid/integrator.${a}`],
        [".google.az", a => N `https://adservice.google.az/adsid/integrator.${a}`],
        [".google.com.bd", a => N `https://adservice.google.com.bd/adsid/integrator.${a}`],
        [".google.be", a => N `https://adservice.google.be/adsid/integrator.${a}`],
        [".google.bf", a => N `https://adservice.google.bf/adsid/integrator.${a}`],
        [".google.bg", a => N `https://adservice.google.bg/adsid/integrator.${a}`],
        [".google.com.bh", a => N `https://adservice.google.com.bh/adsid/integrator.${a}`],
        [".google.bi", a => N `https://adservice.google.bi/adsid/integrator.${a}`],
        [".google.bj", a => N `https://adservice.google.bj/adsid/integrator.${a}`],
        [".google.com.bn", a => N `https://adservice.google.com.bn/adsid/integrator.${a}`],
        [".google.com.bo", a => N `https://adservice.google.com.bo/adsid/integrator.${a}`],
        [".google.com.br", a => N `https://adservice.google.com.br/adsid/integrator.${a}`],
        [".google.bs", a => N `https://adservice.google.bs/adsid/integrator.${a}`],
        [".google.bt", a => N `https://adservice.google.bt/adsid/integrator.${a}`],
        [".google.co.bw", a => N `https://adservice.google.co.bw/adsid/integrator.${a}`],
        [".google.com.bz", a => N `https://adservice.google.com.bz/adsid/integrator.${a}`],
        [".google.ca", a => N `https://adservice.google.ca/adsid/integrator.${a}`],
        [".google.cd", a => N `https://adservice.google.cd/adsid/integrator.${a}`],
        [".google.cf", a => N `https://adservice.google.cf/adsid/integrator.${a}`],
        [".google.cg", a => N `https://adservice.google.cg/adsid/integrator.${a}`],
        [".google.ch", a => N `https://adservice.google.ch/adsid/integrator.${a}`],
        [".google.ci", a => N `https://adservice.google.ci/adsid/integrator.${a}`],
        [".google.co.ck", a => N `https://adservice.google.co.ck/adsid/integrator.${a}`],
        [".google.cl", a => N `https://adservice.google.cl/adsid/integrator.${a}`],
        [".google.cm", a => N `https://adservice.google.cm/adsid/integrator.${a}`],
        [".google.com.co", a => N `https://adservice.google.com.co/adsid/integrator.${a}`],
        [".google.co.cr", a => N `https://adservice.google.co.cr/adsid/integrator.${a}`],
        [".google.com.cu", a => N `https://adservice.google.com.cu/adsid/integrator.${a}`],
        [".google.cv", a => N `https://adservice.google.cv/adsid/integrator.${a}`],
        [".google.com.cy", a => N `https://adservice.google.com.cy/adsid/integrator.${a}`],
        [".google.cz", a => N `https://adservice.google.cz/adsid/integrator.${a}`],
        [".google.de", a => N `https://adservice.google.de/adsid/integrator.${a}`],
        [".google.dj", a => N `https://adservice.google.dj/adsid/integrator.${a}`],
        [".google.dk", a => N `https://adservice.google.dk/adsid/integrator.${a}`],
        [".google.dm", a => N `https://adservice.google.dm/adsid/integrator.${a}`],
        [".google.dz", a => N `https://adservice.google.dz/adsid/integrator.${a}`],
        [".google.com.ec", a => N `https://adservice.google.com.ec/adsid/integrator.${a}`],
        [".google.ee", a => N `https://adservice.google.ee/adsid/integrator.${a}`],
        [".google.com.eg", a => N `https://adservice.google.com.eg/adsid/integrator.${a}`],
        [".google.es", a => N `https://adservice.google.es/adsid/integrator.${a}`],
        [".google.com.et", a => N `https://adservice.google.com.et/adsid/integrator.${a}`],
        [".google.fi", a => N `https://adservice.google.fi/adsid/integrator.${a}`],
        [".google.com.fj", a => N `https://adservice.google.com.fj/adsid/integrator.${a}`],
        [".google.fm", a => N `https://adservice.google.fm/adsid/integrator.${a}`],
        [".google.fr", a => N `https://adservice.google.fr/adsid/integrator.${a}`],
        [".google.ga", a => N `https://adservice.google.ga/adsid/integrator.${a}`],
        [".google.ge", a => N `https://adservice.google.ge/adsid/integrator.${a}`],
        [".google.gg", a => N `https://adservice.google.gg/adsid/integrator.${a}`],
        [".google.com.gh", a => N `https://adservice.google.com.gh/adsid/integrator.${a}`],
        [".google.com.gi", a => N `https://adservice.google.com.gi/adsid/integrator.${a}`],
        [".google.gl", a => N `https://adservice.google.gl/adsid/integrator.${a}`],
        [".google.gm", a => N `https://adservice.google.gm/adsid/integrator.${a}`],
        [".google.gr", a => N `https://adservice.google.gr/adsid/integrator.${a}`],
        [".google.com.gt", a => N `https://adservice.google.com.gt/adsid/integrator.${a}`],
        [".google.gy", a => N `https://adservice.google.gy/adsid/integrator.${a}`],
        [".google.com.hk", a => N `https://adservice.google.com.hk/adsid/integrator.${a}`],
        [".google.hn", a => N `https://adservice.google.hn/adsid/integrator.${a}`],
        [".google.hr", a => N `https://adservice.google.hr/adsid/integrator.${a}`],
        [".google.ht", a => N `https://adservice.google.ht/adsid/integrator.${a}`],
        [".google.hu", a => N `https://adservice.google.hu/adsid/integrator.${a}`],
        [".google.co.id", a => N `https://adservice.google.co.id/adsid/integrator.${a}`],
        [".google.ie", a => N `https://adservice.google.ie/adsid/integrator.${a}`],
        [".google.co.il", a => N `https://adservice.google.co.il/adsid/integrator.${a}`],
        [".google.im", a => N `https://adservice.google.im/adsid/integrator.${a}`],
        [".google.co.in", a => N `https://adservice.google.co.in/adsid/integrator.${a}`],
        [".google.iq", a => N `https://adservice.google.iq/adsid/integrator.${a}`],
        [".google.is", a => N `https://adservice.google.is/adsid/integrator.${a}`],
        [".google.it", a => N `https://adservice.google.it/adsid/integrator.${a}`],
        [".google.je", a => N `https://adservice.google.je/adsid/integrator.${a}`],
        [".google.com.jm", a => N `https://adservice.google.com.jm/adsid/integrator.${a}`],
        [".google.jo", a => N `https://adservice.google.jo/adsid/integrator.${a}`],
        [".google.co.jp", a => N `https://adservice.google.co.jp/adsid/integrator.${a}`],
        [".google.co.ke", a => N `https://adservice.google.co.ke/adsid/integrator.${a}`],
        [".google.com.kh", a => N `https://adservice.google.com.kh/adsid/integrator.${a}`],
        [".google.ki", a => N `https://adservice.google.ki/adsid/integrator.${a}`],
        [".google.kg", a => N `https://adservice.google.kg/adsid/integrator.${a}`],
        [".google.co.kr", a => N `https://adservice.google.co.kr/adsid/integrator.${a}`],
        [".google.com.kw", a => N `https://adservice.google.com.kw/adsid/integrator.${a}`],
        [".google.kz", a => N `https://adservice.google.kz/adsid/integrator.${a}`],
        [".google.la", a => N `https://adservice.google.la/adsid/integrator.${a}`],
        [".google.com.lb", a => N `https://adservice.google.com.lb/adsid/integrator.${a}`],
        [".google.li", a => N `https://adservice.google.li/adsid/integrator.${a}`],
        [".google.lk", a => N `https://adservice.google.lk/adsid/integrator.${a}`],
        [".google.co.ls", a => N `https://adservice.google.co.ls/adsid/integrator.${a}`],
        [".google.lt", a => N `https://adservice.google.lt/adsid/integrator.${a}`],
        [".google.lu", a => N `https://adservice.google.lu/adsid/integrator.${a}`],
        [".google.lv", a => N `https://adservice.google.lv/adsid/integrator.${a}`],
        [".google.com.ly", a => N `https://adservice.google.com.ly/adsid/integrator.${a}`],
        [".google.md", a => N `https://adservice.google.md/adsid/integrator.${a}`],
        [".google.me", a => N `https://adservice.google.me/adsid/integrator.${a}`],
        [".google.mg", a => N `https://adservice.google.mg/adsid/integrator.${a}`],
        [".google.mk", a => N `https://adservice.google.mk/adsid/integrator.${a}`],
        [".google.ml", a => N `https://adservice.google.ml/adsid/integrator.${a}`],
        [".google.com.mm", a => N `https://adservice.google.com.mm/adsid/integrator.${a}`],
        [".google.mn", a => N `https://adservice.google.mn/adsid/integrator.${a}`],
        [".google.ms", a => N `https://adservice.google.ms/adsid/integrator.${a}`],
        [".google.com.mt", a => N `https://adservice.google.com.mt/adsid/integrator.${a}`],
        [".google.mu", a => N `https://adservice.google.mu/adsid/integrator.${a}`],
        [".google.mv", a => N `https://adservice.google.mv/adsid/integrator.${a}`],
        [".google.mw", a => N `https://adservice.google.mw/adsid/integrator.${a}`],
        [".google.com.mx", a => N `https://adservice.google.com.mx/adsid/integrator.${a}`],
        [".google.com.my", a => N `https://adservice.google.com.my/adsid/integrator.${a}`],
        [".google.co.mz", a => N `https://adservice.google.co.mz/adsid/integrator.${a}`],
        [".google.com.na", a => N `https://adservice.google.com.na/adsid/integrator.${a}`],
        [".google.com.ng", a => N `https://adservice.google.com.ng/adsid/integrator.${a}`],
        [".google.com.ni", a => N `https://adservice.google.com.ni/adsid/integrator.${a}`],
        [".google.ne", a => N `https://adservice.google.ne/adsid/integrator.${a}`],
        [".google.nl", a => N `https://adservice.google.nl/adsid/integrator.${a}`],
        [".google.no", a => N `https://adservice.google.no/adsid/integrator.${a}`],
        [".google.com.np", a => N `https://adservice.google.com.np/adsid/integrator.${a}`],
        [".google.nr", a => N `https://adservice.google.nr/adsid/integrator.${a}`],
        [".google.nu", a => N `https://adservice.google.nu/adsid/integrator.${a}`],
        [".google.co.nz", a => N `https://adservice.google.co.nz/adsid/integrator.${a}`],
        [".google.com.om", a => N `https://adservice.google.com.om/adsid/integrator.${a}`],
        [".google.com.pa", a => N `https://adservice.google.com.pa/adsid/integrator.${a}`],
        [".google.com.pe", a => N `https://adservice.google.com.pe/adsid/integrator.${a}`],
        [".google.com.pg", a => N `https://adservice.google.com.pg/adsid/integrator.${a}`],
        [".google.com.ph", a => N `https://adservice.google.com.ph/adsid/integrator.${a}`],
        [".google.com.pk", a => N `https://adservice.google.com.pk/adsid/integrator.${a}`],
        [".google.pl", a => N `https://adservice.google.pl/adsid/integrator.${a}`],
        [".google.pn", a => N `https://adservice.google.pn/adsid/integrator.${a}`],
        [".google.com.pr", a => N `https://adservice.google.com.pr/adsid/integrator.${a}`],
        [".google.ps", a => N `https://adservice.google.ps/adsid/integrator.${a}`],
        [".google.pt", a => N `https://adservice.google.pt/adsid/integrator.${a}`],
        [".google.com.py", a => N `https://adservice.google.com.py/adsid/integrator.${a}`],
        [".google.com.qa", a => N `https://adservice.google.com.qa/adsid/integrator.${a}`],
        [".google.ro", a => N `https://adservice.google.ro/adsid/integrator.${a}`],
        [".google.ru", a => N `https://adservice.google.ru/adsid/integrator.${a}`],
        [".google.rw", a => N `https://adservice.google.rw/adsid/integrator.${a}`],
        [".google.com.sa", a => N `https://adservice.google.com.sa/adsid/integrator.${a}`],
        [".google.com.sb", a => N `https://adservice.google.com.sb/adsid/integrator.${a}`],
        [".google.sc", a => N `https://adservice.google.sc/adsid/integrator.${a}`],
        [".google.se", a => N `https://adservice.google.se/adsid/integrator.${a}`],
        [".google.com.sg", a => N `https://adservice.google.com.sg/adsid/integrator.${a}`],
        [".google.sh", a => N `https://adservice.google.sh/adsid/integrator.${a}`],
        [".google.si", a => N `https://adservice.google.si/adsid/integrator.${a}`],
        [".google.sk", a => N `https://adservice.google.sk/adsid/integrator.${a}`],
        [".google.sn", a => N `https://adservice.google.sn/adsid/integrator.${a}`],
        [".google.so", a => N `https://adservice.google.so/adsid/integrator.${a}`],
        [".google.sm", a => N `https://adservice.google.sm/adsid/integrator.${a}`],
        [".google.sr", a => N `https://adservice.google.sr/adsid/integrator.${a}`],
        [".google.st", a => N `https://adservice.google.st/adsid/integrator.${a}`],
        [".google.com.sv", a => N `https://adservice.google.com.sv/adsid/integrator.${a}`],
        [".google.td", a => N `https://adservice.google.td/adsid/integrator.${a}`],
        [".google.tg", a => N `https://adservice.google.tg/adsid/integrator.${a}`],
        [".google.co.th", a => N `https://adservice.google.co.th/adsid/integrator.${a}`],
        [".google.com.tj", a => N `https://adservice.google.com.tj/adsid/integrator.${a}`],
        [".google.tl", a => N `https://adservice.google.tl/adsid/integrator.${a}`],
        [".google.tm", a => N `https://adservice.google.tm/adsid/integrator.${a}`],
        [".google.tn", a => N `https://adservice.google.tn/adsid/integrator.${a}`],
        [".google.to", a => N `https://adservice.google.to/adsid/integrator.${a}`],
        [".google.com.tr", a => N `https://adservice.google.com.tr/adsid/integrator.${a}`],
        [".google.tt", a => N `https://adservice.google.tt/adsid/integrator.${a}`],
        [".google.com.tw", a => N `https://adservice.google.com.tw/adsid/integrator.${a}`],
        [".google.co.tz", a => N `https://adservice.google.co.tz/adsid/integrator.${a}`],
        [".google.com.ua", a => N `https://adservice.google.com.ua/adsid/integrator.${a}`],
        [".google.co.ug", a => N `https://adservice.google.co.ug/adsid/integrator.${a}`],
        [".google.co.uk", a => N `https://adservice.google.co.uk/adsid/integrator.${a}`],
        [".google.com.uy", a => N `https://adservice.google.com.uy/adsid/integrator.${a}`],
        [".google.co.uz", a => N `https://adservice.google.co.uz/adsid/integrator.${a}`],
        [".google.com.vc", a => N `https://adservice.google.com.vc/adsid/integrator.${a}`],
        [".google.co.ve", a => N `https://adservice.google.co.ve/adsid/integrator.${a}`],
        [".google.vg", a => N `https://adservice.google.vg/adsid/integrator.${a}`],
        [".google.co.vi", a => N `https://adservice.google.co.vi/adsid/integrator.${a}`],
        [".google.com.vn", a => N `https://adservice.google.com.vn/adsid/integrator.${a}`],
        [".google.vu", a => N `https://adservice.google.vu/adsid/integrator.${a}`],
        [".google.ws", a => N `https://adservice.google.ws/adsid/integrator.${a}`],
        [".google.rs", a => N `https://adservice.google.rs/adsid/integrator.${a}`],
        [".google.co.za", a => N `https://adservice.google.co.za/adsid/integrator.${a}`],
        [".google.co.zm", a => N `https://adservice.google.co.zm/adsid/integrator.${a}`],
        [".google.co.zw", a => N `https://adservice.google.co.zw/adsid/integrator.${a}`],
        [".google.cat", a => N `https://adservice.google.cat/adsid/integrator.${a}`]
    ].map(([a, b]) => [a, {
        json: b("json"),
        js: b("js"),
        ["sync.js"]: b("sync.js")
    }]));

    function HG(a, b, c) {
        const d = bg("LINK", a);
        try {
            if (d.rel = "preload", Xa("preload", "stylesheet")) {
                d.href = Dd(b).toString();
                const h = pf('style[nonce],link[rel="stylesheet"][nonce]', d.ownerDocument && d.ownerDocument.defaultView);
                h && d.setAttribute("nonce", h)
            } else {
                if (b instanceof Ad) var e = Dd(b).toString();
                else {
                    if (b instanceof Kd) var f = Ld(b);
                    else {
                        if (b instanceof Kd) var g = b;
                        else b = "object" == typeof b && b.na ? b.ka() : String(b), Nd.test(b) || (b = "about:invalid#zClosurez"), g = new Kd(b, Jd);
                        f = Ld(g)
                    }
                    e = f
                }
                d.href = e
            }
        } catch (h) {
            return
        }
        d.as =
            "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(d)
        } catch (h) {}
    };
    let IG = u;
    const KG = a => {
        const b = new Map([
            ["domain", u.location.hostname]
        ]);
        JG[3] >= Ea() && b.set("adsid", JG[1]);
        return Wg(GG.get(a).js, b)
    };
    let JG, LG;
    const MG = () => {
        IG = u;
        JG = IG.googleToken = IG.googleToken || {};
        const a = Ea();
        JG[1] && JG[3] > a && 0 < JG[2] || (JG[1] = "", JG[2] = -1, JG[3] = -1, JG[4] = "", JG[6] = "");
        LG = IG.googleIMState = IG.googleIMState || {};
        GG.has(LG[1]) || (LG[1] = ".google.com");
        Array.isArray(LG[5]) || (LG[5] = []);
        "boolean" !== typeof LG[6] && (LG[6] = !1);
        Array.isArray(LG[7]) || (LG[7] = []);
        "number" !== typeof LG[8] && (LG[8] = 0)
    };
    var NG = a => {
        MG();
        GG.has(a) && (LG[1] = a)
    };
    const OG = {
        Dc: () => 0 < LG[8],
        wf: () => {
            LG[8]++
        },
        xf: () => {
            0 < LG[8] && LG[8]--
        },
        yf: () => {
            LG[8] = 0
        },
        Gj: () => !1,
        sd: () => LG[5],
        ed: a => {
            try {
                a()
            } catch (b) {
                u.setTimeout(() => {
                    throw b;
                }, 0)
            }
        },
        Ld: () => {
            if (!OG.Dc()) {
                var a = u.document,
                    b = e => {
                        e = KG(e);
                        a: {
                            try {
                                var f = pf("script[nonce]");
                                break a
                            } catch (g) {}
                            f = void 0
                        }
                        HG(a, e.toString(), f);
                        f = bg("SCRIPT", a);
                        f.type = "text/javascript";
                        f.onerror = () => u.processGoogleToken({}, 2);
                        De(f, e);
                        try {
                            (a.head || a.body || a.documentElement).appendChild(f), OG.wf()
                        } catch (g) {}
                    },
                    c = LG[1];
                b(c);
                ".google.com" != c && b(".google.com");
                var d = {
                    newToken: "FBT"
                };
                u.setTimeout(() => u.processGoogleToken(d, 1), 1E3)
            }
        }
    };

    function PG(a) {
        MG();
        const b = IG.googleToken[5] || 0;
        a && (0 != b || JG[3] >= Ea() ? OG.ed(a) : (OG.sd().push(a), OG.Ld()));
        JG[3] >= Ea() && JG[2] >= Ea() || OG.Ld()
    }
    var RG = a => {
        u.processGoogleToken = u.processGoogleToken || ((b, c) => QG(b, c));
        PG(a)
    };
    const QG = (a = {}, b = 0) => {
        var c = a.newToken || "",
            d = "NT" == c,
            e = parseInt(a.freshLifetimeSecs || "", 10),
            f = parseInt(a.validLifetimeSecs || "", 10);
        const g = a["1p_jar"] || "";
        a = a.pucrd || "";
        MG();
        1 == b ? OG.yf() : OG.xf();
        var h = IG.googleToken = IG.googleToken || {},
            l = 0 == b && c && "string" === typeof c && !d && "number" === typeof e && 0 < e && "number" === typeof f && 0 < f && "string" === typeof g;
        d = d && !OG.Dc() && (!(JG[3] >= Ea()) || "NT" == JG[1]);
        var k = !(JG[3] >= Ea()) && 0 != b;
        if (l || d || k) d = Ea(), e = d + 1E3 * e, f = d + 1E3 * f, 1E-5 > Math.random() && Gh(u, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr" +
            `&err=${b}`), h[5] = b, h[1] = c, h[2] = e, h[3] = f, h[4] = g, h[6] = a, MG();
        if (l || !OG.Dc()) {
            b = OG.sd();
            for (c = 0; c < b.length; c++) OG.ed(b[c]);
            b.length = 0
        }
    };
    const SG = new Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        TG = new Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);

    function UG(a) {
        try {
            let e, f;
            const g = null == (e = a.performance) ? void 0 : null == (f = e.getEntriesByType("navigation")) ? void 0 : f[0];
            if (null == g ? 0 : g.type) {
                let h;
                return null != (h = SG.get(g.type)) ? h : null
            }
        } catch (e) {}
        let b, c, d;
        return null != (d = TG.get(null == (b = a.performance) ? void 0 : null == (c = b.navigation) ? void 0 : c.type)) ? d : null
    };
    var VG = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        Z = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };

    function WG() {
        const a = window.navigator.userAgent,
            b = /Chrome/.test(a);
        return /Android/.test(a) && b
    }

    function XG(a = window) {
        return !a.PeriodicSyncManager
    }

    function YG(a, b, c) {
        a = a.goog_tt_state_map;
        let d, e = [];
        b && (d = null == a ? void 0 : a.get(VG.issuerOrigin)) && e.push(d);
        c && (d = null == a ? void 0 : a.get(Z.issuerOrigin)) && e.push(d);
        return e
    }

    function ZG(a) {
        return T(So) ? !0 : a.some(b => b.hasRedemptionRecord)
    }

    function $G(a, b, c) {
        return b || ".google.ch" === c || "function" === typeof a.__tcfapi
    }

    function aH(a, b) {
        a = T(So) ? a.filter(c => 12 !== c.state).map(c => c.issuerOrigin) : a.filter(c => c.hasRedemptionRecord).map(c => c.issuerOrigin);
        if (0 == a.length) return null;
        a = {
            type: "send-redemption-record",
            issuers: a,
            refreshPolicy: "none",
            signRequestData: T(So) ? "omit" : "include",
            includeTimestampHeader: !0,
            additionalSignedHeaders: ["sec-time", "Sec-Redemption-Record"]
        };
        !T(So) && b && 0 < Object.keys(b).length && (a.additionalSigningData = Vb(JSON.stringify(b)));
        return a
    }

    function bH(a, b, c) {
        let d;
        const e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
        e && (e.state = b, void 0 != c && (e.hasRedemptionRecord = c))
    }

    function cH() {
        const a = `${VG.issuerOrigin}${VG.redemptionPath}`,
            b = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    issuer: VG.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        bH(VG.issuerOrigin, 2);
        return window.fetch(a, b).then(c => {
            if (!c.ok) throw Error(`${c.status}: Network response was not ok!`);
            bH(VG.issuerOrigin, 6, !0)
        }).catch(c => {
            c && "NoModificationAllowedError" === c.name ? bH(VG.issuerOrigin, 6, !0) : bH(VG.issuerOrigin, 5)
        })
    }

    function dH() {
        const a = `${VG.issuerOrigin}${VG.issuancePath}`;
        bH(VG.issuerOrigin, 8);
        return window.fetch(a, {
            keepalive: !0,
            trustToken: {
                type: "token-request"
            }
        }).then(b => {
            if (!b.ok) throw Error(`${b.status}: Network response was not ok!`);
            bH(VG.issuerOrigin, 10);
            return cH()
        }).catch(b => {
            if (b && "NoModificationAllowedError" === b.name) return bH(VG.issuerOrigin, 10), cH();
            bH(VG.issuerOrigin, 9)
        })
    }

    function eH() {
        bH(VG.issuerOrigin, 13);
        return document.hasTrustToken(VG.issuerOrigin).then(a => a ? cH() : dH())
    }

    function fH() {
        bH(Z.issuerOrigin, 13);
        if (window.Promise) {
            var a = document.hasTrustToken(Z.issuerOrigin).then(e => e).catch(e => window.Promise.reject({
                state: 19,
                error: e
            }));
            const b = `${Z.issuerOrigin}${Z.redemptionPath}`,
                c = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "none"
                    }
                };
            bH(Z.issuerOrigin, 16);
            a = a.then(e => window.fetch(b, c).then(f => {
                if (!f.ok) throw Error(`${f.status}: Network response was not ok!`);
                bH(Z.issuerOrigin, 18, !0)
            }).catch(f => {
                if (f && "NoModificationAllowedError" === f.name) bH(Z.issuerOrigin,
                    18, !0);
                else {
                    if (e) return window.Promise.reject({
                        state: 17,
                        error: f
                    });
                    bH(Z.issuerOrigin, 17)
                }
            })).then(() => document.hasTrustToken(Z.issuerOrigin).then(e => e).catch(e => window.Promise.reject({
                state: 19,
                error: e
            }))).then(e => {
                const f = `${Z.issuerOrigin}${Z.getStatePath}`;
                bH(Z.issuerOrigin, 20);
                return window.fetch(`${f}?ht=${e}`, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [Z.issuerOrigin]
                    }
                }).then(g => {
                    if (!g.ok) throw Error(`${g.status}: Network response was not ok!`);
                    bH(Z.issuerOrigin, 22);
                    return g.text().then(h =>
                        JSON.parse(h))
                }).catch(g => window.Promise.reject({
                    state: 21,
                    error: g
                }))
            });
            const d = Eg(window);
            return a.then(e => {
                const f = `${Z.issuerOrigin}${Z.issuancePath}`;
                return e && e.srqt && e.cs ? (bH(Z.issuerOrigin, 23), window.fetch(`${f}?cs=${e.cs}&correlator=${d}`, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(g => {
                    if (!g.ok) throw Error(`${g.status}: Network response was not ok!`);
                    bH(Z.issuerOrigin, 25);
                    return e
                }).catch(g => window.Promise.reject({
                    state: 24,
                    error: g
                }))) : e
            }).then(e => {
                if (e && e.srdt && e.cs) return bH(Z.issuerOrigin,
                    26), window.fetch(`${b}?cs=${e.cs}&correlator=${d}`, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "refresh"
                    }
                }).then(f => {
                    if (!f.ok) throw Error(`${f.status}: Network response was not ok!`);
                    bH(Z.issuerOrigin, 28, !0)
                }).catch(f => window.Promise.reject({
                    state: 27,
                    error: f
                }))
            }).then(() => {
                bH(Z.issuerOrigin, 29)
            }).catch(e => {
                if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                    if ("number" === typeof e.state && e.error instanceof Error) {
                        bH(Z.issuerOrigin, e.state);
                        const f = U(Ro);
                        Math.random() <= f && Jh({
                            state: e.state,
                            err: e.error.toString()
                        }, "dtt_err")
                    } else throw Error(e);
                else throw e;
            })
        }
    }

    function gH(a) {
        if (document.hasTrustToken && !T(Po) && a.A) {
            var b = window.goog_tt_promise_map;
            if (b && b instanceof Map) {
                var c = [];
                if (a.j.some(d => d.issuerOrigin === VG.issuerOrigin)) {
                    let d = b.get(VG.issuerOrigin);
                    d || (d = eH(), b.set(VG.issuerOrigin, d));
                    c.push(d)
                }
                a.j.some(d => d.issuerOrigin === Z.issuerOrigin) && (a = b.get(Z.issuerOrigin), a || (a = fH(), b.set(Z.issuerOrigin, a)), c.push(a));
                if (0 < c.length && window.Promise && window.Promise.all) return window.Promise.all(c)
            }
        }
    }
    var hH = class extends Sj {
        constructor(a, b, c) {
            super();
            this.A = a;
            this.j = [];
            b && WG() && this.j.push(VG);
            c && this.j.push(Z);
            if (document.hasTrustToken && !T(Po)) {
                const d = new Map;
                this.j.forEach(e => {
                    d.set(e.issuerOrigin, {
                        issuerOrigin: e.issuerOrigin,
                        state: this.A ? 1 : 12,
                        hasRedemptionRecord: !1
                    })
                });
                window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof Map ? new Map([...d, ...window.goog_tt_state_map]) : d;
                window.goog_tt_promise_map && window.goog_tt_promise_map instanceof Map || (window.goog_tt_promise_map =
                    new Map)
            }
        }
    };

    function iH(a) {
        var b;
        if (a = null == (b = a.navigator) ? void 0 : b.userActivation) {
            b = 0;
            if (null == a ? 0 : a.hasBeenActive) b |= 1;
            if (null == a ? 0 : a.isActive) b |= 2;
            return b
        }
    };
    const jH = /[+, ]/;

    function kH(a, b) {
        const c = a.H;
        var d = a.pubWin,
            e = {},
            f = d.document;
        var g = Jg(d);
        var h = jp(d, c.google_ad_width, c.google_ad_height);
        var l = lp(g).Hc;
        var k = d.top == d ? 0 : Xf(d.top) ? 1 : 2;
        var m = 4;
        h || 1 != k ? h || 2 != k ? h && 1 == k ? m = 7 : h && 2 == k && (m = 8) : m = 6 : m = 5;
        l && (m |= 16);
        l = "" + m;
        k = mp(d);
        m = !!c.google_page_url;
        e.google_iframing = l;
        0 != k && (e.google_iframing_environment = k);
        if (!m && "ad.yieldmanager.com" == f.domain) {
            for (l = f.URL.substring(f.URL.lastIndexOf("http")); - 1 < l.indexOf("%");) try {
                l = decodeURIComponent(l)
            } catch (p) {
                break
            }
            c.google_page_url = l;
            m = !!l
        }
        m ? (e.google_page_url = c.google_page_url, e.google_page_location = (h ? f.referrer : f.URL) || "EMPTY") : (h && Xf(d.top) && f.referrer && d.top.document.referrer === f.referrer ? e.google_page_url = d.top.document.URL : e.google_page_url = h ? f.referrer : f.URL, e.google_page_location = null);
        if (f.URL === e.google_page_url) try {
            var n = Math.round(Date.parse(f.lastModified) / 1E3) || null
        } catch (p) {
            n = null
        } else n = null;
        e.google_last_modified_time = n;
        d = g == g.top ? g.document.referrer : (d = Rg()) && d.referrer || "";
        e.google_referrer_url = d;
        kp(e, c);
        e =
            c.google_page_location || c.google_page_url;
        "EMPTY" == e && (e = c.google_page_url);
        e ? (e = e.toString(), 0 == e.indexOf("http://") ? e = e.substring(7, e.length) : 0 == e.indexOf("https://") && (e = e.substring(8, e.length)), d = e.indexOf("/"), -1 == d && (d = e.length), e = e.substring(0, d).split("."), d = !1, 3 <= e.length && (d = e[e.length - 3] in pG), 2 <= e.length && (d = d || e[e.length - 2] in pG), e = d) : e = !1;
        e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net";
        b = lH(a, b);
        d = a.H;
        f = d.google_ad_channel;
        g = "/pagead/ads?";
        "ca-pub-6219811747049371" ===
        d.google_ad_client && mH.test(f) && (g = "/pagead/lopri?");
        a = qh(b, `https://${e}${g}` + (Kc(a.aa, 9) && c.google_debug_params ? c.google_debug_params : ""));
        return c.google_ad_url = a
    }

    function nH(a) {
        return encodeURIComponent("RS-" + a.google_reactive_sra_index + "-") + "&" + ph({
            adk: a.google_ad_unit_key,
            client: a.google_ad_client,
            fa: a.google_reactive_ad_format
        })
    }

    function oH(a) {
        try {
            if (a.parentNode) return a.parentNode
        } catch (c) {
            return null
        }
        if (9 === a.nodeType) a: {
            try {
                const c = If(a);
                if (c) {
                    const d = c.frameElement;
                    if (d && Xf(c.parent)) {
                        var b = d;
                        break a
                    }
                }
            } catch (c) {}
            b = null
        }
        else b = null;
        return b
    }

    function pH(a, b) {
        b.eid = aE(a.pubWin);
        const c = a.H.google_loeid;
        "string" === typeof c && (a.j |= 4096, b.loeid = c)
    }

    function qH(a, b) {
        a = (a = $f(a.pubWin)) && a.document ? fp(a.document, a) : new tf(-12245933, -12245933);
        b.scr_x = Math.round(a.x);
        b.scr_y = Math.round(a.y)
    }

    function rH(a) {
        try {
            const b = u.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch (b) {}
        return ""
    }

    function sH(a) {
        const b = Vh();
        b && (a.debug_experiment_id = b);
        a.creatives = rH(/\b(?:creatives)=([\d,]+)/);
        a.adgroups = rH(/\b(?:adgroups)=([\d,]+)/);
        a.adgroups && (a.adtest = "on", a.disable_budget_throttling = !0, a.use_budget_filtering = !1, a.retrieve_only = !0, a.disable_fcap = !0)
    }

    function tH(a, b, c) {
        const d = a.H;
        var e = a.pubWin,
            f = a.K,
            g = Jg(window);
        d.fsapi && (b.fsapi = !0);
        b.ref = d.google_referrer_url;
        b.loc = d.google_page_location;
        var h;
        (h = Rg(e)) && va(h.data) && "string" === typeof h.data.type ? (h = h.data.type.toLowerCase(), h = "doubleclick" == h || "adsense" == h ? null : h) : h = null;
        h && (b.apn = h.substr(0, 10));
        g = lp(g);
        b.url || b.loc || !g.url || (b.url = g.url, g.Hc || (b.usrc = 1));
        h = d.google_trust_token_additional_signing_data || {};
        h.url = b.url;
        d.google_trust_token_additional_signing_data = h;
        g.url != (b.loc || b.url) && (b.top =
            g.url);
        a.mb && (b.etu = a.mb);
        0 <= a.B && (b.eae = a.B);
        (c = KE(d, f, f ? bA(c, f) : null)) && (b.fc = c);
        if (!zh(d)) {
            c = a.pubWin.document;
            g = "";
            if (c.documentMode && (h = (new Cf(c)).createElement("IFRAME"), h.frameBorder = "0", h.style.height = 0, h.style.width = 0, h.style.position = "absolute", c.body)) {
                c.body.appendChild(h);
                try {
                    const da = h.contentWindow.document;
                    da.open();
                    da.write(fe(re));
                    da.close();
                    g += da.documentMode
                } catch (da) {}
                c.body.removeChild(h)
            }
            b.docm = g
        }
        let l, k, m, n, p, r, t, x, w;
        try {
            var A = e.screenX;
            l = e.screenY
        } catch (da) {}
        try {
            k = e.outerWidth,
                m = e.outerHeight
        } catch (da) {}
        try {
            n = e.innerWidth, p = e.innerHeight
        } catch (da) {}
        try {
            r = e.screenLeft, t = e.screenTop
        } catch (da) {}
        try {
            n = e.innerWidth, p = e.innerHeight
        } catch (da) {}
        try {
            x = e.screen.availWidth, w = e.screen.availTop
        } catch (da) {}
        b.brdim = [r, t, A, l, x, w, k, m, n, p].join();
        A = 0;
        void 0 === u.postMessage && (A |= 1);
        0 < A && (b.osd = A);
        b.vis = BF(e.document);
        A = a.innerInsElement;
        e = EE(d) ? jG : YF(new hG(e, A, null, {
            width: 0,
            height: 0
        }, d.google_ad_width, d.google_ad_height, !1));
        b.rsz = e.toString();
        b.abl = LF(e);
        if (!EE(d) && (e = Ah(d), null != e)) {
            A =
                0;
            a: {
                try {
                    {
                        var D = d.google_async_iframe_id;
                        const da = window.document;
                        if (D) var H = da.getElementById(D);
                        else {
                            var G = da.getElementsByTagName("script"),
                                I = G[G.length - 1];
                            H = I && I.parentNode || null
                        }
                    }
                    if (D = H) {
                        H = [];
                        G = 0;
                        for (var aa = Date.now(); 100 >= ++G && 50 > Date.now() - aa && (D = oH(D));) 1 === D.nodeType && H.push(D);
                        var sa = H;
                        b: {
                            for (aa = 0; aa < sa.length; aa++) {
                                c: {
                                    var X = sa[aa];
                                    try {
                                        if (X.parentNode && 0 < X.offsetWidth && 0 < X.offsetHeight && X.style && "none" !== X.style.display && "hidden" !== X.style.visibility && (!X.style.opacity || 0 !== Number(X.style.opacity))) {
                                            const da =
                                                X.getBoundingClientRect();
                                            var wa = 0 < da.right && 0 < da.bottom;
                                            break c
                                        }
                                    } catch (da) {}
                                    wa = !1
                                }
                                if (!wa) {
                                    var Ha = !1;
                                    break b
                                }
                            }
                            Ha = !0
                        }
                        if (Ha) {
                            b: {
                                const da = Date.now();Ha = /^html|body$/i;wa = /^fixed/i;
                                for (X = 0; X < sa.length && 50 > Date.now() - da; X++) {
                                    const Bg = sa[X];
                                    if (!Ha.test(Bg.tagName) && wa.test(Bg.style.position || fh(Bg, "position"))) {
                                        var Ke = Bg;
                                        break b
                                    }
                                }
                                Ke = null
                            }
                            break a
                        }
                    }
                } catch (da) {}
                Ke = null
            }
            Ke && Ke.offsetWidth * Ke.offsetHeight <= 4 * e.width * e.height && (A = 1);
            b.pfx = A
        }
        a: {
            if (.05 > Math.random() && f) try {
                const da = f.document.getElementsByTagName("head")[0];
                var Xr = da ? yG(da) : 0;
                break a
            } catch (da) {}
            Xr = 0
        }
        f = Xr;
        0 !== f && (b.cms = f);
        d.google_lrv !== J(a.aa, 2) && (b.alvm = d.google_lrv || "none")
    }

    function uH(a, b) {
        let c = 0;
        a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : Yf(() => {
            c++;
            return !1
        }, !0, !0, a);
        c && (b.nhd = c)
    }

    function vH(a, b) {
        const c = W(b, 8, {});
        b = W(b, 9, {});
        const d = a.google_ad_section,
            e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
    }

    function wH(a, b, c) {
        const d = a.H;
        var e = a.H;
        b.dt = gj;
        e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
        a: {
            try {
                var f = u.performance;
                if (f && f.timing && f.now) {
                    var g = f.timing.navigationStart + Math.round(f.now()) - f.timing.domLoading;
                    break a
                }
            } catch (I) {}
            g = null
        }(e = (e = g) ? mF(e, u.Date.now() - gj, 1E6) : null) && (b.bdt = e);
        b.idt = mF(a.I, gj);
        e = a.H;
        b.shv = J(a.aa, 2);
        a.Ua && (b.mjsv = a.Ua);
        "sa" == e.google_loader_used ? b.ptt = 5 : "aa" == e.google_loader_used && (b.ptt = 9);
        /^\w{1,3}$/.test(e.google_loader_used) && (b.saldr = e.google_loader_used);
        if (e = Rg(a.pubWin)) {
            b.is_amp = 1;
            g = e || Rg();
            b.amp_v = g && g.mode ? +g.mode.version || null : null;
            if ((e = e || Rg()) && e.container) {
                e = e.container.split(",");
                g = [];
                for (f = 0; f < e.length; f++) g.push(Qg[e[f]] || "x");
                e = g.join()
            } else e = null;
            e && (b.act = e)
        }
        Bh(a.pubWin) && (b.abxe = 1);
        if ("_gfp_a_" in a.pubWin) {
            e = a.pubWin._gfp_a_;
            if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
            e && (e = new fE(a.pubWin), (g = bE(e, "__gads", c)) && (b.cookie = g), T(so) && (g = bE(e, "__gpi", c)) && !g.includes("&") && (b.gpic = g), T(to) && "1" === bE(e,
                "__gpi_opt_out", c) && (b.gpico = "1", b.pdopt = "1"))
        }
        e = iz();
        f = W(e, 8, {});
        g = d.google_ad_section;
        f[g] && (b.prev_fmts = f[g]);
        f = W(e, 9, {});
        f[g] && (b.prev_slotnames = f[g].toLowerCase());
        vH(d, e);
        g = W(e, 15, 0);
        0 < g && (b.nras = String(g));
        (f = Rg(window)) ? (f ? (g = f.pageViewId, f = f.clientId, "string" === typeof f && (g += f.replace(/\D/g, "").substr(0, 6))) : g = null, g = +g) : (g = Jg(window), (f = g.google_global_correlator) || (g.google_global_correlator = f = 1 + Math.floor(Math.random() * Math.pow(2, 43))), g = f);
        b.correlator = W(e, 7, g);
        T(Ao) && (b.rume = 1);
        if (d.google_ad_channel) {
            g =
                W(e, 10, {});
            f = "";
            var h = d.google_ad_channel.split(jH);
            for (var l = 0; l < h.length; l++) {
                var k = h[l];
                g[k] ? f += k + "+" : g[k] = !0
            }
            b.pv_ch = f
        }
        if (d.google_ad_host_channel) {
            f = W(e, 11, []);
            h = d.google_ad_host_channel.split("|");
            e = -1;
            g = [];
            for (l = 0; l < h.length; l++) {
                k = h[l].split(jH);
                f[l] || (f[l] = {});
                var m = "";
                for (var n = 0; n < k.length; n++) {
                    var p = k[n];
                    "" !== p && (f[l][p] ? m += "+" + p : f[l][p] = !0)
                }
                m = m.slice(1);
                g[l] = m;
                "" !== m && (e = l)
            }
            f = "";
            if (-1 < e) {
                for (h = 0; h < e; h++) f += g[h] + "|";
                f += g[e]
            }
            b.pv_h_ch = f
        }
        b.frm = d.google_iframing;
        b.ife = d.google_iframing_environment;
        e = d.google_ad_client;
        try {
            var r = Jg(window),
                t = r.google_prev_clients;
            t || (t = r.google_prev_clients = {});
            if (e in t) var x = 1;
            else t[e] = !0, x = 2
        } catch (I) {
            x = 0
        }
        b.pv = x;
        t = a.pubWin.document;
        x = a.H;
        e = a.pubWin;
        r = t.domain;
        e = (B(c, 5) && cA(e) ? e.document.cookie : null) || "";
        h = a.pubWin.screen;
        l = t.referrer;
        m = sh();
        if (Rg()) var w = window.gaGlobal || {};
        else {
            g = Math.round((new Date).getTime() / 1E3);
            f = x.google_analytics_domain_name;
            c = "undefined" == typeof f ? BG("auto", r) : BG(f, r);
            n = -1 < e.indexOf("__utma=" + c + ".");
            k = -1 < e.indexOf("__utmb=" + c);
            (r =
                (Ug() || window).gaGlobal) || (r = {}, (Ug() || window).gaGlobal = r);
            t = !1;
            if (n) {
                var A = e.split("__utma=" + c + ".")[1].split(";")[0].split(".");
                k ? r.sid = A[3] : r.sid || (r.sid = g + "");
                r.vid = A[0] + "." + A[1];
                r.from_cookie = !0
            } else {
                r.sid || (r.sid = g + "");
                if (!r.vid) {
                    t = !0;
                    k = Math.round(2147483647 * Math.random());
                    n = zG.appName;
                    p = zG.version;
                    var D = zG.language ? zG.language : zG.browserLanguage,
                        H = zG.platform,
                        G = zG.userAgent;
                    try {
                        A = zG.javaEnabled()
                    } catch (I) {
                        A = !1
                    }
                    A = [n, p, D, H, G, A ? 1 : 0].join("");
                    h ? A += h.width + "x" + h.height + h.colorDepth : u.java && u.java.awt &&
                        (h = u.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), A += h.screen.width + "x" + h.screen.height);
                    A = A + e + (l || "");
                    for (h = A.length; 0 < m;) A += m-- ^ h++;
                    r.vid = (k ^ AG(A) & 2147483647) + "." + g
                }
                r.from_cookie || (r.from_cookie = !1)
            }
            if (!r.cid) {
                b: for (g = f, A = 999, g && (g = 0 == g.indexOf(".") ? g.substr(1) : g, A = g.split(".").length), g = 999, e = e.split(";"), f = 0; f < e.length; f++)
                    if (h = CG.exec(e[f]) || DG.exec(e[f]) || EG.exec(e[f])) {
                        l = h[1] || 0;
                        if (l == A) {
                            w = h[2];
                            break b
                        }
                        l < g && (g = l, w = h[2])
                    }t && w && -1 != w.search(/^\d+\.\d+$/) ? (r.vid = w, r.from_cookie = !0) : w !=
                    r.vid && (r.cid = w)
            }
            r.dh = c;
            r.hid || (r.hid = Math.round(2147483647 * Math.random()));
            w = r
        }
        b.ga_vid = w.vid;
        b.ga_sid = w.sid;
        b.ga_hid = w.hid;
        b.ga_fc = w.from_cookie;
        b.ga_cid = w.cid;
        b.ga_wpids = x.google_analytics_uacct;
        uH(a.pubWin, b);
        (a = d.google_ad_layout) && 0 <= bF[a] && (b.rplot = bF[a])
    }

    function xH(a, b) {
        a = a.l;
        if ((null == a ? 0 : B(a, 6)) || qz()) b.npa = 1;
        if (a) {
            Fc(a, 3) && (b.gdpr = B(a, 3) ? "1" : "0");
            var c = y(a, 1);
            c && (b.us_privacy = c);
            (c = y(a, 2)) && (b.gdpr_consent = c);
            (c = y(a, 4)) && (b.addtl_consent = c);
            (a = y(a, 7)) && (b.tcfe = a)
        }
    }

    function yH(a, b) {
        const c = a.H;
        xH(a, b);
        eg(sz, (d, e) => {
            b[d] = c[e]
        });
        EE(c) && (a = SE(c), b.fa = a);
        b.pi || null == c.google_ad_slot || (a = kq(c), null != a.j && (a = ll(a.j.value), b.pi = a))
    }

    function zH(a, b) {
        var c = Tg() || dp(a.pubWin.top);
        c && (b.biw = c.width, b.bih = c.height);
        c = a.pubWin;
        c !== c.top && (a = dp(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
    }

    function AH(a, b) {
        var c = a.pubWin;
        null !== c && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = dp(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = gg(a.join(""))) : a = 0;
        0 !== a && (b.ifk = a)
    }

    function BH(a, b) {
        (a = oz()[a.H.google_ad_client]) && (b.psts = a.join())
    }

    function CH(a, b) {
        (a = a.pubWin.tmod) && (b.tmod = a)
    }

    function DH(a, b) {
        (a = a.pubWin.google_user_agent_client_hint) && (b.uach = Vb(a))
    }

    function EH(a, b) {
        const c = T(XG(window) ? Oo : No),
            d = T(Qo);
        (a = YG(a.pubWin, c, d)) && 0 < a.length && (b.tt_state = Vb(JSON.stringify(a)))
    }

    function FH(a, b) {
        try {
            const e = a.pubWin && a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
            if (e) {
                var c = JSON.parse(e("os-mode")),
                    d = parseInt(c["os-mode"], 10);
                0 <= d && (b.wsm = d + 1)
            }
        } catch (e) {}
    }

    function GH(a, b) {
        0 <= a.H.google_ad_public_floor && (b.pubf = a.H.google_ad_public_floor);
        0 <= a.H.google_ad_private_floor && (b.pvtf = a.H.google_ad_private_floor)
    }

    function HH(a, b) {
        const c = Number(a.H.google_traffic_source);
        c && Object.values(Ja).includes(c) && (b.trt = a.H.google_traffic_source)
    }

    function lH(a, b) {
        const c = {};
        yH(a, c);
        MG();
        c.adsid = JG[1];
        MG();
        c.pucrd = JG[6];
        DH(a, c);
        EH(a, c);
        wH(a, c, b);
        vh(c);
        c.u_sd = ep(a.pubWin);
        var d;
        c.dmc = null == (d = a.pubWin.navigator) ? void 0 : d.deviceMemory;
        Oi(889, () => {
            if (null == a.K) c.adx = -12245933, c.ady = -12245933;
            else {
                var e = KD(a.K, a.innerInsElement);
                c.adx && -12245933 != c.adx && c.ady && -12245933 != c.ady || (c.adx = Math.round(e.x), c.ady = Math.round(e.y));
                gp(a.innerInsElement) || (c.adx = -12245933, c.ady = -12245933, a.j |= 32768)
            }
        });
        zH(a, c);
        AH(a, c);
        qH(a, c);
        pH(a, c);
        a.F && (c.oid = a.F);
        BH(a,
            c);
        c.pvsid = Eg(a.pubWin, Ni);
        CH(a, c);
        FH(a, c);
        T(mn) && (c.uas = iH(a.pubWin));
        (d = UG(a.pubWin)) && (c.nvt = d);
        a.D && (c.scar = a.D);
        a.C && (c.topics = a.C instanceof Uint8Array ? Tb(a.C, 3) : a.C);
        tH(a, c, b);
        c.fu = a.j;
        c.bc = FG();
        MG();
        c.jar = JG[4];
        Kc(a.aa, 9) && sH(c);
        dj() && (c.atl = !0);
        GH(a, c);
        HH(a, c);
        "runAdAuction" in a.pubWin.navigator && "joinAdInterestGroup" in a.pubWin.navigator && (c.td = 1);
        null == O(Vo).j(oo.j, oo.defaultValue) || !1 !== a.H.google_video_play_muted || 10 !== a.H.google_reactive_ad_format && 11 !== a.H.google_reactive_ad_format ||
            (c.sdkv = O(Vo).j(oo.j, oo.defaultValue));
        return c
    }
    const mH = /YtLoPri/;
    var IH = class extends K {
        constructor(a) {
            super(a)
        }
    };

    function JH(a) {
        Ni.Rd(b => {
            b.shv = String(a);
            b.mjsv = "m202208040101";
            b.eid = aE(u)
        })
    }

    function KH(a) {
        JH(J(a, 2));
        a = Kc(a, 6);
        li(SD, ni);
        SD = a
    };

    function LH({
        Fe: a,
        Ff: b
    }) {
        return a || ("dev" === b ? "dev" : "")
    };
    var MH = "undefined" === typeof sttc ? void 0 : sttc;

    function NH(a) {
        var b = Ni;
        try {
            return li(a, mi), new OD(JSON.parse(a))
        } catch (c) {
            b.la(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
                d.jspb = String(a)
            })
        }
        return new OD
    };

    function OH(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = Gf(a.j.T() || window);
        if (0 >= c.bottom || c.bottom > d.height || 0 >= c.right || c.left >= d.width) return null;
        var e = PH(a, b, c, a.j.j.elementsFromPoint(qf(c.left + c.width / 2, c.left, c.right - 1), qf(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []),
            f = PH(a, b, c, a.j.j.elementsFromPoint(qf(c.left + c.width / 2, c.left, c.right - 1), qf(c.top + 2, c.top, c.bottom - 1)), 2, e.Ea),
            g = PH(a, b, c, a.j.j.elementsFromPoint(qf(c.left + 2, c.left, c.right - 1), qf(c.top + c.height / 2,
                c.top, c.bottom - 1)), 3, [...e.Ea, ...f.Ea]);
        const h = PH(a, b, c, a.j.j.elementsFromPoint(qf(c.right - 1 - 2, c.left, c.right - 1), qf(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.Ea, ...f.Ea, ...g.Ea]);
        var l = QH(a, b, c),
            k = n => ob(a.A, n.overlapType) && ob(a.B, n.overlapDepth) && ob(a.l, n.overlapDetectionPoint);
        e = kb([...e.entries, ...f.entries, ...g.entries, ...h.entries], k);
        k = kb(l, k);
        l = [...e, ...k];
        f = -2 > c.left || c.right > d.width + 2;
        f = 0 < l.length || f;
        g = Hf(a.j.j);
        const m = new Ng(c.left, c.top, c.width, c.height);
        e = [...lb(e, n => new Ng(n.elementRect.left,
            n.elementRect.top, n.elementRect.width, n.elementRect.height)), ...vb(lb(k, n => Pg(m, n.elementRect))), ...kb(Pg(m, new Ng(0, 0, d.width, d.height)), n => 0 <= n.top && n.top + n.height <= d.height)];
        return {
            entries: l,
            isOverlappingOrOutsideViewport: f,
            scrollPosition: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: b,
            targetRect: c,
            viewportSize: {
                width: d.width,
                height: d.height
            },
            overlappedArea: 20 > e.length ? RH(m, e) : SH(c, e)
        }
    }

    function TH(a, b) {
        const c = a.j.T(),
            d = a.j.j;
        return new Promise((e, f) => {
            const g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(l => {
                                    const k = new fi,
                                        m = ei(k, () => OH(a, l));
                                    m && (k.j.length && (m.executionTime = Math.round(Number(k.j[0].duration))), h.disconnect(), e(m))
                                }, UH);
                                h.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function PH(a, b, c, d, e, f) {
        if (0 === c.width || 0 === c.height) return {
            entries: [],
            Ea: []
        };
        const g = [],
            h = [];
        for (let n = 0; n < d.length; n++) {
            const p = d[n];
            if (p === b) continue;
            if (ob(f, p)) continue;
            h.push(p);
            const r = p.getBoundingClientRect();
            if (a.j.contains(p, b)) {
                g.push(VH(a, c, p, r, 1, e));
                continue
            }
            if (a.j.contains(b, p)) {
                g.push(VH(a, c, p, r, 2, e));
                continue
            }
            a: {
                var l = a;
                var k = b,
                    m = p;
                const w = l.j.Oe(k, m);
                if (!w) {
                    l = null;
                    break a
                }
                const {
                    suspectAncestor: A,
                    Qa: D
                } = WH(l, k, w, m) || {},
                {
                    suspectAncestor: H,
                    Qa: G
                } = WH(l, m, w, k) || {};l = A && D && H && G ? D <= G ? {
                    suspectAncestor: A,
                    overlapType: XH[D]
                } : {
                    suspectAncestor: H,
                    overlapType: YH[G]
                } : A && D ? {
                    suspectAncestor: A,
                    overlapType: XH[D]
                } : H && G ? {
                    suspectAncestor: H,
                    overlapType: YH[G]
                } : null
            }
            const {
                suspectAncestor: t,
                overlapType: x
            } = l || {};
            t && x ? g.push(VH(a, c, p, r, x, e, t)) : g.push(VH(a, c, p, r, 9, e))
        }
        return {
            entries: g,
            Ea: h
        }
    }

    function QH(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = cg(b, a.j.T());
                e && "visible" !== e.overflow && ("auto" !== e.overflowY && "scroll" !== e.overflowY && c.bottom > f.bottom + 2 ? d.push(VH(a, c, b, f, 5, 1)) : (e = "auto" === e.overflowX || "scroll" === e.overflowX, !e && c.left < f.left - 2 ? d.push(VH(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(VH(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function RH(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let g = 0; g < b.length && (!(d & 1 << g) || (f++, e = Og(e, b[g]), e)); g++);
            e && (c = 1 === f % 2 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function SH(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function VH(a, b, c, d, e, f, g) {
        const h = {
            element: c,
            elementRect: d,
            overlapType: e,
            overlapDetectionPoint: f
        };
        if (ob(a.A, e) && ob(a.l, f)) {
            b = new Kg(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = ZH(a, c)) && Mg(b, a)) c = 4;
            else {
                a = $H(c, d);
                if (Bb) {
                    e = lh(c, "paddingLeft");
                    f = lh(c, "paddingRight");
                    var l = lh(c, "paddingTop"),
                        k = lh(c, "paddingBottom");
                    e = new Kg(l, f, k, e)
                } else e = eh(c, "paddingLeft"), f = eh(c, "paddingRight"), l = eh(c, "paddingTop"), k = eh(c, "paddingBottom"), e = new Kg(parseFloat(l), parseFloat(f), parseFloat(k), parseFloat(e));
                Mg(b, new Kg(a.top +
                    e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = $H(c, d), c = Mg(b, c) ? 2 : 1)
            }
            h.overlapDepth = c
        }
        g && (h.suspectAncestor = g);
        return h
    }

    function WH(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.j.T();
        for (f = 0; f < e.length; f++) {
            const h = e[f];
            var g = cg(h, c);
            if (g) {
                if ("fixed" === g.position) return {
                    suspectAncestor: h,
                    Qa: 1
                };
                if ("sticky" === g.position && a.j.contains(h.parentElement, d)) return {
                    suspectAncestor: h,
                    Qa: 2
                };
                if ("absolute" === g.position) return {
                    suspectAncestor: h,
                    Qa: 3
                };
                if ("none" !== g.cssFloat) {
                    g = h === e[0];
                    const l = aI(a, e.slice(0, f), h);
                    if (g || l) return {
                        suspectAncestor: h,
                        Qa: 4
                    }
                }
            }
        }
        return (a = aI(a, e, b)) ? {
                suspectAncestor: a,
                Qa: 5
            } :
            null
    }

    function aI(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.j.contains(f, c)) continue;
            const g = f.getBoundingClientRect();
            if (!g) continue;
            const h = cg(f, a.j.T());
            if (h && d.bottom > g.bottom + 2 && "visible" === h.overflowY) return f
        }
        return null
    }

    function ZH(a, b) {
        var c = a.j.j;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d => /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return 0 === a.width || 0 === a.height ? null : new Kg(a.top, a.right, a.bottom, a.left)
    }

    function $H(a, b) {
        if (!Bb || 9 <= Number(Qb)) {
            var c = eh(a, "borderLeftWidth");
            d = eh(a, "borderRightWidth");
            e = eh(a, "borderTopWidth");
            a = eh(a, "borderBottomWidth");
            c = new Kg(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        } else {
            c = nh(a, "borderLeft");
            var d = nh(a, "borderRight"),
                e = nh(a, "borderTop");
            a = nh(a, "borderBottom");
            c = new Kg(e, d, a, c)
        }
        return new Kg(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    class bI {
        constructor(a) {
            var b = cI;
            this.j = Bf(a);
            this.A = [5, 8, 9];
            this.B = [3, 4];
            this.l = b
        }
    }
    const XH = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        YH = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        };
    kb(fg({
        xh: 1,
        yh: 2,
        fj: 3,
        gj: 4,
        ij: 5,
        sh: 6,
        th: 7,
        wh: 8,
        xi: 9,
        hj: 10,
        uh: 11,
        ej: 12,
        rh: 13
    }), a => !ob([1, 2], a));
    fg({
        Hg: 1,
        yi: 2,
        Sg: 3,
        jj: 4
    });
    const cI = fg({
            Ig: 1,
            mj: 2,
            ji: 3,
            Vi: 4
        }),
        UH = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function dI(a, b, c, d) {
        const e = new ss;
        let f = "";
        const g = t => {
            try {
                const x = "object" === typeof t.data ? t.data : JSON.parse(t.data);
                f === x.paw_id && (Qe(a, "message", g), x.error ? e.j(Error(x.error)) : e.resolve(d(x)))
            } catch (x) {}
        };
        let h;
        if ("function" === typeof(null == (h = a.gmaSdk) ? void 0 : h.getQueryInfo)) return L(a, "message", g), f = c(a.gmaSdk), e.promise;
        let l, k, m, n, p, r;
        return "function" === typeof(null == (l = a.webkit) ? void 0 : null == (k = l.messageHandlers) ? void 0 : null == (m = k.getGmaQueryInfo) ? void 0 : m.postMessage) || "function" === typeof(null ==
            (n = a.webkit) ? void 0 : null == (p = n.messageHandlers) ? void 0 : null == (r = p.getGmaSig) ? void 0 : r.postMessage) ? (f = String(Math.floor(2147483647 * dg())), L(a, "message", g), b(a.webkit.messageHandlers, f), e.promise) : null
    }

    function eI(a) {
        return dI(a, (b, c) => {
            let d, e;
            return void(null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c))
        }, b => b.getQueryInfo(), b => b.signal)
    };

    function fI(a) {
        if (a.j) return a.j;
        a.j = ug(a.A, "__uspapiLocator");
        return a.j
    }

    function gI(a) {
        let b;
        return "function" === typeof(null == (b = a.A) ? void 0 : b.__uspapi) || null != fI(a)
    }

    function hI(a, b) {
        var c;
        "function" === typeof(null == (c = a.A) ? void 0 : c.__uspapi) ? (a = a.A.__uspapi, a("getUSPData", 1, b)) : fI(a) && (iI(a), c = ++a.D, a.C[c] = b, a.j && a.j.postMessage({
            __uspapiCall: {
                command: "getUSPData",
                version: 1,
                callId: c
            }
        }, "*"))
    }

    function jI(a, b) {
        let c = {};
        if (gI(a)) {
            var d = Je(() => b(c));
            hI(a, (e, f) => {
                f && (c = e);
                d()
            });
            setTimeout(d, 500)
        } else b(c)
    }

    function iI(a) {
        a.B || (a.B = b => {
            try {
                let d = {};
                "string" === typeof b.data ? d = JSON.parse(b.data) : d = b.data;
                var c = d.__uspapiReturn;
                let e;
                null == (e = a.C) || e[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, L(a.A, "message", a.B))
    }
    var kI = class extends Sj {
        constructor(a) {
            super();
            this.A = a;
            this.j = null;
            this.C = {};
            this.D = 0;
            this.B = null
        }
        l() {
            this.C = {};
            this.B && (Qe(this.A, "message", this.B), delete this.B);
            delete this.C;
            delete this.A;
            delete this.j;
            super.l()
        }
    };
    var lI = class extends K {
        constructor(a) {
            super(a)
        }
    };

    function mI(a) {
        a.D || (a.j || (a.j = ug(a.B, "googlefcPresent")), a.D = !0);
        return !!a.j
    }

    function nI(a) {
        a.A || (a.A = b => {
            try {
                const c = Yc(lI, b.data.__fciReturn);
                (0, a.C[y(c, 1)])(c)
            } catch (c) {}
        }, L(a.B, "message", a.A))
    }

    function oI(a) {
        return new Promise(b => {
            if (mI(a))
                if (a.j === a.B) {
                    var c = a.j.googlefc || (a.j.googlefc = {});
                    c.__fci = c.__fci || [];
                    c.__fci.push("loaded", d => {
                        b(Yc(lI, d))
                    })
                } else nI(a), c = a.G++, a.C[c] = b, a.j.postMessage({
                    __fciCall: {
                        command: "loaded",
                        callId: c
                    }
                }, "*")
        })
    }
    var pI = class extends Sj {
        constructor(a) {
            super();
            this.B = a;
            this.A = this.j = null;
            this.C = {};
            this.G = 0;
            this.D = !1
        }
    };
    const qI = (a, b) => {
        try {
            const g = void 0 === Kc(b, 6) ? !0 : Kc(b, 6);
            let h, l;
            a: switch (C(b, 4, 0)) {
                case 1:
                    var c = "pt";
                    break a;
                case 2:
                    c = "cr";
                    break a;
                default:
                    c = ""
            }
            var d = new bf($e(C(b, 2, 0)), J(b, 3), c),
                e = null != (l = null == (h = E(b, Ze, 5)) ? void 0 : J(h, 1)) ? l : "";
            d.ub = e;
            d.j = g;
            d.win = a;
            var f = d.build();
            Ue(f)
        } catch (g) {}
    };

    function rI(a, b) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? qI(a, b) : L(a, "load", () => void qI(a, b)))
    };

    function sI(a) {
        try {
            let b, c;
            return (null != (c = null == (b = a.top) ? void 0 : b.frames) ? c : {}).google_ads_top_frame
        } catch (b) {}
        return null
    }

    function tI(a) {
        const b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }

    function uI(a) {
        if (a === a.top || Xf(a.top)) return Promise.resolve({
            status: 4
        });
        const b = sI(a);
        if (!b) return Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && tI(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        const c = new ss;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                mb: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    var vI = class extends K {
            constructor(a) {
                super(a)
            }
        },
        wI = [1, 3];
    const xI = N `https://securepubads.g.doubleclick.net/static/topics/topics_frame.html`;

    function yI(a) {
        const b = zI(a);
        return b.messageChannelSendRequestFn ? Promise.resolve(b.messageChannelSendRequestFn) : new Promise(c => {
            function d(h) {
                return g.j(h).then(({
                    data: l
                }) => l)
            }
            const e = bg("IFRAME");
            e.style.display = "none";
            e.name = "goog_topics_frame";
            e.src = Dd(xI).toString();
            const f = (new URL(xI.toString())).origin,
                g = qB({
                    destination: a,
                    Ca: e,
                    origin: f,
                    Pa: "goog:gRpYw:doubleclick"
                });
            g.j("goog:topics:frame:handshake:ack").then(h => {
                "goog:topics:frame:handshake:ack" === h.data && c(d)
            });
            b.messageChannelSendRequestFn =
                d;
            a.document.documentElement.appendChild(e)
        })
    }

    function AI(a, b, c, d, e) {
        var f = Ni;
        const {
            Ib: g,
            Hb: h
        } = BI(e);
        b = zI(b);
        b.getTopicsPromise || (c = {
                message: "goog:topics:frame:get:topics",
                callApi: c,
                sendGen204: d
            }, d && (c.pvsid = Eg(window)), a = a(c).then(l => {
                let k = h;
                if (l instanceof Uint8Array) k || (k = !(g instanceof Uint8Array && tb(l, g)));
                else if (oi()(l)) k || (k = l !== g);
                else return f.la(989, Error(JSON.stringify(l))), 7;
                if (k && e) try {
                    var m = new vI;
                    var n = z(m, 2, Wh());
                    l instanceof Uint8Array ? Nc(n, 1, wI, l) : Nc(n, 3, wI, l);
                    e.setItem("goog:cached:topics", ad(n))
                } catch (p) {}
                return l
            }), b.getTopicsPromise =
            a);
        return g && !h ? Promise.resolve(g) : b.getTopicsPromise
    }

    function BI(a) {
        if (!a) return {
            Ib: null,
            Hb: !0
        };
        try {
            var b = a.getItem("goog:cached:topics");
            if (!b) return {
                Ib: null,
                Hb: !0
            };
            const l = Yc(vI, b);
            let k;
            const m = Oc(l, wI);
            switch (m) {
                case 0:
                    k = null;
                    break;
                case 1:
                    var c;
                    a = l;
                    var d = 1 === Oc(l, wI) ? 1 : -1; {
                        let n = y(a, d);
                        if (null == n) var e = null;
                        else n instanceof fc ? e = n : (b = n, (n = null == b ? b : b.constructor === fc ? b : "string" === typeof b ? b ? new fc(b, bc) : ec() : $b(b) ? b.length ? new fc(new Uint8Array(b), bc) : ec() : null) && z(a, d, n, void 0, !0), e = n)
                    }
                    d = e;
                    var f = null == d ? ec() : d;
                    dc(bc);
                    var g = f.P;
                    var h = null == g ||
                        $b(g) ? g : "string" === typeof g ? Yb(g) : null;
                    k = (c = null == h ? h : f.P = h) ? new Uint8Array(c) : ac || (ac = new Uint8Array(0));
                    break;
                case 3:
                    k = C(l, 3 === Oc(l, wI) ? 3 : -1, 0);
                    break;
                default:
                    ze(m, void 0)
            }
            return {
                Ib: k,
                Hb: C(l, 2, 0) + 6048E5 < Wh()
            }
        } catch (l) {
            return {
                Ib: null,
                Hb: !0
            }
        }
    }

    function zI(a) {
        let b;
        return null != (b = a.google_tag_topics_state) ? b : a.google_tag_topics_state = {}
    };

    function CI(a, b) {
        if (eb()) {
            var c = a.document.documentElement.lang;
            DI(a) ? EI(b, Eg(a), !0, "", c) : (new MutationObserver((d, e) => {
                DI(a) && (EI(b, Eg(a), !1, c, a.document.documentElement.lang), e.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    }

    function DI(a) {
        return a.document.documentElement.classList.contains("translated-rtl") || a.document.documentElement.classList.contains("translated-ltr")
    }

    function EI(a, b, c, d, e) {
        Jh({
            ptt: `${a}`,
            pvsid: `${b}`,
            ibatl: String(c),
            pl: d,
            nl: e
        }, "translate-event")
    };

    function FI(a, b) {
        const c = a.document.getElementById(String(b.google_async_iframe_id) + (T(ro) ? "_host" : "_anchor"));
        a = a.document.getElementById(String(b.google_async_iframe_id) + (T(ro) ? "_host" : "_expand"));
        if (null == c || null == a) throw Error("no_ins_in_dom");
        return {
            innerInsElement: c,
            outerInsElement: a
        }
    }

    function GI(a) {
        const b = a.innerInsElement;
        a = a.outerInsElement;
        if (!b || !a) throw Error("no_ins_in_loader_provided_slot");
        return {
            innerInsElement: b,
            outerInsElement: a
        }
    }

    function HI() {
        return T(co) ? "google_affa_anchor_config" : "google_affa_link_config"
    }
    async function II({
        aa: a,
        ca: b,
        Ua: c,
        slot: d
    }) {
        const e = d.vars,
            f = $f(d.pubWin),
            {
                innerInsElement: g,
                outerInsElement: h
            } = T(qo) ? GI(d) : FI(d.pubWin, d.vars),
            l = new kE({
                K: f,
                pubWin: d.pubWin,
                H: e,
                aa: a,
                ca: b,
                Ua: c,
                innerInsElement: g,
                outerInsElement: h
            });
        l.I = Date.now();
        fj(1, [l.H]);
        Oi(1032, () => {
            if (f && T(Ko)) {
                var k = l.H;
                W(iz(), 32, !1) || (mz(iz(), 32, !0), CI(f, "sa" === k.google_loader_used ? 5 : 9))
            }
        });
        try {
            await JI(l)
        } catch (k) {
            if (!Ri(159, k)) throw k;
        }
        Oi(639, () => {
            {
                var k = l.H;
                const n = l.K;
                if (n && 1 === k.google_responsive_auto_format && !0 === k.google_full_width_responsive_allowed) {
                    var m;
                    (m = (m = n.document.getElementById(k.google_async_iframe_id)) ? Rf(m, "INS", "adsbygoogle") : null) ? (k = new iF(n, m, k), k.j = u.setInterval(Ca(k.B, k), 500), k.B(), k = !0) : k = !1
                } else k = !1
            }
            return k
        });
        Oi(914, () => {
            if (f && !bb() && !T(Mn)) {
                var k, m = d.vars;
                var n = (null == (k = f.location) ? void 0 : k.hash) || "";
                n = new GD(n, a);
                k = d.vars.google_ad_client;
                W(iz(), 29, !1) || (mz(iz(), 29, !0), uD(f, m, n, k, new oD(!1)))
            }
        });
        T(Mn) && T(Nn) && d.vars.google_ad_client && f && !bb() && (b = bA(l.l)) && (b = b.getItem(HI())) && KI(f, e, b);
        Ti(l.pubWin, "affa", k => {
            Oi(1008, () => {
                if (T(Mn) &&
                    d.vars.google_ad_client && f && !bb()) {
                    var m = k.config;
                    if (T(Nn)) {
                        var n = bA(l.l);
                        n && n.setItem(HI(), m)
                    }
                    KI(f, e, k.config)
                }
            })
        });
        return l
    }

    function KI(a, b, c) {
        c = Yc(IH, c);
        if (E(c, DD, 1)) {
            var d, e = (null == (d = a.location) ? void 0 : d.hash) || "";
            d = new GD(e, void 0, c);
            c = b.google_ad_client;
            W(iz(), 29, !1) || (mz(iz(), 29, !0), uD(a, b, d, c, new oD(!1)))
        }
    }

    function JI(a) {
        if (/_sdo/.test(a.H.google_ad_format)) return Promise.resolve();
        O(Mi).j(13);
        O(Mi).j(11);
        var b = iz(),
            c = W(b, 23, !1);
        c || mz(b, 23, !0);
        if (!c) {
            c = a.H.google_ad_client;
            var d = a.aa;
            if (Array.isArray(Tc(d))) b = E(Vc(d, FD, 13, Uc), jA, 2);
            else {
                var e, f;
                b = tb(null != (f = null == (e = Vc(d, MD, 14, Uc)) ? void 0 : Ic(e, 1)) ? f : [], [c]) ? E(E(Vc(d, MD, 14, Uc), FD, 2), jA, 2) : new jA
            }
            e = new kA(a.pubWin, a.H.google_ad_client, b, Kc(a.aa, 6));
            e.l = !0;
            b = E(e.C, fm, 1);
            if (e.l && (f = e.j, e.B && !bv(b) ? (c = new Zz, c = z(c, 1, 1)) : c = null, c)) {
                c = ad(c);
                try {
                    f.localStorage.setItem("google_auto_fc_cmp_setting",
                        c)
                } catch (g) {}
            }
            b && cv(new dv(e.j, new uv(e.j, e.A), b, new Dt(e.j)))
        }
        e = !Rg() && !ab();
        return !e || e && !LI(a) ? MI(a) : Promise.resolve()
    }

    function NI(a, b, c = !1) {
        b = KD(a.K, b);
        const d = Tg() || dp(a.pubWin.top);
        if (!b || -12245933 == b.y || -12245933 == d.width || -12245933 == d.height || !d.height) return 0;
        let e = 0;
        try {
            const f = a.pubWin.top;
            e = fp(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    }

    function LI(a) {
        return OI(a) || PI(a)
    }

    function OI(a) {
        const b = a.H;
        if (!b.google_pause_ad_requests) return !1;
        const c = u.setTimeout(() => {
                Qi("abg:cmppar", {
                    client: a.H.google_ad_client,
                    url: a.H.google_page_url
                })
            }, 1E4),
            d = Pi(450, () => {
                b.google_pause_ad_requests = !1;
                u.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                LI(a) || MI(a)
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function PI(a) {
        const b = a.pubWin.document,
            c = QI();
        if (0 > c.hidden && 0 > c.visible) return !1;
        const d = a.innerInsElement,
            e = CF(b);
        if (!e) return !1;
        if (!DF(b)) return RI(a, c.visible, d);
        const f = 3 === BF(b);
        if (NI(a, d) <= c.hidden && !f) return !1;
        let g = Pi(332, () => {
            !DF(b) && g && (Qe(b, e, g), RI(a, c.visible, d) || MI(a), g = null)
        });
        return L(b, e, g)
    }

    function QI() {
        const a = {
            hidden: 0,
            visible: 3
        };
        u.IntersectionObserver || (a.visible = -1);
        Uf() && (a.visible *= 2);
        return a
    }

    function RI(a, b, c) {
        if (!c || 0 > b) return !1;
        var d = a.H;
        if (!xj(d.google_reactive_ad_format) && (EE(d) || d.google_reactive_ads_config) || !gp(c) || NI(a, c) <= b) return !1;
        var e = iz(),
            f = W(e, 8, {});
        e = W(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const g = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !g) return !1;
        f = new Promise(h => {
            const l = new u.IntersectionObserver((k, m) => {
                jb(k, n => {
                    0 >= n.intersectionRatio || (m.unobserve(n.target), h(void 0))
                })
            }, {
                rootMargin: `${100*b}%`
            });
            a.J = l;
            l.observe(c)
        });
        e = new Promise(h => {
            c.addEventListener("adsbygoogle-close-to-visible-event",
                () => {
                    h(void 0)
                })
        });
        ja(Promise, "any").call(Promise, [f, e]).then(() => {
            Oi(294, () => {
                MI(a)
            })
        });
        return !0
    }
    async function MI(a) {
        Oi(326, () => {
            if (1 === uh(a.H)) {
                var c = T(Lo),
                    d = c || T(Jo),
                    e = a.pubWin;
                if (d && e === a.K) {
                    var f = new $i;
                    d = new aj;
                    f.setCorrelator(Eg(a.pubWin));
                    var g = aE(a.pubWin);
                    Mc(f, 5, g, "");
                    Xc(f, 2);
                    g = Qc(d, 1, f);
                    f = new Zi;
                    f = Wc(f, 10, !0);
                    var h = T(Co);
                    f = Wc(f, 8, h);
                    h = T(Do);
                    f = Wc(f, 12, h);
                    h = T(Go);
                    f = Wc(f, 7, h);
                    h = T(Fo);
                    f = Wc(f, 13, h);
                    Qc(g, 2, f);
                    e.google_rum_config = d.toJSON();
                    ag(e.document, ah(Kc(a.aa, 9) && c ? a.ca.uf : a.ca.vf))
                } else ci()
            }
        });
        a.H.google_ad_channel = SI(a, a.H.google_ad_channel);
        a.H.google_tag_partner = TI(a, a.H.google_tag_partner);
        UI(a);
        var b = a.H.google_start_time;
        "number" === typeof b && (gj = b, a.H.google_start_time = null);
        JD(a);
        VI(a);
        pz() && sA({
            win: a.pubWin,
            webPropertyCode: a.H.google_ad_client,
            ob: ah(a.ca.ob)
        });
        EE(a.H) && (qA() && (a.H.google_adtest = a.H.google_adtest || "on"), a.H.google_pgb_reactive = a.H.google_pgb_reactive || 3);
        WI(a.K);
        b = "function" === typeof a.pubWin.document.browsingTopics && (!T(vo) || XD(a.pubWin.document));
        if (T(wo) && b) try {
            a.G = yI(a.pubWin)
        } catch (c) {
            Ri(984, c)
        }
        return XI(a)
    }

    function VI(a) {
        a.K && (IE(a.K, a.ca.He), GE(a.K.location) && RE(a.K, {
            enable_page_level_ads: {
                pltais: !0
            },
            google_ad_client: a.H.google_ad_client
        }))
    }

    function SI(a, b) {
        return (b ? [b] : []).concat(ez(a.H).ad_channels || []).join("+")
    }

    function TI(a, b) {
        return (b ? [b] : []).concat(ez(a.H).tag_partners || []).join("+")
    }

    function YI(a, b, c, d) {
        c.src = lF(a);
        const e = d.pubWin.document;
        a = Bh(d.pubWin);
        c = ZI(c);
        a && d.A.push(Vg(d.pubWin, c));
        $I(d.innerInsElement, c);
        T(fn) && u.setTimeout(Pi(644, () => {
            const f = e.getElementById(b);
            Gg(f, () => {
                u.setTimeout(() => {
                    for (const g of d.A) g();
                    d.A.length = 0
                }, 200)
            })
        }), 0);
        return Promise.resolve(c)
    }

    function ZI(a) {
        const b = bg("IFRAME");
        eg(a, (c, d) => {
            null != c && b.setAttribute(d, c)
        });
        return b
    }

    function aJ(a, b, c) {
        return 9 == a.H.google_reactive_ad_format && Rf(a.outerInsElement, null, "fsi_container") ? (a.innerInsElement.appendChild(b), Promise.resolve(b)) : PE(a.ca.Kd, 525, d => {
            a.innerInsElement.appendChild(b);
            d.createAdSlot(a.K, a.H, b, a.outerInsElement.parentElement, bA(c, a.pubWin));
            return b
        })
    }

    function bJ(a, b, c) {
        rI(a.pubWin, Wc(We(Xc(Xc(Ve(new Xe, Ye(new Ze, String(Eg(a.pubWin)))), 4), 2), J(a.aa, 2)), 6, !0));
        const d = a.K;
        a.H.google_acr && a.H.google_acr(b);
        L(b, "load", () => {
            b && b.setAttribute("data-load-complete", !0);
            const f = d ? ez(d).enable_overlap_observer || !1 : !1;
            (a.H.ovlp || f) && d && d === a.pubWin && cJ(d, a, a.outerInsElement, b)
        });
        var e = f => {
            f && a.A.push(() => {
                f.va()
            })
        };
        dJ(a, b);
        T(to) && eJ(a, b);
        !d || EE(a.H) && !TE(a.H) || (e(new oG(d, b, a.H)), e(new yF(a, b)), e(d.IntersectionObserver ? null : new AF(d, b, a.innerInsElement)));
        d && (e(new sF(d, b)), a.A.push(cF(d, a.H)), O(hF).init(d), a.A.push(oF(d, a.outerInsElement, b)));
        b && b.setAttribute("data-google-container-id", c);
        c = a.H.iaaso;
        if (null != c) {
            e = a.outerInsElement;
            const f = e.parentElement;
            (f && tp.test(f.className) ? f : e).setAttribute("data-auto-ad-size", c)
        }
        c = a.outerInsElement;
        c.setAttribute("tabindex", "0");
        c.setAttribute("title", "Advertisement");
        c.setAttribute("aria-label", "Advertisement");
        fJ(a)
    }

    function dJ(a, b) {
        const c = a.pubWin,
            d = a.H.google_ad_client,
            e = oz();
        let f = null;
        const g = Ti(c, "pvt", (h, l) => {
            "string" === typeof h.token && l.source === b.contentWindow && (f = h.token, g(), e[d] = e[d] || [], e[d].push(f), 100 < e[d].length && e[d].shift())
        });
        a.A.push(g)
    }

    function gJ(a, b) {
        var c = bE(a, "__gpi_opt_out", b.l);
        c && (c = hf(gf(ff(ef(new jf, c), 2147483647), "/"), b.pubWin.location.hostname), cE(a, "__gpi_opt_out", c, b.l))
    }

    function eJ(a, b) {
        const c = Ti(a.pubWin, "gpi-uoo", (d, e) => {
            if (e.source === b.contentWindow) {
                e = hf(gf(ff(ef(new jf, d.userOptOut ? "1" : "0"), 2147483647), "/"), a.pubWin.location.hostname);
                var f = new fE(a.pubWin);
                cE(f, "__gpi_opt_out", e, a.l);
                if (d.userOptOut || d.clearAdsData) dE(f, "__gads", a.l), dE(f, "__gpi", a.l)
            }
        });
        a.A.push(c)
    }

    function fJ(a) {
        const b = Rg(a.pubWin);
        if (b)
            if ("AMP-STICKY-AD" === b.container) {
                const c = d => {
                    "fill_sticky" === d.data && b.renderStart && b.renderStart()
                };
                L(a.pubWin, "message", Ni.ma(616, c));
                a.A.push(() => {
                    Qe(a.pubWin, "message", c)
                })
            } else b.renderStart && b.renderStart()
    }

    function cJ(a, b, c, d) {
        TH(new bI(a), c).then(e => {
            fj(8, [e]);
            return e
        }).then(e => {
            const f = c.parentElement;
            (f && tp.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", e.isOverlappingOrOutsideViewport);
            return e
        }).then(e => {
            const f = b.H.armr || "",
                g = e.executionTime || "",
                h = null == b.H.iaaso ? "" : Number(b.H.iaaso),
                l = Number(e.isOverlappingOrOutsideViewport),
                k = lb(e.entries, w => `${w.overlapType}:${w.overlapDepth}:${w.overlapDetectionPoint}`),
                m = Number(e.overlappedArea.toFixed(2)),
                n = d.dataset.googleQueryId || "",
                p =
                m * e.targetRect.width * e.targetRect.height,
                r = e.scrollPosition.scrollX + "," + e.scrollPosition.scrollY,
                t = wh(e.target),
                x = [e.targetRect.left, e.targetRect.top, e.targetRect.right, e.targetRect.bottom].join();
            e = e.viewportSize.width + "x" + e.viewportSize.height;
            Qi("ovlp", {
                adf: b.H.google_ad_dom_fingerprint,
                armr: f,
                client: b.H.google_ad_client,
                eid: aE(b.H),
                et: g,
                fwrattr: b.H.google_full_width_responsive,
                iaaso: h,
                io: l,
                saldr: b.H.google_loader_used,
                oa: m,
                oe: k.join(","),
                qid: n,
                rafmt: b.H.google_responsive_auto_format,
                roa: p,
                slot: b.H.google_ad_slot,
                sp: r,
                tgt: t,
                tr: x,
                url: b.H.google_page_url,
                vp: e,
                pvc: Eg(a)
            }, 1)
        }).catch(e => {
            fj(8, ["Error:", e.message, c]);
            Qi("ovlp-err", {
                err: e.message
            }, 1)
        })
    }

    function hJ(a, b) {
        b.allow = b.allow && 0 < b.allow.length ? b.allow + ("; " + a) : a
    }

    function iJ(a, b, c, d) {
        var e = a.H;
        const f = e.google_async_iframe_id,
            g = e.google_ad_width,
            h = e.google_ad_height;
        var l = UE(e);
        const k = {
            id: f,
            name: f
        };
        k.style = l ? [`width:${g}px !IMPORTANT`, `height:${h}px !IMPORTANT`].join(";") : "left:0;position:absolute;top:0;border:0;" + `width:${g}px;` + `height:${h}px;`;
        var m = sg();
        if (m["allow-top-navigation-by-user-activation"] && m["allow-popups-to-escape-sandbox"]) {
            m = b;
            if (b = "fsb=" + encodeURIComponent("1")) {
                var n = m.indexOf("#");
                0 > n && (n = m.length);
                var p = m.indexOf("?");
                if (0 > p || p > n) {
                    p =
                        n;
                    var r = ""
                } else r = m.substring(p + 1, n);
                m = [m.slice(0, p), r, m.slice(n)];
                n = m[1];
                m[1] = b ? n ? n + "&" + b : b : n;
                b = m[0] + (m[1] ? "?" + m[1] : "") + m[2]
            } else b = m;
            k.sandbox = rg().join(" ")
        }
        T(Qn) && !1 === e.google_video_play_muted && hJ("autoplay", k);
        n = b;
        b = jJ(b);
        p = c ? b.replace(/&ea=[^&]*/, "") + "&ea=0" : b;
        null != g && (k.width = String(g));
        null != h && (k.height = String(h));
        k.frameborder = "0";
        k.marginwidth = "0";
        k.marginheight = "0";
        k.vspace = "0";
        k.hspace = "0";
        k.allowtransparency = "true";
        k.scrolling = "no";
        m = "";
        if (c) {
            m = 10;
            for (p = ""; 0 < m--;) p += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62 *
                Math.random()));
            m = p;
            b = Si(b, m);
            Si(n, m)
        } else b = p;
        e.dash && (k.srcdoc = e.dash);
        n = T(XG(window) ? Oo : No);
        p = T(Qo);
        n = YG(a.pubWin, n, p);
        p = e.google_trust_token_additional_signing_data;
        n && ZG(n) && (n = aH(n, p)) && (k.trustToken = JSON.stringify(n));
        var t;
        (null == (t = a.pubWin.document.featurePolicy) ? 0 : t.features().includes("attribution-reporting")) && hJ("attribution-reporting", k);
        T(Bo) && (t = a.pubWin, void 0 !== t.isAnonymouslyFramed && t.crossOriginIsolated && (k.anonymous = "true"));
        l ? (k.src = b, l = ZI(k), d = aJ(a, l, d)) : d = YI(b, f, k, a);
        c && (c =
            a.ca.Kf, e = {
                id: f,
                url: b,
                width: g,
                height: h,
                Pa: m,
                sf: a.pubWin,
                qe: f,
                Bj: "google_expandable_ad_slot" + uh(e),
                Ze: c.toString(),
                Ec: a.pubWin
            }, e = !e.id || !e.url || 0 >= e.width || 0 >= e.height || !e.Pa || !e.Ec ? void 0 : Ti(e.Ec, "ct", Da(Wi, e, c)), e && a.A.push(e));
        return d
    }

    function jJ(a) {
        var b = U(v("Edge") ? bo : lo);
        var c = a;
        c.length > b && (c = c.substring(0, b - 8), c = c.replace(/%\w?$/, ""), c = c.replace(/&[^=]*=?$/, ""), c += "&trunc=1");
        if (c !== a) {
            b -= 8;
            let d = a.lastIndexOf("&", b); - 1 === d && (d = a.lastIndexOf("?", b));
            Qi("trn", {
                ol: a.length,
                tr: -1 === d ? "" : a.substring(d + 1),
                url: a
            }, .01)
        }
        return c
    }
    async function kJ(a) {
        var b = a.H,
            c = a.pubWin,
            d = a.l;
        T(so) && B(d, 5) && gJ(new fE(a.pubWin), a);
        var e = bA(d, a.pubWin);
        if (!B(d, 5)) return Promise.resolve();
        B(d, 5) && jE(d, a.pubWin, a.H.google_ad_client);
        var f = a.H.google_reactive_ads_config;
        f && (OE(a.K, f), ZE(f, a, bA(d)), f = f.page_level_pubvars, va(f) && sd(a.H, f));
        B(d, 5) && await lJ();
        if (!$G(a.pubWin, TD(), J(a.aa, 8))) {
            const g = U(Uo);
            f = c.google_trust_token_operation_promise;
            0 < g && f && await Promise.race([f, new Promise(h => void setTimeout(() => {
                h(void 0)
            }, g))])
        }
        f = "";
        UE(b) ? (f = a.ca.Lf.toString() +
            "#" + nH(b), vH(b, iz()), mJ(b)) : (5 == b.google_pgb_reactive && b.google_reactive_ads_config || !FE(b) || DE(c, b, e)) && mJ(b) && (f = kH(a, d));
        fj(2, [b, f]);
        if (!f) return Promise.resolve();
        b.google_async_iframe_id || th(c);
        e = uh(b);
        b = a.pubWin === a.K ? "a!" + e.toString(36) : `${e.toString(36)}.${Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Ea()).toString(36)}`;
        c = 0 < NI(a, a.innerInsElement, !0);
        e = {
            ifi: e,
            uci: b
        };
        c && (c = iz(), e.btvi = W(c, 21, 1), nz(c, 21));
        f = qh(e, f);
        d = iJ(a, f, 0 === a.B, d);
        f = jJ(f);
        a.H.rpe && iG(a.pubWin, a.innerInsElement, {
            height: a.H.google_ad_height,
            Sc: "force",
            Zc: !0,
            Nd: !0,
            rc: a.H.google_ad_client
        });
        d = await d;
        try {
            bJ(a, d, b)
        } catch (g) {
            Ri(223, g)
        }
    }

    function lJ() {
        return (db() ? 0 <= Ya(hb(), 11) : cb() && 0 <= Ya(hb(), 65)) ? new Promise(a => {
            RG(a.bind(null, !0))
        }) : (RG(null), Promise.resolve(!1))
    }

    function nJ(a) {
        const b = new kI(a);
        return new Promise(c => {
            jI(b, d => {
                d && "string" === typeof d.uspString ? c(d.uspString) : c(null)
            })
        })
    }

    function oJ(a) {
        var b = tg(u.top, "googlefcPresent");
        u.googlefc && !b && Qi("adsense_fc_has_namespace_but_no_iframes", {
            publisherId: a
        }, 1)
    }

    function pJ(a) {
        return mI(a) ? oI(a) : Promise.resolve(null)
    }

    function qJ(a, b) {
        const c = b.Hf;
        b = b.uspString;
        c ? jF(a, c) : eA(a, !0);
        b && z(a, 1, b)
    }

    function rJ(a) {
        const b = U(kn),
            c = T(hn);
        if (0 >= b && !c) return null;
        const d = Wh(),
            e = eI(a.pubWin);
        if (!e) return null;
        a.D = "0";
        return (c ? e : Promise.race([e, Ig(b, "0")])).then(f => {
            Qi("adsense_paw", {
                time: Wh() - d
            });
            (null == f ? void 0 : f.length) > U(jn) ? Ri(809, Error(`ML:${f.length}`)) : a.D = f
        }).catch(f => {
            Ri(809, f)
        })
    }

    function sJ(a) {
        const b = Wh();
        return Promise.race([Oi(832, () => uI(a)), Ig(200)]).then(c => {
            let d;
            const e = null != (d = null == c ? void 0 : c.status) ? d : 100;
            Qi("afc_etu", {
                etus: e,
                sig: Wh() - b,
                tms: 200
            });
            return null == c ? void 0 : c.mb
        })
    }

    function tJ(a) {
        var b = U(On);
        return Promise.race([Pi(779, () => {
            const c = T(XG(window) ? Oo : No),
                d = T(Qo);
            return gH(new hH(a, c, d))
        })(), Ig(b)])
    }
    async function uJ(a) {
        const b = rJ(a),
            c = Oi(868, () => sJ(a.pubWin));
        NG(J(a.aa, 8));
        $A(a.pubWin);
        oJ(a.H.google_ad_client);
        var d = new pI(a.pubWin);
        await pJ(d);
        a.l = new fA;
        d = [kF(a), nJ(a.pubWin)];
        d = await Promise.all(d);
        qJ(a.l, {
            Hf: d[0],
            uspString: d[1]
        });
        $G(a.pubWin, TD(), J(a.aa, 8)) && (d = tJ(!!B(a.l, 5)), T(To) ? Ni.Ha(962, d) : await d);
        if (T(zo) && a.G && vJ(a)) {
            const e = bA(a.l, a.pubWin);
            d = a.G.then(f => {
                AI(f, a.pubWin, T(uo), T(yo), e).then(g => {
                    a.C = g
                })
            });
            T(xo) ? Ni.Ha(985, d) : await d
        }
        T(hn) || await b;
        a.mb = await c || "";
        await kJ(a)
    }

    function vJ(a) {
        const b = a.l;
        a = a.H;
        return !a.google_restrict_data_processing && 1 !== a.google_tag_for_under_age_of_consent && 1 !== a.google_tag_for_child_directed_treatment && !!B(b, 5) && !B(b, 6) && !qz() && !B(b, 9)
    }

    function XI(a) {
        var b = a.pubWin.document,
            c = a.H;
        const d = c.google_ad_width,
            e = c.google_ad_height;
        let f = 0;
        try {
            !1 === c.google_allow_expandable_ads && (f |= 1);
            if (!b.body || isNaN(c.google_ad_height) || isNaN(c.google_ad_width) || !/^http/.test(b.location.protocol)) f |= 2; {
                c = navigator;
                const m = c.userAgent,
                    n = c.platform,
                    p = c.product;
                if (!/Win|Mac|Linux|iPad|iPod|iPhone/.test(n) && /^Opera/.test(m)) var g = !1;
                else if (/Win/.test(n) && /Trident/.test(m) && 11 <= b.documentMode) g = !0;
                else {
                    var h = (/WebKit\/(\d+)/.exec(m) || [0, 0])[1],
                        l = (/rv:(\d+\.\d+)/.exec(m) || [0, 0])[1];
                    g = !h && "Gecko" === p && 27 <= l && !/ rv: 1\.8([^.] |\.0) /.test(m) || 536 <= h ? !0 : !1
                }
            }
            g || (f |= 4);
            jp(a.pubWin, d, e) && (f |= 2)
        } catch (m) {
            f |= 8
        }
        a.B = f;
        0 === a.B || (a.H.google_allow_expandable_ads = !1);
        Jg(a.pubWin) != a.pubWin && (a.j |= 4);
        3 === BF(a.pubWin.document) && (a.j |= 32);
        if (b = a.K) b = a.K, b = !(P(b).scrollWidth <= P(b).clientWidth);
        b && (a.j |= 1024);
        let k;
        if (null == (k = a.pubWin.Prototype) ? 0 : k.Version) a.j |= 16384;
        a.H.google_loader_features_used && (a.j |= a.H.google_loader_features_used);
        a.F = 2;
        return uJ(a)
    }

    function $I(a, b) {
        a.style.visibility = "visible";
        for (var c; c = a.firstChild;) a.removeChild(c);
        a.appendChild(b)
    }

    function mJ(a) {
        const b = iz(),
            c = a.google_ad_section;
        EE(a) && nz(b, 15);
        if (zh(a)) {
            if (100 < nz(b, 5)) return !1
        } else if (100 < nz(b, 6) - W(b, 15, 0) && "" == c) return !1;
        return !0
    }

    function UI(a) {
        const b = a.K;
        if (b && !ez(b).ads_density_stats_processed && !Rg(b) && (ez(b).ads_density_stats_processed = !0, T(mo) || .01 > dg())) {
            const c = () => {
                if (b) {
                    var d = ay(Wx(b), a.H.google_ad_client, b.location.hostname, aE(a.H).split(","));
                    Qi("ama_stats", d, 1)
                }
            };
            Hg(b, () => {
                u.setTimeout(c, 1E3)
            })
        }
    }

    function WI(a) {
        a && !ez(a).host_pinged_back && (ez(a).host_pinged_back = !0, Qi("abg_host", {
            host: a.location.host
        }, .01))
    };
    (function(a, b, c) {
        Oi(843, () => {
            if (!u.google_sa_impl) {
                var d = NH(a);
                KH(d);
                fj(16, [3, d.toJSON()]);
                var e = LH({
                        Fe: b,
                        Ff: J(d, 2)
                    }),
                    f = c(e, d);
                u.google_sa_impl = async h => II({
                    aa: d,
                    ca: f,
                    Ua: e,
                    slot: h
                });
                $D(WD(u));
                var g;
                null == (g = u.google_process_slots) || g.call(u);
                g = (u.Prototype || {}).Version;
                null != g && Qi("prtpjs", {
                    version: g
                })
            }
        })
    })(MH, "m202208040101", function(a, b) {
        const c = 2012 < C(b, 1, 0) ? `_fy${C(b,1,0)}` : "",
            d = J(b, 3);
        b = J(b, 2);
        return {
            vf: N `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum${c}.js`,
            uf: N `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum_debug${c}.js`,
            Kd: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/reactive_library${c}.js`,
            He: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/debug_card_library${c}.js`,
            Kf: N `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/creativetoolset/xpc_expansion_embed.js`,
            Lf: N `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup.html`,
            Ab: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`,
            ob: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/gallerify${c}.js`,
            oc: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/storify${c}.js`
        }
    });
}).call(this, "[2019,\"r20220803\",\"r20110914\",null,null,null,null,\".google.com.ng\",null,null,null,null,[null,[]],null,null,null,null,-1,[44759875,44759926,44759837,44763505]]");