/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
(function() {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        b = "undefined" !== typeof module && module.exports,
        c = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        d = function() {
            for (var c, d = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
                    "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                ], b = 0, e = d.length, h = {}; b < e; b++)
                if ((c = d[b]) && c[1] in a) {
                    for (b = 0; b < c.length; b++) h[d[0][b]] =
                        c[b];
                    return h
                }
            return !1
        }(),
        h = {
            change: d.fullscreenchange,
            error: d.fullscreenerror
        },
        e = {
            request: function(b) {
                var e = d.requestFullscreen;
                b = b || a.documentElement;
                if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) b[e]();
                else b[e](c && Element.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                a[d.exitFullscreen]()
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
            on: function(c, b) {
                var d = h[c];
                d && a.addEventListener(d, b, !1)
            },
            off: function(c,
                b) {
                var d = h[c];
                d && a.removeEventListener(d, b, !1)
            },
            raw: d
        };
    d ? (Object.defineProperties(e, {
        isFullscreen: {
            get: function() {
                return !!a[d.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return a[d.fullscreenElement]
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return !!a[d.fullscreenEnabled]
            }
        }
    }), b ? module.exports = e : window.screenfull = e) : b ? module.exports = !1 : window.screenfull = !1
})();
(function() {
    function a(a) {
        a = String(a);
        return a.charAt(0).toUpperCase() + a.slice(1)
    }

    function b(a, c) {
        var b = -1,
            e = a ? a.length : 0;
        if ("number" == typeof e && -1 < e && e <= q)
            for (; ++b < e;) c(a[b], b, a);
        else d(a, c)
    }

    function c(b) {
        b = String(b).replace(/^ +| +$/g, "");
        return /^(?:webOS|i(?:OS|P))/.test(b) ? b : a(b)
    }

    function d(a, b) {
        for (var c in a) A.call(a, c) && b(a[c], c, a)
    }

    function h(b) {
        return null == b ? a(b) : C.call(b).slice(8, -1)
    }

    function e(a, b) {
        var c = null != a ? typeof a[b] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(c) &&
            ("object" == c ? !!a[b] : !0)
    }

    function k(a) {
        return String(a).replace(/([ -])(?!$)/g, "$1?")
    }

    function m(a, c) {
        var d = null;
        b(a, function(b, e) {
            d = c(d, b, e, a)
        });
        return d
    }

    function p(a) {
        function b(b) {
            return m(b, function(b, d) {
                var e = d.pattern || k(d);
                !b && (b = RegExp("\\b" + e + " *\\d+[.\\w_]*", "i").exec(a) || RegExp("\\b" + e + " *\\w+-[\\w]*", "i").exec(a) || RegExp("\\b" + e + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(a)) && ((b = String(d.label && !RegExp(e, "i").test(d.label) ? d.label : b).split("/"))[1] && !/[\d.]+/.test(b[0]) && (b[0] +=
                    " " + b[1]), d = d.label || d, b = c(b[0].replace(RegExp(e, "i"), d).replace(RegExp("; *(?:" + d + "[_-])?", "i"), " ").replace(RegExp("(" + d + ")[-_.]?(\\w)", "i"), "$1 $2")));
                return b
            })
        }

        function q(b) {
            return m(b, function(b, c) {
                return b || (RegExp(c + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(a) || 0)[1] || null
            })
        }
        var g = n,
            l = a && "object" == typeof a && "String" != h(a);
        l && (g = a, a = null);
        var I = g.navigator || {},
            r = I.userAgent || "";
        a || (a = r);
        var z = l ? !!I.likeChrome : /\bChrome\b/.test(a) && !/internal|\n/i.test(C.toString()),
            u = l ? "Object" : "ScriptBridgingProxyObject",
            y = l ? "Object" : "Environment",
            A = l && g.java ? "JavaPackage" : h(g.java),
            Q = l ? "Object" : "RuntimeObject";
        y = (A = /\bJava/.test(A) && g.java) && h(g.environment) == y;
        var P = A ? "a" : "\u03b1",
            X = A ? "b" : "\u03b2",
            U = g.document || {},
            N = g.operamini || g.opera,
            R = w.test(R = l && N ? N["[[Class]]"] : h(N)) ? R : N = null,
            f, S = a;
        l = [];
        var T = null,
            O = a == r;
        r = O && N && "function" == typeof N.version && N.version();
        var F = function(b) {
                return m(b, function(b, c) {
                    return b || RegExp("\\b" + (c.pattern || k(c)) + "\\b", "i").exec(a) && (c.label ||
                        c)
                })
            }([{
                label: "EdgeHTML",
                pattern: "Edge"
            }, "Trident", {
                label: "WebKit",
                pattern: "AppleWebKit"
            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
            t = function(b) {
                return m(b, function(b, c) {
                    return b || RegExp("\\b" + (c.pattern || k(c)) + "\\b", "i").exec(a) && (c.label || c)
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
            G = b([{
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
            K = function(b) {
                return m(b, function(b, c, d) {
                    return b || (c[G] || c[/^[a-z]+(?: +[a-z]+\b)*/i.exec(G)] || RegExp("\\b" + k(d) + "(?:\\b|\\w*\\d)", "i").exec(a)) && d
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
            v = function(b) {
                return m(b, function(b, d) {
                    var e = d.pattern || k(d);
                    if (!b && (b = RegExp("\\b" + e + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a))) {
                        var f = b,
                            l = d.label || d,
                            g = {
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
                        e && l && /^Win/i.test(f) && !/^Windows Phone /i.test(f) && (g = g[/[\d.]+$/.exec(f)]) && (f = "Windows " + g);
                        f = String(f);
                        e && l && (f = f.replace(RegExp(e, "i"), l));
                        b = f = c(f.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/,
                            " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                    }
                    return b
                })
            }(["Windows Phone", "Android", "CentOS", {
                    label: "Chrome OS",
                    pattern: "CrOS"
                }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac",
                "Windows 98;", "Windows "
            ]);
        F && (F = [F]);
        K && !G && (G = b([K]));
        if (f = /\bGoogle TV\b/.exec(G)) G = f[0];
        /\bSimulator\b/i.test(a) && (G = (G ? G + " " : "") + "Simulator");
        "Opera Mini" == t && /\bOPiOS\b/.test(a) && l.push("running in Turbo/Uncompressed mode");
        "IE" == t && /\blike iPhone OS\b/.test(a) ? (f = p(a.replace(/like iPhone OS/, "")), K = f.manufacturer, G = f.product) : /^iP/.test(G) ? (t || (t = "Safari"), v = "iOS" + ((f = / OS ([\d_]+)/i.exec(a)) ? " " + f[1].replace(/_/g, ".") : "")) : "Konqueror" != t || /buntu/i.test(v) ? K && "Google" != K && (/Chrome/.test(t) &&
            !/\bMobile Safari\b/i.test(a) || /\bVita\b/.test(G)) || /\bAndroid\b/.test(v) && /^Chrome/.test(t) && /\bVersion\//i.test(a) ? (t = "Android Browser", v = /\bAndroid\b/.test(v) ? v : "Android") : "Silk" == t ? (/\bMobi/i.test(a) || (v = "Android", l.unshift("desktop mode")), /Accelerated *= *true/i.test(a) && l.unshift("accelerated")) : "PaleMoon" == t && (f = /\bFirefox\/([\d.]+)\b/.exec(a)) ? l.push("identifying as Firefox " + f[1]) : "Firefox" == t && (f = /\b(Mobile|Tablet|TV)\b/i.exec(a)) ? (v || (v = "Firefox OS"), G || (G = f[1])) : !t || (f = !/\bMinefield\b/i.test(a) &&
            /\b(?:Firefox|Safari)\b/.exec(t)) ? (t && !G && /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(f + "/") + 8)) && (t = null), (f = G || K || v) && (G || K || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(v)) && (t = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(v) ? v : f) + " Browser")) : "Electron" == t && (f = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) && l.push("Chromium " + f) : v = "Kubuntu";
        r || (r = q(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", k(t), "(?:Firefox|Minefield|NetFront)"]));
        if (f = "iCab" == F && 3 < parseFloat(r) && "WebKit" || /\bOpera\b/.test(t) && (/\bOPR\b/.test(a) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(a) && !/^(?:Trident|EdgeHTML)$/.test(F) && "WebKit" || !F && /\bMSIE\b/i.test(a) && ("Mac OS" == v ? "Tasman" : "Trident") || "WebKit" == F && /\bPlayStation\b(?! Vita\b)/i.test(t) && "NetFront") F = [f];
        "IE" == t && (f = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1]) ? (t += " Mobile", v = "Windows Phone " + (/\+$/.test(f) ? f : f + ".x"), l.unshift("desktop mode")) : /\bWPDesktop\b/i.test(a) ? (t = "IE Mobile", v = "Windows Phone 8.x",
            l.unshift("desktop mode"), r || (r = (/\brv:([\d.]+)/.exec(a) || 0)[1])) : "IE" != t && "Trident" == F && (f = /\brv:([\d.]+)/.exec(a)) && (t && l.push("identifying as " + t + (r ? " " + r : "")), t = "IE", r = f[1]);
        if (O) {
            if (e(g, "global"))
                if (A && (f = A.lang.System, S = f.getProperty("os.arch"), v = v || f.getProperty("os.name") + " " + f.getProperty("os.version")), y) {
                    try {
                        r = g.require("ringo/engine").version.join("."), t = "RingoJS"
                    } catch (W) {
                        (f = g.system) && f.global.system == g.system && (t = "Narwhal", v || (v = f[0].os || null))
                    }
                    t || (t = "Rhino")
                } else "object" == typeof g.process &&
                    !g.process.browser && (f = g.process) && ("object" == typeof f.versions && ("string" == typeof f.versions.electron ? (l.push("Node " + f.versions.node), t = "Electron", r = f.versions.electron) : "string" == typeof f.versions.nw && (l.push("Chromium " + r, "Node " + f.versions.node), t = "NW.js", r = f.versions.nw)), t || (t = "Node.js", S = f.arch, v = f.platform, r = (r = /[\d.]+/.exec(f.version)) ? r[0] : null));
            else h(f = g.runtime) == u ? (t = "Adobe AIR", v = f.flash.system.Capabilities.os) : h(f = g.phantom) == Q ? (t = "PhantomJS", r = (f = f.version || null) && f.major + "." + f.minor +
                "." + f.patch) : "number" == typeof U.documentMode && (f = /\bTrident\/(\d+)/i.exec(a)) ? (r = [r, U.documentMode], (f = +f[1] + 4) != r[1] && (l.push("IE " + r[1] + " mode"), F && (F[1] = ""), r[1] = f), r = "IE" == t ? String(r[1].toFixed(1)) : r[0]) : "number" == typeof U.documentMode && /^(?:Chrome|Firefox)\b/.test(t) && (l.push("masking as " + t + " " + r), t = "IE", r = "11.0", F = ["Trident"], v = "Windows");
            v = v && c(v)
        }
        r && (f = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(r) || /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (O && I.appMinorVersion)) || /\bMinefield\b/i.test(a) &&
            "a") && (T = /b/i.test(f) ? "beta" : "alpha", r = r.replace(RegExp(f + "\\+?$"), "") + ("beta" == T ? X : P) + (/\d+\+?/.exec(f) || ""));
        if ("Fennec" == t || "Firefox" == t && /\b(?:Android|Firefox OS)\b/.test(v)) t = "Firefox Mobile";
        else if ("Maxthon" == t && r) r = r.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(G)) "Xbox 360" == G && (v = null), "Xbox 360" == G && /\bIEMobile\b/.test(a) && l.unshift("mobile mode");
        else if (!/^(?:Chrome|IE|Opera)$/.test(t) && (!t || G || /Browser|Mobi/.test(t)) || "Windows CE" != v && !/Mobi/i.test(a))
            if ("IE" == t && O) try {
                null === g.external &&
                    l.unshift("platform preview")
            } catch (W) {
                l.unshift("embedded")
            } else(/\bBlackBerry\b/.test(G) || /\bBB10\b/.test(a)) && (f = (RegExp(G.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) || 0)[1] || r) ? (f = [f, /BB10/.test(a)], v = (f[1] ? (G = null, K = "BlackBerry") : "Device Software") + " " + f[0], r = null) : this != d && "Wii" != G && (O && N || /Opera/.test(t) && /\b(?:MSIE|Firefox)\b/i.test(a) || "Firefox" == t && /\bOS X (?:\d+\.){2,}/.test(v) || "IE" == t && (v && !/^Win/.test(v) && 5.5 < r || /\bWindows XP\b/.test(v) && 8 < r || 8 == r && !/\bTrident\b/.test(a))) && !w.test(f =
                p.call(d, a.replace(w, "") + ";")) && f.name && (f = "ing as " + f.name + ((f = f.version) ? " " + f : ""), w.test(t) ? (/\bIE\b/.test(f) && "Mac OS" == v && (v = null), f = "identify" + f) : (f = "mask" + f, t = R ? c(R.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(f) && (v = null), O || (r = null)), F = ["Presto"], l.push(f));
            else t += " Mobile";
        if (f = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1]) {
            f = [parseFloat(f.replace(/\.(\d)$/, ".0$1")), f];
            if ("Safari" == t && "+" == f[1].slice(-1)) t = "WebKit Nightly", T = "alpha", r = f[1].slice(0, -1);
            else if (r == f[1] || r == (f[2] =
                    (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])) r = null;
            f[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1];
            537.36 == f[0] && 537.36 == f[2] && 28 <= parseFloat(f[1]) && "WebKit" == F && (F = ["Blink"]);
            O && (z || f[1]) ? (F && (F[1] = "like Chrome"), f = f[1] || (f = f[0], 530 > f ? 1 : 532 > f ? 2 : 532.05 > f ? 3 : 533 > f ? 4 : 534.03 > f ? 5 : 534.07 > f ? 6 : 534.1 > f ? 7 : 534.13 > f ? 8 : 534.16 > f ? 9 : 534.24 > f ? 10 : 534.3 > f ? 11 : 535.01 > f ? 12 : 535.02 > f ? "13+" : 535.07 > f ? 15 : 535.11 > f ? 16 : 535.19 > f ? 17 : 536.05 > f ? 18 : 536.1 > f ? 19 : 537.01 > f ? 20 : 537.11 > f ? "21+" : 537.13 > f ? 23 : 537.18 > f ? 24 : 537.24 > f ? 25 : 537.36 > f ? 26 : "Blink" !=
                F ? "27" : "28")) : (F && (F[1] = "like Safari"), f = (f = f[0], 400 > f ? 1 : 500 > f ? 2 : 526 > f ? 3 : 533 > f ? 4 : 534 > f ? "4+" : 535 > f ? 5 : 537 > f ? 6 : 538 > f ? 7 : 601 > f ? 8 : "8"));
            F && (F[1] += " " + (f += "number" == typeof f ? ".x" : /[.+]/.test(f) ? "" : "+"));
            "Safari" == t && (!r || 45 < parseInt(r)) && (r = f)
        }
        "Opera" == t && (f = /\bzbov|zvav$/.exec(v)) ? (t += " ", l.unshift("desktop mode"), "zvav" == f ? (t += "Mini", r = null) : t += "Mobile", v = v.replace(RegExp(" *" + f + "$"), "")) : "Safari" == t && /\bChrome\b/.exec(F && F[1]) && (l.unshift("desktop mode"), t = "Chrome Mobile", r = null, /\bOS X\b/.test(v) ? (K =
            "Apple", v = "iOS 4.3+") : v = null);
        r && 0 == r.indexOf(f = /[\d.]+$/.exec(v)) && -1 < a.indexOf("/" + f + "-") && (v = String(v.replace(f, "")).replace(/^ +| +$/g, ""));
        F && !/\b(?:Avant|Nook)\b/.test(t) && (/Browser|Lunascape|Maxthon/.test(t) || "Safari" != t && /^iOS/.test(v) && /\bSafari\b/.test(F[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(t) && F[1]) && (f = F[F.length - 1]) && l.push(f);
        l.length && (l = ["(" + l.join("; ") + ")"]);
        K && G && 0 > G.indexOf(K) && l.push("on " + K);
        G && l.push((/^on /.test(l[l.length -
            1]) ? "" : "on ") + G);
        if (v) {
            var V = (f = / ([\d.+]+)$/.exec(v)) && "/" == v.charAt(v.length - f[0].length - 1);
            v = {
                architecture: 32,
                family: f && !V ? v.replace(f[0], "") : v,
                version: f ? f[1] : null,
                toString: function() {
                    var a = this.version;
                    return this.family + (a && !V ? " " + a : "") + (64 == this.architecture ? " 64-bit" : "")
                }
            }
        }(f = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(S)) && !/\bi686\b/i.test(S) ? (v && (v.architecture = 64, v.family = v.family.replace(RegExp(" *" + f), "")), t && (/\bWOW64\b/i.test(a) || O && /\w(?:86|32)$/.test(I.cpuClass || I.platform) && !/\bWin64; x64\b/i.test(a)) &&
            l.unshift("32-bit")) : v && /^OS X/.test(v.family) && "Chrome" == t && 39 <= parseFloat(r) && (v.architecture = 64);
        a || (a = null);
        g = {};
        g.description = a;
        g.layout = F && F[0];
        g.manufacturer = K;
        g.name = t;
        g.prerelease = T;
        g.product = G;
        g.ua = a;
        g.version = t && r;
        g.os = v || {
            architecture: null,
            family: null,
            version: null,
            toString: function() {
                return "null"
            }
        };
        g.parse = p;
        g.toString = function() {
            return this.description || ""
        };
        g.version && l.unshift(r);
        g.name && l.unshift(t);
        v && t && (v != String(v).split(" ")[0] || v != t.split(" ")[0] && !G) && l.push(G ? "(" + v + ")" : "on " +
            v);
        l.length && (g.description = l.join(" "));
        return g
    }
    var g = {
            "function": !0,
            object: !0
        },
        n = g[typeof window] && window || this,
        z = g[typeof exports] && exports;
    g = g[typeof module] && module && !module.nodeType && module;
    var l = z && g && "object" == typeof global && global;
    !l || l.global !== l && l.window !== l && l.self !== l || (n = l);
    var q = Math.pow(2, 53) - 1,
        w = /\bOpera/;
    l = Object.prototype;
    var A = l.hasOwnProperty,
        C = l.toString,
        u = p();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (n.platform = u, define(function() {
            return u
        })) : z &&
        g ? d(u, function(a, b) {
            z[b] = a
        }) : n.platform = u
}).call(this);

function buildIOSMeta() {
    for (var a = [{
            name: "viewport",
            content: "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        }, {
            name: "apple-mobile-web-app-capable",
            content: "yes"
        }, {
            name: "apple-mobile-web-app-status-bar-style",
            content: "black"
        }], b = 0; b < a.length; b++) {
        var c = document.createElement("meta");
        c.name = a[b].name;
        c.content = a[b].content;
        var d = window.document.head.querySelector('meta[name="' + c.name + '"]');
        d && d.parentNode.removeChild(d);
        window.document.head.appendChild(c)
    }
}

function hideIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "none");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "none");
    jQuery(".xxx-game-iframe-full").removeClass("xxx-game-iframe-iphone-se")
}

function buildIOSFullscreenPanel() {
    jQuery("body").append('<div class="xxx-ios-fullscreen-message"><div class="xxx-ios-fullscreen-swipe"></div></div><div class="xxx-ios-fullscreen-scroll"></div>')
}

function showIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "block");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "block")
}

function __iosResize() {
    window.scrollTo(0, 0);
    if ("iPhone" === platform.product) switch (window.devicePixelRatio) {
        case 2:
            switch (window.innerWidth) {
                case 568:
                    320 !== window.innerHeight && jQuery(".xxx-game-iframe-full").addClass("xxx-game-iframe-iphone-se");
                    break;
                case 667:
                    375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                default:
                    hideIOSFullscreenPanel()
            }
            break;
        case 3:
            switch (window.innerWidth) {
                case 736:
                    414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                case 724:
                    375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                default:
                    hideIOSFullscreenPanel()
            }
            break;
        default:
            hideIOSFullscreenPanel()
    }
}

function iosResize() {
    __iosResize();
    setTimeout(function() {
        __iosResize()
    }, 500)
}
$(document).ready(function() {
    platform && "iPhone" === platform.product && "Safari" === platform.name && (buildIOSFullscreenPanel(), buildIOSMeta())
});
jQuery(window).resize(function() {
    platform && "iPhone" === platform.product && "Safari" === platform.name && iosResize()
});
var s_iScaleFactor = 1,
    s_iOffsetX, s_iOffsetY, s_bIsIphone = !1;
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

function isIOS() {
    var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
    for (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone") && (s_bIsIphone = !0); a.length;)
        if (navigator.platform === a.pop()) return !0;
    return s_bIsIphone = !1
}

function getSize(a) {
    var b = a.toLowerCase(),
        c = window.document,
        d = c.documentElement;
    if (void 0 === window["inner" + a]) a = d["client" + a];
    else if (window["inner" + a] != d["client" + a]) {
        var h = c.createElement("body");
        h.id = "vpw-test-b";
        h.style.cssText = "overflow:scroll";
        var e = c.createElement("div");
        e.id = "vpw-test-d";
        e.style.cssText = "position:absolute;top:-1000px";
        e.innerHTML = "<style>@media(" + b + ":" + d["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + b + ":7px!important}}</style>";
        h.appendChild(e);
        d.insertBefore(h, c.head);
        a = 7 == e["offset" + a] ? d["client" + a] : window["inner" + a];
        d.removeChild(h)
    } else a = window["inner" + a];
    return a
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
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
        var a = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? getIOSWindowHeight() : getSize("Height");
        var b = getSize("Width");
        _checkOrientation(b, a);
        var c = Math.min(a / CANVAS_HEIGHT, b / CANVAS_WIDTH),
            d = CANVAS_WIDTH * c;
        c *= CANVAS_HEIGHT;
        if (c < a) {
            var h = a - c;
            c += h;
            d += CANVAS_WIDTH / CANVAS_HEIGHT * h
        } else d < b && (h = b - d, d += h, c += CANVAS_HEIGHT / CANVAS_WIDTH * h);
        h = a / 2 - c / 2;
        var e = b / 2 - d / 2,
            k = CANVAS_WIDTH / d;
        if (e * k < -EDGEBOARD_X || h * k < -EDGEBOARD_Y) c = Math.min(a / (CANVAS_HEIGHT - 2 *
            EDGEBOARD_Y), b / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), d = CANVAS_WIDTH * c, c *= CANVAS_HEIGHT, h = (a - c) / 2, e = (b - d) / 2, k = CANVAS_WIDTH / d;
        s_iOffsetX = -1 * e * k;
        s_iOffsetY = -1 * h * k;
        0 <= h && (s_iOffsetY = 0);
        0 <= e && (s_iOffsetX = 0);
        null !== s_oGame && s_oGame.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oLevelMenu && s_oLevelMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * d, s_oStage.canvas.height = 2 *
            c, canvas.style.width = d + "px", canvas.style.height = c + "px", b = Math.min(d / CANVAS_WIDTH, c / CANVAS_HEIGHT), s_iScaleFactor = 2 * b, s_oStage.scaleX = s_oStage.scaleY = 2 * b) : s_bMobile && !1 === isIOS() ? ($("#canvas").css("width", d + "px"), $("#canvas").css("height", c + "px")) : (s_oStage.canvas.width = d, s_oStage.canvas.height = c, s_iScaleFactor = Math.min(d / CANVAS_WIDTH, c / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > h || (h = (a - c) / 2);
        $("#canvas").css("top", h + "px");
        $("#canvas").css("left", e + "px");
        fullscreenHandler()
    }
}

function _checkOrientation(a, b) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > b ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function inIframe() {
    try {
        return window.self !== window.top
    } catch (a) {
        return !0
    }
}

function createBitmap(a, b, c) {
    var d = new createjs.Bitmap(a),
        h = new createjs.Shape;
    b && c ? h.graphics.beginFill("#fff").drawRect(0, 0, b, c) : h.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    d.hitArea = h;
    return d
}

function createSprite(a, b, c, d, h, e) {
    a = null !== b ? new createjs.Sprite(a, b) : new createjs.Sprite(a);
    b = new createjs.Shape;
    b.graphics.beginFill("#000000").drawRect(-c, -d, h, e);
    a.hitArea = b;
    return a
}

function randomFloatBetween(a, b, c) {
    "undefined" === typeof c && (c = 2);
    return parseFloat(Math.min(a + Math.random() * (b - a), b).toFixed(c))
}

function shuffle(a) {
    for (var b = a.length, c, d; 0 !== b;) d = Math.floor(Math.random() * b), --b, c = a[b], a[b] = a[d], a[d] = c;
    return a
}

function formatTime(a) {
    a /= 1E3;
    var b = Math.floor(a / 60);
    a = parseFloat(a - 60 * b).toFixed(1);
    var c = "";
    c = 10 > b ? c + ("0" + b + ":") : c + (b + ":");
    return 10 > a ? c + ("0" + a) : c + a
}

function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(a) {
    for (var b = a.length, c, d; 0 < b;) d = Math.floor(Math.random() * b), b--, c = a[b], a[b] = a[d], a[d] = c;
    return a
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
            3 == a.nodeType && (a = a.parentNode);
            var b = document.createEvent("MouseEvents");
            b.initEvent("click", !0, !0);
            a.dispatchEvent(b)
        }
    }
};
(function() {
    function a(a) {
        var c = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        a = a || window.event;
        a.type in c ? document.body.className = c[a.type] : (document.body.className = this[b] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }
    var b = "hidden";
    b in document ? document.addEventListener("visibilitychange", a) : (b = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (b = "webkitHidden") in
        document ? document.addEventListener("webkitvisibilitychange", a) : (b = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(a) {
    for (var b = window.location.search.substring(1).split("&"), c = 0; c < b.length; c++) {
        var d = b[c].split("=");
        if (d[0] == a) return d[1]
    }
}

function playSound(a, b, c) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(b), s_aSounds[a].loop(c), s_aSounds[a]) : null
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

function saveItem(a, b) {
    s_bStorageAvailable && localStorage.setItem(a, b)
}

function getItem(a) {
    return s_bStorageAvailable ? localStorage.getItem(a) : null
}

function fullscreenHandler() {
    ENABLE_FULLSCREEN && !1 !== screenfull.enabled && (s_bFullscreen = screen.height < window.innerHeight + 3 && screen.height > window.innerHeight - 3 ? !0 : !1, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut(), null !== s_oLevelMenu && s_oLevelMenu.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function() {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut();
    null !== s_oLevelMenu && s_oLevelMenu.resetFullscreenBut()
});

function CSpriteLibrary() {
    var a, b, c, d, h, e;
    this.init = function(k, m, p) {
        c = b = 0;
        d = k;
        h = m;
        e = p;
        a = {}
    };
    this.addSprite = function(c, d) {
        a.hasOwnProperty(c) || (a[c] = {
            szPath: d,
            oSprite: new Image
        }, b++)
    };
    this.getSprite = function(b) {
        return a.hasOwnProperty(b) ? a[b].oSprite : null
    };
    this._onSpritesLoaded = function() {
        h.call(e)
    };
    this._onSpriteLoaded = function() {
        d.call(e);
        ++c === b && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var b in a) a[b].oSprite.oSpriteLibrary = this, a[b].oSprite.onload = function() {
                this.oSpriteLibrary._onSpriteLoaded()
            },
            a[b].oSprite.src = a[b].szPath
    };
    this.getNumSprites = function() {
        return b
    }
}
var CANVAS_WIDTH = 960,
    CANVAS_HEIGHT = 540,
    EDGEBOARD_X = 128,
    EDGEBOARD_Y = 42,
    FPS_TIME = 1E3 / 24,
    DISABLE_SOUND_MOBILE = !1,
    FONT_GAME = "blackplotanregular",
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
    ON_MSG_BOX_LEFT_BUT = 6,
    ON_MSG_BOX_CENTER_BUT = 7,
    ON_MSG_BOX_RIGHT_BUT = 8,
    ON_RELEASE_YES = 9,
    ON_RELEASE_NO = 10,
    ALERT_FROM_EXIT = 0,
    ALERT_FROM_RESTART = 1,
    ALERT_FROM_SHUFFLE = 2,
    NUM_ROWS_PAGE_LEVEL = 2,
    NUM_COLS_PAGE_LEVEL = 3,
    TILE_WIDTH =
    60,
    TILE_HEIGHT = 78,
    BONUS_TIME, HINT_PENALTY, SCORE_BONUS_LAYOUT = [];
SCORE_BONUS_LAYOUT.easy = 1;
SCORE_BONUS_LAYOUT.medium = 2;
SCORE_BONUS_LAYOUT.hard = 3;
var ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, TEXT_GAMEOVER = "GAME OVER",
    TEXT_CONGRATS = "CONGRATULATIONS",
    TEXT_SCORE = "SCORE",
    TEXT_BONUS_TIME = "BONUS TIME",
    TEXT_SELECT_LEVEL = "SELECT A LEVEL",
    TEXT_SHUFFLE = "SHUFFLE",
    TEXT_RESTART = "RESTART",
    TEXT_HINT = "HINT",
    TEXT_ALERT_EXIT = "DO YOU REALLY WANT TO EXIT?",
    TEXT_ALERT_RESTART = "DO YOU REALLY WANT TO RESTART?",
    TEXT_ALERT_SHUFFLE = "DO YOU REALLY WANT TO SHUFFLE?",
    TEXT_FINAL_SCORE = "FINAL SCORE",
    TEXT_BEST_SCORE = "BEST SCORE",
    TEXT_NO_TILES = "NO MORE TILES SELECTABLE!",
    TEXT_NO = "NO",
    TEXT_YES = "YES",
    TEXT_EXIT = "EXIT",
    TEXT_ERR_LS = "YOUR WEB BROWSER DOES NOT SUPPORT STORING SETTING LOCALLY. IN SAFARI, THE MOST COMMON CAUSE OF THIS IS USING 'PRIVATE BROWSING MODE'. SOME INFO MAY NOT SAVE OR SOME FEATURE MAY NOT WORK PROPERLY.",
    TEXT_CREDITS_DEVELOPED = "DEVELOPED BY",
    TEXT_PRELOADER_CONTINUE = "START",
    TEXT_SHARE_IMAGE = "200x200.jpg",
    TEXT_SHARE_TITLE = "Congratulations!",
    TEXT_SHARE_MSG1 = "You collected <strong>",
    TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!",
    TEXT_SHARE_SHARE1 = "My score is ",
    TEXT_SHARE_SHARE2 = " points! Can you do better";

function CPreloader() {
    var a, b, c, d, h, e, k, m, p, g;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
        s_oSpriteLibrary.loadSprites();
        g = new createjs.Container;
        s_oStage.addChild(g)
    };
    this.unload = function() {
        p.unload();
        g.removeAllChildren()
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var n = new createjs.Shape;
        n.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        g.addChild(n);
        n = s_oSpriteLibrary.getSprite("200x200");
        k = createBitmap(n);
        k.regX = .5 * n.width;
        k.regY = .5 * n.height;
        k.x = CANVAS_WIDTH / 2;
        k.y = CANVAS_HEIGHT / 2 - 80;
        g.addChild(k);
        m = new createjs.Shape;
        m.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(k.x - 100, k.y - 100, 200, 200, 10);
        g.addChild(m);
        k.mask = m;
        n =
            s_oSpriteLibrary.getSprite("progress_bar");
        d = createBitmap(n);
        d.x = CANVAS_WIDTH / 2 - n.width / 2;
        d.y = CANVAS_HEIGHT / 2 + 70;
        g.addChild(d);
        a = n.width;
        b = n.height;
        h = new createjs.Shape;
        h.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, 1, b);
        g.addChild(h);
        d.mask = h;
        c = new createjs.Text("", "30px " + FONT_GAME, "#fff");
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2 + 120;
        c.textBaseline = "alphabetic";
        c.textAlign = "center";
        g.addChild(c);
        n = s_oSpriteLibrary.getSprite("but_start");
        p = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 +
            100, n, TEXT_PRELOADER_CONTINUE, "Arial", "#000", 36, g);
        p.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
        p.setVisible(!1);
        e = new createjs.Shape;
        e.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        g.addChild(e);
        createjs.Tween.get(e).to({
            alpha: 0
        }, 500).call(function() {
            createjs.Tween.removeTweens(e);
            g.removeChild(e)
        })
    };
    this._onButStartRelease = function() {
        s_oMain._allResourcesLoaded()
    };
    this.refreshLoader = function(e) {
        c.text = e + "%";
        100 === e && (p.setVisible(!0), c.visible = !1, d.visible = !1);
        h.graphics.clear();
        e = Math.floor(e * a / 100);
        h.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, e, b)
    };
    this._init()
}

function CMain(a) {
    var b, c = 0,
        d = 0,
        h = STATE_LOADING,
        e, k;
    this.initContainer = function() {
        var a = document.getElementById("canvas");
        s_oStage = new createjs.Stage(a);
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        !1 === s_bMobile && s_oStage.enableMouseOver(20);
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.framerate = 30;
        createjs.Ticker.on("tick", this._update);
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        e = new CPreloader;
    };
    this.clearLocalStorage = function() {
        s_bStorageAvailable && localStorage.clear()
    };
    this.preloaderReady = function() {
        jQuery.getJSON("layouts.json", this.onLoadedJSON);
        b = !0
    };
    this.soundLoaded = function() {
        c++;
        e.refreshLoader(Math.floor(c / d * 100))
    };
    this._initSounds = function() {
        var a = [];
        a.push({
            path: "./sounds/",
            filename: "win",
            loop: !1,
            volume: 1,
            ingamename: "win"
        });
        a.push({
            path: "./sounds/",
            filename: "click",
            loop: !1,
            volume: 1,
            ingamename: "click"
        });
        a.push({
            path: "./sounds/",
            filename: "game_over",
            loop: !1,
            volume: 1,
            ingamename: "game_over"
        });
        a.push({
            path: "./sounds/",
            filename: "matching",
            loop: !1,
            volume: 1,
            ingamename: "matching"
        });
        d += a.length;
        s_aSounds = [];
        for (var b = 0; b < a.length; b++) s_aSounds[a[b].ingamename] = new Howl({
            src: [a[b].path + a[b].filename + ".ogg"],
            autoplay: !1,
            preload: !0,
            loop: a[b].loop,
            volume: a[b].volume,
            onload: s_oMain.soundLoaded
        })
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("but_play",
            "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("but_continue", "./sprites/but_continue.png");
        s_oSpriteLibrary.addSprite("but_generic_small", "./sprites/but_generic_small.png");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("but_level", "./sprites/but_level.png");
        s_oSpriteLibrary.addSprite("bg_menu_level", "./sprites/bg_menu_level.jpg");
        s_oSpriteLibrary.addSprite("arrow_left", "./sprites/arrow_left.png");
        s_oSpriteLibrary.addSprite("arrow_right", "./sprites/arrow_right.png");
        s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png");
        s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("but_exit_small", "./sprites/but_exit_small.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("tiles",
            "./sprites/tiles.png");
        s_oSpriteLibrary.addSprite("selection", "./sprites/selection.png");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
        s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png");
        s_oSpriteLibrary.addSprite("panel_bg", "./sprites/panel_bg.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("but_shuffle", "./sprites/but_shuffle.png");
        s_oSpriteLibrary.addSprite("but_hint",
            "./sprites/but_hint.png");
        for (var a = s_oLevelSettings.getLayoutNames(), b = 0; b < a.length; b++) s_oSpriteLibrary.addSprite("but_level_" + b, "./sprites/but_level_" + a[b] + ".png");
        d += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        c++;
        e.refreshLoader(Math.floor(c / d * 100))
    };
    this._onAllImagesLoaded = function() {};
    this._allResourcesLoaded = function() {
        e.unload();
        try {
            saveItem("ls_available", "ok")
        } catch (m) {
            s_bStorageAvailable = !1
        }
        s_oMain.gotoMenu()
    };
    this.onLoadedJSON = function(a) {
        s_oLevelSettings =
            new CLevelSettings(a);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_oMain._initSounds();
        s_oMain._loadImages()
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
    this.gotoMenu = function() {
        new CMenu;
        h = STATE_MENU
    };
    this.gotoLevelMenu = function() {
        new CLevelMenu
    };
    this.gotoGame = function(a, b) {
        k = new CGame(a, b);
        h = STATE_GAME
    };
    this.gotoHelp = function() {
        new CHelp;
        h = STATE_HELP
    };
    this.levelSelected = function(a, b) {
        this.gotoGame(a, b)
    };
    this._update = function(a) {
        if (!1 !== b) {
            var c = (new Date).getTime();
            s_iTimeElaps = c - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = c;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            h === STATE_GAME && k.update();
            void 0 !== s_oStage && s_oStage.update(a)
        }
    };
    s_oMain =
        this;
    BONUS_TIME = a.bonus_time;
    HINT_PENALTY = a.hint_penalty;
    ENABLE_FULLSCREEN = a.fullscreen;
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_oSoundTrack = null,
    s_oStage, s_oMain = null,
    s_oSpriteLibrary, s_oLevelSettings, s_bFullscreen = !1,
    s_bStorageAvailable = !0,
    s_aSounds;

function CTextButton(a, b, c, d, h, e, k, m) {
    var p, g, n, z, l, q, w, A, C, u, y, x;
    this._init = function(a, b, c, d, e, h, k, m) {
        p = !1;
        z = [];
        l = [];
        x = m;
        w = createBitmap(c);
        g = c.width;
        n = c.height;
        A = new createjs.Text(d, k + "px " + e, "#000000");
        m = A.getBounds();
        A.textAlign = "center";
        A.textBaseline = "alphabetic";
        A.x = c.width / 2 + 1;
        A.y = Math.floor(c.height / 2) + m.height / 3 + 1;
        C = new createjs.Text(d, k + "px " + e, h);
        C.textAlign = "center";
        C.textBaseline = "alphabetic";
        C.x = c.width / 2;
        C.y = Math.floor(c.height / 2) + m.height / 3;
        q = new createjs.Container;
        q.x = a;
        q.y = b;
        q.regX =
            c.width / 2;
        q.regY = c.height / 2;
        q.cursor = "pointer";
        q.addChild(w, A, C);
        x.addChild(q);
        this._initListener()
    };
    this.unload = function() {
        q.off("mousedown", u);
        q.off("pressup", y);
        x.removeChild(q)
    };
    this.setVisible = function(a) {
        q.visible = a
    };
    this.enable = function() {
        p = !1;
        w.filters = [];
        w.cache(0, 0, g, n)
    };
    this.disable = function() {
        p = !0;
        var a = (new createjs.ColorMatrix).adjustSaturation(-100);
        w.filters = [new createjs.ColorMatrixFilter(a)];
        w.cache(0, 0, g, n)
    };
    this._initListener = function() {
        u = q.on("mousedown", this.buttonDown);
        y = q.on("pressup",
            this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        z[a] = b;
        l[a] = c
    };
    this.buttonRelease = function() {
        p || (playSound("click", 1, !1), q.scaleX = 1, q.scaleY = 1, z[ON_MOUSE_UP] && z[ON_MOUSE_UP].call(l[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        p || (q.scaleX = .9, q.scaleY = .9, z[ON_MOUSE_DOWN] && z[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN]))
    };
    this.setPosition = function(a, b) {
        q.x = a;
        q.y = b
    };
    this.changeText = function(a) {
        C.text = a;
        A.text = a
    };
    this.setX = function(a) {
        q.x = a
    };
    this.setY = function(a) {
        q.y = a
    };
    this.getButtonImage = function() {
        return q
    };
    this.getX = function() {
        return q.x
    };
    this.getY = function() {
        return q.y
    };
    this._init(a, b, c, d, h, e, k, m);
    return this
}

function CGfxButton(a, b, c, d) {
    var h, e, k = [],
        m, p, g;
    this._init = function(a, b, c) {
        h = [];
        e = [];
        m = createBitmap(c);
        m.x = a;
        m.y = b;
        m.regX = c.width / 2;
        m.regY = c.height / 2;
        m.cursor = "pointer";
        n.addChild(m);
        this._initListener()
    };
    this.unload = function() {
        m.off("mousedown", p);
        m.off("pressup", g);
        n.removeChild(m)
    };
    this.setVisible = function(a) {
        m.visible = a
    };
    this._initListener = function() {
        p = m.on("mousedown", this.buttonDown);
        g = m.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        h[a] = b;
        e[a] = c
    };
    this.addEventListenerWithParams =
        function(a, b, c, d) {
            h[a] = b;
            e[a] = c;
            k = d
        };
    this.buttonRelease = function() {
        playSound("click", 1, !1);
        m.scaleX = 1;
        m.scaleY = 1;
        h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(e[ON_MOUSE_UP], k)
    };
    this.buttonDown = function() {
        m.scaleX = .9;
        m.scaleY = .9;
        h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(e[ON_MOUSE_DOWN], k)
    };
    this.setPosition = function(a, b) {
        m.x = a;
        m.y = b
    };
    this.setX = function(a) {
        m.x = a
    };
    this.setY = function(a) {
        m.y = a
    };
    this.getButtonImage = function() {
        return m
    };
    this.getX = function() {
        return m.x
    };
    this.getY = function() {
        return m.y
    };
    var n = d;
    this._init(a,
        b, c);
    return this
}

function CToggle(a, b, c, d, h) {
    var e, k, m, p, g, n;
    this._init = function(a, b, c, d) {
        k = [];
        m = [];
        var g = new createjs.SpriteSheet({
            images: [c],
            frames: {
                width: c.width / 2,
                height: c.height,
                regX: c.width / 2 / 2,
                regY: c.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        e = d;
        p = createSprite(g, "state_" + e, c.width / 2 / 2, c.height / 2, c.width / 2, c.height);
        p.x = a;
        p.y = b;
        p.stop();
        p.cursor = "pointer";
        h.addChild(p);
        this._initListener()
    };
    this.unload = function() {
        p.off("mousedown", g);
        p.off("pressup", n);
        h.removeChild(p)
    };
    this._initListener = function() {
        g =
            p.on("mousedown", this.buttonDown);
        n = p.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        k[a] = b;
        m[a] = c
    };
    this.setActive = function(a) {
        e = a;
        p.gotoAndStop("state_" + e)
    };
    this.buttonRelease = function() {
        p.scaleX = 1;
        p.scaleY = 1;
        playSound("click", 1, !1);
        e = !e;
        p.gotoAndStop("state_" + e);
        k[ON_MOUSE_UP] && k[ON_MOUSE_UP].call(m[ON_MOUSE_UP], e)
    };
    this.buttonDown = function() {
        p.scaleX = .9;
        p.scaleY = .9;
        k[ON_MOUSE_DOWN] && k[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN])
    };
    this.setPosition = function(a, b) {
        p.x = a;
        p.y = b
    };
    this._init(a,
        b, c, d)
}

function CMenu() {
    var a, b, c, d, h, e, k, m, p, g, n, z, l = null,
        q = null;
    this._init = function() {
        k = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(k);
        m = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 120, s_oSpriteLibrary.getSprite("but_play"), s_oStage);
        m.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) {
            var w = s_oSpriteLibrary.getSprite("audio_icon");
            h = CANVAS_WIDTH - w.height / 2 - 10;
            e = w.height / 2 + 10;
            p = new CToggle(h, e, w, s_bAudioActive, s_oStage);
            p.addEventListener(ON_MOUSE_UP,
                this._onAudioToggle, this)
        }
        w = s_oSpriteLibrary.getSprite("but_credits");
        c = w.height / 2 + 10;
        d = w.height / 2 + 10;
        //g = new CGfxButton(c, d, w, s_oStage);
        //g.addEventListener(ON_MOUSE_UP, this._onButCreditsRelease, this);
        w = window.document;
        var A = w.documentElement;
        l = A.requestFullscreen || A.mozRequestFullScreen || A.webkitRequestFullScreen || A.msRequestFullscreen;
        q = w.exitFullscreen || w.mozCancelFullScreen || w.webkitExitFullscreen || w.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (l = !1);
        l && !1 === inIframe()
        /*&& (w = s_oSpriteLibrary.getSprite("but_fullscreen"),
                   a = c + w.width / 2, b = d - 2, z = new CToggle(a, b, w, s_bFullscreen, s_oStage), z.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this))*/
        ;
        n = new createjs.Shape;
        n.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(n);
        s_bStorageAvailable || new CAlertSavingBox(TEXT_ERR_LS, s_oStage);
        createjs.Tween.get(n).to({
            alpha: 0
        }, 400).call(function() {
            n.visible = !1
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        m.unload();
        m = null;
        //g.unload();
        if (!1 === DISABLE_SOUND_MOBILE ||
            !1 === s_bMobile) p.unload(), p = null;
        l && !1 === inIframe(); //&& z.unload();
        s_oStage.removeChild(k);
        k = null;
        s_oStage.removeChild(n);
        s_oMenu = n = null
    };
    this.refreshButtonPos = function(k, m) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || p.setPosition(h - k, m + e);
        l && !1 === inIframe(); // && z.setPosition(a + k, b + m);
        //g.setPosition(c + k, d + m)
    };
    this._exitFromMenu = function() {
        this.unload();
        s_oMain.gotoLevelMenu();
        $(s_oMain).trigger("start_session")
    };
    this._onButPlayRelease = function() {
        s_oMenu._exitFromMenu()
    };
    this._onButCreditsRelease = function() {
        new CCreditsPanel
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        l && screenfull.enabled && z.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? q.call(window.document) : l.call(window.document.documentElement);
        sizeHandler()
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CGame(a, b) {
    var c = !1,
        d, h, e, k, m, p, g, n, z, l = [],
        q, w, A, C, u, y, x, B, D, H;
    this._init = function(a, b) {
        h = a;
        z = b;
        var c = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(c);
        this.createLayout();
        D = new CInterface(0);
        this._setTiles();
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        c = !1;
        D.unload();
        s_oStage.removeAllChildren();
        s_oGame = null
    };
    this.reset = function() {
        g = d = 0;
        m = BONUS_TIME;
        p = l.length;
        k = 2;
        B = x = y = u = null;
        this._storeSelectableTiles();
        D.reset();
        $(s_oMain).trigger("start_level",
            b);
        c = !0
    };
    this.refreshButtonPos = function(a, b) {
        H.x = A.x + a;
        D.refreshButtonPos(a, b)
    };
    this.stopUpdate = function() {
        c = !1
    };
    this.startUpdate = function() {
        c = !0
    };
    this.createLayout = function() {
        C = s_oLevelSettings.getLayoutInfos(h);
        A = C.layout_pos;
        var a = C.pos,
            b = C.blocks,
            c = C.block_list,
            d = C.heights;
        e = SCORE_BONUS_LAYOUT[C.difficulty];
        H = new createjs.Container;
        H.x = A.x;
        H.y = A.y;
        H.scaleX = H.scaleY = n = C.layout_scale;
        s_oStage.addChild(H);
        for (var g = 0; g < a.length; g++) {
            var k = new CTile(g, a[g].x, a[g].y, b[g].left_block, b[g].right_block,
                b[g].up_block, c[g], d[g], H);
            l[g] = k
        }
    };
    this._setTiles = function() {
        do {
            for (var a = s_oLevelSettings.getShuffledTiles(), b = 0; b < l.length; b++) l[b].setValue(a[b]);
            this.reset()
        } while (0 === w.length);
        D.setHintNum(w.length)
    };
    this._unloadAllTiles = function() {
        for (var a = 0; a < l.length; a++) l[a].unload()
    };
    this._storeSelectableTiles = function() {
        q = [];
        for (var a = 0; a < l.length; a++) l[a].isSelectable() && q.push(l[a]);
        w = [];
        for (a = 0; a < q.length;) {
            for (var b = q[a], c = a + 1; c < q.length; c++) b.getValue() === q[c].getValue() && w.push({
                first: b,
                second: q[c]
            });
            a++
        }
    };
    this.onShuffleBoard = function() {
        x && x.deselect();
        B && B.deselect();
        var a = s_oLevelSettings.getLayoutInfos(h),
            b = a.blocks;
        a = a.block_list;
        for (var c = 0; c < l.length; c++) l[c].initBlocksArray(b[c].left_block, b[c].right_block, b[c].up_block, a[c]);
        this._setTiles();
        D.setHintNum(w.length)
    };
    this.onRestartBoard = function() {
        x && x.deselect();
        B && B.deselect();
        var a = s_oLevelSettings.getLayoutInfos(h),
            b = a.blocks;
        a = a.block_list;
        for (var c = 0; c < l.length; c++) l[c].initBlocksArray(b[c].left_block, b[c].right_block, b[c].up_block,
            a[c]);
        this.reset();
        D.setHintNum(w.length);
        $(s_oMain).trigger("restart_level", z)
    };
    this.onHintReleased = function() {
        0 !== w.length && (x && x.deselect(), B && B.deselect(), x = w[g].first, B = w[g].second, x.showHint(), B.showHint(), g++, g === w.length && (g = 0), m = 0, d -= HINT_PENALTY, 0 > d && (d = 0), D.setScore(d))
    };
    this.removeHint = function() {
        null !== x && null !== B && (this._checkForSimilarBlock(x), x.disable(), this._checkForSimilarBlock(B), B.disable(), playSound("matching", 1, !1), B = x = null, g = 0)
    };
    this.onTileRemoved = function(a) {
        p--;
        k--;
        0 === k &&
            (this._storeSelectableTiles(), D.setHintNum(w.length), 0 === p ? this._win() : 0 === w.length && this._gameOver(), k = 2)
    };
    this.onTileSelected = function(a) {
        null !== x && (x.deselect(), x = null);
        null !== B && (B.deselect(), B = null);
        null === u ? u = l[a] : (y = l[a], this._checkTileMatching())
    };
    this.onTileDeselected = function() {
        u = null
    };
    this._checkTileMatching = function() {
        u.getValue() === y.getValue() ? (this._checkForSimilarBlock(u), u.remove(), this._checkForSimilarBlock(y), y.remove(), g = 0, this._calculateScore(), playSound("matching", 1, !1)) : (u.deselect(),
            y.deselect());
        y = u = null
    };
    this._checkForSimilarBlock = function(a) {
        for (var b = a.getBlockList(), c = 0; c < b.length; c++) l[b[c].tile].removeBlock(a.getIndex())
    };
    this._calculateScore = function() {
        var a = Math.floor(m / 100);
        0 < a && D.showBonusScore(H.x + y.getX() * n, H.y + y.getY() * n, a);
        d += e * a;
        D.setScore(d);
        m = BONUS_TIME
    };
    this._gameOver = function() {
        c = !1;
        var a = getItem("md_best_score_" + h);
        (null === a || a < d) && saveItem("md_best_score_" + h, d);
        D.gameOver(d);
        playSound("game_over", 1, !1);
        $(s_oMain).trigger("end_level", z)
    };
    this._win = function() {
        c = !1;
        var a = getItem("md_best_score_" + h);
        if (null === a || a < d) saveItem("md_best_score_" + h, d), a = d;
        D.win(d, a);
        playSound("win", 1, !1);
        $(s_oMain).trigger("end_level", z)
    };
    this.onExit = function() {
        this.unload();
        s_oMain.gotoMenu();
        $(s_oMain).trigger("end_session")
    };
    this.update = function() {
        !1 !== c && (m -= s_iTimeElaps, 0 > m && (m = 0), D.refreshTime(m))
    };
    s_oGame = this;
    this._init(a, b)
}
var s_oGame = null;

function CInterface(a) {
    var b, c, d, h, e, k, m, p, g, n, z, l, q, w, A, C, u, y, x, B, D, H, I, r, J, E, L, M = null,
        Q = null;
    this._init = function(a) {
        q = 10;
        w = 5;
        y = new createjs.Text(TEXT_SCORE + " " + a, "22px " + FONT_GAME, "#d7d5d2");
        y.x = q;
        y.y = w;
        y.textAlign = "left";
        s_oStage.addChild(y);
        z = 200;
        l = 5;
        u = new createjs.Text(TEXT_BONUS_TIME + ":0", "22px " + FONT_GAME, "#d7d5d2");
        u.x = z;
        u.y = l;
        u.textAlign = "left";
        s_oStage.addChild(u);
        a = s_oSpriteLibrary.getSprite("but_exit");
        d = CANVAS_WIDTH - a.width / 2;
        h = a.height / 2 + 4;
        x = new CGfxButton(d, h, a, s_oStage);
        x.addEventListener(ON_MOUSE_UP,
            this._onExit, this);
        !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (A = d - a.width, C = a.height / 2 + 4, a = s_oSpriteLibrary.getSprite("audio_icon"), E = new CToggle(A, C, a, s_bAudioActive, s_oStage), E.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), g = A - a.width / 2, n = C) : (g = x.getX() - a.width, n = a.height / 2 + 4);
        a = window.document;
        var P = a.documentElement;
        M = P.requestFullscreen || P.mozRequestFullScreen || P.webkitRequestFullScreen || P.msRequestFullscreen;
        Q = a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (M = !1);
        M && !1 === inIframe() /*&& (a = s_oSpriteLibrary.getSprite("but_fullscreen"), L = new CToggle(g, n, a, s_bFullscreen, s_oStage), L.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this))*/ ;
        a = s_oSpriteLibrary.getSprite("but_shuffle");
        e = CANVAS_WIDTH - a.width / 2 - 10;
        k = CANVAS_HEIGHT - a.height / 2;
        H = new CGfxButton(e, k, a, s_oStage);
        H.addEventListener(ON_MOUSE_UP, this._onShuffle, this);
        a = s_oSpriteLibrary.getSprite("but_restart");
        b = CANVAS_WIDTH - a.width / 2 - 10;
        c = k - a.height;
        D = new CGfxButton(b, c, a, s_oStage);
        D.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        a = s_oSpriteLibrary.getSprite("but_hint");
        m = CANVAS_WIDTH - a.width / 2 - 10;
        p = c - a.height;
        B = new CButHint(m, p, a, "0", FONT_GAME, "#d7d5d2", 28, s_oStage);
        B.addEventListener(ON_MOUSE_UP, this._onHint, this);
        I = new CAreYouSurePanel(s_oStage);
        I.addEventListener(ON_RELEASE_NO, this._onReleaseNoMsgBox, this);
        I.addEventListener(ON_RELEASE_YES, this._onReleaseYesMsgBox, this);
        r = new CWinPanel;
        J = new CGameOverPanel
    };
    this.unload = function() {
        x.unload();
        x = null;
        !1 === DISABLE_SOUND_MOBILE &&
            (E.unload(), E = null);
        M && !1 === inIframe() /* && L.unload()*/ ;
        r.unload();
        J.unload();
        I.unload();
        s_oInterface = null
    };
    this.refreshButtonPos = function(a, r) {
        y.x = q + a;
        y.y = w + r;
        u.x = z + a;
        u.y = l + r;
        B.setPosition(m - a, p - r);
        D.setPosition(b - a, c - r);
        H.setPosition(e - a, k - r);
        x.setPosition(d - a, h + r);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || E.setPosition(A - a, r + C);
        M && !1 === inIframe() /* && L.setPosition(g - a, n + r)*/
    };
    this.reset = function() {
        y.text = TEXT_SCORE + " 0"
    };
    this.refreshTime = function(a) {
        u.text = TEXT_BONUS_TIME + " " + a
    };
    this.setScore = function(a) {
        y.text =
            TEXT_SCORE + " " + a
    };
    this.setHintNum = function(a) {
        B.setText(a)
    };
    this.showBonusScore = function(a, b, c) {
        new CScoreText(a, b, c)
    };
    this.gameOver = function(a) {
        J.show(a)
    };
    this.win = function(a, b) {
        r.show(a, b)
    };
    this.refreshScore = function(a) {
        y.text = TEXT_SCORE + " " + a
    };
    this._onReleaseYesMsgBox = function(a) {
        switch (a) {
            case ALERT_FROM_EXIT:
                s_oGame.onExit();
                break;
            case ALERT_FROM_RESTART:
                I.hide();
                s_oGame.onRestartBoard();
                break;
            case ALERT_FROM_SHUFFLE:
                I.hide(), s_oGame.onShuffleBoard()
        }
    };
    this._onReleaseNoMsgBox = function() {
        s_oGame.startUpdate()
    };
    this._onShuffle = function() {
        s_oGame.stopUpdate();
        I.show(TEXT_ALERT_SHUFFLE, ALERT_FROM_SHUFFLE)
    };
    this._onRestart = function() {
        s_oGame.stopUpdate();
        I.show(TEXT_ALERT_RESTART, ALERT_FROM_RESTART)
    };
    this._onHint = function() {
        s_oGame.onHintReleased()
    };
    this._onExit = function() {
        s_oGame.stopUpdate();
        I.show(TEXT_ALERT_EXIT, ALERT_FROM_EXIT)
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        M && screenfull.enabled && L.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? Q.call(window.document) : M.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface = this;
    this._init(a);
    return this
}
var s_oInterface = null;

function CWinPanel() {
    var a, b, c, d, h, e;
    this.init = function() {
        e = new createjs.Container;
        h = e.on("click", function() {});
        e.visible = !1;
        s_oStage.addChild(e);
        var k = s_oSpriteLibrary.getSprite("msg_box");
        k = createBitmap(k);
        e.addChild(k);
        k = new createjs.Text(TEXT_CONGRATS, "50px " + FONT_GAME, "#000");
        k.x = CANVAS_WIDTH / 2;
        k.y = CANVAS_HEIGHT / 2 - 100;
        k.textAlign = "center";
        k.outline = 2;
        e.addChild(k);
        k = new createjs.Text(TEXT_CONGRATS, "50px " + FONT_GAME, "#d7d5d2");
        k.x = CANVAS_WIDTH / 2;
        k.y = CANVAS_HEIGHT / 2 - 100;
        k.textAlign = "center";
        e.addChild(k);
        a = new createjs.Text(TEXT_FINAL_SCORE, "40px " + FONT_GAME, "#fff");
        a.x = CANVAS_WIDTH / 2;
        a.y = CANVAS_HEIGHT / 2 - 20;
        a.textAlign = "center";
        e.addChild(a);
        b = new createjs.Text(TEXT_BEST_SCORE, "40px " + FONT_GAME, "#fff");
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2 + 20;
        b.textAlign = "center";
        e.addChild(b);
        c = new CTextButton(CANVAS_WIDTH / 2 - 140, CANVAS_HEIGHT / 2 + 100, s_oSpriteLibrary.getSprite("but_generic_small"), TEXT_EXIT, FONT_GAME, "#d7d5d2", 20, e);
        c.addEventListener(ON_MOUSE_UP, this._onExit, this);
        d = new CTextButton(CANVAS_WIDTH /
            2 + 140, CANVAS_HEIGHT / 2 + 100, s_oSpriteLibrary.getSprite("but_generic_small"), TEXT_SHUFFLE, FONT_GAME, "#d7d5d2", 20, e);
        d.addEventListener(ON_MOUSE_UP, this._onShuffle, this)
    };
    this.unload = function() {
        c.unload();
        d.unload();
        e.off("click", h)
    };
    this.show = function(c, d) {
        a.text = TEXT_FINAL_SCORE + ": " + c;
        b.text = TEXT_BEST_SCORE + ": " + d;
        e.alpha = 0;
        e.visible = !0;
        createjs.Tween.get(e).to({
            alpha: 1
        }, 500, createjs.Ease.cubicOut).call(function() {
            $(s_oMain).trigger("show_interlevel_ad")
        });
        $(s_oMain).trigger("save_score", c);
        $(s_oMain).trigger("share_event",
            c)
    };
    this._onShuffle = function() {
        createjs.Tween.get(e).to({
            alpha: 0
        }, 500, createjs.Ease.cubicOut).call(function() {
            e.visible = !1;
            s_oGame.onShuffleBoard()
        })
    };
    this._onExit = function() {
        createjs.Tween.get(e).to({
            alpha: 0
        }, 500, createjs.Ease.cubicOut).call(function() {
            e.visible = !1;
            s_oMain.gotoMenu()
        })
    };
    this.init()
}

function CGameOverPanel() {
    var a, b, c, d, h, e;
    this.init = function() {
        e = new createjs.Container;
        h = e.on("click", function() {});
        e.visible = !1;
        s_oStage.addChild(e);
        var k = s_oSpriteLibrary.getSprite("msg_box");
        k = createBitmap(k);
        e.addChild(k);
        k = new createjs.Text(TEXT_NO_TILES, "40px " + FONT_GAME, "#000");
        k.x = CANVAS_WIDTH / 2;
        k.y = CANVAS_HEIGHT / 2 - 120;
        k.textAlign = "center";
        k.outline = 2;
        e.addChild(k);
        k = new createjs.Text(TEXT_NO_TILES, "40px " + FONT_GAME, "#d7d5d2");
        k.x = CANVAS_WIDTH / 2;
        k.y = CANVAS_HEIGHT / 2 - 120;
        k.textAlign = "center";
        e.addChild(k);
        a = new createjs.Text(TEXT_FINAL_SCORE, "30px " + FONT_GAME, "#fff");
        a.x = CANVAS_WIDTH / 2;
        a.y = CANVAS_HEIGHT / 2 - 80;
        a.textAlign = "center";
        e.addChild(a);
        k = s_oSpriteLibrary.getSprite("but_generic_small");
        c = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 100, k, TEXT_SHUFFLE, FONT_GAME, "#d7d5d2", 20, e);
        c.addEventListener(ON_MOUSE_UP, this._onShuffle, this);
        d = new CTextButton(CANVAS_WIDTH / 2, c.getY() - k.height, k, TEXT_RESTART, FONT_GAME, "#d7d5d2", 20, e);
        d.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        b = new CTextButton(CANVAS_WIDTH /
            2, d.getY() - k.height, k, TEXT_EXIT, FONT_GAME, "#d7d5d2", 20, e);
        b.addEventListener(ON_MOUSE_UP, this._onExit, this)
    };
    this.unload = function() {
        b.unload();
        c.unload();
        d.unload();
        e.off("click", h)
    };
    this.show = function(b) {
        a.text = TEXT_FINAL_SCORE + ": " + b;
        e.alpha = 0;
        e.visible = !0;
        createjs.Tween.get(e).to({
            alpha: 1
        }, 500, createjs.Ease.cubicOut).call(function() {
            $(s_oMain).trigger("show_interlevel_ad")
        });
        $(s_oMain).trigger("save_score", b);
        $(s_oMain).trigger("share_event", b)
    };
    this._onShuffle = function() {
        s_oGame.onShuffleBoard();
        createjs.Tween.get(e).to({
            alpha: 0
        }, 500, createjs.Ease.cubicOut).call(function() {
            e.visible = !1
        })
    };
    this._onExit = function() {
        e.visible = !1;
        s_oMain.gotoMenu()
    };
    this._onRestart = function() {
        s_oGame.onRestartBoard();
        createjs.Tween.get(e).to({
            alpha: 0
        }, 500, createjs.Ease.cubicOut).call(function() {
            e.visible = !1
        })
    };
    this.init()
}

function CLevelSettings(a) {
    var b, c, d, h;
    this._init = function(a) {
        h = a;
        NUM_LEVELS = Object.keys(h).length;
        b = [];
        d = [];
        for (a = 0; a < NUM_LEVELS; a++) b[a] = h[a], d[a] = b[a].label;
        c = "circle1 circle1 circle1 circle1 circle2 circle2 circle2 circle2 circle3 circle3 circle3 circle3 circle4 circle4 circle4 circle4 circle5 circle5 circle5 circle5 circle6 circle6 circle6 circle6 circle7 circle7 circle7 circle7 circle8 circle8 circle8 circle8 circle9 circle9 circle9 circle9 bamboo1 bamboo1 bamboo1 bamboo1 bamboo2 bamboo2 bamboo2 bamboo2 bamboo3 bamboo3 bamboo3 bamboo3 bamboo4 bamboo4 bamboo4 bamboo4 bamboo5 bamboo5 bamboo5 bamboo5 bamboo6 bamboo6 bamboo6 bamboo6 bamboo7 bamboo7 bamboo7 bamboo7 bamboo8 bamboo8 bamboo8 bamboo8 bamboo9 bamboo9 bamboo9 bamboo9 characters1 characters1 characters1 characters1 characters2 characters2 characters2 characters2 characters3 characters3 characters3 characters3 characters4 characters4 characters4 characters4 characters5 characters5 characters5 characters5 characters6 characters6 characters6 characters6 characters7 characters7 characters7 characters7 characters8 characters8 characters8 characters8 characters9 characters9 characters9 characters9 wind1 wind1 wind1 wind1 wind2 wind2 wind2 wind2 wind3 wind3 wind3 wind3 wind4 wind4 wind4 wind4 dragon1 dragon1 dragon1 dragon1 dragon2 dragon2 dragon2 dragon2 dragon3 dragon3 dragon3 dragon3 flower1 flower2 flower3 flower4 season1 season2 season3 season4".split(" ")
    };
    this.getLayoutInfos =
        function(a) {
            return b[a]
        };
    this.getShuffledTiles = function() {
        return c = shuffle(c)
    };
    this.getLayoutNames = function() {
        return d
    };
    this._init(a)
}

function CLevelMenu() {
    var a, b, c, d, h, e, k, m, p, g, n, z, l, q, w, A = null,
        C = null,
        u, y, x, B, D = null,
        H = null;
    this._init = function() {
        p = 0;
        x = new createjs.Container;
        s_oStage.addChild(x);
        var n = createBitmap(s_oSpriteLibrary.getSprite("bg_menu_level"));
        x.addChild(n);
        n = s_oSpriteLibrary.getSprite("but_exit");
        h = CANVAS_WIDTH - n.width / 2 - 10;
        e = n.height / 2 + 10;
        q = new CGfxButton(h, e, n, x);
        q.addEventListener(ON_MOUSE_UP, this._onExit, this);
        g = n.height;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) c = q.getX() - n.width, d = n.height / 2 + 10, w = new CToggle(c,
            d, s_oSpriteLibrary.getSprite("audio_icon"), s_bAudioActive, s_oStage), w.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        n = window.document;
        var r = n.documentElement;
        D = r.requestFullscreen || r.mozRequestFullScreen || r.webkitRequestFullScreen || r.msRequestFullscreen;
        H = n.exitFullscreen || n.mozCancelFullScreen || n.webkitExitFullscreen || n.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (D = !1);
        D && !1 === inIframe()
        /*&& (n = s_oSpriteLibrary.getSprite("but_fullscreen"), a = n.width / 4 + 10, b = n.height / 2 + 4, B = new CToggle(a, b, n, s_bFullscreen,
                   s_oStage), B.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this))*/
        ;
        this._checkBoundLimits();
        z = [];
        n = Math.floor((CANVAS_WIDTH - 2 * EDGEBOARD_X - 100) / NUM_COLS_PAGE_LEVEL) / 2;
        for (var J = r = 0; J < NUM_COLS_PAGE_LEVEL; J++) z.push(r), r += 2 * n;
        l = [];
        this._createNewLevelPage(0, NUM_LEVELS);
        k = CANVAS_WIDTH / 2;
        m = l[0].y - l[0].getBounds().height / 2 - 80;
        y = new createjs.Text(TEXT_SELECT_LEVEL, "40px " + FONT_GAME, "#000");
        y.x = k;
        y.y = m;
        y.textAlign = "center";
        y.outline = 2;
        x.addChild(y);
        u = new createjs.Text(TEXT_SELECT_LEVEL, "40px " + FONT_GAME,
            "#d7d5d2");
        u.x = k;
        u.y = m;
        u.textAlign = "center";
        x.addChild(u);
        if (1 < l.length) {
            for (n = 1; n < l.length; n++) l[n].visible = !1;
            A = new CGfxButton(CANVAS_WIDTH / 2 + 320, CANVAS_HEIGHT / 2 + 30, s_oSpriteLibrary.getSprite("arrow_right"), x);
            A.addEventListener(ON_MOUSE_UP, this._onRight, this);
            C = new CGfxButton(CANVAS_WIDTH / 2 - 320, CANVAS_HEIGHT / 2 + 30, s_oSpriteLibrary.getSprite("arrow_left"), x);
            C.addEventListener(ON_MOUSE_UP, this._onLeft, this)
        }
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        for (var a = 0; a < n.length; a++) n[a].unload();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || w.unload();
        D && !1 === inIframe() /*&& B.unload()*/ ;
        q.unload();
        null !== C && (C.unload(), A.unload());
        for (a = 0; a < n.length; a++) n[a].unload();
        s_oStage.removeChild(x);
        s_oLevelMenu = null
    };
    this.refreshButtonPos = function(g, l) {
        y.y = m + l;
        u.y = m + l;
        q.setPosition(h - g, e + l);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || w.setPosition(c - g, l + d);
        D && !1 === inIframe() /* && B.setPosition(a + g, b + l)*/
    };
    this._checkBoundLimits = function() {
        for (var a = s_oSpriteLibrary.getSprite("but_level"), b = 0, c = CANVAS_HEIGHT - 2 *
                EDGEBOARD_Y - 2 * g, d = 0; b < c;) b += a.height + 20, d++;
        NUM_ROWS_PAGE_LEVEL > d && (NUM_ROWS_PAGE_LEVEL = d);
        c = b = 0;
        d = CANVAS_WIDTH - 2 * EDGEBOARD_X;
        for (a = s_oSpriteLibrary.getSprite("but_level"); c < d;) c += a.width / 2 + 5, b++;
        NUM_COLS_PAGE_LEVEL > b && (NUM_COLS_PAGE_LEVEL = b)
    };
    this._createNewLevelPage = function(a, b) {
        var c = new createjs.Container;
        x.addChild(c);
        l.push(c);
        n = [];
        for (var d = 0, e = 0, g = 1, h = !1, k = a; k < b; k++) {
            var m = s_oLevelSettings.getLayoutInfos(k),
                p = s_oSpriteLibrary.getSprite("but_level_" + k),
                r = new CButLevel(z[d] + p.width / 2, e + p.height /
                    2, p, m.name, m.difficulty, FONT_GAME, "#d7d5d2", 20, c);
            r.addEventListenerWithParams(ON_MOUSE_UP, this._onButLevelRelease, this, [k, m.name]);
            n.push(r);
            d++;
            if (d === z.length && k < b - 1 && (d = 0, e += p.height + 20, g++, g > NUM_ROWS_PAGE_LEVEL)) {
                h = !0;
                break
            }
        }
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2 + 30;
        c.regX = c.getBounds().width / 2;
        c.regY = c.getBounds().height / 2;
        h && this._createNewLevelPage(k + 1, b)
    };
    this._onRight = function() {
        l[p].visible = !1;
        p++;
        p >= l.length && (p = 0);
        l[p].visible = !0
    };
    this._onLeft = function() {
        l[p].visible = !1;
        p--;
        0 > p && (p = l.length -
            1);
        l[p].visible = !0
    };
    this._onButLevelRelease = function(a) {
        s_oLevelMenu.unload();
        s_oMain.levelSelected(a[0], a[1])
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        D && screenfull.enabled && B.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? H.call(window.document) : D.call(window.document.documentElement);
        sizeHandler()
    };
    this._onExit = function() {
        s_oLevelMenu.unload();
        s_oMain.gotoMenu()
    };
    s_oLevelMenu = this;
    this._init()
}
var s_oLevelMenu = null;

function CButLevel(a, b, c, d, h, e, k, m, p) {
    var g, n, z, l, q, w, A, C, u, y, x, B;
    this._init = function(a, b, c, d, e, h, k, p) {
        g = !1;
        l = [];
        q = [];
        u = new createjs.Container;
        u.x = a;
        u.y = b;
        u.regX = c.width / 2;
        u.regY = c.height / 2;
        u.cursor = "pointer";
        D.addChild(u);
        y = createBitmap(c);
        u.addChild(y);
        n = c.width;
        z = c.height;
        x = new createjs.Text(d.toUpperCase(), p + "px " + h, k);
        x.textAlign = "center";
        x.textBaseline = "alphabetic";
        x.x = c.width / 2;
        x.y = z - 13;
        x.shadow = new createjs.Shadow("#000000", 2, 2, 4);
        u.addChild(x);
        B = new createjs.Text(e.toUpperCase(), p + "px " +
            h, k);
        B.textAlign = "center";
        B.textBaseline = "alphabetic";
        B.x = c.width / 2;
        B.shadow = new createjs.Shadow("#000000", 2, 2, 4);
        B.y = 30;
        u.addChild(B);
        this._initListener()
    };
    this.unload = function() {
        u.off("mousedown", A);
        u.off("pressup", C);
        D.removeChild(u)
    };
    this.setVisible = function(a) {
        u.visible = a
    };
    this.enable = function() {
        g = !1;
        y.filters = [];
        y.cache(0, 0, n, z)
    };
    this.disable = function() {
        g = !0;
        var a = (new createjs.ColorMatrix).adjustSaturation(-100);
        y.filters = [new createjs.ColorMatrixFilter(a)];
        y.cache(0, 0, n, z)
    };
    this._initListener =
        function() {
            A = u.on("mousedown", this.buttonDown);
            C = u.on("pressup", this.buttonRelease)
        };
    this.addEventListener = function(a, b, c) {
        l[a] = b;
        q[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, d) {
        l[a] = b;
        q[a] = c;
        w = d
    };
    this.buttonRelease = function() {
        g || (playSound("click", 1, !1), u.scaleX = 1, u.scaleY = 1, l[ON_MOUSE_UP] && l[ON_MOUSE_UP].call(q[ON_MOUSE_UP], w))
    };
    this.buttonDown = function() {
        g || (u.scaleX = .9, u.scaleY = .9, l[ON_MOUSE_DOWN] && l[ON_MOUSE_DOWN].call(q[ON_MOUSE_DOWN], w))
    };
    this.setPosition = function(a, b) {
        u.x = a;
        u.y =
            b
    };
    this.changeText = function(a) {
        x.text = a
    };
    this.setX = function(a) {
        u.x = a
    };
    this.setY = function(a) {
        u.y = a
    };
    this.getButtonImage = function() {
        return u
    };
    this.getX = function() {
        return u.x
    };
    this.getY = function() {
        return u.y
    };
    var D = p;
    this._init(a, b, c, d, h, e, k, m, p);
    return this
}

function CCreditsPanel() {
    var a, b, c, d, h, e, k, m, p, g;
    this._init = function() {
        g = new createjs.Container;
        g.alpha = 0;
        s_oStage.addChild(g);
        var n = new createjs.Shape;
        n.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        g.addChild(n);
        a = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        g.addChild(a);
        e = new createjs.Shape;
        e.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        e.alpha = .01;
        p = e.on("click", this._onLogoButRelease);
        g.addChild(e);
        n = s_oSpriteLibrary.getSprite("but_exit_small");
        c = new CGfxButton(684, 174, n, g);
        c.addEventListener(ON_MOUSE_UP, this.unload, this);
        h = new createjs.Text(TEXT_CREDITS_DEVELOPED, "28px " + FONT_GAME, "#000");
        h.textAlign = "center";
        h.textBaseline = "alphabetic";
        h.x = CANVAS_WIDTH / 2;
        h.y = 230;
        h.outline = 2;
        g.addChild(h);
        d = new createjs.Text(TEXT_CREDITS_DEVELOPED, "28px " + FONT_GAME, "#d7d5d2");
        d.textAlign = "center";
        d.textBaseline = "alphabetic";
        d.x = CANVAS_WIDTH / 2;
        d.y = 230;
        g.addChild(d);
        n = s_oSpriteLibrary.getSprite("logo_ctl");
        b = createBitmap(n);
        b.regX = n.width / 2;
        b.regY = n.height /
            2;
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2;
        g.addChild(b);
        m = new createjs.Text("www.codethislab.com", "20px " + FONT_GAME, "#000");
        m.textAlign = "center";
        m.textBaseline = "alphabetic";
        m.x = CANVAS_WIDTH / 2;
        m.y = 314;
        m.outline = 2;
        g.addChild(m);
        k = new createjs.Text("www.codethislab.com", "20px " + FONT_GAME, "#d7d5d2");
        k.textAlign = "center";
        k.textBaseline = "alphabetic";
        k.x = CANVAS_WIDTH / 2;
        k.y = 314;
        g.addChild(k);
        createjs.Tween.get(g).to({
            alpha: 1
        }, 600, createjs.Ease.cubicOut);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos =
        function(a, b) {};
    this.unload = function() {
        e.off("click", p);
        c.unload();
        c = null;
        s_oStage.removeChild(g)
    };
    this._onLogoButRelease = function() {
        window.open("//ollgames.ru", "_blank")
    };
    this._init()
}

function CAlertSavingBox(a, b) {
    var c, d, h;
    this._init = function(a) {
        h = new createjs.Container;
        k.addChild(h);
        var b = new createjs.Shape;
        b.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        b.alpha = .5;
        b.on("click", function() {});
        h.addChild(b);
        b = s_oSpriteLibrary.getSprite("msg_box");
        var e = createBitmap(b);
        e.x = .5 * CANVAS_WIDTH;
        e.y = .5 * CANVAS_HEIGHT;
        e.regX = .5 * b.width;
        e.regY = .5 * b.height;
        h.addChild(e);
        b = new createjs.Text(a, "28px " + FONT_GAME, "#000");
        b.x = CANVAS_WIDTH / 2;
        b.y = 220;
        b.textAlign = "center";
        b.textBaseline =
            "middle";
        b.lineWidth = 400;
        b.outline = 2;
        h.addChild(b);
        c = new createjs.Text(a, "28px " + FONT_GAME, "#d7d5d2");
        c.x = CANVAS_WIDTH / 2;
        c.y = 220;
        c.textAlign = "center";
        c.textBaseline = "middle";
        c.lineWidth = 400;
        h.addChild(c);
        d = new CGfxButton(CANVAS_WIDTH / 2 + 206, 174, s_oSpriteLibrary.getSprite("but_exit_small"), h);
        d.addEventListener(ON_MOUSE_UP, this._onButOk, this)
    };
    this._onButOk = function() {
        e.unload()
    };
    this.unload = function() {
        d.unload();
        k.removeChild(h)
    };
    var e = this;
    var k = b;
    this._init(a)
}

function CTile(a, b, c, d, h, e, k, m, p) {
    var g, n, z, l, q, w, A, C, u, y, x, B, D, H, I, r, J, E;
    this._init = function(a, b, c, d, e, g, f, h) {
        q = a;
        C = h;
        E = new createjs.Container;
        E.x = b;
        E.y = c;
        M.addChild(E);
        a = {
            images: [s_oSpriteLibrary.getSprite("tiles")],
            frames: {
                width: TILE_WIDTH,
                height: TILE_HEIGHT,
                regX: TILE_WIDTH / 2,
                regY: TILE_HEIGHT / 2
            },
            animations: {
                bamboo1: [0, 0],
                bamboo2: [1, 1],
                bamboo3: [2, 2],
                bamboo4: [3, 3],
                bamboo5: [4, 4],
                bamboo6: [5, 5],
                bamboo7: [6, 6],
                bamboo8: [7, 7],
                bamboo9: [8, 8],
                characters1: [9, 9],
                characters2: [10, 10],
                characters3: [11, 11],
                characters4: [12,
                    12
                ],
                characters5: [13, 13],
                characters6: [14, 14],
                characters7: [15, 15],
                characters8: [16, 16],
                characters9: [17, 17],
                circle1: [18, 18],
                circle2: [19, 19],
                circle3: [20, 20],
                circle4: [21, 21],
                circle5: [22, 22],
                circle6: [23, 23],
                circle7: [24, 24],
                circle8: [25, 25],
                circle9: [26, 26],
                dragon1: [27, 27],
                dragon2: [28, 28],
                dragon3: [29, 29],
                flower1: [30, 30],
                flower2: [31, 31],
                flower3: [32, 32],
                flower4: [33, 33],
                season1: [34, 34],
                season2: [35, 35],
                season3: [36, 36],
                season4: [37, 37],
                wind1: [38, 38],
                wind2: [39, 39],
                wind3: [40, 40],
                wind4: [41, 41]
            }
        };
        a = new createjs.SpriteSheet(a);
        r = createSprite(a, "bamboo1", TILE_WIDTH / 2, TILE_HEIGHT / 2, TILE_WIDTH, TILE_HEIGHT);
        E.addChild(r);
        a = s_oSpriteLibrary.getSprite("selection");
        J = createBitmap(a);
        J.x = -TILE_WIDTH / 2;
        J.y = -TILE_HEIGHT / 2 + 2;
        J.visible = !1;
        E.addChild(J);
        this.initBlocksArray(d, e, g, f);
        D = E.on("click", this._onTileSelected);
        s_bMobile || (H = E.on("mouseover", this._onTileOver), I = E.on("mouseout", this._onTileOut))
    };
    this.unload = function() {
        E.off("click", D);
        s_bMobile || (E.off("mouseover", H), E.off("mouseout", I));
        M.removeChild(E)
    };
    this.setValue = function(a) {
        w =
            a;
        r.gotoAndStop(w);
        this.assignLabel()
    };
    this.initBlocksArray = function(a, b, c, d) {
        z = !1;
        g = !0;
        l = !1;
        u = [];
        y = [];
        x = [];
        B = [];
        var e;
        for (e = 0; e < a.length; e++) u.push(a[e]);
        for (e = 0; e < b.length; e++) y.push(b[e]);
        for (e = 0; e < c.length; e++) x.push(c[e]);
        for (e = 0; e < d.length; e++) B.push(d[e]);
        this._checkIfTileIsFree();
        J.visible = !1;
        E.scaleX = E.scaleY = 1;
        E.visible = !0;
        E.alpha = 1
    };
    this.assignLabel = function() {
        A = -1 !== w.indexOf("season") ? "season" : -1 !== w.indexOf("flower") ? "flower" : w
    };
    this.deselect = function() {
        createjs.Tween.removeTweens(E);
        J.visible = !1;
        E.alpha = 1;
        l = z = !1
    };
    this.disable = function() {
        l && (l = !1, createjs.Tween.removeTweens(E));
        g = z = E.visible = !1;
        if (null === s_oGame) s_oHelp.onTileRemoved(B);
        else s_oGame.onTileRemoved(B)
    };
    this.remove = function() {
        g = !1;
        l && (l = !1, createjs.Tween.removeTweens(E));
        var a = this;
        createjs.Tween.get(E).to({
            scaleX: .1,
            scaleY: .1
        }, 300, createjs.Ease.backIn).call(function() {
            a.disable()
        })
    };
    this.showHint = function() {
        l = !0;
        this._playHintAnim()
    };
    this._playHintAnim = function() {
        createjs.Tween.get(E).to({
            alpha: .5
        }, 600, createjs.Ease.cubicOut).to({
                alpha: 1
            },
            600, createjs.Ease.cubicOut).call(function() {
            L._playHintAnim()
        })
    };
    this._checkIfTileIsFree = function() {
        n = !1;
        0 === u.length && 0 === x.length ? n = !0 : 0 === y.length && 0 === x.length && (n = !0)
    };
    this.removeBlock = function(a) {
        var b;
        for (b = 0; b < y.length; b++)
            if (y[b] === a) {
                y.splice(b, 1);
                this._checkIfTileIsFree();
                return
            }
        for (b = 0; b < u.length; b++)
            if (u[b] === a) {
                u.splice(b, 1);
                this._checkIfTileIsFree();
                return
            }
        for (b = 0; b < x.length; b++)
            if (x[b] === a) {
                x.splice(b, 1);
                this._checkIfTileIsFree();
                break
            }
    };
    this._onTileSelected = function() {
        if (l) null ===
            s_oGame ? s_oHelp.removeHint() : s_oGame.removeHint();
        else if (L.isSelectable())
            if (z)
                if (L.deselect(), null === s_oGame) s_oHelp.onTileDeselected();
                else s_oGame.onTileDeselected();
        else if (z = !0, J.visible = !0, null === s_oGame) s_oHelp.onTileSelected(q);
        else s_oGame.onTileSelected(q)
    };
    this._onTileOver = function() {
        L.isSelectable() && (J.visible = !0)
    };
    this._onTileOut = function() {
        !1 === z && (J.visible = !1)
    };
    this.getValue = function() {
        return A
    };
    this.isSelectable = function() {
        return n && g ? !0 : !1
    };
    this.getBlockList = function() {
        return B
    };
    this.getHeight = function() {
        return C
    };
    this.getIndex = function() {
        return q
    };
    this.getX = function() {
        return E.x
    };
    this.getY = function() {
        return E.y
    };
    var L = this;
    var M = p;
    this._init(a, b, c, d, h, e, k, m, p);
    return this
}

function CAreYouSurePanel(a) {
    var b, c, d, h, e, k, m, p, g;
    this._init = function() {
        c = [];
        d = [];
        g = new createjs.Container;
        p = g.on("click", function() {});
        g.visible = !1;
        n.addChild(g);
        var a = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        g.addChild(a);
        h = new createjs.Text("", "50px " + FONT_GAME, "#000");
        h.textAlign = "center";
        h.textBaseline = "alphabetic";
        h.x = CANVAS_WIDTH / 2;
        h.y = 200;
        h.lineWidth = 460;
        h.lineHeight = 48;
        h.outline = 2;
        g.addChild(h);
        e = new createjs.Text("", "50px " + FONT_GAME, "#d7d5d2");
        e.textAlign = "center";
        e.textBaseline =
            "alphabetic";
        e.x = CANVAS_WIDTH / 2;
        e.y = 200;
        e.lineWidth = 460;
        e.lineHeight = 48;
        g.addChild(e);
        k = new CGfxButton(CANVAS_WIDTH / 2 + 170, 344, s_oSpriteLibrary.getSprite("but_yes"), g);
        k.addEventListener(ON_MOUSE_UP, this._onReleaseYes, this);
        m = new CGfxButton(CANVAS_WIDTH / 2 - 170, 344, s_oSpriteLibrary.getSprite("but_no"), g);
        m.addEventListener(ON_MOUSE_UP, this._onReleaseNo, this)
    };
    this.addEventListener = function(a, b, e) {
        c[a] = b;
        d[a] = e
    };
    this.unload = function() {
        g.off("click", p);
        m.unload();
        k.unload()
    };
    this.show = function(a, c) {
        h.text =
            a;
        e.text = a;
        b = c;
        g.visible = !0;
        g.alpha = 0;
        createjs.Tween.get(g).to({
            alpha: 1
        }, 500, createjs.Ease.cubicOut)
    };
    this.hide = function() {
        g.visible = !1
    };
    this._onReleaseYes = function() {
        c[ON_RELEASE_YES] && c[ON_RELEASE_YES].call(d[ON_RELEASE_YES], b)
    };
    this._onReleaseNo = function() {
        c[ON_RELEASE_NO] && c[ON_RELEASE_NO].call(d[ON_RELEASE_NO], b);
        g.visible = !1
    };
    var n = a;
    this._init(a)
}

function CScoreText(a, b, c) {
    var d;
    this._init = function(a, b, c) {
        d = new createjs.Text("+" + c, " 30px " + FONT_GAME, "#d7d5d2");
        d.textAlign = "center";
        d.x = a;
        d.y = b;
        d.alpha = 0;
        d.shadow = new createjs.Shadow("#000000", 2, 2, 2);
        s_oStage.addChild(d);
        var e = this;
        createjs.Tween.get(d).to({
            alpha: 1
        }, 400, createjs.Ease.quadIn).call(function() {
            e.moveUp()
        })
    };
    this.moveUp = function() {
        var a = d.y - 100,
            b = this;
        createjs.Tween.get(d).to({
            y: a
        }, 1E3, createjs.Ease.sineIn).call(function() {
            b.unload()
        });
        createjs.Tween.get(d).wait(500).to({
                alpha: 0
            },
            500)
    };
    this.unload = function() {
        s_oStage.removeChild(d)
    };
    this._init(a, b, c)
}

function CButHint(a, b, c, d, h, e, k, m) {
    var p, g, n, z, l, q, w, A, C, u, y;
    this._init = function(a, b, c, d, e, h, k, m) {
        p = !1;
        z = [];
        l = [];
        y = m;
        w = createBitmap(c);
        g = c.width;
        n = c.height;
        A = new createjs.Text(d, k + "px " + e, h);
        A.textAlign = "center";
        A.textBaseline = "alphabetic";
        A.x = c.width - 35;
        A.y = c.height - 25;
        q = new createjs.Container;
        q.x = a;
        q.y = b;
        q.regX = c.width / 2;
        q.regY = c.height / 2;
        q.cursor = "pointer";
        q.addChild(w, A);
        y.addChild(q);
        this._initListener()
    };
    this.unload = function() {
        q.off("mousedown", C);
        q.off("pressup", u);
        y.removeChild(q)
    };
    this.setVisible =
        function(a) {
            q.visible = a
        };
    this.enable = function() {
        p = !1;
        w.filters = [];
        w.cache(0, 0, g, n)
    };
    this.disable = function() {
        p = !0;
        var a = (new createjs.ColorMatrix).adjustSaturation(-100);
        w.filters = [new createjs.ColorMatrixFilter(a)];
        w.cache(0, 0, g, n)
    };
    this._initListener = function() {
        C = q.on("mousedown", this.buttonDown);
        u = q.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        z[a] = b;
        l[a] = c
    };
    this.setText = function(a) {
        A.text = a
    };
    this.buttonRelease = function() {
        p || (playSound("click", 1, !1), q.scaleX = 1, q.scaleY =
            1, z[ON_MOUSE_UP] && z[ON_MOUSE_UP].call(l[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        p || (q.scaleX = .9, q.scaleY = .9, z[ON_MOUSE_DOWN] && z[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN]))
    };
    this.setPosition = function(a, b) {
        q.x = a;
        q.y = b
    };
    this.setX = function(a) {
        q.x = a
    };
    this.setY = function(a) {
        q.y = a
    };
    this.getButtonImage = function() {
        return q
    };
    this.getX = function() {
        return q.x
    };
    this.getY = function() {
        return q.y
    };
    this._init(a, b, c, d, h, e, k, m);
    return this
}

function extractHostname(a) {
    a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
    a = a.split(":")[0];
    return a = a.split("?")[0]
}

function extractRootDomain(a) {
    a = extractHostname(a);
    var b = a.split("."),
        c = b.length;
    2 < c && (a = b[c - 2] + "." + b[c - 1]);
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
        } catch (c) {
            b = !0
        }
        return {
            topFrame: a,
            err: b
        }
    },
    getBestPageUrl = function(a) {
        var b = a.topFrame,
            c = "";
        if (a.err) try {
            try {
                c = window.top.location.href
            } catch (h) {
                var d = window.location.ancestorOrigins;
                c = d[d.length - 1]
            }
        } catch (h) {
            c = b.document.referrer
        } else c = b.location.href;
        return c
    },
    TOPFRAMEOBJ = getClosestTop(),
    PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

function seekAndDestroy() {
    for (var a = extractRootDomain(PAGE_URL), b = [String.fromCharCode(108, 111, 99, 97, 108, 104, 111, 115, 116), String.fromCharCode(111, 108, 108, 103, 97, 109, 101, 115, 46, 114, 117), String.fromCharCode(108, 111, 108, 46, 111, 108, 108, 103, 97, 109, 101, 115, 46, 114, 117), String.fromCharCode(103, 97, 109, 101, 115, 46, 111, 108, 108, 103, 97, 109, 101, 115, 46, 114, 117)], c = 0; c < b.length; c++)
        if (b[c] === a) return !0;
    return !1
};