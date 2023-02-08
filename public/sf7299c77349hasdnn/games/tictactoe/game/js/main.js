/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
(function() {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        b = "undefined" !== typeof module && module.exports,
        f = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        e = function() {
            for (var e, h = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
                    "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                ], c = 0, f = h.length, b = {}; c < f; c++)
                if ((e = h[c]) && e[1] in a) {
                    for (c = 0; c < e.length; c++) b[h[0][c]] =
                        e[c];
                    return b
                }
            return !1
        }(),
        l = {
            change: e.fullscreenchange,
            error: e.fullscreenerror
        },
        m = {
            request: function(b) {
                var h = e.requestFullscreen;
                b = b || a.documentElement;
                if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) b[h]();
                else b[h](f && Element.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                a[e.exitFullscreen]()
            },
            toggle: function(a) {
                this.isFullscreen ? this.exit() : this.request(a)
            },
            onchange: function(a) {
                this.on("change", a)
            },
            onerror: function(a) {
                this.on("error", a)
            },
            on: function(e, h) {
                var c = l[e];
                c && a.addEventListener(c, h, !1)
            },
            off: function(e,
                h) {
                var c = l[e];
                c && a.removeEventListener(c, h, !1)
            },
            raw: e
        };
    e ? (Object.defineProperties(m, {
        isFullscreen: {
            get: function() {
                return !!a[e.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return a[e.fullscreenElement]
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return !!a[e.fullscreenEnabled]
            }
        }
    }), b ? module.exports = m : window.screenfull = m) : b ? module.exports = !1 : window.screenfull = !1
})();
(function() {
    function a(c) {
        c = String(c);
        return c.charAt(0).toUpperCase() + c.slice(1)
    }

    function b(c, d) {
        var g = -1,
            a = c ? c.length : 0;
        if ("number" == typeof a && -1 < a && a <= p)
            for (; ++g < a;) d(c[g], g, c);
        else e(c, d)
    }

    function f(c) {
        c = String(c).replace(/^ +| +$/g, "");
        return /^(?:webOS|i(?:OS|P))/.test(c) ? c : a(c)
    }

    function e(c, d) {
        for (var g in c) w.call(c, g) && d(c[g], g, c)
    }

    function l(c) {
        return null == c ? a(c) : y.call(c).slice(8, -1)
    }

    function m(c, d) {
        var g = null != c ? typeof c[d] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(g) &&
            ("object" == g ? !!c[d] : !0)
    }

    function q(c) {
        return String(c).replace(/([ -])(?!$)/g, "$1?")
    }

    function h(c, d) {
        var g = null;
        b(c, function(a, e) {
            g = d(g, a, e, c)
        });
        return g
    }

    function c(d) {
        function g(c) {
            return h(c, function(c, g) {
                var p = g.pattern || q(g);
                !c && (c = RegExp("\\b" + p + " *\\d+[.\\w_]*", "i").exec(d) || RegExp("\\b" + p + " *\\w+-[\\w]*", "i").exec(d) || RegExp("\\b" + p + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(d)) && ((c = String(g.label && !RegExp(p, "i").test(g.label) ? g.label : c).split("/"))[1] && !/[\d.]+/.test(c[0]) && (c[0] +=
                    " " + c[1]), g = g.label || g, c = f(c[0].replace(RegExp(p, "i"), g).replace(RegExp("; *(?:" + g + "[_-])?", "i"), " ").replace(RegExp("(" + g + ")[-_.]?(\\w)", "i"), "$1 $2")));
                return c
            })
        }

        function a(c) {
            return h(c, function(c, g) {
                return c || (RegExp(g + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(d) || 0)[1] || null
            })
        }
        var p = n,
            b = d && "object" == typeof d && "String" != l(d);
        b && (p = d, d = null);
        var r = p.navigator || {},
            t = r.userAgent || "";
        d || (d = t);
        var x = b ? !!r.likeChrome : /\bChrome\b/.test(d) && !/internal|\n/i.test(y.toString()),
            w = b ? "Object" : "ScriptBridgingProxyObject",
            K = b ? "Object" : "Environment",
            F = b && p.java ? "JavaPackage" : l(p.java),
            O = b ? "Object" : "RuntimeObject";
        K = (F = /\bJava/.test(F) && p.java) && l(p.environment) == K;
        var P = F ? "a" : "\u03b1",
            Q = F ? "b" : "\u03b2",
            L = p.document || {},
            D = p.operamini || p.opera,
            H = B.test(H = b && D ? D["[[Class]]"] : l(D)) ? H : D = null,
            k, I = d;
        b = [];
        var J = null,
            E = d == t;
        t = E && D && "function" == typeof D.version && D.version();
        var z = function(c) {
                return h(c, function(c, g) {
                    return c || RegExp("\\b" + (g.pattern || q(g)) + "\\b", "i").exec(d) && (g.label ||
                        g)
                })
            }([{
                label: "EdgeHTML",
                pattern: "Edge"
            }, "Trident", {
                label: "WebKit",
                pattern: "AppleWebKit"
            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
            u = function(c) {
                return h(c, function(c, g) {
                    return c || RegExp("\\b" + (g.pattern || q(g)) + "\\b", "i").exec(d) && (g.label || g)
                })
            }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                    label: "Microsoft Edge",
                    pattern: "Edge"
                }, "Midori", "Nook Browser",
                "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                    label: "Samsung Internet",
                    pattern: "SamsungBrowser"
                }, "SeaMonkey", {
                    label: "Silk",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Sleipnir", "SlimBrowser", {
                    label: "SRWare Iron",
                    pattern: "Iron"
                }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                    label: "Opera Mini",
                    pattern: "OPiOS"
                }, "Opera", {
                    label: "Opera",
                    pattern: "OPR"
                }, "Chrome", {
                    label: "Chrome Mobile",
                    pattern: "(?:CriOS|CrMo)"
                }, {
                    label: "Firefox",
                    pattern: "(?:Firefox|Minefield)"
                }, {
                    label: "Firefox for iOS",
                    pattern: "FxiOS"
                },
                {
                    label: "IE",
                    pattern: "IEMobile"
                }, {
                    label: "IE",
                    pattern: "MSIE"
                }, "Safari"
            ]),
            A = g([{
                    label: "BlackBerry",
                    pattern: "BB10"
                }, "BlackBerry", {
                    label: "Galaxy S",
                    pattern: "GT-I9000"
                }, {
                    label: "Galaxy S2",
                    pattern: "GT-I9100"
                }, {
                    label: "Galaxy S3",
                    pattern: "GT-I9300"
                }, {
                    label: "Galaxy S4",
                    pattern: "GT-I9500"
                }, {
                    label: "Galaxy S5",
                    pattern: "SM-G900"
                }, {
                    label: "Galaxy S6",
                    pattern: "SM-G920"
                }, {
                    label: "Galaxy S6 Edge",
                    pattern: "SM-G925"
                }, {
                    label: "Galaxy S7",
                    pattern: "SM-G930"
                }, {
                    label: "Galaxy S7 Edge",
                    pattern: "SM-G935"
                }, "Google TV", "Lumia", "iPad",
                "iPod", "iPhone", "Kindle", {
                    label: "Kindle Fire",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                    label: "Wii U",
                    pattern: "WiiU"
                }, "Wii", "Xbox One", {
                    label: "Xbox 360",
                    pattern: "Xbox"
                }, "Xoom"
            ]),
            C = function(c) {
                return h(c, function(c, g, p) {
                    return c || (g[A] || g[/^[a-z]+(?: +[a-z]+\b)*/i.exec(A)] || RegExp("\\b" + q(p) + "(?:\\b|\\w*\\d)", "i").exec(d)) && p
                })
            }({
                Apple: {
                    iPad: 1,
                    iPhone: 1,
                    iPod: 1
                },
                Archos: {},
                Amazon: {
                    Kindle: 1,
                    "Kindle Fire": 1
                },
                Asus: {
                    Transformer: 1
                },
                "Barnes & Noble": {
                    Nook: 1
                },
                BlackBerry: {
                    PlayBook: 1
                },
                Google: {
                    "Google TV": 1,
                    Nexus: 1
                },
                HP: {
                    TouchPad: 1
                },
                HTC: {},
                LG: {},
                Microsoft: {
                    Xbox: 1,
                    "Xbox One": 1
                },
                Motorola: {
                    Xoom: 1
                },
                Nintendo: {
                    "Wii U": 1,
                    Wii: 1
                },
                Nokia: {
                    Lumia: 1
                },
                Samsung: {
                    "Galaxy S": 1,
                    "Galaxy S2": 1,
                    "Galaxy S3": 1,
                    "Galaxy S4": 1
                },
                Sony: {
                    PlayStation: 1,
                    "PlayStation Vita": 1
                }
            }),
            v = function(c) {
                return h(c, function(c, g) {
                    var p = g.pattern || q(g);
                    if (!c && (c = RegExp("\\b" + p + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(d))) {
                        var a = c,
                            e = g.label || g,
                            b = {
                                "10.0": "10",
                                "6.4": "10 Technical Preview",
                                "6.3": "8.1",
                                "6.2": "8",
                                "6.1": "Server 2008 R2 / 7",
                                "6.0": "Server 2008 / Vista",
                                "5.2": "Server 2003 / XP 64-bit",
                                "5.1": "XP",
                                "5.01": "2000 SP1",
                                "5.0": "2000",
                                "4.0": "NT",
                                "4.90": "ME"
                            };
                        p && e && /^Win/i.test(a) && !/^Windows Phone /i.test(a) && (b = b[/[\d.]+$/.exec(a)]) && (a = "Windows " + b);
                        a = String(a);
                        p && e && (a = a.replace(RegExp(p, "i"), e));
                        c = a = f(a.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/,
                            " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                    }
                    return c
                })
            }(["Windows Phone", "Android", "CentOS", {
                    label: "Chrome OS",
                    pattern: "CrOS"
                }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac",
                "Windows 98;", "Windows "
            ]);
        z && (z = [z]);
        C && !A && (A = g([C]));
        if (k = /\bGoogle TV\b/.exec(A)) A = k[0];
        /\bSimulator\b/i.test(d) && (A = (A ? A + " " : "") + "Simulator");
        "Opera Mini" == u && /\bOPiOS\b/.test(d) && b.push("running in Turbo/Uncompressed mode");
        "IE" == u && /\blike iPhone OS\b/.test(d) ? (k = c(d.replace(/like iPhone OS/, "")), C = k.manufacturer, A = k.product) : /^iP/.test(A) ? (u || (u = "Safari"), v = "iOS" + ((k = / OS ([\d_]+)/i.exec(d)) ? " " + k[1].replace(/_/g, ".") : "")) : "Konqueror" != u || /buntu/i.test(v) ? C && "Google" != C && (/Chrome/.test(u) &&
            !/\bMobile Safari\b/i.test(d) || /\bVita\b/.test(A)) || /\bAndroid\b/.test(v) && /^Chrome/.test(u) && /\bVersion\//i.test(d) ? (u = "Android Browser", v = /\bAndroid\b/.test(v) ? v : "Android") : "Silk" == u ? (/\bMobi/i.test(d) || (v = "Android", b.unshift("desktop mode")), /Accelerated *= *true/i.test(d) && b.unshift("accelerated")) : "PaleMoon" == u && (k = /\bFirefox\/([\d.]+)\b/.exec(d)) ? b.push("identifying as Firefox " + k[1]) : "Firefox" == u && (k = /\b(Mobile|Tablet|TV)\b/i.exec(d)) ? (v || (v = "Firefox OS"), A || (A = k[1])) : !u || (k = !/\bMinefield\b/i.test(d) &&
            /\b(?:Firefox|Safari)\b/.exec(u)) ? (u && !A && /[\/,]|^[^(]+?\)/.test(d.slice(d.indexOf(k + "/") + 8)) && (u = null), (k = A || C || v) && (A || C || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(v)) && (u = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(v) ? v : k) + " Browser")) : "Electron" == u && (k = (/\bChrome\/([\d.]+)\b/.exec(d) || 0)[1]) && b.push("Chromium " + k) : v = "Kubuntu";
        t || (t = a(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", q(u), "(?:Firefox|Minefield|NetFront)"]));
        if (k = "iCab" == z && 3 < parseFloat(t) && "WebKit" || /\bOpera\b/.test(u) && (/\bOPR\b/.test(d) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(d) && !/^(?:Trident|EdgeHTML)$/.test(z) && "WebKit" || !z && /\bMSIE\b/i.test(d) && ("Mac OS" == v ? "Tasman" : "Trident") || "WebKit" == z && /\bPlayStation\b(?! Vita\b)/i.test(u) && "NetFront") z = [k];
        "IE" == u && (k = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(d) || 0)[1]) ? (u += " Mobile", v = "Windows Phone " + (/\+$/.test(k) ? k : k + ".x"), b.unshift("desktop mode")) : /\bWPDesktop\b/i.test(d) ? (u = "IE Mobile", v = "Windows Phone 8.x",
            b.unshift("desktop mode"), t || (t = (/\brv:([\d.]+)/.exec(d) || 0)[1])) : "IE" != u && "Trident" == z && (k = /\brv:([\d.]+)/.exec(d)) && (u && b.push("identifying as " + u + (t ? " " + t : "")), u = "IE", t = k[1]);
        if (E) {
            if (m(p, "global"))
                if (F && (k = F.lang.System, I = k.getProperty("os.arch"), v = v || k.getProperty("os.name") + " " + k.getProperty("os.version")), K) {
                    try {
                        t = p.require("ringo/engine").version.join("."), u = "RingoJS"
                    } catch (N) {
                        (k = p.system) && k.global.system == p.system && (u = "Narwhal", v || (v = k[0].os || null))
                    }
                    u || (u = "Rhino")
                } else "object" == typeof p.process &&
                    !p.process.browser && (k = p.process) && ("object" == typeof k.versions && ("string" == typeof k.versions.electron ? (b.push("Node " + k.versions.node), u = "Electron", t = k.versions.electron) : "string" == typeof k.versions.nw && (b.push("Chromium " + t, "Node " + k.versions.node), u = "NW.js", t = k.versions.nw)), u || (u = "Node.js", I = k.arch, v = k.platform, t = (t = /[\d.]+/.exec(k.version)) ? t[0] : null));
            else l(k = p.runtime) == w ? (u = "Adobe AIR", v = k.flash.system.Capabilities.os) : l(k = p.phantom) == O ? (u = "PhantomJS", t = (k = k.version || null) && k.major + "." + k.minor +
                "." + k.patch) : "number" == typeof L.documentMode && (k = /\bTrident\/(\d+)/i.exec(d)) ? (t = [t, L.documentMode], (k = +k[1] + 4) != t[1] && (b.push("IE " + t[1] + " mode"), z && (z[1] = ""), t[1] = k), t = "IE" == u ? String(t[1].toFixed(1)) : t[0]) : "number" == typeof L.documentMode && /^(?:Chrome|Firefox)\b/.test(u) && (b.push("masking as " + u + " " + t), u = "IE", t = "11.0", z = ["Trident"], v = "Windows");
            v = v && f(v)
        }
        t && (k = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(t) || /(?:alpha|beta)(?: ?\d)?/i.exec(d + ";" + (E && r.appMinorVersion)) || /\bMinefield\b/i.test(d) &&
            "a") && (J = /b/i.test(k) ? "beta" : "alpha", t = t.replace(RegExp(k + "\\+?$"), "") + ("beta" == J ? Q : P) + (/\d+\+?/.exec(k) || ""));
        if ("Fennec" == u || "Firefox" == u && /\b(?:Android|Firefox OS)\b/.test(v)) u = "Firefox Mobile";
        else if ("Maxthon" == u && t) t = t.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(A)) "Xbox 360" == A && (v = null), "Xbox 360" == A && /\bIEMobile\b/.test(d) && b.unshift("mobile mode");
        else if (!/^(?:Chrome|IE|Opera)$/.test(u) && (!u || A || /Browser|Mobi/.test(u)) || "Windows CE" != v && !/Mobi/i.test(d))
            if ("IE" == u && E) try {
                null === p.external &&
                    b.unshift("platform preview")
            } catch (N) {
                b.unshift("embedded")
            } else(/\bBlackBerry\b/.test(A) || /\bBB10\b/.test(d)) && (k = (RegExp(A.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(d) || 0)[1] || t) ? (k = [k, /BB10/.test(d)], v = (k[1] ? (A = null, C = "BlackBerry") : "Device Software") + " " + k[0], t = null) : this != e && "Wii" != A && (E && D || /Opera/.test(u) && /\b(?:MSIE|Firefox)\b/i.test(d) || "Firefox" == u && /\bOS X (?:\d+\.){2,}/.test(v) || "IE" == u && (v && !/^Win/.test(v) && 5.5 < t || /\bWindows XP\b/.test(v) && 8 < t || 8 == t && !/\bTrident\b/.test(d))) && !B.test(k =
                c.call(e, d.replace(B, "") + ";")) && k.name && (k = "ing as " + k.name + ((k = k.version) ? " " + k : ""), B.test(u) ? (/\bIE\b/.test(k) && "Mac OS" == v && (v = null), k = "identify" + k) : (k = "mask" + k, u = H ? f(H.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(k) && (v = null), E || (t = null)), z = ["Presto"], b.push(k));
            else u += " Mobile";
        if (k = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(d) || 0)[1]) {
            k = [parseFloat(k.replace(/\.(\d)$/, ".0$1")), k];
            if ("Safari" == u && "+" == k[1].slice(-1)) u = "WebKit Nightly", J = "alpha", t = k[1].slice(0, -1);
            else if (t == k[1] || t == (k[2] =
                    (/\bSafari\/([\d.]+\+?)/i.exec(d) || 0)[1])) t = null;
            k[1] = (/\bChrome\/([\d.]+)/i.exec(d) || 0)[1];
            537.36 == k[0] && 537.36 == k[2] && 28 <= parseFloat(k[1]) && "WebKit" == z && (z = ["Blink"]);
            E && (x || k[1]) ? (z && (z[1] = "like Chrome"), k = k[1] || (k = k[0], 530 > k ? 1 : 532 > k ? 2 : 532.05 > k ? 3 : 533 > k ? 4 : 534.03 > k ? 5 : 534.07 > k ? 6 : 534.1 > k ? 7 : 534.13 > k ? 8 : 534.16 > k ? 9 : 534.24 > k ? 10 : 534.3 > k ? 11 : 535.01 > k ? 12 : 535.02 > k ? "13+" : 535.07 > k ? 15 : 535.11 > k ? 16 : 535.19 > k ? 17 : 536.05 > k ? 18 : 536.1 > k ? 19 : 537.01 > k ? 20 : 537.11 > k ? "21+" : 537.13 > k ? 23 : 537.18 > k ? 24 : 537.24 > k ? 25 : 537.36 > k ? 26 : "Blink" !=
                z ? "27" : "28")) : (z && (z[1] = "like Safari"), k = (k = k[0], 400 > k ? 1 : 500 > k ? 2 : 526 > k ? 3 : 533 > k ? 4 : 534 > k ? "4+" : 535 > k ? 5 : 537 > k ? 6 : 538 > k ? 7 : 601 > k ? 8 : "8"));
            z && (z[1] += " " + (k += "number" == typeof k ? ".x" : /[.+]/.test(k) ? "" : "+"));
            "Safari" == u && (!t || 45 < parseInt(t)) && (t = k)
        }
        "Opera" == u && (k = /\bzbov|zvav$/.exec(v)) ? (u += " ", b.unshift("desktop mode"), "zvav" == k ? (u += "Mini", t = null) : u += "Mobile", v = v.replace(RegExp(" *" + k + "$"), "")) : "Safari" == u && /\bChrome\b/.exec(z && z[1]) && (b.unshift("desktop mode"), u = "Chrome Mobile", t = null, /\bOS X\b/.test(v) ? (C =
            "Apple", v = "iOS 4.3+") : v = null);
        t && 0 == t.indexOf(k = /[\d.]+$/.exec(v)) && -1 < d.indexOf("/" + k + "-") && (v = String(v.replace(k, "")).replace(/^ +| +$/g, ""));
        z && !/\b(?:Avant|Nook)\b/.test(u) && (/Browser|Lunascape|Maxthon/.test(u) || "Safari" != u && /^iOS/.test(v) && /\bSafari\b/.test(z[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(u) && z[1]) && (k = z[z.length - 1]) && b.push(k);
        b.length && (b = ["(" + b.join("; ") + ")"]);
        C && A && 0 > A.indexOf(C) && b.push("on " + C);
        A && b.push((/^on /.test(b[b.length -
            1]) ? "" : "on ") + A);
        if (v) {
            var M = (k = / ([\d.+]+)$/.exec(v)) && "/" == v.charAt(v.length - k[0].length - 1);
            v = {
                architecture: 32,
                family: k && !M ? v.replace(k[0], "") : v,
                version: k ? k[1] : null,
                toString: function() {
                    var c = this.version;
                    return this.family + (c && !M ? " " + c : "") + (64 == this.architecture ? " 64-bit" : "")
                }
            }
        }(k = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(I)) && !/\bi686\b/i.test(I) ? (v && (v.architecture = 64, v.family = v.family.replace(RegExp(" *" + k), "")), u && (/\bWOW64\b/i.test(d) || E && /\w(?:86|32)$/.test(r.cpuClass || r.platform) && !/\bWin64; x64\b/i.test(d)) &&
            b.unshift("32-bit")) : v && /^OS X/.test(v.family) && "Chrome" == u && 39 <= parseFloat(t) && (v.architecture = 64);
        d || (d = null);
        p = {};
        p.description = d;
        p.layout = z && z[0];
        p.manufacturer = C;
        p.name = u;
        p.prerelease = J;
        p.product = A;
        p.ua = d;
        p.version = u && t;
        p.os = v || {
            architecture: null,
            family: null,
            version: null,
            toString: function() {
                return "null"
            }
        };
        p.parse = c;
        p.toString = function() {
            return this.description || ""
        };
        p.version && b.unshift(t);
        p.name && b.unshift(u);
        v && u && (v != String(v).split(" ")[0] || v != u.split(" ")[0] && !A) && b.push(A ? "(" + v + ")" : "on " +
            v);
        b.length && (p.description = b.join(" "));
        return p
    }
    var r = {
            "function": !0,
            object: !0
        },
        n = r[typeof window] && window || this,
        d = r[typeof exports] && exports;
    r = r[typeof module] && module && !module.nodeType && module;
    var g = d && r && "object" == typeof global && global;
    !g || g.global !== g && g.window !== g && g.self !== g || (n = g);
    var p = Math.pow(2, 53) - 1,
        B = /\bOpera/;
    g = Object.prototype;
    var w = g.hasOwnProperty,
        y = g.toString,
        x = c();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (n.platform = x, define(function() {
            return x
        })) : d &&
        r ? e(x, function(c, g) {
            d[g] = c
        }) : n.platform = x
}).call(this);
var s_iScaleFactor = 1,
    s_bIsIphone = !1,
    s_iOffsetX, s_iOffsetY;
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent ||
    navigator.vendor || window.opera);
$(window).resize(function() {
    sizeHandler()
});

function trace(a) {
    console.log(a)
}

function isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}

function isIOS() {
    var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
    for (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone") && (s_bIsIphone = !0); a.length;)
        if (navigator.platform === a.pop()) return !0;
    return s_bIsIphone = !1
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function getSize(a) {
    var b = a.toLowerCase(),
        f = window.document,
        e = f.documentElement;
    if (void 0 === window["inner" + a]) a = e["client" + a];
    else if (window["inner" + a] != e["client" + a]) {
        var l = f.createElement("body");
        l.id = "vpw-test-b";
        l.style.cssText = "overflow:scroll";
        var m = f.createElement("div");
        m.id = "vpw-test-d";
        m.style.cssText = "position:absolute;top:-1000px";
        m.innerHTML = "<style>@media(" + b + ":" + e["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + b + ":7px!important}}</style>";
        l.appendChild(m);
        e.insertBefore(l, f.head);
        a = 7 == m["offset" + a] ? e["client" + a] : window["inner" + a];
        e.removeChild(l)
    } else a = window["inner" + a];
    return a
}

function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}

function getHeightOfIOSToolbars() {
    var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < a ? a : 0
}

function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = "safari" === platform.name.toLowerCase() ? getIOSWindowHeight() : getSize("Height");
        var b = getSize("Width");
        _checkOrientation(b, a);
        var f = Math.min(a / CANVAS_HEIGHT, b / CANVAS_WIDTH),
            e = CANVAS_WIDTH * f;
        f *= CANVAS_HEIGHT;
        if (f < a) {
            var l = a - f;
            f += l;
            e += CANVAS_WIDTH / CANVAS_HEIGHT * l
        } else e < b && (l = b - e, e += l, f += CANVAS_HEIGHT / CANVAS_WIDTH * l);
        l = a / 2 - f / 2;
        var m = b / 2 - e / 2,
            q = CANVAS_WIDTH / e;
        if (m * q < -EDGEBOARD_X || l * q < -EDGEBOARD_Y) f = Math.min(a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y),
            b / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), e = CANVAS_WIDTH * f, f *= CANVAS_HEIGHT, l = (a - f) / 2, m = (b - e) / 2, q = CANVAS_WIDTH / e;
        s_iOffsetX = -1 * m * q;
        s_iOffsetY = -1 * l * q;
        0 <= l && (s_iOffsetY = 0);
        0 <= m && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oModeMenu && s_oModeMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * e, s_oStage.canvas.height = 2 * f, canvas.style.width =
            e + "px", canvas.style.height = f + "px", s_iScaleFactor = 2 * Math.min(e / CANVAS_WIDTH, f / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor) : s_bMobile || isChrome() ? ($("#canvas").css("width", e + "px"), $("#canvas").css("height", f + "px")) : (s_oStage.canvas.width = e, s_oStage.canvas.height = f, s_iScaleFactor = Math.min(e / CANVAS_WIDTH, f / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > l || (l = (a - f) / 2);
        $("#canvas").css("top", l + "px");
        $("#canvas").css("left", m + "px");
        fullscreenHandler()
    }
}

function _checkOrientation(a, b) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > b ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function createBitmap(a, b, f) {
    var e = new createjs.Bitmap(a),
        l = new createjs.Shape;
    b && f ? l.graphics.beginFill("#fff").drawRect(0, 0, b, f) : l.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    e.hitArea = l;
    return e
}

function createSprite(a, b, f, e, l, m) {
    a = null !== b ? new createjs.Sprite(a, b) : new createjs.Sprite(a);
    b = new createjs.Shape;
    b.graphics.beginFill("#000000").drawRect(-f, -e, l, m);
    a.hitArea = b;
    return a
}

function randomFloatBetween(a, b, f) {
    "undefined" === typeof f && (f = 2);
    return parseFloat(Math.min(a + Math.random() * (b - a), b).toFixed(f))
}

function shuffle(a) {
    for (var b = a.length, f, e; 0 !== b;) e = Math.floor(Math.random() * b), --b, f = a[b], a[b] = a[e], a[e] = f;
    return a
}

function formatTime(a) {
    a /= 1E3;
    var b = Math.floor(a / 60);
    a = Math.floor(a - 60 * b);
    var f = "";
    f = 10 > b ? f + ("0" + b + ":") : f + (b + ":");
    return 10 > a ? f + ("0" + a) : f + a
}
Array.prototype.sortOn = function() {
    var a = this.slice();
    if (!arguments.length) return a.sort();
    var b = Array.prototype.slice.call(arguments);
    return a.sort(function(a, e) {
        for (var f = b.slice(), m = f.shift(); a[m] == e[m] && f.length;) m = f.shift();
        return a[m] == e[m] ? 0 : a[m] > e[m] ? 1 : -1
    })
};

function roundDecimal(a, b) {
    var f = Math.pow(10, b);
    return Math.round(f * a) / f
}

function tweenVectors(a, b, f, e) {
    e.set(a.getX() + f * (b.getX() - a.getX()), a.getY() + f * (b.getY() - a.getY()));
    return e
}

function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}
NoClickDelay.prototype = {
    handleEvent: function(a) {
        switch (a.type) {
            case "touchstart":
                this.onTouchStart(a);
                break;
            case "touchmove":
                this.onTouchMove(a);
                break;
            case "touchend":
                this.onTouchEnd(a)
        }
    },
    onTouchStart: function(a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function(a) {
        this.moved = !0
    },
    onTouchEnd: function(a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend",
            this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 === a.nodeType && (a = a.parentNode);
            var b = document.createEvent("MouseEvents");
            b.initEvent("click", !0, !0);
            a.dispatchEvent(b)
        }
    }
};

function playSound(a, b, f) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(b), s_aSounds[a].loop(f), s_aSounds[a]) : null
}

function stopSound(a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}

function setVolume(a, b) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(b)
}

function setMute(a, b) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(b)
}

function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}
(function() {
    function a(a) {
        var e = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        a = a || window.event;
        a.type in e ? document.body.className = e[a.type] : (document.body.className = this[b] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }
    var b = "hidden";
    b in document ? document.addEventListener("visibilitychange", a) : (b = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (b = "webkitHidden") in
        document ? document.addEventListener("webkitvisibilitychange", a) : (b = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function getParamValue(a) {
    for (var b = window.location.search.substring(1).split("&"), f = 0; f < b.length; f++) {
        var e = b[f].split("=");
        if (e[0] == a) return e[1]
    }
}

function fullscreenHandler() {
    ENABLE_FULLSCREEN && !1 !== screenfull.enabled && (s_bFullscreen = screenfull.isFullscreen, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut(), null !== s_oModeMenu && s_oModeMenu.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function() {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut();
    null !== s_oModeMenu && s_oModeMenu.resetFullscreenBut()
});

function CSpriteLibrary() {
    var a = {},
        b, f, e, l, m, q;
    this.init = function(a, c, r) {
        b = {};
        e = f = 0;
        l = a;
        m = c;
        q = r
    };
    this.addSprite = function(e, c) {
        if (!a.hasOwnProperty(e)) {
            var h = new Image;
            a[e] = b[e] = {
                szPath: c,
                oSprite: h,
                bLoaded: !1
            };
            f++
        }
    };
    this.getSprite = function(e) {
        return a.hasOwnProperty(e) ? a[e].oSprite : null
    };
    this._onSpritesLoaded = function() {
        f = 0;
        m.call(q)
    };
    this._onSpriteLoaded = function() {
        l.call(q);
        ++e === f && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var a in b) b[a].oSprite.oSpriteLibrary = this, b[a].oSprite.szKey =
            a, b[a].oSprite.onload = function() {
                this.oSpriteLibrary.setLoaded(this.szKey);
                this.oSpriteLibrary._onSpriteLoaded(this.szKey)
            }, b[a].oSprite.onerror = function(c) {
                var a = c.currentTarget;
                setTimeout(function() {
                    b[a.szKey].oSprite.src = b[a.szKey].szPath
                }, 500)
            }, b[a].oSprite.src = b[a].szPath
    };
    this.setLoaded = function(e) {
        a[e].bLoaded = !0
    };
    this.isLoaded = function(e) {
        return a[e].bLoaded
    };
    this.getNumSprites = function() {
        return f
    }
}
var CANVAS_WIDTH = 960,
    CANVAS_HEIGHT = 1200,
    EDGEBOARD_X = 120,
    EDGEBOARD_Y = 90,
    DISABLE_SOUND_MOBILE = !1,
    GAME_NAME = "tic_tac_toe",
    FPS = 30,
    PRIMARY_FONT = "aachen_btroman",
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    DRAW = 0,
    X_WINS = 1,
    O_WINS = 2,
    CELL_SIZE = 195,
    CELL_PADDING = 15,
    CELL_SCALING_3x3 = 1,
    CELL_SCALING_5x5 = .7,
    CELL_SCALING_7x7 = .5,
    MATRIX_YOFFSET = 200,
    SHOW_CREDITS = !0,
    SOUNDTRACK_VOLUME_IN_GAME = 1,
    POINTS_EARNED, ENABLE_FULLSCREEN,
    ENABLE_CHECK_ORIENTATION, TEXT_PRELOADER_CONTINUE = "START",
    TEXT_GAMEOVER = "GAME OVER",
    TEXT_PLAY = "PLAY",
    TEXT_PLAYAGAIN = "PLAY AGAIN",
    TEXT_PL1_VICTORY = "PLAYER 1 WINS!!!",
    TEXT_PL2_VICTORY = "PLAYER 2 WINS!!!",
    TEXT_DRAW = "DRAW!!!",
    TEXT_BUT1PLAYER = "1 Player",
    TEXT_BUT2PLAYERS = "2 Players",
    TEXT_ACTIVEPLAYER = {
        pt1: "Player ",
        pt2: " to move"
    },
    TEXT_AIACTIVEPLAYER = {
        pt1: "AI ",
        pt2: " to move"
    },
    TEXT_THREE_IN_ROW = "PLACE 3 IN A ROW!",
    TEXT_FOUR_IN_ROW = "PLACE 4 IN A ROW!",
    TEXT_SHARE_IMAGE = "200x200.jpg",
    TEXT_SHARE_TITLE = "Congratulations!",
    TEXT_SHARE_MSG1 = "You collected <strong>",
    TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!",
    TEXT_SHARE_SHARE1 = "My score is ",
    TEXT_SHARE_SHARE2 = " points! Can you do better?",
    TEXT_IOS_PRIVATE = 'Your web browser does not support storing settings locally. In Safari, the most common cause of this is using "Private Browsing Mode". Some info may not save or some features may not work properly',
    TEXT_SAVE_REMOVE = "THIS WILL REMOVE ALL YOUR ACHIEVEMENTS! DO YOU WANT TO PROCEED?",
    TEXT_ARE_SURE =
    "ARE YOU SURE?";

function CPreloader() {
    var a, b, f, e, l, m, q, h, c, r;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
        s_oSpriteLibrary.loadSprites();
        r = new createjs.Container;
        s_oStage.addChild(r)
    };
    this.unload = function() {
        r.removeAllChildren();
        c.unload()
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var n = new createjs.Shape;
        n.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        r.addChild(n);
        n = s_oSpriteLibrary.getSprite("200x200");
        q = createBitmap(n);
        q.regX = .5 * n.width;
        q.regY = .5 * n.height;
        q.x = CANVAS_WIDTH / 2;
        q.y = CANVAS_HEIGHT / 2 - 180;
        r.addChild(q);
        h = new createjs.Shape;
        h.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(q.x - 100, q.y - 100, 200, 200, 10);
        r.addChild(h);
        q.mask = h;
        n = s_oSpriteLibrary.getSprite("progress_bar");
        e = createBitmap(n);
        e.x = CANVAS_WIDTH / 2 - n.width / 2;
        e.y = CANVAS_HEIGHT / 2 + 50;
        r.addChild(e);
        a = n.width;
        b = n.height;
        l = new createjs.Shape;
        l.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(e.x, e.y, 1, b);
        r.addChild(l);
        e.mask = l;
        f = new createjs.Text("", "30px " + PRIMARY_FONT, "#fff");
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT / 2 + 100;
        f.textBaseline = "alphabetic";
        f.textAlign = "center";
        r.addChild(f);
        n = s_oSpriteLibrary.getSprite("but_start");
        c = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT /
            2, n, TEXT_PRELOADER_CONTINUE, "Arial", "#000", 50, r);
        c.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
        c.setVisible(!1);
        m = new createjs.Shape;
        m.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        r.addChild(m);
        createjs.Tween.get(m).to({
            alpha: 0
        }, 500).call(function() {
            createjs.Tween.removeTweens(m);
            r.removeChild(m)
        })
    };
    this._onButStartRelease = function() {
        s_oMain._onRemovePreloader()
    };
    this.refreshLoader = function(c) {
        f.text = c + "%";
        100 === c && (s_oMain._onRemovePreloader(), f.visible = !1,
            e.visible = !1);
        l.graphics.clear();
        c = Math.floor(c * a / 100);
        l.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(e.x, e.y, c, b)
    };
    this._init()
}

function CMain(a) {
    var b, f = 0,
        e = 0,
        l = {},
        m, q = !1;
    this.initContainer = function() {
        s_oStage = new createjs.Stage("canvas");
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        !1 === s_bMobile && s_oStage.enableMouseOver(20);
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.framerate = FPS;
        createjs.Ticker.addEventListener("tick", this._update);
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        s_oLocalStorage = new CLocalStorage(GAME_NAME);
        seekAndDestroy() ?
            m = new CPreloader : window.location.href = "http://www.codethislab.com/contact-us.html"
    };
    this.preloaderReady = function() {
        this._loadImages();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        b = !0
    };
    this.soundLoaded = function() {
        f++;
        m.refreshLoader(Math.floor(f / e * 100))
    };
    this._initSounds = function() {
        Howler.mute(!s_bAudioActive);
        s_aSoundsInfo = [];
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "gameover",
            loop: !1,
            volume: 1,
            ingamename: "gameover"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "place_mark",
            loop: !1,
            volume: 1,
            ingamename: "place_mark"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "press_but",
            loop: !1,
            volume: 1,
            ingamename: "press_but"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "win",
            loop: !1,
            volume: 1,
            ingamename: "win"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "draw",
            loop: !1,
            volume: 1,
            ingamename: "draw"
        });
        e += s_aSoundsInfo.length;
        s_aSounds = [];
        for (var a = 0; a < s_aSoundsInfo.length; a++) this.tryToLoadSound(s_aSoundsInfo[a], !1)
    };
    this.tryToLoadSound = function(a, c) {
        setTimeout(function() {
            s_aSounds[a.ingamename] =
                new Howl({
                    src: [a.path + a.filename + ".ogg"],
                    autoplay: !1,
                    preload: !0,
                    loop: a.loop,
                    volume: a.volume,
                    onload: s_oMain.soundLoaded,
                    onloaderror: function(c, a) {
                        for (var d = 0; d < s_aSoundsInfo.length; d++)
                            if (c === s_aSounds[s_aSoundsInfo[d].ingamename]._sounds[0]._id) {
                                s_oMain.tryToLoadSound(s_aSoundsInfo[d], !0);
                                break
                            }
                    },
                    onplayerror: function(c) {
                        for (var a = 0; a < s_aSoundsInfo.length; a++)
                            if (c === s_aSounds[s_aSoundsInfo[a].ingamename]._sounds[0]._id) {
                                s_aSounds[s_aSoundsInfo[a].ingamename].once("unlock", function() {
                                    s_aSounds[s_aSoundsInfo[a].ingamename].play();
                                    "soundtrack" === s_aSoundsInfo[a].ingamename && null !== s_oGame && setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
                                });
                                break
                            }
                    }
                })
        }, c ? 200 : 0)
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("but_box_1", "./sprites/but_box_1.png");
        s_oSpriteLibrary.addSprite("but_box_2", "./sprites/but_box_2.png");
        s_oSpriteLibrary.addSprite("but_exit",
            "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("cell", "./sprites/cell.png");
        s_oSpriteLibrary.addSprite("choose_text", "./sprites/choose_text.png");
        s_oSpriteLibrary.addSprite("but_3x3", "./sprites/layout_3x3.png");
        s_oSpriteLibrary.addSprite("but_5x5", "./sprites/layout_5x5.png");
        s_oSpriteLibrary.addSprite("but_7x7", "./sprites/layout_7x7.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("msg_box_small", "./sprites/msg_box_small.png");
        s_oSpriteLibrary.addSprite("tokenX",
            "./sprites/player_1.png");
        s_oSpriteLibrary.addSprite("tokenO", "./sprites/player_2.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("tris_line", "./sprites/tris_line.png");
        s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("logo_credits", "./sprites/logo_credits.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("star", "./sprites/star.png");
        s_oSpriteLibrary.addSprite("but_delete",
            "./sprites/but_delete.png");
        s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
        e += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        f++;
        m.refreshLoader(Math.floor(f / e * 100))
    };
    this._onAllImagesLoaded = function() {};
    this._onRemovePreloader = function() {
        m.unload();
        this.gotoMenu()
    };
    this.gotoMenu = function() {
        new CMenu
    };
    this.gotoGameModeMenu = function(a) {
        s_bTwoPlayerMode = q = a ? !0 : !1;
        new CGameModeMenu
    };
    this.gotoGame = function(a) {
        _iGridWidth = a;
        l.iMatrixSize =
            a;
        l.b2Players = q;
        new CGame(l)
    };
    this.gotoHelp = function() {
        new CHelp
    };
    this.stopUpdate = function() {
        b = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
    };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        b = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
    };
    this._update = function(a) {
        if (!1 !== b) {
            var c = (new Date).getTime();
            s_iTimeElaps =
                c - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = c;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    l = a;
    ENABLE_FULLSCREEN = a.fullscreen;
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !1,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oGameSettings, s_bFullscreen = !1,
    s_aSoundsInfo;

function CTextButton(a, b, f, e, l, m, q, h) {
    var c, r, n, d, g, p, B, w, y, x;
    this._init = function(g, a, p, e, b, B, f) {
        c = !1;
        r = 1;
        n = [];
        d = [];
        x = createBitmap(p);
        w = new createjs.Container;
        w.x = g;
        w.y = a;
        w.regX = p.width / 2;
        w.regY = p.height / 2;
        s_bMobile || (w.cursor = "pointer");
        w.addChild(x, y);
        h.addChild(w);
        y = new CTLText(w, 10, 0, p.width - 20, p.height, f, "center", B, b, 1.1, 0, 0, e, !0, !0, !1, !1);
        this._initListener()
    };
    this.unload = function() {
        w.off("mousedown", g);
        w.off("pressup", p);
        h.removeChild(w)
    };
    this.setVisible = function(c) {
        w.visible = c
    };
    this.setAlign =
        function(c) {
            y.textAlign = c
        };
    this.setTextX = function(c) {
        y.x = c
    };
    this.setScale = function(c) {
        r = w.scaleX = w.scaleY = c
    };
    this.enable = function() {
        c = !1
    };
    this.disable = function() {
        c = !0
    };
    this._initListener = function() {
        g = w.on("mousedown", this.buttonDown);
        p = w.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(c, g, a) {
        n[c] = g;
        d[c] = a
    };
    this.addEventListenerWithParams = function(c, g, a, p) {
        n[c] = g;
        d[c] = a;
        B = p
    };
    this.buttonRelease = function() {
        c || (playSound("press_but", 1, !1), w.scaleX = r, w.scaleY = r, n[ON_MOUSE_UP] && n[ON_MOUSE_UP].call(d[ON_MOUSE_UP],
            B))
    };
    this.buttonDown = function() {
        c || (w.scaleX = .9 * r, w.scaleY = .9 * r, n[ON_MOUSE_DOWN] && n[ON_MOUSE_DOWN].call(d[ON_MOUSE_DOWN]))
    };
    this.setPosition = function(c, d) {
        w.x = c;
        w.y = d
    };
    this.tweenPosition = function(c, d, g, a, p, e, b) {
        createjs.Tween.get(w).wait(a).to({
            x: c,
            y: d
        }, g, p).call(function() {
            void 0 !== e && e.call(b)
        })
    };
    this.changeText = function(c) {
        y.refreshText(c)
    };
    this.setX = function(c) {
        w.x = c
    };
    this.setY = function(c) {
        w.y = c
    };
    this.getButtonImage = function() {
        return w
    };
    this.getX = function() {
        return w.x
    };
    this.getY = function() {
        return w.y
    };
    this.getSprite = function() {
        return w
    };
    this.getScale = function() {
        return w.scaleX
    };
    this._init(a, b, f, e, l, m, q)
}

function CGfxButton(a, b, f, e) {
    var l, m, q, h, c, r, n = [],
        d, g, p, B;
    this._init = function(g, a, p, e) {
        l = !1;
        c = [];
        r = [];
        m = 1;
        q = p.width;
        h = p.height;
        d = createBitmap(p);
        d.x = g;
        d.y = a;
        d.regX = p.width / 2;
        d.regY = p.height / 2;
        d.cursor = "pointer";
        e.addChild(d);
        this._initListener()
    };
    this.unload = function() {
        d.off("mousedown", p);
        d.off("pressup", B);
        e.removeChild(d)
    };
    this.setVisible = function(c) {
        d.visible = c
    };
    this._initListener = function() {
        p = d.on("mousedown", this.buttonDown);
        B = d.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(d,
        g, a) {
        c[d] = g;
        r[d] = a
    };
    this.addEventListenerWithParams = function(d, g, a, p) {
        c[d] = g;
        r[d] = a;
        n = p
    };
    this.buttonRelease = function() {
        l || (playSound("press_but", 1, !1), g || (d.scaleX = m, d.scaleY = m), c[ON_MOUSE_UP] && c[ON_MOUSE_UP].call(r[ON_MOUSE_UP], n))
    };
    this.buttonDown = function() {
        l || (g || (d.scaleX = .9 * m, d.scaleY = .9 * m), c[ON_MOUSE_DOWN] && c[ON_MOUSE_DOWN].call(r[ON_MOUSE_DOWN], n))
    };
    this.setPosition = function(c, g) {
        d.x = c;
        d.y = g
    };
    this.setX = function(c) {
        d.x = c
    };
    this.setY = function(c) {
        d.y = c
    };
    this.enable = function() {
        l = !1;
        d.filters = [];
        d.cache(0, 0, q, h)
    };
    this.disable = function() {
        l = !0;
        var c = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
        d.filters = [new createjs.ColorMatrixFilter(c)];
        d.cache(0, 0, q, h)
    };
    this.getButtonImage = function() {
        return d
    };
    this.pulseAnimation = function() {
        g = createjs.Tween.get(d).to({
            scaleX: 1.1 * m,
            scaleY: 1.1 * m
        }, 850, createjs.Ease.quadOut).to({
            scaleX: m,
            scaleY: m
        }, 650, createjs.Ease.quadIn).call(function() {
            w.pulseAnimation()
        })
    };
    this.setClickable = function() {
        l = !0
    };
    this.getX = function() {
        return d.x
    };
    this.getY =
        function() {
            return d.y
        };
    this._init(a, b, f, e);
    var w = this;
    return this
}

function CToggle(a, b, f, e, l) {
    var m, q, h, c, r, n, d;
    this._init = function(d, a, e, b) {
        q = [];
        h = [];
        var p = new createjs.SpriteSheet({
            images: [e],
            frames: {
                width: e.width / 2,
                height: e.height,
                regX: e.width / 2 / 2,
                regY: e.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        m = b;
        c = createSprite(p, "state_" + m, e.width / 2 / 2, e.height / 2, e.width / 2, e.height);
        c.x = d;
        c.y = a;
        c.stop();
        g.addChild(c);
        this._initListener()
    };
    this.unload = function() {
        c.off("mousedown", r);
        c.off("pressup", d);
        s_bMobile || c.off("mouseover", n);
        g.removeChild(c)
    };
    this._initListener =
        function() {
            r = c.on("mousedown", this.buttonDown);
            d = c.on("pressup", this.buttonRelease);
            s_bMobile || (n = c.on("mouseover", this.buttonOver))
        };
    this.addEventListener = function(c, d, g) {
        q[c] = d;
        h[c] = g
    };
    this.setActive = function(d) {
        m = d;
        c.gotoAndStop("state_" + m)
    };
    this.buttonRelease = function() {
        c.scaleX = 1;
        c.scaleY = 1;
        playSound("press_but", 1, !1);
        m = !m;
        c.gotoAndStop("state_" + m);
        q[ON_MOUSE_UP] && q[ON_MOUSE_UP].call(h[ON_MOUSE_UP], m)
    };
    this.buttonDown = function() {
        c.scaleX = .9;
        c.scaleY = .9;
        q[ON_MOUSE_DOWN] && q[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN])
    };
    this.buttonOver = function(c) {
        s_bMobile || (c.target.cursor = "pointer")
    };
    this.setPosition = function(d, g) {
        c.x = d;
        c.y = g
    };
    var g = l;
    this._init(a, b, f, e)
}

function CMenu() {
    var a, b, f, e, l, m, q, h, c, r = null,
        n = null,
        d, g, p, B, w, y, x;
    this._init = function() {
        d = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(d);
        var t = s_oSpriteLibrary.getSprite("but_box_2");
        g = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 230, t, TEXT_BUT1PLAYER, PRIMARY_FONT, "#ffffff", 40, s_oStage);
        g.addEventListener(ON_MOUSE_UP, this._onBut1Player, this);
        t = s_oSpriteLibrary.getSprite("but_box_2");
        p = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 135, t, TEXT_BUT2PLAYERS, PRIMARY_FONT, "#ffffff",
            40, s_oStage);
        p.addEventListener(ON_MOUSE_UP, this._onBut2Players, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) t = s_oSpriteLibrary.getSprite("audio_icon"), q = CANVAS_WIDTH - t.height / 2 - 10, h = t.height / 2 + 10, B = new CToggle(q, h, t, s_bAudioActive, s_oStage), B.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        SHOW_CREDITS ? (t = s_oSpriteLibrary.getSprite("but_credits"), l = t.height / 2 + 10, m = t.height / 2 + 10, w = new CGfxButton(l, m, t, s_oStage), w.addEventListener(ON_MOUSE_UP, this._onCredits, this), t = s_oSpriteLibrary.getSprite("but_fullscreen"),
            f = l + t.width / 2 + 10, e = m) : (f = t.height / 2 + 10, e = t.height / 2 + 10);
        t = window.document;
        var G = t.documentElement;
        r = G.requestFullscreen || G.mozRequestFullScreen || G.webkitRequestFullScreen || G.msRequestFullscreen;
        n = t.exitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen || t.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (r = !1);
        r && screenfull.enabled && (t = s_oSpriteLibrary.getSprite("but_fullscreen"), c = new CToggle(f, e, t, s_bFullscreen, s_oStage), c.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        s_oLocalStorage.isDirty() &&
            (t = s_oSpriteLibrary.getSprite("but_delete"), a = t.height / 2 + 10, b = CANVAS_HEIGHT - t.height / 2 - 10, x = new CGfxButton(a, b, t, s_oStage), x.addEventListener(ON_MOUSE_UP, this._onDelete, this));
        y = new createjs.Shape;
        y.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(y);
        createjs.Tween.get(y).to({
            alpha: 0
        }, 500).call(function() {
            y.visible = !1
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_oLocalStorage.isUsed() || new CMsgBox(TEXT_IOS_PRIVATE)
    };
    this.unload = function() {
        g.unload();
        g = null;
        SHOW_CREDITS && w.unload();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) B.unload(), B = null;
        r && screenfull.enabled && c.unload();
        s_oLocalStorage.isDirty() && x.unload();
        s_oStage.removeAllChildren();
        s_oMenu = null
    };
    this.refreshButtonPos = function(d, g) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || B.setPosition(q - d, g + h);
        SHOW_CREDITS && w.setPosition(l + d, g + m);
        r && screenfull.enabled && c.setPosition(f + s_iOffsetX, e + s_iOffsetY);
        s_oLocalStorage.isDirty() && x.setPosition(a + d, b - g)
    };
    this._onBut1Player = function() {
        this.unload();
        s_oMain.gotoGameModeMenu(!1);
        $(s_oMain).trigger("start_session")
    };
    this._onBut2Players = function() {
        this.unload();
        s_oMain.gotoGameModeMenu(!0);
        $(s_oMain).trigger("start_session")
    };
    this._onCredits = function() {
        new CCreditsPanel
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        r && screenfull.enabled && c.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? n.call(window.document) : r.call(window.document.documentElement);
        sizeHandler()
    };
    this._onDelete = function() {
        (new CAreYouSurePanel(s_oMenu.deleteSavings)).changeMessage(TEXT_SAVE_REMOVE)
    };
    this.deleteSavings = function() {
        s_oLocalStorage.deleteData();
        s_oLocalStorage.resetData();
        x.unload()
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CGame(a) {
    var b = !1,
        f, e, l = 1,
        m = 0,
        q = 0,
        h = [],
        c = [],
        r = [],
        n;
    this._init = function(c) {
        f = c.b2Players;
        e = c.iMatrixSize;
        n = new CInterface(e);
        this.initMatrix();
        this._initWinCellsArray();
        $(s_oMain).trigger("start_level", 1)
    };
    this.unload = function() {
        for (var c = 0; c < e; c++)
            for (var g = 0; g < e; g++) r[c][g].unload();
        n.unload();
        s_oStage.removeAllChildren();
        s_oMain.gotoMenu()
    };
    this.initMatrix = function() {
        for (var d = 0; d < e; d++) {
            r[d] = [];
            c[d] = [];
            for (var g = 0; g < e; g++) {
                var a, b = MATRIX_YOFFSET;
                3 === e ? a = CELL_SCALING_3x3 : 5 === e ? a = CELL_SCALING_5x5 :
                    7 === e && (a = CELL_SCALING_7x7);
                var f = g * (CELL_SIZE + CELL_PADDING) * a;
                var h = d * (CELL_SIZE + CELL_PADDING) * a;
                f += (CANVAS_WIDTH - CELL_SIZE * a * e) / 2 - 30 * a;
                h += b;
                r[d][g] = new CCell(f, h, a, g, d);
                c[d][g] = 0
            }
        }
    };
    this._initWinCellsArray = function() {
        if (3 === e)
            for (var c = 0; 3 > c; c++) h[c] = {
                x: 0,
                y: 0
            };
        else
            for (c = 0; 4 > c; c++) h[c] = {
                x: 0,
                y: 0
            }
    };
    this.getActivePlayer = function() {
        return l
    };
    this.updateGameStatus = function(d, g) {
        if (!b) {
            c[g][d] = l;
            m++;
            3 === e && (5 <= m ? this.checkTris() : this._switchPlayer());
            if (5 === e || 7 === e) 7 <= m ? this.checkQuad() : this._switchPlayer();
            n.update()
        }
    };
    this._switchPlayer = function() {
        1 === l ? !0 === f ? l = 2 : (l = 2, this._AINext()) : l = 1
    };
    this._checkWinningCouples = function(d) {
        for (var g = {
                x: void 0,
                y: void 0
            }, a = 0; a < e; a++)
            for (var b = 0; b < e; b++) {
                if (c[a][b] === d) {
                    if (a <= e - 3 && c[a][b] === c[a + 1][b] && 0 === c[a + 2][b]) return g.x = b, g.y = a + 2, g;
                    if (b <= e - 3 && c[a][b] === c[a][b + 1] && 0 === c[a][b + 2]) return g.x = b + 2, g.y = a, g;
                    if (b <= e - 3 && a <= e - 3 && c[a][b] === c[a + 1][b + 1] && 0 === c[a + 2][b + 2]) return g.x = b + 2, g.y = a + 2, g
                }
                if (b <= e - 3 && a <= e - 3 && c[a + 2][b] === d && c[a + 2][b] === c[a + 1][b + 1] && 0 === c[a][b + 2]) return g.x =
                    b + 2, g.y = a, g;
                if (0 === c[a][b] && (a <= e - 3 && d === c[a + 1][b] && d === c[a + 2][b] || b <= e - 3 && d === c[a][b + 1] && d === c[a][b + 2] || b <= e - 3 && a <= e - 3 && d === c[a + 1][b + 1] && d === c[a + 2][b + 2])) return g.x = b, g.y = a, g;
                if (b <= e - 3 && a <= e - 3 && 0 === c[a + 2][b] && d === c[a + 1][b + 1] && d === c[a][b + 2]) return g.x = b, g.y = a + 2, g;
                if (c[a][b] === d) {
                    if (a <= e - 3 && 0 === c[a + 1][b] && d === c[a + 2][b]) return g.x = b, g.y = a + 1, g;
                    if (b <= e - 3 && 0 === c[a][b + 1] && d === c[a][b + 2]) return g.x = b + 1, g.y = a, g;
                    if (b <= e - 3 && a <= e - 3 && 0 === c[a + 1][b + 1] && d === c[a + 2][b + 2]) return g.x = b + 1, g.y = a + 1, g
                }
                if (b <= e - 3 && a <= e - 3 &&
                    c[a + 2][b] === d && 0 === c[a + 1][b + 1] && d === c[a][b + 2]) return g.x = b + 1, g.y = a + 1, g
            }
        return g
    };
    this._checkWinningTriples = function(a) {
        for (var g = {
                x: void 0,
                y: void 0
            }, d = 0; d < e; d++)
            for (var b = 0; b < e; b++) {
                if (c[d][b] === a) {
                    if (d <= e - 4 && c[d][b] === c[d + 1][b] && c[d][b] === c[d + 2][b] && 0 === c[d + 3][b]) return g.x = b, g.y = d + 3, g;
                    if (b <= e - 4 && c[d][b] === c[d][b + 1] && c[d][b] === c[d][b + 2] && 0 === c[d][b + 3]) return g.x = b + 3, g.y = d, g;
                    if (b <= e - 4 && d <= e - 4 && c[d][b] === c[d + 1][b + 1] && c[d][b] === c[d + 2][b + 2] && 0 === c[d + 3][b + 3]) return g.x = b + 3, g.y = d + 3, g
                }
                if (b <= e - 4 && d <= e - 4 &&
                    c[d + 3][b] === a && c[d + 3][b] === c[d + 2][b + 1] && c[d + 3][b] === c[d + 1][b + 2] && 0 === c[d][b + 3]) return g.x = b + 3, g.y = d, g;
                if (0 === c[d][b] && (d <= e - 4 && a === c[d + 1][b] && a === c[d + 2][b] && a === c[d + 3][b] || b <= e - 4 && a === c[d][b + 1] && a === c[d][b + 2] && a === c[d][b + 3] || b <= e - 4 && d <= e - 4 && a === c[d + 1][b + 1] && a === c[d + 2][b + 2] && a === c[d + 3][b + 3])) return g.x = b, g.y = d, g;
                if (b <= e - 4 && d <= e - 4 && 0 === c[d + 3][b] && a === c[d + 2][b + 1] && a === c[d + 1][b + 2] && a === c[d][b + 3]) return g.x = b, g.y = d + 3, g;
                if (c[d][b] === a) {
                    if (d <= e - 4 && 0 === c[d + 1][b] && a === c[d + 2][b] && a === c[d + 3][b]) return g.x = b,
                        g.y = d + 1, g;
                    if (b <= e - 4 && 0 === c[d][b + 1] && a === c[d][b + 2] && a === c[d][b + 3]) return g.x = b + 1, g.y = d, g;
                    if (b <= e - 4 && d <= e - 4 && 0 === c[d + 1][b + 1] && a === c[d + 2][b + 2] && a === c[d + 3][b + 3]) return g.x = b + 1, g.y = d + 1, g
                }
                if (b <= e - 4 && d <= e - 4 && c[d + 3][b] === a && 0 === c[d + 2][b + 1] && a === c[d + 1][b + 2] && a === c[d][b + 3]) return g.x = b + 1, g.y = d + 2, g
            }
        return g
    };
    this._checkForks = function() {
        for (var a = {
                x: void 0,
                y: void 0
            }, b = 0; b < e; b++)
            for (var f = 0; f < e; f++)
                if (b <= e - 3 && f <= e - 3 && 2 === c[b + 2][f] && 2 === c[b][f + 2] && 0 === c[b + 1][f] && 0 === c[b][f + 1] || 2 <= b && f <= e - 3 && 2 === c[b - 2][f] && 2 ===
                    c[b][f + 2] && 0 === c[b - 1][f] && 0 === c[b][f + 1] || 2 <= b && 2 <= f && 2 === c[b - 2][f] && 2 === c[b][f - 2] && 0 === c[b - 1][f] && 0 === c[b][f - 1] || b <= e - 3 && 2 <= f && 2 === c[b + 2][f] && 2 === c[b][f - 2] && 0 === c[b + 1][f] && 0 === c[b][f - 1]) return a.x = f, a.y = b, a;
        return a
    };
    this._checkWinningSingletons = function(a) {
        for (var d = {
                x: void 0,
                y: void 0
            }, b = 0; b < e; b++)
            for (var f = 0; f < e; f++) {
                if (c[b][f] === a) {
                    if (b <= e - 3 && 0 === c[b + 1][f]) return d.x = f, d.y = b + 1, d;
                    if (f <= e - 3 && 0 === c[b][f + 1]) return d.x = f + 1, d.y = b, d;
                    if (f <= e - 3 && b <= e - 3 && 0 === c[b + 1][f + 1]) return d.x = f + 1, d.y = b + 1, d
                }
                if (f <= e -
                    3 && b <= e - 3 && c[b + 1][f] === a && 0 === c[b][f + 1]) return d.x = f + 1, d.y = b, d
            }
        return d
    };
    this.checkTris = function() {
        for (var a = 0; a < e; a++)
            for (var b = 0; b < e; b++) {
                if (0 !== c[a][b]) {
                    if (a <= e - 3 && c[a][b] === c[a + 1][b] && c[a][b] === c[a + 2][b]) {
                        h[0].x = b;
                        h[0].y = a;
                        h[1].x = b;
                        h[1].y = a + 1;
                        h[2].x = b;
                        h[2].y = a + 2;
                        this.endGame();
                        return
                    }
                    if (b <= e - 3 && c[a][b] === c[a][b + 1] && c[a][b] === c[a][b + 2]) {
                        h[0].x = b;
                        h[0].y = a;
                        h[1].x = b + 1;
                        h[1].y = a;
                        h[2].x = b + 2;
                        h[2].y = a;
                        this.endGame();
                        return
                    }
                    if (b <= e - 3 && a <= e - 3 && c[a][b] === c[a + 1][b + 1] && c[a][b] === c[a + 2][b + 2]) {
                        h[0].x = b;
                        h[0].y =
                            a;
                        h[1].x = b + 1;
                        h[1].y = a + 1;
                        h[2].x = b + 2;
                        h[2].y = a + 2;
                        this.endGame();
                        return
                    }
                }
                if (b <= e - 3 && a <= e - 3 && 0 !== c[a + 2][b] && c[a + 2][b] === c[a + 1][b + 1] && c[a + 2][b] === c[a][b + 2]) {
                    h[0].x = b;
                    h[0].y = a + 2;
                    h[1].x = b + 1;
                    h[1].y = a + 1;
                    h[2].x = b + 2;
                    h[2].y = a;
                    this.endGame();
                    return
                }
            }
        m === e * e && (l = 0, this.showEndPanel());
        this._switchPlayer()
    };
    this.checkQuad = function() {
        for (var a = 0; a < e; a++)
            for (var b = 0; b < e; b++) {
                if (0 !== c[a][b]) {
                    if (a <= e - 4 && c[a][b] === c[a + 1][b] && c[a][b] === c[a + 2][b] && c[a][b] === c[a + 3][b]) {
                        h[0].x = b;
                        h[0].y = a;
                        h[1].x = b;
                        h[1].y = a + 1;
                        h[2].x = b;
                        h[2].y =
                            a + 2;
                        h[3].x = b;
                        h[3].y = a + 3;
                        this.endGame();
                        return
                    }
                    if (b <= e - 4 && c[a][b] === c[a][b + 1] && c[a][b] === c[a][b + 2] && c[a][b] === c[a][b + 3]) {
                        h[0].x = b;
                        h[0].y = a;
                        h[1].x = b + 1;
                        h[1].y = a;
                        h[2].x = b + 2;
                        h[2].y = a;
                        h[3].x = b + 3;
                        h[3].y = a;
                        this.endGame();
                        return
                    }
                    if (b <= e - 4 && a <= e - 4 && c[a][b] === c[a + 1][b + 1] && c[a][b] === c[a + 2][b + 2] && c[a][b] === c[a + 3][b + 3]) {
                        h[0].x = b;
                        h[0].y = a;
                        h[1].x = b + 1;
                        h[1].y = a + 1;
                        h[2].x = b + 2;
                        h[2].y = a + 2;
                        h[3].x = b + 3;
                        h[3].y = a + 3;
                        this.endGame();
                        return
                    }
                }
                if (b <= e - 4 && a <= e - 4 && 0 !== c[a + 3][b] && c[a + 3][b] === c[a + 2][b + 1] && c[a + 3][b] === c[a + 1][b + 2] && c[a +
                        3][b] === c[a][b + 3]) {
                    h[0].x = b;
                    h[0].y = a + 3;
                    h[1].x = b + 1;
                    h[1].y = a + 2;
                    h[2].x = b + 2;
                    h[2].y = a + 1;
                    h[3].x = b + 3;
                    h[3].y = a;
                    this.endGame();
                    return
                }
            }
        m === e * e && (l = 0, this.showEndPanel());
        this._switchPlayer()
    };
    this._AINext = function() {
        var a = {};
        3 === e && (a = this._checkWinningCouples(2), void 0 === a.x && (a = this._checkWinningCouples(1), void 0 === a.x && (a = this._checkForks())));
        if (5 === e || 7 === e) a = this._checkWinningTriples(2), void 0 === a.x && (a = this._checkWinningTriples(1), void 0 === a.x && (a = this._checkWinningCouples(2), void 0 === a.x && (a = this._checkWinningCouples(1),
            void 0 === a.x && (a = this._checkWinningSingletons(2)))));
        if (void 0 === a.x)
            for (;;) {
                var b = Math.floor(Math.random() * e),
                    f = Math.floor(Math.random() * e);
                if (0 === c[f][b]) {
                    a.x = b;
                    a.y = f;
                    break
                }
            }
        r[a.y][a.x].AIMove()
    };
    this.endGame = function() {
        for (var a = 0; a < h.length; a++) r[h[a].y][h[a].x].EndAnim(), q++
    };
    this.showEndPanel = function() {
        if (1 < q) q--;
        else if (1 === q || 0 === l) new CEndPanel(l), f ? playSound("win", 1, !1) : 0 === l ? playSound("draw", 1, !1) : 1 === l ? playSound("win", 1, !1) : playSound("gameover", 1, !1), $(s_oMain).trigger("end_level", 1)
    };
    this.onExit = function() {
        this.unload();
        $(s_oMain).trigger("end_level", 1);
        $(s_oMain).trigger("end_session");
        s_oMain.gotoMenu()
    };
    this.isFrozen = function() {
        return b
    };
    this.freeze = function() {
        b = !0
    };
    this.unFreeze = function() {
        b = !1
    };
    s_oGame = this;
    POINTS_EARNED = a.single_player_score_earned;
    this._init(a)
}
var s_oGame;

function CInterface(a) {
    var b, f, e, l, m, q, h, c = null,
        r = null,
        n, d, g, p, B, w;
    this._init = function(a) {
        d = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(d);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) {
            var x = s_oSpriteLibrary.getSprite("audio_icon");
            m = CANVAS_WIDTH - x.width / 2 - 30;
            q = x.height / 2 + 20;
            n = new CToggle(m, q, x, s_bAudioActive, s_oStage);
            n.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this)
        }
        x = window.document;
        var t = x.documentElement;
        c = t.requestFullscreen || t.mozRequestFullScreen || t.webkitRequestFullScreen ||
            t.msRequestFullscreen;
        r = x.exitFullscreen || x.mozCancelFullScreen || x.webkitExitFullscreen || x.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (c = !1);
        c && screenfull.enabled && (x = s_oSpriteLibrary.getSprite("but_fullscreen"), b = x.width / 4 + 10, f = x.height / 2 + 10, h = new CToggle(b, f, x, s_bFullscreen, s_oStage), h.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        x = s_oSpriteLibrary.getSprite("but_exit");
        e = CANVAS_WIDTH - x.width / 2 + 5;
        l = x.height / 2 + 14;
        g = new CGfxButton(e, l, x, s_oStage);
        g.addEventListener(ON_MOUSE_UP, this._onExit,
            this);
        x = TEXT_ACTIVEPLAYER.pt1 + s_oGame.getActivePlayer() + TEXT_ACTIVEPLAYER.pt2;
        p = new CTLText(s_oStage, CANVAS_WIDTH / 2 - 260, 120, 520, 60, 60, "center", "#fff", PRIMARY_FONT, 1.1, 0, 0, x, !0, !0, !1, !1);
        p.setShadow("#000", 2, 2, 2);
        B = new CTLText(s_oStage, CANVAS_WIDTH / 2 - 260, 940, 520, 40, 40, "center", "#fff", PRIMARY_FONT, 1.1, 0, 0, 3 < a ? TEXT_FOUR_IN_ROW : TEXT_THREE_IN_ROW, !0, !0, !1, !1);
        B.setShadow("#000", 2, 2, 2);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || n.unload();
        c && screenfull.enabled && h.unload();
        g.unload();
        s_oInterface = null
    };
    this.refreshButtonPos = function(a, d) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || n.setPosition(m - a, d + q);
        c && screenfull.enabled && h.setPosition(b + s_iOffsetX, f + s_iOffsetY);
        g.setPosition(e - a, l + d)
    };
    this.update = function() {
        var a = TEXT_ACTIVEPLAYER.pt1 + s_oGame.getActivePlayer() + TEXT_ACTIVEPLAYER.pt2;
        createjs.Tween.get(p.getText()).to({
            scaleX: .1,
            scaleY: 1.2,
            alpha: .5
        }, 250, createjs.Ease.cubicOut).call(function() {
            p.refreshText(a);
            createjs.Tween.get(p.getText()).to({
                scaleX: 1,
                scaleY: 1,
                alpha: 1
            }, 250, createjs.Ease.cubicIn)
        })
    };
    this._onExit = function() {
        w = new CAreYouSurePanel(s_oInterface.onConfirmExit);
        w.changeMessage(TEXT_ARE_SURE)
    };
    this.onConfirmExit = function() {
        s_oInterface.unload();
        s_oGame.onExit()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        c && screenfull.enabled && h.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? r.call(window.document) : c.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface = this;
    this._init(a);
    return this
}
var s_oInterface = null;

function CGameModeMenu() {
    var a, b, f, e, l, m, q, h = null,
        c = null,
        r, n, d, g, p, B, w;
    this._init = function() {
        r = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(r);
        var y = s_oSpriteLibrary.getSprite("choose_text"),
            x = createBitmap(y);
        x.regX = y.width / 2;
        x.x = CANVAS_WIDTH / 2;
        x.y = 380;
        s_oStage.addChild(x);
        n = createBitmap(s_oSpriteLibrary.getSprite("but_3x3"));
        n.x = 160;
        n.y = 500;
        s_oStage.addChild(n);
        n.on("click", function() {
            playSound("press_but", 1, !1);
            this._onBut3x3()
        }, this);
        d = createBitmap(s_oSpriteLibrary.getSprite("but_5x5"));
        d.x = 365;
        d.y = 500;
        s_oStage.addChild(d);
        d.on("click", function() {
            playSound("press_but", 1, !1);
            this._onBut5x5()
        }, this);
        g = createBitmap(s_oSpriteLibrary.getSprite("but_7x7"));
        g.x = 570;
        g.y = 500;
        s_oStage.addChild(g);
        g.on("click", function() {
            playSound("press_but", 1, !1);
            this._onBut7x7()
        }, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) y = s_oSpriteLibrary.getSprite("audio_icon"), l = CANVAS_WIDTH - y.height / 2 - 10, m = y.height / 2 + 10, p = new CToggle(l, m, y, s_bAudioActive, s_oStage), p.addEventListener(ON_MOUSE_UP, this._onAudioToggle,
            this);
        y = window.document;
        x = y.documentElement;
        h = x.requestFullscreen || x.mozRequestFullScreen || x.webkitRequestFullScreen || x.msRequestFullscreen;
        c = y.exitFullscreen || y.mozCancelFullScreen || y.webkitExitFullscreen || y.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (h = !1);
        h && screenfull.enabled && (y = s_oSpriteLibrary.getSprite("but_fullscreen"), f = y.width / 4 + 10, e = y.height / 2 + 10, q = new CToggle(f, e, y, s_bFullscreen, s_oStage), q.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        s_bTwoPlayerMode || (y = s_oSpriteLibrary.getSprite("star"),
            a = y.width / 2 + 10, b = CANVAS_HEIGHT - y.height / 2 - 10, w = new createjs.Container, w.x = a, w.y = b, s_oStage.addChild(w), x = createBitmap(y), x.regX = y.width / 2, x.regY = y.height / 2, w.addChild(x), x = new createjs.Text(s_iTotalScore, "30px " + PRIMARY_FONT, "#fff"), x.x = y.width / 2, x.y = 0, x.textBaseline = "middle", x.textAlign = "left", x.shadow = new createjs.Shadow("#000000", 6, 6, 2), w.addChild(x));
        B = new createjs.Shape;
        B.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(B);
        createjs.Tween.get(B).to({
                alpha: 0
            },
            500).call(function() {
            B.visible = !1
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        n.removeAllEventListeners();
        d.removeAllEventListeners();
        g.removeAllEventListeners();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) p.unload(), p = null;
        h && screenfull.enabled && q.unload();
        s_oStage.removeAllChildren();
        s_oModeMenu = null
    };
    this.refreshButtonPos = function(c, d) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || p.setPosition(l - c, d + m);
        h && screenfull.enabled && q.setPosition(f + s_iOffsetX, e + s_iOffsetY);
        s_bTwoPlayerMode ||
            (w.x = a + c, w.y = b - d)
    };
    this._onBut3x3 = function() {
        this.unload();
        s_oMain.gotoGame(3)
    };
    this._onBut5x5 = function() {
        this.unload();
        s_oMain.gotoGame(5)
    };
    this._onBut7x7 = function() {
        this.unload();
        s_oMain.gotoGame(7)
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        h && screenfull.enabled && q.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? c.call(window.document) : h.call(window.document.documentElement);
        sizeHandler()
    };
    s_oModeMenu = this;
    this._init()
}
var s_oModeMenu = null;

function CCell(a, b, f, e, l) {
    var m, q, h, c, r, n, d, g, p;
    this._init = function(a, b, e, f, l) {
        m = 0;
        q = f;
        h = l;
        c = e;
        f = s_oSpriteLibrary.getSprite("cell");
        d = createBitmap(f);
        d.scaleX = d.scaleY = e;
        l = s_oSpriteLibrary.getSprite("tokenX");
        r = createBitmap(l);
        r.x = f.width / 2 * e;
        r.y = f.height / 2 * e;
        r.regX = l.width / 2;
        r.regY = l.height / 2;
        r.scaleX = r.scaleY = e;
        r.alpha = 0;
        l = s_oSpriteLibrary.getSprite("tokenO");
        n = createBitmap(l);
        n.x = f.width / 2 * e;
        n.y = f.height / 2 * e;
        n.regX = l.width / 2;
        n.regY = l.height / 2;
        n.scaleX = n.scaleY = e;
        n.alpha = 0;
        g = new createjs.Shape;
        g.graphics.beginFill("black").drawRect(0, 0, CELL_SIZE * e, CELL_SIZE * e);
        g.alpha = .05;
        p = new createjs.Container;
        p.x = a;
        p.y = b;
        p.addChild(d, r, n, g);
        p.on("click", function() {
            this.clicked()
        }, this);
        s_oStage.addChild(p)
    };
    this.unload = function() {
        p.removeAllEventListeners();
        s_oStage.removeChild(p)
    };
    this.clicked = function() {
        s_oGame.isFrozen() || (p.removeAllEventListeners(), s_oGame.freeze(), this.showToken())
    };
    this.showToken = function() {
        playSound("place_mark", 1, !1);
        1 === s_oGame.getActivePlayer() ? (m = 1, r.scaleX = r.scaleY = .5,
            r.alpha = .1, r.visible = !0, createjs.Tween.get(r).to({
                scaleX: 1.2 * c,
                scaleY: 1.2 * c,
                alpha: 1
            }, 200, createjs.Ease.cubicOut).call(function() {
                createjs.Tween.get(r).to({
                    scaleX: 1 * c,
                    scaleY: 1 * c
                }, 200, createjs.Ease.cubicIn).call(function() {
                    s_oGame.unFreeze();
                    s_oGame.updateGameStatus(q, h)
                })
            })) : (m = 2, n.scaleX = r.scaleY = .5, n.alpha = .1, n.visible = !0, createjs.Tween.get(n).to({
            scaleX: 1.2 * c,
            scaleY: 1.2 * c,
            alpha: 1
        }, 200, createjs.Ease.cubicOut).call(function() {
            createjs.Tween.get(n).to({
                scaleX: 1 * c,
                scaleY: 1 * c
            }, 200, createjs.Ease.cubicIn).call(function() {
                s_oGame.unFreeze();
                s_oGame.updateGameStatus(q, h)
            })
        }))
    };
    this.AIMove = function() {
        p.removeAllEventListeners();
        s_oGame.freeze();
        m = 2;
        n.alpha = 0;
        createjs.Tween.get(n).wait(1E3).to({
            scaleX: 1.2 * c,
            scaleY: 1.2 * c,
            alpha: 1
        }, 250, createjs.Ease.cubicOut).call(function() {
            playSound("place_mark", 1, !1);
            createjs.Tween.get(n).to({
                scaleX: 1 * c,
                scaleY: 1 * c
            }, 250, createjs.Ease.cubicIn).call(function() {
                s_oGame.unFreeze();
                s_oGame.updateGameStatus(q, h)
            })
        })
    };
    this.EndAnim = function() {
        s_oGame.freeze();
        1 === m ? createjs.Tween.get(r).to({
            scaleX: 1.5 * c,
            scaleY: 1.5 *
                c,
            alpha: .8
        }, 1E3, createjs.Ease.cubicInOut).call(function() {
            createjs.Tween.get(r).to({
                scaleX: 1 * c,
                scaleY: 1 * c,
                alpha: 1
            }, 1500, createjs.Ease.bounceOut).call(function() {
                s_oGame.showEndPanel()
            })
        }) : createjs.Tween.get(n).to({
            scaleX: 1.5 * c,
            scaleY: 1.5 * c,
            alpha: .8
        }, 1E3, createjs.Ease.cubicInOut).call(function() {
            createjs.Tween.get(n).to({
                scaleX: 1 * c,
                scaleY: 1 * c,
                alpha: 1
            }, 1500, createjs.Ease.bounceOut).call(function() {
                s_oGame.showEndPanel()
            })
        })
    };
    this._init(a, b, f, e, l)
}

function CEndPanel(a) {
    var b, f, e, l, m, q, h;
    this._init = function(a) {
        e = new createjs.Shape;
        e.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        e.alpha = .7;
        q = e.on("click", function() {});
        s_oStage.addChild(e);
        var c = s_oSpriteLibrary.getSprite("msg_box");
        b = createBitmap(c);
        b.regX = c.width / 2;
        b.regY = c.height / 2;
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2;
        s_oStage.addChild(b);
        h = new createjs.Container;
        h.x = CANVAS_WIDTH / 2;
        h.y = CANVAS_HEIGHT / 2 - 120;
        s_oStage.addChild(h);
        var n = createBitmap(s_oSpriteLibrary.getSprite("tokenX"));
        h.addChild(n);
        c = new CTLText(h, -50, -70, 250, 150, 50, "center", "#fff", PRIMARY_FONT, 1.1, 0, 0, TEXT_PL1_VICTORY, !0, !0, !0, !1);
        switch (a) {
            case X_WINS:
                c.refreshText(TEXT_PL1_VICTORY);
                n.image = s_oSpriteLibrary.getSprite("tokenX");
                n.x = -220;
                n.y = -90;
                var d = POINTS_EARNED.win;
                break;
            case O_WINS:
                c.refreshText(TEXT_PL2_VICTORY);
                n.image = s_oSpriteLibrary.getSprite("tokenO");
                n.x = -220;
                n.y = -90;
                d = POINTS_EARNED.lose;
                break;
            case DRAW:
                c.refreshText(TEXT_DRAW), h.removeChild(n), d = POINTS_EARNED.draw
        }
        c = s_oSpriteLibrary.getSprite("but_box_2");
        f = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 150, c, TEXT_PLAYAGAIN, PRIMARY_FONT, "#FFFFFF", 50, s_oStage);
        f.addEventListener(ON_MOUSE_UP, this._onButPlayAgain, this);
        s_bTwoPlayerMode ? (c = s_oSpriteLibrary.getSprite("msg_box_small"), b.image = c, b.regX = c.width / 2, b.regY = c.height / 2, h.y = CANVAS_HEIGHT / 2 - 50, n.scaleX = n.scaleY = .7, n.x = -160, n.y = -60, f.setPosition(f.getX(), CANVAS_HEIGHT / 2 + 70)) : (c = s_oSpriteLibrary.getSprite("star"), m = new createjs.Container, m.x = CANVAS_WIDTH / 2 - 50, m.y = CANVAS_HEIGHT / 2 + 20, s_oStage.addChild(m),
            n = createBitmap(c), n.regX = c.width / 2, n.regY = c.height / 2, m.addChild(n), n = new createjs.Text(s_iTotalScore, "40px " + PRIMARY_FONT, "#FFFFFF"), n.x = c.width / 2 + 10, n.y = 0, n.textBaseline = "middle", n.textAlign = "left", n.shadow = new createjs.Shadow("#000000", 2, 2, 2), m.addChild(n), (new CRollingText(n, d + s_iTotalScore, 1E3, !1)).addValueAnimation(0, 0, m, d), s_iTotalScore += d, s_oLocalStorage.saveData(), $(s_oMain).trigger("save_score", s_iTotalScore), $(s_oMain).trigger("share_event", s_iTotalScore));
        l = new createjs.Shape;
        l.graphics.beginFill("black").drawRect(0,
            0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(l);
        $(s_oMain).trigger("end_game", [a]);
        createjs.Tween.get(l).to({
            alpha: 0
        }, 1E3).call(function() {
            l.visible = !1
        })
    };
    this.unload = function() {
        f.unload();
        f = null;
        $(s_oMain).trigger("show_interlevel_ad");
        e.off("click", q);
        s_oStage.removeChild(h);
        s_oStage.removeChild(b);
        s_oStage.removeChild(m);
        s_oStage.removeChild(l)
    };
    this._onButPlayAgain = function() {
        this.unload();
        s_oGame.unload()
    };
    this._init(a)
}

function CCreditsPanel() {
    var a, b, f, e, l, m, q, h, c;
    this._init = function() {
        c = new createjs.Container;
        s_oStage.addChild(c);
        var r = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        c.addChild(r);
        l = new createjs.Shape;
        l.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        c.addChild(l);
        r = s_oSpriteLibrary.getSprite("msg_box_small");
        b = createBitmap(r);
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2;
        b.regX = r.width / 2;
        b.regY = r.height / 2;
        c.addChild(b);
        e = new createjs.Text("DEVELOPED BY", "36px Arial",
            "#ffffff");
        e.x = CANVAS_WIDTH / 2;
        e.y = 530;
        e.textAlign = "center";
        c.addChild(e);
        r = s_oSpriteLibrary.getSprite("logo_credits");
        var n = createBitmap(r);
        n.regX = r.width / 2;
        n.regY = r.height / 2;
        n.x = CANVAS_WIDTH / 2;
        n.y = 610;
        c.addChild(n);
        h = new createjs.Text("www.codethislab.com", "34px Arial", "#ffffff");
        h.x = CANVAS_WIDTH / 2;
        h.y = 650;
        h.textAlign = "center";
        c.addChild(h);
        m = new createjs.Shape;
        m.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        m.alpha = .01;
        q = m.on("click", this._onLogoButRelease);
        c.addChild(m);
        r = s_oSpriteLibrary.getSprite("but_exit");
        a = CANVAS_WIDTH / 2 + 200;
        f = new CGfxButton(a, 500, r, c);
        f.addEventListener(ON_MOUSE_UP, this.unload, this)
    };
    this.unload = function() {
        m.off("click", q);
        f.unload();
        f = null;
        s_oStage.removeChild(c)
    };
    this._onLogoButRelease = function() {
        window.open("http://www.codethislab.com/index.php?&l=en")
    };
    this._init()
}

function CRollingText(a, b, f, e) {
    var l = null,
        m;
    this._init = function(a, b, c) {
        m = {
            value: a.text
        };
        l = createjs.Tween.get(m, {
            override: !0
        }).to({
            value: b
        }, c, createjs.Ease.sineOut).addEventListener("change", function() {
            a.text = e ? formatTime(m.value) : Math.floor(m.value)
        }).call(function() {
            createjs.Tween.removeTweens(l)
        })
    };
    this.addValueAnimation = function(b, e, c, f) {
        b = new createjs.Text("+" + f, "30px " + PRIMARY_FONT, "#FFFFFF");
        b.x = a.x;
        b.y = a.y;
        b.textBaseline = "middle";
        b.textAlign = "left";
        b.shadow = new createjs.Shadow("#000000", 2,
            2, 2);
        c.addChild(b);
        createjs.Tween.get(b).to({
            y: -50
        }, 1E3, createjs.Ease.sineOut);
        createjs.Tween.get(b).wait(600).to({
            alpha: 0
        }, 900)
    };
    this._init(a, b, f);
    return this
}
var LOCALSTORAGE_TOTALSCORE = "totalscore",
    s_iTotalScore = 0;

function CLocalStorage(a) {
    var b = !0;
    this._init = function(a) {
        try {
            var b = window.localStorage.getItem(a);
            this.resetData();
            null !== b && void 0 !== b && this.loadData()
        } catch (l) {
            this.resetData()
        }
    };
    this.isDirty = function() {
        return 0 < s_iTotalScore ? !0 : !1
    };
    this.isUsed = function() {
        try {
            window.localStorage.setItem("ls_available", "ok")
        } catch (f) {
            b = !1
        }
        return b
    };
    this.resetData = function() {
        s_iTotalScore = 0
    };
    this.deleteData = function() {
        window.localStorage.removeItem(a)
    };
    this.saveData = function() {
        var b = {};
        b[LOCALSTORAGE_TOTALSCORE] =
            s_iTotalScore;
        window.localStorage.setItem(a, JSON.stringify(b))
    };
    this.loadData = function() {
        var b = JSON.parse(window.localStorage.getItem(a))[LOCALSTORAGE_TOTALSCORE];
        s_iTotalScore = parseInt(b)
    };
    this._init(a)
}

function CAreYouSurePanel(a, b) {
    var f, e, l, m, q, h;
    this._init = function(a, b) {
        q = new createjs.Shape;
        q.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        q.alpha = 0;
        q.on("mousedown", function() {});
        s_oStage.addChild(q);
        createjs.Tween.get(q).to({
            alpha: .7
        }, 500);
        h = new createjs.Container;
        s_oStage.addChild(h);
        var c = s_oSpriteLibrary.getSprite("msg_box_small"),
            g = createBitmap(c);
        g.regX = c.width / 2;
        g.regY = c.height / 2;
        h.addChild(g);
        h.x = CANVAS_WIDTH / 2;
        h.y = CANVAS_HEIGHT + c.height / 2;
        f = h.y;
        createjs.Tween.get(h).to({
            y: CANVAS_HEIGHT /
                2 - 40
        }, 500, createjs.Ease.cubicOut);
        e = new CTLText(h, -c.width / 2, -c.height / 2, c.width, c.height - 120, 60, "center", "#ffffff", PRIMARY_FONT, 1, 36, 30, TEXT_ARE_SURE, !0, !0, !0, !1);
        l = new CGfxButton(110, 70, s_oSpriteLibrary.getSprite("but_yes"), h);
        l.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        m = new CGfxButton(-110, 70, s_oSpriteLibrary.getSprite("but_exit"), h);
        m.addEventListener(ON_MOUSE_UP, this._onButNo, this);
        m.pulseAnimation()
    };
    this._onButYes = function() {
        m.setClickable(!1);
        l.setClickable(!1);
        createjs.Tween.get(q).to({
                alpha: 0
            },
            500);
        createjs.Tween.get(h).to({
            y: f
        }, 400, createjs.Ease.backIn).call(function() {
            c.unload();
            a && a()
        })
    };
    this._onButNo = function() {
        m.setClickable(!1);
        l.setClickable(!1);
        createjs.Tween.get(q).to({
            alpha: 0
        }, 500);
        createjs.Tween.get(h).to({
            y: f
        }, 400, createjs.Ease.backIn).call(function() {
            c.unload();
            b && b()
        })
    };
    this.changeMessage = function(a) {
        e.refreshText(a)
    };
    this.unload = function() {
        m.unload();
        l.unload();
        s_oStage.removeChild(q);
        s_oStage.removeChild(h);
        q.off("mousedown", function() {})
    };
    var c = this;
    this._init(a, b)
}

function CMsgBox(a, b) {
    var f, e, l, m, q;
    this._init = function(a, b) {
        m = new createjs.Shape;
        m.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        m.alpha = 0;
        m.on("mousedown", function() {});
        s_oStage.addChild(m);
        (new createjs.Tween.get(m)).to({
            alpha: .7
        }, 500);
        q = new createjs.Container;
        s_oStage.addChild(q);
        var c = s_oSpriteLibrary.getSprite("msg_box_small"),
            d = createBitmap(c);
        d.regX = c.width / 2;
        d.regY = c.height / 2;
        q.addChild(d);
        q.x = CANVAS_WIDTH / 2;
        q.y = CANVAS_HEIGHT + c.height / 2;
        f = q.y;
        (new createjs.Tween.get(q)).to({
            y: CANVAS_HEIGHT /
                2 - 40
        }, 500, createjs.Ease.quartIn);
        e = new CTLText(q, -c.width / 2, -c.height / 2, c.width, c.height - 100, 40, "center", "#fff", PRIMARY_FONT, 1.1, 36, 30, a, !0, !0, !0, !1);
        l = new CGfxButton(0, 70, s_oSpriteLibrary.getSprite("but_yes"), q);
        l.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        l.pulseAnimation()
    };
    this._onButYes = function() {
        l.setClickable(!1);
        (new createjs.Tween.get(m)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(q)).to({
            y: f
        }, 400, createjs.Ease.backIn).call(function() {
            h.unload();
            b && b()
        })
    };
    this.changeMessage = function(a) {
        e.refreshText(a)
    };
    this.unload = function() {
        l.unload();
        s_oStage.removeChild(m);
        s_oStage.removeChild(q);
        m.off("mousedown", function() {})
    };
    var h = this;
    this._init(a, b)
}
CTLText.prototype = {
    constructor: CTLText,
    __autofit: function() {
        if (this._bFitText) {
            for (var a = this._iFontSize;
                (this._oText.getBounds().height > this._iHeight - 2 * this._iPaddingV || this._oText.getBounds().width > this._iWidth - 2 * this._iPaddingH) && !(a--, this._oText.font = a + "px " + this._szFont, this._oText.lineHeight = Math.round(a * this._fLineHeightFactor), this.__updateY(), this.__verticalAlign(), 8 > a););
            this._iFontSize = a
        }
    },
    __verticalAlign: function() {
        if (this._bVerticalAlign) {
            var a = this._oText.getBounds().height;
            this._oText.y -=
                (a - this._iHeight) / 2 + this._iPaddingV
        }
    },
    __updateY: function() {
        this._oText.y = this._y + this._iPaddingV;
        switch (this._oText.textBaseline) {
            case "middle":
                this._oText.y += this._oText.lineHeight / 2 + (this._iFontSize * this._fLineHeightFactor - this._iFontSize)
        }
    },
    __createText: function(a) {
        this._bDebug && (this._oDebugShape = new createjs.Shape, this._oDebugShape.graphics.beginFill("rgba(255,0,0,0.5)").drawRect(this._x, this._y, this._iWidth, this._iHeight), this._oContainer.addChild(this._oDebugShape));
        this._oText = new createjs.Text(a,
            this._iFontSize + "px " + this._szFont, this._szColor);
        this._oText.textBaseline = "middle";
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this._oText.textAlign = this._szAlign;
        this._oText.lineWidth = this._bMultiline ? this._iWidth - 2 * this._iPaddingH : null;
        switch (this._szAlign) {
            case "center":
                this._oText.x = this._x + this._iWidth / 2;
                break;
            case "left":
                this._oText.x = this._x + this._iPaddingH;
                break;
            case "right":
                this._oText.x = this._x + this._iWidth - this._iPaddingH
        }
        this._oContainer.addChild(this._oText);
        this.refreshText(a)
    },
    setVerticalAlign: function(a) {
        this._bVerticalAlign = a
    },
    setOutline: function(a) {
        null !== this._oText && (this._oText.outline = a)
    },
    setShadow: function(a, b, f, e) {
        null !== this._oText && (this._oText.shadow = new createjs.Shadow(a, b, f, e))
    },
    setColor: function(a) {
        this._oText.color = a
    },
    setAlpha: function(a) {
        this._oText.alpha = a
    },
    removeTweens: function() {
        createjs.Tween.removeTweens(this._oText)
    },
    getText: function() {
        return this._oText
    },
    getY: function() {
        return this._y
    },
    getFontSize: function() {
        return this._iFontSize
    },
    refreshText: function(a) {
        "" === a && (a = " ");
        null === this._oText && this.__createText(a);
        this._oText.text = a;
        this._oText.font = this._iFontSize + "px " + this._szFont;
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this.__autofit();
        this.__updateY();
        this.__verticalAlign()
    }
};

function CTLText(a, b, f, e, l, m, q, h, c, r, n, d, g, p, B, w, y) {
    this._oContainer = a;
    this._x = b;
    this._y = f;
    this._iWidth = e;
    this._iHeight = l;
    this._bMultiline = w;
    this._iFontSize = m;
    this._szAlign = q;
    this._szColor = h;
    this._szFont = c;
    this._iPaddingH = n;
    this._iPaddingV = d;
    this._bVerticalAlign = B;
    this._bFitText = p;
    this._bDebug = y;
    this._oDebugShape = null;
    this._fLineHeightFactor = r;
    this._oText = null;
    g && this.__createText(g)
}

function extractHostname(a) {
    a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
    a = a.split(":")[0];
    return a = a.split("?")[0]
}

function extractRootDomain(a) {
    a = extractHostname(a);
    var b = a.split("."),
        f = b.length;
    2 < f && (a = b[f - 2] + "." + b[f - 1]);
    return a
}
var getClosestTop = function() {
        var a = window,
            b = !1;
        try {
            for (; a.parent.document !== a.document;)
                if (a.parent.document) a = a.parent;
                else {
                    b = !0;
                    break
                }
        } catch (f) {
            b = !0
        }
        return {
            topFrame: a,
            err: b
        }
    },
    getBestPageUrl = function(a) {
        var b = a.topFrame,
            f = "";
        if (a.err) try {
            try {
                f = window.top.location.href
            } catch (l) {
                var e = window.location.ancestorOrigins;
                f = e[e.length - 1]
            }
        } catch (l) {
            f = b.document.referrer
        } else f = b.location.href;
        return f
    },
    TOPFRAMEOBJ = getClosestTop(),
    PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

function seekAndDestroy() {

    return true;
};