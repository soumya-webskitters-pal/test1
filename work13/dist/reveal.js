/*!
 * reveal.js 4.0.2
 * https://revealjs.com
 * MIT licensed
 * Copyright (C) 2020 Hakim El Hattab, https://hakim.se
 */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Reveal = t()
}(this, function() {
    "use strict";
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function t(e, t, n) {
        return e(n = {
            path: t,
            exports: {},
            require: function(e, t) {
                return function() {
                    throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                }(null == t && n.path)
            }
        }, n.exports), n.exports
    }
    var n = function(e) {
            return e && e.Math == Math && e
        },
        i = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || Function("return this")(),
        r = function(e) {
            try {
                return !!e()
            } catch (t) {
                return !0
            }
        },
        a = !r(function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        }),
        o = {}.propertyIsEnumerable,
        s = Object.getOwnPropertyDescriptor,
        l = {
            f: s && !o.call({
                1: 2
            }, 1) ? function(e) {
                var t = s(this, e);
                return !!t && t.enumerable
            } : o
        },
        u = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        },
        c = {}.toString,
        d = function(e) {
            return c.call(e).slice(8, -1)
        },
        f = "".split,
        h = r(function() {
            return !Object("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return "String" == d(e) ? f.call(e, "") : Object(e)
        } : Object,
        v = function(e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e
        },
        g = function(e) {
            return h(v(e))
        },
        p = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        },
        m = function(e, t) {
            var n, i;
            if (!p(e)) return e;
            if (t && "function" == typeof(n = e.toString) && !p(i = n.call(e)) || "function" == typeof(n = e.valueOf) && !p(i = n.call(e)) || !t && "function" == typeof(n = e.toString) && !p(i = n.call(e))) return i;
            throw TypeError("Can't convert object to primitive value")
        },
        y = {}.hasOwnProperty,
        b = function(e, t) {
            return y.call(e, t)
        },
        $ = i.document,
        _ = p($) && p($.createElement),
        w = function(e) {
            return _ ? $.createElement(e) : {}
        },
        k = !a && !r(function() {
            return 7 != Object.defineProperty(w("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }),
        S = Object.getOwnPropertyDescriptor,
        E = {
            f: a ? S : function(e, t) {
                if (e = g(e), t = m(t, !0), k) try {
                    return S(e, t)
                } catch (n) {}
                if (b(e, t)) return u(!l.f.call(e, t), e[t])
            }
        },
        R = function(e) {
            if (!p(e)) throw TypeError(String(e) + " is not an object");
            return e
        },
        A = Object.defineProperty,
        x = {
            f: a ? A : function(e, t, n) {
                if (R(e), t = m(t, !0), R(n), k) try {
                    return A(e, t, n)
                } catch (i) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                return "value" in n && (e[t] = n.value), e
            }
        },
        L = a ? function(e, t, n) {
            return x.f(e, t, u(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        },
        C = function(e, t) {
            try {
                L(i, e, t)
            } catch (n) {
                i[e] = t
            }
            return t
        },
        P = "__core-js_shared__",
        N = i[P] || C(P, {}),
        I = Function.toString;
    "function" != typeof N.inspectSource && (N.inspectSource = function(e) {
        return I.call(e)
    });
    var T, D, M, O = N.inspectSource,
        z = i.WeakMap,
        H = "function" == typeof z && /native code/.test(O(z)),
        B = t(function(e) {
            (e.exports = function(e, t) {
                return N[e] || (N[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.6.5",
                mode: "global",
                copyright: "\xa9 2020 Denis Pushkarev (zloirock.ru)"
            })
        }),
        U = 0,
        j = Math.random(),
        F = function(e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++U + j).toString(36)
        },
        W = B("keys"),
        q = function(e) {
            return W[e] || (W[e] = F(e))
        },
        V = {},
        K = i.WeakMap;
    if (H) {
        var X = new K,
            Y = X.get,
            G = X.has,
            J = X.set;
        T = function(e, t) {
            return J.call(X, e, t), t
        }, D = function(e) {
            return Y.call(X, e) || {}
        }, M = function(e) {
            return G.call(X, e)
        }
    } else {
        var Q = q("state");
        V[Q] = !0, T = function(e, t) {
            return L(e, Q, t), t
        }, D = function(e) {
            return b(e, Q) ? e[Q] : {}
        }, M = function(e) {
            return b(e, Q)
        }
    }
    var Z, ee, et = {
            set: T,
            get: D,
            has: M,
            enforce: function(e) {
                return M(e) ? D(e) : T(e, {})
            },
            getterFor: function(e) {
                return function(t) {
                    var n;
                    if (!p(t) || (n = D(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                    return n
                }
            }
        },
        en = t(function(e) {
            var t = et.get,
                n = et.enforce,
                r = String(String).split("String");
            (e.exports = function(e, t, a, o) {
                var s = !!o && !!o.unsafe,
                    l = !!o && !!o.enumerable,
                    u = !!o && !!o.noTargetGet;
                "function" == typeof a && ("string" != typeof t || b(a, "name") || L(a, "name", t), n(a).source = r.join("string" == typeof t ? t : "")), e !== i ? (s ? !u && e[t] && (l = !0) : delete e[t], l ? e[t] = a : L(e, t, a)) : l ? e[t] = a : C(t, a)
            })(Function.prototype, "toString", function() {
                return "function" == typeof this && t(this).source || O(this)
            })
        }),
        ei = i,
        er = function(e) {
            return "function" == typeof e ? e : void 0
        },
        ea = function(e, t) {
            return arguments.length < 2 ? er(ei[e]) || er(i[e]) : ei[e] && ei[e][t] || i[e] && i[e][t]
        },
        eo = Math.ceil,
        es = Math.floor,
        el = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? es : eo)(e)
        },
        eu = Math.min,
        ec = function(e) {
            return e > 0 ? eu(el(e), 9007199254740991) : 0
        },
        ed = Math.max,
        ef = Math.min,
        eh = function(e, t) {
            var n = el(e);
            return n < 0 ? ed(n + t, 0) : ef(n, t)
        },
        ev = function(e) {
            return function(t, n, i) {
                var r, a = g(t),
                    o = ec(a.length),
                    s = eh(i, o);
                if (e && n != n) {
                    for (; o > s;)
                        if ((r = a[s++]) != r) return !0
                } else
                    for (; o > s; s++)
                        if ((e || s in a) && a[s] === n) return e || s || 0;
                return !e && -1
            }
        },
        eg = {
            includes: ev(!0),
            indexOf: ev(!1)
        },
        ep = eg.indexOf,
        em = function(e, t) {
            var n, i = g(e),
                r = 0,
                a = [];
            for (n in i) !b(V, n) && b(i, n) && a.push(n);
            for (; t.length > r;) b(i, n = t[r++]) && (~ep(a, n) || a.push(n));
            return a
        },
        ey = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf", ],
        eb = ey.concat("length", "prototype"),
        e$ = {
            f: Object.getOwnPropertyNames || function(e) {
                return em(e, eb)
            }
        },
        e_ = {
            f: Object.getOwnPropertySymbols
        },
        ew = ea("Reflect", "ownKeys") || function(e) {
            var t = e$.f(R(e)),
                n = e_.f;
            return n ? t.concat(n(e)) : t
        },
        ek = function(e, t) {
            for (var n = ew(t), i = x.f, r = E.f, a = 0; a < n.length; a++) {
                var o = n[a];
                b(e, o) || i(e, o, r(t, o))
            }
        },
        eS = /#|\.prototype\./,
        eE = function(e, t) {
            var n = eA[eR(e)];
            return n == eL || n != ex && ("function" == typeof t ? r(t) : !!t)
        },
        eR = eE.normalize = function(e) {
            return String(e).replace(eS, ".").toLowerCase()
        },
        eA = eE.data = {},
        ex = eE.NATIVE = "N",
        eL = eE.POLYFILL = "P",
        eC = eE,
        eP = E.f,
        eN = function(e, t) {
            var n, r, a, o, s, l = e.target,
                u = e.global,
                c = e.stat;
            if (n = u ? i : c ? i[l] || C(l, {}) : (i[l] || {}).prototype)
                for (r in t) {
                    if (o = t[r], a = e.noTargetGet ? (s = eP(n, r)) && s.value : n[r], !eC(u ? r : l + (c ? "." : "#") + r, e.forced) && void 0 !== a) {
                        if (typeof o == typeof a) continue;
                        ek(o, a)
                    }(e.sham || a && a.sham) && L(o, "sham", !0), en(n, r, o, e)
                }
        },
        eI = Array.isArray || function(e) {
            return "Array" == d(e)
        },
        eT = function(e) {
            return Object(v(e))
        },
        eD = function(e, t, n) {
            var i = m(t);
            i in e ? x.f(e, i, u(0, n)) : e[i] = n
        },
        eM = !!Object.getOwnPropertySymbols && !r(function() {
            return !String(Symbol())
        }),
        eO = eM && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        e0 = B("wks"),
        ez = i.Symbol,
        eH = eO ? ez : ez && ez.withoutSetter || F,
        eB = function(e) {
            return b(e0, e) || (eM && b(ez, e) ? e0[e] = ez[e] : e0[e] = eH("Symbol." + e)), e0[e]
        },
        eU = eB("species"),
        ej = function(e, t) {
            var n;
            return eI(e) && ("function" == typeof(n = e.constructor) && (n === Array || eI(n.prototype)) ? n = void 0 : p(n) && null === (n = n[eU]) && (n = void 0)), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
        },
        eF = ea("navigator", "userAgent") || "",
        eW = i.process,
        eq = eW && eW.versions,
        e1 = eq && eq.v8;
    e1 ? ee = (Z = e1.split("."))[0] + Z[1] : eF && (!(Z = eF.match(/Edge\/(\d+)/)) || Z[1] >= 74) && (Z = eF.match(/Chrome\/(\d+)/)) && (ee = Z[1]);
    var e8 = ee && +ee,
        eV = eB("species"),
        e7 = function(e) {
            return e8 >= 51 || !r(function() {
                var t = [];
                return (t.constructor = {})[eV] = function() {
                    return {
                        foo: 1
                    }
                }, 1 !== t[e](Boolean).foo
            })
        },
        e3 = eB("isConcatSpreadable"),
        e2 = "Maximum allowed index exceeded",
        eK = e8 >= 51 || !r(function() {
            var e = [];
            return e[e3] = !1, e.concat()[0] !== e
        }),
        e5 = e7("concat"),
        e4 = function(e) {
            if (!p(e)) return !1;
            var t = e[e3];
            return void 0 !== t ? !!t : eI(e)
        };
    eN({
        target: "Array",
        proto: !0,
        forced: !eK || !e5
    }, {
        concat: function(e) {
            var t, n, i, r, a, o = eT(this),
                s = ej(o, 0),
                l = 0;
            for (t = -1, i = arguments.length; t < i; t++)
                if (e4(a = -1 === t ? o : arguments[t])) {
                    if (l + (r = ec(a.length)) > 9007199254740991) throw TypeError(e2);
                    for (n = 0; n < r; n++, l++) n in a && eD(s, l, a[n])
                } else {
                    if (l >= 9007199254740991) throw TypeError(e2);
                    eD(s, l++, a)
                } return s.length = l, s
        }
    });
    var e6 = function(e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e
        },
        e9 = function(e, t, n) {
            if (e6(e), void 0 === t) return e;
            switch (n) {
                case 0:
                    return function() {
                        return e.call(t)
                    };
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function(n, i) {
                        return e.call(t, n, i)
                    };
                case 3:
                    return function(n, i, r) {
                        return e.call(t, n, i, r)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        },
        eX = [].push,
        eY = function(e) {
            var t = 1 == e,
                n = 2 == e,
                i = 3 == e,
                r = 4 == e,
                a = 6 == e,
                o = 5 == e || a;
            return function(s, l, u, c) {
                for (var d, f, v = eT(s), g = h(v), p = e9(l, u, 3), m = ec(g.length), y = 0, b = c || ej, $ = t ? b(s, m) : n ? b(s, 0) : void 0; m > y; y++)
                    if ((o || y in g) && (f = p(d = g[y], y, v), e)) {
                        if (t) $[y] = f;
                        else if (f) switch (e) {
                            case 3:
                                return !0;
                            case 5:
                                return d;
                            case 6:
                                return y;
                            case 2:
                                eX.call($, d)
                        } else if (r) return !1
                    } return a ? -1 : i || r ? r : $
            }
        },
        eG = {
            forEach: eY(0),
            map: eY(1),
            filter: eY(2),
            some: eY(3),
            every: eY(4),
            find: eY(5),
            findIndex: eY(6)
        },
        eJ = function(e, t) {
            var n = [][e];
            return !!n && r(function() {
                n.call(null, t || function() {
                    throw 1
                }, 1)
            })
        },
        eQ = Object.defineProperty,
        eZ = {},
        te = function(e) {
            throw e
        },
        tt = function(e, t) {
            if (b(eZ, e)) return eZ[e];
            t || (t = {});
            var n = [][e],
                i = !!b(t, "ACCESSORS") && t.ACCESSORS,
                o = b(t, 0) ? t[0] : te,
                s = b(t, 1) ? t[1] : void 0;
            return eZ[e] = !!n && !r(function() {
                if (i && !a) return !0;
                var e = {
                    length: -1
                };
                i ? eQ(e, 1, {
                    enumerable: !0,
                    get: te
                }) : e[1] = 1, n.call(e, o, s)
            })
        },
        tn = eG.forEach,
        ti = eJ("forEach"),
        tr = tt("forEach"),
        ta = ti && tr ? [].forEach : function(e) {
            return tn(this, e, arguments.length > 1 ? arguments[1] : void 0)
        };
    eN({
        target: "Array",
        proto: !0,
        forced: [].forEach != ta
    }, {
        forEach: ta
    });
    var to = eG.map,
        ts = e7("map"),
        tl = tt("map");
    eN({
        target: "Array",
        proto: !0,
        forced: !ts || !tl
    }, {
        map: function(e) {
            return to(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var tu = Object.keys || function(e) {
            return em(e, ey)
        },
        tc = Object.assign,
        td = Object.defineProperty,
        tf = !tc || r(function() {
            if (a && 1 !== tc({
                    b: 1
                }, tc(td({}, "a", {
                    enumerable: !0,
                    get: function() {
                        td(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b) return !0;
            var e = {},
                t = {},
                n = Symbol(),
                i = "abcdefghijklmnopqrst";
            return e[n] = 7, i.split("").forEach(function(e) {
                t[e] = e
            }), 7 != tc({}, e)[n] || tu(tc({}, t)).join("") != i
        }) ? function(e, t) {
            for (var n = eT(e), i = arguments.length, r = 1, o = e_.f, s = l.f; i > r;)
                for (var u, c = h(arguments[r++]), d = o ? tu(c).concat(o(c)) : tu(c), f = d.length, v = 0; f > v;) u = d[v++], a && !s.call(c, u) || (n[u] = c[u]);
            return n
        } : tc;
    eN({
        target: "Object",
        stat: !0,
        forced: Object.assign !== tf
    }, {
        assign: tf
    });
    var th, tv = a ? Object.defineProperties : function(e, t) {
            R(e);
            for (var n, i = tu(t), r = i.length, a = 0; r > a;) x.f(e, n = i[a++], t[n]);
            return e
        },
        tg = ea("document", "documentElement"),
        tp = q("IE_PROTO"),
        tm = function() {},
        ty = function(e) {
            return "<script>" + e + "</script>"
        },
        tb = function() {
            try {
                th = document.domain && new ActiveXObject("htmlfile")
            } catch (e) {}
            tb = th ? ((t = th).write(ty("")), t.close(), n = t.parentWindow.Object, t = null, n) : ((r = w("iframe")).style.display = "none", tg.appendChild(r), r.src = String("javascript:"), (i = r.contentWindow.document).open(), i.write(ty("document.F=Object")), i.close(), i.F);
            for (var t, n, i, r, a = ey.length; a--;) delete tb.prototype[ey[a]];
            return tb()
        };
    V[tp] = !0;
    var t$ = Object.create || function(e, t) {
            var n;
            return null !== e ? (tm.prototype = R(e), n = new tm, tm.prototype = null, n[tp] = e) : n = tb(), void 0 === t ? n : tv(n, t)
        },
        t_ = e$.f,
        tw = {}.toString,
        tk = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        tS = {
            f: function(e) {
                return tk && "[object Window]" == tw.call(e) ? function(e) {
                    try {
                        return t_(e)
                    } catch (t) {
                        return tk.slice()
                    }
                }(e) : t_(g(e))
            }
        },
        tE = {
            f: eB
        },
        tR = x.f,
        tA = x.f,
        tx = eB("toStringTag"),
        tL = function(e, t, n) {
            e && !b(e = n ? e : e.prototype, tx) && tA(e, tx, {
                configurable: !0,
                value: t
            })
        },
        tC = eG.forEach,
        tP = q("hidden"),
        tN = "Symbol",
        tI = eB("toPrimitive"),
        tT = et.set,
        tD = et.getterFor(tN),
        tM = Object.prototype,
        tO = i.Symbol,
        t0 = ea("JSON", "stringify"),
        tz = E.f,
        tH = x.f,
        tB = tS.f,
        tU = l.f,
        tj = B("symbols"),
        tF = B("op-symbols"),
        tW = B("string-to-symbol-registry"),
        tq = B("symbol-to-string-registry"),
        t1 = B("wks"),
        t8 = i.QObject,
        tV = !t8 || !t8.prototype || !t8.prototype.findChild,
        t7 = a && r(function() {
            return 7 != t$(tH({}, "a", {
                get: function() {
                    return tH(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(e, t, n) {
            var i = tz(tM, t);
            i && delete tM[t], tH(e, t, n), i && e !== tM && tH(tM, t, i)
        } : tH,
        t3 = function(e, t) {
            var n = tj[e] = t$(tO.prototype);
            return tT(n, {
                type: tN,
                tag: e,
                description: t
            }), a || (n.description = t), n
        },
        t2 = eO ? function(e) {
            return "symbol" == typeof e
        } : function(e) {
            return Object(e) instanceof tO
        },
        tK = function(e, t, n) {
            e === tM && tK(tF, t, n), R(e);
            var i = m(t, !0);
            return R(n), b(tj, i) ? (n.enumerable ? (b(e, tP) && e[tP][i] && (e[tP][i] = !1), n = t$(n, {
                enumerable: u(0, !1)
            })) : (b(e, tP) || tH(e, tP, u(1, {})), e[tP][i] = !0), t7(e, i, n)) : tH(e, i, n)
        },
        t5 = function(e, t) {
            R(e);
            var n = g(t),
                i = tu(n).concat(tX(n));
            return tC(i, function(t) {
                a && !t4.call(n, t) || tK(e, t, n[t])
            }), e
        },
        t4 = function(e) {
            var t = m(e, !0),
                n = tU.call(this, t);
            return !(this === tM && b(tj, t) && !b(tF, t)) && (!(n || !b(this, t) || !b(tj, t) || b(this, tP) && this[tP][t]) || n)
        },
        t6 = function(e, t) {
            var n = g(e),
                i = m(t, !0);
            if (n !== tM || !b(tj, i) || b(tF, i)) {
                var r = tz(n, i);
                return !r || !b(tj, i) || b(n, tP) && n[tP][i] || (r.enumerable = !0), r
            }
        },
        t9 = function(e) {
            var t = tB(g(e)),
                n = [];
            return tC(t, function(e) {
                b(tj, e) || b(V, e) || n.push(e)
            }), n
        },
        tX = function(e) {
            var t = e === tM,
                n = tB(t ? tF : g(e)),
                i = [];
            return tC(n, function(e) {
                b(tj, e) && (!t || b(tM, e)) && i.push(tj[e])
            }), i
        };
    if (eM || (en((tO = function() {
            if (this instanceof tO) throw TypeError("Symbol is not a constructor");
            var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
                t = F(e),
                n = function(e) {
                    this === tM && n.call(tF, e), b(this, tP) && b(this[tP], t) && (this[tP][t] = !1), t7(this, t, u(1, e))
                };
            return a && tV && t7(tM, t, {
                configurable: !0,
                set: n
            }), t3(t, e)
        }).prototype, "toString", function() {
            return tD(this).tag
        }), en(tO, "withoutSetter", function(e) {
            return t3(F(e), e)
        }), l.f = t4, x.f = tK, E.f = t6, e$.f = tS.f = t9, e_.f = tX, tE.f = function(e) {
            return t3(eB(e), e)
        }, a && (tH(tO.prototype, "description", {
            configurable: !0,
            get: function() {
                return tD(this).description
            }
        }), en(tM, "propertyIsEnumerable", t4, {
            unsafe: !0
        }))), eN({
            global: !0,
            wrap: !0,
            forced: !eM,
            sham: !eM
        }, {
            Symbol: tO
        }), tC(tu(t1), function(e) {
            var t, n;
            t = e, b(n = ei.Symbol || (ei.Symbol = {}), t) || tR(n, t, {
                value: tE.f(t)
            })
        }), eN({
            target: tN,
            stat: !0,
            forced: !eM
        }, {
            for: function(e) {
                var t = String(e);
                if (b(tW, t)) return tW[t];
                var n = tO(t);
                return tW[t] = n, tq[n] = t, n
            },
            keyFor: function(e) {
                if (!t2(e)) throw TypeError(e + " is not a symbol");
                if (b(tq, e)) return tq[e]
            },
            useSetter: function() {
                tV = !0
            },
            useSimple: function() {
                tV = !1
            }
        }), eN({
            target: "Object",
            stat: !0,
            forced: !eM,
            sham: !a
        }, {
            create: function(e, t) {
                return void 0 === t ? t$(e) : t5(t$(e), t)
            },
            defineProperty: tK,
            defineProperties: t5,
            getOwnPropertyDescriptor: t6
        }), eN({
            target: "Object",
            stat: !0,
            forced: !eM
        }, {
            getOwnPropertyNames: t9,
            getOwnPropertySymbols: tX
        }), eN({
            target: "Object",
            stat: !0,
            forced: r(function() {
                e_.f(1)
            })
        }, {
            getOwnPropertySymbols: function(e) {
                return e_.f(eT(e))
            }
        }), t0) {
        var tY = !eM || r(function() {
            var e = tO();
            return "[null]" != t0([e]) || "{}" != t0({
                a: e
            }) || "{}" != t0(Object(e))
        });
        eN({
            target: "JSON",
            stat: !0,
            forced: tY
        }, {
            stringify: function(e, t, n) {
                for (var i, r = [e], a = 1; arguments.length > a;) r.push(arguments[a++]);
                if (i = t, (p(t) || void 0 !== e) && !t2(e)) return eI(t) || (t = function(e, t) {
                    if ("function" == typeof i && (t = i.call(this, e, t)), !t2(t)) return t
                }), r[1] = t, t0.apply(null, r)
            }
        })
    }
    tO.prototype[tI] || L(tO.prototype, tI, tO.prototype.valueOf), tL(tO, tN), V[tP] = !0;
    var tG = x.f,
        tJ = i.Symbol;
    if (a && "function" == typeof tJ && (!("description" in tJ.prototype) || void 0 !== tJ().description)) {
        var tQ = {},
            tZ = function() {
                var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                    t = this instanceof tZ ? new tJ(e) : void 0 === e ? tJ() : tJ(e);
                return "" === e && (tQ[t] = !0), t
            };
        ek(tZ, tJ);
        var ne = tZ.prototype = tJ.prototype;
        ne.constructor = tZ;
        var nt = ne.toString,
            nn = "Symbol(test)" == String(tJ("test")),
            ni = /^Symbol\((.*)\)[^)]+$/;
        tG(ne, "description", {
            configurable: !0,
            get: function() {
                var e = p(this) ? this.valueOf() : this,
                    t = nt.call(e);
                if (b(tQ, e)) return "";
                var n = nn ? t.slice(7, -1) : t.replace(ni, "$1");
                return "" === n ? void 0 : n
            }
        }), eN({
            global: !0,
            forced: !0
        }, {
            Symbol: tZ
        })
    }
    var nr = function(e, t, n, i) {
            try {
                return i ? t(R(n)[0], n[1]) : t(n)
            } catch (r) {
                var a = e.return;
                throw void 0 !== a && R(a.call(e)), r
            }
        },
        na = {},
        no = eB("iterator"),
        ns = Array.prototype,
        nl = function(e) {
            return void 0 !== e && (na.Array === e || ns[no] === e)
        },
        nu = {};
    nu[eB("toStringTag")] = "z";
    var nc = "[object z]" === String(nu),
        nd = eB("toStringTag"),
        nf = "Arguments" == d(function() {
            return arguments
        }()),
        nh = nc ? d : function(e) {
            var t, n, i;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                try {
                    return e[t]
                } catch (n) {}
            }(t = Object(e), nd)) ? n : nf ? d(t) : "Object" == (i = d(t)) && "function" == typeof t.callee ? "Arguments" : i
        },
        nv = eB("iterator"),
        ng = function(e) {
            if (null != e) return e[nv] || e["@@iterator"] || na[nh(e)]
        },
        np = eB("iterator"),
        nm = !1;
    try {
        var ny = 0,
            nb = {
                next: function() {
                    return {
                        done: !!ny++
                    }
                },
                return: function() {
                    nm = !0
                }
            };
        nb[np] = function() {
            return this
        }, Array.from(nb, function() {
            throw 2
        })
    } catch (n$) {}
    var n_ = function(e, t) {
            if (!t && !nm) return !1;
            var n = !1;
            try {
                var i = {};
                i[np] = function() {
                    return {
                        next: function() {
                            return {
                                done: n = !0
                            }
                        }
                    }
                }, e(i)
            } catch (r) {}
            return n
        },
        nw = !n_(function(e) {
            Array.from(e)
        });
    eN({
        target: "Array",
        stat: !0,
        forced: nw
    }, {
        from: function(e) {
            var t, n, i, r, a, o, s = eT(e),
                l = "function" == typeof this ? this : Array,
                u = arguments.length,
                c = u > 1 ? arguments[1] : void 0,
                d = void 0 !== c,
                f = ng(s),
                h = 0;
            if (d && (c = e9(c, u > 2 ? arguments[2] : void 0, 2)), null == f || l == Array && nl(f))
                for (n = new l(t = ec(s.length)); t > h; h++) o = d ? c(s[h], h) : s[h], eD(n, h, o);
            else
                for (a = (r = f.call(s)).next, n = new l; !(i = a.call(r)).done; h++) o = d ? nr(r, c, [i.value, h], !0) : i.value, eD(n, h, o);
            return n.length = h, n
        }
    });
    var nk = eg.indexOf,
        nS = [].indexOf,
        nE = !!nS && 1 / [1].indexOf(1, -0) < 0,
        nR = eJ("indexOf"),
        nA = tt("indexOf", {
            ACCESSORS: !0,
            1: 0
        });
    eN({
        target: "Array",
        proto: !0,
        forced: nE || !nR || !nA
    }, {
        indexOf: function(e) {
            return nE ? nS.apply(this, arguments) || 0 : nk(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var nx = e7("splice"),
        nL = tt("splice", {
            ACCESSORS: !0,
            0: 0,
            1: 2
        }),
        nC = Math.max,
        nP = Math.min;
    eN({
        target: "Array",
        proto: !0,
        forced: !nx || !nL
    }, {
        splice: function(e, t) {
            var n, i, r, a, o, s, l = eT(this),
                u = ec(l.length),
                c = eh(e, u),
                d = arguments.length;
            if (0 === d ? n = i = 0 : 1 === d ? (n = 0, i = u - c) : (n = d - 2, i = nP(nC(el(t), 0), u - c)), u + n - i > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
            for (r = ej(l, i), a = 0; a < i; a++)(o = c + a) in l && eD(r, a, l[o]);
            if (r.length = i, n < i) {
                for (a = c; a < u - i; a++) s = a + n, (o = a + i) in l ? l[s] = l[o] : delete l[s];
                for (a = u; a > u - i + n; a--) delete l[a - 1]
            } else if (n > i)
                for (a = u - i; a > c; a--) s = a + n - 1, (o = a + i - 1) in l ? l[s] = l[o] : delete l[s];
            for (a = 0; a < n; a++) l[a + c] = arguments[a + 2];
            return l.length = u - i + n, r
        }
    });
    var nN = x.f,
        nI = Function.prototype,
        nT = nI.toString,
        nD = /^\s*function ([^ (]*)/,
        nM = "name";
    !a || nM in nI || nN(nI, nM, {
        configurable: !0,
        get: function() {
            try {
                return nT.call(this).match(nD)[1]
            } catch (e) {
                return ""
            }
        }
    });
    var nO = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var e, t = !1,
                n = {};
            try {
                (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array
            } catch (i) {}
            return function(n, i) {
                return R(n),
                    function(e) {
                        if (!p(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype")
                    }(i), t ? e.call(n, i) : n.__proto__ = i, n
            }
        }() : void 0),
        n0 = function(e, t, n) {
            var i, r;
            return nO && "function" == typeof(i = t.constructor) && i !== n && p(r = i.prototype) && r !== n.prototype && nO(e, r), e
        },
        nz = "	\n\v\f\r \xa0              　\u2028\u2029\uFEFF",
        nH = "[" + nz + "]",
        nB = RegExp("^" + nH + nH + "*"),
        nU = RegExp(nH + nH + "*$"),
        nj = function(e) {
            return function(t) {
                var n = String(v(t));
                return 1 & e && (n = n.replace(nB, "")), 2 & e && (n = n.replace(nU, "")), n
            }
        },
        nF = {
            start: nj(1),
            end: nj(2),
            trim: nj(3)
        },
        nW = e$.f,
        nq = E.f,
        n1 = x.f,
        n8 = nF.trim,
        nV = "Number",
        n7 = i.Number,
        n3 = n7.prototype,
        n2 = d(t$(n3)) == nV,
        nK = function(e) {
            var t, n, i, r, a, o, s, l, u = m(e, !1);
            if ("string" == typeof u && u.length > 2) {
                if (43 === (t = (u = n8(u)).charCodeAt(0)) || 45 === t) {
                    if (88 === (n = u.charCodeAt(2)) || 120 === n) return NaN
                } else if (48 === t) {
                    switch (u.charCodeAt(1)) {
                        case 66:
                        case 98:
                            i = 2, r = 49;
                            break;
                        case 79:
                        case 111:
                            i = 8, r = 55;
                            break;
                        default:
                            return +u
                    }
                    for (o = (a = u.slice(2)).length, s = 0; s < o; s++)
                        if ((l = a.charCodeAt(s)) < 48 || l > r) return NaN;
                    return parseInt(a, i)
                }
            }
            return +u
        };
    if (eC(nV, !n7(" 0o1") || !n7("0b1") || n7("+0x1"))) {
        for (var n5, n4 = function(e) {
                var t = arguments.length < 1 ? 0 : e,
                    n = this;
                return n instanceof n4 && (n2 ? r(function() {
                    n3.valueOf.call(n)
                }) : d(n) != nV) ? n0(new n7(nK(t)), n, n4) : nK(t)
            }, n6 = a ? nW(n7) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), n9 = 0; n6.length > n9; n9++) b(n7, n5 = n6[n9]) && !b(n4, n5) && n1(n4, n5, nq(n7, n5));
        n4.prototype = n3, n3.constructor = n4, en(i, nV, n4)
    }
    var nX = nc ? ({}).toString : function() {
        return "[object " + nh(this) + "]"
    };
    nc || en(Object.prototype, "toString", nX, {
        unsafe: !0
    });
    var nY, nG, nJ, nQ = i.Promise,
        nZ = eB("species"),
        ie = t(function(e) {
            var t = function(e, t) {
                this.stopped = e, this.result = t
            };
            (e.exports = function(e, n, i, r, a) {
                var o, s, l, u, c, d, f, h = e9(n, i, r ? 2 : 1);
                if (a) o = e;
                else {
                    if ("function" != typeof(s = ng(e))) throw TypeError("Target is not iterable");
                    if (nl(s)) {
                        for (l = 0, u = ec(e.length); u > l; l++)
                            if ((c = r ? h(R(f = e[l])[0], f[1]) : h(e[l])) && c instanceof t) return c;
                        return new t(!1)
                    }
                    o = s.call(e)
                }
                for (d = o.next; !(f = d.call(o)).done;)
                    if ("object" == typeof(c = nr(o, h, f.value, r)) && c && c instanceof t) return c;
                return new t(!1)
            }).stop = function(e) {
                return new t(!0, e)
            }
        }),
        it = eB("species"),
        ii = function(e, t) {
            var n, i = R(e).constructor;
            return void 0 === i || null == (n = R(i)[it]) ? t : e6(n)
        },
        ir = /(iphone|ipod|ipad).*applewebkit/i.test(eF),
        ia = i.location,
        io = i.setImmediate,
        is = i.clearImmediate,
        il = i.process,
        iu = i.MessageChannel,
        ic = i.Dispatch,
        id = 0,
        ih = {},
        iv = function(e) {
            if (ih.hasOwnProperty(e)) {
                var t = ih[e];
                delete ih[e], t()
            }
        },
        ig = function(e) {
            return function() {
                iv(e)
            }
        },
        ip = function(e) {
            iv(e.data)
        },
        im = function(e) {
            i.postMessage(e + "", ia.protocol + "//" + ia.host)
        };
    io && is || (io = function(e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return ih[++id] = function() {
            ("function" == typeof e ? e : Function(e)).apply(void 0, t)
        }, nY(id), id
    }, is = function(e) {
        delete ih[e]
    }, "process" == d(il) ? nY = function(e) {
        il.nextTick(ig(e))
    } : ic && ic.now ? nY = function(e) {
        ic.now(ig(e))
    } : iu && !ir ? (nJ = (nG = new iu).port2, nG.port1.onmessage = ip, nY = e9(nJ.postMessage, nJ, 1)) : !i.addEventListener || "function" != typeof postMessage || i.importScripts || r(im) || "file:" === ia.protocol ? nY = "onreadystatechange" in w("script") ? function(e) {
        tg.appendChild(w("script")).onreadystatechange = function() {
            tg.removeChild(this), iv(e)
        }
    } : function(e) {
        setTimeout(ig(e), 0)
    } : (nY = im, i.addEventListener("message", ip, !1)));
    var iy, ib, i$, i_, iw, ik, iS, iE, iR = {
            set: io,
            clear: is
        },
        iA = E.f,
        ix = iR.set,
        iL = i.MutationObserver || i.WebKitMutationObserver,
        iC = i.process,
        iP = i.Promise,
        iN = "process" == d(iC),
        iI = iA(i, "queueMicrotask"),
        iT = iI && iI.value;
    iT || (iy = function() {
        var e, t;
        for (iN && (e = iC.domain) && e.exit(); ib;) {
            t = ib.fn, ib = ib.next;
            try {
                t()
            } catch (n) {
                throw ib ? i_() : i$ = void 0, n
            }
        }
        i$ = void 0, e && e.enter()
    }, iN ? i_ = function() {
        iC.nextTick(iy)
    } : iL && !ir ? (iw = !0, ik = document.createTextNode(""), new iL(iy).observe(ik, {
        characterData: !0
    }), i_ = function() {
        ik.data = iw = !iw
    }) : iP && iP.resolve ? (iE = (iS = iP.resolve(void 0)).then, i_ = function() {
        iE.call(iS, iy)
    }) : i_ = function() {
        ix.call(i, iy)
    });
    var iD, iM, iO, i0, iz, iH, iB, iU = iT || function(e) {
            var t = {
                fn: e,
                next: void 0
            };
            i$ && (i$.next = t), ib || (ib = t, i_()), i$ = t
        },
        ij = function(e) {
            var t, n;
            this.promise = new e(function(e, i) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = i
            }), this.resolve = e6(t), this.reject = e6(n)
        },
        iF = {
            f: function(e) {
                return new ij(e)
            }
        },
        iW = function(e, t) {
            if (R(e), p(t) && t.constructor === e) return t;
            var n = iF.f(e);
            return (0, n.resolve)(t), n.promise
        },
        iq = function(e) {
            try {
                return {
                    error: !1,
                    value: e()
                }
            } catch (t) {
                return {
                    error: !0,
                    value: t
                }
            }
        },
        i1 = iR.set,
        i8 = eB("species"),
        iV = "Promise",
        i7 = et.get,
        i3 = et.set,
        i2 = et.getterFor(iV),
        iK = nQ,
        i5 = i.TypeError,
        i4 = i.document,
        i6 = i.process,
        i9 = ea("fetch"),
        iX = iF.f,
        iY = iX,
        iG = "process" == d(i6),
        iJ = !!(i4 && i4.createEvent && i.dispatchEvent),
        iQ = "unhandledrejection",
        iZ = eC(iV, function() {
            if (!(O(iK) !== String(iK)) && (66 === e8 || !iG && "function" != typeof PromiseRejectionEvent)) return !0;
            if (e8 >= 51 && /native code/.test(iK)) return !1;
            var e = iK.resolve(1),
                t = function(e) {
                    e(function() {}, function() {})
                };
            return (e.constructor = {})[i8] = t, !(e.then(function() {}) instanceof t)
        }),
        re = iZ || !n_(function(e) {
            iK.all(e).catch(function() {})
        }),
        rt = function(e) {
            var t;
            return !(!p(e) || "function" != typeof(t = e.then)) && t
        },
        rn = function(e, t, n) {
            if (!t.notified) {
                t.notified = !0;
                var i = t.reactions;
                iU(function() {
                    for (var r = t.value, a = 1 == t.state, o = 0; i.length > o;) {
                        var s, l, u, c = i[o++],
                            d = a ? c.ok : c.fail,
                            f = c.resolve,
                            h = c.reject,
                            v = c.domain;
                        try {
                            d ? (a || (2 === t.rejection && ro(e, t), t.rejection = 1), !0 === d ? s = r : (v && v.enter(), s = d(r), v && (v.exit(), u = !0)), s === c.promise ? h(i5("Promise-chain cycle")) : (l = rt(s)) ? l.call(s, f, h) : f(s)) : h(r)
                        } catch (g) {
                            v && !u && v.exit(), h(g)
                        }
                    }
                    t.reactions = [], t.notified = !1, n && !t.rejection && rr(e, t)
                })
            }
        },
        ri = function(e, t, n) {
            var r, a;
            iJ ? ((r = i4.createEvent("Event")).promise = t, r.reason = n, r.initEvent(e, !1, !0), i.dispatchEvent(r)) : r = {
                promise: t,
                reason: n
            }, (a = i["on" + e]) ? a(r) : e === iQ && function(e, t) {
                var n = i.console;
                n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
            }("Unhandled promise rejection", n)
        },
        rr = function(e, t) {
            i1.call(i, function() {
                var n, i = t.value;
                if (ra(t) && (n = iq(function() {
                        iG ? i6.emit("unhandledRejection", i, e) : ri(iQ, e, i)
                    }), t.rejection = iG || ra(t) ? 2 : 1, n.error)) throw n.value
            })
        },
        ra = function(e) {
            return 1 !== e.rejection && !e.parent
        },
        ro = function(e, t) {
            i1.call(i, function() {
                iG ? i6.emit("rejectionHandled", e) : ri("rejectionhandled", e, t.value)
            })
        },
        rs = function(e, t, n, i) {
            return function(r) {
                e(t, n, r, i)
            }
        },
        rl = function(e, t, n, i) {
            t.done || (t.done = !0, i && (t = i), t.value = n, t.state = 2, rn(e, t, !0))
        },
        ru = function(e, t, n, i) {
            if (!t.done) {
                t.done = !0, i && (t = i);
                try {
                    if (e === n) throw i5("Promise can't be resolved itself");
                    var r = rt(n);
                    r ? iU(function() {
                        var i = {
                            done: !1
                        };
                        try {
                            r.call(n, rs(ru, e, i, t), rs(rl, e, i, t))
                        } catch (a) {
                            rl(e, i, a, t)
                        }
                    }) : (t.value = n, t.state = 1, rn(e, t, !1))
                } catch (a) {
                    rl(e, {
                        done: !1
                    }, a, t)
                }
            }
        };
    iZ && (iK = function(e) {
        (function(e, t, n) {
            if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation")
        })(this, iK, iV), e6(e), iD.call(this);
        var t = i7(this);
        try {
            e(rs(ru, this, t), rs(rl, this, t))
        } catch (n) {
            rl(this, t, n)
        }
    }, (iD = function(e) {
        i3(this, {
            type: iV,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0
        })
    }).prototype = function(e, t, n) {
        for (var i in t) en(e, i, t[i], void 0);
        return e
    }(iK.prototype, {
        then: function(e, t) {
            var n = i2(this),
                i = iX(ii(this, iK));
            return i.ok = "function" != typeof e || e, i.fail = "function" == typeof t && t, i.domain = iG ? i6.domain : void 0, n.parent = !0, n.reactions.push(i), 0 != n.state && rn(this, n, !1), i.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }), iM = function() {
        var e = new iD,
            t = i7(e);
        this.promise = e, this.resolve = rs(ru, e, t), this.reject = rs(rl, e, t)
    }, iF.f = iX = function(e) {
        return e === iK || e === iO ? new iM(e) : iY(e)
    }, "function" == typeof nQ && (i0 = nQ.prototype.then, en(nQ.prototype, "then", function(e, t) {
        var n = this;
        return new iK(function(e, t) {
            i0.call(n, e, t)
        }).then(e, t)
    }, {
        unsafe: !0
    }), "function" == typeof i9 && eN({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(e) {
            return iW(iK, i9.apply(i, arguments))
        }
    }))), eN({
        global: !0,
        wrap: !0,
        forced: iZ
    }, {
        Promise: iK
    }), tL(iK, iV, !1), iz = iV, iH = ea(iz), iB = x.f, a && iH && !iH[nZ] && iB(iH, nZ, {
        configurable: !0,
        get: function() {
            return this
        }
    }), iO = ea(iV), eN({
        target: iV,
        stat: !0,
        forced: iZ
    }, {
        reject: function(e) {
            var t = iX(this);
            return t.reject.call(void 0, e), t.promise
        }
    }), eN({
        target: iV,
        stat: !0,
        forced: iZ
    }, {
        resolve: function(e) {
            return iW(this, e)
        }
    }), eN({
        target: iV,
        stat: !0,
        forced: re
    }, {
        all: function(e) {
            var t = this,
                n = iX(t),
                i = n.resolve,
                r = n.reject,
                a = iq(function() {
                    var n = e6(t.resolve),
                        a = [],
                        o = 0,
                        s = 1;
                    ie(e, function(e) {
                        var l = o++,
                            u = !1;
                        a.push(void 0), s++, n.call(t, e).then(function(e) {
                            u || (u = !0, a[l] = e, --s || i(a))
                        }, r)
                    }), --s || i(a)
                });
            return a.error && r(a.value), n.promise
        },
        race: function(e) {
            var t = this,
                n = iX(t),
                i = n.reject,
                r = iq(function() {
                    var r = e6(t.resolve);
                    ie(e, function(e) {
                        r.call(t, e).then(n.resolve, i)
                    })
                });
            return r.error && i(r.value), n.promise
        }
    });
    var rc = function() {
        var e = R(this),
            t = "";
        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
    };

    function rd(e, t) {
        return RegExp(e, t)
    }
    var rf, rh, rv = {
            UNSUPPORTED_Y: r(function() {
                var e = rd("a", "y");
                return e.lastIndex = 2, null != e.exec("abcd")
            }),
            BROKEN_CARET: r(function() {
                var e = rd("^r", "gy");
                return e.lastIndex = 2, null != e.exec("str")
            })
        },
        rg = RegExp.prototype.exec,
        rp = String.prototype.replace,
        rm = rg,
        ry = (rf = /a/, rh = /b*/g, rg.call(rf, "a"), rg.call(rh, "a"), 0 !== rf.lastIndex || 0 !== rh.lastIndex),
        rb = rv.UNSUPPORTED_Y || rv.BROKEN_CARET,
        r$ = void 0 !== /()??/.exec("")[1];
    (ry || r$ || rb) && (rm = function(e) {
        var t, n, i, r, a = this,
            o = rb && a.sticky,
            s = rc.call(a),
            l = a.source,
            u = 0,
            c = e;
        return o && (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"), c = String(e).slice(a.lastIndex), a.lastIndex > 0 && (!a.multiline || a.multiline && "\n" !== e[a.lastIndex - 1]) && (l = "(?: " + l + ")", c = " " + c, u++), n = RegExp("^(?:" + l + ")", s)), r$ && (n = RegExp("^" + l + "$(?!\\s)", s)), ry && (t = a.lastIndex), i = rg.call(o ? n : a, c), o ? i ? (i.input = i.input.slice(u), i[0] = i[0].slice(u), i.index = a.lastIndex, a.lastIndex += i[0].length) : a.lastIndex = 0 : ry && i && (a.lastIndex = a.global ? i.index + i[0].length : t), r$ && i && i.length > 1 && rp.call(i[0], n, function() {
            for (r = 1; r < arguments.length - 2; r++) void 0 === arguments[r] && (i[r] = void 0)
        }), i
    });
    var r_ = rm;
    eN({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== r_
    }, {
        exec: r_
    });
    var rw, rk, rS, rE = function(e) {
            return function(t, n) {
                var i, r, a = String(v(t)),
                    o = el(n),
                    s = a.length;
                return o < 0 || o >= s ? e ? "" : void 0 : (i = a.charCodeAt(o)) < 55296 || i > 56319 || o + 1 === s || (r = a.charCodeAt(o + 1)) < 56320 || r > 57343 ? e ? a.charAt(o) : i : e ? a.slice(o, o + 2) : r - 56320 + (i - 55296 << 10) + 65536
            }
        },
        rR = {
            codeAt: rE(!1),
            charAt: rE(!0)
        },
        rA = !r(function() {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
        }),
        rx = q("IE_PROTO"),
        rL = Object.prototype,
        rC = rA ? Object.getPrototypeOf : function(e) {
            return e = eT(e), b(e, rx) ? e[rx] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? rL : null
        },
        rP = eB("iterator"),
        rN = !1;
    [].keys && ("next" in (rS = [].keys()) ? (rk = rC(rC(rS))) !== Object.prototype && (rw = rk) : rN = !0), null == rw && (rw = {}), b(rw, rP) || L(rw, rP, function() {
        return this
    });
    var rI, rT, rD, rM, rO, r0, rz, rH, rB, rU, rj, rF, rW, rq, r1, r8, rV, r7, r3 = {
            IteratorPrototype: rw,
            BUGGY_SAFARI_ITERATORS: rN
        },
        r2 = r3.IteratorPrototype,
        rK = function() {
            return this
        },
        r5 = r3.IteratorPrototype,
        r4 = r3.BUGGY_SAFARI_ITERATORS,
        r6 = eB("iterator"),
        r9 = "keys",
        rX = "values",
        rY = "entries",
        rG = function() {
            return this
        },
        rJ = rR.charAt,
        rQ = "String Iterator",
        rZ = et.set,
        ae = et.getterFor(rQ),
        at = "String";
    rI = String, rT = function(e) {
        rZ(this, {
            type: rQ,
            string: String(e),
            index: 0
        })
    }, rD = function() {
        var e, t = ae(this),
            n = t.string,
            i = t.index;
        return i >= n.length ? {
            value: void 0,
            done: !0
        } : (e = rJ(n, i), t.index += e.length, {
            value: e,
            done: !1
        })
    }, rz = rT, rH = at, rB = rD, rU = rH + " Iterator", rz.prototype = t$(r2, {
        next: u(1, rB)
    }), tL(rz, rU, !1), na[rU] = rK, rW = function(e) {
        if (e === rM && rV) return rV;
        if (!r4 && e in r1) return r1[e];
        switch (e) {
            case r9:
            case rX:
            case rY:
                return function() {
                    return new rT(this, e)
                }
        }
        return function() {
            return new rT(this)
        }
    }, rq = !1, r1 = rI.prototype, r8 = r1[r6] || r1["@@iterator"] || rM && r1[rM], rV = !r4 && r8 || rW(rM), r7 = "Array" == at && r1.entries || r8, r7 && (rj = rC(r7.call(new rI)), r5 !== Object.prototype && rj.next && (rC(rj) !== r5 && (nO ? nO(rj, r5) : "function" != typeof rj[r6] && L(rj, r6, rG)), tL(rj, at + " Iterator", !0))), rM == rX && r8 && r8.name !== rX && (rq = !0, rV = function() {
        return r8.call(this)
    }), r1[r6] !== rV && L(r1, r6, rV), na[at] = rV, rM && eN({
        target: at,
        proto: !0,
        forced: r4 || rq
    }, rF = {
        values: rW(rX),
        keys: rW(r9),
        entries: rW(rY)
    });
    var an = eB("species"),
        ai = !r(function() {
            var e = /./;
            return e.exec = function() {
                var e = [];
                return e.groups = {
                    a: "7"
                }, e
            }, "7" !== "".replace(e, "$<a>")
        }),
        ar = "$0" === "a".replace(/./, "$0"),
        aa = eB("replace"),
        ao = !!/./ [aa] && "" === /./ [aa]("a", "$0"),
        as = !r(function() {
            var e = /(?:)/,
                t = e.exec;
            e.exec = function() {
                return t.apply(this, arguments)
            };
            var n = "ab".split(e);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
        }),
        al = function(e, t, n, i) {
            var a = eB(e),
                o = !r(function() {
                    var t = {};
                    return t[a] = function() {
                        return 7
                    }, 7 != "" [e](t)
                }),
                s = o && !r(function() {
                    var t = !1,
                        n = /a/;
                    return "split" === e && ((n = {}).constructor = {}, n.constructor[an] = function() {
                        return n
                    }, n.flags = "", n[a] = /./ [a]), n.exec = function() {
                        return t = !0, null
                    }, n[a](""), !t
                });
            if (!o || !s || "replace" === e && (!ai || !ar || ao) || "split" === e && !as) {
                var l = /./ [a],
                    u = n(a, "" [e], function(e, t, n, i, r) {
                        return t.exec === r_ ? o && !r ? {
                            done: !0,
                            value: l.call(t, n, i)
                        } : {
                            done: !0,
                            value: e.call(n, t, i)
                        } : {
                            done: !1
                        }
                    }, {
                        REPLACE_KEEPS_$0: ar,
                        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: ao
                    }),
                    c = u[0],
                    d = u[1];
                en(String.prototype, e, c), en(RegExp.prototype, a, 2 == t ? function(e, t) {
                    return d.call(e, this, t)
                } : function(e) {
                    return d.call(e, this)
                })
            }
            i && L(RegExp.prototype[a], "sham", !0)
        },
        au = rR.charAt,
        ac = function(e, t, n) {
            return t + (n ? au(e, t).length : 1)
        },
        ad = function(e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
                var i = n.call(e, t);
                if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
                return i
            }
            if ("RegExp" !== d(e)) throw TypeError("RegExp#exec called on incompatible receiver");
            return r_.call(e, t)
        };
    al("match", 1, function(e, t, n) {
        return [function(t) {
            var n = v(this),
                i = null == t ? void 0 : t[e];
            return void 0 !== i ? i.call(t, n) : RegExp(t)[e](String(n))
        }, function(e) {
            var i = n(t, e, this);
            if (i.done) return i.value;
            var r = R(e),
                a = String(this);
            if (!r.global) return ad(r, a);
            var o = r.unicode;
            r.lastIndex = 0;
            for (var s, l = [], u = 0; null !== (s = ad(r, a));) {
                var c = String(s[0]);
                l[u] = c, "" === c && (r.lastIndex = ac(a, ec(r.lastIndex), o)), u++
            }
            return 0 === u ? null : l
        }, ]
    });
    var af = eB("match"),
        ah = [].push,
        av = Math.min,
        ag = !r(function() {
            return !RegExp(4294967295, "y")
        });
    al("split", 2, function(e, t, n) {
        var i;
        return i = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, n) {
            var i, r, a = String(v(this)),
                o = void 0 === n ? 4294967295 : n >>> 0;
            if (0 === o) return [];
            if (void 0 === e) return [a];
            if (!p(i = e) || !(void 0 !== (r = i[af]) ? r : "RegExp" == d(i))) return t.call(a, e, o);
            for (var s, l, u, c = [], f = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), h = 0, g = RegExp(e.source, f + "g");
                (s = r_.call(g, a)) && !((l = g.lastIndex) > h && (c.push(a.slice(h, s.index)), s.length > 1 && s.index < a.length && ah.apply(c, s.slice(1)), u = s[0].length, h = l, c.length >= o));) g.lastIndex === s.index && g.lastIndex++;
            return h === a.length ? !u && g.test("") || c.push("") : c.push(a.slice(h)), c.length > o ? c.slice(0, o) : c
        } : "0".split(void 0, 0).length ? function(e, n) {
            return void 0 === e && 0 === n ? [] : t.call(this, e, n)
        } : t, [function(t, n) {
            var r = v(this),
                a = null == t ? void 0 : t[e];
            return void 0 !== a ? a.call(t, r, n) : i.call(String(r), t, n)
        }, function(e, r) {
            var a = n(i, e, this, r, i !== t);
            if (a.done) return a.value;
            var o = R(e),
                s = String(this),
                l = ii(o, RegExp),
                u = o.unicode,
                c = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.unicode ? "u" : "") + (ag ? "y" : "g"),
                d = new l(ag ? o : "^(?:" + o.source + ")", c),
                f = void 0 === r ? 4294967295 : r >>> 0;
            if (0 === f) return [];
            if (0 === s.length) return null === ad(d, s) ? [s] : [];
            for (var h = 0, v = 0, g = []; v < s.length;) {
                d.lastIndex = ag ? v : 0;
                var p, m = ad(d, ag ? s : s.slice(v));
                if (null === m || (p = av(ec(d.lastIndex + (ag ? 0 : v)), s.length)) === h) v = ac(s, v, u);
                else {
                    if (g.push(s.slice(h, v)), g.length === f) return g;
                    for (var y = 1; y <= m.length - 1; y++)
                        if (g.push(m[y]), g.length === f) return g;
                    v = h = p
                }
            }
            return g.push(s.slice(h)), g
        }, ]
    }, !ag);
    var ap, am = nF.trim;
    for (var ay in eN({
            target: "String",
            proto: !0,
            forced: (ap = "trim", r(function() {
                return !!nz[ap]() || "​\x85᠎" != "​\x85᠎" [ap]() || nz[ap].name !== ap
            }))
        }, {
            trim: function() {
                return am(this)
            }
        }), {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }) {
        var ab = i[ay],
            a$ = ab && ab.prototype;
        if (a$ && a$.forEach !== ta) try {
            L(a$, "forEach", ta)
        } catch (a_) {
            a$.forEach = ta
        }
    }

    function aw(e) {
        return (aw = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function ak(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function aS(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function aE(e, t, n) {
        return t && aS(e.prototype, t), n && aS(e, n), e
    }

    function aR(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function aA(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, i)
        }
        return n
    }

    function ax(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? aA(Object(n), !0).forEach(function(t) {
                aR(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : aA(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }

    function aL(e) {
        return function(e) {
            if (Array.isArray(e)) return aC(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return aC(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return aC(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function aC(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    var aP = ".slides section",
        aN = ".slides>section",
        aI = ".slides>section.present>section",
        aT = /registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener/,
        aD = /fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/,
        aM = Math.max,
        aO = Math.min,
        a0 = Math.floor,
        az = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        aH = /\$([$&'`]|\d\d?)/g;
    al("replace", 2, function(e, t, n, i) {
        var r = i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
            a = i.REPLACE_KEEPS_$0,
            o = r ? "$" : "$0";
        return [function(n, i) {
            var r = v(this),
                a = null == n ? void 0 : n[e];
            return void 0 !== a ? a.call(n, r, i) : t.call(String(r), n, i)
        }, function(e, i) {
            if (!r && a || "string" == typeof i && -1 === i.indexOf(o)) {
                var l = n(t, e, this, i);
                if (l.done) return l.value
            }
            var u = R(e),
                c = String(this),
                d = "function" == typeof i;
            d || (i = String(i));
            var f = u.global;
            if (f) {
                var h = u.unicode;
                u.lastIndex = 0
            }
            for (var v = [];;) {
                var g = ad(u, c);
                if (null === g || (v.push(g), !f)) break;
                "" === String(g[0]) && (u.lastIndex = ac(c, ec(u.lastIndex), h))
            }
            for (var p, m = "", y = 0, b = 0; b < v.length; b++) {
                g = v[b];
                for (var $ = String(g[0]), _ = aM(aO(el(g.index), c.length), 0), w = [], k = 1; k < g.length; k++) w.push(void 0 === (p = g[k]) ? p : String(p));
                var S = g.groups;
                if (d) {
                    var E = [$].concat(w, _, c);
                    void 0 !== S && E.push(S);
                    var A = String(i.apply(void 0, E))
                } else A = s($, c, _, w, S, i);
                _ >= y && (m += c.slice(y, _) + A, y = _ + $.length)
            }
            return m + c.slice(y)
        }, ];

        function s(e, n, i, r, a, o) {
            var s = i + e.length,
                l = r.length,
                u = aH;
            return void 0 !== a && (a = eT(a), u = az), t.call(o, u, function(t, o) {
                var u;
                switch (o.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return n.slice(0, i);
                    case "'":
                        return n.slice(s);
                    case "<":
                        u = a[o.slice(1, -1)];
                        break;
                    default:
                        var c = +o;
                        if (0 === c) return t;
                        if (c > l) {
                            var d = a0(c / 10);
                            return 0 === d ? t : d <= l ? void 0 === r[d - 1] ? o.charAt(1) : r[d - 1] + o.charAt(1) : t
                        }
                        u = r[c - 1]
                }
                return void 0 === u ? "" : u
            })
        }
    });
    var aB, aU = Object.is || function(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    };
    al("search", 1, function(e, t, n) {
        return [function(t) {
            var n = v(this),
                i = null == t ? void 0 : t[e];
            return void 0 !== i ? i.call(t, n) : RegExp(t)[e](String(n))
        }, function(e) {
            var i = n(t, e, this);
            if (i.done) return i.value;
            var r = R(e),
                a = String(this),
                o = r.lastIndex;
            aU(o, 0) || (r.lastIndex = 0);
            var s = ad(r, a);
            return aU(r.lastIndex, o) || (r.lastIndex = o), null === s ? -1 : s.index
        }, ]
    });
    var aj = function(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        },
        aF = function(e, t) {
            return Array.from(e.querySelectorAll(t))
        },
        aW = function(e, t, n) {
            n ? e.classList.add(t) : e.classList.remove(t)
        },
        aq = function(e) {
            if ("string" == typeof e) {
                if ("null" === e) return null;
                if ("true" === e) return !0;
                if ("false" === e) return !1;
                if (e.match(/^-?[\d\.]+$/)) return parseFloat(e)
            }
            return e
        },
        a1 = function(e, t) {
            e.style.transform = t
        },
        a8 = function(e, t) {
            var n = e.matches || e.matchesSelector || e.msMatchesSelector;
            return !(!n || !n.call(e, t))
        },
        aV = function(e, t) {
            if ("function" == typeof e.closest) return e.closest(t);
            for (; e;) {
                if (a8(e, t)) return e;
                e = e.parentNode
            }
            return null
        },
        a7 = function(e, t, n) {
            for (var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "", r = e.querySelectorAll("." + n), a = 0; a < r.length; a++) {
                var o = r[a];
                if (o.parentNode === e) return o
            }
            var s = document.createElement(t);
            return s.className = n, s.innerHTML = i, e.appendChild(s), s
        },
        a3 = function(e) {
            var t = document.createElement("style");
            return t.type = "text/css", e && e.length > 0 && (t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e))), document.head.appendChild(t), t
        },
        a2 = function() {
            var e = {};
            for (var t in location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, function(t) {
                    e[t.split("=").shift()] = t.split("=").pop()
                }), e) {
                var n = e[t];
                e[t] = aq(unescape(n))
            }
            return void 0 !== e.dependencies && delete e.dependencies, e
        },
        aK = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            if (e) {
                var n, i = e.style.height;
                return e.style.height = "0px", e.parentNode.style.height = "auto", n = t - e.parentNode.offsetHeight, e.style.height = i + "px", e.parentNode.style.removeProperty("height"), n
            }
            return t
        },
        a5 = navigator.userAgent,
        a4 = document.createElement("div"),
        a6 = /(iphone|ipod|ipad|android)/gi.test(a5) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1,
        a9 = /chrome/i.test(a5) && !/edge/i.test(a5),
        aX = /android/gi.test(a5),
        aY = "zoom" in a4.style && !a6 && (a9 || /Version\/[\d\.]+.*Safari/.test(a5)),
        aG = (aB = t(function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            };
            t.default = function(e) {
                if (e) {
                    var t = function(e) {
                            return [].slice.call(e)
                        },
                        i = 3,
                        r = [],
                        a = null,
                        o = "requestAnimationFrame" in e ? function() {
                            e.cancelAnimationFrame(a), a = e.requestAnimationFrame(function() {
                                return l(r.filter(function(e) {
                                    return e.dirty && e.active
                                }))
                            })
                        } : function() {},
                        s = function(e) {
                            return function() {
                                r.forEach(function(t) {
                                    return t.dirty = e
                                }), o()
                            }
                        },
                        l = function(e) {
                            e.filter(function(e) {
                                return !e.styleComputed
                            }).forEach(function(e) {
                                e.styleComputed = f(e)
                            }), e.filter(h).forEach(v);
                            var t = e.filter(d);
                            t.forEach(c), t.forEach(function(e) {
                                v(e), u(e)
                            }), t.forEach(g)
                        },
                        u = function(e) {
                            return e.dirty = 0
                        },
                        c = function(e) {
                            e.availableWidth = e.element.parentNode.clientWidth, e.currentWidth = e.element.scrollWidth, e.previousFontSize = e.currentFontSize, e.currentFontSize = Math.min(Math.max(e.minSize, e.availableWidth / e.currentWidth * e.previousFontSize), e.maxSize), e.whiteSpace = e.multiLine && e.currentFontSize === e.minSize ? "normal" : "nowrap"
                        },
                        d = function(e) {
                            return 2 !== e.dirty || 2 === e.dirty && e.element.parentNode.clientWidth !== e.availableWidth
                        },
                        f = function(t) {
                            var n = e.getComputedStyle(t.element, null);
                            t.currentFontSize = parseInt(n.getPropertyValue("font-size"), 10), t.display = n.getPropertyValue("display"), t.whiteSpace = n.getPropertyValue("white-space")
                        },
                        h = function(e) {
                            var t = !1;
                            return !e.preStyleTestCompleted && (/inline-/.test(e.display) || (t = !0, e.display = "inline-block"), "nowrap" !== e.whiteSpace && (t = !0, e.whiteSpace = "nowrap"), e.preStyleTestCompleted = !0, t)
                        },
                        v = function(e) {
                            e.originalStyle || (e.originalStyle = e.element.getAttribute("style") || ""), e.element.style.cssText = e.originalStyle + ";white-space:" + e.whiteSpace + ";display:" + e.display + ";font-size:" + e.currentFontSize + "px"
                        },
                        g = function(e) {
                            e.element.dispatchEvent(new CustomEvent("fit", {
                                detail: {
                                    oldValue: e.previousFontSize,
                                    newValue: e.currentFontSize,
                                    scaleFactor: e.currentFontSize / e.previousFontSize
                                }
                            }))
                        },
                        p = function(e, t) {
                            return function() {
                                e.dirty = t, e.active && o()
                            }
                        },
                        m = function(e) {
                            return function() {
                                r = r.filter(function(t) {
                                    return t.element !== e.element
                                }), e.observeMutations && e.observer.disconnect(), e.element.style.cssText = e.originalStyle
                            }
                        },
                        y = function(e) {
                            return function() {
                                e.active || (e.active = !0, o())
                            }
                        },
                        b = function(e) {
                            return function() {
                                return e.active = !1
                            }
                        },
                        $ = function(e) {
                            e.observeMutations && (e.observer = new MutationObserver(p(e, 1)), e.observer.observe(e.element, e.observeMutations))
                        },
                        _ = {
                            minSize: 16,
                            maxSize: 512,
                            multiLine: !0,
                            observeMutations: "MutationObserver" in e && {
                                subtree: !0,
                                childList: !0,
                                characterData: !0
                            }
                        },
                        w = null,
                        k = function() {
                            e.clearTimeout(w), w = e.setTimeout(s(2), R.observeWindowDelay)
                        },
                        S = ["resize", "orientationchange"];
                    return Object.defineProperty(R, "observeWindow", {
                        set: function(t) {
                            var n = (t ? "add" : "remove") + "EventListener";
                            S.forEach(function(t) {
                                e[n](t, k)
                            })
                        }
                    }), R.observeWindow = !0, R.observeWindowDelay = 100, R.fitAll = s(i), R
                }

                function E(e, t) {
                    var a = n({}, _, t),
                        s = e.map(function(e) {
                            var t, o = n({}, a, {
                                element: e,
                                active: !0
                            });
                            return t = o, $(t), t.newbie = !0, t.dirty = !0, r.push(t), {
                                element: e,
                                fit: p(o, i),
                                unfreeze: y(o),
                                freeze: b(o),
                                unsubscribe: m(o)
                            }
                        });
                    return o(), s
                }

                function R(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return "string" == typeof e ? E(t(document.querySelectorAll(e)), n) : E([e], n)[0]
                }
            }("undefined" == typeof window ? null : window)
        })) && aB.__esModule && Object.prototype.hasOwnProperty.call(aB, "default") ? aB.default : aB,
        aJ = function() {
            function e(t) {
                ak(this, e), this.Reveal = t, this.startEmbeddedIframe = this.startEmbeddedIframe.bind(this)
            }
            return aE(e, [{
                key: "shouldPreload",
                value: function(e) {
                    var t = this.Reveal.getConfig().preloadIframes;
                    return "boolean" != typeof t && (t = e.hasAttribute("data-preload")), t
                }
            }, {
                key: "load",
                value: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    e.style.display = this.Reveal.getConfig().display, aF(e, "img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach(function(e) {
                        ("IFRAME" !== e.tagName || t.shouldPreload(e)) && (e.setAttribute("src", e.getAttribute("data-src")), e.setAttribute("data-lazy-loaded", ""), e.removeAttribute("data-src"))
                    }), aF(e, "video, audio").forEach(function(e) {
                        var t = 0;
                        aF(e, "source[data-src]").forEach(function(e) {
                            e.setAttribute("src", e.getAttribute("data-src")), e.removeAttribute("data-src"), e.setAttribute("data-lazy-loaded", ""), t += 1
                        }), a6 && "VIDEO" === e.tagName && e.setAttribute("playsinline", ""), t > 0 && e.load()
                    });
                    var i = e.slideBackgroundElement;
                    if (i) {
                        i.style.display = "block";
                        var r = e.slideBackgroundContentElement,
                            a = e.getAttribute("data-background-iframe");
                        if (!1 === i.hasAttribute("data-loaded")) {
                            i.setAttribute("data-loaded", "true");
                            var o = e.getAttribute("data-background-image"),
                                s = e.getAttribute("data-background-video"),
                                l = e.hasAttribute("data-background-video-loop"),
                                u = e.hasAttribute("data-background-video-muted");
                            if (o) r.style.backgroundImage = "url(" + encodeURI(o) + ")";
                            else if (s && !this.Reveal.isSpeakerNotes()) {
                                var c = document.createElement("video");
                                l && c.setAttribute("loop", ""), u && (c.muted = !0), a6 && (c.muted = !0, c.setAttribute("playsinline", "")), s.split(",").forEach(function(e) {
                                    c.innerHTML += '<source src="' + e + '">'
                                }), r.appendChild(c)
                            } else if (a && !0 !== n.excludeIframes) {
                                var d = document.createElement("iframe");
                                d.setAttribute("allowfullscreen", ""), d.setAttribute("mozallowfullscreen", ""), d.setAttribute("webkitallowfullscreen", ""), d.setAttribute("allow", "autoplay"), d.setAttribute("data-src", a), d.style.width = "100%", d.style.height = "100%", d.style.maxHeight = "100%", d.style.maxWidth = "100%", r.appendChild(d)
                            }
                        }
                        var f = r.querySelector("iframe[data-src]");
                        f && this.shouldPreload(i) && !/autoplay=(1|true|yes)/gi.test(a) && f.getAttribute("src") !== a && f.setAttribute("src", a)
                    }
                    Array.from(e.querySelectorAll(".r-fit-text:not([data-fitted])")).forEach(function(e) {
                        e.dataset.fitted = "", aG(e, {
                            minSize: 24,
                            maxSize: .8 * t.Reveal.getConfig().height,
                            observeMutations: !1,
                            observeWindow: !1
                        })
                    })
                }
            }, {
                key: "unload",
                value: function(e) {
                    e.style.display = "none";
                    var t = this.Reveal.getSlideBackground(e);
                    t && (t.style.display = "none", aF(t, "iframe[src]").forEach(function(e) {
                        e.removeAttribute("src")
                    })), aF(e, "video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach(function(e) {
                        e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src")
                    }), aF(e, "video[data-lazy-loaded] source[src], audio source[src]").forEach(function(e) {
                        e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src")
                    })
                }
            }, {
                key: "formatEmbeddedContent",
                value: function() {
                    var e = this,
                        t = function(t, n, i) {
                            aF(e.Reveal.getSlidesElement(), "iframe[" + t + '*="' + n + '"]').forEach(function(e) {
                                var n = e.getAttribute(t);
                                n && -1 === n.indexOf(i) && e.setAttribute(t, n + (/\?/.test(n) ? "&" : "?") + i)
                            })
                        };
                    t("src", "youtube.com/embed/", "enablejsapi=1"), t("data-src", "youtube.com/embed/", "enablejsapi=1"), t("src", "player.vimeo.com/", "api=1"), t("data-src", "player.vimeo.com/", "api=1")
                }
            }, {
                key: "startEmbeddedContent",
                value: function(e) {
                    var t = this;
                    e && !this.Reveal.isSpeakerNotes() && (aF(e, 'img[src$=".gif"]').forEach(function(e) {
                        e.setAttribute("src", e.getAttribute("src"))
                    }), aF(e, "video, audio").forEach(function(e) {
                        if (!aV(e, ".fragment") || aV(e, ".fragment.visible")) {
                            var n = t.Reveal.getConfig().autoPlayMedia;
                            if ("boolean" != typeof n && (n = e.hasAttribute("data-autoplay") || !!aV(e, ".slide-background")), n && "function" == typeof e.play) {
                                if (e.readyState > 1) t.startEmbeddedMedia({
                                    target: e
                                });
                                else if (a6) {
                                    var i = e.play();
                                    i && "function" == typeof i.catch && !1 === e.controls && i.catch(function() {
                                        e.controls = !0, e.addEventListener("play", function() {
                                            e.controls = !1
                                        })
                                    })
                                } else e.removeEventListener("loadeddata", t.startEmbeddedMedia), e.addEventListener("loadeddata", t.startEmbeddedMedia)
                            }
                        }
                    }), aF(e, "iframe[src]").forEach(function(e) {
                        aV(e, ".fragment") && !aV(e, ".fragment.visible") || t.startEmbeddedIframe({
                            target: e
                        })
                    }), aF(e, "iframe[data-src]").forEach(function(e) {
                        aV(e, ".fragment") && !aV(e, ".fragment.visible") || e.getAttribute("src") !== e.getAttribute("data-src") && (e.removeEventListener("load", t.startEmbeddedIframe), e.addEventListener("load", t.startEmbeddedIframe), e.setAttribute("src", e.getAttribute("data-src")))
                    }))
                }
            }, {
                key: "startEmbeddedMedia",
                value: function(e) {
                    var t = !!aV(e.target, "html"),
                        n = !!aV(e.target, ".present");
                    t && n && (e.target.currentTime = 0, e.target.play()), e.target.removeEventListener("loadeddata", this.startEmbeddedMedia)
                }
            }, {
                key: "startEmbeddedIframe",
                value: function(e) {
                    var t = e.target;
                    if (t && t.contentWindow) {
                        var n = !!aV(e.target, "html"),
                            i = !!aV(e.target, ".present");
                        if (n && i) {
                            var r = this.Reveal.getConfig().autoPlayMedia;
                            "boolean" != typeof r && (r = t.hasAttribute("data-autoplay") || !!aV(t, ".slide-background")), /youtube\.com\/embed\//.test(t.getAttribute("src")) && r ? t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") : /player\.vimeo\.com\//.test(t.getAttribute("src")) && r ? t.contentWindow.postMessage('{"method":"play"}', "*") : t.contentWindow.postMessage("slide:start", "*")
                        }
                    }
                }
            }, {
                key: "stopEmbeddedContent",
                value: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    n = aj({
                        unloadIframes: !0
                    }, n), e && e.parentNode && (aF(e, "video, audio").forEach(function(e) {
                        e.hasAttribute("data-ignore") || "function" != typeof e.pause || (e.setAttribute("data-paused-by-reveal", ""), e.pause())
                    }), aF(e, "iframe").forEach(function(e) {
                        e.contentWindow && e.contentWindow.postMessage("slide:stop", "*"), e.removeEventListener("load", t.startEmbeddedIframe)
                    }), aF(e, 'iframe[src*="youtube.com/embed/"]').forEach(function(e) {
                        !e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
                    }), aF(e, 'iframe[src*="player.vimeo.com/"]').forEach(function(e) {
                        !e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"method":"pause"}', "*")
                    }), !0 === n.unloadIframes && aF(e, "iframe[data-src]").forEach(function(e) {
                        e.setAttribute("src", "about:blank"), e.removeAttribute("src")
                    }))
                }
            }, ]), e
        }(),
        aQ = function() {
            function e(t) {
                ak(this, e), this.Reveal = t
            }
            return aE(e, [{
                key: "render",
                value: function() {
                    this.element = document.createElement("div"), this.element.className = "slide-number", this.Reveal.getRevealElement().appendChild(this.element)
                }
            }, {
                key: "configure",
                value: function(e, t) {
                    var n = "none";
                    e.slideNumber && !this.Reveal.isPrintingPDF() && ("all" === e.showSlideNumber || "speaker" === e.showSlideNumber && this.Reveal.isSpeakerNotes()) && (n = "block"), this.element.style.display = n
                }
            }, {
                key: "update",
                value: function() {
                    this.Reveal.getConfig().slideNumber && this.element && (this.element.innerHTML = this.getSlideNumber())
                }
            }, {
                key: "getSlideNumber",
                value: function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Reveal.getCurrentSlide(),
                        n = this.Reveal.getConfig(),
                        i = "h.v";
                    if ("function" == typeof n.slideNumber) e = n.slideNumber(t);
                    else {
                        "string" == typeof n.slideNumber && (i = n.slideNumber), /c/.test(i) || 1 !== this.Reveal.getHorizontalSlides().length || (i = "c");
                        var r = t && "uncounted" === t.dataset.visibility ? 0 : 1;
                        switch (e = [], i) {
                            case "c":
                                e.push(this.Reveal.getSlidePastCount(t) + r);
                                break;
                            case "c/t":
                                e.push(this.Reveal.getSlidePastCount(t) + r, "/", this.Reveal.getTotalSlides());
                                break;
                            default:
                                var a = this.Reveal.getIndices(t);
                                e.push(a.h + r);
                                var o = "h/v" === i ? "/" : ".";
                                this.Reveal.isVerticalSlide(t) && e.push(o, a.v + 1)
                        }
                    }
                    var s = "#" + this.Reveal.location.getHash(t);
                    return this.formatNumber(e[0], e[1], e[2], s)
                }
            }, {
                key: "formatNumber",
                value: function(e, t, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "#" + this.Reveal.location.getHash();
                    return "number" != typeof n || isNaN(n) ? '<a href="'.concat(i, '">\n					<span class="slide-number-a">').concat(e, "</span>\n					</a>") : '<a href="'.concat(i, '">\n					<span class="slide-number-a">').concat(e, '</span>\n					<span class="slide-number-delimiter">').concat(t, '</span>\n					<span class="slide-number-b">').concat(n, "</span>\n					</a>")
                }
            }, ]), e
        }(),
        aZ = function(e) {
            var t = e.match(/^#([0-9a-f]{3})$/i);
            if (t && t[1]) return {
                r: 17 * parseInt((t = t[1]).charAt(0), 16),
                g: 17 * parseInt(t.charAt(1), 16),
                b: 17 * parseInt(t.charAt(2), 16)
            };
            var n = e.match(/^#([0-9a-f]{6})$/i);
            if (n && n[1]) return {
                r: parseInt((n = n[1]).substr(0, 2), 16),
                g: parseInt(n.substr(2, 2), 16),
                b: parseInt(n.substr(4, 2), 16)
            };
            var i = e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
            if (i) return {
                r: parseInt(i[1], 10),
                g: parseInt(i[2], 10),
                b: parseInt(i[3], 10)
            };
            var r = e.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);
            return r ? {
                r: parseInt(r[1], 10),
                g: parseInt(r[2], 10),
                b: parseInt(r[3], 10),
                a: parseFloat(r[4])
            } : null
        },
        oe = function() {
            function e(t) {
                ak(this, e), this.Reveal = t
            }
            return aE(e, [{
                key: "render",
                value: function() {
                    this.element = document.createElement("div"), this.element.className = "backgrounds", this.Reveal.getRevealElement().appendChild(this.element)
                }
            }, {
                key: "create",
                value: function() {
                    var e = this;
                    this.Reveal.isPrintingPDF(), this.element.innerHTML = "", this.element.classList.add("no-transition"), this.Reveal.getHorizontalSlides().forEach(function(t) {
                        var n = e.createBackground(t, e.element);
                        aF(t, "section").forEach(function(t) {
                            e.createBackground(t, n), n.classList.add("stack")
                        })
                    }), this.Reveal.getConfig().parallaxBackgroundImage ? (this.element.style.backgroundImage = 'url("' + this.Reveal.getConfig().parallaxBackgroundImage + '")', this.element.style.backgroundSize = this.Reveal.getConfig().parallaxBackgroundSize, this.element.style.backgroundRepeat = this.Reveal.getConfig().parallaxBackgroundRepeat, this.element.style.backgroundPosition = this.Reveal.getConfig().parallaxBackgroundPosition, setTimeout(function() {
                        e.Reveal.getRevealElement().classList.add("has-parallax-background")
                    }, 1)) : (this.element.style.backgroundImage = "", this.Reveal.getRevealElement().classList.remove("has-parallax-background"))
                }
            }, {
                key: "createBackground",
                value: function(e, t) {
                    var n = document.createElement("div");
                    n.className = "slide-background " + e.className.replace(/present|past|future/, "");
                    var i = document.createElement("div");
                    return i.className = "slide-background-content", n.appendChild(i), t.appendChild(n), e.slideBackgroundElement = n, e.slideBackgroundContentElement = i, this.sync(e), n
                }
            }, {
                key: "sync",
                value: function(e) {
                    var t = e.slideBackgroundElement,
                        n = e.slideBackgroundContentElement;
                    e.classList.remove("has-dark-background"), e.classList.remove("has-light-background"), t.removeAttribute("data-loaded"), t.removeAttribute("data-background-hash"), t.removeAttribute("data-background-size"), t.removeAttribute("data-background-transition"), t.style.backgroundColor = "", n.style.backgroundSize = "", n.style.backgroundRepeat = "", n.style.backgroundPosition = "", n.style.backgroundImage = "", n.style.opacity = "", n.innerHTML = "";
                    var i = {
                        background: e.getAttribute("data-background"),
                        backgroundSize: e.getAttribute("data-background-size"),
                        backgroundImage: e.getAttribute("data-background-image"),
                        backgroundVideo: e.getAttribute("data-background-video"),
                        backgroundIframe: e.getAttribute("data-background-iframe"),
                        backgroundColor: e.getAttribute("data-background-color"),
                        backgroundRepeat: e.getAttribute("data-background-repeat"),
                        backgroundPosition: e.getAttribute("data-background-position"),
                        backgroundTransition: e.getAttribute("data-background-transition"),
                        backgroundOpacity: e.getAttribute("data-background-opacity")
                    };
                    i.background && (/^(http|file|\/\/)/gi.test(i.background) || /\.(svg|png|jpg|jpeg|gif|bmp)([?#\s]|$)/gi.test(i.background) ? e.setAttribute("data-background-image", i.background) : t.style.background = i.background), (i.background || i.backgroundColor || i.backgroundImage || i.backgroundVideo || i.backgroundIframe) && t.setAttribute("data-background-hash", i.background + i.backgroundSize + i.backgroundImage + i.backgroundVideo + i.backgroundIframe + i.backgroundColor + i.backgroundRepeat + i.backgroundPosition + i.backgroundTransition + i.backgroundOpacity), i.backgroundSize && t.setAttribute("data-background-size", i.backgroundSize), i.backgroundColor && (t.style.backgroundColor = i.backgroundColor), i.backgroundTransition && t.setAttribute("data-background-transition", i.backgroundTransition), e.hasAttribute("data-preload") && t.setAttribute("data-preload", ""), i.backgroundSize && (n.style.backgroundSize = i.backgroundSize), i.backgroundRepeat && (n.style.backgroundRepeat = i.backgroundRepeat), i.backgroundPosition && (n.style.backgroundPosition = i.backgroundPosition), i.backgroundOpacity && (n.style.opacity = i.backgroundOpacity);
                    var r, a = i.backgroundColor;
                    if (!a) {
                        var o = window.getComputedStyle(t);
                        o && o.backgroundColor && (a = o.backgroundColor)
                    }
                    if (a) {
                        var s = aZ(a);
                        s && 0 !== s.a && ("string" == typeof(r = a) && (r = aZ(r)), (r ? (299 * r.r + 587 * r.g + 114 * r.b) / 1e3 : null) < 128 ? e.classList.add("has-dark-background") : e.classList.add("has-light-background"))
                    }
                }
            }, {
                key: "update",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        n = this.Reveal.getCurrentSlide(),
                        i = this.Reveal.getIndices(),
                        r = null,
                        a = this.Reveal.getConfig().rtl ? "future" : "past",
                        o = this.Reveal.getConfig().rtl ? "past" : "future";
                    if (Array.from(this.element.childNodes).forEach(function(e, n) {
                            e.classList.remove("past", "present", "future"), n < i.h ? e.classList.add(a) : n > i.h ? e.classList.add(o) : (e.classList.add("present"), r = e), (t || n === i.h) && aF(e, ".slide-background").forEach(function(e, t) {
                                e.classList.remove("past", "present", "future"), t < i.v ? e.classList.add("past") : t > i.v ? e.classList.add("future") : (e.classList.add("present"), n === i.h && (r = e))
                            })
                        }), this.previousBackground && this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground, {
                            unloadIframes: !this.Reveal.slideContent.shouldPreload(this.previousBackground)
                        }), r) {
                        this.Reveal.slideContent.startEmbeddedContent(r);
                        var s = r.querySelector(".slide-background-content");
                        if (s) {
                            var l = s.style.backgroundImage || "";
                            /\.gif/i.test(l) && (s.style.backgroundImage = "", window.getComputedStyle(s).opacity, s.style.backgroundImage = l)
                        }
                        var u = this.previousBackground ? this.previousBackground.getAttribute("data-background-hash") : null,
                            c = r.getAttribute("data-background-hash");
                        c && c === u && r !== this.previousBackground && this.element.classList.add("no-transition"), this.previousBackground = r
                    }
                    n && ["has-light-background", "has-dark-background"].forEach(function(t) {
                        n.classList.contains(t) ? e.Reveal.getRevealElement().classList.add(t) : e.Reveal.getRevealElement().classList.remove(t)
                    }, this), setTimeout(function() {
                        e.element.classList.remove("no-transition")
                    }, 1)
                }
            }, {
                key: "updateParallax",
                value: function() {
                    var e = this.Reveal.getIndices();
                    if (this.Reveal.getConfig().parallaxBackgroundImage) {
                        var t, n, i = this.Reveal.getHorizontalSlides(),
                            r = this.Reveal.getVerticalSlides(),
                            a = this.element.style.backgroundSize.split(" ");
                        1 === a.length ? t = n = parseInt(a[0], 10) : (t = parseInt(a[0], 10), n = parseInt(a[1], 10));
                        var o, s = this.element.offsetWidth,
                            l = i.length;
                        o = -(("number" == typeof this.Reveal.getConfig().parallaxBackgroundHorizontal ? this.Reveal.getConfig().parallaxBackgroundHorizontal : l > 1 ? (t - s) / (l - 1) : 0) * e.h * 1);
                        var u, c, d = this.element.offsetHeight,
                            f = r.length;
                        u = "number" == typeof this.Reveal.getConfig().parallaxBackgroundVertical ? this.Reveal.getConfig().parallaxBackgroundVertical : (n - d) / (f - 1), c = f > 0 ? u * e.v : 0, this.element.style.backgroundPosition = o + "px " + -c + "px"
                    }
                }
            }, ]), e
        }(),
        ot = eG.filter,
        on = e7("filter"),
        oi = tt("filter");
    eN({
        target: "Array",
        proto: !0,
        forced: !on || !oi
    }, {
        filter: function(e) {
            return ot(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var or = [].join,
        oa = eJ("join", ",");
    eN({
        target: "Array",
        proto: !0,
        forced: h != Object || !oa
    }, {
        join: function(e) {
            return or.call(g(this), void 0 === e ? "," : e)
        }
    });
    var oo = function(e) {
            return function(t, n, i, r) {
                e6(n);
                var a = eT(t),
                    o = h(a),
                    s = ec(a.length),
                    l = e ? s - 1 : 0,
                    u = e ? -1 : 1;
                if (i < 2)
                    for (;;) {
                        if (l in o) {
                            r = o[l], l += u;
                            break
                        }
                        if (l += u, e ? l < 0 : s <= l) throw TypeError("Reduce of empty array with no initial value")
                    }
                for (; e ? l >= 0 : s > l; l += u) l in o && (r = n(r, o[l], l, a));
                return r
            }
        },
        os = {
            left: oo(!1),
            right: oo(!0)
        }.left,
        ol = eJ("reduce"),
        ou = tt("reduce", {
            1: 0
        });
    eN({
        target: "Array",
        proto: !0,
        forced: !ol || !ou
    }, {
        reduce: function(e) {
            return os(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var oc = e7("slice"),
        od = tt("slice", {
            ACCESSORS: !0,
            0: 0,
            1: 2
        }),
        of = eB("species"),
        oh = [].slice,
        ov = Math.max;
    eN({
        target: "Array",
        proto: !0,
        forced: !oc || !od
    }, {
        slice: function(e, t) {
            var n, i, r, a = g(this),
                o = ec(a.length),
                s = eh(e, o),
                l = eh(void 0 === t ? o : t, o);
            if (eI(a) && ("function" == typeof(n = a.constructor) && (n === Array || eI(n.prototype)) ? n = void 0 : p(n) && null === (n = n[of]) && (n = void 0), n === Array || void 0 === n)) return oh.call(a, s, l);
            for (i = new(void 0 === n ? Array : n)(ov(l - s, 0)), r = 0; s < l; s++, r++) s in a && eD(i, r, a[s]);
            return i.length = r, i
        }
    });
    var og = r(function() {
        tu(1)
    });
    eN({
        target: "Object",
        stat: !0,
        forced: og
    }, {
        keys: function(e) {
            return tu(eT(e))
        }
    });
    var op = 0,
        om = function() {
            function e(t) {
                ak(this, e), this.Reveal = t
            }
            return aE(e, [{
                key: "run",
                value: function(e, t) {
                    var n = this;
                    if (this.reset(), e.hasAttribute("data-auto-animate") && t.hasAttribute("data-auto-animate")) {
                        this.autoAnimateStyleSheet = this.autoAnimateStyleSheet || a3();
                        var i = this.getAutoAnimateOptions(t);
                        e.dataset.autoAnimate = "pending", t.dataset.autoAnimate = "pending";
                        var r = this.Reveal.getSlides();
                        i.slideDirection = r.indexOf(t) > r.indexOf(e) ? "forward" : "backward";
                        var a = this.getAutoAnimatableElements(e, t).map(function(e) {
                            return n.autoAnimateElements(e.from, e.to, e.options || {}, i, op++)
                        });
                        if ("false" !== t.dataset.autoAnimateUnmatched && !0 === this.Reveal.getConfig().autoAnimateUnmatched) {
                            var o = .8 * i.duration,
                                s = .2 * i.duration;
                            this.getUnmatchedAutoAnimateElements(t).forEach(function(e) {
                                var t = n.getAutoAnimateOptions(e, i),
                                    r = "unmatched";
                                t.duration === i.duration && t.delay === i.delay || (r = "unmatched-" + op++, a.push('[data-auto-animate="running"] [data-auto-animate-target="'.concat(r, '"] { transition: opacity ').concat(t.duration, "s ease ").concat(t.delay, "s; }"))), e.dataset.autoAnimateTarget = r
                            }, this), a.push('[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity '.concat(o, "s ease ").concat(s, "s; }"))
                        }
                        this.autoAnimateStyleSheet.innerHTML = a.join(""), requestAnimationFrame(function() {
                            n.autoAnimateStyleSheet && (getComputedStyle(n.autoAnimateStyleSheet).fontWeight, t.dataset.autoAnimate = "running")
                        }), this.Reveal.dispatchEvent({
                            type: "autoanimate",
                            data: {
                                fromSlide: e,
                                toSlide: t,
                                sheet: this.autoAnimateStyleSheet
                            }
                        })
                    }
                }
            }, {
                key: "reset",
                value: function() {
                    aF(this.Reveal.getRevealElement(), '[data-auto-animate]:not([data-auto-animate=""])').forEach(function(e) {
                        e.dataset.autoAnimate = ""
                    }), aF(this.Reveal.getRevealElement(), "[data-auto-animate-target]").forEach(function(e) {
                        delete e.dataset.autoAnimateTarget
                    }), this.autoAnimateStyleSheet && this.autoAnimateStyleSheet.parentNode && (this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet), this.autoAnimateStyleSheet = null)
                }
            }, {
                key: "autoAnimateElements",
                value: function(e, t, n, i, r) {
                    e.dataset.autoAnimateTarget = "", t.dataset.autoAnimateTarget = r;
                    var a = this.getAutoAnimateOptions(t, i);
                    void 0 !== n.delay && (a.delay = n.delay), void 0 !== n.duration && (a.duration = n.duration), void 0 !== n.easing && (a.easing = n.easing);
                    var o = this.getAutoAnimatableProperties("from", e, n),
                        s = this.getAutoAnimatableProperties("to", t, n);
                    if (t.classList.contains("fragment") && (delete s.styles.opacity, e.classList.contains("fragment") && (e.className.match(aD) || [""])[0] === (t.className.match(aD) || [""])[0] && "forward" === i.slideDirection && t.classList.add("visible", "disabled")), !1 !== n.translate || !1 !== n.scale) {
                        var l = this.Reveal.getScale(),
                            u = {
                                x: (o.x - s.x) / l,
                                y: (o.y - s.y) / l,
                                scaleX: o.width / s.width,
                                scaleY: o.height / s.height
                            };
                        u.x = Math.round(1e3 * u.x) / 1e3, u.y = Math.round(1e3 * u.y) / 1e3, u.scaleX = Math.round(1e3 * u.scaleX) / 1e3, u.scaleX = Math.round(1e3 * u.scaleX) / 1e3;
                        var c = !1 !== n.translate && (0 !== u.x || 0 !== u.y),
                            d = !1 !== n.scale && (0 !== u.scaleX || 0 !== u.scaleY);
                        if (c || d) {
                            var f = [];
                            c && f.push("translate(".concat(u.x, "px, ").concat(u.y, "px)")), d && f.push("scale(".concat(u.scaleX, ", ").concat(u.scaleY, ")")), o.styles.transform = f.join(" "), o.styles["transform-origin"] = "top left", s.styles.transform = "none"
                        }
                    }
                    for (var h in s.styles) {
                        var v = s.styles[h],
                            g = o.styles[h];
                        v === g ? delete s.styles[h] : (!0 === v.explicitValue && (s.styles[h] = v.value), !0 === g.explicitValue && (o.styles[h] = g.value))
                    }
                    var p = "",
                        m = Object.keys(s.styles);
                    return m.length > 0 && (o.styles.transition = "none", s.styles.transition = "all ".concat(a.duration, "s ").concat(a.easing, " ").concat(a.delay, "s"), s.styles["transition-property"] = m.join(", "), s.styles["will-change"] = m.join(", "), p = '[data-auto-animate-target="' + r + '"] {' + Object.keys(o.styles).map(function(e) {
                        return e + ": " + o.styles[e] + " !important;"
                    }).join("") + '}[data-auto-animate="running"] [data-auto-animate-target="' + r + '"] {' + Object.keys(s.styles).map(function(e) {
                        return e + ": " + s.styles[e] + " !important;"
                    }).join("") + "}"), p
                }
            }, {
                key: "getAutoAnimateOptions",
                value: function(e, t) {
                    var n = {
                        easing: this.Reveal.getConfig().autoAnimateEasing,
                        duration: this.Reveal.getConfig().autoAnimateDuration,
                        delay: 0
                    };
                    if (n = aj(n, t), e.parentNode) {
                        var i = aV(e.parentNode, "[data-auto-animate-target]");
                        i && (n = this.getAutoAnimateOptions(i, n))
                    }
                    return e.dataset.autoAnimateEasing && (n.easing = e.dataset.autoAnimateEasing), e.dataset.autoAnimateDuration && (n.duration = parseFloat(e.dataset.autoAnimateDuration)), e.dataset.autoAnimateDelay && (n.delay = parseFloat(e.dataset.autoAnimateDelay)), n
                }
            }, {
                key: "getAutoAnimatableProperties",
                value: function(e, t, n) {
                    var i, r = this.Reveal.getConfig(),
                        a = {
                            styles: []
                        };
                    if (!1 !== n.translate || !1 !== n.scale) {
                        if ("function" == typeof n.measure) i = n.measure(t);
                        else if (r.center) i = t.getBoundingClientRect();
                        else {
                            var o = this.Reveal.getScale();
                            i = {
                                x: t.offsetLeft * o,
                                y: t.offsetTop * o,
                                width: t.offsetWidth * o,
                                height: t.offsetHeight * o
                            }
                        }
                        a.x = i.x, a.y = i.y, a.width = i.width, a.height = i.height
                    }
                    var s = getComputedStyle(t);
                    return (n.styles || r.autoAnimateStyles).forEach(function(t) {
                        var n;
                        "string" == typeof t && (t = {
                            property: t
                        }), "" !== (n = void 0 !== t.from && "from" === e ? {
                            value: t.from,
                            explicitValue: !0
                        } : void 0 !== t.to && "to" === e ? {
                            value: t.to,
                            explicitValue: !0
                        } : s[t.property]) && (a.styles[t.property] = n)
                    }), a
                }
            }, {
                key: "getAutoAnimatableElements",
                value: function(e, t) {
                    var n = ("function" == typeof this.Reveal.getConfig().autoAnimateMatcher ? this.Reveal.getConfig().autoAnimateMatcher : this.getAutoAnimatePairs).call(this, e, t),
                        i = [];
                    return n.filter(function(e, t) {
                        if (-1 === i.indexOf(e.to)) return i.push(e.to), !0
                    })
                }
            }, {
                key: "getAutoAnimatePairs",
                value: function(e, t) {
                    var n = this,
                        i = [],
                        r = "h1, h2, h3, h4, h5, h6, p, li";
                    return this.findAutoAnimateMatches(i, e, t, "[data-id]", function(e) {
                        return e.nodeName + ":::" + e.getAttribute("data-id")
                    }), this.findAutoAnimateMatches(i, e, t, r, function(e) {
                        return e.nodeName + ":::" + e.innerText
                    }), this.findAutoAnimateMatches(i, e, t, "img, video, iframe", function(e) {
                        return e.nodeName + ":::" + (e.getAttribute("src") || e.getAttribute("data-src"))
                    }), this.findAutoAnimateMatches(i, e, t, "pre", function(e) {
                        return e.nodeName + ":::" + e.innerText
                    }), i.forEach(function(e) {
                        a8(e.from, r) ? e.options = {
                            scale: !1
                        } : a8(e.from, "pre") && (e.options = {
                            scale: !1,
                            styles: ["width", "height"]
                        }, n.findAutoAnimateMatches(i, e.from, e.to, ".hljs .hljs-ln-code", function(e) {
                            return e.textContent
                        }, {
                            scale: !1,
                            styles: [],
                            measure: n.getLocalBoundingBox.bind(n)
                        }), n.findAutoAnimateMatches(i, e.from, e.to, ".hljs .hljs-ln-line[data-line-number]", function(e) {
                            return e.getAttribute("data-line-number")
                        }, {
                            scale: !1,
                            styles: ["width"],
                            measure: n.getLocalBoundingBox.bind(n)
                        }))
                    }, this), i
                }
            }, {
                key: "getLocalBoundingBox",
                value: function(e) {
                    var t = this.Reveal.getScale();
                    return {
                        x: Math.round(e.offsetLeft * t * 100) / 100,
                        y: Math.round(e.offsetTop * t * 100) / 100,
                        width: Math.round(e.offsetWidth * t * 100) / 100,
                        height: Math.round(e.offsetHeight * t * 100) / 100
                    }
                }
            }, {
                key: "findAutoAnimateMatches",
                value: function(e, t, n, i, r, a) {
                    var o = {},
                        s = {};
                    [].slice.call(t.querySelectorAll(i)).forEach(function(e, t) {
                        var n = r(e);
                        "string" == typeof n && n.length && (o[n] = o[n] || [], o[n].push(e))
                    }), [].slice.call(n.querySelectorAll(i)).forEach(function(t, n) {
                        var i, l = r(t);
                        if (s[l] = s[l] || [], s[l].push(t), o[l]) {
                            var u = s[l].length - 1,
                                c = o[l].length - 1;
                            o[l][u] ? (i = o[l][u], o[l][u] = null) : o[l][c] && (i = o[l][c], o[l][c] = null)
                        }
                        i && e.push({
                            from: i,
                            to: t,
                            options: a
                        })
                    })
                }
            }, {
                key: "getUnmatchedAutoAnimateElements",
                value: function(e) {
                    var t = this;
                    return [].slice.call(e.children).reduce(function(e, n) {
                        var i = n.querySelector("[data-auto-animate-target]");
                        return n.hasAttribute("data-auto-animate-target") || i || e.push(n), n.querySelector("[data-auto-animate-target]") && (e = e.concat(t.getUnmatchedAutoAnimateElements(n))), e
                    }, [])
                }
            }, ]), e
        }(),
        oy = function() {
            function e(t) {
                ak(this, e), this.Reveal = t
            }
            return aE(e, [{
                key: "configure",
                value: function(e, t) {
                    !1 === e.fragments ? this.disable() : !1 === t.fragments && this.enable()
                }
            }, {
                key: "disable",
                value: function() {
                    aF(this.Reveal.getSlidesElement(), ".fragment").forEach(function(e) {
                        e.classList.add("visible"), e.classList.remove("current-fragment")
                    })
                }
            }, {
                key: "enable",
                value: function() {
                    aF(this.Reveal.getSlidesElement(), ".fragment").forEach(function(e) {
                        e.classList.remove("visible"), e.classList.remove("current-fragment")
                    })
                }
            }, {
                key: "availableRoutes",
                value: function() {
                    var e = this.Reveal.getCurrentSlide();
                    if (e && this.Reveal.getConfig().fragments) {
                        var t = e.querySelectorAll(".fragment:not(.disabled)"),
                            n = e.querySelectorAll(".fragment:not(.disabled):not(.visible)");
                        return {
                            prev: t.length - n.length > 0,
                            next: !!n.length
                        }
                    }
                    return {
                        prev: !1,
                        next: !1
                    }
                }
            }, {
                key: "sort",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    e = Array.from(e);
                    var n = [],
                        i = [],
                        r = [];
                    e.forEach(function(e) {
                        if (e.hasAttribute("data-fragment-index")) {
                            var t = parseInt(e.getAttribute("data-fragment-index"), 10);
                            n[t] || (n[t] = []), n[t].push(e)
                        } else i.push([e])
                    });
                    var a = 0;
                    return (n = n.concat(i)).forEach(function(e) {
                        e.forEach(function(e) {
                            r.push(e), e.setAttribute("data-fragment-index", a)
                        }), a++
                    }), !0 === t ? n : r
                }
            }, {
                key: "sortAll",
                value: function() {
                    var e = this;
                    this.Reveal.getHorizontalSlides().forEach(function(t) {
                        var n = aF(t, "section");
                        n.forEach(function(t, n) {
                            e.sort(t.querySelectorAll(".fragment"))
                        }, e), 0 === n.length && e.sort(t.querySelectorAll(".fragment"))
                    })
                }
            }, {
                key: "update",
                value: function(e, t) {
                    var n = this,
                        i = {
                            shown: [],
                            hidden: []
                        },
                        r = this.Reveal.getCurrentSlide();
                    if (r && this.Reveal.getConfig().fragments && (t = t || this.sort(r.querySelectorAll(".fragment"))).length) {
                        var a = 0;
                        if ("number" != typeof e) {
                            var o = this.sort(r.querySelectorAll(".fragment.visible")).pop();
                            o && (e = parseInt(o.getAttribute("data-fragment-index") || 0, 10))
                        }
                        Array.from(t).forEach(function(t, r) {
                            if (t.hasAttribute("data-fragment-index") && (r = parseInt(t.getAttribute("data-fragment-index"), 10)), a = Math.max(a, r), r <= e) {
                                var o = t.classList.contains("visible");
                                t.classList.add("visible"), t.classList.remove("current-fragment"), r === e && (n.Reveal.announceStatus(n.Reveal.getStatusText(t)), t.classList.add("current-fragment"), n.Reveal.slideContent.startEmbeddedContent(t)), o || (i.shown.push(t), n.Reveal.dispatchEvent({
                                    target: t,
                                    type: "visible",
                                    bubbles: !1
                                }))
                            } else {
                                var s = t.classList.contains("visible");
                                t.classList.remove("visible"), t.classList.remove("current-fragment"), s && (i.hidden.push(t), n.Reveal.dispatchEvent({
                                    target: t,
                                    type: "hidden",
                                    bubbles: !1
                                }))
                            }
                        }), e = Math.max(Math.min(e = "number" == typeof e ? e : -1, a), -1), r.setAttribute("data-fragment", e)
                    }
                    return i
                }
            }, {
                key: "sync",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Reveal.getCurrentSlide();
                    return this.sort(e.querySelectorAll(".fragment"))
                }
            }, {
                key: "goto",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = this.Reveal.getCurrentSlide();
                    if (n && this.Reveal.getConfig().fragments) {
                        var i = this.sort(n.querySelectorAll(".fragment:not(.disabled)"));
                        if (i.length) {
                            if ("number" != typeof e) {
                                var r = this.sort(n.querySelectorAll(".fragment:not(.disabled).visible")).pop();
                                e = r ? parseInt(r.getAttribute("data-fragment-index") || 0, 10) : -1
                            }
                            e += t;
                            var a = this.update(e, i);
                            return a.hidden.length && this.Reveal.dispatchEvent({
                                type: "fragmenthidden",
                                data: {
                                    fragment: a.hidden[0],
                                    fragments: a.hidden
                                }
                            }), a.shown.length && this.Reveal.dispatchEvent({
                                type: "fragmentshown",
                                data: {
                                    fragment: a.shown[0],
                                    fragments: a.shown
                                }
                            }), this.Reveal.controls.update(), this.Reveal.progress.update(), this.Reveal.getConfig().fragmentInURL && this.Reveal.location.writeURL(), !(!a.shown.length && !a.hidden.length)
                        }
                    }
                    return !1
                }
            }, {
                key: "next",
                value: function() {
                    return this.goto(null, 1)
                }
            }, {
                key: "prev",
                value: function() {
                    return this.goto(null, -1)
                }
            }, ]), e
        }(),
        ob = function() {
            function e(t) {
                ak(this, e), this.Reveal = t, this.active = !1, this.onSlideClicked = this.onSlideClicked.bind(this)
            }
            return aE(e, [{
                key: "activate",
                value: function() {
                    var e = this;
                    if (this.Reveal.getConfig().overview && !this.isActive()) {
                        this.active = !0, this.Reveal.getRevealElement().classList.add("overview"), this.Reveal.cancelAutoSlide(), this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()), aF(this.Reveal.getRevealElement(), aP).forEach(function(t) {
                            t.classList.contains("stack") || t.addEventListener("click", e.onSlideClicked, !0)
                        });
                        var t = this.Reveal.getComputedSlideSize();
                        this.overviewSlideWidth = t.width + 70, this.overviewSlideHeight = t.height + 70, this.Reveal.getConfig().rtl && (this.overviewSlideWidth = -this.overviewSlideWidth), this.Reveal.updateSlidesVisibility(), this.layout(), this.update(), this.Reveal.layout();
                        var n = this.Reveal.getIndices();
                        this.Reveal.dispatchEvent({
                            type: "overviewshown",
                            data: {
                                indexh: n.h,
                                indexv: n.v,
                                currentSlide: this.Reveal.getCurrentSlide()
                            }
                        })
                    }
                }
            }, {
                key: "layout",
                value: function() {
                    var e = this;
                    this.Reveal.getHorizontalSlides().forEach(function(t, n) {
                        t.setAttribute("data-index-h", n), a1(t, "translate3d(" + n * e.overviewSlideWidth + "px, 0, 0)"), t.classList.contains("stack") && aF(t, "section").forEach(function(t, i) {
                            t.setAttribute("data-index-h", n), t.setAttribute("data-index-v", i), a1(t, "translate3d(0, " + i * e.overviewSlideHeight + "px, 0)")
                        })
                    }), Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach(function(t, n) {
                        a1(t, "translate3d(" + n * e.overviewSlideWidth + "px, 0, 0)"), aF(t, ".slide-background").forEach(function(t, n) {
                            a1(t, "translate3d(0, " + n * e.overviewSlideHeight + "px, 0)")
                        })
                    })
                }
            }, {
                key: "update",
                value: function() {
                    var e = Math.min(window.innerWidth, window.innerHeight),
                        t = this.Reveal.getIndices();
                    this.Reveal.transformSlides({
                        overview: ["scale(" + Math.max(e / 5, 150) / e + ")", "translateX(" + -t.h * this.overviewSlideWidth + "px)", "translateY(" + -t.v * this.overviewSlideHeight + "px)", ].join(" ")
                    })
                }
            }, {
                key: "deactivate",
                value: function() {
                    var e = this;
                    if (this.Reveal.getConfig().overview) {
                        this.active = !1, this.Reveal.getRevealElement().classList.remove("overview"), this.Reveal.getRevealElement().classList.add("overview-deactivating"), setTimeout(function() {
                            e.Reveal.getRevealElement().classList.remove("overview-deactivating")
                        }, 1), this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()), aF(this.Reveal.getRevealElement(), aP).forEach(function(t) {
                            a1(t, ""), t.removeEventListener("click", e.onSlideClicked, !0)
                        }), aF(this.Reveal.getBackgroundsElement(), ".slide-background").forEach(function(e) {
                            a1(e, "")
                        }), this.Reveal.transformSlides({
                            overview: ""
                        });
                        var t = this.Reveal.getIndices();
                        this.Reveal.slide(t.h, t.v), this.Reveal.layout(), this.Reveal.cueAutoSlide(), this.Reveal.dispatchEvent({
                            type: "overviewhidden",
                            data: {
                                indexh: t.h,
                                indexv: t.v,
                                currentSlide: this.Reveal.getCurrentSlide()
                            }
                        })
                    }
                }
            }, {
                key: "toggle",
                value: function(e) {
                    "boolean" == typeof e ? e ? this.activate() : this.deactivate() : this.isActive() ? this.deactivate() : this.activate()
                }
            }, {
                key: "isActive",
                value: function() {
                    return this.active
                }
            }, {
                key: "onSlideClicked",
                value: function(e) {
                    if (this.isActive()) {
                        e.preventDefault();
                        for (var t = e.target; t && !t.nodeName.match(/section/gi);) t = t.parentNode;
                        if (t && !t.classList.contains("disabled") && (this.deactivate(), t.nodeName.match(/section/gi))) {
                            var n = parseInt(t.getAttribute("data-index-h"), 10),
                                i = parseInt(t.getAttribute("data-index-v"), 10);
                            this.Reveal.slide(n, i)
                        }
                    }
                }
            }, ]), e
        }(),
        o$ = function() {
            function e(t) {
                ak(this, e), this.Reveal = t, this.shortcuts = {}, this.bindings = {}, this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this), this.onDocumentKeyPress = this.onDocumentKeyPress.bind(this)
            }
            return aE(e, [{
                key: "configure",
                value: function(e, t) {
                    "linear" === e.navigationMode ? (this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"] = "Next slide", this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"] = "Previous slide") : (this.shortcuts["N  ,  SPACE"] = "Next slide", this.shortcuts.P = "Previous slide", this.shortcuts["&#8592;  ,  H"] = "Navigate left", this.shortcuts["&#8594;  ,  L"] = "Navigate right", this.shortcuts["&#8593;  ,  K"] = "Navigate up", this.shortcuts["&#8595;  ,  J"] = "Navigate down"), this.shortcuts["Home  ,  Shift &#8592;"] = "First slide", this.shortcuts["End  ,  Shift &#8594;"] = "Last slide", this.shortcuts["B  ,  ."] = "Pause", this.shortcuts.F = "Fullscreen", this.shortcuts["ESC, O"] = "Slide overview"
                }
            }, {
                key: "bind",
                value: function() {
                    document.addEventListener("keydown", this.onDocumentKeyDown, !1), document.addEventListener("keypress", this.onDocumentKeyPress, !1)
                }
            }, {
                key: "unbind",
                value: function() {
                    document.removeEventListener("keydown", this.onDocumentKeyDown, !1), document.removeEventListener("keypress", this.onDocumentKeyPress, !1)
                }
            }, {
                key: "addKeyBinding",
                value: function(e, t) {
                    "object" === aw(e) && e.keyCode ? this.bindings[e.keyCode] = {
                        callback: t,
                        key: e.key,
                        description: e.description
                    } : this.bindings[e] = {
                        callback: t,
                        key: null,
                        description: null
                    }
                }
            }, {
                key: "removeKeyBinding",
                value: function(e) {
                    delete this.bindings[e]
                }
            }, {
                key: "triggerKey",
                value: function(e) {
                    this.onDocumentKeyDown({
                        keyCode: e
                    })
                }
            }, {
                key: "registerKeyboardShortcut",
                value: function(e, t) {
                    this.shortcuts[e] = t
                }
            }, {
                key: "getShortcuts",
                value: function() {
                    return this.shortcuts
                }
            }, {
                key: "getBindings",
                value: function() {
                    return this.bindings
                }
            }, {
                key: "onDocumentKeyPress",
                value: function(e) {
                    e.shiftKey && 63 === e.charCode && this.Reveal.toggleHelp()
                }
            }, {
                key: "onDocumentKeyDown",
                value: function(e) {
                    var t = this.Reveal.getConfig();
                    if ("function" == typeof t.keyboardCondition && !1 === t.keyboardCondition(e) || "focused" === t.keyboardCondition && !this.Reveal.isFocused()) return !0;
                    var n = e.keyCode,
                        i = !this.Reveal.isAutoSliding();
                    this.Reveal.onUserInput(e);
                    var r = document.activeElement && !0 === document.activeElement.isContentEditable,
                        a = document.activeElement && document.activeElement.tagName && /input|textarea/i.test(document.activeElement.tagName),
                        o = document.activeElement && document.activeElement.className && /speaker-notes/i.test(document.activeElement.className),
                        s = e.shiftKey && 32 === e.keyCode,
                        l = e.shiftKey && 37 === n,
                        u = e.shiftKey && 39 === n,
                        c = !s && !l && !u && (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey);
                    if (!(r || a || o || c)) {
                        var d, f = [66, 86, 190, 191];
                        if ("object" === aw(t.keyboard))
                            for (d in t.keyboard) "togglePause" === t.keyboard[d] && f.push(parseInt(d, 10));
                        if (this.Reveal.isPaused() && -1 === f.indexOf(n)) return !1;
                        var h, v, g = "linear" === t.navigationMode || !this.Reveal.hasHorizontalSlides() || !this.Reveal.hasVerticalSlides(),
                            p = !1;
                        if ("object" === aw(t.keyboard)) {
                            for (d in t.keyboard)
                                if (parseInt(d, 10) === n) {
                                    var m = t.keyboard[d];
                                    "function" == typeof m ? m.apply(null, [e]) : "string" == typeof m && "function" == typeof this.Reveal[m] && this.Reveal[m].call(), p = !0
                                }
                        }
                        if (!1 === p) {
                            for (d in this.bindings)
                                if (parseInt(d, 10) === n) {
                                    var y = this.bindings[d].callback;
                                    "function" == typeof y ? y.apply(null, [e]) : "string" == typeof y && "function" == typeof this.Reveal[y] && this.Reveal[y].call(), p = !0
                                }
                        }!1 === p && (p = !0, 80 === n || 33 === n ? this.Reveal.prev() : 78 === n || 34 === n ? this.Reveal.next() : 72 === n || 37 === n ? l ? this.Reveal.slide(0) : !this.Reveal.overview.isActive() && g ? this.Reveal.prev() : this.Reveal.left() : 76 === n || 39 === n ? u ? this.Reveal.slide(Number.MAX_VALUE) : !this.Reveal.overview.isActive() && g ? this.Reveal.next() : this.Reveal.right() : 75 === n || 38 === n ? !this.Reveal.overview.isActive() && g ? this.Reveal.prev() : this.Reveal.up() : 74 === n || 40 === n ? !this.Reveal.overview.isActive() && g ? this.Reveal.next() : this.Reveal.down() : 36 === n ? this.Reveal.slide(0) : 35 === n ? this.Reveal.slide(Number.MAX_VALUE) : 32 === n ? (this.Reveal.overview.isActive() && this.Reveal.overview.deactivate(), e.shiftKey ? this.Reveal.prev() : this.Reveal.next()) : 58 === n || 59 === n || 66 === n || 86 === n || 190 === n || 191 === n ? this.Reveal.togglePause() : 70 === n ? (v = (h = (h = t.embedded ? this.Reveal.getViewportElement() : document.documentElement) || document.documentElement).requestFullscreen || h.webkitRequestFullscreen || h.webkitRequestFullScreen || h.mozRequestFullScreen || h.msRequestFullscreen) && v.apply(h) : 65 === n ? t.autoSlideStoppable && this.Reveal.toggleAutoSlide(i) : p = !1), p ? e.preventDefault && e.preventDefault() : 27 !== n && 79 !== n || (!1 === this.Reveal.closeOverlay() && this.Reveal.overview.toggle(), e.preventDefault && e.preventDefault()), this.Reveal.cueAutoSlide()
                    }
                }
            }, ]), e
        }(),
        o_ = function() {
            function e(t) {
                ak(this, e), this.Reveal = t, this.writeURLTimeout = 0, this.onWindowHashChange = this.onWindowHashChange.bind(this)
            }
            return aE(e, [{
                key: "bind",
                value: function() {
                    window.addEventListener("hashchange", this.onWindowHashChange, !1)
                }
            }, {
                key: "unbind",
                value: function() {
                    window.removeEventListener("hashchange", this.onWindowHashChange, !1)
                }
            }, {
                key: "readURL",
                value: function() {
                    var e = this.Reveal.getConfig(),
                        t = this.Reveal.getIndices(),
                        n = this.Reveal.getCurrentSlide(),
                        i = window.location.hash,
                        r = i.slice(2).split("/"),
                        a = i.replace(/#\/?/gi, "");
                    if (!/^[0-9]*$/.test(r[0]) && a.length) {
                        /\/[-\d]+$/g.test(a) && (l = parseInt(a.split("/").pop(), 10), l = isNaN(l) ? void 0 : l, a = a.split("/").shift());
                        try {
                            s = document.getElementById(decodeURIComponent(a))
                        } catch (o) {}
                        var s, l, u = !!n && n.getAttribute("id") === a;
                        if (s) {
                            if (!u || void 0 !== l) {
                                var c = this.Reveal.getIndices(s);
                                this.Reveal.slide(c.h, c.v, l)
                            }
                        } else this.Reveal.slide(t.h || 0, t.v || 0)
                    } else {
                        var d, f = e.hashOneBasedIndex ? 1 : 0,
                            h = parseInt(r[0], 10) - f || 0,
                            v = parseInt(r[1], 10) - f || 0;
                        e.fragmentInURL && (d = parseInt(r[2], 10), isNaN(d) && (d = void 0)), h === t.h && v === t.v && void 0 === d || this.Reveal.slide(h, v, d)
                    }
                }
            }, {
                key: "writeURL",
                value: function(e) {
                    var t = this.Reveal.getConfig(),
                        n = this.Reveal.getCurrentSlide();
                    if (clearTimeout(this.writeURLTimeout), "number" == typeof e) this.writeURLTimeout = setTimeout(this.writeURL, e);
                    else if (n) {
                        var i = this.getHash();
                        t.history ? window.location.hash = i : t.hash && ("/" === i ? window.history.replaceState(null, null, window.location.pathname + window.location.search) : window.history.replaceState(null, null, "#" + i))
                    }
                }
            }, {
                key: "getHash",
                value: function(e) {
                    var t = "/",
                        n = e || this.Reveal.getCurrentSlide(),
                        i = n ? n.getAttribute("id") : null;
                    i && (i = encodeURIComponent(i));
                    var r = this.Reveal.getIndices(e);
                    if (this.Reveal.getConfig().fragmentInURL || (r.f = void 0), "string" == typeof i && i.length) t = "/" + i, r.f >= 0 && (t += "/" + r.f);
                    else {
                        var a = this.Reveal.getConfig().hashOneBasedIndex ? 1 : 0;
                        (r.h > 0 || r.v > 0 || r.f >= 0) && (t += r.h + a), (r.v > 0 || r.f >= 0) && (t += "/" + (r.v + a)), r.f >= 0 && (t += "/" + r.f)
                    }
                    return t
                }
            }, {
                key: "onWindowHashChange",
                value: function(e) {
                    this.readURL()
                }
            }, ]), e
        }(),
        ow = function() {
            function e(t) {
                ak(this, e), this.Reveal = t, this.onNavigateLeftClicked = this.onNavigateLeftClicked.bind(this), this.onNavigateRightClicked = this.onNavigateRightClicked.bind(this), this.onNavigateUpClicked = this.onNavigateUpClicked.bind(this), this.onNavigateDownClicked = this.onNavigateDownClicked.bind(this), this.onNavigatePrevClicked = this.onNavigatePrevClicked.bind(this), this.onNavigateNextClicked = this.onNavigateNextClicked.bind(this)
            }
            return aE(e, [{
                key: "render",
                value: function() {
                    var e = this.Reveal.getConfig().rtl,
                        t = this.Reveal.getRevealElement();
                    this.element = document.createElement("aside"), this.element.className = "controls", this.element.innerHTML = '<button class="navigate-left" aria-label="'.concat(e ? "next slide" : "previous slide", '"><div class="controls-arrow"></div></button>\n			<button class="navigate-right" aria-label="').concat(e ? "previous slide" : "next slide", '"><div class="controls-arrow"></div></button>\n			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>\n			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>'), this.Reveal.getRevealElement().appendChild(this.element), this.controlsLeft = aF(t, ".navigate-left"), this.controlsRight = aF(t, ".navigate-right"), this.controlsUp = aF(t, ".navigate-up"), this.controlsDown = aF(t, ".navigate-down"), this.controlsPrev = aF(t, ".navigate-prev"), this.controlsNext = aF(t, ".navigate-next"), this.controlsRightArrow = this.element.querySelector(".navigate-right"), this.controlsLeftArrow = this.element.querySelector(".navigate-left"), this.controlsDownArrow = this.element.querySelector(".navigate-down")
                }
            }, {
                key: "configure",
                value: function(e, t) {
                    this.element.style.display = e.controls ? "block" : "none", this.element.setAttribute("data-controls-layout", e.controlsLayout), this.element.setAttribute("data-controls-back-arrows", e.controlsBackArrows)
                }
            }, {
                key: "bind",
                value: function() {
                    var e = this,
                        t = ["touchstart", "click"];
                    aX && (t = ["touchstart"]), t.forEach(function(t) {
                        e.controlsLeft.forEach(function(n) {
                            return n.addEventListener(t, e.onNavigateLeftClicked, !1)
                        }), e.controlsRight.forEach(function(n) {
                            return n.addEventListener(t, e.onNavigateRightClicked, !1)
                        }), e.controlsUp.forEach(function(n) {
                            return n.addEventListener(t, e.onNavigateUpClicked, !1)
                        }), e.controlsDown.forEach(function(n) {
                            return n.addEventListener(t, e.onNavigateDownClicked, !1)
                        }), e.controlsPrev.forEach(function(n) {
                            return n.addEventListener(t, e.onNavigatePrevClicked, !1)
                        }), e.controlsNext.forEach(function(n) {
                            return n.addEventListener(t, e.onNavigateNextClicked, !1)
                        })
                    })
                }
            }, {
                key: "unbind",
                value: function() {
                    var e = this;
                    ["touchstart", "click"].forEach(function(t) {
                        e.controlsLeft.forEach(function(n) {
                            return n.removeEventListener(t, e.onNavigateLeftClicked, !1)
                        }), e.controlsRight.forEach(function(n) {
                            return n.removeEventListener(t, e.onNavigateRightClicked, !1)
                        }), e.controlsUp.forEach(function(n) {
                            return n.removeEventListener(t, e.onNavigateUpClicked, !1)
                        }), e.controlsDown.forEach(function(n) {
                            return n.removeEventListener(t, e.onNavigateDownClicked, !1)
                        }), e.controlsPrev.forEach(function(n) {
                            return n.removeEventListener(t, e.onNavigatePrevClicked, !1)
                        }), e.controlsNext.forEach(function(n) {
                            return n.removeEventListener(t, e.onNavigateNextClicked, !1)
                        })
                    })
                }
            }, {
                key: "update",
                value: function() {
                    var e = this.Reveal.availableRoutes();
                    [].concat(aL(this.controlsLeft), aL(this.controlsRight), aL(this.controlsUp), aL(this.controlsDown), aL(this.controlsPrev), aL(this.controlsNext)).forEach(function(e) {
                        e.classList.remove("enabled", "fragmented"), e.setAttribute("disabled", "disabled")
                    }), e.left && this.controlsLeft.forEach(function(e) {
                        e.classList.add("enabled"), e.removeAttribute("disabled")
                    }), e.right && this.controlsRight.forEach(function(e) {
                        e.classList.add("enabled"), e.removeAttribute("disabled")
                    }), e.up && this.controlsUp.forEach(function(e) {
                        e.classList.add("enabled"), e.removeAttribute("disabled")
                    }), e.down && this.controlsDown.forEach(function(e) {
                        e.classList.add("enabled"), e.removeAttribute("disabled")
                    }), (e.left || e.up) && this.controlsPrev.forEach(function(e) {
                        e.classList.add("enabled"), e.removeAttribute("disabled")
                    }), (e.right || e.down) && this.controlsNext.forEach(function(e) {
                        e.classList.add("enabled"), e.removeAttribute("disabled")
                    });
                    var t = this.Reveal.getCurrentSlide();
                    if (t) {
                        var n = this.Reveal.fragments.availableRoutes();
                        n.prev && this.controlsPrev.forEach(function(e) {
                            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
                        }), n.next && this.controlsNext.forEach(function(e) {
                            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
                        }), this.Reveal.isVerticalSlide(t) ? (n.prev && this.controlsUp.forEach(function(e) {
                            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
                        }), n.next && this.controlsDown.forEach(function(e) {
                            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
                        })) : (n.prev && this.controlsLeft.forEach(function(e) {
                            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
                        }), n.next && this.controlsRight.forEach(function(e) {
                            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
                        }))
                    }
                    if (this.Reveal.getConfig().controlsTutorial) {
                        var i = this.Reveal.getIndices();
                        !this.Reveal.hasNavigatedVertically() && e.down ? this.controlsDownArrow.classList.add("highlight") : (this.controlsDownArrow.classList.remove("highlight"), this.Reveal.getConfig().rtl ? !this.Reveal.hasNavigatedHorizontally() && e.left && 0 === i.v ? this.controlsLeftArrow.classList.add("highlight") : this.controlsLeftArrow.classList.remove("highlight") : !this.Reveal.hasNavigatedHorizontally() && e.right && 0 === i.v ? this.controlsRightArrow.classList.add("highlight") : this.controlsRightArrow.classList.remove("highlight"))
                    }
                }
            }, {
                key: "onNavigateLeftClicked",
                value: function(e) {
                    e.preventDefault(), this.Reveal.onUserInput(), "linear" === this.Reveal.getConfig().navigationMode ? this.Reveal.prev() : this.Reveal.left()
                }
            }, {
                key: "onNavigateRightClicked",
                value: function(e) {
                    e.preventDefault(), this.Reveal.onUserInput(), "linear" === this.Reveal.getConfig().navigationMode ? this.Reveal.next() : this.Reveal.right()
                }
            }, {
                key: "onNavigateUpClicked",
                value: function(e) {
                    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.up()
                }
            }, {
                key: "onNavigateDownClicked",
                value: function(e) {
                    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.down()
                }
            }, {
                key: "onNavigatePrevClicked",
                value: function(e) {
                    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.prev()
                }
            }, {
                key: "onNavigateNextClicked",
                value: function(e) {
                    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.next()
                }
            }, ]), e
        }(),
        ok = function() {
            function e(t) {
                ak(this, e), this.Reveal = t, this.onProgressClicked = this.onProgressClicked.bind(this)
            }
            return aE(e, [{
                key: "render",
                value: function() {
                    this.element = document.createElement("div"), this.element.className = "progress", this.Reveal.getRevealElement().appendChild(this.element), this.bar = document.createElement("span"), this.element.appendChild(this.bar)
                }
            }, {
                key: "configure",
                value: function(e, t) {
                    this.element.style.display = e.progress ? "block" : "none"
                }
            }, {
                key: "bind",
                value: function() {
                    this.Reveal.getConfig().progress && this.element && this.element.addEventListener("click", this.onProgressClicked, !1)
                }
            }, {
                key: "unbind",
                value: function() {
                    this.Reveal.getConfig().progress && this.element && this.element.removeEventListener("click", this.onProgressClicked, !1)
                }
            }, {
                key: "update",
                value: function() {
                    if (this.Reveal.getConfig().progress && this.bar) {
                        var e = this.Reveal.getProgress();
                        2 > this.Reveal.getTotalSlides() && (e = 0), this.bar.style.transform = "scaleX(" + e + ")"
                    }
                }
            }, {
                key: "getMaxWidth",
                value: function() {
                    return this.Reveal.getRevealElement().offsetWidth
                }
            }, {
                key: "onProgressClicked",
                value: function(e) {
                    this.Reveal.onUserInput(e), e.preventDefault();
                    var t = this.Reveal.getHorizontalSlides().length,
                        n = Math.floor(e.clientX / this.getMaxWidth() * t);
                    this.Reveal.getConfig().rtl && (n = t - n), this.Reveal.slide(n)
                }
            }, ]), e
        }(),
        oS = function() {
            function e(t) {
                ak(this, e), this.Reveal = t, this.lastMouseWheelStep = 0, this.cursorHidden = !1, this.cursorInactiveTimeout = 0, this.onDocumentCursorActive = this.onDocumentCursorActive.bind(this), this.onDocumentMouseScroll = this.onDocumentMouseScroll.bind(this)
            }
            return aE(e, [{
                key: "configure",
                value: function(e, t) {
                    e.mouseWheel ? (document.addEventListener("DOMMouseScroll", this.onDocumentMouseScroll, !1), document.addEventListener("mousewheel", this.onDocumentMouseScroll, !1)) : (document.removeEventListener("DOMMouseScroll", this.onDocumentMouseScroll, !1), document.removeEventListener("mousewheel", this.onDocumentMouseScroll, !1)), e.hideInactiveCursor ? (document.addEventListener("mousemove", this.onDocumentCursorActive, !1), document.addEventListener("mousedown", this.onDocumentCursorActive, !1)) : (this.showCursor(), document.removeEventListener("mousemove", this.onDocumentCursorActive, !1), document.removeEventListener("mousedown", this.onDocumentCursorActive, !1))
                }
            }, {
                key: "showCursor",
                value: function() {
                    this.cursorHidden && (this.cursorHidden = !1, this.Reveal.getRevealElement().style.cursor = "")
                }
            }, {
                key: "hideCursor",
                value: function() {
                    !1 === this.cursorHidden && (this.cursorHidden = !0, this.Reveal.getRevealElement().style.cursor = "none")
                }
            }, {
                key: "onDocumentCursorActive",
                value: function(e) {
                    this.showCursor(), clearTimeout(this.cursorInactiveTimeout), this.cursorInactiveTimeout = setTimeout(this.hideCursor.bind(this), this.Reveal.getConfig().hideCursorTime)
                }
            }, {
                key: "onDocumentMouseScroll",
                value: function(e) {
                    if (Date.now() - this.lastMouseWheelStep > 1e3) {
                        this.lastMouseWheelStep = Date.now();
                        var t = e.detail || -e.wheelDelta;
                        t > 0 ? this.Reveal.next() : t < 0 && this.Reveal.prev()
                    }
                }
            }, ]), e
        }(),
        oE = l.f,
        oR = function(e) {
            return function(t) {
                for (var n, i = g(t), r = tu(i), o = r.length, s = 0, l = []; o > s;) n = r[s++], a && !oE.call(i, n) || l.push(e ? [n, i[n]] : i[n]);
                return l
            }
        },
        oA = {
            entries: oR(!0),
            values: oR(!1)
        }.values;
    eN({
        target: "Object",
        stat: !0
    }, {
        values: function(e) {
            return oA(e)
        }
    });
    var ox = function(e, t) {
            var n = document.createElement("script");
            n.type = "text/javascript", n.async = !1, n.defer = !1, n.src = e, "function" == typeof t && (n.onload = n.onreadystatechange = function(e) {
                ("load" === e.type || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = n.onerror = null, t())
            }, n.onerror = function(e) {
                n.onload = n.onreadystatechange = n.onerror = null, t(Error("Failed loading script: " + n.src + "\n" + e))
            });
            var i = document.querySelector("head");
            i.insertBefore(n, i.lastChild)
        },
        oL = function() {
            function e(t) {
                ak(this, e), this.Reveal = t, this.state = "idle", this.registeredPlugins = {}, this.asyncDependencies = []
            }
            return aE(e, [{
                key: "load",
                value: function(e, t) {
                    var n = this;
                    return this.state = "loading", e.forEach(this.registerPlugin.bind(this)), new Promise(function(e) {
                        var i = [],
                            r = 0;
                        if (t.forEach(function(e) {
                                e.condition && !e.condition() || (e.async ? n.asyncDependencies.push(e) : i.push(e))
                            }), i.length) {
                            r = i.length;
                            var a = function(t) {
                                t && "function" == typeof t.callback && t.callback(), 0 == --r && n.initPlugins().then(e)
                            };
                            i.forEach(function(e) {
                                "string" == typeof e.id ? (n.registerPlugin(e), a(e)) : "string" == typeof e.src ? ox(e.src, function() {
                                    return a(e)
                                }) : (console.warn("Unrecognized plugin format", e), a())
                            })
                        } else n.initPlugins().then(e)
                    })
                }
            }, {
                key: "initPlugins",
                value: function() {
                    var e = this;
                    return new Promise(function(t) {
                        var n = Object.values(e.registeredPlugins),
                            i = n.length;
                        if (0 === i) e.loadAsync().then(t);
                        else {
                            var r, a = function() {
                                    0 == --i ? e.loadAsync().then(t) : r()
                                },
                                o = 0;
                            (r = function() {
                                var t = n[o++];
                                if ("function" == typeof t.init) {
                                    var i = t.init(e.Reveal);
                                    i && "function" == typeof i.then ? i.then(a) : a()
                                } else a()
                            })()
                        }
                    })
                }
            }, {
                key: "loadAsync",
                value: function() {
                    return this.state = "loaded", this.asyncDependencies.length && this.asyncDependencies.forEach(function(e) {
                        ox(e.src, e.callback)
                    }), Promise.resolve()
                }
            }, {
                key: "registerPlugin",
                value: function(e) {
                    2 === arguments.length && "string" == typeof arguments[0] ? (e = arguments[1]).id = arguments[0] : "function" == typeof e && (e = e());
                    var t = e.id;
                    "string" != typeof t ? console.warn("Unrecognized plugin format; can't find plugin.id", e) : void 0 === this.registeredPlugins[t] ? (this.registeredPlugins[t] = e, "loaded" === this.state && "function" == typeof e.init && e.init(this.Reveal)) : console.warn('reveal.js: "' + t + '" plugin has already been registered')
                }
            }, {
                key: "hasPlugin",
                value: function(e) {
                    return !!this.registeredPlugins[e]
                }
            }, {
                key: "getPlugin",
                value: function(e) {
                    return this.registeredPlugins[e]
                }
            }, {
                key: "getRegisteredPlugins",
                value: function() {
                    return this.registeredPlugins
                }
            }, ]), e
        }(),
        oC = function() {
            function e(t) {
                ak(this, e), this.Reveal = t
            }
            return aE(e, [{
                key: "setupPDF",
                value: function() {
                    var e = this.Reveal.getConfig(),
                        t = this.Reveal.getComputedSlideSize(window.innerWidth, window.innerHeight),
                        n = Math.floor(t.width * (1 + e.margin)),
                        i = Math.floor(t.height * (1 + e.margin)),
                        r = t.width,
                        a = t.height;
                    a3("@page{size:" + n + "px " + i + "px; margin: 0px;}"), a3(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " + r + "px; max-height:" + a + "px}"), document.documentElement.classList.add("print-pdf"), document.body.style.width = n + "px", document.body.style.height = i + "px", this.Reveal.layoutSlideContents(r, a);
                    var o = e.slideNumber && /all|print/i.test(e.showSlideNumber);
                    aF(this.Reveal.getRevealElement(), aP).forEach(function(e) {
                        e.setAttribute("data-slide-number", this.Reveal.slideNumber.getSlideNumber(e))
                    }, this), aF(this.Reveal.getRevealElement(), aP).forEach(function(t) {
                        if (!1 === t.classList.contains("stack")) {
                            var s = (i - a) / 2,
                                l = t.scrollHeight,
                                u = Math.max(Math.ceil(l / i), 1);
                            (1 === (u = Math.min(u, e.pdfMaxPagesPerSlide)) && e.center || t.classList.contains("center")) && (s = Math.max((i - l) / 2, 0));
                            var c = document.createElement("div");
                            if (c.className = "pdf-page", c.style.height = (i + e.pdfPageHeightOffset) * u + "px", t.parentNode.insertBefore(c, t), c.appendChild(t), t.style.left = (n - r) / 2 + "px", t.style.top = s + "px", t.style.width = r + "px", t.slideBackgroundElement && c.insertBefore(t.slideBackgroundElement, t), e.showNotes) {
                                var d = this.Reveal.getSlideNotes(t);
                                if (d) {
                                    var f = "string" == typeof e.showNotes ? e.showNotes : "inline",
                                        h = document.createElement("div");
                                    h.classList.add("speaker-notes"), h.classList.add("speaker-notes-pdf"), h.setAttribute("data-layout", f), h.innerHTML = d, "separate-page" === f ? c.parentNode.insertBefore(h, c.nextSibling) : (h.style.left = "8px", h.style.bottom = "8px", h.style.width = n - 16 + "px", c.appendChild(h))
                                }
                            }
                            if (o) {
                                var v = document.createElement("div");
                                v.classList.add("slide-number"), v.classList.add("slide-number-pdf"), v.innerHTML = t.getAttribute("data-slide-number"), c.appendChild(v)
                            }
                            if (e.pdfSeparateFragments) {
                                var g, p, m = this.Reveal.fragments.sort(c.querySelectorAll(".fragment"), !0);
                                m.forEach(function(e) {
                                    g && g.forEach(function(e) {
                                        e.classList.remove("current-fragment")
                                    }), e.forEach(function(e) {
                                        e.classList.add("visible", "current-fragment")
                                    }, this);
                                    var t = c.cloneNode(!0);
                                    c.parentNode.insertBefore(t, (p || c).nextSibling), g = e, p = t
                                }, this), m.forEach(function(e) {
                                    e.forEach(function(e) {
                                        e.classList.remove("visible", "current-fragment")
                                    })
                                })
                            } else aF(c, ".fragment:not(.fade-out)").forEach(function(e) {
                                e.classList.add("visible")
                            })
                        }
                    }, this), this.Reveal.dispatchEvent({
                        type: "pdf-ready"
                    })
                }
            }, {
                key: "isPrintingPDF",
                value: function() {
                    return /print-pdf/gi.test(window.location.search)
                }
            }, ]), e
        }(),
        oP = function() {
            function e(t) {
                ak(this, e), this.Reveal = t, this.touchStartX = 0, this.touchStartY = 0, this.touchStartCount = 0, this.touchCaptured = !1, this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this)
            }
            return aE(e, [{
                key: "bind",
                value: function() {
                    var e = this.Reveal.getRevealElement();
                    "onpointerdown" in window ? (e.addEventListener("pointerdown", this.onPointerDown, !1), e.addEventListener("pointermove", this.onPointerMove, !1), e.addEventListener("pointerup", this.onPointerUp, !1)) : window.navigator.msPointerEnabled ? (e.addEventListener("MSPointerDown", this.onPointerDown, !1), e.addEventListener("MSPointerMove", this.onPointerMove, !1), e.addEventListener("MSPointerUp", this.onPointerUp, !1)) : (e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1))
                }
            }, {
                key: "unbind",
                value: function() {
                    var e = this.Reveal.getRevealElement();
                    e.removeEventListener("pointerdown", this.onPointerDown, !1), e.removeEventListener("pointermove", this.onPointerMove, !1), e.removeEventListener("pointerup", this.onPointerUp, !1), e.removeEventListener("MSPointerDown", this.onPointerDown, !1), e.removeEventListener("MSPointerMove", this.onPointerMove, !1), e.removeEventListener("MSPointerUp", this.onPointerUp, !1), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1)
                }
            }, {
                key: "isSwipePrevented",
                value: function(e) {
                    for (; e && "function" == typeof e.hasAttribute;) {
                        if (e.hasAttribute("data-prevent-swipe")) return !0;
                        e = e.parentNode
                    }
                    return !1
                }
            }, {
                key: "onTouchStart",
                value: function(e) {
                    if (this.isSwipePrevented(e.target)) return !0;
                    this.touchStartX = e.touches[0].clientX, this.touchStartY = e.touches[0].clientY, this.touchStartCount = e.touches.length
                }
            }, {
                key: "onTouchMove",
                value: function(e) {
                    if (this.isSwipePrevented(e.target)) return !0;
                    var t = this.Reveal.getConfig();
                    if (this.touchCaptured) aX && e.preventDefault();
                    else {
                        this.Reveal.onUserInput(e);
                        var n = e.touches[0].clientY,
                            i = e.touches[0].clientX;
                        if (1 === e.touches.length && 2 !== this.touchStartCount) {
                            var r = this.Reveal.availableRoutes({
                                    includeFragments: !0
                                }),
                                a = n - this.touchStartY,
                                o = i - this.touchStartX;
                            a > 40 && Math.abs(a) > Math.abs(o) ? (this.touchCaptured = !0, "linear" === t.navigationMode ? t.rtl ? this.Reveal.next() : this.Reveal.prev() : this.Reveal.left()) : a < -40 && Math.abs(a) > Math.abs(o) ? (this.touchCaptured = !0, "linear" === t.navigationMode ? t.rtl ? this.Reveal.prev() : this.Reveal.next() : this.Reveal.right()) : o > 40 && r.up ? (this.touchCaptured = !0, "linear" === t.navigationMode ? this.Reveal.prev() : this.Reveal.up()) : o < -40 && r.down && (this.touchCaptured = !0, "linear" === t.navigationMode ? this.Reveal.next() : this.Reveal.down()), t.embedded ? (this.touchCaptured || this.Reveal.isVerticalSlide()) && e.preventDefault() : e.preventDefault()
                        }
                    }
                }
            }, {
                key: "onTouchEnd",
                value: function(e) {
                    this.touchCaptured = !1
                }
            }, {
                key: "onPointerDown",
                value: function(e) {
                    e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{
                        clientX: e.clientX,
                        clientY: e.clientY
                    }, ], this.onTouchStart(e))
                }
            }, {
                key: "onPointerMove",
                value: function(e) {
                    e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{
                        clientX: e.clientX,
                        clientY: e.clientY
                    }, ], this.onTouchMove(e))
                }
            }, {
                key: "onPointerUp",
                value: function(e) {
                    e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{
                        clientX: e.clientX,
                        clientY: e.clientY
                    }, ], this.onTouchEnd(e))
                }
            }, ]), e
        }(),
        oN = "focus",
        oI = "blur",
        oT = function() {
            function e(t) {
                ak(this, e), this.Reveal = t, this.onRevealPointerDown = this.onRevealPointerDown.bind(this), this.onDocumentPointerDown = this.onDocumentPointerDown.bind(this)
            }
            return aE(e, [{
                key: "configure",
                value: function(e, t) {
                    e.embedded ? this.blur() : (this.focus(), this.unbind())
                }
            }, {
                key: "bind",
                value: function() {
                    this.Reveal.getConfig().embedded && this.Reveal.getRevealElement().addEventListener("pointerdown", this.onRevealPointerDown, !1)
                }
            }, {
                key: "unbind",
                value: function() {
                    this.Reveal.getRevealElement().removeEventListener("pointerdown", this.onRevealPointerDown, !1), document.removeEventListener("pointerdown", this.onDocumentPointerDown, !1)
                }
            }, {
                key: "focus",
                value: function() {
                    this.state !== oN && (this.Reveal.getRevealElement().classList.add("focused"), document.addEventListener("pointerdown", this.onDocumentPointerDown, !1)), this.state = oN
                }
            }, {
                key: "blur",
                value: function() {
                    this.state !== oI && (this.Reveal.getRevealElement().classList.remove("focused"), document.removeEventListener("pointerdown", this.onDocumentPointerDown, !1)), this.state = oI
                }
            }, {
                key: "isFocused",
                value: function() {
                    return this.state === oN
                }
            }, {
                key: "onRevealPointerDown",
                value: function(e) {
                    this.focus()
                }
            }, {
                key: "onDocumentPointerDown",
                value: function(e) {
                    var t = aV(e.target, ".reveal");
                    t && t === this.Reveal.getRevealElement() || this.blur()
                }
            }, ]), e
        }(),
        oD = function() {
            function e(t) {
                ak(this, e), this.Reveal = t
            }
            return aE(e, [{
                key: "render",
                value: function() {
                    this.element = document.createElement("div"), this.element.className = "speaker-notes", this.element.setAttribute("data-prevent-swipe", ""), this.element.setAttribute("tabindex", "0"), this.Reveal.getRevealElement().appendChild(this.element)
                }
            }, {
                key: "configure",
                value: function(e, t) {
                    e.showNotes && this.element.setAttribute("data-layout", "string" == typeof e.showNotes ? e.showNotes : "inline")
                }
            }, {
                key: "update",
                value: function() {
                    this.Reveal.getConfig().showNotes && this.element && this.Reveal.getCurrentSlide() && !this.Reveal.print.isPrintingPDF() && (this.element.innerHTML = this.getSlideNotes() || '<span class="notes-placeholder">No notes on this slide.</span>')
                }
            }, {
                key: "updateVisibility",
                value: function() {
                    this.Reveal.getConfig().showNotes && this.hasNotes() && !this.Reveal.print.isPrintingPDF() ? this.Reveal.getRevealElement().classList.add("show-notes") : this.Reveal.getRevealElement().classList.remove("show-notes")
                }
            }, {
                key: "hasNotes",
                value: function() {
                    return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length > 0
                }
            }, {
                key: "isSpeakerNotesWindow",
                value: function() {
                    return !!window.location.search.match(/receiver/gi)
                }
            }, {
                key: "getSlideNotes",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Reveal.getCurrentSlide();
                    if (e.hasAttribute("data-notes")) return e.getAttribute("data-notes");
                    var t = e.querySelector("aside.notes");
                    return t ? t.innerHTML : null
                }
            }, ]), e
        }(),
        oM = eB("unscopables"),
        oO = Array.prototype;
    null == oO[oM] && x.f(oO, oM, {
        configurable: !0,
        value: t$(null)
    });
    eN({
        target: "Array",
        proto: !0
    }, {
        fill: function(e) {
            for (var t = eT(this), n = ec(t.length), i = arguments.length, r = eh(i > 1 ? arguments[1] : void 0, n), a = i > 2 ? arguments[2] : void 0, o = void 0 === a ? n : eh(a, n); o > r;) t[r++] = e;
            return t
        }
    }), oO[oM].fill = !0;
    var o0 = function() {
            function e(t, n) {
                ak(this, e), this.diameter = 100, this.diameter2 = this.diameter / 2, this.thickness = 6, this.playing = !1, this.progress = 0, this.progressOffset = 1, this.container = t, this.progressCheck = n, this.canvas = document.createElement("canvas"), this.canvas.className = "playback", this.canvas.width = this.diameter, this.canvas.height = this.diameter, this.canvas.style.width = this.diameter2 + "px", this.canvas.style.height = this.diameter2 + "px", this.context = this.canvas.getContext("2d"), this.container.appendChild(this.canvas), this.render()
            }
            return aE(e, [{
                key: "setPlaying",
                value: function(e) {
                    var t = this.playing;
                    this.playing = e, !t && this.playing ? this.animate() : this.render()
                }
            }, {
                key: "animate",
                value: function() {
                    var e = this.progress;
                    this.progress = this.progressCheck(), e > .8 && this.progress < .2 && (this.progressOffset = this.progress), this.render(), this.playing && requestAnimationFrame(this.animate.bind(this))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.playing ? this.progress : 0,
                        t = this.diameter2 - this.thickness,
                        n = this.diameter2,
                        i = this.diameter2;
                    this.progressOffset += .1 * (1 - this.progressOffset);
                    var r = -Math.PI / 2 + this.progressOffset * (2 * Math.PI);
                    this.context.save(), this.context.clearRect(0, 0, this.diameter, this.diameter), this.context.beginPath(), this.context.arc(n, i, t + 4, 0, 2 * Math.PI, !1), this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )", this.context.fill(), this.context.beginPath(), this.context.arc(n, i, t, 0, 2 * Math.PI, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "rgba( 255, 255, 255, 0.2 )", this.context.stroke(), this.playing && (this.context.beginPath(), this.context.arc(n, i, t, r, -Math.PI / 2 + e * (2 * Math.PI), !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "#fff", this.context.stroke()), this.context.translate(n - 14, i - 14), this.playing ? (this.context.fillStyle = "#fff", this.context.fillRect(0, 0, 10, 28), this.context.fillRect(18, 0, 10, 28)) : (this.context.beginPath(), this.context.translate(4, 0), this.context.moveTo(0, 0), this.context.lineTo(24, 14), this.context.lineTo(0, 28), this.context.fillStyle = "#fff", this.context.fill()), this.context.restore()
                }
            }, {
                key: "on",
                value: function(e, t) {
                    this.canvas.addEventListener(e, t, !1)
                }
            }, {
                key: "off",
                value: function(e, t) {
                    this.canvas.removeEventListener(e, t, !1)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.playing = !1, this.canvas.parentNode && this.container.removeChild(this.canvas)
                }
            }, ]), e
        }(),
        oz = {
            width: 960,
            height: 700,
            margin: .04,
            minScale: .2,
            maxScale: 2,
            controls: !0,
            controlsTutorial: !0,
            controlsLayout: "bottom-right",
            controlsBackArrows: "faded",
            progress: !0,
            slideNumber: !1,
            showSlideNumber: "all",
            hashOneBasedIndex: !1,
            hash: !1,
            respondToHashChanges: !0,
            history: !1,
            keyboard: !0,
            keyboardCondition: null,
            disableLayout: !1,
            overview: !0,
            center: !0,
            touch: !0,
            loop: !1,
            rtl: !1,
            navigationMode: "default",
            shuffle: !1,
            fragments: !0,
            fragmentInURL: !0,
            embedded: !1,
            help: !0,
            pause: !0,
            showNotes: !1,
            showHiddenSlides: !1,
            autoPlayMedia: null,
            preloadIframes: null,
            autoAnimate: !0,
            autoAnimateMatcher: null,
            autoAnimateEasing: "ease",
            autoAnimateDuration: 1,
            autoAnimateUnmatched: !0,
            autoAnimateStyles: ["opacity", "color", "background-color", "padding", "font-size", "line-height", "letter-spacing", "border-width", "border-color", "border-radius", "outline", "outline-offset", ],
            autoSlide: 0,
            autoSlideStoppable: !0,
            autoSlideMethod: null,
            defaultTiming: null,
            mouseWheel: !1,
            previewLinks: !1,
            postMessage: !0,
            postMessageEvents: !1,
            focusBodyOnPageVisibilityChange: !0,
            transition: "slide",
            transitionSpeed: "default",
            backgroundTransition: "fade",
            parallaxBackgroundImage: "",
            parallaxBackgroundSize: "",
            parallaxBackgroundRepeat: "",
            parallaxBackgroundPosition: "",
            parallaxBackgroundHorizontal: null,
            parallaxBackgroundVertical: null,
            pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,
            pdfSeparateFragments: !0,
            pdfPageHeightOffset: -1,
            viewDistance: 3,
            mobileViewDistance: 2,
            display: "block",
            hideInactiveCursor: !0,
            hideCursorTime: 5e3,
            dependencies: [],
            plugins: []
        },
        oH = "4.1.0";

    function oB(e, t) {
        arguments.length < 2 && (t = arguments[0], e = document.querySelector(".reveal"));
        var n, i, r, a, o, s = {},
            l = {},
            u = !1,
            c = {
                hasNavigatedHorizontally: !1,
                hasNavigatedVertically: !1
            },
            d = [],
            f = 1,
            h = {
                layout: "",
                overview: ""
            },
            v = {},
            g = "idle",
            p = 0,
            m = 0,
            y = -1,
            b = !1,
            $ = new aJ(s),
            _ = new aQ(s),
            w = new om(s),
            k = new oe(s),
            S = new oy(s),
            E = new ob(s),
            R = new o$(s),
            A = new o_(s),
            x = new ow(s),
            L = new ok(s),
            C = new oS(s),
            P = new oL(s),
            N = new oC(s),
            I = new oT(s),
            T = new oP(s),
            D = new oD(s);

        function M() {
            var e;
            u = !0, l.showHiddenSlides || aF(v.wrapper, 'section[data-visibility="hidden"]').forEach(function(e) {
                e.parentNode.removeChild(e)
            }), v.slides.classList.add("no-transition"), a6 ? v.wrapper.classList.add("no-hover") : v.wrapper.classList.remove("no-hover"), k.render(), _.render(), x.render(), L.render(), D.render(), v.pauseOverlay = a7(v.wrapper, "div", "pause-overlay", l.controls ? '<button class="resume-button">Resume presentation</button>' : null), v.statusElement = (e = v.wrapper.querySelector(".aria-status"), e || ((e = document.createElement("div")).style.position = "absolute", e.style.height = "1px", e.style.width = "1px", e.style.overflow = "hidden", e.style.clip = "rect( 1px, 1px, 1px, 1px )", e.classList.add("aria-status"), e.setAttribute("aria-live", "polite"), e.setAttribute("aria-atomic", "true"), v.wrapper.appendChild(e)), e), v.wrapper.setAttribute("role", "application"), l.postMessage && window.addEventListener("message", function(e) {
                var t = e.data;
                if ("string" == typeof t && "{" === t.charAt(0) && "}" === t.charAt(t.length - 1) && (t = JSON.parse(t)).method && "function" == typeof s[t.method]) {
                    if (!1 === aT.test(t.method)) {
                        var n = s[t.method].apply(s, t.args);
                        V("callback", {
                            method: t.method,
                            result: n
                        })
                    } else console.warn('reveal.js: "' + t.method + '" is is blacklisted from the postMessage API')
                }
            }, !1), setInterval(function() {
                0 === v.wrapper.scrollTop && 0 === v.wrapper.scrollLeft || (v.wrapper.scrollTop = 0, v.wrapper.scrollLeft = 0)
            }, 1e3), eb().forEach(function(e) {
                aF(e, "section").forEach(function(e, t) {
                    t > 0 && (e.classList.remove("present"), e.classList.remove("past"), e.classList.add("future"), e.setAttribute("aria-hidden", "true"))
                })
            }), H(), A.readURL(), k.update(!0), setTimeout(function() {
                v.slides.classList.remove("no-transition"), v.wrapper.classList.add("ready"), q({
                    type: "ready",
                    data: {
                        indexh: n,
                        indexv: i,
                        currentSlide: a
                    }
                })
            }, 1), N.isPrintingPDF() && (U(), "complete" === document.readyState ? N.setupPDF() : window.addEventListener("load", function() {
                N.setupPDF()
            }))
        }

        function O(e) {
            v.statusElement.textContent = e
        }

        function z(e) {
            var t = "";
            if (3 === e.nodeType) t += e.textContent;
            else if (1 === e.nodeType) {
                var n = e.getAttribute("aria-hidden"),
                    i = "none" === window.getComputedStyle(e).display;
                "true" === n || i || Array.from(e.childNodes).forEach(function(e) {
                    t += z(e)
                })
            }
            return "" === (t = t.trim()) ? "" : t + " "
        }

        function H(e) {
            var t = ax({}, l);
            if ("object" === aw(e) && aj(l, e), !1 !== s.isReady()) {
                var n = v.wrapper.querySelectorAll(aP).length;
                v.wrapper.classList.remove(t.transition), v.wrapper.classList.add(l.transition), v.wrapper.setAttribute("data-transition-speed", l.transitionSpeed), v.wrapper.setAttribute("data-background-transition", l.backgroundTransition), v.viewport.style.setProperty("--slide-width", l.width + "px"), v.viewport.style.setProperty("--slide-height", l.height + "px"), l.shuffle && ef(), aW(v.wrapper, "embedded", l.embedded), aW(v.wrapper, "rtl", l.rtl), aW(v.wrapper, "center", l.center), !1 === l.pause && es(), l.previewLinks ? (K(), X("[data-preview-link=false]")) : (X(), K("[data-preview-link]:not([data-preview-link=false])")), w.reset(), o && (o.destroy(), o = null), n > 1 && l.autoSlide && l.autoSlideStoppable && ((o = new o0(v.wrapper, function() {
                    return Math.min(Math.max((Date.now() - y) / p, 0), 1)
                })).on("click", eH), b = !1), "default" !== l.navigationMode ? v.wrapper.setAttribute("data-navigation-mode", l.navigationMode) : v.wrapper.removeAttribute("data-navigation-mode"), D.configure(l, t), I.configure(l, t), C.configure(l, t), x.configure(l, t), L.configure(l, t), R.configure(l, t), S.configure(l, t), _.configure(l, t), ed()
            }
        }

        function B() {
            window.addEventListener("resize", eO, !1), l.touch && T.bind(), l.keyboard && R.bind(), l.progress && L.bind(), l.respondToHashChanges && A.bind(), x.bind(), I.bind(), v.slides.addEventListener("transitionend", eM, !1), v.pauseOverlay.addEventListener("click", es, !1), l.focusBodyOnPageVisibilityChange && document.addEventListener("visibilitychange", e0, !1)
        }

        function U() {
            T.unbind(), I.unbind(), R.unbind(), x.unbind(), L.unbind(), A.unbind(), window.removeEventListener("resize", eO, !1), v.slides.removeEventListener("transitionend", eM, !1), v.pauseOverlay.removeEventListener("click", es, !1)
        }

        function j(t, n, i) {
            e.addEventListener(t, n, i)
        }

        function F(t, n, i) {
            e.removeEventListener(t, n, i)
        }

        function W(e) {
            "string" == typeof e.layout && (h.layout = e.layout), "string" == typeof e.overview && (h.overview = e.overview), h.layout ? a1(v.slides, h.layout + " " + h.overview) : a1(v.slides, h.overview)
        }

        function q(e) {
            var t = e.target,
                n = void 0 === t ? v.wrapper : t,
                i = e.type,
                r = e.data,
                a = e.bubbles,
                o = document.createEvent("HTMLEvents", 1, 2);
            o.initEvent(i, void 0 === a || a, !0), aj(o, r), n.dispatchEvent(o), n === v.wrapper && V(i)
        }

        function V(e, t) {
            if (l.postMessageEvents && window.parent !== window.self) {
                var n = {
                    namespace: "reveal",
                    eventName: e,
                    state: eE()
                };
                aj(n, t), window.parent.postMessage(JSON.stringify(n), "*")
            }
        }

        function K() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "a";
            Array.from(v.wrapper.querySelectorAll(e)).forEach(function(e) {
                /^(http|www)/gi.test(e.getAttribute("href")) && e.addEventListener("click", ez, !1)
            })
        }

        function X() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "a";
            Array.from(v.wrapper.querySelectorAll(e)).forEach(function(e) {
                /^(http|www)/gi.test(e.getAttribute("href")) && e.removeEventListener("click", ez, !1)
            })
        }

        function Y() {
            if (l.help) {
                G(), v.overlay = document.createElement("div"), v.overlay.classList.add("overlay"), v.overlay.classList.add("overlay-help"), v.wrapper.appendChild(v.overlay);
                var e = '<p class="title">Keyboard Shortcuts</p><br/>',
                    t = R.getShortcuts(),
                    n = R.getBindings();
                for (var i in e += "<table><th>KEY</th><th>ACTION</th>", t) e += "<tr><td>".concat(i, "</td><td>").concat(t[i], "</td></tr>");
                for (var r in n) n[r].key && n[r].description && (e += "<tr><td>".concat(n[r].key, "</td><td>").concat(n[r].description, "</td></tr>"));
                e += "</table>", v.overlay.innerHTML = '\n				<header>\n					<a class="close" href="#"><span class="icon"></span></a>\n				</header>\n				<div class="viewport">\n					<div class="viewport-inner">'.concat(e, "</div>\n				</div>\n			"), v.overlay.querySelector(".close").addEventListener("click", function(e) {
                    G(), e.preventDefault()
                }, !1)
            }
        }

        function G() {
            return !!v.overlay && (v.overlay.parentNode.removeChild(v.overlay), v.overlay = null, !0)
        }

        function J() {
            if (v.wrapper && !N.isPrintingPDF()) {
                if (!l.disableLayout) {
                    a6 && !l.embedded && document.documentElement.style.setProperty("--vh", .01 * window.innerHeight + "px");
                    var e = Z(),
                        t = f;
                    Q(l.width, l.height), v.slides.style.width = e.width + "px", v.slides.style.height = e.height + "px", 1 === (f = Math.min(f = Math.max(f = Math.min(e.presentationWidth / e.width, e.presentationHeight / e.height), l.minScale), l.maxScale)) ? (v.slides.style.zoom = "", v.slides.style.left = "", v.slides.style.top = "", v.slides.style.bottom = "", v.slides.style.right = "", W({
                        layout: ""
                    })) : f > 1 && aY && window.devicePixelRatio < 2 ? (v.slides.style.zoom = f, v.slides.style.left = "", v.slides.style.top = "", v.slides.style.bottom = "", v.slides.style.right = "", W({
                        layout: ""
                    })) : (v.slides.style.zoom = "", v.slides.style.left = "50%", v.slides.style.top = "50%", v.slides.style.bottom = "auto", v.slides.style.right = "auto", W({
                        layout: "translate(-50%, -50%) scale(" + f + ")"
                    }));
                    for (var n = Array.from(v.wrapper.querySelectorAll(aP)), i = 0, r = n.length; i < r; i++) {
                        var a = n[i];
                        "none" !== a.style.display && (l.center || a.classList.contains("center") ? a.classList.contains("stack") ? a.style.top = 0 : a.style.top = Math.max((e.height - a.scrollHeight) / 2, 0) + "px" : a.style.top = "")
                    }
                    t !== f && q({
                        type: "resize",
                        data: {
                            oldScale: t,
                            scale: f,
                            size: e
                        }
                    })
                }
                L.update(), k.updateParallax(), E.isActive() && E.update()
            }
        }

        function Q(e, t) {
            aF(v.slides, "section > .stretch, section > .r-stretch").forEach(function(n) {
                var i = aK(n, t);
                if (/(img|video)/gi.test(n.nodeName)) {
                    var r = n.naturalWidth || n.videoWidth,
                        a = n.naturalHeight || n.videoHeight,
                        o = Math.min(e / r, i / a);
                    n.style.width = r * o + "px", n.style.height = a * o + "px"
                } else n.style.width = e + "px", n.style.height = i + "px"
            })
        }

        function Z(e, t) {
            var n = {
                width: l.width,
                height: l.height,
                presentationWidth: e || v.wrapper.offsetWidth,
                presentationHeight: t || v.wrapper.offsetHeight
            };
            return n.presentationWidth -= n.presentationWidth * l.margin, n.presentationHeight -= n.presentationHeight * l.margin, "string" == typeof n.width && /%$/.test(n.width) && (n.width = parseInt(n.width, 10) / 100 * n.presentationWidth), "string" == typeof n.height && /%$/.test(n.height) && (n.height = parseInt(n.height, 10) / 100 * n.presentationHeight), n
        }

        function ee(e, t) {
            "object" === aw(e) && "function" == typeof e.setAttribute && e.setAttribute("data-previous-indexv", t || 0)
        }

        function et(e) {
            if ("object" === aw(e) && "function" == typeof e.setAttribute && e.classList.contains("stack")) {
                var t = e.hasAttribute("data-start-indexv") ? "data-start-indexv" : "data-previous-indexv";
                return parseInt(e.getAttribute(t) || 0, 10)
            }
            return 0
        }

        function en() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
            return e && e.parentNode && !!e.parentNode.nodeName.match(/section/i)
        }

        function ei() {
            return !(!a || !en(a)) && !a.nextElementSibling
        }

        function er() {
            return 0 === n && 0 === i
        }

        function ea() {
            return !!a && !a.nextElementSibling && (!en(a) || !a.parentNode.nextElementSibling)
        }

        function eo() {
            if (l.pause) {
                var e = v.wrapper.classList.contains("paused");
                eA(), v.wrapper.classList.add("paused"), !1 === e && q({
                    type: "paused"
                })
            }
        }

        function es() {
            var e = v.wrapper.classList.contains("paused");
            v.wrapper.classList.remove("paused"), eR(), e && q({
                type: "resumed"
            })
        }

        function el(e) {
            "boolean" == typeof e ? e ? eo() : es() : eu() ? es() : eo()
        }

        function eu() {
            return v.wrapper.classList.contains("paused")
        }

        function ec(e, t, o, s) {
            r = a;
            var u = v.wrapper.querySelectorAll(aN);
            if (0 !== u.length) {
                void 0 !== t || E.isActive() || (t = et(u[e])), r && r.parentNode && r.parentNode.classList.contains("stack") && ee(r.parentNode, i);
                var c = d.concat();
                d.length = 0;
                var f = n || 0,
                    h = i || 0;
                n = eh(aN, void 0 === e ? n : e), i = eh(aI, void 0 === t ? i : t);
                var p = n !== f || i !== h;
                p || (r = null);
                var m = u[n];
                a = m.querySelectorAll("section")[i] || m;
                var y = !1;
                p && r && a && !E.isActive() && (r.hasAttribute("data-auto-animate") && a.hasAttribute("data-auto-animate") && (y = !0, v.slides.classList.add("disable-slide-transitions")), g = "running"), ev(), J(), E.isActive() && E.update(), void 0 !== o && S.goto(o), r && r !== a && (r.classList.remove("present"), r.setAttribute("aria-hidden", "true"), er() && setTimeout(function() {
                    aF(v.wrapper, ".slides>section.stack").forEach(function(e) {
                        ee(e, 0)
                    })
                }, 0));
                e: for (var b = 0, R = d.length; b < R; b++) {
                    for (var C = 0; C < c.length; C++)
                        if (c[C] === d[b]) {
                            c.splice(C, 1);
                            continue e
                        } v.viewport.classList.add(d[b]), q({
                        type: d[b]
                    })
                }
                for (; c.length;) v.viewport.classList.remove(c.pop());
                p && q({
                    type: "slidechanged",
                    data: {
                        indexh: n,
                        indexv: i,
                        previousSlide: r,
                        currentSlide: a,
                        origin: s
                    }
                }), !p && r || ($.stopEmbeddedContent(r), $.startEmbeddedContent(a)), O(z(a)), L.update(), x.update(), D.update(), k.update(), k.updateParallax(), _.update(), S.update(), A.writeURL(), eR(), y && (setTimeout(function() {
                    v.slides.classList.remove("disable-slide-transitions")
                }, 0), l.autoAnimate && w.run(r, a))
            }
        }

        function ed() {
            U(), B(), J(), p = l.autoSlide, eR(), k.create(), A.writeURL(), S.sortAll(), x.update(), L.update(), ev(), D.update(), D.updateVisibility(), k.update(!0), _.update(), $.formatEmbeddedContent(), !1 === l.autoPlayMedia ? $.stopEmbeddedContent(a, {
                unloadIframes: !1
            }) : $.startEmbeddedContent(a), E.isActive() && E.layout()
        }

        function ef() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eb();
            e.forEach(function(t, n) {
                var i = e[Math.floor(Math.random() * e.length)];
                i.parentNode === t.parentNode && t.parentNode.insertBefore(t, i);
                var r = t.querySelectorAll("section");
                r.length && ef(r)
            })
        }

        function eh(e, t) {
            var n = aF(v.wrapper, e),
                i = n.length,
                r = N.isPrintingPDF();
            if (i) {
                l.loop && (t %= i) < 0 && (t = i + t), t = Math.max(Math.min(t, i - 1), 0);
                for (var a = 0; a < i; a++) {
                    var o = n[a],
                        s = l.rtl && !en(o);
                    o.classList.remove("past"), o.classList.remove("present"), o.classList.remove("future"), o.setAttribute("hidden", ""), o.setAttribute("aria-hidden", "true"), o.querySelector("section") && o.classList.add("stack"), r ? o.classList.add("present") : a < t ? (o.classList.add(s ? "future" : "past"), l.fragments && aF(o, ".fragment").forEach(function(e) {
                        e.classList.add("visible"), e.classList.remove("current-fragment")
                    })) : a > t && (o.classList.add(s ? "past" : "future"), l.fragments && aF(o, ".fragment.visible").forEach(function(e) {
                        e.classList.remove("visible", "current-fragment")
                    }))
                }
                var u = n[t],
                    c = u.classList.contains("present");
                u.classList.add("present"), u.removeAttribute("hidden"), u.removeAttribute("aria-hidden"), c || q({
                    target: u,
                    type: "visible",
                    bubbles: !1
                });
                var f = u.getAttribute("data-state");
                f && (d = d.concat(f.split(" ")))
            } else t = 0;
            return t
        }

        function ev() {
            var e, t = eb(),
                r = t.length;
            if (r && void 0 !== n) {
                var a = E.isActive() ? 10 : l.viewDistance;
                a6 && (a = E.isActive() ? 6 : l.mobileViewDistance), N.isPrintingPDF() && (a = Number.MAX_VALUE);
                for (var o = 0; o < r; o++) {
                    var s = t[o],
                        u = aF(s, "section"),
                        c = u.length;
                    if (e = Math.abs((n || 0) - o) || 0, l.loop && (e = Math.abs(((n || 0) - o) % (r - a)) || 0), e < a ? $.load(s) : $.unload(s), c)
                        for (var d = et(s), f = 0; f < c; f++) {
                            var h = u[f];
                            e + (o === (n || 0) ? Math.abs((i || 0) - f) : Math.abs(f - d)) < a ? $.load(h) : $.unload(h)
                        }
                }
                ew() ? v.wrapper.classList.add("has-vertical-slides") : v.wrapper.classList.remove("has-vertical-slides"), e_() ? v.wrapper.classList.add("has-horizontal-slides") : v.wrapper.classList.remove("has-horizontal-slides")
            }
        }

        function eg() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.includeFragments,
                r = v.wrapper.querySelectorAll(aN),
                a = v.wrapper.querySelectorAll(aI),
                o = {
                    left: n > 0,
                    right: n < r.length - 1,
                    up: i > 0,
                    down: i < a.length - 1
                };
            if (l.loop && (r.length > 1 && (o.left = !0, o.right = !0), a.length > 1 && (o.up = !0, o.down = !0)), r.length > 1 && "linear" === l.navigationMode && (o.right = o.right || o.down, o.left = o.left || o.up), !0 === (void 0 !== t && t)) {
                var s = S.availableRoutes();
                o.left = o.left || s.prev, o.up = o.up || s.prev, o.down = o.down || s.next, o.right = o.right || s.next
            }
            if (l.rtl) {
                var u = o.left;
                o.left = o.right, o.right = u
            }
            return o
        }

        function ep() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
                t = eb(),
                n = 0;
            e: for (var i = 0; i < t.length; i++) {
                for (var r = t[i], o = r.querySelectorAll("section"), s = 0; s < o.length; s++) {
                    if (o[s] === e) break e;
                    "uncounted" !== o[s].dataset.visibility && n++
                }
                if (r === e) break;
                !1 === r.classList.contains("stack") && "uncounted" !== r.dataset.visibility && n++
            }
            return n
        }

        function em(e) {
            var t, r = n,
                o = i;
            if (e) {
                var s = en(e),
                    l = s ? e.parentNode : e;
                r = Math.max(eb().indexOf(l), 0), o = void 0, s && (o = Math.max(aF(e.parentNode, "section").indexOf(e), 0))
            }
            if (!e && a && a.querySelectorAll(".fragment").length > 0) {
                var u = a.querySelector(".current-fragment");
                t = u && u.hasAttribute("data-fragment-index") ? parseInt(u.getAttribute("data-fragment-index"), 10) : a.querySelectorAll(".fragment.visible").length - 1
            }
            return {
                h: r,
                v: o,
                f: t
            }
        }

        function ey() {
            return aF(v.wrapper, '.slides section:not(.stack):not([data-visibility="uncounted"])')
        }

        function eb() {
            return aF(v.wrapper, aN)
        }

        function e$() {
            return aF(v.wrapper, ".slides>section>section")
        }

        function e_() {
            return eb().length > 1
        }

        function ew() {
            return e$().length > 1
        }

        function ek() {
            return ey().length
        }

        function eS(e, t) {
            var n = eb()[e],
                i = n && n.querySelectorAll("section");
            return i && i.length && "number" == typeof t ? i ? i[t] : void 0 : n
        }

        function eE() {
            var e = em();
            return {
                indexh: e.h,
                indexv: e.v,
                indexf: e.f,
                paused: eu(),
                overview: E.isActive()
            }
        }

        function eR() {
            if (eA(), a && !1 !== l.autoSlide) {
                var e = a.querySelector(".current-fragment");
                e || (e = a.querySelector(".fragment"));
                var t = e ? e.getAttribute("data-autoslide") : null,
                    n = a.parentNode ? a.parentNode.getAttribute("data-autoslide") : null,
                    i = a.getAttribute("data-autoslide");
                t ? p = parseInt(t, 10) : i ? p = parseInt(i, 10) : n ? p = parseInt(n, 10) : (p = l.autoSlide, 0 === a.querySelectorAll(".fragment").length && aF(a, "video, audio").forEach(function(e) {
                    e.hasAttribute("data-autoplay") && p && 1e3 * e.duration / e.playbackRate > p && (p = 1e3 * e.duration / e.playbackRate + 1e3)
                })), !p || b || eu() || E.isActive() || ea() && !S.availableRoutes().next && !0 !== l.loop || (m = setTimeout(function() {
                    "function" == typeof l.autoSlideMethod ? l.autoSlideMethod() : eD(), eR()
                }, p), y = Date.now()), o && o.setPlaying(-1 !== m)
            }
        }

        function eA() {
            clearTimeout(m), m = -1
        }

        function ex() {
            p && !b && (b = !0, q({
                type: "autoslidepaused"
            }), clearTimeout(m), o && o.setPlaying(!1))
        }

        function eL() {
            p && b && (b = !1, q({
                type: "autoslideresumed"
            }), eR())
        }

        function eC() {
            c.hasNavigatedHorizontally = !0, l.rtl ? (E.isActive() || !1 === S.next()) && eg().left && ec(n + 1, "grid" === l.navigationMode ? i : void 0) : (E.isActive() || !1 === S.prev()) && eg().left && ec(n - 1, "grid" === l.navigationMode ? i : void 0)
        }

        function eP() {
            c.hasNavigatedHorizontally = !0, l.rtl ? (E.isActive() || !1 === S.prev()) && eg().right && ec(n - 1, "grid" === l.navigationMode ? i : void 0) : (E.isActive() || !1 === S.next()) && eg().right && ec(n + 1, "grid" === l.navigationMode ? i : void 0)
        }

        function eN() {
            (E.isActive() || !1 === S.prev()) && eg().up && ec(n, i - 1)
        }

        function eI() {
            c.hasNavigatedVertically = !0, (E.isActive() || !1 === S.next()) && eg().down && ec(n, i + 1)
        }

        function eT() {
            var e;
            !1 === S.prev() && (eg().up ? eN() : (e = l.rtl ? aF(v.wrapper, ".slides>section.future").pop() : aF(v.wrapper, ".slides>section.past").pop()) && ec(n - 1, e.querySelectorAll("section").length - 1 || void 0))
        }

        function eD() {
            if (c.hasNavigatedHorizontally = !0, c.hasNavigatedVertically = !0, !1 === S.next()) {
                var e = eg();
                e.down && e.right && l.loop && ei() && (e.down = !1), e.down ? eI() : l.rtl ? eC() : eP()
            }
        }

        function eM(e) {
            "running" === g && /section/gi.test(e.target.nodeName) && (g = "idle", q({
                type: "slidetransitionend",
                data: {
                    indexh: n,
                    indexv: i,
                    previousSlide: r,
                    currentSlide: a
                }
            }))
        }

        function eO(e) {
            J()
        }

        function e0(e) {
            !1 === document.hidden && document.activeElement !== document.body && ("function" == typeof document.activeElement.blur && document.activeElement.blur(), document.body.focus())
        }

        function ez(e) {
            if (e.currentTarget && e.currentTarget.hasAttribute("href")) {
                var t, n = e.currentTarget.getAttribute("href");
                n && (t = n, G(), v.overlay = document.createElement("div"), v.overlay.classList.add("overlay"), v.overlay.classList.add("overlay-preview"), v.wrapper.appendChild(v.overlay), v.overlay.innerHTML = '<header>\n				<a class="close" href="#"><span class="icon"></span></a>\n				<a class="external" href="'.concat(t, '" target="_blank"><span class="icon"></span></a>\n			</header>\n			<div class="spinner"></div>\n			<div class="viewport">\n				<iframe src="').concat(t, '"></iframe>\n				<small class="viewport-inner">\n					<span class="x-frame-error">Unable to load iframe. This is likely due to the site\'s policy (x-frame-options).</span>\n				</small>\n			</div>'), v.overlay.querySelector("iframe").addEventListener("load", function(e) {
                    v.overlay.classList.add("loaded")
                }, !1), v.overlay.querySelector(".close").addEventListener("click", function(e) {
                    G(), e.preventDefault()
                }, !1), v.overlay.querySelector(".external").addEventListener("click", function(e) {
                    G()
                }, !1), e.preventDefault())
            }
        }

        function eH(e) {
            ea() && !1 === l.loop ? (ec(0, 0), eL()) : b ? eL() : ex()
        }
        var eB = {
            VERSION: oH,
            initialize: function n(i) {
                return v.wrapper = e, v.slides = e.querySelector(".slides"), !0 === (l = ax(ax(ax(ax(ax({}, oz), l), t), i), a2())).embedded ? v.viewport = aV(e, ".reveal-viewport") || e : (v.viewport = document.body, document.documentElement.classList.add("reveal-full-page")), v.viewport.classList.add("reveal-viewport"), window.addEventListener("load", J, !1), P.load(l.plugins, l.dependencies).then(M), new Promise(function(e) {
                    return s.on("ready", e)
                })
            },
            configure: H,
            sync: ed,
            syncSlide: function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
                k.sync(t), S.sync(t), $.load(t), k.update(), D.update()
            },
            syncFragments: S.sync.bind(S),
            slide: ec,
            left: eC,
            right: eP,
            up: eN,
            down: eI,
            prev: eT,
            next: eD,
            navigateLeft: eC,
            navigateRight: eP,
            navigateUp: eN,
            navigateDown: eI,
            navigatePrev: eT,
            navigateNext: eD,
            navigateFragment: S.goto.bind(S),
            prevFragment: S.prev.bind(S),
            nextFragment: S.next.bind(S),
            on: j,
            off: F,
            addEventListener: j,
            removeEventListener: F,
            layout: J,
            shuffle: ef,
            availableRoutes: eg,
            availableFragments: S.availableRoutes.bind(S),
            toggleHelp: function e(t) {
                "boolean" == typeof t ? t ? Y() : G() : v.overlay ? G() : Y()
            },
            toggleOverview: E.toggle.bind(E),
            togglePause: el,
            toggleAutoSlide: function e(t) {
                "boolean" == typeof t ? t ? eL() : ex() : b ? eL() : ex()
            },
            isFirstSlide: er,
            isLastSlide: ea,
            isLastVerticalSlide: ei,
            isVerticalSlide: en,
            isPaused: eu,
            isAutoSliding: function e() {
                return !(!p || b)
            },
            isSpeakerNotes: D.isSpeakerNotesWindow.bind(D),
            isOverview: E.isActive.bind(E),
            isFocused: I.isFocused.bind(I),
            isPrintingPDF: N.isPrintingPDF.bind(N),
            isReady: function() {
                return u
            },
            loadSlide: $.load.bind($),
            unloadSlide: $.unload.bind($),
            addEventListeners: B,
            removeEventListeners: U,
            dispatchEvent: q,
            getState: eE,
            setState: function e(t) {
                if ("object" === aw(t)) {
                    ec(aq(t.indexh), aq(t.indexv), aq(t.indexf));
                    var n = aq(t.paused),
                        i = aq(t.overview);
                    "boolean" == typeof n && n !== eu() && el(n), "boolean" == typeof i && i !== E.isActive() && E.toggle(i)
                }
            },
            getProgress: function e() {
                var t = ek(),
                    n = ep();
                if (a) {
                    var i = a.querySelectorAll(".fragment");
                    i.length > 0 && (n += a.querySelectorAll(".fragment.visible").length / i.length * .9)
                }
                return Math.min(n / (t - 1), 1)
            },
            getIndices: em,
            getSlidesAttributes: function e() {
                return ey().map(function(e) {
                    for (var t = {}, n = 0; n < e.attributes.length; n++) {
                        var i = e.attributes[n];
                        t[i.name] = i.value
                    }
                    return t
                })
            },
            getSlidePastCount: ep,
            getTotalSlides: ek,
            getSlide: eS,
            getPreviousSlide: function() {
                return r
            },
            getCurrentSlide: function() {
                return a
            },
            getSlideBackground: function e(t, n) {
                var i = "number" == typeof t ? eS(t, n) : t;
                if (i) return i.slideBackgroundElement
            },
            getSlideNotes: D.getSlideNotes.bind(D),
            getSlides: ey,
            getHorizontalSlides: eb,
            getVerticalSlides: e$,
            hasHorizontalSlides: e_,
            hasVerticalSlides: ew,
            hasNavigatedHorizontally: function() {
                return c.hasNavigatedHorizontally
            },
            hasNavigatedVertically: function() {
                return c.hasNavigatedVertically
            },
            addKeyBinding: R.addKeyBinding.bind(R),
            removeKeyBinding: R.removeKeyBinding.bind(R),
            triggerKey: R.triggerKey.bind(R),
            registerKeyboardShortcut: R.registerKeyboardShortcut.bind(R),
            getComputedSlideSize: Z,
            getScale: function() {
                return f
            },
            getConfig: function() {
                return l
            },
            getQueryHash: a2,
            getRevealElement: function() {
                return e
            },
            getSlidesElement: function() {
                return v.slides
            },
            getViewportElement: function() {
                return v.viewport
            },
            getBackgroundsElement: function() {
                return k.element
            },
            registerPlugin: P.registerPlugin.bind(P),
            hasPlugin: P.hasPlugin.bind(P),
            getPlugin: P.getPlugin.bind(P),
            getPlugins: P.getRegisteredPlugins.bind(P)
        };
        return aj(s, ax(ax({}, eB), {}, {
            announceStatus: O,
            getStatusText: z,
            print: N,
            focus: I,
            progress: L,
            controls: x,
            location: A,
            overview: E,
            fragments: S,
            slideContent: $,
            slideNumber: _,
            onUserInput: function e(t) {
                l.autoSlideStoppable && ex()
            },
            closeOverlay: G,
            updateSlidesVisibility: ev,
            layoutSlideContents: Q,
            transformSlides: W,
            cueAutoSlide: eR,
            cancelAutoSlide: eA
        })), eB
    }
    var oU = oB,
        oj = [];
    return oU.initialize = function(e) {
        return Object.assign(oU, new oB(document.querySelector(".reveal"), e)), oj.map(function(e) {
            return e(oU)
        }), oU.initialize()
    }, ["configure", "on", "off", "addEventListener", "removeEventListener", "registerPlugin", ].forEach(function(e) {
        oU[e] = function() {
            for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
            oj.push(function(t) {
                var i;
                return (i = t[e]).call.apply(i, [null].concat(n))
            })
        }
    }), oU.isReady = function() {
        return !1
    }, oU.VERSION = oH, oU
});