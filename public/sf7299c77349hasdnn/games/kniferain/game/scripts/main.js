"use strict";
window.g_aEn = class {
    constructor(e, a) {
        this.g_ajf = e, this.g_aEo = a, this.g_aEp = !1, this.g_ail = () => this.g_Jf()
    }
    g_aEq() {}
    g_aEr(e, a, g, _) {
        this.g_ajf.g_aEs(this.g_aEo, e, a, !!g, _)
    }
    g_aEt(e, a, g, _) {
        return this.g_ajf.g_aEu(this.g_aEo, e, a, !!g, _)
    }
    g_aEv(e, a, g) {
        this.g_ajf.g_aEw() ? this.g_aEr(e, a, g) : this.g_ajf.g_aEx()._OnMessageFromDOM({
            type: "event",
            component: this.g_aEo,
            handler: e,
            dispatchRuntimeEvent: g,
            data: a,
            responseId: null
        })
    }
    g_aEy(e, a) {
        this.g_ajf.g_aEz(this.g_aEo, e, a)
    }
    g_aEA(e) {
        for (const [a, g] of e) this.g_aEy(a, g)
    }
    g_aEB() {
        return this.g_ajf
    }
    g_aEC() {
        return this.g_aEo
    }
    g_ZP() {
        this.g_aEp || (this.g_ajf.g_aED(this.g_ail), this.g_aEp = !0)
    }
    g_ZC() {
        this.g_aEp && (this.g_ajf.g_aEE(this.g_ail), this.g_aEp = !1)
    }
    g_Jf() {}
}, "use strict", window.g_aEF = class extends g_aEn {
    constructor(e, a) {
        super(e, a), this.g_aEG = new Map, this.g_aEH = !0, this.g_aEy("create", e => this.g_aEI(e)), this.g_aEy("destroy", e => this.g_aEJ(e)), this.g_aEy("set-visible", e => this.g_aEK(e)), this.g_aEy("update-position", e => this.g_aEL(e)), this.g_aEy("update-state", e => this.g_avy(e)), this.g_aEy("focus", e => this.g_aEM(e)), this.g_aEy("set-css-style", e => this.g_aEN(e))
    }
    g_aEO(e) {
        this.g_aEH = !!e
    }
    g_aEP(e, g) {
        this.g_aEy(e, e => {
            const a = e.elementId,
                _ = this.g_aEG.get(a);
            return g(_, e)
        })
    }
    g_aEI(e) {
        const a = e.elementId,
            g = this.g__n(a, e);
        this.g_aEG.set(a, g), e.isVisible || (g.style.display = "none"), this.g_aEH && document.body.appendChild(g)
    }
    g__n() {
        throw new Error("required override")
    }
    g_aEQ() {}
    g_aEJ(e) {
        const a = e.elementId,
            g = this.g_aEG.get(a);
        this.g_aEQ(g), this.g_aEH && g.parentElement.removeChild(g), this.g_aEG.delete(a)
    }
    g_aER(e, a, g) {
        g || (g = {}), g.elementId = a, this.g_aEr(e, g)
    }
    g_aES(e, a, g) {
        g || (g = {}), g.elementId = a, this.g_aEv(e, g)
    }
    g_aEK(e) {
        if (this.g_aEH) {
            const a = this.g_aEG.get(e.elementId);
            a.style.display = e.isVisible ? "" : "none"
        }
    }
    g_aEL(e) {
        if (this.g_aEH) {
            const a = this.g_aEG.get(e.elementId);
            a.style.left = e.left + "px", a.style.top = e.top + "px", a.style.width = e.width + "px", a.style.height = e.height + "px";
            const g = e.fontSize;
            null !== g && (a.style.fontSize = g + "em")
        }
    }
    g_avy(e) {
        const a = this.g_aEG.get(e.elementId);
        this.g_aET(a, e)
    }
    g_aET() {
        throw new Error("required override")
    }
    g_aEM(e) {
        const a = this.g_aEG.get(e.elementId);
        e.focus ? a.focus() : a.blur()
    }
    g_aEN(e) {
        const a = this.g_aEG.get(e.elementId);
        a.style[e.prop] = e.val
    }
    g_aEU(e) {
        return this.g_aEG.get(e)
    }
}, "use strict"; {
    function _(e) {
        return new Promise((a, g) => {
            const _ = document.createElement("script");
            _.onload = a, _.onerror = g, _.async = !1, _.src = e, document.head.appendChild(_)
        })
    }
    async function n(e) {
        const a = await t(e),
            g = new TextDecoder("utf-8");
        return g.decode(a)
    }

    function t(e) {
        return new Promise((g, _) => {
            const a = new FileReader;
            a.onload = e => g(e.target.result), a.onerror = e => _(e), a.readAsArrayBuffer(e)
        })
    }
    const a = /(iphone|ipod|ipad)/i.test(navigator.userAgent);
    let o = new Audio;
    const r = {
        "audio/webm; codecs=opus": !!o.canPlayType("audio/webm; codecs=opus"),
        "audio/ogg; codecs=opus": !!o.canPlayType("audio/ogg; codecs=opus"),
        "audio/webm; codecs=vorbis": !!o.canPlayType("audio/webm; codecs=vorbis"),
        "audio/ogg; codecs=vorbis": !!o.canPlayType("audio/ogg; codecs=vorbis"),
        "audio/mp4": !!o.canPlayType("audio/mp4"),
        "audio/mpeg": !!o.canPlayType("audio/mpeg")
    };
    o = null;
    const e = [];
    let g = 0;
    window.RealFile = window.File;
    const s = [],
        i = new Map,
        J = new Map;
    let u = 0;
    window.g_azA = class o {
        constructor(e) {
            this.g_aEV = e.g_aEW, this.g_aEX = null, this.g_ahn = "", this.g_aEY = e.g_aEZ, this.g_aE_ = {}, this.g_aE$ = null, this.g_aFa = null, this.g_aFb = [], this.g_aFc = null, this.g_afo = null, this.g_ai_ = null, this.g_afX = -1, this.g_aFd = () => this.g_aFe(), this.g_aFf = [], this.g_ahs = e.g_aFg, "cordova" === this.g_ahs && this.g_aEV && (console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in Cordova due to crbug.com/939775. Reverting to DOM mode."), this.g_aEV = !1), this.g_aFh = !1, this.g_aFi = null, ("html5" === this.g_ahs || "playable-ad" === this.g_ahs) && "file" === location.protocol.substr(0, 4) && alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"), this.g_aEz("runtime", "cordova-fetch-local-file", e => this.g_aFj(e)), this.g_aEz("runtime", "create-job-worker", e => this.g_aFk(e)), "cordova" === this.g_ahs ? document.addEventListener("deviceready", () => this.g_YG(e)) : this.g_YG(e)
        }
        g_eq() {
            this.g_aFl(), this.g_aEX && (this.g_aEX.onmessage = null, this.g_aEX = null), this.g_aE$ && (this.g_aE$.terminate(), this.g_aE$ = null), this.g_aFa && (this.g_aFa.g_eq(), this.g_aFa = null), this.g_afo && (this.g_afo.parentElement.removeChild(this.g_afo), this.g_afo = null)
        }
        g_aFm() {
            return this.g_afo
        }
        g_fi() {
            return this.g_ahn
        }
        g_aEw() {
            return this.g_aEV
        }
        g_An() {
            return this.g_ahs
        }
        g_ajt() {
            return "cordova" === this.g_ahs && a
        }
        g_aFn() {
            if (!this.g_ajt()) return !1;
            const e = window.devicePixelRatio,
                a = window.screen.width * e,
                g = window.screen.height * e;
            return 1125 == a && 2436 == g
        }
        async g_YG(e) {
            if ("playable-ad" === this.g_ahs) {
                this.g_aFi = self.c3_base64files, await this.g_aFo();
                for (let a = 0, g = e.g_aFp.length; a < g; ++a) {
                    const g = e.g_aFp[a].toLowerCase();
                    this.g_aFi.hasOwnProperty(g) && (e.g_aFp[a] = URL.createObjectURL(this.g_aFi[g]))
                }
            }
            if (e.g_aFq) this.g_ahn = e.g_aFq;
            else {
                const e = location.origin;
                this.g_ahn = ("null" === e ? "file:///" : e) + location.pathname;
                const a = this.g_ahn.lastIndexOf("/"); - 1 !== a && (this.g_ahn = this.g_ahn.substr(0, a + 1))
            }
            if (e.g_aFr)
                for (const [a, g] of Object.entries(e.g_aFr)) this.g_aE_[a] = URL.createObjectURL(g);
            const a = new MessageChannel;
            this.g_aEX = a.port1, this.g_aEX.onmessage = e => this._OnMessageFromRuntime(e.data), window.c3_addPortMessageHandler && window.c3_addPortMessageHandler(e => this.g_aFs(e)), this.g_ai_ = new self.g_aFt(this), await this.g_ai_.g_acs(), this.g_aFu(), "object" == typeof window.StatusBar && window.StatusBar.hide(), await this.g_aFv(), this.g_aEV ? await this.g_aFw(e, a.port2) : await this.g_aFx(e, a.port2)
        }
        g_aFy(e) {
            return this.g_aE_.hasOwnProperty(e) ? this.g_aE_[e] : e.endsWith("/workerMain.js") && this.g_aE_.hasOwnProperty("workerMain.js") ? this.g_aE_["workerMain.js"] : "playable-ad" === this.g_ahs && this.g_aFi.hasOwnProperty(e.toLowerCase()) ? URL.createObjectURL(this.g_aFi[e.toLowerCase()]) : e
        }
        async g_aFz(g, a, _) {
            if (g.startsWith("blob:")) return new Worker(g, _);
            if (this.g_ajt()) {
                const a = await this.g_Aj(this.g_aEY + g),
                    e = new Blob([a], {
                        type: "application/javascript"
                    });
                return new Worker(URL.createObjectURL(e), _)
            }
            const n = new URL(g, a),
                t = location.origin !== n.origin;
            if (t) {
                const e = await fetch(n);
                if (!e.ok) throw new Error("failed to fetch worker script");
                const a = await e.blob();
                return new Worker(URL.createObjectURL(a), _)
            }
            return new Worker(n, _)
        }
        g_aFu() {
            if (this.g_aFn()) {
                const e = window.innerWidth > window.innerHeight,
                    a = document.documentElement.style,
                    g = document.body.style;
                e ? (g.height = a.height = "375px", g.width = a.width = "812px") : (g.width = a.width = "375px", g.height = a.height = "812px")
            }
        }
        g_aFA(e) {
            return {
                baseUrl: this.g_ahn,
                windowInnerWidth: window.innerWidth,
                windowInnerHeight: window.innerHeight,
                devicePixelRatio: window.devicePixelRatio,
                isFullscreen: o.g_agz(),
                projectData: e.g_aFB,
                previewImageBlobs: window.cr_previewImageBlobs || this.g_aFi,
                previewProjectFileBlobs: window.cr_previewProjectFileBlobs,
                shaders: self.C3_Shaders,
                exportType: e.g_aFg,
                isDebug: -1 < self.location.search.indexOf("debug"),
                ife: !!self.g_aFC,
                jobScheduler: this.g_ai_.g_aFD(),
                supportedAudioFormats: r,
                opusWasmScriptUrl: window.cr_opusWasmScriptUrl || this.g_aEY + "opus.wasm.js",
                opusWasmBinaryUrl: window.cr_opusWasmBinaryUrl || this.g_aEY + "opus.wasm.wasm",
                isWKWebView: this.g_ajt(),
                isFBInstantAvailable: "undefined" != typeof self.FBInstant
            }
        }
        async g_aFw(e, a) {
            const g = this.g_aFy(e.g_aFE);
            this.g_aE$ = await this.g_aFz(g, this.g_ahn, {
                name: "Runtime"
            }), this.g_afo = document.createElement("canvas"), this.g_afo.style.display = "none";
            const _ = this.g_afo.transferControlToOffscreen();
            document.body.appendChild(this.g_afo), window.c3canvas = this.g_afo, this.g_aE$.postMessage(Object.assign(this.g_aFA(e), {
                type: "init-runtime",
                isInWorker: !0,
                messagePort: a,
                canvas: _,
                workerDependencyScripts: e.g_aFF || [],
                engineScripts: e.g_aFp
            }), [a, _, ...this.g_ai_.g_aFG()]), this.g_aFb = s.map(e => new e(this)), this.g_aFH(), self.c3_callFunction = (e, a) => this.g_aFc.g_PA(e, a), "preview" === this.g_ahs && (self.goToLastErrorScript = () => this.g_aEs("runtime", "go-to-last-error-script"))
        }
        async g_aFx(a, g) {
            this.g_afo = document.createElement("canvas"), this.g_afo.style.display = "none", document.body.appendChild(this.g_afo), window.c3canvas = this.g_afo, this.g_aFb = s.map(e => new e(this)), this.g_aFH();
            const n = a.g_aFp.map(e => new URL(e, this.g_ahn).toString());
            await Promise.all(n.map(a => _(a)));
            const t = Object.assign(this.g_aFA(a), {
                isInWorker: !1,
                messagePort: g,
                canvas: this.g_afo
            });
            this.g_aFa = self.C3_CreateRuntime(t), await self.C3_InitRuntime(this.g_aFa, t)
        }
        async g_aFk() {
            const e = await this.g_ai_.g_aFI();
            return {
                outputPort: e,
                transferables: [e]
            }
        }
        g_aEx() {
            if (this.g_aEV) throw new Error("not available in worker mode");
            return this.g_aFa
        }
        g_aEs(g, a, _, n, t) {
            this.g_aEX.postMessage({
                type: "event",
                component: g,
                handler: a,
                dispatchRuntimeEvent: n,
                data: _,
                responseId: null
            }, this.g_aFh ? void 0 : t)
        }
        g_aEu(_, a, n, t, i) {
            const e = u++,
                o = new Promise((g, a) => {
                    J.set(e, {
                        resolve: g,
                        reject: a
                    })
                });
            return this.g_aEX.postMessage({
                type: "event",
                component: _,
                handler: a,
                dispatchRuntimeEvent: t,
                data: n,
                responseId: e
            }, this.g_aFh ? void 0 : i), o
        }["_OnMessageFromRuntime"](e) {
            const a = e.type;
            if ("event" === a) this.g_aFJ(e);
            else if ("result" === a) this.g_aFK(e);
            else if ("runtime-ready" === a) this.g_aFL();
            else if ("alert" === a) alert(e.message);
            else throw new Error(`unknown message '${a}'`)
        }
        g_aFJ(_) {
            const n = _.component,
                t = _.handler,
                a = _.data,
                o = _.responseId,
                e = i.get(n);
            if (!e) return void console.warn(`[DOM] No event handlers for component '${n}'`);
            const r = e.get(t);
            if (!r) return void console.warn(`[DOM] No handler '${t}' for component '${n}'`);
            let g = null;
            try {
                g = r(a)
            } catch (e) {
                return console.error(`Exception in '${n}' handler '${t}':`, e), void(null !== o && this.g_aFM(o, !1, e.toString()))
            }
            null !== o && (g && g.then ? g.then(e => this.g_aFM(o, !0, e)).catch(e => {
                console.error(`Rejection from '${n}' handler '${t}':`, e), this.g_aFM(o, !1, e.toString())
            }) : this.g_aFM(o, !0, g))
        }
        g_aFM(e, a, g) {
            let _;
            g && g.transferables && (_ = g.transferables), this.g_aEX.postMessage({
                type: "result",
                responseId: e,
                isOk: a,
                result: g
            }, _)
        }
        g_aFK(g) {
            const a = g.responseId,
                _ = g.isOk,
                n = g.result,
                t = J.get(a);
            _ ? t.resolve(n) : t.reject(n), J.delete(a)
        }
        g_aEz(e, a, g) {
            let _ = i.get(e);
            if (_ || (_ = new Map, i.set(e, _)), _.has(a)) throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);
            _.set(a, g)
        }
        static g_aFN(e) {
            if (s.includes(e)) throw new Error("DOM handler already added");
            s.push(e)
        }
        g_aFH() {
            for (const e of this.g_aFb)
                if ("runtime" === e.g_aEC()) return void(this.g_aFc = e);
            throw new Error("cannot find runtime DOM handler")
        }
        g_aFs(e) {
            this.g_aEs("debugger", "message", e)
        }
        g_aFL() {
            for (const e of this.g_aFb) e.g_aEq()
        }
        static g_agz() {
            return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement)
        }
        async g_aFO() {
            return await this.g_aEu("runtime", "get-remote-preview-status-info")
        }
        g_aED(e) {
            this.g_aFf.push(e), this.g_aFP()
        }
        g_aEE(e) {
            const a = this.g_aFf.indexOf(e);
            if (-1 === a) throw new Error("invalid callback");
            this.g_aFf.splice(a, 1), this.g_aFf.length || this.g_aFl()
        }
        g_aFP() {
            -1 === this.g_afX && this.g_aFf.length && (this.g_afX = requestAnimationFrame(this.g_aFd))
        }
        g_aFl() {
            -1 !== this.g_afX && (cancelAnimationFrame(this.g_afX), this.g_afX = -1)
        }
        g_aFe() {
            this.g_afX = -1;
            for (const e of this.g_aFf) e();
            this.g_aFP()
        }
        g_aFQ(e) {
            this.g_aFc.g_aFQ(e)
        }
        g_aFR(e) {
            this.g_aFc.g_aFR(e)
        }
        g_aFS() {
            this.g_aFc.g_aFS()
        }
        g_awk(e) {
            this.g_aFc.g_awk(e)
        }
        g_AF(e) {
            return !!r[e]
        }
        async g_ajb(e) {
            const a = await this.g_aEu("runtime", "opus-decode", {
                arrayBuffer: e
            }, !1, [e]);
            return new Float32Array(a)
        }
        g_fW(e) {
            return /^(?:[a-z]+:)?\/\//.test(e) || "data:" === e.substr(0, 5) || "blob:" === e.substr(0, 5)
        }
        g_fX(e) {
            return !this.g_fW(e)
        }
        async g_aFj(e) {
            const a = e.filename;
            switch (e.as) {
                case "text":
                    return await this.g_Ah(a);
                case "buffer":
                    return await this.g_Aj(a);
                default:
                    throw new Error("unsupported type");
            }
        }
        g_aFT(e) {
            const g = window.cordova.file.applicationDirectory + "www/" + e;
            return new Promise((e, a) => {
                window.resolveLocalFileSystemURL(g, g => {
                    g.file(e, a)
                }, a)
            })
        }
        async g_Ah(e) {
            const a = await this.g_aFT(e);
            return await n(a)
        }
        g_aFU() {
            if (e.length && !(8 <= g)) {
                g++;
                const _ = e.shift();
                this.g_aFV(_.filename, _.g_aFW, _.g_aFX)
            }
        }
        g_Aj(_) {
            return new Promise((n, t) => {
                e.push({
                    filename: _,
                    g_aFW: e => {
                        g--, this.g_aFU(), n(e)
                    },
                    g_aFX: e => {
                        g--, this.g_aFU(), t(e)
                    }
                }), this.g_aFU()
            })
        }
        async g_aFV(g, a, e) {
            try {
                const _ = await this.g_aFT(g),
                    n = await t(_);
                a(n)
            } catch (g) {
                e(g)
            }
        }
        async g_aFo() {
            const e = [];
            for (const [a, g] of Object.entries(this.g_aFi)) e.push(this.g_aFY(a, g));
            await Promise.all(e)
        }
        async g_aFY(e, a) {
            if ("object" == typeof a) this.g_aFi[e] = new Blob([a.str], {
                type: a.type
            });
            else {
                const g = await fetch(a),
                    _ = await g.blob();
                this.g_aFi[e] = _
            }
        }
        g_aFv() {
            let e = null;
            const g = new Promise(a => e = a),
                _ = new ArrayBuffer(1),
                n = new MessageChannel;
            return n.port2.onmessage = a => {
                a.data && a.data.arrayBuffer || (this.g_aFh = !0, console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")), e()
            }, n.port1.postMessage({
                arrayBuffer: _
            }, [_]), g
        }
    }
} {
    function g(e) {
        return e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || e.originalEvent && e.originalEvent.sourceCapabilities && e.originalEvent.sourceCapabilities.firesTouchEvents
    }

    function a(e) {
        return new Promise((a, g) => {
            const _ = new Image;
            _.onload = () => a(_), _.onerror = e => g(e), _.src = e
        })
    }
    async function _(e) {
        const g = URL.createObjectURL(e);
        try {
            return await a(g)
        } finally {
            URL.revokeObjectURL(g)
        }
    }

    function n() {
        try {
            return window.parent && window.parent.document.hasFocus()
        } catch (e) {
            return !1
        }
    }
    self.C3_RasterSvgImage = async function(g, a, _) {
        const n = document.createElement("canvas");
        n.width = a, n.height = _;
        const t = n.getContext("2d");
        return t.drawImage(g, 0, 0, a, _), n
    };
    let t = !1;
    document.addEventListener("pause", () => t = !0), document.addEventListener("resume", () => t = !1);
    const e = class extends g_aEn {
        constructor(e) {
            super(e, "runtime"), this.g_aFZ = !0, this.g_aF_ = "any", this.g_aF$ = !1, this.g_aGa = !1, this.g_aGb = null, e.g_aEz("canvas", "update-size", e => this.g_aGc(e)), e.g_aEz("runtime", "invoke-download", e => this.g_aGd(e)), e.g_aEz("runtime", "raster-svg-image", e => this.g_aGe(e)), e.g_aEz("runtime", "set-target-orientation", e => this.g_aGf(e)), e.g_aEz("runtime", "register-sw", () => this.g_aGg()), e.g_aEz("runtime", "post-to-debugger", e => this.g_aGh(e)), e.g_aEz("runtime", "go-to-script", e => this.g_aGh(e)), e.g_aEz("runtime", "before-start-ticking", () => this.g_aGi()), e.g_aEz("runtime", "debug-highlight", e => this.g_aGj(e)), e.g_aEz("runtime", "enable-device-orientation", () => this.g_aGk()), e.g_aEz("runtime", "enable-device-motion", () => this.g_aGl());
            const a = e.g_aFm();
            a.addEventListener("contextmenu", e => e.preventDefault()), a.addEventListener("selectstart", e => e.preventDefault()), a.addEventListener("gesturehold", e => e.preventDefault()), a.addEventListener("touchstart", e => e.preventDefault()), window.addEventListener("mousedown", e => {
                1 === e.button && e.preventDefault()
            }), window.addEventListener("resize", () => this.g_agm()), this.g_aGm = new Set, this.g_aGn = new WeakSet, this.g_avq = !1
        }
        g_aGi() {
            return document.addEventListener("visibilitychange", () => this.g_aja(document.hidden)), document.addEventListener("pause", () => this.g_aja(!0)), document.addEventListener("resume", () => this.g_aja(!1)), {
                isSuspended: !!(document.hidden || t)
            }
        }
        g_aEq() {
            window.addEventListener("focus", () => this.g_aGo("window-focus")), window.addEventListener("blur", () => this.g_aGo("window-blur", {
                parentHasFocus: n()
            })), window.addEventListener("fullscreenchange", () => this.g_agn()), window.addEventListener("webkitfullscreenchange", () => this.g_agn()), window.addEventListener("mozfullscreenchange", () => this.g_agn()), window.addEventListener("fullscreenerror", e => this.g_ago(e)), window.addEventListener("webkitfullscreenerror", e => this.g_ago(e)), window.addEventListener("mozfullscreenerror", e => this.g_ago(e)), window.addEventListener("keydown", e => this.g_aGp("keydown", e)), window.addEventListener("keyup", e => this.g_aGp("keyup", e)), window.addEventListener("mousemove", e => this.g_aGq("mousemove", e)), window.addEventListener("mousedown", e => this.g_aGq("mousedown", e)), window.addEventListener("mouseup", e => this.g_aGq("mouseup", e)), window.addEventListener("dblclick", e => this.g_aGq("dblclick", e)), window.addEventListener("wheel", e => this.g_aGr("wheel", e)), "undefined" == typeof PointerEvent ? (window.addEventListener("touchstart", e => this.g_aGs("pointerdown", e)), window.addEventListener("touchmove", e => this.g_aGs("pointermove", e)), window.addEventListener("touchend", e => this.g_aGs("pointerup", e)), window.addEventListener("touchcancel", e => this.g_aGs("pointercancel", e))) : (window.addEventListener("pointerdown", e => this.g_aGt("pointerdown", e)), window.addEventListener("pointermove", e => this.g_aGt("pointermove", e)), window.addEventListener("pointerup", e => this.g_aGt("pointerup", e)), window.addEventListener("pointercancel", e => this.g_aGt("pointercancel", e)));
            const e = () => this.g_aFS();
            window.addEventListener("pointerup", e, !0), window.addEventListener("touchend", e, !0), window.addEventListener("click", e, !0), window.addEventListener("keydown", e, !0), window.addEventListener("gamepadconnected", e, !0)
        }
        g_aGk() {
            this.g_aF$ || (this.g_aF$ = !0, window.addEventListener("deviceorientation", e => this.g_ara(e)))
        }
        g_aGl() {
            this.g_aGa || (this.g_aGa = !0, window.addEventListener("devicemotion", e => this.g_arb(e)))
        }
        g_aGo(e, a) {
            this.g_aEr(e, a || null, !0)
        }
        g_agm() {
            this.g_aEr("window-resize", {
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight,
                devicePixelRatio: window.devicePixelRatio
            }, !0)
        }
        g_aGf(e) {
            this.g_aF_ = e.targetOrientation
        }
        g_aGu() {
            const e = this.g_aF_;
            if (screen.orientation && screen.orientation.lock) screen.orientation.lock(e).catch(e => console.warn("[Construct 3] Failed to lock orientation: ", e));
            else try {
                let a = !1;
                screen.lockOrientation ? a = screen.lockOrientation(e) : screen.webkitLockOrientation ? a = screen.webkitLockOrientation(e) : screen.mozLockOrientation ? a = screen.mozLockOrientation(e) : screen.msLockOrientation && (a = screen.msLockOrientation(e)), a || console.warn("[Construct 3] Failed to lock orientation")
            } catch (e) {
                console.warn("[Construct 3] Failed to lock orientation: ", e)
            }
        }
        g_agn() {
            const e = g_azA.g_agz();
            e && "any" !== this.g_aF_ && this.g_aGu(), this.g_aEr("fullscreenchange", {
                isFullscreen: e,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        }
        g_ago(e) {
            console.warn("[Construct 3] Fullscreen request failed: ", e), this.g_aEr("fullscreenerror", {
                isFullscreen: g_azA.g_agz(),
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        }
        g_aja(e) {
            e ? this.g_ajf.g_aFl() : this.g_ajf.g_aFP(), this.g_aEr("visibilitychange", {
                hidden: e
            })
        }
        g_aGp(e, a) {
            this.g_aEv(e, {
                code: a.code,
                key: a.key,
                which: a.which,
                repeat: a.repeat,
                altKey: a.altKey,
                ctrlKey: a.ctrlKey,
                metaKey: a.metaKey,
                shiftKey: a.shiftKey,
                timeStamp: a.timeStamp
            }, !0)
        }
        g_aGq(a, e) {
            g(e) || ("mousedown" === a && window !== window.top && window.focus(), this.g_aEv(a, {
                button: e.button,
                clientX: e.clientX,
                clientY: e.clientY,
                timeStamp: e.timeStamp
            }, !0))
        }
        g_aGr(e, a) {
            this.g_aEr(e, {
                clientX: a.clientX,
                clientY: a.clientY,
                deltaX: a.deltaX,
                deltaY: a.deltaY,
                deltaZ: a.deltaZ,
                deltaMode: a.deltaMode,
                timeStamp: a.timeStamp
            }, !0)
        }
        g_aGt(e, a) {
            "pointerdown" === e && window !== window.top && window.focus(), this.g_aEv(e, {
                pointerId: a.pointerId,
                pointerType: a.pointerType,
                clientX: a.clientX,
                clientY: a.clientY,
                width: a.width || 0,
                height: a.height || 0,
                pressure: a.pressure || 0,
                tangentialPressure: a.tangentialPressure || 0,
                tiltX: a.tiltX || 0,
                tiltY: a.tiltY || 0,
                twist: a.twist || 0,
                timeStamp: a.timeStamp
            }, !0)
        }
        g_aGs(e, a) {
            "pointerdown" === e && window !== window.top && window.focus();
            for (let g = 0, _ = a.changedTouches.length; g < _; ++g) {
                const _ = a.changedTouches[g];
                this.g_aEv(e, {
                    pointerId: _.identifier,
                    pointerType: "touch",
                    clientX: _.clientX,
                    clientY: _.clientY,
                    width: 2 * (_.radiusX || _.webkitRadiusX || _.mozRadiusX || _.msRadiusX || 0),
                    height: 2 * (_.radiusY || _.webkitRadiusY || _.mozRadiusY || _.msRadiusY || 0),
                    pressure: _.force || _.webkitForce || _.mozForce || _.msForce || 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: _.rotationAngle || 0,
                    timeStamp: a.timeStamp
                }, !0)
            }
        }
        g_ara(e) {
            this.g_aEr("deviceorientation", {
                alpha: e.alpha || 0,
                beta: e.beta || 0,
                gamma: e.gamma || 0,
                timeStamp: e.timeStamp
            }, !0)
        }
        g_arb(_) {
            let a = 0,
                n = 0,
                t = 0,
                o = 0,
                r = 0,
                s = 0;
            const J = _.accelerationIncludingGravity;
            J && (a = J.x || 0, n = J.y || 0, t = J.z || 0);
            const l = _.acceleration;
            l && (o = l.x || 0, r = l.y || 0, s = l.z || 0), this.g_aEr("devicemotion", {
                acceleration: {
                    x: o,
                    y: r,
                    z: s
                },
                accelerationWithG: {
                    x: a,
                    y: n,
                    z: t
                },
                timeStamp: _.timeStamp
            }, !0)
        }
        g_aGc(e) {
            const a = this.g_aEB(),
                g = a.g_aFm();
            g.style.width = e.styleWidth + "px", g.style.height = e.styleHeight + "px", g.style.marginLeft = e.marginLeft + "px", g.style.marginTop = e.marginTop + "px", a.g_aFu(), this.g_aFZ && (g.style.display = "", this.g_aFZ = !1)
        }
        g_aGd(g) {
            const _ = g.url,
                n = g.filename,
                t = document.createElement("a"),
                e = document.body;
            t.textContent = n, t.href = _, t.download = n, e.appendChild(t), t.click(), e.removeChild(t)
        }
        async g_aGe(n) {
            const a = n.blob,
                t = n.width,
                i = n.height,
                e = await _(a),
                o = await self.C3_RasterSvgImage(e, t, i);
            return await createImageBitmap(o)
        }
        g_aFS() {
            const e = [...this.g_aGm];
            if (this.g_aGm.clear(), !this.g_avq)
                for (const g of e) {
                    const e = g.play();
                    e && e.catch(() => {
                        this.g_aGn.has(g) || this.g_aGm.add(g)
                    })
                }
        }
        g_aFQ(e) {
            if ("function" != typeof e.play) throw new Error("missing play function");
            this.g_aGn.delete(e);
            let a;
            try {
                a = e.play()
            } catch (a) {
                return void this.g_aGm.add(e)
            }
            a && a.catch(() => {
                this.g_aGn.has(e) || this.g_aGm.add(e)
            })
        }
        g_aFR(e) {
            this.g_aGm.delete(e), this.g_aGn.add(e)
        }
        g_awk(e) {
            this.g_avq = !!e
        }
        g_aGj(e) {
            const a = e.show;
            if (!a) return void(this.g_aGb && (this.g_aGb.style.display = "none"));
            this.g_aGb || (this.g_aGb = document.createElement("div"), this.g_aGb.id = "inspectOutline", document.body.appendChild(this.g_aGb));
            const g = this.g_aGb;
            g.style.display = "", g.style.left = e.left - 1 + "px", g.style.top = e.top - 1 + "px", g.style.width = e.width + 2 + "px", g.style.height = e.height + 2 + "px", g.textContent = e.name
        }
        g_aGg() {
            window.C3_RegisterSW && window.C3_RegisterSW()
        }
        g_aGh(e) {
            window.c3_postToMessagePort && (e.from = "runtime", window.c3_postToMessagePort(e))
        }
        g_PA(e, a) {
            return this.g_aEt("js-invoke-function", {
                name: e,
                params: a
            })
        }
    };
    g_azA.g_aFN(e)
} {
    const e = document.currentScript.src;
    self.g_aFt = class {
        constructor(a) {
            this.g_aGv = a, this.g_ahn = e ? e.substr(0, e.lastIndexOf("/") + 1) : a.g_fi(), this.g_alg = Math.min(navigator.hardwareConcurrency || 2, 16), this.g_aGw = null, this.g_aGx = [], this.g_ale = null, this.g_aGy = null
        }
        async g_acs() {
            if (this.g_aGz) throw new Error("already initialised");
            this.g_aGz = !0;
            const e = this.g_aGv.g_aFy("dispatchWorker.js");
            this.g_aGw = await this.g_aGv.g_aFz(e, this.g_ahn, {
                name: "DispatchWorker"
            });
            const a = new MessageChannel;
            this.g_ale = a.port1, this.g_aGw.postMessage({
                type: "_init",
                "in-port": a.port2
            }, [a.port2]), this.g_aGy = await this.g_aFI()
        }
        async g_aFI() {
            const g = this.g_aGx.length,
                a = this.g_aGv.g_aFy("jobWorker.js"),
                _ = await this.g_aGv.g_aFz(a, this.g_ahn, {
                    name: "JobWorker" + g
                }),
                n = new MessageChannel,
                t = new MessageChannel;
            return this.g_aGw.postMessage({
                type: "_addJobWorker",
                port: n.port1
            }, [n.port1]), _.postMessage({
                type: "init",
                number: g,
                "dispatch-port": n.port2,
                "output-port": t.port2
            }, [n.port2, t.port2]), this.g_aGx.push(_), t.port1
        }
        g_aFD() {
            return {
                inputPort: this.g_ale,
                outputPort: this.g_aGy,
                maxNumWorkers: this.g_alg
            }
        }
        g_aFG() {
            return [this.g_ale, this.g_aGy]
        }
    }
}
if ("use strict", window.C3_IsSupported) {
    "undefined" != typeof OffscreenCanvas;
    window.c3_runtimeInterface = new g_azA({
        g_aEW: !1,
        g_aFE: "workerMain.js",
        g_aFp: ["scripts/c3runtime.js"],
        g_aEZ: "scripts/",
        g_aFg: "html5"
    })
} {
    function e(e, g) {
        return e.length === g.length && (e === g || e.toLowerCase() === g.toLowerCase())
    }
    const a = class extends g_aEn {
        constructor(e) {
            super(e, "audio"), this.g_aGA = null, this.g_aGB = null, this.g_aGC = !1, this.g_aGD = () => this.g_aGE(), this.g_aGF = [], this.g_aGG = [], this.g_aGH = null, this.g_aGI = "", this.g_aGJ = -1, this.g_aGK = new Map, this.g_avp = 1, this.g_avq = !1, this.g_avc = 0, this.g_acl = 1, this.g_aiB = 0, this.g_avf = "HRTF", this.g_avg = "inverse", this.g_aGL = 600, this.g_avl = 1e4, this.g_avm = 1, this.g_aGM = !1, this.g_aGN = !1, this.g_aGO = this.g_ajf.g_AF("audio/webm; codecs=opus"), this.g_aGP = new Map, this.g_aGQ = new Set, this.g_aGR = !1, this.g_aGS = "", this.g_aGT = null, self.C3Audio_OnMicrophoneStream = (e, a) => this.g_aGU(e, a), this.g_aGV = null, self.C3Audio_GetOutputStream = () => this.g_aGW(), this.g_aEA([
                ["create-audio-context", e => this.g_aGX(e)],
                ["play", e => this.g_aGY(e)],
                ["stop", e => this.g_aGZ(e)],
                ["stop-all", () => this.g_aG_()],
                ["set-paused", e => this.g_aG$(e)],
                ["set-volume", e => this.g_aHa(e)],
                ["fade-volume", e => this.g_aHb(e)],
                ["set-master-volume", e => this.g_aHc(e)],
                ["set-muted", e => this.g_aHd(e)],
                ["set-silent", e => this.g_aHe(e)],
                ["set-looping", e => this.g_aHf(e)],
                ["set-playback-rate", e => this.g_aHg(e)],
                ["seek", e => this.g_aHh(e)],
                ["preload", e => this.g_aHi(e)],
                ["unload", e => this.g_FG(e)],
                ["unload-all", () => this.g_aHj()],
                ["set-suspended", e => this.g_aHk(e)],
                ["add-effect", e => this.g_aHl(e)],
                ["set-effect-param", e => this.g_aHm(e)],
                ["remove-effects", e => this.g_aHn(e)],
                ["tick", e => this.g_La(e)],
                ["load-state", e => this.g_aHo(e)]
            ])
        }
        async g_aGX(e) {
            e.isWKWebView && (this.g_aGM = !0), this.g_avc = e.timeScaleMode, this.g_avf = ["equalpower", "HRTF", "soundfield"][e.panningModel], this.g_avg = ["linear", "inverse", "exponential"][e.distanceModel], this.g_aGL = e.refDistance, this.g_avl = e.maxDistance, this.g_avm = e.rolloffFactor;
            const a = {
                latencyHint: e.latencyHint
            };
            if ("undefined" != typeof AudioContext) this.g_aGA = new AudioContext(a);
            else if ("undefined" != typeof webkitAudioContext) this.g_aGA = new webkitAudioContext(a);
            else throw new Error("Web Audio API not supported");
            this.g_aGB = this.g_aGA.createGain(), this.g_aGB.connect(this.g_aGA.destination);
            const g = e.listenerPos;
            this.g_aGA.listener.setPosition(g[0], g[1], g[2]), this.g_aGA.listener.setOrientation(0, 0, 1, 0, -1, 0), window.addEventListener("pointerup", this.g_aGD, !0), window.addEventListener("touchend", this.g_aGD, !0), window.addEventListener("click", this.g_aGD, !0), window.addEventListener("keydown", this.g_aGD, !0), self.C3_GetAudioContextCurrentTime = () => this.g_aHp();
            try {
                await Promise.all(e.preloadList.map(e => this.g_aHq(e.originalUrl, e.url, e.type, !1)))
            } catch (e) {
                console.error("[Construct 3] Preloading sounds failed: ", e)
            }
            return {
                sampleRate: this.g_aGA.sampleRate
            }
        }
        g_aGE() {
            if (!this.g_aGC) {
                const e = this.g_aGA;
                "suspended" === e.state && e.resume && e.resume();
                const a = e.createBuffer(1, 220, 22050),
                    g = e.createBufferSource();
                g.buffer = a, g.connect(e.destination), g.start(0), "running" === e.state && (this.g_aGC = !0, window.removeEventListener("pointerup", this.g_aGD, !0), window.removeEventListener("touchend", this.g_aGD, !0), window.removeEventListener("click", this.g_aGD, !0), window.removeEventListener("keydown", this.g_aGD, !0), this.g_aGD = null)
            }
        }
        g_aHr() {
            return this.g_aGA
        }
        g_aHp() {
            return this.g_aGA.currentTime
        }
        g_aHs() {
            return this.g_aGB
        }
        g_aHt(e) {
            const a = this.g_aGP.get(e.toLowerCase());
            return a ? a[0].g_aHu() : this.g_aHs()
        }
        g_aHv(e, g) {
            e = e.toLowerCase();
            let _ = this.g_aGP.get(e);
            _ || (_ = [], this.g_aGP.set(e, _)), g.g_adY(_.length), g.g_aHw(e), _.push(g), this.g_aHx(e)
        }
        g_aHx(e) {
            let a = this.g_aHs();
            const g = this.g_aGP.get(e);
            if (g && g.length) {
                a = g[0].g_aHu();
                for (let e = 0, a = g.length; e < a; ++e) {
                    const _ = g[e];
                    e + 1 === a ? _.g_aHy(this.g_aHs()) : _.g_aHy(g[e + 1].g_aHu())
                }
            }
            for (const g of this.g_aHz(e)) g.g_aHA(a);
            this.g_aGT && this.g_aGS === e && (this.g_aGT.disconnect(), this.g_aGT.connect(a))
        }
        g_aHB() {
            return this.g_avp
        }
        g_avV() {
            return this.g_avq
        }
        g_aHC() {
            return this.g_avc
        }
        g_Lp() {
            return this.g_acl
        }
        g_Eu() {
            return this.g_aiB
        }
        g_aHD() {
            return this.g_aGM
        }
        g_aHE() {
            return this.g_aGO
        }
        g_aHF() {
            this.g_aGN = !0
        }
        g_aHG() {
            return this.g_avf
        }
        g_aHH() {
            return this.g_avg
        }
        g_aHI() {
            return this.g_aGL
        }
        g_aHJ() {
            return this.g_avl
        }
        g_aHK() {
            return this.g_avm
        }
        g_aHL(e, a) {
            return a ? this.g_ajf.g_ajb(e).then(e => {
                const a = this.g_aGA.createBuffer(1, e.length, 48e3),
                    g = a.getChannelData(0);
                return g.set(e), a
            }) : new Promise((a, g) => {
                this.g_aGA.decodeAudioData(e, a, g)
            })
        }
        g_aFQ(e) {
            this.g_ajf.g_aFQ(e)
        }
        g_aFR(e) {
            this.g_ajf.g_aFR(e)
        }
        g_aHM(a) {
            let g = 0;
            for (let _ = 0, e = this.g_aGG.length; _ < e; ++_) {
                const n = this.g_aGG[_];
                this.g_aGG[g] = n, n.g_aHN() === a ? n.g_eq() : ++g
            }
            this.g_aGG.length = g
        }
        g_aHO() {
            let e = 0;
            for (let a = 0, g = this.g_aGF.length; a < g; ++a) {
                const g = this.g_aGF[a];
                this.g_aGF[e] = g, g.g_aHP() ? g.g_eq() : ++e
            }
            this.g_aGF.length = e
        }* g_aHz(a) {
            if (a)
                for (const g of this.g_aGG) e(g.g_aHQ(), a) && (yield g);
            else this.g_aGH && !this.g_aGH.g_aHR() && (yield this.g_aGH)
        }
        async g_aHq(g, a, _, n, t) {
            for (const e of this.g_aGF)
                if (e.g_aHS() === a) return await e.g_Au(), e;
            if (t) return null;
            n && (this.g_aGM || this.g_aGN) && this.g_aHO();
            const e = g_aHT.g_px(this, g, a, _, n);
            return this.g_aGF.push(e), await e.g_Au(), e
        }
        async g_aHU(_, a, n, t, i) {
            for (const e of this.g_aGG)
                if (e.g_aHS() === a && (e.g_aHV() || i)) return e.g_aHW(t), e;
            const e = await this.g_aHq(_, a, n, i),
                o = e.g_ajJ(t);
            return this.g_aGG.push(o), o
        }
        g_aHX(e) {
            let a = this.g_aGK.get(e);
            if (!a) {
                let g = null;
                const _ = new Promise(e => g = e);
                a = {
                    g_aHY: 0,
                    promise: _,
                    resolve: g
                }, this.g_aGK.set(e, a)
            }
            a.g_aHY++
        }
        g_aHZ(e) {
            const a = this.g_aGK.get(e);
            if (!a) throw new Error("expected pending tag");
            a.g_aHY--, 0 === a.g_aHY && (a.resolve(), this.g_aGK.delete(e))
        }
        g_aH_(e) {
            e || (e = this.g_aGI);
            const g = this.g_aGK.get(e);
            return g ? g.promise : Promise.resolve()
        }
        g_aH$() {
            if (0 < this.g_aGQ.size) return void this.g_ZP();
            for (const e of this.g_aGG)
                if (e.g_Se()) return void this.g_ZP()
        }
        g_Jf() {
            for (const a of this.g_aGQ) a.g_Jf();
            const e = this.g_aHp();
            for (const a of this.g_aGG) a.g_Jf(e);
            const a = this.g_aGG.filter(a => a.g_Se()).map(a => a.g_aIa());
            this.g_aEr("state", {
                tickCount: this.g_aGJ,
                audioInstances: a,
                analysers: [...this.g_aGQ].map(a => a.g_aIb())
            }), 0 === a.length && 0 === this.g_aGQ.size && this.g_ZC()
        }
        g_aIc(e, a) {
            this.g_aEr("trigger", {
                type: e,
                tag: a
            })
        }
        async g_aGY(_) {
            const a = _.originalUrl,
                n = _.url,
                t = _.type,
                o = _.isMusic,
                e = _.tag,
                r = _.isLooping,
                g = _.vol,
                d = _.pos,
                i = _.panning;
            let s = _.off;
            if (0 < s && !_.trueClock)
                if (this.g_aGA.getOutputTimestamp) {
                    const e = this.g_aGA.getOutputTimestamp();
                    s = s - e.performanceTime / 1e3 + e.contextTime
                } else s = s - performance.now() / 1e3 + this.g_aGA.currentTime;
            this.g_aGI = e, this.g_aHX(e);
            try {
                this.g_aGH = await this.g_aHU(a, n, t, e, o), i ? (this.g_aGH.g_aId(!0), this.g_aGH.g_aIe(i.x, i.y, i.angle, i.innerAngle, i.outerAngle, i.outerGain), i.hasOwnProperty("uid") && this.g_aGH.g_aIf(i.uid)) : this.g_aGH.g_aId(!1), this.g_aGH.g_Jc(r, g, d, s)
            } catch (e) {
                return void console.error("[Construct 3] Audio: error starting playback: ", e)
            } finally {
                this.g_aHZ(e)
            }
            this.g_ZP()
        }
        g_aGZ(e) {
            const a = e.tag;
            for (const g of this.g_aHz(a)) g.g_IV()
        }
        g_aG_() {
            for (const e of this.g_aGG) e.g_IV()
        }
        g_aG$(e) {
            const a = e.tag,
                g = e.paused;
            for (const _ of this.g_aHz(a)) g ? _.g_aIg() : _.g_Jb();
            this.g_aH$()
        }
        g_aHa(e) {
            const a = e.tag,
                g = e.vol;
            for (const _ of this.g_aHz(a)) _.g_awd(g)
        }
        async g_aHb(g) {
            const a = g.tag,
                _ = g.vol,
                n = g.duration,
                t = g.stopOnEnd;
            await this.g_aH_(a);
            for (const e of this.g_aHz(a)) e.g_awe(_, n, t);
            this.g_aH$()
        }
        g_aHc(e) {
            this.g_avp = e.vol;
            for (const a of this.g_aGG) a.g_aIh()
        }
        g_aHd(e) {
            const a = e.tag,
                g = e.isMuted;
            for (const _ of this.g_aHz(a)) _.g_awc(g)
        }
        g_aHe(e) {
            this.g_avq = e.isSilent, this.g_ajf.g_awk(this.g_avq);
            for (const a of this.g_aGG) a.g_aIi()
        }
        g_aHf(e) {
            const a = e.tag,
                g = e.isLooping;
            for (const _ of this.g_aHz(a)) _.g_awb(g)
        }
        g_aHg(e) {
            const a = e.tag,
                g = e.rate;
            for (const _ of this.g_aHz(a)) _.g_I$(g)
        }
        g_aHh(e) {
            const a = e.tag,
                g = e.pos;
            for (const _ of this.g_aHz(a)) _.g_awj(g)
        }
        async g_aHi(g) {
            const a = g.originalUrl,
                _ = g.url,
                n = g.type,
                t = g.isMusic;
            try {
                await this.g_aHU(a, _, n, "", t)
            } catch (e) {
                console.error("[Construct 3] Audio: error preloading: ", e)
            }
        }
        async g_FG(g) {
            const a = g.url,
                _ = g.type,
                n = g.isMusic,
                t = await this.g_aHq("", a, _, n, !0);
            if (t) {
                t.g_eq();
                const e = this.g_aGF.indexOf(t); - 1 !== e && this.g_aGF.splice(e, 1)
            }
        }
        g_aHj() {
            for (const e of this.g_aGF) e.g_eq();
            this.g_aGF.length = 0
        }
        g_aHk(e) {
            const a = e.isSuspended;
            !a && this.g_aGA.resume && this.g_aGA.resume();
            for (const g of this.g_aGG) g.g_ajP(a);
            a && this.g_aGA.suspend && this.g_aGA.suspend()
        }
        g_La(e) {
            if (this.g_acl = e.timeScale, this.g_aiB = e.gameTime, this.g_aGJ = e.tickCount, 0 !== this.g_avc)
                for (const e of this.g_aGG) e.g_aIj();
            const a = e.listenerPos;
            a && this.g_aGA.listener.setPosition(a[0], a[1], a[2]);
            for (const g of e.instPans) {
                const e = g.uid;
                for (const a of this.g_aGG) a.g_Ct() === e && a.g_aIk(g.x, g.y, g.angle)
            }
        }
        async g_aHl(g) {
            const a = g.type,
                _ = g.tag,
                n = g.params;
            let t;
            if ("filter" === a) t = new g_aIl(this, ...n);
            else if ("delay" === a) t = new g_aIm(this, ...n);
            else if ("convolution" === a) {
                let a = null;
                try {
                    a = await this.g_aHq(g.bufferOriginalUrl, g.bufferUrl, g.bufferType, !1)
                } catch (e) {
                    return void console.log("[Construct 3] Audio: error loading convolution: ", e)
                }
                t = new g_aIn(this, a.g_aIo(), ...n), t.g_aIp(g.bufferOriginalUrl, g.bufferUrl, g.bufferType)
            } else if ("flanger" === a) t = new g_aIq(this, ...n);
            else if ("phaser" === a) t = new g_aIr(this, ...n);
            else if ("gain" === a) t = new g_aIs(this, ...n);
            else if ("tremolo" === a) t = new g_aIt(this, ...n);
            else if ("ringmod" === a) t = new g_aIu(this, ...n);
            else if ("distortion" === a) t = new g_aIv(this, ...n);
            else if ("compressor" === a) t = new g_aIw(this, ...n);
            else if ("analyser" === a) t = new g_aIx(this, ...n);
            else throw new Error("invalid effect type");
            this.g_aHv(_, t), this.g_aIy()
        }
        g_aHm(_) {
            const a = _.tag,
                n = _.index,
                t = _.param,
                i = _.value,
                e = _.ramp,
                o = _.time,
                g = this.g_aGP.get(a);
            !g || 0 > n || n >= g.length || (g[n].g_aIz(t, i, e, o), this.g_aIy())
        }
        g_aHn(e) {
            const a = e.tag.toLowerCase(),
                g = this.g_aGP.get(a);
            if (g && g.length) {
                for (const e of g) e.g_eq();
                this.g_aGP.delete(a), this.g_aHx(a)
            }
        }
        g_aIA(e) {
            this.g_aGQ.add(e), this.g_aH$()
        }
        g_aIB(e) {
            this.g_aGQ.delete(e)
        }
        g_aIy() {
            this.g_aGR || (this.g_aGR = !0, Promise.resolve().then(() => this.g_aIC()))
        }
        g_aIC() {
            const e = {};
            for (const [a, g] of this.g_aGP) e[a] = g.map(e => e.g_aIa());
            this.g_aEr("fxstate", {
                fxstate: e
            }), this.g_aGR = !1
        }
        async g_aHo(e) {
            const g = e.saveLoadMode;
            if (3 !== g)
                for (const e of this.g_aGG) e.g_aHP() && 1 === g || !e.g_aHP() && 2 === g || e.g_IV();
            for (const g of this.g_aGP.values())
                for (const e of g) e.g_eq();
            this.g_aGP.clear(), this.g_acl = e.timeScale, this.g_aiB = e.gameTime;
            const a = e.listenerPos;
            this.g_aGA.listener.setPosition(a[0], a[1], a[2]), this.g_avq = e.isSilent, this.g_ajf.g_awk(this.g_avq), this.g_avp = e.masterVolume;
            const _ = [];
            for (const a of Object.values(e.effects)) _.push(Promise.all(a.map(e => this.g_aHl(e))));
            await Promise.all(_), await Promise.all(e.playing.map(e => this.g_aID(e, g))), this.g_aH$()
        }
        async g_aID(_, a) {
            if (3 === a) return;
            const n = _.bufferOriginalUrl,
                t = _.bufferUrl,
                o = _.bufferType,
                e = _.isMusic,
                r = _.tag,
                g = _.isLooping,
                d = _.volume,
                i = _.playbackTime;
            if (e && 1 === a) return;
            if (!e && 2 === a) return;
            let s = null;
            try {
                s = await this.g_aHU(n, t, o, r, e)
            } catch (e) {
                return void console.error("[Construct 3] Audio: error loading audio state: ", e)
            }
            s.g_aIE(_.pan), s.g_Jc(g, d, i, 0), _.isPlaying || s.g_aIg(), s.g_aIF(_)
        }
        g_aGU(e, a) {
            this.g_aGT && this.g_aGT.disconnect(), this.g_aGS = a.toLowerCase(), this.g_aGT = this.g_aGA.createMediaStreamSource(e), this.g_aGT.connect(this.g_aHt(this.g_aGS))
        }
        g_aGW() {
            return this.g_aGV || (this.g_aGV = this.g_aGA.createMediaStreamDestination(), this.g_aGB.connect(this.g_aGV)), this.g_aGV.stream
        }
    };
    g_azA.g_aFN(a)
}
"use strict", self.g_aHT = class {
    constructor(g, a, _, n, t) {
        this.g_aIG = g, this.g_aIH = a, this.g_AR = _, this.g_kk = n, this.g_aII = t, this.g_aIJ = "", this.g_aIK = "not-loaded", this.g_AW = null
    }
    g_eq() {
        this.g_aIK = "not-loaded", this.g_aIG = null, this.g_AW = null
    }
    static g_px(g, a, _, n, t) {
        const e = "audio/webm; codecs=opus" === n && !g.g_aHE();
        return t && e && g.g_aHF(), !t || g.g_aHD() || e ? new g_aIL(g, a, _, n, t, e) : new g_aIM(g, a, _, n, t)
    }
    g_ajJ(e) {
        return "html5" === this.g_aIJ ? new g_aIN(this.g_aIG, this, e) : new g_aIO(this.g_aIG, this, e)
    }
    g_FA() {}
    g_Au() {
        return this.g_AW || (this.g_AW = this.g_FA()), this.g_AW
    }
    g_AX() {}
    g_aIP() {}
    g_aIQ() {
        return "failed" === this.g_aIK
    }
    g_aHr() {
        return this.g_aIG.g_aHr()
    }
    g_aIR() {
        return this.g_aIJ
    }
    g_aIS() {
        return this.g_aIH
    }
    g_aHS() {
        return this.g_AR
    }
    g_aIT() {
        return this.g_kk
    }
    g_aHP() {
        return this.g_aII
    }
    g_aaj() {}
}, "use strict", self.g_aIM = class extends g_aHT {
    constructor(g, a, _, n, t) {
        super(g, a, _, n, t), this.g_aIJ = "html5", this.g_aIU = new Audio, this.g_aIU.crossOrigin = "anonymous", this.g_aIU.autoplay = !1, this.g_aIU.preload = "auto", this.g_aIV = null, this.g_aIW = null, this.g_aIX = !1, this.g_aIU.addEventListener("canplaythrough", () => this.g_aIX = !0), this.g_aIY = this.g_aHr().createGain(), this.g_aIZ = null, this.g_aIU.addEventListener("canplay", () => {
            this.g_aIV && (this.g_aIK = "loaded", this.g_aIV(), this.g_aIV = null, this.g_aIW = null), this.g_aIZ || !this.g_aIU || (this.g_aIZ = this.g_aHr().createMediaElementSource(this.g_aIU), this.g_aIZ.connect(this.g_aIY))
        }), this.onended = null, this.g_aIU.addEventListener("ended", () => {
            this.onended && this.onended()
        }), this.g_aIU.addEventListener("error", e => this.g_aI_(e))
    }
    g_eq() {
        this.g_aIG.g_aHM(this), this.g_aIY.disconnect(), this.g_aIY = null, this.g_aIZ.disconnect(), this.g_aIZ = null, this.g_aIU && !this.g_aIU.paused && this.g_aIU.pause(), this.onended = null, this.g_aIU = null, super.g_eq()
    }
    g_FA() {
        return this.g_aIK = "loading", new Promise((e, a) => {
            this.g_aIV = e, this.g_aIW = a, this.g_aIU.src = this.g_AR
        })
    }
    g_aI_(e) {
        console.error(`[Construct 3] Audio '${this.g_AR}' error: `, e), this.g_aIW && (this.g_aIK = "failed", this.g_aIW(e), this.g_aIV = null, this.g_aIW = null)
    }
    g_AX() {
        const e = 4 <= this.g_aIU.readyState;
        return e && (this.g_aIX = !0), e || this.g_aIX
    }
    g_aIP() {
        return this.g_AX()
    }
    g_aI$() {
        return this.g_aIU
    }
    g_aJa() {
        return this.g_aIY
    }
    g_aaj() {
        return this.g_aIU.duration
    }
}, "use strict", self.g_aIL = class extends g_aHT {
    constructor(g, a, _, n, t, e) {
        super(g, a, _, n, t), this.g_aIJ = "webaudio", this.g_aJb = null, this.g_aJc = null, this.g_aJd = !!e
    }
    g_eq() {
        this.g_aIG.g_aHM(this), this.g_aJb = null, this.g_aJc = null, super.g_eq()
    }
    async g_aJe() {
        if (this.g_aJb) return this.g_aJb;
        const e = this.g_aIG.g_aEB();
        if ("cordova" === e.g_An() && e.g_fX(this.g_AR)) this.g_aJb = await e.g_Aj(this.g_AR);
        else {
            const e = await fetch(this.g_AR);
            if (!e.ok) throw new Error(`error fetching audio data: ${e.status} ${e.statusText}`);
            this.g_aJb = await e.arrayBuffer()
        }
    }
    async g_aJf() {
        return this.g_aJc ? this.g_aJc : void(this.g_aJc = await this.g_aIG.g_aHL(this.g_aJb, this.g_aJd), this.g_aJb = null)
    }
    async g_FA() {
        try {
            this.g_aIK = "loading", await this.g_aJe(), await this.g_aJf(), this.g_aIK = "loaded"
        } catch (e) {
            this.g_aIK = "failed", console.error(`[Construct 3] Failed to load audio '${this.g_AR}': `, e)
        }
    }
    g_AX() {
        return !!(this.g_aJb || this.g_aJc)
    }
    g_aIP() {
        return !!this.g_aJc
    }
    g_aIo() {
        return this.g_aJc
    }
    g_aaj() {
        return this.g_aJc ? this.g_aJc.duration : 0
    }
}, "use strict"; {
    function _(g) {
        return g * e
    }
    const e = 180 / Math.PI;
    self.g_aJg = class {
        constructor(e, a, g) {
            this.g_aIG = e, this.g_vd = a, this.g_aJh = g, this.g_aJi = this.g_aHr().createGain(), this.g_aJi.connect(this.g_aHs()), this.g_aJj = null, this.g_aJk = !1, this.g_OX = !0, this.g_aDc = !1, this.g_aJl = !1, this.g_VQ = !1, this.g_aJm = 1, this.g_aJn = !1, this.g_HL = 1;
            const _ = this.g_aIG.g_aHC();
            this.g_aJo = 1 === _ && !this.g_aHP() || 2 === _, this.g_aJp = -1, this.g_aJq = -1, this.g_aJr = !1
        }
        g_eq() {
            this.g_aIG = null, this.g_vd = null, this.g_aJj && (this.g_aJj.disconnect(), this.g_aJj = null), this.g_aJi.disconnect(), this.g_aJi = null
        }
        g_aHr() {
            return this.g_aIG.g_aHr()
        }
        g_aHs() {
            return this.g_aIG.g_aHt(this.g_aJh)
        }
        g_aHB() {
            return this.g_aIG.g_aHB()
        }
        g_aDd() {
            return this.g_aJo ? this.g_aIG.g_Eu() : performance.now() / 1e3
        }
        g_aIS() {
            return this.g_vd.g_aIS()
        }
        g_aHS() {
            return this.g_vd.g_aHS()
        }
        g_aIT() {
            return this.g_vd.g_aIT()
        }
        g_aHN() {
            return this.g_vd
        }
        g_aHP() {
            return this.g_vd.g_aHP()
        }
        g_aHW(e) {
            this.g_aJh = e
        }
        g_aHQ() {
            return this.g_aJh
        }
        g_aHR() {}
        g_aHV() {}
        g_IH() {
            return !this.g_OX && !this.g_aDc && !this.g_aHR()
        }
        g_Se() {
            return !this.g_OX && !this.g_aHR()
        }
        g_aJs() {}
        g_aaj(e) {
            let a = this.g_vd.g_aaj();
            return e && (a /= this.g_HL || .001), a
        }
        g_Jc() {}
        g_IV() {}
        g_aIg() {}
        g_aDe() {
            return this.g_aDc
        }
        g_Jb() {}
        g_awd(e) {
            this.g_aJm = e, this.g_aJi.gain.cancelScheduledValues(0), this.g_aJq = -1, this.g_aJi.gain.value = this.g_aJt()
        }
        g_awe(g, a, _) {
            if (!this.g_aJu()) {
                const n = this.g_aJi.gain;
                n.cancelScheduledValues(0);
                const t = this.g_aIG.g_aHp(),
                    e = t + a;
                n.setValueAtTime(this.g_aJm, t), n.linearRampToValueAtTime(g, e), this.g_aJm = g, this.g_aJq = e, this.g_aJr = _
            }
        }
        g_aIh() {
            this.g_awd(this.g_aJm)
        }
        g_Jf(e) {
            -1 !== this.g_aJq && e >= this.g_aJq && (this.g_aJq = -1, this.g_aJr && this.g_IV(), this.g_aIG.g_aIc("fade-ended", this.g_aJh))
        }
        g_aJt() {
            const e = this.g_aJm * this.g_aHB();
            return isFinite(e) ? e : 0
        }
        g_awc(e) {
            e = !!e, this.g_aJn === e || (this.g_aJn = e, this.g_aIi())
        }
        g_aJu() {
            return this.g_aJn
        }
        g_avV() {
            return this.g_aIG.g_avV()
        }
        g_aIi() {}
        g_awb() {}
        g_TO() {
            return this.g_VQ
        }
        g_I$(e) {
            this.g_HL === e || (this.g_HL = e, this.g_aIj())
        }
        g_aIj() {}
        g_aJv() {
            return this.g_HL
        }
        g_awj() {}
        g_ajP() {}
        g_aId(e) {
            e = !!e, this.g_aJk === e || (this.g_aJk = e, this.g_aJk ? (!this.g_aJj && (this.g_aJj = this.g_aHr().createPanner(), this.g_aJj.panningModel = this.g_aIG.g_aHG(), this.g_aJj.distanceModel = this.g_aIG.g_aHH(), this.g_aJj.refDistance = this.g_aIG.g_aHI(), this.g_aJj.maxDistance = this.g_aIG.g_aHJ(), this.g_aJj.rolloffFactor = this.g_aIG.g_aHK()), this.g_aJi.disconnect(), this.g_aJi.connect(this.g_aJj), this.g_aJj.connect(this.g_aHs())) : (this.g_aJj.disconnect(), this.g_aJi.disconnect(), this.g_aJi.connect(this.g_aHs())))
        }
        g_aIe(a, n, t, i, e, o) {
            this.g_aJk && (this.g_aIk(a, n, t), this.g_aJj.coneInnerAngle = _(i), this.g_aJj.coneOuterAngle = _(e), this.g_aJj.coneOuterGain = o)
        }
        g_aIk(e, a, g) {
            this.g_aJk && (this.g_aJj.setPosition(e, a, 0), this.g_aJj.setOrientation(Math.cos(g), Math.sin(g), 0))
        }
        g_aIf(e) {
            this.g_aJp = e
        }
        g_Ct() {
            return this.g_aJp
        }
        g_aJw() {}
        g_aHA(e) {
            const a = this.g_aJj || this.g_aJi;
            a.disconnect(), a.connect(e)
        }
        g_aIa() {
            return {
                tag: this.g_aJh,
                duration: this.g_aaj(),
                volume: this.g_aJm,
                isPlaying: this.g_IH(),
                playbackTime: this.g_aJs(),
                playbackRate: this.g_aJv(),
                uid: this.g_aJp,
                bufferOriginalUrl: this.g_aIS(),
                bufferUrl: "",
                bufferType: this.g_aIT(),
                isMusic: this.g_aHP(),
                isLooping: this.g_TO(),
                isMuted: this.g_aJu(),
                resumePosition: this.g_aJw(),
                pan: this.g_aJx()
            }
        }
        g_aIF(e) {
            this.g_I$(e.playbackRate), this.g_awc(e.isMuted)
        }
        g_aJx() {
            if (!this.g_aJj) return null;
            const e = this.g_aJj;
            return {
                pos: [e.positionX.value, e.positionY.value, e.positionZ.value],
                orient: [e.orientationX.value, e.orientationY.value, e.orientationZ.value],
                cia: e.coneInnerAngle,
                coa: e.coneOuterAngle,
                cog: e.coneOuterGain,
                uid: this.g_aJp
            }
        }
        g_aIE(e) {
            if (!e) return void this.g_aId(!1);
            this.g_aId(!0);
            const a = this.g_aJj;
            a.setPosition(...a.pos), a.setOrientation(...a.orient), a.coneInnerAngle = a.cia, a.coneOuterAngle = a.coa, a.coneOuterGain = a.cog, this.g_aJp = a.uid
        }
    }
}
"use strict", self.g_aIN = class extends g_aJg {
    constructor(e, a, g) {
        super(e, a, g), this.g_vd.g_aJa().connect(this.g_aJi), this.g_vd.onended = () => this.g_aJy()
    }
    g_eq() {
        this.g_IV(), this.g_vd.g_aJa().disconnect(), super.g_eq()
    }
    g_aI$() {
        return this.g_vd.g_aI$()
    }
    g_aJy() {
        this.g_OX = !0, this.g_aJp = -1, this.g_aIG.g_aIc("ended", this.g_aJh)
    }
    g_aHR() {
        return this.g_aI$().ended
    }
    g_aHV() {
        return !!this.g_OX || this.g_aHR()
    }
    g_aJs(e) {
        let a = this.g_aI$().currentTime;
        return e && (a *= this.g_HL), this.g_VQ || (a = Math.min(a, this.g_aaj())), a
    }
    g_Jc(e, a, g) {
        const _ = this.g_aI$();
        if (1 !== _.playbackRate && (_.playbackRate = 1), _.loop !== e && (_.loop = e), this.g_awd(a), _.muted && (_.muted = !1), _.currentTime !== g) try {
            _.currentTime = g
        } catch (e) {
            console.warn(`[Construct 3] Exception seeking audio '${this.g_vd.g_aHS()}' to position '${g}': `, e)
        }
        this.g_aIG.g_aFQ(_), this.g_OX = !1, this.g_aDc = !1, this.g_VQ = e, this.g_HL = 1
    }
    g_IV() {
        const e = this.g_aI$();
        e.paused || e.pause(), this.g_aIG.g_aFR(e), this.g_OX = !0, this.g_aDc = !1, this.g_aJp = -1
    }
    g_aIg() {
        if (!(this.g_aDc || this.g_OX || this.g_aHR())) {
            const e = this.g_aI$();
            e.paused || e.pause(), this.g_aIG.g_aFR(e), this.g_aDc = !0
        }
    }
    g_Jb() {
        !this.g_aDc || this.g_OX || this.g_aHR() || (this.g_aIG.g_aFQ(this.g_aI$()), this.g_aDc = !1)
    }
    g_aIi() {
        this.g_aI$().muted = this.g_aJn || this.g_avV()
    }
    g_awb(e) {
        e = !!e, this.g_VQ === e || (this.g_VQ = e, this.g_aI$().loop = e)
    }
    g_aIj() {
        let e = this.g_HL;
        this.g_aJo && (e *= this.g_aIG.g_Lp());
        try {
            this.g_aI$().playbackRate = e
        } catch (a) {
            console.warn(`[Construct 3] Unable to set playback rate '${e}':`, a)
        }
    }
    g_awj(e) {
        if (!(this.g_OX || this.g_aHR())) try {
            this.g_aI$().currentTime = e
        } catch (a) {
            console.warn(`[Construct 3] Error seeking audio to '${e}': `, a)
        }
    }
    g_aJw() {
        return this.g_aJs()
    }
    g_ajP(e) {
        e ? this.g_IH() ? (this.g_aI$().pause(), this.g_aJl = !0) : this.g_aJl = !1 : this.g_aJl && (this.g_aIG.g_aFQ(this.g_aI$()), this.g_aJl = !1)
    }
}, "use strict", self.g_aIO = class extends g_aJg {
    constructor(e, a, g) {
        super(e, a, g), this.g_aJz = null, this.g_aJA = e => this.g_aJy(e), this.g_aJB = !0, this.g_aJC = null, this.g_aiw = 0, this.g_aJD = 0, this.g_aJE = 1
    }
    g_eq() {
        this.g_IV(), this.g_aJF(), this.g_aJA = null, super.g_eq()
    }
    g_aJF() {
        this.g_aJz && this.g_aJz.disconnect(), this.g_aJz = null, this.g_aJC = null
    }
    g_aJy(e) {
        this.g_aDc || this.g_aJl || e.target !== this.g_aJC || (this.g_aJB = !0, this.g_OX = !0, this.g_aJp = -1, this.g_aJF(), this.g_aIG.g_aIc("ended", this.g_aJh))
    }
    g_aHR() {
        return !(!this.g_OX && this.g_aJz && this.g_aJz.loop) && !this.g_aDc && this.g_aJB
    }
    g_aHV() {
        return !this.g_aJz || this.g_OX || this.g_aHR()
    }
    g_aJs(e) {
        let a = 0;
        return a = this.g_aDc ? this.g_aJD : this.g_aDd() - this.g_aiw, e && (a *= this.g_HL), this.g_VQ || (a = Math.min(a, this.g_aaj())), a
    }
    g_Jc(e, a, g, _) {
        this.g_aJE = 1, this.g_awd(a), this.g_aJF(), this.g_aJz = this.g_aHr().createBufferSource(), this.g_aJz.buffer = this.g_vd.g_aIo(), this.g_aJz.connect(this.g_aJi), this.g_aJC = this.g_aJz, this.g_aJz.onended = this.g_aJA, this.g_aJz.loop = e, this.g_aJz.start(_, g), this.g_aJB = !1, this.g_OX = !1, this.g_aDc = !1, this.g_VQ = e, this.g_HL = 1, this.g_aiw = this.g_aDd() - g
    }
    g_IV() {
        this.g_aJz && this.g_aJz.stop(0), this.g_OX = !0, this.g_aDc = !1, this.g_aJp = -1
    }
    g_aIg() {
        this.g_aDc || this.g_OX || this.g_aHR() || (this.g_aJD = this.g_aJs(!0), this.g_VQ && (this.g_aJD %= this.g_aaj()), this.g_aDc = !0, this.g_aJz.stop(0))
    }
    g_Jb() {
        !this.g_aDc || this.g_OX || this.g_aHR() || (this.g_aJF(), this.g_aJz = this.g_aHr().createBufferSource(), this.g_aJz.buffer = this.g_vd.g_aIo(), this.g_aJz.connect(this.g_aJi), this.g_aJC = this.g_aJz, this.g_aJz.onended = this.g_aJA, this.g_aJz.loop = this.g_VQ, this.g_aIh(), this.g_aIj(), this.g_aiw = this.g_aDd() - this.g_aJD / (this.g_HL || .001), this.g_aJz.start(0, this.g_aJD), this.g_aDc = !1)
    }
    g_aJt() {
        return super.g_aJt() * this.g_aJE
    }
    g_aIi() {
        this.g_aJE = this.g_aJn || this.g_avV() ? 0 : 1, this.g_aIh()
    }
    g_awb(e) {
        e = !!e, this.g_VQ === e || (this.g_VQ = e, this.g_aJz && (this.g_aJz.loop = e))
    }
    g_aIj() {
        let e = this.g_HL;
        this.g_aJo && (e *= this.g_aIG.g_Lp()), this.g_aJz && (this.g_aJz.playbackRate.value = e)
    }
    g_awj(e) {
        this.g_OX || this.g_aHR() || (this.g_aDc ? this.g_aJD = e : (this.g_aIg(), this.g_aJD = e, this.g_Jb()))
    }
    g_aJw() {
        return this.g_aJD
    }
    g_ajP(e) {
        e ? this.g_IH() ? (this.g_aJl = !0, this.g_aJD = this.g_aJs(!0), this.g_VQ && (this.g_aJD %= this.g_aaj()), this.g_aJz.stop(0)) : this.g_aJl = !1 : this.g_aJl && (this.g_aJF(), this.g_aJz = this.g_aHr().createBufferSource(), this.g_aJz.buffer = this.g_vd.g_aIo(), this.g_aJz.connect(this.g_aJi), this.g_aJC = this.g_aJz, this.g_aJz.onended = this.g_aJA, this.g_aJz.loop = this.g_VQ, this.g_aIh(), this.g_aIj(), this.g_aiw = this.g_aDd() - this.g_aJD / (this.g_HL || .001), this.g_aJz.start(0, this.g_aJD), this.g_aJl = !1)
    }
    g_aIF(e) {
        super.g_aIF(e), this.g_aJD = e.resumePosition
    }
}, "use strict"; {
    function g(e) {
        return Math.pow(10, e / 20)
    }

    function _(a) {
        return Math.max(Math.min(g(a), 1), 0)
    }

    function n(e) {
        return 20 * (Math.log(e) / 2.302585092994046)
    }

    function t(e) {
        return n(Math.max(Math.min(e, 1), 0))
    }

    function i(e, a) {
        return 1 - Math.exp(-a * e)
    }
    class a {
        constructor(e) {
            this.g_aIG = e, this.g_aGA = e.g_aHr(), this.g_BE = -1, this.g_aJh = "", this.g_kk = "", this.g_aJG = null
        }
        g_eq() {
            this.g_aGA = null
        }
        g_adY(e) {
            this.g_BE = e
        }
        g_CX() {
            return this.g_BE
        }
        g_aHw(e) {
            this.g_aJh = e
        }
        g_aHQ() {
            return this.g_aJh
        }
        g_aJH() {
            return this.g_aGA.createGain()
        }
        g_aHu() {}
        g_aHy() {}
        g_aJI(g, a, _, n) {
            if (g.cancelScheduledValues(0), 0 === n) return void(g.value = a);
            const t = this.g_aGA.currentTime;
            n += t, 0 === _ ? g.setValueAtTime(a, n) : 1 === _ ? (g.setValueAtTime(g.value, t), g.linearRampToValueAtTime(a, n)) : 2 === _ ? (g.setValueAtTime(g.value, t), g.exponentialRampToValueAtTime(a, n)) : void 0
        }
        g_aIa() {
            return {
                type: this.g_kk,
                tag: this.g_aJh,
                params: this.g_aJG
            }
        }
    }
    self.g_aIl = class extends a {
        constructor(_, a, n, t, i, e, o) {
            super(_), this.g_kk = "filter", this.g_aJG = [a, n, t, i, e, o], this.g_aJJ = this.g_aJH(), this.g_aJK = this.g_aJH(), this.g_aJK.gain.value = o, this.g_aJL = this.g_aJH(), this.g_aJL.gain.value = 1 - o, this.g_aJM = this.g_aGA.createBiquadFilter(), this.g_aJM.type = a, this.g_aJM.frequency.value = n, this.g_aJM.detune.value = t, this.g_aJM.Q.value = i, this.g_aJM.gain.vlaue = e, this.g_aJJ.connect(this.g_aJM), this.g_aJJ.connect(this.g_aJL), this.g_aJM.connect(this.g_aJK)
        }
        g_eq() {
            this.g_aJJ.disconnect(), this.g_aJM.disconnect(), this.g_aJK.disconnect(), this.g_aJL.disconnect(), super.g_eq()
        }
        g_aHy(e) {
            this.g_aJK.disconnect(), this.g_aJK.connect(e), this.g_aJL.disconnect(), this.g_aJL.connect(e)
        }
        g_aHu() {
            return this.g_aJJ
        }
        g_aIz(e, a, g, _) {
            0 === e ? (a = Math.max(Math.min(a / 100, 1), 0), this.g_aJG[5] = a, this.g_aJI(this.g_aJK.gain, a, g, _), this.g_aJI(this.g_aJL.gain, 1 - a, g, _)) : 1 === e ? (this.g_aJG[1] = a, this.g_aJI(this.g_aJM.frequency, a, g, _)) : 2 === e ? (this.g_aJG[2] = a, this.g_aJI(this.g_aJM.detune, a, g, _)) : 3 === e ? (this.g_aJG[3] = a, this.g_aJI(this.g_aJM.Q, a, g, _)) : 4 === e ? (this.g_aJG[4] = a, this.g_aJI(this.g_aJM.gain, a, g, _)) : void 0
        }
    }, self.g_aIm = class extends a {
        constructor(e, a, g, _) {
            super(e), this.g_kk = "delay", this.g_aJG = [a, g, _], this.g_aJJ = this.g_aJH(), this.g_aJK = this.g_aJH(), this.g_aJK.gain.value = _, this.g_aJL = this.g_aJH(), this.g_aJL.gain.value = 1 - _, this.g_aJN = this.g_aJH(), this.g_aJO = this.g_aGA.createDelay(a), this.g_aJO.delayTime.value = a, this.g_aJP = this.g_aJH(), this.g_aJP.gain.value = g, this.g_aJJ.connect(this.g_aJN), this.g_aJJ.connect(this.g_aJL), this.g_aJN.connect(this.g_aJK), this.g_aJN.connect(this.g_aJO), this.g_aJO.connect(this.g_aJP), this.g_aJP.connect(this.g_aJN)
        }
        g_eq() {
            this.g_aJJ.disconnect(), this.g_aJK.disconnect(), this.g_aJL.disconnect(), this.g_aJN.disconnect(), this.g_aJO.disconnect(), this.g_aJP.disconnect(), super.g_eq()
        }
        g_aHy(e) {
            this.g_aJK.disconnect(), this.g_aJK.connect(e), this.g_aJL.disconnect(), this.g_aJL.connect(e)
        }
        g_aHu() {
            return this.g_aJJ
        }
        g_aIz(g, a, n, t) {
            0 === g ? (a = Math.max(Math.min(a / 100, 1), 0), this.g_aJG[2] = a, this.g_aJI(this.g_aJK.gain, a, n, t), this.g_aJI(this.g_aJL.gain, 1 - a, n, t)) : 4 === g ? (this.g_aJG[1] = _(a), this.g_aJI(this.g_aJP.gain, _(a), n, t)) : 5 === g ? (this.g_aJG[0] = a, this.g_aJI(this.g_aJO.delayTime, a, n, t)) : void 0
        }
    }, self.g_aIn = class extends a {
        constructor(e, a, g, _) {
            super(e), this.g_kk = "convolution", this.g_aJG = [g, _], this.g_aJQ = "", this.g_aJR = "", this.g_aJS = "", this.g_aJJ = this.g_aJH(), this.g_aJK = this.g_aJH(), this.g_aJK.gain.value = _, this.g_aJL = this.g_aJH(), this.g_aJL.gain.value = 1 - _, this.g_aJT = this.g_aGA.createConvolver(), this.g_aJT.normalize = g, this.g_aJT.buffer = a, this.g_aJJ.connect(this.g_aJT), this.g_aJJ.connect(this.g_aJL), this.g_aJT.connect(this.g_aJK)
        }
        g_eq() {
            this.g_aJJ.disconnect(), this.g_aJT.disconnect(), this.g_aJK.disconnect(), this.g_aJL.disconnect(), super.g_eq()
        }
        g_aHy(e) {
            this.g_aJK.disconnect(), this.g_aJK.connect(e), this.g_aJL.disconnect(), this.g_aJL.connect(e)
        }
        g_aHu() {
            return this.g_aJJ
        }
        g_aIz(e, a, g, _) {
            0 === e ? (a = Math.max(Math.min(a / 100, 1), 0), this.g_aJG[1] = a, this.g_aJI(this.g_aJK.gain, a, g, _), this.g_aJI(this.g_aJL.gain, 1 - a, g, _)) : void 0
        }
        g_aIp(e, a, g) {
            this.g_aJQ = e, this.g_aJR = a, this.g_aJS = g
        }
        g_aIa() {
            const e = super.g_aIa();
            return e.bufferOriginalUrl = this.g_aJQ, e.bufferUrl = "", e.bufferType = this.g_aJS, e
        }
    }, self.g_aIq = class extends a {
        constructor(g, a, _, n, t, e) {
            super(g), this.g_kk = "flanger", this.g_aJG = [a, _, n, t, e], this.g_aJJ = this.g_aJH(), this.g_aJL = this.g_aJH(), this.g_aJL.gain.value = 1 - e / 2, this.g_aJK = this.g_aJH(), this.g_aJK.gain.value = e / 2, this.g_aJU = this.g_aJH(), this.g_aJU.gain.value = t, this.g_aJO = this.g_aGA.createDelay(a + _), this.g_aJO.delayTime.value = a, this.g_aJV = this.g_aGA.createOscillator(), this.g_aJV.frequency.value = n, this.g_aJW = this.g_aJH(), this.g_aJW.gain.value = _, this.g_aJJ.connect(this.g_aJO), this.g_aJJ.connect(this.g_aJL), this.g_aJO.connect(this.g_aJK), this.g_aJO.connect(this.g_aJU), this.g_aJU.connect(this.g_aJO), this.g_aJV.connect(this.g_aJW), this.g_aJW.connect(this.g_aJO.delayTime), this.g_aJV.start(0)
        }
        g_eq() {
            this.g_aJV.stop(0), this.g_aJJ.disconnect(), this.g_aJO.disconnect(), this.g_aJV.disconnect(), this.g_aJW.disconnect(), this.g_aJL.disconnect(), this.g_aJK.disconnect(), this.g_aJU.disconnect(), super.g_eq()
        }
        g_aHy(e) {
            this.g_aJK.disconnect(), this.g_aJK.connect(e), this.g_aJL.disconnect(), this.g_aJL.connect(e)
        }
        g_aHu() {
            return this.g_aJJ
        }
        g_aIz(e, a, g, _) {
            0 === e ? (a = Math.max(Math.min(a / 100, 1), 0), this.g_aJG[4] = a, this.g_aJI(this.g_aJK.gain, a / 2, g, _), this.g_aJI(this.g_aJL.gain, 1 - a / 2, g, _)) : 6 === e ? (this.g_aJG[1] = a / 1e3, this.g_aJI(this.g_aJW.gain, a / 1e3, g, _)) : 7 === e ? (this.g_aJG[2] = a, this.g_aJI(this.g_aJV.frequency, a, g, _)) : 8 === e ? (this.g_aJG[3] = a / 100, this.g_aJI(this.g_aJU.gain, a / 100, g, _)) : void 0
        }
    }, self.g_aIr = class extends a {
        constructor(_, a, n, t, i, e, o) {
            super(_), this.g_kk = "phaser", this.g_aJG = [a, n, t, i, e, o], this.g_aJJ = this.g_aJH(), this.g_aJL = this.g_aJH(), this.g_aJL.gain.value = 1 - o / 2, this.g_aJK = this.g_aJH(), this.g_aJK.gain.value = o / 2, this.g_aJM = this.g_aGA.createBiquadFilter(), this.g_aJM.type = "allpass", this.g_aJM.frequency.value = a, this.g_aJM.detune.value = n, this.g_aJM.Q.value = t, this.g_aJV = this.g_aGA.createOscillator(), this.g_aJV.frequency.value = e, this.g_aJW = this.g_aJH(), this.g_aJW.gain.value = i, this.g_aJJ.connect(this.g_aJM), this.g_aJJ.connect(this.g_aJL), this.g_aJM.connect(this.g_aJK), this.g_aJV.connect(this.g_aJW), this.g_aJW.connect(this.g_aJM.frequency), this.g_aJV.start(0)
        }
        g_eq() {
            this.g_aJV.stop(0), this.g_aJJ.disconnect(), this.g_aJM.disconnect(), this.g_aJV.disconnect(), this.g_aJW.disconnect(), this.g_aJL.disconnect(), this.g_aJK.disconnect(), super.g_eq()
        }
        g_aHy(e) {
            this.g_aJK.disconnect(), this.g_aJK.connect(e), this.g_aJL.disconnect(), this.g_aJL.connect(e)
        }
        g_aHu() {
            return this.g_aJJ
        }
        g_aIz(e, a, g, _) {
            0 === e ? (a = Math.max(Math.min(a / 100, 1), 0), this.g_aJG[5] = a, this.g_aJI(this.g_aJK.gain, a / 2, g, _), this.g_aJI(this.g_aJL.gain, 1 - a / 2, g, _)) : 1 === e ? (this.g_aJG[0] = a, this.g_aJI(this.g_aJM.frequency, a, g, _)) : 2 === e ? (this.g_aJG[1] = a, this.g_aJI(this.g_aJM.detune, a, g, _)) : 3 === e ? (this.g_aJG[2] = a, this.g_aJI(this.g_aJM.Q, a, g, _)) : 6 === e ? (this.g_aJG[3] = a, this.g_aJI(this.g_aJW.gain, a, g, _)) : 7 === e ? (this.g_aJG[4] = a, this.g_aJI(this.g_aJV.frequency, a, g, _)) : void 0
        }
    }, self.g_aIs = class extends a {
        constructor(e, a) {
            super(e), this.g_kk = "gain", this.g_aJG = [a], this.g_aJX = this.g_aJH(), this.g_aJX.gain.value = a
        }
        g_eq() {
            this.g_aJX.disconnect(), super.g_eq()
        }
        g_aHy(e) {
            this.g_aJX.disconnect(), this.g_aJX.connect(e)
        }
        g_aHu() {
            return this.g_aJX
        }
        g_aIz(g, a, n, t) {
            4 === g ? (this.g_aJG[0] = _(a), this.g_aJI(this.g_aJX.gain, _(a), n, t)) : void 0
        }
    }, self.g_aIt = class extends a {
        constructor(e, a, g) {
            super(e), this.g_kk = "tremolo", this.g_aJG = [a, g], this.g_aJX = this.g_aJH(), this.g_aJX.gain.value = 1 - g / 2, this.g_aJV = this.g_aGA.createOscillator(), this.g_aJV.frequency.value = a, this.g_aJW = this.g_aJH(), this.g_aJW.gain.value = g / 2, this.g_aJV.connect(this.g_aJW), this.g_aJW.connect(this.g_aJX.gain), this.g_aJV.start(0)
        }
        g_eq() {
            this.g_aJV.stop(0), this.g_aJV.disconnect(), this.g_aJW.disconnect(), this.g_aJX.disconnect(), super.g_eq()
        }
        g_aHy(e) {
            this.g_aJX.disconnect(), this.g_aJX.connect(e)
        }
        g_aHu() {
            return this.g_aJX
        }
        g_aIz(e, a, g, _) {
            0 === e ? (a = Math.max(Math.min(a / 100, 1), 0), this.g_aJG[1] = a, this.g_aJI(this.g_aJX.gain.value, 1 - a / 2, g, _), this.g_aJI(this.g_aJW.gain.value, a / 2, g, _)) : 7 === e ? (this.g_aJG[0] = a, this.g_aJI(this.g_aJV.frequency, a, g, _)) : void 0
        }
    }, self.g_aIu = class extends a {
        constructor(e, a, g) {
            super(e), this.g_kk = "ringmod", this.g_aJG = [a, g], this.g_aJJ = this.g_aJH(), this.g_aJK = this.g_aJH(), this.g_aJK.gain.value = g, this.g_aJL = this.g_aJH(), this.g_aJL.gain.value = 1 - g, this.g_aJY = this.g_aJH(), this.g_aJY.gain.value = 0, this.g_aJV = this.g_aGA.createOscillator(), this.g_aJV.frequency.value = a, this.g_aJV.connect(this.g_aJY.gain), this.g_aJV.start(0), this.g_aJJ.connect(this.g_aJY), this.g_aJJ.connect(this.g_aJL), this.g_aJY.connect(this.g_aJK)
        }
        g_eq() {
            this.g_aJV.stop(0), this.g_aJV.disconnect(), this.g_aJY.disconnect(), this.g_aJJ.disconnect(), this.g_aJK.disconnect(), this.g_aJL.disconnect(), super.g_eq()
        }
        g_aHy(e) {
            this.g_aJK.disconnect(), this.g_aJK.connect(e), this.g_aJL.disconnect(), this.g_aJL.connect(e)
        }
        g_aHu() {
            return this.g_aJJ
        }
        g_aIz(e, a, g, _) {
            0 === e ? (a = Math.max(Math.min(a / 100, 1), 0), this.g_aJG[1] = a, this.g_aJI(this.g_aJK.gain, a, g, _), this.g_aJI(this.g_aJL.gain, 1 - a, g, _)) : 7 === e ? (this.g_aJG[0] = a, this.g_aJI(this.g_aJV.frequency, a, g, _)) : void 0
        }
    }, self.g_aIv = class extends a {
        constructor(g, a, _, n, t, e) {
            super(g), this.g_kk = "distortion", this.g_aJG = [a, _, n, t, e], this.g_aJJ = this.g_aJH(), this.g_aJZ = this.g_aJH(), this.g_aJ_ = this.g_aJH(), this.g_aJ$(n, t), this.g_aJK = this.g_aJH(), this.g_aJK.gain.value = e, this.g_aJL = this.g_aJH(), this.g_aJL.gain.value = 1 - e, this.g_aKa = this.g_aGA.createWaveShaper(), this.g_aKb = new Float32Array(65536), this.g_aKc(a, _), this.g_aKa.curve = this.g_aKb, this.g_aJJ.connect(this.g_aJZ), this.g_aJJ.connect(this.g_aJL), this.g_aJZ.connect(this.g_aKa), this.g_aKa.connect(this.g_aJ_), this.g_aJ_.connect(this.g_aJK)
        }
        g_eq() {
            this.g_aJJ.disconnect(), this.g_aJZ.disconnect(), this.g_aKa.disconnect(), this.g_aJ_.disconnect(), this.g_aJK.disconnect(), this.g_aJL.disconnect(), super.g_eq()
        }
        g_aJ$(e, g) {
            .01 > e && (e = .01), this.g_aJZ.gain.value = e, this.g_aJ_.gain.value = Math.pow(1 / e, .6) * g
        }
        g_aKc(e, a) {
            for (let g, _ = 0; 32768 > _; ++_) g = _ / 32768, g = this.g_aKd(g, e, a), this.g_aKb[32768 + _] = g, this.g_aKb[32768 - _ - 1] = -g
        }
        g_aKd(e, a, _) {
            const n = 1.05 * _ * a - a,
                t = 0 > e ? -1 : 1,
                o = 0 > e ? -e : e;
            let g = o < a ? o : a + n * i(o - a, 1 / n);
            return g *= t, g
        }
        g_aHy(e) {
            this.g_aJK.disconnect(), this.g_aJK.connect(e), this.g_aJL.disconnect(), this.g_aJL.connect(e)
        }
        g_aHu() {
            return this.g_aJJ
        }
        g_aIz(e, a, g, _) {
            0 === e ? (a = Math.max(Math.min(a / 100, 1), 0), this.g_aJG[4] = a, this.g_aJI(this.g_aJK.gain, a, g, _), this.g_aJI(this.g_aJL.gain, 1 - a, g, _)) : void 0
        }
    }, self.g_aIw = class extends a {
        constructor(g, a, _, n, t, e) {
            super(g), this.g_kk = "compressor", this.g_aJG = [a, _, n, t, e], this.g_aJX = this.g_aGA.createDynamicsCompressor(), this.g_aJX.threshold.value = a, this.g_aJX.knee.value = _, this.g_aJX.ratio.value = n, this.g_aJX.attack.value = t, this.g_aJX.release.value = e
        }
        g_eq() {
            this.g_aJX.disconnect(), super.g_eq()
        }
        g_aHy(e) {
            this.g_aJX.disconnect(), this.g_aJX.connect(e)
        }
        g_aHu() {
            return this.g_aJX
        }
        g_aIz() {}
    }, self.g_aIx = class extends a {
        constructor(e, a, g) {
            super(e), this.g_kk = "analyser", this.g_aJG = [a, g], this.g_aJX = this.g_aGA.createAnalyser(), this.g_aJX.fftSize = a, this.g_aJX.smoothingTimeConstant = g, this.g_aKe = new Float32Array(this.g_aJX.frequencyBinCount), this.g_aKf = new Uint8Array(a), this.g_aKg = 0, this.g_aKh = 0, this.g_aIG.g_aIA(this)
        }
        g_eq() {
            this.g_aIG.g_aIB(this), this.g_aJX.disconnect(), super.g_eq()
        }
        g_Jf() {
            this.g_aJX.getFloatFrequencyData(this.g_aKe), this.g_aJX.getByteTimeDomainData(this.g_aKf);
            const e = this.g_aJX.fftSize;
            this.g_aKg = 0;
            let a = 0;
            for (let g, _ = 0; _ < e; ++_) g = (this.g_aKf[_] - 128) / 128, 0 > g && (g = -g), this.g_aKg < g && (this.g_aKg = g), a += g * g;
            this.g_aKg = t(this.g_aKg), this.g_aKh = t(Math.sqrt(a / e))
        }
        g_aHy(e) {
            this.g_aJX.disconnect(), this.g_aJX.connect(e)
        }
        g_aHu() {
            return this.g_aJX
        }
        g_aIz() {}
        g_aIb() {
            return {
                tag: this.g_aHQ(),
                index: this.g_CX(),
                peak: this.g_aKg,
                rms: this.g_aKh,
                binCount: this.g_aJX.frequencyBinCount,
                freqBins: this.g_aKe
            }
        }
    }
}