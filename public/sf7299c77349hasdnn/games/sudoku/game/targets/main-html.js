(function() {
    "use strict";
    var $hxClasses = {},
        $estr = function() {
            return js.Boot.__string_rec(this, '');
        };

    function $extend(from, fields) {
        function inherit() {};
        inherit.prototype = from;
        var proto = new inherit();
        for (var name in fields) proto[name] = fields[name];
        if (fields.toString !== Object.prototype.toString) proto.toString = fields.toString;
        return proto;
    }
    var EReg = function(r, opt) {
        opt = opt.split("u").join("");
        this.r = new RegExp(r, opt);
    };
    $hxClasses["EReg"] = EReg;
    EReg.__name__ = true;
    EReg.prototype = {
        matchedPos: function() {
            if (this.r.m == null) throw "No string matched";
            return {
                pos: this.r.m.index,
                len: this.r.m[0].length
            };
        },
        matched: function(n) {
            return this.r.m != null && n >= 0 && n < this.r.m.length ? this.r.m[n] : (function($this) {
                var $r;
                throw "EReg::matched";
                return $r;
            }(this));
        },
        match: function(s) {
            if (this.r.global) this.r.lastIndex = 0;
            this.r.m = this.r.exec(s);
            this.r.s = s;
            return this.r.m != null;
        },
        r: null,
        __class__: EReg
    }
    var HxOverrides = function() {}
    $hxClasses["HxOverrides"] = HxOverrides;
    HxOverrides.__name__ = true;
    HxOverrides.cca = function(s, index) {
        var x = s.charCodeAt(index);
        if (x != x) return undefined;
        return x;
    }
    HxOverrides.substr = function(s, pos, len) {
        if (pos != null && pos != 0 && len != null && len < 0) return "";
        if (len == null) len = s.length;
        if (pos < 0) {
            pos = s.length + pos;
            if (pos < 0) pos = 0;
        } else if (len < 0) len = s.length + len - pos;
        return s.substr(pos, len);
    }
    HxOverrides.remove = function(a, obj) {
        var i = 0;
        var l = a.length;
        while (i < l) {
            if (a[i] == obj) {
                a.splice(i, 1);
                return true;
            }
            i++;
        }
        return false;
    }
    HxOverrides.iter = function(a) {
        return {
            cur: 0,
            arr: a,
            hasNext: function() {
                return this.cur < this.arr.length;
            },
            next: function() {
                return this.arr[this.cur++];
            }
        };
    }
    var Lambda = function() {}
    $hxClasses["Lambda"] = Lambda;
    Lambda.__name__ = true;
    Lambda.array = function(it) {
        var a = new Array();
        var $it0 = $iterator(it)();
        while ($it0.hasNext()) {
            var i = $it0.next();
            a.push(i);
        }
        return a;
    }
    Lambda.count = function(it, pred) {
        var n = 0;
        if (pred == null) {
            var $it0 = $iterator(it)();
            while ($it0.hasNext()) {
                var _ = $it0.next();
                n++;
            }
        } else {
            var $it1 = $iterator(it)();
            while ($it1.hasNext()) {
                var x = $it1.next();
                if (pred(x)) n++;
            }
        }
        return n;
    }
    var IMap = function() {}
    $hxClasses["IMap"] = IMap;
    IMap.__name__ = true;
    var Reflect = function() {}
    $hxClasses["Reflect"] = Reflect;
    Reflect.__name__ = true;
    Reflect.hasField = function(o, field) {
        return Object.prototype.hasOwnProperty.call(o, field);
    }
    Reflect.field = function(o, field) {
        var v = null;
        try {
            v = o[field];
        } catch (e) {}
        return v;
    }
    Reflect.isFunction = function(f) {
        return typeof(f) == "function" && !(f.__name__ || f.__ename__);
    }
    var Std = function() {}
    $hxClasses["Std"] = Std;
    Std.__name__ = true;
    Std.string = function(s) {
        return js.Boot.__string_rec(s, "");
    }
    Std.parseInt = function(x) {
        var v = parseInt(x, 10);
        if (v == 0 && (HxOverrides.cca(x, 1) == 120 || HxOverrides.cca(x, 1) == 88)) v = parseInt(x);
        if (isNaN(v)) return null;
        return v;
    }
    Std.parseFloat = function(x) {
        return parseFloat(x);
    }
    Std.random = function(x) {
        return x <= 0 ? 0 : Math.floor(Math.random() * x);
    }
    var StringBuf = function() {
        this.b = "";
    };
    $hxClasses["StringBuf"] = StringBuf;
    StringBuf.__name__ = true;
    StringBuf.prototype = {
        addSub: function(s, pos, len) {
            this.b += len == null ? HxOverrides.substr(s, pos, null) : HxOverrides.substr(s, pos, len);
        },
        b: null,
        __class__: StringBuf
    }
    var StringTools = function() {}
    $hxClasses["StringTools"] = StringTools;
    StringTools.__name__ = true;
    StringTools.urlEncode = function(s) {
        return encodeURIComponent(s);
    }
    StringTools.isSpace = function(s, pos) {
        var c = HxOverrides.cca(s, pos);
        return c > 8 && c < 14 || c == 32;
    }
    StringTools.ltrim = function(s) {
        var l = s.length;
        var r = 0;
        while (r < l && StringTools.isSpace(s, r)) r++;
        if (r > 0) return HxOverrides.substr(s, r, l - r);
        else return s;
    }
    StringTools.rtrim = function(s) {
        var l = s.length;
        var r = 0;
        while (r < l && StringTools.isSpace(s, l - r - 1)) r++;
        if (r > 0) return HxOverrides.substr(s, 0, l - r);
        else return s;
    }
    StringTools.trim = function(s) {
        return StringTools.ltrim(StringTools.rtrim(s));
    }
    StringTools.lpad = function(s, c, l) {
        if (c.length <= 0) return s;
        while (s.length < l) s = c + s;
        return s;
    }
    StringTools.replace = function(s, sub, by) {
        return s.split(sub).join(by);
    }
    var Type = function() {}
    $hxClasses["Type"] = Type;
    Type.__name__ = true;
    Type.getClass = function(o) {
        if (o == null) return null;
        return o.__class__;
    }
    Type.resolveClass = function(name) {
        var cl = $hxClasses[name];
        if (cl == null || !cl.__name__) return null;
        return cl;
    }
    Type.resolveEnum = function(name) {
        var e = $hxClasses[name];
        if (e == null || !e.__ename__) return null;
        return e;
    }
    Type.getInstanceFields = function(c) {
        var a = [];
        for (var i in c.prototype) a.push(i);
        HxOverrides.remove(a, "__class__");
        HxOverrides.remove(a, "__properties__");
        return a;
    }
    var flambe = {}
    flambe.util = {}
    flambe.util.Disposable = function() {}
    $hxClasses["flambe.util.Disposable"] = flambe.util.Disposable;
    flambe.util.Disposable.__name__ = true;
    flambe.util.Disposable.prototype = {
        dispose: null,
        __class__: flambe.util.Disposable
    }
    flambe.Component = function() {}
    $hxClasses["flambe.Component"] = flambe.Component;
    flambe.Component.__name__ = true;
    flambe.Component.__interfaces__ = [flambe.util.Disposable];
    flambe.Component.prototype = {
        init: function(owner, next) {
            this.owner = owner;
            this.next = next;
        },
        get_name: function() {
            return null;
        },
        dispose: function() {
            if (this.owner != null) this.owner.remove(this);
        },
        onUpdate: function(dt) {},
        onRemoved: function() {},
        onAdded: function() {},
        next: null,
        owner: null,
        __class__: flambe.Component
    }
    flambe.Disposer = function() {
        this._disposables = [];
    };
    $hxClasses["flambe.Disposer"] = flambe.Disposer;
    flambe.Disposer.__name__ = true;
    flambe.Disposer.__super__ = flambe.Component;
    flambe.Disposer.prototype = $extend(flambe.Component.prototype, {
        _disposables: null,
        freeDisposables: function() {
            var snapshot = this._disposables;
            this._disposables = [];
            var _g = 0;
            while (_g < snapshot.length) {
                var disposable = snapshot[_g];
                ++_g;
                disposable.dispose();
            }
        },
        dispose: function() {
            flambe.Component.prototype.dispose.call(this);
            this.freeDisposables();
        },
        onRemoved: function() {
            this.freeDisposables();
        },
        connect1: function(signal, listener) {
            this.add(signal.connect(listener));
            return this;
        },
        connect0: function(signal, listener) {
            this.add(signal.connect(listener));
            return this;
        },
        add: function(disposable) {
            this._disposables.push(disposable);
            return this;
        },
        get_name: function() {
            return "Disposer_5";
        },
        __class__: flambe.Disposer
    });
    flambe.Entity = function() {
        this.firstComponent = null;
        this.next = null;
        this.firstChild = null;
        this.parent = null;
        this._compMap = {};
    };
    $hxClasses["flambe.Entity"] = flambe.Entity;
    flambe.Entity.__name__ = true;
    flambe.Entity.__interfaces__ = [flambe.util.Disposable];
    flambe.Entity.prototype = {
        _compMap: null,
        dispose: function() {
            if (this.parent != null) this.parent.removeChild(this);
            while (this.firstComponent != null) this.firstComponent.dispose();
            this.disposeChildren();
        },
        disposeChildren: function() {
            while (this.firstChild != null) this.firstChild.dispose();
        },
        removeChild: function(entity) {
            var prev = null,
                p = this.firstChild;
            while (p != null) {
                var next = p.next;
                if (p == entity) {
                    if (prev == null) this.firstChild = next;
                    else prev.next = next;
                    p.parent = null;
                    p.next = null;
                    return;
                }
                prev = p;
                p = next;
            }
        },
        addChild: function(entity, append) {
            if (append == null) append = true;
            if (entity.parent != null) entity.parent.removeChild(entity);
            entity.parent = this;
            if (append) {
                var tail = null,
                    p = this.firstChild;
                while (p != null) {
                    tail = p;
                    p = p.next;
                }
                if (tail != null) tail.next = entity;
                else this.firstChild = entity;
            } else {
                entity.next = this.firstChild;
                this.firstChild = entity;
            }
            return this;
        },
        remove: function(component) {
            var prev = null,
                p = this.firstComponent;
            while (p != null) {
                var next = p.next;
                if (p == component) {
                    if (prev == null) this.firstComponent = next;
                    else prev.init(this, next);
                    delete(this._compMap[p.get_name()]);
                    p.onRemoved();
                    p.init(null, null);
                    return true;
                }
                prev = p;
                p = next;
            }
            return false;
        },
        add: function(component) {
            if (component.owner != null) component.owner.remove(component);
            var name = component.get_name();
            var prev = this._compMap[name];
            if (prev != null) this.remove(prev);
            this._compMap[name] = component;
            var tail = null,
                p = this.firstComponent;
            while (p != null) {
                tail = p;
                p = p.next;
            }
            if (tail != null) tail.next = component;
            else this.firstComponent = component;
            component.init(this, null);
            component.onAdded();
            return this;
        },
        firstComponent: null,
        next: null,
        firstChild: null,
        parent: null,
        __class__: flambe.Entity
    }
    flambe.platform = {}
    flambe.platform.Platform = function() {}
    $hxClasses["flambe.platform.Platform"] = flambe.platform.Platform;
    flambe.platform.Platform.__name__ = true;
    flambe.platform.Platform.prototype = {
        loadAssetPack: null,
        getRenderer: null,
        getTouch: null,
        getStage: null,
        getPointer: null,
        getMouse: null,
        init: null,
        __class__: flambe.platform.Platform
    }
    flambe.platform.html = {}
    flambe.platform.html.HtmlPlatform = function() {};
    $hxClasses["flambe.platform.html.HtmlPlatform"] = flambe.platform.html.HtmlPlatform;
    flambe.platform.html.HtmlPlatform.__name__ = true;
    flambe.platform.html.HtmlPlatform.__interfaces__ = [flambe.platform.Platform];
    flambe.platform.html.HtmlPlatform.prototype = {
        _skipFrame: null,
        _lastUpdate: null,
        _container: null,
        _canvas: null,
        _touch: null,
        _stage: null,
        _renderer: null,
        _pointer: null,
        _mouse: null,
        createRenderer: function(canvas) {
            return new flambe.platform.html.CanvasRenderer(canvas);
            return null;
        },
        getY: function(event, bounds) {
            return (event.clientY - bounds.top) * this._stage.get_height() / bounds.height;
        },
        getX: function(event, bounds) {
            return (event.clientX - bounds.left) * this._stage.get_width() / bounds.width;
        },
        getRenderer: function() {
            return this._renderer;
        },
        getTouch: function() {
            return this._touch;
        },
        getMouse: function() {
            return this._mouse;
        },
        getPointer: function() {
            return this._pointer;
        },
        update: function(now) {
            var dt = (now - this._lastUpdate) / 1000;
            this._lastUpdate = now;
            if (flambe.System.hidden._value) return;
            if (this._skipFrame) {
                this._skipFrame = false;
                return;
            }
            this.mainLoop.update(dt);
            this.mainLoop.render(this._renderer);
        },
        getStage: function() {
            return this._stage;
        },
        loadAssetPack: function(manifest) {
            return new flambe.platform.html.HtmlAssetPackLoader(this, manifest).promise;
        },
        init: function() {
            var _g = this;
            flambe.platform.html.HtmlUtil.fixAndroidMath();
            var canvas = null;
            try {
                canvas = js.Browser.window.flambe.canvas;
            } catch (error) {}
            canvas.setAttribute("tabindex", "0");
            canvas.style.outlineStyle = "none";
            canvas.setAttribute("moz-opaque", "true");
            this._stage = new flambe.platform.html.HtmlStage(canvas);
            this._pointer = new flambe.platform.BasicPointer();
            this._mouse = new flambe.platform.html.HtmlMouse(this._pointer, canvas);
            this._renderer = this.createRenderer(canvas);
            this.mainLoop = new flambe.platform.MainLoop();
            this.musicPlaying = false;
            this._canvas = canvas;
            this._container = canvas.parentElement;
            this._container.style.overflow = "hidden";
            this._container.style.position = "relative";
            this._container.style.msTouchAction = "none";
            var lastTouchTime = 0;
            var onMouse = function(event) {
                if (event.timeStamp - lastTouchTime < 1000) return;
                var bounds = canvas.getBoundingClientRect();
                var x = _g.getX(event, bounds);
                var y = _g.getY(event, bounds);
                switch (event.type) {
                    case "mousedown":
                        if (event.target == canvas) {
                            event.preventDefault();
                            _g._mouse.submitDown(x, y, event.button);
                            canvas.focus();
                        }
                        break;
                    case "mousemove":
                        _g._mouse.submitMove(x, y);
                        break;
                    case "mouseup":
                        _g._mouse.submitUp(x, y, event.button);
                        break;
                    case "mousewheel":
                    case "DOMMouseScroll":
                        var velocity = event.type == "mousewheel" ? event.wheelDelta / 40 : -event.detail;
                        if (_g._mouse.submitScroll(x, y, velocity)) event.preventDefault();
                        break;
                }
            };
            js.Browser.window.addEventListener("mousedown", onMouse, false);
            js.Browser.window.addEventListener("mousemove", onMouse, false);
            js.Browser.window.addEventListener("mouseup", onMouse, false);
            canvas.addEventListener("mousewheel", onMouse, false);
            canvas.addEventListener("DOMMouseScroll", onMouse, false);
            var standardTouch = typeof(js.Browser.window.ontouchstart) != "undefined";
            var msTouch = 'msMaxTouchPoints' in window.navigator && (window.navigator.msMaxTouchPoints > 1);
            if (standardTouch || msTouch) {
                var basicTouch = new flambe.platform.BasicTouch(this._pointer, standardTouch ? 4 : js.Browser.navigator.msMaxTouchPoints);
                this._touch = basicTouch;
                var onTouch = function(event) {
                    var changedTouches = standardTouch ? event.changedTouches : [event];
                    var bounds = event.target.getBoundingClientRect();
                    lastTouchTime = event.timeStamp;
                    switch (event.type) {
                        case "touchstart":
                        case "MSPointerDown":
                            event.preventDefault();
                            if (flambe.platform.html.HtmlUtil.SHOULD_HIDE_MOBILE_BROWSER) flambe.platform.html.HtmlUtil.hideMobileBrowser();
                            var _g1 = 0;
                            while (_g1 < changedTouches.length) {
                                var touch = changedTouches[_g1];
                                ++_g1;
                                var x = _g.getX(touch, bounds);
                                var y = _g.getY(touch, bounds);
                                var id = (standardTouch ? touch.identifier : touch.pointerId) | 0;
                                basicTouch.submitDown(id, x, y);
                            }
                            break;
                        case "touchmove":
                        case "MSPointerMove":
                            event.preventDefault();
                            var _g1 = 0;
                            while (_g1 < changedTouches.length) {
                                var touch = changedTouches[_g1];
                                ++_g1;
                                var x = _g.getX(touch, bounds);
                                var y = _g.getY(touch, bounds);
                                var id = (standardTouch ? touch.identifier : touch.pointerId) | 0;
                                basicTouch.submitMove(id, x, y);
                            }
                            break;
                        case "touchend":
                        case "touchcancel":
                        case "MSPointerUp":
                            var _g1 = 0;
                            while (_g1 < changedTouches.length) {
                                var touch = changedTouches[_g1];
                                ++_g1;
                                var x = _g.getX(touch, bounds);
                                var y = _g.getY(touch, bounds);
                                var id = (standardTouch ? touch.identifier : touch.pointerId) | 0;
                                basicTouch.submitUp(id, x, y);
                            }
                            break;
                    }
                };
                if (standardTouch) {
                    canvas.addEventListener("touchstart", onTouch, false);
                    canvas.addEventListener("touchmove", onTouch, false);
                    canvas.addEventListener("touchend", onTouch, false);
                    canvas.addEventListener("touchcancel", onTouch, false);
                } else {
                    canvas.addEventListener("MSPointerDown", onTouch, false);
                    canvas.addEventListener("MSPointerMove", onTouch, false);
                    canvas.addEventListener("MSPointerUp", onTouch, false);
                }
            } else this._touch = new flambe.platform.DummyTouch();
            var oldErrorHandler = js.Browser.window.onerror;
            js.Browser.window.onerror = function(message, url, line) {
                flambe.System.uncaughtError.emit(message);
                return oldErrorHandler != null ? oldErrorHandler(message, url, line) : false;
            };
            var hiddenApi = flambe.platform.html.HtmlUtil.loadExtension("hidden", js.Browser.document);
            if (hiddenApi.value != null) {
                var onVisibilityChanged = function(_) {
                    flambe.System.hidden.set__(Reflect.field(js.Browser.document, hiddenApi.field));
                };
                onVisibilityChanged(null);
                js.Browser.document.addEventListener(hiddenApi.prefix + "visibilitychange", onVisibilityChanged, false);
            } else {
                var onPageTransitionChange = function(event) {
                    flambe.System.hidden.set__(event.type == "pagehide");
                };
                js.Browser.window.addEventListener("pageshow", onPageTransitionChange, false);
                js.Browser.window.addEventListener("pagehide", onPageTransitionChange, false);
            }
            flambe.System.hidden.get_changed().connect(function(hidden, _) {
                if (!hidden) _g._skipFrame = true;
            });
            this._skipFrame = false;
            this._lastUpdate = Date.now();
            var requestAnimationFrame = flambe.platform.html.HtmlUtil.loadExtension("requestAnimationFrame").value;
            if (requestAnimationFrame != null) {
                var performance = js.Browser.window.performance;
                var hasPerfNow = performance != null && flambe.platform.html.HtmlUtil.polyfill("now", performance);
                if (hasPerfNow) this._lastUpdate = performance.now();
                else null;
                var updateFrame = null;
                updateFrame = function(now) {
                    _g.update(hasPerfNow ? performance.now() : now);
                    requestAnimationFrame(updateFrame, canvas);
                };
                requestAnimationFrame(updateFrame, canvas);
            } else js.Browser.window.setInterval(function() {
                _g.update(Date.now());
            }, 16);
            null;
        },
        musicPlaying: null,
        mainLoop: null,
        __class__: flambe.platform.html.HtmlPlatform
    }
    flambe.util.Value = function(value, listener) {
        this._value = value;
        this._changed = listener != null ? new flambe.util.Signal2(listener) : null;
    };
    $hxClasses["flambe.util.Value"] = flambe.util.Value;
    flambe.util.Value.__name__ = true;
    flambe.util.Value.prototype = {
        _changed: null,
        _value: null,
        get_changed: function() {
            if (this._changed == null) this._changed = new flambe.util.Signal2();
            return this._changed;
        },
        set__: function(newValue) {
            var oldValue = this._value;
            if (newValue != oldValue) {
                this._value = newValue;
                if (this._changed != null) this._changed.emit(newValue, oldValue);
            }
            return newValue;
        },
        watch: function(listener) {
            listener(this._value, this._value);
            return this.get_changed().connect(listener);
        },
        __class__: flambe.util.Value
    }
    flambe.util.SignalConnection = function(signal, listener) {
        this._next = null;
        this._signal = signal;
        this._listener = listener;
        this.stayInList = true;
    };
    $hxClasses["flambe.util.SignalConnection"] = flambe.util.SignalConnection;
    flambe.util.SignalConnection.__name__ = true;
    flambe.util.SignalConnection.__interfaces__ = [flambe.util.Disposable];
    flambe.util.SignalConnection.prototype = {
        _signal: null,
        _listener: null,
        _next: null,
        dispose: function() {
            if (this._signal != null) {
                this._signal.disconnect(this);
                this._signal = null;
            }
        },
        once: function() {
            this.stayInList = false;
            return this;
        },
        stayInList: null,
        __class__: flambe.util.SignalConnection
    }
    flambe.util.SignalBase = function(listener) {
        this._head = listener != null ? new flambe.util.SignalConnection(this, listener) : null;
        this._deferredTasks = null;
    };
    $hxClasses["flambe.util.SignalBase"] = flambe.util.SignalBase;
    flambe.util.SignalBase.__name__ = true;
    flambe.util.SignalBase.prototype = {
        _deferredTasks: null,
        _head: null,
        listRemove: function(conn) {
            var prev = null,
                p = this._head;
            while (p != null) {
                if (p == conn) {
                    var next = p._next;
                    if (prev == null) this._head = next;
                    else prev._next = next;
                    return;
                }
                prev = p;
                p = p._next;
            }
        },
        listAdd: function(conn, prioritize) {
            if (prioritize) {
                conn._next = this._head;
                this._head = conn;
            } else {
                var tail = null,
                    p = this._head;
                while (p != null) {
                    tail = p;
                    p = p._next;
                }
                if (tail != null) tail._next = conn;
                else this._head = conn;
            }
        },
        didEmit: function(head) {
            this._head = head;
            var snapshot = this._deferredTasks;
            this._deferredTasks = null;
            while (snapshot != null) {
                snapshot.fn();
                snapshot = snapshot.next;
            }
        },
        willEmit: function() {
            var snapshot = this._head;
            this._head = flambe.util.SignalBase.DISPATCHING_SENTINEL;
            return snapshot;
        },
        defer: function(fn) {
            var tail = null,
                p = this._deferredTasks;
            while (p != null) {
                tail = p;
                p = p.next;
            }
            var task = new flambe.util._SignalBase.Task(fn);
            if (tail != null) tail.next = task;
            else this._deferredTasks = task;
        },
        disconnect: function(conn) {
            var _g = this;
            if (this._head == flambe.util.SignalBase.DISPATCHING_SENTINEL) this.defer(function() {
                _g.listRemove(conn);
            });
            else this.listRemove(conn);
        },
        connectImpl: function(listener, prioritize) {
            var _g = this;
            var conn = new flambe.util.SignalConnection(this, listener);
            if (this._head == flambe.util.SignalBase.DISPATCHING_SENTINEL) this.defer(function() {
                _g.listAdd(conn, prioritize);
            });
            else this.listAdd(conn, prioritize);
            return conn;
        },
        __class__: flambe.util.SignalBase
    }
    flambe.util.Signal2 = function(listener) {
        flambe.util.SignalBase.call(this, listener);
    };
    $hxClasses["flambe.util.Signal2"] = flambe.util.Signal2;
    flambe.util.Signal2.__name__ = true;
    flambe.util.Signal2.__super__ = flambe.util.SignalBase;
    flambe.util.Signal2.prototype = $extend(flambe.util.SignalBase.prototype, {
        emitImpl: function(arg1, arg2) {
            var head = this.willEmit();
            var p = head;
            while (p != null) {
                p._listener(arg1, arg2);
                if (!p.stayInList) p.dispose();
                p = p._next;
            }
            this.didEmit(head);
        },
        emit: function(arg1, arg2) {
            var _g = this;
            if (this._head == flambe.util.SignalBase.DISPATCHING_SENTINEL) this.defer(function() {
                _g.emitImpl(arg1, arg2);
            });
            else this.emitImpl(arg1, arg2);
        },
        connect: function(listener, prioritize) {
            if (prioritize == null) prioritize = false;
            return this.connectImpl(listener, prioritize);
        },
        __class__: flambe.util.Signal2
    });
    flambe.util.Signal1 = function(listener) {
        flambe.util.SignalBase.call(this, listener);
    };
    $hxClasses["flambe.util.Signal1"] = flambe.util.Signal1;
    flambe.util.Signal1.__name__ = true;
    flambe.util.Signal1.__super__ = flambe.util.SignalBase;
    flambe.util.Signal1.prototype = $extend(flambe.util.SignalBase.prototype, {
        emitImpl: function(arg1) {
            var head = this.willEmit();
            var p = head;
            while (p != null) {
                p._listener(arg1);
                if (!p.stayInList) p.dispose();
                p = p._next;
            }
            this.didEmit(head);
        },
        emit: function(arg1) {
            var _g = this;
            if (this._head == flambe.util.SignalBase.DISPATCHING_SENTINEL) this.defer(function() {
                _g.emitImpl(arg1);
            });
            else this.emitImpl(arg1);
        },
        connect: function(listener, prioritize) {
            if (prioritize == null) prioritize = false;
            return this.connectImpl(listener, prioritize);
        },
        __class__: flambe.util.Signal1
    });
    flambe.animation = {}
    flambe.animation.AnimatedFloat = function(value, listener) {
        this._behavior = null;
        flambe.util.Value.call(this, value, listener);
    };
    $hxClasses["flambe.animation.AnimatedFloat"] = flambe.animation.AnimatedFloat;
    flambe.animation.AnimatedFloat.__name__ = true;
    flambe.animation.AnimatedFloat.__super__ = flambe.util.Value;
    flambe.animation.AnimatedFloat.prototype = $extend(flambe.util.Value.prototype, {
        _behavior: null,
        set_behavior: function(behavior) {
            this._behavior = behavior;
            this.update(0);
            return behavior;
        },
        update: function(dt) {
            if (this._behavior != null) {
                flambe.util.Value.prototype.set__.call(this, this._behavior.update(dt));
                if (this._behavior.isComplete()) this._behavior = null;
            }
        },
        set__: function(value) {
            this._behavior = null;
            return flambe.util.Value.prototype.set__.call(this, value);
        },
        __class__: flambe.animation.AnimatedFloat
    });
    flambe.System = function() {}
    $hxClasses["flambe.System"] = flambe.System;
    flambe.System.__name__ = true;
    flambe.System.init = function() {
        if (!flambe.System._calledInit) {
            flambe.System._platform.init();
            flambe.System._calledInit = true;
        }
    }
    flambe.SpeedAdjuster = function() {
        this._realDt = 0;
    };
    $hxClasses["flambe.SpeedAdjuster"] = flambe.SpeedAdjuster;
    flambe.SpeedAdjuster.__name__ = true;
    flambe.SpeedAdjuster.__super__ = flambe.Component;
    flambe.SpeedAdjuster.prototype = $extend(flambe.Component.prototype, {
        _realDt: null,
        onUpdate: function(dt) {
            if (this._realDt > 0) {
                dt = this._realDt;
                this._realDt = 0;
            }
            this.scale.update(dt);
        },
        scale: null,
        get_name: function() {
            return "SpeedAdjuster_7";
        },
        __class__: flambe.SpeedAdjuster
    });
    flambe.animation.Behavior = function() {}
    $hxClasses["flambe.animation.Behavior"] = flambe.animation.Behavior;
    flambe.animation.Behavior.__name__ = true;
    flambe.animation.Behavior.prototype = {
        isComplete: null,
        update: null,
        __class__: flambe.animation.Behavior
    }
    flambe.animation.Binding = function(target, fn) {
        this._target = target;
        this._fn = fn;
    };
    $hxClasses["flambe.animation.Binding"] = flambe.animation.Binding;
    flambe.animation.Binding.__name__ = true;
    flambe.animation.Binding.__interfaces__ = [flambe.animation.Behavior];
    flambe.animation.Binding.prototype = {
        _fn: null,
        _target: null,
        isComplete: function() {
            return false;
        },
        update: function(dt) {
            var value = this._target._value;
            if (this._fn != null) return this._fn(value);
            else return value;
        },
        __class__: flambe.animation.Binding
    }
    flambe.animation.Ease = function() {}
    $hxClasses["flambe.animation.Ease"] = flambe.animation.Ease;
    flambe.animation.Ease.__name__ = true;
    flambe.animation.Ease.linear = function(t) {
        return t;
    }
    flambe.animation.Ease.cubeOut = function(t) {
        return 1 + --t * t * t;
    }
    flambe.animation.Ease.cubeInOut = function(t) {
        return t <= .5 ? t * t * t * 4 : 1 + --t * t * t * 4;
    }
    flambe.animation.Tween = function(from, to, seconds, easing) {
        this._from = from;
        this._to = to;
        this._duration = seconds;
        this.elapsed = 0;
        this._easing = easing != null ? easing : flambe.animation.Ease.linear;
    };
    $hxClasses["flambe.animation.Tween"] = flambe.animation.Tween;
    flambe.animation.Tween.__name__ = true;
    flambe.animation.Tween.__interfaces__ = [flambe.animation.Behavior];
    flambe.animation.Tween.prototype = {
        _easing: null,
        _duration: null,
        _to: null,
        _from: null,
        isComplete: function() {
            return this.elapsed >= this._duration;
        },
        update: function(dt) {
            this.elapsed += dt;
            if (this.elapsed >= this._duration) return this._to;
            else return this._from + (this._to - this._from) * this._easing(this.elapsed / this._duration);
        },
        elapsed: null,
        __class__: flambe.animation.Tween
    }
    flambe.asset = {}
    flambe.asset.Asset = function() {}
    $hxClasses["flambe.asset.Asset"] = flambe.asset.Asset;
    flambe.asset.Asset.__name__ = true;
    flambe.asset.Asset.__interfaces__ = [flambe.util.Disposable];
    flambe.asset.Asset.prototype = {
        dispose: null,
        __class__: flambe.asset.Asset
    }
    flambe.asset.AssetFormat = $hxClasses["flambe.asset.AssetFormat"] = {
        __ename__: true,
        __constructs__: ["WEBP", "JXR", "PNG", "JPG", "GIF", "DDS", "PVR", "PKM", "MP3", "M4A", "OPUS", "OGG", "WAV", "Data"]
    }
    flambe.asset.AssetFormat.WEBP = ["WEBP", 0];
    flambe.asset.AssetFormat.WEBP.toString = $estr;
    flambe.asset.AssetFormat.WEBP.__enum__ = flambe.asset.AssetFormat;
    flambe.asset.AssetFormat.JXR = ["JXR", 1];
    flambe.asset.AssetFormat.JXR.toString = $estr;
    flambe.asset.AssetFormat.JXR.__enum__ = flambe.asset.AssetFormat;
    flambe.asset.AssetFormat.PNG = ["PNG", 2];
    flambe.asset.AssetFormat.PNG.toString = $estr;
    flambe.asset.AssetFormat.PNG.__enum__ = flambe.asset.AssetFormat;
    flambe.asset.AssetFormat.JPG = ["JPG", 3];
    flambe.asset.AssetFormat.JPG.toString = $estr;
    flambe.asset.AssetFormat.JPG.__enum__ = flambe.asset.AssetFormat;
    flambe.asset.AssetFormat.GIF = ["GIF", 4];
    flambe.asset.AssetFormat.GIF.toString = $estr;
    flambe.asset.AssetFormat.GIF.__enum__ = flambe.asset.AssetFormat;
    flambe.asset.AssetFormat.DDS = ["DDS", 5];
    flambe.asset.AssetFormat.DDS.toString = $estr;
    flambe.asset.AssetFormat.DDS.__enum__ = flambe.asset.AssetFormat;
    flambe.asset.AssetFormat.PVR = ["PVR", 6];
    flambe.asset.AssetFormat.PVR.toString = $estr;
    flambe.asset.AssetFormat.PVR.__enum__ = flambe.asset.AssetFormat;
    flambe.asset.AssetFormat.PKM = ["PKM", 7];
    flambe.asset.AssetFormat.PKM.toString = $estr;
    flambe.asset.AssetFormat.PKM.__enum__ = flambe.asset.AssetFormat;
    flambe.asset.AssetFormat.MP3 = ["MP3", 8];
    flambe.asset.AssetFormat.MP3.toString = $estr;
    flambe.asset.AssetFormat.MP3.__enum__ = flambe.asset.AssetFormat;
    flambe.asset.AssetFormat.M4A = ["M4A", 9];
    flambe.asset.AssetFormat.M4A.toString = $estr;
    flambe.asset.AssetFormat.M4A.__enum__ = flambe.asset.AssetFormat;
    flambe.asset.AssetFormat.OPUS = ["OPUS", 10];
    flambe.asset.AssetFormat.OPUS.toString = $estr;
    flambe.asset.AssetFormat.OPUS.__enum__ = flambe.asset.AssetFormat;
    flambe.asset.AssetFormat.OGG = ["OGG", 11];
    flambe.asset.AssetFormat.OGG.toString = $estr;
    flambe.asset.AssetFormat.OGG.__enum__ = flambe.asset.AssetFormat;
    flambe.asset.AssetFormat.WAV = ["WAV", 12];
    flambe.asset.AssetFormat.WAV.toString = $estr;
    flambe.asset.AssetFormat.WAV.__enum__ = flambe.asset.AssetFormat;
    flambe.asset.AssetFormat.Data = ["Data", 13];
    flambe.asset.AssetFormat.Data.toString = $estr;
    flambe.asset.AssetFormat.Data.__enum__ = flambe.asset.AssetFormat;
    flambe.asset.AssetEntry = function(name, url, format, bytes) {
        this.name = name;
        this.url = url;
        this.format = format;
        this.bytes = bytes;
    };
    $hxClasses["flambe.asset.AssetEntry"] = flambe.asset.AssetEntry;
    flambe.asset.AssetEntry.__name__ = true;
    flambe.asset.AssetEntry.prototype = {
        bytes: null,
        format: null,
        url: null,
        name: null,
        __class__: flambe.asset.AssetEntry
    }
    flambe.asset.AssetPack = function() {}
    $hxClasses["flambe.asset.AssetPack"] = flambe.asset.AssetPack;
    flambe.asset.AssetPack.__name__ = true;
    flambe.asset.AssetPack.__interfaces__ = [flambe.util.Disposable];
    flambe.asset.AssetPack.prototype = {
        dispose: null,
        getFile: null,
        getTexture: null,
        __class__: flambe.asset.AssetPack
    }
    flambe.asset.File = function() {}
    $hxClasses["flambe.asset.File"] = flambe.asset.File;
    flambe.asset.File.__name__ = true;
    flambe.asset.File.__interfaces__ = [flambe.asset.Asset];
    flambe.asset.File.prototype = {
        toString: null,
        __class__: flambe.asset.File
    }
    var js = {}
    js.Browser = function() {}
    $hxClasses["js.Browser"] = js.Browser;
    js.Browser.__name__ = true;
    flambe.asset.Manifest = function() {
        this._entries = [];
    };
    $hxClasses["flambe.asset.Manifest"] = flambe.asset.Manifest;
    flambe.asset.Manifest.__name__ = true;
    flambe.asset.Manifest.build = function(packName, required) {
        if (required == null) required = true;
        var packData = Reflect.field(haxe.rtti.Meta.getType(flambe.asset.Manifest).assets[0], packName);
        if (packData == null) {
            if (required) throw flambe.util.Strings.withFields("Missing asset pack", ["name", packName]);
            return null;
        }
        var manifest = new flambe.asset.Manifest();
        manifest.set_relativeBasePath("assets");
        var _g = 0;
        while (_g < packData.length) {
            var asset = packData[_g];
            ++_g;
            var name = asset.name;
            var path = packName + "/" + name; //+ "?v=" + Std.string(asset.md5);
            var format = flambe.asset.Manifest.inferFormat(name);
            if (format != flambe.asset.AssetFormat.Data) name = flambe.util.Strings.removeFileExtension(name);
            manifest.add(name, path, asset.bytes, format);
        }
        return manifest;
    }
    flambe.asset.Manifest.inferFormat = function(url) {
        var extension = flambe.util.Strings.getUrlExtension(url);
        if (extension != null) {
            var _g = extension.toLowerCase();
            switch (_g) {
                case "gif":
                    return flambe.asset.AssetFormat.GIF;
                case "jpg":
                case "jpeg":
                    return flambe.asset.AssetFormat.JPG;
                case "jxr":
                case "wdp":
                    return flambe.asset.AssetFormat.JXR;
                case "png":
                    return flambe.asset.AssetFormat.PNG;
                case "webp":
                    return flambe.asset.AssetFormat.WEBP;
                case "dds":
                    return flambe.asset.AssetFormat.DDS;
                case "pvr":
                    return flambe.asset.AssetFormat.PVR;
                case "pkm":
                    return flambe.asset.AssetFormat.PKM;
                case "m4a":
                    return flambe.asset.AssetFormat.M4A;
                case "mp3":
                    return flambe.asset.AssetFormat.MP3;
                case "ogg":
                    return flambe.asset.AssetFormat.OGG;
                case "opus":
                    return flambe.asset.AssetFormat.OPUS;
                case "wav":
                    return flambe.asset.AssetFormat.WAV;
            }
        } else null;
        return flambe.asset.AssetFormat.Data;
    }
    flambe.asset.Manifest.prototype = {
        _externalBasePath: null,
        _relativeBasePath: null,
        _entries: null,
        get_externalBasePath: function() {
            return this._externalBasePath;
        },
        set_relativeBasePath: function(basePath) {
            this._relativeBasePath = basePath;
            if (basePath != null) null;
            return basePath;
        },
        get_relativeBasePath: function() {
            return this._relativeBasePath;
        },
        getFullURL: function(entry) {
            var restricted = this.get_externalBasePath() != null && flambe.asset.Manifest._supportsCrossOrigin ? this.get_externalBasePath() : this.get_relativeBasePath();
            var unrestricted = this.get_externalBasePath() != null ? this.get_externalBasePath() : this.get_relativeBasePath();
            var base = unrestricted;
            if (entry.format == flambe.asset.AssetFormat.Data) base = restricted;
            return base != null ? flambe.util.Strings.joinPath(base, entry.url) : entry.url;
        },
        iterator: function() {
            return HxOverrides.iter(this._entries);
        },
        add: function(name, url, bytes, format) {
            if (bytes == null) bytes = 0;
            if (format == null) format = flambe.asset.Manifest.inferFormat(url);
            var entry = new flambe.asset.AssetEntry(name, url, format, bytes);
            this._entries.push(entry);
            return entry;
        },
        __class__: flambe.asset.Manifest
    }
    flambe.display = {}
    flambe.display.BlendMode = $hxClasses["flambe.display.BlendMode"] = {
        __ename__: true,
        __constructs__: ["Normal", "Add", "Mask", "Copy"]
    }
    flambe.display.BlendMode.Normal = ["Normal", 0];
    flambe.display.BlendMode.Normal.toString = $estr;
    flambe.display.BlendMode.Normal.__enum__ = flambe.display.BlendMode;
    flambe.display.BlendMode.Add = ["Add", 1];
    flambe.display.BlendMode.Add.toString = $estr;
    flambe.display.BlendMode.Add.__enum__ = flambe.display.BlendMode;
    flambe.display.BlendMode.Mask = ["Mask", 2];
    flambe.display.BlendMode.Mask.toString = $estr;
    flambe.display.BlendMode.Mask.__enum__ = flambe.display.BlendMode;
    flambe.display.BlendMode.Copy = ["Copy", 3];
    flambe.display.BlendMode.Copy.toString = $estr;
    flambe.display.BlendMode.Copy.__enum__ = flambe.display.BlendMode;
    flambe.math = {}
    flambe.math.Point = function(x, y) {
        if (y == null) y = 0;
        if (x == null) x = 0;
        this.x = x;
        this.y = y;
    };
    $hxClasses["flambe.math.Point"] = flambe.math.Point;
    flambe.math.Point.__name__ = true;
    flambe.math.Point.prototype = {
        distanceToSquared: function(x, y) {
            var dx = this.x - x;
            var dy = this.y - y;
            return dx * dx + dy * dy;
        },
        set: function(x, y) {
            this.x = x;
            this.y = y;
        },
        y: null,
        x: null,
        __class__: flambe.math.Point
    }
    flambe.display.Sprite = function() {
        this._parentViewMatrixUpdateCount = 0;
        this._viewMatrixUpdateCount = 0;
        this._viewMatrix = null;
        this.scissor = null;
        this.blendMode = null;
        var _g = this;
        this._flags = 139;
        this._localMatrix = new flambe.math.Matrix();
        var dirtyMatrix = function(_, _1) {
            _g._flags = _g._flags | 12;
        };
        this.x = new flambe.animation.AnimatedFloat(0, dirtyMatrix);
        this.y = new flambe.animation.AnimatedFloat(0, dirtyMatrix);
        this.rotation = new flambe.animation.AnimatedFloat(0, dirtyMatrix);
        this.scaleX = new flambe.animation.AnimatedFloat(1, dirtyMatrix);
        this.scaleY = new flambe.animation.AnimatedFloat(1, dirtyMatrix);
        this.anchorX = new flambe.animation.AnimatedFloat(0, dirtyMatrix);
        this.anchorY = new flambe.animation.AnimatedFloat(0, dirtyMatrix);
        this.alpha = new flambe.animation.AnimatedFloat(1);
    };
    $hxClasses["flambe.display.Sprite"] = flambe.display.Sprite;
    flambe.display.Sprite.__name__ = true;
    flambe.display.Sprite.hitTest = function(entity, x, y) {
        var sprite = entity._compMap.Sprite_1;
        if (sprite != null) {
            if (!((sprite._flags & 3) == 3)) return null;
            if (sprite.getLocalMatrix().inverseTransform(x, y, flambe.display.Sprite._scratchPoint)) {
                x = flambe.display.Sprite._scratchPoint.x;
                y = flambe.display.Sprite._scratchPoint.y;
            }
            var scissor = sprite.scissor;
            if (scissor != null && !scissor.contains(x, y)) return null;
        }
        var result = flambe.display.Sprite.hitTestBackwards(entity.firstChild, x, y);
        if (result != null) return result;
        return sprite != null && sprite.containsLocal(x, y) ? sprite : null;
    }
    flambe.display.Sprite.render = function(entity, g) {
        var sprite = entity._compMap.Sprite_1;
        if (sprite != null) {
            var alpha = sprite.alpha._value;
            if (!((sprite._flags & 1) != 0) || alpha <= 0) return;
            g.save();
            if (alpha < 1) g.multiplyAlpha(alpha);
            if (sprite.blendMode != null) g.setBlendMode(sprite.blendMode);
            var matrix = sprite.getLocalMatrix();
            var m02 = matrix.m02;
            var m12 = matrix.m12;
            if ((sprite._flags & 128) != 0) {
                m02 = Math.round(m02);
                m12 = Math.round(m12);
            }
            g.transform(matrix.m00, matrix.m10, matrix.m01, matrix.m11, m02, m12);
            var scissor = sprite.scissor;
            if (scissor != null) g.applyScissor(scissor.x, scissor.y, scissor.width, scissor.height);
            sprite.draw(g);
        }
        var director = entity._compMap.Director_6;
        if (director != null) {
            var scenes = director.occludedScenes;
            var _g = 0;
            while (_g < scenes.length) {
                var scene = scenes[_g];
                ++_g;
                flambe.display.Sprite.render(scene, g);
            }
        }
        var p = entity.firstChild;
        while (p != null) {
            var next = p.next;
            flambe.display.Sprite.render(p, g);
            p = next;
        }
        if (sprite != null) g.restore();
    }
    flambe.display.Sprite.hitTestBackwards = function(entity, x, y) {
        if (entity != null) {
            var result = flambe.display.Sprite.hitTestBackwards(entity.next, x, y);
            return result != null ? result : flambe.display.Sprite.hitTest(entity, x, y);
        }
        return null;
    }
    flambe.display.Sprite.__super__ = flambe.Component;
    flambe.display.Sprite.prototype = $extend(flambe.Component.prototype, {
        _pointerUp: null,
        _pointerMove: null,
        _pointerDown: null,
        _parentViewMatrixUpdateCount: null,
        _viewMatrixUpdateCount: null,
        _viewMatrix: null,
        _localMatrix: null,
        _flags: null,
        set_pointerEnabled: function(pointerEnabled) {
            this._flags = flambe.util.BitSets.set(this._flags, 2, pointerEnabled);
            return pointerEnabled;
        },
        set_visible: function(visible) {
            this._flags = flambe.util.BitSets.set(this._flags, 1, visible);
            return visible;
        },
        get_pointerUp: function() {
            if (this._pointerUp == null) this._pointerUp = new flambe.util.Signal1();
            return this._pointerUp;
        },
        get_pointerDown: function() {
            if (this._pointerDown == null) this._pointerDown = new flambe.util.Signal1();
            return this._pointerDown;
        },
        getParentSprite: function() {
            if (this.owner == null) return null;
            var entity = this.owner.parent;
            while (entity != null) {
                var sprite = entity._compMap.Sprite_1;
                if (sprite != null) return sprite;
                entity = entity.parent;
            }
            return null;
        },
        isViewMatrixDirty: function() {
            if ((this._flags & 8) != 0) return true;
            var parentSprite = this.getParentSprite();
            if (parentSprite == null) return false;
            return this._parentViewMatrixUpdateCount != parentSprite._viewMatrixUpdateCount || parentSprite.isViewMatrixDirty();
        },
        draw: function(g) {},
        onUpdate: function(dt) {
            this.x.update(dt);
            this.y.update(dt);
            this.rotation.update(dt);
            this.scaleX.update(dt);
            this.scaleY.update(dt);
            this.alpha.update(dt);
            this.anchorX.update(dt);
            this.anchorY.update(dt);
        },
        disablePointer: function() {
            this.set_pointerEnabled(false);
            return this;
        },
        setScaleXY: function(scaleX, scaleY) {
            this.scaleX.set__(scaleX);
            this.scaleY.set__(scaleY);
            return this;
        },
        setScale: function(scale) {
            this.scaleX.set__(scale);
            this.scaleY.set__(scale);
            return this;
        },
        setXY: function(x, y) {
            this.x.set__(x);
            this.y.set__(y);
            return this;
        },
        centerAnchor: function() {
            this.anchorX.set__(this.getNaturalWidth() / 2);
            this.anchorY.set__(this.getNaturalHeight() / 2);
            return this;
        },
        setAnchor: function(x, y) {
            this.anchorX.set__(x);
            this.anchorY.set__(y);
            return this;
        },
        getViewMatrix: function() {
            if (this.isViewMatrixDirty()) {
                var parentSprite = this.getParentSprite();
                this._viewMatrix = parentSprite != null ? flambe.math.Matrix.multiply(parentSprite.getViewMatrix(), this.getLocalMatrix(), this._viewMatrix) : this.getLocalMatrix().clone(this._viewMatrix);
                this._flags = this._flags & -9;
                if (parentSprite != null) this._parentViewMatrixUpdateCount = parentSprite._viewMatrixUpdateCount;
                ++this._viewMatrixUpdateCount;
            }
            return this._viewMatrix;
        },
        getLocalMatrix: function() {
            if ((this._flags & 4) != 0) {
                this._flags = this._flags & -5;
                this._localMatrix.compose(this.x._value, this.y._value, this.scaleX._value, this.scaleY._value, this.rotation._value * 3.141592653589793 / 180);
                this._localMatrix.translate(-this.anchorX._value, -this.anchorY._value);
            }
            return this._localMatrix;
        },
        containsLocal: function(localX, localY) {
            return localX >= 0 && localX < this.getNaturalWidth() && localY >= 0 && localY < this.getNaturalHeight();
        },
        getNaturalHeight: function() {
            return 0;
        },
        getNaturalWidth: function() {
            return 0;
        },
        scissor: null,
        blendMode: null,
        alpha: null,
        anchorY: null,
        anchorX: null,
        scaleY: null,
        scaleX: null,
        rotation: null,
        y: null,
        x: null,
        get_name: function() {
            return "Sprite_1";
        },
        __class__: flambe.display.Sprite
    });
    flambe.display.FillSprite = function(color, width, height) {
        flambe.display.Sprite.call(this);
        this.color = color;
        this.width = new flambe.animation.AnimatedFloat(width);
        this.height = new flambe.animation.AnimatedFloat(height);
    };
    $hxClasses["flambe.display.FillSprite"] = flambe.display.FillSprite;
    flambe.display.FillSprite.__name__ = true;
    flambe.display.FillSprite.__super__ = flambe.display.Sprite;
    flambe.display.FillSprite.prototype = $extend(flambe.display.Sprite.prototype, {
        onUpdate: function(dt) {
            flambe.display.Sprite.prototype.onUpdate.call(this, dt);
            this.width.update(dt);
            this.height.update(dt);
        },
        setSize: function(width, height) {
            this.width.set__(width);
            this.height.set__(height);
            return this;
        },
        getNaturalHeight: function() {
            return this.height._value;
        },
        getNaturalWidth: function() {
            return this.width._value;
        },
        draw: function(g) {
            g.fillRect(this.color, 0, 0, this.width._value, this.height._value);
        },
        height: null,
        width: null,
        color: null,
        __class__: flambe.display.FillSprite
    });
    flambe.display.Glyph = function(charCode) {
        this._kernings = null;
        this.xAdvance = 0;
        this.yOffset = 0;
        this.xOffset = 0;
        this.page = null;
        this.height = 0;
        this.width = 0;
        this.y = 0;
        this.x = 0;
        this.charCode = charCode;
    };
    $hxClasses["flambe.display.Glyph"] = flambe.display.Glyph;
    flambe.display.Glyph.__name__ = true;
    flambe.display.Glyph.prototype = {
        _kernings: null,
        setKerning: function(nextCharCode, amount) {
            if (this._kernings == null) this._kernings = new haxe.ds.IntMap();
            this._kernings.set(nextCharCode, amount);
        },
        getKerning: function(nextCharCode) {
            return this._kernings != null ? this._kernings.get(nextCharCode) | 0 : 0;
        },
        draw: function(g, destX, destY) {
            if (this.width > 0) g.drawSubImage(this.page, destX + this.xOffset, destY + this.yOffset, this.x, this.y, this.width, this.height);
        },
        xAdvance: null,
        yOffset: null,
        xOffset: null,
        page: null,
        height: null,
        width: null,
        y: null,
        x: null,
        charCode: null,
        __class__: flambe.display.Glyph
    }
    flambe.display.Font = function(pack, name) {
        this.name = name;
        this._pack = pack;
        this.reload();
    };
    $hxClasses["flambe.display.Font"] = flambe.display.Font;
    flambe.display.Font.__name__ = true;
    flambe.display.Font.prototype = {
        _glyphs: null,
        _pack: null,
        reload: function() {
            this._glyphs = new haxe.ds.IntMap();
            this._glyphs.set(flambe.display.Font.NEWLINE.charCode, flambe.display.Font.NEWLINE);
            var parser = new flambe.display._Font.ConfigParser(this._pack.getFile(this.name + ".fnt").toString());
            var pages = new haxe.ds.IntMap();
            var idx = this.name.lastIndexOf("/");
            var basePath = idx >= 0 ? HxOverrides.substr(this.name, 0, idx + 1) : "";
            var $it0 = parser.keywords();
            while ($it0.hasNext()) {
                var keyword = $it0.next();
                switch (keyword) {
                    case "info":
                        var $it1 = parser.pairs();
                        while ($it1.hasNext()) {
                            var pair = $it1.next();
                            switch (pair.key) {
                                case "size":
                                    this.size = pair.getInt();
                                    break;
                            }
                        }
                        break;
                    case "page":
                        var pageId = 0;
                        var file = null;
                        var $it2 = parser.pairs();
                        while ($it2.hasNext()) {
                            var pair = $it2.next();
                            switch (pair.key) {
                                case "id":
                                    pageId = pair.getInt();
                                    break;
                                case "file":
                                    file = pair.getString();
                                    break;
                            }
                        }
                        pages.set(pageId, this._pack.getTexture(basePath + flambe.util.Strings.removeFileExtension(file)));
                        break;
                    case "char":
                        var glyph = null;
                        var $it3 = parser.pairs();
                        while ($it3.hasNext()) {
                            var pair = $it3.next();
                            switch (pair.key) {
                                case "id":
                                    glyph = new flambe.display.Glyph(pair.getInt());
                                    break;
                                case "x":
                                    glyph.x = pair.getInt();
                                    break;
                                case "y":
                                    glyph.y = pair.getInt();
                                    break;
                                case "width":
                                    glyph.width = pair.getInt();
                                    break;
                                case "height":
                                    glyph.height = pair.getInt();
                                    break;
                                case "page":
                                    glyph.page = pages.get(pair.getInt());
                                    break;
                                case "xoffset":
                                    glyph.xOffset = pair.getInt();
                                    break;
                                case "yoffset":
                                    glyph.yOffset = pair.getInt();
                                    break;
                                case "xadvance":
                                    glyph.xAdvance = pair.getInt();
                                    break;
                            }
                        }
                        this._glyphs.set(glyph.charCode, glyph);
                        break;
                    case "kerning":
                        var first = null;
                        var second = -1;
                        var $it4 = parser.pairs();
                        while ($it4.hasNext()) {
                            var pair = $it4.next();
                            switch (pair.key) {
                                case "first":
                                    first = this._glyphs.get(pair.getInt());
                                    break;
                                case "second":
                                    second = pair.getInt();
                                    break;
                                case "amount":
                                    first.setKerning(second, pair.getInt());
                                    break;
                            }
                        }
                        break;
                }
            }
        },
        layoutText: function(text, align, wrapWidth) {
            if (wrapWidth == null) wrapWidth = 0;
            if (align == null) align = flambe.display.TextAlign.Left;
            return new flambe.display.TextLayout(this, text, align, wrapWidth);
        },
        size: null,
        name: null,
        __class__: flambe.display.Font
    }
    flambe.display.TextAlign = $hxClasses["flambe.display.TextAlign"] = {
        __ename__: true,
        __constructs__: ["Left", "Center", "Right"]
    }
    flambe.display.TextAlign.Left = ["Left", 0];
    flambe.display.TextAlign.Left.toString = $estr;
    flambe.display.TextAlign.Left.__enum__ = flambe.display.TextAlign;
    flambe.display.TextAlign.Center = ["Center", 1];
    flambe.display.TextAlign.Center.toString = $estr;
    flambe.display.TextAlign.Center.__enum__ = flambe.display.TextAlign;
    flambe.display.TextAlign.Right = ["Right", 2];
    flambe.display.TextAlign.Right.toString = $estr;
    flambe.display.TextAlign.Right.__enum__ = flambe.display.TextAlign;
    flambe.display.TextLayout = function(font, text, align, wrapWidth) {
        this.lines = 0;
        var _g = this;
        this._font = font;
        this._glyphs = [];
        this._offsets = [];
        this.bounds = new flambe.math.Rectangle();
        var lineWidths = [];
        var ll = text.length;
        var _g1 = 0;
        while (_g1 < ll) {
            var ii = _g1++;
            var charCode = text.charCodeAt(ii);
            var glyph = font._glyphs.get(charCode);
            if (glyph != null) this._glyphs.push(glyph);
            else null;
        }
        var lastSpaceIdx = -1;
        var lineWidth = 0.0;
        var lineHeight = 0.0;
        var newline = font._glyphs.get(10);
        var addLine = function() {
            _g.bounds.width = flambe.math.FMath.max(_g.bounds.width, lineWidth);
            _g.bounds.height += lineHeight;
            lineWidths[_g.lines] = lineWidth;
            lineWidth = 0;
            lineHeight = 0;
            ++_g.lines;
        };
        var ii = 0;
        while (ii < this._glyphs.length) {
            var glyph = this._glyphs[ii];
            this._offsets[ii] = lineWidth;
            var wordWrap = wrapWidth > 0 && lineWidth + glyph.width > wrapWidth;
            if (wordWrap || glyph == newline) {
                if (wordWrap) {
                    if (lastSpaceIdx >= 0) {
                        this._glyphs[lastSpaceIdx] = newline;
                        lineWidth = this._offsets[lastSpaceIdx];
                        ii = lastSpaceIdx;
                    } else this._glyphs.splice(ii, 0, newline);
                }
                lastSpaceIdx = -1;
                lineHeight = font.size;
                addLine();
            } else {
                if (glyph.charCode == 32) lastSpaceIdx = ii;
                lineWidth += glyph.xAdvance;
                lineHeight = flambe.math.FMath.max(lineHeight, glyph.height + glyph.yOffset);
                if (ii + 1 < this._glyphs.length) {
                    var nextGlyph = this._glyphs[ii + 1];
                    lineWidth += glyph.getKerning(nextGlyph.charCode);
                }
            }
            ++ii;
        }
        addLine();
        var lineY = 0.0;
        var alignOffset = flambe.display.TextLayout.getAlignOffset(align, lineWidths[0], wrapWidth);
        var top = 1.79769313486231e+308;
        var bottom = -1.79769313486231e+308;
        var line = 0;
        var ii1 = 0;
        var ll1 = this._glyphs.length;
        while (ii1 < ll1) {
            var glyph = this._glyphs[ii1];
            if (glyph.charCode == 10) {
                lineY += font.size;
                ++line;
                alignOffset = flambe.display.TextLayout.getAlignOffset(align, lineWidths[line], wrapWidth);
            }
            this._offsets[ii1] += alignOffset;
            var glyphY = lineY + glyph.yOffset;
            top = top < glyphY ? top : glyphY;
            bottom = flambe.math.FMath.max(bottom, glyphY + glyph.height);
            ++ii1;
        }
        this.bounds.x = flambe.display.TextLayout.getAlignOffset(align, this.bounds.width, wrapWidth);
        this.bounds.y = top;
        this.bounds.height = bottom - top;
    };
    $hxClasses["flambe.display.TextLayout"] = flambe.display.TextLayout;
    flambe.display.TextLayout.__name__ = true;
    flambe.display.TextLayout.getAlignOffset = function(align, lineWidth, totalWidth) {
        switch ((align)[1]) {
            case 0:
                return 0;
            case 2:
                return totalWidth - lineWidth;
            case 1:
                return (totalWidth - lineWidth) / 2;
        }
    }
    flambe.display.TextLayout.prototype = {
        _offsets: null,
        _glyphs: null,
        _font: null,
        draw: function(g, align) {
            var y = 0.0;
            var ii = 0;
            var ll = this._glyphs.length;
            while (ii < ll) {
                var glyph = this._glyphs[ii];
                if (glyph.charCode == 10) y += this._font.size;
                else {
                    var x = this._offsets[ii];
                    glyph.draw(g, x, y);
                }
                ++ii;
            }
        },
        lines: null,
        bounds: null,
        __class__: flambe.display.TextLayout
    }
    flambe.display._Font = {}
    flambe.display._Font.ConfigParser = function(config) {
        this._configText = config;
        this._keywordPattern = new EReg("([a-z]+)(.*)", "");
        this._pairPattern = new EReg("([a-z]+)=(\"[^\"]*\"|[^\\s]+)", "");
    };
    $hxClasses["flambe.display._Font.ConfigParser"] = flambe.display._Font.ConfigParser;
    flambe.display._Font.ConfigParser.__name__ = true;
    flambe.display._Font.ConfigParser.advance = function(text, expr) {
        var m = expr.matchedPos();
        return HxOverrides.substr(text, m.pos + m.len, text.length);
    }
    flambe.display._Font.ConfigParser.prototype = {
        _pairPattern: null,
        _keywordPattern: null,
        _pairText: null,
        _configText: null,
        pairs: function() {
            var _g = this;
            var text = this._pairText;
            return {
                next: function() {
                    text = flambe.display._Font.ConfigParser.advance(text, _g._pairPattern);
                    return new flambe.display._Font.ConfigPair(_g._pairPattern.matched(1), _g._pairPattern.matched(2));
                },
                hasNext: function() {
                    return _g._pairPattern.match(text);
                }
            };
        },
        keywords: function() {
            var _g = this;
            var text = this._configText;
            return {
                next: function() {
                    text = flambe.display._Font.ConfigParser.advance(text, _g._keywordPattern);
                    _g._pairText = _g._keywordPattern.matched(2);
                    return _g._keywordPattern.matched(1);
                },
                hasNext: function() {
                    return _g._keywordPattern.match(text);
                }
            };
        },
        __class__: flambe.display._Font.ConfigParser
    }
    flambe.display._Font.ConfigPair = function(key, value) {
        this.key = key;
        this._value = value;
    };
    $hxClasses["flambe.display._Font.ConfigPair"] = flambe.display._Font.ConfigPair;
    flambe.display._Font.ConfigPair.__name__ = true;
    flambe.display._Font.ConfigPair.prototype = {
        _value: null,
        getString: function() {
            if (this._value.charCodeAt(0) != 34) return null;
            return HxOverrides.substr(this._value, 1, this._value.length - 2);
        },
        getInt: function() {
            return Std.parseInt(this._value);
        },
        key: null,
        __class__: flambe.display._Font.ConfigPair
    }
    flambe.display.Graphics = function() {}
    $hxClasses["flambe.display.Graphics"] = flambe.display.Graphics;
    flambe.display.Graphics.__name__ = true;
    flambe.display.Graphics.prototype = {
        fillRect: null,
        drawSubImage: null,
        drawImage: null,
        restore: null,
        applyScissor: null,
        setBlendMode: null,
        multiplyAlpha: null,
        transform: null,
        save: null,
        __class__: flambe.display.Graphics
    }
    flambe.display.ImageSprite = function(texture) {
        flambe.display.Sprite.call(this);
        this.texture = texture;
    };
    $hxClasses["flambe.display.ImageSprite"] = flambe.display.ImageSprite;
    flambe.display.ImageSprite.__name__ = true;
    flambe.display.ImageSprite.__super__ = flambe.display.Sprite;
    flambe.display.ImageSprite.prototype = $extend(flambe.display.Sprite.prototype, {
        getNaturalHeight: function() {
            return this.texture.get_height();
        },
        getNaturalWidth: function() {
            return this.texture.get_width();
        },
        draw: function(g) {
            g.drawImage(this.texture, 0, 0);
        },
        texture: null,
        __class__: flambe.display.ImageSprite
    });
    flambe.display.Orientation = $hxClasses["flambe.display.Orientation"] = {
        __ename__: true,
        __constructs__: ["Portrait", "Landscape"]
    }
    flambe.display.Orientation.Portrait = ["Portrait", 0];
    flambe.display.Orientation.Portrait.toString = $estr;
    flambe.display.Orientation.Portrait.__enum__ = flambe.display.Orientation;
    flambe.display.Orientation.Landscape = ["Landscape", 1];
    flambe.display.Orientation.Landscape.toString = $estr;
    flambe.display.Orientation.Landscape.__enum__ = flambe.display.Orientation;
    flambe.display.TextSprite = function(font, text) {
        if (text == null) text = "";
        this._layout = null;
        var _g = this;
        flambe.display.Sprite.call(this);
        this._font = font;
        this._text = text;
        this._align = flambe.display.TextAlign.Left;
        this._flags = this._flags | 64;
        this.wrapWidth = new flambe.animation.AnimatedFloat(0, function(_, _1) {
            _g._flags = _g._flags | 64;
        });
    };
    $hxClasses["flambe.display.TextSprite"] = flambe.display.TextSprite;
    flambe.display.TextSprite.__name__ = true;
    flambe.display.TextSprite.__super__ = flambe.display.Sprite;
    flambe.display.TextSprite.prototype = $extend(flambe.display.Sprite.prototype, {
        _layout: null,
        _align: null,
        _text: null,
        _font: null,
        onUpdate: function(dt) {
            flambe.display.Sprite.prototype.onUpdate.call(this, dt);
            this.wrapWidth.update(dt);
        },
        updateLayout: function() {
            if ((this._flags & 64) != 0) {
                this._flags = this._flags & -65;
                this._layout = this._font.layoutText(this._text, this._align, this.wrapWidth._value);
            }
        },
        set_align: function(align) {
            if (align != this._align) {
                this._align = align;
                this._flags = this._flags | 64;
            }
            return align;
        },
        set_font: function(font) {
            if (font != this._font) {
                this._font = font;
                this._flags = this._flags | 64;
            }
            return font;
        },
        set_text: function(text) {
            if (text != this._text) {
                this._text = text;
                this._flags = this._flags | 64;
            }
            return text;
        },
        containsLocal: function(localX, localY) {
            this.updateLayout();
            return this._layout.bounds.contains(localX, localY);
        },
        getNaturalHeight: function() {
            this.updateLayout();
            return this._layout.lines * this._font.size;
        },
        getNaturalWidth: function() {
            this.updateLayout();
            return this.wrapWidth._value > 0 ? this.wrapWidth._value : this._layout.bounds.width;
        },
        draw: function(g) {
            this.updateLayout();
            this._layout.draw(g, this._align);
        },
        wrapWidth: null,
        __class__: flambe.display.TextSprite
    });
    flambe.display.Texture = function() {}
    $hxClasses["flambe.display.Texture"] = flambe.display.Texture;
    flambe.display.Texture.__name__ = true;
    flambe.display.Texture.__interfaces__ = [flambe.asset.Asset];
    flambe.display.Texture.prototype = {
        height: null,
        width: null,
        __class__: flambe.display.Texture
    }
    flambe.input = {}
    flambe.input.MouseButton = $hxClasses["flambe.input.MouseButton"] = {
        __ename__: true,
        __constructs__: ["Left", "Middle", "Right", "Unknown"]
    }
    flambe.input.MouseButton.Left = ["Left", 0];
    flambe.input.MouseButton.Left.toString = $estr;
    flambe.input.MouseButton.Left.__enum__ = flambe.input.MouseButton;
    flambe.input.MouseButton.Middle = ["Middle", 1];
    flambe.input.MouseButton.Middle.toString = $estr;
    flambe.input.MouseButton.Middle.__enum__ = flambe.input.MouseButton;
    flambe.input.MouseButton.Right = ["Right", 2];
    flambe.input.MouseButton.Right.toString = $estr;
    flambe.input.MouseButton.Right.__enum__ = flambe.input.MouseButton;
    flambe.input.MouseButton.Unknown = function(buttonCode) {
        var $x = ["Unknown", 3, buttonCode];
        $x.__enum__ = flambe.input.MouseButton;
        $x.toString = $estr;
        return $x;
    }
    flambe.input.MouseCursor = $hxClasses["flambe.input.MouseCursor"] = {
        __ename__: true,
        __constructs__: ["Default", "Button", "None"]
    }
    flambe.input.MouseCursor.Default = ["Default", 0];
    flambe.input.MouseCursor.Default.toString = $estr;
    flambe.input.MouseCursor.Default.__enum__ = flambe.input.MouseCursor;
    flambe.input.MouseCursor.Button = ["Button", 1];
    flambe.input.MouseCursor.Button.toString = $estr;
    flambe.input.MouseCursor.Button.__enum__ = flambe.input.MouseCursor;
    flambe.input.MouseCursor.None = ["None", 2];
    flambe.input.MouseCursor.None.toString = $estr;
    flambe.input.MouseCursor.None.__enum__ = flambe.input.MouseCursor;
    flambe.input.MouseEvent = function() {
        this.init(0, 0, 0, null);
    };
    $hxClasses["flambe.input.MouseEvent"] = flambe.input.MouseEvent;
    flambe.input.MouseEvent.__name__ = true;
    flambe.input.MouseEvent.prototype = {
        init: function(id, viewX, viewY, button) {
            this.id = id;
            this.viewX = viewX;
            this.viewY = viewY;
            this.button = button;
        },
        id: null,
        button: null,
        viewY: null,
        viewX: null,
        __class__: flambe.input.MouseEvent
    }
    flambe.input.EventSource = $hxClasses["flambe.input.EventSource"] = {
        __ename__: true,
        __constructs__: ["Mouse", "Touch"]
    }
    flambe.input.EventSource.Mouse = function(event) {
        var $x = ["Mouse", 0, event];
        $x.__enum__ = flambe.input.EventSource;
        $x.toString = $estr;
        return $x;
    }
    flambe.input.EventSource.Touch = function(point) {
        var $x = ["Touch", 1, point];
        $x.__enum__ = flambe.input.EventSource;
        $x.toString = $estr;
        return $x;
    }
    flambe.input.PointerEvent = function() {
        this.init(0, 0, 0, null, null);
    };
    $hxClasses["flambe.input.PointerEvent"] = flambe.input.PointerEvent;
    flambe.input.PointerEvent.__name__ = true;
    flambe.input.PointerEvent.prototype = {
        _stopped: null,
        init: function(id, viewX, viewY, hit, source) {
            this.id = id;
            this.viewX = viewX;
            this.viewY = viewY;
            this.hit = hit;
            this.source = source;
            this._stopped = false;
        },
        id: null,
        source: null,
        hit: null,
        viewY: null,
        viewX: null,
        __class__: flambe.input.PointerEvent
    }
    flambe.input.TouchPoint = function(id) {
        this.id = id;
        this._source = flambe.input.EventSource.Touch(this);
    };
    $hxClasses["flambe.input.TouchPoint"] = flambe.input.TouchPoint;
    flambe.input.TouchPoint.__name__ = true;
    flambe.input.TouchPoint.prototype = {
        _source: null,
        init: function(viewX, viewY) {
            this.viewX = viewX;
            this.viewY = viewY;
        },
        id: null,
        viewY: null,
        viewX: null,
        __class__: flambe.input.TouchPoint
    }
    flambe.math.FMath = function() {}
    $hxClasses["flambe.math.FMath"] = flambe.math.FMath;
    flambe.math.FMath.__name__ = true;
    flambe.math.FMath.max = function(a, b) {
        return a > b ? a : b;
    }
    flambe.math.FMath.min = function(a, b) {
        return a < b ? a : b;
    }
    flambe.math.FMath.clamp = function(value, min, max) {
        return value < min ? min : value > max ? max : value;
    }
    flambe.math.Matrix = function() {
        this.identity();
    };
    $hxClasses["flambe.math.Matrix"] = flambe.math.Matrix;
    flambe.math.Matrix.__name__ = true;
    flambe.math.Matrix.multiply = function(lhs, rhs, result) {
        if (result == null) result = new flambe.math.Matrix();
        var a = lhs.m00 * rhs.m00 + lhs.m01 * rhs.m10;
        var b = lhs.m00 * rhs.m01 + lhs.m01 * rhs.m11;
        var c = lhs.m00 * rhs.m02 + lhs.m01 * rhs.m12 + lhs.m02;
        result.m00 = a;
        result.m01 = b;
        result.m02 = c;
        a = lhs.m10 * rhs.m00 + lhs.m11 * rhs.m10;
        b = lhs.m10 * rhs.m01 + lhs.m11 * rhs.m11;
        c = lhs.m10 * rhs.m02 + lhs.m11 * rhs.m12 + lhs.m12;
        result.m10 = a;
        result.m11 = b;
        result.m12 = c;
        return result;
    }
    flambe.math.Matrix.prototype = {
        clone: function(result) {
            if (result == null) result = new flambe.math.Matrix();
            result.set(this.m00, this.m10, this.m01, this.m11, this.m02, this.m12);
            return result;
        },
        inverseTransform: function(x, y, result) {
            var det = this.determinant();
            if (det == 0) return false;
            x -= this.m02;
            y -= this.m12;
            result.x = (x * this.m11 - y * this.m01) / det;
            result.y = (y * this.m00 - x * this.m10) / det;
            return true;
        },
        determinant: function() {
            return this.m00 * this.m11 - this.m01 * this.m10;
        },
        transformArray: function(points, length, result) {
            var ii = 0;
            while (ii < length) {
                var x = points[ii],
                    y = points[ii + 1];
                result[ii++] = x * this.m00 + y * this.m01 + this.m02;
                result[ii++] = x * this.m10 + y * this.m11 + this.m12;
            }
        },
        translate: function(x, y) {
            this.m02 += this.m00 * x + this.m01 * y;
            this.m12 += this.m11 * y + this.m10 * x;
        },
        compose: function(x, y, scaleX, scaleY, rotation) {
            var sin = Math.sin(rotation);
            var cos = Math.cos(rotation);
            this.set(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y);
        },
        identity: function() {
            this.set(1, 0, 0, 1, 0, 0);
        },
        set: function(m00, m10, m01, m11, m02, m12) {
            this.m00 = m00;
            this.m01 = m01;
            this.m02 = m02;
            this.m10 = m10;
            this.m11 = m11;
            this.m12 = m12;
        },
        m12: null,
        m02: null,
        m11: null,
        m01: null,
        m10: null,
        m00: null,
        __class__: flambe.math.Matrix
    }
    flambe.math.Rectangle = function(x, y, width, height) {
        if (height == null) height = 0;
        if (width == null) width = 0;
        if (y == null) y = 0;
        if (x == null) x = 0;
        this.set(x, y, width, height);
    };
    $hxClasses["flambe.math.Rectangle"] = flambe.math.Rectangle;
    flambe.math.Rectangle.__name__ = true;
    flambe.math.Rectangle.prototype = {
        equals: function(other) {
            return this.x == other.x && this.y == other.y && this.width == other.width && this.height == other.height;
        },
        clone: function(result) {
            if (result == null) result = new flambe.math.Rectangle();
            result.set(this.x, this.y, this.width, this.height);
            return result;
        },
        contains: function(x, y) {
            x -= this.x;
            if (this.width >= 0) {
                if (x < 0 || x > this.width) return false;
            } else if (x > 0 || x < this.width) return false;
            y -= this.y;
            if (this.height >= 0) {
                if (y < 0 || y > this.height) return false;
            } else if (y > 0 || y < this.height) return false;
            return true;
        },
        set: function(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        },
        height: null,
        width: null,
        y: null,
        x: null,
        __class__: flambe.math.Rectangle
    }
    flambe.platform.BasicAsset = function() {
        this._disposed = false;
    };
    $hxClasses["flambe.platform.BasicAsset"] = flambe.platform.BasicAsset;
    flambe.platform.BasicAsset.__name__ = true;
    flambe.platform.BasicAsset.__interfaces__ = [flambe.asset.Asset];
    flambe.platform.BasicAsset.prototype = {
        _disposed: null,
        onDisposed: function() {
            null;
        },
        dispose: function() {
            if (!this._disposed) {
                this._disposed = true;
                this.onDisposed();
            }
        },
        __class__: flambe.platform.BasicAsset
    }
    flambe.platform.BasicAssetPackLoader = function(platform, manifest) {
        var _g = this;
        this.manifest = manifest;
        this._platform = platform;
        this.promise = new flambe.util.Promise();
        this._bytesLoaded = new haxe.ds.StringMap();
        this._pack = new flambe.platform._BasicAssetPackLoader.BasicAssetPack(manifest, this);
        var entries = Lambda.array(manifest);
        if (entries.length == 0) this.handleSuccess();
        else {
            var groups = new haxe.ds.StringMap();
            var _g1 = 0;
            while (_g1 < entries.length) {
                var entry = entries[_g1];
                ++_g1;
                var group = groups.get(entry.name);
                if (group == null) {
                    group = [];
                    groups.set(entry.name, group);
                }
                group.push(entry);
            }
            this._assetsRemaining = Lambda.count(groups);
            var $it0 = (((function() {
                return function(_e) {
                    return (function() {
                        return function() {
                            return _e.iterator();
                        };
                    })();
                };
            })())(groups))();
            while ($it0.hasNext()) {
                var group = $it0.next();
                var group1 = [group];
                this.pickBestEntry(group1[0], (function(group1) {
                    return function(bestEntry) {
                        if (bestEntry != null) {
                            var url = manifest.getFullURL(bestEntry);
                            try {
                                _g.loadEntry(url, bestEntry);
                            } catch (error) {
                                _g.handleError(bestEntry, "Unexpected error: " + Std.string(error));
                            }
                            var _g1 = _g.promise;
                            _g1.set_total(_g1._total + bestEntry.bytes);
                        } else {
                            var badEntry = group1[0][0];
                            if (flambe.platform.BasicAssetPackLoader.isAudio(badEntry.format)) _g.handleLoad(badEntry, flambe.platform.DummySound.getInstance());
                            else _g.handleError(badEntry, "Could not find a supported format to load");
                        }
                    };
                })(group1));
            }
        }
    };
    $hxClasses["flambe.platform.BasicAssetPackLoader"] = flambe.platform.BasicAssetPackLoader;
    flambe.platform.BasicAssetPackLoader.__name__ = true;
    flambe.platform.BasicAssetPackLoader.isAudio = function(format) {
        switch ((format)[1]) {
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                return true;
            default:
                return false;
        }
    }
    flambe.platform.BasicAssetPackLoader.prototype = {
        _pack: null,
        _bytesLoaded: null,
        _assetsRemaining: null,
        _platform: null,
        handleTextureError: function(entry) {
            this.handleError(entry, "Failed to create texture. Is the GPU context unavailable?");
        },
        handleError: function(entry, message) {
            this.promise.error.emit(flambe.util.Strings.withFields(message, ["url", entry.url]));
        },
        handleSuccess: function() {
            this.promise.set_result(this._pack);
        },
        handleProgress: function(entry, bytesLoaded) {
            this._bytesLoaded.set(entry.name, bytesLoaded);
            var bytesTotal = 0;
            var $it0 = ((function(_e) {
                return function() {
                    return _e.iterator();
                };
            })(this._bytesLoaded))();
            while ($it0.hasNext()) {
                var bytes = $it0.next();
                bytesTotal += bytes;
            }
            this.promise.set_progress(bytesTotal);
        },
        handleLoad: function(entry, asset) {
            if (this._pack.disposed) return;
            this.handleProgress(entry, entry.bytes);
            var map;
            switch ((entry.format)[1]) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    map = this._pack.textures;
                    break;
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                    map = this._pack.sounds;
                    break;
                case 13:
                    map = this._pack.files;
                    break;
            }
            map.set(entry.name, asset);
            this._assetsRemaining -= 1;
            if (this._assetsRemaining == 0) this.handleSuccess();
        },
        getAssetFormats: function(fn) {
            null;
        },
        loadEntry: function(url, entry) {
            null;
        },
        pickBestEntry: function(entries, fn) {
            var onFormatsAvailable = function(formats) {
                var _g = 0;
                while (_g < formats.length) {
                    var format = formats[_g];
                    ++_g;
                    var _g1 = 0;
                    while (_g1 < entries.length) {
                        var entry = entries[_g1];
                        ++_g1;
                        if (entry.format == format) {
                            fn(entry);
                            return;
                        }
                    }
                }
                fn(null);
            };
            this.getAssetFormats(onFormatsAvailable);
        },
        onDisposed: function() {},
        manifest: null,
        promise: null,
        __class__: flambe.platform.BasicAssetPackLoader
    }
    flambe.platform._BasicAssetPackLoader = {}
    flambe.platform._BasicAssetPackLoader.BasicAssetPack = function(manifest, loader) {
        this.disposed = false;
        this._manifest = manifest;
        this.loader = loader;
        this.textures = new haxe.ds.StringMap();
        this.sounds = new haxe.ds.StringMap();
        this.files = new haxe.ds.StringMap();
    };
    $hxClasses["flambe.platform._BasicAssetPackLoader.BasicAssetPack"] = flambe.platform._BasicAssetPackLoader.BasicAssetPack;
    flambe.platform._BasicAssetPackLoader.BasicAssetPack.__name__ = true;
    flambe.platform._BasicAssetPackLoader.BasicAssetPack.__interfaces__ = [flambe.asset.AssetPack];
    flambe.platform._BasicAssetPackLoader.BasicAssetPack.prototype = {
        _manifest: null,
        dispose: function() {
            if (!this.disposed) {
                this.disposed = true;
                var $it0 = ((function(_e) {
                    return function() {
                        return _e.iterator();
                    };
                })(this.textures))();
                while ($it0.hasNext()) {
                    var texture = $it0.next();
                    texture.dispose();
                }
                this.textures = null;
                var $it1 = ((function(_e1) {
                    return function() {
                        return _e1.iterator();
                    };
                })(this.sounds))();
                while ($it1.hasNext()) {
                    var sound = $it1.next();
                    sound.dispose();
                }
                this.sounds = null;
                var $it2 = ((function(_e2) {
                    return function() {
                        return _e2.iterator();
                    };
                })(this.files))();
                while ($it2.hasNext()) {
                    var file = $it2.next();
                    file.dispose();
                }
                this.files = null;
                this.loader.onDisposed();
            }
        },
        getFile: function(name, required) {
            if (required == null) required = true;
            var file = this.files.get(name);
            if (file == null && required) throw flambe.util.Strings.withFields("Missing file", ["name", name]);
            return file;
        },
        getTexture: function(name, required) {
            if (required == null) required = true;
            var texture = this.textures.get(name);
            if (texture == null && required) throw flambe.util.Strings.withFields("Missing texture", ["name", name]);
            return texture;
        },
        disposed: null,
        files: null,
        sounds: null,
        textures: null,
        loader: null,
        __class__: flambe.platform._BasicAssetPackLoader.BasicAssetPack
    }
    flambe.platform.BasicFile = function(content) {
        flambe.platform.BasicAsset.call(this);
        this._content = content;
    };
    $hxClasses["flambe.platform.BasicFile"] = flambe.platform.BasicFile;
    flambe.platform.BasicFile.__name__ = true;
    flambe.platform.BasicFile.__interfaces__ = [flambe.asset.File];
    flambe.platform.BasicFile.__super__ = flambe.platform.BasicAsset;
    flambe.platform.BasicFile.prototype = $extend(flambe.platform.BasicAsset.prototype, {
        _content: null,
        onDisposed: function() {
            this._content = null;
        },
        toString: function() {
            return this._content;
        },
        __class__: flambe.platform.BasicFile
    });
    flambe.subsystem = {}
    flambe.subsystem.MouseSystem = function() {}
    $hxClasses["flambe.subsystem.MouseSystem"] = flambe.subsystem.MouseSystem;
    flambe.subsystem.MouseSystem.__name__ = true;
    flambe.subsystem.MouseSystem.prototype = {
        isDown: null,
        __class__: flambe.subsystem.MouseSystem
    }
    flambe.platform.BasicMouse = function(pointer) {
        this._pointer = pointer;
        this._source = flambe.input.EventSource.Mouse(flambe.platform.BasicMouse._sharedEvent);
        this.down = new flambe.util.Signal1();
        this.move = new flambe.util.Signal1();
        this.up = new flambe.util.Signal1();
        this.scroll = new flambe.util.Signal1();
        this._x = 0;
        this._y = 0;
        this._cursor = flambe.input.MouseCursor.Default;
        this._buttonStates = new haxe.ds.IntMap();
    };
    $hxClasses["flambe.platform.BasicMouse"] = flambe.platform.BasicMouse;
    flambe.platform.BasicMouse.__name__ = true;
    flambe.platform.BasicMouse.__interfaces__ = [flambe.subsystem.MouseSystem];
    flambe.platform.BasicMouse.prototype = {
        _buttonStates: null,
        _cursor: null,
        _y: null,
        _x: null,
        _source: null,
        _pointer: null,
        prepare: function(viewX, viewY, button) {
            this._x = viewX;
            this._y = viewY;
            flambe.platform.BasicMouse._sharedEvent.init(flambe.platform.BasicMouse._sharedEvent.id + 1, viewX, viewY, button);
        },
        submitScroll: function(viewX, viewY, velocity) {
            this._x = viewX;
            this._y = viewY;
            if (!(this.scroll._head != null)) return false;
            this.scroll.emit(velocity);
            return true;
        },
        submitUp: function(viewX, viewY, buttonCode) {
            if (this._buttonStates.exists(buttonCode)) {
                this._buttonStates.remove(buttonCode);
                this.prepare(viewX, viewY, flambe.platform.MouseCodes.toButton(buttonCode));
                this._pointer.submitUp(viewX, viewY, this._source);
                this.up.emit(flambe.platform.BasicMouse._sharedEvent);
            }
        },
        submitMove: function(viewX, viewY) {
            this.prepare(viewX, viewY, null);
            this._pointer.submitMove(viewX, viewY, this._source);
            this.move.emit(flambe.platform.BasicMouse._sharedEvent);
        },
        submitDown: function(viewX, viewY, buttonCode) {
            if (!this._buttonStates.exists(buttonCode)) {
                this._buttonStates.set(buttonCode, true);
                this.prepare(viewX, viewY, flambe.platform.MouseCodes.toButton(buttonCode));
                this._pointer.submitDown(viewX, viewY, this._source);
                this.down.emit(flambe.platform.BasicMouse._sharedEvent);
            }
        },
        isDown: function(button) {
            return this._buttonStates.exists(flambe.platform.MouseCodes.toButtonCode(button));
        },
        set_cursor: function(cursor) {
            return this._cursor = cursor;
        },
        scroll: null,
        up: null,
        move: null,
        down: null,
        __class__: flambe.platform.BasicMouse
    }
    flambe.subsystem.PointerSystem = function() {}
    $hxClasses["flambe.subsystem.PointerSystem"] = flambe.subsystem.PointerSystem;
    flambe.subsystem.PointerSystem.__name__ = true;
    flambe.subsystem.PointerSystem.prototype = {
        move: null,
        __class__: flambe.subsystem.PointerSystem
    }
    flambe.platform.BasicPointer = function(x, y, isDown) {
        if (isDown == null) isDown = false;
        if (y == null) y = 0;
        if (x == null) x = 0;
        this.down = new flambe.util.Signal1();
        this.move = new flambe.util.Signal1();
        this.up = new flambe.util.Signal1();
        this._x = x;
        this._y = y;
        this._isDown = isDown;
    };
    $hxClasses["flambe.platform.BasicPointer"] = flambe.platform.BasicPointer;
    flambe.platform.BasicPointer.__name__ = true;
    flambe.platform.BasicPointer.__interfaces__ = [flambe.subsystem.PointerSystem];
    flambe.platform.BasicPointer.prototype = {
        _isDown: null,
        _y: null,
        _x: null,
        prepare: function(viewX, viewY, hit, source) {
            this._x = viewX;
            this._y = viewY;
            flambe.platform.BasicPointer._sharedEvent.init(flambe.platform.BasicPointer._sharedEvent.id + 1, viewX, viewY, hit, source);
        },
        submitUp: function(viewX, viewY, source) {
            if (!this._isDown) return;
            this._isDown = false;
            var chain = [];
            var hit = flambe.display.Sprite.hitTest(flambe.System.root, viewX, viewY);
            if (hit != null) {
                var entity = hit.owner;
                do {
                    var sprite = entity._compMap.Sprite_1;
                    if (sprite != null) chain.push(sprite);
                    entity = entity.parent;
                } while (entity != null);
            }
            this.prepare(viewX, viewY, hit, source);
            var _g = 0;
            while (_g < chain.length) {
                var sprite = chain[_g];
                ++_g;
                var signal = sprite._pointerUp;
                if (signal != null) {
                    signal.emit(flambe.platform.BasicPointer._sharedEvent);
                    if (flambe.platform.BasicPointer._sharedEvent._stopped) return;
                }
            }
            this.up.emit(flambe.platform.BasicPointer._sharedEvent);
        },
        submitMove: function(viewX, viewY, source) {
            var chain = [];
            var hit = flambe.display.Sprite.hitTest(flambe.System.root, viewX, viewY);
            if (hit != null) {
                var entity = hit.owner;
                do {
                    var sprite = entity._compMap.Sprite_1;
                    if (sprite != null) chain.push(sprite);
                    entity = entity.parent;
                } while (entity != null);
            }
            this.prepare(viewX, viewY, hit, source);
            var _g = 0;
            while (_g < chain.length) {
                var sprite = chain[_g];
                ++_g;
                var signal = sprite._pointerMove;
                if (signal != null) {
                    signal.emit(flambe.platform.BasicPointer._sharedEvent);
                    if (flambe.platform.BasicPointer._sharedEvent._stopped) return;
                }
            }
            this.move.emit(flambe.platform.BasicPointer._sharedEvent);
        },
        submitDown: function(viewX, viewY, source) {
            if (this._isDown) return;
            this._isDown = true;
            var chain = [];
            var hit = flambe.display.Sprite.hitTest(flambe.System.root, viewX, viewY);
            if (hit != null) {
                var entity = hit.owner;
                do {
                    var sprite = entity._compMap.Sprite_1;
                    if (sprite != null) chain.push(sprite);
                    entity = entity.parent;
                } while (entity != null);
            }
            this.prepare(viewX, viewY, hit, source);
            var _g = 0;
            while (_g < chain.length) {
                var sprite = chain[_g];
                ++_g;
                var signal = sprite._pointerDown;
                if (signal != null) {
                    signal.emit(flambe.platform.BasicPointer._sharedEvent);
                    if (flambe.platform.BasicPointer._sharedEvent._stopped) return;
                }
            }
            this.down.emit(flambe.platform.BasicPointer._sharedEvent);
        },
        up: null,
        move: null,
        down: null,
        __class__: flambe.platform.BasicPointer
    }
    flambe.subsystem.TouchSystem = function() {}
    $hxClasses["flambe.subsystem.TouchSystem"] = flambe.subsystem.TouchSystem;
    flambe.subsystem.TouchSystem.__name__ = true;
    flambe.subsystem.TouchSystem.prototype = {
        points: null,
        supported: null,
        __class__: flambe.subsystem.TouchSystem
    }
    flambe.platform.BasicTouch = function(pointer, maxPoints) {
        if (maxPoints == null) maxPoints = 4;
        this._pointer = pointer;
        this._maxPoints = maxPoints;
        this._pointMap = new haxe.ds.IntMap();
        this._points = [];
        this.down = new flambe.util.Signal1();
        this.move = new flambe.util.Signal1();
        this.up = new flambe.util.Signal1();
    };
    $hxClasses["flambe.platform.BasicTouch"] = flambe.platform.BasicTouch;
    flambe.platform.BasicTouch.__name__ = true;
    flambe.platform.BasicTouch.__interfaces__ = [flambe.subsystem.TouchSystem];
    flambe.platform.BasicTouch.prototype = {
        _points: null,
        _pointMap: null,
        _maxPoints: null,
        _pointerTouch: null,
        _pointer: null,
        submitUp: function(id, viewX, viewY) {
            var point = this._pointMap.get(id);
            if (point != null) {
                point.init(viewX, viewY);
                this._pointMap.remove(id);
                HxOverrides.remove(this._points, point);
                if (this._pointerTouch == point) {
                    this._pointerTouch = null;
                    this._pointer.submitUp(viewX, viewY, point._source);
                }
                this.up.emit(point);
            }
        },
        submitMove: function(id, viewX, viewY) {
            var point = this._pointMap.get(id);
            if (point != null) {
                point.init(viewX, viewY);
                if (this._pointerTouch == point) this._pointer.submitMove(viewX, viewY, point._source);
                this.move.emit(point);
            }
        },
        submitDown: function(id, viewX, viewY) {
            if (!this._pointMap.exists(id)) {
                var point = new flambe.input.TouchPoint(id);
                point.init(viewX, viewY);
                this._pointMap.set(id, point);
                this._points.push(point);
                if (this._pointerTouch == null) {
                    this._pointerTouch = point;
                    this._pointer.submitDown(viewX, viewY, point._source);
                }
                this.down.emit(point);
            }
        },
        get_points: function() {
            return this._points.slice();
        },
        get_supported: function() {
            return true;
        },
        up: null,
        move: null,
        down: null,
        points: null,
        supported: null,
        __class__: flambe.platform.BasicTouch
    }
    flambe.sound = {}
    flambe.sound.Sound = function() {}
    $hxClasses["flambe.sound.Sound"] = flambe.sound.Sound;
    flambe.sound.Sound.__name__ = true;
    flambe.sound.Sound.__interfaces__ = [flambe.asset.Asset];
    flambe.platform.DummySound = function() {
        flambe.platform.BasicAsset.call(this);
        this._playback = new flambe.platform.DummyPlayback(this);
    };
    $hxClasses["flambe.platform.DummySound"] = flambe.platform.DummySound;
    flambe.platform.DummySound.__name__ = true;
    flambe.platform.DummySound.__interfaces__ = [flambe.sound.Sound];
    flambe.platform.DummySound.getInstance = function() {
        if (flambe.platform.DummySound._instance == null) flambe.platform.DummySound._instance = new flambe.platform.DummySound();
        return flambe.platform.DummySound._instance;
    }
    flambe.platform.DummySound.__super__ = flambe.platform.BasicAsset;
    flambe.platform.DummySound.prototype = $extend(flambe.platform.BasicAsset.prototype, {
        _playback: null,
        __class__: flambe.platform.DummySound
    });
    flambe.sound.Playback = function() {}
    $hxClasses["flambe.sound.Playback"] = flambe.sound.Playback;
    flambe.sound.Playback.__name__ = true;
    flambe.sound.Playback.__interfaces__ = [flambe.util.Disposable];
    flambe.platform.DummyPlayback = function(sound) {
        this._sound = sound;
        this.volume = new flambe.animation.AnimatedFloat(0);
    };
    $hxClasses["flambe.platform.DummyPlayback"] = flambe.platform.DummyPlayback;
    flambe.platform.DummyPlayback.__name__ = true;
    flambe.platform.DummyPlayback.__interfaces__ = [flambe.sound.Playback];
    flambe.platform.DummyPlayback.prototype = {
        _sound: null,
        dispose: function() {},
        volume: null,
        __class__: flambe.platform.DummyPlayback
    }
    flambe.platform.DummyTouch = function() {
        this.down = new flambe.util.Signal1();
        this.move = new flambe.util.Signal1();
        this.up = new flambe.util.Signal1();
    };
    $hxClasses["flambe.platform.DummyTouch"] = flambe.platform.DummyTouch;
    flambe.platform.DummyTouch.__name__ = true;
    flambe.platform.DummyTouch.__interfaces__ = [flambe.subsystem.TouchSystem];
    flambe.platform.DummyTouch.prototype = {
        get_points: function() {
            return [];
        },
        get_supported: function() {
            return false;
        },
        up: null,
        move: null,
        down: null,
        points: null,
        supported: null,
        __class__: flambe.platform.DummyTouch
    }
    flambe.platform.EventGroup = function() {
        this._entries = [];
    };
    $hxClasses["flambe.platform.EventGroup"] = flambe.platform.EventGroup;
    flambe.platform.EventGroup.__name__ = true;
    flambe.platform.EventGroup.__interfaces__ = [flambe.util.Disposable];
    flambe.platform.EventGroup.prototype = {
        _entries: null,
        dispose: function() {
            var _g = 0,
                _g1 = this._entries;
            while (_g < _g1.length) {
                var entry = _g1[_g];
                ++_g;
                entry.dispatcher.removeEventListener(entry.type, entry.listener, false);
            }
            this._entries = [];
        },
        addDisposingListener: function(dispatcher, type, listener) {
            var _g = this;
            this.addListener(dispatcher, type, function(event) {
                _g.dispose();
                listener(event);
            });
        },
        addListener: function(dispatcher, type, listener) {
            dispatcher.addEventListener(type, listener, false);
            this._entries.push(new flambe.platform._EventGroup.Entry(dispatcher, type, listener));
        },
        __class__: flambe.platform.EventGroup
    }
    flambe.platform._EventGroup = {}
    flambe.platform._EventGroup.Entry = function(dispatcher, type, listener) {
        this.dispatcher = dispatcher;
        this.type = type;
        this.listener = listener;
    };
    $hxClasses["flambe.platform._EventGroup.Entry"] = flambe.platform._EventGroup.Entry;
    flambe.platform._EventGroup.Entry.__name__ = true;
    flambe.platform._EventGroup.Entry.prototype = {
        listener: null,
        type: null,
        dispatcher: null,
        __class__: flambe.platform._EventGroup.Entry
    }
    flambe.platform.InternalGraphics = function() {}
    $hxClasses["flambe.platform.InternalGraphics"] = flambe.platform.InternalGraphics;
    flambe.platform.InternalGraphics.__name__ = true;
    flambe.platform.InternalGraphics.__interfaces__ = [flambe.display.Graphics];
    flambe.platform.InternalGraphics.prototype = {
        didRender: null,
        willRender: null,
        __class__: flambe.platform.InternalGraphics
    }
    flambe.platform.MainLoop = function() {
        this._tickables = [];
    };
    $hxClasses["flambe.platform.MainLoop"] = flambe.platform.MainLoop;
    flambe.platform.MainLoop.__name__ = true;
    flambe.platform.MainLoop.updateEntity = function(entity, dt) {
        var speed = entity._compMap.SpeedAdjuster_7;
        if (speed != null) {
            speed._realDt = dt;
            dt *= speed.scale._value;
            if (dt <= 0) {
                speed.onUpdate(dt);
                return;
            }
        }
        var p = entity.firstComponent;
        while (p != null) {
            var next = p.next;
            p.onUpdate(dt);
            p = next;
        }
        var p1 = entity.firstChild;
        while (p1 != null) {
            var next = p1.next;
            flambe.platform.MainLoop.updateEntity(p1, dt);
            p1 = next;
        }
    }
    flambe.platform.MainLoop.prototype = {
        _tickables: null,
        render: function(renderer) {
            var graphics = renderer.graphics;
            if (graphics != null) {
                renderer.willRender();
                flambe.display.Sprite.render(flambe.System.root, graphics);
                renderer.didRender();
            }
        },
        update: function(dt) {
            if (dt <= 0) return;
            if (dt > 1) dt = 1;
            var ii = 0;
            while (ii < this._tickables.length) {
                var t = this._tickables[ii];
                if (t == null || t.update(dt)) this._tickables.splice(ii, 1);
                else ++ii;
            }
            flambe.System.volume.update(dt);
            flambe.platform.MainLoop.updateEntity(flambe.System.root, dt);
        },
        __class__: flambe.platform.MainLoop
    }
    flambe.platform.MouseCodes = function() {}
    $hxClasses["flambe.platform.MouseCodes"] = flambe.platform.MouseCodes;
    flambe.platform.MouseCodes.__name__ = true;
    flambe.platform.MouseCodes.toButton = function(buttonCode) {
        switch (buttonCode) {
            case 0:
                return flambe.input.MouseButton.Left;
            case 1:
                return flambe.input.MouseButton.Middle;
            case 2:
                return flambe.input.MouseButton.Right;
        }
        return flambe.input.MouseButton.Unknown(buttonCode);
    }
    flambe.platform.MouseCodes.toButtonCode = function(button) {
        var $e = (button);
        switch ($e[1]) {
            case 0:
                return 0;
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                var buttonCode = $e[2];
                return buttonCode;
        }
    }
    flambe.platform.Renderer = function() {}
    $hxClasses["flambe.platform.Renderer"] = flambe.platform.Renderer;
    flambe.platform.Renderer.__name__ = true;
    flambe.platform.Renderer.prototype = {
        didRender: null,
        willRender: null,
        createCompressedTexture: null,
        getCompressedTextureFormats: null,
        createTexture: null,
        graphics: null,
        __class__: flambe.platform.Renderer
    }
    flambe.platform.Tickable = function() {}
    $hxClasses["flambe.platform.Tickable"] = flambe.platform.Tickable;
    flambe.platform.Tickable.__name__ = true;
    flambe.platform.Tickable.prototype = {
        update: null,
        __class__: flambe.platform.Tickable
    }
    flambe.platform.html.CanvasGraphics = function(canvas) {
        this._firstDraw = false;
        this._canvasCtx = canvas.getContext("2d");
    };
    $hxClasses["flambe.platform.html.CanvasGraphics"] = flambe.platform.html.CanvasGraphics;
    flambe.platform.html.CanvasGraphics.__name__ = true;
    flambe.platform.html.CanvasGraphics.__interfaces__ = [flambe.platform.InternalGraphics];
    flambe.platform.html.CanvasGraphics.prototype = {
        _firstDraw: null,
        _canvasCtx: null,
        didRender: function() {},
        willRender: function() {
            this._firstDraw = true;
        },
        applyScissor: function(x, y, width, height) {
            this._canvasCtx.beginPath();
            this._canvasCtx.rect(x | 0, y | 0, width | 0, height | 0);
            this._canvasCtx.clip();
        },
        setBlendMode: function(blendMode) {
            var op;
            switch ((blendMode)[1]) {
                case 0:
                    op = "source-over";
                    break;
                case 1:
                    op = "lighter";
                    break;
                case 2:
                    op = "destination-in";
                    break;
                case 3:
                    op = "copy";
                    break;
            }
            this._canvasCtx.globalCompositeOperation = op;
        },
        multiplyAlpha: function(factor) {
            this._canvasCtx.globalAlpha *= factor;
        },
        fillRect: function(color, x, y, width, height) {
            if (this._firstDraw) {
                this._firstDraw = false;
                this._canvasCtx.globalCompositeOperation = "copy";
                this.fillRect(color, x, y, width, height);
                this._canvasCtx.globalCompositeOperation = "source-over";
                return;
            }
            var hex = (16777215 & color).toString(16);
            while (hex.length < 6) hex = "0" + Std.string(hex);
            this._canvasCtx.fillStyle = "#" + Std.string(hex);
            this._canvasCtx.fillRect(x | 0, y | 0, width | 0, height | 0);
        },
        drawSubImage: function(texture, destX, destY, sourceX, sourceY, sourceW, sourceH) {
            if (this._firstDraw) {
                this._firstDraw = false;
                this._canvasCtx.globalCompositeOperation = "copy";
                this.drawSubImage(texture, destX, destY, sourceX, sourceY, sourceW, sourceH);
                this._canvasCtx.globalCompositeOperation = "source-over";
                return;
            }
            var texture1 = texture;
            this._canvasCtx.drawImage(texture1.image, sourceX | 0, sourceY | 0, sourceW | 0, sourceH | 0, destX | 0, destY | 0, sourceW | 0, sourceH | 0);
        },
        drawImage: function(texture, x, y) {
            if (this._firstDraw) {
                this._firstDraw = false;
                this._canvasCtx.globalCompositeOperation = "copy";
                this.drawImage(texture, x, y);
                this._canvasCtx.globalCompositeOperation = "source-over";
                return;
            }
            var texture1 = texture;
            this._canvasCtx.drawImage(texture1.image, x | 0, y | 0);
        },
        restore: function() {
            this._canvasCtx.restore();
        },
        transform: function(m00, m10, m01, m11, m02, m12) {
            this._canvasCtx.transform(m00, m10, m01, m11, m02, m12);
        },
        save: function() {
            this._canvasCtx.save();
        },
        __class__: flambe.platform.html.CanvasGraphics
    }
    flambe.platform.html.CanvasRenderer = function(canvas) {
        this.graphics = new flambe.platform.html.CanvasGraphics(canvas);
        flambe.System.hasGPU.set__(true);
    };
    $hxClasses["flambe.platform.html.CanvasRenderer"] = flambe.platform.html.CanvasRenderer;
    flambe.platform.html.CanvasRenderer.__name__ = true;
    flambe.platform.html.CanvasRenderer.__interfaces__ = [flambe.platform.Renderer];
    flambe.platform.html.CanvasRenderer.prototype = {
        didRender: function() {
            this.graphics.didRender();
        },
        willRender: function() {
            this.graphics.willRender();
        },
        createCompressedTexture: function(format, data) {
            return null;
        },
        getCompressedTextureFormats: function() {
            return [];
        },
        createTexture: function(image) {
            return new flambe.platform.html.CanvasTexture(flambe.platform.html.CanvasRenderer.CANVAS_TEXTURES ? flambe.platform.html.HtmlUtil.createCanvas(image) : image);
        },
        graphics: null,
        __class__: flambe.platform.html.CanvasRenderer
    }
    flambe.platform.html.CanvasTexture = function(image) {
        this._graphics = null;
        this.pattern = null;
        flambe.platform.BasicAsset.call(this);
        this.image = image;
    };
    $hxClasses["flambe.platform.html.CanvasTexture"] = flambe.platform.html.CanvasTexture;
    flambe.platform.html.CanvasTexture.__name__ = true;
    flambe.platform.html.CanvasTexture.__interfaces__ = [flambe.display.Texture];
    flambe.platform.html.CanvasTexture.__super__ = flambe.platform.BasicAsset;
    flambe.platform.html.CanvasTexture.prototype = $extend(flambe.platform.BasicAsset.prototype, {
        _graphics: null,
        onDisposed: function() {
            this.image = null;
            this.pattern = null;
            this._graphics = null;
        },
        getContext2d: function() {
            if (!js.Boot.__instanceof(this.image, HTMLCanvasElement)) this.image = flambe.platform.html.HtmlUtil.createCanvas(this.image);
            var canvas = this.image;
            return canvas.getContext("2d");
        },
        get_height: function() {
            return this.image.height;
        },
        get_width: function() {
            return this.image.width;
        },
        readPixels: function(x, y, width, height) {
            var data = this.getContext2d().getImageData(x, y, width, height).data;
            return haxe.io.Bytes.ofData(data);
        },
        pattern: null,
        image: null,
        height: null,
        width: null,
        __class__: flambe.platform.html.CanvasTexture
    });
    flambe.platform.html.HtmlAssetPackLoader = function(platform, manifest) {
        flambe.platform.BasicAssetPackLoader.call(this, platform, manifest);
    };
    $hxClasses["flambe.platform.html.HtmlAssetPackLoader"] = flambe.platform.html.HtmlAssetPackLoader;
    flambe.platform.html.HtmlAssetPackLoader.__name__ = true;
    flambe.platform.html.HtmlAssetPackLoader.detectImageFormats = function(fn) {
        var formats = [flambe.asset.AssetFormat.PNG, flambe.asset.AssetFormat.JPG, flambe.asset.AssetFormat.GIF];
        var formatTests = 2;
        var checkRemaining = function() {
            --formatTests;
            if (formatTests == 0) fn(formats);
        };
        var webp = js.Browser.document.createElement("img");
        webp.onload = webp.onerror = function(_) {
            if (webp.width == 1) formats.unshift(flambe.asset.AssetFormat.WEBP);
            checkRemaining();
        };
        webp.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
        var jxr = js.Browser.document.createElement("img");
        jxr.onload = jxr.onerror = function(_) {
            if (jxr.width == 1) formats.unshift(flambe.asset.AssetFormat.JXR);
            checkRemaining();
        };
        jxr.src = "data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA==";
    }
    flambe.platform.html.HtmlAssetPackLoader.detectAudioFormats = function() {
        var audio = js.Browser.document.createElement("audio");
        if (audio == null || $bind(audio, audio.canPlayType) == null) return [];
        var blacklist = new EReg("\\b(iPhone|iPod|iPad|Android)\\b", "");
        var userAgent = js.Browser.window.navigator.userAgent;
        if (!flambe.platform.html.WebAudioSound.get_supported() && blacklist.match(userAgent)) return [];
        var types = [{
            format: flambe.asset.AssetFormat.M4A,
            mimeType: "audio/mp4; codecs=mp4a"
        }, {
            format: flambe.asset.AssetFormat.MP3,
            mimeType: "audio/mpeg"
        }, {
            format: flambe.asset.AssetFormat.OPUS,
            mimeType: "audio/ogg; codecs=opus"
        }, {
            format: flambe.asset.AssetFormat.OGG,
            mimeType: "audio/ogg; codecs=vorbis"
        }, {
            format: flambe.asset.AssetFormat.WAV,
            mimeType: "audio/wav"
        }];
        var result = [];
        var _g = 0;
        while (_g < types.length) {
            var type = types[_g];
            ++_g;
            var canPlayType = "";
            try {
                canPlayType = audio.canPlayType(type.mimeType);
            } catch (_) {}
            if (canPlayType != "") result.push(type.format);
        }
        return result;
    }
    flambe.platform.html.HtmlAssetPackLoader.supportsBlob = function() {
        if (flambe.platform.html.HtmlAssetPackLoader._detectBlobSupport) {
            flambe.platform.html.HtmlAssetPackLoader._detectBlobSupport = false;
            var xhr = new XMLHttpRequest();
            xhr.open("GET", ".", true);
            xhr.responseType = "blob";
            if (xhr.responseType != "blob") return false;
            flambe.platform.html.HtmlAssetPackLoader._URL = flambe.platform.html.HtmlUtil.loadExtension("URL").value;
        }
        return flambe.platform.html.HtmlAssetPackLoader._URL != null && flambe.platform.html.HtmlAssetPackLoader._URL.createObjectURL != null;
    }
    flambe.platform.html.HtmlAssetPackLoader.__super__ = flambe.platform.BasicAssetPackLoader;
    flambe.platform.html.HtmlAssetPackLoader.prototype = $extend(flambe.platform.BasicAssetPackLoader.prototype, {
        download: function(url, entry, responseType, onLoad) {
            var _g = this;
            var xhr = new XMLHttpRequest();
            var lastActivity = 0.0;
            var start = function() {
                lastActivity = Date.now();
                xhr.open("GET", url, true);
                xhr.responseType = responseType;
                if (xhr.responseType == "") xhr.responseType = "arraybuffer";
                xhr.send();
            };
            var interval = 0;
            if (typeof(xhr.onprogress) != "undefined") {
                var attempts = 4;
                xhr.onprogress = function(event) {
                    lastActivity = Date.now();
                    _g.handleProgress(entry, event.loaded);
                };
                interval = js.Browser.window.setInterval(function() {
                    if (xhr.readyState >= 1 && Date.now() - lastActivity > 5000) {
                        xhr.abort();
                        --attempts;
                        if (attempts > 0) start();
                        else {
                            js.Browser.window.clearInterval(interval);
                            _g.handleError(entry, "Request timed out");
                        }
                    }
                }, 1000);
            }
            xhr.onload = function(_) {
                js.Browser.window.clearInterval(interval);
                var response = xhr.response;
                if (response == null) response = xhr.responseText;
                else if (responseType == "blob" && xhr.responseType == "arraybuffer") response = new Blob([xhr.response]);
                onLoad(response);
            };
            xhr.onerror = function(_) {
                js.Browser.window.clearInterval(interval);
                _g.handleError(entry, "Failed to load asset: error #" + xhr.status);
            };
            start();
            return xhr;
        },
        getAssetFormats: function(fn) {
            var _g = this;
            if (flambe.platform.html.HtmlAssetPackLoader._supportedFormats == null) {
                flambe.platform.html.HtmlAssetPackLoader._supportedFormats = new flambe.util.Promise();
                flambe.platform.html.HtmlAssetPackLoader.detectImageFormats(function(imageFormats) {
                    flambe.platform.html.HtmlAssetPackLoader._supportedFormats.set_result(_g._platform.getRenderer().getCompressedTextureFormats().concat(imageFormats).concat(flambe.platform.html.HtmlAssetPackLoader.detectAudioFormats()).concat([flambe.asset.AssetFormat.Data]));
                });
            }
            flambe.platform.html.HtmlAssetPackLoader._supportedFormats.get(fn);
        },
        loadEntry: function(url, entry) {
            var _g = this;
            switch ((entry.format)[1]) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    var image = js.Browser.document.createElement("img");
                    var events = new flambe.platform.EventGroup();
                    events.addDisposingListener(image, "load", function(_) {
                        if (flambe.platform.html.HtmlAssetPackLoader.supportsBlob()) flambe.platform.html.HtmlAssetPackLoader._URL.revokeObjectURL(image.src);
                        var texture = _g._platform.getRenderer().createTexture(image);
                        if (texture != null) _g.handleLoad(entry, texture);
                        else _g.handleTextureError(entry);
                    });
                    events.addDisposingListener(image, "error", function(_) {
                        _g.handleError(entry, "Failed to load image");
                    });
                    if (flambe.platform.html.HtmlAssetPackLoader.supportsBlob()) this.download(url, entry, "blob", function(blob) {
                        image.src = flambe.platform.html.HtmlAssetPackLoader._URL.createObjectURL(blob);
                    });
                    else image.src = url;
                    break;
                case 5:
                case 6:
                case 7:
                    this.download(url, entry, "arraybuffer", function(buffer) {
                        var texture = _g._platform.getRenderer().createCompressedTexture(entry.format, null);
                        if (texture != null) _g.handleLoad(entry, texture);
                        else _g.handleTextureError(entry);
                    });
                    break;
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                    if (flambe.platform.html.WebAudioSound.get_supported()) this.download(url, entry, "arraybuffer", function(buffer) {
                        flambe.platform.html.WebAudioSound.ctx.decodeAudioData(buffer, function(decoded) {
                            _g.handleLoad(entry, new flambe.platform.html.WebAudioSound(decoded));
                        }, function() {
                            _g.handleLoad(entry, flambe.platform.DummySound.getInstance());
                        });
                    });
                    else {
                        var audio = js.Browser.document.createElement("audio");
                        audio.preload = "auto";
                        var ref = ++flambe.platform.html.HtmlAssetPackLoader._mediaRefCount;
                        if (flambe.platform.html.HtmlAssetPackLoader._mediaElements == null) flambe.platform.html.HtmlAssetPackLoader._mediaElements = new haxe.ds.IntMap();
                        flambe.platform.html.HtmlAssetPackLoader._mediaElements.set(ref, audio);
                        var events = new flambe.platform.EventGroup();
                        events.addDisposingListener(audio, "canplaythrough", function(_) {
                            flambe.platform.html.HtmlAssetPackLoader._mediaElements.remove(ref);
                            _g.handleLoad(entry, new flambe.platform.html.HtmlSound(audio));
                        });
                        events.addDisposingListener(audio, "error", function(_) {
                            flambe.platform.html.HtmlAssetPackLoader._mediaElements.remove(ref);
                            var code = audio.error.code;
                            if (code == 3 || code == 4) _g.handleLoad(entry, flambe.platform.DummySound.getInstance());
                            else _g.handleError(entry, "Failed to load audio: " + audio.error.code);
                        });
                        events.addListener(audio, "progress", function(_) {
                            if (audio.buffered.length > 0 && audio.duration > 0) {
                                var progress = audio.buffered.end(0) / audio.duration;
                                _g.handleProgress(entry, progress * entry.bytes | 0);
                            }
                        });
                        audio.src = url;
                        audio.load();
                    }
                    break;
                case 13:
                    this.download(url, entry, "text", function(text) {
                        _g.handleLoad(entry, new flambe.platform.BasicFile(text));
                    });
                    break;
            }
        },
        __class__: flambe.platform.html.HtmlAssetPackLoader
    });
    flambe.platform.html.HtmlMouse = function(pointer, canvas) {
        flambe.platform.BasicMouse.call(this, pointer);
        this._canvas = canvas;
    };
    $hxClasses["flambe.platform.html.HtmlMouse"] = flambe.platform.html.HtmlMouse;
    flambe.platform.html.HtmlMouse.__name__ = true;
    flambe.platform.html.HtmlMouse.__super__ = flambe.platform.BasicMouse;
    flambe.platform.html.HtmlMouse.prototype = $extend(flambe.platform.BasicMouse.prototype, {
        _canvas: null,
        set_cursor: function(cursor) {
            var name;
            switch ((cursor)[1]) {
                case 0:
                    name = "";
                    break;
                case 1:
                    name = "pointer";
                    break;
                case 2:
                    name = "none";
                    break;
            }
            this._canvas.style.cursor = name;
            return flambe.platform.BasicMouse.prototype.set_cursor.call(this, cursor);
        },
        __class__: flambe.platform.html.HtmlMouse
    });
    flambe.platform.html.HtmlSound = function(audioElement) {
        flambe.platform.BasicAsset.call(this);
        this.audioElement = audioElement;
    };
    $hxClasses["flambe.platform.html.HtmlSound"] = flambe.platform.html.HtmlSound;
    flambe.platform.html.HtmlSound.__name__ = true;
    flambe.platform.html.HtmlSound.__interfaces__ = [flambe.sound.Sound];
    flambe.platform.html.HtmlSound.__super__ = flambe.platform.BasicAsset;
    flambe.platform.html.HtmlSound.prototype = $extend(flambe.platform.BasicAsset.prototype, {
        onDisposed: function() {
            this.audioElement = null;
        },
        audioElement: null,
        __class__: flambe.platform.html.HtmlSound
    });
    flambe.subsystem.StageSystem = function() {}
    $hxClasses["flambe.subsystem.StageSystem"] = flambe.subsystem.StageSystem;
    flambe.subsystem.StageSystem.__name__ = true;
    flambe.subsystem.StageSystem.prototype = {
        lockOrientation: null,
        resize: null,
        height: null,
        width: null,
        __class__: flambe.subsystem.StageSystem
    }
    flambe.platform.html.HtmlStage = function(canvas) {
        var _g = this;
        this._canvas = canvas;
        this.resize = new flambe.util.Signal0();
        this.scaleFactor = flambe.platform.html.HtmlStage.computeScaleFactor();
        if (this.scaleFactor != 1) {
            flambe.platform.html.HtmlUtil.setVendorStyle(this._canvas, "transform-origin", "top left");
            flambe.platform.html.HtmlUtil.setVendorStyle(this._canvas, "transform", "scale(" + 1 / this.scaleFactor + ")");
        }
        if (flambe.platform.html.HtmlUtil.SHOULD_HIDE_MOBILE_BROWSER) {
            js.Browser.window.addEventListener("orientationchange", function(_) {
                flambe.platform.html.HtmlUtil.callLater($bind(_g, _g.hideMobileBrowser), 200);
            }, false);
            this.hideMobileBrowser();
        }
        js.Browser.window.addEventListener("resize", $bind(this, this.onWindowResize), false);
        this.onWindowResize(null);
        this.orientation = new flambe.util.Value(null);
        if (js.Browser.window.orientation != null) {
            js.Browser.window.addEventListener("orientationchange", $bind(this, this.onOrientationChange), false);
            this.onOrientationChange(null);
        }
        this.fullscreen = new flambe.util.Value(false);
        flambe.platform.html.HtmlUtil.addVendorListener(js.Browser.document, "fullscreenchange", function(_) {
            _g.updateFullscreen();
        }, false);
        this.updateFullscreen();
    };
    $hxClasses["flambe.platform.html.HtmlStage"] = flambe.platform.html.HtmlStage;
    flambe.platform.html.HtmlStage.__name__ = true;
    flambe.platform.html.HtmlStage.__interfaces__ = [flambe.subsystem.StageSystem];
    flambe.platform.html.HtmlStage.computeScaleFactor = function() {
        var devicePixelRatio = js.Browser.window.devicePixelRatio;
        if (devicePixelRatio == null) devicePixelRatio = 1;
        var canvas = js.Browser.document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        var backingStorePixelRatio = flambe.platform.html.HtmlUtil.loadExtension("backingStorePixelRatio", ctx).value;
        if (backingStorePixelRatio == null) backingStorePixelRatio = 1;
        var scale = devicePixelRatio / backingStorePixelRatio;
        var screenWidth = js.Browser.window.screen.width;
        var screenHeight = js.Browser.window.screen.height;
        if (scale * screenWidth > 1136 || scale * screenHeight > 1136) return 1;
        return scale;
    }
    flambe.platform.html.HtmlStage.prototype = {
        _canvas: null,
        updateFullscreen: function() {
            var state = flambe.platform.html.HtmlUtil.loadFirstExtension(["fullscreen", "fullScreen", "isFullScreen"], js.Browser.document).value;
            this.fullscreen.set__(state == true);
        },
        onOrientationChange: function(_) {
            var value = flambe.platform.html.HtmlUtil.orientation(js.Browser.window.orientation);
            this.orientation.set__(value);
        },
        hideMobileBrowser: function() {
            var _g = this;
            var mobileAddressBar = 100;
            var htmlStyle = js.Browser.document.documentElement.style;
            htmlStyle.height = js.Browser.window.innerHeight + mobileAddressBar + "px";
            htmlStyle.width = js.Browser.window.innerWidth + "px";
            htmlStyle.overflow = "visible";
            flambe.platform.html.HtmlUtil.callLater(function() {
                flambe.platform.html.HtmlUtil.hideMobileBrowser();
                flambe.platform.html.HtmlUtil.callLater(function() {
                    htmlStyle.height = js.Browser.window.innerHeight + "px";
                    _g.onWindowResize(null);
                }, 100);
            });
        },
        resizeCanvas: function(width, height) {
            var scaledWidth = this.scaleFactor * width;
            var scaledHeight = this.scaleFactor * height;
            if (this._canvas.width == scaledWidth && this._canvas.height == scaledHeight) return false;
            this._canvas.width = scaledWidth | 0;
            this._canvas.height = scaledHeight | 0;
            this.resize.emit();
            return true;
        },
        onWindowResize: function(_) {
            var container = this._canvas.parentElement;
            var rect = container.getBoundingClientRect();
            this.resizeCanvas(rect.width, rect.height);
        },
        lockOrientation: function(orient) {},
        get_height: function() {
            return this._canvas.height;
        },
        get_width: function() {
            return this._canvas.width;
        },
        scaleFactor: null,
        resize: null,
        fullscreen: null,
        orientation: null,
        height: null,
        width: null,
        __class__: flambe.platform.html.HtmlStage
    }
    flambe.platform.html.HtmlUtil = function() {}
    $hxClasses["flambe.platform.html.HtmlUtil"] = flambe.platform.html.HtmlUtil;
    flambe.platform.html.HtmlUtil.__name__ = true;
    flambe.platform.html.HtmlUtil.callLater = function(func, delay) {
        if (delay == null) delay = 0;
        js.Browser.window.setTimeout(func, delay);
    }
    flambe.platform.html.HtmlUtil.hideMobileBrowser = function() {
        js.Browser.window.scrollTo(1, 0);
    }
    flambe.platform.html.HtmlUtil.loadExtension = function(name, obj) {
        if (obj == null) obj = js.Browser.window;
        var extension = Reflect.field(obj, name);
        if (extension != null) return {
            prefix: "",
            field: name,
            value: extension
        };
        var capitalized = name.charAt(0).toUpperCase() + HxOverrides.substr(name, 1, null);
        var _g = 0,
            _g1 = flambe.platform.html.HtmlUtil.VENDOR_PREFIXES;
        while (_g < _g1.length) {
            var prefix = _g1[_g];
            ++_g;
            var field = prefix + capitalized;
            var extension1 = Reflect.field(obj, field);
            if (extension1 != null) return {
                prefix: prefix,
                field: field,
                value: extension1
            };
        }
        return {
            prefix: null,
            field: null,
            value: null
        };
    }
    flambe.platform.html.HtmlUtil.loadFirstExtension = function(names, obj) {
        var _g = 0;
        while (_g < names.length) {
            var name = names[_g];
            ++_g;
            var extension = flambe.platform.html.HtmlUtil.loadExtension(name, obj);
            if (extension.field != null) return extension;
        }
        return {
            prefix: null,
            field: null,
            value: null
        };
    }
    flambe.platform.html.HtmlUtil.polyfill = function(name, obj) {
        if (obj == null) obj = js.Browser.window;
        var value = flambe.platform.html.HtmlUtil.loadExtension(name, obj).value;
        if (value == null) return false;
        obj[name] = value;
        return true;
    }
    flambe.platform.html.HtmlUtil.setVendorStyle = function(element, name, value) {
        var style = element.style;
        var _g = 0,
            _g1 = flambe.platform.html.HtmlUtil.VENDOR_PREFIXES;
        while (_g < _g1.length) {
            var prefix = _g1[_g];
            ++_g;
            style.setProperty("-" + prefix + "-" + name, value);
        }
        style.setProperty(name, value);
    }
    flambe.platform.html.HtmlUtil.addVendorListener = function(dispatcher, type, listener, useCapture) {
        var _g = 0,
            _g1 = flambe.platform.html.HtmlUtil.VENDOR_PREFIXES;
        while (_g < _g1.length) {
            var prefix = _g1[_g];
            ++_g;
            dispatcher.addEventListener(prefix + type, listener, useCapture);
        }
        dispatcher.addEventListener(type, listener, useCapture);
    }
    flambe.platform.html.HtmlUtil.orientation = function(angle) {
        switch (angle) {
            case -90:
            case 90:
                return flambe.display.Orientation.Landscape;
            default:
                return flambe.display.Orientation.Portrait;
        }
    }
    flambe.platform.html.HtmlUtil.createEmptyCanvas = function(width, height) {
        var canvas = js.Browser.document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        return canvas;
    }
    flambe.platform.html.HtmlUtil.createCanvas = function(source) {
        var canvas = flambe.platform.html.HtmlUtil.createEmptyCanvas(source.width, source.height);
        var ctx = canvas.getContext("2d");
        ctx.save();
        ctx.globalCompositeOperation = "copy";
        ctx.drawImage(source, 0, 0);
        ctx.restore();
        return canvas;
    }
    flambe.platform.html.HtmlUtil.fixAndroidMath = function() {
        if (js.Browser.navigator.userAgent.indexOf("Linux; U; Android 4") >= 0) {
            var sin = Math.sin,
                cos = Math.cos;
            Math.sin = function(x) {
                return x == 0 ? 0 : sin(x);
            };
            Math.cos = function(x) {
                return x == 0 ? 1 : cos(x);
            };
        }
    }
    flambe.platform.html.WebAudioSound = function(buffer) {
        flambe.platform.BasicAsset.call(this);
        this.buffer = buffer;
    };
    $hxClasses["flambe.platform.html.WebAudioSound"] = flambe.platform.html.WebAudioSound;
    flambe.platform.html.WebAudioSound.__name__ = true;
    flambe.platform.html.WebAudioSound.__interfaces__ = [flambe.sound.Sound];
    flambe.platform.html.WebAudioSound.get_supported = function() {
        if (flambe.platform.html.WebAudioSound._detectSupport) {
            flambe.platform.html.WebAudioSound._detectSupport = false;
            var AudioContext = flambe.platform.html.HtmlUtil.loadExtension("AudioContext").value;
            if (AudioContext != null) {
                flambe.platform.html.WebAudioSound.ctx = new AudioContext();
                flambe.platform.html.WebAudioSound.gain = flambe.platform.html.WebAudioSound.createGain();
                flambe.platform.html.WebAudioSound.gain.connect(flambe.platform.html.WebAudioSound.ctx.destination);
                flambe.System.volume.watch(function(volume, _) {
                    flambe.platform.html.WebAudioSound.gain.gain.value = volume;
                });
            }
        }
        return flambe.platform.html.WebAudioSound.ctx != null;
    }
    flambe.platform.html.WebAudioSound.createGain = function() {
        return flambe.platform.html.WebAudioSound.ctx.createGain != null ? flambe.platform.html.WebAudioSound.ctx.createGain() : flambe.platform.html.WebAudioSound.ctx.createGainNode();
    }
    flambe.platform.html.WebAudioSound.__super__ = flambe.platform.BasicAsset;
    flambe.platform.html.WebAudioSound.prototype = $extend(flambe.platform.BasicAsset.prototype, {
        onDisposed: function() {
            this.buffer = null;
        },
        buffer: null,
        __class__: flambe.platform.html.WebAudioSound
    });
    flambe.platform.html.WebGLBatcher = function() {
        this._backbufferHeight = 0;
        this._backbufferWidth = 0;
        this._dataOffset = 0;
        this._maxQuads = 0;
        this._quads = 0;
        this._pendingSetScissor = false;
        this._currentRenderTarget = null;
        this._currentTexture = null;
        this._currentShader = null;
        this._currentBlendMode = null;
        this._lastScissor = null;
        this._lastTexture = null;
        this._lastShader = null;
        this._lastRenderTarget = null;
        this._lastBlendMode = null;
    };
    $hxClasses["flambe.platform.html.WebGLBatcher"] = flambe.platform.html.WebGLBatcher;
    flambe.platform.html.WebGLBatcher.__name__ = true;
    flambe.platform.html.WebGLBatcher.prototype = {
        _backbufferHeight: null,
        _backbufferWidth: null,
        _dataOffset: null,
        _maxQuads: null,
        _quads: null,
        _fillRectShader: null,
        _drawPatternShader: null,
        _drawImageShader: null,
        _pendingSetScissor: null,
        _currentRenderTarget: null,
        _currentTexture: null,
        _currentShader: null,
        _currentBlendMode: null,
        _lastScissor: null,
        _lastTexture: null,
        _lastShader: null,
        _lastRenderTarget: null,
        _lastBlendMode: null,
        _gl: null,
        bindRenderTarget: function(texture) {
            if (texture != null) {
                this._gl.bindFramebuffer(36160, texture.framebuffer);
                this._gl.viewport(0, 0, texture._width, texture._height);
            } else {
                this._gl.bindFramebuffer(36160, null);
                this._gl.viewport(0, 0, this._backbufferWidth, this._backbufferHeight);
            }
            this._currentRenderTarget = texture;
            this._lastRenderTarget = texture;
        },
        resize: function(maxQuads) {
            this.flush();
            if (maxQuads > 1024) return;
            this._maxQuads = maxQuads;
            this.data = new Float32Array(maxQuads * 4 * 6);
            this._gl.bufferData(34962, this.data.length * 4, 35040);
            var indices = new Uint16Array(6 * maxQuads);
            var _g = 0;
            while (_g < maxQuads) {
                var ii = _g++;
                indices[ii * 6] = ii * 4;
                indices[ii * 6 + 1] = ii * 4 + 1;
                indices[ii * 6 + 2] = ii * 4 + 2;
                indices[ii * 6 + 3] = ii * 4 + 2;
                indices[ii * 6 + 4] = ii * 4 + 3;
                indices[ii * 6 + 5] = ii * 4;
            }
            this._gl.bufferData(34963, indices, 35044);
        },
        flush: function() {
            if (this._quads < 1) return;
            if (this._lastRenderTarget != this._currentRenderTarget) this.bindRenderTarget(this._lastRenderTarget);
            if (this._lastBlendMode != this._currentBlendMode) {
                var _g = this;
                switch ((_g._lastBlendMode)[1]) {
                    case 0:
                        this._gl.blendFunc(1, 771);
                        break;
                    case 1:
                        this._gl.blendFunc(1, 1);
                        break;
                    case 2:
                        this._gl.blendFunc(0, 770);
                        break;
                    case 3:
                        this._gl.blendFunc(1, 0);
                        break;
                }
                this._currentBlendMode = this._lastBlendMode;
            }
            if (this._pendingSetScissor) {
                if (this._lastScissor != null) {
                    this._gl.enable(3089);
                    this._gl.scissor(this._lastScissor.x | 0, this._lastScissor.y | 0, this._lastScissor.width | 0, this._lastScissor.height | 0);
                } else this._gl.disable(3089);
                this._pendingSetScissor = false;
            }
            if (this._lastTexture != this._currentTexture) {
                this._gl.bindTexture(3553, this._lastTexture.nativeTexture);
                this._currentTexture = this._lastTexture;
            }
            if (this._lastShader != this._currentShader) {
                this._lastShader.useProgram();
                this._lastShader.prepare();
                this._currentShader = this._lastShader;
            }
            if (this._lastShader == this._drawPatternShader) this._drawPatternShader.setMaxUV(this._lastTexture.maxU, this._lastTexture.maxV);
            this._gl.bufferData(34962, this.data.subarray(0, this._dataOffset), 35040);
            this._gl.drawElements(4, 6 * this._quads, 5123, 0);
            this._quads = 0;
            this._dataOffset = 0;
        },
        prepareQuad: function(elementsPerVertex, renderTarget, blendMode, scissor, shader) {
            if (renderTarget != this._lastRenderTarget) {
                this.flush();
                this._lastRenderTarget = renderTarget;
            }
            if (blendMode != this._lastBlendMode) {
                this.flush();
                this._lastBlendMode = blendMode;
            }
            if (shader != this._lastShader) {
                this.flush();
                this._lastShader = shader;
            }
            if (scissor != null || this._lastScissor != null) {
                if (scissor == null || this._lastScissor == null || !this._lastScissor.equals(scissor)) {
                    this.flush();
                    this._lastScissor = scissor != null ? scissor.clone(this._lastScissor) : null;
                    this._pendingSetScissor = true;
                }
            }
            if (this._quads >= this._maxQuads) this.resize(2 * this._maxQuads);
            ++this._quads;
            var offset = this._dataOffset;
            this._dataOffset += 4 * elementsPerVertex;
            return offset;
        },
        prepareFillRect: function(renderTarget, blendMode, scissor) {
            return this.prepareQuad(6, renderTarget, blendMode, scissor, this._fillRectShader);
        },
        prepareDrawImage: function(renderTarget, blendMode, scissor, texture) {
            if (texture != this._lastTexture) {
                this.flush();
                this._lastTexture = texture;
            }
            return this.prepareQuad(5, renderTarget, blendMode, scissor, this._drawImageShader);
        },
        deleteFramebuffer: function(texture) {
            if (texture == this._lastRenderTarget) {
                this.flush();
                this._lastRenderTarget = null;
                this._currentRenderTarget = null;
            }
            this._gl.deleteFramebuffer(texture.framebuffer);
        },
        deleteTexture: function(texture) {
            if (texture == this._lastTexture) {
                this.flush();
                this._lastTexture = null;
                this._currentTexture = null;
            }
            this._gl.deleteTexture(texture.nativeTexture);
        },
        bindTexture: function(texture) {
            this.flush();
            this._lastTexture = null;
            this._currentTexture = null;
            this._gl.bindTexture(3553, texture);
        },
        didRender: function() {
            this.flush();
        },
        willRender: function() {},
        data: null,
        __class__: flambe.platform.html.WebGLBatcher
    }
    flambe.platform.html.WebGLGraphics = function() {
        this._stateList = null;
        this._inverseProjection = null;
    };
    $hxClasses["flambe.platform.html.WebGLGraphics"] = flambe.platform.html.WebGLGraphics;
    flambe.platform.html.WebGLGraphics.__name__ = true;
    flambe.platform.html.WebGLGraphics.__interfaces__ = [flambe.platform.InternalGraphics];
    flambe.platform.html.WebGLGraphics.prototype = {
        _stateList: null,
        _inverseProjection: null,
        _renderTarget: null,
        _batcher: null,
        transformQuad: function(x, y, width, height) {
            var x2 = x + width;
            var y2 = y + height;
            var pos = flambe.platform.html.WebGLGraphics._scratchQuadArray;
            pos[0] = x;
            pos[1] = y;
            pos[2] = x2;
            pos[3] = y;
            pos[4] = x2;
            pos[5] = y2;
            pos[6] = x;
            pos[7] = y2;
            this._stateList.matrix.transformArray(pos, 8, pos);
            return pos;
        },
        didRender: function() {
            this._batcher.didRender();
        },
        willRender: function() {
            this._batcher.willRender();
        },
        applyScissor: function(x, y, width, height) {
            var state = this._stateList;
            var rect = flambe.platform.html.WebGLGraphics._scratchQuadArray;
            rect[0] = x;
            rect[1] = y;
            rect[2] = x + width;
            rect[3] = y + height;
            state.matrix.transformArray(rect, 4, rect);
            this._inverseProjection.transformArray(rect, 4, rect);
            x = rect[0];
            y = rect[1];
            width = rect[2] - x;
            height = rect[3] - y;
            if (width < 0) {
                x += width;
                width = -width;
            }
            if (height < 0) {
                y += height;
                height = -height;
            }
            state.applyScissor(x, y, width, height);
        },
        setBlendMode: function(blendMode) {
            this._stateList.blendMode = blendMode;
        },
        multiplyAlpha: function(factor) {
            this._stateList.alpha *= factor;
        },
        fillRect: function(color, x, y, width, height) {
            var state = this._stateList;
            var pos = this.transformQuad(x, y, width, height);
            var r = (color & 16711680) / 16711680;
            var g = (color & 65280) / 65280;
            var b = (color & 255) / 255;
            var a = state.alpha;
            var offset = this._batcher.prepareFillRect(this._renderTarget, state.blendMode, state.scissor);
            var data = this._batcher.data;
            data[offset] = pos[0];
            data[++offset] = pos[1];
            data[++offset] = r;
            data[++offset] = g;
            data[++offset] = b;
            data[++offset] = a;
            data[++offset] = pos[2];
            data[++offset] = pos[3];
            data[++offset] = r;
            data[++offset] = g;
            data[++offset] = b;
            data[++offset] = a;
            data[++offset] = pos[4];
            data[++offset] = pos[5];
            data[++offset] = r;
            data[++offset] = g;
            data[++offset] = b;
            data[++offset] = a;
            data[++offset] = pos[6];
            data[++offset] = pos[7];
            data[++offset] = r;
            data[++offset] = g;
            data[++offset] = b;
            data[++offset] = a;
        },
        drawSubImage: function(texture, destX, destY, sourceX, sourceY, sourceW, sourceH) {
            var state = this._stateList;
            var texture1 = texture;
            var pos = this.transformQuad(destX, destY, sourceW, sourceH);
            var w = texture1._width;
            var h = texture1._height;
            var u1 = texture1.maxU * sourceX / w;
            var v1 = texture1.maxV * sourceY / h;
            var u2 = texture1.maxU * (sourceX + sourceW) / w;
            var v2 = texture1.maxV * (sourceY + sourceH) / h;
            var alpha = state.alpha;
            var offset = this._batcher.prepareDrawImage(this._renderTarget, state.blendMode, state.scissor, texture1);
            var data = this._batcher.data;
            data[offset] = pos[0];
            data[++offset] = pos[1];
            data[++offset] = u1;
            data[++offset] = v1;
            data[++offset] = alpha;
            data[++offset] = pos[2];
            data[++offset] = pos[3];
            data[++offset] = u2;
            data[++offset] = v1;
            data[++offset] = alpha;
            data[++offset] = pos[4];
            data[++offset] = pos[5];
            data[++offset] = u2;
            data[++offset] = v2;
            data[++offset] = alpha;
            data[++offset] = pos[6];
            data[++offset] = pos[7];
            data[++offset] = u1;
            data[++offset] = v2;
            data[++offset] = alpha;
        },
        drawImage: function(texture, x, y) {
            this.drawSubImage(texture, x, y, 0, 0, texture.get_width(), texture.get_height());
        },
        restore: function() {
            this._stateList = this._stateList.prev;
        },
        transform: function(m00, m10, m01, m11, m02, m12) {
            var state = this._stateList;
            flambe.platform.html.WebGLGraphics._scratchMatrix.set(m00, m10, m01, m11, m02, m12);
            flambe.math.Matrix.multiply(state.matrix, flambe.platform.html.WebGLGraphics._scratchMatrix, state.matrix);
        },
        save: function() {
            var current = this._stateList;
            var state = this._stateList.next;
            if (state == null) {
                state = new flambe.platform.html._WebGLGraphics.DrawingState();
                state.prev = current;
                current.next = state;
            }
            current.matrix.clone(state.matrix);
            state.alpha = current.alpha;
            state.blendMode = current.blendMode;
            state.scissor = current.scissor != null ? current.scissor.clone(state.scissor) : null;
            this._stateList = state;
        },
        __class__: flambe.platform.html.WebGLGraphics
    }
    flambe.platform.html._WebGLGraphics = {}
    flambe.platform.html._WebGLGraphics.DrawingState = function() {
        this.next = null;
        this.prev = null;
        this.scissor = null;
        this.matrix = new flambe.math.Matrix();
        this.alpha = 1;
        this.blendMode = flambe.display.BlendMode.Normal;
    };
    $hxClasses["flambe.platform.html._WebGLGraphics.DrawingState"] = flambe.platform.html._WebGLGraphics.DrawingState;
    flambe.platform.html._WebGLGraphics.DrawingState.__name__ = true;
    flambe.platform.html._WebGLGraphics.DrawingState.prototype = {
        applyScissor: function(x, y, width, height) {
            if (this.scissor != null) {
                var x1 = flambe.math.FMath.max(this.scissor.x, x);
                var y1 = flambe.math.FMath.max(this.scissor.y, y);
                var x2 = flambe.math.FMath.min(this.scissor.x + this.scissor.width, x + width);
                var y2 = flambe.math.FMath.min(this.scissor.y + this.scissor.height, y + height);
                x = x1;
                y = y1;
                width = x2 - x1;
                height = y2 - y1;
            } else this.scissor = new flambe.math.Rectangle();
            this.scissor.set(Math.round(x), Math.round(y), Math.round(width), Math.round(height));
        },
        next: null,
        prev: null,
        scissor: null,
        blendMode: null,
        alpha: null,
        matrix: null,
        __class__: flambe.platform.html._WebGLGraphics.DrawingState
    }
    flambe.platform.html.WebGLRenderer = function() {}
    $hxClasses["flambe.platform.html.WebGLRenderer"] = flambe.platform.html.WebGLRenderer;
    flambe.platform.html.WebGLRenderer.__name__ = true;
    flambe.platform.html.WebGLRenderer.__interfaces__ = [flambe.platform.Renderer];
    flambe.platform.html.WebGLRenderer.prototype = {
        didRender: function() {
            this.graphics.didRender();
        },
        willRender: function() {
            this.graphics.willRender();
        },
        createCompressedTexture: function(format, data) {
            if (this.gl.isContextLost()) return null;
            return null;
        },
        getCompressedTextureFormats: function() {
            return [];
        },
        createTexture: function(image) {
            if (this.gl.isContextLost()) return null;
            var texture = new flambe.platform.html.WebGLTexture(this, image.width, image.height);
            texture.uploadImageData(image);
            return texture;
        },
        batcher: null,
        gl: null,
        graphics: null,
        __class__: flambe.platform.html.WebGLRenderer
    }
    flambe.platform.html.WebGLTexture = function(renderer, width, height) {
        this._graphics = null;
        this.framebuffer = null;
        flambe.platform.BasicAsset.call(this);
        this._renderer = renderer;
        this._width = width;
        this._height = height;
        this._widthPow2 = flambe.platform.html.WebGLTexture.nextPowerOfTwo(width);
        this._heightPow2 = flambe.platform.html.WebGLTexture.nextPowerOfTwo(height);
        this.maxU = width / this._widthPow2;
        this.maxV = height / this._heightPow2;
        var gl = renderer.gl;
        this.nativeTexture = gl.createTexture();
        renderer.batcher.bindTexture(this.nativeTexture);
        gl.texParameteri(3553, 10242, 33071);
        gl.texParameteri(3553, 10243, 33071);
        gl.texParameteri(3553, 10240, 9729);
        gl.texParameteri(3553, 10241, 9728);
    };
    $hxClasses["flambe.platform.html.WebGLTexture"] = flambe.platform.html.WebGLTexture;
    flambe.platform.html.WebGLTexture.__name__ = true;
    flambe.platform.html.WebGLTexture.__interfaces__ = [flambe.display.Texture];
    flambe.platform.html.WebGLTexture.nextPowerOfTwo = function(n) {
        var p = 1;
        while (p < n) p <<= 1;
        return p;
    }
    flambe.platform.html.WebGLTexture.drawBorder = function(canvas, width, height) {
        var ctx = canvas.getContext("2d");
        ctx.drawImage(canvas, width - 1, 0, 1, height, width, 0, 1, height);
        ctx.drawImage(canvas, 0, height - 1, width, 1, 0, height, width, 1);
    }
    flambe.platform.html.WebGLTexture.__super__ = flambe.platform.BasicAsset;
    flambe.platform.html.WebGLTexture.prototype = $extend(flambe.platform.BasicAsset.prototype, {
        _graphics: null,
        _heightPow2: null,
        _widthPow2: null,
        _height: null,
        _width: null,
        _renderer: null,
        get_height: function() {
            return this._height;
        },
        get_width: function() {
            return this._width;
        },
        onDisposed: function() {
            var batcher = this._renderer.batcher;
            batcher.deleteTexture(this);
            if (this.framebuffer != null) batcher.deleteFramebuffer(this);
            this.nativeTexture = null;
            this.framebuffer = null;
            this._graphics = null;
        },
        uploadImageData: function(image) {
            if (this._widthPow2 != image.width || this._heightPow2 != image.height) {
                var resized = flambe.platform.html.HtmlUtil.createEmptyCanvas(this._widthPow2, this._heightPow2);
                resized.getContext("2d").drawImage(image, 0, 0);
                flambe.platform.html.WebGLTexture.drawBorder(resized, image.width, image.height);
                image = resized;
            }
            this._renderer.batcher.bindTexture(this.nativeTexture);
            var gl = this._renderer.gl;
            gl.texImage2D(3553, 0, 6408, 6408, 5121, image);
        },
        maxV: null,
        maxU: null,
        framebuffer: null,
        nativeTexture: null,
        height: null,
        width: null,
        __class__: flambe.platform.html.WebGLTexture
    });
    flambe.platform.shader = {}
    flambe.platform.shader.ShaderGL = function() {}
    $hxClasses["flambe.platform.shader.ShaderGL"] = flambe.platform.shader.ShaderGL;
    flambe.platform.shader.ShaderGL.__name__ = true;
    flambe.platform.shader.ShaderGL.prototype = {
        _program: null,
        _gl: null,
        prepare: function() {
            null;
        },
        useProgram: function() {
            this._gl.useProgram(this._program);
        },
        __class__: flambe.platform.shader.ShaderGL
    }
    flambe.platform.shader.DrawImageGL = function() {}
    $hxClasses["flambe.platform.shader.DrawImageGL"] = flambe.platform.shader.DrawImageGL;
    flambe.platform.shader.DrawImageGL.__name__ = true;
    flambe.platform.shader.DrawImageGL.__super__ = flambe.platform.shader.ShaderGL;
    flambe.platform.shader.DrawImageGL.prototype = $extend(flambe.platform.shader.ShaderGL.prototype, {
        a_alpha: null,
        a_uv: null,
        a_pos: null,
        prepare: function() {
            this._gl.enableVertexAttribArray(this.a_pos);
            this._gl.enableVertexAttribArray(this.a_uv);
            this._gl.enableVertexAttribArray(this.a_alpha);
            var bytesPerFloat = 4;
            var stride = 5 * bytesPerFloat;
            this._gl.vertexAttribPointer(this.a_pos, 2, 5126, false, stride, 0 * bytesPerFloat);
            this._gl.vertexAttribPointer(this.a_uv, 2, 5126, false, stride, 2 * bytesPerFloat);
            this._gl.vertexAttribPointer(this.a_alpha, 1, 5126, false, stride, 4 * bytesPerFloat);
        },
        __class__: flambe.platform.shader.DrawImageGL
    });
    flambe.platform.shader.DrawPatternGL = function() {}
    $hxClasses["flambe.platform.shader.DrawPatternGL"] = flambe.platform.shader.DrawPatternGL;
    flambe.platform.shader.DrawPatternGL.__name__ = true;
    flambe.platform.shader.DrawPatternGL.__super__ = flambe.platform.shader.ShaderGL;
    flambe.platform.shader.DrawPatternGL.prototype = $extend(flambe.platform.shader.ShaderGL.prototype, {
        u_maxUV: null,
        a_alpha: null,
        a_uv: null,
        a_pos: null,
        prepare: function() {
            this._gl.enableVertexAttribArray(this.a_pos);
            this._gl.enableVertexAttribArray(this.a_uv);
            this._gl.enableVertexAttribArray(this.a_alpha);
            var bytesPerFloat = 4;
            var stride = 5 * bytesPerFloat;
            this._gl.vertexAttribPointer(this.a_pos, 2, 5126, false, stride, 0 * bytesPerFloat);
            this._gl.vertexAttribPointer(this.a_uv, 2, 5126, false, stride, 2 * bytesPerFloat);
            this._gl.vertexAttribPointer(this.a_alpha, 1, 5126, false, stride, 4 * bytesPerFloat);
        },
        setMaxUV: function(maxU, maxV) {
            this._gl.uniform2f(this.u_maxUV, maxU, maxV);
        },
        __class__: flambe.platform.shader.DrawPatternGL
    });
    flambe.platform.shader.FillRectGL = function() {}
    $hxClasses["flambe.platform.shader.FillRectGL"] = flambe.platform.shader.FillRectGL;
    flambe.platform.shader.FillRectGL.__name__ = true;
    flambe.platform.shader.FillRectGL.__super__ = flambe.platform.shader.ShaderGL;
    flambe.platform.shader.FillRectGL.prototype = $extend(flambe.platform.shader.ShaderGL.prototype, {
        a_alpha: null,
        a_rgb: null,
        a_pos: null,
        prepare: function() {
            this._gl.enableVertexAttribArray(this.a_pos);
            this._gl.enableVertexAttribArray(this.a_rgb);
            this._gl.enableVertexAttribArray(this.a_alpha);
            var bytesPerFloat = 4;
            var stride = 6 * bytesPerFloat;
            this._gl.vertexAttribPointer(this.a_pos, 2, 5126, false, stride, 0 * bytesPerFloat);
            this._gl.vertexAttribPointer(this.a_rgb, 3, 5126, false, stride, 2 * bytesPerFloat);
            this._gl.vertexAttribPointer(this.a_alpha, 1, 5126, false, stride, 5 * bytesPerFloat);
        },
        __class__: flambe.platform.shader.FillRectGL
    });
    flambe.scene = {}
    flambe.scene.Director = function() {
        this._height = -1;
        this._width = -1;
        this._transitor = null;
        this.scenes = [];
        this.occludedScenes = [];
        this._root = new flambe.Entity();
    };
    $hxClasses["flambe.scene.Director"] = flambe.scene.Director;
    flambe.scene.Director.__name__ = true;
    flambe.scene.Director.__super__ = flambe.Component;
    flambe.scene.Director.prototype = $extend(flambe.Component.prototype, {
        _height: null,
        _width: null,
        _transitor: null,
        _root: null,
        playTransition: function(from, to, transition, onComplete) {
            this.completeTransition();
            this.add(to);
            if (transition != null) {
                this.occludedScenes.push(from);
                this._transitor = new flambe.scene._Director.Transitor(from, to, transition, onComplete);
                this._transitor.init(this);
            } else {
                onComplete();
                this.invalidateVisibility();
            }
        },
        completeTransition: function() {
            if (this._transitor != null) {
                this._transitor.complete();
                this._transitor = null;
                this.invalidateVisibility();
            }
        },
        invalidateVisibility: function() {
            var ii = this.scenes.length;
            while (ii > 0) {
                var scene = this.scenes[--ii];
                var comp = scene._compMap.Scene_0;
                if (comp == null || comp.opaque) break;
            }
            this.occludedScenes = this.scenes.length > 0 ? this.scenes.slice(ii, this.scenes.length - 1) : [];
            var scene = this.get_topScene();
            if (scene != null) this.show(scene);
        },
        show: function(scene) {
            var events = scene._compMap.Scene_0;
            if (events != null) events.shown.emit();
        },
        hideAndDispose: function(scene) {
            this.hide(scene);
            scene.dispose();
        },
        hide: function(scene) {
            var events = scene._compMap.Scene_0;
            if (events != null) events.hidden.emit();
        },
        add: function(scene) {
            var oldTop = this.get_topScene();
            if (oldTop != null) this._root.removeChild(oldTop);
            HxOverrides.remove(this.scenes, scene);
            this.scenes.push(scene);
            this._root.addChild(scene);
        },
        get_topScene: function() {
            var ll = this.scenes.length;
            return ll > 0 ? this.scenes[ll - 1] : null;
        },
        onUpdate: function(dt) {
            if (this._transitor != null && this._transitor.update(dt)) this.completeTransition();
        },
        onRemoved: function() {
            this.completeTransition();
            var _g = 0,
                _g1 = this.scenes;
            while (_g < _g1.length) {
                var scene = _g1[_g];
                ++_g;
                scene.dispose();
            }
            this.scenes = [];
            this.occludedScenes = [];
            this._root.dispose();
        },
        onAdded: function() {
            this.owner.addChild(this._root);
        },
        unwindToScene: function(scene, transition) {
            var _g = this;
            this.completeTransition();
            var oldTop = this.get_topScene();
            if (oldTop != null) {
                if (oldTop == scene) return;
                this.scenes.pop();
                while (this.scenes.length > 0 && this.scenes[this.scenes.length - 1] != scene) this.scenes.pop().dispose();
                this.playTransition(oldTop, scene, transition, function() {
                    _g.hideAndDispose(oldTop);
                });
            } else this.pushScene(scene, transition);
        },
        popScene: function(transition) {
            var _g = this;
            this.completeTransition();
            var oldTop = this.get_topScene();
            if (oldTop != null) {
                this.scenes.pop();
                var newTop = this.get_topScene();
                if (newTop != null) this.playTransition(oldTop, newTop, transition, function() {
                    _g.hideAndDispose(oldTop);
                });
                else {
                    this.hideAndDispose(oldTop);
                    this.invalidateVisibility();
                }
            }
        },
        pushScene: function(scene, transition) {
            var _g = this;
            this.completeTransition();
            var oldTop = this.get_topScene();
            if (oldTop != null) this.playTransition(oldTop, scene, transition, function() {
                _g.hide(oldTop);
            });
            else {
                this.add(scene);
                this.invalidateVisibility();
            }
        },
        setSize: function(width, height) {
            this._width = width;
            this._height = height;
            return this;
        },
        occludedScenes: null,
        scenes: null,
        get_name: function() {
            return "Director_6";
        },
        __class__: flambe.scene.Director
    });
    flambe.scene._Director = {}
    flambe.scene._Director.Transitor = function(from, to, transition, onComplete) {
        this._from = from;
        this._to = to;
        this._transition = transition;
        this._onComplete = onComplete;
    };
    $hxClasses["flambe.scene._Director.Transitor"] = flambe.scene._Director.Transitor;
    flambe.scene._Director.Transitor.__name__ = true;
    flambe.scene._Director.Transitor.prototype = {
        _onComplete: null,
        _transition: null,
        _to: null,
        _from: null,
        complete: function() {
            this._transition.complete();
            this._onComplete();
        },
        update: function(dt) {
            return this._transition.update(dt);
        },
        init: function(director) {
            this._transition.init(director, this._from, this._to);
        },
        __class__: flambe.scene._Director.Transitor
    }
    flambe.scene.Scene = function(opaque) {
        if (opaque == null) opaque = true;
        this.opaque = opaque;
        this.shown = new flambe.util.Signal0();
        this.hidden = new flambe.util.Signal0();
    };
    $hxClasses["flambe.scene.Scene"] = flambe.scene.Scene;
    flambe.scene.Scene.__name__ = true;
    flambe.scene.Scene.__super__ = flambe.Component;
    flambe.scene.Scene.prototype = $extend(flambe.Component.prototype, {
        opaque: null,
        hidden: null,
        shown: null,
        get_name: function() {
            return "Scene_0";
        },
        __class__: flambe.scene.Scene
    });
    flambe.scene.Transition = function() {}
    $hxClasses["flambe.scene.Transition"] = flambe.scene.Transition;
    flambe.scene.Transition.__name__ = true;
    flambe.scene.Transition.prototype = {
        _to: null,
        _from: null,
        _director: null,
        complete: function() {},
        update: function(dt) {
            return true;
        },
        init: function(director, from, to) {
            this._director = director;
            this._from = from;
            this._to = to;
        },
        __class__: flambe.scene.Transition
    }
    flambe.script = {}
    flambe.script.Action = function() {}
    $hxClasses["flambe.script.Action"] = flambe.script.Action;
    flambe.script.Action.__name__ = true;
    flambe.script.Action.prototype = {
        update: null,
        __class__: flambe.script.Action
    }
    flambe.script.AnimateTo = function(value, to, seconds, easing) {
        this._value = value;
        this._to = to;
        this._seconds = seconds;
        this._easing = easing;
    };
    $hxClasses["flambe.script.AnimateTo"] = flambe.script.AnimateTo;
    flambe.script.AnimateTo.__name__ = true;
    flambe.script.AnimateTo.__interfaces__ = [flambe.script.Action];
    flambe.script.AnimateTo.prototype = {
        _easing: null,
        _seconds: null,
        _to: null,
        _value: null,
        _tween: null,
        update: function(dt, actor) {
            if (this._tween == null) {
                this._tween = new flambe.animation.Tween(this._value._value, this._to, this._seconds, this._easing);
                this._value.set_behavior(this._tween);
                this._value.update(dt);
            }
            if (this._value._behavior != this._tween) {
                var overtime = this._tween.elapsed - this._seconds;
                this._tween = null;
                return overtime > 0 ? dt - overtime : 0;
            }
            return -1;
        },
        __class__: flambe.script.AnimateTo
    }
    flambe.script.CallFunction = function(fn) {
        this._fn = fn;
    };
    $hxClasses["flambe.script.CallFunction"] = flambe.script.CallFunction;
    flambe.script.CallFunction.__name__ = true;
    flambe.script.CallFunction.__interfaces__ = [flambe.script.Action];
    flambe.script.CallFunction.prototype = {
        _fn: null,
        update: function(dt, actor) {
            this._fn();
            return 0;
        },
        __class__: flambe.script.CallFunction
    }
    flambe.script.Parallel = function(actions) {
        this._completedActions = [];
        this._runningActions = actions != null ? actions.slice() : [];
    };
    $hxClasses["flambe.script.Parallel"] = flambe.script.Parallel;
    flambe.script.Parallel.__name__ = true;
    flambe.script.Parallel.__interfaces__ = [flambe.script.Action];
    flambe.script.Parallel.prototype = {
        _completedActions: null,
        _runningActions: null,
        update: function(dt, actor) {
            var done = true;
            var maxSpent = 0.0;
            var _g1 = 0,
                _g = this._runningActions.length;
            while (_g1 < _g) {
                var ii = _g1++;
                var action = this._runningActions[ii];
                if (action != null) {
                    var spent = action.update(dt, actor);
                    if (spent >= 0) {
                        this._runningActions[ii] = null;
                        this._completedActions.push(action);
                        if (spent > maxSpent) maxSpent = spent;
                    } else done = false;
                }
            }
            if (done) {
                this._runningActions = this._completedActions;
                this._completedActions = [];
                return maxSpent;
            }
            return -1;
        },
        __class__: flambe.script.Parallel
    }
    flambe.script.Script = function() {
        this.stopAll();
    };
    $hxClasses["flambe.script.Script"] = flambe.script.Script;
    flambe.script.Script.__name__ = true;
    flambe.script.Script.__super__ = flambe.Component;
    flambe.script.Script.prototype = $extend(flambe.Component.prototype, {
        _handles: null,
        onUpdate: function(dt) {
            var ii = 0;
            while (ii < this._handles.length) {
                var handle = this._handles[ii];
                if (handle.removed || handle.action.update(dt, this.owner) >= 0) this._handles.splice(ii, 1);
                else ++ii;
            }
        },
        stopAll: function() {
            this._handles = [];
        },
        run: function(action) {
            var handle = new flambe.script._Script.Handle(action);
            this._handles.push(handle);
            return handle;
        },
        get_name: function() {
            return "Script_2";
        },
        __class__: flambe.script.Script
    });
    flambe.script._Script = {}
    flambe.script._Script.Handle = function(action) {
        this.removed = false;
        this.action = action;
    };
    $hxClasses["flambe.script._Script.Handle"] = flambe.script._Script.Handle;
    flambe.script._Script.Handle.__name__ = true;
    flambe.script._Script.Handle.__interfaces__ = [flambe.util.Disposable];
    flambe.script._Script.Handle.prototype = {
        dispose: function() {
            this.removed = true;
            this.action = null;
        },
        action: null,
        removed: null,
        __class__: flambe.script._Script.Handle
    }
    flambe.script.Sequence = function(actions) {
        this._idx = 0;
        this._runningActions = actions != null ? actions.slice() : [];
    };
    $hxClasses["flambe.script.Sequence"] = flambe.script.Sequence;
    flambe.script.Sequence.__name__ = true;
    flambe.script.Sequence.__interfaces__ = [flambe.script.Action];
    flambe.script.Sequence.prototype = {
        _idx: null,
        _runningActions: null,
        update: function(dt, actor) {
            var total = 0.0;
            while (true) {
                var action = this._runningActions[this._idx];
                if (action != null) {
                    var spent = action.update(dt - total, actor);
                    if (spent >= 0) total += spent;
                    else return -1;
                }
                ++this._idx;
                if (this._idx >= this._runningActions.length) {
                    this._idx = 0;
                    break;
                } else if (total > dt) return -1;
            }
            return total;
        },
        __class__: flambe.script.Sequence
    }
    flambe.swf = {}
    flambe.swf.BitmapSprite = function(symbol) {
        flambe.display.Sprite.call(this);
        this.symbol = symbol;
        this.anchorX.set__(symbol.anchorX);
        this.anchorY.set__(symbol.anchorY);
    };
    $hxClasses["flambe.swf.BitmapSprite"] = flambe.swf.BitmapSprite;
    flambe.swf.BitmapSprite.__name__ = true;
    flambe.swf.BitmapSprite.__super__ = flambe.display.Sprite;
    flambe.swf.BitmapSprite.prototype = $extend(flambe.display.Sprite.prototype, {
        getNaturalHeight: function() {
            return this.symbol.height;
        },
        getNaturalWidth: function() {
            return this.symbol.width;
        },
        draw: function(g) {
            g.drawSubImage(this.symbol.atlas, 0, 0, this.symbol.x, this.symbol.y, this.symbol.width, this.symbol.height);
        },
        symbol: null,
        __class__: flambe.swf.BitmapSprite
    });
    flambe.swf.Symbol = function() {}
    $hxClasses["flambe.swf.Symbol"] = flambe.swf.Symbol;
    flambe.swf.Symbol.__name__ = true;
    flambe.swf.Symbol.prototype = {
        createSprite: null,
        __class__: flambe.swf.Symbol
    }
    flambe.swf.BitmapSymbol = function(json, atlas) {
        this._name = json.symbol;
        this.atlas = atlas;
        var rect = json.rect;
        this.x = rect[0];
        this.y = rect[1];
        this.width = rect[2];
        this.height = rect[3];
        var origin = json.origin;
        if (origin != null) {
            this.anchorX = origin[0];
            this.anchorY = origin[1];
        } else {
            this.anchorX = 0;
            this.anchorY = 0;
        }
    };
    $hxClasses["flambe.swf.BitmapSymbol"] = flambe.swf.BitmapSymbol;
    flambe.swf.BitmapSymbol.__name__ = true;
    flambe.swf.BitmapSymbol.__interfaces__ = [flambe.swf.Symbol];
    flambe.swf.BitmapSymbol.prototype = {
        _name: null,
        get_name: function() {
            return this._name;
        },
        createSprite: function() {
            return new flambe.swf.BitmapSprite(this);
        },
        anchorY: null,
        anchorX: null,
        height: null,
        width: null,
        y: null,
        x: null,
        atlas: null,
        __class__: flambe.swf.BitmapSymbol
    }
    flambe.swf.Library = function(pack, baseDir) {
        this._symbols = new haxe.ds.StringMap();
        var json = haxe.Json.parse(pack.getFile(baseDir + "/library.json").toString());
        this.frameRate = json.frameRate;
        var movies = [];
        var _g = 0,
            _g1 = json.movies;
        while (_g < _g1.length) {
            var movieObject = _g1[_g];
            ++_g;
            var movie = new flambe.swf.MovieSymbol(this, movieObject);
            movies.push(movie);
            this._symbols.set(movie.get_name(), movie);
        }
        var groups = json.textureGroups;
        if (groups[0].scaleFactor != 1 || groups.length > 1) null;
        var atlases = groups[0].atlases;
        var _g = 0;
        while (_g < atlases.length) {
            var atlasObject = atlases[_g];
            ++_g;
            var atlas = pack.getTexture(baseDir + "/" + flambe.util.Strings.removeFileExtension(atlasObject.file));
            var _g1 = 0,
                _g2 = atlasObject.textures;
            while (_g1 < _g2.length) {
                var textureObject = _g2[_g1];
                ++_g1;
                var bitmap = new flambe.swf.BitmapSymbol(textureObject, atlas);
                this._symbols.set(bitmap.get_name(), bitmap);
            }
        }
        var _g = 0;
        while (_g < movies.length) {
            var movie = movies[_g];
            ++_g;
            var _g1 = 0,
                _g2 = movie.layers;
            while (_g1 < _g2.length) {
                var layer = _g2[_g1];
                ++_g1;
                var keyframes = layer.keyframes;
                var ll = keyframes.length;
                var _g3 = 0;
                while (_g3 < ll) {
                    var ii = _g3++;
                    var kf = keyframes[ii];
                    if (kf.symbolName != null) {
                        var symbol = this._symbols.get(kf.symbolName);
                        kf.symbol = symbol;
                    }
                    if (kf.tweened && kf.duration == 1 && ii + 1 < ll) {
                        var nextKf = keyframes[ii + 1];
                        if (!nextKf.visible || nextKf.symbolName == null) kf.visible = false;
                    }
                }
            }
        }
    };
    $hxClasses["flambe.swf.Library"] = flambe.swf.Library;
    flambe.swf.Library.__name__ = true;
    flambe.swf.Library.prototype = {
        _symbols: null,
        createSprite: function(symbolName, required) {
            if (required == null) required = true;
            var symbol = this._symbols.get(symbolName);
            if (symbol == null) {
                if (required) throw flambe.util.Strings.withFields("Missing symbol", ["name", symbolName]);
                return null;
            }
            return symbol.createSprite();
        },
        frameRate: null,
        __class__: flambe.swf.Library
    }
    flambe.swf.MovieSprite = function(symbol) {
        this._looped = null;
        flambe.display.Sprite.call(this);
        this.symbol = symbol;
        this.speed = new flambe.animation.AnimatedFloat(1);
        this._animators = new Array(symbol.layers.length);
        var _g1 = 0,
            _g = this._animators.length;
        while (_g1 < _g) {
            var ii = _g1++;
            var layer = symbol.layers[ii];
            this._animators[ii] = new flambe.swf._MovieSprite.LayerAnimator(layer);
        }
        this._frame = 0;
        this._position = 0;
        this["goto"](1);
    };
    $hxClasses["flambe.swf.MovieSprite"] = flambe.swf.MovieSprite;
    flambe.swf.MovieSprite.__name__ = true;
    flambe.swf.MovieSprite.__super__ = flambe.display.Sprite;
    flambe.swf.MovieSprite.prototype = $extend(flambe.display.Sprite.prototype, {
        _looped: null,
        _frame: null,
        _position: null,
        _animators: null,
        rewind: function() {
            this._position = 0;
            this._flags = this._flags | 32;
        },
        get_looped: function() {
            if (this._looped == null) this._looped = new flambe.util.Signal0();
            return this._looped;
        },
        set_paused: function(paused) {
            this._flags = flambe.util.BitSets.set(this._flags, 16, paused);
            return paused;
        },
        set_position: function(position) {
            return this._position = flambe.math.FMath.clamp(position, 0, this.symbol.duration);
        },
        'goto': function(newFrame) {
            if (this._frame == newFrame) return;
            var wrapped = newFrame < this._frame;
            if (wrapped) {
                var _g = 0,
                    _g1 = this._animators;
                while (_g < _g1.length) {
                    var animator = _g1[_g];
                    ++_g;
                    animator.needsKeyframeUpdate = true;
                    animator.keyframeIdx = 0;
                }
            }
            var _g = 0,
                _g1 = this._animators;
            while (_g < _g1.length) {
                var animator = _g1[_g];
                ++_g;
                animator.composeFrame(newFrame);
            }
            this._frame = newFrame;
        },
        onUpdate: function(dt) {
            flambe.display.Sprite.prototype.onUpdate.call(this, dt);
            this.speed.update(dt);
            var _g = this._flags & 48;
            switch (_g) {
                case 0:
                    this._position += this.speed._value * dt;
                    if (this._position > this.symbol.duration) {
                        this._position = this._position % this.symbol.duration;
                        if (this._looped != null) this._looped.emit();
                    }
                    break;
                case 32:
                    this._flags = this._flags & -33;
                    break;
            }
            var newFrame = this._position * this.symbol.frameRate;
            this["goto"](newFrame);
        },
        onRemoved: function() {
            flambe.display.Sprite.prototype.onRemoved.call(this);
            var _g = 0,
                _g1 = this._animators;
            while (_g < _g1.length) {
                var animator = _g1[_g];
                ++_g;
                this.owner.removeChild(animator.content);
            }
        },
        onAdded: function() {
            flambe.display.Sprite.prototype.onAdded.call(this);
            var _g = 0,
                _g1 = this._animators;
            while (_g < _g1.length) {
                var animator = _g1[_g];
                ++_g;
                this.owner.addChild(animator.content);
            }
        },
        speed: null,
        symbol: null,
        __class__: flambe.swf.MovieSprite
    });
    flambe.swf._MovieSprite = {}
    flambe.swf._MovieSprite.LayerAnimator = function(layer) {
        this.keyframeIdx = 0;
        this.needsKeyframeUpdate = false;
        this.layer = layer;
        this.content = new flambe.Entity();
        if (layer.empty) this._sprites = null;
        else {
            this._sprites = new Array(layer.keyframes.length);
            var _g1 = 0,
                _g = this._sprites.length;
            while (_g1 < _g) {
                var ii = _g1++;
                var kf = layer.keyframes[ii];
                if (ii > 0 && layer.keyframes[ii - 1].symbol == kf.symbol) this._sprites[ii] = this._sprites[ii - 1];
                else if (kf.symbol == null) this._sprites[ii] = new flambe.display.Sprite();
                else this._sprites[ii] = kf.symbol.createSprite();
            }
            this.content.add(this._sprites[0]);
        }
    };
    $hxClasses["flambe.swf._MovieSprite.LayerAnimator"] = flambe.swf._MovieSprite.LayerAnimator;
    flambe.swf._MovieSprite.LayerAnimator.__name__ = true;
    flambe.swf._MovieSprite.LayerAnimator.prototype = {
        _sprites: null,
        composeFrame: function(frame) {
            if (this._sprites == null) return;
            var keyframes = this.layer.keyframes;
            var finalFrame = keyframes.length - 1;
            if (frame > this.layer.frames) {
                this.content._compMap.Sprite_1.set_visible(false);
                this.keyframeIdx = finalFrame;
                this.needsKeyframeUpdate = true;
                return;
            }
            while (this.keyframeIdx < finalFrame && keyframes[this.keyframeIdx + 1].index <= frame) {
                ++this.keyframeIdx;
                this.needsKeyframeUpdate = true;
            }
            var sprite;
            if (this.needsKeyframeUpdate) {
                this.needsKeyframeUpdate = false;
                sprite = this._sprites[this.keyframeIdx];
                if (sprite != this.content._compMap.Sprite_1) {
                    if (Type.getClass(sprite) == flambe.swf.MovieSprite) {
                        var movie = sprite;
                        movie.rewind();
                    }
                    this.content.add(sprite);
                }
            } else sprite = this.content._compMap.Sprite_1;
            var kf = keyframes[this.keyframeIdx];
            var visible = kf.visible && kf.symbol != null;
            sprite.set_visible(visible);
            if (!visible) return;
            var x = kf.x;
            var y = kf.y;
            var scaleX = kf.scaleX;
            var scaleY = kf.scaleY;
            var skewX = kf.skewX;
            var skewY = kf.skewY;
            var alpha = kf.alpha;
            if (kf.tweened && this.keyframeIdx < finalFrame) {
                var interp = (frame - kf.index) / kf.duration;
                var ease = kf.ease;
                if (ease != 0) {
                    var t;
                    if (ease < 0) {
                        var inv = 1 - interp;
                        t = 1 - inv * inv;
                        ease = -ease;
                    } else t = interp * interp;
                    interp = ease * t + (1 - ease) * interp;
                }
                var nextKf = keyframes[this.keyframeIdx + 1];
                x += (nextKf.x - x) * interp;
                y += (nextKf.y - y) * interp;
                scaleX += (nextKf.scaleX - scaleX) * interp;
                scaleY += (nextKf.scaleY - scaleY) * interp;
                skewX += (nextKf.skewX - skewX) * interp;
                skewY += (nextKf.skewY - skewY) * interp;
                alpha += (nextKf.alpha - alpha) * interp;
            }
            var matrix = sprite.getLocalMatrix();
            var sinX = Math.sin(skewX),
                cosX = Math.cos(skewX);
            var sinY = Math.sin(skewY),
                cosY = Math.cos(skewY);
            matrix.set(cosY * scaleX, sinY * scaleX, -sinX * scaleY, cosX * scaleY, x, y);
            matrix.translate(-kf.pivotX, -kf.pivotY);
            sprite.alpha.set__(alpha);
        },
        layer: null,
        keyframeIdx: null,
        needsKeyframeUpdate: null,
        content: null,
        __class__: flambe.swf._MovieSprite.LayerAnimator
    }
    flambe.swf.MovieSymbol = function(lib, json) {
        this._name = json.id;
        this.frameRate = lib.frameRate;
        this.frames = 0;
        this.layers = new Array(json.layers.length);
        var _g1 = 0,
            _g = this.layers.length;
        while (_g1 < _g) {
            var ii = _g1++;
            var layer = new flambe.swf.MovieLayer(json.layers[ii]);
            this.frames = Math.max(layer.frames, this.frames);
            this.layers[ii] = layer;
        }
        this.duration = this.frames / this.frameRate;
    };
    $hxClasses["flambe.swf.MovieSymbol"] = flambe.swf.MovieSymbol;
    flambe.swf.MovieSymbol.__name__ = true;
    flambe.swf.MovieSymbol.__interfaces__ = [flambe.swf.Symbol];
    flambe.swf.MovieSymbol.prototype = {
        _name: null,
        createSprite: function() {
            return new flambe.swf.MovieSprite(this);
        },
        get_name: function() {
            return this._name;
        },
        duration: null,
        frameRate: null,
        frames: null,
        layers: null,
        __class__: flambe.swf.MovieSymbol
    }
    flambe.swf.MovieLayer = function(json) {
        this.empty = true;
        this.name = json.name;
        var prevKf = null;
        this.keyframes = new Array(json.keyframes.length);
        var _g1 = 0,
            _g = this.keyframes.length;
        while (_g1 < _g) {
            var ii = _g1++;
            prevKf = new flambe.swf.MovieKeyframe(json.keyframes[ii], prevKf);
            this.keyframes[ii] = prevKf;
            this.empty = this.empty && prevKf.symbolName == null;
        }
        this.frames = prevKf != null ? prevKf.index + (prevKf.duration | 0) : 0;
    };
    $hxClasses["flambe.swf.MovieLayer"] = flambe.swf.MovieLayer;
    flambe.swf.MovieLayer.__name__ = true;
    flambe.swf.MovieLayer.prototype = {
        empty: null,
        frames: null,
        keyframes: null,
        name: null,
        __class__: flambe.swf.MovieLayer
    }
    flambe.swf.MovieKeyframe = function(json, prevKf) {
        this.ease = 0;
        this.tweened = true;
        this.visible = true;
        this.alpha = 1;
        this.pivotY = 0;
        this.pivotX = 0;
        this.skewY = 0;
        this.skewX = 0;
        this.scaleY = 1;
        this.scaleX = 1;
        this.y = 0;
        this.x = 0;
        this.symbol = null;
        this.index = prevKf != null ? prevKf.index + prevKf.duration : 0;
        this.duration = json.duration;
        this.label = json.label;
        this.symbolName = json.ref;
        var loc = json.loc;
        if (loc != null) {
            this.x = loc[0];
            this.y = loc[1];
        }
        var scale = json.scale;
        if (scale != null) {
            this.scaleX = scale[0];
            this.scaleY = scale[1];
        }
        var skew = json.skew;
        if (skew != null) {
            this.skewX = skew[0];
            this.skewY = skew[1];
        }
        var pivot = json.pivot;
        if (pivot != null) {
            this.pivotX = pivot[0];
            this.pivotY = pivot[1];
        }
        if (json.alpha != null) this.alpha = json.alpha;
        if (json.visible != null) this.visible = json.visible;
        if (json.tweened != null) this.tweened = json.tweened;
        if (json.ease != null) this.ease = json.ease;
    };
    $hxClasses["flambe.swf.MovieKeyframe"] = flambe.swf.MovieKeyframe;
    flambe.swf.MovieKeyframe.__name__ = true;
    flambe.swf.MovieKeyframe.prototype = {
        ease: null,
        tweened: null,
        visible: null,
        alpha: null,
        pivotY: null,
        pivotX: null,
        skewY: null,
        skewX: null,
        scaleY: null,
        scaleX: null,
        y: null,
        x: null,
        label: null,
        symbol: null,
        symbolName: null,
        duration: null,
        index: null,
        __class__: flambe.swf.MovieKeyframe
    }
    flambe.util.BitSets = function() {}
    $hxClasses["flambe.util.BitSets"] = flambe.util.BitSets;
    flambe.util.BitSets.__name__ = true;
    flambe.util.BitSets.set = function(bits, mask, enabled) {
        return enabled ? bits | mask : bits & ~mask;
    }
    flambe.util.Promise = function() {
        this.success = new flambe.util.Signal1();
        this.error = new flambe.util.Signal1();
        this.progressChanged = new flambe.util.Signal0();
        this.hasResult = false;
        this._progress = 0;
        this._total = 0;
    };
    $hxClasses["flambe.util.Promise"] = flambe.util.Promise;
    flambe.util.Promise.__name__ = true;
    flambe.util.Promise.prototype = {
        _total: null,
        _progress: null,
        _result: null,
        set_total: function(total) {
            if (this._total != total) {
                this._total = total;
                this.progressChanged.emit();
            }
            return total;
        },
        set_progress: function(progress) {
            if (this._progress != progress) {
                this._progress = progress;
                this.progressChanged.emit();
            }
            return progress;
        },
        get: function(fn) {
            if (this.hasResult) {
                fn(this._result);
                return null;
            }
            return this.success.connect(fn).once();
        },
        set_result: function(result) {
            if (this.hasResult) throw "Promise result already assigned";
            this._result = result;
            this.hasResult = true;
            this.success.emit(result);
            return result;
        },
        progressChanged: null,
        error: null,
        success: null,
        hasResult: null,
        __class__: flambe.util.Promise
    }
    flambe.util.Signal0 = function(listener) {
        flambe.util.SignalBase.call(this, listener);
    };
    $hxClasses["flambe.util.Signal0"] = flambe.util.Signal0;
    flambe.util.Signal0.__name__ = true;
    flambe.util.Signal0.__super__ = flambe.util.SignalBase;
    flambe.util.Signal0.prototype = $extend(flambe.util.SignalBase.prototype, {
        emitImpl: function() {
            var head = this.willEmit();
            var p = head;
            while (p != null) {
                p._listener();
                if (!p.stayInList) p.dispose();
                p = p._next;
            }
            this.didEmit(head);
        },
        emit: function() {
            var _g = this;
            if (this._head == flambe.util.SignalBase.DISPATCHING_SENTINEL) this.defer(function() {
                _g.emitImpl();
            });
            else this.emitImpl();
        },
        connect: function(listener, prioritize) {
            if (prioritize == null) prioritize = false;
            return this.connectImpl(listener, prioritize);
        },
        __class__: flambe.util.Signal0
    });
    flambe.util._SignalBase = {}
    flambe.util._SignalBase.Task = function(fn) {
        this.next = null;
        this.fn = fn;
    };
    $hxClasses["flambe.util._SignalBase.Task"] = flambe.util._SignalBase.Task;
    flambe.util._SignalBase.Task.__name__ = true;
    flambe.util._SignalBase.Task.prototype = {
        next: null,
        fn: null,
        __class__: flambe.util._SignalBase.Task
    }
    flambe.util.Strings = function() {}
    $hxClasses["flambe.util.Strings"] = flambe.util.Strings;
    flambe.util.Strings.__name__ = true;
    flambe.util.Strings.getFileExtension = function(fileName) {
        var dot = fileName.lastIndexOf(".");
        return dot > 0 ? HxOverrides.substr(fileName, dot + 1, null) : null;
    }
    flambe.util.Strings.removeFileExtension = function(fileName) {
        var dot = fileName.lastIndexOf(".");
        return dot > 0 ? HxOverrides.substr(fileName, 0, dot) : fileName;
    }
    flambe.util.Strings.getUrlExtension = function(url) {
        var question = url.lastIndexOf("?");
        if (question >= 0) url = HxOverrides.substr(url, 0, question);
        var slash = url.lastIndexOf("/");
        if (slash >= 0) url = HxOverrides.substr(url, slash + 1, null);
        return flambe.util.Strings.getFileExtension(url);
    }
    flambe.util.Strings.joinPath = function(base, relative) {
        if (base.charCodeAt(base.length - 1) != 47) base += "/";
        return base + relative;
    }
    flambe.util.Strings.withFields = function(message, fields) {
        var ll = fields.length;
        if (ll > 0) {
            message += message.length > 0 ? " [" : "[";
            var ii = 0;
            while (ii < ll) {
                if (ii > 0) message += ", ";
                var name = fields[ii];
                var value = fields[ii + 1];
                if (js.Boot.__instanceof(value, Error)) {
                    var stack = value.stack;
                    if (stack != null) value = stack;
                }
                message += name + "=" + Std.string(value);
                ii += 2;
            }
            message += "]";
        }
        return message;
    }
    var googleAnalytics = {}
    googleAnalytics.Campaign = function() {
        this.responseCount = 0;
    };
    $hxClasses["googleAnalytics.Campaign"] = googleAnalytics.Campaign;
    googleAnalytics.Campaign.__name__ = true;
    googleAnalytics.Campaign.prototype = {
        getContent: function() {
            return this.content;
        },
        getTerm: function() {
            return this.term;
        },
        getMedium: function() {
            return this.medium;
        },
        getName: function() {
            return this.name;
        },
        getDClickId: function() {
            return this.dClickId;
        },
        getGClickId: function() {
            return this.gClickId;
        },
        getSource: function() {
            return this.source;
        },
        getId: function() {
            return this.id;
        },
        increaseResponseCount: function(byAmount) {
            if (byAmount == null) byAmount = 1;
            this.responseCount += byAmount;
        },
        getResponseCount: function() {
            return this.responseCount;
        },
        getCreationTime: function() {
            return this.creationTime;
        },
        content: null,
        term: null,
        medium: null,
        name: null,
        dClickId: null,
        gClickId: null,
        source: null,
        id: null,
        responseCount: null,
        creationTime: null,
        __class__: googleAnalytics.Campaign
    }
    googleAnalytics.Config = function() {
        this.sitespeedSampleRate = 1;
        this.endPointPath = "/__utm.gif";
        this.endPointHost = "www.google-analytics.com";
        this.errorSeverity = 2;
    };
    $hxClasses["googleAnalytics.Config"] = googleAnalytics.Config;
    googleAnalytics.Config.__name__ = true;
    googleAnalytics.Config.prototype = {
        getSitespeedSampleRate: function() {
            return this.sitespeedSampleRate;
        },
        getEndPointPath: function() {
            return this.endPointPath;
        },
        getEndPointHost: function() {
            return this.endPointHost;
        },
        getErrorSeverity: function() {
            return this.errorSeverity;
        },
        sitespeedSampleRate: null,
        endPointPath: null,
        endPointHost: null,
        errorSeverity: null,
        __class__: googleAnalytics.Config
    }
    googleAnalytics.CustomVariable = function() {
        this.scope = 3;
    };
    $hxClasses["googleAnalytics.CustomVariable"] = googleAnalytics.CustomVariable;
    googleAnalytics.CustomVariable.__name__ = true;
    googleAnalytics.CustomVariable.prototype = {
        getScope: function() {
            return this.scope;
        },
        getValue: function() {
            return this.value;
        },
        getName: function() {
            return this.name;
        },
        getIndex: function() {
            return this.index;
        },
        scope: null,
        value: null,
        name: null,
        index: null,
        __class__: googleAnalytics.CustomVariable
    }
    googleAnalytics.DateTime = function(current) {
        if (current == null) this.date = Math.round(new Date().getTime()) + "";
        else this.date = current;
    };
    $hxClasses["googleAnalytics.DateTime"] = googleAnalytics.DateTime;
    googleAnalytics.DateTime.__name__ = true;
    googleAnalytics.DateTime.prototype = {
        toString: function() {
            return this.date;
        },
        date: null,
        __class__: googleAnalytics.DateTime
    }
    googleAnalytics.Event = function(category, action, label, value, noninteraction) {
        if (noninteraction == null) noninteraction = false;
        if (value == null) value = 0;
        this.noninteraction = false;
        if (category != null) this.setCategory(category);
        if (action != null) this.setAction(action);
        if (label != null) this.setLabel(label);
        this.setValue(value);
        this.setNoninteraction(noninteraction);
    };
    $hxClasses["googleAnalytics.Event"] = googleAnalytics.Event;
    googleAnalytics.Event.__name__ = true;
    googleAnalytics.Event.prototype = {
        setNoninteraction: function(value) {
            this.noninteraction = value;
        },
        getNoninteraction: function() {
            return this.noninteraction;
        },
        setValue: function(value) {
            this.value = value;
        },
        getValue: function() {
            return this.value;
        },
        setLabel: function(label) {
            this.label = label;
        },
        getLabel: function() {
            return this.label;
        },
        setAction: function(action) {
            this.action = action;
        },
        getAction: function() {
            return this.action;
        },
        setCategory: function(category) {
            this.category = category;
        },
        getCategory: function() {
            return this.category;
        },
        validate: function() {
            if (this.category == null || this.action == null) googleAnalytics.Tracker._raiseError("Events need at least to have a category and action defined.", "Event.validate");
        },
        noninteraction: null,
        value: null,
        label: null,
        action: null,
        category: null,
        __class__: googleAnalytics.Event
    }
    googleAnalytics.Page = function(path) {
        this.setPath(path);
    };
    $hxClasses["googleAnalytics.Page"] = googleAnalytics.Page;
    googleAnalytics.Page.__name__ = true;
    googleAnalytics.Page.prototype = {
        getLoadTime: function() {
            return this.loadTime;
        },
        getReferrer: function() {
            return this.referrer;
        },
        getCharset: function() {
            return this.charset;
        },
        getTitle: function() {
            return this.title;
        },
        setTitle: function(title) {
            this.title = title;
        },
        getPath: function() {
            return this.path;
        },
        setPath: function(path) {
            if (path != null && path.charAt(0) != "/") googleAnalytics.Tracker._raiseError("The page path should always start with a slash (\"/\").", "Page.setPath");
            this.path = path;
        },
        loadTime: null,
        referrer: null,
        charset: null,
        title: null,
        path: null,
        __class__: googleAnalytics.Page
    }
    googleAnalytics.Session = function() {
        this.setSessionId(this.generateSessionId());
        this.setTrackCount(0);
        this.setStartTime(new googleAnalytics.DateTime());
    };
    $hxClasses["googleAnalytics.Session"] = googleAnalytics.Session;
    googleAnalytics.Session.__name__ = true;
    googleAnalytics.Session.prototype = {
        setStartTime: function(startTime) {
            this.startTime = startTime;
        },
        getStartTime: function() {
            return this.startTime;
        },
        increaseTrackCount: function(byAmount) {
            if (byAmount == null) byAmount = 1;
            this.trackCount += byAmount;
        },
        setTrackCount: function(trackCount) {
            this.trackCount = trackCount;
        },
        getTrackCount: function() {
            return this.trackCount;
        },
        setSessionId: function(sessionId) {
            this.sessionId = sessionId;
        },
        getSessionId: function() {
            return this.sessionId;
        },
        generateSessionId: function() {
            return googleAnalytics.internals.Util.generate32bitRandom();
        },
        startTime: null,
        trackCount: null,
        sessionId: null,
        __class__: googleAnalytics.Session
    }
    googleAnalytics.Tracker = function(accountId, domainName, config) {
        this.allowHash = true;
        this.customVariables = new Array();
        googleAnalytics.Tracker.setConfig(config != null ? config : new googleAnalytics.Config());
        this.setAccountId(accountId);
        this.setDomainName(domainName);
    };
    $hxClasses["googleAnalytics.Tracker"] = googleAnalytics.Tracker;
    googleAnalytics.Tracker.__name__ = true;
    googleAnalytics.Tracker.setConfig = function(config) {
        googleAnalytics.Tracker.config = config;
    }
    googleAnalytics.Tracker._raiseError = function(message, method) {
        message = method + "(): " + message;
        var errorSeverity = googleAnalytics.Tracker.config != null ? googleAnalytics.Tracker.config.getErrorSeverity() : 0;
        switch (errorSeverity) {
            case 1:
                null;
                break;
            case 2:
                throw message;
                break;
            case 0:
                break;
            default:
        }
    }
    googleAnalytics.Tracker.prototype = {
        trackEvent: function(event, session, visitor) {
            event.validate();
            var request = new googleAnalytics.internals.request.EventRequest(googleAnalytics.Tracker.config);
            request.setEvent(event);
            request.setSession(session);
            request.setVisitor(visitor);
            request.setTracker(this);
            request.send();
        },
        trackPageview: function(page, session, visitor) {
            var request = new googleAnalytics.internals.request.PageviewRequest(googleAnalytics.Tracker.config);
            request.setPage(page);
            request.setSession(session);
            request.setVisitor(visitor);
            request.setTracker(this);
            request.send();
        },
        getCampaign: function() {
            return this.campaign;
        },
        getCustomVariables: function() {
            return this.customVariables;
        },
        getAllowHash: function() {
            return this.allowHash;
        },
        getDomainName: function() {
            return this.domainName;
        },
        setDomainName: function(value) {
            this.domainName = value;
        },
        getAccountId: function() {
            return this.accountId;
        },
        setAccountId: function(value) {
            var r = new EReg("^(UA|MO)-[0-9]*-[0-9]*$", "");
            if (!r.match(value)) googleAnalytics.Tracker._raiseError("\"" + value + "\" is not a valid Google Analytics account ID.", "Tracker.setAccountId");
            this.accountId = value;
        },
        campaign: null,
        customVariables: null,
        allowHash: null,
        domainName: null,
        accountId: null,
        __class__: googleAnalytics.Tracker
    }
    googleAnalytics.Visitor = function() {
        var now = new googleAnalytics.DateTime();
        this.uniqueId = 0;
        this.setFirstVisitTime(now);
        this.setPreviousVisitTime(now);
        this.setCurrentVisitTime(now);
        this.setVisitCount(1);
    };
    $hxClasses["googleAnalytics.Visitor"] = googleAnalytics.Visitor;
    googleAnalytics.Visitor.__name__ = true;
    googleAnalytics.Visitor.prototype = {
        getScreenResolution: function() {
            return this.screenResolution;
        },
        setScreenResolution: function(value) {
            this.screenResolution = value;
        },
        getScreenColorDepth: function() {
            return this.screenColorDepth;
        },
        getJavaEnabled: function() {
            return this.javaEnabled;
        },
        getFlashVersion: function() {
            return this.flashVersion;
        },
        getLocale: function() {
            return this.locale;
        },
        getUserAgent: function() {
            return this.userAgent;
        },
        setUserAgent: function(value) {
            this.userAgent = value;
        },
        getIpAddress: function() {
            return this.ipAddress;
        },
        getVisitCount: function() {
            return this.visitCount;
        },
        setVisitCount: function(value) {
            this.visitCount = value;
        },
        getCurrentVisitTime: function() {
            return this.currentVisitTime;
        },
        setCurrentVisitTime: function(value) {
            this.currentVisitTime = value;
        },
        getPreviousVisitTime: function() {
            return this.previousVisitTime;
        },
        setPreviousVisitTime: function(value) {
            this.previousVisitTime = value;
        },
        getFirstVisitTime: function() {
            return this.firstVisitTime;
        },
        setFirstVisitTime: function(value) {
            this.firstVisitTime = value;
        },
        getUniqueId: function() {
            if (this.uniqueId == 0) this.uniqueId = this.generateUniqueId();
            return this.uniqueId;
        },
        generateUniqueId: function() {
            return (googleAnalytics.internals.Util.generate32bitRandom() ^ this.generateHash()) & 2147483647;
        },
        generateHash: function() {
            return googleAnalytics.internals.Util.generateHash(this.userAgent + this.screenResolution + this.screenColorDepth);
        },
        screenResolution: null,
        screenColorDepth: null,
        javaEnabled: null,
        flashVersion: null,
        locale: null,
        userAgent: null,
        ipAddress: null,
        visitCount: null,
        currentVisitTime: null,
        previousVisitTime: null,
        firstVisitTime: null,
        uniqueId: null,
        __class__: googleAnalytics.Visitor
    }
    googleAnalytics.internals = {}
    googleAnalytics.internals.ParameterHolder = function() {
        this.utmwv = "5.2.5";
        this.utmr = this.utmcs = this.utmfl = this.utmje = "0";
    };
    $hxClasses["googleAnalytics.internals.ParameterHolder"] = googleAnalytics.internals.ParameterHolder;
    googleAnalytics.internals.ParameterHolder.__name__ = true;
    googleAnalytics.internals.ParameterHolder.prototype = {
        toQueryString: function() {
            var qs = "";
            var property;
            var _g = 0,
                _g1 = Type.getInstanceFields(googleAnalytics.internals.ParameterHolder);
            while (_g < _g1.length) {
                var property1 = _g1[_g];
                ++_g;
                if (property1.charAt(0) != "_" && !Reflect.isFunction(Reflect.field(this, property1)) && Reflect.field(this, property1) != null && Reflect.field(this, property1) != "null") qs += property1 + "=" + StringTools.replace(Std.string(Reflect.field(this, property1)) + "", "&", "%26") + "&";
            }
            return qs;
        },
        __utmv: null,
        __utmz: null,
        __utmc: null,
        __utmb: null,
        utmhid: null,
        __utma: null,
        utmsr: null,
        utmsc: null,
        utmje: null,
        utmfl: null,
        utmul: null,
        utmip: null,
        utmr: null,
        utmcs: null,
        utmdt: null,
        utmp: null,
        utmni: null,
        utme: null,
        utmcc: null,
        utmn: null,
        utms: null,
        utmt: null,
        utmvid: null,
        utmhn: null,
        utmac: null,
        utmwv: null,
        __class__: googleAnalytics.internals.ParameterHolder
    }
    googleAnalytics.internals.Util = function() {}
    $hxClasses["googleAnalytics.internals.Util"] = googleAnalytics.internals.Util;
    googleAnalytics.internals.Util.__name__ = true;
    googleAnalytics.internals.Util.encodeUriComponent = function(value) {
        return googleAnalytics.internals.Util.convertToUriComponentEncoding(StringTools.urlEncode(value));
    }
    googleAnalytics.internals.Util.stringReplaceArray = function(s, sub, by) {
        var _g1 = 0,
            _g = sub.length;
        while (_g1 < _g) {
            var i = _g1++;
            if (sub[i] == null) continue;
            s = StringTools.replace(s + " ", sub[i], by[i]);
        }
        return StringTools.trim(s);
    }
    googleAnalytics.internals.Util.convertToUriComponentEncoding = function(encodedValue) {
        return googleAnalytics.internals.Util.stringReplaceArray(encodedValue, ["!", "*", "'", "(", ")", " ", "+"], ["%21", "%2A", "%27", "%28", "%29", "%20", "%20"]);
    }
    googleAnalytics.internals.Util.generate32bitRandom = function() {
        return Math.round(Math.random() * 2147483647);
    }
    googleAnalytics.internals.Util.generateHash = function(string) {
        var hash = 1;
        var current;
        var leftMost7;
        if (string != null && string != "") {
            hash = 0;
            var pos = string.length - 1;
            while (pos >= 0) {
                current = HxOverrides.cca(string, pos);
                hash = (hash << 6 & 268435455) + current + (current << 14);
                leftMost7 = hash & 266338304;
                if (leftMost7 != 0) hash ^= leftMost7 >> 21;
                pos--;
            }
        }
        return hash;
    }
    googleAnalytics.internals.X10 = function() {
        this.projectData = new haxe.ds.StringMap();
        this.KEY = "k";
        this.VALUE = "v";
        this.SET = ["k", "v"];
        this.DELIM_BEGIN = "(";
        this.DELIM_END = ")";
        this.DELIM_SET = "*";
        this.DELIM_NUM_VALUE = "!";
        this.MINIMUM = 1;
        this.ESCAPE_CHAR_MAP = new haxe.ds.StringMap();
        this.ESCAPE_CHAR_MAP.set("'", "'0");
        this.ESCAPE_CHAR_MAP.set(")", "'1");
        this.ESCAPE_CHAR_MAP.set("*", "'2");
        this.ESCAPE_CHAR_MAP.set("!", "'3");
    };
    $hxClasses["googleAnalytics.internals.X10"] = googleAnalytics.internals.X10;
    googleAnalytics.internals.X10.__name__ = true;
    googleAnalytics.internals.X10.prototype = {
        renderUrlString: function() {
            var result = "";
            var $it0 = this.projectData.keys();
            while ($it0.hasNext()) {
                var projectId = $it0.next();
                result += projectId + this.renderProject(this.projectData.get(projectId));
            }
            return result;
        },
        renderProject: function(project) {
            var result = "";
            var needTypeQualifier = false;
            var _g1 = 0,
                _g = this.SET.length;
            while (_g1 < _g) {
                var i = _g1++;
                if (project.exists(this.SET[i])) {
                    if (needTypeQualifier) result += this.SET[i];
                    result += this.renderDataType(project.get(this.SET[i]));
                    needTypeQualifier = false;
                } else needTypeQualifier = true;
            }
            return result;
        },
        renderDataType: function(data) {
            var result = new Array();
            var lastI = 0;
            var _g1 = 0,
                _g = data.length;
            while (_g1 < _g) {
                var i = _g1++;
                var entry = data[i];
                if (entry != null) {
                    var str = "";
                    if (i != this.MINIMUM && i - 1 != lastI) {
                        str += i;
                        str += this.DELIM_NUM_VALUE;
                    }
                    str += this.escapeExtensibleValue(entry);
                    result.push(str);
                }
                lastI = i;
            }
            return this.DELIM_BEGIN + result.join(this.DELIM_SET) + this.DELIM_END;
        },
        escapeExtensibleValue: function(value) {
            var result = "";
            var _g1 = 0,
                _g = value.length;
            while (_g1 < _g) {
                var i = _g1++;
                var $char = value.charAt(i);
                if (this.ESCAPE_CHAR_MAP.exists($char)) result += this.ESCAPE_CHAR_MAP.get($char);
                else result += $char;
            }
            return result;
        },
        clearInternal: function(projectId, type) {
            if (this.projectData.exists(projectId) && this.projectData.get(projectId).exists(type)) this.projectData.get(projectId).remove(type);
        },
        setInternal: function(projectId, type, num, value) {
            if (!this.projectData.exists(projectId)) this.projectData.set(projectId, new haxe.ds.StringMap());
            var p = this.projectData.get(projectId);
            if (!p.exists(type)) p.set(type, new Array());
            p.get(type)[num] = value;
        },
        clearValue: function(projectId) {
            this.clearInternal(projectId, this.VALUE);
        },
        setValue: function(projectId, num, value) {
            this.setInternal(projectId, this.VALUE, num, value);
        },
        clearKey: function(projectId) {
            this.clearInternal(projectId, this.KEY);
        },
        setKey: function(projectId, num, value) {
            this.setInternal(projectId, this.KEY, num, value);
        },
        MINIMUM: null,
        ESCAPE_CHAR_MAP: null,
        DELIM_NUM_VALUE: null,
        DELIM_SET: null,
        DELIM_END: null,
        DELIM_BEGIN: null,
        SET: null,
        VALUE: null,
        KEY: null,
        projectData: null,
        __class__: googleAnalytics.internals.X10
    }
    googleAnalytics.internals.request = {}
    googleAnalytics.internals.request.Request = function(config) {
        this.setConfig(config != null ? config : new googleAnalytics.Config());
    };
    $hxClasses["googleAnalytics.internals.request.Request"] = googleAnalytics.internals.request.Request;
    googleAnalytics.internals.request.Request.__name__ = true;
    googleAnalytics.internals.request.Request.prototype = {
        generateDomainHash: function() {
            var hash = 1;
            if (this.tracker.getAllowHash()) hash = googleAnalytics.internals.Util.generateHash(this.tracker.getDomainName());
            return hash;
        },
        buildCampaignParameters: function(p) {
            var campaign = this.tracker.getCampaign();
            if (campaign == null) return p;
            p.__utmz = this.generateDomainHash() + ".";
            p.__utmz += campaign.getCreationTime().toString() + ".";
            p.__utmz += this.visitor.getVisitCount() + ".";
            p.__utmz += campaign.getResponseCount() + ".";
            var data = "utmcid=" + campaign.getId() + "|" + "utmcsr=" + campaign.getSource() + "|" + "utmgclid=" + campaign.getGClickId() + "|" + "utmdclid=" + campaign.getDClickId() + "|" + "utmccn=" + campaign.getName() + "|" + "utmcmd=" + campaign.getMedium() + "|" + "utmctr=" + campaign.getTerm() + "|" + "utmcct=" + campaign.getContent();
            p.__utmz += StringTools.replace(StringTools.replace(data, "+", "%20"), " ", "%20");
            return p;
        },
        buildCookieParameters: function(p) {
            var domainHash = this.generateDomainHash();
            p.__utma = domainHash + ".";
            p.__utma += this.visitor.getUniqueId() + ".";
            p.__utma += this.visitor.getFirstVisitTime().toString() + ".";
            p.__utma += this.visitor.getPreviousVisitTime().toString() + ".";
            p.__utma += this.visitor.getCurrentVisitTime().toString() + ".";
            p.__utma += this.visitor.getVisitCount();
            p.__utmb = domainHash + ".";
            p.__utmb += this.session.getTrackCount() + ".";
            p.__utmb += 10 + ".";
            p.__utmb += this.session.getStartTime().toString();
            p.__utmc = domainHash;
            var cookies = "__utma=" + p.__utma + ";";
            if (p.__utmz != null) cookies += "+__utmz=" + p.__utmz + ";";
            if (p.__utmv != null) cookies += "+__utmv=" + p.__utmv + ";";
            p.utmcc = cookies;
            return p;
        },
        buildCustomVariablesParameter: function(p) {
            var customVars = this.tracker.getCustomVariables();
            if (customVars == null) return p;
            if (customVars.length > 5) googleAnalytics.Tracker._raiseError("The sum of all custom variables cannot exceed 5 in any given request.", "Request.buildCustomVariablesParameter");
            var x10 = new googleAnalytics.internals.X10();
            var name;
            var value;
            x10.clearKey("8");
            x10.clearKey("9");
            x10.clearKey("11");
            var _g = 0;
            while (_g < customVars.length) {
                var customVar = customVars[_g];
                ++_g;
                name = googleAnalytics.internals.Util.encodeUriComponent(customVar.getName());
                value = googleAnalytics.internals.Util.encodeUriComponent(customVar.getValue());
                x10.setKey("8", customVar.getIndex(), name);
                x10.setKey("9", customVar.getIndex(), value);
                if (customVar.getScope() != 3) x10.setKey("11", customVar.getIndex(), customVar.getScope());
            }
            var eventFragment = x10.renderUrlString();
            if (eventFragment != null) {
                if (p.utme == null) p.utme = eventFragment;
                else p.utme += eventFragment;
            }
            return p;
        },
        buildVisitorParameters: function(p) {
            if (this.visitor.getLocale() != null) p.utmul = StringTools.replace(this.visitor.getLocale(), "_", "-").toLowerCase();
            if (this.visitor.getFlashVersion() != null) p.utmfl = this.visitor.getFlashVersion();
            p.utmje = this.visitor.getJavaEnabled() ? "1" : "0";
            if (this.visitor.getScreenColorDepth() != null) p.utmsc = this.visitor.getScreenColorDepth() + "-bit";
            p.utmsr = this.visitor.getScreenResolution();
            return p;
        },
        buildParameters: function() {
            var p = new googleAnalytics.internals.ParameterHolder();
            p.utmac = this.tracker.getAccountId();
            p.utmhn = this.tracker.getDomainName();
            p.utmt = "" + this.getType();
            p.utmn = googleAnalytics.internals.Util.generate32bitRandom();
            p.utmip = this.visitor.getIpAddress();
            p.utmhid = this.session.getSessionId();
            p.utms = this.session.getTrackCount();
            p = this.buildVisitorParameters(p);
            p = this.buildCustomVariablesParameter(p);
            p = this.buildCampaignParameters(p);
            p = this.buildCookieParameters(p);
            return p;
        },
        getType: function() {
            return null;
        },
        send: function() {
            if (this.config.getEndPointHost() == null) return;
            var parameters = this.buildParameters();
            if (this.visitor != null) {
                this.setUserAgent(this.visitor.getUserAgent());
                parameters.utmvid = this.visitor.getUniqueId();
            }
            var queryString = googleAnalytics.internals.Util.convertToUriComponentEncoding(parameters.toQueryString());
            var url = "http://" + this.config.getEndPointHost() + this.config.getEndPointPath() + "?" + queryString;
            this.increaseTrackCount();
            var img = new Image();
            img.src = url;
        },
        increaseTrackCount: function() {
            this.session.increaseTrackCount();
            if (this.session.getTrackCount() > 500) googleAnalytics.Tracker._raiseError("Google Analytics does not guarantee to process more than 500 requests per session.", "Request.buildHttpRequest");
            if (this.tracker.getCampaign() != null) this.tracker.getCampaign().increaseResponseCount();
        },
        setSession: function(session) {
            this.session = session;
        },
        setVisitor: function(visitor) {
            this.visitor = visitor;
        },
        setTracker: function(tracker) {
            this.tracker = tracker;
        },
        setUserAgent: function(value) {
            this.userAgent = value;
        },
        setConfig: function(config) {
            this.config = config;
        },
        session: null,
        visitor: null,
        tracker: null,
        userAgent: null,
        config: null,
        __class__: googleAnalytics.internals.request.Request
    }
    googleAnalytics.internals.request.EventRequest = function(config) {
        googleAnalytics.internals.request.Request.call(this, config);
    };
    $hxClasses["googleAnalytics.internals.request.EventRequest"] = googleAnalytics.internals.request.EventRequest;
    googleAnalytics.internals.request.EventRequest.__name__ = true;
    googleAnalytics.internals.request.EventRequest.__super__ = googleAnalytics.internals.request.Request;
    googleAnalytics.internals.request.EventRequest.prototype = $extend(googleAnalytics.internals.request.Request.prototype, {
        setEvent: function(event) {
            this.event = event;
        },
        buildParameters: function() {
            var p = googleAnalytics.internals.request.Request.prototype.buildParameters.call(this);
            var x10 = new googleAnalytics.internals.X10();
            x10.clearKey("5");
            x10.clearValue("5");
            x10.setKey("5", 1, this.event.getCategory());
            x10.setKey("5", 2, this.event.getAction());
            if (this.event.getLabel() != null) x10.setKey("5", 3, this.event.getLabel());
            if (this.event.getValue() != 0) x10.setValue("5", 1, this.event.getValue());
            var eventFragment = x10.renderUrlString();
            if (eventFragment != null) {
                if (p.utme == null) p.utme = eventFragment;
                else p.utme += eventFragment;
            }
            if (this.event.getNoninteraction()) p.utmni = 1;
            return p;
        },
        getType: function() {
            return "event";
        },
        event: null,
        __class__: googleAnalytics.internals.request.EventRequest
    });
    googleAnalytics.internals.request.PageviewRequest = function(config) {
        googleAnalytics.internals.request.Request.call(this, config);
    };
    $hxClasses["googleAnalytics.internals.request.PageviewRequest"] = googleAnalytics.internals.request.PageviewRequest;
    googleAnalytics.internals.request.PageviewRequest.__name__ = true;
    googleAnalytics.internals.request.PageviewRequest.__super__ = googleAnalytics.internals.request.Request;
    googleAnalytics.internals.request.PageviewRequest.prototype = $extend(googleAnalytics.internals.request.Request.prototype, {
        setPage: function(page) {
            this.page = page;
        },
        buildParameters: function() {
            var p = googleAnalytics.internals.request.Request.prototype.buildParameters.call(this);
            p.utmp = this.page.getPath();
            p.utmdt = this.page.getTitle();
            if (this.page.getCharset() != null) p.utmcs = this.page.getCharset();
            if (this.page.getReferrer() != null) p.utmr = this.page.getReferrer();
            if (this.page.getLoadTime() != 0) {
                if (p.utmn % 100 < this.config.getSitespeedSampleRate()) {
                    if (p.utme == null) p.utme = "" + 0;
                    else p.utme += 0;
                }
            }
            return p;
        },
        getType: function() {
            return null;
        },
        page: null,
        __class__: googleAnalytics.internals.request.PageviewRequest
    });
    var haxe = {}
    haxe.Json = function() {};
    $hxClasses["haxe.Json"] = haxe.Json;
    haxe.Json.__name__ = true;
    haxe.Json.parse = function(text) {
        return new haxe.Json().doParse(text);
    }
    haxe.Json.prototype = {
        parseNumber: function(c) {
            var start = this.pos - 1;
            var minus = c == 45,
                digit = !minus,
                zero = c == 48;
            var point = false,
                e = false,
                pm = false,
                end = false;
            while (true) {
                c = this.str.charCodeAt(this.pos++);
                switch (c) {
                    case 48:
                        if (zero && !point) this.invalidNumber(start);
                        if (minus) {
                            minus = false;
                            zero = true;
                        }
                        digit = true;
                        break;
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                        if (zero && !point) this.invalidNumber(start);
                        if (minus) minus = false;
                        digit = true;
                        zero = false;
                        break;
                    case 46:
                        if (minus || point) this.invalidNumber(start);
                        digit = false;
                        point = true;
                        break;
                    case 101:
                    case 69:
                        if (minus || zero || e) this.invalidNumber(start);
                        digit = false;
                        e = true;
                        break;
                    case 43:
                    case 45:
                        if (!e || pm) this.invalidNumber(start);
                        digit = false;
                        pm = true;
                        break;
                    default:
                        if (!digit) this.invalidNumber(start);
                        this.pos--;
                        end = true;
                }
                if (end) break;
            }
            var f = Std.parseFloat(HxOverrides.substr(this.str, start, this.pos - start));
            var i = f | 0;
            return i == f ? i : f;
        },
        invalidNumber: function(start) {
            throw "Invalid number at position " + start + ": " + HxOverrides.substr(this.str, start, this.pos - start);
        },
        parseString: function() {
            var start = this.pos;
            var buf = new StringBuf();
            while (true) {
                var c = this.str.charCodeAt(this.pos++);
                if (c == 34) break;
                if (c == 92) {
                    buf.addSub(this.str, start, this.pos - start - 1);
                    c = this.str.charCodeAt(this.pos++);
                    switch (c) {
                        case 114:
                            buf.b += "\r";
                            break;
                        case 110:
                            buf.b += "\n";
                            break;
                        case 116:
                            buf.b += "\t";
                            break;
                        case 98:
                            buf.b += "";
                            break;
                        case 102:
                            buf.b += "";
                            break;
                        case 47:
                        case 92:
                        case 34:
                            buf.b += String.fromCharCode(c);
                            break;
                        case 117:
                            var uc = Std.parseInt("0x" + HxOverrides.substr(this.str, this.pos, 4));
                            this.pos += 4;
                            buf.b += String.fromCharCode(uc);
                            break;
                        default:
                            throw "Invalid escape sequence \\" + String.fromCharCode(c) + " at position " + (this.pos - 1);
                    }
                    start = this.pos;
                } else if (c != c) throw "Unclosed string";
            }
            buf.addSub(this.str, start, this.pos - start - 1);
            return buf.b;
        },
        parseRec: function() {
            while (true) {
                var c = this.str.charCodeAt(this.pos++);
                switch (c) {
                    case 32:
                    case 13:
                    case 10:
                    case 9:
                        break;
                    case 123:
                        var obj = {},
                            field = null,
                            comma = null;
                        while (true) {
                            var c1 = this.str.charCodeAt(this.pos++);
                            switch (c1) {
                                case 32:
                                case 13:
                                case 10:
                                case 9:
                                    break;
                                case 125:
                                    if (field != null || comma == false) this.invalidChar();
                                    return obj;
                                case 58:
                                    if (field == null) this.invalidChar();
                                    obj[field] = this.parseRec();
                                    field = null;
                                    comma = true;
                                    break;
                                case 44:
                                    if (comma) comma = false;
                                    else this.invalidChar();
                                    break;
                                case 34:
                                    if (comma) this.invalidChar();
                                    field = this.parseString();
                                    break;
                                default:
                                    this.invalidChar();
                            }
                        }
                        break;
                    case 91:
                        var arr = [],
                            comma = null;
                        while (true) {
                            var c1 = this.str.charCodeAt(this.pos++);
                            switch (c1) {
                                case 32:
                                case 13:
                                case 10:
                                case 9:
                                    break;
                                case 93:
                                    if (comma == false) this.invalidChar();
                                    return arr;
                                case 44:
                                    if (comma) comma = false;
                                    else this.invalidChar();
                                    break;
                                default:
                                    if (comma) this.invalidChar();
                                    this.pos--;
                                    arr.push(this.parseRec());
                                    comma = true;
                            }
                        }
                        break;
                    case 116:
                        var save = this.pos;
                        if (this.str.charCodeAt(this.pos++) != 114 || this.str.charCodeAt(this.pos++) != 117 || this.str.charCodeAt(this.pos++) != 101) {
                            this.pos = save;
                            this.invalidChar();
                        }
                        return true;
                    case 102:
                        var save = this.pos;
                        if (this.str.charCodeAt(this.pos++) != 97 || this.str.charCodeAt(this.pos++) != 108 || this.str.charCodeAt(this.pos++) != 115 || this.str.charCodeAt(this.pos++) != 101) {
                            this.pos = save;
                            this.invalidChar();
                        }
                        return false;
                    case 110:
                        var save = this.pos;
                        if (this.str.charCodeAt(this.pos++) != 117 || this.str.charCodeAt(this.pos++) != 108 || this.str.charCodeAt(this.pos++) != 108) {
                            this.pos = save;
                            this.invalidChar();
                        }
                        return null;
                    case 34:
                        return this.parseString();
                    case 48:
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                    case 45:
                        return this.parseNumber(c);
                    default:
                        this.invalidChar();
                }
            }
        },
        invalidChar: function() {
            this.pos--;
            throw "Invalid char " + this.str.charCodeAt(this.pos) + " at position " + this.pos;
        },
        doParse: function(str) {
            this.str = str;
            this.pos = 0;
            return this.parseRec();
        },
        pos: null,
        str: null,
        __class__: haxe.Json
    }
    haxe.Timer = function(time_ms) {
        var me = this;
        this.id = setInterval(function() {
            me.run();
        }, time_ms);
    };
    $hxClasses["haxe.Timer"] = haxe.Timer;
    haxe.Timer.__name__ = true;
    haxe.Timer.delay = function(f, time_ms) {
        var t = new haxe.Timer(time_ms);
        t.run = function() {
            t.stop();
            f();
        };
        return t;
    }
    haxe.Timer.prototype = {
        run: function() {
            null;
        },
        stop: function() {
            if (this.id == null) return;
            clearInterval(this.id);
            this.id = null;
        },
        id: null,
        __class__: haxe.Timer
    }
    haxe.ds = {}
    haxe.ds.IntMap = function() {
        this.h = {};
    };
    $hxClasses["haxe.ds.IntMap"] = haxe.ds.IntMap;
    haxe.ds.IntMap.__name__ = true;
    haxe.ds.IntMap.__interfaces__ = [IMap];
    haxe.ds.IntMap.prototype = {
        remove: function(key) {
            if (!this.h.hasOwnProperty(key)) return false;
            delete(this.h[key]);
            return true;
        },
        exists: function(key) {
            return this.h.hasOwnProperty(key);
        },
        get: function(key) {
            return this.h[key];
        },
        set: function(key, value) {
            this.h[key] = value;
        },
        h: null,
        __class__: haxe.ds.IntMap
    }
    haxe.ds.StringMap = function() {
        this.h = {};
    };
    $hxClasses["haxe.ds.StringMap"] = haxe.ds.StringMap;
    haxe.ds.StringMap.__name__ = true;
    haxe.ds.StringMap.__interfaces__ = [IMap];
    haxe.ds.StringMap.prototype = {
        iterator: function() {
            return {
                ref: this.h,
                it: this.keys(),
                hasNext: function() {
                    return this.it.hasNext();
                },
                next: function() {
                    var i = this.it.next();
                    return this.ref["$" + i];
                }
            };
        },
        keys: function() {
            var a = [];
            for (var key in this.h) {
                if (this.h.hasOwnProperty(key)) a.push(key.substr(1));
            }
            return HxOverrides.iter(a);
        },
        remove: function(key) {
            key = "$" + key;
            if (!this.h.hasOwnProperty(key)) return false;
            delete(this.h[key]);
            return true;
        },
        exists: function(key) {
            return this.h.hasOwnProperty("$" + key);
        },
        get: function(key) {
            return this.h["$" + key];
        },
        set: function(key, value) {
            this.h["$" + key] = value;
        },
        h: null,
        __class__: haxe.ds.StringMap
    }
    haxe.io = {}
    haxe.io.Bytes = function(length, b) {
        this.length = length;
        this.b = b;
    };
    $hxClasses["haxe.io.Bytes"] = haxe.io.Bytes;
    haxe.io.Bytes.__name__ = true;
    haxe.io.Bytes.ofData = function(b) {
        return new haxe.io.Bytes(b.length, b);
    }
    haxe.io.Bytes.prototype = {
        b: null,
        length: null,
        __class__: haxe.io.Bytes
    }
    haxe.rtti = {}
    haxe.rtti.Meta = function() {}
    $hxClasses["haxe.rtti.Meta"] = haxe.rtti.Meta;
    haxe.rtti.Meta.__name__ = true;
    haxe.rtti.Meta.getType = function(t) {
        var meta = t.__meta__;
        return meta == null || meta.obj == null ? {} : meta.obj;
    }
    js.Boot = function() {}
    $hxClasses["js.Boot"] = js.Boot;
    js.Boot.__name__ = true;
    js.Boot.__string_rec = function(o, s) {
        if (o == null) return "null";
        if (s.length >= 5) return "<...>";
        var t = typeof(o);
        if (t == "function" && (o.__name__ || o.__ename__)) t = "object";
        switch (t) {
            case "object":
                if (o instanceof Array) {
                    if (o.__enum__) {
                        if (o.length == 2) return o[0];
                        var str = o[0] + "(";
                        s += "\t";
                        var _g1 = 2,
                            _g = o.length;
                        while (_g1 < _g) {
                            var i = _g1++;
                            if (i != 2) str += "," + js.Boot.__string_rec(o[i], s);
                            else str += js.Boot.__string_rec(o[i], s);
                        }
                        return str + ")";
                    }
                    var l = o.length;
                    var i;
                    var str = "[";
                    s += "\t";
                    var _g = 0;
                    while (_g < l) {
                        var i1 = _g++;
                        str += (i1 > 0 ? "," : "") + js.Boot.__string_rec(o[i1], s);
                    }
                    str += "]";
                    return str;
                }
                var tostr;
                try {
                    tostr = o.toString;
                } catch (e) {
                    return "???";
                }
                if (tostr != null && tostr != Object.toString) {
                    var s2 = o.toString();
                    if (s2 != "[object Object]") return s2;
                }
                var k = null;
                var str = "{\n";
                s += "\t";
                var hasp = o.hasOwnProperty != null;
                for (var k in o) {;
                    if (hasp && !o.hasOwnProperty(k)) {
                        continue;
                    }
                    if (k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
                        continue;
                    }
                    if (str.length != 2) str += ", \n";
                    str += s + k + " : " + js.Boot.__string_rec(o[k], s);
                }
                s = s.substring(1);
                str += "\n" + s + "}";
                return str;
            case "function":
                return "<function>";
            case "string":
                return o;
            default:
                return String(o);
        }
    }
    js.Boot.__interfLoop = function(cc, cl) {
        if (cc == null) return false;
        if (cc == cl) return true;
        var intf = cc.__interfaces__;
        if (intf != null) {
            var _g1 = 0,
                _g = intf.length;
            while (_g1 < _g) {
                var i = _g1++;
                var i1 = intf[i];
                if (i1 == cl || js.Boot.__interfLoop(i1, cl)) return true;
            }
        }
        return js.Boot.__interfLoop(cc.__super__, cl);
    }
    js.Boot.__instanceof = function(o, cl) {
        if (cl == null) return false;
        switch (cl) {
            case Int:
                return (o | 0) === o;
            case Float:
                return typeof(o) == "number";
            case Bool:
                return typeof(o) == "boolean";
            case String:
                return typeof(o) == "string";
            case Dynamic:
                return true;
            default:
                if (o != null) {
                    if (typeof(cl) == "function") {
                        if (o instanceof cl) {
                            if (cl == Array) return o.__enum__ == null;
                            return true;
                        }
                        if (js.Boot.__interfLoop(o.__class__, cl)) return true;
                    }
                } else return false;
                if (cl == Class && o.__name__ != null) return true;
                if (cl == Enum && o.__ename__ != null) return true;
                return o.__enum__ == cl;
        }
    }
    js.Boot.__cast = function(o, t) {
        if (js.Boot.__instanceof(o, t)) return o;
        else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
    }
    var neobird = {}
    neobird.flambe = {}
    neobird.flambe.button = {}
    neobird.flambe.button.ButtonBase = function(handler, parameters) {
        this._hitArea = null;
        flambe.display.Sprite.call(this);
        this._onClick = handler;
        if (null == parameters) this._onClickParams = [];
        else this._onClickParams = parameters;
        this._status = neobird.flambe.button.ButtonStatus.DEFAULT;
        this._touchButtonPos = new flambe.math.Point();
        this.eventBubbling = true;
    };
    $hxClasses["neobird.flambe.button.ButtonBase"] = neobird.flambe.button.ButtonBase;
    neobird.flambe.button.ButtonBase.__name__ = true;
    neobird.flambe.button.ButtonBase.__super__ = flambe.display.Sprite;
    neobird.flambe.button.ButtonBase.prototype = $extend(flambe.display.Sprite.prototype, {
        doMobilePress: function() {
            var _g = this;
            if (this._touchDelayedPress) {
                this._touchDelayedPress = false;
                this.onBtnMouseDown(null);
                haxe.Timer.delay(function() {
                    _g.onBtnMouseUp(null);
                }, neobird.flambe.button.ButtonBase.MOBILE_PRESS_MOTION);
            }
        },
        onMouseUp: function(pointerEvent) {
            this.onBtnMouseUp(pointerEvent);
            if (!this.eventBubbling) pointerEvent._stopped = true;
        },
        onMouseDown: function(pointerEvent) {
            this.onBtnMouseDown(pointerEvent);
            if (!this.eventBubbling) pointerEvent._stopped = true;
        },
        onTouchMoved: function(pointerEvent) {
            if (this._touchDelayedPress) {
                if (this._touchButtonPos.distanceToSquared(pointerEvent.viewX, pointerEvent.viewY) > neobird.flambe.button.ButtonBase.MOBILE_PRESS_MOTION) {
                    this._touchDelayedPress = false;
                    this._touchButtonPos.set(0, 0);
                }
            }
        },
        onTouchUp: function(pointerEvent) {
            if (!this.eventBubbling) pointerEvent._stopped = true;
        },
        onTouchDown: function(pointerEvent) {
            this._touchDelayedPress = true;
            this._touchButtonPos.set(pointerEvent.viewX, pointerEvent.viewY);
            haxe.Timer.delay($bind(this, this.doMobilePress), neobird.flambe.button.ButtonBase.MOBILE_PRESS_DELAY);
            if (!this.eventBubbling) pointerEvent._stopped = true;
        },
        hitExtend: function(extendX, extendY) {
            this.set_hitArea(new flambe.math.Rectangle(-extendX, -extendY, this.getNaturalWidth() + 2 * extendX, this.getNaturalHeight() + 2 * extendY));
            return this;
        },
        containsLocal: function(localX, localY) {
            if (null == this._hitArea) return flambe.display.Sprite.prototype.containsLocal.call(this, localX, localY);
            if (this._hitArea.getLocalMatrix().inverseTransform(localX, localY, neobird.flambe.button.ButtonBase._scratchPoint)) {
                localX = neobird.flambe.button.ButtonBase._scratchPoint.x;
                localY = neobird.flambe.button.ButtonBase._scratchPoint.y;
            }
            return this._hitArea.containsLocal(localX, localY);
        },
        onBtnMouseDown: function(downEvent) {
            this._status = neobird.flambe.button.ButtonStatus.PRESSED;
        },
        onBtnMouseUp: function(upEvent) {
            if (flambe.System._platform.getTouch().get_supported()) this._status = neobird.flambe.button.ButtonStatus.DEFAULT;
            else this._status = neobird.flambe.button.ButtonStatus.OVER;
            this._onClick.apply(this._onClick, this._onClickParams);
        },
        onBtnMouseOut: function(outEvent) {
            this._status = neobird.flambe.button.ButtonStatus.DEFAULT;
            flambe.System._platform.getMouse().set_cursor(flambe.input.MouseCursor.Default);
        },
        onBtnMouseOver: function(overEvent) {
            if (flambe.System._platform.getMouse().isDown(flambe.input.MouseButton.Left) || flambe.System._platform.getTouch().get_points().length > 0) this._status = neobird.flambe.button.ButtonStatus.PRESSED;
            else this._status = neobird.flambe.button.ButtonStatus.OVER;
            flambe.System._platform.getMouse().set_cursor(flambe.input.MouseCursor.Button);
        },
        set_hitArea: function(rect) {
            this.hitArea = rect;
            if (null == this._hitArea) {
                this._hitArea = new flambe.display.FillSprite(16777215, this.hitArea.width, this.hitArea.height);
                this._hitArea.setAnchor(-this.hitArea.x, -this.hitArea.y).disablePointer();
                this._hitArea.alpha.set__(0.0);
                if (this.owner != null) this.owner.addChild(new flambe.Entity().add(this._hitArea));
            } else {
                this._hitArea.setSize(this.hitArea.width, this.hitArea.height);
                this._hitArea.setAnchor(-this.hitArea.x, -this.hitArea.y);
            }
            return this.hitArea;
        },
        onAdded: function() {
            flambe.display.Sprite.prototype.onAdded.call(this);
            if (this._hitArea != null) this.owner.addChild(new flambe.Entity().add(this._hitArea));
            var disposer = this.owner._compMap.Disposer_5;
            if (null == disposer) {
                disposer = new flambe.Disposer();
                this.owner.add(disposer);
            }
            if (flambe.System._platform.getTouch().get_supported()) {
                disposer.connect1(this.get_pointerDown(), $bind(this, this.onTouchDown));
                disposer.connect1(this.get_pointerUp(), $bind(this, this.onTouchUp));
                disposer.connect1(flambe.System._platform.getPointer().move, $bind(this, this.onTouchMoved));
            } else {
                disposer.connect1(this.get_pointerDown(), $bind(this, this.onMouseDown));
                disposer.connect1(this.get_pointerUp(), $bind(this, this.onMouseUp));
            }
        },
        _onClickParams: null,
        _onClick: null,
        _status: null,
        eventBubbling: null,
        _hitArea: null,
        hitArea: null,
        _touchDelayedPress: null,
        _touchButtonPos: null,
        __class__: neobird.flambe.button.ButtonBase
    });
    neobird.flambe.button.StdButton = function(imgName, pack, handler, parameters, checkTransparency) {
        if (checkTransparency == null) checkTransparency = true;
        neobird.flambe.button.ButtonBase.call(this, handler, parameters);
        if (null == pack) throw "pack must not be null";
        var imageName = StringTools.trim(imgName);
        if ("" == imageName) throw "invalid imageName '" + imageName + "'";
        this._img = new flambe.display.ImageSprite(pack.getTexture(imageName)).disablePointer();
        this._displayImg = this._img;
        this._imgOver = new flambe.display.ImageSprite(pack.getTexture(imageName + "Mouseover")).disablePointer();
        this._displayImgOver = this._imgOver;
        this._imgPressed = new flambe.display.ImageSprite(pack.getTexture(imageName + "Pressed")).disablePointer();
        this._displayImgPressed = this._imgPressed;
        if (checkTransparency) this._imageEntity = new flambe.Entity().add(this._displayImg).add(new neobird.flambe.display.TransparencyCheck());
        else this._imageEntity = new flambe.Entity().add(this._displayImg);
    };
    $hxClasses["neobird.flambe.button.StdButton"] = neobird.flambe.button.StdButton;
    neobird.flambe.button.StdButton.__name__ = true;
    neobird.flambe.button.StdButton.__super__ = neobird.flambe.button.ButtonBase;
    neobird.flambe.button.StdButton.prototype = $extend(neobird.flambe.button.ButtonBase.prototype, {
        updateDisplay: function() {
            var display;
            var _g = this;
            switch ((_g._status)[1]) {
                case 0:
                    display = this._displayImg;
                    break;
                case 1:
                    display = this._displayImgOver;
                    break;
                case 2:
                    display = this._displayImgPressed;
                    break;
            }
            if (this._imageEntity._compMap.Sprite_1 != display) this._imageEntity.add(display);
        },
        removeTextDisplay: function() {
            if (this._textdisplay != null) {
                if (this._textdisplay.owner != null) this._textdisplay.owner.dispose();
                this._textdisplay.dispose();
                this._textdisplay = null;
            }
        },
        addTextDisplay: function(font, text) {
            this._textdisplay = new flambe.display.TextSprite(font, text);
            this._textdisplay.disablePointer().centerAnchor().setXY(this._img.getNaturalWidth() * 0.5, this._img.getNaturalHeight() * 0.5);
            this._textdisplay.set_align(flambe.display.TextAlign.Center);
            if (this.owner != null) this.owner.addChild(new flambe.Entity().add(this._textdisplay));
        },
        containsLocal: function(localX, localY) {
            if (neobird.flambe.button.ButtonBase.prototype.containsLocal.call(this, localX, localY)) {
                var transparencyCheck = this._imageEntity._compMap.TransparencyCheck_3;
                return this.hitArea != null || null == transparencyCheck || transparencyCheck.hitTest(localX, localY);
            }
            return false;
        },
        getNaturalHeight: function() {
            return this._img.getNaturalHeight();
        },
        getNaturalWidth: function() {
            return this._img.getNaturalWidth();
        },
        onBtnMouseDown: function(downEvent) {
            neobird.flambe.button.ButtonBase.prototype.onBtnMouseDown.call(this, downEvent);
            this.updateDisplay();
        },
        onBtnMouseUp: function(upEvent) {
            neobird.flambe.button.ButtonBase.prototype.onBtnMouseUp.call(this, upEvent);
            this.updateDisplay();
        },
        onBtnMouseOut: function(outEvent) {
            neobird.flambe.button.ButtonBase.prototype.onBtnMouseOut.call(this, outEvent);
            this.updateDisplay();
        },
        onBtnMouseOver: function(overEvent) {
            neobird.flambe.button.ButtonBase.prototype.onBtnMouseOver.call(this, overEvent);
            this.updateDisplay();
        },
        set_text: function(text) {
            if (null == this._textdisplay) this.addTextDisplay(null, text);
            else this._textdisplay.set_text(text);
            return text;
        },
        set_font: function(font) {
            if (null == this._textdisplay) this.addTextDisplay(font);
            else this._textdisplay.set_font(font);
            return font;
        },
        set_alphaThreshold: function(threshold) {
            var transparencyCheck = this._imageEntity._compMap.TransparencyCheck_3;
            if (transparencyCheck != null) transparencyCheck.set_alphaThreshold(threshold);
            return this.get_alphaThreshold();
        },
        get_alphaThreshold: function() {
            var transparencyCheck = this._imageEntity._compMap.TransparencyCheck_3;
            if (transparencyCheck != null) return transparencyCheck._alphaThreshold / 255;
            return 0;
        },
        dispose: function() {
            neobird.flambe.button.ButtonBase.prototype.dispose.call(this);
            this.removeTextDisplay();
            this._img.dispose();
            this._imgOver.dispose();
            this._imgPressed.dispose();
        },
        onAdded: function() {
            neobird.flambe.button.ButtonBase.prototype.onAdded.call(this);
            this.owner.addChild(this._imageEntity);
            if (this._textdisplay != null) this.owner.addChild(new flambe.Entity().add(this._textdisplay));
            this.updateDisplay();
        },
        _imageEntity: null,
        _textdisplay: null,
        _displayImgPressed: null,
        _displayImgOver: null,
        _displayImg: null,
        _imgPressed: null,
        _imgOver: null,
        _img: null,
        __class__: neobird.flambe.button.StdButton
    });
    neobird.flambe.button.ActivateButton = function(imgName, pack, handler, parameters, active) {
        if (active == null) active = false;
        neobird.flambe.button.StdButton.call(this, imgName, pack, handler, parameters);
        var imageName = StringTools.trim(imgName);
        this._imgActive = new flambe.display.ImageSprite(pack.getTexture(imageName + "Active")).disablePointer();
        this.set_active(active);
    };
    $hxClasses["neobird.flambe.button.ActivateButton"] = neobird.flambe.button.ActivateButton;
    neobird.flambe.button.ActivateButton.__name__ = true;
    neobird.flambe.button.ActivateButton.__super__ = neobird.flambe.button.StdButton;
    neobird.flambe.button.ActivateButton.prototype = $extend(neobird.flambe.button.StdButton.prototype, {
        onBtnMouseDown: function(downEvent) {
            if (this.active) neobird.flambe.button.StdButton.prototype.onBtnMouseDown.call(this, downEvent);
        },
        onBtnMouseUp: function(upEvent) {
            if (this.active) neobird.flambe.button.StdButton.prototype.onBtnMouseUp.call(this, upEvent);
        },
        onBtnMouseOut: function(outEvent) {
            neobird.flambe.button.StdButton.prototype.onBtnMouseOut.call(this, outEvent);
        },
        onBtnMouseOver: function(overEvent) {
            if (this.active) neobird.flambe.button.StdButton.prototype.onBtnMouseOver.call(this, overEvent);
        },
        set_active: function(active) {
            if (active) this._displayImg = this._imgActive;
            else this._displayImg = this._img;
            this.updateDisplay();
            this.active = active;
            return this.active;
        },
        dispose: function() {
            neobird.flambe.button.StdButton.prototype.dispose.call(this);
            this._imgActive.dispose();
        },
        _imgActive: null,
        active: null,
        __class__: neobird.flambe.button.ActivateButton
    });
    neobird.flambe.button.ButtonManager = function() {
        this._overButton = null;
        this._touchButtonPos = new flambe.math.Point();
    };
    $hxClasses["neobird.flambe.button.ButtonManager"] = neobird.flambe.button.ButtonManager;
    neobird.flambe.button.ButtonManager.__name__ = true;
    neobird.flambe.button.ButtonManager.initialize = function() {
        flambe.System.init();
        if (null == flambe.System.root._compMap.ButtonManager_4) flambe.System.root.add(new neobird.flambe.button.ButtonManager());
    }
    neobird.flambe.button.ButtonManager.__super__ = flambe.Component;
    neobird.flambe.button.ButtonManager.prototype = $extend(flambe.Component.prototype, {
        onMouseMoved: function(pointerEvent) {
            var button = js.Boot.__instanceof(pointerEvent.hit, neobird.flambe.button.ButtonBase) ? js.Boot.__cast(pointerEvent.hit, neobird.flambe.button.ButtonBase) : null;
            if (button != null && button != this._overButton) {
                if (this._overButton != null) this._overButton.onBtnMouseOut(pointerEvent);
                this._overButton = button;
                this._overButton.onBtnMouseOver(pointerEvent);
            } else if (null == button && this._overButton != null) {
                this._overButton.onBtnMouseOut(pointerEvent);
                this._overButton = null;
            }
        },
        onRemoved: function() {
            flambe.Component.prototype.onRemoved.call(this);
        },
        onAdded: function() {
            flambe.Component.prototype.onAdded.call(this);
            this._disposer = this.owner._compMap.Disposer_5;
            if (null == this._disposer) {
                this._disposer = new flambe.Disposer();
                this.owner.add(this._disposer);
            }
            if (flambe.System._platform.getTouch().get_supported()) {} else this._disposer.connect1(flambe.System._platform.getPointer().move, $bind(this, this.onMouseMoved));
        },
        _disposer: null,
        _touchButtonPos: null,
        _overButton: null,
        get_name: function() {
            return "ButtonManager_4";
        },
        __class__: neobird.flambe.button.ButtonManager
    });
    neobird.flambe.button.ButtonStatus = $hxClasses["neobird.flambe.button.ButtonStatus"] = {
        __ename__: true,
        __constructs__: ["DEFAULT", "OVER", "PRESSED"]
    }
    neobird.flambe.button.ButtonStatus.DEFAULT = ["DEFAULT", 0];
    neobird.flambe.button.ButtonStatus.DEFAULT.toString = $estr;
    neobird.flambe.button.ButtonStatus.DEFAULT.__enum__ = neobird.flambe.button.ButtonStatus;
    neobird.flambe.button.ButtonStatus.OVER = ["OVER", 1];
    neobird.flambe.button.ButtonStatus.OVER.toString = $estr;
    neobird.flambe.button.ButtonStatus.OVER.__enum__ = neobird.flambe.button.ButtonStatus;
    neobird.flambe.button.ButtonStatus.PRESSED = ["PRESSED", 2];
    neobird.flambe.button.ButtonStatus.PRESSED.toString = $estr;
    neobird.flambe.button.ButtonStatus.PRESSED.__enum__ = neobird.flambe.button.ButtonStatus;
    neobird.flambe.button.SpriteButton = function(sprite, handler, parameters) {
        neobird.flambe.button.ButtonBase.call(this, handler, parameters);
        this._sprite = sprite.disablePointer();
        this.x.set_behavior(new flambe.animation.Binding(sprite.x, null));
        this.y.set_behavior(new flambe.animation.Binding(sprite.y, null));
        this.scaleX.set_behavior(new flambe.animation.Binding(sprite.scaleX, null));
        this.scaleY.set_behavior(new flambe.animation.Binding(sprite.scaleY, null));
        this.anchorX.set_behavior(new flambe.animation.Binding(sprite.anchorX, null));
        this.anchorY.set_behavior(new flambe.animation.Binding(sprite.anchorY, null));
    };
    $hxClasses["neobird.flambe.button.SpriteButton"] = neobird.flambe.button.SpriteButton;
    neobird.flambe.button.SpriteButton.__name__ = true;
    neobird.flambe.button.SpriteButton.__super__ = neobird.flambe.button.ButtonBase;
    neobird.flambe.button.SpriteButton.prototype = $extend(neobird.flambe.button.ButtonBase.prototype, {
        getNaturalHeight: function() {
            return this._sprite.getNaturalHeight();
        },
        getNaturalWidth: function() {
            return this._sprite.getNaturalWidth();
        },
        _sprite: null,
        __class__: neobird.flambe.button.SpriteButton
    });
    neobird.flambe.button.ToggleButton = function(imgName, pack, handler, parameters, checkTransparency) {
        if (checkTransparency == null) checkTransparency = true;
        neobird.flambe.button.StdButton.call(this, imgName, pack, handler, parameters, checkTransparency);
        var imageName = StringTools.trim(imgName);
        this._imgOff = new flambe.display.ImageSprite(pack.getTexture(imageName + "Off")).disablePointer();
        this._imgOffOver = new flambe.display.ImageSprite(pack.getTexture(imageName + "OffMouseover")).disablePointer();
        this._imgOffPressed = new flambe.display.ImageSprite(pack.getTexture(imageName + "OffPressed")).disablePointer();
        this.set_on(true);
    };
    $hxClasses["neobird.flambe.button.ToggleButton"] = neobird.flambe.button.ToggleButton;
    neobird.flambe.button.ToggleButton.__name__ = true;
    neobird.flambe.button.ToggleButton.__super__ = neobird.flambe.button.StdButton;
    neobird.flambe.button.ToggleButton.prototype = $extend(neobird.flambe.button.StdButton.prototype, {
        set_on: function(on) {
            if (this.on != on) {
                this._displayImg = on ? this._img : this._imgOff;
                this._displayImgOver = on ? this._imgOver : this._imgOffOver;
                this._displayImgPressed = on ? this._imgPressed : this._imgOffPressed;
                this.updateDisplay();
                this.on = on;
            }
            return on;
        },
        dispose: function() {
            neobird.flambe.button.StdButton.prototype.dispose.call(this);
            this._imgOff.dispose();
            this._imgOffOver.dispose();
            this._imgOffPressed.dispose();
        },
        _imgOffPressed: null,
        _imgOffOver: null,
        _imgOff: null,
        on: null,
        __class__: neobird.flambe.button.ToggleButton
    });
    neobird.flambe.display = {}
    neobird.flambe.display.TransparencyCheck = function(alphaThreshold) {
        if (alphaThreshold == null) alphaThreshold = 0.5;
        this.set_alphaThreshold(alphaThreshold);
    };
    $hxClasses["neobird.flambe.display.TransparencyCheck"] = neobird.flambe.display.TransparencyCheck;
    neobird.flambe.display.TransparencyCheck.__name__ = true;
    neobird.flambe.display.TransparencyCheck.__super__ = flambe.Component;
    neobird.flambe.display.TransparencyCheck.prototype = $extend(flambe.Component.prototype, {
        isTransparentCanvas: function(texture, localX, localY) {
            var pixelAlpha = texture.readPixels(localX | 0, localY | 0, 1, 1).b[3];
            return pixelAlpha < this._alphaThreshold;
        },
        isTransparentWebGL: function(texture, localX, localY) {
            return false;
        },
        hitTest: function(localX, localY) {
            var sprite = this.owner._compMap.Sprite_1;
            if (null == sprite) return false;
            var texture = sprite.texture;
            if (js.Boot.__instanceof(texture, flambe.platform.html.WebGLTexture)) return !this.isTransparentWebGL(texture, localX, localY);
            else if (js.Boot.__instanceof(texture, flambe.platform.html.CanvasTexture)) return !this.isTransparentCanvas(texture, localX, localY);
            return false;
        },
        set_alphaThreshold: function(threshold) {
            threshold = Math.max(0.0, Math.min(1.0, threshold));
            this._alphaThreshold = threshold * 255 | 0;
            return this._alphaThreshold / 255;
        },
        _alphaThreshold: null,
        get_name: function() {
            return "TransparencyCheck_3";
        },
        __class__: neobird.flambe.display.TransparencyCheck
    });
    neobird.flambe.sound = {}
    neobird.flambe.sound.ISoundObserver = function() {}
    $hxClasses["neobird.flambe.sound.ISoundObserver"] = neobird.flambe.sound.ISoundObserver;
    neobird.flambe.sound.ISoundObserver.__name__ = true;
    neobird.flambe.sound.ISoundObserver.prototype = {
        updateMusic: null,
        updateSound: null,
        __class__: neobird.flambe.sound.ISoundObserver
    }
    neobird.flambe.sound.SoundManager = function() {}
    $hxClasses["neobird.flambe.sound.SoundManager"] = neobird.flambe.sound.SoundManager;
    neobird.flambe.sound.SoundManager.__name__ = true;
    neobird.flambe.sound.SoundManager.init = function() {
        if (!neobird.flambe.sound.SoundManager._calledInit) {
            neobird.flambe.sound.SoundManager._calledInit = true;
            neobird.flambe.sound.SoundManager._deviceSoundEnabled = createjs.Sound.initializeDefaultPlugins();
            var tracks = createjs.Sound.getCapability("tracks");
            neobird.flambe.sound.SoundManager._deviceMusicEnabled = neobird.flambe.sound.SoundManager._deviceSoundEnabled && (tracks < 0 || tracks > 1);
            neobird.flambe.sound.SoundManager.soundQueue = new createjs.LoadQueue();
            neobird.flambe.sound.SoundManager.get_soundQueue().installPlugin(createjs.Sound);
            neobird.flambe.sound.SoundManager.get_soundQueue().setMaxConnections(2);
            neobird.flambe.sound.SoundManager.soundOn = neobird.flambe.sound.SoundManager._deviceSoundEnabled;
            neobird.flambe.sound.SoundManager.musicOn = neobird.flambe.sound.SoundManager._deviceMusicEnabled;
            flambe.System.hidden.get_changed().connect(function(hidden, _) {
                if (neobird.flambe.sound.SoundManager._musicChannel != null) {
                    if (hidden) neobird.flambe.sound.SoundManager._musicChannel.pause();
                    else neobird.flambe.sound.SoundManager._musicChannel.resume();
                }
            });
        }
    }
    neobird.flambe.sound.SoundManager.set_observer = function(observer) {
        neobird.flambe.sound.SoundManager.observer = observer;
        if (observer != null) {
            observer.updateMusic(neobird.flambe.sound.SoundManager.musicOn);
            observer.updateSound(neobird.flambe.sound.SoundManager.soundOn);
        }
        return observer;
    }
    neobird.flambe.sound.SoundManager.get_soundQueue = function() {
        return neobird.flambe.sound.SoundManager.soundQueue;
    }
    neobird.flambe.sound.SoundManager.toggleSound = function() {
        neobird.flambe.sound.SoundManager.soundOn = neobird.flambe.sound.SoundManager._deviceSoundEnabled && !neobird.flambe.sound.SoundManager.soundOn;
        if (neobird.flambe.sound.SoundManager.observer != null) neobird.flambe.sound.SoundManager.observer.updateSound(neobird.flambe.sound.SoundManager.soundOn);
    }
    neobird.flambe.sound.SoundManager.toggleMusic = function() {
        neobird.flambe.sound.SoundManager.musicOn = neobird.flambe.sound.SoundManager._deviceMusicEnabled && !neobird.flambe.sound.SoundManager.musicOn;
        if (neobird.flambe.sound.SoundManager.musicOn) neobird.flambe.sound.SoundManager.playMusic();
        if (neobird.flambe.sound.SoundManager._musicChannel != null) neobird.flambe.sound.SoundManager._musicChannel.setMute(!neobird.flambe.sound.SoundManager.musicOn);
        if (neobird.flambe.sound.SoundManager.observer != null) neobird.flambe.sound.SoundManager.observer.updateMusic(neobird.flambe.sound.SoundManager.musicOn);
    }
    neobird.flambe.sound.SoundManager.playMusic = function(musicId, loop) {
        if (loop == null) loop = true;
        if (musicId == null) musicId = "music";
        if (musicId != neobird.flambe.sound.SoundManager._musicId && neobird.flambe.sound.SoundManager._musicChannel != null) {
            neobird.flambe.sound.SoundManager._musicChannel.stop();
            neobird.flambe.sound.SoundManager._musicChannel = null;
        }
        neobird.flambe.sound.SoundManager._musicId = musicId;
        if (neobird.flambe.sound.SoundManager.musicOn && neobird.flambe.sound.SoundManager._deviceMusicEnabled && (null == neobird.flambe.sound.SoundManager._musicChannel || neobird.flambe.sound.SoundManager._musicChannel.playState != "playSucceeded")) {
            neobird.flambe.sound.SoundManager._musicChannel = createjs.Sound.play(musicId, "none", 0, 0, loop ? -1 : 0);
            if (flambe.System.hidden._value) neobird.flambe.sound.SoundManager._musicChannel.pause();
        }
    }
    neobird.flambe.sound.SoundManager.playSound = function(sound, callbackMethod) {
        if (neobird.flambe.sound.SoundManager.soundOn && !flambe.System.hidden._value) {
            var instance = createjs.Sound.play(sound, "any");
            if (callbackMethod != null) instance.addEventListener("complete", callbackMethod);
        } else if (callbackMethod != null) callbackMethod();
    }
    neobird.flambe.util = {}
    neobird.flambe.util.HTMLTools = function() {}
    $hxClasses["neobird.flambe.util.HTMLTools"] = neobird.flambe.util.HTMLTools;
    neobird.flambe.util.HTMLTools.__name__ = true;
    neobird.flambe.util.HTMLTools.prepareClickLink = function(linkId) {
        var clickElement = js.Browser.document.getElementById(linkId);
        if (null == clickElement) return;
        var clickEventHandler = function(evt) {
            var a = js.Browser.document.createElement("a");
            a.setAttribute("href", clickElement.getAttribute("data-href"));
            a.setAttribute("target", "_blank");
            var dispatch = js.Browser.document.createEvent("HTMLEvents");
            dispatch.initEvent("click", true, true);
            a.dispatchEvent(dispatch);
        };
        clickElement.addEventListener("click", clickEventHandler, false);
    }
    neobird.flambe.util.HTMLTools.clickLink = function(linkId) {
        var clickElement = js.Browser.document.getElementById(linkId);
        if (null == clickElement) return;
        var blacklist = new EReg("\\b(iPhone|iPod|iPad|Android)\\b", "");
        if (blacklist.match(js.Browser.window.navigator.userAgent)) {
            var evt = js.Browser.document.createEvent("MouseEvents");
            evt.initEvent("click", true, true);
            clickElement.dispatchEvent(evt);
        } else js.Browser.window.open(clickElement.getAttribute("data-href"), "_blank");
    }

    neobird.flambe.util.Metrics = function() {}
    $hxClasses["neobird.flambe.util.Metrics"] = neobird.flambe.util.Metrics;
    neobird.flambe.util.Metrics.__name__ = true;
    neobird.flambe.util.Metrics.init = function(accountId, gameName, domainName) {

    }
    neobird.flambe.util.Metrics.trackEvent = function(category, action, label, value) {

    }
    neobird.flambe.util.Metrics.trackError = function(action, label, value) {

    }

    neobird.sudoku = {}
    neobird.sudoku.brandingscreen = {}
    neobird.sudoku.brandingscreen.BrandingScreen = function(manager) {
        flambe.scene.Scene.call(this);
        this._manager = manager;
        var library = new flambe.swf.Library(manager.pack, "branding");
        this._movie = library.createSprite("ZibboBrandingClip", true);
        this._movie.setXY(neobird.sudoku.game.AssetData.getX("designres") * 0.5, neobird.sudoku.game.AssetData.getY("designres") * 0.5);
        manager.squareScale(this._movie);
        this._movie.setAnchor(neobird.sudoku.brandingscreen.BrandingScreen.BRANDING_X * 0.5, neobird.sudoku.brandingscreen.BrandingScreen.BRANDING_Y * 0.5);
        this._movie.get_looped().connect($bind(this, this.animationFinished));
        var blacklist = new EReg("\\b(iPhone|iPod|iPad|Android)\\b", "");
        var userAgent = js.Browser.window.navigator.userAgent;
        this._playSound = !blacklist.match(userAgent);
        if (this._playSound) neobird.flambe.sound.SoundManager.get_soundQueue().addEventListener("complete", $bind(this, this.startAnimation));
    };
    $hxClasses["neobird.sudoku.brandingscreen.BrandingScreen"] = neobird.sudoku.brandingscreen.BrandingScreen;
    neobird.sudoku.brandingscreen.BrandingScreen.__name__ = true;
    neobird.sudoku.brandingscreen.BrandingScreen.__super__ = flambe.scene.Scene;
    neobird.sudoku.brandingscreen.BrandingScreen.prototype = $extend(flambe.scene.Scene.prototype, {
        soundFinished: function() {
            this._manager.toPreloader();
        },
        animationFinished: function() {
            this._movie.set_paused(true);
            this._movie.set_position(this._movie.symbol.duration);
            if (!this._playSound) this._manager.toPreloader();
        },
        startAnimation: function(playsound) {
            if (playsound == null) playsound = true;
            if (this._playSound) {
                neobird.flambe.sound.SoundManager.get_soundQueue().removeEventListener("complete", $bind(this, this.startAnimation));
                neobird.flambe.sound.SoundManager.playSound("snd_branding", $bind(this, this.soundFinished));
            }
            this.owner.addChild(new flambe.Entity().add(this._movie));
        },
        dispose: function() {
            flambe.scene.Scene.prototype.dispose.call(this);
        },
        onRemoved: function() {
            flambe.scene.Scene.prototype.onRemoved.call(this);
        },
        onAdded: function() {
            flambe.scene.Scene.prototype.onAdded.call(this);
            this.owner.add(new flambe.display.FillSprite(16777215, neobird.sudoku.game.AssetData.getX("designres"), neobird.sudoku.game.AssetData.getY("designres")));
            if (this._playSound) neobird.flambe.sound.SoundManager.get_soundQueue().loadFile({
                id: "snd_branding",
                src: "assets/sounds/ZibboMix64.ogg|assets/sounds/ZibboMix64.mp3"
            });
            else this.startAnimation();
        },
        _playSound: null,
        _movie: null,
        _manager: null,
        __class__: neobird.sudoku.brandingscreen.BrandingScreen
    });
    neobird.sudoku.game = {}
    neobird.sudoku.game.AssetData = function() {}
    $hxClasses["neobird.sudoku.game.AssetData"] = neobird.sudoku.game.AssetData;
    neobird.sudoku.game.AssetData.__name__ = true;
    neobird.sudoku.game.AssetData.getX = function(assetId) {
        if (null == neobird.sudoku.game.AssetData._assetData) neobird.sudoku.game.AssetData.initAssetData();
        var point = neobird.sudoku.game.AssetData._assetData.get(assetId);
        if (null == point) return 0;
        return point.x * neobird.sudoku.game.AssetData._scaleX;
    }
    neobird.sudoku.game.AssetData.getY = function(assetId) {
        if (null == neobird.sudoku.game.AssetData._assetData) neobird.sudoku.game.AssetData.initAssetData();
        var point = neobird.sudoku.game.AssetData._assetData.get(assetId);
        if (null == point) return 0;
        return point.y * neobird.sudoku.game.AssetData._scaleY;
    }
    neobird.sudoku.game.AssetData.initAssetData = function() {
        neobird.sudoku.game.AssetData._assetData = new haxe.ds.StringMap();
        var _g = 0,
            _g1 = neobird.sudoku.game.AssetData.ASSETDATA;
        while (_g < _g1.length) {
            var asset = _g1[_g];
            ++_g;
            neobird.sudoku.game.AssetData._assetData.set(asset.id, new flambe.math.Point(asset.x, asset.y));
        }
    }
    neobird.sudoku.game.Constants = function() {}
    $hxClasses["neobird.sudoku.game.Constants"] = neobird.sudoku.game.Constants;
    neobird.sudoku.game.Constants.__name__ = true;
    neobird.sudoku.game.Difficulty = $hxClasses["neobird.sudoku.game.Difficulty"] = {
        __ename__: true,
        __constructs__: ["EASY", "MEDIUM", "DIFFICULT"]
    }
    neobird.sudoku.game.Difficulty.EASY = ["EASY", 0];
    neobird.sudoku.game.Difficulty.EASY.toString = $estr;
    neobird.sudoku.game.Difficulty.EASY.__enum__ = neobird.sudoku.game.Difficulty;
    neobird.sudoku.game.Difficulty.MEDIUM = ["MEDIUM", 1];
    neobird.sudoku.game.Difficulty.MEDIUM.toString = $estr;
    neobird.sudoku.game.Difficulty.MEDIUM.__enum__ = neobird.sudoku.game.Difficulty;
    neobird.sudoku.game.Difficulty.DIFFICULT = ["DIFFICULT", 2];
    neobird.sudoku.game.Difficulty.DIFFICULT.toString = $estr;
    neobird.sudoku.game.Difficulty.DIFFICULT.__enum__ = neobird.sudoku.game.Difficulty;
    neobird.sudoku.game.GameManager = function() {
        flambe.System.init();
        neobird.flambe.util.Metrics.init("UA-37424345-19", "Sudoku");
        neobird.flambe.sound.SoundManager.init();
        neobird.flambe.button.ButtonManager.initialize();
        flambe.System._platform.getStage().lockOrientation(flambe.display.Orientation.Landscape);
        if (Math.max(flambe.System._platform.getStage().get_width(), flambe.System._platform.getStage().get_height()) < 150) {
            neobird.sudoku.game.AssetData.suffix = ".android";
            neobird.sudoku.game.AssetData._scaleX = 0.5;
            neobird.sudoku.game.AssetData._scaleY = 0.5;
        } else null;
        this._viewport = new flambe.Entity().add(new flambe.display.Sprite());
        this._viewport.add(new flambe.scene.Director().setSize(neobird.sudoku.game.AssetData.getX("designres"), neobird.sudoku.game.AssetData.getY("designres")));
        flambe.System.root.addChild(this._viewport);
        flambe.System._platform.getStage().resize.connect($bind(this, this.handleResize));
        this.handleResize();
        neobird.flambe.util.HTMLTools.prepareClickLink("click_zibbo");
        neobird.flambe.util.HTMLTools.prepareClickLink("click_neobird");
        this.difficulty = neobird.sudoku.game.Difficulty.MEDIUM;
        this._viewport._compMap.Director_6.unwindToScene(new flambe.Entity().add(new neobird.sudoku.preloader.PrePreloader(this)));
    };
    $hxClasses["neobird.sudoku.game.GameManager"] = neobird.sudoku.game.GameManager;
    neobird.sudoku.game.GameManager.__name__ = true;
    neobird.sudoku.game.GameManager.main = function() {
        new neobird.sudoku.game.GameManager();
    }
    neobird.sudoku.game.GameManager.prototype = {
        handleResize: function() {
            var w = flambe.System._platform.getStage().get_width();
            var h = flambe.System._platform.getStage().get_height();
            var scaleX = w / neobird.sudoku.game.AssetData.getX("coreres");
            var scaleY = h / neobird.sudoku.game.AssetData.getY("coreres");
            var scale = Math.min(scaleX, scaleY);
            var marginX = (w - neobird.sudoku.game.AssetData.getX("designres") * scale) * 0.5;
            var marginY = (h - neobird.sudoku.game.AssetData.getY("designres") * scale) * 0.5;
            this._viewport._compMap.Sprite_1.setScale(scale).setXY(marginX, marginY);
            if (w < h) {
                if (null == this._turnDevice && this.pack != null) {
                    this._turnDevice = new flambe.Entity().add(new neobird.sudoku.game.TurnDevice(this));
                    this._viewport._compMap.Director_6.pushScene(this._turnDevice);
                    this._viewport._compMap.Director_6.unwindToScene(this._turnDevice);
                }
            } else if (this._turnDevice != null && this._viewport._compMap.Director_6.get_topScene() == this._turnDevice) {
                this._viewport._compMap.Director_6.popScene();
                this._turnDevice = null;
            }
        },
        squareScale: function(object) {
            if (Reflect.hasField(object, "scaleX") && Reflect.hasField(object, "scaleY")) {
                var basescale = Math.min(this._viewport._compMap.Sprite_1.scaleX._value, this._viewport._compMap.Sprite_1.scaleY._value);
                (js.Boot.__cast(Reflect.field(object, "scaleX"), flambe.animation.AnimatedFloat)).set__(basescale / this._viewport._compMap.Sprite_1.scaleX._value);
                (js.Boot.__cast(Reflect.field(object, "scaleY"), flambe.animation.AnimatedFloat)).set__(basescale / this._viewport._compMap.Sprite_1.scaleY._value);
            }
        },
        decreaseDifficuty: function() {
            var _g = this;
            switch ((_g.difficulty)[1]) {
                case 0:
                    this.difficulty = neobird.sudoku.game.Difficulty.DIFFICULT;
                    break;
                case 1:
                    this.difficulty = neobird.sudoku.game.Difficulty.EASY;
                    break;
                case 2:
                    this.difficulty = neobird.sudoku.game.Difficulty.MEDIUM;
                    break;
            }
            return this.difficulty;
        },
        increaseDifficuty: function() {
            var _g = this;
            switch ((_g.difficulty)[1]) {
                case 0:
                    this.difficulty = neobird.sudoku.game.Difficulty.MEDIUM;
                    break;
                case 1:
                    this.difficulty = neobird.sudoku.game.Difficulty.DIFFICULT;
                    break;
                case 2:
                    this.difficulty = neobird.sudoku.game.Difficulty.EASY;
                    break;
            }
            return this.difficulty;
        },
        onBranding: function() {
            neobird.flambe.util.HTMLTools.clickLink("click_zibbo");
        },
        onNeoBird: function() {
            neobird.flambe.util.HTMLTools.clickLink("click_neobird");
        },
        onMoreGames: function() {
            neobird.flambe.util.HTMLTools.clickLink("click_zibbo");
            null;
        },
        toGameScreen: function() {
            this._viewport._compMap.Director_6.unwindToScene(new flambe.Entity().add(new neobird.sudoku.gamescreen.GameScreen(this)));
        },
        toHelpScreen: function() {
            this._viewport._compMap.Director_6.unwindToScene(new flambe.Entity().add(new neobird.sudoku.helpscreen.HelpScreen(this)));
        },
        toBranding: function() {
            this._viewport._compMap.Director_6.unwindToScene(new flambe.Entity().add(new neobird.sudoku.brandingscreen.BrandingScreen(this)));
            this.handleResize();
        },
        toPreloader: function() {
            this._viewport._compMap.Director_6.unwindToScene(new flambe.Entity().add(new neobird.sudoku.preloader.Preloader(this)));
        },
        toStartScreen: function() {
            //neobird.flambe.sound.SoundManager.playMusic();

            this._viewport._compMap.Director_6.unwindToScene(new flambe.Entity().add(new neobird.sudoku.startscreen.StartScreen(this)));
        },
        set_pack: function(pack) {
            this.pack = pack;
            if (null == this.ginko_std) this.ginko_std = new flambe.display.Font(pack, "fonts/ginko_std");
            if (null == this.ginko_small) this.ginko_small = new flambe.display.Font(pack, "fonts/ginko_small");
            if (null == this.arial_std) this.arial_std = new flambe.display.Font(pack, "fonts/arial_std");
            if (null == this.playfield_pattern) this.playfield_pattern = new flambe.display.Font(pack, "fonts/playfield_pattern");
            if (null == this.playfield_pattern_wrong) this.playfield_pattern_wrong = new flambe.display.Font(pack, "fonts/playfield_pattern_wrong");
            if (null == this.playfield_user) this.playfield_user = new flambe.display.Font(pack, "fonts/playfield_user");
            if (null == this.playfield_user_wrong) this.playfield_user_wrong = new flambe.display.Font(pack, "fonts/playfield_user_wrong");
            return pack;
        },
        _turnDevice: null,
        _viewport: null,
        playfield_user_wrong: null,
        playfield_user: null,
        playfield_pattern_wrong: null,
        playfield_pattern: null,
        arial_std: null,
        ginko_small: null,
        ginko_std: null,
        difficulty: null,
        pack: null,
        __class__: neobird.sudoku.game.GameManager
    }
    neobird.sudoku.game.TurnDevice = function(manager) {
        flambe.scene.Scene.call(this);
        this._background = new flambe.display.FillSprite(16777215, neobird.sudoku.game.AssetData.getX("designres"), neobird.sudoku.game.AssetData.getY("designres"));
        this._turnDevice = new flambe.display.ImageSprite(manager.pack.getTexture("MobileDeviceTurnAround"));
        manager.squareScale(this._turnDevice);
        this._turnDevice.centerAnchor().setXY(neobird.sudoku.game.AssetData.getX("designres") * 0.5, neobird.sudoku.game.AssetData.getY("designres") * 0.5);
    };
    $hxClasses["neobird.sudoku.game.TurnDevice"] = neobird.sudoku.game.TurnDevice;
    neobird.sudoku.game.TurnDevice.__name__ = true;
    neobird.sudoku.game.TurnDevice.__super__ = flambe.scene.Scene;
    neobird.sudoku.game.TurnDevice.prototype = $extend(flambe.scene.Scene.prototype, {
        onAdded: function() {
            this.owner.add(this._background);
            this.owner.addChild(new flambe.Entity().add(this._turnDevice));
        },
        _background: null,
        _turnDevice: null,
        __class__: neobird.sudoku.game.TurnDevice
    });
    neobird.sudoku.gamescreen = {}
    neobird.sudoku.gamescreen.GameScreen = function(manager) {
        flambe.scene.Scene.call(this);
        this._manager = manager;
        this._background = new flambe.display.ImageSprite(manager.pack.getTexture("screens/Background"));
        this._btnDiffLeft = new neobird.flambe.button.StdButton("buttons/SmallButtonLeft", manager.pack, $bind(this, this.decreaseDifficulty));
        this._btnDiffLeft.setXY(neobird.sudoku.game.AssetData.getX("gameBtnDiffLeft"), neobird.sudoku.game.AssetData.getY("gameBtnDiffLeft"));
        this._btnDiffRight = new neobird.flambe.button.StdButton("buttons/SmallButtonRight", manager.pack, $bind(this, this.increaseDifficulty));
        this._btnDiffRight.setXY(neobird.sudoku.game.AssetData.getX("gameBtnDiffRight"), neobird.sudoku.game.AssetData.getY("gameBtnDiffRight"));
        this._diffBack = new flambe.display.ImageSprite(this._manager.pack.getTexture("img/DifficultyBackground"));
        this._diffBack.setXY(neobird.sudoku.game.AssetData.getX("gameDiffBack"), neobird.sudoku.game.AssetData.getY("gameDiffBack"));
        this._diffText = new flambe.display.TextSprite(this._manager.ginko_small);
        this._diffText.centerAnchor();
        this._diffText.set_align(flambe.display.TextAlign.Center);
        this._diffText.setXY(this._diffBack.getNaturalWidth() * 0.5, this._diffBack.getNaturalHeight() * 0.5);
        this._btnNewGame = new neobird.flambe.button.StdButton("buttons/NewGameButton", manager.pack, $bind(this, this.handleNewGameClick));
        this._btnNewGame.setXY(neobird.sudoku.game.AssetData.getX("gameBtnNewGame"), neobird.sudoku.game.AssetData.getY("gameBtnNewGame"));
        this._btnNewGame.set_font(manager.ginko_small);
        this._btnNewGame.set_text("NEW GAME");
        this._btnMusic = new neobird.flambe.button.ToggleButton(neobird.sudoku.game.Constants.BTN_MUSIC_NAME, manager.pack, $bind(this, this.toggleMusic));
        this._btnMusic.setXY(neobird.sudoku.game.AssetData.getX("btnmusic"), neobird.sudoku.game.AssetData.getY("btnmusic"));
        this._btnSound = new neobird.flambe.button.ToggleButton(neobird.sudoku.game.Constants.BTN_SOUND_NAME, manager.pack, $bind(this, this.toggleSound));
        this._btnSound.setXY(neobird.sudoku.game.AssetData.getX("btnsound"), neobird.sudoku.game.AssetData.getY("btnsound"));
        this._btnExit = new neobird.flambe.button.StdButton("buttons/Exit", manager.pack, $bind(this, this.handleExitClick));
        this._btnExit.setXY(neobird.sudoku.game.AssetData.getX("gameBtnExit"), neobird.sudoku.game.AssetData.getY("gameBtnExit"));
        this._playfield = new neobird.sudoku.gamescreen.Playfield(manager);
        this._playfield.setXY(neobird.sudoku.game.AssetData.getX("gamePlayfield"), neobird.sudoku.game.AssetData.getY("gamePlayfield"));
        this._messagePanel = new neobird.sudoku.gamescreen.MessagePanel(this._manager);
        this._messagePanel.anchorX.set__(neobird.sudoku.game.AssetData.getX("designres") * 0.5);
        this._messagePanel.x.set__(neobird.sudoku.game.AssetData.getX("designres") * 0.5);
        this._messagePanel._clickCatcher.setScaleXY(1 / this._messagePanel.scaleX._value, 1 / this._messagePanel.scaleY._value);
        this._brandingZibbo = new flambe.display.ImageSprite(manager.pack.getTexture("img/ZibboLogo"));
        this._brandingZibbo.setXY(neobird.sudoku.game.AssetData.getX("gameZibbo"), neobird.sudoku.game.AssetData.getY("gameZibbo"));
        this._btnBranding = new neobird.flambe.button.SpriteButton(this._brandingZibbo, $bind(this, this.handleBrandingClick));
        this._result = new neobird.sudoku.gamescreen.ResultDisplay(manager);
        this._notificationEntity = new flambe.Entity();
        this._resultEntity = new flambe.Entity();
    };
    $hxClasses["neobird.sudoku.gamescreen.GameScreen"] = neobird.sudoku.gamescreen.GameScreen;
    neobird.sudoku.gamescreen.GameScreen.__name__ = true;
    neobird.sudoku.gamescreen.GameScreen.__interfaces__ = [neobird.flambe.sound.ISoundObserver];
    neobird.sudoku.gamescreen.GameScreen.__super__ = flambe.scene.Scene;
    neobird.sudoku.gamescreen.GameScreen.prototype = $extend(flambe.scene.Scene.prototype, {
        displayDifficulty: function() {
            var _g = this;
            switch ((_g._manager.difficulty)[1]) {
                case 0:
                    this._diffText.set_text("EASY");
                    break;
                case 1:
                    this._diffText.set_text("MEDIUM");
                    break;
                default:
                    this._diffText.set_text("HARD");
            }
        },
        decreaseDifficulty: function() {
            neobird.flambe.sound.SoundManager.playSound("btn_press");
            this._manager.decreaseDifficuty();
            this.displayDifficulty();
        },
        increaseDifficulty: function() {
            neobird.flambe.sound.SoundManager.playSound("btn_press");
            this._manager.increaseDifficuty();
            this.displayDifficulty();
        },
        toggleSound: function() {
            neobird.flambe.sound.SoundManager.playSound("btn_press");
            neobird.flambe.util.Metrics.trackEvent("Game", "Sound", Std.string(!this._btnSound.on));
            neobird.flambe.sound.SoundManager.toggleSound();
        },
        toggleMusic: function() {
            neobird.flambe.sound.SoundManager.playSound("btn_press");
            neobird.flambe.util.Metrics.trackEvent("Game", "Music", Std.string(!this._btnMusic.on));
            neobird.flambe.sound.SoundManager.toggleMusic();
        },
        handleSolved: function() {
            neobird.flambe.util.Metrics.trackEvent("Game", "GameOver", Std.string(this._manager.difficulty));
            this._resultEntity.add(this._result);
        },
        removeNotification: function() {
            neobird.flambe.sound.SoundManager.playSound("btn_press");
            this._notificationEntity.remove(this._messagePanel);
        },
        handleNewGame: function() {
            neobird.flambe.sound.SoundManager.playSound("btn_press");
            neobird.flambe.util.Metrics.trackEvent("Game", "startGame", Std.string(this._manager.difficulty));
            this._resultEntity.remove(this._result);
            this._playfield.createNewBoard();
            this.removeNotification();
        },
        handleAbortClick: function() {
            neobird.flambe.sound.SoundManager.playSound("btn_press");
            neobird.flambe.util.Metrics.trackEvent("Game", "startScreen");
            this._manager.toStartScreen();
        },
        handleExitClick: function() {
            neobird.flambe.sound.SoundManager.playSound("btn_press");
            neobird.flambe.util.Metrics.trackEvent("Game", "handleAbort", Std.string(this._manager.difficulty));
            this._playfield.hideSelection();
            this._messagePanel.setNotification("QUIT GAME?", "YES", "NO", $bind(this, this.handleAbortClick), $bind(this, this.removeNotification));
            this._notificationEntity.add(this._messagePanel);
        },
        handleNewGameClick: function() {
            neobird.flambe.sound.SoundManager.playSound("btn_press");
            this._playfield.hideSelection();
            this._messagePanel.setNotification("NEW GAME?", "YES", "NO", $bind(this, this.handleNewGame), $bind(this, this.removeNotification));
            this._notificationEntity.add(this._messagePanel);
        },
        handleBrandingClick: function() {
            neobird.flambe.sound.SoundManager.playSound("btn_press");
            neobird.flambe.util.Metrics.trackEvent("Game", "External", "Branding");
            this._manager.onBranding();
        },
        updateMusic: function(musicOn) {
            if (this._btnMusic != null) this._btnMusic.set_on(musicOn);
        },
        updateSound: function(soundOn) {
            if (this._btnSound != null) this._btnSound.set_on(soundOn);
        },
        dispose: function() {
            flambe.scene.Scene.prototype.dispose.call(this);
            this._messagePanel.dispose();
            this._resultEntity.dispose();
        },
        onRemoved: function() {
            flambe.scene.Scene.prototype.onRemoved.call(this);
        },
        onAdded: function() {
            flambe.scene.Scene.prototype.onAdded.call(this);
            neobird.flambe.sound.SoundManager.set_observer(this);
            var disposer = this.owner._compMap.Disposer_5;
            if (null == disposer) {
                disposer = new flambe.Disposer();
                this.owner.add(disposer);
            }
            disposer.connect0(this._playfield.get_solved(), $bind(this, this.handleSolved));
            this.owner.add(this._background);
            this.owner.addChild(new flambe.Entity().add(this._diffBack));
            this._diffBack.owner.addChild(new flambe.Entity().add(this._diffText));
            this.owner.addChild(new flambe.Entity().add(this._btnDiffLeft));
            this.owner.addChild(new flambe.Entity().add(this._btnDiffRight));
            this.owner.addChild(new flambe.Entity().add(this._btnNewGame));
            this.owner.addChild(new flambe.Entity().add(this._btnSound));
            this.owner.addChild(new flambe.Entity().add(this._btnMusic));
            this.owner.addChild(new flambe.Entity().add(this._btnExit));
            this.owner.addChild(new flambe.Entity().add(this._brandingZibbo));
            this.owner.addChild(new flambe.Entity().add(this._btnBranding));
            this.owner.addChild(new flambe.Entity().add(this._playfield));
            this._playfield.createNewBoard();
            this.owner.addChild(this._resultEntity);
            this.owner.addChild(this._notificationEntity);
            this.displayDifficulty();
        },
        _btnBranding: null,
        _brandingZibbo: null,
        _resultEntity: null,
        _notificationEntity: null,
        _messagePanel: null,
        _result: null,
        _playfield: null,
        _diffText: null,
        _diffBack: null,
        _btnDiffRight: null,
        _btnDiffLeft: null,
        _btnNewGame: null,
        _btnExit: null,
        _btnSound: null,
        _btnMusic: null,
        _background: null,
        _manager: null,
        __class__: neobird.sudoku.gamescreen.GameScreen
    });
    neobird.sudoku.gamescreen.MessagePanel = function(manager) {
        flambe.display.Sprite.call(this);
        this._manager = manager;
        var sprite = new flambe.display.Sprite();
        sprite.setXY(neobird.sudoku.game.AssetData.getX("designres") * 0.5, neobird.sudoku.game.AssetData.getY("designres") * 0.5);
        this._notification = new flambe.Entity().add(sprite);
        this._clickCatcher = new flambe.display.FillSprite(0, neobird.sudoku.game.AssetData.getX("designres"), neobird.sudoku.game.AssetData.getY("designres"));
        this._clickCatcher.centerAnchor();
        this._clickCatcher.alpha.set__(0.0);
        this._notification.addChild(new flambe.Entity().add(this._clickCatcher));
        var background = new flambe.display.ImageSprite(manager.pack.getTexture("img/PopUp"));
        background.centerAnchor();
        this._notification.addChild(new flambe.Entity().add(background));
        this._message = new flambe.display.TextSprite(manager.ginko_std, "");
        this._message.centerAnchor();
        this._message.setXY(0, neobird.sudoku.game.AssetData.getY("messagepanelBtn") - background.getNaturalHeight() * 0.2);
        this._message.set_align(flambe.display.TextAlign.Center);
        this._notification.addChild(new flambe.Entity().add(this._message));
        this._btn1 = new neobird.flambe.button.StdButton(neobird.sudoku.gamescreen.MessagePanel.BTN_NAME, manager.pack, $bind(this, this.handleBtn1));
        this._btn1.centerAnchor().setXY(-this._btn1.getNaturalWidth() * 0.75, neobird.sudoku.game.AssetData.getY("messagepanelBtn"));
        this._btn1.set_font(manager.ginko_small);
        this._btn1.hitExtend(neobird.sudoku.game.AssetData.getX("stdBtnExtend"), neobird.sudoku.game.AssetData.getY("stdBtnExtend"));
        this._notification.addChild(new flambe.Entity().add(this._btn1));
        this._btn2 = new neobird.flambe.button.StdButton(neobird.sudoku.gamescreen.MessagePanel.BTN_NAME, manager.pack, $bind(this, this.handleBtn2));
        this._btn2.centerAnchor().setXY(this._btn2.getNaturalWidth() * 0.75, neobird.sudoku.game.AssetData.getY("messagepanelBtn"));
        this._btn2.set_font(manager.ginko_small);
        this._btn2.hitExtend(neobird.sudoku.game.AssetData.getX("stdBtnExtend"), neobird.sudoku.game.AssetData.getY("stdBtnExtend"));
        this._notification.addChild(new flambe.Entity().add(this._btn2));
        //this._btnMoregames = new neobird.flambe.button.StdButton(neobird.sudoku.gamescreen.MessagePanel.BTN_MOREGAMES,manager.pack,$bind(this,this.handleMoreGames));
        //this._btnMoregames.centerAnchor().setXY(0,neobird.sudoku.game.AssetData.getY("messagepanelBtn") + this._btnMoregames.getNaturalHeight() * this._btnMoregames.scaleY._value * 1.2);
        //this._btnMoregames.set_font(manager.ginko_small);
        //this._btnMoregames.set_text("MORE GAMES");
        //this._btnMoregames.hitExtend(neobird.sudoku.game.AssetData.getX("stdBtnExtend"),neobird.sudoku.game.AssetData.getY("stdBtnExtend"));
        //this._notification.addChild(new flambe.Entity().add(this._btnMoregames));
    };
    $hxClasses["neobird.sudoku.gamescreen.MessagePanel"] = neobird.sudoku.gamescreen.MessagePanel;
    neobird.sudoku.gamescreen.MessagePanel.__name__ = true;
    neobird.sudoku.gamescreen.MessagePanel.__super__ = flambe.display.Sprite;
    neobird.sudoku.gamescreen.MessagePanel.prototype = $extend(flambe.display.Sprite.prototype, {
        handleMoreGames: function() {
            neobird.flambe.sound.SoundManager.playSound("btn_press");
            neobird.flambe.util.Metrics.trackEvent("Game", "External", "MoreGames");
            this._manager.onMoreGames();
        },
        handleBtn2: function() {
            if (this.btn2Callback != null) this.btn2Callback();
        },
        handleBtn1: function() {
            if (this.btn1Callback != null) this.btn1Callback();
        },
        setNotification: function(msgText, btn1Text, btn2Text, btn1Callback, btn2Callback) {
            this.btn1Callback = btn1Callback;
            this.btn2Callback = btn2Callback;
            this._message.set_text(msgText);
            this._btn1.set_text(btn1Text);
            this._btn2.set_text(btn2Text);
        },
        dispose: function() {
            flambe.display.Sprite.prototype.dispose.call(this);
        },
        onRemoved: function() {
            flambe.display.Sprite.prototype.onRemoved.call(this);
            this.owner.removeChild(this._notification);
        },
        onAdded: function() {
            flambe.display.Sprite.prototype.onAdded.call(this);
            this.owner.addChild(this._notification);
        },
        _manager: null,
        _clickCatcher: null,
        _message: null,
        btn2Callback: null,
        btn1Callback: null,
        _btnMoregames: null,
        _btn2: null,
        _btn1: null,
        _notification: null,
        __class__: neobird.sudoku.gamescreen.MessagePanel
    });
    neobird.sudoku.gamescreen.Playfield = function(manager) {
        flambe.display.Sprite.call(this);
        this._manager = manager;
        this._playfield = new flambe.display.ImageSprite(manager.pack.getTexture("img/Field"));
        this._playfieldWin = new flambe.display.ImageSprite(manager.pack.getTexture("img/WinField"));
        this._playfieldEntity = new flambe.Entity();
        this._tileEntity = new flambe.Entity();
        this._tiles = new Array();
        var _g = 0;
        while (_g < 9) {
            var col = _g++;
            this._tiles[col] = new Array();
            var _g1 = 0;
            while (_g1 < 9) {
                var row = _g1++;
                var tile = new neobird.sudoku.gamescreen.Tile(manager);
                tile.setXY(neobird.sudoku.game.AssetData.getX("playfieldBoard") + (col + 0.5) * neobird.sudoku.game.AssetData.getX("playfieldTile"), neobird.sudoku.game.AssetData.getY("playfieldBoard") + (row + 0.5) * neobird.sudoku.game.AssetData.getY("playfieldTile"));
                this._tileEntity.addChild(new flambe.Entity().add(tile));
                this._tiles[col][row] = tile;
            }
        }
        this._selection = new neobird.sudoku.gamescreen.Selection(manager, $bind(this, this.handleRing));
        this._currentTile = null;
        this._scratchPoint = new flambe.math.Point();
    };
    $hxClasses["neobird.sudoku.gamescreen.Playfield"] = neobird.sudoku.gamescreen.Playfield;
    neobird.sudoku.gamescreen.Playfield.__name__ = true;
    neobird.sudoku.gamescreen.Playfield.__super__ = flambe.display.Sprite;
    neobird.sudoku.gamescreen.Playfield.prototype = $extend(flambe.display.Sprite.prototype, {
        validateBlock: function(col, row) {
            var blockX = Math.floor(col / 3) * 3;
            var blockY = Math.floor(row / 3) * 3;
            var _g1 = blockX,
                _g = blockX + 3;
            while (_g1 < _g) {
                var i = _g1++;
                var _g3 = blockY,
                    _g2 = blockY + 3;
                while (_g3 < _g2) {
                    var j = _g3++;
                    if (col != i && row != j && this._tiles[col][row].value == this._tiles[i][j].value) return false;
                }
            }
            return true;
        },
        validateRow: function(col, row) {
            var _g = 0;
            while (_g < 9) {
                var i = _g++;
                if (col != i && this._tiles[col][row].value == this._tiles[i][row].value) return false;
            }
            return true;
        },
        validateCol: function(col, row) {
            var _g = 0;
            while (_g < 9) {
                var i = _g++;
                if (row != i && this._tiles[col][row].value == this._tiles[col][i].value) return false;
            }
            return true;
        },
        validate: function() {
            var finished = true;
            var _g = 0;
            while (_g < 9) {
                var col = _g++;
                var _g1 = 0;
                while (_g1 < 9) {
                    var row = _g1++;
                    this._tiles[col][row].set_valid(this._tiles[col][row].value <= 0 || this.validateCol(col, row) && this.validateRow(col, row) && this.validateBlock(col, row));
                    finished = finished && this._tiles[col][row].value > 0 && this._tiles[col][row].valid;
                }
            }
            if (finished) {
                this._playfieldEntity.add(this._playfieldWin);
                if (this._solved != null) this._solved.emit();
            }
        },
        handleRing: function(value) {
            if (null == this._currentTile) return;
            this.owner.removeChild(this._selection.owner);
            this._currentTile.set_value(value);
            this.validate();
            if (!this._currentTile.valid) neobird.flambe.sound.SoundManager.playSound("wrong");
            this._currentTile = null;
        },
        onPlayfieldClick: function(downEvent) {
            this._playfield.getViewMatrix().inverseTransform(downEvent.viewX, downEvent.viewY, this._scratchPoint);
            var col = Math.floor((this._scratchPoint.x - neobird.sudoku.game.AssetData.getX("playfieldBoard")) / neobird.sudoku.game.AssetData.getX("playfieldTile"));
            var row = Math.floor((this._scratchPoint.y - neobird.sudoku.game.AssetData.getY("playfieldBoard")) / neobird.sudoku.game.AssetData.getY("playfieldTile"));
            if (this._tiles[col][row].pattern) return;
            this._currentTile = this._tiles[col][row];
            var yPos = Math.min(this._playfield.getNaturalHeight() - this._selection.anchorY._value, Math.max(this._selection.anchorY._value, neobird.sudoku.game.AssetData.getY("playfieldBoard") + (row + 0.5) * neobird.sudoku.game.AssetData.getY("playfieldTile")));
            this._selection.setXY(neobird.sudoku.game.AssetData.getX("playfieldBoard") + (col + 0.5) * neobird.sudoku.game.AssetData.getX("playfieldTile"), yPos);
            this.owner.addChild(new flambe.Entity().add(this._selection));
        },
        hideSelection: function() {
            this.owner.removeChild(this._selection.owner);
        },
        createNewBoard: function() {
            this._playfieldEntity.add(this._playfield);
            var _g = 0;
            while (_g < 9) {
                var i = _g++;
                var _g1 = 0;
                while (_g1 < 9) {
                    var j = _g1++;
                    this._tiles[i][j].set_value(0);
                    this._tiles[i][j].set_valid(true);
                    this._tiles[i][j].set_pattern(false);
                }
            }
            var tileset = neobird.sudoku.solver.Generator.generate(this._manager.difficulty);
            var _g = 0;
            while (_g < 9) {
                var i = _g++;
                var _g1 = 0;
                while (_g1 < 9) {
                    var j = _g1++;
                    if (tileset[i][j] > 0) {
                        this._tiles[i][j].set_value(tileset[i][j]);
                        this._tiles[i][j].set_pattern(true);
                    }
                }
            }
        },
        get_solved: function() {
            if (null == this._solved) this._solved = new flambe.util.Signal0();
            return this._solved;
        },
        dispose: function() {
            flambe.display.Sprite.prototype.dispose.call(this);
            this._selection.dispose();
            this._pointerDownHandler.dispose();
        },
        onAdded: function() {
            flambe.display.Sprite.prototype.onAdded.call(this);
            this.owner.addChild(this._playfieldEntity);
            this._pointerDownHandler = this._playfield.get_pointerDown().connect($bind(this, this.onPlayfieldClick));
            this.owner.addChild(this._tileEntity);
        },
        _manager: null,
        _currentTile: null,
        _scratchPoint: null,
        _tileEntity: null,
        _tiles: null,
        _pointerDownHandler: null,
        _selection: null,
        _playfieldEntity: null,
        _playfieldWin: null,
        _playfield: null,
        _solved: null,
        __class__: neobird.sudoku.gamescreen.Playfield
    });
    neobird.sudoku.gamescreen.ResultDisplay = function(manager) {
        flambe.display.Sprite.call(this);
        this._manager = manager;
        this._welldone = new flambe.display.ImageSprite(manager.pack.getTexture("img/WellDone"));
        this._welldone.setXY(neobird.sudoku.game.AssetData.getX("gameWellDone"), neobird.sudoku.game.AssetData.getY("gameWellDone"));
        this._sparkleEntity = new flambe.Entity();
        this._sparkles = new Array();
    };
    $hxClasses["neobird.sudoku.gamescreen.ResultDisplay"] = neobird.sudoku.gamescreen.ResultDisplay;
    neobird.sudoku.gamescreen.ResultDisplay.__name__ = true;
    neobird.sudoku.gamescreen.ResultDisplay.__super__ = flambe.display.Sprite;
    neobird.sudoku.gamescreen.ResultDisplay.prototype = $extend(flambe.display.Sprite.prototype, {
        handleSparkleFinished: function(sparkle) {
            this._sparkleEntity.removeChild(sparkle.owner);
            this._sparkles.push(sparkle.owner);
        },
        addSparkle: function() {
            this._sparkleDelay = Math.random() * neobird.sudoku.gamescreen.ResultDisplay.SPARKLE_TIME;
            var sparkle = this._sparkles.pop();
            if (null == sparkle) sparkle = new flambe.Entity().add(new neobird.sudoku.gamescreen.Sparkle(this._manager, $bind(this, this.handleSparkleFinished)));
            var posX = Math.random() * neobird.sudoku.game.AssetData.getX("coreres");
            var posY = Math.random() * neobird.sudoku.game.AssetData.getY("coreres");
            sparkle._compMap.Sprite_1.setXY(posX, posY);
            this._sparkleEntity.addChild(sparkle);
        },
        onUpdate: function(dt) {
            flambe.display.Sprite.prototype.onUpdate.call(this, dt);
            this._sparkleDelay -= dt;
            if (this._sparkleDelay < 0) this.addSparkle();
        },
        onRemoved: function() {
            this.owner.removeChild(this._welldone.owner);
            this.owner.removeChild(this._sparkleEntity);
            flambe.display.Sprite.prototype.onRemoved.call(this);
        },
        onAdded: function() {
            flambe.display.Sprite.prototype.onAdded.call(this);
            this.owner.addChild(new flambe.Entity().add(this._welldone));
            this.owner.addChild(this._sparkleEntity);
            this.addSparkle();
        },
        _sparkleDelay: null,
        _sparkles: null,
        _sparkleEntity: null,
        _welldone: null,
        _manager: null,
        __class__: neobird.sudoku.gamescreen.ResultDisplay
    });
    neobird.sudoku.gamescreen.Selection = function(manager, pressedCallback) {
        flambe.display.Sprite.call(this);
        this._selectionBack = new flambe.display.ImageSprite(manager.pack.getTexture("img/SelectionBack"));
        this._buttonEntity = new flambe.Entity();
        var btn;
        var _g = 1;
        while (_g < 10) {
            var i = _g++;
            btn = new neobird.flambe.button.StdButton("img/Selection", manager.pack, pressedCallback, [i], false);
            btn.set_alphaThreshold(0.1);
            btn.set_font(manager.playfield_user);
            btn.set_text(Std.string(i));
            btn.setXY((i - 1) % 5 * neobird.sudoku.game.AssetData.getX("playfieldTile") + neobird.sudoku.game.AssetData.getX("playfieldSelection"), (i <= 5 ? 0 : 1) * neobird.sudoku.game.AssetData.getY("playfieldTile") + neobird.sudoku.game.AssetData.getY("playfieldSelection"));
            this._buttonEntity.addChild(new flambe.Entity().add(btn));
        }
        btn = new neobird.flambe.button.StdButton("img/Selection", manager.pack, pressedCallback, [0], false);
        btn.set_alphaThreshold(0.1);
        btn.set_font(manager.playfield_user);
        btn.set_text("X");
        btn.setXY(4 * neobird.sudoku.game.AssetData.getX("playfieldTile") + neobird.sudoku.game.AssetData.getX("playfieldSelection"), neobird.sudoku.game.AssetData.getY("playfieldTile") + neobird.sudoku.game.AssetData.getY("playfieldSelection"));
        this._buttonEntity.addChild(new flambe.Entity().add(btn));
        this.setAnchor(0, this._selectionBack.getNaturalHeight() * 0.5);
    };
    $hxClasses["neobird.sudoku.gamescreen.Selection"] = neobird.sudoku.gamescreen.Selection;
    neobird.sudoku.gamescreen.Selection.__name__ = true;
    neobird.sudoku.gamescreen.Selection.__super__ = flambe.display.Sprite;
    neobird.sudoku.gamescreen.Selection.prototype = $extend(flambe.display.Sprite.prototype, {
        onAdded: function() {
            flambe.display.Sprite.prototype.onAdded.call(this);
            this.owner.addChild(new flambe.Entity().add(this._selectionBack));
            this.owner.addChild(this._buttonEntity);
        },
        _buttonEntity: null,
        _selectionBack: null,
        __class__: neobird.sudoku.gamescreen.Selection
    });
    neobird.sudoku.gamescreen.Sparkle = function(manager, finished) {
        flambe.display.ImageSprite.call(this, manager.pack.getTexture("img/SudokuSparkle"));
        this._callbackFinished = finished;
        this.centerAnchor();
        this.setScale(0);
        this.alpha.set__(0);
        this.disablePointer();
    };
    $hxClasses["neobird.sudoku.gamescreen.Sparkle"] = neobird.sudoku.gamescreen.Sparkle;
    neobird.sudoku.gamescreen.Sparkle.__name__ = true;
    neobird.sudoku.gamescreen.Sparkle.__super__ = flambe.display.ImageSprite;
    neobird.sudoku.gamescreen.Sparkle.prototype = $extend(flambe.display.ImageSprite.prototype, {
        handleFinished: function() {
            this.setScale(0);
            this.alpha.set__(0);
            if (this._callbackFinished != null) this._callbackFinished(this);
        },
        onRemoved: function() {
            this._script.dispose();
            this.handleFinished();
            flambe.display.ImageSprite.prototype.onRemoved.call(this);
        },
        onAdded: function() {
            flambe.display.ImageSprite.prototype.onAdded.call(this);
            if (null == this.owner._compMap.Script_2) this.owner.add(new flambe.script.Script());
            var scale = new flambe.script.Parallel([new flambe.script.AnimateTo(this.scaleX, 1, neobird.sudoku.gamescreen.Sparkle.TIME_SPARKLE, flambe.animation.Ease.cubeOut), new flambe.script.AnimateTo(this.scaleY, 1, neobird.sudoku.gamescreen.Sparkle.TIME_SPARKLE, flambe.animation.Ease.cubeOut)]);
            var alpha = new flambe.script.Sequence([new flambe.script.AnimateTo(this.alpha, 1, neobird.sudoku.gamescreen.Sparkle.TIME_SPARKLE / 4 * 3, flambe.animation.Ease.cubeOut), new flambe.script.AnimateTo(this.alpha, 0, neobird.sudoku.gamescreen.Sparkle.TIME_SPARKLE / 4, flambe.animation.Ease.cubeInOut)]);
            var sequence = new flambe.script.Sequence([new flambe.script.Parallel([scale, alpha]), new flambe.script.CallFunction($bind(this, this.handleFinished))]);
            this._script = this.owner._compMap.Script_2.run(sequence);
        },
        _callbackFinished: null,
        _script: null,
        __class__: neobird.sudoku.gamescreen.Sparkle
    });
    neobird.sudoku.gamescreen.Tile = function(manager) {
        flambe.display.TextSprite.call(this, manager.ginko_std);
        this._manager = manager;
        this.centerAnchor();
        this.set_align(flambe.display.TextAlign.Center);
        this.set_value(0);
        this.set_pattern(false);
        this.set_valid(true);
        this.disablePointer();
    };
    $hxClasses["neobird.sudoku.gamescreen.Tile"] = neobird.sudoku.gamescreen.Tile;
    neobird.sudoku.gamescreen.Tile.__name__ = true;
    neobird.sudoku.gamescreen.Tile.__super__ = flambe.display.TextSprite;
    neobird.sudoku.gamescreen.Tile.prototype = $extend(flambe.display.TextSprite.prototype, {
        adjustColor: function() {
            if (!this.valid) {
                if (this.pattern) this.set_font(this._manager.playfield_pattern_wrong);
                else this.set_font(this._manager.playfield_user_wrong);
            } else if (this.pattern) this.set_font(this._manager.playfield_pattern);
            else this.set_font(this._manager.playfield_user);
        },
        set_valid: function(valid) {
            this.valid = valid;
            this.adjustColor();
            return valid;
        },
        set_pattern: function(pattern) {
            this.pattern = pattern;
            this.adjustColor();
            return pattern;
        },
        set_value: function(value) {
            this.value = value;
            if (value > 0) this.set_text(Std.string(value));
            else this.set_text("");
            return value;
        },
        valid: null,
        pattern: null,
        value: null,
        _manager: null,
        __class__: neobird.sudoku.gamescreen.Tile
    });
    neobird.sudoku.helpscreen = {}
    neobird.sudoku.helpscreen.HelpScreen = function(manager) {
        flambe.scene.Scene.call(this);
        this._manager = manager;
        this._background = new flambe.display.ImageSprite(manager.pack.getTexture("screens/Background"));
        this._foreground = new flambe.display.ImageSprite(manager.pack.getTexture("screens/Helpscreen"));
        this._howtoplay = new flambe.display.TextSprite(this._manager.ginko_small);
        this._howtoplay.set_align(flambe.display.TextAlign.Center);
        this._howtoplay.set_text("HOW TO PLAY");
        this._howtoplay.setXY(neobird.sudoku.game.AssetData.getX("helpTopic"), neobird.sudoku.game.AssetData.getY("helpTopic"));
        this._helptext = new flambe.display.TextSprite(this._manager.arial_std);
        this._helptext.setXY(neobird.sudoku.game.AssetData.getX("helpText"), neobird.sudoku.game.AssetData.getY("helpText"));
        this._helptext.set_text("Fill the empty spaces\nwith numbers 1 to 9\n\nIn every Row, Column and 3x3 Cell, each\nnumber may only occur once!\n\n Click on an empty space and choose a number\n from the menu. Selet X to delete the\ncurrent number.");
        this._btnMusic = new neobird.flambe.button.ToggleButton(neobird.sudoku.game.Constants.BTN_MUSIC_NAME, this._manager.pack, $bind(this, this.toggleMusic));
        this._btnMusic.setXY(neobird.sudoku.game.AssetData.getX("btnmusic"), neobird.sudoku.game.AssetData.getY("btnmusic"));
        this._btnSound = new neobird.flambe.button.ToggleButton(neobird.sudoku.game.Constants.BTN_SOUND_NAME, this._manager.pack, $bind(this, this.toggleSound));
        this._btnSound.setXY(neobird.sudoku.game.AssetData.getX("btnsound"), neobird.sudoku.game.AssetData.getY("btnsound"));
        this._btnMainMenu = new neobird.flambe.button.StdButton(neobird.sudoku.helpscreen.HelpScreen.BTN_MENU_NAME, this._manager.pack, $bind(this, this.handleMainmenuClick));
        this._btnMainMenu.set_font(manager.ginko_small);
        this._btnMainMenu.set_text("MAIN MENU");
        this._btnMainMenu.setXY(neobird.sudoku.game.AssetData.getX("helpBtnMain"), neobird.sudoku.game.AssetData.getY("helpBtnMain"));
        this._btnStart = new neobird.flambe.button.StdButton(neobird.sudoku.helpscreen.HelpScreen.BTN_MENU_NAME, this._manager.pack, $bind(this, this.handleStartGameClick));
        this._btnStart.set_font(manager.ginko_small);
        this._btnStart.set_text("START GAME");
        this._btnStart.setXY(neobird.sudoku.game.AssetData.getX("helpBtnStart"), neobird.sudoku.game.AssetData.getY("helpBtnStart"));
        this._brandingZibbo = new flambe.display.ImageSprite(manager.pack.getTexture("img/ZibboLogo"));
        this._brandingZibbo.setXY(neobird.sudoku.game.AssetData.getX("helpZibbo"), neobird.sudoku.game.AssetData.getY("helpZibbo"));
        this._btnBranding = new neobird.flambe.button.SpriteButton(this._brandingZibbo, $bind(this, this.handleBrandingCllick));
    };
    $hxClasses["neobird.sudoku.helpscreen.HelpScreen"] = neobird.sudoku.helpscreen.HelpScreen;
    neobird.sudoku.helpscreen.HelpScreen.__name__ = true;
    neobird.sudoku.helpscreen.HelpScreen.__interfaces__ = [neobird.flambe.sound.ISoundObserver];
    neobird.sudoku.helpscreen.HelpScreen.__super__ = flambe.scene.Scene;
    neobird.sudoku.helpscreen.HelpScreen.prototype = $extend(flambe.scene.Scene.prototype, {
        toggleSound: function() {
            neobird.flambe.sound.SoundManager.playSound("btn_press");
            neobird.flambe.util.Metrics.trackEvent("Help", "Sound", Std.string(!this._btnSound.on));
            neobird.flambe.sound.SoundManager.toggleSound();
        },
        toggleMusic: function() {
            neobird.flambe.sound.SoundManager.playSound("btn_press");
            neobird.flambe.util.Metrics.trackEvent("Help", "Music", Std.string(!this._btnMusic.on));
            neobird.flambe.sound.SoundManager.toggleMusic();
        },
        handleBrandingCllick: function() {
            neobird.flambe.sound.SoundManager.playSound("btn_press");
            neobird.flambe.util.Metrics.trackEvent("Help", "External", "Branding");
            this._manager.onBranding();
        },
        handleStartGameClick: function() {
            neobird.flambe.sound.SoundManager.playSound("btn_press");
            neobird.flambe.util.Metrics.trackEvent("Help", "startGame", Std.string(this._manager.difficulty));
            this._manager.toGameScreen();
        },
        handleMainmenuClick: function() {
            neobird.flambe.sound.SoundManager.playSound("btn_press");
            neobird.flambe.util.Metrics.trackEvent("Help", "startScreen");
            this._manager.toStartScreen();
        },
        updateMusic: function(musicOn) {
            if (this._btnMusic != null) this._btnMusic.set_on(musicOn);
        },
        updateSound: function(soundOn) {
            if (this._btnSound != null) this._btnSound.set_on(soundOn);
        },
        onAdded: function() {
            flambe.scene.Scene.prototype.onAdded.call(this);
            neobird.flambe.sound.SoundManager.set_observer(this);
            this.owner.add(this._background);
            this.owner.addChild(new flambe.Entity().add(this._foreground));
            this.owner.addChild(new flambe.Entity().add(this._howtoplay));
            this.owner.addChild(new flambe.Entity().add(this._helptext));
            this.owner.addChild(new flambe.Entity().add(this._btnMainMenu));
            this.owner.addChild(new flambe.Entity().add(this._btnStart));
            this.owner.addChild(new flambe.Entity().add(this._btnMusic));
            this.owner.addChild(new flambe.Entity().add(this._btnSound));
            this.owner.addChild(new flambe.Entity().add(this._brandingZibbo));
            this.owner.addChild(new flambe.Entity().add(this._btnBranding));
        },
        _btnBranding: null,
        _btnStart: null,
        _btnMainMenu: null,
        _btnSound: null,
        _btnMusic: null,
        _brandingZibbo: null,
        _helptext: null,
        _howtoplay: null,
        _foreground: null,
        _background: null,
        _manager: null,
        __class__: neobird.sudoku.helpscreen.HelpScreen
    });
    neobird.sudoku.preloader = {}
    neobird.sudoku.preloader.PrePreloader = function(manager) {
        flambe.scene.Scene.call(this);
        this._manager = manager;
        this._background = new flambe.Entity().add(new flambe.display.FillSprite(2105376, neobird.sudoku.game.AssetData.getX("designres"), neobird.sudoku.game.AssetData.getY("designres")));
        var manifest = flambe.asset.Manifest.build("bootstrap" + neobird.sudoku.game.AssetData.suffix);
        this._loader = flambe.System._platform.loadAssetPack(manifest);
        var startTime = new Date().getTime();
        this._loader.get(function(_) {
            var loadTime = new Date().getTime() - startTime | 0;
            null;
        });
        this._loader.error.connect(function(message) {});
        this._progressBar = new flambe.Entity().add(new flambe.display.FillSprite(0, neobird.sudoku.game.AssetData.getX("progressBar"), neobird.sudoku.game.AssetData.getY("progressBar")).centerAnchor().setXY(neobird.sudoku.game.AssetData.getX("designres") / 2, neobird.sudoku.game.AssetData.getY("designres") / 2));
        this._progressFill = new flambe.Entity().add(new flambe.display.FillSprite(16777215, 0, neobird.sudoku.game.AssetData.getY("progressBar")));
    };
    $hxClasses["neobird.sudoku.preloader.PrePreloader"] = neobird.sudoku.preloader.PrePreloader;
    neobird.sudoku.preloader.PrePreloader.__name__ = true;
    neobird.sudoku.preloader.PrePreloader.__super__ = flambe.scene.Scene;
    neobird.sudoku.preloader.PrePreloader.prototype = $extend(flambe.scene.Scene.prototype, {
        onLoaderProgress: function() {
            var ratio = this._loader._progress / this._loader._total;
            this._progressFill._compMap.Sprite_1.width.set__(ratio * neobird.sudoku.game.AssetData.getX("progressBar"));
        },
        onLoaderComplete: function(pack) {
            this._manager.set_pack(pack);
            this._manager.toPreloader();
        },
        dispose: function() {
            flambe.scene.Scene.prototype.dispose.call(this);
        },
        onRemoved: function() {
            flambe.scene.Scene.prototype.onRemoved.call(this);
        },
        onAdded: function() {
            flambe.scene.Scene.prototype.onAdded.call(this);
            this.owner.addChild(this._background);
            this.owner.addChild(this._progressBar);
            this._progressBar.addChild(this._progressFill);
            this._loader.get($bind(this, this.onLoaderComplete));
            this._loader.progressChanged.connect($bind(this, this.onLoaderProgress));
        },
        _loader: null,
        _progressFill: null,
        _progressBar: null,
        _background: null,
        _manager: null,
        __class__: neobird.sudoku.preloader.PrePreloader
    });
    neobird.sudoku.preloader.Preloader = function(manager) {
        flambe.scene.Scene.call(this);
        this._manager = manager;
        var manifest = flambe.asset.Manifest.build("game" + neobird.sudoku.game.AssetData.suffix);
        this._loader = flambe.System._platform.loadAssetPack(manifest);
        var startTime = new Date().getTime();
        this._loader.get(function(_) {
            var loadTime = new Date().getTime() - startTime | 0;
            neobird.flambe.util.Metrics.trackEvent("Preloader", "Assets", "loadTime", loadTime);
        });
        this._loader.error.connect(function(message) {
            neobird.flambe.util.Metrics.trackError("Preloader", message);
        });
        this._soundManifest = [{
            id: "music",
            src: "assets/sounds/ephemeralrift.ogg|assets/sounds/ephemeralrift.mp3"
        }, {
            id: "wrong",
            src: "assets/sounds/hokshrt4.ogg|assets/sounds/hokshrt4.mp3"
        }, {
            id: "btn_press",
            src: "assets/sounds/snd_letters_click_4.ogg|assets/sounds/snd_letters_click_4.mp3"
        }];
        this.initScreenAssets();
    };
    $hxClasses["neobird.sudoku.preloader.Preloader"] = neobird.sudoku.preloader.Preloader;
    neobird.sudoku.preloader.Preloader.__name__ = true;
    neobird.sudoku.preloader.Preloader.__super__ = flambe.scene.Scene;
    neobird.sudoku.preloader.Preloader.prototype = $extend(flambe.scene.Scene.prototype, {
        initScreenAssets: function() {
            this._background = new flambe.display.ImageSprite(this._manager.pack.getTexture("Background"));
            this._foreground = new flambe.display.ImageSprite(this._manager.pack.getTexture("Helpscreen"));
            this._title = new flambe.display.ImageSprite(this._manager.pack.getTexture("Headline"));
            this._title.setXY(neobird.sudoku.game.AssetData.getX("preloadTitle"), neobird.sudoku.game.AssetData.getY("preloadTitle"));
            //this._brandingNeobird = new flambe.display.ImageSprite(this._manager.pack.getTexture("NeobirdLogo"));
            //this._brandingNeobird.setXY(neobird.sudoku.game.AssetData.getX("brandingNeobird"),neobird.sudoku.game.AssetData.getY("brandingNeobird"));
            //this._brandingZibbo = new flambe.display.ImageSprite(this._manager.pack.getTexture("ZibboLogo"));
            //this._brandingZibbo.setXY(neobird.sudoku.game.AssetData.getX("brandingZibbo"),neobird.sudoku.game.AssetData.getY("brandingZibbo"));
            this._btnStart = new neobird.flambe.button.ActivateButton(neobird.sudoku.preloader.Preloader.BTN_START_NAME, this._manager.pack, ($_ = this._manager, $bind($_, $_.toStartScreen)));
            this._btnStart.centerAnchor();
            this._btnStart.setXY(neobird.sudoku.game.AssetData.getX("designres") * 0.5, neobird.sudoku.game.AssetData.getY("designres") * 0.5);
            this._btnStart.hitExtend(neobird.sudoku.game.AssetData.getX("stdBtnExtend"), neobird.sudoku.game.AssetData.getY("stdBtnExtend"));
            this._btnStart.set_font(this._manager.ginko_std);
            this._btnStart.get_pointerDown().connect(function(_) {
                neobird.flambe.sound.SoundManager.playSound("btn_press");
            });
            //this._btnNeobird = new neobird.flambe.button.SpriteButton(this._brandingNeobird,$bind(this,this.handleNeobirdClick));
            //this._btnZibbo = new neobird.flambe.button.SpriteButton(this._brandingZibbo,$bind(this,this.handleBrandingClick));
        },
        handleBrandingClick: function() {
            neobird.flambe.util.Metrics.trackEvent("Preloader", "External", "Branding");
            this._manager.onBranding();
        },
        handleNeobirdClick: function() {
            neobird.flambe.util.Metrics.trackEvent("Preloader", "External", "Neobird");
            this._manager.onNeoBird();
        },
        onSoundLoaded: function(_) {
            this._btnStart.set_text("START");
            this._btnStart.set_active(true);
        },
        onSoundProgress: function(evt) {
            var ratio = (neobird.sudoku.preloader.Preloader.ASSET_SPLIT + (1 - neobird.sudoku.preloader.Preloader.ASSET_SPLIT) * evt.progress) * 100 | 0;
            this._btnStart.set_text(StringTools.lpad(ratio + " %", " ", 5));
        },
        onAssetsLoaded: function(pack) {
            this._manager.set_pack(pack);
            neobird.flambe.sound.SoundManager.get_soundQueue().addEventListener("complete", $bind(this, this.onSoundLoaded));
            neobird.flambe.sound.SoundManager.get_soundQueue().addEventListener("progress", $bind(this, this.onSoundProgress));
            var startTime = new Date().getTime();
            neobird.flambe.sound.SoundManager.get_soundQueue().addEventListener("complete", function(_) {
                var loadTime = new Date().getTime() - startTime | 0;
                neobird.flambe.util.Metrics.trackEvent("Preloader", "Sound", "loadTime", loadTime);
            });
            neobird.flambe.sound.SoundManager.get_soundQueue().addEventListener("error", function(evt) {
                neobird.flambe.util.Metrics.trackError("Preloader", evt.error);
            });
            neobird.flambe.sound.SoundManager.get_soundQueue().loadManifest(this._soundManifest);
        },
        onAssetsProgress: function() {
            var ratio = this._loader._progress / this._loader._total * neobird.sudoku.preloader.Preloader.ASSET_SPLIT * 100 | 0;
            this._btnStart.set_text(StringTools.lpad(ratio + " %", " ", 5));
        },
        dispose: function() {
            flambe.scene.Scene.prototype.dispose.call(this);
        },
        onRemoved: function() {
            flambe.scene.Scene.prototype.onRemoved.call(this);
        },
        onAdded: function() {
            flambe.scene.Scene.prototype.onAdded.call(this);
            this.owner.add(this._background);
            this.owner.addChild(new flambe.Entity().add(this._foreground));
            this.owner.addChild(new flambe.Entity().add(this._title));
            //this.owner.addChild(new flambe.Entity().add(this._brandingNeobird));
            //this.owner.addChild(new flambe.Entity().add(this._btnNeobird));
            //this.owner.addChild(new flambe.Entity().add(this._brandingZibbo));
            //this.owner.addChild(new flambe.Entity().add(this._btnZibbo));
            this.owner.addChild(new flambe.Entity().add(this._btnStart));
            this._loader.get($bind(this, this.onAssetsLoaded));
            this._loader.progressChanged.connect($bind(this, this.onAssetsProgress));
        },
        _btnZibbo: null,
        _btnNeobird: null,
        _btnStart: null,
        _title: null,
        _brandingNeobird: null,
        _brandingZibbo: null,
        _foreground: null,
        _background: null,
        _soundManifest: null,
        _loader: null,
        _manager: null,
        __class__: neobird.sudoku.preloader.Preloader
    });
    neobird.sudoku.solver = {}
    neobird.sudoku.solver.StraightIterator = function() {
        this._index = 0;
    };
    $hxClasses["neobird.sudoku.solver.StraightIterator"] = neobird.sudoku.solver.StraightIterator;
    neobird.sudoku.solver.StraightIterator.__name__ = true;
    neobird.sudoku.solver.StraightIterator.prototype = {
        next: function() {
            return this._index++;
        },
        hasNext: function() {
            return this._index < neobird.sudoku.game.Constants.DIM_BOARD;
        },
        _index: null,
        __class__: neobird.sudoku.solver.StraightIterator
    }
    neobird.sudoku.solver.RandomIterator = function() {
        var available = new Array();
        var _g1 = 0,
            _g = neobird.sudoku.game.Constants.DIM_BOARD;
        while (_g1 < _g) {
            var i = _g1++;
            available.push(i);
        }
        this._order = new Array();
        while (available.length > 0) this._order.push(available.splice(Std.random(available.length), 1)[0]);
    };
    $hxClasses["neobird.sudoku.solver.RandomIterator"] = neobird.sudoku.solver.RandomIterator;
    neobird.sudoku.solver.RandomIterator.__name__ = true;
    neobird.sudoku.solver.RandomIterator.prototype = {
        next: function() {
            return this._order.pop();
        },
        hasNext: function() {
            return this._order.length > 0;
        },
        _order: null,
        __class__: neobird.sudoku.solver.RandomIterator
    }
    neobird.sudoku.solver.BacktrackSolver = function() {
        this._terminal = new Array();
        var _g1 = 0,
            _g = neobird.sudoku.game.Constants.DIM_BOARD;
        while (_g1 < _g) {
            var i = _g1++;
            this._terminal.push(new neobird.sudoku.solver.Square(i));
        }
    };
    $hxClasses["neobird.sudoku.solver.BacktrackSolver"] = neobird.sudoku.solver.BacktrackSolver;
    neobird.sudoku.solver.BacktrackSolver.__name__ = true;
    neobird.sudoku.solver.BacktrackSolver.get_instance = function() {
        if (null == neobird.sudoku.solver.BacktrackSolver.instance) neobird.sudoku.solver.BacktrackSolver.instance = new neobird.sudoku.solver.BacktrackSolver();
        return neobird.sudoku.solver.BacktrackSolver.instance;
    }
    neobird.sudoku.solver.BacktrackSolver.prototype = {
        propagate: function(squares) {},
        hasMultipleSolutions: function(squares, candidate) {
            var value = candidate.value;
            this.purge(squares);
            var _g1 = 1,
                _g = neobird.sudoku.game.Constants.DIM_NUMBERS + 1;
            while (_g1 < _g) {
                var i = _g1++;
                if (i == value) continue;
                candidate.setPattern(i);
                if (this.conflicts(squares, candidate)) continue;
                if (this.solve(squares)) {
                    candidate.setPattern(value);
                    return true;
                }
            }
            candidate.setPattern(value);
            return false;
        },
        violatesRestrictions: function(squares, candidate, givenLimit, givenLimitTotal) {
            var givenTotal = 0;
            var givenCol = new Array();
            var givenRow = new Array();
            var _g1 = 0,
                _g = neobird.sudoku.game.Constants.DIM_REGION;
            while (_g1 < _g) {
                var i = _g1++;
                givenCol.push(0);
                givenRow.push(0);
            }
            var _g = 0;
            while (_g < squares.length) {
                var square = squares[_g];
                ++_g;
                if (square == candidate) continue;
                if (square.pattern) {
                    givenTotal++;
                    givenCol[square.col]++;
                    givenRow[square.row]++;
                }
            }
            if (givenTotal < givenLimitTotal) return true;
            var _g = 0;
            while (_g < givenCol.length) {
                var given = givenCol[_g];
                ++_g;
                if (given < givenLimit) return true;
            }
            var _g = 0;
            while (_g < givenRow.length) {
                var given = givenRow[_g];
                ++_g;
                if (given < givenLimit) return true;
            }
            return false;
        },
        digHoles: function(squares, difficulty) {
            var digIterator;
            var givenLimit;
            var givenLimitTotal;
            switch ((difficulty)[1]) {
                case 0:
                    digIterator = new neobird.sudoku.solver.RandomIterator();
                    givenLimit = 4;
                    givenLimitTotal = 39;
                    break;
                case 1:
                    digIterator = new neobird.sudoku.solver.RandomIterator();
                    givenLimit = 2;
                    givenLimitTotal = 28;
                    break;
                case 2:
                    digIterator = new neobird.sudoku.solver.StraightIterator();
                    givenLimit = 0;
                    givenLimitTotal = 17;
                    break;
            }
            var canBeDug = new Array();
            while (digIterator.hasNext()) {
                var i = digIterator.next();
                canBeDug.push(squares[i]);
                squares[i].setPattern(squares[i].value);
            }
            var digCount = 0;
            var digCandidate;
            var value;
            while (canBeDug.length > 0) {
                digCandidate = canBeDug.pop();
                if (this.violatesRestrictions(squares, digCandidate, givenLimit, givenLimitTotal)) continue;
                if (this.hasMultipleSolutions(squares, digCandidate)) continue;
                digCount++;
                digCandidate.setPattern(0);
            }
            var given = 0;
            var _g = 0;
            while (_g < squares.length) {
                var square = squares[_g];
                ++_g;
                if (square.pattern) given++;
            }
            null;
        },
        conflicts: function(squares, test) {
            var _g = 0;
            while (_g < squares.length) {
                var square = squares[_g];
                ++_g;
                if (square != test && (square.col == test.col || square.row == test.row || square.region == test.region) && square.value == test.value) return true;
            }
            return false;
        },
        solve: function(squares) {
            this.purge(squares);
            var boardPos = 0;
            while (boardPos < neobird.sudoku.game.Constants.DIM_BOARD)
                if (squares[boardPos].pickValue()) {
                    if (!this.conflicts(squares, squares[boardPos])) boardPos++;
                } else {
                    squares[boardPos].set_value(0);
                    do boardPos--; while (boardPos >= 0 && squares[boardPos].pattern);
                    if (boardPos < 0) return false;
                }
            return true;
        },
        purge: function(squares) {
            var _g = 0;
            while (_g < squares.length) {
                var square = squares[_g];
                ++_g;
                square.set_value(0);
            }
        },
        diversifyPattern: function(squares) {
            var index;
            var value;
            var _g = 0;
            while (_g < 11) {
                var i = _g++;
                do index = Std.random(neobird.sudoku.game.Constants.DIM_BOARD); while (squares[index].pattern);
                do squares[index].pickValue(); while (this.conflicts(squares, squares[index]));
                squares[index].setPattern(squares[index].value);
            }
        },
        generate: function(sudoku, difficulty) {
            var _g = 0,
                _g1 = this._terminal;
            while (_g < _g1.length) {
                var square = _g1[_g];
                ++_g;
                square.setPattern(0);
            }
            this.diversifyPattern(this._terminal);
            this.solve(this._terminal);
            this.digHoles(this._terminal, difficulty);
            this.propagate(this._terminal);
            var _g = 0,
                _g1 = this._terminal;
            while (_g < _g1.length) {
                var square = _g1[_g];
                ++_g;
                if (square.pattern) sudoku[square.col][square.row] = square.value;
                else sudoku[square.col][square.row] = 0;
            }
        },
        _terminal: null,
        __class__: neobird.sudoku.solver.BacktrackSolver
    }
    neobird.sudoku.solver.Generator = function() {}
    $hxClasses["neobird.sudoku.solver.Generator"] = neobird.sudoku.solver.Generator;
    neobird.sudoku.solver.Generator.__name__ = true;
    neobird.sudoku.solver.Generator.generate = function(difficulty) {
        var sudoku = new Array();
        var _g = 0;
        while (_g < 9) {
            var col = _g++;
            sudoku[col] = new Array();
            var _g1 = 0;
            while (_g1 < 9) {
                var row = _g1++;
                sudoku[col][row] = 0;
            }
        }
        var startTime = new Date().getTime();
        neobird.sudoku.solver.BacktrackSolver.get_instance().generate(sudoku, difficulty);
        var generateTime = new Date().getTime() - startTime | 0;
        return sudoku;
    }
    neobird.sudoku.solver.Square = function(index) {
        this.row = index % neobird.sudoku.game.Constants.DIM_NUMBERS;
        this.col = index / neobird.sudoku.game.Constants.DIM_NUMBERS | 0;
        this.region = (this.row / neobird.sudoku.game.Constants.DIM_SUDOKU | 0) + (this.col / neobird.sudoku.game.Constants.DIM_SUDOKU | 0) * neobird.sudoku.game.Constants.DIM_SUDOKU;
        this.availables = new Array();
        this.set_value(0);
        this.pattern = false;
    };
    $hxClasses["neobird.sudoku.solver.Square"] = neobird.sudoku.solver.Square;
    neobird.sudoku.solver.Square.__name__ = true;
    neobird.sudoku.solver.Square.prototype = {
        set_value: function(value) {
            if (!this.pattern) {
                this.value = value;
                if (0 == value) {
                    this.availables.splice(0, this.availables.length);
                    var _g1 = 1,
                        _g = neobird.sudoku.game.Constants.DIM_NUMBERS + 1;
                    while (_g1 < _g) {
                        var num = _g1++;
                        this.availables.push(num);
                    }
                }
            }
            return value;
        },
        pickValue: function() {
            if (this.pattern) return true;
            if (0 == this.availables.length) return false;
            this.set_value(this.availables.splice(Std.random(this.availables.length), 1)[0]);
            return true;
        },
        setPattern: function(value) {
            this.pattern = false;
            this.set_value(value);
            this.pattern = value != 0;
        },
        availables: null,
        pattern: null,
        value: null,
        region: null,
        col: null,
        row: null,
        __class__: neobird.sudoku.solver.Square
    }
    neobird.sudoku.startscreen = {}
    neobird.sudoku.startscreen.StartScreen = function(manager) {
        flambe.scene.Scene.call(this);
        this._manager = manager;
        this._background = new flambe.display.ImageSprite(manager.pack.getTexture("screens/Background"));
        this._title = new flambe.display.ImageSprite(manager.pack.getTexture("img/Headline"));
        this._title.setXY(neobird.sudoku.game.AssetData.getX("startTitle"), neobird.sudoku.game.AssetData.getY("startTitle"));
        this._btnStart = new neobird.flambe.button.StdButton(neobird.sudoku.startscreen.StartScreen.BTN_START_NAME, manager.pack, $bind(this, this.handleStartGameClick));
        this._btnStart.setXY(neobird.sudoku.game.AssetData.getX("startBtnStart"), neobird.sudoku.game.AssetData.getY("startBtnStart"));
        this._btnStart.set_font(this._manager.ginko_std);
        this._btnStart.set_text("START");
        this._btnHelp = new neobird.flambe.button.StdButton(neobird.sudoku.startscreen.StartScreen.BTN_HELP_NAME, manager.pack, $bind(this, this.handleHelpScreenClick));
        this._btnHelp.setXY(neobird.sudoku.game.AssetData.getX("startBtnHelp"), neobird.sudoku.game.AssetData.getY("startBtnHelp"));
        this._btnHelp.set_font(this._manager.ginko_std);
        this._btnHelp.set_text("HELP");
        //this._btnMoregames = new neobird.flambe.button.StdButton(neobird.sudoku.startscreen.StartScreen.BTN_MORE_NAME,manager.pack,$bind(this,this.handleMoregamesClick));
        //this._btnMoregames.setXY(neobird.sudoku.game.AssetData.getX("startBtnMoregames"),neobird.sudoku.game.AssetData.getY("startBtnMoregames"));
        //this._btnMoregames.set_font(this._manager.ginko_small);
        //this._btnMoregames.set_text("MORE GAMES");
        this._btnDiffLeft = new neobird.flambe.button.StdButton("buttons/BigButtonLeft", manager.pack, $bind(this, this.decreaseDifficulty));
        this._btnDiffLeft.setXY(neobird.sudoku.game.AssetData.getX("startBtnLeft"), neobird.sudoku.game.AssetData.getY("startBtnLeft"));
        this._btnDiffRight = new neobird.flambe.button.StdButton("buttons/BigButtonRight", manager.pack, $bind(this, this.increaseDifficulty));
        this._btnDiffRight.setXY(neobird.sudoku.game.AssetData.getX("startBtnRight"), neobird.sudoku.game.AssetData.getY("startBtnRight"));
        this._diffBack = new flambe.display.ImageSprite(manager.pack.getTexture("img/DifficultyBackgroundMain"));
        this._diffBack.setXY(neobird.sudoku.game.AssetData.getX("startDiffBack"), neobird.sudoku.game.AssetData.getY("startDiffBack"));
        this._diffText = new flambe.display.TextSprite(this._manager.ginko_std);
        this._diffText.centerAnchor();
        this._diffText.set_align(flambe.display.TextAlign.Center);
        this._diffText.setXY(this._diffBack.getNaturalWidth() * 0.5, this._diffBack.getNaturalHeight() * 0.5);
        //this._brandingNeobird = new flambe.display.ImageSprite(manager.pack.getTexture("img/NeobirdLogo"));
        //this._brandingNeobird.setXY(neobird.sudoku.game.AssetData.getX("brandingNeobird"),neobird.sudoku.game.AssetData.getY("brandingNeobird"));
        //this._btnNeoBird = new neobird.flambe.button.SpriteButton(this._brandingNeobird,$bind(this,this.handleNeobirdClick));
        //this._brandingZibbo = new flambe.display.ImageSprite(manager.pack.getTexture("img/ZibboLogo"));
        //this._brandingZibbo.setXY(neobird.sudoku.game.AssetData.getX("brandingZibbo"),neobird.sudoku.game.AssetData.getY("brandingZibbo"));
        //this._btnZibbo = new neobird.flambe.button.SpriteButton(this._brandingZibbo,$bind(this,this.handleBrandingClick));
        this._btnMusic = new neobird.flambe.button.ToggleButton(neobird.sudoku.game.Constants.BTN_MUSIC_NAME, this._manager.pack, $bind(this, this.toggleMusic));
        this._btnMusic.setXY(neobird.sudoku.game.AssetData.getX("btnmusic"), neobird.sudoku.game.AssetData.getY("btnmusic"));
        this._btnSound = new neobird.flambe.button.ToggleButton(neobird.sudoku.game.Constants.BTN_SOUND_NAME, this._manager.pack, $bind(this, this.toggleSound));
        this._btnSound.setXY(neobird.sudoku.game.AssetData.getX("btnsound"), neobird.sudoku.game.AssetData.getY("btnsound"));
    };
    $hxClasses["neobird.sudoku.startscreen.StartScreen"] = neobird.sudoku.startscreen.StartScreen;
    neobird.sudoku.startscreen.StartScreen.__name__ = true;
    neobird.sudoku.startscreen.StartScreen.__interfaces__ = [neobird.flambe.sound.ISoundObserver];
    neobird.sudoku.startscreen.StartScreen.__super__ = flambe.scene.Scene;
    neobird.sudoku.startscreen.StartScreen.prototype = $extend(flambe.scene.Scene.prototype, {
        displayDifficulty: function() {
            var _g = this;
            switch ((_g._manager.difficulty)[1]) {
                case 0:
                    this._diffText.set_text("EASY");
                    break;
                case 1:
                    this._diffText.set_text("MEDIUM");
                    break;
                default:
                    this._diffText.set_text("HARD");
            }
        },
        decreaseDifficulty: function() {
            neobird.flambe.sound.SoundManager.playSound("btn_press");
            this._manager.decreaseDifficuty();
            this.displayDifficulty();
        },
        increaseDifficulty: function() {
            neobird.flambe.sound.SoundManager.playSound("btn_press");
            this._manager.increaseDifficuty();
            this.displayDifficulty();
        },
        toggleSound: function() {
            neobird.flambe.sound.SoundManager.playSound("btn_press");
            neobird.flambe.util.Metrics.trackEvent("Start", "Sound", Std.string(!this._btnSound.on));
            neobird.flambe.sound.SoundManager.toggleSound();
        },
        toggleMusic: function() {
            neobird.flambe.sound.SoundManager.playSound("btn_press");
            neobird.flambe.util.Metrics.trackEvent("Start", "Music", Std.string(!this._btnMusic.on));
            neobird.flambe.sound.SoundManager.toggleMusic();
        },
        handleMoregamesClick: function() {
            neobird.flambe.sound.SoundManager.playSound("btn_press");
            neobird.flambe.util.Metrics.trackEvent("Start", "External", "Moregames");
            this._manager.onMoreGames();
        },
        handleBrandingClick: function() {
            neobird.flambe.sound.SoundManager.playSound("btn_press");
            neobird.flambe.util.Metrics.trackEvent("Start", "External", "Branding");
            this._manager.onBranding();
        },
        handleNeobirdClick: function() {
            neobird.flambe.sound.SoundManager.playSound("btn_press");
            neobird.flambe.util.Metrics.trackEvent("Start", "External", "Neobird");
            this._manager.onNeoBird();
        },
        handleHelpScreenClick: function() {
            neobird.flambe.sound.SoundManager.playSound("btn_press");
            neobird.flambe.util.Metrics.trackEvent("Start", "helpScreen");
            this._manager.toHelpScreen();
        },
        handleStartGameClick: function() {
            neobird.flambe.sound.SoundManager.playSound("btn_press");
            neobird.flambe.util.Metrics.trackEvent("Start", "startGame", Std.string(this._manager.difficulty));
            this._manager.toGameScreen();
        },
        updateMusic: function(musicOn) {
            if (this._btnMusic != null) this._btnMusic.set_on(musicOn);
        },
        updateSound: function(soundOn) {
            if (this._btnSound != null) this._btnSound.set_on(soundOn);
        },
        dispose: function() {
            flambe.scene.Scene.prototype.dispose.call(this);
        },
        onRemoved: function() {
            flambe.scene.Scene.prototype.onRemoved.call(this);
        },
        onAdded: function() {
            flambe.scene.Scene.prototype.onAdded.call(this);
            neobird.flambe.sound.SoundManager.set_observer(this);
            this.owner.add(this._background);
            this.owner.addChild(new flambe.Entity().add(this._title));
            this.owner.addChild(new flambe.Entity().add(this._btnStart));
            this.owner.addChild(new flambe.Entity().add(this._btnHelp));
            //this.owner.addChild(new flambe.Entity().add(this._btnMoregames));
            this.owner.addChild(new flambe.Entity().add(this._diffBack));
            this._diffBack.owner.addChild(new flambe.Entity().add(this._diffText));
            this.owner.addChild(new flambe.Entity().add(this._btnDiffLeft));
            this.owner.addChild(new flambe.Entity().add(this._btnDiffRight));
            //this.owner.addChild(new flambe.Entity().add(this._brandingNeobird));
            //this.owner.addChild(new flambe.Entity().add(this._btnNeoBird));
            //this.owner.addChild(new flambe.Entity().add(this._brandingZibbo));
            //this.owner.addChild(new flambe.Entity().add(this._btnZibbo));
            this.owner.addChild(new flambe.Entity().add(this._btnSound));
            this.owner.addChild(new flambe.Entity().add(this._btnMusic));
            this.displayDifficulty();
        },
        _btnSound: null,
        _btnMusic: null,
        _btnZibbo: null,
        _btnNeoBird: null,
        _diffText: null,
        _diffBack: null,
        _btnDiffRight: null,
        _btnDiffLeft: null,
        _btnMoregames: null,
        _btnHelp: null,
        _btnStart: null,
        _brandingZibbo: null,
        _brandingNeobird: null,
        _title: null,
        _background: null,
        _manager: null,
        __class__: neobird.sudoku.startscreen.StartScreen
    });

    function $iterator(o) {
        if (o instanceof Array) return function() {
            return HxOverrides.iter(o);
        };
        return typeof(o.iterator) == 'function' ? $bind(o, o.iterator) : o.iterator;
    };
    var $_, $fid = 0;

    function $bind(o, m) {
        if (m == null) return null;
        if (m.__id__ == null) m.__id__ = $fid++;
        var f;
        if (o.hx__closures__ == null) o.hx__closures__ = {};
        else f = o.hx__closures__[m.__id__];
        if (f == null) {
            f = function() {
                return f.method.apply(f.scope, arguments);
            };
            f.scope = o;
            f.method = m;
            o.hx__closures__[m.__id__] = f;
        }
        return f;
    };
    if (Array.prototype.indexOf) HxOverrides.remove = function(a, o) {
        var i = a.indexOf(o);
        if (i == -1) return false;
        a.splice(i, 1);
        return true;
    };
    Math.__name__ = ["Math"];
    Math.NaN = Number.NaN;
    Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
    Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
    $hxClasses.Math = Math;
    Math.isFinite = function(i) {
        return isFinite(i);
    };
    Math.isNaN = function(i) {
        return isNaN(i);
    };
    String.prototype.__class__ = $hxClasses.String = String;
    String.__name__ = true;
    Array.prototype.__class__ = $hxClasses.Array = Array;
    Array.__name__ = true;
    Date.prototype.__class__ = $hxClasses.Date = Date;
    Date.__name__ = ["Date"];
    var Int = $hxClasses.Int = {
        __name__: ["Int"]
    };
    var Dynamic = $hxClasses.Dynamic = {
        __name__: ["Dynamic"]
    };
    var Float = $hxClasses.Float = Number;
    Float.__name__ = ["Float"];
    var Bool = $hxClasses.Bool = Boolean;
    Bool.__ename__ = ["Bool"];
    var Class = $hxClasses.Class = {
        __name__: ["Class"]
    };
    var Enum = {};
    if (typeof(JSON) != "undefined") haxe.Json = JSON;
    flambe.platform.html.HtmlPlatform.instance = new flambe.platform.html.HtmlPlatform();
    flambe.util.SignalBase.DISPATCHING_SENTINEL = new flambe.util.SignalConnection(null, null);
    flambe.System.root = new flambe.Entity();
    flambe.System.uncaughtError = new flambe.util.Signal1();
    flambe.System.hidden = new flambe.util.Value(false);
    flambe.System.hasGPU = new flambe.util.Value(false);
    flambe.System.volume = new flambe.animation.AnimatedFloat(1);
    flambe.System._platform = flambe.platform.html.HtmlPlatform.instance;
    flambe.System._calledInit = false;
    js.Browser.window = typeof window != "undefined" ? window : null;
    js.Browser.document = typeof window != "undefined" ? window.document : null;
    js.Browser.navigator = typeof window != "undefined" ? window.navigator : null;
    flambe.asset.Manifest.__meta__ = {
        obj: {
            assets: [{
                sounds: [{
                    bytes: 1524924,
                    md5: "625de89ee9a4a9c424c55b54698e27bb",
                    name: "133726__ephemeral-rift__native-american-flute-in-d-minor-and-stream.mp3"
                }, {
                    bytes: 2195290,
                    md5: "0083852c6d0e5d7f9bde7221072c934d",
                    name: "133726__ephemeral-rift__native-american-flute-in-d-minor-and-stream.ogg"
                }, {
                    bytes: 15360,
                    md5: "f21092d3b0771a56b302a891cb267ba3",
                    name: "81530__johnlavine333__hokshrt4.mp3"
                }, {
                    bytes: 21336,
                    md5: "47b92d1e56a232c17d7bd2f54e60ef51",
                    name: "81530__johnlavine333__hokshrt4.ogg"
                }, {
                    bytes: 546377,
                    md5: "23563c8269b9e716f17a83564f352b48",
                    name: "ephemeralrift.mp3"
                }, {
                    bytes: 489880,
                    md5: "4c6d6825ebd77a8fc27676ffa356dd0f",
                    name: "ephemeralrift.ogg"
                }, {
                    bytes: 15360,
                    md5: "f21092d3b0771a56b302a891cb267ba3",
                    name: "hokshrt4.mp3"
                }, {
                    bytes: 21336,
                    md5: "47b92d1e56a232c17d7bd2f54e60ef51",
                    name: "hokshrt4.ogg"
                }, {
                    bytes: 1724,
                    md5: "83bf28d40c7625dcc4d2ed38ce44d53b",
                    name: "snd_letters_click_4.mp3"
                }, {
                    bytes: 5780,
                    md5: "7c4e294dbf2d3c773401f490f5eb3766",
                    name: "snd_letters_click_4.ogg"
                }, {
                    bytes: 32448,
                    md5: "bac60e0930bc1c4718e1991506c0bc18",
                    name: "ZibboMix64.mp3"
                }, {
                    bytes: 42965,
                    md5: "5a8d9a4253244a8c77b58dbe5d7dc5e3",
                    name: "ZibboMix64.ogg"
                }],
                bootstrap: [{
                    bytes: 3950130,
                    md5: "124eeb151ce5c91b38de4468f5731be4",
                    name: "Background.png"
                }, {
                    bytes: 10670,
                    md5: "82e6c8939786caca494c7bd8d22c6a6d",
                    name: "branding/atlas0.png"
                }, {
                    bytes: 12170,
                    md5: "4ad55a87bcb94d1d1b8cbe8226a6e702",
                    name: "branding/library.json"
                }, {
                    bytes: 25951,
                    md5: "ab33e1f3c1f326e72202509fde59f2d6",
                    name: "fonts/arial_std.fnt"
                }, {
                    bytes: 51439,
                    md5: "f4f143a0a081b23f4e9af135758d90f4",
                    name: "fonts/arial_std_0.png"
                }, {
                    bytes: 24147,
                    md5: "12569807f2872e60d516941930a09e49",
                    name: "fonts/ginko_small.fnt"
                }, {
                    bytes: 65143,
                    md5: "62b65906e579dd0b111a2f994804b927",
                    name: "fonts/ginko_small_0.png"
                }, {
                    bytes: 24149,
                    md5: "6796a600a09de70dc12f54d40ae225d4",
                    name: "fonts/ginko_std.fnt"
                }, {
                    bytes: 132457,
                    md5: "df673d9453a7a285b8390d82a2411f11",
                    name: "fonts/ginko_std_0.png"
                }, {
                    bytes: 1618,
                    md5: "1b2f3516ccb49361163679fc9be20e33",
                    name: "fonts/playfield_pattern.fnt"
                }, {
                    bytes: 9735,
                    md5: "0139d8b2266ea1d51e947dfa7ba61b79",
                    name: "fonts/playfield_pattern_0.png"
                }, {
                    bytes: 1624,
                    md5: "726a79195de6feba538077ded3179087",
                    name: "fonts/playfield_pattern_wrong.fnt"
                }, {
                    bytes: 9735,
                    md5: "0139d8b2266ea1d51e947dfa7ba61b79",
                    name: "fonts/playfield_pattern_wrong_0.png"
                }, {
                    bytes: 1615,
                    md5: "4a381c02342a56b60f1e9d93f45f041e",
                    name: "fonts/playfield_user.fnt"
                }, {
                    bytes: 9676,
                    md5: "26b000c395e8e6ecbd6feb0b5f2c919f",
                    name: "fonts/playfield_user_0.png"
                }, {
                    bytes: 1621,
                    md5: "610c0e613a35015209959c05a3dfd7fa",
                    name: "fonts/playfield_user_wrong.fnt"
                }, {
                    bytes: 9759,
                    md5: "d8f166e64c0e65846d3f17add3a305ef",
                    name: "fonts/playfield_user_wrong_0.png"
                }, {
                    bytes: 190278,
                    md5: "ad50f95b89d4e289ab75638b59950a3c",
                    name: "Headline.png"
                }, {
                    bytes: 1722642,
                    md5: "721085aa4a9f11b1afcba4143f9d44ac",
                    name: "Helpscreen.png"
                }, {
                    bytes: 26276,
                    md5: "b6cd51783c2f6630e9b7ccdad9cce80b",
                    name: "MainMenuButton.png"
                }, {
                    bytes: 24119,
                    md5: "99d96830fa31a7d1de5b187481ce663a",
                    name: "MainMenuButtonActive.png"
                }, {
                    bytes: 24989,
                    md5: "9d22821bba31e705452582297250ce42",
                    name: "MainMenuButtonMouseover.png"
                }, {
                    bytes: 24617,
                    md5: "bd8d85649b7de497fe7321f30811d896",
                    name: "MainMenuButtonPressed.png"
                }, {
                    bytes: 348244,
                    md5: "01348c7a8fcd7068a37341fc60ec7bef",
                    name: "MobileDeviceTurnAround.png"
                }, {
                    bytes: 45159,
                    md5: "193e8b0c71a108f489e75677221f689e",
                    name: "NeobirdLogo.png"
                }, {
                    bytes: 15862,
                    md5: "5bf7b0a0ba6c58e2ae17ece2927a9342",
                    name: "ZibboLogo.png"
                }],
                'bootstrap.android': [{
                    bytes: 1260317,
                    md5: "bf20d043443c8ae1f592ce189c82ec0a",
                    name: "Background.png"
                }, {
                    bytes: 10670,
                    md5: "82e6c8939786caca494c7bd8d22c6a6d",
                    name: "branding/atlas0.png"
                }, {
                    bytes: 12170,
                    md5: "4ad55a87bcb94d1d1b8cbe8226a6e702",
                    name: "branding/library.json"
                }, {
                    bytes: 25909,
                    md5: "c6ded95539bbc311fef5e02845d4c984",
                    name: "fonts/arial_std.fnt"
                }, {
                    bytes: 21756,
                    md5: "f5eaa502335ee515881cbdc790088c6d",
                    name: "fonts/arial_std_0.png"
                }, {
                    bytes: 24147,
                    md5: "320f613c3047e2a6568895ec14a10280",
                    name: "fonts/ginko_small.fnt"
                }, {
                    bytes: 28042,
                    md5: "76993843a1678e66a7532bbc29e967cd",
                    name: "fonts/ginko_small_0.png"
                }, {
                    bytes: 24145,
                    md5: "4dc329062a1f054a61c57606177176a7",
                    name: "fonts/ginko_std.fnt"
                }, {
                    bytes: 57334,
                    md5: "d7cf412986957aa899112d3b0885e4c6",
                    name: "fonts/ginko_std_0.png"
                }, {
                    bytes: 1614,
                    md5: "df29babde1ec31419379f54eb86cfd35",
                    name: "fonts/playfield_pattern.fnt"
                }, {
                    bytes: 4675,
                    md5: "dab571e7c4d38850da455b69948ba969",
                    name: "fonts/playfield_pattern_0.png"
                }, {
                    bytes: 1620,
                    md5: "1222a08e09c04547aea1787d8aab687d",
                    name: "fonts/playfield_pattern_wrong.fnt"
                }, {
                    bytes: 4675,
                    md5: "677db274f0b36df4882f7520c616a9c1",
                    name: "fonts/playfield_pattern_wrong_0.png"
                }, {
                    bytes: 1611,
                    md5: "bce2ad497b31f53c66902576747df236",
                    name: "fonts/playfield_user.fnt"
                }, {
                    bytes: 4634,
                    md5: "b2b81d3834e72debafe52edc6c08d817",
                    name: "fonts/playfield_user_0.png"
                }, {
                    bytes: 1617,
                    md5: "add9d36d209377e29fbc9476872c5e5e",
                    name: "fonts/playfield_user_wrong.fnt"
                }, {
                    bytes: 4669,
                    md5: "0221c59642b94f69ca017bfde709b1f9",
                    name: "fonts/playfield_user_wrong_0.png"
                }, {
                    bytes: 96491,
                    md5: "062c07b2bdf0598c4d9d787a295daaa5",
                    name: "Headline.png"
                }, {
                    bytes: 841949,
                    md5: "032f54be6728206b3d900c6981356b9e",
                    name: "Helpscreen.png"
                }, {
                    bytes: 14947,
                    md5: "201a1a2d191cc1d6d15e2e4048375c26",
                    name: "MainMenuButton.png"
                }, {
                    bytes: 15758,
                    md5: "dc3d64f8fd3c5d01e275b5b9b076f160",
                    name: "MainMenuButtonActive.png"
                }, {
                    bytes: 16030,
                    md5: "81770b77d42efcdab44d1d17d5b46b79",
                    name: "MainMenuButtonMouseover.png"
                }, {
                    bytes: 15790,
                    md5: "03bacc1c1db0ed144b7c38a4aaef99bc",
                    name: "MainMenuButtonPressed.png"
                }, {
                    bytes: 117485,
                    md5: "1743ff929aba0929736fc0891813b30d",
                    name: "MobileDeviceTurnAround.png"
                }, {
                    bytes: 18467,
                    md5: "b2d97a395ff4e6f6063bcc5dfc2e525d",
                    name: "NeobirdLogo.png"
                }, {
                    bytes: 8575,
                    md5: "d743ef9093938ee9a98a546188454957",
                    name: "ZibboLogo.png"
                }],
                'game.android': [{
                    bytes: 7075,
                    md5: "47dc15dce0ec404bf312f1addbdf1b6f",
                    name: "buttons/BigButtonLeft.png"
                }, {
                    bytes: 6718,
                    md5: "01321771e4ba0e2dc52c7b912d178ca2",
                    name: "buttons/BigButtonLeftMouseover.png"
                }, {
                    bytes: 7012,
                    md5: "4be16a4d42e5f195a92745ad81ba807d",
                    name: "buttons/BigButtonLeftPressed.png"
                }, {
                    bytes: 7085,
                    md5: "3a63f1c976b59f6e7b768a5e5f35ac2b",
                    name: "buttons/BigButtonRight.png"
                }, {
                    bytes: 6888,
                    md5: "f7785c7e07df0093ae579056f107848c",
                    name: "buttons/BigButtonRightMouseover.png"
                }, {
                    bytes: 7226,
                    md5: "747a7f7d63d9d4460e598b5c5d05be60",
                    name: "buttons/BigButtonRightPressed.png"
                }, {
                    bytes: 9033,
                    md5: "2ca80de35baf14d2bda790f46ea704a1",
                    name: "buttons/Exit.png"
                }, {
                    bytes: 9532,
                    md5: "b76155be7b0bc188337ce3923e986477",
                    name: "buttons/ExitMouseover.png"
                }, {
                    bytes: 9061,
                    md5: "afda9ff81cb3ab4c95002026c13c0414",
                    name: "buttons/ExitPressed.png"
                }, {
                    bytes: 15758,
                    md5: "dc3d64f8fd3c5d01e275b5b9b076f160",
                    name: "buttons/MainMenuButton.png"
                }, {
                    bytes: 16030,
                    md5: "81770b77d42efcdab44d1d17d5b46b79",
                    name: "buttons/MainMenuButtonMouseover.png"
                }, {
                    bytes: 15790,
                    md5: "03bacc1c1db0ed144b7c38a4aaef99bc",
                    name: "buttons/MainMenuButtonPressed.png"
                }, {
                    bytes: 10524,
                    md5: "c3b9edd9be387f790a7e9e2925b56971",
                    name: "buttons/MoreGamesButton.png"
                }, {
                    bytes: 10577,
                    md5: "727722c51c8a7f5077335c05646b68cc",
                    name: "buttons/MoreGamesButtonMouseover.png"
                }, {
                    bytes: 10596,
                    md5: "de0fe4fbb0b18990ba8a65068450286f",
                    name: "buttons/MoreGamesButtonPressed.png"
                }, {
                    bytes: 9319,
                    md5: "05419152398078bf86bf457846bcc9d5",
                    name: "buttons/Music.png"
                }, {
                    bytes: 9795,
                    md5: "43922efc4b6d059314e181ad3e4e427d",
                    name: "buttons/MusicMouseover.png"
                }, {
                    bytes: 9722,
                    md5: "cf27e0e77d9f83e2875ba9a9b17a6805",
                    name: "buttons/MusicOff.png"
                }, {
                    bytes: 10149,
                    md5: "afeb1eab4f9e8ffd36a6b59aaf584fa0",
                    name: "buttons/MusicOffMouseover.png"
                }, {
                    bytes: 9731,
                    md5: "f5e6514c6924573c0246ec8f53c4218d",
                    name: "buttons/MusicOffPressed.png"
                }, {
                    bytes: 9349,
                    md5: "3a64a93f9f8938997cd3b120bda32a1f",
                    name: "buttons/MusicPressed.png"
                }, {
                    bytes: 11004,
                    md5: "13e76c8a37561654185fdde0c5cb2216",
                    name: "buttons/NewGameButton.png"
                }, {
                    bytes: 11300,
                    md5: "0e3e382a6c06b0862db555678689f833",
                    name: "buttons/NewGameButtonMouseover.png"
                }, {
                    bytes: 11121,
                    md5: "f668ae243bfcdb70fe6c6f150a414379",
                    name: "buttons/NewGameButtonPressed.png"
                }, {
                    bytes: 5769,
                    md5: "cb038e17d19976112861b69214cd47ec",
                    name: "buttons/SmallButtonLeft.png"
                }, {
                    bytes: 5559,
                    md5: "29c5f568c4b860cb1d9e994dd7d0b8ec",
                    name: "buttons/SmallButtonLeftMouseover.png"
                }, {
                    bytes: 5766,
                    md5: "be2b98358801a8eb636ab01a3fb5722e",
                    name: "buttons/SmallButtonLeftPressed.png"
                }, {
                    bytes: 5840,
                    md5: "29b46a35f3fe4e731e7f7311292b430f",
                    name: "buttons/SmallButtonRight.png"
                }, {
                    bytes: 5732,
                    md5: "e3f762c6ca7fb96f05df1cafccb2a28d",
                    name: "buttons/SmallButtonRightMouseover.png"
                }, {
                    bytes: 5889,
                    md5: "ea714f5774e3e21af4fdb3bdbf884bc3",
                    name: "buttons/SmallButtonRightPressed.png"
                }, {
                    bytes: 9776,
                    md5: "3a4707ed44eb0762cc4ddc444f139c10",
                    name: "buttons/Sound.png"
                }, {
                    bytes: 10289,
                    md5: "e12971f2bd05cdc12da06f5be043be92",
                    name: "buttons/SoundMouseover.png"
                }, {
                    bytes: 9987,
                    md5: "03911aeba227a12433d7bb69d890b46b",
                    name: "buttons/SoundOff.png"
                }, {
                    bytes: 10467,
                    md5: "48dde4e340d2e58433dd0e42db9af5c2",
                    name: "buttons/SoundOffMouseover.png"
                }, {
                    bytes: 10023,
                    md5: "4858fbf764940de8eb30a56ab409cdb3",
                    name: "buttons/SoundOffPressed.png"
                }, {
                    bytes: 9825,
                    md5: "923babae224504cd1abf76a92905c2dd",
                    name: "buttons/SoundPressed.png"
                }, {
                    bytes: 9547,
                    md5: "d9df00fc3672ce3c3b812b8563a9b59b",
                    name: "img/DifficultyBackground.png"
                }, {
                    bytes: 9594,
                    md5: "07070d353fb42ee9ed3ce90e6726f2d3",
                    name: "img/DifficultyBackgroundMain.png"
                }, {
                    bytes: 69423,
                    md5: "7963a6558c3b2330ae93acb4b6e7144d",
                    name: "img/Field.png"
                }, {
                    bytes: 96491,
                    md5: "062c07b2bdf0598c4d9d787a295daaa5",
                    name: "img/Headline.png"
                }, {
                    bytes: 117771,
                    md5: "36ee13f34af6eb2c8350e7f9367ee981",
                    name: "img/MobileDeviceTurnAround.png"
                }, {
                    bytes: 337373,
                    md5: "90dea28de4520f31cb920ac880d1d47f",
                    name: "img/MobileDeviceTurnAroundHuge.png"
                }, {
                    bytes: 18467,
                    md5: "b2d97a395ff4e6f6063bcc5dfc2e525d",
                    name: "img/NeobirdLogo.png"
                }, {
                    bytes: 183861,
                    md5: "cf995f868eef4941bdfaf8c7234a013a",
                    name: "img/PopUp.png"
                }, {
                    bytes: 2942,
                    md5: "69a61d9a09c560d863c0959181dc9aab",
                    name: "img/PopUpBackground.png"
                }, {
                    bytes: 3352,
                    md5: "0e792a260ac8a154fe9b0489dfd04d62",
                    name: "img/Selection.png"
                }, {
                    bytes: 40063,
                    md5: "1e53a7d666a9c2879693a340bdae4f74",
                    name: "img/SelectionBack.png"
                }, {
                    bytes: 5905,
                    md5: "49f27cd7d43a436c980ffd1dd5457b4c",
                    name: "img/SelectionMouseover.png"
                }, {
                    bytes: 5905,
                    md5: "49f27cd7d43a436c980ffd1dd5457b4c",
                    name: "img/SelectionPressed.png"
                }, {
                    bytes: 143964,
                    md5: "93bea76229845d667649790b3f29a7a8",
                    name: "img/SudokuPopUp.png"
                }, {
                    bytes: 5138,
                    md5: "eecf77c4365c8869b18642644f451353",
                    name: "img/SudokuSparkle.png"
                }, {
                    bytes: 127579,
                    md5: "4c9359b8478d39bdb04db404acde7741",
                    name: "img/WellDone.png"
                }, {
                    bytes: 740425,
                    md5: "12d4d56daf5616c40cb7dee2fdaa52a2",
                    name: "img/WinField.png"
                }, {
                    bytes: 8575,
                    md5: "d743ef9093938ee9a98a546188454957",
                    name: "img/ZibboLogo.png"
                }, {
                    bytes: 117485,
                    md5: "1743ff929aba0929736fc0891813b30d",
                    name: "MobileDeviceTurnAround.png"
                }, {
                    bytes: 1260317,
                    md5: "bf20d043443c8ae1f592ce189c82ec0a",
                    name: "screens/Background.png"
                }, {
                    bytes: 841949,
                    md5: "032f54be6728206b3d900c6981356b9e",
                    name: "screens/Helpscreen.png"
                }],
                game: [{
                    bytes: 12514,
                    md5: "46b3c3ade0b7fcfb28e4c21a9e51f5e7",
                    name: "buttons/BigButtonLeft.png"
                }, {
                    bytes: 11972,
                    md5: "49aff0f7d2215ddabb37d1c83ee251d4",
                    name: "buttons/BigButtonLeftMouseover.png"
                }, {
                    bytes: 12640,
                    md5: "da03ae745f6661bc63739ffec9545194",
                    name: "buttons/BigButtonLeftPressed.png"
                }, {
                    bytes: 12423,
                    md5: "e722ea8c039a52e4e3ff7053478b47fe",
                    name: "buttons/BigButtonRight.png"
                }, {
                    bytes: 12343,
                    md5: "f603a8e73f74491199687c41a83fabe7",
                    name: "buttons/BigButtonRightMouseover.png"
                }, {
                    bytes: 12621,
                    md5: "a1130f3193b543e9b6718a7282f1e2d3",
                    name: "buttons/BigButtonRightPressed.png"
                }, {
                    bytes: 15140,
                    md5: "58b7fbea7c59d815c5c234537049d268",
                    name: "buttons/Exit.png"
                }, {
                    bytes: 16385,
                    md5: "b01d870dd28f4f9f7a31f7ff50fce8b0",
                    name: "buttons/ExitMouseover.png"
                }, {
                    bytes: 15102,
                    md5: "54b0bcddd031ffd9dc9f26820c28a364",
                    name: "buttons/ExitPressed.png"
                }, {
                    bytes: 24119,
                    md5: "99d96830fa31a7d1de5b187481ce663a",
                    name: "buttons/MainMenuButton.png"
                }, {
                    bytes: 24989,
                    md5: "9d22821bba31e705452582297250ce42",
                    name: "buttons/MainMenuButtonMouseover.png"
                }, {
                    bytes: 24617,
                    md5: "bd8d85649b7de497fe7321f30811d896",
                    name: "buttons/MainMenuButtonPressed.png"
                }, {
                    bytes: 20208,
                    md5: "444d86e88525671ff0522a231bbc9f52",
                    name: "buttons/MoreGamesButton.png"
                }, {
                    bytes: 20650,
                    md5: "5bcf5445875e6388e38eacb18b4d1cf7",
                    name: "buttons/MoreGamesButtonMouseover.png"
                }, {
                    bytes: 20562,
                    md5: "b031bd04923f02fd36613a3dab5cdaf7",
                    name: "buttons/MoreGamesButtonPressed.png"
                }, {
                    bytes: 15853,
                    md5: "1877f84f1dfc005d3b464963212ac4f1",
                    name: "buttons/Music.png"
                }, {
                    bytes: 17155,
                    md5: "ae2ee5683c1dfab3b4111fd98a7c0a73",
                    name: "buttons/MusicMouseover.png"
                }, {
                    bytes: 17024,
                    md5: "6e08632f5811bafa304e85fa674adba0",
                    name: "buttons/MusicOff.png"
                }, {
                    bytes: 18153,
                    md5: "2ab88bfd26dcd368346b1d9c10937ccc",
                    name: "buttons/MusicOffMouseover.png"
                }, {
                    bytes: 17013,
                    md5: "e7c9fb3e42fd8c0e81be16a0dacc6f4d",
                    name: "buttons/MusicOffPressed.png"
                }, {
                    bytes: 15887,
                    md5: "b2864a60083d00316bed869e1ccd01fd",
                    name: "buttons/MusicPressed.png"
                }, {
                    bytes: 16741,
                    md5: "a46704e1ac093c4708a92c0116a3a9d0",
                    name: "buttons/NewGameButton.png"
                }, {
                    bytes: 17308,
                    md5: "aebe50ad6ad51a47f9785c0c2edbc0d9",
                    name: "buttons/NewGameButtonMouseover.png"
                }, {
                    bytes: 16977,
                    md5: "9f00c5d8ae3d521b7a05fd05fb9886cd",
                    name: "buttons/NewGameButtonPressed.png"
                }, {
                    bytes: 9817,
                    md5: "840970a63bd642a9975c51be7b9cfb44",
                    name: "buttons/SmallButtonLeft.png"
                }, {
                    bytes: 9602,
                    md5: "754e7bf1c67a76635715a898a9c13d08",
                    name: "buttons/SmallButtonLeftMouseover.png"
                }, {
                    bytes: 9668,
                    md5: "9bfce0cb864c536af857c0846f56632d",
                    name: "buttons/SmallButtonLeftPressed.png"
                }, {
                    bytes: 9689,
                    md5: "c72ad3e8d372a9bb444a1480b54658bf",
                    name: "buttons/SmallButtonRight.png"
                }, {
                    bytes: 9771,
                    md5: "62ed50ceac3797cdbf9fbd9346cf10a3",
                    name: "buttons/SmallButtonRightMouseover.png"
                }, {
                    bytes: 9910,
                    md5: "5b1116bb9a1f606cf9675830f86ada37",
                    name: "buttons/SmallButtonRightPressed.png"
                }, {
                    bytes: 17477,
                    md5: "7ff96a1c9f620763d0cbf4f6e1b5c746",
                    name: "buttons/Sound.png"
                }, {
                    bytes: 18770,
                    md5: "4c022e62be54329dced972b5cb431597",
                    name: "buttons/SoundMouseover.png"
                }, {
                    bytes: 18273,
                    md5: "d9d35048606fbffb3688bebc4ba5284d",
                    name: "buttons/SoundOff.png"
                }, {
                    bytes: 19366,
                    md5: "99768a46698a94c5315588c81df1f09c",
                    name: "buttons/SoundOffMouseover.png"
                }, {
                    bytes: 18230,
                    md5: "d204634c32d2a3553a7505b3706b1103",
                    name: "buttons/SoundOffPressed.png"
                }, {
                    bytes: 17412,
                    md5: "20ab025839ef8ab2ad71d04877c6f8a2",
                    name: "buttons/SoundPressed.png"
                }, {
                    bytes: 15068,
                    md5: "3f8d9bb3d6a457c6172385f3152b9558",
                    name: "img/DifficultyBackground.png"
                }, {
                    bytes: 14300,
                    md5: "b6f6f533202e6b8042f0a927ed6b1acc",
                    name: "img/DifficultyBackgroundMain.png"
                }, {
                    bytes: 138083,
                    md5: "a638b2325ba79403d6e37a31c5819fe8",
                    name: "img/Field.png"
                }, {
                    bytes: 190278,
                    md5: "ad50f95b89d4e289ab75638b59950a3c",
                    name: "img/Headline.png"
                }, {
                    bytes: 45159,
                    md5: "193e8b0c71a108f489e75677221f689e",
                    name: "img/NeobirdLogo.png"
                }, {
                    bytes: 574271,
                    md5: "1055584d098dc787ce28ed2967793a55",
                    name: "img/PopUp.png"
                }, {
                    bytes: 3077,
                    md5: "63afd7cca7316d48533875b683f0e393",
                    name: "img/PopUpBackground.png"
                }, {
                    bytes: 3002,
                    md5: "27e8d389822c78eabcc78003f0d2be99",
                    name: "img/Selection.png"
                }, {
                    bytes: 97522,
                    md5: "b7683cf1a277e84c6551bdd888b70ecc",
                    name: "img/SelectionBack.png"
                }, {
                    bytes: 8433,
                    md5: "c1eb79c6cb93ff460922dc2fa97d9544",
                    name: "img/SelectionMouseover.png"
                }, {
                    bytes: 8433,
                    md5: "c1eb79c6cb93ff460922dc2fa97d9544",
                    name: "img/SelectionPressed.png"
                }, {
                    bytes: 317795,
                    md5: "056e0699dbfb5e131fdccc6064690ec3",
                    name: "img/SudokuPopUp.png"
                }, {
                    bytes: 6430,
                    md5: "9221b1a30f1fbea6cdd32cda0e4c93d8",
                    name: "img/SudokuSparkle.png"
                }, {
                    bytes: 262345,
                    md5: "a7797a04bbbea0cdcf54f7b8dd2621a8",
                    name: "img/WellDone.png"
                }, {
                    bytes: 1551847,
                    md5: "0a62044d01a5b2a856a67cf1c3cb58b4",
                    name: "img/WinField.png"
                }, {
                    bytes: 15862,
                    md5: "5bf7b0a0ba6c58e2ae17ece2927a9342",
                    name: "img/ZibboLogo.png"
                }, {
                    bytes: 348244,
                    md5: "01348c7a8fcd7068a37341fc60ec7bef",
                    name: "MobileDeviceTurnAround.png"
                }, {
                    bytes: 3950130,
                    md5: "124eeb151ce5c91b38de4468f5731be4",
                    name: "screens/Background.png"
                }, {
                    bytes: 1722642,
                    md5: "721085aa4a9f11b1afcba4143f9d44ac",
                    name: "screens/Helpscreen.png"
                }]
            }]
        }
    };
    flambe.asset.Manifest._supportsCrossOrigin = (function() {
        var blacklist = new EReg("\\b(Android)\\b", "");
        if (blacklist.match(js.Browser.window.navigator.userAgent)) return false;
        var xhr = new XMLHttpRequest();
        return xhr.withCredentials != null;
    })();
    flambe.display.Sprite._scratchPoint = new flambe.math.Point();
    flambe.display.Font.NEWLINE = new flambe.display.Glyph(10);
    flambe.platform.BasicMouse._sharedEvent = new flambe.input.MouseEvent();
    flambe.platform.BasicPointer._sharedEvent = new flambe.input.PointerEvent();
    flambe.platform.html.CanvasRenderer.CANVAS_TEXTURES = (function() {
        var pattern = new EReg("(iPhone|iPod|iPad)", "");
        return pattern.match(js.Browser.window.navigator.userAgent);
    })();
    flambe.platform.html.HtmlAssetPackLoader._mediaRefCount = 0;
    flambe.platform.html.HtmlAssetPackLoader._detectBlobSupport = true;
    flambe.platform.html.HtmlUtil.VENDOR_PREFIXES = ["webkit", "moz", "ms", "o", "khtml"];
    flambe.platform.html.HtmlUtil.SHOULD_HIDE_MOBILE_BROWSER = js.Browser.window.top == js.Browser.window && new EReg("Mobile(/.*)? Safari", "").match(js.Browser.navigator.userAgent);
    flambe.platform.html.WebAudioSound._detectSupport = true;
    flambe.platform.html.WebGLGraphics._scratchMatrix = new flambe.math.Matrix();
    neobird.flambe.button.ButtonBase.MOBILE_PRESS_DELAY = 100;
    neobird.flambe.button.ButtonBase.MOBILE_PRESS_MOTION = 200;
    neobird.flambe.button.ButtonBase._scratchPoint = new flambe.math.Point();
    neobird.flambe.sound.SoundManager._calledInit = false;
    neobird.flambe.util.Metrics._calledInit = false;
    neobird.sudoku.brandingscreen.BrandingScreen.BRANDING_X = 600;
    neobird.sudoku.brandingscreen.BrandingScreen.BRANDING_Y = 400;
    neobird.sudoku.game.AssetData._scaleX = 1.0;
    neobird.sudoku.game.AssetData._scaleY = 1.0;
    neobird.sudoku.game.AssetData.suffix = "";
    neobird.sudoku.game.AssetData.ASSETDATA = [{
        id: "designres",
        x: 2272,
        y: 1536
    }, {
        id: "coreres",
        x: 1920,
        y: 1282
    }, {
        id: "stdBtnExtend",
        x: 50,
        y: 50
    }, {
        id: "btnsound",
        x: 1768,
        y: 1269
    }, {
        id: "btnmusic",
        x: 1944,
        y: 1269
    }, {
        id: "progressBar",
        x: 500,
        y: 20
    }, {
        id: "brandingNeobird",
        x: 196,
        y: 1199
    }, {
        id: "brandingZibbo",
        x: 541,
        y: 1269
    }, {
        id: "preloadTitle",
        x: 517,
        y: 133
    }, {
        id: "startTitle",
        x: 517,
        y: 133
    }, {
        id: "startBtnStart",
        x: 892,
        y: 592
    }, {
        id: "startBtnLeft",
        x: 824,
        y: 799
    }, {
        id: "startBtnRight",
        x: 1366,
        y: 799
    }, {
        id: "startDiffBack",
        x: 885,
        y: 804
    }, {
        id: "startDiffText",
        x: 1138,
        y: 852
    }, {
        id: "startBtnHelp",
        x: 892,
        y: 997
    }, {
        id: "startBtnMoregames",
        x: 892,
        y: 1189
    }, {
        id: "helpBtnMain",
        x: 575,
        y: 1241
    }, {
        id: "helpBtnStart",
        x: 1218,
        y: 1241
    }, {
        id: "helpTopic",
        x: 1136,
        y: 134
    }, {
        id: "helpText",
        x: 475,
        y: 433
    }, {
        id: "helpZibbo",
        x: 203,
        y: 1277
    }, {
        id: "gameBtnNewGame",
        x: 1639,
        y: 810
    }, {
        id: "gameBtnDiffLeft",
        x: 1599,
        y: 964
    }, {
        id: "gameBtnDiffRight",
        x: 1996,
        y: 964
    }, {
        id: "gameDiffBack",
        x: 1658,
        y: 942
    }, {
        id: "gameDiffText",
        x: 1829,
        y: 964
    }, {
        id: "gameBtnExit",
        x: 1601,
        y: 1269
    }, {
        id: "gamePlayfield",
        x: 171,
        y: 124
    }, {
        id: "gameWellDone",
        x: 1540,
        y: 160
    }, {
        id: "gameZibbo",
        x: 1679,
        y: 1110
    }, {
        id: "playfieldTile",
        x: 136,
        y: 136
    }, {
        id: "playfieldBoard",
        x: 34,
        y: 30
    }, {
        id: "playfieldSelection",
        x: 79,
        y: 42
    }, {
        id: "messagepanelBtn",
        x: 0,
        y: -10
    }];
    neobird.sudoku.game.Constants.DIM_SUDOKU = 3;
    neobird.sudoku.game.Constants.DIM_REGION = neobird.sudoku.game.Constants.DIM_SUDOKU * neobird.sudoku.game.Constants.DIM_SUDOKU;
    neobird.sudoku.game.Constants.DIM_NUMBERS = neobird.sudoku.game.Constants.DIM_SUDOKU * neobird.sudoku.game.Constants.DIM_SUDOKU;
    neobird.sudoku.game.Constants.DIM_BOARD = neobird.sudoku.game.Constants.DIM_REGION * neobird.sudoku.game.Constants.DIM_REGION;
    neobird.sudoku.game.Constants.BTN_SOUND_NAME = "buttons/Sound";
    neobird.sudoku.game.Constants.BTN_MUSIC_NAME = "buttons/Music";
    neobird.sudoku.gamescreen.MessagePanel.BTN_NAME = "buttons/NewGameButton";
    neobird.sudoku.gamescreen.MessagePanel.BTN_MOREGAMES = "buttons/MoreGamesButton";
    neobird.sudoku.gamescreen.ResultDisplay.SPARKLE_TIME = .3;
    neobird.sudoku.gamescreen.Sparkle.TIME_SPARKLE = 1.5;
    neobird.sudoku.helpscreen.HelpScreen.BTN_MENU_NAME = "buttons/MainMenuButton";
    neobird.sudoku.preloader.Preloader.BTN_START_NAME = "MainMenuButton";
    neobird.sudoku.preloader.Preloader.ASSET_SPLIT = 0.5;
    neobird.sudoku.startscreen.StartScreen.BTN_START_NAME = "buttons/MainMenuButton";
    neobird.sudoku.startscreen.StartScreen.BTN_HELP_NAME = "buttons/MainMenuButton";
    neobird.sudoku.startscreen.StartScreen.BTN_MORE_NAME = "buttons/MainMenuButton";
    neobird.sudoku.game.GameManager.main();
})();