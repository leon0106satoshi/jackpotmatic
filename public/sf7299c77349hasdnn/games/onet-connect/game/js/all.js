! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    var n = [],
        r = n.slice,
        i = n.concat,
        o = n.push,
        s = n.indexOf,
        a = {},
        u = a.toString,
        l = a.hasOwnProperty,
        c = {},
        f = e.document,
        p = "2.1.1",
        d = function(e, t) {
            return new d.fn.init(e, t)
        },
        h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        g = /^-ms-/,
        m = /-([\da-z])/gi,
        v = function(e, t) {
            return t.toUpperCase()
        };

    function y(e) {
        var t = e.length,
            n = d.type(e);
        return "function" !== n && !d.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }
    d.fn = d.prototype = {
        jquery: p,
        constructor: d,
        selector: "",
        length: 0,
        toArray: function() {
            return r.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : r.call(this)
        },
        pushStack: function(e) {
            var t = d.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return d.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(d.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: o,
        sort: n.sort,
        splice: n.splice
    }, d.extend = d.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || d.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], s !== (r = e[t]) && (l && r && (d.isPlainObject(r) || (i = d.isArray(r))) ? (i ? (i = !1, o = n && d.isArray(n) ? n : []) : o = n && d.isPlainObject(n) ? n : {}, s[t] = d.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, d.extend({
        expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === d.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !d.isArray(e) && e - parseFloat(e) >= 0
        },
        isPlainObject: function(e) {
            return "object" === d.type(e) && !e.nodeType && !d.isWindow(e) && !(e.constructor && !l.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? a[u.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            (e = d.trim(e)) && (1 === e.indexOf("use strict") ? ((t = f.createElement("script")).text = e, f.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(g, "ms-").replace(m, v)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r = 0,
                i = e.length,
                o = y(e);
            if (n) {
                if (o)
                    for (; i > r && !1 !== t.apply(e[r], n); r++);
                else
                    for (r in e)
                        if (!1 === t.apply(e[r], n)) break
            } else if (o)
                for (; i > r && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(h, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (y(Object(e)) ? d.merge(n, "string" == typeof e ? [e] : e) : o.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : s.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; o > i; i++) !t(e[i], i) !== s && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, o = 0,
                s = e.length,
                a = [];
            if (y(e))
                for (; s > o; o++) null != (r = t(e[o], o, n)) && a.push(r);
            else
                for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
            return i.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            return "string" == typeof t && (n = e[t], t = e, e = n), d.isFunction(e) ? (i = r.call(arguments, 2), (o = function() {
                return e.apply(t || this, i.concat(r.call(arguments)))
            }).guid = e.guid = e.guid || d.guid++, o) : void 0
        },
        now: Date.now,
        support: c
    }), d.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        a["[object " + t + "]"] = t.toLowerCase()
    });
    var x = function(e) {
        var t, n, r, i, o, s, a, u, l, c, f, p, d, h, g, m, v, y, x, b = "sizzle" + -new Date,
            w = e.document,
            T = 0,
            C = 0,
            N = oe(),
            k = oe(),
            E = oe(),
            S = function(e, t) {
                return e === t && (f = !0), 0
            },
            j = "undefined",
            D = 1 << 31,
            A = {}.hasOwnProperty,
            L = [],
            q = L.pop,
            H = L.push,
            O = L.push,
            F = L.slice,
            P = L.indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            },
            M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            W = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            $ = W.replace("w", "w#"),
            B = "\\[" + R + "*(" + W + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + $ + "))|)" + R + "*\\]",
            I = ":(" + W + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)",
            _ = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            z = new RegExp("^" + R + "*," + R + "*"),
            X = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            U = new RegExp("=" + R + "*([^\\]'\"]*?)" + R + "*\\]", "g"),
            V = new RegExp(I),
            Y = new RegExp("^" + $ + "$"),
            G = {
                ID: new RegExp("^#(" + W + ")"),
                CLASS: new RegExp("^\\.(" + W + ")"),
                TAG: new RegExp("^(" + W.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + B),
                PSEUDO: new RegExp("^" + I),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + M + ")$", "i"),
                needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
            },
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = /'|\\/g,
            ne = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"),
            re = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            O.apply(L = F.call(w.childNodes), w.childNodes), L[w.childNodes.length].nodeType
        } catch (e) {
            O = {
                apply: L.length ? function(e, t) {
                    H.apply(e, F.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function ie(e, t, r, i) {
            var o, a, l, c, f, h, v, y, T, C;
            if ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, r = r || [], !e || "string" != typeof e) return r;
            if (1 !== (c = t.nodeType) && 9 !== c) return [];
            if (g && !i) {
                if (o = Z.exec(e))
                    if (l = o[1]) {
                        if (9 === c) {
                            if (!(a = t.getElementById(l)) || !a.parentNode) return r;
                            if (a.id === l) return r.push(a), r
                        } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(l)) && x(t, a) && a.id === l) return r.push(a), r
                    } else {
                        if (o[2]) return O.apply(r, t.getElementsByTagName(e)), r;
                        if ((l = o[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(r, t.getElementsByClassName(l)), r
                    }
                if (n.qsa && (!m || !m.test(e))) {
                    if (y = v = b, T = t, C = 9 === c && e, 1 === c && "object" !== t.nodeName.toLowerCase()) {
                        for (h = s(e), (v = t.getAttribute("id")) ? y = v.replace(te, "\\$&") : t.setAttribute("id", y), y = "[id='" + y + "'] ", f = h.length; f--;) h[f] = y + ge(h[f]);
                        T = ee.test(e) && de(t.parentNode) || t, C = h.join(",")
                    }
                    if (C) try {
                        return O.apply(r, T.querySelectorAll(C)), r
                    } catch (e) {} finally {
                        v || t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(_, "$1"), t, r, i)
        }

        function oe() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
        }

        function se(e) {
            return e[b] = !0, e
        }

        function ae(e) {
            var t = d.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ue(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) r.attrHandle[n[i]] = t
        }

        function le(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ce(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function fe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function pe(e) {
            return se(function(t) {
                return t = +t, se(function(n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function de(e) {
            return e && typeof e.getElementsByTagName !== j && e
        }
        for (t in n = ie.support = {}, o = ie.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, p = ie.setDocument = function(e) {
                var t, i = e ? e.ownerDocument || e : w,
                    s = i.defaultView;
                return i !== d && 9 === i.nodeType && i.documentElement ? (d = i, h = i.documentElement, g = !o(i), s && s !== s.top && (s.addEventListener ? s.addEventListener("unload", function() {
                    p()
                }, !1) : s.attachEvent && s.attachEvent("onunload", function() {
                    p()
                })), n.attributes = ae(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = ae(function(e) {
                    return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = K.test(i.getElementsByClassName) && ae(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), n.getById = ae(function(e) {
                    return h.appendChild(e).id = b, !i.getElementsByName || !i.getElementsByName(b).length
                }), n.getById ? (r.find.ID = function(e, t) {
                    if (typeof t.getElementById !== j && g) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, r.filter.ID = function(e) {
                    var t = e.replace(ne, re);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete r.find.ID, r.filter.ID = function(e) {
                    var t = e.replace(ne, re);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return typeof t.getElementsByTagName !== j ? t.getElementsByTagName(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                    return typeof t.getElementsByClassName !== j && g ? t.getElementsByClassName(e) : void 0
                }, v = [], m = [], (n.qsa = K.test(i.querySelectorAll)) && (ae(function(e) {
                    e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && m.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + R + "*(?:value|" + M + ")"), e.querySelectorAll(":checked").length || m.push(":checked")
                }), ae(function(e) {
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + R + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ae(function(e) {
                    n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), v.push("!=", I)
                }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(h.compareDocumentPosition), x = t || K.test(h.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, S = t ? function(e, t) {
                    if (e === t) return f = !0, 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === i || e.ownerDocument === w && x(w, e) ? -1 : t === i || t.ownerDocument === w && x(w, t) ? 1 : c ? P.call(c, e) - P.call(c, t) : 0 : 4 & r ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return f = !0, 0;
                    var n, r = 0,
                        o = e.parentNode,
                        s = t.parentNode,
                        a = [e],
                        u = [t];
                    if (!o || !s) return e === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : c ? P.call(c, e) - P.call(c, t) : 0;
                    if (o === s) return le(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) u.unshift(n);
                    for (; a[r] === u[r];) r++;
                    return r ? le(a[r], u[r]) : a[r] === w ? -1 : u[r] === w ? 1 : 0
                }, i) : d
            }, ie.matches = function(e, t) {
                return ie(e, null, null, t)
            }, ie.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== d && p(e), t = t.replace(U, "='$1']"), !(!n.matchesSelector || !g || v && v.test(t) || m && m.test(t))) try {
                    var r = y.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (e) {}
                return ie(t, d, null, [e]).length > 0
            }, ie.contains = function(e, t) {
                return (e.ownerDocument || e) !== d && p(e), x(e, t)
            }, ie.attr = function(e, t) {
                (e.ownerDocument || e) !== d && p(e);
                var i = r.attrHandle[t.toLowerCase()],
                    o = i && A.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, ie.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ie.uniqueSort = function(e) {
                var t, r = [],
                    i = 0,
                    o = 0;
                if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(S), f) {
                    for (; t = e[o++];) t === e[o] && (i = r.push(o));
                    for (; i--;) e.splice(r[i], 1)
                }
                return c = null, e
            }, i = ie.getText = function(e) {
                var t, n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[r++];) n += i(t);
                return n
            }, (r = ie.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ne, re), e[3] = (e[3] || e[4] || e[5] || "").replace(ne, re), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ne, re).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = N[e + " "];
                        return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && N(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = ie.attr(r, e);
                            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, u) {
                            var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = a && t.nodeName.toLowerCase(),
                                y = !u && !a;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (f = t; f = f[g];)
                                            if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                    for (d = (l = (c = m[b] || (m[b] = {}))[e] || [])[0] === T && l[1], p = l[0] === T && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();)
                                        if (1 === f.nodeType && ++p && f === t) {
                                            c[e] = [T, d, p];
                                            break
                                        }
                                } else if (y && (l = (t[b] || (t[b] = {}))[e]) && l[0] === T) p = l[1];
                                else
                                    for (;
                                        (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[b] || (f[b] = {}))[e] = [T, p]), f !== t)););
                                return (p -= i) === r || p % r == 0 && p / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                        return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                            for (var r, o = i(e, t), s = o.length; s--;) e[r = P.call(e, o[s])] = !(n[r] = o[s])
                        }) : function(e) {
                            return i(e, 0, n)
                        }) : i
                    }
                },
                pseudos: {
                    not: se(function(e) {
                        var t = [],
                            n = [],
                            r = a(e.replace(_, "$1"));
                        return r[b] ? se(function(e, t, n, i) {
                            for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), !n.pop()
                        }
                    }),
                    has: se(function(e) {
                        return function(t) {
                            return ie(e, t).length > 0
                        }
                    }),
                    contains: se(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                        }
                    }),
                    lang: se(function(e) {
                        return Y.test(e || "") || ie.error("unsupported lang: " + e), e = e.replace(ne, re).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === h
                    },
                    focus: function(e) {
                        return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !r.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: pe(function() {
                        return [0]
                    }),
                    last: pe(function(e, t) {
                        return [t - 1]
                    }),
                    eq: pe(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: pe(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: pe(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: pe(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: pe(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = r.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = ce(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = fe(t);

        function he() {}

        function ge(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function me(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = C++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, s) {
                var a, u, l = [T, o];
                if (s) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, s)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if ((a = (u = t[b] || (t[b] = {}))[r]) && a[0] === T && a[1] === o) return l[2] = a[2];
                            if (u[r] = l, l[2] = e(t, n, s)) return !0
                        }
            }
        }

        function ve(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function ye(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)(o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
            return s
        }

        function xe(e, t, n, r, i, o) {
            return r && !r[b] && (r = xe(r)), i && !i[b] && (i = xe(i, o)), se(function(o, s, a, u) {
                var l, c, f, p = [],
                    d = [],
                    h = s.length,
                    g = o || function(e, t, n) {
                        for (var r = 0, i = t.length; i > r; r++) ie(e, t[r], n);
                        return n
                    }(t || "*", a.nodeType ? [a] : a, []),
                    m = !e || !o && t ? g : ye(g, p, e, a, u),
                    v = n ? i || (o ? e : h || r) ? [] : s : m;
                if (n && n(m, v, a, u), r)
                    for (l = ye(v, d), r(l, [], a, u), c = l.length; c--;)(f = l[c]) && (v[d[c]] = !(m[d[c]] = f));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (l = [], c = v.length; c--;)(f = v[c]) && l.push(m[c] = f);
                            i(null, v = [], l, u)
                        }
                        for (c = v.length; c--;)(f = v[c]) && (l = i ? P.call(o, f) : p[c]) > -1 && (o[l] = !(s[l] = f))
                    }
                } else v = ye(v === s ? v.splice(h, v.length) : v), i ? i(null, s, v, u) : O.apply(s, v)
            })
        }

        function be(e) {
            for (var t, n, i, o = e.length, s = r.relative[e[0].type], a = s || r.relative[" "], u = s ? 1 : 0, c = me(function(e) {
                    return e === t
                }, a, !0), f = me(function(e) {
                    return P.call(t, e) > -1
                }, a, !0), p = [function(e, n, r) {
                    return !s && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r))
                }]; o > u; u++)
                if (n = r.relative[e[u].type]) p = [me(ve(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; o > i && !r.relative[e[i].type]; i++);
                        return xe(u > 1 && ve(p), u > 1 && ge(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(_, "$1"), n, i > u && be(e.slice(u, i)), o > i && be(e = e.slice(i)), o > i && ge(e))
                    }
                    p.push(n)
                }
            return ve(p)
        }

        function we(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function(o, s, a, u, c) {
                    var f, p, h, g = 0,
                        m = "0",
                        v = o && [],
                        y = [],
                        x = l,
                        b = o || i && r.find.TAG("*", c),
                        w = T += null == x ? 1 : Math.random() || .1,
                        C = b.length;
                    for (c && (l = s !== d && s); m !== C && null != (f = b[m]); m++) {
                        if (i && f) {
                            for (p = 0; h = e[p++];)
                                if (h(f, s, a)) {
                                    u.push(f);
                                    break
                                }
                            c && (T = w)
                        }
                        n && ((f = !h && f) && g--, o && v.push(f))
                    }
                    if (g += m, n && m !== g) {
                        for (p = 0; h = t[p++];) h(v, y, s, a);
                        if (o) {
                            if (g > 0)
                                for (; m--;) v[m] || y[m] || (y[m] = q.call(u));
                            y = ye(y)
                        }
                        O.apply(u, y), c && !o && y.length > 0 && g + t.length > 1 && ie.uniqueSort(u)
                    }
                    return c && (T = w, l = x), v
                };
            return n ? se(o) : o
        }
        return he.prototype = r.filters = r.pseudos, r.setFilters = new he, s = ie.tokenize = function(e, t) {
            var n, i, o, s, a, u, l, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, u = [], l = r.preFilter; a;) {
                for (s in (!n || (i = z.exec(a))) && (i && (a = a.slice(i[0].length) || a), u.push(o = [])), n = !1, (i = X.exec(a)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(_, " ")
                    }), a = a.slice(n.length)), r.filter) !(i = G[s].exec(a)) || l[s] && !(i = l[s](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: s,
                    matches: i
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? ie.error(e) : k(e, u).slice(0)
        }, a = ie.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = E[e + " "];
            if (!o) {
                for (t || (t = s(e)), n = t.length; n--;)(o = be(t[n]))[b] ? r.push(o) : i.push(o);
                (o = E(e, we(i, r))).selector = e
            }
            return o
        }, u = ie.select = function(e, t, i, o) {
            var u, l, c, f, p, d = "function" == typeof e && e,
                h = !o && s(e = d.selector || e);
            if (i = i || [], 1 === h.length) {
                if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && n.getById && 9 === t.nodeType && g && r.relative[l[1].type]) {
                    if (!(t = (r.find.ID(c.matches[0].replace(ne, re), t) || [])[0])) return i;
                    d && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (u = G.needsContext.test(e) ? 0 : l.length; u-- && (c = l[u], !r.relative[f = c.type]);)
                    if ((p = r.find[f]) && (o = p(c.matches[0].replace(ne, re), ee.test(l[0].type) && de(t.parentNode) || t))) {
                        if (l.splice(u, 1), !(e = o.length && ge(l))) return O.apply(i, o), i;
                        break
                    }
            }
            return (d || a(e, h))(o, t, !g, i, ee.test(e) && de(t.parentNode) || t), i
        }, n.sortStable = b.split("").sort(S).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ae(function(e) {
            return 1 & e.compareDocumentPosition(d.createElement("div"))
        }), ae(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ue("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ae(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ue("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), ae(function(e) {
            return null == e.getAttribute("disabled")
        }) || ue(M, function(e, t, n) {
            var r;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), ie
    }(e);
    d.find = x, d.expr = x.selectors, d.expr[":"] = d.expr.pseudos, d.unique = x.uniqueSort, d.text = x.getText, d.isXMLDoc = x.isXML, d.contains = x.contains;
    var b = d.expr.match.needsContext,
        w = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        T = /^.[^:#\[\.,]*$/;

    function C(e, t, n) {
        if (d.isFunction(t)) return d.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return d.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (T.test(t)) return d.filter(t, e, n);
            t = d.filter(t, e)
        }
        return d.grep(e, function(e) {
            return s.call(t, e) >= 0 !== n
        })
    }
    d.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? d.find.matchesSelector(r, e) ? [r] : [] : d.find.matches(e, d.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, d.fn.extend({
        find: function(e) {
            var t, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(d(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (d.contains(i[t], this)) return !0
            }));
            for (t = 0; n > t; t++) d.find(e, i[t], r);
            return (r = this.pushStack(n > 1 ? d.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(C(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(C(this, e || [], !0))
        },
        is: function(e) {
            return !!C(this, "string" == typeof e && b.test(e) ? d(e) : e || [], !1).length
        }
    });
    var N, k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (d.fn.init = function(e, t) {
        var n, r;
        if (!e) return this;
        if ("string" == typeof e) {
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : k.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || N).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof d ? t[0] : t, d.merge(this, d.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : f, !0)), w.test(n[1]) && d.isPlainObject(t))
                    for (n in t) d.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return (r = f.getElementById(n[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = f, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : d.isFunction(e) ? void 0 !== N.ready ? N.ready(e) : e(d) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), d.makeArray(e, this))
    }).prototype = d.fn, N = d(f);
    var E = /^(?:parents|prev(?:Until|All))/,
        S = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function j(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    d.extend({
        dir: function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && d(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), d.fn.extend({
        has: function(e) {
            var t = d(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (d.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], s = b.test(e) || "string" != typeof e ? d(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && d.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? d.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? s.call(d(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(d.unique(d.merge(this.get(), d(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), d.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return d.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return d.dir(e, "parentNode", n)
        },
        next: function(e) {
            return j(e, "nextSibling")
        },
        prev: function(e) {
            return j(e, "previousSibling")
        },
        nextAll: function(e) {
            return d.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return d.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return d.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return d.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return d.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return d.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || d.merge([], e.childNodes)
        }
    }, function(e, t) {
        d.fn[e] = function(n, r) {
            var i = d.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = d.filter(r, i)), this.length > 1 && (S[e] || d.unique(i), E.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var D, A = /\S+/g,
        L = {};

    function q() {
        f.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1), d.ready()
    }
    d.Callbacks = function(e) {
        var t, n, r, i, o, s, a = [],
            u = !(e = "string" == typeof e ? L[e] || function(e) {
                var t = L[e] = {};
                return d.each(e.match(A) || [], function(e, n) {
                    t[n] = !0
                }), t
            }(e) : d.extend({}, e)).once && [],
            l = function(f) {
                for (t = e.memory && f, n = !0, s = i || 0, i = 0, o = a.length, r = !0; a && o > s; s++)
                    if (!1 === a[s].apply(f[0], f[1]) && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                r = !1, a && (u ? u.length && l(u.shift()) : t ? a = [] : c.disable())
            },
            c = {
                add: function() {
                    if (a) {
                        var n = a.length;
                        ! function t(n) {
                            d.each(n, function(n, r) {
                                var i = d.type(r);
                                "function" === i ? e.unique && c.has(r) || a.push(r) : r && r.length && "string" !== i && t(r)
                            })
                        }(arguments), r ? o = a.length : t && (i = n, l(t))
                    }
                    return this
                },
                remove: function() {
                    return a && d.each(arguments, function(e, t) {
                        for (var n;
                            (n = d.inArray(t, a, n)) > -1;) a.splice(n, 1), r && (o >= n && o--, s >= n && s--)
                    }), this
                },
                has: function(e) {
                    return e ? d.inArray(e, a) > -1 : !(!a || !a.length)
                },
                empty: function() {
                    return a = [], o = 0, this
                },
                disable: function() {
                    return a = u = t = void 0, this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return u = void 0, t || c.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, t) {
                    return !a || n && !u || (t = [e, (t = t || []).slice ? t.slice() : t], r ? u.push(t) : l(t)), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return c
    }, d.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", d.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", d.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", d.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return d.Deferred(function(n) {
                            d.each(t, function(t, o) {
                                var s = d.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && d.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? d.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, d.each(t, function(e, o) {
                var s = o[2],
                    a = o[3];
                r[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, i, o = 0,
                s = r.call(arguments),
                a = s.length,
                u = 1 !== a || e && d.isFunction(e.promise) ? a : 0,
                l = 1 === u ? e : d.Deferred(),
                c = function(e, n, i) {
                    return function(o) {
                        n[e] = this, i[e] = arguments.length > 1 ? r.call(arguments) : o, i === t ? l.notifyWith(n, i) : --u || l.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), i = new Array(a); a > o; o++) s[o] && d.isFunction(s[o].promise) ? s[o].promise().done(c(o, i, s)).fail(l.reject).progress(c(o, n, t)) : --u;
            return u || l.resolveWith(i, s), l.promise()
        }
    }), d.fn.ready = function(e) {
        return d.ready.promise().done(e), this
    }, d.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? d.readyWait++ : d.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --d.readyWait : d.isReady) || (d.isReady = !0, !0 !== e && --d.readyWait > 0 || (D.resolveWith(f, [d]), d.fn.triggerHandler && (d(f).triggerHandler("ready"), d(f).off("ready"))))
        }
    }), d.ready.promise = function(t) {
        return D || (D = d.Deferred(), "complete" === f.readyState ? setTimeout(d.ready) : (f.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1))), D.promise(t)
    }, d.ready.promise();
    var H = d.access = function(e, t, n, r, i, o, s) {
        var a = 0,
            u = e.length,
            l = null == n;
        if ("object" === d.type(n))
            for (a in i = !0, n) d.access(e, t, a, n[a], !0, o, s);
        else if (void 0 !== r && (i = !0, d.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                return l.call(d(e), n)
            })), t))
            for (; u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    };

    function O() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = d.expando + Math.random()
    }
    d.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, O.uid = 1, O.accepts = d.acceptData, O.prototype = {
        key: function(e) {
            if (!O.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = O.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, d.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var r, i = this.key(e),
                o = this.cache[i];
            if ("string" == typeof t) o[t] = n;
            else if (d.isEmptyObject(o)) d.extend(this.cache[i], t);
            else
                for (r in t) o[r] = t[r];
            return o
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, d.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = this.key(e),
                s = this.cache[o];
            if (void 0 === t) this.cache[o] = {};
            else {
                d.isArray(t) ? r = t.concat(t.map(d.camelCase)) : (i = d.camelCase(t), t in s ? r = [t, i] : r = (r = i) in s ? [r] : r.match(A) || []), n = r.length;
                for (; n--;) delete s[r[n]]
            }
        },
        hasData: function(e) {
            return !d.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var F = new O,
        P = new O,
        M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        R = /([A-Z])/g;

    function W(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(R, "-$1").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : M.test(n) ? d.parseJSON(n) : n)
                } catch (e) {}
                P.set(e, t, n)
            } else n = void 0;
        return n
    }
    d.extend({
        hasData: function(e) {
            return P.hasData(e) || F.hasData(e)
        },
        data: function(e, t, n) {
            return P.access(e, t, n)
        },
        removeData: function(e, t) {
            P.remove(e, t)
        },
        _data: function(e, t, n) {
            return F.access(e, t, n)
        },
        _removeData: function(e, t) {
            F.remove(e, t)
        }
    }), d.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = P.get(o), 1 === o.nodeType && !F.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (0 === (r = s[n].name).indexOf("data-") && (r = d.camelCase(r.slice(5)), W(o, r, i[r])));
                    F.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                P.set(this, e)
            }) : H(this, function(t) {
                var n, r = d.camelCase(e);
                if (o && void 0 === t) {
                    if (void 0 !== (n = P.get(o, e))) return n;
                    if (void 0 !== (n = P.get(o, r))) return n;
                    if (void 0 !== (n = W(o, r, void 0))) return n
                } else this.each(function() {
                    var n = P.get(this, r);
                    P.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && P.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                P.remove(this, e)
            })
        }
    }), d.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = F.get(e, t), n && (!r || d.isArray(n) ? r = F.access(e, t, d.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = d.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = d._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                d.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return F.get(e, n) || F.access(e, n, {
                empty: d.Callbacks("once memory").add(function() {
                    F.remove(e, [t + "queue", n])
                })
            })
        }
    }), d.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? d.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = d.queue(this, e, t);
                d._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && d.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                d.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = d.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = F.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        B = ["Top", "Right", "Bottom", "Left"],
        I = function(e, t) {
            return e = t || e, "none" === d.css(e, "display") || !d.contains(e.ownerDocument, e)
        },
        _ = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = f.createDocumentFragment().appendChild(f.createElement("div")),
            t = f.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), c.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", c.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var z = "undefined";
    c.focusinBubbles = "onfocusin" in e;
    var X = /^key/,
        U = /^(?:mouse|pointer|contextmenu)|click/,
        V = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;

    function G() {
        return !0
    }

    function Q() {
        return !1
    }

    function J() {
        try {
            return f.activeElement
        } catch (e) {}
    }
    d.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, h, g, m, v = F.get(e);
            if (v)
                for (n.handler && (n = (o = n).handler, i = o.selector), n.guid || (n.guid = d.guid++), (u = v.events) || (u = v.events = {}), (s = v.handle) || (s = v.handle = function(t) {
                        return typeof d !== z && d.event.triggered !== t.type ? d.event.dispatch.apply(e, arguments) : void 0
                    }), l = (t = (t || "").match(A) || [""]).length; l--;) h = m = (a = Y.exec(t[l]) || [])[1], g = (a[2] || "").split(".").sort(), h && (f = d.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, f = d.event.special[h] || {}, c = d.extend({
                    type: h,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && d.expr.match.needsContext.test(i),
                    namespace: g.join(".")
                }, o), (p = u[h]) || ((p = u[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, g, s) || e.addEventListener && e.addEventListener(h, s, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), d.event.global[h] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, h, g, m, v = F.hasData(e) && F.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(A) || [""]).length; l--;)
                    if (h = m = (a = Y.exec(t[l]) || [])[1], g = (a[2] || "").split(".").sort(), h) {
                        for (f = d.event.special[h] || {}, p = u[h = (r ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !p.length && (f.teardown && !1 !== f.teardown.call(e, g, v.handle) || d.removeEvent(e, h, v.handle), delete u[h])
                    } else
                        for (h in u) d.event.remove(e, h + t[l], n, r, !0);
                d.isEmptyObject(u) && (delete v.handle, F.remove(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, s, a, u, c, p, h, g = [r || f],
                m = l.call(t, "type") ? t.type : t,
                v = l.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || f, 3 !== r.nodeType && 8 !== r.nodeType && !V.test(m + d.event.triggered) && (m.indexOf(".") >= 0 && (m = (v = m.split(".")).shift(), v.sort()), c = m.indexOf(":") < 0 && "on" + m, (t = t[d.expando] ? t : new d.Event(m, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = v.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : d.makeArray(n, [t]), h = d.event.special[m] || {}, i || !h.trigger || !1 !== h.trigger.apply(r, n))) {
                if (!i && !h.noBubble && !d.isWindow(r)) {
                    for (u = h.delegateType || m, V.test(u + m) || (s = s.parentNode); s; s = s.parentNode) g.push(s), a = s;
                    a === (r.ownerDocument || f) && g.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = g[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : h.bindType || m, (p = (F.get(s, "events") || {})[t.type] && F.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && d.acceptData(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = m, i || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(g.pop(), n) || !d.acceptData(r) || c && d.isFunction(r[m]) && !d.isWindow(r) && ((a = r[c]) && (r[c] = null), d.event.triggered = m, r[m](), d.event.triggered = void 0, a && (r[c] = a)), t.result
            }
        },
        dispatch: function(e) {
            e = d.event.fix(e);
            var t, n, i, o, s, a = [],
                u = r.call(arguments),
                l = (F.get(this, "events") || {})[e.type] || [],
                c = d.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (a = d.event.handlers.call(this, e, l), t = 0;
                    (o = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, n = 0;
                        (s = o.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(s.namespace)) && (e.handleObj = s, e.data = s.data, void 0 !== (i = ((d.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, u)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [],
                a = t.delegateCount,
                u = e.target;
            if (a && u.nodeType && (!e.button || "click" !== e.type))
                for (; u !== this; u = u.parentNode || this)
                    if (!0 !== u.disabled || "click" !== e.type) {
                        for (r = [], n = 0; a > n; n++) void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? d(i, this).index(u) >= 0 : d.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || f).documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[d.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = U.test(i) ? this.mouseHooks : X.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new d.Event(o), t = r.length; t--;) e[n = r[t]] = o[n];
            return e.target || (e.target = f), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== J() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === J() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && d.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return d.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = d.extend(new d.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? d.event.trigger(i, null, t) : d.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, d.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, d.Event = function(e, t) {
        return this instanceof d.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? G : Q) : this.type = e, t && d.extend(this, t), this.timeStamp = e && e.timeStamp || d.now(), void(this[d.expando] = !0)) : new d.Event(e, t)
    }, d.Event.prototype = {
        isDefaultPrevented: Q,
        isPropagationStopped: Q,
        isImmediatePropagationStopped: Q,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = G, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = G, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = G, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, d.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        d.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget,
                    i = e.handleObj;
                return (!r || r !== this && !d.contains(this, r)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), c.focusinBubbles || d.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            d.event.simulate(t, e.target, d.event.fix(e), !0)
        };
        d.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = F.access(r, t);
                i || r.addEventListener(e, n, !0), F.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = F.access(r, t) - 1;
                i ? F.access(r, t, i) : (r.removeEventListener(e, n, !0), F.remove(r, t))
            }
        }
    }), d.fn.extend({
        on: function(e, t, n, r, i) {
            var o, s;
            if ("object" == typeof e) {
                for (s in "string" != typeof t && (n = n || t, t = void 0), e) this.on(s, t, n, e[s], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), !1 === r) r = Q;
            else if (!r) return this;
            return 1 === i && (o = r, (r = function(e) {
                return d().off(e), o.apply(this, arguments)
            }).guid = o.guid || (o.guid = d.guid++)), this.each(function() {
                d.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, d(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = Q), this.each(function() {
                d.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                d.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? d.event.trigger(e, t, n, !0) : void 0
        }
    });
    var K = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Z = /<([\w:]+)/,
        ee = /<|&#?\w+;/,
        te = /<(?:script|style|link)/i,
        ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        re = /^$|\/(?:java|ecma)script/i,
        ie = /^true\/(.*)/,
        oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        se = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ae(e, t) {
        return d.nodeName(e, "table") && d.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function ue(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function le(e) {
        var t = ie.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function ce(e, t) {
        for (var n = 0, r = e.length; r > n; n++) F.set(e[n], "globalEval", !t || F.get(t[n], "globalEval"))
    }

    function fe(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (F.hasData(e) && (o = F.access(e), s = F.set(t, o), l = o.events))
                for (i in delete s.handle, s.events = {}, l)
                    for (n = 0, r = l[i].length; r > n; n++) d.event.add(t, i, l[i][n]);
            P.hasData(e) && (a = P.access(e), u = d.extend({}, a), P.set(t, u))
        }
    }

    function pe(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && d.nodeName(e, t) ? d.merge([e], n) : n
    }

    function de(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && _.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }
    se.optgroup = se.option, se.tbody = se.tfoot = se.colgroup = se.caption = se.thead, se.th = se.td, d.extend({
        clone: function(e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0),
                u = d.contains(e.ownerDocument, e);
            if (!(c.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || d.isXMLDoc(e)))
                for (s = pe(a), r = 0, i = (o = pe(e)).length; i > r; r++) de(o[r], s[r]);
            if (t)
                if (n)
                    for (o = o || pe(e), s = s || pe(a), r = 0, i = o.length; i > r; r++) fe(o[r], s[r]);
                else fe(e, a);
            return (s = pe(a, "script")).length > 0 && ce(s, !u && pe(e, "script")), a
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], p = 0, h = e.length; h > p; p++)
                if ((i = e[p]) || 0 === i)
                    if ("object" === d.type(i)) d.merge(f, i.nodeType ? [i] : i);
                    else if (ee.test(i)) {
                for (o = o || c.appendChild(t.createElement("div")), s = (Z.exec(i) || ["", ""])[1].toLowerCase(), a = se[s] || se._default, o.innerHTML = a[1] + i.replace(K, "<$1></$2>") + a[2], l = a[0]; l--;) o = o.lastChild;
                d.merge(f, o.childNodes), (o = c.firstChild).textContent = ""
            } else f.push(t.createTextNode(i));
            for (c.textContent = "", p = 0; i = f[p++];)
                if ((!r || -1 === d.inArray(i, r)) && (u = d.contains(i.ownerDocument, i), o = pe(c.appendChild(i), "script"), u && ce(o), n))
                    for (l = 0; i = o[l++];) re.test(i.type || "") && n.push(i);
            return c
        },
        cleanData: function(e) {
            for (var t, n, r, i, o = d.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                if (d.acceptData(n) && ((i = n[F.expando]) && (t = F.cache[i]))) {
                    if (t.events)
                        for (r in t.events) o[r] ? d.event.remove(n, r) : d.removeEvent(n, r, t.handle);
                    F.cache[i] && delete F.cache[i]
                }
                delete P.cache[n[P.expando]]
            }
        }
    }), d.fn.extend({
        text: function(e) {
            return H(this, function(e) {
                return void 0 === e ? d.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ae(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ae(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? d.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || d.cleanData(pe(n)), n.parentNode && (t && d.contains(n.ownerDocument, n) && ce(pe(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (d.cleanData(pe(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return d.clone(this, e, t)
            })
        },
        html: function(e) {
            return H(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !te.test(e) && !se[(Z.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(K, "<$1></$2>");
                    try {
                        for (; r > n; n++) 1 === (t = this[n] || {}).nodeType && (d.cleanData(pe(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, d.cleanData(pe(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = i.apply([], e);
            var n, r, o, s, a, u, l = 0,
                f = this.length,
                p = this,
                h = f - 1,
                g = e[0],
                m = d.isFunction(g);
            if (m || f > 1 && "string" == typeof g && !c.checkClone && ne.test(g)) return this.each(function(n) {
                var r = p.eq(n);
                m && (e[0] = g.call(this, n, r.html())), r.domManip(e, t)
            });
            if (f && (r = (n = d.buildFragment(e, this[0].ownerDocument, !1, this)).firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (s = (o = d.map(pe(n, "script"), ue)).length; f > l; l++) a = n, l !== h && (a = d.clone(a, !0, !0), s && d.merge(o, pe(a, "script"))), t.call(this[l], a, l);
                if (s)
                    for (u = o[o.length - 1].ownerDocument, d.map(o, le), l = 0; s > l; l++) a = o[l], re.test(a.type || "") && !F.access(a, "globalEval") && d.contains(u, a) && (a.src ? d._evalUrl && d._evalUrl(a.src) : d.globalEval(a.textContent.replace(oe, "")))
            }
            return this
        }
    }), d.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        d.fn[e] = function(e) {
            for (var n, r = [], i = d(e), s = i.length - 1, a = 0; s >= a; a++) n = a === s ? this : this.clone(!0), d(i[a])[t](n), o.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var he, ge = {};

    function me(t, n) {
        var r, i = d(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : d.css(i[0], "display");
        return i.detach(), o
    }

    function ve(e) {
        var t = f,
            n = ge[e];
        return n || ("none" !== (n = me(e, t)) && n || ((t = (he = (he || d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = me(e, t), he.detach()), ge[e] = n), n
    }
    var ye = /^margin/,
        xe = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"),
        be = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        };

    function we(e, t, n) {
        var r, i, o, s, a = e.style;
        return (n = n || be(e)) && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || d.contains(e.ownerDocument, e) || (s = d.style(e, t)), xe.test(s) && ye.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function Te(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }! function() {
        var t, n, r = f.documentElement,
            i = f.createElement("div"),
            o = f.createElement("div");
        if (o.style) {
            function s() {
                o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o.innerHTML = "", r.appendChild(i);
                var s = e.getComputedStyle(o, null);
                t = "1%" !== s.top, n = "4px" === s.width, r.removeChild(i)
            }
            o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", c.clearCloneStyle = "content-box" === o.style.backgroundClip, i.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", i.appendChild(o), e.getComputedStyle && d.extend(c, {
                pixelPosition: function() {
                    return s(), t
                },
                boxSizingReliable: function() {
                    return null == n && s(), n
                },
                reliableMarginRight: function() {
                    var t, n = o.appendChild(f.createElement("div"));
                    return n.style.cssText = o.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", o.style.width = "1px", r.appendChild(i), t = !parseFloat(e.getComputedStyle(n, null).marginRight), r.removeChild(i), t
                }
            })
        }
    }(), d.swap = function(e, t, n, r) {
        var i, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        for (o in i = n.apply(e, r || []), t) e.style[o] = s[o];
        return i
    };
    var Ce = /^(none|table(?!-c[ea]).+)/,
        Ne = new RegExp("^(" + $ + ")(.*)$", "i"),
        ke = new RegExp("^([+-])=(" + $ + ")", "i"),
        Ee = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Se = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        je = ["Webkit", "O", "Moz", "ms"];

    function De(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = je.length; i--;)
            if ((t = je[i] + n) in e) return t;
        return r
    }

    function Ae(e, t, n) {
        var r = Ne.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function Le(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += d.css(e, n + B[o], !0, i)), r ? ("content" === n && (s -= d.css(e, "padding" + B[o], !0, i)), "margin" !== n && (s -= d.css(e, "border" + B[o] + "Width", !0, i))) : (s += d.css(e, "padding" + B[o], !0, i), "padding" !== n && (s += d.css(e, "border" + B[o] + "Width", !0, i)));
        return s
    }

    function qe(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = be(e),
            s = "border-box" === d.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if ((0 > (i = we(e, t, o)) || null == i) && (i = e.style[t]), xe.test(i)) return i;
            r = s && (c.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + Le(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function He(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++)(r = e[s]).style && (o[s] = F.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && I(r) && (o[s] = F.access(r, "olddisplay", ve(r.nodeName)))) : (i = I(r), "none" === n && i || F.set(r, "olddisplay", i ? n : d.css(r, "display"))));
        for (s = 0; a > s; s++)(r = e[s]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function Oe(e, t, n, r, i) {
        return new Oe.prototype.init(e, t, n, r, i)
    }
    d.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = we(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = d.camelCase(t),
                    u = e.style;
                return t = d.cssProps[a] || (d.cssProps[a] = De(u, a)), s = d.cssHooks[t] || d.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : ("string" === (o = typeof n) && (i = ke.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(d.css(e, t)), o = "number"), void(null != n && n == n && ("number" !== o || d.cssNumber[a] || (n += "px"), c.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = d.camelCase(t);
            return t = d.cssProps[a] || (d.cssProps[a] = De(e.style, a)), (s = d.cssHooks[t] || d.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = we(e, t, r)), "normal" === i && t in Se && (i = Se[t]), "" === n || n ? (o = parseFloat(i), !0 === n || d.isNumeric(o) ? o || 0 : i) : i
        }
    }), d.each(["height", "width"], function(e, t) {
        d.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? Ce.test(d.css(e, "display")) && 0 === e.offsetWidth ? d.swap(e, Ee, function() {
                    return qe(e, t, r)
                }) : qe(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && be(e);
                return Ae(0, n, r ? Le(e, t, r, "border-box" === d.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), d.cssHooks.marginRight = Te(c.reliableMarginRight, function(e, t) {
        return t ? d.swap(e, {
            display: "inline-block"
        }, we, [e, "marginRight"]) : void 0
    }), d.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        d.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + B[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, ye.test(e) || (d.cssHooks[e + t].set = Ae)
    }), d.fn.extend({
        css: function(e, t) {
            return H(this, function(e, t, n) {
                var r, i, o = {},
                    s = 0;
                if (d.isArray(t)) {
                    for (r = be(e), i = t.length; i > s; s++) o[t[s]] = d.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? d.style(e, t, n) : d.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return He(this, !0)
        },
        hide: function() {
            return He(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                I(this) ? d(this).show() : d(this).hide()
            })
        }
    }), d.Tween = Oe, Oe.prototype = {
        constructor: Oe,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (d.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Oe.propHooks[this.prop];
            return e && e.get ? e.get(this) : Oe.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Oe.propHooks[this.prop];
            return this.pos = t = this.options.duration ? d.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Oe.propHooks._default.set(this), this
        }
    }, Oe.prototype.init.prototype = Oe.prototype, Oe.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = d.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },
            set: function(e) {
                d.fx.step[e.prop] ? d.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[d.cssProps[e.prop]] || d.cssHooks[e.prop]) ? d.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Oe.propHooks.scrollTop = Oe.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, d.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, d.fx = Oe.prototype.init, d.fx.step = {};
    var Fe, Pe, Me = /^(?:toggle|show|hide)$/,
        Re = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"),
        We = /queueHooks$/,
        $e = [function(e, t, n) {
            var r, i, o, s, a, u, l, c = this,
                f = {},
                p = e.style,
                h = e.nodeType && I(e),
                g = F.get(e, "fxshow");
            for (r in n.queue || (null == (a = d._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || u()
                }), a.unqueued++, c.always(function() {
                    c.always(function() {
                        a.unqueued--, d.queue(e, "fx").length || a.empty.fire()
                    })
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = d.css(e, "display"), "inline" === ("none" === l ? F.get(e, "olddisplay") || ve(e.nodeName) : l) && "none" === d.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", c.always(function() {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                })), t)
                if (i = t[r], Me.exec(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                        if ("show" !== i || !g || void 0 === g[r]) continue;
                        h = !0
                    }
                    f[r] = g && g[r] || d.style(e, r)
                } else l = void 0;
            if (d.isEmptyObject(f)) "inline" === ("none" === l ? ve(e.nodeName) : l) && (p.display = l);
            else
                for (r in g ? "hidden" in g && (h = g.hidden) : g = F.access(e, "fxshow", {}), o && (g.hidden = !h), h ? d(e).show() : c.done(function() {
                        d(e).hide()
                    }), c.done(function() {
                        var t;
                        for (t in F.remove(e, "fxshow"), f) d.style(e, t, f[t])
                    }), f) s = ze(h ? g[r] : 0, r, c), r in g || (g[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }],
        Be = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = Re.exec(t),
                    o = i && i[3] || (d.cssNumber[e] ? "" : "px"),
                    s = (d.cssNumber[e] || "px" !== o && +r) && Re.exec(d.css(n.elem, e)),
                    a = 1,
                    u = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], i = i || [], s = +r || 1;
                    do {
                        s /= a = a || ".5", d.style(n.elem, e, s + o)
                    } while (a !== (a = n.cur() / r) && 1 !== a && --u)
                }
                return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };

    function Ie() {
        return setTimeout(function() {
            Fe = void 0
        }), Fe = d.now()
    }

    function _e(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) i["margin" + (n = B[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ze(e, t, n) {
        for (var r, i = (Be[t] || []).concat(Be["*"]), o = 0, s = i.length; s > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function Xe(e, t, n) {
        var r, i, o = 0,
            s = $e.length,
            a = d.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = Fe || Ie(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, s = l.tweens.length; s > o; o++) l.tweens[o].run(r);
                return a.notifyWith(e, [l, r, n]), 1 > r && s ? n : (a.resolveWith(e, [l]), !1)
            },
            l = a.promise({
                elem: e,
                props: d.extend({}, t),
                opts: d.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Fe || Ie(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = d.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (function(e, t) {
                var n, r, i, o, s;
                for (n in e)
                    if (i = t[r = d.camelCase(n)], o = e[n], d.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = d.cssHooks[r]) && "expand" in s)
                        for (n in o = s.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); s > o; o++)
            if (r = $e[o].call(l, e, c, l.opts)) return r;
        return d.map(c, ze, l), d.isFunction(l.opts.start) && l.opts.start.call(e, l), d.fx.timer(d.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    d.Animation = d.extend(Xe, {
            tweener: function(e, t) {
                d.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], Be[n] = Be[n] || [], Be[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? $e.unshift(e) : $e.push(e)
            }
        }), d.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? d.extend({}, e) : {
                complete: n || !n && t || d.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !d.isFunction(t) && t
            };
            return r.duration = d.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in d.fx.speeds ? d.fx.speeds[r.duration] : d.fx.speeds._default, (null == r.queue || !0 === r.queue) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                d.isFunction(r.old) && r.old.call(this), r.queue && d.dequeue(this, r.queue)
            }, r
        }, d.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(I).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = d.isEmptyObject(e),
                    o = d.speed(t, n, r),
                    s = function() {
                        var t = Xe(this, d.extend({}, e), o);
                        (i || F.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = d.timers,
                        s = F.get(this);
                    if (i) s[i] && s[i].stop && r(s[i]);
                    else
                        for (i in s) s[i] && s[i].stop && We.test(i) && r(s[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    (t || !n) && d.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = F.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = d.timers,
                        s = r ? r.length : 0;
                    for (n.finish = !0, d.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), d.each(["toggle", "show", "hide"], function(e, t) {
            var n = d.fn[t];
            d.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(_e(t, !0), e, r, i)
            }
        }), d.each({
            slideDown: _e("show"),
            slideUp: _e("hide"),
            slideToggle: _e("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            d.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), d.timers = [], d.fx.tick = function() {
            var e, t = 0,
                n = d.timers;
            for (Fe = d.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || d.fx.stop(), Fe = void 0
        }, d.fx.timer = function(e) {
            d.timers.push(e), e() ? d.fx.start() : d.timers.pop()
        }, d.fx.interval = 13, d.fx.start = function() {
            Pe || (Pe = setInterval(d.fx.tick, d.fx.interval))
        }, d.fx.stop = function() {
            clearInterval(Pe), Pe = null
        }, d.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, d.fn.delay = function(e, t) {
            return e = d.fx && d.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e = f.createElement("input"),
                t = f.createElement("select"),
                n = t.appendChild(f.createElement("option"));
            e.type = "checkbox", c.checkOn = "" !== e.value, c.optSelected = n.selected, t.disabled = !0, c.optDisabled = !n.disabled, (e = f.createElement("input")).value = "t", e.type = "radio", c.radioValue = "t" === e.value
        }();
    var Ue, Ve = d.expr.attrHandle;
    d.fn.extend({
        attr: function(e, t) {
            return H(this, d.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                d.removeAttr(this, e)
            })
        }
    }), d.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === z ? d.prop(e, t, n) : (1 === o && d.isXMLDoc(e) || (t = t.toLowerCase(), r = d.attrHooks[t] || (d.expr.match.bool.test(t) ? Ue : void 0)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = d.find.attr(e, t)) ? void 0 : i : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void d.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(A);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = d.propFix[n] || n, d.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!c.radioValue && "radio" === t && d.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Ue = {
        set: function(e, t, n) {
            return !1 === t ? d.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, d.each(d.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Ve[t] || d.find.attr;
        Ve[t] = function(e, t, r) {
            var i, o;
            return r || (o = Ve[t], Ve[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Ve[t] = o), i
        }
    });
    var Ye = /^(?:input|select|textarea|button)$/i;
    d.fn.extend({
        prop: function(e, t) {
            return H(this, d.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[d.propFix[e] || e]
            })
        }
    }), d.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !d.isXMLDoc(e)) && (t = d.propFix[t] || t, i = d.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || Ye.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), c.optSelected || (d.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), d.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        d.propFix[this.toLowerCase()] = this
    });
    var Ge = /[\t\r\n\f]/g;
    d.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s, a = "string" == typeof e && e,
                u = 0,
                l = this.length;
            if (d.isFunction(e)) return this.each(function(t) {
                d(this).addClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(A) || []; l > u; u++)
                    if (r = 1 === (n = this[u]).nodeType && (n.className ? (" " + n.className + " ").replace(Ge, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        s = d.trim(r), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e,
                u = 0,
                l = this.length;
            if (d.isFunction(e)) return this.each(function(t) {
                d(this).removeClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(A) || []; l > u; u++)
                    if (r = 1 === (n = this[u]).nodeType && (n.className ? (" " + n.className + " ").replace(Ge, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        s = e ? d.trim(r) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(d.isFunction(e) ? function(n) {
                d(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, r = 0, i = d(this), o = e.match(A) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === z || "boolean" === n) && (this.className && F.set(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : F.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ge, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var Qe = /\r/g;
    d.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = d.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, d(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : d.isArray(i) && (i = d.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), (t = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = d.valHooks[i.type] || d.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(Qe, "") : null == n ? "" : n : void 0
        }
    }), d.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = d.find.attr(e, "value");
                    return null != t ? t : d.trim(d.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++)
                        if (!(!(n = r[u]).selected && u !== i || (c.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && d.nodeName(n.parentNode, "optgroup"))) {
                            if (t = d(n).val(), o) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = d.makeArray(t), s = i.length; s--;)((r = i[s]).selected = d.inArray(r.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), d.each(["radio", "checkbox"], function() {
        d.valHooks[this] = {
            set: function(e, t) {
                return d.isArray(t) ? e.checked = d.inArray(d(e).val(), t) >= 0 : void 0
            }
        }, c.checkOn || (d.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        d.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), d.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Je = d.now(),
        Ke = /\?/;
    d.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, d.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && d.error("Invalid XML: " + e), t
    };
    var Ze, et, tt = /#.*$/,
        nt = /([?&])_=[^&]*/,
        rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        it = /^(?:GET|HEAD)$/,
        ot = /^\/\//,
        st = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        at = {},
        ut = {},
        lt = "*/".concat("*");
    try {
        et = location.href
    } catch (e) {
        (et = f.createElement("a")).href = "", et = et.href
    }

    function ct(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(A) || [];
            if (d.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function ft(e, t, n, r) {
        var i = {},
            o = e === ut;

        function s(a) {
            var u;
            return i[a] = !0, d.each(e[a] || [], function(e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), s(l), !1)
            }), u
        }
        return s(t.dataTypes[0]) || !i["*"] && s("*")
    }

    function pt(e, t) {
        var n, r, i = d.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && d.extend(!0, e, r), e
    }
    Ze = st.exec(et.toLowerCase()) || [], d.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: et,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ze[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": lt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": d.parseJSON,
                "text xml": d.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? pt(pt(e, d.ajaxSettings), t) : pt(d.ajaxSettings, e)
        },
        ajaxPrefilter: ct(at),
        ajaxTransport: ct(ut),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var n, r, i, o, s, a, u, l, c = d.ajaxSetup({}, t),
                f = c.context || c,
                p = c.context && (f.nodeType || f.jquery) ? d(f) : d.event,
                h = d.Deferred(),
                g = d.Callbacks("once memory"),
                m = c.statusCode || {},
                v = {},
                y = {},
                x = 0,
                b = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!o)
                                for (o = {}; t = rt.exec(i);) o[t[1].toLowerCase()] = t[2];
                            t = o[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? i : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (c.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) m[t] = [m[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || b;
                        return n && n.abort(t), T(0, t), this
                    }
                };
            if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, c.url = ((e || c.url || et) + "").replace(tt, "").replace(ot, Ze[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = d.trim(c.dataType || "*").toLowerCase().match(A) || [""], null == c.crossDomain && (a = st.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === Ze[1] && a[2] === Ze[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (Ze[3] || ("http:" === Ze[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = d.param(c.data, c.traditional)), ft(at, c, t, w), 2 === x) return w;
            for (l in (u = c.global) && 0 == d.active++ && d.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !it.test(c.type), r = c.url, c.hasContent || (c.data && (r = c.url += (Ke.test(r) ? "&" : "?") + c.data, delete c.data), !1 === c.cache && (c.url = nt.test(r) ? r.replace(nt, "$1_=" + Je++) : r + (Ke.test(r) ? "&" : "?") + "_=" + Je++)), c.ifModified && (d.lastModified[r] && w.setRequestHeader("If-Modified-Since", d.lastModified[r]), d.etag[r] && w.setRequestHeader("If-None-Match", d.etag[r])), (c.data && c.hasContent && !1 !== c.contentType || t.contentType) && w.setRequestHeader("Content-Type", c.contentType), w.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + lt + "; q=0.01" : "") : c.accepts["*"]), c.headers) w.setRequestHeader(l, c.headers[l]);
            if (c.beforeSend && (!1 === c.beforeSend.call(f, w, c) || 2 === x)) return w.abort();
            for (l in b = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[l](c[l]);
            if (n = ft(ut, c, t, w)) {
                w.readyState = 1, u && p.trigger("ajaxSend", [w, c]), c.async && c.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                }, c.timeout));
                try {
                    x = 1, n.send(v, T)
                } catch (e) {
                    if (!(2 > x)) throw e;
                    T(-1, e)
                }
            } else T(-1, "No Transport");

            function T(e, t, o, a) {
                var l, v, y, b, T, C = t;
                2 !== x && (x = 2, s && clearTimeout(s), n = void 0, i = a || "", w.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, o && (b = function(e, t, n) {
                    for (var r, i, o, s, a = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in a)
                            if (a[i] && a[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            s || (s = i)
                        }
                        o = o || s
                    }
                    return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
                }(c, w, o)), b = function(e, t, n, r) {
                    var i, o, s, a, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(s = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((a = i.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                    !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0], c.unshift(a[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(c, b, w, l), l ? (c.ifModified && ((T = w.getResponseHeader("Last-Modified")) && (d.lastModified[r] = T), (T = w.getResponseHeader("etag")) && (d.etag[r] = T)), 204 === e || "HEAD" === c.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, v = b.data, l = !(y = b.error))) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || C) + "", l ? h.resolveWith(f, [v, C, w]) : h.rejectWith(f, [w, C, y]), w.statusCode(m), m = void 0, u && p.trigger(l ? "ajaxSuccess" : "ajaxError", [w, c, l ? v : y]), g.fireWith(f, [w, C]), u && (p.trigger("ajaxComplete", [w, c]), --d.active || d.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(e, t, n) {
            return d.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return d.get(e, void 0, t, "script")
        }
    }), d.each(["get", "post"], function(e, t) {
        d[t] = function(e, n, r, i) {
            return d.isFunction(n) && (i = i || r, r = n, n = void 0), d.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), d.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        d.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), d._evalUrl = function(e) {
        return d.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, d.fn.extend({
        wrapAll: function(e) {
            var t;
            return d.isFunction(e) ? this.each(function(t) {
                d(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = d(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return this.each(d.isFunction(e) ? function(t) {
                d(this).wrapInner(e.call(this, t))
            } : function() {
                var t = d(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = d.isFunction(e);
            return this.each(function(n) {
                d(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
            }).end()
        }
    }), d.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, d.expr.filters.visible = function(e) {
        return !d.expr.filters.hidden(e)
    };
    var dt = /%20/g,
        ht = /\[\]$/,
        gt = /\r?\n/g,
        mt = /^(?:submit|button|image|reset|file)$/i,
        vt = /^(?:input|select|textarea|keygen)/i;

    function yt(e, t, n, r) {
        var i;
        if (d.isArray(t)) d.each(t, function(t, i) {
            n || ht.test(e) ? r(e, i) : yt(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== d.type(t)) r(e, t);
        else
            for (i in t) yt(e + "[" + i + "]", t[i], n, r)
    }
    d.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = d.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = d.ajaxSettings && d.ajaxSettings.traditional), d.isArray(e) || e.jquery && !d.isPlainObject(e)) d.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) yt(n, e[n], t, i);
        return r.join("&").replace(dt, "+")
    }, d.fn.extend({
        serialize: function() {
            return d.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = d.prop(this, "elements");
                return e ? d.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !d(this).is(":disabled") && vt.test(this.nodeName) && !mt.test(e) && (this.checked || !_.test(e))
            }).map(function(e, t) {
                var n = d(this).val();
                return null == n ? null : d.isArray(n) ? d.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(gt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(gt, "\r\n")
                }
            }).get()
        }
    }), d.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var xt = 0,
        bt = {},
        wt = {
            0: 200,
            1223: 204
        },
        Tt = d.ajaxSettings.xhr();
    e.ActiveXObject && d(e).on("unload", function() {
        for (var e in bt) bt[e]()
    }), c.cors = !!Tt && "withCredentials" in Tt, c.ajax = Tt = !!Tt, d.ajaxTransport(function(e) {
        var t;
        return c.cors || Tt && !e.crossDomain ? {
            send: function(n, r) {
                var i, o = e.xhr(),
                    s = ++xt;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (i in e.xhrFields) o[i] = e.xhrFields[i];
                for (i in e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) o.setRequestHeader(i, n[i]);
                t = function(e) {
                    return function() {
                        t && (delete bt[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(wt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = bt[s] = t("abort");
                try {
                    o.send(e.hasContent && e.data || null)
                } catch (e) {
                    if (t) throw e
                }
            },
            abort: function() {
                t && t()
            }
        } : void 0
    }), d.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return d.globalEval(e), e
            }
        }
    }), d.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), d.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain) return {
            send: function(r, i) {
                t = d("<script>").prop({
                    async: !0,
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                }), f.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    });
    var Ct = [],
        Nt = /(=)\?(?=&|$)|\?\?/;
    d.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ct.pop() || d.expando + "_" + Je++;
            return this[e] = !0, e
        }
    }), d.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, s, a = !1 !== t.jsonp && (Nt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Nt.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = d.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Nt, "$1" + i) : !1 !== t.jsonp && (t.url += (Ke.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return s || d.error(i + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            s = arguments
        }, r.always(function() {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Ct.push(i)), s && d.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), d.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || f;
        var r = w.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = d.buildFragment([e], t, i), i && i.length && d(i).remove(), d.merge([], r.childNodes))
    };
    var kt = d.fn.load;
    d.fn.load = function(e, t, n) {
        if ("string" != typeof e && kt) return kt.apply(this, arguments);
        var r, i, o, s = this,
            a = e.indexOf(" ");
        return a >= 0 && (r = d.trim(e.slice(a)), e = e.slice(0, a)), d.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && d.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(r ? d("<div>").append(d.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            s.each(n, o || [e.responseText, t, e])
        }), this
    }, d.expr.filters.animated = function(e) {
        return d.grep(d.timers, function(t) {
            return e === t.elem
        }).length
    };
    var Et = e.document.documentElement;

    function St(e) {
        return d.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    d.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, l = d.css(e, "position"),
                c = d(e),
                f = {};
            "static" === l && (e.style.position = "relative"), a = c.offset(), o = d.css(e, "top"), u = d.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (s = (r = c.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), d.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, d.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                d.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            return o ? (t = o.documentElement, d.contains(t, r) ? (typeof r.getBoundingClientRect !== z && (i = r.getBoundingClientRect()), n = St(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === d.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), d.nodeName(e[0], "html") || (r = e.offset()), r.top += d.css(e[0], "borderTopWidth", !0), r.left += d.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - d.css(n, "marginTop", !0),
                    left: t.left - r.left - d.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Et; e && !d.nodeName(e, "html") && "static" === d.css(e, "position");) e = e.offsetParent;
                return e || Et
            })
        }
    }), d.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var r = "pageYOffset" === n;
        d.fn[t] = function(i) {
            return H(this, function(t, i, o) {
                var s = St(t);
                return void 0 === o ? s ? s[n] : t[i] : void(s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
            }, t, i, arguments.length, null)
        }
    }), d.each(["top", "left"], function(e, t) {
        d.cssHooks[t] = Te(c.pixelPosition, function(e, n) {
            return n ? (n = we(e, t), xe.test(n) ? d(e).position()[t] + "px" : n) : void 0
        })
    }), d.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        d.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            d.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    s = n || (!0 === r || !0 === i ? "margin" : "border");
                return H(this, function(t, n, r) {
                    var i;
                    return d.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? d.css(t, n, s) : d.style(t, n, r, s)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), d.fn.size = function() {
        return this.length
    }, d.fn.andSelf = d.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return d
    });
    var jt = e.jQuery,
        Dt = e.$;
    return d.noConflict = function(t) {
        return e.$ === d && (e.$ = Dt), t && e.jQuery === d && (e.jQuery = jt), d
    }, typeof t === z && (e.jQuery = e.$ = d), d
});
var cr = {
    plugins_: {},
    behaviors: {}
};
"function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof "test".__proto__ ? function(t) {
        return t.__proto__
    } : function(t) {
        return t.constructor.prototype
    }),
    function() {
        function t(t, e) {
            this.x = t, this.y = e, cr.seal(this)
        }

        function e(t, e, i, r) {
            this.set(t, e, i, r), cr.seal(this)
        }

        function i() {
            this.tlx = 0, this.tly = 0, this.trx = 0, this.try_ = 0, this.brx = 0, this.bry = 0, this.blx = 0, this.bly = 0, cr.seal(this)
        }
        cr.logexport = function(t) {
            window.console && window.console.log && window.console.log(t)
        }, cr.logerror = function(t) {
            window.console && window.console.error && window.console.error(t)
        }, cr.seal = function(t) {
            return t
        }, cr.freeze = function(t) {
            return t
        }, cr.is_undefined = function(t) {
            return void 0 === t
        }, cr.is_number = function(t) {
            return "number" == typeof t
        }, cr.is_string = function(t) {
            return "string" == typeof t
        }, cr.isPOT = function(t) {
            return t > 0 && 0 == (t - 1 & t)
        }, cr.nextHighestPowerOfTwo = function(t) {
            --t;
            for (var e = 1; e < 32; e <<= 1) t |= t >> e;
            return t + 1
        }, cr.abs = function(t) {
            return t < 0 ? -t : t
        }, cr.max = function(t, e) {
            return t > e ? t : e
        }, cr.min = function(t, e) {
            return t < e ? t : e
        }, cr.PI = Math.PI, cr.round = function(t) {
            return t + .5 | 0
        }, cr.floor = function(t) {
            return t >= 0 ? 0 | t : (0 | t) - 1
        }, cr.ceil = function(t) {
            var e = 0 | t;
            return e === t ? e : e + 1
        }, t.prototype.offset = function(t, e) {
            return this.x += t, this.y += e, this
        }, t.prototype.mul = function(t, e) {
            return this.x *= t, this.y *= e, this
        }, cr.vector2 = t, cr.segments_intersect = function(t, e, i, r, n, s, a, o) {
            var h, c, l, u, p, d, f, g;
            if (t < i ? (c = t, h = i) : (c = i, h = t), n < a ? (d = n, p = a) : (d = a, p = n), h < d || c > p) return !1;
            if (e < r ? (u = e, l = r) : (u = r, l = e), s < o ? (g = s, f = o) : (g = o, f = s), l < g || u > f) return !1;
            var y = n - t + a - i,
                m = s - e + o - r,
                _ = i - t,
                v = r - e,
                b = a - n,
                w = o - s,
                x = cr.abs(v * b - w * _),
                S = b * m - w * y;
            if (cr.abs(S) > x) return !1;
            var T = _ * m - v * y;
            return cr.abs(T) <= x
        }, e.prototype.set = function(t, e, i, r) {
            this.left = t, this.top = e, this.right = i, this.bottom = r
        }, e.prototype.copy = function(t) {
            this.left = t.left, this.top = t.top, this.right = t.right, this.bottom = t.bottom
        }, e.prototype.width = function() {
            return this.right - this.left
        }, e.prototype.height = function() {
            return this.bottom - this.top
        }, e.prototype.offset = function(t, e) {
            return this.left += t, this.top += e, this.right += t, this.bottom += e, this
        }, e.prototype.normalize = function() {
            var t = 0;
            this.left > this.right && (t = this.left, this.left = this.right, this.right = t), this.top > this.bottom && (t = this.top, this.top = this.bottom, this.bottom = t)
        }, e.prototype.intersects_rect = function(t) {
            return !(t.right < this.left || t.bottom < this.top || t.left > this.right || t.top > this.bottom)
        }, e.prototype.intersects_rect_off = function(t, e, i) {
            return !(t.right + e < this.left || t.bottom + i < this.top || t.left + e > this.right || t.top + i > this.bottom)
        }, e.prototype.contains_pt = function(t, e) {
            return t >= this.left && t <= this.right && e >= this.top && e <= this.bottom
        }, e.prototype.equals = function(t) {
            return this.left === t.left && this.top === t.top && this.right === t.right && this.bottom === t.bottom
        }, cr.rect = e, i.prototype.set_from_rect = function(t) {
            this.tlx = t.left, this.tly = t.top, this.trx = t.right, this.try_ = t.top, this.brx = t.right, this.bry = t.bottom, this.blx = t.left, this.bly = t.bottom
        }, i.prototype.set_from_rotated_rect = function(t, e) {
            if (0 === e) this.set_from_rect(t);
            else {
                var i = Math.sin(e),
                    r = Math.cos(e),
                    n = t.left * i,
                    s = t.top * i,
                    a = t.right * i,
                    o = t.bottom * i,
                    h = t.left * r,
                    c = t.top * r,
                    l = t.right * r,
                    u = t.bottom * r;
                this.tlx = h - s, this.tly = c + n, this.trx = l - s, this.try_ = c + a, this.brx = l - o, this.bry = u + a, this.blx = h - o, this.bly = u + n
            }
        }, i.prototype.offset = function(t, e) {
            return this.tlx += t, this.tly += e, this.trx += t, this.try_ += e, this.brx += t, this.bry += e, this.blx += t, this.bly += e, this
        };
        var r = 0,
            n = 0;

        function s(t, e, i, s) {
            t < e ? i < s ? (r = t < i ? t : i, n = e > s ? e : s) : (r = t < s ? t : s, n = e > i ? e : i) : i < s ? (r = e < i ? e : i, n = t > s ? t : s) : (r = e < s ? e : s, n = t > i ? t : i)
        }
        i.prototype.bounding_box = function(t) {
            s(this.tlx, this.trx, this.brx, this.blx), t.left = r, t.right = n, s(this.tly, this.try_, this.bry, this.bly), t.top = r, t.bottom = n
        }, i.prototype.contains_pt = function(t, e) {
            var i, r, n, s = this.tlx,
                a = this.tly,
                o = this.trx - s,
                h = this.try_ - a,
                c = this.brx - s,
                l = this.bry - a,
                u = t - s,
                p = e - a,
                d = c * c + l * l,
                f = c * u + l * p,
                g = 1 / ((i = o * o + h * h) * d - (r = o * c + h * l) * r),
                y = (d * (n = o * u + h * p) - r * f) * g,
                m = (i * f - r * n) * g;
            return y >= 0 && m > 0 && y + m < 1 || (m = ((i = (o = this.blx - s) * o + (h = this.bly - a) * h) * f - (r = o * c + h * l) * (n = o * u + h * p)) * (g = 1 / (i * d - r * r)), (y = (d * n - r * f) * g) >= 0 && m > 0 && y + m < 1)
        }, i.prototype.at = function(t, e) {
            if (e) switch (t) {
                case 0:
                    return this.tlx;
                case 1:
                    return this.trx;
                case 2:
                    return this.brx;
                case 3:
                    return this.blx;
                case 4:
                default:
                    return this.tlx
            } else switch (t) {
                case 0:
                    return this.tly;
                case 1:
                    return this.try_;
                case 2:
                    return this.bry;
                case 3:
                    return this.bly;
                case 4:
                default:
                    return this.tly
            }
        }, i.prototype.midX = function() {
            return (this.tlx + this.trx + this.brx + this.blx) / 4
        }, i.prototype.midY = function() {
            return (this.tly + this.try_ + this.bry + this.bly) / 4
        }, i.prototype.intersects_segment = function(t, e, i, r) {
            if (this.contains_pt(t, e) || this.contains_pt(i, r)) return !0;
            var n, s, a, o, h;
            for (h = 0; h < 4; h++)
                if (n = this.at(h, !0), s = this.at(h, !1), a = this.at(h + 1, !0), o = this.at(h + 1, !1), cr.segments_intersect(t, e, i, r, n, s, a, o)) return !0;
            return !1
        }, i.prototype.intersects_quad = function(t) {
            var e, i, r, n, s, a, o, h, c, l, u = t.midX(),
                p = t.midY();
            if (this.contains_pt(u, p)) return !0;
            if (u = this.midX(), p = this.midY(), t.contains_pt(u, p)) return !0;
            for (c = 0; c < 4; c++)
                for (l = 0; l < 4; l++)
                    if (e = this.at(c, !0), i = this.at(c, !1), r = this.at(c + 1, !0), n = this.at(c + 1, !1), s = t.at(l, !0), a = t.at(l, !1), o = t.at(l + 1, !0), h = t.at(l + 1, !1), cr.segments_intersect(e, i, r, n, s, a, o, h)) return !0;
            return !1
        }, cr.quad = i, cr.RGB = function(t, e, i) {
            return Math.max(Math.min(t, 255), 0) | Math.max(Math.min(e, 255), 0) << 8 | Math.max(Math.min(i, 255), 0) << 16
        }, cr.GetRValue = function(t) {
            return 255 & t
        }, cr.GetGValue = function(t) {
            return (65280 & t) >> 8
        }, cr.GetBValue = function(t) {
            return (16711680 & t) >> 16
        }, cr.shallowCopy = function(t, e, i) {
            var r;
            for (r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            return t
        }, cr.arrayRemove = function(t, e) {
            var i, r;
            if (!((e = cr.floor(e)) < 0 || e >= t.length)) {
                for (i = e, r = t.length - 1; i < r; i++) t[i] = t[i + 1];
                cr.truncateArray(t, r)
            }
        }, cr.truncateArray = function(t, e) {
            t.length = e
        }, cr.clearArray = function(t) {
            cr.truncateArray(t, 0)
        }, cr.shallowAssignArray = function(t, e) {
            var i, r;
            for (cr.clearArray(t), i = 0, r = e.length; i < r; ++i) t[i] = e[i]
        }, cr.appendArray = function(t, e) {
            t.push.apply(t, e)
        }, cr.fastIndexOf = function(t, e) {
            var i, r;
            for (i = 0, r = t.length; i < r; ++i)
                if (t[i] === e) return i;
            return -1
        }, cr.arrayFindRemove = function(t, e) {
            var i = cr.fastIndexOf(t, e); - 1 !== i && cr.arrayRemove(t, i)
        }, cr.clamp = function(t, e, i) {
            return t < e ? e : t > i ? i : t
        }, cr.to_radians = function(t) {
            return t / (180 / cr.PI)
        }, cr.to_degrees = function(t) {
            return t * (180 / cr.PI)
        }, cr.clamp_angle_degrees = function(t) {
            return (t %= 360) < 0 && (t += 360), t
        }, cr.clamp_angle = function(t) {
            return (t %= 2 * cr.PI) < 0 && (t += 2 * cr.PI), t
        }, cr.to_clamped_degrees = function(t) {
            return cr.clamp_angle_degrees(cr.to_degrees(t))
        }, cr.to_clamped_radians = function(t) {
            return cr.clamp_angle(cr.to_radians(t))
        }, cr.angleTo = function(t, e, i, r) {
            var n = i - t,
                s = r - e;
            return Math.atan2(s, n)
        }, cr.angleDiff = function(t, e) {
            if (t === e) return 0;
            var i = Math.sin(t),
                r = Math.cos(t),
                n = i * Math.sin(e) + r * Math.cos(e);
            return n >= 1 ? 0 : n <= -1 ? cr.PI : Math.acos(n)
        }, cr.angleRotate = function(t, e, i) {
            var r = Math.sin(t),
                n = Math.cos(t),
                s = Math.sin(e),
                a = Math.cos(e);
            return Math.acos(r * s + n * a) > i ? n * s - r * a > 0 ? cr.clamp_angle(t + i) : cr.clamp_angle(t - i) : cr.clamp_angle(e)
        }, cr.angleClockwise = function(t, e) {
            var i = Math.sin(t);
            return Math.cos(t) * Math.sin(e) - i * Math.cos(e) <= 0
        }, cr.rotatePtAround = function(t, e, i, r, n, s) {
            if (0 === i) return s ? t : e;
            var a = Math.sin(i),
                o = Math.cos(i),
                h = (t -= r) * a;
            return t = t * o - (e -= n) * a, e = e * o + h, t += r, e += n, s ? t : e
        }, cr.distanceTo = function(t, e, i, r) {
            var n = i - t,
                s = r - e;
            return Math.sqrt(n * n + s * s)
        }, cr.xor = function(t, e) {
            return !t != !e
        }, cr.lerp = function(t, e, i) {
            return t + (e - t) * i
        }, cr.unlerp = function(t, e, i) {
            return t === e ? 0 : (i - t) / (e - t)
        }, cr.anglelerp = function(t, e, i) {
            var r = cr.angleDiff(t, e);
            return cr.angleClockwise(e, t) ? t + r * i : t - r * i
        }, cr.qarp = function(t, e, i, r) {
            return cr.lerp(cr.lerp(t, e, r), cr.lerp(e, i, r), r)
        }, cr.cubic = function(t, e, i, r, n) {
            return cr.lerp(cr.qarp(t, e, i, n), cr.qarp(e, i, r, n), n)
        }, cr.cosp = function(t, e, i) {
            return (t + e + (t - e) * Math.cos(i * Math.PI)) / 2
        }, cr.hasAnyOwnProperty = function(t) {
            var e;
            for (e in t)
                if (t.hasOwnProperty(e)) return !0;
            return !1
        }, cr.wipe = function(t) {
            var e;
            for (e in t) t.hasOwnProperty(e) && delete t[e]
        };
        var a = +new Date;
        cr.performance_now = function() {
            if (void 0 !== window.performance) {
                var t = window.performance;
                if (void 0 !== t.now) return t.now();
                if (void 0 !== t.webkitNow) return t.webkitNow();
                if (void 0 !== t.mozNow) return t.mozNow();
                if (void 0 !== t.msNow) return t.msNow()
            }
            return Date.now() - a
        };
        var o = !1,
            h = !1,
            c = !1;
        "undefined" != typeof window && (o = !(/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && /safari/i.test(navigator.userAgent), h = /(iphone|ipod|ipad)/i.test(navigator.userAgent), c = window.c2ejecta);
        var l = !o && !c && !h && "undefined" != typeof Set && void 0 !== Set.prototype.forEach;

        function u() {
            this.s = null, this.items = null, this.item_count = 0, l && (this.s = new Set), this.values_cache = [], this.cache_valid = !0, cr.seal(this)
        }
        u.prototype.contains = function(t) {
            return !this.isEmpty() && (l ? this.s.has(t) : this.items && this.items.hasOwnProperty(t))
        }, u.prototype.add = function(t) {
            if (l) this.s.has(t) || (this.s.add(t), this.cache_valid = !1);
            else {
                var e = t.toString(),
                    i = this.items;
                i ? i.hasOwnProperty(e) || (i[e] = t, this.item_count++, this.cache_valid = !1) : (this.items = {}, this.items[e] = t, this.item_count = 1, this.cache_valid = !1)
            }
        }, u.prototype.remove = function(t) {
            if (!this.isEmpty())
                if (l) this.s.has(t) && (this.s.delete(t), this.cache_valid = !1);
                else if (this.items) {
                var e = t.toString(),
                    i = this.items;
                i.hasOwnProperty(e) && (delete i[e], this.item_count--, this.cache_valid = !1)
            }
        }, u.prototype.clear = function() {
            this.isEmpty() || (l ? this.s.clear() : (this.items = null, this.item_count = 0), cr.clearArray(this.values_cache), this.cache_valid = !0)
        }, u.prototype.isEmpty = function() {
            return 0 === this.count()
        }, u.prototype.count = function() {
            return l ? this.s.size : this.item_count
        };
        var p = null,
            d = 0;

        function f(t) {
            p[d++] = t
        }
        u.prototype.update_cache = function() {
            if (!this.cache_valid) {
                if (l) cr.clearArray(this.values_cache), p = this.values_cache, d = 0, this.s.forEach(f), p = null, d = 0;
                else {
                    var t = this.values_cache;
                    cr.clearArray(t);
                    var e, i = 0,
                        r = this.items;
                    if (r)
                        for (e in r) r.hasOwnProperty(e) && (t[i++] = r[e])
                }
                this.cache_valid = !0
            }
        }, u.prototype.valuesRef = function() {
            return this.update_cache(), this.values_cache
        }, cr.ObjectSet = u;
        var g = new cr.ObjectSet;

        function y() {
            this.c = 0, this.y = 0, this.t = 0, this.sum = 0, cr.seal(this)
        }

        function m(t) {
            this.pts_cache = [], this.bboxLeft = 0, this.bboxTop = 0, this.bboxRight = 0, this.bboxBottom = 0, this.convexpolys = null, this.set_pts(t), cr.seal(this)
        }

        function _(t, e) {
            this.cellwidth = t, this.cellheight = e, this.cells = {}
        }

        function v(t, e) {
            this.cellwidth = t, this.cellheight = e, this.cells = {}
        }
        cr.removeArrayDuplicates = function(t) {
            var e, i;
            for (e = 0, i = t.length; e < i; ++e) g.add(t[e]);
            cr.shallowAssignArray(t, g.valuesRef()), g.clear()
        }, cr.arrayRemoveAllFromObjectSet = function(t, e) {
            l ? cr.arrayRemoveAll_set(t, e.s) : cr.arrayRemoveAll_arr(t, e.valuesRef())
        }, cr.arrayRemoveAll_set = function(t, e) {
            var i, r, n, s;
            for (i = 0, r = 0, n = t.length; i < n; ++i) s = t[i], e.has(s) || (t[r++] = s);
            cr.truncateArray(t, r)
        }, cr.arrayRemoveAll_arr = function(t, e) {
            var i, r, n, s;
            for (i = 0, r = 0, n = t.length; i < n; ++i) s = t[i], -1 === cr.fastIndexOf(e, s) && (t[r++] = s);
            cr.truncateArray(t, r)
        }, y.prototype.add = function(t) {
            this.y = t - this.c, this.t = this.sum + this.y, this.c = this.t - this.sum - this.y, this.sum = this.t
        }, y.prototype.reset = function() {
            this.c = 0, this.y = 0, this.t = 0, this.sum = 0
        }, cr.KahanAdder = y, cr.regexp_escape = function(t) {
            return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        }, m.prototype.set_pts = function(t) {
            this.pts_array = t, this.pts_count = t.length / 2, this.pts_cache.length = t.length, this.cache_width = -1, this.cache_height = -1, this.cache_angle = 0
        }, m.prototype.is_empty = function() {
            return !this.pts_array.length
        }, m.prototype.update_bbox = function() {
            for (var t, e, i, r = this.pts_cache, n = r[0], s = n, a = r[1], o = a, h = 1, c = this.pts_count; h < c; ++h) t = r[i = 2 * h], e = r[i + 1], t < n && (n = t), t > s && (s = t), e < a && (a = e), e > o && (o = e);
            this.bboxLeft = n, this.bboxRight = s, this.bboxTop = a, this.bboxBottom = o
        }, m.prototype.set_from_rect = function(t, e, i) {
            this.pts_cache.length = 8, this.pts_count = 4;
            var r = this.pts_cache;
            r[0] = t.left - e, r[1] = t.top - i, r[2] = t.right - e, r[3] = t.top - i, r[4] = t.right - e, r[5] = t.bottom - i, r[6] = t.left - e, r[7] = t.bottom - i, this.cache_width = t.right - t.left, this.cache_height = t.bottom - t.top, this.update_bbox()
        }, m.prototype.set_from_quad = function(t, e, i, r, n) {
            this.pts_cache.length = 8, this.pts_count = 4;
            var s = this.pts_cache;
            s[0] = t.tlx - e, s[1] = t.tly - i, s[2] = t.trx - e, s[3] = t.try_ - i, s[4] = t.brx - e, s[5] = t.bry - i, s[6] = t.blx - e, s[7] = t.bly - i, this.cache_width = r, this.cache_height = n, this.update_bbox()
        }, m.prototype.set_from_poly = function(t) {
            this.pts_count = t.pts_count, cr.shallowAssignArray(this.pts_cache, t.pts_cache), this.bboxLeft = t.bboxLeft, this.bboxTop, t.bboxTop, this.bboxRight = t.bboxRight, this.bboxBottom = t.bboxBottom
        }, m.prototype.cache_poly = function(t, e, i) {
            if (this.cache_width !== t || this.cache_height !== e || this.cache_angle !== i) {
                var r, n, s, a, o, h;
                this.cache_width = t, this.cache_height = e, this.cache_angle = i;
                var c = 0,
                    l = 1,
                    u = this.pts_array,
                    p = this.pts_cache;
                for (0 !== i && (c = Math.sin(i), l = Math.cos(i)), r = 0, a = this.pts_count; r < a; r++) s = (n = 2 * r) + 1, o = u[n] * t, h = u[s] * e, p[n] = o * l - h * c, p[s] = h * l + o * c;
                this.update_bbox()
            }
        }, m.prototype.contains_pt = function(t, e) {
            var i = this.pts_cache;
            if (t === i[0] && e === i[1]) return !0;
            var r, n, s, a, o, h, c, l = this.pts_count,
                u = this.bboxLeft - 110,
                p = this.bboxTop - 101,
                d = this.bboxRight + 131,
                f = this.bboxBottom + 120,
                g = 0,
                y = 0;
            for (r = 0; r < l; r++) s = (r + 1) % l * 2, a = i[n = 2 * r], o = i[n + 1], h = i[s], c = i[s + 1], cr.segments_intersect(u, p, t, e, a, o, h, c) && g++, cr.segments_intersect(d, f, t, e, a, o, h, c) && y++;
            return g % 2 == 1 || y % 2 == 1
        }, m.prototype.intersects_poly = function(t, e, i) {
            var r, n, s, a, o, h, c, l, u, p, d, f, g, y, m, _, v = t.pts_cache,
                b = this.pts_cache;
            if (this.contains_pt(v[0] + e, v[1] + i)) return !0;
            if (t.contains_pt(b[0] - e, b[1] - i)) return !0;
            for (r = 0, a = this.pts_count; r < a; r++)
                for (s = (r + 1) % a * 2, u = b[n = 2 * r], p = b[n + 1], d = b[s], f = b[s + 1], o = 0, l = t.pts_count; o < l; o++)
                    if (c = (o + 1) % l * 2, g = v[h = 2 * o] + e, y = v[h + 1] + i, m = v[c] + e, _ = v[c + 1] + i, cr.segments_intersect(u, p, d, f, g, y, m, _)) return !0;
            return !1
        }, m.prototype.intersects_segment = function(t, e, i, r, n, s) {
            var a, o, h, c, l, u, p, d, f = this.pts_cache;
            if (this.contains_pt(i - t, r - e)) return !0;
            for (a = 0, o = this.pts_count; a < o; a++)
                if (c = (a + 1) % o * 2, l = f[h = 2 * a] + t, u = f[h + 1] + e, p = f[c] + t, d = f[c + 1] + e, cr.segments_intersect(i, r, n, s, l, u, p, d)) return !0;
            return !1
        }, m.prototype.mirror = function(t) {
            var e, i, r;
            for (e = 0, i = this.pts_count; e < i; ++e) r = 2 * e, this.pts_cache[r] = 2 * t - this.pts_cache[r]
        }, m.prototype.flip = function(t) {
            var e, i, r;
            for (e = 0, i = this.pts_count; e < i; ++e) r = 2 * e + 1, this.pts_cache[r] = 2 * t - this.pts_cache[r]
        }, m.prototype.diag = function() {
            var t, e, i, r, n;
            for (t = 0, e = this.pts_count; t < e; ++t) r = (i = 2 * t) + 1, n = this.pts_cache[i], this.pts_cache[i] = this.pts_cache[r], this.pts_cache[r] = n
        }, cr.CollisionPoly = m, _.prototype.totalCellCount = 0, _.prototype.getCell = function(t, e, i) {
            var r, n = this.cells[t];
            return n ? (r = n[e]) || (i ? (r = w(this, t, e), this.cells[t][e] = r, r) : null) : i ? (r = w(this, t, e), this.cells[t] = {}, this.cells[t][e] = r, r) : null
        }, _.prototype.XToCell = function(t) {
            return cr.floor(t / this.cellwidth)
        }, _.prototype.YToCell = function(t) {
            return cr.floor(t / this.cellheight)
        }, _.prototype.update = function(t, e, i) {
            var r, n, s, a, o;
            if (e)
                for (r = e.left, n = e.right; r <= n; ++r)
                    for (s = e.top, a = e.bottom; s <= a; ++s) i && i.contains_pt(r, s) || (o = this.getCell(r, s, !1)) && (o.remove(t), o.isEmpty() && (x(o), this.cells[r][s] = null));
            if (i)
                for (r = i.left, n = i.right; r <= n; ++r)
                    for (s = i.top, a = i.bottom; s <= a; ++s) e && e.contains_pt(r, s) || this.getCell(r, s, !0).insert(t)
        }, _.prototype.queryRange = function(t, e) {
            var i, r, n, s, a, o;
            for (i = this.XToCell(t.left), n = this.YToCell(t.top), r = this.XToCell(t.right), a = this.YToCell(t.bottom); i <= r; ++i)
                for (s = n; s <= a; ++s)(o = this.getCell(i, s, !1)) && o.dump(e)
        }, cr.SparseGrid = _, v.prototype.totalCellCount = 0, v.prototype.getCell = function(t, e, i) {
            var r, n = this.cells[t];
            return n ? (r = n[e]) || (i ? (r = O(this, t, e), this.cells[t][e] = r, r) : null) : i ? (r = O(this, t, e), this.cells[t] = {}, this.cells[t][e] = r, r) : null
        }, v.prototype.XToCell = function(t) {
            return cr.floor(t / this.cellwidth)
        }, v.prototype.YToCell = function(t) {
            return cr.floor(t / this.cellheight)
        }, v.prototype.update = function(t, e, i) {
            var r, n, s, a, o;
            if (e)
                for (r = e.left, n = e.right; r <= n; ++r)
                    for (s = e.top, a = e.bottom; s <= a; ++s) i && i.contains_pt(r, s) || (o = this.getCell(r, s, !1)) && (o.remove(t), o.isEmpty() && (C(o), this.cells[r][s] = null));
            if (i)
                for (r = i.left, n = i.right; r <= n; ++r)
                    for (s = i.top, a = i.bottom; s <= a; ++s) e && e.contains_pt(r, s) || this.getCell(r, s, !0).insert(t)
        }, v.prototype.queryRange = function(t, e, i, r, n) {
            var s, a, o, h, c, l;
            for (s = this.XToCell(t), o = this.YToCell(e), a = this.XToCell(i), c = this.YToCell(r); s <= a; ++s)
                for (h = o; h <= c; ++h)(l = this.getCell(s, h, !1)) && l.dump(n)
        }, v.prototype.markRangeChanged = function(t) {
            var e, i, r, n, s, a;
            for (e = t.left, r = t.top, i = t.right, s = t.bottom; e <= i; ++e)
                for (n = r; n <= s; ++n)(a = this.getCell(e, n, !1)) && (a.is_sorted = !1)
        }, cr.RenderGrid = v;
        var b = [];

        function w(t, e, i) {
            var r;
            return _.prototype.totalCellCount++, b.length ? ((r = b.pop()).grid = t, r.x = e, r.y = i, r) : new cr.GridCell(t, e, i)
        }

        function x(t) {
            _.prototype.totalCellCount--, t.objects.clear(), b.length < 1e3 && b.push(t)
        }

        function S(t, e, i) {
            this.grid = t, this.x = e, this.y = i, this.objects = new cr.ObjectSet
        }
        S.prototype.isEmpty = function() {
            return this.objects.isEmpty()
        }, S.prototype.insert = function(t) {
            this.objects.add(t)
        }, S.prototype.remove = function(t) {
            this.objects.remove(t)
        }, S.prototype.dump = function(t) {
            cr.appendArray(t, this.objects.valuesRef())
        }, cr.GridCell = S;
        var T = [];

        function O(t, e, i) {
            var r;
            return v.prototype.totalCellCount++, T.length ? ((r = T.pop()).grid = t, r.x = e, r.y = i, r) : new cr.RenderCell(t, e, i)
        }

        function C(t) {
            v.prototype.totalCellCount--, t.reset(), T.length < 1e3 && T.push(t)
        }

        function A(t, e, i) {
            this.grid = t, this.x = e, this.y = i, this.objects = [], this.is_sorted = !0, this.pending_removal = new cr.ObjectSet, this.any_pending_removal = !1
        }

        function k(t, e) {
            return t.zindex - e.zindex
        }
        A.prototype.isEmpty = function() {
            return !this.objects.length || !(this.objects.length > this.pending_removal.count()) && (this.flush_pending(), !0)
        }, A.prototype.insert = function(t) {
            if (this.pending_removal.contains(t)) return this.pending_removal.remove(t), void(this.pending_removal.isEmpty() && (this.any_pending_removal = !1));
            this.objects.length ? (this.objects[this.objects.length - 1].get_zindex() > t.get_zindex() && (this.is_sorted = !1), this.objects.push(t)) : (this.objects.push(t), this.is_sorted = !0)
        }, A.prototype.remove = function(t) {
            this.pending_removal.add(t), this.any_pending_removal = !0, this.pending_removal.count() >= 30 && this.flush_pending()
        }, A.prototype.flush_pending = function() {
            this.any_pending_removal && (this.pending_removal.count() !== this.objects.length ? (cr.arrayRemoveAllFromObjectSet(this.objects, this.pending_removal), this.pending_removal.clear(), this.any_pending_removal = !1) : this.reset())
        }, A.prototype.ensure_sorted = function() {
            this.is_sorted || (this.objects.sort(k), this.is_sorted = !0)
        }, A.prototype.reset = function() {
            cr.clearArray(this.objects), this.is_sorted = !0, this.pending_removal.clear(), this.any_pending_removal = !1
        }, A.prototype.dump = function(t) {
            this.flush_pending(), this.ensure_sorted(), this.objects.length && t.push(this.objects)
        }, cr.RenderCell = A;
        var E = ["lighter", "xor", "copy", "destination-over", "source-in", "destination-in", "source-out", "destination-out", "source-atop", "destination-atop"];
        cr.effectToCompositeOp = function(t) {
            return t <= 0 || t >= 11 ? "source-over" : E[t - 1]
        }, cr.setGLBlend = function(t, e, i) {
            if (i) switch (t.srcBlend = i.ONE, t.destBlend = i.ONE_MINUS_SRC_ALPHA, e) {
                case 1:
                    t.srcBlend = i.ONE, t.destBlend = i.ONE;
                    break;
                case 2:
                    break;
                case 3:
                    t.srcBlend = i.ONE, t.destBlend = i.ZERO;
                    break;
                case 4:
                    t.srcBlend = i.ONE_MINUS_DST_ALPHA, t.destBlend = i.ONE;
                    break;
                case 5:
                    t.srcBlend = i.DST_ALPHA, t.destBlend = i.ZERO;
                    break;
                case 6:
                    t.srcBlend = i.ZERO, t.destBlend = i.SRC_ALPHA;
                    break;
                case 7:
                    t.srcBlend = i.ONE_MINUS_DST_ALPHA, t.destBlend = i.ZERO;
                    break;
                case 8:
                    t.srcBlend = i.ZERO, t.destBlend = i.ONE_MINUS_SRC_ALPHA;
                    break;
                case 9:
                    t.srcBlend = i.DST_ALPHA, t.destBlend = i.ONE_MINUS_SRC_ALPHA;
                    break;
                case 10:
                    t.srcBlend = i.ONE_MINUS_DST_ALPHA, t.destBlend = i.SRC_ALPHA
            }
        }, cr.round6dp = function(t) {
            return Math.round(1e6 * t) / 1e6
        }, cr.equals_nocase = function(t, e) {
            return "string" == typeof t && "string" == typeof e && (t.length === e.length && (t === e || t.toLowerCase() === e.toLowerCase()))
        }, cr.isCanvasInputEvent = function(t) {
            var e = t.target;
            return !e || (e === document || e === window || (!(!document || !document.body || e !== document.body) || !!cr.equals_nocase(e.tagName, "canvas")))
        }
    }();
var MatrixArray = "undefined" != typeof Float32Array ? Float32Array : Array,
    glMatrixArrayType = MatrixArray,
    vec3 = {},
    mat3 = {},
    mat4 = {},
    quat4 = {};
vec3.create = function(t) {
        var e = new MatrixArray(3);
        return t && (e[0] = t[0], e[1] = t[1], e[2] = t[2]), e
    }, vec3.set = function(t, e) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e
    }, vec3.add = function(t, e, i) {
        return i && t !== i ? (i[0] = t[0] + e[0], i[1] = t[1] + e[1], i[2] = t[2] + e[2], i) : (t[0] += e[0], t[1] += e[1], t[2] += e[2], t)
    }, vec3.subtract = function(t, e, i) {
        return i && t !== i ? (i[0] = t[0] - e[0], i[1] = t[1] - e[1], i[2] = t[2] - e[2], i) : (t[0] -= e[0], t[1] -= e[1], t[2] -= e[2], t)
    }, vec3.negate = function(t, e) {
        return e || (e = t), e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e
    }, vec3.scale = function(t, e, i) {
        return i && t !== i ? (i[0] = t[0] * e, i[1] = t[1] * e, i[2] = t[2] * e, i) : (t[0] *= e, t[1] *= e, t[2] *= e, t)
    }, vec3.normalize = function(t, e) {
        e || (e = t);
        var i = t[0],
            r = t[1],
            n = t[2],
            s = Math.sqrt(i * i + r * r + n * n);
        return s ? 1 === s ? (e[0] = i, e[1] = r, e[2] = n, e) : (s = 1 / s, e[0] = i * s, e[1] = r * s, e[2] = n * s, e) : (e[0] = 0, e[1] = 0, e[2] = 0, e)
    }, vec3.cross = function(t, e, i) {
        i || (i = t);
        var r = t[0],
            n = t[1],
            s = (t = t[2], e[0]),
            a = e[1];
        e = e[2];
        return i[0] = n * e - t * a, i[1] = t * s - r * e, i[2] = r * a - n * s, i
    }, vec3.length = function(t) {
        var e = t[0],
            i = t[1];
        t = t[2];
        return Math.sqrt(e * e + i * i + t * t)
    }, vec3.dot = function(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
    }, vec3.direction = function(t, e, i) {
        i || (i = t);
        var r = t[0] - e[0],
            n = t[1] - e[1];
        t = t[2] - e[2];
        return (e = Math.sqrt(r * r + n * n + t * t)) ? (e = 1 / e, i[0] = r * e, i[1] = n * e, i[2] = t * e, i) : (i[0] = 0, i[1] = 0, i[2] = 0, i)
    }, vec3.lerp = function(t, e, i, r) {
        return r || (r = t), r[0] = t[0] + i * (e[0] - t[0]), r[1] = t[1] + i * (e[1] - t[1]), r[2] = t[2] + i * (e[2] - t[2]), r
    }, vec3.str = function(t) {
        return "[" + t[0] + ", " + t[1] + ", " + t[2] + "]"
    }, mat3.create = function(t) {
        var e = new MatrixArray(9);
        return t && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8]), e
    }, mat3.set = function(t, e) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e
    }, mat3.identity = function(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
    }, mat3.transpose = function(t, e) {
        if (!e || t === e) {
            var i = t[1],
                r = t[2],
                n = t[5];
            return t[1] = t[3], t[2] = t[6], t[3] = i, t[5] = t[7], t[6] = r, t[7] = n, t
        }
        return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], e
    }, mat3.toMat4 = function(t, e) {
        return e || (e = mat4.create()), e[15] = 1, e[14] = 0, e[13] = 0, e[12] = 0, e[11] = 0, e[10] = t[8], e[9] = t[7], e[8] = t[6], e[7] = 0, e[6] = t[5], e[5] = t[4], e[4] = t[3], e[3] = 0, e[2] = t[2], e[1] = t[1], e[0] = t[0], e
    }, mat3.str = function(t) {
        return "[" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + "]"
    }, mat4.create = function(t) {
        var e = new MatrixArray(16);
        return t && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e
    }, mat4.set = function(t, e) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
    }, mat4.identity = function(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }, mat4.transpose = function(t, e) {
        if (!e || t === e) {
            var i = t[1],
                r = t[2],
                n = t[3],
                s = t[6],
                a = t[7],
                o = t[11];
            return t[1] = t[4], t[2] = t[8], t[3] = t[12], t[4] = i, t[6] = t[9], t[7] = t[13], t[8] = r, t[9] = s, t[11] = t[14], t[12] = n, t[13] = a, t[14] = o, t
        }
        return e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15], e
    }, mat4.determinant = function(t) {
        var e = t[0],
            i = t[1],
            r = t[2],
            n = t[3],
            s = t[4],
            a = t[5],
            o = t[6],
            h = t[7],
            c = t[8],
            l = t[9],
            u = t[10],
            p = t[11],
            d = t[12],
            f = t[13],
            g = t[14];
        return d * l * o * n - c * f * o * n - d * a * u * n + s * f * u * n + c * a * g * n - s * l * g * n - d * l * r * h + c * f * r * h + d * i * u * h - e * f * u * h - c * i * g * h + e * l * g * h + d * a * r * p - s * f * r * p - d * i * o * p + e * f * o * p + s * i * g * p - e * a * g * p - c * a * r * (t = t[15]) + s * l * r * t + c * i * o * t - e * l * o * t - s * i * u * t + e * a * u * t
    }, mat4.inverse = function(t, e) {
        e || (e = t);
        var i = t[0],
            r = t[1],
            n = t[2],
            s = t[3],
            a = t[4],
            o = t[5],
            h = t[6],
            c = t[7],
            l = t[8],
            u = t[9],
            p = t[10],
            d = t[11],
            f = t[12],
            g = t[13],
            y = t[14],
            m = t[15],
            _ = i * o - r * a,
            v = i * h - n * a,
            b = i * c - s * a,
            w = r * h - n * o,
            x = r * c - s * o,
            S = n * c - s * h,
            T = l * g - u * f,
            O = l * y - p * f,
            C = l * m - d * f,
            A = u * y - p * g,
            k = u * m - d * g,
            E = p * m - d * y,
            P = 1 / (_ * E - v * k + b * A + w * C - x * O + S * T);
        return e[0] = (o * E - h * k + c * A) * P, e[1] = (-r * E + n * k - s * A) * P, e[2] = (g * S - y * x + m * w) * P, e[3] = (-u * S + p * x - d * w) * P, e[4] = (-a * E + h * C - c * O) * P, e[5] = (i * E - n * C + s * O) * P, e[6] = (-f * S + y * b - m * v) * P, e[7] = (l * S - p * b + d * v) * P, e[8] = (a * k - o * C + c * T) * P, e[9] = (-i * k + r * C - s * T) * P, e[10] = (f * x - g * b + m * _) * P, e[11] = (-l * x + u * b - d * _) * P, e[12] = (-a * A + o * O - h * T) * P, e[13] = (i * A - r * O + n * T) * P, e[14] = (-f * w + g * v - y * _) * P, e[15] = (l * w - u * v + p * _) * P, e
    }, mat4.toRotationMat = function(t, e) {
        return e || (e = mat4.create()), e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }, mat4.toMat3 = function(t, e) {
        return e || (e = mat3.create()), e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[4], e[4] = t[5], e[5] = t[6], e[6] = t[8], e[7] = t[9], e[8] = t[10], e
    }, mat4.toInverseMat3 = function(t, e) {
        var i = t[0],
            r = t[1],
            n = t[2],
            s = t[4],
            a = t[5],
            o = t[6],
            h = t[8],
            c = t[9],
            l = t[10],
            u = l * a - o * c,
            p = -l * s + o * h,
            d = c * s - a * h,
            f = i * u + r * p + n * d;
        return f ? (f = 1 / f, e || (e = mat3.create()), e[0] = u * f, e[1] = (-l * r + n * c) * f, e[2] = (o * r - n * a) * f, e[3] = p * f, e[4] = (l * i - n * h) * f, e[5] = (-o * i + n * s) * f, e[6] = d * f, e[7] = (-c * i + r * h) * f, e[8] = (a * i - r * s) * f, e) : null
    }, mat4.multiply = function(t, e, i) {
        i || (i = t);
        var r = t[0],
            n = t[1],
            s = t[2],
            a = t[3],
            o = t[4],
            h = t[5],
            c = t[6],
            l = t[7],
            u = t[8],
            p = t[9],
            d = t[10],
            f = t[11],
            g = t[12],
            y = t[13],
            m = t[14],
            _ = (t = t[15], e[0]),
            v = e[1],
            b = e[2],
            w = e[3],
            x = e[4],
            S = e[5],
            T = e[6],
            O = e[7],
            C = e[8],
            A = e[9],
            k = e[10],
            E = e[11],
            P = e[12],
            L = e[13],
            I = e[14];
        e = e[15];
        return i[0] = _ * r + v * o + b * u + w * g, i[1] = _ * n + v * h + b * p + w * y, i[2] = _ * s + v * c + b * d + w * m, i[3] = _ * a + v * l + b * f + w * t, i[4] = x * r + S * o + T * u + O * g, i[5] = x * n + S * h + T * p + O * y, i[6] = x * s + S * c + T * d + O * m, i[7] = x * a + S * l + T * f + O * t, i[8] = C * r + A * o + k * u + E * g, i[9] = C * n + A * h + k * p + E * y, i[10] = C * s + A * c + k * d + E * m, i[11] = C * a + A * l + k * f + E * t, i[12] = P * r + L * o + I * u + e * g, i[13] = P * n + L * h + I * p + e * y, i[14] = P * s + L * c + I * d + e * m, i[15] = P * a + L * l + I * f + e * t, i
    }, mat4.multiplyVec3 = function(t, e, i) {
        i || (i = e);
        var r = e[0],
            n = e[1];
        e = e[2];
        return i[0] = t[0] * r + t[4] * n + t[8] * e + t[12], i[1] = t[1] * r + t[5] * n + t[9] * e + t[13], i[2] = t[2] * r + t[6] * n + t[10] * e + t[14], i
    }, mat4.multiplyVec4 = function(t, e, i) {
        i || (i = e);
        var r = e[0],
            n = e[1],
            s = e[2];
        e = e[3];
        return i[0] = t[0] * r + t[4] * n + t[8] * s + t[12] * e, i[1] = t[1] * r + t[5] * n + t[9] * s + t[13] * e, i[2] = t[2] * r + t[6] * n + t[10] * s + t[14] * e, i[3] = t[3] * r + t[7] * n + t[11] * s + t[15] * e, i
    }, mat4.translate = function(t, e, i) {
        var r, n, s, a, o, h, c, l, u, p, d, f, g = e[0],
            y = e[1];
        e = e[2];
        return i && t !== i ? (r = t[0], n = t[1], s = t[2], a = t[3], o = t[4], h = t[5], c = t[6], l = t[7], u = t[8], p = t[9], d = t[10], f = t[11], i[0] = r, i[1] = n, i[2] = s, i[3] = a, i[4] = o, i[5] = h, i[6] = c, i[7] = l, i[8] = u, i[9] = p, i[10] = d, i[11] = f, i[12] = r * g + o * y + u * e + t[12], i[13] = n * g + h * y + p * e + t[13], i[14] = s * g + c * y + d * e + t[14], i[15] = a * g + l * y + f * e + t[15], i) : (t[12] = t[0] * g + t[4] * y + t[8] * e + t[12], t[13] = t[1] * g + t[5] * y + t[9] * e + t[13], t[14] = t[2] * g + t[6] * y + t[10] * e + t[14], t[15] = t[3] * g + t[7] * y + t[11] * e + t[15], t)
    }, mat4.scale = function(t, e, i) {
        var r = e[0],
            n = e[1];
        e = e[2];
        return i && t !== i ? (i[0] = t[0] * r, i[1] = t[1] * r, i[2] = t[2] * r, i[3] = t[3] * r, i[4] = t[4] * n, i[5] = t[5] * n, i[6] = t[6] * n, i[7] = t[7] * n, i[8] = t[8] * e, i[9] = t[9] * e, i[10] = t[10] * e, i[11] = t[11] * e, i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15], i) : (t[0] *= r, t[1] *= r, t[2] *= r, t[3] *= r, t[4] *= n, t[5] *= n, t[6] *= n, t[7] *= n, t[8] *= e, t[9] *= e, t[10] *= e, t[11] *= e, t)
    }, mat4.rotate = function(t, e, i, r) {
        var n, s, a, o, h, c, l, u, p, d, f, g, y, m, _, v, b, w, x, S, T = i[0],
            O = i[1],
            C = (i = i[2], Math.sqrt(T * T + O * O + i * i));
        return C ? (1 !== C && (T *= C = 1 / C, O *= C, i *= C), n = Math.sin(e), a = 1 - (s = Math.cos(e)), e = t[0], C = t[1], o = t[2], h = t[3], c = t[4], l = t[5], u = t[6], p = t[7], d = t[8], f = t[9], g = t[10], y = t[11], m = T * T * a + s, _ = O * T * a + i * n, v = i * T * a - O * n, b = T * O * a - i * n, w = O * O * a + s, x = i * O * a + T * n, S = T * i * a + O * n, T = O * i * a - T * n, O = i * i * a + s, r ? t !== r && (r[12] = t[12], r[13] = t[13], r[14] = t[14], r[15] = t[15]) : r = t, r[0] = e * m + c * _ + d * v, r[1] = C * m + l * _ + f * v, r[2] = o * m + u * _ + g * v, r[3] = h * m + p * _ + y * v, r[4] = e * b + c * w + d * x, r[5] = C * b + l * w + f * x, r[6] = o * b + u * w + g * x, r[7] = h * b + p * w + y * x, r[8] = e * S + c * T + d * O, r[9] = C * S + l * T + f * O, r[10] = o * S + u * T + g * O, r[11] = h * S + p * T + y * O, r) : null
    }, mat4.rotateX = function(t, e, i) {
        var r = Math.sin(e),
            n = (e = Math.cos(e), t[4]),
            s = t[5],
            a = t[6],
            o = t[7],
            h = t[8],
            c = t[9],
            l = t[10],
            u = t[11];
        return i ? t !== i && (i[0] = t[0], i[1] = t[1], i[2] = t[2], i[3] = t[3], i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15]) : i = t, i[4] = n * e + h * r, i[5] = s * e + c * r, i[6] = a * e + l * r, i[7] = o * e + u * r, i[8] = n * -r + h * e, i[9] = s * -r + c * e, i[10] = a * -r + l * e, i[11] = o * -r + u * e, i
    }, mat4.rotateY = function(t, e, i) {
        var r = Math.sin(e),
            n = (e = Math.cos(e), t[0]),
            s = t[1],
            a = t[2],
            o = t[3],
            h = t[8],
            c = t[9],
            l = t[10],
            u = t[11];
        return i ? t !== i && (i[4] = t[4], i[5] = t[5], i[6] = t[6], i[7] = t[7], i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15]) : i = t, i[0] = n * e + h * -r, i[1] = s * e + c * -r, i[2] = a * e + l * -r, i[3] = o * e + u * -r, i[8] = n * r + h * e, i[9] = s * r + c * e, i[10] = a * r + l * e, i[11] = o * r + u * e, i
    }, mat4.rotateZ = function(t, e, i) {
        var r = Math.sin(e),
            n = (e = Math.cos(e), t[0]),
            s = t[1],
            a = t[2],
            o = t[3],
            h = t[4],
            c = t[5],
            l = t[6],
            u = t[7];
        return i ? t !== i && (i[8] = t[8], i[9] = t[9], i[10] = t[10], i[11] = t[11], i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15]) : i = t, i[0] = n * e + h * r, i[1] = s * e + c * r, i[2] = a * e + l * r, i[3] = o * e + u * r, i[4] = n * -r + h * e, i[5] = s * -r + c * e, i[6] = a * -r + l * e, i[7] = o * -r + u * e, i
    }, mat4.frustum = function(t, e, i, r, n, s, a) {
        a || (a = mat4.create());
        var o = e - t,
            h = r - i,
            c = s - n;
        return a[0] = 2 * n / o, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 2 * n / h, a[6] = 0, a[7] = 0, a[8] = (e + t) / o, a[9] = (r + i) / h, a[10] = -(s + n) / c, a[11] = -1, a[12] = 0, a[13] = 0, a[14] = -s * n * 2 / c, a[15] = 0, a
    }, mat4.perspective = function(t, e, i, r, n) {
        return e *= t = i * Math.tan(t * Math.PI / 360), mat4.frustum(-e, e, -t, t, i, r, n)
    }, mat4.ortho = function(t, e, i, r, n, s, a) {
        a || (a = mat4.create());
        var o = e - t,
            h = r - i,
            c = s - n;
        return a[0] = 2 / o, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 2 / h, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = -2 / c, a[11] = 0, a[12] = -(t + e) / o, a[13] = -(r + i) / h, a[14] = -(s + n) / c, a[15] = 1, a
    }, mat4.lookAt = function(t, e, i, r) {
        r || (r = mat4.create());
        var n, s, a, o, h, c, l, u, p = t[0],
            d = t[1];
        t = t[2];
        return s = i[0], a = i[1], n = i[2], i = e[1], c = e[2], p === e[0] && d === i && t === c ? mat4.identity(r) : (i = p - e[0], c = d - e[1], l = t - e[2], e = a * (l *= u = 1 / Math.sqrt(i * i + c * c + l * l)) - n * (c *= u), n = n * (i *= u) - s * l, s = s * c - a * i, (u = Math.sqrt(e * e + n * n + s * s)) ? (e *= u = 1 / u, n *= u, s *= u) : s = n = e = 0, a = c * s - l * n, o = l * e - i * s, h = i * n - c * e, (u = Math.sqrt(a * a + o * o + h * h)) ? (a *= u = 1 / u, o *= u, h *= u) : h = o = a = 0, r[0] = e, r[1] = a, r[2] = i, r[3] = 0, r[4] = n, r[5] = o, r[6] = c, r[7] = 0, r[8] = s, r[9] = h, r[10] = l, r[11] = 0, r[12] = -(e * p + n * d + s * t), r[13] = -(a * p + o * d + h * t), r[14] = -(i * p + c * d + l * t), r[15] = 1, r)
    }, mat4.fromRotationTranslation = function(t, e, i) {
        i || (i = mat4.create());
        var r = t[0],
            n = t[1],
            s = t[2],
            a = t[3],
            o = r + r,
            h = n + n,
            c = s + s,
            l = (t = r * o, r * h);
        r *= c;
        var u = n * h;
        return n *= c, s *= c, o *= a, h *= a, a *= c, i[0] = 1 - (u + s), i[1] = l + a, i[2] = r - h, i[3] = 0, i[4] = l - a, i[5] = 1 - (t + s), i[6] = n + o, i[7] = 0, i[8] = r + h, i[9] = n - o, i[10] = 1 - (t + u), i[11] = 0, i[12] = e[0], i[13] = e[1], i[14] = e[2], i[15] = 1, i
    }, mat4.str = function(t) {
        return "[" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + "]"
    }, quat4.create = function(t) {
        var e = new MatrixArray(4);
        return t && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3]), e
    }, quat4.set = function(t, e) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
    }, quat4.calculateW = function(t, e) {
        var i = t[0],
            r = t[1],
            n = t[2];
        return e && t !== e ? (e[0] = i, e[1] = r, e[2] = n, e[3] = -Math.sqrt(Math.abs(1 - i * i - r * r - n * n)), e) : (t[3] = -Math.sqrt(Math.abs(1 - i * i - r * r - n * n)), t)
    }, quat4.inverse = function(t, e) {
        return e && t !== e ? (e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = t[3], e) : (t[0] *= -1, t[1] *= -1, t[2] *= -1, t)
    }, quat4.length = function(t) {
        var e = t[0],
            i = t[1],
            r = t[2];
        t = t[3];
        return Math.sqrt(e * e + i * i + r * r + t * t)
    }, quat4.normalize = function(t, e) {
        e || (e = t);
        var i = t[0],
            r = t[1],
            n = t[2],
            s = t[3],
            a = Math.sqrt(i * i + r * r + n * n + s * s);
        return 0 === a ? (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e) : (a = 1 / a, e[0] = i * a, e[1] = r * a, e[2] = n * a, e[3] = s * a, e)
    }, quat4.multiply = function(t, e, i) {
        i || (i = t);
        var r = t[0],
            n = t[1],
            s = t[2],
            a = (t = t[3], e[0]),
            o = e[1],
            h = e[2];
        e = e[3];
        return i[0] = r * e + t * a + n * h - s * o, i[1] = n * e + t * o + s * a - r * h, i[2] = s * e + t * h + r * o - n * a, i[3] = t * e - r * a - n * o - s * h, i
    }, quat4.multiplyVec3 = function(t, e, i) {
        i || (i = e);
        var r = e[0],
            n = e[1],
            s = e[2],
            a = (e = t[0], t[1]),
            o = t[2],
            h = (t = t[3]) * r + a * s - o * n,
            c = t * n + o * r - e * s,
            l = t * s + e * n - a * r;
        r = -e * r - a * n - o * s;
        return i[0] = h * t + r * -e + c * -o - l * -a, i[1] = c * t + r * -a + l * -e - h * -o, i[2] = l * t + r * -o + h * -a - c * -e, i
    }, quat4.toMat3 = function(t, e) {
        e || (e = mat3.create());
        var i = t[0],
            r = t[1],
            n = t[2],
            s = t[3],
            a = i + i,
            o = r + r,
            h = n + n,
            c = i * a,
            l = i * o;
        i *= h;
        var u = r * o;
        return r *= h, n *= h, a *= s, o *= s, s *= h, e[0] = 1 - (u + n), e[1] = l + s, e[2] = i - o, e[3] = l - s, e[4] = 1 - (c + n), e[5] = r + a, e[6] = i + o, e[7] = r - a, e[8] = 1 - (c + u), e
    }, quat4.toMat4 = function(t, e) {
        e || (e = mat4.create());
        var i = t[0],
            r = t[1],
            n = t[2],
            s = t[3],
            a = i + i,
            o = r + r,
            h = n + n,
            c = i * a,
            l = i * o;
        i *= h;
        var u = r * o;
        return r *= h, n *= h, a *= s, o *= s, s *= h, e[0] = 1 - (u + n), e[1] = l + s, e[2] = i - o, e[3] = 0, e[4] = l - s, e[5] = 1 - (c + n), e[6] = r + a, e[7] = 0, e[8] = i + o, e[9] = r - a, e[10] = 1 - (c + u), e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }, quat4.slerp = function(t, e, i, r) {
        r || (r = t);
        var n, s, a = t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
        return Math.abs(a) >= 1 ? (r !== t && (r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3]), r) : (n = Math.acos(a), s = Math.sqrt(1 - a * a), Math.abs(s) < .001 ? (r[0] = .5 * t[0] + .5 * e[0], r[1] = .5 * t[1] + .5 * e[1], r[2] = .5 * t[2] + .5 * e[2], r[3] = .5 * t[3] + .5 * e[3], r) : (a = Math.sin((1 - i) * n) / s, i = Math.sin(i * n) / s, r[0] = t[0] * a + e[0] * i, r[1] = t[1] * a + e[1] * i, r[2] = t[2] * a + e[2] * i, r[3] = t[3] * a + e[3] * i, r))
    }, quat4.str = function(t) {
        return "[" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + "]"
    },
    function() {
        var t = mat4.create();

        function e(t, e, i) {
            this.isIE = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent), this.width = 0, this.height = 0, this.enableFrontToBack = !!i, this.isEarlyZPass = !1, this.isBatchInEarlyZPass = !1, this.currentZ = 0, this.zNear = 1, this.zFar = 1e3, this.zIncrement = (this.zFar - this.zNear) / 32768, this.zA = this.zFar / (this.zFar - this.zNear), this.zB = this.zFar * this.zNear / (this.zNear - this.zFar), this.kzA = 65536 * this.zA, this.kzB = 65536 * this.zB, this.cam = vec3.create([0, 0, 100]), this.look = vec3.create([0, 0, 0]), this.up = vec3.create([0, 1, 0]), this.worldScale = vec3.create([1, 1, 1]), this.enable_mipmaps = !0, this.matP = mat4.create(), this.matMV = mat4.create(), this.lastMV = mat4.create(), this.currentMV = mat4.create(), this.gl = t, this.version = 0 === this.gl.getParameter(this.gl.VERSION).indexOf("WebGL 2") ? 2 : 1, this.initState()
        }

        function i(t, e, i) {
            this.gl = t, this.shaderProgram = e, this.name = i, this.locAPos = t.getAttribLocation(e, "aPos"), this.locATex = t.getAttribLocation(e, "aTex"), this.locMatP = t.getUniformLocation(e, "matP"), this.locMatMV = t.getUniformLocation(e, "matMV"), this.locOpacity = t.getUniformLocation(e, "opacity"), this.locColorFill = t.getUniformLocation(e, "colorFill"), this.locSamplerFront = t.getUniformLocation(e, "samplerFront"), this.locSamplerBack = t.getUniformLocation(e, "samplerBack"), this.locDestStart = t.getUniformLocation(e, "destStart"), this.locDestEnd = t.getUniformLocation(e, "destEnd"), this.locSeconds = t.getUniformLocation(e, "seconds"), this.locPixelWidth = t.getUniformLocation(e, "pixelWidth"), this.locPixelHeight = t.getUniformLocation(e, "pixelHeight"), this.locLayerScale = t.getUniformLocation(e, "layerScale"), this.locLayerAngle = t.getUniformLocation(e, "layerAngle"), this.locViewOrigin = t.getUniformLocation(e, "viewOrigin"), this.locScrollPos = t.getUniformLocation(e, "scrollPos"), this.hasAnyOptionalUniforms = !!(this.locPixelWidth || this.locPixelHeight || this.locSeconds || this.locSamplerBack || this.locDestStart || this.locDestEnd || this.locLayerScale || this.locLayerAngle || this.locViewOrigin || this.locScrollPos), this.lpPixelWidth = -999, this.lpPixelHeight = -999, this.lpOpacity = 1, this.lpDestStartX = 0, this.lpDestStartY = 0, this.lpDestEndX = 1, this.lpDestEndY = 1, this.lpLayerScale = 1, this.lpLayerAngle = 0, this.lpViewOriginX = 0, this.lpViewOriginY = 0, this.lpScrollPosX = 0, this.lpScrollPosY = 0, this.lpSeconds = 0, this.lastCustomParams = [], this.lpMatMV = mat4.create(), this.locOpacity && t.uniform1f(this.locOpacity, 1), this.locColorFill && t.uniform4f(this.locColorFill, 1, 1, 1, 1), this.locSamplerFront && t.uniform1i(this.locSamplerFront, 0), this.locSamplerBack && t.uniform1i(this.locSamplerBack, 1), this.locDestStart && t.uniform2f(this.locDestStart, 0, 0), this.locDestEnd && t.uniform2f(this.locDestEnd, 1, 1), this.locLayerScale && t.uniform1f(this.locLayerScale, 1), this.locLayerAngle && t.uniform1f(this.locLayerAngle, 0), this.locViewOrigin && t.uniform2f(this.locViewOrigin, 0, 0), this.locScrollPos && t.uniform2f(this.locScrollPos, 0, 0), this.locSeconds && t.uniform1f(this.locSeconds, 0), this.hasCurrentMatMV = !1
        }

        function r(t, e) {
            return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8] && t[9] === e[9] && t[10] === e[10] && t[11] === e[11] && t[12] === e[12] && t[13] === e[13] && t[14] === e[14] && t[15] === e[15]
        }

        function n(t, e) {
            this.type = t, this.glwrap = e, this.gl = e.gl, this.opacityParam = 0, this.startIndex = 0, this.indexCount = 0, this.texParam = null, this.mat4param = null, this.shaderParams = [], cr.seal(this)
        }
        e.prototype.initState = function() {
            var t, e = this.gl;
            for (this.lastOpacity = 1, this.lastTexture0 = null, this.lastTexture1 = null, this.currentOpacity = 1, e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT), e.enable(e.BLEND), e.blendFunc(e.ONE, e.ONE_MINUS_SRC_ALPHA), e.disable(e.CULL_FACE), e.disable(e.STENCIL_TEST), e.disable(e.DITHER), this.enableFrontToBack ? (e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL)) : e.disable(e.DEPTH_TEST), this.maxTextureSize = e.getParameter(e.MAX_TEXTURE_SIZE), this.lastSrcBlend = e.ONE, this.lastDestBlend = e.ONE_MINUS_SRC_ALPHA, this.vertexData = new Float32Array(8e3 * (this.enableFrontToBack ? 3 : 2)), this.texcoordData = new Float32Array(16e3), this.pointData = new Float32Array(32e3), this.pointBuffer = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, this.pointBuffer), e.bufferData(e.ARRAY_BUFFER, this.pointData.byteLength, e.DYNAMIC_DRAW), this.vertexBuffers = new Array(4), this.texcoordBuffers = new Array(4), t = 0; t < 4; t++) this.vertexBuffers[t] = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, this.vertexBuffers[t]), e.bufferData(e.ARRAY_BUFFER, this.vertexData.byteLength, e.DYNAMIC_DRAW), this.texcoordBuffers[t] = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, this.texcoordBuffers[t]), e.bufferData(e.ARRAY_BUFFER, this.texcoordData.byteLength, e.DYNAMIC_DRAW);
            this.curBuffer = 0, this.indexBuffer = e.createBuffer(), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
            var i = new Uint16Array(12e3);
            t = 0;
            for (var r, n, s = 0; t < 12e3;) i[t++] = s, i[t++] = s + 1, i[t++] = s + 2, i[t++] = s, i[t++] = s + 2, i[t++] = s + 3, s += 4;
            e.bufferData(e.ELEMENT_ARRAY_BUFFER, i, e.STATIC_DRAW), this.vertexPtr = 0, this.texPtr = 0, this.pointPtr = 0, this.shaderPrograms = [], r = ["varying mediump vec2 vTex;", "uniform lowp float opacity;", "uniform lowp sampler2D samplerFront;", "void main(void) {", "\tgl_FragColor = texture2D(samplerFront, vTex);", "\tgl_FragColor *= opacity;", "}"].join("\n"), n = this.enableFrontToBack ? ["attribute highp vec3 aPos;", "attribute mediump vec2 aTex;", "varying mediump vec2 vTex;", "uniform highp mat4 matP;", "uniform highp mat4 matMV;", "void main(void) {", "\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, aPos.z, 1.0);", "\tvTex = aTex;", "}"].join("\n") : ["attribute highp vec2 aPos;", "attribute mediump vec2 aTex;", "varying mediump vec2 vTex;", "uniform highp mat4 matP;", "uniform highp mat4 matMV;", "void main(void) {", "\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);", "\tvTex = aTex;", "}"].join("\n");
            var a = this.createShaderProgram({
                src: r
            }, n, "<default>");
            this.shaderPrograms.push(a), r = ["uniform mediump sampler2D samplerFront;", "varying lowp float opacity;", "void main(void) {", "\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);", "\tgl_FragColor *= opacity;", "}"].join("\n");
            var o = ["attribute vec4 aPos;", "varying float opacity;", "uniform mat4 matP;", "uniform mat4 matMV;", "void main(void) {", "\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);", "\tgl_PointSize = aPos.z;", "\topacity = aPos.w;", "}"].join("\n");
            a = this.createShaderProgram({
                src: r
            }, o, "<point>"), this.shaderPrograms.push(a), r = ["varying mediump vec2 vTex;", "uniform lowp sampler2D samplerFront;", "void main(void) {", "\tif (texture2D(samplerFront, vTex).a < 1.0)", "\t\tdiscard;", "}"].join("\n");
            a = this.createShaderProgram({
                src: r
            }, n, "<earlyz>");
            this.shaderPrograms.push(a), r = ["uniform lowp vec4 colorFill;", "void main(void) {", "\tgl_FragColor = colorFill;", "}"].join("\n");
            a = this.createShaderProgram({
                src: r
            }, n, "<fill>");
            for (var h in this.shaderPrograms.push(a), cr.shaders) cr.shaders.hasOwnProperty(h) && this.shaderPrograms.push(this.createShaderProgram(cr.shaders[h], n, h));
            e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, null), this.batch = [], this.batchPtr = 0, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1, this.lastProgram = -1, this.currentProgram = -1, this.currentShader = null, this.fbo = e.createFramebuffer(), this.renderToTex = null, this.depthBuffer = null, this.attachedDepthBuffer = !1, this.enableFrontToBack && (this.depthBuffer = e.createRenderbuffer()), this.tmpVec3 = vec3.create([0, 0, 0]);
            var c = e.getParameter(e.ALIASED_POINT_SIZE_RANGE);
            this.minPointSize = c[0], this.maxPointSize = c[1], this.maxPointSize > 2048 && (this.maxPointSize = 2048), this.switchProgram(0), cr.seal(this)
        }, i.prototype.updateMatMV = function(t) {
            r(this.lpMatMV, t) || (mat4.set(t, this.lpMatMV), this.gl.uniformMatrix4fv(this.locMatMV, !1, t))
        }, e.prototype.createShaderProgram = function(t, e, r) {
            var n = this.gl,
                s = n.createShader(n.FRAGMENT_SHADER);
            if (n.shaderSource(s, t.src), n.compileShader(s), !n.getShaderParameter(s, n.COMPILE_STATUS)) {
                var a = n.getShaderInfoLog(s);
                throw n.deleteShader(s), new Error("error compiling fragment shader: " + a)
            }
            var o = n.createShader(n.VERTEX_SHADER);
            if (n.shaderSource(o, e), n.compileShader(o), !n.getShaderParameter(o, n.COMPILE_STATUS)) {
                a = n.getShaderInfoLog(o);
                throw n.deleteShader(s), n.deleteShader(o), new Error("error compiling vertex shader: " + a)
            }
            var h = n.createProgram();
            if (n.attachShader(h, s), n.attachShader(h, o), n.linkProgram(h), !n.getProgramParameter(h, n.LINK_STATUS)) {
                a = n.getProgramInfoLog(h);
                throw n.deleteShader(s), n.deleteShader(o), n.deleteProgram(h), new Error("error linking shader program: " + a)
            }
            n.useProgram(h), n.deleteShader(s), n.deleteShader(o);
            var c, l, u = new i(n, h, r);
            for (u.extendBoxHorizontal = t.extendBoxHorizontal || 0, u.extendBoxVertical = t.extendBoxVertical || 0, u.crossSampling = !!t.crossSampling, u.preservesOpaqueness = !!t.preservesOpaqueness, u.animated = !!t.animated, u.parameters = t.parameters || [], c = 0, l = u.parameters.length; c < l; c++) u.parameters[c][1] = n.getUniformLocation(h, u.parameters[c][0]), u.lastCustomParams.push(0), n.uniform1f(u.parameters[c][1], 0);
            return cr.seal(u), u
        }, e.prototype.getShaderIndex = function(t) {
            var e, i;
            for (e = 0, i = this.shaderPrograms.length; e < i; e++)
                if (this.shaderPrograms[e].name === t) return e;
            return -1
        }, e.prototype.project = function(t, e, i) {
            var r = this.matMV,
                n = this.matP,
                s = [0, 0, 0, 0, 0, 0, 0, 0];
            s[0] = r[0] * t + r[4] * e + r[12], s[1] = r[1] * t + r[5] * e + r[13], s[2] = r[2] * t + r[6] * e + r[14], s[3] = r[3] * t + r[7] * e + r[15], s[4] = n[0] * s[0] + n[4] * s[1] + n[8] * s[2] + n[12] * s[3], s[5] = n[1] * s[0] + n[5] * s[1] + n[9] * s[2] + n[13] * s[3], s[6] = n[2] * s[0] + n[6] * s[1] + n[10] * s[2] + n[14] * s[3], s[7] = -s[2], 0 !== s[7] && (s[7] = 1 / s[7], s[4] *= s[7], s[5] *= s[7], s[6] *= s[7], i[0] = (.5 * s[4] + .5) * this.width, i[1] = (.5 * s[5] + .5) * this.height)
        }, e.prototype.setSize = function(t, e, i) {
            if (this.width !== t || this.height !== e || i) {
                this.endBatch();
                var r, n, s, a = this.gl;
                if (this.width = t, this.height = e, a.viewport(0, 0, t, e), mat4.lookAt(this.cam, this.look, this.up, this.matMV), this.enableFrontToBack) mat4.ortho(-t / 2, t / 2, e / 2, -e / 2, this.zNear, this.zFar, this.matP), this.worldScale[0] = 1, this.worldScale[1] = 1;
                else {
                    mat4.perspective(45, t / e, this.zNear, this.zFar, this.matP);
                    var o = [0, 0],
                        h = [0, 0];
                    this.project(0, 0, o), this.project(1, 1, h), this.worldScale[0] = 1 / (h[0] - o[0]), this.worldScale[1] = -1 / (h[1] - o[1])
                }
                for (r = 0, n = this.shaderPrograms.length; r < n; r++)(s = this.shaderPrograms[r]).hasCurrentMatMV = !1, s.locMatP && (a.useProgram(s.shaderProgram), a.uniformMatrix4fv(s.locMatP, !1, this.matP));
                a.useProgram(this.shaderPrograms[this.lastProgram].shaderProgram), a.bindTexture(a.TEXTURE_2D, null), a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, null), a.activeTexture(a.TEXTURE0), this.lastTexture0 = null, this.lastTexture1 = null, this.depthBuffer && (a.bindFramebuffer(a.FRAMEBUFFER, this.fbo), a.bindRenderbuffer(a.RENDERBUFFER, this.depthBuffer), a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_COMPONENT16, this.width, this.height), this.attachedDepthBuffer || (a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.RENDERBUFFER, this.depthBuffer), this.attachedDepthBuffer = !0), a.bindRenderbuffer(a.RENDERBUFFER, null), a.bindFramebuffer(a.FRAMEBUFFER, null), this.renderToTex = null)
            }
        }, e.prototype.resetModelView = function() {
            mat4.lookAt(this.cam, this.look, this.up, this.matMV), mat4.scale(this.matMV, this.worldScale)
        }, e.prototype.translate = function(t, e) {
            0 === t && 0 === e || (this.tmpVec3[0] = t, this.tmpVec3[1] = e, this.tmpVec3[2] = 0, mat4.translate(this.matMV, this.tmpVec3))
        }, e.prototype.scale = function(t, e) {
            1 === t && 1 === e || (this.tmpVec3[0] = t, this.tmpVec3[1] = e, this.tmpVec3[2] = 1, mat4.scale(this.matMV, this.tmpVec3))
        }, e.prototype.rotateZ = function(t) {
            0 !== t && mat4.rotateZ(this.matMV, t)
        }, e.prototype.updateModelView = function() {
            if (!r(this.lastMV, this.matMV)) {
                var t = this.pushBatch();
                t.type = 5, t.mat4param ? mat4.set(this.matMV, t.mat4param) : t.mat4param = mat4.create(this.matMV), mat4.set(this.matMV, this.lastMV), this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, e.prototype.setEarlyZIndex = function(t) {
            this.enableFrontToBack && (t > 32760 && (t = 32760), this.currentZ = this.cam[2] - this.zNear - t * this.zIncrement)
        }, n.prototype.doSetEarlyZPass = function() {
            var t = this.gl,
                e = this.glwrap;
            0 !== this.startIndex ? (t.depthMask(!0), t.colorMask(!1, !1, !1, !1), t.disable(t.BLEND), t.bindFramebuffer(t.FRAMEBUFFER, e.fbo), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, null, 0), t.clear(t.DEPTH_BUFFER_BIT), t.bindFramebuffer(t.FRAMEBUFFER, null), e.isBatchInEarlyZPass = !0) : (t.depthMask(!1), t.colorMask(!0, !0, !0, !0), t.enable(t.BLEND), e.isBatchInEarlyZPass = !1)
        }, n.prototype.doSetTexture = function() {
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.texParam)
        }, n.prototype.doSetTexture1 = function() {
            var t = this.gl;
            t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, this.texParam), t.activeTexture(t.TEXTURE0)
        }, n.prototype.doSetOpacity = function() {
            var t = this.opacityParam,
                e = this.glwrap;
            e.currentOpacity = t;
            var i = e.currentShader;
            i.locOpacity && i.lpOpacity !== t && (i.lpOpacity = t, this.gl.uniform1f(i.locOpacity, t))
        }, n.prototype.doQuad = function() {
            this.gl.drawElements(this.gl.TRIANGLES, this.indexCount, this.gl.UNSIGNED_SHORT, this.startIndex)
        }, n.prototype.doSetBlend = function() {
            this.gl.blendFunc(this.startIndex, this.indexCount)
        }, n.prototype.doUpdateModelView = function() {
            var t, e, i, r = this.glwrap.shaderPrograms,
                n = this.glwrap.currentProgram;
            for (t = 0, e = r.length; t < e; t++) i = r[t], t === n && i.locMatMV ? (i.updateMatMV(this.mat4param), i.hasCurrentMatMV = !0) : i.hasCurrentMatMV = !1;
            mat4.set(this.mat4param, this.glwrap.currentMV)
        }, n.prototype.doRenderToTexture = function() {
            var t = this.gl,
                e = this.glwrap;
            this.texParam ? (e.lastTexture1 === this.texParam && (t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, null), e.lastTexture1 = null, t.activeTexture(t.TEXTURE0)), t.bindFramebuffer(t.FRAMEBUFFER, e.fbo), e.isBatchInEarlyZPass || t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.texParam, 0)) : (e.enableFrontToBack || t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, null, 0), t.bindFramebuffer(t.FRAMEBUFFER, null))
        }, n.prototype.doClear = function() {
            var t = this.gl,
                e = this.startIndex;
            0 === e ? (t.clearColor(this.mat4param[0], this.mat4param[1], this.mat4param[2], this.mat4param[3]), t.clear(t.COLOR_BUFFER_BIT)) : 1 === e ? (t.enable(t.SCISSOR_TEST), t.scissor(this.mat4param[0], this.mat4param[1], this.mat4param[2], this.mat4param[3]), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), t.disable(t.SCISSOR_TEST)) : t.clear(t.DEPTH_BUFFER_BIT)
        }, n.prototype.doSetDepthTestEnabled = function() {
            var t = this.gl;
            0 !== this.startIndex ? t.enable(t.DEPTH_TEST) : t.disable(t.DEPTH_TEST)
        }, n.prototype.doPoints = function() {
            var t = this.gl,
                e = this.glwrap;
            e.enableFrontToBack && t.disable(t.DEPTH_TEST);
            var i = e.shaderPrograms[1];
            t.useProgram(i.shaderProgram), !i.hasCurrentMatMV && i.locMatMV && (i.updateMatMV(e.currentMV), i.hasCurrentMatMV = !0), t.enableVertexAttribArray(i.locAPos), t.bindBuffer(t.ARRAY_BUFFER, e.pointBuffer), t.vertexAttribPointer(i.locAPos, 4, t.FLOAT, !1, 0, 0), t.drawArrays(t.POINTS, this.startIndex / 4, this.indexCount), i = e.currentShader, t.useProgram(i.shaderProgram), i.locAPos >= 0 && (t.enableVertexAttribArray(i.locAPos), t.bindBuffer(t.ARRAY_BUFFER, e.vertexBuffers[e.curBuffer]), t.vertexAttribPointer(i.locAPos, e.enableFrontToBack ? 3 : 2, t.FLOAT, !1, 0, 0)), i.locATex >= 0 && (t.enableVertexAttribArray(i.locATex), t.bindBuffer(t.ARRAY_BUFFER, e.texcoordBuffers[e.curBuffer]), t.vertexAttribPointer(i.locATex, 2, t.FLOAT, !1, 0, 0)), e.enableFrontToBack && t.enable(t.DEPTH_TEST)
        }, n.prototype.doSetProgram = function() {
            var t = this.gl,
                e = this.glwrap,
                i = e.shaderPrograms[this.startIndex];
            e.currentProgram = this.startIndex, e.currentShader = i, t.useProgram(i.shaderProgram), !i.hasCurrentMatMV && i.locMatMV && (i.updateMatMV(e.currentMV), i.hasCurrentMatMV = !0), i.locOpacity && i.lpOpacity !== e.currentOpacity && (i.lpOpacity = e.currentOpacity, t.uniform1f(i.locOpacity, e.currentOpacity)), i.locAPos >= 0 && (t.enableVertexAttribArray(i.locAPos), t.bindBuffer(t.ARRAY_BUFFER, e.vertexBuffers[e.curBuffer]), t.vertexAttribPointer(i.locAPos, e.enableFrontToBack ? 3 : 2, t.FLOAT, !1, 0, 0)), i.locATex >= 0 && (t.enableVertexAttribArray(i.locATex), t.bindBuffer(t.ARRAY_BUFFER, e.texcoordBuffers[e.curBuffer]), t.vertexAttribPointer(i.locATex, 2, t.FLOAT, !1, 0, 0))
        }, n.prototype.doSetColor = function() {
            var t = this.glwrap.currentShader,
                e = this.mat4param;
            this.gl.uniform4f(t.locColorFill, e[0], e[1], e[2], e[3])
        }, n.prototype.doSetProgramParameters = function() {
            var t, e, i = this.glwrap.currentShader,
                r = this.gl,
                n = this.mat4param;
            i.locSamplerBack && this.glwrap.lastTexture1 !== this.texParam && (r.activeTexture(r.TEXTURE1), r.bindTexture(r.TEXTURE_2D, this.texParam), this.glwrap.lastTexture1 = this.texParam, r.activeTexture(r.TEXTURE0));
            var s, a = n[0];
            if (i.locPixelWidth && a !== i.lpPixelWidth && (i.lpPixelWidth = a, r.uniform1f(i.locPixelWidth, a)), a = n[1], i.locPixelHeight && a !== i.lpPixelHeight && (i.lpPixelHeight = a, r.uniform1f(i.locPixelHeight, a)), a = n[2], s = n[3], !i.locDestStart || a === i.lpDestStartX && s === i.lpDestStartY || (i.lpDestStartX = a, i.lpDestStartY = s, r.uniform2f(i.locDestStart, a, s)), a = n[4], s = n[5], !i.locDestEnd || a === i.lpDestEndX && s === i.lpDestEndY || (i.lpDestEndX = a, i.lpDestEndY = s, r.uniform2f(i.locDestEnd, a, s)), a = n[6], i.locLayerScale && a !== i.lpLayerScale && (i.lpLayerScale = a, r.uniform1f(i.locLayerScale, a)), a = n[7], i.locLayerAngle && a !== i.lpLayerAngle && (i.lpLayerAngle = a, r.uniform1f(i.locLayerAngle, a)), a = n[8], s = n[9], !i.locViewOrigin || a === i.lpViewOriginX && s === i.lpViewOriginY || (i.lpViewOriginX = a, i.lpViewOriginY = s, r.uniform2f(i.locViewOrigin, a, s)), a = n[10], s = n[11], !i.locScrollPos || a === i.lpScrollPosX && s === i.lpScrollPosY || (i.lpScrollPosX = a, i.lpScrollPosY = s, r.uniform2f(i.locScrollPos, a, s)), a = n[12], i.locSeconds && a !== i.lpSeconds && (i.lpSeconds = a, r.uniform1f(i.locSeconds, a)), i.parameters.length)
                for (t = 0, e = i.parameters.length; t < e; t++)(a = this.shaderParams[t]) !== i.lastCustomParams[t] && (i.lastCustomParams[t] = a, r.uniform1f(i.parameters[t][1], a))
        }, e.prototype.pushBatch = function() {
            return this.batchPtr === this.batch.length && this.batch.push(new n(0, this)), this.batch[this.batchPtr++]
        }, e.prototype.endBatch = function() {
            if (0 !== this.batchPtr && !this.gl.isContextLost()) {
                var t, e, i, r = this.gl;
                if (this.pointPtr > 0 && (r.bindBuffer(r.ARRAY_BUFFER, this.pointBuffer), r.bufferSubData(r.ARRAY_BUFFER, 0, this.pointData.subarray(0, this.pointPtr)), n && n.locAPos >= 0 && "<point>" === n.name && r.vertexAttribPointer(n.locAPos, 4, r.FLOAT, !1, 0, 0)), this.vertexPtr > 0) {
                    var n = this.currentShader;
                    r.bindBuffer(r.ARRAY_BUFFER, this.vertexBuffers[this.curBuffer]), r.bufferSubData(r.ARRAY_BUFFER, 0, this.vertexData.subarray(0, this.vertexPtr)), n && n.locAPos >= 0 && "<point>" !== n.name && r.vertexAttribPointer(n.locAPos, this.enableFrontToBack ? 3 : 2, r.FLOAT, !1, 0, 0), r.bindBuffer(r.ARRAY_BUFFER, this.texcoordBuffers[this.curBuffer]), r.bufferSubData(r.ARRAY_BUFFER, 0, this.texcoordData.subarray(0, this.texPtr)), n && n.locATex >= 0 && "<point>" !== n.name && r.vertexAttribPointer(n.locATex, 2, r.FLOAT, !1, 0, 0)
                }
                for (t = 0, e = this.batchPtr; t < e; t++) switch ((i = this.batch[t]).type) {
                    case 1:
                        i.doQuad();
                        break;
                    case 2:
                        i.doSetTexture();
                        break;
                    case 3:
                        i.doSetOpacity();
                        break;
                    case 4:
                        i.doSetBlend();
                        break;
                    case 5:
                        i.doUpdateModelView();
                        break;
                    case 6:
                        i.doRenderToTexture();
                        break;
                    case 7:
                        i.doClear();
                        break;
                    case 8:
                        i.doPoints();
                        break;
                    case 9:
                        i.doSetProgram();
                        break;
                    case 10:
                        i.doSetProgramParameters();
                        break;
                    case 11:
                        i.doSetTexture1();
                        break;
                    case 12:
                        i.doSetColor();
                        break;
                    case 13:
                        i.doSetDepthTestEnabled();
                        break;
                    case 14:
                        i.doSetEarlyZPass()
                }
                this.batchPtr = 0, this.vertexPtr = 0, this.texPtr = 0, this.pointPtr = 0, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1, this.isBatchInEarlyZPass = !1, this.curBuffer++, this.curBuffer >= 4 && (this.curBuffer = 0)
            }
        }, e.prototype.setOpacity = function(t) {
            if (t !== this.lastOpacity && !this.isEarlyZPass) {
                var e = this.pushBatch();
                e.type = 3, e.opacityParam = t, this.lastOpacity = t, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, e.prototype.setTexture = function(t) {
            if (t !== this.lastTexture0) {
                var e = this.pushBatch();
                e.type = 2, e.texParam = t, this.lastTexture0 = t, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, e.prototype.setBlend = function(t, e) {
            if ((t !== this.lastSrcBlend || e !== this.lastDestBlend) && !this.isEarlyZPass) {
                var i = this.pushBatch();
                i.type = 4, i.startIndex = t, i.indexCount = e, this.lastSrcBlend = t, this.lastDestBlend = e, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, e.prototype.isPremultipliedAlphaBlend = function() {
            return this.lastSrcBlend === this.gl.ONE && this.lastDestBlend === this.gl.ONE_MINUS_SRC_ALPHA
        }, e.prototype.setAlphaBlend = function() {
            this.setBlend(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
        }, e.prototype.setNoPremultiplyAlphaBlend = function() {
            this.setBlend(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)
        };
        e.prototype.quad = function(t, e, i, r, n, s, a, o) {
            this.vertexPtr >= 15992 && this.endBatch();
            var h = this.vertexPtr,
                c = this.texPtr,
                l = this.vertexData,
                u = this.texcoordData,
                p = this.currentZ;
            if (this.hasQuadBatchTop) this.batch[this.batchPtr - 1].indexCount += 6;
            else {
                var d = this.pushBatch();
                d.type = 1, d.startIndex = this.enableFrontToBack ? h : h / 2 * 3, d.indexCount = 6, this.hasQuadBatchTop = !0, this.hasPointBatchTop = !1
            }
            this.enableFrontToBack ? (l[h++] = t, l[h++] = e, l[h++] = p, l[h++] = i, l[h++] = r, l[h++] = p, l[h++] = n, l[h++] = s, l[h++] = p, l[h++] = a, l[h++] = o, l[h++] = p) : (l[h++] = t, l[h++] = e, l[h++] = i, l[h++] = r, l[h++] = n, l[h++] = s, l[h++] = a, l[h++] = o), u[c++] = 0, u[c++] = 0, u[c++] = 1, u[c++] = 0, u[c++] = 1, u[c++] = 1, u[c++] = 0, u[c++] = 1, this.vertexPtr = h, this.texPtr = c
        }, e.prototype.quadTex = function(t, e, i, r, n, s, a, o, h) {
            this.vertexPtr >= 15992 && this.endBatch();
            var c = this.vertexPtr,
                l = this.texPtr,
                u = this.vertexData,
                p = this.texcoordData,
                d = this.currentZ;
            if (this.hasQuadBatchTop) this.batch[this.batchPtr - 1].indexCount += 6;
            else {
                var f = this.pushBatch();
                f.type = 1, f.startIndex = this.enableFrontToBack ? c : c / 2 * 3, f.indexCount = 6, this.hasQuadBatchTop = !0, this.hasPointBatchTop = !1
            }
            var g = h.left,
                y = h.top,
                m = h.right,
                _ = h.bottom;
            this.enableFrontToBack ? (u[c++] = t, u[c++] = e, u[c++] = d, u[c++] = i, u[c++] = r, u[c++] = d, u[c++] = n, u[c++] = s, u[c++] = d, u[c++] = a, u[c++] = o, u[c++] = d) : (u[c++] = t, u[c++] = e, u[c++] = i, u[c++] = r, u[c++] = n, u[c++] = s, u[c++] = a, u[c++] = o), p[l++] = g, p[l++] = y, p[l++] = m, p[l++] = y, p[l++] = m, p[l++] = _, p[l++] = g, p[l++] = _, this.vertexPtr = c, this.texPtr = l
        }, e.prototype.quadTexUV = function(t, e, i, r, n, s, a, o, h, c, l, u, p, d, f, g) {
            this.vertexPtr >= 15992 && this.endBatch();
            var y = this.vertexPtr,
                m = this.texPtr,
                _ = this.vertexData,
                v = this.texcoordData,
                b = this.currentZ;
            if (this.hasQuadBatchTop) this.batch[this.batchPtr - 1].indexCount += 6;
            else {
                var w = this.pushBatch();
                w.type = 1, w.startIndex = this.enableFrontToBack ? y : y / 2 * 3, w.indexCount = 6, this.hasQuadBatchTop = !0, this.hasPointBatchTop = !1
            }
            this.enableFrontToBack ? (_[y++] = t, _[y++] = e, _[y++] = b, _[y++] = i, _[y++] = r, _[y++] = b, _[y++] = n, _[y++] = s, _[y++] = b, _[y++] = a, _[y++] = o, _[y++] = b) : (_[y++] = t, _[y++] = e, _[y++] = i, _[y++] = r, _[y++] = n, _[y++] = s, _[y++] = a, _[y++] = o), v[m++] = h, v[m++] = c, v[m++] = l, v[m++] = u, v[m++] = p, v[m++] = d, v[m++] = f, v[m++] = g, this.vertexPtr = y, this.texPtr = m
        }, e.prototype.convexPoly = function(t) {
            var e, i, r, n, s, a, o, h, c = t.length / 2 - 2,
                l = c - 1,
                u = t[0],
                p = t[1];
            for (e = 0; e < c; e += 2) r = t[(i = 2 * e) + 2], n = t[i + 3], s = t[i + 4], a = t[i + 5], e === l ? this.quad(u, p, r, n, s, a, s, a) : (o = t[i + 6], h = t[i + 7], this.quad(u, p, r, n, s, a, o, h))
        };
        e.prototype.point = function(t, e, i, r) {
            this.pointPtr >= 7996 && this.endBatch();
            var n = this.pointPtr,
                s = this.pointData;
            if (this.hasPointBatchTop) this.batch[this.batchPtr - 1].indexCount++;
            else {
                var a = this.pushBatch();
                a.type = 8, a.startIndex = n, a.indexCount = 1, this.hasPointBatchTop = !0, this.hasQuadBatchTop = !1
            }
            s[n++] = t, s[n++] = e, s[n++] = i, s[n++] = r, this.pointPtr = n
        }, e.prototype.switchProgram = function(t) {
            if (this.lastProgram !== t) {
                var e = this.shaderPrograms[t];
                if (!e) {
                    if (0 === this.lastProgram) return;
                    t = 0, e = this.shaderPrograms[0]
                }
                var i = this.pushBatch();
                i.type = 9, i.startIndex = t, this.lastProgram = t, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, e.prototype.programUsesDest = function(t) {
            var e = this.shaderPrograms[t];
            return !(!e.locDestStart && !e.locDestEnd)
        }, e.prototype.programUsesCrossSampling = function(t) {
            var e = this.shaderPrograms[t];
            return !!(e.locDestStart || e.locDestEnd || e.crossSampling)
        }, e.prototype.programPreservesOpaqueness = function(t) {
            return this.shaderPrograms[t].preservesOpaqueness
        }, e.prototype.programExtendsBox = function(t) {
            var e = this.shaderPrograms[t];
            return 0 !== e.extendBoxHorizontal || 0 !== e.extendBoxVertical
        }, e.prototype.getProgramBoxExtendHorizontal = function(t) {
            return this.shaderPrograms[t].extendBoxHorizontal
        }, e.prototype.getProgramBoxExtendVertical = function(t) {
            return this.shaderPrograms[t].extendBoxVertical
        }, e.prototype.getProgramParameterType = function(t, e) {
            return this.shaderPrograms[t].parameters[e][2]
        }, e.prototype.programIsAnimated = function(t) {
            return this.shaderPrograms[t].animated
        }, e.prototype.setProgramParameters = function(t, e, i, r, n, s, a, o, h, c, l, u, p, d, f) {
            var g, y, m, _, v, b = this.shaderPrograms[this.lastProgram];
            if (b.hasAnyOptionalUniforms || f.length) {
                if ((m = this.pushBatch()).type = 10, m.mat4param ? mat4.set(this.matMV, m.mat4param) : m.mat4param = mat4.create(), (_ = m.mat4param)[0] = e, _[1] = i, _[2] = r, _[3] = n, _[4] = s, _[5] = a, _[6] = o, _[7] = h, _[8] = c, _[9] = l, _[10] = u, _[11] = p, _[12] = d, b.locSamplerBack ? m.texParam = t : m.texParam = null, f.length)
                    for ((v = m.shaderParams).length = f.length, g = 0, y = f.length; g < y; g++) v[g] = f[g];
                this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, e.prototype.clear = function(t, e, i, r) {
            var n = this.pushBatch();
            n.type = 7, n.startIndex = 0, n.mat4param || (n.mat4param = mat4.create()), n.mat4param[0] = t, n.mat4param[1] = e, n.mat4param[2] = i, n.mat4param[3] = r, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
        }, e.prototype.clearRect = function(t, e, i, r) {
            if (!(i < 0 || r < 0)) {
                var n = this.pushBatch();
                n.type = 7, n.startIndex = 1, n.mat4param || (n.mat4param = mat4.create()), n.mat4param[0] = t, n.mat4param[1] = e, n.mat4param[2] = i, n.mat4param[3] = r, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, e.prototype.clearDepth = function() {
            var t = this.pushBatch();
            t.type = 7, t.startIndex = 2, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
        }, e.prototype.setEarlyZPass = function(t) {
            if (this.enableFrontToBack && (t = !!t, this.isEarlyZPass !== t)) {
                var e = this.pushBatch();
                e.type = 14, e.startIndex = t ? 1 : 0, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1, this.isEarlyZPass = t, this.renderToTex = null, this.isEarlyZPass ? this.switchProgram(2) : this.switchProgram(0)
            }
        }, e.prototype.setDepthTestEnabled = function(t) {
            if (this.enableFrontToBack) {
                var e = this.pushBatch();
                e.type = 13, e.startIndex = t ? 1 : 0, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, e.prototype.fullscreenQuad = function() {
            mat4.set(this.lastMV, t), this.resetModelView(), this.updateModelView();
            var e = this.width / 2,
                i = this.height / 2;
            this.quad(-e, i, e, i, e, -i, -e, -i), mat4.set(t, this.matMV), this.updateModelView()
        }, e.prototype.setColorFillMode = function(t, e, i, r) {
            this.switchProgram(3);
            var n = this.pushBatch();
            n.type = 12, n.mat4param || (n.mat4param = mat4.create()), n.mat4param[0] = t, n.mat4param[1] = e, n.mat4param[2] = i, n.mat4param[3] = r, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
        }, e.prototype.setTextureFillMode = function() {
            this.switchProgram(0)
        }, e.prototype.restoreEarlyZMode = function() {
            this.switchProgram(2)
        }, e.prototype.present = function() {
            this.endBatch(), this.gl.flush()
        };
        var s = [],
            a = {};
        e.prototype.contextLost = function() {
            cr.clearArray(s), a = {}
        };
        e.prototype.loadTexture = function(t, e, i, r, n, o) {
            e = !!e, i = !!i;
            var h = t.src + "," + e + "," + i + (e ? "," + n : ""),
                c = null;
            if (void 0 !== t.src && a.hasOwnProperty(h)) return (c = a[h]).c2refcount++, c;
            this.endBatch();
            var l = this.gl,
                u = cr.isPOT(t.width) && cr.isPOT(t.height);
            c = l.createTexture(), l.bindTexture(l.TEXTURE_2D, c), l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
            var p = l.RGBA,
                d = l.RGBA,
                f = l.UNSIGNED_BYTE;
            if (r && !this.isIE) switch (r) {
                case 1:
                    p = l.RGB, d = l.RGB;
                    break;
                case 2:
                    f = l.UNSIGNED_SHORT_4_4_4_4;
                    break;
                case 3:
                    f = l.UNSIGNED_SHORT_5_5_5_1;
                    break;
                case 4:
                    p = l.RGB, d = l.RGB, f = l.UNSIGNED_SHORT_5_6_5
            }
            if (1 === this.version && !u && e) {
                var g = document.createElement("canvas");
                g.width = cr.nextHighestPowerOfTwo(t.width), g.height = cr.nextHighestPowerOfTwo(t.height);
                var y = g.getContext("2d");
                void 0 !== y.imageSmoothingEnabled ? y.imageSmoothingEnabled = i : (y.webkitImageSmoothingEnabled = i, y.mozImageSmoothingEnabled = i, y.msImageSmoothingEnabled = i), y.drawImage(t, 0, 0, t.width, t.height, 0, 0, g.width, g.height), l.texImage2D(l.TEXTURE_2D, 0, p, d, f, g)
            } else l.texImage2D(l.TEXTURE_2D, 0, p, d, f, t);
            return e ? "repeat-x" === n ? (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.REPEAT), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE)) : "repeat-y" === n ? (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.REPEAT)) : (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.REPEAT), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.REPEAT)) : (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE)), i ? (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, l.LINEAR), (u || this.version >= 2) && this.enable_mipmaps && !o ? (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.LINEAR_MIPMAP_LINEAR), l.generateMipmap(l.TEXTURE_2D)) : l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.LINEAR)) : (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, l.NEAREST), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.NEAREST)), l.bindTexture(l.TEXTURE_2D, null), this.lastTexture0 = null, c.c2width = t.width, c.c2height = t.height, c.c2refcount = 1, c.c2texkey = h, s.push(c), a[h] = c, c
        }, e.prototype.createEmptyTexture = function(t, e, i, r, n) {
            this.endBatch();
            var a = this.gl;
            this.isIE && (r = !1);
            var o = a.createTexture();
            return a.bindTexture(a.TEXTURE_2D, o), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, t, e, 0, a.RGBA, r ? a.UNSIGNED_SHORT_4_4_4_4 : a.UNSIGNED_BYTE, null), n ? (a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.REPEAT), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.REPEAT)) : (a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE)), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, i ? a.LINEAR : a.NEAREST), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, i ? a.LINEAR : a.NEAREST), a.bindTexture(a.TEXTURE_2D, null), this.lastTexture0 = null, o.c2width = t, o.c2height = e, s.push(o), o
        }, e.prototype.videoToTexture = function(t, e, i) {
            this.endBatch();
            var r = this.gl;
            this.isIE && (i = !1), r.bindTexture(r.TEXTURE_2D, e), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
            try {
                r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, i ? r.UNSIGNED_SHORT_4_4_4_4 : r.UNSIGNED_BYTE, t)
            } catch (t) {
                console && console.error && console.error("Error updating WebGL texture: ", t)
            }
            r.bindTexture(r.TEXTURE_2D, null), this.lastTexture0 = null
        }, e.prototype.deleteTexture = function(t) {
            t && (void 0 !== t.c2refcount && t.c2refcount > 1 ? t.c2refcount-- : (this.endBatch(), t === this.lastTexture0 && (this.gl.bindTexture(this.gl.TEXTURE_2D, null), this.lastTexture0 = null), t === this.lastTexture1 && (this.gl.activeTexture(this.gl.TEXTURE1), this.gl.bindTexture(this.gl.TEXTURE_2D, null), this.gl.activeTexture(this.gl.TEXTURE0), this.lastTexture1 = null), cr.arrayFindRemove(s, t), void 0 !== t.c2texkey && delete a[t.c2texkey], this.gl.deleteTexture(t)))
        }, e.prototype.estimateVRAM = function() {
            var t, e, i, r = this.width * this.height * 4 * 2;
            for (t = 0, e = s.length; t < e; t++) r += (i = s[t]).c2width * i.c2height * 4;
            return r
        }, e.prototype.textureCount = function() {
            return s.length
        }, e.prototype.setRenderingToTexture = function(t) {
            if (t !== this.renderToTex) {
                var e = this.pushBatch();
                e.type = 6, e.texParam = t, this.renderToTex = t, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, cr.GLWrap = e
    }(),
    function() {
        var t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;

        function e(t) {
            if (t && (t.getContext || t.dc) && !t.c2runtime) {
                t.c2runtime = this;
                var e = this;
                this.isCrosswalk = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !(void 0 === window.c2isCrosswalk || !window.c2isCrosswalk), this.isCordova = this.isCrosswalk || void 0 !== window.device && (void 0 !== window.device.cordova || void 0 !== window.device.phonegap) || void 0 !== window.c2iscordova && window.c2iscordova, this.isPhoneGap = this.isCordova, this.isDirectCanvas = !!t.dc, this.isAppMobi = void 0 !== window.AppMobi || this.isDirectCanvas, this.isCocoonJs = !!window.c2cocoonjs, this.isEjecta = !!window.c2ejecta, this.isCocoonJs && (CocoonJS.App.onSuspended.addEventListener(function() {
                    e.setSuspended(!0)
                }), CocoonJS.App.onActivated.addEventListener(function() {
                    e.setSuspended(!1)
                })), this.isEjecta && (document.addEventListener("pagehide", function() {
                    e.setSuspended(!0)
                }), document.addEventListener("pageshow", function() {
                    e.setSuspended(!1)
                }), document.addEventListener("resize", function() {
                    e.setSize(window.innerWidth, window.innerHeight)
                })), this.isDomFree = this.isDirectCanvas || this.isCocoonJs || this.isEjecta, this.isMicrosoftEdge = /edge\//i.test(navigator.userAgent), this.isIE = (/msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent)) && !this.isMicrosoftEdge, this.isTizen = /tizen/i.test(navigator.userAgent), this.isAndroid = /android/i.test(navigator.userAgent) && !this.isTizen && !this.isIE && !this.isMicrosoftEdge, this.isiPhone = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.isIE && !this.isMicrosoftEdge, this.isiPad = /ipad/i.test(navigator.userAgent), this.isiOS = this.isiPhone || this.isiPad || this.isEjecta, this.isiPhoneiOS6 = this.isiPhone && /os\s6/i.test(navigator.userAgent), this.isChrome = (/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && !this.isIE && !this.isMicrosoftEdge, this.isAmazonWebApp = /amazonwebappplatform/i.test(navigator.userAgent), this.isFirefox = /firefox/i.test(navigator.userAgent), this.isSafari = /safari/i.test(navigator.userAgent) && !this.isChrome && !this.isIE && !this.isMicrosoftEdge, this.isWindows = /windows/i.test(navigator.userAgent), this.isNWjs = void 0 !== window.c2nodewebkit || void 0 !== window.c2nwjs || /nodewebkit/i.test(navigator.userAgent) || /nwjs/i.test(navigator.userAgent), this.isNodeWebkit = this.isNWjs, this.isArcade = void 0 !== window.is_scirra_arcade, this.isWindows8App = !(void 0 === window.c2isWindows8 || !window.c2isWindows8), this.isWindows8Capable = !(void 0 === window.c2isWindows8Capable || !window.c2isWindows8Capable), this.isWindowsPhone8 = !(void 0 === window.c2isWindowsPhone8 || !window.c2isWindowsPhone8), this.isWindowsPhone81 = !(void 0 === window.c2isWindowsPhone81 || !window.c2isWindowsPhone81), this.isWindows10 = !!window.cr_windows10, this.isWinJS = this.isWindows8App || this.isWindows8Capable || this.isWindowsPhone81 || this.isWindows10, this.isBlackberry10 = !(void 0 === window.c2isBlackberry10 || !window.c2isBlackberry10), this.isAndroidStockBrowser = this.isAndroid && !this.isChrome && !this.isCrosswalk && !this.isFirefox && !this.isAmazonWebApp && !this.isDomFree, this.devicePixelRatio = 1, this.isMobile = this.isCordova || this.isCrosswalk || this.isAppMobi || this.isCocoonJs || this.isAndroid || this.isiOS || this.isWindowsPhone8 || this.isWindowsPhone81 || this.isBlackberry10 || this.isTizen || this.isEjecta, this.isMobile || (this.isMobile = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent)), this.isWKWebView = !!(this.isiOS && this.isCordova && window.webkit), "undefined" == typeof cr_is_preview || this.isNWjs || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) && !/nwjs/i.test(navigator.userAgent) || (this.isNWjs = !0), this.isDebug = "undefined" != typeof cr_is_preview && window.location.search.indexOf("debug") > -1, this.canvas = t, this.canvasdiv = document.getElementById("c2canvasdiv"), this.gl = null, this.glwrap = null, this.glUnmaskedRenderer = "(unavailable)", this.enableFrontToBack = !1, this.earlyz_index = 0, this.ctx = null, this.firstInFullscreen = !1, this.oldWidth = 0, this.oldHeight = 0, this.canvas.oncontextmenu = function(t) {
                    return t.preventDefault && t.preventDefault(), !1
                }, this.canvas.onselectstart = function(t) {
                    return t.preventDefault && t.preventDefault(), !1
                }, this.canvas.ontouchstart = function(t) {
                    return t.preventDefault && t.preventDefault(), !1
                }, this.isDirectCanvas && (window.c2runtime = this), this.isNWjs && (window.ondragover = function(t) {
                    return t.preventDefault(), !1
                }, window.ondrop = function(t) {
                    return t.preventDefault(), !1
                }, window.nwgui && window.nwgui.App.clearCache && window.nwgui.App.clearCache()), this.isAndroidStockBrowser && "undefined" != typeof jQuery && jQuery("canvas").parents("*").css("overflow", "visible"), this.width = t.width, this.height = t.height, this.draw_width = this.width, this.draw_height = this.height, this.cssWidth = this.width, this.cssHeight = this.height, this.lastWindowWidth = window.innerWidth, this.lastWindowHeight = window.innerHeight, this.forceCanvasAlpha = !1, this.redraw = !0, this.isSuspended = !1, Date.now || (Date.now = function() {
                    return +new Date
                }), this.plugins = [], this.types = {}, this.types_by_index = [], this.behaviors = [], this.layouts = {}, this.layouts_by_index = [], this.eventsheets = {}, this.eventsheets_by_index = [], this.wait_for_textures = [], this.triggers_to_postinit = [], this.all_global_vars = [], this.all_local_vars = [], this.solidBehavior = null, this.jumpthruBehavior = null, this.shadowcasterBehavior = null, this.deathRow = {}, this.hasPendingInstances = !1, this.isInClearDeathRow = !1, this.isInOnDestroy = 0, this.isRunningEvents = !1, this.isEndingLayout = !1, this.createRow = [], this.isLoadingState = !1, this.saveToSlot = "", this.loadFromSlot = "", this.loadFromJson = null, this.lastSaveJson = "", this.signalledContinuousPreview = !1, this.suspendDrawing = !1, this.fireOnCreateAfterLoad = [], this.dt = 0, this.dt1 = 0, this.minimumFramerate = 30, this.logictime = 0, this.cpuutilisation = 0, this.timescale = 1, this.kahanTime = new cr.KahanAdder, this.wallTime = new cr.KahanAdder, this.last_tick_time = 0, this.fps = 0, this.last_fps_time = 0, this.tickcount = 0, this.tickcount_nosave = 0, this.execcount = 0, this.framecount = 0, this.objectcount = 0, this.changelayout = null, this.destroycallbacks = [], this.event_stack = [], this.event_stack_index = -1, this.localvar_stack = [
                    []
                ], this.localvar_stack_index = 0, this.trigger_depth = 0, this.pushEventStack(null), this.loop_stack = [], this.loop_stack_index = -1, this.next_uid = 0, this.next_puid = 0, this.layout_first_tick = !0, this.family_count = 0, this.suspend_events = [], this.raf_id = -1, this.timeout_id = -1, this.isloading = !0, this.loadingprogress = 0, this.isNodeFullscreen = !1, this.stackLocalCount = 0, this.audioInstance = null, this.had_a_click = !1, this.isInUserInputEvent = !1, this.objects_to_pretick = new cr.ObjectSet, this.objects_to_tick = new cr.ObjectSet, this.objects_to_tick2 = new cr.ObjectSet, this.registered_collisions = [], this.temp_poly = new cr.CollisionPoly([]), this.temp_poly2 = new cr.CollisionPoly([]), this.allGroups = [], this.groups_by_name = {}, this.cndsBySid = {}, this.actsBySid = {}, this.varsBySid = {}, this.blocksBySid = {}, this.running_layout = null, this.layer_canvas = null, this.layer_ctx = null, this.layer_tex = null, this.layout_tex = null, this.layout_canvas = null, this.layout_ctx = null, this.is_WebGL_context_lost = !1, this.uses_background_blending = !1, this.fx_tex = [null, null], this.fullscreen_scaling = 0, this.files_subfolder = "", this.objectsByUid = {}, this.loaderlogos = null, this.snapshotCanvas = null, this.snapshotData = "", this.objectRefTable = [], this.requestProjectData()
            }
        }
        e.prototype.requestProjectData = function() {
            var t = this;
            if (this.isWKWebView) this.fetchLocalFileViaCordovaAsText("data.js", function(e) {
                t.loadProject(JSON.parse(e))
            }, function(t) {
                alert("Error fetching data.js")
            });
            else {
                var e;
                e = this.isWindowsPhone8 ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest;
                var i = "data.js";
                (this.isWindows8App || this.isWindowsPhone8 || this.isWindowsPhone81 || this.isWindows10) && (i = "data.json"), e.open("GET", i, !0);
                var r = !1;
                if (!this.isDomFree && "response" in e && "responseType" in e) try {
                    e.responseType = "json", r = "json" === e.responseType
                } catch (t) {
                    r = !1
                }
                if (!r && "responseType" in e) try {
                    e.responseType = "text"
                } catch (t) {}
                if ("overrideMimeType" in e) try {
                    e.overrideMimeType("application/json; charset=utf-8")
                } catch (t) {}
                this.isWindowsPhone8 ? e.onreadystatechange = function() {
                    4 === e.readyState && t.loadProject(JSON.parse(e.responseText))
                } : (e.onload = function() {
                    if (r) t.loadProject(e.response);
                    else if (t.isEjecta) {
                        var i = e.responseText;
                        i = i.substr(i.indexOf("{")), t.loadProject(JSON.parse(i))
                    } else t.loadProject(JSON.parse(e.responseText))
                }, e.onerror = function(t) {
                    cr.logerror("Error requesting " + i + ":"), cr.logerror(t)
                }), e.send()
            }
        }, e.prototype.initRendererAndLoader = function() {
            var t, e, i, r, n, s, a, o, h, c, l, u = this;
            this.isRetina = (!this.isDomFree || this.isEjecta || this.isCordova) && this.useHighDpi && !this.isAndroidStockBrowser, 0 === this.fullscreen_mode && this.isiOS && (this.isRetina = !1), this.devicePixelRatio = this.isRetina && (window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio) || 1, this.ClearDeathRow(), this.fullscreen_mode > 0 && this.setSize(window.innerWidth, window.innerHeight, !0), this.canvas.addEventListener("webglcontextlost", function(t) {
                t.preventDefault(), u.onContextLost(), cr.logexport("[Construct 2] WebGL context lost"), window.cr_setSuspended(!0)
            }, !1), this.canvas.addEventListener("webglcontextrestored", function(t) {
                u.glwrap.initState(), u.glwrap.setSize(u.glwrap.width, u.glwrap.height, !0), u.layer_tex = null, u.layout_tex = null, u.fx_tex[0] = null, u.fx_tex[1] = null, u.onContextRestored(), u.redraw = !0, cr.logexport("[Construct 2] WebGL context restored"), window.cr_setSuspended(!1)
            }, !1);
            try {
                this.enableWebGL && (this.isCocoonJs || this.isEjecta || !this.isDomFree) && (l = {
                    alpha: !0,
                    depth: !1,
                    antialias: !1,
                    powerPreference: "high-performance",
                    failIfMajorPerformanceCaveat: !0
                }, this.gl = this.canvas.getContext("webgl2", l) || this.canvas.getContext("webgl", l) || this.canvas.getContext("experimental-webgl", l))
            } catch (t) {}
            if (this.gl) {
                this.gl.getParameter(this.gl.VERSION).indexOf("WebGL 2");
                var p = this.gl.getExtension("WEBGL_debug_renderer_info");
                if (p) {
                    var d = this.gl.getParameter(p.UNMASKED_VENDOR_WEBGL),
                        f = this.gl.getParameter(p.UNMASKED_RENDERER_WEBGL);
                    this.glUnmaskedRenderer = f + " [" + d + "]"
                }
                for (this.enableFrontToBack && (this.glUnmaskedRenderer += " [front-to-back enabled]"), this.isDomFree || (this.overlay_canvas = document.createElement("canvas"), jQuery(this.overlay_canvas).appendTo(this.canvas.parentNode), this.overlay_canvas.oncontextmenu = function(t) {
                        return !1
                    }, this.overlay_canvas.onselectstart = function(t) {
                        return !1
                    }, this.overlay_canvas.width = Math.round(this.cssWidth * this.devicePixelRatio), this.overlay_canvas.height = Math.round(this.cssHeight * this.devicePixelRatio), jQuery(this.overlay_canvas).css({
                        width: this.cssWidth + "px",
                        height: this.cssHeight + "px"
                    }), this.positionOverlayCanvas(), this.overlay_ctx = this.overlay_canvas.getContext("2d")), this.glwrap = new cr.GLWrap(this.gl, this.isMobile, this.enableFrontToBack), this.glwrap.setSize(this.canvas.width, this.canvas.height), this.glwrap.enable_mipmaps = 0 !== this.downscalingQuality, this.ctx = null, t = 0, e = this.types_by_index.length; t < e; t++)
                    for (i = 0, r = (a = this.types_by_index[t]).effect_types.length; i < r; i++)(o = a.effect_types[i]).shaderindex = this.glwrap.getShaderIndex(o.id), o.preservesOpaqueness = this.glwrap.programPreservesOpaqueness(o.shaderindex), this.uses_background_blending = this.uses_background_blending || this.glwrap.programUsesDest(o.shaderindex);
                for (t = 0, e = this.layouts_by_index.length; t < e; t++) {
                    for (i = 0, r = (h = this.layouts_by_index[t]).effect_types.length; i < r; i++)(o = h.effect_types[i]).shaderindex = this.glwrap.getShaderIndex(o.id), o.preservesOpaqueness = this.glwrap.programPreservesOpaqueness(o.shaderindex);
                    for (h.updateActiveEffects(), i = 0, r = h.layers.length; i < r; i++) {
                        for (n = 0, s = (c = h.layers[i]).effect_types.length; n < s; n++)(o = c.effect_types[n]).shaderindex = this.glwrap.getShaderIndex(o.id), o.preservesOpaqueness = this.glwrap.programPreservesOpaqueness(o.shaderindex), this.uses_background_blending = this.uses_background_blending || this.glwrap.programUsesDest(o.shaderindex);
                        c.updateActiveEffects()
                    }
                }
            } else {
                if (this.fullscreen_mode > 0 && this.isDirectCanvas) {
                    this.canvas = null, document.oncontextmenu = function(t) {
                        return !1
                    }, document.onselectstart = function(t) {
                        return !1
                    }, this.ctx = AppMobi.canvas.getContext("2d");
                    try {
                        this.ctx.samplingMode = this.linearSampling ? "smooth" : "sharp", this.ctx.globalScale = 1, this.ctx.HTML5CompatibilityMode = !0, this.ctx.imageSmoothingEnabled = this.linearSampling
                    } catch (t) {}
                    0 !== this.width && 0 !== this.height && (this.ctx.width = this.width, this.ctx.height = this.height)
                }
                this.ctx || (this.isCocoonJs ? (l = {
                    antialias: !!this.linearSampling,
                    alpha: !0
                }, this.ctx = this.canvas.getContext("2d", l)) : (l = {
                    alpha: !0
                }, this.ctx = this.canvas.getContext("2d", l)), this.setCtxImageSmoothingEnabled(this.ctx, this.linearSampling)), this.overlay_canvas = null, this.overlay_ctx = null
            }
            if (this.tickFunc = function(t) {
                    u.tick(!1, t)
                }, window == window.top || this.isDomFree || this.isWinJS || this.isWindowsPhone8 || (document.addEventListener("mousedown", function() {
                    window.focus()
                }, !0), document.addEventListener("touchstart", function() {
                    window.focus()
                }, !0)), "undefined" != typeof cr_is_preview && (this.isCocoonJs && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), window.location.search.indexOf("continuous") > -1 && (cr.logexport("Reloading for continuous preview"), this.loadFromSlot = "__c2_continuouspreview", this.suspendDrawing = !0), this.pauseOnBlur && !this.isMobile && (jQuery(window).focus(function() {
                    u.setSuspended(!1)
                }), jQuery(window).blur(function() {
                    var t = window.parent;
                    t && t.document.hasFocus() || u.setSuspended(!0)
                }))), window.addEventListener("blur", function() {
                    u.onWindowBlur()
                }), !this.isDomFree) {
                var g = function(t) {
                    if (cr.isCanvasInputEvent(t) && document.activeElement && document.activeElement !== document.getElementsByTagName("body")[0] && document.activeElement.blur) try {
                        document.activeElement.blur()
                    } catch (t) {}
                };
                "undefined" != typeof PointerEvent ? document.addEventListener("pointerdown", g) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", g) : document.addEventListener("touchstart", g), document.addEventListener("mousedown", g)
            }
            0 === this.fullscreen_mode && this.isRetina && this.devicePixelRatio > 1 && this.setSize(this.original_width, this.original_height, !0), this.tryLockOrientation(), this.getready(), this.go(), this.extra = {}, cr.seal(this)
        };
        e.prototype.setSize = function(t, e, i) {
            var r = 0,
                n = 0,
                s = 0,
                a = 0,
                o = 0;
            if (this.lastWindowWidth !== t || this.lastWindowHeight !== e || i) {
                this.lastWindowWidth = t, this.lastWindowHeight = e;
                var h, c, l = this.fullscreen_mode,
                    u = (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.isNodeFullscreen) && !this.isCordova;
                if (u || 0 !== this.fullscreen_mode || i) {
                    u && this.fullscreen_scaling > 0 && (l = this.fullscreen_scaling);
                    var p = this.devicePixelRatio;
                    l >= 4 ? (c = t / e) > (h = this.original_width / this.original_height) ? (s = e * h, 5 === l ? ((o = s * p / this.original_width) > 1 ? o = Math.floor(o) : o < 1 && (o = 1 / Math.ceil(1 / o)), r = (t - (s = this.original_width * o / p)) / 2, n = (e - (a = this.original_height * o / p)) / 2, t = s, e = a) : (r = (t - s) / 2, t = s)) : (a = t / h, 5 === l ? ((o = a * p / this.original_height) > 1 ? o = Math.floor(o) : o < 1 && (o = 1 / Math.ceil(1 / o)), r = (t - (s = this.original_width * o / p)) / 2, n = (e - (a = this.original_height * o / p)) / 2, t = s, e = a) : (n = (e - a) / 2, e = a)) : this.isNWjs && this.isNodeFullscreen && 0 === this.fullscreen_mode_set && (r = Math.floor((t - this.original_width) / 2), n = Math.floor((e - this.original_height) / 2), t = this.original_width, e = this.original_height), l < 2 && (this.aspect_scale = p), this.cssWidth = Math.round(t), this.cssHeight = Math.round(e), this.width = Math.round(t * p), this.height = Math.round(e * p), this.redraw = !0, this.wantFullscreenScalingQuality ? (this.draw_width = this.width, this.draw_height = this.height, this.fullscreenScalingQuality = !0) : this.width < this.original_width && this.height < this.original_height || 1 === l ? (this.draw_width = this.width, this.draw_height = this.height, this.fullscreenScalingQuality = !0) : (this.draw_width = this.original_width, this.draw_height = this.original_height, this.fullscreenScalingQuality = !1, 2 === l ? (h = this.original_width / this.original_height, (c = this.lastWindowWidth / this.lastWindowHeight) < h ? this.draw_width = this.draw_height * c : c > h && (this.draw_height = this.draw_width / c)) : 3 === l && (h = this.original_width / this.original_height, (c = this.lastWindowWidth / this.lastWindowHeight) > h ? this.draw_width = this.draw_height * c : c < h && (this.draw_height = this.draw_width / c))), this.canvasdiv && !this.isDomFree && (jQuery(this.canvasdiv).css({
                        width: Math.round(t) + "px",
                        height: Math.round(e) + "px",
                        "margin-left": Math.floor(r) + "px",
                        "margin-top": Math.floor(n) + "px"
                    }), "undefined" != typeof cr_is_preview && jQuery("#borderwrap").css({
                        width: Math.round(t) + "px",
                        height: Math.round(e) + "px"
                    })), this.canvas && (this.canvas.width = Math.round(t * p), this.canvas.height = Math.round(e * p), this.isEjecta ? (this.canvas.style.left = Math.floor(r) + "px", this.canvas.style.top = Math.floor(n) + "px", this.canvas.style.width = Math.round(t) + "px", this.canvas.style.height = Math.round(e) + "px") : this.isRetina && !this.isDomFree && (this.canvas.style.width = Math.round(t) + "px", this.canvas.style.height = Math.round(e) + "px")), this.overlay_canvas && (this.overlay_canvas.width = Math.round(t * p), this.overlay_canvas.height = Math.round(e * p), this.overlay_canvas.style.width = this.cssWidth + "px", this.overlay_canvas.style.height = this.cssHeight + "px"), this.glwrap && this.glwrap.setSize(Math.round(t * p), Math.round(e * p)), this.isDirectCanvas && this.ctx && (this.ctx.width = Math.round(t), this.ctx.height = Math.round(e)), this.ctx && this.setCtxImageSmoothingEnabled(this.ctx, this.linearSampling), this.tryLockOrientation(), this.isiPhone && !this.isCordova && window.scrollTo(0, 0)
                }
            }
        }, e.prototype.tryLockOrientation = function() {
            if (this.autoLockOrientation && 0 !== this.orientations) {
                var t = "portrait";
                2 === this.orientations && (t = "landscape");
                try {
                    screen.orientation && screen.orientation.lock ? screen.orientation.lock(t).catch(function() {}) : screen.lockOrientation ? screen.lockOrientation(t) : screen.webkitLockOrientation ? screen.webkitLockOrientation(t) : screen.mozLockOrientation ? screen.mozLockOrientation(t) : screen.msLockOrientation && screen.msLockOrientation(t)
                } catch (t) {
                    console && console.warn && console.warn("Failed to lock orientation: ", t)
                }
            }
        }, e.prototype.onContextLost = function() {
            var t, e, i;
            for (this.glwrap.contextLost(), this.is_WebGL_context_lost = !0, t = 0, e = this.types_by_index.length; t < e; t++)(i = this.types_by_index[t]).onLostWebGLContext && i.onLostWebGLContext()
        }, e.prototype.onContextRestored = function() {
            var t, e, i;
            for (this.is_WebGL_context_lost = !1, t = 0, e = this.types_by_index.length; t < e; t++)(i = this.types_by_index[t]).onRestoreWebGLContext && i.onRestoreWebGLContext()
        }, e.prototype.positionOverlayCanvas = function() {
            if (!this.isDomFree) {
                var t = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.isNodeFullscreen) && !this.isCordova ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
                t.position = "absolute", jQuery(this.overlay_canvas).css(t)
            }
        };
        var i = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
        e.prototype.setSuspended = function(t) {
            var e, r;
            if (t && !this.isSuspended)
                for (cr.logexport("[Construct 2] Suspending"), this.isSuspended = !0, -1 !== this.raf_id && i && i(this.raf_id), -1 !== this.timeout_id && clearTimeout(this.timeout_id), e = 0, r = this.suspend_events.length; e < r; e++) this.suspend_events[e](!0);
            else if (!t && this.isSuspended) {
                for (cr.logexport("[Construct 2] Resuming"), this.isSuspended = !1, this.last_tick_time = cr.performance_now(), this.last_fps_time = cr.performance_now(), this.framecount = 0, this.logictime = 0, e = 0, r = this.suspend_events.length; e < r; e++) this.suspend_events[e](!1);
                this.tick(!1)
            }
        }, e.prototype.addSuspendCallback = function(t) {
            this.suspend_events.push(t)
        }, e.prototype.GetObjectReference = function(t) {
            return this.objectRefTable[t]
        }, e.prototype.loadProject = function(t) {
            t && t.project || cr.logerror("Project model unavailable");
            var e, i, r, n, s, a, o, h, c, l, u, p, d, f = t.project;
            if (this.name = f[0], this.first_layout = f[1], this.fullscreen_mode = f[12], this.fullscreen_mode_set = f[12], this.original_width = f[10], this.original_height = f[11], this.parallax_x_origin = this.original_width / 2, this.parallax_y_origin = this.original_height / 2, this.isDomFree && !this.isEjecta && (f[12] >= 4 || 0 === f[12]) && (cr.logexport("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.fullscreen_mode = 3, this.fullscreen_mode_set = 3), this.uses_loader_layout = f[18], this.loaderstyle = f[19], 0 === this.loaderstyle) {
                var g = new Image;
                g.crossOrigin = "anonymous", this.setImageSrc(g, "loading-logo.png"), this.loaderlogos = {
                    logo: g
                }
            } else if (4 === this.loaderstyle) {
                var y = new Image;
                y.src = "";
                var m = new Image;
                m.src = "";
                var _ = new Image;
                _.src = "";
                var v = new Image;
                v.src = "";
                var b = new Image;
                b.src = "";
                var w = new Image;
                w.src = "";
                var x = new Image;
                x.src = "";
                var S = new Image;
                S.src = "";
                var T = new Image;
                T.src = "";
                var O = new Image;
                O.src = "";
                var C = new Image;
                C.src = "";
                var A = new Image;
                A.src = "", this.loaderlogos = {
                    logo: [y, m, _, v],
                    powered: [b, w, x, S],
                    website: [T, O, C, A]
                }
            }
            for (this.next_uid = f[21], this.objectRefTable = cr.getObjectRefTable(), this.system = new cr.system_object(this), e = 0, i = f[2].length; e < i; e++) o = f[2][e], u = this.GetObjectReference(o[0]), cr.add_common_aces(o, u.prototype), (p = new u(this)).singleglobal = o[1], p.is_world = o[2], p.is_rotatable = o[5], p.must_predraw = o[9], p.onCreate && p.onCreate(), cr.seal(p), this.plugins.push(p);
            for (this.objectRefTable = cr.getObjectRefTable(), e = 0, i = f[3].length; e < i; e++) {
                for (o = f[3][e], d = this.GetObjectReference(o[1]), p = null, r = 0, n = this.plugins.length; r < n; r++)
                    if (this.plugins[r] instanceof d) {
                        p = this.plugins[r];
                        break
                    }
                var k = new p.Type(p);
                for (k.name = o[0], k.is_family = o[2], k.instvar_sids = o[3].slice(0), k.vars_count = o[3].length, k.behs_count = o[4], k.fx_count = o[5], k.sid = o[11], k.is_family ? (k.members = [], k.family_index = this.family_count++, k.families = null) : (k.members = null, k.family_index = -1, k.families = []), k.family_var_map = null, k.family_beh_map = null, k.family_fx_map = null, k.is_contained = !1, k.container = null, o[6] ? (k.texture_file = o[6][0], k.texture_filesize = o[6][1], k.texture_pixelformat = o[6][2]) : (k.texture_file = null, k.texture_filesize = 0, k.texture_pixelformat = 0), o[7] ? k.animations = o[7] : k.animations = null, k.index = e, k.instances = [], k.deadCache = [], k.solstack = [new cr.selection(k)], k.cur_sol = 0, k.default_instance = null, k.default_layerindex = 0, k.stale_iids = !0, k.updateIIDs = cr.type_updateIIDs, k.getFirstPicked = cr.type_getFirstPicked, k.getPairedInstance = cr.type_getPairedInstance, k.getCurrentSol = cr.type_getCurrentSol, k.pushCleanSol = cr.type_pushCleanSol, k.pushCopySol = cr.type_pushCopySol, k.popSol = cr.type_popSol, k.getBehaviorByName = cr.type_getBehaviorByName, k.getBehaviorIndexByName = cr.type_getBehaviorIndexByName, k.getEffectIndexByName = cr.type_getEffectIndexByName, k.applySolToContainer = cr.type_applySolToContainer, k.getInstanceByIID = cr.type_getInstanceByIID, k.collision_grid = new cr.SparseGrid(this.original_width, this.original_height), k.any_cell_changed = !0, k.any_instance_parallaxed = !1, k.extra = {}, k.toString = cr.type_toString, k.behaviors = [], r = 0, n = o[8].length; r < n; r++) {
                    h = o[8][r];
                    var E = this.GetObjectReference(h[1]),
                        P = null;
                    for (s = 0, a = this.behaviors.length; s < a; s++)
                        if (this.behaviors[s] instanceof E) {
                            P = this.behaviors[s];
                            break
                        }
                    P || ((P = new E(this)).my_types = [], P.my_instances = new cr.ObjectSet, P.onCreate && P.onCreate(), cr.seal(P), this.behaviors.push(P), cr.behaviors.solid && P instanceof cr.behaviors.solid && (this.solidBehavior = P), cr.behaviors.jumpthru && P instanceof cr.behaviors.jumpthru && (this.jumpthruBehavior = P), cr.behaviors.shadowcaster && P instanceof cr.behaviors.shadowcaster && (this.shadowcasterBehavior = P)), -1 === P.my_types.indexOf(k) && P.my_types.push(k);
                    var L = new P.Type(P, k);
                    L.name = h[0], L.sid = h[2], L.onCreate(), cr.seal(L), k.behaviors.push(L)
                }
                for (k.global = o[9], k.isOnLoaderLayout = o[10], k.effect_types = [], r = 0, n = o[12].length; r < n; r++) k.effect_types.push({
                    id: o[12][r][0],
                    name: o[12][r][1],
                    shaderindex: -1,
                    preservesOpaqueness: !1,
                    active: !0,
                    index: r
                });
                if (k.tile_poly_data = o[13], this.uses_loader_layout && !k.is_family && !k.isOnLoaderLayout && p.is_world || (k.onCreate(), cr.seal(k)), k.name && (this.types[k.name] = k), this.types_by_index.push(k), p.singleglobal) {
                    var I = new p.Instance(k);
                    I.uid = this.next_uid++, I.puid = this.next_puid++, I.iid = 0, I.get_iid = cr.inst_get_iid, I.toString = cr.inst_toString, I.properties = o[14], I.onCreate(), cr.seal(I), k.instances.push(I), this.objectsByUid[I.uid.toString()] = I
                }
            }
            for (e = 0, i = f[4].length; e < i; e++) {
                var R, N = f[4][e],
                    B = this.types_by_index[N[0]];
                for (r = 1, n = N.length; r < n; r++)(R = this.types_by_index[N[r]]).families.push(B), B.members.push(R)
            }
            for (e = 0, i = f[28].length; e < i; e++) {
                var M = f[28][e],
                    F = [];
                for (r = 0, n = M.length; r < n; r++) F.push(this.types_by_index[M[r]]);
                for (r = 0, n = F.length; r < n; r++) F[r].is_contained = !0, F[r].container = F
            }
            if (this.family_count > 0)
                for (e = 0, i = this.types_by_index.length; e < i; e++)
                    if (!(c = this.types_by_index[e]).is_family && c.families.length) {
                        c.family_var_map = new Array(this.family_count), c.family_beh_map = new Array(this.family_count), c.family_fx_map = new Array(this.family_count);
                        var j = [],
                            D = 0,
                            W = 0,
                            G = 0;
                        for (r = 0, n = c.families.length; r < n; r++)
                            for (l = c.families[r], c.family_var_map[l.family_index] = D, D += l.vars_count, c.family_beh_map[l.family_index] = W, W += l.behs_count, c.family_fx_map[l.family_index] = G, G += l.fx_count, s = 0, a = l.effect_types.length; s < a; s++) j.push(cr.shallowCopy({}, l.effect_types[s]));
                        for (c.effect_types = j.concat(c.effect_types), r = 0, n = c.effect_types.length; r < n; r++) c.effect_types[r].index = r
                    }
            for (e = 0, i = f[5].length; e < i; e++) {
                o = f[5][e];
                var V = new cr.layout(this, o);
                cr.seal(V), this.layouts[V.name] = V, this.layouts_by_index.push(V)
            }
            for (e = 0, i = f[6].length; e < i; e++) {
                o = f[6][e];
                var z = new cr.eventsheet(this, o);
                cr.seal(z), this.eventsheets[z.name] = z, this.eventsheets_by_index.push(z)
            }
            for (e = 0, i = this.eventsheets_by_index.length; e < i; e++) this.eventsheets_by_index[e].postInit();
            for (e = 0, i = this.eventsheets_by_index.length; e < i; e++) this.eventsheets_by_index[e].updateDeepIncludes();
            for (e = 0, i = this.triggers_to_postinit.length; e < i; e++) this.triggers_to_postinit[e].postInit();
            cr.clearArray(this.triggers_to_postinit), this.audio_to_preload = f[7], this.files_subfolder = f[8], this.pixel_rounding = f[9], this.aspect_scale = 1, this.enableWebGL = f[13], this.linearSampling = f[14], this.clearBackground = f[15], this.versionstr = f[16], this.useHighDpi = f[17], this.orientations = f[20], this.autoLockOrientation = this.orientations > 0, this.pauseOnBlur = f[22], this.wantFullscreenScalingQuality = f[23], this.fullscreenScalingQuality = this.wantFullscreenScalingQuality, this.downscalingQuality = f[24], this.preloadSounds = f[25], this.projectName = f[26], this.enableFrontToBack = f[27] && !this.isIE, this.start_time = Date.now(), cr.clearArray(this.objectRefTable), this.initRendererAndLoader()
        };
        var r = !1,
            n = 0,
            s = [];
        e.prototype.queueImageLoad = function(t, e) {
            var i = this,
                r = function() {
                    n--, i.maybeLoadNextImages()
                };
            t.addEventListener("load", r), t.addEventListener("error", r), s.push([t, e]), this.maybeLoadNextImages()
        }, e.prototype.maybeLoadNextImages = function() {
            for (var t; s.length && n < 100;) n++, t = s.shift(), this.setImageSrc(t[0], t[1])
        }, e.prototype.waitForImageLoad = function(t, e) {
            t.cocoonLazyLoad = !0, t.onerror = function(e) {
                t.c2error = !0, r = !0, console && console.error && console.error("Error loading image '" + t.src + "': ", e)
            }, this.isEjecta ? t.src = e : t.src || ("undefined" != typeof XAPKReader ? XAPKReader.get(e, function(e) {
                t.src = e
            }, function(i) {
                t.c2error = !0, r = !0, console && console.error && console.error("Error extracting image '" + e + "' from expansion file: ", i)
            }) : (t.crossOrigin = "anonymous", this.queueImageLoad(t, e))), this.wait_for_textures.push(t)
        }, e.prototype.findWaitingTexture = function(t) {
            var e, i;
            for (e = 0, i = this.wait_for_textures.length; e < i; e++)
                if (this.wait_for_textures[e].cr_src === t) return this.wait_for_textures[e];
            return null
        };
        var a = 0,
            o = !1;
        e.prototype.getready = function() {
            this.audioInstance && (a = this.audioInstance.setPreloadList(this.audio_to_preload))
        }, e.prototype.areAllTexturesAndSoundsLoaded = function() {
            var t, e, i, r = a,
                n = 0,
                s = 0,
                h = !0;
            for (t = 0, e = this.wait_for_textures.length; t < e; t++) {
                var c = (i = this.wait_for_textures[t]).cr_filesize;
                (!c || c <= 0) && (c = 5e4), r += c, i.src && (i.complete || i.loaded) && !i.c2error ? n += c : h = !1
            }
            return h && this.preloadSounds && this.audioInstance && (o || (this.audioInstance.startPreloads(), o = !0), n += s = this.audioInstance.getPreloadedSize(), s < a && (h = !1)), this.progress = 0 == r ? 1 : n / r, h
        };
        var h = !1;
        e.prototype.go = function() {
            if (this.ctx || this.glwrap) {
                var e = this.ctx || this.overlay_ctx;
                this.overlay_canvas && this.positionOverlayCanvas();
                var i = window.innerWidth,
                    n = window.innerHeight;
                this.lastWindowWidth === i && this.lastWindowHeight === n || this.setSize(i, n), this.progress = 0, this.last_progress = -1;
                var s = this;
                if (this.areAllTexturesAndSoundsLoaded() && (4 !== this.loaderstyle || h)) this.go_loading_finished();
                else {
                    var a = Date.now() - this.start_time;
                    if (e) {
                        var o = this.width,
                            c = this.height,
                            l = this.devicePixelRatio;
                        if (this.loaderstyle < 3 && (this.isCocoonJs || a >= 500 && this.last_progress != this.progress)) {
                            e.clearRect(0, 0, o, c);
                            var u, p = o / 2,
                                d = c / 2,
                                f = 0 === this.loaderstyle && this.loaderlogos.logo.complete,
                                g = 40 * l,
                                y = 0,
                                m = 80 * l;
                            if (f) {
                                var _ = this.loaderlogos.logo;
                                g = (m = _.width * l) / 2, y = (u = _.height * l) / 2, e.drawImage(_, cr.floor(p - g), cr.floor(d - y), m, u)
                            }
                            if (this.loaderstyle <= 1) d += y + (f ? 12 * l : 0), p -= g, p = cr.floor(p) + .5, d = cr.floor(d) + .5, e.fillStyle = r ? "red" : "DodgerBlue", e.fillRect(p, d, Math.floor(m * this.progress), 6 * l), e.strokeStyle = "black", e.strokeRect(p, d, m, 6 * l), e.strokeStyle = "white", e.strokeRect(p - 1 * l, d - 1 * l, m + 2 * l, 8 * l);
                            else if (2 === this.loaderstyle) {
                                e.font = this.isEjecta ? "12pt ArialMT" : "12pt Arial", e.fillStyle = r ? "#f00" : "#999", e.textBaseLine = "middle";
                                var v = Math.round(100 * this.progress) + "%",
                                    b = e.measureText ? e.measureText(v) : null,
                                    w = b ? b.width : 0;
                                e.fillText(v, p - w / 2, d)
                            }
                            this.last_progress = this.progress
                        } else if (4 === this.loaderstyle) return this.draw_c2_splash_loader(e), void(t ? t(function() {
                            s.go()
                        }) : setTimeout(function() {
                            s.go()
                        }, 16))
                    }
                    setTimeout(function() {
                        s.go()
                    }, this.isCocoonJs ? 10 : 100)
                }
            }
        };
        var c = -1,
            l = "undefined" == typeof cr_is_preview ? 200 : 0,
            u = !0,
            p = !1,
            d = 0,
            f = 0,
            g = "undefined" == typeof cr_is_preview ? 3e3 : 0,
            y = null,
            m = null,
            _ = 0;

        function v(t, e) {
            return e <= 128 ? t[3] : e <= 256 ? t[2] : e <= 512 ? t[1] : t[0]
        }
        e.prototype.draw_c2_splash_loader = function(t) {
            if (!h) {
                for (var e = Math.ceil(this.width), i = Math.ceil(this.height), n = (this.devicePixelRatio, this.loaderlogos.logo), s = this.loaderlogos.powered, a = this.loaderlogos.website, o = 0; o < 4; ++o)
                    if (!n[o].complete || !s[o].complete || !a[o].complete) return;
                0 === _ && (c = Date.now());
                var b, w, x = Date.now(),
                    S = !1,
                    T = t;
                u || p ? (t.clearRect(0, 0, e, i), function(t, e) {
                    y && y.width === t && y.height === e || ((y = document.createElement("canvas")).width = t, y.height = e, m = y.getContext("2d"))
                }(e, i), T = m, S = !0, u && 1 === _ && (c = Date.now())) : t.globalAlpha = 1, T.fillStyle = "#333333", T.fillRect(0, 0, e, i), this.cssHeight > 256 ? (w = .25 * (b = cr.clamp(.22 * i, 105, .6 * e)), T.drawImage(v(s, b), .5 * e - b / 2, .2 * i - w / 2, b, w), w = b = Math.min(.395 * i, .95 * e), T.drawImage(v(n, b), .5 * e - b / 2, .485 * i - w / 2, b, w), w = .25 * (b = cr.clamp(.22 * i, 105, .6 * e)), T.drawImage(v(a, b), .5 * e - b / 2, .868 * i - w / 2, b, w), T.fillStyle = "#3C3C3C", b = e, w = Math.max(.005 * i, 2), T.fillRect(0, .8 * i - w / 2, b, w), T.fillStyle = r ? "red" : "#E0FF65", b = e * this.progress, T.fillRect(.5 * e - b / 2, .8 * i - w / 2, b, w)) : (w = b = .55 * i, T.drawImage(v(n, b), .5 * e - b / 2, .45 * i - w / 2, b, w), T.fillStyle = "#3C3C3C", b = e, w = Math.max(.005 * i, 2), T.fillRect(0, .85 * i - w / 2, b, w), T.fillStyle = r ? "red" : "#E0FF65", b = e * this.progress, T.fillRect(.5 * e - b / 2, .85 * i - w / 2, b, w)), S && (u ? t.globalAlpha = 0 === _ ? 0 : Math.min((x - c) / 300, 1) : p && (t.globalAlpha = Math.max(1 - (x - f) / 300, 0)), t.drawImage(y, 0, 0, e, i)), u && x - c >= 300 && _ >= 2 && (u = !1, d = x), !u && x - d >= g && !p && this.progress >= 1 && (p = !0, f = x), (p && x - f >= 300 + l || "undefined" != typeof cr_is_preview && this.progress >= 1 && Date.now() - c < 500) && (h = !0, u = !1, p = !1, y = null, m = null, this.loaderlogos = null), ++_
            }
        }, e.prototype.go_loading_finished = function() {
            var t, e, i;
            if (this.overlay_canvas && (this.canvas.parentNode.removeChild(this.overlay_canvas), this.overlay_ctx = null, this.overlay_canvas = null), this.start_time = Date.now(), this.last_fps_time = cr.performance_now(), this.uses_loader_layout)
                for (t = 0, e = this.types_by_index.length; t < e; t++)(i = this.types_by_index[t]).is_family || i.isOnLoaderLayout || !i.plugin.is_world || (i.onCreate(), cr.seal(i));
            else this.isloading = !1;
            for (t = 0, e = this.layouts_by_index.length; t < e; t++) this.layouts_by_index[t].createGlobalNonWorlds();
            if (this.fullscreen_mode >= 2) {
                var r = this.original_width / this.original_height,
                    n = this.width / this.height;
                2 !== this.fullscreen_mode && n > r || 2 === this.fullscreen_mode && n < r ? this.aspect_scale = this.height / this.original_height : this.aspect_scale = this.width / this.original_width
            }
            for (this.first_layout ? this.layouts[this.first_layout].startRunning() : this.layouts_by_index[0].startRunning(), this.uses_loader_layout || (this.loadingprogress = 1, this.trigger(cr.system_object.prototype.cnds.OnLoadFinished, null), window.C2_RegisterSW && window.C2_RegisterSW()), navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide(), t = 0, e = this.types_by_index.length; t < e; t++)(i = this.types_by_index[t]).onAppBegin && i.onAppBegin();
            document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? window.cr_setSuspended(!0) : this.tick(!1), this.isDirectCanvas && AppMobi.webview.execute("onGameReady();")
        }, e.prototype.tick = function(e, i, r) {
            if (this.running_layout) {
                var n = cr.performance_now(),
                    s = n;
                if (r || !this.isSuspended || e) {
                    e || (t ? this.raf_id = t(this.tickFunc) : this.timeout_id = setTimeout(this.tickFunc, this.isMobile ? 1 : 16));
                    var a = i || n,
                        o = this.fullscreen_mode,
                        h = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) && !this.isCordova;
                    if ((h || this.isNodeFullscreen) && this.fullscreen_scaling > 0 && (o = this.fullscreen_scaling), o > 0) {
                        var c = window.innerWidth,
                            l = window.innerHeight;
                        this.lastWindowWidth === c && this.lastWindowHeight === l || this.setSize(c, l)
                    }
                    if (this.isDomFree || (h ? this.firstInFullscreen || (this.firstInFullscreen = !0) : this.firstInFullscreen ? (this.firstInFullscreen = !1, 0 === this.fullscreen_mode && this.setSize(Math.round(this.oldWidth / this.devicePixelRatio), Math.round(this.oldHeight / this.devicePixelRatio), !0)) : (this.oldWidth = this.width, this.oldHeight = this.height)), this.isloading) {
                        var u = this.areAllTexturesAndSoundsLoaded();
                        this.loadingprogress = this.progress, u && (this.isloading = !1, this.progress = 1, this.trigger(cr.system_object.prototype.cnds.OnLoadFinished, null), window.C2_RegisterSW && window.C2_RegisterSW())
                    }
                    this.logic(a), !this.redraw && !this.isCocoonJs || this.is_WebGL_context_lost || this.suspendDrawing || e || (this.redraw = !1, this.glwrap ? this.drawGL() : this.draw(), this.snapshotCanvas && (this.canvas && this.canvas.toDataURL && (this.snapshotData = this.canvas.toDataURL(this.snapshotCanvas[0], this.snapshotCanvas[1]), window.cr_onSnapshot && window.cr_onSnapshot(this.snapshotData), this.trigger(cr.system_object.prototype.cnds.OnCanvasSnapshot, null)), this.snapshotCanvas = null)), this.hit_breakpoint || (this.tickcount++, this.tickcount_nosave++, this.execcount++, this.framecount++), this.logictime += cr.performance_now() - s
                }
            }
        }, e.prototype.logic = function(t) {
            var e, i, r, n, s, a, o, h;
            t - this.last_fps_time >= 1e3 && (this.last_fps_time += 1e3, t - this.last_fps_time >= 1e3 && (this.last_fps_time = t), this.fps = this.framecount, this.framecount = 0, this.cpuutilisation = this.logictime, this.logictime = 0);
            var c = 0;
            if (0 !== this.last_tick_time) {
                var l = t - this.last_tick_time;
                l < 0 && (l = 0), c = l / 1e3, this.dt1 = c, this.dt1 > .5 ? this.dt1 = 0 : this.dt1 > 1 / this.minimumFramerate && (this.dt1 = 1 / this.minimumFramerate)
            }
            this.last_tick_time = t, this.dt = this.dt1 * this.timescale, this.kahanTime.add(this.dt), this.wallTime.add(c);
            var u = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.isNodeFullscreen) && !this.isCordova;
            if (this.fullscreen_mode >= 2 || u && this.fullscreen_scaling > 0) {
                var p = this.original_width / this.original_height,
                    d = this.width / this.height,
                    f = this.fullscreen_mode;
                u && this.fullscreen_scaling > 0 && (f = this.fullscreen_scaling), this.aspect_scale = 2 !== f && d > p || 2 === f && d < p ? this.height / this.original_height : this.width / this.original_width, this.running_layout && (this.running_layout.scrollToX(this.running_layout.scrollX), this.running_layout.scrollToY(this.running_layout.scrollY))
            } else this.aspect_scale = this.isRetina ? this.devicePixelRatio : 1;
            this.ClearDeathRow(), this.isInOnDestroy++, this.system.runWaits(), this.isInOnDestroy--, this.ClearDeathRow(), this.isInOnDestroy++;
            var g = this.objects_to_pretick.valuesRef();
            for (e = 0, i = g.length; e < i; e++) g[e].pretick();
            for (e = 0, i = this.types_by_index.length; e < i; e++)
                if (!(o = this.types_by_index[e]).is_family && (o.behaviors.length || o.families.length))
                    for (r = 0, n = o.instances.length; r < n; r++)
                        for (s = 0, a = (y = o.instances[r]).behavior_insts.length; s < a; s++) y.behavior_insts[s].tick();
            for (e = 0, i = this.types_by_index.length; e < i; e++)
                if (!(o = this.types_by_index[e]).is_family && (o.behaviors.length || o.families.length))
                    for (r = 0, n = o.instances.length; r < n; r++)
                        for (s = 0, a = (y = o.instances[r]).behavior_insts.length; s < a; s++)(h = y.behavior_insts[s]).posttick && h.posttick();
            for (e = 0, i = (g = this.objects_to_tick.valuesRef()).length; e < i; e++) g[e].tick();
            for (this.isInOnDestroy--, this.handleSaveLoad(), e = 0; this.changelayout && e++ < 10;) this.doChangeLayout(this.changelayout);
            for (e = 0, i = this.eventsheets_by_index.length; e < i; e++) this.eventsheets_by_index[e].hasRun = !1;
            for (this.running_layout.event_sheet && this.running_layout.event_sheet.run(), cr.clearArray(this.registered_collisions), this.layout_first_tick = !1, this.isInOnDestroy++, e = 0, i = this.types_by_index.length; e < i; e++)
                if (!(o = this.types_by_index[e]).is_family && (o.behaviors.length || o.families.length))
                    for (r = 0, n = o.instances.length; r < n; r++) {
                        var y;
                        for (s = 0, a = (y = o.instances[r]).behavior_insts.length; s < a; s++)(h = y.behavior_insts[s]).tick2 && h.tick2()
                    }
            for (e = 0, i = (g = this.objects_to_tick2.valuesRef()).length; e < i; e++) g[e].tick2();
            this.isInOnDestroy--
        }, e.prototype.onWindowBlur = function() {
            var t, e, i, r, n, s, a, o, h;
            for (t = 0, e = this.types_by_index.length; t < e; t++)
                if (!(a = this.types_by_index[t]).is_family)
                    for (i = 0, r = a.instances.length; i < r; i++)
                        if ((o = a.instances[i]).onWindowBlur && o.onWindowBlur(), o.behavior_insts)
                            for (n = 0, s = o.behavior_insts.length; n < s; n++)(h = o.behavior_insts[n]).onWindowBlur && h.onWindowBlur()
        }, e.prototype.doChangeLayout = function(t) {
            var e, i, r, n = this.running_layout;
            if (this.running_layout.stopRunning(), this.glwrap)
                for (e = 0, i = this.types_by_index.length; e < i; e++)(r = this.types_by_index[e]).is_family || !r.unloadTextures || r.global && 0 !== r.instances.length || -1 !== t.initial_types.indexOf(r) || r.unloadTextures();
            n == t && cr.clearArray(this.system.waits), cr.clearArray(this.registered_collisions), this.runLayoutChangeMethods(!0), t.startRunning(), this.runLayoutChangeMethods(!1), this.redraw = !0, this.layout_first_tick = !0, this.ClearDeathRow()
        }, e.prototype.runLayoutChangeMethods = function(t) {
            var e, i, r, n, s, a, o, h, c, l;
            for (e = 0, i = this.behaviors.length; e < i; e++) r = this.behaviors[e], t ? r.onBeforeLayoutChange && r.onBeforeLayoutChange() : r.onLayoutChange && r.onLayoutChange();
            for (e = 0, i = this.types_by_index.length; e < i; e++)
                if ((n = this.types_by_index[e]).global || n.plugin.singleglobal)
                    for (s = 0, a = n.instances.length; s < a; s++)
                        if (o = n.instances[s], t ? o.onBeforeLayoutChange && o.onBeforeLayoutChange() : o.onLayoutChange && o.onLayoutChange(), o.behavior_insts)
                            for (h = 0, c = o.behavior_insts.length; h < c; h++) l = o.behavior_insts[h], t ? l.onBeforeLayoutChange && l.onBeforeLayoutChange() : l.onLayoutChange && l.onLayoutChange()
        }, e.prototype.pretickMe = function(t) {
            this.objects_to_pretick.add(t)
        }, e.prototype.unpretickMe = function(t) {
            this.objects_to_pretick.remove(t)
        }, e.prototype.tickMe = function(t) {
            this.objects_to_tick.add(t)
        }, e.prototype.untickMe = function(t) {
            this.objects_to_tick.remove(t)
        }, e.prototype.tick2Me = function(t) {
            this.objects_to_tick2.add(t)
        }, e.prototype.untick2Me = function(t) {
            this.objects_to_tick2.remove(t)
        }, e.prototype.getDt = function(t) {
            return t && -1 !== t.my_timescale ? this.dt1 * t.my_timescale : this.dt
        }, e.prototype.draw = function() {
            this.running_layout.draw(this.ctx), this.isDirectCanvas && this.ctx.present()
        }, e.prototype.drawGL = function() {
            this.enableFrontToBack && (this.earlyz_index = 1, this.running_layout.drawGL_earlyZPass(this.glwrap)), this.running_layout.drawGL(this.glwrap), this.glwrap.present()
        }, e.prototype.addDestroyCallback = function(t) {
            t && this.destroycallbacks.push(t)
        }, e.prototype.removeDestroyCallback = function(t) {
            cr.arrayFindRemove(this.destroycallbacks, t)
        }, e.prototype.getObjectByUID = function(t) {
            var e = t.toString();
            return this.objectsByUid.hasOwnProperty(e) ? this.objectsByUid[e] : null
        };
        var b = [];
        e.prototype.DestroyInstance = function(t) {
            var e, i, r = t.type.name,
                n = null;
            if (this.deathRow.hasOwnProperty(r)) {
                if ((n = this.deathRow[r]).contains(t)) return
            } else n = b.length ? b.pop() : new cr.ObjectSet, this.deathRow[r] = n;
            if (n.add(t), this.hasPendingInstances = !0, t.is_contained)
                for (e = 0, i = t.siblings.length; e < i; e++) this.DestroyInstance(t.siblings[e]);
            this.isInClearDeathRow && n.values_cache.push(t), this.isEndingLayout || (this.isInOnDestroy++, this.trigger(Object.getPrototypeOf(t.type.plugin).cnds.OnDestroyed, t), this.isInOnDestroy--)
        }, e.prototype.ClearDeathRow = function() {
            if (this.hasPendingInstances) {
                var t, e, i, r, n, s;
                for (this.isInClearDeathRow = !0, i = 0, n = this.createRow.length; i < n; ++i)
                    for ((e = (t = this.createRow[i]).type).instances.push(t), r = 0, s = e.families.length; r < s; ++r) e.families[r].instances.push(t), e.families[r].stale_iids = !0;
                cr.clearArray(this.createRow), this.IterateDeathRow(), cr.wipe(this.deathRow), this.isInClearDeathRow = !1, this.hasPendingInstances = !1
            }
        }, e.prototype.IterateDeathRow = function() {
            for (var t in this.deathRow) this.deathRow.hasOwnProperty(t) && this.ClearDeathRowForType(this.deathRow[t])
        }, e.prototype.ClearDeathRowForType = function(t) {
            var e, i, r, n, s, a, o, h, c = t.valuesRef(),
                l = c[0].type;
            for (cr.arrayRemoveAllFromObjectSet(l.instances, t), l.stale_iids = !0, 0 === l.instances.length && (l.any_instance_parallaxed = !1), e = 0, i = l.families.length; e < i; ++e) a = l.families[e], cr.arrayRemoveAllFromObjectSet(a.instances, t), a.stale_iids = !0;
            for (e = 0, i = this.system.waits.length; e < i; ++e)
                if ((s = this.system.waits[e]).sols.hasOwnProperty(l.index) && cr.arrayRemoveAllFromObjectSet(s.sols[l.index].insts, t), !l.is_family)
                    for (r = 0, n = l.families.length; r < n; ++r) a = l.families[r], s.sols.hasOwnProperty(a.index) && cr.arrayRemoveAllFromObjectSet(s.sols[a.index].insts, t);
            var u, p = c[0].layer;
            if (p) {
                if (p.useRenderCells)
                    for (e = 0, i = (o = p.instances).length; e < i; ++e) h = o[e], t.contains(h) && (h.update_bbox(), p.render_grid.update(h, h.rendercells, null), h.rendercells.set(0, 0, -1, -1));
                cr.arrayRemoveAllFromObjectSet(p.instances, t), p.setZIndicesStaleFrom(0)
            }
            for (e = 0; e < c.length; ++e) this.ClearDeathRowForSingleInstance(c[e], l);
            (u = t).clear(), b.push(u), this.redraw = !0
        }, e.prototype.ClearDeathRowForSingleInstance = function(t, e) {
            var i, r, n;
            for (i = 0, r = this.destroycallbacks.length; i < r; ++i) this.destroycallbacks[i](t);
            t.collcells && e.collision_grid.update(t, t.collcells, null);
            var s = t.layer;
            if (s && s.removeFromInstanceList(t, !0), t.behavior_insts)
                for (i = 0, r = t.behavior_insts.length; i < r; ++i)(n = t.behavior_insts[i]).onDestroy && n.onDestroy(), n.behavior.my_instances.remove(t);
            this.objects_to_pretick.remove(t), this.objects_to_tick.remove(t), this.objects_to_tick2.remove(t), t.onDestroy && t.onDestroy(), this.objectsByUid.hasOwnProperty(t.uid.toString()) && delete this.objectsByUid[t.uid.toString()], this.objectcount--, e.deadCache.length < 100 && e.deadCache.push(t)
        }, e.prototype.createInstance = function(t, e, i, r) {
            if (t.is_family) {
                var n = cr.floor(Math.random() * t.members.length);
                return this.createInstance(t.members[n], e, i, r)
            }
            return t.default_instance ? this.createInstanceFromInit(t.default_instance, e, !1, i, r, !1) : null
        };
        var w = [];
        e.prototype.createInstanceFromInit = function(t, e, i, r, n, s) {
            var a, o, h, c, l;
            if (!t) return null;
            var u = this.types_by_index[t[1]],
                p = u.plugin.is_world;
            if (this.isloading && p && !u.isOnLoaderLayout) return null;
            if (p && !this.glwrap && 11 === t[0][11]) return null;
            var d, f = e;
            for (p || (e = null), u.deadCache.length ? ((d = u.deadCache.pop()).recycled = !0, u.plugin.Instance.call(d, u)) : (d = new u.plugin.Instance(u)).recycled = !1, !i || s || this.objectsByUid.hasOwnProperty(t[2].toString()) ? d.uid = this.next_uid++ : d.uid = t[2], this.objectsByUid[d.uid.toString()] = d, d.puid = this.next_puid++, d.iid = u.instances.length, a = 0, o = this.createRow.length; a < o; ++a) this.createRow[a].type === u && d.iid++;
            d.get_iid = cr.inst_get_iid, d.toString = cr.inst_toString;
            var g, y = t[3];
            if (d.recycled) cr.wipe(d.extra);
            else {
                if (d.extra = {}, "undefined" != typeof cr_is_preview)
                    for (d.instance_var_names = [], d.instance_var_names.length = y.length, a = 0, o = y.length; a < o; a++) d.instance_var_names[a] = y[a][1];
                d.instance_vars = [], d.instance_vars.length = y.length
            }
            for (a = 0, o = y.length; a < o; a++) d.instance_vars[a] = y[a][0];
            if (p) {
                var m = t[0];
                if (d.x = cr.is_undefined(r) ? m[0] : r, d.y = cr.is_undefined(n) ? m[1] : n, d.z = m[2], d.width = m[3], d.height = m[4], d.depth = m[5], d.angle = m[6], d.opacity = m[7], d.hotspotX = m[8], d.hotspotY = m[9], d.blend_mode = m[10], l = m[11], !this.glwrap && u.effect_types.length && (d.blend_mode = l), d.compositeOp = cr.effectToCompositeOp(d.blend_mode), this.gl && cr.setGLBlend(d, d.blend_mode, this.gl), d.recycled) {
                    for (a = 0, o = m[12].length; a < o; a++)
                        for (h = 0, c = m[12][a].length; h < c; h++) d.effect_params[a][h] = m[12][a][h];
                    d.bbox.set(0, 0, 0, 0), d.collcells.set(0, 0, -1, -1), d.rendercells.set(0, 0, -1, -1), d.bquad.set_from_rect(d.bbox), cr.clearArray(d.bbox_changed_callbacks)
                } else {
                    for (d.effect_params = m[12].slice(0), a = 0, o = d.effect_params.length; a < o; a++) d.effect_params[a] = m[12][a].slice(0);
                    d.active_effect_types = [], d.active_effect_flags = [], d.active_effect_flags.length = u.effect_types.length, d.bbox = new cr.rect(0, 0, 0, 0), d.collcells = new cr.rect(0, 0, -1, -1), d.rendercells = new cr.rect(0, 0, -1, -1), d.bquad = new cr.quad, d.bbox_changed_callbacks = [], d.set_bbox_changed = cr.set_bbox_changed, d.add_bbox_changed_callback = cr.add_bbox_changed_callback, d.contains_pt = cr.inst_contains_pt, d.update_bbox = cr.update_bbox, d.update_render_cell = cr.update_render_cell, d.update_collision_cell = cr.update_collision_cell, d.get_zindex = cr.inst_get_zindex
                }
                for (d.tilemap_exists = !1, d.tilemap_width = 0, d.tilemap_height = 0, d.tilemap_data = null, 14 === m.length && (d.tilemap_exists = !0, d.tilemap_width = m[13][0], d.tilemap_height = m[13][1], d.tilemap_data = m[13][2]), a = 0, o = u.effect_types.length; a < o; a++) d.active_effect_flags[a] = !0;
                d.shaders_preserve_opaqueness = !0, d.updateActiveEffects = cr.inst_updateActiveEffects, d.updateActiveEffects(), d.uses_shaders = !!d.active_effect_types.length, d.bbox_changed = !0, d.cell_changed = !0, u.any_cell_changed = !0, d.visible = !0, d.my_timescale = -1, d.layer = e, d.zindex = e.instances.length, d.earlyz_index = 0, void 0 === d.collision_poly && (d.collision_poly = null), d.collisionsEnabled = !0, this.redraw = !0
            }
            for (cr.clearArray(w), a = 0, o = u.families.length; a < o; a++) w.push.apply(w, u.families[a].behaviors);
            if (w.push.apply(w, u.behaviors), d.recycled)
                for (a = 0, o = w.length; a < o; a++) {
                    var _ = w[a];
                    for ((v = d.behavior_insts[a]).recycled = !0, _.behavior.Instance.call(v, _, d), h = 0, c = (g = t[4][a]).length; h < c; h++) v.properties[h] = g[h];
                    v.onCreate(), _.behavior.my_instances.add(d)
                } else
                    for (d.behavior_insts = [], a = 0, o = w.length; a < o; a++) {
                        var v;
                        (v = new(_ = w[a]).behavior.Instance(_, d)).recycled = !1, v.properties = t[4][a].slice(0), v.onCreate(), cr.seal(v), d.behavior_insts.push(v), _.behavior.my_instances.add(d)
                    }
            if (g = t[5], d.recycled)
                for (a = 0, o = g.length; a < o; a++) d.properties[a] = g[a];
            else d.properties = g.slice(0);
            if (this.createRow.push(d), this.hasPendingInstances = !0, e && (e.appendToInstanceList(d, !0), 1 === e.parallaxX && 1 === e.parallaxY || (u.any_instance_parallaxed = !0)), this.objectcount++, u.is_contained) {
                if (d.is_contained = !0, d.recycled ? cr.clearArray(d.siblings) : d.siblings = [], !i && !s) {
                    for (a = 0, o = u.container.length; a < o; a++)
                        if (u.container[a] !== u) {
                            if (!u.container[a].default_instance) return null;
                            d.siblings.push(this.createInstanceFromInit(u.container[a].default_instance, f, !1, p ? d.x : r, p ? d.y : n, !0))
                        }
                    for (a = 0, o = d.siblings.length; a < o; a++)
                        for (d.siblings[a].siblings.push(d), h = 0; h < o; h++) a !== h && d.siblings[a].siblings.push(d.siblings[h])
                }
            } else d.is_contained = !1, d.siblings = null;
            for (d.onCreate(), d.recycled || cr.seal(d), a = 0, o = d.behavior_insts.length; a < o; a++) d.behavior_insts[a].postCreate && d.behavior_insts[a].postCreate();
            return d
        }, e.prototype.getLayerByName = function(t) {
            var e, i;
            for (e = 0, i = this.running_layout.layers.length; e < i; e++) {
                var r = this.running_layout.layers[e];
                if (cr.equals_nocase(r.name, t)) return r
            }
            return null
        }, e.prototype.getLayerByNumber = function(t) {
            return (t = cr.floor(t)) < 0 && (t = 0), t >= this.running_layout.layers.length && (t = this.running_layout.layers.length - 1), this.running_layout.layers[t]
        }, e.prototype.getLayer = function(t) {
            return cr.is_number(t) ? this.getLayerByNumber(t) : this.getLayerByName(t.toString())
        }, e.prototype.clearSol = function(t) {
            var e, i;
            for (e = 0, i = t.length; e < i; e++) t[e].getCurrentSol().select_all = !0
        }, e.prototype.pushCleanSol = function(t) {
            var e, i;
            for (e = 0, i = t.length; e < i; e++) t[e].pushCleanSol()
        }, e.prototype.pushCopySol = function(t) {
            var e, i;
            for (e = 0, i = t.length; e < i; e++) t[e].pushCopySol()
        }, e.prototype.popSol = function(t) {
            var e, i;
            for (e = 0, i = t.length; e < i; e++) t[e].popSol()
        }, e.prototype.updateAllCells = function(t) {
            if (t.any_cell_changed) {
                var e, i, r = t.instances;
                for (e = 0, i = r.length; e < i; ++e) r[e].update_collision_cell();
                var n = this.createRow;
                for (e = 0, i = n.length; e < i; ++e) n[e].type === t && n[e].update_collision_cell();
                t.any_cell_changed = !1
            }
        }, e.prototype.getCollisionCandidates = function(t, e, i, r) {
            var n, s, a, o = !!t && (1 !== t.parallaxX || 1 !== t.parallaxY);
            if (e.is_family)
                for (n = 0, s = e.members.length; n < s; ++n) a = e.members[n], o || a.any_instance_parallaxed ? cr.appendArray(r, a.instances) : (this.updateAllCells(a), a.collision_grid.queryRange(i, r));
            else o || e.any_instance_parallaxed ? cr.appendArray(r, e.instances) : (this.updateAllCells(e), e.collision_grid.queryRange(i, r))
        }, e.prototype.getTypesCollisionCandidates = function(t, e, i, r) {
            var n, s;
            for (n = 0, s = e.length; n < s; ++n) this.getCollisionCandidates(t, e[n], i, r)
        }, e.prototype.getSolidCollisionCandidates = function(t, e, i) {
            var r = this.getSolidBehavior();
            if (!r) return null;
            this.getTypesCollisionCandidates(t, r.my_types, e, i)
        }, e.prototype.getJumpthruCollisionCandidates = function(t, e, i) {
            var r = this.getJumpthruBehavior();
            if (!r) return null;
            this.getTypesCollisionCandidates(t, r.my_types, e, i)
        }, e.prototype.testAndSelectCanvasPointOverlap = function(t, e, i, r) {
            var n, s, a, o, h, c, l, u = t.getCurrentSol(),
                p = this.getCurrentEventStack().current_event.orblock;
            if (u.select_all)
                for (r || (u.select_all = !1, cr.clearArray(u.instances)), n = 0, o = t.instances.length; n < o; n++)
                    if ((a = t.instances[n]).update_bbox(), h = a.layer.canvasToLayer(e, i, !0), c = a.layer.canvasToLayer(e, i, !1), a.contains_pt(h, c)) {
                        if (r) return !1;
                        u.instances.push(a)
                    } else p && u.else_instances.push(a);
            else {
                for (s = 0, n = 0, o = (l = p ? u.else_instances : u.instances).length; n < o; n++)
                    if ((a = l[n]).update_bbox(), h = a.layer.canvasToLayer(e, i, !0), c = a.layer.canvasToLayer(e, i, !1), a.contains_pt(h, c)) {
                        if (r) return !1;
                        p ? u.instances.push(a) : (u.instances[s] = u.instances[n], s++)
                    }
                r || (l.length = s)
            }
            return t.applySolToContainer(), !!r || u.hasObjects()
        }, e.prototype.testOverlap = function(t, e) {
            if (!(t && e && t !== e && t.collisionsEnabled && e.collisionsEnabled)) return !1;
            t.update_bbox(), e.update_bbox();
            var i, r, n, s, a, o, h, c, l, u, p = t.layer,
                d = e.layer;
            if (p !== d && (p.parallaxX !== d.parallaxX || d.parallaxY != d.parallaxY || p.scale !== d.scale || p.angle !== d.angle || p.zoomRate !== d.zoomRate)) {
                for (h = t.collision_poly && !t.collision_poly.is_empty(), c = e.collision_poly && !e.collision_poly.is_empty(), h ? (t.collision_poly.cache_poly(t.width, t.height, t.angle), this.temp_poly.set_from_poly(t.collision_poly)) : this.temp_poly.set_from_quad(t.bquad, t.x, t.y, t.width, t.height), l = this.temp_poly, c ? (e.collision_poly.cache_poly(e.width, e.height, e.angle), this.temp_poly2.set_from_poly(e.collision_poly)) : this.temp_poly2.set_from_quad(e.bquad, e.x, e.y, e.width, e.height), u = this.temp_poly2, i = 0, r = l.pts_count; i < r; i++) s = (n = 2 * i) + 1, a = l.pts_cache[n], o = l.pts_cache[s], l.pts_cache[n] = p.layerToCanvas(a + t.x, o + t.y, !0), l.pts_cache[s] = p.layerToCanvas(a + t.x, o + t.y, !1);
                for (l.update_bbox(), i = 0, r = u.pts_count; i < r; i++) s = (n = 2 * i) + 1, a = u.pts_cache[n], o = u.pts_cache[s], u.pts_cache[n] = d.layerToCanvas(a + e.x, o + e.y, !0), u.pts_cache[s] = d.layerToCanvas(a + e.x, o + e.y, !1);
                return u.update_bbox(), l.intersects_poly(u, 0, 0)
            }
            return !!t.bbox.intersects_rect(e.bbox) && (!!t.bquad.intersects_quad(e.bquad) && ((!t.tilemap_exists || !e.tilemap_exists) && (t.tilemap_exists ? this.testTilemapOverlap(t, e) : e.tilemap_exists ? this.testTilemapOverlap(e, t) : (h = t.collision_poly && !t.collision_poly.is_empty(), c = e.collision_poly && !e.collision_poly.is_empty(), !h && !c || (h ? (t.collision_poly.cache_poly(t.width, t.height, t.angle), l = t.collision_poly) : (this.temp_poly.set_from_quad(t.bquad, t.x, t.y, t.width, t.height), l = this.temp_poly), c ? (e.collision_poly.cache_poly(e.width, e.height, e.angle), u = e.collision_poly) : (this.temp_poly.set_from_quad(e.bquad, e.x, e.y, e.width, e.height), u = this.temp_poly), l.intersects_poly(u, e.x - t.x, e.y - t.y))))))
        };
        var x = new cr.quad,
            S = new cr.rect(0, 0, 0, 0),
            T = [];
        e.prototype.testTilemapOverlap = function(t, e) {
            var i, r, n, s, a = e.bbox,
                o = t.x,
                h = t.y;
            t.getCollisionRectCandidates(a, T);
            var c = T,
                l = e.collision_poly && !e.collision_poly.is_empty();
            for (i = 0, r = c.length; i < r; ++i)
                if (s = (n = c[i]).rc, a.intersects_rect_off(s, o, h) && (x.set_from_rect(s), x.offset(o, h), x.intersects_quad(e.bquad)))
                    if (l) {
                        if (e.collision_poly.cache_poly(e.width, e.height, e.angle), n.poly) {
                            if (n.poly.intersects_poly(e.collision_poly, e.x - (o + s.left), e.y - (h + s.top))) return cr.clearArray(T), !0
                        } else if (this.temp_poly.set_from_quad(x, 0, 0, s.right - s.left, s.bottom - s.top), this.temp_poly.intersects_poly(e.collision_poly, e.x, e.y)) return cr.clearArray(T), !0
                    } else {
                        if (!n.poly) return cr.clearArray(T), !0;
                        if (this.temp_poly.set_from_quad(e.bquad, 0, 0, e.width, e.height), n.poly.intersects_poly(this.temp_poly, -(o + s.left), -(h + s.top))) return cr.clearArray(T), !0
                    }
            return cr.clearArray(T), !1
        }, e.prototype.testRectOverlap = function(t, e) {
            if (!e || !e.collisionsEnabled) return !1;
            e.update_bbox();
            e.layer;
            if (!e.bbox.intersects_rect(t)) return !1;
            if (e.tilemap_exists) {
                e.getCollisionRectCandidates(t, T);
                var i, r, n, s, a = T,
                    o = e.x,
                    h = e.y;
                for (i = 0, r = a.length; i < r; ++i)
                    if (s = (n = a[i]).rc, t.intersects_rect_off(s, o, h)) {
                        if (!n.poly) return cr.clearArray(T), !0;
                        if (this.temp_poly.set_from_rect(t, 0, 0), n.poly.intersects_poly(this.temp_poly, -(o + s.left), -(h + s.top))) return cr.clearArray(T), !0
                    }
                return cr.clearArray(T), !1
            }
            return x.set_from_rect(t), !!e.bquad.intersects_quad(x) && (!(e.collision_poly && !e.collision_poly.is_empty()) || (e.collision_poly.cache_poly(e.width, e.height, e.angle), x.offset(-t.left, -t.top), this.temp_poly.set_from_quad(x, 0, 0, 1, 1), e.collision_poly.intersects_poly(this.temp_poly, t.left - e.x, t.top - e.y)))
        }, e.prototype.testSegmentOverlap = function(t, e, i, r, n) {
            if (!n || !n.collisionsEnabled) return !1;
            n.update_bbox();
            n.layer;
            if (S.set(cr.min(t, i), cr.min(e, r), cr.max(t, i), cr.max(e, r)), !n.bbox.intersects_rect(S)) return !1;
            if (n.tilemap_exists) {
                n.getCollisionRectCandidates(S, T);
                var s, a, o, h, c = T,
                    l = n.x,
                    u = n.y;
                for (s = 0, a = c.length; s < a; ++s)
                    if (h = (o = c[s]).rc, S.intersects_rect_off(h, l, u) && (x.set_from_rect(h), x.offset(l, u), x.intersects_segment(t, e, i, r))) {
                        if (!o.poly) return cr.clearArray(T), !0;
                        if (o.poly.intersects_segment(l + h.left, u + h.top, t, e, i, r)) return cr.clearArray(T), !0
                    }
                return cr.clearArray(T), !1
            }
            return !!n.bquad.intersects_segment(t, e, i, r) && (!(n.collision_poly && !n.collision_poly.is_empty()) || (n.collision_poly.cache_poly(n.width, n.height, n.angle), n.collision_poly.intersects_segment(n.x, n.y, t, e, i, r)))
        }, e.prototype.typeHasBehavior = function(t, e) {
            if (!e) return !1;
            var i, r, n, s, a;
            for (i = 0, r = t.behaviors.length; i < r; i++)
                if (t.behaviors[i].behavior instanceof e) return !0;
            if (!t.is_family)
                for (i = 0, r = t.families.length; i < r; i++)
                    for (n = 0, s = (a = t.families[i]).behaviors.length; n < s; n++)
                        if (a.behaviors[n].behavior instanceof e) return !0;
            return !1
        }, e.prototype.typeHasNoSaveBehavior = function(t) {
            return this.typeHasBehavior(t, cr.behaviors.NoSave)
        }, e.prototype.typeHasPersistBehavior = function(t) {
            return this.typeHasBehavior(t, cr.behaviors.Persist)
        }, e.prototype.getSolidBehavior = function() {
            return this.solidBehavior
        }, e.prototype.getJumpthruBehavior = function() {
            return this.jumpthruBehavior
        };
        var O = [];
        e.prototype.testOverlapSolid = function(t) {
            var e, i, r;
            for (t.update_bbox(), this.getSolidCollisionCandidates(t.layer, t.bbox, O), e = 0, i = O.length; e < i; ++e)
                if ((r = O[e]).extra.solidEnabled && this.testOverlap(t, r)) return cr.clearArray(O), r;
            return cr.clearArray(O), null
        }, e.prototype.testRectOverlapSolid = function(t) {
            var e, i, r;
            for (this.getSolidCollisionCandidates(null, t, O), e = 0, i = O.length; e < i; ++e)
                if ((r = O[e]).extra.solidEnabled && this.testRectOverlap(t, r)) return cr.clearArray(O), r;
            return cr.clearArray(O), null
        };
        var C = [];
        e.prototype.testOverlapJumpThru = function(t, e) {
            var i, r, n, s = null;
            for (e && (s = C, cr.clearArray(s)), t.update_bbox(), this.getJumpthruCollisionCandidates(t.layer, t.bbox, O), i = 0, r = O.length; i < r; ++i)
                if ((n = O[i]).extra.jumpthruEnabled && this.testOverlap(t, n)) {
                    if (!e) return cr.clearArray(O), n;
                    s.push(n)
                }
            return cr.clearArray(O), s
        }, e.prototype.pushOutSolid = function(t, e, i, r, n, s) {
            var a, o = r || 50,
                h = t.x,
                c = t.y,
                l = null,
                u = null;
            for (a = 0; a < o; a++)
                if (t.x = h + e * a, t.y = c + i * a, t.set_bbox_changed(), !this.testOverlap(t, l) && ((l = this.testOverlapSolid(t)) && (u = l), !l && (n && (l = s ? this.testOverlap(t, s) ? s : null : this.testOverlapJumpThru(t)) && (u = l), !l))) return u && this.pushInFractional(t, e, i, u, 16), !0;
            return t.x = h, t.y = c, t.set_bbox_changed(), !1
        }, e.prototype.pushOut = function(t, e, i, r, n) {
            var s, a = r || 50,
                o = t.x,
                h = t.y;
            for (s = 0; s < a; s++)
                if (t.x = o + e * s, t.y = h + i * s, t.set_bbox_changed(), !this.testOverlap(t, n)) return !0;
            return t.x = o, t.y = h, t.set_bbox_changed(), !1
        }, e.prototype.pushInFractional = function(t, e, i, r, n) {
            for (var s, a = 2, o = !1, h = !1, c = t.x, l = t.y; a <= n;) s = 1 / a, a *= 2, t.x += e * s * (o ? 1 : -1), t.y += i * s * (o ? 1 : -1), t.set_bbox_changed(), this.testOverlap(t, r) ? (o = !0, h = !0) : (o = !1, h = !1, c = t.x, l = t.y);
            h && (t.x = c, t.y = l, t.set_bbox_changed())
        }, e.prototype.pushOutSolidNearest = function(t, e) {
            var i = cr.is_undefined(e) ? 100 : e,
                r = 0,
                n = t.x,
                s = t.y,
                a = 0,
                o = 0,
                h = 0,
                c = this.testOverlapSolid(t);
            if (!c) return !0;
            for (; r <= i;) {
                switch (a) {
                    case 0:
                        o = 0, h = -1, r++;
                        break;
                    case 1:
                        o = 1, h = -1;
                        break;
                    case 2:
                        o = 1, h = 0;
                        break;
                    case 3:
                        o = 1, h = 1;
                        break;
                    case 4:
                        o = 0, h = 1;
                        break;
                    case 5:
                        o = -1, h = 1;
                        break;
                    case 6:
                        o = -1, h = 0;
                        break;
                    case 7:
                        o = -1, h = -1
                }
                if (a = (a + 1) % 8, t.x = cr.floor(n + o * r), t.y = cr.floor(s + h * r), t.set_bbox_changed(), !this.testOverlap(t, c) && !(c = this.testOverlapSolid(t))) return !0
            }
            return t.x = n, t.y = s, t.set_bbox_changed(), !1
        }, e.prototype.registerCollision = function(t, e) {
            t.collisionsEnabled && e.collisionsEnabled && this.registered_collisions.push([t, e])
        }, e.prototype.addRegisteredCollisionCandidates = function(t, e, i) {
            var r, n, s, a;
            for (r = 0, n = this.registered_collisions.length; r < n; ++r) {
                if ((s = this.registered_collisions[r])[0] === t) a = s[1];
                else {
                    if (s[1] !== t) continue;
                    a = s[0]
                }
                if (e.is_family) {
                    if (-1 === e.members.indexOf(e)) continue
                } else if (a.type !== e) continue; - 1 === i.indexOf(a) && i.push(a)
            }
        }, e.prototype.checkRegisteredCollision = function(t, e) {
            var i, r, n;
            for (i = 0, r = this.registered_collisions.length; i < r; i++)
                if ((n = this.registered_collisions[i])[0] === t && n[1] === e || n[0] === e && n[1] === t) return !0;
            return !1
        }, e.prototype.calculateSolidBounceAngle = function(t, e, i, r) {
            var n = t.x,
                s = t.y,
                a = cr.max(10, cr.distanceTo(e, i, n, s)),
                o = cr.angleTo(e, i, n, s),
                h = r || this.testOverlapSolid(t);
            if (!h) return cr.clamp_angle(o + cr.PI);
            var c, l, u, p, d = h,
                f = cr.to_radians(5);
            for (c = 1; c < 36; c++)
                if (l = o - c * f, t.x = e + Math.cos(l) * a, t.y = i + Math.sin(l) * a, t.set_bbox_changed(), !this.testOverlap(t, d) && !(d = r ? null : this.testOverlapSolid(t))) {
                    u = l;
                    break
                }
            36 === c && (u = cr.clamp_angle(o + cr.PI));
            d = h;
            for (c = 1; c < 36; c++)
                if (l = o + c * f, t.x = e + Math.cos(l) * a, t.y = i + Math.sin(l) * a, t.set_bbox_changed(), !this.testOverlap(t, d) && !(d = r ? null : this.testOverlapSolid(t))) {
                    p = l;
                    break
                }
            if (36 === c && (p = cr.clamp_angle(o + cr.PI)), t.x = n, t.y = s, t.set_bbox_changed(), p === u) return p;
            var g, y = cr.angleDiff(p, u) / 2;
            g = cr.angleClockwise(p, u) ? cr.clamp_angle(u + y + cr.PI) : cr.clamp_angle(p + y);
            var m = Math.cos(o),
                _ = Math.sin(o),
                v = Math.cos(g),
                b = Math.sin(g),
                w = m * v + _ * b,
                x = m - 2 * w * v,
                S = _ - 2 * w * b;
            return cr.angleTo(0, 0, x, S)
        };
        var A = -1;

        function k() {
            try {
                return !!window.indexedDB
            } catch (t) {
                return !1
            }
        }

        function E(t) {
            t.target.result.createObjectStore("saves", {
                keyPath: "slot"
            })
        }

        function P() {
            cr.logexport("Reloading for continuous preview"), window.c2cocoonjs ? CocoonJS.App.reload() : window.location.search.indexOf("continuous") > -1 ? window.location.reload(!0) : window.location = window.location + "?continuous"
        }

        function L(t) {
            var e, i = {};
            for (e in t)
                if (t.hasOwnProperty(e)) {
                    if (t[e] instanceof cr.ObjectSet) continue;
                    if (t[e] && void 0 !== t[e].c2userdata) continue;
                    if ("spriteCreatedDestroyCallback" === e) continue;
                    i[e] = t[e]
                }
            return i
        }
        e.prototype.trigger = function(t, e, i) {
            if (!this.running_layout) return !1;
            var r = this.running_layout.event_sheet;
            if (!r) return !1;
            var n, s, a, o = !1;
            A++;
            var h = r.deep_includes;
            for (s = 0, a = h.length; s < a; ++s) n = this.triggerOnSheet(t, e, h[s], i), o = o || n;
            return n = this.triggerOnSheet(t, e, r, i), A--, o = o || n
        }, e.prototype.triggerOnSheet = function(t, e, i, r) {
            var n, s, a, o, h = !1;
            if (e)
                for (a = this.triggerOnSheetForTypeName(t, e, e.type.name, i, r), h = h || a, n = 0, s = (o = e.type.families).length; n < s; ++n) a = this.triggerOnSheetForTypeName(t, e, o[n].name, i, r), h = h || a;
            else a = this.triggerOnSheetForTypeName(t, e, "system", i, r), h = h || a;
            return h
        }, e.prototype.triggerOnSheetForTypeName = function(t, e, i, r, n) {
            var s, a, o, h, c = !1,
                l = !1,
                u = void 0 !== n,
                p = (u ? r.fasttriggers : r.triggers)[i];
            if (!p) return c;
            var d, f = null;
            for (s = 0, a = p.length; s < a; ++s)
                if (p[s].method == t) {
                    f = p[s].evs;
                    break
                }
            if (!f) return c;
            if (!(d = u ? f[n] : f)) return null;
            for (s = 0, a = d.length; s < a; s++) o = d[s][0], h = d[s][1], l = this.executeSingleTrigger(e, i, o, h), c = c || l;
            return c
        }, e.prototype.executeSingleTrigger = function(t, e, i, r) {
            var n, s, a = !1;
            this.trigger_depth++;
            var o = this.getCurrentEventStack().current_event;
            o && this.pushCleanSol(o.solModifiersIncludingParents);
            var h = this.trigger_depth > 1;
            this.pushCleanSol(i.solModifiersIncludingParents), h && this.pushLocalVarStack();
            var c = this.pushEventStack(i);
            if (c.current_event = i, t) {
                var l = this.types[e].getCurrentSol();
                l.select_all = !1, cr.clearArray(l.instances), l.instances[0] = t, this.types[e].applySolToContainer()
            }
            var u = !0;
            if (i.parent) {
                for (var p = c.temp_parents_arr, d = i.parent; d;) p.push(d), d = d.parent;
                for (p.reverse(), n = 0, s = p.length; n < s; n++)
                    if (!p[n].run_pretrigger()) {
                        u = !1;
                        break
                    }
            }
            return u && (this.execcount++, i.orblock ? i.run_orblocktrigger(r) : i.run(), a = a || c.last_event_true), this.popEventStack(), h && this.popLocalVarStack(), this.popSol(i.solModifiersIncludingParents), o && this.popSol(o.solModifiersIncludingParents), this.hasPendingInstances && 0 === this.isInOnDestroy && 0 === A && !this.isRunningEvents && this.ClearDeathRow(), this.trigger_depth--, a
        }, e.prototype.getCurrentCondition = function() {
            var t = this.getCurrentEventStack();
            return t.current_event.conditions[t.cndindex]
        }, e.prototype.getCurrentConditionObjectType = function() {
            return this.getCurrentCondition().type
        }, e.prototype.isCurrentConditionFirst = function() {
            return 0 === this.getCurrentEventStack().cndindex
        }, e.prototype.getCurrentAction = function() {
            var t = this.getCurrentEventStack();
            return t.current_event.actions[t.actindex]
        }, e.prototype.pushLocalVarStack = function() {
            this.localvar_stack_index++, this.localvar_stack_index >= this.localvar_stack.length && this.localvar_stack.push([])
        }, e.prototype.popLocalVarStack = function() {
            this.localvar_stack_index--
        }, e.prototype.getCurrentLocalVarStack = function() {
            return this.localvar_stack[this.localvar_stack_index]
        }, e.prototype.pushEventStack = function(t) {
            this.event_stack_index++, this.event_stack_index >= this.event_stack.length && this.event_stack.push(new cr.eventStackFrame);
            var e = this.getCurrentEventStack();
            return e.reset(t), e
        }, e.prototype.popEventStack = function() {
            this.event_stack_index--
        }, e.prototype.getCurrentEventStack = function() {
            return this.event_stack[this.event_stack_index]
        }, e.prototype.pushLoopStack = function(t) {
            this.loop_stack_index++, this.loop_stack_index >= this.loop_stack.length && this.loop_stack.push(cr.seal({
                name: t,
                index: 0,
                stopped: !1
            }));
            var e = this.getCurrentLoop();
            return e.name = t, e.index = 0, e.stopped = !1, e
        }, e.prototype.popLoopStack = function() {
            this.loop_stack_index--
        }, e.prototype.getCurrentLoop = function() {
            return this.loop_stack[this.loop_stack_index]
        }, e.prototype.getEventVariableByName = function(t, e) {
            for (var i, r, n, s, a, o; e;) {
                for (i = 0, r = e.subevents.length; i < r; i++)
                    if ((o = e.subevents[i]) instanceof cr.eventvariable && cr.equals_nocase(t, o.name)) return o;
                e = e.parent
            }
            for (i = 0, r = this.eventsheets_by_index.length; i < r; i++)
                for (n = 0, s = (a = this.eventsheets_by_index[i]).events.length; n < s; n++)
                    if ((o = a.events[n]) instanceof cr.eventvariable && cr.equals_nocase(t, o.name)) return o;
            return null
        }, e.prototype.getLayoutBySid = function(t) {
            var e, i;
            for (e = 0, i = this.layouts_by_index.length; e < i; e++)
                if (this.layouts_by_index[e].sid === t) return this.layouts_by_index[e];
            return null
        }, e.prototype.getObjectTypeBySid = function(t) {
            var e, i;
            for (e = 0, i = this.types_by_index.length; e < i; e++)
                if (this.types_by_index[e].sid === t) return this.types_by_index[e];
            return null
        }, e.prototype.getGroupBySid = function(t) {
            var e, i;
            for (e = 0, i = this.allGroups.length; e < i; e++)
                if (this.allGroups[e].sid === t) return this.allGroups[e];
            return null
        }, e.prototype.doCanvasSnapshot = function(t, e) {
            this.snapshotCanvas = [t, e], this.redraw = !0
        }, e.prototype.signalContinuousPreview = function() {
            this.signalledContinuousPreview = !0
        }, e.prototype.handleSaveLoad = function() {
            var t = this,
                e = this.saveToSlot,
                i = this.lastSaveJson,
                r = this.loadFromSlot,
                n = !1;
            if (this.signalledContinuousPreview && (n = !0, e = "__c2_continuouspreview", this.signalledContinuousPreview = !1), e.length) {
                if (this.ClearDeathRow(), i = this.saveToJSONString(), k() && !this.isCocoonJs) ! function(t, e, i, r) {
                    try {
                        var n = indexedDB.open("_C2SaveStates");
                        n.onupgradeneeded = E, n.onerror = r, n.onsuccess = function(n) {
                            var s = n.target.result;
                            s.onerror = r, s.transaction(["saves"], "readwrite").objectStore("saves").put({
                                slot: t,
                                data: e
                            }).onsuccess = i
                        }
                    } catch (t) {
                        r(t)
                    }
                }(e, i, function() {
                    cr.logexport("Saved state to IndexedDB storage (" + i.length + " bytes)"), t.lastSaveJson = i, t.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null), t.lastSaveJson = "", n && P()
                }, function(r) {
                    try {
                        localStorage.setItem("__c2save_" + e, i), cr.logexport("Saved state to WebStorage (" + i.length + " bytes)"), t.lastSaveJson = i, t.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null), t.lastSaveJson = "", n && P()
                    } catch (e) {
                        cr.logexport("Failed to save game state: " + r + "; " + e), t.trigger(cr.system_object.prototype.cnds.OnSaveFailed, null)
                    }
                });
                else try {
                    localStorage.setItem("__c2save_" + e, i), cr.logexport("Saved state to WebStorage (" + i.length + " bytes)"), t.lastSaveJson = i, this.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null), t.lastSaveJson = "", n && P()
                } catch (e) {
                    cr.logexport("Error saving to WebStorage: " + e), t.trigger(cr.system_object.prototype.cnds.OnSaveFailed, null)
                }
                this.saveToSlot = "", this.loadFromSlot = "", this.loadFromJson = null
            }
            if (r.length) {
                if (k() && !this.isCocoonJs) ! function(t, e, i) {
                    try {
                        var r = indexedDB.open("_C2SaveStates");
                        r.onupgradeneeded = E, r.onerror = i, r.onsuccess = function(r) {
                            var n = r.target.result;
                            n.onerror = i;
                            var s = n.transaction(["saves"]).objectStore("saves").get(t);
                            s.onsuccess = function(t) {
                                s.result ? e(s.result.data) : e(null)
                            }
                        }
                    } catch (t) {
                        i(t)
                    }
                }(r, function(e) {
                    e ? (t.loadFromJson = e, cr.logexport("Loaded state from IndexedDB storage (" + t.loadFromJson.length + " bytes)")) : (t.loadFromJson = localStorage.getItem("__c2save_" + r) || "", cr.logexport("Loaded state from WebStorage (" + t.loadFromJson.length + " bytes)")), t.suspendDrawing = !1, t.loadFromJson || (t.loadFromJson = null, t.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null))
                }, function(e) {
                    t.loadFromJson = localStorage.getItem("__c2save_" + r) || "", cr.logexport("Loaded state from WebStorage (" + t.loadFromJson.length + " bytes)"), t.suspendDrawing = !1, t.loadFromJson || (t.loadFromJson = null, t.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null))
                });
                else {
                    try {
                        this.loadFromJson = localStorage.getItem("__c2save_" + r) || "", cr.logexport("Loaded state from WebStorage (" + this.loadFromJson.length + " bytes)")
                    } catch (t) {
                        this.loadFromJson = null
                    }
                    this.suspendDrawing = !1, t.loadFromJson || (t.loadFromJson = null, t.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null))
                }
                this.loadFromSlot = "", this.saveToSlot = ""
            }
            null !== this.loadFromJson && (this.ClearDeathRow(), this.loadFromJSONString(this.loadFromJson) ? (this.lastSaveJson = this.loadFromJson, this.trigger(cr.system_object.prototype.cnds.OnLoadComplete, null), this.lastSaveJson = "") : t.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null), this.loadFromJson = null)
        }, e.prototype.saveToJSONString = function() {
            var t, e, i, r, n, s, a, o, h, c, l, u, p = {
                c2save: !0,
                version: 1,
                rt: {
                    time: this.kahanTime.sum,
                    walltime: this.wallTime.sum,
                    timescale: this.timescale,
                    tickcount: this.tickcount,
                    execcount: this.execcount,
                    next_uid: this.next_uid,
                    running_layout: this.running_layout.sid,
                    start_time_offset: Date.now() - this.start_time
                },
                types: {},
                layouts: {},
                events: {
                    groups: {},
                    cnds: {},
                    acts: {},
                    vars: {}
                }
            };
            for (t = 0, e = this.types_by_index.length; t < e; t++)
                if (!(n = this.types_by_index[t]).is_family && !this.typeHasNoSaveBehavior(n)) {
                    for (a = {
                            instances: []
                        }, cr.hasAnyOwnProperty(n.extra) && (a.ex = L(n.extra)), i = 0, r = n.instances.length; i < r; i++) a.instances.push(this.saveInstanceToJSON(n.instances[i]));
                    p.types[n.sid.toString()] = a
                }
            for (t = 0, e = this.layouts_by_index.length; t < e; t++) s = this.layouts_by_index[t], p.layouts[s.sid.toString()] = s.saveToJSON();
            var d = p.events.groups;
            for (t = 0, e = this.allGroups.length; t < e; t++) d[(o = this.allGroups[t]).sid.toString()] = this.groups_by_name[o.group_name].group_active;
            var f = p.events.cnds;
            for (u in this.cndsBySid) this.cndsBySid.hasOwnProperty(u) && (h = this.cndsBySid[u], cr.hasAnyOwnProperty(h.extra) && (f[u] = {
                ex: L(h.extra)
            }));
            var g = p.events.acts;
            for (u in this.actsBySid) this.actsBySid.hasOwnProperty(u) && (c = this.actsBySid[u], cr.hasAnyOwnProperty(c.extra) && (g[u] = {
                ex: L(c.extra)
            }));
            var y = p.events.vars;
            for (u in this.varsBySid) this.varsBySid.hasOwnProperty(u) && ((l = this.varsBySid[u]).is_constant || l.parent && !l.is_static || (y[u] = l.data));
            return p.system = this.system.saveToJSON(), JSON.stringify(p)
        }, e.prototype.refreshUidMap = function() {
            var t, e, i, r, n, s;
            for (this.objectsByUid = {}, t = 0, e = this.types_by_index.length; t < e; t++)
                if (!(i = this.types_by_index[t]).is_family)
                    for (r = 0, n = i.instances.length; r < n; r++) s = i.instances[r], this.objectsByUid[s.uid.toString()] = s
        }, e.prototype.loadFromJSONString = function(t) {
            var e;
            try {
                e = JSON.parse(t)
            } catch (t) {
                return !1
            }
            if (!e.c2save) return !1;
            if (e.version > 1) return !1;
            this.isLoadingState = !0;
            var i = e.rt;
            this.kahanTime.reset(), this.kahanTime.sum = i.time, this.wallTime.reset(), this.wallTime.sum = i.walltime || 0, this.timescale = i.timescale, this.tickcount = i.tickcount, this.execcount = i.execcount, this.start_time = Date.now() - i.start_time_offset;
            var r, n, s, a, o, h, c, l, u, p, d, f, g, y, m, _, v, b = i.running_layout;
            if (b !== this.running_layout.sid) {
                var w = this.getLayoutBySid(b);
                if (!w) return;
                this.doChangeLayout(w)
            }
            var x = e.types;
            for (c in x)
                if (x.hasOwnProperty(c)) {
                    if (!(l = this.getObjectTypeBySid(parseInt(c, 10))) || l.is_family || this.typeHasNoSaveBehavior(l)) continue;
                    for (x[c].ex ? l.extra = x[c].ex : cr.wipe(l.extra), u = l.instances, p = x[c].instances, r = 0, n = cr.min(u.length, p.length); r < n; r++) this.loadInstanceFromJSON(u[r], p[r]);
                    for (r = p.length, n = u.length; r < n; r++) this.DestroyInstance(u[r]);
                    for (r = u.length, n = p.length; r < n; r++) y = null, l.plugin.is_world && !(y = this.running_layout.getLayerBySid(p[r].w.l)) || (d = this.createInstanceFromInit(l.default_instance, y, !1, 0, 0, !0), this.loadInstanceFromJSON(d, p[r]));
                    l.stale_iids = !0
                }
            this.ClearDeathRow(), this.refreshUidMap();
            var S = e.layouts;
            for (c in S)
                if (S.hasOwnProperty(c)) {
                    if (!(g = this.getLayoutBySid(parseInt(c, 10)))) continue;
                    g.loadFromJSON(S[c])
                }
            var T = e.events.groups;
            for (c in T) T.hasOwnProperty(c) && (m = this.getGroupBySid(parseInt(c, 10))) && this.groups_by_name[m.group_name] && this.groups_by_name[m.group_name].setGroupActive(T[c]);
            var O = e.events.cnds;
            for (c in this.cndsBySid) this.cndsBySid.hasOwnProperty(c) && (O.hasOwnProperty(c) ? this.cndsBySid[c].extra = O[c].ex : this.cndsBySid[c].extra = {});
            var C = e.events.acts;
            for (c in this.actsBySid) this.actsBySid.hasOwnProperty(c) && (C.hasOwnProperty(c) ? this.actsBySid[c].extra = C[c].ex : this.actsBySid[c].extra = {});
            var A = e.events.vars;
            for (c in A) A.hasOwnProperty(c) && this.varsBySid.hasOwnProperty(c) && (this.varsBySid[c].data = A[c]);
            for (this.next_uid = i.next_uid, this.isLoadingState = !1, r = 0, n = this.fireOnCreateAfterLoad.length; r < n; ++r) d = this.fireOnCreateAfterLoad[r], this.trigger(Object.getPrototypeOf(d.type.plugin).cnds.OnCreated, d);
            for (cr.clearArray(this.fireOnCreateAfterLoad), this.system.loadFromJSON(e.system), r = 0, n = this.types_by_index.length; r < n; r++)
                if (!(l = this.types_by_index[r]).is_family && !this.typeHasNoSaveBehavior(l))
                    for (s = 0, a = l.instances.length; s < a; s++) {
                        if (d = l.instances[s], l.is_contained)
                            for (_ = d.get_iid(), cr.clearArray(d.siblings), o = 0, h = l.container.length; o < h; o++) l !== (v = l.container[o]) && d.siblings.push(v.instances[_]);
                        if (d.afterLoad && d.afterLoad(), d.behavior_insts)
                            for (o = 0, h = d.behavior_insts.length; o < h; o++)(f = d.behavior_insts[o]).afterLoad && f.afterLoad()
                    }
            return this.redraw = !0, !0
        }, e.prototype.saveInstanceToJSON = function(t, e) {
            var i, r, n, s, a, o = t.type,
                h = o.plugin,
                c = {};
            if (e ? c.c2 = !0 : c.uid = t.uid, cr.hasAnyOwnProperty(t.extra) && (c.ex = L(t.extra)), t.instance_vars && t.instance_vars.length)
                for (c.ivs = {}, i = 0, r = t.instance_vars.length; i < r; i++) c.ivs[t.type.instvar_sids[i].toString()] = t.instance_vars[i];
            if (h.is_world) {
                if (n = {
                        x: t.x,
                        y: t.y,
                        w: t.width,
                        h: t.height,
                        l: t.layer.sid,
                        zi: t.get_zindex()
                    }, 0 !== t.angle && (n.a = t.angle), 1 !== t.opacity && (n.o = t.opacity), .5 !== t.hotspotX && (n.hX = t.hotspotX), .5 !== t.hotspotY && (n.hY = t.hotspotY), 0 !== t.blend_mode && (n.bm = t.blend_mode), t.visible || (n.v = t.visible), t.collisionsEnabled || (n.ce = t.collisionsEnabled), -1 !== t.my_timescale && (n.mts = t.my_timescale), o.effect_types.length)
                    for (n.fx = [], i = 0, r = o.effect_types.length; i < r; i++) a = o.effect_types[i], n.fx.push({
                        name: a.name,
                        active: t.active_effect_flags[a.index],
                        params: t.effect_params[a.index]
                    });
                c.w = n
            }
            if (t.behavior_insts && t.behavior_insts.length)
                for (c.behs = {}, i = 0, r = t.behavior_insts.length; i < r; i++)(s = t.behavior_insts[i]).saveToJSON && (c.behs[s.type.sid.toString()] = s.saveToJSON());
            return t.saveToJSON && (c.data = t.saveToJSON()), c
        }, e.prototype.getInstanceVarIndexBySid = function(t, e) {
            var i, r;
            for (i = 0, r = t.instvar_sids.length; i < r; i++)
                if (t.instvar_sids[i] === e) return i;
            return -1
        }, e.prototype.getBehaviorIndexBySid = function(t, e) {
            var i, r;
            for (i = 0, r = t.behavior_insts.length; i < r; i++)
                if (t.behavior_insts[i].type.sid === e) return i;
            return -1
        }, e.prototype.loadInstanceFromJSON = function(t, e, i) {
            var r, n, s, a, o, h, c, l, u, p, d, f = t.type,
                g = f.plugin;
            if (i) {
                if (!e.c2) return
            } else t.uid = e.uid;
            if (e.ex ? t.extra = e.ex : cr.wipe(t.extra), o = e.ivs)
                for (r in o)
                    if (o.hasOwnProperty(r)) {
                        if ((a = this.getInstanceVarIndexBySid(f, parseInt(r, 10))) < 0 || a >= t.instance_vars.length) continue;
                        null === (p = o[r]) && (p = NaN), t.instance_vars[a] = p
                    }
            if (g.is_world) {
                if (h = e.w, t.layer.sid !== h.l && (d = t.layer, t.layer = this.running_layout.getLayerBySid(h.l), t.layer ? (d.removeFromInstanceList(t, !0), t.layer.appendToInstanceList(t, !0), t.set_bbox_changed(), t.layer.setZIndicesStaleFrom(0)) : (t.layer = d, i || this.DestroyInstance(t))), t.x = h.x, t.y = h.y, t.width = h.w, t.height = h.h, t.zindex = h.zi, t.angle = h.hasOwnProperty("a") ? h.a : 0, t.opacity = h.hasOwnProperty("o") ? h.o : 1, t.hotspotX = h.hasOwnProperty("hX") ? h.hX : .5, t.hotspotY = h.hasOwnProperty("hY") ? h.hY : .5, t.visible = !h.hasOwnProperty("v") || h.v, t.collisionsEnabled = !h.hasOwnProperty("ce") || h.ce, t.my_timescale = h.hasOwnProperty("mts") ? h.mts : -1, t.blend_mode = h.hasOwnProperty("bm") ? h.bm : 0, t.compositeOp = cr.effectToCompositeOp(t.blend_mode), this.gl && cr.setGLBlend(t, t.blend_mode, this.gl), t.set_bbox_changed(), h.hasOwnProperty("fx"))
                    for (n = 0, s = h.fx.length; n < s; n++)(c = f.getEffectIndexByName(h.fx[n].name)) < 0 || (t.active_effect_flags[c] = h.fx[n].active, t.effect_params[c] = h.fx[n].params);
                t.updateActiveEffects()
            }
            if (l = e.behs)
                for (r in l)
                    if (l.hasOwnProperty(r)) {
                        if ((u = this.getBehaviorIndexBySid(t, parseInt(r, 10))) < 0) continue;
                        t.behavior_insts[u].loadFromJSON(l[r])
                    }
            e.data && t.loadFromJSON(e.data)
        }, e.prototype.fetchLocalFileViaCordova = function(t, e, i) {
            var r = cordova.file.applicationDirectory + "www/" + t;
            window.resolveLocalFileSystemURL(r, function(t) {
                t.file(e, i)
            }, i)
        }, e.prototype.fetchLocalFileViaCordovaAsText = function(t, e, i) {
            this.fetchLocalFileViaCordova(t, function(t) {
                var r = new FileReader;
                r.onload = function(t) {
                    e(t.target.result)
                }, r.onerror = i, r.readAsText(t)
            }, i)
        };
        var I = [],
            R = 0;
        e.prototype.maybeStartNextArrayBufferRead = function() {
            if (I.length && !(R >= 8)) {
                R++;
                var t = I.shift();
                this.doFetchLocalFileViaCordovaAsArrayBuffer(t.filename, t.successCallback, t.errorCallback)
            }
        }, e.prototype.fetchLocalFileViaCordovaAsArrayBuffer = function(t, e, i) {
            var r = this;
            I.push({
                filename: t,
                successCallback: function(t) {
                    R--, r.maybeStartNextArrayBufferRead(), e(t)
                },
                errorCallback: function(t) {
                    R--, r.maybeStartNextArrayBufferRead(), i(t)
                }
            }), this.maybeStartNextArrayBufferRead()
        }, e.prototype.doFetchLocalFileViaCordovaAsArrayBuffer = function(t, e, i) {
            this.fetchLocalFileViaCordova(t, function(t) {
                var i = new FileReader;
                i.onload = function(t) {
                    e(t.target.result)
                }, i.readAsArrayBuffer(t)
            }, i)
        }, e.prototype.fetchLocalFileViaCordovaAsURL = function(t, e, i) {
            var r = "",
                n = t.toLowerCase(),
                s = n.substr(n.length - 4),
                a = n.substr(n.length - 5);
            ".mp4" === s ? r = "video/mp4" : ".webm" === a ? r = "video/webm" : ".m4a" === s ? r = "audio/mp4" : ".mp3" === s && (r = "audio/mpeg"), this.fetchLocalFileViaCordovaAsArrayBuffer(t, function(t) {
                var i = new Blob([t], {
                        type: r
                    }),
                    n = URL.createObjectURL(i);
                e(n)
            }, i)
        }, e.prototype.isAbsoluteUrl = function(t) {
            return /^(?:[a-z]+:)?\/\//.test(t) || "data:" === t.substr(0, 5) || "blob:" === t.substr(0, 5)
        }, e.prototype.setImageSrc = function(t, e) {
            this.isWKWebView && !this.isAbsoluteUrl(e) ? this.fetchLocalFileViaCordovaAsURL(e, function(e) {
                t.src = e
            }, function(t) {
                alert("Failed to load image: " + t)
            }) : t.src = e
        }, e.prototype.setCtxImageSmoothingEnabled = function(t, e) {
            void 0 !== t.imageSmoothingEnabled ? t.imageSmoothingEnabled = e : (t.webkitImageSmoothingEnabled = e, t.mozImageSmoothingEnabled = e, t.msImageSmoothingEnabled = e)
        }, cr.runtime = e, cr.createRuntime = function(t) {
            return new e(document.getElementById(t))
        }, cr.createDCRuntime = function(t, i) {
            return new e({
                dc: !0,
                width: t,
                height: i
            })
        }, window.cr_createRuntime = cr.createRuntime, window.cr_createDCRuntime = cr.createDCRuntime, window.createCocoonJSRuntime = function() {
            window.c2cocoonjs = !0;
            var t = document.createElement("screencanvas") || document.createElement("canvas");
            t.screencanvas = !0, document.body.appendChild(t);
            var i = new e(t);
            return window.c2runtime = i, window.addEventListener("orientationchange", function() {
                window.c2runtime.setSize(window.innerWidth, window.innerHeight)
            }), window.c2runtime.setSize(window.innerWidth, window.innerHeight), i
        }, window.createEjectaRuntime = function() {
            var t = new e(document.getElementById("canvas"));
            return window.c2runtime = t, window.c2runtime.setSize(window.innerWidth, window.innerHeight), t
        }
    }(), window.cr_getC2Runtime = function() {
        var t = document.getElementById("c2canvas");
        return t ? t.c2runtime : window.c2runtime ? window.c2runtime : null
    }, window.cr_getSnapshot = function(t, e) {
        var i = window.cr_getC2Runtime();
        i && i.doCanvasSnapshot(t, e)
    }, window.cr_sizeCanvas = function(t, e) {
        if (0 !== t && 0 !== e) {
            var i = window.cr_getC2Runtime();
            i && i.setSize(t, e)
        }
    }, window.cr_setSuspended = function(t) {
        var e = window.cr_getC2Runtime();
        e && e.setSuspended(t)
    },
    function() {
        function t(t, e) {
            this.runtime = t, this.event_sheet = null, this.scrollX = this.runtime.original_width / 2, this.scrollY = this.runtime.original_height / 2, this.scale = 1, this.angle = 0, this.first_visit = !0, this.name = e[0], this.originalWidth = e[1], this.originalHeight = e[2], this.width = e[1], this.height = e[2], this.unbounded_scrolling = e[3], this.sheetname = e[4], this.sid = e[5];
            var i, r, n = e[6];
            for (this.layers = [], this.initial_types = [], i = 0, r = n.length; i < r; i++) {
                var s = new cr.layer(this, n[i]);
                s.number = i, cr.seal(s), this.layers.push(s)
            }
            var a = e[7];
            for (this.initial_nonworld = [], i = 0, r = a.length; i < r; i++) {
                var o = a[i],
                    h = this.runtime.types_by_index[o[1]];
                h.default_instance || (h.default_instance = o), this.initial_nonworld.push(o), -1 === this.initial_types.indexOf(h) && this.initial_types.push(h)
            }
            for (this.effect_types = [], this.active_effect_types = [], this.shaders_preserve_opaqueness = !0, this.effect_params = [], i = 0, r = e[8].length; i < r; i++) this.effect_types.push({
                id: e[8][i][0],
                name: e[8][i][1],
                shaderindex: -1,
                preservesOpaqueness: !1,
                active: !0,
                index: i
            }), this.effect_params.push(e[8][i][2].slice(0));
            this.updateActiveEffects(), this.rcTex = new cr.rect(0, 0, 1, 1), this.rcTex2 = new cr.rect(0, 0, 1, 1), this.persist_data = {}
        }
        t.prototype.saveObjectToPersist = function(t) {
            var e = t.type.sid.toString();
            this.persist_data.hasOwnProperty(e) || (this.persist_data[e] = []), this.persist_data[e].push(this.runtime.saveInstanceToJSON(t))
        }, t.prototype.hasOpaqueBottomLayer = function() {
            var t = this.layers[0];
            return !t.transparent && 1 === t.opacity && !t.forceOwnTexture && t.visible
        }, t.prototype.updateActiveEffects = function() {
            var t, e, i;
            for (cr.clearArray(this.active_effect_types), this.shaders_preserve_opaqueness = !0, t = 0, e = this.effect_types.length; t < e; t++)(i = this.effect_types[t]).active && (this.active_effect_types.push(i), i.preservesOpaqueness || (this.shaders_preserve_opaqueness = !1))
        }, t.prototype.getEffectByName = function(t) {
            var e, i, r;
            for (e = 0, i = this.effect_types.length; e < i; e++)
                if ((r = this.effect_types[e]).name === t) return r;
            return null
        };
        var e = [];

        function i(t, e) {
            return t.zindex - e.zindex
        }
        var r = !0;
        t.prototype.startRunning = function() {
            var t, n, s, a, o, h, c, l, u, p, d, f, g, y;
            for (this.sheetname && (this.event_sheet = this.runtime.eventsheets[this.sheetname], this.event_sheet.updateDeepIncludes()), this.runtime.running_layout = this, this.width = this.originalWidth, this.height = this.originalHeight, this.scrollX = this.runtime.original_width / 2, this.scrollY = this.runtime.original_height / 2, t = 0, s = this.runtime.types_by_index.length; t < s; t++)
                if (!(o = this.runtime.types_by_index[t]).is_family)
                    for (n = 0, a = (h = o.instances).length; n < a; n++)
                        if ((l = h[n]).layer) {
                            var m = l.layer.number;
                            m >= this.layers.length && (m = this.layers.length - 1), l.layer = this.layers[m], -1 === l.layer.instances.indexOf(l) && l.layer.instances.push(l), l.layer.zindices_stale = !0
                        }
            if (!r)
                for (t = 0, s = this.layers.length; t < s; ++t) this.layers[t].instances.sort(i);
            for (cr.clearArray(e), this.boundScrolling(), t = 0, s = this.layers.length; t < s; t++)(y = this.layers[t]).createInitialInstances(), y.updateViewport(null);
            var _ = !1;
            if (!this.first_visit) {
                for (f in this.persist_data)
                    if (this.persist_data.hasOwnProperty(f)) {
                        if (!(o = this.runtime.getObjectTypeBySid(parseInt(f, 10))) || o.is_family || !this.runtime.typeHasPersistBehavior(o)) continue;
                        for (t = 0, s = (g = this.persist_data[f]).length; t < s; t++) y = null, o.plugin.is_world && !(y = this.getLayerBySid(g[t].w.l)) || (l = this.runtime.createInstanceFromInit(o.default_instance, y, !1, 0, 0, !0), this.runtime.loadInstanceFromJSON(l, g[t]), _ = !0, e.push(l));
                        cr.clearArray(g)
                    }
                for (t = 0, s = this.layers.length; t < s; t++) this.layers[t].instances.sort(i), this.layers[t].zindices_stale = !0
            }
            for (_ && (this.runtime.ClearDeathRow(), this.runtime.refreshUidMap()), t = 0; t < e.length; t++)
                if ((l = e[t]).type.is_contained)
                    for (u = l.get_iid(), n = 0, a = l.type.container.length; n < a; n++) p = l.type.container[n], l.type !== p && (p.instances.length > u ? l.siblings.push(p.instances[u]) : p.default_instance && (d = this.runtime.createInstanceFromInit(p.default_instance, l.layer, !0, l.x, l.y, !0), this.runtime.ClearDeathRow(), p.updateIIDs(), l.siblings.push(d), e.push(d)));
            for (t = 0, s = this.initial_nonworld.length; t < s; t++) c = this.initial_nonworld[t], (o = this.runtime.types_by_index[c[1]]).is_contained || (l = this.runtime.createInstanceFromInit(this.initial_nonworld[t], null, !0));
            if (this.runtime.changelayout = null, this.runtime.ClearDeathRow(), this.runtime.ctx && !this.runtime.isDomFree)
                for (t = 0, s = this.runtime.types_by_index.length; t < s; t++) !(p = this.runtime.types_by_index[t]).is_family && p.instances.length && p.preloadCanvas2D && p.preloadCanvas2D(this.runtime.ctx);
            if (this.runtime.isLoadingState) cr.shallowAssignArray(this.runtime.fireOnCreateAfterLoad, e);
            else
                for (t = 0, s = e.length; t < s; t++) l = e[t], this.runtime.trigger(Object.getPrototypeOf(l.type.plugin).cnds.OnCreated, l);
            cr.clearArray(e), this.runtime.isLoadingState || this.runtime.trigger(cr.system_object.prototype.cnds.OnLayoutStart, null), this.first_visit = !1
        }, t.prototype.createGlobalNonWorlds = function() {
            var t, e, i, r, n;
            for (t = 0, e = 0, i = this.initial_nonworld.length; t < i; t++) r = this.initial_nonworld[t], (n = this.runtime.types_by_index[r[1]]).global ? n.is_contained || this.runtime.createInstanceFromInit(r, null, !0) : (this.initial_nonworld[e] = r, e++);
            cr.truncateArray(this.initial_nonworld, e)
        }, t.prototype.stopRunning = function() {
            var t, e, i, n, s, a, o;
            if (this.runtime.isLoadingState || this.runtime.trigger(cr.system_object.prototype.cnds.OnLayoutEnd, null), this.runtime.isEndingLayout = !0, cr.clearArray(this.runtime.system.waits), !this.first_visit)
                for (t = 0, e = this.layers.length; t < e; t++)
                    for (this.layers[t].updateZIndices(), i = 0, n = (s = this.layers[t].instances).length; i < n; i++)(a = s[i]).type.global || this.runtime.typeHasPersistBehavior(a.type) && this.saveObjectToPersist(a);
            for (t = 0, e = this.layers.length; t < e; t++) {
                for (i = 0, n = (s = this.layers[t].instances).length; i < n; i++)(a = s[i]).type.global || this.runtime.DestroyInstance(a);
                this.runtime.ClearDeathRow(), cr.clearArray(s), this.layers[t].zindices_stale = !0
            }
            for (t = 0, e = this.runtime.types_by_index.length; t < e; t++)
                if (!((o = this.runtime.types_by_index[t]).global || o.plugin.is_world || o.plugin.singleglobal || o.is_family)) {
                    for (i = 0, n = o.instances.length; i < n; i++) this.runtime.DestroyInstance(o.instances[i]);
                    this.runtime.ClearDeathRow()
                }
            r = !1, this.runtime.isEndingLayout = !1
        };
        var n = new cr.rect(0, 0, 0, 0);

        function s(t, e) {
            this.layout = t, this.runtime = t.runtime, this.instances = [], this.scale = 1, this.angle = 0, this.disableAngle = !1, this.tmprect = new cr.rect(0, 0, 0, 0), this.tmpquad = new cr.quad, this.viewLeft = 0, this.viewRight = 0, this.viewTop = 0, this.viewBottom = 0, this.zindices_stale = !1, this.zindices_stale_from = -1, this.clear_earlyz_index = 0, this.name = e[0], this.index = e[1], this.sid = e[2], this.visible = e[3], this.background_color = e[4], this.transparent = e[5], this.parallaxX = e[6], this.parallaxY = e[7], this.opacity = e[8], this.forceOwnTexture = e[9], this.useRenderCells = e[10], this.zoomRate = e[11], this.blend_mode = e[12], this.effect_fallback = e[13], this.compositeOp = "source-over", this.srcBlend = 0, this.destBlend = 0, this.render_grid = null, this.last_render_list = o(), this.render_list_stale = !0, this.last_render_cells = new cr.rect(0, 0, -1, -1), this.cur_render_cells = new cr.rect(0, 0, -1, -1), this.useRenderCells && (this.render_grid = new cr.RenderGrid(this.runtime.original_width, this.runtime.original_height)), this.render_offscreen = !1;
            var i, r, n = e[14];
            for (this.startup_initial_instances = [], this.initial_instances = [], this.created_globals = [], i = 0, r = n.length; i < r; i++) {
                var s = n[i],
                    a = this.runtime.types_by_index[s[1]];
                a.default_instance || (a.default_instance = s, a.default_layerindex = this.index), this.initial_instances.push(s), -1 === this.layout.initial_types.indexOf(a) && this.layout.initial_types.push(a)
            }
            for (cr.shallowAssignArray(this.startup_initial_instances, this.initial_instances), this.effect_types = [], this.active_effect_types = [], this.shaders_preserve_opaqueness = !0, this.effect_params = [], i = 0, r = e[15].length; i < r; i++) this.effect_types.push({
                id: e[15][i][0],
                name: e[15][i][1],
                shaderindex: -1,
                preservesOpaqueness: !1,
                active: !0,
                index: i
            }), this.effect_params.push(e[15][i][2].slice(0));
            this.updateActiveEffects(), this.rcTex = new cr.rect(0, 0, 1, 1), this.rcTex2 = new cr.rect(0, 0, 1, 1)
        }
        t.prototype.recreateInitialObjects = function(t, e, i, r, s) {
            var a, o;
            for (n.set(e, i, r, s), a = 0, o = this.layers.length; a < o; a++) this.layers[a].recreateInitialObjects(t, n)
        }, t.prototype.draw = function(t) {
            var e, i, r, n, s = t,
                a = !1,
                o = !this.runtime.fullscreenScalingQuality;
            for (o && (this.runtime.layout_canvas || (this.runtime.layout_canvas = document.createElement("canvas"), (e = this.runtime.layout_canvas).width = this.runtime.draw_width, e.height = this.runtime.draw_height, this.runtime.layout_ctx = e.getContext("2d"), a = !0), e = this.runtime.layout_canvas, s = this.runtime.layout_ctx, e.width !== this.runtime.draw_width && (e.width = this.runtime.draw_width, a = !0), e.height !== this.runtime.draw_height && (e.height = this.runtime.draw_height, a = !0), a && this.runtime.setCtxImageSmoothingEnabled(s, this.runtime.linearSampling)), s.globalAlpha = 1, s.globalCompositeOperation = "source-over", this.runtime.clearBackground && !this.hasOpaqueBottomLayer() && s.clearRect(0, 0, this.runtime.draw_width, this.runtime.draw_height), i = 0, r = this.layers.length; i < r; i++)(n = this.layers[i]).visible && n.opacity > 0 && 11 !== n.blend_mode && (n.instances.length || !n.transparent) ? n.draw(s) : n.updateViewport(null);
            o && t.drawImage(e, 0, 0, this.runtime.width, this.runtime.height)
        }, t.prototype.drawGL_earlyZPass = function(t) {
            var e, i;
            for (t.setEarlyZPass(!0), this.runtime.layout_tex || (this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), this.runtime.layout_tex.c2width === this.runtime.draw_width && this.runtime.layout_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layout_tex), this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layout_tex), this.runtime.fullscreenScalingQuality || t.setSize(this.runtime.draw_width, this.runtime.draw_height), e = this.layers.length - 1; e >= 0; --e)(i = this.layers[e]).visible && 1 === i.opacity && i.shaders_preserve_opaqueness && 0 === i.blend_mode && (i.instances.length || !i.transparent) ? i.drawGL_earlyZPass(t) : i.updateViewport(null);
            t.setEarlyZPass(!1)
        }, t.prototype.drawGL = function(t) {
            var e, i, r, n = this.active_effect_types.length > 0 || this.runtime.uses_background_blending || !this.runtime.fullscreenScalingQuality || this.runtime.enableFrontToBack;
            for (n ? (this.runtime.layout_tex || (this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), this.runtime.layout_tex.c2width === this.runtime.draw_width && this.runtime.layout_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layout_tex), this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layout_tex), this.runtime.fullscreenScalingQuality || t.setSize(this.runtime.draw_width, this.runtime.draw_height)) : this.runtime.layout_tex && (t.setRenderingToTexture(null), t.deleteTexture(this.runtime.layout_tex), this.runtime.layout_tex = null), this.runtime.clearBackground && !this.hasOpaqueBottomLayer() && t.clear(0, 0, 0, 0), e = 0, i = this.layers.length; e < i; e++)(r = this.layers[e]).visible && r.opacity > 0 && (r.instances.length || !r.transparent) ? r.drawGL(t) : r.updateViewport(null);
            if (n)
                if (0 === this.active_effect_types.length || 1 === this.active_effect_types.length && this.runtime.fullscreenScalingQuality) {
                    if (1 === this.active_effect_types.length) {
                        var s = this.active_effect_types[0].index;
                        t.switchProgram(this.active_effect_types[0].shaderindex), t.setProgramParameters(null, 1 / this.runtime.draw_width, 1 / this.runtime.draw_height, 0, 0, 1, 1, this.scale, this.angle, 0, 0, this.runtime.draw_width / 2, this.runtime.draw_height / 2, this.runtime.kahanTime.sum, this.effect_params[s]), t.programIsAnimated(this.active_effect_types[0].shaderindex) && (this.runtime.redraw = !0)
                    } else t.switchProgram(0);
                    this.runtime.fullscreenScalingQuality || t.setSize(this.runtime.width, this.runtime.height), t.setRenderingToTexture(null), t.setDepthTestEnabled(!1), t.setOpacity(1), t.setTexture(this.runtime.layout_tex), t.setAlphaBlend(), t.resetModelView(), t.updateModelView();
                    var a = this.runtime.width / 2,
                        o = this.runtime.height / 2;
                    t.quad(-a, o, a, o, a, -o, -a, -o), t.setTexture(null), t.setDepthTestEnabled(!0)
                } else this.renderEffectChain(t, null, null, null)
        }, t.prototype.getRenderTarget = function() {
            return this.active_effect_types.length > 0 || this.runtime.uses_background_blending || !this.runtime.fullscreenScalingQuality || this.runtime.enableFrontToBack ? this.runtime.layout_tex : null
        }, t.prototype.getMinLayerScale = function() {
            var t, e, i, r = this.layers[0].getScale();
            for (t = 1, e = this.layers.length; t < e; t++) 0 === (i = this.layers[t]).parallaxX && 0 === i.parallaxY || i.getScale() < r && (r = i.getScale());
            return r
        }, t.prototype.scrollToX = function(t) {
            if (!this.unbounded_scrolling) {
                var e = this.runtime.draw_width * (1 / this.getMinLayerScale()) / 2;
                t > this.width - e && (t = this.width - e), t < e && (t = e)
            }
            this.scrollX !== t && (this.scrollX = t, this.runtime.redraw = !0)
        }, t.prototype.scrollToY = function(t) {
            if (!this.unbounded_scrolling) {
                var e = this.runtime.draw_height * (1 / this.getMinLayerScale()) / 2;
                t > this.height - e && (t = this.height - e), t < e && (t = e)
            }
            this.scrollY !== t && (this.scrollY = t, this.runtime.redraw = !0)
        }, t.prototype.boundScrolling = function() {
            this.scrollToX(this.scrollX), this.scrollToY(this.scrollY)
        }, t.prototype.renderEffectChain = function(t, e, i, r) {
            var n = i ? i.active_effect_types : e ? e.active_effect_types : this.active_effect_types,
                s = 1,
                a = 0,
                o = 0,
                h = 0,
                c = this.runtime.draw_width,
                l = this.runtime.draw_height;
            i ? (s = i.layer.getScale(), a = i.layer.getAngle(), o = i.layer.viewLeft, h = i.layer.viewTop, c = i.layer.viewRight, l = i.layer.viewBottom) : e && (s = e.getScale(), a = e.getAngle(), o = e.viewLeft, h = e.viewTop, c = e.viewRight, l = e.viewBottom);
            var u, p, d, f, g, y = this.runtime.fx_tex,
                m = 0,
                _ = 1,
                v = this.runtime.draw_width,
                b = this.runtime.draw_height,
                w = v / 2,
                x = b / 2,
                S = e ? e.rcTex : this.rcTex,
                T = e ? e.rcTex2 : this.rcTex2,
                O = 0,
                C = 0,
                A = 0,
                k = 0,
                E = v,
                P = v,
                L = b,
                I = b,
                R = 0,
                N = 0,
                B = i ? i.layer.getAngle() : 0;
            if (i) {
                for (u = 0, p = n.length; u < p; u++) R += t.getProgramBoxExtendHorizontal(n[u].shaderindex), N += t.getProgramBoxExtendVertical(n[u].shaderindex);
                var M = i.bbox;
                if (O = e.layerToCanvas(M.left, M.top, !0, !0), A = e.layerToCanvas(M.left, M.top, !1, !0), E = e.layerToCanvas(M.right, M.bottom, !0, !0), L = e.layerToCanvas(M.right, M.bottom, !1, !0), 0 !== B) {
                    var F = e.layerToCanvas(M.right, M.top, !0, !0),
                        j = e.layerToCanvas(M.right, M.top, !1, !0),
                        D = e.layerToCanvas(M.left, M.bottom, !0, !0),
                        W = e.layerToCanvas(M.left, M.bottom, !1, !0);
                    d = Math.min(O, E, F, D), E = Math.max(O, E, F, D), O = d, d = Math.min(A, L, j, W), L = Math.max(A, L, j, W), A = d
                }
                O -= R, A -= N, E += R, L += N, T.left = O / v, T.top = 1 - A / b, T.right = E / v, T.bottom = 1 - L / b, C = O = cr.floor(O), k = A = cr.floor(A), P = E = cr.ceil(E), I = L = cr.ceil(L), C -= R, k -= N, P += R, I += N, O < 0 && (O = 0), A < 0 && (A = 0), E > v && (E = v), L > b && (L = b), C < 0 && (C = 0), k < 0 && (k = 0), P > v && (P = v), I > b && (I = b), S.left = O / v, S.top = 1 - A / b, S.right = E / v, S.bottom = 1 - L / b
            } else S.left = T.left = 0, S.top = T.top = 0, S.right = T.right = 1, S.bottom = T.bottom = 1;
            var G = i && (t.programUsesDest(n[0].shaderindex) || 0 !== R || 0 !== N || 1 !== i.opacity || i.type.plugin.must_predraw) || e && !i && 1 !== e.opacity;
            t.setAlphaBlend(), G && (y[m] || (y[m] = t.createEmptyTexture(v, b, this.runtime.linearSampling)), y[m].c2width === v && y[m].c2height === b || (t.deleteTexture(y[m]), y[m] = t.createEmptyTexture(v, b, this.runtime.linearSampling)), t.switchProgram(0), t.setRenderingToTexture(y[m]), f = b - k - (g = I - k), t.clearRect(C, f, P - C, g), i ? i.drawGL(t) : (t.setTexture(this.runtime.layer_tex), t.setOpacity(e.opacity), t.resetModelView(), t.translate(-w, -x), t.updateModelView(), t.quadTex(O, L, E, L, E, A, O, A, S)), T.left = T.top = 0, T.right = T.bottom = 1, i && (d = S.top, S.top = S.bottom, S.bottom = d), m = 1, _ = 0), t.setOpacity(1);
            var V = n.length - 1,
                z = t.programUsesCrossSampling(n[V].shaderindex) || !e && !i && !this.runtime.fullscreenScalingQuality,
                U = 0;
            for (u = 0, p = n.length; u < p; u++) {
                if (y[m] || (y[m] = t.createEmptyTexture(v, b, this.runtime.linearSampling)), y[m].c2width === v && y[m].c2height === b || (t.deleteTexture(y[m]), y[m] = t.createEmptyTexture(v, b, this.runtime.linearSampling)), t.switchProgram(n[u].shaderindex), U = n[u].index, t.programIsAnimated(n[u].shaderindex) && (this.runtime.redraw = !0), 0 != u || G) t.setProgramParameters(r, 1 / v, 1 / b, T.left, T.top, T.right, T.bottom, s, a, o, h, (o + c) / 2, (h + l) / 2, this.runtime.kahanTime.sum, i ? i.effect_params[U] : e ? e.effect_params[U] : this.effect_params[U]), t.setTexture(null), u !== V || z ? (t.setRenderingToTexture(y[m]), f = b - k - (g = I - k), t.clearRect(C, f, P - C, g)) : (i ? t.setBlend(i.srcBlend, i.destBlend) : e && t.setBlend(e.srcBlend, e.destBlend), t.setRenderingToTexture(r)), t.setTexture(y[_]), t.resetModelView(), t.translate(-w, -x), t.updateModelView(), t.quadTex(O, L, E, L, E, A, O, A, S), u !== V || z || t.setTexture(null);
                else {
                    if (t.setRenderingToTexture(y[m]), f = b - k - (g = I - k), t.clearRect(C, f, P - C, g), i) {
                        var X, q;
                        if (i.curFrame && i.curFrame.texture_img) {
                            var H = i.curFrame.texture_img;
                            X = 1 / H.width, q = 1 / H.height
                        } else X = 1 / i.width, q = 1 / i.height;
                        t.setProgramParameters(r, X, q, T.left, T.top, T.right, T.bottom, s, a, o, h, (o + c) / 2, (h + l) / 2, this.runtime.kahanTime.sum, i.effect_params[U]), i.drawGL(t)
                    } else t.setProgramParameters(r, 1 / v, 1 / b, 0, 0, 1, 1, s, a, o, h, (o + c) / 2, (h + l) / 2, this.runtime.kahanTime.sum, e ? e.effect_params[U] : this.effect_params[U]), t.setTexture(e ? this.runtime.layer_tex : this.runtime.layout_tex), t.resetModelView(), t.translate(-w, -x), t.updateModelView(), t.quadTex(O, L, E, L, E, A, O, A, S);
                    T.left = T.top = 0, T.right = T.bottom = 1, i && !z && (d = L, L = A, A = d)
                }
                _ = 0 === (m = 0 === m ? 1 : 0) ? 1 : 0
            }
            z && (t.switchProgram(0), i ? t.setBlend(i.srcBlend, i.destBlend) : e ? t.setBlend(e.srcBlend, e.destBlend) : this.runtime.fullscreenScalingQuality || (t.setSize(this.runtime.width, this.runtime.height), w = this.runtime.width / 2, x = this.runtime.height / 2, O = 0, A = 0, E = this.runtime.width, L = this.runtime.height), t.setRenderingToTexture(r), t.setTexture(y[_]), t.resetModelView(), t.translate(-w, -x), t.updateModelView(), i && 1 === n.length && !G ? t.quadTex(O, A, E, A, E, L, O, L, S) : t.quadTex(O, L, E, L, E, A, O, A, S), t.setTexture(null))
        }, t.prototype.getLayerBySid = function(t) {
            var e, i;
            for (e = 0, i = this.layers.length; e < i; e++)
                if (this.layers[e].sid === t) return this.layers[e];
            return null
        }, t.prototype.saveToJSON = function() {
            var t, e, i, r, n = {
                sx: this.scrollX,
                sy: this.scrollY,
                s: this.scale,
                a: this.angle,
                w: this.width,
                h: this.height,
                fv: this.first_visit,
                persist: this.persist_data,
                fx: [],
                layers: {}
            };
            for (t = 0, e = this.effect_types.length; t < e; t++) r = this.effect_types[t], n.fx.push({
                name: r.name,
                active: r.active,
                params: this.effect_params[r.index]
            });
            for (t = 0, e = this.layers.length; t < e; t++) i = this.layers[t], n.layers[i.sid.toString()] = i.saveToJSON();
            return n
        }, t.prototype.loadFromJSON = function(t) {
            var e, i, r, n, s;
            this.scrollX = t.sx, this.scrollY = t.sy, this.scale = t.s, this.angle = t.a, this.width = t.w, this.height = t.h, this.persist_data = t.persist, void 0 !== t.fv && (this.first_visit = t.fv);
            var a = t.fx;
            for (e = 0, i = a.length; e < i; e++)(r = this.getEffectByName(a[e].name)) && (r.active = a[e].active, this.effect_params[r.index] = a[e].params);
            this.updateActiveEffects();
            var o = t.layers;
            for (n in o)
                if (o.hasOwnProperty(n)) {
                    if (!(s = this.getLayerBySid(parseInt(n, 10)))) continue;
                    s.loadFromJSON(o[n])
                }
        }, cr.layout = t, s.prototype.updateActiveEffects = function() {
            var t, e, i;
            for (cr.clearArray(this.active_effect_types), this.shaders_preserve_opaqueness = !0, t = 0, e = this.effect_types.length; t < e; t++)(i = this.effect_types[t]).active && (this.active_effect_types.push(i), i.preservesOpaqueness || (this.shaders_preserve_opaqueness = !1))
        }, s.prototype.getEffectByName = function(t) {
            var e, i, r;
            for (e = 0, i = this.effect_types.length; e < i; e++)
                if ((r = this.effect_types[e]).name === t) return r;
            return null
        }, s.prototype.createInitialInstances = function() {
            var t, i, r, n, s, a, o;
            for (t = 0, i = 0, r = this.initial_instances.length; t < r; t++) {
                if (s = this.initial_instances[t], a = this.runtime.types_by_index[s[1]], o = !0, !this.runtime.typeHasPersistBehavior(a) || this.layout.first_visit) {
                    if (!(n = this.runtime.createInstanceFromInit(s, this, !0))) continue;
                    e.push(n), n.type.global && (o = !1, this.created_globals.push(n.uid))
                }
                o && (this.initial_instances[i] = this.initial_instances[t], i++)
            }
            this.initial_instances.length = i, this.runtime.ClearDeathRow(), !this.runtime.glwrap && this.effect_types.length && (this.blend_mode = this.effect_fallback), this.compositeOp = cr.effectToCompositeOp(this.blend_mode), this.runtime.gl && cr.setGLBlend(this, this.blend_mode, this.runtime.gl), this.render_list_stale = !0
        }, s.prototype.recreateInitialObjects = function(t, e) {
            var i, r, n, s, a, o, h, c, l, u, p, d = this.runtime.types_by_index,
                f = t.is_family,
                g = t.members;
            for (i = 0, r = this.initial_instances.length; i < r; ++i)
                if (o = (a = (n = this.initial_instances[i])[0])[0], h = a[1], e.contains_pt(o, h)) {
                    if ((s = d[n[1]]) !== t) {
                        if (!f) continue;
                        if (g.indexOf(s) < 0) continue
                    }
                    if (c = this.runtime.createInstanceFromInit(n, this, !1), this.runtime.isInOnDestroy++, this.runtime.trigger(Object.getPrototypeOf(s.plugin).cnds.OnCreated, c), c.is_contained)
                        for (l = 0, u = c.siblings.length; l < u; l++) p = c.siblings[i], this.runtime.trigger(Object.getPrototypeOf(p.type.plugin).cnds.OnCreated, p);
                    this.runtime.isInOnDestroy--
                }
        }, s.prototype.removeFromInstanceList = function(t, e) {
            var i = cr.fastIndexOf(this.instances, t);
            i < 0 || (e && this.useRenderCells && t.rendercells && t.rendercells.right >= t.rendercells.left && (t.update_bbox(), this.render_grid.update(t, t.rendercells, null), t.rendercells.set(0, 0, -1, -1)), i === this.instances.length - 1 ? this.instances.pop() : (cr.arrayRemove(this.instances, i), this.setZIndicesStaleFrom(i)), this.render_list_stale = !0)
        }, s.prototype.appendToInstanceList = function(t, e) {
            t.zindex = this.instances.length, this.instances.push(t), e && this.useRenderCells && t.rendercells && t.set_bbox_changed(), this.render_list_stale = !0
        }, s.prototype.prependToInstanceList = function(t, e) {
            this.instances.unshift(t), this.setZIndicesStaleFrom(0), e && this.useRenderCells && t.rendercells && t.set_bbox_changed()
        }, s.prototype.moveInstanceAdjacent = function(t, e, i) {
            var r = t.get_zindex(),
                n = e.get_zindex();
            cr.arrayRemove(this.instances, r), r < n && n--, i && n++, n === this.instances.length ? this.instances.push(t) : this.instances.splice(n, 0, t), this.setZIndicesStaleFrom(r < n ? r : n)
        }, s.prototype.setZIndicesStaleFrom = function(t) {
            -1 === this.zindices_stale_from ? this.zindices_stale_from = t : t < this.zindices_stale_from && (this.zindices_stale_from = t), this.zindices_stale = !0, this.render_list_stale = !0
        }, s.prototype.updateZIndices = function() {
            if (this.zindices_stale) {
                var t, e, i;
                if (-1 === this.zindices_stale_from && (this.zindices_stale_from = 0), this.useRenderCells)
                    for (t = this.zindices_stale_from, e = this.instances.length; t < e; ++t)(i = this.instances[t]).zindex = t, this.render_grid.markRangeChanged(i.rendercells);
                else
                    for (t = this.zindices_stale_from, e = this.instances.length; t < e; ++t) this.instances[t].zindex = t;
                this.zindices_stale = !1, this.zindices_stale_from = -1
            }
        }, s.prototype.getScale = function(t) {
            return this.getNormalScale() * (this.runtime.fullscreenScalingQuality || t ? this.runtime.aspect_scale : 1)
        }, s.prototype.getNormalScale = function() {
            return (this.scale * this.layout.scale - 1) * this.zoomRate + 1
        }, s.prototype.getAngle = function() {
            return this.disableAngle ? 0 : cr.clamp_angle(this.layout.angle + this.angle)
        };
        var a = [];

        function o() {
            return a.length ? a.pop() : []
        }

        function h(t) {
            cr.clearArray(t), a.push(t)
        }

        function c(t, e, i) {
            var r, n, s = 0,
                a = 0,
                o = 0,
                h = t.length,
                c = e.length;
            for (i.length = h + c; s < h && a < c; ++o) r = t[s], n = e[a], r.zindex < n.zindex ? (i[o] = r, ++s) : (i[o] = n, ++a);
            for (; s < h; ++s, ++o) i[o] = t[s];
            for (; a < c; ++a, ++o) i[o] = e[a]
        }
        var l = [];

        function u(t, e) {
            var i, r, n, s, a;
            for (i = 0, r = t.length; i < r - 1; i += 2) c(n = t[i], s = t[i + 1], a = o()), e || (h(n), h(s)), l.push(a);
            r % 2 == 1 && (e ? (n = o(), cr.shallowAssignArray(n, t[r - 1]), l.push(n)) : l.push(t[r - 1])), cr.shallowAssignArray(t, l), cr.clearArray(l)
        }
        var p = [];
        s.prototype.getRenderCellInstancesToDraw = function() {
            if (this.updateZIndices(), this.render_grid.queryRange(this.viewLeft, this.viewTop, this.viewRight, this.viewBottom, p), !p.length) return o();
            if (1 === p.length) {
                var t = o();
                return cr.shallowAssignArray(t, p[0]), cr.clearArray(p), t
            }
            var e = function(t) {
                for (var e = !0; t.length > 1;) u(t, e), e = !1;
                return t[0]
            }(p);
            return cr.clearArray(p), e
        }, s.prototype.draw = function(t) {
            this.render_offscreen = this.forceOwnTexture || 1 !== this.opacity || 0 !== this.blend_mode;
            var e = this.runtime.canvas,
                i = t,
                r = !1;
            this.render_offscreen && (this.runtime.layer_canvas || (this.runtime.layer_canvas = document.createElement("canvas"), (e = this.runtime.layer_canvas).width = this.runtime.draw_width, e.height = this.runtime.draw_height, this.runtime.layer_ctx = e.getContext("2d"), r = !0), e = this.runtime.layer_canvas, i = this.runtime.layer_ctx, e.width !== this.runtime.draw_width && (e.width = this.runtime.draw_width, r = !0), e.height !== this.runtime.draw_height && (e.height = this.runtime.draw_height, r = !0), r && this.runtime.setCtxImageSmoothingEnabled(i, this.runtime.linearSampling), this.transparent && i.clearRect(0, 0, this.runtime.draw_width, this.runtime.draw_height)), i.globalAlpha = 1, i.globalCompositeOperation = "source-over", this.transparent || (i.fillStyle = "rgb(" + this.background_color[0] + "," + this.background_color[1] + "," + this.background_color[2] + ")", i.fillRect(0, 0, this.runtime.draw_width, this.runtime.draw_height)), i.save(), this.disableAngle = !0;
            var n = this.canvasToLayer(0, 0, !0, !0),
                s = this.canvasToLayer(0, 0, !1, !0);
            this.disableAngle = !1, this.runtime.pixel_rounding && (n = Math.round(n), s = Math.round(s)), this.rotateViewport(n, s, i);
            var a, o = this.getScale();
            i.scale(o, o), i.translate(-n, -s), this.useRenderCells ? (this.cur_render_cells.left = this.render_grid.XToCell(this.viewLeft), this.cur_render_cells.top = this.render_grid.YToCell(this.viewTop), this.cur_render_cells.right = this.render_grid.XToCell(this.viewRight), this.cur_render_cells.bottom = this.render_grid.YToCell(this.viewBottom), this.render_list_stale || !this.cur_render_cells.equals(this.last_render_cells) ? (h(this.last_render_list), a = this.getRenderCellInstancesToDraw(), this.render_list_stale = !1, this.last_render_cells.copy(this.cur_render_cells)) : a = this.last_render_list) : a = this.instances;
            var c, l, u, p = null;
            for (c = 0, l = a.length; c < l; ++c)(u = a[c]) !== p && (this.drawInstance(u, i), p = u);
            this.useRenderCells && (this.last_render_list = a), i.restore(), this.render_offscreen && (t.globalCompositeOperation = this.compositeOp, t.globalAlpha = this.opacity, t.drawImage(e, 0, 0))
        }, s.prototype.drawInstance = function(t, e) {
            if (t.visible && 0 !== t.width && 0 !== t.height) {
                t.update_bbox();
                var i = t.bbox;
                i.right < this.viewLeft || i.bottom < this.viewTop || i.left > this.viewRight || i.top > this.viewBottom || (e.globalCompositeOperation = t.compositeOp, t.draw(e))
            }
        }, s.prototype.updateViewport = function(t) {
            this.disableAngle = !0;
            var e = this.canvasToLayer(0, 0, !0, !0),
                i = this.canvasToLayer(0, 0, !1, !0);
            this.disableAngle = !1, this.runtime.pixel_rounding && (e = Math.round(e), i = Math.round(i)), this.rotateViewport(e, i, t)
        }, s.prototype.rotateViewport = function(t, e, i) {
            var r, n = this.getScale();
            this.viewLeft = t, this.viewTop = e, this.viewRight = t + this.runtime.draw_width * (1 / n), this.viewBottom = e + this.runtime.draw_height * (1 / n), this.viewLeft > this.viewRight && (r = this.viewLeft, this.viewLeft = this.viewRight, this.viewRight = r), this.viewTop > this.viewBottom && (r = this.viewTop, this.viewTop = this.viewBottom, this.viewBottom = r);
            var s = this.getAngle();
            0 !== s && (i && (i.translate(this.runtime.draw_width / 2, this.runtime.draw_height / 2), i.rotate(-s), i.translate(this.runtime.draw_width / -2, this.runtime.draw_height / -2)), this.tmprect.set(this.viewLeft, this.viewTop, this.viewRight, this.viewBottom), this.tmprect.offset((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), this.tmpquad.set_from_rotated_rect(this.tmprect, s), this.tmpquad.bounding_box(this.tmprect), this.tmprect.offset((this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2), this.viewLeft = this.tmprect.left, this.viewTop = this.tmprect.top, this.viewRight = this.tmprect.right, this.viewBottom = this.tmprect.bottom)
        }, s.prototype.drawGL_earlyZPass = function(t) {
            this.runtime.draw_width, this.runtime.draw_height;
            this.render_offscreen = this.forceOwnTexture, this.render_offscreen && (this.runtime.layer_tex || (this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), this.runtime.layer_tex.c2width === this.runtime.draw_width && this.runtime.layer_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layer_tex), this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layer_tex)), this.disableAngle = !0;
            var e = this.canvasToLayer(0, 0, !0, !0),
                i = this.canvasToLayer(0, 0, !1, !0);
            this.disableAngle = !1, this.runtime.pixel_rounding && (e = Math.round(e), i = Math.round(i)), this.rotateViewport(e, i, null);
            var r, n = this.getScale();
            t.resetModelView(), t.scale(n, n), t.rotateZ(-this.getAngle()), t.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), t.updateModelView(), this.useRenderCells ? (this.cur_render_cells.left = this.render_grid.XToCell(this.viewLeft), this.cur_render_cells.top = this.render_grid.YToCell(this.viewTop), this.cur_render_cells.right = this.render_grid.XToCell(this.viewRight), this.cur_render_cells.bottom = this.render_grid.YToCell(this.viewBottom), this.render_list_stale || !this.cur_render_cells.equals(this.last_render_cells) ? (h(this.last_render_list), r = this.getRenderCellInstancesToDraw(), this.render_list_stale = !1, this.last_render_cells.copy(this.cur_render_cells)) : r = this.last_render_list) : r = this.instances;
            var s, a, o = null;
            for (s = r.length - 1; s >= 0; --s)(a = r[s]) !== o && (this.drawInstanceGL_earlyZPass(r[s], t), o = a);
            this.useRenderCells && (this.last_render_list = r), this.transparent || (this.clear_earlyz_index = this.runtime.earlyz_index++, t.setEarlyZIndex(this.clear_earlyz_index), t.setColorFillMode(1, 1, 1, 1), t.fullscreenQuad(), t.restoreEarlyZMode())
        }, s.prototype.drawGL = function(t) {
            this.runtime.draw_width, this.runtime.draw_height;
            var e = 0,
                i = 0;
            this.render_offscreen = this.forceOwnTexture || 1 !== this.opacity || this.active_effect_types.length > 0 || 0 !== this.blend_mode, this.render_offscreen && (this.runtime.layer_tex || (this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), this.runtime.layer_tex.c2width === this.runtime.draw_width && this.runtime.layer_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layer_tex), this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layer_tex), this.transparent && t.clear(0, 0, 0, 0)), this.transparent || (this.runtime.enableFrontToBack ? (t.setEarlyZIndex(this.clear_earlyz_index), t.setColorFillMode(this.background_color[0] / 255, this.background_color[1] / 255, this.background_color[2] / 255, 1), t.fullscreenQuad(), t.setTextureFillMode()) : t.clear(this.background_color[0] / 255, this.background_color[1] / 255, this.background_color[2] / 255, 1)), this.disableAngle = !0;
            var r = this.canvasToLayer(0, 0, !0, !0),
                n = this.canvasToLayer(0, 0, !1, !0);
            this.disableAngle = !1, this.runtime.pixel_rounding && (r = Math.round(r), n = Math.round(n)), this.rotateViewport(r, n, null);
            var s, a = this.getScale();
            t.resetModelView(), t.scale(a, a), t.rotateZ(-this.getAngle()), t.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), t.updateModelView(), this.useRenderCells ? (this.cur_render_cells.left = this.render_grid.XToCell(this.viewLeft), this.cur_render_cells.top = this.render_grid.YToCell(this.viewTop), this.cur_render_cells.right = this.render_grid.XToCell(this.viewRight), this.cur_render_cells.bottom = this.render_grid.YToCell(this.viewBottom), this.render_list_stale || !this.cur_render_cells.equals(this.last_render_cells) ? (h(this.last_render_list), s = this.getRenderCellInstancesToDraw(), this.render_list_stale = !1, this.last_render_cells.copy(this.cur_render_cells)) : s = this.last_render_list) : s = this.instances;
            var o, c, l, u = null;
            for (o = 0, c = s.length; o < c; ++o)(l = s[o]) !== u && (this.drawInstanceGL(s[o], t), u = l);
            if (this.useRenderCells && (this.last_render_list = s), this.render_offscreen)
                if (e = this.active_effect_types.length ? this.active_effect_types[0].shaderindex : 0, i = this.active_effect_types.length ? this.active_effect_types[0].index : 0, 0 === this.active_effect_types.length || 1 === this.active_effect_types.length && !t.programUsesCrossSampling(e) && 1 === this.opacity) {
                    1 === this.active_effect_types.length ? (t.switchProgram(e), t.setProgramParameters(this.layout.getRenderTarget(), 1 / this.runtime.draw_width, 1 / this.runtime.draw_height, 0, 0, 1, 1, a, this.getAngle(), this.viewLeft, this.viewTop, (this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2, this.runtime.kahanTime.sum, this.effect_params[i]), t.programIsAnimated(e) && (this.runtime.redraw = !0)) : t.switchProgram(0), t.setRenderingToTexture(this.layout.getRenderTarget()), t.setOpacity(this.opacity), t.setTexture(this.runtime.layer_tex), t.setBlend(this.srcBlend, this.destBlend), t.resetModelView(), t.updateModelView();
                    var p = this.runtime.draw_width / 2,
                        d = this.runtime.draw_height / 2;
                    t.quad(-p, d, p, d, p, -d, -p, -d), t.setTexture(null)
                } else this.layout.renderEffectChain(t, this, null, this.layout.getRenderTarget())
        }, s.prototype.drawInstanceGL = function(t, e) {
            if (t.visible && 0 !== t.width && 0 !== t.height) {
                t.update_bbox();
                var i = t.bbox;
                i.right < this.viewLeft || i.bottom < this.viewTop || i.left > this.viewRight || i.top > this.viewBottom || (e.setEarlyZIndex(t.earlyz_index), t.uses_shaders ? this.drawInstanceWithShadersGL(t, e) : (e.switchProgram(0), e.setBlend(t.srcBlend, t.destBlend), t.drawGL(e)))
            }
        }, s.prototype.drawInstanceGL_earlyZPass = function(t, e) {
            if (t.visible && 0 !== t.width && 0 !== t.height) {
                t.update_bbox();
                var i = t.bbox;
                i.right < this.viewLeft || i.bottom < this.viewTop || i.left > this.viewRight || i.top > this.viewBottom || (t.earlyz_index = this.runtime.earlyz_index++, 0 === t.blend_mode && 1 === t.opacity && t.shaders_preserve_opaqueness && t.drawGL_earlyZPass && (e.setEarlyZIndex(t.earlyz_index), t.drawGL_earlyZPass(e)))
            }
        }, s.prototype.drawInstanceWithShadersGL = function(t, e) {
            var i = t.active_effect_types[0].shaderindex,
                r = t.active_effect_types[0].index,
                n = this.getScale();
            if (1 !== t.active_effect_types.length || e.programUsesCrossSampling(i) || e.programExtendsBox(i) || (t.angle || t.layer.getAngle()) && e.programUsesDest(i) || 1 !== t.opacity || t.type.plugin.must_predraw) this.layout.renderEffectChain(e, this, t, this.render_offscreen ? this.runtime.layer_tex : this.layout.getRenderTarget()), e.resetModelView(), e.scale(n, n), e.rotateZ(-this.getAngle()), e.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), e.updateModelView();
            else {
                e.switchProgram(i), e.setBlend(t.srcBlend, t.destBlend), e.programIsAnimated(i) && (this.runtime.redraw = !0);
                var s, a, o = 0,
                    h = 0,
                    c = 0,
                    l = 0;
                if (e.programUsesDest(i)) {
                    var u = t.bbox,
                        p = this.layerToCanvas(u.left, u.top, !0, !0),
                        d = this.layerToCanvas(u.left, u.top, !1, !0),
                        f = this.layerToCanvas(u.right, u.bottom, !0, !0),
                        g = this.layerToCanvas(u.right, u.bottom, !1, !0);
                    o = p / windowWidth, h = 1 - d / windowHeight, c = f / windowWidth, l = 1 - g / windowHeight
                }
                if (t.curFrame && t.curFrame.texture_img) {
                    var y = t.curFrame.texture_img;
                    s = 1 / y.width, a = 1 / y.height
                } else s = 1 / t.width, a = 1 / t.height;
                e.setProgramParameters(this.render_offscreen ? this.runtime.layer_tex : this.layout.getRenderTarget(), s, a, o, h, c, l, n, this.getAngle(), this.viewLeft, this.viewTop, (this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2, this.runtime.kahanTime.sum, t.effect_params[r]), t.drawGL(e)
            }
        }, s.prototype.canvasToLayer = function(t, e, i, r) {
            var n = this.runtime.devicePixelRatio;
            this.runtime.isRetina && (t *= n, e *= n);
            var s = this.runtime.parallax_x_origin,
                a = this.runtime.parallax_y_origin,
                o = (this.layout.scrollX - s) * this.parallaxX + s,
                h = (this.layout.scrollY - a) * this.parallaxY + a,
                c = o,
                l = h,
                u = 1 / this.getScale(!r);
            r ? (c -= this.runtime.draw_width * u / 2, l -= this.runtime.draw_height * u / 2) : (c -= this.runtime.width * u / 2, l -= this.runtime.height * u / 2), c += t * u, l += e * u;
            var p = this.getAngle();
            if (0 !== p) {
                c -= o, l -= h;
                var d = Math.cos(p),
                    f = Math.sin(p),
                    g = c * d - l * f;
                l = l * d + c * f, c = g, c += o, l += h
            }
            return i ? c : l
        }, s.prototype.layerToCanvas = function(t, e, i, r) {
            var n = this.runtime.parallax_x_origin,
                s = this.runtime.parallax_y_origin,
                a = (this.layout.scrollX - n) * this.parallaxX + n,
                o = (this.layout.scrollY - s) * this.parallaxY + s,
                h = a,
                c = o,
                l = this.getAngle();
            if (0 !== l) {
                t -= a, e -= o;
                var u = Math.cos(-l),
                    p = Math.sin(-l),
                    d = t * u - e * p;
                e = e * u + t * p, t = d, t += a, e += o
            }
            var f = 1 / this.getScale(!r);
            r ? (h -= this.runtime.draw_width * f / 2, c -= this.runtime.draw_height * f / 2) : (h -= this.runtime.width * f / 2, c -= this.runtime.height * f / 2), h = (t - h) / f, c = (e - c) / f;
            var g = this.runtime.devicePixelRatio;
            return this.runtime.isRetina && !r && (h /= g, c /= g), i ? h : c
        }, s.prototype.rotatePt = function(t, e, i) {
            if (0 === this.getAngle()) return i ? t : e;
            var r = this.layerToCanvas(t, e, !0),
                n = this.layerToCanvas(t, e, !1);
            this.disableAngle = !0;
            var s = this.canvasToLayer(r, n, !0),
                a = this.canvasToLayer(r, n, !0);
            return this.disableAngle = !1, i ? s : a
        }, s.prototype.saveToJSON = function() {
            var t, e, i, r = {
                s: this.scale,
                a: this.angle,
                vl: this.viewLeft,
                vt: this.viewTop,
                vr: this.viewRight,
                vb: this.viewBottom,
                v: this.visible,
                bc: this.background_color,
                t: this.transparent,
                px: this.parallaxX,
                py: this.parallaxY,
                o: this.opacity,
                zr: this.zoomRate,
                fx: [],
                cg: this.created_globals,
                instances: []
            };
            for (t = 0, e = this.effect_types.length; t < e; t++) i = this.effect_types[t], r.fx.push({
                name: i.name,
                active: i.active,
                params: this.effect_params[i.index]
            });
            return r
        }, s.prototype.loadFromJSON = function(t) {
            var e, r, n, s;
            this.scale = t.s, this.angle = t.a, this.viewLeft = t.vl, this.viewTop = t.vt, this.viewRight = t.vr, this.viewBottom = t.vb, this.visible = t.v, this.background_color = t.bc, this.transparent = t.t, this.parallaxX = t.px, this.parallaxY = t.py, this.opacity = t.o, this.zoomRate = t.zr, this.created_globals = t.cg || [], cr.shallowAssignArray(this.initial_instances, this.startup_initial_instances);
            var a = new cr.ObjectSet;
            for (e = 0, n = this.created_globals.length; e < n; ++e) a.add(this.created_globals[e]);
            for (e = 0, r = 0, n = this.initial_instances.length; e < n; ++e) a.contains(this.initial_instances[e][2]) || (this.initial_instances[r] = this.initial_instances[e], ++r);
            cr.truncateArray(this.initial_instances, r);
            var o = t.fx;
            for (e = 0, n = o.length; e < n; e++)(s = this.getEffectByName(o[e].name)) && (s.active = o[e].active, this.effect_params[s.index] = o[e].params);
            this.updateActiveEffects(), this.instances.sort(i), this.zindices_stale = !0
        }, cr.layer = s
    }(),
    function() {
        var t = [];

        function e(t, e) {
            var i, r = t.length;
            switch (r) {
                case 0:
                    return !0;
                case 1:
                    return t[0] === e[0];
                case 2:
                    return t[0] === e[0] && t[1] === e[1];
                default:
                    for (i = 0; i < r; i++)
                        if (t[i] !== e[i]) return !1;
                    return !0
            }
        }

        function i(t, e) {
            return t.index - e.index
        }

        function r(r) {
            var n, s, a, o, h;
            for (2 === r.length ? r[0].index > r[1].index && (o = r[0], r[0] = r[1], r[1] = o) : r.length > 2 && r.sort(i), r.length >= t.length && (t.length = r.length + 1), t[r.length] || (t[r.length] = []), n = 0, s = (h = t[r.length]).length; n < s; n++)
                if (e(r, a = h[n])) return a;
            return h.push(r), r
        }

        function n(t, e) {
            this.runtime = t, this.triggers = {}, this.fasttriggers = {}, this.hasRun = !1, this.includes = new cr.ObjectSet, this.deep_includes = [], this.already_included_sheets = [], this.name = e[0];
            var i, r, n = e[1];
            for (this.events = [], i = 0, r = n.length; i < r; i++) this.init_event(n[i], null, this.events)
        }

        function s(t) {
            this.type = t, this.instances = [], this.else_instances = [], this.select_all = !0
        }

        function a(t, e, i) {
            var r, n;
            this.sheet = t, this.parent = e, this.runtime = t.runtime, this.solModifiers = [], this.solModifiersIncludingParents = [], this.solWriterAfterCnds = !1, this.group = !1, this.initially_activated = !1, this.toplevelevent = !1, this.toplevelgroup = !1, this.has_else_block = !1, this.conditions = [], this.actions = [], this.subevents = [], this.group_name = "", this.group = !1, this.initially_activated = !1, this.group_active = !1, this.contained_includes = null, i[1] && (this.group_name = i[1][1].toLowerCase(), this.group = !0, this.initially_activated = !!i[1][0], this.contained_includes = [], this.group_active = this.initially_activated, this.runtime.allGroups.push(this), this.runtime.groups_by_name[this.group_name] = this), this.orblock = i[2], this.sid = i[4], this.group || (this.runtime.blocksBySid[this.sid.toString()] = this);
            var s = i[5];
            for (r = 0, n = s.length; r < n; r++) {
                var a = new cr.condition(this, s[r]);
                a.index = r, cr.seal(a), this.conditions.push(a), this.addSolModifier(a.type)
            }
            var o = i[6];
            for (r = 0, n = o.length; r < n; r++) {
                var h = new cr.action(this, o[r]);
                h.index = r, cr.seal(h), this.actions.push(h)
            }
            if (8 === i.length) {
                var c = i[7];
                for (r = 0, n = c.length; r < n; r++) this.sheet.init_event(c[r], this, this.subevents)
            }
            this.is_else_block = !1, this.conditions.length && (this.is_else_block = null == this.conditions[0].type && this.conditions[0].func == cr.system_object.prototype.cnds.Else)
        }

        function o(t, e) {
            var i, r, n;
            if (t && (-1 === e.indexOf(t) && e.push(t), t.is_contained))
                for (i = 0, r = t.container.length; i < r; i++) t !== (n = t.container[i]) && -1 === e.indexOf(n) && e.push(n)
        }

        function h(t, e) {
            if (this.block = t, this.sheet = t.sheet, this.runtime = t.runtime, this.parameters = [], this.results = [], this.extra = {}, this.index = -1, this.anyParamVariesPerInstance = !1, this.func = this.runtime.GetObjectReference(e[1]), this.trigger = e[3] > 0, this.fasttrigger = 2 === e[3], this.looping = e[4], this.inverted = e[5], this.isstatic = e[6], this.sid = e[7], this.runtime.cndsBySid[this.sid.toString()] = this, -1 === e[0] ? (this.type = null, this.run = this.run_system, this.behaviortype = null, this.beh_index = -1) : (this.type = this.runtime.types_by_index[e[0]], this.isstatic ? this.run = this.run_static : this.run = this.run_object, e[2] ? (this.behaviortype = this.type.getBehaviorByName(e[2]), this.beh_index = this.type.getBehaviorIndexByName(e[2])) : (this.behaviortype = null, this.beh_index = -1), this.block.parent && this.block.parent.setSolWriterAfterCnds()), this.fasttrigger && (this.run = this.run_true), 10 === e.length) {
                var i, r, n = e[9];
                for (i = 0, r = n.length; i < r; i++) {
                    var s = new cr.parameter(this, n[i]);
                    cr.seal(s), this.parameters.push(s)
                }
                this.results.length = n.length
            }
        }

        function c(t, e) {
            if (this.block = t, this.sheet = t.sheet, this.runtime = t.runtime, this.parameters = [], this.results = [], this.extra = {}, this.index = -1, this.anyParamVariesPerInstance = !1, this.func = this.runtime.GetObjectReference(e[1]), -1 === e[0] ? (this.type = null, this.run = this.run_system, this.behaviortype = null, this.beh_index = -1) : (this.type = this.runtime.types_by_index[e[0]], this.run = this.run_object, e[2] ? (this.behaviortype = this.type.getBehaviorByName(e[2]), this.beh_index = this.type.getBehaviorIndexByName(e[2])) : (this.behaviortype = null, this.beh_index = -1)), this.sid = e[3], this.runtime.actsBySid[this.sid.toString()] = this, 6 === e.length) {
                var i, r, n = e[5];
                for (i = 0, r = n.length; i < r; i++) {
                    var s = new cr.parameter(this, n[i]);
                    cr.seal(s), this.parameters.push(s)
                }
                this.results.length = n.length
            }
        }
        n.prototype.toString = function() {
            return this.name
        }, n.prototype.init_event = function(t, e, i) {
            switch (t[0]) {
                case 0:
                    var r, n, s = new cr.eventblock(this, e, t);
                    if (cr.seal(s), s.orblock)
                        for (i.push(s), r = 0, n = s.conditions.length; r < n; r++) s.conditions[r].trigger && this.init_trigger(s, r);
                    else s.is_trigger() ? this.init_trigger(s, 0) : i.push(s);
                    break;
                case 1:
                    var a = new cr.eventvariable(this, e, t);
                    cr.seal(a), i.push(a);
                    break;
                case 2:
                    var o = new cr.eventinclude(this, e, t);
                    cr.seal(o), i.push(o)
            }
        }, n.prototype.postInit = function() {
            var t, e;
            for (t = 0, e = this.events.length; t < e; t++) this.events[t].postInit(t < e - 1 && this.events[t + 1].is_else_block)
        }, n.prototype.updateDeepIncludes = function() {
            cr.clearArray(this.deep_includes), cr.clearArray(this.already_included_sheets), this.addDeepIncludes(this), cr.clearArray(this.already_included_sheets)
        }, n.prototype.addDeepIncludes = function(t) {
            var e, i, r, n, s = t.deep_includes,
                a = t.already_included_sheets,
                o = this.includes.valuesRef();
            for (e = 0, i = o.length; e < i; ++e) n = (r = o[e]).include_sheet, !r.isActive() || t === n || a.indexOf(n) > -1 || (a.push(n), n.addDeepIncludes(t), s.push(n))
        }, n.prototype.run = function(t) {
            var e, i;
            for (this.runtime.resuming_breakpoint || (this.hasRun = !0, t || (this.runtime.isRunningEvents = !0)), e = 0, i = this.events.length; e < i; e++) {
                var r = this.events[e];
                r.run(), this.runtime.clearSol(r.solModifiers), this.runtime.hasPendingInstances && this.runtime.ClearDeathRow()
            }
            t || (this.runtime.isRunningEvents = !1)
        }, n.prototype.init_trigger = function(t, e) {
            t.orblock || this.runtime.triggers_to_postinit.push(t);
            var i, r = t.conditions[e];
            i = r.type ? r.type.name : "system";
            var n = r.fasttrigger,
                s = n ? this.fasttriggers : this.triggers;
            s[i] || (s[i] = []);
            var a = s[i],
                o = r.func;
            if (n) {
                if (!r.parameters.length) return;
                var h, c = r.parameters[0];
                if (1 !== c.type || 2 !== c.expression.type) return;
                var l, u, p = c.expression.value.toLowerCase();
                for (l = 0, u = a.length; l < u; l++)
                    if (a[l].method == o) return void((h = a[l].evs)[p] ? h[p].push([t, e]) : h[p] = [
                        [t, e]
                    ]);
                (h = {})[p] = [
                    [t, e]
                ], a.push({
                    method: o,
                    evs: h
                })
            } else {
                for (l = 0, u = a.length; l < u; l++)
                    if (a[l].method == o) return void a[l].evs.push([t, e]);
                ! function(t) {
                    return !(!cr.plugins_.Sprite || t !== cr.plugins_.Sprite.prototype.cnds.OnFrameChanged)
                }(o) ? a.push({
                    method: o,
                    evs: [
                        [t, e]
                    ]
                }): a.unshift({
                    method: o,
                    evs: [
                        [t, e]
                    ]
                })
            }
        }, cr.eventsheet = n, s.prototype.hasObjects = function() {
            return this.select_all ? this.type.instances.length : this.instances.length
        }, s.prototype.getObjects = function() {
            return this.select_all ? this.type.instances : this.instances
        }, s.prototype.pick_one = function(t) {
            if (t)
                if (t.runtime.getCurrentEventStack().current_event.orblock) {
                    this.select_all && (cr.clearArray(this.instances), cr.shallowAssignArray(this.else_instances, t.type.instances), this.select_all = !1);
                    var e = this.else_instances.indexOf(t); - 1 !== e && (this.instances.push(this.else_instances[e]), this.else_instances.splice(e, 1))
                } else this.select_all = !1, cr.clearArray(this.instances), this.instances[0] = t
        }, cr.selection = s, window._c2hh_ = "45F21B0D387BFFBD5CB10598EDB7F2441F3DC4A4", a.prototype.postInit = function(t) {
            var e, i, n = this.parent;
            if (this.group)
                for (this.toplevelgroup = !0; n;) {
                    if (!n.group) {
                        this.toplevelgroup = !1;
                        break
                    }
                    n = n.parent
                }
            for (this.toplevelevent = !this.is_trigger() && (!this.parent || this.parent.group && this.parent.toplevelgroup), this.has_else_block = !!t, this.solModifiersIncludingParents = this.solModifiers.slice(0), n = this.parent; n;) {
                for (e = 0, i = n.solModifiers.length; e < i; e++) this.addParentSolModifier(n.solModifiers[e]);
                n = n.parent
            }
            for (this.solModifiers = r(this.solModifiers), this.solModifiersIncludingParents = r(this.solModifiersIncludingParents), e = 0, i = this.conditions.length; e < i; e++) this.conditions[e].postInit();
            for (e = 0, i = this.actions.length; e < i; e++) this.actions[e].postInit();
            for (e = 0, i = this.subevents.length; e < i; e++) this.subevents[e].postInit(e < i - 1 && this.subevents[e + 1].is_else_block)
        }, a.prototype.setGroupActive = function(t) {
            if (this.group_active !== !!t) {
                var e, i;
                for (this.group_active = !!t, e = 0, i = this.contained_includes.length; e < i; ++e) this.contained_includes[e].updateActive();
                i > 0 && this.runtime.running_layout.event_sheet && this.runtime.running_layout.event_sheet.updateDeepIncludes()
            }
        }, a.prototype.addSolModifier = function(t) {
            o(t, this.solModifiers)
        }, a.prototype.addParentSolModifier = function(t) {
            o(t, this.solModifiersIncludingParents)
        }, a.prototype.setSolWriterAfterCnds = function() {
            this.solWriterAfterCnds = !0, this.parent && this.parent.setSolWriterAfterCnds()
        }, a.prototype.is_trigger = function() {
            return !!this.conditions.length && this.conditions[0].trigger
        }, a.prototype.run = function() {
            var t, e, i = !1,
                r = this.runtime,
                n = this.runtime.getCurrentEventStack();
            n.current_event = this;
            var s = this.conditions;
            if (this.is_else_block || (n.else_branch_ran = !1), this.orblock) {
                for (0 === s.length && (i = !0), n.cndindex = 0, t = s.length; n.cndindex < t; n.cndindex++)(e = s[n.cndindex]).trigger || e.run() && (i = !0);
                n.last_event_true = i, i && this.run_actions_and_subevents()
            } else {
                for (n.cndindex = 0, t = s.length; n.cndindex < t; n.cndindex++)
                    if (!s[n.cndindex].run()) return n.last_event_true = !1, void(this.toplevelevent && r.hasPendingInstances && r.ClearDeathRow());
                n.last_event_true = !0, this.run_actions_and_subevents()
            }
            this.end_run(n)
        }, a.prototype.end_run = function(t) {
            t.last_event_true && this.has_else_block && (t.else_branch_ran = !0), this.toplevelevent && this.runtime.hasPendingInstances && this.runtime.ClearDeathRow()
        }, a.prototype.run_orblocktrigger = function(t) {
            this.runtime.getCurrentEventStack().current_event = this, this.conditions[t].run() && (this.run_actions_and_subevents(), this.runtime.getCurrentEventStack().last_event_true = !0)
        }, a.prototype.run_actions_and_subevents = function() {
            var t, e = this.runtime.getCurrentEventStack();
            for (e.actindex = 0, t = this.actions.length; e.actindex < t; e.actindex++)
                if (this.actions[e.actindex].run()) return;
            this.run_subevents()
        }, a.prototype.resume_actions_and_subevents = function() {
            var t, e = this.runtime.getCurrentEventStack();
            for (t = this.actions.length; e.actindex < t; e.actindex++)
                if (this.actions[e.actindex].run()) return;
            this.run_subevents()
        }, a.prototype.run_subevents = function() {
            if (this.subevents.length) {
                var t, e, i, r, n = this.subevents.length - 1;
                if (this.runtime.pushEventStack(this), this.solWriterAfterCnds)
                    for (t = 0, e = this.subevents.length; t < e; t++) i = this.subevents[t], (r = !this.toplevelgroup || !this.group && t < n) && this.runtime.pushCopySol(i.solModifiers), i.run(), r ? this.runtime.popSol(i.solModifiers) : this.runtime.clearSol(i.solModifiers);
                else
                    for (t = 0, e = this.subevents.length; t < e; t++) this.subevents[t].run();
                this.runtime.popEventStack()
            }
        }, a.prototype.run_pretrigger = function() {
            var t = this.runtime.getCurrentEventStack();
            t.current_event = this;
            var e, i = !1;
            for (t.cndindex = 0, e = this.conditions.length; t.cndindex < e; t.cndindex++)
                if (this.conditions[t.cndindex].run()) i = !0;
                else if (!this.orblock) return !1;
            return !this.orblock || i
        }, a.prototype.retrigger = function() {
            this.runtime.execcount++;
            var t, e = this.runtime.getCurrentEventStack().cndindex,
                i = this.runtime.pushEventStack(this);
            if (!this.orblock)
                for (i.cndindex = e + 1, t = this.conditions.length; i.cndindex < t; i.cndindex++)
                    if (!this.conditions[i.cndindex].run()) return this.runtime.popEventStack(), !1;
            return this.run_actions_and_subevents(), this.runtime.popEventStack(), !0
        }, a.prototype.isFirstConditionOfType = function(t) {
            var e = t.index;
            if (0 === e) return !0;
            for (--e; e >= 0; --e)
                if (this.conditions[e].type === t.type) return !1;
            return !0
        }, cr.eventblock = a, h.prototype.postInit = function() {
            var t, e, i;
            for (t = 0, e = this.parameters.length; t < e; t++)(i = this.parameters[t]).postInit(), i.variesPerInstance && (this.anyParamVariesPerInstance = !0)
        }, h.prototype.run_true = function() {
            return !0
        }, h.prototype.run_system = function() {
            var t, e;
            for (t = 0, e = this.parameters.length; t < e; t++) this.results[t] = this.parameters[t].get();
            return cr.xor(this.func.apply(this.runtime.system, this.results), this.inverted)
        }, h.prototype.run_static = function() {
            var t, e;
            for (t = 0, e = this.parameters.length; t < e; t++) this.results[t] = this.parameters[t].get();
            var i = this.func.apply(this.behaviortype ? this.behaviortype : this.type, this.results);
            return this.type.applySolToContainer(), i
        }, h.prototype.run_object = function() {
            var t, e, i, r, n, s, a, o, h, c, l, u, p = this.type,
                d = p.getCurrentSol(),
                f = this.block.orblock && !this.trigger,
                g = 0,
                y = p.is_contained,
                m = p.is_family,
                _ = p.family_index,
                v = this.beh_index,
                b = v > -1,
                w = this.anyParamVariesPerInstance,
                x = this.parameters,
                S = this.results,
                T = this.inverted,
                O = this.func;
            if (w)
                for (e = 0, n = x.length; e < n; ++e)(s = x[e]).variesPerInstance || (S[e] = s.get(0));
            else
                for (e = 0, n = x.length; e < n; ++e) S[e] = x[e].get(0);
            if (d.select_all) {
                for (cr.clearArray(d.instances), cr.clearArray(d.else_instances), t = 0, r = (l = p.instances).length; t < r; ++t) {
                    if (o = l[t], w)
                        for (e = 0, n = x.length; e < n; ++e)(s = x[e]).variesPerInstance && (S[e] = s.get(t));
                    b ? (g = 0, m && (g = o.type.family_beh_map[_]), a = O.apply(o.behavior_insts[v + g], S)) : a = O.apply(o, S), cr.xor(a, T) ? d.instances.push(o) : f && d.else_instances.push(o)
                }
                return p.finish && p.finish(!0), d.select_all = !1, p.applySolToContainer(), d.hasObjects()
            }
            i = 0;
            var C = f && !this.block.isFirstConditionOfType(this),
                A = !1;
            for (t = 0, r = (l = C ? d.else_instances : d.instances).length; t < r; ++t) {
                if (o = l[t], w)
                    for (e = 0, n = x.length; e < n; ++e)(s = x[e]).variesPerInstance && (S[e] = s.get(t));
                if (b ? (g = 0, m && (g = o.type.family_beh_map[_]), a = O.apply(o.behavior_insts[v + g], S)) : a = O.apply(o, S), cr.xor(a, T))
                    if (A = !0, C) {
                        if (d.instances.push(o), y)
                            for (e = 0, n = o.siblings.length; e < n; e++)(h = o.siblings[e]).type.getCurrentSol().instances.push(h)
                    } else {
                        if (l[i] = o, y)
                            for (e = 0, n = o.siblings.length; e < n; e++)(h = o.siblings[e]).type.getCurrentSol().instances[i] = h;
                        i++
                    }
                else if (C) {
                    if (l[i] = o, y)
                        for (e = 0, n = o.siblings.length; e < n; e++)(h = o.siblings[e]).type.getCurrentSol().else_instances[i] = h;
                    i++
                } else if (f && (d.else_instances.push(o), y))
                    for (e = 0, n = o.siblings.length; e < n; e++)(h = o.siblings[e]).type.getCurrentSol().else_instances.push(h)
            }
            if (cr.truncateArray(l, i), y)
                for (t = 0, r = (u = p.container).length; t < r; t++) c = u[t].getCurrentSol(), C ? cr.truncateArray(c.else_instances, i) : cr.truncateArray(c.instances, i);
            var k = A;
            if (C && !A)
                for (t = 0, r = d.instances.length; t < r; t++) {
                    if (o = d.instances[t], w)
                        for (e = 0, n = x.length; e < n; e++)(s = x[e]).variesPerInstance && (S[e] = s.get(t));
                    if (a = b ? O.apply(o.behavior_insts[v], S) : O.apply(o, S), cr.xor(a, T)) {
                        A = !0;
                        break
                    }
                }
            return p.finish && p.finish(k || f), f ? A : d.hasObjects()
        }, cr.condition = h, c.prototype.postInit = function() {
            var t, e, i;
            for (t = 0, e = this.parameters.length; t < e; t++)(i = this.parameters[t]).postInit(), i.variesPerInstance && (this.anyParamVariesPerInstance = !0)
        }, c.prototype.run_system = function() {
            var t, e, i = this.runtime,
                r = this.parameters,
                n = this.results;
            for (t = 0, e = r.length; t < e; ++t) n[t] = r[t].get();
            return this.func.apply(i.system, n)
        }, c.prototype.run_object = function() {
            var t, e, i, r, n, s, a, o = this.type,
                h = this.beh_index,
                c = o.family_index,
                l = this.anyParamVariesPerInstance,
                u = this.parameters,
                p = this.results,
                d = this.func,
                f = o.getCurrentSol().getObjects(),
                g = o.is_family,
                y = h > -1;
            if (l)
                for (e = 0, r = u.length; e < r; ++e)(n = u[e]).variesPerInstance || (p[e] = n.get(0));
            else
                for (e = 0, r = u.length; e < r; ++e) p[e] = u[e].get(0);
            for (t = 0, i = f.length; t < i; ++t) {
                if (s = f[t], l)
                    for (e = 0, r = u.length; e < r; ++e)(n = u[e]).variesPerInstance && (p[e] = n.get(t));
                y ? (a = 0, g && (a = s.type.family_beh_map[c]), d.apply(s.behavior_insts[h + a], p)) : d.apply(s, p)
            }
            return !1
        }, cr.action = c;
        var l = [],
            u = -1;

        function p() {
            return u++, l.length === u && l.push(new cr.expvalue), l[u]
        }

        function d() {
            u--
        }

        function f(t, e) {
            var i, r, n;
            switch (this.owner = t, this.block = t.block, this.sheet = t.sheet, this.runtime = t.runtime, this.type = e[0], this.expression = null, this.solindex = 0, this.get = null, this.combosel = 0, this.layout = null, this.key = 0, this.object = null, this.index = 0, this.varname = null, this.eventvar = null, this.fileinfo = null, this.subparams = null, this.variadicret = null, this.subparams = null, this.variadicret = null, this.variesPerInstance = !1, e[0]) {
                case 0:
                case 7:
                    this.expression = new cr.expNode(this, e[1]), this.solindex = 0, this.get = this.get_exp;
                    break;
                case 1:
                    this.expression = new cr.expNode(this, e[1]), this.solindex = 0, this.get = this.get_exp_str;
                    break;
                case 5:
                    this.expression = new cr.expNode(this, e[1]), this.solindex = 0, this.get = this.get_layer;
                    break;
                case 3:
                case 8:
                    this.combosel = e[1], this.get = this.get_combosel;
                    break;
                case 6:
                    this.layout = this.runtime.layouts[e[1]], this.get = this.get_layout;
                    break;
                case 9:
                    this.key = e[1], this.get = this.get_key;
                    break;
                case 4:
                    this.object = this.runtime.types_by_index[e[1]], this.get = this.get_object, this.block.addSolModifier(this.object), this.owner instanceof cr.action ? this.block.setSolWriterAfterCnds() : this.block.parent && this.block.parent.setSolWriterAfterCnds();
                    break;
                case 10:
                    this.index = e[1], t.type && t.type.is_family ? (this.get = this.get_familyvar, this.variesPerInstance = !0) : this.get = this.get_instvar;
                    break;
                case 11:
                    this.varname = e[1], this.eventvar = null, this.get = this.get_eventvar;
                    break;
                case 2:
                case 12:
                    this.fileinfo = e[1], this.get = this.get_audiofile;
                    break;
                case 13:
                    for (this.get = this.get_variadic, this.subparams = [], this.variadicret = [], i = 1, r = e.length; i < r; i++) n = new cr.parameter(this.owner, e[i]), cr.seal(n), this.subparams.push(n), this.variadicret.push(0)
            }
        }

        function g(t, e, i) {
            this.sheet = t, this.parent = e, this.runtime = t.runtime, this.solModifiers = [], this.name = i[1], this.vartype = i[2], this.initial = i[3], this.is_static = !!i[4], this.is_constant = !!i[5], this.sid = i[6], this.runtime.varsBySid[this.sid.toString()] = this, this.data = this.initial, this.parent ? (this.is_static || this.is_constant ? this.localIndex = -1 : this.localIndex = this.runtime.stackLocalCount++, this.runtime.all_local_vars.push(this)) : (this.localIndex = -1, this.runtime.all_global_vars.push(this))
        }

        function y(t, e, i) {
            this.sheet = t, this.parent = e, this.runtime = t.runtime, this.solModifiers = [], this.include_sheet = null, this.include_sheet_name = i[1], this.active = !0
        }

        function m() {
            this.temp_parents_arr = [], this.reset(null), cr.seal(this)
        }
        f.prototype.postInit = function() {
            var t, e;
            if (11 === this.type) this.eventvar = this.runtime.getEventVariableByName(this.varname, this.block.parent);
            else if (13 === this.type)
                for (t = 0, e = this.subparams.length; t < e; t++) this.subparams[t].postInit();
            this.expression && this.expression.postInit()
        }, f.prototype.maybeVaryForType = function(t) {
            this.variesPerInstance || t && (t.plugin.singleglobal || (this.variesPerInstance = !0))
        }, f.prototype.setVaries = function() {
            this.variesPerInstance = !0
        }, f.prototype.get_exp = function(t) {
            this.solindex = t || 0;
            var e = p();
            return this.expression.get(e), d(), e.data
        }, f.prototype.get_exp_str = function(t) {
            this.solindex = t || 0;
            var e = p();
            return this.expression.get(e), d(), cr.is_string(e.data) ? e.data : ""
        }, f.prototype.get_object = function() {
            return this.object
        }, f.prototype.get_combosel = function() {
            return this.combosel
        }, f.prototype.get_layer = function(t) {
            this.solindex = t || 0;
            var e = p();
            return this.expression.get(e), d(), e.is_number() ? this.runtime.getLayerByNumber(e.data) : this.runtime.getLayerByName(e.data)
        }, f.prototype.get_layout = function() {
            return this.layout
        }, f.prototype.get_key = function() {
            return this.key
        }, f.prototype.get_instvar = function() {
            return this.index
        }, f.prototype.get_familyvar = function(t) {
            var e = t || 0,
                i = this.owner.type,
                r = null,
                n = i.getCurrentSol(),
                s = n.getObjects();
            if (s.length) r = s[e % s.length].type;
            else if (n.else_instances.length) r = n.else_instances[e % n.else_instances.length].type;
            else {
                if (!i.instances.length) return 0;
                r = i.instances[e % i.instances.length].type
            }
            return this.index + r.family_var_map[i.family_index]
        }, f.prototype.get_eventvar = function() {
            return this.eventvar
        }, f.prototype.get_audiofile = function() {
            return this.fileinfo
        }, f.prototype.get_variadic = function() {
            var t, e;
            for (t = 0, e = this.subparams.length; t < e; t++) this.variadicret[t] = this.subparams[t].get();
            return this.variadicret
        }, cr.parameter = f, g.prototype.postInit = function() {
            this.solModifiers = r(this.solModifiers)
        }, g.prototype.setValue = function(t) {
            var e = this.runtime.getCurrentLocalVarStack();
            this.parent && !this.is_static && e ? (this.localIndex >= e.length && (e.length = this.localIndex + 1), e[this.localIndex] = t) : this.data = t
        }, g.prototype.getValue = function() {
            var t = this.runtime.getCurrentLocalVarStack();
            return !this.parent || this.is_static || !t || this.is_constant ? this.data : this.localIndex >= t.length ? this.initial : void 0 === t[this.localIndex] ? this.initial : t[this.localIndex]
        }, g.prototype.run = function() {
            !this.parent || this.is_static || this.is_constant || this.setValue(this.initial)
        }, cr.eventvariable = g, y.prototype.toString = function() {
            return "include:" + this.include_sheet.toString()
        }, y.prototype.postInit = function() {
            this.include_sheet = this.runtime.eventsheets[this.include_sheet_name], this.sheet.includes.add(this), this.solModifiers = r(this.solModifiers);
            for (var t = this.parent; t;) t.group && t.contained_includes.push(this), t = t.parent;
            this.updateActive()
        }, y.prototype.run = function() {
            this.parent && this.runtime.pushCleanSol(this.runtime.types_by_index), this.include_sheet.hasRun || this.include_sheet.run(!0), this.parent && this.runtime.popSol(this.runtime.types_by_index)
        }, y.prototype.updateActive = function() {
            for (var t = this.parent; t;) {
                if (t.group && !t.group_active) return void(this.active = !1);
                t = t.parent
            }
            this.active = !0
        }, y.prototype.isActive = function() {
            return this.active
        }, cr.eventinclude = y, m.prototype.reset = function(t) {
            this.current_event = t, this.cndindex = 0, this.actindex = 0, cr.clearArray(this.temp_parents_arr), this.last_event_true = !1, this.else_branch_ran = !1, this.any_true_state = !1
        }, m.prototype.isModifierAfterCnds = function() {
            return !!this.current_event.solWriterAfterCnds || this.cndindex < this.current_event.conditions.length - 1 && !!this.current_event.solModifiers.length
        }, cr.eventStackFrame = m
    }(),
    function() {
        function t(t, e) {
            this.owner = t, this.runtime = t.runtime, this.type = e[0], this.get = [this.eval_int, this.eval_float, this.eval_string, this.eval_unaryminus, this.eval_add, this.eval_subtract, this.eval_multiply, this.eval_divide, this.eval_mod, this.eval_power, this.eval_and, this.eval_or, this.eval_equal, this.eval_notequal, this.eval_less, this.eval_lessequal, this.eval_greater, this.eval_greaterequal, this.eval_conditional, this.eval_system_exp, this.eval_object_exp, this.eval_instvar_exp, this.eval_behavior_exp, this.eval_eventvar_exp][this.type];
            var i, r, n = null;
            switch (this.value = null, this.first = null, this.second = null, this.third = null, this.func = null, this.results = null, this.parameters = null, this.object_type = null, this.beh_index = -1, this.instance_expr = null, this.varindex = -1, this.behavior_type = null, this.varname = null, this.eventvar = null, this.return_string = !1, this.type) {
                case 0:
                case 1:
                case 2:
                    this.value = e[1];
                    break;
                case 3:
                    this.first = new cr.expNode(t, e[1]);
                    break;
                case 18:
                    this.first = new cr.expNode(t, e[1]), this.second = new cr.expNode(t, e[2]), this.third = new cr.expNode(t, e[3]);
                    break;
                case 19:
                    this.func = this.runtime.GetObjectReference(e[1]), this.func !== cr.system_object.prototype.exps.random && this.func !== cr.system_object.prototype.exps.choose || this.owner.setVaries(), this.results = [], this.parameters = [], 3 === e.length ? (n = e[2], this.results.length = n.length + 1) : this.results.length = 1;
                    break;
                case 20:
                    this.object_type = this.runtime.types_by_index[e[1]], this.beh_index = -1, this.func = this.runtime.GetObjectReference(e[2]), this.return_string = e[3], cr.plugins_.Function && this.func === cr.plugins_.Function.prototype.exps.Call && this.owner.setVaries(), e[4] ? this.instance_expr = new cr.expNode(t, e[4]) : this.instance_expr = null, this.results = [], this.parameters = [], 6 === e.length ? (n = e[5], this.results.length = n.length + 1) : this.results.length = 1;
                    break;
                case 21:
                    this.object_type = this.runtime.types_by_index[e[1]], this.return_string = e[2], e[3] ? this.instance_expr = new cr.expNode(t, e[3]) : this.instance_expr = null, this.varindex = e[4];
                    break;
                case 22:
                    this.object_type = this.runtime.types_by_index[e[1]], this.behavior_type = this.object_type.getBehaviorByName(e[2]), this.beh_index = this.object_type.getBehaviorIndexByName(e[2]), this.func = this.runtime.GetObjectReference(e[3]), this.return_string = e[4], e[5] ? this.instance_expr = new cr.expNode(t, e[5]) : this.instance_expr = null, this.results = [], this.parameters = [], 7 === e.length ? (n = e[6], this.results.length = n.length + 1) : this.results.length = 1;
                    break;
                case 23:
                    this.varname = e[1], this.eventvar = null
            }
            if (this.owner.maybeVaryForType(this.object_type), this.type >= 4 && this.type <= 17 && (this.first = new cr.expNode(t, e[1]), this.second = new cr.expNode(t, e[2])), n)
                for (i = 0, r = n.length; i < r; i++) this.parameters.push(new cr.expNode(t, n[i]));
            cr.seal(this)
        }
        t.prototype.postInit = function() {
            var t, e;
            if (23 === this.type && (this.eventvar = this.owner.runtime.getEventVariableByName(this.varname, this.owner.block.parent)), this.first && this.first.postInit(), this.second && this.second.postInit(), this.third && this.third.postInit(), this.instance_expr && this.instance_expr.postInit(), this.parameters)
                for (t = 0, e = this.parameters.length; t < e; t++) this.parameters[t].postInit()
        };
        var e = [],
            i = -1;

        function r() {
            return ++i, e.length === i && e.push(new cr.expvalue), e[i]
        }

        function n() {
            --i
        }

        function s(t, e, i) {
            var r, n;
            for (r = 0, n = t.length; r < n; ++r) t[r].get(i), e[r + 1] = i.data
        }

        function a(t, e) {
            this.type = t || cr.exptype.Integer, this.data = e || 0, this.object_class = null, this.type == cr.exptype.Integer && (this.data = Math.floor(this.data)), cr.seal(this)
        }
        t.prototype.eval_system_exp = function(t) {
            var e = this.parameters,
                i = this.results;
            i[0] = t, s(e, i, r()), n(), this.func.apply(this.runtime.system, i)
        }, t.prototype.eval_object_exp = function(t) {
            var e = this.object_type,
                i = this.results,
                a = this.parameters,
                o = this.instance_expr,
                h = this.func,
                c = this.owner.solindex,
                l = e.getCurrentSol(),
                u = l.getObjects();
            if (!u.length) {
                if (!l.else_instances.length) return void(this.return_string ? t.set_string("") : t.set_int(0));
                u = l.else_instances
            }
            i[0] = t, t.object_class = e;
            var p = r();
            s(a, i, p), o && (o.get(p), p.is_number() && (c = p.data, u = e.instances)), n();
            var d = u.length;
            (c >= d || c <= -d) && (c %= d), c < 0 && (c += d);
            h.apply(u[c], i)
        }, t.prototype.eval_behavior_exp = function(t) {
            var e = this.object_type,
                i = this.results,
                a = this.parameters,
                o = this.instance_expr,
                h = this.beh_index,
                c = this.func,
                l = this.owner.solindex,
                u = e.getCurrentSol(),
                p = u.getObjects();
            if (!p.length) {
                if (!u.else_instances.length) return void(this.return_string ? t.set_string("") : t.set_int(0));
                p = u.else_instances
            }
            i[0] = t, t.object_class = e;
            var d = r();
            s(a, i, d), o && (o.get(d), d.is_number() && (l = d.data, p = e.instances)), n();
            var f = p.length;
            (l >= f || l <= -f) && (l %= f), l < 0 && (l += f);
            var g = p[l],
                y = 0;
            e.is_family && (y = g.type.family_beh_map[e.family_index]);
            c.apply(g.behavior_insts[h + y], i)
        }, t.prototype.eval_instvar_exp = function(t) {
            var e, i = this.instance_expr,
                s = this.object_type,
                a = this.varindex,
                o = this.owner.solindex,
                h = s.getCurrentSol(),
                c = h.getObjects();
            if (!c.length) {
                if (!h.else_instances.length) return void(this.return_string ? t.set_string("") : t.set_int(0));
                c = h.else_instances
            }
            if (i) {
                var l = r();
                if (i.get(l), l.is_number()) {
                    o = l.data;
                    var u = s.instances;
                    0 !== u.length && (o %= u.length) < 0 && (o += u.length);
                    var p = (e = s.getInstanceByIID(o)).instance_vars[a];
                    return cr.is_string(p) ? t.set_string(p) : t.set_float(p), void n()
                }
                n()
            }
            var d = c.length;
            (o >= d || o <= -d) && (o %= d), o < 0 && (o += d), e = c[o];
            var f = 0;
            s.is_family && (f = e.type.family_var_map[s.family_index]);
            p = e.instance_vars[a + f];
            cr.is_string(p) ? t.set_string(p) : t.set_float(p)
        }, t.prototype.eval_int = function(t) {
            t.type = cr.exptype.Integer, t.data = this.value
        }, t.prototype.eval_float = function(t) {
            t.type = cr.exptype.Float, t.data = this.value
        }, t.prototype.eval_string = function(t) {
            t.type = cr.exptype.String, t.data = this.value
        }, t.prototype.eval_unaryminus = function(t) {
            this.first.get(t), t.is_number() && (t.data = -t.data)
        }, t.prototype.eval_add = function(t) {
            this.first.get(t);
            var e = r();
            this.second.get(e), t.is_number() && e.is_number() && (t.data += e.data, e.is_float() && t.make_float()), n()
        }, t.prototype.eval_subtract = function(t) {
            this.first.get(t);
            var e = r();
            this.second.get(e), t.is_number() && e.is_number() && (t.data -= e.data, e.is_float() && t.make_float()), n()
        }, t.prototype.eval_multiply = function(t) {
            this.first.get(t);
            var e = r();
            this.second.get(e), t.is_number() && e.is_number() && (t.data *= e.data, e.is_float() && t.make_float()), n()
        }, t.prototype.eval_divide = function(t) {
            this.first.get(t);
            var e = r();
            this.second.get(e), t.is_number() && e.is_number() && (t.data /= e.data, t.make_float()), n()
        }, t.prototype.eval_mod = function(t) {
            this.first.get(t);
            var e = r();
            this.second.get(e), t.is_number() && e.is_number() && (t.data %= e.data, e.is_float() && t.make_float()), n()
        }, t.prototype.eval_power = function(t) {
            this.first.get(t);
            var e = r();
            this.second.get(e), t.is_number() && e.is_number() && (t.data = Math.pow(t.data, e.data), e.is_float() && t.make_float()), n()
        }, t.prototype.eval_and = function(t) {
            this.first.get(t);
            var e = r();
            this.second.get(e), e.is_string() || t.is_string() ? this.eval_and_stringconcat(t, e) : this.eval_and_logical(t, e), n()
        }, t.prototype.eval_and_stringconcat = function(t, e) {
            t.is_string() && e.is_string() ? this.eval_and_stringconcat_str_str(t, e) : this.eval_and_stringconcat_num(t, e)
        }, t.prototype.eval_and_stringconcat_str_str = function(t, e) {
            t.data += e.data
        }, t.prototype.eval_and_stringconcat_num = function(t, e) {
            t.is_string() ? t.data += (Math.round(1e10 * e.data) / 1e10).toString() : t.set_string(t.data.toString() + e.data)
        }, t.prototype.eval_and_logical = function(t, e) {
            t.set_int(t.data && e.data ? 1 : 0)
        }, t.prototype.eval_or = function(t) {
            this.first.get(t);
            var e = r();
            this.second.get(e), t.is_number() && e.is_number() && (t.data || e.data ? t.set_int(1) : t.set_int(0)), n()
        }, t.prototype.eval_conditional = function(t) {
            this.first.get(t), t.data ? this.second.get(t) : this.third.get(t)
        }, t.prototype.eval_equal = function(t) {
            this.first.get(t);
            var e = r();
            this.second.get(e), t.set_int(t.data === e.data ? 1 : 0), n()
        }, t.prototype.eval_notequal = function(t) {
            this.first.get(t);
            var e = r();
            this.second.get(e), t.set_int(t.data !== e.data ? 1 : 0), n()
        }, t.prototype.eval_less = function(t) {
            this.first.get(t);
            var e = r();
            this.second.get(e), t.set_int(t.data < e.data ? 1 : 0), n()
        }, t.prototype.eval_lessequal = function(t) {
            this.first.get(t);
            var e = r();
            this.second.get(e), t.set_int(t.data <= e.data ? 1 : 0), n()
        }, t.prototype.eval_greater = function(t) {
            this.first.get(t);
            var e = r();
            this.second.get(e), t.set_int(t.data > e.data ? 1 : 0), n()
        }, t.prototype.eval_greaterequal = function(t) {
            this.first.get(t);
            var e = r();
            this.second.get(e), t.set_int(t.data >= e.data ? 1 : 0), n()
        }, t.prototype.eval_eventvar_exp = function(t) {
            var e = this.eventvar.getValue();
            cr.is_number(e) ? t.set_float(e) : t.set_string(e)
        }, cr.expNode = t, a.prototype.is_int = function() {
            return this.type === cr.exptype.Integer
        }, a.prototype.is_float = function() {
            return this.type === cr.exptype.Float
        }, a.prototype.is_number = function() {
            return this.type === cr.exptype.Integer || this.type === cr.exptype.Float
        }, a.prototype.is_string = function() {
            return this.type === cr.exptype.String
        }, a.prototype.make_int = function() {
            this.is_int() || (this.is_float() ? this.data = Math.floor(this.data) : this.is_string() && (this.data = parseInt(this.data, 10)), this.type = cr.exptype.Integer)
        }, a.prototype.make_float = function() {
            this.is_float() || (this.is_string() && (this.data = parseFloat(this.data)), this.type = cr.exptype.Float)
        }, a.prototype.make_string = function() {
            this.is_string() || (this.data = this.data.toString(), this.type = cr.exptype.String)
        }, a.prototype.set_int = function(t) {
            this.type = cr.exptype.Integer, this.data = Math.floor(t)
        }, a.prototype.set_float = function(t) {
            this.type = cr.exptype.Float, this.data = t
        }, a.prototype.set_string = function(t) {
            this.type = cr.exptype.String, this.data = t
        }, a.prototype.set_any = function(t) {
            cr.is_number(t) ? (this.type = cr.exptype.Float, this.data = t) : cr.is_string(t) ? (this.type = cr.exptype.String, this.data = t.toString()) : (this.type = cr.exptype.Integer, this.data = 0)
        }, cr.expvalue = a, cr.exptype = {
            Integer: 0,
            Float: 1,
            String: 2
        }
    }(), cr.system_object = function(t) {
        this.runtime = t, this.waits = []
    }, cr.system_object.prototype.saveToJSON = function() {
        var t, e, i, r, n, s, a, o, h = {};
        h.waits = [];
        var c, l = h.waits;
        for (t = 0, e = this.waits.length; t < e; t++) {
            for (c = {
                    t: (s = this.waits[t]).time,
                    st: s.signaltag,
                    s: s.signalled,
                    ev: s.ev.sid,
                    sm: [],
                    sols: {}
                }, s.ev.actions[s.actindex] && (c.act = s.ev.actions[s.actindex].sid), i = 0, r = s.solModifiers.length; i < r; i++) c.sm.push(s.solModifiers[i].sid);
            for (n in s.sols)
                if (s.sols.hasOwnProperty(n)) {
                    for (a = this.runtime.types_by_index[parseInt(n, 10)], o = {
                            sa: s.sols[n].sa,
                            insts: []
                        }, i = 0, r = s.sols[n].insts.length; i < r; i++) o.insts.push(s.sols[n].insts[i].uid);
                    c.sols[a.sid.toString()] = o
                }
            l.push(c)
        }
        return h
    }, cr.system_object.prototype.loadFromJSON = function(t) {
        var e, i, r, n, s, a, o, h, c, l, u, p, d, f = t.waits;
        for (cr.clearArray(this.waits), e = 0, i = f.length; e < i; e++)
            if (a = f[e], h = this.runtime.blocksBySid[a.ev.toString()]) {
                for (c = -1, r = 0, n = h.actions.length; r < n; r++)
                    if (h.actions[r].sid === a.act) {
                        c = r;
                        break
                    }
                if (-1 !== c) {
                    for ((o = {}).sols = {}, o.solModifiers = [], o.deleteme = !1, o.time = a.t, o.signaltag = a.st || "", o.signalled = !!a.s, o.ev = h, o.actindex = c, r = 0, n = a.sm.length; r < n; r++)(l = this.runtime.getObjectTypeBySid(a.sm[r])) && o.solModifiers.push(l);
                    for (s in a.sols)
                        if (a.sols.hasOwnProperty(s)) {
                            if (!(l = this.runtime.getObjectTypeBySid(parseInt(s, 10)))) continue;
                            for (p = {
                                    sa: (u = a.sols[s]).sa,
                                    insts: []
                                }, r = 0, n = u.insts.length; r < n; r++)(d = this.runtime.getObjectByUID(u.insts[r])) && p.insts.push(d);
                            o.sols[l.index.toString()] = p
                        }
                    this.waits.push(o)
                }
            }
    },
    function() {
        var t = cr.system_object.prototype;

        function e() {}
        e.prototype.EveryTick = function() {
            return !0
        }, e.prototype.OnLayoutStart = function() {
            return !0
        }, e.prototype.OnLayoutEnd = function() {
            return !0
        }, e.prototype.Compare = function(t, e, i) {
            return cr.do_cmp(t, e, i)
        }, e.prototype.CompareTime = function(t, e) {
            var i = this.runtime.kahanTime.sum;
            if (0 === t) {
                var r = this.runtime.getCurrentCondition();
                return !r.extra.CompareTime_executed && i >= e && (r.extra.CompareTime_executed = !0, !0)
            }
            return cr.do_cmp(i, t, e)
        }, e.prototype.LayerVisible = function(t) {
            return !!t && t.visible
        }, e.prototype.LayerEmpty = function(t) {
            return !!t && !t.instances.length
        }, e.prototype.LayerCmpOpacity = function(t, e, i) {
            return !!t && cr.do_cmp(100 * t.opacity, e, i)
        }, e.prototype.Repeat = function(t) {
            var e, i = this.runtime.getCurrentEventStack(),
                r = i.current_event,
                n = i.isModifierAfterCnds(),
                s = this.runtime.pushLoopStack();
            if (n)
                for (e = 0; e < t && !s.stopped; e++) this.runtime.pushCopySol(r.solModifiers), s.index = e, r.retrigger(), this.runtime.popSol(r.solModifiers);
            else
                for (e = 0; e < t && !s.stopped; e++) s.index = e, r.retrigger();
            return this.runtime.popLoopStack(), !1
        }, e.prototype.While = function(t) {
            var e, i = this.runtime.getCurrentEventStack(),
                r = i.current_event,
                n = i.isModifierAfterCnds(),
                s = this.runtime.pushLoopStack();
            if (n)
                for (e = 0; !s.stopped; e++) this.runtime.pushCopySol(r.solModifiers), s.index = e, r.retrigger() || (s.stopped = !0), this.runtime.popSol(r.solModifiers);
            else
                for (e = 0; !s.stopped; e++) s.index = e, r.retrigger() || (s.stopped = !0);
            return this.runtime.popLoopStack(), !1
        }, e.prototype.For = function(t, e, i) {
            var r, n = this.runtime.getCurrentEventStack(),
                s = n.current_event,
                a = n.isModifierAfterCnds(),
                o = this.runtime.pushLoopStack(t);
            if (i < e)
                if (a)
                    for (r = e; r >= i && !o.stopped; --r) this.runtime.pushCopySol(s.solModifiers), o.index = r, s.retrigger(), this.runtime.popSol(s.solModifiers);
                else
                    for (r = e; r >= i && !o.stopped; --r) o.index = r, s.retrigger();
            else if (a)
                for (r = e; r <= i && !o.stopped; ++r) this.runtime.pushCopySol(s.solModifiers), o.index = r, s.retrigger(), this.runtime.popSol(s.solModifiers);
            else
                for (r = e; r <= i && !o.stopped; ++r) o.index = r, s.retrigger();
            return this.runtime.popLoopStack(), !1
        };
        var i = [],
            r = -1;

        function n(t, e) {
            var i = t.extra.c2_feo_val,
                r = e.extra.c2_feo_val;
            return cr.is_number(i) && cr.is_number(r) ? i - r : (i = "" + i) < (r = "" + r) ? -1 : i > r ? 1 : 0
        }
        e.prototype.ForEach = function(t) {
            var e = t.getCurrentSol();
            r++, i.length === r && i.push([]);
            var n = i[r];
            cr.shallowAssignArray(n, e.getObjects());
            var s, a, o, h, c, l, u, p = this.runtime.getCurrentEventStack(),
                d = p.current_event,
                f = p.isModifierAfterCnds(),
                g = this.runtime.pushLoopStack(),
                y = t.is_contained;
            if (f)
                for (s = 0, a = n.length; s < a && !g.stopped; s++) {
                    if (this.runtime.pushCopySol(d.solModifiers), c = n[s], (e = t.getCurrentSol()).select_all = !1, cr.clearArray(e.instances), e.instances[0] = c, y)
                        for (o = 0, h = c.siblings.length; o < h; o++)(u = (l = c.siblings[o]).type.getCurrentSol()).select_all = !1, cr.clearArray(u.instances), u.instances[0] = l;
                    g.index = s, d.retrigger(), this.runtime.popSol(d.solModifiers)
                } else
                    for (e.select_all = !1, cr.clearArray(e.instances), s = 0, a = n.length; s < a && !g.stopped; s++) {
                        if (c = n[s], e.instances[0] = c, y)
                            for (o = 0, h = c.siblings.length; o < h; o++)(u = (l = c.siblings[o]).type.getCurrentSol()).select_all = !1, cr.clearArray(u.instances), u.instances[0] = l;
                        g.index = s, d.retrigger()
                    }
            return cr.clearArray(n), this.runtime.popLoopStack(), r--, !1
        }, e.prototype.ForEachOrdered = function(t, e, s) {
            var a = t.getCurrentSol();
            r++, i.length === r && i.push([]);
            var o = i[r];
            cr.shallowAssignArray(o, a.getObjects());
            var h, c, l, u, p, d, f, g = this.runtime.getCurrentEventStack(),
                y = g.current_event,
                m = this.runtime.getCurrentCondition(),
                _ = g.isModifierAfterCnds(),
                v = this.runtime.pushLoopStack();
            for (h = 0, c = o.length; h < c; h++) o[h].extra.c2_feo_val = m.parameters[1].get(h);
            o.sort(n), 1 === s && o.reverse();
            var b = t.is_contained;
            if (_)
                for (h = 0, c = o.length; h < c && !v.stopped; h++) {
                    if (this.runtime.pushCopySol(y.solModifiers), p = o[h], (a = t.getCurrentSol()).select_all = !1, cr.clearArray(a.instances), a.instances[0] = p, b)
                        for (l = 0, u = p.siblings.length; l < u; l++)(f = (d = p.siblings[l]).type.getCurrentSol()).select_all = !1, cr.clearArray(f.instances), f.instances[0] = d;
                    v.index = h, y.retrigger(), this.runtime.popSol(y.solModifiers)
                } else
                    for (a.select_all = !1, cr.clearArray(a.instances), h = 0, c = o.length; h < c && !v.stopped; h++) {
                        if (p = o[h], a.instances[0] = p, b)
                            for (l = 0, u = p.siblings.length; l < u; l++)(f = (d = p.siblings[l]).type.getCurrentSol()).select_all = !1, cr.clearArray(f.instances), f.instances[0] = d;
                        v.index = h, y.retrigger()
                    }
            return cr.clearArray(o), this.runtime.popLoopStack(), r--, !1
        }, e.prototype.PickByComparison = function(t, e, n, s) {
            var a, o, h, c;
            if (t) {
                r++, i.length === r && i.push([]);
                var l = i[r],
                    u = t.getCurrentSol();
                cr.shallowAssignArray(l, u.getObjects()), u.select_all && cr.clearArray(u.else_instances);
                var p = this.runtime.getCurrentCondition();
                for (a = 0, h = 0, o = l.length; a < o; a++) c = l[a], l[h] = c, e = p.parameters[1].get(a), s = p.parameters[3].get(a), cr.do_cmp(e, n, s) ? h++ : u.else_instances.push(c);
                return cr.truncateArray(l, h), u.select_all = !1, cr.shallowAssignArray(u.instances, l), cr.clearArray(l), r--, t.applySolToContainer(), !!u.instances.length
            }
        }, e.prototype.PickByEvaluate = function(t, e) {
            var n, s, a, o;
            if (t) {
                r++, i.length === r && i.push([]);
                var h = i[r],
                    c = t.getCurrentSol();
                cr.shallowAssignArray(h, c.getObjects()), c.select_all && cr.clearArray(c.else_instances);
                var l = this.runtime.getCurrentCondition();
                for (n = 0, a = 0, s = h.length; n < s; n++) o = h[n], h[a] = o, l.parameters[1].get(n) ? a++ : c.else_instances.push(o);
                return cr.truncateArray(h, a), c.select_all = !1, cr.shallowAssignArray(c.instances, h), cr.clearArray(h), r--, t.applySolToContainer(), !!c.instances.length
            }
        }, e.prototype.TriggerOnce = function() {
            var t = this.runtime.getCurrentCondition().extra;
            void 0 === t.TriggerOnce_lastTick && (t.TriggerOnce_lastTick = -1);
            var e = t.TriggerOnce_lastTick,
                i = this.runtime.tickcount;
            return t.TriggerOnce_lastTick = i, this.runtime.layout_first_tick || e !== i - 1
        }, e.prototype.Every = function(t) {
            var e = this.runtime.getCurrentCondition(),
                i = e.extra.Every_lastTime || 0,
                r = this.runtime.kahanTime.sum;
            void 0 === e.extra.Every_seconds && (e.extra.Every_seconds = t);
            var n = e.extra.Every_seconds;
            return r >= i + n ? (e.extra.Every_lastTime = i + n, r >= e.extra.Every_lastTime + .04 && (e.extra.Every_lastTime = r), e.extra.Every_seconds = t, !0) : (r < i - .1 && (e.extra.Every_lastTime = r), !1)
        }, e.prototype.PickNth = function(t, e) {
            if (!t) return !1;
            var i = t.getCurrentSol(),
                r = i.getObjects();
            if ((e = cr.floor(e)) < 0 || e >= r.length) return !1;
            var n = r[e];
            return i.pick_one(n), t.applySolToContainer(), !0
        }, e.prototype.PickRandom = function(t) {
            if (!t) return !1;
            var e = t.getCurrentSol(),
                i = e.getObjects(),
                r = cr.floor(Math.random() * i.length);
            if (r >= i.length) return !1;
            var n = i[r];
            return e.pick_one(n), t.applySolToContainer(), !0
        }, e.prototype.CompareVar = function(t, e, i) {
            return cr.do_cmp(t.getValue(), e, i)
        }, e.prototype.IsGroupActive = function(t) {
            var e = this.runtime.groups_by_name[t.toLowerCase()];
            return e && e.group_active
        }, e.prototype.IsPreview = function() {
            return "undefined" != typeof cr_is_preview
        }, e.prototype.PickAll = function(t) {
            return !!t && (!!t.instances.length && (t.getCurrentSol().select_all = !0, t.applySolToContainer(), !0))
        }, e.prototype.IsMobile = function() {
            return this.runtime.isMobile
        }, e.prototype.CompareBetween = function(t, e, i) {
            return t >= e && t <= i
        }, e.prototype.Else = function() {
            var t = this.runtime.getCurrentEventStack();
            return !t.else_branch_ran && !t.last_event_true
        }, e.prototype.OnLoadFinished = function() {
            return !0
        }, e.prototype.OnCanvasSnapshot = function() {
            return !0
        }, e.prototype.EffectsSupported = function() {
            return !!this.runtime.glwrap
        }, e.prototype.OnSaveComplete = function() {
            return !0
        }, e.prototype.OnSaveFailed = function() {
            return !0
        }, e.prototype.OnLoadComplete = function() {
            return !0
        }, e.prototype.OnLoadFailed = function() {
            return !0
        }, e.prototype.ObjectUIDExists = function(t) {
            return !!this.runtime.getObjectByUID(t)
        }, e.prototype.IsOnPlatform = function(t) {
            var e = this.runtime;
            switch (t) {
                case 0:
                    return !(e.isDomFree || e.isNodeWebkit || e.isCordova || e.isWinJS || e.isWindowsPhone8 || e.isBlackberry10 || e.isAmazonWebApp);
                case 1:
                    return e.isiOS;
                case 2:
                    return e.isAndroid;
                case 3:
                    return e.isWindows8App;
                case 4:
                    return e.isWindowsPhone8;
                case 5:
                    return e.isBlackberry10;
                case 6:
                    return e.isTizen;
                case 7:
                    return e.isCocoonJs;
                case 8:
                    return e.isCordova;
                case 9:
                    return e.isArcade;
                case 10:
                    return e.isNodeWebkit;
                case 11:
                    return e.isCrosswalk;
                case 12:
                    return e.isAmazonWebApp;
                case 13:
                    return e.isWindows10;
                default:
                    return !1
            }
        };
        var s = null,
            a = "",
            o = "";

        function h(t, e) {
            return s && t === a && e === o || (s = new RegExp(t, e), a = t, o = e), s.lastIndex = 0, s
        }
        e.prototype.RegexTest = function(t, e, i) {
            return h(e, i).test(t)
        };
        var c = [];

        function l() {}
        e.prototype.PickOverlappingPoint = function(t, e, i) {
            if (!t) return !1;
            var r, n, s, a = t.getCurrentSol(),
                o = a.getObjects(),
                h = this.runtime.getCurrentEventStack().current_event.orblock,
                l = this.runtime.getCurrentCondition();
            for (a.select_all ? (cr.shallowAssignArray(c, o), cr.clearArray(a.else_instances), a.select_all = !1, cr.clearArray(a.instances)) : h ? (cr.shallowAssignArray(c, a.else_instances), cr.clearArray(a.else_instances)) : (cr.shallowAssignArray(c, o), cr.clearArray(a.instances)), r = 0, n = c.length; r < n; ++r)(s = c[r]).update_bbox(), cr.xor(s.contains_pt(e, i), l.inverted) ? a.instances.push(s) : a.else_instances.push(s);
            return t.applySolToContainer(), cr.xor(!!a.instances.length, l.inverted)
        }, e.prototype.IsNaN = function(t) {
            return !!isNaN(t)
        }, e.prototype.AngleWithin = function(t, e, i) {
            return cr.angleDiff(cr.to_radians(t), cr.to_radians(i)) <= cr.to_radians(e)
        }, e.prototype.IsClockwiseFrom = function(t, e) {
            return cr.angleClockwise(cr.to_radians(t), cr.to_radians(e))
        }, e.prototype.IsBetweenAngles = function(t, e, i) {
            var r = cr.to_clamped_radians(t),
                n = cr.to_clamped_radians(e),
                s = cr.to_clamped_radians(i);
            return !cr.angleClockwise(s, n) ? !(!cr.angleClockwise(r, n) && cr.angleClockwise(r, s)) : cr.angleClockwise(r, n) && !cr.angleClockwise(r, s)
        }, e.prototype.IsValueType = function(t, e) {
            return "number" == typeof t ? 0 === e : 1 === e
        }, t.cnds = new e, l.prototype.GoToLayout = function(t) {
            this.runtime.isloading || this.runtime.changelayout || (this.runtime.changelayout = t)
        }, l.prototype.NextPrevLayout = function(t) {
            if (!this.runtime.isloading && !this.runtime.changelayout) {
                var e = this.runtime.layouts_by_index.indexOf(this.runtime.running_layout);
                if ((!t || 0 !== e) && (t || e !== this.runtime.layouts_by_index.length - 1)) {
                    var i = this.runtime.layouts_by_index[e + (t ? -1 : 1)];
                    this.runtime.changelayout = i
                }
            }
        }, l.prototype.CreateObject = function(t, e, i, r) {
            if (e && t) {
                var n = this.runtime.createInstance(t, e, i, r);
                if (n) {
                    var s, a, o;
                    if (this.runtime.isInOnDestroy++, this.runtime.trigger(Object.getPrototypeOf(t.plugin).cnds.OnCreated, n), n.is_contained)
                        for (s = 0, a = n.siblings.length; s < a; s++) o = n.siblings[s], this.runtime.trigger(Object.getPrototypeOf(o.type.plugin).cnds.OnCreated, o);
                    this.runtime.isInOnDestroy--;
                    var h = t.getCurrentSol();
                    if (h.select_all = !1, cr.clearArray(h.instances), h.instances[0] = n, n.is_contained)
                        for (s = 0, a = n.siblings.length; s < a; s++)(h = (o = n.siblings[s]).type.getCurrentSol()).select_all = !1, cr.clearArray(h.instances), h.instances[0] = o
                }
            }
        }, l.prototype.SetLayerVisible = function(t, e) {
            t && t.visible !== e && (t.visible = e, this.runtime.redraw = !0)
        }, l.prototype.SetLayerOpacity = function(t, e) {
            t && (e = cr.clamp(e / 100, 0, 1), t.opacity !== e && (t.opacity = e, this.runtime.redraw = !0))
        }, l.prototype.SetLayerScaleRate = function(t, e) {
            t && t.zoomRate !== e && (t.zoomRate = e, this.runtime.redraw = !0)
        }, l.prototype.SetLayerForceOwnTexture = function(t, e) {
            t && (e = !!e, t.forceOwnTexture !== e && (t.forceOwnTexture = e, this.runtime.redraw = !0))
        }, l.prototype.SetLayoutScale = function(t) {
            this.runtime.running_layout && this.runtime.running_layout.scale !== t && (this.runtime.running_layout.scale = t, this.runtime.running_layout.boundScrolling(), this.runtime.redraw = !0)
        }, l.prototype.ScrollX = function(t) {
            this.runtime.running_layout.scrollToX(t)
        }, l.prototype.ScrollY = function(t) {
            this.runtime.running_layout.scrollToY(t)
        }, l.prototype.Scroll = function(t, e) {
            this.runtime.running_layout.scrollToX(t), this.runtime.running_layout.scrollToY(e)
        }, l.prototype.ScrollToObject = function(t) {
            var e = t.getFirstPicked();
            e && (this.runtime.running_layout.scrollToX(e.x), this.runtime.running_layout.scrollToY(e.y))
        }, l.prototype.SetVar = function(t, e) {
            0 === t.vartype ? cr.is_number(e) ? t.setValue(e) : t.setValue(parseFloat(e)) : 1 === t.vartype && t.setValue(e.toString())
        }, l.prototype.AddVar = function(t, e) {
            0 === t.vartype ? cr.is_number(e) ? t.setValue(t.getValue() + e) : t.setValue(t.getValue() + parseFloat(e)) : 1 === t.vartype && t.setValue(t.getValue() + e.toString())
        }, l.prototype.SubVar = function(t, e) {
            0 === t.vartype && (cr.is_number(e) ? t.setValue(t.getValue() - e) : t.setValue(t.getValue() - parseFloat(e)))
        }, l.prototype.SetGroupActive = function(t, e) {
            var i = this.runtime.groups_by_name[t.toLowerCase()];
            if (i) switch (e) {
                case 0:
                    i.setGroupActive(!1);
                    break;
                case 1:
                    i.setGroupActive(!0);
                    break;
                case 2:
                    i.setGroupActive(!i.group_active)
            }
        }, l.prototype.SetTimescale = function(t) {
            var e = t;
            e < 0 && (e = 0), this.runtime.timescale = e
        }, l.prototype.SetObjectTimescale = function(t, e) {
            var i = e;
            if (i < 0 && (i = 0), t) {
                var r, n, s = t.getCurrentSol().getObjects();
                for (r = 0, n = s.length; r < n; r++) s[r].my_timescale = i
            }
        }, l.prototype.RestoreObjectTimescale = function(t) {
            if (!t) return !1;
            var e, i, r = t.getCurrentSol().getObjects();
            for (e = 0, i = r.length; e < i; e++) r[e].my_timescale = -1
        };
        var u = [];

        function p() {
            var t;
            return u.length ? t = u.pop() : ((t = {}).sols = {}, t.solModifiers = []), t.deleteme = !1, t
        }

        function d(t) {
            cr.wipe(t.sols), cr.clearArray(t.solModifiers), u.push(t)
        }
        var f = [];

        function g() {
            var t;
            return f.length ? t = f.pop() : (t = {}).insts = [], t.sa = !1, t
        }

        function y(t) {
            cr.clearArray(t.insts), f.push(t)
        }

        function m(t, e) {
            var i = t[0] - e[0];
            return 0 !== i ? i : t[1] - e[1]
        }

        function _(t, e) {
            return t[1] - e[1]
        }

        function v() {}
        l.prototype.Wait = function(t) {
            if (!(t < 0)) {
                var e, i, r, n, s, a = this.runtime.getCurrentEventStack(),
                    o = p();
                for (o.time = this.runtime.kahanTime.sum + t, o.signaltag = "", o.signalled = !1, o.ev = a.current_event, o.actindex = a.actindex + 1, e = 0, i = this.runtime.types_by_index.length; e < i; e++)(r = (n = this.runtime.types_by_index[e]).getCurrentSol()).select_all && -1 === a.current_event.solModifiers.indexOf(n) || (o.solModifiers.push(n), (s = g()).sa = r.select_all, cr.shallowAssignArray(s.insts, r.instances), o.sols[e.toString()] = s);
                return this.waits.push(o), !0
            }
        }, l.prototype.WaitForSignal = function(t) {
            var e, i, r, n, s, a = this.runtime.getCurrentEventStack(),
                o = p();
            for (o.time = -1, o.signaltag = t.toLowerCase(), o.signalled = !1, o.ev = a.current_event, o.actindex = a.actindex + 1, e = 0, i = this.runtime.types_by_index.length; e < i; e++)(r = (n = this.runtime.types_by_index[e]).getCurrentSol()).select_all && -1 === a.current_event.solModifiers.indexOf(n) || (o.solModifiers.push(n), (s = g()).sa = r.select_all, cr.shallowAssignArray(s.insts, r.instances), o.sols[e.toString()] = s);
            return this.waits.push(o), !0
        }, l.prototype.Signal = function(t) {
            var e, i, r, n = t.toLowerCase();
            for (e = 0, i = this.waits.length; e < i; ++e) - 1 === (r = this.waits[e]).time && r.signaltag === n && (r.signalled = !0)
        }, l.prototype.SetLayerScale = function(t, e) {
            t && t.scale !== e && (t.scale = e, this.runtime.redraw = !0)
        }, l.prototype.ResetGlobals = function() {
            var t, e, i;
            for (t = 0, e = this.runtime.all_global_vars.length; t < e; t++)(i = this.runtime.all_global_vars[t]).data = i.initial
        }, l.prototype.SetLayoutAngle = function(t) {
            t = cr.to_radians(t), t = cr.clamp_angle(t), this.runtime.running_layout && this.runtime.running_layout.angle !== t && (this.runtime.running_layout.angle = t, this.runtime.redraw = !0)
        }, l.prototype.SetLayerAngle = function(t, e) {
            t && (e = cr.to_radians(e), e = cr.clamp_angle(e), t.angle !== e && (t.angle = e, this.runtime.redraw = !0))
        }, l.prototype.SetLayerParallax = function(t, e, i) {
            if (t && (t.parallaxX !== e / 100 || t.parallaxY !== i / 100)) {
                if (t.parallaxX = e / 100, t.parallaxY = i / 100, 1 !== t.parallaxX || 1 !== t.parallaxY) {
                    var r, n, s = t.instances;
                    for (r = 0, n = s.length; r < n; ++r) s[r].type.any_instance_parallaxed = !0
                }
                this.runtime.redraw = !0
            }
        }, l.prototype.SetLayerBackground = function(t, e) {
            if (t) {
                var i = cr.GetRValue(e),
                    r = cr.GetGValue(e),
                    n = cr.GetBValue(e);
                t.background_color[0] === i && t.background_color[1] === r && t.background_color[2] === n || (t.background_color[0] = i, t.background_color[1] = r, t.background_color[2] = n, this.runtime.redraw = !0)
            }
        }, l.prototype.SetLayerTransparent = function(t, e) {
            t && !!e != !!t.transparent && (t.transparent = !!e, this.runtime.redraw = !0)
        }, l.prototype.SetLayerBlendMode = function(t, e) {
            t && t.blend_mode !== e && (t.blend_mode = e, t.compositeOp = cr.effectToCompositeOp(t.blend_mode), this.runtime.gl && cr.setGLBlend(t, t.blend_mode, this.runtime.gl), this.runtime.redraw = !0)
        }, l.prototype.StopLoop = function() {
            this.runtime.loop_stack_index < 0 || (this.runtime.getCurrentLoop().stopped = !0)
        }, l.prototype.GoToLayoutByName = function(t) {
            var e;
            if (!this.runtime.isloading && !this.runtime.changelayout)
                for (e in this.runtime.layouts)
                    if (this.runtime.layouts.hasOwnProperty(e) && cr.equals_nocase(e, t)) return void(this.runtime.changelayout = this.runtime.layouts[e])
        }, l.prototype.RestartLayout = function(t) {
            var e, i, r;
            if (!this.runtime.isloading && (!this.runtime.changelayout && this.runtime.running_layout))
                for (this.runtime.changelayout = this.runtime.running_layout, e = 0, i = this.runtime.allGroups.length; e < i; e++)(r = this.runtime.allGroups[e]).setGroupActive(r.initially_activated)
        }, l.prototype.SnapshotCanvas = function(t, e) {
            this.runtime.doCanvasSnapshot(0 === t ? "image/png" : "image/jpeg", e / 100)
        }, l.prototype.SetCanvasSize = function(t, e) {
            if (!(t <= 0 || e <= 0)) {
                var i = this.runtime.fullscreen_mode;
                (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.runtime.isNodeFullscreen) && this.runtime.fullscreen_scaling > 0 && (i = this.runtime.fullscreen_scaling), 0 === i ? this.runtime.setSize(t, e, !0) : (this.runtime.original_width = t, this.runtime.original_height = e, this.runtime.setSize(this.runtime.lastWindowWidth, this.runtime.lastWindowHeight, !0))
            }
        }, l.prototype.SetLayoutEffectEnabled = function(t, e) {
            if (this.runtime.running_layout && this.runtime.glwrap) {
                var i = this.runtime.running_layout.getEffectByName(e);
                if (i) {
                    var r = 1 === t;
                    i.active != r && (i.active = r, this.runtime.running_layout.updateActiveEffects(), this.runtime.redraw = !0)
                }
            }
        }, l.prototype.SetLayerEffectEnabled = function(t, e, i) {
            if (t && this.runtime.glwrap) {
                var r = t.getEffectByName(i);
                if (r) {
                    var n = 1 === e;
                    r.active != n && (r.active = n, t.updateActiveEffects(), this.runtime.redraw = !0)
                }
            }
        }, l.prototype.SetLayoutEffectParam = function(t, e, i) {
            if (this.runtime.running_layout && this.runtime.glwrap) {
                var r = this.runtime.running_layout.getEffectByName(t);
                if (r) {
                    var n = this.runtime.running_layout.effect_params[r.index];
                    (e = Math.floor(e)) < 0 || e >= n.length || (1 === this.runtime.glwrap.getProgramParameterType(r.shaderindex, e) && (i /= 100), n[e] !== i && (n[e] = i, r.active && (this.runtime.redraw = !0)))
                }
            }
        }, l.prototype.SetLayerEffectParam = function(t, e, i, r) {
            if (t && this.runtime.glwrap) {
                var n = t.getEffectByName(e);
                if (n) {
                    var s = t.effect_params[n.index];
                    (i = Math.floor(i)) < 0 || i >= s.length || (1 === this.runtime.glwrap.getProgramParameterType(n.shaderindex, i) && (r /= 100), s[i] !== r && (s[i] = r, n.active && (this.runtime.redraw = !0)))
                }
            }
        }, l.prototype.SaveState = function(t) {
            this.runtime.saveToSlot = t
        }, l.prototype.LoadState = function(t) {
            this.runtime.loadFromSlot = t
        }, l.prototype.LoadStateJSON = function(t) {
            this.runtime.loadFromJson = t
        }, l.prototype.SetHalfFramerateMode = function(t) {
            this.runtime.halfFramerateMode = 0 !== t
        }, l.prototype.SetFullscreenQuality = function(t) {
            (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.isNodeFullscreen || 0 !== this.runtime.fullscreen_mode) && (this.runtime.wantFullscreenScalingQuality = 0 !== t, this.runtime.setSize(this.runtime.lastWindowWidth, this.runtime.lastWindowHeight, !0))
        }, l.prototype.ResetPersisted = function() {
            var t, e;
            for (t = 0, e = this.runtime.layouts_by_index.length; t < e; ++t) this.runtime.layouts_by_index[t].persist_data = {}, this.runtime.layouts_by_index[t].first_visit = !0
        }, l.prototype.RecreateInitialObjects = function(t, e, i, r, n) {
            t && this.runtime.running_layout.recreateInitialObjects(t, e, i, r, n)
        }, l.prototype.SetPixelRounding = function(t) {
            this.runtime.pixel_rounding = 0 !== t, this.runtime.redraw = !0
        }, l.prototype.SetMinimumFramerate = function(t) {
            t < 1 && (t = 1), t > 120 && (t = 120), this.runtime.minimumFramerate = t
        }, l.prototype.SortZOrderByInstVar = function(t, e) {
            if (t) {
                var i, r, n, s, a, o, h = t.getCurrentSol().getObjects(),
                    c = [],
                    l = [],
                    u = this.runtime.running_layout,
                    p = t.is_family,
                    d = t.family_index;
                for (i = 0, r = h.length; i < r; ++i)(n = h[i]).layer && (s = p ? n.instance_vars[e + n.type.family_var_map[d]] : n.instance_vars[e], c.push([n.layer.index, n.get_zindex()]), l.push([n, s]));
                if (c.length)
                    for (c.sort(m), l.sort(_), i = 0, r = c.length; i < r; ++i) n = l[i][0], a = u.layers[c[i][0]], o = c[i][1], a.instances[o] !== n && (a.instances[o] = n, n.layer = a, a.setZIndicesStaleFrom(o))
            }
        }, t.acts = new l, v.prototype.int = function(t, e) {
            cr.is_string(e) ? (t.set_int(parseInt(e, 10)), isNaN(t.data) && (t.data = 0)) : t.set_int(e)
        }, v.prototype.float = function(t, e) {
            cr.is_string(e) ? (t.set_float(parseFloat(e)), isNaN(t.data) && (t.data = 0)) : t.set_float(e)
        }, v.prototype.str = function(t, e) {
            cr.is_string(e) ? t.set_string(e) : t.set_string(e.toString())
        }, v.prototype.len = function(t, e) {
            t.set_int(e.length || 0)
        }, v.prototype.random = function(t, e, i) {
            void 0 === i ? t.set_float(Math.random() * e) : t.set_float(Math.random() * (i - e) + e)
        }, v.prototype.sqrt = function(t, e) {
            t.set_float(Math.sqrt(e))
        }, v.prototype.abs = function(t, e) {
            t.set_float(Math.abs(e))
        }, v.prototype.round = function(t, e) {
            t.set_int(Math.round(e))
        }, v.prototype.floor = function(t, e) {
            t.set_int(Math.floor(e))
        }, v.prototype.ceil = function(t, e) {
            t.set_int(Math.ceil(e))
        }, v.prototype.sin = function(t, e) {
            t.set_float(Math.sin(cr.to_radians(e)))
        }, v.prototype.cos = function(t, e) {
            t.set_float(Math.cos(cr.to_radians(e)))
        }, v.prototype.tan = function(t, e) {
            t.set_float(Math.tan(cr.to_radians(e)))
        }, v.prototype.asin = function(t, e) {
            t.set_float(cr.to_degrees(Math.asin(e)))
        }, v.prototype.acos = function(t, e) {
            t.set_float(cr.to_degrees(Math.acos(e)))
        }, v.prototype.atan = function(t, e) {
            t.set_float(cr.to_degrees(Math.atan(e)))
        }, v.prototype.exp = function(t, e) {
            t.set_float(Math.exp(e))
        }, v.prototype.ln = function(t, e) {
            t.set_float(Math.log(e))
        }, v.prototype.log10 = function(t, e) {
            t.set_float(Math.log(e) / Math.LN10)
        }, v.prototype.max = function(t) {
            var e, i, r, n = arguments[1];
            for ("number" != typeof n && (n = 0), e = 2, i = arguments.length; e < i; e++) "number" == typeof(r = arguments[e]) && n < r && (n = r);
            t.set_float(n)
        }, v.prototype.min = function(t) {
            var e, i, r, n = arguments[1];
            for ("number" != typeof n && (n = 0), e = 2, i = arguments.length; e < i; e++) "number" == typeof(r = arguments[e]) && n > r && (n = r);
            t.set_float(n)
        }, v.prototype.dt = function(t) {
            t.set_float(this.runtime.dt)
        }, v.prototype.timescale = function(t) {
            t.set_float(this.runtime.timescale)
        }, v.prototype.wallclocktime = function(t) {
            t.set_float((Date.now() - this.runtime.start_time) / 1e3)
        }, v.prototype.time = function(t) {
            t.set_float(this.runtime.kahanTime.sum)
        }, v.prototype.tickcount = function(t) {
            t.set_int(this.runtime.tickcount)
        }, v.prototype.objectcount = function(t) {
            t.set_int(this.runtime.objectcount)
        }, v.prototype.fps = function(t) {
            t.set_int(this.runtime.fps)
        }, v.prototype.loopindex = function(t, e) {
            var i, r;
            if (this.runtime.loop_stack.length)
                if (e) {
                    for (r = this.runtime.loop_stack_index; r >= 0; --r)
                        if ((i = this.runtime.loop_stack[r]).name === e) return void t.set_int(i.index);
                    t.set_int(0)
                } else i = this.runtime.getCurrentLoop(), t.set_int(i ? i.index : -1);
            else t.set_int(0)
        }, v.prototype.distance = function(t, e, i, r, n) {
            t.set_float(cr.distanceTo(e, i, r, n))
        }, v.prototype.angle = function(t, e, i, r, n) {
            t.set_float(cr.to_degrees(cr.angleTo(e, i, r, n)))
        }, v.prototype.scrollx = function(t) {
            t.set_float(this.runtime.running_layout.scrollX)
        }, v.prototype.scrolly = function(t) {
            t.set_float(this.runtime.running_layout.scrollY)
        }, v.prototype.newline = function(t) {
            t.set_string("\n")
        }, v.prototype.lerp = function(t, e, i, r) {
            t.set_float(cr.lerp(e, i, r))
        }, v.prototype.qarp = function(t, e, i, r, n) {
            t.set_float(cr.qarp(e, i, r, n))
        }, v.prototype.cubic = function(t, e, i, r, n, s) {
            t.set_float(cr.cubic(e, i, r, n, s))
        }, v.prototype.cosp = function(t, e, i, r) {
            t.set_float(cr.cosp(e, i, r))
        }, v.prototype.windowwidth = function(t) {
            t.set_int(this.runtime.width)
        }, v.prototype.windowheight = function(t) {
            t.set_int(this.runtime.height)
        }, v.prototype.uppercase = function(t, e) {
            t.set_string(cr.is_string(e) ? e.toUpperCase() : "")
        }, v.prototype.lowercase = function(t, e) {
            t.set_string(cr.is_string(e) ? e.toLowerCase() : "")
        }, v.prototype.clamp = function(t, e, i, r) {
            e < i ? t.set_float(i) : e > r ? t.set_float(r) : t.set_float(e)
        }, v.prototype.layerscale = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(i.scale) : t.set_float(0)
        }, v.prototype.layeropacity = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(100 * i.opacity) : t.set_float(0)
        }, v.prototype.layerscalerate = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(i.zoomRate) : t.set_float(0)
        }, v.prototype.layerparallaxx = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(100 * i.parallaxX) : t.set_float(0)
        }, v.prototype.layerparallaxy = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(100 * i.parallaxY) : t.set_float(0)
        }, v.prototype.layerindex = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_int(i.index) : t.set_int(-1)
        }, v.prototype.layoutscale = function(t) {
            this.runtime.running_layout ? t.set_float(this.runtime.running_layout.scale) : t.set_float(0)
        }, v.prototype.layoutangle = function(t) {
            t.set_float(cr.to_degrees(this.runtime.running_layout.angle))
        }, v.prototype.layerangle = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(cr.to_degrees(i.angle)) : t.set_float(0)
        }, v.prototype.layoutwidth = function(t) {
            t.set_int(this.runtime.running_layout.width)
        }, v.prototype.layoutheight = function(t) {
            t.set_int(this.runtime.running_layout.height)
        }, v.prototype.find = function(t, e, i) {
            cr.is_string(e) && cr.is_string(i) ? t.set_int(e.search(new RegExp(cr.regexp_escape(i), "i"))) : t.set_int(-1)
        }, v.prototype.findcase = function(t, e, i) {
            cr.is_string(e) && cr.is_string(i) ? t.set_int(e.search(new RegExp(cr.regexp_escape(i), ""))) : t.set_int(-1)
        }, v.prototype.left = function(t, e, i) {
            t.set_string(cr.is_string(e) ? e.substr(0, i) : "")
        }, v.prototype.right = function(t, e, i) {
            t.set_string(cr.is_string(e) ? e.substr(e.length - i) : "")
        }, v.prototype.mid = function(t, e, i, r) {
            t.set_string(cr.is_string(e) ? e.substr(i, r) : "")
        }, v.prototype.tokenat = function(t, e, i, r) {
            if (cr.is_string(e) && cr.is_string(r)) {
                var n = e.split(r),
                    s = cr.floor(i);
                s < 0 || s >= n.length ? t.set_string("") : t.set_string(n[s])
            } else t.set_string("")
        }, v.prototype.tokencount = function(t, e, i) {
            cr.is_string(e) && e.length ? t.set_int(e.split(i).length) : t.set_int(0)
        }, v.prototype.replace = function(t, e, i, r) {
            cr.is_string(e) && cr.is_string(i) && cr.is_string(r) ? t.set_string(e.replace(new RegExp(cr.regexp_escape(i), "gi"), r)) : t.set_string(cr.is_string(e) ? e : "")
        }, v.prototype.trim = function(t, e) {
            t.set_string(cr.is_string(e) ? e.trim() : "")
        }, v.prototype.pi = function(t) {
            t.set_float(cr.PI)
        }, v.prototype.layoutname = function(t) {
            this.runtime.running_layout ? t.set_string(this.runtime.running_layout.name) : t.set_string("")
        }, v.prototype.renderer = function(t) {
            t.set_string(this.runtime.gl ? "webgl" : "canvas2d")
        }, v.prototype.rendererdetail = function(t) {
            t.set_string(this.runtime.glUnmaskedRenderer)
        }, v.prototype.anglediff = function(t, e, i) {
            t.set_float(cr.to_degrees(cr.angleDiff(cr.to_radians(e), cr.to_radians(i))))
        }, v.prototype.choose = function(t) {
            var e = cr.floor(Math.random() * (arguments.length - 1));
            t.set_any(arguments[e + 1])
        }, v.prototype.rgb = function(t, e, i, r) {
            t.set_int(cr.RGB(e, i, r))
        }, v.prototype.projectversion = function(t) {
            t.set_string(this.runtime.versionstr)
        }, v.prototype.projectname = function(t) {
            t.set_string(this.runtime.projectName)
        }, v.prototype.anglelerp = function(t, e, i, r) {
            e = cr.to_radians(e), i = cr.to_radians(i);
            var n = cr.angleDiff(e, i);
            cr.angleClockwise(i, e) ? t.set_float(cr.to_clamped_degrees(e + n * r)) : t.set_float(cr.to_clamped_degrees(e - n * r))
        }, v.prototype.anglerotate = function(t, e, i, r) {
            e = cr.to_radians(e), i = cr.to_radians(i), r = cr.to_radians(r), t.set_float(cr.to_clamped_degrees(cr.angleRotate(e, i, r)))
        }, v.prototype.zeropad = function(t, e, i) {
            var r = e < 0 ? "-" : "";
            e < 0 && (e = -e);
            for (var n = i - e.toString().length, s = 0; s < n; s++) r += "0";
            t.set_string(r + e.toString())
        }, v.prototype.cpuutilisation = function(t) {
            t.set_float(this.runtime.cpuutilisation / 1e3)
        }, v.prototype.viewportleft = function(t, e) {
            var i = this.runtime.getLayer(e);
            t.set_float(i ? i.viewLeft : 0)
        }, v.prototype.viewporttop = function(t, e) {
            var i = this.runtime.getLayer(e);
            t.set_float(i ? i.viewTop : 0)
        }, v.prototype.viewportright = function(t, e) {
            var i = this.runtime.getLayer(e);
            t.set_float(i ? i.viewRight : 0)
        }, v.prototype.viewportbottom = function(t, e) {
            var i = this.runtime.getLayer(e);
            t.set_float(i ? i.viewBottom : 0)
        }, v.prototype.loadingprogress = function(t) {
            t.set_float(this.runtime.loadingprogress)
        }, v.prototype.unlerp = function(t, e, i, r) {
            t.set_float(cr.unlerp(e, i, r))
        }, v.prototype.canvassnapshot = function(t) {
            t.set_string(this.runtime.snapshotData)
        }, v.prototype.urlencode = function(t, e) {
            t.set_string(encodeURIComponent(e))
        }, v.prototype.urldecode = function(t, e) {
            t.set_string(decodeURIComponent(e))
        }, v.prototype.canvastolayerx = function(t, e, i, r) {
            var n = this.runtime.getLayer(e);
            t.set_float(n ? n.canvasToLayer(i, r, !0) : 0)
        }, v.prototype.canvastolayery = function(t, e, i, r) {
            var n = this.runtime.getLayer(e);
            t.set_float(n ? n.canvasToLayer(i, r, !1) : 0)
        }, v.prototype.layertocanvasx = function(t, e, i, r) {
            var n = this.runtime.getLayer(e);
            t.set_float(n ? n.layerToCanvas(i, r, !0) : 0)
        }, v.prototype.layertocanvasy = function(t, e, i, r) {
            var n = this.runtime.getLayer(e);
            t.set_float(n ? n.layerToCanvas(i, r, !1) : 0)
        }, v.prototype.savestatejson = function(t) {
            t.set_string(this.runtime.lastSaveJson)
        }, v.prototype.imagememoryusage = function(t) {
            this.runtime.glwrap ? t.set_float(Math.round(100 * this.runtime.glwrap.estimateVRAM() / 1048576) / 100) : t.set_float(0)
        }, v.prototype.regexsearch = function(t, e, i, r) {
            var n = h(i, r);
            t.set_int(e ? e.search(n) : -1)
        }, v.prototype.regexreplace = function(t, e, i, r, n) {
            var s = h(i, r);
            t.set_string(e ? e.replace(s, n) : "")
        };
        var b = [],
            w = "",
            x = "",
            S = "";

        function T(t, e, i) {
            if (t !== w || e !== x || i !== S) {
                var r = h(e, i);
                b = t.match(r), w = t, x = e, S = i
            }
        }
        v.prototype.regexmatchcount = function(t, e, i, r) {
            h(i, r);
            T(e.toString(), i, r), t.set_int(b ? b.length : 0)
        }, v.prototype.regexmatchat = function(t, e, i, r, n) {
            n = Math.floor(n);
            h(i, r);
            T(e.toString(), i, r), !b || n < 0 || n >= b.length ? t.set_string("") : t.set_string(b[n])
        }, v.prototype.infinity = function(t) {
            t.set_float(1 / 0)
        }, v.prototype.setbit = function(t, e, i, r) {
            e |= 0, i |= 0, r = 0 !== r ? 1 : 0, t.set_int(e & ~(1 << i) | r << i)
        }, v.prototype.togglebit = function(t, e, i) {
            e |= 0, i |= 0, t.set_int(e ^ 1 << i)
        }, v.prototype.getbit = function(t, e, i) {
            e |= 0, i |= 0, t.set_int(e & 1 << i ? 1 : 0)
        }, v.prototype.originalwindowwidth = function(t) {
            t.set_int(this.runtime.original_width)
        }, v.prototype.originalwindowheight = function(t) {
            t.set_int(this.runtime.original_height)
        }, t.exps = new v, t.runWaits = function() {
            var t, e, i, r, n, s, a, o = this.runtime.getCurrentEventStack();
            for (t = 0, i = this.waits.length; t < i; t++) {
                if (-1 === (r = this.waits[t]).time) {
                    if (!r.signalled) continue
                } else if (r.time > this.runtime.kahanTime.sum) continue;
                for (n in o.current_event = r.ev, o.actindex = r.actindex, o.cndindex = 0, r.sols) r.sols.hasOwnProperty(n) && (s = this.runtime.types_by_index[parseInt(n, 10)].getCurrentSol(), a = r.sols[n], s.select_all = a.sa, cr.shallowAssignArray(s.instances, a.insts), y(a));
                r.ev.resume_actions_and_subevents(), this.runtime.clearSol(r.solModifiers), r.deleteme = !0
            }
            for (t = 0, e = 0, i = this.waits.length; t < i; t++) r = this.waits[t], this.waits[e] = r, r.deleteme ? d(r) : e++;
            cr.truncateArray(this.waits, e)
        }
    }(),
    function() {
        cr.add_common_aces = function(t, e) {
            var i = t[1],
                r = t[3],
                n = t[4],
                s = t[5],
                a = t[6],
                o = t[7],
                h = t[8];
            e.cnds || (e.cnds = {}), e.acts || (e.acts = {}), e.exps || (e.exps = {});
            var c = e.cnds,
                l = e.acts,
                u = e.exps;
            r && (c.CompareX = function(t, e) {
                return cr.do_cmp(this.x, t, e)
            }, c.CompareY = function(t, e) {
                return cr.do_cmp(this.y, t, e)
            }, c.IsOnScreen = function() {
                var t = this.layer;
                this.update_bbox();
                var e = this.bbox;
                return !(e.right < t.viewLeft || e.bottom < t.viewTop || e.left > t.viewRight || e.top > t.viewBottom)
            }, c.IsOutsideLayout = function() {
                this.update_bbox();
                var t = this.bbox,
                    e = this.runtime.running_layout;
                return t.right < 0 || t.bottom < 0 || t.left > e.width || t.top > e.height
            }, c.PickDistance = function(t, e, i) {
                var r = this.getCurrentSol(),
                    n = r.getObjects();
                if (!n.length) return !1;
                var s, a, o, h = n[0],
                    c = h,
                    l = cr.distanceTo(h.x, h.y, e, i);
                for (s = 1, a = n.length; s < a; s++) h = n[s], o = cr.distanceTo(h.x, h.y, e, i), (0 === t && o < l || 1 === t && o > l) && (l = o, c = h);
                return r.pick_one(c), !0
            }, l.SetX = function(t) {
                this.x !== t && (this.x = t, this.set_bbox_changed())
            }, l.SetY = function(t) {
                this.y !== t && (this.y = t, this.set_bbox_changed())
            }, l.SetPos = function(t, e) {
                this.x === t && this.y === e || (this.x = t, this.y = e, this.set_bbox_changed())
            }, l.SetPosToObject = function(t, e) {
                var i, r, n = t.getPairedInstance(this);
                n && (n.getImagePoint ? (i = n.getImagePoint(e, !0), r = n.getImagePoint(e, !1)) : (i = n.x, r = n.y), this.x === i && this.y === r || (this.x = i, this.y = r, this.set_bbox_changed()))
            }, l.MoveForward = function(t) {
                0 !== t && (this.x += Math.cos(this.angle) * t, this.y += Math.sin(this.angle) * t, this.set_bbox_changed())
            }, l.MoveAtAngle = function(t, e) {
                0 !== e && (this.x += Math.cos(cr.to_radians(t)) * e, this.y += Math.sin(cr.to_radians(t)) * e, this.set_bbox_changed())
            }, u.X = function(t) {
                t.set_float(this.x)
            }, u.Y = function(t) {
                t.set_float(this.y)
            }, u.dt = function(t) {
                t.set_float(this.runtime.getDt(this))
            }), n && (c.CompareWidth = function(t, e) {
                return cr.do_cmp(this.width, t, e)
            }, c.CompareHeight = function(t, e) {
                return cr.do_cmp(this.height, t, e)
            }, l.SetWidth = function(t) {
                this.width !== t && (this.width = t, this.set_bbox_changed())
            }, l.SetHeight = function(t) {
                this.height !== t && (this.height = t, this.set_bbox_changed())
            }, l.SetSize = function(t, e) {
                this.width === t && this.height === e || (this.width = t, this.height = e, this.set_bbox_changed())
            }, u.Width = function(t) {
                t.set_float(this.width)
            }, u.Height = function(t) {
                t.set_float(this.height)
            }, u.BBoxLeft = function(t) {
                this.update_bbox(), t.set_float(this.bbox.left)
            }, u.BBoxTop = function(t) {
                this.update_bbox(), t.set_float(this.bbox.top)
            }, u.BBoxRight = function(t) {
                this.update_bbox(), t.set_float(this.bbox.right)
            }, u.BBoxBottom = function(t) {
                this.update_bbox(), t.set_float(this.bbox.bottom)
            }), s && (c.AngleWithin = function(t, e) {
                return cr.angleDiff(this.angle, cr.to_radians(e)) <= cr.to_radians(t)
            }, c.IsClockwiseFrom = function(t) {
                return cr.angleClockwise(this.angle, cr.to_radians(t))
            }, c.IsBetweenAngles = function(t, e) {
                var i = cr.to_clamped_radians(t),
                    r = cr.to_clamped_radians(e),
                    n = cr.clamp_angle(this.angle);
                return !cr.angleClockwise(r, i) ? !(!cr.angleClockwise(n, i) && cr.angleClockwise(n, r)) : cr.angleClockwise(n, i) && !cr.angleClockwise(n, r)
            }, l.SetAngle = function(t) {
                var e = cr.to_radians(cr.clamp_angle_degrees(t));
                isNaN(e) || this.angle !== e && (this.angle = e, this.set_bbox_changed())
            }, l.RotateClockwise = function(t) {
                0 === t || isNaN(t) || (this.angle += cr.to_radians(t), this.angle = cr.clamp_angle(this.angle), this.set_bbox_changed())
            }, l.RotateCounterclockwise = function(t) {
                0 === t || isNaN(t) || (this.angle -= cr.to_radians(t), this.angle = cr.clamp_angle(this.angle), this.set_bbox_changed())
            }, l.RotateTowardAngle = function(t, e) {
                var i = cr.angleRotate(this.angle, cr.to_radians(e), cr.to_radians(t));
                isNaN(i) || this.angle !== i && (this.angle = i, this.set_bbox_changed())
            }, l.RotateTowardPosition = function(t, e, i) {
                var r = e - this.x,
                    n = i - this.y,
                    s = Math.atan2(n, r),
                    a = cr.angleRotate(this.angle, s, cr.to_radians(t));
                isNaN(a) || this.angle !== a && (this.angle = a, this.set_bbox_changed())
            }, l.SetTowardPosition = function(t, e) {
                var i = t - this.x,
                    r = e - this.y,
                    n = Math.atan2(r, i);
                isNaN(n) || this.angle !== n && (this.angle = n, this.set_bbox_changed())
            }, u.Angle = function(t) {
                t.set_float(cr.to_clamped_degrees(this.angle))
            }), i || (c.CompareInstanceVar = function(t, e, i) {
                return cr.do_cmp(this.instance_vars[t], e, i)
            }, c.IsBoolInstanceVarSet = function(t) {
                return this.instance_vars[t]
            }, c.PickInstVarHiLow = function(t, e) {
                var i = this.getCurrentSol(),
                    r = i.getObjects();
                if (!r.length) return !1;
                var n, s, a, o = r[0],
                    h = o,
                    c = o.instance_vars[e];
                for (n = 1, s = r.length; n < s; n++) a = (o = r[n]).instance_vars[e], (0 === t && a < c || 1 === t && a > c) && (c = a, h = o);
                return i.pick_one(h), !0
            }, c.PickByUID = function(t) {
                var e, i, r, n, s, a, o;
                if (this.runtime.getCurrentCondition().inverted) {
                    if ((o = this.getCurrentSol()).select_all) {
                        for (o.select_all = !1, cr.clearArray(o.instances), cr.clearArray(o.else_instances), e = 0, i = (a = this.instances).length; e < i; e++)(n = a[e]).uid === t ? o.else_instances.push(n) : o.instances.push(n);
                        return this.applySolToContainer(), !!o.instances.length
                    }
                    for (e = 0, r = 0, i = o.instances.length; e < i; e++) n = o.instances[e], o.instances[r] = n, n.uid === t ? o.else_instances.push(n) : r++;
                    return cr.truncateArray(o.instances, r), this.applySolToContainer(), !!o.instances.length
                }
                if (!(n = this.runtime.getObjectByUID(t))) return !1;
                if (!(o = this.getCurrentSol()).select_all && -1 === o.instances.indexOf(n)) return !1;
                if (this.is_family) {
                    for (e = 0, i = (s = n.type.families).length; e < i; e++)
                        if (s[e] === this) return o.pick_one(n), this.applySolToContainer(), !0
                } else if (n.type === this) return o.pick_one(n), this.applySolToContainer(), !0;
                return !1
            }, c.OnCreated = function() {
                return !0
            }, c.OnDestroyed = function() {
                return !0
            }, l.SetInstanceVar = function(t, e) {
                var i = this.instance_vars;
                cr.is_number(i[t]) ? cr.is_number(e) ? i[t] = e : i[t] = parseFloat(e) : cr.is_string(i[t]) && (cr.is_string(e) ? i[t] = e : i[t] = e.toString())
            }, l.AddInstanceVar = function(t, e) {
                var i = this.instance_vars;
                cr.is_number(i[t]) ? cr.is_number(e) ? i[t] += e : i[t] += parseFloat(e) : cr.is_string(i[t]) && (cr.is_string(e) ? i[t] += e : i[t] += e.toString())
            }, l.SubInstanceVar = function(t, e) {
                var i = this.instance_vars;
                cr.is_number(i[t]) && (cr.is_number(e) ? i[t] -= e : i[t] -= parseFloat(e))
            }, l.SetBoolInstanceVar = function(t, e) {
                this.instance_vars[t] = e ? 1 : 0
            }, l.ToggleBoolInstanceVar = function(t) {
                this.instance_vars[t] = 1 - this.instance_vars[t]
            }, l.Destroy = function() {
                this.runtime.DestroyInstance(this)
            }, l.LoadFromJsonString || (l.LoadFromJsonString = function(t) {
                var e, i, r, n;
                try {
                    e = JSON.parse(t)
                } catch (t) {
                    return
                }
                if (this.runtime.loadInstanceFromJSON(this, e, !0), this.afterLoad && this.afterLoad(), this.behavior_insts)
                    for (i = 0, r = this.behavior_insts.length; i < r; ++i)(n = this.behavior_insts[i]).afterLoad && n.afterLoad()
            }), u.Count = function(t) {
                var e, i, r, n = t.object_class.instances.length;
                for (e = 0, i = this.runtime.createRow.length; e < i; e++) r = this.runtime.createRow[e], t.object_class.is_family ? r.type.families.indexOf(t.object_class) >= 0 && n++ : r.type === t.object_class && n++;
                t.set_int(n)
            }, u.PickedCount = function(t) {
                t.set_int(t.object_class.getCurrentSol().getObjects().length)
            }, u.UID = function(t) {
                t.set_int(this.uid)
            }, u.IID = function(t) {
                t.set_int(this.get_iid())
            }, u.AsJSON || (u.AsJSON = function(t) {
                t.set_string(JSON.stringify(this.runtime.saveInstanceToJSON(this, !0)))
            })), a && (c.IsVisible = function() {
                return this.visible
            }, l.SetVisible = function(t) {
                !t != !this.visible && (this.visible = !!t, this.runtime.redraw = !0)
            }, c.CompareOpacity = function(t, e) {
                return cr.do_cmp(cr.round6dp(100 * this.opacity), t, e)
            }, l.SetOpacity = function(t) {
                var e = t / 100;
                e < 0 ? e = 0 : e > 1 && (e = 1), e !== this.opacity && (this.opacity = e, this.runtime.redraw = !0)
            }, u.Opacity = function(t) {
                t.set_float(cr.round6dp(100 * this.opacity))
            }), o && (c.IsOnLayer = function(t) {
                return !!t && this.layer === t
            }, c.PickTopBottom = function(t) {
                var e = this.getCurrentSol(),
                    i = e.getObjects();
                if (!i.length) return !1;
                var r, n, s = i[0],
                    a = s;
                for (r = 1, n = i.length; r < n; r++) s = i[r], 0 === t ? (s.layer.index > a.layer.index || s.layer.index === a.layer.index && s.get_zindex() > a.get_zindex()) && (a = s) : (s.layer.index < a.layer.index || s.layer.index === a.layer.index && s.get_zindex() < a.get_zindex()) && (a = s);
                return e.pick_one(a), !0
            }, l.MoveToTop = function() {
                var t = this.layer,
                    e = t.instances;
                e.length && e[e.length - 1] === this || (t.removeFromInstanceList(this, !1), t.appendToInstanceList(this, !1), this.runtime.redraw = !0)
            }, l.MoveToBottom = function() {
                var t = this.layer,
                    e = t.instances;
                e.length && e[0] === this || (t.removeFromInstanceList(this, !1), t.prependToInstanceList(this, !1), this.runtime.redraw = !0)
            }, l.MoveToLayer = function(t) {
                t && t != this.layer && (this.layer.removeFromInstanceList(this, !0), this.layer = t, t.appendToInstanceList(this, !0), this.runtime.redraw = !0)
            }, l.ZMoveToObject = function(t, e) {
                var i = 0 === t;
                if (e) {
                    var r = e.getFirstPicked(this);
                    r && r.uid !== this.uid && (this.layer.index !== r.layer.index && (this.layer.removeFromInstanceList(this, !0), this.layer = r.layer, r.layer.appendToInstanceList(this, !0)), this.layer.moveInstanceAdjacent(this, r, i), this.runtime.redraw = !0)
                }
            }, u.LayerNumber = function(t) {
                t.set_int(this.layer.number)
            }, u.LayerName = function(t) {
                t.set_string(this.layer.name)
            }, u.ZIndex = function(t) {
                t.set_int(this.get_zindex())
            }), h && (l.SetEffectEnabled = function(t, e) {
                if (this.runtime.glwrap) {
                    var i = this.type.getEffectIndexByName(e);
                    if (!(i < 0)) {
                        var r = 1 === t;
                        this.active_effect_flags[i] !== r && (this.active_effect_flags[i] = r, this.updateActiveEffects(), this.runtime.redraw = !0)
                    }
                }
            }, l.SetEffectParam = function(t, e, i) {
                if (this.runtime.glwrap) {
                    var r = this.type.getEffectIndexByName(t);
                    if (!(r < 0)) {
                        var n = this.type.effect_types[r],
                            s = this.effect_params[r];
                        (e = Math.floor(e)) < 0 || e >= s.length || (1 === this.runtime.glwrap.getProgramParameterType(n.shaderindex, e) && (i /= 100), s[e] !== i && (s[e] = i, n.active && (this.runtime.redraw = !0)))
                    }
                }
            })
        }, cr.set_bbox_changed = function() {
            this.bbox_changed = !0, this.cell_changed = !0, this.type.any_cell_changed = !0, this.runtime.redraw = !0;
            var t, e, i = this.bbox_changed_callbacks;
            for (t = 0, e = i.length; t < e; ++t) i[t](this);
            this.layer.useRenderCells && this.update_bbox()
        }, cr.add_bbox_changed_callback = function(t) {
            t && this.bbox_changed_callbacks.push(t)
        }, cr.update_bbox = function() {
            if (this.bbox_changed) {
                var t = this.bbox,
                    e = this.bquad;
                t.set(this.x, this.y, this.x + this.width, this.y + this.height), t.offset(-this.hotspotX * this.width, -this.hotspotY * this.height), this.angle ? (t.offset(-this.x, -this.y), e.set_from_rotated_rect(t, this.angle), e.offset(this.x, this.y), e.bounding_box(t)) : e.set_from_rect(t), t.normalize(), this.bbox_changed = !1, this.update_render_cell()
            }
        };
        var t = new cr.rect(0, 0, 0, 0);
        cr.update_render_cell = function() {
            if (this.layer.useRenderCells) {
                var e = this.layer.render_grid,
                    i = this.bbox;
                t.set(e.XToCell(i.left), e.YToCell(i.top), e.XToCell(i.right), e.YToCell(i.bottom)), this.rendercells.equals(t) || (this.rendercells.right < this.rendercells.left ? e.update(this, null, t) : e.update(this, this.rendercells, t), this.rendercells.copy(t), this.layer.render_list_stale = !0)
            }
        }, cr.update_collision_cell = function() {
            if (this.cell_changed && this.collisionsEnabled) {
                this.update_bbox();
                var e = this.type.collision_grid,
                    i = this.bbox;
                t.set(e.XToCell(i.left), e.YToCell(i.top), e.XToCell(i.right), e.YToCell(i.bottom)), this.collcells.equals(t) || (this.collcells.right < this.collcells.left ? e.update(this, null, t) : e.update(this, this.collcells, t), this.collcells.copy(t), this.cell_changed = !1)
            }
        }, cr.inst_contains_pt = function(t, e) {
            return !!this.bbox.contains_pt(t, e) && (!!this.bquad.contains_pt(t, e) && (this.tilemap_exists ? this.testPointOverlapTile(t, e) : !(this.collision_poly && !this.collision_poly.is_empty()) || (this.collision_poly.cache_poly(this.width, this.height, this.angle), this.collision_poly.contains_pt(t - this.x, e - this.y))))
        }, cr.inst_get_iid = function() {
            return this.type.updateIIDs(), this.iid
        }, cr.inst_get_zindex = function() {
            return this.layer.updateZIndices(), this.zindex
        }, cr.inst_updateActiveEffects = function() {
            var t, e, i;
            cr.clearArray(this.active_effect_types);
            var r = !0;
            for (t = 0, e = this.active_effect_flags.length; t < e; t++) this.active_effect_flags[t] && (i = this.type.effect_types[t], this.active_effect_types.push(i), i.preservesOpaqueness || (r = !1));
            this.uses_shaders = !!this.active_effect_types.length, this.shaders_preserve_opaqueness = r
        }, cr.inst_toString = function() {
            return "Inst" + this.puid
        }, cr.type_getFirstPicked = function(t) {
            var e, i, r;
            if (t && t.is_contained && t.type != this)
                for (e = 0, i = t.siblings.length; e < i; e++)
                    if ((r = t.siblings[e]).type == this) return r;
            var n = this.getCurrentSol().getObjects();
            return n.length ? n[0] : null
        }, cr.type_getPairedInstance = function(t) {
            var e = this.getCurrentSol().getObjects();
            return e.length ? e[t.get_iid() % e.length] : null
        }, cr.type_updateIIDs = function() {
            if (this.stale_iids && !this.is_family) {
                var t, e;
                for (t = 0, e = this.instances.length; t < e; t++) this.instances[t].iid = t;
                var i = t,
                    r = this.runtime.createRow;
                for (t = 0, e = r.length; t < e; ++t) r[t].type === this && (r[t].iid = i++);
                this.stale_iids = !1
            }
        }, cr.type_getInstanceByIID = function(t) {
            if (t < this.instances.length) return this.instances[t];
            t -= this.instances.length;
            var e, i, r = this.runtime.createRow;
            for (e = 0, i = r.length; e < i; ++e)
                if (r[e].type === this) {
                    if (0 === t) return r[e];
                    --t
                }
            return null
        }, cr.type_getCurrentSol = function() {
            return this.solstack[this.cur_sol]
        }, cr.type_pushCleanSol = function() {
            this.cur_sol++, this.cur_sol === this.solstack.length ? this.solstack.push(new cr.selection(this)) : (this.solstack[this.cur_sol].select_all = !0, cr.clearArray(this.solstack[this.cur_sol].else_instances))
        }, cr.type_pushCopySol = function() {
            this.cur_sol++, this.cur_sol === this.solstack.length && this.solstack.push(new cr.selection(this));
            var t = this.solstack[this.cur_sol],
                e = this.solstack[this.cur_sol - 1];
            e.select_all ? (t.select_all = !0, cr.clearArray(t.else_instances)) : (t.select_all = !1, cr.shallowAssignArray(t.instances, e.instances), cr.shallowAssignArray(t.else_instances, e.else_instances))
        }, cr.type_popSol = function() {
            this.cur_sol--
        }, cr.type_getBehaviorByName = function(t) {
            var e, i, r, n, s, a = 0;
            if (!this.is_family)
                for (e = 0, i = this.families.length; e < i; e++)
                    for (r = 0, n = (s = this.families[e]).behaviors.length; r < n; r++) {
                        if (t === s.behaviors[r].name) return this.extra.lastBehIndex = a, s.behaviors[r];
                        a++
                    }
            for (e = 0, i = this.behaviors.length; e < i; e++) {
                if (t === this.behaviors[e].name) return this.extra.lastBehIndex = a, this.behaviors[e];
                a++
            }
            return null
        }, cr.type_getBehaviorIndexByName = function(t) {
            return this.getBehaviorByName(t) ? this.extra.lastBehIndex : -1
        }, cr.type_getEffectIndexByName = function(t) {
            var e, i;
            for (e = 0, i = this.effect_types.length; e < i; e++)
                if (this.effect_types[e].name === t) return e;
            return -1
        }, cr.type_applySolToContainer = function() {
            if (this.is_contained && !this.is_family) {
                var t, e, i, r, n, s, a;
                this.updateIIDs();
                var o = (s = this.getCurrentSol()).select_all,
                    h = this.runtime.getCurrentEventStack(),
                    c = h && h.current_event && h.current_event.orblock;
                for (t = 0, e = this.container.length; t < e; t++)
                    if ((n = this.container[t]) !== this && (n.updateIIDs(), (a = n.getCurrentSol()).select_all = o, !o)) {
                        for (cr.clearArray(a.instances), i = 0, r = s.instances.length; i < r; ++i) a.instances[i] = n.getInstanceByIID(s.instances[i].iid);
                        if (c)
                            for (cr.clearArray(a.else_instances), i = 0, r = s.else_instances.length; i < r; ++i) a.else_instances[i] = n.getInstanceByIID(s.else_instances[i].iid)
                    }
            }
        }, cr.type_toString = function() {
            return "Type" + this.sid
        }, cr.do_cmp = function(t, e, i) {
            if (void 0 === t || void 0 === i) return !1;
            switch (e) {
                case 0:
                    return t === i;
                case 1:
                    return t !== i;
                case 2:
                    return t < i;
                case 3:
                    return t <= i;
                case 4:
                    return t > i;
                case 5:
                    return t >= i;
                default:
                    return !1
            }
        }
    }(), cr.shaders = {}, cr.plugins_.Arr = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.plugins_.Arr.prototype;
        t.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function() {}, t.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var e = t.Instance.prototype,
            i = [];

        function r() {
            return i.length ? i.pop() : []
        }

        function n(t) {
            var e, r;
            for (e = 0, r = t.length; e < r; e++) Array.isArray(t[e]) && n(t[e]);
            cr.clearArray(t), i.push(t)
        }

        function s() {}

        function a() {}

        function o(t, e) {
            if (cr.is_number(t) && cr.is_number(e)) return t - e;
            var i = "" + t,
                r = "" + e;
            return i < r ? -1 : i > r ? 1 : 0
        }

        function h() {}
        Array.isArray || (Array.isArray = function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }), e.onCreate = function() {
            this.cx = this.properties[0], this.cy = this.properties[1], this.cz = this.properties[2], this.recycled || (this.arr = r());
            var t, e, i, n = this.arr;
            for (n.length = this.cx, t = 0; t < this.cx; t++)
                for (n[t] || (n[t] = r()), n[t].length = this.cy, e = 0; e < this.cy; e++)
                    for (n[t][e] || (n[t][e] = r()), n[t][e].length = this.cz, i = 0; i < this.cz; i++) n[t][e][i] = 0;
            this.forX = [], this.forY = [], this.forZ = [], this.forDepth = -1
        }, e.onDestroy = function() {
            var t;
            for (t = 0; t < this.cx; t++) n(this.arr[t]);
            cr.clearArray(this.arr)
        }, e.at = function(t, e, i) {
            return t = Math.floor(t), e = Math.floor(e), i = Math.floor(i), isNaN(t) || t < 0 || t > this.cx - 1 ? 0 : isNaN(e) || e < 0 || e > this.cy - 1 ? 0 : isNaN(i) || i < 0 || i > this.cz - 1 ? 0 : this.arr[t][e][i]
        }, e.set = function(t, e, i, r) {
            t = Math.floor(t), e = Math.floor(e), i = Math.floor(i), isNaN(t) || t < 0 || t > this.cx - 1 || isNaN(e) || e < 0 || e > this.cy - 1 || isNaN(i) || i < 0 || i > this.cz - 1 || (this.arr[t][e][i] = r)
        }, e.getAsJSON = function() {
            return JSON.stringify({
                c2array: !0,
                size: [this.cx, this.cy, this.cz],
                data: this.arr
            })
        }, e.saveToJSON = function() {
            return {
                size: [this.cx, this.cy, this.cz],
                data: this.arr
            }
        }, e.loadFromJSON = function(t) {
            var e = t.size;
            this.cx = e[0], this.cy = e[1], this.cz = e[2], this.arr = t.data
        }, e.setSize = function(t, e, i) {
            if (t < 0 && (t = 0), e < 0 && (e = 0), i < 0 && (i = 0), this.cx !== t || this.cy !== e || this.cz !== i) {
                var n, s, a;
                this.cx = t, this.cy = e, this.cz = i;
                var o = this.arr;
                for (o.length = t, n = 0; n < this.cx; n++)
                    for (cr.is_undefined(o[n]) && (o[n] = r()), o[n].length = e, s = 0; s < this.cy; s++)
                        for (cr.is_undefined(o[n][s]) && (o[n][s] = r()), o[n][s].length = i, a = 0; a < this.cz; a++) cr.is_undefined(o[n][s][a]) && (o[n][s][a] = 0)
            }
        }, e.getForX = function() {
            return this.forDepth >= 0 && this.forDepth < this.forX.length ? this.forX[this.forDepth] : 0
        }, e.getForY = function() {
            return this.forDepth >= 0 && this.forDepth < this.forY.length ? this.forY[this.forDepth] : 0
        }, e.getForZ = function() {
            return this.forDepth >= 0 && this.forDepth < this.forZ.length ? this.forZ[this.forDepth] : 0
        }, s.prototype.CompareX = function(t, e, i) {
            return cr.do_cmp(this.at(t, 0, 0), e, i)
        }, s.prototype.CompareXY = function(t, e, i, r) {
            return cr.do_cmp(this.at(t, e, 0), i, r)
        }, s.prototype.CompareXYZ = function(t, e, i, r, n) {
            return cr.do_cmp(this.at(t, e, i), r, n)
        }, e.doForEachTrigger = function(t) {
            this.runtime.pushCopySol(t.solModifiers), t.retrigger(), this.runtime.popSol(t.solModifiers)
        }, s.prototype.ArrForEach = function(t) {
            var e = this.runtime.getCurrentEventStack().current_event;
            this.forDepth++;
            var i = this.forDepth;
            switch (i === this.forX.length ? (this.forX.push(0), this.forY.push(0), this.forZ.push(0)) : (this.forX[i] = 0, this.forY[i] = 0, this.forZ[i] = 0), t) {
                case 0:
                    for (this.forX[i] = 0; this.forX[i] < this.cx; this.forX[i]++)
                        for (this.forY[i] = 0; this.forY[i] < this.cy; this.forY[i]++)
                            for (this.forZ[i] = 0; this.forZ[i] < this.cz; this.forZ[i]++) this.doForEachTrigger(e);
                    break;
                case 1:
                    for (this.forX[i] = 0; this.forX[i] < this.cx; this.forX[i]++)
                        for (this.forY[i] = 0; this.forY[i] < this.cy; this.forY[i]++) this.doForEachTrigger(e);
                    break;
                case 2:
                    for (this.forX[i] = 0; this.forX[i] < this.cx; this.forX[i]++) this.doForEachTrigger(e)
            }
            return this.forDepth--, !1
        }, s.prototype.CompareCurrent = function(t, e) {
            return cr.do_cmp(this.at(this.getForX(), this.getForY(), this.getForZ()), t, e)
        }, s.prototype.Contains = function(t) {
            var e, i, r;
            for (e = 0; e < this.cx; e++)
                for (i = 0; i < this.cy; i++)
                    for (r = 0; r < this.cz; r++)
                        if (this.arr[e][i][r] === t) return !0;
            return !1
        }, s.prototype.IsEmpty = function() {
            return 0 === this.cx || 0 === this.cy || 0 === this.cz
        }, s.prototype.CompareSize = function(t, e, i) {
            var r = 0;
            switch (t) {
                case 0:
                    r = this.cx;
                    break;
                case 1:
                    r = this.cy;
                    break;
                case 2:
                    r = this.cz
            }
            return cr.do_cmp(r, e, i)
        }, t.cnds = new s, a.prototype.Clear = function() {
            var t, e, i;
            for (t = 0; t < this.cx; t++)
                for (e = 0; e < this.cy; e++)
                    for (i = 0; i < this.cz; i++) this.arr[t][e][i] = 0
        }, a.prototype.SetSize = function(t, e, i) {
            this.setSize(t, e, i)
        }, a.prototype.SetX = function(t, e) {
            this.set(t, 0, 0, e)
        }, a.prototype.SetXY = function(t, e, i) {
            this.set(t, e, 0, i)
        }, a.prototype.SetXYZ = function(t, e, i, r) {
            this.set(t, e, i, r)
        }, a.prototype.Push = function(t, e, i) {
            var n = 0,
                s = 0,
                a = 0,
                o = this.arr;
            switch (i) {
                case 0:
                    for (0 === t ? (n = o.length, o.push(r())) : (n = 0, o.unshift(r())), o[n].length = this.cy; s < this.cy; s++)
                        for (o[n][s] = r(), o[n][s].length = this.cz, a = 0; a < this.cz; a++) o[n][s][a] = e;
                    this.cx++;
                    break;
                case 1:
                    for (; n < this.cx; n++)
                        for (0 === t ? (s = o[n].length, o[n].push(r())) : (s = 0, o[n].unshift(r())), o[n][s].length = this.cz, a = 0; a < this.cz; a++) o[n][s][a] = e;
                    this.cy++;
                    break;
                case 2:
                    for (; n < this.cx; n++)
                        for (s = 0; s < this.cy; s++) 0 === t ? o[n][s].push(e) : o[n][s].unshift(e);
                    this.cz++
            }
        }, a.prototype.Pop = function(t, e) {
            var i = 0,
                r = 0,
                s = this.arr;
            switch (e) {
                case 0:
                    if (0 === this.cx) break;
                    n(0 === t ? s.pop() : s.shift()), this.cx--;
                    break;
                case 1:
                    if (0 === this.cy) break;
                    for (; i < this.cx; i++) n(0 === t ? s[i].pop() : s[i].shift());
                    this.cy--;
                    break;
                case 2:
                    if (0 === this.cz) break;
                    for (; i < this.cx; i++)
                        for (r = 0; r < this.cy; r++) 0 === t ? s[i][r].pop() : s[i][r].shift();
                    this.cz--
            }
        }, a.prototype.Reverse = function(t) {
            var e = 0,
                i = 0,
                r = this.arr;
            if (0 !== this.cx && 0 !== this.cy && 0 !== this.cz) switch (t) {
                case 0:
                    r.reverse();
                    break;
                case 1:
                    for (; e < this.cx; e++) r[e].reverse();
                    break;
                case 2:
                    for (; e < this.cx; e++)
                        for (i = 0; i < this.cy; i++) r[e][i].reverse()
            }
        }, a.prototype.Sort = function(t) {
            var e = 0,
                i = 0,
                r = this.arr;
            if (0 !== this.cx && 0 !== this.cy && 0 !== this.cz) switch (t) {
                case 0:
                    r.sort(function(t, e) {
                        return o(t[0][0], e[0][0])
                    });
                    break;
                case 1:
                    for (; e < this.cx; e++) r[e].sort(function(t, e) {
                        return o(t[0], e[0])
                    });
                    break;
                case 2:
                    for (; e < this.cx; e++)
                        for (i = 0; i < this.cy; i++) r[e][i].sort(o)
            }
        }, a.prototype.Delete = function(t, e) {
            var i = 0,
                r = 0;
            t = Math.floor(t);
            var s = this.arr;
            if (!(t < 0)) switch (e) {
                case 0:
                    if (t >= this.cx) break;
                    n(s[t]), s.splice(t, 1), this.cx--;
                    break;
                case 1:
                    if (t >= this.cy) break;
                    for (; i < this.cx; i++) n(s[i][t]), s[i].splice(t, 1);
                    this.cy--;
                    break;
                case 2:
                    if (t >= this.cz) break;
                    for (; i < this.cx; i++)
                        for (r = 0; r < this.cy; r++) s[i][r].splice(t, 1);
                    this.cz--
            }
        }, a.prototype.Insert = function(t, e, i) {
            var n = 0,
                s = 0,
                a = 0;
            e = Math.floor(e);
            var o = this.arr;
            if (!(e < 0)) switch (i) {
                case 0:
                    if (e > this.cx) return;
                    for (n = e, o.splice(n, 0, r()), o[n].length = this.cy; s < this.cy; s++)
                        for (o[n][s] = r(), o[n][s].length = this.cz, a = 0; a < this.cz; a++) o[n][s][a] = t;
                    this.cx++;
                    break;
                case 1:
                    if (e > this.cy) return;
                    for (; n < this.cx; n++)
                        for (s = e, o[n].splice(s, 0, r()), o[n][s].length = this.cz, a = 0; a < this.cz; a++) o[n][s][a] = t;
                    this.cy++;
                    break;
                case 2:
                    if (e > this.cz) return;
                    for (; n < this.cx; n++)
                        for (s = 0; s < this.cy; s++) o[n][s].splice(e, 0, t);
                    this.cz++
            }
        }, a.prototype.JSONLoad = function(t) {
            var e;
            try {
                e = JSON.parse(t)
            } catch (t) {
                return
            }
            if (e.c2array) {
                var i = e.size;
                this.cx = i[0], this.cy = i[1], this.cz = i[2], this.arr = e.data
            }
        }, a.prototype.JSONDownload = function(t) {
            var e = document.createElement("a");
            if (void 0 === e.download) {
                var i = "data:text/html," + encodeURIComponent("<p><a download='" + t + "' href=\"data:application/json," + encodeURIComponent(this.getAsJSON()) + '">Download link</a></p>');
                window.open(i)
            } else {
                var r = document.getElementsByTagName("body")[0];
                e.textContent = t, e.href = "data:application/json," + encodeURIComponent(this.getAsJSON()), e.download = t, r.appendChild(e);
                var n = document.createEvent("MouseEvent");
                n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(n), r.removeChild(e)
            }
        }, t.acts = new a, h.prototype.At = function(t, e, i, r) {
            var n = i || 0,
                s = r || 0;
            t.set_any(this.at(e, n, s))
        }, h.prototype.Width = function(t) {
            t.set_int(this.cx)
        }, h.prototype.Height = function(t) {
            t.set_int(this.cy)
        }, h.prototype.Depth = function(t) {
            t.set_int(this.cz)
        }, h.prototype.CurX = function(t) {
            t.set_int(this.getForX())
        }, h.prototype.CurY = function(t) {
            t.set_int(this.getForY())
        }, h.prototype.CurZ = function(t) {
            t.set_int(this.getForZ())
        }, h.prototype.CurValue = function(t) {
            t.set_any(this.at(this.getForX(), this.getForY(), this.getForZ()))
        }, h.prototype.Front = function(t) {
            t.set_any(this.at(0, 0, 0))
        }, h.prototype.Back = function(t) {
            t.set_any(this.at(this.cx - 1, 0, 0))
        }, h.prototype.IndexOf = function(t, e) {
            for (var i = 0; i < this.cx; i++)
                if (this.arr[i][0][0] === e) return void t.set_int(i);
            t.set_int(-1)
        }, h.prototype.LastIndexOf = function(t, e) {
            for (var i = this.cx - 1; i >= 0; i--)
                if (this.arr[i][0][0] === e) return void t.set_int(i);
            t.set_int(-1)
        }, h.prototype.AsJSON = function(t) {
            t.set_string(this.getAsJSON())
        }, t.exps = new h
    }(), cr.plugins_.Audio = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.plugins_.Audio.prototype;
        t.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function() {};
        var e = null,
            i = null,
            r = "",
            n = "",
            s = 0,
            a = 1,
            o = 2,
            h = 3,
            c = s,
            l = null,
            u = [],
            p = [],
            d = null,
            f = !1,
            g = 0,
            y = !1,
            m = 1,
            _ = 0,
            v = 0,
            b = !1,
            w = 1,
            x = 1,
            S = 10,
            T = 1e4,
            O = 1,
            C = null,
            A = "",
            k = !1,
            E = [],
            P = !1,
            L = !1;

        function I(t) {
            -1 === E.indexOf(t) && E.push(t)
        }

        function R(t) {
            var i, r = t.instanceObject;
            try {
                i = r.play()
            } catch (e) {
                return void I(t)
            }
            i ? i.catch(function(e) {
                I(t)
            }) : k && !e.isInUserInputEvent && I(t)
        }

        function N() {
            var t, e, i, r;
            L || b || !l || (! function() {
                "suspended" === l.state && l.resume && l.resume();
                if (!l.createBuffer) return;
                var t = l.createBuffer(1, 220, 22050),
                    e = l.createBufferSource();
                e.buffer = t, e.connect(l.destination), V(e)
            }(), "running" === l.state && (L = !0));
            var n = E.slice(0);
            if (cr.clearArray(E), !y)
                for (t = 0, e = n.length; t < e; ++t)(i = n[t]).stopped || i.is_paused || (r = i.instanceObject.play()) && r.catch(function(t) {
                    I(i)
                })
        }

        function B(t) {
            var e = F(t);
            return isFinite(e) || (e = 0), e < 0 && (e = 0), e > 1 && (e = 1), e
        }

        function M(t) {
            return t < 0 && (t = 0), t > 1 && (t = 1),
                function(t) {
                    return Math.log(t) / Math.log(10) * 20
                }(t)
        }

        function F(t) {
            return Math.pow(10, t / 20)
        }
        document.addEventListener("touchend", N, !0), document.addEventListener("click", N, !0), document.addEventListener("keydown", N, !0);
        var j = {};

        function D(t) {
            return t = t.toLowerCase(), j.hasOwnProperty(t) && j[t].length ? j[t][0].getInputNode() : l.destination
        }

        function W() {
            return l.createGain ? l.createGain() : l.createGainNode()
        }

        function G(t) {
            return l.createDelay ? l.createDelay(t) : l.createDelayNode(t)
        }

        function V(t, e) {
            t.start ? t.start(e || 0) : t.noteOn(e || 0)
        }

        function z(t, e, i, r) {
            t.start ? t.start(r || 0, e) : t.noteGrainOn(r || 0, e, i - e)
        }

        function U(t) {
            try {
                t.stop ? t.stop(0) : t.noteOff(0)
            } catch (t) {}
        }

        function X(t, e, i, r) {
            if (t)
                if (t.cancelScheduledValues(0), 0 !== r) {
                    var n = l.currentTime;
                    switch (r += n, i) {
                        case 0:
                            t.setValueAtTime(e, r);
                            break;
                        case 1:
                            t.setValueAtTime(t.value, n), t.linearRampToValueAtTime(e, r);
                            break;
                        case 2:
                            t.setValueAtTime(t.value, n), t.exponentialRampToValueAtTime(e, r)
                    }
                } else t.value = e
        }
        var q = ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "peaking", "notch", "allpass"];

        function H(t, e, i, r, n, s) {
            this.type = "filter", this.params = [t, e, i, r, n, s], this.inputNode = W(), this.wetNode = W(), this.wetNode.gain.value = s, this.dryNode = W(), this.dryNode.gain.value = 1 - s, this.filterNode = l.createBiquadFilter(), "number" == typeof this.filterNode.type ? this.filterNode.type = t : this.filterNode.type = q[t], this.filterNode.frequency.value = e, this.filterNode.detune && (this.filterNode.detune.value = i), this.filterNode.Q.value = r, this.filterNode.gain.value = n, this.inputNode.connect(this.filterNode), this.inputNode.connect(this.dryNode), this.filterNode.connect(this.wetNode)
        }

        function Y(t, e, i) {
            this.type = "delay", this.params = [t, e, i], this.inputNode = W(), this.wetNode = W(), this.wetNode.gain.value = i, this.dryNode = W(), this.dryNode.gain.value = 1 - i, this.mainNode = W(), this.delayNode = G(t), this.delayNode.delayTime.value = t, this.delayGainNode = W(), this.delayGainNode.gain.value = e, this.inputNode.connect(this.mainNode), this.inputNode.connect(this.dryNode), this.mainNode.connect(this.wetNode), this.mainNode.connect(this.delayNode), this.delayNode.connect(this.delayGainNode), this.delayGainNode.connect(this.mainNode)
        }

        function J(t, e, i, r) {
            this.type = "convolve", this.params = [e, i, r], this.inputNode = W(), this.wetNode = W(), this.wetNode.gain.value = i, this.dryNode = W(), this.dryNode.gain.value = 1 - i, this.convolveNode = l.createConvolver(), t && (this.convolveNode.normalize = e, this.convolveNode.buffer = t), this.inputNode.connect(this.convolveNode), this.inputNode.connect(this.dryNode), this.convolveNode.connect(this.wetNode)
        }

        function K(t, e, i, r, n) {
            this.type = "flanger", this.params = [t, e, i, r, n], this.inputNode = W(), this.dryNode = W(), this.dryNode.gain.value = 1 - n / 2, this.wetNode = W(), this.wetNode.gain.value = n / 2, this.feedbackNode = W(), this.feedbackNode.gain.value = r, this.delayNode = G(t + e), this.delayNode.delayTime.value = t, this.oscNode = l.createOscillator(), this.oscNode.frequency.value = i, this.oscGainNode = W(), this.oscGainNode.gain.value = e, this.inputNode.connect(this.delayNode), this.inputNode.connect(this.dryNode), this.delayNode.connect(this.wetNode), this.delayNode.connect(this.feedbackNode), this.feedbackNode.connect(this.delayNode), this.oscNode.connect(this.oscGainNode), this.oscGainNode.connect(this.delayNode.delayTime), V(this.oscNode)
        }

        function Z(t, e, i, r, n, s) {
            this.type = "phaser", this.params = [t, e, i, r, n, s], this.inputNode = W(), this.dryNode = W(), this.dryNode.gain.value = 1 - s / 2, this.wetNode = W(), this.wetNode.gain.value = s / 2, this.filterNode = l.createBiquadFilter(), "number" == typeof this.filterNode.type ? this.filterNode.type = 7 : this.filterNode.type = "allpass", this.filterNode.frequency.value = t, this.filterNode.detune && (this.filterNode.detune.value = e), this.filterNode.Q.value = i, this.oscNode = l.createOscillator(), this.oscNode.frequency.value = n, this.oscGainNode = W(), this.oscGainNode.gain.value = r, this.inputNode.connect(this.filterNode), this.inputNode.connect(this.dryNode), this.filterNode.connect(this.wetNode), this.oscNode.connect(this.oscGainNode), this.oscGainNode.connect(this.filterNode.frequency), V(this.oscNode)
        }

        function Q(t) {
            this.type = "gain", this.params = [t], this.node = W(), this.node.gain.value = t
        }

        function $(t, e) {
            this.type = "tremolo", this.params = [t, e], this.node = W(), this.node.gain.value = 1 - e / 2, this.oscNode = l.createOscillator(), this.oscNode.frequency.value = t, this.oscGainNode = W(), this.oscGainNode.gain.value = e / 2, this.oscNode.connect(this.oscGainNode), this.oscGainNode.connect(this.node.gain), V(this.oscNode)
        }

        function tt(t, e) {
            this.type = "ringmod", this.params = [t, e], this.inputNode = W(), this.wetNode = W(), this.wetNode.gain.value = e, this.dryNode = W(), this.dryNode.gain.value = 1 - e, this.ringNode = W(), this.ringNode.gain.value = 0, this.oscNode = l.createOscillator(), this.oscNode.frequency.value = t, this.oscNode.connect(this.ringNode.gain), V(this.oscNode), this.inputNode.connect(this.ringNode), this.inputNode.connect(this.dryNode), this.ringNode.connect(this.wetNode)
        }

        function et(t, e, i, r, n) {
            this.type = "distortion", this.params = [t, e, i, r, n], this.inputNode = W(), this.preGain = W(), this.postGain = W(), this.setDrive(i, F(r)), this.wetNode = W(), this.wetNode.gain.value = n, this.dryNode = W(), this.dryNode.gain.value = 1 - n, this.waveShaper = l.createWaveShaper(), this.curve = new Float32Array(65536), this.generateColortouchCurve(t, e), this.waveShaper.curve = this.curve, this.inputNode.connect(this.preGain), this.inputNode.connect(this.dryNode), this.preGain.connect(this.waveShaper), this.waveShaper.connect(this.postGain), this.postGain.connect(this.wetNode)
        }

        function it(t, e, i, r, n) {
            this.type = "compressor", this.params = [t, e, i, r, n], this.node = l.createDynamicsCompressor();
            try {
                this.node.threshold.value = t, this.node.knee.value = e, this.node.ratio.value = i, this.node.attack.value = r, this.node.release.value = n
            } catch (t) {}
        }

        function rt(t, e) {
            this.type = "analyser", this.params = [t, e], this.node = l.createAnalyser(), this.node.fftSize = t, this.node.smoothingTimeConstant = e, this.freqBins = new Float32Array(this.node.frequencyBinCount), this.signal = new Uint8Array(t), this.peak = 0, this.rms = 0
        }

        function nt() {
            this.obj = null, this.loadUid = 0
        }

        function st(t, i) {
            this.src = t, this.myapi = c, this.is_music = i, this.added_end_listener = !1;
            var r, n = this;
            switch (this.outNode = null, this.mediaSourceNode = null, this.panWhenReady = [], this.seekWhenReady = 0, this.pauseWhenReady = !1, this.supportWebAudioAPI = !1, this.failedToLoad = !1, this.wasEverReady = !1, c === a && i && !P && (this.myapi = s, this.outNode = W()), this.bufferObject = null, this.audioData = null, this.myapi) {
                case s:
                    this.bufferObject = new Audio, this.bufferObject.crossOrigin = "anonymous", this.bufferObject.addEventListener("canplaythrough", function() {
                        n.wasEverReady = !0
                    }), c === a && l.createMediaElementSource && !/wiiu/i.test(navigator.userAgent) && (this.supportWebAudioAPI = !0, this.bufferObject.addEventListener("canplay", function() {
                        !n.mediaSourceNode && n.bufferObject && (n.mediaSourceNode = l.createMediaElementSource(n.bufferObject), n.mediaSourceNode.connect(n.outNode))
                    })), this.bufferObject.autoplay = !1, this.bufferObject.preload = "auto", this.bufferObject.src = t;
                    break;
                case a:
                    e.isWKWebView ? e.fetchLocalFileViaCordovaAsArrayBuffer(t, function(t) {
                        n.audioData = t, n.decodeAudioBuffer()
                    }, function(t) {
                        n.failedToLoad = !0
                    }) : ((r = new XMLHttpRequest).open("GET", t, !0), r.responseType = "arraybuffer", r.onload = function() {
                        n.audioData = r.response, n.decodeAudioBuffer()
                    }, r.onerror = function() {
                        n.failedToLoad = !0
                    }, r.send());
                    break;
                case o:
                case h:
                    this.bufferObject = !0
            }
        }

        function at(t, u) {
            var p = this;
            this.tag = u, this.fresh = !0, this.stopped = !0, this.src = t.src, this.buffer = t, this.myapi = c, this.is_music = t.is_music, this.playbackRate = 1, this.hasPlaybackEnded = !0, this.resume_me = !1, this.is_paused = !1, this.resume_position = 0, this.looping = !1, this.is_muted = !1, this.is_silent = !1, this.volume = 1, this.onended_handler = function(t) {
                if (!p.is_paused && !p.resume_me) {
                    var n = this;
                    n || (n = t.target), n === p.active_buffer && (p.hasPlaybackEnded = !0, p.stopped = !0, r = p.tag, e.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, i))
                }
            }, this.active_buffer = null, this.isTimescaled = 1 === g && !this.is_music || 2 === g, this.mutevol = 1, this.startTime = this.isTimescaled ? e.kahanTime.sum : e.wallTime.sum, this.gainNode = null, this.pannerNode = null, this.pannerEnabled = !1, this.objectTracker = null, this.panX = 0, this.panY = 0, this.panAngle = 0, this.panConeInner = 0, this.panConeOuter = 0, this.panConeOuterGain = 0, this.instanceObject = null;
            var d = !1;
            switch (this.myapi !== a || this.buffer.myapi !== s || this.buffer.supportWebAudioAPI || (this.myapi = s), this.myapi) {
                case s:
                    this.is_music ? (this.instanceObject = t.bufferObject, d = !t.added_end_listener, t.added_end_listener = !0) : (this.instanceObject = new Audio, this.instanceObject.crossOrigin = "anonymous", this.instanceObject.autoplay = !1, this.instanceObject.src = t.bufferObject.src, d = !0), d && this.instanceObject.addEventListener("ended", function() {
                        r = p.tag, p.stopped = !0, e.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, i)
                    });
                    break;
                case a:
                    this.gainNode = W(), this.gainNode.connect(D(u)), this.buffer.myapi === a ? t.bufferObject && (this.instanceObject = l.createBufferSource(), this.instanceObject.buffer = t.bufferObject, this.instanceObject.connect(this.gainNode)) : (this.instanceObject = this.buffer.bufferObject, this.buffer.outNode.connect(this.gainNode), this.buffer.added_end_listener || (this.buffer.added_end_listener = !0, this.buffer.bufferObject.addEventListener("ended", function() {
                        r = p.tag, p.stopped = !0, e.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, i)
                    })));
                    break;
                case o:
                    this.instanceObject = new window.Media(n + this.src, null, null, function(t) {
                        t === window.Media.MEDIA_STOPPED && (p.hasPlaybackEnded = !0, p.stopped = !0, r = p.tag, e.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, i))
                    });
                    break;
                case h:
                    this.instanceObject = !0
            }
        }
        H.prototype.connectTo = function(t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, H.prototype.remove = function() {
            this.inputNode.disconnect(), this.filterNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, H.prototype.getInputNode = function() {
            return this.inputNode
        }, H.prototype.setParam = function(t, e, i, r) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), e > 1 && (e = 1), this.params[5] = e, X(this.wetNode.gain, e, i, r), X(this.dryNode.gain, 1 - e, i, r);
                    break;
                case 1:
                    this.params[1] = e, X(this.filterNode.frequency, e, i, r);
                    break;
                case 2:
                    this.params[2] = e, X(this.filterNode.detune, e, i, r);
                    break;
                case 3:
                    this.params[3] = e, X(this.filterNode.Q, e, i, r);
                    break;
                case 4:
                    this.params[4] = e, X(this.filterNode.gain, e, i, r)
            }
        }, Y.prototype.connectTo = function(t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, Y.prototype.remove = function() {
            this.inputNode.disconnect(), this.mainNode.disconnect(), this.delayNode.disconnect(), this.delayGainNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, Y.prototype.getInputNode = function() {
            return this.inputNode
        }, Y.prototype.setParam = function(t, e, i, r) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), e > 1 && (e = 1), this.params[2] = e, X(this.wetNode.gain, e, i, r), X(this.dryNode.gain, 1 - e, i, r);
                    break;
                case 4:
                    this.params[1] = B(e), X(this.delayGainNode.gain, B(e), i, r);
                    break;
                case 5:
                    this.params[0] = e, X(this.delayNode.delayTime, e, i, r)
            }
        }, J.prototype.connectTo = function(t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, J.prototype.remove = function() {
            this.inputNode.disconnect(), this.convolveNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, J.prototype.getInputNode = function() {
            return this.inputNode
        }, J.prototype.setParam = function(t, e, i, r) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), e > 1 && (e = 1), this.params[1] = e, X(this.wetNode.gain, e, i, r), X(this.dryNode.gain, 1 - e, i, r)
            }
        }, K.prototype.connectTo = function(t) {
            this.dryNode.disconnect(), this.dryNode.connect(t), this.wetNode.disconnect(), this.wetNode.connect(t)
        }, K.prototype.remove = function() {
            this.inputNode.disconnect(), this.delayNode.disconnect(), this.oscNode.disconnect(), this.oscGainNode.disconnect(), this.dryNode.disconnect(), this.wetNode.disconnect(), this.feedbackNode.disconnect()
        }, K.prototype.getInputNode = function() {
            return this.inputNode
        }, K.prototype.setParam = function(t, e, i, r) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), e > 1 && (e = 1), this.params[4] = e, X(this.wetNode.gain, e / 2, i, r), X(this.dryNode.gain, 1 - e / 2, i, r);
                    break;
                case 6:
                    this.params[1] = e / 1e3, X(this.oscGainNode.gain, e / 1e3, i, r);
                    break;
                case 7:
                    this.params[2] = e, X(this.oscNode.frequency, e, i, r);
                    break;
                case 8:
                    this.params[3] = e / 100, X(this.feedbackNode.gain, e / 100, i, r)
            }
        }, Z.prototype.connectTo = function(t) {
            this.dryNode.disconnect(), this.dryNode.connect(t), this.wetNode.disconnect(), this.wetNode.connect(t)
        }, Z.prototype.remove = function() {
            this.inputNode.disconnect(), this.filterNode.disconnect(), this.oscNode.disconnect(), this.oscGainNode.disconnect(), this.dryNode.disconnect(), this.wetNode.disconnect()
        }, Z.prototype.getInputNode = function() {
            return this.inputNode
        }, Z.prototype.setParam = function(t, e, i, r) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), e > 1 && (e = 1), this.params[5] = e, X(this.wetNode.gain, e / 2, i, r), X(this.dryNode.gain, 1 - e / 2, i, r);
                    break;
                case 1:
                    this.params[0] = e, X(this.filterNode.frequency, e, i, r);
                    break;
                case 2:
                    this.params[1] = e, X(this.filterNode.detune, e, i, r);
                    break;
                case 3:
                    this.params[2] = e, X(this.filterNode.Q, e, i, r);
                    break;
                case 6:
                    this.params[3] = e, X(this.oscGainNode.gain, e, i, r);
                    break;
                case 7:
                    this.params[4] = e, X(this.oscNode.frequency, e, i, r)
            }
        }, Q.prototype.connectTo = function(t) {
            this.node.disconnect(), this.node.connect(t)
        }, Q.prototype.remove = function() {
            this.node.disconnect()
        }, Q.prototype.getInputNode = function() {
            return this.node
        }, Q.prototype.setParam = function(t, e, i, r) {
            switch (t) {
                case 4:
                    this.params[0] = B(e), X(this.node.gain, B(e), i, r)
            }
        }, $.prototype.connectTo = function(t) {
            this.node.disconnect(), this.node.connect(t)
        }, $.prototype.remove = function() {
            this.oscNode.disconnect(), this.oscGainNode.disconnect(), this.node.disconnect()
        }, $.prototype.getInputNode = function() {
            return this.node
        }, $.prototype.setParam = function(t, e, i, r) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), e > 1 && (e = 1), this.params[1] = e, X(this.node.gain.value, 1 - e / 2, i, r), X(this.oscGainNode.gain.value, e / 2, i, r);
                    break;
                case 7:
                    this.params[0] = e, X(this.oscNode.frequency, e, i, r)
            }
        }, tt.prototype.connectTo = function(t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, tt.prototype.remove = function() {
            this.oscNode.disconnect(), this.ringNode.disconnect(), this.inputNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, tt.prototype.getInputNode = function() {
            return this.inputNode
        }, tt.prototype.setParam = function(t, e, i, r) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), e > 1 && (e = 1), this.params[1] = e, X(this.wetNode.gain, e, i, r), X(this.dryNode.gain, 1 - e, i, r);
                    break;
                case 7:
                    this.params[0] = e, X(this.oscNode.frequency, e, i, r)
            }
        }, et.prototype.setDrive = function(t, e) {
            t < .01 && (t = .01), this.preGain.gain.value = t, this.postGain.gain.value = Math.pow(1 / t, .6) * e
        }, et.prototype.shape = function(t, e, i) {
            var r = 1.05 * i * e - e,
                n = t < 0 ? -1 : 1,
                s = t < 0 ? -t : t,
                a = s < e ? s : e + r * function(t, e) {
                    return 1 - Math.exp(-e * t)
                }(s - e, 1 / r);
            return a *= n
        }, et.prototype.generateColortouchCurve = function(t, e) {
            for (var i = F(t), r = F(e), n = 32768, s = 0, a = 0; a < n; ++a) s = a / n, s = this.shape(s, i, r), this.curve[n + a] = s, this.curve[n - a - 1] = -s
        }, et.prototype.connectTo = function(t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, et.prototype.remove = function() {
            this.inputNode.disconnect(), this.preGain.disconnect(), this.waveShaper.disconnect(), this.postGain.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, et.prototype.getInputNode = function() {
            return this.inputNode
        }, et.prototype.setParam = function(t, e, i, r) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), e > 1 && (e = 1), this.params[4] = e, X(this.wetNode.gain, e, i, r), X(this.dryNode.gain, 1 - e, i, r)
            }
        }, it.prototype.connectTo = function(t) {
            this.node.disconnect(), this.node.connect(t)
        }, it.prototype.remove = function() {
            this.node.disconnect()
        }, it.prototype.getInputNode = function() {
            return this.node
        }, it.prototype.setParam = function(t, e, i, r) {}, rt.prototype.tick = function() {
            this.node.getFloatFrequencyData(this.freqBins), this.node.getByteTimeDomainData(this.signal);
            var t = this.node.fftSize,
                e = 0;
            this.peak = 0;
            for (var i = 0, r = 0; e < t; e++)(r = (this.signal[e] - 128) / 128) < 0 && (r = -r), this.peak < r && (this.peak = r), i += r * r;
            this.peak = M(this.peak), this.rms = M(Math.sqrt(i / t))
        }, rt.prototype.connectTo = function(t) {
            this.node.disconnect(), this.node.connect(t)
        }, rt.prototype.remove = function() {
            this.node.disconnect()
        }, rt.prototype.getInputNode = function() {
            return this.node
        }, rt.prototype.setParam = function(t, e, i, r) {}, nt.prototype.setObject = function(t) {
            this.obj = t
        }, nt.prototype.hasObject = function() {
            return !!this.obj
        }, nt.prototype.tick = function(t) {}, st.prototype.release = function() {
            var t, e, i, r;
            for (t = 0, i = 0, e = p.length; t < e; ++t) r = p[t], p[i] = r, r.buffer === this ? r.stop() : ++i;
            p.length = i, this.mediaSourceNode && (this.mediaSourceNode.disconnect(), this.mediaSourceNode = null), this.outNode && (this.outNode.disconnect(), this.outNode = null), this.bufferObject = null, this.audioData = null
        }, st.prototype.decodeAudioBuffer = function() {
            if (!this.bufferObject && this.audioData) {
                var t = this;
                if (l.decodeAudioData) l.decodeAudioData(this.audioData, function(i) {
                    var r, n, s, a;
                    if (t.bufferObject = i, t.audioData = null, cr.is_undefined(t.playTagWhenReady) || y) {
                        if (!cr.is_undefined(t.convolveWhenReady)) {
                            var o = t.convolveWhenReady.convolveNode;
                            o.normalize = t.normalizeWhenReady, o.buffer = i
                        }
                    } else if (t.panWhenReady.length) {
                        for (n = 0, s = t.panWhenReady.length; n < s; n++)
                            if (r = t.panWhenReady[n], (a = new at(t, r.thistag)).setPannerEnabled(!0), void 0 === r.objUid || (r.obj = e.getObjectByUID(r.objUid), r.obj)) {
                                if (r.obj) {
                                    var h = cr.rotatePtAround(r.obj.x, r.obj.y, -r.obj.layer.getAngle(), _, v, !0),
                                        c = cr.rotatePtAround(r.obj.x, r.obj.y, -r.obj.layer.getAngle(), _, v, !1);
                                    a.setPan(h, c, cr.to_degrees(r.obj.angle - r.obj.layer.getAngle()), r.ia, r.oa, r.og), a.setObject(r.obj)
                                } else a.setPan(r.x, r.y, r.a, r.ia, r.oa, r.og);
                                a.play(t.loopWhenReady, t.volumeWhenReady, t.seekWhenReady), t.pauseWhenReady && a.pause(), p.push(a)
                            }
                        cr.clearArray(t.panWhenReady)
                    } else(a = new at(t, t.playTagWhenReady || "")).play(t.loopWhenReady, t.volumeWhenReady, t.seekWhenReady), t.pauseWhenReady && a.pause(), p.push(a)
                }, function(e) {
                    t.failedToLoad = !0
                });
                else if (this.bufferObject = l.createBuffer(this.audioData, !1), this.audioData = null, cr.is_undefined(this.playTagWhenReady) || y) {
                    if (!cr.is_undefined(this.convolveWhenReady)) {
                        var i = this.convolveWhenReady.convolveNode;
                        i.normalize = this.normalizeWhenReady, i.buffer = this.bufferObject
                    }
                } else {
                    var r = new at(this, this.playTagWhenReady);
                    r.play(this.loopWhenReady, this.volumeWhenReady, this.seekWhenReady), this.pauseWhenReady && r.pause(), p.push(r)
                }
            }
        }, st.prototype.isLoaded = function() {
            switch (this.myapi) {
                case s:
                    var t = this.bufferObject.readyState >= 4;
                    return t && (this.wasEverReady = !0), t || this.wasEverReady;
                case a:
                    return !!this.audioData || !!this.bufferObject;
                case o:
                case h:
                    return !0
            }
            return !1
        }, st.prototype.isLoadedAndDecoded = function() {
            switch (this.myapi) {
                case s:
                    return this.isLoaded();
                case a:
                    return !!this.bufferObject;
                case o:
                case h:
                    return !0
            }
            return !1
        }, st.prototype.hasFailedToLoad = function() {
            switch (this.myapi) {
                case s:
                    return !!this.bufferObject.error;
                case a:
                    return this.failedToLoad
            }
            return !1
        }, at.prototype.hasEnded = function() {
            switch (this.myapi) {
                case s:
                    return this.instanceObject.ended;
                case a:
                    return this.buffer.myapi === a ? !(!this.fresh && !this.stopped && this.instanceObject.loop) && (!this.is_paused && this.hasPlaybackEnded) : this.instanceObject.ended;
                case o:
                    return this.hasPlaybackEnded
            }
            return !0
        }, at.prototype.canBeRecycled = function() {
            return !(!this.fresh && !this.stopped) || this.hasEnded()
        }, at.prototype.setPannerEnabled = function(t) {
            if (c === a)
                if (!this.pannerEnabled && t) {
                    if (!this.gainNode) return;
                    this.pannerNode || (this.pannerNode = l.createPanner(), "number" == typeof this.pannerNode.panningModel ? this.pannerNode.panningModel = w : this.pannerNode.panningModel = ["equalpower", "HRTF", "soundfield"][w], "number" == typeof this.pannerNode.distanceModel ? this.pannerNode.distanceModel = x : this.pannerNode.distanceModel = ["linear", "inverse", "exponential"][x], this.pannerNode.refDistance = S, this.pannerNode.maxDistance = T, this.pannerNode.rolloffFactor = O), this.gainNode.disconnect(), this.gainNode.connect(this.pannerNode), this.pannerNode.connect(D(this.tag)), this.pannerEnabled = !0
                } else if (this.pannerEnabled && !t) {
                if (!this.gainNode) return;
                this.pannerNode.disconnect(), this.gainNode.disconnect(), this.gainNode.connect(D(this.tag)), this.pannerEnabled = !1
            }
        }, at.prototype.setPan = function(t, e, i, r, n, s) {
            this.pannerEnabled && c === a && (this.pannerNode.setPosition(t, e, 0), this.pannerNode.setOrientation(Math.cos(cr.to_radians(i)), Math.sin(cr.to_radians(i)), 0), this.pannerNode.coneInnerAngle = r, this.pannerNode.coneOuterAngle = n, this.pannerNode.coneOuterGain = s, this.panX = t, this.panY = e, this.panAngle = i, this.panConeInner = r, this.panConeOuter = n, this.panConeOuterGain = s)
        }, at.prototype.setObject = function(t) {
            this.pannerEnabled && c === a && (this.objectTracker || (this.objectTracker = new nt), this.objectTracker.setObject(t))
        }, at.prototype.tick = function(t) {
            if (this.pannerEnabled && c === a && this.objectTracker && this.objectTracker.hasObject() && this.isPlaying()) {
                this.objectTracker.tick(t);
                var e = this.objectTracker.obj,
                    i = cr.rotatePtAround(e.x, e.y, -e.layer.getAngle(), _, v, !0),
                    r = cr.rotatePtAround(e.x, e.y, -e.layer.getAngle(), _, v, !1);
                this.pannerNode.setPosition(i, r, 0);
                var n = 0;
                void 0 !== this.objectTracker.obj.angle && (n = e.angle - e.layer.getAngle(), this.pannerNode.setOrientation(Math.cos(n), Math.sin(n), 0))
            }
        }, at.prototype.play = function(t, i, r, n) {
            var c = this.instanceObject;
            this.looping = t, this.volume = i;
            var u = r || 0;
            switch (n = n || 0, this.myapi) {
                case s:
                    if (1 !== c.playbackRate && (c.playbackRate = 1), c.volume !== i * m && (c.volume = i * m), c.loop !== t && (c.loop = t), c.muted && (c.muted = !1), c.currentTime !== u) try {
                        c.currentTime = u
                    } catch (t) {}
                    R(this);
                    break;
                case a:
                    if (this.muted = !1, this.mutevol = 1, this.buffer.myapi === a) this.gainNode.gain.value = i * m, this.fresh || (this.instanceObject = l.createBufferSource(), this.instanceObject.buffer = this.buffer.bufferObject, this.instanceObject.connect(this.gainNode)), this.instanceObject.onended = this.onended_handler, this.active_buffer = this.instanceObject, this.instanceObject.loop = t, this.hasPlaybackEnded = !1, 0 === u ? V(this.instanceObject, n) : z(this.instanceObject, u, this.getDuration(), n);
                    else {
                        if (1 !== c.playbackRate && (c.playbackRate = 1), c.loop !== t && (c.loop = t), c.volume = i * m, c.currentTime !== u) try {
                            c.currentTime = u
                        } catch (t) {}
                        R(this)
                    }
                    break;
                case o:
                    (!this.fresh && this.stopped || 0 !== u) && c.seekTo(u), c.play(), this.hasPlaybackEnded = !1;
                    break;
                case h:
                    e.isDirectCanvas ? AppMobi.context.playSound(this.src, t) : AppMobi.player.playSound(this.src, t)
            }
            this.playbackRate = 1, this.startTime = (this.isTimescaled ? e.kahanTime.sum : e.wallTime.sum) - u, this.fresh = !1, this.stopped = !1, this.is_paused = !1
        }, at.prototype.stop = function() {
            switch (this.myapi) {
                case s:
                    this.instanceObject.paused || this.instanceObject.pause();
                    break;
                case a:
                    this.buffer.myapi === a ? U(this.instanceObject) : this.instanceObject.paused || this.instanceObject.pause();
                    break;
                case o:
                    this.instanceObject.stop();
                    break;
                case h:
                    e.isDirectCanvas && AppMobi.context.stopSound(this.src)
            }
            this.stopped = !0, this.is_paused = !1
        }, at.prototype.pause = function() {
            if (!(this.fresh || this.stopped || this.hasEnded() || this.is_paused)) {
                switch (this.myapi) {
                    case s:
                        this.instanceObject.paused || this.instanceObject.pause();
                        break;
                    case a:
                        this.buffer.myapi === a ? (this.resume_position = this.getPlaybackTime(!0), this.looping && (this.resume_position = this.resume_position % this.getDuration()), this.is_paused = !0, U(this.instanceObject)) : this.instanceObject.paused || this.instanceObject.pause();
                        break;
                    case o:
                        this.instanceObject.pause();
                        break;
                    case h:
                        e.isDirectCanvas && AppMobi.context.stopSound(this.src)
                }
                this.is_paused = !0
            }
        }, at.prototype.resume = function() {
            if (!(this.fresh || this.stopped || this.hasEnded()) && this.is_paused) {
                switch (this.myapi) {
                    case s:
                        R(this);
                        break;
                    case a:
                        this.buffer.myapi === a ? (this.instanceObject = l.createBufferSource(), this.instanceObject.buffer = this.buffer.bufferObject, this.instanceObject.connect(this.gainNode), this.instanceObject.onended = this.onended_handler, this.active_buffer = this.instanceObject, this.instanceObject.loop = this.looping, this.gainNode.gain.value = m * this.volume * this.mutevol, this.updatePlaybackRate(), this.startTime = (this.isTimescaled ? e.kahanTime.sum : e.wallTime.sum) - this.resume_position / (this.playbackRate || .001), z(this.instanceObject, this.resume_position, this.getDuration())) : R(this);
                        break;
                    case o:
                        this.instanceObject.play();
                        break;
                    case h:
                        e.isDirectCanvas && AppMobi.context.resumeSound(this.src)
                }
                this.is_paused = !1
            }
        }, at.prototype.seek = function(t) {
            if (!(this.fresh || this.stopped || this.hasEnded())) switch (this.myapi) {
                case s:
                    try {
                        this.instanceObject.currentTime = t
                    } catch (t) {}
                    break;
                case a:
                    if (this.buffer.myapi === a) this.is_paused ? this.resume_position = t : (this.pause(), this.resume_position = t, this.resume());
                    else try {
                        this.instanceObject.currentTime = t
                    } catch (t) {}
                    break;
                case o:
                    break;
                case h:
                    e.isDirectCanvas && AppMobi.context.seekSound(this.src, t)
            }
        }, at.prototype.reconnect = function(t) {
            this.myapi === a && (this.pannerEnabled ? (this.pannerNode.disconnect(), this.pannerNode.connect(t)) : (this.gainNode.disconnect(), this.gainNode.connect(t)))
        }, at.prototype.getDuration = function(t) {
            var i = 0;
            switch (this.myapi) {
                case s:
                    void 0 !== this.instanceObject.duration && (i = this.instanceObject.duration);
                    break;
                case a:
                    i = this.buffer.bufferObject.duration;
                    break;
                case o:
                    i = this.instanceObject.getDuration();
                    break;
                case h:
                    e.isDirectCanvas && (i = AppMobi.context.getDurationSound(this.src))
            }
            return t && (i /= this.playbackRate || .001), i
        }, at.prototype.getPlaybackTime = function(t) {
            var i = this.getDuration(),
                r = 0;
            switch (this.myapi) {
                case s:
                    void 0 !== this.instanceObject.currentTime && (r = this.instanceObject.currentTime);
                    break;
                case a:
                    if (this.buffer.myapi === a) {
                        if (this.is_paused) return this.resume_position;
                        r = (this.isTimescaled ? e.kahanTime.sum : e.wallTime.sum) - this.startTime
                    } else void 0 !== this.instanceObject.currentTime && (r = this.instanceObject.currentTime);
                    break;
                case o:
                    break;
                case h:
                    e.isDirectCanvas && (r = AppMobi.context.getPlaybackTimeSound(this.src))
            }
            return t && (r *= this.playbackRate), !this.looping && r > i && (r = i), r
        }, at.prototype.isPlaying = function() {
            return !(this.is_paused || this.fresh || this.stopped || this.hasEnded())
        }, at.prototype.shouldSave = function() {
            return !this.fresh && !this.stopped && !this.hasEnded()
        }, at.prototype.setVolume = function(t) {
            this.volume = t, this.updateVolume()
        }, at.prototype.updateVolume = function() {
            var t = this.volume * m;
            switch (isFinite(t) || (t = 0), this.myapi) {
                case s:
                    void 0 !== this.instanceObject.volume && this.instanceObject.volume !== t && (this.instanceObject.volume = t);
                    break;
                case a:
                    this.buffer.myapi === a ? this.gainNode.gain.value = t * this.mutevol : void 0 !== this.instanceObject.volume && this.instanceObject.volume !== t && (this.instanceObject.volume = t)
            }
        }, at.prototype.getVolume = function() {
            return this.volume
        }, at.prototype.doSetMuted = function(t) {
            switch (this.myapi) {
                case s:
                    this.instanceObject.muted !== !!t && (this.instanceObject.muted = !!t);
                    break;
                case a:
                    this.buffer.myapi === a ? (this.mutevol = t ? 0 : 1, this.gainNode.gain.value = m * this.volume * this.mutevol) : this.instanceObject.muted !== !!t && (this.instanceObject.muted = !!t)
            }
        }, at.prototype.setMuted = function(t) {
            this.is_muted = !!t, this.doSetMuted(this.is_muted || this.is_silent)
        }, at.prototype.setSilent = function(t) {
            this.is_silent = !!t, this.doSetMuted(this.is_muted || this.is_silent)
        }, at.prototype.setLooping = function(t) {
            switch (this.looping = t, this.myapi) {
                case s:
                case a:
                    this.instanceObject.loop !== !!t && (this.instanceObject.loop = !!t);
                    break;
                case o:
                    break;
                case h:
                    e.isDirectCanvas && AppMobi.context.setLoopingSound(this.src, t)
            }
        }, at.prototype.setPlaybackRate = function(t) {
            this.playbackRate = t, this.updatePlaybackRate()
        }, at.prototype.updatePlaybackRate = function() {
            var t = this.playbackRate;
            switch (this.isTimescaled && (t *= e.timescale), this.myapi) {
                case s:
                    this.instanceObject.playbackRate !== t && (this.instanceObject.playbackRate = t);
                    break;
                case a:
                    this.buffer.myapi === a ? this.instanceObject.playbackRate.value !== t && (this.instanceObject.playbackRate.value = t) : this.instanceObject.playbackRate !== t && (this.instanceObject.playbackRate = t)
            }
        }, at.prototype.setSuspended = function(t) {
            switch (this.myapi) {
                case s:
                    t ? this.isPlaying() ? (this.resume_me = !0, this.instanceObject.pause()) : this.resume_me = !1 : this.resume_me && (this.instanceObject.play(), this.resume_me = !1);
                    break;
                case a:
                    t ? this.isPlaying() ? (this.resume_me = !0, this.buffer.myapi === a ? (this.resume_position = this.getPlaybackTime(!0), this.looping && (this.resume_position = this.resume_position % this.getDuration()), U(this.instanceObject)) : this.instanceObject.pause()) : this.resume_me = !1 : this.resume_me && (this.buffer.myapi === a ? (this.instanceObject = l.createBufferSource(), this.instanceObject.buffer = this.buffer.bufferObject, this.instanceObject.connect(this.gainNode), this.instanceObject.onended = this.onended_handler, this.active_buffer = this.instanceObject, this.instanceObject.loop = this.looping, this.gainNode.gain.value = m * this.volume * this.mutevol, this.updatePlaybackRate(), this.startTime = (this.isTimescaled ? e.kahanTime.sum : e.wallTime.sum) - this.resume_position / (this.playbackRate || .001), z(this.instanceObject, this.resume_position, this.getDuration())) : this.instanceObject.play(), this.resume_me = !1);
                    break;
                case o:
                    t ? this.isPlaying() ? (this.instanceObject.pause(), this.resume_me = !0) : this.resume_me = !1 : this.resume_me && (this.resume_me = !1, this.instanceObject.play())
            }
        }, t.Instance = function(t) {
            if (this.type = t, this.runtime = t.runtime, e = this.runtime, i = this, this.listenerTracker = null, this.listenerZ = -600, this.runtime.isWKWebView && (P = !0), !(this.runtime.isiOS || this.runtime.isAndroid && (this.runtime.isChrome || this.runtime.isAndroidStockBrowser)) || this.runtime.isCrosswalk || this.runtime.isDomFree || this.runtime.isAmazonWebApp || P || (k = !0), l = null, "undefined" != typeof AudioContext ? (c = a, l = new AudioContext) : "undefined" != typeof webkitAudioContext && (c = a, l = new webkitAudioContext), this.runtime.isiOS && l && (l.close && l.close(), "undefined" != typeof AudioContext ? l = new AudioContext : "undefined" != typeof webkitAudioContext && (l = new webkitAudioContext)), c !== a && (this.runtime.isCordova && void 0 !== window.Media ? c = o : this.runtime.isAppMobi && (c = h)), c === o) {
                var r = (n = location.href).lastIndexOf("/");
                r > -1 && (n = n.substr(0, r + 1)), n = n.replace("file://", "")
            }
            if (this.runtime.isSafari && this.runtime.isWindows && "undefined" == typeof Audio) alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."), this.runtime.DestroyInstance(this);
            else {
                if (this.runtime.isDirectCanvas) f = this.runtime.isAndroid;
                else try {
                    f = !!(new Audio).canPlayType('audio/ogg; codecs="vorbis"')
                } catch (t) {
                    f = !1
                }
                c, this.runtime.tickMe(this)
            }
        };
        var ot = t.Instance.prototype;
        ot.onCreate = function() {
            this.runtime.audioInstance = this, g = this.properties[0], this.saveload = this.properties[1], this.playinbackground = 0 !== this.properties[2], this.nextPlayTime = 0, w = this.properties[3], x = this.properties[4], this.listenerZ = -this.properties[5], S = this.properties[6], T = this.properties[7], O = this.properties[8], this.listenerTracker = new nt;
            var t = this.runtime.draw_width || this.runtime.width,
                e = this.runtime.draw_height || this.runtime.height;
            c === a && (l.listener.setPosition(t / 2, e / 2, this.listenerZ), l.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function(t, e) {
                C && C.disconnect(), A = e.toLowerCase(), (C = l.createMediaStreamSource(t)).connect(D(A))
            }), this.runtime.addSuspendCallback(function(t) {
                i.onSuspend(t)
            });
            var r = this;
            this.runtime.addDestroyCallback(function(t) {
                r.onInstanceDestroyed(t)
            })
        }, ot.onInstanceDestroyed = function(t) {
            var e, i, r;
            for (e = 0, i = p.length; e < i; e++)(r = p[e]).objectTracker && r.objectTracker.obj === t && (r.objectTracker.obj = null, r.pannerEnabled && r.isPlaying() && r.looping && r.stop());
            this.listenerTracker.obj === t && (this.listenerTracker.obj = null)
        }, ot.saveToJSON = function() {
            var t, e, i, r, n, s, a, o = {
                    silent: y,
                    masterVolume: m,
                    listenerZ: this.listenerZ,
                    listenerUid: this.listenerTracker.hasObject() ? this.listenerTracker.obj.uid : -1,
                    playing: [],
                    effects: {}
                },
                h = o.playing;
            for (t = 0, e = p.length; t < e; t++)(i = p[t]).shouldSave() && 3 !== this.saveload && (i.is_music && 1 === this.saveload || (i.is_music || 2 !== this.saveload) && (a = i.getPlaybackTime(), i.looping && (a %= i.getDuration()), r = {
                tag: i.tag,
                buffersrc: i.buffer.src,
                is_music: i.is_music,
                playbackTime: a,
                volume: i.volume,
                looping: i.looping,
                muted: i.is_muted,
                playbackRate: i.playbackRate,
                paused: i.is_paused,
                resume_position: i.resume_position
            }, i.pannerEnabled && (r.pan = {}, s = r.pan, i.objectTracker && i.objectTracker.hasObject() ? s.objUid = i.objectTracker.obj.uid : (s.x = i.panX, s.y = i.panY, s.a = i.panAngle), s.ia = i.panConeInner, s.oa = i.panConeOuter, s.og = i.panConeOuterGain), h.push(r)));
            var c, l = o.effects;
            for (n in j)
                if (j.hasOwnProperty(n)) {
                    for (c = [], t = 0, e = j[n].length; t < e; t++) c.push({
                        type: j[n][t].type,
                        params: j[n][t].params
                    });
                    l[n] = c
                }
            return o
        };
        var ht = [];
        ot.loadFromJSON = function(t) {
            var e = t.silent;
            m = t.masterVolume, this.listenerZ = t.listenerZ, this.listenerTracker.setObject(null);
            var i = t.listenerUid; - 1 !== i && (this.listenerTracker.loadUid = i, ht.push(this.listenerTracker));
            var r, n, s, a, o, h, c, l, u, d, f, g, _, v, b, w, x, S, T = t.playing;
            if (3 !== this.saveload)
                for (r = 0, n = p.length; r < n; r++)(f = p[r]).is_music && 1 === this.saveload || (f.is_music || 2 !== this.saveload) && f.stop();
            for (g in j)
                if (j.hasOwnProperty(g))
                    for (r = 0, n = j[g].length; r < n; r++) j[g][r].remove();
            for (g in cr.wipe(j), t.effects)
                if (t.effects.hasOwnProperty(g))
                    for (r = 0, n = (b = t.effects[g]).length; r < n; r++) switch (w = b[r].type, x = b[r].params, w) {
                        case "filter":
                            ft(g, new H(x[0], x[1], x[2], x[3], x[4], x[5]));
                            break;
                        case "delay":
                            ft(g, new Y(x[0], x[1], x[2]));
                            break;
                        case "convolve":
                            a = x[2], (d = this.getAudioBuffer(a, !1)).bufferObject ? S = new J(d.bufferObject, x[0], x[1], a) : (S = new J(null, x[0], x[1], a), d.normalizeWhenReady = x[0], d.convolveWhenReady = S), ft(g, S);
                            break;
                        case "flanger":
                            ft(g, new K(x[0], x[1], x[2], x[3], x[4]));
                            break;
                        case "phaser":
                            ft(g, new Z(x[0], x[1], x[2], x[3], x[4], x[5]));
                            break;
                        case "gain":
                            ft(g, new Q(x[0]));
                            break;
                        case "tremolo":
                            ft(g, new $(x[0], x[1]));
                            break;
                        case "ringmod":
                            ft(g, new tt(x[0], x[1]));
                            break;
                        case "distortion":
                            ft(g, new et(x[0], x[1], x[2], x[3], x[4]));
                            break;
                        case "compressor":
                            ft(g, new it(x[0], x[1], x[2], x[3], x[4]));
                            break;
                        case "analyser":
                            ft(g, new rt(x[0], x[1]))
                    }
            for (r = 0, n = T.length; r < n; r++) 3 !== this.saveload && (a = (s = T[r]).buffersrc, o = s.is_music, h = s.tag, c = s.playbackTime, l = s.looping, u = s.volume, v = (_ = s.pan) && _.hasOwnProperty("objUid") ? _.objUid : -1, o && 1 === this.saveload || (o || 2 !== this.saveload) && ((f = this.getAudioInstance(a, h, o, l, u)) ? (f.resume_position = s.resume_position, f.setPannerEnabled(!!_), f.play(l, u, c), f.updatePlaybackRate(), f.updateVolume(), f.doSetMuted(f.is_muted || f.is_silent), s.paused && f.pause(), s.muted && f.setMuted(!0), f.doSetMuted(f.is_muted || f.is_silent), _ && (-1 !== v ? (f.objectTracker = f.objectTracker || new nt, f.objectTracker.loadUid = v, ht.push(f.objectTracker)) : f.setPan(_.x, _.y, _.a, _.ia, _.oa, _.og))) : ((d = this.getAudioBuffer(a, o)).seekWhenReady = c, d.pauseWhenReady = s.paused, _ && (-1 !== v ? d.panWhenReady.push({
                objUid: v,
                ia: _.ia,
                oa: _.oa,
                og: _.og,
                thistag: h
            }) : d.panWhenReady.push({
                x: _.x,
                y: _.y,
                a: _.a,
                ia: _.ia,
                oa: _.oa,
                og: _.og,
                thistag: h
            })))));
            if (e && !y) {
                for (r = 0, n = p.length; r < n; r++) p[r].setSilent(!0);
                y = !0
            } else if (!e && y) {
                for (r = 0, n = p.length; r < n; r++) p[r].setSilent(!1);
                y = !1
            }
        }, ot.afterLoad = function() {
            var t, e, i, r;
            for (t = 0, e = ht.length; t < e; t++) i = ht[t], r = this.runtime.getObjectByUID(i.loadUid), i.setObject(r), i.loadUid = -1, r && (_ = r.x, v = r.y);
            cr.clearArray(ht)
        }, ot.onSuspend = function(t) {
            if (!this.playinbackground) {
                var e, i;
                for (!t && l && l.resume && (l.resume(), b = !1), e = 0, i = p.length; e < i; e++) p[e].setSuspended(t);
                t && l && l.suspend && (l.suspend(), b = !0)
            }
        }, ot.tick = function() {
            var t, e, i, r, n, s, o = this.runtime.dt;
            for (t = 0, e = p.length; t < e; t++)(i = p[t]).tick(o), 0 !== g && i.updatePlaybackRate();
            for (r in j)
                if (j.hasOwnProperty(r))
                    for (t = 0, e = (n = j[r]).length; t < e; t++)(s = n[t]).tick && s.tick();
            c === a && this.listenerTracker.hasObject() && (this.listenerTracker.tick(o), _ = this.listenerTracker.obj.x, v = this.listenerTracker.obj.y, l.listener.setPosition(this.listenerTracker.obj.x, this.listenerTracker.obj.y, this.listenerZ))
        };
        var ct = [];
        ot.setPreloadList = function(t) {
            var e, i, r, n, s, a, o = 0;
            for (e = 0, i = t.length; e < i; ++e) n = (r = t[e])[0], s = 2 * r[1], ((a = n.length > 4 && ".ogg" === n.substr(n.length - 4)) && f || !a && !f) && (ct.push({
                filename: n,
                size: s,
                obj: null
            }), o += s);
            return o
        }, ot.startPreloads = function() {
            var t, e, i, r;
            for (t = 0, e = ct.length; t < e; ++t) i = ct[t], r = this.runtime.files_subfolder + i.filename, i.obj = this.getAudioBuffer(r, !1)
        }, ot.getPreloadedSize = function() {
            var t, e, i, r = 0;
            for (t = 0, e = ct.length; t < e; ++t)(i = ct[t]).obj.isLoadedAndDecoded() || i.obj.hasFailedToLoad() || this.runtime.isDomFree || this.runtime.isAndroidStockBrowser ? r += i.size : i.obj.isLoaded() && (r += Math.floor(i.size / 2));
            return r
        }, ot.releaseAllMusicBuffers = function() {
            var t, e, i, r;
            for (t = 0, i = 0, e = u.length; t < e; ++t) r = u[t], u[i] = r, r.is_music ? r.release() : ++i;
            u.length = i
        }, ot.getAudioBuffer = function(t, e, i) {
            var r, n, s, a = null;
            for (r = 0, n = u.length; r < n; r++)
                if ((s = u[r]).src === t) {
                    a = s;
                    break
                }
            return a || i || (P && e && this.releaseAllMusicBuffers(), a = new st(t, e), u.push(a)), a
        }, ot.getAudioInstance = function(t, e, i, r, n) {
            var s, a, o;
            for (s = 0, a = p.length; s < a; s++)
                if ((o = p[s]).src === t && (o.canBeRecycled() || i)) return o.tag = e, o;
            var h = this.getAudioBuffer(t, i);
            return h.bufferObject ? (o = new at(h, e), p.push(o), o) : ("<preload>" !== e && (h.playTagWhenReady = e, h.loopWhenReady = r, h.volumeWhenReady = n), null)
        };
        var lt = [];

        function ut(t, e) {
            var i = t.isPlaying() ? 1 : 0,
                r = e.isPlaying() ? 1 : 0;
            return i === r ? 0 : i < r ? 1 : -1
        }

        function pt(t, e) {
            if (cr.clearArray(lt), !t.length) return !d || d.hasEnded() ? void 0 : (cr.clearArray(lt), void(lt[0] = d));
            var i, r, n;
            for (i = 0, r = p.length; i < r; i++) n = p[i], cr.equals_nocase(t, n.tag) && lt.push(n);
            e && lt.sort(ut)
        }

        function dt(t) {
            var e, i, r, n, s = l.destination;
            if (j.hasOwnProperty(t) && (r = j[t]).length)
                for (s = r[0].getInputNode(), e = 0, i = r.length; e < i; e++) n = r[e], e + 1 === i ? n.connectTo(l.destination) : n.connectTo(r[e + 1].getInputNode());
            for (pt(t), e = 0, i = lt.length; e < i; e++) lt[e].reconnect(s);
            C && A === t && (C.disconnect(), C.connect(s))
        }

        function ft(t, e) {
            j.hasOwnProperty(t) ? j[t].push(e) : j[t] = [e], dt(t)
        }

        function gt() {}

        function yt() {}

        function mt() {}

        function _t(t, e) {
            var i = null;
            return j.hasOwnProperty(t) && (i = j[t]), i && e >= 0 && e < i.length && i[e].freqBins ? i[e] : null
        }
        gt.prototype.OnEnded = function(t) {
            return cr.equals_nocase(r, t)
        }, gt.prototype.PreloadsComplete = function() {
            var t, e;
            for (t = 0, e = u.length; t < e; t++)
                if (!u[t].isLoadedAndDecoded() && !u[t].hasFailedToLoad()) return !1;
            return !0
        }, gt.prototype.AdvancedAudioSupported = function() {
            return c === a
        }, gt.prototype.IsSilent = function() {
            return y
        }, gt.prototype.IsAnyPlaying = function() {
            var t, e;
            for (t = 0, e = p.length; t < e; t++)
                if (p[t].isPlaying()) return !0;
            return !1
        }, gt.prototype.IsTagPlaying = function(t) {
            var e, i;
            for (pt(t), e = 0, i = lt.length; e < i; e++)
                if (lt[e].isPlaying()) return !0;
            return !1
        }, t.cnds = new gt, yt.prototype.Play = function(t, e, i, r) {
            if (!y) {
                var n = B(i),
                    s = t[1],
                    a = this.runtime.files_subfolder + t[0] + (f ? ".ogg" : ".m4a");
                (d = this.getAudioInstance(a, r, s, 0 !== e, n)) && (d.setPannerEnabled(!1), d.play(0 !== e, n, 0, this.nextPlayTime), this.nextPlayTime = 0)
            }
        }, yt.prototype.PlayAtPosition = function(t, e, i, r, n, s, a, o, h, c) {
            if (!y) {
                var l = B(i),
                    u = t[1],
                    p = this.runtime.files_subfolder + t[0] + (f ? ".ogg" : ".m4a");
                if (d = this.getAudioInstance(p, c, u, 0 !== e, l)) d.setPannerEnabled(!0), d.setPan(r, n, s, a, o, B(h)), d.play(0 !== e, l, 0, this.nextPlayTime), this.nextPlayTime = 0;
                else this.getAudioBuffer(p, u).panWhenReady.push({
                    x: r,
                    y: n,
                    a: s,
                    ia: a,
                    oa: o,
                    og: B(h),
                    thistag: c
                })
            }
        }, yt.prototype.PlayAtObject = function(t, e, i, r, n, s, a, o) {
            if (!y && r) {
                var h = r.getFirstPicked();
                if (h) {
                    var c = B(i),
                        l = t[1],
                        u = this.runtime.files_subfolder + t[0] + (f ? ".ogg" : ".m4a");
                    if (d = this.getAudioInstance(u, o, l, 0 !== e, c)) {
                        d.setPannerEnabled(!0);
                        var p = cr.rotatePtAround(h.x, h.y, -h.layer.getAngle(), _, v, !0),
                            g = cr.rotatePtAround(h.x, h.y, -h.layer.getAngle(), _, v, !1);
                        d.setPan(p, g, cr.to_degrees(h.angle - h.layer.getAngle()), n, s, B(a)), d.setObject(h), d.play(0 !== e, c, 0, this.nextPlayTime), this.nextPlayTime = 0
                    } else {
                        this.getAudioBuffer(u, l).panWhenReady.push({
                            obj: h,
                            ia: n,
                            oa: s,
                            og: B(a),
                            thistag: o
                        })
                    }
                }
            }
        }, yt.prototype.PlayByName = function(t, e, i, r, n) {
            if (!y) {
                var s = B(r),
                    a = 1 === t,
                    o = this.runtime.files_subfolder + e.toLowerCase() + (f ? ".ogg" : ".m4a");
                (d = this.getAudioInstance(o, n, a, 0 !== i, s)) && (d.setPannerEnabled(!1), d.play(0 !== i, s, 0, this.nextPlayTime), this.nextPlayTime = 0)
            }
        }, yt.prototype.PlayAtPositionByName = function(t, e, i, r, n, s, a, o, h, c, l) {
            if (!y) {
                var u = B(r),
                    p = 1 === t,
                    g = this.runtime.files_subfolder + e.toLowerCase() + (f ? ".ogg" : ".m4a");
                if (d = this.getAudioInstance(g, l, p, 0 !== i, u)) d.setPannerEnabled(!0), d.setPan(n, s, a, o, h, B(c)), d.play(0 !== i, u, 0, this.nextPlayTime), this.nextPlayTime = 0;
                else this.getAudioBuffer(g, p).panWhenReady.push({
                    x: n,
                    y: s,
                    a: a,
                    ia: o,
                    oa: h,
                    og: B(c),
                    thistag: l
                })
            }
        }, yt.prototype.PlayAtObjectByName = function(t, e, i, r, n, s, a, o, h) {
            if (!y && n) {
                var c = n.getFirstPicked();
                if (c) {
                    var l = B(r),
                        u = 1 === t,
                        p = this.runtime.files_subfolder + e.toLowerCase() + (f ? ".ogg" : ".m4a");
                    if (d = this.getAudioInstance(p, h, u, 0 !== i, l)) {
                        d.setPannerEnabled(!0);
                        var g = cr.rotatePtAround(c.x, c.y, -c.layer.getAngle(), _, v, !0),
                            m = cr.rotatePtAround(c.x, c.y, -c.layer.getAngle(), _, v, !1);
                        d.setPan(g, m, cr.to_degrees(c.angle - c.layer.getAngle()), s, a, B(o)), d.setObject(c), d.play(0 !== i, l, 0, this.nextPlayTime), this.nextPlayTime = 0
                    } else {
                        this.getAudioBuffer(p, u).panWhenReady.push({
                            obj: c,
                            ia: s,
                            oa: a,
                            og: B(o),
                            thistag: h
                        })
                    }
                }
            }
        }, yt.prototype.SetLooping = function(t, e) {
            var i, r;
            for (pt(t), i = 0, r = lt.length; i < r; i++) lt[i].setLooping(0 === e)
        }, yt.prototype.SetMuted = function(t, e) {
            var i, r;
            for (pt(t), i = 0, r = lt.length; i < r; i++) lt[i].setMuted(0 === e)
        }, yt.prototype.SetVolume = function(t, e) {
            pt(t);
            var i, r, n = B(e);
            for (i = 0, r = lt.length; i < r; i++) lt[i].setVolume(n)
        }, yt.prototype.Preload = function(t) {
            if (!y) {
                var e = t[1],
                    i = this.runtime.files_subfolder + t[0] + (f ? ".ogg" : ".m4a");
                c !== h ? c !== o && this.getAudioInstance(i, "<preload>", e, !1) : this.runtime.isDirectCanvas ? AppMobi.context.loadSound(i) : AppMobi.player.loadSound(i)
            }
        }, yt.prototype.PreloadByName = function(t, e) {
            if (!y) {
                var i = 1 === t,
                    r = this.runtime.files_subfolder + e.toLowerCase() + (f ? ".ogg" : ".m4a");
                c !== h ? c !== o && this.getAudioInstance(r, "<preload>", i, !1) : this.runtime.isDirectCanvas ? AppMobi.context.loadSound(r) : AppMobi.player.loadSound(r)
            }
        }, yt.prototype.SetPlaybackRate = function(t, e) {
            var i, r;
            for (pt(t), e < 0 && (e = 0), i = 0, r = lt.length; i < r; i++) lt[i].setPlaybackRate(e)
        }, yt.prototype.Stop = function(t) {
            var e, i;
            for (pt(t), e = 0, i = lt.length; e < i; e++) lt[e].stop()
        }, yt.prototype.StopAll = function() {
            var t, e;
            for (t = 0, e = p.length; t < e; t++) p[t].stop()
        }, yt.prototype.SetPaused = function(t, e) {
            var i, r;
            for (pt(t), i = 0, r = lt.length; i < r; i++) 0 === e ? lt[i].pause() : lt[i].resume()
        }, yt.prototype.Seek = function(t, e) {
            var i, r;
            for (pt(t), i = 0, r = lt.length; i < r; i++) lt[i].seek(e)
        }, yt.prototype.SetSilent = function(t) {
            var e, i;
            if (2 === t && (t = y ? 1 : 0), 0 !== t || y) {
                if (1 === t && y) {
                    for (e = 0, i = p.length; e < i; e++) p[e].setSilent(!1);
                    y = !1
                }
            } else {
                for (e = 0, i = p.length; e < i; e++) p[e].setSilent(!0);
                y = !0
            }
        }, yt.prototype.SetMasterVolume = function(t) {
            var e, i;
            for (m = B(t), e = 0, i = p.length; e < i; e++) p[e].updateVolume()
        }, yt.prototype.AddFilterEffect = function(t, e, i, r, n, s, o) {
            c !== a || e < 0 || e >= q.length || !l.createBiquadFilter || (t = t.toLowerCase(), (o /= 100) < 0 && (o = 0), o > 1 && (o = 1), ft(t, new H(e, i, r, n, s, o)))
        }, yt.prototype.AddDelayEffect = function(t, e, i, r) {
            c === a && (t = t.toLowerCase(), (r /= 100) < 0 && (r = 0), r > 1 && (r = 1), ft(t, new Y(e, B(i), r)))
        }, yt.prototype.AddFlangerEffect = function(t, e, i, r, n, s) {
            c === a && l.createOscillator && (t = t.toLowerCase(), (s /= 100) < 0 && (s = 0), s > 1 && (s = 1), ft(t, new K(e / 1e3, i / 1e3, r, n / 100, s)))
        }, yt.prototype.AddPhaserEffect = function(t, e, i, r, n, s, o) {
            c === a && l.createOscillator && (t = t.toLowerCase(), (o /= 100) < 0 && (o = 0), o > 1 && (o = 1), ft(t, new Z(e, i, r, n, s, o)))
        }, yt.prototype.AddConvolutionEffect = function(t, e, i, r) {
            if (c === a && l.createConvolver) {
                var n, s = 0 === i,
                    o = this.runtime.files_subfolder + e[0] + (f ? ".ogg" : ".m4a"),
                    h = this.getAudioBuffer(o, !1);
                t = t.toLowerCase(), (r /= 100) < 0 && (r = 0), r > 1 && (r = 1), h.bufferObject ? n = new J(h.bufferObject, s, r, o) : (n = new J(null, s, r, o), h.normalizeWhenReady = s, h.convolveWhenReady = n), ft(t, n)
            }
        }, yt.prototype.AddGainEffect = function(t, e) {
            c === a && ft(t = t.toLowerCase(), new Q(B(e)))
        }, yt.prototype.AddMuteEffect = function(t) {
            c === a && ft(t = t.toLowerCase(), new Q(0))
        }, yt.prototype.AddTremoloEffect = function(t, e, i) {
            c === a && l.createOscillator && (t = t.toLowerCase(), (i /= 100) < 0 && (i = 0), i > 1 && (i = 1), ft(t, new $(e, i)))
        }, yt.prototype.AddRingModEffect = function(t, e, i) {
            c === a && l.createOscillator && (t = t.toLowerCase(), (i /= 100) < 0 && (i = 0), i > 1 && (i = 1), ft(t, new tt(e, i)))
        }, yt.prototype.AddDistortionEffect = function(t, e, i, r, n, s) {
            c === a && l.createWaveShaper && (t = t.toLowerCase(), (s /= 100) < 0 && (s = 0), s > 1 && (s = 1), ft(t, new et(e, i, r, n, s)))
        }, yt.prototype.AddCompressorEffect = function(t, e, i, r, n, s) {
            c === a && l.createDynamicsCompressor && ft(t = t.toLowerCase(), new it(e, i, r, n / 1e3, s / 1e3))
        }, yt.prototype.AddAnalyserEffect = function(t, e, i) {
            c === a && ft(t = t.toLowerCase(), new rt(e, i))
        }, yt.prototype.RemoveEffects = function(t) {
            var e, i, r;
            if (c === a && (t = t.toLowerCase(), j.hasOwnProperty(t) && (r = j[t]).length)) {
                for (e = 0, i = r.length; e < i; e++) r[e].remove();
                cr.clearArray(r), dt(t)
            }
        }, yt.prototype.SetEffectParameter = function(t, e, i, r, n, s) {
            var o;
            c === a && (t = t.toLowerCase(), e = Math.floor(e), j.hasOwnProperty(t) && (o = j[t], e < 0 || e >= o.length || o[e].setParam(i, r, n, s)))
        }, yt.prototype.SetListenerObject = function(t) {
            if (t && c === a) {
                var e = t.getFirstPicked();
                e && (this.listenerTracker.setObject(e), _ = e.x, v = e.y)
            }
        }, yt.prototype.SetListenerZ = function(t) {
            this.listenerZ = t
        }, yt.prototype.ScheduleNextPlay = function(t) {
            l && (this.nextPlayTime = t)
        }, yt.prototype.UnloadAudio = function(t) {
            var e = t[1],
                i = this.runtime.files_subfolder + t[0] + (f ? ".ogg" : ".m4a"),
                r = this.getAudioBuffer(i, e, !0);
            r && (r.release(), cr.arrayFindRemove(u, r))
        }, yt.prototype.UnloadAudioByName = function(t, e) {
            var i = 1 === t,
                r = this.runtime.files_subfolder + e.toLowerCase() + (f ? ".ogg" : ".m4a"),
                n = this.getAudioBuffer(r, i, !0);
            n && (n.release(), cr.arrayFindRemove(u, n))
        }, yt.prototype.UnloadAll = function() {
            var t, e;
            for (t = 0, e = u.length; t < e; ++t) u[t].release();
            cr.clearArray(u)
        }, t.acts = new yt, mt.prototype.Duration = function(t, e) {
            pt(e, !0), lt.length ? t.set_float(lt[0].getDuration()) : t.set_float(0)
        }, mt.prototype.PlaybackTime = function(t, e) {
            pt(e, !0), lt.length ? t.set_float(lt[0].getPlaybackTime(!0)) : t.set_float(0)
        }, mt.prototype.Volume = function(t, e) {
            if (pt(e, !0), lt.length) {
                var i = lt[0].getVolume();
                t.set_float(M(i))
            } else t.set_float(0)
        }, mt.prototype.MasterVolume = function(t) {
            t.set_float(M(m))
        }, mt.prototype.EffectCount = function(t, e) {
            e = e.toLowerCase();
            var i = null;
            j.hasOwnProperty(e) && (i = j[e]), t.set_int(i ? i.length : 0)
        }, mt.prototype.AnalyserFreqBinCount = function(t, e, i) {
            var r = _t(e = e.toLowerCase(), i = Math.floor(i));
            t.set_int(r ? r.node.frequencyBinCount : 0)
        }, mt.prototype.AnalyserFreqBinAt = function(t, e, i, r) {
            e = e.toLowerCase(), i = Math.floor(i), r = Math.floor(r);
            var n = _t(e, i);
            n ? r < 0 || r >= n.node.frequencyBinCount ? t.set_float(0) : t.set_float(n.freqBins[r]) : t.set_float(0)
        }, mt.prototype.AnalyserPeakLevel = function(t, e, i) {
            var r = _t(e = e.toLowerCase(), i = Math.floor(i));
            r ? t.set_float(r.peak) : t.set_float(0)
        }, mt.prototype.AnalyserRMSLevel = function(t, e, i) {
            var r = _t(e = e.toLowerCase(), i = Math.floor(i));
            r ? t.set_float(r.rms) : t.set_float(0)
        }, mt.prototype.SampleRate = function(t) {
            t.set_int(l ? l.sampleRate : 0)
        }, mt.prototype.CurrentTime = function(t) {
            t.set_float(l ? l.currentTime : cr.performance_now())
        }, t.exps = new mt
    }(), cr.plugins_.Browser = function(t) {
        this.runtime = t
    },
    function() {
        var pluginProto = cr.plugins_.Browser.prototype;
        pluginProto.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var typeProto = pluginProto.Type.prototype;
        typeProto.onCreate = function() {};
        var offlineScriptReady = !1,
            browserPluginReady = !1;
        document.addEventListener("DOMContentLoaded", function() {
            if (window.C2_RegisterSW && navigator.serviceWorker) {
                var t = document.createElement("script");
                t.onload = function() {
                    offlineScriptReady = !0, checkReady()
                }, t.src = "offlineClient.js", document.head.appendChild(t)
            }
        });
        var browserInstance = null;

        function checkReady() {
            offlineScriptReady && browserPluginReady && window.OfflineClientInfo && window.OfflineClientInfo.SetMessageCallback(function(t) {
                browserInstance.onSWMessage(t)
            })
        }
        typeProto.onAppBegin = function() {
            browserPluginReady = !0, checkReady()
        }, pluginProto.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var instanceProto = pluginProto.Instance.prototype;
        instanceProto.onCreate = function() {
            var t = this;
            window.addEventListener("resize", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnResize, t)
            }), browserInstance = this, void 0 !== navigator.onLine && (window.addEventListener("online", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnOnline, t)
            }), window.addEventListener("offline", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnOffline, t)
            })), void 0 !== window.applicationCache && (window.applicationCache.addEventListener("updateready", function() {
                t.runtime.loadingprogress = 1, t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateReady, t)
            }), window.applicationCache.addEventListener("progress", function(e) {
                t.runtime.loadingprogress = e.loaded / e.total || 0
            })), this.runtime.isDirectCanvas || (document.addEventListener("appMobi.device.update.available", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateReady, t)
            }), document.addEventListener("backbutton", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, t)
            }), document.addEventListener("menubutton", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnMenuButton, t)
            }), document.addEventListener("searchbutton", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnSearchButton, t)
            }), document.addEventListener("tizenhwkey", function(e) {
                switch (e.keyName) {
                    case "back":
                        t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, t) || window.tizen && window.tizen.application.getCurrentApplication().exit();
                        break;
                    case "menu":
                        t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnMenuButton, t) || e.preventDefault()
                }
            })), this.runtime.isWindows10 && "undefined" != typeof Windows ? Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested", function(e) {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, t) && (e.handled = !0)
            }) : this.runtime.isWinJS && WinJS.Application && (WinJS.Application.onbackclick = function(e) {
                return !!t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, t)
            }), this.runtime.addSuspendCallback(function(e) {
                e ? t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnPageHidden, t) : t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnPageVisible, t)
            }), this.is_arcade = void 0 !== window.is_scirra_arcade
        }, instanceProto.onSWMessage = function(t) {
            var e = t.data.type;
            "downloading-update" === e ? this.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateFound, this) : "update-ready" === e || "update-pending" === e ? this.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateReady, this) : "offline-ready" === e && this.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnOfflineReady, this)
        };
        var batteryManager = null,
            loadedBatteryManager = !1;

        function maybeLoadBatteryManager() {
            if (!loadedBatteryManager && navigator.getBattery) {
                var t = navigator.getBattery();
                loadedBatteryManager = !0, t && t.then(function(t) {
                    batteryManager = t
                })
            }
        }

        function Cnds() {}

        function Acts() {}
        Cnds.prototype.CookiesEnabled = function() {
            return !!navigator && navigator.cookieEnabled
        }, Cnds.prototype.IsOnline = function() {
            return !!navigator && navigator.onLine
        }, Cnds.prototype.HasJava = function() {
            return !!navigator && navigator.javaEnabled()
        }, Cnds.prototype.OnOnline = function() {
            return !0
        }, Cnds.prototype.OnOffline = function() {
            return !0
        }, Cnds.prototype.IsDownloadingUpdate = function() {
            return void 0 !== window.applicationCache && window.applicationCache.status === window.applicationCache.DOWNLOADING
        }, Cnds.prototype.OnUpdateReady = function() {
            return !0
        }, Cnds.prototype.PageVisible = function() {
            return !this.runtime.isSuspended
        }, Cnds.prototype.OnPageVisible = function() {
            return !0
        }, Cnds.prototype.OnPageHidden = function() {
            return !0
        }, Cnds.prototype.OnResize = function() {
            return !0
        }, Cnds.prototype.IsFullscreen = function() {
            return !!(document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || this.runtime.isNodeFullscreen)
        }, Cnds.prototype.OnBackButton = function() {
            return !0
        }, Cnds.prototype.OnMenuButton = function() {
            return !0
        }, Cnds.prototype.OnSearchButton = function() {
            return !0
        }, Cnds.prototype.IsMetered = function() {
            var t = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            return !!t && !!t.metered
        }, Cnds.prototype.IsCharging = function() {
            var t = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
            return t ? !!t.charging : (maybeLoadBatteryManager(), !batteryManager || !!batteryManager.charging)
        }, Cnds.prototype.IsPortraitLandscape = function(t) {
            return (window.innerWidth <= window.innerHeight ? 0 : 1) === t
        }, Cnds.prototype.SupportsFullscreen = function() {
            if (this.runtime.isNodeWebkit) return !0;
            var t = this.runtime.canvasdiv || this.runtime.canvas;
            return !!(t.requestFullscreen || t.mozRequestFullScreen || t.msRequestFullscreen || t.webkitRequestFullScreen)
        }, Cnds.prototype.OnUpdateFound = function() {
            return !0
        }, Cnds.prototype.OnUpdateReady = function() {
            return !0
        }, Cnds.prototype.OnOfflineReady = function() {
            return !0
        }, pluginProto.cnds = new Cnds, Acts.prototype.Alert = function(t) {
            this.runtime.isDomFree || alert(t.toString())
        }, Acts.prototype.Close = function() {
            this.runtime.isCocoonJs ? CocoonJS.App.forceToFinish() : window.tizen ? window.tizen.application.getCurrentApplication().exit() : navigator.app && navigator.app.exitApp ? navigator.app.exitApp() : navigator.device && navigator.device.exitApp ? navigator.device.exitApp() : this.is_arcade || this.runtime.isDomFree || window.close()
        }, Acts.prototype.Focus = function() {
            this.runtime.isNodeWebkit ? window.nwgui.Window.get().focus() : this.is_arcade || this.runtime.isDomFree || window.focus()
        }, Acts.prototype.Blur = function() {
            this.runtime.isNodeWebkit ? window.nwgui.Window.get().blur() : this.is_arcade || this.runtime.isDomFree || window.blur()
        }, Acts.prototype.GoBack = function() {
            navigator.app && navigator.app.backHistory ? navigator.app.backHistory() : this.is_arcade || this.runtime.isDomFree || !window.back || window.back()
        }, Acts.prototype.GoForward = function() {
            this.is_arcade || this.runtime.isDomFree || !window.forward || window.forward()
        }, Acts.prototype.GoHome = function() {
            this.is_arcade || this.runtime.isDomFree || !window.home || window.home()
        }, Acts.prototype.GoToURL = function(t, e) {
            this.runtime.isCocoonJs ? CocoonJS.App.openURL(t) : this.runtime.isEjecta ? ejecta.openURL(t) : this.runtime.isWinJS ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(t)) : navigator.app && navigator.app.loadUrl ? navigator.app.loadUrl(t, {
                openExternal: !0
            }) : this.runtime.isCordova ? window.open(t, "_system") : this.is_arcade || this.runtime.isDomFree || (2 !== e || this.is_arcade ? 1 !== e || this.is_arcade ? window.location = t : window.parent.location = t : window.top.location = t)
        }, Acts.prototype.GoToURLWindow = function(t, e) {
            this.runtime.isCocoonJs ? CocoonJS.App.openURL(t) : this.runtime.isEjecta ? ejecta.openURL(t) : this.runtime.isWinJS ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(t)) : navigator.app && navigator.app.loadUrl ? navigator.app.loadUrl(t, {
                openExternal: !0
            }) : this.runtime.isCordova ? window.open(t, "_system") : this.is_arcade || this.runtime.isDomFree || window.open(t, e)
        }, Acts.prototype.Reload = function() {
            this.is_arcade || this.runtime.isDomFree || window.location.reload()
        };
        var firstRequestFullscreen = !0,
            crruntime = null;

        function onFullscreenError(t) {
            console && console.warn && console.warn("Fullscreen request failed: ", t), crruntime.setSize(window.innerWidth, window.innerHeight)
        }
        Acts.prototype.RequestFullScreen = function(t) {
            if (this.runtime.isDomFree) cr.logexport("[Construct 2] Requesting fullscreen is not supported on this platform - the request has been ignored");
            else if (t >= 2 && (t += 1), 6 === t && (t = 2), this.runtime.isNodeWebkit) this.runtime.isDebug ? debuggerFullscreen(!0) : !this.runtime.isNodeFullscreen && window.nwgui && (window.nwgui.Window.get().enterFullscreen(), this.runtime.isNodeFullscreen = !0, this.runtime.fullscreen_scaling = t >= 2 ? t : 0);
            else {
                if (document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement || document.fullScreen || document.fullScreenElement) return;
                this.runtime.fullscreen_scaling = t >= 2 ? t : 0;
                var e = document.documentElement;
                firstRequestFullscreen && (firstRequestFullscreen = !1, crruntime = this.runtime, e.addEventListener("mozfullscreenerror", onFullscreenError), e.addEventListener("webkitfullscreenerror", onFullscreenError), e.addEventListener("MSFullscreenError", onFullscreenError), e.addEventListener("fullscreenerror", onFullscreenError)), e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.webkitRequestFullScreen && ("undefined" != typeof Element && void 0 !== Element.ALLOW_KEYBOARD_INPUT ? e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : e.webkitRequestFullScreen())
            }
        }, Acts.prototype.CancelFullScreen = function() {
            this.runtime.isDomFree ? cr.logexport("[Construct 2] Exiting fullscreen is not supported on this platform - the request has been ignored") : this.runtime.isNodeWebkit ? this.runtime.isDebug ? debuggerFullscreen(!1) : this.runtime.isNodeFullscreen && window.nwgui && (window.nwgui.Window.get().leaveFullscreen(), this.runtime.isNodeFullscreen = !1) : document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
        }, Acts.prototype.Vibrate = function(t) {
            try {
                var e, i, r = t.split(",");
                for (e = 0, i = r.length; e < i; e++) r[e] = parseInt(r[e], 10);
                navigator.vibrate ? navigator.vibrate(r) : navigator.mozVibrate ? navigator.mozVibrate(r) : navigator.webkitVibrate ? navigator.webkitVibrate(r) : navigator.msVibrate && navigator.msVibrate(r)
            } catch (t) {}
        }, Acts.prototype.InvokeDownload = function(t, e) {
            var i = document.createElement("a");
            if (void 0 === i.download) window.open(t);
            else {
                var r = document.getElementsByTagName("body")[0];
                i.textContent = e, i.href = t, i.download = e, r.appendChild(i);
                var n = new MouseEvent("click");
                i.dispatchEvent(n), r.removeChild(i)
            }
        }, Acts.prototype.InvokeDownloadString = function(t, e, i) {
            var r = "data:" + e + "," + encodeURIComponent(t),
                n = document.createElement("a");
            if (void 0 === n.download) window.open(r);
            else {
                var s = document.getElementsByTagName("body")[0];
                n.textContent = i, n.href = r, n.download = i, s.appendChild(n);
                var a = new MouseEvent("click");
                n.dispatchEvent(a), s.removeChild(n)
            }
        }, Acts.prototype.ConsoleLog = function(t, e) {
            "undefined" != typeof console && (0 === t && console.log && console.log(e.toString()), 1 === t && console.warn && console.warn(e.toString()), 2 === t && console.error && console.error(e.toString()))
        }, Acts.prototype.ConsoleGroup = function(t) {
            console && console.group && console.group(t)
        }, Acts.prototype.ConsoleGroupEnd = function() {
            console && console.groupEnd && console.groupEnd()
        }, Acts.prototype.ExecJs = function(js_) {
            try {
                eval && eval(js_)
            } catch (t) {
                console && console.error && console.error("Error executing Javascript: ", t)
            }
        };
        var orientations = ["portrait", "landscape", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];

        function Exps() {}
        Acts.prototype.LockOrientation = function(t) {
            if (!((t = Math.floor(t)) < 0 || t >= orientations.length)) {
                this.runtime.autoLockOrientation = !1;
                var e = orientations[t];
                screen.orientation && screen.orientation.lock ? screen.orientation.lock(e) : screen.lockOrientation ? screen.lockOrientation(e) : screen.webkitLockOrientation ? screen.webkitLockOrientation(e) : screen.mozLockOrientation ? screen.mozLockOrientation(e) : screen.msLockOrientation && screen.msLockOrientation(e)
            }
        }, Acts.prototype.UnlockOrientation = function() {
            this.runtime.autoLockOrientation = !1, screen.orientation && screen.orientation.unlock ? screen.orientation.unlock() : screen.unlockOrientation ? screen.unlockOrientation() : screen.webkitUnlockOrientation ? screen.webkitUnlockOrientation() : screen.mozUnlockOrientation ? screen.mozUnlockOrientation() : screen.msUnlockOrientation && screen.msUnlockOrientation()
        }, pluginProto.acts = new Acts, Exps.prototype.URL = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.toString())
        }, Exps.prototype.Protocol = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.protocol)
        }, Exps.prototype.Domain = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.hostname)
        }, Exps.prototype.PathName = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.pathname)
        }, Exps.prototype.Hash = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.hash)
        }, Exps.prototype.Referrer = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : document.referrer)
        }, Exps.prototype.Title = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : document.title)
        }, Exps.prototype.Name = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : navigator.appName)
        }, Exps.prototype.Version = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : navigator.appVersion)
        }, Exps.prototype.Language = function(t) {
            navigator && navigator.language ? t.set_string(navigator.language) : t.set_string("")
        }, Exps.prototype.Platform = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : navigator.platform)
        }, Exps.prototype.Product = function(t) {
            navigator && navigator.product ? t.set_string(navigator.product) : t.set_string("")
        }, Exps.prototype.Vendor = function(t) {
            navigator && navigator.vendor ? t.set_string(navigator.vendor) : t.set_string("")
        }, Exps.prototype.UserAgent = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : navigator.userAgent)
        }, Exps.prototype.QueryString = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.search)
        }, Exps.prototype.QueryParam = function(t, e) {
            if (this.runtime.isDomFree) t.set_string("");
            else {
                var i = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
                i ? t.set_string(decodeURIComponent(i[1].replace(/\+/g, " "))) : t.set_string("")
            }
        }, Exps.prototype.Bandwidth = function(t) {
            var e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            e ? void 0 !== e.bandwidth ? t.set_float(e.bandwidth) : void 0 !== e.downlinkMax ? t.set_float(e.downlinkMax) : t.set_float(Number.POSITIVE_INFINITY) : t.set_float(Number.POSITIVE_INFINITY)
        }, Exps.prototype.ConnectionType = function(t) {
            var e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            e ? t.set_string(e.type || "unknown") : t.set_string("unknown")
        }, Exps.prototype.BatteryLevel = function(t) {
            var e = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
            e ? t.set_float(e.level) : (maybeLoadBatteryManager(), batteryManager ? t.set_float(batteryManager.level) : t.set_float(1))
        }, Exps.prototype.BatteryTimeLeft = function(t) {
            var e = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
            e ? t.set_float(e.dischargingTime) : (maybeLoadBatteryManager(), batteryManager ? t.set_float(batteryManager.dischargingTime) : t.set_float(Number.POSITIVE_INFINITY))
        }, Exps.prototype.ExecJS = function(ret, js_) {
            if (eval) {
                var result = 0;
                try {
                    result = eval(js_)
                } catch (t) {
                    console && console.error && console.error("Error executing Javascript: ", t)
                }
                "number" == typeof result ? ret.set_any(result) : "string" == typeof result ? ret.set_any(result) : "boolean" == typeof result ? ret.set_any(result ? 1 : 0) : ret.set_any(0)
            } else ret.set_any(0)
        }, Exps.prototype.ScreenWidth = function(t) {
            t.set_int(screen.width)
        }, Exps.prototype.ScreenHeight = function(t) {
            t.set_int(screen.height)
        }, Exps.prototype.DevicePixelRatio = function(t) {
            t.set_float(this.runtime.devicePixelRatio)
        }, Exps.prototype.WindowInnerWidth = function(t) {
            t.set_int(window.innerWidth)
        }, Exps.prototype.WindowInnerHeight = function(t) {
            t.set_int(window.innerHeight)
        }, Exps.prototype.WindowOuterWidth = function(t) {
            t.set_int(window.outerWidth)
        }, Exps.prototype.WindowOuterHeight = function(t) {
            t.set_int(window.outerHeight)
        }, pluginProto.exps = new Exps
    }(), cr.plugins_.Dictionary = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.plugins_.Dictionary.prototype;
        t.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function() {}, t.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var e = t.Instance.prototype;

        function i() {}

        function r() {}

        function n() {}
        e.onCreate = function() {
            this.dictionary = {}, this.cur_key = "", this.key_count = 0
        }, e.saveToJSON = function() {
            return this.dictionary
        }, e.loadFromJSON = function(t) {
            for (var e in this.dictionary = t, this.key_count = 0, this.dictionary) this.dictionary.hasOwnProperty(e) && this.key_count++
        }, i.prototype.CompareValue = function(t, e, i) {
            return cr.do_cmp(this.dictionary[t], e, i)
        }, i.prototype.ForEachKey = function() {
            var t = this.runtime.getCurrentEventStack().current_event;
            for (var e in this.dictionary) this.dictionary.hasOwnProperty(e) && (this.cur_key = e, this.runtime.pushCopySol(t.solModifiers), t.retrigger(), this.runtime.popSol(t.solModifiers));
            return this.cur_key = "", !1
        }, i.prototype.CompareCurrentValue = function(t, e) {
            return cr.do_cmp(this.dictionary[this.cur_key], t, e)
        }, i.prototype.HasKey = function(t) {
            return this.dictionary.hasOwnProperty(t)
        }, i.prototype.IsEmpty = function() {
            return 0 === this.key_count
        }, t.cnds = new i, r.prototype.AddKey = function(t, e) {
            this.dictionary.hasOwnProperty(t) || this.key_count++, this.dictionary[t] = e
        }, r.prototype.SetKey = function(t, e) {
            this.dictionary.hasOwnProperty(t) && (this.dictionary[t] = e)
        }, r.prototype.DeleteKey = function(t) {
            this.dictionary.hasOwnProperty(t) && (delete this.dictionary[t], this.key_count--)
        }, r.prototype.Clear = function() {
            cr.wipe(this.dictionary), this.key_count = 0
        }, r.prototype.JSONLoad = function(t) {
            var e;
            try {
                e = JSON.parse(t)
            } catch (t) {
                return
            }
            if (e.c2dictionary)
                for (var i in this.dictionary = e.data, this.key_count = 0, this.dictionary) this.dictionary.hasOwnProperty(i) && this.key_count++
        }, r.prototype.JSONDownload = function(t) {
            var e = document.createElement("a");
            if (void 0 === e.download) {
                var i = "data:text/html," + encodeURIComponent("<p><a download='data.json' href=\"data:application/json," + encodeURIComponent(JSON.stringify({
                    c2dictionary: !0,
                    data: this.dictionary
                })) + '">Download link</a></p>');
                window.open(i)
            } else {
                var r = document.getElementsByTagName("body")[0];
                e.textContent = t, e.href = "data:application/json," + encodeURIComponent(JSON.stringify({
                    c2dictionary: !0,
                    data: this.dictionary
                })), e.download = t, r.appendChild(e);
                var n = document.createEvent("MouseEvent");
                n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(n), r.removeChild(e)
            }
        }, t.acts = new r, n.prototype.Get = function(t, e) {
            this.dictionary.hasOwnProperty(e) ? t.set_any(this.dictionary[e]) : t.set_int(0)
        }, n.prototype.KeyCount = function(t) {
            t.set_int(this.key_count)
        }, n.prototype.CurrentKey = function(t) {
            t.set_string(this.cur_key)
        }, n.prototype.CurrentValue = function(t) {
            this.dictionary.hasOwnProperty(this.cur_key) ? t.set_any(this.dictionary[this.cur_key]) : t.set_int(0)
        }, n.prototype.AsJSON = function(t) {
            t.set_string(JSON.stringify({
                c2dictionary: !0,
                data: this.dictionary
            }))
        }, t.exps = new n
    }(), cr.plugins_.Famobi = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.plugins_.Famobi.prototype,
            e = !1;
        window.famobi_onPauseRequested = function() {
            try {
                window.famobi.log("ad started")
            } catch (t) {
                console.debug(t)
            }
            e = !0, cr_setSuspended(!0)
        }, window.famobi_onResumeRequested = function() {
            try {
                window.famobi.log("ad finished")
            } catch (t) {
                console.debug(t)
            }
            e = !1, cr_setSuspended(!1)
        }, t.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function() {}, t.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var i = t.Instance.prototype;

        function r() {}

        function n() {}

        function s() {}
        i.onCreate = function() {}, i.onDestroy = function() {}, i.saveToJSON = function() {
            return {}
        }, i.loadFromJSON = function(t) {}, i.draw = function(t) {}, i.drawGL = function(t) {}, r.prototype.HasFeatureStandalone = function(t) {
            return window.famobi.hasFeature("standalone", t)
        }, r.prototype.IsAdShowing = function() {
            return e
        }, t.cnds = new r, n.prototype.ShowAd = function() {
            try {
                window.famobi.showAd()
            } catch (t) {
                console.debug(t)
            }
        }, n.prototype.Translate = function(t) {
            try {
                return window.famobi.__(t) || (console.debug("No translation found for key '" + t + '"'), t)
            } catch (t) {
                console.debug(t)
            }
        }, n.prototype.GetMoreGamesButtonImage = function() {
            try {
                return window.famobi.getMoreGamesButtonImage(!0)
            } catch (t) {
                console.debug(t)
            }
        }, n.prototype.GetMoreGamesLink = function() {
            try {
                return window.famobi.__("more_games_url")
            } catch (t) {
                console.debug(t)
            }
        }, n.prototype.GetAppLink = function() {
            try {
                return window.famobi.getAppLink()
            } catch (t) {
                console.debug(t)
            }
        }, n.prototype.MoreGamesLink = function() {
            try {
                window.famobi.moreGamesLink()
            } catch (t) {
                console.debug(t)
            }
        }, n.prototype.trackEventCustom = function(t) {
            try {
                try {
                    "c2dictionary" in (t = JSON.parse(t)) && t.c2dictionary && (t = t.data)
                } catch (t) {
                    return console.warn("Params need to be a valid JSON."), !1
                }
                window.famobi_analytics.trackEvent("EVENT_CUSTOM", t)
            } catch (t) {
                console.debug(t)
            }
        }, n.prototype.trackEventLevelFail = function(t, e) {
            try {
                window.famobi_analytics.trackEvent("EVENT_LEVELFAIL", {
                    levelName: String(t),
                    reason: ["timeout", "dead", "wrong_answer", "quit", "draw"][e]
                })
            } catch (t) {
                console.debug(t)
            }
        }, n.prototype.trackEventLevelRestart = function(t) {
            try {
                window.famobi_analytics.trackEvent("EVENT_LEVELRESTART", {
                    levelName: String(t)
                })
            } catch (t) {
                console.debug(t)
            }
        }, n.prototype.trackEventLevelStart = function(t) {
            try {
                window.famobi_analytics.trackEvent("EVENT_LEVELSTART", {
                    levelName: String(t)
                })
            } catch (t) {
                console.debug(t)
            }
        }, n.prototype.trackEventLevelSuccess = function(t) {
            try {
                window.famobi_analytics.trackEvent("EVENT_LEVELSUCCESS", {
                    levelName: String(t)
                })
            } catch (t) {
                console.debug(t)
            }
        }, n.prototype.trackEventLevelScore = function(t, e) {
            try {
                window.famobi_analytics.trackEvent("EVENT_LEVELSCORE", {
                    levelName: String(t),
                    levelScore: e
                })
            } catch (t) {
                console.debug(t)
            }
        }, n.prototype.trackEventTotalScore = function(t) {
            try {
                window.famobi_analytics.trackEvent("EVENT_TOTALSCORE", {
                    totalScore: t
                })
            } catch (t) {
                console.debug(t)
            }
        }, n.prototype.trackEventLiveScore = function(t) {
            try {
                window.famobi_analytics.trackEvent("EVENT_LIVESCORE", {
                    liveScore: t
                })
            } catch (t) {
                console.debug(t)
            }
        }, n.prototype.trackEventTutorial = function(t) {
            var e = t ? "EVENT_TUTORIALSKIPPED" : "EVENT_TUTORIALCOMPLETED";
            try {
                window.famobi_analytics.trackEvent(e)
            } catch (t) {
                console.debug(t)
            }
        }, n.prototype.trackEventVolumeChange = function(t, e) {
            try {
                window.famobi_analytics.trackEvent("EVENT_VOLUMECHANGE", {
                    bgmVolume: t,
                    sfxVolume: e
                })
            } catch (t) {
                console.debug(t)
            }
        }, n.prototype.trackStats = function(t, e) {
            try {
                try {
                    "c2dictionary" in (t = JSON.parse(t)) && t.c2dictionary && (t = t.data)
                } catch (t) {}
                window.famobi_analytics.trackStats(t, e)
            } catch (t) {
                console.debug(t)
            }
        }, n.prototype.trackScreen = function(t, e) {
            try {
                t = ["SCREEN_OTHER", "SCREEN_BONUS", "SCREEN_CHARACTER", "SCREEN_CREDITS", "SCREEN_GAMERESULT", "SCREEN_HELP", "SCREEN_HOME", "SCREEN_LEVEL", "SCREEN_LEVELINTRO", "SCREEN_LEVELLOADING", "SCREEN_LEVELRESULT", "SCREEN_LEVELSELECT", "SCREEN_PAUSE", "SCREEN_SETTINGS", "SCREEN_SHOP", "SCREEN_SPLASH", "SCREEN_TUTORIAL"][t], window.famobi_analytics.trackScreen(t, e)
            } catch (t) {
                console.debug(t)
            }
        }, t.acts = new n, s.prototype.GetMoreGamesButtonImage = function(t) {
            t.set_string(n.prototype.GetMoreGamesButtonImage())
        }, s.prototype.Translate = function(t, e) {
            t.set_string(n.prototype.Translate(e))
        }, s.prototype.GetMoreGamesLink = function(t) {
            t.set_string(n.prototype.GetMoreGamesLink())
        }, s.prototype.GetAppLink = function(t) {
            t.set_string(n.prototype.GetAppLink())
        }, t.exps = new s
    }(), cr.plugins_.Function = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.plugins_.Function.prototype;
        t.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function() {}, t.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var e = [],
            i = -1;

        function r() {
            return ++i === e.length && e.push(new function() {
                this.name = "", this.retVal = 0, this.params = []
            }), e[i]
        }

        function n() {
            return i < 0 ? null : e[i]
        }

        function s() {
            i--
        }

        function a() {}

        function o() {}

        function h() {}
        t.Instance.prototype.onCreate = function() {
            "undefined" != typeof cr_is_preview;
            var t = this;
            window.c2_callFunction = function(e, i) {
                var n, a, o, h = r();
                if (h.name = e.toLowerCase(), h.retVal = 0, i)
                    for (h.params.length = i.length, n = 0, a = i.length; n < a; ++n) o = i[n], h.params[n] = "number" == typeof o || "string" == typeof o ? o : "boolean" == typeof o && o ? 1 : 0;
                else cr.clearArray(h.params);
                return t.runtime.trigger(cr.plugins_.Function.prototype.cnds.OnFunction, t, h.name), s(), h.retVal
            }
        }, a.prototype.OnFunction = function(t) {
            var e = n();
            return !!e && cr.equals_nocase(t, e.name)
        }, a.prototype.CompareParam = function(t, e, i) {
            var r = n();
            return !!r && (!((t = cr.floor(t)) < 0 || t >= r.params.length) && cr.do_cmp(r.params[t], e, i))
        }, t.cnds = new a, o.prototype.CallFunction = function(t, e) {
            var i = r();
            i.name = t.toLowerCase(), i.retVal = 0, cr.shallowAssignArray(i.params, e);
            this.runtime.trigger(cr.plugins_.Function.prototype.cnds.OnFunction, this, i.name);
            s()
        }, o.prototype.SetReturnValue = function(t) {
            var e = n();
            e && (e.retVal = t)
        }, o.prototype.CallExpression = function(t) {}, t.acts = new o, h.prototype.ReturnValue = function(t) {
            var r = function() {
                if (!e.length) return null;
                var t = i + 1;
                return t >= e.length && (t = e.length - 1), e[t]
            }();
            r ? t.set_any(r.retVal) : t.set_int(0)
        }, h.prototype.ParamCount = function(t) {
            var e = n();
            e ? t.set_int(e.params.length) : t.set_int(0)
        }, h.prototype.Param = function(t, e) {
            e = cr.floor(e);
            var i = n();
            i && e >= 0 && e < i.params.length ? t.set_any(i.params[e]) : t.set_int(0)
        }, h.prototype.Call = function(t, e) {
            var i, n, a = r();
            for (a.name = e.toLowerCase(), a.retVal = 0, cr.clearArray(a.params), i = 2, n = arguments.length; i < n; i++) a.params.push(arguments[i]);
            this.runtime.trigger(cr.plugins_.Function.prototype.cnds.OnFunction, this, a.name);
            s(), t.set_any(a.retVal)
        }, t.exps = new h
    }(), cr.plugins_.Globals = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.plugins_.Globals.prototype;
        t.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function() {}, t.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        }, t.Instance.prototype.onCreate = function() {}, t.cnds = new function() {}, t.acts = new function() {}, t.exps = new function() {}
    }(), cr.plugins_.Keyboard = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.plugins_.Keyboard.prototype;
        t.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function() {}, t.Instance = function(t) {
            this.type = t, this.runtime = t.runtime, this.keyMap = new Array(256), this.usedKeys = new Array(256), this.triggerKey = 0
        };
        var e = t.Instance.prototype;
        e.onCreate = function() {
            var t = this;
            this.runtime.isDomFree || (jQuery(document).keydown(function(e) {
                t.onKeyDown(e)
            }), jQuery(document).keyup(function(e) {
                t.onKeyUp(e)
            }))
        };
        var i = [32, 33, 34, 35, 36, 37, 38, 39, 40, 44];

        function r() {}

        function n() {}
        e.onKeyDown = function(t) {
            var e = !1;
            if (window != window.top && i.indexOf(t.which) > -1 && (t.preventDefault(), e = !0, t.stopPropagation()), this.keyMap[t.which]) this.usedKeys[t.which] && !e && t.preventDefault();
            else {
                this.keyMap[t.which] = !0, this.triggerKey = t.which, this.runtime.isInUserInputEvent = !0, this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnAnyKey, this);
                var r = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKey, this),
                    n = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKeyCode, this);
                this.runtime.isInUserInputEvent = !1, (r || n) && (this.usedKeys[t.which] = !0, e || t.preventDefault())
            }
        }, e.onKeyUp = function(t) {
            this.keyMap[t.which] = !1, this.triggerKey = t.which, this.runtime.isInUserInputEvent = !0, this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnAnyKeyReleased, this);
            var e = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKeyReleased, this),
                i = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKeyCodeReleased, this);
            this.runtime.isInUserInputEvent = !1, (e || i || this.usedKeys[t.which]) && (this.usedKeys[t.which] = !0, t.preventDefault())
        }, e.onWindowBlur = function() {
            var t;
            for (t = 0; t < 256; ++t)
                if (this.keyMap[t]) {
                    this.keyMap[t] = !1, this.triggerKey = t, this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnAnyKeyReleased, this);
                    var e = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKeyReleased, this),
                        i = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKeyCodeReleased, this);
                    (e || i) && (this.usedKeys[t] = !0)
                }
        }, e.saveToJSON = function() {
            return {
                triggerKey: this.triggerKey
            }
        }, e.loadFromJSON = function(t) {
            this.triggerKey = t.triggerKey
        }, r.prototype.IsKeyDown = function(t) {
            return this.keyMap[t]
        }, r.prototype.OnKey = function(t) {
            return t === this.triggerKey
        }, r.prototype.OnAnyKey = function(t) {
            return !0
        }, r.prototype.OnAnyKeyReleased = function(t) {
            return !0
        }, r.prototype.OnKeyReleased = function(t) {
            return t === this.triggerKey
        }, r.prototype.IsKeyCodeDown = function(t) {
            return !((t = Math.floor(t)) < 0 || t >= this.keyMap.length) && this.keyMap[t]
        }, r.prototype.OnKeyCode = function(t) {
            return t === this.triggerKey
        }, r.prototype.OnKeyCodeReleased = function(t) {
            return t === this.triggerKey
        }, t.cnds = new r, t.acts = new function() {}, n.prototype.LastKeyCode = function(t) {
            t.set_int(this.triggerKey)
        }, n.prototype.StringFromKeyCode = function(t, e) {
            t.set_string(function(t) {
                switch (t = Math.floor(t)) {
                    case 8:
                        return "backspace";
                    case 9:
                        return "tab";
                    case 13:
                        return "enter";
                    case 16:
                        return "shift";
                    case 17:
                        return "control";
                    case 18:
                        return "alt";
                    case 19:
                        return "pause";
                    case 20:
                        return "capslock";
                    case 27:
                        return "esc";
                    case 33:
                        return "pageup";
                    case 34:
                        return "pagedown";
                    case 35:
                        return "end";
                    case 36:
                        return "home";
                    case 37:
                        return "←";
                    case 38:
                        return "↑";
                    case 39:
                        return "→";
                    case 40:
                        return "↓";
                    case 45:
                        return "insert";
                    case 46:
                        return "del";
                    case 91:
                        return "left window key";
                    case 92:
                        return "right window key";
                    case 93:
                        return "select";
                    case 96:
                        return "numpad 0";
                    case 97:
                        return "numpad 1";
                    case 98:
                        return "numpad 2";
                    case 99:
                        return "numpad 3";
                    case 100:
                        return "numpad 4";
                    case 101:
                        return "numpad 5";
                    case 102:
                        return "numpad 6";
                    case 103:
                        return "numpad 7";
                    case 104:
                        return "numpad 8";
                    case 105:
                        return "numpad 9";
                    case 106:
                        return "numpad *";
                    case 107:
                        return "numpad +";
                    case 109:
                        return "numpad -";
                    case 110:
                        return "numpad .";
                    case 111:
                        return "numpad /";
                    case 112:
                        return "F1";
                    case 113:
                        return "F2";
                    case 114:
                        return "F3";
                    case 115:
                        return "F4";
                    case 116:
                        return "F5";
                    case 117:
                        return "F6";
                    case 118:
                        return "F7";
                    case 119:
                        return "F8";
                    case 120:
                        return "F9";
                    case 121:
                        return "F10";
                    case 122:
                        return "F11";
                    case 123:
                        return "F12";
                    case 144:
                        return "numlock";
                    case 145:
                        return "scroll lock";
                    case 186:
                        return ";";
                    case 187:
                        return "=";
                    case 188:
                        return ",";
                    case 189:
                        return "-";
                    case 190:
                        return ".";
                    case 191:
                        return "/";
                    case 192:
                        return "'";
                    case 219:
                        return "[";
                    case 220:
                        return "\\";
                    case 221:
                        return "]";
                    case 222:
                        return "#";
                    case 223:
                        return "`";
                    default:
                        return String.fromCharCode(t)
                }
            }(e))
        }, t.exps = new n
    }();
var localForageInitFailed = !1;
try {
    ! function() {
        var t, e, i, r, n;
        r = {}, n = {}, t = function(t, e, i) {
            r[t] = {
                deps: e,
                callback: i
            }
        }, i = e = function(t) {
            function s(e) {
                if ("." !== e.charAt(0)) return e;
                for (var i = e.split("/"), r = t.split("/").slice(0, -1), n = 0, s = i.length; s > n; n++) {
                    var a = i[n];
                    if (".." === a) r.pop();
                    else {
                        if ("." === a) continue;
                        r.push(a)
                    }
                }
                return r.join("/")
            }
            if (i._eak_seen = r, n[t]) return n[t];
            if (n[t] = {}, !r[t]) throw new Error("Could not find module " + t);
            for (var a, o = r[t], h = o.deps, c = o.callback, l = [], u = 0, p = h.length; p > u; u++) "exports" === h[u] ? l.push(a = {}) : l.push(e(s(h[u])));
            var d = c.apply(this, l);
            return n[t] = a || d
        }, t("promise/all", ["./utils", "exports"], function(t, e) {
            "use strict";
            var i = t.isArray,
                r = t.isFunction;
            e.all = function(t) {
                if (!i(t)) throw new TypeError("You must pass an array to all.");
                return new this(function(e, i) {
                    function n(t) {
                        return function(e) {
                            s(t, e)
                        }
                    }

                    function s(t, i) {
                        o[t] = i, 0 == --h && e(o)
                    }
                    var a, o = [],
                        h = t.length;
                    0 === h && e([]);
                    for (var c = 0; c < t.length; c++)(a = t[c]) && r(a.then) ? a.then(n(c), i) : s(c, a)
                })
            }
        }), t("promise/asap", ["exports"], function(t) {
            "use strict";

            function e() {
                for (var t = 0; t < a.length; t++) {
                    var e = a[t];
                    (0, e[0])(e[1])
                }
                a = []
            }
            var i, r = "undefined" != typeof window ? window : {},
                n = r.MutationObserver || r.WebKitMutationObserver,
                s = "undefined" != typeof global ? global : void 0 === this ? window : this,
                a = [];
            i = "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? function() {
                process.nextTick(e)
            } : n ? function() {
                var t = 0,
                    i = new n(e),
                    r = document.createTextNode("");
                return i.observe(r, {
                        characterData: !0
                    }),
                    function() {
                        r.data = t = ++t % 2
                    }
            }() : function() {
                s.setTimeout(e, 1)
            }, t.asap = function(t, e) {
                1 === a.push([t, e]) && i()
            }
        }), t("promise/config", ["exports"], function(t) {
            "use strict";
            var e = {
                instrument: !1
            };
            t.config = e, t.configure = function(t, i) {
                return 2 !== arguments.length ? e[t] : void(e[t] = i)
            }
        }), t("promise/polyfill", ["./promise", "./utils", "exports"], function(t, e, i) {
            "use strict";
            var r = t.Promise,
                n = e.isFunction;
            i.polyfill = function() {
                var t;
                "Promise" in (t = "undefined" != typeof global ? global : "undefined" != typeof window && window.document ? window : self) && "resolve" in t.Promise && "reject" in t.Promise && "all" in t.Promise && "race" in t.Promise && function() {
                    var e;
                    return new t.Promise(function(t) {
                        e = t
                    }), n(e)
                }() || (t.Promise = r)
            }
        }), t("promise/promise", ["./config", "./utils", "./all", "./race", "./resolve", "./reject", "./asap", "exports"], function(t, e, i, r, n, s, a, o) {
            "use strict";

            function h(t) {
                if (!v(t)) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                if (!(this instanceof h)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                this._subscribers = [],
                    function(t, e) {
                        function i(t) {
                            f(e, t)
                        }
                        try {
                            t(function(t) {
                                p(e, t)
                            }, i)
                        } catch (t) {
                            i(t)
                        }
                    }(t, this)
            }

            function c(t, e, i, r) {
                var n, s, a, o, h = v(i);
                if (h) try {
                    n = i(r), a = !0
                } catch (t) {
                    o = !0, s = t
                } else n = r, a = !0;
                u(e, n) || (h && a ? p(e, n) : o ? f(e, s) : t === A ? p(e, n) : t === k && f(e, n))
            }

            function l(t, e) {
                for (var i = t._subscribers, r = t._detail, n = 0; n < i.length; n += 3) c(e, i[n], i[n + e], r);
                t._subscribers = null
            }

            function u(t, e) {
                var i, r = null;
                try {
                    if (t === e) throw new TypeError("A promises callback cannot return that same promise.");
                    if (_(e) && (r = e.then, v(r))) return r.call(e, function(r) {
                        return !!i || (i = !0, void(e !== r ? p(t, r) : d(t, r)))
                    }, function(e) {
                        return !!i || (i = !0, void f(t, e))
                    }), !0
                } catch (e) {
                    return !!i || (f(t, e), !0)
                }
                return !1
            }

            function p(t, e) {
                t === e ? d(t, e) : u(t, e) || d(t, e)
            }

            function d(t, e) {
                t._state === O && (t._state = C, t._detail = e, m.async(g, t))
            }

            function f(t, e) {
                t._state === O && (t._state = C, t._detail = e, m.async(y, t))
            }

            function g(t) {
                l(t, t._state = A)
            }

            function y(t) {
                l(t, t._state = k)
            }
            var m = t.config,
                _ = (t.configure, e.objectOrFunction),
                v = e.isFunction,
                b = (e.now, i.all),
                w = r.race,
                x = n.resolve,
                S = s.reject,
                T = a.asap;
            m.async = T;
            var O = void 0,
                C = 0,
                A = 1,
                k = 2;
            h.prototype = {
                constructor: h,
                _state: void 0,
                _detail: void 0,
                _subscribers: void 0,
                then: function(t, e) {
                    var i = this,
                        r = new this.constructor(function() {});
                    if (this._state) {
                        var n = arguments;
                        m.async(function() {
                            c(i._state, r, n[i._state - 1], i._detail)
                        })
                    } else ! function(t, e, i, r) {
                        var n = t._subscribers,
                            s = n.length;
                        n[s] = e, n[s + A] = i, n[s + k] = r
                    }(this, r, t, e);
                    return r
                },
                catch: function(t) {
                    return this.then(null, t)
                }
            }, h.all = b, h.race = w, h.resolve = x, h.reject = S, o.Promise = h
        }), t("promise/race", ["./utils", "exports"], function(t, e) {
            "use strict";
            var i = t.isArray;
            e.race = function(t) {
                if (!i(t)) throw new TypeError("You must pass an array to race.");
                return new this(function(e, i) {
                    for (var r, n = 0; n < t.length; n++)(r = t[n]) && "function" == typeof r.then ? r.then(e, i) : e(r)
                })
            }
        }), t("promise/reject", ["exports"], function(t) {
            "use strict";
            t.reject = function(t) {
                return new this(function(e, i) {
                    i(t)
                })
            }
        }), t("promise/resolve", ["exports"], function(t) {
            "use strict";
            t.resolve = function(t) {
                return t && "object" == typeof t && t.constructor === this ? t : new this(function(e) {
                    e(t)
                })
            }
        }), t("promise/utils", ["exports"], function(t) {
            "use strict";

            function e(t) {
                return "function" == typeof t
            }
            var i = Date.now || function() {
                return (new Date).getTime()
            };
            t.objectOrFunction = function(t) {
                return e(t) || "object" == typeof t && null !== t
            }, t.isFunction = e, t.isArray = function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }, t.now = i
        }), e("promise/polyfill").polyfill()
    }(),
    function(t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.localforage = e() : t.localforage = e()
    }(this, function() {
        return function(t) {
            function e(r) {
                if (i[r]) return i[r].exports;
                var n = i[r] = {
                    exports: {},
                    id: r,
                    loaded: !1
                };
                return t[r].call(n.exports, n, n.exports, e), n.loaded = !0, n.exports
            }
            var i = {};
            return e.m = t, e.c = i, e.p = "", e(0)
        }([function(t, e, i) {
            "use strict";
            e.__esModule = !0;
            var r = function(t) {
                function e(t, e) {
                    t[e] = function() {
                        var i = arguments;
                        return t.ready().then(function() {
                            return t[e].apply(t, i)
                        })
                    }
                }

                function r() {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        if (e)
                            for (var i in e) e.hasOwnProperty(i) && (l(e[i]) ? arguments[0][i] = e[i].slice() : arguments[0][i] = e[i])
                    }
                    return arguments[0]
                }

                function n(t) {
                    for (var e in a)
                        if (a.hasOwnProperty(e) && a[e] === t) return !0;
                    return !1
                }
                var s = {},
                    a = {
                        INDEXEDDB: "asyncStorage",
                        LOCALSTORAGE: "localStorageWrapper",
                        WEBSQL: "webSQLStorage"
                    },
                    o = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"],
                    h = {
                        description: "",
                        driver: [a.INDEXEDDB, a.WEBSQL, a.LOCALSTORAGE].slice(),
                        name: "localforage",
                        size: 4980736,
                        storeName: "keyvaluepairs",
                        version: 1
                    },
                    c = function(t) {
                        var e = {};
                        return e[a.INDEXEDDB] = !! function() {
                            try {
                                var e = e || t.indexedDB || t.webkitIndexedDB || t.mozIndexedDB || t.OIndexedDB || t.msIndexedDB;
                                return !(void 0 !== t.openDatabase && t.navigator && t.navigator.userAgent && /Safari/.test(t.navigator.userAgent) && !/Chrome/.test(t.navigator.userAgent)) && (e && "function" == typeof e.open && void 0 !== t.IDBKeyRange)
                            } catch (t) {
                                return !1
                            }
                        }(), e[a.WEBSQL] = !! function() {
                            try {
                                return t.openDatabase
                            } catch (t) {
                                return !1
                            }
                        }(), e[a.LOCALSTORAGE] = !! function() {
                            try {
                                return t.localStorage && "setItem" in t.localStorage && t.localStorage.setItem
                            } catch (t) {
                                return !1
                            }
                        }(), e
                    }(t),
                    l = Array.isArray || function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    };
                return new(function() {
                    function t(e) {
                        (function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        })(this, t), this.INDEXEDDB = a.INDEXEDDB, this.LOCALSTORAGE = a.LOCALSTORAGE, this.WEBSQL = a.WEBSQL, this._defaultConfig = r({}, h), this._config = r({}, this._defaultConfig, e), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver)
                    }
                    return t.prototype.config = function(t) {
                        if ("object" == typeof t) {
                            if (this._ready) return new Error("Can't call config() after localforage has been used.");
                            for (var e in t) "storeName" === e && (t[e] = t[e].replace(/\W/g, "_")), this._config[e] = t[e];
                            return "driver" in t && t.driver && this.setDriver(this._config.driver), !0
                        }
                        return "string" == typeof t ? this._config[t] : this._config
                    }, t.prototype.defineDriver = function(t, e, i) {
                        var r = new Promise(function(e, i) {
                            try {
                                var r = t._driver,
                                    a = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"),
                                    h = new Error("Custom driver name already in use: " + t._driver);
                                if (!t._driver) return void i(a);
                                if (n(t._driver)) return void i(h);
                                for (var l = o.concat("_initStorage"), u = 0; u < l.length; u++) {
                                    var p = l[u];
                                    if (!p || !t[p] || "function" != typeof t[p]) return void i(a)
                                }
                                var d = Promise.resolve(!0);
                                "_support" in t && (d = t._support && "function" == typeof t._support ? t._support() : Promise.resolve(!!t._support)), d.then(function(i) {
                                    c[r] = i, s[r] = t, e()
                                }, i)
                            } catch (t) {
                                i(t)
                            }
                        });
                        return r.then(e, i), r
                    }, t.prototype.driver = function() {
                        return this._driver || null
                    }, t.prototype.getDriver = function(t, e, r) {
                        var a = this,
                            o = function() {
                                if (n(t)) switch (t) {
                                    case a.INDEXEDDB:
                                        return new Promise(function(t, e) {
                                            t(i(1))
                                        });
                                    case a.LOCALSTORAGE:
                                        return new Promise(function(t, e) {
                                            t(i(2))
                                        });
                                    case a.WEBSQL:
                                        return new Promise(function(t, e) {
                                            t(i(4))
                                        })
                                } else if (s[t]) return Promise.resolve(s[t]);
                                return Promise.reject(new Error("Driver not found."))
                            }();
                        return o.then(e, r), o
                    }, t.prototype.getSerializer = function(t) {
                        var e = new Promise(function(t, e) {
                            t(i(3))
                        });
                        return t && "function" == typeof t && e.then(function(e) {
                            t(e)
                        }), e
                    }, t.prototype.ready = function(t) {
                        var e = this,
                            i = e._driverSet.then(function() {
                                return null === e._ready && (e._ready = e._initDriver()), e._ready
                            });
                        return i.then(t, t), i
                    }, t.prototype.setDriver = function(t, e, i) {
                        function r() {
                            n._config.driver = n.driver()
                        }
                        var n = this;
                        l(t) || (t = [t]);
                        var s = this._getSupportedDrivers(t),
                            a = null !== this._driverSet ? this._driverSet.catch(function() {
                                return Promise.resolve()
                            }) : Promise.resolve();
                        return this._driverSet = a.then(function() {
                            var t = s[0];
                            return n._dbInfo = null, n._ready = null, n.getDriver(t).then(function(t) {
                                n._driver = t._driver, r(), n._wrapLibraryMethodsWithReady(), n._initDriver = function(t) {
                                    return function() {
                                        var e = 0;
                                        return function i() {
                                            for (; e < t.length;) {
                                                var s = t[e];
                                                return e++, n._dbInfo = null, n._ready = null, n.getDriver(s).then(function(t) {
                                                    return n._extend(t), r(), n._ready = n._initStorage(n._config), n._ready
                                                }).catch(i)
                                            }
                                            r();
                                            var a = new Error("No available storage method found.");
                                            return n._driverSet = Promise.reject(a), n._driverSet
                                        }()
                                    }
                                }(s)
                            })
                        }).catch(function() {
                            r();
                            var t = new Error("No available storage method found.");
                            return n._driverSet = Promise.reject(t), n._driverSet
                        }), this._driverSet.then(e, i), this._driverSet
                    }, t.prototype.supports = function(t) {
                        return !!c[t]
                    }, t.prototype._extend = function(t) {
                        r(this, t)
                    }, t.prototype._getSupportedDrivers = function(t) {
                        for (var e = [], i = 0, r = t.length; r > i; i++) {
                            var n = t[i];
                            this.supports(n) && e.push(n)
                        }
                        return e
                    }, t.prototype._wrapLibraryMethodsWithReady = function() {
                        for (var t = 0; t < o.length; t++) e(this, o[t])
                    }, t.prototype.createInstance = function(e) {
                        return new t(e)
                    }, t
                }())
            }("undefined" != typeof window ? window : self);
            e.default = r, t.exports = e.default
        }, function(t, e) {
            "use strict";
            e.__esModule = !0;
            var i = function(t) {
                function e(e, i) {
                    e = e || [], i = i || {};
                    try {
                        return new Blob(e, i)
                    } catch (s) {
                        if ("TypeError" !== s.name) throw s;
                        for (var r = new(t.BlobBuilder || t.MSBlobBuilder || t.MozBlobBuilder || t.WebKitBlobBuilder), n = 0; n < e.length; n += 1) r.append(e[n]);
                        return r.getBlob(i.type)
                    }
                }

                function i(t) {
                    return new Promise(function(i, r) {
                        var n = e([""], {
                                type: "image/png"
                            }),
                            s = t.transaction([d], "readwrite");
                        s.objectStore(d).put(n, "key"), s.oncomplete = function() {
                            var e = t.transaction([d], "readwrite").objectStore(d).get("key");
                            e.onerror = r, e.onsuccess = function(t) {
                                var e = t.target.result,
                                    r = URL.createObjectURL(e);
                                (function(t) {
                                    return new Promise(function(e, i) {
                                        var r = new XMLHttpRequest;
                                        r.open("GET", t), r.withCredentials = !0, r.responseType = "arraybuffer", r.onreadystatechange = function() {
                                            return 4 === r.readyState ? 200 === r.status ? e({
                                                response: r.response,
                                                type: r.getResponseHeader("Content-Type")
                                            }) : void i({
                                                status: r.status,
                                                response: r.response
                                            }) : void 0
                                        }, r.send()
                                    })
                                })(r).then(function(t) {
                                    i(!(!t || "image/png" !== t.type))
                                }, function() {
                                    i(!1)
                                }).then(function() {
                                    URL.revokeObjectURL(r)
                                })
                            }
                        }, s.onerror = s.onabort = r
                    }).catch(function() {
                        return !1
                    })
                }

                function r(t) {
                    return "boolean" == typeof u ? Promise.resolve(u) : i(t).then(function(t) {
                        return u = t
                    })
                }

                function n(t) {
                    return e([function(t) {
                        for (var e = t.length, i = new ArrayBuffer(e), r = new Uint8Array(i), n = 0; e > n; n++) r[n] = t.charCodeAt(n);
                        return i
                    }(atob(t.data))], {
                        type: t.type
                    })
                }

                function s(t) {
                    return t && t.__local_forage_encoded_blob
                }

                function a(t) {
                    var e = this,
                        i = e._initReady().then(function() {
                            var t = p[e._dbInfo.name];
                            return t && t.dbReady ? t.dbReady : void 0
                        });
                    return i.then(t, t), i
                }

                function o(e, i) {
                    return new Promise(function(r, n) {
                        if (e.db) {
                            if (!i) return r(e.db);
                            (function(t) {
                                var e = p[t.name],
                                    i = {};
                                i.promise = new Promise(function(t) {
                                    i.resolve = t
                                }), e.deferredOperations.push(i), e.dbReady ? e.dbReady = e.dbReady.then(function() {
                                    return i.promise
                                }) : e.dbReady = i.promise
                            })(e), e.db.close()
                        }
                        var s = [e.name];
                        i && s.push(e.version);
                        var a = l.open.apply(l, s);
                        i && (a.onupgradeneeded = function(i) {
                            var r = a.result;
                            try {
                                r.createObjectStore(e.storeName), i.oldVersion <= 1 && r.createObjectStore(d)
                            } catch (r) {
                                if ("ConstraintError" !== r.name) throw r;
                                t.console.warn('The database "' + e.name + '" has been upgraded from version ' + i.oldVersion + " to version " + i.newVersion + ', but the storage "' + e.storeName + '" already exists.')
                            }
                        }), a.onerror = function() {
                            n(a.error)
                        }, a.onsuccess = function() {
                            var t;
                            r(a.result), (t = p[e.name].deferredOperations.pop()) && t.resolve()
                        }
                    })
                }

                function h(e, i) {
                    if (!e.db) return !0;
                    var r = !e.db.objectStoreNames.contains(e.storeName),
                        n = e.version < e.db.version,
                        s = e.version > e.db.version;
                    if (n && (e.version !== i && t.console.warn('The database "' + e.name + "\" can't be downgraded from version " + e.db.version + " to version " + e.version + "."), e.version = e.db.version), s || r) {
                        if (r) {
                            var a = e.db.version + 1;
                            a > e.version && (e.version = a)
                        }
                        return !0
                    }
                    return !1
                }

                function c(t, e) {
                    e && t.then(function(t) {
                        e(null, t)
                    }, function(t) {
                        e(t)
                    })
                }
                var l = l || t.indexedDB || t.webkitIndexedDB || t.mozIndexedDB || t.OIndexedDB || t.msIndexedDB;
                if (l) {
                    var u, p, d = "local-forage-detect-blob-support";
                    return {
                        _driver: "asyncStorage",
                        _initStorage: function(t) {
                            function e() {
                                return Promise.resolve()
                            }
                            var i = this,
                                r = {
                                    db: null
                                };
                            if (t)
                                for (var n in t) r[n] = t[n];
                            p || (p = {});
                            var s = p[r.name];
                            s || (s = {
                                forages: [],
                                db: null,
                                dbReady: null,
                                deferredOperations: []
                            }, p[r.name] = s), s.forages.push(i), i._initReady || (i._initReady = i.ready, i.ready = a);
                            for (var c = [], l = 0; l < s.forages.length; l++) {
                                var u = s.forages[l];
                                u !== i && c.push(u._initReady().catch(e))
                            }
                            var d = s.forages.slice(0);
                            return Promise.all(c).then(function() {
                                return r.db = s.db, o(r, !1)
                            }).then(function(t) {
                                return r.db = t, h(r, i._defaultConfig.version) ? function(t) {
                                    return o(t, !0)
                                }(r) : t
                            }).then(function(t) {
                                r.db = s.db = t, i._dbInfo = r;
                                for (var e = 0; e < d.length; e++) {
                                    var n = d[e];
                                    n !== i && (n._dbInfo.db = r.db, n._dbInfo.version = r.version)
                                }
                            })
                        },
                        iterate: function(t, e) {
                            var i = this,
                                r = new Promise(function(e, r) {
                                    i.ready().then(function() {
                                        var a = i._dbInfo,
                                            o = a.db.transaction(a.storeName, "readonly").objectStore(a.storeName).openCursor(),
                                            h = 1;
                                        o.onsuccess = function() {
                                            var i = o.result;
                                            if (i) {
                                                var r = i.value;
                                                s(r) && (r = n(r));
                                                var a = t(r, i.key, h++);
                                                void 0 !== a ? e(a) : i.continue()
                                            } else e()
                                        }, o.onerror = function() {
                                            r(o.error)
                                        }
                                    }).catch(r)
                                });
                            return c(r, e), r
                        },
                        getItem: function(e, i) {
                            var r = this;
                            "string" != typeof e && (t.console.warn(e + " used as a key, but it is not a string."), e = String(e));
                            var a = new Promise(function(t, i) {
                                r.ready().then(function() {
                                    var a = r._dbInfo,
                                        o = a.db.transaction(a.storeName, "readonly").objectStore(a.storeName).get(e);
                                    o.onsuccess = function() {
                                        var e = o.result;
                                        void 0 === e && (e = null), s(e) && (e = n(e)), t(e)
                                    }, o.onerror = function() {
                                        i(o.error)
                                    }
                                }).catch(i)
                            });
                            return c(a, i), a
                        },
                        setItem: function(e, i, n) {
                            var s = this;
                            "string" != typeof e && (t.console.warn(e + " used as a key, but it is not a string."), e = String(e));
                            var a = new Promise(function(t, n) {
                                var a;
                                s.ready().then(function() {
                                    return a = s._dbInfo, i instanceof Blob ? r(a.db).then(function(t) {
                                        return t ? i : function(t) {
                                            return new Promise(function(e, i) {
                                                var r = new FileReader;
                                                r.onerror = i, r.onloadend = function(i) {
                                                    var r = btoa(i.target.result || "");
                                                    e({
                                                        __local_forage_encoded_blob: !0,
                                                        data: r,
                                                        type: t.type
                                                    })
                                                }, r.readAsBinaryString(t)
                                            })
                                        }(i)
                                    }) : i
                                }).then(function(i) {
                                    var r = a.db.transaction(a.storeName, "readwrite"),
                                        s = r.objectStore(a.storeName);
                                    null === i && (i = void 0), r.oncomplete = function() {
                                        void 0 === i && (i = null), t(i)
                                    }, r.onabort = r.onerror = function() {
                                        var t = o.error ? o.error : o.transaction.error;
                                        n(t)
                                    };
                                    var o = s.put(i, e)
                                }).catch(n)
                            });
                            return c(a, n), a
                        },
                        removeItem: function(e, i) {
                            var r = this;
                            "string" != typeof e && (t.console.warn(e + " used as a key, but it is not a string."), e = String(e));
                            var n = new Promise(function(t, i) {
                                r.ready().then(function() {
                                    var n = r._dbInfo,
                                        s = n.db.transaction(n.storeName, "readwrite"),
                                        a = s.objectStore(n.storeName).delete(e);
                                    s.oncomplete = function() {
                                        t()
                                    }, s.onerror = function() {
                                        i(a.error)
                                    }, s.onabort = function() {
                                        var t = a.error ? a.error : a.transaction.error;
                                        i(t)
                                    }
                                }).catch(i)
                            });
                            return c(n, i), n
                        },
                        clear: function(t) {
                            var e = this,
                                i = new Promise(function(t, i) {
                                    e.ready().then(function() {
                                        var r = e._dbInfo,
                                            n = r.db.transaction(r.storeName, "readwrite"),
                                            s = n.objectStore(r.storeName).clear();
                                        n.oncomplete = function() {
                                            t()
                                        }, n.onabort = n.onerror = function() {
                                            var t = s.error ? s.error : s.transaction.error;
                                            i(t)
                                        }
                                    }).catch(i)
                                });
                            return c(i, t), i
                        },
                        length: function(t) {
                            var e = this,
                                i = new Promise(function(t, i) {
                                    e.ready().then(function() {
                                        var r = e._dbInfo,
                                            n = r.db.transaction(r.storeName, "readonly").objectStore(r.storeName).count();
                                        n.onsuccess = function() {
                                            t(n.result)
                                        }, n.onerror = function() {
                                            i(n.error)
                                        }
                                    }).catch(i)
                                });
                            return c(i, t), i
                        },
                        key: function(t, e) {
                            var i = this,
                                r = new Promise(function(e, r) {
                                    return 0 > t ? void e(null) : void i.ready().then(function() {
                                        var n = i._dbInfo,
                                            s = !1,
                                            a = n.db.transaction(n.storeName, "readonly").objectStore(n.storeName).openCursor();
                                        a.onsuccess = function() {
                                            var i = a.result;
                                            return i ? void(0 === t ? e(i.key) : s ? e(i.key) : (s = !0, i.advance(t))) : void e(null)
                                        }, a.onerror = function() {
                                            r(a.error)
                                        }
                                    }).catch(r)
                                });
                            return c(r, e), r
                        },
                        keys: function(t) {
                            var e = this,
                                i = new Promise(function(t, i) {
                                    e.ready().then(function() {
                                        var r = e._dbInfo,
                                            n = r.db.transaction(r.storeName, "readonly").objectStore(r.storeName).openCursor(),
                                            s = [];
                                        n.onsuccess = function() {
                                            var e = n.result;
                                            return e ? (s.push(e.key), void e.continue()) : void t(s)
                                        }, n.onerror = function() {
                                            i(n.error)
                                        }
                                    }).catch(i)
                                });
                            return c(i, t), i
                        }
                    }
                }
            }("undefined" != typeof window ? window : self);
            e.default = i, t.exports = e.default
        }, function(t, e, i) {
            "use strict";
            e.__esModule = !0;
            var r = function(t) {
                function e(t, e) {
                    e && t.then(function(t) {
                        e(null, t)
                    }, function(t) {
                        e(t)
                    })
                }
                var r = null;
                try {
                    if (!(t.localStorage && "setItem" in t.localStorage)) return;
                    r = t.localStorage
                } catch (t) {
                    return
                }
                return {
                    _driver: "localStorageWrapper",
                    _initStorage: function(t) {
                        var e = {};
                        if (t)
                            for (var r in t) e[r] = t[r];
                        return e.keyPrefix = e.name + "/", e.storeName !== this._defaultConfig.storeName && (e.keyPrefix += e.storeName + "/"), this._dbInfo = e, new Promise(function(t, e) {
                            t(i(3))
                        }).then(function(t) {
                            return e.serializer = t, Promise.resolve()
                        })
                    },
                    iterate: function(t, i) {
                        var n = this,
                            s = n.ready().then(function() {
                                for (var e = n._dbInfo, i = e.keyPrefix, s = i.length, a = r.length, o = 1, h = 0; a > h; h++) {
                                    var c = r.key(h);
                                    if (0 === c.indexOf(i)) {
                                        var l = r.getItem(c);
                                        if (l && (l = e.serializer.deserialize(l)), void 0 !== (l = t(l, c.substring(s), o++))) return l
                                    }
                                }
                            });
                        return e(s, i), s
                    },
                    getItem: function(i, n) {
                        var s = this;
                        "string" != typeof i && (t.console.warn(i + " used as a key, but it is not a string."), i = String(i));
                        var a = s.ready().then(function() {
                            var t = s._dbInfo,
                                e = r.getItem(t.keyPrefix + i);
                            return e && (e = t.serializer.deserialize(e)), e
                        });
                        return e(a, n), a
                    },
                    setItem: function(i, n, s) {
                        var a = this;
                        "string" != typeof i && (t.console.warn(i + " used as a key, but it is not a string."), i = String(i));
                        var o = a.ready().then(function() {
                            void 0 === n && (n = null);
                            var t = n;
                            return new Promise(function(e, s) {
                                var o = a._dbInfo;
                                o.serializer.serialize(n, function(n, a) {
                                    if (a) s(a);
                                    else try {
                                        r.setItem(o.keyPrefix + i, n), e(t)
                                    } catch (t) {
                                        ("QuotaExceededError" === t.name || "NS_ERROR_DOM_QUOTA_REACHED" === t.name) && s(t), s(t)
                                    }
                                })
                            })
                        });
                        return e(o, s), o
                    },
                    removeItem: function(i, n) {
                        var s = this;
                        "string" != typeof i && (t.console.warn(i + " used as a key, but it is not a string."), i = String(i));
                        var a = s.ready().then(function() {
                            var t = s._dbInfo;
                            r.removeItem(t.keyPrefix + i)
                        });
                        return e(a, n), a
                    },
                    clear: function(t) {
                        var i = this,
                            n = i.ready().then(function() {
                                for (var t = i._dbInfo.keyPrefix, e = r.length - 1; e >= 0; e--) {
                                    var n = r.key(e);
                                    0 === n.indexOf(t) && r.removeItem(n)
                                }
                            });
                        return e(n, t), n
                    },
                    length: function(t) {
                        var i = this.keys().then(function(t) {
                            return t.length
                        });
                        return e(i, t), i
                    },
                    key: function(t, i) {
                        var n = this,
                            s = n.ready().then(function() {
                                var e, i = n._dbInfo;
                                try {
                                    e = r.key(t)
                                } catch (t) {
                                    e = null
                                }
                                return e && (e = e.substring(i.keyPrefix.length)), e
                            });
                        return e(s, i), s
                    },
                    keys: function(t) {
                        var i = this,
                            n = i.ready().then(function() {
                                for (var t = i._dbInfo, e = r.length, n = [], s = 0; e > s; s++) 0 === r.key(s).indexOf(t.keyPrefix) && n.push(r.key(s).substring(t.keyPrefix.length));
                                return n
                            });
                        return e(n, t), n
                    }
                }
            }("undefined" != typeof window ? window : self);
            e.default = r, t.exports = e.default
        }, function(t, e) {
            "use strict";
            e.__esModule = !0;
            var i = function(t) {
                function e(e, i) {
                    e = e || [], i = i || {};
                    try {
                        return new Blob(e, i)
                    } catch (s) {
                        if ("TypeError" !== s.name) throw s;
                        for (var r = new(t.BlobBuilder || t.MSBlobBuilder || t.MozBlobBuilder || t.WebKitBlobBuilder), n = 0; n < e.length; n += 1) r.append(e[n]);
                        return r.getBlob(i.type)
                    }
                }

                function i(t) {
                    var e, i, r, s, a, o = .75 * t.length,
                        h = t.length,
                        c = 0;
                    "=" === t[t.length - 1] && (o--, "=" === t[t.length - 2] && o--);
                    var l = new ArrayBuffer(o),
                        u = new Uint8Array(l);
                    for (e = 0; h > e; e += 4) i = n.indexOf(t[e]), r = n.indexOf(t[e + 1]), s = n.indexOf(t[e + 2]), a = n.indexOf(t[e + 3]), u[c++] = i << 2 | r >> 4, u[c++] = (15 & r) << 4 | s >> 2, u[c++] = (3 & s) << 6 | 63 & a;
                    return l
                }

                function r(t) {
                    var e, i = new Uint8Array(t),
                        r = "";
                    for (e = 0; e < i.length; e += 3) r += n[i[e] >> 2], r += n[(3 & i[e]) << 4 | i[e + 1] >> 4], r += n[(15 & i[e + 1]) << 2 | i[e + 2] >> 6], r += n[63 & i[e + 2]];
                    return i.length % 3 == 2 ? r = r.substring(0, r.length - 1) + "=" : i.length % 3 == 1 && (r = r.substring(0, r.length - 2) + "=="), r
                }
                var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    s = "~~local_forage_type~",
                    a = /^~~local_forage_type~([^~]+)~/,
                    o = "__lfsc__:",
                    h = o.length,
                    c = "arbf",
                    l = "blob",
                    u = "si08",
                    p = "ui08",
                    d = "uic8",
                    f = "si16",
                    g = "si32",
                    y = "ur16",
                    m = "ui32",
                    _ = "fl32",
                    v = "fl64",
                    b = h + c.length;
                return {
                    serialize: function(t, e) {
                        var i = "";
                        if (t && (i = t.toString()), t && ("[object ArrayBuffer]" === t.toString() || t.buffer && "[object ArrayBuffer]" === t.buffer.toString())) {
                            var n, a = o;
                            t instanceof ArrayBuffer ? (n = t, a += c) : (n = t.buffer, "[object Int8Array]" === i ? a += u : "[object Uint8Array]" === i ? a += p : "[object Uint8ClampedArray]" === i ? a += d : "[object Int16Array]" === i ? a += f : "[object Uint16Array]" === i ? a += y : "[object Int32Array]" === i ? a += g : "[object Uint32Array]" === i ? a += m : "[object Float32Array]" === i ? a += _ : "[object Float64Array]" === i ? a += v : e(new Error("Failed to get type for BinaryArray"))), e(a + r(n))
                        } else if ("[object Blob]" === i) {
                            var h = new FileReader;
                            h.onload = function() {
                                var i = s + t.type + "~" + r(this.result);
                                e(o + l + i)
                            }, h.readAsArrayBuffer(t)
                        } else try {
                            e(JSON.stringify(t))
                        } catch (i) {
                            console.error("Couldn't convert value into a JSON string: ", t), e(null, i)
                        }
                    },
                    deserialize: function(t) {
                        if (t.substring(0, h) !== o) return JSON.parse(t);
                        var r, n = t.substring(b),
                            s = t.substring(h, b);
                        if (s === l && a.test(n)) {
                            var w = n.match(a);
                            r = w[1], n = n.substring(w[0].length)
                        }
                        var x = i(n);
                        switch (s) {
                            case c:
                                return x;
                            case l:
                                return e([x], {
                                    type: r
                                });
                            case u:
                                return new Int8Array(x);
                            case p:
                                return new Uint8Array(x);
                            case d:
                                return new Uint8ClampedArray(x);
                            case f:
                                return new Int16Array(x);
                            case y:
                                return new Uint16Array(x);
                            case g:
                                return new Int32Array(x);
                            case m:
                                return new Uint32Array(x);
                            case _:
                                return new Float32Array(x);
                            case v:
                                return new Float64Array(x);
                            default:
                                throw new Error("Unkown type: " + s)
                        }
                    },
                    stringToBuffer: i,
                    bufferToString: r
                }
            }("undefined" != typeof window ? window : self);
            e.default = i, t.exports = e.default
        }, function(t, e, i) {
            "use strict";
            e.__esModule = !0;
            var r = function(t) {
                function e(t, e) {
                    e && t.then(function(t) {
                        e(null, t)
                    }, function(t) {
                        e(t)
                    })
                }
                var r = t.openDatabase;
                if (r) return {
                    _driver: "webSQLStorage",
                    _initStorage: function(t) {
                        var e = this,
                            n = {
                                db: null
                            };
                        if (t)
                            for (var s in t) n[s] = "string" != typeof t[s] ? t[s].toString() : t[s];
                        var a = new Promise(function(t, i) {
                            try {
                                n.db = r(n.name, String(n.version), n.description, n.size)
                            } catch (t) {
                                return i(t)
                            }
                            n.db.transaction(function(r) {
                                r.executeSql("CREATE TABLE IF NOT EXISTS " + n.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], function() {
                                    e._dbInfo = n, t()
                                }, function(t, e) {
                                    i(e)
                                })
                            })
                        });
                        return new Promise(function(t, e) {
                            t(i(3))
                        }).then(function(t) {
                            return n.serializer = t, a
                        })
                    },
                    iterate: function(t, i) {
                        var r = this,
                            n = new Promise(function(e, i) {
                                r.ready().then(function() {
                                    var n = r._dbInfo;
                                    n.db.transaction(function(r) {
                                        r.executeSql("SELECT * FROM " + n.storeName, [], function(i, r) {
                                            for (var s = r.rows, a = s.length, o = 0; a > o; o++) {
                                                var h = s.item(o),
                                                    c = h.value;
                                                if (c && (c = n.serializer.deserialize(c)), void 0 !== (c = t(c, h.key, o + 1))) return void e(c)
                                            }
                                            e()
                                        }, function(t, e) {
                                            i(e)
                                        })
                                    })
                                }).catch(i)
                            });
                        return e(n, i), n
                    },
                    getItem: function(i, r) {
                        var n = this;
                        "string" != typeof i && (t.console.warn(i + " used as a key, but it is not a string."), i = String(i));
                        var s = new Promise(function(t, e) {
                            n.ready().then(function() {
                                var r = n._dbInfo;
                                r.db.transaction(function(n) {
                                    n.executeSql("SELECT * FROM " + r.storeName + " WHERE key = ? LIMIT 1", [i], function(e, i) {
                                        var n = i.rows.length ? i.rows.item(0).value : null;
                                        n && (n = r.serializer.deserialize(n)), t(n)
                                    }, function(t, i) {
                                        e(i)
                                    })
                                })
                            }).catch(e)
                        });
                        return e(s, r), s
                    },
                    setItem: function(i, r, n) {
                        var s = this;
                        "string" != typeof i && (t.console.warn(i + " used as a key, but it is not a string."), i = String(i));
                        var a = new Promise(function(t, e) {
                            s.ready().then(function() {
                                void 0 === r && (r = null);
                                var n = r,
                                    a = s._dbInfo;
                                a.serializer.serialize(r, function(r, s) {
                                    s ? e(s) : a.db.transaction(function(s) {
                                        s.executeSql("INSERT OR REPLACE INTO " + a.storeName + " (key, value) VALUES (?, ?)", [i, r], function() {
                                            t(n)
                                        }, function(t, i) {
                                            e(i)
                                        })
                                    }, function(t) {
                                        t.code === t.QUOTA_ERR && e(t)
                                    })
                                })
                            }).catch(e)
                        });
                        return e(a, n), a
                    },
                    removeItem: function(i, r) {
                        var n = this;
                        "string" != typeof i && (t.console.warn(i + " used as a key, but it is not a string."), i = String(i));
                        var s = new Promise(function(t, e) {
                            n.ready().then(function() {
                                var r = n._dbInfo;
                                r.db.transaction(function(n) {
                                    n.executeSql("DELETE FROM " + r.storeName + " WHERE key = ?", [i], function() {
                                        t()
                                    }, function(t, i) {
                                        e(i)
                                    })
                                })
                            }).catch(e)
                        });
                        return e(s, r), s
                    },
                    clear: function(t) {
                        var i = this,
                            r = new Promise(function(t, e) {
                                i.ready().then(function() {
                                    var r = i._dbInfo;
                                    r.db.transaction(function(i) {
                                        i.executeSql("DELETE FROM " + r.storeName, [], function() {
                                            t()
                                        }, function(t, i) {
                                            e(i)
                                        })
                                    })
                                }).catch(e)
                            });
                        return e(r, t), r
                    },
                    length: function(t) {
                        var i = this,
                            r = new Promise(function(t, e) {
                                i.ready().then(function() {
                                    var r = i._dbInfo;
                                    r.db.transaction(function(i) {
                                        i.executeSql("SELECT COUNT(key) as c FROM " + r.storeName, [], function(e, i) {
                                            var r = i.rows.item(0).c;
                                            t(r)
                                        }, function(t, i) {
                                            e(i)
                                        })
                                    })
                                }).catch(e)
                            });
                        return e(r, t), r
                    },
                    key: function(t, i) {
                        var r = this,
                            n = new Promise(function(e, i) {
                                r.ready().then(function() {
                                    var n = r._dbInfo;
                                    n.db.transaction(function(r) {
                                        r.executeSql("SELECT key FROM " + n.storeName + " WHERE id = ? LIMIT 1", [t + 1], function(t, i) {
                                            var r = i.rows.length ? i.rows.item(0).key : null;
                                            e(r)
                                        }, function(t, e) {
                                            i(e)
                                        })
                                    })
                                }).catch(i)
                            });
                        return e(n, i), n
                    },
                    keys: function(t) {
                        var i = this,
                            r = new Promise(function(t, e) {
                                i.ready().then(function() {
                                    var r = i._dbInfo;
                                    r.db.transaction(function(i) {
                                        i.executeSql("SELECT key FROM " + r.storeName, [], function(e, i) {
                                            for (var r = [], n = 0; n < i.rows.length; n++) r.push(i.rows.item(n).key);
                                            t(r)
                                        }, function(t, i) {
                                            e(i)
                                        })
                                    })
                                }).catch(e)
                            });
                        return e(r, t), r
                    }
                }
            }("undefined" != typeof window ? window : self);
            e.default = r, t.exports = e.default
        }])
    })
} catch (t) {
    localForageInitFailed = !0
}
cr.plugins_.LocalStorage = function(t) {
        this.runtime = t
    },
    function() {
        var t = "",
            e = "",
            i = [],
            r = "";

        function n(t) {
            return t ? "string" == typeof t ? t : "string" == typeof t.message ? t.message : "string" == typeof t.name ? t.name : "string" == typeof t.data ? t.data : "unknown error" : "unknown error"
        }

        function s(t, e) {
            r = e, t.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, t)
        }
        var a = window.famobi_gameID + ":",
            o = void 0 !== window.is_scirra_arcade;

        function h(t) {
            return !a || t.substr(0, a.length) === a
        }
        o && (a = "sa" + window.scirra_arcade_id + "_");
        var c = cr.plugins_.LocalStorage.prototype;
        c.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        }, c.Type.prototype.onCreate = function() {}, c.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var l = c.Instance.prototype;
        l.onCreate = function() {
            this.pendingSets = 0, this.pendingGets = 0
        }, l.onDestroy = function() {}, l.saveToJSON = function() {
            return {}
        }, l.loadFromJSON = function(t) {};

        function u() {}

        function p() {}

        function d() {}
        u.prototype.OnItemSet = function(e) {
            return t === e
        }, u.prototype.OnAnyItemSet = function() {
            return !0
        }, u.prototype.OnItemGet = function(e) {
            return t === e
        }, u.prototype.OnAnyItemGet = function() {
            return !0
        }, u.prototype.OnItemRemoved = function(e) {
            return t === e
        }, u.prototype.OnAnyItemRemoved = function() {
            return !0
        }, u.prototype.OnCleared = function() {
            return !0
        }, u.prototype.OnAllKeyNamesLoaded = function() {
            return !0
        }, u.prototype.OnError = function() {
            return !0
        }, u.prototype.OnItemExists = function(e) {
            return t === e
        }, u.prototype.OnItemMissing = function(e) {
            return t === e
        }, u.prototype.CompareKey = function(e, i) {
            return cr.do_cmp(t, e, i)
        }, u.prototype.CompareValue = function(t, i) {
            return cr.do_cmp(e, t, i)
        }, u.prototype.IsProcessingSets = function() {
            return this.pendingSets > 0
        }, u.prototype.IsProcessingGets = function() {
            return this.pendingGets > 0
        }, u.prototype.OnAllSetsComplete = function() {
            return !0
        }, u.prototype.OnAllGetsComplete = function() {
            return !0
        }, c.cnds = new u, p.prototype.SetItem = function(i, o) {
            if (localForageInitFailed) s(this, "storage failed to initialise - may be disabled in browser settings");
            else {
                var h = a + i;
                this.pendingSets++;
                var c = this;
                localforage.setItem(h, o, function(s, a) {
                    !0, c.pendingSets--, s ? (r = n(s), c.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, c)) : (t = i, e = a, c.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAnyItemSet, c), c.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemSet, c), t = "", e = ""), 0 === c.pendingSets && c.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAllSetsComplete, c)
                })
            }
        }, p.prototype.GetItem = function(i) {
            if (localForageInitFailed) s(this, "storage failed to initialise - may be disabled in browser settings");
            else {
                var o = a + i;
                this.pendingGets++;
                var h = this;
                localforage.getItem(o, function(s, a) {
                    h.pendingGets--, s ? (r = n(s), h.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, h)) : (t = i, void 0 !== (e = a) && null !== e || (e = ""), h.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAnyItemGet, h), h.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemGet, h), t = "", e = ""), 0 === h.pendingGets && h.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAllGetsComplete, h)
                })
            }
        }, p.prototype.CheckItemExists = function(i) {
            if (localForageInitFailed) s(this, "storage failed to initialise - may be disabled in browser settings");
            else {
                var o = a + i,
                    h = this;
                localforage.getItem(o, function(s, a) {
                    s ? (r = n(s), h.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, h)) : (t = i, null === a ? (e = "", h.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemMissing, h)) : (e = a, h.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemExists, h)), t = "", e = "")
                })
            }
        }, p.prototype.RemoveItem = function(i) {
            if (localForageInitFailed) s(this, "storage failed to initialise - may be disabled in browser settings");
            else {
                var o = a + i,
                    h = this;
                localforage.removeItem(o, function(s) {
                    !0, s ? (r = n(s), h.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, h)) : (t = i, e = "", h.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAnyItemRemoved, h), h.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemRemoved, h), t = "")
                })
            }
        }, p.prototype.ClearStorage = function() {
            if (localForageInitFailed) s(this, "storage failed to initialise - may be disabled in browser settings");
            else if (!o) {
                var a = this;
                localforage.clear(function(s) {
                    !0, s ? (r = n(s), a.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, a)) : (t = "", e = "", cr.clearArray(i), a.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnCleared, a))
                })
            }
        }, p.prototype.GetAllKeyNames = function() {
            if (localForageInitFailed) s(this, "storage failed to initialise - may be disabled in browser settings");
            else {
                var t = this;
                localforage.keys(function(e, s) {
                    var o, c, l, u;
                    if (e) r = n(e), t.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, t);
                    else {
                        for (cr.clearArray(i), o = 0, c = s.length; o < c; ++o) h(l = s[o]) && i.push((u = l, a ? h(u) ? u.substr(a.length) : void 0 : u));
                        t.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAllKeyNamesLoaded, t)
                    }
                })
            }
        }, c.acts = new p, d.prototype.ItemValue = function(t) {
            t.set_any(e)
        }, d.prototype.Key = function(e) {
            e.set_string(t)
        }, d.prototype.KeyCount = function(t) {
            t.set_int(i.length)
        }, d.prototype.KeyAt = function(t, e) {
            (e = Math.floor(e)) < 0 || e >= i.length ? t.set_string("") : t.set_string(i[e])
        }, d.prototype.ErrorMessage = function(t) {
            t.set_string(r)
        }, c.exps = new d
    }(), cr.plugins_.NinePatch = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.plugins_.NinePatch.prototype;
        t.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var e = t.Type.prototype;
        e.onCreate = function() {
            this.is_family || (this.texture_img = new Image, this.texture_img.cr_filesize = this.texture_filesize, this.runtime.waitForImageLoad(this.texture_img, this.texture_file), this.fillPattern = null, this.leftPattern = null, this.rightPattern = null, this.topPattern = null, this.bottomPattern = null, this.webGL_texture = null, this.webGL_fillTexture = null, this.webGL_leftTexture = null, this.webGL_rightTexture = null, this.webGL_topTexture = null, this.webGL_bottomTexture = null)
        }, e.onLostWebGLContext = function() {
            this.is_family || (this.webGL_texture = null, this.webGL_fillTexture = null, this.webGL_leftTexture = null, this.webGL_rightTexture = null, this.webGL_topTexture = null, this.webGL_bottomTexture = null)
        }, e.onRestoreWebGLContext = function() {
            !this.is_family && this.instances.length && (this.webGL_texture || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat)))
        }, e.unloadTextures = function() {
            this.is_family || this.instances.length || this.runtime.glwrap && (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.runtime.glwrap.deleteTexture(this.webGL_fillTexture), this.runtime.glwrap.deleteTexture(this.webGL_leftTexture), this.runtime.glwrap.deleteTexture(this.webGL_rightTexture), this.runtime.glwrap.deleteTexture(this.webGL_topTexture), this.runtime.glwrap.deleteTexture(this.webGL_bottomTexture), this.webGL_texture = null, this.webGL_fillTexture = null, this.webGL_leftTexture = null, this.webGL_rightTexture = null, this.webGL_topTexture = null, this.webGL_bottomTexture = null)
        }, e.slicePatch = function(t, e, i, r) {
            var n = document.createElement("canvas"),
                s = i - t,
                a = r - e;
            return n.width = s, n.height = a, n.getContext("2d").drawImage(this.texture_img, t, e, s, a, 0, 0, s, a), n
        }, e.createPatch = function(t, e, i, r) {
            var n = this.texture_img.width,
                s = this.texture_img.height,
                a = n - e,
                o = s - r;
            if (this.runtime.glwrap) {
                if (this.webGL_fillTexture) return;
                var h = this.runtime.glwrap,
                    c = this.runtime.linearSampling,
                    l = this.texture_pixelformat;
                a > t && o > i && (this.webGL_fillTexture = h.loadTexture(this.slicePatch(t, i, a, o), !0, c, l)), t > 0 && o > i && (this.webGL_leftTexture = h.loadTexture(this.slicePatch(0, i, t, o), !0, c, l, "repeat-y")), e > 0 && o > i && (this.webGL_rightTexture = h.loadTexture(this.slicePatch(a, i, n, o), !0, c, l, "repeat-y")), i > 0 && a > t && (this.webGL_topTexture = h.loadTexture(this.slicePatch(t, 0, a, i), !0, c, l, "repeat-x")), r > 0 && a > t && (this.webGL_bottomTexture = h.loadTexture(this.slicePatch(t, o, a, s), !0, c, l, "repeat-x"))
            } else {
                if (this.fillPattern) return;
                var u = this.runtime.ctx;
                a > t && o > i && (this.fillPattern = u.createPattern(this.slicePatch(t, i, a, o), "repeat")), t > 0 && o > i && (this.leftPattern = u.createPattern(this.slicePatch(0, i, t, o), "repeat")), e > 0 && o > i && (this.rightPattern = u.createPattern(this.slicePatch(a, i, n, o), "repeat")), i > 0 && a > t && (this.topPattern = u.createPattern(this.slicePatch(t, 0, a, i), "repeat")), r > 0 && a > t && (this.bottomPattern = u.createPattern(this.slicePatch(t, o, a, s), "repeat"))
            }
        }, t.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var i = t.Instance.prototype;

        function r(t, e, i, r, n, s, a, o, h, c) {
            t.save(), t.fillStyle = e;
            var l = n % i,
                u = s % r;
            l < 0 && (l += i), u < 0 && (u += r), t.translate(l + h, u + c), t.fillRect(n - l - h, s - u - c, a, o), t.restore()
        }

        function n() {}

        function s() {}
        i.onCreate = function() {
            this.leftMargin = this.properties[0], this.rightMargin = this.properties[1], this.topMargin = this.properties[2], this.bottomMargin = this.properties[3], this.edges = this.properties[4], this.fill = this.properties[5], this.visible = 0 === this.properties[6], this.seamless = 0 !== this.properties[8], this.recycled ? this.rcTex.set(0, 0, 0, 0) : this.rcTex = new cr.rect(0, 0, 0, 0), this.runtime.glwrap && (this.type.webGL_texture || (this.type.webGL_texture = this.runtime.glwrap.loadTexture(this.type.texture_img, !1, this.runtime.linearSampling, this.type.texture_pixelformat))), this.type.createPatch(this.leftMargin, this.rightMargin, this.topMargin, this.bottomMargin)
        }, i.draw = function(t) {
            var e = this.type.texture_img,
                i = this.leftMargin,
                n = this.rightMargin,
                s = this.topMargin,
                a = this.bottomMargin,
                o = e.width,
                h = e.height,
                c = o - n,
                l = h - a;
            t.globalAlpha = this.opacity, t.save();
            var u = this.x,
                p = this.y,
                d = this.width,
                f = this.height;
            this.runtime.pixel_rounding && (u = Math.round(u), p = Math.round(p));
            var g = -this.hotspotX * this.width,
                y = -this.hotspotY * this.height,
                m = g % o,
                _ = y % h;
            m < 0 && (m += o), _ < 0 && (_ += h), t.translate(u + m, p + _);
            var v = g - m,
                b = y - _,
                w = this.seamless ? 1 : 0;
            if (i > 0 && s > 0 && t.drawImage(e, 0, 0, i + w, s + w, v, b, i + w, s + w), n > 0 && s > 0 && t.drawImage(e, c - w, 0, n + w, s + w, v + d - n - w, b, n + w, s + w), n > 0 && a > 0 && t.drawImage(e, c - w, l - w, n + w, a + w, v + d - n - w, b + f - a - w, n + w, a + w), i > 0 && a > 0 && t.drawImage(e, 0, l - w, i + w, a + w, v, b + f - a - w, i + w, a + w), 0 === this.edges) {
                var x = 2 === this.fill ? 0 : w;
                i > 0 && l > s && r(t, this.type.leftPattern, i, l - s, v, b + s, i + x, f - s - a, 0, 0), n > 0 && l > s && r(t, this.type.rightPattern, n, l - s, v + d - n - x, b + s, n + x, f - s - a, x, 0), s > 0 && c > i && r(t, this.type.topPattern, c - i, s, v + i, b, d - i - n, s + x, 0, 0), a > 0 && c > i && r(t, this.type.bottomPattern, c - i, a, v + i, b + f - a - x, d - i - n, a + x, 0, x)
            } else 1 === this.edges && (i > 0 && l > s && f - s - a > 0 && t.drawImage(e, 0, s, i, l - s, v, b + s, i, f - s - a), n > 0 && l > s && f - s - a > 0 && t.drawImage(e, c, s, n, l - s, v + d - n, b + s, n, f - s - a), s > 0 && c > i && d - i - n > 0 && t.drawImage(e, i, 0, c - i, s, v + i, b, d - i - n, s), a > 0 && c > i && d - i - n > 0 && t.drawImage(e, i, l, c - i, a, v + i, b + f - a, d - i - n, a));
            l > s && c > i && (0 === this.fill ? r(t, this.type.fillPattern, c - i, l - s, v + i, b + s, d - i - n, f - s - a, 0, 0) : 1 === this.fill && d - i - n > 0 && f - s - a > 0 && t.drawImage(e, i, s, c - i, l - s, v + i, b + s, d - i - n, f - s - a)), t.restore()
        }, i.drawPatch = function(t, e, i, r, n, s, a, o, h, c) {
            t.setTexture(e);
            var l = this.rcTex;
            l.left = i / e.c2width, l.top = r / e.c2height, l.right = (i + n) / e.c2width, l.bottom = (r + s) / e.c2height, t.quadTex(a, o, a + h, o, a + h, o + c, a, o + c, l)
        }, i.tilePatch = function(t, e, i, r, n, s, a, o) {
            t.setTexture(e);
            var h = this.rcTex;
            h.left = -a / e.c2width, h.top = -o / e.c2height, h.right = (n - a) / e.c2width, h.bottom = (s - o) / e.c2height, t.quadTex(i, r, i + n, r, i + n, r + s, i, r + s, h)
        }, i.drawGL_earlyZPass = function(t) {
            this.drawGL(t)
        }, i.drawGL = function(t) {
            var e = this.leftMargin,
                i = this.rightMargin,
                r = this.topMargin,
                n = this.bottomMargin,
                s = this.type.texture_img.width - i,
                a = this.type.texture_img.height - n;
            t.setOpacity(this.opacity);
            this.rcTex;
            var o = this.bquad,
                h = o.tlx,
                c = o.tly,
                l = this.width,
                u = this.height;
            this.runtime.pixel_rounding && (h = Math.round(h), c = Math.round(c));
            var p = this.seamless ? 1 : 0;
            if (e > 0 && r > 0 && this.drawPatch(t, this.type.webGL_texture, 0, 0, e + p, r + p, h, c, e + p, r + p), i > 0 && r > 0 && this.drawPatch(t, this.type.webGL_texture, s - p, 0, i + p, r + p, h + l - i - p, c, i + p, r + p), i > 0 && n > 0 && this.drawPatch(t, this.type.webGL_texture, s - p, a - p, i + p, n + p, h + l - i - p, c + u - n - p, i + p, n + p), e > 0 && n > 0 && this.drawPatch(t, this.type.webGL_texture, 0, a - p, e + p, n + p, h, c + u - n - p, e + p, n + p), 0 === this.edges) {
                var d = 2 === this.fill ? 0 : p;
                e > 0 && a > r && this.tilePatch(t, this.type.webGL_leftTexture, h, c + r, e + d, u - r - n, 0, 0), i > 0 && a > r && this.tilePatch(t, this.type.webGL_rightTexture, h + l - i - d, c + r, i + d, u - r - n, d, 0), r > 0 && s > e && this.tilePatch(t, this.type.webGL_topTexture, h + e, c, l - e - i, r + d, 0, 0), n > 0 && s > e && this.tilePatch(t, this.type.webGL_bottomTexture, h + e, c + u - n - d, l - e - i, n + d, 0, d)
            } else 1 === this.edges && (e > 0 && a > r && this.drawPatch(t, this.type.webGL_texture, 0, r, e, a - r, h, c + r, e, u - r - n), i > 0 && a > r && this.drawPatch(t, this.type.webGL_texture, s, r, i, a - r, h + l - i, c + r, i, u - r - n), r > 0 && s > e && this.drawPatch(t, this.type.webGL_texture, e, 0, s - e, r, h + e, c, l - e - i, r), n > 0 && s > e && this.drawPatch(t, this.type.webGL_texture, e, a, s - e, n, h + e, c + u - n, l - e - i, n));
            a > r && s > e && (0 === this.fill ? this.tilePatch(t, this.type.webGL_fillTexture, h + e, c + r, l - e - i, u - r - n, 0, 0) : 1 === this.fill && this.drawPatch(t, this.type.webGL_texture, e, r, s - e, a - r, h + e, c + r, l - e - i, u - r - n))
        }, n.prototype.OnURLLoaded = function() {
            return !0
        }, t.cnds = new n, s.prototype.SetEffect = function(t) {
            this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, t.acts = new s, t.exps = new function() {}
    }(), cr.plugins_.Particles = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.plugins_.Particles.prototype;
        t.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var e = t.Type.prototype;

        function i(t) {
            this.owner = t, this.active = !1, this.x = 0, this.y = 0, this.speed = 0, this.angle = 0, this.opacity = 1, this.grow = 0, this.size = 0, this.gs = 0, this.age = 0, cr.seal(this)
        }
        e.onCreate = function() {
            this.is_family || (this.texture_img = new Image, this.texture_img.cr_filesize = this.texture_filesize, this.webGL_texture = null, this.runtime.waitForImageLoad(this.texture_img, this.texture_file))
        }, e.onLostWebGLContext = function() {
            this.is_family || (this.webGL_texture = null)
        }, e.onRestoreWebGLContext = function() {
            !this.is_family && this.instances.length && (this.webGL_texture || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat)))
        }, e.loadTextures = function() {
            this.is_family || this.webGL_texture || !this.runtime.glwrap || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat))
        }, e.unloadTextures = function() {
            this.is_family || this.instances.length || !this.webGL_texture || (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
        }, e.preloadCanvas2D = function(t) {
            t.drawImage(this.texture_img, 0, 0)
        }, i.prototype.init = function() {
            var t = this.owner;
            this.x = t.x - t.xrandom / 2 + Math.random() * t.xrandom, this.y = t.y - t.yrandom / 2 + Math.random() * t.yrandom, this.speed = t.initspeed - t.speedrandom / 2 + Math.random() * t.speedrandom, this.angle = t.angle - t.spraycone / 2 + Math.random() * t.spraycone, this.opacity = t.initopacity, this.size = t.initsize - t.sizerandom / 2 + Math.random() * t.sizerandom, this.grow = t.growrate - t.growrandom / 2 + Math.random() * t.growrandom, this.gs = 0, this.age = 0
        }, i.prototype.tick = function(t) {
            var e = this.owner;
            this.x += Math.cos(this.angle) * this.speed * t, this.y += Math.sin(this.angle) * this.speed * t, this.y += this.gs * t, this.speed += e.acc * t, this.size += this.grow * t, this.gs += e.g * t, this.age += t, this.size < 1 ? this.active = !1 : (0 !== e.lifeanglerandom && (this.angle += Math.random() * e.lifeanglerandom * t - e.lifeanglerandom * t / 2), 0 !== e.lifespeedrandom && (this.speed += Math.random() * e.lifespeedrandom * t - e.lifespeedrandom * t / 2), 0 !== e.lifeopacityrandom && (this.opacity += Math.random() * e.lifeopacityrandom * t - e.lifeopacityrandom * t / 2, this.opacity < 0 ? this.opacity = 0 : this.opacity > 1 && (this.opacity = 1)), e.destroymode <= 1 && this.age >= e.timeout && (this.active = !1), 2 === e.destroymode && this.speed <= 0 && (this.active = !1))
        }, i.prototype.draw = function(t) {
            var e = this.owner.opacity * this.opacity;
            if (0 !== e) {
                0 === this.owner.destroymode && (e *= 1 - this.age / this.owner.timeout), t.globalAlpha = e;
                var i = this.x - this.size / 2,
                    r = this.y - this.size / 2;
                this.owner.runtime.pixel_rounding && (i = i + .5 | 0, r = r + .5 | 0), t.drawImage(this.owner.type.texture_img, i, r, this.size, this.size)
            }
        }, i.prototype.drawGL = function(t) {
            var e = this.owner.opacity * this.opacity;
            0 === this.owner.destroymode && (e *= 1 - this.age / this.owner.timeout);
            var i = this.size,
                r = i * this.owner.particlescale,
                n = this.x - i / 2,
                s = this.y - i / 2;
            this.owner.runtime.pixel_rounding && (n = n + .5 | 0, s = s + .5 | 0), r < 1 || 0 === e || (r < t.minPointSize || r > t.maxPointSize ? (t.setOpacity(e), t.quad(n, s, n + i, s, n + i, s + i, n, s + i)) : t.point(this.x, this.y, r, e))
        }, i.prototype.left = function() {
            return this.x - this.size / 2
        }, i.prototype.right = function() {
            return this.x + this.size / 2
        }, i.prototype.top = function() {
            return this.y - this.size / 2
        }, i.prototype.bottom = function() {
            return this.y + this.size / 2
        }, t.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var r = t.Instance.prototype,
            n = [];

        function s() {}

        function a() {}

        function o() {}
        r.onCreate = function() {
            var t = this.properties;
            if (this.rate = t[0], this.spraycone = cr.to_radians(t[1]), this.spraytype = t[2], this.spraying = !0, this.initspeed = t[3], this.initsize = t[4], this.initopacity = t[5] / 100, this.growrate = t[6], this.xrandom = t[7], this.yrandom = t[8], this.speedrandom = t[9], this.sizerandom = t[10], this.growrandom = t[11], this.acc = t[12], this.g = t[13], this.lifeanglerandom = t[14], this.lifespeedrandom = t[15], this.lifeopacityrandom = t[16], this.destroymode = t[17], this.timeout = t[18], this.particleCreateCounter = 0, this.particlescale = 1, this.particleBoxLeft = this.x, this.particleBoxTop = this.y, this.particleBoxRight = this.x, this.particleBoxBottom = this.y, this.add_bbox_changed_callback(function(t) {
                    t.bbox.set(t.particleBoxLeft, t.particleBoxTop, t.particleBoxRight, t.particleBoxBottom), t.bquad.set_from_rect(t.bbox), t.bbox_changed = !1, t.update_collision_cell(), t.update_render_cell()
                }), this.recycled || (this.particles = []), this.runtime.tickMe(this), this.type.loadTextures(), 1 === this.spraytype)
                for (var e = 0; e < this.rate; e++) this.allocateParticle().opacity = 0;
            this.first_tick = !0
        }, r.saveToJSON = function() {
            var t, e, i, r = {
                    r: this.rate,
                    sc: this.spraycone,
                    st: this.spraytype,
                    s: this.spraying,
                    isp: this.initspeed,
                    isz: this.initsize,
                    io: this.initopacity,
                    gr: this.growrate,
                    xr: this.xrandom,
                    yr: this.yrandom,
                    spr: this.speedrandom,
                    szr: this.sizerandom,
                    grnd: this.growrandom,
                    acc: this.acc,
                    g: this.g,
                    lar: this.lifeanglerandom,
                    lsr: this.lifespeedrandom,
                    lor: this.lifeopacityrandom,
                    dm: this.destroymode,
                    to: this.timeout,
                    pcc: this.particleCreateCounter,
                    ft: this.first_tick,
                    p: []
                },
                n = r.p;
            for (t = 0, e = this.particles.length; t < e; t++) i = this.particles[t], n.push([i.x, i.y, i.speed, i.angle, i.opacity, i.grow, i.size, i.gs, i.age]);
            return r
        }, r.loadFromJSON = function(t) {
            var e, i, r, s;
            this.rate = t.r, this.spraycone = t.sc, this.spraytype = t.st, this.spraying = t.s, this.initspeed = t.isp, this.initsize = t.isz, this.initopacity = t.io, this.growrate = t.gr, this.xrandom = t.xr, this.yrandom = t.yr, this.speedrandom = t.spr, this.sizerandom = t.szr, this.growrandom = t.grnd, this.acc = t.acc, this.g = t.g, this.lifeanglerandom = t.lar, this.lifespeedrandom = t.lsr, this.lifeopacityrandom = t.lor, this.destroymode = t.dm, this.timeout = t.to, this.particleCreateCounter = t.pcc, this.first_tick = t.ft, n.push.apply(n, this.particles), cr.clearArray(this.particles);
            var a = t.p;
            for (e = 0, i = a.length; e < i; e++) r = this.allocateParticle(), s = a[e], r.x = s[0], r.y = s[1], r.speed = s[2], r.angle = s[3], r.opacity = s[4], r.grow = s[5], r.size = s[6], r.gs = s[7], r.age = s[8]
        }, r.onDestroy = function() {
            n.push.apply(n, this.particles), cr.clearArray(this.particles)
        }, r.allocateParticle = function() {
            var t;
            return n.length ? (t = n.pop()).owner = this : t = new i(this), this.particles.push(t), t.active = !0, t
        }, r.tick = function() {
            var t, e, i, r, s, a = this.runtime.getDt(this);
            if (0 === this.spraytype && this.spraying)
                for (this.particleCreateCounter += a * this.rate, r = cr.floor(this.particleCreateCounter), this.particleCreateCounter -= r, t = 0; t < r; t++)(i = this.allocateParticle()).init();
            for (this.particleBoxLeft = this.x, this.particleBoxTop = this.y, this.particleBoxRight = this.x, this.particleBoxBottom = this.y, t = 0, s = 0, e = this.particles.length; t < e; t++) i = this.particles[t], this.particles[s] = i, this.runtime.redraw = !0, 1 === this.spraytype && this.first_tick && i.init(), i.tick(a), i.active ? (i.left() < this.particleBoxLeft && (this.particleBoxLeft = i.left()), i.right() > this.particleBoxRight && (this.particleBoxRight = i.right()), i.top() < this.particleBoxTop && (this.particleBoxTop = i.top()), i.bottom() > this.particleBoxBottom && (this.particleBoxBottom = i.bottom()), s++) : n.push(i);
            cr.truncateArray(this.particles, s), this.set_bbox_changed(), this.first_tick = !1, 1 === this.spraytype && 0 === this.particles.length && this.runtime.DestroyInstance(this)
        }, r.draw = function(t) {
            var e, i, r, n = this.layer;
            for (e = 0, i = this.particles.length; e < i; e++)(r = this.particles[e]).right() >= n.viewLeft && r.bottom() >= n.viewTop && r.left() <= n.viewRight && r.top() <= n.viewBottom && r.draw(t)
        }, r.drawGL = function(t) {
            this.particlescale = this.layer.getScale(), t.setTexture(this.type.webGL_texture);
            var e, i, r, n = this.layer;
            for (e = 0, i = this.particles.length; e < i; e++)(r = this.particles[e]).right() >= n.viewLeft && r.bottom() >= n.viewTop && r.left() <= n.viewRight && r.top() <= n.viewBottom && r.drawGL(t)
        }, s.prototype.IsSpraying = function() {
            return this.spraying
        }, t.cnds = new s, a.prototype.SetSpraying = function(t) {
            this.spraying = 0 !== t
        }, a.prototype.SetEffect = function(t) {
            this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, a.prototype.SetRate = function(t) {
            var e, i;
            if (this.rate = t, 1 === this.spraytype && this.first_tick)
                if (t < this.particles.length)
                    for (e = this.particles.length - t, i = 0; i < e; i++) n.push(this.particles.pop());
                else if (t > this.particles.length)
                for (e = t - this.particles.length, i = 0; i < e; i++) this.allocateParticle().opacity = 0
        }, a.prototype.SetSprayCone = function(t) {
            this.spraycone = cr.to_radians(t)
        }, a.prototype.SetInitSpeed = function(t) {
            this.initspeed = t
        }, a.prototype.SetInitSize = function(t) {
            this.initsize = t
        }, a.prototype.SetInitOpacity = function(t) {
            this.initopacity = t / 100
        }, a.prototype.SetGrowRate = function(t) {
            this.growrate = t
        }, a.prototype.SetXRandomiser = function(t) {
            this.xrandom = t
        }, a.prototype.SetYRandomiser = function(t) {
            this.yrandom = t
        }, a.prototype.SetSpeedRandomiser = function(t) {
            this.speedrandom = t
        }, a.prototype.SetSizeRandomiser = function(t) {
            this.sizerandom = t
        }, a.prototype.SetGrowRateRandomiser = function(t) {
            this.growrandom = t
        }, a.prototype.SetParticleAcc = function(t) {
            this.acc = t
        }, a.prototype.SetGravity = function(t) {
            this.g = t
        }, a.prototype.SetAngleRandomiser = function(t) {
            this.lifeanglerandom = t
        }, a.prototype.SetLifeSpeedRandomiser = function(t) {
            this.lifespeedrandom = t
        }, a.prototype.SetOpacityRandomiser = function(t) {
            this.lifeopacityrandom = t
        }, a.prototype.SetTimeout = function(t) {
            this.timeout = t
        }, t.acts = new a, o.prototype.ParticleCount = function(t) {
            t.set_int(this.particles.length)
        }, o.prototype.Rate = function(t) {
            t.set_float(this.rate)
        }, o.prototype.SprayCone = function(t) {
            t.set_float(cr.to_degrees(this.spraycone))
        }, o.prototype.InitSpeed = function(t) {
            t.set_float(this.initspeed)
        }, o.prototype.InitSize = function(t) {
            t.set_float(this.initsize)
        }, o.prototype.InitOpacity = function(t) {
            t.set_float(100 * this.initopacity)
        }, o.prototype.InitGrowRate = function(t) {
            t.set_float(this.growrate)
        }, o.prototype.XRandom = function(t) {
            t.set_float(this.xrandom)
        }, o.prototype.YRandom = function(t) {
            t.set_float(this.yrandom)
        }, o.prototype.InitSpeedRandom = function(t) {
            t.set_float(this.speedrandom)
        }, o.prototype.InitSizeRandom = function(t) {
            t.set_float(this.sizerandom)
        }, o.prototype.InitGrowRandom = function(t) {
            t.set_float(this.growrandom)
        }, o.prototype.ParticleAcceleration = function(t) {
            t.set_float(this.acc)
        }, o.prototype.Gravity = function(t) {
            t.set_float(this.g)
        }, o.prototype.ParticleAngleRandom = function(t) {
            t.set_float(this.lifeanglerandom)
        }, o.prototype.ParticleSpeedRandom = function(t) {
            t.set_float(this.lifespeedrandom)
        }, o.prototype.ParticleOpacityRandom = function(t) {
            t.set_float(this.lifeopacityrandom)
        }, o.prototype.Timeout = function(t) {
            t.set_float(this.timeout)
        }, t.exps = new o
    }(), cr.plugins_.Sprite = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.plugins_.Sprite.prototype;
        t.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var e = t.Type.prototype;

        function i() {
            if (0 === this.datauri.length) {
                var t = document.createElement("canvas");
                t.width = this.width, t.height = this.height;
                var e = t.getContext("2d");
                this.spritesheeted ? e.drawImage(this.texture_img, this.offx, this.offy, this.width, this.height, 0, 0, this.width, this.height) : e.drawImage(this.texture_img, 0, 0, this.width, this.height), this.datauri = t.toDataURL("image/png")
            }
            return this.datauri
        }
        e.onCreate = function() {
            var t, e, r, n, s, a, o, h, c, l;
            if (!this.is_family)
                for (this.all_frames = [], this.has_loaded_textures = !1, t = 0, e = this.animations.length; t < e; t++) {
                    for (s = this.animations[t], (o = {}).name = s[0], o.speed = s[1], o.loop = s[2], o.repeatcount = s[3], o.repeatto = s[4], o.pingpong = s[5], o.sid = s[6], o.frames = [], r = 0, n = s[7].length; r < n; r++) a = s[7][r], (h = {}).texture_file = a[0], h.texture_filesize = a[1], h.offx = a[2], h.offy = a[3], h.width = a[4], h.height = a[5], h.duration = a[6], h.hotspotX = a[7], h.hotspotY = a[8], h.image_points = a[9], h.poly_pts = a[10], h.pixelformat = a[11], h.spritesheeted = 0 !== h.width, h.datauri = "", h.getDataUri = i, (l = {}).left = 0, l.top = 0, l.right = 1, l.bottom = 1, h.sheetTex = l, h.webGL_texture = null, (c = this.runtime.findWaitingTexture(a[0])) ? h.texture_img = c : (h.texture_img = new Image, h.texture_img.cr_src = a[0], h.texture_img.cr_filesize = a[1], h.texture_img.c2webGL_texture = null, this.runtime.waitForImageLoad(h.texture_img, a[0])), cr.seal(h), o.frames.push(h), this.all_frames.push(h);
                    cr.seal(o), this.animations[t] = o
                }
        }, e.updateAllCurrentTexture = function() {
            var t, e, i;
            for (t = 0, e = this.instances.length; t < e; t++)(i = this.instances[t]).curWebGLTexture = i.curFrame.webGL_texture
        }, e.onLostWebGLContext = function() {
            if (!this.is_family) {
                var t, e, i;
                for (t = 0, e = this.all_frames.length; t < e; ++t)(i = this.all_frames[t]).texture_img.c2webGL_texture = null, i.webGL_texture = null;
                this.has_loaded_textures = !1, this.updateAllCurrentTexture()
            }
        }, e.onRestoreWebGLContext = function() {
            if (!this.is_family && this.instances.length) {
                var t, e, i;
                for (t = 0, e = this.all_frames.length; t < e; ++t)(i = this.all_frames[t]).webGL_texture = this.runtime.glwrap.loadTexture(i.texture_img, !1, this.runtime.linearSampling, i.pixelformat);
                this.updateAllCurrentTexture()
            }
        }, e.loadTextures = function() {
            if (!this.is_family && !this.has_loaded_textures && this.runtime.glwrap) {
                var t, e, i;
                for (t = 0, e = this.all_frames.length; t < e; ++t)(i = this.all_frames[t]).webGL_texture = this.runtime.glwrap.loadTexture(i.texture_img, !1, this.runtime.linearSampling, i.pixelformat);
                this.has_loaded_textures = !0
            }
        }, e.unloadTextures = function() {
            if (!this.is_family && !this.instances.length && this.has_loaded_textures) {
                var t, e, i;
                for (t = 0, e = this.all_frames.length; t < e; ++t) i = this.all_frames[t], this.runtime.glwrap.deleteTexture(i.webGL_texture), i.webGL_texture = null;
                this.has_loaded_textures = !1
            }
        };
        var r = [];
        e.preloadCanvas2D = function(t) {
            var e, i, n;
            for (cr.clearArray(r), e = 0, i = this.all_frames.length; e < i; ++e) n = this.all_frames[e].texture_img, -1 === r.indexOf(n) && (t.drawImage(n, 0, 0), r.push(n))
        }, t.Instance = function(t) {
            this.type = t, this.runtime = t.runtime;
            var e = this.type.animations[0].frames[0].poly_pts;
            this.recycled ? this.collision_poly.set_pts(e) : this.collision_poly = new cr.CollisionPoly(e)
        };
        var n = t.Instance.prototype;

        function s() {}
        n.onCreate = function() {
            this.visible = 0 === this.properties[0], this.isTicking = !1, this.inAnimTrigger = !1, this.collisionsEnabled = 0 !== this.properties[3], this.cur_animation = this.getAnimationByName(this.properties[1]) || this.type.animations[0], this.cur_frame = this.properties[2], this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1);
            var t, e, i, r, n, s, a, o, h = this.cur_animation.frames[this.cur_frame];
            for (this.collision_poly.set_pts(h.poly_pts), this.hotspotX = h.hotspotX, this.hotspotY = h.hotspotY, this.cur_anim_speed = this.cur_animation.speed, this.cur_anim_repeatto = this.cur_animation.repeatto, 1 === this.type.animations.length && 1 === this.type.animations[0].frames.length || 0 === this.cur_anim_speed || (this.runtime.tickMe(this), this.isTicking = !0), this.recycled ? this.animTimer.reset() : this.animTimer = new cr.KahanAdder, this.frameStart = this.getNowTime(), this.animPlaying = !0, this.animRepeats = 0, this.animForwards = !0, this.animTriggerName = "", this.changeAnimName = "", this.changeAnimFrom = 0, this.changeAnimFrame = -1, this.type.loadTextures(), t = 0, e = this.type.animations.length; t < e; t++)
                for (i = 0, r = (n = this.type.animations[t]).frames.length; i < r; i++) 0 === (s = n.frames[i]).width && (s.width = s.texture_img.width, s.height = s.texture_img.height), s.spritesheeted && (o = s.texture_img, (a = s.sheetTex).left = s.offx / o.width, a.top = s.offy / o.height, a.right = (s.offx + s.width) / o.width, a.bottom = (s.offy + s.height) / o.height, 0 === s.offx && 0 === s.offy && s.width === o.width && s.height === o.height && (s.spritesheeted = !1));
            this.curFrame = this.cur_animation.frames[this.cur_frame], this.curWebGLTexture = this.curFrame.webGL_texture
        }, n.saveToJSON = function() {
            var t = {
                a: this.cur_animation.sid,
                f: this.cur_frame,
                cas: this.cur_anim_speed,
                fs: this.frameStart,
                ar: this.animRepeats,
                at: this.animTimer.sum,
                rt: this.cur_anim_repeatto
            };
            return this.animPlaying || (t.ap = this.animPlaying), this.animForwards || (t.af = this.animForwards), t
        }, n.loadFromJSON = function(t) {
            var e = this.getAnimationBySid(t.a);
            e && (this.cur_animation = e), this.cur_frame = t.f, this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1), this.cur_anim_speed = t.cas, this.frameStart = t.fs, this.animRepeats = t.ar, this.animTimer.reset(), this.animTimer.sum = t.at, this.animPlaying = !t.hasOwnProperty("ap") || t.ap, this.animForwards = !t.hasOwnProperty("af") || t.af, t.hasOwnProperty("rt") ? this.cur_anim_repeatto = t.rt : this.cur_anim_repeatto = this.cur_animation.repeatto, this.curFrame = this.cur_animation.frames[this.cur_frame], this.curWebGLTexture = this.curFrame.webGL_texture, this.collision_poly.set_pts(this.curFrame.poly_pts), this.hotspotX = this.curFrame.hotspotX, this.hotspotY = this.curFrame.hotspotY
        }, n.animationFinish = function(t) {
            this.cur_frame = t ? 0 : this.cur_animation.frames.length - 1, this.animPlaying = !1, this.animTriggerName = this.cur_animation.name, this.inAnimTrigger = !0, this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnAnyAnimFinished, this), this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnAnimFinished, this), this.inAnimTrigger = !1, this.animRepeats = 0
        }, n.getNowTime = function() {
            return this.animTimer.sum
        }, n.tick = function() {
            this.animTimer.add(this.runtime.getDt(this)), this.changeAnimName.length && this.doChangeAnim(), this.changeAnimFrame >= 0 && this.doChangeAnimFrame();
            var t, e = this.getNowTime(),
                i = this.cur_animation,
                r = i.frames[this.cur_frame],
                n = r.duration / this.cur_anim_speed;
            this.animPlaying && e >= this.frameStart + n && (this.animForwards ? this.cur_frame++ : this.cur_frame--, this.frameStart += n, this.cur_frame >= i.frames.length && (i.pingpong ? (this.animForwards = !1, this.cur_frame = i.frames.length - 2) : i.loop ? this.cur_frame = this.cur_anim_repeatto : (this.animRepeats++, this.animRepeats >= i.repeatcount ? this.animationFinish(!1) : this.cur_frame = this.cur_anim_repeatto)), this.cur_frame < 0 && (i.pingpong ? (this.cur_frame = 1, this.animForwards = !0, i.loop || (this.animRepeats++, this.animRepeats >= i.repeatcount && this.animationFinish(!0))) : i.loop ? this.cur_frame = this.cur_anim_repeatto : (this.animRepeats++, this.animRepeats >= i.repeatcount ? this.animationFinish(!0) : this.cur_frame = this.cur_anim_repeatto)), this.cur_frame < 0 ? this.cur_frame = 0 : this.cur_frame >= i.frames.length && (this.cur_frame = i.frames.length - 1), e > this.frameStart + i.frames[this.cur_frame].duration / this.cur_anim_speed && (this.frameStart = e), t = i.frames[this.cur_frame], this.OnFrameChanged(r, t), this.runtime.redraw = !0)
        }, n.getAnimationByName = function(t) {
            var e, i, r;
            for (e = 0, i = this.type.animations.length; e < i; e++)
                if (r = this.type.animations[e], cr.equals_nocase(r.name, t)) return r;
            return null
        }, n.getAnimationBySid = function(t) {
            var e, i, r;
            for (e = 0, i = this.type.animations.length; e < i; e++)
                if ((r = this.type.animations[e]).sid === t) return r;
            return null
        }, n.doChangeAnim = function() {
            var t = this.cur_animation.frames[this.cur_frame],
                e = this.getAnimationByName(this.changeAnimName);
            this.changeAnimName = "", e && (cr.equals_nocase(e.name, this.cur_animation.name) && this.animPlaying || (this.cur_animation = e, this.cur_anim_speed = e.speed, this.cur_anim_repeatto = e.repeatto, this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1), 1 === this.changeAnimFrom && (this.cur_frame = 0), this.animPlaying = !0, this.frameStart = this.getNowTime(), this.animForwards = !0, this.OnFrameChanged(t, this.cur_animation.frames[this.cur_frame]), this.runtime.redraw = !0))
        }, n.doChangeAnimFrame = function() {
            var t = this.cur_animation.frames[this.cur_frame],
                e = this.cur_frame;
            this.cur_frame = cr.floor(this.changeAnimFrame), this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1), e !== this.cur_frame && (this.OnFrameChanged(t, this.cur_animation.frames[this.cur_frame]), this.frameStart = this.getNowTime(), this.runtime.redraw = !0), this.changeAnimFrame = -1
        }, n.OnFrameChanged = function(t, e) {
            var i, r, n, s = t.width,
                a = t.height,
                o = e.width,
                h = e.height;
            for (s != o && (this.width *= o / s), a != h && (this.height *= h / a), this.hotspotX = e.hotspotX, this.hotspotY = e.hotspotY, this.collision_poly.set_pts(e.poly_pts), this.set_bbox_changed(), this.curFrame = e, this.curWebGLTexture = e.webGL_texture, i = 0, r = this.behavior_insts.length; i < r; i++)(n = this.behavior_insts[i]).onSpriteFrameChanged && n.onSpriteFrameChanged(t, e);
            this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnFrameChanged, this)
        }, n.draw = function(t) {
            t.globalAlpha = this.opacity;
            var e = this.curFrame,
                i = e.spritesheeted,
                r = e.texture_img,
                n = this.x,
                s = this.y,
                a = this.width,
                o = this.height;
            if (0 === this.angle && a >= 0 && o >= 0) n -= this.hotspotX * a, s -= this.hotspotY * o, this.runtime.pixel_rounding && (n = Math.round(n), s = Math.round(s)), i ? t.drawImage(r, e.offx, e.offy, e.width, e.height, n, s, a, o) : t.drawImage(r, n, s, a, o);
            else {
                this.runtime.pixel_rounding && (n = Math.round(n), s = Math.round(s)), t.save();
                var h = a > 0 ? 1 : -1,
                    c = o > 0 ? 1 : -1;
                t.translate(n, s), 1 === h && 1 === c || t.scale(h, c), t.rotate(this.angle * h * c);
                var l = 0 - this.hotspotX * cr.abs(a),
                    u = 0 - this.hotspotY * cr.abs(o);
                i ? t.drawImage(r, e.offx, e.offy, e.width, e.height, l, u, cr.abs(a), cr.abs(o)) : t.drawImage(r, l, u, cr.abs(a), cr.abs(o)), t.restore()
            }
        }, n.drawGL_earlyZPass = function(t) {
            this.drawGL(t)
        }, n.drawGL = function(t) {
            t.setTexture(this.curWebGLTexture), t.setOpacity(this.opacity);
            var e = this.curFrame,
                i = this.bquad;
            if (this.runtime.pixel_rounding) {
                var r = Math.round(this.x) - this.x,
                    n = Math.round(this.y) - this.y;
                e.spritesheeted ? t.quadTex(i.tlx + r, i.tly + n, i.trx + r, i.try_ + n, i.brx + r, i.bry + n, i.blx + r, i.bly + n, e.sheetTex) : t.quad(i.tlx + r, i.tly + n, i.trx + r, i.try_ + n, i.brx + r, i.bry + n, i.blx + r, i.bly + n)
            } else e.spritesheeted ? t.quadTex(i.tlx, i.tly, i.trx, i.try_, i.brx, i.bry, i.blx, i.bly, e.sheetTex) : t.quad(i.tlx, i.tly, i.trx, i.try_, i.brx, i.bry, i.blx, i.bly)
        }, n.getImagePointIndexByName = function(t) {
            var e, i, r = this.curFrame;
            for (e = 0, i = r.image_points.length; e < i; e++)
                if (cr.equals_nocase(t, r.image_points[e][0])) return e;
            return -1
        }, n.getImagePoint = function(t, e) {
            var i, r = this.curFrame,
                n = r.image_points;
            if (i = cr.is_string(t) ? this.getImagePointIndexByName(t) : t - 1, (i = cr.floor(i)) < 0 || i >= n.length) return e ? this.x : this.y;
            var s = (n[i][1] - r.hotspotX) * this.width,
                a = n[i][2];
            a = (a - r.hotspotY) * this.height;
            var o = Math.cos(this.angle),
                h = Math.sin(this.angle),
                c = s * o - a * h;
            return a = a * o + s * h, s = c, s += this.x, a += this.y, e ? s : a
        };
        var a = [];

        function o(t) {
            t[0] = 0, t[1] = 0, t[2] = 0, a.push(t)
        }

        function h(t, e) {
            return t < e ? t + "," + e : e + "," + t
        }

        function c(t, e, i, r) {
            var n = e.uid,
                s = i.uid,
                o = h(n, s);
            if (t.hasOwnProperty(o)) t[o][2] = r;
            else {
                var c = a.length ? a.pop() : [0, 0, 0];
                c[0] = n, c[1] = s, c[2] = r, t[o] = c
            }
        }

        function l(t, e, i) {
            var r = h(e.uid, i.uid);
            t.hasOwnProperty(r) && (o(t[r]), delete t[r])
        }
        var u = -2;

        function p(t, e, i) {
            var r = h(e.uid, i.uid);
            return t.hasOwnProperty(r) ? (u = t[r][2], !0) : (u = -2, !1)
        }
        var d = [];
        s.prototype.OnCollision = function(t) {
            if (!t) return !1;
            var e = this.runtime,
                i = e.getCurrentCondition(),
                r = i.type,
                n = null;
            i.extra.collmemory ? n = i.extra.collmemory : (n = {}, i.extra.collmemory = n), i.extra.spriteCreatedDestroyCallback || (i.extra.spriteCreatedDestroyCallback = !0, e.addDestroyCallback(function(t) {
                ! function(t, e) {
                    var i, r, n = e.uid;
                    for (i in t) t.hasOwnProperty(i) && ((r = t[i])[0] !== n && r[1] !== n || (o(t[i]), delete t[i]))
                }(i.extra.collmemory, t)
            }));
            var s, a, h, f, g, y, m, _, v = r.getCurrentSol(),
                b = t.getCurrentSol(),
                w = v.getObjects(),
                x = this.runtime.tickcount,
                S = x - 1,
                T = e.getCurrentEventStack().current_event;
            T.orblock;
            for (a = 0; a < w.length; a++) {
                for (h = w[a], b.select_all ? (h.update_bbox(), this.runtime.getCollisionCandidates(h.layer, t, h.bbox, d), s = d, this.runtime.addRegisteredCollisionCandidates(h, t, s)) : s = b.getObjects(), f = 0; f < s.length; f++) g = s[f], e.testOverlap(h, g) || e.checkRegisteredCollision(h, g) ? (_ = !p(n, h, g) || u < S, c(n, h, g, x), _ && (e.pushCopySol(T.solModifiers), y = r.getCurrentSol(), m = t.getCurrentSol(), y.select_all = !1, m.select_all = !1, r === t ? (y.instances.length = 2, y.instances[0] = h, y.instances[1] = g, r.applySolToContainer()) : (y.instances.length = 1, m.instances.length = 1, y.instances[0] = h, m.instances[0] = g, r.applySolToContainer(), t.applySolToContainer()), T.retrigger(), e.popSol(T.solModifiers))) : l(n, h, g);
                cr.clearArray(d)
            }
            return !1
        };
        var f = null,
            g = new cr.ObjectSet,
            y = !1,
            m = [],
            _ = new cr.rect(0, 0, 0, 0);

        function v(t, e, i) {
            if (!t) return !1;
            var r, n, s, a, o, h, c = 0 !== e || 0 !== i,
                l = !1,
                u = this.runtime.getCurrentCondition(),
                p = u.type,
                d = u.inverted,
                v = t.getCurrentSol(),
                b = this.runtime.getCurrentEventStack().current_event.orblock;
            for (v.select_all ? (this.update_bbox(), _.copy(this.bbox), _.offset(e, i), this.runtime.getCollisionCandidates(this.layer, t, _, m), h = m) : h = b ? this.runtime.isCurrentConditionFirst() && !v.else_instances.length && v.instances.length ? v.instances : v.else_instances : v.instances, f = t, y = p !== t && !d, c && (r = this.x, n = this.y, this.x += e, this.y += i, this.set_bbox_changed()), s = 0, a = h.length; s < a; s++)
                if (o = h[s], this.runtime.testOverlap(this, o)) {
                    if (l = !0, d) break;
                    p !== t && g.add(o)
                }
            return c && (this.x = r, this.y = n, this.set_bbox_changed()), cr.clearArray(m), l
        }

        function b() {}

        function w() {}
        e.finish = function(t) {
            if (y) {
                if (t) {
                    var e, i, r, n = this.runtime.getCurrentEventStack().current_event.orblock,
                        s = f.getCurrentSol(),
                        a = g.valuesRef();
                    if (s.select_all) {
                        for (s.select_all = !1, cr.clearArray(s.instances), e = 0, i = a.length; e < i; ++e) s.instances[e] = a[e];
                        if (n)
                            for (cr.clearArray(s.else_instances), e = 0, i = f.instances.length; e < i; ++e) r = f.instances[e], g.contains(r) || s.else_instances.push(r)
                    } else if (n) {
                        var o = s.instances.length;
                        for (e = 0, i = a.length; e < i; ++e) s.instances[o + e] = a[e], cr.arrayFindRemove(s.else_instances, a[e])
                    } else cr.shallowAssignArray(s.instances, a);
                    f.applySolToContainer()
                }
                g.clear(), y = !1
            }
        }, s.prototype.IsOverlapping = function(t) {
            return v.call(this, t, 0, 0)
        }, s.prototype.IsOverlappingOffset = function(t, e, i) {
            return v.call(this, t, e, i)
        }, s.prototype.IsAnimPlaying = function(t) {
            return this.changeAnimName.length ? cr.equals_nocase(this.changeAnimName, t) : cr.equals_nocase(this.cur_animation.name, t)
        }, s.prototype.CompareFrame = function(t, e) {
            return cr.do_cmp(this.cur_frame, t, e)
        }, s.prototype.CompareAnimSpeed = function(t, e) {
            var i = this.animForwards ? this.cur_anim_speed : -this.cur_anim_speed;
            return cr.do_cmp(i, t, e)
        }, s.prototype.OnAnimFinished = function(t) {
            return cr.equals_nocase(this.animTriggerName, t)
        }, s.prototype.OnAnyAnimFinished = function() {
            return !0
        }, s.prototype.OnFrameChanged = function() {
            return !0
        }, s.prototype.IsMirrored = function() {
            return this.width < 0
        }, s.prototype.IsFlipped = function() {
            return this.height < 0
        }, s.prototype.OnURLLoaded = function() {
            return !0
        }, s.prototype.IsCollisionEnabled = function() {
            return this.collisionsEnabled
        }, t.cnds = new s, b.prototype.Spawn = function(t, e, i) {
            if (t && e) {
                var r = this.runtime.createInstance(t, e, this.getImagePoint(i, !0), this.getImagePoint(i, !1));
                if (r) {
                    var n, s, a;
                    if (void 0 !== r.angle && (r.angle = this.angle, r.set_bbox_changed()), this.runtime.isInOnDestroy++, this.runtime.trigger(Object.getPrototypeOf(t.plugin).cnds.OnCreated, r), r.is_contained)
                        for (n = 0, s = r.siblings.length; n < s; n++) a = r.siblings[n], this.runtime.trigger(Object.getPrototypeOf(a.type.plugin).cnds.OnCreated, a);
                    this.runtime.isInOnDestroy--;
                    var o, h = this.runtime.getCurrentAction(),
                        c = !1;
                    if ((cr.is_undefined(h.extra.Spawn_LastExec) || h.extra.Spawn_LastExec < this.runtime.execcount) && (c = !0, h.extra.Spawn_LastExec = this.runtime.execcount), t != this.type && ((o = t.getCurrentSol()).select_all = !1, c ? (cr.clearArray(o.instances), o.instances[0] = r) : o.instances.push(r), r.is_contained))
                        for (n = 0, s = r.siblings.length; n < s; n++)(o = (a = r.siblings[n]).type.getCurrentSol()).select_all = !1, c ? (cr.clearArray(o.instances), o.instances[0] = a) : o.instances.push(a)
                }
            }
        }, b.prototype.SetEffect = function(t) {
            this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, b.prototype.StopAnim = function() {
            this.animPlaying = !1
        }, b.prototype.StartAnim = function(t) {
            this.animPlaying = !0, this.frameStart = this.getNowTime(), 1 === t && 0 !== this.cur_frame && (this.changeAnimFrame = 0, this.inAnimTrigger || this.doChangeAnimFrame()), this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0)
        }, b.prototype.SetAnim = function(t, e) {
            this.changeAnimName = t, this.changeAnimFrom = e, this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0), this.inAnimTrigger || this.doChangeAnim()
        }, b.prototype.SetAnimFrame = function(t) {
            this.changeAnimFrame = t, this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0), this.inAnimTrigger || this.doChangeAnimFrame()
        }, b.prototype.SetAnimSpeed = function(t) {
            this.cur_anim_speed = cr.abs(t), this.animForwards = t >= 0, this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0)
        }, b.prototype.SetAnimRepeatToFrame = function(t) {
            (t = Math.floor(t)) < 0 && (t = 0), t >= this.cur_animation.frames.length && (t = this.cur_animation.frames.length - 1), this.cur_anim_repeatto = t
        }, b.prototype.SetMirrored = function(t) {
            var e = cr.abs(this.width) * (0 === t ? -1 : 1);
            this.width !== e && (this.width = e, this.set_bbox_changed())
        }, b.prototype.SetFlipped = function(t) {
            var e = cr.abs(this.height) * (0 === t ? -1 : 1);
            this.height !== e && (this.height = e, this.set_bbox_changed())
        }, b.prototype.SetScale = function(t) {
            var e = this.curFrame,
                i = this.width < 0 ? -1 : 1,
                r = this.height < 0 ? -1 : 1,
                n = e.width * t * i,
                s = e.height * t * r;
            this.width === n && this.height === s || (this.width = n, this.height = s, this.set_bbox_changed())
        }, b.prototype.LoadURL = function(t, e, i) {
            var r = new Image,
                n = this,
                s = this.curFrame;
            r.onload = function() {
                if (s.texture_img.src === r.src) return n.runtime.glwrap && n.curFrame === s && (n.curWebGLTexture = s.webGL_texture), 0 === e && (n.width = r.width, n.height = r.height, n.set_bbox_changed()), n.runtime.redraw = !0, void n.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnURLLoaded, n);
                s.texture_img = r, s.offx = 0, s.offy = 0, s.width = r.width, s.height = r.height, s.spritesheeted = !1, s.datauri = "", s.pixelformat = 0, n.runtime.glwrap && (s.webGL_texture && n.runtime.glwrap.deleteTexture(s.webGL_texture), s.webGL_texture = n.runtime.glwrap.loadTexture(r, !1, n.runtime.linearSampling), n.curFrame === s && (n.curWebGLTexture = s.webGL_texture), n.type.updateAllCurrentTexture()), 0 === e && (n.width = r.width, n.height = r.height, n.set_bbox_changed()), n.runtime.redraw = !0, n.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnURLLoaded, n)
            }, "data:" !== t.substr(0, 5) && 0 === i && (r.crossOrigin = "anonymous"), this.runtime.setImageSrc(r, t)
        }, b.prototype.SetCollisions = function(t) {
            this.collisionsEnabled !== (0 !== t) && (this.collisionsEnabled = 0 !== t, this.collisionsEnabled ? this.set_bbox_changed() : (this.collcells.right >= this.collcells.left && this.type.collision_grid.update(this, this.collcells, null), this.collcells.set(0, 0, -1, -1)))
        }, t.acts = new b, w.prototype.AnimationFrame = function(t) {
            t.set_int(this.cur_frame)
        }, w.prototype.AnimationFrameCount = function(t) {
            t.set_int(this.cur_animation.frames.length)
        }, w.prototype.AnimationName = function(t) {
            t.set_string(this.cur_animation.name)
        }, w.prototype.AnimationSpeed = function(t) {
            t.set_float(this.animForwards ? this.cur_anim_speed : -this.cur_anim_speed)
        }, w.prototype.ImagePointX = function(t, e) {
            t.set_float(this.getImagePoint(e, !0))
        }, w.prototype.ImagePointY = function(t, e) {
            t.set_float(this.getImagePoint(e, !1))
        }, w.prototype.ImagePointCount = function(t) {
            t.set_int(this.curFrame.image_points.length)
        }, w.prototype.ImageWidth = function(t) {
            t.set_float(this.curFrame.width)
        }, w.prototype.ImageHeight = function(t) {
            t.set_float(this.curFrame.height)
        }, t.exps = new w
    }();
var jText = "";
cr.plugins_.SpriteFontPlus = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.plugins_.SpriteFontPlus.prototype;
        t.onCreate = function() {}, t.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var e = t.Type.prototype;
        e.onCreate = function() {
            this.is_family || (this.texture_img = new Image, this.texture_img.idtkLoadDisposed = !0, this.texture_img.src = this.texture_file, this.runtime.wait_for_textures.push(this.texture_img), this.webGL_texture = null)
        }, e.onLostWebGLContext = function() {
            this.is_family || (this.webGL_texture = null)
        }, e.onRestoreWebGLContext = function() {
            var t, e;
            if (!this.is_family && this.instances.length)
                for (this.webGL_texture || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !1, this.runtime.linearSampling, this.texture_pixelformat)), t = 0, e = this.instances.length; t < e; t++) this.instances[t].webGL_texture = this.webGL_texture
        }, e.unloadTextures = function() {
            this.is_family || this.instances.length || !this.webGL_texture || (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
        }, e.preloadCanvas2D = function(t) {
            t.drawImage(this.texture_img, 0, 0)
        }, t.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var i = t.Instance.prototype;

        function r(t) {
            return t.replace(/\s\s*$/, "")
        }
        i.onDestroy = function() {
            var t;
            u(this.lines), t = this.clipList, o(d, t, !1),
                function(t) {
                    o(f, t, !1)
                }(this.clipUV), cr.wipe(this.characterWidthList)
        }, i.onCreate = function() {
            this.texture_img = this.type.texture_img, this.characterWidth = this.properties[0], this.characterHeight = this.properties[1], this.characterSet = this.properties[2], this.text = this.properties[3], this.characterScale = this.properties[4], this.visible = 0 === this.properties[5], this.halign = this.properties[6] / 2, this.valign = this.properties[7] / 2, this.wrapbyword = 0 === this.properties[9], this.characterSpacing = this.properties[10], this.lineHeight = this.properties[11], this.textWidth = 0, this.textHeight = 0, this.charWidthJSON = this.properties[12], this.spaceWidth = this.properties[13], jText = this.charWidthJSON, this.recycled ? (this.lines.length = 0, cr.wipe(this.clipList), cr.wipe(this.clipUV), cr.wipe(this.characterWidthList)) : (this.lines = [], this.clipList = {}, this.clipUV = {}, this.characterWidthList = {});
            try {
                if (this.charWidthJSON)
                    if (-1 !== this.charWidthJSON.indexOf('""c2array""'))
                        for (var t = (s = jQuery.parseJSON(this.charWidthJSON.replace(/""/g, '"'))).size[1], e = 0; e < t; e++)
                            for (var i = s.data[1][e][0], r = s.data[0][e][0], n = 0; n < i.length; n++) this.characterWidthList[i.charAt(n)] = r;
                    else {
                        var s;
                        for (t = (s = jQuery.parseJSON(this.charWidthJSON)).length, e = 0; e < t; e++)
                            for (i = s[e][1], r = s[e][0], n = 0; n < i.length; n++) this.characterWidthList[i.charAt(n)] = r
                    } - 1 !== this.spaceWidth && (this.characterWidthList[" "] = this.spaceWidth)
            } catch (t) {
                window.console && window.console.log && window.console.log("SpriteFont+ Failure: " + t)
            }
            this.text_changed = !0, this.lastwrapwidth = this.width, this.runtime.glwrap && (this.type.webGL_texture || (this.type.webGL_texture = this.runtime.glwrap.loadTexture(this.type.texture_img, !1, this.runtime.linearSampling, this.type.texture_pixelformat)), this.webGL_texture = this.type.webGL_texture), this.SplitSheet()
        }, i.saveToJSON = function() {
            var t = {
                t: this.text,
                csc: this.characterScale,
                csp: this.characterSpacing,
                lh: this.lineHeight,
                tw: this.textWidth,
                th: this.textHeight,
                lrt: this.last_render_tick,
                cw: {}
            };
            for (var e in this.characterWidthList) t.cw[e] = this.characterWidthList[e];
            return t
        }, i.loadFromJSON = function(t) {
            for (var e in this.text = t.t, this.characterScale = t.csc, this.characterSpacing = t.csp, this.lineHeight = t.lh, this.textWidth = t.tw, this.textHeight = t.th, this.last_render_tick = t.lrt, t.cw) this.characterWidthList[e] = t.cw[e];
            this.text_changed = !0, this.lastwrapwidth = this.width
        };
        var n = 1e3;

        function s(t, e) {
            return t.length ? t.pop() : new e
        }

        function a(t, e) {
            t.length < n && t.push(e)
        }

        function o(t, e, i) {
            if (i) {
                var r, n;
                for (r = 0, n = e.length; r < n; r++) a(t, e[r]);
                e.length = 0
            } else {
                var s;
                for (s in e) Object.prototype.hasOwnProperty.call(e, s) && (a(t, e[s]), delete e[s])
            }
        }

        function h(t, e, i) {
            var n, s = t.lines;
            i = r(i), e >= s.length && s.push(l()), (n = s[e]).text = i, n.width = t.measureWidth(i), t.textWidth = cr.max(t.textWidth, n.width)
        }
        var c = [];

        function l() {
            return s(c, Object)
        }

        function u(t) {
            o(c, t, !0)
        }

        function p(t, e, i, r, n, a) {
            void 0 === t[e] && (t[e] = s(d, Object)), t[e].x = i, t[e].y = r, t[e].w = n, t[e].h = a
        }
        var d = [];
        var f = [];
        i.SplitSheet = function() {
            for (var t, e, i, r, n, a, o = this.texture_img, h = o.width, c = o.height, l = this.characterWidth, u = this.characterHeight, d = l / h, g = u / c, y = this.characterSet, m = Math.floor(h / l), _ = Math.floor(c / u), v = 0; v < y.length && !(v >= m * _); v++) {
                var b = v % m,
                    w = Math.floor(v / m),
                    x = y.charAt(v);
                this.runtime.glwrap ? (t = this.clipUV, i = b * d, r = w * g, n = (b + 1) * d, a = (w + 1) * g, void 0 === t[e = x] && (t[e] = s(f, cr.rect)), t[e].left = i, t[e].top = r, t[e].right = n, t[e].bottom = a) : p(this.clipList, x, b * l, w * u, l, u)
            }
        };
        var g = [];
        t.TokeniseWords = function(t) {
            g.length = 0;
            for (var e, i = "", r = 0; r < t.length;)
                if ("\n" === (e = t.charAt(r))) i.length && (g.push(i), i = ""), g.push("\n"), ++r;
                else if (" " === e || "\t" === e || "-" === e) {
                do {
                    i += t.charAt(r), r++
                } while (r < t.length && (" " === t.charAt(r) || "\t" === t.charAt(r)));
                g.push(i), i = ""
            } else r < t.length && (i += e, r++);
            i.length && g.push(i)
        }, t.WordWrap = function(t) {
            var e = t.text,
                i = t.lines;
            if (e && e.length) {
                var r = t.width;
                if (r <= 2) u(i);
                else {
                    var n = t.characterWidth,
                        s = t.characterScale,
                        a = t.characterSpacing;
                    if (e.length * (n * s + a) - a <= r && -1 === e.indexOf("\n")) {
                        var o = t.measureWidth(e);
                        if (o <= r) return u(i), i.push(l()), i[0].text = e, i[0].width = o, t.textWidth = o, void(t.textHeight = t.characterHeight * s + t.lineHeight)
                    }
                    t.wrapbyword;
                    this.WrapText(t), t.textHeight = i.length * (t.characterHeight * s + t.lineHeight)
                }
            } else u(i)
        }, t.WrapText = function(t) {
            var e, i = t.wrapbyword,
                n = t.text,
                s = t.lines,
                o = t.width;
            i ? (this.TokeniseWords(n), e = g) : e = n;
            var l, u, p, d = "",
                f = 0,
                y = !1;
            for (u = 0; u < e.length; u++) "\n" !== e[u] ? (y = !1, l = d, d += e[u], t.measureWidth(r(d)) > o && ("" === l ? (h(t, f, d), d = "", y = !0) : (h(t, f, l), d = e[u]), f++, i || " " !== d || (d = ""))) : (!0 === y ? y = !1 : (h(t, f, d), f++), d = "");
            for (r(d).length && (h(t, f, d), f++), u = f; u < s.length; u++) p = s[u], a(c, p);
            s.length = f
        }, i.measureWidth = function(t) {
            for (var e = this.characterSpacing, i = t.length, r = 0, n = 0; n < i; n++) r += this.getCharacterWidth(t.charAt(n)) * this.characterScale + e;
            return r -= r > 0 ? e : 0
        }, i.getCharacterWidth = function(t) {
            var e = this.characterWidthList;
            return void 0 !== e[t] ? e[t] : this.characterWidth
        }, i.rebuildText = function() {
            (this.text_changed || this.width !== this.lastwrapwidth) && (this.textWidth = 0, this.textHeight = 0, this.type.plugin.WordWrap(this), this.text_changed = !1, this.lastwrapwidth = this.width)
        };
        i.draw = function(t, e) {
            var i = this.texture_img;
            if ("" !== this.text && null != i) {
                if (this.rebuildText(), this.height < this.characterHeight * this.characterScale + this.lineHeight) return;
                t.globalAlpha = this.opacity;
                var r = this.x,
                    n = this.y;
                this.runtime.pixel_rounding && (r = r + .5 | 0, n = n + .5 | 0), t.save(), t.translate(r, n), t.rotate(this.angle);
                for (var s, a = this.halign, o = this.valign, h = this.characterScale, c = this.characterHeight * h, l = this.lineHeight, u = this.characterSpacing, p = this.lines, d = this.textHeight, f = o * cr.max(0, this.height - d), g = -this.hotspotX * this.width, y = -this.hotspotY * this.height, m = y += f, _ = 0; _ < p.length; _++) {
                    var v = p[_].text,
                        b = p[_].width;
                    s = g + a * cr.max(0, this.width - b), m += l;
                    for (var w = 0; w < v.length; w++) {
                        var x = v.charAt(w),
                            S = this.clipList[x];
                        if (s + this.getCharacterWidth(x) * h > this.width + 1e-5) break;
                        void 0 !== S && t.drawImage(this.texture_img, S.x, S.y, S.w, S.h, Math.round(s), Math.round(m), S.w * h, S.h * h), s += this.getCharacterWidth(x) * h + u
                    }
                    if ((m += c) + c + l > this.height) break
                }
                t.restore()
            }
        };
        var y = new cr.quad;

        function m(t, e, i) {
            var r;
            r = t.tlx * e - t.tly * i, t.tly = t.tly * e + t.tlx * i, t.tlx = r, r = t.trx * e - t.try_ * i, t.try_ = t.try_ * e + t.trx * i, t.trx = r, r = t.blx * e - t.bly * i, t.bly = t.bly * e + t.blx * i, t.blx = r, r = t.brx * e - t.bry * i, t.bry = t.bry * e + t.brx * i, t.brx = r
        }

        function _() {}

        function v() {}

        function b() {}
        i.drawGL = function(t) {
            if (t.setTexture(this.webGL_texture), t.setOpacity(this.opacity), "" !== this.text) {
                if (this.rebuildText(), this.height < this.characterHeight * this.characterScale + this.lineHeight) return;
                this.update_bbox();
                var e = this.bquad,
                    i = 0,
                    r = 0;
                this.runtime.pixel_rounding && (i = (this.x + .5 | 0) - this.x, r = (this.y + .5 | 0) - this.y);
                var n, s, a = this.angle,
                    o = this.halign,
                    h = this.valign,
                    c = this.characterScale,
                    l = this.characterHeight * c,
                    u = this.lineHeight,
                    p = this.characterSpacing,
                    d = this.lines,
                    f = this.textHeight;
                0 !== a && (n = Math.cos(a), s = Math.sin(a));
                for (var g, _ = h * cr.max(0, this.height - f), v = e.tlx + i, b = e.tly + r, w = _, x = 0; x < d.length; x++) {
                    var S = d[x].text,
                        T = d[x].width;
                    g = o * cr.max(0, this.width - T), w += u;
                    for (var O = 0; O < S.length; O++) {
                        var C = S.charAt(O),
                            A = this.clipUV[C];
                        if (g + this.getCharacterWidth(C) * c > this.width + 1e-5) break;
                        if (void 0 !== A) {
                            var k = this.characterWidth * c,
                                E = this.characterHeight * c;
                            y.tlx = g, y.tly = w, y.trx = g + k, y.try_ = w, y.blx = g, y.bly = w + E, y.brx = g + k, y.bry = w + E, 0 !== a && m(y, n, s), y.offset(v, b), t.quadTex(y.tlx, y.tly, y.trx, y.try_, y.brx, y.bry, y.blx, y.bly, A)
                        }
                        g += this.getCharacterWidth(C) * c + p
                    }
                    if ((w += l) + l + u > this.height) break
                }
            }
        }, _.prototype.CompareText = function(t, e) {
            return e ? this.text == t : cr.equals_nocase(this.text, t)
        }, t.cnds = new _, v.prototype.SetText = function(t) {
            cr.is_number(t) && t < 1e9 && (t = Math.round(1e10 * t) / 1e10);
            var e = t.toString();
            this.text !== e && (this.text = e, this.text_changed = !0, this.runtime.redraw = !0)
        }, v.prototype.AppendText = function(t) {
            cr.is_number(t) && (t = Math.round(1e10 * t) / 1e10);
            var e = t.toString();
            e && (this.text += e, this.text_changed = !0, this.runtime.redraw = !0)
        }, v.prototype.SetScale = function(t) {
            t !== this.characterScale && (this.characterScale = t, this.text_changed = !0, this.runtime.redraw = !0)
        }, v.prototype.SetCharacterSpacing = function(t) {
            t !== this.CharacterSpacing && (this.characterSpacing = t, this.text_changed = !0, this.runtime.redraw = !0)
        }, v.prototype.SetLineHeight = function(t) {
            t !== this.lineHeight && (this.lineHeight = t, this.text_changed = !0, this.runtime.redraw = !0)
        }, i.SetCharWidth = function(t, e) {
            var i = parseInt(e, 10);
            this.characterWidthList[t] !== i && (this.characterWidthList[t] = i, this.text_changed = !0, this.runtime.redraw = !0)
        }, v.prototype.SetCharacterWidth = function(t, e) {
            if ("" !== t)
                for (var i = 0; i < t.length; i++) this.SetCharWidth(t.charAt(i), e)
        }, v.prototype.SetEffect = function(t) {
            this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, t.acts = new v, b.prototype.CharacterWidth = function(t, e) {
            t.set_int(this.getCharacterWidth(e))
        }, b.prototype.CharacterHeight = function(t) {
            t.set_int(this.characterHeight)
        }, b.prototype.CharacterScale = function(t) {
            t.set_float(this.characterScale)
        }, b.prototype.CharacterSpacing = function(t) {
            t.set_int(this.characterSpacing)
        }, b.prototype.LineHeight = function(t) {
            t.set_int(this.lineHeight)
        }, b.prototype.Text = function(t) {
            t.set_string(this.text)
        }, b.prototype.TextWidth = function(t) {
            this.rebuildText(), t.set_float(this.textWidth)
        }, b.prototype.TextHeight = function(t) {
            this.rebuildText(), t.set_float(this.textHeight)
        }, t.exps = new b
    }(), cr.plugins_.Spritefont2 = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.plugins_.Spritefont2.prototype;
        t.onCreate = function() {}, t.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var e = t.Type.prototype;
        e.onCreate = function() {
            this.is_family || (this.texture_img = new Image, this.runtime.waitForImageLoad(this.texture_img, this.texture_file), this.webGL_texture = null)
        }, e.onLostWebGLContext = function() {
            this.is_family || (this.webGL_texture = null)
        }, e.onRestoreWebGLContext = function() {
            var t, e;
            if (!this.is_family && this.instances.length)
                for (this.webGL_texture || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !1, this.runtime.linearSampling, this.texture_pixelformat)), t = 0, e = this.instances.length; t < e; t++) this.instances[t].webGL_texture = this.webGL_texture
        }, e.unloadTextures = function() {
            this.is_family || this.instances.length || !this.webGL_texture || (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
        }, e.preloadCanvas2D = function(t) {
            t.drawImage(this.texture_img, 0, 0)
        }, t.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var i = t.Instance.prototype;

        function r(t) {
            return t.replace(/\s\s*$/, "")
        }
        i.onDestroy = function() {
            var t;
            u(this.lines), t = this.clipList, o(d, t, !1),
                function(t) {
                    o(f, t, !1)
                }(this.clipUV), cr.wipe(this.characterWidthList)
        }, i.onCreate = function() {
            this.texture_img = this.type.texture_img, this.characterWidth = this.properties[0], this.characterHeight = this.properties[1], this.characterSet = this.properties[2], this.text = this.properties[3], this.characterScale = this.properties[4], this.visible = 0 === this.properties[5], this.halign = this.properties[6] / 2, this.valign = this.properties[7] / 2, this.wrapbyword = 0 === this.properties[9], this.characterSpacing = this.properties[10], this.lineHeight = this.properties[11], this.textWidth = 0, this.textHeight = 0, this.recycled ? (cr.clearArray(this.lines), cr.wipe(this.clipList), cr.wipe(this.clipUV), cr.wipe(this.characterWidthList)) : (this.lines = [], this.clipList = {}, this.clipUV = {}, this.characterWidthList = {}), this.text_changed = !0, this.lastwrapwidth = this.width, this.runtime.glwrap && (this.type.webGL_texture || (this.type.webGL_texture = this.runtime.glwrap.loadTexture(this.type.texture_img, !1, this.runtime.linearSampling, this.type.texture_pixelformat)), this.webGL_texture = this.type.webGL_texture), this.SplitSheet()
        }, i.saveToJSON = function() {
            var t = {
                t: this.text,
                csc: this.characterScale,
                csp: this.characterSpacing,
                lh: this.lineHeight,
                tw: this.textWidth,
                th: this.textHeight,
                lrt: this.last_render_tick,
                ha: this.halign,
                va: this.valign,
                cw: {}
            };
            for (var e in this.characterWidthList) t.cw[e] = this.characterWidthList[e];
            return t
        }, i.loadFromJSON = function(t) {
            for (var e in this.text = t.t, this.characterScale = t.csc, this.characterSpacing = t.csp, this.lineHeight = t.lh, this.textWidth = t.tw, this.textHeight = t.th, this.last_render_tick = t.lrt, t.hasOwnProperty("ha") && (this.halign = t.ha), t.hasOwnProperty("va") && (this.valign = t.va), t.cw) this.characterWidthList[e] = t.cw[e];
            this.text_changed = !0, this.lastwrapwidth = this.width
        };
        var n = 1e3;

        function s(t, e) {
            return t.length ? t.pop() : new e
        }

        function a(t, e) {
            t.length < n && t.push(e)
        }

        function o(t, e, i) {
            if (i) {
                var r, n;
                for (r = 0, n = e.length; r < n; r++) a(t, e[r]);
                cr.clearArray(e)
            } else {
                var s;
                for (s in e) Object.prototype.hasOwnProperty.call(e, s) && (a(t, e[s]), delete e[s])
            }
        }

        function h(t, e, i) {
            var n, s = t.lines;
            i = r(i), e >= s.length && s.push(l()), (n = s[e]).text = i, n.width = t.measureWidth(i), t.textWidth = cr.max(t.textWidth, n.width)
        }
        var c = [];

        function l() {
            return s(c, Object)
        }

        function u(t) {
            o(c, t, !0)
        }

        function p(t, e, i, r, n, a) {
            void 0 === t[e] && (t[e] = s(d, Object)), t[e].x = i, t[e].y = r, t[e].w = n, t[e].h = a
        }
        var d = [];
        var f = [];
        i.SplitSheet = function() {
            for (var t, e, i, r, n, a, o = this.texture_img, h = o.width, c = o.height, l = this.characterWidth, u = this.characterHeight, d = l / h, g = u / c, y = this.characterSet, m = Math.floor(h / l), _ = Math.floor(c / u), v = 0; v < y.length && !(v >= m * _); v++) {
                var b = v % m,
                    w = Math.floor(v / m),
                    x = y.charAt(v);
                this.runtime.glwrap ? (t = this.clipUV, i = b * d, r = w * g, n = (b + 1) * d, a = (w + 1) * g, void 0 === t[e = x] && (t[e] = s(f, cr.rect)), t[e].left = i, t[e].top = r, t[e].right = n, t[e].bottom = a) : p(this.clipList, x, b * l, w * u, l, u)
            }
        };
        var g = [];
        t.TokeniseWords = function(t) {
            cr.clearArray(g);
            for (var e, i = "", r = 0; r < t.length;)
                if ("\n" === (e = t.charAt(r))) i.length && (g.push(i), i = ""), g.push("\n"), ++r;
                else if (" " === e || "\t" === e || "-" === e) {
                do {
                    i += t.charAt(r), r++
                } while (r < t.length && (" " === t.charAt(r) || "\t" === t.charAt(r)));
                g.push(i), i = ""
            } else r < t.length && (i += e, r++);
            i.length && g.push(i)
        }, t.WordWrap = function(t) {
            var e = t.text,
                i = t.lines;
            if (e && e.length) {
                var r = t.width;
                if (r <= 2) u(i);
                else {
                    var n = t.characterWidth,
                        s = t.characterScale,
                        a = t.characterSpacing;
                    if (e.length * (n * s + a) - a <= r && -1 === e.indexOf("\n")) {
                        var o = t.measureWidth(e);
                        if (o <= r) return u(i), i.push(l()), i[0].text = e, i[0].width = o, t.textWidth = o, void(t.textHeight = t.characterHeight * s + t.lineHeight)
                    }
                    t.wrapbyword;
                    this.WrapText(t), t.textHeight = i.length * (t.characterHeight * s + t.lineHeight)
                }
            } else u(i)
        }, t.WrapText = function(t) {
            var e, i = t.wrapbyword,
                n = t.text,
                s = t.lines,
                o = t.width;
            i ? (this.TokeniseWords(n), e = g) : e = n;
            var l, u, p, d = "",
                f = 0,
                y = !1;
            for (u = 0; u < e.length; u++) "\n" !== e[u] ? (y = !1, l = d, d += e[u], t.measureWidth(r(d)) > o && ("" === l ? (h(t, f, d), d = "", y = !0) : (h(t, f, l), d = e[u]), f++, i || " " !== d || (d = ""))) : (!0 === y ? y = !1 : (h(t, f, d), f++), d = "");
            for (r(d).length && (h(t, f, d), f++), u = f; u < s.length; u++) p = s[u], a(c, p);
            s.length = f
        }, i.measureWidth = function(t) {
            for (var e = this.characterSpacing, i = t.length, r = 0, n = 0; n < i; n++) r += this.getCharacterWidth(t.charAt(n)) * this.characterScale + e;
            return r -= r > 0 ? e : 0
        }, i.getCharacterWidth = function(t) {
            var e = this.characterWidthList;
            return void 0 !== e[t] ? e[t] : this.characterWidth
        }, i.rebuildText = function() {
            (this.text_changed || this.width !== this.lastwrapwidth) && (this.textWidth = 0, this.textHeight = 0, this.type.plugin.WordWrap(this), this.text_changed = !1, this.lastwrapwidth = this.width)
        };
        i.draw = function(t, e) {
            var i = this.texture_img;
            if ("" !== this.text && null != i) {
                if (this.rebuildText(), this.height < this.characterHeight * this.characterScale + this.lineHeight) return;
                t.globalAlpha = this.opacity;
                var r = this.x,
                    n = this.y;
                this.runtime.pixel_rounding && (r = Math.round(r), n = Math.round(n));
                var s = this.layer.viewLeft,
                    a = this.layer.viewTop,
                    o = this.layer.viewRight,
                    h = this.layer.viewBottom;
                t.save(), t.translate(r, n), t.rotate(this.angle);
                for (var c, l, u, p, d = this.angle, f = this.halign, g = this.valign, y = this.characterScale, m = this.characterHeight * y, _ = this.lineHeight, v = this.characterSpacing, b = this.lines, w = this.textHeight, x = g * cr.max(0, this.height - w), S = -this.hotspotX * this.width, T = -this.hotspotY * this.height, O = T += x, C = 0; C < b.length; C++) {
                    var A = b[C].text,
                        k = b[C].width;
                    if (l = S + f * cr.max(0, this.width - k), O += _, 0 === d && n + O + m < a) O += m;
                    else {
                        for (var E = 0; E < A.length; E++) {
                            var P = A.charAt(E);
                            c = this.getCharacterWidth(P);
                            var L = this.clipList[P];
                            if (0 === d && r + l + c * y + v < s) l += c * y + v;
                            else {
                                if (l + c * y > this.width + 1e-5) break;
                                if (void 0 !== L && (u = l, p = O, 0 === d && 1 === y && (u = Math.round(u), p = Math.round(p)), t.drawImage(this.texture_img, L.x, L.y, L.w, L.h, u, p, L.w * y, L.h * y)), l += c * y + v, 0 === d && r + l > o) break
                            }
                        }
                        if (O += m, 0 === d && (O + m + _ > this.height || n + O > h)) break
                    }
                }
                t.restore()
            }
        };
        var y = new cr.quad;

        function m(t, e, i) {
            var r;
            r = t.tlx * e - t.tly * i, t.tly = t.tly * e + t.tlx * i, t.tlx = r, r = t.trx * e - t.try_ * i, t.try_ = t.try_ * e + t.trx * i, t.trx = r, r = t.blx * e - t.bly * i, t.bly = t.bly * e + t.blx * i, t.blx = r, r = t.brx * e - t.bry * i, t.bry = t.bry * e + t.brx * i, t.brx = r
        }

        function _() {}

        function v() {}

        function b() {}
        i.drawGL = function(t) {
            if (t.setTexture(this.webGL_texture), t.setOpacity(this.opacity), this.text && (this.rebuildText(), !(this.height < this.characterHeight * this.characterScale + this.lineHeight))) {
                this.update_bbox();
                var e = this.bquad,
                    i = 0,
                    r = 0;
                this.runtime.pixel_rounding && (i = Math.round(this.x) - this.x, r = Math.round(this.y) - this.y);
                var n, s, a, o = this.layer.viewLeft,
                    h = this.layer.viewTop,
                    c = this.layer.viewRight,
                    l = this.layer.viewBottom,
                    u = this.angle,
                    p = this.halign,
                    d = this.valign,
                    f = this.characterScale,
                    g = this.characterHeight * f,
                    _ = this.lineHeight,
                    v = this.characterSpacing,
                    b = this.lines,
                    w = this.textHeight;
                0 !== u && (s = Math.cos(u), a = Math.sin(u));
                for (var x, S, T, O = d * cr.max(0, this.height - w), C = e.tlx + i, A = e.tly + r, k = O, E = 0; E < b.length; E++) {
                    var P = b[E].text,
                        L = b[E].width;
                    if (x = p * cr.max(0, this.width - L), k += _, 0 === u && A + k + g < h) k += g;
                    else {
                        for (var I = 0; I < P.length; I++) {
                            var R = P.charAt(I);
                            n = this.getCharacterWidth(R);
                            var N = this.clipUV[R];
                            if (0 === u && C + x + n * f + v < o) x += n * f + v;
                            else {
                                if (x + n * f > this.width + 1e-5) break;
                                if (void 0 !== N) {
                                    var B = this.characterWidth * f,
                                        M = this.characterHeight * f;
                                    S = x, T = k, 0 === u && 1 === f && (S = Math.round(S), T = Math.round(T)), y.tlx = S, y.tly = T, y.trx = S + B, y.try_ = T, y.blx = S, y.bly = T + M, y.brx = S + B, y.bry = T + M, 0 !== u && m(y, s, a), y.offset(C, A), t.quadTex(y.tlx, y.tly, y.trx, y.try_, y.brx, y.bry, y.blx, y.bly, N)
                                }
                                if (x += n * f + v, 0 === u && C + x > c) break
                            }
                        }
                        if (k += g, 0 === u && (k + g + _ > this.height || A + k > l)) break
                    }
                }
            }
        }, _.prototype.CompareText = function(t, e) {
            return e ? this.text == t : cr.equals_nocase(this.text, t)
        }, t.cnds = new _, v.prototype.SetText = function(t) {
            cr.is_number(t) && t < 1e9 && (t = Math.round(1e10 * t) / 1e10);
            var e = t.toString();
            this.text !== e && (this.text = e, this.text_changed = !0, this.runtime.redraw = !0)
        }, v.prototype.AppendText = function(t) {
            cr.is_number(t) && (t = Math.round(1e10 * t) / 1e10);
            var e = t.toString();
            e && (this.text += e, this.text_changed = !0, this.runtime.redraw = !0)
        }, v.prototype.SetScale = function(t) {
            t !== this.characterScale && (this.characterScale = t, this.text_changed = !0, this.runtime.redraw = !0)
        }, v.prototype.SetCharacterSpacing = function(t) {
            t !== this.CharacterSpacing && (this.characterSpacing = t, this.text_changed = !0, this.runtime.redraw = !0)
        }, v.prototype.SetLineHeight = function(t) {
            t !== this.lineHeight && (this.lineHeight = t, this.text_changed = !0, this.runtime.redraw = !0)
        }, i.SetCharWidth = function(t, e) {
            var i = parseInt(e, 10);
            this.characterWidthList[t] !== i && (this.characterWidthList[t] = i, this.text_changed = !0, this.runtime.redraw = !0)
        }, v.prototype.SetCharacterWidth = function(t, e) {
            if ("" !== t)
                for (var i = 0; i < t.length; i++) this.SetCharWidth(t.charAt(i), e)
        }, v.prototype.SetEffect = function(t) {
            this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, v.prototype.SetHAlign = function(t) {
            this.halign = t / 2, this.text_changed = !0, this.runtime.redraw = !0
        }, v.prototype.SetVAlign = function(t) {
            this.valign = t / 2, this.text_changed = !0, this.runtime.redraw = !0
        }, t.acts = new v, b.prototype.CharacterWidth = function(t, e) {
            t.set_int(this.getCharacterWidth(e))
        }, b.prototype.CharacterHeight = function(t) {
            t.set_int(this.characterHeight)
        }, b.prototype.CharacterScale = function(t) {
            t.set_float(this.characterScale)
        }, b.prototype.CharacterSpacing = function(t) {
            t.set_int(this.characterSpacing)
        }, b.prototype.LineHeight = function(t) {
            t.set_int(this.lineHeight)
        }, b.prototype.Text = function(t) {
            t.set_string(this.text)
        }, b.prototype.TextWidth = function(t) {
            this.rebuildText(), t.set_float(this.textWidth)
        }, b.prototype.TextHeight = function(t) {
            this.rebuildText(), t.set_float(this.textHeight)
        }, t.exps = new b
    }(), cr.plugins_.TiledBg = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.plugins_.TiledBg.prototype;
        t.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var e = t.Type.prototype;
        e.onCreate = function() {
            this.is_family || (this.texture_img = new Image, this.texture_img.cr_filesize = this.texture_filesize, this.runtime.waitForImageLoad(this.texture_img, this.texture_file), this.pattern = null, this.webGL_texture = null)
        }, e.onLostWebGLContext = function() {
            this.is_family || (this.webGL_texture = null)
        }, e.onRestoreWebGLContext = function() {
            var t, e;
            if (!this.is_family && this.instances.length)
                for (this.webGL_texture || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat)), t = 0, e = this.instances.length; t < e; t++) this.instances[t].webGL_texture = this.webGL_texture
        }, e.loadTextures = function() {
            this.is_family || this.webGL_texture || !this.runtime.glwrap || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat))
        }, e.unloadTextures = function() {
            this.is_family || this.instances.length || !this.webGL_texture || (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
        }, e.preloadCanvas2D = function(t) {
            t.drawImage(this.texture_img, 0, 0)
        }, t.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var i = t.Instance.prototype;

        function r() {}

        function n() {}

        function s() {}
        i.onCreate = function() {
            this.visible = 0 === this.properties[0], this.rcTex = new cr.rect(0, 0, 0, 0), this.has_own_texture = !1, this.texture_img = this.type.texture_img, this.runtime.glwrap ? (this.type.loadTextures(), this.webGL_texture = this.type.webGL_texture) : (this.type.pattern || (this.type.pattern = this.runtime.ctx.createPattern(this.type.texture_img, "repeat")), this.pattern = this.type.pattern)
        }, i.afterLoad = function() {
            this.has_own_texture = !1, this.texture_img = this.type.texture_img
        }, i.onDestroy = function() {
            this.runtime.glwrap && this.has_own_texture && this.webGL_texture && (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
        }, i.draw = function(t) {
            t.globalAlpha = this.opacity, t.save(), t.fillStyle = this.pattern;
            var e = this.x,
                i = this.y;
            this.runtime.pixel_rounding && (e = Math.round(e), i = Math.round(i));
            var r = -this.hotspotX * this.width,
                n = -this.hotspotY * this.height,
                s = r % this.texture_img.width,
                a = n % this.texture_img.height;
            s < 0 && (s += this.texture_img.width), a < 0 && (a += this.texture_img.height), t.translate(e, i), t.rotate(this.angle), t.translate(s, a), t.fillRect(r - s, n - a, this.width, this.height), t.restore()
        }, i.drawGL_earlyZPass = function(t) {
            this.drawGL(t)
        }, i.drawGL = function(t) {
            t.setTexture(this.webGL_texture), t.setOpacity(this.opacity);
            var e = this.rcTex;
            e.right = this.width / this.texture_img.width, e.bottom = this.height / this.texture_img.height;
            var i = this.bquad;
            if (this.runtime.pixel_rounding) {
                var r = Math.round(this.x) - this.x,
                    n = Math.round(this.y) - this.y;
                t.quadTex(i.tlx + r, i.tly + n, i.trx + r, i.try_ + n, i.brx + r, i.bry + n, i.blx + r, i.bly + n, e)
            } else t.quadTex(i.tlx, i.tly, i.trx, i.try_, i.brx, i.bry, i.blx, i.bly, e)
        }, r.prototype.OnURLLoaded = function() {
            return !0
        }, t.cnds = new r, n.prototype.SetEffect = function(t) {
            this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, n.prototype.LoadURL = function(t, e) {
            var i = new Image,
                r = this;
            i.onload = function() {
                r.texture_img = i, r.runtime.glwrap ? (r.has_own_texture && r.webGL_texture && r.runtime.glwrap.deleteTexture(r.webGL_texture), r.webGL_texture = r.runtime.glwrap.loadTexture(i, !0, r.runtime.linearSampling)) : r.pattern = r.runtime.ctx.createPattern(i, "repeat"), r.has_own_texture = !0, r.runtime.redraw = !0, r.runtime.trigger(cr.plugins_.TiledBg.prototype.cnds.OnURLLoaded, r)
            }, "data:" !== t.substr(0, 5) && 0 === e && (i.crossOrigin = "anonymous"), this.runtime.setImageSrc(i, t)
        }, t.acts = new n, s.prototype.ImageWidth = function(t) {
            t.set_float(this.texture_img.width)
        }, s.prototype.ImageHeight = function(t) {
            t.set_float(this.texture_img.height)
        }, t.exps = new s
    }(), cr.plugins_.Touch = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.plugins_.Touch.prototype;
        t.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function() {}, t.Instance = function(t) {
            this.type = t, this.runtime = t.runtime, this.touches = [], this.mouseDown = !1
        };
        var e = t.Instance.prototype,
            i = {
                left: 0,
                top: 0
            };
        e.findTouch = function(t) {
            var e, i;
            for (e = 0, i = this.touches.length; e < i; e++)
                if (this.touches[e].id === t) return e;
            return -1
        };
        var r = 0,
            n = 0,
            s = 0;

        function a(t) {
            r = t.x, n = t.y, s = t.z
        }
        var o = [];

        function h(t, e, i, r) {
            var n;
            return (n = o.length ? o.pop() : new l).init(t, e, i, r), n
        }

        function c(t) {
            o.length < 100 && o.push(t)
        }

        function l() {
            this.starttime = 0, this.time = 0, this.lasttime = 0, this.startx = 0, this.starty = 0, this.x = 0, this.y = 0, this.lastx = 0, this.lasty = 0, this.id = 0, this.startindex = 0, this.triggeredHold = !1, this.tooFarForHold = !1
        }
        l.prototype.init = function(t, e, i, r) {
            var n = cr.performance_now();
            this.time = n, this.lasttime = n, this.starttime = n, this.startx = t, this.starty = e, this.x = t, this.y = e, this.lastx = t, this.lasty = e, this.width = 0, this.height = 0, this.pressure = 0, this.id = i, this.startindex = r, this.triggeredHold = !1, this.tooFarForHold = !1
        }, l.prototype.update = function(t, e, i, r, n, s) {
            this.lasttime = this.time, this.time = t, this.lastx = this.x, this.lasty = this.y, this.x = e, this.y = i, this.width = r, this.height = n, this.pressure = s, !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) >= 15 && (this.tooFarForHold = !0)
        }, l.prototype.maybeTriggerHold = function(t, e) {
            this.triggeredHold || cr.performance_now() - this.starttime >= 500 && !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) < 15 && (this.triggeredHold = !0, t.trigger_index = this.startindex, t.trigger_id = this.id, t.getTouchIndex = e, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnHoldGesture, t), t.curTouchX = this.x, t.curTouchY = this.y, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnHoldGestureObject, t), t.getTouchIndex = 0)
        };
        var u = -1e3,
            p = -1e3,
            d = -1e4;
        l.prototype.maybeTriggerTap = function(t, e) {
            if (!this.triggeredHold) {
                var i = cr.performance_now();
                i - this.starttime <= 333 && !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) < 15 && (t.trigger_index = this.startindex, t.trigger_id = this.id, t.getTouchIndex = e, i - d <= 666 && cr.distanceTo(u, p, this.x, this.y) < 25 ? (t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnDoubleTapGesture, t), t.curTouchX = this.x, t.curTouchY = this.y, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnDoubleTapGestureObject, t), u = -1e3, p = -1e3, d = -1e4) : (t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTapGesture, t), t.curTouchX = this.x, t.curTouchY = this.y, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTapGestureObject, t), u = this.x, p = this.y, d = i), t.getTouchIndex = 0)
            }
        }, e.onCreate = function() {
            this,
            this.isWindows8 = !(void 0 === window.c2isWindows8 || !window.c2isWindows8),
            this.orient_alpha = 0,
            this.orient_beta = 0,
            this.orient_gamma = 0,
            this.acc_g_x = 0,
            this.acc_g_y = 0,
            this.acc_g_z = 0,
            this.acc_x = 0,
            this.acc_y = 0,
            this.acc_z = 0,
            this.curTouchX = 0,
            this.curTouchY = 0,
            this.trigger_index = 0,
            this.trigger_id = 0,
            this.getTouchIndex = 0,
            this.useMouseInput = 0 !== this.properties[0];
            var t = this.runtime.fullscreen_mode > 0 ? document : this.runtime.canvas,
                e = document;this.runtime.isDirectCanvas ? e = t = window.Canvas : this.runtime.isCocoonJs && (e = t = window);
            var i = this;
            if ("undefined" != typeof PointerEvent ? (t.addEventListener("pointerdown", function(t) {
                    i.onPointerStart(t)
                }, !1), t.addEventListener("pointermove", function(t) {
                    i.onPointerMove(t)
                }, !1), e.addEventListener("pointerup", function(t) {
                    i.onPointerEnd(t, !1)
                }, !1), e.addEventListener("pointercancel", function(t) {
                    i.onPointerEnd(t, !0)
                }, !1), this.runtime.canvas && (this.runtime.canvas.addEventListener("MSGestureHold", function(t) {
                    t.preventDefault()
                }, !1), document.addEventListener("MSGestureHold", function(t) {
                    t.preventDefault()
                }, !1), this.runtime.canvas.addEventListener("gesturehold", function(t) {
                    t.preventDefault()
                }, !1), document.addEventListener("gesturehold", function(t) {
                    t.preventDefault()
                }, !1))) : window.navigator.msPointerEnabled ? (t.addEventListener("MSPointerDown", function(t) {
                    i.onPointerStart(t)
                }, !1), t.addEventListener("MSPointerMove", function(t) {
                    i.onPointerMove(t)
                }, !1), e.addEventListener("MSPointerUp", function(t) {
                    i.onPointerEnd(t, !1)
                }, !1), e.addEventListener("MSPointerCancel", function(t) {
                    i.onPointerEnd(t, !0)
                }, !1), this.runtime.canvas && (this.runtime.canvas.addEventListener("MSGestureHold", function(t) {
                    t.preventDefault()
                }, !1), document.addEventListener("MSGestureHold", function(t) {
                    t.preventDefault()
                }, !1))) : (t.addEventListener("touchstart", function(t) {
                    i.onTouchStart(t)
                }, !1), t.addEventListener("touchmove", function(t) {
                    i.onTouchMove(t)
                }, !1), e.addEventListener("touchend", function(t) {
                    i.onTouchEnd(t, !1)
                }, !1), e.addEventListener("touchcancel", function(t) {
                    i.onTouchEnd(t, !0)
                }, !1)), this.isWindows8) {
                var r = function(t) {
                        var e = t.reading;
                        i.acc_x = e.accelerationX, i.acc_y = e.accelerationY, i.acc_z = e.accelerationZ
                    },
                    n = function(t) {
                        var e = t.reading;
                        i.orient_alpha = e.yawDegrees, i.orient_beta = e.pitchDegrees, i.orient_gamma = e.rollDegrees
                    },
                    s = Windows.Devices.Sensors.Accelerometer.getDefault();
                s && (s.reportInterval = Math.max(s.minimumReportInterval, 16), s.addEventListener("readingchanged", r));
                var o = Windows.Devices.Sensors.Inclinometer.getDefault();
                o && (o.reportInterval = Math.max(o.minimumReportInterval, 16), o.addEventListener("readingchanged", n)), document.addEventListener("visibilitychange", function(t) {
                    document.hidden || document.msHidden ? (s && s.removeEventListener("readingchanged", r), o && o.removeEventListener("readingchanged", n)) : (s && s.addEventListener("readingchanged", r), o && o.addEventListener("readingchanged", n))
                }, !1)
            } else window.addEventListener("deviceorientation", function(t) {
                i.orient_alpha = t.alpha || 0, i.orient_beta = t.beta || 0, i.orient_gamma = t.gamma || 0
            }, !1),
            window.addEventListener("devicemotion", function(t) {
                t.accelerationIncludingGravity && (i.acc_g_x = t.accelerationIncludingGravity.x || 0, i.acc_g_y = t.accelerationIncludingGravity.y || 0, i.acc_g_z = t.accelerationIncludingGravity.z || 0), t.acceleration && (i.acc_x = t.acceleration.x || 0, i.acc_y = t.acceleration.y || 0, i.acc_z = t.acceleration.z || 0)
            }, !1);this.useMouseInput && !this.runtime.isDomFree && (jQuery(document).mousemove(function(t) {
                i.onMouseMove(t)
            }), jQuery(document).mousedown(function(t) {
                i.onMouseDown(t)
            }), jQuery(document).mouseup(function(t) {
                i.onMouseUp(t)
            })),
            !this.runtime.isiOS && this.runtime.isCordova && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(a, null, {
                frequency: 40
            }),
            this.runtime.tick2Me(this)
        }, e.onPointerMove = function(t) {
            if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType) {
                t.preventDefault && t.preventDefault();
                var e = this.findTouch(t.pointerId),
                    r = cr.performance_now();
                if (e >= 0) {
                    var n = this.runtime.isDomFree ? i : jQuery(this.runtime.canvas).offset(),
                        s = this.touches[e];
                    if (r - s.time < 2) return;
                    s.update(r, t.pageX - n.left, t.pageY - n.top, t.width || 0, t.height || 0, t.pressure || 0)
                }
            }
        }, e.onPointerStart = function(t) {
            if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType) {
                t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault();
                var e = this.runtime.isDomFree ? i : jQuery(this.runtime.canvas).offset(),
                    r = t.pageX - e.left,
                    n = t.pageY - e.top;
                cr.performance_now();
                this.trigger_index = this.touches.length, this.trigger_id = t.pointerId, this.touches.push(h(r, n, t.pointerId, this.trigger_index)), this.runtime.isInUserInputEvent = !0, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchStart, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchStart, this), this.curTouchX = r, this.curTouchY = n, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchObject, this), this.runtime.isInUserInputEvent = !1
            }
        }, e.onPointerEnd = function(t, e) {
            if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType) {
                t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault();
                var i = this.findTouch(t.pointerId);
                this.trigger_index = i >= 0 ? this.touches[i].startindex : -1, this.trigger_id = i >= 0 ? this.touches[i].id : -1, this.runtime.isInUserInputEvent = !0, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchEnd, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchEnd, this), i >= 0 && (e || this.touches[i].maybeTriggerTap(this, i), c(this.touches[i]), this.touches.splice(i, 1)), this.runtime.isInUserInputEvent = !1
            }
        }, e.onTouchMove = function(t) {
            t.preventDefault && t.preventDefault();
            var e, r, n, s, a = cr.performance_now();
            for (e = 0, r = t.changedTouches.length; e < r; e++) {
                n = t.changedTouches[e];
                var o = this.findTouch(n.identifier);
                if (o >= 0) {
                    var h = this.runtime.isDomFree ? i : jQuery(this.runtime.canvas).offset();
                    if (a - (s = this.touches[o]).time < 2) continue;
                    var c = 2 * (n.radiusX || n.webkitRadiusX || n.mozRadiusX || n.msRadiusX || 0),
                        l = 2 * (n.radiusY || n.webkitRadiusY || n.mozRadiusY || n.msRadiusY || 0),
                        u = n.force || n.webkitForce || n.mozForce || n.msForce || 0;
                    s.update(a, n.pageX - h.left, n.pageY - h.top, c, l, u)
                }
            }
        }, e.onTouchStart = function(t) {
            t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault();
            var e, r, n, s = this.runtime.isDomFree ? i : jQuery(this.runtime.canvas).offset();
            cr.performance_now();
            for (this.runtime.isInUserInputEvent = !0, e = 0, r = t.changedTouches.length; e < r; e++)
                if (n = t.changedTouches[e], -1 === this.findTouch(n.identifier)) {
                    var a = n.pageX - s.left,
                        o = n.pageY - s.top;
                    this.trigger_index = this.touches.length, this.trigger_id = n.identifier, this.touches.push(h(a, o, n.identifier, this.trigger_index)), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchStart, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchStart, this), this.curTouchX = a, this.curTouchY = o, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchObject, this)
                }
            this.runtime.isInUserInputEvent = !1
        }, e.onTouchEnd = function(t, e) {
            var i, r, n, s;
            for (t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault(), this.runtime.isInUserInputEvent = !0, i = 0, r = t.changedTouches.length; i < r; i++) n = t.changedTouches[i], (s = this.findTouch(n.identifier)) >= 0 && (this.trigger_index = this.touches[s].startindex, this.trigger_id = this.touches[s].id, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchEnd, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchEnd, this), e || this.touches[s].maybeTriggerTap(this, s), c(this.touches[s]), this.touches.splice(s, 1));
            this.runtime.isInUserInputEvent = !1
        }, e.getAlpha = function() {
            return this.runtime.isCordova && 0 === this.orient_alpha && 0 !== s ? 90 * s : this.orient_alpha
        }, e.getBeta = function() {
            return this.runtime.isCordova && 0 === this.orient_beta && 0 !== n ? 90 * n : this.orient_beta
        }, e.getGamma = function() {
            return this.runtime.isCordova && 0 === this.orient_gamma && 0 !== r ? 90 * r : this.orient_gamma
        };

        function f(t) {
            return t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents || t.originalEvent && t.originalEvent.sourceCapabilities && t.originalEvent.sourceCapabilities.firesTouchEvents
        }

        function g() {}
        e.onMouseDown = function(t) {
            if (!f(t)) {
                var e = {
                    changedTouches: [{
                        pageX: t.pageX,
                        pageY: t.pageY,
                        identifier: 0
                    }]
                };
                this.onTouchStart(e), this.mouseDown = !0
            }
        }, e.onMouseMove = function(t) {
            if (this.mouseDown && !f(t)) {
                var e = {
                    changedTouches: [{
                        pageX: t.pageX,
                        pageY: t.pageY,
                        identifier: 0
                    }]
                };
                this.onTouchMove(e)
            }
        }, e.onMouseUp = function(t) {
            if (t.preventDefault && this.runtime.had_a_click && !this.runtime.isMobile && t.preventDefault(), this.runtime.had_a_click = !0, !f(t)) {
                var e = {
                    changedTouches: [{
                        pageX: t.pageX,
                        pageY: t.pageY,
                        identifier: 0
                    }]
                };
                this.onTouchEnd(e), this.mouseDown = !1
            }
        }, e.tick2 = function() {
            var t, e, i, r = cr.performance_now();
            for (t = 0, e = this.touches.length; t < e; ++t)(i = this.touches[t]).time <= r - 50 && (i.lasttime = r), i.maybeTriggerHold(this, t)
        }, g.prototype.OnTouchStart = function() {
            return !0
        }, g.prototype.OnTouchEnd = function() {
            return !0
        }, g.prototype.IsInTouch = function() {
            return this.touches.length
        }, g.prototype.OnTouchObject = function(t) {
            return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
        };
        var y = [];

        function m() {}
        g.prototype.IsTouchingObject = function(t) {
            if (!t) return !1;
            var e, i, r, n, s, a, o = t.getCurrentSol(),
                h = o.getObjects();
            for (r = 0, n = h.length; r < n; r++) {
                var c = h[r];
                for (c.update_bbox(), s = 0, a = this.touches.length; s < a; s++) {
                    var l = this.touches[s];
                    if (e = c.layer.canvasToLayer(l.x, l.y, !0), i = c.layer.canvasToLayer(l.x, l.y, !1), c.contains_pt(e, i)) {
                        y.push(c);
                        break
                    }
                }
            }
            return !!y.length && (o.select_all = !1, cr.shallowAssignArray(o.instances, y), t.applySolToContainer(), cr.clearArray(y), !0)
        }, g.prototype.CompareTouchSpeed = function(t, e, i) {
            if ((t = Math.floor(t)) < 0 || t >= this.touches.length) return !1;
            var r = this.touches[t],
                n = cr.distanceTo(r.x, r.y, r.lastx, r.lasty),
                s = (r.time - r.lasttime) / 1e3,
                a = 0;
            return s > 0 && (a = n / s), cr.do_cmp(a, e, i)
        }, g.prototype.OrientationSupported = function() {
            return void 0 !== window.DeviceOrientationEvent
        }, g.prototype.MotionSupported = function() {
            return void 0 !== window.DeviceMotionEvent
        }, g.prototype.CompareOrientation = function(t, e, i) {
            var r = 0;
            return r = 0 === t ? this.getAlpha() : 1 === t ? this.getBeta() : this.getGamma(), cr.do_cmp(r, e, i)
        }, g.prototype.CompareAcceleration = function(t, e, i) {
            var r = 0;
            return 0 === t ? r = this.acc_g_x : 1 === t ? r = this.acc_g_y : 2 === t ? r = this.acc_g_z : 3 === t ? r = this.acc_x : 4 === t ? r = this.acc_y : 5 === t && (r = this.acc_z), cr.do_cmp(r, e, i)
        }, g.prototype.OnNthTouchStart = function(t) {
            return (t = Math.floor(t)) === this.trigger_index
        }, g.prototype.OnNthTouchEnd = function(t) {
            return (t = Math.floor(t)) === this.trigger_index
        }, g.prototype.HasNthTouch = function(t) {
            return t = Math.floor(t), this.touches.length >= t + 1
        }, g.prototype.OnHoldGesture = function() {
            return !0
        }, g.prototype.OnTapGesture = function() {
            return !0
        }, g.prototype.OnDoubleTapGesture = function() {
            return !0
        }, g.prototype.OnHoldGestureObject = function(t) {
            return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
        }, g.prototype.OnTapGestureObject = function(t) {
            return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
        }, g.prototype.OnDoubleTapGestureObject = function(t) {
            return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
        }, t.cnds = new g, m.prototype.TouchCount = function(t) {
            t.set_int(this.touches.length)
        }, m.prototype.X = function(t, e) {
            var i, r, n, s, a, o = this.getTouchIndex;
            o < 0 || o >= this.touches.length ? t.set_float(0) : cr.is_undefined(e) ? (r = (i = this.runtime.getLayerByNumber(0)).scale, n = i.zoomRate, s = i.parallaxX, a = i.angle, i.scale = 1, i.zoomRate = 1, i.parallaxX = 1, i.angle = 0, t.set_float(i.canvasToLayer(this.touches[o].x, this.touches[o].y, !0)), i.scale = r, i.zoomRate = n, i.parallaxX = s, i.angle = a) : (i = cr.is_number(e) ? this.runtime.getLayerByNumber(e) : this.runtime.getLayerByName(e)) ? t.set_float(i.canvasToLayer(this.touches[o].x, this.touches[o].y, !0)) : t.set_float(0)
        }, m.prototype.XAt = function(t, e, i) {
            var r, n, s, a, o;
            (e = Math.floor(e)) < 0 || e >= this.touches.length ? t.set_float(0) : cr.is_undefined(i) ? (n = (r = this.runtime.getLayerByNumber(0)).scale, s = r.zoomRate, a = r.parallaxX, o = r.angle, r.scale = 1, r.zoomRate = 1, r.parallaxX = 1, r.angle = 0, t.set_float(r.canvasToLayer(this.touches[e].x, this.touches[e].y, !0)), r.scale = n, r.zoomRate = s, r.parallaxX = a, r.angle = o) : (r = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i)) ? t.set_float(r.canvasToLayer(this.touches[e].x, this.touches[e].y, !0)) : t.set_float(0)
        }, m.prototype.XForID = function(t, e, i) {
            var r = this.findTouch(e);
            if (r < 0) t.set_float(0);
            else {
                var n, s, a, o, h, c = this.touches[r];
                cr.is_undefined(i) ? (s = (n = this.runtime.getLayerByNumber(0)).scale, a = n.zoomRate, o = n.parallaxX, h = n.angle, n.scale = 1, n.zoomRate = 1, n.parallaxX = 1, n.angle = 0, t.set_float(n.canvasToLayer(c.x, c.y, !0)), n.scale = s, n.zoomRate = a, n.parallaxX = o, n.angle = h) : (n = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i)) ? t.set_float(n.canvasToLayer(c.x, c.y, !0)) : t.set_float(0)
            }
        }, m.prototype.Y = function(t, e) {
            var i, r, n, s, a, o = this.getTouchIndex;
            o < 0 || o >= this.touches.length ? t.set_float(0) : cr.is_undefined(e) ? (r = (i = this.runtime.getLayerByNumber(0)).scale, n = i.zoomRate, s = i.parallaxY, a = i.angle, i.scale = 1, i.zoomRate = 1, i.parallaxY = 1, i.angle = 0, t.set_float(i.canvasToLayer(this.touches[o].x, this.touches[o].y, !1)), i.scale = r, i.zoomRate = n, i.parallaxY = s, i.angle = a) : (i = cr.is_number(e) ? this.runtime.getLayerByNumber(e) : this.runtime.getLayerByName(e)) ? t.set_float(i.canvasToLayer(this.touches[o].x, this.touches[o].y, !1)) : t.set_float(0)
        }, m.prototype.YAt = function(t, e, i) {
            var r, n, s, a, o;
            (e = Math.floor(e)) < 0 || e >= this.touches.length ? t.set_float(0) : cr.is_undefined(i) ? (n = (r = this.runtime.getLayerByNumber(0)).scale, s = r.zoomRate, a = r.parallaxY, o = r.angle, r.scale = 1, r.zoomRate = 1, r.parallaxY = 1, r.angle = 0, t.set_float(r.canvasToLayer(this.touches[e].x, this.touches[e].y, !1)), r.scale = n, r.zoomRate = s, r.parallaxY = a, r.angle = o) : (r = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i)) ? t.set_float(r.canvasToLayer(this.touches[e].x, this.touches[e].y, !1)) : t.set_float(0)
        }, m.prototype.YForID = function(t, e, i) {
            var r = this.findTouch(e);
            if (r < 0) t.set_float(0);
            else {
                var n, s, a, o, h, c = this.touches[r];
                cr.is_undefined(i) ? (s = (n = this.runtime.getLayerByNumber(0)).scale, a = n.zoomRate, o = n.parallaxY, h = n.angle, n.scale = 1, n.zoomRate = 1, n.parallaxY = 1, n.angle = 0, t.set_float(n.canvasToLayer(c.x, c.y, !1)), n.scale = s, n.zoomRate = a, n.parallaxY = o, n.angle = h) : (n = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i)) ? t.set_float(n.canvasToLayer(c.x, c.y, !1)) : t.set_float(0)
            }
        }, m.prototype.AbsoluteX = function(t) {
            this.touches.length ? t.set_float(this.touches[0].x) : t.set_float(0)
        }, m.prototype.AbsoluteXAt = function(t, e) {
            (e = Math.floor(e)) < 0 || e >= this.touches.length ? t.set_float(0) : t.set_float(this.touches[e].x)
        }, m.prototype.AbsoluteXForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var r = this.touches[i];
                t.set_float(r.x)
            }
        }, m.prototype.AbsoluteY = function(t) {
            this.touches.length ? t.set_float(this.touches[0].y) : t.set_float(0)
        }, m.prototype.AbsoluteYAt = function(t, e) {
            (e = Math.floor(e)) < 0 || e >= this.touches.length ? t.set_float(0) : t.set_float(this.touches[e].y)
        }, m.prototype.AbsoluteYForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var r = this.touches[i];
                t.set_float(r.y)
            }
        }, m.prototype.SpeedAt = function(t, e) {
            if ((e = Math.floor(e)) < 0 || e >= this.touches.length) t.set_float(0);
            else {
                var i = this.touches[e],
                    r = cr.distanceTo(i.x, i.y, i.lastx, i.lasty),
                    n = (i.time - i.lasttime) / 1e3;
                n <= 0 ? t.set_float(0) : t.set_float(r / n)
            }
        }, m.prototype.SpeedForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var r = this.touches[i],
                    n = cr.distanceTo(r.x, r.y, r.lastx, r.lasty),
                    s = (r.time - r.lasttime) / 1e3;
                s <= 0 ? t.set_float(0) : t.set_float(n / s)
            }
        }, m.prototype.AngleAt = function(t, e) {
            if ((e = Math.floor(e)) < 0 || e >= this.touches.length) t.set_float(0);
            else {
                var i = this.touches[e];
                t.set_float(cr.to_degrees(cr.angleTo(i.lastx, i.lasty, i.x, i.y)))
            }
        }, m.prototype.AngleForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var r = this.touches[i];
                t.set_float(cr.to_degrees(cr.angleTo(r.lastx, r.lasty, r.x, r.y)))
            }
        }, m.prototype.Alpha = function(t) {
            t.set_float(this.getAlpha())
        }, m.prototype.Beta = function(t) {
            t.set_float(this.getBeta())
        }, m.prototype.Gamma = function(t) {
            t.set_float(this.getGamma())
        }, m.prototype.AccelerationXWithG = function(t) {
            t.set_float(this.acc_g_x)
        }, m.prototype.AccelerationYWithG = function(t) {
            t.set_float(this.acc_g_y)
        }, m.prototype.AccelerationZWithG = function(t) {
            t.set_float(this.acc_g_z)
        }, m.prototype.AccelerationX = function(t) {
            t.set_float(this.acc_x)
        }, m.prototype.AccelerationY = function(t) {
            t.set_float(this.acc_y)
        }, m.prototype.AccelerationZ = function(t) {
            t.set_float(this.acc_z)
        }, m.prototype.TouchIndex = function(t) {
            t.set_int(this.trigger_index)
        }, m.prototype.TouchID = function(t) {
            t.set_float(this.trigger_id)
        }, m.prototype.WidthForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var r = this.touches[i];
                t.set_float(r.width)
            }
        }, m.prototype.HeightForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var r = this.touches[i];
                t.set_float(r.height)
            }
        }, m.prototype.PressureForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var r = this.touches[i];
                t.set_float(r.pressure)
            }
        }, t.exps = new m
    }(), cr.behaviors.Anchor = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.behaviors.Anchor.prototype;
        t.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function() {}, t.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var e = t.Instance.prototype;

        function i() {}
        e.onCreate = function() {
            this.anch_left = this.properties[0], this.anch_top = this.properties[1], this.anch_right = this.properties[2], this.anch_bottom = this.properties[3], this.inst.update_bbox(), this.xleft = this.inst.bbox.left, this.ytop = this.inst.bbox.top, this.xright = this.runtime.original_width - this.inst.bbox.left, this.ybottom = this.runtime.original_height - this.inst.bbox.top, this.rdiff = this.runtime.original_width - this.inst.bbox.right, this.bdiff = this.runtime.original_height - this.inst.bbox.bottom, this.enabled = 0 !== this.properties[4]
        }, e.saveToJSON = function() {
            return {
                xleft: this.xleft,
                ytop: this.ytop,
                xright: this.xright,
                ybottom: this.ybottom,
                rdiff: this.rdiff,
                bdiff: this.bdiff,
                enabled: this.enabled
            }
        }, e.loadFromJSON = function(t) {
            this.xleft = t.xleft, this.ytop = t.ytop, this.xright = t.xright, this.ybottom = t.ybottom, this.rdiff = t.rdiff, this.bdiff = t.bdiff, this.enabled = t.enabled
        }, e.tick = function() {
            if (this.enabled) {
                var t, e = this.inst.layer,
                    i = this.inst,
                    r = this.inst.bbox;
                0 === this.anch_left ? (i.update_bbox(), 0 !== (t = e.viewLeft + this.xleft - r.left) && (i.x += t, i.set_bbox_changed())) : 1 === this.anch_left && (i.update_bbox(), 0 !== (t = e.viewRight - this.xright - r.left) && (i.x += t, i.set_bbox_changed())), 0 === this.anch_top ? (i.update_bbox(), 0 !== (t = e.viewTop + this.ytop - r.top) && (i.y += t, i.set_bbox_changed())) : 1 === this.anch_top && (i.update_bbox(), 0 !== (t = e.viewBottom - this.ybottom - r.top) && (i.y += t, i.set_bbox_changed())), 1 === this.anch_right && (i.update_bbox(), 0 !== (t = e.viewRight - this.rdiff - r.right) && (i.width += t, i.width < 0 && (i.width = 0), i.set_bbox_changed())), 1 === this.anch_bottom && (i.update_bbox(), 0 !== (t = e.viewBottom - this.bdiff - r.bottom) && (i.height += t, i.height < 0 && (i.height = 0), i.set_bbox_changed()))
            }
        }, t.cnds = new function() {}, i.prototype.SetEnabled = function(t) {
            this.enabled && 0 === t ? this.enabled = !1 : this.enabled || 0 === t || (this.inst.update_bbox(), this.xleft = this.inst.bbox.left, this.ytop = this.inst.bbox.top, this.xright = this.runtime.original_width - this.inst.bbox.left, this.ybottom = this.runtime.original_height - this.inst.bbox.top, this.rdiff = this.runtime.original_width - this.inst.bbox.right, this.bdiff = this.runtime.original_height - this.inst.bbox.bottom, this.enabled = !0)
        }, t.acts = new i, t.exps = new function() {}
    }(), cr.behaviors.Fade = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.behaviors.Fade.prototype;
        t.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function() {}, t.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var e = t.Instance.prototype;

        function i() {}

        function r() {}

        function n() {}
        e.onCreate = function() {
            this.activeAtStart = 1 === this.properties[0], this.setMaxOpacity = !1, this.fadeInTime = this.properties[1], this.waitTime = this.properties[2], this.fadeOutTime = this.properties[3], this.destroy = this.properties[4], this.stage = this.activeAtStart ? 0 : 3, this.recycled ? this.stageTime.reset() : this.stageTime = new cr.KahanAdder, this.maxOpacity = this.inst.opacity ? this.inst.opacity : 1, this.activeAtStart && (0 === this.fadeInTime ? (this.stage = 1, 0 === this.waitTime && (this.stage = 2)) : (this.inst.opacity = 0, this.runtime.redraw = !0))
        }, e.saveToJSON = function() {
            return {
                fit: this.fadeInTime,
                wt: this.waitTime,
                fot: this.fadeOutTime,
                s: this.stage,
                st: this.stageTime.sum,
                mo: this.maxOpacity
            }
        }, e.loadFromJSON = function(t) {
            this.fadeInTime = t.fit, this.waitTime = t.wt, this.fadeOutTime = t.fot, this.stage = t.s, this.stageTime.reset(), this.stageTime.sum = t.st, this.maxOpacity = t.mo
        }, e.tick = function() {
            this.stageTime.add(this.runtime.getDt(this.inst)), 0 === this.stage && (this.inst.opacity = this.stageTime.sum / this.fadeInTime * this.maxOpacity, this.runtime.redraw = !0, this.inst.opacity >= this.maxOpacity && (this.inst.opacity = this.maxOpacity, this.stage = 1, this.stageTime.reset(), this.runtime.trigger(cr.behaviors.Fade.prototype.cnds.OnFadeInEnd, this.inst))), 1 === this.stage && this.stageTime.sum >= this.waitTime && (this.stage = 2, this.stageTime.reset(), this.runtime.trigger(cr.behaviors.Fade.prototype.cnds.OnWaitEnd, this.inst)), 2 === this.stage && 0 !== this.fadeOutTime && (this.inst.opacity = this.maxOpacity - this.stageTime.sum / this.fadeOutTime * this.maxOpacity, this.runtime.redraw = !0, this.inst.opacity < 0 && (this.inst.opacity = 0, this.stage = 3, this.stageTime.reset(), this.runtime.trigger(cr.behaviors.Fade.prototype.cnds.OnFadeOutEnd, this.inst), 1 === this.destroy && this.runtime.DestroyInstance(this.inst)))
        }, e.doStart = function() {
            this.stage = 0, this.stageTime.reset(), 0 === this.fadeInTime ? (this.stage = 1, 0 === this.waitTime && (this.stage = 2)) : (this.inst.opacity = 0, this.runtime.redraw = !0)
        }, i.prototype.OnFadeOutEnd = function() {
            return !0
        }, i.prototype.OnFadeInEnd = function() {
            return !0
        }, i.prototype.OnWaitEnd = function() {
            return !0
        }, t.cnds = new i, r.prototype.StartFade = function() {
            this.activeAtStart || this.setMaxOpacity || (this.maxOpacity = this.inst.opacity ? this.inst.opacity : 1, this.setMaxOpacity = !0), 3 === this.stage && this.doStart()
        }, r.prototype.RestartFade = function() {
            this.doStart()
        }, r.prototype.SetFadeInTime = function(t) {
            t < 0 && (t = 0), this.fadeInTime = t
        }, r.prototype.SetWaitTime = function(t) {
            t < 0 && (t = 0), this.waitTime = t
        }, r.prototype.SetFadeOutTime = function(t) {
            t < 0 && (t = 0), this.fadeOutTime = t
        }, t.acts = new r, n.prototype.FadeInTime = function(t) {
            t.set_float(this.fadeInTime)
        }, n.prototype.WaitTime = function(t) {
            t.set_float(this.waitTime)
        }, n.prototype.FadeOutTime = function(t) {
            t.set_float(this.fadeOutTime)
        }, t.exps = new n
    }(), cr.behaviors.Pin = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.behaviors.Pin.prototype;
        t.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function() {}, t.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var e = t.Instance.prototype;

        function i() {}

        function r() {}

        function n() {}
        e.onCreate = function() {
            this.pinObject = null, this.pinObjectUid = -1, this.pinAngle = 0, this.pinDist = 0, this.myStartAngle = 0, this.theirStartAngle = 0, this.lastKnownAngle = 0, this.mode = 0;
            var t = this;
            this.recycled || (this.myDestroyCallback = function(e) {
                t.onInstanceDestroyed(e)
            }), this.runtime.addDestroyCallback(this.myDestroyCallback)
        }, e.saveToJSON = function() {
            return {
                uid: this.pinObject ? this.pinObject.uid : -1,
                pa: this.pinAngle,
                pd: this.pinDist,
                msa: this.myStartAngle,
                tsa: this.theirStartAngle,
                lka: this.lastKnownAngle,
                m: this.mode
            }
        }, e.loadFromJSON = function(t) {
            this.pinObjectUid = t.uid, this.pinAngle = t.pa, this.pinDist = t.pd, this.myStartAngle = t.msa, this.theirStartAngle = t.tsa, this.lastKnownAngle = t.lka, this.mode = t.m
        }, e.afterLoad = function() {
            -1 === this.pinObjectUid ? this.pinObject = null : this.pinObject = this.runtime.getObjectByUID(this.pinObjectUid), this.pinObjectUid = -1
        }, e.onInstanceDestroyed = function(t) {
            this.pinObject == t && (this.pinObject = null)
        }, e.onDestroy = function() {
            this.pinObject = null, this.runtime.removeDestroyCallback(this.myDestroyCallback)
        }, e.tick = function() {}, e.tick2 = function() {
            if (this.pinObject) {
                this.lastKnownAngle !== this.inst.angle && (this.myStartAngle = cr.clamp_angle(this.myStartAngle + (this.inst.angle - this.lastKnownAngle)));
                var t = this.inst.x,
                    e = this.inst.y;
                if (3 === this.mode || 4 === this.mode) {
                    var i = cr.distanceTo(this.inst.x, this.inst.y, this.pinObject.x, this.pinObject.y);
                    if (i > this.pinDist || 4 === this.mode && i < this.pinDist) {
                        var r = cr.angleTo(this.pinObject.x, this.pinObject.y, this.inst.x, this.inst.y);
                        t = this.pinObject.x + Math.cos(r) * this.pinDist, e = this.pinObject.y + Math.sin(r) * this.pinDist
                    }
                } else t = this.pinObject.x + Math.cos(this.pinObject.angle + this.pinAngle) * this.pinDist, e = this.pinObject.y + Math.sin(this.pinObject.angle + this.pinAngle) * this.pinDist;
                var n = cr.clamp_angle(this.myStartAngle + (this.pinObject.angle - this.theirStartAngle));
                this.lastKnownAngle = n, 0 !== this.mode && 1 !== this.mode && 3 !== this.mode && 4 !== this.mode || this.inst.x === t && this.inst.y === e || (this.inst.x = t, this.inst.y = e, this.inst.set_bbox_changed()), 0 !== this.mode && 2 !== this.mode || this.inst.angle === n || (this.inst.angle = n, this.inst.set_bbox_changed())
            }
        }, i.prototype.IsPinned = function() {
            return !!this.pinObject
        }, t.cnds = new i, r.prototype.Pin = function(t, e) {
            if (t) {
                var i = t.getFirstPicked(this.inst);
                i && (this.pinObject = i, this.pinAngle = cr.angleTo(i.x, i.y, this.inst.x, this.inst.y) - i.angle, this.pinDist = cr.distanceTo(i.x, i.y, this.inst.x, this.inst.y), this.myStartAngle = this.inst.angle, this.lastKnownAngle = this.inst.angle, this.theirStartAngle = i.angle, this.mode = e)
            }
        }, r.prototype.Unpin = function() {
            this.pinObject = null
        }, t.acts = new r, n.prototype.PinnedUID = function(t) {
            t.set_int(this.pinObject ? this.pinObject.uid : -1)
        }, t.exps = new n
    }(), cr.behaviors.Rex_pin2imgpt = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.behaviors.Rex_pin2imgpt.prototype;
        t.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function() {
            cr.plugins_.Sprite ? (this.imgptX_get = cr.plugins_.Sprite.prototype.exps.ImagePointX, this.imgptY_get = cr.plugins_.Sprite.prototype.exps.ImagePointY) : (this.imgptX_get = null, this.imgptY_get = null)
        }, t.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var e = t.Instance.prototype;
        e.onCreate = function() {
            this.pinObject = null, this.pinObjectUid = -1, this.imgpt = null, this.myStartAngle = 0, this.theirStartAngle = 0, this.lastKnownAngle = 0, this.mode = null;
            var t = this;
            this.recycled || (this.myDestroyCallback = function(e) {
                t.onInstanceDestroyed(e)
            }), this.runtime.addDestroyCallback(this.myDestroyCallback)
        }, e.saveToJSON = function() {
            return {
                uid: this.pinObject ? this.pinObject.uid : -1,
                imgpt: this.imgpt,
                msa: this.myStartAngle,
                tsa: this.theirStartAngle,
                lka: this.lastKnownAngle,
                m: this.mode
            }
        }, e.loadFromJSON = function(t) {
            this.pinObjectUid = t.uid, this.imgpt = t.imgpt, this.myStartAngle = t.msa, this.theirStartAngle = t.tsa, this.lastKnownAngle = t.lka, this.mode = t.m
        }, e.afterLoad = function() {
            -1 === this.pinObjectUid ? this.pinObject = null : this.pinObject = this.runtime.getObjectByUID(this.pinObjectUid), this.pinObjectUid = -1
        }, e.onInstanceDestroyed = function(t) {
            this.pinObject == t && (this.pinObject = null)
        }, e.onDestroy = function() {
            this.pinObject = null, this.runtime.removeDestroyCallback(this.myDestroyCallback)
        }, e.tick = function() {};
        var i = {
            value: 0,
            set_any: function(t) {
                this.value = t
            },
            set_int: function(t) {
                this.value = t
            },
            set_float: function(t) {
                this.value = t
            },
            set_string: function(t) {
                this.value = t
            }
        };

        function r() {}

        function n() {}

        function s() {}
        e.imgptX_get = function(t, e) {
            return this.type.imgptX_get.call(t, i, e), i.value
        }, e.imgptY_get = function(t, e) {
            return this.type.imgptY_get.call(t, i, e), i.value
        }, e.tick2 = function() {
            if (this.pinObject && this.type.imgptX_get && this.type.imgptY_get) {
                var t = this.imgptX_get(this.pinObject, this.imgpt),
                    e = this.imgptY_get(this.pinObject, this.imgpt);
                if (this.inst.x === t && this.inst.y === e || (this.inst.x = t, this.inst.y = e, this.inst.set_bbox_changed()), 1 == this.mode) {
                    this.lastKnownAngle !== this.inst.angle && (this.myStartAngle = cr.clamp_angle(this.myStartAngle + (this.inst.angle - this.lastKnownAngle)));
                    var i = cr.clamp_angle(this.myStartAngle + (this.pinObject.angle - this.theirStartAngle));
                    this.lastKnownAngle = i
                }
                1 == this.mode && this.inst.angle !== i && (this.inst.angle = i, this.inst.set_bbox_changed())
            }
        }, t.cnds = new r, r.prototype.IsPinned = function() {
            return !!this.pinObject
        }, t.acts = new n, n.prototype.Pin = function(t, e, i) {
            if (t) {
                var r = t.getFirstPicked(this.inst);
                r && (this.pinObject = r, this.imgpt = e, this.myStartAngle = this.inst.angle, this.lastKnownAngle = this.inst.angle, this.theirStartAngle = r.angle, this.mode = i)
            }
        }, n.prototype.Unpin = function() {
            this.pinObject = null
        }, t.exps = new s, s.prototype.PinnedUID = function(t) {
            t.set_int(this.pinObject ? this.pinObject.uid : -1)
        }
    }(), cr.behaviors.Rotate = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.behaviors.Rotate.prototype;
        t.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function() {}, t.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var e = t.Instance.prototype;

        function i() {}

        function r() {}
        e.onCreate = function() {
            this.speed = cr.to_radians(this.properties[0]), this.acc = cr.to_radians(this.properties[1])
        }, e.saveToJSON = function() {
            return {
                speed: this.speed,
                acc: this.acc
            }
        }, e.loadFromJSON = function(t) {
            this.speed = t.speed, this.acc = t.acc
        }, e.tick = function() {
            var t = this.runtime.getDt(this.inst);
            0 !== t && (0 !== this.acc && (this.speed += this.acc * t), 0 !== this.speed && (this.inst.angle = cr.clamp_angle(this.inst.angle + this.speed * t), this.inst.set_bbox_changed()))
        }, t.cnds = new function() {}, i.prototype.SetSpeed = function(t) {
            this.speed = cr.to_radians(t)
        }, i.prototype.SetAcceleration = function(t) {
            this.acc = cr.to_radians(t)
        }, t.acts = new i, r.prototype.Speed = function(t) {
            t.set_float(cr.to_degrees(this.speed))
        }, r.prototype.Acceleration = function(t) {
            t.set_float(cr.to_degrees(this.acc))
        }, t.exps = new r
    }(), cr.behaviors.Sin = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.behaviors.Sin.prototype;
        t.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function() {}, t.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime, this.i = 0
        };
        var e = t.Instance.prototype,
            i = 2 * Math.PI,
            r = Math.PI / 2,
            n = 3 * Math.PI / 2;

        function s() {}

        function a() {}

        function o() {}
        e.onCreate = function() {
            this.active = 1 === this.properties[0], this.movement = this.properties[1], this.wave = this.properties[2], this.period = this.properties[3], this.period += Math.random() * this.properties[4], 0 === this.period ? this.i = 0 : (this.i = this.properties[5] / this.period * i, this.i += Math.random() * this.properties[6] / this.period * i), this.mag = this.properties[7], this.mag += Math.random() * this.properties[8], this.initialValue = 0, this.initialValue2 = 0, this.ratio = 0, 5 === this.movement && (this.mag = cr.to_radians(this.mag)), this.init()
        }, e.saveToJSON = function() {
            return {
                i: this.i,
                a: this.active,
                mv: this.movement,
                w: this.wave,
                p: this.period,
                mag: this.mag,
                iv: this.initialValue,
                iv2: this.initialValue2,
                r: this.ratio,
                lkv: this.lastKnownValue,
                lkv2: this.lastKnownValue2
            }
        }, e.loadFromJSON = function(t) {
            this.i = t.i, this.active = t.a, this.movement = t.mv, this.wave = t.w, this.period = t.p, this.mag = t.mag, this.initialValue = t.iv, this.initialValue2 = t.iv2 || 0, this.ratio = t.r, this.lastKnownValue = t.lkv, this.lastKnownValue2 = t.lkv2 || 0
        }, e.init = function() {
            switch (this.movement) {
                case 0:
                    this.initialValue = this.inst.x;
                    break;
                case 1:
                    this.initialValue = this.inst.y;
                    break;
                case 2:
                    this.initialValue = this.inst.width, this.ratio = this.inst.height / this.inst.width;
                    break;
                case 3:
                    this.initialValue = this.inst.width;
                    break;
                case 4:
                    this.initialValue = this.inst.height;
                    break;
                case 5:
                    this.initialValue = this.inst.angle;
                    break;
                case 6:
                    this.initialValue = this.inst.opacity;
                    break;
                case 7:
                    this.initialValue = 0;
                    break;
                case 8:
                    this.initialValue = this.inst.x, this.initialValue2 = this.inst.y
            }
            this.lastKnownValue = this.initialValue, this.lastKnownValue2 = this.initialValue2
        }, e.waveFunc = function(t) {
            switch (t %= i, this.wave) {
                case 0:
                    return Math.sin(t);
                case 1:
                    return t <= r ? t / r : t <= n ? 1 - 2 * (t - r) / Math.PI : (t - n) / r - 1;
                case 2:
                    return 2 * t / i - 1;
                case 3:
                    return -2 * t / i + 1;
                case 4:
                    return t < Math.PI ? -1 : 1
            }
            return 0
        }, e.tick = function() {
            var t = this.runtime.getDt(this.inst);
            this.active && 0 !== t && (0 === this.period ? this.i = 0 : (this.i += t / this.period * i, this.i = this.i % i), this.updateFromPhase())
        }, e.updateFromPhase = function() {
            switch (this.movement) {
                case 0:
                    this.inst.x !== this.lastKnownValue && (this.initialValue += this.inst.x - this.lastKnownValue), this.inst.x = this.initialValue + this.waveFunc(this.i) * this.mag, this.lastKnownValue = this.inst.x;
                    break;
                case 1:
                    this.inst.y !== this.lastKnownValue && (this.initialValue += this.inst.y - this.lastKnownValue), this.inst.y = this.initialValue + this.waveFunc(this.i) * this.mag, this.lastKnownValue = this.inst.y;
                    break;
                case 2:
                    this.inst.width = this.initialValue + this.waveFunc(this.i) * this.mag, this.inst.height = this.inst.width * this.ratio;
                    break;
                case 3:
                    this.inst.width = this.initialValue + this.waveFunc(this.i) * this.mag;
                    break;
                case 4:
                    this.inst.height = this.initialValue + this.waveFunc(this.i) * this.mag;
                    break;
                case 5:
                    this.inst.angle !== this.lastKnownValue && (this.initialValue = cr.clamp_angle(this.initialValue + (this.inst.angle - this.lastKnownValue))), this.inst.angle = cr.clamp_angle(this.initialValue + this.waveFunc(this.i) * this.mag), this.lastKnownValue = this.inst.angle;
                    break;
                case 6:
                    this.inst.opacity = this.initialValue + this.waveFunc(this.i) * this.mag / 100, this.inst.opacity < 0 ? this.inst.opacity = 0 : this.inst.opacity > 1 && (this.inst.opacity = 1);
                    break;
                case 8:
                    this.inst.x !== this.lastKnownValue && (this.initialValue += this.inst.x - this.lastKnownValue), this.inst.y !== this.lastKnownValue2 && (this.initialValue2 += this.inst.y - this.lastKnownValue2), this.inst.x = this.initialValue + Math.cos(this.inst.angle) * this.waveFunc(this.i) * this.mag, this.inst.y = this.initialValue2 + Math.sin(this.inst.angle) * this.waveFunc(this.i) * this.mag, this.lastKnownValue = this.inst.x, this.lastKnownValue2 = this.inst.y
            }
            this.inst.set_bbox_changed()
        }, e.onSpriteFrameChanged = function(t, e) {
            switch (this.movement) {
                case 2:
                    this.initialValue *= e.width / t.width, this.ratio = e.height / e.width;
                    break;
                case 3:
                    this.initialValue *= e.width / t.width;
                    break;
                case 4:
                    this.initialValue *= e.height / t.height
            }
        }, s.prototype.IsActive = function() {
            return this.active
        }, s.prototype.CompareMovement = function(t) {
            return this.movement === t
        }, s.prototype.ComparePeriod = function(t, e) {
            return cr.do_cmp(this.period, t, e)
        }, s.prototype.CompareMagnitude = function(t, e) {
            return 5 === this.movement ? cr.do_cmp(this.mag, t, cr.to_radians(e)) : cr.do_cmp(this.mag, t, e)
        }, s.prototype.CompareWave = function(t) {
            return this.wave === t
        }, t.cnds = new s, a.prototype.SetActive = function(t) {
            this.active = 1 === t
        }, a.prototype.SetPeriod = function(t) {
            this.period = t
        }, a.prototype.SetMagnitude = function(t) {
            this.mag = t, 5 === this.movement && (this.mag = cr.to_radians(this.mag))
        }, a.prototype.SetMovement = function(t) {
            5 === this.movement && 5 !== t && (this.mag = cr.to_degrees(this.mag)), this.movement = t, this.init()
        }, a.prototype.SetWave = function(t) {
            this.wave = t
        }, a.prototype.SetPhase = function(t) {
            this.i = t * i % i, this.updateFromPhase()
        }, a.prototype.UpdateInitialState = function() {
            this.init()
        }, t.acts = new a, o.prototype.CyclePosition = function(t) {
            t.set_float(this.i / i)
        }, o.prototype.Period = function(t) {
            t.set_float(this.period)
        }, o.prototype.Magnitude = function(t) {
            5 === this.movement ? t.set_float(cr.to_degrees(this.mag)) : t.set_float(this.mag)
        }, o.prototype.Value = function(t) {
            t.set_float(this.waveFunc(this.i) * this.mag)
        }, t.exps = new o
    }(), cr.behaviors.Timer = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.behaviors.Timer.prototype;
        t.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function() {}, t.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var e = t.Instance.prototype;

        function i() {}

        function r() {}

        function n() {}
        e.onCreate = function() {
            this.timers = {}
        }, e.onDestroy = function() {
            cr.wipe(this.timers)
        }, e.saveToJSON = function() {
            var t, e, i = {};
            for (t in this.timers) this.timers.hasOwnProperty(t) && (e = this.timers[t], i[t] = {
                c: e.current.sum,
                t: e.total.sum,
                d: e.duration,
                r: e.regular
            });
            return i
        }, e.loadFromJSON = function(t) {
            var e;
            for (e in this.timers = {}, t) t.hasOwnProperty(e) && (this.timers[e] = {
                current: new cr.KahanAdder,
                total: new cr.KahanAdder,
                duration: t[e].d,
                regular: t[e].r
            }, this.timers[e].current.sum = t[e].c, this.timers[e].total.sum = t[e].t)
        }, e.tick = function() {
            var t, e, i = this.runtime.getDt(this.inst);
            for (t in this.timers) this.timers.hasOwnProperty(t) && ((e = this.timers[t]).current.add(i), e.total.add(i))
        }, e.tick2 = function() {
            var t, e;
            for (t in this.timers) this.timers.hasOwnProperty(t) && (e = this.timers[t]).current.sum >= e.duration && (e.regular ? e.current.sum -= e.duration : delete this.timers[t])
        }, i.prototype.OnTimer = function(t) {
            t = t.toLowerCase();
            var e = this.timers[t];
            return !!e && e.current.sum >= e.duration
        }, t.cnds = new i, r.prototype.StartTimer = function(t, e, i) {
            this.timers[i.toLowerCase()] = {
                current: new cr.KahanAdder,
                total: new cr.KahanAdder,
                duration: t,
                regular: 1 === e
            }
        }, r.prototype.StopTimer = function(t) {
            t = t.toLowerCase(), this.timers.hasOwnProperty(t) && delete this.timers[t]
        }, t.acts = new r, n.prototype.CurrentTime = function(t, e) {
            var i = this.timers[e.toLowerCase()];
            t.set_float(i ? i.current.sum : 0)
        }, n.prototype.TotalTime = function(t, e) {
            var i = this.timers[e.toLowerCase()];
            t.set_float(i ? i.total.sum : 0)
        }, n.prototype.Duration = function(t, e) {
            var i = this.timers[e.toLowerCase()];
            t.set_float(i ? i.duration : 0)
        }, t.exps = new n
    }(), cr.behaviors.lgshake = function(t) {
        this.runtime = t, this.shakeMag = 0, this.shakeStart = 0, this.shakeEnd = 0, this.shakeMode = 0, this.shakeEnforcePosition = 0, this.shakeOriginalX = 0, this.shakeOriginalY = 0
    },
    function() {
        var t = cr.behaviors.lgshake.prototype;
        t.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function() {}, t.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var e = t.Instance.prototype;

        function i() {}
        e.onCreate = function() {
            this.enabled = 0 !== this.properties[0]
        }, e.saveToJSON = function() {
            return {
                smg: this.behavior.shakeMag,
                ss: this.behavior.shakeStart,
                se: this.behavior.shakeEnd,
                smd: this.behavior.shakeMode
            }
        }, e.loadFromJSON = function(t) {
            this.behavior.shakeMag = t.smg, this.behavior.shakeStart = t.ss, this.behavior.shakeEnd = t.se, this.behavior.shakeMode = t.smd
        }, e.tick = function() {}, e.tick2 = function() {
            if (this.enabled) {
                var t = this.runtime.kahanTime.sum,
                    e = 0,
                    i = 0;
                if (t >= this.behavior.shakeStart && t < this.behavior.shakeEnd) {
                    var r = this.behavior.shakeMag * Math.min(this.runtime.timescale, 1);
                    0 === this.behavior.shakeMode && (r *= 1 - (t - this.behavior.shakeStart) / (this.behavior.shakeEnd - this.behavior.shakeStart));
                    var n = Math.random() * Math.PI * 2,
                        s = Math.random() * r;
                    e = Math.cos(n) * s, i = Math.sin(n) * s
                }(0 != e || 0 != i || 1 === this.behavior.shakeEnforcePosition && this.behavior.shakeStart > 0) && (this.inst.x = this.behavior.shakeEnforcePosition ? this.behavior.shakeOriginalX + e : this.inst.x + e, this.inst.y = this.behavior.shakeEnforcePosition ? this.behavior.shakeOriginalY + i : this.inst.y + i, this.inst.set_bbox_changed(), 1 === this.behavior.shakeEnforcePosition && t > this.behavior.shakeEnd && (this.behavior.shakeStart = 0))
            }
        }, i.prototype.Shake = function(t, e, i, r) {
            this.behavior.shakeMag = t, this.behavior.shakeStart = this.runtime.kahanTime.sum, this.behavior.shakeEnd = this.behavior.shakeStart + e, this.behavior.shakeMode = i, this.behavior.shakeEnforcePosition = r, this.behavior.shakeOriginalX = this.inst.x, this.behavior.shakeOriginalY = this.inst.y
        }, i.prototype.SetEnabled = function(t) {
            this.enabled = 0 !== t
        }, t.acts = new i
    }();
var easeOutBounceArray = [],
    easeInElasticArray = [],
    easeOutElasticArray = [],
    easeInOutElasticArray = [],
    easeInCircle = [],
    easeOutCircle = [],
    easeInOutCircle = [],
    easeInBack = [],
    easeOutBack = [],
    easeInOutBack = [],
    litetween_precision = 1e4,
    updateLimit = 0;

function easeOutBouncefunc(t) {
    return (t /= 1) < 1 / 2.75 ? result = 7.5625 * t * t * 1 + 0 : result = t < 2 / 2.75 ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + 0 : t < 2.5 / 2.75 ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + 0 : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + 0, result
}

function integerize(t, e) {
    return Math.round(t / e * litetween_precision)
}

function easeFunc(t, e, i, r, n, s, a) {
    var o = 0;
    switch (t) {
        case 0:
            o = r * e / n + i;
            break;
        case 1:
            o = r * (e /= n) * e + i;
            break;
        case 2:
            o = -r * (e /= n) * (e - 2) + i;
            break;
        case 3:
            o = (e /= n / 2) < 1 ? r / 2 * e * e + i : -r / 2 * (--e * (e - 2) - 1) + i;
            break;
        case 4:
            o = r * (e /= n) * e * e + i;
            break;
        case 5:
            o = r * ((e = e / n - 1) * e * e + 1) + i;
            break;
        case 6:
            o = (e /= n / 2) < 1 ? r / 2 * e * e * e + i : r / 2 * ((e -= 2) * e * e + 2) + i;
            break;
        case 7:
            o = r * (e /= n) * e * e * e + i;
            break;
        case 8:
            o = -r * ((e = e / n - 1) * e * e * e - 1) + i;
            break;
        case 9:
            o = (e /= n / 2) < 1 ? r / 2 * e * e * e * e + i : -r / 2 * ((e -= 2) * e * e * e - 2) + i;
            break;
        case 10:
            o = r * (e /= n) * e * e * e * e + i;
            break;
        case 11:
            o = r * ((e = e / n - 1) * e * e * e * e + 1) + i;
            break;
        case 12:
            o = (e /= n / 2) < 1 ? r / 2 * e * e * e * e * e + i : r / 2 * ((e -= 2) * e * e * e * e + 2) + i;
            break;
        case 13:
            o = a.optimized ? easeInCircle[integerize(e, n)] : -(Math.sqrt(1 - e * e) - 1);
            break;
        case 14:
            o = a.optimized ? easeOutCircle[integerize(e, n)] : Math.sqrt(1 - (e - 1) * (e - 1));
            break;
        case 15:
            o = a.optimized ? easeInOutCircle[integerize(e, n)] : (e /= n / 2) < 1 ? -r / 2 * (Math.sqrt(1 - e * e) - 1) + i : r / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i;
            break;
        case 16:
            if (a.optimized) o = easeInBack[integerize(e, n)];
            else {
                var h = a.s;
                o = r * (e /= n) * e * ((h + 1) * e - h) + i
            }
            break;
        case 17:
            if (a.optimized) o = easeOutBack[integerize(e, n)];
            else {
                h = a.s;
                o = r * ((e = e / n - 1) * e * ((h + 1) * e + h) + 1) + i
            }
            break;
        case 18:
            if (a.optimized) o = easeInOutBack[integerize(e, n)];
            else {
                h = a.s;
                o = (e /= n / 2) < 1 ? r / 2 * (e * e * ((1 + (h *= 1.525)) * e - h)) + i : r / 2 * ((e -= 2) * e * ((1 + (h *= 1.525)) * e + h) + 2) + i
            }
            break;
        case 19:
            if (a.optimized) o = easeInElasticArray[integerize(e, n)];
            else {
                var c = a.a,
                    l = a.p;
                h = 0;
                if (0 == e && (o = i), 1 == (e /= n) && (o = i + r), 0 == l && (l = .3 * n), 0 == c || c < Math.abs(r)) c = r, h = l / 4;
                else h = l / (2 * Math.PI) * Math.asin(r / c);
                o = -c * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - h) * (2 * Math.PI) / l) + i
            }
            break;
        case 20:
            if (a.optimized) o = easeOutElasticArray[integerize(e, n)];
            else {
                c = a.a, l = a.p, h = 0;
                if (0 == e && (o = i), 1 == (e /= n) && (o = i + r), 0 == l && (l = .3 * n), 0 == c || c < Math.abs(r)) {
                    c = r;
                    h = l / 4
                } else h = l / (2 * Math.PI) * Math.asin(r / c);
                o = c * Math.pow(2, -10 * e) * Math.sin((e * n - h) * (2 * Math.PI) / l) + r + i
            }
            break;
        case 21:
            if (a.optimized) o = easeInOutElasticArray[integerize(e, n)];
            else {
                c = a.a, l = a.p, h = 0;
                if (0 == e && (o = i), 2 == (e /= n / 2) && (o = i + r), 0 == l && (l = n * (.3 * 1.5)), 0 == c || c < Math.abs(r)) {
                    c = r;
                    h = l / 4
                } else h = l / (2 * Math.PI) * Math.asin(r / c);
                o = e < 1 ? c * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - h) * (2 * Math.PI) / l) * -.5 + i : c * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * n - h) * (2 * Math.PI) / l) * .5 + r + i
            }
            break;
        case 22:
            o = a.optimized ? r - easeOutBounceArray[integerize(n - e, n)] + i : r - easeOutBouncefunc(n - e / n) + i;
            break;
        case 23:
            o = a.optimized ? easeOutBounceArray[integerize(e, n)] : easeOutBouncefunc(e / n);
            break;
        case 24:
            o = a.optimized ? e < n / 2 ? .5 * (r - easeOutBounceArray[integerize(n - 2 * e, n)] + i) + i : .5 * easeOutBounceArray[integerize(2 * e - n, n)] + .5 * r + i : e < n / 2 ? .5 * (r - easeOutBouncefunc(n - 2 * e) + i) + i : .5 * easeOutBouncefunc((2 * e - n) / n) + .5 * r + i;
            break;
        case 25:
            o = (u = e / n / 2) * u * (3 - 2 * u) * 2;
            break;
        case 26:
            o = (u = (e / n + 1) / 2) * u * (3 - 2 * u) * 2 - 1;
            break;
        case 27:
            var u;
            o = (u = e / n) * u * (3 - 2 * u)
    }
    return s ? r - i - o : o
}! function() {
    for (var t = 0, e = 0, i = 0, r = 0, n = 0, s = 0; s <= litetween_precision; s++) {
        if (r = s / litetween_precision, t = (r /= 1) < 1 / 2.75 ? 7.5625 * r * r * 1 + 0 : r < 2 / 2.75 ? 1 * (7.5625 * (r -= 1.5 / 2.75) * r + .75) + 0 : r < 2.5 / 2.75 ? 1 * (7.5625 * (r -= 2.25 / 2.75) * r + .9375) + 0 : 1 * (7.5625 * (r -= 2.625 / 2.75) * r + .984375) + 0, easeOutBounceArray[s] = t, e = 0, i = 0, 0 == (r = s / litetween_precision) && (t = 0), 1 == (r /= 1) && (t = 1), 0 == i && (i = .3), 0 == e || e < Math.abs(1)) {
            e = 1;
            n = i / 4
        } else n = i / (2 * Math.PI) * Math.asin(1 / e);
        if (t = -e * Math.pow(2, 10 * (r -= 1)) * Math.sin((1 * r - n) * (2 * Math.PI) / i) + 0, easeInElasticArray[s] = t, e = 0, i = 0, 0 == (r = s / litetween_precision) && (t = 0), 1 == (r /= 1) && (t = 1), 0 == i && (i = .3), 0 == e || e < Math.abs(1)) {
            e = 1;
            n = i / 4
        } else n = i / (2 * Math.PI) * Math.asin(1 / e);
        if (t = e * Math.pow(2, -10 * r) * Math.sin((1 * r - n) * (2 * Math.PI) / i) + 1 + 0, easeOutElasticArray[s] = t, e = 0, i = 0, 0 == (r = s / litetween_precision) && (t = 0), 2 == (r /= .5) && (t = 1), 0 == i && (i = .3 * 1.5 * 1), 0 == e || e < Math.abs(1)) {
            e = 1;
            n = i / 4
        } else n = i / (2 * Math.PI) * Math.asin(1 / e);
        t = r < 1 ? e * Math.pow(2, 10 * (r -= 1)) * Math.sin((1 * r - n) * (2 * Math.PI) / i) * -.5 + 0 : e * Math.pow(2, -10 * (r -= 1)) * Math.sin((1 * r - n) * (2 * Math.PI) / i) * .5 + 1 + 0, easeInOutElasticArray[s] = t, r = s / litetween_precision, easeInCircle[s] = -(Math.sqrt(1 - r * r) - 1), r = s / litetween_precision, easeOutCircle[s] = Math.sqrt(1 - (r - 1) * (r - 1)), r = s / litetween_precision, t = (r /= .5) < 1 ? -.5 * (Math.sqrt(1 - r * r) - 1) + 0 : .5 * (Math.sqrt(1 - (r -= 2) * r) + 1) + 0, easeInOutCircle[s] = t, r = s / litetween_precision, 0 == (n = 0) && (n = 1.70158), t = 1 * (r /= 1) * r * ((n + 1) * r - n) + 0, easeInBack[s] = t, r = s / litetween_precision, 0 == (n = 0) && (n = 1.70158), t = 1 * ((r = r / 1 - 1) * r * ((n + 1) * r + n) + 1) + 0, easeOutBack[s] = t, r = s / litetween_precision, 0 == (n = 0) && (n = 1.70158), t = (r /= .5) < 1 ? r * r * ((1 + (n *= 1.525)) * r - n) * .5 + 0 : .5 * ((r -= 2) * r * ((1 + (n *= 1.525)) * r + n) + 2) + 0, easeInOutBack[s] = t
    }
}();
var TweenObject = function(t, e, i, r, n, s, a) {
    this.name = t, this.value = 0, this.setInitial(r), this.setTarget(n), this.easefunc = i, this.tweened = e, this.duration = s, this.progress = 0, this.state = 0, this.onStart = !1, this.onEnd = !1, this.onReverseStart = !1, this.onReverseEnd = !1, this.lastKnownValue = 0, this.lastKnownValue2 = 0, this.enforce = a, this.pingpong = 1, this.flipEase = !1, this.easingparam = [], this.lastState = 1;
    for (var o = 0; o < 28; o++) this.easingparam[o] = {}, this.easingparam[o].a = 0, this.easingparam[o].p = 0, this.easingparam[o].t = 0, this.easingparam[o].s = 0, this.easingparam[o].optimized = !0
};

function trim(t) {
    return t.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
}
TweenObject.prototype = {}, TweenObject.prototype.flipTarget = function() {
        var t = this.initialparam1,
            e = this.initialparam2;
        this.initialparam1 = this.targetparam1, this.initialparam2 = this.targetparam2, this.targetparam1 = t, this.targetparam2 = e, this.lastKnownValue = 0, this.lastKnownValue2 = 0
    }, TweenObject.prototype.setInitial = function(t) {
        this.initialparam1 = parseFloat(t.split(",")[0]), this.initialparam2 = parseFloat(t.split(",")[1]), this.lastKnownValue = 0, this.lastKnownValue2 = 0
    }, TweenObject.prototype.setTarget = function(t) {
        this.targetparam1 = parseFloat(t.split(",")[0]), this.targetparam2 = parseFloat(t.split(",")[1]), isNaN(this.targetparam2) && (this.targetparam2 = this.targetparam1)
    }, TweenObject.prototype.OnTick = function(t) {
        if (0 === this.state) return -1;
        if (1 === this.state && (this.progress += t), 2 === this.state && (this.progress -= t), 3 === this.state && (this.state = 0), 4 !== this.state && 6 !== this.state || (this.progress += t * this.pingpong), 5 === this.state && (this.progress += t * this.pingpong), this.progress < 0) return this.progress = 0, 4 === this.state ? this.pingpong = 1 : 6 === this.state ? (this.pingpong = 1, this.flipEase = !1) : this.state = 0, this.onReverseEnd = !0, 0;
        if (this.progress > this.duration) return this.progress = this.duration, 4 === this.state ? this.pingpong = -1 : 6 === this.state ? (this.pingpong = -1, this.flipEase = !0) : 5 === this.state ? this.progress = 0 : this.state = 0, this.onEnd = !0, 1;
        if (this.flipEase) var e = easeFunc(this.easefunc, this.duration - this.progress, 0, 1, this.duration, this.flipEase, this.easingparam[this.easefunc]);
        else e = easeFunc(this.easefunc, this.progress, 0, 1, this.duration, this.flipEase, this.easingparam[this.easefunc]);
        return e
    }, cr.behaviors.lunarray_LiteTween = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.behaviors.lunarray_LiteTween.prototype;
        t.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function() {}, t.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime, this.i = 0
        };
        var e = t.Instance.prototype;
        e.onCreate = function() {
            this.playmode = this.properties[0], this.active = 1 == this.playmode || 2 == this.playmode || 3 == this.playmode || 4 == this.playmode, this.tweened = this.properties[1], this.easing = this.properties[2], this.target = this.properties[3], this.targetmode = this.properties[4], this.useCurrent = !1, 1 === this.targetmode && (this.target = "relative(" + this.target + ")"), this.duration = this.properties[5], this.enforce = 1 === this.properties[6], this.value = 0, this.tween_list = {}, this.addToTweenList("default", this.tweened, this.easing, "current", this.target, this.duration, this.enforce), 1 === this.properties[0] && this.startTween(0), 2 === this.properties[0] && this.startTween(2), 3 === this.properties[0] && this.startTween(3), 4 === this.properties[0] && this.startTween(4)
        }, e.parseCurrent = function(t, e) {
            void 0 === e && (e = "current");
            var i = trim(e);
            e = trim(e);
            var r = this.value;
            if ("current" === e) switch (t) {
                case 0:
                    i = this.inst.x + "," + this.inst.y;
                    break;
                case 1:
                case 2:
                case 3:
                    i = this.inst.width + "," + this.inst.height;
                    break;
                case 4:
                    i = cr.to_degrees(this.inst.angle) + "," + cr.to_degrees(this.inst.angle);
                    break;
                case 5:
                    i = 100 * this.inst.opacity + "," + 100 * this.inst.opacity;
                    break;
                case 6:
                    i = r + "," + r;
                    break;
                case 7:
                case 8:
                    i = this.inst.x + "," + this.inst.y;
                    break;
                case 9:
                    i = void 0 !== this.inst.curFrame ? this.inst.width / this.inst.curFrame.width + "," + this.inst.height / this.inst.curFrame.height : "1,1"
            }
            if ("relative" === e.substring(0, 8)) {
                var n = e.match(/\((.*?)\)/);
                if (n) var s = parseFloat(n[1].split(",")[0]),
                    a = parseFloat(n[1].split(",")[1]);
                switch (isNaN(s) && (s = 0), isNaN(a) && (a = 0), t) {
                    case 0:
                        i = this.inst.x + s + "," + (this.inst.y + a);
                        break;
                    case 1:
                    case 2:
                    case 3:
                        i = this.inst.width + s + "," + (this.inst.height + a);
                        break;
                    case 4:
                        i = cr.to_degrees(this.inst.angle) + s + "," + (cr.to_degrees(this.inst.angle) + a);
                        break;
                    case 5:
                        i = 100 * this.inst.opacity + s + "," + (100 * this.inst.opacity + a);
                        break;
                    case 6:
                        i = r + s + "," + r + s;
                        break;
                    case 7:
                        i = this.inst.x + s + "," + this.inst.y;
                        break;
                    case 8:
                        i = this.inst.x + "," + (this.inst.y + s);
                        break;
                    case 9:
                        i = s + "," + a
                }
            }
            return i
        }, e.addToTweenList = function(t, e, i, r, n, s, a) {
            r = this.parseCurrent(e, r), n = this.parseCurrent(e, n), void 0 !== this.tween_list[t] && delete this.tween_list[t], this.tween_list[t] = new TweenObject(t, e, i, r, n, s, a), this.tween_list[t].dt = 0
        }, e.saveToJSON = function() {
            JSON.stringify(this.tween_list.default);
            return {
                playmode: this.playmode,
                active: this.active,
                tweened: this.tweened,
                easing: this.easing,
                target: this.target,
                targetmode: this.targetmode,
                useCurrent: this.useCurrent,
                duration: this.duration,
                enforce: this.enforce,
                value: this.value,
                tweenlist: JSON.stringify(this.tween_list.default)
            }
        }, TweenObject.Load = function(t, e, i, r, n, s, a, o) {
            var h = new TweenObject(e, i, r, n, s, a, o);
            for (var c in t) h[c] = t[c];
            return h
        }, e.loadFromJSON = function(t) {
            var e = JSON.parse(t.tweenlist),
                i = TweenObject.Load(e, e.name, e.tweened, e.easefunc, e.initialparam1 + "," + e.initialparam2, e.targetparam1 + "," + e.targetparam2, e.duration, e.enforce);
            this.tween_list.default = i, this.playmode = t.playmode, this.active = t.active, this.movement = t.tweened, this.easing = t.easing, this.target = t.target, this.targetmode = t.targetmode, this.useCurrent = t.useCurrent, this.duration = t.duration, this.enforce = t.enforce, this.value = t.value
        }, e.setProgressTo = function(t) {
            for (var e in t > 1 && (t = 1), t < 0 && (t = 0), this.tween_list) {
                var i = this.tween_list[e];
                i.lastKnownValue = 0, i.lastKnownValue2 = 0, i.state = 3, i.progress = t * i.duration;
                var r = i.OnTick(0);
                this.updateTween(i, r)
            }
        }, e.startTween = function(t) {
            for (var e in this.tween_list) {
                var i = this.tween_list[e];
                if (this.useCurrent) {
                    var r = this.parseCurrent(i.tweened, "current"),
                        n = this.parseCurrent(i.tweened, this.target);
                    i.setInitial(r), i.setTarget(n)
                }
                0 === t && (i.progress = 1e-6, i.lastKnownValue = 0, i.lastKnownValue2 = 0, i.onStart = !0, i.state = 1), 1 === t && (i.state = i.lastState), 2 !== t && 4 !== t || (i.progress = 1e-6, i.lastKnownValue = 0, i.lastKnownValue2 = 0, i.onStart = !0, 2 == t && (i.state = 4), 4 == t && (i.state = 6)), 3 === t && (i.progress = 1e-6, i.lastKnownValue = 0, i.lastKnownValue2 = 0, i.onStart = !0, i.state = 5)
            }
        }, e.stopTween = function(t) {
            for (var e in this.tween_list) {
                var i = this.tween_list[e];
                3 != i.state && 0 != i.state && (i.lastState = i.state), 1 === t && (i.progress = 0), 2 === t && (i.progress = i.duration), i.state = 3;
                var r = i.OnTick(0);
                this.updateTween(i, r)
            }
        }, e.reverseTween = function(t) {
            for (var e in this.tween_list) {
                var i = this.tween_list[e];
                1 === t && (i.progress = i.duration, i.lastKnownValue = 0, i.lastKnownValue2 = 0, i.onReverseStart = !0), i.state = 2
            }
        }, e.updateTween = function(t, e) {
            if (0 === t.tweened) t.enforce ? (this.inst.x = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e, this.inst.y = t.initialparam2 + (t.targetparam2 - t.initialparam2) * e) : (this.inst.x += (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue, this.inst.y += (t.targetparam2 - t.initialparam2) * e - t.lastKnownValue2, t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e, t.lastKnownValue2 = (t.targetparam2 - t.initialparam2) * e);
            else if (1 === t.tweened) t.enforce ? (this.inst.width = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e, this.inst.height = t.initialparam2 + (t.targetparam2 - t.initialparam2) * e) : (this.inst.width += (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue, this.inst.height += (t.targetparam2 - t.initialparam2) * e - t.lastKnownValue2, t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e, t.lastKnownValue2 = (t.targetparam2 - t.initialparam2) * e);
            else if (2 === t.tweened) t.enforce ? this.inst.width = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e : (this.inst.width += (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue, t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e);
            else if (3 === t.tweened) t.enforce ? this.inst.height = t.initialparam2 + (t.targetparam2 - t.initialparam2) * e : (this.inst.height += (t.targetparam2 - t.initialparam2) * e - t.lastKnownValue2, t.lastKnownValue2 = (t.targetparam2 - t.initialparam2) * e);
            else if (4 === t.tweened)
                if (t.enforce) {
                    var i = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e;
                    this.inst.angle = cr.clamp_angle(cr.to_radians(i))
                } else {
                    i = (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue;
                    this.inst.angle = cr.clamp_angle(this.inst.angle + cr.to_radians(i)), t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e
                }
            else if (5 === t.tweened) t.enforce ? this.inst.opacity = (t.initialparam1 + (t.targetparam1 - t.initialparam1) * e) / 100 : (this.inst.opacity += ((t.targetparam1 - t.initialparam1) * e - t.lastKnownValue) / 100, t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e);
            else if (6 === t.tweened) t.enforce ? this.value = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e : (this.value += (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue, t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e);
            else if (7 === t.tweened) t.enforce ? this.inst.x = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e : (this.inst.x += (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue, t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e);
            else if (8 === t.tweened) t.enforce ? this.inst.y = t.initialparam2 + (t.targetparam2 - t.initialparam2) * e : (this.inst.y += (t.targetparam2 - t.initialparam2) * e - t.lastKnownValue2, t.lastKnownValue2 = (t.targetparam2 - t.initialparam2) * e);
            else if (9 === t.tweened) {
                var r = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e,
                    n = t.initialparam2 + (t.targetparam2 - t.initialparam2) * e;
                this.inst.width < 0 && (r = t.initialparam1 + (t.targetparam1 + t.initialparam1) * -e), this.inst.height < 0 && (n = t.initialparam2 + (t.targetparam2 + t.initialparam2) * -e), t.enforce ? (this.inst.width = this.inst.curFrame.width * r, this.inst.height = this.inst.curFrame.height * n) : (this.inst.width < 0 ? (this.inst.width = r * (this.inst.width / (-1 + t.lastKnownValue)), t.lastKnownValue = r + 1) : (this.inst.width = r * (this.inst.width / (1 + t.lastKnownValue)), t.lastKnownValue = r - 1), this.inst.height < 0 ? (this.inst.height = n * (this.inst.height / (-1 + t.lastKnownValue2)), t.lastKnownValue2 = n + 1) : (this.inst.height = n * (this.inst.height / (1 + t.lastKnownValue2)), t.lastKnownValue2 = n - 1))
            }
            this.inst.set_bbox_changed()
        }, e.tick = function() {
            var t = this.runtime.getDt(this.inst),
                e = this.tween_list.default;
            if (0 !== e.state) {
                e.onStart && (this.runtime.trigger(cr.behaviors.lunarray_LiteTween.prototype.cnds.OnStart, this.inst), e.onStart = !1), e.onReverseStart && (this.runtime.trigger(cr.behaviors.lunarray_LiteTween.prototype.cnds.OnReverseStart, this.inst), e.onReverseStart = !1), this.active = 1 == e.state || 2 == e.state || 4 == e.state || 5 == e.state || 6 == e.state;
                var i = e.OnTick(t);
                this.updateTween(e, i), e.onEnd && (this.runtime.trigger(cr.behaviors.lunarray_LiteTween.prototype.cnds.OnEnd, this.inst), e.onEnd = !1), e.onReverseEnd && (this.runtime.trigger(cr.behaviors.lunarray_LiteTween.prototype.cnds.OnReverseEnd, this.inst), e.onReverseEnd = !1)
            }
        }, t.cnds = {};
        var i = t.cnds;
        i.IsActive = function() {
            return 0 !== this.tween_list.default.state
        }, i.IsReversing = function() {
            return 2 == this.tween_list.default.state
        }, i.CompareProgress = function(t, e) {
            var i = this.tween_list.default;
            return cr.do_cmp(i.progress / i.duration, t, e)
        }, i.OnThreshold = function(t, e) {
            var i = this.tween_list.default;
            this.threshold = cr.do_cmp(i.progress / i.duration, t, e);
            var r = this.oldthreshold != this.threshold && this.threshold;
            return r && (this.oldthreshold = this.threshold), r
        }, i.OnStart = function() {
            return void 0 !== this.tween_list.default && this.tween_list.default.onStart
        }, i.OnReverseStart = function() {
            return void 0 !== this.tween_list.default && this.tween_list.default.onReverseStart
        }, i.OnEnd = function() {
            return void 0 !== this.tween_list.default && this.tween_list.default.onEnd
        }, i.OnReverseEnd = function() {
            return void 0 !== this.tween_list.default && this.tween_list.default.onReverseEnd
        }, t.acts = {};
        var r = t.acts;
        r.Start = function(t, e) {
            this.threshold = !1, this.oldthreshold = !1, this.useCurrent = 1 == e, this.startTween(t)
        }, r.Stop = function(t) {
            this.stopTween(t)
        }, r.Reverse = function(t) {
            this.threshold = !1, this.oldthreshold = !1, this.reverseTween(t)
        }, r.ProgressTo = function(t) {
            this.setProgressTo(t)
        }, r.SetDuration = function(t) {
            isNaN(t) || t < 0 || void 0 !== this.tween_list.default && (this.tween_list.default.duration = t)
        }, r.SetEnforce = function(t) {
            void 0 !== this.tween_list.default && (this.tween_list.default.enforce = 1 === t)
        }, r.SetInitial = function(t) {
            if (void 0 !== this.tween_list.default) {
                var e = this.parseCurrent(this.tween_list.default.tweened, t);
                this.tween_list.default.setInitial(e)
            }
        }, r.SetTarget = function(t, e, i) {
            if (void 0 !== this.tween_list.default && !isNaN(i)) {
                var r = this.tween_list.default,
                    n = i + "";
                this.targetmode = e;
                var s = "",
                    a = "";
                if (1 === e) {
                    switch (this.target = "relative(" + n + ")", t) {
                        case 0:
                            s = this.inst.x + i, a = r.targetparam2;
                            break;
                        case 1:
                            s = r.targetparam1, a = this.inst.y + i;
                            break;
                        case 2:
                            a = s = "" + cr.to_degrees(this.inst.angle + cr.to_radians(i));
                            break;
                        case 3:
                            a = s = "" + 100 * this.inst.opacity + i;
                            break;
                        case 4:
                            s = this.inst.width + i, a = r.targetparam2;
                            break;
                        case 5:
                            s = r.targetparam1, a = this.inst.height + i;
                            break;
                        case 6:
                            s = i, a = i
                    }
                    n = s + "," + a
                } else {
                    switch (t) {
                        case 0:
                            s = i, a = r.targetparam2;
                            break;
                        case 1:
                            s = r.targetparam1, a = i;
                            break;
                        case 2:
                        case 3:
                            s = i, a = i;
                            break;
                        case 4:
                            s = i, a = r.targetparam2;
                            break;
                        case 5:
                            s = r.targetparam1, a = i;
                            break;
                        case 6:
                            s = i, a = i
                    }
                    n = s + "," + a, this.target = n
                }
                var o = this.parseCurrent(this.tween_list.default.tweened, "current"),
                    h = this.parseCurrent(this.tween_list.default.tweened, n);
                r.setInitial(o), r.setTarget(h)
            }
        }, r.SetTweenedProperty = function(t) {
            void 0 !== this.tween_list.default && (this.tween_list.default.tweened = t)
        }, r.SetEasing = function(t) {
            void 0 !== this.tween_list.default && (this.tween_list.default.easefunc = t)
        }, r.SetEasingParam = function(t, e, i, r, n) {
            void 0 !== this.tween_list.default && (this.tween_list.default.easingparam[t].optimized = !1, this.tween_list.default.easingparam[t].a = e, this.tween_list.default.easingparam[t].p = i, this.tween_list.default.easingparam[t].t = r, this.tween_list.default.easingparam[t].s = n)
        }, r.ResetEasingParam = function() {
            void 0 !== this.tween_list.default && (this.tween_list.default.optimized = !0)
        }, r.SetValue = function(t) {
            var e = this.tween_list.default;
            this.value = t, 6 === e.tweened && e.setInitial(this.parseCurrent(e.tweened, "current"))
        }, r.SetParameter = function(t, e, i, r, n) {
            if (void 0 === this.tween_list.default) this.addToTweenList("default", t, e, initial, i, r, n, 0);
            else {
                var s = this.tween_list.default;
                s.tweened = t, s.easefunc = e, s.setInitial(this.parseCurrent(t, "current")), s.setTarget(this.parseCurrent(t, i)), s.duration = r, s.enforce = 1 === n
            }
        }, t.exps = {};
        var n = t.exps;
        n.State = function(t) {
            var e = "N/A";
            switch (this.tween_list.default.state) {
                case 0:
                    e = "paused";
                    break;
                case 1:
                    e = "playing";
                    break;
                case 2:
                    e = "reversing";
                    break;
                case 3:
                    e = "seeking"
            }
            t.set_string(e)
        }, n.Progress = function(t) {
            var e = this.tween_list.default.progress / this.tween_list.default.duration;
            t.set_float(e)
        }, n.Duration = function(t) {
            t.set_float(this.tween_list.default.duration)
        }, n.Target = function(t) {
            var e = this.tween_list.default,
                i = "N/A";
            switch (e.tweened) {
                case 0:
                    i = e.targetparam1;
                    break;
                case 1:
                    i = e.targetparam2;
                    break;
                case 2:
                case 3:
                case 4:
                    i = e.targetparam1;
                    break;
                case 5:
                    i = e.targetparam2;
                    break;
                case 6:
                    i = e.targetparam1
            }
            t.set_float(i)
        }, n.Value = function(t) {
            var e = this.value;
            t.set_float(e)
        }, n.Tween = function(t, e, i, r, n) {
            var s = r > 1 ? 1 : r,
                a = easeFunc(n, s < 0 ? 0 : s, 0, 1, 1, !1, !1);
            t.set_float(e + a * (i - e))
        }
    }(), cr.getObjectRefTable = function() {
        return [cr.plugins_.NinePatch, cr.plugins_.Sprite, cr.plugins_.SpriteFontPlus, cr.plugins_.Spritefont2, cr.plugins_.TiledBg, cr.plugins_.Touch, cr.plugins_.Arr, cr.plugins_.Browser, cr.plugins_.Audio, cr.plugins_.Dictionary, cr.plugins_.Famobi, cr.plugins_.Function, cr.plugins_.Globals, cr.plugins_.Keyboard, cr.plugins_.LocalStorage, cr.plugins_.Particles, cr.behaviors.lunarray_LiteTween, cr.behaviors.Fade, cr.behaviors.Timer, cr.behaviors.Anchor, cr.behaviors.Rex_pin2imgpt, cr.behaviors.Pin, cr.behaviors.Sin, cr.behaviors.Rotate, cr.behaviors.lgshake, cr.system_object.prototype.cnds.IsGroupActive, cr.system_object.prototype.cnds.OnLayoutStart, cr.system_object.prototype.acts.SetVar, cr.plugins_.Function.prototype.cnds.OnFunction, cr.system_object.prototype.cnds.CompareVar, cr.system_object.prototype.cnds.Compare, cr.plugins_.Sprite.prototype.acts.Destroy, cr.plugins_.Globals.prototype.acts.SetInstanceVar, cr.plugins_.Arr.prototype.acts.SetSize, cr.plugins_.Function.prototype.acts.CallFunction, cr.system_object.prototype.cnds.For, cr.plugins_.Arr.prototype.exps.Height, cr.plugins_.Arr.prototype.exps.Width, cr.plugins_.Arr.prototype.cnds.CompareXY, cr.system_object.prototype.exps.loopindex, cr.system_object.prototype.acts.CreateObject, cr.plugins_.Sprite.prototype.acts.SetInstanceVar, cr.plugins_.Arr.prototype.exps.At, cr.plugins_.Sprite.prototype.acts.SetSize, cr.plugins_.Arr.prototype.acts.SetXY, cr.plugins_.Sprite.prototype.exps.UID, cr.system_object.prototype.acts.AddVar, cr.plugins_.Function.prototype.exps.Param, cr.system_object.prototype.cnds.Else, cr.system_object.prototype.acts.SubVar, cr.plugins_.Sprite.prototype.cnds.PickByUID, cr.plugins_.Function.prototype.exps.Call, cr.plugins_.Globals.prototype.acts.SetBoolInstanceVar, cr.plugins_.Spritefont2.prototype.cnds.CompareInstanceVar, cr.plugins_.Spritefont2.prototype.acts.SetText, cr.system_object.prototype.acts.StopLoop, cr.plugins_.Globals.prototype.cnds.IsBoolInstanceVarSet, cr.plugins_.Function.prototype.acts.SetReturnValue, cr.system_object.prototype.exps.floor, cr.plugins_.Arr.prototype.acts.Clear, cr.system_object.prototype.exps.random, cr.system_object.prototype.cnds.While, cr.plugins_.Sprite.prototype.acts.SetPos, cr.plugins_.Sprite.prototype.exps.Width, cr.plugins_.Sprite.prototype.exps.Height, cr.plugins_.Sprite.prototype.acts.SetBoolInstanceVar, cr.plugins_.Dictionary.prototype.acts.Clear, cr.system_object.prototype.exps.tokencount, cr.system_object.prototype.cnds.Repeat, cr.system_object.prototype.exps.int, cr.system_object.prototype.exps.tokenat, cr.plugins_.Dictionary.prototype.cnds.HasKey, cr.system_object.prototype.exps.str, cr.plugins_.Arr.prototype.acts.Pop, cr.plugins_.Dictionary.prototype.acts.AddKey, cr.plugins_.Globals.prototype.cnds.CompareInstanceVar, cr.behaviors.lunarray_LiteTween.prototype.acts.SetTarget, cr.plugins_.Sprite.prototype.exps.X, cr.behaviors.lunarray_LiteTween.prototype.acts.Start, cr.plugins_.Sprite.prototype.exps.Y, cr.plugins_.Famobi.prototype.acts.trackEventLevelStart, cr.plugins_.Famobi.prototype.acts.trackScreen, cr.plugins_.TiledBg.prototype.acts.SetPos, cr.plugins_.TiledBg.prototype.acts.SetSize, cr.plugins_.Audio.prototype.acts.Stop, cr.system_object.prototype.acts.Wait, cr.plugins_.Touch.prototype.cnds.OnTouchObject, cr.behaviors.lunarray_LiteTween.prototype.cnds.IsActive, cr.plugins_.Famobi.prototype.cnds.IsAdShowing, cr.plugins_.Sprite.prototype.cnds.CompareFrame, cr.plugins_.Audio.prototype.acts.Play, cr.plugins_.Sprite.prototype.cnds.IsBoolInstanceVarSet, cr.behaviors.lunarray_LiteTween.prototype.acts.SetParameter, cr.plugins_.Sprite.prototype.acts.MoveToTop, cr.plugins_.Sprite.prototype.acts.Spawn, cr.behaviors.Pin.prototype.acts.Pin, cr.plugins_.Function.prototype.cnds.CompareParam, cr.behaviors.Sin.prototype.acts.SetActive, cr.plugins_.Sprite.prototype.acts.SetAnimFrame, cr.behaviors.lunarray_LiteTween.prototype.cnds.OnEnd, cr.plugins_.Globals.prototype.acts.AddInstanceVar, cr.plugins_.LocalStorage.prototype.acts.SetItem, cr.behaviors.lunarray_LiteTween.prototype.cnds.OnStart, cr.plugins_.Sprite.prototype.cnds.OnCreated, cr.plugins_.Sprite.prototype.acts.SetAnim, cr.system_object.prototype.cnds.Every, cr.plugins_.Spritefont2.prototype.acts.AppendText, cr.plugins_.Spritefont2.prototype.acts.SetVisible, cr.system_object.prototype.cnds.TriggerOnce, cr.plugins_.Browser.prototype.cnds.IsPortraitLandscape, cr.plugins_.Sprite.prototype.acts.RotateClockwise, cr.behaviors.lgshake.prototype.acts.Shake, cr.system_object.prototype.acts.SetLayerVisible, cr.behaviors.Anchor.prototype.acts.SetEnabled, cr.plugins_.Sprite.prototype.acts.SetScale, cr.system_object.prototype.cnds.PickAll, cr.plugins_.Famobi.prototype.acts.trackEventLevelFail, cr.system_object.prototype.acts.GoToLayout, cr.plugins_.Sprite.prototype.cnds.CompareOpacity, cr.plugins_.Sprite.prototype.acts.SetVisible, cr.plugins_.Famobi.prototype.acts.MoreGamesLink, cr.plugins_.Audio.prototype.acts.SetSilent, cr.plugins_.Famobi.prototype.acts.trackEventVolumeChange, cr.plugins_.LocalStorage.prototype.acts.RemoveItem, cr.plugins_.Touch.prototype.cnds.OnTouchStart, cr.system_object.prototype.exps.lerp, cr.system_object.prototype.exps.dt, cr.system_object.prototype.exps.distance, cr.plugins_.Sprite.prototype.acts.SetTowardPosition, cr.plugins_.Sprite.prototype.acts.SetWidth, cr.behaviors.Timer.prototype.acts.StartTimer, cr.behaviors.Timer.prototype.cnds.OnTimer, cr.plugins_.Sprite.prototype.exps.LayerName, cr.plugins_.Sprite.prototype.cnds.OnAnimFinished, cr.system_object.prototype.acts.SetGroupActive, cr.plugins_.Spritefont2.prototype.acts.SetInstanceVar, cr.plugins_.Spritefont2.prototype.acts.SetHAlign, cr.plugins_.Famobi.prototype.acts.trackEventTotalScore, cr.plugins_.Sprite.prototype.acts.SetOpacity, cr.system_object.prototype.acts.SetLayerScale, cr.system_object.prototype.exps.min, cr.system_object.prototype.exps.windowheight, cr.system_object.prototype.exps.windowwidth, cr.system_object.prototype.acts.SetLayerAngle, cr.plugins_.Sprite.prototype.acts.SetAngle, cr.system_object.prototype.exps.layerangle, cr.system_object.prototype.acts.ScrollX, cr.system_object.prototype.acts.ScrollY, cr.plugins_.Sprite.prototype.cnds.CompareInstanceVar, cr.plugins_.Sprite.prototype.acts.SetHeight, cr.plugins_.Sprite.prototype.acts.ZMoveToObject, cr.plugins_.Sprite.prototype.exps.AnimationFrameCount, cr.plugins_.Particles.prototype.acts.Destroy, cr.plugins_.Famobi.prototype.acts.trackEventLevelSuccess, cr.plugins_.Famobi.prototype.acts.trackEventLevelScore, cr.plugins_.Sprite.prototype.cnds.OnDestroyed, cr.behaviors.lunarray_LiteTween.prototype.acts.Reverse, cr.plugins_.Sprite.prototype.acts.SetAnimSpeed, cr.behaviors.lunarray_LiteTween.prototype.cnds.OnReverseEnd, cr.behaviors.Fade.prototype.acts.StartFade, cr.behaviors.Fade.prototype.cnds.OnFadeOutEnd, cr.plugins_.Sprite.prototype.acts.LoadURL, cr.plugins_.Famobi.prototype.exps.GetMoreGamesButtonImage, cr.plugins_.Keyboard.prototype.cnds.OnKey, cr.behaviors.Rex_pin2imgpt.prototype.acts.Pin, cr.plugins_.LocalStorage.prototype.acts.CheckItemExists, cr.plugins_.LocalStorage.prototype.cnds.OnItemExists, cr.plugins_.LocalStorage.prototype.acts.GetItem, cr.plugins_.LocalStorage.prototype.cnds.OnItemGet, cr.plugins_.LocalStorage.prototype.exps.ItemValue, cr.plugins_.LocalStorage.prototype.cnds.OnItemMissing, cr.plugins_.Audio.prototype.cnds.IsTagPlaying, cr.system_object.prototype.acts.SetLayoutScale, cr.behaviors.Sin.prototype.acts.UpdateInitialState, cr.plugins_.Sprite.prototype.acts.SetY, cr.plugins_.Sprite.prototype.exps.ImagePointY, cr.system_object.prototype.cnds.LayerVisible, cr.plugins_.Sprite.prototype.exps.AnimationFrame, cr.plugins_.Famobi.prototype.cnds.HasFeatureStandalone, cr.plugins_.Famobi.prototype.exps.Translate, cr.plugins_.Browser.prototype.acts.GoToURLWindow, cr.plugins_.Spritefont2.prototype.cnds.OnCreated, cr.plugins_.Arr.prototype.acts.JSONLoad, cr.plugins_.Spritefont2.prototype.acts.SetCharacterWidth, cr.system_object.prototype.acts.SetLayerOpacity, cr.plugins_.Globals.prototype.acts.SubInstanceVar]
    };