/*!
 * pixi-sound - v2.0.2
 * https://github.com/pixijs/pixi-sound
 * Compiled Fri, 06 Apr 2018 20:16:08 UTC
 *
 * pixi-sound is licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license
 */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.__pixiSound = e.__pixiSound || {})
}(this, function(e) {
    "use strict";

    function t(e, t) {
        function n() {
            this.constructor = e
        }
        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }
    if ("undefined" == typeof PIXI) throw "PixiJS required";
    var n = function() {
            function e(e, t) {
                this._output = t, this._input = e
            }
            return Object.defineProperty(e.prototype, "destination", {
                get: function() {
                    return this._input
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "filters", {
                get: function() {
                    return this._filters
                },
                set: function(e) {
                    var t = this;
                    if (this._filters && (this._filters.forEach(function(e) {
                            e && e.disconnect()
                        }), this._filters = null, this._input.connect(this._output)), e && e.length) {
                        this._filters = e.slice(0), this._input.disconnect();
                        var n = null;
                        e.forEach(function(e) {
                            null === n ? t._input.connect(e.destination) : n.connect(e.destination), n = e
                        }), n.connect(this._output)
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.destroy = function() {
                this.filters = null, this._input = null, this._output = null
            }, e
        }(),
        o = Object.setPrototypeOf || {
            __proto__: []
        }
    instanceof Array && function(e, t) {
        e.__proto__ = t
    } || function(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
    }, i = 0, r = function(e) {
        function n(t) {
            var n = e.call(this) || this;
            return n.id = i++, n.init(t), n
        }
        return t(n, e), Object.defineProperty(n.prototype, "progress", {
            get: function() {
                return this._source.currentTime / this._duration
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "paused", {
            get: function() {
                return this._paused
            },
            set: function(e) {
                this._paused = e, this.refreshPaused()
            },
            enumerable: !0,
            configurable: !0
        }), n.prototype._onPlay = function() {
            this._playing = !0
        }, n.prototype._onPause = function() {
            this._playing = !1
        }, n.prototype.init = function(e) {
            this._playing = !1, this._duration = e.source.duration;
            var t = this._source = e.source.cloneNode(!1);
            t.src = e.parent.url, t.onplay = this._onPlay.bind(this), t.onpause = this._onPause.bind(this), e.context.on("refresh", this.refresh, this), e.context.on("refreshPaused", this.refreshPaused, this), this._media = e
        }, n.prototype._internalStop = function() {
            this._source && this._playing && (this._source.onended = null, this._source.pause())
        }, n.prototype.stop = function() {
            this._internalStop(), this._source && this.emit("stop")
        }, Object.defineProperty(n.prototype, "speed", {
            get: function() {
                return this._speed
            },
            set: function(e) {
                this._speed = e, this.refresh()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "volume", {
            get: function() {
                return this._volume
            },
            set: function(e) {
                this._volume = e, this.refresh()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "loop", {
            get: function() {
                return this._loop
            },
            set: function(e) {
                this._loop = e, this.refresh()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "muted", {
            get: function() {
                return this._muted
            },
            set: function(e) {
                this._muted = e, this.refresh()
            },
            enumerable: !0,
            configurable: !0
        }), n.prototype.refresh = function() {
            var e = this._media.context,
                t = this._media.parent;
            this._source.loop = this._loop || t.loop;
            var n = e.volume * (e.muted ? 0 : 1),
                o = t.volume * (t.muted ? 0 : 1),
                i = this._volume * (this._muted ? 0 : 1);
            this._source.volume = i * n * o, this._source.playbackRate = this._speed * e.speed * t.speed
        }, n.prototype.refreshPaused = function() {
            var e = this._media.context,
                t = this._media.parent,
                n = this._paused || t.paused || e.paused;
            n !== this._pausedReal && (this._pausedReal = n, n ? (this._internalStop(), this.emit("paused")) : (this.emit("resumed"), this.play({
                start: this._source.currentTime,
                end: this._end,
                volume: this._volume,
                speed: this._speed,
                loop: this._loop
            })), this.emit("pause", n))
        }, n.prototype.play = function(e) {
            var t = this,
                o = e.start,
                i = e.end,
                r = e.speed,
                s = e.loop,
                u = e.volume,
                a = e.muted;
            i && console.assert(i > o, "End time is before start time"), this._speed = r, this._volume = u, this._loop = !!s, this._muted = a, this.refresh(), this.loop && null !== i && (console.warn('Looping not support when specifying an "end" time'), this.loop = !1), this._start = o, this._end = i || this._duration, this._start = Math.max(0, this._start - n.PADDING), this._end = Math.min(this._end + n.PADDING, this._duration), this._source.onloadedmetadata = function() {
                t._source && (t._source.currentTime = o, t._source.onloadedmetadata = null, t.emit("progress", o, t._duration), PIXI.ticker.shared.add(t._onUpdate, t))
            }, this._source.onended = this._onComplete.bind(this), this._source.play(), this.emit("start")
        }, n.prototype._onUpdate = function() {
            this.emit("progress", this.progress, this._duration), this._source.currentTime >= this._end && !this._source.loop && this._onComplete()
        }, n.prototype._onComplete = function() {
            PIXI.ticker.shared.remove(this._onUpdate, this), this._internalStop(), this.emit("progress", 1, this._duration), this.emit("end", this)
        }, n.prototype.destroy = function() {
            PIXI.ticker.shared.remove(this._onUpdate, this), this.removeAllListeners();
            var e = this._source;
            e && (e.onended = null, e.onplay = null, e.onpause = null, this._internalStop()), this._source = null, this._speed = 1, this._volume = 1, this._loop = !1, this._end = null, this._start = 0, this._duration = 0, this._playing = !1, this._pausedReal = !1, this._paused = !1, this._muted = !1, this._media && (this._media.context.off("refresh", this.refresh, this), this._media.context.off("refreshPaused", this.refreshPaused, this), this._media = null)
        }, n.prototype.toString = function() {
            return "[HTMLAudioInstance id=" + this.id + "]"
        }, n.PADDING = .1, n
    }(PIXI.utils.EventEmitter), s = function(e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this
        }
        return t(n, e), n.prototype.init = function(e) {
            this.parent = e, this._source = e.options.source || new Audio, e.url && (this._source.src = e.url)
        }, n.prototype.create = function() {
            return new r(this)
        }, Object.defineProperty(n.prototype, "isPlayable", {
            get: function() {
                return !!this._source && 4 === this._source.readyState
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "duration", {
            get: function() {
                return this._source.duration
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "context", {
            get: function() {
                return this.parent.context
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "filters", {
            get: function() {
                return null
            },
            set: function(e) {
                console.warn("HTML Audio does not support filters")
            },
            enumerable: !0,
            configurable: !0
        }), n.prototype.destroy = function() {
            this.removeAllListeners(), this.parent = null, this._source && (this._source.src = "", this._source.load(), this._source = null)
        }, Object.defineProperty(n.prototype, "source", {
            get: function() {
                return this._source
            },
            enumerable: !0,
            configurable: !0
        }), n.prototype.load = function(e) {
            var t = this._source,
                n = this.parent;
            if (4 === t.readyState) {
                n.isLoaded = !0;
                var o = n.autoPlayStart();
                return void(e && setTimeout(function() {
                    e(null, n, o)
                }, 0))
            }
            if (!n.url) return e(new Error("sound.url or sound.source must be set"));
            t.src = n.url;
            var i = function() {
                    t.removeEventListener("canplaythrough", r), t.removeEventListener("load", r), t.removeEventListener("abort", s), t.removeEventListener("error", u)
                },
                r = function() {
                    i(), n.isLoaded = !0;
                    var t = n.autoPlayStart();
                    e && e(null, n, t)
                },
                s = function() {
                    i(), e && e(new Error("Sound loading has been aborted"))
                },
                u = function() {
                    i();
                    var n = "Failed to load audio element (code: " + t.error.code + ")";
                    e ? e(new Error(n)) : console.error(n)
                };
            t.addEventListener("canplaythrough", r, !1), t.addEventListener("load", r, !1), t.addEventListener("abort", s, !1), t.addEventListener("error", u, !1), t.load()
        }, n
    }(PIXI.utils.EventEmitter), u = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, a = function(e, t) {
        return t = {
            exports: {}
        }, e(t, t.exports), t.exports
    }(function(e) {
        ! function(t) {
            function n() {}

            function o(e, t) {
                return function() {
                    e.apply(t, arguments)
                }
            }

            function i(e) {
                if (!(this instanceof i)) throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof e) throw new TypeError("not a function");
                this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], l(e, this)
            }

            function r(e, t) {
                for (; 3 === e._state;) e = e._value;
                if (0 === e._state) return void e._deferreds.push(t);
                e._handled = !0, i._immediateFn(function() {
                    var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                    if (null === n) return void(1 === e._state ? s : u)(t.promise, e._value);
                    var o;
                    try {
                        o = n(e._value)
                    } catch (e) {
                        return void u(t.promise, e)
                    }
                    s(t.promise, o)
                })
            }

            function s(e, t) {
                try {
                    if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                    if (t && ("object" == typeof t || "function" == typeof t)) {
                        var n = t.then;
                        if (t instanceof i) return e._state = 3, e._value = t, void a(e);
                        if ("function" == typeof n) return void l(o(n, t), e)
                    }
                    e._state = 1, e._value = t, a(e)
                } catch (t) {
                    u(e, t)
                }
            }

            function u(e, t) {
                e._state = 2, e._value = t, a(e)
            }

            function a(e) {
                2 === e._state && 0 === e._deferreds.length && i._immediateFn(function() {
                    e._handled || i._unhandledRejectionFn(e._value)
                });
                for (var t = 0, n = e._deferreds.length; t < n; t++) r(e, e._deferreds[t]);
                e._deferreds = null
            }

            function c(e, t, n) {
                this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
            }

            function l(e, t) {
                var n = !1;
                try {
                    e(function(e) {
                        n || (n = !0, s(t, e))
                    }, function(e) {
                        n || (n = !0, u(t, e))
                    })
                } catch (e) {
                    if (n) return;
                    n = !0, u(t, e)
                }
            }
            var p = setTimeout;
            i.prototype.catch = function(e) {
                return this.then(null, e)
            }, i.prototype.then = function(e, t) {
                var o = new this.constructor(n);
                return r(this, new c(e, t, o)), o
            }, i.all = function(e) {
                return new i(function(t, n) {
                    function o(e, s) {
                        try {
                            if (s && ("object" == typeof s || "function" == typeof s)) {
                                var u = s.then;
                                if ("function" == typeof u) return void u.call(s, function(t) {
                                    o(e, t)
                                }, n)
                            }
                            i[e] = s, 0 == --r && t(i)
                        } catch (e) {
                            n(e)
                        }
                    }
                    if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
                    var i = Array.prototype.slice.call(e);
                    if (0 === i.length) return t([]);
                    for (var r = i.length, s = 0; s < i.length; s++) o(s, i[s])
                })
            }, i.resolve = function(e) {
                return e && "object" == typeof e && e.constructor === i ? e : new i(function(t) {
                    t(e)
                })
            }, i.reject = function(e) {
                return new i(function(t, n) {
                    n(e)
                })
            }, i.race = function(e) {
                return new i(function(t, n) {
                    for (var o = 0, i = e.length; o < i; o++) e[o].then(t, n)
                })
            }, i._immediateFn = "function" == typeof setImmediate && function(e) {
                setImmediate(e)
            } || function(e) {
                p(e, 0)
            }, i._unhandledRejectionFn = function(e) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
            }, i._setImmediateFn = function(e) {
                i._immediateFn = e
            }, i._setUnhandledRejectionFn = function(e) {
                i._unhandledRejectionFn = e
            }, e.exports ? e.exports = i : t.Promise || (t.Promise = i)
        }(u)
    }), c = function() {
        function e(e, t) {
            this.destination = e, this.source = t || e
        }
        return e.prototype.connect = function(e) {
            this.source.connect(e)
        }, e.prototype.disconnect = function() {
            this.source.disconnect()
        }, e.prototype.destroy = function() {
            this.disconnect(), this.destination = null, this.source = null
        }, e
    }(), l = function() {
        function e() {}
        return e.setParamValue = function(e, t) {
            if (e.setValueAtTime) {
                var n = S.instance.context;
                e.setValueAtTime(t, n.audioContext.currentTime)
            } else e.value = t;
            return t
        }, e
    }(), p = function(e) {
        function n(t, o, i, r, s, u, a, c, p, h) {
            void 0 === t && (t = 0), void 0 === o && (o = 0), void 0 === i && (i = 0), void 0 === r && (r = 0), void 0 === s && (s = 0), void 0 === u && (u = 0), void 0 === a && (a = 0), void 0 === c && (c = 0), void 0 === p && (p = 0), void 0 === h && (h = 0);
            var d = this;
            if (S.instance.useLegacy) return void(d = e.call(this, null) || this);
            var f = [{
                f: n.F32,
                type: "lowshelf",
                gain: t
            }, {
                f: n.F64,
                type: "peaking",
                gain: o
            }, {
                f: n.F125,
                type: "peaking",
                gain: i
            }, {
                f: n.F250,
                type: "peaking",
                gain: r
            }, {
                f: n.F500,
                type: "peaking",
                gain: s
            }, {
                f: n.F1K,
                type: "peaking",
                gain: u
            }, {
                f: n.F2K,
                type: "peaking",
                gain: a
            }, {
                f: n.F4K,
                type: "peaking",
                gain: c
            }, {
                f: n.F8K,
                type: "peaking",
                gain: p
            }, {
                f: n.F16K,
                type: "highshelf",
                gain: h
            }].map(function(e) {
                var t = S.instance.context.audioContext.createBiquadFilter();
                return t.type = e.type, l.setParamValue(t.gain, e.gain), l.setParamValue(t.Q, 1), l.setParamValue(t.frequency, e.f), t
            });
            (d = e.call(this, f[0], f[f.length - 1]) || this).bands = f, d.bandsMap = {};
            for (var _ = 0; _ < d.bands.length; _++) {
                var y = d.bands[_];
                _ > 0 && d.bands[_ - 1].connect(y), d.bandsMap[y.frequency.value] = y
            }
            return d
        }
        return t(n, e), n.prototype.setGain = function(e, t) {
            if (void 0 === t && (t = 0), !this.bandsMap[e]) throw "No band found for frequency " + e;
            l.setParamValue(this.bandsMap[e].gain, t)
        }, n.prototype.getGain = function(e) {
            if (!this.bandsMap[e]) throw "No band found for frequency " + e;
            return this.bandsMap[e].gain.value
        }, Object.defineProperty(n.prototype, "f32", {
            get: function() {
                return this.getGain(n.F32)
            },
            set: function(e) {
                this.setGain(n.F32, e)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "f64", {
            get: function() {
                return this.getGain(n.F64)
            },
            set: function(e) {
                this.setGain(n.F64, e)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "f125", {
            get: function() {
                return this.getGain(n.F125)
            },
            set: function(e) {
                this.setGain(n.F125, e)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "f250", {
            get: function() {
                return this.getGain(n.F250)
            },
            set: function(e) {
                this.setGain(n.F250, e)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "f500", {
            get: function() {
                return this.getGain(n.F500)
            },
            set: function(e) {
                this.setGain(n.F500, e)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "f1k", {
            get: function() {
                return this.getGain(n.F1K)
            },
            set: function(e) {
                this.setGain(n.F1K, e)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "f2k", {
            get: function() {
                return this.getGain(n.F2K)
            },
            set: function(e) {
                this.setGain(n.F2K, e)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "f4k", {
            get: function() {
                return this.getGain(n.F4K)
            },
            set: function(e) {
                this.setGain(n.F4K, e)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "f8k", {
            get: function() {
                return this.getGain(n.F8K)
            },
            set: function(e) {
                this.setGain(n.F8K, e)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "f16k", {
            get: function() {
                return this.getGain(n.F16K)
            },
            set: function(e) {
                this.setGain(n.F16K, e)
            },
            enumerable: !0,
            configurable: !0
        }), n.prototype.reset = function() {
            this.bands.forEach(function(e) {
                l.setParamValue(e.gain, 0)
            })
        }, n.prototype.destroy = function() {
            this.bands.forEach(function(e) {
                e.disconnect()
            }), this.bands = null, this.bandsMap = null
        }, n.F32 = 32, n.F64 = 64, n.F125 = 125, n.F250 = 250, n.F500 = 500, n.F1K = 1e3, n.F2K = 2e3, n.F4K = 4e3, n.F8K = 8e3, n.F16K = 16e3, n
    }(c), h = function(e) {
        function n(t) {
            void 0 === t && (t = 0);
            var n = this;
            if (S.instance.useLegacy) return void(n = e.call(this, null) || this);
            var o = S.instance.context.audioContext.createWaveShaper();
            return n = e.call(this, o) || this, n._distortion = o, n.amount = t, n
        }
        return t(n, e), Object.defineProperty(n.prototype, "amount", {
            get: function() {
                return this._amount
            },
            set: function(e) {
                e *= 1e3, this._amount = e;
                for (var t, n = new Float32Array(44100), o = Math.PI / 180, i = 0; i < 44100; ++i) t = 2 * i / 44100 - 1, n[i] = (3 + e) * t * 20 * o / (Math.PI + e * Math.abs(t));
                this._distortion.curve = n, this._distortion.oversample = "4x"
            },
            enumerable: !0,
            configurable: !0
        }), n.prototype.destroy = function() {
            this._distortion = null, e.prototype.destroy.call(this)
        }, n
    }(c), d = function(e) {
        function n(t) {
            void 0 === t && (t = 0);
            var n = this;
            if (S.instance.useLegacy) return void(n = e.call(this, null) || this);
            var o, i, r, s = S.instance.context.audioContext;
            return s.createStereoPanner ? r = o = s.createStereoPanner() : ((i = s.createPanner()).panningModel = "equalpower", r = i), n = e.call(this, r) || this, n._stereo = o, n._panner = i, n.pan = t, n
        }
        return t(n, e), Object.defineProperty(n.prototype, "pan", {
            get: function() {
                return this._pan
            },
            set: function(e) {
                this._pan = e, this._stereo ? l.setParamValue(this._stereo.pan, e) : this._panner.setPosition(e, 0, 1 - Math.abs(e))
            },
            enumerable: !0,
            configurable: !0
        }), n.prototype.destroy = function() {
            e.prototype.destroy.call(this), this._stereo = null, this._panner = null
        }, n
    }(c), f = function(e) {
        function n(t, n, o) {
            void 0 === t && (t = 3), void 0 === n && (n = 2), void 0 === o && (o = !1);
            var i = this;
            if (S.instance.useLegacy) return void(i = e.call(this, null) || this);
            var r = S.instance.context.audioContext.createConvolver();
            return i = e.call(this, r) || this, i._convolver = r, i._seconds = i._clamp(t, 1, 50), i._decay = i._clamp(n, 0, 100), i._reverse = o, i._rebuild(), i
        }
        return t(n, e), n.prototype._clamp = function(e, t, n) {
            return Math.min(n, Math.max(t, e))
        }, Object.defineProperty(n.prototype, "seconds", {
            get: function() {
                return this._seconds
            },
            set: function(e) {
                this._seconds = this._clamp(e, 1, 50), this._rebuild()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "decay", {
            get: function() {
                return this._decay
            },
            set: function(e) {
                this._decay = this._clamp(e, 0, 100), this._rebuild()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "reverse", {
            get: function() {
                return this._reverse
            },
            set: function(e) {
                this._reverse = e, this._rebuild()
            },
            enumerable: !0,
            configurable: !0
        }), n.prototype._rebuild = function() {
            for (var e, t = S.instance.context.audioContext, n = t.sampleRate, o = n * this._seconds, i = t.createBuffer(2, o, n), r = i.getChannelData(0), s = i.getChannelData(1), u = 0; u < o; u++) e = this._reverse ? o - u : u, r[u] = (2 * Math.random() - 1) * Math.pow(1 - e / o, this._decay), s[u] = (2 * Math.random() - 1) * Math.pow(1 - e / o, this._decay);
            this._convolver.buffer = i
        }, n.prototype.destroy = function() {
            this._convolver = null, e.prototype.destroy.call(this)
        }, n
    }(c), _ = function(e) {
        function n() {
            var t = this;
            S.instance.useLegacy && (t = e.call(this, null) || this);
            var n = S.instance.context.audioContext,
                o = n.createChannelSplitter(),
                i = n.createChannelMerger();
            return i.connect(o), t = e.call(this, i, o) || this, t._merger = i, t
        }
        return t(n, e), n.prototype.destroy = function() {
            this._merger.disconnect(), this._merger = null, e.prototype.destroy.call(this)
        }, n
    }(c), y = function(e) {
        function n() {
            if (S.instance.useLegacy) return void(e.call(this, null) || this);
            var t = S.instance.context.audioContext,
                n = t.createBiquadFilter(),
                o = t.createBiquadFilter(),
                i = t.createBiquadFilter(),
                r = t.createBiquadFilter();
            return n.type = "lowpass", l.setParamValue(n.frequency, 2e3), o.type = "lowpass", l.setParamValue(o.frequency, 2e3), i.type = "highpass", l.setParamValue(i.frequency, 500), r.type = "highpass", l.setParamValue(r.frequency, 500), n.connect(o), o.connect(i), i.connect(r), e.call(this, n, r) || this
        }
        return t(n, e), n
    }(c), m = Object.freeze({
        Filter: c,
        EqualizerFilter: p,
        DistortionFilter: h,
        StereoFilter: d,
        ReverbFilter: f,
        MonoFilter: _,
        TelephoneFilter: y
    }), b = function(e) {
        function n() {
            var t = e.call(this) || this;
            return t.speed = 1, t.volume = 1, t.muted = !1, t.paused = !1, t
        }
        return t(n, e), n.prototype.refresh = function() {
            this.emit("refresh")
        }, n.prototype.refreshPaused = function() {
            this.emit("refreshPaused")
        }, Object.defineProperty(n.prototype, "filters", {
            get: function() {
                return console.warn("HTML Audio does not support filters"), null
            },
            set: function(e) {
                console.warn("HTML Audio does not support filters")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "audioContext", {
            get: function() {
                return console.warn("HTML Audio does not support audioContext"), null
            },
            enumerable: !0,
            configurable: !0
        }), n.prototype.toggleMute = function() {
            return this.muted = !this.muted, this.refresh(), this.muted
        }, n.prototype.togglePause = function() {
            return this.paused = !this.paused, this.refreshPaused(), this.paused
        }, n.prototype.destroy = function() {
            this.removeAllListeners()
        }, n
    }(PIXI.utils.EventEmitter), g = Object.freeze({
        HTMLAudioMedia: s,
        HTMLAudioInstance: r,
        HTMLAudioContext: b
    }), v = 0, P = function(e) {
        function n(t) {
            var n = e.call(this) || this;
            return n.id = v++, n._media = null, n._paused = !1, n._muted = !1, n._elapsed = 0, n._updateListener = n._update.bind(n), n.init(t), n
        }
        return t(n, e), n.prototype.stop = function() {
            this._source && (this._internalStop(), this.emit("stop"))
        }, Object.defineProperty(n.prototype, "speed", {
            get: function() {
                return this._speed
            },
            set: function(e) {
                this._speed = e, this.refresh(), this._update(!0)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "volume", {
            get: function() {
                return this._volume
            },
            set: function(e) {
                this._volume = e, this.refresh()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "muted", {
            get: function() {
                return this._muted
            },
            set: function(e) {
                this._muted = e, this.refresh()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "loop", {
            get: function() {
                return this._loop
            },
            set: function(e) {
                this._loop = e, this.refresh()
            },
            enumerable: !0,
            configurable: !0
        }), n.prototype.refresh = function() {
            var e = this._media.context,
                t = this._media.parent;
            this._source.loop = this._loop || t.loop;
            var n = e.volume * (e.muted ? 0 : 1),
                o = t.volume * (t.muted ? 0 : 1),
                i = this._volume * (this._muted ? 0 : 1);
            l.setParamValue(this._gain.gain, i * o * n), l.setParamValue(this._source.playbackRate, this._speed * t.speed * e.speed)
        }, n.prototype.refreshPaused = function() {
            var e = this._media.context,
                t = this._media.parent,
                n = this._paused || t.paused || e.paused;
            n !== this._pausedReal && (this._pausedReal = n, n ? (this._internalStop(), this.emit("paused")) : (this.emit("resumed"), this.play({
                start: this._elapsed % this._duration,
                end: this._end,
                speed: this._speed,
                loop: this._loop,
                volume: this._volume
            })), this.emit("pause", n))
        }, n.prototype.play = function(e) {
            var t = e.start,
                n = e.end,
                o = e.speed,
                i = e.loop,
                r = e.volume,
                s = e.muted;
            n && console.assert(n > t, "End time is before start time"), this._paused = !1;
            var u = this._media.nodes.cloneBufferSource(),
                a = u.source,
                c = u.gain;
            this._source = a, this._gain = c, this._speed = o, this._volume = r, this._loop = !!i, this._muted = s, this.refresh(), this.loop && null !== n && (console.warn('Looping not support when specifying an "end" time'), this.loop = !1), this._end = n;
            var l = this._source.buffer.duration;
            this._duration = l, this._lastUpdate = this._now(), this._elapsed = t, this._source.onended = this._onComplete.bind(this), n ? this._source.start(0, t, n - t) : this._source.start(0, t), this.emit("start"), this._update(!0), this._enabled = !0
        }, n.prototype._toSec = function(e) {
            return e > 10 && (e /= 1e3), e || 0
        }, Object.defineProperty(n.prototype, "_enabled", {
            set: function(e) {
                var t = this._media.nodes.script;
                t.removeEventListener("audioprocess", this._updateListener), e && t.addEventListener("audioprocess", this._updateListener)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "progress", {
            get: function() {
                return this._progress
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "paused", {
            get: function() {
                return this._paused
            },
            set: function(e) {
                this._paused = e, this.refreshPaused()
            },
            enumerable: !0,
            configurable: !0
        }), n.prototype.destroy = function() {
            this.removeAllListeners(), this._internalStop(), this._source && (this._source.disconnect(), this._source = null), this._gain && (this._gain.disconnect(), this._gain = null), this._media && (this._media.context.events.off("refresh", this.refresh, this), this._media.context.events.off("refreshPaused", this.refreshPaused, this), this._media = null), this._end = null, this._speed = 1, this._volume = 1, this._loop = !1, this._elapsed = 0, this._duration = 0, this._paused = !1, this._muted = !1, this._pausedReal = !1
        }, n.prototype.toString = function() {
            return "[WebAudioInstance id=" + this.id + "]"
        }, n.prototype._now = function() {
            return this._media.context.audioContext.currentTime
        }, n.prototype._update = function(e) {
            if (void 0 === e && (e = !1), this._source) {
                var t = this._now(),
                    n = t - this._lastUpdate;
                if (n > 0 || e) {
                    var o = this._source.playbackRate.value;
                    this._elapsed += n * o, this._lastUpdate = t;
                    var i = this._duration,
                        r = this._elapsed % i / i;
                    this._progress = r, this.emit("progress", this._progress, i)
                }
            }
        }, n.prototype.init = function(e) {
            this._media = e, e.context.events.on("refresh", this.refresh, this), e.context.events.on("refreshPaused", this.refreshPaused, this)
        }, n.prototype._internalStop = function() {
            this._source && (this._enabled = !1, this._source.onended = null, this._source.stop(0), this._source = null)
        }, n.prototype._onComplete = function() {
            this._source && (this._enabled = !1, this._source.onended = null), this._source = null, this._progress = 1, this.emit("progress", 1, this._duration), this.emit("end", this)
        }, n
    }(PIXI.utils.EventEmitter), x = function(e) {
        function n(t) {
            var o = this,
                i = t.audioContext,
                r = i.createBufferSource(),
                s = i.createScriptProcessor(n.BUFFER_SIZE),
                u = i.createGain(),
                a = i.createAnalyser();
            return r.connect(a), a.connect(u), u.connect(t.destination), s.connect(t.destination), o = e.call(this, a, u) || this, o.context = t, o.bufferSource = r, o.script = s, o.gain = u, o.analyser = a, o
        }
        return t(n, e), n.prototype.destroy = function() {
            e.prototype.destroy.call(this), this.bufferSource.disconnect(), this.script.disconnect(), this.gain.disconnect(), this.analyser.disconnect(), this.bufferSource = null, this.script = null, this.gain = null, this.analyser = null, this.context = null
        }, n.prototype.cloneBufferSource = function() {
            var e = this.bufferSource,
                t = this.context.audioContext.createBufferSource();
            t.buffer = e.buffer, l.setParamValue(t.playbackRate, e.playbackRate.value), t.loop = e.loop;
            var n = this.context.audioContext.createGain();
            return t.connect(n), n.connect(this.destination), {
                source: t,
                gain: n
            }
        }, n.BUFFER_SIZE = 256, n
    }(n), O = function() {
        function e() {}
        return e.prototype.init = function(e) {
            this.parent = e, this._nodes = new x(this.context), this._source = this._nodes.bufferSource, this.source = e.options.source
        }, e.prototype.destroy = function() {
            this.parent = null, this._nodes.destroy(), this._nodes = null, this._source = null, this.source = null
        }, e.prototype.create = function() {
            return new P(this)
        }, Object.defineProperty(e.prototype, "context", {
            get: function() {
                return this.parent.context
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "isPlayable", {
            get: function() {
                return !!this._source && !!this._source.buffer
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "filters", {
            get: function() {
                return this._nodes.filters
            },
            set: function(e) {
                this._nodes.filters = e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "duration", {
            get: function() {
                return console.assert(this.isPlayable, "Sound not yet playable, no duration"), this._source.buffer.duration
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "buffer", {
            get: function() {
                return this._source.buffer
            },
            set: function(e) {
                this._source.buffer = e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "nodes", {
            get: function() {
                return this._nodes
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.load = function(e) {
            this.source ? this._decode(this.source, e) : this.parent.url ? this._loadUrl(e) : e ? e(new Error("sound.url or sound.source must be set")) : console.error("sound.url or sound.source must be set")
        }, e.prototype._loadUrl = function(e) {
            var t = this,
                n = new XMLHttpRequest,
                o = this.parent.url;
            n.open("GET", o, !0), n.responseType = "arraybuffer", n.onload = function() {
                t.source = n.response, t._decode(n.response, e)
            }, n.send()
        }, e.prototype._decode = function(e, t) {
            var n = this;
            this.parent.context.decode(e, function(e, o) {
                if (e) t && t(e);
                else {
                    n.parent.isLoaded = !0, n.buffer = o;
                    var i = n.parent.autoPlayStart();
                    t && t(null, n.parent, i)
                }
            })
        }, e
    }(), w = function() {
        function e() {}
        return e.resolveUrl = function(t) {
            var n = e.FORMAT_PATTERN,
                o = "string" == typeof t ? t : t.url;
            if (n.test(o)) {
                for (var i = n.exec(o), r = i[2].split(","), s = r[r.length - 1], u = 0, a = r.length; u < a; u++) {
                    var c = r[u];
                    if (e.supported[c]) {
                        s = c;
                        break
                    }
                }
                var l = o.replace(i[1], s);
                return "string" != typeof t && (t.extension = s, t.url = l), l
            }
            return o
        }, e.sineTone = function(e, t) {
            void 0 === e && (e = 200), void 0 === t && (t = 1);
            var n = I.from({
                singleInstance: !0
            });
            if (!(n.media instanceof O)) return n;
            for (var o = n.media, i = n.context.audioContext.createBuffer(1, 48e3 * t, 48e3), r = i.getChannelData(0), s = 0; s < r.length; s++) {
                var u = e * (s / i.sampleRate) * Math.PI;
                r[s] = 2 * Math.sin(u)
            }
            return o.buffer = i, n.isLoaded = !0, n
        }, e.render = function(e, t) {
            var n = document.createElement("canvas");
            t = Object.assign({
                width: 512,
                height: 128,
                fill: "black"
            }, t || {}), n.width = t.width, n.height = t.height;
            var o = PIXI.BaseTexture.fromCanvas(n);
            if (!(e.media instanceof O)) return o;
            var i = e.media;
            console.assert(!!i.buffer, "No buffer found, load first");
            var r = n.getContext("2d");
            r.fillStyle = t.fill;
            for (var s = i.buffer.getChannelData(0), u = Math.ceil(s.length / t.width), a = t.height / 2, c = 0; c < t.width; c++) {
                for (var l = 1, p = -1, h = 0; h < u; h++) {
                    var d = s[c * u + h];
                    d < l && (l = d), d > p && (p = d)
                }
                r.fillRect(c, (1 + l) * a, 1, Math.max(1, (p - l) * a))
            }
            return o
        }, e.playOnce = function(t, n) {
            var o = "alias" + e.PLAY_ID++;
            return S.instance.add(o, {
                url: t,
                preload: !0,
                autoPlay: !0,
                loaded: function(e) {
                    e && (console.error(e), S.instance.remove(o), n && n(e))
                },
                complete: function() {
                    S.instance.remove(o), n && n(null)
                }
            }), o
        }, e.PLAY_ID = 0, e.FORMAT_PATTERN = /\.(\{([^\}]+)\})(\?.*)?$/, e.extensions = ["mp3", "ogg", "oga", "opus", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"], e.supported = function() {
            var t = {
                    m4a: "mp4",
                    oga: "ogg"
                },
                n = document.createElement("audio"),
                o = {};
            return e.extensions.forEach(function(e) {
                var i = t[e] || e,
                    r = n.canPlayType("audio/" + e).replace(/^no$/, ""),
                    s = n.canPlayType("audio/" + i).replace(/^no$/, "");
                o[e] = !!r || !!s
            }), Object.freeze(o)
        }(), e
    }(), j = function(e) {
        function n(t, n) {
            var o = e.call(this, t, n) || this;
            return o.use(A.plugin), o.pre(A.resolve), o
        }
        return t(n, e), n.addPixiMiddleware = function(t) {
            e.addPixiMiddleware.call(this, t)
        }, n
    }(PIXI.loaders.Loader), A = function() {
        function e() {}
        return e.install = function(t) {
            e._sound = t, e.legacy = t.useLegacy, PIXI.loaders.Loader = j, PIXI.loader.use(e.plugin), PIXI.loader.pre(e.resolve)
        }, Object.defineProperty(e, "legacy", {
            set: function(e) {
                var t = PIXI.loaders.Resource,
                    n = w.extensions;
                e ? n.forEach(function(e) {
                    t.setExtensionXhrType(e, t.XHR_RESPONSE_TYPE.DEFAULT), t.setExtensionLoadType(e, t.LOAD_TYPE.AUDIO)
                }) : n.forEach(function(e) {
                    t.setExtensionXhrType(e, t.XHR_RESPONSE_TYPE.BUFFER), t.setExtensionLoadType(e, t.LOAD_TYPE.XHR)
                })
            },
            enumerable: !0,
            configurable: !0
        }), e.resolve = function(e, t) {
            w.resolveUrl(e), t()
        }, e.plugin = function(t, n) {
            t.data && w.extensions.indexOf(t.extension) > -1 ? t.sound = e._sound.add(t.name, {
                loaded: n,
                preload: !0,
                url: t.url,
                source: t.data
            }) : n()
        }, e
    }(), F = function() {
        function e(e, t) {
            this.parent = e, Object.assign(this, t), this.duration = this.end - this.start, console.assert(this.duration > 0, "End time must be after start time")
        }
        return e.prototype.play = function(e) {
            return this.parent.play(Object.assign({
                complete: e,
                speed: this.speed || this.parent.speed,
                end: this.end,
                start: this.start
            }))
        }, e.prototype.destroy = function() {
            this.parent = null
        }, e
    }(), E = function(e) {
        function n() {
            var t = this,
                o = new n.AudioContext,
                i = o.createDynamicsCompressor(),
                r = o.createAnalyser();
            return r.connect(i), i.connect(o.destination), t = e.call(this, r, i) || this, t._ctx = o, t._offlineCtx = new n.OfflineAudioContext(1, 2, o.sampleRate), t._unlocked = !1, t.compressor = i, t.analyser = r, t.events = new PIXI.utils.EventEmitter, t.volume = 1, t.speed = 1, t.muted = !1, t.paused = !1, "running" !== o.state && (t._unlock(), t._unlock = t._unlock.bind(t), document.addEventListener("mousedown", t._unlock, !0), document.addEventListener("touchstart", t._unlock, !0), document.addEventListener("touchend", t._unlock, !0)), t
        }
        return t(n, e), n.prototype._unlock = function() {
            this._unlocked || (this.playEmptySound(), "running" === this._ctx.state && (document.removeEventListener("mousedown", this._unlock, !0), document.removeEventListener("touchend", this._unlock, !0), document.removeEventListener("touchstart", this._unlock, !0), this._unlocked = !0))
        }, n.prototype.playEmptySound = function() {
            var e = this._ctx.createBufferSource();
            e.buffer = this._ctx.createBuffer(1, 1, 22050), e.connect(this._ctx.destination), e.start(0, 0, 0), "suspended" === e.context.state && e.context.resume()
        }, Object.defineProperty(n, "AudioContext", {
            get: function() {
                var e = window;
                return e.AudioContext || e.webkitAudioContext || null
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n, "OfflineAudioContext", {
            get: function() {
                var e = window;
                return e.OfflineAudioContext || e.webkitOfflineAudioContext || null
            },
            enumerable: !0,
            configurable: !0
        }), n.prototype.destroy = function() {
            e.prototype.destroy.call(this);
            var t = this._ctx;
            void 0 !== t.close && t.close(), this.events.removeAllListeners(), this.analyser.disconnect(), this.compressor.disconnect(), this.analyser = null, this.compressor = null, this.events = null, this._offlineCtx = null, this._ctx = null
        }, Object.defineProperty(n.prototype, "audioContext", {
            get: function() {
                return this._ctx
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "offlineContext", {
            get: function() {
                return this._offlineCtx
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "paused", {
            get: function() {
                return this._paused
            },
            set: function(e) {
                e && "running" === this._ctx.state ? this._ctx.suspend() : e || "suspended" !== this._ctx.state || this._ctx.resume(), this._paused = e
            },
            enumerable: !0,
            configurable: !0
        }), n.prototype.refresh = function() {
            this.events.emit("refresh")
        }, n.prototype.refreshPaused = function() {
            this.events.emit("refreshPaused")
        }, n.prototype.toggleMute = function() {
            return this.muted = !this.muted, this.refresh(), this.muted
        }, n.prototype.togglePause = function() {
            return this.paused = !this.paused, this.refreshPaused(), this._paused
        }, n.prototype.decode = function(e, t) {
            this._offlineCtx.decodeAudioData(e, function(e) {
                t(null, e)
            }, function() {
                t(new Error("Unable to decode file"))
            })
        }, n
    }(n), L = Object.freeze({
        WebAudioMedia: O,
        WebAudioInstance: P,
        WebAudioNodes: x,
        WebAudioContext: E,
        WebAudioUtils: l
    }), S = function() {
        function e() {
            this.init()
        }
        return e.prototype.init = function() {
            return this.supported && (this._webAudioContext = new E), this._htmlAudioContext = new b, this._sounds = {}, this.useLegacy = !this.supported, this
        }, Object.defineProperty(e.prototype, "context", {
            get: function() {
                return this._context
            },
            enumerable: !0,
            configurable: !0
        }), e.init = function() {
            if (e.instance) throw new Error("SoundLibrary is already created");
            var t = e.instance = new e;
            "undefined" == typeof Promise && (window.Promise = a), void 0 !== PIXI.loaders && A.install(t), void 0 === window.__pixiSound && delete window.__pixiSound;
            var o = PIXI;
            return o.sound || (Object.defineProperty(o, "sound", {
                get: function() {
                    return t
                }
            }), Object.defineProperties(t, {
                filters: {
                    get: function() {
                        return m
                    }
                },
                htmlaudio: {
                    get: function() {
                        return g
                    }
                },
                webaudio: {
                    get: function() {
                        return L
                    }
                },
                utils: {
                    get: function() {
                        return w
                    }
                },
                Sound: {
                    get: function() {
                        return I
                    }
                },
                SoundSprite: {
                    get: function() {
                        return F
                    }
                },
                Filterable: {
                    get: function() {
                        return n
                    }
                },
                SoundLibrary: {
                    get: function() {
                        return e
                    }
                }
            })), t
        }, Object.defineProperty(e.prototype, "filtersAll", {
            get: function() {
                return this.useLegacy ? [] : this._context.filters
            },
            set: function(e) {
                this.useLegacy || (this._context.filters = e)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "supported", {
            get: function() {
                return null !== E.AudioContext
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.add = function(e, t) {
            if ("object" == typeof e) {
                var n = {};
                for (var o in e) {
                    i = this._getOptions(e[o], t);
                    n[o] = this.add(o, i)
                }
                return n
            }
            if ("string" == typeof e) {
                if (console.assert(!this._sounds[e], "Sound with alias " + e + " already exists."), t instanceof I) return this._sounds[e] = t, t;
                var i = this._getOptions(t),
                    r = I.from(i);
                return this._sounds[e] = r, r
            }
        }, e.prototype._getOptions = function(e, t) {
            var n;
            return n = "string" == typeof e ? {
                url: e
            } : e instanceof ArrayBuffer || e instanceof HTMLAudioElement ? {
                source: e
            } : e, Object.assign(n, t || {})
        }, Object.defineProperty(e.prototype, "useLegacy", {
            get: function() {
                return this._useLegacy
            },
            set: function(e) {
                A.legacy = e, this._useLegacy = e, !e && this.supported ? this._context = this._webAudioContext : this._context = this._htmlAudioContext
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.remove = function(e) {
            return this.exists(e, !0), this._sounds[e].destroy(), delete this._sounds[e], this
        }, Object.defineProperty(e.prototype, "volumeAll", {
            get: function() {
                return this._context.volume
            },
            set: function(e) {
                this._context.volume = e, this._context.refresh()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "speedAll", {
            get: function() {
                return this._context.speed
            },
            set: function(e) {
                this._context.speed = e, this._context.refresh()
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.togglePauseAll = function() {
            return this._context.togglePause()
        }, e.prototype.pauseAll = function() {
            return this._context.paused = !0, this._context.refresh(), this
        }, e.prototype.resumeAll = function() {
            return this._context.paused = !1, this._context.refresh(), this
        }, e.prototype.toggleMuteAll = function() {
            return this._context.toggleMute()
        }, e.prototype.muteAll = function() {
            return this._context.muted = !0, this._context.refresh(), this
        }, e.prototype.unmuteAll = function() {
            return this._context.muted = !1, this._context.refresh(), this
        }, e.prototype.removeAll = function() {
            for (var e in this._sounds) this._sounds[e].destroy(), delete this._sounds[e];
            return this
        }, e.prototype.stopAll = function() {
            for (var e in this._sounds) this._sounds[e].stop();
            return this
        }, e.prototype.exists = function(e, t) {
            void 0 === t && (t = !1);
            var n = !!this._sounds[e];
            return t && console.assert(n, "No sound matching alias '" + e + "'."), n
        }, e.prototype.find = function(e) {
            return this.exists(e, !0), this._sounds[e]
        }, e.prototype.play = function(e, t) {
            return this.find(e).play(t)
        }, e.prototype.stop = function(e) {
            return this.find(e).stop()
        }, e.prototype.pause = function(e) {
            return this.find(e).pause()
        }, e.prototype.resume = function(e) {
            return this.find(e).resume()
        }, e.prototype.volume = function(e, t) {
            var n = this.find(e);
            return void 0 !== t && (n.volume = t), n.volume
        }, e.prototype.speed = function(e, t) {
            var n = this.find(e);
            return void 0 !== t && (n.speed = t), n.speed
        }, e.prototype.duration = function(e) {
            return this.find(e).duration
        }, e.prototype.close = function() {
            return this.removeAll(), this._sounds = null, this._webAudioContext && (this._webAudioContext.destroy(), this._webAudioContext = null), this._htmlAudioContext && (this._htmlAudioContext.destroy(), this._htmlAudioContext = null), this._context = null, this
        }, e
    }(), I = function() {
        function e(e, t) {
            this.media = e, this.options = t, this._instances = [], this._sprites = {}, this.media.init(this);
            var n = t.complete;
            this._autoPlayOptions = n ? {
                complete: n
            } : null, this.isLoaded = !1, this.isPlaying = !1, this.autoPlay = t.autoPlay, this.singleInstance = t.singleInstance, this.preload = t.preload || this.autoPlay, this.url = t.url, this.speed = t.speed, this.volume = t.volume, this.loop = t.loop, t.sprites && this.addSprites(t.sprites), this.preload && this._preload(t.loaded)
        }
        return e.from = function(t) {
            var n = {};
            return "string" == typeof t ? n.url = t : t instanceof ArrayBuffer || t instanceof HTMLAudioElement ? n.source = t : n = t, (n = Object.assign({
                autoPlay: !1,
                singleInstance: !1,
                url: null,
                source: null,
                preload: !1,
                volume: 1,
                speed: 1,
                complete: null,
                loaded: null,
                loop: !1
            }, n)).url && (n.url = w.resolveUrl(n.url)), Object.freeze(n), new e(S.instance.useLegacy ? new s : new O, n)
        }, Object.defineProperty(e.prototype, "context", {
            get: function() {
                return S.instance.context
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.pause = function() {
            return this.isPlaying = !1, this.paused = !0, this
        }, e.prototype.resume = function() {
            return this.isPlaying = this._instances.length > 0, this.paused = !1, this
        }, Object.defineProperty(e.prototype, "paused", {
            get: function() {
                return this._paused
            },
            set: function(e) {
                this._paused = e, this.refreshPaused()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "speed", {
            get: function() {
                return this._speed
            },
            set: function(e) {
                this._speed = e, this.refresh()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "filters", {
            get: function() {
                return this.media.filters
            },
            set: function(e) {
                this.media.filters = e
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.addSprites = function(e, t) {
            if ("object" == typeof e) {
                var n = {};
                for (var o in e) n[o] = this.addSprites(o, e[o]);
                return n
            }
            if ("string" == typeof e) {
                console.assert(!this._sprites[e], "Alias " + e + " is already taken");
                var i = new F(this, t);
                return this._sprites[e] = i, i
            }
        }, e.prototype.destroy = function() {
            this._removeInstances(), this.removeSprites(), this.media.destroy(), this.media = null, this._sprites = null, this._instances = null
        }, e.prototype.removeSprites = function(e) {
            if (e) {
                var t = this._sprites[e];
                void 0 !== t && (t.destroy(), delete this._sprites[e])
            } else
                for (var n in this._sprites) this.removeSprites(n);
            return this
        }, Object.defineProperty(e.prototype, "isPlayable", {
            get: function() {
                return this.isLoaded && this.media && this.media.isPlayable
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.stop = function() {
            if (!this.isPlayable) return this.autoPlay = !1, this._autoPlayOptions = null, this;
            this.isPlaying = !1;
            for (var e = this._instances.length - 1; e >= 0; e--) this._instances[e].stop();
            return this
        }, e.prototype.play = function(e, t) {
            var n, o = this;
            if ("string" == typeof e ? n = {
                    sprite: r = e,
                    complete: t
                } : "function" == typeof e ? (n = {}).complete = e : n = e, (n = Object.assign({
                    complete: null,
                    loaded: null,
                    sprite: null,
                    end: null,
                    start: 0,
                    volume: 1,
                    speed: 1,
                    muted: !1,
                    loop: !1
                }, n || {})).sprite) {
                var i = n.sprite;
                console.assert(!!this._sprites[i], "Alias " + i + " is not available");
                var r = this._sprites[i];
                n.start = r.start, n.end = r.end, n.speed = r.speed || 1, delete n.sprite
            }
            if (n.offset && (n.start = n.offset), !this.isLoaded) return new Promise(function(e, t) {
                o.autoPlay = !0, o._autoPlayOptions = n, o._preload(function(o, i, r) {
                    o ? t(o) : (n.loaded && n.loaded(o, i, r), e(r))
                })
            });
            this.singleInstance && this._removeInstances();
            var s = this._createInstance();
            return this._instances.push(s), this.isPlaying = !0, s.once("end", function() {
                n.complete && n.complete(o), o._onComplete(s)
            }), s.once("stop", function() {
                o._onComplete(s)
            }), s.play(n), s
        }, e.prototype.refresh = function() {
            for (var e = this._instances.length, t = 0; t < e; t++) this._instances[t].refresh()
        }, e.prototype.refreshPaused = function() {
            for (var e = this._instances.length, t = 0; t < e; t++) this._instances[t].refreshPaused()
        }, Object.defineProperty(e.prototype, "volume", {
            get: function() {
                return this._volume
            },
            set: function(e) {
                this._volume = e, this.refresh()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "muted", {
            get: function() {
                return this._muted
            },
            set: function(e) {
                this._muted = e, this.refresh()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "loop", {
            get: function() {
                return this._loop
            },
            set: function(e) {
                this._loop = e, this.refresh()
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype._preload = function(e) {
            this.media.load(e)
        }, Object.defineProperty(e.prototype, "instances", {
            get: function() {
                return this._instances
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "sprites", {
            get: function() {
                return this._sprites
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "duration", {
            get: function() {
                return this.media.duration
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.autoPlayStart = function() {
            var e;
            return this.autoPlay && (e = this.play(this._autoPlayOptions)), e
        }, e.prototype._removeInstances = function() {
            for (var e = this._instances.length - 1; e >= 0; e--) this._poolInstance(this._instances[e]);
            this._instances.length = 0
        }, e.prototype._onComplete = function(e) {
            if (this._instances) {
                var t = this._instances.indexOf(e);
                t > -1 && this._instances.splice(t, 1), this.isPlaying = this._instances.length > 0
            }
            this._poolInstance(e)
        }, e.prototype._createInstance = function() {
            if (e._pool.length > 0) {
                var t = e._pool.pop();
                return t.init(this.media), t
            }
            return this.media.create()
        }, e.prototype._poolInstance = function(t) {
            t.destroy(), e._pool.indexOf(t) < 0 && e._pool.push(t)
        }, e._pool = [], e
    }(), C = S.init();
    e.sound = C, e.filters = m, e.htmlaudio = g, e.webaudio = L, e.Filterable = n, e.Sound = I, e.SoundLibrary = S, e.SoundSprite = F, e.utils = w, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=pixi-sound.js.map