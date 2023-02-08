DistLib.PartnerAPI.Ziango = function(cfg, game) {
        DistLib.PartnerAPI.call(this, cfg), this.cfg = cfg, this.game = game, this._id = cfg.PC.id, this._fbId = null, this._splashData = null, this._moreGamesLink = null, this.loaded = !0, this.loggedIn = !1, this.currencyData = null;
        var url = __FILE__,
            parts = url.split("/");
        parts.pop(), this._serverBasePath = parts.join("/") + "/", this._scriptURL = "2.js", this._ZiangoDivId = "ziango-layer", this._ZiangoDivClass = "ziango-layer-gone", this._ZiangoCssStyle = "#ziango-layer{\nwidth: 100%;\nheight: 100%;\ntop center no-repeat;\nposition: absolute;\nz-index: 10000;\nbackground-size: 90%;\nbackground-color:#fff;\n}\n.ziango-layer-gone{\ndisplay:none !important;\n}", this._ZiangoCrossPromotionId = "ziango-cp-modal", this._ZiangoCPCloseClass = "ziango-cp-close", this._ZiangoCPActionClass = "ziango-cp-btn-action", this._ZiangoCPMainImageClass = "ziango-cp-main-image", this._ZiangoCPModalBodyClass = "ziango-cp-modal-body", this.cpBarInterval = null, this.ziangoLayer = null, this.imaAds = null, this.crossPromotionModal = null, this._firebase = null, this.userGroups = ["A", "B", "C", "D"], this.randomlySelectedGroupName = this.userGroups[Math.floor(Math.random() * this.userGroups.length)], this.currentUserGroup = null, this.setDimensionGroup = null, this.loaded = !1, this._startedLoadingAPI = !1, this.crossPromotionShownOnce = !1, this._debug = !1, "PID" in this.cfg && -1 != ["test_ziangoAPI_lastest_dev_version", "test_ziangoAPI"].indexOf(this.cfg.PID) && (this._debug = !0), this._lastAdvTime = Date.now(), this._advInterval = cfg.AI, this.initialize()
    }, DistLib.PartnerAPI.Ziango.prototype = Object.create(DistLib.PartnerAPI.prototype), DistLib.PartnerAPI.Ziango.prototype.constructor = DistLib.PartnerAPI.Ziango, DistLib.PartnerAPI.Ziango.prototype.initialize = function() {
        var _this = this;
        this._addCssStyle(), this._addDivLayer(), this._loadScript(this._loadAPI, this), this._injectCrossPromotionHtml(), _this._debug && console.log("===========", this.cfg, "==============="), "PID" in this.cfg && -1 !== ["test_ziangoAPI_lastest_dev_version", "facebook_canvas", "test_ziangoAPI"].indexOf(this.cfg.PID) && "GSD" in this.cfg ? (this._fbId = this.cfg.GSD.fbAI, this.facebookInit(this._fbId, function() {
            _this.afterLoginSetup()
        })) : _this._debug && console.log("=== Not calling facebook init")
    }, DistLib.PartnerAPI.Ziango.prototype._detectAdBlocker = function() {}, DistLib.PartnerAPI.Ziango.prototype.movePromotionLeft = function(e) {}, DistLib.PartnerAPI.Ziango.prototype.movePromotionRight = function(e) {}, DistLib.PartnerAPI.Ziango.prototype._resizePromotionBar = function() {}, DistLib.PartnerAPI.Ziango.prototype._injectCrossPromotionBar = function() {}, DistLib.PartnerAPI.Ziango.prototype.facebookInit = function(appId, onLoginCallback, onLoginCallbackContext) {}, DistLib.PartnerAPI.Ziango.prototype.firebaseCheckLoginState = function(event) {}, DistLib.PartnerAPI.Ziango.prototype.addUserFBData = function(firebaseUser, fbProfile) {}, DistLib.PartnerAPI.Ziango.prototype.updateUserGameInfo = function(firebaseUser) {}, DistLib.PartnerAPI.Ziango.prototype._updateUserGameActivities = function(firebaseUser, isUserNew) {}, DistLib.PartnerAPI.Ziango.prototype.getCurrencyData = function() {}, DistLib.PartnerAPI.Ziango.prototype.getProductPrices = function(productID, storingVariable) {}, DistLib.PartnerAPI.Ziango.prototype.afterLoginSetup = function() {}, DistLib.PartnerAPI.Ziango.prototype.buyProduct = function(productURL, callback, callbackContext) {}, DistLib.PartnerAPI.Ziango.prototype._loadScript = function(callback, callbackContext) {
        var htmlScriptTag = document.createElement("script"),
            head = document.getElementsByTagName("head")[0];
        htmlScriptTag.type = "text/javascript", htmlScriptTag.src = this._scriptURL, htmlScriptTag.onload = function() {
            this._startedLoadingAPI || callback.apply(callbackContext)
        }, this._startedLoadingAPI = !0, head.appendChild(htmlScriptTag)
    }, DistLib.PartnerAPI.Ziango.prototype._loadAPI = function() {
        this.imaAds = new DistLib.GoogleIMAds(this.cfg.AU, this.cfg.GN, this.cfg.PID), this.loaded = !0, this.imaAds.cfg = this.cfg
    }, DistLib.PartnerAPI.Ziango.prototype.requestAd = function(adType, hideAdCallback, hideAdCallbackContext) {}, DistLib.PartnerAPI.Ziango.prototype.showAd = function(callback, callbackContext, adType) {}, DistLib.PartnerAPI.Ziango.prototype.isAdAvailable = function(adType) {
        return !1
    }, DistLib.PartnerAPI.Ziango.prototype.hideAd = function(callback, callbackContext) {}, DistLib.PartnerAPI.Ziango.prototype._showThankYou = function() {}, DistLib.PartnerAPI.Ziango.prototype._hideThankYou = function() {}, DistLib.PartnerAPI.Ziango.prototype.showCrossPromotion = function(debugGameName) {}, DistLib.PartnerAPI.Ziango.prototype._injectCrossPromotionHtml = function() {}, DistLib.PartnerAPI.Ziango.prototype._addDivLayer = function() {}, DistLib.PartnerAPI.Ziango.prototype._addCssStyle = function() {}, DistLib.PartnerAPI.Ziango.prototype._setupAPIControl = function() {
        var _this = this;
        window.pauseGame = function() {
            _this.game.pause(!0), _this.game.setSound(!1)
        }, window.resumeGame = function() {
            _this.game.pause(!1), _this.game.setSound(!0)
        }
    },
    function() {
        Object.defineProperties(window, {
            __FILE__: {
                get: function() {
                    var stack = null;
                    try {
                        throw new Error
                    } catch (e) {
                        stack = e.stack
                    }
                    if (stack = stack.split("\n"), "Error" != stack[0]) return stack[1].split("@")[1].split(":").slice(0, -1).join(":");
                    var m;
                    return (m = stack[2].match(/\((.*):[0-9]+:[0-9]+\)/)) ? m[1] : void 0
                }
            }
        })
    }(), DistLib.PartnerAPI.PartnerJS = DistLib.PartnerAPI.Ziango;