(function(_) {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var aa, ca, da, ea, ia, ka, ma, pa, ja, oa, qa, ra, sa, ta, va, ya, za, Ca, Da, Ea, Ga, Fa, Ha, Ia, Pa, Qa, Ra, Ta, Wa, Xa, $a, bb, ib, lb, ob, rb, tb, vb, yb, zb, Ab, Bb, Db, Eb, Fb, Gb, Jb, Kb, Mb, Nb, Ob, Qb, Vb, Wb, $b, ac, Yb, bc, dc, Xb, hc, fc, kc, oc, pc, rc, sc, uc, zc, Bc, wc, Cc, Lc, Ec, Qc, Vc, Nc, Oc, Zc, $c, ad, bd, Xc, Yc, cd, dd, ed, kd, x, qd, sd, ud, vd, wd, yd, zd, Ad, Bd, Dd, Gd, Id, Kd, Nd, ae, Ud, de, ee, ge, le, se, qe, ye, ze, Ae, Re, Xe, Ye, rf, Hf, If, Kf, Lf, Nf, Of, Pf, Qf, Sf, Rf, Wf, Yf, Zf, $f, eg, gg, hg, ig, mg, rg, tg, yg, Ag, dg, Bg, Eg, Lg, G, Zg, wh, Ah, Ch, Eh, Gh, Hh, Ih, Kh, Nh, Qh, Sh, Uh, Th, ai, bi, ci, di, Vh, ei, fi, Wh, gi, ii, ji, li, ki, qi, oi, ri, Ai, Di, vi, wi, Ei, Fi, Hi, Ii, Ji, Ki, Oi, Si, Pi, Mi, Yi, Wi, Xi, Zi, aj, dj, fj, K, hj, ij, jj, lj, nj, tj, pj, oj, qj, rj, sj, Lj, Mj, Oj, Pj, rk, uk, zk, Fk, Hk, Jk, Kk, Mk, Ok, Pk, Rk, Nk, Tk, Vk, Xk, $k, gl, jl, kl, sl, ul, wl, xl, yl, Bl, Dl, la, El, Fl, Jl, Rl, Sl, Ul, Kl, cm, dm, fm, gm, hm, jm, km, mm, om, pm, qm, sm, vm, Bm, Cm, Fm, Hm, Gm, Im, Jm, Km, Lm, Mm, Nm, Tm, Om, Wm, an, Zm, dn, jn, en, fn, gn, hn, kn, ln, Ln, Wn, Xn, ao, go, ho, ko, oo, lo, qo, ro, uo, vo, wo, xo, zo, Bo, Co, Fo, No, Sp, Tp, Vp, aq, dq, eq, fq, lq, mq, pq, qq, vq, wq, yq, zq, Aq, Gq, Lq, Nq, Ar, Cr, Dr, Er, Mr, Or, Tr, Wr, y, Xr, Yr, Zr, $r, as, u, bs, cs, ds, O, es, fs, gs, ns, os, ps, db, fb, hb, rs, us, ss, ts, vs, ws, ld, As, na, ha, Bs, Cs, Ds, Es, vf;
    ca = function(a, b) {
        b = _.ba(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    };
    da = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    ea = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    ia = function(a) {
        for (var b = 0, c = 0, d = {}; c < a.length;) {
            var e = a[c++],
                f = _.fa(e) ? "o" + ha(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e)
        }
        a.length = b
    };
    ka = function(a, b) {
        a.sort(b || ja)
    };
    ma = function(a) {
        for (var b = la, c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
            index: d,
            value: a[d]
        };
        var e = b || ja;
        ka(c, function(f, g) {
            return e(f.value, g.value) || f.index - g.index
        });
        for (b = 0; b < a.length; b++) a[b] = c[b].value
    };
    pa = function(a, b) {
        if (!na(a) || !na(b) || a.length != b.length) return !1;
        for (var c = a.length, d = oa, e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    };
    ja = function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    oa = function(a, b) {
        return a === b
    };
    qa = function(a, b) {
        for (var c = {}, d = 0; d < a.length; d++) {
            var e = a[d],
                f = b.call(void 0, e, d, a);
            void 0 !== f && (c[f] || (c[f] = [])).push(e)
        }
        return c
    };
    ra = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = ra.apply(null, ea(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
            else b.push(d)
        }
        return b
    };
    sa = function(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    };
    ta = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    va = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return c
    };
    ya = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < xa.length; f++) c = xa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    za = function() {
        var a = _.q.navigator;
        return a && (a = a.userAgent) ? a : ""
    };
    Ca = function(a) {
        return Ba(za(), a)
    };
    Da = function(a) {
        for (var b = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };
    Ea = function() {
        return Ca("Firefox") || Ca("FxiOS")
    };
    Ga = function() {
        return Ca("Safari") && !(Fa() || Ca("Coast") || Ca("Opera") || Ca("Edge") || Ca("Edg/") || Ca("OPR") || Ea() || Ca("Silk") || Ca("Android"))
    };
    Fa = function() {
        return (Ca("Chrome") || Ca("CriOS")) && !Ca("Edge") || Ca("Silk")
    };
    Ha = function(a) {
        var b = {};
        a.forEach(function(c) {
            b[c[0]] = c[1]
        });
        return function(c) {
            return b[_.t(c, "find").call(c, function(d) {
                return d in b
            })] || ""
        }
    };
    Ia = function() {
        var a = za();
        if (Ca("Trident") || Ca("MSIE")) {
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
        a = Da(a);
        b = Ha(a);
        return Ca("Opera") ? b(["Version", "Opera"]) : Ca("Edge") ? b(["Edge"]) : Ca("Edg/") ? b(["Edg"]) : Ca("Silk") ? b(["Silk"]) : Fa() ? b(["Chrome", "CriOS", "HeadlessChrome"]) : (a = a[2]) && a[1] || ""
    };
    _.Na = function(a) {
        if (a instanceof Ja) a = Ka(a);
        else {
            a: if (La) {
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
            a = "javascript:" === b ? "about:invalid" : a
        }
        return a
    };
    Pa = function(a, b) {
        if (void 0 !== a.tagName) {
            if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
            if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
        }
        a.innerHTML = Oa(b)
    };
    Qa = function(a) {
        throw Error("unexpected value " + a + "!");
    };
    Ra = function(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };
    Ta = function(a, b) {
        a.textContent = b instanceof Sa && b.constructor === Sa ? b.j : "type_error:SafeScript";
        Ra(a)
    };
    Wa = function(a, b) {
        a.src = Va(b);
        Ra(a)
    };
    Xa = function(a, b) {
        a.write(Oa(b))
    };
    $a = function(a) {
        return a ? a.passive && Ya() ? a : a.capture || !1 : !1
    };
    bb = function(a) {
        var b = window,
            c = !0;
        c = void 0 === c ? !1 : c;
        new u.Promise(function(d, e) {
            function f() {
                g.onload = null;
                g.onerror = null;
                var h;
                null == (h = g.parentElement) || h.removeChild(g)
            }
            var g = b.document.createElement("script");
            g.onload = function() {
                f();
                d()
            };
            g.onerror = function() {
                f();
                e(void 0)
            };
            g.type = "text/javascript";
            Wa(g, a);
            c && "complete" !== b.document.readyState ? _.ab(b, "load", function() {
                b.document.body.appendChild(g)
            }) : b.document.body.appendChild(g)
        })
    };
    ib = function(a) {
        var b, c, d, e, f, g;
        return _.cb(function(h) {
            switch (h.j) {
                case 1:
                    return b = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.j + ("&tv=" + a.m + "&st=") + a.qb, c = void 0, h.D = 2, db(h, eb(b), 4);
                case 4:
                    c = h.m;
                    fb(h, 3);
                    break;
                case 2:
                    hb(h);
                case 3:
                    if (!c) return h.return(void 0);
                    d = a.Hb || c.sodar_query_id;
                    e = void 0 !== c.rc_enable && a.D ? c.rc_enable : "n";
                    f = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms;
                    g = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
                    return d && c.bg_hash_basename && c.bg_binary ? h.return({
                        context: a.H,
                        pe: c.bg_hash_basename,
                        oe: c.bg_binary,
                        Ye: a.j + "_" + a.m,
                        Hb: d,
                        qb: a.qb,
                        ec: e,
                        xc: f,
                        cc: g
                    }) : h.return(void 0)
            }
        })
    };
    lb = function(a) {
        var b;
        return _.cb(function(c) {
            if (1 == c.j) return db(c, ib(a), 2);
            if (b = c.m) {
                var d = "sodar2";
                d = void 0 === d ? "sodar2" : d;
                var e = window,
                    f = e.GoogleGcLKhOms;
                f && "function" === typeof f.push || (f = e.GoogleGcLKhOms = []);
                var g = {};
                f.push((g._ctx_ = b.context, g._bgv_ = b.pe, g._bgp_ = b.oe, g._li_ = b.Ye, g._jk_ = b.Hb, g._st_ = b.qb, g._rc_ = b.ec, g._dl_ = b.xc, g._g2_ = b.cc, g));
                if (f = e.GoogleDX5YKUSk) e.GoogleDX5YKUSk = void 0, f[1]();
                d = jb(kb, {
                    basename: d
                });
                bb(d)
            }
            return c.return(b)
        })
    };
    ob = function(a) {
        if (a !== mb) throw Error("requires a valid immutable API token");
    };
    rb = function(a) {
        var b = !1;
        b = void 0 === b ? !1 : b;
        if (pb) {
            if (b && /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a)) throw Error("Found an unpaired surrogate");
            a = (qb || (qb = new TextEncoder)).encode(a)
        } else {
            for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                if (128 > f) d[c++] = f;
                else {
                    if (2048 > f) d[c++] = f >> 6 | 192;
                    else {
                        if (55296 <= f && 57343 >= f) {
                            if (56319 >= f && e < a.length) {
                                var g = a.charCodeAt(++e);
                                if (56320 <= g && 57343 >= g) {
                                    f = 1024 * (f - 55296) + g - 56320 + 65536;
                                    d[c++] = f >> 18 | 240;
                                    d[c++] = f >> 12 & 63 | 128;
                                    d[c++] = f >> 6 & 63 | 128;
                                    d[c++] = f & 63 | 128;
                                    continue
                                } else e--
                            }
                            if (b) throw Error("Found an unpaired surrogate");
                            f = 65533
                        }
                        d[c++] = f >> 12 | 224;
                        d[c++] = f >> 6 & 63 | 128
                    }
                    d[c++] = f & 63 | 128
                }
            }
            a = c === d.length ? d : d.subarray(0, c)
        }
        return a
    };
    tb = function(a) {
        return sb && null != a && a instanceof Uint8Array
    };
    vb = function(a) {
        if (a !== ub) throw Error("illegal external caller");
    };
    yb = function(a, b) {
        Object.isFrozen(a) || (wb ? a[wb] |= b : void 0 !== a.hb ? a.hb |= b : Object.defineProperties(a, {
            hb: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    };
    zb = function(a) {
        var b;
        wb ? b = a[wb] : b = a.hb;
        return null == b ? 0 : b
    };
    Ab = function(a) {
        yb(a, 1);
        return a
    };
    Bb = function(a) {
        return Array.isArray(a) ? !!(zb(a) & 2) : !1
    };
    Db = function(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as immutable");
        yb(a, 2);
        return a
    };
    Eb = function(a, b) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as mutable");
        b ? yb(a, 8) : Object.isFrozen(a) || (wb ? a[wb] &= -9 : void 0 !== a.hb && (a.hb &= -9))
    };
    Fb = function(a) {
        return Bb(a.ba)
    };
    Gb = function(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    };
    Jb = function(a) {
        return null == a ? a : a.constructor === Hb ? a : "string" === typeof a ? a ? new Hb(a, ub) : Ib() : tb(a) ? a.length ? new Hb(new Uint8Array(a), ub) : Ib() : null
    };
    Kb = function(a) {
        return {
            value: a,
            configurable: !1,
            writable: !1,
            enumerable: !1
        }
    };
    Mb = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        if (Array.isArray(a)) return new b(a);
        if (c) return new b
    };
    Nb = function(a, b, c, d) {
        var e = !1;
        var f = null != a && "object" === typeof a && !(e = Array.isArray(a)) && Array.isArray(a.ba) && a.constructor !== Object ? a : e ? new b(a) : new b;
        c ? Db(f.ba) : d && (f = f.sb());
        return f
    };
    Ob = function(a) {
        return a
    };
    Qb = function(a) {
        return a
    };
    Vb = function(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (tb(a)) return Rb(a);
                    if (a instanceof Hb) return Sb(a);
                    if (a instanceof Tb) return Ub(a)
                }
        }
        return a
    };
    Wb = function(a, b) {
        b.H && (a.H = b.H.slice())
    };
    $b = function(a, b) {
        b = void 0 === b ? Xb : b;
        return Yb(a, b)
    };
    ac = function(a, b) {
        if (null != a) {
            if (Array.isArray(a)) a = Yb(a, b);
            else if (Gb(a)) {
                var c = {},
                    d;
                for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = ac(a[d], b));
                a = c
            } else a = b(a);
            return a
        }
    };
    Yb = function(a, b) {
        for (var c = a.slice(), d = 0; d < c.length; d++) c[d] = ac(c[d], b);
        Array.isArray(a) && zb(a) & 1 && Ab(c);
        return c
    };
    bc = function(a) {
        if (a && "object" == typeof a && a.toJSON) return a.toJSON();
        a = Vb(a);
        return Array.isArray(a) ? $b(a, bc) : a
    };
    dc = function(a) {
        return cc(a)
    };
    Xb = function(a) {
        if ("object" === typeof a) {
            if (tb(a)) return new Uint8Array(a);
            if (a instanceof Tb) return a.j.length ? ec(a, dc) : [];
            if (Array.isArray(a.ba) && a.constructor !== Object) return cc(a)
        }
        return a
    };
    hc = function(a) {
        var b = fc,
            c = gc(a, 45, !1);
        if (c.length && !(zb(c) & 4)) {
            Object.isFrozen(c) && (c = Ab(c.slice()), v(a, 45, c, void 0, !0));
            for (var d = 0; d < c.length; d++) c[d] = b(c[d]);
            yb(c, 5)
        }
        Fb(a) && Object.freeze(c);
        return c
    };
    fc = function(a) {
        return Jb(a) || Ib()
    };
    kc = function(a, b, c, d) {
        a: {
            var e = Fb(a);
            if (null == b) {
                if (e) {
                    e = jc || (jc = new Tb(Db([])));
                    break a
                }
                b = []
            } else {
                if (b.constructor === Tb) {
                    e = b;
                    break a
                }
                Array.isArray(b) || (b = [])
            }
            var f = Bb(b);
            if (e) {
                if (!b.length) {
                    e = jc || (jc = new Tb(Db([])));
                    break a
                }
                f || Db(b)
            }
            b = new Tb(b, d);v(a, c, b, !1, !0);e = b
        }
        if (null == e) return e;b = Fb(a);f = e instanceof Tb && Bb(e.j);
        if (!b && f) {
            e = e.j.slice();
            for (f = 0; f < e.length; f++) e[f] = e[f].slice();
            e = new Tb(e, d);
            v(a, c, e, !1, !1)
        }!b && d && (e.B = !0);
        return e
    };
    oc = function(a, b, c, d) {
        lc(a);
        c !== d ? v(a, b, c) : mc(a, b);
        return a
    };
    pc = function(a, b, c) {
        lc(a);
        gc(a, b).push(c)
    };
    rc = function(a, b, c) {
        return qc(a, b) === c ? c : -1
    };
    sc = function(a, b) {
        return Vb(b)
    };
    uc = function(a, b) {
        Wb(a, b);
        var c = b.j;
        if (c) {
            b = b.m;
            for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var e = c[d];
                    if (e) {
                        var f = !(!b || !b[d]),
                            g = +d;
                        if (Array.isArray(e)) {
                            if (e.length)
                                for (f = tc(a, e[0].constructor, g, f), g = 0; g < Math.min(f.length, e.length); g++) uc(f[g], e[g])
                        } else(f = vc(a, e.constructor, g, f)) && uc(f, e)
                    }
                }
        }
    };
    zc = function(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = _.w(wc(c, a)), b = c.next().value, a = c.next().value, c = b);
        xc = c >>> 0;
        yc = a >>> 0
    };
    Bc = function(a) {
        if (16 > a.length) zc(Number(a));
        else if (Ac) a = BigInt(a), xc = Number(a & BigInt(4294967295)) >>> 0, yc = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +("-" === a[0]);
            yc = xc = 0;
            for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), yc *= 1E6, xc = 1E6 * xc + d, 4294967296 <= xc && (yc += xc / 4294967296 | 0, xc %= 4294967296);
            b && (b = _.w(wc(xc, yc)), a = b.next().value, b = b.next().value, xc = a, yc = b)
        }
    };
    wc = function(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };
    Cc = function(a) {
        sb && a instanceof Uint8Array ? a = Rb(a) : Array.isArray(a) ? a = Bb(a) ? a : $b(a, Cc) : a instanceof Dc ? a = Ec(a) : a instanceof Tb && (a = ec(a, Ec), Db(a.j));
        return a
    };
    Lc = function(a, b, c, d, e) {
        (a = a.j && a.j[c]) ? Array.isArray(a) ? (Bb(a) && Object.isFrozen(a) ? d = a : (d = Fc(a, Ec), Db(d), Object.freeze(d)), Gc(b, c, d, e)) : Kc(b, c, Ec(a), e): v(b, c, Cc(d), e)
    };
    Ec = function(a) {
        if (Fb(a)) return a;
        var b = new a.constructor;
        Wb(b, a);
        for (var c = a.ba, d = 0; d < c.length; d++) {
            var e = c[d];
            if (d === c.length - 1 && Gb(e))
                for (var f in e) {
                    var g = +f;
                    _.t(Number, "isNaN").call(Number, g) ? Mc(b)[g] = e[g] : Lc(a, b, g, e[f], !0)
                } else Lc(a, b, d - a.Qa, e, !1)
        }
        Db(b.ba);
        return b
    };
    Qc = function(a, b, c) {
        if (c) {
            var d = {},
                e;
            for (e in c) {
                if (Object.prototype.hasOwnProperty.call(c, e)) {
                    var f = c[e],
                        g = f.If;
                    g || (d.ub = f.Sg || f.Wg.zc, f.ne ? (d.Ec = Nc(f.ne), g = function(h) {
                        return function(k, l, m) {
                            return h.ub(k, l, m, h.Ec)
                        }
                    }(d)) : f.Ze ? (d.Dc = Oc(f.Be.td, f.Ze), g = function(h) {
                        return function(k, l, m) {
                            return h.ub(k, l, m, h.Dc)
                        }
                    }(d)) : g = d.ub, f.If = g);
                    g(b, a, f.Be)
                }
                d = {
                    ub: d.ub,
                    Ec: d.Ec,
                    Dc: d.Dc
                }
            }
        }
        Pc(b, a)
    };
    Vc = function(a, b) {
        var c = a[b];
        "function" == typeof c && 0 === c.length && (c = c(), a[b] = c);
        return Array.isArray(c) && (Rc in c || Uc in c || 0 < c.length && "function" == typeof c[0]) ? c : void 0
    };
    Nc = function(a) {
        var b = a[Wc];
        if (!b) {
            var c = Xc(a);
            b = function(d, e) {
                return Yc(d, e, c)
            };
            a[Wc] = b
        }
        return b
    };
    Oc = function(a, b) {
        var c = a[Wc];
        c || (c = function(d, e) {
            return Qc(d, e, b)
        }, a[Wc] = c);
        return c
    };
    Zc = function(a, b) {
        a.push(b)
    };
    $c = function(a, b, c) {
        a.push(b, c.zc)
    };
    ad = function(a, b, c, d) {
        var e = Nc(d),
            f = Xc(d).td,
            g = c.zc;
        a.push(b, function(h, k, l) {
            return g(h, k, l, f, e)
        })
    };
    bd = function(a, b, c, d, e, f) {
        var g = Oc(d, f),
            h = c.zc;
        a.push(b, function(k, l, m) {
            return h(k, l, m, d, g)
        })
    };
    Xc = function(a) {
        var b = a[Uc];
        if (b) return b;
        b = a[Uc] = [];
        var c = Zc,
            d = $c,
            e = ad,
            f = bd;
        b.td = a[0];
        var g = 1;
        if (a.length > g && "number" !== typeof a[g]) {
            var h = a[g++];
            c(b, h)
        }
        for (; g < a.length;) {
            c = a[g++];
            for (var k = g + 1; k < a.length && "number" !== typeof a[k];) k++;
            h = a[g++];
            k -= g;
            switch (k) {
                case 0:
                    d(b, c, h);
                    break;
                case 1:
                    (k = Vc(a, g)) ? (g++, e(b, c, h, k)) : d(b, c, h, a[g++]);
                    break;
                case 2:
                    k = b;
                    var l = g++;
                    l = Vc(a, l);
                    e(k, c, h, l, a[g++]);
                    break;
                case 3:
                    f(b, c, h, a[g++], a[g++], a[g++]);
                    break;
                case 4:
                    f(b, c, h, a[g++], a[g++], a[g++], a[g++]);
                    break;
                default:
                    throw Error("unexpected number of binary field arguments: " + k);
            }
        }
        Rc in a && Uc in a && (a.length = 0);
        return b
    };
    Yc = function(a, b, c) {
        for (var d = c.length, e = 1 == d % 2, f = e ? 1 : 0; f < d; f += 2)(0, c[f + 1])(b, a, c[f]);
        Qc(a, b, e ? c[0] : void 0)
    };
    cd = function(a, b) {
        return {
            Vg: a,
            zc: b
        }
    };
    dd = function(a, b, c, d, e, f) {
        if (a = a.j && a.j[c]) Array.isArray(a) ? (e = f.Ic ? Ab(a.slice()) : a, Gc(b, c, e)) : Kc(b, c, a);
        else {
            if (sb && d instanceof Uint8Array) e = d.length ? new Hb(new Uint8Array(d), ub) : Ib();
            else if (d instanceof Tb) {
                f = Array.prototype.slice.call(Ub(d));
                for (d = 0; d < f.length; d++) a = Array.prototype.slice.call(f[d]), f[d] = a, a = a[1], Array.isArray(a) && e && Db(a);
                e = f
            } else Array.isArray(d) && (e ? Db(d) : Array.isArray(d) && zb(d) & 1 && f.Ic && (d = d.slice())), e = d;
            v(b, c, e)
        }
    };
    ed = function(a) {
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
    };
    kd = function(a, b, c, d) {
        d = void 0 === d ? [] : d;
        var e = new a.MutationObserver(function(f) {
            f = _.w(f);
            for (var g = f.next(); !g.done; g = f.next()) {
                g = _.w(g.value.removedNodes);
                for (var h = g.next(); !h.done; h = g.next())
                    if (h = h.value, d && (h === b || gd(h, b))) {
                        f = _.w(d);
                        for (g = f.next(); !g.done; g = f.next()) g.value.disconnect();
                        d.length = 0;
                        c();
                        return
                    }
            }
        });
        d.push(e);
        e.observe(a.document.documentElement, {
            childList: !0,
            subtree: !0
        });
        hd(function(f) {
            if (!f.parent || !id(f.parent)) return !1;
            for (var g = f.parent.document.getElementsByTagName("iframe"), h = 0; h < g.length; h++) try {
                if (jd(g[h]) == f) {
                    kd(f.parent, g[h], c, d);
                    break
                }
            } catch (k) {}
            return !1
        }, !1, !1, a)
    };
    x = function(a) {
        var b = ld.apply(1, arguments);
        if (0 === b.length) return md(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return md(c.join(""))
    };
    qd = function(a, b) {
        var c = Va(a).toString();
        if (/#/.test(c)) throw Error("");
        var d = /\?/.test(c) ? "&" : "?";
        b.forEach(function(e, f) {
            e = e instanceof Array ? e : [e];
            for (var g = 0; g < e.length; g++) {
                var h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return md(c)
    };
    sd = function(a) {
        return new _.rd(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    };
    ud = function(a) {
        for (var b = ld.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
        return _.td(c.join(""))
    };
    vd = function(a) {
        return md(Va(a).toString())
    };
    wd = function(a) {
        return JSON.stringify([a.map(function(b) {
            var c = {};
            return [(c[b.gd] = b.message.toJSON(), c)]
        })])
    };
    yd = function(a) {
        a.dd.apply(a, _.xd(ld.apply(1, arguments).map(function(b) {
            return {
                gd: 2,
                message: b
            }
        })))
    };
    zd = function(a) {
        a.dd.apply(a, _.xd(ld.apply(1, arguments).map(function(b) {
            return {
                gd: 5,
                message: b
            }
        })))
    };
    Ad = function(a) {
        a.dd.apply(a, _.xd(ld.apply(1, arguments).map(function(b) {
            return {
                gd: 8,
                message: b
            }
        })))
    };
    Bd = function(a) {
        a && "function" == typeof a.Ba && a.Ba()
    };
    Dd = function(a) {
        var b = Cd;
        Cd = void 0;
        if (!a) {
            if (b) throw Error(b());
            throw Error(String(a));
        }
    };
    Gd = function() {
        var a = Ed;
        return function(b) {
            return b instanceof a
        }
    };
    Id = function() {
        var a = Hd;
        return function(b) {
            for (var c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }
    };
    Kd = function() {
        for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++) 8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15, b >>= 4, a[d] = Jd[19 == d ? c & 3 | 8 : c]);
        return md("uuid-in-package:" + a.join("").toLowerCase())
    };
    Nd = function(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        var e = _.Ld("IMG", a.document);
        if (c || d) {
            var f = function(g) {
                c && c(g);
                d && ca(a.google_image_requests, e);
                _.Md(e, "load", f);
                _.Md(e, "error", f)
            };
            _.ab(e, "load", f);
            _.ab(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    };
    ae = function(a, b) {
        var c;
        a: {
            try {
                if (a) {
                    var d = a.getItem("google_experiment_mod");
                    break a
                }
            } catch (g) {}
            d = null
        }
        d = null != (c = d) ? c : "";
        try {
            var e = Od(Pd, d);
            if (d) {
                var f = Od(Pd, d);
                Qd(f, Sd(Td(1), -1));
                f.Y()
            }
        } catch (g) {
            Ud(d), e = new Pd
        }
        if (c = (y = tc(e, Vd, 1), _.t(y, "find")).call(y, function(g) {
                return Wd(g, 1, 0) === b
            }))
            if (f = Xd(c, 2), null === f || isNaN(f)) Ud(d);
            else return f;
        d = Yd() ? null : Math.floor(1E3 * Zd());
        if (null === d) return null;
        c ? Sd(c, d) : Qd(e, Sd(Td(b), d));
        return $d(a, e.Y()) ? d : null
    };
    Ud = function(a) {
        .01 > Math.random() && be({
            data: a
        }, "ls_tamp")
    };
    de = function(a, b) {
        b = void 0 === b ? window : b;
        if (ce(a)) try {
            return b.localStorage
        } catch (c) {}
        return null
    };
    ee = function(a) {
        return "null" !== a.origin
    };
    ge = function(a, b, c) {
        b = ce(b) && ee(c) ? c.document.cookie : null;
        return null === b ? null : (new fe({
            cookie: b
        })).get(a) || ""
    };
    le = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? {} : d;
        var e = he.j();
        0 === e.j && (e.j = Math.random() < _.A(ie) ? 2 : 1);
        2 === e.j && (e = {}, be(_.t(Object, "assign").call(Object, {}, (e.c = String(a), e.pc = String(je(window)), e.em = c, e.lid = b, e.eids = ke().join(), e), d), "esp"))
    };
    se = function(a, b, c, d) {
        le(18, a);
        try {
            var e = _.me();
            _.A(ne) && (v(b, 8, Number((oe(b, 8) - 1).toFixed(3))), v(b, 7, Math.round(e / 1E3 / 60)));
            return c().then(function(f) {
                le(29, a, null, {
                    delta: String(_.me() - e)
                });
                "string" !== typeof f ? le(21, a) : f || le(20, a);
                Kc(v(b, 2, f), 10);
                pe().set(b, d) && le(27, a);
                return b
            }).catch(function(f) {
                qe(b, 106, d);
                le(28, a, re(f));
                return b
            })
        } catch (f) {
            return qe(b, 107, d), le(1, a, re(f)), u.Promise.resolve(b)
        }
    };
    qe = function(a, b, c) {
        var d, e = null != (d = vc(a, te, 10)) ? d : new te;
        b = v(e, 1, b);
        Kc(a, 10, b);
        pe().set(a, c)
    };
    ye = function(a, b, c) {
        if (c) {
            var d = b.toString();
            if (!document.querySelector('[src="' + d + '"]')) {
                var e = pe().get(a, c),
                    f = e.lb;
                e = e.success;
                if (_.B(ue)) {
                    if (f && 0 === ve(f)) return;
                    var g = _.A(ne),
                        h;
                    if (g && 1 > (null != (h = null == f ? void 0 : oe(f, 8)) ? h : g)) {
                        qe(f, 104, c);
                        return
                    }
                } else if (!e || f && (0 === ve(f) || 1 > (null != (g = oe(f, 8)) ? g : 0))) return;
                h = {};
                le(30, a, null, (h.url = d, h));
                var k = document.createElement("script");
                k.setAttribute("esp-signal", "true");
                Wa(k, b);
                var l = function() {
                    var m = {};
                    le(31, a, null, (m.url = d, m));
                    qe(null != f ? f : we(new xe, a), 109, c);
                    _.Md(k, "error", l)
                };
                document.head.appendChild(k);
                _.ab(k, "error", l)
            }
        }
    };
    ze = function(a, b) {
        var c, d, e;
        return _.cb(function(f) {
            if (1 == f.j) return c = 0 < b ? a.filter(function(g) {
                return !g.kd
            }) : a, db(f, u.Promise.all(c.map(function(g) {
                return g.ud.promise
            })), 2);
            if (3 != f.j) {
                if (a.length === c.length) return f.return(0);
                d = a.filter(function(g) {
                    return g.kd
                });
                e = _.me();
                return db(f, u.Promise.race([u.Promise.all(d.map(function(g) {
                    return g.ud.promise
                })), new u.Promise(function(g) {
                    return void setTimeout(g, b)
                })]), 3)
            }
            return f.return(_.me() - e)
        })
    };
    Ae = function() {
        var a = window;
        var b = void 0 === b ? function() {} : b;
        return new u.Promise(function(c) {
            var d = function() {
                c(b());
                _.Md(a, "load", d)
            };
            _.ab(a, "load", d)
        })
    };
    Re = function(a, b, c, d) {
        var e, f, g, h, k, l, m, n, p;
        return _.cb(function(r) {
            if (1 == r.j) {
                e = new Be;
                f = _.A(ne);
                g = new Ce(a, c, d);
                h = new Le(g.o, f, d);
                k = new Me(h.l, f, d);
                l = new Ne(k.o, f, c, d);
                m = new Oe(b, l.l, c, d);
                n = new Pe(m.o, m.C, c, d);
                for (var z = _.w([g, h, k, l, m, n]), C = z.next(); !C.done; C = z.next()) D(e, C.value);
                Qe(e);
                return db(r, m.l.promise, 2)
            }
            p = r.m;
            return r.return(p ? p : {
                id: a,
                collectorGeneratedData: null
            })
        })
    };
    Xe = function(a, b, c) {
        if (b)
            if (Se() === Te(window) || _.B(Ue))
                if (a.encryptedSignalProviders instanceof Ve) a.encryptedSignalProviders.addErrorHandler(c);
                else {
                    le(38, "");
                    var d, e = new We(null != (d = a.encryptedSignalProviders) ? d : [], b);
                    a.encryptedSignalProviders = new Ve(e);
                    e.addErrorHandler(c)
                }
        else le(16, "");
        else le(15, "")
    };
    Ye = function(a) {
        a = void 0 === a ? window : a;
        a = a.googletag;
        return (null == a ? 0 : a.apiReady) ? a : void 0
    };
    rf = function(a) {
        var b = void 0 === b ? Ze : b;
        var c = _.t(Object, "assign").call(Object, {}, a),
            d = a.id,
            e = a.style;
        a = a.data;
        c = (delete c.id, delete c.style, delete c.data, c);
        if (_.t(Object, "keys").call(Object, c).length) throw Error("Invalid attribute(s): " + _.t(Object, "keys").call(Object, c));
        d = {
            id: d,
            style: e ? new $e(e instanceof $e && e.constructor === $e ? e.Zc : "type_error:SafeStyle", bf) : void 0
        };
        if (a)
            for (e = _.w(_.t(a, "entries").call(a)), a = e.next(); !a.done; a = e.next()) c = _.w(a.value), a = c.next().value, c = c.next().value, Dd(cf.test(a)), d[a] = c;
        b = df(Oa(b).toString());
        if (!ef.test("div")) throw Error("");
        if ("DIV" in ff) throw Error("");
        e = "";
        if (d)
            for (f in d)
                if (Object.prototype.hasOwnProperty.call(d, f)) {
                    if (!ef.test(f)) throw Error("");
                    c = d[f];
                    if (null != c) {
                        a = f;
                        if (c instanceof gf) c = hf(c);
                        else {
                            if ("style" == a.toLowerCase()) throw Error("");
                            if (/^on/i.test(a)) throw Error("");
                            if (a.toLowerCase() in jf)
                                if (c instanceof kf) c = Va(c).toString();
                                else if (c instanceof Ja) c = Ka(c);
                            else if ("string" === typeof c) c instanceof Ja || (c = "object" == typeof c && c.La ? c.Ea() : String(c), lf.test(c) ? c = _.td(c) : (c = String(c), c = c.replace(/(%0A|%0D)/g, ""), c = c.match(mf) ? _.td(c) : null)), c = (c || _.nf).Ea();
                            else throw Error("");
                        }
                        c.La && (c = c.Ea());
                        a = a + '="' + of (String(c)) + '"';
                        e += " " + a
                    }
                }
        var f = "<div" + e;
        null == b ? b = [] : Array.isArray(b) || (b = [b]);
        !0 === pf.div ? f += ">" : (d = qf(b), f += ">" + Oa(d).toString() + "</div>");
        f = df(f);
        return df(Oa(f).toString())
    };
    Hf = function(a) {
        sf();
        var b = tf.googleToken[5] || 0;
        a && (0 != b || uf[3] >= vf() ? Gf.od(a) : (Gf.Cd().push(a), Gf.Td()));
        uf[3] >= vf() && uf[2] >= vf() || Gf.Td()
    };
    If = function(a) {
        a = Fc(a.split(/\s+/), function(b) {
            return (b = /^(-?\d+)(px|%)$/.exec(b)) ? {
                value: parseFloat(b[1]),
                type: b[2]
            } : {
                value: 0,
                type: "px"
            }
        });
        a[1] = a[1] || a[0];
        a[2] = a[2] || a[0];
        a[3] = a[3] || a[1];
        return a
    };
    Kf = function(a) {
        if (!a) return [0];
        a = "number" === typeof a ? [a] : a;
        a = _.Jf(a, function(b) {
            return "number" === typeof b && 0 <= b && 1 >= b ? !0 : !1
        });
        ia(a);
        ka(a, function(b, c) {
            return b - c
        });
        return a
    };
    Lf = function(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {}
        return b ? {
            top: b.top,
            right: b.right,
            bottom: b.bottom,
            left: b.left,
            width: b.width || b.right - b.left,
            height: b.height || b.bottom - b.top
        } : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
        }
    };
    Nf = function(a, b, c, d) {
        var e = new _.Mf,
            f = "",
            g = function(z) {
                try {
                    var C = "object" === typeof z.data ? z.data : JSON.parse(z.data);
                    f === C.paw_id && (_.Md(a, "message", g), C.error ? e.reject(Error(C.error)) : e.resolve(d(C)))
                } catch (J) {}
            },
            h;
        if ("function" === typeof(null == (h = a.gmaSdk) ? void 0 : h.getQueryInfo)) return _.ab(a, "message", g), f = c(a.gmaSdk), e.promise;
        var k, l, m, n, p, r;
        return "function" === typeof(null == (k = a.webkit) ? void 0 : null == (l = k.messageHandlers) ? void 0 : null == (m = l.getGmaQueryInfo) ? void 0 : m.postMessage) || "function" === typeof(null == (n = a.webkit) ? void 0 : null == (p = n.messageHandlers) ? void 0 : null == (r = p.getGmaSig) ? void 0 : r.postMessage) ? (f = String(Math.floor(2147483647 * Zd())), _.ab(a, "message", g), b(a.webkit.messageHandlers, f), e.promise) : null
    };
    Of = function(a) {
        return Nf(a, function(b, c) {
            var d, e;
            return void(null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c))
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    };
    Pf = function(a) {
        var b, c;
        return null != (c = (y = ["pbjs"].concat(null != (b = a._pbjsGlobals) ? b : []).map(function(d) {
            return a[d]
        }), _.t(y, "find")).call(y, function(d) {
            return Array.isArray(null == d ? void 0 : d.que)
        })) ? c : null
    };
    Qf = function(a, b, c, d) {
        try {
            if (a.setAttribute("data-google-query-id", c), !d) {
                null != b.googletag || (b.googletag = {
                    cmd: []
                });
                var e, f = null != (e = b.googletag.queryIds) ? e : [];
                f.push(c);
                500 < f.length && f.shift();
                b.googletag.queryIds = f
            }
        } catch (g) {}
    };
    Sf = function(a, b, c) {
        c = void 0 === c ? null : c;
        b = _.w(b);
        for (var d = b.next(); !d.done; d = b.next()) {
            var e = a,
                f = d.value;
            d = c;
            d = void 0 === d ? null : d;
            var g = e.document;
            var h = f.x,
                k = f.y;
            g.hasOwnProperty("_goog_efp_called_") || (g._goog_efp_called_ = g.elementFromPoint(h, k));
            if (g = g.elementFromPoint(h, k)) {
                if (!(h = Rf(g, e, f, d))) a: {
                    d = void 0 === d ? null : d;h = e.document;
                    for (g = g.offsetParent; g && g != h.body; g = g.offsetParent)
                        if (k = Rf(g, e, f, d)) {
                            h = k;
                            break a
                        }
                    h = null
                }
                d = h || null
            } else d = null;
            if (d) return d
        }
        return null
    };
    Rf = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("fixed" !== Tf(a, "position")) return null;
        var e = "GoogleActiveViewInnerContainer" == a.getAttribute("class") || 1 >= _.Uf(_.Vf, a).width && 1 >= _.Uf(_.Vf, a).height ? !0 : !1;
        d && d.j("ach_evt", {
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
    };
    Wf = function(a, b) {
        b = void 0 === b ? [] : b;
        var c = Date.now();
        return _.Jf(b, function(d) {
            return c - d < 1E3 * a
        })
    };
    Yf = function(a, b) {
        try {
            var c = a.getItem("__lsv__");
            if (!c) return [];
            try {
                var d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || _.Xf(d, function(e) {
                    return !_.t(Number, "isInteger").call(Number, e)
                })) return a.removeItem("__lsv__"), [];
            d = Wf(b, d);
            d.length || null == a || a.removeItem("__lsv__");
            return d
        } catch (e) {
            return null
        }
    };
    Zf = function(a, b) {
        .001 > Zd() && be({
            c: a,
            s: b
        }, "gpt_whirs")
    };
    $f = function(a) {
        var b = a.split("/");
        return "/" === a.charAt(0) && 2 <= b.length ? b[1] : "/" !== a.charAt(0) && 1 <= b.length ? b[0] : ""
    };
    _.cg = function(a) {
        _.E(ag).j = !0;
        return bg[a]
    };
    eg = function() {
        var a = dg();
        Dd(!_.E(ag).j);
        _.t(Object, "assign").call(Object, bg, a._vars_);
        a._vars_ = bg
    };
    gg = function(a) {
        var b = _.A(fg);
        if (a.length <= b) return {
            url: a,
            pd: 0
        };
        var c = a;
        c.length > b && (c = c.substring(0, b - 8), c = c.replace(/%\w?$/, ""), c = c.replace(/&[^=]*=?$/, ""), c += "&trunc=1");
        b = c;
        return {
            url: b,
            pd: a.length - b.length + 8
        }
    };
    hg = function(a, b) {
        b = void 0 === b ? window : b;
        return b.location ? b.URLSearchParams ? (a = (new URLSearchParams(b.location.search)).get(a), (null == a ? 0 : a.length) ? a : null) : (a = (new RegExp("[?&]" + a + "=([^&]*)")).exec(b.location.search)) ? decodeURIComponent(a[1]) : null : null
    };
    ig = function(a, b) {
        b = void 0 === b ? window : b;
        return !!hg(a, b)
    };
    mg = function(a) {
        var b = new jg;
        b = oc(b, 1, Date.now(), 0);
        b = oc(b, 2, a.pvsid, 0);
        b = oc(b, 3, a.Fa, "");
        var c = ke();
        b = kg(b, 4, c);
        b = oc(b, 5, a.Xe, 0);
        a = oc(b, 12, a.xe, "");
        var d;
        if (b = null == (d = u.globalThis.performance) ? void 0 : d.memory) {
            d = new lg;
            try {
                oc(d, 1, b.jsHeapSizeLimit, 0)
            } catch (e) {}
            try {
                oc(d, 2, b.totalJSHeapSize, 0)
            } catch (e) {}
            try {
                oc(d, 3, b.usedJSHeapSize, 0)
            } catch (e) {}
        } else d = void 0;
        d && Kc(a, 10, d);
        return a
    };
    rg = function(a, b) {
        var c = ng();
        if (a.Ib) {
            var d = a.bb;
            a = mg(a);
            var e = new og;
            b = oc(e, 1, b, !1);
            c = oc(b, 2, c, 0);
            c = pg(a, 6, qg, c);
            zd(d, c)
        }
    };
    tg = function(a, b) {
        if (!document.getElementById("gatc:host:script")) {
            var c = document.createElement("script");
            c.id = "gatc:host:script";
            Wa(c, a.ce.Ie);
            a.Gd.appendChild(c)
        }
        a = window.gatc_host;
        sg(a) ? b(a) : Array.isArray(a) && "function" === typeof a.push ? a.push(b) : window.gatc_host = [b]
    };
    yg = function(a, b) {
        b = void 0 === b ? ug : b;
        var c = function(e) {
                "string" === typeof e && (e = vg.j(e), a(e))
            },
            d = new wg;
        tg(b, function(e) {
            if (sg(e)) {
                var f = new xg;
                oc(f, 1, vg.m, 0);
                e.openConsoleTab(f.Y(), c, function(g) {
                    if (!(d.j instanceof MessagePort)) {
                        var h = d.j;
                        d.j = g;
                        g = _.w(h);
                        for (h = g.next(); !h.done; h = g.next())(h = h.value) && d.send(h)
                    }
                })
            }
        });
        return d
    };
    Ag = function(a, b) {
        zg.has(a);
        zg.set(a, b)
    };
    dg = function() {
        var a;
        return null != (a = _.q.googletag) ? a : _.q.googletag = {
            cmd: []
        }
    };
    Bg = function(a, b) {
        var c = dg();
        c.hasOwnProperty(a) || (c[a] = b)
    };
    Eg = function(a) {
        if (a = Dg[a]) {
            var b, c, d;
            return null != (d = null == (c = (b = dg())[a]) ? void 0 : c.call(b)) ? d : null
        }
        return null
    };
    Lg = function(a) {
        var b = new Fg;
        if (Gg(a)) return Hg(b, 1, Ig, a), b;
        if ("number" === typeof a) return Hg(b, 2, Ig, a), b;
        if ("boolean" === typeof a) return Hg(b, 3, Ig, a), b;
        if (void 0 === a) return Hg(b, 4, Ig, 2), b;
        if (null === a) return Hg(b, 4, Ig, 1), b;
        if ("function" === typeof a) return Hg(b, 7, Ig, a.toString()), b;
        if (Array.isArray(a)) {
            var c = new Jg;
            Kg(c, a.map(function(h) {
                return Lg(h)
            }));
            pg(b, 5, Ig, c);
            return b
        }
        c = new Mg;
        var d = kc(c, F(c, 1), 1, Fg),
            e = !1;
        if (a === dg()) v(c, 2, 1), e = !0;
        else if (void 0 !== a.constructor && zg.has(a.constructor)) {
            var f = zg.get(a.constructor);
            v(c, 2, f);
            e = !0;
            8 === f ? (f = a.getSlotId().getDomId(), Ng(c, Og(new Pg, Qg().m[f]))) : 7 === f && (f = Qg().j, Ng(c, Rg(f)))
        }
        a = _.w(_.t(Object, "entries").call(Object, a));
        for (f = a.next(); !f.done; f = a.next()) {
            var g = _.w(f.value);
            f = g.next().value;
            g = g.next().value;
            e && "function" === typeof g || d.set(f, Lg(g))
        }
        pg(b, 6, Ig, c);
        return b
    };
    G = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        _.cg(148) && (Sg || (Sg = new Tg, Sg.initialize()), c = Ug(b, c));
        return function() {
            var e = ld.apply(0, arguments),
                f = _.Vg(a, b, c, d).apply(this, e);
            try {
                var g = e.length;
                if (a.Ib && a.sf) {
                    var h = a.bb,
                        k = mg(a);
                    var l = oc(k, 5, a.We, 0);
                    var m = new Wg;
                    var n = oc(m, 1, b, 0);
                    var p = oc(n, 2, g, 0);
                    var r = pg(l, 9, qg, p);
                    zd(h, r)
                }
            } catch (z) {}
            return f
        }
    };
    _.Vg = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return function() {
            var e = ld.apply(0, arguments),
                f = void 0,
                g = !1,
                h = null,
                k = _.E(Xg);
            try {
                var l = _.B(Yg);
                l && k && (h = k.start(b.toString(), 3));
                f = c.apply(this, e);
                g = !0;
                l && k && k.end(h)
            } catch (m) {
                try {
                    if (g) Zg.call(this, a, 110, m);
                    else if (Zg.call(this, a, b, m), !d) throw m;
                } catch (n) {
                    if ((e = h) && $g && ah() && ($g.clearMarks("goog_" + e.label + "_" + e.uniqueId + "_start"), $g.clearMarks("goog_" + e.label + "_" + e.uniqueId + "_end")), !g && !d) throw m;
                }
            }
            return f
        }
    };
    _.bh = function(a, b, c, d) {
        return _.Vg(a, b, c, void 0 === d ? !1 : d)()
    };
    Zg = function(a, b, c) {
        if (a.Yd) {
            c = c.error && c.meta && c.id ? c.error : c;
            var d = new ch,
                e = new dh;
            try {
                var f = je(window);
                oc(e, 1, f, 0)
            } catch (p) {}
            try {
                var g = ke();
                kg(e, 2, g)
            } catch (p) {}
            try {
                oc(e, 3, window.document.URL, "")
            } catch (p) {}
            f = Kc(d, 2, e);
            g = new eh;
            b = oc(g, 1, b, 0);
            try {
                var h = Gg(null == c ? void 0 : c.name) ? c.name : "Unknown error";
                oc(b, 2, h, "")
            } catch (p) {}
            try {
                var k = Gg(null == c ? void 0 : c.message) ? c.message : "Caught " + c;
                oc(b, 3, k, "")
            } catch (p) {}
            try {
                var l = Gg(null == c ? void 0 : c.stack) ? c.stack : Error().stack;
                l && kg(b, 4, l.split(/\n\s*/))
            } catch (p) {}
            h = Kc(f, 1, b);
            k = new fh;
            try {
                oc(k, 1, a.ab || a.Fa, "")
            } catch (p) {}
            try {
                var m = gh();
                oc(k, 2, m, 0)
            } catch (p) {}
            try {
                var n = [].concat(_.xd(_.t(hh, "keys").call(hh)));
                kg(k, 3, n)
            } catch (p) {}
            pg(h, 4, ih, k);
            oc(h, 5, a.vd, 0);
            yd(a.bb, h)
        }
    };
    wh = function(a, b) {
        var c, d;
        return null != (d = null == (c = _.t(a, "find").call(a, function(e) {
            e = vc(e, vh, 1);
            return e.getWidth() <= b.getWidth() && e.getHeight() <= b.getHeight()
        })) ? void 0 : tc(c, vh, 2)) ? d : null
    };
    Ah = function(a, b, c) {
        return "number" === typeof b && "number" === typeof c && tc(a, xh, 6).length ? wh(tc(a, xh, 6), yh(zh(new vh, b), c)) : tc(a, vh, 5)
    };
    Ch = function(a) {
        var b = void 0 === b ? window : b;
        var c = null;
        b.top === b && (b = Bh(!1, b), c = Ah(a, b.width, b.height));
        null != c || (c = Ah(a));
        return null == c ? [] : c.map(function(d) {
            return H(d, 3) ? "fluid" : [d.getWidth(), d.getHeight()]
        })
    };
    Eh = function(a) {
        if (!Ch(a).length && Dh(a, 16)) return "1x1";
        var b = [],
            c = !1;
        a = _.w(Ch(a));
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, Array.isArray(d) ? b.push(d.join("x")) : "fluid" === d ? c = !0 : b.push(d);
        c && b.unshift("320x50");
        return b.join("|")
    };
    Gh = function(a, b) {
        b = void 0 === b ? null : b;
        var c = [];
        a && (c.push(a.getAdUnitPath()), c.push(Eh(a)), c.push(a.getDomId()));
        if (b) {
            a = [];
            for (var d = 0; b && 25 > d; b = b.parentNode, ++d) 9 === b.nodeType ? a.push("") : a.push(b.id);
            (b = a.join()) && c.push(b)
        }
        return c.length ? Fh(c.join(":")).toString() : "0"
    };
    Hh = function(a) {
        return 0 !== a && 1 !== a
    };
    Ih = function(a, b) {
        var c;
        return !(null != (c = H(b, 22)) ? !c : !H(a, 15))
    };
    Kh = function(a) {
        var b = a.document;
        return Jh(a) ? b.URL : b.referrer
    };
    Nh = function(a) {
        try {
            return Lh(a, window.top)
        } catch (b) {
            return new _.Mh(-12245933, -12245933)
        }
    };
    Qh = function(a) {
        if (!a) return null;
        var b, c;
        a.getBoundingClientRect ? (a = _.Uf(Oh, a), a = new _.Ph(a.right - a.left, a.bottom - a.top)) : a = null;
        return null != (c = null == (b = a) ? void 0 : b.floor()) ? c : null
    };
    Sh = function(a, b) {
        for (var c = {}, d = _.w(_.t(Object, "keys").call(Object, b)), e = d.next(); !e.done; e = d.next()) {
            e = e.value;
            var f = cc(b[e]),
                g = _.E(Rh),
                h = g.j.get(e);
            null == h ? h = ++_.E(Xg).D : g.j.delete(e);
            v(f, 20, h);
            c[e] = f
        }
        return {
            V: cc(a),
            P: c
        }
    };
    Uh = function() {
        for (var a = "", b = _.w(Th()), c = b.next(); !c.done; c = b.next()) c = c.value, 15 >= c && (a += "0"), a += c.toString(16);
        return a
    };
    Th = function() {
        var a;
        if ("function" === typeof(null == (a = window.crypto) ? void 0 : a.getRandomValues)) return a = new Uint8Array(16), window.crypto.getRandomValues(a), a;
        a = window;
        var b;
        if ("function" === typeof(null == (b = a.msCrypto) ? void 0 : b.getRandomValues)) return b = new Uint8Array(16), a.msCrypto.getRandomValues(b), b;
        a = Array(16);
        for (b = 0; b < a.length; b++) a[b] = Math.floor(255 * Math.random());
        return a
    };
    ai = function(a, b, c, d) {
        var e = Vh(b, a) || Wh(b, a);
        if (!e) return null;
        var f = Nh(e),
            g = e === Wh(b, a),
            h = Xh(function() {
                var p = g ? Wh(b, a) : e;
                return p && Yh(p, window)
            }),
            k = function(p) {
                var r;
                return null == (r = h()) ? void 0 : r.getPropertyValue(p)
            };
        c = Ch(c)[0];
        var l = !1;
        Array.isArray(c) && (l = d ? g : 0 === f.x && "center" === k("text-align"));
        l && (f.x += Math.round(Math.max(0, (g ? e.clientWidth : e.parentElement.clientWidth) - Number(c[0])) / 2));
        if (g) {
            var m;
            f.y += Math.round(Math.min(null != (m = Zh(k("padding-top"))) ? m : 0, e.clientHeight));
            if (!l) {
                d = e.clientWidth;
                var n;
                f.x += Math.round(Math.min(null != (n = Zh(k("padding-left"))) ? n : 0, d))
            }
        }
        return f && $h(e) ? f : new _.Mh(-12245933, -12245933)
    };
    bi = function(a, b, c, d) {
        var e = Wh(a, c),
            f = "none" === (null == e ? void 0 : e.style.display);
        f && (e.style.display = "block");
        a = ai(c, a, b, d);
        f && (e.style.display = "none");
        return a
    };
    ci = function(a) {
        return "google_ads_iframe_" + a.toString()
    };
    di = function(a) {
        return ci(a) + "__container__"
    };
    Vh = function(a, b) {
        var c;
        return (null == (c = Wh(a, b)) ? void 0 : c.querySelector('[id="' + di(a) + '"]')) || null
    };
    ei = function(a, b) {
        var c, d;
        return null != (d = null == (c = Vh(a, b)) ? void 0 : c.querySelector('iframe[id="' + ci(a) + '"]')) ? d : null
    };
    fi = function(a) {
        var b = window;
        try {
            var c, d;
            null == (c = b.performance) || null == (d = c.mark) || d.call(c, a)
        } catch (e) {}
    };
    Wh = function(a, b) {
        b = void 0 === b ? document : b;
        return Qg().D.get(a) || b.getElementById(a.getDomId())
    };
    gi = function(a) {
        return Math.round(Number(Zh(a)))
    };
    ii = function(a, b, c) {
        for (var d = 100; a && a !== b && --d;) _.hi(a, c), a = a.parentElement
    };
    ji = function(a, b, c, d, e) {
        _.hi(a, {
            "margin-left": "0px",
            "margin-right": "0px"
        });
        var f = {},
            g = "rtl" === d.direction,
            h = ((e && -12245933 !== e.width ? e.width : b.innerWidth) - c) / 2;
        d = function() {
            var k = a.getBoundingClientRect().left;
            return g ? h - k : k - h
        };
        b = d();
        return 0 !== b ? (c = function(k) {
            g ? f["margin-right"] = k + "px" : f["margin-left"] = k + "px"
        }, c(-b), _.hi(a, f), d = d(), 0 !== d && b !== d && (c(b / (d - b) * b), _.hi(a, f)), !0) : !1
    };
    li = function(a, b, c, d, e, f, g, h, k) {
        var l = Eh(d);
        _.q.setTimeout(_.Vg(a, 459, function() {
            return void ki(a, b, c, e, f, g, l, h, k)
        }), 500)
    };
    ki = function(a, b, c, d, e, f, g, h, k) {
        if (_.q.IntersectionObserver) {
            var l = null,
                m, n = null != (m = ei(c, b)) ? m : Wh(c, b);
            m = _.Vg(a, 459, function(p) {
                if (p = p && p[0]) {
                    var r = p.boundingClientRect,
                        z = window.innerWidth,
                        C = Math.round(r.left),
                        J = Math.round(r.right),
                        V = 0 > C + 2,
                        P = 0 < J - (z + 2);
                    if (p.intersectionRatio >= 1 - ((0 <= Math.round(r.left) ? 0 : 2) + (Math.round(r.right) <= window.innerWidth ? 0 : 2)) / e || V || P) mi(h, function(L) {
                        if (V || P) {
                            var W = new ni;
                            W.set(8);
                            oi(n) && W.set(10);
                            W = pi(W)
                        } else W = qi(b, c);
                        var R = ri(c, n, f),
                            X = R.Re;
                        R = R.Se;
                        si(L, a);
                        I(L, "qid", k);
                        I(L, "iu", c.getAdUnitPath());
                        I(L, "e", String(W));
                        V && I(L, "ofl", String(C));
                        P && I(L, "ofr", String(J - z));
                        I(L, "ret", e + "x" + f);
                        I(L, "req", g);
                        I(L, "bm", String(d));
                        I(L, "efh", Number(X));
                        I(L, "stk", Number(R));
                        I(L, "ifi", ti(window))
                    }, _.A(ui)), l && l.unobserve(n)
                }
            });
            n && (l = new _.q.IntersectionObserver(m, {
                threshold: [1]
            }), l.observe(n))
        }
    };
    qi = function(a, b) {
        var c = ei(b, a) || Wh(b, a),
            d = new ni;
        try {
            var e = c.getBoundingClientRect(),
                f = e.left,
                g = e.top,
                h = e.width,
                k = e.height,
                l = Wh(b, a),
                m = Yh(l, window);
            if ("hidden" === m.visibility || "none" === m.display) return pi(d);
            var n = gi(m.getPropertyValue("border-top-width") || 0) + 1;
            b = f + h;
            k = g + k;
            var p = a.elementsFromPoint(f + n + 2, g + n);
            var r = a.elementsFromPoint(b - n - 2, g + n);
            var z = a.elementsFromPoint(b - n - 2, k - n);
            var C = a.elementsFromPoint(f + n + 2, k - n);
            var J = a.elementsFromPoint(b / 2, k - n)
        } catch (P) {
            return d.set(1), pi(d)
        }
        if (!(p && p.length && r && r.length && z && z.length && C && C.length && J && J.length)) return d.set(7), pi(d);
        a = function(P, L) {
            for (var W = !1, R = 0; R < P.length; R++) {
                var X = P[R];
                if (W) {
                    var wa = Yh(X, window);
                    if ("hidden" !== wa.visibility && !vi(X) && !V(c, X)) {
                        d.set(L);
                        "absolute" === wa.position && d.set(11);
                        break
                    }
                } else c === X && (W = !0)
            }
        };
        wi(c) && d.set(9);
        var V = function(P, L) {
            return xi(P, L) || xi(L, P)
        };
        f = p[0];
        c === f || V(c, f) || vi(f) || d.set(2);
        f = r[0];
        c === f || V(c, f) || vi(f) || d.set(3);
        f = z[0];
        c === f || V(c, f) || vi(f) || d.set(4);
        f = C[0];
        c === f || V(c, f) || vi(f) || d.set(5);
        if (vi(c)) return pi(d);
        a(p, 12);
        a(r, 13);
        a(z, 14);
        a(C, 15);
        a(J, 6);
        return pi(d)
    };
    oi = function(a) {
        var b = !1,
            c = !1;
        return yi(a, function(d) {
            c = c || "scroll" === d.overflowX || "auto" === d.overflowX;
            return (b = b || "flex" === d.display) && c
        })
    };
    ri = function(a, b, c) {
        var d = (a = Wh(a)) && Yh(a, window),
            e = d ? "absolute" !== d.position : !0,
            f = !1,
            g = a && a.parentElement,
            h = !1;
        zi(b, function(k) {
            var l = k.style;
            if (e)
                if (h || (h = k === g)) e = Ai(k, _.q, -1, -1);
                else {
                    l = l && l.height;
                    var m = (l && _.t(l, "endsWith").call(l, "px") ? gi(l) : 0) >= c;
                    !l || m || "string" === typeof l && _.t(Bi, "includes").call(Bi, l) || (e = !1)
                }
            f || (k = Yh(k, _.q), "sticky" !== k.position && "fixed" !== k.position) || (f = !0);
            return !(f && !e)
        }, 100);
        return {
            Re: e,
            Se: f
        }
    };
    Ai = function(a, b, c, d) {
        var e = a.style;
        return (null == e ? 0 : e.height) && !_.t(Bi, "includes").call(Bi, e.height) || (null == e ? 0 : e.maxHeight) && !_.t(Ci, "includes").call(Ci, e.maxHeight) || Di(a, b.document, function(f) {
            var g = f.style.height;
            f = f.style.getPropertyValue("max-height");
            return !!g && !_.t(Bi, "includes").call(Bi, g) || !!f && !_.t(Ci, "includes").call(Ci, f)
        }, c, d) ? !1 : !0
    };
    Di = function(a, b, c, d, e) {
        b = b.styleSheets;
        if (!b) return !1;
        var f = a.matches || a.msMatchesSelector;
        d = -1 === d ? Infinity : d;
        e = -1 === e ? Infinity : e;
        for (var g = 0; g < Math.min(b.length, d); ++g) {
            var h = null;
            try {
                var k = b[g],
                    l = null;
                try {
                    l = k.cssRules || k.rules
                } catch (L) {
                    if (15 == L.code) throw L.styleSheet = k, L;
                }
                h = l
            } catch (L) {
                continue
            }
            l = void 0;
            if (null != (l = h) && l.length)
                for (l = 0; l < Math.min(h.length, e); ++l) try {
                    var m = h[l],
                        n, p = c;
                    if (!(n = f.call(a, m.selectorText) && p(m))) a: {
                        var r = void 0;p = a;
                        var z = c,
                            C = e,
                            J = null != (r = m.cssRules) ? r : [];
                        for (r = 0; r < Math.min(J.length, C); r++) {
                            var V = J[r],
                                P = z;
                            if (f.call(p, V.selectorText) && P(V)) {
                                n = !0;
                                break a
                            }
                        }
                        n = !1
                    }
                    if (n) return !0
                } catch (L) {}
        }
        return !1
    };
    vi = function(a) {
        return yi(a, function(b) {
            return "fixed" === b.position || "sticky" === b.position
        })
    };
    wi = function(a) {
        return yi(a, function(b) {
            var c;
            return (y = ["left", "right"], _.t(y, "includes")).call(y, null != (c = b["float"]) ? c : b.cssFloat)
        })
    };
    Ei = function(a) {
        return "number" === typeof a || "string" === typeof a
    };
    Fi = function(a, b) {
        /^(uuid-in-package|urn:uuid):[0-9a-fA-F-]*$/.test(b) && (b = md(b), a.src = Va(b).toString())
    };
    Hi = function(a, b, c) {
        c = void 0 === c ? Gi : c;
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? c(a, b) : _.ab(a, "load", function() {
            return void c(a, b)
        }))
    };
    Ii = function(a) {
        try {
            var b, c;
            return (null != (c = null == (b = a.top) ? void 0 : b.frames) ? c : {}).google_ads_top_frame
        } catch (d) {}
        return null
    };
    Ji = function(a) {
        var b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    };
    Ki = function(a) {
        if (a === a.top || id(a.top)) return u.Promise.resolve({
            status: 4
        });
        var b = Ii(a);
        if (!b) return u.Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && Ji(a.document.referrer)) return u.Promise.resolve({
            status: 3
        });
        var c = new _.Mf;
        a = new MessageChannel;
        a.port1.onmessage = function(d) {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                Vb: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    Oi = function(a) {
        var b = void 0 === b ? Li : b;
        var c = Mi(a);
        return c.messageChannelSendRequestFn ? u.Promise.resolve(c.messageChannelSendRequestFn) : new u.Promise(function(d) {
            function e(k) {
                return h.j(k).then(function(l) {
                    return l.data
                })
            }
            var f = _.Ld("IFRAME");
            f.style.display = "none";
            f.name = "goog_topics_frame";
            f.src = Va(b).toString();
            var g = (new URL(b.toString())).origin,
                h = Ni({
                    destination: a,
                    bc: f,
                    origin: g,
                    Ka: "goog:gRpYw:doubleclick"
                });
            h.j("goog:topics:frame:handshake:ack").then(function(k) {
                "goog:topics:frame:handshake:ack" === k.data && d(e)
            });
            c.messageChannelSendRequestFn = e;
            a.document.documentElement.appendChild(f)
        })
    };
    Si = function(a, b, c, d, e, f) {
        var g = Pi(f),
            h = g.Sb,
            k = g.Rb;
        b = Mi(b);
        b.getTopicsPromise || (c = {
            message: "goog:topics:frame:get:topics",
            callApi: c,
            sendGen204: d
        }, d && (c.pvsid = je(window)), a = a(c).then(function(l) {
            var m = k;
            if (l instanceof Uint8Array) m || (m = !(h instanceof Uint8Array && pa(l, h)));
            else if (Id()(l)) m || (m = l !== h);
            else return l = Error(JSON.stringify(l)), Zg(e.context, 989, l), 7;
            if (m && f) try {
                var n = new Qi;
                var p = v(n, 2, _.me());
                l instanceof Uint8Array ? Hg(p, 1, Ri, l) : Hg(p, 3, Ri, l);
                f.setItem("goog:cached:topics", p.Y())
            } catch (r) {}
            return l
        }), b.getTopicsPromise = a);
        return h && !k ? u.Promise.resolve(h) : b.getTopicsPromise
    };
    Pi = function(a) {
        if (!a) return {
            Sb: null,
            Rb: !0
        };
        try {
            var b = a.getItem("goog:cached:topics");
            if (!b) return {
                Sb: null,
                Rb: !0
            };
            var c = Od(Qi, b),
                d = qc(c, Ri);
            switch (d) {
                case 0:
                    var e = null;
                    break;
                case 1:
                    var f = rc(c, Ri, 1);
                    a = void 0;
                    a = void 0 === a ? "" : a;
                    var g = Ti(c, f);
                    var h = null == g ? a ? new Hb(a, ub) : Ib() : g;
                    var k = Ui(h);
                    e = k ? new Uint8Array(k) : Vi || (Vi = new Uint8Array(0));
                    break;
                case 3:
                    e = Wd(c, rc(c, Ri, 3), 0);
                    break;
                default:
                    Qa(d)
            }
            return {
                Sb: e,
                Rb: Wd(c, 2, 0) + 6048E5 < _.me()
            }
        } catch (l) {
            return {
                Sb: null,
                Rb: !0
            }
        }
    };
    Mi = function(a) {
        var b;
        return null != (b = a.google_tag_topics_state) ? b : a.google_tag_topics_state = {}
    };
    Yi = function(a) {
        if (Fa()) {
            var b = a.document.documentElement.lang;
            Wi(a) ? Xi(je(a), !0, "", b) : (new MutationObserver(function(c, d) {
                Wi(a) && (Xi(je(a), !1, b, a.document.documentElement.lang), d.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    };
    Wi = function(a) {
        return a.document.documentElement.classList.contains("translated-rtl") || a.document.documentElement.classList.contains("translated-ltr")
    };
    Xi = function(a, b, c, d) {
        be({
            ptt: "17",
            pvsid: "" + a,
            ibatl: String(b),
            pl: c,
            nl: d
        }, "translate-event")
    };
    Zi = function(a) {
        var b = "";
        hd(function(c) {
            if (c === c.top) return !0;
            var d;
            if (null == (d = c.document) ? 0 : d.referrer) b = c.document.referrer;
            return !1
        }, !1, !1, a);
        return b
    };
    aj = function(a) {
        a = (id(a.top) ? a.top : a).AMP;
        return "object" === typeof a && !!$i(a, function(b, c) {
            return !/^inabox/i.test(c)
        })
    };
    dj = function(a, b) {
        var c = bj.get(a);
        c || (b = c = b(), cj.set(b, a), bj.set(a, b));
        return c
    };
    fj = function(a, b) {
        return dj(b, function() {
            return new ej(a, b)
        })
    };
    K = function(a) {
        return function() {
            return new gj(a, [].concat(_.xd(ld.apply(0, arguments))))
        }
    };
    hj = function(a) {
        return "[" + a.map(function(b) {
            return "string" === typeof b ? "'" + b + "'" : Array.isArray(b) ? hj(b) : String(b)
        }).join(", ") + "]"
    };
    ij = function(a, b) {
        b = hj(b);
        b = b.substring(1, b.length - 1);
        return new gj(96, [a, b])
    };
    jj = function(a) {
        return (y = "rewardedSlotReady rewardedSlotGranted rewardedSlotClosed slotAdded slotRequested slotResponseReceived slotRenderEnded slotOnload slotVisibilityChanged impressionViewable".split(" "), _.t(y, "includes")).call(y, a) ? a : null
    };
    lj = function(a, b, c) {
        return dj(c, function() {
            return new kj(a, b, c)
        })
    };
    nj = function(a, b, c) {
        return dj(c, function() {
            return new mj(a, b, c)
        })
    };
    tj = function(a) {
        var b = window;
        "complete" === _.q.document.readyState ? _.bh(a, 94, function() {
            dg()._pubconsole_disable_ || null !== oj(b) && pj(a, b)
        }) : _.ab(_.q, "load", _.Vg(a, 94, function() {
            dg()._pubconsole_disable_ || null !== oj(b) && pj(a, b)
        }));
        Bg("disablePublisherConsole", G(a, 93, qj));
        Bg("onPubConsoleJsLoad", G(a, 731, rj));
        Bg("openConsole", G(a, 732, function(c) {
            sj(a, void 0 === c ? "" : c)
        }))
    };
    pj = function(a, b) {
        b = void 0 === b ? _.q : b;
        if (!uj) {
            var c = new vj("gpt_pubconsole_loaded");
            si(c, a);
            I(c, "param", String(oj(b)));
            I(c, "api", String(wj));
            xj(c, 1);
            yj(b.document, vd(zj));
            uj = !0
        }
    };
    oj = function(a) {
        var b = Kh(a),
            c;
        return null != (c = (y = ["google_debug", "dfpdeb", "google_console", "google_force_console", "googfc"], _.t(y, "find")).call(y, function(d) {
            return null !== Aj(b, d)
        })) ? c : null
    };
    qj = function() {
        dg()._pubconsole_disable_ = !0
    };
    rj = function() {
        Bj && (dg().console.openConsole(Cj), Cj = void 0, Bj = !1)
    };
    sj = function(a, b) {
        b = void 0 === b ? "" : b;
        wj = !0;
        var c;
        (null == (c = dg()) ? 0 : c.console) ? dg().console.openConsole(b): (b && (Cj = b), Bj = !0, pj(a))
    };
    Lj = function(a, b, c, d, e) {
        if ("string" !== typeof c || Dj(c)) M(e, ij("Slot.setTargeting", [c, d]), a);
        else {
            var f = [];
            Array.isArray(d) ? f = d : na(d) ? f = _.t(Array, "from").call(Array, d) : d && (f = [d]);
            f = f.map(String);
            (d = (y = Ej(b), _.t(y, "find")).call(y, function(g) {
                return Fj(g) === c
            })) ? Gj(d, f): (d = Gj(Hj(new Ij, c), f), Jj(b, 9, Ij, d));
            e.info(Kj(c, f.join(), b.getAdUnitPath()), a)
        }
    };
    Mj = function(a, b, c, d) {
        if (null != c && "object" === typeof c)
            for (var e = _.w(_.t(Object, "keys").call(Object, c)), f = e.next(); !f.done; f = e.next()) f = f.value, Lj(a, b, f, c[f], d);
        else d.error(ij("Slot.updateTargetingFromMap", [c]), a)
    };
    Oj = function(a, b, c) {
        return dj(c, function() {
            return new Nj(a, b, c, c.j)
        })
    };
    Pj = function(a) {
        return _.t(Object, "assign").call(Object, {}, a, _.t(Object, "fromEntries").call(Object, _.t(Object, "entries").call(Object, a).map(function(b) {
            b = _.w(b);
            var c = b.next().value;
            return [b.next().value, c]
        })))
    };
    rk = function() {
        var a = {},
            b = Pj(Qj);
        a.OutOfPageFormat = b;
        b = Pj(Rj);
        a.TrafficSource = b;
        return a
    };
    uk = function() {
        for (var a = sk(tk) || "0-0-0", b = a.split("-").map(function(e) {
                return Number(e)
            }), c = ["1", "0", "38"].map(function(e) {
                return Number(e)
            }), d = 0; d < b.length; d++) {
            if (b[d] > c[d]) return a;
            if (b[d] < c[d]) break
        }
        return "1-0-38"
    };
    zk = function() {
        if (vk) return vk;
        for (var a = wk(xk), b = [], c = 0; c < a.length; c += 2) yk(a[c], a[c + 1], b);
        return vk = b.join("&")
    };
    Fk = function(a, b) {
        if (!b || !_.fa(b)) return null;
        var c = !1,
            d = new Ak;
        _.Bk(b, function(e, f) {
            var g = !1;
            switch (f) {
                case "allowOverlayExpansion":
                    "boolean" === typeof e ? v(d, 1, b.allowOverlayExpansion) : c = g = !0;
                    break;
                case "allowPushExpansion":
                    "boolean" === typeof e ? v(d, 2, b.allowPushExpansion) : c = g = !0;
                    break;
                case "sandbox":
                    !0 === e ? v(d, 3, b.sandbox) : c = g = !0;
                    break;
                case "useUniqueDomain":
                    Ck();
                    return;
                default:
                    g = !0
            }
            g && a.error(Dk("setSafeFrameConfig", Ek(b), f, Ek(e)))
        });
        return c ? null : d
    };
    Hk = function(a) {
        var b = new Ak;
        a = _.w(a);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value) Gk(c, 1) && v(b, 1, H(c, 1)), Gk(c, 2) && v(b, 2, H(c, 2)), Gk(c, 3) && v(b, 3, H(c, 3)), Gk(c, 4) && v(b, 4, H(c, 4));
        return b
    };
    Jk = function(a) {
        return Array.isArray(a) && 2 === a.length ? a.every(Ik) : "fluid" === a
    };
    Kk = function(a) {
        return Array.isArray(a) && 2 === a.length && Ik(a[0]) && Ik(a[1])
    };
    Mk = function(a) {
        return Array.isArray(a) ? yh(zh(new vh, a[0]), a[1]) : Lk()
    };
    Ok = function(a) {
        var b = [];
        if (Nk(a)) b.push(Mk(a));
        else if (Array.isArray(a)) {
            a = _.w(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, Nk(c) ? b.push(Mk(c)) : pa(c, ["fluid"]) && b.push(Lk())
        }
        return b
    };
    Pk = function(a) {
        if (!Array.isArray(a) || 2 !== a.length) return null;
        var b = a[0];
        a = a[1];
        if ("number" === typeof b && 0 <= b) b = Math.floor(b);
        else if (null !== b) return null;
        if ("number" === typeof a && 0 <= a) a = Math.floor(a);
        else if (null !== a) return null;
        return yh(zh(new vh, b), a)
    };
    Rk = function(a) {
        var b = void 0 === b ? window : b;
        if (!a) return {
            Mc: [],
            Oa: null
        };
        if (Array.isArray(a) ? 0 : Array.isArray(a.fixed) || "fluid" === a.fixed || Array.isArray(a.max)) {
            var c = Ok(a.fixed),
                d;
            if (d = Pk(a.max)) {
                var e = a.min ? Pk(a.min) : new vh;
                null != (null == e ? void 0 : e.getWidth()) || null != e && zh(e, 0);
                null != (null == e ? void 0 : e.getHeight()) || null != e && yh(e, 0);
                d = {
                    max: d,
                    min: e
                }
            } else d = {
                max: null,
                min: null
            };
            e = d;
            d = e.max;
            e = e.min;
            if (a.max && !d) throw Error("Invalid GPT maximum size: " + JSON.stringify(a));
            if (a.min && !e) throw Error("Invalid GPT minimum size: " + JSON.stringify(a));
            var f;
            if (null != (f = a.fixed) && f.length || d) {
                if (0 === d.getWidth() || 0 === d.getHeight()) throw Error("Invalid GPT size: maximums cannot be zero: " + JSON.stringify(a));
                if (e) {
                    b = e.getWidth();
                    f = d.getWidth();
                    if (null != b && null != f && b > f) throw Error("Invalid GPT size: minimum width larger than maximum width: " + JSON.stringify(a));
                    b = e.getHeight();
                    f = d.getHeight();
                    if (null != b && null != f && b > f) throw Error("Invalid GPT size: minimum height larger than maximum height: " + JSON.stringify(a));
                }
            } else {
                var g, h;
                null == (g = b.console) || null == (h = g.warn) || h.call(g, "Invalid GPT fixed size specification: " + JSON.stringify(a))
            }
            d && e ? (a = new Qk, a = Kc(a, 1, d), a = Kc(a, 2, e)) : a = null;
            return {
                Mc: c,
                Oa: a
            }
        }
        a.length || null == (c = b.console) || null == (d = c.warn) || d.call(c, "Invalid GPT fixed size specification: " + JSON.stringify(a));
        return {
            Mc: Ok(a),
            Oa: null
        }
    };
    Nk = function(a) {
        return Array.isArray(a) && 1 < a.length ? "number" === typeof a[0] && "number" === typeof a[1] : "fluid" === a
    };
    Tk = function(a) {
        if (!Array.isArray(a) || 2 !== a.length) throw new Sk("Each mapping entry must be an array of size 2");
        var b = a[0];
        if (!Kk(b)) throw new Sk("Size must be an array of two non-negative integers");
        b = yh(zh(new vh, b[0]), b[1]);
        if (Array.isArray(a[1]) && 0 === a[1].length) a = [];
        else if (a = Ok(a[1]), 0 === a.length) throw new Sk("At least one slot size must be present");
        var c = new xh;
        b = Kc(c, 1, b);
        return Gc(b, 2, a)
    };
    Vk = function(a, b, c) {
        return dj(c, function() {
            return new Uk(a, b, c)
        })
    };
    Xk = function(a, b, c, d) {
        for (var e = _.w(_.t(Object, "entries").call(Object, Wk)), f = e.next(); !f.done; f = e.next()) {
            var g = _.w(f.value);
            f = g.next().value;
            g = g.next().value;
            b & f && M(a, g(c, d))
        }
    };
    $k = function(a) {
        return a ? _.B(Yk) ? 604800 : _.A(Zk) || 3600 : -1
    };
    gl = function(a, b, c) {
        c = void 0 === c ? null : c;
        b = $k(void 0 === b ? !1 : b);
        if (!(0 < b) || c && ce(c)) {
            var d = 0;
            try {
                d |= a != a.top ? 512 : 0, d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
            } catch (g) {
                d |= 32
            }
            c = c ? de(c) : null;
            var e = 0;
            try {
                e |= al(a, 2500);
                if (_.B(bl)) {
                    var f = _.cl(a).clientHeight;
                    e |= f ? 320 > f ? 2097152 : 0 : 1073741824
                }
                e |= dl(a);
                0 < b && !_.el(_.fl(c, b)) && (e |= 134217728)
            } catch (g) {
                e |= 32
            }
            a = d | e
        } else a = 4194304;
        return a
    };
    jl = function(a, b, c, d, e, f) {
        d = hl(d);
        if (5 !== d) return !1;
        var g = gl(e, "22639388115" !== $f(c.getAdUnitPath()), f);
        _.B(Yk) && (g &= -134217729);
        g && (mi("gpt_int_ns", function(h) {
            I(h, "nsr", g);
            si(h, a)
        }, _.A(il)), Xk(b, g, d, c.getAdUnitPath()));
        return !!g
    };
    kl = function(a) {
        switch (a) {
            case 4:
                return 11;
            case 2:
                return 2;
            case 3:
                return 1;
            case 5:
                return 8;
            default:
                return null
        }
    };
    sl = function(a) {
        a = kl(a);
        if (!a) return null;
        var b = 0;
        if (11 !== a) {
            b |= _.q != _.q.top ? 512 : 0;
            var c = _.ll(_.q);
            c = 26 !== a && 27 !== a && 40 !== a && 10 !== a && c.adCount ? 1 == a || 2 == a ? !(!c.adCount[1] && !c.adCount[2]) : (c = c.adCount[a]) ? 1 <= c : !1 : !1;
            c && (b |= 64);
            if (b) return b
        }
        if (2 === a || 1 === a) {
            var d = {
                la: _.q,
                Jd: ml
            };
            0 === (0, _.nl)() && (d.Jd = 3E3, d.Kd = 650);
            c = 0;
            try {
                var e = d.la;
                c |= e != e.top ? 512 : 0;
                var f = d.la;
                var g = Math.min(f.screen.width || 0, f.screen.height || 0);
                c |= g ? 320 > g ? 8192 : 0 : 2048;
                var h = d.la,
                    k;
                if (k = h.navigator) {
                    var l = h.navigator.userAgent;
                    k = /Android 2/.test(l) || /iPhone OS [34]_/.test(l) || /Windows Phone (?:OS )?[67]/.test(l) || /MSIE.*Windows NT/.test(l) || /Windows NT.*Trident/.test(l)
                }
                c |= k ? 1048576 : 0;
                c = d.Kd ? c | (d.la.innerHeight >= d.Kd ? 0 : 1024) : c | (_.ol(d.la) ? 0 : 8);
                c |= al(d.la, d.Jd);
                c |= dl(d.la)
            } catch (m) {
                c |= 32
            }
            switch (d.Ig) {
                case 2:
                    e = d.la;
                    g = d.Ga;
                    g = void 0 === g ? null : g;
                    f = pl(e.innerWidth, 3, 0, Math.min(Math.round(e.innerWidth / 320 * 50), ql) + 15, 3);
                    null != Sf(e, f, void 0 === g ? null : g) && (c |= 16777216);
                    break;
                case 1:
                    e = d.la, g = d.Ga, g = void 0 === g ? null : g, f = e.innerWidth, h = e.innerHeight, k = Math.min(Math.round(e.innerWidth / 320 * 50), ql) + 15, l = pl(f, 3, h - k, h, 3), 25 < k && l.push({
                        x: f - 25,
                        y: h - 25
                    }), null != Sf(e, l, void 0 === g ? null : g) && (c |= 16777216)
            }
            if (e = d.Jg) e = d.la, d = d.Ga, d = void 0 === d ? null : d, d = void 0 === d ? null : d, g = e.innerWidth, f = e.innerHeight, h = _.A(rl), g = pl(g, 10, f - h, f, 10), e = null != Sf(e, g, d);
            e && (c |= 16777216);
            b |= c
        } else 8 === a ? b |= gl(_.q) : 11 !== a && (b |= 32);
        b || (c = _.ll(_.q), c.adCount = c.adCount || {}, c.adCount[a] = c.adCount[a] + 1 || 1);
        return b
    };
    ul = function(a) {
        var b = new RegExp("(^|,|/)" + a + "($|,|/)");
        return [].concat(_.xd(_.E(tl).Z)).some(function(c) {
            return b.test($f(c.getAdUnitPath()))
        })
    };
    wl = function() {
        var a, b, c;
        return "pagead2.googlesyndication.com" === (null != (c = vl.exec(null != (b = null == (a = _.cg(172)) ? void 0 : a.src) ? b : "")) ? c : [])[1]
    };
    xl = function(a) {
        return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
    };
    yl = function(a, b) {
        var c = b.m;
        return a.map(function(d) {
            return _.t(c, "find").call(c, function(e) {
                return e.j === d
            })
        }).filter(Gd())
    };
    Bl = function(a, b, c, d, e) {
        var f = zl(a, b, d, e, void 0, !0),
            g = f.slotId;
        f = f.Ia;
        if (!g || !f) return M(b, ij("PubAdsService.definePassback", [d, e])), null;
        v(f, 17, !0);
        c.slotAdded(g, f);
        return {
            Pd: Oj(a, b, new Al(a, g, c)),
            Ia: f
        }
    };
    Dl = function(a, b, c) {
        return dj(c, function() {
            return new Cl(a, b, c)
        })
    };
    la = function(a, b) {
        a: {
            b = b[0];a = a[0];
            for (var c = ja, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                var f = c(b[e], a[e]);
                if (0 != f) {
                    b = f;
                    break a
                }
            }
            b = ja(b.length, a.length)
        }
        return b
    };
    El = function(a, b) {
        return null == a ? void 0 : a.replace(/\$\{AUCTION_PRICE\}/g, String(b))
    };
    Fl = function(a, b) {
        var c, d;
        return null != (d = null != (c = null == b ? void 0 : b.get(a)) ? c : null == b ? void 0 : b.get(Fh(a))) ? d : 0
    };
    Jl = function(a, b, c, d, e) {
        if (null != c && c.size) {
            var f, g;
            e = null != (g = null != (f = null == e ? void 0 : e.adUnits) ? f : null == b ? void 0 : b.adUnits) ? g : [];
            b = {};
            f = _.w(e);
            for (g = f.next(); !g.done; b = {
                    Pb: b.Pb
                }, g = f.next()) {
                e = g.value;
                g = e.code;
                var h = e.bids;
                e = void 0;
                if (g && null != (e = h) && e.length && (g = Fl(g, c), b.Pb = g / 1E6, !(0 >= g))) {
                    var k = void 0;
                    e = {};
                    h = _.w(null != (k = h) ? k : []);
                    for (k = h.next(); !k.done; e = {
                            Pa: e.Pa,
                            Bc: e.Bc
                        }, k = h.next()) {
                        k = k.value;
                        e.Bc = "function" === typeof k.getFloor ? k.getFloor : void 0;
                        e.Pa = Gl(Hl(new Il, 4), g);
                        k.getFloor = function(m, n) {
                            return function(p) {
                                4 === Wd(m.Pa, 1, 0) && Hl(m.Pa, 1);
                                var r = {
                                        currency: "USD",
                                        floor: n.Pb
                                    },
                                    z, C = null == (z = m.Bc) ? void 0 : z.apply(a, [p]);
                                return null != C && C.floor ? (null == C ? 0 : C.currency) && "USD" !== C.currency ? (1 === Wd(m.Pa, 1, 0) && (p = Gl(Hl(m.Pa, 6), 1E6 * C.floor), v(p, 3, C.currency)), C) : (C.floor || 0) > n.Pb ? (1 === Wd(m.Pa, 1, 0) && Gl(Hl(m.Pa, 5), 1E6 * C.floor), C) : r : r
                            }
                        }(e, b);
                        var l = void 0;
                        null == (l = d) || l.set(k.getFloor, e.Pa)
                    }
                }
            }
        }
    };
    Rl = function(a, b, c, d, e, f) {
        d = void 0 === d ? [] : d;
        var g, h, k = null == (g = f.getBidResponsesForAdUnitCode) ? void 0 : null == (h = g.call(f, b.getDomId())) ? void 0 : h.bids,
            l;
        if (null == (l = k) || !l.length) {
            var m;
            k = (null == (m = (0, f.getBidResponsesForAdUnitCode)(b.getAdUnitPath())) ? void 0 : m.bids) || []
        }
        b = k.filter(function(n) {
            return n.auctionId !== c && d.some(function(p) {
                return (y = gc(p, 2), _.t(y, "includes")).call(y, n.adId)
            })
        });
        b = _.w(b);
        for (f = b.next(); !f.done; f = b.next()) f = f.value, g = Kl(f, e, d), g = Ll(a, Ml(v(Nl(Ol(new Pl, f.bidder), 1), 6, !0), g)), "number" === typeof f.timeToRespond && Ql(g, f.timeToRespond)
    };
    Sl = function(a, b, c) {
        Gk(a, 3) || (c === b.getAdUnitPath() ? v(a, 3, 1) : c === b.getDomId() && v(a, 3, 2))
    };
    Ul = function(a, b, c, d, e, f) {
        (e = null == e ? void 0 : e.get(null != f ? f : function() {
            return null
        })) && 1 !== Wd(e, 1, 0) && Kc(b, 5, e);
        Dh(a, 5) || (e ? 1 === Wd(e, 1, 0) ? Tl(a, e) : Tl(a, Gl(Hl(new Il, 1), Fl(c, d))) : Tl(a, Hl(new Il, Fl(c, d) ? 2 : 3)))
    };
    Kl = function(a, b, c) {
        c = void 0 === c ? [] : c;
        var d = new Vl;
        if ("number" === typeof a.cpm && (v(d, 2, Math.round(1E6 * a.cpm)), !a.originalCurrency || a.originalCurrency === a.currency)) {
            var e = Math.round(1E6 * Number(a.originalCpm));
            isNaN(e) || e === Wd(d, 2, 0) || v(d, 8, e)
        }
        "string" === typeof a.currency && v(d, 3, a.currency);
        "string" === typeof a.dealId && (e = Wl(new Xl, a.dealId), Kc(d, 6, e));
        if (a.adserverTargeting && "object" === typeof a.adserverTargeting) {
            c = _.t(Object, "fromEntries").call(Object, c.map(function(p) {
                return [Fj(p), gc(p, 2)]
            }));
            e = _.w(["", "_" + a.bidder]);
            for (var f = e.next(); !f.done; f = e.next())
                if (f = f.value, _.B(Yl)) {
                    var g = [],
                        h = !1,
                        k = _.t(Object, "keys").call(Object, a.adserverTargeting);
                    k = _.w(k);
                    for (var l = k.next(); !l.done; l = k.next()) {
                        l = ("" + l.value + f).slice(0, 20);
                        var m = void 0,
                            n = null == (m = c[l]) ? void 0 : m[0];
                        void 0 !== n && (g.push(l), h || (h = n === a.adId))
                    }
                    h && Zl(d, gc(d, 4).concat(g))
                } else {
                    g = [];
                    h = _.w(_.t(Object, "entries").call(Object, a.adserverTargeting));
                    for (k = h.next(); !k.done; k = h.next())
                        if (k = _.w(k.value), l = k.next().value, k = k.next().value, l = (l + f).slice(0, 20), m = void 0, null != (m = c[l]) && m.length)
                            if (c[l][0] === String(k)) g.push(l);
                            else {
                                g = [];
                                break
                            }
                    Zl(d, gc(d, 4).concat(g))
                }
        }
        switch (a.mediaType || "banner") {
            case "banner":
                v(d, 5, 1);
                break;
            case "native":
                v(d, 5, 2);
                break;
            case "video":
                v(d, 5, 3)
        }
        c = "number" === typeof a.height ? a.height : void 0;
        e = "number" === typeof a.height ? a.width : void 0;
        void 0 !== c && void 0 !== e && $l(d, am(bm(e), c));
        "string" === typeof a.adId && (v(d, 1, a.adId), b.set(a.adId, {
            height: c,
            width: e,
            adUrl: "string" === typeof a.adUrl ? a.adUrl : void 0,
            ie: "string" === typeof a.ad ? a.ad : void 0,
            format: Wd(d, 5, 0),
            cpm: Gk(d, 2) ? Wd(d, 2, 0) : void 0
        }));
        return d
    };
    cm = function(a, b) {
        var c = new u.Map,
            d = function(n) {
                var p = c.get(n);
                p || (p = {}, c.set(n, p));
                return p
            },
            e = [];
        a = _.w(a);
        for (var f = a.next(); !f.done; f = a.next()) {
            f = f.value;
            var g = f.args,
                h = f.eventType;
            f = f.elapsedTime;
            var k = g,
                l = k.auctionId,
                m = k.bidId;
            k = k.bids;
            "bidTimeout" === h && e.push.apply(e, _.xd(g));
            if (l === b) switch (h) {
                case "bidRequested":
                    if (!Array.isArray(k)) continue;
                    g = _.w(k);
                    for (h = g.next(); !h.done; h = g.next())
                        if (h = h.value.bidId) d(h).requestTime = f;
                    break;
                case "noBid":
                    m && (d(m).kf = f)
            }
        }
        d = new u.Map;
        a = _.w(_.t(c, "entries").call(c));
        for (f = a.next(); !f.done; f = a.next()) g = _.w(f.value), f = g.next().value, h = g.next().value, g = h.requestTime, h = h.kf, g && h && d.set(f, {
            latency: h - g,
            Hd: !1
        });
        e = _.w(e);
        for (a = e.next(); !a.done; a = e.next())
            if (f = a.value, a = f.bidId, f = f.auctionId, a && f === b && (a = d.get(a))) a.Hd = !0;
        return d
    };
    dm = function(a, b) {
        var c = a.que,
            d = function() {
                var e;
                null == a || null == (e = a.requestBids) || e.before.call(b, function(f, g) {
                    return dg().pbjs_hooks.push({
                        context: b,
                        nextFunction: f,
                        requestBidsConfig: g
                    })
                }, 0)
            };
        (null == c ? 0 : c.hasOwnProperty("push")) ? null == c || c.push(d): null == c || c.unshift(d)
    };
    fm = function(a, b) {
        return dj(b, function() {
            return new em(a, b)
        })
    };
    gm = function(a, b) {
        for (var c = new ni, d = 0; d < a.length; d++) c.set(a.length - d - 1, b(a[d]));
        return pi(c)
    };
    hm = function(a, b, c) {
        var d = void 0 === c.Ab ? "" : c.Ab;
        c = void 0 === c.ka ? "," : c.ka;
        var e = !1;
        a = a.map(function(f) {
            f = b(f);
            e || (e = !!f);
            return String(f || d)
        });
        return e ? a.join(c) : null
    };
    jm = function(a) {
        var b = a.ga,
            c = b.Z,
            d = b.N.P;
        a = a.ha;
        var e = a.X,
            f = a.F;
        var g = void 0 === g ? function(h, k) {
            return de(h, k)
        } : g;
        a = c.map(function(h) {
            return d[h.getDomId()]
        });
        return new u.Map([
            ["ists", {
                value: gm(a, function(h) {
                    return 0 !== hl(h)
                }) || null
            }],
            ["fas", {
                value: hm(a, function(h) {
                    return kl(hl(h))
                }, {
                    Ab: 0
                })
            }],
            ["itsi", {
                value: _.B(Yk) && c.some(function(h) {
                    var k;
                    return 5 === (null == (k = d[h.getDomId()]) ? void 0 : hl(k))
                }) ? function() {
                    var h = g(e, f);
                    if (!h) return 1;
                    var k;
                    h = Math.max.apply(Math, _.xd(null != (k = _.fl(h, $k(!0))) ? k : []));
                    return isFinite(h) ? Math.floor(Math.max((Date.now() - h) / 6E4, 1)) : null
                }() : null
            }],
            ["fsapi", {
                value: _.B(_.im)
            }]
        ])
    };
    km = function(a) {
        a = a.ga;
        var b = a.N.P;
        a = a.Z.map(function(c) {
            return b[c.getDomId()]
        });
        return new u.Map([
            ["rbvs", {
                value: gm(a, function(c) {
                    return 4 === hl(c)
                }) || null
            }]
        ])
    };
    mm = function(a) {
        var b = a.ha.J;
        return new u.Map([
            ["ucis", {
                value: a.ga.Z.map(function(c) {
                    c = b.j.get(c);
                    null != c.Kb || (c.Kb = window === window.top ? (++b.o).toString(36) : lm());
                    return c.Kb
                }),
                options: {
                    ka: "|"
                }
            }],
            ["oid", {
                value: 2
            }]
        ])
    };
    om = function(a) {
        a = a.ga;
        var b = a.Z,
            c = a.N,
            d = c.P;
        a = new u.Map;
        var e = new u.Map;
        c = _.w(c.V.qa());
        for (var f = c.next(); !f.done; f = c.next()) {
            var g = f.value;
            e.set(Fj(g), [gc(g, 2)[0]])
        }
        for (c = 0; c < b.length; c++)
            if (g = d[b[c].getDomId()])
                for (g = _.w(g.qa()), f = g.next(); !f.done; f = g.next()) {
                    var h = f.value;
                    f = Fj(h);
                    var k = e.get(f) || [];
                    h = gc(h, 2)[0];
                    1 === b.length ? k[0] = h : h !== k[0] && (k[c + 1] = h);
                    e.set(f, k)
                }
        b = [];
        d = _.w(_.t(e, "keys").call(e));
        for (c = d.next(); !c.done; c = d.next()) g = c.value, c = nm()[g], g = e.get(g), c && g && (1 < g.length ? (g = g.map(function(l) {
            return encodeURIComponent(l || "")
        }).join(), b.push(c + "," + g)) : 1 === g.length && "url" !== c && a.set(c, {
            value: g[0]
        }));
        b.length && a.set("sps", {
            value: b.join("|")
        });
        return a
    };
    pm = function(a, b, c, d) {
        var e = _.Ld("DIV");
        e.id = b;
        e.name = b;
        b = e.style;
        b.border = "0pt none";
        c && (b.margin = "auto", b.textAlign = "center");
        d && (c = Array.isArray(d), b.width = c ? d[0] + "px" : "100%", b.height = c ? d[1] + "px" : "0%");
        a.appendChild(e);
        return e
    };
    qm = function(a) {
        return "sticky" === (null == a ? void 0 : a.position) || "fixed" === (null == a ? void 0 : a.position)
    };
    sm = function(a, b, c, d) {
        try {
            var e;
            if (!(e = !b)) {
                var f;
                if (!(f = !rm(b, c, d))) {
                    a: {
                        do {
                            var g = Yh(b, c);
                            if (g && "fixed" == g.position) {
                                var h = !1;
                                break a
                            }
                        } while (b = b.parentElement);h = !0
                    }
                    f = !h
                }
                e = f
            }
            e && (a.height = -1)
        } catch (k) {
            a.width = -1, a.height = -1
        }
    };
    vm = function(a) {
        return new u.Map([
            ["cbidsp", {
                value: hm(null != a ? a : [], function(b) {
                    return Rb(tm(b, um), 3)
                }, {
                    ka: "~"
                })
            }]
        ])
    };
    Bm = function(a, b, c) {
        return new u.Map([
            ["eid", {
                value: a
            }],
            ["debug_experiment_id", {
                value: wm().split(",")
            }],
            ["expflags", {
                value: _.cg(253) ? sk(xm) || null : null
            }],
            ["pied", {
                value: _.B(ym) ? hm(b, function(d) {
                    var e;
                    return (d = null == (e = c[d.getDomId()]) ? void 0 : vc(e, zm, 25)) ? Rb(tm(d, Am), 3) : ""
                }, {
                    ka: "~"
                }) : null
            }]
        ])
    };
    Cm = function(a, b) {
        return _.B(ym) ? new u.Map([
            ["pied", {
                value: hm(a, function(c) {
                    var d;
                    return (c = null == (d = b[c.getDomId()]) ? void 0 : vc(d, zm, 25)) ? Rb(tm(c, Am), 3) : ""
                }, {
                    ka: "~"
                })
            }]
        ]) : new u.Map
    };
    Fm = function(a, b, c) {
        var d = null;
        try {
            var e = Dm(b.top.document, b.top).y;
            d = a.map(function(f) {
                var g = c.V,
                    h = c.P[f.getDomId()],
                    k;
                f = null == (k = bi(f, h, b.document, Ih(g, h))) ? void 0 : k.y;
                k = Bh(!0, b).height;
                return void 0 === f || -12245933 === f || -12245933 === k ? -1 : f < e + k ? 0 : ++Em
            })
        } catch (f) {}
        return d
    };
    Hm = function(a, b) {
        var c = b.P;
        return hm(a, function(d) {
            return Gm(c[d.getDomId()]).join("&")
        }, {
            ka: "|"
        })
    };
    Gm = function(a) {
        a = Im(a);
        var b = [];
        _.Bk(a, function(c, d) {
            c.length && (c = c.map(encodeURIComponent), d = encodeURIComponent(d), b.push(d + "=" + c.join()))
        });
        return b
    };
    Im = function(a) {
        for (var b = {}, c = _.w(Ej(a)), d = c.next(); !d.done; d = c.next()) d = d.value, b[Fj(d)] = gc(d, 2);
        a = gc(a, 8);
        a.length && (null != b.excl_cat || (b.excl_cat = a));
        return b
    };
    Jm = function(a) {
        var b = !1,
            c = tc(a, Ij, 2).map(function(d) {
                var e = Fj(d);
                b = "excl_cat" === e;
                d = gc(d, 2);
                return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
            });
        a = gc(a, 3);
        !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
        return c
    };
    Km = function(a) {
        var b;
        return (null == (b = _.t(a, "find").call(a, function(c) {
            return "page_url" === Fj(c)
        })) ? void 0 : gc(b, 2)[0]) || null
    };
    Lm = function(a) {
        var b = a.indexOf("google_preview=", a.lastIndexOf("?")),
            c = a.indexOf("&", b); - 1 === c && (c = a.length - 1, --b);
        return a.substring(0, b) + a.substring(c + 1, a.length)
    };
    Mm = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        hd(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    Nm = function(a, b) {
        var c = b.P;
        return !!Km(b.V.qa()) || a.some(function(d) {
            return null !== Km(c[d.getDomId()].qa())
        })
    };
    Tm = function(a) {
        var b = a.ha,
            c = b.J;
        b = b.F;
        a = a.ga;
        var d = a.Z,
            e = a.Qc;
        return new u.Map([
            ["ris", {
                value: Om(d, function(f) {
                    var g, h;
                    return null != (h = null == (g = c.j.get(f)) ? void 0 : g.Rc) ? h : 0
                }, b)
            }],
            ["rcs", {
                value: hm(d, function(f) {
                    if (!e) {
                        var g = void 0 === g ? _.q : g;
                        var h = c.j.get(f);
                        h && (_.B(Pm) || (h.Rc = _.Qm(g) || 0), h.Vd++)
                    }
                    return Rm(c, f)
                }, {
                    Ab: 0
                })
            }],
            ["tfr", {
                value: _.B(Sm) ? Om(d, function(f) {
                    var g, h;
                    return null != (h = null == (g = c.j.get(f)) ? void 0 : g.zd) ? h : null
                }, b) : null
            }]
        ])
    };
    Om = function(a, b, c) {
        return hm(a, function(d) {
            d = b(d);
            var e = _.Qm(c);
            return d && e ? Math.round(Math.min((e - d) / 1E3, 1800)) : null
        }, {
            ka: "~"
        })
    };
    Wm = function(a) {
        var b = a.ga,
            c = b.Z;
        b = b.N;
        var d = b.V,
            e = b.P;
        return new u.Map([
            ["sfv", {
                value: Um(a.ha.F) ? Vm ? Vm : Vm = uk() : null
            }],
            ["fsfs", {
                value: hm(c, function(f) {
                    f = e[f.getDomId()];
                    var g;
                    return Number(null != (g = null == f ? void 0 : H(f, 12)) ? g : H(d, 13))
                }, {
                    Ab: 0
                })
            }],
            ["fsbs", {
                value: hm(c, function(f) {
                    f = e[f.getDomId()].Da();
                    var g = d.Da(),
                        h;
                    return (null != (h = null == f ? void 0 : H(f, 3)) ? h : null == g ? 0 : H(g, 3)) ? 1 : 0
                }, {
                    Ab: 0
                })
            }]
        ])
    };
    an = function(a) {
        var b = a.ga,
            c = b.N,
            d = b.Z,
            e = b.Qc;
        b = a.ha;
        var f = b.F;
        a = b.J;
        b = b.Aa;
        var g = d.map(function(l) {
                return c.P[l.getDomId()]
            }),
            h = [],
            k = d.map(function(l) {
                return l.getAdUnitPath().replace(/,/g, ":").split("/").map(function(m) {
                    if (!m) return "";
                    var n = _.t(h, "findIndex").call(h, function(p) {
                        return p === m
                    });
                    return 0 <= n ? n : h.push(m) - 1
                }).join("/")
            });
        return new u.Map([
            ["iu_parts", {
                value: h
            }],
            ["enc_prev_ius", {
                value: k
            }],
            ["prev_iu_szs", {
                value: g.map(function(l) {
                    return Eh(l)
                })
            }],
            ["fluid", {
                value: function() {
                    var l = !1,
                        m = g.map(function(n) {
                            n = (y = Ch(n), _.t(y, "includes")).call(y, "fluid");
                            l || (l = n);
                            return n ? "height" : "0"
                        });
                    return l ? m : null
                }()
            }],
            ["ifi", {
                value: function() {
                    var l = ti(f);
                    if (!e) {
                        l += 1;
                        var m = f,
                            n = d.length;
                        n = void 0 === n ? 1 : n;
                        m = Xm(Ym(m)) || m;
                        m.google_unique_id = (m.google_unique_id || 0) + n
                    }
                    return l
                }()
            }],
            ["adks", {
                value: Zm(d, a, b, c)
            }],
            ["didk", {
                value: _.B($m) ? hm(d, function(l) {
                    return Fh(l.getDomId())
                }, {
                    ka: "~"
                }) : null
            }]
        ])
    };
    Zm = function(a, b, c, d) {
        return a.map(function(e) {
            if (c) {
                var f = d.P[e.getDomId()];
                f = Gh(f);
                if (e = b.j.get(e)) e.nb = f;
                return f
            }
            f = d.V;
            var g = d.P[e.getDomId()],
                h;
            if (!(h = bn(b, e))) {
                f = Gh(g, H(f, 6) || H(g, 17) ? null : Wh(e));
                if (e = b.j.get(e)) e.nb = f;
                h = f
            }
            return h
        }).join()
    };
    dn = function() {
        var a = void 0 === a ? window : a;
        cn = _.me(a)
    };
    jn = function(a) {
        var b = a.ga,
            c = b.N.P,
            d = a.ha.F;
        a = b.Z.map(function(e) {
            return c[e.getDomId()]
        });
        b = a.some(function(e) {
            return Dh(e, 16)
        });
        return new u.Map([
            ["rtgs", {
                value: b ? a.map(function(e) {
                    return Dh(e, 16) ? Ch(e).length ? "1" : "2" : "0"
                }) : null,
                options: {
                    ka: "!"
                }
            }],
            ["max_w", {
                value: b ? a.map(function(e) {
                    return en(vc(e, Qk, 16), d)
                }) : null,
                options: {
                    ka: "!"
                }
            }],
            ["max_h", {
                value: b ? a.map(function(e) {
                    return fn(vc(e, Qk, 16), d)
                }) : null,
                options: {
                    ka: "!"
                }
            }],
            ["min_w", {
                value: b ? a.map(function(e) {
                    return gn(vc(e, Qk, 16))
                }) : null,
                options: {
                    ka: "!"
                }
            }],
            ["min_h", {
                value: b ? a.map(function(e) {
                    return hn(vc(e, Qk, 16))
                }) : null,
                options: {
                    ka: "!"
                }
            }]
        ])
    };
    en = function(a, b) {
        return a && (a = vc(a, vh, 1)) ? a.getWidth() || b.innerWidth : 0
    };
    fn = function(a, b) {
        return a && (a = vc(a, vh, 1)) ? a.getHeight() || b.innerHeight : 0
    };
    gn = function(a) {
        return a && (a = vc(a, vh, 2)) ? a.getWidth() || 0 : 0
    };
    hn = function(a) {
        return a && (a = vc(a, vh, 2)) ? a.getHeight() || 0 : 0
    };
    kn = function(a, b) {
        var c;
        return !(null != (c = H(a, 11)) ? !c : !H(b, 10))
    };
    ln = function(a, b, c, d) {
        if (a = Wh(a, b)) {
            var e;
            if (c = null != (e = H(c, 24)) ? e : H(d, 30)) c = a.getBoundingClientRect(), d = c.top, e = c.bottom, 0 === c.height ? c = !1 : (c = _.q.innerHeight, c = 0 < e && e < c || 0 < d && d < c);
            c || (a.style.display = "none")
        }
    };
    Ln = function(a, b, c, d, e, f, g, h, k) {
        if (a.rf) {
            var l = mn(nn(new on, pn(qn(new rn, b), c)), pn(qn(new rn, b), c));
            d = sn(new tn, un(vn(wn(xn(yn(new zn, f), g), Math.round(g / e * 100)), h), Math.round(h / (e * d) * 100)));
            b = An(new Bn, un(vn(wn(xn(yn(new zn, f), g), Math.round(g / e * 100)), h), Math.round(h / (c * b) * 100)));
            k = Cn(Dn(new En, [].concat(_.xd(_.t(hh, "keys").call(hh))).map(function(m) {
                return Number(m)
            })), k);
            l = v(Fn(Gn(Hn(In(Jn(Kn(l), d), b)), k), a.je), 5, document.URL);
            Ad(a.bb, l)
        }
    };
    Wn = function(a, b, c, d, e, f, g) {
        var h = new Be,
            k = new Mn(a, c);
        D(h, k);
        _.B(Nn);
        _.B(Nn) || (g = new On(d), _.Pn(h, g), e = new Qn(a, g, e), D(h, e), f = e.Sa, e = new Rn(a, g, e.Sa), D(h, e), g = e.l);
        f = new Sn(a, d, f);
        D(h, f);
        f = new Tn(a, b, d, g, k.Xa);
        D(h, f);
        b = new Un(a, b, d, c, g, k.Xa);
        D(h, b);
        a = new Vn(a, k.Xa, b.l, f.l);
        D(h, a);
        Qe(h);
        return {
            Xa: a.A,
            za: h
        }
    };
    Xn = function(a, b) {
        var c = window,
            d = new Be;
        c = new On(c);
        _.Pn(d, c);
        b = new Qn(a, c, b);
        D(d, b);
        a = new Rn(a, c, b.Sa);
        D(d, a);
        Qe(d);
        return {
            Sa: b.Sa,
            Bd: a.l,
            za: d
        }
    };
    ao = function(a, b, c, d, e) {
        var f = c.getAdUnitPath();
        c = Yn.get(Wd(c, 2, 0));
        if (f && c) {
            var g = b.defineOutOfPageSlot(f, c);
            g && (f = Zn(Qg(), g.getSlotElementId()), Kc(f, 25, d), g.addService(b.pubads()), $n(a, function() {
                b.display(g);
                H(e, 4) && b.pubads().refresh([g])
            }))
        }
    };
    go = function(a) {
        var b, c = null == (b = window.top) ? void 0 : b.location.href;
        if (!c) return !1;
        var d = Fh(c),
            e;
        return null == (e = tc(a, bo, 1)) ? void 0 : e.some(function(f) {
            switch (qc(f, co)) {
                case 1:
                    f = eo(f, fo, 1, co);
                    if (Gk(f, 1) && Gk(f, 2)) {
                        var g = Xd(f, 1);
                        f = 0 >= g || g > c.length ? !1 : Xd(f, 2) === Fh(c.substring(0, g))
                    } else f = !1;
                    return f;
                case 2:
                    return Xd(f, rc(f, co, 2)) === d;
                default:
                    return !1
            }
        })
    };
    ho = function(a) {
        var b;
        return null == (b = gc(a, 2)) ? void 0 : b.some(function(c) {
            switch (c) {
                case 0:
                    return !1;
                case 1:
                    return !0;
                case 2:
                    return 0 === (0, _.nl)();
                case 4:
                    return 2 === (0, _.nl)();
                case 3:
                    return 1 === (0, _.nl)();
                default:
                    return !1
            }
        })
    };
    ko = function(a, b, c, d, e) {
        for (var f = [], g = [], h = _.w(tc(c, io, 3)), k = h.next(); !k.done; k = h.next())
            if (k = k.value, Gk(k, 1) && Gk(k, 2) && Gk(k, 3) && Gk(k, 4)) {
                var l = k.getAdUnitPath(),
                    m = a.querySelector(jo(k, 1));
                if (m && m.parentElement && (l = "gpt_opp_" + l, !a.getElementById(l))) {
                    var n = a.createElement("div");
                    n.id = l;
                    m.insertAdjacentElement("beforebegin", n);
                    if (k = b.defineSlot(k.getAdUnitPath(), [k.getWidth(), k.getHeight()], l)) k.addService(b.pubads()), m = void 0, null != (m = Zn(Qg(), k.getSlotElementId())) && Kc(m, 25, d), g.push(k)
                }
            }
        Gk(c, 1) && f.push(Xd(c, 1));
        0 < g.length && $n(a, function() {
            for (var p = _.w(g), r = p.next(); !r.done; r = p.next()) b.display(r.value);
            H(e, 4) && b.pubads().refresh(g)
        });
        return f
    };
    oo = function(a, b) {
        var c = lo(b),
            d = c.slotId,
            e = c.ve;
        c = c.we;
        if (d) {
            if (c = Qg(), (b = Zn(c, d.getDomId())) && !H(b, 19))
                if (e && c.D.set(d, e), Wh(d) || Hh(hl(b)))
                    for (v(b, 19, !0), a = Sh(c.j, c.m), e = _.w(gc(b, 4)), b = e.next(); !b.done; b = e.next()) b = Eg(b.value), b = cj.get(b), b.B && b.R(a, d);
                else M(a, mo(String(b.getAdUnitPath()), String(b.getDomId())), d)
        } else c ? a.error(no(c)) : a.error(ij("googletag.display", [String(b)]))
    };
    lo = function(a) {
        var b = null,
            c = null,
            d = "";
        b = _.E(tl);
        if ("string" === typeof a) d = a, b = po(b, d);
        else if (_.fa(a) && 1 == a.nodeType) c = a, d = c.id, b = po(b, d);
        else {
            var e;
            b = null != (e = (y = [].concat(_.xd(b.Z)), _.t(y, "find")).call(y, function(f) {
                return f.j === a
            })) ? e : null
        }
        return {
            slotId: b,
            ve: c,
            we: d
        }
    };
    qo = function(a) {
        switch (Number(a)) {
            case 2:
            case 3:
                return "Anchor";
            case 5:
                return "Interstitial";
            default:
                return "Out-of-page creative"
        }
    };
    ro = function(a) {
        return !!$i(Qj, function(b) {
            return b === a
        })
    };
    uo = function(a, b, c, d, e) {
        b = _.E(tl).add(a, b, c, [1, 1], {
            eb: e,
            format: d
        });
        a = b.slotId;
        b = b.Ia;
        if (a && b) {
            if (5 === d && _.B(so)) return null;
            v(b, 15, d);
            _.to(a, function() {
                var f = window,
                    g = kl(d);
                if (null != g) {
                    f = _.ll(f);
                    var h = f.adCount && f.adCount[g];
                    h && (f.adCount[g] = h - 1)
                }
            })
        }
        return null != a ? a : null
    };
    vo = function(a, b, c, d) {
        M(a, Dk("googletag.setConfig.commerce", Ek(b), c, Ek(d)))
    };
    wo = function(a) {
        return "string" === typeof a && 0 < a.length && 5E3 > a.length
    };
    xo = function(a) {
        if (!Array.isArray(a) || 0 === a.length) return !1;
        var b = a.length - 1;
        return a.every(function(c) {
            if ("string" !== typeof c || 0 === c.length) return !1;
            b += c.length;
            return 5E3 < b ? !1 : !0
        })
    };
    zo = function(a) {
        yo = a
    };
    Bo = function() {
        for (var a = _.w(_.t(Array, "from").call(Array, document.getElementsByTagName("script"))), b = a.next(); !b.done; b = a.next()) {
            var c = b = b.value,
                d = b.src;
            d && (Ba(d, "/tag/js/gpt.js") || Ba(d, "/tag/js/gpt_mobile.js")) && !c.googletag_executed && b.textContent && (c.googletag_executed = !0, c = document.createElement("script"), b = new Sa(b.textContent, Ao), Ta(c, b), document.head.appendChild(c), document.head.removeChild(c))
        }
    };
    Co = function(a, b) {
        b = _.w(_.t(Object, "entries").call(Object, b));
        for (var c = b.next(); !c.done; c = b.next()) {
            var d = _.w(c.value);
            c = d.next().value;
            d = d.next().value;
            a.hasOwnProperty(c) || (a[c] = d)
        }
    };
    Fo = function(a, b) {
        var c = [];
        c = _.E(tl);
        c = [].concat(_.xd(c.Z)).slice();
        if (b) {
            if (!Array.isArray(b)) return M(a, ij("googletag.destroySlots", [b])), !1;
            ia(b);
            c = c.filter(function(d) {
                return _.t(b, "includes").call(b, d.j)
            })
        }
        if (!c.length) return !1;
        Do(c);
        Eo(c);
        return !0
    };
    No = function(a, b, c) {
        var d;
        if (ig("google_content_service_disabled", c)) mi("gpt_scdvqp", function(f) {
            si(f, a)
        }, 1);
        else if (!_.B(Go)) {
            var e = _.Ho(function() {
                _.B(Io) || M(b, Jo(), null)
            });
            return G(a, 817, function() {
                _.B(Ko) && b.error(Lo(), null, !0);
                e();
                null != d || (d = new Mo(a, b));
                return nj(a, b, d)
            })
        }
    };
    Sp = function(a, b, c, d, e) {
        var f = dg(),
            g;
        d = No(a, b, d);
        var h = G(a, 74, function(l, m, n) {
                var p = zl(a, b, l, m, n),
                    r = p.slotId;
                r ? l = r.j : (p.Jc || b.error(ij("googletag.defineSlot", [l, m, n])), l = null);
                return l
            }),
            k = {};
        h = (k._loaded_ = !0, k.cmd = [], k._vars_ = f._vars_, k.evalScripts = f.evalScripts, k.display = G(a, 95, function(l) {
            void oo(b, l)
        }), k.defineOutOfPageSlot = G(a, 73, function(l, m) {
            "string" === typeof l && l.length && (null == m || "string" === typeof m || "number" === typeof m && ro(m)) ? l = uo(a, b, l, "number" === typeof m ? m : 1, "string" === typeof m ? m : void 0) : (b.error(ij("googletag.defineOutOfPageSlot", [l, m])), l = null);
            return l ? l.j : null
        }), k.getVersion = G(a, 946, function() {
            return a.ib ? String(a.ib) : a.Fa
        }), k.pubads = G(a, 947, function() {
            return Dl(a, b, c)
        }), k.companionAds = G(a, 816, function() {
            null != g || (g = new Oo(a, b, c));
            return lj(a, b, g)
        }), k.setAdIframeTitle = G(a, 729, zo), k.getEventLog = G(a, 945, function() {
            return new Po(a, b)
        }), k.sizeMapping = G(a, 90, function() {
            return new Qo(a, b)
        }), k.enableServices = G(a, 91, function() {
            for (var l = _.w(Ro), m = l.next(); !m.done; m = l.next()) m = m.value, m.B && b.info(So()), m.enable()
        }), k.destroySlots = G(a, 75, function(l) {
            return Fo(b, l)
        }), k.enums = rk(), k.defineSlot = h, k.defineUnit = h, k.getWindowsThatCanCommunicateWithHostpageLibrary = G(a, 955, function(l) {
            return To(l)
        }), k.disablePublisherConsole = G(a, 93, qj), k.onPubConsoleJsLoad = G(a, 731, rj), k.openConsole = G(a, 732, function(l) {
            sj(a, void 0 === l ? "" : l)
        }), k.apiReady = !0, k);
        _.B(Uo) && (h.setConfig = G(a, 1034, function(l) {
            if (_.fa(l))
                if (l = l.commerce, null === l) Kc(Vo(e, Wo, 33), 1);
                else {
                    if (void 0 !== l) {
                        var m = Vo(e, Wo, 33);
                        if (_.fa(l)) {
                            var n = l.query,
                                p = l.categories,
                                r = l.productIds,
                                z = l.filter,
                                C = cc(Pp(m, Qp, 1));
                            null === n ? mc(C, 1) : wo(n) ? v(C, 1, n) : void 0 !== n && vo(b, l, "query", n);
                            null === p ? v(C, 2, Rp) : xo(p) ? kg(C, 2, p) : void 0 !== p && vo(b, l, "categories", p);
                            null === r ? v(C, 3, Rp) : xo(r) ? kg(C, 3, r) : void 0 !== r && vo(b, l, "productIds", r);
                            null === z ? mc(C, 4) : wo(z) ? v(C, 4, z) : void 0 !== z && vo(b, l, "filter", z);
                            (Gk(C, 1) || gc(C, 2).length) && Kc(m, 1, C)
                        } else M(b, ij("googletag.setConfig.commerce", [l]))
                    }
                }
            else M(b, ij("googletag.setConfig", [l]))
        }));
        d && (h.content = d);
        Co(f, h)
    };
    Tp = function(a) {
        var b = function() {
            return a.Reflect.construct(a.HTMLElement, [], this.constructor)
        };
        b.prototype = a.HTMLElement.prototype;
        b.prototype.constructor = b;
        _.t(Object, "setPrototypeOf").call(Object, b, a.HTMLElement);
        return b
    };
    Vp = function(a, b) {
        var c = _.A(Up);
        Math.random() <= c && be(b, a)
    };
    aq = function(a, b, c) {
        var d = {};
        if (!c) return b.error(Wp("missing data-rendering attribute")), d;
        try {
            var e = Od(Xp, Yp(c))
        } catch (k) {}
        var f;
        (null == (f = e) ? 0 : Dh(f, 1)) ? (b = new Zp, b = oc(b, 4, 1, 0), b = oc(b, 2, 7, 0), a = oc(b, 3, a.ab || a.Fa, ""), b = vc(e, $p, 1), a = Kc(a, 5, b), a = oc(a, 6, !0, !1), d.uf = a) : b.error(Wp("invalid data-rendering attribute"));
        var g;
        d.jf = null == (g = e) ? void 0 : jo(g, 2);
        var h;
        d.Gc = null == (h = e) ? void 0 : jo(h, 3);
        return d
    };
    dq = function(a, b) {
        var c, d, e, f, g, h, k, l, m, n;
        return _.cb(function(p) {
            c = Aj(b, "ai");
            if (!c || 0 === c.length) return p.return(u.Promise.resolve(b));
            d = bq();
            if (null == (e = d) ? 0 : e.gmaSdk) {
                if (f = d.gmaSdk.getClickSignalsWithTimeout ? d.gmaSdk.getClickSignalsWithTimeout(c, 200) : d.gmaSdk.getClickSignals(c)) return p.return(u.Promise.resolve(b.replace("?", "?ms=" + encodeURIComponent(f) + "&")))
            } else if (null == (g = d) ? 0 : null == (h = g.webkit) ? 0 : null == (k = h.messageHandlers) ? 0 : k.getGmaClickSignals) return l = new _.Mf, m = l.resolve, n = l.promise, cq(d.webkit.messageHandlers.getGmaClickSignals, {
                click_string: c
            }, function(r) {
                m(b.replace("?", "?" + r + "&"))
            }, function() {
                m(b)
            }, function(r, z) {
                return _.Vg(a, r, z)
            }), p.return(n);
            return p.return(u.Promise.resolve(b))
        })
    };
    eq = function(a, b, c, d) {
        var e, f, g;
        return _.cb(function(h) {
            e = b.getBoundingClientRect();
            f = {};
            var k = d.replace;
            var l = (f.nx = Math.floor(c.clientX - e.x), f.ny = Math.floor(c.clientY - e.y), f.dim = Math.floor(e.width) + "x" + Math.floor(e.height), f);
            var m = [];
            for (n in l) yk(n, l[n], m);
            l = m.join("&");
            if (l) {
                m = -1;
                0 > m && (m = 0);
                var n = -1;
                if (0 > n || n > m) {
                    n = m;
                    var p = ""
                } else p = "".substring(n + 1, m);
                m = ["".slice(0, n), p, "".slice(m)];
                n = m[1];
                m[1] = l ? n ? n + "&" + l : l : n;
                l = m[0] + (m[1] ? "?" + m[1] : "") + m[2]
            } else l = "";
            g = k.call(d, "?", l + "&");
            return h.return(dq(a, g))
        })
    };
    fq = function(a, b, c) {
        var d, e, f, g, h, k, l, m, n, p;
        return _.cb(function(r) {
            if (null == (d = c) ? 0 : null == (e = d.gmaSdk) ? 0 : e.getViewSignals) {
                if (f = c.gmaSdk.getViewSignals()) return g = b.replace(/^(.*?)(&adurl=)?$/, "$1&ms=" + f + "$2"), r.return(u.Promise.resolve(g))
            } else if (null == (h = c) ? 0 : null == (k = h.webkit) ? 0 : null == (l = k.messageHandlers) ? 0 : l.getGmaViewSignals) return m = new _.Mf, n = m.resolve, p = m.promise, cq(c.webkit.messageHandlers.getGmaViewSignals, {}, function(z) {
                n(b.replace(/^(.*?)(&adurl=)?$/, "$1&" + z + "$2"))
            }, function() {
                n(b)
            }, function(z, C) {
                return _.Vg(a, z, C)
            }), r.return(p);
            return r.return(u.Promise.resolve(b))
        })
    };
    lq = function(a, b) {
        var c = window;
        var d = void 0 === d ? lb : d;
        var e;
        if (c.customElements && null != (e = c.Reflect) && e.construct && !c.customElements.get("google-product-ad")) {
            var f = bq(),
                g;
            null == (g = f ? new gq(function(k, l) {
                return _.Vg(a, k, l)
            }, function() {}) : void 0) || hq(g);
            var h = Tp(c);
            e = function() {
                return h.apply(this, arguments) || this
            };
            _.N(e, h);
            e.prototype.connectedCallback = function() {
                var k = aq(a, b, this.dataset.rendering),
                    l = k.uf,
                    m = k.jf;
                k = k.Gc;
                l && d(iq(window, l));
                m && fq(a, m, f).then(function(n) {
                    return void jq(n)
                });
                k && ("true" === this.getAttribute("data-enable-click") || this.querySelector('[data-enable-click="true"]') ? (this.Gc = k, this.addEventListener("click", this.j)) : M(b, kq(k)))
            };
            e.prototype.j = function(k) {
                var l = k.target instanceof c.HTMLElement ? k.target.closest("[data-enable-click]") : void 0;
                l instanceof c.HTMLElement && "true" === l.getAttribute("data-enable-click") && eq(a, this, k, this.Gc).then(function(m) {
                    return void jq(m)
                })
            };
            c.customElements.define("google-product-ad", e)
        }
    };
    mq = function(a) {
        var b = {};
        a = _.w(a);
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, b[F(c, 1)] = F(c, 2);
        return b
    };
    pq = function(a, b) {
        var c;
        return nq(a, oq, function(d) {
            d = d.detail.data;
            try {
                return c = JSON.parse(d), "rewarded" === c.type && c.message === b
            } catch (e) {
                return !1
            }
        }).then(function() {
            return c
        })
    };
    qq = function(a) {
        .001 > Zd() && be({
            c: "sd",
            s: String(a)
        }, "gpt_whirs")
    };
    vq = function(a, b, c, d) {
        d = d.zf;
        var e = b.kind;
        switch (e) {
            case 0:
                return new(d ? rq : sq)(a, b, c);
            case 1:
                return new tq(a, b, c);
            case 2:
                return new uq(a, b, c);
            default:
                Qa(e)
        }
    };
    wq = function(a) {
        if (!id(a)) return -1;
        a = a.pageYOffset;
        return 0 > a ? -1 : a
    };
    yq = function(a) {
        var b = {
            threshold: [0, .3, .5, .75, 1]
        };
        return window.IntersectionObserver ? new IntersectionObserver(a, b) : new xq(a, b)
    };
    zq = function(a) {
        return Gk(a, 1) ? Gk(a, 3) && 0 !== (0, _.nl)() ? F(a, 1) * oe(a, 3) : F(a, 1) : null
    };
    Aq = function(a, b) {
        return "undefined" === typeof IntersectionObserver ? new xq(b, {
            rootMargin: a + "%"
        }) : new IntersectionObserver(b, {
            rootMargin: a + "%"
        })
    };
    Gq = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        for (var d = {}, e = _.w(tc(a, Bq, 7)), f = e.next(); !f.done; f = e.next()) f = f.value, d[jo(f, 1)] = JSON.parse(jo(f, 2));
        (e = vc(a, Cq, 6)) && (d["https://googleads.g.doubleclick.net"] = e.toJSON());
        e = {};
        f = _.w(tc(a, Dq, 11));
        for (var g = f.next(); !g.done; g = f.next()) g = g.value, e[jo(g, 1)] = Xd(g, 2);
        if (c) {
            var h;
            c = {
                seller: "https://pubads.g.doubleclick.net",
                decisionLogicUrl: jo(a, 1),
                trustedScoringSignalsUrl: jo(a, 2),
                interestGroupBuyers: gc(a, 3),
                auctionSignals: JSON.parse(jo(a, 4) || "{}"),
                sellerSignals: (null == (h = vc(a, Eq, 5)) ? void 0 : h.toJSON()) || [],
                sellerTimeout: Xd(a, 15) || 50,
                perBuyerSignals: d,
                perBuyerTimeouts: e
            };
            var k, l;
            d = new Fq;
            h = null == (k = vc(a, Eq, 5)) ? void 0 : null == (l = vc(k, Fq, 5)) ? void 0 : Wd(l, 2, "0");
            lc(d);
            null != h && 0 !== +h ? v(d, 2, h) : mc(d, 2);
            k = new Eq;
            k = Kc(k, 5, d);
            return {
                seller: "https://pubads.g.doubleclick.net",
                decisionLogicUrl: jo(a, 1),
                sellerSignals: k.toJSON(),
                sellerTimeout: Xd(a, 15) || 50,
                interestGroupBuyers: [],
                auctionSignals: {},
                perBuyerSignals: {},
                perBuyerTimeouts: {},
                componentAuctions: [c].concat(_.xd(null != b ? b : []))
            }
        }
        var m;
        return {
            seller: "https://pubads.g.doubleclick.net",
            decisionLogicUrl: jo(a, 1),
            trustedScoringSignalsUrl: jo(a, 2),
            interestGroupBuyers: gc(a, 3),
            auctionSignals: JSON.parse(jo(a, 4) || "{}"),
            sellerSignals: (null == (m = vc(a, Eq, 5)) ? void 0 : m.toJSON()) || [],
            sellerTimeout: Xd(a, 15) || 50,
            perBuyerSignals: d,
            perBuyerTimeouts: e,
            componentAuctions: b
        }
    };
    Lq = function(a, b) {
        var c, d, e, f, g, h, k, l;
        return _.cb(function(m) {
            if (1 == m.j) return _.t(a, "startsWith").call(a, "urn:") && Hq.deprecatedURNToURL && Hq.deprecatedReplaceInURN ? db(m, Hq.deprecatedURNToURL(a), 2) : m.return();
            c = m.m;
            d = {};
            e = b.gdprApplies || "";
            (null != (f = c.match(Iq)) ? f : []).forEach(function(n) {
                d[n] = e
            });
            g = b.He || "";
            (null != (h = c.match(Jq)) ? h : []).forEach(function(n) {
                d[n] = g
            });
            k = b.le || "";
            (null != (l = c.match(Kq)) ? l : []).forEach(function(n) {
                d[n] = k
            });
            return db(m, Hq.deprecatedReplaceInURN(a, d), 0)
        })
    };
    Nq = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        var e = "https://googleads.g.doubleclick.net/td/auctionwinner?status=nowinner",
            f = Mq(c, 18),
            g = Mq(c, 7);
        if (g || f) e += "&isContextualWinner=1";
        g && (e += "&hasXfpAds=1");
        f = c.getEscapedQemQueryId();
        g = jo(c, 6);
        f && (e += "&winner_qid=" + encodeURIComponent(f));
        g && (e += "&xfpQid=" + encodeURIComponent(g));
        Mq(c, 4) && (e += "&is_plog=1");
        (f = jo(c, 11)) && (e += "&ecrs=" + f);
        (null == c ? 0 : Mq(c, 21)) || (e += "&turtlexTest=1");
        e += "&applied_timeout_ms=" + b + "&duration_ms=" + Math.round(a);
        d && (e += "skipRender=1");
        jq(e)
    };
    Ar = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        var r = new Be,
            z = Bh(!0, window),
            C = f.V,
            J = f.P[c.getDomId()],
            V = new Oq(a, window);
        D(r, V);
        var P = g.Db,
            L = g.Mb,
            W = g.Fe,
            R = g.xd,
            X = g.me,
            wa = g.Oe,
            ua = g.Af,
            Ma = g.Ge,
            Cb = g.Ce,
            Aa = g.Qb,
            Ua = g.Bf,
            ic = g.Ne,
            Za = g.Ve,
            xb = g.wf,
            Pb = g.Ef,
            Hc = g.Ff,
            fd = g.Ke,
            Ic = g.Cf,
            Fd = g.Wb,
            Jc = g.pa,
            Cg = g.be,
            nb = g.Hf;
        g = g.ef;
        var af = void 0;
        Math.random() < _.A(Pq) && (p = new Qq(a, nb, p.K, ua, R), D(r, p), af = p.A);
        Jc = new Rq(a, e, c, P, L, Jc, nb, af);
        D(r, Jc);
        L = new Sq;
        L.j(l);
        P = new Tq(a, window.top, L);
        D(r, P);
        h = new Uq(a, $f(c.getAdUnitPath()), h, P.A);
        D(r, h);
        nb = new Vq(a, hl(J), z.height, Cb, Jc.Db);
        D(r, nb);
        h = new Wq(a, c, Wh(c, k), c.getDomId(), di(c), k, hl(J), e);
        D(r, h);
        p = new Xq(a, Jc.pa, X, wa, ua);
        D(r, p);
        ua = new Yq(a, C, J, window, X, ua);
        D(r, ua);
        Pb = new Zq(a, vc(C, $q, 5), Pb);
        D(r, Pb);
        Aa = new ar(a, c.getAdUnitPath(), J, z.width, window, Aa, Jc.Mb, nb.A, p.A, h.A);
        D(r, Aa);
        nb = new br(a, Cg, J);
        D(r, nb);
        l = new cr(a, e, l, Cg, nb.A, Aa.pa, Aa.o);
        D(r, l);
        if (d) return r;
        d = new dr(a, c, C, J, hl(J), k, e, h.A, ua.A, Aa.o, W);
        D(r, d);
        nb = new er(a, d.A);
        D(r, nb);
        p = new fr(a, c, z, e, nb.A, Pb.l);
        D(r, p);
        nb = new gr(a, window, h.A);
        D(r, nb);
        Hc = new hr(a, p.A, d.A, Hc, Pb.l);
        D(r, Hc);
        z = new ir(a, k, c, J, z, W, h.A, d.A, Aa.o, Aa.Qb, nb.A, R);
        D(r, z);
        Ua = new jr(a, C, J, l.pa, ua.A, X, Ua);
        D(r, Ua);
        Fd = new kr(a, window, Fd, V.A);
        D(r, Fd);
        b = new lr(a, b, c, f, wa, Ic);
        D(r, b);
        Ic = new mr(a, hl(J), k);
        D(r, Ic);
        Aa = new nr(a, window);
        D(r, Aa);
        n = new or(a, n, hl(J), Cb, Ma);
        D(r, n);
        Za = new pr(a, Za);
        D(r, Za);
        R = new qr(a, c, e, f, m, window, l.pa, ua.A, b.A, Hc.A, h.A, d.A, l.o, R, W, Ua.A, wa, ic, xb, z.A, Fd.A, Ic.A, n.A, Jc.l, Cg, Aa.A);
        D(r, R);
        wa = new rr(a, window, c, R.o, L);
        D(r, wa);
        Cb = new sr(a, e, hl(J), c, window, Cb, R.l, h.A, n.A);
        D(r, Cb);
        f = new tr(a, c, hl(J), f.tb, Ma, R.l, h.A, P.A, n.A);
        D(r, f);
        J = new ur(a, c, hl(J), m, window, R.l, h.A);
        D(r, J);
        k = new vr(a, c, R.l, k, m);
        D(r, k);
        e = new wr(a, bn(e, c), window.top, R.l, V.A);
        D(r, e);
        c = new xr(a, c, W, X, xb, R.l, d.A, R.C);
        D(r, c);
        fd = new yr(a, window, fd, R.l, d.A, h.A);
        D(r, fd);
        D(r, new zr(a, g, dg(), C));
        return r
    };
    Cr = function() {
        if (Ga()) var a = 0 <= Br(Ia(), 11);
        else a = Da(za()), Ha(a), a = Ea() ? (a = a[2]) && a[1] || "" : "", "" === a ? a = NaN : (a = a.split("."), a = 0 === a.length ? NaN : Number(a[0])), a = 65 <= a;
        return a
    };
    Dr = function(a, b) {
        return window.IntersectionObserver ? new IntersectionObserver(a, {
            rootMargin: b
        }) : new xq(a, {
            rootMargin: b
        })
    };
    Er = function(a) {
        function b(f) {
            var g = f;
            return function() {
                var h = ld.apply(0, arguments);
                if (g) {
                    var k = g;
                    g = null;
                    k.apply(null, _.xd(h))
                }
            }
        }
        var c = null,
            d = 0,
            e = 0;
        return function() {
            var f, g, h, k;
            return _.cb(function(l) {
                if (1 == l.j) return d && clearTimeout(d), d = 0, f = new _.Mf, g = b(f.resolve), h = ++e, db(l, 0, 2);
                if (e !== h) return g(!1), l.return(f.promise);
                c ? c(!1) : g(!0);
                k = b(function() {
                    c = null;
                    d = 0;
                    g(!0)
                });
                d = setTimeout(k, 1E3);
                _.to(a, function() {
                    return void g(!1)
                });
                c = g;
                return l.return(f.promise)
            })
        }
    };
    Mr = function() {
        var a = new Fr;
        var b = (new Gr).setCorrelator(je(_.q));
        var c = ke().join();
        b = oc(b, 5, c, "");
        b = oc(b, 2, 1, 0);
        a = Kc(a, 1, b);
        b = new Hr;
        c = _.B(Ir);
        b = oc(b, 7, c, !1);
        c = _.B(Jr);
        b = oc(b, 8, c, !1);
        c = _.B(Kr);
        b = oc(b, 9, c, !1);
        b = oc(b, 10, !0, !1);
        c = _.B(Lr);
        b = oc(b, 13, c, !1);
        b = oc(b, 16, !0, !1);
        a = Kc(a, 2, b);
        window.google_rum_config = a.toJSON()
    };
    Or = function() {
        var a = Nr,
            b = Number(a);
        return 1 > b || Math.floor(b) !== b ? (be({
            v: a
        }, "gpt_inv_ver"), "1") : a
    };
    Tr = function() {
        var a = Pr() || Yd() ? 1 : Zd(),
            b = .001 > a,
            c = .001 > a;
        b ? (_.E(Qr).I = !0, Rr(31067358)) : .002 > a && Rr(31067357);
        Sr(23);
        return {
            Ib: b,
            Xe: 1E3,
            sf: 1E-4 > a,
            We: 1E4,
            Yd: b,
            vd: 1E3,
            rf: c,
            je: 1E3
        }
    };
    Wr = function(a) {
        var b = Or();
        var c = /m\d+/.test("") ? Number("".substring(1)) : void 0;
        var d = je(window),
            e = window.document.URL,
            f = _.A(Ur);
        return _.t(Object, "assign").call(Object, {}, a, {
            Fa: b,
            ab: "",
            ib: c,
            pvsid: d,
            bb: new Vr(f),
            xe: e
        })
    };
    Xr = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    };
    Yr = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };
    Zr = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    };
    $r = Zr(this);
    as = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
    u = {};
    bs = {};
    _.t = function(a, b) {
        var c = bs[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    };
    cs = function(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in u ? f = u : f = $r;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = as && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? Yr(u, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === bs[d] && (a = 1E9 * Math.random() >>> 0, bs[d] = as ? $r.Symbol(d) : "$jscp$" + a + "$" + d), Yr(f, bs[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    };
    cs("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.j = f;
            Yr(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.j
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    }, "es6");
    cs("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, u.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = $r[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && Yr(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ds(Xr(this))
                }
            })
        }
        return a
    }, "es6");
    ds = function(a) {
        a = {
            next: a
        };
        a[_.t(u.Symbol, "iterator")] = function() {
            return this
        };
        return a
    };
    O = function(a) {
        return a.raw = a
    };
    _.w = function(a) {
        var b = "undefined" != typeof u.Symbol && _.t(u.Symbol, "iterator") && a[_.t(u.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: Xr(a)
        }
    };
    es = function(a) {
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        return c
    };
    _.xd = function(a) {
        return a instanceof Array ? a : es(_.w(a))
    };
    fs = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    gs = as && "function" == typeof _.t(Object, "assign") ? _.t(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) fs(d, e) && (a[e] = d[e])
        }
        return a
    };
    cs("Object.assign", function(a) {
        return a || gs
    }, "es6");
    var hs = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        is = function() {
            function a() {
                function c() {}
                new c;
                _.t(u.Reflect, "construct").call(u.Reflect, c, [], function() {});
                return new c instanceof c
            }
            if (as && "undefined" != typeof u.Reflect && _.t(u.Reflect, "construct")) {
                if (a()) return _.t(u.Reflect, "construct");
                var b = _.t(u.Reflect, "construct");
                return function(c, d, e) {
                    c = b(c, d);
                    e && _.t(u.Reflect, "setPrototypeOf").call(u.Reflect, c, e.prototype);
                    return c
                }
            }
            return function(c, d, e) {
                void 0 === e && (e = c);
                e = hs(e.prototype || Object.prototype);
                return Function.prototype.apply.call(c, e, d) || e
            }
        }(),
        js;
    if (as && "function" == typeof _.t(Object, "setPrototypeOf")) js = _.t(Object, "setPrototypeOf");
    else {
        var ks;
        a: {
            var ls = {
                    a: !0
                },
                ms = {};
            try {
                ms.__proto__ = ls;
                ks = ms.a;
                break a
            } catch (a) {}
            ks = !1
        }
        js = ks ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    ns = js;
    _.N = function(a, b) {
        a.prototype = hs(b.prototype);
        a.prototype.constructor = a;
        if (ns) ns(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.ah = b.prototype
    };
    os = function() {
        this.l = !1;
        this.H = null;
        this.m = void 0;
        this.j = 1;
        this.o = this.D = 0;
        this.B = null
    };
    ps = function(a) {
        if (a.l) throw new TypeError("Generator is already running");
        a.l = !0
    };
    os.prototype.I = function(a) {
        this.m = a
    };
    var qs = function(a, b) {
        a.B = {
            yd: b,
            Qe: !0
        };
        a.j = a.D || a.o
    };
    os.prototype.return = function(a) {
        this.B = {
            return: a
        };
        this.j = this.o
    };
    db = function(a, b, c) {
        a.j = c;
        return {
            value: b
        }
    };
    fb = function(a, b) {
        a.j = b;
        a.D = 0
    };
    hb = function(a) {
        a.D = 0;
        var b = a.B.yd;
        a.B = null;
        return b
    };
    rs = function(a) {
        this.j = new os;
        this.m = a
    };
    us = function(a, b) {
        ps(a.j);
        var c = a.j.H;
        if (c) return ss(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.j.return);
        a.j.return(b);
        return ts(a)
    };
    ss = function(a, b, c, d) {
        try {
            var e = b.call(a.j.H, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.j.l = !1, e;
            var f = e.value
        } catch (g) {
            return a.j.H = null, qs(a.j, g), ts(a)
        }
        a.j.H = null;
        d.call(a.j, f);
        return ts(a)
    };
    ts = function(a) {
        for (; a.j.j;) try {
            var b = a.m(a.j);
            if (b) return a.j.l = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.j.m = void 0, qs(a.j, c)
        }
        a.j.l = !1;
        if (a.j.B) {
            b = a.j.B;
            a.j.B = null;
            if (b.Qe) throw b.yd;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    };
    vs = function(a) {
        this.next = function(b) {
            ps(a.j);
            a.j.H ? b = ss(a, a.j.H.next, b, a.j.I) : (a.j.I(b), b = ts(a));
            return b
        };
        this.throw = function(b) {
            ps(a.j);
            a.j.H ? b = ss(a, a.j.H["throw"], b, a.j.I) : (qs(a.j, b), b = ts(a));
            return b
        };
        this.return = function(b) {
            return us(a, b)
        };
        this[_.t(u.Symbol, "iterator")] = function() {
            return this
        }
    };
    ws = function(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new u.Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : u.Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    };
    _.cb = function(a) {
        return ws(new vs(new rs(a)))
    };
    ld = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    };
    cs("Reflect", function(a) {
        return a ? a : {}
    }, "es6");
    cs("Reflect.construct", function() {
        return is
    }, "es6");
    cs("Reflect.setPrototypeOf", function(a) {
        return a ? a : ns ? function(b, c) {
            try {
                return ns(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    }, "es6");
    cs("Promise", function(a) {
        function b() {
            this.j = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.m = function(g) {
            if (null == this.j) {
                this.j = [];
                var h = this;
                this.D(function() {
                    h.B()
                })
            }
            this.j.push(g)
        };
        var d = $r.setTimeout;
        b.prototype.D = function(g) {
            d(g, 0)
        };
        b.prototype.B = function() {
            for (; this.j && this.j.length;) {
                var g = this.j;
                this.j = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.H(l)
                    }
                }
            }
            this.j = null
        };
        b.prototype.H = function(g) {
            this.D(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.m = 0;
            this.D = void 0;
            this.j = [];
            this.I = !1;
            var h = this.H();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.H = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.R),
                reject: g(this.B)
            }
        };
        e.prototype.R = function(g) {
            if (g === this) this.B(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e) this.K(g);
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
                h ? this.ra(g) : this.l(g)
            }
        };
        e.prototype.ra = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.B(k);
                return
            }
            "function" == typeof h ? this.L(h, g) : this.l(g)
        };
        e.prototype.B = function(g) {
            this.o(2, g)
        };
        e.prototype.l = function(g) {
            this.o(1, g)
        };
        e.prototype.o = function(g, h) {
            if (0 != this.m) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.m);
            this.m = g;
            this.D = h;
            2 === this.m && this.G();
            this.M()
        };
        e.prototype.G = function() {
            var g = this;
            d(function() {
                if (g.C()) {
                    var h = $r.console;
                    "undefined" !== typeof h && h.error(g.D)
                }
            }, 1)
        };
        e.prototype.C = function() {
            if (this.I) return !1;
            var g = $r.CustomEvent,
                h = $r.Event,
                k = $r.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = $r.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.D;
            return k(g)
        };
        e.prototype.M = function() {
            if (null != this.j) {
                for (var g = 0; g < this.j.length; ++g) f.m(this.j[g]);
                this.j = null
            }
        };
        var f = new b;
        e.prototype.K = function(g) {
            var h = this.H();
            g.Tb(h.resolve, h.reject)
        };
        e.prototype.L = function(g, h) {
            var k = this.H();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.then = function(g, h) {
            function k(p, r) {
                return "function" == typeof p ? function(z) {
                    try {
                        l(p(z))
                    } catch (C) {
                        m(C)
                    }
                } : r
            }
            var l, m, n = new e(function(p, r) {
                l = p;
                m = r
            });
            this.Tb(k(g, l), k(h, m));
            return n
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.Tb = function(g, h) {
            function k() {
                switch (l.m) {
                    case 1:
                        g(l.D);
                        break;
                    case 2:
                        h(l.D);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.m);
                }
            }
            var l = this;
            null == this.j ? f.m(k) : this.j.push(k);
            this.I = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, k) {
                for (var l = _.w(g), m = l.next(); !m.done; m = l.next()) c(m.value).Tb(h, k)
            })
        };
        e.all = function(g) {
            var h = _.w(g),
                k = h.next();
            return k.done ? c([]) : new e(function(l, m) {
                function n(z) {
                    return function(C) {
                        p[z] = C;
                        r--;
                        0 == r && l(p)
                    }
                }
                var p = [],
                    r = 0;
                do p.push(void 0), r++, c(k.value).Tb(n(p.length - 1), m), k = h.next(); while (!k.done)
            })
        };
        return e
    }, "es6");
    cs("Object.setPrototypeOf", function(a) {
        return a || ns
    }, "es6");
    cs("WeakMap", function(a) {
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
                this.j = (e += Math.random() + 1).toString();
                if (g) {
                    g = _.w(g);
                    for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
                }
            };
        f.prototype.set = function(g, h) {
            if (!c(g)) throw Error("Invalid WeakMap key");
            if (!fs(g, d)) {
                var k = new b;
                Yr(g, d, {
                    value: k
                })
            }
            if (!fs(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.j] = h;
            return this
        };
        f.prototype.get = function(g) {
            return c(g) && fs(g, d) ? g[d][this.j] : void 0
        };
        f.prototype.has = function(g) {
            return c(g) && fs(g, d) && fs(g[d], this.j)
        };
        f.prototype.delete = function(g) {
            return c(g) && fs(g, d) && fs(g[d], this.j) ? delete g[d][this.j] : !1
        };
        return f
    }, "es6");
    cs("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.t(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(_.w([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = _.t(k, "entries").call(k),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (n) {
                    return !1
                }
            }()) return a;
        var b = new u.WeakMap,
            c = function(h) {
                this.m = {};
                this.j = f();
                this.size = 0;
                if (h) {
                    h = _.w(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.m[l.id] = []);
            l.oa ? l.oa.value = k : (l.oa = {
                next: this.j,
                Ta: this.j.Ta,
                head: this.j,
                key: h,
                value: k
            }, l.list.push(l.oa), this.j.Ta.next = l.oa, this.j.Ta = l.oa, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.oa && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.m[h.id], h.oa.Ta.next = h.oa.next, h.oa.next.Ta = h.oa.Ta, h.oa.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.m = {};
            this.j = this.j.Ta = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).oa
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).oa) && h.value
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
            for (var l = _.t(this, "entries").call(this), m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        c.prototype[_.t(u.Symbol, "iterator")] = _.t(c.prototype, "entries");
        var d = function(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var m = h.m[l];
                if (m && fs(h.m, l))
                    for (h = 0; h < m.length; h++) {
                        var n = m[h];
                        if (k !== k && n.key !== n.key || k === n.key) return {
                            id: l,
                            list: m,
                            index: h,
                            oa: n
                        }
                    }
                return {
                    id: l,
                    list: m,
                    index: -1,
                    oa: void 0
                }
            },
            e = function(h, k) {
                var l = h.j;
                return ds(function() {
                    if (l) {
                        for (; l.head != h.j;) l = l.Ta;
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
                return h.Ta = h.next = h.head = h
            },
            g = 0;
        return c
    }, "es6");
    var xs = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    cs("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = xs(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");
    var ys = function(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a)) return {
                i: e,
                de: f
            }
        }
        return {
            i: -1,
            de: void 0
        }
    };
    cs("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            return ys(this, b, c).de
        }
    }, "es6");
    cs("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    }, "es6");
    cs("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return _.t(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    var zs = function(a, b) {
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
        e[_.t(u.Symbol, "iterator")] = function() {
            return e
        };
        return e
    };
    cs("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return zs(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    cs("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return zs(this, function(b) {
                return b
            })
        }
    }, "es6");
    cs("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    cs("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = xs(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    cs("globalThis", function(a) {
        return a || $r
    }, "es_2020");
    cs("Array.prototype.findIndex", function(a) {
        return a ? a : function(b, c) {
            return ys(this, b, c).i
        }
    }, "es6");
    cs("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.t(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(_.w([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = _.t(d, "entries").call(d),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.j = new u.Map;
            if (c) {
                c = _.w(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.j.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.j.set(c, c);
            this.size = this.j.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.j.delete(c);
            this.size = this.j.size;
            return c
        };
        b.prototype.clear = function() {
            this.j.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.j.has(c)
        };
        b.prototype.entries = function() {
            return _.t(this.j, "entries").call(this.j)
        };
        b.prototype.values = function() {
            return _.t(this.j, "values").call(this.j)
        };
        b.prototype.keys = _.t(b.prototype, "values");
        b.prototype[_.t(u.Symbol, "iterator")] = _.t(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.j.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    cs("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) fs(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    cs("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof u.Symbol && _.t(u.Symbol, "iterator") && b[_.t(u.Symbol, "iterator")];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    }, "es6");
    cs("Array.prototype.values", function(a) {
        return a ? a : function() {
            return zs(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    cs("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    cs("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || _.t(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    cs("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== xs(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    cs("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) fs(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    cs("Object.fromEntries", function(a) {
        return a ? a : function(b) {
            var c = {};
            if (!(_.t(u.Symbol, "iterator") in b)) throw new TypeError("" + b + " is not iterable");
            b = b[_.t(u.Symbol, "iterator")].call(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                d = d.value;
                if (Object(d) !== d) throw new TypeError("iterable for fromEntries should yield objects");
                c[d[0]] = d[1]
            }
            return c
        }
    }, "es_2019");
    _.q = this || self;
    As = function(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    };
    na = function(a) {
        var b = As(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.fa = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    ha = function(a) {
        return Object.prototype.hasOwnProperty.call(a, Bs) && a[Bs] || (a[Bs] = ++Cs)
    };
    Bs = "closure_uid_" + (1E9 * Math.random() >>> 0);
    Cs = 0;
    Ds = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    Es = function(a, b, c) {
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
    };
    _.Fs = function(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.Fs = Ds : _.Fs = Es;
        return _.Fs.apply(null, arguments)
    };
    _.Gs = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    vf = function() {
        return Date.now()
    };
    var Hs;
    var gf = function(a, b) {
        this.j = a === Is && b || "";
        this.m = Js
    };
    gf.prototype.La = !0;
    gf.prototype.Ea = function() {
        return this.j
    };
    var hf = function(a) {
            return a instanceof gf && a.constructor === gf && a.m === Js ? a.j : "type_error:Const"
        },
        Js = {},
        Is = {};
    var kb = new gf(Is, "https://tpc.googlesyndication.com/sodar/%{basename}.js");
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var Fc, Ls;
    _.ba = function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };
    _.Ks = function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    _.Jf = function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    };
    Fc = function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };
    Ls = function(a, b) {
        return Array.prototype.reduce.call(a, b, 0)
    };
    _.Xf = function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    };
    var xa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var pf = {
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
    var Ao = {},
        Sa = function(a, b) {
            this.j = b === Ao ? a : "";
            this.La = !0
        };
    Sa.prototype.toString = function() {
        return this.j.toString()
    };
    Sa.prototype.Ea = function() {
        return this.j.toString()
    };
    var kf = function(a, b) {
        this.j = b === Ms ? a : ""
    };
    kf.prototype.toString = function() {
        return this.j + ""
    };
    kf.prototype.La = !0;
    kf.prototype.Ea = function() {
        return this.j.toString()
    };
    var Va = function(a) {
            return a instanceof kf && a.constructor === kf ? a.j : "type_error:TrustedResourceUrl"
        },
        jb = function(a, b) {
            var c = hf(a);
            if (!Ns.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
            a = c.replace(Os, function(d, e) {
                if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
                d = b[e];
                return d instanceof gf ? hf(d) : encodeURIComponent(String(d))
            });
            return md(a)
        },
        Os = /%{(\w+)}/g,
        Ns = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        Ps = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Ms = {},
        md = function(a) {
            return new kf(a, Ms)
        },
        Qs = function(a, b, c) {
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
    var Rs = function(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        },
        Dj = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        Ss = function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        of = function(a) {
            if (!Ts.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Us, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Vs, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ws, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Xs, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ys, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Zs, "&#0;"));
            return a
        },
        Us = /&/g,
        Vs = /</g,
        Ws = />/g,
        Xs = /"/g,
        Ys = /'/g,
        Zs = /\x00/g,
        Ts = /[\x00&<>"']/,
        Ba = function(a, b) {
            return -1 != a.indexOf(b)
        },
        Br = function(a, b) {
            var c = 0;
            a = Ss(String(a)).split(".");
            b = Ss(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = $s(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || $s(0 == f[2].length, 0 == g[2].length) || $s(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        },
        $s = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var Ja = function(a, b) {
            this.j = b === at ? a : ""
        },
        Ka, mf, lf, at;
    Ja.prototype.toString = function() {
        return this.j.toString()
    };
    Ja.prototype.La = !0;
    Ja.prototype.Ea = function() {
        return this.j.toString()
    };
    Ka = function(a) {
        return a instanceof Ja && a.constructor === Ja ? a.j : "type_error:SafeUrl"
    };
    mf = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    lf = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    at = {};
    _.td = function(a) {
        return new Ja(a, at)
    };
    _.nf = _.td("about:invalid#zClosurez");
    var bf = {},
        $e = function(a, b) {
            this.Zc = b === bf ? a : "";
            this.La = !0
        };
    $e.prototype.Ea = function() {
        return this.Zc
    };
    $e.prototype.toString = function() {
        return this.Zc.toString()
    };
    var bt = {},
        ct = function(a, b) {
            this.j = b === bt ? a : "";
            this.La = !0
        };
    ct.prototype.Ea = function() {
        return this.j.toString()
    };
    ct.prototype.toString = function() {
        return this.j.toString()
    };
    var Oa = function(a) {
            return a instanceof ct && a.constructor === ct ? a.j : "type_error:SafeHtml"
        },
        dt = function(a) {
            return a instanceof ct ? a : df( of ("object" == typeof a && a.La ? a.Ea() : String(a)))
        },
        et = function(a) {
            var b = dt(Ze),
                c = [],
                d = function(e) {
                    Array.isArray(e) ? e.forEach(d) : (e = dt(e), c.push(Oa(e).toString()))
                };
            a.forEach(d);
            return df(c.join(Oa(b).toString()))
        },
        qf = function(a) {
            return et(Array.prototype.slice.call(arguments))
        },
        df = function(a) {
            return new ct(a, bt)
        },
        ef = /^[a-zA-Z0-9-]+$/,
        jf = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        ff = {
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
        },
        Ze = new ct(_.q.trustedTypes && _.q.trustedTypes.emptyHTML || "", bt);
    var ft;
    try {
        new URL("s://g"), ft = !0
    } catch (a) {
        ft = !1
    }
    var La = ft;
    var gt = {};
    var ht = {
            gg: 0,
            cg: 1,
            dg: 2,
            0: "HTML_FORMATTED_CONTENT",
            1: "EMBEDDED_INTERNAL_CONTENT",
            2: "EMBEDDED_TRUSTED_EXTERNAL_CONTENT"
        },
        it = function(a, b) {
            b = Error.call(this, a + " cannot be used with intent " + ht[b]);
            this.message = b.message;
            "stack" in b && (this.stack = b.stack);
            this.type = a;
            this.name = "TypeCannotBeUsedWithIntentError"
        };
    _.N(it, Error);
    var jt, kt, Xh, lt;
    jt = function() {
        return !0
    };
    kt = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    };
    Xh = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    _.Ho = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    lt = function(a, b, c) {
        var d = 0,
            e = !1,
            f = [],
            g = function() {
                d = 0;
                e && (e = !1, h())
            },
            h = function() {
                d = _.q.setTimeout(g, b);
                var k = f;
                f = [];
                a.apply(c, k)
            };
        return function(k) {
            f = arguments;
            d ? e = !0 : h()
        }
    };
    var mt, Ya;
    mt = {
        passive: !0
    };
    Ya = Xh(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            _.q.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    _.ab = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, $a(d)), !0) : !1
    };
    _.Md = function(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, $a(d)), !0) : !1
    };
    var eb = function(a) {
        return new u.Promise(function(b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            };
            d.open("GET", a, !0);
            d.send()
        })
    };
    var mb = {};
    var qb, pb = "undefined" !== typeof TextEncoder;
    var nt = function(a) {
        nt[" "](a);
        return a
    };
    nt[" "] = function() {};
    var ot = function(a, b) {
            try {
                return nt(a[b]), !0
            } catch (c) {}
            return !1
        },
        pt = function(a, b, c, d) {
            d = d ? d(b) : b;
            return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
        };
    var qt, st, tt, ut, vt, wt;
    qt = Ca("Opera");
    _.rt = Ca("Trident") || Ca("MSIE");
    st = Ca("Edge");
    tt = Ca("Gecko") && !(Ba(za().toLowerCase(), "webkit") && !Ca("Edge")) && !(Ca("Trident") || Ca("MSIE")) && !Ca("Edge");
    ut = Ba(za().toLowerCase(), "webkit") && !Ca("Edge");
    vt = function() {
        var a = _.q.document;
        return a ? a.documentMode : void 0
    };
    a: {
        var xt = "",
            yt = function() {
                var a = za();
                if (tt) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (st) return /Edge\/([\d\.]+)/.exec(a);
                if (_.rt) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (ut) return /WebKit\/(\S+)/.exec(a);
                if (qt) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();yt && (xt = yt ? yt[1] : "");
        if (_.rt) {
            var zt = vt();
            if (null != zt && zt > parseFloat(xt)) {
                wt = String(zt);
                break a
            }
        }
        wt = xt
    }
    var At = wt,
        Bt = {},
        Ct = function(a) {
            return pt(Bt, a, function() {
                return 0 <= Br(At, a)
            })
        },
        Dt;
    if (_.q.document && _.rt) {
        var Et = vt();
        Dt = Et ? Et : parseInt(At, 10) || void 0
    } else Dt = void 0;
    var Ft = Dt;
    !Ca("Android") || Fa();
    Fa();
    Ga();
    var Gt = {},
        Ht = null,
        It = tt || ut || "function" == typeof _.q.btoa,
        Rb = function(a, b) {
            void 0 === b && (b = 0);
            Jt();
            b = Gt[b];
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
        Kt = function(a, b) {
            if (It && !b) a = _.q.btoa(a);
            else {
                for (var c = [], d = 0, e = 0; e < a.length; e++) {
                    var f = a.charCodeAt(e);
                    255 < f && (c[d++] = f & 255, f >>= 8);
                    c[d++] = f
                }
                a = Rb(c, b)
            }
            return a
        },
        Yp = function(a) {
            var b = "";
            Lt(a, function(c) {
                b += String.fromCharCode(c)
            });
            return b
        },
        Mt = function(a) {
            var b = a.length,
                c = 3 * b / 4;
            c % 3 ? c = Math.floor(c) : Ba("=.", a[b - 1]) && (c = Ba("=.", a[b - 2]) ? c - 2 : c - 1);
            var d = new Uint8Array(c),
                e = 0;
            Lt(a, function(f) {
                d[e++] = f
            });
            return e !== c ? d.subarray(0, e) : d
        },
        Lt = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        m = Ht[l];
                    if (null != m) return m;
                    if (!Dj(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            Jt();
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
        Jt = function() {
            if (!Ht) {
                Ht = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    Gt[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === Ht[f] && (Ht[f] = e)
                    }
                }
            }
        };
    var sb = "undefined" !== typeof Uint8Array,
        Vi, ub = {};
    var Nt, Hb = function(a, b) {
            vb(b);
            this.Lb = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        },
        Ib = function() {
            return Nt || (Nt = new Hb(null, ub))
        },
        Sb = function(a) {
            var b = a.Lb;
            b = null == b || "string" === typeof b ? b : sb && b instanceof Uint8Array ? Rb(b) : null;
            return null == b ? "" : a.Lb = b
        };
    Hb.prototype.isEmpty = function() {
        return null == this.Lb
    };
    var Ui = function(a) {
        vb(ub);
        var b = a.Lb;
        b = null == b || tb(b) ? b : "string" === typeof b ? Mt(b) : null;
        return null == b ? b : a.Lb = b
    };
    var wb = "function" === typeof u.Symbol && "symbol" === typeof(0, u.Symbol)() ? (0, u.Symbol)(void 0) : void 0;
    var Ot, Rp = Object.freeze(Ab([])),
        lc = function(a) {
            if (Fb(a)) throw Error("Cannot mutate an immutable Message");
        },
        Pt = "undefined" != typeof u.Symbol && "undefined" != typeof u.Symbol.hasInstance;
    var Tb = function(a, b, c, d) {
            c = void 0 === c ? Ob : c;
            d = void 0 === d ? Qb : d;
            this.j = a;
            this.H = (this.D = b) && c === Ob ? Nb : c;
            this.l = d;
            this.map = {};
            this.m = !1;
            for (a = this.size = 0; a < this.j.length; a++) b = this.j[a], c = b[0].toString(), d = this.map[c], this.map[c] = b, void 0 === d && this.size++
        },
        Qt = function(a) {
            if (Bb(a.j)) throw Error("Cannot mutate an immutable Map");
        },
        Ub = function(a) {
            if (!a.m) {
                var b = Rt(a);
                b.sort();
                for (var c = 0; c < b.length; c++) a.j[c] = a.map[b[c]];
                b.length < a.j.length && (a.j.length = b.length);
                a.m = !0;
                a.size = a.j.length
            }
            return a.j
        },
        ec = function(a, b) {
            var c = new Tb([], a.D, a.H, a.l);
            for (var d in a.map)
                if (a.map.hasOwnProperty(d)) {
                    var e = a.map[d],
                        f = St(a, e);
                    a.D && !Tt(f) && (f = b(f));
                    c.set(e[0], f)
                }
            return c
        };
    aa = Tb.prototype;
    aa.clear = function() {
        Qt(this);
        this.map = {};
        this.size = this.j.length = 0;
        this.m = !0
    };
    aa.delete = function(a) {
        Qt(this);
        a = a.toString();
        return this.map.hasOwnProperty(a) ? (delete this.map[a], this.size--, this.m = !1, !0) : !1
    };
    aa.entries = function() {
        var a = [],
            b = Rt(this);
        b.sort();
        for (var c = 0; c < b.length; c++) {
            var d = this.map[b[c]];
            a.push([d[0], St(this, d)])
        }
        return new Ut(a)
    };
    aa.keys = function() {
        var a = [],
            b = Rt(this);
        b.sort();
        for (var c = 0; c < b.length; c++) a.push(this.map[b[c]][0]);
        return new Ut(a)
    };
    aa.values = function() {
        var a = [],
            b = Rt(this);
        b.sort();
        for (var c = 0; c < b.length; c++) a.push(St(this, this.map[b[c]]));
        return new Ut(a)
    };
    aa.forEach = function(a, b) {
        var c = Rt(this);
        c.sort();
        for (var d = 0; d < c.length; d++) {
            var e = this.map[c[d]];
            a.call(b, St(this, e), e[0], this)
        }
    };
    aa.set = function(a, b) {
        Qt(this);
        var c = a.toString(),
            d = this.map[c];
        d ? (c = this.H(b, this.D, Bb(this.j), this.B), d[1] = c) : (d = [a, this.H(b, this.D, Bb(this.j), this.B)], this.map[c] = d, this.j.push(d), this.m = !1, this.size++);
        return this
    };
    var St = function(a, b) {
        a = a.H(b[1], a.D, Bb(a.j), a.B);
        a !== b[1] && (b[1] = a);
        return a
    };
    Tb.prototype.get = function(a) {
        return (a = this.map[a.toString()]) ? St(this, a) : void 0
    };
    Tb.prototype.has = function(a) {
        return a.toString() in this.map
    };
    var Rt = function(a) {
        a = a.map;
        var b = [],
            c;
        for (c in a) Object.prototype.hasOwnProperty.call(a, c) && b.push(c);
        return b
    };
    Tb.prototype[_.t(u.Symbol, "iterator")] = function() {
        return _.t(this, "entries").call(this)
    };
    var Ut = function(a) {
        this.m = 0;
        this.j = a
    };
    Ut.prototype.next = function() {
        return this.m < this.j.length ? {
            done: !1,
            value: this.j[this.m++]
        } : {
            done: !0,
            value: void 0
        }
    };
    Ut.prototype[_.t(u.Symbol, "iterator")] = function() {
        return this
    };
    var Mc = function(a) {
            return a.m || (a.m = a.ba[a.D + a.Qa] = {})
        },
        F = function(a, b, c) {
            return -1 === b ? null : b >= a.D ? a.m ? a.m[b] : void 0 : (void 0 === c ? 0 : c) && a.m && (c = a.m[b], null != c) ? c : a.ba[b + a.Qa]
        },
        v = function(a, b, c, d, e) {
            d = void 0 === d ? !1 : d;
            (void 0 === e ? 0 : e) || lc(a);
            if (b >= a.D || d) return Mc(a)[b] = c, a;
            void 0 !== a.m && a.D >= a.ba.length ? (d = a.ba.length - 1, e = b + a.Qa, e >= d ? (a.ba[d] = void 0, a.ba[e] = c, a.ba.push(a.m)) : a.ba[e] = c) : a.ba[b + a.Qa] = c;
            void 0 !== a.m && b in a.m && delete a.m[b];
            return a
        },
        Gk = function(a, b) {
            return null != F(a, b)
        },
        Dh = function(a, b) {
            return Array.isArray(F(a, b))
        },
        gc = function(a, b, c, d) {
            c = void 0 === c ? !0 : c;
            var e = F(a, b, d);
            Array.isArray(e) || (e = Rp);
            if (Fb(a)) c && (Db(e), Object.freeze(e));
            else if (e === Rp || Bb(e)) e = Ab(e.slice()), v(a, b, e, d);
            return e
        },
        oe = function(a, b) {
            a = F(a, b);
            return null == a ? a : +a
        },
        H = function(a, b) {
            a = F(a, b);
            return null == a ? a : !!a
        },
        Ti = function(a, b) {
            var c = F(a, b);
            if (null == c) return null;
            if (c instanceof Hb) return c;
            (c = Jb(c)) && v(a, b, c, void 0, !0);
            return c
        },
        Wd = function(a, b, c) {
            a = F(a, b);
            return null == a ? c : a
        },
        Mq = function(a, b, c) {
            a = H(a, b);
            return null == a ? void 0 === c ? !1 : c : a
        },
        jc, kg = function(a, b, c) {
            null == c ? c = Rp : Ab(c);
            return v(a, b, c)
        },
        mc = function(a, b, c) {
            return v(a, b, void 0, !1, c)
        },
        Hg = function(a, b, c, d) {
            lc(a);
            (c = qc(a, c)) && c !== b && null != d && (a.j && c in a.j && (a.j[c] = void 0), v(a, c));
            return v(a, b, d)
        },
        qc = function(a, b) {
            for (var c = 0, d = 0; d < b.length; d++) {
                var e = b[d];
                null != F(a, e) && (0 !== c && mc(a, c, !0), c = e)
            }
            return c
        },
        Vo = function(a, b, c) {
            lc(a);
            a.j || (a.j = {});
            var d = a.j[c];
            if (d) return b = d.sb(), b !== d && (v(a, c, b.ba), a.j[c] = b), b;
            d = F(a, c);
            b = Mb(d, b, !0).sb();
            d !== b.ba && v(a, c, b.ba);
            return a.j[c] = b
        },
        Vt = (0, u.Symbol)(void 0),
        Wt = function(a, b, c, d) {
            a.j || (a.j = {});
            var e = a.j[c];
            if (e) return e;
            if (b = Mb(F(a, c, d), b)) a.j[c] = b, Fb(a) && Db(b.ba);
            return b
        },
        Pp = function(a, b, c) {
            (a = Wt(a, b, c, !1)) ? b = a: b = (a = b[Vt]) ? a : b[Vt] = (new b).B(mb);
            return b
        },
        vc = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            b = Wt(a, b, c, d);
            if (null == b) return b;
            Fb(b) && !Fb(a) && (b = b.sb(), v(a, c, b.ba, d), a.j[c] = b);
            return b
        },
        Xt = function(a, b, c, d, e) {
            e = void 0 === e ? !0 : e;
            a.j || (a.j = {});
            var f = Fb(a),
                g = a.j[c];
            d = gc(a, c, !0, d);
            var h = f || Bb(d);
            if (!g) {
                g = [];
                f = f || h;
                for (var k = 0; k < d.length; k++) {
                    var l = d[k];
                    f = f || Bb(l);
                    l = Mb(l, b);
                    void 0 !== l && (g.push(l), h && Db(l.ba))
                }
                a.j[c] = g;
                Eb(d, !f)
            }
            b = h || e;
            e = Bb(g);
            b && !e && (Object.isFrozen(g) && (a.j[c] = g = g.slice()), Db(g), Object.freeze(g));
            !b && e && (a.j[c] = g = g.slice());
            return g
        },
        tc = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            var e = Fb(a);
            b = Xt(a, b, c, d, e);
            a = gc(a, c, d);
            if (!(c = e) && (c = a)) {
                if (!Array.isArray(a)) throw Error("cannot check mutability state of non-array");
                c = !(zb(a) & 8)
            }
            if (c) {
                for (c = 0; c < b.length; c++)(d = b[c]) && Fb(d) && !e && (b[c] = b[c].sb(), a[c] = b[c].ba);
                Eb(a, !0)
            }
            return b
        },
        Kc = function(a, b, c, d) {
            lc(a);
            a.j || (a.j = {});
            var e = null == c ? c = void 0 : c.ba;
            a.j[b] = c;
            return v(a, b, e, d)
        },
        pg = function(a, b, c, d) {
            lc(a);
            a.j || (a.j = {});
            var e = null != d ? d.ba : d = void 0;
            a.j[b] = d;
            return Hg(a, b, c, e)
        },
        Gc = function(a, b, c, d) {
            lc(a);
            if (null != c) {
                var e = Ab([]);
                for (var f = !1, g = 0; g < c.length; g++) e[g] = c[g].ba, f = f || Bb(e[g]);
                a.j || (a.j = {});
                a.j[b] = c;
                Eb(e, !f)
            } else a.j && (a.j[b] = void 0), e = Rp;
            return v(a, b, e, d)
        },
        Yt = function(a, b, c, d) {
            lc(a);
            var e = Xt(a, c, b, void 0, !1);
            c = null != d ? d : new c;
            a = gc(a, b);
            e.push(c);
            a.push(c.ba);
            Tt(c) && Eb(a, !1);
            return c
        },
        Jj = function(a, b, c, d) {
            Yt(a, b, c, d);
            return a
        },
        Xd = function(a, b) {
            return Wd(a, b, 0)
        },
        $t = function(a) {
            var b = rc(a, Zt, 3);
            return Wd(a, b, 0)
        },
        jo = function(a, b) {
            return Wd(a, b, "")
        },
        au = function(a) {
            return jo(a, rc(a, Zt, 2))
        },
        eo = function(a, b, c, d) {
            return vc(a, b, rc(a, d, c))
        };
    var Dc = function(a, b, c) {
        a || (a = bu);
        bu = null;
        var d = this.constructor.j || 0,
            e = 0 < d,
            f = this.constructor.messageId;
        a || (a = f ? [f] : []);
        e && 0 < a.length && Gb(a[a.length - 1]) && "g" in a[a.length - 1] && (d = 0);
        this.Qa = (f ? 0 : -1) - d;
        this.j = void 0;
        this.ba = a;
        a: {
            d = this.ba.length;a = d - 1;
            if (d && (d = this.ba[a], Gb(d))) {
                this.m = d;
                b = _.t(Object, "keys").call(Object, d);
                0 < b.length && Array.prototype.every.call(b, isNaN, void 0) ? this.D = Number.MAX_VALUE : this.D = a - this.Qa;
                break a
            }
            void 0 !== b && -1 < b ? (this.D = Math.max(b, a + 1 - this.Qa), this.m = void 0) : this.D = Number.MAX_VALUE
        }
        if (!e && this.m && "g" in this.m) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c)
            for (e = 0; e < c.length; e++) b = c[e], b < this.D ? (b += this.Qa, (a = this.ba[b]) ? Array.isArray(a) && Ab(a) : this.ba[b] = Rp) : (a = Mc(this), (d = a[b]) ? Array.isArray(d) && Ab(d) : a[b] = Rp)
    };
    Dc.prototype.toJSON = function() {
        var a = this.ba;
        return Ot ? a : $b(a, bc)
    };
    Dc.prototype.Y = function() {
        Ot = !0;
        try {
            return JSON.stringify(this.toJSON(), sc)
        } finally {
            Ot = !1
        }
    };
    var Od = function(a, b) {
            if (null == b || "" == b) return new a;
            b = JSON.parse(b);
            if (!Array.isArray(b)) throw Error("Expected to deserialize an Array but got " + As(b) + ": " + b);
            bu = b;
            a = new a(b);
            bu = null;
            return a
        },
        cc = function(a) {
            var b = $b(a.ba);
            bu = b;
            b = new a.constructor(b);
            bu = null;
            uc(b, a);
            return b
        },
        Tt = function(a) {
            ob(mb);
            return Fb(a)
        },
        bu;
    var xc = 0,
        yc = 0,
        Ac = "function" === typeof BigInt;
    var cu = function(a, b) {
            this.m = a >>> 0;
            this.j = b >>> 0
        },
        eu = function(a) {
            if (!a) return du || (du = new cu(0, 0));
            if (!/^\d+$/.test(a)) return null;
            Bc(a);
            return new cu(xc, yc)
        },
        du, fu = function(a, b) {
            this.m = a >>> 0;
            this.j = b >>> 0
        },
        hu = function(a) {
            if (!a) return gu || (gu = new fu(0, 0));
            if (!/^-?\d+$/.test(a)) return null;
            Bc(a);
            return new fu(xc, yc)
        },
        gu;
    var iu = function() {
        this.j = []
    };
    iu.prototype.length = function() {
        return this.j.length
    };
    iu.prototype.end = function() {
        var a = this.j;
        this.j = [];
        return a
    };
    var ju = function(a, b, c) {
            for (; 0 < c || 127 < b;) a.j.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
            a.j.push(b)
        },
        ku = function(a, b) {
            for (; 127 < b;) a.j.push(b & 127 | 128), b >>>= 7;
            a.j.push(b)
        },
        lu = function(a, b) {
            if (0 <= b) ku(a, b);
            else {
                for (var c = 0; 9 > c; c++) a.j.push(b & 127 | 128), b >>= 7;
                a.j.push(1)
            }
        };
    var mu = function() {
            this.D = [];
            this.m = 0;
            this.j = new iu
        },
        nu = function(a, b) {
            0 !== b.length && (a.D.push(b), a.m += b.length)
        },
        ou = function(a, b) {
            ku(a.j, 8 * b + 2);
            b = a.j.end();
            nu(a, b);
            b.push(a.m);
            return b
        },
        pu = function(a, b) {
            var c = b.pop();
            for (c = a.m + a.j.length() - c; 127 < c;) b.push(c & 127 | 128), c >>>= 7, a.m++;
            b.push(c);
            a.m++
        },
        Pc = function(a, b) {
            if (b = b.H) {
                nu(a, a.j.end());
                for (var c = 0; c < b.length; c++) nu(a, Ui(b[c]) || Vi || (Vi = new Uint8Array(0)))
            }
        },
        qu = function(a, b, c) {
            ku(a.j, 8 * b + 2);
            ku(a.j, c.length);
            nu(a, a.j.end());
            nu(a, c)
        };
    var ru = function() {
        Dc.apply(this, arguments)
    };
    _.N(ru, Dc);
    ru.prototype.B = function() {
        throw Error("unimplemented");
    };
    ru.prototype.sb = function() {
        return this
    };
    if (Pt) {
        var su = {};
        Object.defineProperties(ru, (su[u.Symbol.hasInstance] = Kb(function() {
            throw Error("Cannot perform instanceof checks for MutableMessage");
        }), su))
    };
    var Wc = (0, u.Symbol)(),
        Uc = (0, u.Symbol)(),
        Rc = (0, u.Symbol)(),
        tm = function(a, b) {
            var c = new mu;
            Yc(a, c, Xc(b));
            nu(c, c.j.end());
            a = new Uint8Array(c.m);
            b = c.D;
            for (var d = b.length, e = 0, f = 0; f < d; f++) {
                var g = b[f];
                a.set(g, e);
                e += g.length
            }
            c.D = [a];
            return a
        },
        tu = cd(function(a, b, c) {
            if (5 !== a.j()) return !1;
            v(b, c, a.l());
            return !0
        }, function(a, b, c) {
            b = oe(b, c);
            if (null != b) {
                ku(a.j, 8 * c + 5);
                a = a.j;
                var d = +b;
                0 === d ? 0 < 1 / d ? xc = yc = 0 : (yc = 0, xc = 2147483648) : isNaN(d) ? (yc = 0, xc = 2147483647) : (d = (c = 0 > d ? -2147483648 : 0) ? -d : d, 3.4028234663852886E38 < d ? (yc = 0, xc = (c | 2139095040) >>> 0) : 1.1754943508222875E-38 > d ? (d = Math.round(d / Math.pow(2, -149)), yc = 0, xc = (c | d) >>> 0) : (b = Math.floor(Math.log(d) / Math.LN2), d *= Math.pow(2, -b), d = Math.round(8388608 * d), 16777216 <= d && ++b, yc = 0, xc = (c | b + 127 << 23 | d & 8388607) >>> 0));
                c = xc;
                a.j.push(c >>> 0 & 255);
                a.j.push(c >>> 8 & 255);
                a.j.push(c >>> 16 & 255);
                a.j.push(c >>> 24 & 255)
            }
        }),
        uu = cd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            v(b, c, a.o());
            return !0
        }, function(a, b, c) {
            b = F(b, c);
            null != b && ("string" === typeof b && hu(b), null != b && (ku(a.j, 8 * c), "number" === typeof b ? (a = a.j, zc(b), ju(a, xc, yc)) : (c = hu(b), ju(a.j, c.m, c.j))))
        }),
        vu = cd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            v(b, c, a.M());
            return !0
        }, function(a, b, c) {
            b = F(b, c);
            null != b && ("string" === typeof b && eu(b), null != b && (ku(a.j, 8 * c), "number" === typeof b ? (a = a.j, zc(b), ju(a, xc, yc)) : (c = eu(b), ju(a.j, c.m, c.j))))
        }),
        wu = cd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            v(b, c, a.I());
            return !0
        }, function(a, b, c) {
            b = F(b, c);
            null != b && null != b && (ku(a.j, 8 * c), lu(a.j, b))
        }),
        xu = cd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            v(b, c, a.H());
            return !0
        }, function(a, b, c) {
            b = H(b, c);
            null != b && (ku(a.j, 8 * c), a.j.j.push(b ? 1 : 0))
        }),
        yu = cd(function(a, b, c) {
            if (2 !== a.j()) return !1;
            v(b, c, a.D());
            return !0
        }, function(a, b, c) {
            b = F(b, c);
            null != b && qu(a, c, rb(b))
        }),
        zu = cd(function(a, b, c) {
            if (2 !== a.j()) return !1;
            a = a.D();
            pc(b, c, a);
            return !0
        }, function(a, b, c) {
            b = gc(b, c);
            if (null != b)
                for (var d = 0; d < b.length; d++) {
                    var e = b[d];
                    null != e && qu(a, c, rb(e))
                }
        }),
        Au = cd(function(a, b, c, d, e) {
            if (2 !== a.j()) return !1;
            a.m(Vo(b, d, c), e);
            return !0
        }, function(a, b, c, d, e) {
            b = vc(b, d, c);
            null != b && (c = ou(a, c), e(b, a), pu(a, c))
        }),
        Bu = cd(function(a, b, c, d, e) {
            if (2 !== a.j()) return !1;
            a.m(Yt(b, c, d), e);
            return !0
        }, function(a, b, c, d, e) {
            b = tc(b, d, c);
            if (null != b)
                for (d = 0; d < b.length; d++) {
                    var f = ou(a, c);
                    e(b[d], a);
                    pu(a, f)
                }
        }),
        Cu = cd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            v(b, c, a.B());
            return !0
        }, function(a, b, c) {
            b = F(b, c);
            null != b && (b = parseInt(b, 10), ku(a.j, 8 * c), lu(a.j, b))
        });
    var Q = function() {
        ru.apply(this, arguments)
    };
    _.N(Q, ru);
    Q.prototype.B = function(a) {
        ob(a);
        return Fb(this) ? this : Ec(this)
    };
    Q.prototype.sb = function() {
        if (Fb(this)) {
            var a = {
                Ic: !0
            };
            var b = Fb(this);
            if (b && !a.Ic) throw Error("copyRepeatedFields must be true for frozen messages");
            var c = new this.constructor;
            Wb(c, this);
            for (var d = this.ba, e = 0; e < d.length; e++) {
                var f = d[e];
                if (e === d.length - 1 && Gb(f))
                    for (var g in f) {
                        if (Object.prototype.hasOwnProperty.call(f, g)) {
                            var h = +g;
                            _.t(Number, "isNaN").call(Number, h) ? Mc(c)[g] = f[g] : dd(this, c, h, f[g], b, a)
                        }
                    } else dd(this, c, e - this.Qa, f, b, a)
            }
            a = c
        } else a = this;
        return a
    };
    if (Pt) {
        var Du = {};
        Object.defineProperties(Q, (Du[u.Symbol.hasInstance] = Kb(Object[u.Symbol.hasInstance]), Du))
    };
    var Zp = function(a) {
        Q.call(this, a)
    };
    _.N(Zp, Q);
    var $p = function(a) {
        Q.call(this, a)
    };
    _.N($p, Q);
    var Eu = function(a) {
            this.j = a.m;
            this.m = a.D;
            this.H = a.H;
            this.Hb = a.Hb;
            this.F = a.F;
            this.qb = a.qb;
            this.ec = a.ec;
            this.xc = a.xc;
            this.cc = a.cc;
            this.D = a.j
        },
        Fu = function(a, b, c) {
            this.m = a;
            this.D = b;
            this.H = c;
            this.F = window;
            this.qb = "env";
            this.ec = "n";
            this.xc = "0";
            this.cc = "1";
            this.j = !0
        };
    Fu.prototype.build = function() {
        return new Eu(this)
    };
    var iq = function(a, b) {
        var c = void 0 === Mq(b, 6) ? !0 : Mq(b, 6),
            d, e;
        a: switch (Wd(b, 4, 0)) {
            case 1:
                var f = "pt";
                break a;
            case 2:
                f = "cr";
                break a;
            default:
                f = ""
        }
        f = new Fu(ed(Wd(b, 2, 0)), jo(b, 3), f);
        b = null != (e = null == (d = vc(b, $p, 5)) ? void 0 : jo(d, 1)) ? e : "";
        f.Hb = b;
        f.j = c;
        f.F = a;
        return f.build()
    };
    var Il = function(a) {
        Q.call(this, a)
    };
    _.N(Il, Q);
    var Hl = function(a, b) {
            return v(a, 1, b)
        },
        Gl = function(a, b) {
            return v(a, 2, b)
        },
        Gu = [Il, 1, Cu, 2, wu, 3, yu];
    var Pl = function(a) {
        Q.call(this, a, -1, Hu)
    };
    _.N(Pl, Q);
    var Ol = function(a, b) {
            return v(a, 1, b)
        },
        Ql = function(a, b) {
            v(a, 2, b)
        },
        Ml = function(a, b) {
            return Jj(a, 3, Vl, b)
        },
        Nl = function(a, b) {
            return v(a, 4, b)
        };
    Pl.prototype.Dd = function() {
        return Wd(this, 7, 0)
    };
    var Vl = function(a) {
        Q.call(this, a, -1, Iu)
    };
    _.N(Vl, Q);
    var Zl = function(a, b) {
            kg(a, 4, b)
        },
        $l = function(a, b) {
            Kc(a, 7, b)
        },
        Xl = function(a) {
            Q.call(this, a)
        };
    _.N(Xl, Q);
    Xl.prototype.getId = function() {
        return jo(this, 1)
    };
    var Wl = function(a, b) {
            return v(a, 1, b)
        },
        Ju = function(a) {
            Q.call(this, a)
        };
    _.N(Ju, Q);
    Ju.prototype.getWidth = function() {
        return Xd(this, 1)
    };
    var bm = function(a) {
        var b = new Ju;
        return v(b, 1, a)
    };
    Ju.prototype.getHeight = function() {
        return Xd(this, 2)
    };
    var am = function(a, b) {
            return v(a, 2, b)
        },
        Hu = [3],
        Iu = [4],
        Ku = [Pl, 1, yu, 2, uu, 3, Bu, [Vl, 1, yu, 2, uu, 8, uu, 3, yu, 4, zu, 5, Cu, 6, Au, [Xl, 1, yu], 7, Au, [Ju, 1, wu, 2, wu]], 4, Cu, 5, Au, Gu, 6, xu, 7, Cu];
    var Lu = function(a) {
        Q.call(this, a)
    };
    _.N(Lu, Q);
    var Mu = [Lu, 1, Cu];
    var Ou = function(a) {
        Q.call(this, a, -1, Nu)
    };
    _.N(Ou, Q);
    var Ll = function(a, b) {
            return Yt(a, 2, Pl, b)
        },
        Tl = function(a, b) {
            Kc(a, 5, b)
        },
        Nu = [2],
        Pu = [Ou, 1, Cu, 6, yu, 2, Bu, Ku, 3, Cu, 4, yu, 5, Au, Gu, 9, Au, Mu, 7, xu, 8, wu];
    var Ru = function(a) {
        Q.call(this, a, -1, Qu)
    };
    _.N(Ru, Q);
    var Su = function(a) {
            var b = new Ou;
            b = v(b, 1, 1);
            return Yt(a, 1, Ou, b)
        },
        Qu = [1],
        um = [Ru, 1, Bu, Pu];
    var Uu = function(a) {
        Q.call(this, a, -1, Tu)
    };
    _.N(Uu, Q);
    var Wu = function(a) {
        Q.call(this, a, -1, Vu)
    };
    _.N(Wu, Q);
    var Xu = function(a) {
        Q.call(this, a)
    };
    _.N(Xu, Q);
    var Tu = [1],
        Vu = [1],
        Zt = [2, 3];
    var Zu = function(a) {
        Q.call(this, a, -1, Yu)
    };
    _.N(Zu, Q);
    var Yu = [4];
    var $u = function(a) {
        Q.call(this, a)
    };
    _.N($u, Q);
    var bv = function(a) {
        Q.call(this, a, -1, av)
    };
    _.N(bv, Q);
    var av = [1];
    var dv = function(a) {
        Q.call(this, a, -1, cv)
    };
    _.N(dv, Q);
    var ev = function(a) {
        Q.call(this, a)
    };
    _.N(ev, Q);
    var cv = [1];
    var fv = function(a) {
        Q.call(this, a)
    };
    _.N(fv, Q);
    fv.prototype.getAdUnitPath = function() {
        return jo(this, 1)
    };
    var gv = function(a) {
        Q.call(this, a)
    };
    _.N(gv, Q);
    var hv = [gv, 1, uu];
    var zm = function(a) {
        Q.call(this, a)
    };
    _.N(zm, Q);
    zm.prototype.getEscapedQemQueryId = function() {
        return jo(this, 1)
    };
    var Am = [zm, 1, yu, 2, Au, hv];
    var jv = function(a) {
        Q.call(this, a, -1, iv)
    };
    _.N(jv, Q);
    var bo = function(a) {
        Q.call(this, a)
    };
    _.N(bo, Q);
    var fo = function(a) {
        Q.call(this, a)
    };
    _.N(fo, Q);
    var iv = [1, 2],
        co = [1, 2];
    var io = function(a) {
        Q.call(this, a)
    };
    _.N(io, Q);
    io.prototype.getAdUnitPath = function() {
        return jo(this, 2)
    };
    io.prototype.getWidth = function() {
        return Xd(this, 3)
    };
    io.prototype.getHeight = function() {
        return Xd(this, 4)
    };
    var lv = function(a) {
        Q.call(this, a, -1, kv)
    };
    _.N(lv, Q);
    var kv = [3];
    var mv = function(a) {
        Q.call(this, a)
    };
    _.N(mv, Q);
    var nv = [5, 6, 7];
    var pv = function(a) {
        Q.call(this, a, -1, ov)
    };
    _.N(pv, Q);
    var ov = [4, 5, 6];
    var qv = function(a) {
        Q.call(this, a)
    };
    _.N(qv, Q);
    var sv = function(a) {
        Q.call(this, a, -1, rv)
    };
    _.N(sv, Q);
    var rv = [13];
    var uv = function(a) {
        Q.call(this, a, -1, tv)
    };
    _.N(uv, Q);
    var tv = [13];
    var wv = function(a) {
        Q.call(this, a, -1, vv)
    };
    _.N(wv, Q);
    var xv = function(a) {
        Q.call(this, a)
    };
    _.N(xv, Q);
    var yv = function(a) {
        Q.call(this, a)
    };
    _.N(yv, Q);
    var zv = function(a) {
        Q.call(this, a)
    };
    _.N(zv, Q);
    var xe = function(a) {
        Q.call(this, a)
    };
    _.N(xe, Q);
    var we = function(a, b) {
            return v(a, 1, b)
        },
        te = function(a) {
            Q.call(this, a)
        };
    _.N(te, Q);
    var vv = [1, 2],
        Av = [yv, 1, vu, 2, vu, 3, vu],
        Bv = [wv, 1, Bu, [xv, 5, yu, 4, yu, 2, Au, Av, 3, Au, Av, 6, xu, 7, Au, [zv, 4, Cu, 5, yu]], 2, Bu, [xe, 1, yu, 2, yu, 3, uu, 7, uu, 8, tu, 4, wu, 5, wu, 6, wu, 9, xu, 10, Au, [te, 1, Cu]]];
    var Cv = function(a) {
        Q.call(this, a)
    };
    _.N(Cv, Q);
    var Ev = function(a) {
        Q.call(this, a, -1, Dv)
    };
    _.N(Ev, Q);
    var Dv = [1];
    var Fv = function(a) {
        Q.call(this, a)
    };
    _.N(Fv, Q);
    var Gv = function(a) {
        Q.call(this, a)
    };
    _.N(Gv, Q);
    Gv.prototype.getVersion = function() {
        return F(this, 5)
    };
    var Hv = function(a) {
        Q.call(this, a)
    };
    _.N(Hv, Q);
    var Iv = function(a) {
        Q.call(this, a)
    };
    _.N(Iv, Q);
    var Cq = function(a) {
        Q.call(this, a, -1, Jv)
    };
    _.N(Cq, Q);
    Cq.prototype.getEscapedQemQueryId = function() {
        return jo(this, 4)
    };
    var Jv = [2];
    var Bq = function(a) {
        Q.call(this, a)
    };
    _.N(Bq, Q);
    var Dq = function(a) {
        Q.call(this, a)
    };
    _.N(Dq, Q);
    var Eq = function(a) {
        Q.call(this, a)
    };
    _.N(Eq, Q);
    Eq.prototype.getEscapedQemQueryId = function() {
        return jo(this, 2)
    };
    var Fq = function(a) {
        Q.call(this, a)
    };
    _.N(Fq, Q);
    var Lv = function(a) {
        Q.call(this, a, -1, Kv)
    };
    _.N(Lv, Q);
    Lv.prototype.getWidth = function() {
        return Xd(this, 9)
    };
    Lv.prototype.getHeight = function() {
        return Xd(this, 10)
    };
    var Kv = [3, 7, 11];
    var Nv = function(a) {
        Q.call(this, a, -1, Mv)
    };
    _.N(Nv, Q);
    Nv.prototype.getHeight = function() {
        return F(this, 6)
    };
    Nv.prototype.getWidth = function() {
        return F(this, 7)
    };
    Nv.prototype.getEscapedQemQueryId = function() {
        return F(this, 34)
    };
    var Ov = function(a) {
        Q.call(this, a)
    };
    _.N(Ov, Q);
    Ov.prototype.getHtml = function() {
        return Ti(this, 1)
    };
    var Mv = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 38, 53, 62, 63],
        Pv = [4, 41],
        Qv = [39, 48];
    var Xp = function(a) {
        Q.call(this, a)
    };
    _.N(Xp, Q);
    var Rv = window;
    var Hr = function(a) {
        Q.call(this, a, -1, Sv)
    };
    _.N(Hr, Q);
    var Sv = [15];
    var Gr = function(a) {
        Q.call(this, a)
    };
    _.N(Gr, Q);
    Gr.prototype.getCorrelator = function() {
        return Wd(this, 1, 0)
    };
    Gr.prototype.setCorrelator = function(a) {
        return oc(this, 1, a, 0)
    };
    var Fr = function(a) {
        Q.call(this, a)
    };
    _.N(Fr, Q);
    var Tv = _.rt || ut;
    var Uv = /^[\w+/_-]+[=]{0,2}$/,
        Vv = function(a, b) {
            b = (b || _.q).document;
            return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && Uv.test(a) ? a : "" : ""
        };
    _.Mh = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    _.Mh.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.Mh.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.Mh.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.Ph = function(a, b) {
        this.width = a;
        this.height = b
    };
    aa = _.Ph.prototype;
    aa.aspectRatio = function() {
        return this.width / this.height
    };
    aa.isEmpty = function() {
        return !(this.width * this.height)
    };
    aa.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    aa.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    aa.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Wv, lm, Xv, Zv;
    Wv = function(a) {
        return a = of (a)
    };
    lm = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ vf()).toString(36)
    };
    Xv = 2147483648 * Math.random() | 0;
    _.Yv = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    Zv = function(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    var bw, dw, cw, gw, iw, gd, jd, $v;
    bw = function(a) {
        return a ? new $v(_.aw(a)) : Hs || (Hs = new $v)
    };
    dw = function(a, b) {
        sa(b, function(c, d) {
            c && "object" == typeof c && c.La && (c = c.Ea());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : cw.hasOwnProperty(d) ? a.setAttribute(cw[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    };
    cw = {
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
    _.fw = function(a) {
        a = a.document;
        a = _.ew(a) ? a.documentElement : a.body;
        return new _.Ph(a.clientWidth, a.clientHeight)
    };
    gw = function(a) {
        return a.scrollingElement ? a.scrollingElement : !ut && _.ew(a) ? a.documentElement : a.body || a.documentElement
    };
    _.hw = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    iw = function(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!na(f) || _.fa(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (_.fa(f)) {
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
                _.Ks(g ? da(f) : f, d)
            }
        }
    };
    _.ew = function(a) {
        return "CSS1Compat" == a.compatMode
    };
    _.jw = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    _.kw = function(a) {
        var b;
        if (Tv && !(_.rt && Ct("9") && !Ct("10") && _.q.SVGElement && a instanceof _.q.SVGElement) && (b = a.parentElement)) return b;
        b = a.parentNode;
        return _.fa(b) && 1 == b.nodeType ? b : null
    };
    _.lw = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    gd = function(a) {
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
    };
    _.aw = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    jd = function(a) {
        try {
            return a.contentWindow || (a.contentDocument ? _.hw(a.contentDocument) : null)
        } catch (b) {}
        return null
    };
    $v = function(a) {
        this.j = a || _.q.document || document
    };
    aa = $v.prototype;
    aa.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    aa.createElement = function(a) {
        var b = this.j;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    aa.createTextNode = function(a) {
        return this.j.createTextNode(String(a))
    };
    aa.append = function(a, b) {
        iw(_.aw(a), a, arguments)
    };
    aa.ge = _.jw;
    aa.contains = _.lw;
    var mw = function() {
        return Ca("iPad") || Ca("Android") && !Ca("Mobile") || Ca("Silk")
    };
    var ow, yk, pw, Aj;
    _.nw = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    ow = function(a) {
        return a ? decodeURI(a) : a
    };
    yk = function(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) yk(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    pw = /#|$/;
    Aj = function(a, b) {
        var c = a.search(pw);
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
    var id, hd, Se, qw, Te, yj, Yh, Zd, rw, $i, Fh, Yd, $d, Pr, tw, uw, vw, Zh, ww, xw, yw, zw, Aw, Bw, Cw, Dw, xi, zi, yi, Ew, Fw, Hw, Iw, Jw, Kw, Lw, je, Mw, $n, Ik, Nw, Ow, Ek, Pw;
    id = function(a) {
        try {
            return !!a && null != a.location.href && ot(a, "foo")
        } catch (b) {
            return !1
        }
    };
    hd = function(a, b, c, d) {
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? _.q : d;
        c = (void 0 === c ? 0 : c) ? qw(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !id(c) || !a(c));) c = qw(c)
    };
    Se = function() {
        var a = window;
        hd(function(b) {
            a = b;
            return !1
        });
        return a
    };
    qw = function(a) {
        try {
            var b = a.parent;
            if (b && b != a) return b
        } catch (c) {}
        return null
    };
    Te = function(a) {
        return id(a.top) ? a.top : null
    };
    yj = function(a, b) {
        var c = _.Ld("SCRIPT", a);
        Wa(c, b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    };
    Yh = function(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    };
    Zd = function() {
        if (!u.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            u.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    };
    _.Bk = function(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    rw = function(a) {
        var b = [];
        _.Bk(a, function(c, d) {
            b.push(d)
        });
        return b
    };
    _.sw = function(a) {
        var b = [];
        _.Bk(a, function(c) {
            b.push(c)
        });
        return b
    };
    $i = function(a, b) {
        return va(a, function(c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    };
    Fh = function(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    Yd = Xh(function() {
        return _.Xf(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], tw) || 1E-4 > Math.random()
    });
    $d = function(a, b) {
        try {
            if (a) return a.setItem("google_experiment_mod", b), b
        } catch (c) {}
        return null
    };
    Pr = Xh(function() {
        return tw("MSIE")
    });
    tw = function(a) {
        return Ba(za(), a)
    };
    uw = /^([0-9.]+)px$/;
    vw = function() {
        return /^true$/.test("false")
    };
    Zh = function(a) {
        return (a = uw.exec(a)) ? +a[1] : null
    };
    ww = function(a) {
        if (!a) return "";
        var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    xw = {
        Nf: "allow-forms",
        Of: "allow-modals",
        Pf: "allow-orientation-lock",
        Qf: "allow-pointer-lock",
        Rf: "allow-popups",
        Sf: "allow-popups-to-escape-sandbox",
        Tf: "allow-presentation",
        Uf: "allow-same-origin",
        Vf: "allow-scripts",
        Wf: "allow-top-navigation",
        Xf: "allow-top-navigation-by-user-activation"
    };
    yw = Xh(function() {
        return _.sw(xw)
    });
    zw = function(a) {
        var b = yw();
        return a.length ? _.Jf(b, function(c) {
            return !(0 <= _.ba(a, c))
        }) : b
    };
    Aw = function() {
        var a = _.Ld("IFRAME"),
            b = {};
        _.Ks(yw(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    };
    Bw = function(a) {
        a = a && a.toString && a.toString();
        return "string" === typeof a && Ba(a, "[native code]")
    };
    Cw = function(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (e) {
                d = !1
            }
            if (d) return a;
            if (!(a = qw(a))) break
        }
        return null
    };
    Dw = function(a) {
        if (!a || !a.frames) return null;
        if (a.frames.google_ads_top_frame) return a.frames.google_ads_top_frame.frameElement;
        try {
            var b = a.document,
                c = b.head,
                d, e = null != (d = b.body) ? d : null == c ? void 0 : c.parentElement;
            if (e) {
                var f = _.Ld("IFRAME");
                f.name = "google_ads_top_frame";
                f.id = "google_ads_top_frame";
                f.style.display = "none";
                f.style.position = "fixed";
                f.style.left = "-999px";
                f.style.top = "-999px";
                f.style.width = "0px";
                f.style.height = "0px";
                e.appendChild(f);
                return f
            }
        } catch (g) {}
        return null
    };
    _.nl = Xh(function() {
        return !mw() && (Ca("iPod") || Ca("iPhone") || Ca("Android") || Ca("IEMobile")) ? 2 : mw() ? 1 : 0
    });
    xi = function(a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--;) {
            if (a == b) return !0;
            a = a.parentElement
        }
        return !1
    };
    _.hi = function(a, b) {
        _.Bk(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        })
    };
    zi = function(a, b, c) {
        for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a);) a = a.parentElement
    };
    yi = function(a, b) {
        for (var c = 100; a && c--;) {
            var d = Yh(a, window);
            if (d) {
                if (b(d)) return !0;
                a = a.parentElement
            }
        }
        return !1
    };
    Ew = function(a) {
        if (!a) return null;
        a = a.transform;
        if (!a) return null;
        a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
        return 6 != a.length ? null : Fc(a, parseFloat)
    };
    Fw = {};
    _.Gw = (Fw["http://googleads.g.doubleclick.net"] = !0, Fw["http://pagead2.googlesyndication.com"] = !0, Fw["https://googleads.g.doubleclick.net"] = !0, Fw["https://pagead2.googlesyndication.com"] = !0, Fw);
    Hw = function(a) {
        _.q.console && _.q.console.warn && _.q.console.warn(a)
    };
    Iw = [];
    Jw = function() {
        var a = Iw;
        Iw = [];
        a = _.w(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    };
    Kw = function(a) {
        return a.replace(/\\(n|r|\\)/g, function(b, c) {
            return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
        })
    };
    Lw = function() {
        return Math.floor(Math.random() * Math.pow(2, 52))
    };
    je = function(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Lw(),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    };
    Mw = function(a, b) {
        kd(_.hw(_.aw(a)), a, b)
    };
    $n = function(a, b) {
        "complete" === a.readyState || "interactive" === a.readyState ? (Iw.push(b), 1 == Iw.length && (u.Promise ? u.Promise.resolve().then(Jw) : window.setImmediate ? setImmediate(Jw) : setTimeout(Jw, 0))) : a.addEventListener("DOMContentLoaded", b)
    };
    Ik = function(a) {
        return 0 === a || "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
    };
    Nw = function(a, b) {
        var c = _.Ld("DIV");
        c.id = a;
        c.textContent = b;
        _.hi(c, {
            height: "24px",
            "line-height": "24px",
            "text-align": "center",
            "vertical-align": "middle",
            color: "white",
            "background-color": "black",
            margin: "0",
            "font-family": "Roboto",
            "font-style": "normal",
            "font-weight": "500",
            "font-size": "11px",
            "letter-spacing": "0.08em"
        });
        return c
    };
    Ow = function(a) {
        return new u.Promise(function(b) {
            setTimeout(function() {
                return void b(2)
            }, a)
        })
    };
    Ek = function(a) {
        try {
            var b = JSON.stringify(a)
        } catch (c) {}
        return b || String(a)
    };
    _.Ld = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    Pw = function(a) {
        for (var b = a; a && a != a.parent;) a = a.parent, id(a) && (b = a);
        return b
    };
    _.Qw = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    _.Qw.prototype.getWidth = function() {
        return this.right - this.left
    };
    _.Qw.prototype.getHeight = function() {
        return this.bottom - this.top
    };
    _.Rw = function(a) {
        return new _.Qw(a.top, a.right, a.bottom, a.left)
    };
    _.Qw.prototype.contains = function(a) {
        return this && a ? a instanceof _.Qw ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    _.Qw.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.Qw.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.Qw.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var Sw = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        },
        Tw = function(a) {
            return new _.Qw(a.top, a.left + a.width, a.top + a.height, a.left)
        },
        Uw = function(a, b) {
            var c = Math.max(a.left, b.left),
                d = Math.min(a.left + a.width, b.left + b.width);
            if (c <= d) {
                var e = Math.max(a.top, b.top);
                a = Math.min(a.top + a.height, b.top + b.height);
                if (e <= a) return new Sw(c, e, d - c, a - e)
            }
            return null
        };
    Sw.prototype.contains = function(a) {
        return a instanceof _.Mh ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    Sw.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Sw.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Sw.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Ym = function(a) {
            a = void 0 === a ? _.q : a;
            var b = a.context || a.AMP_CONTEXT_DATA;
            if (!b) try {
                b = a.parent.context || a.parent.AMP_CONTEXT_DATA
            } catch (c) {}
            try {
                if (b && b.pageViewId && b.canonicalUrl) return b
            } catch (c) {}
            return null
        },
        Xm = function(a) {
            return (a = a || Ym()) ? id(a.master) ? a.master : null : null
        };
    var Vw = function(a, b, c, d) {
        this.j = a;
        this.D = b;
        this.m = c;
        this.H = d
    };
    var Ww = new Vw(new u.Set("ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER".split(" ")), new u.Map([
        ["A", new u.Map([
            ["href", {
                ua: 2
            }]
        ])],
        ["AREA", new u.Map([
            ["href", {
                ua: 2
            }]
        ])],
        ["LINK", new u.Map([
            ["href", {
                ua: 2,
                conditions: new u.Map([
                    ["rel", new u.Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]
                ])
            }]
        ])],
        ["SOURCE", new u.Map([
            ["src", {
                ua: 2
            }]
        ])],
        ["IMG", new u.Map([
            ["src", {
                ua: 2
            }]
        ])],
        ["VIDEO", new u.Map([
            ["src", {
                ua: 2
            }]
        ])],
        ["AUDIO", new u.Map([
            ["src", {
                ua: 2
            }]
        ])]
    ]), new u.Set("title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" ")), new u.Map([
        ["dir", {
            ua: 3,
            conditions: new u.Map([
                ["dir", new u.Set(["auto", "ltr", "rtl"])]
            ])
        }],
        ["async", {
            ua: 3,
            conditions: new u.Map([
                ["async", new u.Set(["async"])]
            ])
        }],
        ["cite", {
            ua: 2
        }],
        ["loading", {
            ua: 3,
            conditions: new u.Map([
                ["loading", new u.Set(["eager", "lazy"])]
            ])
        }],
        ["poster", {
            ua: 2
        }],
        ["target", {
            ua: 3,
            conditions: new u.Map([
                ["target", new u.Set(["_self", "_blank"])]
            ])
        }]
    ]));
    var Xw = function() {
        if (gt !== gt) throw Error("Bad secret");
    };
    new Xw;
    var Yw = function() {
        this.m = !1;
        this.j = Ww
    };
    Yw.prototype.build = function() {
        if (this.m) throw Error("this sanitizer has already called build");
        this.m = !0;
        return new Xw
    };
    _.rd = function(a) {
        this.Te = a
    };
    _.Zw = [sd("data"), sd("http"), sd("https"), sd("mailto"), sd("ftp"), new _.rd(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];
    var bx, Tf, Oh, dx, ex, Lh;
    _.ax = function(a, b, c) {
        if ("string" === typeof b)(b = _.$w(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = _.$w(c, d);
                f && (c.style[f] = e)
            }
    };
    bx = {};
    _.$w = function(a, b) {
        var c = bx[b];
        if (!c) {
            var d = _.Yv(b);
            c = d;
            void 0 === a.style[d] && (d = (ut ? "Webkit" : tt ? "Moz" : _.rt ? "ms" : null) + Zv(d), void 0 !== a.style[d] && (c = d));
            bx[b] = c
        }
        return c
    };
    _.cx = function(a, b) {
        var c = _.aw(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    };
    Tf = function(a, b) {
        return _.cx(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    };
    Oh = function(a) {
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
    };
    dx = function(a) {
        if (_.rt && !(8 <= Number(Ft))) return a.offsetParent;
        var b = _.aw(a),
            c = Tf(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = Tf(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    };
    ex = function(a) {
        var b = _.aw(a),
            c = new _.Mh(0, 0);
        var d = b ? _.aw(b) : document;
        d = !_.rt || 9 <= Number(Ft) || _.ew(bw(d).j) ? d.documentElement : d.body;
        if (a == d) return c;
        a = Oh(a);
        d = bw(b).j;
        b = gw(d);
        d = d.parentWindow || d.defaultView;
        b = _.rt && Ct("10") && d.pageYOffset != b.scrollTop ? new _.Mh(b.scrollLeft, b.scrollTop) : new _.Mh(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    Lh = function(a, b) {
        var c = new _.Mh(0, 0),
            d = _.hw(_.aw(a));
        if (!ot(d, "parent")) return c;
        do {
            var e = d == b ? ex(a) : _.fx(a);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };
    _.fx = function(a) {
        a = Oh(a);
        return new _.Mh(a.left, a.top)
    };
    _.gx = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    _.Uf = function(a, b) {
        if ("none" != Tf(b, "display")) return a(b);
        var c = b.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = a(b);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    };
    _.Vf = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = ut && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Oh(a), new _.Ph(a.right - a.left, a.bottom - a.top)) : new _.Ph(b, c)
    };
    var ti = function(a) {
        a = Xm(Ym(a)) || a;
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    };
    var hx = function(a, b) {
        if (u.globalThis.fetch) u.globalThis.fetch(a, {
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
    var ix = function(a, b, c, d) {
            this.B = a;
            this.H = b;
            this.l = c;
            this.D = d;
            this.m = [];
            this.j = null
        },
        jx = function(a) {
            var b = wd(a.m);
            a.H(a.B + "?e=1", b);
            a.m = [];
            a.j = null
        };
    ix.prototype.dd = function() {
        var a = this;
        this.m.push.apply(this.m, _.xd(ld.apply(0, arguments)));
        this.m.length >= this.D ? (null !== this.j && clearTimeout(this.j), this.j = setTimeout(function() {
            jx(a)
        }, 0)) : null === this.j && (this.j = setTimeout(function() {
            jx(a)
        }, this.l))
    };
    var Vr = function(a, b) {
        ix.call(this, "https://pagead2.googlesyndication.com/pagead/ping", hx, void 0 === a ? 1E3 : a, void 0 === b ? 100 : b)
    };
    _.N(Vr, ix);
    var S = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? !1 : b
        },
        kx = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? 0 : b
        },
        lx = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? "" : b
        },
        mx = function(a) {
            var b = void 0 === b ? [] : b;
            this.j = a;
            this.defaultValue = b
        };
    var rl, nx, ox, px, ui, qx, rx, sx, Pq, tx, ux, vx, wx, xx, yx, Yl, zx, Ax, Bx, Cx, Dx, Ex, Fx, Gx, Hx, xm, Ix, Jx, Kx, Nn, Up, Lx, Mx, Nx, Ox, Px, Qx, Rx, Sx, Tx, Ux, Vx, so, Zk, il, Yk, Wx, Xx, Yg, Yx, Uo, Zx, $x, ay, by, cy, dy, ey, ym, fy, Sm, Pm, gy, xk, tk, hy, Go, Ko, Io, iy, jy, ky, ly, $m, my, ny, oy, Ur, py, qy, ry, sy, ty, uy, vy, wy, xy, fg, yy, zy, Ay, Ue, By, Cy, Dy, ue, ne, Ey, Fy, lB, mB, ie, Jr, Kr, nB, bl, Lr, Ir, pB, qB, rB, sB, tB, vB, wB, xB, yB, zB, AB, BB, CB, DB;
    rl = new kx(1158);
    nx = new S(1122, !0);
    ox = new lx(3);
    px = new mx(481);
    ui = new kx(7, .1);
    qx = new S(212);
    rx = new S(411850510);
    sx = new kx(455645877);
    Pq = new kx(444965520, .01);
    tx = new kx(462420536);
    ux = new S(359351145);
    vx = new S(456267131);
    wx = new kx(448338836, .01);
    xx = new kx(427198696);
    yx = new kx(438663674);
    Yl = new S(447038262);
    zx = new S(23);
    Ax = new S(369430);
    Bx = new kx(462472615);
    Cx = new S(450691643);
    Dx = new S(432254233, !0);
    Ex = new kx(408380992, .01);
    Fx = new kx(377289019, 1E4);
    Gx = new kx(488);
    Hx = new kx(529, 20);
    xm = new lx(10);
    Ix = new kx(428094087);
    Jx = new S(456862842, !0);
    Kx = new kx(457493500);
    Nn = new S(456782043, !0);
    Up = new kx(447000223, .01);
    Lx = new kx(430268223);
    Mx = new S(427841102);
    Nx = new kx(434620574);
    Ox = new S(360245597, !0);
    Px = new kx(494, 5E3);
    Qx = new kx(517, .01);
    Rx = new S(453775731);
    Sx = new S(462164571);
    Tx = new S(371390390);
    Ux = new S(220);
    Vx = new S(200);
    so = new S(323);
    Zk = new kx(388529191);
    il = new kx(492, .01);
    Yk = new S(423059401, !0);
    _.im = new S(430565960);
    Wx = new kx(363650251);
    Xx = new S(83);
    Yg = new S(85);
    Yx = new S(437061931);
    Uo = new S(455646166, !0);
    Zx = new S(45374286);
    $x = new kx(398776877, 6E4);
    ay = new S(437292966);
    by = new kx(374201269, 6E4);
    cy = new kx(371364213, 6E4);
    dy = new kx(376149757, .0025);
    ey = new S(453275889);
    ym = new S(422917270);
    fy = new S(377936516, !0);
    Sm = new S(421896358);
    Pm = new S(423820325);
    gy = new kx(24);
    xk = new mx(1);
    tk = new lx(2, "1-0-38");
    hy = new S(116);
    Go = new S(427203966);
    Ko = new S(442109935);
    Io = new S(441772725, !0);
    iy = new S(441529989);
    jy = new S(428624799);
    ky = new S(437308144);
    ly = new mx(489);
    $m = new S(392065905);
    my = new kx(360245595, 500);
    ny = new kx(432023148);
    oy = new S(424117738);
    Ur = new kx(397316938, 1E3);
    py = new S(444587044);
    qy = new S(440148284, !0);
    ry = new S(440148283);
    sy = new S(444587045);
    ty = new S(440148282);
    uy = new S(399705355);
    vy = new S(460998422);
    wy = new S(458280329);
    xy = new S(460868644);
    fg = new kx(425668704, 15360);
    yy = new S(501);
    zy = new lx(363931022);
    Ay = new S(439828594);
    Ue = new S(1930);
    By = new S(453);
    Cy = new S(454);
    Dy = new S(426169223);
    ue = new S(461886408);
    ne = new kx(360261971);
    Ey = new kx(1921, 72);
    Fy = new kx(1920, 24);
    lB = new kx(426169222, 1E3);
    mB = new kx(1917, 300);
    ie = new kx(1916, .001);
    Jr = new S(77);
    Kr = new S(78);
    nB = new S(1961);
    bl = new S(309);
    Lr = new S(80);
    Ir = new S(76);
    _.oB = new S(1947, !0);
    pB = new S(84);
    qB = new S(1958);
    rB = new S(1973);
    sB = new S(188);
    tB = new S(1971);
    _.uB = new kx(1972);
    vB = new S(1928);
    wB = new S(1941);
    xB = new S(370946349);
    yB = new S(392736476);
    zB = new kx(406149835);
    AB = new S(397841828);
    BB = new S(432946749);
    CB = new S(432938498);
    DB = new kx(432059203);
    var EB = function(a, b, c, d, e, f) {
            try {
                var g = a.j,
                    h = _.Ld("SCRIPT", g);
                h.async = !0;
                Wa(h, b);
                g.head.appendChild(h);
                h.addEventListener("load", function() {
                    e();
                    d && g.head.removeChild(h)
                });
                h.addEventListener("error", function() {
                    0 < c ? EB(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
                })
            } catch (k) {
                f()
            }
        },
        FB = function(a, b, c, d) {
            c = void 0 === c ? function() {} : c;
            d = void 0 === d ? function() {} : d;
            EB(bw(a), b, 0, !1, c, d)
        };
    ta({
        rg: 0,
        qg: 1,
        ng: 2,
        ig: 3,
        og: 4,
        jg: 5,
        pg: 6,
        lg: 7,
        mg: 8,
        hg: 9,
        kg: 10
    }).map(function(a) {
        return Number(a)
    });
    ta({
        tg: 0,
        ug: 1,
        sg: 2
    }).map(function(a) {
        return Number(a)
    });
    var GB = function(a) {
        var b = a.document,
            c = function() {
                if (!a.frames.googlefcPresent)
                    if (b.body) {
                        var d = _.Ld("IFRAME", b);
                        d.style.display = "none";
                        d.style.width = "0px";
                        d.style.height = "0px";
                        d.style.border = "none";
                        d.style.zIndex = "-1000";
                        d.style.left = "-1000px";
                        d.style.top = "-1000px";
                        d.name = "googlefcPresent";
                        b.body.appendChild(d)
                    } else a.setTimeout(c, 5)
            };
        c()
    };
    _.HB = function() {
        this.D = this.D;
        this.ra = this.ra
    };
    _.HB.prototype.D = !1;
    _.HB.prototype.Ba = function() {
        this.D || (this.D = !0, this.H())
    };
    _.Pn = function(a, b) {
        _.to(a, _.Gs(Bd, b))
    };
    _.to = function(a, b) {
        a.D ? b() : (a.ra || (a.ra = []), a.ra.push(b))
    };
    _.HB.prototype.H = function() {
        if (this.ra)
            for (; this.ra.length;) this.ra.shift()()
    };
    var IB = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        JB = function(a, b, c) {
            b = void 0 === b ? 500 : b;
            c = void 0 === c ? !1 : c;
            _.HB.call(this);
            this.j = a;
            this.m = null;
            this.I = {};
            this.M = 0;
            this.o = b;
            this.l = c;
            this.B = null
        };
    _.N(JB, _.HB);
    JB.prototype.H = function() {
        this.I = {};
        this.B && (_.Md(this.j, "message", this.B), delete this.B);
        delete this.I;
        delete this.j;
        delete this.m;
        _.HB.prototype.H.call(this)
    };
    var LB = function(a) {
        return "function" === typeof a.j.__tcfapi || null != KB(a)
    };
    JB.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.l
            },
            d = _.Ho(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.o && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.o));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = IB(c), c.internalBlockOnErrors = b.l, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            MB(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    JB.prototype.removeEventListener = function(a) {
        a && a.listenerId && MB(this, "removeEventListener", null, a.listenerId)
    };
    var OB = function(a, b) {
            var c = {
                    internalErrorState: 0,
                    internalBlockOnErrors: a.l
                },
                d = _.Ho(function() {
                    return b(c)
                }),
                e = 0; - 1 !== a.o && (e = setTimeout(function() {
                c.tcString = "tcunavailable";
                c.internalErrorState = 1;
                d()
            }, a.o));
            MB(a, "addEventListener", function(f, g) {
                var h = e;
                h && clearTimeout(h);
                g && (c = f);
                c.internalErrorState = IB(c);
                c.internalBlockOnErrors = a.l;
                0 != c.internalErrorState && (c.tcString = "tcunavailable");
                if (a.l) NB(c) && (MB(a, "removeEventListener", null, c.listenerId), d());
                else if (0 != c.internalErrorState || NB(c)) MB(a, "removeEventListener", null, c.listenerId), d()
            })
        },
        PB = function(a, b) {
            var c = void 0 === c ? "755" : c;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var d = a.publisher.restrictions[b];
                    if (void 0 !== d) {
                        d = d[void 0 === c ? "755" : c];
                        break a
                    }
                }
                d = void 0
            }
            if (0 === d) return !1;
            a.purpose && a.vendor ? (d = a.vendor.consents, (c = !(!d || !d[void 0 === c ? "755" : c])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents, c = !(!a || !a[b])), b = c)) : b = !0;
            return b
        },
        MB = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.j.__tcfapi) a = a.j.__tcfapi, a(b, 2, c, d);
            else if (KB(a)) {
                QB(a);
                var e = ++a.M;
                a.I[e] = c;
                a.m && (c = {}, a.m.postMessage((c.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }, c), "*"))
            } else c({}, !1)
        },
        KB = function(a) {
            if (a.m) return a.m;
            a.m = Cw(a.j, "__tcfapiLocator");
            return a.m
        },
        QB = function(a) {
            a.B || (a.B = function(b) {
                try {
                    var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.I[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, _.ab(a.j, "message", a.B))
        },
        NB = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = IB(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? !a.internalBlockOnErrors : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        },
        RB = function(a, b) {
            return !1 === a.gdprApplies ? !0 : b.every(function(c) {
                return PB(a, c)
            })
        };
    var SB = function(a, b, c) {
            this.j = a;
            this.D = b;
            this.m = void 0 === c ? function() {} : c
        },
        TB = function(a, b, c) {
            return new SB(a, b, c)
        };
    SB.prototype.start = function() {
        if (this.j === this.j.top) try {
            GB(this.j), UB(this)
        } catch (a) {}
    };
    var UB = function(a) {
        var b = jb(new gf(Is, "https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {
            id: a.D,
            ers: 3
        });
        FB(a.j, b, function() {
            a.m(!0)
        }, function() {
            a.m(!1)
        })
    };
    var VB = u.Promise;
    var WB = function(a) {
        this.m = a
    };
    WB.prototype.send = function(a, b, c) {
        this.m.then(function(d) {
            d.send(a, b, c)
        })
    };
    WB.prototype.j = function(a, b) {
        return this.m.then(function(c) {
            return c.j(a, b)
        })
    };
    var XB = function(a) {
        this.data = a
    };
    var YB = function(a) {
        this.m = a
    };
    YB.prototype.send = function(a, b, c) {
        c = void 0 === c ? [] : c;
        var d = new MessageChannel;
        ZB(d.port1, b);
        this.m.postMessage(a, [d.port2].concat(c))
    };
    YB.prototype.j = function(a, b) {
        var c = this;
        return new VB(function(d) {
            c.send(a, d, b)
        })
    };
    var $B = function(a, b) {
            ZB(a, b);
            return new YB(a)
        },
        ZB = function(a, b) {
            b && (a.onmessage = function(c) {
                b(new XB(c.data, $B(c.ports[0])))
            })
        };
    var Ni = function(a) {
            var b = a.bc,
                c = void 0 === a.Ka ? "ZNWN1d" : a.Ka,
                d = void 0 === a.onMessage ? void 0 : a.onMessage,
                e = void 0 === a.qc ? void 0 : a.qc;
            return aC({
                destination: a.destination,
                Dd: function() {
                    return b.contentWindow
                },
                cf: bC(a.origin),
                Ka: c,
                onMessage: d,
                qc: e
            })
        },
        aC = function(a) {
            var b = a.destination,
                c = a.Dd,
                d = a.cf,
                e = void 0 === a.fd ? void 0 : a.fd,
                f = a.Ka,
                g = void 0 === a.onMessage ? void 0 : a.onMessage,
                h = void 0 === a.qc ? void 0 : a.qc,
                k = Object.create(null);
            d.forEach(function(l) {
                k[l] = !0
            });
            return new WB(new VB(function(l, m) {
                var n = function(p) {
                    if (p.source && p.source === c())
                        if (!0 !== k[p.origin]) {
                            b.removeEventListener("message", n, !1);
                            var r = d.join(", ");
                            m(Error('Origin mismatch while establishing channel "' + f + '". Expected ' + (1 === d.length ? r : "one of [" + r + "]") + ", but received " + p.origin + "."))
                        } else(p.data.n || p.data) === f && (b.removeEventListener("message", n, !1), e && p.data.t !== e ? m(Error('Token mismatch while establishing channel "' + f + '". Expected ' + e + ", but received " + p.data.t + ".")) : (l($B(p.ports[0], g)), h && h(p)))
                };
                b.addEventListener("message", n, !1)
            }))
        },
        bC = function(a) {
            a = "string" === typeof a ? [a] : a;
            var b = Object.create(null);
            a.forEach(function(c) {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };
    var Cd = void 0;
    var Gg = function(a) {
        return "string" === typeof a
    };
    var cC = new Yw,
        dC = new u.Map(cC.j.H);
    dC.set("style", {
        ua: 4
    });
    cC.j = new Vw(cC.j.j, cC.j.D, cC.j.m, dC);
    var eC = new u.Map(cC.j.H);
    eC.set("class", {
        ua: 1
    });
    cC.j = new Vw(cC.j.j, cC.j.D, cC.j.m, eC);
    var fC = new u.Map(cC.j.H);
    fC.set("id", {
        ua: 1
    });
    cC.j = new Vw(cC.j.j, cC.j.D, cC.j.m, fC);
    cC.build();
    var zn = function(a) {
        Q.call(this, a)
    };
    _.N(zn, Q);
    var yn = function(a, b) {
            return v(a, 1, b)
        },
        xn = function(a, b) {
            return v(a, 2, b)
        },
        wn = function(a, b) {
            return v(a, 3, b)
        },
        vn = function(a, b) {
            return v(a, 5, b)
        },
        un = function(a, b) {
            return v(a, 6, b)
        };
    var En = function(a) {
        Q.call(this, a, -1, gC)
    };
    _.N(En, Q);
    var Dn = function(a, b) {
            return kg(a, 1, b)
        },
        Cn = function(a, b) {
            return v(a, 2, b)
        },
        gC = [1];
    var tn = function(a) {
        Q.call(this, a)
    };
    _.N(tn, Q);
    var sn = function(a, b) {
        return Kc(a, 1, b)
    };
    var on = function(a) {
        Q.call(this, a)
    };
    _.N(on, Q);
    var nn = function(a, b) {
            return Kc(a, 1, b)
        },
        mn = function(a, b) {
            return Kc(a, 2, b)
        },
        rn = function(a) {
            Q.call(this, a)
        };
    _.N(rn, Q);
    rn.prototype.getWidth = function() {
        return Wd(this, 1, 0)
    };
    var qn = function(a, b) {
        return v(a, 1, b)
    };
    rn.prototype.getHeight = function() {
        return Wd(this, 2, 0)
    };
    var pn = function(a, b) {
        return v(a, 2, b)
    };
    var Bn = function(a) {
        Q.call(this, a)
    };
    _.N(Bn, Q);
    var An = function(a, b) {
        return Kc(a, 1, b)
    };
    var iC = function(a) {
        Q.call(this, a, -1, hC)
    };
    _.N(iC, Q);
    var Kn = function(a) {
            var b = new iC;
            return Kc(b, 1, a)
        },
        Jn = function(a, b) {
            return Kc(a, 2, b)
        },
        In = function(a, b) {
            return Kc(a, 3, b)
        },
        Hn = function(a) {
            var b = ke();
            return kg(a, 4, b)
        },
        Gn = function(a, b) {
            return Kc(a, 6, b)
        },
        Fn = function(a, b) {
            return oc(a, 7, b, 0)
        },
        hC = [4];
    var jC = function(a) {
        Q.call(this, a)
    };
    _.N(jC, Q);
    var kC = function(a) {
        Q.call(this, a)
    };
    _.N(kC, Q);
    var Wg = function(a) {
        Q.call(this, a)
    };
    _.N(Wg, Q);
    var og = function(a) {
        Q.call(this, a)
    };
    _.N(og, Q);
    var lg = function(a) {
        Q.call(this, a)
    };
    _.N(lg, Q);
    var lC = function(a) {
        Q.call(this, a)
    };
    _.N(lC, Q);
    var jg = function(a) {
        Q.call(this, a, -1, mC)
    };
    _.N(jg, Q);
    jg.prototype.getTagSessionCorrelator = function() {
        return Wd(this, 2, 0)
    };
    var mC = [4],
        qg = [6, 7, 8, 9, 11];
    var fh = function(a) {
        Q.call(this, a, -1, nC)
    };
    _.N(fh, Q);
    var nC = [3];
    var eh = function(a) {
        Q.call(this, a, -1, oC)
    };
    _.N(eh, Q);
    var oC = [4];
    var dh = function(a) {
        Q.call(this, a, -1, pC)
    };
    _.N(dh, Q);
    dh.prototype.getTagSessionCorrelator = function() {
        return Wd(this, 1, 0)
    };
    var pC = [2];
    var ch = function(a) {
        Q.call(this, a)
    };
    _.N(ch, Q);
    var ih = [4];
    var qC = navigator,
        rC = function(a) {
            var b = 1,
                c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        sC = function(a, b) {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return rC(a.toLowerCase())
        },
        tC = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        uC = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        vC = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var Jh = function(a) {
            return !!a && a.top == a
        },
        wC = function(a, b, c) {
            b = b || a.google_ad_width;
            c = c || a.google_ad_height;
            if (Jh(a)) return !1;
            var d = a.document,
                e = d.documentElement;
            if (b && c) {
                var f = 1,
                    g = 1;
                a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : d.body && (f = d.body.clientWidth, g = d.body.clientHeight);
                if (g > 2 * c || f > 2 * b) return !1
            }
            return !0
        };
    var xC = function(a) {
        a = void 0 === a ? window : a;
        return a._gmptnl ? "afma-gpt-sdk-a" : a.webkit && a.webkit.messageHandlers && a.webkit.messageHandlers._gmptnl ? "afma-gpt-sdk-i" : null
    };
    var ni = function() {
        this.j = [];
        this.m = -1
    };
    ni.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && _.t(Number, "isInteger").call(Number, a) && this.j[a] !== b && (this.j[a] = b, this.m = -1)
    };
    ni.prototype.get = function(a) {
        return !!this.j[a]
    };
    var pi = function(a) {
        -1 === a.m && (a.m = Ls(a.j, function(b, c, d) {
            return c ? b + Math.pow(2, d) : b
        }));
        return a.m
    };
    var Pd = function(a) {
        Q.call(this, a, -1, yC)
    };
    _.N(Pd, Q);
    var Qd = function(a, b) {
            Jj(a, 1, Vd, b)
        },
        Vd = function(a) {
            Q.call(this, a)
        };
    _.N(Vd, Q);
    var Td = function(a) {
            var b = new Vd;
            return oc(b, 1, a, 0)
        },
        Sd = function(a, b) {
            return oc(a, 2, b, 0)
        },
        yC = [1];
    var be, jq;
    _.zC = function(a, b, c, d) {
        Nd(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d)
    };
    be = function(a, b) {
        var c = void 0 === c ? !1 : c;
        var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        _.Bk(a, function(e, f) {
            e && (d += "&" + f + "=" + encodeURIComponent(e))
        });
        jq(d, c)
    };
    jq = function(a, b) {
        var c = window;
        b = void 0 === b ? !1 : b;
        c.fetch ? c.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : _.zC(c, a, void 0, b)
    };
    var fe = function(a) {
            this.j = a || {
                cookie: ""
            }
        },
        CC = function() {
            var a = AC;
            if (!_.q.navigator.cookieEnabled) return !1;
            if (!a.isEmpty()) return !0;
            a.set("TESTCOOKIESENABLED", "1", {
                Sc: 60
            });
            if ("1" !== a.get("TESTCOOKIESENABLED")) return !1;
            BC(a, "TESTCOOKIESENABLED");
            return !0
        };
    fe.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Xg;
            d = c.qf || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Sc
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    fe.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Ss(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    var BC = function(a, b, c, d) {
        a.get(b);
        a.set(b, "", {
            Sc: 0,
            path: c,
            domain: d
        })
    };
    fe.prototype.isEmpty = function() {
        return !this.j.cookie
    };
    fe.prototype.clear = function() {
        for (var a = (this.j.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Ss(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) BC(this, b[a])
    };
    var AC = new fe("undefined" == typeof document ? null : document);
    var DC = null,
        wm = function() {
            if (null === DC) {
                DC = "";
                try {
                    var a = "";
                    try {
                        a = _.q.top.location.hash
                    } catch (c) {
                        a = _.q.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        DC = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return DC
        };
    var EC, ng;
    _.me = function(a) {
        a = void 0 === a ? _.q : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : vf()
    };
    _.Qm = function(a) {
        a = void 0 === a ? _.q : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    EC = function(a, b) {
        b = void 0 === b ? _.q : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    };
    ng = function(a) {
        a = void 0 === a ? _.q : a;
        var b = Math.min(EC("domLoading", a) || Infinity, EC("domInteractive", a) || Infinity);
        return Infinity == b ? Math.max(EC("responseEnd", a), EC("navigationStart", a)) : b
    };
    var FC = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.uniqueId = Math.random();
        this.slotId = e;
        this.taskId = void 0
    };
    var $g = _.q.performance,
        GC = !!($g && $g.mark && $g.measure && $g.clearMarks),
        ah = Xh(function() {
            var a;
            if (a = GC) a = wm(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        }),
        HC = function(a, b) {
            this.m = [];
            var c = null;
            b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.m = b.google_js_reporting_queue, c = b.google_measure_js_timing);
            this.j = ah() || (null != c ? c : Math.random() < a)
        },
        IC = function(a, b, c, d, e, f) {
            a.j && (b = new FC(b, c, d, void 0 === e ? 0 : e, f), !a.j || 2048 < a.m.length || a.m.push(b))
        };
    HC.prototype.start = function(a, b) {
        if (!this.j) return null;
        a = new FC(a, b, _.Qm() || _.me());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        $g && ah() && $g.mark(b);
        return a
    };
    HC.prototype.end = function(a) {
        if (this.j && "number" === typeof a.value) {
            a.duration = (_.Qm() || _.me()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            $g && ah() && $g.mark(b);
            !this.j || 2048 < this.m.length || this.m.push(a)
        }
    };
    var JC = function(a, b, c) {
        var d = _.Qm();
        d && IC(a, b, 9, d, 0, c)
    };
    var Sk = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.t(Object, "setPrototypeOf").call(Object, this, Sk.prototype)
    };
    _.N(Sk, Error);
    Sk.prototype.name = "PublisherInputError";
    var KC = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.t(Object, "setPrototypeOf").call(Object, this, KC.prototype)
    };
    _.N(KC, Error);
    KC.prototype.name = "ServerError";
    var LC = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.t(Object, "setPrototypeOf").call(Object, this, LC.prototype)
    };
    _.N(LC, Error);
    LC.prototype.name = "NetworkError";
    var MC;
    MC = {
        xg: 0,
        fe: 3,
        he: 4,
        yg: 5
    };
    var NC = MC.fe,
        OC = MC.he;
    _.E = function(a) {
        var b = "gb";
        if (a.gb && a.hasOwnProperty(b)) return a.gb;
        b = new a;
        return a.gb = b
    };
    var PC = vw();
    var QC = function(a) {
            this.methodName = a
        },
        RC = new QC(1),
        SC = new QC(16),
        TC = new QC(15),
        UC = new QC(2),
        VC = new QC(3),
        WC = new QC(5),
        XC = new QC(6),
        YC = new QC(7),
        ZC = new QC(8),
        $C = new QC(14),
        aD = function(a, b, c) {
            return b[a.methodName] || c || function() {}
        };
    var bD = function() {
            this.j = function() {};
            this.D = function() {};
            this.m = function() {
                return []
            };
            this.H = function() {
                return []
            }
        },
        cD = function(a, b) {
            a.j = aD(RC, b, function() {});
            a.m = function(c) {
                return aD(UC, b, function() {
                    return []
                })(c, 2)
            };
            a.H = function() {
                return aD(VC, b, function() {
                    return []
                })(2)
            };
            a.D = function(c) {
                aD(SC, b, function() {})(c, 2)
            }
        },
        dD = function(a) {
            _.E(bD).j(a)
        },
        Rr = function(a) {
            _.E(bD).D(a)
        },
        Sr = function(a) {
            return _.E(bD).m(a)
        },
        ke = function() {
            return _.E(bD).H()
        };
    var eD, sk, wk;
    eD = function() {
        var a = {};
        this.m = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.D = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.H = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.B = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function() {}
    };
    _.B = function(a) {
        return _.E(eD).m(a.j, a.defaultValue)
    };
    _.A = function(a) {
        return _.E(eD).D(a.j, a.defaultValue)
    };
    sk = function(a) {
        return _.E(eD).H(a.j, a.defaultValue)
    };
    wk = function(a) {
        return _.E(eD).B(a.j, a.defaultValue)
    };
    var fD = function() {};
    fD.j = function() {
        throw Error("Must be overridden");
    };
    var he = function() {
        this.j = 0
    };
    _.N(he, fD);
    he.gb = void 0;
    he.j = function() {
        return he.gb ? he.gb : he.gb = new he
    };
    var gD = function() {
            this.cache = {}
        },
        pe = function() {
            hD || (iD = _.A(Fy), jD = _.A(Ey), hD = new gD);
            return hD
        },
        ve = function(a) {
            var b = F(a, 3);
            if (!b) return 3;
            if (void 0 === F(a, 2)) return 4;
            a = Date.now();
            return a > b + 36E5 * jD ? 2 : a > b + 36E5 * iD ? 1 : 0
        };
    gD.prototype.get = function(a, b) {
        if (this.cache[a]) return {
            lb: this.cache[a],
            success: !0
        };
        var c = "";
        try {
            c = b.getItem("_GESPSK-" + a)
        } catch (g) {
            var d;
            le(6, a, null == (d = g) ? void 0 : d.message);
            return {
                lb: null,
                success: !1
            }
        }
        if (!c) return {
            lb: null,
            success: !0
        };
        try {
            var e = Od(xe, c);
            this.cache[a] = e;
            return {
                lb: e,
                success: !0
            }
        } catch (g) {
            var f;
            le(5, a, null == (f = g) ? void 0 : f.message);
            return {
                lb: null,
                success: !1
            }
        }
    };
    gD.prototype.set = function(a, b) {
        var c = F(a, 1),
            d = "_GESPSK-" + c;
        v(a, 3, Date.now());
        try {
            b.setItem(d, a.Y())
        } catch (f) {
            var e;
            le(7, c, null == (e = f) ? void 0 : e.message);
            return !1
        }
        this.cache[c] = a;
        return !0
    };
    var hD = null,
        iD = 24,
        jD = 72;
    var re = function(a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    };
    var kD = function() {
        _.HB.apply(this, arguments);
        this.j = [];
        this.m = [];
        this.B = []
    };
    _.N(kD, _.HB);
    var lD = function(a, b, c) {
        a.m.push({
            kd: void 0 === c ? !1 : c,
            ud: b
        })
    };
    kD.prototype.H = function() {
        this.j.length = 0;
        this.B.length = 0;
        this.m.length = 0;
        _.HB.prototype.H.call(this)
    };
    _.Mf = function() {
        var a = this;
        this.promise = new u.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    var mD = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.t(Object, "setPrototypeOf").call(Object, this, mD.prototype);
        this.name = "InputError"
    };
    _.N(mD, Error);
    var nD = function() {
            var a = this;
            this.M = this.D = null;
            this.l = -1;
            this.H = new _.Mf;
            this.m = !1;
            this.H.promise.then(function() {
                -1 !== a.l && (a.M = _.me() - a.l)
            }, function() {})
        },
        oD = function() {
            nD.apply(this, arguments)
        };
    _.N(oD, nD);
    $r.Object.defineProperties(oD.prototype, {
        promise: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.H.promise
            }
        },
        B: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.m
            }
        },
        I: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.M
            }
        }
    });
    var Sq = function() {
        oD.apply(this, arguments)
    };
    _.N(Sq, oD);
    Sq.prototype.j = function(a) {
        this.m || (this.m = !0, this.D = a, this.H.resolve(a))
    };
    var qD = function(a, b) {
            null == b ? pD(a) : a.j(b)
        },
        pD = function(a) {
            a.m || (a.m = !0, a.D = null, a.H.resolve(null))
        },
        rD = function(a, b) {
            a.m || (a.m = !0, a.D = null, a.o = b, a.H.reject(b))
        },
        sD = function(a) {
            nD.call(this);
            this.j = a
        };
    _.N(sD, nD);
    $r.Object.defineProperties(sD.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.j.o
            }
        }
    });
    var tD = function(a) {
        sD.call(this, a);
        this.j = a
    };
    _.N(tD, sD);
    $r.Object.defineProperties(tD.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.j.D
            }
        }
    });
    var uD = function() {
        sD.apply(this, arguments)
    };
    _.N(uD, sD);
    $r.Object.defineProperties(uD.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.j.D
            }
        }
    });
    var vD = function() {
        sD.apply(this, arguments)
    };
    _.N(vD, sD);
    $r.Object.defineProperties(vD.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.j.D
            }
        }
    });
    var wD = function() {
        oD.apply(this, arguments)
    };
    _.N(wD, oD);
    wD.prototype.notify = function() {
        this.m || (this.m = !0, this.D = null, this.H.resolve(null))
    };
    var xD = function(a, b) {
        b = void 0 === b ? 0 : b;
        _.HB.call(this);
        this.id = a;
        this.ia = b;
        this.da = !1;
        this.M = -1;
        this.B = new kD;
        _.Pn(this, this.B)
    };
    _.N(xD, _.HB);
    xD.prototype.start = function() {
        var a = this,
            b, c, d, e, f;
        return _.cb(function(g) {
            switch (g.j) {
                case 1:
                    if (a.da) return g.return();
                    a.da = !0;
                    g.D = 2;
                    b = a;
                    return db(g, ze(a.B.m, a.ia), 4);
                case 4:
                    b.M = g.m;
                    if (a.D) {
                        g.j = 5;
                        break
                    }
                    for (var h = 0, k = _.w(a.B.B), l = k.next(); !l.done; l = k.next()) {
                        if (null === l.value.j.D) throw Error("missing input: " + a.id + "/" + h);
                        ++h
                    }
                    c = _.w(a.B.j);
                    for (d = c.next(); !d.done; d = c.next()) e = d.value, e.l = _.me();
                    return db(g, a.j(), 5);
                case 5:
                    fb(g, 0);
                    break;
                case 2:
                    f = hb(g);
                    if (a.D) return g.return();
                    f instanceof mD ? a.I(f) : f instanceof Error && (a.R(f), a.m(f));
                    g.j = 0
            }
        })
    };
    var T = function(a) {
            var b = new Sq;
            a.B.j.push(b);
            return b
        },
        yD = function(a) {
            var b = new wD;
            a.B.j.push(b);
            return b
        },
        U = function(a, b) {
            lD(a.B, b);
            b = new uD(b);
            a.B.B.push(b);
            return b
        },
        Y = function(a, b) {
            lD(a.B, b);
            return new tD(b)
        },
        zD = function(a, b) {
            lD(a.B, b, !0);
            return new tD(b)
        },
        AD = function(a, b) {
            lD(a.B, b)
        };
    xD.prototype.I = function() {};
    xD.prototype.m = function(a) {
        if (this.B.j.length) {
            a = new mD(a.message);
            for (var b = _.w(this.B.j), c = b.next(); !c.done; c = b.next())
                if (c = c.value, !c.B) {
                    var d = a;
                    c.m = !0;
                    c.o = d;
                    c.H.reject(d)
                }
        }
    };
    var BD = function(a, b) {
        xD.call(this, a);
        this.id = a;
        this.K = b
    };
    _.N(BD, xD);
    BD.prototype.R = function(a) {
        this.K(this.id, a)
    };
    var Oe = function(a, b, c, d) {
        BD.call(this, 658, d);
        this.collectorFunction = a;
        this.L = c;
        this.l = T(this);
        this.o = T(this);
        this.C = T(this);
        this.G = Y(this, b)
    };
    _.N(Oe, BD);
    Oe.prototype.j = function() {
        var a = this;
        if (this.G.value) {
            var b = function(f) {
                    a.l.j({
                        id: F(f, 1),
                        collectorGeneratedData: F(f, 2)
                    })
                },
                c = this.G.value,
                d = F(c, 1),
                e = ve(c);
            switch (e) {
                case 0:
                    le(24, d);
                    break;
                case 1:
                    le(25, d);
                    break;
                case 2:
                    le(26, d);
                    break;
                case 3:
                    le(9, d);
                    break;
                case 4:
                    le(23, d)
            }
            switch (e) {
                case 0:
                    b(c);
                    CD(this);
                    break;
                case 1:
                    b(c);
                    this.o.j(this.collectorFunction);
                    this.C.j(c);
                    break;
                case 3:
                case 2:
                case 4:
                    v(c, 2, null), se(d, c, this.collectorFunction, this.L).then(b), CD(this)
            }
        } else pD(this.l), CD(this)
    };
    var CD = function(a) {
        pD(a.o);
        pD(a.C)
    };
    var Ce = function(a, b, c) {
        BD.call(this, 1027, c);
        this.Ub = a;
        this.l = b;
        this.o = T(this)
    };
    _.N(Ce, BD);
    Ce.prototype.j = function() {
        var a = pe().get(this.Ub, this.l).lb;
        if (!a) {
            a = we(new xe, this.Ub);
            var b = _.A(ne) || null;
            a = v(a, 8, b);
            a = v(a, 3, Date.now());
            qe(a, 100, this.l)
        }
        this.o.j(a)
    };
    var Ne = function(a, b, c, d) {
        BD.call(this, 1030, d);
        this.o = b;
        this.C = c;
        this.l = T(this);
        this.G = Y(this, a)
    };
    _.N(Ne, BD);
    Ne.prototype.j = function() {
        var a = this.G.value;
        if (a) {
            var b, c = null != (b = oe(a, 8)) ? b : 0,
                d;
            b = null != (d = F(a, 7)) ? d : Date.now();
            1 > c && this.o ? (d = {}, le(22, F(a, 1), null, (d.t = String(b), d.cr = String(c), d.cs = String(ve(a)), d)), qe(a, 104, this.C), pD(this.l)) : this.l.j(a)
        } else pD(this.l)
    };
    var Me = function(a, b, c) {
        BD.call(this, 1029, c);
        this.l = b;
        this.o = T(this);
        this.C = Y(this, a)
    };
    _.N(Me, BD);
    Me.prototype.j = function() {
        var a = this.C.value;
        if (a) {
            var b = Date.now();
            if (this.l) {
                var c = oe(a, 8),
                    d, e = null != (d = F(a, 7)) ? d : b;
                c < this.l && v(a, 8, Math.min(c + Number((this.l * (b / 1E3 / 60 - e) / 60).toFixed(3)), this.l))
            }
            this.o.j(a)
        } else pD(this.o)
    };
    var Pe = function(a, b, c, d) {
        BD.call(this, 662, d);
        this.C = c;
        this.l = Y(this, a);
        this.o = Y(this, b)
    };
    _.N(Pe, BD);
    Pe.prototype.j = function() {
        var a = this;
        this.o.value && this.l.value && Ae().then(function() {
            var b = a.o.value;
            se(F(b, 1), b, a.l.value, a.C)
        })
    };
    var Le = function(a, b, c) {
        BD.call(this, 1028, c);
        this.o = b;
        this.l = T(this);
        this.C = Y(this, a)
    };
    _.N(Le, BD);
    Le.prototype.j = function() {
        var a = this.C.value;
        if (a) {
            var b = F(a, 1);
            this.o && (Gk(a, 8) || (le(33, b), v(a, 8, this.o)), Gk(a, 7) || (le(34, b), v(a, 7, Math.round(Date.now() / 1E3 / 60))));
            Gk(a, 3) || le(35, b);
            this.l.j(a)
        } else pD(this.l)
    };
    var Be = function() {
        _.HB.apply(this, arguments);
        this.j = []
    };
    _.N(Be, _.HB);
    var D = function(a, b) {
            _.Pn(a, b);
            a.j.push(b)
        },
        Qe = function(a) {
            a = _.w(a.j);
            for (var b = a.next(); !b.done; b = a.next()) b.value.start()
        };
    Be.prototype.H = function() {
        _.HB.prototype.H.call(this);
        this.j.length = 0
    };
    var We = function(a, b) {
        this.j = b;
        this.H = [];
        this.D = [];
        this.m = [];
        a = _.w(a);
        for (b = a.next(); !b.done; b = a.next()) this.push(b.value)
    };
    We.prototype.push = function(a) {
        if (a) {
            var b = a.id;
            a = a.collectorFunction;
            if ("string" !== typeof b) le(37, "invalid-id"), qe(we(new xe, b), 102, this.j);
            else if ("function" !== typeof a) le(14, b), qe(we(new xe, b), 105, this.j);
            else {
                b = Re(b, a, this.j, this.B);
                this.H.push(b);
                a = _.w(this.D);
                for (var c = a.next(); !c.done; c = a.next()) b.then(c.value)
            }
        } else le(39, ""), qe(we(new xe, "UNKNOWN_COLLECTOR_ID"), 110, this.j)
    };
    We.prototype.addOnSignalResolveCallback = function(a) {
        this.D.push(a);
        for (var b = _.w(this.H), c = b.next(); !c.done; c = b.next()) c.value.then(a)
    };
    We.prototype.addErrorHandler = function(a) {
        this.m.push(a)
    };
    We.prototype.B = function(a, b) {
        for (var c = _.w(this.m), d = c.next(); !d.done; d = c.next()) d = d.value, d(a, b)
    };
    var Ve = function(a) {
        this.push = function(b) {
            a.push(b)
        };
        this.addOnSignalResolveCallback = function(b) {
            a.addOnSignalResolveCallback(b)
        };
        this.addErrorHandler = function(b) {
            a.addErrorHandler(b)
        }
    };
    var GD, DD, FD;
    GD = function(a) {
        var b = {
                Je: !1
            },
            c = DD(a, ".google-auto-placed"),
            d = DD(a, "ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]"),
            e = DD(a, "ins.adsbygoogle[data-ad-format=autorelaxed]");
        var f = (_.ED(a) || DD(a, "div[id^=div-gpt-ad]")).concat(DD(a, "iframe[id^=google_ads_iframe]"));
        var g = DD(a, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"),
            h = DD(a, "ins.adsbygoogle-ablated-ad-slot"),
            k = DD(a, "div.googlepublisherpluginad"),
            l = DD(a, "html > ins.adsbygoogle"),
            m = [].concat(DD(a, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"), DD(a, "body ins.adsbygoogle"));
        a = [];
        b = _.w([
            [b.Lg, c],
            [b.Je, d],
            [b.Og, e],
            [b.Mg, f],
            [b.Pg, g],
            [b.Kg, h],
            [b.Ng, k],
            [b.Qg, l]
        ]);
        for (c = b.next(); !c.done; c = b.next()) d = _.w(c.value), c = d.next().value, d = d.next().value, !1 === c ? a = a.concat(d) : m = m.concat(d);
        m = FD(m);
        b = FD(a);
        a = m.slice(0);
        m = _.w(b);
        for (b = m.next(); !b.done; b = m.next())
            for (b = b.value, c = 0; c < a.length; c++)(b.contains(a[c]) || a[c].contains(b)) && a.splice(c, 1);
        return a
    };
    _.ED = function(a) {
        var b = Ye(a);
        return b ? _.Jf(Fc(b.pubads().getSlots(), function(c) {
            return a.document.getElementById(c.getSlotElementId())
        }), function(c) {
            return null != c
        }) : null
    };
    DD = function(a, b) {
        return da(a.document.querySelectorAll(b))
    };
    FD = function(a) {
        var b = [];
        a = _.w(a);
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
    var HD = 0,
        ID = md(hf(new gf(Is, "https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var JD = function() {
            this.j = function() {}
        },
        KD = function() {
            var a = _.E(Qr).o;
            _.E(JD).j(a)
        };
    var MD = function() {
            if (void 0 === b) {
                var a = void 0 === a ? _.q : a;
                var b = a.ggeac || (a.ggeac = {})
            }
            a = b;
            cD(_.E(bD), a);
            LD(b);
            _.E(JD).j = aD($C, b);
            _.E(eD).j()
        },
        LD = function(a) {
            var b = _.E(eD);
            b.m = function(c, d) {
                return aD(WC, a, function() {
                    return !1
                })(c, d, 2)
            };
            b.D = function(c, d) {
                return aD(XC, a, function() {
                    return 0
                })(c, d, 2)
            };
            b.H = function(c, d) {
                return aD(YC, a, function() {
                    return ""
                })(c, d, 2)
            };
            b.B = function(c, d) {
                return aD(ZC, a, function() {
                    return []
                })(c, d, 2)
            };
            b.j = function() {
                aD(TC, a)(2)
            }
        };
    var Bh = function(a, b, c) {
            a && null !== b && b != b.top && (b = b.top);
            try {
                return (void 0 === c ? 0 : c) ? (new _.Ph(b.innerWidth, b.innerHeight)).round() : _.fw(b || window).round()
            } catch (d) {
                return new _.Ph(-12245933, -12245933)
            }
        },
        ND = function(a) {
            return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
        },
        Dm = function(a, b) {
            b = void 0 === b ? _.q : b;
            a = a.scrollingElement || ND(a);
            return new _.Mh(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
        },
        $h = function(a) {
            try {
                return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
            } catch (b) {
                return !1
            }
        };
    var OD = function(a) {
        Q.call(this, a)
    };
    _.N(OD, Q);
    var ce = function(a) {
        return H(a, 5)
    };
    var PD = function(a) {
            this.j = a;
            this.m = 0
        },
        RD = function(a, b) {
            if (0 === a.m) {
                if (QD(a, "__gads", b)) b = !0;
                else {
                    var c = a.j;
                    ce(b) && ee(c) && (new fe(c.document)).set("GoogleAdServingTest", "Good", void 0);
                    if (c = "Good" === ge("GoogleAdServingTest", b, a.j)) {
                        var d = a.j;
                        ce(b) && ee(d) && BC(new fe(d.document), "GoogleAdServingTest")
                    }
                    b = c
                }
                a.m = b ? 2 : 1
            }
            return 2 === a.m
        },
        QD = function(a, b, c) {
            return c ? ge(b, c, a.j) : null
        },
        SD = function(a, b, c, d) {
            if (d) {
                var e = {
                    Sc: F(c, 2) - Date.now() / 1E3,
                    path: F(c, 3),
                    domain: F(c, 4),
                    qf: !1
                };
                a = a.j;
                ce(d) && ee(a) && (new fe(a.document)).set(b, F(c, 1), e)
            }
        },
        TD = function(a, b, c) {
            if (c && ge(b, c, a.j)) {
                var d = a.j.location.hostname;
                if ("localhost" === d) d = ["localhost"];
                else if (d = d.split("."), 2 > d.length) d = [];
                else {
                    for (var e = [], f = 0; f < d.length - 1; ++f) e.push(d.slice(f).join("."));
                    d = e
                }
                d = _.w(d);
                for (e = d.next(); !e.done; e = d.next()) f = a.j, ce(c) && ee(f) && BC(new fe(f.document), b, "/", e.value)
            }
        };
    var UD = {},
        VD = (UD[3] = md(hf(new gf(Is, "https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js"))), UD),
        WD = {},
        XD = (WD[3] = md(hf(new gf(Is, "https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js"))), WD);
    var YD = function(a) {
            this.j = a;
            this.m = lm()
        },
        ZD = function(a) {
            var b = {};
            _.Ks(a, function(c) {
                b[c.j] = c.m
            });
            return b
        };
    var $D = O(["https://adservice.google.com/adsid/integrator.", ""]),
        aE = O(["https://adservice.google.ad/adsid/integrator.", ""]),
        bE = O(["https://adservice.google.ae/adsid/integrator.", ""]),
        cE = O(["https://adservice.google.com.af/adsid/integrator.", ""]),
        dE = O(["https://adservice.google.com.ag/adsid/integrator.", ""]),
        eE = O(["https://adservice.google.com.ai/adsid/integrator.", ""]),
        fE = O(["https://adservice.google.al/adsid/integrator.", ""]),
        gE = O(["https://adservice.google.co.ao/adsid/integrator.", ""]),
        hE = O(["https://adservice.google.com.ar/adsid/integrator.", ""]),
        iE = O(["https://adservice.google.as/adsid/integrator.", ""]),
        jE = O(["https://adservice.google.at/adsid/integrator.", ""]),
        kE = O(["https://adservice.google.com.au/adsid/integrator.", ""]),
        lE = O(["https://adservice.google.az/adsid/integrator.", ""]),
        mE = O(["https://adservice.google.com.bd/adsid/integrator.", ""]),
        nE = O(["https://adservice.google.be/adsid/integrator.", ""]),
        oE = O(["https://adservice.google.bf/adsid/integrator.", ""]),
        pE = O(["https://adservice.google.bg/adsid/integrator.", ""]),
        qE = O(["https://adservice.google.com.bh/adsid/integrator.", ""]),
        rE = O(["https://adservice.google.bi/adsid/integrator.", ""]),
        sE = O(["https://adservice.google.bj/adsid/integrator.", ""]),
        tE = O(["https://adservice.google.com.bn/adsid/integrator.", ""]),
        uE = O(["https://adservice.google.com.bo/adsid/integrator.", ""]),
        vE = O(["https://adservice.google.com.br/adsid/integrator.", ""]),
        wE = O(["https://adservice.google.bs/adsid/integrator.", ""]),
        xE = O(["https://adservice.google.bt/adsid/integrator.", ""]),
        yE = O(["https://adservice.google.co.bw/adsid/integrator.", ""]),
        zE = O(["https://adservice.google.com.bz/adsid/integrator.", ""]),
        AE = O(["https://adservice.google.ca/adsid/integrator.", ""]),
        BE = O(["https://adservice.google.cd/adsid/integrator.", ""]),
        CE = O(["https://adservice.google.cf/adsid/integrator.", ""]),
        DE = O(["https://adservice.google.cg/adsid/integrator.", ""]),
        EE = O(["https://adservice.google.ch/adsid/integrator.", ""]),
        FE = O(["https://adservice.google.ci/adsid/integrator.", ""]),
        GE = O(["https://adservice.google.co.ck/adsid/integrator.", ""]),
        HE = O(["https://adservice.google.cl/adsid/integrator.", ""]),
        IE = O(["https://adservice.google.cm/adsid/integrator.", ""]),
        JE = O(["https://adservice.google.com.co/adsid/integrator.", ""]),
        KE = O(["https://adservice.google.co.cr/adsid/integrator.", ""]),
        LE = O(["https://adservice.google.com.cu/adsid/integrator.", ""]),
        ME = O(["https://adservice.google.cv/adsid/integrator.", ""]),
        NE = O(["https://adservice.google.com.cy/adsid/integrator.", ""]),
        OE = O(["https://adservice.google.cz/adsid/integrator.", ""]),
        PE = O(["https://adservice.google.de/adsid/integrator.", ""]),
        QE = O(["https://adservice.google.dj/adsid/integrator.", ""]),
        RE = O(["https://adservice.google.dk/adsid/integrator.", ""]),
        SE = O(["https://adservice.google.dm/adsid/integrator.", ""]),
        TE = O(["https://adservice.google.dz/adsid/integrator.", ""]),
        UE = O(["https://adservice.google.com.ec/adsid/integrator.", ""]),
        VE = O(["https://adservice.google.ee/adsid/integrator.", ""]),
        WE = O(["https://adservice.google.com.eg/adsid/integrator.", ""]),
        XE = O(["https://adservice.google.es/adsid/integrator.", ""]),
        YE = O(["https://adservice.google.com.et/adsid/integrator.", ""]),
        ZE = O(["https://adservice.google.fi/adsid/integrator.", ""]),
        $E = O(["https://adservice.google.com.fj/adsid/integrator.", ""]),
        aF = O(["https://adservice.google.fm/adsid/integrator.", ""]),
        bF = O(["https://adservice.google.fr/adsid/integrator.", ""]),
        cF = O(["https://adservice.google.ga/adsid/integrator.", ""]),
        dF = O(["https://adservice.google.ge/adsid/integrator.", ""]),
        eF = O(["https://adservice.google.gg/adsid/integrator.", ""]),
        fF = O(["https://adservice.google.com.gh/adsid/integrator.", ""]),
        gF = O(["https://adservice.google.com.gi/adsid/integrator.", ""]),
        hF = O(["https://adservice.google.gl/adsid/integrator.", ""]),
        iF = O(["https://adservice.google.gm/adsid/integrator.", ""]),
        jF = O(["https://adservice.google.gr/adsid/integrator.", ""]),
        kF = O(["https://adservice.google.com.gt/adsid/integrator.", ""]),
        lF = O(["https://adservice.google.gy/adsid/integrator.", ""]),
        mF = O(["https://adservice.google.com.hk/adsid/integrator.", ""]),
        nF = O(["https://adservice.google.hn/adsid/integrator.", ""]),
        oF = O(["https://adservice.google.hr/adsid/integrator.", ""]),
        pF = O(["https://adservice.google.ht/adsid/integrator.", ""]),
        qF = O(["https://adservice.google.hu/adsid/integrator.", ""]),
        rF = O(["https://adservice.google.co.id/adsid/integrator.", ""]),
        sF = O(["https://adservice.google.ie/adsid/integrator.", ""]),
        tF = O(["https://adservice.google.co.il/adsid/integrator.", ""]),
        uF = O(["https://adservice.google.im/adsid/integrator.", ""]),
        vF = O(["https://adservice.google.co.in/adsid/integrator.", ""]),
        wF = O(["https://adservice.google.iq/adsid/integrator.", ""]),
        xF = O(["https://adservice.google.is/adsid/integrator.", ""]),
        yF = O(["https://adservice.google.it/adsid/integrator.", ""]),
        zF = O(["https://adservice.google.je/adsid/integrator.", ""]),
        AF = O(["https://adservice.google.com.jm/adsid/integrator.", ""]),
        BF = O(["https://adservice.google.jo/adsid/integrator.", ""]),
        CF = O(["https://adservice.google.co.jp/adsid/integrator.", ""]),
        DF = O(["https://adservice.google.co.ke/adsid/integrator.", ""]),
        EF = O(["https://adservice.google.com.kh/adsid/integrator.", ""]),
        FF = O(["https://adservice.google.ki/adsid/integrator.", ""]),
        GF = O(["https://adservice.google.kg/adsid/integrator.", ""]),
        HF = O(["https://adservice.google.co.kr/adsid/integrator.", ""]),
        IF = O(["https://adservice.google.com.kw/adsid/integrator.", ""]),
        JF = O(["https://adservice.google.kz/adsid/integrator.", ""]),
        KF = O(["https://adservice.google.la/adsid/integrator.", ""]),
        LF = O(["https://adservice.google.com.lb/adsid/integrator.", ""]),
        MF = O(["https://adservice.google.li/adsid/integrator.", ""]),
        NF = O(["https://adservice.google.lk/adsid/integrator.", ""]),
        OF = O(["https://adservice.google.co.ls/adsid/integrator.", ""]),
        PF = O(["https://adservice.google.lt/adsid/integrator.", ""]),
        QF = O(["https://adservice.google.lu/adsid/integrator.", ""]),
        RF = O(["https://adservice.google.lv/adsid/integrator.", ""]),
        SF = O(["https://adservice.google.com.ly/adsid/integrator.", ""]),
        TF = O(["https://adservice.google.md/adsid/integrator.", ""]),
        UF = O(["https://adservice.google.me/adsid/integrator.", ""]),
        VF = O(["https://adservice.google.mg/adsid/integrator.", ""]),
        WF = O(["https://adservice.google.mk/adsid/integrator.", ""]),
        XF = O(["https://adservice.google.ml/adsid/integrator.", ""]),
        YF = O(["https://adservice.google.com.mm/adsid/integrator.", ""]),
        ZF = O(["https://adservice.google.mn/adsid/integrator.", ""]),
        $F = O(["https://adservice.google.ms/adsid/integrator.", ""]),
        aG = O(["https://adservice.google.com.mt/adsid/integrator.", ""]),
        bG = O(["https://adservice.google.mu/adsid/integrator.", ""]),
        cG = O(["https://adservice.google.mv/adsid/integrator.", ""]),
        dG = O(["https://adservice.google.mw/adsid/integrator.", ""]),
        eG = O(["https://adservice.google.com.mx/adsid/integrator.", ""]),
        fG = O(["https://adservice.google.com.my/adsid/integrator.", ""]),
        gG = O(["https://adservice.google.co.mz/adsid/integrator.", ""]),
        hG = O(["https://adservice.google.com.na/adsid/integrator.", ""]),
        iG = O(["https://adservice.google.com.ng/adsid/integrator.", ""]),
        jG = O(["https://adservice.google.com.ni/adsid/integrator.", ""]),
        kG = O(["https://adservice.google.ne/adsid/integrator.", ""]),
        lG = O(["https://adservice.google.nl/adsid/integrator.", ""]),
        mG = O(["https://adservice.google.no/adsid/integrator.", ""]),
        nG = O(["https://adservice.google.com.np/adsid/integrator.", ""]),
        oG = O(["https://adservice.google.nr/adsid/integrator.", ""]),
        pG = O(["https://adservice.google.nu/adsid/integrator.", ""]),
        qG = O(["https://adservice.google.co.nz/adsid/integrator.", ""]),
        rG = O(["https://adservice.google.com.om/adsid/integrator.", ""]),
        sG = O(["https://adservice.google.com.pa/adsid/integrator.", ""]),
        tG = O(["https://adservice.google.com.pe/adsid/integrator.", ""]),
        uG = O(["https://adservice.google.com.pg/adsid/integrator.", ""]),
        vG = O(["https://adservice.google.com.ph/adsid/integrator.", ""]),
        wG = O(["https://adservice.google.com.pk/adsid/integrator.", ""]),
        xG = O(["https://adservice.google.pl/adsid/integrator.", ""]),
        yG = O(["https://adservice.google.pn/adsid/integrator.", ""]),
        zG = O(["https://adservice.google.com.pr/adsid/integrator.", ""]),
        AG = O(["https://adservice.google.ps/adsid/integrator.", ""]),
        BG = O(["https://adservice.google.pt/adsid/integrator.", ""]),
        CG = O(["https://adservice.google.com.py/adsid/integrator.", ""]),
        DG = O(["https://adservice.google.com.qa/adsid/integrator.", ""]),
        EG = O(["https://adservice.google.ro/adsid/integrator.", ""]),
        FG = O(["https://adservice.google.ru/adsid/integrator.", ""]),
        GG = O(["https://adservice.google.rw/adsid/integrator.", ""]),
        HG = O(["https://adservice.google.com.sa/adsid/integrator.", ""]),
        IG = O(["https://adservice.google.com.sb/adsid/integrator.", ""]),
        JG = O(["https://adservice.google.sc/adsid/integrator.", ""]),
        KG = O(["https://adservice.google.se/adsid/integrator.", ""]),
        LG = O(["https://adservice.google.com.sg/adsid/integrator.", ""]),
        MG = O(["https://adservice.google.sh/adsid/integrator.", ""]),
        NG = O(["https://adservice.google.si/adsid/integrator.", ""]),
        OG = O(["https://adservice.google.sk/adsid/integrator.", ""]),
        PG = O(["https://adservice.google.sn/adsid/integrator.", ""]),
        QG = O(["https://adservice.google.so/adsid/integrator.", ""]),
        RG = O(["https://adservice.google.sm/adsid/integrator.", ""]),
        SG = O(["https://adservice.google.sr/adsid/integrator.", ""]),
        TG = O(["https://adservice.google.st/adsid/integrator.", ""]),
        UG = O(["https://adservice.google.com.sv/adsid/integrator.", ""]),
        VG = O(["https://adservice.google.td/adsid/integrator.", ""]),
        WG = O(["https://adservice.google.tg/adsid/integrator.", ""]),
        XG = O(["https://adservice.google.co.th/adsid/integrator.", ""]),
        YG = O(["https://adservice.google.com.tj/adsid/integrator.", ""]),
        ZG = O(["https://adservice.google.tl/adsid/integrator.", ""]),
        $G = O(["https://adservice.google.tm/adsid/integrator.", ""]),
        aH = O(["https://adservice.google.tn/adsid/integrator.", ""]),
        bH = O(["https://adservice.google.to/adsid/integrator.", ""]),
        cH = O(["https://adservice.google.com.tr/adsid/integrator.", ""]),
        dH = O(["https://adservice.google.tt/adsid/integrator.", ""]),
        eH = O(["https://adservice.google.com.tw/adsid/integrator.", ""]),
        fH = O(["https://adservice.google.co.tz/adsid/integrator.", ""]),
        gH = O(["https://adservice.google.com.ua/adsid/integrator.", ""]),
        hH = O(["https://adservice.google.co.ug/adsid/integrator.", ""]),
        iH = O(["https://adservice.google.co.uk/adsid/integrator.", ""]),
        jH = O(["https://adservice.google.com.uy/adsid/integrator.", ""]),
        kH = O(["https://adservice.google.co.uz/adsid/integrator.", ""]),
        lH = O(["https://adservice.google.com.vc/adsid/integrator.", ""]),
        mH = O(["https://adservice.google.co.ve/adsid/integrator.", ""]),
        nH = O(["https://adservice.google.vg/adsid/integrator.", ""]),
        oH = O(["https://adservice.google.co.vi/adsid/integrator.", ""]),
        pH = O(["https://adservice.google.com.vn/adsid/integrator.", ""]),
        qH = O(["https://adservice.google.vu/adsid/integrator.", ""]),
        rH = O(["https://adservice.google.ws/adsid/integrator.", ""]),
        sH = O(["https://adservice.google.rs/adsid/integrator.", ""]),
        tH = O(["https://adservice.google.co.za/adsid/integrator.", ""]),
        uH = O(["https://adservice.google.co.zm/adsid/integrator.", ""]),
        vH = O(["https://adservice.google.co.zw/adsid/integrator.", ""]),
        wH = O(["https://adservice.google.cat/adsid/integrator.", ""]),
        xH = new u.Map([
            [".google.com", function(a) {
                return x($D, a)
            }],
            [".google.ad", function(a) {
                return x(aE, a)
            }],
            [".google.ae", function(a) {
                return x(bE, a)
            }],
            [".google.com.af", function(a) {
                return x(cE, a)
            }],
            [".google.com.ag", function(a) {
                return x(dE, a)
            }],
            [".google.com.ai", function(a) {
                return x(eE, a)
            }],
            [".google.al", function(a) {
                return x(fE, a)
            }],
            [".google.co.ao", function(a) {
                return x(gE, a)
            }],
            [".google.com.ar", function(a) {
                return x(hE, a)
            }],
            [".google.as", function(a) {
                return x(iE, a)
            }],
            [".google.at", function(a) {
                return x(jE, a)
            }],
            [".google.com.au", function(a) {
                return x(kE, a)
            }],
            [".google.az", function(a) {
                return x(lE, a)
            }],
            [".google.com.bd", function(a) {
                return x(mE, a)
            }],
            [".google.be", function(a) {
                return x(nE, a)
            }],
            [".google.bf", function(a) {
                return x(oE, a)
            }],
            [".google.bg", function(a) {
                return x(pE, a)
            }],
            [".google.com.bh", function(a) {
                return x(qE, a)
            }],
            [".google.bi", function(a) {
                return x(rE, a)
            }],
            [".google.bj", function(a) {
                return x(sE, a)
            }],
            [".google.com.bn", function(a) {
                return x(tE, a)
            }],
            [".google.com.bo", function(a) {
                return x(uE, a)
            }],
            [".google.com.br", function(a) {
                return x(vE, a)
            }],
            [".google.bs", function(a) {
                return x(wE, a)
            }],
            [".google.bt", function(a) {
                return x(xE, a)
            }],
            [".google.co.bw", function(a) {
                return x(yE, a)
            }],
            [".google.com.bz", function(a) {
                return x(zE, a)
            }],
            [".google.ca", function(a) {
                return x(AE, a)
            }],
            [".google.cd", function(a) {
                return x(BE, a)
            }],
            [".google.cf", function(a) {
                return x(CE, a)
            }],
            [".google.cg", function(a) {
                return x(DE, a)
            }],
            [".google.ch", function(a) {
                return x(EE, a)
            }],
            [".google.ci", function(a) {
                return x(FE, a)
            }],
            [".google.co.ck", function(a) {
                return x(GE, a)
            }],
            [".google.cl", function(a) {
                return x(HE, a)
            }],
            [".google.cm", function(a) {
                return x(IE, a)
            }],
            [".google.com.co", function(a) {
                return x(JE, a)
            }],
            [".google.co.cr", function(a) {
                return x(KE, a)
            }],
            [".google.com.cu", function(a) {
                return x(LE, a)
            }],
            [".google.cv", function(a) {
                return x(ME, a)
            }],
            [".google.com.cy", function(a) {
                return x(NE, a)
            }],
            [".google.cz", function(a) {
                return x(OE, a)
            }],
            [".google.de", function(a) {
                return x(PE, a)
            }],
            [".google.dj", function(a) {
                return x(QE, a)
            }],
            [".google.dk", function(a) {
                return x(RE, a)
            }],
            [".google.dm", function(a) {
                return x(SE, a)
            }],
            [".google.dz", function(a) {
                return x(TE, a)
            }],
            [".google.com.ec", function(a) {
                return x(UE, a)
            }],
            [".google.ee", function(a) {
                return x(VE, a)
            }],
            [".google.com.eg", function(a) {
                return x(WE, a)
            }],
            [".google.es", function(a) {
                return x(XE, a)
            }],
            [".google.com.et", function(a) {
                return x(YE, a)
            }],
            [".google.fi", function(a) {
                return x(ZE, a)
            }],
            [".google.com.fj", function(a) {
                return x($E, a)
            }],
            [".google.fm", function(a) {
                return x(aF, a)
            }],
            [".google.fr", function(a) {
                return x(bF, a)
            }],
            [".google.ga", function(a) {
                return x(cF, a)
            }],
            [".google.ge", function(a) {
                return x(dF, a)
            }],
            [".google.gg", function(a) {
                return x(eF, a)
            }],
            [".google.com.gh", function(a) {
                return x(fF, a)
            }],
            [".google.com.gi", function(a) {
                return x(gF, a)
            }],
            [".google.gl", function(a) {
                return x(hF, a)
            }],
            [".google.gm", function(a) {
                return x(iF, a)
            }],
            [".google.gr", function(a) {
                return x(jF, a)
            }],
            [".google.com.gt", function(a) {
                return x(kF, a)
            }],
            [".google.gy", function(a) {
                return x(lF, a)
            }],
            [".google.com.hk", function(a) {
                return x(mF, a)
            }],
            [".google.hn", function(a) {
                return x(nF, a)
            }],
            [".google.hr", function(a) {
                return x(oF, a)
            }],
            [".google.ht", function(a) {
                return x(pF, a)
            }],
            [".google.hu", function(a) {
                return x(qF, a)
            }],
            [".google.co.id", function(a) {
                return x(rF, a)
            }],
            [".google.ie", function(a) {
                return x(sF, a)
            }],
            [".google.co.il", function(a) {
                return x(tF, a)
            }],
            [".google.im", function(a) {
                return x(uF, a)
            }],
            [".google.co.in", function(a) {
                return x(vF, a)
            }],
            [".google.iq", function(a) {
                return x(wF, a)
            }],
            [".google.is", function(a) {
                return x(xF, a)
            }],
            [".google.it", function(a) {
                return x(yF, a)
            }],
            [".google.je", function(a) {
                return x(zF, a)
            }],
            [".google.com.jm", function(a) {
                return x(AF, a)
            }],
            [".google.jo", function(a) {
                return x(BF, a)
            }],
            [".google.co.jp", function(a) {
                return x(CF, a)
            }],
            [".google.co.ke", function(a) {
                return x(DF, a)
            }],
            [".google.com.kh", function(a) {
                return x(EF, a)
            }],
            [".google.ki", function(a) {
                return x(FF, a)
            }],
            [".google.kg", function(a) {
                return x(GF, a)
            }],
            [".google.co.kr", function(a) {
                return x(HF, a)
            }],
            [".google.com.kw", function(a) {
                return x(IF, a)
            }],
            [".google.kz", function(a) {
                return x(JF, a)
            }],
            [".google.la", function(a) {
                return x(KF, a)
            }],
            [".google.com.lb", function(a) {
                return x(LF, a)
            }],
            [".google.li", function(a) {
                return x(MF, a)
            }],
            [".google.lk", function(a) {
                return x(NF, a)
            }],
            [".google.co.ls", function(a) {
                return x(OF, a)
            }],
            [".google.lt", function(a) {
                return x(PF, a)
            }],
            [".google.lu", function(a) {
                return x(QF, a)
            }],
            [".google.lv", function(a) {
                return x(RF, a)
            }],
            [".google.com.ly", function(a) {
                return x(SF, a)
            }],
            [".google.md", function(a) {
                return x(TF, a)
            }],
            [".google.me", function(a) {
                return x(UF, a)
            }],
            [".google.mg", function(a) {
                return x(VF, a)
            }],
            [".google.mk", function(a) {
                return x(WF, a)
            }],
            [".google.ml", function(a) {
                return x(XF, a)
            }],
            [".google.com.mm", function(a) {
                return x(YF, a)
            }],
            [".google.mn", function(a) {
                return x(ZF, a)
            }],
            [".google.ms", function(a) {
                return x($F, a)
            }],
            [".google.com.mt", function(a) {
                return x(aG, a)
            }],
            [".google.mu", function(a) {
                return x(bG, a)
            }],
            [".google.mv", function(a) {
                return x(cG, a)
            }],
            [".google.mw", function(a) {
                return x(dG, a)
            }],
            [".google.com.mx", function(a) {
                return x(eG, a)
            }],
            [".google.com.my", function(a) {
                return x(fG, a)
            }],
            [".google.co.mz", function(a) {
                return x(gG, a)
            }],
            [".google.com.na", function(a) {
                return x(hG, a)
            }],
            [".google.com.ng", function(a) {
                return x(iG, a)
            }],
            [".google.com.ni", function(a) {
                return x(jG, a)
            }],
            [".google.ne", function(a) {
                return x(kG, a)
            }],
            [".google.nl", function(a) {
                return x(lG, a)
            }],
            [".google.no", function(a) {
                return x(mG, a)
            }],
            [".google.com.np", function(a) {
                return x(nG, a)
            }],
            [".google.nr", function(a) {
                return x(oG, a)
            }],
            [".google.nu", function(a) {
                return x(pG, a)
            }],
            [".google.co.nz", function(a) {
                return x(qG, a)
            }],
            [".google.com.om", function(a) {
                return x(rG, a)
            }],
            [".google.com.pa", function(a) {
                return x(sG, a)
            }],
            [".google.com.pe", function(a) {
                return x(tG, a)
            }],
            [".google.com.pg", function(a) {
                return x(uG, a)
            }],
            [".google.com.ph", function(a) {
                return x(vG, a)
            }],
            [".google.com.pk", function(a) {
                return x(wG, a)
            }],
            [".google.pl", function(a) {
                return x(xG, a)
            }],
            [".google.pn", function(a) {
                return x(yG, a)
            }],
            [".google.com.pr", function(a) {
                return x(zG, a)
            }],
            [".google.ps", function(a) {
                return x(AG, a)
            }],
            [".google.pt", function(a) {
                return x(BG, a)
            }],
            [".google.com.py", function(a) {
                return x(CG, a)
            }],
            [".google.com.qa", function(a) {
                return x(DG, a)
            }],
            [".google.ro", function(a) {
                return x(EG, a)
            }],
            [".google.ru", function(a) {
                return x(FG, a)
            }],
            [".google.rw", function(a) {
                return x(GG, a)
            }],
            [".google.com.sa", function(a) {
                return x(HG, a)
            }],
            [".google.com.sb", function(a) {
                return x(IG, a)
            }],
            [".google.sc", function(a) {
                return x(JG, a)
            }],
            [".google.se", function(a) {
                return x(KG, a)
            }],
            [".google.com.sg", function(a) {
                return x(LG, a)
            }],
            [".google.sh", function(a) {
                return x(MG, a)
            }],
            [".google.si", function(a) {
                return x(NG, a)
            }],
            [".google.sk", function(a) {
                return x(OG, a)
            }],
            [".google.sn", function(a) {
                return x(PG, a)
            }],
            [".google.so", function(a) {
                return x(QG, a)
            }],
            [".google.sm", function(a) {
                return x(RG, a)
            }],
            [".google.sr", function(a) {
                return x(SG, a)
            }],
            [".google.st", function(a) {
                return x(TG, a)
            }],
            [".google.com.sv", function(a) {
                return x(UG, a)
            }],
            [".google.td", function(a) {
                return x(VG, a)
            }],
            [".google.tg", function(a) {
                return x(WG, a)
            }],
            [".google.co.th", function(a) {
                return x(XG, a)
            }],
            [".google.com.tj", function(a) {
                return x(YG, a)
            }],
            [".google.tl", function(a) {
                return x(ZG, a)
            }],
            [".google.tm", function(a) {
                return x($G, a)
            }],
            [".google.tn", function(a) {
                return x(aH, a)
            }],
            [".google.to", function(a) {
                return x(bH, a)
            }],
            [".google.com.tr", function(a) {
                return x(cH, a)
            }],
            [".google.tt", function(a) {
                return x(dH, a)
            }],
            [".google.com.tw", function(a) {
                return x(eH, a)
            }],
            [".google.co.tz", function(a) {
                return x(fH, a)
            }],
            [".google.com.ua", function(a) {
                return x(gH, a)
            }],
            [".google.co.ug", function(a) {
                return x(hH, a)
            }],
            [".google.co.uk", function(a) {
                return x(iH, a)
            }],
            [".google.com.uy", function(a) {
                return x(jH, a)
            }],
            [".google.co.uz", function(a) {
                return x(kH, a)
            }],
            [".google.com.vc", function(a) {
                return x(lH, a)
            }],
            [".google.co.ve", function(a) {
                return x(mH, a)
            }],
            [".google.vg", function(a) {
                return x(nH, a)
            }],
            [".google.co.vi", function(a) {
                return x(oH, a)
            }],
            [".google.com.vn", function(a) {
                return x(pH, a)
            }],
            [".google.vu", function(a) {
                return x(qH, a)
            }],
            [".google.ws", function(a) {
                return x(rH, a)
            }],
            [".google.rs", function(a) {
                return x(sH, a)
            }],
            [".google.co.za", function(a) {
                return x(tH, a)
            }],
            [".google.co.zm", function(a) {
                return x(uH, a)
            }],
            [".google.co.zw", function(a) {
                return x(vH, a)
            }],
            [".google.cat", function(a) {
                return x(wH, a)
            }]
        ].map(function(a) {
            var b = _.w(a);
            a = b.next().value;
            b = b.next().value;
            var c = {};
            return [a, (c.json = b("json"), c.js = b("js"), c["sync.js"] = b("sync.js"), c)]
        }));
    var yH = function(a, b, c) {
        var d = _.Ld("LINK", a);
        try {
            if (d.rel = "preload", Ba("preload", "stylesheet")) {
                d.href = Va(b).toString();
                var e = Vv('style[nonce],link[rel="stylesheet"][nonce]', d.ownerDocument && d.ownerDocument.defaultView);
                e && d.setAttribute("nonce", e)
            } else {
                if (b instanceof kf) var f = Va(b).toString();
                else {
                    if (b instanceof Ja) var g = Ka(b);
                    else {
                        if (b instanceof Ja) var h = b;
                        else b = "object" == typeof b && b.La ? b.Ea() : String(b), lf.test(b) || (b = "about:invalid#zClosurez"), h = _.td(b);
                        g = Ka(h)
                    }
                    f = g
                }
                d.href = f
            }
        } catch (k) {
            return
        }
        d.as = "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(d)
        } catch (k) {}
    };
    var cf = /^data-(?!xml)[_a-z][_a-z.0-9-]*$/;
    var tf = _.q,
        zH = function(a) {
            var b = new u.Map([
                ["domain", _.q.location.hostname]
            ]);
            uf[3] >= vf() && b.set("adsid", uf[1]);
            return qd(xH.get(a).js, b)
        },
        uf, AH, sf = function() {
            tf = _.q;
            uf = tf.googleToken = tf.googleToken || {};
            var a = vf();
            uf[1] && uf[3] > a && 0 < uf[2] || (uf[1] = "", uf[2] = -1, uf[3] = -1, uf[4] = "", uf[6] = "");
            AH = tf.googleIMState = tf.googleIMState || {};
            xH.has(AH[1]) || (AH[1] = ".google.com");
            Array.isArray(AH[5]) || (AH[5] = []);
            "boolean" !== typeof AH[6] && (AH[6] = !1);
            Array.isArray(AH[7]) || (AH[7] = []);
            "number" !== typeof AH[8] && (AH[8] = 0)
        },
        BH = function(a) {
            sf();
            xH.has(a) && (AH[1] = a)
        },
        Gf = {
            Nc: function() {
                return 0 < AH[8]
            },
            ff: function() {
                AH[8]++
            },
            gf: function() {
                0 < AH[8] && AH[8]--
            },
            hf: function() {
                AH[8] = 0
            },
            Zg: function() {
                return !1
            },
            Cd: function() {
                return AH[5]
            },
            od: function(a) {
                try {
                    a()
                } catch (b) {
                    _.q.setTimeout(function() {
                        throw b;
                    }, 0)
                }
            },
            Td: function() {
                if (!Gf.Nc()) {
                    var a = _.q.document,
                        b = function(e) {
                            e = zH(e);
                            a: {
                                try {
                                    var f = Vv("script[nonce]");
                                    break a
                                } catch (g) {}
                                f = void 0
                            }
                            yH(a, e.toString(), f);
                            f = _.Ld("SCRIPT", a);
                            f.type = "text/javascript";
                            f.onerror = function() {
                                return _.q.processGoogleToken({}, 2)
                            };
                            Wa(f, e);
                            try {
                                (a.head || a.body || a.documentElement).appendChild(f), Gf.ff()
                            } catch (g) {}
                        },
                        c = AH[1];
                    b(c);
                    ".google.com" != c && b(".google.com");
                    b = {};
                    var d = (b.newToken = "FBT", b);
                    _.q.setTimeout(function() {
                        return _.q.processGoogleToken(d, 1)
                    }, 1E3)
                }
            }
        },
        CH = function(a) {
            _.q.processGoogleToken = _.q.processGoogleToken || function(b, c) {
                var d = b;
                d = void 0 === d ? {} : d;
                c = void 0 === c ? 0 : c;
                b = d.newToken || "";
                var e = "NT" == b,
                    f = parseInt(d.freshLifetimeSecs || "", 10),
                    g = parseInt(d.validLifetimeSecs || "", 10),
                    h = d["1p_jar"] || "";
                d = d.pucrd || "";
                sf();
                1 == c ? Gf.hf() : Gf.gf();
                var k = tf.googleToken = tf.googleToken || {},
                    l = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
                e = e && !Gf.Nc() && (!(uf[3] >= vf()) || "NT" == uf[1]);
                var m = !(uf[3] >= vf()) && 0 != c;
                if (l || e || m) e = vf(), f = e + 1E3 * f, g = e + 1E3 * g, 1E-5 > Math.random() && _.zC(_.q, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c), k[5] = c, k[1] = b, k[2] = f, k[3] = g, k[4] = h, k[6] = d, sf();
                if (l || !Gf.Nc()) {
                    c = Gf.Cd();
                    for (b = 0; b < c.length; b++) Gf.od(c[b]);
                    c.length = 0
                }
            };
            Hf(a)
        };
    var xq = function(a, b) {
            b = void 0 === b ? {} : b;
            this.root = b.root ? b.root : null;
            this.I = b.rootMargin ? If(b.rootMargin) : [{
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }];
            this.rootMargin = Fc(this.I, function(c) {
                return "" + c.value + c.type
            }).join(" ");
            this.M = Kf(b.threshold);
            this.o = a;
            this.j = [];
            this.H = [];
            this.B = !1;
            this.m = null;
            this.D = lt(this.l, 100, this)
        },
        DH = function(a) {
            if (a.root) var b = Lf(a.root);
            else {
                var c = _.fw(window);
                b = {
                    top: 0,
                    right: c.width,
                    bottom: c.height,
                    left: 0,
                    width: c.width,
                    height: c.height
                }
            }
            a = Fc(a.I, function(d, e) {
                return "px" == d.type ? d.value : d.value * (e % 2 ? b.width : b.height) / 100
            });
            return {
                top: b.top - a[0],
                right: b.right + a[1],
                bottom: b.bottom + a[2],
                left: b.left - a[3],
                width: b.width + a[1] + a[3],
                height: b.height + a[0] + a[2]
            }
        },
        EH = function(a, b, c) {
            if (!b || b.isIntersecting != c.isIntersecting) return !0;
            var d = b.intersectionRatio,
                e = c.intersectionRatio;
            return d == e ? !1 : _.Xf(a.M, function(f) {
                return f < d != f < e
            })
        };
    xq.prototype.l = function() {
        var a = this,
            b = DH(this);
        _.Ks(this.j, function(c) {
            var d = c.target,
                e = Lf(d),
                f = e.width * e.height;
            var g = Math.max(b.top, e.top);
            var h = Math.min(b.right, e.right),
                k = Math.min(b.bottom, e.bottom),
                l = Math.max(b.left, e.left),
                m = h - l,
                n = k - g;
            g = 0 <= m && 0 <= n ? {
                top: g,
                right: h,
                bottom: k,
                left: l,
                width: m,
                height: n
            } : null;
            h = !!g;
            k = g ? g.width * g.height : 0;
            l = window.performance;
            d = {
                boundingClientRect: e,
                intersectionRatio: f ? k / f : h ? 1 : 0,
                intersectionRect: g || {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                },
                isIntersecting: h,
                rootBounds: b,
                target: d,
                time: l && l.now ? l.now() : 0
            };
            EH(a, c.oa, d) && a.H.push(d);
            c.oa = d
        });
        this.H.length && this.o(FH(this), this)
    };
    xq.prototype.observe = function(a) {
        _.Xf(this.j, function(b) {
            return b.target == a
        }) || (this.j.push({
            target: a,
            oa: null
        }), this.l(), this.B || (this.B = !0, _.ab(_.q, "scroll", this.D), _.ab(_.q, "resize", this.D), _.q.MutationObserver && !this.m && (this.m = new MutationObserver(this.D), this.m.observe(_.q.document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }))))
    };
    xq.prototype.unobserve = function(a) {
        this.j = _.Jf(this.j, function(b) {
            return b.target != a
        });
        0 == this.j.length && this.disconnect()
    };
    xq.prototype.disconnect = function() {
        this.B = !1;
        this.j.length = 0;
        _.Md(_.q, "scroll", this.D);
        _.Md(_.q, "resize", this.D);
        this.m && (this.m.disconnect(), this.m = null)
    };
    var FH = function(a) {
        var b = [].concat(_.xd(a.H));
        a.H.length = 0;
        return b
    };
    var GH = function(a, b, c, d, e, f) {
        _.HB.call(this);
        this.Ka = a;
        this.status = 1;
        this.B = b;
        this.m = c;
        this.G = d;
        this.Gb = !!e;
        this.l = Math.random();
        this.I = {};
        this.j = null;
        this.M = (0, _.Fs)(this.R, this);
        this.o = f
    };
    _.N(GH, _.HB);
    GH.prototype.R = function(a) {
        if (!("*" !== this.m && a.origin !== this.m || !this.Gb && a.source != this.B)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {}
            if (_.fa(b) && (a = b.i, b.c === this.Ka && a != this.l)) {
                if (2 !== this.status) try {
                    this.status = 2, HH(this), this.j && (this.j(), this.j = null)
                } catch (c) {}
                a = b.s;
                b = b.p;
                if ("string" === typeof a && ("string" === typeof b || _.fa(b)) && this.I.hasOwnProperty(a)) this.I[a](b)
            }
        }
    };
    var HH = function(a) {
        var b = {};
        b.c = a.Ka;
        b.i = a.l;
        a.o && (b.e = a.o);
        a.B.postMessage(JSON.stringify(b), a.m)
    };
    GH.prototype.C = function() {
        if (1 === this.status) {
            try {
                this.B.postMessage && HH(this)
            } catch (a) {}
            window.setTimeout((0, _.Fs)(this.C, this), 50)
        }
    };
    GH.prototype.connect = function(a) {
        a && (this.j = a);
        _.ab(window, "message", this.M);
        this.G && this.C()
    };
    var IH = function(a, b, c) {
        a.I[b] = c
    };
    GH.prototype.send = function(a, b) {
        var c = {};
        c.c = this.Ka;
        c.i = this.l;
        c.s = a;
        c.p = b;
        try {
            this.B.postMessage(JSON.stringify(c), this.m)
        } catch (d) {}
    };
    GH.prototype.H = function() {
        this.status = 3;
        _.Md(window, "message", this.M);
        _.HB.prototype.H.call(this)
    };
    var JH = new u.Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        KH = new u.Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);
    var LH = function(a) {
        Q.call(this, a)
    };
    _.N(LH, Q);
    var MH = function(a) {
        Q.call(this, a)
    };
    _.N(MH, Q);
    var NH = function(a) {
        Q.call(this, a)
    };
    _.N(NH, Q);
    var PH = function() {
            return 0 != OH(document)
        },
        OH = function(a) {
            return a.prerendering ? 3 : {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
        },
        QH = function(a) {
            var b;
            a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
            return b
        },
        RH = function(a) {
            return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
        },
        SH = function(a, b) {
            if (3 == OH(b)) return !1;
            a();
            return !0
        },
        TH = function(a, b) {
            if (!SH(a, b)) {
                var c = !1,
                    d = QH(b),
                    e = function() {
                        !c && SH(a, b) && (c = !0, _.Md(b, d, e))
                    };
                d && _.ab(b, d, e)
            }
        };
    var gq = function(a, b) {
            this.j = a;
            this.D = b;
            this.m = {}
        },
        hq = function(a) {
            bq() && (document.addEventListener("touchstart", function(b) {
                a.j(902, function() {
                    a.m[b.touches[0].identifier] = Date.now()
                })()
            }, mt), document.addEventListener("touchend", function(b) {
                a.j(902, function() {
                    var c = b.changedTouches[0],
                        d = c.clientX,
                        e = c.clientY,
                        f = c.force;
                    c = a.m[c.identifier];
                    if (void 0 !== c) try {
                        var g = bq(),
                            h = {
                                x: d,
                                y: e,
                                duration_ms: Date.now() - c
                            };
                        if (null == g ? 0 : g.gmaSdk) g.gmaSdk.reportTouchEvent(JSON.stringify(_.t(Object, "assign").call(Object, {}, h, {
                            type: 1,
                            force: f
                        })));
                        else {
                            var k, l, m;
                            null == g || null == (k = g.webkit) || null == (l = k.messageHandlers) || null == (m = l.reportGmaTouchEvent) || m.postMessage(h)
                        }
                    } catch (n) {
                        a.D("paw_sigs", {
                            msg: "reportTouchError",
                            err: n instanceof Error ? n.message : "nonError"
                        })
                    }
                })()
            }, mt))
        },
        cq = function(a, b, c, d, e) {
            var f = 200,
                g = Vp;
            b = void 0 === b ? {} : b;
            c = void 0 === c ? function() {} : c;
            d = void 0 === d ? function() {} : d;
            f = void 0 === f ? 200 : f;
            var h = String(Math.floor(2147483647 * Zd())),
                k = 0,
                l = function(m) {
                    try {
                        var n = "object" === typeof m.data ? m.data : JSON.parse(m.data);
                        h === n.paw_id && (window.clearTimeout(k), window.removeEventListener("message", l), n.signal ? c(n.signal) : n.error && d(n.error))
                    } catch (p) {
                        g("paw_sigs", {
                            msg: "postmessageError",
                            err: p instanceof Error ? p.message : "nonError",
                            data: null == m.data ? "null" : 500 < m.data.length ? m.data.substring(0, 500) : m.data
                        })
                    }
                };
            window.addEventListener("message", function(m) {
                e(903, function() {
                    l(m)
                })()
            });
            a.postMessage(_.t(Object, "assign").call(Object, {}, {
                paw_id: h
            }, b));
            k = window.setTimeout(function() {
                window.removeEventListener("message", l);
                d("PAW GMA postmessage timed out.")
            }, f)
        },
        bq = function() {
            var a = window,
                b, c;
            if (a.gmaSdk || (null == (b = a.webkit) ? 0 : null == (c = b.messageHandlers) ? 0 : c.getGmaViewSignals)) return a;
            try {
                var d = window.parent,
                    e, f;
                if (d.gmaSdk || (null == (e = d.webkit) ? 0 : null == (f = e.messageHandlers) ? 0 : f.getGmaViewSignals)) return d
            } catch (g) {}
            return null
        };
    var VH, UH;
    VH = function() {
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
        this.floatingAdsStacking = new UH;
        this.sideRailProcessedFixedElements = new u.Set;
        this.sideRailAvailableSpace = new u.Map
    };
    _.ll = function(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new u.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new u.Map)) : a.google_reactive_ads_global_state = new VH;
        return a.google_reactive_ads_global_state
    };
    UH = function() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };
    var YH;
    _.WH = function(a) {
        this.j = _.ll(a).floatingAdsStacking
    };
    _.XH = function(a) {
        a = _.sw(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    };
    YH = function(a) {
        var b = _.XH(a);
        _.Ks(a.j.maxZIndexListeners, function(c) {
            return c(b)
        })
    };
    _.ZH = function(a) {
        this.m = a;
        this.j = null
    };
    _.$H = function(a) {
        if (null == a.j) {
            var b = a.m,
                c = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[c] = 2147483646;
            YH(b);
            a.j = c
        }
    };
    _.aI = function(a) {
        if (null != a.j) {
            var b = a.m;
            delete b.j.maxZIndexRestrictions[a.j];
            YH(b);
            a.j = null
        }
    };
    var ml, al, dl;
    ml = 728 * 1.38;
    _.ol = function(a) {
        return a.innerHeight >= a.innerWidth
    };
    _.bI = function(a) {
        var b = _.cl(a).clientWidth;
        a = a.innerWidth;
        return b && a ? b / a : 0
    };
    al = function(a, b) {
        return (a = _.cl(a).clientWidth) ? a > (void 0 === b ? 420 : b) ? 32768 : 320 > a ? 65536 : 0 : 16384
    };
    dl = function(a) {
        return (a = _.bI(a)) ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072
    };
    _.cl = function(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    _.cI = function(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    };
    var pl = function(a, b, c, d, e) {
            for (var f = [], g = 0; g < e; g++)
                for (var h = 0; h < b; h++) {
                    var k = f,
                        l = b - 1,
                        m = e - 1;
                    k.push.call(k, {
                        x: (0 == l ? 0 : h / l) * a,
                        y: c + (0 == m ? 0 : g / m) * (d - c)
                    })
                }
            return f
        },
        ql = 90 * 1.38;
    var dI;
    _.eI = function(a, b) {
        if (!a.body) return null;
        var c = new dI;
        c.apply(a, b);
        return function() {
            _.ax(a.body, {
                filter: c.j,
                webkitFilter: c.j,
                overflow: c.D,
                position: c.H,
                top: c.B
            });
            b.scrollTo(0, c.m)
        }
    };
    dI = function() {
        this.j = this.B = this.H = this.D = null;
        this.m = 0
    };
    dI.prototype.apply = function(a, b) {
        this.D = a.body.style.overflow;
        this.H = a.body.style.position;
        this.B = a.body.style.top;
        this.j = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
        this.m = _.cI(b);
        _.ax(a.body, "top", -this.m + "px")
    };
    _.fl = function(a, b) {
        var c;
        if (!(c = 0 >= b) && !(c = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                var d = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var e = "__storage_test__" === d
            } catch (f) {
                e = !1
            }
            c = !e
        }
        return c ? null : Yf(a, b)
    };
    _.el = function(a) {
        return !!a && 1 > a.length
    };
    var fI = function(a, b) {
        b = void 0 === b ? 500 : b;
        _.HB.call(this);
        this.m = a;
        this.I = b;
        this.j = null;
        this.l = {};
        this.o = 0;
        this.B = null
    };
    _.N(fI, _.HB);
    fI.prototype.H = function() {
        this.l = {};
        this.B && (_.Md(this.m, "message", this.B), delete this.B);
        delete this.l;
        delete this.m;
        delete this.j;
        _.HB.prototype.H.call(this)
    };
    var hI = function(a) {
            var b;
            return "function" === typeof(null == (b = a.m) ? void 0 : b.__uspapi) || null != gI(a)
        },
        jI = function(a, b) {
            var c = {};
            if (hI(a)) {
                var d = _.Ho(function() {
                    return b(c)
                });
                iI(a, function(e, f) {
                    f && (c = e);
                    d()
                });
                setTimeout(d, a.I)
            } else b(c)
        },
        iI = function(a, b) {
            var c;
            "function" === typeof(null == (c = a.m) ? void 0 : c.__uspapi) ? (a = a.m.__uspapi, a("getUSPData", 1, b)) : gI(a) && (kI(a), c = ++a.o, a.l[c] = b, a.j && (b = {}, a.j.postMessage((b.__uspapiCall = {
                command: "getUSPData",
                version: 1,
                callId: c
            }, b), "*")))
        },
        gI = function(a) {
            if (a.j) return a.j;
            a.j = Cw(a.m, "__uspapiLocator");
            return a.j
        },
        kI = function(a) {
            a.B || (a.B = function(b) {
                try {
                    var c = {};
                    "string" === typeof b.data ? c = JSON.parse(b.data) : c = b.data;
                    var d = c.__uspapiReturn;
                    var e;
                    null == (e = a.l) || e[d.callId](d.returnValue, d.success)
                } catch (f) {}
            }, _.ab(a.m, "message", a.B))
        };
    var mI = function(a) {
        Q.call(this, a, -1, lI)
    };
    _.N(mI, Q);
    var lI = [1];
    var nI = function(a) {
        Q.call(this, a)
    };
    _.N(nI, Q);
    var On = function(a) {
        _.HB.call(this);
        this.B = a;
        this.m = this.j = null;
        this.l = {};
        this.o = 0;
        this.I = !1
    };
    _.N(On, _.HB);
    var oI = function(a) {
            a.I || (a.j || (a.j = Cw(a.B, "googlefcPresent")), a.I = !0);
            return !!a.j
        },
        qI = function(a) {
            return new u.Promise(function(b) {
                if (oI(a))
                    if (a.j === a.B) {
                        var c = a.j.googlefc || (a.j.googlefc = {});
                        c.__fci = c.__fci || [];
                        c.__fci.push("loaded", function(e) {
                            b(Od(nI, e))
                        })
                    } else {
                        pI(a);
                        c = a.o++;
                        a.l[c] = b;
                        var d = {};
                        a.j.postMessage((d.__fciCall = {
                            command: "loaded",
                            callId: c
                        }, d), "*")
                    }
            })
        },
        pI = function(a) {
            a.m || (a.m = function(b) {
                try {
                    var c = Od(nI, b.data.__fciReturn);
                    (0, a.l[F(c, 1)])(c)
                } catch (d) {}
            }, _.ab(a.B, "message", a.m))
        };
    var rI = {},
        bg = (rI[23] = .001, rI[211] = !1, rI[253] = !1, rI[246] = [], rI[226] = [], rI[150] = "", rI[148] = PC, rI[221] = vw(), rI[36] = vw(), rI[172] = null, rI[259] = null, rI[6] = function() {
            var a = window;
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
        }(), rI[260] = void 0, rI[251] = null, rI[252] = null, rI[258] = null, rI),
        ag = function() {
            this.j = !1
        };
    var sI = Xh(function() {
        return !!ww(_.q.location.href)
    });
    var vj = function(a) {
            var b = void 0 === b ? je(_.q) : b;
            this.id = a;
            this.m = Math.random() < _.cg(23);
            this.j = {
                pvsid: String(b)
            }
        },
        tI = function(a) {
            a = $f(a);
            var b;
            hh.set(a, (null != (b = hh.get(a)) ? b : 0) + 1)
        },
        gh = function() {
            return [].concat(_.xd(_.t(hh, "values").call(hh))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        I = function(a, b, c) {
            "string" !== typeof c && (c = String(c));
            /^\w+$/.test(b) && (c ? a.j[b] = c : delete a.j[b])
        },
        xj = function(a, b) {
            b = void 0 === b ? null : b;
            b = void 0 === b ? null : b;
            if (sI()) b = !0;
            else {
                var c = a.m;
                b && 0 <= b && (c = Math.random() < b);
                b = c && !!a.id
            }
            b && _.zC(window, uI(a) || "", void 0, _.B(Yx))
        },
        uI = function(a) {
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + encodeURIComponent(a.id);
            _.Bk(a.j, function(c, d) {
                c && (b += "&" + d + "=" + encodeURIComponent(c))
            });
            return b
        },
        vI = function(a, b) {
            b = b.map(function(c) {
                return c.replace(/,/g, "\\,")
            });
            3 >= b.length ? I(a, "nw_id", b.join()) : (b = b.slice(0, 3), b.push("__extra__"), I(a, "nw_id", b.join()))
        },
        si = function(a, b, c) {
            I(a, "vrg", String(b.ib || b.Fa));
            c ? (vI(a, c), I(a, "nslots", c.length.toString())) : (vI(a, [].concat(_.xd(_.t(hh, "keys").call(hh)))), I(a, "nslots", gh().toString()));
            b = ke();
            b.length && I(a, "eid", b.join());
            I(a, "pub_url", document.URL)
        },
        mi = function(a, b, c) {
            c = void 0 === c ? _.cg(23) : c;
            if (void 0 === c || 0 > c || 1 < c) c = _.cg(23);
            Math.random() < c && (a = new vj(a), b(a), xj(a, 1))
        },
        hh = new u.Map;
    var Ij = function(a) {
        Q.call(this, a, -1, wI)
    };
    _.N(Ij, Q);
    var Fj = function(a) {
            return F(a, 1)
        },
        Hj = function(a, b) {
            return v(a, 1, b)
        },
        Gj = function(a, b) {
            return kg(a, 2, b)
        },
        wI = [2];
    var $q = function(a) {
        Q.call(this, a)
    };
    _.N($q, Q);
    var Qp = function(a) {
        Q.call(this, a, -1, xI)
    };
    _.N(Qp, Q);
    var xI = [2, 3];
    var Wo = function(a) {
        Q.call(this, a)
    };
    _.N(Wo, Q);
    var yI = function(a) {
        Q.call(this, a)
    };
    _.N(yI, Q);
    yI.prototype.setTagForChildDirectedTreatment = function(a) {
        return v(this, 5, a)
    };
    yI.prototype.clearTagForChildDirectedTreatment = function() {
        return mc(this, 5)
    };
    yI.prototype.setTagForUnderAgeOfConsent = function(a) {
        return v(this, 6, a)
    };
    var Ak = function(a) {
        Q.call(this, a)
    };
    _.N(Ak, Q);
    var AI = function(a) {
        Q.call(this, a, -1, zI)
    };
    _.N(AI, Q);
    AI.prototype.qa = function() {
        return tc(this, Ij, 14)
    };
    AI.prototype.Da = function() {
        return vc(this, Ak, 18)
    };
    var BI = function(a) {
        return vc(a, yI, 25)
    };
    AI.prototype.getCorrelator = function() {
        return F(this, 26)
    };
    AI.prototype.setCorrelator = function(a) {
        return v(this, 26, a)
    };
    var zI = [2, 3, 14, 32];
    var vh = function(a) {
        Q.call(this, a)
    };
    _.N(vh, Q);
    vh.prototype.getWidth = function() {
        return F(this, 1)
    };
    var zh = function(a, b) {
        return v(a, 1, b)
    };
    vh.prototype.getHeight = function() {
        return F(this, 2)
    };
    var yh = function(a, b) {
            return v(a, 2, b)
        },
        Lk = function() {
            var a = new vh;
            return v(a, 3, !0)
        };
    var Qk = function(a) {
        Q.call(this, a)
    };
    _.N(Qk, Q);
    var xh = function(a) {
        Q.call(this, a, -1, CI)
    };
    _.N(xh, Q);
    var CI = [2];
    var EI = function(a) {
        Q.call(this, a, -1, DI)
    };
    _.N(EI, Q);
    EI.prototype.getAdUnitPath = function() {
        return F(this, 1)
    };
    EI.prototype.getDomId = function() {
        return F(this, 2)
    };
    var FI = function(a, b) {
        v(a, 2, b)
    };
    EI.prototype.qa = function() {
        return tc(this, Ij, 3)
    };
    EI.prototype.getClickUrl = function() {
        return F(this, 7)
    };
    EI.prototype.setClickUrl = function(a) {
        return v(this, 7, a)
    };
    var Ej = function(a) {
        return tc(a, Ij, 9)
    };
    EI.prototype.Da = function() {
        return vc(this, Ak, 13)
    };
    var hl = function(a) {
            return Wd(a, 15, 0)
        },
        DI = [3, 4, 5, 6, 8, 9];
    var Pg = function(a) {
        Q.call(this, a)
    };
    _.N(Pg, Q);
    var Og = function(a, b) {
            return pg(a, 1, GI, b)
        },
        Rg = function(a) {
            var b = new Pg;
            return pg(b, 2, GI, a)
        },
        GI = [1, 2];
    var Fg = function(a) {
        Q.call(this, a)
    };
    _.N(Fg, Q);
    var Jg = function(a) {
        Q.call(this, a, -1, HI)
    };
    _.N(Jg, Q);
    var Kg = function(a, b) {
            Gc(a, 1, b)
        },
        Mg = function(a) {
            Q.call(this, a)
        };
    _.N(Mg, Q);
    var Ng = function(a, b) {
            Kc(a, 3, b)
        },
        Ig = [1, 2, 3, 4, 7, 5, 6],
        HI = [1];
    var JI = function(a) {
        Q.call(this, a, -1, II)
    };
    _.N(JI, Q);
    var KI = function(a, b) {
            return oc(a, 1, b, 0)
        },
        LI = function(a, b) {
            return Kc(a, 2, b)
        },
        MI = function(a, b) {
            return Gc(a, 3, b)
        },
        II = [3];
    var NI = function(a) {
        Q.call(this, a)
    };
    _.N(NI, Q);
    NI.prototype.getTimestamp = function() {
        return Wd(this, 1, 0)
    };
    var PI = function(a) {
            var b = new NI;
            b = oc(b, 1, Date.now(), 0);
            return pg(b, 2, OI, a)
        },
        OI = [2, 3];
    var QI = function(a) {
        Q.call(this, a)
    };
    _.N(QI, Q);
    var RI = function(a) {
        var b = new QI;
        return Kc(b, 1, a)
    };
    var SI = function(a) {
        Q.call(this, a)
    };
    _.N(SI, Q);
    var vg = new function(a, b, c) {
        this.j = b;
        this.m = c
    }(function(a) {
        return Od(QI, a)
    }, function(a) {
        return Od(SI, a)
    }, 4);
    var sg = function(a) {
        return !!a && "function" === typeof a.openConsoleTab && "function" === typeof a.attachOverlay
    };
    var xg = function(a) {
        Q.call(this, a)
    };
    _.N(xg, Q);
    var wg = function() {
        this.j = _.t(Array, "from").call(Array, {
            length: 1E3
        });
        this.m = 0
    };
    wg.prototype.send = function(a) {
        this.j instanceof MessagePort ? this.j.postMessage(a.Y()) : (this.j[this.m] = a, this.m = (this.m + 1) % 1E3)
    };
    var TI = O(["https://www.googletagservices.com/console/host/host.js"]),
        UI = O(["https://www.googletagservices.com/console/panel/index.html"]),
        VI = O(["https://www.googletagservices.com/console/overlay/index.html"]),
        WI = {
            Ie: x(TI),
            Ug: x(UI),
            Tg: x(VI)
        };
    var ug = {
        Gd: document.body,
        ce: WI
    };
    var zg = new u.Map;
    var XI = {},
        Dg = (XI.companion_ads = "companionAds", XI.content = "content", XI.publisher_ads = "pubads", XI);
    var Xg = function() {
        HC.call(this, _.B(Yg) || _.B(pB) ? 1 : 0, _.q);
        this.D = 0;
        var a = _.B(Yg) || _.B(pB);
        _.q.google_measure_js_timing = a || _.q.google_measure_js_timing
    };
    _.N(Xg, HC);
    var Rh = function() {
        this.j = new u.Map
    };
    var YI = function() {
            this.m = {};
            this.j = new AI;
            this.D = new u.Map;
            this.j.setCorrelator(Lw());
            _.cg(36) && v(this.j, 15, !0)
        },
        ZI = function(a) {
            var b = Qg(),
                c = a.getDomId();
            if (c && !b.m.hasOwnProperty(c)) {
                var d = _.E(Rh),
                    e = ++_.E(Xg).D;
                d.j.set(c, e);
                v(a, 20, e);
                b.m[c] = a
            }
        },
        Zn = function(a, b) {
            var c;
            return null != (c = a.m[b]) ? c : null
        },
        Qg = function() {
            return _.E(YI)
        };
    var $I = {
            Gd: document.body,
            ce: WI
        },
        Tg = function() {
            var a = void 0 === a ? $I : a;
            var b = void 0 === b ? document.URL : b;
            this.D = a;
            this.url = b;
            this.m = !1
        },
        Sg;
    Tg.prototype.initialize = function() {
        if (null !== Aj(this.url, "googtime") && !this.j) try {
            this.j = yg(function() {}, this.D)
        } catch (c) {
            var a, b;
            null == (a = console) || null == (b = a.error) || b.call(a, c)
        }
    };
    Tg.prototype.sendMessage = function(a, b, c, d) {
        a = MI(LI(KI(new JI, a), Lg(b)), c.map(function(e) {
            return Lg(e)
        }));
        d && v(a, 4, d);
        d = PI(a);
        d = RI(d);
        this.j.send(d)
    };
    var Ug = function(a, b) {
        var c = Sg;
        return function() {
            var d = ld.apply(0, arguments);
            if (c.j && !c.m) {
                c.m = !0;
                try {
                    c.sendMessage(a, this, d, Error().stack)
                } catch (g) {
                    var e, f;
                    null == (e = console) || null == (f = e.error) || f.call(e, g)
                } finally {
                    c.m = !1
                }
            }
            return b.apply(this, d)
        }
    };
    var bJ;
    _.aJ = function(a) {
        this.context = a
    };
    bJ = function(a, b) {
        b.catch(function(c) {
            c = c ? c : "unknown rejection";
            Zg(a.context, 963, c instanceof Error ? c : Error(String(c)))
        })
    };
    var cJ = Xh(Uh);
    var Bi = ["auto", "inherit", "100%"],
        Ci = Bi.concat(["none"]);
    var rm = function(a, b, c) {
        if (!a) return !0;
        var d = !0;
        zi(a, function(e) {
            return d = Ai(e, b, 10, 10)
        }, c);
        return d
    };
    var dJ = function(a, b, c, d, e, f) {
        this.D = _.Rw(a);
        this.m = _.Rw(b);
        this.H = c;
        this.j = _.Rw(d);
        this.B = e;
        this.l = f
    };
    dJ.prototype.Y = function() {
        return JSON.stringify({
            windowCoords_t: this.D.top,
            windowCoords_r: this.D.right,
            windowCoords_b: this.D.bottom,
            windowCoords_l: this.D.left,
            frameCoords_t: this.m.top,
            frameCoords_r: this.m.right,
            frameCoords_b: this.m.bottom,
            frameCoords_l: this.m.left,
            styleZIndex: this.H,
            allowedExpansion_t: this.j.top,
            allowedExpansion_r: this.j.right,
            allowedExpansion_b: this.j.bottom,
            allowedExpansion_l: this.j.left,
            xInView: this.B,
            yInView: this.l
        })
    };
    var eJ = function(a) {
        var b = window,
            c = b.screenX || b.screenLeft || 0,
            d = b.screenY || b.screenTop || 0;
        b = new _.Qw(d, c + (b.outerWidth || document.documentElement.clientWidth || 0), d + (b.outerHeight || document.documentElement.clientHeight || 0), c);
        c = ex(a);
        d = _.Uf(_.Vf, a);
        var e = new Sw(c.x, c.y, d.width, d.height);
        c = Tw(e);
        d = String(Tf(a, "zIndex"));
        var f = new _.Qw(0, Infinity, Infinity, 0);
        for (var g = bw(a), h = g.j.body, k = g.j.documentElement, l = gw(g.j); a = dx(a);)
            if (!(_.rt && 0 == a.clientWidth || ut && 0 == a.clientHeight && a == h) && a != h && a != k && "visible" != Tf(a, "overflow")) {
                var m = ex(a),
                    n = new _.Mh(a.clientLeft, a.clientTop);
                m.x += n.x;
                m.y += n.y;
                f.top = Math.max(f.top, m.y);
                f.right = Math.min(f.right, m.x + a.clientWidth);
                f.bottom = Math.min(f.bottom, m.y + a.clientHeight);
                f.left = Math.max(f.left, m.x)
            }
        a = l.scrollLeft;
        l = l.scrollTop;
        f.left = Math.max(f.left, a);
        f.top = Math.max(f.top, l);
        g = g.j;
        g = _.fw(g.parentWindow || g.defaultView || window);
        f.right = Math.min(f.right, a + g.width);
        f.bottom = Math.min(f.bottom, l + g.height);
        l = (f = (f = 0 <= f.top && 0 <= f.left && f.bottom > f.top && f.right > f.left ? f : null) ? new Sw(f.left, f.top, f.right - f.left, f.bottom - f.top) : null) ? Uw(e, f) : null;
        g = a = 0;
        l && !(new _.Ph(l.width, l.height)).isEmpty() && (a = l.width / e.width, g = l.height / e.height);
        l = new _.Qw(0, 0, 0, 0);
        if (h = f)(e = Uw(e, f)) ? (k = Tw(f), m = Tw(e), h = m.right != k.left && k.right != m.left, k = m.bottom != k.top && k.bottom != m.top, h = (0 != e.width || h) && (0 != e.height || k)) : h = !1;
        h && (l = new _.Qw(Math.max(c.top - f.top, 0), Math.max(f.left + f.width - c.right, 0), Math.max(f.top + f.height - c.bottom, 0), Math.max(c.left - f.left, 0)));
        return new dJ(b, c, d, l, a, g)
    };
    var fJ = function(a) {
        this.H = a;
        this.B = null;
        this.C = this.status = 0;
        this.m = null;
        this.Ka = "sfchannel" + a
    };
    var gJ = function(a) {
        this.j = a
    };
    gJ.prototype.Y = function() {
        return JSON.stringify(this.j)
    };
    var hJ = function(a, b) {
        this.Xb = a;
        this.Yb = b;
        this.m = this.j = !1
    };
    hJ.prototype.Y = function() {
        return JSON.stringify({
            expandByOverlay: this.Xb,
            expandByPush: this.Yb,
            readCookie: this.j,
            writeCookie: this.m
        })
    };
    var iJ = function(a, b, c, d, e, f, g, h, k) {
        h = void 0 === h ? [] : h;
        this.m = a;
        this.D = b;
        this.H = c;
        this.permissions = d;
        this.metadata = e;
        this.B = f;
        this.Gb = g;
        this.hostpageLibraryTokens = h;
        this.j = "";
        this.pb = void 0 === k ? "" : k
    };
    iJ.prototype.Y = function() {
        var a = {};
        a = (a.uid = this.m, a.hostPeerName = this.D, a.initialGeometry = this.H.Y(), a.permissions = this.permissions.Y(), a.metadata = this.metadata.Y(), a.reportCreativeGeometry = this.B, a.isDifferentSourceWindow = this.Gb, a.goog_safeframe_hlt = ZD(this.hostpageLibraryTokens), a);
        this.j && (a.sentinel = this.j);
        this.pb && (a.pbjsAdConfig = this.pb);
        return JSON.stringify(a)
    };
    var jJ = function(a, b) {
        this.j = a;
        this.D = b
    };
    jJ.prototype.Y = function(a) {
        this.D && a && (a.sentinel = this.D);
        return JSON.stringify(a)
    };
    var kJ = function(a, b, c) {
        jJ.call(this, a, void 0 === c ? "" : c);
        this.version = b
    };
    _.N(kJ, jJ);
    kJ.prototype.Y = function() {
        return jJ.prototype.Y.call(this, {
            uid: this.j,
            version: this.version
        })
    };
    var lJ = function(a, b, c, d) {
        jJ.call(this, a, void 0 === d ? "" : d);
        this.H = b;
        this.m = c
    };
    _.N(lJ, jJ);
    lJ.prototype.Y = function() {
        return jJ.prototype.Y.call(this, {
            uid: this.j,
            initialWidth: this.H,
            initialHeight: this.m
        })
    };
    var mJ = function(a, b, c) {
        jJ.call(this, a, void 0 === c ? "" : c);
        this.description = b
    };
    _.N(mJ, jJ);
    mJ.prototype.Y = function() {
        return jJ.prototype.Y.call(this, {
            uid: this.j,
            description: this.description
        })
    };
    var nJ = function(a, b, c, d) {
        jJ.call(this, a, void 0 === d ? "" : d);
        this.m = b;
        this.push = c
    };
    _.N(nJ, jJ);
    nJ.prototype.Y = function() {
        return jJ.prototype.Y.call(this, {
            uid: this.j,
            expand_t: this.m.top,
            expand_r: this.m.right,
            expand_b: this.m.bottom,
            expand_l: this.m.left,
            push: this.push
        })
    };
    var oJ = function(a, b) {
        jJ.call(this, a, void 0 === b ? "" : b)
    };
    _.N(oJ, jJ);
    oJ.prototype.Y = function() {
        return jJ.prototype.Y.call(this, {
            uid: this.j
        })
    };
    var pJ = function(a, b, c) {
        jJ.call(this, a, void 0 === c ? "" : c);
        this.H = b
    };
    _.N(pJ, jJ);
    pJ.prototype.Y = function() {
        var a = {
            uid: this.j,
            newGeometry: this.H.Y()
        };
        return jJ.prototype.Y.call(this, a)
    };
    var qJ = function(a, b, c, d, e, f) {
        pJ.call(this, a, c, void 0 === f ? "" : f);
        this.success = b;
        this.m = d;
        this.push = e
    };
    _.N(qJ, pJ);
    qJ.prototype.Y = function() {
        var a = {
            uid: this.j,
            success: this.success,
            newGeometry: this.H.Y(),
            expand_t: this.m.top,
            expand_r: this.m.right,
            expand_b: this.m.bottom,
            expand_l: this.m.left,
            push: this.push
        };
        this.D && (a.sentinel = this.D);
        return JSON.stringify(a)
    };
    var rJ = function(a, b, c, d) {
        jJ.call(this, a, void 0 === d ? "" : d);
        this.width = b;
        this.height = c
    };
    _.N(rJ, jJ);
    rJ.prototype.Y = function() {
        return jJ.prototype.Y.call(this, {
            uid: this.j,
            width: this.width,
            height: this.height
        })
    };
    var sJ = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        hd(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    var tJ = function() {
            this.j = []
        },
        vJ = function(a, b, c, d, e) {
            a.j.push(new uJ(b, c, d, e))
        },
        wJ = function(a) {
            for (var b = a.j.length - 1; 0 <= b; b--) {
                var c = a.j[b];
                c.m ? (c.D.style.removeProperty(c.j), c.D.style.setProperty(c.j, String(c.H), c.B)) : c.D.style[c.j] = c.H
            }
            a.j.length = 0
        },
        uJ = function(a, b, c, d) {
            this.D = a;
            this.j = (this.m = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
            this.H = this.m ? a.style.getPropertyValue(this.j) : a.style[this.j];
            this.B = this.m ? a.style.getPropertyPriority(this.j) : void 0;
            this.m ? (a.style.removeProperty(this.j), a.style.setProperty(this.j, String(c), d)) : a.style[this.j] = String(c)
        };
    var xJ = function(a, b) {
            b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
            2048 > b.length && b.push(a)
        },
        yJ = function() {
            var a = window,
                b = _.Qm(a);
            b && xJ({
                label: "2",
                type: 9,
                value: b
            }, a)
        },
        zJ = function(a, b, c) {
            var d = void 0 === d ? !1 : d;
            var e = window,
                f = "undefined" !== typeof queueMicrotask;
            return function() {
                d && f && queueMicrotask(function() {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                var g = _.Qm(),
                    h = 3;
                try {
                    var k = b.apply(this, arguments)
                } catch (l) {
                    h = 13;
                    if (!c) throw l;
                    c(a, l)
                } finally {
                    e.google_measure_js_timing && g && xJ(_.t(Object, "assign").call(Object, {}, {
                        label: a.toString(),
                        value: g,
                        duration: (_.Qm() || 0) - g,
                        type: h
                    }, d && f && {
                        taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                    }), e)
                }
                return k
            }
        };
    var EJ = function(a) {
        fJ.call(this, a.uniqueId);
        var b = this;
        this.I = a.Rg;
        this.M = 1 === a.size;
        this.O = new hJ(a.permissions.Xb && !this.M, a.permissions.Yb && !this.M);
        this.l = a.Yc;
        var c;
        this.fa = null != (c = a.hostpageLibraryTokens) ? c : [];
        var d = window.location;
        c = d.protocol;
        d = d.host;
        this.ea = "file:" == c ? "*" : c + "//" + d;
        this.ma = !!a.Gb;
        c = "//" + a.wc + (_.B(ky) ? "-safeframe.usercontent.goog" : ".safeframe.googlesyndication.com");
        this.K = a.wc ? c : "//tpc.googlesyndication.com";
        this.ca = a.bc ? "*" : "https:" + this.K;
        this.T = !!a.ye;
        this.aa = AJ(a);
        this.D = new tJ;
        BJ(this, a.Yc, a.size);
        this.B = this.da = eJ(a.Yc);
        this.G = a.pf || "1-0-38";
        var e;
        this.ia = null != (e = a.se) ? e : "";
        this.na = a.pb;
        CJ(this, a);
        this.ra = zJ(412, function() {
            return DJ(b)
        }, a.Ca);
        this.R = -1;
        this.o = 0;
        var f = zJ(415, function() {
            b.j && (b.j.name = "", a.Md && a.Md(), _.Md(b.j, "load", f))
        }, a.Ca);
        _.ab(this.j, "load", f);
        this.Oc = zJ(413, this.Oc, a.Ca);
        this.bd = zJ(417, this.bd, a.Ca);
        this.cd = zJ(419, this.cd, a.Ca);
        this.Kc = zJ(411, this.Kc, a.Ca);
        this.Hc = zJ(409, this.Hc, a.Ca);
        this.L = zJ(410, this.L, a.Ca);
        this.Tc = zJ(416, this.Tc, a.Ca);
        this.m = new GH(this.Ka, this.j.contentWindow, this.ca, !1);
        IH(this.m, "init_done", (0, _.Fs)(this.Oc, this));
        IH(this.m, "register_done", (0, _.Fs)(this.bd, this));
        IH(this.m, "report_error", (0, _.Fs)(this.cd, this));
        IH(this.m, "expand_request", (0, _.Fs)(this.Kc, this));
        IH(this.m, "collapse_request", (0, _.Fs)(this.Hc, this));
        IH(this.m, "creative_geometry_update", (0, _.Fs)(this.L, this));
        this.m.connect((0, _.Fs)(this.Tc, this))
    };
    _.N(EJ, fJ);
    var BJ = function(a, b, c) {
            a.M ? (b.style.width = _.gx("100%", !0), b.style.height = _.gx("auto", !0)) : (b.style.width = _.gx(c.width, !0), b.style.height = _.gx(c.height, !0))
        },
        CJ = function(a, b) {
            var c = b.bc,
                d = b.content,
                e = b.Eb,
                f = b.size,
                g = void 0 === b.Fb ? "3rd party ad content" : b.Fb,
                h = b.Zb;
            b = b.Fc;
            var k = {
                shared: {
                    sf_ver: a.G,
                    ck_on: CC() ? 1 : 0,
                    flash_ver: "0"
                }
            };
            d = c ? "" : null != d ? d : "";
            d = a.G + ";" + d.length + ";" + d + (new iJ(a.H, a.ea, a.da, a.O, new gJ(k), a.M, a.ma, a.fa, a.na)).Y();
            if (a.T && f instanceof _.Ph) {
                k = _.hw(_.aw(a.l));
                var l = _.hw(_.aw(a.l)).location.protocol + a.K;
                HD || yj(k.document, ID);
                HD++;
                k.google_eas_queue = k.google_eas_queue || [];
                k.google_eas_queue.push({
                    a: e,
                    b: l,
                    c: f.width,
                    d: f.height,
                    e: "sf-gdn-exp-" + HD,
                    f: void 0,
                    g: void 0,
                    h: void 0,
                    i: void 0
                })
            }
            k = f.width;
            f = f.height;
            a.M && (f = k = 0);
            l = {};
            e = (l.id = e, l.title = g, l.name = d, l.scrolling = "no", l.marginWidth = "0", l.marginHeight = "0", l.width = String(k), l.height = String(f), l["data-is-safeframe"] = "true", l);
            void 0 === c && (g = _.hw(_.aw(a.l)), f = a.ia, d = a.K, (k = f) && (k = "?" + k), d = (void 0 === d ? "//tpc.googlesyndication.com" : d) + ("/safeframe/" + a.G + "/html/container.html" + k), (k = sJ(g)) && (d += (f ? "&" : "?") + "n=" + k), f = "https:" + d, d = [], a.T && (k = ww(g.location.href), g = d.push, k = [0 < k.length ? "google_debug" + (k ? "=" + k : "") + "&" : "", "xpc=", "sf-gdn-exp-" + a.H, "&p=", encodeURIComponent(_.q.document.location.protocol), "//", encodeURIComponent(_.q.document.location.host)].join(""), g.call(d, k)), d.length && (f += "#" + d.join("&")), e.src = f);
            null !== a.aa && (e.sandbox = a.aa);
            h && (e.allow = h);
            b && (e.anonymous = "true");
            e.role = "region";
            e["aria-label"] = "Advertisement";
            e.tabIndex = "0";
            c ? (a.j = c, dw(a.j, e)) : (c = {}, c = (c.frameborder = 0, c.allowTransparency = "true", c.style = "border:0;vertical-align:bottom;", c.src = "about:blank", c), e && ya(c, e), h = _.Ld("IFRAME"), dw(h, c), a.j = h);
            a.M && (a.j.style.minWidth = "100%");
            a.l.appendChild(a.j)
        };
    aa = EJ.prototype;
    aa.Tc = function() {
        _.ab(window, "resize", this.ra);
        _.ab(window, "scroll", this.ra)
    };
    aa.Oc = function(a) {
        try {
            if (0 != this.status) throw Error("Container already initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.fa(b) || !Ei(b.uid) || "string" !== typeof b.version) throw Error("Cannot parse JSON message");
            var c = new kJ(b.uid, b.version, b.sentinel);
            if (this.H !== c.j || this.G !== c.version) throw Error("Wrong source container");
            this.status = 1
        } catch (e) {
            var d;
            null == (d = this.I) || d.error("Invalid INITIALIZE_DONE message. Reason: " + e.message)
        }
    };
    aa.bd = function(a) {
        try {
            if (1 != this.status) throw Error("Container not initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.fa(b) || !Ei(b.uid) || "number" !== typeof b.initialWidth || "number" !== typeof b.initialHeight) throw Error("Cannot parse JSON message");
            if (this.H !== (new lJ(b.uid, b.initialWidth, b.initialHeight, b.sentinel)).j) throw Error("Wrong source container");
            this.status = 2
        } catch (d) {
            var c;
            null == (c = this.I) || c.error("Invalid REGISTER_DONE message. Reason: " + d.message)
        }
    };
    aa.cd = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.fa(b) || !Ei(b.uid) || "string" !== typeof b.description) throw Error("Cannot parse JSON message");
            var c = new mJ(b.uid, b.description, b.sentinel);
            if (this.H !== c.j) throw Error("Wrong source container");
            var d;
            null == (d = this.I) || d.info("Ext reported an error. Description: " + c.description)
        } catch (f) {
            var e;
            null == (e = this.I) || e.error("Invalid REPORT_ERROR message. Reason: " + f.message)
        }
    };
    aa.Kc = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (0 != this.C) throw Error("Container is not collapsed");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.fa(b) || !Ei(b.uid) || "number" !== typeof b.expand_t || "number" !== typeof b.expand_r || "number" !== typeof b.expand_b || "number" !== typeof b.expand_l || "boolean" !== typeof b.push) throw Error("Cannot parse JSON message");
            var c = new nJ(b.uid, new _.Qw(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
            if (this.H !== c.j) throw Error("Wrong source container");
            if (!(0 <= c.m.top && 0 <= c.m.left && 0 <= c.m.bottom && 0 <= c.m.right)) throw Error("Invalid expansion amounts");
            var d;
            if (d = c.push && this.O.Yb || !c.push && this.O.Xb) {
                var e = c.m,
                    f = c.push,
                    g = this.B = eJ(this.j);
                if (e.top <= g.j.top && e.right <= g.j.right && e.bottom <= g.j.bottom && e.left <= g.j.left) {
                    if (!f)
                        for (var h = this.j.parentNode; h && h.style; h = h.parentNode) vJ(this.D, h, "overflowX", "visible", "important"), vJ(this.D, h, "overflowY", "visible", "important");
                    var k = Tw(new Sw(0, 0, this.B.m.getWidth(), this.B.m.getHeight()));
                    _.fa(e) ? (k.top -= e.top, k.right += e.right, k.bottom += e.bottom, k.left -= e.left) : (k.top -= e, k.right += Number(void 0), k.bottom += Number(void 0), k.left -= Number(void 0));
                    vJ(this.D, this.l, "position", "relative");
                    vJ(this.D, this.j, "position", "absolute");
                    if (f) {
                        var l = k.getWidth();
                        vJ(this.D, this.l, "width", l + "px");
                        var m = k.getHeight();
                        vJ(this.D, this.l, "height", m + "px")
                    } else vJ(this.D, this.j, "zIndex", "10000");
                    var n = k.getWidth();
                    vJ(this.D, this.j, "width", n + "px");
                    var p = k.getHeight();
                    vJ(this.D, this.j, "height", p + "px");
                    vJ(this.D, this.j, "left", k.left + "px");
                    vJ(this.D, this.j, "top", k.top + "px");
                    this.C = 2;
                    this.B = eJ(this.j);
                    d = !0
                } else d = !1
            }
            a = d;
            this.m.send("expand_response", (new qJ(this.H, a, this.B, c.m, c.push)).Y());
            if (!a) throw Error("Viewport or document body not large enough to expand into.");
        } catch (z) {
            var r;
            null == (r = this.I) || r.error("Invalid EXPAND_REQUEST message. Reason: " + z.message)
        }
    };
    aa.Hc = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (2 != this.C) throw Error("Container is not expanded");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.fa(b) || !Ei(b.uid)) throw Error("Cannot parse JSON message");
            if (this.H !== (new oJ(b.uid, b.sentinel)).j) throw Error("Wrong source container");
            wJ(this.D);
            this.C = 0;
            this.j && (this.B = eJ(this.j));
            this.m.send("collapse_response", (new pJ(this.H, this.B)).Y())
        } catch (d) {
            var c;
            null == (c = this.I) || c.error("Invalid COLLAPSE_REQUEST message. Reason: " + d.message)
        }
    };
    var DJ = function(a) {
        if (1 == a.status || 2 == a.status) switch (a.o) {
            case 0:
                FJ(a);
                a.R = window.setTimeout((0, _.Fs)(a.W, a), 1E3);
                a.o = 1;
                break;
            case 1:
                a.o = 2;
                break;
            case 2:
                a.o = 2
        }
    };
    EJ.prototype.L = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.fa(b) || !Ei(b.uid) || "number" !== typeof b.width || "number" !== typeof b.height || b.sentinel && "string" !== typeof b.sentinel) throw Error("Cannot parse JSON message");
            var c = new rJ(b.uid, b.width, b.height, b.sentinel);
            if (this.H !== c.j) throw Error("Wrong source container");
            var d = String(c.height);
            if (this.M) d !== this.j.height && (this.j.height = d, DJ(this));
            else {
                var e;
                null == (e = this.I) || e.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
            }
        } catch (g) {
            var f;
            null == (f = this.I) || f.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + g.message)
        }
    };
    EJ.prototype.W = function() {
        if (1 == this.status || 2 == this.status) switch (this.o) {
            case 1:
                this.o = 0;
                break;
            case 2:
                FJ(this), this.R = window.setTimeout((0, _.Fs)(this.W, this), 1E3), this.o = 1
        }
    };
    var FJ = function(a) {
            a.B = eJ(a.j);
            a.m.send("geometry_update", (new pJ(a.H, a.B)).Y())
        },
        AJ = function(a) {
            var b = null;
            a.Xd && (b = a.Xd);
            return null == b ? null : b.join(" ")
        },
        Um = function(a) {
            return !!(null != a ? a : window).postMessage
        },
        GJ = ["allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"],
        HJ = ["allow-top-navigation"],
        IJ = ["allow-same-origin"],
        JJ = zw([].concat(_.xd(GJ), _.xd(HJ)));
    zw([].concat(_.xd(GJ), _.xd(IJ)));
    zw([].concat(_.xd(GJ), _.xd(HJ), _.xd(IJ)));
    var KJ = O(["https://tpc.googlesyndication.com/safeframe/", "/html/container.html"]),
        LJ = {
            Ue: function(a) {
                if ("string" !== typeof a.version) throw new TypeError("version is not a string");
                if (!/^[0-9]+-[0-9]+-[0-9]+$/.test(a.version)) throw new RangeError("Invalid version: " + a.version);
                if ("string" !== typeof a.Jb) throw new TypeError("subdomain is not a string");
                if (!/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(a.Jb)) throw new RangeError("Invalid subdomain: " + a.Jb);
                return a.yf ? md("https://" + a.Jb + "-safeframe.usercontent.goog/safeframe/" + a.version + "/html/container.html") : md("https://" + a.Jb + ".safeframe.googlesyndication.com/safeframe/" + a.version + "/html/container.html")
            },
            Yg: function(a) {
                return x(KJ, a)
            }
        };
    /*

    Math.uuid.js (v1.4)
    http://www.broofa.com
    mailto:robert@broofa.com
    Copyright (c) 2010 Robert Kieffer
    Dual licensed under the MIT and GPL licenses.
    */
    var Jd = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    var Gi = function(a, b) {
        try {
            lb(iq(a, b))
        } catch (c) {}
    };
    var MJ = function(a) {
        Q.call(this, a)
    };
    _.N(MJ, Q);
    var NJ = [MJ, 4, uu, 2, uu, 1, uu, 3, uu, 5, xu];
    var OJ = [.05, .1, .2, .5],
        PJ = [0, .5, 1],
        QJ = function(a) {
            a = Te(a);
            if (!a) return -1;
            try {
                var b = ND(a.document);
                var c = new _.Ph(b.clientWidth, b.clientHeight)
            } catch (d) {
                c = new _.Ph(-12245933, -12245933)
            }
            return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height
        },
        RJ = function(a, b) {
            return 0 >= a || 0 >= b ? [] : Fc(OJ, function(c) {
                return Math.min(a / b * c, 1)
            })
        },
        TJ = function(a) {
            this.B = a.F;
            this.D = a.eb;
            this.I = a.mb;
            this.m = null;
            this.H = a.Ca;
            this.j = SJ(this);
            this.l = a.tf || !1
        };
    TJ.prototype.getSlotId = function() {
        return this.m
    };
    var VJ = function(a, b) {
            if (a.j) {
                if (null != a.m) {
                    try {
                        UJ(a, Math.round(performance.now()), 0, 0, 0, !1)
                    } catch (c) {
                        a.H && a.H(c)
                    }
                    a.j && a.j.unobserve(a.D)
                }
                a.m = b;
                a.j.observe(a.D)
            }
        },
        SJ = function(a) {
            var b = a.D.offsetWidth * a.D.offsetHeight,
                c = QJ(a.B);
            b = [].concat(_.xd(PJ), _.xd(RJ(c, b)));
            ia(b);
            return _.q.IntersectionObserver ? new _.q.IntersectionObserver(function(d) {
                return WJ(a, d)
            }, {
                threshold: b
            }) : new xq(function(d) {
                return WJ(a, d)
            }, {
                threshold: b
            })
        },
        WJ = function(a, b) {
            try {
                var c = QJ(a.B);
                _.Ks(b, function(d) {
                    a.l && UJ(a, Math.round(d.time), d.boundingClientRect.width * d.boundingClientRect.height, d.intersectionRect.width * d.intersectionRect.height, c, d.isIntersecting)
                })
            } catch (d) {
                a.H && a.H(d)
            }
        },
        UJ = function(a, b, c, d, e, f) {
            if (null == a.m) throw Error("Not Attached.");
            var g = new MJ;
            c = v(g, 1, c);
            d = v(c, 2, d);
            e = v(d, 3, e);
            b = v(e, 4, b);
            f = v(b, 5, f);
            f = Rb(tm(f, NJ), 4);
            IC(a.I, "1", 10, f, void 0, a.m)
        };
    var XJ = function(a, b) {
            this.j = a;
            this.m = b
        },
        YJ = function(a) {
            if (a.j.frames.google_ads_top_frame) return !0;
            var b = Dw(a.j);
            b = b && b.contentWindow;
            if (!b) return !1;
            b.addEventListener("message", function(c) {
                var d = c.ports;
                "__goog_top_url_req" === c.data.msgType && d.length && d[0].postMessage({
                    msgType: "__goog_top_url_resp",
                    topUrl: a.m
                })
            }, !1);
            return !0
        };
    var Qi = function(a) {
        Q.call(this, a)
    };
    _.N(Qi, Q);
    var Ri = [1, 3];
    var Hd = {
        Fg: 0,
        Bg: 1,
        zg: 2,
        Ag: 3,
        Dg: 5,
        Eg: 6,
        Cg: 7
    };
    var ZJ = O(["https://securepubads.g.doubleclick.net/static/topics/topics_frame.html"]),
        Li = x(ZJ);
    var $J = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        aK = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };
    var cK = function(a, b, c) {
        _.HB.call(this);
        var d = this;
        this.m = a;
        this.j = [];
        b && bK() && this.j.push($J);
        c && this.j.push(aK);
        if (document.hasTrustToken && !_.B(xB)) {
            var e = new u.Map;
            this.j.forEach(function(f) {
                e.set(f.issuerOrigin, {
                    issuerOrigin: f.issuerOrigin,
                    state: d.m ? 1 : 12,
                    hasRedemptionRecord: !1
                })
            });
            window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof u.Map ? new u.Map([].concat(_.xd(e), _.xd(window.goog_tt_state_map))) : e;
            window.goog_tt_promise_map && window.goog_tt_promise_map instanceof u.Map || (window.goog_tt_promise_map = new u.Map)
        }
    };
    _.N(cK, _.HB);
    var bK = function() {
            var a = void 0 === a ? window : a;
            a = a.navigator.userAgent;
            var b = /Chrome/.test(a);
            return /Android/.test(a) && b
        },
        dK = function(a) {
            a = void 0 === a ? window : a;
            return !a.PeriodicSyncManager
        },
        eK = function(a, b, c) {
            a = a.goog_tt_state_map;
            var d, e = [];
            b && (d = null == a ? void 0 : a.get($J.issuerOrigin)) && e.push(d);
            c && (d = null == a ? void 0 : a.get(aK.issuerOrigin)) && e.push(d);
            return e
        },
        fK = function(a) {
            return _.B(BB) ? !0 : a.some(function(b) {
                return b.hasRedemptionRecord
            })
        },
        gK = function() {
            var a = window,
                b = _.cg(221),
                c = _.cg(150);
            return b || ".google.ch" === c || "function" === typeof a.__tcfapi
        },
        hK = function(a) {
            var b = _.cg(252);
            a = _.B(BB) ? a.filter(function(c) {
                return 12 !== c.state
            }).map(function(c) {
                return c.issuerOrigin
            }) : a.filter(function(c) {
                return c.hasRedemptionRecord
            }).map(function(c) {
                return c.issuerOrigin
            });
            if (0 == a.length) return null;
            a = {
                type: "send-redemption-record",
                issuers: a,
                refreshPolicy: "none",
                signRequestData: _.B(BB) ? "omit" : "include",
                includeTimestampHeader: !0,
                additionalSignedHeaders: ["sec-time", "Sec-Redemption-Record"]
            };
            !_.B(BB) && b && 0 < _.t(Object, "keys").call(Object, b).length && (a.additionalSigningData = Kt(JSON.stringify(b), 3));
            return a
        },
        iK = function(a, b, c) {
            var d, e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
            e && (e.state = b, void 0 != c && (e.hasRedemptionRecord = c))
        },
        jK = function() {
            var a = $J.issuerOrigin + $J.redemptionPath,
                b = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        issuer: $J.issuerOrigin,
                        refreshPolicy: "none"
                    }
                };
            iK($J.issuerOrigin, 2);
            return window.fetch(a, b).then(function(c) {
                if (!c.ok) throw Error(c.status + ": Network response was not ok!");
                iK($J.issuerOrigin, 6, !0)
            }).catch(function(c) {
                c && "NoModificationAllowedError" === c.name ? iK($J.issuerOrigin, 6, !0) : iK($J.issuerOrigin, 5)
            })
        },
        kK = function() {
            var a = $J.issuerOrigin + $J.issuancePath;
            iK($J.issuerOrigin, 8);
            return window.fetch(a, {
                keepalive: !0,
                trustToken: {
                    type: "token-request"
                }
            }).then(function(b) {
                if (!b.ok) throw Error(b.status + ": Network response was not ok!");
                iK($J.issuerOrigin, 10);
                return jK()
            }).catch(function(b) {
                if (b && "NoModificationAllowedError" === b.name) return iK($J.issuerOrigin, 10), jK();
                iK($J.issuerOrigin, 9)
            })
        },
        lK = function() {
            iK($J.issuerOrigin, 13);
            return document.hasTrustToken($J.issuerOrigin).then(function(a) {
                return a ? jK() : kK()
            })
        },
        mK = function() {
            iK(aK.issuerOrigin, 13);
            if (u.Promise) {
                var a = document.hasTrustToken(aK.issuerOrigin).then(function(e) {
                        return e
                    }).catch(function(e) {
                        return u.Promise.reject({
                            state: 19,
                            error: e
                        })
                    }),
                    b = aK.issuerOrigin + aK.redemptionPath,
                    c = {
                        keepalive: !0,
                        trustToken: {
                            type: "token-redemption",
                            refreshPolicy: "none"
                        }
                    };
                iK(aK.issuerOrigin, 16);
                a = a.then(function(e) {
                    return window.fetch(b, c).then(function(f) {
                        if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                        iK(aK.issuerOrigin, 18, !0)
                    }).catch(function(f) {
                        if (f && "NoModificationAllowedError" === f.name) iK(aK.issuerOrigin, 18, !0);
                        else {
                            if (e) return u.Promise.reject({
                                state: 17,
                                error: f
                            });
                            iK(aK.issuerOrigin, 17)
                        }
                    })
                }).then(function() {
                    return document.hasTrustToken(aK.issuerOrigin).then(function(e) {
                        return e
                    }).catch(function(e) {
                        return u.Promise.reject({
                            state: 19,
                            error: e
                        })
                    })
                }).then(function(e) {
                    var f = aK.issuerOrigin + aK.getStatePath;
                    iK(aK.issuerOrigin, 20);
                    return window.fetch(f + "?ht=" + e, {
                        trustToken: {
                            type: "send-redemption-record",
                            issuers: [aK.issuerOrigin]
                        }
                    }).then(function(g) {
                        if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                        iK(aK.issuerOrigin, 22);
                        return g.text().then(function(h) {
                            return JSON.parse(h)
                        })
                    }).catch(function(g) {
                        return u.Promise.reject({
                            state: 21,
                            error: g
                        })
                    })
                });
                var d = je(window);
                return a.then(function(e) {
                    var f = aK.issuerOrigin + aK.issuancePath;
                    return e && e.srqt && e.cs ? (iK(aK.issuerOrigin, 23), window.fetch(f + "?cs=" + e.cs + "&correlator=" + d, {
                        keepalive: !0,
                        trustToken: {
                            type: "token-request"
                        }
                    }).then(function(g) {
                        if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                        iK(aK.issuerOrigin, 25);
                        return e
                    }).catch(function(g) {
                        return u.Promise.reject({
                            state: 24,
                            error: g
                        })
                    })) : e
                }).then(function(e) {
                    if (e && e.srdt && e.cs) return iK(aK.issuerOrigin, 26), window.fetch(b + "?cs=" + e.cs + "&correlator=" + d, {
                        keepalive: !0,
                        trustToken: {
                            type: "token-redemption",
                            refreshPolicy: "refresh"
                        }
                    }).then(function(f) {
                        if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                        iK(aK.issuerOrigin, 28, !0)
                    }).catch(function(f) {
                        return u.Promise.reject({
                            state: 27,
                            error: f
                        })
                    })
                }).then(function() {
                    iK(aK.issuerOrigin, 29)
                }).catch(function(e) {
                    if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                        if ("number" === typeof e.state && e.error instanceof Error) {
                            iK(aK.issuerOrigin, e.state);
                            var f = _.A(zB);
                            Math.random() <= f && be({
                                state: e.state,
                                err: e.error.toString()
                            }, "dtt_err")
                        } else throw Error(e);
                    else throw e;
                })
            }
        },
        nK = function(a) {
            if (document.hasTrustToken && !_.B(xB) && a.m) {
                var b = window.goog_tt_promise_map;
                if (b && b instanceof u.Map) {
                    var c = [];
                    if (a.j.some(function(e) {
                            return e.issuerOrigin === $J.issuerOrigin
                        })) {
                        var d = b.get($J.issuerOrigin);
                        d || (d = lK(), b.set($J.issuerOrigin, d));
                        c.push(d)
                    }
                    a.j.some(function(e) {
                        return e.issuerOrigin === aK.issuerOrigin
                    }) && (a = b.get(aK.issuerOrigin), a || (a = mK(), b.set(aK.issuerOrigin, a)), c.push(a));
                    if (0 < c.length && u.Promise && u.Promise.all) return u.Promise.all(c)
                }
            }
        };
    var oK = function() {
            this.id = "goog_" + Xv++
        },
        pK = function(a) {
            _.HB.call(this);
            this.context = a;
            this.I = new u.Map
        };
    _.N(pK, _.HB);
    pK.prototype.H = function() {
        _.HB.prototype.H.call(this);
        this.I.clear()
    };
    var rK = function(a, b, c) {
            if (a.D) return function() {};
            var d = "string" === typeof b ? b : b.id,
                e, f, g = null != (f = null == (e = a.I.get(d)) ? void 0 : e.add(c)) ? f : new u.Set([c]);
            a.I.set(d, g);
            return function() {
                return void qK(a, b, c)
            }
        },
        nq = function(a, b, c) {
            c = void 0 === c ? function() {
                return !0
            } : c;
            return new u.Promise(function(d) {
                var e = rK(a, b, function(f) {
                    c(f) && (e(), d(f))
                })
            })
        },
        qK = function(a, b, c) {
            var d;
            return !(null == (d = a.I.get("string" === typeof b ? b : b.id)) || !d.delete(c))
        };
    pK.prototype.dispatchEvent = function(a, b, c) {
        var d = this,
            e, f, g, h, k, l, m;
        return _.cb(function(n) {
            if (1 == n.j) {
                e = "string" === typeof a ? a : a.id;
                f = d.I.get(e);
                if (null == (g = f) || !g.size) return n.return();
                h = "function" === typeof window.CustomEvent ? new CustomEvent(e, {
                    detail: c,
                    bubbles: !0,
                    cancelable: !0
                }) : function() {
                    var p = document.createEvent("CustomEvent");
                    p.initCustomEvent(e, !0, !0, c);
                    return p
                }();
                k = {};
                l = _.w(f);
                m = l.next()
            }
            if (5 != n.j) {
                if (m.done) {
                    n.j = 0;
                    return
                }
                k.Nb = m.value;
                return db(n, 0, 5)
            }
            _.bh(d.context, b, function(p) {
                return function() {
                    d.I.has(e) && f.has(p.Nb) && p.Nb(h)
                }
            }(k), !0);
            k = {
                Nb: k.Nb
            };
            m = l.next();
            n.j = 2
        })
    };
    var sK = new oK,
        tK = new oK,
        uK = new oK,
        vK = new oK,
        wK = new oK,
        xK = new oK,
        yK = new oK,
        oq = new oK,
        zK = new oK,
        AK = new oK;
    var BK, FK, JK, bn, Rm, EK, DK, CK, KK;
    BK = function() {
        this.j = new u.Map;
        this.I = 0;
        this.m = new u.Map;
        this.Wc = je(_.q);
        this.Vb = null;
        this.H = 0;
        this.l = _.Ho(function() {
            return void fi("gpt-first-ad-request")
        });
        this.B = this.D = this.o = 0
    };
    FK = function(a, b) {
        var c = void 0 === c ? _.q : c;
        a.j.get(b) || (a.j.set(b, {
            jb: !0,
            Xc: "",
            nb: "",
            Vd: 0,
            Rc: 0,
            Uc: [],
            Vc: [],
            fb: !1,
            zd: null
        }), _.to(b, function() {
            a.j.delete(b);
            CK(a, b)
        }), rK(b, tK, function(d) {
            var e = d.timeStamp;
            d = d.detail;
            var f = a.j.get(b);
            f.Xc = F(d, 33) || "";
            f.fb = !0;
            DK(a, b, function() {
                f.Xc = ""
            });
            EK(a, b, function() {
                f.fb = !1
            });
            if (_.B(Pm) && !H(d, 8)) {
                var g;
                f.Rc = null != (g = null != e ? e : _.Qm(c)) ? g : 0
            }
        }), _.B(Sm) && nq(b, wK).then(function(d) {
            d = d.timeStamp;
            a.j.get(b).zd = null != d ? d : _.Qm()
        }))
    };
    _.GK = function(a, b) {
        var c, d;
        return null != (d = null == (c = a.j.get(b)) ? void 0 : c.jb) ? d : !1
    };
    _.HK = function(a, b) {
        if (a = a.j.get(b)) a.jb = !1
    };
    _.IK = function(a, b) {
        if (a = a.j.get(b)) a.jb = !0
    };
    JK = function(a, b) {
        if (!b.length) return [];
        var c = $f(b[0].getAdUnitPath());
        b.every(function(g) {
            return $f(g.getAdUnitPath()) === c
        });
        var d = [];
        a = _.w(a.j);
        for (var e = a.next(); !e.done; e = a.next()) {
            var f = _.w(e.value);
            e = f.next().value;
            (f = f.next().value.Xc) && $f(e.getAdUnitPath()) === c && !_.t(b, "includes").call(b, e) && d.push(f)
        }
        return d
    };
    bn = function(a, b) {
        var c, d;
        return null != (d = null == (c = a.j.get(b)) ? void 0 : c.nb) ? d : ""
    };
    Rm = function(a, b) {
        return (a = a.j.get(b)) ? a.Vd - 1 : 0
    };
    EK = function(a, b, c) {
        (a = a.j.get(b)) && a.Uc.push(c)
    };
    DK = function(a, b, c) {
        (a = a.j.get(b)) && a.Vc.push(c)
    };
    CK = function(a, b) {
        if (a = a.j.get(b))
            for (b = a.Vc.slice(), a.Vc.length = 0, a = _.w(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    KK = function(a, b) {
        if (a = a.j.get(b))
            for (b = a.Uc.slice(), a.Uc.length = 0, a = _.w(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    BK.prototype.fb = function(a) {
        var b, c;
        return null != (c = null == (b = this.j.get(a)) ? void 0 : b.fb) ? c : !1
    };
    var MK = function(a, b, c) {
            a.j.get(b).ld = c;
            EK(a, b, function() {
                return void LK(a, b)
            })
        },
        LK = function(a, b) {
            var c;
            null == (c = a.j.get(b)) || delete c.ld
        };
    var nm = function() {
        var a = {};
        return a.adsense_channel_ids = "channel", a.adsense_ad_types = "ad_type", a.adsense_ad_format = "format", a.adsense_background_color = "color_bg", a.adsense_border_color = "color_border", a.adsense_link_color = "color_link", a.adsense_text_color = "color_text", a.adsense_url_color = "color_url", a.page_url = "url", a.adsense_allow_expandable_ads = "ea", a.adsense_encoding = "oe", a.adsense_family_safe = "adsafe", a.adsense_flash_version = "flash", a.adsense_font_face = "f", a.adsense_hints = "hints", a.adsense_keyword_type = "kw_type", a.adsense_keywords = "kw", a.adsense_test_mode = "adtest", a.alternate_ad_iframe_color = "alt_color", a.alternate_ad_url = "alternate_ad_url", a.demographic_age = "cust_age", a.demographic_gender = "cust_gender", a.document_language = "hl", a
    };
    var Z = function(a, b, c) {
        xD.call(this, b, void 0 === c ? 0 : c);
        this.context = a
    };
    _.N(Z, xD);
    Z.prototype.R = function(a) {
        Zg(this.context, this.id, a);
        var b, c;
        null == (b = window.console) || null == (c = b.error) || c.call(b, a)
    };
    var NK = function(a, b, c, d, e) {
        var f = null,
            g = _.Vg(a.context, b, e);
        _.ab(c, d, g) && (f = function() {
            return _.Md(c, d, g)
        }, _.to(a, f));
        return f
    };
    var OK = /(<head(\s+[^>]*)?>)/i,
        Xq = function(a, b, c, d, e) {
            Z.call(this, a, 665);
            this.A = T(this);
            this.l = U(this, b);
            this.o = Y(this, c);
            this.C = U(this, d);
            this.G = Y(this, e)
        };
    _.N(Xq, Z);
    Xq.prototype.j = function() {
        var a;
        if (0 === this.l.value.kind && null != (a = this.o.value) && F(a, 1)) {
            a = this.l.value.ta;
            var b = !!this.G.value;
            b || Ea() || (a = a.replace(OK, "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">"));
            this.C.value && !b && (a = a.replace(OK, '$1<meta name="referrer" content="origin">'));
            this.A.j({
                kind: 0,
                ta: a
            })
        } else this.A.j(this.l.value)
    };
    var xr = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 718);
        this.C = Y(this, c);
        this.l = Y(this, d);
        AD(this, e);
        this.G = U(this, f);
        this.o = U(this, g);
        this.L = U(this, h);
        this.K = nq(b, zK)
    };
    _.N(xr, Z);
    xr.prototype.j = function() {
        var a = this,
            b, c, d;
        return _.cb(function(e) {
            if (1 == e.j) {
                var f = !a.L.value;
                if (null == a.l.value || "height" !== a.C.value || f) return e.return();
                b = a.G.value;
                c = a.o.value;
                PK(c, !1);
                _.ax(c, "min-width", "100%");
                _.ax(b, "min-width", "100%");
                return db(e, a.K, 2)
            }
            if (a.D) return e.return();
            d = b.contentDocument;
            if (!d) return e.return();
            f = d.body.offsetWidth;
            b.setAttribute("height", String(d.body.offsetHeight));
            b.setAttribute("width", String(f));
            PK(c, !0);
            e.j = 0
        })
    };
    var PK = function(a, b) {
        _.ax(a, "visibility", b ? "visible" : "hidden")
    };
    var cj = new u.Map,
        bj = new u.Map;
    var ej = function(a, b) {
        this.push = G(a, 76, b.push.bind(b))
    };
    Ag(ej, 2);
    var gj = function(a, b) {
        this.messageId = a;
        this.messageArgs = b
    };
    gj.prototype.getMessageId = function() {
        return this.messageId
    };
    gj.prototype.getMessageArgs = function() {
        return this.messageArgs
    };
    var QK = K(2),
        RK = K(3),
        SK = K(4),
        TK = K(5),
        UK = K(6),
        VK = K(12),
        WK = K(14),
        XK = K(16),
        YK = K(19),
        ZK = K(20),
        mo = K(23),
        no = K(26),
        $K = K(28),
        aL = K(30),
        bL = K(31),
        cL = K(34),
        dL = K(35),
        eL = K(36),
        So = K(38),
        fL = K(40),
        gL = K(48),
        hL = K(50),
        iL = K(60),
        jL = K(63),
        kL = K(64),
        lL = K(66),
        mL = K(68),
        nL = K(69),
        oL = K(70),
        pL = K(71),
        qL = K(78),
        rL = K(80),
        sL = K(82),
        tL = K(84),
        uL = K(85),
        vL = K(87),
        Kj = K(88),
        wL = K(92),
        xL = K(93),
        yL = K(99),
        zL = K(103),
        AL = K(104),
        BL = K(105),
        CL = K(106),
        DL = K(107),
        EL = K(108),
        FL = K(113),
        GL = K(114),
        HL = K(115),
        IL = K(116),
        JL = K(117),
        KL = K(118),
        LL = K(119),
        Dk = K(121),
        ML = K(122),
        NL = K(123),
        Wp = K(125),
        OL = K(126),
        PL = K(127),
        Jo = K(128),
        Lo = K(144),
        QL = K(134),
        RL = K(135),
        SL = K(136),
        TL = K(137),
        UL = K(138),
        VL = K(139),
        WL = K(140),
        kq = K(142),
        XL = K(143),
        YL = K(145),
        ZL = K(146),
        $L = K(147);
    var aM = function(a, b, c) {
        var d = this;
        this.addEventListener = G(a, 86, function(e, f) {
            if ("function" !== typeof f) return M(b, ij("Service.addEventListener", [e, f])), d;
            var g = jj(e);
            if (!g) return M(b, xL(e)), d;
            c.addEventListener(g, f);
            return d
        });
        this.removeEventListener = G(a, 904, function(e, f) {
            var g = jj(e);
            if ("function" === typeof f && g) return e = c.removeEventListener(g, f), _.B(Dx) ? void 0 : e;
            M(b, ij("Service.removeEventListener", [e, f]));
            return _.B(Dx) ? void 0 : !1
        });
        this.getSlots = G(a, 573, function() {
            return c.m.map(function(e) {
                return e.j
            })
        });
        this.getSlotIdMap = G(a, 574, function() {
            for (var e = {}, f = _.w(c.m), g = f.next(); !g.done; g = f.next()) g = g.value, e[g.toString()] = g.j;
            return e
        });
        this.enable = G(a, 87, function() {
            return void c.enable()
        }, !0);
        this.getName = G(a, 575, function() {
            return c.getName()
        })
    };
    var kj = function(a, b, c) {
        aM.call(this, a, b, c);
        var d = this;
        this.set = G(a, 576, function(e, f) {
            c.set(e, f);
            return d
        });
        this.get = G(a, 577, function(e) {
            return c.get(e)
        });
        this.getAttributeKeys = G(a, 578, function() {
            return rw(c.l)
        });
        this.display = G(a, 558, function(e, f, g, h) {
            return c.display(e, f, null != g ? g : "", null != h ? h : "")
        });
        this.notifyUnfilledSlots = G(a, 69, function(e) {
            c.jb && bM(c, cM(c, e))
        });
        this.refreshAllSlots = G(a, 60, function() {
            c.jb && bM(c)
        });
        this.setVideoSession = G(a, 61, function(e, f, g) {
            c.K = f;
            c.L = g;
            "number" === typeof e && (f = Qg().j, v(f, 29, e))
        });
        this.getDisplayAdsCorrelator = G(a, 62, function(e) {
            return dM(c, void 0 === e ? "" : e)
        });
        this.getVideoStreamCorrelator = G(a, 63, function() {
            var e;
            return null != (e = F(Qg().j, 29)) ? e : 0
        });
        this.isSlotAPersistentRoadblock = G(a, 64, function(e) {
            var f = _.t(c.m, "find").call(c.m, function(g) {
                return g.j === e
            });
            return !!f && eM(c, f)
        });
        this.onImplementationLoaded = G(a, 65, function() {
            c.j.info(gL("GPT CompanionAds"))
        });
        this.slotRenderEnded = G(a, 67, function(e, f, g) {
            var h = _.t(c.m, "find").call(c.m, function(k) {
                return k.j === e
            });
            return h && fM(c, h, f, g)
        });
        this.setRefreshUnfilledSlots = G(a, 59, function(e) {
            return c.setRefreshUnfilledSlots(e)
        })
    };
    _.N(kj, aM);
    Ag(kj, 3);
    var mj = function(a, b, c) {
        aM.call(this, a, b, c);
        this.setContent = G(a, 72, function(d, e) {
            var f = _.t(c.m, "find").call(c.m, function(g) {
                return g.j === d
            });
            if (_.B(Io)) M(b, Lo(), f);
            else return !!f && c.setContent(f, e)
        })
    };
    _.N(mj, aM);
    Ag(mj, 4);
    var gM = O(["https://console.googletagservices.com/pubconsole/loader.js"]),
        zj = x(gM),
        Cj, Bj = !1,
        uj = !1,
        wj = !1;
    var Po = function(a, b) {
        this.getAllEvents = G(a, 563, function() {
            return uj ? hM(b).slice() : []
        });
        this.getEventsBySlot = G(a, 565, function(c) {
            return uj ? iM(b, c).slice() : []
        });
        this.getEventsByLevel = G(a, 566, function(c) {
            return uj ? jM(b, c).slice() : []
        })
    };
    Ag(Po, 5);
    var Nj = function(a, b, c, d) {
        var e = this,
            f = c.getSlotId(),
            g = Qg().j,
            h = Zn(Qg(), f.getDomId());
        this.set = G(a, 83, function(k, l) {
            "page_url" === k && l && (k = [Gj(Hj(new Ij, k), [String(l)])], Gc(h, 3, k));
            return e
        });
        this.get = G(a, 84, function(k) {
            if ("page_url" !== k) return null;
            var l, m;
            return null != (m = null == (l = (y = h.qa(), _.t(y, "find")).call(y, function(n) {
                return Fj(n) === k
            })) ? void 0 : gc(l, 2)[0]) ? m : null
        });
        this.setClickUrl = G(a, 79, function(k) {
            "string" === typeof k ? h.setClickUrl(k) : M(b, ij("Slot.setClickUrl", [k]), f);
            return e
        });
        this.setTargeting = G(a, 81, function(k, l) {
            Lj(f, h, k, l, b);
            return e
        });
        this.updateTargetingFromMap = G(a, 85, function(k) {
            Mj(f, h, k, b);
            return e
        });
        this.display = G(a, 78, function() {
            kM(d, f, Sh(g, Qg().m))
        });
        this.setTagForChildDirectedTreatment = G(a, 80, function(k) {
            if (0 === k || 1 === k) {
                var l = BI(g) || new yI;
                l.setTagForChildDirectedTreatment(k);
                Kc(g, 25, l)
            }
            return e
        });
        this.setForceSafeFrame = G(a, 567, function(k) {
            "boolean" === typeof k ? v(h, 12, k) : M(b, ij("PassbackSlot.setForceSafeFrame", [String(k)]), f);
            return e
        });
        this.setTagForUnderAgeOfConsent = G(a, 448, function(k) {
            if (0 === k || 1 === k) {
                var l = BI(g) || new yI;
                l.setTagForUnderAgeOfConsent(k);
                Kc(g, 25, l)
            }
            return e
        })
    };
    Ag(Nj, 6);
    var em = function(a, b) {
        this.push = G(a, 932, function(c) {
            b.push(c)
        })
    };
    var Qj = {
            REWARDED: 4,
            TOP_ANCHOR: 2,
            BOTTOM_ANCHOR: 3,
            INTERSTITIAL: 5
        },
        Rj = {
            PURCHASED: 1,
            ORGANIC: 2
        };
    var Qr = function(a, b) {
            var c = this;
            a = void 0 === a ? Qg().j : a;
            b = void 0 === b ? _.q : b;
            this.B = "";
            this.j = this.m = null;
            this.l = this.I = this.D = !1;
            this.H = function() {
                return !1
            };
            var d = {},
                e = {},
                f = {};
            this.o = (f[NC] = (d[19] = function() {
                return !!H(a, 10)
            }, d[13] = function() {
                return ld.apply(0, arguments).some(function(g) {
                    return 0 == c.B.lastIndexOf(g, 0)
                })
            }, d[12] = function() {
                return !!H(a, 6)
            }, d[11] = PH, d[15] = function(g) {
                return c.H(g)
            }, d[7] = function() {
                var g;
                return !(null == (g = b.crypto) || !g.subtle)
            }, d[48] = function() {
                return !!c.m
            }, d[51] = function() {
                return c.D
            }, d[66] = function() {
                try {
                    return !!HTMLScriptElement.supports("webbundle")
                } catch (g) {
                    return !1
                }
            }, d[67] = function() {
                return c.I
            }, d[68] = function() {
                return c.l
            }, d), f[OC] = (e[8] = function(g) {
                var h;
                return null != (h = ae(c.m, Number(g))) ? h : void 0
            }, e[10] = function(g) {
                return c.j ? Fh(g + c.j) % 1E3 : void 0
            }, e), f)
        },
        lM = function(a, b) {
            b && !a.j && (a.j = _.t(b.split(":"), "find").call(b.split(":"), function(c) {
                return 0 === c.indexOf("ID=")
            }) || null)
        };
    var Al = function(a, b, c) {
        pK.call(this, a);
        this.slotId = b;
        this.j = c
    };
    _.N(Al, pK);
    Al.prototype.getSlotId = function() {
        return this.slotId
    };
    var Vm = "",
        vk = null,
        Ck = _.Ho(function() {
            var a, b;
            null == (a = window.console) || null == (b = a.warn) || b.call(a, "googletag.pubads().setSafeFrameConfig({useUniqueDomain: ...}) has been removed, and no longer has any effect.")
        });
    var Ed = function(a, b, c, d) {
        pK.call(this, a);
        this.adUnitPath = b;
        this.eb = d;
        this.j = null;
        this.id = this.adUnitPath + "_" + c
    };
    _.N(Ed, pK);
    aa = Ed.prototype;
    aa.getId = function() {
        return this.id
    };
    aa.getAdUnitPath = function() {
        return this.adUnitPath
    };
    aa.getName = function() {
        return this.adUnitPath
    };
    aa.toString = function() {
        return this.getId()
    };
    aa.getDomId = function() {
        return this.eb
    };
    var mM = function(a, b) {
        a.j = b
    };
    var nM = function(a, b) {
        this.getId = G(a, 593, function() {
            return b.getId()
        });
        this.getAdUnitPath = G(a, 594, function() {
            return b.getAdUnitPath()
        });
        this.getName = G(a, 595, function() {
            return b.getName()
        });
        this.toString = G(a, 596, function() {
            return b.toString()
        });
        this.getDomId = G(a, 597, function() {
            return b.getDomId()
        })
    };
    var oM = function() {
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
            this.isBackfill = !1;
            this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
        },
        pM = function(a, b) {
            a.advertiserId = b
        },
        qM = function(a, b) {
            a.campaignId = b
        },
        rM = function(a, b) {
            a.yieldGroupIds = b
        },
        sM = function(a, b) {
            a.companyIds = b
        };
    var tM = function(a, b) {
        this.width = a;
        this.height = b
    };
    tM.prototype.getWidth = function() {
        return this.width
    };
    tM.prototype.getHeight = function() {
        return this.height
    };
    var Uk = function(a, b, c) {
        var d = this,
            e = Zn(Qg(), c.getDomId()),
            f = "",
            g = null,
            h = function() {
                return ""
            },
            k = "",
            l = !1;
        _.to(c, function() {
            e = new EI;
            f = "";
            g = null;
            h = function() {
                return ""
            };
            k = ""
        });
        rK(c, uK, function(n) {
            var p = n.detail;
            n = p.rd;
            p = p.isBackfill;
            n && (f = n, l = p)
        });
        this.set = G(a, 40, function(n, p) {
            if ("string" !== typeof n || "string" !== typeof p || void 0 === nm()[n]) return M(b, ij("Slot.set", [n, p]), c), d;
            var r = (y = e.qa(), _.t(y, "find")).call(y, function(z) {
                return Fj(z) === n
            });
            r ? Gj(r, [p]) : (r = Hj(new Ij, n), pc(r, 2, p), Jj(e, 3, Ij, r));
            return d
        });
        this.get = G(a, 41, function(n) {
            if ("string" !== typeof n) return M(b, ij("Slot.get", [n]), c), null;
            var p = (y = e.qa(), _.t(y, "find")).call(y, function(r) {
                return Fj(r) === n
            });
            return (p = p && gc(p, 2)) ? p[0] : null
        });
        this.getAttributeKeys = G(a, 42, function() {
            return e.qa().map(function(n) {
                return Fj(n)
            })
        });
        this.addService = G(a, 43, function(n) {
            n = cj.get(n);
            if (!n) return M(b, ij("Slot.addService", [n]), c), d;
            var p = n.getName();
            if ((y = gc(e, 4), _.t(y, "includes")).call(y, p)) return b.info(VK(p, c.toString()), c), d;
            n.slotAdded(c, e);
            return d
        });
        this.defineSizeMapping = G(a, 44, function(n) {
            try {
                var p = e;
                if (!Array.isArray(n)) throw new Sk("Size mapping must be an array");
                var r = n.map(Tk);
                Gc(p, 6, r)
            } catch (z) {
                n = z, Zg(a, 44, n), Hw("Incorrect usage of googletag.Slot defineSizeMapping: " + n.message)
            }
            return d
        });
        this.setClickUrl = G(a, 45, function(n) {
            if ("string" !== typeof n) return M(b, ij("Slot.setClickUrl", [n]), c), d;
            e.setClickUrl(n);
            return d
        });
        this.setCategoryExclusion = G(a, 46, function(n) {
            "string" !== typeof n || Dj(n) ? M(b, ij("Slot.setCategoryExclusion", [n]), c) : ((y = gc(e, 8), _.t(y, "includes")).call(y, n) || pc(e, 8, n), b.info(WK(n), c));
            return d
        });
        this.clearCategoryExclusions = G(a, 47, function() {
            v(e, 8, Rp);
            b.info(XK(), c);
            return d
        });
        this.getCategoryExclusions = G(a, 48, function() {
            return gc(e, 8).slice()
        });
        this.setTargeting = G(a, 49, function(n, p) {
            Lj(c, e, n, p, b);
            return d
        });
        this.updateTargetingFromMap = G(a, 649, function(n) {
            Mj(c, e, n, b);
            return d
        });
        this.clearTargeting = G(a, 50, function(n) {
            if (void 0 === n) return Gc(e, 9), b.info(YK(c.getAdUnitPath()), c), d;
            var p = Ej(e),
                r = _.t(p, "findIndex").call(p, function(z) {
                    return Fj(z) === n
                });
            if (0 > r) return M(b, tL(n, c.getAdUnitPath()), c), d;
            p.splice(r, 1);
            Gc(e, 9, p);
            b.info(zL(n, c.getAdUnitPath()), c);
            return d
        });
        this.getTargeting = G(a, 51, function(n) {
            if ("string" !== typeof n) return M(b, ij("Slot.getTargeting", [n]), c), [];
            var p = (y = Ej(e), _.t(y, "find")).call(y, function(r) {
                return Fj(r) === n
            });
            return p ? gc(p, 2).slice() : []
        });
        this.getTargetingKeys = G(a, 52, function() {
            return Ej(e).map(function(n) {
                return Fj(n)
            })
        });
        this.setCollapseEmptyDiv = G(a, 53, function(n, p) {
            p = void 0 === p ? !1 : p;
            if ("boolean" !== typeof n || "boolean" !== typeof p) return M(b, ij("Slot.setCollapseEmptyDiv", [n, p]), c), d;
            v(e, 10, n);
            v(e, 11, n && p);
            mi("gpt_ced", function(r) {
                I(r, "sc", H(e, 11) ? "t" : "f");
                I(r, "level", "slot");
                si(r, a)
            });
            p && !n && M(b, ZK(c.toString()), c);
            return d
        });
        this.getAdUnitPath = G(a, 54, function() {
            return c.getAdUnitPath()
        });
        this.getSlotElementId = G(a, 598, function() {
            return c.getDomId()
        });
        this.setForceSafeFrame = G(a, 55, function(n) {
            if ("boolean" !== typeof n) return M(b, ij("Slot.setForceSafeFrame", [String(n)]), c), d;
            v(e, 12, n);
            return d
        });
        this.setSafeFrameConfig = G(a, 56, function(n) {
            var p = Fk(b, n);
            if (!p) return b.error(ij("Slot.setSafeFrameConfig", [n]), c), d;
            Kc(e, 13, p);
            return d
        });
        rK(c, tK, function(n) {
            n = n.detail;
            if (H(n, 8)) g = null;
            else {
                g = new oM;
                var p = !!H(n, 9);
                g.isBackfill = p;
                var r = gc(n, 15),
                    z = gc(n, 16);
                r.length && z.length && (g.sourceAgnosticCreativeId = r[0], g.sourceAgnosticLineItemId = z[0], p || (g.creativeId = r[0], g.lineItemId = z[0], (p = gc(n, 22)) && p.length && (g.creativeTemplateId = p[0])));
                gc(n, 17).length && pM(g, gc(n, 17)[0]);
                gc(n, 18).length && qM(g, gc(n, 18)[0]);
                gc(n, 19).length && rM(g, gc(n, 19));
                gc(n, 20).length && sM(g, gc(n, 20));
                n = hc(n).map(function(C) {
                    return Sb(C)
                });
                n.length && (g.encryptedTroubleshootingInfo = n[0])
            }
        });
        this.getResponseInformation = G(a, 355, function() {
            return g
        });
        this.getName = G(a, 170, function() {
            b.error(XL());
            var n = new vj("slot_get_name");
            si(n, a);
            xj(n);
            return c.getAdUnitPath()
        });
        var m = new nM(a, c);
        this.getSlotId = G(a, 579, function() {
            return m
        });
        this.getServices = G(a, 580, function() {
            return gc(e, 4).map(function(n) {
                return Eg(n)
            })
        });
        this.getSizes = G(a, 581, function(n, p) {
            var r, z;
            return null != (z = null == (r = Ah(e, n, p)) ? void 0 : r.map(function(C) {
                return H(C, 3) ? "fluid" : new tM(C.getWidth(), C.getHeight())
            })) ? z : null
        });
        this.getClickUrl = G(a, 582, function() {
            var n;
            return null != (n = e.getClickUrl()) ? n : ""
        });
        this.getTargetingMap = G(a, 583, function() {
            for (var n = {}, p = _.w(Ej(e)), r = p.next(); !r.done; r = p.next()) r = r.value, Fj(r) && (n[Fj(r)] = gc(r, 2));
            return n
        });
        this.getOutOfPage = G(a, 584, function(n) {
            return "number" === typeof n ? hl(e) === n : 0 !== hl(e)
        });
        this.getCollapseEmptyDiv = G(a, 585, function() {
            return Gk(e, 10) ? H(e, 10) : null
        });
        this.getDivStartsCollapsed = G(a, 586, function() {
            return Gk(e, 11) ? H(e, 11) : null
        });
        rK(c, vK, function(n) {
            h = n.detail.te
        });
        this.getContentUrl = G(a, 587, function() {
            return h()
        });
        this.getFirstLook = G(a, 588, function() {
            Hw("The getFirstLook method of SlotInterface is deprecated. Please update your code to no longer call this method.");
            return 0
        });
        rK(c, tK, function(n) {
            var p;
            k = null != (p = n.detail.getEscapedQemQueryId()) ? p : ""
        });
        this.getEscapedQemQueryId = G(a, 591, function() {
            return k
        });
        this.getHtml = G(a, 592, function() {
            return l ? (window.console && console.warn && console.warn("This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."), "") : f
        });
        this.setConfig = G(a, 1022, function(n) {
            var p = kc(e, F(e, 26), 26);
            if (void 0 !== n.componentAuction) {
                n = _.w(n.componentAuction);
                for (var r = n.next(); !r.done; r = n.next()) {
                    var z = r.value;
                    r = z.configKey;
                    z = z.auctionConfig;
                    "string" !== typeof r || Dj(r) || (null === z ? p.delete(r) : z && p.set(r, JSON.stringify(z)))
                }
            }
        })
    };
    Ag(Uk, 8);
    var uM = function() {
            this.m = [];
            this.hostpageLibraryTokens = [];
            this.j = {}
        },
        vM = function(a, b) {
            if (!_.t(a.m, "includes").call(a.m, b) && (y = [1, 2, 3], _.t(y, "includes")).call(y, b)) {
                var c;
                if (c = _.B(hy) ? XD[b] : VD[b]) {
                    var d = b + "_hostpage_library";
                    if (c = yj(document, c)) c.id = d
                }
                a.m.push(b);
                b = new YD(b);
                a.hostpageLibraryTokens.push(b);
                a = dg();
                a.hostpageLibraryTokens || (a.hostpageLibraryTokens = {});
                a.hostpageLibraryTokens[b.j] = b.m
            }
        },
        wM = function(a, b, c) {
            var d;
            a.j[b] = null != (d = a.j[b]) ? d : new u.Set;
            a.j[b].add(c)
        },
        xM = function(a, b) {
            var c, d;
            a = null != (d = null == (c = a.j[b]) ? void 0 : _.t(c, "values").call(c)) ? d : [];
            return [].concat(_.xd(a))
        };
    var yM = {},
        Wk = (yM[64] = QL, yM[134217728] = RL, yM[32768] = SL, yM[536870912] = TL, yM[8] = UL, yM[512] = VL, yM[1048576] = WL, yM[4194304] = YL, yM);
    var zM = _.Ho(function() {
            Hw("The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.")
        }),
        tl = function() {
            this.j = new u.Map;
            this.Z = new u.Set;
            _.E(Qr).H = ul
        };
    tl.prototype.add = function(a, b, c, d, e) {
        var f = this;
        e = void 0 === e ? {} : e;
        var g = void 0 === e.eb ? void 0 : e.eb,
            h = void 0 === e.format ? 0 : e.format;
        e = void 0 === e.Od ? !1 : e.Od;
        var k = sl(h);
        if (k) return mi("gpt_pla_ns", function(m) {
            I(m, "iu", c);
            I(m, "f", null != h ? h : "");
            I(m, "nsr", k);
            si(m, a)
        }), Xk(b, k, h, c), {};
        e && zM();
        e = this.j.get(c) || Number(e);
        d = AM(a, b, c, e, d, g || "gpt_unit_" + c + "_" + e);
        b = d.Ia;
        var l = d.slotId;
        d = d.Jc;
        if (!l) return {
            Jc: d
        };
        this.j.set(c, e + 1);
        this.Z.add(l);
        _.to(l, function() {
            return void f.Z.delete(l)
        });
        tI(c);
        return {
            slotId: l,
            Ia: b
        }
    };
    var To = function(a) {
            return xM(_.E(uM), a).map(function(b) {
                var c;
                return null == (c = ei(b, document)) ? void 0 : c.contentWindow
            }).filter(function(b) {
                return !!b
            })
        },
        Eo = function(a) {
            a = _.w(a);
            for (var b = a.next(); !b.done; b = a.next()) b.value.Ba()
        },
        po = function(a, b) {
            a = _.w(a.Z);
            for (var c = a.next(); !c.done; c = a.next())
                if (c = c.value, c.getDomId() === b) return c;
            return null
        },
        zl = function(a, b, c, d, e, f) {
            f = void 0 === f ? !1 : f;
            return "string" === typeof c && 0 < c.length && d && (void 0 === e || "string" === typeof e) ? _.E(tl).add(a, b, c, d, {
                eb: e,
                Od: f
            }) : {}
        },
        AM = function(a, b, c, d, e, f) {
            var g = po(_.E(tl), f);
            if (g) return b.error($K(f, c, g.getAdUnitPath())), {
                Jc: !0
            };
            var h = new EI;
            FI(v(h, 1, c), f);
            e = Rk(e);
            g = e.Oa;
            Gc(h, 5, e.Mc);
            null !== g && Kc(h, 16, g);
            ZI(h);
            var k = new Ed(a, c, d, f);
            mM(k, Vk(a, b, k));
            _.to(k, function() {
                var l = Qg(),
                    m = k.getDomId();
                delete l.m[m];
                l.D.delete(k);
                l = k.getAdUnitPath();
                l = $f(l);
                var n;
                m = (null != (n = hh.get(l)) ? n : 0) - 1;
                0 >= m ? hh.delete(l) : hh.set(l, m);
                b.info(yL(k.toString()), k);
                (n = bj.get(k)) && cj.delete(n);
                bj.delete(k)
            });
            b.info(QK(k.toString()), k);
            rK(k, vK, function(l) {
                l = l.detail.mf;
                b.info(RK(k.getAdUnitPath()), k);
                IC(_.E(Xg), "7", 9, Rm(_.E(BK), k), 0, l)
            });
            rK(k, tK, function(l) {
                var m = l.detail;
                b.info(SK(k.getAdUnitPath()), k);
                var n;
                l = _.E(Xg);
                var p = F(h, 20);
                m = null != (n = m.getEscapedQemQueryId()) ? n : "";
                l.j && (_.q.google_timing_params = _.q.google_timing_params || {}, _.q.google_timing_params["qqid." + p] = m)
            });
            rK(k, uK, function() {
                return void b.info(TK(k.getAdUnitPath()), k)
            });
            rK(k, wK, function() {
                return void b.info(UK(k.getAdUnitPath()), k)
            });
            return {
                Ia: h,
                slotId: k
            }
        };
    var BM = new u.WeakMap,
        CM = function(a, b) {
            a = [a];
            for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
            return a.join("\v")
        };
    var vl = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))\/tag\/js\/gpt(?:_[a-z]+)*\.js/,
        DM = function(a, b) {
            b = void 0 === b ? CM : b;
            var c = ha(a),
                d = function(f) {
                    f = _.w(f);
                    f.next();
                    f = es(f);
                    return b(c, f)
                },
                e = function(f) {
                    var g = _.w(f);
                    f = g.next().value;
                    g = es(g);
                    return a.apply(f, g)
                };
            return function() {
                var f = ld.apply(0, arguments),
                    g = this || _.q,
                    h = BM.get(g);
                h || (h = {}, BM.set(g, h));
                return pt(h, [this].concat(_.xd(f)), e, d)
            }
        }(function(a) {
            return (null == a ? 0 : a.src) ? vl.test(a.src) ? 0 : 1 : 2
        }, function(a, b) {
            var c;
            return a + "\v" + (null == (c = b[0]) ? void 0 : c.src)
        });
    var EM = function(a) {
            var b = _.E(Qr),
                c = [];
            a = _.w(a);
            for (var d = a.next(); !d.done; d = a.next()) {
                d = d.value;
                b.B = d;
                var e = Sr(9);
                1 === e.length && (c.push(d), c.push(d + "-" + e[0]))
            }
            return c
        },
        FM = _.Ho(function() {
            return void Hw("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
        }),
        GM = _.Ho(function() {
            return void Hw("googletag.pubads().setCookieOptions() has been removed, and no longer has any effect. Consider migrating to Limited Ads.")
        }),
        HM = _.Ho(function() {
            return void Hw("The following functions are deprecated: googletag.pubads().setTagForChildDirectedTreatment(), googletag.pubads().clearTagForChildDirectedTreatment(), googletag.pubads().setRequestNonPersonalizedAds(), and googletag.pubads().setTagForUnderAgeOfConsent(). Please use googletag.pubads().setPrivacySettings() instead.")
        }),
        IM = function() {
            Object.defineProperty(window, "google_DisableInitialLoad", {
                get: function() {
                    FM();
                    return !0
                },
                set: function() {
                    FM()
                },
                configurable: !0
            })
        },
        Cl = function(a, b, c) {
            aM.call(this, a, b, c);
            var d = this,
                e = Qg().j,
                f = Qg().m,
                g = !1;
            this.setTargeting = G(a, 1, function(h, k) {
                var l = null;
                "string" === typeof k ? l = [k] : Array.isArray(k) ? l = k : na(k) && (l = _.t(Array, "from").call(Array, k));
                var m = "string" === typeof h && !Dj(h);
                l = l && ra(l);
                var n, p = null != (n = null == l ? void 0 : l.every(function(r) {
                    return "string" === typeof r
                })) ? n : !1;
                if (!m || !p) return M(b, ij("PubAdsService.setTargeting", [h, k])), d;
                k = l;
                m = (y = tc(e, Ij, 2), _.t(y, "find")).call(y, function(r) {
                    return Fj(r) === h
                });
                if ("gpt-beta" === h) {
                    if (c.B) return M(b, CL(k.join())), d;
                    if (m) return M(b, DL(k.join())), d;
                    k = EM(k)
                }
                m ? Gj(m, k) : (m = Gj(Hj(new Ij, h), k), Jj(e, 2, Ij, m));
                b.info(Kj(h, k.join(), c.getName()));
                return d
            });
            this.clearTargeting = G(a, 2, function(h) {
                if (void 0 === h) return Gc(e, 2), b.info(AL(c.getName())), d;
                if ("gpt-beta" === h) return M(b, EL(h)), d;
                var k = tc(e, Ij, 2),
                    l = _.t(k, "findIndex").call(k, function(m) {
                        return Fj(m) === h
                    });
                if (0 > l) return M(b, tL(h, c.getName())), d;
                k.splice(l, 1);
                Gc(e, 2, k);
                b.info(sL(h, c.getName()));
                return d
            });
            this.getTargeting = G(a, 38, function(h) {
                if ("string" !== typeof h) return M(b, ij("PubAdsService.getTargeting", [h])), [];
                var k = (y = tc(e, Ij, 2), _.t(y, "find")).call(y, function(l) {
                    return Fj(l) === h
                });
                return k ? gc(k, 2).slice() : []
            });
            this.getTargetingKeys = G(a, 39, function() {
                return tc(e, Ij, 2).map(function(h) {
                    return Fj(h)
                })
            });
            this.setCategoryExclusion = G(a, 3, function(h) {
                if ("string" !== typeof h || Dj(h)) return M(b, ij("PubAdsService.setCategoryExclusion", [h])), d;
                (y = gc(e, 3), _.t(y, "includes")).call(y, h) || pc(e, 3, h);
                b.info(uL(h));
                return d
            });
            this.clearCategoryExclusions = G(a, 4, function() {
                v(e, 3, Rp);
                b.info(vL());
                return d
            });
            this.disableInitialLoad = G(a, 5, function() {
                v(e, 4, !0);
                g || (g = !0, IM())
            });
            this.enableSingleRequest = G(a, 6, function() {
                if (c.B && !H(e, 6)) return M(b, iL("PubAdsService.enableSingleRequest")), !1;
                b.info(jL("single request"));
                v(e, 6, !0);
                return !0
            });
            this.enableAsyncRendering = G(a, 7, function() {
                return !0
            });
            this.enableSyncRendering = G(a, 8, function() {
                Hw("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
                return !1
            });
            this.enableLazyLoad = G(a, 485, function(h) {
                var k = new $q;
                v(k, 1, 800);
                v(k, 2, 400);
                v(k, 3, 3);
                if (_.fa(h)) {
                    var l = h.fetchMarginPercent;
                    "number" === typeof l && (0 <= l ? v(k, 1, l) : -1 === l && mc(k, 1));
                    l = h.renderMarginPercent;
                    "number" === typeof l && (0 <= l ? v(k, 2, l) : -1 === l && mc(k, 2));
                    h = h.mobileScaling;
                    "number" === typeof h && (0 < h ? v(k, 3, h) : -1 === h && v(k, 3, 1))
                }
                Kc(e, 5, k)
            });
            this.setCentering = G(a, 9, function(h) {
                h = !!h;
                b.info(kL("centering", String(h)));
                v(e, 15, h)
            });
            this.definePassback = G(a, 10, function(h, k) {
                return (h = Bl(a, b, c, h, k)) && h.Pd
            });
            this.refresh = G(a, 11, function() {
                var h = ld.apply(0, arguments),
                    k = _.w(h),
                    l = k.next().value;
                k = k.next().value;
                k = void 0 === k ? {} : k;
                l && !Array.isArray(l) || !_.fa(k) || k.changeCorrelator && "boolean" !== typeof k.changeCorrelator ? M(b, ij("PubAdsService.refresh", h)) : (k && !1 === k.changeCorrelator || e.setCorrelator(Lw()), l = l ? yl(l, c) : c.m, c.refresh(Sh(e, f), l) || M(b, ij("PubAdsService.refresh", h)))
            });
            this.enableVideoAds = G(a, 12, function() {
                v(e, 21, !0);
                JM(c, e)
            });
            this.setVideoContent = G(a, 13, function(h, k) {
                KM(c, h, k, e)
            });
            this.collapseEmptyDivs = G(a, 14, function(h) {
                h = void 0 === h ? !1 : h;
                v(e, 11, !0);
                var k = !!h;
                v(e, 10, k);
                mi("gpt_ced", function(l) {
                    I(l, "sc", k ? "t" : "f");
                    I(l, "level", "page");
                    si(l, a)
                });
                b.info(qL(String(k)));
                return !!H(e, 11)
            });
            this.clear = G(a, 15, function(h) {
                if (Array.isArray(h)) return LM(c, e, f, yl(h, c));
                if (void 0 === h) return LM(c, e, f, c.m);
                M(b, ij("PubAdsService.clear", [h]));
                return !1
            });
            this.setLocation = G(a, 16, function(h) {
                if ("string" !== typeof h) return M(b, ij("PubAdsService.setLocation", [h])), d;
                v(e, 8, h);
                return d
            });
            this.setCookieOptions = G(a, 17, function() {
                GM();
                return d
            });
            this.setTagForChildDirectedTreatment = G(a, 18, function(h) {
                HM();
                if (1 !== h && 0 !== h) return M(b, ML("PubadsService.setTagForChildDirectedTreatment", Ek(h), "0,1")), d;
                var k = BI(e) || new yI;
                k.setTagForChildDirectedTreatment(h);
                Kc(e, 25, k);
                return d
            });
            this.clearTagForChildDirectedTreatment = G(a, 19, function() {
                HM();
                var h = BI(e);
                if (!h) return d;
                h.clearTagForChildDirectedTreatment();
                Kc(e, 25, h);
                return d
            });
            this.setPublisherProvidedId = G(a, 20, function(h) {
                h = String(h);
                b.info(kL("PPID", h));
                v(e, 16, h);
                return d
            });
            this.set = G(a, 21, function(h, k) {
                if ("string" !== typeof h || !h.length || void 0 === nm()[h] || "string" !== typeof k) return M(b, ij("PubAdsService.set", [h, k])), d;
                var l = (y = e.qa(), _.t(y, "find")).call(y, function(m) {
                    return Fj(m) === h
                });
                l ? Gj(l, [k]) : (l = Hj(new Ij, h), pc(l, 2, k), Jj(e, 14, Ij, l));
                b.info(eL(h, String(k), c.getName()));
                return d
            });
            this.get = G(a, 22, function(h) {
                if ("string" !== typeof h) return M(b, ij("PubAdsService.get", [h])), null;
                var k = (y = e.qa(), _.t(y, "find")).call(y, function(l) {
                    return Fj(l) === h
                });
                return (k = k && gc(k, 2)) ? k[0] : null
            });
            this.getAttributeKeys = G(a, 23, function() {
                return e.qa().map(function(h) {
                    return Fj(h)
                })
            });
            this.display = G(a, 24, function(h, k, l, m) {
                return void c.display(h, k, void 0 === l ? "" : l, void 0 === m ? "" : m)
            });
            this.updateCorrelator = G(a, 25, function() {
                Hw(xl("update"));
                M(b, HL());
                e.setCorrelator(Lw());
                return d
            });
            this.defineOutOfPagePassback = G(a, 35, function(h) {
                h = Bl(a, b, c, h, [1, 1]);
                if (!h) return null;
                v(h.Ia, 15, 1);
                return h.Pd
            });
            this.setForceSafeFrame = G(a, 36, function(h) {
                if ("boolean" !== typeof h) return M(b, ij("PubAdsService.setForceSafeFrame", [Ek(h)])), d;
                v(e, 13, h);
                return d
            });
            this.setSafeFrameConfig = G(a, 37, function(h) {
                var k = Fk(b, h);
                if (!k) return M(b, ij("PubAdsService.setSafeFrameConfig", [h])), d;
                Kc(e, 18, k);
                return d
            });
            this.setRequestNonPersonalizedAds = G(a, 445, function(h) {
                HM();
                if (0 !== h && 1 !== h) return M(b, ML("PubAdsService.setRequestNonPersonalizedAds", Ek(h), "0,1")), d;
                var k = BI(e) || new yI;
                v(k, 8, !!h);
                Kc(e, 25, k);
                return d
            });
            this.setTagForUnderAgeOfConsent = G(a, 447, function(h) {
                h = void 0 === h ? 2 : h;
                HM();
                if (2 !== h && 0 !== h && 1 !== h) return M(b, ML("PubadsService.setTagForUnderAgeOfConsent", Ek(h), "2,0,1")), d;
                var k = BI(e) || new yI;
                k.setTagForUnderAgeOfConsent(h);
                Kc(e, 25, k);
                return d
            });
            this.getCorrelator = G(a, 27, function() {
                return String(e.getCorrelator())
            });
            this.getTagSessionCorrelator = G(a, 631, function() {
                return je(_.q)
            });
            this.getVideoContent = G(a, 30, function() {
                return MM(c, e)
            });
            this.getVersion = G(a, 568, function() {
                return a.ib ? String(a.ib) : a.Fa
            });
            this.forceExperiment = G(a, 569, function(h) {
                return void c.forceExperiment(h)
            });
            this.setCorrelator = G(a, 28, function(h) {
                Hw(xl("set"));
                M(b, GL());
                if (Jh(window)) return d;
                if (!("number" === typeof h && isFinite(h) && 0 == h % 1 && 0 < h)) return M(b, ij("PubadsService.setCorrelator", [Ek(h)])), d;
                e.setCorrelator(h);
                v(e, 27, !0);
                return d
            });
            this.markAsAmp = G(a, 570, function() {
                window.console && window.console.warn && window.console.warn("googletag.pubads().markAsAmp() is deprecated and ignored.")
            });
            this.isSRA = G(a, 571, function() {
                return !!H(e, 6)
            });
            this.setImaContent = G(a, 328, function(h, k) {
                Gk(e, 22) ? KM(c, h, k, e) : (v(e, 21, !0), JM(c, e), "string" === typeof h && v(e, 19, h), "string" === typeof k && v(e, 20, k))
            });
            this.getImaContent = G(a, 329, function() {
                return Gk(e, 22) ? MM(c, e) : c.B ? {
                    vid: F(e, 19) || "",
                    cmsid: F(e, 20) || ""
                } : null
            });
            this.isInitialLoadDisabled = G(a, 572, function() {
                return !!H(e, 4)
            });
            this.setPrivacySettings = G(a, 648, function(h) {
                if (!_.fa(h)) return M(b, ij("PubAdsService.setPrivacySettings", [h])), d;
                var k = h.restrictDataProcessing,
                    l = h.childDirectedTreatment,
                    m = h.underAgeOfConsent,
                    n = h.limitedAds,
                    p = h.nonPersonalizedAds,
                    r = h.userOptedOutOfPersonalization,
                    z = h.trafficSource,
                    C, J = null != (C = BI(e)) ? C : new yI;
                "boolean" === typeof p ? v(J, 8, p) : void 0 !== p && M(b, Dk("PubAdsService.setPrivacySettings", Ek(h), "nonPersonalizedAds", Ek(p)));
                "boolean" === typeof r ? v(J, 13, r) : void 0 !== r && M(b, Dk("PubAdsService.setPrivacySettings", Ek(h), "userOptedOutOfPersonalization", Ek(r)));
                "boolean" === typeof k ? v(J, 1, k) : void 0 !== k && M(b, Dk("PubAdsService.setPrivacySettings", Ek(h), "restrictDataProcessing", Ek(k)));
                "boolean" === typeof n ? ((k = wl()) || !_.B(Cx) ? (v(J, 9, n), k || M(b, ZL())) : M(b, $L()), n && !H(J, 9) && a.Ib && (n = a.bb, p = mg(a), r = new lC, r = oc(r, 1, !0, !1), k = oc(r, 2, k, !1), k = pg(p, 11, qg, k), zd(n, k))) : void 0 !== n && M(b, Dk("PubAdsService.setPrivacySettings", Ek(h), "limitedAds", Ek(n)));
                void 0 !== m && (null === m ? J.setTagForUnderAgeOfConsent(2) : !1 === m ? J.setTagForUnderAgeOfConsent(0) : !0 === m ? J.setTagForUnderAgeOfConsent(1) : M(b, Dk("PubAdsService.setPrivacySettings", Ek(h), "underAgeOfConsent", Ek(m))));
                void 0 !== l && (null === l ? J.clearTagForChildDirectedTreatment() : !1 === l ? J.setTagForChildDirectedTreatment(0) : !0 === l ? J.setTagForChildDirectedTreatment(1) : M(b, Dk("PubAdsService.setPrivacySettings", Ek(h), "childDirectedTreatment", Ek(l))));
                void 0 !== z && (null === z ? mc(J, 10) : (y = _.t(Object, "values").call(Object, Rj), _.t(y, "includes")).call(y, z) ? v(J, 10, z) : M(b, Dk("PubAdsService.setPrivacySettings", Ek(h), "trafficSource", Ek(z))));
                Kc(e, 25, J);
                return d
            })
        };
    _.N(Cl, aM);
    Ag(Cl, 7);
    var Qo = function(a, b) {
        var c = this,
            d = [],
            e = [];
        this.addSize = _.Vg(a, 88, function(f, g) {
            var h;
            if (h = Kk(f)) h = Jk(g) || Array.isArray(g) && g.every(Jk);
            h ? d.push([f, g]) : (e.push([f, g]), M(b, ij("SizeMappingBuilder.addSize", [f, g])));
            return c
        });
        this.build = _.Vg(a, 89, function() {
            if (e.length) return M(b, cL(Ek(e))), null;
            ma(d);
            return d
        })
    };
    var Rq = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 856);
        this.J = b;
        this.slotId = c;
        this.Db = T(this);
        this.Mb = T(this);
        this.pa = T(this);
        this.K = T(this);
        this.l = T(this);
        this.C = Y(this, d);
        this.G = Y(this, e);
        this.o = Y(this, f);
        this.L = Y(this, g);
        h && AD(this, h)
    };
    _.N(Rq, Z);
    var NM = function(a) {
        qD(a.Db, a.C.value);
        qD(a.Mb, a.G.value);
        qD(a.pa, a.o.value);
        pD(a.K);
        pD(a.l)
    };
    Rq.prototype.j = function() {
        var a = this.L.value;
        if (_.B(ux) && a) {
            var b = this.o.value;
            if (0 !== (null == b ? void 0 : b.kind) || b.ta.length) {
                var c;
                var d = null == (c = this.J.j.get(this.slotId)) ? void 0 : c.ld;
                var e = null == d ? void 0 : d.get(a);
                if (!e) throw new Sk("Could not find bid with id: " + a);
                d = void 0 === e.height ? this.C.value : e.height;
                c = void 0 === e.width ? this.G.value : e.width;
                var f = e.adUrl,
                    g = e.ie,
                    h = void 0 === e.cpm ? 0 : e.cpm;
                if (1 !== e.format) NM(this);
                else {
                    this.K.j(e);
                    if (!g && !f) throw new Sk("Could not find ad to render for bid id: " + a);
                    e = {
                        ad: El(g, h),
                        adUrl: El(f, h),
                        adId: a,
                        width: c,
                        height: d
                    };
                    g = btoa(JSON.stringify(e));
                    0 === (null == b ? void 0 : b.kind) ? (e = this.pa, f = e.j, b = b.ta.replace(new RegExp("{{GOOGLE_PBJS_AD_CONFIG}}".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), g.replace(/\$/g, "$$$$")), f.call(e, {
                        kind: 0,
                        ta: b
                    }), pD(this.l)) : (qD(this.pa, b), qD(this.l, g));
                    qD(this.Db, d);
                    qD(this.Mb, c);
                    window.postMessage(JSON.stringify({
                        message: "Prebid Request",
                        adId: a
                    }), "*")
                }
                LK(this.J, this.slotId)
            } else NM(this)
        } else NM(this)
    };
    var OM = function(a, b, c, d, e, f) {
        Z.call(this, a, 975);
        this.l = b;
        this.o = c;
        this.pbjs = d;
        this.C = e;
        this.requestBidsConfig = f;
        this.A = new wD
    };
    _.N(OM, Z);
    OM.prototype.j = function() {
        Jl(this.C, this.pbjs, this.l, this.o, this.requestBidsConfig);
        this.A.notify()
    };
    var PM = function(a, b) {
        Z.call(this, a, 937, _.A($x));
        this.o = T(this);
        this.l = T(this);
        this.G = T(this);
        this.C = T(this);
        this.K = zD(this, b)
    };
    _.N(PM, Z);
    PM.prototype.j = function() {
        var a = this.K.value;
        if (a) {
            var b = {},
                c = new u.Set,
                d;
            if (null == (d = vc(a, $u, 2)) ? 0 : Mq(d, 2)) b["*"] = {
                lc: !0
            };
            d = _.w(tc(a, Zu, 1));
            for (var e = d.next(); !e.done; e = d.next()) {
                e = e.value;
                for (var f = _.w([jo(e, 2), jo(e, 1)].filter(function(n) {
                        return !!n
                    })), g = f.next(); !g.done; g = f.next()) b[g.value] = {
                    lc: Mq(e, 3)
                };
                e = _.w(gc(e, 4));
                for (f = e.next(); !f.done; f = e.next()) c.add(f.value)
            }
            qD(this.o, b);
            qD(this.l, [].concat(_.xd(c)));
            var h, k;
            b = null == (h = vc(a, $u, 2)) ? void 0 : null == (k = vc(h, Uu, 1)) ? void 0 : tc(k, Wu, 1);
            qD(this.G, (null == b ? 0 : b.length) ? b : null);
            var l, m;
            a = null == (l = vc(a, $u, 2)) ? void 0 : null == (m = vc(l, Uu, 3)) ? void 0 : tc(m, Wu, 1);
            qD(this.C, (null == a ? 0 : a.length) ? a : null)
        } else QM(this)
    };
    var QM = function(a) {
        pD(a.o);
        pD(a.l);
        pD(a.G);
        pD(a.C)
    };
    PM.prototype.I = function(a) {
        this.m(a)
    };
    PM.prototype.m = function() {
        QM(this)
    };
    var RM = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/,
        SM = function(a, b, c, d, e, f, g, h, k, l) {
            Z.call(this, a, 920);
            this.K = b;
            this.P = e;
            this.Ma = k;
            this.J = l;
            this.G = new u.Map;
            this.O = [];
            this.l = T(this);
            this.o = T(this);
            this.C = T(this);
            this.aa = U(this, c);
            this.W = new vD(d);
            this.L = Y(this, f);
            this.T = Y(this, g);
            this.ca = Y(this, h)
        };
    _.N(SM, Z);
    SM.prototype.j = function() {
        var a = this.W.value;
        TM(this) ? a && a.libLoaded ? "function" !== typeof a.getEvents ? (this.K.error(OL()), UM(this)) : (a = VM(this, a)) ? (this.l.j(a), this.o.j(this.G), this.C.j(this.O)) : (this.l.j([]), pD(this.o), pD(this.C)) : UM(this) : UM(this)
    };
    SM.prototype.I = function(a) {
        this.m(a)
    };
    SM.prototype.m = function(a) {
        this.K.error(PL(a.message));
        UM(this)
    };
    var UM = function(a) {
            pD(a.l);
            pD(a.o);
            pD(a.C)
        },
        VM = function(a, b) {
            var c = (0, b.getEvents)(),
                d = c.filter(function(g) {
                    var h = g.args;
                    return "auctionEnd" === g.eventType && h.auctionId
                }),
                e = !1,
                f = a.aa.value.map(function(g) {
                    var h = new Ru,
                        k = function(Aa) {
                            return Aa === g.getDomId() || Aa === g.getAdUnitPath()
                        },
                        l, m = null != (l = WM.get(g)) ? l : 0,
                        n;
                    l = null != (n = d.filter(function(Aa) {
                        var Ua, ic, Za;
                        return Number(null == (Ua = Aa.args) ? void 0 : Ua.timestamp) > m && (null == (ic = Aa.args) ? void 0 : null == (Za = ic.adUnitCodes) ? void 0 : _.t(Za, "find").call(Za, k))
                    })) ? n : [];
                    if (!l.length) return a.O.push(g), h;
                    var p;
                    n = null == (p = l.reduce(function(Aa, Ua) {
                        return Number(Ua.args.timestamp) > Number(Aa.args.timestamp) ? Ua : Aa
                    })) ? void 0 : p.args;
                    if (!n) return h;
                    var r = void 0 === n.bidderRequests ? [] : n.bidderRequests;
                    p = void 0 === n.bidsReceived ? [] : n.bidsReceived;
                    var z = n.auctionId;
                    n = n.timestamp;
                    if (!z || null == n || !r.length) return h;
                    WM.has(g) || _.to(g, function() {
                        return WM.delete(g)
                    });
                    WM.set(g, n);
                    n = Su(h);
                    Math.random() < _.A(xx) && b.version && RM.test(b.version) && v(n, 6, b.version);
                    l = new u.Map;
                    var C = Xh(function() {
                            return cm(c, z)
                        }),
                        J = Ej(a.P[g.getDomId()]),
                        V = {};
                    r = _.w(r);
                    for (var P = r.next(); !P.done; V = {
                            Ac: V.Ac,
                            Cc: V.Cc
                        }, P = r.next()) {
                        var L = P.value;
                        V.Ac = L.bidderCode;
                        var W = L.bids;
                        P = L.timeout;
                        V.Cc = L.src;
                        L = L.auctionStart;
                        var R = {};
                        W = _.w(W);
                        for (var X = W.next(); !X.done; R = {
                                vb: R.vb
                            }, X = W.next()) {
                            var wa = X.value;
                            R.vb = wa.bidId;
                            var ua = wa.transactionId;
                            X = wa.adUnitCode;
                            wa = wa.getFloor;
                            if (R.vb && k(X)) {
                                e = !0;
                                Sl(n, g, X);
                                ua && (Gk(n, 4) || v(n, 4, ua), a.G.has(ua) || a.G.set(ua, L));
                                Gk(n, 8) || v(n, 8, P);
                                var Ma = _.t(p, "find").call(p, function(Aa) {
                                    return function(Ua) {
                                        return Ua.requestId === Aa.vb
                                    }
                                }(R));
                                ua = Ll(n, function(Aa) {
                                    return function() {
                                        var Ua = Ol(new Pl, Aa.Ac);
                                        switch (Aa.Cc) {
                                            case "client":
                                                v(Ua, 7, 1);
                                                break;
                                            case "s2s":
                                                v(Ua, 7, 2)
                                        }
                                        return Ua
                                    }
                                }(V)());
                                Ul(n, ua, X, a.T.value, a.ca.value, wa);
                                Ma ? (Nl(ua, 1), "number" === typeof Ma.timeToRespond && Ql(ua, Ma.timeToRespond), X = Kl(Ma, l, J), Ml(ua, X)) : (X = C().get(R.vb)) && !X.Hd ? Ql(Nl(ua, 2), Math.round(X.latency)) : (Nl(ua, 3), Ql(ua, P))
                            }
                        }
                    }
                    var Cb;
                    (null == (Cb = b.getConfig) ? 0 : Cb.call(b).useBidCache) && Rl(n, g, z, J, l, b);
                    MK(a.J, g, l);
                    return h
                });
            return e ? f : null
        },
        TM = function(a) {
            var b, c;
            return !!(null == (b = a.L.value) ? 0 : null == (c = b["*"]) ? 0 : c.lc) || a.Ma.split(",").some(function(d) {
                var e, f;
                return !!(null == (e = a.L.value) ? 0 : null == (f = e[d]) ? 0 : f.lc)
            })
        },
        WM = new u.Map;
    var XM, YM = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 1019);
        this.P = g;
        this.l = new vD(b);
        this.C = new vD(c);
        this.G = new vD(d);
        this.o = Y(this, e);
        this.K = Y(this, f)
    };
    _.N(YM, Z);
    YM.prototype.j = function() {
        ZM(this);
        $M(this)
    };
    var $M = function(a) {
            if (!(Math.random() >= _.A(tx))) {
                var b = (a.K.value || []).filter(function(k) {
                    return Ej(a.P[k.getDomId()]).some(function(l) {
                        return "hb_pb" === Fj(l)
                    })
                });
                if (b.length) {
                    var c, d, e, f, g, h = (null == (c = a.l.value) ? 0 : null == (d = c.adUnits) ? 0 : d.length) ? [].concat(_.xd(new u.Set(null == (e = a.l.value) ? void 0 : e.adUnits.map(function(k) {
                        return k.code
                    })))) : _.t(Object, "keys").call(Object, (null == (f = a.l.value) ? void 0 : null == (g = f.getAdserverTargeting) ? void 0 : g.call(f)) || {});
                    c = new vj("haux");
                    I(c, "ius", b.map(function(k) {
                        return k.getAdUnitPath()
                    }).join("~"));
                    I(c, "dids", b.map(function(k) {
                        return k.getDomId()
                    }).join("~"));
                    I(c, "paucs", h.join("~"));
                    si(c, a.context);
                    xj(c, 1)
                }
            }
        },
        ZM = function(a) {
            mi("ppc_hrc", function(b) {
                var c;
                null != XM || (XM = null == (c = (y = window.google_js_reporting_queue = window.google_js_reporting_queue || [], _.t(y, "find")).call(y, function(g) {
                    return "1" === g.label
                })) ? void 0 : c.value);
                var d = EC("navigationStart", window);
                XM && I(b, "lt", XM);
                var e;
                I(b, "tids", [].concat(_.xd((null == (e = a.o.value) ? void 0 : _.t(e, "keys").call(e)) || [])).join());
                var f;
                I(b, "asts", [].concat(_.xd((null == (f = a.o.value) ? void 0 : _.t(f, "values").call(f)) || [])).map(function(g) {
                    return g - d
                }).join());
                a.C.value ? I(b, "ht", a.C.value - d) : a.G.value && I(b, "ht", _.B(vx) ? XM : 0);
                si(b, a.context)
            }, a.o.value ? _.A(sx) : 0)
        };
    var Qq = function(a, b, c, d, e) {
        Z.call(this, a, 982);
        this.A = yD(this);
        this.o = Y(this, b);
        this.l = new vD(c);
        this.G = Y(this, d);
        this.C = Y(this, e)
    };
    _.N(Qq, Z);
    Qq.prototype.j = function() {
        var a = this,
            b;
        if (this.o.value && (null == (b = this.l.value) ? 0 : b.onEvent)) {
            b = {};
            for (var c = _.w(["bidWon", "staleRender", "adRenderFailed", "adRenderSucceeded"]), d = c.next(); !d.done; b = {
                    wb: b.wb,
                    Ob: b.Ob
                }, d = c.next()) b.wb = d.value, b.Ob = function(e) {
                return function(f) {
                    if (a.o.value === f.adId) {
                        var g = new vj("hbm_brt");
                        si(g, a.context);
                        I(g, "et", e.wb);
                        I(g, "sf", !!a.G.value);
                        var h;
                        I(g, "qqid", null != (h = a.C.value) ? h : "");
                        var k, l, m;
                        I(g, "bc", String(null != (m = null != (l = f.bidderCode) ? l : null == (k = f.bid) ? void 0 : k.bidder) ? m : ""));
                        xj(g, 1)
                    }
                }
            }(b), this.l.value.onEvent(b.wb, b.Ob), _.to(this, function(e) {
                return function() {
                    return void _.bh(a.context, a.id, function() {
                        var f, g;
                        return void(null == (f = a.l.value) ? void 0 : null == (g = f.offEvent) ? void 0 : g.call(f, e.wb, e.Ob))
                    }, !0)
                }
            }(b))
        }
        this.A.notify()
    };
    Qq.prototype.m = function() {
        this.A.notify()
    };
    var aN = function(a, b, c, d, e, f) {
        Z.call(this, a, 976);
        this.nextFunction = d;
        this.l = e;
        this.requestBidsConfig = f;
        AD(this, b);
        AD(this, c)
    };
    _.N(aN, Z);
    aN.prototype.j = function() {
        var a;
        null == (a = this.nextFunction) || a.apply(this.l, [this.requestBidsConfig])
    };
    var bN = function(a, b, c, d) {
        Z.call(this, a, 981);
        this.o = b;
        this.l = c;
        this.requestBidsConfig = d;
        this.A = new wD
    };
    _.N(bN, Z);
    bN.prototype.j = function() {
        var a, b, c = null != (b = null == (a = this.o) ? void 0 : a.get("*")) ? b : _.A(yx);
        if (c) {
            var d;
            null != (d = this.l) && v(d, 1, 1);
            this.requestBidsConfig.timeout = c
        }
        this.A.notify()
    };
    var cN = function(a, b, c, d, e, f) {
        _.HB.call(this);
        this.j = a;
        this.m = b;
        this.B = c;
        this.I = d;
        this.l = e;
        this.pbjs = f
    };
    _.N(cN, _.HB);
    cN.prototype.push = function(a) {
        var b = a.context,
            c = a.nextFunction;
        a = a.requestBidsConfig;
        if (this.pbjs) {
            _.B(rx) && (a.timeout = 1);
            var d = new Be;
            _.Pn(this, d);
            var e = new bN(this.j, this.I, this.l, a),
                f = new OM(this.j, this.m, this.B, this.pbjs, b, a);
            D(d, e);
            D(d, f);
            D(d, new aN(this.j, f.A, e.A, c, b, a));
            Qe(d)
        }
    };
    var dN = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 951);
        this.F = window;
        this.l = T(this);
        this.o = T(this);
        this.K = U(this, b);
        this.G = Y(this, d);
        this.L = Y(this, e);
        this.C = Y(this, f);
        this.O = Y(this, g);
        AD(this, c)
    };
    _.N(dN, Z);
    dN.prototype.j = function() {
        var a = !!dg().pbjs_hooks;
        this.o.j(a);
        qD(this.l, a ? null : _.me());
        var b, c = null == (b = this.G.value) ? void 0 : b.size,
            d;
        b = (null == (d = this.C.value) ? void 0 : d.size) || _.A(yx);
        d = this.K.value;
        var e, f = null != (e = dg().pbjs_hooks) ? e : [];
        e = new cN(this.context, this.G.value, this.L.value, this.C.value, this.O.value, d);
        _.Pn(this, e);
        f = _.w(f);
        for (var g = f.next(); !g.done; g = f.next()) e.push(g.value);
        if (c || b || a) dg().pbjs_hooks = fm(this.context, e);
        !c && !b || a || dm(d, this.F)
    };
    var eN = null;
    var Em = 0,
        fN = new _.Mh(-9, -9);
    var cn = 0;
    var gN = function(a) {
            this.j = a;
            this.D = [];
            this.m = "";
            this.H = new u.Set(wk(ly));
            a = _.w(H(this.j.ha.X, 8) ? "loc gpic cookie ms ppid top etu uule video_doc_id adsid".split(" ") : []);
            for (var b = a.next(); !b.done; b = a.next()) this.H.add(b.value)
        },
        iN = function(a) {
            if (0 === a.j.ga.Z.length) return "";
            var b = a.j,
                c = b.ha,
                d = c.F,
                e = c.J,
                f = c.ob,
                g = c.X,
                h = c.Aa,
                k = c.ja,
                l = b.ga,
                m = l.N,
                n = l.Ha,
                p = l.Z,
                r = b.Qd.Ed,
                z = b.md.nd,
                C = m.V,
                J = m.P,
                V = e.Wc,
                P = a.j;
            var L = new u.Map([
                ["pvsid", {
                    value: P.ha.J.Wc
                }],
                ["correlator", {
                    value: P.ga.N.V.getCorrelator()
                }]
            ]);
            hN(a, L);
            var W = a.j.hd,
                R = W.Wa,
                X = W.Ra;
            hN(a, "wbn" === W.Na ? new u.Map([
                ["wbsu", {
                    value: R.toString().replace(/^uuid-in-package:/, "")
                }],
                ["callback", {
                    value: X
                }]
            ]) : new u.Map);
            var wa = a.j,
                ua = wa.ga.N.V,
                Ma = wa.Ld,
                Cb = Ma.jd,
                Aa = Ma.Sd,
                Ua = Ma.Id;
            if (_.B(Vx)) var ic = new u.Map;
            else {
                var Za = 0 === Wd(ua, 24, 0);
                ic = new u.Map([
                    ["adsid", {
                        value: Za ? Cb : null
                    }],
                    ["pucrd", {
                        value: Za ? Aa : null
                    }],
                    ["jar", {
                        value: Ua
                    }]
                ])
            }
            hN(a, ic);
            var xb = a.j,
                Pb = xb.ga.N.V,
                Hc = xb.ee,
                fd = Hc.Va,
                Ic = Hc.Ua,
                Fd = H(Pb, 21),
                Jc;
            var Cg = new u.Map([
                ["hxva", {
                    value: Fd ? 1 : null
                }],
                ["cmsid", {
                    value: Fd ? F(Pb, 23) : null
                }],
                ["vid", {
                    value: Fd ? F(Pb, 22) : null
                }],
                ["pod", {
                    value: isNaN(Ic) ? null : Ic
                }],
                ["ppos", {
                    value: isNaN(fd) ? null : fd
                }],
                ["scor", {
                    value: null != (Jc = F(Pb, 29)) ? Jc : null
                }]
            ]);
            hN(a, Cg);
            _.B(Rx) ? hN(a, Bm(f, p, J)) : hN(a, new u.Map([
                ["eid", {
                    value: f
                }],
                ["debug_experiment_id", {
                    value: wm().split(",")
                }]
            ]));
            var nb = a.j,
                af = nb.ha.context;
            hN(a, new u.Map([
                ["output", {
                    value: nb.hd.Na
                }],
                ["gdfp_req", {
                    value: 1
                }],
                ["vrg", {
                    value: af.ib ? String(af.ib) : af.Fa
                }],
                ["ptt", {
                    value: 17
                }],
                ["impl", {
                    value: H(nb.ga.N.V, 6) ? "fifs" : "fif"
                }]
            ]));
            hN(a, new u.Map([
                ["co", {
                    value: 0 !== Wd(C, 24, 0) ? Wd(C, 24, 0) : null,
                    options: {
                        xa: !0
                    }
                }]
            ]));
            var Gy = a.j,
                nd = Gy.ha.X,
                od = BI(Gy.ga.N.V) || new yI,
                Hy = Wd(od, 6, 2),
                Iy, Jy, Ky, Ly;
            var VQ = new u.Map([
                ["rdp", {
                    value: H(od, 1) ? "1" : null
                }],
                ["ltd", {
                    value: H(od, 9) ? "1" : null
                }],
                ["gdpr_consent", {
                    value: null != (Iy = F(nd, 2)) ? Iy : null
                }],
                ["gdpr", {
                    value: Gk(nd, 3) ? H(nd, 3) ? "1" : "0" : null,
                    options: {
                        xa: !0
                    }
                }],
                ["addtl_consent", {
                    value: null != (Jy = F(nd, 4)) ? Jy : null
                }],
                ["tcfe", {
                    value: null != (Ky = F(nd, 7)) ? Ky : null
                }],
                ["us_privacy", {
                    value: null != (Ly = F(nd, 1)) ? Ly : null
                }],
                ["npa", {
                    value: H(nd, 6) || H(od, 8) ? 1 : null
                }],
                ["puo", {
                    value: _.B(ey) && H(od, 13) ? 1 : null
                }],
                ["tfua", {
                    value: 2 !== Hy ? Hy : null,
                    options: {
                        xa: !0
                    }
                }],
                ["tfcd", {
                    value: Gk(od, 5) ? F(od, 5) : null,
                    options: {
                        xa: !0
                    }
                }],
                ["trt", {
                    value: Gk(od, 10) ? F(od, 10) : null,
                    options: {
                        xa: !0
                    }
                }],
                ["tad", {
                    value: Gk(nd, 8) ? H(nd, 8) ? "1" : "0" : null,
                    options: {
                        xa: !0
                    }
                }]
            ]);
            hN(a, VQ);
            hN(a, an(a.j));
            hN(a, Wm(a.j));
            hN(a, Tm(a.j));
            var My = a.j,
                Ny = My.ga,
                WQ = My.ha.Aa,
                Oy = Ny.N.P[Ny.Z[0].getDomId()];
            var XQ = new u.Map([
                ["click", {
                    value: !WQ && Oy.getClickUrl() ? Oy.getClickUrl() : null
                }]
            ]);
            hN(a, XQ);
            hN(a, jm(a.j));
            hN(a, km(a.j));
            var Sj = d;
            Sj = void 0 === Sj ? _.q : Sj;
            var YQ = u.Map,
                ZQ = ["prev_scp", {
                    value: Hm(p, m)
                }],
                $Q = m.V,
                aR = m.P[p[0].getDomId()],
                wf = new ni;
            wf.set(0, 1 !== n);
            wf.set(1, !!H(aR, 17));
            wf.set(2, Nm(p, m));
            wf.set(3, H($Q, 27) || !1);
            wf.set(4, 3 === n);
            var bR = pi(wf);
            var cR = new YQ([ZQ, ["eri", {
                    value: bR
                }],
                ["cust_params", {
                    value: Jm(C),
                    options: {
                        ka: "&"
                    }
                }],
                ["stss", {
                    value: 0 === DM(_.cg(172)) ? null : DM(_.cg(172))
                }],
                ["ppid", {
                    value: 1 !== Wd(C, 24, 0) && Gk(C, 16) ? F(C, 16) : null,
                    options: {
                        xa: !0
                    }
                }],
                ["gct", {
                    value: hg("google_preview", Sj)
                }],
                ["sc", {
                    value: Number(_.cg(6)),
                    options: {
                        xa: !0
                    }
                }]
            ]);
            hN(a, cR);
            var dR = Km(C.qa());
            if (0 !== Wd(C, 24, 0)) var Py = new u.Map;
            else {
                var Qy = QD(k, "__gads", g),
                    Ry = "1" === QD(k, "__gpi_opt_out", g) ? "1" : null,
                    eR = u.Map,
                    fR = ["cookie_enabled", {
                        value: !Qy && RD(k, g) ? "1" : null
                    }],
                    Sy = d.document,
                    gR = Sy.domain,
                    hR = ["cdm", {
                        value: (dR || Kh(d)) === Sy.URL ? "" : gR
                    }],
                    Tj = QD(k, "__gpi", g);
                var iR = Tj && !_.t(Tj, "includes").call(Tj, "&") ? Tj : null;
                Py = new eR([
                    ["cookie", {
                        value: Qy,
                        options: {
                            xa: !0
                        }
                    }], fR, hR, ["gpic", {
                        value: iR
                    }],
                    ["gpico", {
                        value: Ry
                    }],
                    ["pdopt", {
                        value: Ry
                    }]
                ])
            }
            hN(a, Py);
            var Xo = a.j.ha.F;
            var jR = new u.Map([
                ["arp", {
                    value: aj(Xo) ? 1 : null
                }],
                ["abxe", {
                    value: id(Xo.top) || Bw(Xo.IntersectionObserver) ? 1 : null
                }]
            ]);
            hN(a, jR);
            _.B(Rx) || hN(a, new u.Map([
                ["expflags", {
                    value: _.cg(253) ? sk(xm) || null : null
                }]
            ]));
            var Ty = a.j,
                Uy = Ty.ha.F,
                kR = Km(Ty.ga.N.V.qa()),
                Uj = new u.Map([
                    ["dt", {
                        value: (new Date).getTime()
                    }]
                ]);
            if (!kR) {
                try {
                    var Vy = Math.round(Date.parse(Uy.document.lastModified) / 1E3) || null
                } catch (De) {
                    Vy = null
                }
                Uj.set("lmt", {
                    value: Vy
                })
            }
            var Wy = cn,
                Vj = ng(Uy);
            0 < Vj && Wy >= Vj && (Uj.set("dlt", {
                value: Vj
            }), Uj.set("idt", {
                value: Wy - Vj
            }));
            hN(a, Uj);
            for (var Xy, Yy = a.j, Yo = Yy.ga, Zy = Yo.N, $y = Yo.Z, az = Yo.N, lR = az.V, mR = az.P, bz = Yy.ha, xf = bz.F, nR = bz.Aa, Rd = Bh(!0, xf), oR = xf.document, cz = [], dz = [], ez = _.w($y), Zo = ez.next(); !Zo.done; Zo = ez.next()) {
                var fz = Zo.value,
                    gz = mR[fz.getDomId()],
                    hz = bi(fz, gz, oR, Ih(lR, gz)),
                    iz = void 0,
                    $o = nR ? null != (iz = hz) ? iz : fN : hz;
                $o && (cz.push(Math.round($o.x)), dz.push(Math.round($o.y)))
            }
            Rd && (Zy.tb = Rd);
            var Wj = Jh(xf) ? null : Bh(!1, xf);
            try {
                var jz = xf.top;
                var ap = Dm(jz.document, jz)
            } catch (De) {
                ap = new _.Mh(-12245933, -12245933)
            }
            Xy = new u.Map([
                ["adxs", {
                    value: cz
                }],
                ["adys", {
                    value: dz
                }],
                ["biw", {
                    value: Rd ? Rd.width : null
                }],
                ["bih", {
                    value: Rd ? Rd.height : null
                }],
                ["isw", {
                    value: Rd ? null == Wj ? void 0 : Wj.width : null
                }],
                ["ish", {
                    value: Rd ? null == Wj ? void 0 : Wj.height : null
                }],
                ["scr_x", {
                    value: Math.round(ap.x),
                    options: {
                        xa: !0
                    }
                }],
                ["scr_y", {
                    value: Math.round(ap.y),
                    options: {
                        xa: !0
                    }
                }],
                ["btvi", {
                    value: Fm($y, xf, Zy),
                    options: {
                        xa: !0,
                        ka: "|"
                    }
                }]
            ]);
            hN(a, Xy);
            hN(a, mm(a.j));
            hN(a, om(a.j));
            var kz = a.j,
                pR = kz.ga.N.V,
                Lb = kz.ha.F,
                lz = _.cg(251),
                mz, nz, oz, pz, qz, rz, sz;
            var Xj = Lb;
            Xj = void 0 === Xj ? Rv : Xj;
            try {
                var tz = Xj.history.length
            } catch (De) {
                tz = 0
            }
            var qR = u.Map,
                rR = ["u_his", {
                    value: tz
                }],
                sR = ["u_h", {
                    value: null == (mz = Lb.screen) ? void 0 : mz.height
                }],
                tR = ["u_w", {
                    value: null == (nz = Lb.screen) ? void 0 : nz.width
                }],
                uR = ["u_ah", {
                    value: null == (oz = Lb.screen) ? void 0 : oz.availHeight
                }],
                vR = ["u_aw", {
                    value: null == (pz = Lb.screen) ? void 0 : pz.availWidth
                }],
                wR = ["u_cd", {
                    value: null == (qz = Lb.screen) ? void 0 : qz.colorDepth
                }],
                Yj = Lb;
            Yj = void 0 === Yj ? _.q : Yj;
            var uz = Yj.devicePixelRatio,
                xR = ["u_sd", {
                    value: "number" === typeof uz ? +uz.toFixed(3) : null
                }],
                yR = ["u_tz", {
                    value: -(new Date).getTimezoneOffset()
                }];
            try {
                var vz, wz, xz, yz, zR = null != (yz = null == (vz = Lb.external) ? void 0 : null == (wz = vz.getHostEnvironmentValue) ? void 0 : null == (xz = wz.bind(Lb.external)) ? void 0 : xz("os-mode")) ? yz : "",
                    zz, Az = Number(null == (zz = JSON.parse(zR)) ? void 0 : zz["os-mode"]);
                var Bz = 0 <= Az ? Az + 1 : null
            } catch (De) {
                Bz = null
            }
            var AR = ["wsm", {
                    value: Bz
                }],
                BR = ["dmc", {
                    value: null != (sz = null == (rz = Lb.navigator) ? void 0 : rz.deviceMemory) ? sz : null
                }];
            var jh = F(pR, 8);
            if (jh) {
                50 < jh.length && (jh = jh.substring(0, 50));
                var Cz = "a " + Kt('role:1 producer:12 loc:"' + jh + '"')
            } else Cz = "";
            var CR = ["uule", {
                    value: Cz
                }],
                pd = Lb;
            pd = void 0 === pd ? _.q : pd;
            var yf = new ni;
            pd.SVGElement && pd.document.createElementNS && yf.set(0);
            var Dz = Aw();
            Dz["allow-top-navigation-by-user-activation"] && yf.set(1);
            Dz["allow-popups-to-escape-sandbox"] && yf.set(2);
            pd.crypto && pd.crypto.subtle && yf.set(3);
            pd.TextDecoder && pd.TextEncoder && yf.set(4);
            var DR = ["bc", {
                    value: pi(yf)
                }],
                ER = ["uach", {
                    value: lz ? Kt(lz, 3) : null
                }];
            if (_.cg(221)) var bp = null;
            else {
                var Ez, kh = null == (Ez = Lb.navigator) ? void 0 : Ez.userActivation;
                if (kh) {
                    var cp = 0;
                    if (null == kh ? 0 : kh.hasBeenActive) cp |= 1;
                    if (null == kh ? 0 : kh.isActive) cp |= 2;
                    bp = cp
                } else bp = void 0
            }
            var FR = ["uas", {
                value: bp
            }];
            a: {
                try {
                    var Fz, Gz, dp = null == (Fz = Lb.performance) ? void 0 : null == (Gz = Fz.getEntriesByType("navigation")) ? void 0 : Gz[0];
                    if (null == dp ? 0 : dp.type) {
                        var Hz;
                        var Iz = null != (Hz = JH.get(dp.type)) ? Hz : null;
                        break a
                    }
                } catch (De) {}
                var Jz, Kz, Lz;Iz = null != (Lz = KH.get(null == (Jz = Lb.performance) ? void 0 : null == (Kz = Jz.navigation) ? void 0 : Kz.type)) ? Lz : null
            }
            hN(a, new qR([rR, sR, tR, uR, vR, wR, xR, yR, AR, BR, CR, DR, ER, FR, ["nvt", {
                value: Iz
            }]]));
            var Mz = ig("google_preview", d),
                Zj = d.document,
                Nz = Mz ? Lm(Zj.URL) : Zj.URL,
                Oz = Mz ? Lm(Zj.referrer) : Zj.referrer,
                Pz = !1;
            if (h) var zf = Km(C.qa());
            else {
                var Qz;
                zf = null != (Qz = Km(J[p[0].getDomId()].qa())) ? Qz : Km(C.qa())
            }
            if (null != zf) {
                var ep = Nz;
                Jh(d) || (Oz = "", Pz = !0)
            } else zf = Nz;
            var Rz = Mm(d),
                lh = new u.Map([
                    ["nhd", {
                        value: Rz || null
                    }],
                    ["url", {
                        value: zf
                    }],
                    ["loc", {
                        value: null !== ep && ep !== zf ? ep : null
                    }],
                    ["ref", {
                        value: Oz
                    }]
                ]),
                GR = zf,
                Sz = _.cg(252) || {};
            Sz.url = GR;
            _.E(ag).j = !0;
            bg[252] = Sz;
            if (Rz) {
                var HR = lh.set;
                var Tz, Uz, fp = id(d.top) && (null == (Tz = d.top) ? void 0 : null == (Uz = Tz.location) ? void 0 : Uz.href),
                    Vz, mh = null == (Vz = d.location) ? void 0 : Vz.ancestorOrigins,
                    ak = Zi(d) || "",
                    Ee = (null == mh ? void 0 : mh[mh.length - 1]) || "";
                if (_.B(nB)) {
                    var Wz = Ee && ow(Ee.match(_.nw)[3] || null) && ow(Ee.match(_.nw)[3] || null) !== ow(ak.match(_.nw)[3] || null),
                        IR = Wz ? Ee : ak || Ee,
                        Xz, JR = null != (Xz = null == mh ? void 0 : mh.length) ? Xz : 0;
                    .001 > Zd() && be({
                        uaoo: Wz ? "1" : "0",
                        ltw: fp || "",
                        rtw: ak,
                        aotw: Ee,
                        aol: String(JR)
                    }, "tpurl");
                    var Yz = fp || IR || ""
                } else Yz = fp || ak || Ee;
                var gp = Yz;
                var KR = gp ? Pz ? ow(gp.match(_.nw)[3] || null) : gp : null;
                HR.call(lh, "top", {
                    value: KR
                });
                lh.set("etu", {
                    value: e.Vb
                })
            }
            lh.set("scar", {
                value: r
            });
            hN(a, lh);
            var LR = a.j.ha.J.Wc;
            var MR = new u.Map([
                ["rumc", {
                    value: _.B(pB) || _.E(Xg).j ? LR : null
                }],
                ["rume", {
                    value: _.B(Xx) ? 1 : null
                }]
            ]);
            hN(a, MR);
            var nc = a.j.ha.F,
                NR = u.Map;
            var Fe = Pw(nc);
            var bk = wC(nc, nc.google_ad_width, nc.google_ad_height);
            var hp = Fe.location.href;
            if (Fe == Fe.top) var Zz = !0;
            else {
                var ip = !1,
                    jp = Fe.document;
                jp && jp.referrer && (hp = jp.referrer, Fe.parent == Fe.top && (ip = !0));
                var kp = Fe.location.ancestorOrigins;
                if (kp) {
                    var lp = kp[kp.length - 1];
                    lp && -1 == hp.indexOf(lp) && (ip = !1, hp = lp)
                }
                Zz = ip
            }
            var OR = Zz,
                ck = nc.top == nc ? 0 : id(nc.top) ? 1 : 2,
                Af = 4;
            bk || 1 != ck ? bk || 2 != ck ? bk && 1 == ck ? Af = 7 : bk && 2 == ck && (Af = 8) : Af = 6 : Af = 5;
            OR && (Af |= 16);
            var PR = "" + Af;
            if (nc != nc.top)
                for (var Sc = nc; Sc && Sc != Sc.top && id(Sc) && !Sc.sf_ && !Sc.$sf && !Sc.inGptIF && !Sc.inDapIF; Sc = Sc.parent);
            hN(a, new NR([
                ["frm", {
                    value: PR || null
                }],
                ["vis", {
                    value: OH(nc.document)
                }]
            ]));
            for (var $z = a.j, aA = $z.ga.Z, Zb = $z.ha.F, bA, cA, dA = [], eA = [], fA = _.w(aA), mp = fA.next(); !mp.done; mp = fA.next()) {
                var gA = Zb,
                    dk = Wh(mp.value),
                    np = Ew((null == dk ? void 0 : dk.parentElement) && Yh(dk.parentElement, gA) || null);
                if (!np || 1 === np[0] && 1 === np[3]) {
                    var hA = void 0,
                        iA = void 0,
                        jA = void 0,
                        ek = dk,
                        kA = gA,
                        lA = null != (jA = null == ek ? void 0 : ek.parentElement) ? jA : null,
                        op = null != (iA = Qh(lA)) ? iA : new _.Ph(0, 0);
                    sm(op, lA, kA, 100);
                    var pp = null != (hA = Qh(ek)) ? hA : new _.Ph(0, 0);
                    sm(pp, ek, kA, 1); - 1 === op.height && (pp.height = -1);
                    bA = op;
                    cA = pp;
                    var mA = bA,
                        nA = cA;
                    var oA = mA.width + "x" + mA.height;
                    var pA = nA.width + "x" + nA.height
                } else pA = oA = "-1x-1";
                var QR = pA;
                dA.push(oA);
                eA.push(QR)
            }
            if (null == eN) {
                var RR = wC(Zb, 500, 300);
                var qp = Zb.navigator,
                    nh = qp.userAgent,
                    qA = qp.platform,
                    SR = qp.product;
                if (!/Win|Mac|Linux|iPad|iPod|iPhone/.test(qA) && /^Opera/.test(nh)) var rp = !1;
                else if (/Win/.test(qA) && /Trident/.test(nh) && 11 <= Zb.document.documentMode) rp = !0;
                else {
                    var rA = (/WebKit\/(\d+)/.exec(nh) || [0, 0])[1],
                        TR = (/rv:(\d+\.\d+)/.exec(nh) || [0, 0])[1];
                    rp = !rA && "Gecko" === SR && 27 <= TR && !/ rv: 1\.8([^.] |\.0) /.test(nh) || 536 <= rA ? !0 : !1
                }
                eN = rp && !RR
            }
            var sA = 0 !== (0, _.nl)(),
                Ge = Bh(!0, Zb, sA).width,
                tA = [],
                uA = [],
                fk = [];
            if (null !== Zb && Zb != Zb.top) {
                var vA = Bh(!1, Zb).width;
                (-12245933 === Ge || -12245933 === vA || vA < Ge) && fk.push(8)
            } - 12245933 !== Ge && (1.5 * Ge < Zb.document.documentElement.scrollWidth ? fk.push(10) : sA && 1.5 * Zb.outerWidth < Ge && fk.push(10));
            for (var wA = _.w(aA), sp = wA.next(); !sp.done; sp = wA.next()) {
                var Tc = new ni,
                    tp = Wh(sp.value),
                    He = 0,
                    up = !1,
                    vp = !1;
                if (tp) {
                    for (var xA = 0, Bf = tp; Bf && 100 > xA; xA++, Bf = Bf.parentElement) {
                        var gk = Yh(Bf, Zb);
                        if (gk) {
                            var wp = gk,
                                yA = wp.display,
                                zA = wp.overflowX;
                            if ("visible" !== wp.overflowY) {
                                Tc.set(2);
                                var xp = Qh(Bf);
                                xp && (He = He ? Math.min(He, xp.width) : xp.width);
                                if (Tc.get(9)) break
                            }
                            qm(gk) && Tc.set(9);
                            "none" === yA && Tc.set(7);
                            if ("IFRAME" === Bf.nodeName) {
                                var yp = parseInt(gk.width, 10);
                                yp < Ge && (Tc.set(8), He = He ? Math.min(yp, He) : yp)
                            }
                            vp || (vp = "scroll" === zA || "auto" === zA);
                            up || (up = "flex" === yA)
                        } else Tc.set(3)
                    }
                    if (vp && up) {
                        var AA = tp.getBoundingClientRect().left;
                        (AA > Ge || 0 > AA) && Tc.set(11)
                    }
                } else Tc.set(1);
                for (var BA = _.w(fk), zp = BA.next(); !zp.done; zp = BA.next()) Tc.set(zp.value);
                tA.push(pi(Tc));
                uA.push(He)
            }
            hN(a, new u.Map([
                ["psz", {
                    value: dA,
                    options: {
                        ka: "|"
                    }
                }],
                ["msz", {
                    value: eA,
                    options: {
                        ka: "|"
                    }
                }],
                ["fws", {
                    value: tA
                }],
                ["ohw", {
                    value: uA
                }],
                ["ea", {
                    value: eN ? null : "0",
                    options: {
                        xa: !0
                    }
                }]
            ]));
            hN(a, jn(a.j));
            var CA = a.j;
            var UR = new u.Map([
                ["psts", {
                    value: JK(CA.ha.J, CA.ga.Z)
                }]
            ]);
            hN(a, UR);
            var DA;
            var EA = d.document.domain,
                oh = null != (DA = ce(g) && ee(d) ? d.document.cookie : null) ? DA : "",
                VR = d.history.length,
                hk = d.screen,
                WR = d.document.referrer;
            if (Ym()) var FA = window.gaGlobal || {};
            else {
                var Ap = Math.round((new Date).getTime() / 1E3),
                    Bp = d.google_analytics_domain_name,
                    ik = "undefined" == typeof Bp ? sC("auto", EA) : sC(Bp, EA),
                    YR = -1 < oh.indexOf("__utma=" + ik + "."),
                    ZR = -1 < oh.indexOf("__utmb=" + ik),
                    Cp;
                if (!(Cp = (Xm() || window).gaGlobal)) {
                    var $R = {};
                    Cp = (Xm() || window).gaGlobal = $R
                }
                var gb = Cp,
                    GA = !1;
                if (YR) {
                    var Dp = oh.split("__utma=" + ik + ".")[1].split(";")[0].split(".");
                    ZR ? gb.sid = Dp[3] : gb.sid || (gb.sid = Ap + "");
                    gb.vid = Dp[0] + "." + Dp[1];
                    gb.from_cookie = !0
                } else {
                    gb.sid || (gb.sid = Ap + "");
                    if (!gb.vid) {
                        GA = !0;
                        var aS = Math.round(2147483647 * Math.random()),
                            HA = VR,
                            IA, bS = qC.appName,
                            cS = qC.version,
                            dS = qC.language ? qC.language : qC.browserLanguage,
                            eS = qC.platform,
                            fS = qC.userAgent;
                        try {
                            var JA = qC.javaEnabled()
                        } catch (De) {
                            JA = !1
                        }
                        var Ie = [bS, cS, dS, eS, fS, JA ? 1 : 0].join("");
                        if (hk) Ie += hk.width + "x" + hk.height + hk.colorDepth;
                        else if (_.q.java && _.q.java.awt) {
                            var KA = _.q.java.awt.Toolkit.getDefaultToolkit().getScreenSize();
                            Ie += KA.screen.width + "x" + KA.screen.height
                        }
                        Ie = Ie + oh + (WR || "");
                        for (IA = Ie.length; 0 < HA;) Ie += HA-- ^ IA++;
                        gb.vid = (aS ^ rC(Ie) & 2147483647) + "." + Ap
                    }
                    gb.from_cookie || (gb.from_cookie = !1)
                }
                if (!gb.cid) {
                    b: {
                        var Cf = Bp,
                            LA = 999;Cf && (Cf = 0 == Cf.indexOf(".") ? Cf.substr(1) : Cf, LA = Cf.split(".").length);
                        for (var MA, NA = 999, jk = oh.split(";"), ph = 0; ph < jk.length; ph++) {
                            var kk = tC.exec(jk[ph]) || uC.exec(jk[ph]) || vC.exec(jk[ph]);
                            if (kk) {
                                var Ep = kk[1] || 0;
                                if (Ep == LA) {
                                    var OA = kk[2];
                                    break b
                                }
                                Ep < NA && (NA = Ep, MA = kk[2])
                            }
                        }
                        OA = MA
                    }
                    var qh = OA;GA && qh && -1 != qh.search(/^\d+\.\d+$/) ? (gb.vid = qh, gb.from_cookie = !0) : qh != gb.vid && (gb.cid = qh)
                }
                gb.dh = ik;
                gb.hid || (gb.hid = Math.round(2147483647 * Math.random()));
                FA = gb
            }
            var rh = FA,
                PA = rh.from_cookie;
            hN(a, PA && !ce(g) ? new u.Map : new u.Map([
                ["ga_vid", {
                    value: rh.vid
                }],
                ["ga_sid", {
                    value: rh.sid
                }],
                ["ga_hid", {
                    value: rh.hid
                }],
                ["ga_fc", {
                    value: PA
                }],
                ["ga_cid", {
                    value: rh.cid
                }],
                ["ga_wpids", {
                    value: d.google_analytics_uacct
                }]
            ]));
            var gS = u.Map,
                hS = ["js", {
                    value: _.B(zx) ? xC(d) : null
                }];
            if (_.B(zx)) a: {
                var sh = d;sh = void 0 === sh ? window : sh;
                var QA = xC(sh);
                if (QA) {
                    var lk = null;
                    try {
                        var Fp = sh;
                        "afma-gpt-sdk-a" == QA ? lk = Fp._gmptnl.pm("GAM=", V.toString()) || "5" : (lk = Fp.__gmptnl_n || "5", Fp.webkit.messageHandlers._gmptnl.postMessage("GAM="))
                    } catch (De) {
                        var mk = "3";
                        break a
                    }
                    mk = "string" === typeof lk ? lk : "3"
                } else mk = null
            }
            else mk = null;
            hN(a, new gS([hS, ["ms", {
                value: mk
            }]]));
            var nk = void 0 === nk ? navigator : nk;
            var RA = new u.Map;
            "runAdAuction" in nk && "joinAdInterestGroup" in nk && RA.set("td", {
                value: 1
            });
            hN(a, RA);
            _.B(Rx) || hN(a, Cm(p, J));
            var SA = a.j.ha.F,
                TA = new u.Map,
                iS = _.B(dK(SA) ? wB : vB),
                jS = _.B(yB),
                Gp = eK(SA, iS, jS);
            (null == Gp ? 0 : Gp.length) && TA.set("tt_state", {
                value: Kt(JSON.stringify(Gp), 3)
            });
            hN(a, TA);
            var Hp = a.j.Zd.ae;
            var kS = new u.Map([
                ["topics", {
                    value: Hp instanceof Uint8Array ? Rb(Hp, 3) : Hp
                }]
            ]);
            hN(a, kS);
            var th = de(g, d);
            if (_.B(Cy)) var UA = new u.Map;
            else {
                var lS = u.Map;
                var Df = _.B(Dy) ? $f(p[0].getAdUnitPath()) : null;
                Df = void 0 === Df ? null : Df;
                if (th) {
                    var Ip = new wv,
                        mS = _.A(mB),
                        nS = _.A(lB),
                        VA = [],
                        oS = RegExp("^_GESPSK-(.+)$");
                    try {
                        for (var Jp = 0; Jp < th.length; Jp++) {
                            var WA = (oS.exec(th.key(Jp)) || [])[1];
                            WA && VA.push(WA)
                        }
                    } catch (De) {}
                    for (var XA = _.w(VA), Kp = XA.next(); !Kp.done; Kp = XA.next()) {
                        var ok = Kp.value,
                            Je = pe().get(ok, th).lb;
                        if (Je) {
                            var YA = ve(Je);
                            if (2 !== YA && 3 !== YA) {
                                var Lp = !1;
                                if (Df) {
                                    var ZA = /^pub-(\d+)$/.exec(ok);
                                    if (ZA && !(Lp = _.t(Df.split(","), "includes").call(Df.split(","), ZA[1]))) continue
                                }
                                v(Je, 9, Lp);
                                var Mp = F(Je, 2),
                                    $A = Lp ? nS : mS;
                                if (0 <= $A && Mp && Mp.length > $A) {
                                    var aB = {};
                                    le(12, ok, null, (aB.sl = String(Mp.length), aB));
                                    qe(Je, 108, th);
                                    mc(Je, 2)
                                }
                                Jj(Ip, 2, xe, Je);
                                le(19, ok)
                            }
                        }
                    }
                    var bB = tc(Ip, xe, 2).length ? Rb(tm(Ip, Bv), 3) : null
                } else bB = null;
                UA = new lS([
                    ["a3p", {
                        value: bB
                    }]
                ])
            }
            hN(a, UA);
            hN(a, vm(z));
            if (_.B(Uo)) {
                var cB = a.j.ga.N.V;
                if (Dh(Pp(cB, Wo, 33), 1)) {
                    var pk = Pp(Pp(cB, Wo, 33), Qp, 1);
                    var dB = new u.Map([
                        ["cmrv", {
                            value: 1
                        }],
                        ["cmrq", {
                            value: F(pk, 1)
                        }],
                        ["cmrc", {
                            value: gc(pk, 2),
                            options: {
                                ka: ">"
                            }
                        }],
                        ["cmrids", {
                            value: gc(pk, 3),
                            options: {
                                ka: "!"
                            }
                        }],
                        ["cmrf", {
                            value: F(pk, 4)
                        }]
                    ])
                } else dB = new u.Map;
                hN(a, dB)
            }
            var eB = a.j,
                fB = eB.ha.X,
                gB, hB, pS = null != (hB = null == (gB = BI(eB.ga.N.V)) ? void 0 : H(gB, 9)) ? hB : !1,
                qS = H(fB, 8);
            a.m = pS || qS || !ce(fB) ? "https://pagead2.googlesyndication.com/gampad/ads?" : "https://securepubads.g.doubleclick.net/gampad/ads?";
            var Ef = a.D;
            if (_.B(Tx))
                for (var rS = Math.random, uh = Ef.length - 1; 0 < uh; uh--) {
                    var iB = Math.floor(rS() * (uh + 1)),
                        sS = Ef[uh];
                    Ef[uh] = Ef[iB];
                    Ef[iB] = sS
                }
            for (var jB = _.w(Ef), Np = jB.next(); !Np.done; Np = jB.next()) {
                var kB = void 0,
                    Ff = a,
                    Op = Np.value,
                    Ke = Op.value,
                    qk = Op.options,
                    tS = void 0 === qk.ka ? "," : qk.ka,
                    uS = void 0 === qk.xa ? !1 : qk.xa;
                if (kB = "object" !== typeof Ke ? null == Ke || !uS && 0 === Ke ? null : encodeURIComponent(Ke) : Array.isArray(Ke) && Ke.length ? encodeURIComponent(Ke.join(tS)) : null) "?" !== Ff.m[Ff.m.length - 1] && (Ff.m += "&"), Ff.m += Op.Nd + "=" + kB
            }
            return a.m
        },
        jN = function(a, b, c, d) {
            d = void 0 === d ? {} : d;
            a.D.some(function(e) {
                return b === e.Nd
            });
            a.H.has(b) || null == c || a.D.push({
                Nd: b,
                value: c,
                options: d
            })
        },
        hN = function(a, b) {
            b = _.w(_.t(b, "entries").call(b));
            for (var c = b.next(); !c.done; c = b.next()) {
                var d = _.w(c.value);
                c = d.next().value;
                d = d.next().value;
                jN(a, c, d.value, d.options)
            }
        };
    var mN = function(a, b) {
            var c = this;
            this.context = a;
            this.j = new u.Map;
            this.m = new u.Map;
            this.mb = _.E(Xg);
            window.performance && Bw(window.performance.now) && (_.ab(window, "DOMContentLoaded", _.Vg(a, 334, function() {
                for (var d = _.w(c.j), e = d.next(); !e.done; e = d.next()) {
                    var f = _.w(e.value);
                    e = f.next().value;
                    f = f.next().value;
                    kN(c, e, f) && c.j.delete(e)
                }
            })), rK(b, xK, function(d) {
                var e = d.detail;
                d = e.ed;
                e = e.P;
                return void lN(c, po(_.E(tl), d), F(e, 20))
            }), rK(b, yK, function(d) {
                var e = d.detail;
                d = e.ed;
                e = e.P;
                d = po(_.E(tl), d);
                e = F(e, 20);
                var f = c.m.get(d);
                null != f ? VJ(f, e) : lN(c, d, e)
            }))
        },
        lN = function(a, b, c) {
            kN(a, b, c) ? a.j.delete(b) : (a.j.set(b, c), _.to(b, function() {
                return a.j.delete(b)
            }))
        },
        kN = function(a, b, c) {
            var d = Wh(b);
            if ("DIV" !== (null == d ? void 0 : d.nodeName)) return !1;
            d = new TJ({
                F: window,
                mb: a.mb,
                eb: d,
                Ca: function(e) {
                    return void Zg(a.context, 336, e)
                },
                tf: _.B(pB)
            });
            if (!d.j) return !1;
            VJ(d, c);
            a.m.set(b, d);
            EK(_.E(BK), b, function() {
                return void a.m.delete(b)
            });
            return !0
        };
    var nN = function(a) {
        this.m = a;
        this.D = this.j = 0
    };
    nN.prototype.push = function() {
        for (var a = _.w(ld.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                "function" === typeof b && (b.call(u.globalThis), this.j++)
            } catch (c) {
                this.D++, b = void 0, null == (b = window.console) || b.error("Exception in queued GPT command", c), this.m.error(aL(String(c)))
            }
        }
        this.m.info(bL(String(this.j), String(this.D)));
        return this.j
    };
    var oN = function(a, b) {
        Z.call(this, a, 931);
        this.C = T(this);
        this.l = T(this);
        this.o = Y(this, b)
    };
    _.N(oN, Z);
    oN.prototype.j = function() {
        var a = this.o.value,
            b = new u.Map;
        this.C.j(new u.Map);
        if (a) {
            var c;
            a = _.w(null != (c = this.o.value) ? c : []);
            for (c = a.next(); !c.done; c = a.next()) {
                var d = c.value;
                c = tc(d, Xu, 1);
                c = 1 === Wd(c[0], 1, 0) ? $t(c[0]) : au(c[0]);
                d = Wd(d, 2, 0);
                var e = void 0;
                b.set(c, Math.min(null != (e = b.get(c)) ? e : Number.MAX_VALUE, d))
            }
        }
        this.l.j(b)
    };
    var pN = function(a, b) {
        Z.call(this, a, 981);
        this.o = T(this);
        this.l = T(this);
        this.C = Y(this, b)
    };
    _.N(pN, Z);
    pN.prototype.j = function() {
        var a = new u.Map,
            b, c = _.w(null != (b = this.C.value) ? b : []);
        for (b = c.next(); !b.done; b = c.next()) {
            b = b.value;
            var d = tc(b, Xu, 1);
            d = 1 === Wd(d[0], 1, 0) ? $t(d[0]) : au(d[0]);
            a.set(d, Wd(b, 2, 0))
        }
        this.o.j(a);
        this.l.j(new Lu)
    };
    var qN = function(a, b, c, d) {
        Z.call(this, a, 1038);
        this.F = b;
        this.C = c;
        this.G = d;
        this.l = T(this);
        this.o = T(this)
    };
    _.N(qN, Z);
    qN.prototype.j = function() {
        this.F.googleCompression = {
            provideBrotliOutput: this.l.j.bind(this.l),
            provideGzipOutput: this.o.j.bind(this.o)
        };
        yj(this.F.document, vd(this.C));
        yj(this.F.document, vd(this.G))
    };
    var rN = function(a, b, c) {
        Z.call(this, a, 1039, _.A(Bx));
        this.l = zD(this, b);
        this.o = zD(this, c)
    };
    _.N(rN, Z);
    rN.prototype.j = function() {
        var a = this;
        mi("compression_check", function(b) {
            I(b, "br", a.l.value ? "1" : "0");
            I(b, "gzip", a.o.value ? "1" : "0")
        }, 1)
    };
    var sN = function(a, b, c, d, e) {
        Z.call(this, a, 980);
        this.A = new wD;
        this.G = Y(this, b);
        this.C = Y(this, c);
        this.l = Y(this, d);
        this.o = Y(this, e)
    };
    _.N(sN, Z);
    sN.prototype.j = function() {
        var a;
        (y = _.t(Object, "entries").call(Object, null != (a = this.G.value) ? a : {}), _.t(y, "find")).call(y, function(e) {
            var f = _.w(e);
            e = f.next().value;
            f = f.next().value;
            return "*" !== e && (null == f ? void 0 : f.lc)
        }) && (_.E(Qr).l = !0);
        Sr(25);
        var b, c, d;
        a = _.w([].concat(_.xd(null != (b = this.C.value) ? b : []), _.xd(null != (c = this.l.value) ? c : []), _.xd(null != (d = this.o.value) ? d : [])));
        for (b = a.next(); !b.done; b = a.next()) Rr(b.value);
        this.A.notify()
    };
    var tN = function(a, b) {
        Z.call(this, a, 892, _.A(cy));
        this.o = T(this);
        this.C = T(this);
        this.l = T(this);
        this.G = zD(this, b)
    };
    _.N(tN, Z);
    tN.prototype.j = function() {
        var a = this.G.value;
        if (!a) throw Error("config timeout");
        qD(this.o, vc(a, bv, 3));
        qD(this.C, vc(a, dv, 2));
        this.l.j(gc(a, 4))
    };
    tN.prototype.I = function(a) {
        this.m(a)
    };
    tN.prototype.m = function(a) {
        rD(this.o, a);
        rD(this.C, a);
        this.l.j([])
    };
    var uN = [{
            name: "Interstitial",
            Lc: 1
        }, {
            name: "TopAnchor",
            Lc: 2
        }, {
            name: "BottomAnchor",
            Lc: 3
        }],
        vN = function(a, b) {
            Z.call(this, a, 789);
            this.l = b;
            this.A = T(this)
        };
    _.N(vN, Z);
    vN.prototype.j = function() {
        var a = this;
        this.A.j(uN.filter(function(b) {
            return (new RegExp("gam" + b.name + "Demo", "i")).test(a.l)
        }).map(function(b) {
            var c = b.name;
            b = b.Lc;
            var d, e;
            null == (d = window.console) || null == (e = d.warn) || e.call(d, "GPT - Demo " + c + " ENABLED");
            d = new mv;
            e = new fv;
            b = v(e, 2, b);
            c = v(b, 1, "/22639388115/example/" + c.toLowerCase());
            return pg(d, 5, nv, c)
        }))
    };
    var wN = function(a, b) {
        Z.call(this, a, 969);
        this.F = b;
        this.o = T(this);
        this.l = T(this)
    };
    _.N(wN, Z);
    wN.prototype.j = function() {
        var a = this;
        if (_.B(Ox)) {
            var b = "",
                c = void 0,
                d = function() {
                    return void a.F.clearInterval(c)
                },
                e = _.Vg(this.context, this.id, function() {
                    var f, g, h;
                    return _.cb(function(k) {
                        switch (k.j) {
                            case 1:
                                f = Of(a.F);
                                a.l.j(!!f);
                                if (!f) {
                                    d();
                                    k.j = 2;
                                    break
                                }
                                k.D = 3;
                                return db(k, f, 5);
                            case 5:
                                b = null != (g = k.m) ? g : "0";
                                b.length > _.A(Px) && (Zg(a.context, a.id, new Sk("ML:" + b.length)), b = "0", d());
                                fb(k, 2);
                                break;
                            case 3:
                                h = hb(k), Zg(a.context, a.id, h), b = "0", d();
                            case 2:
                                a.o.j(function() {
                                    return b
                                }), k.j = 0
                        }
                    })
                });
            c = this.F.setInterval(e, 1E3 * _.A(Nx));
            _.to(this, d);
            e()
        } else this.l.j(!1), this.o.j(function() {
            return ""
        })
    };
    wN.prototype.m = function() {
        this.l.j(!1);
        this.o.j(function() {
            return ""
        })
    };
    var xN = function(a, b, c, d) {
        Z.call(this, a, 1016);
        this.A = T(this);
        this.o = Y(this, c);
        this.l = Y(this, d);
        this.C = nq(b, xK)
    };
    _.N(xN, Z);
    xN.prototype.j = function() {
        var a = this;
        this.o.value ? this.A.j(this.o.value) : this.l.value ? this.C.then(function(b) {
            var c = $f(b.detail.P.getAdUnitPath());
            tc(a.l.value, ev, 1).some(function(d) {
                return jo(d, 1) === c
            }) ? a.A.j(c) : (mi("pp_iris_failure", function(d) {
                I(d, "fnc", c);
                si(d, a.context)
            }, _.A(dy)), pD(a.A))
        }) : pD(this.A)
    };
    xN.prototype.I = function(a) {
        this.m(a)
    };
    xN.prototype.m = function() {
        pD(this.A)
    };
    var yN = function(a, b) {
        Z.call(this, a, 1015);
        this.l = T(this);
        this.o = Y(this, b)
    };
    _.N(yN, Z);
    yN.prototype.j = function() {
        if (this.o.value) {
            var a = tc(this.o.value, ev, 1);
            (null == a ? 0 : a.length) ? (a = tc(this.o.value, ev, 1)[0], (y = [2, 3], _.t(y, "includes")).call(y, Wd(a, 3, 0)) ? this.l.j(jo(a, 1)) : pD(this.l)) : pD(this.l)
        } else pD(this.l)
    };
    yN.prototype.I = function(a) {
        this.m(a)
    };
    yN.prototype.m = function() {
        pD(this.l)
    };
    var zN = function(a, b, c) {
        Z.call(this, a, 1017);
        this.F = c;
        this.A = yD(this);
        this.l = Y(this, b)
    };
    _.N(zN, Z);
    zN.prototype.j = function() {
        var a = this;
        if (this.l.value) {
            var b = TB(this.F, this.l.value, function(c) {
                if (!c) {
                    c = bw(b.j);
                    for (var d = _.w(document.getElementsByName("googlefcPresent")), e = d.next(); !e.done; e = d.next()) c.ge(e.value)
                }
                a.A.notify()
            });
            b.start()
        } else this.A.notify()
    };
    zN.prototype.I = function(a) {
        this.m(a)
    };
    zN.prototype.m = function() {
        this.A.notify()
    };
    var AN = function(a, b, c, d) {
        Z.call(this, a, 906, _.A(by));
        this.l = yD(this);
        if (b === b.top) {
            var e = new Be;
            _.Pn(this, e);
            var f = new yN(a, c);
            D(e, f);
            a = new xN(a, d, f.l, c);
            D(e, a);
            b = new zN(this.context, a.A, b);
            D(e, b);
            lD(this.B, b.A, !0);
            Qe(e)
        } else this.l.notify()
    };
    _.N(AN, Z);
    AN.prototype.j = function() {
        this.l.notify()
    };
    AN.prototype.I = function(a) {
        this.m(a)
    };
    AN.prototype.m = function() {
        this.l.notify()
    };
    var BN = function(a, b, c) {
        Z.call(this, a, 964);
        var d = this;
        this.googletag = b;
        this.F = c;
        this.l = new wD;
        this.F === this.F.top && (AD(this, this.l), (a = EC("loadEventStart", this.F)) ? (a = _.me(this.F) - a, 1E3 <= a ? this.l.notify() : setTimeout(_.Vg(this.context, this.id, function() {
            return void d.l.notify()
        }), 1E3 - a)) : (a = function() {
            return void setTimeout(_.Vg(d.context, d.id, function() {
                return void d.l.notify()
            }), 1E3)
        }, "complete" === this.F.document.readyState ? a() : NK(this, this.id, this.F, "load", a)))
    };
    _.N(BN, Z);
    BN.prototype.j = function() {
        var a = this;
        if (this.F === this.F.top) {
            var b = Bh(!1, this.F),
                c = b.width,
                d = b.height;
            b = "CSS1Compat" === this.F.document.compatMode ? this.F.document.documentElement : this.F.document.body;
            var e = b.scrollHeight,
                f = b.scrollWidth,
                g = 0,
                h = 0,
                k = 0;
            b = _.w(GD(this.F));
            for (var l = b.next(); !l.done; l = b.next()) {
                var m = l.value.getBoundingClientRect();
                l = m.width;
                m = m.height;
                g += m;
                h += m * l;
                k++
            }
            _.B(Zx) ? Ln(this.context, c, d, f, e, k, g, h, this.googletag.pubads().getSlots().length) : mi("gpt_dens", function(n) {
                si(n, a.context);
                I(n, "vw", c);
                I(n, "vh", d);
                I(n, "ph", e);
                I(n, "pw", f);
                I(n, "act", k);
                I(n, "aht", g);
                I(n, "ahd", Math.round(g / e * 100));
                I(n, "aa", h);
                I(n, "aad", Math.round(h / (e * f) * 100))
            }, _.A(ny))
        }
    };
    var CN = function(a, b) {
        Z.call(this, a, 1031);
        this.F = b
    };
    _.N(CN, Z);
    CN.prototype.j = function() {
        this.F === this.F.top && Yi(this.F)
    };
    var DN = function(a) {
        Z.call(this, a, 891);
        this.l = T(this);
        var b = new Sq;
        this.o = U(this, b);
        (a = _.cg(260)) ? a(function(c, d) {
            if (d) rD(b, d);
            else try {
                if ("string" === typeof c) {
                    var e = JSON.parse(c || "[]");
                    Array.isArray(e) && b.j(e)
                }
            } catch (f) {} finally {
                b.B || rD(b, Error("malformed response"))
            }
        }): rD(b, Error("missing input"))
    };
    _.N(DN, Z);
    DN.prototype.j = function() {
        this.l.j(new pv(this.o.value))
    };
    var EN = function(a, b) {
        Z.call(this, a, 966);
        this.F = b;
        this.l = T(this)
    };
    _.N(EN, Z);
    EN.prototype.j = function() {
        var a = this,
            b = Pf(this.F);
        if (b) this.l.j(b);
        else if ((b = Object.getOwnPropertyDescriptor(this.F, "_pbjsGlobals")) && !b.configurable) mi("pdpg_error", function(d) {
            si(d, a.context)
        }, _.A(wx));
        else {
            var c = null;
            Object.defineProperty(this.F, "_pbjsGlobals", {
                set: function(d) {
                    c = d;
                    (d = Pf(a.F)) && a.l.j(d)
                },
                get: function() {
                    return c
                }
            })
        }
    };
    EN.prototype.m = function() {};
    var FN = function(a, b) {
        Z.call(this, a, 979);
        this.F = b;
        this.A = T(this)
    };
    _.N(FN, Z);
    FN.prototype.j = function() {
        var a = this;
        _.B(qy) && "function" === typeof this.F.document.browsingTopics ? Oi(this.F).then(function(b) {
            a.A.j(b)
        }) : pD(this.A)
    };
    FN.prototype.m = function() {
        pD(this.A)
    };
    var Vn = function(a, b, c, d) {
        Z.call(this, a, 959);
        this.Xa = b;
        this.A = T(this);
        this.l = U(this, b);
        AD(this, c);
        AD(this, d)
    };
    _.N(Vn, Z);
    Vn.prototype.j = function() {
        this.A.j(this.l.value)
    };
    var Rn = function(a, b, c) {
        Z.call(this, a, 879);
        this.o = b;
        this.l = T(this);
        this.C = null;
        _.cg(260) && (this.C = U(this, c))
    };
    _.N(Rn, Z);
    Rn.prototype.j = function() {
        var a = this,
            b, c, d;
        return _.cb(function(e) {
            if (1 == e.j) {
                if (null != (c = null == (b = a.C) ? void 0 : b.value) ? !c : !oI(a.o)) {
                    pD(a.l);
                    e.j = 0;
                    return
                }
                return db(e, qI(a.o), 3)
            }
            d = e.m;
            a.l.j(d);
            e.j = 0
        })
    };
    var Un = function(a, b, c, d, e, f) {
        Z.call(this, a, 874);
        this.o = b;
        this.F = c;
        this.G = d;
        this.l = yD(this);
        AD(this, e);
        this.C = U(this, f)
    };
    _.N(Un, Z);
    Un.prototype.j = function() {
        var a = this,
            b = new JB(this.F, -1, _.B(tB));
        _.Pn(this, b);
        LB(b) ? (this.o.info(KL()), OB(b, _.Vg(this.context, 661, function(c) {
            var d = a.C.value,
                e, f, g;
            if (g = !(null == (e = a.G) ? 0 : H(e, 9))) {
                var h = void 0 === h ? !1 : h;
                g = NB(c) ? !1 === c.gdprApplies || "tcunavailable" === c.tcString || void 0 === c.gdprApplies && !h || "string" !== typeof c.tcString || !c.tcString.length ? !0 : PB(c, "1") : !1
            }
            e = v(d, 5, g);
            g = !RB(c, ["3", "4"]);
            e = v(e, 9, g);
            e = v(e, 2, c.tcString);
            g = null != (f = c.addtlConsent) ? f : "";
            f = v(e, 4, g);
            v(f, 7, c.internalErrorState);
            null != c.gdprApplies && v(d, 3, c.gdprApplies);
            _.B(oy) && !RB(c, ["2", "7", "9", "10"]) && v(d, 8, !0);
            "tcunavailable" === c.tcString ? a.o.info(LL("failed")) : a.o.info(LL("succeeded"));
            a.l.notify()
        }))) : this.l.notify()
    };
    var Tn = function(a, b, c, d, e) {
        Z.call(this, a, 875);
        this.C = b;
        this.F = c;
        this.l = yD(this);
        AD(this, d);
        this.o = U(this, e)
    };
    _.N(Tn, Z);
    Tn.prototype.j = function() {
        var a = this,
            b = new fI(this.F);
        _.Pn(this, b);
        if (hI(b)) {
            var c = _.Vg(this.context, 660, function(d) {
                d && "string" === typeof d.uspString && v(a.o.value, 1, d.uspString);
                a.l.notify()
            });
            this.C.info(JL());
            jI(b, c)
        } else this.l.notify()
    };
    var Mn = function(a, b) {
        Z.call(this, a, 958);
        this.l = b;
        this.Xa = T(this)
    };
    _.N(Mn, Z);
    Mn.prototype.j = function() {
        var a = new OD,
            b, c = null == (b = this.l) ? void 0 : H(b, 9);
        v(a, 5, !c);
        this.Xa.j(a)
    };
    var Qn = function(a, b, c) {
        Z.call(this, a, 896);
        this.l = b;
        this.o = c;
        this.Sa = T(this)
    };
    _.N(Qn, Z);
    Qn.prototype.j = function() {
        var a = this;
        _.cg(260) ? this.o.then(_.Vg(this.context, this.id, function() {
            return void a.Sa.j(oI(a.l))
        })) : this.Sa.j(oI(this.l))
    };
    var Sn = function(a, b, c, d) {
        d = void 0 === d ? .001 : d;
        Z.call(this, a, 960);
        this.F = b;
        this.l = d;
        this.o = U(this, c)
    };
    _.N(Sn, Z);
    Sn.prototype.j = function() {
        var a = this;
        this.l && _.bh(this.context, 894, function() {
            return void mi("cmpMet", function(b) {
                si(b, a.context);
                var c = new JB(a.F);
                _.Pn(a, c);
                var d = new fI(a.F);
                _.Pn(a, d);
                I(b, "fc", Number(a.o.value));
                I(b, "tcfv1", Number(!!a.F.Hg));
                I(b, "tcfv2", Number(LB(c)));
                I(b, "usp", Number(hI(d)));
                I(b, "ptt", 17)
            }, a.l)
        })
    };
    var GN = function(a, b) {
        Z.call(this, a, 1018);
        _.A(Kx) ? Rr(_.A(Kx)) : this.l = Y(this, b)
    };
    _.N(GN, Z);
    GN.prototype.j = function() {
        if (!_.A(Kx)) {
            var a, b, c, d, e = _.w(null != (d = null == (a = this.l) ? void 0 : null == (b = a.value) ? void 0 : null == (c = vc(b, mI, 5)) ? void 0 : gc(c, 1)) ? d : []);
            for (a = e.next(); !a.done; a = e.next()) Rr(a.value)
        }
    };
    var Tq = function(a, b, c) {
        Z.call(this, a, 706);
        this.F = b;
        this.A = T(this);
        this.l = U(this, c)
    };
    _.N(Tq, Z);
    Tq.prototype.j = function() {
        qD(this.A, de(this.l.value, this.F))
    };
    var Yn = new u.Map([
        [1, 5],
        [2, 2],
        [3, 3]
    ]);
    var zr = function(a, b, c, d, e) {
        e = void 0 === e ? document : e;
        Z.call(this, a, 912);
        this.googletag = c;
        this.V = d;
        this.U = e;
        this.l = T(this);
        this.o = U(this, b)
    };
    _.N(zr, Z);
    zr.prototype.I = function(a) {
        this.m(a)
    };
    zr.prototype.m = function() {
        pD(this.l)
    };
    zr.prototype.j = function() {
        if (_.B(fy)) {
            for (var a = [], b = _.w(this.o.value), c = b.next(); !c.done; c = b.next()) switch (c = c.value, qc(c, nv)) {
                case 5:
                    var d = void 0;
                    ao(this.U, this.googletag, eo(c, fv, 5, nv), vc(c, zm, 4), null != (d = this.V) ? d : Qg().j);
                    break;
                case 6:
                    d = eo(c, lv, 6, nv);
                    var e;
                    if (e = Dh(d, 2)) d = vc(d, jv, 2), e = go(d) && ho(d);
                    e && (d = void 0, (c = ko(this.U, this.googletag, eo(c, lv, 6, nv), vc(c, zm, 4), null != (d = this.V) ? d : Qg().j)) && a.push.apply(a, _.xd(c)))
            }
            0 < a.length ? this.l.j(a) : pD(this.l)
        } else pD(this.l)
    };
    var HN = function(a, b, c, d) {
        Z.call(this, a, 890);
        this.o = b;
        this.C = c;
        this.l = Y(this, d)
    };
    _.N(HN, Z);
    HN.prototype.j = function() {
        var a = this;
        Xe(this.o, this.l.value, function(b, c) {
            Zg(a.context, b, c);
            var d, e;
            null == (d = a.C) || null == (e = d.error) || e.call(d, c)
        })
    };
    var IN = O(["https://pagead2.googlesyndication.com/pagead/managed/js/test_br.js"]),
        JN = O(["https://pagead2.googlesyndication.com/pagead/managed/js/test_gzip.js"]),
        KN = function(a, b, c) {
            _.HB.call(this);
            this.context = a;
            this.va = b;
            this.J = c;
            this.W = new DN(this.context);
            this.B = new tN(this.context, this.W.l);
            this.ea = this.B.l;
            this.j = new PM(this.context, this.B.o);
            this.I = new oN(this.context, this.j.G);
            this.o = new pN(this.context, this.j.C);
            var d;
            this.T = new vN(this.context, null != (d = window.location.hash) ? d : "");
            this.C = new zr(this.context, this.T.A, dg(), null);
            this.da = new EN(this.context, window);
            this.aa = new FN(this.context, window);
            this.O = new sN(this.context, this.j.o, this.ea, this.j.l, this.C.l);
            this.R = this.I.l;
            this.m = null;
            this.ia = this.j.o;
            this.na = this.j.l;
            this.G = this.I.C;
            this.ya = this.C.l;
            this.K = this.da.l;
            this.ca = this.o.o;
            this.fa = this.o.l;
            this.ma = this.aa.A;
            this.L = this.O.A;
            this.M = new dN(this.context, this.K, this.L, this.R, this.G, this.ca, this.fa);
            this.Ja = this.M.l;
            this.Ya = this.M.o;
            _.Pn(this, this.da);
            _.Pn(this, this.W);
            _.Pn(this, this.B);
            _.Pn(this, this.I);
            _.Pn(this, this.o);
            _.Pn(this, this.j);
            _.Pn(this, this.T);
            _.Pn(this, this.C);
            _.Pn(this, this.aa);
            _.Pn(this, this.M);
            _.Pn(this, this.O);
            _.cg(260) || (this.ea.j([]), pD(this.ia), pD(this.na), pD(this.R), pD(this.G), pD(this.ca), this.L.notify(), pD(this.ya), pD(this.fa));
            _.B(qy) || pD(this.ma);
            0 < _.A(Nx) && (this.l = new wN(this.context, window), _.Pn(this, this.l), this.wa = this.l.o, this.Za = this.l.l)
        };
    _.N(KN, _.HB);
    var LN = function(a, b) {
        var c = new Be;
        _.Pn(a, c);
        D(c, a.da);
        D(c, a.W);
        D(c, a.B);
        D(c, a.j);
        D(c, a.I);
        D(c, a.O);
        D(c, a.o);
        b = new AN(a.context, window, a.B.C, b);
        a.m = b.l.promise;
        D(c, b);
        D(c, a.T);
        D(c, a.C);
        _.A(ny) && D(c, new BN(a.context, dg(), window));
        _.B(rB) && D(c, new CN(a.context, window));
        a.l && D(c, a.l);
        _.B(qy) && D(c, a.aa);
        D(c, a.M);
        if (_.B(Nn)) {
            var d = Xn(a.context, a.m);
            b = d.Sa;
            var e = d.Bd;
            _.Pn(c, d.za);
            d = b;
            _.B(Jx) && (b = new GN(a.context, e), D(c, b))
        }
        _.B(By) || !_.B(ay) || wl() || (d = Wn(a.context, a.va, null, window, a.m, d, e).Xa, d = new Tq(a.context, window, d), D(c, d), d = new HN(a.context, dg(), console, d.A), D(c, d));
        _.A(Bx) && (d = new qN(a.context, window, x(IN), x(JN)), D(c, d), a = new rN(a.context, d.l, d.o), D(c, a));
        Qe(c)
    };
    var MN = ["Debug", "Info", "Warning", "Error", "Fatal"],
        NN = function(a, b, c) {
            this.level = a;
            this.message = b;
            this.j = c;
            this.timestamp = new Date
        };
    aa = NN.prototype;
    aa.getSlot = function() {
        return this.j
    };
    aa.getLevel = function() {
        return this.level
    };
    aa.getTimestamp = function() {
        return this.timestamp
    };
    aa.getMessage = function() {
        return this.message
    };
    aa.toString = function() {
        return this.timestamp.toTimeString() + ": " + MN[this.level] + ": " + this.message
    };
    var ON = {
            20: function(a) {
                return "Ignoring a call to setCollapseEmptyDiv(false, true). Slots that start out collapsed should also collapse when empty. Slot: " + a[0] + "."
            },
            23: function(a) {
                return 'Error in googletag.display: could not find div with id "' + a[1] + '" in DOM for slot: ' + a[0] + "."
            },
            34: function(a) {
                return "Size mapping is null because invalid mappings were added: " + a[0] + "."
            },
            60: function(a) {
                return "Ignoring the " + a[0] + "(" + (a[1] || "") + ") call since the service is already enabled."
            },
            66: function(a) {
                return "Slot " + a[0] + " cannot be refreshed until PubAdsService is enabled."
            },
            68: function() {
                return "Slots cannot be cleared until service is enabled."
            },
            80: function(a) {
                return "Slot object at position " + a[0] + " is of incorrect type."
            },
            84: function(a) {
                return 'Cannot find targeting attribute "' + a[0] + '" for "' + a[1] + '".'
            },
            93: function(a) {
                return "Failed to register listener. Unknown event type: " + a[0] + "."
            },
            96: function(a) {
                return "Invalid arguments: " + a[0] + "(" + a[1] + ")."
            },
            122: function(a) {
                return "Invalid argument: " + a[0] + "(" + a[1] + "). Valid values: " + a[2] + "."
            },
            121: function(a) {
                return "Invalid object passed to " + a[0] + "(" + a[1] + "), for " + a[2] + ": " + a[3] + "."
            },
            105: function(a) {
                return "SRA requests may include a maximum of 30 ad slots. " + a[1] + " were requested, so the last " + a[2] + " were ignored."
            },
            106: function(a) {
                return "Publisher betas " + a[0] + " were declared after enableServices() was called."
            },
            107: function(a) {
                return "Publisher betas may only be declared once. " + a[0] + " were added after betas had already been declared."
            },
            108: function(a) {
                return "Beta keys cannot be cleared. clearTargeting() was called on " + a[0] + "."
            },
            123: function(a) {
                return "Refresh was throttled for slot: " + a[0] + "."
            },
            113: function(a) {
                return a[0] + " ad slot ineligible as page is not mobile optimized: " + a[1] + "."
            },
            116: function(a) {
                return 'The unique SafeFrame domain setting in Google Ad Manager conflicts with the "useUniqueDomain" setting passed to the setSafeFrameConfig API method. GPT will use useUniqueDomain=' + a[0] + " based on the API call."
            },
            114: function() {
                return 'setCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
            },
            115: function() {
                return 'updateCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
            },
            128: function() {
                return "ContentService is deprecated. The content() method will be removed from googletag soon. For more information, see https://developers.google.com/publisher-tag/reference#googletag.ContentService."
            },
            132: function(a) {
                return "Taxonomy with id " + a[0] + " has reached the limit of " + a[1] + " values."
            },
            133: function() {
                return "No taxonomy values were cleared, either due to an invalid taxonomy or no values present."
            },
            134: function(a) {
                return qo(a[0]) + " " + a[1] + " not requested: Format already created on the page."
            },
            135: function(a) {
                return qo(a[0]) + " " + a[1] + " not requested: Frequency cap of 1 has been exceeded."
            },
            136: function(a) {
                return qo(a[0]) + " " + a[1] + " not requested: The viewport exceeds the current maximum width of 2500px."
            },
            137: function(a) {
                return qo(a[0]) + " " + a[1] + " not requested: Format currently only supported on mobile."
            },
            138: function(a) {
                return qo(a[0]) + " " + a[1] + " not requested: Format currently only supports portrait orientation."
            },
            139: function(a) {
                return qo(a[0]) + " " + a[1] + " not requested: GPT is not running in the top-level window."
            },
            140: function(a) {
                return qo(a[0]) + " " + a[1] + " not requested: Detected browser is currently unsupported."
            },
            142: function(a) {
                return "A google product ad tag with click url " + a[0] + " does not contain any elements enabled for clicking."
            },
            145: function(a) {
                return qo(a[0]) + " " + a[1] + " not requested: Unable to access local storage to determine if the frequency cap has been exceeded due to insufficient user consent."
            },
            143: function() {
                return "getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead."
            },
            146: function() {
                return "Beginning July 18, 2022, GPT must be loaded from the limited ads URL to enable limited ads functionality."
            },
            147: function() {
                return "GPT must be loaded from the limited ads URL to enable limited ads functionality."
            }
        },
        PN = {
            26: function(a) {
                return "Div ID passed to googletag.display() does not match any defined slots: " + a[0] + "."
            },
            28: function(a) {
                return "Error in googletag.defineSlot: Cannot create slot " + a[1] + '. Div element "' + a[0] + '" is already associated with another slot: ' + a[2] + "."
            },
            92: function(a) {
                return "Exception in " + a[1] + ' event listener: "' + a[0] + '".'
            },
            30: function(a) {
                return "Exception in googletag.cmd function: " + a[0] + "."
            },
            125: function(a) {
                return "google-product-ad element is invalid: " + a[0] + "."
            },
            126: function() {
                return "Attempted to collect prebid data but window.pbjs is undefined."
            },
            127: function(a) {
                return "Encountered the following error while attempting to collect prebid metadata: " + a[0] + "."
            },
            144: function() {
                return "ContentService is no longer available. Use the browser's built-in DOM APIs to directly add content to div elements instead."
            }
        };
    var QN = function(a) {
            this.context = a;
            this.j = _.t(Array, "from").call(Array, {
                length: 1E3
            });
            this.D = this.H = this.m = 0;
            this.B = window
        },
        hM = function(a) {
            return a.j.filter(function(b) {
                return !!b
            })
        },
        iM = function(a, b) {
            return a.j.filter(function(c) {
                return c && c.getSlot() === b
            })
        },
        jM = function(a, b) {
            return a.j.filter(function(c) {
                return c && c.getLevel() >= b
            })
        };
    QN.prototype.log = function(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !1 : d;
        var f, g;
        c = new NN(a, b, null != (g = null == (f = void 0 === c ? null : c) ? void 0 : f.j) ? g : null);
        this.j[this.m] = c;
        this.m = (this.m + 1) % 1E3;
        g = _.A(Gx) && 100 > this.H;
        f = 2 === a || 3 === a;
        var h = b.getMessageArgs(),
            k = b.getMessageId(),
            l = ON[k] || PN[k];
        g && f && (b = _.A(Gx), mi("gpt_eventlog_messages", function(m) {
            ++e.H;
            si(m, e.context);
            I(m, "level", a);
            I(m, "messageId", k);
            I(m, "args", h.join("|"));
            l || I(m, "noMsg", !0);
            var n = Error(),
                p;
            var r = null != (p = n.stack) ? p : "";
            n = n.message;
            try {
                -1 == r.indexOf(n) && (r = n + "\n" + r);
                for (var z; r != z;) z = r, r = r.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                var C = r.replace(RegExp("\n *", "g"), "\n")
            } catch (J) {
                C = n
            }
            I(m, "stack", C)
        }, b));
        if (l) {
            b = "[GPT] " + l(h);
            if (d) throw new Sk(b);
            d = this.D < _.A(Hx) && f && _.q.console;
            if (this.B === top && d || _.t(_.q.navigator.userAgent, "includes").call(_.q.navigator.userAgent, "Lighthouse"))(function(m) {
                var n, p, r, z;
                return void(2 === a ? null == (p = (n = _.q.console).warn) ? void 0 : p.call(n, m) : null == (z = (r = _.q.console).error) ? void 0 : z.call(r, m))
            })(b), this.D++
        }
        return c
    };
    QN.prototype.info = function(a, b) {
        return this.log(1, a, void 0 === b ? null : b)
    };
    var M = function(a, b, c) {
        a.log(2, b, c, !1)
    };
    QN.prototype.error = function(a, b, c) {
        return this.log(3, a, b, void 0 === c ? !1 : c)
    };
    var yo = "3rd party ad content";
    var RN = function(a, b) {
            this.serviceName = b;
            this.slot = a.j
        },
        SN = function(a, b) {
            RN.call(this, a, b);
            this.isEmpty = !1;
            this.slotContentChanged = !0;
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
            this.isBackfill = !1;
            this.companyIds = this.yieldGroupIds = null
        };
    _.N(SN, RN);
    var TN = function() {
        RN.apply(this, arguments)
    };
    _.N(TN, RN);
    var UN = function(a, b, c) {
        RN.call(this, a, b);
        this.inViewPercentage = c
    };
    _.N(UN, RN);
    var VN = function() {
        RN.apply(this, arguments)
    };
    _.N(VN, RN);
    var WN = function() {
        RN.apply(this, arguments)
    };
    _.N(WN, RN);
    var XN = function(a, b, c, d) {
        RN.call(this, a, b);
        this.payload = d;
        this.makeRewardedVisible = c
    };
    _.N(XN, RN);
    var YN = function(a, b, c) {
        RN.call(this, a, b);
        this.payload = this.payload = c
    };
    _.N(YN, RN);
    var ZN = function() {
        RN.apply(this, arguments)
    };
    _.N(ZN, RN);
    var $N = function() {
        RN.apply(this, arguments)
    };
    _.N($N, RN);
    var aO = function() {
        RN.apply(this, arguments)
    };
    _.N(aO, RN);
    var Ro = new u.Set,
        bO = function(a, b, c) {
            var d = 0,
                e = function() {
                    d = 0
                };
            return function(f) {
                d || (d = _.q.setTimeout(e, b), a.apply(c, arguments))
            }
        }(function() {
            throw new Sk("Reached Limit for addEventListener");
        }, 3E5),
        cO = function(a, b) {
            pK.call(this, a);
            this.j = b;
            this.m = [];
            this.B = !1;
            this.C = 0;
            this.o = new u.Map;
            Ro.add(this);
            this.j.info(dL(this.getName()))
        };
    _.N(cO, pK);
    aa = cO.prototype;
    aa.enable = function() {
        this.B || (this.B = !0, Sr(6), this.Pc())
    };
    aa.slotAdded = function(a, b) {
        this.m.push(a);
        var c = new WN(a, this.getName());
        this.dispatchEvent("slotAdded", 818, c);
        this.j.info(fL(this.getName(), a.getAdUnitPath()), a);
        a = this.getName();
        pc(b, 4, a)
    };
    aa.destroySlots = function(a) {
        var b = this;
        return a.filter(function(c) {
            return ca(b.m, c)
        })
    };
    aa.addEventListener = function(a, b) {
        var c = this;
        if (this.C >= _.A(Fx) && 0 < _.A(Fx)) bO();
        else {
            var d;
            null != (d = this.o.get(a)) && d.has(b) || (this.o.has(a) || this.o.set(a, new u.Map), d = function(e) {
                e = e.detail;
                try {
                    b(e)
                } catch (h) {
                    c.j.error(wL(String(h), a));
                    var f, g;
                    null == (f = window.console) || null == (g = f.error) || g.call(f, h)
                }
            }, this.o.get(a).set(b, d), rK(this, a, d), this.C++)
        }
    };
    aa.removeEventListener = function(a, b) {
        var c, d = null == (c = this.o.get(a)) ? void 0 : c.get(b);
        if (!d || !qK(this, a, d)) return !1;
        this.C--;
        return this.o.get(a).delete(b)
    };
    var Do = function(a) {
        for (var b = _.w(Ro), c = b.next(); !c.done; c = b.next()) c.value.destroySlots(a)
    };
    var Oo = function(a, b, c) {
        cO.call(this, a, b);
        this.M = c;
        this.ads = new u.Map;
        this.l = {};
        this.G = this.jb = !1;
        _.E(Qr).D = !0
    };
    _.N(Oo, cO);
    aa = Oo.prototype;
    aa.set = function(a, b) {
        "string" === typeof a && a.length ? (this.l[a] = b, this.j.info(eL(a, String(b), this.getName()))) : M(this.j, ij("CompanionAdsService.set", [a, b]));
        return this
    };
    aa.get = function(a) {
        var b;
        return null != (b = this.l[a]) ? b : null
    };
    aa.display = function(a, b, c, d) {
        this.enable();
        b = zl(this.context, this.j, a, b, c);
        a = b.slotId;
        b = b.Ia;
        this.slotAdded(a, b);
        null == b || b.setClickUrl(d);
        oo(this.j, null == a ? void 0 : a.getDomId())
    };
    aa.slotAdded = function(a, b) {
        var c = this;
        rK(a, tK, function(d) {
            H(d.detail, 11) && (dO(c, a).df = !0)
        });
        cO.prototype.slotAdded.call(this, a, b)
    };
    aa.Pc = function() {};
    aa.setRefreshUnfilledSlots = function(a) {
        "boolean" === typeof a && (this.jb = a)
    };
    var dM = function(a, b) {
            (b = void 0 === b ? "" : b) && !a.G && mi("ima_sdk_v", function(c) {
                a.G = !0;
                I(c, "v", b)
            });
            return String(Qg().j.getCorrelator())
        },
        bM = function(a, b) {
            var c = Qg().j,
                d = Qg().m;
            if (a.M.B) {
                var e = {
                    Ha: 3
                };
                a.K && (e.Ua = a.K);
                a.L && (e.Va = a.L);
                b = null != b ? b : a.m;
                c = Sh(c, d);
                d = e.Ua;
                var f = e.Va;
                d && "number" !== typeof d || f && "number" !== typeof f || a.M.refresh(c, b, e)
            } else(null == b ? 0 : b[0]) && a.j.error(lL(b[0].getDomId()))
        },
        eM = function(a, b) {
            var c;
            return a.M.B && !(null == (c = a.ads.get(b)) || !c.df)
        },
        cM = function(a, b) {
            return a.m.filter(function(c) {
                return _.t(b, "includes").call(b, c.toString())
            })
        };
    Oo.prototype.getName = function() {
        return "companion_ads"
    };
    Oo.prototype.R = function() {};
    var fM = function(a, b, c, d) {
            b = new SN(b, a.getName());
            null != c && null != d && (b.size = [c, d]);
            a.dispatchEvent("slotRenderEnded", 67, b)
        },
        dO = function(a, b) {
            var c = a.ads.get(b);
            c || (c = {}, a.ads.set(b, c), _.to(b, function() {
                return a.ads.delete(b)
            }));
            return c
        };
    var Mo = function(a, b) {
        cO.call(this, a, b);
        this.l = new u.Map
    };
    _.N(Mo, cO);
    Mo.prototype.getName = function() {
        return "content"
    };
    Mo.prototype.display = function(a, b, c, d) {
        c = void 0 === c ? "" : c;
        d = void 0 === d ? "" : d;
        this.enable();
        b = zl(this.context, this.j, a, b, c);
        a = b.slotId;
        b = b.Ia;
        this.slotAdded(a, b);
        b.setClickUrl(d);
        oo(this.j, a.getDomId())
    };
    Mo.prototype.destroySlots = function(a) {
        a = cO.prototype.destroySlots.call(this, a);
        for (var b = _.w(a), c = b.next(); !c.done; c = b.next()) this.l.delete(c.value);
        return a
    };
    var eO = function(a, b) {
        var c = a.l.get(b),
            d = Wh(b);
        !(c && void 0 !== c.content && d && a.B) || c && c.Ud || (c.Ud = !0, Pa(d, df(c.content)), mi("gpt_cont_svc", function(e) {
            var f;
            I(e, "cl", String(null == c ? void 0 : null == (f = c.content) ? void 0 : f.length));
            si(e, a.context, [b.getAdUnitPath()])
        }), a.dispatchEvent("slotRenderEnded", 819, new SN(b, a.getName())))
    };
    Mo.prototype.Pc = function() {};
    Mo.prototype.R = function(a, b) {
        eO(this, b)
    };
    Mo.prototype.setContent = function(a, b) {
        var c = this;
        if (_.t(this.m, "includes").call(this.m, a) && "string" === typeof b && b.length) {
            var d = this.l.get(a);
            d ? d.content = b : this.l.set(a, {
                content: b,
                Ud: void 0
            });
            _.to(a, function() {
                return void c.l.delete(a)
            });
            eO(this, a)
        }
    };
    var fO = new u.Map([
            [2, {
                bf: "page_level_ads"
            }]
        ]),
        gO = function(a, b) {
            var c = void 0 === c ? fO : c;
            this.context = a;
            this.D = b;
            this.j = c;
            this.m = new u.Map;
            this.loaded = new u.Set
        },
        iO;
    gO.prototype.load = function(a) {
        var b = _.hO(this, a),
            c, d = (null != (c = this.j.get(a.module)) ? c : {}).bf;
        if (!d) throw Error("cannot load invalid module: " + d);
        if (!this.loaded.has(a.module)) {
            c = (c = _.cg(172)) && "pagead2.googlesyndication.com" === ow((c.src || "").match(_.nw)[3] || null);
            c = vd(c ? this.D.qe(d) : this.D.re(d));
            d = {};
            var e = _.A(gy),
                f = _.A(Ix);
            e && (d.cb = e);
            f && (d.mcb = f);
            _.t(Object, "keys").call(Object, d).length ? (c = Ps.exec(Va(c).toString()), e = c[3] || "", d = md(c[1] + Qs("?", c[2] || "", d) + Qs("#", e))) : d = c;
            iO(this, a);
            yj(document, d);
            this.loaded.add(a.module)
        }
        return b.promise
    };
    _.hO = function(a, b) {
        b = b.module;
        a.m.has(b) || a.m.set(b, new _.Mf);
        return a.m.get(b)
    };
    iO = function(a, b) {
        var c = b.module;
        b = "_gpt_js_load_" + c + "_";
        var d = _.Vg(a.context, 340, function(e) {
            if (a.j.has(c) && "function" === typeof e) {
                var f = a.j.get(c);
                f = (void 0 === f.ue ? [] : f.ue).map(function(g) {
                    return _.hO(a, g).promise
                });
                u.Promise.all(f).then(function() {
                    e.call(window, _, a)
                })
            }
        });
        Object.defineProperty(dg(), b, {
            value: function(e) {
                if (d) {
                    var f = d;
                    d = null;
                    f(e)
                }
            },
            writable: !1,
            enumerable: !1
        })
    };
    var jO = function() {
        this.resources = {}
    };
    var sr = function(a, b, c, d, e, f, g, h, k) {
        Z.call(this, a, 682);
        this.J = b;
        this.format = c;
        this.slotId = d;
        this.F = e;
        this.A = yD(this);
        this.l = Y(this, f);
        this.o = U(this, g);
        this.G = U(this, h);
        this.C = Y(this, k)
    };
    _.N(sr, Z);
    sr.prototype.j = function() {
        var a = this;
        if ((2 === this.format || 3 === this.format) && null !== this.l.j.D && Mq(this.l.value, 12, !1)) {
            var b = this.C.value.De,
                c = _.GK(this.J, this.slotId),
                d = this.G.value,
                e = this.o.value;
            _.hi(e, {
                "max-height": "30vh",
                overflow: "hidden"
            });
            if (kO) kO.Gf(e);
            else {
                kO = new b(this.context, this.format, e, this.F, d, this.J, this.slotId);
                b = {};
                d = _.w(tc(this.l.value, qv, 13));
                for (var f = d.next(); !f.done; f = d.next()) f = f.value, b[F(f, 1)] = F(f, 2);
                kO.Jf(b);
                kO.zb();
                DK(this.J, this.slotId, function() {
                    kO && (kO.Ba(), kO = null);
                    c && _.IK(a.J, a.slotId)
                })
            }
            _.to(this, function() {
                return _.jw(e)
            })
        }
        this.A.notify()
    };
    var kO = null;
    var tr = function(a, b, c, d, e, f, g, h, k) {
        Z.call(this, a, 683);
        this.slotId = b;
        this.format = c;
        this.O = d;
        this.l = Y(this, e);
        this.o = U(this, f);
        this.K = U(this, g);
        this.C = Y(this, h);
        this.G = Y(this, k);
        this.L = nq(b, oq, function(l) {
            l = l.detail;
            try {
                var m = JSON.parse(l.data);
                return "sth" === m.googMsgType && "i-adframe-load" === m.msg_type
            } catch (n) {
                return !1
            }
        })
    };
    _.N(tr, Z);
    tr.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, m, n;
        return _.cb(function(p) {
            if (1 == p.j) {
                b = a.l.value;
                if (!b || 5 !== a.format) return p.return();
                c = a.K.value;
                d = a.o.value;
                e = a.G.value;
                f = e.Le;
                g = new _.aJ(a.context);
                l = _.B(Yk) && (null == (h = a.l.value) ? 0 : Gk(h, 14)) ? 60 * (null == (k = a.l.value) ? NaN : F(k, 14)) : $k(!0);
                m = new f(window, d, c, g, a.O, mq(tc(b, qv, 13)), "22639388115" === $f(a.slotId.getAdUnitPath()), function() {
                    return void a.Ba()
                }, l, a.C.value);
                _.Pn(a, m);
                n = _.A(Wx);
                switch (n) {
                    case 0:
                        m.O();
                        break;
                    case 1:
                        p.j = 2;
                        return
                }
            } else {
                if (4 != p.j) return db(p, a.L, 4);
                if (a.D) return p.return();
                m.O(!0)
            }
            p.j = 0
        })
    };
    var lO = function() {
        this.module = 2
    };
    lO.prototype.toString = function() {
        return String(this.module)
    };
    _.mO = new lO;
    var or = function(a, b, c, d, e) {
        Z.call(this, a, 846);
        this.C = b;
        this.format = c;
        this.A = T(this);
        this.l = Y(this, d);
        this.o = Y(this, e)
    };
    _.N(or, Z);
    or.prototype.j = function() {
        var a = this,
            b, c, d, e, f;
        return _.cb(function(g) {
            if (1 == g.j) {
                c = (2 === a.format || 3 === a.format) && !(null == (b = a.l.value) || !Mq(b, 12, !1));
                d = 5 === a.format && a.o.value;
                if (!c && !d) {
                    pD(a.A);
                    g.j = 0;
                    return
                }
                e = a.A;
                f = e.j;
                return db(g, a.C.load(_.mO), 3)
            }
            f.call(e, g.m);
            g.j = 0
        })
    };
    var nO = function(a, b, c, d) {
        Z.call(this, a, 696);
        this.slotId = b;
        this.sa = c;
        AD(this, d);
        this.l = new u.Promise(function(e) {
            for (var f = _.w(["closed", "ha_before_make_visible"]), g = f.next(); !g.done; g = f.next()) pq(b, g.value).then(e)
        })
    };
    _.N(nO, Z);
    nO.prototype.j = function() {
        var a = this;
        return _.cb(function(b) {
            if (1 == b.j) return db(b, a.l, 2);
            if (3 != b.j) return a.D ? b.return() : db(b, a.sa.dispatchEvent("rewardedSlotClosed", 703, new ZN(a.slotId, "publisher_ads")), 3);
            a.Ba();
            b.j = 0
        })
    };
    var oO = function(a, b, c, d) {
        Z.call(this, a, 694);
        this.slotId = b;
        this.sa = c;
        AD(this, d);
        var e = new Sq;
        this.l = Y(this, e);
        pq(b, "granted").then(function(f) {
            var g;
            return void qD(e, null != (g = f.payload) ? g : null)
        })
    };
    _.N(oO, Z);
    oO.prototype.j = function() {
        this.sa.dispatchEvent("rewardedSlotGranted", 702, new YN(this.slotId, "publisher_ads", this.l.value))
    };
    var pO = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        qO = function(a, b, c, d, e, f) {
            Z.call(this, a, 693);
            this.F = b;
            this.G = f;
            this.A = yD(this);
            this.l = U(this, c);
            this.o = U(this, d);
            AD(this, e);
            this.C = new _.WH(this.F)
        };
    _.N(qO, Z);
    qO.prototype.j = function() {
        var a = this;
        if (!this.G.B) {
            var b = 0 === (0, _.nl)() ? "rgba(1,1,1,0.5)" : "white";
            _.hi(this.o.value, _.t(Object, "assign").call(Object, {
                "background-color": b,
                opacity: "1",
                position: "fixed",
                margin: "0",
                padding: "0",
                "z-index": "2147483647",
                display: "block"
            }, pO));
            _.to(this, _.eI(this.F.document, this.F));
            jd(this.l.value).postMessage(JSON.stringify({
                type: "rewarded",
                message: "visible"
            }), "*");
            if (this.F === this.F.top) {
                this.F.location.hash = "goog_rewarded";
                var c = new _.ZH(this.C);
                _.$H(c);
                _.to(this, function() {
                    _.aI(c);
                    "goog_rewarded" === a.F.location.hash && (a.F.location.hash = "")
                })
            }
            this.A.notify()
        }
    };
    var rO = function(a, b, c, d) {
        Z.call(this, a, 695);
        this.F = b;
        this.l = U(this, c);
        AD(this, d)
    };
    _.N(rO, Z);
    rO.prototype.j = function() {
        if (this.F === this.F.top) var a = jd(this.l.value),
            b = NK(this, 503, this.F, "hashchange", function(c) {
                Rs(c.oldURL, "#goog_rewarded") && (a.postMessage(JSON.stringify({
                    type: "rewarded",
                    message: "back_button"
                }), "*"), b())
            })
    };
    var sO = function(a, b, c, d) {
        Z.call(this, a, 692);
        this.slotId = b;
        this.sa = c;
        this.A = yD(this);
        this.l = U(this, d)
    };
    _.N(sO, Z);
    sO.prototype.j = function() {
        var a = this,
            b, c, d, e, f;
        return _.cb(function(g) {
            if (1 == g.j) return b = a.l.value, c = new _.Mf, d = c.promise, e = c.resolve, a.sa.dispatchEvent("rewardedSlotReady", 701, new XN(a.slotId, "publisher_ads", e, null != (f = b.payload) ? f : null)), db(g, d, 2);
            if (a.D) return g.return();
            a.A.notify();
            a.Ba();
            g.j = 0
        })
    };
    var tO = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        uO = {
            width: "60%",
            height: "60%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        vO = function(a, b, c) {
            Z.call(this, a, 691);
            var d = this;
            this.o = T(this);
            this.l = yD(this);
            this.C = U(this, c);
            this.G = pq(b, "prefetched");
            pq(b, "ha_before_make_visible").then(function() {
                return void d.l.notify()
            })
        };
    _.N(vO, Z);
    vO.prototype.j = function() {
        var a = this,
            b;
        return _.cb(function(c) {
            if (1 == c.j) {
                if (a.l.B) return c.return();
                _.hi(a.C.value, _.t(Object, "assign").call(Object, {
                    position: "absolute"
                }, 0 === (0, _.nl)() ? uO : tO));
                return db(c, a.G, 2)
            }
            b = c.m;
            if (a.D) return c.return();
            a.o.j(b);
            c.j = 0
        })
    };
    var ur = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 688);
        4 === c && (this.za = new Be, _.Pn(this, this.za), c = new vO(this.context, b, f), D(this.za, c), a = new sO(this.context, b, d, c.o), D(this.za, a), g = new qO(this.context, e, f, g, a.A, c.l), D(this.za, g), D(this.za, new rO(this.context, e, f, g.A)), D(this.za, new oO(this.context, b, d, a.A)), D(this.za, new nO(this.context, b, d, a.A)))
    };
    _.N(ur, Z);
    ur.prototype.j = function() {
        var a;
        null == (a = this.za) || Qe(a)
    };
    var wO = function(a, b, c) {
        _.HB.call(this);
        this.context = a;
        this.B = b;
        this.m = c;
        a = c.slotId;
        b = c.size;
        this.j = "height" === c.Ee ? "fluid" : [b.width, b.height];
        this.Eb = ci(a);
        this.Fb = yo
    };
    _.N(wO, _.HB);
    wO.prototype.render = function() {
        var a = this.B,
            b = this.m,
            c = b.slotId,
            d = b.N.P,
            e = b.U,
            f = b.size,
            g = b.rb,
            h = b.ze,
            k = b.isBackfill;
        b = b.Kb;
        g && Qf(g, _.hw(e), null != h ? h : "", !1);
        JC(_.E(Xg), "5", F(d[c.getDomId()], 20));
        c.dispatchEvent(uK, 801, {
            rd: 0 === a.kind ? a.ta : "",
            isBackfill: k
        });
        a = this.I();
        b && a && a.setAttribute("data-google-container-id", b);
        c.dispatchEvent(wK, 825, {
            size: f,
            isEmpty: !1
        });
        return a
    };
    wO.prototype.loaded = function(a) {
        var b = this.m,
            c = b.slotId,
            d = b.sa;
        b = b.N.P;
        c.dispatchEvent(zK, 844, void 0);
        a && a.setAttribute("data-load-complete", !0);
        d.dispatchEvent("slotOnload", 710, new VN(c, "publisher_ads"));
        JC(_.E(Xg), "6", F(b[c.getDomId()], 20))
    };
    var xO = function(a, b) {
        if (b) return null;
        a = a.B;
        a = 0 === a.kind ? a.ta : "";
        b = "";
        var c = !0,
            d = "sf";
        b = void 0 === b ? "" : b;
        c = void 0 === c ? !1 : c;
        d = void 0 === d ? "" : d;
        if (a) {
            var e = a.toLowerCase(); - 1 < e.indexOf("<!doctype") || -1 < e.indexOf("<html") ? c && Zf(d, 2) : (c && Zf(d, 3), a = _.B(qB) ? a : "<!doctype html><html><head>" + b + "</head><body>" + a + "</body></html>")
        } else c && Zf(d, 1);
        return a
    };
    wO.prototype.H = function() {
        _.HB.prototype.H.call(this);
        var a;
        null == (a = this.m.rb) || a.removeAttribute("data-google-query-id")
    };
    wO.prototype.o = function(a, b) {
        var c = this,
            d = yO(this, function() {
                return void c.loaded(d.j)
            }, a, b);
        _.to(this, function() {
            100 != d.status && (2 == d.C && (wJ(d.D), d.C = 0), window.clearTimeout(d.R), d.R = -1, d.o = 3, d.m && (d.m.Ba(), d.m = null), _.Md(window, "resize", d.ra), _.Md(window, "scroll", d.ra), d.l && d.j && d.l == _.kw(d.j) && d.l.removeChild(d.j), d.j = null, d.l = null, d.status = 100)
        });
        return d
    };
    var yO = function(a, b, c, d) {
        var e = a.m,
            f = e.Wd,
            g = e.isBackfill,
            h = e.Me,
            k = e.Kb,
            l = e.wc,
            m = e.Zb,
            n = e.pb,
            p = e.Fc,
            r = Array.isArray(a.j) ? new _.Ph(Number(a.j[0]), Number(a.j[1])) : 1;
        return new EJ({
            Yc: e.qd,
            Eb: a.Eb,
            Fb: a.Fb,
            content: xO(a, d),
            size: r,
            ye: !!h,
            Md: b,
            Xd: null != f ? f : void 0,
            permissions: {
                Xb: Gk(c, 1) ? !!H(c, 1) : !g,
                Yb: Gk(c, 2) ? !!H(c, 2) : !1
            },
            Gb: !!dg().fifWin,
            pf: Vm ? Vm : Vm = uk(),
            se: zk(),
            hostpageLibraryTokens: _.E(uM).hostpageLibraryTokens,
            Ca: function(z, C) {
                return void Zg(a.context, z, C)
            },
            uniqueId: k,
            wc: null != l ? l : void 0,
            Zb: null != m ? m : void 0,
            bc: null != d ? d : void 0,
            pb: null != n ? n : void 0,
            Fc: null != p ? p : void 0
        })
    };
    var rq = function() {
        wO.apply(this, arguments)
    };
    _.N(rq, wO);
    rq.prototype.I = function() {
        var a = this.m,
            b = a.N,
            c = b.V;
        a = b.P[a.slotId.getDomId()];
        b = new Ak;
        c = Hk([b, c.Da(), null == a ? void 0 : a.Da()]);
        return wO.prototype.o.call(this, c).j
    };
    rq.prototype.l = function() {
        return !1
    };
    var zO = function() {
        wO.apply(this, arguments)
    };
    _.N(zO, wO);
    var AO = function(a, b) {
            var c = _.Ld(b ? "fencedframe" : "IFRAME");
            b && (c.mode = "opaque-ads");
            c.id = a.Eb;
            c.name = a.Eb;
            c.title = a.Fb;
            Array.isArray(a.j) ? null != a.j[0] && null != a.j[1] && (c.width = String(a.j[0]), c.height = String(a.j[1])) : (c.width = "100%", c.height = "0");
            c.allowTransparency = "true";
            c.scrolling = "no";
            c.marginWidth = "0";
            c.marginHeight = "0";
            c.frameBorder = "0";
            c.style.border = "0";
            c.style.verticalAlign = "bottom";
            c.setAttribute("role", "region");
            c.setAttribute("aria-label", "Advertisement");
            c.tabIndex = 0;
            return c
        },
        BO = function(a, b) {
            "string" !== typeof a.j && (b.width = String(a.j[0]), b.height = String(a.j[1]));
            var c = _.Vg(a.context, 774, function() {
                a.loaded(b);
                _.Md(b, "load", c)
            });
            _.ab(b, "load", c);
            _.to(a, function() {
                return _.Md(b, "load", c)
            });
            a.m.qd.appendChild(b)
        };
    var sq = function() {
        zO.apply(this, arguments)
    };
    _.N(sq, zO);
    sq.prototype.I = function() {
        var a = this,
            b = this.m,
            c = b.Wd;
        b = b.Zb;
        var d = AO(this);
        if (null == c ? 0 : c.length)
            if (_.rt) {
                c = _.w(c);
                for (var e = c.next(); !e.done; e = c.next()) d.sandbox.add(e.value)
            } else d.sandbox.add.apply(d.sandbox, _.xd(c));
        b && (d.allow = b);
        _.B(vy) || Ba(za(), "iPhone") || (d.srcdoc = Oa(Ze));
        BO(this, d);
        _.bh(this.context, 653, function() {
            var f;
            if (f = df(Oa(df(a.B.ta)).toString())) {
                var g = f.toString().toLowerCase(); - 1 < g.indexOf("<!doctype") || -1 < g.indexOf("<html") ? qq(2) : (qq(3), f = _.B(qB) ? f : df("<!doctype html><html><head><script>var inDapIF=true,inGptIF=true;\x3c/script></head><body>" + f + "</body></html>"))
            } else qq(1);
            var h, k;
            g = null != (k = null == (h = d.contentWindow) ? void 0 : h.document) ? k : d.contentDocument;
            Ea() && g.open("text/html", "replace");
            Xa(g, f);
            var l, m, n;
            if (Rs(null != (n = null == (l = d.contentWindow) ? void 0 : null == (m = l.location) ? void 0 : m.href) ? n : "", "#")) {
                var p, r;
                null == (p = d.contentWindow) || null == (r = p.history) || r.replaceState(null, "", "#" + Math.random())
            }
            g.close()
        }, !0);
        return d
    };
    sq.prototype.l = function() {
        return !0
    };
    var uq = function() {
        zO.apply(this, arguments)
    };
    _.N(uq, zO);
    uq.prototype.I = function() {
        var a = AO(this, !this.m.xf);
        Fi(a, this.B.fd);
        BO(this, a);
        return a
    };
    uq.prototype.l = function() {
        return !1
    };
    var tq = function() {
        zO.apply(this, arguments)
    };
    _.N(tq, zO);
    tq.prototype.I = function() {
        var a = this.B.url,
            b = this.m,
            c = b.N,
            d = c.V;
        b = c.P[b.slotId.getDomId()];
        d = Hk([d.Da(), null == b ? void 0 : b.Da()]);
        var e = AO(this);
        Fi(e, a);
        zO.prototype.o.call(this, d, e);
        var f = function() {
            e.removeEventListener("load", f);
            CO(a)
        };
        e.addEventListener("load", f);
        Mw(e, function() {
            return void CO(a)
        });
        return e
    };
    var CO = function(a) {
        var b = document.querySelectorAll("script[type=webbundle]");
        if (b.length) {
            a: {
                for (var c = 0; c < b.length; c++) {
                    var d = void 0;
                    if (null == (d = b[c].textContent) ? 0 : d.match(a)) {
                        b = b[c];
                        break a
                    }
                }
                b = null
            }
            b && b.textContent && (c = JSON.parse(b.textContent)) && "object" === typeof c && (d = c.resources, a = d.indexOf(a, 0), -1 < a && d.splice(a, 1), 0 === d.length ? document.head.removeChild(b) : (a = _.Ld("SCRIPT"), a.setAttribute("type", "webbundle"), a.textContent = JSON.stringify(c), document.head.removeChild(b), document.head.appendChild(a)))
        }
    };
    tq.prototype.l = function() {
        return !1
    };
    var qr = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, z, C, J, V, P, L, W, R, X, wa, ua, Ma) {
        Z.call(this, a, 680);
        this.slotId = b;
        this.J = c;
        this.N = d;
        this.sa = e;
        this.F = f;
        this.l = T(this);
        this.C = T(this);
        this.o = yD(this);
        this.K = U(this, g);
        this.na = U(this, h);
        AD(this, l);
        this.aa = U(this, m);
        this.G = U(this, n);
        this.W = U(this, p);
        AD(this, L);
        this.L = Y(this, r);
        this.O = Y(this, z);
        this.wa = Y(this, C);
        this.T = U(this, J);
        this.ma = Y(this, V);
        this.Ja = Y(this, P);
        this.va = Y(this, k);
        AD(this, W);
        this.fa = U(this, R);
        AD(this, X);
        this.ya = Y(this, wa);
        this.ca = Y(this, ua);
        this.ea = Y(this, Ma)
    };
    _.N(qr, Z);
    qr.prototype.j = function() {
        var a = this,
            b = this.K.value;
        if (0 === b.kind && null == b.ta) throw new KC("invalid html");
        var c;
        b = vq(this.context, b, {
            U: document,
            slotId: this.slotId,
            J: this.J,
            N: this.N,
            sa: this.sa,
            size: this.W.value,
            rb: this.aa.value,
            qd: this.G.value,
            ze: this.L.value,
            Ee: this.O.value,
            Wd: this.wa.value,
            isBackfill: this.T.value,
            Me: this.ma.value,
            Kb: this.Ja.value,
            wc: this.va.value,
            Zb: this.fa.value,
            pb: this.ya.value,
            xf: null == (c = this.ca.value) ? void 0 : Mq(c, 14),
            Fc: this.ea.value
        }, {
            zf: this.na.value
        });
        _.Pn(this, b);
        var d = b.render();
        NK(this, this.id, this.F, "message", function(e) {
            d.contentWindow === e.source && a.slotId.dispatchEvent(oq, 824, e)
        });
        this.o.notify();
        this.l.j(d);
        this.C.j(b.l())
    };
    var wr = function(a, b, c, d, e) {
        Z.call(this, a, 863);
        this.l = c;
        this.nb = Number(b);
        this.o = U(this, d);
        this.C = U(this, e);
        this.G = DO(this)
    };
    _.N(wr, Z);
    var DO = function(a) {
        return _.cb(function(b) {
            return b.return(new u.Promise(function(c) {
                try {
                    NK(a, a.id, a.l, "message", function(d) {
                        var e;
                        "asmreq" === (null == (e = d.data) ? void 0 : e.type) && Wd(Od(LH, d.data.payload), 1, 0) === a.nb && c(d)
                    })
                } catch (d) {}
            }))
        })
    };
    wr.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g;
        return _.cb(function(h) {
            if (1 == h.j) return b = wq(a.l), c = a.o.value, d = a.C.value, db(h, a.G, 2);
            e = h.m;
            var k = a.l,
                l = wq(k);
            var m = c.getBoundingClientRect();
            var n = id(k) ? Lh(c, k) : {
                x: 0,
                y: 0
            };
            k = n.x;
            n = n.y;
            m = new _.Qw(n, k + m.right, n + m.bottom, k);
            k = new NH;
            k = v(k, 1, m.top);
            k = v(k, 3, m.bottom);
            k = v(k, 2, m.left);
            m = v(k, 4, m.right);
            k = new MH;
            k = v(k, 1, a.nb);
            k = v(k, 2, !d);
            m = Kc(k, 3, m);
            m = v(m, 4, b);
            f = v(m, 5, l);
            g = {
                type: "asmres",
                payload: f.Y()
            };
            e.ports[0].postMessage(g);
            h.j = 0
        })
    };
    var ir = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        Z.call(this, a, 699);
        this.U = b;
        this.slotId = c;
        this.l = d;
        this.tb = e;
        this.A = yD(this);
        this.K = Y(this, f);
        this.O = U(this, g);
        this.C = U(this, h);
        this.L = U(this, k);
        this.o = Y(this, l);
        this.T = U(this, m);
        this.G = U(this, n)
    };
    _.N(ir, Z);
    ir.prototype.j = function() {
        var a = this.O.value,
            b = this.C.value;
        b.style.width = "";
        b.style.height = "";
        if ("height" !== this.K.value) {
            var c, d = null != (c = this.o.value) ? c : 0;
            c = this.L.value;
            var e = this.T.value,
                f = this.G.value,
                g = !1;
            switch (d) {
                case 1:
                case 2:
                    g = this.context;
                    var h = this.U,
                        k = this.slotId,
                        l = this.l,
                        m = this.tb;
                    var n = c.width,
                        p = c.height,
                        r = 0;
                    var z = 0;
                    var C = Ch(l);
                    C = _.w(C);
                    for (var J = C.next(); !J.done; J = C.next()) {
                        var V = J.value;
                        Array.isArray(V) && (J = V[0], V = V[1], r < J && (r = J), z < V && (z = V))
                    }
                    z = [r, z];
                    r = z[0] < n;
                    p = z[1] < p;
                    if (r || p) {
                        z = n + "px";
                        C = {
                            "max-height": "none",
                            "max-width": z,
                            padding: "0px",
                            width: z
                        };
                        p && (C.height = "auto");
                        ii(b, a, C);
                        b = {};
                        r && (r = gi(e.width), n > r && (b.width = z, b["max-width"] = z));
                        p && (b.height = "auto", b["max-height"] = "none");
                        c: {
                            for (P in b)
                                if (Object.prototype.hasOwnProperty.call(b, P)) {
                                    var P = !1;
                                    break c
                                }
                            P = !0
                        }
                        P ? b = !1 : (b["padding-" + ("ltr" === e.direction ? "left" : "right")] = "0px", _.hi(a, b), b = !0)
                    } else b = !1;
                    b: switch (z = c.width, P = h.defaultView || h.parentWindow || _.q, d) {
                        case 2:
                            a = ji(a, P, z, e, m);
                            break b;
                        case 1:
                            if (e = a.parentElement)
                                if (m = Qh(e)) {
                                    J = m.width;
                                    m = Wh(k, P.document);
                                    n = Yh(m, P);
                                    p = n.position;
                                    V = gi(n.width) || 0;
                                    r = Yh(e, P);
                                    C = "rtl" === r.direction ? "Right" : "Left";
                                    m = C.toLowerCase();
                                    P = "absolute" === p ? 0 : gi(r["padding" + C]);
                                    r = gi(r["border" + C + "Width"]);
                                    z = Math.max(Math.round((J - Math.max(V, z)) / 2), 0);
                                    J = {};
                                    V = 0;
                                    var L = Ew(n);
                                    L && (V = L[4] * ("Right" === C ? -1 : 1), C = L[3] || 1, 1 !== (L[0] || 1) || 1 !== C) && (L[0] = 1, L[3] = 1, J.transform = "matrix(" + L.join(",") + ")");
                                    C = 0;
                                    switch (p) {
                                        case "fixed":
                                            var W, R = null != (W = Number(Zh(n.getPropertyValue(m)))) ? W : 0,
                                                X;
                                            W = null != (X = e.getBoundingClientRect().left) ? X : 0;
                                            C = R - W;
                                            break;
                                        case "relative":
                                            C = null != (R = Number(Zh(n.getPropertyValue(m)))) ? R : 0;
                                            break;
                                        case "absolute":
                                            J[m] = "0"
                                    }
                                    J["margin-" + m] = z - P - r - C - V + "px";
                                    _.hi(a, J);
                                    a = !0
                                } else a = !1;
                            else a = !1;
                            break b;
                        default:
                            a = !1
                    }
                    b || a ? (li(g, h, k, l, d, c.width, c.height, "gpt_slotexp", f), g = !0) : g = !1;
                    break;
                case 3:
                    d = this.context, g = this.U, h = this.slotId, k = this.l, W = this.tb, l = c.width, X = c.height, R = gi(e.height) || 0, X >= R || "none" === e.display || "hidden" === e.visibility || !W || -12245933 === W.width || a.getBoundingClientRect().bottom <= W.height ? g = !1 : (W = {
                        height: X + "px"
                    }, ii(b, a, W), _.hi(a, W), li(d, g, h, k, 3, l, X, "gpt_slotred", f), g = !0)
            }!g && _.B(qx) && li(this.context, this.U, this.slotId, this.l, 0, c.width, c.height, "gpt_pgbrk", f)
        }
        this.A.notify()
    };
    var nr = function(a, b) {
        Z.call(this, a, 1020);
        this.F = b;
        this.A = T(this)
    };
    _.N(nr, Z);
    nr.prototype.j = function() {
        var a = this.F;
        a = _.B(Ay) && void 0 !== a.isAnonymouslyFramed && a.crossOriginIsolated;
        this.A.j(a)
    };
    var Vq = function(a, b, c, d, e) {
        Z.call(this, a, 720);
        this.format = b;
        this.C = c;
        this.A = T(this);
        this.l = Y(this, d);
        this.o = Y(this, e)
    };
    _.N(Vq, Z);
    Vq.prototype.j = function() {
        var a = this.o.value;
        if (null == a) pD(this.A);
        else {
            var b = Math.round(.3 * this.C);
            2 !== this.format && 3 !== this.format || null === this.l.j.D || !Mq(this.l.value, 12, !1) || 0 >= b || a <= b ? this.A.j(a) : this.A.j(b)
        }
    };
    var dr = function(a, b, c, d, e, f, g, h, k, l, m) {
        Z.call(this, a, 674);
        this.slotId = b;
        this.V = c;
        this.o = d;
        this.U = f;
        this.J = g;
        this.A = T(this);
        this.G = 2 === e || 3 === e;
        this.l = U(this, h);
        this.L = U(this, k);
        this.K = Y(this, l);
        this.C = Y(this, m)
    };
    _.N(dr, Z);
    dr.prototype.j = function() {
        var a = Ih(this.V, this.o),
            b = Vh(this.slotId, this.U) || pm(this.l.value, di(this.slotId), a);
        this.L.value && !a && (b.style.display = "inline-block");
        this.G ? DK(this.J, this.slotId, function() {
            return void _.jw(b)
        }) : _.to(this, function() {
            return void _.jw(b)
        });
        a = EO(this);
        0 < a && (b.style.paddingTop = a + "px");
        this.A.j(b)
    };
    var EO = function(a) {
        var b = a.l.value,
            c, d = null == (c = a.K.value) ? void 0 : c.height;
        if (b && !a.C.value && d) {
            var e;
            c = (null != (e = H(a.o, 23)) ? e : H(a.V, 31)) ? Math.floor((b.offsetHeight - d) / 2) : 0
        } else c = 0;
        return c
    };
    var Oq = function(a, b) {
        Z.call(this, a, 859);
        this.F = b;
        this.A = T(this)
    };
    _.N(Oq, Z);
    Oq.prototype.j = function() {
        this.A.j(!id(this.F.top))
    };
    var gr = function(a, b, c) {
        Z.call(this, a, 698);
        this.F = b;
        this.A = T(this);
        this.l = U(this, c)
    };
    _.N(gr, Z);
    gr.prototype.j = function() {
        qD(this.A, Yh(this.l.value, this.F))
    };
    var Uq = function(a, b, c, d) {
        Z.call(this, a, 813);
        this.Ma = b;
        this.l = T(this);
        this.C = Y(this, c);
        this.o = Y(this, d)
    };
    _.N(Uq, Z);
    Uq.prototype.j = function() {
        var a = this.C.value;
        if (!a || _.B(By)) this.l.j(!1);
        else if (FO.has(this.Ma)) this.l.j(!1);
        else {
            FO.add(this.Ma);
            a = _.w(a);
            for (var b = a.next(); !b.done; b = a.next()) {
                var c = b.value;
                b = c.Ub;
                (c = c.url) && ye(b, c, this.o.value)
            }
            this.l.j(!0)
        }
    };
    var FO = new u.Set;
    var mr = function(a, b, c) {
        Z.call(this, a, 840);
        this.format = b;
        this.U = c;
        this.A = T(this)
    };
    _.N(mr, Z);
    mr.prototype.j = function() {
        var a = [],
            b = this.U;
        b = void 0 === b ? document : b;
        var c;
        null != (c = b.featurePolicy) && (y = c.features(), _.t(y, "includes")).call(y, "attribution-reporting") && a.push("attribution-reporting");
        5 !== this.format && 4 !== this.format || !_.B(nx) || a.push("autoplay");
        a.length ? this.A.j(a.join(";")) : this.A.j("")
    };
    var rr = function(a, b, c, d, e) {
        Z.call(this, a, 934);
        this.F = b;
        this.slotId = c;
        AD(this, d);
        this.l = U(this, e)
    };
    _.N(rr, Z);
    rr.prototype.j = function() {
        var a = this;
        rK(this.slotId, oq, function(b) {
            b = b.detail.data;
            try {
                var c = JSON.parse(b);
                if ("gpi-uoo" === c.googMsgType) {
                    var d = c.userOptOut,
                        e = c.clearAdsData,
                        f = a.l.value,
                        g = new Gv;
                    var h = v(g, 1, d ? "1" : "0");
                    var k = v(v(h, 2, 2147483647), 3, "/");
                    var l = v(k, 4, a.F.location.hostname);
                    var m = new PD(a.F);
                    SD(m, "__gpi_opt_out", l, f);
                    if (d || e) TD(m, "__gads", f), TD(m, "__gpi", f)
                }
            } catch (n) {}
        })
    };
    var yr = function(a, b, c, d, e, f) {
        Z.call(this, a, 721);
        this.F = b;
        this.G = Y(this, c);
        this.o = U(this, d);
        this.l = U(this, e);
        this.C = U(this, f)
    };
    _.N(yr, Z);
    yr.prototype.j = function() {
        var a = this,
            b = this.G.value,
            c, d = null == b ? void 0 : null == (c = F(b, 1)) ? void 0 : c.toUpperCase(),
            e;
        b = null == b ? void 0 : null == (e = F(b, 2)) ? void 0 : e.toUpperCase();
        if (d && b) {
            e = this.o.value;
            c = this.l.value;
            var f = this.C.value,
                g = f.style.height,
                h = f.style.width,
                k = f.style.display,
                l = f.style.position,
                m = Nw(e.id + "_top", d),
                n = Nw(e.id + "_bottom", b);
            _.hi(n, {
                position: "relative",
                top: "calc(100vh - 48px)"
            });
            f.appendChild(m);
            f.appendChild(n);
            _.hi(c, {
                position: "absolute",
                top: "24px",
                clip: "rect(0, auto, auto, 0)",
                width: "100vw",
                height: "calc(100vh - 48px)"
            });
            _.hi(e, {
                position: "fixed",
                top: "0",
                height: "100vh"
            });
            var p;
            _.hi(f, {
                position: "relative",
                display: (null == (p = this.F.screen.orientation) ? 0 : p.angle) ? "none" : "block",
                width: "100vw",
                height: "100vh"
            });
            NK(this, 722, this.F, "orientationchange", function() {
                var r;
                (null == (r = a.F.screen.orientation) ? 0 : r.angle) ? _.hi(f, {
                    display: "none"
                }): _.hi(f, {
                    display: "block"
                })
            });
            _.to(this, function() {
                _.jw(m);
                _.jw(n);
                f.style.position = l;
                f.style.height = g;
                f.style.width = h;
                f.style.display = k
            })
        }
    };
    var vr = function(a, b, c, d, e, f) {
        f = void 0 === f ? yq : f;
        Z.call(this, a, 783);
        var g = this;
        this.slotId = b;
        this.U = d;
        this.sa = e;
        this.K = f;
        this.G = !1;
        this.l = null;
        this.C = this.o = -1;
        this.O = _.Ho(function() {
            g.sa.dispatchEvent("impressionViewable", 715, new TN(g.slotId, "publisher_ads"))
        });
        this.T = lt(function() {
            g.sa.dispatchEvent("slotVisibilityChanged", 716, new UN(g.slotId, "publisher_ads", g.C))
        }, 200);
        this.L = U(this, c);
        var h = new wD;
        nq(this.slotId, zK).then(function() {
            return void h.notify()
        });
        AD(this, h)
    };
    _.N(vr, Z);
    vr.prototype.j = function() {
        var a = this,
            b = this.K(_.Vg(this.context, this.id, function(c) {
                c = _.w(c);
                for (var d = c.next(); !d.done; d = c.next()) a.o = 100 * d.value.intersectionRatio, _.t(Number, "isFinite").call(Number, a.o) && GO(a)
            }));
        b.observe(this.L.value);
        NK(this, this.id, this.U, "visibilitychange", function() {
            GO(a)
        });
        _.to(this, function() {
            b.disconnect()
        })
    };
    var GO = function(a) {
            var b = !RH(a.U);
            HO(a, 50 <= a.o && b);
            b = Math.floor(b ? a.o : 0);
            if (0 > b || 100 < b || b === a.C ? 0 : -1 !== a.C || 0 !== b) a.C = b, a.T()
        },
        HO = function(a, b) {
            a.G || (b ? null === a.l && (a.l = setTimeout(function() {
                RH(a.U) || (a.O(), a.G = !0);
                a.l = null
            }, 1E3)) : null !== a.l && (clearTimeout(a.l), a.l = null))
        };
    var IO = O(["https://googleads.g.doubleclick.net/td/kb?kbli=", ""]),
        pr = function(a, b) {
            Z.call(this, a, 1007);
            this.A = yD(this);
            this.l = Y(this, b)
        };
    _.N(pr, Z);
    pr.prototype.j = function() {
        var a;
        if (null === document.getElementById("koelBirdIGRegisterIframe") && null != (a = this.l.value) && a.length) {
            a = document.createElement("iframe");
            var b = ud(IO, encodeURIComponent(this.l.value.join(",")));
            a.removeAttribute("srcdoc");
            if (b instanceof kf) throw new it("TrustedResourceUrl", 2);
            a.src = _.Na(b);
            for (b = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" "); 0 < a.sandbox.length;) a.sandbox.remove(a.sandbox.item(0));
            for (var c = 0; c < b.length; c++) a.sandbox.supports && !a.sandbox.supports(b[c]) || a.sandbox.add(b[c]);
            a.id = "koelBirdIGRegisterIframe";
            document.head.appendChild(a)
        }
        this.A.notify()
    };
    var Zq = function(a, b, c) {
        Z.call(this, a, 666);
        this.o = b;
        this.l = T(this);
        this.C = Y(this, c)
    };
    _.N(Zq, Z);
    Zq.prototype.j = function() {
        var a = new $q;
        if (null !== this.C.j.D) {
            var b = v(a, 2, this.C.value);
            v(b, 3, 1)
        }
        if (this.o) {
            a = [this.o, a];
            b = new $q;
            a = _.w(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, Gk(c, 1) && v(b, 1, F(c, 1)), Gk(c, 2) && v(b, 2, F(c, 2)), Gk(c, 3) && v(b, 3, oe(c, 3));
            a = b
        }
        b = this.l;
        a = Gk(a, 2) ? Gk(a, 3) && 0 !== (0, _.nl)() ? F(a, 2) * oe(a, 3) : F(a, 2) : null;
        qD(b, a)
    };
    var hr = function(a, b, c, d, e, f) {
        f = void 0 === f ? Aq : f;
        Z.call(this, a, 666);
        this.o = f;
        this.A = yD(this);
        AD(this, b);
        this.l = U(this, c);
        this.G = Y(this, d);
        this.C = Y(this, e)
    };
    _.N(hr, Z);
    hr.prototype.j = function() {
        var a = this.C.value,
            b = this.G.value,
            c = this.l.value;
        null == a || 0 > a || 0 === b || !$h(c) ? this.A.notify() : JO(this, a, b, c)
    };
    var JO = function(a, b, c, d) {
        var e = a.o(b, _.Vg(a.context, 291, function(f, g) {
            f = _.w(f);
            for (var h = f.next(); !h.done; h = f.next())
                if (h = h.value, !(0 >= h.intersectionRatio)) {
                    g.unobserve(h.target);
                    a.A.notify();
                    break
                }
        }));
        null != c && setTimeout(function() {
            a.A.notify();
            e.disconnect()
        }, c);
        e.observe(d);
        _.to(a, function() {
            e.disconnect()
        })
    };
    var fr = function(a, b, c, d, e, f) {
        Z.call(this, a, 664);
        this.slotId = b;
        this.tb = c;
        this.J = d;
        this.A = yD(this);
        this.o = U(this, e);
        this.l = Y(this, f)
    };
    _.N(fr, Z);
    fr.prototype.j = function() {
        var a = this,
            b, c = null != (b = this.l.value) ? b : 0;
        if (0 !== (0, _.nl)() || 0 < c) {
            var d = document;
            b = QH(d);
            if (RH(d) && b && (0 < Rm(this.J, this.slotId) || !KO(this)) && b) {
                var e = NK(this, 324, d, b, function() {
                    RH(d) || (e && e(), a.A.notify())
                });
                if (e) return
            }
        }
        this.A.notify()
    };
    var KO = function(a) {
        var b = a.o.value;
        try {
            var c, d = null != (c = top) ? c : void 0;
            if (void 0 === d) return !0;
            var e = Dm(null == d ? void 0 : d.document, d).y,
                f = e + a.tb.height;
            return b.y >= e && b.y <= f
        } catch (g) {
            return !0
        }
    };
    var Yq = function(a, b, c, d, e, f) {
        Z.call(this, a, 669);
        this.V = b;
        this.P = c;
        this.F = d;
        this.A = T(this);
        this.o = Y(this, e);
        this.l = Y(this, f)
    };
    _.N(Yq, Z);
    Yq.prototype.j = function() {
        var a;
        if (sk(ox) || (null == (a = this.P) ? 0 : Dh(a, 16)) && ig("google_range_debug", this.F)) this.A.j(!0);
        else {
            var b;
            a = !(null == (b = this.o.value) || !F(b, 1)) && (H(this.P, 12) || H(this.V, 13)) || !!this.l.value;
            this.A.j(!!a)
        }
    };
    var lr = function(a, b, c, d, e, f) {
        Z.call(this, a, 828);
        this.o = b;
        this.slotId = c;
        this.N = d;
        this.A = T(this);
        this.l = U(this, e);
        this.C = Y(this, f)
    };
    _.N(lr, Z);
    lr.prototype.j = function() {
        var a = this,
            b = this.N,
            c = b.V,
            d = b.P[this.slotId.getDomId()],
            e = this.C.value;
        b = null;
        var f;
        d = null != (f = null == d ? void 0 : d.Da()) ? f : null;
        c = c.Da();
        (null == d ? 0 : Gk(d, 4)) ? b = H(d, 4): (null == c ? 0 : Gk(c, 4)) ? b = H(c, 4) : null != e && (b = e);
        var g = String(b);
        null == e || e === b || this.l.value || M(this.o, IL(g, String(e)));
        this.l.value || mi("gpt_sf_r", function(h) {
            si(h, a.context);
            I(h, "GAM", String(e));
            I(h, "Final", g)
        });
        this.A.j(_.B(jy) ? Uh() : cJ())
    };
    var jr = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 719);
        this.V = b;
        this.C = c;
        this.A = T(this);
        this.l = U(this, d);
        this.G = U(this, e);
        this.o = Y(this, f);
        this.K = Y(this, g)
    };
    _.N(jr, Z);
    jr.prototype.j = function() {
        var a = this.l.value.kind;
        switch (a) {
            case 0:
                if (this.l.value.ta)
                    if (this.G.value) LO(this);
                    else {
                        if (a = this.o.value) a = Aw(), a = !(!a["allow-top-navigation-by-user-activation"] || !a["allow-popups-to-escape-sandbox"]);
                        a ? this.A.j(JJ) : pD(this.A)
                    }
                else pD(this.A);
                break;
            case 1:
                LO(this);
                break;
            case 2:
                pD(this.A);
                break;
            default:
                Qa(a)
        }
    };
    var LO = function(a) {
        var b = a.K.value,
            c = new Ak;
        b = v(c, 3, b);
        H(Hk([b, a.V.Da(), a.C.Da()]), 3) ? a.A.j(JJ) : pD(a.A)
    };
    var ar = function(a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 681);
        this.adUnitPath = b;
        this.aa = c;
        this.L = d;
        this.window = e;
        this.pa = T(this);
        this.o = T(this);
        this.Qb = T(this);
        this.l = sk(ox).split(",");
        this.G = wk(px);
        this.Oa = Dh(c, 16) ? vc(c, Qk, 16) : null;
        this.K = hg("google_range_debug", this.window);
        this.O = Y(this, f);
        this.ca = Y(this, g);
        this.T = Y(this, h);
        this.C = U(this, k);
        this.W = U(this, l)
    };
    _.N(ar, Z);
    ar.prototype.j = function() {
        if (0 !== this.C.value.kind || this.C.value.ta.length) {
            var a;
            if (a = !!(this.l.length || this.Oa && this.K)) {
                b: if (this.l.length) {
                    if (this.G.length && (a = this.adUnitPath.split("/"), !_.t(this.G, "includes").call(this.G, a[a.length - 1]))) {
                        a = !1;
                        break b
                    }
                    a = !0
                } else a = !1;
                var b = a;a = b ? MO(this) : null;
                if (b && a) {
                    b = this.W.value;
                    var c, d, e = null != (d = null == (c = Qh(b.parentElement)) ? void 0 : c.width) ? d : 0;
                    c = "p" === this.l[0];
                    d = Number(this.l[0]);
                    if (c = "f" === this.l[0] ? this.L : d && 0 < d ? d : c ? Math.min(e, this.L) : null) {
                        d = a.width;
                        var f = a.height,
                            g = this.l[1],
                            h = Number(g);
                        d = "ratio" === g && d ? Math.floor(f / d * c) : h && 0 < h ? f * h : f;
                        NO(this, c, d, {
                            kind: 0,
                            ta: OO(c, d, "<p>Requested size:" + a.width + "x" + a.height + "</p>")
                        }, c <= e ? 1 : 2, b);
                        a = !0
                    } else a = !1
                } else a = !1;
                if (!a) a: if (this.Oa && this.K) {
                    a = en(this.Oa, this.window);
                    b = fn(this.Oa, this.window);
                    e = gn(this.Oa);
                    c = hn(this.Oa);
                    switch (this.K) {
                        case "max":
                            d = a;
                            f = b;
                            break;
                        case "min":
                            d = e;
                            f = c;
                            break;
                        case "banner":
                            d = a;
                            f = 90 > b ? b : 90 < c ? c : 90;
                            break;
                        case "skyscraper":
                            d = 90 > a ? a : 90 < e ? e : 90;
                            f = b;
                            break;
                        default:
                            a = !1;
                            break a
                    }
                    NO(this, d, f, {
                        kind: 0,
                        ta: OO(d, f, "<p>Minimum size:" + e + "x" + c + "</p><p>Maximum size:" + (a + "x" + b + "</p><div id=toowide style=\"display:none; background:#faa\">Slot does not fit horizontally<script>new IntersectionObserver((e) => {toowide.style.display =   (e[e.length-1].boundingClientRect.width >    e[e.length-1].intersectionRect.width) ? 'block' : 'none';},{threshold:1}).observe(document.body);\x3c/script></div>"))
                    });
                    a = !0
                } else a = !1
            }
            a || PO(this)
        } else PO(this)
    };
    var MO = function(a) {
            a = Ch(a.aa)[0];
            return Array.isArray(a) && a.every(function(b) {
                return "number" === typeof b
            }) ? new _.Ph(a[0], a[1]) : null
        },
        OO = function(a, b, c) {
            return '<html><body style="height:' + (b - 2 + "px;width:" + (a - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;">')) + c + ("<p>Rendered size:" + a + "x" + b + "</p></body></html>")
        },
        NO = function(a, b, c, d, e, f) {
            e = void 0 === e ? a.O.value : e;
            a.o.j(new _.Ph(b, c));
            a.pa.j(d);
            qD(a.Qb, e);
            f && _.ax(f, "opacity", .5)
        },
        PO = function(a) {
            var b = a.ca.value;
            if (null == b) throw new Sk("Missing 'width'.");
            var c = a.T.value;
            if (null == c) throw new Sk("Missing 'height'.");
            NO(a, b, c, a.C.value)
        };
    var Wq = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 673);
        this.slotId = b;
        this.rb = c;
        this.C = d;
        this.o = e;
        this.U = f;
        this.l = g;
        this.J = h;
        this.A = T(this)
    };
    _.N(Wq, Z);
    Wq.prototype.j = function() {
        var a = this,
            b, c;
        return _.cb(function(d) {
            if (1 == d.j) {
                if (a.rb) {
                    QO(a, a.rb);
                    a.A.j(a.rb);
                    d.j = 0;
                    return
                }
                if (Hh(a.l)) {
                    a.A.j(RO(a));
                    d.j = 0;
                    return
                }
                return db(d, nq(a.slotId, sK), 4)
            }
            b = d.m;
            c = b.detail;
            if (a.D) return d.return();
            QO(a, c);
            a.A.j(c);
            d.j = 0
        })
    };
    var RO = function(a) {
            var b = _.Ld("INS");
            b.id = a.C;
            _.hi(b, {
                display: "none"
            });
            a.U.documentElement.appendChild(b);
            var c = function() {
                return void _.jw(b)
            };
            2 === a.l || 3 === a.l ? DK(a.J, a.slotId, c) : _.to(a, c);
            return b
        },
        QO = function(a, b) {
            if (2 !== a.l && 3 !== a.l) {
                for (var c = _.w(_.t(Array, "from").call(Array, b.childNodes)), d = c.next(); !d.done; d = c.next()) d = d.value, 1 === d.nodeType && d.id !== a.o && _.jw(d);
                b.style.display = ""
            }
        };
    var er = function(a, b) {
        Z.call(this, a, 676);
        this.A = T(this);
        this.l = U(this, b)
    };
    _.N(er, Z);
    er.prototype.j = function() {
        var a = Nh(this.l.value);
        this.A.j(a)
    };
    var kr = function(a, b, c, d) {
        Z.call(this, a, 807);
        this.F = b;
        this.A = yD(this);
        this.l = Y(this, c);
        this.o = U(this, d)
    };
    _.N(kr, Z);
    kr.prototype.j = function() {
        var a = this.l.value;
        if (a && !this.o.value) {
            var b = Pw(this.F);
            YJ(new XJ(b, a)) || this.R(new Sk("Cannot create top window frame"))
        }
        this.A.notify()
    };
    var br = function(a, b, c) {
        Z.call(this, a, 881);
        this.Ia = c;
        this.A = T(this);
        this.l = Y(this, b)
    };
    _.N(br, Z);
    br.prototype.j = function() {
        if (_.B(uy) || !this.l.value) pD(this.A);
        else {
            var a = this.l.value,
                b = [];
            var c = this.Ia;
            c = kc(c, F(c, 26), 26);
            c = _.w(_.t(c, "values").call(c));
            for (var d = c.next(); !d.done; d = c.next()) {
                d = d.value;
                try {
                    b.push(JSON.parse(d))
                } catch (e) {
                    Zg(this.context, 1023, e)
                }
            }
            c = _.B(xy);
            0 === b.length ? this.A.j(Gq(a, void 0, c)) : this.A.j(Gq(a, b, c))
        }
    };
    br.prototype.m = function() {
        pD(this.A)
    };
    var Hq = navigator,
        Iq = /(\$\{GDPR})/gi,
        Jq = /(\$\{GDPR_CONSENT_[0-9]+\})/gi,
        Kq = /(\$\{ADDTL_CONSENT})/gi;
    var SO = navigator,
        cr = function(a, b, c, d, e, f, g) {
            Z.call(this, a, 882);
            this.J = b;
            this.X = c;
            this.pa = T(this);
            this.o = T(this);
            this.l = Y(this, d);
            this.K = Y(this, e);
            this.L = U(this, f);
            this.O = Y(this, g)
        };
    _.N(cr, Z);
    var TO = function(a) {
        a.pa.j(a.L.value);
        qD(a.o, a.O.value)
    };
    cr.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, m, n, p, r;
        return _.cb(function(z) {
            if (1 == z.j) {
                if (_.B(uy) || !a.l.value || !a.K.value) return TO(a), z.return();
                b = a.l.value.getWidth();
                c = a.l.value.getHeight();
                if (!b || !c) return TO(a), z.return();
                d = Pp(a.l.value, Eq, 5);
                a.C = d.getEscapedQemQueryId();
                a.G = jo(d, 6);
                e = Mq(d, 9);
                if (f = Mq(d, 10))
                    if (TO(a), Mq(d, 17)) return Nq(0, 0, d), z.return();
                mi("pre_run_ad_auction_ping", function(C) {
                    si(C, a.context);
                    var J;
                    I(C, "winner_qid", null != (J = a.C) ? J : "");
                    var V;
                    I(C, "xfpQid", null != (V = a.G) ? V : "");
                    I(C, "publisher_tag", "gpt")
                }, 1);
                g = performance.now();
                h = Xd(a.l.value, 8) || 1E3;
                return db(z, UO(a, a.K.value, d, h, g), 2)
            }
            if (3 != z.j) {
                k = z.m;
                l = Math.round(performance.now() - g);
                m = 2 === k;
                n = 1 === k;
                p = k && !m && !n;
                mi("run_ad_auction_stats", function(C) {
                    si(C, a.context);
                    I(C, "duration_ms", l);
                    I(C, "applied_timeout_ms", h);
                    I(C, "timed_out", m);
                    I(C, "auction_skipped", n);
                    I(C, "auction_winner", p ? 1 : 0);
                    I(C, "thread_release_only", Mq(d, 15) ? 1 : 0);
                    var J;
                    I(C, "winner_qid", null != (J = a.C) ? J : "");
                    var V;
                    I(C, "xfpQid", null != (V = a.G) ? V : "");
                    I(C, "publisher_tag", "gpt")
                }, 1);
                if (!k || n || m) {
                    r = _.B(wy) && m && !f;
                    Nq(l, m ? h : 0, d, r);
                    if (r) return pD(a.pa), pD(a.o), z.return();
                    f || TO(a);
                    return z.return()
                }
                return f ? z.return() : e ? (TO(a), z.return()) : db(z, Lq(k, {
                    gdprApplies: Gk(a.X, 3) ? H(a.X, 3) ? "1" : "0" : null,
                    He: F(a.X, 2),
                    le: F(a.X, 4)
                }), 3)
            }
            a.pa.j({
                kind: 2,
                fd: k
            });
            a.o.j(new _.Ph(b, c));
            z.j = 0
        })
    };
    cr.prototype.m = function() {
        TO(this)
    };
    var UO = function(a, b, c, d, e) {
        var f, g, h, k, l, m, n;
        return _.cb(function(p) {
            if (1 == p.j) {
                f = Xd(c, 14) || -1;
                if (0 < f && a.J.D >= f) return p.return(1);
                g = Xd(c, 13) || -1;
                if (0 < g && a.J.B >= g) return p.return(1);
                ++a.J.D;
                ++a.J.B;
                h = function(r) {
                    mi("run_ad_auction_complete", function(z) {
                        si(z, a.context);
                        I(z, "duration_ms", Math.round(performance.now() - e));
                        I(z, "applied_timeout_ms", d);
                        I(z, "auction_has_winner", !!r);
                        a.C && I(z, "winner_qid", a.C);
                        a.G && I(z, "xfpQid", a.G)
                    }, 1)
                };
                m = Mq(c, 15) ? new u.Promise(function(r) {
                    setTimeout(function() {
                        r(null)
                    }, 0)
                }) : null == (l = (k = SO).runAdAuction) ? void 0 : l.call(k, b).then(function(r) {
                    h(r);
                    return r
                });
                return db(p, u.Promise.race([m, Ow(d)]), 2)
            }
            n = p.m;
            --a.J.D;
            return p.return(n)
        })
    };
    var VO = function(a, b) {
            this.context = a;
            this.m = b;
            this.j = new u.Map
        },
        WO = function(a, b) {
            if (b) {
                var c;
                null == (c = a.j.get(b)) || c.Ba();
                a.j.delete(b)
            }
        },
        YO = function(a, b, c, d, e, f, g, h, k, l, m) {
            var n = document,
                p = window;
            c || WO(a, b);
            rK(b, wK, XO);
            c = Ar(a.context, a.m, b, c, d, e, f, g, n, h, k, l, m);
            a.j.set(b, c);
            _.to(b, function() {
                return void WO(a, b)
            });
            p.top !== p && p.addEventListener("pagehide", function(r) {
                r.persisted || WO(a, b)
            });
            Qe(c)
        },
        XO = _.Ho(function() {
            return void fi("gpt-first-ad-render")
        });
    var ZO = function(a, b) {
        Z.call(this, a, 802);
        this.F = b;
        this.l = T(this);
        this.o = T(this)
    };
    _.N(ZO, Z);
    ZO.prototype.j = function() {
        var a = this,
            b, c, d, e;
        return _.cb(function(f) {
            if (1 == f.j) {
                if (!_.B(Ox)) return a.o.j(!1), a.l.j(""), f.return();
                b = Of(a.F);
                if (!b) {
                    a.o.j(!1);
                    a.l.j("");
                    f.j = 0;
                    return
                }
                a.o.j(!0);
                f.D = 3;
                return db(f, b, 5)
            }
            if (3 != f.j) return d = null != (c = f.m) ? c : "0", d.length > _.A(Px) && (Zg(a.context, a.id, new Sk("ML:" + d.length)), d = "0"), a.l.j(d), fb(f, 0);
            e = hb(f);
            Zg(a.context, a.id, e);
            a.l.j("0");
            f.j = 0
        })
    };
    ZO.prototype.m = function() {
        this.o.j(!1);
        this.l.j("")
    };
    var $O = function(a, b, c) {
        Z.call(this, a, 944);
        this.F = b;
        this.l = new PD(this.F);
        this.o = Y(this, c)
    };
    _.N($O, Z);
    $O.prototype.j = function() {
        var a = this.o.value;
        if (a && RD(this.l, a)) {
            var b = QD(this.l, "__gpi_opt_out", a);
            if (b) {
                var c = new Gv;
                b = v(c, 1, b);
                b = v(v(b, 2, 2147483647), 3, "/");
                b = v(b, 4, this.F.location.hostname);
                SD(this.l, "__gpi_opt_out", b, a)
            }
        }
    };
    var aP = function(a, b, c, d) {
        d = void 0 === d ? Cr : d;
        Z.call(this, a, 883);
        this.C = b;
        this.G = d;
        this.l = yD(this);
        this.o = U(this, c)
    };
    _.N(aP, Z);
    aP.prototype.j = function() {
        var a = this;
        return _.cb(function(b) {
            if (1 == b.j) {
                if (!ce(a.o.value) || _.B(Vx)) return a.l.notify(), b.return();
                _.B(Ux) || BH(a.C);
                if (!a.G()) {
                    CH(null);
                    b.j = 2;
                    return
                }
                return db(b, new u.Promise(function(c) {
                    return void CH(c)
                }), 2)
            }
            a.l.notify();
            b.j = 0
        })
    };
    var bP = function(a, b, c, d) {
        Z.call(this, a, 884);
        this.ja = b;
        this.l = T(this);
        this.C = Y(this, c);
        this.o = U(this, d)
    };
    _.N(bP, Z);
    bP.prototype.j = function() {
        _.E(Qr).m = this.C.value;
        lM(_.E(Qr), QD(this.ja, "__gads", this.o.value));
        Sr(20);
        Sr(2);
        this.l.j(ke())
    };
    var cP = function(a, b, c) {
        Z.call(this, a, 873);
        this.F = b;
        this.l = U(this, c)
    };
    _.N(cP, Z);
    cP.prototype.j = function() {
        var a = this.context,
            b = this.l.value,
            c = this.F;
        !dg()._pubconsole_disable_ && (b = ge("google_pubconsole", b, c)) && (b = b.split("|"), "1" !== b[0] && "0" !== b[0] || pj(a, c))
    };
    var dP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, z, C, J, V, P, L, W, R) {
        Z.call(this, a, 798);
        var X = this;
        this.J = b;
        this.N = c;
        this.ja = d;
        this.Na = e;
        this.Aa = f;
        this.Ha = g;
        this.Va = h;
        this.Ua = k;
        this.ob = l;
        this.Wa = m;
        this.Ra = n;
        this.F = p;
        this.A = T(this);
        this.W = U(this, r);
        this.G = U(this, z);
        this.C = zD(this, C);
        this.L = U(this, J);
        this.O = U(this, V);
        this.T = U(this, P);
        this.o = Y(this, L);
        this.l = zD(this, R);
        AD(this, W);
        _.B(ty) && (_.B(ry) ? R.promise.then(function(wa) {
            return X.K = wa
        }) : this.l = zD(this, R))
    };
    _.N(dP, Z);
    dP.prototype.j = function() {
        for (var a = this, b = new u.Map, c = _.w(this.G.value), d = c.next(); !d.done; d = c.next()) d = d.value, b.set(d, this.Aa ? eP(this, d) : function() {
            return a.W.value
        });
        this.A.j(b)
    };
    var eP = function(a, b) {
        return Xh(function() {
            var c = new OD,
                d, e, f, g = null != (f = null != (e = a.K) ? e : null == (d = a.l) ? void 0 : d.value) ? f : 1,
                h;
            c = new gN({
                ha: {
                    F: a.F,
                    context: a.context,
                    J: a.J,
                    ja: a.ja,
                    X: c,
                    Aa: !1,
                    ob: a.ob
                },
                ga: {
                    Z: [b],
                    N: a.N,
                    Ha: a.Ha,
                    Qc: !0
                },
                ee: {
                    Va: a.Va,
                    Ua: a.Ua
                },
                Ld: {
                    jd: a.L.value,
                    Id: a.O.value,
                    Sd: a.T.value
                },
                Qd: {
                    Ed: null != (h = a.C.value) ? h : "0"
                },
                hd: {
                    Na: a.Na,
                    Wa: a.Wa,
                    Ra: a.Ra
                },
                md: {
                    nd: a.o.value
                },
                Zd: {
                    ae: g
                }
            });
            return gg(iN(c)).url
        })
    };
    var fP = function(a, b, c, d, e, f) {
        f = void 0 === f ? Dr : f;
        Z.call(this, a, 886);
        this.Z = b;
        this.J = c;
        this.l = d;
        this.U = e;
        this.o = f;
        this.A = yD(this)
    };
    _.N(fP, Z);
    fP.prototype.j = function() {
        var a = this,
            b, c;
        return _.cb(function(d) {
            if (1 == d.j) return 3 !== OH(a.U) ? (d.j = 2, d = void 0) : d = db(d, new u.Promise(function(e) {
                return void TH(e, a.U)
            }), 2), d;
            if (4 != d.j) return b = a.l ? zq(a.l) : null, null == b || (c = a.Z.some(function(e) {
                return !$h(Wh(e))
            })) ? (a.A.notify(), d.return()) : db(d, gP(a, b), 4);
            a.A.notify();
            d.j = 0
        })
    };
    var gP = function(a, b) {
        return new u.Promise(function(c) {
            var d = a.o(function(h, k) {
                h.some(function(l) {
                    return 0 < l.intersectionRatio
                }) && (k.disconnect(), c())
            }, b + "%");
            _.to(a, function() {
                return void d.disconnect()
            });
            for (var e = {}, f = _.w(a.Z), g = f.next(); !g.done; e = {
                    xb: e.xb
                }, g = f.next()) {
                g = g.value;
                e.xb = Wh(g);
                if (!e.xb) break;
                d.observe(e.xb);
                EK(a.J, g, function(h) {
                    return function() {
                        return void d.unobserve(h.xb)
                    }
                }(e))
            }
        })
    };
    var hP = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        Z.call(this, a, 866);
        this.C = b;
        this.G = c;
        this.o = d;
        this.Na = e;
        this.Ra = f;
        this.Wa = g;
        this.X = h;
        this.U = k;
        this.A = yD(this);
        this.l = U(this, l);
        this.L = U(this, m);
        AD(this, n);
        this.K = U(this, p)
    };
    _.N(hP, Z);
    hP.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, m, n;
        return _.cb(function(p) {
            if (1 == p.j) {
                b = a.L.value;
                if (!b) return a.A.notify(), p.return();
                c = _.Ld("SCRIPT");
                d = {
                    source: b,
                    credentials: a.K.value ? "include" : "omit",
                    resources: [a.Wa.toString()]
                };
                c.setAttribute("type", "webbundle");
                Ta(c, new Sa(JSON.stringify(d).replace(/</g, "\\x3c"), Ao));
                e = _.Ld("SCRIPT");
                Wa(e, a.Wa);
                a.U.head.appendChild(c);
                a.U.head.appendChild(e);
                a.A.notify();
                return db(p, iP(a), 2)
            }
            f = p.m;
            g = f.ke;
            h = f.af;
            delete dg()[a.Ra.replace("googletag.", "")];
            if (g.length !== h.length) return a.G(new KC("Received " + g.length + " ad URLs but " + h.length + " metadatas")), p.return();
            d.resources = g.filter(function(r) {
                return r
            });
            d.resources.length ? (k = _.Ld("SCRIPT"), k.setAttribute("type", "webbundle"), Ta(k, new Sa(JSON.stringify(d).replace(/</g, "\\x3c"), Ao)), a.U.head.removeChild(c), a.U.head.appendChild(k)) : a.U.head.removeChild(c);
            for (l = 0; l < g.length; l++) m = g[l], n = h[l], a.C(l, n, {
                kind: 1,
                url: m
            }, a.l.value, a.X);
            a.o(g.length - 1, a.l.value, a.X);
            p.j = 0
        })
    };
    var iP = function(a) {
        var b = dg(),
            c = a.Ra.replace("googletag.", "");
        return new u.Promise(function(d) {
            var e = !1;
            Object.defineProperty(b, c, {
                value: function(f, g) {
                    e || d({
                        ke: f,
                        af: g
                    });
                    e = !0
                },
                writable: !1,
                enumerable: !1,
                configurable: !0
            })
        })
    };
    var jP = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 810);
        this.C = b;
        this.Aa = c;
        this.N = d;
        this.o = e;
        this.F = f;
        this.X = g;
        this.l = T(this)
    };
    _.N(jP, Z);
    jP.prototype.j = function() {
        var a = this,
            b = this.C;
        !this.Aa && 1 < this.C.length && (b = [b[0]]);
        b = b.filter(function(c) {
            if (c.D) return !1;
            var d = a.N.P[c.getDomId()];
            if (dl(a.F) && 4 === hl(d)) {
                M(a.o, FL("googletag.enums.OutOfPageFormat.REWARDED", String(c.getAdUnitPath())));
                var e = !0
            } else e = !1;
            return !e && !jl(a.context, a.o, c, d, a.F, a.X)
        });
        30 < b.length && (M(this.o, BL("30", String(b.length), String(b.length - 30))), b = b.slice(0, 30));
        this.l.j(b)
    };
    var kP = function(a, b, c, d, e) {
        Z.call(this, a, 957);
        this.X = b;
        this.l = c;
        this.o = e;
        this.A = T(this);
        d && (this.C = U(this, d))
    };
    _.N(kP, Z);
    kP.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k;
        return _.cb(function(l) {
            if (1 == l.j) {
                b = _.A(Lx);
                if (2 === b && !ce(a.X)) {
                    a.A.j((null == (c = a.C) ? 0 : c.value) ? "0" : "");
                    l.j = 0;
                    return
                }
                h = a.A;
                k = h.j;
                return db(l, null != (f = null == (d = a.l) ? void 0 : d.promise) ? f : null == (e = a.o) ? void 0 : e.promise.then(function(m) {
                    return m ? m() : ""
                }), 3)
            }
            k.call(h, null != (g = l.m) ? g : "");
            l.j = 0
        })
    };
    kP.prototype.m = function() {
        this.A.j("")
    };
    var lP = function(a, b, c) {
        Z.call(this, a, 919);
        this.l = b;
        this.X = c;
        this.A = T(this)
    };
    _.N(lP, Z);
    lP.prototype.j = function() {
        var a, b = !(null == (a = this.l) ? 0 : H(a, 9)) && !!ce(this.X);
        this.A.j(b)
    };
    var mP = function(a, b, c, d, e, f) {
        Z.call(this, a, 935);
        this.J = b;
        this.N = c;
        this.U = d;
        this.A = yD(this);
        this.l = U(this, e);
        AD(this, f)
    };
    _.N(mP, Z);
    mP.prototype.j = function() {
        var a = this.N,
            b = a.V;
        a = a.P;
        for (var c = _.w(this.l.value), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = a[d.getDomId()],
                f = this.U;
            f = void 0 === f ? document : f;
            kn(e, b) && !this.J.fb(d) && ln(d, f, e, b)
        }
        this.A.notify()
    };
    var nP = function(a, b, c, d, e, f) {
        f = void 0 === f ? Hi : f;
        Z.call(this, a, 939);
        this.o = b;
        this.F = c;
        this.X = d;
        this.l = f;
        AD(this, e)
    };
    _.N(nP, Z);
    nP.prototype.j = function() {
        var a = this.l,
            b = this.F,
            c = new Zp;
        var d = new $p;
        d = oc(d, 1, String(this.o), "");
        c = Kc(c, 5, d);
        c = oc(c, 4, 1, 0);
        c = oc(c, 2, 2, 0);
        c = oc(c, 3, this.context.ab || this.context.Fa, "");
        d = ce(this.X);
        c = oc(c, 6, d, !1);
        a.call(this, b, c)
    };
    var oP = function(a, b, c, d, e) {
        Z.call(this, a, 905);
        this.N = b;
        this.l = c;
        this.A = yD(this);
        this.o = U(this, d);
        AD(this, e)
    };
    _.N(oP, Z);
    oP.prototype.j = function() {
        for (var a = _.w(this.o.value), b = a.next(); !b.done; b = a.next()) {
            var c = void 0;
            switch (null == (c = this.N.P[b.value.getDomId()]) ? void 0 : hl(c)) {
                case 2:
                case 3:
                case 5:
                    this.l.load(_.mO);
                    return
            }
        }
        this.A.notify()
    };
    var pP = function(a, b, c, d, e) {
        Z.call(this, a, 833);
        this.Na = b;
        this.l = c;
        this.F = d;
        this.A = yD(this);
        AD(this, e)
    };
    _.N(pP, Z);
    pP.prototype.j = function() {
        if ("wbn" !== this.Na) {
            var a = this.l,
                b = this.F,
                c = _.B(jy) ? Uh() : cJ();
            c = {
                version: Vm ? Vm : Vm = uk(),
                Jb: c,
                yf: _.B(ky)
            };
            c = LJ.Ue(c);
            var d = sJ(b);
            c = d ? qd(c, new u.Map([
                ["n", String(d)]
            ])) : c;
            d = wk(xk);
            for (var e = new u.Map, f = 0; f < d.length; f += 2) e.set(d[f], d[f + 1]);
            c = qd(c, e);
            d = a.resources[c.toString()];
            var g;
            _.B(jy) || _.B(iy) || d || (null == (g = dg()) ? 0 : g.fifWin) || (a.resources[c.toString()] = 1, b = b.document, a = _.Ld("IFRAME"), a.src = Va(c).toString(), a.style.visibility = "hidden", a.style.display = "none", b = b.getElementsByTagName("script"), b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)))
        }
        this.A.notify()
    };
    var qP = function(a, b, c, d, e) {
        Z.call(this, a, 928);
        this.J = b;
        this.requestId = c;
        this.A = yD(this);
        this.l = U(this, d);
        AD(this, e)
    };
    _.N(qP, Z);
    qP.prototype.j = function() {
        this.J.l();
        var a = this.context,
            b = this.requestId,
            c = this.l.value.length;
        if (a.Ib) {
            var d = a.bb;
            a = mg(a);
            var e = new jC;
            b = oc(e, 2, b, 0);
            c = oc(b, 1, c, 0);
            c = pg(a, 7, qg, c);
            zd(d, c)
        }
        this.A.notify()
    };
    var rP = function(a, b, c, d) {
        Z.call(this, a, 867);
        this.sa = b;
        this.N = c;
        this.A = yD(this);
        this.l = U(this, d)
    };
    _.N(rP, Z);
    rP.prototype.j = function() {
        for (var a = _.w(this.l.value), b = a.next(); !b.done; b = a.next()) {
            var c = _.w(b.value);
            b = c.next().value;
            c = c.next().value;
            var d = F(this.N.P[b.getDomId()], 20);
            b.dispatchEvent(vK, 808, {
                te: c,
                mf: d
            });
            this.sa.dispatchEvent("slotRequested", 705, new $N(b, "publisher_ads"))
        }
        this.A.notify()
    };
    var sP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, z, C, J, V, P, L, W, R, X) {
        Z.call(this, a, 785, _.A(my));
        var wa = this;
        this.Aa = b;
        this.J = c;
        this.ja = d;
        this.N = e;
        this.Na = f;
        this.Ha = g;
        this.Va = h;
        this.Ua = k;
        this.ob = l;
        this.Wa = m;
        this.Ra = n;
        this.mb = p;
        this.X = r;
        this.F = z;
        this.G = C;
        this.Wb = J;
        this.aa = P;
        this.l = T(this);
        this.O = T(this);
        this.T = T(this);
        this.W = T(this);
        AD(this, R);
        _.B(Mx) ? C.promise.then(function(ua) {
            return wa.fa = ua
        }) : this.ea = zD(this, C);
        this.o = zD(this, J);
        this.K = U(this, V);
        lD(this.B, P, !0);
        this.ca = Y(this, L);
        _.B(ry) ? W.promise.then(function(ua) {
            return wa.L = ua
        }) : this.C = zD(this, W);
        AD(this, R);
        AD(this, X)
    };
    _.N(sP, Z);
    sP.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, m, n, p, r, z, C, J, V, P;
        return _.cb(function(L) {
            switch (L.j) {
                case 1:
                    if (!a.K.value.length) return a.l.j(""), L.return();
                    b = !_.B(Vx);
                    if (b) {
                        sf();
                        var W = uf[1]
                    } else W = "";
                    c = W;
                    b ? (sf(), W = uf[4]) : W = "";
                    d = W;
                    b ? (sf(), W = uf[6]) : W = "";
                    e = W;
                    k = null != (h = null != (g = a.fa) ? g : null == (f = a.ea) ? void 0 : f.value) ? h : "0";
                    l = _.B(ry) ? void 0 === a.L ? 1 : a.L : null != (p = null == (m = a.C) ? void 0 : m.value) ? p : null !== (null == (n = a.C) ? void 0 : n.value) || a.C.j.m ? null : 1;
                    a.o.value && (a.J.Vb = a.o.value);
                    r = new gN({
                        ha: {
                            F: a.F,
                            context: a.context,
                            J: a.J,
                            ja: a.ja,
                            X: a.X,
                            Aa: a.Aa,
                            ob: a.ob
                        },
                        ga: {
                            Z: a.K.value,
                            N: a.N,
                            Ha: a.Ha,
                            Qc: !1
                        },
                        ee: {
                            Va: a.Va,
                            Ua: a.Ua
                        },
                        Ld: {
                            jd: c,
                            Id: d,
                            Sd: e
                        },
                        Qd: {
                            Ed: k
                        },
                        hd: {
                            Na: a.Na,
                            Wa: a.Wa,
                            Ra: a.Ra
                        },
                        md: {
                            nd: a.ca.value
                        },
                        Zd: {
                            ae: l
                        }
                    });
                    z = gg(iN(r));
                    C = z.url;
                    J = z.pd;
                    IC(a.mb, (9).toString(), 9, J);
                    a.l.j(C);
                    a.O.j(c);
                    a.T.j(d);
                    a.W.j(e);
                    return db(L, a.G.promise, 2);
                case 2:
                    if (a.D) return L.return();
                    mi("gpt_paw", function(R) {
                        si(R, a.context);
                        var X;
                        I(R, "sig", null != (X = a.G.I) ? X : -1);
                        I(R, "req", a.M);
                        I(R, "req_cnt", a.J.H);
                        var wa;
                        I(R, "dm", null != (wa = window.navigator.deviceMemory) ? wa : -1)
                    }, _.A(Qx));
                    if (!a.o.value) {
                        L.j = 3;
                        break
                    }
                    return db(L, a.Wb.promise, 4);
                case 4:
                    mi("gpt_etu", function(R) {
                        si(R, a.context);
                        var X;
                        I(R, "sig", null != (X = a.Wb.I) ? X : -1);
                        I(R, "req", a.M)
                    });
                case 3:
                    V = gK();
                    P = !!_.cg(258);
                    if (!V && !P) {
                        L.j = 0;
                        break
                    }
                    return db(L, a.aa.promise, 6);
                case 6:
                    mi("gpt_tt_blk", function(R) {
                        si(R, a.context);
                        I(R, "res", V ? "c" : "t");
                        var X;
                        I(R, "sig", null != (X = a.aa.I) ? X : -1);
                        I(R, "req", a.M)
                    }, _.A(DB)), L.j = 0
            }
        })
    };
    var tP = function(a, b, c, d, e, f) {
        Z.call(this, a, 878);
        this.l = b;
        this.U = c;
        this.N = d;
        this.F = e;
        this.A = yD(this);
        AD(this, f)
    };
    _.N(tP, Z);
    tP.prototype.j = function() {
        for (var a = _.w(this.l), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = Wh(b, this.U);
            if (!Vh(b, this.U) && c) {
                a: {
                    var d = c;
                    var e = this.N.P[b.getDomId()],
                        f = 0,
                        g = 0;e = _.w(Ch(e));
                    for (var h = e.next(); !h.done; h = e.next())
                        if (h = h.value, Array.isArray(h)) {
                            var k = _.w(h);
                            h = k.next().value;
                            k = k.next().value;
                            if (!("number" !== typeof h || "number" !== typeof k || 1 >= h || 1 >= k || (f = f || h, g = Math.min(g || Infinity, k), qm(Yh(d, this.F)) || !d.parentElement || qm(Yh(d.parentElement, this.F))))) {
                                d = [f, 0];
                                break a
                            }
                        }
                    d = f || g ? [f, g] : null
                }
                g = this.N;f = g.V;g = g.P[b.getDomId()];pm(c, di(b), Ih(f, g), d)
            }
        }
        this.A.notify()
    };
    var uP = function(a, b, c, d, e) {
            this.B = a;
            this.l = b;
            this.H = c;
            this.Z = d;
            this.X = e;
            this.D = "";
            this.m = -1;
            this.state = 1;
            this.j = ""
        },
        vP = function(a, b) {
            a.state = 4;
            try {
                a.l(b)
            } catch (c) {}
        };
    var wP = function(a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 788);
        this.K = b;
        this.L = c;
        this.G = d;
        this.X = e;
        this.A = yD(this);
        this.C = 0;
        this.o = !1;
        this.l = null != l ? l : new XMLHttpRequest;
        this.T = U(this, f);
        this.W = U(this, g);
        AD(this, h);
        this.O = U(this, k)
    };
    _.N(wP, Z);
    wP.prototype.j = function() {
        var a = this,
            b = this.W.value;
        if (b) {
            var c = new uP(this.K, this.L, this.G, this.T.value, this.X);
            this.l.open("GET", b);
            this.l.withCredentials = this.O.value;
            b = _.B(dK(window) ? wB : vB);
            var d = _.B(yB);
            if ((b = eK(window, b, d)) && fK(b)) try {
                var e = hK(b);
                if (e) {
                    var f = this.l;
                    (null == f ? 0 : f.setTrustToken) && f.setTrustToken(e)
                }
            } catch (g) {}
            this.l.onreadystatechange = function() {
                xP(a, c, !1)
            };
            this.l.onload = function() {
                xP(a, c, !0)
            };
            this.l.onerror = function() {
                vP(c, new LC("XHR error"))
            };
            this.l.send()
        }
        this.A.notify()
    };
    var xP = function(a, b, c) {
        try {
            if (3 === a.l.readyState || 4 === a.l.readyState)
                if (300 <= a.l.status) a.o || (vP(b, new LC("xhr_err-" + a.l.status)), a.o = !0);
                else {
                    var d = a.l.responseText.substr(a.C);
                    if (d && d)
                        if (1 !== b.state && 2 !== b.state) vP(b, new KC("state err: (" + ([b.state, b.j.length].join() + ")")));
                        else {
                            b.j && (d = b.j + d);
                            var e = 0,
                                f = !1;
                            do {
                                var g = d.indexOf("\n", e);
                                f = -1 !== g;
                                if (!f) break;
                                var h = b,
                                    k = d.substr(e, g - e);
                                if (1 === h.state) h.D = k, ++h.m, h.state = 2;
                                else {
                                    try {
                                        h.B(h.m, h.D, {
                                            kind: 0,
                                            ta: Kw(k)
                                        }, h.Z, h.X), h.D = ""
                                    } catch (l) {}
                                    h.state = 1
                                }
                                e = g + 1
                            } while (f && e < d.length);
                            b.j = d.substr(e)
                        }
                    a.C = a.l.responseText.length;
                    c && 4 === a.l.readyState && (1 !== b.state || b.j ? vP(b, new KC("state err (" + ([b.state, b.j.length].join() + ")"))) : (b.state = 3, b.H(b.m, b.Z, b.X)))
                }
        } catch (l) {
            vP(b, l)
        }
    };
    var yP = function(a, b, c, d, e) {
        Z.call(this, a, 918);
        this.N = b;
        this.mb = c;
        this.A = yD(this);
        this.l = U(this, e);
        AD(this, d)
    };
    _.N(yP, Z);
    yP.prototype.j = function() {
        var a = this.l.value;
        a.length && JC(this.mb, "3", F(this.N.P[a[0].getDomId()], 20));
        this.A.notify()
    };
    var zP = function(a, b) {
        Z.call(this, a, 820);
        this.F = b;
        this.A = T(this)
    };
    _.N(zP, Z);
    zP.prototype.j = function() {
        var a = this,
            b, c, d, e;
        return _.cb(function(f) {
            if (1 == f.j) return db(f, Ki(a.F), 2);
            b = f.m;
            c = b.Vb;
            d = b.status;
            c || mi("gpt_etu", function(g) {
                si(g, a.context);
                I(g, "rsn", d)
            });
            a.A.j(null != (e = c) ? e : "");
            f.j = 0
        })
    };
    var AP = function(a, b, c, d, e, f) {
        Z.call(this, a, 978);
        this.l = b;
        this.X = c;
        this.F = e;
        this.localStorage = f;
        this.A = T(this);
        this.o = Y(this, d)
    };
    _.N(AP, Z);
    AP.prototype.j = function() {
        var a = this,
            b, c;
        return _.cb(function(d) {
            if (1 == d.j) {
                if (!_.B(ty) || !a.o.value) return pD(a.A), d.return();
                var e, f, g, h, k, l;
                if ((null == (e = a.l) ? 0 : H(e, 8)) || _.B(ey) && (null == (f = a.l) ? 0 : H(f, 13)) || (null == (g = a.l) ? 0 : H(g, 1)) || 1 === (null == (h = a.l) ? void 0 : Wd(h, 6, 2)) || 1 === (null == (k = a.l) ? void 0 : F(k, 5)) || (null == (l = a.l) ? 0 : H(l, 9)) || !ce(a.X) || H(a.X, 9)) {
                    a.A.j(5);
                    d.j = 0;
                    return
                }
                b = a.A;
                c = b.j;
                return db(d, Si(a.o.value, a.F, _.B(py), _.B(sy), new _.aJ(a.context), a.localStorage), 3)
            }
            c.call(b, d.m);
            d.j = 0
        })
    };
    AP.prototype.m = function() {
        pD(this.A)
    };
    var BP = function(a, b, c) {
        Z.call(this, a, 858);
        this.l = b;
        this.X = c;
        this.A = yD(this)
    };
    _.N(BP, Z);
    BP.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, m;
        return _.cb(function(n) {
            switch (n.j) {
                case 1:
                    n.D = 2;
                    if (gK()) {
                        c = _.B(dK(window) ? wB : vB);
                        d = _.B(yB);
                        e = new cK(!!ce(a.X), c, d);
                        f = nK(e);
                        if (!f) {
                            n.j = 7;
                            break
                        }
                        if (_.B(CB)) {
                            g = new _.aJ(a.context);
                            bJ(g, f);
                            n.j = 7;
                            break
                        }
                        h = Date.now();
                        return db(n, f, 9)
                    }
                    b = _.cg(258);
                    return db(n, b, 6);
                case 6:
                    a.A.notify();
                    n.j = 5;
                    break;
                case 9:
                    mi("gpt_tt", function(p) {
                        si(p, a.context);
                        I(p, "act", Date.now() - h)
                    }, _.A(DB));
                case 7:
                    a.A.notify();
                case 5:
                    _.B(AB) && (l = null == (k = a.l) ? void 0 : H(k, 9)) && !gK() && be({
                        mc: "1"
                    }, "gptttmc");
                    fb(n, 0);
                    break;
                case 2:
                    m = hb(n), m instanceof Error && a.R(m), a.A.notify(), n.j = 0
            }
        })
    };
    var DP = function(a, b, c) {
        Z.call(this, a, 804);
        this.l = c;
        this.G = [];
        this.C = {
            Db: CP(this, function(d) {
                return d.getHeight()
            }),
            Mb: CP(this, function(d) {
                return d.getWidth()
            }),
            Pe: CP(this, function(d) {
                return !!H(d, 8)
            }),
            Fe: CP(this, function(d) {
                return F(d, 10)
            }),
            xd: CP(this, function(d) {
                return d.getEscapedQemQueryId()
            }),
            me: CP(this, function(d) {
                return vc(d, Fv, 43)
            }),
            Oe: CP(this, function(d) {
                return !!H(d, 9)
            }),
            Af: CP(this, function(d) {
                return H(d, 12)
            }),
            Ge: CP(this, function(d) {
                return eo(d, uv, 48, Qv)
            }),
            Ce: CP(this, function(d) {
                return eo(d, sv, 39, Qv)
            }),
            Qb: CP(this, function(d) {
                return F(d, 36)
            }),
            Bf: CP(this, function(d) {
                return H(d, 13)
            }),
            Ne: CP(this, function(d) {
                return H(d, 3)
            }),
            wf: CP(this, function(d) {
                return F(d, 49)
            }),
            Ef: CP(this, function(d) {
                return F(d, 29)
            }),
            Ff: CP(this, function(d) {
                return F(d, 30)
            }),
            Ke: CP(this, function(d) {
                return vc(d, Iv, 51)
            }),
            Cf: CP(this, function(d) {
                return H(d, 52)
            }),
            Wb: CP(this, function(d) {
                return F(d, 61)
            }),
            pa: T(this),
            be: CP(this, function(d) {
                return vc(d, Lv, 58)
            }),
            Hf: CP(this, function(d) {
                var e, f;
                return null != (f = null == (e = vc(d, Hv, 56)) ? void 0 : F(e, 1)) ? f : null
            }),
            ef: CP(this, function(d) {
                return tc(d, mv, 62)
            }),
            Ve: CP(this, function(d) {
                return gc(d, 63)
            })
        };
        this.o = U(this, b)
    };
    _.N(DP, Z);
    var CP = function(a, b) {
        var c = T(a);
        a.G.push({
            A: c,
            Ae: b
        });
        return c
    };
    DP.prototype.j = function() {
        for (var a = _.w(this.G), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = b.Ae;
            qD(b.A, c(this.o.value))
        }
        if (eo(this.o.value, Ov, 41, Pv)) throw new KC("SecureFrame");
        0 === this.l.kind || 1 === this.l.kind && this.l.url ? this.C.pa.j(this.l) : (a = this.C.pa, b = a.j, c = this.o.value, c = F(c, rc(c, Pv, 4)), b.call(a, {
            kind: 0,
            ta: c || ""
        }))
    };
    var EP = function(a, b, c) {
        Z.call(this, a, 822);
        this.slotId = b;
        this.l = yD(this);
        this.o = U(this, c)
    };
    _.N(EP, Z);
    EP.prototype.j = function() {
        for (var a = this, b = gc(this.o.value, 23), c = _.E(uM), d = _.w(b), e = d.next(); !e.done; e = d.next()) e = e.value, vM(c, e), wM(c, e, this.slotId);
        this.l.notify();
        b.length && mi("gpt_hp", function(f) {
            si(f, a.context);
            I(f, "ls", b.join())
        }, _.A(Ex))
    };
    var FP = function(a, b, c) {
        Z.call(this, a, 803);
        this.l = b;
        this.slotId = c;
        this.A = T(this);
        this.o = T(this)
    };
    _.N(FP, Z);
    FP.prototype.j = function() {
        var a = JSON.parse(this.l),
            b = $i(a, jt);
        if (!b) throw Error("missing ad unit path");
        if (null == a || !a[b]) throw Error("invalid ad unit path: " + b);
        a = a[b];
        if (!Array.isArray(a)) throw Error("dictionary not an array: " + this.l);
        a = new Nv(a.slice());
        var c;
        b = _.w(null != (c = gc(a, 27)) ? c : []);
        for (c = b.next(); !c.done; c = b.next()) dD(c.value);
        Sr(4);
        this.slotId.dispatchEvent(tK, 800, a);
        this.A.j(a);
        c = vc(a, Ev, 54);
        this.o.j(c ? tc(c, Cv, 1).filter(function(d) {
            jo(d, 1) || le(32, "");
            return !!jo(d, 1)
        }).map(function(d) {
            var e = jo(d, 2);
            return {
                Ub: jo(d, 1),
                url: e && (_.t(e, "startsWith").call(e, location.protocol) || _.t(e, "startsWith").call(e, "data:") && 40 >= e.length) ? md(e) : void 0
            }
        }) : [])
    };
    var GP = function(a, b, c, d) {
        Z.call(this, a, 823);
        this.slotId = b;
        this.J = c;
        this.l = yD(this);
        this.o = U(this, d)
    };
    _.N(GP, Z);
    GP.prototype.j = function() {
        var a = this;
        H(this.o.value, 11) && (_.HK(this.J, this.slotId), DK(this.J, this.slotId, function() {
            _.IK(a.J, a.slotId)
        }));
        this.l.notify()
    };
    var HP = function(a, b, c, d) {
        Z.call(this, a, 821);
        this.X = b;
        this.ja = c;
        this.l = yD(this);
        this.o = U(this, d)
    };
    _.N(HP, Z);
    HP.prototype.j = function() {
        if (ce(this.X))
            for (var a = new u.Set, b = _.w(tc(this.o.value, Gv, 14)), c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = void 0,
                    e = null != (d = c.getVersion()) ? d : 1;
                a.has(e) || (SD(this.ja, 2 === e ? "__gpi" : "__gads", c, this.X), a.add(e))
            }
        this.l.notify()
    };
    var IP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, z, C, J, V, P, L, W, R) {
        Z.call(this, a, 973);
        this.G = b;
        this.o = c;
        this.L = d;
        this.N = e;
        this.J = f;
        this.ja = g;
        this.ca = h;
        this.K = k;
        this.l = l;
        this.kb = m;
        this.C = n;
        this.ea = p;
        this.Ma = r;
        this.F = z;
        this.U = C;
        this.na = J;
        this.ma = L;
        this.W = W;
        this.fa = R;
        this.aa = Y(this, J);
        this.T = U(this, V);
        this.O = U(this, P);
        AD(this, n.L)
    };
    _.N(IP, Z);
    IP.prototype.j = function() {
        var a = this,
            b = new Be;
        _.Pn(this, b);
        var c = this.T.value,
            d = BI(this.N.V);
        if (!_.B(By)) {
            var e = new HN(this.context, dg(), console, this.na);
            D(b, e)
        }
        e = new fP(this.context, this.o, this.J, vc(this.N.V, $q, 5), this.U);
        D(b, e);
        var f = new tP(this.context, this.o, this.U, this.N, this.F, e.A);
        D(b, f);
        var g = !!H(this.N.V, 6);
        e = new jP(this.context, this.o, g, this.N, this.G, this.F, c);
        D(b, e);
        var h = new zP(this.context, this.F);
        D(b, h);
        var k = new BP(this.context, d, c);
        D(b, k);
        var l = this.C,
            m = l.K,
            n = l.ia,
            p = l.R,
            r = l.G,
            z = l.Ja,
            C = l.Ya,
            J = l.wa,
            V = l.Za,
            P = l.ma;
        l = this.W;
        if (0 !== _.A(Lx) || !l) {
            l || _.A(Nx);
            var L;
            l = new kP(this.context, c, l, null != (L = this.fa) ? L : V, J);
            D(b, l);
            l = l.A
        }
        L = new SM(this.context, this.G, e.l, m, this.N.P, n, p, r, this.Ma, this.J);
        D(b, L);
        D(b, new YM(this.context, m, z, C, L.o, L.C, this.N.P));
        _.B(ty) ? (m = new AP(this.context, d, c, P, this.F, this.aa.value), D(b, m), z = m.A) : (z = new Sq, pD(z));
        C = this.kb.Ha;
        n = this.kb.Va || NaN;
        p = this.kb.Ua || NaN;
        m = window.isSecureContext && _.B(yy) ? "wbn" : "ldjh";
        var W = ++this.J.H;
        J = r = null;
        "wbn" === m && (r = Kd(), J = "googletag.wbn" + W);
        f = new sP(this.context, g, this.J, this.ja, this.N, m, C, n, p, this.O.value, r, J, _.E(Xg), c, this.F, l, h.A, e.l, k.A, L.l, z, f.A, this.ma);
        D(b, f);
        h = new yP(this.context, this.N, _.E(Xg), f.l, e.l);
        D(b, h);
        d = new lP(this.context, d, c);
        D(b, d);
        k = _.Vg(this.context, 646, function(X, wa, ua, Ma, Cb) {
            var Aa = function() {
                return void JP(a, Cb, X, wa, ua, Ma)
            };
            X && _.B(Ax) ? setTimeout(_.Vg(a.context, 646, Aa), 0) : Aa()
        });
        V = _.Vg(this.context, 647, function(X, wa, ua) {
            var Ma = function() {
                return void KP(a, W, ua, wa, X)
            };
            _.B(Ax) ? setTimeout(_.Vg(a.context, 646, Ma), 0) : Ma()
        });
        P = _.Vg(this.context, 289, function(X) {
            X = X instanceof Error ? X : Error();
            X.message = X.message || "strm_err";
            Zg(a.context, 289, X)
        });
        var R;
        "ldjh" === m ? R = new wP(this.context, k, P, V, c, e.l, f.l, h.A, d.A) : R = new hP(this.context, k, P, V, m, J, r, c, this.U, e.l, f.l, h.A, d.A);
        D(b, R);
        d = new qP(this.context, this.J, W, e.l, R.A);
        D(b, d);
        g = new dP(this.context, this.J, this.N, this.ja, m, g, C, n, p, this.O.value, r, J, this.F, f.l, e.l, l, f.O, f.T, f.W, L.l, d.A, z);
        D(b, g);
        g = new rP(this.context, this.l.Rd, this.N, g.A);
        D(b, g);
        g = new pP(this.context, m, this.ca, this.F, g.A);
        D(b, g);
        g = new oP(this.context, this.N, this.K, e.l, g.A);
        D(b, g);
        e = new mP(this.context, this.J, this.N, this.U, e.l, g.A);
        D(b, e);
        c = new nP(this.context, je(this.F), this.F, c, R.A);
        D(b, c);
        Qe(b)
    };
    var JP = function(a, b, c, d, e, f) {
            var g, h;
            return _.cb(function(k) {
                g = f[c];
                if (!g) return Zg(a.context, 646, Error("missing slot")), k.return();
                0 === c && (h = F(a.N.P[g.getDomId()], 20), JC(_.E(Xg), "4", h));
                return db(k, LP(a, g, d, e, b), 0)
            })
        },
        KP = function(a, b, c, d, e) {
            var f, g, h;
            return _.cb(function(k) {
                switch (k.j) {
                    case 1:
                        var l = a.context,
                            m = e + 1,
                            n = d.length;
                        if (l.Ib) {
                            var p = l.bb;
                            l = mg(l);
                            var r = new kC;
                            r = oc(r, 3, b, 0);
                            m = oc(r, 1, m, 0);
                            n = oc(m, 2, n, 0);
                            n = pg(l, 8, qg, n);
                            zd(p, n)
                        }
                        f = e + 1;
                    case 2:
                        if (!(f < d.length)) {
                            k.j = 4;
                            break
                        }
                        if (!d[f]) {
                            k.j = 3;
                            break
                        }
                        p = new Nv;
                        g = v(p, 8, !0).Y();
                        h = '{"empty":' + g + "}";
                        return db(k, JP(a, c, f, h, {
                            kind: 0,
                            ta: ""
                        }, d), 3);
                    case 3:
                        ++f;
                        k.j = 2;
                        break;
                    case 4:
                        p = a.J, n = a.L, l = p.m.get(n) - 1, 0 === l ? p.m.delete(n) : p.m.set(n, l), 0 === l && a.l.Fd.dispatchEvent(AK, 965, a.L), k.j = 0
                }
            })
        },
        LP = function(a, b, c, d, e) {
            var f, g, h, k, l, m, n, p, r, z, C, J, V, P, L, W, R, X, wa, ua, Ma, Cb, Aa, Ua, ic;
            return _.cb(function(Za) {
                switch (Za.j) {
                    case 1:
                        return f = new Be, g = new FP(a.context, c, b), D(f, g), h = new HP(a.context, e, a.ja, g.A), D(f, h), k = new EP(a.context, b, g.A), D(f, k), l = new GP(a.context, b, a.J, g.A), D(f, l), m = new DP(a.context, g.A, d), D(f, m), n = [h.l.promise, k.l.promise, l.l.promise], Qe(f), db(Za, u.Promise.all(n), 2);
                    case 2:
                        if (b.D) return Za.return();
                        p = m;
                        z = r = p.C;
                        C = z.be;
                        J = z.Pe;
                        V = z.xd;
                        return db(Za, C.promise, 3);
                    case 3:
                        return P = Za.m, L = !!P, R = null == (W = P) ? void 0 : vc(W, Eq, 5), ua = L && !(null == (X = R) ? 0 : Mq(X, 9)) && !(null == (wa = R) ? 0 : Mq(wa, 10)), db(Za, J.promise, 4);
                    case 4:
                        return Ma = !Za.m, Cb = L && (!ua || Ma), L && mi("gpt_td_init", function(xb) {
                            si(xb, a.context);
                            var Pb, Hc;
                            I(xb, "winner_qid", null != (Hc = null == (Pb = R) ? void 0 : Pb.getEscapedQemQueryId()) ? Hc : "");
                            var fd, Ic;
                            I(xb, "xfpQid", null != (Ic = null == (fd = R) ? void 0 : jo(fd, 6)) ? Ic : "");
                            I(xb, "noFill", Ma ? "0" : "1");
                            I(xb, "publisher_tag", "gpt")
                        }, 1), db(Za, V.promise, 5);
                    case 5:
                        Ua = null != (Aa = Za.m) ? Aa : "", !Ma && ua && (mi("gpt_td_nf", function(xb) {
                            si(xb, a.context);
                            I(xb, "queryid", Ua);
                            I(xb, "slot", b.getAdUnitPath());
                            I(xb, "publisher_tag", "gpt")
                        }, 1), R && Nq(0, 0, R)), ic = ig("google_norender"), !ic && Ma || MP(a, b, Ua), ic || !Ma && !Cb || YO(a.ea, b, !Ma, a.J, a.N, r, g.o, e, a.l.Rd, a.K, a.C), f.Ba(), Za.j = 0
                }
            })
        },
        MP = function(a, b, c) {
            var d = Wh(b, document);
            d && Qf(d, window, c, !0);
            JC(_.E(Xg), "5", F(a.N.P[b.getDomId()], 20));
            b.dispatchEvent(uK, 801, {
                rd: null,
                isBackfill: !1
            });
            if (_.GK(a.J, b) && !ei(b, document)) {
                c = a.N;
                a = c.V;
                c = c.P[b.getDomId()];
                var e;
                (null != (e = H(c, 10)) ? e : H(a, 11)) && ln(b, document, c, a)
            }
            b.dispatchEvent(wK, 825, {
                isEmpty: !0
            })
        };
    var NP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, z, C) {
        Z.call(this, a, 885);
        this.C = b;
        this.N = c;
        this.J = d;
        this.ja = e;
        this.kb = f;
        this.L = g;
        this.K = h;
        this.o = k;
        this.G = l;
        this.l = m;
        this.O = n;
        this.F = p;
        this.U = r;
        this.T = U(this, z);
        AD(this, C)
    };
    _.N(NP, Z);
    NP.prototype.j = function() {
        var a = this.T.value;
        if (a.length) {
            var b = this.J,
                c = this.o,
                d = a.length;
            b.m.has(c);
            b.m.set(c, d);
            a = _.w(a);
            for (b = a.next(); !b.done; b = a.next()) {
                var e = b.value,
                    f = c = b = void 0,
                    g = void 0;
                d = e.Ma;
                var h = e.Z;
                e = new Be;
                _.Pn(this, e);
                var k = void 0;
                0 >= _.A(Nx) && (k = new ZO(this.context, this.F), D(e, k));
                if (_.B(Nn)) {
                    g = Xn(this.context, this.l.m);
                    var l = g.Sa;
                    f = g.Bd;
                    _.Pn(e, g.za);
                    g = l
                }
                f = Wn(this.context, this.C, BI(this.N.V), this.F, this.l.m, g, f);
                g = f.Xa;
                _.Pn(e, f.za);
                f = new cP(this.context, this.F, g);
                D(e, f);
                f = new $O(this.context, this.F, g);
                D(e, f);
                f = new aP(this.context, _.cg(150), g);
                D(e, f);
                l = new Tq(this.context, this.F, g);
                D(e, l);
                var m = new bP(this.context, this.ja, l.A, g);
                D(e, m);
                d = new IP(this.context, this.C, h, this.o, this.N, this.J, this.ja, this.L, this.K, this.G, this.kb, this.l, this.O, d, this.F, this.U, l.A, g, m.l, f.l, null == (c = k) ? void 0 : c.l, null == (b = k) ? void 0 : b.o);
                D(e, d);
                Qe(e)
            }
        } else this.G.Fd.dispatchEvent(AK, 965, this.o)
    };
    var OP = new u.Map,
        PP = function(a, b, c, d) {
            d = void 0 === d ? OP : d;
            Z.call(this, a, 834);
            this.C = b;
            this.Z = c;
            this.l = d;
            this.o = T(this);
            this.G = u.Promise.all(this.Z.map(this.K, this))
        };
    _.N(PP, Z);
    PP.prototype.j = function() {
        var a = this,
            b;
        return _.cb(function(c) {
            if (1 == c.j) return db(c, a.G, 2);
            b = c.m;
            a.o.j(b.filter(function(d) {
                return null != d && !d.D
            }));
            c.j = 0
        })
    };
    PP.prototype.K = function(a) {
        var b = this,
            c, d;
        return _.cb(function(e) {
            if (1 == e.j) {
                if (a.D) return e.return(null);
                b.l.has(a) || (b.l.set(a, Er(a)), _.to(a, function() {
                    return void b.l.delete(a)
                }));
                c = b.l.get(a);
                return db(e, c(), 2)
            }
            d = e.m;
            if (b.D) return e.return(null);
            if (d) return e.return(a);
            M(b.C, NL(a.getAdUnitPath()));
            return e.return(null)
        })
    };
    var QP = function(a, b, c, d, e) {
        Z.call(this, a, 847);
        this.J = b;
        this.Aa = c;
        this.o = d;
        this.l = T(this);
        this.C = U(this, e)
    };
    _.N(QP, Z);
    QP.prototype.j = function() {
        var a = this.C.value;
        if (a.length) {
            for (var b = _.w(a), c = b.next(); !c.done; c = b.next()) KK(this.J, c.value);
            this.o ? this.l.j([]) : this.Aa ? (b = $f(a[0].getAdUnitPath()), a = RP(a, b), this.l.j(a)) : (a = a.map(function(d) {
                return {
                    Ma: $f(d.getAdUnitPath()),
                    Z: [d]
                }
            }), this.l.j(a))
        } else this.l.j([])
    };
    var RP = function(a, b) {
        var c = [];
        a = qa(a, function(f) {
            return $f(f.getAdUnitPath())
        });
        a = _.w(_.t(Object, "entries").call(Object, a));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = _.w(d.value);
            d = e.next().value;
            e = e.next().value;
            d === b ? c.unshift({
                Ma: d,
                Z: e
            }) : c.push({
                Ma: d,
                Z: e
            })
        }
        return c
    };
    var SP = function(a, b, c) {
        Z.call(this, a, 845);
        this.P = b;
        this.l = T(this);
        this.o = T(this);
        this.C = U(this, c)
    };
    _.N(SP, Z);
    SP.prototype.j = function() {
        var a = this,
            b = function(d) {
                d = a.P[d.getDomId()];
                return !!Ch(d).length || Dh(d, 16)
            },
            c = this.C.value;
        this.l.j(c.filter(b));
        this.o.j(c.filter(kt(b)))
    };
    var TP = function(a, b, c, d, e) {
        Z.call(this, a, 864);
        this.J = b;
        this.N = c;
        this.U = d;
        this.l = yD(this);
        this.o = U(this, e)
    };
    _.N(TP, Z);
    TP.prototype.j = function() {
        for (var a = _.w(this.o.value), b = a.next(); !b.done; b = a.next())
            if (b = b.value, _.GK(this.J, b)) {
                var c = this.N,
                    d = c.V;
                c = c.P[b.getDomId()];
                kn(c, d) && ln(b, this.U, c, d);
                KK(this.J, b);
                var e = void 0,
                    f = void 0;
                null != (e = null != (f = H(c, 10)) ? f : H(d, 11)) && e && ln(b, this.U, c, d)
            }
        this.l.notify()
    };
    var UP = function(a, b, c, d, e, f, g, h, k, l, m) {
        _.HB.call(this);
        var n = this;
        this.context = a;
        this.B = b;
        this.J = c;
        this.ja = d;
        this.sa = e;
        this.o = f;
        this.I = g;
        this.M = h;
        this.l = k;
        this.U = l;
        this.F = m;
        this.j = new u.Map;
        this.m = new pK(a);
        _.Pn(this, this.m);
        rK(this.m, AK, function(p) {
            p = p.detail;
            var r = n.j.get(p);
            r && (n.j.delete(p), r.Ba())
        })
    };
    _.N(UP, _.HB);
    var VP = function(a, b, c, d) {
        var e = ++a.J.I;
        a.j.has(e);
        var f = new Be;
        a.j.set(e, f);
        b = new PP(a.context, a.B, b);
        D(f, b);
        var g = new SP(a.context, d.P, b.o);
        D(f, g);
        b = new QP(a.context, a.J, !!H(d.V, 6), ig("google_nofetch"), g.l);
        D(f, b);
        g = new TP(a.context, a.J, d, document, g.o);
        D(f, g);
        a = new NP(a.context, a.B, d, a.J, a.ja, c, a.o, a.I, e, {
            Fd: a.m,
            Rd: a.sa
        }, a.l, a.M, a.F, a.U, b.l, g.l);
        D(f, a);
        Qe(f)
    };
    var WP = function(a, b, c, d, e) {
        cO.call(this, a, b);
        this.O = d;
        this.L = e;
        this.l = new u.Set;
        this.M = {};
        this.G = new VO(this.context, this.j);
        this.ja = new PD(window);
        this.T = _.E(jO);
        this.J = _.B(Sx) ? c : _.E(BK);
        this.K = new UP(this.context, this.j, this.J, this.ja, this, this.T, this.O, this.G, this.L, document, window);
        _.Pn(this, this.K);
        _.B(pB) && new mN(a, this)
    };
    _.N(WP, cO);
    WP.prototype.getName = function() {
        return "publisher_ads"
    };
    WP.prototype.display = function(a, b, c, d) {
        c = void 0 === c ? "" : c;
        d = void 0 === d ? "" : d;
        var e = "";
        if (c)
            if (_.fa(c) && 1 == c.nodeType) {
                var f = c;
                e = f.id
            } else e = c;
        this.enable();
        var g = zl(this.context, this.j, a, b, e),
            h = g.slotId;
        g = g.Ia;
        if (h && g) {
            f && !e && (f.id = h.getDomId());
            this.slotAdded(h, g);
            g.setClickUrl(d);
            var k;
            oo(this.j, null != (k = f) ? k : h.getDomId())
        } else M(this.j, ij("PubAdsService.display", [a, b, c]))
    };
    var kM = function(a, b, c) {
        var d = void 0 === d ? document : d;
        var e;
        null != (e = c.P[b.getDomId()]) && v(e, 19, !0);
        e = {
            id: Wv(b.getDomId())
        };
        Xa(d, rf(e));
        Wh(b, d) ? (a.enable(), FK(a.J, b), XP(a, c, b)) : mi("gpt_pb_write", function(f) {
            si(f, a.context)
        })
    };
    WP.prototype.slotAdded = function(a, b) {
        var c = this;
        H(b, 17) || this.B && FK(this.J, a);
        this.dispatchEvent(xK, 724, {
            ed: a.getDomId(),
            P: b
        });
        rK(a, wK, function(d) {
            var e = d.detail;
            d = e.size;
            var f = new SN(a, "publisher_ads");
            e.isEmpty && (f.isEmpty = !0);
            e = a.j.getResponseInformation();
            d && e && (f.size = [d.width, d.height], f.sourceAgnosticCreativeId = e.sourceAgnosticCreativeId, f.sourceAgnosticLineItemId = e.sourceAgnosticLineItemId, f.isBackfill = e.isBackfill, f.creativeId = e.creativeId, f.lineItemId = e.lineItemId, f.creativeTemplateId = e.creativeTemplateId, f.advertiserId = e.advertiserId, f.campaignId = e.campaignId, f.yieldGroupIds = e.yieldGroupIds, f.companyIds = e.companyIds);
            c.dispatchEvent("slotRenderEnded", 708, f)
        });
        rK(a, tK, function() {
            return void c.dispatchEvent("slotResponseReceived", 709, new aO(a, c.getName()))
        });
        cO.prototype.slotAdded.call(this, a, b)
    };
    WP.prototype.R = function(a, b) {
        this.enable();
        this.B && FK(this.J, b);
        this.j.info(hL());
        var c = a.V,
            d = a.P,
            e = H(c, 6);
        if (e || !this.J.fb(b)) e && (e = Wh(b)) && b.dispatchEvent(sK, 778, e), H(c, 4) && (d = d[b.getDomId()], e = document, e = void 0 === e ? document : e, kn(d, c) && !this.J.fb(b) && ln(b, e, d, c)), XP(this, a, b)
    };
    var XP = function(a, b, c) {
            var d = YP(a, b, c);
            ZP(a, d, b, {
                Ha: 1
            });
            b = c.getAdUnitPath();
            if (c = a.M[b]) {
                c = _.w(c);
                for (d = c.next(); !d.done; d = c.next()) d = d.value, ZP(a, d.Z, d.N, d.kb);
                delete a.M[b]
            }
        },
        YP = function(a, b, c) {
            var d = b.V;
            b = b.P;
            if (H(d, 4)) return [];
            var e;
            return !H(d, 6) || (null == (e = b[c.getDomId()]) ? 0 : H(e, 17)) ? (a.l.add(c), _.to(c, function() {
                return void a.l.delete(c)
            }), [c]) : a.m.filter(function(f) {
                if (a.l.has(f)) return !1;
                a.l.add(f);
                _.to(f, function() {
                    return void a.l.delete(f)
                });
                return !0
            })
        },
        ZP = function(a, b, c, d) {
            a.j.info(oL());
            if ($P(a, b, d, c) && 1 !== d.Ha)
                for (b = _.w(b), d = b.next(); !d.done; d = b.next()) d = d.value.getDomId(), a.dispatchEvent(yK, 725, {
                    ed: d,
                    P: c.P[d]
                })
        },
        $P = function(a, b, c, d) {
            b = b.filter(function(e) {
                if (!_.GK(a.J, e)) return !1;
                var f = d.P[e.getDomId()];
                5 !== hl(f) && 4 !== hl(f) || _.HK(a.J, e);
                return !0
            });
            if (!b.length) return null;
            VP(a.K, b, c, d);
            return b
        };
    WP.prototype.refresh = function(a, b, c) {
        b = aQ(this, b);
        if (!b.length) return !1;
        bQ(this, a, b, null != c ? c : {
            Ha: 2
        });
        return !0
    };
    var aQ = function(a, b) {
            return b.filter(function(c, d) {
                if (!c.D) return !0;
                M(a.j, rL(String(d)));
                return !1
            })
        },
        bQ = function(a, b, c, d) {
            var e = c[0],
                f, g = null != (f = null == e ? void 0 : e.getDomId()) ? f : "";
            if (a.B) {
                var h = {};
                e = _.w(c);
                for (f = e.next(); !f.done; h = {
                        yb: h.yb
                    }, f = e.next()) h.yb = f.value, a.l.add(h.yb), _.to(h.yb, function(k) {
                    return function() {
                        return void a.l.delete(k.yb)
                    }
                }(h));
                ZP(a, c, b, d)
            } else c.length && H(b.V, 6) ? (M(a.j, nL(g), e), e = e.getAdUnitPath(), f = null != (h = a.M[e]) ? h : [], f.push({
                Z: c,
                N: b,
                kb: d
            }), a.M[e] = f) : M(a.j, lL(g), e)
        };
    WP.prototype.Pc = function() {
        var a = this,
            b = Qg().j;
        if (H(b, 6))
            for (var c = _.w(this.m), d = c.next(); !d.done; d = c.next()) this.B && FK(this.J, d.value);
        JM(this, b);
        rK(this, "rewardedSlotClosed", function(e) {
            var f = e.detail.slot;
            e = _.t(a.m, "find").call(a.m, function(g) {
                return f === g.j
            });
            cQ(a, [e], Qg().j, Qg().m, a.J)
        });
        Bg("pubadsReady", !0)
    };
    WP.prototype.destroySlots = function(a) {
        a = cO.prototype.destroySlots.call(this, a);
        if (a.length && this.B) {
            var b = Qg();
            dQ(this, a, b.j, b.m)
        }
        return a
    };
    var LM = function(a, b, c, d) {
            if (!a.B) return M(a.j, mL(), d[0]), !1;
            var e = aQ(a, d);
            if (!e.length) return M(a.j, ij("PubAdsService.clear", [d].filter(function(f) {
                return void 0 !== f
            }))), !1;
            a.j.info(pL());
            dQ(a, e, b, c);
            return !0
        },
        dQ = function(a, b, c, d) {
            for (var e = _.w(b), f = e.next(); !f.done; f = e.next()) CK(a.J, f.value);
            cQ(a, b, c, d, a.J)
        };
    WP.prototype.forceExperiment = function(a) {
        a = Number(a);
        0 < a && dD(a)
    };
    var cQ = function(a, b, c, d, e) {
            var f = void 0 === f ? window : f;
            b = _.w(b);
            for (var g = b.next(); !g.done; g = b.next()) {
                g = g.value;
                WO(a.G, g);
                var h = d[g.getDomId()];
                kn(h, c) && ln(g, f.document, h, c);
                KK(e, g)
            }
        },
        KM = function(a, b, c, d) {
            v(d, 21, !0);
            v(d, 22, String(null != b ? b : ""));
            v(d, 23, String(null != c ? c : ""));
            JM(a, d)
        },
        MM = function(a, b) {
            if (!a.B) return null;
            var c, d;
            return {
                vid: null != (c = F(b, 22)) ? c : "",
                cmsid: null != (d = F(b, 23)) ? d : ""
            }
        },
        JM = function(a, b) {
            H(b, 21) && a.B && v(b, 29, Lw())
        };
    var Nr = "2022080201";
    var eQ = O(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        fQ = O(["https://securepubads.g.doubleclick.net/gpt/pubads_impl_", "_", ".js"]),
        gQ = O(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        hQ = O(["https://pagead2.googlesyndication.com/gpt/pubads_impl_", "_", ".js"]),
        iQ = O(["https://securepubads.g.doubleclick.net/pagead/js/rum.js"]),
        jQ = O(["https://securepubads.g.doubleclick.net/pagead/js/rum_debug.js"]);
    (function(a, b, c, d) {
        var e = null != c ? c : {
            Fa: Or(),
            ab: "",
            bb: new Vr(0),
            Yd: !0,
            vd: 1
        };
        try {
            eg();
            var f = window.googletag;
            if (null == f ? 0 : f.evalScripts) f.evalScripts();
            else {
                yJ();
                Bg("evalScripts", function() {
                    try {
                        Bo()
                    } catch (W) {
                        Zg(e, 297, W);
                        var P, L;
                        null == (P = window.console) || null == (L = P.error) || L.call(P, W)
                    }
                });
                try {
                    MD()
                } catch (P) {
                    Zg(e, 408, P)
                }
                dn();
                try {
                    KD(), Sr(13), Sr(3)
                } catch (P) {
                    Zg(e, 408, P)
                }
                fi("gpt-tag-load");
                var g = Tr(),
                    h = null != c ? c : Wr(g),
                    k = null != d ? d : new QN(h),
                    l = !!_.cg(259);
                rg(h, l);
                _.E(tl);
                var m = a(h),
                    n = new gO(h, m),
                    p = _.B(Sx) ? _.E(BK) : void 0,
                    r = new KN(h, k, p),
                    z = new WP(h, k, p, n, r);
                _.cg(260) && LN(r, z);
                var C = sk(zy);
                C && _.bh(h, 862, function() {
                    var P = document;
                    if (C && P.head) {
                        var L = _.Ld("META");
                        P.head.appendChild(L);
                        L.httpEquiv = "origin-trial";
                        L.content = C
                    }
                }, !0);
                if (_.B(Uo)) {
                    var J = Qg().j;
                    Sp(h, k, z, b, J)
                } else Sp(h, k, z, b);
                var V = function() {
                    _.bh(h, 77, function() {
                        var P = dg().cmd;
                        if (!P || Array.isArray(P)) {
                            var L = new nN(k);
                            dg().cmd = fj(h, L);
                            null != P && P.length && L.push.apply(L, P)
                        }
                    })
                };
                dg().fifWin && "complete" !== document.readyState ? _.ab(window, "load", function() {
                    window.setTimeout(V, 0)
                }) : V();
                Bo();
                if (_.B(pB) || _.E(Xg).j) Mr(), yj(document, vd(_.B(sB) ? m.lf : m.nf));
                lq(h, k);
                tj(h)
            }
        } catch (P) {
            Zg(e, 106, P)
        }
    })(function(a) {
        return {
            re: function(b) {
                return a.ab ? x(eQ, a.ab, b) : x(fQ, b, a.Fa)
            },
            qe: function(b) {
                return a.ab ? x(gQ, a.ab, b) : x(hQ, b, a.Fa)
            },
            nf: x(iQ),
            lf: x(jQ)
        }
    }, window);
}).call(this, {});