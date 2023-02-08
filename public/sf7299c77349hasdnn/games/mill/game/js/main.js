/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
(function() {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        c = "undefined" !== typeof module && module.exports,
        g = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        d = function() {
            for (var f, b = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
                    "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                ], c = 0, d = b.length, g = {}; c < d; c++)
                if ((f = b[c]) && f[1] in a) {
                    for (c = 0; c < f.length; c++) g[b[0][c]] =
                        f[c];
                    return g
                }
            return !1
        }(),
        h = {
            change: d.fullscreenchange,
            error: d.fullscreenerror
        },
        b = {
            request: function(b) {
                var f = d.requestFullscreen;
                b = b || a.documentElement;
                if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) b[f]();
                else b[f](g && Element.ALLOW_KEYBOARD_INPUT)
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
            on: function(b, c) {
                var f = h[b];
                f && a.addEventListener(f, c, !1)
            },
            off: function(b,
                c) {
                var f = h[b];
                f && a.removeEventListener(f, c, !1)
            },
            raw: d
        };
    d ? (Object.defineProperties(b, {
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
    }), c ? module.exports = b : window.screenfull = b) : c ? module.exports = !1 : window.screenfull = !1
})();
(function() {
    function a(a) {
        a = String(a);
        return a.charAt(0).toUpperCase() + a.slice(1)
    }

    function c(a, b) {
        var c = -1,
            f = a ? a.length : 0;
        if ("number" == typeof f && -1 < f && f <= u)
            for (; ++c < f;) b(a[c], c, a);
        else d(a, b)
    }

    function g(b) {
        b = String(b).replace(/^ +| +$/g, "");
        return /^(?:webOS|i(?:OS|P))/.test(b) ? b : a(b)
    }

    function d(a, b) {
        for (var f in a) A.call(a, f) && b(a[f], f, a)
    }

    function h(b) {
        return null == b ? a(b) : v.call(b).slice(8, -1)
    }

    function b(a, b) {
        var f = null != a ? typeof a[b] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(f) &&
            ("object" == f ? !!a[b] : !0)
    }

    function f(a) {
        return String(a).replace(/([ -])(?!$)/g, "$1?")
    }

    function m(a, b) {
        var f = null;
        c(a, function(c, g) {
            f = b(f, c, g, a)
        });
        return f
    }

    function p(a) {
        function c(b) {
            return m(b, function(b, c) {
                var e = c.pattern || f(c);
                !b && (b = RegExp("\\b" + e + " *\\d+[.\\w_]*", "i").exec(a) || RegExp("\\b" + e + " *\\w+-[\\w]*", "i").exec(a) || RegExp("\\b" + e + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(a)) && ((b = String(c.label && !RegExp(e, "i").test(c.label) ? c.label : b).split("/"))[1] && !/[\d.]+/.test(b[0]) && (b[0] +=
                    " " + b[1]), c = c.label || c, b = g(b[0].replace(RegExp(e, "i"), c).replace(RegExp("; *(?:" + c + "[_-])?", "i"), " ").replace(RegExp("(" + c + ")[-_.]?(\\w)", "i"), "$1 $2")));
                return b
            })
        }

        function A(b) {
            return m(b, function(b, c) {
                return b || (RegExp(c + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(a) || 0)[1] || null
            })
        }
        var e = q,
            k = a && "object" == typeof a && "String" != h(a);
        k && (e = a, a = null);
        var u = e.navigator || {},
            n = u.userAgent || "";
        a || (a = n);
        var z = k ? !!u.likeChrome : /\bChrome\b/.test(a) && !/internal|\n/i.test(v.toString()),
            C = k ? "Object" : "ScriptBridgingProxyObject",
            L = k ? "Object" : "Environment",
            H = k && e.java ? "JavaPackage" : h(e.java),
            P = k ? "Object" : "RuntimeObject";
        L = (H = /\bJava/.test(H) && e.java) && h(e.environment) == L;
        var Q = H ? "a" : "\u03b1",
            R = H ? "b" : "\u03b2",
            M = e.document || {},
            F = e.operamini || e.opera,
            I = B.test(I = k && F ? F["[[Class]]"] : h(F)) ? I : F = null,
            l, J = a;
        k = [];
        var K = null,
            G = a == n;
        n = G && F && "function" == typeof F.version && F.version();
        var x = function(b) {
                return m(b, function(b, c) {
                    return b || RegExp("\\b" + (c.pattern || f(c)) + "\\b", "i").exec(a) && (c.label ||
                        c)
                })
            }([{
                label: "EdgeHTML",
                pattern: "Edge"
            }, "Trident", {
                label: "WebKit",
                pattern: "AppleWebKit"
            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
            r = function(b) {
                return m(b, function(b, c) {
                    return b || RegExp("\\b" + (c.pattern || f(c)) + "\\b", "i").exec(a) && (c.label || c)
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
            y = c([{
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
            D = function(b) {
                return m(b, function(b, c, e) {
                    return b || (c[y] || c[/^[a-z]+(?: +[a-z]+\b)*/i.exec(y)] || RegExp("\\b" + f(e) + "(?:\\b|\\w*\\d)", "i").exec(a)) && e
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
            t = function(b) {
                return m(b, function(b, c) {
                    var e = c.pattern || f(c);
                    if (!b && (b = RegExp("\\b" + e + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a))) {
                        var d = b,
                            k = c.label || c,
                            h = {
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
                        e && k && /^Win/i.test(d) && !/^Windows Phone /i.test(d) && (h = h[/[\d.]+$/.exec(d)]) && (d = "Windows " + h);
                        d = String(d);
                        e && k && (d = d.replace(RegExp(e, "i"), k));
                        b = d = g(d.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/,
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
        x && (x = [x]);
        D && !y && (y = c([D]));
        if (l = /\bGoogle TV\b/.exec(y)) y = l[0];
        /\bSimulator\b/i.test(a) && (y = (y ? y + " " : "") + "Simulator");
        "Opera Mini" == r && /\bOPiOS\b/.test(a) && k.push("running in Turbo/Uncompressed mode");
        "IE" == r && /\blike iPhone OS\b/.test(a) ? (l = p(a.replace(/like iPhone OS/, "")), D = l.manufacturer, y = l.product) : /^iP/.test(y) ? (r || (r = "Safari"), t = "iOS" + ((l = / OS ([\d_]+)/i.exec(a)) ? " " + l[1].replace(/_/g, ".") : "")) : "Konqueror" != r || /buntu/i.test(t) ? D && "Google" != D && (/Chrome/.test(r) &&
            !/\bMobile Safari\b/i.test(a) || /\bVita\b/.test(y)) || /\bAndroid\b/.test(t) && /^Chrome/.test(r) && /\bVersion\//i.test(a) ? (r = "Android Browser", t = /\bAndroid\b/.test(t) ? t : "Android") : "Silk" == r ? (/\bMobi/i.test(a) || (t = "Android", k.unshift("desktop mode")), /Accelerated *= *true/i.test(a) && k.unshift("accelerated")) : "PaleMoon" == r && (l = /\bFirefox\/([\d.]+)\b/.exec(a)) ? k.push("identifying as Firefox " + l[1]) : "Firefox" == r && (l = /\b(Mobile|Tablet|TV)\b/i.exec(a)) ? (t || (t = "Firefox OS"), y || (y = l[1])) : !r || (l = !/\bMinefield\b/i.test(a) &&
            /\b(?:Firefox|Safari)\b/.exec(r)) ? (r && !y && /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(l + "/") + 8)) && (r = null), (l = y || D || t) && (y || D || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(t)) && (r = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(t) ? t : l) + " Browser")) : "Electron" == r && (l = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) && k.push("Chromium " + l) : t = "Kubuntu";
        n || (n = A(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", f(r), "(?:Firefox|Minefield|NetFront)"]));
        if (l = "iCab" == x && 3 < parseFloat(n) && "WebKit" || /\bOpera\b/.test(r) && (/\bOPR\b/.test(a) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(a) && !/^(?:Trident|EdgeHTML)$/.test(x) && "WebKit" || !x && /\bMSIE\b/i.test(a) && ("Mac OS" == t ? "Tasman" : "Trident") || "WebKit" == x && /\bPlayStation\b(?! Vita\b)/i.test(r) && "NetFront") x = [l];
        "IE" == r && (l = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1]) ? (r += " Mobile", t = "Windows Phone " + (/\+$/.test(l) ? l : l + ".x"), k.unshift("desktop mode")) : /\bWPDesktop\b/i.test(a) ? (r = "IE Mobile", t = "Windows Phone 8.x",
            k.unshift("desktop mode"), n || (n = (/\brv:([\d.]+)/.exec(a) || 0)[1])) : "IE" != r && "Trident" == x && (l = /\brv:([\d.]+)/.exec(a)) && (r && k.push("identifying as " + r + (n ? " " + n : "")), r = "IE", n = l[1]);
        if (G) {
            if (b(e, "global"))
                if (H && (l = H.lang.System, J = l.getProperty("os.arch"), t = t || l.getProperty("os.name") + " " + l.getProperty("os.version")), L) {
                    try {
                        n = e.require("ringo/engine").version.join("."), r = "RingoJS"
                    } catch (O) {
                        (l = e.system) && l.global.system == e.system && (r = "Narwhal", t || (t = l[0].os || null))
                    }
                    r || (r = "Rhino")
                } else "object" == typeof e.process &&
                    !e.process.browser && (l = e.process) && ("object" == typeof l.versions && ("string" == typeof l.versions.electron ? (k.push("Node " + l.versions.node), r = "Electron", n = l.versions.electron) : "string" == typeof l.versions.nw && (k.push("Chromium " + n, "Node " + l.versions.node), r = "NW.js", n = l.versions.nw)), r || (r = "Node.js", J = l.arch, t = l.platform, n = (n = /[\d.]+/.exec(l.version)) ? n[0] : null));
            else h(l = e.runtime) == C ? (r = "Adobe AIR", t = l.flash.system.Capabilities.os) : h(l = e.phantom) == P ? (r = "PhantomJS", n = (l = l.version || null) && l.major + "." + l.minor +
                "." + l.patch) : "number" == typeof M.documentMode && (l = /\bTrident\/(\d+)/i.exec(a)) ? (n = [n, M.documentMode], (l = +l[1] + 4) != n[1] && (k.push("IE " + n[1] + " mode"), x && (x[1] = ""), n[1] = l), n = "IE" == r ? String(n[1].toFixed(1)) : n[0]) : "number" == typeof M.documentMode && /^(?:Chrome|Firefox)\b/.test(r) && (k.push("masking as " + r + " " + n), r = "IE", n = "11.0", x = ["Trident"], t = "Windows");
            t = t && g(t)
        }
        n && (l = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(n) || /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (G && u.appMinorVersion)) || /\bMinefield\b/i.test(a) &&
            "a") && (K = /b/i.test(l) ? "beta" : "alpha", n = n.replace(RegExp(l + "\\+?$"), "") + ("beta" == K ? R : Q) + (/\d+\+?/.exec(l) || ""));
        if ("Fennec" == r || "Firefox" == r && /\b(?:Android|Firefox OS)\b/.test(t)) r = "Firefox Mobile";
        else if ("Maxthon" == r && n) n = n.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(y)) "Xbox 360" == y && (t = null), "Xbox 360" == y && /\bIEMobile\b/.test(a) && k.unshift("mobile mode");
        else if (!/^(?:Chrome|IE|Opera)$/.test(r) && (!r || y || /Browser|Mobi/.test(r)) || "Windows CE" != t && !/Mobi/i.test(a))
            if ("IE" == r && G) try {
                null === e.external &&
                    k.unshift("platform preview")
            } catch (O) {
                k.unshift("embedded")
            } else(/\bBlackBerry\b/.test(y) || /\bBB10\b/.test(a)) && (l = (RegExp(y.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) || 0)[1] || n) ? (l = [l, /BB10/.test(a)], t = (l[1] ? (y = null, D = "BlackBerry") : "Device Software") + " " + l[0], n = null) : this != d && "Wii" != y && (G && F || /Opera/.test(r) && /\b(?:MSIE|Firefox)\b/i.test(a) || "Firefox" == r && /\bOS X (?:\d+\.){2,}/.test(t) || "IE" == r && (t && !/^Win/.test(t) && 5.5 < n || /\bWindows XP\b/.test(t) && 8 < n || 8 == n && !/\bTrident\b/.test(a))) && !B.test(l =
                p.call(d, a.replace(B, "") + ";")) && l.name && (l = "ing as " + l.name + ((l = l.version) ? " " + l : ""), B.test(r) ? (/\bIE\b/.test(l) && "Mac OS" == t && (t = null), l = "identify" + l) : (l = "mask" + l, r = I ? g(I.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(l) && (t = null), G || (n = null)), x = ["Presto"], k.push(l));
            else r += " Mobile";
        if (l = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1]) {
            l = [parseFloat(l.replace(/\.(\d)$/, ".0$1")), l];
            if ("Safari" == r && "+" == l[1].slice(-1)) r = "WebKit Nightly", K = "alpha", n = l[1].slice(0, -1);
            else if (n == l[1] || n == (l[2] =
                    (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])) n = null;
            l[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1];
            537.36 == l[0] && 537.36 == l[2] && 28 <= parseFloat(l[1]) && "WebKit" == x && (x = ["Blink"]);
            G && (z || l[1]) ? (x && (x[1] = "like Chrome"), l = l[1] || (l = l[0], 530 > l ? 1 : 532 > l ? 2 : 532.05 > l ? 3 : 533 > l ? 4 : 534.03 > l ? 5 : 534.07 > l ? 6 : 534.1 > l ? 7 : 534.13 > l ? 8 : 534.16 > l ? 9 : 534.24 > l ? 10 : 534.3 > l ? 11 : 535.01 > l ? 12 : 535.02 > l ? "13+" : 535.07 > l ? 15 : 535.11 > l ? 16 : 535.19 > l ? 17 : 536.05 > l ? 18 : 536.1 > l ? 19 : 537.01 > l ? 20 : 537.11 > l ? "21+" : 537.13 > l ? 23 : 537.18 > l ? 24 : 537.24 > l ? 25 : 537.36 > l ? 26 : "Blink" !=
                x ? "27" : "28")) : (x && (x[1] = "like Safari"), l = (l = l[0], 400 > l ? 1 : 500 > l ? 2 : 526 > l ? 3 : 533 > l ? 4 : 534 > l ? "4+" : 535 > l ? 5 : 537 > l ? 6 : 538 > l ? 7 : 601 > l ? 8 : "8"));
            x && (x[1] += " " + (l += "number" == typeof l ? ".x" : /[.+]/.test(l) ? "" : "+"));
            "Safari" == r && (!n || 45 < parseInt(n)) && (n = l)
        }
        "Opera" == r && (l = /\bzbov|zvav$/.exec(t)) ? (r += " ", k.unshift("desktop mode"), "zvav" == l ? (r += "Mini", n = null) : r += "Mobile", t = t.replace(RegExp(" *" + l + "$"), "")) : "Safari" == r && /\bChrome\b/.exec(x && x[1]) && (k.unshift("desktop mode"), r = "Chrome Mobile", n = null, /\bOS X\b/.test(t) ? (D =
            "Apple", t = "iOS 4.3+") : t = null);
        n && 0 == n.indexOf(l = /[\d.]+$/.exec(t)) && -1 < a.indexOf("/" + l + "-") && (t = String(t.replace(l, "")).replace(/^ +| +$/g, ""));
        x && !/\b(?:Avant|Nook)\b/.test(r) && (/Browser|Lunascape|Maxthon/.test(r) || "Safari" != r && /^iOS/.test(t) && /\bSafari\b/.test(x[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(r) && x[1]) && (l = x[x.length - 1]) && k.push(l);
        k.length && (k = ["(" + k.join("; ") + ")"]);
        D && y && 0 > y.indexOf(D) && k.push("on " + D);
        y && k.push((/^on /.test(k[k.length -
            1]) ? "" : "on ") + y);
        if (t) {
            var N = (l = / ([\d.+]+)$/.exec(t)) && "/" == t.charAt(t.length - l[0].length - 1);
            t = {
                architecture: 32,
                family: l && !N ? t.replace(l[0], "") : t,
                version: l ? l[1] : null,
                toString: function() {
                    var a = this.version;
                    return this.family + (a && !N ? " " + a : "") + (64 == this.architecture ? " 64-bit" : "")
                }
            }
        }(l = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(J)) && !/\bi686\b/i.test(J) ? (t && (t.architecture = 64, t.family = t.family.replace(RegExp(" *" + l), "")), r && (/\bWOW64\b/i.test(a) || G && /\w(?:86|32)$/.test(u.cpuClass || u.platform) && !/\bWin64; x64\b/i.test(a)) &&
            k.unshift("32-bit")) : t && /^OS X/.test(t.family) && "Chrome" == r && 39 <= parseFloat(n) && (t.architecture = 64);
        a || (a = null);
        e = {};
        e.description = a;
        e.layout = x && x[0];
        e.manufacturer = D;
        e.name = r;
        e.prerelease = K;
        e.product = y;
        e.ua = a;
        e.version = r && n;
        e.os = t || {
            architecture: null,
            family: null,
            version: null,
            toString: function() {
                return "null"
            }
        };
        e.parse = p;
        e.toString = function() {
            return this.description || ""
        };
        e.version && k.unshift(n);
        e.name && k.unshift(r);
        t && r && (t != String(t).split(" ")[0] || t != r.split(" ")[0] && !y) && k.push(y ? "(" + t + ")" : "on " +
            t);
        k.length && (e.description = k.join(" "));
        return e
    }
    var k = {
            "function": !0,
            object: !0
        },
        q = k[typeof window] && window || this,
        e = k[typeof exports] && exports;
    k = k[typeof module] && module && !module.nodeType && module;
    var n = e && k && "object" == typeof global && global;
    !n || n.global !== n && n.window !== n && n.self !== n || (q = n);
    var u = Math.pow(2, 53) - 1,
        B = /\bOpera/;
    n = Object.prototype;
    var A = n.hasOwnProperty,
        v = n.toString,
        z = p();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (q.platform = z, define(function() {
            return z
        })) : e &&
        k ? d(z, function(a, b) {
            e[b] = a
        }) : q.platform = z
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
        }], c = 0; c < a.length; c++) {
        var g = document.createElement("meta");
        g.name = a[c].name;
        g.content = a[c].content;
        var d = window.document.head.querySelector('meta[name="' + g.name + '"]');
        d && d.parentNode.removeChild(d);
        window.document.head.appendChild(g)
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

function iosInIframe() {
    try {
        return window.self !== window.top
    } catch (a) {
        return !0
    }
}
$(document).ready(function() {
    platform && "iPhone" === platform.product && !iosInIframe() && (buildIOSFullscreenPanel(), buildIOSMeta())
});
jQuery(window).resize(function() {
    platform && "iPhone" === platform.product && !iosInIframe() && iosResize()
});
var s_iScaleFactor = 1,
    s_oCanvasLeft, s_oCanvasTop;
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,
        4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function() {
    sizeHandler()
});

function trace(a) {
    console.log(a)
}

function isIOS() {
    for (var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";"); a.length;)
        if (navigator.platform === a.pop()) return s_bIsIphone = !0;
    return s_bIsIphone = !1
}

function getSize(a) {
    var c = a.toLowerCase(),
        g = window.document,
        d = g.documentElement;
    if (void 0 === window["inner" + a]) a = d["client" + a];
    else if (window["inner" + a] != d["client" + a]) {
        var h = g.createElement("body");
        h.id = "vpw-test-b";
        h.style.cssText = "overflow:scroll";
        var b = g.createElement("div");
        b.id = "vpw-test-d";
        b.style.cssText = "position:absolute;top:-1000px";
        b.innerHTML = "<style>@media(" + c + ":" + d["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + c + ":7px!important}}</style>";
        h.appendChild(b);
        d.insertBefore(h, g.head);
        a = 7 == b["offset" + a] ? d["client" + a] : window["inner" + a];
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
        var c = getSize("Width");
        _checkOrientation(c, a);
        var g = Math.min(a / CANVAS_HEIGHT, c / CANVAS_WIDTH),
            d = Math.round(CANVAS_WIDTH * g);
        g = Math.round(CANVAS_HEIGHT * g);
        if (g < a) {
            var h = a - g;
            g += h;
            d += CANVAS_WIDTH / CANVAS_HEIGHT * h
        } else d < c && (h = c - d, d += h, g += CANVAS_HEIGHT / CANVAS_WIDTH * h);
        h = a / 2 - g / 2;
        var b = c / 2 - d / 2,
            f = CANVAS_WIDTH / d;
        if (b * f < -EDGEBOARD_X || h * f < -EDGEBOARD_Y) g = Math.min(a /
            (CANVAS_HEIGHT - 2 * EDGEBOARD_Y), c / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), d = CANVAS_WIDTH * g, g *= CANVAS_HEIGHT, h = (a - g) / 2, b = (c - d) / 2, f = CANVAS_WIDTH / d;
        s_iOffsetX = -1 * b * f;
        s_iOffsetY = -1 * h * f;
        0 <= h && (s_iOffsetY = 0);
        0 <= b && (s_iOffsetX = 0);
        null !== s_oGame && s_oGame.refreshButtonPos();
        null !== s_oMenu && s_oMenu.refreshButtonPos();
        null !== s_oModeMenu && s_oModeMenu.refreshButtonPos();
        s_bMobile ? ($("#canvas").css("width", d + "px"), $("#canvas").css("height", g + "px")) : s_oStage && (s_oStage.canvas.width = d, s_oStage.canvas.height = g, s_iScaleFactor =
            Math.min(d / CANVAS_WIDTH, g / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > h || (h = (a - g) / 2);
        $("#canvas").css("top", h + "px");
        $("#canvas").css("left", b + "px");
        fullscreenHandler()
    }
}

function _checkOrientation(a, c) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > c ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function createBitmap(a, c, g) {
    var d = new createjs.Bitmap(a),
        h = new createjs.Shape;
    c && g ? h.graphics.beginFill("#fff").drawRect(0, 0, c, g) : h.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    d.hitArea = h;
    return d
}

function createSprite(a, c, g, d, h, b) {
    a = null !== c ? new createjs.Sprite(a, c) : new createjs.Sprite(a);
    c = new createjs.Shape;
    c.graphics.beginFill("#000000").drawRect(-g, -d, h, b);
    a.hitArea = c;
    return a
}

function randomFloatBetween(a, c, g) {
    "undefined" === typeof g && (g = 2);
    return parseFloat(Math.min(a + Math.random() * (c - a), c).toFixed(g))
}

function shuffle(a) {
    for (var c = a.length, g, d; 0 !== c;) d = Math.floor(Math.random() * c), --c, g = a[c], a[c] = a[d], a[d] = g;
    return a
}

function formatTime(a) {
    a /= 1E3;
    var c = Math.floor(a / 60);
    a = parseFloat(a - 60 * c).toFixed(1);
    var g = "";
    g = 10 > c ? g + ("0" + c + ":") : g + (c + ":");
    return 10 > a ? g + ("0" + a) : g + a
}

function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(a) {
    for (var c = a.length, g, d; 0 < c;) d = Math.floor(Math.random() * c), c--, g = a[c], a[c] = a[d], a[d] = g;
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
            var c = document.createEvent("MouseEvents");
            c.initEvent("click", !0, !0);
            a.dispatchEvent(c)
        }
    }
};
(function() {
    function a(a) {
        var d = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        a = a || window.event;
        a.type in d ? document.body.className = d[a.type] : (document.body.className = this[c] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }
    var c = "hidden";
    c in document ? document.addEventListener("visibilitychange", a) : (c = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (c = "webkitHidden") in
        document ? document.addEventListener("webkitvisibilitychange", a) : (c = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(a) {
    for (var c = window.location.search.substring(1).split("&"), g = 0; g < c.length; g++) {
        var d = c[g].split("=");
        if (d[0] == a) return d[1]
    }
}

function playSound(a, c, g) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(c), s_aSounds[a].loop(g), s_aSounds[a]) : null
}

function stopSound(a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}

function setVolume(a, c) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(c)
}

function setMute(a, c) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(c)
}

function isSoundPlaying(a) {
    return s_aSounds[a].playing()
}

function fullscreenHandler() {
    ENABLE_FULLSCREEN && !1 !== screenfull.enabled && (s_bFullscreen = screen.height < window.innerHeight + 3 && screen.height > window.innerHeight - 3 ? !0 : !1, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut(), null !== s_oModeMenu && s_oModeMenu.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function() {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut();
    null !== s_oModeMenu && s_oModeMenu.resetFullscreenBut()
});

function CSpriteLibrary() {
    var a, c, g, d, h, b;
    this.init = function(f, m, p) {
        g = c = 0;
        d = f;
        h = m;
        b = p;
        a = {}
    };
    this.addSprite = function(b, d) {
        a.hasOwnProperty(b) || (a[b] = {
            szPath: d,
            oSprite: new Image
        }, c++)
    };
    this.getSprite = function(b) {
        return a.hasOwnProperty(b) ? a[b].oSprite : null
    };
    this._onSpritesLoaded = function() {
        h.call(b)
    };
    this._onSpriteLoaded = function() {
        d.call(b);
        ++g == c && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var b in a) a[b].oSprite.oSpriteLibrary = this, a[b].oSprite.onload = function() {
                this.oSpriteLibrary._onSpriteLoaded()
            },
            a[b].oSprite.onerror = function(b) {
                var c = b.currentTarget;
                setTimeout(function() {
                    a[c.szKey].oSprite.src = a[c.szKey].szPath
                }, 500)
            }, a[b].oSprite.src = a[b].szPath
    };
    this.getNumSprites = function() {
        return c
    };
    this.loadSpriteGroup = function(b, d, g, k) {
        for (var f = 0; f < b.length; f++) a[b[f].key] = {
            szPath: b[f].path,
            oSprite: new Image
        }, c++;
        this._loadInStreamingSprite(b, d, g, k)
    };
    this._loadInStreamingSprite = function(b, c, d, g) {
        var f = b.splice(0, 1)[0].key;
        a[f].oSprite.oSpriteLibrary = this;
        a[f].oSprite.onload = function() {
            this.oSpriteLibrary._onElementOfSpriteGroupLoaded(b,
                c, d, g)
        };
        a[f].oSprite.onerror = function(b) {
            setTimeout(function() {
                a[f].oSprite.src = a[f].szPath
            }, 500)
        };
        a[f].oSprite.src = a[f].szPath
    };
    this._onElementOfSpriteGroupLoaded = function(a, b, c, d) {
        0 === a.length ? c && c.call(b, d) : s_oSpriteLibrary._loadInStreamingSprite(a, b, c, d)
    }
}
var CANVAS_WIDTH = 768,
    CANVAS_HEIGHT = 1440,
    EDGEBOARD_X = 10,
    EDGEBOARD_Y = 265,
    FPS = 30,
    FPS_TIME = 1E3 / FPS,
    DISABLE_SOUND_MOBILE = !1,
    FONT_GAME = "arial-webfont",
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_MENU_MODE = 2,
    STATE_GAME = 3,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_BUT_YES_DOWN = 4,
    ON_SELECT_POINT = 5,
    ON_SELECT_PIECE = 6,
    ON_RESTART = 7,
    ON_BACK_MENU = 8,
    GAME_STATE_PLACING = 0,
    GAME_STATE_MOVEMENT = 1,
    MODE_HUMANS = 0,
    MODE_CPU = 1,
    WHITE_PLAYER = 0,
    BLACK_PLAYER = 1,
    PIECE_POINTS, PIECE_WIDTH = 100,
    PIECE_HEIGHT = 100,
    NUM_PIECES =
    9,
    PIECE_START_Y_OFFSET = 19,
    PIECE_SCALE_IN_BOARD = .5,
    NUM_MILLS = 16,
    NUM_BOARD_POINTS = 24,
    WASTE_PIECE_POS = {
        x: 300,
        y: -500
    },
    AI_TIME = 1E3,
    ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, TEXT_SCORE = "SCORE",
    TEXT_GAME_OVER = "GAME OVER",
    TEXT_CONGRATS = "YOU WON!!",
    TEXT_ERR_LS = "YOUR WEB BROWSER DOES NOT SUPPORT STORING SETTING LOCALLY. IN SAFARI, THE MOST COMMON CAUSE OF THIS IS USING 'PRIVATE BROWSING MODE'. SOME INFO MAY NOT SAVE OR SOME FEATURE MAY NOT WORK PROPERLY.",
    TEXT_CREDITS_DEVELOPED = "DEVELOPED BY",
    TEXT_PRELOADER_CONTINUE =
    "START",
    TEXT_ARE_SURE = "ARE YOU SURE?",
    TEXT_CHOOSE_MODE = "CHOOSE GAME MODE",
    TEXT_HOWTO = "HOW TO PLAY",
    TEXT_PLAYER_TURN = "PLAYER TURN",
    TEXT_HELP = ["PLACE ALL YOUR PIECES (MEN) ON BOARD AND MOVE THEM TO FORM A LINE OF 3 PIECES (A MILL).", "ONCE YOU FORM A MILL, YOU CAN REMOVE ONE OF YOUR OPPONENT'S MEN. BREAK A MILL TO UNLOCK THE MILLS AGAIN.", "PIECES FROM A FORMED MILL CAN'T BE REMOVED UNLESS NO OTHER MEN ARE AVAILABLE.", "YOUR AIM IS TO LEAVE YOUR OPPONENT WITH EITHER 2 PIECES OR 0 MOVES!"],
    TEXT_STATE0 =
    "SET YOUR MEN ON THE BOARD",
    TEXT_STATE1 = "REMOVE A MAN FROM THE OPPONENT'S",
    TEXT_STATE2 = "MOVE YOUR MEN TO CREATE A MILL";
TEXT_GAME_OVER = "NOT ENOUGH MEN LEFT!";
var TEXT_BLACK_WINS = "BLACK PLAYER WINS!",
    TEXT_WHITE_WINS = "WHITE PLAYER WINS!",
    TEXT_SHARE_IMAGE = "200x200.jpg",
    TEXT_SHARE_TITLE = "Congratulations!",
    TEXT_SHARE_MSG1 = "You collected <strong>",
    TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!",
    TEXT_SHARE_SHARE1 = "My score is ",
    TEXT_SHARE_SHARE2 = " points! Can you do better";

function CPreloader() {
    var a, c, g, d, h, b, f, m, p, k;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
        s_oSpriteLibrary.loadSprites();
        k = new createjs.Container;
        s_oStage.addChild(k)
    };
    this.unload = function() {
        p.unload();
        k.removeAllChildren()
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var q = new createjs.Shape;
        q.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        k.addChild(q);
        q = s_oSpriteLibrary.getSprite("200x200");
        f = createBitmap(q);
        f.regX = .5 * q.width;
        f.regY = .5 * q.height;
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT / 2 - 80;
        k.addChild(f);
        m = new createjs.Shape;
        m.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(f.x - 100, f.y - 100, 200, 200, 10);
        k.addChild(m);
        f.mask = m;
        q =
            s_oSpriteLibrary.getSprite("progress_bar");
        d = createBitmap(q);
        d.x = CANVAS_WIDTH / 2 - q.width / 2;
        d.y = CANVAS_HEIGHT / 2 + 70;
        k.addChild(d);
        a = q.width;
        c = q.height;
        h = new createjs.Shape;
        h.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, 1, c);
        k.addChild(h);
        d.mask = h;
        g = new createjs.Text("", "30px " + FONT_GAME, "#fff");
        g.x = CANVAS_WIDTH / 2;
        g.y = CANVAS_HEIGHT / 2 + 120;
        g.textBaseline = "alphabetic";
        g.textAlign = "center";
        k.addChild(g);
        q = s_oSpriteLibrary.getSprite("but_start");
        p = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 +
            100, q, TEXT_PRELOADER_CONTINUE, "Arial", "#000", 36, k);
        p.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
        p.setVisible(!1);
        b = new createjs.Shape;
        b.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        k.addChild(b);
        createjs.Tween.get(b).to({
            alpha: 0
        }, 500).call(function() {
            createjs.Tween.removeTweens(b);
            k.removeChild(b)
        })
    };
    this._onButStartRelease = function() {
        s_oMain._allResourcesLoaded()
    };
    this.refreshLoader = function(b) {
        g.text = b + "%";
        100 === b && (p.setVisible(!0), g.visible = !1, d.visible = !1);
        h.graphics.clear();
        b = Math.floor(b * a / 100);
        h.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, b, c)
    };
    this._init()
}

function CMain(a) {
    var c, g, d = 0,
        h = 0,
        b = STATE_LOADING,
        f, m;
    this.initContainer = function() {
        var a = document.getElementById("canvas");
        s_oStage = new createjs.Stage(a);
        s_oStage.preventSelection = !1;
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        !1 === s_bMobile && s_oStage.enableMouseOver(20);
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.framerate = FPS;
        createjs.Ticker.on("tick", this._update);
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        f = new CPreloader
    };
    this.preloaderReady = function() {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        this._loadImages();
        c = g = !0
    };
    this.soundLoaded = function() {
        d++;
        f.refreshLoader(Math.floor(d / h * 100))
    };
    this._initSounds = function() {
        var a = [];
        a.push({
            path: "./sounds/",
            filename: "click",
            loop: !1,
            volume: 1,
            ingamename: "click"
        });
        a.push({
            path: "./sounds/",
            filename: "bonus",
            loop: !1,
            volume: 1,
            ingamename: "bonus"
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
            filename: "game_win",
            loop: !1,
            volume: 1,
            ingamename: "game_win"
        });
        a.push({
            path: "./sounds/",
            filename: "locked",
            loop: !1,
            volume: 1,
            ingamename: "locked"
        });
        a.push({
            path: "./sounds/",
            filename: "piece",
            loop: !1,
            volume: 1,
            ingamename: "piece"
        });
        a.push({
            path: "./sounds/",
            filename: "removepiece",
            loop: !1,
            volume: 1,
            ingamename: "removepiece"
        });
        h += a.length;
        s_aSounds = [];
        for (var b = 0; b < a.length; b++) s_aSounds[a[b].ingamename] = new Howl({
            src: [a[b].path +
                a[b].filename + ".ogg"
            ],
            autoplay: !1,
            preload: !0,
            loop: a[b].loop,
            volume: a[b].volume,
            onload: s_oMain.soundLoaded
        })
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("bg_game",
            "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png");
        s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
        s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("bg_end_panel",
            "./sprites/bg_end_panel.jpg");
        s_oSpriteLibrary.addSprite("bg_preloader", "./sprites/bg_preloader.jpg");
        s_oSpriteLibrary.addSprite("board", "./sprites/board.png");
        s_oSpriteLibrary.addSprite("but_continue", "./sprites/but_continue.png");
        s_oSpriteLibrary.addSprite("but_restart_small", "./sprites/but_restart_small.png");
        s_oSpriteLibrary.addSprite("chipbox", "./sprites/chipbox.png");
        s_oSpriteLibrary.addSprite("highlight", "./sprites/highlight.png");
        s_oSpriteLibrary.addSprite("mill0", "./sprites/mill0.png");
        s_oSpriteLibrary.addSprite("mill1",
            "./sprites/mill1.png");
        s_oSpriteLibrary.addSprite("mill2", "./sprites/mill2.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("msg_box2", "./sprites/msg_box2.png");
        s_oSpriteLibrary.addSprite("piece0", "./sprites/piece0.png");
        s_oSpriteLibrary.addSprite("piece1", "./sprites/piece1.png");
        s_oSpriteLibrary.addSprite("player_turn_panel", "./sprites/player_turn_panel.png");
        s_oSpriteLibrary.addSprite("removable", "./sprites/removable.png");
        s_oSpriteLibrary.addSprite("vs_man_panel",
            "./sprites/vs_man_panel.png");
        s_oSpriteLibrary.addSprite("vs_pc_panel", "./sprites/vs_pc_panel.png");
        h += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        d++;
        f.refreshLoader(Math.floor(d / h * 100))
    };
    this._onAllImagesLoaded = function() {};
    this._allResourcesLoaded = function() {
        f.unload();
        s_oMain.gotoMenu()
    };
    this.gotoMenu = function() {
        new CMenu;
        b = STATE_MENU
    };
    this.gotoModeMenu = function() {
        new CMenuMode;
        b = STATE_MENU_MODE
    };
    this.gotoGame = function() {
        m = new CGame;
        b = STATE_GAME
    };
    this.stopUpdateNoBlockAndTick = function() {
        g = !1
    };
    this.startUpdateNoBlockAndTick = function() {
        g = !0
    };
    this.stopUpdateNoBlock = function() {
        c = !1;
        createjs.Ticker.paused = !0
    };
    this.startUpdateNoBlock = function() {
        s_iPrevTime = (new Date).getTime();
        c = !0;
        createjs.Ticker.paused = !1
    };
    this.stopUpdate = function() {
        c = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
    };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        c = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
    };
    this.isUpdating = function() {
        return c
    };
    this._update = function(a) {
        if (!1 !== c) {
            var f = (new Date).getTime();
            s_iTimeElaps = f - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = f;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            b === STATE_GAME && g && m.update();
            void 0 !== s_oStage && s_oStage.update(a)
        }
    };
    s_oMain = this;
    PIECE_POINTS = a.pieces_points;
    ENABLE_FULLSCREEN = false; //a.fullscreen;
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
    s_oSpriteLibrary, s_bFullscreen = !1,
    s_iMode;

function CTextButton(a, c, g, d, h, b, f, m) {
    var p, k, q, e, n, u, B, A, v, z, C;
    this._init = function(a, b, c, f, d, g, h, A) {
        p = !1;
        e = [];
        n = [];
        C = createBitmap(c);
        k = c.width;
        q = c.height;
        z = new createjs.Text(f, h + "px " + d, g);
        z.textAlign = "center";
        z.textBaseline = "alphabetic";
        z.lineWidth = .9 * k;
        z.x = c.width / 2;
        z.y = Math.floor(c.height / 2) + 15;
        v = new createjs.Container;
        v.x = a;
        v.y = b;
        v.regX = c.width / 2;
        v.regY = c.height / 2;
        s_bMobile || (v.cursor = "pointer");
        v.addChild(C, z);
        !1 !== A && s_oStage.addChild(v);
        this._initListener()
    };
    this.unload = function() {
        v.off("mousedown",
            u);
        v.off("pressup", B);
        s_oStage.removeChild(v)
    };
    this.setVisible = function(a) {
        v.visible = a
    };
    this.setAlign = function(a) {
        z.textAlign = a
    };
    this.enable = function() {
        p = !1;
        C.filters = [];
        C.cache(0, 0, k, q)
    };
    this.disable = function() {
        p = !0;
        var a = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
        C.filters = [new createjs.ColorMatrixFilter(a)];
        C.cache(0, 0, k, q)
    };
    this._initListener = function() {
        u = v.on("mousedown", this.buttonDown);
        B = v.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        e[a] =
            b;
        n[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, f) {
        e[a] = b;
        n[a] = c;
        A = f
    };
    this.buttonRelease = function() {
        p || (playSound("click", 1, !1), v.scaleX = 1, v.scaleY = 1, e[ON_MOUSE_UP] && e[ON_MOUSE_UP].call(n[ON_MOUSE_UP], A))
    };
    this.buttonDown = function() {
        p || (v.scaleX = .9, v.scaleY = .9, e[ON_MOUSE_DOWN] && e[ON_MOUSE_DOWN].call(n[ON_MOUSE_DOWN]))
    };
    this.setPosition = function(a, b) {
        v.x = a;
        v.y = b
    };
    this.changeText = function(a) {
        z.text = a
    };
    this.setX = function(a) {
        v.x = a
    };
    this.setY = function(a) {
        v.y = a
    };
    this.getButtonImage = function() {
        return v
    };
    this.getX = function() {
        return v.x
    };
    this.getY = function() {
        return v.y
    };
    this.getSprite = function() {
        return v
    };
    this._init(a, c, g, d, h, b, f, m);
    return this
}

function CGfxButton(a, c, g, d) {
    var h, b, f, m, p = [],
        k, q, e;
    this._init = function(a, c, g) {
        h = !1;
        b = 1;
        f = [];
        m = [];
        e = createBitmap(g);
        e.x = a;
        e.y = c;
        e.regX = g.width / 2;
        e.regY = g.height / 2;
        e.cursor = "pointer";
        d.addChild(e);
        this._initListener()
    };
    this.unload = function() {
        e.off("mousedown", k);
        e.off("pressup", q);
        d.removeChild(e)
    };
    this.setVisible = function(a) {
        e.visible = a
    };
    this._initListener = function() {
        k = e.on("mousedown", this.buttonDown);
        q = e.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        f[a] = b;
        m[a] = c
    };
    this.addEventListenerWithParams =
        function(a, b, c, d) {
            f[a] = b;
            m[a] = c;
            p = d
        };
    this.enable = function() {
        h = !1
    };
    this.disable = function() {
        h = !0
    };
    this.buttonRelease = function() {
        h || (playSound("click", 1, !1), e.scaleX = b, e.scaleY = b, f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(m[ON_MOUSE_UP], p))
    };
    this.buttonDown = function() {
        h || (e.scaleX = .9 * b, e.scaleY = .9 * b, f[ON_MOUSE_DOWN] && f[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN], p))
    };
    this.setPosition = function(a, b) {
        e.x = a;
        e.y = b
    };
    this.setX = function(a) {
        e.x = a
    };
    this.setY = function(a) {
        e.y = a
    };
    this.setScale = function(a) {
        b = a;
        e.scaleX = e.scaleY =
            a
    };
    this.getButtonImage = function() {
        return e
    };
    this.getX = function() {
        return e.x
    };
    this.getY = function() {
        return e.y
    };
    this._init(a, c, g)
}

function CMenu() {
    var a, c, g, d, h, b, f, m, p = null,
        k = null,
        q, e, n;
    this._init = function() {
        q = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(q);
        var u = s_oSpriteLibrary.getSprite("but_play");
        f = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 310, u, s_oStage);
        f.addEventListener(ON_MOUSE_UP, this._onStart, this, 0);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) u = s_oSpriteLibrary.getSprite("audio_icon"), h = CANVAS_WIDTH - u.height / 2 - 10, b = u.height / 2 + 10, e = new CToggle(h, b, u, s_bAudioActive, s_oStage), e.addEventListener(ON_MOUSE_UP,
            this._onAudioToggle, this);
        u = s_oSpriteLibrary.getSprite("but_credits");
        g = u.width / 2 + 10;
        d = u.height / 2 + 10;
        //m = new CGfxButton(g, d, u, s_oStage);
        //m.addEventListener(ON_MOUSE_UP, this._onCreditsBut, this);*/
        u = window.document;
        var B = u.documentElement;
        p = B.requestFullscreen || B.mozRequestFullScreen || B.webkitRequestFullScreen || B.msRequestFullscreen;
        k = u.exitFullscreen || u.mozCancelFullScreen || u.webkitExitFullscreen || u.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (p = !1);
        p && screenfull.enabled && (u = s_oSpriteLibrary.getSprite("but_fullscreen"),
            a = g + u.width / 2 + 10, c = u.height / 2 + 10, n = new CToggle(a, c, u, s_bFullscreen, s_oStage), n.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        this.refreshButtonPos();
        var A = new createjs.Shape;
        A.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(A);
        createjs.Tween.get(A).to({
            alpha: 0
        }, 1E3).call(function() {
            A.visible = !1
        })
    };
    this.unload = function() {
        _bUpdate = !1;
        f.unload();
        //m.unload();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) e.unload(), e = null;
        p && screenfull.enabled && n.unload();
        s_oMenu = null;
        s_oStage.removeAllChildren()
    };
    this.refreshButtonPos = function() {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || e.setPosition(h - s_iOffsetX, s_iOffsetY + b);
        p && screenfull.enabled && n.setPosition(a + s_iOffsetX, c + s_iOffsetY);
        //m.setPosition(g + s_iOffsetX, s_iOffsetY + d)
    };
    this._onStart = function() {
        $(s_oMain).trigger("start_session");
        s_oMenu.unload();
        s_oMain.gotoModeMenu()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onCreditsBut = function() {
        new CCreditsPanel
    };
    this.resetFullscreenBut = function() {
        p && screenfull.enabled && n.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? k.call(window.document) : p.call(window.document.documentElement);
        sizeHandler()
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CGame() {
    var a, c, g, d, h, b;
    this._init = function() {
        var a = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(a);
        h = new CBoard(s_oStage);
        d = new CInterface;
        this.reset();
        b = new CHelpPanel;
        b.show();
        g = new CEndPanel;
        g.addEventListener(ON_RESTART, this.restart, this);
        g.addEventListener(ON_BACK_MENU, this.onExit, this);
        s_iMode === MODE_CPU && (s_oAi = new CAiController);
        this.startGame()
    };
    this.unload = function() {
        d.unload();
        s_oStage.removeAllChildren();
        s_oGame = null
    };
    this.reset = function() {
        c = GAME_STATE_PLACING;
        a = WHITE_PLAYER;
        d.changeTurn(a)
    };
    this.restart = function() {
        this.reset();
        h.restart();
        d.refreshTextHelp(TEXT_STATE0);
        this.startGame()
    };
    this.startGame = function() {
        h.startGame()
    };
    this.refreshButtonPos = function() {
        d.refreshButtonPos()
    };
    this.refreshTextHelp = function(a) {
        d.refreshTextHelp(a)
    };
    this.changeState = function(b) {
        c = b;
        switch (b) {
            case GAME_STATE_MOVEMENT:
                h.prepareForMovState(a), d.refreshTextHelp(TEXT_STATE2)
        }
    };
    this.changeTurn = function(b) {
        a++;
        a > BLACK_PLAYER && (a = 0);
        d.changeTurn(a);
        b && this.changeState(GAME_STATE_MOVEMENT)
    };
    this.gameOver = function(a, b, c) {
        b = a === WHITE_PLAYER ? b.length * PIECE_POINTS : c.length * PIECE_POINTS;
        g.show(b, a);
        $(s_oMain).trigger("share_event", b);
        $(s_oMain).trigger("save_score", b)
    };
    this.onExitFromHelp = function() {};
    this.onExit = function() {
        this.unload();
        s_oMain.gotoMenu();
        $(s_oMain).trigger("show_interlevel_ad");
        $(s_oMain).trigger("end_session")
    };
    this.getTurn = function() {
        return a
    };
    this.getOpponentTurn = function() {
        return 0 === a ? 1 : 0
    };
    this.getState = function() {
        return c
    };
    this.update = function() {};
    s_oGame = this;
    this._init()
}
var s_oGame = null;

function CInterface() {
    var a, c, g, d, h, b, f, m, p, k, q, e, n, u = null,
        B = null,
        A, v, z, C;
    this._init = function() {
        var w = s_oSpriteLibrary.getSprite("player_turn_panel");
        C = new createjs.Container;
        C.x = CANVAS_WIDTH / 2;
        C.regX = w.width / 2;
        C.y = 1E3;
        s_oStage.addChild(C);
        w = createBitmap(w);
        C.addChild(w);
        w = new createjs.Text(TEXT_PLAYER_TURN, "35px " + FONT_GAME, "#fff");
        w.x = 80;
        w.y = 80;
        w.textAlign = "left";
        w.textBaseline = "alphabetic";
        C.addChild(w);
        var E = {
            images: [s_oSpriteLibrary.getSprite("piece0")],
            framerate: 6,
            frames: {
                width: PIECE_WIDTH,
                height: PIECE_HEIGHT,
                regX: PIECE_WIDTH / 2,
                regY: PIECE_HEIGHT / 2
            },
            animations: {
                start: 0,
                anim: [0, 4]
            }
        };
        E = new createjs.SpriteSheet(E);
        v = createSprite(E, "anim", PIECE_WIDTH / 2, PIECE_HEIGHT / 2, PIECE_WIDTH, PIECE_HEIGHT);
        v.visible = !1;
        v.x = w.x + w.getBounds().width + 80;
        v.y = 70;
        v.scaleX = v.scaleY = .8;
        C.addChild(v);
        E = {
            images: [s_oSpriteLibrary.getSprite("piece1")],
            framerate: 6,
            frames: {
                width: PIECE_WIDTH,
                height: PIECE_HEIGHT,
                regX: PIECE_WIDTH / 2,
                regY: PIECE_HEIGHT / 2
            },
            animations: {
                start: 0,
                anim: [0, 4]
            }
        };
        E = new createjs.SpriteSheet(E);
        z = createSprite(E, "anim",
            PIECE_WIDTH / 2, PIECE_HEIGHT / 2, PIECE_WIDTH, PIECE_HEIGHT);
        z.visible = !1;
        z.x = w.x + w.getBounds().width + 80;
        z.y = 70;
        z.scaleX = z.scaleY = .8;
        C.addChild(z);
        w = s_oSpriteLibrary.getSprite("but_exit");
        h = CANVAS_WIDTH - w.width / 2 - 10;
        b = w.height / 2 + 10;
        p = new CGfxButton(h - s_iOffsetX, b, w, s_oStage);
        p.addEventListener(ON_MOUSE_UP, this._onExit, this);
        a = h - w.width - 10;
        c = b;
        k = new CGfxButton(a, c, s_oSpriteLibrary.getSprite("but_restart_small"), s_oStage);
        k.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        !1 === DISABLE_SOUND_MOBILE || !1 ===
            s_bMobile ? (w = s_oSpriteLibrary.getSprite("audio_icon"), f = a - w.width / 2 - 10, m = c, q = new CToggle(f, m, w, s_bAudioActive, s_oStage), q.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), g = f - w.width / 2 - 10, d = m) : (g = h - w.width / 2 - 10, d = b);
        w = window.document;
        E = w.documentElement;
        u = E.requestFullscreen || E.mozRequestFullScreen || E.webkitRequestFullScreen || E.msRequestFullscreen;
        B = w.exitFullscreen || w.mozCancelFullScreen || w.webkitExitFullscreen || w.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (u = !1);
        u && screenfull.enabled && (w = s_oSpriteLibrary.getSprite("but_fullscreen"),
            e = new CToggle(g, d, w, s_bFullscreen, s_oStage), e.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        n = new createjs.Text(TEXT_STATE0, "32px " + FONT_GAME, "#fff");
        n.textAlign = "center";
        n.textBaseline = "alphabetic";
        n.x = CANVAS_WIDTH / 2;
        n.y = CANVAS_HEIGHT / 2 - 280;
        s_oStage.addChild(n);
        A = new CAreYouSurePanel;
        A.addEventListener(ON_BUT_YES_DOWN, this._onExitYes, this);
        this.refreshButtonPos()
    };
    this.unload = function() {
        p.unload();
        k.unload();
        A.unload();
        !1 === DISABLE_SOUND_MOBILE && (q.unload(), q = null);
        u && screenfull.enabled &&
            e.unload();
        s_oStage.removeAllChildren();
        s_oInterface = null
    };
    this.refreshButtonPos = function() {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || q.setPosition(f - s_iOffsetX, s_iOffsetY + m);
        u && screenfull.enabled && e.setPosition(g - s_iOffsetX, d + s_iOffsetY);
        p.setPosition(h - s_iOffsetX, b + s_iOffsetY);
        k.setPosition(a - s_iOffsetX, c + s_iOffsetY)
    };
    this.changeTurn = function(a) {
        0 === a ? (z.visible = !1, v.visible = !0) : (z.visible = !0, v.visible = !1)
    };
    this.refreshTextHelp = function(a) {
        n.text = a
    };
    this._onExit = function() {
        A.show(TEXT_ARE_SURE)
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        u && screenfull.enabled && e.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? B.call(window.document) : u.call(window.document.documentElement);
        sizeHandler()
    };
    this._onExitYes = function() {
        s_oGame.onExit()
    };
    this._onRestart = function() {
        s_oGame.restart()
    };
    s_oInterface = this;
    this._init();
    return this
}
var s_oInterface = null;

function CHelpPanel() {
    var a, c, g, d = this;
    this._init = function() {
        g = new createjs.Container;
        g.visible = !1;
        s_oStage.addChild(g);
        c = new createjs.Shape;
        c.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        a = c.on("click", this._onStart, this);
        g.addChild(c);
        var d = s_oSpriteLibrary.getSprite("msg_box"),
            b = createBitmap(d);
        b.regX = d.width / 2;
        b.regY = d.height / 2;
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2;
        g.addChild(b);
        b = new createjs.Text(TEXT_HOWTO, "40px " + FONT_GAME, "#fff");
        b.textAlign = "center";
        b.textBaseline =
            "alphabetic";
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2 - 220;
        g.addChild(b);
        b = CANVAS_HEIGHT / 2 - 150;
        for (var f = 0; 4 > f; f++) {
            var m = new createjs.Text(TEXT_HELP[f], "24px " + FONT_GAME, "#fff");
            m.textAlign = "center";
            m.textBaseline = "alphabetic";
            m.x = CANVAS_WIDTH / 2;
            m.y = b;
            m.lineWidth = d.width - 80;
            g.addChild(m);
            b += m.getBounds().height + 30
        }
    };
    this.unload = function() {
        c.off("click", a)
    };
    this.show = function() {
        g.alpha = 0;
        g.visible = !0;
        createjs.Tween.get(g).to({
            alpha: 1
        }, 500)
    };
    this.hide = function() {
        createjs.Tween.get(g).to({
                alpha: 0
            }, 500,
            createjs.Ease.cubicOut).call(function() {
            g.visible = !1
        })
    };
    this._onStart = function() {
        d.hide();
        s_oGame.onExitFromHelp()
    };
    this._init()
}

function CCreditsPanel() {
    var a, c, g, d, h, b, f, m, p;
    this._init = function() {
        p = new createjs.Container;
        s_oStage.addChild(p);
        var k = new createjs.Shape;
        k.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        p.addChild(k);
        k = s_oSpriteLibrary.getSprite("msg_box2");
        g = createBitmap(k);
        g.regX = k.width / 2;
        g.regY = k.height / 2;
        g.x = CANVAS_WIDTH / 2;
        g.y = CANVAS_HEIGHT / 2;
        p.addChild(g);
        f = new createjs.Shape;
        f.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha = .01;
        f.on("click",
            this._onLogoButRelease);
        p.addChild(f);
        k = s_oSpriteLibrary.getSprite("but_exit");
        a = CANVAS_WIDTH / 2 + 240;
        c = CANVAS_HEIGHT / 2 - 130;
        h = new CGfxButton(a, c, k, p);
        h.addEventListener(ON_MOUSE_UP, this.unload, this);
        b = new createjs.Text(TEXT_CREDITS_DEVELOPED, "26px " + FONT_GAME, "#fff");
        b.textAlign = "center";
        b.textBaseline = "alphabetic";
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2 - 70;
        p.addChild(b);
        k = s_oSpriteLibrary.getSprite("logo_ctl");
        d = createBitmap(k);
        d.regX = k.width / 2;
        d.regY = k.height / 2;
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT /
            2;
        p.addChild(d);
        m = new createjs.Text("www.codethislab.com", "26px " + FONT_GAME, "#fff");
        m.textAlign = "center";
        m.textBaseline = "alphabetic";
        m.x = CANVAS_WIDTH / 2;
        m.y = CANVAS_HEIGHT / 2 + 80;
        p.addChild(m)
    };
    this.unload = function() {
        f.off("click", this._onLogoButRelease);
        h.unload();
        h = null;
        s_oStage.removeChild(p)
    };
    this._onLogoButRelease = function() {
        window.open("http://www.codethislab.com/index.php?&l=en", "_blank")
    };
    this._init()
}

function CAreYouSurePanel() {
    var a, c, g, d, h, b, f, m, p = this;
    this._init = function() {
        a = [];
        c = [];
        f = new createjs.Container;
        f.visible = !1;
        s_oStage.addChild(f);
        m = new createjs.Shape;
        m.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        m.alpha = .5;
        m.on("click", function() {});
        f.addChild(m);
        var k = s_oSpriteLibrary.getSprite("msg_box2");
        g = createBitmap(k);
        g.x = CANVAS_WIDTH / 2;
        g.y = CANVAS_HEIGHT / 2;
        g.regX = .5 * k.width;
        g.regY = .5 * k.height;
        f.addChild(g);
        d = new createjs.Text(TEXT_ARE_SURE, "54px " + FONT_GAME, "#ffffff");
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT / 2 - 90;
        d.textAlign = "center";
        d.textBaseline = "middle";
        d.lineWidth = k.width - 100;
        f.addChild(d);
        h = new CGfxButton(CANVAS_WIDTH / 2 + 150, .5 * CANVAS_HEIGHT + 70, s_oSpriteLibrary.getSprite("but_yes"), f);
        h.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        b = new CGfxButton(CANVAS_WIDTH / 2 - 150, .5 * CANVAS_HEIGHT + 70, s_oSpriteLibrary.getSprite("but_no"), f);
        b.addEventListener(ON_MOUSE_UP, this._onButNo, this)
    };
    this.addEventListener = function(b, d, f) {
        a[b] = d;
        c[b] = f
    };
    this.show = function(a) {
        d.text =
            a;
        f.alpha = 0;
        f.visible = !0;
        createjs.Tween.get(f).to({
            alpha: 1
        }, 300, createjs.Ease.quartOut).call(function() {
            s_oMain.stopUpdateNoBlock()
        })
    };
    this.hide = function() {
        s_oMain.startUpdateNoBlock();
        createjs.Tween.get(f).to({
            alpha: 0
        }, 500, createjs.Ease.quartOut).call(function() {
            f.visible = !1
        })
    };
    this.unload = function() {
        b.unload();
        h.unload()
    };
    this._onButYes = function() {
        p.hide();
        a[ON_BUT_YES_DOWN] && a[ON_BUT_YES_DOWN].call(c[ON_BUT_YES_DOWN])
    };
    this._onButNo = function() {
        p.hide()
    };
    this._init()
}

function CEndPanel() {
    var a, c, g, d, h, b, f, m, p, k, q, e, n = this;
    this._init = function() {
        c = [];
        g = [];
        q = new createjs.Container;
        q.visible = !1;
        s_oStage.addChild(q);
        h = new createjs.Shape;
        h.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        h.alpha = 0;
        d = h.on("click", function() {});
        q.addChild(h);
        e = new createjs.Container;
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT / 2;
        q.addChild(e);
        var a = s_oSpriteLibrary.getSprite("msg_box"),
            n = createBitmap(a);
        e.addChild(n);
        b = new createjs.Text("", "36px " + FONT_GAME, "#fff");
        b.x = a.width /
            2;
        b.y = a.height / 2 - 200;
        b.textAlign = "center";
        b.textBaseline = "alphabetic";
        b.lineWidth = a.width - 100;
        e.addChild(b);
        f = new createjs.Text("", "36px " + FONT_GAME, "#fff");
        f.x = a.width / 2;
        f.y = a.height / 2 - 100;
        f.textAlign = "center";
        f.textBaseline = "alphabetic";
        f.lineWidth = a.width - 100;
        e.addChild(f);
        m = new createjs.Text("", "36px " + FONT_GAME, "#fff");
        m.x = a.width / 2;
        m.y = a.height / 2;
        m.textAlign = "center";
        m.textBaseline = "alphabetic";
        m.lineWidth = a.width - 100;
        e.addChild(m);
        p = new CGfxButton(a.width / 2 - 200, a.height / 2 + 210, s_oSpriteLibrary.getSprite("but_home"),
            e);
        p.addEventListener(ON_MOUSE_UP, this._onHome, this);
        k = new CGfxButton(a.width / 2 + 200, a.height / 2 + 210, s_oSpriteLibrary.getSprite("but_restart"), e);
        k.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        e.regX = a.width / 2;
        e.regY = a.height / 2
    };
    this.unload = function() {
        p.unload();
        k.unload();
        h.off("click", d)
    };
    this.addEventListener = function(a, b, d) {
        c[a] = b;
        g[a] = d
    };
    this.show = function(a, c) {
        s_iMode === MODE_HUMANS || s_iMode === MODE_CPU && c === WHITE_PLAYER ? playSound("game_win", 1, !1) : playSound("game_over", 1, !1);
        b.text = TEXT_GAME_OVER;
        f.text = c === WHITE_PLAYER ? TEXT_WHITE_WINS : TEXT_BLACK_WINS;
        m.text = TEXT_SCORE + ": " + a;
        h.alpha = 0;
        q.alpha = 1;
        e.scaleX = e.scaleY = .1;
        e.alpha = 0;
        q.visible = !0;
        createjs.Tween.get(h).to({
            alpha: .7
        }, 500);
        createjs.Tween.get(e).wait(400).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 500, createjs.Ease.quartOut).call(function() {
            n.enableButtons()
        })
    };
    this.hide = function() {
        createjs.Tween.get(q).to({
            alpha: 0
        }, 500, createjs.Ease.quartOut).call(function() {
            q.visible = !1;
            c[a] && c[a].call(g[a])
        })
    };
    this.enableButtons = function() {
        p.enable();
        k.enable()
    };
    this.disableButtons = function() {
        p.disable();
        k.disable()
    };
    this._onHome = function() {
        n.disableButtons();
        a = ON_BACK_MENU;
        n.hide()
    };
    this._onRestart = function() {
        n.disableButtons();
        $(s_oMain).trigger("show_interlevel_ad");
        a = ON_RESTART;
        n.hide()
    };
    this._init()
}

function CToggle(a, c, g, d, h) {
    var b, f, m, p = [],
        k, q, e;
    this._init = function(a, c, d, g) {
        f = [];
        m = [];
        var A = new createjs.SpriteSheet({
            images: [d],
            frames: {
                width: d.width / 2,
                height: d.height,
                regX: d.width / 2 / 2,
                regY: d.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        b = g;
        e = createSprite(A, "state_" + b, d.width / 2 / 2, d.height / 2, d.width / 2, d.height);
        e.mouseEnabled = !0;
        e.x = a;
        e.y = c;
        e.stop();
        h.addChild(e);
        this._initListener()
    };
    this.unload = function() {
        e.off("mousedown", k);
        e.off("pressup", q);
        e.mouseEnabled = !1;
        h.removeChild(e)
    };
    this._initListener =
        function() {
            k = e.on("mousedown", this.buttonDown);
            q = e.on("pressup", this.buttonRelease)
        };
    this.addEventListener = function(a, b, c) {
        f[a] = b;
        m[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, d) {
        f[a] = b;
        m[a] = c;
        p = d
    };
    this.setActive = function(a) {
        b = a;
        e.gotoAndStop("state_" + b)
    };
    this.buttonRelease = function() {
        e.scaleX = 1;
        e.scaleY = 1;
        playSound("click", 1, !1);
        b = !b;
        e.gotoAndStop("state_" + b);
        f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(m[ON_MOUSE_UP], p)
    };
    this.buttonDown = function() {
        e.scaleX = .9;
        e.scaleY = .9;
        f[ON_MOUSE_DOWN] && f[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN],
            p)
    };
    this.setPosition = function(a, b) {
        e.x = a;
        e.y = b
    };
    this.setVisible = function(a) {
        e.visible = a
    };
    this.getButtonImage = function() {
        return e
    };
    this._init(a, c, g, d)
}

function CMenuMode() {
    var a, c, g, d, h = null,
        b = null,
        f, m, p, k, q;
    this._init = function() {
        f = new createjs.Container;
        s_oStage.addChild(f);
        var e = createBitmap(s_oSpriteLibrary.getSprite("bg_end_panel"));
        s_oStage.addChild(e);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) e = s_oSpriteLibrary.getSprite("audio_icon"), g = CANVAS_WIDTH - e.height / 2 - 10, d = e.height / 2 + 10, k = new CToggle(g, d, e, s_bAudioActive, s_oStage), k.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        e = window.document;
        var n = e.documentElement;
        h = n.requestFullscreen ||
            n.mozRequestFullScreen || n.webkitRequestFullScreen || n.msRequestFullscreen;
        b = e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (h = !1);
        h && screenfull.enabled && (e = s_oSpriteLibrary.getSprite("but_fullscreen"), a = e.width / 4 + 10, c = e.height / 2 + 10, q = new CToggle(a, c, e, s_bFullscreen, s_oStage), q.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        e = new createjs.Text(TEXT_CHOOSE_MODE, "40px " + FONT_GAME, "#fff");
        e.textAlign = "center";
        e.textBaseline = "alphabetic";
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT / 2 - 270;
        s_oStage.addChild(e);
        m = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 120, s_oSpriteLibrary.getSprite("vs_man_panel"), s_oStage);
        m.addEventListener(ON_MOUSE_UP, this._onHuman, this);
        p = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 120, s_oSpriteLibrary.getSprite("vs_pc_panel"), s_oStage);
        p.addEventListener(ON_MOUSE_UP, this._onCpu, this);
        this.refreshButtonPos()
    };
    this.unload = function() {
        p.unload();
        m.unload();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) k.unload(), k =
            null;
        h && screenfull.enabled && q.unload();
        s_oStage.removeAllChildren();
        s_oModeMenu = null
    };
    this.refreshButtonPos = function() {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || k.setPosition(g - s_iOffsetX, s_iOffsetY + d);
        h && screenfull.enabled && q.setPosition(a + s_iOffsetX, c + s_iOffsetY)
    };
    this._onHuman = function() {
        s_oModeMenu.unload();
        s_iMode = MODE_HUMANS;
        s_oMain.gotoGame()
    };
    this._onCpu = function() {
        s_oModeMenu.unload();
        s_iMode = MODE_CPU;
        s_oMain.gotoGame()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        h && screenfull.enabled && q.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? b.call(window.document) : h.call(window.document.documentElement);
        sizeHandler()
    };
    s_oModeMenu = this;
    this._init()
}
var s_oModeMenu = null;

function CBoard(a) {
    var c, g, d, h, b, f, m, p, k, q, e, n, u, B = this;
    this._init = function() {
        this.reset();
        s_oBoardSettings = new CBoardSettings;
        u = new createjs.Container;
        u.x = CANVAS_WIDTH / 2;
        u.y = CANVAS_HEIGHT / 2;
        a.addChild(u);
        var b = s_oSpriteLibrary.getSprite("board"),
            d = createBitmap(b);
        u.addChild(d);
        c = b.width;
        g = b.height;
        this._initPoints();
        this._initMills();
        b = s_oSpriteLibrary.getSprite("chipbox");
        e = createBitmap(b);
        e.x = 0;
        e.y = g / 2;
        e.regX = b.width / 2;
        e.regY = b.height / 2;
        u.addChild(e);
        n = createBitmap(b);
        n.x = c;
        n.y = g / 2;
        n.regX = b.width /
            2;
        n.regY = b.height / 2;
        u.addChild(n);
        this._initPieces();
        u.regX = c / 2;
        u.regY = g / 2
    };
    this.reset = function() {
        k = [];
        q = null;
        h = d = 0
    };
    this.restart = function() {
        for (var a = 0; a < f.length; a++) f[a].unload();
        for (a = 0; a < m.length; a++) m[a].unload();
        for (a = 0; a < p.length; a++) p[a].hide();
        for (a = 0; a < b.length; a++) b[a].unload();
        this.reset();
        this._initPoints();
        this._initPieces()
    };
    this._initPoints = function() {
        var a = s_oBoardSettings.getAllPointPos();
        b = [];
        for (var c = 0; c < a.length; c++) b[c] = new CBoardPoint(a[c].x, a[c].y, c, u), b[c].addEventListener(ON_SELECT_POINT,
            this._onSelectPoint, this)
    };
    this._onSelectPoint = function(a) {
        this.unlightAllPoints();
        switch (s_oGame.getState()) {
            case GAME_STATE_PLACING:
                this.placePiece(s_oGame.getTurn(), a);
                break;
            case GAME_STATE_MOVEMENT:
                this.moveSelectedPiece(a)
        }
    };
    this._initMills = function() {
        var a = s_oBoardSettings.getMillList(),
            b = s_oBoardSettings.getMillInfos();
        p = [];
        for (var c = 0; c < a.length; c++) {
            var d = new CMill(b[c], a[c], u);
            p.push(d)
        }
    };
    this._initPieces = function() {
        m = [];
        f = [];
        for (var a = 257, b = 0; b < NUM_PIECES; b++) {
            var c = new CPiece(e.x, a, WHITE_PLAYER,
                u);
            c.setScale(PIECE_SCALE_IN_BOARD);
            m.push(c);
            c = new CPiece(n.x, a, BLACK_PLAYER, u);
            c.setScale(PIECE_SCALE_IN_BOARD);
            f.push(c);
            a += PIECE_START_Y_OFFSET * PIECE_SCALE_IN_BOARD
        }
    };
    this.startGame = function() {
        for (var a = 0; a < b.length; a++) b[a].highlight()
    };
    this.placePiece = function(a, c) {
        var e = s_oBoardSettings.getPointPos(c);
        a === WHITE_PLAYER ? (m[d].move(e, "anim", c, null), b[c].setState(m[d]), d++) : (f[h].move(e, "anim", c, null), b[c].setState(f[h]), h++);
        if (this._checkMills()) this.initOpponentPieceRemoval(a);
        else if (e = h ===
            f.length ? !0 : !1, s_oGame.changeTurn(e), !e)
            if (s_iMode === MODE_CPU && s_oGame.getTurn() === BLACK_PLAYER) {
                var g = s_oAi.evaluateInPlacingState(b, s_oGame.getTurn(), h);
                setTimeout(function() {
                    B.placePiece(s_oGame.getTurn(), g)
                }, AI_TIME)
            } else this.highlightAllPoints()
    };
    this.moveSelectedPiece = function(a) {
        if (null !== q) {
            this.unlightAllPoints();
            this.disableAllPieces();
            var c = q.getPointIndex();
            b[c].setState(null);
            q.move(s_oBoardSettings.getPointPos(a), "end", a, this._onEndMove, this);
            b[a].setState(q)
        }
    };
    this.highlightAllPoints =
        function() {
            for (var a = 0; a < b.length; a++) - 1 === b[a].getState() && b[a].highlight()
        };
    this.unlightAllPoints = function() {
        for (var a = 0; a < b.length; a++) b[a].disable()
    };
    this.prepareForMovState = function(a) {
        d = h = 0;
        this.unlightAllPoints();
        this.setPieceClickablePerTurn(a)
    };
    this.setPieceClickablePerTurn = function(a) {
        if (!1 === this._checkIfAnyAvailableMove(a)) this.gameOver(a === WHITE_PLAYER ? BLACK_PLAYER : WHITE_PLAYER);
        else if (s_iMode === MODE_CPU && a === BLACK_PLAYER) {
            var c = s_oAi.evaluateInMovState(b, a, f);
            q = c.piece;
            setTimeout(function() {
                    B.moveSelectedPiece(c.end)
                },
                AI_TIME)
        } else if (a === WHITE_PLAYER) {
            for (a = 0; a < m.length; a++) m[a].initListener(), m[a].addEventListener(ON_SELECT_PIECE, this._onSelectPiece, this);
            for (a = 0; a < f.length; a++) f[a].removeListener()
        } else {
            for (a = 0; a < f.length; a++) f[a].initListener(), f[a].addEventListener(ON_SELECT_PIECE, this._onSelectPiece, this);
            for (a = 0; a < m.length; a++) m[a].removeListener()
        }
    };
    this._checkIfAnyAvailableMove = function(a) {
        if (a === WHITE_PLAYER && 3 === m.length || a === BLACK_PLAYER && 3 === f.length) return !0;
        for (var c = 0; c < b.length; c++)
            if (b[c].getState() ===
                a) {
                for (var d = s_oBoardSettings.getAdjacentsPerPoint(c), e = 0, g = 0; g < d.length; g++) - 1 === b[d[g]].getState() && e++;
                if (0 < e) return !0
            }
        return !1
    };
    this.resetMills = function() {
        for (var a = 0; a < p.length; a++) {
            p[a].hide();
            for (var c = p[a].getPointList(), d = 0; d < c.length; d++) b[c[d]].setMill(-1)
        }
    };
    this._checkMills = function() {
        for (var a = [], c = 0; c < k.length; c++) a[c] = k[c];
        k = [];
        this.resetMills();
        for (var d = 0; d < p.length; d++)
            if (this._checkIfMillIsFilled(d)) {
                p[d].show();
                k.push(d);
                var f = p[d].getPointList();
                for (c = 0; c < f.length; c++) b[f[c]].setMill(d)
            }
        d = !1;
        if (k.length > a.length) d = !0;
        else if (k.length === a.length)
            for (c = 0; c < k.length; c++) k[c] !== a[c] && (d = !0);
        return d
    };
    this._checkIfMillIsFilled = function(a) {
        a = p[a].getPointList();
        for (var c = b[a[0]].getState(), d = 0; d < a.length; d++)
            if (-1 === b[a[d]].getState() || b[a[d]].getState() !== c) return !1;
        return !0
    };
    this.initOpponentPieceRemoval = function(a) {
        playSound("bonus", 1, !1);
        s_oGame.refreshTextHelp(TEXT_STATE1);
        for (var c = 0; c < b.length; c++) b[c].disable();
        if (s_iMode === MODE_CPU && a === BLACK_PLAYER) {
            var d = s_oAi.chooseOpponentPieceToRemove(b,
                this.findAllRemoveablePieces(a), a);
            setTimeout(function() {
                B._onRemovePiece(b[d].getPiece(), d)
            }, AI_TIME)
        } else {
            for (var f = c = 0; f < b.length; f++)
                if (-1 !== b[f].getState() && b[f].getState() !== a && !1 === b[f].isInMill()) {
                    var e = b[f].getPiece();
                    e.highlight();
                    e.initListener();
                    e.addEventListener(ON_SELECT_PIECE, this._onRemovePiece, this);
                    c++
                }
            if (0 === c)
                for (f = 0; f < b.length; f++) - 1 !== b[f].getState() && b[f].getState() !== a && (e = b[f].getPiece(), e.highlight(), e.initListener(), e.addEventListener(ON_SELECT_PIECE, this._onRemovePiece,
                    this))
        }
    };
    this._onRemovePiece = function(a, c) {
        b[c].setState(null);
        b[c].setMill(-1);
        playSound("removepiece", 1, !1);
        a.move(WASTE_PIECE_POS, "loop_anim", c, a.unload, a);
        if (s_oGame.getTurn() === WHITE_PLAYER)
            for (var e = 0; e < f.length; e++) {
                if (f[e] === a) {
                    f.splice(e, 1);
                    h--;
                    break
                }
            } else
                for (e = 0; e < m.length; e++)
                    if (m[e] === a) {
                        m.splice(e, 1);
                        d--;
                        break
                    }
        this.disableAllPieces();
        e = h === f.length ? !0 : !1;
        s_oGame.changeTurn(e);
        if (!e && s_oGame.getState() === GAME_STATE_PLACING) {
            if (s_iMode === MODE_CPU && s_oGame.getTurn() === BLACK_PLAYER) {
                var g =
                    s_oAi.evaluateInPlacingState(b, s_oGame.getTurn(), h);
                setTimeout(function() {
                    B.placePiece(s_oGame.getTurn(), g)
                }, AI_TIME)
            } else this.highlightAllPoints();
            s_oGame.refreshTextHelp(TEXT_STATE0)
        } else if (s_oGame.getState() === GAME_STATE_MOVEMENT && (s_oGame.refreshTextHelp(TEXT_STATE2), this.setPieceClickablePerTurn(s_oGame.getTurn()), 2 === f.length || 2 === m.length)) {
            this.gameOver(f.length > m.length ? BLACK_PLAYER : WHITE_PLAYER);
            return
        }
        this._checkMills()
    };
    this.findAllRemoveablePieces = function(a) {
        for (var c = [], d = 0, e = 0; e <
            b.length; e++) - 1 !== b[e].getState() && b[e].getState() !== a && !1 === b[e].isInMill() && (c.push(e), d++);
        if (0 === d)
            for (c = [], e = 0; e < b.length; e++) - 1 !== b[e].getState() && b[e].getState() !== a && c.push(e);
        return c
    };
    this.disableAllPieces = function() {
        for (var a = 0; a < f.length; a++) f[a].unlight(), f[a].removeListener();
        for (a = 0; a < m.length; a++) m[a].unlight(), m[a].removeListener()
    };
    this._onSelectPiece = function(a, b) {
        -1 !== b && (null !== q && q.unlight(), q = a, this._highlightReachablePoints(b, s_oGame.getTurn() === WHITE_PLAYER ? m : f) ? a.highlight() :
            a.highlightRed())
    };
    this._highlightReachablePoints = function(a, c) {
        this.unlightAllPoints();
        var d = 0;
        if (3 === c.length)
            for (var e = 0; e < b.length; e++) - 1 === b[e].getState() && (b[e].highlight(), d++);
        else {
            var f = s_oBoardSettings.getAdjacentsPerPoint(a);
            for (e = 0; e < f.length; e++) - 1 === b[f[e]].getState() && (b[f[e]].highlight(), d++)
        }
        return 0 === d ? !1 : !0
    };
    this.gameOver = function(a) {
        this.disableAllPieces();
        s_oGame.gameOver(a, m, f)
    };
    this._onEndMove = function() {
        q = null;
        this._checkMills() ? this.initOpponentPieceRemoval(s_oGame.getTurn()) :
            (s_oGame.changeTurn(!1), this.setPieceClickablePerTurn(s_oGame.getTurn()))
    };
    this.printBoardState = function() {
        for (var a = 0; a < b.length; a++) trace("_aPoints[" + a + "] " + b[a].getState())
    };
    this._init()
}

function CBoardPoint(a, c, g, d) {
    var h, b, f, m, p, k, q, e, n = this;
    this._init = function(a, b) {
        this.reset();
        f = [];
        m = [];
        e = new createjs.Container;
        e.visible = !1;
        e.x = a;
        e.y = b;
        p = e.on("click", this._onClickPoint, this);
        d.addChild(e);
        q = createBitmap(s_oSpriteLibrary.getSprite("highlight"));
        e.addChild(q);
        e.regX = e.getBounds().width / 2;
        e.regY = e.getBounds().height / 2
    };
    this.unload = function() {
        e.off("click", p);
        createjs.Tween.removeTweens(e);
        d.removeChild(e)
    };
    this.addEventListener = function(a, b, c) {
        f[a] = b;
        m[a] = c
    };
    this.reset = function() {
        b = -1;
        k = null;
        h = !1
    };
    this.highlight = function() {
        h = !0;
        e.scaleX = e.scaleY = .1;
        e.visible = !0;
        e.alpha = 0;
        createjs.Tween.get(e, {
            loop: !0
        }).to({
            alpha: 1,
            scaleX: .3,
            scaleY: .3
        }, 1E3, createjs.Ease.quartOut).to({
            alpha: 0,
            scaleX: .1,
            scaleY: .1
        }, 1E3, createjs.Ease.quartOut)
    };
    this.disable = function() {
        h = !1;
        createjs.Tween.removeTweens(e);
        e.visible = !1;
        e.alpha = 0
    };
    this.enable = function() {
        h = !0
    };
    this._onClickPoint = function() {
        h && (n.disable(), f[ON_SELECT_POINT] && f[ON_SELECT_POINT].call(m[ON_SELECT_POINT], g))
    };
    this.setState = function(a) {
        k =
            a
    };
    this.setMill = function(a) {
        b = a
    };
    this.getMill = function() {
        return b
    };
    this.isInMill = function() {
        return -1 === b ? !1 : !0
    };
    this.getState = function() {
        return null === k ? -1 : k.getType()
    };
    this.getPiece = function() {
        return k
    };
    this._init(a, c)
}

function CPiece(a, c, g, d) {
    var h, b, f, m, p, k, q, e;
    this._init = function(a, c, g) {
        b = [];
        f = [];
        e = new createjs.Container;
        e.x = a;
        e.y = c;
        d.addChild(e);
        a = s_oSpriteLibrary.getSprite("highlight");
        k = createBitmap(a);
        k.visible = !1;
        k.regX = a.width / 2;
        k.regY = a.height / 2;
        e.addChild(k);
        a = s_oSpriteLibrary.getSprite("removable");
        q = createBitmap(a);
        q.visible = !1;
        q.regX = a.width / 2;
        q.regY = a.height / 2;
        e.addChild(q);
        g = {
            images: [s_oSpriteLibrary.getSprite("piece" + g)],
            framerate: 15,
            frames: {
                width: PIECE_WIDTH,
                height: PIECE_HEIGHT,
                regX: PIECE_WIDTH /
                    2,
                regY: PIECE_HEIGHT / 2
            },
            animations: {
                start: 0,
                anim: [0, 4, "end"],
                end: 4,
                loop_anim: [0, 4]
            }
        };
        g = new createjs.SpriteSheet(g);
        p = createSprite(g, "start", PIECE_WIDTH / 2, PIECE_HEIGHT / 2, PIECE_WIDTH, PIECE_HEIGHT);
        p.rotation = 90;
        e.addChild(p)
    };
    this.unload = function() {
        h = -1;
        d.removeChild(e)
    };
    this.addEventListener = function(a, c, d) {
        b[a] = c;
        f[a] = d
    };
    this.setScale = function(a) {
        e.scaleX = e.scaleY = a
    };
    this.move = function(a, b, c, d, f) {
        h = c;
        p.gotoAndPlay(b);
        p.visible = !0;
        k.visible = !1;
        createjs.Tween.get(e).to({
            x: a.x,
            y: a.y
        }, 1E3, createjs.Ease.cubicOut).call(function() {
            playSound("piece",
                1, !1);
            null !== d && d.call(f, this)
        })
    };
    this.initListener = function() {
        m = e.on("click", this._onSelect, this, !1, {
            index: h
        })
    };
    this.removeListener = function() {
        e.off("click", m)
    };
    this.highlight = function() {
        k.visible = !0;
        q.visible = !1
    };
    this.highlightRed = function() {
        playSound("locked", 1, !1);
        q.visible = !0;
        k.visible = !1
    };
    this.unlight = function() {
        k.visible = !1;
        q.visible = !1
    };
    this._onSelect = function(a, c) {
        b[ON_SELECT_PIECE] && b[ON_SELECT_PIECE].call(f[ON_SELECT_PIECE], this, c.index)
    };
    this.getType = function() {
        return g
    };
    this.getPointIndex =
        function() {
            return h
        };
    this._init(a, c, g)
}

function CMill(a, c, g) {
    var d;
    this._init = function(a) {
        d = createBitmap(s_oSpriteLibrary.getSprite("mill" + a.type));
        d.visible = !1;
        d.x = a.x;
        d.y = a.y;
        d.rotation = a.rot;
        g.addChild(d)
    };
    this.show = function() {
        d.visible = !0
    };
    this.hide = function() {
        d.visible = !1
    };
    this.getPointList = function() {
        return c
    };
    this._init(a)
}

function CBoardSettings() {
    var a, c, g, d, h;
    this._init = function() {
        a = [{
            x: 93,
            y: 94
        }, {
            x: 298,
            y: 94
        }, {
            x: 503,
            y: 94
        }, {
            x: 161,
            y: 162
        }, {
            x: 298,
            y: 162
        }, {
            x: 435,
            y: 162
        }, {
            x: 230,
            y: 231
        }, {
            x: 298,
            y: 231
        }, {
            x: 366,
            y: 231
        }, {
            x: 93,
            y: 299
        }, {
            x: 161,
            y: 299
        }, {
            x: 230,
            y: 299
        }, {
            x: 366,
            y: 299
        }, {
            x: 435,
            y: 299
        }, {
            x: 503,
            y: 299
        }, {
            x: 230,
            y: 367
        }, {
            x: 298,
            y: 367
        }, {
            x: 366,
            y: 367
        }, {
            x: 161,
            y: 435
        }, {
            x: 298,
            y: 435
        }, {
            x: 435,
            y: 435
        }, {
            x: 93,
            y: 503
        }, {
            x: 298,
            y: 503
        }, {
            x: 503,
            y: 503
        }];
        c = [
            [0, 1, 2],
            [0, 9, 21],
            [1, 4, 7],
            [2, 14, 23],
            [3, 4, 5],
            [3, 10, 18],
            [5, 13, 20],
            [6, 7, 8],
            [6, 11, 15],
            [8, 12, 17],
            [9, 10, 11],
            [12,
                13, 14
            ],
            [15, 16, 17],
            [16, 19, 22],
            [18, 19, 20],
            [21, 22, 23]
        ];
        g = [{
            x: 82,
            y: 82,
            type: 0,
            rot: 0
        }, {
            x: 105,
            y: 82,
            type: 0,
            rot: 90
        }, {
            x: 310,
            y: 82,
            type: 2,
            rot: 90
        }, {
            x: 514,
            y: 82,
            type: 0,
            rot: 90
        }, {
            x: 146,
            y: 151,
            type: 1,
            rot: 0
        }, {
            x: 173,
            y: 150,
            type: 1,
            rot: 90
        }, {
            x: 447,
            y: 150,
            type: 1,
            rot: 90
        }, {
            x: 221,
            y: 220,
            type: 2,
            rot: 0
        }, {
            x: 241,
            y: 220,
            type: 2,
            rot: 90
        }, {
            x: 378,
            y: 220,
            type: 2,
            rot: 90
        }, {
            x: 82,
            y: 287,
            type: 2,
            rot: 0
        }, {
            x: 354,
            y: 287,
            type: 2,
            rot: 0
        }, {
            x: 221,
            y: 355,
            type: 2,
            rot: 0
        }, {
            x: 309,
            y: 355,
            type: 2,
            rot: 90
        }, {
            x: 146,
            y: 425,
            type: 1,
            rot: 0
        }, {
            x: 82,
            y: 492,
            type: 0,
            rot: 0
        }];
        d = [
            [1, 9],
            [0,
                2, 4
            ],
            [1, 14],
            [4, 10],
            [1, 3, 5, 7],
            [4, 13],
            [7, 11],
            [4, 6, 8],
            [7, 12],
            [0, 10, 21],
            [3, 9, 11, 18],
            [6, 10, 15],
            [8, 13, 17],
            [5, 12, 14, 20],
            [2, 13, 23],
            [11, 16],
            [15, 17, 19],
            [12, 16],
            [10, 19],
            [16, 18, 20, 22],
            [13, 19],
            [9, 22],
            [19, 21, 23],
            [14, 22]
        ];
        h = [
            [0, 1],
            [0, 2],
            [0, 3],
            [4, 5],
            [2, 4],
            [4, 6],
            [7, 8],
            [2, 7],
            [7, 9],
            [1, 10],
            [5, 10],
            [8, 10],
            [9, 11],
            [6, 11],
            [3, 11],
            [8, 12],
            [12, 13],
            [9, 12],
            [5, 14],
            [13, 14],
            [6, 14],
            [1, 15],
            [13, 15],
            [3, 15]
        ]
    };
    this.getAllPointPos = function() {
        return a
    };
    this.getPointPos = function(b) {
        return a[b]
    };
    this.getMillList = function() {
        return c
    };
    this.getMillListPerIndex =
        function(a) {
            return c[a]
        };
    this.getMillInfos = function() {
        return g
    };
    this.getAdjacentsPerPoint = function(a) {
        return d[a]
    };
    this.getPossibleMillsPerPoint = function(a) {
        return h[a]
    };
    this._init()
}
var s_oBoardSettings;

function CAiController() {
    var a;
    this.evaluateInPlacingState = function(c, g, d) {
        if (0 === d) return g = [], -1 === c[0].getState() && g.push(0), -1 === c[2].getState() && g.push(2), -1 === c[21].getState() && g.push(21), -1 === c[23].getState() && g.push(23), g[Math.floor(Math.random() * g.length)];
        this.initEvaluatorPoint();
        for (d = 0; d < c.length; d++)
            if (-1 === c[d].getState())
                for (var h = s_oBoardSettings.getPossibleMillsPerPoint(d), b = 0; b < h.length; b++) {
                    for (var f = s_oBoardSettings.getMillListPerIndex(h[b]), m = [], p = 0; p < f.length; p++) m[p] = c[f[p]].getState();
                    a[d] += this._evaluateValuesInMill(m, g)
                }
        return this.findBestPointAfterEvaluation()
    };
    this.evaluateInMovState = function(c, g, d) {
        this.initEvaluatorPoint();
        for (var h = [], b = 0; b < a.length; b++) h[b] = {
            piece: null,
            value: 0
        };
        for (b = 0; b < c.length; b++)
            if (c[b].isInMill() && c[b].getState() === g) {
                var f = c[b].getMill();
                f = s_oBoardSettings.getMillListPerIndex(f);
                for (var m = 0; m < f.length; m++) {
                    for (var p = s_oBoardSettings.getAdjacentsPerPoint(f[m]), k = null, q = 0; q < p.length; q++)
                        if (-1 === c[p[q]].getState() && !1 === this._checkIfPointIsReachableBy(f[m],
                                null, c, s_oGame.getOpponentTurn())) {
                            k = p[q];
                            break
                        }
                    if (null !== k) return {
                        piece: c[f[m]].getPiece(),
                        end: k
                    }
                }
            }
        if (3 === d.length) {
            h = [];
            q = [];
            p = s_oBoardSettings.getMillList();
            for (b = 0; b < p.length; b++) {
                f = p[b];
                var e = 0,
                    n = 0;
                for (m = 0; m < f.length; m++) c[f[m]].getState() === g ? e++ : -1 !== c[f[m]].getState() && n++;
                if (0 === n) {
                    if (2 === e) {
                        for (q = 0; q < d.length; q++)
                            if (-1 === f.indexOf(d[q].getPointIndex())) {
                                var u = c[d[q].getPointIndex()].getPiece();
                                break
                            }
                        for (q = 0; q < f.length; q++)
                            if (-1 === c[f[q]].getState()) {
                                k = f[q];
                                break
                            }
                        return {
                            piece: u,
                            end: k
                        }
                    }
                    1 ===
                        e ? h.push(b) : q.push(1)
                }
            }
            if (0 < h.length) {
                f = s_oBoardSettings.getMillListPerIndex(h[0]);
                for (q = 0; q < d.length; q++)
                    if (-1 === f.indexOf(d[q].getPointIndex())) {
                        u = c[d[q].getPointIndex()].getPiece();
                        break
                    }
                for (q = 0; q < f.length; q++)
                    if (-1 === c[f[q]].getState()) {
                        k = f[q];
                        break
                    }
                return {
                    piece: u,
                    end: k
                }
            }
            f = s_oBoardSettings.getMillListPerIndex(q[0]);
            return {
                piece: c[d[Math.floor(Math.random() * d.length)].getPointIndex()].getPiece(),
                end: f[Math.floor(Math.random() * f.length)]
            }
        }
        for (b = 0; b < c.length; b++)
            if (u = c[b].getPiece(), null !== u && u.getType() ===
                g)
                for (d = s_oBoardSettings.getAdjacentsPerPoint(b), m = 0; m < d.length; m++)
                    if (-1 === c[d[m]].getState())
                        for (k = s_oBoardSettings.getPossibleMillsPerPoint(d[m]), q = 0; q < k.length; q++)
                            if (f = k[q], f = s_oBoardSettings.getMillListPerIndex(f), -1 === f.indexOf(b)) {
                                p = [];
                                for (e = 0; e < f.length; e++) p[e] = c[f[e]].getState();
                                f = this._evaluateValuesInMill(p, g);
                                h[d[m]].value < f && (h[d[m]] = {
                                    piece: u,
                                    value: f
                                });
                                a[d[m]] += f
                            }
        k = this.findBestPointAfterEvaluation();
        for (u = h[k].piece; 6 > a[k] && (!0 === this._evaluatePointInBoard(u.getPointIndex(), c) || !0 ===
                this._checkIfPointIsReachableBy(u.getPointIndex(), k, c, s_oGame.getOpponentTurn()));) {
            a[k] = 0;
            if (this._checkIfEvaluatorIsEmpty()) break;
            k = this.findBestPointAfterEvaluation();
            u = h[k].piece
        }
        return {
            piece: u,
            end: k
        }
    };
    this._evaluatePointInBoard = function(a, g) {
        for (var c = s_oBoardSettings.getPossibleMillsPerPoint(a), h = 0; h < c.length; h++) {
            for (var b = s_oBoardSettings.getMillListPerIndex(c[h]), f = 0, m = 0; m < b.length; m++) g[b[m]].getState() === s_oGame.getOpponentTurn() && f++;
            if (2 <= f) return !0
        }
        return !1
    };
    this.initEvaluatorPoint =
        function() {
            a = [];
            for (var c = 0; c < NUM_BOARD_POINTS; c++) a[c] = 0
        };
    this._evaluateValuesInMill = function(a, g) {
        for (var c = 0, h = 0, b = 0; b < a.length; b++) a[b] === g ? c++ : -1 !== a[b] && h++;
        return 2 === c && 1 === h || 1 === c && 2 === h ? 0 : 2 <= c ? 7 : 2 <= h ? 6 : 1 === c && 1 === h ? 1 : 1 === c ? 4 : 1 === h ? 3 : 2
    };
    this.chooseOpponentPieceToRemove = function(c, g, d) {
        this.initEvaluatorPoint();
        for (var h = 0; h < g.length; h++)
            for (var b = s_oBoardSettings.getPossibleMillsPerPoint(g[h]), f = 0; f < b.length; f++) {
                for (var m = s_oBoardSettings.getMillListPerIndex(b[f]), p = [], k = 0; k < m.length; k++) p[k] =
                    c[m[k]].getState();
                a[g[h]] += this._evaluateValuesInMill(p, d)
            }
        return this.findBestPointAfterEvaluation()
    };
    this.findBestPointAfterEvaluation = function() {
        for (var c = a[0], g = 0, d = 0, h = 0, b = 0; b < a.length; b++) a[b] < c ? (c = a[b], g = b) : a[b] > d && (d = a[b], h = b);
        return g === h ? Math.floor(Math.random() * a.length) : h
    };
    this._checkIfPointIsReachableBy = function(a, g, d, h) {
        var b = s_oBoardSettings.getPossibleMillsPerPoint(a);
        a = s_oBoardSettings.getAdjacentsPerPoint(a);
        for (var c = 0; c < b.length; c++) {
            var m = s_oBoardSettings.getMillListPerIndex(b[c]);
            if (null !== g && -1 === m.indexOf(g)) {
                for (var p = 0, k = 0; k < m.length; k++) d[m[k]].getState() === h && p++;
                if (2 === p)
                    for (p = 0; p < a.length; p++)
                        if (d[a[p]].getState() === h && -1 === m.indexOf(a[p])) return !0
            }
        }
        return !1
    };
    this._checkIfEvaluatorIsEmpty = function() {
        for (var c = 0; c < a.length; c++)
            if (0 < a[c]) return !1;
        return !0
    }
}
var s_oAi;

function extractHostname(a) {
    a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
    a = a.split(":")[0];
    return a = a.split("?")[0]
}

function extractRootDomain(a) {
    a = extractHostname(a);
    var c = a.split("."),
        g = c.length;
    2 < g && (a = c[g - 2] + "." + c[g - 1]);
    return a
}
var getClosestTop = function() {
        var a = window,
            c = !1;
        try {
            for (; a.parent.document !== a.document;)
                if (a.parent.document) a = a.parent;
                else {
                    c = !0;
                    break
                }
        } catch (g) {
            c = !0
        }
        return {
            topFrame: a,
            err: c
        }
    },
    getBestPageUrl = function(a) {
        var c = a.topFrame,
            g = "";
        if (a.err) try {
            try {
                g = window.top.location.href
            } catch (h) {
                var d = window.location.ancestorOrigins;
                g = d[d.length - 1]
            }
        } catch (h) {
            g = c.document.referrer
        } else g = c.location.href;
        return g
    },
    TOPFRAMEOBJ = getClosestTop(),
    PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

function seekAndDestroy() {
    return false;
};