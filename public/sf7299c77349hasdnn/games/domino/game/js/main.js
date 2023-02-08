/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
(function() {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        e = "undefined" !== typeof module && module.exports,
        b = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        c = function() {
            for (var b, c = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
                    "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                ], h = 0, f = c.length, e = {}; h < f; h++)
                if ((b = c[h]) && b[1] in a) {
                    for (h = 0; h < b.length; h++) e[c[0][h]] =
                        b[h];
                    return e
                }
            return !1
        }(),
        f = {
            change: c.fullscreenchange,
            error: c.fullscreenerror
        },
        l = {
            request: function(d) {
                var g = c.requestFullscreen;
                d = d || a.documentElement;
                if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) d[g]();
                else d[g](b && Element.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                a[c.exitFullscreen]()
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
                var d = f[b];
                d && a.addEventListener(d, c, !1)
            },
            off: function(b,
                c) {
                var d = f[b];
                d && a.removeEventListener(d, c, !1)
            },
            raw: c
        };
    c ? (Object.defineProperties(l, {
        isFullscreen: {
            get: function() {
                return !!a[c.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return a[c.fullscreenElement]
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return !!a[c.fullscreenEnabled]
            }
        }
    }), e ? module.exports = l : window.screenfull = l) : e ? module.exports = !1 : window.screenfull = !1
})();
(function() {
    function a(a) {
        a = String(a);
        return a.charAt(0).toUpperCase() + a.slice(1)
    }

    function e(a, b) {
        var d = -1,
            v = a ? a.length : 0;
        if ("number" == typeof v && -1 < v && v <= n)
            for (; ++d < v;) b(a[d], d, a);
        else c(a, b)
    }

    function b(b) {
        b = String(b).replace(/^ +| +$/g, "");
        return /^(?:webOS|i(?:OS|P))/.test(b) ? b : a(b)
    }

    function c(a, b) {
        for (var d in a) q.call(a, d) && b(a[d], d, a)
    }

    function f(b) {
        return null == b ? a(b) : x.call(b).slice(8, -1)
    }

    function l(a, b) {
        var d = null != a ? typeof a[b] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(d) &&
            ("object" == d ? !!a[b] : !0)
    }

    function d(a) {
        return String(a).replace(/([ -])(?!$)/g, "$1?")
    }

    function g(a, b) {
        var d = null;
        e(a, function(c, h) {
            d = b(d, c, h, a)
        });
        return d
    }

    function h(a) {
        function e(c) {
            return g(c, function(c, h) {
                var f = h.pattern || d(h);
                !c && (c = RegExp("\\b" + f + " *\\d+[.\\w_]*", "i").exec(a) || RegExp("\\b" + f + " *\\w+-[\\w]*", "i").exec(a) || RegExp("\\b" + f + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(a)) && ((c = String(h.label && !RegExp(f, "i").test(h.label) ? h.label : c).split("/"))[1] && !/[\d.]+/.test(c[0]) && (c[0] +=
                    " " + c[1]), h = h.label || h, c = b(c[0].replace(RegExp(f, "i"), h).replace(RegExp("; *(?:" + h + "[_-])?", "i"), " ").replace(RegExp("(" + h + ")[-_.]?(\\w)", "i"), "$1 $2")));
                return c
            })
        }

        function q(b) {
            return g(b, function(b, d) {
                return b || (RegExp(d + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(a) || 0)[1] || null
            })
        }
        var k = u,
            v = a && "object" == typeof a && "String" != f(a);
        v && (k = a, a = null);
        var r = k.navigator || {},
            n = r.userAgent || "";
        a || (a = n);
        var z = v ? !!r.likeChrome : /\bChrome\b/.test(a) && !/internal|\n/i.test(x.toString()),
            t = v ? "Object" : "ScriptBridgingProxyObject",
            T = v ? "Object" : "Environment",
            P = v && k.java ? "JavaPackage" : f(k.java),
            ca = v ? "Object" : "RuntimeObject";
        T = (P = /\bJava/.test(P) && k.java) && f(k.environment) == T;
        var aa = P ? "a" : "\u03b1",
            X = P ? "b" : "\u03b2",
            L = k.document || {},
            C = k.operamini || k.opera,
            E = p.test(E = v && C ? C["[[Class]]"] : f(C)) ? E : C = null,
            m, O = a;
        v = [];
        var Q = null,
            M = a == n;
        n = M && C && "function" == typeof C.version && C.version();
        var B = function(b) {
                return g(b, function(b, c) {
                    return b || RegExp("\\b" + (c.pattern || d(c)) + "\\b", "i").exec(a) && (c.label ||
                        c)
                })
            }([{
                label: "EdgeHTML",
                pattern: "Edge"
            }, "Trident", {
                label: "WebKit",
                pattern: "AppleWebKit"
            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
            w = function(b) {
                return g(b, function(b, c) {
                    return b || RegExp("\\b" + (c.pattern || d(c)) + "\\b", "i").exec(a) && (c.label || c)
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
            A = e([{
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
            J = function(b) {
                return g(b, function(b, c, h) {
                    return b || (c[A] || c[/^[a-z]+(?: +[a-z]+\b)*/i.exec(A)] || RegExp("\\b" + d(h) + "(?:\\b|\\w*\\d)", "i").exec(a)) && h
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
            y = function(c) {
                return g(c, function(c, h) {
                    var f = h.pattern || d(h);
                    if (!c && (c = RegExp("\\b" + f + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a))) {
                        var e = c,
                            g = h.label || h,
                            k = {
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
                        f && g && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (k = k[/[\d.]+$/.exec(e)]) && (e = "Windows " + k);
                        e = String(e);
                        f && g && (e = e.replace(RegExp(f, "i"), g));
                        c = e = b(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/,
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
        B && (B = [B]);
        J && !A && (A = e([J]));
        if (m = /\bGoogle TV\b/.exec(A)) A = m[0];
        /\bSimulator\b/i.test(a) && (A = (A ? A + " " : "") + "Simulator");
        "Opera Mini" == w && /\bOPiOS\b/.test(a) && v.push("running in Turbo/Uncompressed mode");
        "IE" == w && /\blike iPhone OS\b/.test(a) ? (m = h(a.replace(/like iPhone OS/, "")), J = m.manufacturer, A = m.product) : /^iP/.test(A) ? (w || (w = "Safari"), y = "iOS" + ((m = / OS ([\d_]+)/i.exec(a)) ? " " + m[1].replace(/_/g, ".") : "")) : "Konqueror" != w || /buntu/i.test(y) ? J && "Google" != J && (/Chrome/.test(w) &&
            !/\bMobile Safari\b/i.test(a) || /\bVita\b/.test(A)) || /\bAndroid\b/.test(y) && /^Chrome/.test(w) && /\bVersion\//i.test(a) ? (w = "Android Browser", y = /\bAndroid\b/.test(y) ? y : "Android") : "Silk" == w ? (/\bMobi/i.test(a) || (y = "Android", v.unshift("desktop mode")), /Accelerated *= *true/i.test(a) && v.unshift("accelerated")) : "PaleMoon" == w && (m = /\bFirefox\/([\d.]+)\b/.exec(a)) ? v.push("identifying as Firefox " + m[1]) : "Firefox" == w && (m = /\b(Mobile|Tablet|TV)\b/i.exec(a)) ? (y || (y = "Firefox OS"), A || (A = m[1])) : !w || (m = !/\bMinefield\b/i.test(a) &&
            /\b(?:Firefox|Safari)\b/.exec(w)) ? (w && !A && /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(m + "/") + 8)) && (w = null), (m = A || J || y) && (A || J || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(y)) && (w = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(y) ? y : m) + " Browser")) : "Electron" == w && (m = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) && v.push("Chromium " + m) : y = "Kubuntu";
        n || (n = q(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", d(w), "(?:Firefox|Minefield|NetFront)"]));
        if (m = "iCab" == B && 3 < parseFloat(n) && "WebKit" || /\bOpera\b/.test(w) && (/\bOPR\b/.test(a) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(a) && !/^(?:Trident|EdgeHTML)$/.test(B) && "WebKit" || !B && /\bMSIE\b/i.test(a) && ("Mac OS" == y ? "Tasman" : "Trident") || "WebKit" == B && /\bPlayStation\b(?! Vita\b)/i.test(w) && "NetFront") B = [m];
        "IE" == w && (m = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1]) ? (w += " Mobile", y = "Windows Phone " + (/\+$/.test(m) ? m : m + ".x"), v.unshift("desktop mode")) : /\bWPDesktop\b/i.test(a) ? (w = "IE Mobile", y = "Windows Phone 8.x",
            v.unshift("desktop mode"), n || (n = (/\brv:([\d.]+)/.exec(a) || 0)[1])) : "IE" != w && "Trident" == B && (m = /\brv:([\d.]+)/.exec(a)) && (w && v.push("identifying as " + w + (n ? " " + n : "")), w = "IE", n = m[1]);
        if (M) {
            if (l(k, "global"))
                if (P && (m = P.lang.System, O = m.getProperty("os.arch"), y = y || m.getProperty("os.name") + " " + m.getProperty("os.version")), T) {
                    try {
                        n = k.require("ringo/engine").version.join("."), w = "RingoJS"
                    } catch (S) {
                        (m = k.system) && m.global.system == k.system && (w = "Narwhal", y || (y = m[0].os || null))
                    }
                    w || (w = "Rhino")
                } else "object" == typeof k.process &&
                    !k.process.browser && (m = k.process) && ("object" == typeof m.versions && ("string" == typeof m.versions.electron ? (v.push("Node " + m.versions.node), w = "Electron", n = m.versions.electron) : "string" == typeof m.versions.nw && (v.push("Chromium " + n, "Node " + m.versions.node), w = "NW.js", n = m.versions.nw)), w || (w = "Node.js", O = m.arch, y = m.platform, n = (n = /[\d.]+/.exec(m.version)) ? n[0] : null));
            else f(m = k.runtime) == t ? (w = "Adobe AIR", y = m.flash.system.Capabilities.os) : f(m = k.phantom) == ca ? (w = "PhantomJS", n = (m = m.version || null) && m.major + "." +
                m.minor + "." + m.patch) : "number" == typeof L.documentMode && (m = /\bTrident\/(\d+)/i.exec(a)) ? (n = [n, L.documentMode], (m = +m[1] + 4) != n[1] && (v.push("IE " + n[1] + " mode"), B && (B[1] = ""), n[1] = m), n = "IE" == w ? String(n[1].toFixed(1)) : n[0]) : "number" == typeof L.documentMode && /^(?:Chrome|Firefox)\b/.test(w) && (v.push("masking as " + w + " " + n), w = "IE", n = "11.0", B = ["Trident"], y = "Windows");
            y = y && b(y)
        }
        n && (m = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(n) || /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (M && r.appMinorVersion)) || /\bMinefield\b/i.test(a) &&
            "a") && (Q = /b/i.test(m) ? "beta" : "alpha", n = n.replace(RegExp(m + "\\+?$"), "") + ("beta" == Q ? X : aa) + (/\d+\+?/.exec(m) || ""));
        if ("Fennec" == w || "Firefox" == w && /\b(?:Android|Firefox OS)\b/.test(y)) w = "Firefox Mobile";
        else if ("Maxthon" == w && n) n = n.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(A)) "Xbox 360" == A && (y = null), "Xbox 360" == A && /\bIEMobile\b/.test(a) && v.unshift("mobile mode");
        else if (!/^(?:Chrome|IE|Opera)$/.test(w) && (!w || A || /Browser|Mobi/.test(w)) || "Windows CE" != y && !/Mobi/i.test(a))
            if ("IE" == w && M) try {
                null ===
                    k.external && v.unshift("platform preview")
            } catch (S) {
                v.unshift("embedded")
            } else(/\bBlackBerry\b/.test(A) || /\bBB10\b/.test(a)) && (m = (RegExp(A.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) || 0)[1] || n) ? (m = [m, /BB10/.test(a)], y = (m[1] ? (A = null, J = "BlackBerry") : "Device Software") + " " + m[0], n = null) : this != c && "Wii" != A && (M && C || /Opera/.test(w) && /\b(?:MSIE|Firefox)\b/i.test(a) || "Firefox" == w && /\bOS X (?:\d+\.){2,}/.test(y) || "IE" == w && (y && !/^Win/.test(y) && 5.5 < n || /\bWindows XP\b/.test(y) && 8 < n || 8 == n && !/\bTrident\b/.test(a))) &&
                !p.test(m = h.call(c, a.replace(p, "") + ";")) && m.name && (m = "ing as " + m.name + ((m = m.version) ? " " + m : ""), p.test(w) ? (/\bIE\b/.test(m) && "Mac OS" == y && (y = null), m = "identify" + m) : (m = "mask" + m, w = E ? b(E.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(m) && (y = null), M || (n = null)), B = ["Presto"], v.push(m));
            else w += " Mobile";
        if (m = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1]) {
            m = [parseFloat(m.replace(/\.(\d)$/, ".0$1")), m];
            if ("Safari" == w && "+" == m[1].slice(-1)) w = "WebKit Nightly", Q = "alpha", n = m[1].slice(0, -1);
            else if (n ==
                m[1] || n == (m[2] = (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])) n = null;
            m[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1];
            537.36 == m[0] && 537.36 == m[2] && 28 <= parseFloat(m[1]) && "WebKit" == B && (B = ["Blink"]);
            M && (z || m[1]) ? (B && (B[1] = "like Chrome"), m = m[1] || (m = m[0], 530 > m ? 1 : 532 > m ? 2 : 532.05 > m ? 3 : 533 > m ? 4 : 534.03 > m ? 5 : 534.07 > m ? 6 : 534.1 > m ? 7 : 534.13 > m ? 8 : 534.16 > m ? 9 : 534.24 > m ? 10 : 534.3 > m ? 11 : 535.01 > m ? 12 : 535.02 > m ? "13+" : 535.07 > m ? 15 : 535.11 > m ? 16 : 535.19 > m ? 17 : 536.05 > m ? 18 : 536.1 > m ? 19 : 537.01 > m ? 20 : 537.11 > m ? "21+" : 537.13 > m ? 23 : 537.18 > m ? 24 : 537.24 > m ? 25 : 537.36 >
                m ? 26 : "Blink" != B ? "27" : "28")) : (B && (B[1] = "like Safari"), m = (m = m[0], 400 > m ? 1 : 500 > m ? 2 : 526 > m ? 3 : 533 > m ? 4 : 534 > m ? "4+" : 535 > m ? 5 : 537 > m ? 6 : 538 > m ? 7 : 601 > m ? 8 : "8"));
            B && (B[1] += " " + (m += "number" == typeof m ? ".x" : /[.+]/.test(m) ? "" : "+"));
            "Safari" == w && (!n || 45 < parseInt(n)) && (n = m)
        }
        "Opera" == w && (m = /\bzbov|zvav$/.exec(y)) ? (w += " ", v.unshift("desktop mode"), "zvav" == m ? (w += "Mini", n = null) : w += "Mobile", y = y.replace(RegExp(" *" + m + "$"), "")) : "Safari" == w && /\bChrome\b/.exec(B && B[1]) && (v.unshift("desktop mode"), w = "Chrome Mobile", n = null, /\bOS X\b/.test(y) ?
            (J = "Apple", y = "iOS 4.3+") : y = null);
        n && 0 == n.indexOf(m = /[\d.]+$/.exec(y)) && -1 < a.indexOf("/" + m + "-") && (y = String(y.replace(m, "")).replace(/^ +| +$/g, ""));
        B && !/\b(?:Avant|Nook)\b/.test(w) && (/Browser|Lunascape|Maxthon/.test(w) || "Safari" != w && /^iOS/.test(y) && /\bSafari\b/.test(B[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(w) && B[1]) && (m = B[B.length - 1]) && v.push(m);
        v.length && (v = ["(" + v.join("; ") + ")"]);
        J && A && 0 > A.indexOf(J) && v.push("on " + J);
        A && v.push((/^on /.test(v[v.length -
            1]) ? "" : "on ") + A);
        if (y) {
            var ba = (m = / ([\d.+]+)$/.exec(y)) && "/" == y.charAt(y.length - m[0].length - 1);
            y = {
                architecture: 32,
                family: m && !ba ? y.replace(m[0], "") : y,
                version: m ? m[1] : null,
                toString: function() {
                    var a = this.version;
                    return this.family + (a && !ba ? " " + a : "") + (64 == this.architecture ? " 64-bit" : "")
                }
            }
        }(m = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(O)) && !/\bi686\b/i.test(O) ? (y && (y.architecture = 64, y.family = y.family.replace(RegExp(" *" + m), "")), w && (/\bWOW64\b/i.test(a) || M && /\w(?:86|32)$/.test(r.cpuClass || r.platform) && !/\bWin64; x64\b/i.test(a)) &&
            v.unshift("32-bit")) : y && /^OS X/.test(y.family) && "Chrome" == w && 39 <= parseFloat(n) && (y.architecture = 64);
        a || (a = null);
        k = {};
        k.description = a;
        k.layout = B && B[0];
        k.manufacturer = J;
        k.name = w;
        k.prerelease = Q;
        k.product = A;
        k.ua = a;
        k.version = w && n;
        k.os = y || {
            architecture: null,
            family: null,
            version: null,
            toString: function() {
                return "null"
            }
        };
        k.parse = h;
        k.toString = function() {
            return this.description || ""
        };
        k.version && v.unshift(n);
        k.name && v.unshift(w);
        y && w && (y != String(y).split(" ")[0] || y != w.split(" ")[0] && !A) && v.push(A ? "(" + y + ")" : "on " +
            y);
        v.length && (k.description = v.join(" "));
        return k
    }
    var k = {
            "function": !0,
            object: !0
        },
        u = k[typeof window] && window || this,
        t = k[typeof exports] && exports;
    k = k[typeof module] && module && !module.nodeType && module;
    var r = t && k && "object" == typeof global && global;
    !r || r.global !== r && r.window !== r && r.self !== r || (u = r);
    var n = Math.pow(2, 53) - 1,
        p = /\bOpera/;
    r = Object.prototype;
    var q = r.hasOwnProperty,
        x = r.toString,
        z = h();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (u.platform = z, define(function() {
            return z
        })) : t &&
        k ? c(z, function(a, b) {
            t[b] = a
        }) : u.platform = z
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
        }], e = 0; e < a.length; e++) {
        var b = document.createElement("meta");
        b.name = a[e].name;
        b.content = a[e].content;
        var c = window.document.head.querySelector('meta[name="' + b.name + '"]');
        c && c.parentNode.removeChild(c);
        window.document.head.appendChild(b)
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
    platform && "iPhone" === platform.product && (buildIOSFullscreenPanel(), buildIOSMeta())
});
jQuery(window).resize(function() {
    platform && "iPhone" === platform.product && iosResize()
});
var s_iScaleFactor = 1,
    s_bIsIphone = !1,
    s_iOffsetX, s_iOffsetY;
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

function ifArrayContainsValue(a, e) {
    for (var b = 0; b < a.length; b++)
        if (a[b] === e) return !0;
    return !1
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

function getSize(a) {
    var e = a.toLowerCase(),
        b = window.document,
        c = b.documentElement;
    if (void 0 === window["inner" + a]) a = c["client" + a];
    else if (window["inner" + a] != c["client" + a]) {
        var f = b.createElement("body");
        f.id = "vpw-test-b";
        f.style.cssText = "overflow:scroll";
        var l = b.createElement("div");
        l.id = "vpw-test-d";
        l.style.cssText = "position:absolute;top:-1000px";
        l.innerHTML = "<style>@media(" + e + ":" + c["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + e + ":7px!important}}</style>";
        f.appendChild(l);
        c.insertBefore(f, b.head);
        a = 7 == l["offset" + a] ? c["client" + a] : window["inner" + a];
        c.removeChild(f)
    } else a = window["inner" + a];
    return a
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    sizeHandler()
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
        var e = getSize("Width");
        _checkOrientation(e, a);
        var b = Math.min(a / CANVAS_HEIGHT, e / CANVAS_WIDTH),
            c = CANVAS_WIDTH * b;
        b *= CANVAS_HEIGHT;
        if (b < a) {
            var f = a - b;
            b += f;
            c += CANVAS_WIDTH / CANVAS_HEIGHT * f
        } else c < e && (f = e - c, c += f, b += CANVAS_HEIGHT / CANVAS_WIDTH * f);
        f = a / 2 - b / 2;
        var l = e / 2 - c / 2,
            d = CANVAS_WIDTH / c;
        if (l * d < -EDGEBOARD_X || f * d < -EDGEBOARD_Y) b = Math.min(a / (CANVAS_HEIGHT - 2 *
            EDGEBOARD_Y), e / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), c = CANVAS_WIDTH * b, b *= CANVAS_HEIGHT, f = (a - b) / 2, l = (e - c) / 2, d = CANVAS_WIDTH / c;
        s_iOffsetX = -1 * l * d;
        s_iOffsetY = -1 * f * d;
        0 <= f && (s_iOffsetY = 0);
        0 <= l && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oHelpPanel && s_oHelpPanel.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oRestartPanel && s_oRestartPanel.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oSelectGoal &&
            s_oSelectGoal.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oSelectPlayers && s_oSelectPlayers.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * c, s_oStage.canvas.height = 2 * b, canvas.style.width = c + "px", canvas.style.height = b + "px", s_oStage.scaleX = s_oStage.scaleY = 2 * Math.min(c / CANVAS_WIDTH, b / CANVAS_HEIGHT)) : s_bMobile || isChrome() ? ($("#canvas").css("width", c + "px"), $("#canvas").css("height", b + "px")) : (s_oStage.canvas.width = c, s_oStage.canvas.height =
            b, s_iScaleFactor = Math.min(c / CANVAS_WIDTH, b / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > f ? $("#canvas").css("top", f + "px") : $("#canvas").css("top", "0px");
        $("#canvas").css("left", l + "px");
        fullscreenHandler()
    }
}

function _checkOrientation(a, e) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > e ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function inIframe() {
    try {
        return window.self !== window.top
    } catch (a) {
        return !0
    }
}

function createBitmap(a, e, b) {
    var c = new createjs.Bitmap(a),
        f = new createjs.Shape;
    e && b ? f.graphics.beginFill("#fff").drawRect(0, 0, e, b) : f.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    c.hitArea = f;
    return c
}

function createSprite(a, e, b, c, f, l) {
    a = null !== e ? new createjs.Sprite(a, e) : new createjs.Sprite(a);
    e = new createjs.Shape;
    e.graphics.beginFill("#000000").drawRect(-b, -c, f, l);
    a.hitArea = e;
    return a
}

function randomFloatBetween(a, e, b) {
    "undefined" === typeof b && (b = 2);
    return parseFloat(Math.min(a + Math.random() * (e - a), e).toFixed(b))
}

function formatTime(a) {
    a /= 1E3;
    var e = Math.floor(a / 60);
    a = Math.floor(a - 60 * e);
    var b = "";
    b = 10 > e ? b + ("0" + e + ":") : b + (e + ":");
    return 10 > a ? b + ("0" + a) : b + a
}

function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(a) {
    for (var e = a.length, b, c; 0 < e;) c = Math.floor(Math.random() * e), e--, b = a[e], a[e] = a[c], a[c] = b;
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
            var e = document.createEvent("MouseEvents");
            e.initEvent("click", !0, !0);
            a.dispatchEvent(e)
        }
    }
};

function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(a) {
    for (var e = window.location.search.substring(1).split("&"), b = 0; b < e.length; b++) {
        var c = e[b].split("=");
        if (c[0] == a) return c[1]
    }
}

function stopSound(a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}

function playSound(a, e, b) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(e), 0 > b ? s_aSounds[a].loop(!0) : s_aSounds[a].loop(!1), s_aSounds[a]) : null
}

function setVolume(a, e) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(e)
}

function setMute(a, e) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[e].mute(a)
}

function easeLinear(a, e, b, c) {
    return b * a / c + e
}

function distanceSquaredToLineSegment2(a, e, b, c, f, l, d) {
    f ? (f = ((l - a) * b + (d - e) * c) / f, 0 > f ? f = 0 : 1 < f && (f = 1)) : f = 0;
    a = l - (a + f * b);
    e = d - (e + f * c);
    return a * a + e * e
}

function distanceSquaredToLineSegment(a, e, b, c, f, l) {
    b -= a;
    c -= e;
    return distanceSquaredToLineSegment2(a, e, b, c, b * b + c * c, f, l)
}

function distanceToLineSegment(a, e, b, c, f, l) {
    return Math.sqrt(distanceSquaredToLineSegment(a, e, b, c, f, l))
}

function collisionWithCircle(a, e, b) {
    var c = a.getX() - e.getX(),
        f = a.getY() - e.getY();
    return Math.sqrt(c * c + f * f) < a.getCollision() * b + e.getCollision() * b ? !0 : !1
}

function checkRectCollision(a, e) {
    var b = getBounds(a, .9);
    var c = getBounds(e, .98);
    return calculateIntersection(b, c)
}

function calculateIntersection(a, e) {
    var b, c, f, l;
    var d = a.x + (b = a.width / 2);
    var g = a.y + (c = a.height / 2);
    var h = e.x + (f = e.width / 2);
    var k = e.y + (l = e.height / 2);
    d = Math.abs(d - h) - (b + f);
    g = Math.abs(g - k) - (c + l);
    return 0 > d && 0 > g ? (d = Math.min(Math.min(a.width, e.width), -d), g = Math.min(Math.min(a.height, e.height), -g), {
        x: Math.max(a.x, e.x),
        y: Math.max(a.y, e.y),
        width: d,
        height: g,
        rect1: a,
        rect2: e
    }) : null
}

function getBounds(a, e) {
    var b = {
        x: Infinity,
        y: Infinity,
        width: 0,
        height: 0
    };
    if (a instanceof createjs.Container) {
        b.x2 = -Infinity;
        b.y2 = -Infinity;
        var c = a.children,
            f = c.length,
            l;
        for (l = 0; l < f; l++) {
            var d = getBounds(c[l], 1);
            d.x < b.x && (b.x = d.x);
            d.y < b.y && (b.y = d.y);
            d.x + d.width > b.x2 && (b.x2 = d.x + d.width);
            d.y + d.height > b.y2 && (b.y2 = d.y + d.height)
        }
        Infinity == b.x && (b.x = 0);
        Infinity == b.y && (b.y = 0);
        Infinity == b.x2 && (b.x2 = 0);
        Infinity == b.y2 && (b.y2 = 0);
        b.width = b.x2 - b.x;
        b.height = b.y2 - b.y;
        delete b.x2;
        delete b.y2
    } else {
        if (a instanceof createjs.Bitmap) {
            f =
                a.sourceRect || a.image;
            l = f.width * e;
            var g = f.height * e
        } else if (a instanceof createjs.Sprite)
            if (a.spriteSheet._frames && a.spriteSheet._frames[a.currentFrame] && a.spriteSheet._frames[a.currentFrame].image) {
                f = a.spriteSheet.getFrame(a.currentFrame);
                l = f.rect.width;
                g = f.rect.height;
                c = f.regX;
                var h = f.regY
            } else b.x = a.x || 0, b.y = a.y || 0;
        else b.x = a.x || 0, b.y = a.y || 0;
        c = c || 0;
        l = l || 0;
        h = h || 0;
        g = g || 0;
        b.regX = c;
        b.regY = h;
        f = a.localToGlobal(0 - c, 0 - h);
        d = a.localToGlobal(l - c, g - h);
        l = a.localToGlobal(l - c, 0 - h);
        c = a.localToGlobal(0 - c, g - h);
        b.x =
            Math.min(Math.min(Math.min(f.x, d.x), l.x), c.x);
        b.y = Math.min(Math.min(Math.min(f.y, d.y), l.y), c.y);
        b.width = Math.max(Math.max(Math.max(f.x, d.x), l.x), c.x) - b.x;
        b.height = Math.max(Math.max(Math.max(f.y, d.y), l.y), c.y) - b.y
    }
    return b
}
(function() {
    function a(a) {
        var b = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        a = a || window.event;
        a.type in b ? document.body.className = b[a.type] : (document.body.className = this[e] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }
    var e = "hidden";
    e in document ? document.addEventListener("visibilitychange", a) : (e = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (e = "webkitHidden") in
        document ? document.addEventListener("webkitvisibilitychange", a) : (e = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function saveItem(a, e) {
    s_bStorageAvailable && localStorage.setItem(a, e)
}

function getItem(a) {
    return s_bStorageAvailable ? localStorage.getItem(a) : null
}

function setItemJson(a, e) {
    s_bStorageAvailable && localStorage.setItem(a, JSON.stringify(e))
}

function getItemJson(a) {
    return s_bStorageAvailable ? JSON.parse(localStorage.getItem(a)) : null
}

function fullscreenHandler() {
    ENABLE_FULLSCREEN && screenfull.enabled && (s_bFullscreen = screen.height < window.innerHeight + 3 && screen.height > window.innerHeight - 3 ? !0 : !1, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut(), null !== s_oHelpPanel && s_oHelpPanel.resetFullscreenBut(), null !== s_oRestartPanel && s_oRestartPanel.resetFullscreenBut(), null !== s_oSelectGoal && s_oSelectGoal.resetFullscreenBut(), null !== s_oSelectPlayers && s_oSelectPlayers.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function() {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut();
    null !== s_oHelpPanel && s_oHelpPanel.resetFullscreenBut();
    null !== s_oRestartPanel && s_oRestartPanel.resetFullscreenBut();
    null !== s_oSelectGoal && s_oSelectGoal.resetFullscreenBut();
    null !== s_oSelectPlayers && s_oSelectPlayers.resetFullscreenBut()
});

function CSpriteLibrary() {
    var a, e, b, c, f, l;
    this.init = function(d, g, h) {
        b = e = 0;
        c = d;
        f = g;
        l = h;
        a = {}
    };
    this.addSprite = function(b, c) {
        a.hasOwnProperty(b) || (a[b] = {
            szPath: c,
            oSprite: new Image
        }, e++)
    };
    this.getSprite = function(b) {
        return a.hasOwnProperty(b) ? a[b].oSprite : null
    };
    this._onSpritesLoaded = function() {
        f.call(l)
    };
    this._onSpriteLoaded = function() {
        c.call(l);
        ++b === e && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var b in a) a[b].oSprite.oSpriteLibrary = this, a[b].oSprite.onload = function() {
                this.oSpriteLibrary._onSpriteLoaded()
            },
            a[b].oSprite.src = a[b].szPath
    };
    this.getNumSprites = function() {
        return e
    }
}
var CANVAS_WIDTH = 768,
    CANVAS_HEIGHT = 1400,
    CANVAS_WIDTH_HALF = CANVAS_WIDTH / 2,
    CANVAS_HEIGHT_HALF = CANVAS_HEIGHT / 2,
    EDGEBOARD_X = 10,
    EDGEBOARD_Y = 265,
    FPS = 30,
    DISABLE_SOUND_MOBILE = !1,
    PRIMARY_FONT = "arialbold",
    PRIMARY_FONT_COLOUR = "#ffffff",
    SECONDARY_FONT_COLOUR = "#000000",
    THIRD_FONT_COLOUR = "#4d2800",
    SPECIAL_FONT_COLOUR = "#ffff00",
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_SELECT_PLAYERS = 2,
    STATE_SELECT_GOAL = 2,
    STATE_HELP = 1,
    STATE_GAME = 3,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    INITIAL_TILES = 7,
    TILES_NUMBER =
    28,
    WIN_SCORE, ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, CENTER_ATTACH = 0,
    SIDE_LEFT_ATTACH = 1,
    SIDE_RIGHT_ATTACH = 2,
    DOMINO_TIMER = 500,
    MATCHOVER_TIMER = 1E3,
    LEFT_SIDE = 0,
    RIGHT_SIDE = 1,
    DRAWNTILES_LIMIT1 = 4,
    DRAWNTILES_LIMIT2 = 8,
    DRAWNTILES_LIMIT3 = 16,
    SCALE_VAR = .5,
    TILE_VALUES = [
        [0, 0],
        [1, 2],
        [2, 3],
        [2, 4],
        [1, 5],
        [5, 5],
        [3, 6],
        [0, 1],
        [2, 2],
        [3, 3],
        [3, 4],
        [2, 5],
        [0, 6],
        [4, 6],
        [1, 1],
        [0, 3],
        [0, 4],
        [4, 4],
        [3, 5],
        [1, 6],
        [5, 6],
        [0, 2],
        [1, 3],
        [1, 4],
        [0, 5],
        [4, 5],
        [2, 6],
        [6, 6]
    ],
    TILE_BACK = 28,
    PLAYER_ROTATION = [0, 0, 270, 90],
    PLAYER_LOCK_POSITIONS = [
        [CANVAS_WIDTH_HALF +
            220, CANVAS_HEIGHT_HALF + 345
        ],
        [CANVAS_WIDTH_HALF - 260, CANVAS_HEIGHT_HALF - 335],
        [CANVAS_WIDTH_HALF + 308, CANVAS_HEIGHT_HALF - 238],
        [CANVAS_WIDTH_HALF - 348, CANVAS_HEIGHT_HALF + 242]
    ],
    PLAYER_TEXT_COORDINATES = [
        [CANVAS_WIDTH_HALF - 200, CANVAS_HEIGHT_HALF + 370],
        [CANVAS_WIDTH_HALF + 200, CANVAS_HEIGHT_HALF - 310],
        [CANVAS_WIDTH_HALF + 320, CANVAS_HEIGHT_HALF + 250],
        [CANVAS_WIDTH_HALF - 320, CANVAS_HEIGHT_HALF - 180]
    ],
    PLAYER_SCORE_COORDINATES = [
        [CANVAS_WIDTH_HALF - 200, CANVAS_HEIGHT_HALF + 390],
        [CANVAS_WIDTH_HALF + 200, CANVAS_HEIGHT_HALF - 290],
        [CANVAS_WIDTH_HALF + 340, CANVAS_HEIGHT_HALF + 250],
        [CANVAS_WIDTH_HALF - 340, CANVAS_HEIGHT_HALF - 180]
    ],
    PLAYER_HANDS_COORDS = [
        [CANVAS_WIDTH_HALF + 200, CANVAS_HEIGHT_HALF + 420],
        [CANVAS_WIDTH_HALF - 260, CANVAS_HEIGHT_HALF - 262],
        [CANVAS_WIDTH_HALF + 330, CANVAS_HEIGHT_HALF - 70],
        [CANVAS_WIDTH_HALF - 330, CANVAS_HEIGHT_HALF - 50]
    ],
    TILE_INIT_SCALE = .7,
    TILE_WIDTH = 84,
    TILE_HEIGHT = 138,
    TILE_SCALE_LIMIT = .74,
    TILE_SCALE_VAR = .07,
    NO_PLAYER = 5,
    FIRST_GAME, TEXT_HELP_TITLE = "HOW TO PLAY",
    TEXT_HELP1 = "MATCH TILES WITH THE SAME NUMBER OF DOTS",
    TEXT_HELP2 =
    "PLAY ALL YOUR TILES BEFORE THE OTHERS, WITH THE LEAST POSSIBLE MOVES",
    TEXT_HELP3 = "THE FIRST PLAYER THAT REACHES ",
    TEXT_HELP4 = " POINTS WINS THE GAME",
    TEXT_SELECT = "SELECT PLAYERS",
    TEXT_GOAL = "SELECT YOUR GOAL",
    TEXT_PLAYER = "PLAYER",
    TEXT_WINS = "WINS",
    TEXT_DOMINO = "DOMINO!",
    TEXT_LOCKED = "LOCKED!",
    TEXT_SELECTSIDE = "SELECT SIDE TO ATTACH",
    TEXT_PTS = "PTS",
    TEXT_BESTSCORE = "YOUR BEST SCORE",
    TEXT_MATCHSCORE = "MATCH SCORE",
    TEXT_GAMESUMMARY = "GAME SUMMARY",
    TEXT_GAMEWON = "CONGRATULATIONS! YOU WON!",
    TEXT_MATCHOVER = "MATCH OVER!",
    TEXT_GAMEOVER = "GAME OVER!",
    TEXT_ARE_SURE = "ARE YOU SURE YOU WANT TO EXIT? ALL UNSAVED PROGRESS WILL BE LOST",
    TEXT_RESTART = "A PREVIOUS MATCH WAS FOUND IN MEMORY. DO YOU WANT TO RESTART OVER THE GAME OR CONTINUE?",
    TEXT_SCORE = "LAST SAVED SCORE",
    TEXT_PRELOADER_CONTINUE = "START",
    TEXT_CREDITS_DEVELOPED = "DEVELOPED BY",
    TEXT_ERR_LS = "YOUR WEB BROWSER DOES NOT SUPPORT STORING SETTING LOCALLY. IN SAFARI, THE MOST COMMON CAUSE OF THIS IS USING 'PRIVATE BROWSING MODE'. SOME INFO MAY NOT SAVE OR SOME FEATURE MAY NOT WORK PROPERLY.",
    TEXT_SHARE_IMAGE = "200x200.jpg",
    TEXT_SHARE_TITLE = "Congratulations!",
    TEXT_SHARE_MSG1 = "You collected <strong>",
    TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!",
    TEXT_SHARE_SHARE1 = "My score is ",
    TEXT_SHARE_SHARE2 = " points! Can you do better";

function CPreloader() {
    var a, e, b, c, f, l, d, g, h, k;
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
        h.unload();
        h = null;
        k.removeAllChildren()
    };
    this._onImagesLoaded =
        function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var u = new createjs.Shape;
        u.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        k.addChild(u);
        u = s_oSpriteLibrary.getSprite("200x200");
        d = createBitmap(u);
        d.regX = .5 * u.width;
        d.regY = .5 * u.height;
        d.x = CANVAS_WIDTH_HALF;
        d.y = CANVAS_HEIGHT_HALF - 180;
        k.addChild(d);
        g = new createjs.Shape;
        g.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(d.x - 100, d.y - 100, 200, 200, 10);
        k.addChild(g);
        d.mask = g;
        u = s_oSpriteLibrary.getSprite("progress_bar");
        c = createBitmap(u);
        c.x = CANVAS_WIDTH_HALF - u.width / 2;
        c.y = CANVAS_HEIGHT_HALF + 50;
        k.addChild(c);
        a = u.width;
        e = u.height;
        f = new createjs.Shape;
        f.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(c.x, c.y, 1, e);
        k.addChild(f);
        c.mask = f;
        b = new createjs.Text("", "30px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        b.x = CANVAS_WIDTH_HALF;
        b.y = CANVAS_HEIGHT_HALF + 100;
        b.textBaseline = "alphabetic";
        b.textAlign = "center";
        k.addChild(b);
        u = s_oSpriteLibrary.getSprite("but_start");
        h = new CTextButton(CANVAS_WIDTH_HALF,
            CANVAS_HEIGHT_HALF, u, TEXT_PRELOADER_CONTINUE, "Arial", "#000", "bold 50", k);
        h.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
        h.setVisible(!1);
        l = new createjs.Shape;
        l.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        k.addChild(l);
        createjs.Tween.get(l).to({
            alpha: 0
        }, 500).call(function() {
            createjs.Tween.removeTweens(l);
            k.removeChild(l)
        })
    };
    this._onButStartRelease = function() {
        s_oMain._onRemovePreloader()
    };
    this.refreshLoader = function(d) {
        b.text = d + "%";
        100 === d && (h.setVisible(!0), b.visible = !1, c.visible = !1);
        f.graphics.clear();
        d = Math.floor(d * a / 100);
        f.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(c.x, c.y, d, e)
    };
    this._init()
}

function CMain(a) {
    var e, b = 0,
        c = 0,
        f = STATE_LOADING,
        l, d;
    this.initContainer = function() {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        s_oStage.preventSelection = !1;
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        !1 === s_bMobile && (s_oStage.enableMouseOver(20), $("body").on("contextmenu", "#canvas", function(a) {
            return !1
        }));
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.framerate = FPS;
        navigator.userAgent.match(/Windows Phone/i) &&
            (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        l = new CPreloader
    };
    this.preloaderReady = function() {
        this._loadImages();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        e = !0
    };
    this.soundLoaded = function() {
        b++;
        l.refreshLoader(Math.floor(b / c * 100))
    };
    this._initSounds = function() {
        var a = [];
        a.push({
            path: "./sounds/",
            filename: "press_button",
            loop: !1,
            volume: 1,
            ingamename: "click"
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
            filename: "game_over",
            loop: !1,
            volume: 1,
            ingamename: "game_over"
        });
        a.push({
            path: "./sounds/",
            filename: "match_over",
            loop: !1,
            volume: 1,
            ingamename: "match_over"
        });
        a.push({
            path: "./sounds/",
            filename: "tile",
            loop: !1,
            volume: 1,
            ingamename: "tile"
        });
        a.push({
            path: "./sounds/",
            filename: "wrong",
            loop: !1,
            volume: 1,
            ingamename: "wrong"
        });
        a.push({
            path: "./sounds/",
            filename: "select",
            loop: !1,
            volume: 1,
            ingamename: "select"
        });
        a.push({
            path: "./sounds/",
            filename: "box_open",
            loop: !1,
            volume: 1,
            ingamename: "box_open"
        });
        a.push({
            path: "./sounds/",
            filename: "box_move",
            loop: !1,
            volume: 1,
            ingamename: "box_move"
        });
        a.push({
            path: "./sounds/",
            filename: "domino",
            loop: !1,
            volume: 1,
            ingamename: "domino"
        });
        a.push({
            path: "./sounds/",
            filename: "locked",
            loop: !1,
            volume: 1,
            ingamename: "locked"
        });
        c += a.length;
        s_aSounds = [];
        for (var b = 0; b < a.length; b++) s_aSounds[a[b].ingamename] = new Howl({
            src: [a[b].path + a[b].filename + ".mp3", a[b].path + a[b].filename + ".ogg"],
            autoplay: !1,
            preload: !0,
            loop: a[b].loop,
            volume: a[b].volume,
            onload: s_oMain.soundLoaded()
        })
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("but_resetgame", "./sprites/but_resetgame.png");
        s_oSpriteLibrary.addSprite("but_continue",
            "./sprites/but_continue.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("but_menu_bg", "./sprites/but_menu_bg.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("msg_box2", "./sprites/msg_box2.png");
        s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("bg_end_panel",
            "./sprites/bg_end_panel.png");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.png");
        s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png");
        s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
        s_oSpriteLibrary.addSprite("but_hint", "./sprites/but_hint.png");
        s_oSpriteLibrary.addSprite("but_2players", "./sprites/but_2players.png");
        s_oSpriteLibrary.addSprite("but_3players", "./sprites/but_3players.png");
        s_oSpriteLibrary.addSprite("but_4players",
            "./sprites/but_4players.png");
        s_oSpriteLibrary.addSprite("but_restart_small", "./sprites/but_restart_small.png");
        s_oSpriteLibrary.addSprite("tiles", "./sprites/tiles.png");
        s_oSpriteLibrary.addSprite("glow", "./sprites/glow.png");
        s_oSpriteLibrary.addSprite("lock", "./sprites/lock.png");
        s_oSpriteLibrary.addSprite("box", "./sprites/box.png");
        s_oSpriteLibrary.addSprite("cover", "./sprites/cover.png");
        s_oSpriteLibrary.addSprite("frame", "./sprites/frame.png");
        s_oSpriteLibrary.addSprite("game_frame", "./sprites/game_frame.png");
        s_oSpriteLibrary.addSprite("arrow_right", "./sprites/arrow_right.png");
        s_oSpriteLibrary.addSprite("arrow_left", "./sprites/arrow_left.png");
        s_oSpriteLibrary.addSprite("side_selection", "./sprites/side_selection.png");
        s_oSpriteLibrary.addSprite("but_check", "./sprites/but_check.png");
        c += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        b++;
        l.refreshLoader(Math.floor(b / c * 100))
    };
    this._onAllImagesLoaded = function() {};
    this._onRemovePreloader = function() {
        try {
            saveItem("ls_available",
                "ok")
        } catch (h) {
            s_bStorageAvailable = !1
        }
        l.unload();
        this.gotoMenu()
    };
    this.gotoMenu = function() {
        new CMenu;
        f = STATE_MENU
    };
    this.gotoSelectPlayers = function() {
        new CSelectPlayers;
        f = STATE_SELECT_PLAYERS
    };
    this.gotoSelectGoal = function(a) {
        new CSelectGoal(a);
        f = STATE_SELECT_GOAL
    };
    this.gotoGame = function(a, b) {
        d = new CGame(g, a, b);
        f = STATE_GAME;
        $(s_oMain).trigger("start_session")
    };
    this.gotoHelp = function() {
        new CHelp;
        f = STATE_HELP
    };
    this.stopUpdate = function() {
        e = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        s_bAudioActive && Howler.mute(!0)
    };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        e = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        s_bAudioActive && Howler.mute(!1)
    };
    this._update = function(a) {
        if (!1 !== e) {
            var b = (new Date).getTime();
            s_iTimeElaps = b - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = b;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            f === STATE_GAME && d.update();
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    var g = a;
    ENABLE_FULLSCREEN = a.fullscreen;
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    WIN_SCORE = a.max_score;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
    s_bGlowActive = !0,
    s_bFullscreen = !1,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_iLevelReached = 1,
    s_szCurDraw, s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_aSounds, s_oCanvas, s_aBestScore, s_aPlayersScore2 = [0, 0],
    s_aPlayersScore3 = [0, 0, 0],
    s_aPlayersScore4 = [0, 0, 0, 0],
    s_bStorageAvailable = !0;

function CMenu() {
    var a, e, b, c, f, l, d, g, h, k, u, t, r = null,
        n = null;
    this._init = function() {
        d = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(d);
        var p = s_oSpriteLibrary.getSprite("but_play");
        g = new CGfxButton(CANVAS_WIDTH_HALF, CANVAS_HEIGHT_HALF + 300, p);
        g.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        p = s_oSpriteLibrary.getSprite("but_credits");
        b = 20 + p.width / 2;
        c = p.height / 2 + 10;
        u = new CGfxButton(b, c, p);
        u.addEventListener(ON_MOUSE_UP, this._onCredits, this);
        if (!1 === DISABLE_SOUND_MOBILE ||
            !1 === s_bMobile) p = s_oSpriteLibrary.getSprite("audio_icon"), f = CANVAS_WIDTH - p.width / 4 - 20, l = p.height / 2 + 10, k = new CToggle(f, l, p, s_bAudioActive, s_oStage), k.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        p = window.document;
        var q = p.documentElement;
        r = q.requestFullscreen || q.mozRequestFullScreen || q.webkitRequestFullScreen || q.msRequestFullscreen;
        n = p.exitFullscreen || p.mozCancelFullScreen || p.webkitExitFullscreen || p.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (r = !1);
        r && screenfull.enabled && (p = s_oSpriteLibrary.getSprite("but_fullscreen"),
            a = b + p.width / 2 + 10, e = c, t = new CToggle(a, e, p, s_bFullscreen, s_oStage), t.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        h = new createjs.Shape;
        h.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(h);
        createjs.Tween.get(h).to({
            alpha: 0
        }, 1E3).call(function() {
            s_oStage.removeChild(h)
        });
        s_bStorageAvailable ? (p = getItemJson("classicdomino_best_score"), null !== p && (s_aBestScore = p), p = getItemJson("classicdomino_scores2"), null !== p && (s_aPlayersScore2 = [], s_aPlayersScore2 =
            p), p = getItemJson("classicdomino_scores3"), null !== p && (s_aPlayersScore3 = [], s_aPlayersScore3 = p), p = getItemJson("classicdomino_scores4"), null !== p && (s_aPlayersScore4 = [], s_aPlayersScore4 = p)) : new CMsgBox(TEXT_ERR_LS, s_oStage);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        FIRST_GAME = !0
    };
    this.unload = function() {
        g.unload();
        g = null;
        s_oStage.removeChild(d);
        d = null;
        u.unload();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) k.unload(), k = null;
        r && screenfull.enabled && t.unload();
        s_oMenu = null
    };
    this.refreshButtonPos = function(d,
        g) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || k.setPosition(f - d, l + g);
        r && screenfull.enabled && t.setPosition(a + d, e + g);
        u.setPosition(b + d, c + g)
    };
    this.exitFromCredits = function() {};
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onCredits = function() {
        new CCreditsPanel
    };
    this._onButPlayRelease = function() {
        this.unload();
        s_oMain.gotoSelectPlayers()
    };
    this.resetFullscreenBut = function() {
        r && screenfull.enabled && t.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ?
            n.call(window.document) : r.call(window.document.documentElement);
        sizeHandler()
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CSelectPlayers() {
    var a, e, b, c, f, l, d, g, h, k, u, t, r, n = null,
        p = null;
    this._init = function() {
        l = new createjs.Container;
        s_oStage.addChild(l);
        f = createBitmap(s_oSpriteLibrary.getSprite("bg_end_panel"));
        l.addChild(f);
        var q = s_oSpriteLibrary.getSprite("msg_box2"),
            x = createBitmap(q);
        x.regX = q.width / 2;
        x.regY = q.height / 2;
        x.x = CANVAS_WIDTH_HALF;
        x.y = CANVAS_HEIGHT_HALF;
        l.addChild(x);
        d = new createjs.Text(TEXT_SELECT, "40px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        d.textAlign = "center";
        d.lineWidth = 600;
        d.textBaseline = "middle";
        d.x = CANVAS_WIDTH_HALF;
        d.y = CANVAS_HEIGHT_HALF - 120;
        l.addChild(d);
        q = CANVAS_HEIGHT_HALF + 30;
        x = s_oSpriteLibrary.getSprite("but_2players");
        g = new CGfxButton(CANVAS_WIDTH_HALF - 180, q, x, l);
        g.addEventListenerWithParams(ON_MOUSE_UP, this._onButPlayRelease, this, 2);
        x = s_oSpriteLibrary.getSprite("but_3players");
        h = new CGfxButton(CANVAS_WIDTH_HALF, q, x, l);
        h.addEventListenerWithParams(ON_MOUSE_UP, this._onButPlayRelease, this, 3);
        x = s_oSpriteLibrary.getSprite("but_4players");
        k = new CGfxButton(CANVAS_WIDTH_HALF + 180, q, x, l);
        k.addEventListenerWithParams(ON_MOUSE_UP,
            this._onButPlayRelease, this, 4);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) q = s_oSpriteLibrary.getSprite("audio_icon"), b = CANVAS_WIDTH - q.width / 4 - 20, c = q.height / 2 + 10, t = new CToggle(b, c, q, s_bAudioActive, s_oStage), t.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        q = window.document;
        x = q.documentElement;
        n = x.requestFullscreen || x.mozRequestFullScreen || x.webkitRequestFullScreen || x.msRequestFullscreen;
        p = q.exitFullscreen || q.mozCancelFullScreen || q.webkitExitFullscreen || q.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN &&
            (n = !1);
        n && screenfull.enabled && (q = s_oSpriteLibrary.getSprite("but_fullscreen"), a = 20 + q.width / 4, e = q.height / 2 + 10, r = new CToggle(a, e, q, s_bFullscreen, s_oStage), r.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        u = new createjs.Shape;
        u.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(u);
        createjs.Tween.get(u).to({
            alpha: 0
        }, 1E3).call(function() {
            s_oStage.removeChild(u)
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        l.removeAllChildren();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) t.unload(), t = null;
        n && screenfull.enabled && r.unload();
        s_oSelectPlayers = null
    };
    this.refreshButtonPos = function(d, f) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || t.setPosition(b - d, c + f);
        n && screenfull.enabled && r.setPosition(a + d, e + f)
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onButPlayRelease = function(a) {
        this.unload();
        isIOS() || playSound("click", 1, 0);
        s_oMain.gotoSelectGoal(a)
    };
    this.resetFullscreenBut = function() {
        n &&
            screenfull.enabled && r.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? p.call(window.document) : n.call(window.document.documentElement);
        sizeHandler()
    };
    s_oSelectPlayers = this;
    this._init()
}
var s_oSelectPlayers = null;

function CSelectGoal(a) {
    var e, b, c, f, l, d, g, h, k, u, t, r, n, p, q = null,
        x = null;
    this._init = function() {
        l = new createjs.Container;
        s_oStage.addChild(l);
        d = createBitmap(s_oSpriteLibrary.getSprite("bg_end_panel"));
        l.addChild(d);
        g = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        g.regX = 308;
        g.regY = 308.5;
        g.x = CANVAS_WIDTH_HALF;
        g.y = CANVAS_HEIGHT_HALF;
        l.addChild(g);
        p = new createjs.Text(TEXT_GOAL, "40px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        p.textAlign = "center";
        p.lineWidth = 600;
        p.textBaseline = "middle";
        p.x = CANVAS_WIDTH_HALF;
        p.y = CANVAS_HEIGHT_HALF - 200;
        l.addChild(p);
        var a = s_oSpriteLibrary.getSprite("but_menu_bg");
        h = new CTextButton(CANVAS_WIDTH_HALF, CANVAS_HEIGHT_HALF - 60, a, WIN_SCORE[0], PRIMARY_FONT, THIRD_FONT_COLOUR, 40, s_oStage);
        h.addEventListenerWithParams(ON_MOUSE_UP, this._onButPlayRelease, this, 0);
        a = s_oSpriteLibrary.getSprite("but_menu_bg");
        k = new CTextButton(CANVAS_WIDTH_HALF, CANVAS_HEIGHT_HALF + 60, a, WIN_SCORE[1], PRIMARY_FONT, THIRD_FONT_COLOUR, 40, s_oStage);
        k.addEventListenerWithParams(ON_MOUSE_UP, this._onButPlayRelease,
            this, 1);
        a = s_oSpriteLibrary.getSprite("but_menu_bg");
        u = new CTextButton(CANVAS_WIDTH_HALF, CANVAS_HEIGHT_HALF + 180, a, WIN_SCORE[2], PRIMARY_FONT, THIRD_FONT_COLOUR, 40, s_oStage);
        u.addEventListenerWithParams(ON_MOUSE_UP, this._onButPlayRelease, this, 2);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) a = s_oSpriteLibrary.getSprite("audio_icon"), c = CANVAS_WIDTH - a.width / 4 - 20, f = a.height / 2 + 10, r = new CToggle(c, f, a, s_bAudioActive, s_oStage), r.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        a = window.document;
        var v = a.documentElement;
        q = v.requestFullscreen || v.mozRequestFullScreen || v.webkitRequestFullScreen || v.msRequestFullscreen;
        x = a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (q = !1);
        q && screenfull.enabled && (a = s_oSpriteLibrary.getSprite("but_fullscreen"), e = 20 + a.width / 4, b = a.height / 2 + 10, n = new CToggle(e, b, a, s_bFullscreen, s_oStage), n.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        t = new createjs.Shape;
        t.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(t);
        createjs.Tween.get(t).to({
            alpha: 0
        }, 1E3).call(function() {
            s_oStage.removeChild(t)
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        h.unload();
        k.unload();
        u.unload();
        u = k = h = null;
        l.removeAllChildren();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) r.unload(), r = null;
        q && screenfull.enabled && n.unload();
        s_oSelectGoal = null
    };
    this.refreshButtonPos = function(a, d) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || r.setPosition(c - a, f + d);
        q && screenfull.enabled && n.setPosition(e + a, b + d)
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.checkIfArrayIsZero = function(a) {
        for (var b = 0, c = 0; c < a.length; ++c)
            if (0 !== a[c]) {
                b = 1;
                break
            }
        return b ? !1 : !0
    };
    this._onButPlayRelease = function(b) {
        isIOS() || playSound("click", 1, 0);
        switch (a) {
            case 2:
                !1 === s_oSelectGoal.checkIfArrayIsZero(s_aPlayersScore2) ? (this.unload(), new CRestartMenu(a, b)) : (this.unload(), s_oMain.gotoGame(a, b));
                break;
            case 3:
                !1 === s_oSelectGoal.checkIfArrayIsZero(s_aPlayersScore3) ? (this.unload(), new CRestartMenu(a,
                    b)) : (this.unload(), s_oMain.gotoGame(a, b));
                break;
            case 4:
                !1 === s_oSelectGoal.checkIfArrayIsZero(s_aPlayersScore4) ? (this.unload(), new CRestartMenu(a, b)) : (this.unload(), s_oMain.gotoGame(a, b))
        }
    };
    this.resetFullscreenBut = function() {
        q && screenfull.enabled && n.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? x.call(window.document) : q.call(window.document.documentElement);
        sizeHandler()
    };
    s_oSelectGoal = this;
    this._init()
}
var s_oSelectGoal = null;

function CGame(a, e, b) {
    var c, f, l, d, g, h, k, u, t, r, n, p, q, x, z, v, D, I, K, F, Y, V, W, ha, T, P, ca, aa, X, L, C, E, m, O, Q, M, B, w, A, J, y, ba, S, N, ea, fa, U, H, Z, G, R, da;
    this._init = function() {
        Z = [];
        G = [];
        H = [];
        R = [];
        r = e;
        n = b;
        K = I = z = v = D = q = x = p = 0;
        F = 1;
        Y = .75 * TILE_WIDTH;
        V = .95 * TILE_WIDTH;
        W = 38;
        U = X = aa = null;
        l = f = !1;
        h = !0;
        t = g = u = d = k = !1;
        switch (r) {
            case 2:
                for (var a = 0; a < s_aPlayersScore2.length; a++) H[a] = s_aPlayersScore2[a];
                break;
            case 3:
                for (a = 0; a < s_aPlayersScore3.length; a++) H[a] = s_aPlayersScore3[a];
                break;
            case 4:
                for (a = 0; a < s_aPlayersScore4.length; a++) H[a] =
                    s_aPlayersScore4[a]
        }
        a = s_oSpriteLibrary.getSprite("bg_game");
        T = createBitmap(a);
        T.x = a.width / 2;
        T.y = a.height / 2;
        T.regX = CANVAS_WIDTH_HALF;
        T.regY = (CANVAS_HEIGHT_HALF + W) / 2;
        ca = createBitmap(s_oSpriteLibrary.getSprite("game_frame"));
        s_oStage.addChild(T, ca);
        new CBoxAnimation(r, G);
        this._initPlayersAndTiles();
        A = new createjs.Container;
        s_oStage.addChild(A);
        this._initLockedText();
        J = new createjs.Container;
        s_oStage.addChild(J);
        this._initDominoText();
        ha = new CInterface;
        N = new createjs.Container;
        s_oStage.addChild(N);
        a =
            s_oSpriteLibrary.getSprite("side_selection");
        var c = createBitmap(a);
        c.regX = .5 * a.width;
        c.regY = .5 * a.height;
        N.addChild(c);
        P = new createjs.Text(TEXT_SELECTSIDE, "20px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        P.x = 0;
        P.y = 0;
        P.textAlign = "center";
        P.lineWidth = 150;
        P.textBaseline = "alphabetic";
        N.addChild(P);
        a = s_oSpriteLibrary.getSprite("arrow_left");
        ea = CGfxButton(-90, 0, a, N);
        ea.addEventListenerWithParams(ON_MOUSE_UP, this._onSelectedSide, this, LEFT_SIDE);
        a = s_oSpriteLibrary.getSprite("arrow_right");
        fa = CGfxButton(90, 0, a, N);
        fa.addEventListenerWithParams(ON_MOUSE_UP, this._onSelectedSide, this, RIGHT_SIDE);
        N.x = CANVAS_WIDTH_HALF;
        N.y = CANVAS_HEIGHT_HALF;
        N.visible = !1;
        S = new createjs.Shape;
        S.graphics.beginFill("#ff0000").drawRect(0, G[0].getY() - 50, CANVAS_WIDTH, 100);
        S.alpha = .01;
        S.visible = !0;
        S.on("mousedown", function() {});
        s_oStage.addChild(S);
        !0 === FIRST_GAME ? CHelpPanel(n) : this._onExitHelp()
    };
    this._initLockedText = function() {
        var a = CANVAS_WIDTH_HALF,
            b = CANVAS_HEIGHT_HALF + W;
        B = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        B.regX =
            308;
        B.regY = 308.5;
        B.scaleX = B.scaleY = .5;
        B.x = a;
        B.y = b;
        m = new createjs.Text(TEXT_PLAYER + " " + p + " " + TEXT_LOCKED, "30px " + PRIMARY_FONT, SECONDARY_FONT_COLOUR);
        m.x = a + 2;
        m.y = b - 88;
        m.textAlign = "center";
        m.lineWidth = 200;
        m.textBaseline = "alphabetic";
        Q = new createjs.Text(TEXT_PLAYER + " " + p + " " + TEXT_LOCKED, "30px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        Q.x = a;
        Q.y = b - 90;
        Q.textAlign = m.textAlign;
        Q.lineWidth = m.lineWidth;
        Q.textBaseline = m.textBaseline;
        A.addChild(B, m, Q);
        y = new CGfxButton(CANVAS_WIDTH_HALF, CANVAS_HEIGHT_HALF + 100, s_oSpriteLibrary.getSprite("but_continue"),
            A);
        y.addEventListener(ON_MOUSE_UP, this._onLockedContinue, this);
        A.alpha = 0
    };
    this._initDominoText = function() {
        var a = CANVAS_WIDTH_HALF,
            b = CANVAS_HEIGHT_HALF + W;
        w = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        w.regX = 308;
        w.regY = 308.5;
        w.scaleX = w.scaleY = .5;
        w.x = a;
        w.y = b;
        O = new createjs.Text(TEXT_PLAYER + " " + p + " " + TEXT_DOMINO, "30px " + PRIMARY_FONT, SECONDARY_FONT_COLOUR);
        O.x = a + 2;
        O.y = b - 88;
        O.textAlign = "center";
        O.lineWidth = 200;
        O.textBaseline = "alphabetic";
        M = new createjs.Text(TEXT_PLAYER + " " + p + " " + TEXT_DOMINO, "30px " +
            PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        M.x = a;
        M.y = b - 90;
        M.textAlign = O.textAlign;
        M.lineWidth = O.lineWidth;
        M.textBaseline = O.textBaseline;
        J.addChild(w, O, M);
        ba = new CGfxButton(CANVAS_WIDTH_HALF, CANVAS_HEIGHT_HALF + 100, s_oSpriteLibrary.getSprite("but_continue"), J);
        ba.addEventListener(ON_MOUSE_UP, this._onDominoContinue, this);
        J.alpha = 0
    };
    this._initPlayersAndTiles = function() {
        for (var a = 0; a < r; a++) G[a] = new CPlayer(a, H[a]);
        L = new createjs.Container;
        L.x = CANVAS_WIDTH_HALF;
        L.y = CANVAS_HEIGHT_HALF + W;
        s_oStage.addChild(L);
        for (a =
            0; a < TILES_NUMBER; a++) {
            var b = new CTile(L, a, NO_PLAYER, 0, 0);
            Z.push(b)
        }
        shuffle(Z);
        for (a = b = 0; a < r * INITIAL_TILES; a++) G[b].addTile(Z[a]), b++, b >= r && (b = 0);
        for (a = 0; a < r; a++)
            for (b = 0; b < INITIAL_TILES; b++) G[a].setTileVisible(b, !1);
        for (a = 0; a < TILES_NUMBER; a++) Z[a].setVisible(!1);
        Z = null;
        L.x = CANVAS_WIDTH_HALF;
        L.y = CANVAS_HEIGHT_HALF;
        L.regX = CANVAS_WIDTH_HALF / 2;
        L.regY = CANVAS_HEIGHT_HALF / 2 + W
    };
    this.unload = function() {
        ha.unload();
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren();
        s_oGame = null
    };
    this.onExit = function() {
        s_oGame.unload();
        s_oMain.gotoMenu();
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("show_interlevel_ad")
    };
    this.restart = function() {
        this.unload();
        s_oMain.gotoGame(r, n);
        $(s_oMain).trigger("restart_level", 1);
        s_oStage.update();
        l = !1
    };
    this._onExitHelp = function() {
        c = !0;
        FIRST_GAME = !1;
        s_oBox.openTileBox()
    };
    this._gameOver = function() {
        c = !1;
        null === aa && (playSound("game_over", 1, 0), this.showEndPanel())
    };
    this._checkWin = function() {
        l && (playSound("game_win", 1, 0), H[0] > s_aBestScore && (s_aBestScore = H[0], setItemJson("classicdomino_best_score",
            H[0])), this.showEndPanel())
    };
    this.showEndPanel = function() {
        aa = new CEndPanel(r, K, I);
        A.visible = !1;
        J.visible = !1;
        $(s_oMain).trigger("share_event", H[0]);
        $(s_oMain).trigger("save_score", H[0])
    };
    this.checkDrawned = function() {
        return k
    };
    this.setGlowVisibleFalse = function() {
        if (!(0 < p) && f && null === s_oBox)
            for (var a = G[0].getTilesArray(), b = 0; b < a.length; b++) a[b].setGlowVisible(!1)
    };
    this.setGlowVisibleTrue = function() {
        if (!(0 < p) && f && null === s_oBox)
            for (var a = G[0].getTilesArray(), b = 0; b < a.length; b++) {
                var c = a[b];
                c.setGlowVisible(!1);
                if (c.getDotsValue(0) === q || c.getDotsValue(0) === x || c.getDotsValue(1) === q || c.getDotsValue(1) === x) s_bGlowActive && c.setGlowVisible(!0), da.push(c)
            }
    };
    this.checkToDrawn = function() {
        k = !0;
        da = [];
        this.setGlowVisibleTrue();
        0 === da.length ? (k = !1, !1 === G[0].getLocked() && G[0].setLocked(!0), this.passTurn()) : (k = !1, !0 === G[0].getLocked() && G[0].setLocked(!1))
    };
    this.cpuDrawTile = function() {
        k = !0;
        for (var a = G[p].getTilesArray(), b = [], c = 0; c < a.length; c++) {
            var d = a[c];
            d.getDotsValue(0) !== q && d.getDotsValue(0) !== x && d.getDotsValue(1) !==
                q && d.getDotsValue(1) !== x || b.push(d)
        }
        0 === b.length ? (!1 === G[p].getLocked() && G[p].setLocked(!0), this.passTurn()) : (G[p].setLocked(!1), this.sortTilesByValue(b), this.checkClickedTile(b[0]), k = !1)
    };
    this.sortTilesByValue = function(a) {
        a.sort(function(a, b) {
            return a.getDotsValue(0) + a.getDotsValue(1) < b.getDotsValue(0) + b.getDotsValue(1) ? -1 : a.getDotsValue(0) + a.getDotsValue(1) > b.getDotsValue(0) + b.getDotsValue(1) ? 1 : 0
        })
    };
    this.passTurn = function() {
        k = !1;
        var a = p + 1;
        m.text = TEXT_PLAYER + " " + a + " " + TEXT_LOCKED;
        Q.text = TEXT_PLAYER +
            " " + a + " " + TEXT_LOCKED;
        (new createjs.Tween.get(A)).to({
            alpha: 1
        }, 500, createjs.Ease.cubicIn);
        playSound("locked", 1, 0)
    };
    this._selectTileSide = function(a) {
        U = a;
        t = !0;
        N.visible = !0;
        N.alpha = 0;
        createjs.Tween.get(N).to({
            alpha: 1
        }, 500, createjs.Ease.cubicIn).call(function() {
            createjs.Tween.removeTweens(N)
        });
        a.setDrawn()
    };
    this._onSelectedSide = function(a) {
        if (t) {
            k = !0;
            createjs.Tween.get(N).to({
                alpha: 0
            }, 500, createjs.Ease.cubicIn).call(function() {
                N.visible = !1;
                createjs.Tween.removeTweens(N)
            });
            t = !1;
            if (a === LEFT_SIDE) {
                if (!1 ===
                    U.isDouble()) {
                    var b = -90;
                    U.getDotsValue(0) === q && (b = 90)
                } else b = 0;
                a = SIDE_LEFT_ATTACH
            } else !1 === U.isDouble() ? (b = 90, U.getDotsValue(0) === x && (b = -90)) : b = 0, a = SIDE_RIGHT_ATTACH;
            this.moveToBoard(U, b, a);
            U = null
        }
    };
    this.checkIfBothSidesCanBeAttached = function(a) {
        if (a.getDotsValue(0) === q && a.getDotsValue(1) === x && (a.getDotsValue(0) === q || a.getDotsValue(1) === x) || a.getDotsValue(1) === q && a.getDotsValue(0) === x && (a.getDotsValue(1) === q || a.getDotsValue(0) === x) || q === x) return !0;
        if (a.getDotsValue(0) !== q && a.getDotsValue(1) !== x) return !1;
        a.getDotsValue(1) !== q && a.getDotsValue(0);
        return !1
    };
    this.checkClickedTile = function(a) {
        if (!t)
            if (!0 === h)
                if (0 === p)
                    if (a.isPlayerTile()) {
                        a.setDrawn();
                        k = !0;
                        var b = 90;
                        !0 === a.isDouble() && (b = 0);
                        this.moveToBoard(a, b, CENTER_ATTACH)
                    } else this.callShake(a.getTile());
        else a.setDrawn(), k = !0, b = 90, !0 === a.isDouble() && (b = 0), this.moveToBoard(a, b, CENTER_ATTACH);
        else !1 === h && (0 === p && !0 === this.checkIfBothSidesCanBeAttached(a) ? this._selectTileSide(a) : a.getDotsValue(0) === q || a.getDotsValue(1) === q ? (a.setDrawn(), k = !0, !1 === a.isDouble() ?
            (b = -90, a.getDotsValue(0) === q && (b = 90)) : b = 0, this.moveToBoard(a, b, SIDE_LEFT_ATTACH)) : a.getDotsValue(0) === x || a.getDotsValue(1) === x ? (a.setDrawn(), k = !0, !1 === a.isDouble() ? (b = 90, a.getDotsValue(0) === x && (b = -90)) : b = 0, this.moveToBoard(a, b, SIDE_RIGHT_ATTACH)) : this.callShake(a.getTile()))
    };
    this.callShake = function(a) {
        playSound("wrong", 1, 0);
        new CShake(a, 300, 1, 5)
    };
    this.moveToBoard = function(a, b, c) {
        var d = a.getValue(),
            f = G[p].getContainer().localToLocal(a.getX(), a.getY(), L);
        d = new CTile(L, d, p, f.x, f.y);
        playSound("select",
            1, 0);
        !1 === d.isTurned() && (0 === p ? d.turnTileInvisible() : d.turnTile());
        a.unload();
        G[p].removeTile(a);
        f = CANVAS_WIDTH_HALF / 2;
        var e = CANVAS_HEIGHT_HALF / 2 + 2 * W,
            g = TILE_WIDTH / 4.5;
        switch (c) {
            case CENTER_ATTACH:
                C = E = d;
                q = d.getDotsValue(0);
                x = d.getDotsValue(1);
                this.startTileMovement(d, f, e, b);
                break;
            case SIDE_LEFT_ATTACH:
                c = a.isDouble() || C.isDouble() ? Y : V;
                q = 0 < b ? d.getDotsValue(1) : d.getDotsValue(0);
                z < DRAWNTILES_LIMIT1 ? (f = C.getX() - c, e = C.getY()) : z === DRAWNTILES_LIMIT1 - 1 ? (f = C.getX(), e = C.getY() - c, !1 === a.isDouble() && (b += 90)) : z ===
                    DRAWNTILES_LIMIT1 ? (f = C.getX(), a.isDouble() || C.isDouble() ? a.isDouble() && C.isDouble() ? (f -= g, e = C.getY() - 1.25 * c) : a.isDouble() ? (f -= 1.1 * g, e = C.getY() - .7 * c) : e = C.getY() - 1.3 * c : (f -= g, e = C.getY() - .8 * c), b += 90) : z < DRAWNTILES_LIMIT2 ? (f = C.getX(), e = C.getY() - c, b += 90) : z === DRAWNTILES_LIMIT2 - 1 ? (f = C.getX() + c, e = C.getY(), !1 === a.isDouble() && (b += 180)) : z === DRAWNTILES_LIMIT2 ? (e = C.getY(), a.isDouble() || C.isDouble() ? a.isDouble() && C.isDouble() ? (f = C.getY() + 1.25 * c, e -= g) : a.isDouble() ? (f = C.getX() + .7 * c, e -= 1.1 * g) : f = C.getX() + 1.3 * c : (f = C.getX() +
                        .8 * c, e -= g), b += 180) : z >= DRAWNTILES_LIMIT3 ? (f = C.getX(), e = C.getY() + 3.2 * g, b += 180) : (b += 180, f = C.getX() + c, e = C.getY());
                C = d;
                z += 1;
                this.startTileMovement(d, f, e, b);
                break;
            case SIDE_RIGHT_ATTACH:
                c = a.isDouble() || E.isDouble() ? Y : V, x = 0 < b ? d.getDotsValue(0) : d.getDotsValue(1), v < DRAWNTILES_LIMIT1 ? (f = E.getX() + c, e = E.getY()) : v === DRAWNTILES_LIMIT1 - 1 ? (f = E.getX(), e = E.getY() + c, !1 === a.isDouble() && (b += 90)) : v === DRAWNTILES_LIMIT1 ? (f = E.getX(), a.isDouble() || E.isDouble() ? a.isDouble() && E.isDouble() ? (f += g, e = E.getY() + 1.25 * c) : a.isDouble() ?
                        (f += 1.1 * g, e = E.getY() + .7 * c) : e = E.getY() + 1.3 * c : (f += g, e = E.getY() + .8 * c), b += 90) : v < DRAWNTILES_LIMIT2 ? (f = E.getX(), e = E.getY() + c, b += 90) : v === DRAWNTILES_LIMIT2 - 1 ? (f = E.getX() - c, e = E.getY(), !1 === a.isDouble() && (b += 180)) : v === DRAWNTILES_LIMIT2 ? (e = E.getY(), a.isDouble() || E.isDouble() ? a.isDouble() && E.isDouble() ? (f = E.getY() - 1.25 * c, e -= g) : a.isDouble() ? (f = E.getX() - .7 * c, e += 1.1 * g) : f = E.getX() - 1.3 * c : (f = E.getX() - .8 * c, e += g), b += 180) : v >= DRAWNTILES_LIMIT3 ? (f = C.getX(), e = C.getY() - 3.2 * g, b += 180) : (b += 180, f = E.getX() - c, e = E.getY()), E = d, v +=
                    1, this.startTileMovement(d, f, e, b)
        }
    };
    this.zoomCamera = function() {
        F > TILE_SCALE_LIMIT && (F -= TILE_SCALE_VAR);
        (new createjs.Tween(T)).to({
            scaleX: F,
            scaleY: F
        }, 1E3, createjs.Ease.cubicInOut);
        (new createjs.Tween(L)).to({
            scaleX: F,
            scaleY: F
        }, 1E3, createjs.Ease.cubicInOut)
    };
    this.startTileMovement = function(a, b, c, d) {
        var f = a.getTile();
        a.setPlayerTile(!1);
        L.setChildIndex(f, L.numChildren - 1);
        a = 1 - F;
        f.scaleX += a;
        f.scaleY += a;
        (new createjs.Tween(f)).to({
            x: b,
            y: c,
            rotation: d,
            scaleX: TILE_INIT_SCALE,
            scaleY: TILE_INIT_SCALE
        }, 750, createjs.Ease.cubicIn).call(function() {
            playSound("tile",
                .2, 0);
            0 === b && 0 === c || s_oGame.zoomCamera();
            s_oGame.checkAfterTileMoved()
        })
    };
    this.checkAfterTileMoved = function() {
        !0 === s_oGame.checkForDomino(p) ? (u = !0, c = !1, s_oGame.showDominoText()) : (G[p].arrangeTiles(), s_oGame.changeTurn())
    };
    this.checkFirstTile = function() {
        f = !0;
        for (var a, b = 0, c, d = 0; d < r; d++)
            for (var e = G[d].getTilesArray(), g = 0; g < e.length; g++) {
                var h = e[g].getDotsValue(0) + e[g].getDotsValue(1);
                h >= b && e[g].isDouble() && (b = e[g].getDotsValue(0) + e[g].getDotsValue(1), c = g, a = d)
            }
        if (0 === b)
            for (d = 0; d < r; d++)
                for (e = G[d].getTilesArray(),
                    g = 0; g < e.length; g++) h = e[g].getDotsValue(0) + e[g].getDotsValue(1), h >= b && (b = e[g].getDotsValue(0) + e[g].getDotsValue(1), c = g, a = d);
        p = a;
        e = G[a].getTilesArray();
        b = e[c];
        0 === a ? (s_bGlowActive && b.setGlowVisible(!0), S.visible = !1) : 0 < a && this.checkClickedTile(b);
        G[p].setTurn(!0);
        this.setTurnVisibility()
    };
    this._checkGame = function() {
        if (!0 !== d) {
            !0 === h && (h = !1);
            if (!k)
                if (0 === p) S.visible = !1, s_oGame.checkToDrawn();
                else {
                    S.visible = !0;
                    if (!0 === u) return;
                    s_oGame.cpuDrawTile()
                }!1 === u && s_oGame.checkLockedPlayers()
        }
    };
    this.checkForDomino =
        function(a) {
            return 0 === G[a].getTilesArray().length ? !0 : !1
        };
    this.showDominoText = function() {
        for (var a = 0; a < r; a++)
            for (var b = G[a].getTilesArray(), c = 0; c < b.length; c++) {
                var d = b[c];
                0 < a && d.turnTile()
            }
        a = p + 1;
        O.text = TEXT_PLAYER + " " + a + " " + TEXT_DOMINO;
        M.text = TEXT_PLAYER + " " + a + " " + TEXT_DOMINO;
        (new createjs.Tween.get(J)).to({
            alpha: 1
        }, 500, createjs.Ease.cubicIn);
        playSound("domino", 1, 0)
    };
    this._onLockedContinue = function() {
        1 > A.alpha || (!1 === d ? (new createjs.Tween.get(A)).to({
                alpha: 0
            }, 500, createjs.Ease.cubicIn).call(s_oGame.changeTurn) :
            (s_oGame.getMatchWinnerScore(), s_oGame.matchOver()))
    };
    this._onDominoContinue = function() {
        if (!(1 > J.alpha)) {
            for (var a = 0; a < r; a++) I = a !== p ? I + s_oGame.totalTilesValue(a) : I - s_oGame.totalTilesValue(a);
            K = p;
            s_oGame.matchOver()
        }
    };
    this.checkLockedPlayers = function() {
        for (var a = 0; a < r; a++) !1 === s_oGame.checkForDomino(a) && (!0 === G[a].getLocked() ? R[a] = !0 : R[a] = !1, this.checkLockedMatch())
    };
    this.checkLockedMatch = function() {
        2 === r ? d = !0 === R[0] && !0 === R[1] ? !0 : !1 : 3 === r ? d = !0 === R[0] && !0 === R[1] && !0 === R[2] ? !0 : !1 : 4 === r && (d = !0 === R[0] &&
            !0 === R[1] && !0 === R[2] && !0 === R[3] ? !0 : !1)
    };
    this.totalTilesValue = function(a) {
        for (var b = G[a].getTilesArray(), c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            0 < a && e.turnTile();
            c += e.getDotsValue(0) + e.getDotsValue(1)
        }
        return c
    };
    this.getMatchWinnerScore = function(a) {
        if (!g) {
            a = [];
            for (var b = 0; b < r; b++) {
                var c = s_oGame.totalTilesValue(b);
                a[b] = [b, c]
            }
            a.sort(function(a, b) {
                var c = a[1];
                var d = b[1];
                return c < d ? -1 : c > d ? 1 : 0
            });
            for (b = 1; b < a.length; b++) I += a[b][1];
            I -= a[0][1];
            K = a[0][0]
        }
    };
    this.lockedMatch = function() {
        s_oGame.getMatchWinnerScore();
        g = !0
    };
    this.resetScore = function(a) {
        switch (a) {
            case 2:
                s_aPlayersScore2 = [0, 0];
                setItemJson("classicdomino_scores2", s_aPlayersScore2);
                H = s_aPlayersScore2;
                break;
            case 3:
                s_aPlayersScore3 = [0, 0, 0];
                setItemJson("classicdomino_scores3", s_aPlayersScore3);
                H = s_aPlayersScore3;
                break;
            case 4:
                s_aPlayersScore4 = [0, 0, 0, 0], setItemJson("classicdomino_scores4", s_aPlayersScore4), H = s_aPlayersScore4
        }
    };
    this.saveScore = function() {
        switch (r) {
            case 2:
                setItemJson("classicdomino_scores2", H);
                for (var a = 0; a < H.length; a++) s_aPlayersScore2[a] =
                    H[a];
                break;
            case 3:
                setItemJson("classicdomino_scores3", H);
                for (a = 0; a < H.length; a++) s_aPlayersScore3[a] = H[a];
                break;
            case 4:
                for (setItemJson("classicdomino_scores4", H), a = 0; a < H.length; a++) s_aPlayersScore4[a] = H[a]
        }
    };
    this.matchOver = function() {
        H[K] += I;
        this.saveScore();
        this.checkForWinner()
    };
    this.checkForWinner = function() {
        for (var a = !1, b = 0; b < r; b++) H[b] >= WIN_SCORE[n] && (a = !0, 0 === b ? (l = !0, this._checkWin()) : this._gameOver());
        !1 === a && this.matchOverScreen()
    };
    this.matchOverScreen = function() {
        c = !1;
        null === X && (playSound("match_over",
            1, 0), X = new CMatchOver(r, K, I), A.visible = !1, J.visible = !1)
    };
    this.checkBoard = function() {
        var a = new createjs.Shape;
        a.graphics.beginFill("rgba(0,0,0,0.4)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        a.on("click", s_oGame.returnToEndPanel, s_oGame, !0, a);
        s_oStage.addChild(a);
        X.hide()
    };
    this.returnToEndPanel = function(a, b) {
        s_oStage.removeChild(b);
        X.show()
    };
    this.getScore = function(a) {
        return H[a]
    };
    this.setValueSide1 = function(a) {
        q = a
    };
    this.setValueSide2 = function(a) {
        x = a
    };
    this.getValueSide1 = function() {
        return q
    };
    this.getValueSide2 =
        function() {
            return x
        };
    this.getTurn = function() {
        return p
    };
    this.gameReady = function() {
        return f
    };
    this.setTurnVisibility = function() {
        for (var a = 0; a < r; a++) a === p ? G[a].setTurn(!0) : G[a].setTurn(!1)
    };
    this.changeTurn = function() {
        k = !1;
        p += 1;
        p >= r && (p = 0);
        s_oGame.setTurnVisibility();
        if (0 !== p)
            for (var a = G[0].getTilesArray(), b = 0; b < a.length; b++) a[b].setGlowVisible(!1);
        s_oGame._checkGame()
    };
    this.update = function() {
        c && d && !g && (D += s_iTimeElaps, D > MATCHOVER_TIMER && !0 !== u && (c = !1, D = 0, this.lockedMatch()))
    };
    s_oGame = this;
    this._init()
}
var s_oGame;

function CTextButton(a, e, b, c, f, l, d, g) {
    var h, k, u, t, r, n, p;
    this._init = function(a, b, c, d, e, f, g, l) {
        h = [];
        k = [];
        u = [];
        e = createBitmap(c);
        r = new createjs.Text(d, g + "px " + PRIMARY_FONT, f);
        r.textAlign = "center";
        r.textBaseline = "alphabetic";
        d = r.getBounds();
        r.x = c.width / 2;
        r.y = Math.floor(c.height / 2) + d.height / 3;
        t = new createjs.Container;
        t.x = a;
        t.y = b;
        t.regX = c.width / 2;
        t.regY = c.height / 2;
        t.addChild(e, r);
        l.addChild(t);
        s_bMobile || (t.cursor = "pointer");
        this._initListener()
    };
    this.unload = function() {
        t.off("mousedown", n);
        t.off("pressup",
            p);
        g.removeChild(t)
    };
    this.setVisible = function(a) {
        t.visible = a
    };
    this._initListener = function() {
        oParent = this;
        n = t.on("mousedown", this.buttonDown);
        p = t.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        k[a] = b;
        u[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, d) {
        k[a] = b;
        u[a] = c;
        h[a] = d
    };
    this.buttonRelease = function() {
        t.scaleX = 1;
        t.scaleY = 1;
        playSound("click", 1, 0);
        k[ON_MOUSE_UP] && k[ON_MOUSE_UP].call(u[ON_MOUSE_UP], h[ON_MOUSE_UP])
    };
    this.buttonDown = function() {
        t.scaleX = .9;
        t.scaleY = .9;
        k[ON_MOUSE_DOWN] &&
            k[ON_MOUSE_DOWN].call(u[ON_MOUSE_DOWN], h[ON_MOUSE_DOWN])
    };
    this.setTextPosition = function(a) {
        r.y = a
    };
    this.setPosition = function(a, b) {
        t.x = a;
        t.y = b
    };
    this.setX = function(a) {
        t.x = a
    };
    this.setY = function(a) {
        t.y = a
    };
    this.getButtonImage = function() {
        return t
    };
    this.getX = function() {
        return t.x
    };
    this.getY = function() {
        return t.y
    };
    this._init(a, e, b, c, f, l, d, g);
    return this
}

function CToggle(a, e, b, c, f) {
    var l, d, g, h, k, u, t;
    this._init = function(a, b, c, e, f) {
        k = void 0 !== f ? f : s_oStage;
        d = [];
        g = [];
        f = new createjs.SpriteSheet({
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
        l = e;
        h = createSprite(f, "state_" + l, c.width / 2 / 2, c.height / 2, c.width / 2, c.height);
        h.x = a;
        h.y = b;
        h.stop();
        s_bMobile || (h.cursor = "pointer");
        k.addChild(h);
        this._initListener()
    };
    this.unload = function() {
        h.off("mousedown", u);
        h.off("pressup", t);
        k.removeChild(h)
    };
    this._initListener = function() {
        u = h.on("mousedown", this.buttonDown);
        t = h.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        d[a] = b;
        g[a] = c
    };
    this.setCursorType = function(a) {
        h.cursor = a
    };
    this.setActive = function(a) {
        l = a;
        h.gotoAndStop("state_" + l)
    };
    this.buttonRelease = function() {
        h.scaleX = 1;
        h.scaleY = 1;
        playSound("click", 1, 0);
        l = !l;
        h.gotoAndStop("state_" + l);
        d[ON_MOUSE_UP] && d[ON_MOUSE_UP].call(g[ON_MOUSE_UP], l)
    };
    this.buttonDown = function() {
        h.scaleX = .9;
        h.scaleY = .9;
        d[ON_MOUSE_DOWN] && d[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN])
    };
    this.setPosition = function(a, b) {
        h.x = a;
        h.y = b
    };
    this._init(a, e, b, c, f)
}

function CGfxButton(a, e, b, c) {
    var f, l, d, g, h, k, u, t, r;
    this._init = function(a, b, c) {
        f = !1;
        l = [];
        d = [];
        h = [];
        g = createBitmap(c);
        g.x = a;
        g.y = b;
        u = k = 1;
        g.regX = c.width / 2;
        g.regY = c.height / 2;
        s_bMobile || (g.cursor = "pointer");
        n.addChild(g);
        this._initListener()
    };
    this.getSprite = function() {
        return g
    };
    this.unload = function() {
        g.off("mousedown", t);
        g.off("pressup", r);
        n.removeChild(g)
    };
    this.setVisible = function(a) {
        g.visible = a
    };
    this.setCursorType = function(a) {
        g.cursor = a
    };
    this._initListener = function() {
        t = g.on("mousedown", this.buttonDown);
        r = g.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        l[a] = b;
        d[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, e) {
        l[a] = b;
        d[a] = c;
        h[a] = e
    };
    this.enable = function() {
        f = !1
    };
    this.disable = function() {
        f = !0
    };
    this.buttonRelease = function() {
        f || (g.scaleX = 0 < k ? 1 : -1, g.scaleY = 1, playSound("click", 1, 0), l[ON_MOUSE_UP] && l[ON_MOUSE_UP].call(d[ON_MOUSE_UP], h[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        f || (g.scaleX = 0 < k ? .9 : -.9, g.scaleY = .9, l[ON_MOUSE_DOWN] && l[ON_MOUSE_DOWN].call(d[ON_MOUSE_DOWN], h[ON_MOUSE_DOWN]))
    };
    this.rotation = function(a) {
        g.rotation = a
    };
    this.getButton = function() {
        return g
    };
    this.setPosition = function(a, b) {
        g.x = a;
        g.y = b
    };
    this.setX = function(a) {
        g.x = a
    };
    this.setY = function(a) {
        g.y = a
    };
    this.getButtonImage = function() {
        return g
    };
    this.setScaleX = function(a) {
        k = g.scaleX = a
    };
    this.getX = function() {
        return g.x
    };
    this.getY = function() {
        return g.y
    };
    this.pulseAnimation = function() {
        createjs.Tween.get(g).to({
            scaleX: .9 * k,
            scaleY: .9 * u
        }, 850, createjs.Ease.quadOut).to({
            scaleX: k,
            scaleY: u
        }, 650, createjs.Ease.quadIn).call(function() {
            p.pulseAnimation()
        })
    };
    this.trebleAnimation = function() {
        createjs.Tween.get(g).to({
            rotation: 5
        }, 75, createjs.Ease.quadOut).to({
            rotation: -5
        }, 140, createjs.Ease.quadIn).to({
            rotation: 0
        }, 75, createjs.Ease.quadIn).wait(750).call(function() {
            p.trebleAnimation()
        })
    };
    this.removeAllTweens = function() {
        createjs.Tween.removeTweens(g)
    };
    var n = void 0 !== c ? c : s_oStage;
    this._init(a, e, b);
    var p = this;
    return this
}

function CInterface() {
    var a, e, b, c, f, l, d, g, h, k, u = null,
        t = null,
        r, n, p, q, x;
    this._init = function() {
        var z = s_oSpriteLibrary.getSprite("but_exit");
        b = CANVAS_WIDTH - z.width / 2 - 20;
        c = z.height / 2 + 10;
        q = new CGfxButton(b, c, z, s_oStage);
        q.addEventListener(ON_MOUSE_UP, this._onExit, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) {
            var v = s_oSpriteLibrary.getSprite("audio_icon");
            h = b - z.width / 2 - v.width / 4;
            k = c;
            r = new CToggle(h, k, v, s_bAudioActive, s_oStage);
            r.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
            f = 20 + v.width / 4;
            l = v.height / 2 + 10;
            a = h - v.width / 2;
            e = k;
            v = s_oSpriteLibrary.getSprite("but_hint");
            d = a - z.width / 2 - v.width / 4;
            g = e;
            n = new CToggle(d, g, v, s_bGlowActive, s_oStage);
            n.addEventListener(ON_MOUSE_UP, this._onGlowToggle, this)
        } else f = b - z.width - 10, l = c, a = f, e = l, d = a - z.width / 2 - v.width / 4, g = e;
        z = window.document;
        v = z.documentElement;
        u = v.requestFullscreen || v.mozRequestFullScreen || v.webkitRequestFullScreen || v.msRequestFullscreen;
        t = z.exitFullscreen || z.mozCancelFullScreen || z.webkitExitFullscreen || z.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN &&
            (u = !1);
        u && screenfull.enabled && (v = s_oSpriteLibrary.getSprite("but_fullscreen"), p = new CToggle(f, l, v, s_bFullscreen, s_oStage), p.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        x = new CGfxButton(a, e, s_oSpriteLibrary.getSprite("but_restart_small"), s_oStage);
        x.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(t, v) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || r.setPosition(h - t, k + v);
        u && screenfull.enabled && p.setPosition(f -
            t, l + v);
        n.setPosition(d - t, g + v);
        q.setPosition(b - t, c + v);
        x.setPosition(a - t, e + v)
    };
    this.unload = function() {
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) r.unload(), r = null;
        u && screenfull.enabled && p.unload();
        n.unload();
        x.unload();
        q.unload();
        s_oInterface = null;
        s_oGame._bDisableEvents = !1
    };
    this.gameOver = function(a) {
        new CEndPanel(a)
    };
    this.showWin = function(a, b) {
        new CWinPanel(a, b)
    };
    this._onExit = function() {
        new CAreYouSurePanel(s_oStage);
        s_oGame._bDisableEvents = !0
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onGlowToggle = function() {
        s_bGlowActive = !s_bGlowActive;
        !0 === s_bGlowActive ? s_oGame.setGlowVisibleTrue() : s_oGame.setGlowVisibleFalse()
    };
    this.resetFullscreenBut = function() {
        u && screenfull.enabled && p.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? t.call(window.document) : u.call(window.document.documentElement);
        sizeHandler()
    };
    this._onRestart = function() {
        s_oGame.restart()
    };
    s_oInterface = this;
    this._init();
    return this
}
var s_oInterface = null;

function CCreditsPanel() {
    var a, e, b, c, f, l, d, g, h;
    this._init = function() {
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha = 0;
        s_oStage.addChild(f);
        (new createjs.Tween.get(f)).to({
            alpha: .7
        }, 500);
        var k = s_oSpriteLibrary.getSprite("msg_box2");
        g = new createjs.Container;
        g.y = CANVAS_HEIGHT + k.height / 2;
        s_oStage.addChild(g);
        a = createBitmap(k);
        a.regX = k.width / 2;
        a.regY = k.height / 2;
        a.x = CANVAS_WIDTH / 2;
        a.y = CANVAS_HEIGHT / 2;
        g.addChild(a);
        l = new createjs.Shape;
        l.graphics.beginFill("#0f0f0f").drawRect(0,
            0, CANVAS_WIDTH, CANVAS_HEIGHT);
        l.alpha = .01;
        h = l.on("click", this._onLogoButRelease);
        g.addChild(l);
        k = s_oSpriteLibrary.getSprite("but_exit");
        b = new CGfxButton(620, 570, k, g);
        b.addEventListener(ON_MOUSE_UP, this.unload, this);
        c = new createjs.Text(TEXT_CREDITS_DEVELOPED, "40px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        c.textAlign = "center";
        c.textBaseline = "alphabetic";
        c.x = CANVAS_WIDTH_HALF;
        c.y = CANVAS_HEIGHT_HALF - 80;
        g.addChild(c);
        k = s_oSpriteLibrary.getSprite("logo_ctl");
        e = createBitmap(k);
        e.regX = k.width / 2;
        e.regY = k.height /
            2;
        e.x = CANVAS_WIDTH_HALF;
        e.y = CANVAS_HEIGHT_HALF;
        g.addChild(e);
        d = new createjs.Text("www.codethislab.com", "34px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        d.textAlign = "center";
        d.textBaseline = "alphabetic";
        d.x = CANVAS_WIDTH_HALF;
        d.y = CANVAS_HEIGHT_HALF + 100;
        g.addChild(d);
        (new createjs.Tween.get(g)).to({
            y: 0
        }, 1E3, createjs.Ease.backOut);
        s_bMobile || (g.cursor = "pointer")
    };
    this.unload = function() {
        l.off("click", h);
        b.unload();
        b = null;
        s_oStage.removeChild(f);
        s_oStage.removeChild(g);
        s_oMenu.exitFromCredits()
    };
    this._onLogoButRelease =
        function() {
            window.open("http://www.codethislab.com/index.php?&l=en", "_blank")
        };
    this._init()
}

function CPlayer(a, e) {
    var b, c, f, l, d, g, h, k, u, t, r;
    this._init = function() {
        c = e;
        b = a;
        f = .55 * TILE_WIDTH;
        l = .35 * TILE_HEIGHT;
        d = [];
        r = t = !1;
        g = new createjs.Container;
        s_oStage.addChild(g);
        this._initPlayerText();
        this._initScoreText();
        this._initLock()
    };
    this._initPlayerText = function() {
        h = new createjs.Text(TEXT_PLAYER + " " + (1 + b), "20px " + PRIMARY_FONT, THIRD_FONT_COLOUR);
        h.rotation = PLAYER_ROTATION[b];
        h.textAlign = "center";
        h.lineWidth = 440;
        h.textBaseline = "middle";
        h.x = PLAYER_TEXT_COORDINATES[b][0];
        h.y = PLAYER_TEXT_COORDINATES[b][1];
        h.rotation = PLAYER_ROTATION[b];
        s_oStage.addChild(h)
    };
    this._initScoreText = function() {
        k = new createjs.Text(c + " " + TEXT_PTS, "20px " + PRIMARY_FONT, THIRD_FONT_COLOUR);
        k.rotation = PLAYER_ROTATION[b];
        k.textAlign = "center";
        k.lineWidth = 440;
        k.textBaseline = "middle";
        k.x = PLAYER_SCORE_COORDINATES[b][0];
        k.y = PLAYER_SCORE_COORDINATES[b][1];
        k.rotation = PLAYER_ROTATION[b];
        s_oStage.addChild(k)
    };
    this._initLock = function() {
        u = createBitmap(s_oSpriteLibrary.getSprite("lock"));
        u.x = PLAYER_LOCK_POSITIONS[b][0];
        u.y = PLAYER_LOCK_POSITIONS[b][1];
        u.visible = !1;
        s_oStage.addChild(u)
    };
    this.getX = function() {
        return g.x
    };
    this.getY = function() {
        return g.y
    };
    this.setTurn = function(a) {
        !0 === a ? (h.alpha = 1, k.alpha = 1) : (h.alpha = .2, k.alpha = .2)
    };
    this.updateScoreText = function(a) {
        k.text = a + " " + TEXT_PTS
    };
    this.getTilesArray = function() {
        return d
    };
    this.getContainer = function() {
        return g
    };
    this.setTileVisible = function(a, b) {
        d[a].setVisible(b)
    };
    this.removeTile = function(a) {
        a = d.indexOf(a); - 1 < a && d.splice(a, 1)
    };
    this.setLocked = function(a) {
        t = a;
        u.visible = a
    };
    this.getLocked = function() {
        return t
    };
    this.isArrangementActive = function() {
        return r
    };
    this.addTile = function(a) {
        var c = [170, 600, 270, 0];
        a = a.getValue();
        a = new CTile(g, a, b, 0, 0);
        d.push(a);
        r = !0;
        switch (b) {
            case 0:
                a.setX(c[b] + 50 + f * d.length);
                break;
            case 1:
                a.setX(c[b] - 50 - f * d.length);
                break;
            case 2:
                a.setY(c[b] - -60 - l * d.length);
                break;
            case 3:
                a.setY(c[b] + -60 + l * d.length)
        }
        this.arrangeTiles()
    };
    this.arrangeContainer = function(a) {
        if (0 < d.length) {
            var c = g.getBounds();
            switch (b) {
                case 0:
                    g.y = PLAYER_HANDS_COORDS[b][1] - c.height / a;
                    break;
                case 1:
                    g.y = PLAYER_HANDS_COORDS[b][1] -
                        c.height / a;
                    break;
                case 2:
                    g.x = PLAYER_HANDS_COORDS[b][0];
                    g.y = PLAYER_HANDS_COORDS[b][1] - c.width / a;
                    break;
                case 3:
                    g.x = PLAYER_HANDS_COORDS[b][0], g.y = PLAYER_HANDS_COORDS[b][1] - c.width / a
            }
            r = !1
        }
    };
    this.arrangeTiles = function() {
        r = !0;
        for (var a = [260, 500, 285, -12], c = 0; c < d.length; c++) switch (b) {
            case 0:
                d[c].setX(a[b] + f * c);
                break;
            case 1:
                d[c].setX(a[b] - f * c);
                break;
            case 2:
                d[c].setY(a[b] - l * c);
                break;
            case 3:
                d[c].setY(a[b] + l * c)
        }
        this.arrangeContainer(2.5)
    };
    s_oPlayer = this;
    this._init()
}
var s_oPlayer;

function CAreYouSurePanel() {
    var a, e, b, c, f, l;
    this._init = function() {
        c = new createjs.Shape;
        c.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        c.alpha = 0;
        l = c.on("mousedown", function() {});
        s_oStage.addChild(c);
        (new createjs.Tween.get(c)).to({
            alpha: .7
        }, 500);
        f = new createjs.Container;
        s_oStage.addChild(f);
        var d = s_oSpriteLibrary.getSprite("msg_box2"),
            h = createBitmap(d);
        h.regX = d.width / 2;
        h.regY = d.height / 2;
        h.x = CANVAS_WIDTH / 2;
        h.y = CANVAS_HEIGHT / 2;
        f.addChild(h);
        f.y = CANVAS_HEIGHT + d.height / 2;
        a = f.y;
        (new createjs.Tween.get(f)).to({
            y: 0
        }, 1E3, createjs.Ease.backOut);
        d = new createjs.Text(TEXT_ARE_SURE, " 40px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT / 2 - 120;
        d.textAlign = "center";
        d.textBaseline = "middle";
        d.lineWidth = 500;
        f.addChild(d);
        e = new CGfxButton(CANVAS_WIDTH / 2 + 210, 800, s_oSpriteLibrary.getSprite("but_yes"), f);
        e.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        b = new CGfxButton(CANVAS_WIDTH / 2 - 210, 800, s_oSpriteLibrary.getSprite("but_no"), f);
        b.addEventListener(ON_MOUSE_UP,
            this._onButNo, this)
    };
    this._onButYes = function() {
        b.disable();
        e.disable();
        (new createjs.Tween.get(c)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(f)).to({
            y: a
        }, 400, createjs.Ease.backIn).call(function() {
            d.unload();
            s_oGame.onExit()
        })
    };
    this._onButNo = function() {
        b.disable();
        e.disable();
        (new createjs.Tween.get(c)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(f)).to({
            y: a
        }, 400, createjs.Ease.backIn).call(function() {
            d.unload()
        })
    };
    this.unload = function() {
        b.unload();
        e.unload();
        s_oGame._bDisableEvents = !1;
        s_oStage.removeChild(c);
        s_oStage.removeChild(f);
        c.off("mousedown", l)
    };
    var d = this;
    this._init()
}

function CHelpPanel(a) {
    var e, b, c, f, l, d, g, h, k, u, t, r = WIN_SCORE[a],
        n, p, q = null,
        x = null,
        z;
    this._init = function() {
        u = new createjs.Container;
        s_oStage.addChild(u);
        t = new createjs.Shape;
        t.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(t);
        createjs.Tween.get(t).to({
            alpha: 0
        }, 1E3).call(function() {
            t.visible = !1
        });
        var a = createBitmap(s_oSpriteLibrary.getSprite("bg_end_panel"));
        u.addChild(a);
        a = s_oSpriteLibrary.getSprite("msg_box");
        k = createBitmap(a);
        k.regX = a.width / 2;
        k.regY = a.height /
            2;
        k.x = CANVAS_WIDTH_HALF;
        k.y = CANVAS_HEIGHT_HALF;
        a = CANVAS_WIDTH_HALF;
        var D = CANVAS_HEIGHT_HALF;
        l = new createjs.Text(TEXT_HELP_TITLE, "40px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        l.textAlign = "center";
        l.lineWidth = 520;
        l.textBaseline = "middle";
        l.x = a;
        l.y = D - 200;
        d = new createjs.Text(TEXT_HELP1, "30px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        d.textAlign = "center";
        d.lineWidth = 520;
        d.textBaseline = "middle";
        d.x = a;
        d.y = D - 120;
        g = new createjs.Text(TEXT_HELP2, "30px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        g.textAlign = "center";
        g.lineWidth =
            520;
        g.textBaseline = "middle";
        g.x = a;
        g.y = D;
        h = new createjs.Text(TEXT_HELP3 + r + TEXT_HELP4, "30px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        h.textAlign = "center";
        h.lineWidth = 520;
        h.textBaseline = "middle";
        h.x = a;
        h.y = D + 150;
        u.addChild(k, l, d, g, h);
        var I = this;
        z = u.on("pressup", function() {
            I._onExitHelp()
        });
        s_oGame._bDisableEvents = !0;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) a = s_oSpriteLibrary.getSprite("audio_icon"), c = CANVAS_WIDTH - a.width / 4 - 20, f = a.height / 2 + 10, n = new CToggle(c, f, a, s_bAudioActive, s_oStage), n.addEventListener(ON_MOUSE_UP,
            this._onAudioToggle, this);
        a = window.document;
        D = a.documentElement;
        q = D.requestFullscreen || D.mozRequestFullScreen || D.webkitRequestFullScreen || D.msRequestFullscreen;
        x = a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (q = !1);
        q && screenfull.enabled && (a = s_oSpriteLibrary.getSprite("but_fullscreen"), e = 20 + a.width / 4, b = a.height / 2 + 10, p = new CToggle(e, b, a, s_bFullscreen, s_oStage), p.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        this.refreshButtonPos(s_iOffsetX,
            s_iOffsetY);
        s_bMobile || (u.cursor = "pointer")
    };
    this.unload = function() {
        s_oStage.removeChild(u);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) n.unload(), n = null;
        q && screenfull.enabled && p.unload();
        s_oGame._bDisableEvents = !1;
        u.off("pressup", z);
        s_oHelpPanel = null
    };
    this.refreshButtonPos = function(a, d) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || n.setPosition(c - a, f + d);
        q && screenfull.enabled && p.setPosition(e + a, b + d)
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut =
        function() {
            q && screenfull.enabled && p.setActive(s_bFullscreen)
        };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? x.call(window.document) : q.call(window.document.documentElement);
        sizeHandler()
    };
    this._onExitHelp = function() {
        this.unload();
        s_oGame._onExitHelp()
    };
    s_oHelpPanel = this;
    this._init()
}
var s_oHelpPanel = null;

function CEndPanel(a, e, b) {
    var c, f, l, d, g, h, k, u, t, r, n, p, q, x, z, v, D, I;
    this._init = function() {
        x = 0;
        z = a;
        v = e + 1;
        D = b;
        q = new createjs.Container;
        s_oStage.addChild(q);
        c = createBitmap(s_oSpriteLibrary.getSprite("bg_end_panel"));
        q.addChild(c);
        f = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        f.regX = 308;
        f.regY = 308.5;
        f.x = CANVAS_WIDTH_HALF;
        f.y = CANVAS_HEIGHT_HALF;
        q.addChild(f);
        g = new createjs.Text(" ", "30px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        g.textAlign = "center";
        g.textBaseline = "alphabetic";
        g.lineWidth = 500;
        g.x = CANVAS_WIDTH_HALF;
        g.y = CANVAS_HEIGHT_HALF - 200;
        q.addChild(g);
        g.text = 1 === v ? TEXT_GAMEWON : TEXT_GAMEOVER;
        h = new createjs.Text(TEXT_PLAYER + " " + v + " " + TEXT_WINS, "30px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        h.textAlign = "center";
        h.textBaseline = "alphabetic";
        h.lineWidth = 500;
        h.x = CANVAS_WIDTH_HALF;
        h.y = CANVAS_HEIGHT_HALF - 40;
        q.addChild(h);
        k = new createjs.Text(TEXT_MATCHSCORE + " " + D + " " + TEXT_PTS, "30px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        k.textAlign = "center";
        k.textBaseline = "alphabetic";
        k.lineWidth = 500;
        k.x = CANVAS_WIDTH_HALF;
        k.y = CANVAS_HEIGHT_HALF;
        q.addChild(k);
        var n = CANVAS_HEIGHT_HALF + 220;
        l = new CGfxButton(CANVAS_WIDTH / 2 - 210, n, s_oSpriteLibrary.getSprite("but_home"), q);
        l.addEventListener(ON_MOUSE_UP, this._onExit, this);
        d = new CGfxButton(CANVAS_WIDTH / 2 + 210, n, s_oSpriteLibrary.getSprite("but_restart"), q);
        d.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        q.alpha = 0;
        (new createjs.Tween.get(q)).to({
            alpha: 1
        }, 500).call(function() {
            $(s_oMain).trigger("show_interlevel_ad")
        })
    };
    this.initPage = function() {
        x++;
        1 < x && (x = 0);
        h.visible = !1;
        k.visible = !1;
        g.text = TEXT_GAMESUMMARY;
        var a = s_oGame.getScore(0),
            b = s_oGame.getScore(1);
        u = new createjs.Text(TEXT_PLAYER + " 1: " + a + " " + TEXT_PTS, "30px " + PRIMARY_FONT, SPECIAL_FONT_COLOUR);
        u.textAlign = "center";
        u.textBaseline = "alphabetic";
        u.lineWidth = 500;
        u.x = CANVAS_WIDTH_HALF;
        u.y = CANVAS_HEIGHT_HALF - 80;
        q.addChild(u);
        t = new createjs.Text(TEXT_PLAYER + " 2: " + b + " " + TEXT_PTS, "30px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        t.textAlign = "center";
        t.textBaseline = "alphabetic";
        t.lineWidth = 500;
        t.x = CANVAS_WIDTH_HALF;
        t.y = CANVAS_HEIGHT_HALF - 40;
        q.addChild(t);
        2 < z && (a =
            s_oGame.getScore(2), r = new createjs.Text(TEXT_PLAYER + " 3: " + a + " " + TEXT_PTS, "30px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR), r.textAlign = "center", r.textBaseline = "alphabetic", r.lineWidth = 500, r.x = CANVAS_WIDTH_HALF, r.y = CANVAS_HEIGHT_HALF, q.addChild(r), 3 < z && (a = s_oGame.getScore(3), n = new createjs.Text(TEXT_PLAYER + " 4: " + a + " " + TEXT_PTS, "30px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR), n.textAlign = "center", n.textBaseline = "alphabetic", n.lineWidth = 500, n.x = CANVAS_WIDTH_HALF, n.y = CANVAS_HEIGHT_HALF + 40, q.addChild(n)));
        I = void 0 ===
            I ? 0 : s_aBestScore[z];
        p = new createjs.Text(TEXT_BESTSCORE + ": " + I + " " + TEXT_PTS, "30px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        p.textAlign = "center";
        p.textBaseline = "alphabetic";
        p.lineWidth = 500;
        p.x = CANVAS_WIDTH_HALF;
        p.y = CANVAS_HEIGHT_HALF + 110;
        q.addChild(p)
    };
    this.unload = function() {
        l.unload();
        l = null;
        d.unload();
        d = null;
        s_oStage.removeChild(q)
    };
    this._onExit = function() {
        K.unload();
        s_oGame.resetScore(z);
        s_oGame.onExit()
    };
    this._onRestart = function() {
        switch (x) {
            case 0:
                this.initPage();
                break;
            case 1:
                s_oGame.resetScore(z), K.unload(),
                    s_oGame.restart()
        }
    };
    var K = this;
    this._init()
}

function CMsgBox(a, e) {
    var b, c, f;
    this._init = function(a) {
        f = new createjs.Container;
        d.addChild(f);
        a = new createjs.Shape;
        a.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        a.alpha = .5;
        a.on("click", function() {});
        f.addChild(a);
        a = s_oSpriteLibrary.getSprite("msg_box");
        var e = createBitmap(a);
        e.x = CANVAS_WIDTH_HALF;
        e.y = CANVAS_HEIGHT_HALF;
        e.regX = .5 * a.width;
        e.regY = .5 * a.height;
        f.addChild(e);
        b = new createjs.Text(TEXT_ERR_LS, "26px " + PRIMARY_FONT, "#fff");
        b.x = CANVAS_WIDTH_HALF;
        b.y = CANVAS_HEIGHT_HALF -
            190;
        b.textAlign = "center";
        b.textBaseline = "middle";
        b.lineWidth = 450;
        f.addChild(b);
        c = new CGfxButton(CANVAS_WIDTH_HALF, 840, s_oSpriteLibrary.getSprite("but_yes"), f);
        c.addEventListener(ON_MOUSE_UP, this._onButOk, this)
    };
    this._onButOk = function() {
        l.unload()
    };
    this.unload = function() {
        c.unload();
        d.removeChild(f)
    };
    var l = this;
    var d = e;
    this._init(a)
}

function CTile(a, e, b, c, f) {
    var l, d, g, h, k, u, t, r, n, p, q, x;
    this._init = function() {
        g = a;
        t = e;
        r = TILE_VALUES[e];
        q = !1;
        p = r[0] === r[1] ? !0 : !1;
        var v = s_oSpriteLibrary.getSprite("glow");
        l = createBitmap(v);
        l.scaleX = l.scaleY = TILE_INIT_SCALE;
        l.x = c;
        l.y = f;
        l.regX = v.width / 2;
        l.regY = v.height / 2;
        l.visible = !1;
        (new createjs.Tween.get(l, {
            loop: !0
        })).to({
            alpha: 0
        }, 500, createjs.Ease.quadOut).wait(500).to({
            alpha: 1
        }, 500, createjs.Ease.quadIn).wait(500);
        v = {
            images: [s_oSpriteLibrary.getSprite("tiles")],
            framerate: 0,
            frames: {
                width: TILE_WIDTH,
                height: TILE_HEIGHT,
                regX: TILE_WIDTH / 2,
                regY: TILE_HEIGHT / 2
            }
        };
        v = new createjs.SpriteSheet(v);
        d = createSprite(v, 0, TILE_WIDTH / 2, TILE_HEIGHT / 2, TILE_WIDTH, TILE_HEIGHT);
        d.rotation = PLAYER_ROTATION[b];
        d.x = c;
        d.y = f;
        d.scaleX = d.scaleY = TILE_INIT_SCALE;
        h = new createjs.Shape;
        h.graphics.beginFill("#000").drawRect(0, 0, TILE_WIDTH, TILE_HEIGHT);
        h.regX = TILE_WIDTH / 2;
        h.regY = TILE_HEIGHT / 2;
        h.x = d.x;
        h.y = d.y;
        h.scaleX = h.scaleY = TILE_INIT_SCALE;
        d.hitArea = h;
        x = !1;
        d.gotoAndStop(TILE_BACK);
        u = d.on("mouseover", this._mouseOver);
        k = d.on("mousedown",
            this._mouseDown);
        g.addChild(d);
        g.addChild(l);
        n = 0 === b ? !0 : !1
    };
    this._mouseOver = function(a) {
        !1 !== z.isClickable() && (a.target.cursor = "pointer")
    };
    this._mouseDown = function() {
        !1 !== z.isClickable() && s_oGame.checkClickedTile(z)
    };
    this.isClickable = function() {
        return s_oGame.checkDrawned() || 0 < s_oGame.getTurn() || null === d || z.getDrawn() || !s_oGame.gameReady() || !n || s_oPlayer.isArrangementActive() ? !1 : !0
    };
    this.isPlayerTile = function() {
        return n
    };
    this.setGlowVisible = function(a) {
        l.visible = a
    };
    this.setDrawn = function() {
        q = !0
    };
    this.getDrawn = function() {
        return q
    };
    this.isDouble = function() {
        return p
    };
    this.setX = function(a) {
        (new createjs.Tween.get(d)).to({
            x: a
        }, 150);
        (new createjs.Tween.get(l)).to({
            x: a
        }, 150)
    };
    this.setY = function(a) {
        (new createjs.Tween.get(d)).to({
            y: a
        }, 150);
        (new createjs.Tween.get(l)).to({
            y: a
        }, 150)
    };
    this.getX = function() {
        return d.x
    };
    this.getY = function() {
        return d.y
    };
    this.getValue = function() {
        return t
    };
    this.setVisible = function(a) {
        d.alpha = a ? 1 : .001
    };
    this.getTile = function() {
        return d
    };
    this.getGlow = function() {
        return l
    };
    this.getDotsValue =
        function(a) {
            return r[a]
        };
    this.isTurned = function() {
        return x
    };
    this.turnTile = function() {
        x = !0;
        (new createjs.Tween.get(d)).to({
            scaleX: 0
        }, 300, createjs.Ease.cubicIn).call(function() {
            d.gotoAndStop(t);
            (new createjs.Tween.get(d)).to({
                scaleX: TILE_INIT_SCALE
            }, 300, createjs.Ease.cubicOut)
        })
    };
    this.turnTileInvisible = function() {
        x = !0;
        d.gotoAndStop(t)
    };
    this.setPlayerTile = function(a) {
        n = a
    };
    this.unload = function() {
        d.off("mouseover", u);
        d.off("mousedown", k);
        l.visible = !1;
        d.visible = !1;
        l = d = null
    };
    this._init();
    var z = this
}

function CMatchOver(a, e, b) {
    var c, f, l, d, g, h, k, u, t, r, n, p, q, x, z, v, D, I, K;
    this._init = function() {
        z = 0;
        v = a;
        D = e + 1;
        I = b;
        q = new createjs.Container;
        s_oStage.addChild(q);
        c = createBitmap(s_oSpriteLibrary.getSprite("bg_end_panel"));
        q.addChild(c);
        f = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        f.regX = 308;
        f.regY = 308.5;
        f.x = CANVAS_WIDTH_HALF;
        f.y = CANVAS_HEIGHT_HALF;
        q.addChild(f);
        g = new createjs.Text(TEXT_MATCHOVER, "30px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        g.textAlign = "center";
        g.textBaseline = "alphabetic";
        g.lineWidth =
            500;
        g.x = CANVAS_WIDTH_HALF;
        g.y = CANVAS_HEIGHT_HALF - 160;
        q.addChild(g);
        h = new createjs.Text(TEXT_PLAYER + " " + D + " " + TEXT_WINS, "30px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        h.textAlign = "center";
        h.textBaseline = "alphabetic";
        h.lineWidth = 500;
        h.x = CANVAS_WIDTH_HALF;
        h.y = CANVAS_HEIGHT_HALF - 40;
        q.addChild(h);
        k = new createjs.Text(TEXT_MATCHSCORE + " " + I + " " + TEXT_PTS, "30px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        k.textAlign = "center";
        k.textBaseline = "alphabetic";
        k.lineWidth = 500;
        k.x = CANVAS_WIDTH_HALF;
        k.y = CANVAS_HEIGHT_HALF;
        q.addChild(k);
        var n = CANVAS_HEIGHT_HALF + 220;
        l = new CGfxButton(CANVAS_WIDTH / 2 - 210, n, s_oSpriteLibrary.getSprite("but_home"), q);
        l.addEventListener(ON_MOUSE_UP, this._onExit, this);
        d = new CGfxButton(CANVAS_WIDTH / 2 + 210, n, s_oSpriteLibrary.getSprite("but_continue"), q);
        d.addEventListener(ON_MOUSE_UP, this._onContinue, this);
        x = new CGfxButton(CANVAS_WIDTH / 2, n, s_oSpriteLibrary.getSprite("but_check"), q);
        x.addEventListener(ON_MOUSE_UP, s_oGame.checkBoard, s_oGame);
        q.alpha = 0;
        (new createjs.Tween.get(q)).to({
            alpha: 1
        }, 500).call(function() {
            $(s_oMain).trigger("show_interlevel_ad")
        })
    };
    this.initPage = function() {
        z++;
        1 < z && (z = 0);
        h.visible = !1;
        k.visible = !1;
        g.text = TEXT_GAMESUMMARY;
        var a = s_oGame.getScore(0),
            b = s_oGame.getScore(1);
        u = new createjs.Text(TEXT_PLAYER + " 1: " + a + " " + TEXT_PTS, "30px " + PRIMARY_FONT, SPECIAL_FONT_COLOUR);
        u.textAlign = "center";
        u.textBaseline = "alphabetic";
        u.lineWidth = 500;
        u.x = CANVAS_WIDTH_HALF;
        u.y = CANVAS_HEIGHT_HALF - 80;
        q.addChild(u);
        t = new createjs.Text(TEXT_PLAYER + " 2: " + b + " " + TEXT_PTS, "30px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        t.textAlign = "center";
        t.textBaseline = "alphabetic";
        t.lineWidth = 500;
        t.x = CANVAS_WIDTH_HALF;
        t.y = CANVAS_HEIGHT_HALF - 40;
        q.addChild(t);
        2 < v && (a = s_oGame.getScore(2), r = new createjs.Text(TEXT_PLAYER + " 3: " + a + " " + TEXT_PTS, "30px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR), r.textAlign = "center", r.textBaseline = "alphabetic", r.lineWidth = 500, r.x = CANVAS_WIDTH_HALF, r.y = CANVAS_HEIGHT_HALF, q.addChild(r), 3 < v && (a = s_oGame.getScore(3), n = new createjs.Text(TEXT_PLAYER + " 4: " + a + " " + TEXT_PTS, "30px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR), n.textAlign = "center", n.textBaseline = "alphabetic", n.lineWidth =
            500, n.x = CANVAS_WIDTH_HALF, n.y = CANVAS_HEIGHT_HALF + 40, q.addChild(n)));
        K = void 0 === K ? 0 : s_aBestScore[v];
        p = new createjs.Text(TEXT_BESTSCORE + ": " + K + " " + TEXT_PTS, "30px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        p.textAlign = "center";
        p.textBaseline = "alphabetic";
        p.lineWidth = 500;
        p.x = CANVAS_WIDTH_HALF;
        p.y = CANVAS_HEIGHT_HALF + 110;
        q.addChild(p)
    };
    this.unload = function() {
        l.unload();
        l = null;
        d.unload();
        d = null;
        x.unload();
        x = null;
        s_oStage.removeChild(q)
    };
    this._onExit = function() {
        F.unload();
        s_oGame.unload();
        s_oMain.gotoMenu()
    };
    this._onContinue =
        function() {
            switch (z) {
                case 0:
                    this.initPage();
                    break;
                case 1:
                    F.unload(), s_oGame.restart()
            }
        };
    this.hide = function() {
        q.visible = !1
    };
    this.show = function() {
        q.visible = !0
    };
    var F = this;
    this._init()
}

function CShake(a, e, b, c) {
    var f, l, d, g, h, k, u;
    this._init = function(a, b, c, e) {
        g = d = !1;
        k = 0;
        this._calculateDuration();
        f = a.x;
        l = a.y;
        d || (d = !0, h = setInterval(function() {
            t._tremble()
        }, c))
    };
    this._tremble = function() {
        if (g = !g) {
            var r = Math.random(),
                n = c *= .95,
                p = c;
            p = .5 > Math.random() ? -p : p;
            a.x += .5 > r ? -n : n;
            a.y += p
        } else a.x = f, a.y = l;
        k++;
        k > u && (k = 0, d = !1, a.x = f, a.y = l, 0 === e ? h = setInterval(function() {
            t._tremble()
        }, b) : clearInterval(h))
    };
    this._calculateDuration = function() {
        u = e / b
    };
    this.stopTremble = function() {
        clearInterval(h)
    };
    var t = this;
    this._init(a, e, b, c)
}

function CRestartMenu(a, e) {
    var b, c, f, l, d, g, h, k, u, t, r, n, p, q, x = null,
        z = null,
        v, D, I;
    this._init = function() {
        v = a;
        D = e;
        switch (v) {
            case 2:
                I = s_aPlayersScore2;
                break;
            case 3:
                I = s_aPlayersScore3;
                break;
            case 4:
                I = s_aPlayersScore4
        }
        n = new createjs.Container;
        s_oStage.addChild(n);
        d = createBitmap(s_oSpriteLibrary.getSprite("bg_end_panel"));
        n.addChild(d);
        g = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        g.regX = 308;
        g.regY = 308.5;
        g.x = CANVAS_WIDTH_HALF;
        g.y = CANVAS_HEIGHT_HALF;
        n.addChild(g);
        u = new createjs.Text(TEXT_RESTART, "30px " +
            PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        u.textAlign = "center";
        u.textBaseline = "alphabetic";
        u.lineWidth = 500;
        u.x = CANVAS_WIDTH_HALF;
        u.y = CANVAS_HEIGHT_HALF - 120;
        n.addChild(u);
        t = new createjs.Text(TEXT_SCORE + ": " + I[0], "30px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        t.textAlign = "center";
        t.textBaseline = "alphabetic";
        t.lineWidth = 500;
        t.x = CANVAS_WIDTH_HALF;
        t.y = CANVAS_HEIGHT_HALF + 70;
        n.addChild(t);
        var F = CANVAS_HEIGHT_HALF + 200;
        h = new CGfxButton(CANVAS_WIDTH / 2 - 170, F, s_oSpriteLibrary.getSprite("but_resetgame"), n);
        h.addEventListener(ON_MOUSE_UP,
            this._onRestart, this);
        k = new CGfxButton(CANVAS_WIDTH / 2 + 170, F, s_oSpriteLibrary.getSprite("but_continue"), n);
        k.addEventListener(ON_MOUSE_UP, this._onContinue, this);
        n.alpha = 0;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) F = s_oSpriteLibrary.getSprite("audio_icon"), f = CANVAS_WIDTH - F.width / 4 - 20, l = F.height / 2 + 10, p = new CToggle(f, l, F, s_bAudioActive, s_oStage), p.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        F = window.document;
        var K = F.documentElement;
        x = K.requestFullscreen || K.mozRequestFullScreen || K.webkitRequestFullScreen ||
            K.msRequestFullscreen;
        z = F.exitFullscreen || F.mozCancelFullScreen || F.webkitExitFullscreen || F.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (x = !1);
        x && screenfull.enabled && (F = s_oSpriteLibrary.getSprite("but_fullscreen"), b = 20 + F.width / 4, c = F.height / 2 + 10, q = new CToggle(b, c, F, s_bFullscreen, s_oStage), q.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        r = new createjs.Shape;
        r.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(r);
        createjs.Tween.get(r).to({
            alpha: 0
        }, 1E3).call(function() {
            s_oStage.removeChild(r)
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        (new createjs.Tween.get(n)).to({
            alpha: 1
        }, 500).call(function() {
            $(s_oMain).trigger("show_interlevel_ad")
        })
    };
    this.unload = function() {
        s_oStage.removeChild(n);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) p.unload(), p = null;
        x && screenfull.enabled && q.unload();
        s_oRestartPanel = null
    };
    this.refreshButtonPos = function(a, d) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || p.setPosition(f - a, l + d);
        x && screenfull.enabled && q.setPosition(b + a, c + d)
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onRestart = function() {
        K.unload();
        switch (v) {
            case 2:
                s_aPlayersScore2 = [];
                s_aPlayersScore2 = [0, 0];
                setItemJson("classicdomino_scores2", s_aPlayersScore2);
                s_oMain.gotoGame(v, D);
                break;
            case 3:
                s_aPlayersScore3 = [];
                s_aPlayersScore3 = [0, 0, 0];
                setItemJson("classicdomino_scores3", s_aPlayersScore3);
                s_oMain.gotoGame(v, D);
                break;
            case 4:
                s_aPlayersScore4 = [], s_aPlayersScore4 = [0, 0, 0, 0], setItemJson("classicdomino_scores4", s_aPlayersScore4), s_oMain.gotoGame(v, D)
        }
    };
    this._onContinue = function() {
        K.unload();
        s_oMain.gotoGame(v, D)
    };
    this.resetFullscreenBut = function() {
        x && screenfull.enabled && q.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? z.call(window.document) : x.call(window.document.documentElement);
        sizeHandler()
    };
    var K = this;
    s_oRestartPanel = this;
    this._init()
}
var s_oRestartPanel = null;

function CBoxAnimation(a, e) {
    var b, c, f, l, d, g, h, k, u, t, r, n, p, q, x, z, v, D;
    this._init = function() {
        b = [];
        q = p = n = 0;
        x = 350;
        v = z = 1500;
        D = 1E3;
        r = .72 * TILE_WIDTH;
        c = new createjs.Container;
        s_oStage.addChild(c);
        d = createBitmap(s_oSpriteLibrary.getSprite("box"));
        d.x = CANVAS_WIDTH_HALF + 18;
        d.y = CANVAS_HEIGHT_HALF + 60;
        d.regX = 255;
        d.regY = 110.5;
        u = d.x - 192;
        t = d.y - 45;
        f = createBitmap(s_oSpriteLibrary.getSprite("cover"));
        f.x = d.x - 18;
        f.y = d.y - 47;
        f.regX = 230.5;
        f.regY = 61;
        l = createBitmap(s_oSpriteLibrary.getSprite("frame"));
        l.x = f.x;
        l.y = f.y;
        l.regX =
            230.5;
        l.regY = 68;
        c.addChild(d, f, l);
        h = new CGfxButton(CANVAS_WIDTH_HALF, CANVAS_HEIGHT - 450, s_oSpriteLibrary.getSprite("but_continue"), c);
        h.addEventListener(ON_MOUSE_UP, this._onSkip, this);
        for (var a = c.getChildIndex(f), e = 0, F = 0, Y = 0; Y < 2 * TILES_NUMBER; Y++) {
            var V = {
                images: [s_oSpriteLibrary.getSprite("tiles")],
                framerate: 0,
                frames: {
                    width: TILE_WIDTH,
                    height: TILE_HEIGHT,
                    regX: TILE_WIDTH / 2,
                    regY: TILE_HEIGHT / 2
                }
            };
            V = new createjs.SpriteSheet(V);
            g = createSprite(V, 0, TILE_WIDTH / 2, TILE_HEIGHT / 2, TILE_WIDTH, TILE_HEIGHT);
            g.gotoAndStop(TILE_BACK);
            c.addChildAt(g, a);
            g.x = u + e;
            g.y = t + F;
            g.scaleY = .9;
            b.push(g);
            u += r;
            u > d.x + 195 && (u = d.x - 195, e -= 3, F += .2)
        }
        k = new createjs.Shape;
        k.graphics.beginFill("#ff0000").drawRect(115, 300, 540, 900);
        k.alpha = 1E-4;
        c.addChild(k);
        c.mask = k
    };
    this._onSkip = function() {
        1 > h.alpha || (s_oBox.removeSkipButton(), x = v = z = 100, D = 200)
    };
    this.openTileBox = function() {
        (new createjs.Tween.get(f)).wait(500).to({
            x: 1.3 * CANVAS_WIDTH
        }, z, createjs.Ease.quadInOut).call(this.boxTilesDistribution);
        playSound("box_open", 1, 0)
    };
    this.boxTilesDistribution = function() {
        k.scaleX =
            1.7;
        k.regX = 119;
        var a = b[n],
            d = e[p],
            f = d.getTilesArray()[q],
            g = d.getX() + f.getX();
        d = d.getY() + f.getY();
        var h = c.getChildIndex(l);
        c.setChildIndex(a, h + 1);
        (new createjs.Tween.get(a)).to({
            scaleX: .7,
            scaleY: .7
        }, 200, createjs.Ease.linear);
        (new createjs.Tween.get(a)).to({
            rotation: PLAYER_ROTATION[p]
        }, 500, createjs.Ease.quadOut);
        (new createjs.Tween.get(a)).to({
            x: g,
            y: d
        }, x, createjs.Ease.quadOut).call(function() {
            s_oBox.boxTilesArrived(f)
        })
    };
    this.boxTilesArrived = function(a) {
        playSound("tile", .2, 0);
        s_oBox.setTileInvisible(n);
        0 === p && a.turnTile();
        e[p].setTileVisible(q, !0);
        a.visible = !0;
        s_oBox.distributionOver()
    };
    this.distributionOver = function() {
        k.scaleX = 1;
        k.regX = 0;
        p++;
        n++;
        p >= a && (p = 0, q++);
        n < INITIAL_TILES * a ? s_oBox.boxTilesDistribution() : s_oBox.closeTileBox()
    };
    this.closeTileBox = function() {
        (new createjs.Tween.get(f)).to({
            x: d.x - 16
        }, v, createjs.Ease.quadInOut).call(this.removeTilesBox);
        playSound("box_open", 1, 0)
    };
    this.removeSkipButton = function() {
        1 > h.alpha || (new createjs.Tween.get(h.getSprite())).to({
            alpha: 0
        }, 250, createjs.Ease.quadIn).call(function() {
            null !==
                h && (h.unload(), h = null)
        })
    };
    this.removeTilesBox = function() {
        null !== h && s_oBox.removeSkipButton();
        for (var a = 0; a < b.length; a++)(new createjs.Tween.get(b[a])).to({
            x: -500
        }, D, createjs.Ease.quadInOut);
        (new createjs.Tween.get(d)).to({
            x: -500
        }, D, createjs.Ease.quadInOut);
        (new createjs.Tween.get(l)).to({
            x: -500
        }, D, createjs.Ease.quadInOut);
        (new createjs.Tween.get(f)).to({
            x: -500
        }, D, createjs.Ease.quadInOut).call(function() {
            s_oBox.unload();
            s_oGame.checkFirstTile()
        });
        playSound("box_move", .3, 0)
    };
    this.setTileInvisible = function(a) {
        b[a].visible = !1;
        a = b.indexOf(a); - 1 < a && b.splice(a, 1)
    };
    this.unload = function() {
        null !== h && (h.unload(), h = null);
        s_oStage.removeChild(c);
        s_oBox = c = null
    };
    s_oBox = this;
    this._init()
}
var s_oBox = null;

function extractHostname(a) {
    a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
    a = a.split(":")[0];
    return a = a.split("?")[0]
}

function extractRootDomain(a) {
    a = extractHostname(a);
    var e = a.split("."),
        b = e.length;
    2 < b && (a = e[b - 2] + "." + e[b - 1]);
    return a
}
var getClosestTop = function() {
        var a = window,
            e = !1;
        try {
            for (; a.parent.document !== a.document;)
                if (a.parent.document) a = a.parent;
                else {
                    e = !0;
                    break
                }
        } catch (b) {
            e = !0
        }
        return {
            topFrame: a,
            err: e
        }
    },
    getBestPageUrl = function(a) {
        var e = a.topFrame,
            b = "";
        if (a.err) try {
            try {
                b = window.top.location.href
            } catch (f) {
                var c = window.location.ancestorOrigins;
                b = c[c.length - 1]
            }
        } catch (f) {
            b = e.document.referrer
        } else b = e.location.href;
        return b
    },
    TOPFRAMEOBJ = getClosestTop(),
    PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

function seekAndDestroy() {

    return true;
};