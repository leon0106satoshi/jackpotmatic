function sapi_initialize() {}

function sapi_ready() {}

function sapi_loading_update(percentage) {}

function sapi_start() {}

function sapi_playstart() {}

function sapi_victory(score) {}

function sapi_pages(page) {}

function sapi_save_data(data) {}

function sapi_restore_data() {}

function sapi_has_rewardads() {
    return !1
}

function sapi_show_rewardads(callback) {}

function sapi_tracking_levelstart(gamemode, date) {}

function sapi_tracking_levelcomplete(gamemode, date, score) {}

function sapi_tracking_levelfail(gamemode, date) {}

function sapi_tracking_hintsfromad() {}

function sapi_tracking_usedhint() {}

function sapi_tracking_menu(button) {}

function sapi_tracking_tutorial(page) {}

function sapi_tracking_dailychallenge(type) {}

function sapi_tracking_adforhints() {}

function sapi_tracking_adinitiated() {}

function sapi_tracking_hintsreceived() {}

function getLang() {
    if ("undefined" != navigator.languages) {
        for (var l = "", i = 0; i < navigator.languages.length && (l = navigator.languages[i], "ru" != l && "en" != l && "de" != l && "es" != l && "fr" != l && "it" != l && "pt" != l && "tr" != l && "nl" != l && "pl" != l && "ja" != l); i++);
        return "" != l ? l : "en"
    }
    return "en"
}

function start() {
    var lang = "en";
    lang = getLang();
    var render = Phaser.CANVAS,
        isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    isChrome || navigator.userAgent.toLowerCase().indexOf("android") > -1 && (render = Phaser.AUTO);
    var game = new Phaser.Game(1920, 1280, render, "", null);
    game.lang = lang, game.state.add("Boot", Solitaire.Boot), game.state.add("Preloader", Solitaire.Preloader), game.state.add("MainMenu", Solitaire.MainMenu), game.state.add("Game", Solitaire.Game), game.state.start("Boot"), window.game = game, game.state.disableVisibilityChange = true, setTimeout("window.scrollTo(0, 1)", 10)
}

function hideSideMenuButton() {
    try {
        sideButtonShallBeHidden = !1, currentSideMenuButton.visible = !0
    } catch (e) {
        console.warn("menuButton not reachable")
    }
}
var bilb_has_rewardads = !0,
    HINTS_TYPE = 2,
    HINTS_COUNT = 8,
    Generator = {};
Generator.Card = function(color, num) {
    this.color = color, this.num = num
}, Generator.Card.prototype.remap = function(color, num) {
    this.color = color, this.num = num
}, Generator.Stack = function() {
    this.cards = new Array
}, Generator.Stack.prototype.canAddCard = function(c) {
    return 0 === this.cards.length ? !0 : this.cards[this.cards.length - 1].num == c.num + 1 && this.nextColor(this.cards[this.cards.length - 1].color, c.color) ? !0 : !1
}, Generator.Stack.prototype.nextColor = function(a, b) {
    return 1 >= a && b > 1 || a > 1 && 1 >= b
}, Generator.Stack.prototype.addCard = function(c) {
    this.cards.push(c)
}, Generator.Stack.prototype.pop = function() {
    return this.cards.shift()
}, Generator.TmpStack = function(n) {
    this.cards = new Array, this.n = n
}, Generator.TmpStack.prototype.addCard = function(c) {
    return this.cards.length < this.n ? (this.cards.unshift(c), !0) : !1
}, Generator.Reserve = function() {
    this.cards = new Array, this.n = 24
}, Generator.Reserve.prototype.addCard = function(c) {
    if (this.cards.length < this.n) {
        if (this.cards.length > 3) this.cards.unshift(c);
        else {
            this.cards.push(c);
            var n = Math.floor(this.cards.length / 3),
                r = Math.floor(n * r)
        }
        return !0
    }
    return !1
}, Generator.Stack.prototype.getTopCard = function() {
    return this.cards.pop()
}, Generator.Main = function() {
    this.stacks = new Array, this.temps = new Array, this.date = 20, this.month = 1, this.year = 2018;
    for (var i = 0; 4 > i; i++) this.stacks[i] = new Generator.Stack;
    for (var i = 1; 7 >= i; i++) this.temps[i - 1] = new Generator.TmpStack(i);
    for (this.reserve = new Generator.Reserve, this.cards = new Array, i = 0; 52 > i; i++) this.cards[i] = new Generator.Card(1, 1)
}, Generator.Main.prototype.init = function() {
    for (var j = 0; 4 > j; j++) this.stacks[j].cards = new Array;
    for (var i = 0; 13 > i; i++)
        for (var j = 0; 4 > j; j++) {
            var card = this.cards.pop();
            this.stacks[j].addCard(card)
        }
    for (var tmp = [0, 1, 2, 3], i = 13; i > 0; i--) {
        tmp = i % 2 === 0 ? [0, 1, 2, 3] : [2, 3, 0, 1];
        for (var j = 0; 4 > j; j++) this.stacks[j].cards[i - 1].remap(tmp[j], i)
    }
}, Generator.Main.prototype.print = function() {
    this.temps.sort(function(a, b) {
        return a.n - b.n
    });
    for (var i = 0; 7 > i; i++) {
        for (var j = 0; j < this.temps[i].cards.length; j++) this.cards.push(this.temps[i].cards[j]);
        this.temps[i].cards = new Array
    }
    for (var i = 0; i < this.reserve.cards.length; i++) this.cards.push(this.reserve.cards[i]);
    this.reserve.cards = new Array
}, Generator.Main.prototype.shuffle = function(arr) {
    var j, x, i;
    for (i = arr.length - 1; i > 0; i--) j = Math.floor(Math.random() * (i + 1)), x = arr[i], arr[i] = arr[j], arr[j] = x
}, Generator.Main.prototype.shuffleDate = function(arr, c) {
    var j, x, i;
    for (i = arr.length - 1; i > 0; i--) j = Math.floor((i + 1) * this.date * c % arr.length), x = arr[i], arr[i] = arr[j], arr[j] = x
}, Generator.Main.prototype.shuffleMonth = function(arr, c) {
    var j, x, i;
    for (i = arr.length - 1; i > 0; i--) j = Math.floor((i + 1) * this.month * c % arr.length), x = arr[i], arr[i] = arr[j], arr[j] = x
}, Generator.Main.prototype.calculate = function(date, month, year) {
    this.date = date, this.month = month + 1, this.year = year, this.init(), this.shuffleMonth(this.stacks, this.date + this.month);
    for (var num = 1;;) {
        for (var c = null, i = 0; !c;)
            if (c = this.stacks[i].pop(), i++, i >= 4 && !c) return this.print(), !0;
        var n = this.date * (this.month + 1) * this.year * num % 11;
        if (9 > n && this.reserve.cards.length < 24) this.reserve.addCard(c, this.date);
        else {
            this.shuffleDate(this.temps, num * this.date);
            for (var found = !1, j = 0; j < this.temps.length; j++)
                if (this.temps[j].addCard(c)) {
                    found = !0;
                    break
                }
            found || this.reserve.addCard(c)
        }
        num++
    }
};
var Solitaire = {};
Solitaire.Boot = function(game) {}, Solitaire.Configs = function(game) {}, Solitaire.Configs.prototype = {}, Solitaire.card_back = "decks14", Solitaire.card_types = ["clubs", "spade", "diamant", "hearts"], Solitaire.leftHand = !1, Solitaire.Configs.now = new Date, Solitaire.Boot.prototype = {
    init: function() {
        this.input.maxPointers = 1, this.stage.backgroundColor = 14111, game.tweens.frameBased = !1, game.time.advancedTiming = !0, game.forceSingleUpdate = !0, game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL, game.scale.pageAlignHorizontally = !0, game.scale.pageAlignVertically = !0, game.lc = "en", game.data = {}, Solitaire.PState.loadData(), Solitaire.PState.loadUser(), game.gen = new Generator.Main, game.hintsType = HINTS_TYPE, game.hintsCount = HINTS_COUNT;
        var getAndroidVersion = function(ua) {
                ua = (ua || navigator.userAgent).toLowerCase();
                var match = ua.match(/android\s([0-9\.]*)/);
                return match ? match[1] : !1
            },
            android_version = getAndroidVersion(),
            isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
        game.device.desktop && !isFirefox ? (Solitaire.Configs.currentConfig = "hd", Solitaire.Configs.currentConfigMulti = 1) : android_version && parseFloat(android_version) < 4.4 ? (Solitaire.Configs.currentConfig = "sd", Solitaire.Configs.currentConfigMulti = .4) : (Solitaire.Configs.currentConfig = "ssd", Solitaire.Configs.currentConfigMulti = .6), Solitaire.Configs.font = "pt_sans_narrowbold", "tr" === game.lang && (Solitaire.Configs.font = "'Dosis', sans-serif"), Solitaire.Configs.fontColor = "#fefefe", Solitaire.Configs.fontYellowColor = "#cba41b", Solitaire.s.add("onStateChange", "onScreenResize", "onHandChange", "onAnimationStart", "onAnimationStop", "onCardMove", "onCombo", "onHelp", "onHintUse", "onSelectGame", "onStartGame", "onStartGameChallenge", "onRestartGame", "onDailyChallenge", "onDailyChallengeInfo", "onDailyChallengeInfo2", "onCrownAnimation", "onCrownAnimation2", "onCrownAnimationFinish", "onLeaderBoard", "onDialogOpen", "onDialogClose", "onForceClose", "onAdsForHints", "onShowAds", "onAdsSuccess", "onNoMoreVideos", "onMainMenuOpen", "onMainMenuClose", "onExit"), this.resizeUpdate = function() {
            var ratio = window.innerWidth / window.innerHeight,
                standardWidth = Solitaire.normalize(1280),
                standardHeight = Solitaire.normalize(1920),
                standardRatio = standardWidth / standardHeight;
            Solitaire.horizontal = ratio >= 1.38, Solitaire.horizontal && (standardHeight = Solitaire.normalize(1180)), ratio >= standardRatio ? (game.scale.setGameSize(Math.ceil(standardHeight * ratio), standardHeight), game.world.setBounds(0, 0, game.width, game.height)) : (game.scale.setGameSize(standardWidth, Math.ceil(standardWidth * (window.innerHeight / window.innerWidth))), game.world.setBounds(0, 0, Math.ceil((game.height - standardHeight) * -.5), game.height)), Solitaire.s && Solitaire.s.onScreenResize.dispatch(game.width, game.height)
        }, game.resizeGame = this.resizeUpdate, this.scale.setResizeCallback(function() {
            (Solitaire.old_w != window.innerWidth || Solitaire.old_h != window.innerHeight) && (Solitaire.old_w = window.innerWidth, Solitaire.old_h = window.innerHeight, game.resizeGame())
        })
    },
    preload: function() {
        this.load.image("loadingbar", "assets/loadingbar.png"), this.load.image("loadingbg", "assets/loadingbg.png"), this.load.image("softgames", "assets/imgpsh_fullsize.png")
    },
    create: function() {
        game.state.start("Preloader")
    }
}, Solitaire.PState = {
    testLocalStorage: function() {
        if ("undefined" != typeof localStorage) try {
            if (localStorage.setItem("test", "test"), "test" === localStorage.getItem("test")) return localStorage.removeItem("test"), !0
        } catch (e) {}
        return !1
    },
    getCleanData: function() {
        return {
            isLeftHand: Solitaire.leftHand,
            scores: [],
            soundMute: !1,
            musicMute: !0
        }
    },
    getCleanUser: function() {
        return {
            username: "RandomUser" + (Math.floor(9e4 * Math.random()) + 1e4).toString(),
            points: 0,
            bestScore: 0,
            bestTime: 0,
            crowns: [],
            trophiesBronze: [],
            trophiesSilver: [],
            trophiesGold: [],
            dailyChallengeInfo: !1
        }
    },
    addScore: function(score, time) {
        game.bestTime = !1, game.bestScore = !1, game.bestScoreValue = game.user.bestScore, (time < game.user.bestTime || 0 == game.user.bestTime) && (game.user.bestTime = time, game.bestTime = !0, score += 500), score > game.user.bestScore && (score += 500, game.user.bestScore = score, game.bestScore = !0), game.lastScore = score, this.saveUser()
    },
    addCrown: function(year, month, day, score, time) {
        game.bestTime = !1, game.bestScore = !1, game.bestScoreValue = 0;
        for (var i = 0; i < game.user.crowns.length; i++)
            if (game.user.crowns[i].year == year && game.user.crowns[i].month == month && game.user.crowns[i].day == day) return (!game.user.crowns[i].time || game.user.crowns[i].time > time) && (game.user.crowns[i].time = time, score += 500, game.bestTime = !0), game.bestScoreValue = game.user.crowns[i].score, (!game.user.crowns[i].score || game.user.crowns[i].score < score) && (score += 500, game.user.crowns[i].score = score, game.bestScore = !0), game.lastScore = score, void this.saveUser();
        game.user.crowns.push({
            year: year,
            month: month,
            day: day,
            score: score,
            time: time
        }), game.user.points += 1e3;
        var count = 0;
        game.lastScore = score, game.bestScoreValue = score;
        for (var i = 0; i < game.user.crowns.length; i++) game.user.crowns[i].year === year && game.user.crowns[i].month === month && count++;
        15 == count ? (game.user.trophiesBronze.push({
            year: year,
            month: month
        }), game.user.points += 1e4) : 20 == count ? (game.user.trophiesSilver.push({
            year: year,
            month: month
        }), game.user.points += 2e4) : 28 == count && (game.user.trophiesGold.push({
            year: year,
            month: month
        }), game.user.points = 5e4), this.saveUser()
    },
    saveData: function() {
        localStorage.setItem("Pasevrdaych", JSON.stringify(game.data))
    },
    loadData: function() {
        var obj2 = localStorage.getItem("Pasevrdaych");
        obj2 ? game.data = JSON.parse(obj2) : game.data = this.getCleanData()
    },
    loadUser: function() {
        var obj = localStorage.getItem("best_classic_user");
        obj ? game.user = JSON.parse(obj) : game.user = this.getCleanUser()
    },
    saveUser: function() {
        localStorage.setItem("best_classic_user", JSON.stringify(game.user))
    },
    clearData: function() {
        game.data = this.getCleanData()
    },
    clearUser: function() {
        game.user = this.getCleanUser(), this.saveUser()
    }
}, Solitaire.Preloader = function(game) {}, Solitaire.Preloader.prototype = {
    preload: function() {
        game.load.onFileComplete.add(this.onFileComplete, this), this.preloadbar = this.add.sprite(game.width / 2, game.height / 2, "loadingbar"), this.preloadbg = this.add.image(game.width / 2, game.height / 2, "loadingbg"), this.softgames = this.add.image(game.width / 2, game.height / 2 - 100, "softgames"), this.softgames.anchor.set(.5), this.load.setPreloadSprite(this.preloadbar), Solitaire.s.onScreenResize.add(this.onScreenResize, this), this.onScreenResize(game.width, game.height), game.load.image("bg", "assets/bg.png"), game.load.atlas("diamant", "assets/deck_diamant.png", "assets/deck_diamant.json"), game.load.atlas("clubs", "assets/deck_clubs.png", "assets/deck_clubs.json"), game.load.atlas("hearts", "assets/deck_hearts.png", "assets/deck_hearts.json"), game.load.atlas("spade", "assets/deck_spade.png", "assets/deck_spade.json"), game.load.atlas("decks", "assets/decks.png", "assets/decks.json"), game.load.atlas("all", "assets/spritesheet.png", "assets/spritesheet.json"), game.load.atlas("symbols", "assets/cs.png", "assets/cs.json"), game.load.atlas("field", "assets/fields.png", "assets/fields.json");
        var isJa = "ja" === getLang();
        game.load.atlas("titles", isJa ? "assets/titles_ja.png" : "assets/titles.png", isJa ? "assets/titles_ja.json" : "assets/titles.json"), game.load.atlas("panels", "assets/panels.png", "assets/panels.json"), game.load.json("language", "local/lang.json"), game.load.audio("music", "assets/audio/WinfreythePigLoopVersion.ogg"), game.load.audio("card", "assets/audio/sfx/card.ogg"), game.load.audio("cardmove", "assets/audio/sfx/cardmove.ogg"), game.load.audio("cardselect", "assets/audio/sfx/cardselect.ogg"), game.load.audio("button", "assets/audio/sfx/but.ogg"), game.load.audio("success", "assets/audio/sfx/PUZZLE_Success_Piano_Three_Note_Fast_Dry_stereo.ogg"), game.load.audio("claps", "assets/audio/sfx/AUDIENCE_Claps_and_Cheers_06_stereo.ogg")
    },
    onFileComplete: function(progress, cacheKey, success, totalLoaded, totalFiles) {},
    onScreenResize: function(w, h) {
        this.preloadbar.x = w / 2 - 325, this.preloadbar.y = 3 * h / 4 - 17, this.preloadbg.x = w / 2 - 330, this.preloadbg.y = 3 * h / 4 - 21.5, this.softgames.x = w / 2, this.softgames.y = this.preloadbg.y - 200
    },
    create: function() {
        game.sfx = new Solitaire.SFX, game.sfx.playMusic(), game.lang = new Solitaire.Lang, game.scores = new Solitaire.Scores, game.state.start("MainMenu", !0, !1)
    }
}, Solitaire.normalize = function(value) {
    return Math.floor(value * Solitaire.Configs.currentConfigMulti)
}, Solitaire.s = {
    clearOnStageChange: !1,
    add: function() {
        for (var list = Array.isArray(arguments[0]) ? arguments[0] : arguments, i = 0, len = list.length; len > i; i++) this[list[i]] || (this[list[i]] = new Phaser.Signal);
        this.clearOnStageChange || game.state.onStateChange.add(this.clear, this)
    },
    clear: function() {
        var keys = Object.keys(this);
        keys.forEach(function(child) {
            this[child].removeNonPermanent && this[child].removeNonPermanent()
        }, this)
    }
}, Phaser.Signal.prototype.addPermanent = function() {
    var signalBinding = this.add.apply(this, arguments);
    return signalBinding._PERMANENT = !0, signalBinding
}, Phaser.Signal.prototype.removeNonPermanent = function() {
    if (this._bindings)
        for (var n = this._bindings.length; n--;) this._bindings[n]._PERMANENT || (this._bindings[n]._destroy(), this._bindings.splice(n, 1))
}, Solitaire.Lang = function() {
    this.language = game.cache.getJSON("language"), this.code = game.lang
}, Solitaire.Lang.prototype.initLanguage = function() {}, Solitaire.Lang.prototype.getTranslation = function(key) {
    return this.language && this.language[this.code] && this.language[this.code][key] ? this.language[this.code][key] : this.language.en[key] ? (console.warn("Key", key, "not found in language", this.code), this.language.en[key]) : key
}, Solitaire.Configs.prototype.save = function() {}, Solitaire.Configs.prototype.load = function() {}, Solitaire.CardRain = function() {
    Phaser.Group.call(this, game), Solitaire.s.onScreenResize.add(this.onScreenResize, this), this.onScreenResize(), this.next = 0, this.pos = 3, this.horizontal = !1, this.paused = 0, this.lastTime = Date.now();
    for (var i = 0; 9 > i; i++) this.addChild(new Solitaire.CardRainCard);
    Solitaire.s.onDialogOpen.add(this.onDialogOpen, this), Solitaire.s.onDialogClose.add(this.onDialogClose, this), this.running = !0
}, Solitaire.CardRain.prototype = Object.create(Phaser.Group.prototype), Solitaire.CardRain.prototype.onScreenResize = function() {
    this.x = game.world.bounds.x, this.y = 0
}, Solitaire.CardRain.prototype.addCard = function() {
    var card = this.getCard();
    if (null !== card) {
        var xx, yy, min = game.width * (this.pos - 1) / 3,
            max = game.width * this.pos / 3;
        xx = game.rnd.integerInRange(min, max), yy = -150, card.init(xx, yy), this.pos++, this.pos > 3 && (this.pos = 1)
    }
}, Solitaire.CardRain.prototype.getCard = function() {
    return this.getFirstDead()
}, Solitaire.CardRain.prototype.onDialogOpen = function() {
    this.running = !1, this.paused++
}, Solitaire.CardRain.prototype.onDialogClose = function() {
    this.paused--, this.paused < 0 && (this.paused = 0), 0 == this.paused && (this.running = !0)
}, Solitaire.CardRain.prototype.update = function() {
    if (this.now = Date.now(), this.timeDiff = this.now - this.lastTime, this.lastTime = this.now, this.timeDiff > 30 && (this.timeDiff = 30), this.next -= this.timeDiff, this.running) {
        this.next <= 0 && (this.addCard(), this.next = 900 + 1e3 * Math.random());
        for (var i = 0; i < this.children.length; i++) this.children[i].update(this.timeDiff)
    }
}, Solitaire.CardRain.prototype.clear = function() {
    this.running = !1;
    for (var i = this.children.length - 1; i >= 0; i--) this.children[i].destroy()
}, Solitaire.CardRainCard = function() {
    Phaser.Image.call(this, game, 0, 0), this.scale.set(Solitaire.Configs.currentConfigMulti), this.anchor.setTo(.5), this.kill()
}, Solitaire.CardRainCard.prototype = Object.create(Phaser.Image.prototype), Solitaire.CardRainCard.prototype.init = function(x, y) {
    this.x = x, this.y = y, this.velY = .2 + .2 * Math.random(), this.angleSpeed = -.5 + Math.random(), this.revive();
    var r = 1 + Math.floor(13 * Math.random()),
        type = Solitaire.card_types[Math.floor(4 * Math.random())];
    Solitaire.loadTexture(this, type + r, type)
}, Solitaire.CardRainCard.prototype.update = function(timeDiff) {
    this.alive && (this.angle += this.angleSpeed, this.y += timeDiff * this.velY, this.y > game.height + 150 && this.kill())
}, Solitaire.MainMenu = function(game) {}, Solitaire.MainMenu.prototype = {
    init: function() {
        s = game.state.getCurrentState(), game.world.children[0] && game.world.children[0].destroy()
    },
    create: function() {
        this.bg = new Solitaire.Background, this.cardRain = new Solitaire.CardRain(game), this.mainGroup = game.add.group(), this.logo = new Solitaire.Logo(game.width / 2, Solitaire.normalize(500)), this.mainGroup.add(this.logo), this.playBtn = new Solitaire.Button(320, 650, "button_play_big", function() {
            this.overlayLayer.visible === !1 && game.state.start("Game", !0, !1)
        }, this, !0, !0), this.menuButton = new Solitaire.SideButton(0, game.height - 150, "button_menue_small", function() {
            this.sideMenu.open(!0)
        }, this), this.dailyButton = new Solitaire.DailyButtonGroup(0, 650, function() {
            this.overlayLayer.visible || Solitaire.s.onDailyChallenge.dispatch()
        }, this), game.add.existing(this.playBtn), game.add.existing(this.menuButton), game.add.existing(this.dailyButton), game.camera.flash(0, 600, !0), this.overlayLayer = new Solitaire.OverlayLayer, game.calendar = null, game.calendarInfo = null, this.helpDialog = new Solitaire.HelpDialog, this.sideMenu = new Solitaire.SideMenu, Solitaire.s.onScreenResize.add(this.onScreenResize, this), Solitaire.s.onHandChange.add(this.onHandChange, this), Solitaire.s.onDailyChallenge.add(this.onDailyChallenge, this), Solitaire.s.onDailyChallengeInfo.add(this.onDailyChallangeInfo, this), Solitaire.s.onStartGameChallenge.add(this.onStartChallenge, this), game.resizeGame()
    },
    onScreenResize: function() {
        Solitaire.horizontal ? (this.playBtn.x = game.width / 2, this.playBtn.y = Solitaire.normalize(1060), this.dailyButton.y = Solitaire.normalize(1030), this.dailyButton.x = game.width / 2 + Solitaire.normalize(660)) : (this.playBtn.x = game.width / 2, this.playBtn.y = 2 * game.height / 3, this.dailyButton.y = this.playBtn.y + this.playBtn.height + Solitaire.normalize(90), this.dailyButton.x = game.width / 2)
    },
    onHandChange: function() {
        this.onScreenResize(game.width, game.height), Solitaire.PState.saveData()
    },
    onStartChallenge: function(year, month, day, completed, x, y) {
        game.state.start("Game", !0, !1, !0, year, month, day, completed, x, y)
    },
    onDailyChallenge: function() {
        game.user.dailyChallengeInfo ? (game.calendar || (game.calendar = new Solitaire.Calendar), game.calendar.open()) : Solitaire.s.onDailyChallengeInfo.dispatch()
    },
    onDailyChallangeInfo: function() {
        game.calendarInfo || (game.calendarInfo = new Solitaire.CalendarInfo), game.calendarInfo.open(), game.user.dailyChallengeInfo = !0, Solitaire.PState.saveUser()
    },
    shutdown: function() {
        this.bg.destroy(), this.playBtn.destroy(), this.cardRain.clear(), this.cardRain.destroy(), this.overlayLayer.destroy(), game.calendar && (game.calendar.clear(), game.calendar.destroy(!0), game.calendar = null), this.logo.destroy(), this.mainGroup.destroy()
    }
}, Solitaire.Logo = function(x, y) {
    Phaser.Image.call(this, game, x, y), Solitaire.loadTexture(this, "logo_big", "titles"), this.anchor.set(.5), this.scale.set(Solitaire.Configs.currentConfigMulti), this.r = this.width / this.height, this.rWidth = this.width, this.rHeight = this.height, game.add.existing(this), Solitaire.s.onScreenResize.add(this.onScreenResize, this)
}, Solitaire.Logo.prototype = Object.create(Phaser.Image.prototype), Solitaire.Logo.prototype.onScreenResize = function(w, h) {
    w > this.rWidth ? (this.width = this.rWidth, this.height = this.rHeight) : (this.width = .9 * w, this.height = this.width / this.r), this.x = w / 2
}, Solitaire.Background = function() {
    Phaser.Image.call(this, game, 0, 0), Solitaire.loadTexture(this, "bg"), Solitaire.s.onScreenResize.add(this.onScreenResize, this), this.width = game.width, this.height = game.height, game.add.existing(this)
}, Solitaire.Background.prototype = Object.create(Phaser.Image.prototype), Solitaire.Background.prototype.onScreenResize = function(w, h) {
    this.width = w, this.height = h
}, Solitaire.Button = function(x, y, sprite, callback, context, immediate, menu) {
    menu ? Phaser.Button.call(this, game, Solitaire.normalize(x), Solitaire.normalize(y), null) : Phaser.Button.call(this, game, x, y, null), this.state = game.state.getCurrentState(), sprite && Solitaire.loadTexture(this, sprite, "all"), this.anchor.setTo(.5), this.active = !0, menu && this.scale.set(Solitaire.Configs.currentConfigMulti), this.onClick = new Phaser.Signal, callback && this.onClick.add(callback, context || this), this.onInputDown.add(this.click, this), this.terms = [], this.IMMEDIATE = !1, immediate && (this.IMMEDIATE = !0)
}, Solitaire.Button.prototype = Object.create(Phaser.Button.prototype), Solitaire.Button.constructor = Solitaire.Button, Solitaire.Button.prototype.click = function() {
    if (this.active) {
        for (var i = 0; i < this.terms.length; i++)
            if (!this.terms[i][0].call(this.terms[i][1])) return;
        this.active = !1, this.onClick.dispatch(), game.sfx.playSFX("button"), this.IMMEDIATE && (this.active = !0)
    }
}, Solitaire.Button.prototype.addTerm = function(callback, context) {
    this.terms.push([callback, context])
}, Solitaire.Button.prototype.addImageLabel = function(image) {
    this.label = game.make.image(0, 0, "ssheet", image), this.label.anchor.setTo(.5), this.addChild(this.label)
}, Solitaire.Button.prototype.addText = function(text, font, size, stroke, vadjust) {
    this.buttonText ? this.buttonText.setText(text) : (font || (font = Solitaire.Configs.font), size || (size = "40"), this.buttonText = new Solitaire.ButtonText(0, -9, text, font, size, stroke, !1, !0), vadjust && (this.buttonText.y += vadjust), this.addChild(this.buttonText))
}, Solitaire.ButtonText = function(x, y, text, font, size, stroke, shadow, bold, color, menu) {
    var format = {
        fill: "#ffffff",
        align: "center"
    };
    bold ? format.font = "bold " + size + "px " + font : format.font = size + "px " + font, menu ? Phaser.Text.call(this, game, x, y, text.toUpperCase(), format) : Phaser.Text.call(this, game, Solitaire.normalize(x), Solitaire.normalize(y), text.toUpperCase(), format), stroke ? (this.stroke = "#000000", this.strokeThickness = 5) : (this.stroke = "#000000", this.strokeThickness = 0), color ? this.fill = color : this.fill = "#ffffff", shadow && this.setShadow(3, 3, "rgba(0,0,0,0.5)", 5), this.anchor.set(.5)
}, Solitaire.ButtonText.prototype = Object.create(Phaser.Text.prototype), Solitaire.ButtonText.prototype.constructor = Solitaire.ButtonText, Solitaire.ButtonText.prototype.setText = function(n) {
    n || (n = ""), Phaser.Text.prototype.setText.call(this, n.toString().toUpperCase())
}, Solitaire.DailyButtonGroup = function(x, y, callback, context) {
    Phaser.Group.call(this, game), this.x = x, this.y = y, this.scale.set(Solitaire.Configs.currentConfigMulti), this.shine = Solitaire.makeImage(0, -60, "shine", .5, this, "all", !0), this.add(this.shine), this.button = new Solitaire.DailyButton(0, 0, callback, context), this.add(this.button)
}, Solitaire.DailyButtonGroup.prototype = Object.create(Phaser.Group.prototype), Solitaire.DailyButtonGroup.prototype.update = function() {
    this.shine.angle += 2
}, Solitaire.DailyButton = function(x, y, callback, context) {
    Solitaire.Button.call(this, x, y, "button_daily_012", callback, context, !0, !1);
    var text = new Solitaire.ButtonText(0, 70, game.lang.getTranslation("daily_challenge"), Solitaire.Configs.font, 32, !1, !0, !0, Solitaire.Configs.fontColor, !0);
    this.addChild(text)
}, Solitaire.DailyButton.prototype = Object.create(Solitaire.Button.prototype), Solitaire.SideButton = function(x, y, sprite, callback, context, side) {
    Phaser.Button.call(this, game, Solitaire.normalize(x), Solitaire.normalize(y), null), this.state = game.state.getCurrentState(), sprite && Solitaire.loadTexture(this, sprite, "all"), this.anchor.setTo(0), this.active = !0, this.scale.set(Solitaire.Configs.currentConfigMulti), this.onClick = new Phaser.Signal, callback && this.onClick.add(callback, context || this), this.side = side, this.onInputDown.add(this.click, this), Solitaire.s.onMainMenuOpen.add(this.menuOpen, this), Solitaire.s.onMainMenuClose.add(this.menuClose, this), Solitaire.s.onDialogOpen.add(this.bringToTop, this), Solitaire.s.onScreenResize.add(this.onScreenResize, this)
}, Solitaire.SideButton.prototype = Object.create(Phaser.Button.prototype), Solitaire.SideButton.constructor = Solitaire.SideButton, Solitaire.SideButton.prototype.click = function() {
    this.active && (this.onClick.dispatch(), game.sfx.playSFX("button"))
}, Solitaire.SideButton.prototype.onScreenResize = function(w, h) {
    this.y = game.height - Solitaire.normalize(120), "right" == this.side && (this.x = game.width - Solitaire.normalize(120))
}, Solitaire.SideButton.prototype.menuOpen = function() {
    "right" == !this.side && (this.visible = !1)
}, Solitaire.SideButton.prototype.menuClose = function() {
    sideButtonShallBeHidden || (this.visible = !0)
}, Solitaire.MenuButton = function(x, y, callback, context) {
    Phaser.Button.call(this, game, Solitaire.normalize(x), Solitaire.normalize(y), null), this.state = game.state.getCurrentState(), this.anchor.setTo(.5), this.active = !0, this.scale.set(Solitaire.Configs.currentConfigMulti), this.onClick = new Phaser.Signal, callback && this.onClick.add(callback, context || this), this.onInputDown.add(this.click, this)
}, Solitaire.MenuButton.prototype = Object.create(Phaser.Button.prototype), Solitaire.MenuButton.prototype.constructor = Solitaire.MenuButton, Solitaire.MenuButton.prototype.click = function() {
    this.active && (this.onClick.dispatch(), game.sfx.playSFX("button"))
}, Solitaire.MenuButton.prototype.updateHitArea = function(w, h, size) {
    this.x = w / 2, this.hitArea ? (this.hitArea.x = -w / 2, this.hitArea.y = -h / 2, this.hitArea.width = w, this.hitArea.height = h) : this.hitArea = new PIXI.Rectangle(this.x - w / 2, this.y - h / 2, w, h), this.buttonText.fontSize = size
}, Solitaire.MenuButton.prototype.addText = function(text, font, size, stroke, color) {
    font || (font = Solitaire.Configs.font), size || (size = "30"), stroke = stroke === !1 ? !1 : !0, color || (color = Solitaire.Configs.fontColor), this.buttonText = new Solitaire.ButtonText(0, 0, text, font, size, stroke, !1, !0, color), this.buttonText.anchor.set(.5), this.addChild(this.buttonText)
}, Solitaire.MenuSoundButton = function(x, y) {
    Solitaire.MenuButton.call(this, x, y, null), this.mainLength = game.lang.getTranslation("sidemenu_sound").length + 1, this.onLength = game.lang.getTranslation("sidemenu_on").length;
    var string = game.lang.getTranslation("sidemenu_sound") + " " + game.lang.getTranslation("sidemenu_on") + "/" + game.lang.getTranslation("sidemenu_off");
    this.addText(string, !1, !1, !1, Solitaire.Configs.fontColor), game.data.soundMute ? this.buttonText.addColor("#ffff00", this.mainLength + this.onLength + 1) : (this.buttonText.addColor("#ffff00", this.mainLength), this.buttonText.addColor(Solitaire.Configs.fontColor, this.mainLength + this.onLength)), this.onClick.add(this.changeSound, this)
}, Solitaire.MenuSoundButton.prototype = Object.create(Solitaire.MenuButton.prototype), Solitaire.MenuSoundButton.prototype.constructor = Solitaire.MenuSoundButton, Solitaire.MenuSoundButton.prototype.changeSound = function() {
    game.data.soundMute ? (game.sfx.muteSounds(!1), this.buttonText.addColor("#ffff00", this.mainLength), this.buttonText.addColor(Solitaire.Configs.fontColor, this.mainLength + this.onLength), this.buttonText.addColor(Solitaire.Configs.fontColor, this.mainLength + this.onLength + 1)) : (game.sfx.muteSounds(!0), this.buttonText.addColor(Solitaire.Configs.fontColor, this.mainLength), this.buttonText.addColor("#ffff00", this.mainLength + this.onLength + 1))
}, Solitaire.MenuMusicButton = function(x, y) {
    Solitaire.MenuButton.call(this, x, y, null), this.mainLength = game.lang.getTranslation("sidemenu_music").length + 1, this.onLength = game.lang.getTranslation("sidemenu_on").length;
    var string = game.lang.getTranslation("sidemenu_music") + " " + game.lang.getTranslation("sidemenu_on") + "/" + game.lang.getTranslation("sidemenu_off");
    this.addText(string, !1, !1, !1, Solitaire.Configs.fontColor), game.data.musicMute ? this.buttonText.addColor("#ffff00", this.mainLength + this.onLength + 1) : (this.buttonText.addColor("#ffff00", this.mainLength), this.buttonText.addColor(Solitaire.Configs.fontColor, this.mainLength + this.onLength)), this.onClick.add(this.change, this)
}, Solitaire.MenuMusicButton.prototype = Object.create(Solitaire.MenuButton.prototype), Solitaire.MenuMusicButton.prototype.constructor = Solitaire.MenuMusicButton, Solitaire.MenuMusicButton.prototype.change = function() {
    game.data.musicMute ? (game.sfx.muteMusic(!1), this.buttonText.addColor("#ffff00", this.mainLength), this.buttonText.addColor(Solitaire.Configs.fontColor, this.mainLength + this.onLength), this.buttonText.addColor(Solitaire.Configs.fontColor, this.mainLength + this.onLength + 1)) : (game.sfx.muteMusic(!0), this.buttonText.addColor(Solitaire.Configs.fontColor, this.mainLength), this.buttonText.addColor("#ffff00", this.mainLength + this.onLength + 1))
}, Solitaire.MenuHandButton = function(x, y) {
    Solitaire.MenuButton.call(this, x, y, null), this.mainLength = game.lang.getTranslation("sidemenu_hand").length + 1, this.onLength = game.lang.getTranslation("sidemenu_left").length;
    var string = game.lang.getTranslation("sidemenu_hand") + " " + game.lang.getTranslation("sidemenu_left") + "/" + game.lang.getTranslation("sidemenu_right");
    this.addText(string, !1, !1, !1, Solitaire.Configs.fontColor), game.data.isLeftHand ? (this.buttonText.addColor("#ffff00", this.mainLength), this.buttonText.addColor(Solitaire.Configs.fontColor, this.mainLength + this.onLength)) : this.buttonText.addColor("#ffff00", this.mainLength + this.onLength + 1), this.onClick.add(this.change, this)
}, Solitaire.MenuHandButton.prototype = Object.create(Solitaire.MenuButton.prototype), Solitaire.MenuHandButton.prototype.constructor = Solitaire.MenuHandButton, Solitaire.MenuHandButton.prototype.change = function() {
    game.data.isLeftHand ? (game.data.isLeftHand = !1, this.buttonText.addColor(Solitaire.Configs.fontColor, this.mainLength), this.buttonText.addColor("#ffff00", this.mainLength + this.onLength + 1)) : (game.data.isLeftHand = !0, this.buttonText.addColor("#ffff00", this.mainLength), this.buttonText.addColor(Solitaire.Configs.fontColor, this.mainLength + this.onLength), this.buttonText.addColor(Solitaire.Configs.fontColor, this.mainLength + this.onLength + 1)), Solitaire.s.onHandChange.dispatch()
}, Solitaire.ComboText = function(x, y, text) {
    var format = {
        fill: "#ffffff",
        align: "center"
    };
    format.font = "bold 110px " + Solitaire.Configs.font, Phaser.Text.call(this, game, Solitaire.normalize(x), Solitaire.normalize(y), text.toUpperCase(), format), this.stroke = "#000000", this.strokeThickness = 5, this.fill = "#cba41b", this.setShadow(3, 3, "rgba(0,0,0,0.5)", 5), this.anchor.set(.5), Solitaire.s.onCombo.add(this.onCombo, this), this.visible = !1, this.tweenHide = game.add.tween(this).to({
        alpha: 0
    }, 400, Phaser.Easing.Linear.None, !1, 0, 1, !0), this.tweenHide.onComplete.add(this.hide, this)
}, Solitaire.ComboText.prototype = Object.create(Phaser.Text.prototype), Solitaire.ComboText.prototype.constructor = Solitaire.ComboText, Solitaire.ComboText.prototype.onCombo = function(combo) {
    this.x = game.width / 2, this.y = 300, this.text = combo + "x COMBO", this.visible = !0, this.tweenHide.isRunning && (this.tweenHide.stop(), this.tweenHide.pendingDelete = !1), this.alpha = 1, this.tweenHide.start()
}, Solitaire.ComboText.prototype.hide = function() {
    this.visible = !1
}, Solitaire.Score = function(score, date, victory) {
    this.score = score, this.date = date, this.victory = victory
}, Solitaire.Score.prototype = {}, Solitaire.Score.prototype.getDate = function() {
    var mm = this.date.getMonth() + 1,
        dd = this.date.getDate();
    return mm = (mm > 9 ? "" : "0") + mm, dd = (dd > 9 ? "" : "0") + dd, "".concat(dd).concat(".").concat(mm).concat(".").concat(this.date.getFullYear())
}, Solitaire.Scores = function() {
    this.calculateTopScores()
}, Solitaire.Scores.prototype.addNewScore = function(score, victory) {
    for (var date = new Date, str = date.toDateString(), found = !1, i = 0; i < game.data.scores.length; i++)
        if (new Date(game.data.scores[i].date).toDateString() == str) {
            game.data.scores[i].score < score && (game.data.scores[i].score = score, game.data.scores[i].victory = victory), found = !0;
            break
        }
    found || game.data.scores.push({
        score: score,
        date: date.getTime(),
        victory: victory
    }), Solitaire.PState.saveData()
}, Solitaire.Scores.prototype.calculateTopScores = function() {
    this.topScores = game.data.scores
}, Solitaire.Scores.prototype.save = function() {
    Solitaire.PState.saveData();
}, Solitaire.Scores.prototype.load = function() {}, Solitaire.Scores.prototype.isHighScore = function(score) {
    for (var i = 0; i < game.data.scores.length; i++)
        if (score <= game.data.scores[i].score) return !1;
    return !0
}, Solitaire.SFX = function() {
    this.music = game.add.audio("music"), this.card = game.add.audio("card"), this.cardselect = game.add.audio("cardselect"), this.cardmove = game.add.audio("cardmove"), this.correct = game.add.audio("success"), this.button = game.add.audio("button"), this.claps = game.add.audio("claps"), this.musicPlay = !1
}, Solitaire.SFX.prototype.playMusic = function() {
    game.data.musicMute || (this.music.play("", 0, 1, !0), this.musicPlay = !0)
}, Solitaire.SFX.prototype.playClaps = function(multi) {
    game.data.soundMute || (2 == multi ? this.correct.play() : 3 == multi && (this.claps.play(), this.lastClaps = Date.now()))
}, Solitaire.SFX.prototype.playSFX = function(sfx) {
    game.data.soundMute || ("card" === sfx ? this.card.play() : "cardselect" === sfx ? this.card.play() : "cardmove" === sfx ? this.cardmove.play() : "correct" === sfx ? this.correct.play() : "button" === sfx && this.button.play())
}, Solitaire.SFX.prototype.save = function() {
    Solitaire.PState.saveData()
}, Solitaire.SFX.prototype.load = function() {}, Solitaire.SFX.prototype.muteSounds = function(mute) {
    game.data.soundMute = mute, this.save()
}, Solitaire.SFX.prototype.muteMusic = function(mute) {
    game.data.musicMute = mute, mute ? this.music.pause() : this.musicPlay ? this.music.resume() : this.playMusic(), this.save()
}, Solitaire.SideMenu = function() {
    Phaser.Group.call(this, game), this.graphic = game.add.graphics(0, 0), this.add(this.graphic), this.opened = !0, this.offset = 60, this.menuItemsTop = [], this.menuItemsBottom = [], this.SIDEWIDTH = 530, this.BUTTONHEIGHT = 60, this.FONTSIZE = 30, this.closeButton = new Solitaire.Button(500, game.height - Solitaire.normalize(120), "button_close_menue", function() {
        this.close()
    }, this, !0), this.closeButton.anchor.set(0), this.closeButton.scale.set(Solitaire.Configs.currentConfigMulti), this.add(this.closeButton), this.closeButton.hitArea = new PIXI.Rectangle(0, -this.closeButton.y, game.width, game.height), Solitaire.s.onScreenResize.add(this.onScreenResize, this), Solitaire.s.onDialogOpen.add(this.bringToTop, this), this.challengeInfo = null, this.initBasicMenu(), "Game" == game.state.current && this.initGameMenu(), this.onScreenResize(game.width, game.height), this.close(!0)
}, Solitaire.SideMenu.prototype = Object.create(Phaser.Group.prototype), Solitaire.SideMenu.prototype.open = function(immediate) {
    this.opened || (this.opened = !0, game.sideMenuOpen = !0, this.visible = !0, this.x = 0, game.world.bringToTop(this), Solitaire.s.onMainMenuOpen.dispatch())
}, Solitaire.SideMenu.prototype.bringToTop = function() {
    game.world.bringToTop(this)
}, Solitaire.SideMenu.prototype.initBasicMenu = function() {
    this.addSpecialMenuItem(new Solitaire.MenuHandButton(this.SIDEWIDTH, 0)), this.addSpecialMenuItem(new Solitaire.MenuMusicButton(this.SIDEWIDTH, 0)), this.addSpecialMenuItem(new Solitaire.MenuSoundButton(this.SIDEWIDTH, 0)), this.addMenuItem(game.lang.getTranslation("sidemenu_how_to_play"), function() {
        Solitaire.s.onHelp.dispatch(), this.close()
    }, this, !1)
}, Solitaire.SideMenu.prototype.initGameMenu = function() {
    function add(textId, callback) {
        those.addMenuItem(game.lang.getTranslation(textId), function() {
            hideSideMenuButton(), callback()
        }, those, !0)
    }
    var those = this;
    add("sidemenu_home", function() {
        Solitaire.s.onExit.dispatch()
    }), add("sidemenu_restart_game", function() {
        Solitaire.s.onRestartGame.dispatch(), those.close()
    }), add("new_game", function() {
        Solitaire.s.onSelectGame.dispatch(), those.close()
    }), this.addMenuItem(game.lang.getTranslation("sidemenu_daily_challenge"), function() {
        Solitaire.s.onDailyChallenge.dispatch(), this.close()
    }, this, !0), this.challengeInfo = new Solitaire.Button(100, 100, "info", function() {
        Solitaire.s.onDailyChallengeInfo.dispatch()
    }, !1, !0, !0), this.add(this.challengeInfo), this.challengeInfo.anchor.set(1, 0)
}, Solitaire.SideMenu.prototype.close = function(immediate) {
    this.opened && (this.opened = !1, game.sideMenuOpen = !1, this.visible = !1, this.x = -this.width, Solitaire.s.onMainMenuClose.dispatch())
}, Solitaire.SideMenu.prototype.addMenuItem = function(text, callback, context, gravityup, color) {
    var button = new Solitaire.MenuButton(this.SIDEWIDTH / 2, 0, callback, context);
    button.addText(text, !1, this.FONTSIZE, !1, color), button.anchor.set(.5), this.add(button), gravityup ? (button.y = this.menuItemsTop.length * this.offset * 2 + this.offset, this.menuItemsTop.push(button)) : (button.y = game.height - this.menuItemsBottom.length * this.offset * 2 - 2 * this.offset, this.menuItemsBottom.push(button))
}, Solitaire.SideMenu.prototype.addSpecialMenuItem = function(button) {
    button.y = game.height - this.menuItemsBottom.length * this.offset * 2 - 2 * this.offset, button.x = this.SIDEWIDTH / 2, this.menuItemsBottom.push(button), this.add(button)
}, Solitaire.SideMenu.prototype.closeEnd = function() {
    this.visible = !1
}, Solitaire.SideMenu.prototype.drawGreens = function() {
    this.graphic.beginFill(15140, 1);
    for (var w = Solitaire.normalize(this.SIDEWIDTH), i = 0; i < this.menuItemsTop.length; i++) this.graphic.drawRect(0, 10 + i * this.offset * 2 + 2 * this.offset - 4, w, 4);
    for (var i = 0; i < this.menuItemsBottom.length; i++) this.graphic.drawRect(0, game.height - i * this.offset * 2 - 4, w, 4)
}, Solitaire.SideMenu.prototype.onScreenResize = function(w, h) {
    this.graphic.clear(), this.graphic.beginFill(917761, .9), Solitaire.horizontal ? (this.BUTTONHEIGHT = 50, this.SIDEWIDTH = 530, this.FONTSIZE = 44, game.device.desktop && (this.FONTSIZE = 38)) : (this.BUTTONHEIGHT = 90, this.SIDEWIDTH = 800, this.FONTSIZE = 53, game.device.desktop && (this.FONTSIZE = 44));
    var w = Solitaire.normalize(this.SIDEWIDTH),
        ww = this.SIDEWIDTH;
    this.offset = Solitaire.normalize(this.BUTTONHEIGHT), this.offsetW = this.BUTTONHEIGHT, this.graphic.drawRect(0, 0, w, game.height), this.closeButton.x = w, this.drawGreens(), this.closeButton.y = game.height - Solitaire.normalize(120);
    for (var i = 0; i < this.menuItemsTop.length; i++) this.menuItemsTop[i].y = i * this.offset * 2 + this.offset + 10, this.menuItemsTop[i].updateHitArea(ww, 2 * this.offsetW, this.FONTSIZE), this.menuItemsTop[i].x = w / 2;
    for (var i = 0; i < this.menuItemsBottom.length; i++) this.menuItemsBottom[i].y = game.height - i * this.offset * 2 - this.offset, this.menuItemsBottom[i].updateHitArea(ww, 2 * this.offsetW, this.FONTSIZE), this.menuItemsBottom[i].x = w / 2;
    this.challengeInfo && (this.challengeInfo.x = w, this.challengeInfo.y = 6 * this.offset + 11), this.closeButton.hitArea.y = -this.closeButton.y, this.closeButton.hitArea.width = game.width, this.closeButton.hitArea.height = game.height, game.world.bringToTop(this)
}, Solitaire.HintsButton = function(x, y, frame, callback, context) {
    Solitaire.Button.call(this, x, y, frame, callback, context, !0, !0), this.count = new Solitaire.ButtonText(0, 0, game.hintsCount.toString(), Solitaire.Configs.font, 50, !0, !0, !0, Solitaire.Configs.fontYellowColor, !0), this.addChild(this.count), Solitaire.s.onHintUse.add(this.onHintUse, this)
}, Solitaire.HintsButton.prototype = Object.create(Solitaire.Button.prototype), Solitaire.HintsButton.prototype.onHintUse = function() {
    this.count.setText(game.hintsCount.toString())
}, Solitaire.Foundation = function(game, type, x, y) {
    this.cards = new Array, this.x = x, this.y = y, this.game = game, this.type = type, this.bg = Solitaire.makeImage(x, y, "field_0" + (type + 2), [.5, .5], null, "field"), this.stars = new Solitaire.Stars(x, y), this.bg.scale.set(Solitaire.Configs.currentConfigMulti), game.add.existing(this.bg), game.add.existing(this.stars)
}, Solitaire.Foundation.prototype.moveTo = function(x, y) {
    this.x = x, this.y = y, this.bg.x = x, this.bg.y = y - Solitaire.normalize(4), this.stars.x = x, this.stars.y = y;
    for (var i = 0; i < this.cards.length; i++) this.cards[i].x = x, this.cards[i].y = y
}, Solitaire.Foundation.prototype.canAddCard = function(card) {
    return this.type === card.type && card.number === this.cards.length + 1 ? !0 : !1
}, Solitaire.Foundation.prototype.addCard = function(card, instant) {
    this.cards.push(card), card.stack && card.stack.removeCard(card), card.stack = this, card.faceOn || card.faceUp(!0), card.bringToTop(), instant ? (card.x = this.x, card.y = this.y) : (card.targetX = this.x, card.targetY = this.y), game.sfx.playSFX("correct")
}, Solitaire.Foundation.prototype.canGetCard = function(card) {
    return this.cards.indexOf(card) == this.cards.length - 1 ? !0 : !1
}, Solitaire.Foundation.prototype.glow = function() {
    this.stars.glow()
}, Solitaire.Foundation.prototype.isPointIn = function(x, y) {
    return Math.abs(this.x - x) < this.bg.width / 2 && Math.abs(this.y - y) < this.bg.height / 2 ? !0 : !1
}, Solitaire.Foundation.prototype.removeCard = function(card) {
    var i = this.cards.indexOf(card); - 1 != i && this.cards.splice(i, 1)
}, Solitaire.Foundation.prototype.hide = function() {
    this.bg.visible = !1
}, Solitaire.Foundation.prototype.clear = function() {
    this.bg.destroy()
}, Solitaire.Stack1 = function(game, x, y) {
    this.cards = new Array, this.spaceBetweenCards = .1, this.x = x, this.y = y, this.game = game, this.bg = Solitaire.makeImage(x, y - 4, "field_01", [.5, .5], null, "field"), this.bg.scale.set(Solitaire.Configs.currentConfigMulti), game.add.existing(this.bg)
}, Solitaire.Stack1.prototype.moveTo = function(x, y) {
    this.x = x, this.y = y, this.bg.x = x, this.bg.y = y - Solitaire.normalize(4);
    for (var i = 0; i < this.cards.length; i++) this.cards[i].moving ? (this.cards[i].targetX = x, this.cards[i].targetY = y, this.cards[i].recalc = !0) : (this.cards[i].x = x, this.cards[i].y = y)
}, Solitaire.Stack1.prototype.pushCard = function(card, instant) {
    this.cards.push(card), card.stack = this, card.bringToTop(), card.faceDown(!0);
    var n = this.cards.length - 1;
    instant ? (card.x = this.x, card.y = this.y + n * this.spaceBetweenCards) : (card.targetX = this.x, card.targetY = this.y + n * this.spaceBetweenCards, this.game.addMovingCard(card))
}, Solitaire.Stack1.prototype.addCard = function(card, instant) {
    card.stack && card.stack.removeCard(card), this.cards.push(card), card.stack = this, card.bringToTop(), card.faceOn && card.faceDown(!0);
    var n = this.cards.length - 1;
    instant ? (card.x = this.x, card.y = this.y + n * this.spaceBetweenCards) : (card.targetX = this.x, card.targetY = this.y + n * this.spaceBetweenCards)
}, Solitaire.Stack1.prototype.canGetCard = function(card) {
    return this.cards.indexOf(card) == this.cards.length - 1 ? !0 : !1
}, Solitaire.Stack1.prototype.shuffle = function() {
    for (var j, x, i, z = 0; 9 > z; z++)
        for (i = this.cards.length; i; i--) j = Math.floor(Math.random() * i), x = this.cards[i - 1], this.cards[i - 1] = this.cards[j], this.cards[j] = x;
    for (i = 0; i < this.cards.length; i++) this.cards[i].bringToTop()
}, Solitaire.Stack1.prototype.getLastCard = function() {
    return this.cards.length > 0 ? this.cards[this.cards.length - 1] : null
}, Solitaire.Stack1.prototype.removeCard = function(card) {
    var i = this.cards.indexOf(card); - 1 != i && this.cards.splice(i, 1)
}, Solitaire.Stack1.prototype.clear = function() {
    this.bg.destroy()
}, Solitaire.Stack2 = function(game, x, y) {
    this.cards = new Array, this.x = x, this.y = y, this.game = game, this.bg = Solitaire.makeImage(x, y - 4, "field_01", [.5, .5], null, "field"), this.bg.scale.set(Solitaire.Configs.currentConfigMulti), game.add.existing(this.bg)
}, Solitaire.Stack2.prototype.moveTo = function(x, y) {
    this.x = x, this.y = y, this.bg.x = x, this.bg.y = y - Solitaire.normalize(4);
    for (var i = 0; i < this.cards.length; i++) this.cards[i].x = x, this.cards[i].y = y;
    this.rearrange()
}, Solitaire.Stack2.prototype.pushCard = function(card) {
    this.cards.push(card), card.stack = this, card.bringToTop();
    var offset = 0;
    card.delay = 0, card.x = this.x + offset, card.y = this.y
}, Solitaire.Stack2.prototype.canGetCard = function(card) {
    return this.cards.indexOf(card) == this.cards.length - 1 ? !0 : !1
}, Solitaire.Stack2.prototype.addCard = function(card, instant, undo) {
    this.cards.push(card), card.stack.removeCard(card), card.stack = this, card.bringToTop();
    var offset = 0,
        show = 1;
    3 === show && card.pos && (1 == card.pos ? offset = 34 : 2 == card.pos ? offset = 17 : 3 == card.pos && (offset = 0)), instant ? (card.x = this.x + offset, card.y = this.y) : (card.targetX = this.x + offset, card.targetY = this.y), card.faceOn || card.faceUp(!1, Solitaire.horizontal), this.rearrange()
}, Solitaire.Stack2.prototype.rearrange = function() {
    if (1 !== this.game.gameType) {
        var i;
        for (i = 0; i < this.cards.length - 3; i++) this.cards[i].x = this.x, this.cards[i].select();
        var count = 0,
            offset = 30;
        for (game.data.isLeftHand || (offset = -30); i < this.cards.length; i++) this.cards[i].targetX = this.x + count * offset, this.cards[i].targetY = this.y, this.cards[i].select(), this.game.addMovingCard(this.cards[i]), count++
    }
}, Solitaire.Stack2.prototype.removeCard = function(card) {
    var i = this.cards.indexOf(card); - 1 != i && this.cards.splice(i, 1), this.rearrange()
}, Solitaire.Stack2.prototype.moveToStack = function(stack, undoQueue, undoItemStore, context) {
    if (this.cards.length > 0) {
        var item = undoItemStore.pop();
        item.card = this.cards[0], item.stack1 = item.card.stack, item.stack2 = this, item.turn = !1;
        for (var n = item, i = 0; i < this.cards.length; i++) {
            var card = this.cards[i];
            i > 0 && (n.next = undoItemStore.pop(), n = n.next, n.card = card, n.stack1 = n.card.stack, n.stack2 = this, n.turn = !1)
        }
        undoQueue.items.push(item);
        for (var i = (this.cards.length - 1, this.cards.length - 1); i >= 0; i--) {
            var card = this.cards[i];
            stack.pushCard(card, !0), this.cards.splice(i, 1)
        }
    }
}, Solitaire.Stack2.prototype.clear = function() {
    this.bg.destroy()
}, Solitaire.TempStack = function(game, x, y) {
    this.cards = new Array, this.x = x, this.y = y, this.height = 255, this.spaceBetweenCards = Solitaire.normalize(15), this.spaceBetweenFaceCards = Solitaire.normalize(30), this.game = game, this.bg = Solitaire.makeImage(this.x, this.y - 4, "field_01", [.5, .5], null, "field"), this.bg.scale.set(Solitaire.Configs.currentConfigMulti), game.add.existing(this.bg), this.calcSpace()
}, Solitaire.TempStack.prototype.calcSpace = function() {
    Solitaire.horizontal ? (this.SPACE_BETWEEN_BIG = Solitaire.normalize(20), this.SPACE_BETWEEN_MIDDLE = Solitaire.normalize(7), this.SPACE_BETWEEN_LOW = 2, this.SPACE_BETWEEN_BIG_FACE = Solitaire.normalize(70), this.SPACE_BETWEEN_MIDDLE_FACE = Solitaire.normalize(60), this.SPACE_BETWEEN_LOW_FACE = Solitaire.normalize(50), this.SPACE_BETWEEN_MIN_FACE = Solitaire.normalize(30)) : (this.SPACE_BETWEEN_BIG = Solitaire.normalize(20), this.SPACE_BETWEEN_MIDDLE = Solitaire.normalize(7), this.SPACE_BETWEEN_LOW = 2, this.SPACE_BETWEEN_BIG_FACE = Solitaire.normalize(120), this.SPACE_BETWEEN_MIDDLE_FACE = Solitaire.normalize(90), this.SPACE_BETWEEN_LOW_FACE = Solitaire.normalize(80), this.SPACE_BETWEEN_MIN_FACE = Solitaire.normalize(50))
}, Solitaire.TempStack.prototype.moveTo = function(x, y) {
    this.x = x, this.y = y, this.bg.x = x, this.bg.y = y - Solitaire.normalize(4), this.calcSpace(), this.calculateSpace();
    for (var yy = y, i = 0; i < this.cards.length; i++) this.cards[i].x = x, this.cards[i].y = yy, yy += this.cards[i].faceOn === !0 ? this.spaceBetweenFaceCards : this.spaceBetweenCards
}, Solitaire.TempStack.prototype.pushCard = function(card, faceOn, instant) {
    card.stack = this;
    this.cards.length;
    instant ? card.x = this.x : card.targetX = this.x;
    var yy = 0;
    this.calculateSpace();
    for (var i = 0; i < this.cards.length; i++) yy += this.cards[i].faceOn === !0 ? this.spaceBetweenFaceCards : this.spaceBetweenCards;
    instant ? card.y = this.y + yy : card.targetY = this.y + yy, this.height = yy + card.height, card.bringToTop(), faceOn ? card.faceUp(!0) : card.faceDown(!0), this.cards.push(card)
}, Solitaire.TempStack.prototype.calculateSpace = function() {
    this.cards.length < 8 ? (this.spaceBetweenCards = this.SPACE_BETWEEN_BIG, this.spaceBetweenFaceCards = this.SPACE_BETWEEN_BIG_FACE) : this.cards.length < 11 ? (this.spaceBetweenCards = this.SPACE_BETWEEN_MIDDLE, this.spaceBetweenFaceCards = this.SPACE_BETWEEN_MIDDLE_FACE) : this.cards.length < 20 ? (this.spaceBetweenCards = this.SPACE_BETWEEN_LOW, this.spaceBetweenFaceCards = this.SPACE_BETWEEN_LOW_FACE) : (this.spaceBetweenCards = this.SPACE_BETWEEN_LOW, this.spaceBetweenFaceCards = this.SPACE_BETWEEN_MIN_FACE)
}, Solitaire.TempStack.prototype.canAddCard = function(card) {
    return 0 == this.cards.length && 13 == card.number ? !0 : this.cards.length > 0 && 1 == this.cards[this.cards.length - 1].faceOn && this.nextCard(this.cards[this.cards.length - 1], card) && this.nextColor(this.cards[this.cards.length - 1], card) ? !0 : !1
}, Solitaire.TempStack.prototype.nextCard = function(lastcard, newcard) {
    return newcard.number == lastcard.number - 1 ? !0 : !1
}, Solitaire.TempStack.prototype.nextColor = function(lastcard, newcard) {
    return lastcard.color() !== newcard.color() ? !0 : !1
}, Solitaire.TempStack.prototype.addCard = function(card, instant) {
    if (this.cards.indexOf(card) >= 0) return !1;
    card.stack.removeCard(card), card.stack = this;
    var yy = (this.cards.length, 0);
    this.calculateSpace();
    for (var i = 0; i < this.cards.length; i++) this.cards[i].moving ? (this.cards[i].targetY = this.y + yy, this.cards[i].targetX = this.x, this.cards[i].recalculate = !0) : (this.cards[i].y = this.y + yy, this.cards[i].x = this.x), yy += 1 == this.cards[i].faceOn ? this.spaceBetweenFaceCards : this.spaceBetweenCards;
    instant ? (card.x = this.x, card.y = this.y + yy) : (card.targetX = this.x, card.targetY = this.y + yy), this.height = yy + 70, this.cards.push(card), card.bringToTop()
}, Solitaire.TempStack.prototype.isPointIn = function(x, y) {
    return Math.abs(this.x - x) < this.bg.width / 2 && this.y - this.bg.height / 2 < y && this.y + this.height + 300 > y ? !0 : !1
}, Solitaire.TempStack.prototype.canGetCard = function(card) {
    return card.faceOn
}, Solitaire.TempStack.prototype.needTurnLast = function(card) {
    var index = this.cards.indexOf(card);
    return index > 0 && this.cards[index - 1].faceOn === !1 ? !0 : !1
}, Solitaire.TempStack.prototype.lastCard = function(card) {
    return this.cards.indexOf(card) == this.cards.length - 1 ? !0 : !1
}, Solitaire.TempStack.prototype.getLastCard = function() {
    return this.cards.length > 0 ? this.cards[this.cards.length - 1] : null
}, Solitaire.TempStack.prototype.getFirstOpen = function() {
    if (0 == this.cards.length) return null;
    for (var i = 0; i < this.cards.length - 1 && !this.cards[i].faceOn;) i++;
    return this.cards[i]
}, Solitaire.TempStack.prototype.getFirstOpenIndex = function() {
    if (0 == this.cards.length) return -1;
    for (var i = 0; i < this.cards.length - 1 && !this.cards[i].faceOn;) i++;
    return i
}, Solitaire.TempStack.prototype.hasClosed = function() {
    return this.cards.length > 0 && !this.cards[0].faceOn ? !0 : !1
}, Solitaire.TempStack.prototype.removeCard = function(card) {
    var i = this.cards.indexOf(card);
    if (-1 != i && (this.cards.splice(i, 1), this.cards.length > 0)) {
        var last = this.cards[this.cards.length - 1];
        last.faceOn || last.faceUp()
    }
    this.calculateSpace();
    for (var yy = 0, i = 0; i < this.cards.length; i++) this.cards[i].y = this.y + yy, this.cards[i].x = this.x, yy += 1 == this.cards[i].faceOn ? this.spaceBetweenFaceCards : this.spaceBetweenCards
}, Solitaire.TempStack.prototype.turnLast = function() {
    if (this.cards.length > 0) {
        var card = this.cards[this.cards.length - 1];
        card.faceDown()
    }
}, Solitaire.TempStack.prototype.hide = function() {
    this.bg.visible = !1
}, Solitaire.TempStack.prototype.recycle = function(x, y) {
    this.x = x, this.y = y, this.bg.x = x, this.bg.y = y, this.bg.visible = !0
}, Solitaire.TempStack.prototype.clear = function() {
    this.bg.destroy()
}, Solitaire.UndoItem = function() {
    this.stack1 = null, this.stack2 = null, this.card = null, this.next = null, this.turn = !1
}, Solitaire.UndoQueue = function() {
    this.items = new Array
}, Solitaire.UndoItemStore = function() {
    this.items = new Array
}, Solitaire.UndoItemStore.prototype.push = function(item) {
    for (; null != item;) item.turnLast = !1, item.turn = !1, this.items.push(item), item = item.next
}, Solitaire.UndoItemStore.prototype.pop = function() {
    var item = this.items.pop();
    return item || (item = new Solitaire.UndoItem), item.next = null, item.score = 0, item
}, Solitaire.moves = {}, Solitaire.moves.MOVE_WASTE_TABLEAU = 1, Solitaire.moves.MOVE_WASTE_FOUNDATION = 2, Solitaire.moves.MOVE_TABLEAU_FOUNDATION = 3, Solitaire.moves.MOVE_OTHER = 4, Solitaire.Stars = function(x, y) {
    Phaser.Sprite.call(this, game, x, y), this.frame = 0, Solitaire.loadTexture(this, "stars", "all"), this.anchor.setTo(.5), this.scale.setTo(.8 * Solitaire.Configs.currentConfigMulti), this.visible = !1, this.tween = game.add.tween(this.scale).to({
        x: 1.3 * Solitaire.Configs.currentConfigMulti,
        y: 1.2 * Solitaire.Configs.currentConfigMulti
    }, 200, Phaser.Easing.Linear.None, !1, 0, 0, !1), this.tween.onComplete.add(this.animationStop, this)
}, Solitaire.Stars.prototype = Object.create(Phaser.Sprite.prototype), Solitaire.Stars.prototype.glow = function() {
    this.visible = !0, this.tween.start()
}, Solitaire.Stars.prototype.animationStop = function() {
    this.scale.setTo(.8), this.visible = !1
}, Solitaire.Animations = function(game, positions) {
    Phaser.Group.call(this, game), this.currentAnimationType = Solitaire.Animations.TYPES[0], this.timer = 0, this.positions = positions, Solitaire.s.onScreenResize.add(this.onScreenResize, this), Solitaire.s.onAnimationStop.add(this.finish, this), this.initAnimation(), this.nextCard()
}, Solitaire.Animations.prototype = Object.create(Phaser.Group.prototype), Solitaire.Animations.prototype.initAnimation = function() {
    this.running = !0, this.gravity = 1, this.texture = game.add.renderTexture(game.width, game.height), this.add(game.add.sprite(0, 0, this.texture)), this.type = 0, this.number = 13, this.card = game.add.sprite(this.positions[this.type][0], this.positions[this.type][1], null), this.card.anchor.set(.5), this.card.scale.set(Solitaire.Configs.currentConfigMulti), this.card.bouncy = .5 + .4 * Math.random(), this.card.vel = -30
}, Solitaire.Animations.TYPES = ["win", "big", "glass"], Solitaire.Animations.prototype.onScreenResize = function(w, h) {
    this.texture.clear(), this.texture.resize(w, h), this.nextCard()
}, Solitaire.Animations.prototype.nextCard = function() {
    try {
        this.card.x = this.positions[this.type][0], this.card.y = this.positions[this.type][1], this.card.loadTexture(Solitaire.card_types[this.type], Solitaire.card_types[this.type] + this.number), this.card.bouncy = .5 + .4 * Math.random(), this.card.velY = -8, this.card.velX = -8 + 16 * Math.random(), this.card.velX >= 0 && this.card.velX < 2 ? this.card.velX += 2 : this.card.velX < 0 && this.card.velX > -2 && (this.card.velX -= 2), this.card.velX *= 4, this.type < 3 ? this.type++ : (this.type = 0, this.number > 1 ? this.number-- : this.finish())
    } catch (e) {
        console.log("next card error")
    }
}, Solitaire.Animations.prototype.finish = function() {
    this.running && (this.running = !1, Solitaire.s.onScreenResize.remove(this.onScreenResize), Solitaire.s.onAnimationStop.remove(this.finish), this.card.destroy(), this.card = null, this.texture.clear(), this.texture.visible = !1, this.destroy())
}, Solitaire.Animations.prototype.update = function() {
    this.running && (this.card.y += this.card.velY, this.card.x += this.card.velX, this.card.velY += this.gravity, this.card.y > game.height - this.card.height / 2 && this.card.velY > 0 && (this.card.velY = -this.card.velY * this.card.bouncy), this.texture.renderXY(this.card, this.card.x, this.card.y, !1), (this.card.x < -this.card.width / 2 || this.card.x > game.width + this.card.width / 2) && this.nextCard())
}, Solitaire.Animations2 = function(game, positions) {
    Phaser.Group.call(this, game), this.running = !0, this.renderTexture, this.renderTexture2, this.currentTexture, this.outputSprite, this.stuffContainer, this.count = 0, this.renderTexture = game.add.renderTexture(game.width, game.height, "texture1"), this.renderTexture2 = game.add.renderTexture(game.width, game.height, "texture2"), this.currentTexture = this.renderTexture, this.outputSprite = game.add.sprite(game.width / 2, game.height / 2, this.currentTexture), this.add(this.outputSprite), this.outputSprite.anchor.x = .5, this.outputSprite.anchor.y = .5, this.stuffContainer = game.add.group(), this.add(this.stuffContainer), this.stuffContainer.x = game.width / 2, this.stuffContainer.y = game.height / 2;
    for (var i = 0; 20 > i; i++) {
        var type = Solitaire.card_types[Math.floor(Solitaire.card_types.length * Math.random())],
            n = 1 + Math.floor(13 * Math.random()),
            item = this.stuffContainer.create(400 * Math.random() - 200, 400 * Math.random() - 200, type, type + n);
        item.scale.set(Solitaire.Configs.currentConfigMulti), item.anchor.setTo(.5, .5)
    }
    this.count = 0, Solitaire.s.onScreenResize.add(this.onScreenResize, this), Solitaire.s.onAnimationStop.add(this.finish, this), this.start()
}, Solitaire.Animations2.prototype = Object.create(Phaser.Group.prototype), Solitaire.Animations2.prototype.start = function() {
    game.world.bringToTop(this)
}, Solitaire.Animations2.prototype.onScreenResize = function(w, h) {}, Solitaire.Animations2.prototype.finish = function() {
    this.running && (this.running = !1, this.renderTexture.destroy(), this.renderTexture2.destroy(), this.currentTexture.destroy(), this.outputSprite.destroy(), this.stuffContainer.destroy(), Solitaire.s.onScreenResize.remove(this.onScreenResize), Solitaire.s.onAnimationStop.remove(this.finish))
}, Solitaire.Animations2.prototype.update = function() {
    if (this.running) {
        this.stuffContainer.addAll("rotation", .1), this.count += .01;
        var temp = this.renderTexture;
        this.renderTexture = this.renderTexture2, this.renderTexture2 = temp, this.outputSprite.setTexture(this.renderTexture), this.stuffContainer.rotation -= .01, this.outputSprite.scale.x = this.outputSprite.scale.y = 1 + .2 * Math.sin(this.count), this.renderTexture2.renderXY(this, 0, 0, !0)
    }
}, Solitaire.Animations3 = function(game, positions) {
    Phaser.Group.call(this, game), Solitaire.s.onScreenResize.add(this.onScreenResize, this), this.onScreenResize(), this.next = 0, this.horizontal = !1, this.lastTime = Date.now();
    for (var i = 0; 13 > i; i++) this.addChild(new Solitaire.AnimationCard(!0));
    Solitaire.s.onScreenResize.add(this.onScreenResize, this), Solitaire.s.onAnimationStop.add(this.finish, this), this.running = !0
}, Solitaire.Animations3.prototype = Object.create(Phaser.Group.prototype), Solitaire.Animations3.prototype.onScreenResize = function() {}, Solitaire.Animations3.prototype.finish = function() {
    this.running && (this.running = !1, this.destroy(), Solitaire.s.onScreenResize.remove(this.onScreenResize), Solitaire.s.onAnimationStop.remove(this.finish))
}, Solitaire.Animations3.prototype.addCard = function() {
    var card = this.getCard();
    if (null !== card) {
        var xx, yy;
        xx = 200 - 400 * Math.random() + game.width / 2, yy = game.height - 200, card.init(xx, yy, 3)
    }
}, Solitaire.Animations3.prototype.getCard = function() {
    return this.getFirstDead()
}, Solitaire.Animations3.prototype.onDialogOpen = function() {
    this.running = !1
}, Solitaire.Animations3.prototype.onDialogClose = function() {
    this.running = !0
}, Solitaire.Animations3.prototype.update = function() {
    if (this.now = Date.now(), this.timeDiff = this.now - this.lastTime, this.lastTime = this.now, this.timeDiff > 30 && (this.timeDiff = 30), this.next -= this.timeDiff, this.running) {
        this.next <= 0 && (this.addCard(), this.next = 1e3 * Math.random());
        for (var i = 0; i < this.children.length; i++) this.children[i].update(this.timeDiff)
    }
}, Solitaire.Animations4 = function(game, positions) {
    Phaser.Group.call(this, game), Solitaire.s.onScreenResize.add(this.onScreenResize, this), this.onScreenResize(), this.next = 0, this.horizontal = !1, this.lastTime = Date.now();
    for (var i = 0; 13 > i; i++) this.addChild(new Solitaire.AnimationCard);
    Solitaire.s.onScreenResize.add(this.onScreenResize, this), Solitaire.s.onAnimationStop.add(this.finish, this), this.running = !0
}, Solitaire.Animations4.prototype = Object.create(Phaser.Group.prototype), Solitaire.Animations4.prototype.onScreenResize = function() {}, Solitaire.Animations4.prototype.finish = function() {
    this.running && (this.running = !1, this.destroy(), Solitaire.s.onScreenResize.remove(this.onScreenResize), Solitaire.s.onAnimationStop.remove(this.finish))
}, Solitaire.Animations4.prototype.addCard = function() {
    var card = this.getCard();
    if (null !== card) {
        var xx, yy;
        xx = 200 - 400 * Math.random() + game.width / 2, yy = 200 + 300 * Math.random(), card.init(xx, yy)
    }
}, Solitaire.Animations4.prototype.getCard = function() {
    return this.getFirstDead()
}, Solitaire.Animations4.prototype.onDialogOpen = function() {
    this.running = !1
}, Solitaire.Animations4.prototype.onDialogClose = function() {
    this.running = !0
}, Solitaire.Animations4.prototype.update = function() {
    if (this.now = Date.now(), this.timeDiff = this.now - this.lastTime, this.lastTime = this.now, this.timeDiff > 30 && (this.timeDiff = 30), this.next -= this.timeDiff, this.running) {
        this.next <= 0 && (this.addCard(), this.next = 3e3 * Math.random());
        for (var i = 0; i < this.children.length; i++) this.children[i].update(this.timeDiff)
    }
}, Solitaire.AnimationCard = function(symbols) {
    Phaser.Sprite.call(this, game, 0, 0), this.scale.set(Solitaire.Configs.currentConfigMulti), this.anchor.setTo(.5), this.kill(), this.symbols = symbols
}, Solitaire.AnimationCard.prototype = Object.create(Phaser.Sprite.prototype), Solitaire.AnimationCard.prototype.init = function(x, y, v) {
    if (3 === v) {
        this.angleSpeed = -1 + 2 * Math.random(), this.angleSpeed *= 4, this.revive(), this.x = x, this.y = y, this.velY = -8 * Math.random() - 20, this.velX = -4 + 8 * Math.random(), this.gravity = .3 + .05 * Math.random(), this.scaleXSpeed = 0;
        var change = !0;
        if (this.symbols) {
            var n = Math.random();
            if (.5 > n) {
                var c = "c" + Math.floor(4 * Math.random() + 1);
                Solitaire.loadTexture(this, c, "symbols"), change = !1
            }
        }
        if (change) {
            var r = 1 + Math.floor(13 * Math.random()),
                type = Solitaire.card_types[Math.floor(4 * Math.random())];
            Solitaire.loadTexture(this, type + r, type)
        }
        this.lifespan = 11e3
    } else {
        this.angleSpeed = -.5 + Math.random(), this.revive(), this.x = x, this.y = y, this.velY = -.8 * Math.random() - .1, this.velX = -.004 + .008 * Math.random(), this.gravity = .01 * Math.random(), this.scaleXSpeed = .01 - .02 * Math.random(), this.scaleXSpeed *= 2;
        var r = 1 + Math.floor(13 * Math.random()),
            type = Solitaire.card_types[Math.floor(4 * Math.random())];
        Solitaire.loadTexture(this, type + r, type), this.lifespan = 13e3
    }
}, Solitaire.AnimationCard.prototype.update = function(timeDiff) {
    this.alive && (this.angle += this.angleSpeed, this.scale.set(this.scale.x + this.scaleXSpeed * timeDiff / 8, this.scale.y), this.scale.x < -2 * Solitaire.Configs.currentConfigMulti && this.scaleXSpeed < 0 && (this.scaleXSpeed = -this.scaleXSpeed), this.scale.x > 2 * Solitaire.Configs.currentConfigMulti && this.scaleXSpeed > 0 && (this.scaleXSpeed = -this.scaleXSpeed), this.y += this.velY, this.x += this.velX, this.velY += this.gravity, this.y > game.height + 150 && this.kill())
}, Solitaire.Animations5 = function(game, positions) {
    Phaser.Group.call(this, game), this.positions = positions, Solitaire.s.onScreenResize.add(this.onScreenResize, this), Solitaire.s.onAnimationStop.add(this.finish, this), this.initAnimation(), this.onScreenResize(game.width, game.height)
}, Solitaire.Animations5.prototype = Object.create(Phaser.Group.prototype), Solitaire.Animations5.prototype.initAnimation = function() {
    this.running = !0, this.group1 = game.add.group(), this.add(this.group1);
    for (var i = 0; 360 > i; i += 15) {
        var card = game.add.image(0, 0),
            r = 1 + Math.floor(13 * Math.random()),
            type = Solitaire.card_types[Math.floor(4 * Math.random())];
        Solitaire.loadTexture(card, type + r, type), card.anchor.set(.5, 1), card.angle = i, this.group1.add(card)
    }
    this.a = 1, this.achange = .01
}, Solitaire.Animations5.prototype.onScreenResize = function(w, h) {
    this.group1.x = game.width / 2, this.group1.y = game.height / 2
}, Solitaire.Animations5.prototype.finish = function() {
    this.running && (this.running = !1, Solitaire.s.onScreenResize.remove(this.onScreenResize), Solitaire.s.onAnimationStop.remove(this.finish), this.group1.destroy(), this.destroy())
}, Solitaire.Animations5.prototype.update = function() {
    this.running && (this.group1.angle += 2, this.a += this.achange, this.group1.setAll("anchor.y", this.a), this.a > 3 && this.achange > 0 && (this.achange = -this.achange), this.a < 1 && this.achange < 0 && (this.achange = -this.achange))
}, Solitaire.Animations6 = function(game, positions) {
    Phaser.Group.call(this, game), this.running = !0, this.renderTexture, this.renderTexture2, this.currentTexture, this.outputSprite, this.stuffContainer, this.count = 0, this.renderTexture = game.add.renderTexture(game.width, game.height, "texture1"), this.renderTexture2 = game.add.renderTexture(game.width, game.height, "texture2"), this.currentTexture = this.renderTexture, this.outputSprite = game.add.sprite(game.width / 2, game.height / 2, this.currentTexture), this.add(this.outputSprite), this.outputSprite.anchor.x = .5, this.outputSprite.anchor.y = .5, this.stuffContainer = game.add.group(), this.add(this.stuffContainer), this.stuffContainer.x = game.width / 2, this.stuffContainer.y = game.height / 2;
    for (var i = 0; 20 > i; i++) {
        var type = Solitaire.card_types[Math.floor(Solitaire.card_types.length * Math.random())],
            n = 1 + Math.floor(13 * Math.random()),
            item = this.stuffContainer.create(400 * Math.random() - 200, 400 * Math.random() - 200, type, type + n);
        item.scale.set(Solitaire.Configs.currentConfigMulti), item.anchor.setTo(.5, .5)
    }
    this.count = 0, Solitaire.s.onScreenResize.add(this.onScreenResize, this), Solitaire.s.onAnimationStop.add(this.finish, this), this.start()
}, Solitaire.Animations6.prototype = Object.create(Phaser.Group.prototype), Solitaire.Animations6.prototype.start = function() {
    game.world.bringToTop(this)
}, Solitaire.Animations6.prototype.onScreenResize = function(w, h) {
    this.stuffContainer.x = game.width / 2, this.stuffContainer.y = game.height / 2, this.renderTexture.clear(), this.renderTexture2.clear()
}, Solitaire.Animations6.prototype.finish = function() {
    this.running && (this.running = !1, this.renderTexture.destroy(), this.renderTexture2.destroy(), this.currentTexture.destroy(), this.outputSprite.destroy(), this.stuffContainer.destroy(), Solitaire.s.onScreenResize.remove(this.onScreenResize), Solitaire.s.onAnimationStop.remove(this.finish))
}, Solitaire.Animations6.prototype.update = function() {
    if (this.running) {
        this.stuffContainer.addAll("rotation", .1), this.count += .01;
        var temp = this.renderTexture;
        this.renderTexture = this.renderTexture2, this.renderTexture2 = temp, this.outputSprite.setTexture(this.renderTexture), this.stuffContainer.rotation -= .01, this.outputSprite.scale.x = this.outputSprite.scale.y = 1, this.renderTexture2.renderXY(this, 0, 0, !0)
    }
}, Solitaire.Configs.CalendarButtonWidth = 188, Solitaire.Configs.CalendarButtonHeight = 172, Solitaire.CalendarButton = function(x, y, callback, context, calendar) {
    Phaser.Button.call(this, game, x, y, null), this.anchor.setTo(0), this.graphic = game.add.graphics(), this.addChild(this.graphic), this.active = !0, this.select = !1, this.available = !0, Solitaire.loadTexture(this, "button_green_small_calendar", "all"), this.onClick = new Phaser.Signal, callback && this.onClick.add(callback, context || this), this.onInputDown.add(this.click, this), this.buttonText = new Solitaire.ButtonText(23, 39, "0", Solitaire.Configs.font, 50, !1, !1, !0, Solitaire.Configs.fontColor, !0), this.buttonText.anchor.set(0, .5), this.addChild(this.buttonText), game.device.desktop && (this.events.onInputOver.add(this.mouseOver, this), this.events.onInputOut.add(this.mouseOut, this))
}, Solitaire.CalendarButton.prototype = Object.create(Phaser.Button.prototype), Solitaire.CalendarButton.prototype.constructor = Solitaire.CalendarButton, Solitaire.CalendarButton.prototype.setSelect = function(select) {
    this.select != select && (this.select = select, select ? (this.graphic.clear(), this.graphic.lineStyle(5, 16777215, .8), this.graphic.beginFill(29488, 0), this.graphic.drawRect(0, 0, 188, 72)) : (this.graphic.clear(), this.graphic.beginFill(29488, 1), this.graphic.drawRect(0, 0, 188, 72)))
}, Solitaire.CalendarButton.prototype.mouseOver = function() {
    !this.select && this.available && (this.graphic.clear(), this.graphic.lineStyle(5, 16777215, .8), this.graphic.beginFill(29488, 1), this.graphic.drawRect(0, 0, 188, 72))
}, Solitaire.CalendarButton.prototype.mouseOut = function() {
    !this.select && this.available && (this.graphic.clear(), this.graphic.beginFill(29488, 1), this.graphic.drawRect(0, 0, 188, 72))
}, Solitaire.CalendarButton.prototype.setAvailable = function(available) {
    this.available = available, available ? (this.active = !0, this.graphic.clear(), this.graphic.beginFill(29488, 1), this.graphic.drawRect(0, 0, 188, 72)) : (this.active = !1, this.graphic.clear(), this.graphic.beginFill(24616, 1), this.graphic.drawRect(0, 0, 188, 72))
}, Solitaire.CalendarButton.prototype.click = function() {
    this.active && (this.onClick.dispatch(), game.sfx.playSFX("button"))
}, Solitaire.CalendarButton.prototype.setScore = function(score, time) {
    if (score ? this.score = score.toString() : this.score = "0", time) {
        var minutes = Math.floor(time / 60),
            seconds = Math.floor(time) - 60 * minutes;
        this.time = 10 > minutes ? "0" + minutes : minutes, this.time += 10 > seconds ? ":0" + seconds : ":" + seconds
    } else this.time = "00:00"
}, Solitaire.CalendarButton.prototype.setText = function(text) {
    this.buttonText.setText(text)
}, Solitaire.CalendarButton.prototype.setCrown = function(n) {
    0 == n ? (this.crownValue = 0, this.crown && (this.crown.visible = !1)) : 1 == n ? (this.crownValue = 1, this.crown ? (Solitaire.loadTexture(this.crown, "crown_small", "all"), this.crown.visible = !0) : (this.crown = game.add.image(115, 9, "all", "crown_small"), this.addChild(this.crown))) : 2 == n && (this.crownValue = 2, this.crown ? (this.crown.visible = !0, Solitaire.loadTexture(this.crown, "crown_gray", "all")) : (this.crown = game.add.image(115, 9, "all", "crown_gray"), this.addChild(this.crown)))
}, Solitaire.CalendarProgress = function(x, y) {
    Phaser.Image.call(this, game, x, y, "all", "bardark"), this.progressBar = game.add.image(0, 0, "all", "barlight"), this.addChild(this.progressBar), this.progressBar.scale.x = .8
}, Solitaire.CalendarProgress.prototype = Object.create(Phaser.Image.prototype), Solitaire.CalendarProgress.prototype.constructor = Solitaire.CalendarProgress, Solitaire.CalendarProgress.prototype.setProgress = function(crowns, animate) {
    var scale = crowns / 28;
    scale > 1 && (scale = 1), animate ? game.add.tween(this.progressBar.scale).to({
        x: scale
    }, 1e3, Phaser.Easing.Bounce.Out, !0) : this.progressBar.scale.x = scale
}, Solitaire.Calendar = function() {
    function onPlayClick() {
        Solitaire.s.onStartGameChallenge.dispatch(that.year, that.month, that.day, 1 == that.days[that.day - 1].crownValue, that.days[that.day - 1].x + 140, that.days[that.day - 1].y + 30), hideSideMenuButton(), that.close()
    }
    Phaser.Group.call(this, game), this.loadDate(), this.graphic = game.add.graphics(0, 0), this.add(this.graphic), this.graphic.beginFill(15140, 1);
    var w = 1340,
        h = 1060;
    this.graphic.drawRect(-w / 2, -h / 2, w, h), this.graphic.beginFill(17192, 1), this.graphic.drawRect(-w / 2, -335, w, 508), this.graphic.beginFill(19497, 1), this.graphic.drawRect(-w / 2, -335, w, 50), this.graphic.beginFill(15140, 1);
    for (var i = 0; 6 > i; i++) this.graphic.drawRect(-w / 2 + 188 + 192 * i, -h / 2, 4, h), this.graphic.drawRect(-w / 2, -285 + 76 * i, w, 4);
    var weekdays = game.lang.getTranslation("weekdays");
    if (weekdays)
        for (var i = 0; i < weekdays.length; i++) {
            var weekday = new Solitaire.ButtonText(-w / 2 + 20 + 192 * i, -325, weekdays[i], Solitaire.Configs.font, "27", !1, !1, !0, Solitaire.Configs.fontColor, !0);
            weekday.anchor.set(0), this.add(weekday)
        }
    this.days = [], this.dayGroup = game.add.group(), this.add(this.dayGroup), this.x = .5 * game.width, this.y = 2 * game.height, this.opened = !1, this.s = !1, this.scale.set(Solitaire.Configs.currentConfigMulti), this.monthYearTitle = new Solitaire.ButtonText(0, -480, this.year + " " + this.monthText, Solitaire.Configs.font, "45", !1, !1, !0, Solitaire.Configs.fontColor, !0), this.add(this.monthYearTitle), this.dayMonthYearTitle = new Solitaire.ButtonText(0, 245, this.monthText + " " + this.day + ", " + this.year, Solitaire.Configs.font, "70", !1, !1, !0, Solitaire.Configs.fontColor, !0), this.add(this.dayMonthYearTitle), this.goalText = new Solitaire.ButtonText(-100, 310, game.lang.getTranslation("goal"), Solitaire.Configs.font, "38", !1, !1, !0, Solitaire.Configs.fontYellowColor, !0), this.goalText.anchor.set(1.1, .5), this.add(this.goalText), this.goalTextContent = new Solitaire.ButtonText(-100, 310, game.lang.getTranslation("goal_text"), Solitaire.Configs.font, "38", !1, !1, !0, Solitaire.Configs.fontColor, !0), this.goalTextContent.anchor.set(0, .5), this.add(this.goalTextContent), this.completedText = new Solitaire.ButtonText(0, 310, game.lang.getTranslation("completed"), Solitaire.Configs.font, "38", !1, !1, !0, Solitaire.Configs.fontYellowColor, !0), this.completedText.anchor.set(.5), this.add(this.completedText), this.scoreText = new Solitaire.ButtonText(450, 390, game.lang.getTranslation("score") + ":", Solitaire.Configs.font, "38", !1, !1, !0, Solitaire.Configs.fontColor, !0), this.scoreText.anchor.set(1.1, .5), this.add(this.scoreText), this.scoreTextContent = new Solitaire.ButtonText(450, 390, "000", Solitaire.Configs.font, "38", !1, !1, !0, Solitaire.Configs.fontYellowColor, !0), this.scoreTextContent.anchor.set(0, .5), this.add(this.scoreTextContent), this.timeText = new Solitaire.ButtonText(450, 460, game.lang.getTranslation("time") + ":", Solitaire.Configs.font, "38", !1, !1, !0, Solitaire.Configs.fontColor, !0), this.timeText.anchor.set(1.1, .5), this.add(this.timeText), this.timeTextContent = new Solitaire.ButtonText(450, 460, "00:00", Solitaire.Configs.font, "38", !1, !1, !0, Solitaire.Configs.fontYellowColor, !0), this.timeTextContent.anchor.set(0, .5), this.add(this.timeTextContent), this.crown = game.add.image(-430, -435, "all", "crown_small"), this.crown.anchor.set(.5, 0), this.add(this.crown), this.trophy1 = game.add.image(15, -385, "all", "award_3_small"), this.trophy1.anchor.set(.5, 1), this.add(this.trophy1), this.trophy2 = game.add.image(180, -385, "all", "award_2_small"), this.trophy2.anchor.set(.5, 1), this.add(this.trophy2), this.trophy3 = game.add.image(430, -385, "all", "award_1_small"), this.trophy3.anchor.set(.5, 1), this.add(this.trophy3), this.progressLine = new Solitaire.CalendarProgress(-457, -380), this.add(this.progressLine), this.updateProgressBar(), this.leftButton = new Solitaire.Button(-300, -470, "button_cal_back", function() {
        this.prevMonth()
    }, this), this.add(this.leftButton), this.rightButton = new Solitaire.Button(300, -470, "button_cal_next", function() {
        this.nextMonth()
    }, this), this.rightButton.IMMEDIATE = !0, this.add(this.rightButton);
    var that = this;
    this.playButton = new Solitaire.Button(0, 430, "button_play_middle", onPlayClick, this), this.playButton.IMMEDIATE = !0, this.add(this.playButton), this.playButton.scale.set(.8);
    var closeButton = new Solitaire.Button(630, -490, "button_close", function() {
        this.close()
    }, this, !0);
    this.add(closeButton), closeButton.scale.set(1.8), this.showTween = game.add.tween(this).to({
        y: game.height / 2
    }, 1e3, Phaser.Easing.Bounce.Out, !1), this.hideTween = game.add.tween(this).to({
        y: 2 * game.height
    }, 500, Phaser.Easing.Bounce.Out, !1), this.hideTween.onComplete.add(this.closeEnd, this), this.updateValues(), this.updateProgressBar(), Solitaire.s.onScreenResize.add(this.onScreenResize, this), Solitaire.s.onMainMenuOpen.add(this.sideMenuOpen, this), Solitaire.s.onMainMenuClose.add(this.sideMenuClose, this), Solitaire.s.onForceClose.add(this.close, this), this.selectDay(this.day), this.visible = !1, this.onScreenResize(game.width, game.height)
}, Solitaire.Calendar.prototype = Object.create(Phaser.Group.prototype), Solitaire.Calendar.prototype.sideMenuOpen = function() {
    this.onScreenResize(game.width, game.height)
}, Solitaire.Calendar.prototype.sideMenuClose = function() {
    this.onScreenResize(game.width, game.height)
}, Solitaire.Calendar.prototype.loadDate = function() {
    this.day = Solitaire.Configs.now.getDate(), this.year = Solitaire.Configs.now.getFullYear(), this.month = Solitaire.Configs.now.getMonth(), this.monthText = this.month;
    var months = game.lang.getTranslation("months");
    months && (this.monthText = months[this.month]), this.offset = new Date(this.year, this.month, 1).getDay(), this.daysInMonth = new Date(this.year, this.month + 1, 0).getDate()
}, Solitaire.Calendar.prototype.setSelect = function(year, month, day) {
    this.days[day - 1].available && (this.selectedDay = day, this.selectedMonth = month, this.selectedYear = year, this.deselectAllDays(), this.days[day - 1].setSelect(!0))
}, Solitaire.Calendar.prototype.winGame = function(year, month, day) {
    this.year = year, this.month = month, this.updateMonth(), this.selectDay(day), day > 0 && day <= this.daysInMonth && this.days[day - 1].setCrown(1), this.updateProgressBar(!0)
}, Solitaire.Calendar.prototype.updateProgressBar = function(animate) {
    this.crowns = 0;
    for (var i = 0; i < game.user.crowns.length; i++) game.user.crowns[i].year == this.year && game.user.crowns[i].month == this.month && this.crowns++;
    if (animate)
        if (15 == this.crowns) {
            game.add.tween(this.trophy1.scale).to({
                x: 1.5,
                y: 1.5
            }, 2e3, Phaser.Easing.Bounce.Out).to({
                x: 1,
                y: 1
            }, 500, Phaser.Easing.Bounce.In, !0)
        } else if (20 == this.crowns) {
        game.add.tween(this.trophy2.scale).to({
            x: 1.5,
            y: 1.5
        }, 2e3, Phaser.Easing.Bounce.Out).to({
            x: 1,
            y: 1
        }, 500, Phaser.Easing.Bounce.In, !0)
    } else if (28 == this.crowns) {
        game.add.tween(this.trophy3.scale).to({
            x: 1.5,
            y: 1.5
        }, 2e3, Phaser.Easing.Bounce.Out).to({
            x: 1,
            y: 1
        }, 500, Phaser.Easing.Bounce.In, !0)
    }
    this.progressLine.setProgress(this.crowns, animate)
}, Solitaire.Calendar.prototype.mapCrowns = function() {
    for (var i = 0; i < this.days.length; i++) this.days[i].available ? this.days[i].setCrown(2) : this.days[i].setCrown(0);
    for (var i = 0; i < game.user.crowns.length; i++) {
        var c = game.user.crowns[i];
        c.year == this.year && c.month == this.month && c.day > 0 && c.day - 1 < this.days.length && (this.days[c.day - 1].setCrown(1), this.days[c.day - 1].setScore(c.score, c.time))
    }
}, Solitaire.Calendar.prototype.prevMonth = function() {
    this.month--, this.month < 0 && (this.year--, this.month = 11), this.updateMonth(), this.updateProgressBar(), this.days[0].available && this.selectDay(1)
}, Solitaire.Calendar.prototype.updateMonth = function(year, month, map) {
    year && (this.year = year), month && (this.month = month), this.offset = new Date(this.year, this.month, 1).getDay(), this.daysInMonth = new Date(this.year, this.month + 1, 0).getDate(), this.updateValues(map)
}, Solitaire.Calendar.prototype.nextMonth = function() {
    this.month++, this.month > 11 && (this.year++, this.month = 0), this.updateMonth(), this.updateProgressBar(), this.days[0].available && this.selectDay(1)
}, Solitaire.Calendar.prototype.reloadScore = function() {
    for (var i = 0; i < game.user.crowns.length; i++) {
        var c = game.user.crowns[i];
        c.year == this.year && c.month == this.month && c.day == this.selectedDay && (this.days[this.selectedDay - 1].setScore(c.score, c.time), this.scoreTextContent.setText(this.days[this.selectedDay - 1].score), this.timeTextContent.setText(this.days[this.selectedDay - 1].time))
    }
}, Solitaire.Calendar.prototype.updateValues = function(map) {
    this.dayGroup.callAll("kill");
    var months = game.lang.getTranslation("months");
    this.monthText = this.month, months && (this.monthText = months[this.month]), this.monthYearTitle.setText(this.year + " " + this.monthText.toUpperCase()), this.days.length = 0;
    for (var i = 1; i <= this.daysInMonth; i++) {
        var iof = this.offset + i - 1,
            ii = Math.floor(iof % 7),
            jj = Math.floor(iof / 7),
            available = !1;
        (Solitaire.Configs.now.getFullYear() > this.year || Solitaire.Configs.now.getFullYear() == this.year && Solitaire.Configs.now.getMonth() > this.month || Solitaire.Configs.now.getFullYear() == this.year && Solitaire.Configs.now.getMonth() == this.month && Solitaire.Configs.now.getDate() >= i) && (available = !0);
        var day = this.getDayButton(-670 + 192 * ii, -283 + 76 * jj, i, available);
        10 > i ? day.setText("0" + i) : day.setText(i), this.days[i - 1] = day
    }
    map || this.mapCrowns(), this.year < 2017 || 2017 == this.year && this.month <= 7 ? (this.leftButton.active = !1, this.leftButton.alpha = .5) : (this.leftButton.active = !0, this.leftButton.alpha = 1)
}, Solitaire.Calendar.prototype.getDayButton = function(x, y, num, available) {
    var day = this.dayGroup.getFirstDead();
    return day ? (day.reset(x, y), day.setSelect(!1)) : (day = new Solitaire.CalendarButton(x, y, Solitaire.selectDay), this.dayGroup.add(day)), day.setAvailable(available), day.num = num, day
}, Solitaire.selectDay = function() {
    game.calendar.selectDay(this.num)
}, Solitaire.Calendar.prototype.selectDay = function(day) {
    day > 0 && day <= this.days.length && (this.day = day, this.dayMonthYearTitle.setText(this.monthText + " " + day + ", " + this.year), 1 === this.days[day - 1].crownValue ? (this.completedText.visible = !0, this.goalText.visible = !1, this.goalTextContent.visible = !1, this.scoreText.visible = !0, this.scoreTextContent.visible = !0, this.timeText.visible = !0, this.timeTextContent.visible = !0, this.scoreTextContent.setText(this.days[day - 1].score), this.timeTextContent.setText(this.days[day - 1].time)) : (this.completedText.visible = !1, this.goalText.visible = !0, this.goalTextContent.visible = !0, this.scoreText.visible = !1, this.scoreTextContent.visible = !1, this.timeText.visible = !1, this.timeTextContent.visible = !1), this.setSelect(this.year, this.month, day))
}, Solitaire.Calendar.prototype.deselectAllDays = function() {
    for (var i = 0; i < this.days.length; i++) this.days[i].setSelect(!1)
}, Solitaire.Calendar.prototype.open = function(immediate, year, month, day) {
    this.opened || (this.opened = !0, this.visible = !0, game.world.bringToTop(this), immediate ? this.y = game.height / 2 : (this.y = -game.height, this.showTween.start()), Solitaire.s.onDialogOpen.dispatch(), year && month && day && (this.updateMonth(year, month, !0), this.selectDay(day), this.reloadScore()))
}, Solitaire.Calendar.prototype.close = function(immediate) {
    this.opened && (this.opened = !1, immediate ? (this.visible = !1, this.y = 2 * game.height, Solitaire.s.onDialogClose.dispatch()) : this.hideTween.start())
}, Solitaire.Calendar.prototype.closeEnd = function() {
    this.visible = !1, Solitaire.s.onDialogClose.dispatch()
}, Solitaire.Calendar.prototype.clear = function() {
    this.dayGroup.destroy(!0), this.days = null
}, Solitaire.Calendar.prototype.onScreenResize = function(w, h) {
    if (game.device.desktop && game.sideMenuOpen) {
        this.scale.set(Solitaire.Configs.currentConfigMulti);
        var sw = Solitaire.normalize(390);
        if (2 * this.width < w) this.x = w / 2;
        else if (this.width + sw < w) this.x = w / 2 + sw / 2;
        else {
            var width = w - sw;
            this.x = w / 2 + sw / 2;
            var percentage = width / this.width;
            percentage > 1 && (percentage = 1), this.scale.set(Solitaire.Configs.currentConfigMulti * percentage)
        }
    } else this.scale.set(Solitaire.Configs.currentConfigMulti), this.width >= w && this.scale.set(.9 * Solitaire.Configs.currentConfigMulti), this.x = w / 2;
    this.y = h / 2, this.showTween = game.add.tween(this).to({
        y: game.height / 2
    }, 1e3, Phaser.Easing.Bounce.Out, !1), this.hideTween = game.add.tween(this).to({
        y: 2 * game.height
    }, 500, Phaser.Easing.Bounce.Out, !1), this.hideTween.onComplete.add(this.closeEnd, this)
}, Solitaire.TrophyAnimation = function(x, y) {
    Phaser.Image.call(this, x, y, "")
}, Solitaire.Card = function(game, type, number) {
    Phaser.Image.call(this, game, 0, 0), this.anchor.setTo(.5, .5), this.type = type, this.number = number, this.foundationPoints = !1, this.tableauPoints = !1, this.faceOn = !1, this.moving = !1, this.delay = 0, this.running = !1, this.scale.set(Solitaire.Configs.currentConfigMulti), this.tweenBounce = game.add.tween(this.scale).to({
        x: 1.1 * Solitaire.Configs.currentConfigMulti,
        y: 1.1 * Solitaire.Configs.currentConfigMulti
    }, 130, Phaser.Easing.Sinusoidal.InOut, !1, 0, 1, !0), this.tweenBounce.onComplete.add(this.moveDown, this), this.tweenShake = game.add.tween(this).to({
        angle: 15
    }, 300, Phaser.Easing.Sinusoidal.InOut, !1, 0, 1, !0), this.tweenShake.onComplete.add(this.moveDown, this), this.tweenShake.yoyo(!0), this.initialTweenState = this[Object.keys({
        angle: 15
    })], this.tweenDeny = game.add.tween(this.scale).to({
        x: .9 * Solitaire.Configs.currentConfigMulti,
        y: .9 * Solitaire.Configs.currentConfigMulti
    }, 50, Phaser.Easing.Linear.None, !1), game.device.desktop && (this.glow = Solitaire.makeImage(0, -4, "glow1", [.5, .5], null, "field"), this.addChild(this.glow), this.glow.visible = !1, this.events.onInputOver.add(this.mouseOver, this), this.events.onInputOut.add(this.mouseOut, this))
}, Solitaire.Card.prototype = Object.create(Phaser.Image.prototype), Solitaire.Card.prototype.constructor = Solitaire.Card, Solitaire.Card.prototype.faceDown = function(immediate, up) {
    immediate ? Solitaire.loadTexture(this, Solitaire.card_back, "decks") : this.startTurn(up), this.faceOn = !1
}, Solitaire.Card.prototype.startTurn = function(up) {
    game.addTurn(this), this.scaleSpeed = -.01, this.scaling = !0, up ? this.scaleUp = !0 : this.scaleUp = !1
}, Solitaire.Card.prototype.turning = function(timeDiff) {
    if (!this.scaling) return !0;
    if (this.scaleSpeed < 0) this.scaleUp ? (this.scale.y += this.scaleSpeed * timeDiff, this.scale.y < .1 && (this.scaleSpeed = .01, this.scale.y = .1, this.faceOn ? Solitaire.loadTexture(this, Solitaire.card_types[this.type] + this.number, Solitaire.card_types[this.type]) : Solitaire.loadTexture(this, Solitaire.card_back, "decks"))) : (this.scale.x += this.scaleSpeed * timeDiff, this.scale.x < .1 && (this.scaleSpeed = .01, this.scale.x = .1, this.faceOn ? Solitaire.loadTexture(this, Solitaire.card_types[this.type] + this.number, Solitaire.card_types[this.type]) : Solitaire.loadTexture(this, Solitaire.card_back, "decks")));
    else if (this.scaleUp) {
        if (this.scale.y += this.scaleSpeed * timeDiff, this.scale.y >= Solitaire.Configs.currentConfigMulti) return this.scale.y = Solitaire.Configs.currentConfigMulti, this.scaling = !1, !0
    } else if (this.scale.x += this.scaleSpeed * timeDiff, this.scale.x >= Solitaire.Configs.currentConfigMulti) return this.scale.x = Solitaire.Configs.currentConfigMulti, this.scaling = !1, !0;
    return !1
}, Solitaire.Card.prototype.fastTurn = function() {}, Solitaire.Card.prototype.faceUp = function(immediate, up) {
    immediate ? Solitaire.loadTexture(this, Solitaire.card_types[this.type] + this.number, Solitaire.card_types[this.type]) : this.startTurn(up), this.faceOn = !0
}, Solitaire.Card.prototype.stepShrink = function() {
    this.faceOn ? Solitaire.loadTexture(this, Solitaire.card_types[this.type] + this.number, Solitaire.card_types[this.type]) : Solitaire.loadTexture(this, Solitaire.card_back, "decks"), this.tweenunshrink.start()
}, Solitaire.Card.prototype.stepUnShrink = function() {
    this.scale.set(Solitaire.Configs.currentConfigMulti)
}, Solitaire.Card.prototype.color = function() {
    return this.type <= 1 ? 1 : 2
}, Solitaire.Card.prototype.bounce = function() {
    this.scaling || (this.scale.set(Solitaire.Configs.currentConfigMulti), this.tweenBounce.yoyo(!0), this.tweenBounce.start())
}, Solitaire.Card.prototype.select = function() {
    this.tweenBounce.isRunning && this.tweenBounce.stop(), this.tweenShake.isRunning && (this.tweenShake.pause(), this.tweenShake.timeline[0].dt = 0, this.tweenShake.timeline[0].repeatCounter = 0, this.tweenShake.timeline[0].percent = 0, this.moveDown()), this.glow && (this.glow.visible = !1)
}, Solitaire.Card.prototype.shake = function() {
    this.scaling || (this.tweenShake.isRunning && this.tweenShake.resume(), this.tweenShake.start())
}, Solitaire.Card.prototype.deny = function() {
    this.scaling || this.tweenDeny.isRunning || (this.tweenDeny.yoyo(!0), this.tweenDeny.start())
}, Solitaire.Card.prototype.moveDown = function() {
    this.angle = 0, this.rotation = 0, this.scale.set(Solitaire.Configs.currentConfigMulti)
}, Solitaire.Card.prototype.clear = function() {
    this.x = game.width / 2, this.y = game.height + 300, this.foundationPoints = !1
}, Solitaire.Card.prototype.finishMove = function() {
    this.stack && this.stack instanceof Solitaire.Foundation && (this.bounce(), this.stack.glow())
}, Solitaire.Card.prototype.mouseOver = function() {
    this.stack && !this.moving && this.stack.canGetCard(this) && (this.glow.visible = !0)
}, Solitaire.Card.prototype.mouseOut = function() {
    this.glow.visible = !1
}, Solitaire.Card.prototype.remap = function(type, number) {
    this.type = type, this.number = number, this.faceDown()
}, Solitaire.LeaderboardButton = function(x, y, text, callback, context) {
    Phaser.Button.call(this, game, x, y, null), this.state = game.state.getCurrentState(), this.anchor.setTo(.5), this.graphic = game.add.graphics(), this.addChild(this.graphic), this.graphic.beginFill(41026, 1), this.graphic.drawRect(-333, -50, 666, 100), this.active = !0, this.onClick = new Phaser.Signal, callback && this.onClick.add(callback, context || this), this.onInputDown.add(this.click, this), this.buttonText = new Solitaire.ButtonText(0, 0, text, Solitaire.Configs.font, 50, !1, !1, !0, Solitaire.Configs.fontColor), this.buttonText.anchor.set(.5), this.addChild(this.buttonText)
}, Solitaire.LeaderboardButton.prototype = Object.create(Phaser.Button.prototype), Solitaire.LeaderboardButton.prototype.constructor = Solitaire.LeaderboardButton, Solitaire.LeaderboardButton.prototype.click = function() {
    this.active && (this.onClick.dispatch(), game.sfx.playSFX("button"))
}, Solitaire.LeaderboardButton.prototype.select = function() {
    this.graphic.beginFill(41026, 1), this.graphic.drawRect(-333, -50, 666, 100), this.buttonText.fill = Solitaire.Configs.fontColor
}, Solitaire.LeaderboardButton.prototype.deselect = function() {
    this.graphic.clear(), this.graphic.beginFill(30001, 1), this.graphic.drawRect(-333, -50, 666, 100), this.buttonText.fill = "#000000"
}, Solitaire.Leaderboard = function() {
    Phaser.Group.call(this, game), this.graphic = game.add.graphics(0, 0), this.add(this.graphic), this.graphic.beginFill(15140, 1);
    var w = 1340,
        h = 1060;
    this.graphic.drawRect(-w / 2, -h / 2, w, h), this.graphic.beginFill(17958, 1), this.graphic.drawRect(-w / 2, -230, w, 50), this.graphic.beginFill(23864, 1), this.graphic.drawRect(-w / 2, -178, w, 530), this.x = .5 * game.width, this.y = 2 * game.height, this.opened = !1, this.s = !1, this.scale.set(Solitaire.Configs.currentConfigMulti), this.userAvatar = game.add.image(-w / 2 + 25, -h / 2 + 25, "user"), this.add(this.userAvatar), this.leaderboardText = new Solitaire.ButtonText(-w / 2 + 208, -h / 2 + 70, game.lang.getTranslation("leaderboard"), Solitaire.Configs.font, "32", !1, !1, !0, Solitaire.Configs.fontColor, !0), this.leaderboardText.anchor.set(0, .5), this.add(this.leaderboardText), this.usernameText = new Solitaire.ButtonText(-w / 2 + 208, -h / 2 + 120, game.user.username, Solitaire.Configs.font, "70", !1, !1, !0, Solitaire.Configs.fontColor, !0), this.usernameText.anchor.set(0, .5), this.add(this.usernameText);
    var months = game.lang.getTranslation("months"),
        monthText = Solitaire.Configs.now.getMonth();
    months && (monthText = months[monthText]);
    var date = monthText + " " + Solitaire.Configs.now.getDate() + ", " + Solitaire.Configs.now.getFullYear();
    this.monthDateYearText = new Solitaire.ButtonText(this.usernameText.x + this.usernameText.width + 30, -h / 2 + 105, date, Solitaire.Configs.font, "32", !1, !1, !0, Solitaire.Configs.fontColor, !0), this.monthDateYearText.anchor.set(0, .5), this.add(this.monthDateYearText), this.yourRankText = new Solitaire.ButtonText(this.usernameText.x + this.usernameText.width + 30, -h / 2 + 140, game.lang.getTranslation("your_rank"), Solitaire.Configs.font, "32", !1, !1, !0, Solitaire.Configs.fontYellowColor, !0), this.yourRankText.anchor.set(0, .5), this.add(this.yourRankText), this.globalButton = new Solitaire.LeaderboardButton(-w / 2 + w / 4, -h / 2 + 245, game.lang.getTranslation("global")), this.add(this.globalButton), this.continueButton = new Solitaire.Button(w / 4 + 45, 445, "button_green_small", function() {
        this.close()
    }, this, !0), this.continueButton.addText(game.lang.getTranslation("continue"), Solitaire.Configs.font, 30, !1, 9), this.add(this.continueButton), this.rank = new Solitaire.ButtonText(-w / 2 + 25, -200, game.lang.getTranslation("rank"), Solitaire.Configs.font, "30", !1, !1, !0, Solitaire.Configs.fontYellowColor, !0), this.rank.anchor.set(0, .5), this.add(this.rank), this.user = new Solitaire.ButtonText(-w / 2 + 188 + 25, -200, game.lang.getTranslation("user"), Solitaire.Configs.font, "30", !1, !1, !0, Solitaire.Configs.fontYellowColor, !0), this.user.anchor.set(0, .5), this.add(this.user), this.bestScore = new Solitaire.ButtonText(-w / 2 + 188 + 4 + 338 + 25, -200, game.lang.getTranslation("best_score"), Solitaire.Configs.font, "30", !1, !1, !0, Solitaire.Configs.fontYellowColor, !0), this.bestScore.anchor.set(0, .5), this.add(this.bestScore), this.trophies = new Solitaire.ButtonText(-w / 2 + 188 + 8 + 676 + 25, -200, game.lang.getTranslation("trophies"), Solitaire.Configs.font, "30", !1, !1, !0, Solitaire.Configs.fontYellowColor, !0), this.trophies.anchor.set(0, .5), this.add(this.trophies), this.userGraphic = game.add.graphics(), this.add(this.userGraphic), this.userGraphic.beginFill(1919850, 1), this.userGraphic.drawRect(-w / 2, 0, w, 74), this.userGraphic.y = -176, this.graphicLines = game.add.graphics(), this.add(this.graphicLines), this.graphicLines.beginFill(15140, 1);
    for (var i = 0; 6 >= i; i++) this.graphicLines.drawRect(-w / 2, -178 + 76 * i, w, 4);
    this.graphicLines.drawRect(-w / 2 + 188, -230, 4, 585), this.graphicLines.drawRect(-w / 2 + 188 + 4 + 338, -230, 4, 585), this.graphicLines.drawRect(-w / 2 + 188 + 8 + 676, -230, 4, 585), this.scoresTexts = [];
    for (var i = 0; 7 > i; i++) {
        this.scoresTexts[i] = [], this.scoresTexts[i][0] = new Solitaire.ButtonText(-w / 2 + 25, -135 + 76 * i, "", Solitaire.Configs.font, "30", !1, !1, !0, Solitaire.Configs.fontColor, !0), this.scoresTexts[i][0].anchor.set(0, .5), this.add(this.scoresTexts[i][0]), this.scoresTexts[i][1] = new Solitaire.ButtonText(-w / 2 + 188 + 25, -135 + 76 * i, "", Solitaire.Configs.font, "30", !1, !1, !0, Solitaire.Configs.fontColor, !0), this.scoresTexts[i][1].anchor.set(0, .5), this.add(this.scoresTexts[i][1]), this.scoresTexts[i][2] = new Solitaire.ButtonText(-w / 2 + 188 + 4 + 338 + 25, -135 + 76 * i, "", Solitaire.Configs.font, "30", !1, !1, !0, Solitaire.Configs.fontColor, !0), this.scoresTexts[i][2].anchor.set(0, .5), this.add(this.scoresTexts[i][2]), this.scoresTexts[i][3] = new Solitaire.ButtonText(-w / 2 + 188 + 8 + 676 + 25 + 60, -135 + 76 * i, "", Solitaire.Configs.font, "30", !1, !1, !0, Solitaire.Configs.fontColor, !0), this.scoresTexts[i][3].anchor.set(0, .5), this.add(this.scoresTexts[i][3]), this.scoresTexts[i][4] = new Solitaire.ButtonText(-w / 2 + 188 + 8 + 676 + 25 + 140 + 60, -135 + 76 * i, "", Solitaire.Configs.font, "30", !1, !1, !0, Solitaire.Configs.fontColor, !0), this.scoresTexts[i][4].anchor.set(0, .5), this.add(this.scoresTexts[i][4]), this.scoresTexts[i][5] = new Solitaire.ButtonText(-w / 2 + 188 + 8 + 676 + 25 + 280 + 60, -135 + 76 * i, "", Solitaire.Configs.font, "30", !1, !1, !0, Solitaire.Configs.fontColor, !0), this.scoresTexts[i][5].anchor.set(0, .5), this.add(this.scoresTexts[i][5]);
        var trophyBronze = game.add.image(-w / 2 + 188 + 8 + 676 + 25, -138 + 76 * i, "all", "award_3_small");
        trophyBronze.anchor.set(0, .5), this.add(trophyBronze);
        var trophySilver = game.add.image(-w / 2 + 188 + 8 + 676 + 25 + 140, -138 + 76 * i, "all", "award_2_small");
        trophySilver.anchor.set(0, .5), this.add(trophySilver);
        var trophyGold = game.add.image(-w / 2 + 188 + 8 + 676 + 25 + 280, -138 + 76 * i, "all", "award_1_small");
        trophyGold.anchor.set(0, .5), this.add(trophyGold)
    }
    this.showTween = game.add.tween(this).to({
        y: game.height / 2
    }, 1e3, Phaser.Easing.Bounce.Out, !1), this.hideTween = game.add.tween(this).to({
        y: 2 * game.height
    }, 500, Phaser.Easing.Bounce.Out, !1), this.hideTween.onComplete.add(this.closeEnd, this);
    var closeButton = new Solitaire.Button(630, -490, "button_close", function() {
        this.close()
    }, this, !0);
    this.add(closeButton), Solitaire.s.onScreenResize.add(this.onScreenResize, this), this.visible = !1, this.setScores(), this.onScreenResize(game.width, game.height)
}, Solitaire.Leaderboard.prototype = Object.create(Phaser.Group.prototype), Solitaire.Leaderboard.prototype.setScores = function() {
    for (var tmpScores = {
            rank: 999,
            user: "username",
            bestscore: 999,
            trophies: {
                bronze: 1,
                silver: 1,
                gold: 1
            }
        }, i = 0; 7 > i; i++) this.scoresTexts[i][0].setText(tmpScores.rank), this.scoresTexts[i][1].setText(tmpScores.user), this.scoresTexts[i][2].setText(tmpScores.bestscore)
}, Solitaire.Leaderboard.prototype.open = function(immediate, reload) {
    this.opened || (this.opened = !0, this.visible = !0, game.world.bringToTop(this), immediate ? this.y = game.height / 2 : (this.y = -game.height, this.showTween.start()), Solitaire.s.onDialogOpen.dispatch())
}, Solitaire.Leaderboard.prototype.close = function(immediate) {
    this.opened && (this.opened = !1, immediate ? (this.visible = !1, this.y = 2 * game.height, Solitaire.s.onDialogClose.dispatch()) : this.hideTween.start())
}, Solitaire.Leaderboard.prototype.closeEnd = function() {
    this.visible = !1, this.opened = !1, Solitaire.s.onDialogClose.dispatch()
}, Solitaire.Leaderboard.prototype.clear = function() {}, Solitaire.Leaderboard.prototype.onScreenResize = function(w, h) {
    Solitaire.horizontal ? this.scale.set(Solitaire.Configs.currentConfigMulti) : this.scale.set(.9 * Solitaire.Configs.currentConfigMulti), this.x = w / 2, this.y = h / 2, this.showTween = game.add.tween(this).to({
        y: game.height / 2
    }, 1e3, Phaser.Easing.Bounce.Out, !1), this.hideTween = game.add.tween(this).to({
        y: 2 * game.height
    }, 500, Phaser.Easing.Bounce.Out, !1), this.hideTween.onComplete.add(this.closeEnd, this)
}, Solitaire.Dialog = function(game, text, sprite, close) {
    if (Phaser.Group.call(this, game), this.x = .5 * game.width, this.y = 2 * game.height, this.text = text, this.opened = !1, this.s = !1, this.scale.set(Solitaire.Configs.currentConfigMulti), this.bg = Solitaire.makeImage(0, 0, sprite, [.5, .5], this, "panels"), text) {
        var t = new Solitaire.TitleText(0, -315, text);
        this.add(t)
    }
    if (close) {
        var closeButton = new Solitaire.Button(520, -350, "button_close", function() {
            this.close()
        }, this);
        closeButton.IMMEDIATE = !0, this.add(closeButton)
    }
    this.showTween = game.add.tween(this).to({
        y: game.height / 2
    }, 1e3, Phaser.Easing.Bounce.Out, !1), this.hideTween = game.add.tween(this).to({
        y: 2 * game.height
    }, 500, Phaser.Easing.Bounce.Out, !1), this.hideTween.onComplete.add(this.closeEnd, this), Solitaire.s.onScreenResize.add(this.onScreenResize, this), Solitaire.s.onForceClose.add(this.close, this), this.visible = !1
}, Solitaire.Dialog.prototype = Object.create(Phaser.Group.prototype), Solitaire.Dialog.prototype.open = function(immediate, reload) {
    this.opened || (this.opened = !0, this.visible = !0, game.world.bringToTop(this), immediate ? this.y = game.height / 2 : (this.y = -game.height, this.showTween.start()), Solitaire.s.onDialogOpen.dispatch())
}, Solitaire.Dialog.prototype.close = function(immediate) {
    this.opened && (this.opened = !1, immediate ? (this.visible = !1, this.y = 2 * game.height, Solitaire.s.onDialogClose.dispatch()) : this.hideTween.start())
}, Solitaire.Dialog.prototype.closeEnd = function() {
    this.visible = !1, this.opened = !1, Solitaire.s.onDialogClose.dispatch()
}, Solitaire.Dialog.prototype.onScreenResize = function(w, h) {
    this.x = w / 2, this.y = h / 2, this.showTween = game.add.tween(this).to({
        y: game.height / 2
    }, 1e3, Phaser.Easing.Bounce.Out, !1), this.hideTween = game.add.tween(this).to({
        y: 2 * game.height
    }, 500, Phaser.Easing.Bounce.Out, !1), this.hideTween.onComplete.add(this.closeEnd, this)
}, Solitaire.dateToStr = function(date) {
    var mm = date.getMonth() + 1,
        dd = date.getDate();
    return mm = (mm > 9 ? "" : "0") + mm, dd = (dd > 9 ? "" : "0") + dd, "".concat(dd).concat(".").concat(mm).concat(".").concat(date.getFullYear())
}, Solitaire.NewGameDialog = function() {
    Solitaire.Dialog.call(this, game, game.lang.getTranslation("game_mode"), "popup");
    var btn1 = game.add.button(-250, 0, null, function() {
        Solitaire.s.onStartGame.dispatch(1, !0, "dialog")
    }, this, !0);
    btn1.anchor.set(.5), Solitaire.loadTexture(btn1, "decks14", "decks"), this.add(btn1);
    var btn1Text = new Solitaire.Button(-250, 250, "button_green_big", function() {
        Solitaire.s.onStartGame.dispatch(1, !0, "dialog")
    }, this, !0);
    btn1Text.addText(game.lang.getTranslation("draw_1_card")), this.add(btn1Text);
    var btn2 = game.add.button(250, 0, null, function() {
        Solitaire.s.onStartGame.dispatch(3, !0, "dialog")
    }, this, !0);
    btn2.anchor.set(.5);
    var c = game.make.image(-30, 0, "decks", "decks14");
    c.anchor.set(.5), btn2.addChild(c), c = game.make.image(0, 0, "decks", "decks14"), c.anchor.set(.5), btn2.addChild(c), c = game.make.image(30, 0, "decks", "decks14"), c.anchor.set(.5), btn2.addChild(c), this.add(btn2);
    var btn2Text = new Solitaire.Button(250, 250, "button_green_big", function() {
        Solitaire.s.onStartGame.dispatch(3, !0, "dialog")
    }, this, !0);
    btn2Text.addText(game.lang.getTranslation("draw_3_cards")), this.add(btn2Text), Solitaire.s.onSelectGame.add(this.open, this)
}, Solitaire.NewGameDialog.prototype = Object.create(Solitaire.Dialog.prototype), Solitaire.NewGameDialog.prototype.constructor = Solitaire.NewGameDialog, Solitaire.VictoryDialog = function() {
    function onContinue() {
        hideSideMenuButton(), game.challenge ? game.challenge.completed ? (Solitaire.s.onDailyChallenge.dispatch(game.challenge.year, game.challenge.month, game.challenge.day), that.close()) : Solitaire.s.onCrownAnimation.dispatch(that.crown.x, that.crown.y) : (Solitaire.s.onSelectGame.dispatch(),
            that.close()), Solitaire.s.onAnimationStop.dispatch()
    }
    Solitaire.Dialog.call(this, game, game.lang.getTranslation("you_won"), "popup");
    Solitaire.makeImage(0, -90, "bg_popup_01", .5, this, "panels", !0), Solitaire.makeImage(0, 145, "bg_popup_02", .5, this, "panels", !0);
    this.helpText = new Solitaire.ButtonText(-250, 130, game.lang.getTranslation("daily_challenge_pass"), Solitaire.Configs.font, "42", !0, !0, !0, !1, !0), this.helpText.anchor.set(0, .5), this.add(this.helpText), this.dayText = new Solitaire.ButtonText(-250, 180, game.lang.getTranslation("today"), Solitaire.Configs.font, "30", !0, !0, !0, Solitaire.Configs.fontYellowColor, !0), this.dayText.anchor.set(0, .5), this.add(this.dayText), this.dateText = new Solitaire.ButtonText(-150, 180, "2017 july 24", Solitaire.Configs.font, "30", !0, !0, !0, !1, !0), this.dateText.anchor.set(0, .5), this.add(this.dateText);
    var that = this,
        btn1Text = new Solitaire.Button(0, 325, "button_green_big", onContinue, this, !0);
    btn1Text.addText(game.lang.getTranslation("continue")), this.add(btn1Text), btn1Text.visible = !0;
    var yy = -150;
    this.pointsTitleText = new Solitaire.ButtonText(0, yy, game.lang.getTranslation("points") + ":", Solitaire.Configs.font, "40", !0, !0, !0, "#ffffff", !0), this.pointsTitleText.anchor.set(.5), this.add(this.pointsTitleText), this.bonusTitleText = new Solitaire.ButtonText(0, yy + 40, game.lang.getTranslation("bonus") + ": ", Solitaire.Configs.font, "30", !0, !0, !0, "#ffffff", !0), this.bonusTitleText.anchor.set(.5), this.add(this.bonusTitleText), this.bonusTitleText.addColor("#cba41b", 7), this.scoreTitleText = new Solitaire.ButtonText(0, yy + 80, game.lang.getTranslation("your_score") + ":", Solitaire.Configs.font, "40", !0, !0, !0, "#cba41b", !0), this.scoreTitleText.anchor.set(.5), this.add(this.scoreTitleText), this.bestScoreTitleText = new Solitaire.ButtonText(0, yy + 120, game.lang.getTranslation("best_score") + ":", Solitaire.Configs.font, "30", !0, !0, !0, "#ffffff", !0), this.bestScoreTitleText.anchor.set(.5), this.add(this.bestScoreTitleText), this.bCalendar = new Solitaire.Button(385, 145, "button_daily", function() {
        game.challenge ? Solitaire.s.onCrownAnimation.dispatch(this.crown.x, this.crown.y) : (Solitaire.s.onDailyChallenge.dispatch(), this.close()), Solitaire.s.onAnimationStop.dispatch()
    }, this, !1), this.bCalendar.icon = Solitaire.makeImage(-83, -82, "info", 0, null, "all", !0), this.bCalendar.addChild(this.bCalendar.icon), this.add(this.bCalendar), this.crown = Solitaire.makeImage(-380, 145, "crown_bigl", .5, this, "all", !0), this.light = Solitaire.makeImage(-380, 160, "shine", .5, this, "all", !0), Solitaire.s.onCrownAnimation2.add(this.onAnimation, this), this.bgMedal = Solitaire.makeImageN(410, -250, "bg_highscore", .5, this, "all");
    var textMedal = new Solitaire.ButtonText(0, 0, game.lang.getTranslation("new_highscore"), Solitaire.Configs.font, "30", !1, !1, !0);
    this.bgMedal.addChild(textMedal)
}, Solitaire.VictoryDialog.prototype = Object.create(Solitaire.Dialog.prototype), Solitaire.VictoryDialog.prototype.constructor = Solitaire.VictoryDialog, Solitaire.VictoryDialog.prototype.setScore = function(score, time, bestScore, bestTime) {
    var bonusText = "";
    if (game.bestTime && (bonusText += game.lang.getTranslation("faster_time")), game.bestScore ? (this.bgMedal.visible = !0, bonusText += game.lang.getTranslation("top_points")) : this.bgMedal.visible = !1, this.pointsTitleText.setText(game.lang.getTranslation("points") + ": " + score), this.scoreTitleText.setText(game.lang.getTranslation("your_score") + ": " + game.lastScore), this.bestScoreTitleText.setText(game.lang.getTranslation("best_score") + ": " + game.bestScoreValue), this.bonusTitleText.setText(game.lang.getTranslation("bonus") + ": " + bonusText), game.bestScore || game.bestTime ? (this.pointsTitleText.visible = !0, this.bonusTitleText.visible = !0, this.pointsTitleText.y = -140, this.bonusTitleText.y = -100, this.scoreTitleText.y = -60, this.bestScoreTitleText.y = -20) : (this.pointsTitleText.visible = !1, this.bonusTitleText.visible = !1, this.scoreTitleText.y = -110, this.bestScoreTitleText.y = -50), game.challenge) {
        this.bCalendar.icon.visible = !1, this.crown.visible = !0, this.light.visible = !0, this.helpText.setText(game.lang.getTranslation("daily_challenge_pass").toUpperCase()), this.dayText.visible = !0;
        var today = new Date,
            monthText = game.challenge.month,
            months = game.lang.getTranslation("months");
        months && (monthText = months[game.challenge.month]), today.getDate() == game.challenge.day && today.getMonth() == game.challenge.month && today.getFullYear() == game.challenge.year ? this.dayText.setText(game.lang.getTranslation("today")) : this.dayText.setText(game.lang.getTranslation("day")), this.dateText.setText(game.challenge.year + " " + monthText + " " + game.challenge.day)
    } else {
        this.bCalendar.icon.visible = !0, this.crown.visible = !1, this.light.visible = !1, this.helpText.setText(game.lang.getTranslation("daily_challenge_try").toUpperCase()), this.dayText.visible = !1;
        var monthText = Solitaire.Configs.now.getMonth(),
            months = game.lang.getTranslation("months");
        months && (monthText = months[Solitaire.Configs.now.getMonth()]), this.dateText.setText(Solitaire.Configs.now.getFullYear() + " " + monthText + " " + Solitaire.Configs.now.getDate())
    }
}, Solitaire.VictoryDialog.prototype.onAnimation = function() {
    this.crown.visible = !1, this.close()
}, Solitaire.CalendarInfo = function() {
    Solitaire.Dialog.call(this, game, game.lang.getTranslation("daily_challenge"), "popup", !0);
    var bg1 = Solitaire.makeImage(0, -90, "bg_popup_01", .5, this, "panels", !0);
    bg1.scale.y = 1.3;
    Solitaire.makeImage(0, 145, "bg_popup_02", .5, this, "panels", !0);
    this.group1 = game.add.group(), this.add(this.group1);
    Solitaire.makeImage(355, -90, "award_1_big", .5, this.group1, "all", !0), Solitaire.makeImage(-55, -90, "loading_bar_01_empty", .5, this.group1, "all", !0);
    this.progressBar = Solitaire.makeImage(-310, -90, "loading_bar_01_full", [0, .5], this.group1, "all", !0), this.helpText = new Solitaire.ButtonText(0, 150, game.lang.getTranslation("daily_challenge_info"), Solitaire.Configs.font, "30", !0, !0, !0, !1, !0), this.helpText.wordWrap = !0, this.helpText.wordWrapWidth = 900, this.group1.add(this.helpText), this.group2 = game.add.group(), this.add(this.group2);
    var bronze = (Solitaire.makeImage(-290, -155, "award_3_big", .5, this.group2, "all", !0), Solitaire.makeImage(0, -155, "award_2_big", .5, this.group2, "all", !0), Solitaire.makeImage(290, -155, "award_1_big", .5, this.group2, "all", !0), new Solitaire.ButtonText(-290, -60, game.lang.getTranslation("bronze"), Solitaire.Configs.font, "30", !0, !0, !0, !1, !0));
    this.group2.add(bronze);
    var silver = new Solitaire.ButtonText(0, -60, game.lang.getTranslation("silver"), Solitaire.Configs.font, "30", !0, !0, !0, !1, !0);
    this.group2.add(silver);
    var gold = new Solitaire.ButtonText(290, -60, game.lang.getTranslation("gold"), Solitaire.Configs.font, "30", !0, !0, !0, !1, !0);
    this.group2.add(gold);
    var bronzeTrophyCrowns = (Solitaire.makeImage(-380, -11, "crown_small", .5, this.group2, "all", !0), Solitaire.makeImage(-75, -11, "crown_small", .5, this.group2, "all", !0), Solitaire.makeImage(210, -11, "crown_small", .5, this.group2, "all", !0), new Solitaire.ButtonText(-340, 0, game.lang.getTranslation("bronze_trophy_crowns"), Solitaire.Configs.font, "28", !0, !0, !0, Solitaire.Configs.fontYellowColor, !0));
    bronzeTrophyCrowns.anchor.set(0, .5), this.group2.add(bronzeTrophyCrowns);
    var silverTrophyCrowns = new Solitaire.ButtonText(-35, 0, game.lang.getTranslation("silver_trophy_crowns"), Solitaire.Configs.font, "28", !0, !0, !0, Solitaire.Configs.fontYellowColor, !0);
    silverTrophyCrowns.anchor.set(0, .5), this.group2.add(silverTrophyCrowns);
    var goldTrophyCrowns = new Solitaire.ButtonText(250, 0, game.lang.getTranslation("gold_trophy_crowns"), Solitaire.Configs.font, "28", !0, !0, !0, Solitaire.Configs.fontYellowColor, !0);
    goldTrophyCrowns.anchor.set(0, .5), this.group2.add(goldTrophyCrowns), this.page = 1, this.helpText = new Solitaire.ButtonText(0, 150, game.lang.getTranslation("monthly_challenge"), Solitaire.Configs.font, "30", !0, !0, !0, !1, !0), this.helpText.wordWrap = !0, this.helpText.wordWrapWidth = 900, this.group2.add(this.helpText), this.group2.visible = !1, this.button1 = Solitaire.makeImage(-25, 295, "dot_full", .5, this, "all", !0), this.button2 = Solitaire.makeImage(25, 295, "dot_empty", .5, this, "all", !0), this.btnLeft = new Solitaire.Button(-490, 325, "button_cal_back", function() {
        this.showPage(1)
    }, this, !0), this.add(this.btnLeft), this.btnLeft.visible = !1, this.btnRight = new Solitaire.Button(490, 325, "button_cal_next", function() {
        1 == this.page ? this.showPage(2) : (Solitaire.s.onDailyChallenge.dispatch(), this.close())
    }, this, !0), this.add(this.btnRight)
}, Solitaire.CalendarInfo.prototype = Object.create(Solitaire.Dialog.prototype), Solitaire.CalendarInfo.prototype.constructor = Solitaire.CalendarInfo, Solitaire.CalendarInfo.prototype.showPage = function(page) {
    this.page = page, 1 == page ? (this.group1.visible = !0, this.group2.visible = !1, this.btnLeft.visible = !1, Solitaire.loadTexture(this.button1, "dot_full", "all"), Solitaire.loadTexture(this.button2, "dot_empty", "all")) : (this.group1.visible = !1, this.group2.visible = !0, this.btnLeft.visible = !0, Solitaire.loadTexture(this.button2, "dot_full", "all"), Solitaire.loadTexture(this.button1, "dot_empty", "all"))
}, Solitaire.CalendarInfo.prototype.open = function(immediate) {
    Solitaire.Dialog.prototype.open.call(this, immediate), this.showPage(1)
}, Solitaire.CalendarInfo2 = function() {
    Solitaire.Dialog.call(this, game, game.lang.getTranslation("monthly_rewards"), "popup", !0);
    var bg1 = Solitaire.makeImage(0, -100, "bg_popup_01", .5, this, "panels", !0);
    bg1.scale.y = 1.3;
    Solitaire.makeImage(0, 145, "bg_popup_02", .5, this, "panels", !0);
    this.group2 = game.add.group(), this.add(this.group2);
    var bronze = (Solitaire.makeImage(-290, -155, "award_3_big", .5, this.group2, "all", !0), Solitaire.makeImage(0, -155, "award_2_big", .5, this.group2, "all", !0), Solitaire.makeImage(290, -155, "award_1_big", .5, this.group2, "all", !0), new Solitaire.ButtonText(-290, -60, game.lang.getTranslation("bronze"), Solitaire.Configs.font, "30", !0, !0, !0, !1, !0));
    this.group2.add(bronze);
    var silver = new Solitaire.ButtonText(0, -60, game.lang.getTranslation("silver"), Solitaire.Configs.font, "30", !0, !0, !0, !1, !0);
    this.group2.add(silver);
    var gold = new Solitaire.ButtonText(290, -60, game.lang.getTranslation("gold"), Solitaire.Configs.font, "30", !0, !0, !0, !1, !0);
    this.group2.add(gold);
    var bronzeTrophyCrowns = (Solitaire.makeImage(-380, -11, "crown_small", .5, this.group2, "all", !0), Solitaire.makeImage(-75, -11, "crown_small", .5, this.group2, "all", !0), Solitaire.makeImage(210, -11, "crown_small", .5, this.group2, "all", !0), new Solitaire.ButtonText(-340, 0, game.lang.getTranslation("bronze_trophy_crowns"), Solitaire.Configs.font, "28", !0, !0, !0, Solitaire.Configs.fontYellowColor, !0));
    bronzeTrophyCrowns.anchor.set(0, .5), this.group2.add(bronzeTrophyCrowns);
    var silverTrophyCrowns = new Solitaire.ButtonText(-35, 0, game.lang.getTranslation("silver_trophy_crowns"), Solitaire.Configs.font, "28", !0, !0, !0, Solitaire.Configs.fontYellowColor, !0);
    silverTrophyCrowns.anchor.set(0, .5), this.group2.add(silverTrophyCrowns);
    var goldTrophyCrowns = new Solitaire.ButtonText(250, 0, game.lang.getTranslation("gold_trophy_crowns"), Solitaire.Configs.font, "28", !0, !0, !0, Solitaire.Configs.fontYellowColor, !0);
    goldTrophyCrowns.anchor.set(0, .5), this.group2.add(goldTrophyCrowns), this.helpText = new Solitaire.ButtonText(0, 150, game.lang.getTranslation("monthly_challenge"), Solitaire.Configs.font, "30", !0, !0, !0, !1, !0), this.helpText.wordWrap = !0, this.helpText.wordWrapWidth = 900, this.group2.add(this.helpText);
    var btnLeft = (Solitaire.makeImage(-25, 295, "dot_empty", .5, this, "all", !0), Solitaire.makeImage(25, 295, "dot_full", .5, this, "all", !0), new Solitaire.Button(-490, 325, "button_cal_back", function() {
        Solitaire.s.onDailyChallengeInfo.dispatch(), this.close()
    }, this, !0));
    this.add(btnLeft);
    var btnRight = new Solitaire.Button(490, 325, "button_cal_next", function() {
        Solitaire.s.onDailyChallenge.dispatch(), this.close()
    }, this, !0);
    this.add(btnRight)
}, Solitaire.CalendarInfo2.prototype = Object.create(Solitaire.Dialog.prototype), Solitaire.CalendarInfo2.prototype.constructor = Solitaire.CalendarInfo2, Solitaire.ScrollableText = function(x, y) {
    Phaser.Group.call(this, game), this.x = x, this.y = y;
    var size = 35;
    "sd" == Solitaire.Configs.currentConfig && (size = 45), "ja" === game.lang.code && (size = 25), this.tutorialText = new Solitaire.ButtonText(0, 0, game.lang.getTranslation("tutorial"), Solitaire.Configs.font, size, !0, !0, !0), this.tutorialText.wordWrap = !0, this.tutorialText.wordWrapWidth = 900, this.tutorialText.anchor.set(.5, 0), this.add(this.tutorialText), this.tutorialText.inputEnabled = !0, this.tutorialText.events.onInputDown.add(this.onDown, this), this.tutorialText.events.onInputUp.add(this.onUp, this), this.textHeight = this.tutorialText.height - 340;
    var mask = game.make.graphics();
    this.add(mask), mask.beginFill(16777215), mask.drawRect(-470, 0, 940, 340), this.mask = mask, this.startY = 0, this.down = !1
}, Solitaire.ScrollableText.prototype = Object.create(Phaser.Group.prototype), Solitaire.ScrollableText.prototype.onDown = function(p, e) {
    this.startY = game.input.y - this.tutorialText.y, this.down = !0
}, Solitaire.ScrollableText.prototype.onUp = function(p) {
    this.tutorialText.y = game.input.y - this.startY, this.tutorialText.y < -this.textHeight && (this.tutorialText.y = -this.textHeight), this.tutorialText.y > 0 && (this.tutorialText.y = 0), this.down = !1
}, Solitaire.ScrollableText.prototype.update = function() {
    this.down && (this.tutorialText.y = game.input.y - this.startY, this.tutorialText.y < -this.textHeight && (this.tutorialText.y = -this.textHeight), this.tutorialText.y > 0 && (this.tutorialText.y = 0))
}, Solitaire.HelpDialog = function() {
    Solitaire.Dialog.call(this, game, game.lang.getTranslation("how_to_play"), "popup");
    Solitaire.makeImage(0, 0, "bg_popup_game_over", .5, this, "panels");
    Solitaire.s.onHelp.add(this.open, this), this.tutorialText = new Solitaire.ScrollableText(0, -170), this.add(this.tutorialText);
    var btn1Text = new Solitaire.Button(0, 300, "button_green_big", function() {
        this.close()
    }, this, !0);
    btn1Text.addText(game.lang.getTranslation("close")), this.add(btn1Text)
}, Solitaire.HelpDialog.prototype = Object.create(Solitaire.Dialog.prototype), Solitaire.HelpDialog.prototype.constructor = Solitaire.HelpDialog, Solitaire.MessageDialog = function() {
    Solitaire.Dialog.call(this, game, "", "popup", !0), this.btn1Text = new Solitaire.Button(0, 300, "button_green_big", this.onButton, this, !0), this.btn1Text.addText(""), this.add(this.btn1Text), this.text = new Solitaire.ButtonText(0, 0, "", Solitaire.Configs.font, "48", !0, !1, !0, Solitaire.Configs.fontYellowColor), this.text.wordWrap = !0, this.text.wordWrapWidth = 900, this.add(this.text), this.callback = !1
}, Solitaire.MessageDialog.prototype = Object.create(Solitaire.Dialog.prototype), Solitaire.MessageDialog.prototype.constructor = Solitaire.MessageDialog, Solitaire.MessageDialog.prototype.onButton = function() {
    this.close(!0), this.callback && this.callback.call()
}, Solitaire.MessageDialog.prototype.setMessage = function(message, btext, callback) {
    this.text.setText(message), this.btn1Text.addText(btext), callback ? this.callback = callback : this.callback = !1
}, Solitaire.FadeLayer = function() {
    Phaser.Image.call(this, game, 0, 0), game.camera.flash(0, 600, !0), this.game.add.existing(this)
}, Solitaire.FadeLayer.prototype = Object.create(Phaser.Image.prototype), Solitaire.FadeLayer.constructor = Solitaire.OverlayLayer, Solitaire.FadeLayer.prototype.showLayer = function() {
    game.camera.fade(0, 300, !0)
}, Solitaire.FadeLayer.prototype.hideLayer = function() {}, Solitaire.OverlayLayer = function() {
    Phaser.Graphics.call(this, game, 0, 0), this.game.add.existing(this), this.beginFill(0, .8), this.drawRect(0, 0, game.width, game.height), this.visible = !1, this.c = 0, Solitaire.s.onScreenResize.add(this.onScreenResize, this), Solitaire.s.onDialogOpen.add(this.showLayer, this), Solitaire.s.onDialogClose.add(this.hideLayer, this)
}, Solitaire.OverlayLayer.prototype = Object.create(Phaser.Graphics.prototype), Solitaire.OverlayLayer.prototype.constructor = Solitaire.OverlayLayer, Solitaire.OverlayLayer.prototype.showLayer = function() {
    this.visible = !0, this.c++
}, Solitaire.OverlayLayer.prototype.hideLayer = function() {
    this.c--, this.c <= 0 && (this.c = 0, this.visible = !1)
}, Solitaire.OverlayLayer.prototype.onScreenResize = function(w, h) {
    this.clear(), this.beginFill(0, .8), this.drawRect(0, 0, w, h)
}, Solitaire.TitleText = function(x, y, text) {
    Phaser.Text.call(this, game, x, y, text.toUpperCase(), {
        font: "90px " + Solitaire.Configs.font,
        fill: "#000000",
        align: "center"
    }), this.stroke = "#000000", this.strokeThickness = 8, this.fill = "#cba41b", this.setShadow(3, 3, "rgba(0,0,0,0.5)", 5), this.anchor.set(.5)
}, Solitaire.TitleText.prototype = Object.create(Phaser.Text.prototype), Solitaire.TitleText.prototype.constructor = Solitaire.TitleText, Solitaire.makeImage = function(x, y, frame, anchor, groupToAdd, sheet, menu) {
    var image;
    return menu || (x = Solitaire.normalize(x), y = Solitaire.normalize(y)), image = sheet ? game.make.image(x, y, sheet, frame) : game.make.image(x, y, frame), anchor && ("number" == typeof anchor ? image.anchor.setTo(anchor) : image.anchor.setTo(anchor[0], anchor[1])), groupToAdd ? (groupToAdd.add || groupToAdd.addChild).call(groupToAdd, image) : null !== groupToAdd && game.world.add(image), image
}, Solitaire.makeImageN = function(x, y, frame, anchor, groupToAdd, sheet) {
    var image;
    return image = sheet ? game.make.image(x, y, sheet, frame) : game.make.image(x, y, frame), anchor && ("number" == typeof anchor ? image.anchor.setTo(anchor) : image.anchor.setTo(anchor[0], anchor[1])), groupToAdd ? (groupToAdd.add || groupToAdd.addChild).call(groupToAdd, image) : null !== groupToAdd && game.world.add(image), image
}, Solitaire.Hud = function() {
    Phaser.Image.call(this, game, game.width / 2, game.height), this.anchor.set(.5, 1), Solitaire.loadTexture(this, "hud", "panels"), this.scale.set(Solitaire.Configs.currentConfigMulti), this.r = this.width / this.height, this.x = game.width / 2, this.y = game.height, Solitaire.s.onScreenResize.add(this.onScreenResize, this), this.onScreenResize(game.width, game.height)
}, Solitaire.Hud.prototype = Object.create(Phaser.Image.prototype), Solitaire.Hud.prototype.constructor = Solitaire.Hud, Solitaire.Hud.prototype.onScreenResize = function(w, h) {
    this.width = w, this.x = w / 2, this.y = h
}, Solitaire.HudPanel = function() {
    Phaser.Group.call(this, game), this.x = .5 * game.width, this.y = game.height, this.scale.set(Solitaire.Configs.currentConfigMulti), this.numBack1 = Solitaire.makeImageN(-300, -80, "number_bg", [.5, .5], this, "all"), this.numBack2 = Solitaire.makeImageN(0, -80, "number_bg", [.5, .5], this, "all"), this.numBack3 = Solitaire.makeImageN(300, -80, "number_bg", [.5, .5], this, "all"), this.timeText = new Solitaire.HudText(-300, -78, "00:00", "#ffffff", "left"), this.add(this.timeText), this.timeText.anchor.set(-.1, .5), this.timeTitleText = new Solitaire.HudText(-300, -78, game.lang.getTranslation("time"), "#cba41b", "right"), this.timeTitleText.anchor.set(1.1, .5), this.add(this.timeTitleText), this.bonusText = new Solitaire.HudText(15, -78, "000", "#ffffff", "left"), this.add(this.bonusText), this.bonusText.anchor.set(0, .5), this.bonusTitleText = new Solitaire.HudText(15, -78, game.lang.getTranslation("bonus"), "#cba41b", "right"), this.bonusTitleText.anchor.set(1.1, .5), this.add(this.bonusTitleText), this.pointsText = new Solitaire.HudText(330, -78, "000", "#ffffff", "left"), this.add(this.pointsText), this.pointsText.anchor.set(0, .5), this.pointsTitleText = new Solitaire.HudText(330, -78, game.lang.getTranslation("points"), "#cba41b", "right"), this.pointsTitleText.anchor.set(1.1, .5), this.add(this.pointsTitleText), Solitaire.s.onScreenResize.add(this.onScreenResize, this), this.onScreenResize(game.width, game.height)
}, Solitaire.HudPanel.prototype = Object.create(Phaser.Group.prototype), Solitaire.HudPanel.prototype.constructor = Solitaire.HudPanel, Solitaire.HudPanel.prototype.onScreenResize = function(w, h) {
    this.x = .5 * game.width, this.y = game.height, 1 == Solitaire.Configs.currentConfigMulti
}, Solitaire.HudPanel.prototype.setTime = function(time) {
    this.timeText.text = time
}, Solitaire.HudPanel.prototype.setBonus = function(bonus) {
    this.bonusText.text = bonus
}, Solitaire.HudPanel.prototype.setPoints = function(points) {
    this.pointsText.text = points
}, Solitaire.HudPanel.prototype.setBar = function(scale) {
    this.barFull.scale.set(scale, 1)
}, Solitaire.HudText = function(x, y, text, color, align) {
    Phaser.Text.call(this, game, x, y, text.toUpperCase(), {
        font: "30px " + Solitaire.Configs.font,
        fill: "#000000",
        align: align
    }), this.stroke = "#000000", this.strokeThickness = 5, this.fill = color, this.setShadow(3, 3, "rgba(0,0,0,0.5)", 5), this.anchor.set(.5)
}, Solitaire.HudText.prototype = Object.create(Phaser.Text.prototype), Solitaire.HudText.prototype.constructor = Solitaire.HudText, Solitaire.loadTexture = function(obj, texture, sheet) {
    sheet ? obj.loadTexture(sheet, texture) : obj.loadTexture(texture)
}, Solitaire.CrownAnimation = function() {
    Phaser.Group.call(this, game), this.x = game.width / 2, this.y = game.height / 2, this.scale.set(Solitaire.Configs.currentConfigMulti), this.shine = Solitaire.makeImage(0, 30, "shine", .5, this, "all"), this.crown = Solitaire.makeImage(0, 0, "crown_bigl", .5, this, "all"), this.visible = !1, this.moving = !1, this.scaling = !1
}, Solitaire.CrownAnimation.prototype = Object.create(Phaser.Group.prototype), Solitaire.CrownAnimation.prototype.constructor = Solitaire.CrownAnimation, Solitaire.CrownAnimation.prototype.start = function(x, y) {
    this.crown.x = x, this.crown.y = y, this.crown.scale.set(1), this.shine.scale.set(1), this.visible = !0, game.world.bringToTop(this), Solitaire.s.onCrownAnimation2.dispatch(), this.wait = 1e3;
    var dx = game.challenge.winx - this.crown.x,
        dy = game.challenge.winy - this.crown.y,
        dist = Math.sqrt(dx * dx + dy * dy);
    this.dx = dx / dist, this.dy = dy / dist, this.distX = Math.abs(dx), this.distY = Math.abs(dy), this.moving = !0
}, Solitaire.CrownAnimation.prototype.stop = function() {
    this.moving = !1, Solitaire.s.onCrownAnimationFinish.dispatch(), this.visible = !1
}, Solitaire.CrownAnimation.prototype.update = function() {
    this.visible && (this.shine.x = this.crown.x, this.shine.y = this.crown.y + 20, this.shine.angle += 2, this.moving ? this.wait > 0 ? this.wait -= game.time.elapsed : (this.difx = game.time.elapsed * this.dx / 2, this.dify = game.time.elapsed * this.dy / 2, this.crown.x += this.difx, this.crown.y += this.dify, this.distX -= Math.abs(this.difx), this.distY -= Math.abs(this.dify), this.distX <= 0 && this.distY <= 0 && (this.moving = !1, this.scaling = !0, this.crown.x = game.challenge.winx, this.crown.y = game.challenge.winy)) : this.scaling && (this.crown.scale.x -= .01, this.crown.scale.y -= .01, this.shine.scale.x += .1, this.shine.scale.y += .1, this.crown.scale.x < .4 && this.stop()))
}, Solitaire.Message = function() {
    Phaser.Group.call(this, game), this.text = game.add.text(game.width / 2, game.height / 2, game.lang.getTranslation("no_more_moves")), this.text.font = Solitaire.Configs.font, this.text.fontSize = 50, this.text.fontWeight = "bold", this.text.fill = "#ffffff", this.text.anchor.set(.5), this.opened = !1, this.add(this.text), this.timer = 0, this.visible = !1
}, Solitaire.Message.prototype = Object.create(Phaser.Group.prototype), Solitaire.Message.prototype.open = function() {
    this.opened = !0, this.timer = 2e3, this.visible = !0, game.world.bringToTop(this)
}, Solitaire.Message.prototype.update = function() {
    this.visible && (this.timer -= game.time.elapsed, this.timer <= 0 && (this.visible = !1))
}, Solitaire.turningCards = [], Solitaire.Game = function(game) {
    this.gameType = 1, this.cards = [], this.foundations = [], this.tempStacks = [], this.stack1 = null, this.stack2 = null, this.gameMode = 0, this.movingCards = [], this.dragCards = [], this.undoQueue, this.undoItemStore, this.lastTime = 0, this.idle = 0, this.solveDeclined = !1, this.savedCards = [], this.savedTypes = [], this.foundationPositions = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
    ], this.cardsGroup, this.cardSpeed = 4, this.leaderBoard = null, this.CARDX = game.width / 2, this.CARDY = -300, this.GAMEMODE_MENU = 0, this.GAMEMODE_CARDS = 1, this.GAMEMODE_GAME = 2, this.GAMEMODE_PAUSE = 3, this.GAMEMODE_SOLVE = 4, this.GAMEMODE_WAIT = 5, this.GAMEMODE_CROWN = 6, this.MOVE_WASTE_TABLEAU = 1, this.MOVE_WASTE_FOUNDATION = 2, this.MOVE_TABLEAU_FOUNDATION = 3
}, Solitaire.Game.prototype = {
    init: function(challenge, year, month, day, completed, winx, winy) {
        if (game.challenge = !1, challenge) {
            game.challenge = {
                year: year,
                month: month,
                day: day,
                completed: completed,
                winx: winx,
                winy: winy
            };
            var dd = day > 9 ? "" + day : "0" + day,
                mm = month + 1;
            mm = mm > 9 ? "" + mm : "0" + mm, game.challenge.str = dd + "." + mm + "." + year
        }
        s = game.state.getCurrentState(), game.world.children[0] && game.world.children[0].destroy()
    },
    create: function() {
        this.bg = new Solitaire.Background, this.logotable = game.add.image(game.width / 2, 2 * game.height / 3, "titles", "logo_table"), this.logotable.anchor.set(.5), this.logotable.scale.set(Solitaire.Configs.currentConfigMulti), game.addTurn = this.addTurn, this.stacksGroup = game.add.group(), this.undoQueue = new Solitaire.UndoQueue, this.undoItemStore = new Solitaire.UndoItemStore, this.initArrays(), this.cardsGroup = game.add.group(), this.hud = new Solitaire.Hud, game.add.existing(this.hud), this.hudPanel = new Solitaire.HudPanel, this.menuButton = new Solitaire.SideButton(0, game.height - Solitaire.normalize(120), "button_menue_small", function() {
            this.sideMenu.open()
        }, this, "left"), this.backButton = new Solitaire.SideButton(game.width - Solitaire.normalize(120), game.height - Solitaire.normalize(120), "button_backl", this.onBackButton, this, "right"), this.backButton.anchor.set(0), this.backButton.IMMEDIATE = !0, game.add.existing(this.menuButton), game.add.existing(this.backButton), 2 == game.hintsType && (this.hintsButton = new Solitaire.HintsButton(game.width - Solitaire.normalize(240), game.height - Solitaire.normalize(70), "hint", this.onHintButton, this), game.add.existing(this.hintsButton)), this.menuButton.visible = !1, currentSideMenuButton = this.menuButton, sideButtonShallBeHidden = !0;
        try {
            sideButtonShallBeHidden = !1, currentSideMenuButton.visible = !0
        } catch (e) {
            console.warn("menuButton not reachable")
        }
        this.solveDialog = game.add.group(), this.solveDialog.x = game.width / 2, this.solveDialog.y = 2 * game.height / 3, this.solveDialog.scale.set(Solitaire.Configs.currentConfigMulti);
        var solveButton = new Solitaire.Button(-300, 0, null, this.onSolve, this, !0);
        solveButton.addText(game.lang.getTranslation("auto_complete"), Solitaire.Configs.font, 50, !0);
        var nosolveButton = new Solitaire.Button(300, 0, null, this.onDeclineSolve, this, !0);
        nosolveButton.addText(game.lang.getTranslation("no_thanks"), Solitaire.Configs.font, 50, !0), this.solveDialog.add(solveButton), this.solveDialog.add(nosolveButton), this.solveDialog.visible = !1, this.overlayLayer = new Solitaire.OverlayLayer, this.helpDialog = new Solitaire.HelpDialog, this.newGameDialog = new Solitaire.NewGameDialog, this.combo = new Solitaire.ComboText(0, 0, ""), game.add.existing(this.combo), this.sideMenu = new Solitaire.SideMenu, this.initCards(), Solitaire.s.onScreenResize.add(this.onScreenResize, this), Solitaire.s.onStartGame.add(this.onStartGame, this), Solitaire.s.onRestartGame.add(this.onRestartGame, this), Solitaire.s.onSelectGame.add(this.onSelectGame, this), Solitaire.s.onDialogOpen.add(this.pause, this), Solitaire.s.onDialogClose.add(this.unpause, this), Solitaire.s.onHandChange.add(this.onHandChange, this), Solitaire.s.onExit.add(this.onExit, this), Solitaire.s.onLeaderBoard.add(this.onLeaderboard, this), Solitaire.s.onDailyChallenge.add(this.onDailyChallenge, this), Solitaire.s.onDailyChallengeInfo.add(this.onDailyChallangeInfo, this), Solitaire.s.onCrownAnimation.add(this.onCrownAnimation, this), Solitaire.s.onCrownAnimation2.add(this.onCrownAnimation2, this), Solitaire.s.onCrownAnimationFinish.add(this.onCrownAnimationFinish, this), Solitaire.s.onStartGameChallenge.add(this.onStartChallenge, this), Solitaire.s.onAdsForHints.add(this.onAdsForHints, this), Solitaire.s.onShowAds.add(this.onShowAds, this), Solitaire.s.onAdsSuccess.add(this.onAdsSuccess, this), Solitaire.s.onNoMoreVideos.add(this.onNoMoreVideos, this), this.timeElapsed = 0, this.lastTime = Date.now(), this.fontSize = Solitaire.normalize(90) + "px", this.renderX = Solitaire.normalize(30), this.renderY = Solitaire.normalize(90), this.crownAnimation = null, game.calendar = new Solitaire.Calendar, game.challenge && game.calendar.updateMonth(game.challenge.year, game.challenge.month), game.resizeGame(), game.challenge ? Solitaire.s.onStartGame.dispatch(3) : (this.newGameDialog.open(!0), this.gameMode = this.GAMEMODE_MENU)
    },
    addTurn: function(card) {
        Solitaire.turningCards.push(card)
    },
    onSelectGame: function() {},
    onLeaderboard: function() {
        null == this.leaderBoard && (this.leaderBoard = new Solitaire.Leaderboard), this.leaderBoard.open()
    },
    onNoMoreMoves: function() {
        this.message || (this.message = new Solitaire.Message, game.add.existing(this.message)), this.message.open()
    },
    onHintButton: function() {
        if (game.hintsCount > 0) {
            var res = this.hint();
            1 == res ? (game.hintsCount--, Solitaire.s.onHintUse.dispatch(), game.hintsCount <= 0 && (this.hintsButton.alpha = .6)) : 0 == res && this.onNoMoreMoves()
        } else Solitaire.s.onAdsForHints.dispatch()
    },
    onShowAds: function() {},
    onAdsResult: function(success) {
        Solitaire.s.onAdsSuccess.dispatch()
    },
    onAdsSuccess: function() {
        game.hintsCount += 3, Solitaire.s.onHintUse.dispatch(), this.msgDialog || (this.msgDialog = new Solitaire.MessageDialog, game.add.existing(this.msgDialog)), this.msgDialog.setMessage(game.lang.getTranslation("thanks_for_watching"), game.lang.getTranslation("ok")), this.msgDialog.open()
    },
    onNoMoreVideos: function() {
        this.msgDialog || (this.msgDialog = new Solitaire.MessageDialog, game.add.existing(this.msgDialog)), this.msgDialog.setMessage(game.lang.getTranslation("no_more_ads"), game.lang.getTranslation("ok")), this.msgDialog.open()
    },
    onCrownAnimation: function() {
        this.gameMode = this.GAMEMODE_CROWN, null == this.crownAnimation && (this.crownAnimation = new Solitaire.CrownAnimation), this.crownAnimation.visible = !0;
        var x = 0,
            y = 0;
        arguments.length > 0 && (x = arguments[0], y = arguments[1]), this.crownAnimation.start(x, y, game.challenge.winx, game.challenge.winy)
    },
    onCrownAnimation2: function() {
        game.calendar.open(!1, game.challenge.year, game.challenge.month, game.challenge.day), game.world.bringToTop(this.crownAnimation)
    },
    onCrownAnimationFinish: function() {
        this.gameMode === this.GAMEMODE_CROWN ? (this.gameMode = this.GAMEMODE_MENU, game.calendar.winGame(game.challenge.year, game.challenge.month, game.challenge.day)) : game.calendar.winGame(game.challenge.year, game.challenge.month, game.challenge.day)
    },
    onDailyChallenge: function(year, month, day) {
        game.user.dailyChallengeInfo ? (game.calendar.open(!1, year, month, day), game.calendarInfo && game.calendarInfo.opened && game.calendarInfo.close()) : Solitaire.s.onDailyChallengeInfo.dispatch()
    },
    onDailyChallangeInfo: function() {
        game.calendarInfo || (game.calendarInfo = new Solitaire.CalendarInfo), game.calendarInfo.open(), game.user.dailyChallengeInfo = !0, Solitaire.PState.saveUser(), game.calendar && game.calendar.opened && game.calendar.close()
    },
    createGame: function(remap) {
        this.clearGame(), Solitaire.s.onAnimationStop.dispatch(), Solitaire.s.onMainMenuClose.dispatch(), game.hintsType && (game.hintsCount = 8, Solitaire.s.onHintUse.dispatch()), this.initExperimentalGame(remap), this.gameMode = this.GAMEMODE_CARDS, this.solveDeclined = !1, this.solveDialog.visible = !1, this.timeElapsed = 0, this.idle = 0, this.score = 0, this.bonus = 10001e3, this.foundationCounter = 0, this.hudPanel.setPoints(this.score), game.victory = !1, game.gameover = !1, this.paused = 0, this.hudPanel.timeText.text = "00:00", this.hudPanel.bonusText.text = "1000"
    },
    onScreenResize: function(w, h) {
        if (this.moveCardsFast(), Solitaire.horizontal) {
            var tpos = (Solitaire.normalize(173), Solitaire.normalize(182)),
                tspace = Solitaire.normalize(160) + Math.floor((w - Solitaire.normalize(1280)) / 20),
                offset = .5 * (w - 7 * tspace) - Solitaire.normalize(89),
                vspace = Solitaire.normalize(270),
                xpos = Solitaire.normalize(130),
                xpos2 = Solitaire.normalize(280),
                leftpos = Solitaire.normalize(230);
            w < Solitaire.normalize(2e3) && (xpos = Solitaire.normalize(70), xpos2 = Solitaire.normalize(180), leftpos = Solitaire.normalize(100));
            var tposY = Solitaire.normalize(173);
            if (game.data.isLeftHand) {
                for (var i = 0; i < this.foundations.length; i++) this.foundations[i].moveTo(w - leftpos, tposY - Solitaire.normalize(20) + i * Solitaire.normalize(250)), this.foundationPositions[i][0] = w - leftpos, this.foundationPositions[i][1] = tposY + i * Solitaire.normalize(250) - Solitaire.normalize(20);
                this.stack1.moveTo(leftpos, 3 * tposY + vspace), this.stack2.moveTo(leftpos, 3 * tposY)
            } else {
                for (var i = 0; i < this.foundations.length; i++) this.foundations[i].moveTo(leftpos, tposY + i * Solitaire.normalize(250) - Solitaire.normalize(20)), this.foundationPositions[i][0] = leftpos, this.foundationPositions[i][1] = tposY + i * Solitaire.normalize(250) - Solitaire.normalize(20);
                this.stack1.moveTo(w - leftpos, 3 * tposY + vspace), this.stack2.moveTo(w - leftpos, 3 * tposY)
            }
            for (var i = 0; i < this.tempStacks.length; i++) this.tempStacks[i].moveTo(offset + tpos + tspace * i, tposY);
            this.hintsButton && (this.hintsButton.x = this.game.width - Solitaire.normalize(240), this.hintsButton.y = this.game.height - Solitaire.normalize(70)), this.backButton.x = this.game.width - Solitaire.normalize(120), this.backButton.y = this.game.height - Solitaire.normalize(120)
        } else {
            var offset = .5 * (w - Solitaire.normalize(1280)) + Solitaire.normalize(89),
                fposY = Solitaire.normalize(273),
                tpos = Solitaire.normalize(10),
                tspace = Solitaire.normalize(180),
                tposY = Solitaire.normalize(623);
            if (game.data.isLeftHand) {
                for (var i = 0; i < this.foundations.length; i++) this.foundations[i].moveTo(offset + tpos + tspace * (i + 3), fposY),
                    this.foundationPositions[i][0] = offset + tpos + tspace * (i + 3), this.foundationPositions[i][1] = fposY;
                this.stack1.moveTo(offset + tpos, fposY), this.stack2.moveTo(offset + tpos + tspace, fposY)
            } else {
                for (var i = 0; i < this.foundations.length; i++) this.foundations[i].moveTo(offset + tpos + tspace * i, fposY), this.foundationPositions[i][0] = offset + tpos + tspace * i, this.foundationPositions[i][1] = fposY;
                this.stack1.moveTo(offset + tpos + 6 * tspace, fposY), this.stack2.moveTo(offset + tpos + 5 * tspace, fposY)
            }
            for (var i = 0; i < this.tempStacks.length; i++) this.tempStacks[i].moveTo(offset + tpos + tspace * i, tposY);
            this.hintsButton && (this.hintsButton.x = this.game.width - Solitaire.normalize(150), this.hintsButton.y = this.game.height - Solitaire.normalize(70)), this.backButton.x = this.game.width - Solitaire.normalize(99), this.backButton.y = this.game.height - Solitaire.normalize(120)
        }
        this.solveDialog.x = game.width / 2, this.solveDialog.y = 2 * game.height / 3, this.logotable.x = game.width / 2, this.logotable.y = 2 * game.height / 3, this.CARDX = w / 2
    },
    onAdsForHints: function() {
        bilb_has_rewardads && (this.msgDialog || (this.msgDialog = new Solitaire.MessageDialog, game.add.existing(this.msgDialog)), this.msgDialog.setMessage(game.lang.getTranslation("watch_ads_for_hints"), game.lang.getTranslation("watch"), function() {
            Solitaire.s.onShowAds.dispatch()
        }), this.msgDialog.open())
    },
    onHandChange: function() {
        this.onScreenResize(game.width, game.height), Solitaire.PState.saveData()
    },
    onStartChallenge: function(year, month, day, completed, x, y) {
        game.challenge = {
            year: year,
            month: month,
            day: day,
            completed: completed,
            winx: x,
            winy: y
        };
        var dd = day > 9 ? "" + day : "0" + day,
            mm = month + 1;
        mm = mm > 9 ? "" + mm : "0" + mm, game.challenge.str = dd + "." + mm + "." + year, Solitaire.s.onStartGame.dispatch(3)
    },
    onStartGame: function() {
        this.newGameDialog.close(), this.gameType = 1, arguments.length > 0 && 3 === arguments[0] && (this.gameType = 3), arguments.length > 1 && arguments[1] && (game.challenge = !1), this.createGame()
    },
    onExit: function() {
        console.warn("onExit!"), game.state.start("MainMenu", !0, !1)
    },
    onRestartGame: function() {
        console.warn("onRestartGame!"), this.createGame(!0)
    },
    onSolve: function() {
        this.startSolve(), this.solveDialog.visible = !1
    },
    onDeclineSolve: function() {
        this.solveDeclined = !0, this.solveDialog.visible = !1
    },
    initCards: function() {
        for (var i = 0; 4 > i; i++)
            for (var j = 1; 13 >= j; j++) {
                var card = new Solitaire.Card(game, i, j);
                card.x = -300, card.y = -300, this.cardsGroup.add(card), card.faceUp(!0), card.inputEnabled = !0, card.events.onInputDown.add(this.onCardClick, this), card.events.onInputUp.add(this.onCardUp, this), this.cards.push(card)
            }
    },
    initArrays: function() {
        for (var i = 0; 4 > i; i++) this.foundations[i] = new Solitaire.Foundation(game, i, 865 + 228 * i + 89, 50);
        for (var i = 0; 7 > i; i++) this.tempStacks[i] = new Solitaire.TempStack(game, 182 + 228 * i + 89, 335);
        this.stack1 = new Solitaire.Stack1(this, 271, 50), this.stack2 = new Solitaire.Stack2(this, 499, 50), this.stack1.bg.inputEnabled = !0, this.stack1.bg.events.onInputDown.add(this.onStack1Button, this)
    },
    initGames: function(remap) {
        for (var i = 0; i < this.cards.length; i++) this.cards[i].foundationPoints = !1;
        if (remap) this.remapCards();
        else {
            for (var i = 0; 9 > i; i++) this.shuffleCards();
            this.mapCards()
        }
        for (var card, i = 0; i < this.tempStacks.length; i++) {
            for (var j = 0; i > j; j++) card = this.cards.pop(), this.tempStacks[i].pushCard(card, !1, !0);
            card = this.cards.pop(), this.tempStacks[i].pushCard(card, !0, !0)
        }
        for (; card = this.cards.pop();) this.stack1.pushCard(card, !0);
        this.score = 0
    },
    initExperimentalGame: function(remap) {
        for (var i = 0; i < this.cards.length; i++) this.cards[i].foundationPoints = !1;
        var exp = !0;
        if (game.challenge) this.loadGame();
        else if (remap) this.remapCards();
        else if (exp) this.experimental(), this.mapCardsExperimental(), this.clearGame(), this.remapCards();
        else {
            for (var i = 0; 9 > i; i++) this.shuffleCards();
            this.mapCards()
        }
        for (var card, delay = 300, i = 0; i < this.tempStacks.length; i++) {
            for (var j = 0; i > j; j++) card = this.cards.pop(), card.delay = delay, delay += 20, this.tempStacks[i].pushCard(card, !1, !1), this.addMovingCard(card);
            card = this.cards.pop(), card.delay = delay, delay += 20, this.tempStacks[i].pushCard(card, !0, !1), this.addMovingCard(card)
        }
        for (; card = this.cards.pop();) card.delay = delay, delay += 20, this.stack1.pushCard(card, !1), this.addMovingCard(card);
        this.gameMode = this.GAMEMODE_CARDS
    },
    loadGame: function() {
        game.gen.calculate(game.challenge.day, game.challenge.month, game.challenge.year);
        for (var j = 51, i = 0; i < game.gen.cards.length; i++) this.cards[j].remap(game.gen.cards[i].color, game.gen.cards[i].num), j--
    },
    experimental: function() {
        for (var card, f = [], i = 0; 4 > i; i++) {
            f[i] = [];
            for (var j = 1; 13 >= j; j++) card = this.cards.pop(), card.remap(i, j), f[i].push(card)
        }
        for (var row = [], j = 12; j >= 0; j--) {
            for (var i = 0; i < f.length; i++) row[i] = f[i][j];
            this.localshuffle(row);
            for (var i = 0; card = row.pop();) {
                i = 0;
                for (var run = !0; run;) this.tempStacks[i].canAddCard(card) && (this.tempStacks[i].pushCard(card, !0, !0), run = !1), i++, i > 3 && (i = 0)
            }
        }
        var more = [],
            idx = Math.floor(Math.random() * this.tempStacks[2].cards.length);
        for (more.push(this.tempStacks[2].cards[idx]), this.tempStacks[2].cards.splice(idx, 1), idx = Math.floor(Math.random() * this.tempStacks[3].cards.length), more.push(this.tempStacks[3].cards[idx]), this.tempStacks[3].cards.splice(idx, 1); card = this.tempStacks[2].cards.pop();) this.stack1.pushCard(card, !0);
        for (; card = this.tempStacks[3].cards.pop();) this.stack1.pushCard(card, !0);
        for (; card = this.tempStacks[0].cards.pop();) more.push(card), card.stack.removeCard(card);
        for (; card = this.tempStacks[1].cards.pop();) more.push(card), card.stack.removeCard(card);
        this.localshuffle(more);
        for (var i = 0; i < this.tempStacks.length; i++) {
            for (var j = 0; i > j; j++) card = more.pop(), this.tempStacks[i].pushCard(card, !1, !0);
            card = more.pop(), this.tempStacks[i].pushCard(card, !0, !0)
        }
        return this.stack1.shuffle(), !0
    },
    localshuffle: function(a) {
        var j, x, i;
        for (i = a.length; i; i--) j = Math.floor(Math.random() * i), x = a[i - 1], a[i - 1] = a[j], a[j] = x
    },
    mapCards: function() {
        this.savedCards.length = 0, this.savedTypes.length = 0;
        for (var i = 0; i < this.cards.length; i++) {
            var card = this.cards[i];
            this.savedCards[i] = card.number, this.savedTypes[i] = card.type
        }
    },
    mapCardsExperimental: function() {
        this.savedCards.length = 0, this.savedTypes.length = 0;
        for (var c = 0, i = this.stack1.cards.length - 1; i >= 0; i--) this.savedCards[c] = this.stack1.cards[i].number, this.savedTypes[c] = this.stack1.cards[i].type, c++;
        for (var i = this.tempStacks.length - 1; i >= 0; i--)
            for (var j = this.tempStacks[i].cards.length - 1; j >= 0; j--) this.savedCards[c] = this.tempStacks[i].cards[j].number, this.savedTypes[c] = this.tempStacks[i].cards[j].type, c++
    },
    remapCards: function() {
        for (var i = 0; i < this.cards.length; i++) {
            var card = this.cards[i];
            card.remap(this.savedTypes[i], this.savedCards[i])
        }
    },
    shuffleCards: function() {
        var j, x, i;
        for (i = this.cards.length; i > 0; i--) j = Math.floor(Math.random() * i), x = this.cards[i - 1], this.cards[i - 1] = this.cards[j], this.cards[j] = x
    },
    onCardMove: function(moveType, card) {
        game.sfx.playSFX("card");
        var points = 0;
        return card && card.foundationPoints ? (this.foundationCounter = 0, 0) : (moveType === Solitaire.moves.MOVE_WASTE_TABLEAU ? (points = 10, this.foundationCounter = 0) : moveType === Solitaire.moves.MOVE_WASTE_FOUNDATION ? (this.foundationCounter > 0 && (Solitaire.s.onCombo.dispatch(this.foundationCounter + 1), game.sfx.playClaps(this.foundationCounter + 1)), points = 10 + 10 * this.foundationCounter, this.foundationCounter++, card.foundationPoints = !0) : moveType === Solitaire.moves.MOVE_TABLEAU_FOUNDATION ? (points = 10 + 10 * this.foundationCounter, this.foundationCounter > 0 && (Solitaire.s.onCombo.dispatch(this.foundationCounter + 1), game.sfx.playClaps(this.foundationCounter + 1)), this.foundationCounter++, card.foundationPoints = !0) : this.foundationCounter = 0, this.score += points, this.hudPanel.setPoints(this.score), points)
    },
    onBackButton: function() {
        if (this.gameMode == this.GAMEMODE_MENU || this.gameMode == this.GAMEMODE_CARDS) this.onExit();
        else if (this.gameMode == this.GAMEMODE_PAUSE) this.unpause(), Solitaire.s.onForceClose.dispatch();
        else if (this.gameMode == this.GAMEMODE_GAME && this.newGameDialog.opened) this.newGameDialog.close();
        else if (this.overlayLayer.visible === !1) {
            for (var item = this.undoQueue.items.pop(), i = item; i;) {
                if (i.turn) i.card.faceDown();
                else {
                    var card = i.card;
                    this.score -= i.score, this.hudPanel.setPoints(this.score), i.turnLast && i.stack1.turnLast(), i.stack1.addCard(card, !1), this.addMovingCard(card)
                }
                i = i.next
            }
            this.undoItemStore.push(item), this.onCardMove(Solitaire.moves.MOVE_OTHER)
        }
    },
    pause: function() {
        this.paused++, (this.gameMode === this.GAMEMODE_GAME || this.gameMode === this.GAMEMODE_CARDS || this.gameMode === this.GAMEMODE_SOLVE || this.gameMode === this.GAMEMODE_WAIT) && (this.savedGameMode = this.gameMode, this.gameMode = this.GAMEMODE_PAUSE)
    },
    unpause: function() {
        this.paused--, this.paused < 0 && (this.paused = 0), this.gameMode === this.GAMEMODE_PAUSE && 0 === this.paused && (this.gameMode = this.savedGameMode)
    },
    startSolve: function() {
        this.gameMode = this.GAMEMODE_SOLVE
    },
    solve: function() {
        0 === this.movingCards.length && this.findSolveMove()
    },
    findSolveMove: function() {
        for (var card = null, i = 0; i < this.tempStacks.length; i++)
            if (card = this.tempStacks[i].getLastCard(), null !== card)
                for (var j = 0; j < this.foundations.length; j++)
                    if (this.foundations[j].canAddCard(card)) return this.foundations[j].addCard(card, !1), this.addMovingCard(card), void this.onCardMove(Solitaire.moves.MOVE_TABLEAU_FOUNDATION, card)
    },
    checkSolvable: function() {
        if (this.stack1.cards.length > 0) return !1;
        if (this.stack2.cards.length > 0) return !1;
        for (var i = 0; i < this.tempStacks.length; i++)
            if (this.tempStacks[i].hasClosed()) return !1;
        return !0
    },
    addMovingCard: function(card) {
        if (card.x != card.targetX || card.y != card.targetY) {
            var dx = card.targetX - card.x,
                dy = card.targetY - card.y,
                dist = Math.sqrt(dx * dx + dy * dy);
            card.dx = dx / dist, card.dy = dy / dist, card.distX = Math.abs(dx), card.distY = Math.abs(dy), card.moving = !0, -1 === this.movingCards.indexOf(card) && this.movingCards.push(card)
        } else card.moving = !1
    },
    moveCardsFast: function() {
        for (var i = this.dragCards.length - 1; i >= 0; i--) {
            var card = this.dragCards[i];
            card.x = card.targetX, card.y = card.targetY
        }
        this.dragCards.splice(0, this.dragCards.length);
        for (var i = this.movingCards.length - 1; i >= 0; i--) {
            var card = this.movingCards[i];
            card.moving = !1, card.x = card.targetX, card.y = card.targetY, card.finishMove(), this.movingCards.splice(i, 1), game.sfx.playSFX("card"), this.gameMode === this.GAMEMODE_GAME && 0 === this.movingCards.length && 0 === this.dragCards.length && (this.checkGameOver() || this.solveDeclined === !1 && this.checkSolvable() && (this.solveDialog.visible = !0)), this.gameMode !== this.GAMEMODE_GAME && this.gameMode !== this.GAMEMODE_SOLVE || 0 !== this.movingCards.length || this.checkVictory() && this.victory(), this.gameMode === this.GAMEMODE_GAME && 0 === this.movingCards.length && 2 == game.hintsType && this.checkGameOver() && this.gameOver()
        }
    },
    moveCards: function() {
        for (var i = this.movingCards.length - 1; i >= 0; i--) {
            var card = this.movingCards[i];
            if (card.delay > 0) card.delay -= this.timeDiff;
            else {
                if (card.recalc) {
                    var dx = card.targetX - card.x,
                        dy = card.targetY - card.y,
                        dist = Math.sqrt(dx * dx + dy * dy);
                    card.dx = dx / dist, card.dy = dy / dist, card.distX = Math.abs(dx), card.distY = Math.abs(dy), card.recalc = !1
                }
                var dx = card.dx * this.timeDiff * this.cardSpeed,
                    dy = card.dy * this.timeDiff * this.cardSpeed;
                card.x += dx, card.y += dy, card.distX -= Math.abs(dx), card.distY -= Math.abs(dy), card.distX <= 0 && card.distY <= 0 && (card.moving = !1, card.x = card.targetX, card.y = card.targetY, card.finishMove(), this.movingCards.splice(i, 1), game.sfx.playSFX("card"), this.gameMode === this.GAMEMODE_GAME && 0 === this.movingCards.length && 0 === this.dragCards.length && (this.checkGameOver() || this.solveDeclined === !1 && this.checkSolvable() && (this.solveDialog.visible = !0)), this.gameMode !== this.GAMEMODE_GAME && this.gameMode !== this.GAMEMODE_SOLVE || 0 !== this.movingCards.length || this.checkVictory() && this.victory(), this.gameMode === this.GAMEMODE_GAME && 0 === this.movingCards.length && 2 == game.hintsType && this.checkGameOver() && this.gameOver())
            }
        }
    },
    update: function() {
        this.now = Date.now(), this.timeDiff = this.now - this.lastTime, this.lastTime = this.now, this.gameMode === this.GAMEMODE_CARDS ? (this.moveCards(), this.moveTurn(), 0 == this.movingCards.length && 0 == this.cards.length && (this.time = 0, this.gameMode = this.GAMEMODE_WAIT)) : this.gameMode === this.GAMEMODE_GAME ? (this.time += this.timeDiff, this.moveDragCards(), this.moveCards(), this.moveTurn(), this.updateClock(), this.updateBonus(), this.idle += this.timeDiff, this.idle > 8e3 && 1 == game.hintsType && (this.hint(), this.idle = 0), 1 === game.victory ? this.victory() : 1 === game.gameover && this.gameOver()) : this.gameMode === this.GAMEMODE_SOLVE ? (this.solve(), this.moveCards(), this.updateClock(), this.updateBonus(), this.moveTurn()) : this.gameMode === this.GAMEMODE_VICTORY ? this.moveTurn() : this.gameMode === this.GAMEMODE_GAMEOVER && (this.moveCards(), this.moveTurn())
    },
    updateClock: function() {
        this.timeElapsed += this.timeDiff, this.clockTime = this.timeElapsed / 1e3, this.minutes = Math.floor(this.clockTime / 60), this.seconds = Math.floor(this.clockTime) - 60 * this.minutes, this.result = this.minutes < 10 ? "0" + this.minutes : this.minutes, this.result += this.seconds < 10 ? ":0" + this.seconds : ":" + this.seconds, this.hudPanel.timeText.text = this.result
    },
    updateBonus: function() {
        this.bonus > 0 && (this.bonus -= this.timeDiff, this.bonus < 0 && (this.bonus = 0), this.hudPanel.bonusText.text = Math.floor(this.bonus / 1e4))
    },
    render: function() {},
    checkVictory: function() {
        for (var i = 0; i < this.foundations.length; i++)
            if (this.foundations[i].cards.length < 13) return !1;
        return !0
    },
    showVictoryDialog: function(bestScore, bestTime) {
        this.victoryDialog || (this.victoryDialog = new Solitaire.VictoryDialog), this.victoryDialog.setScore(this.score, this.clockTime, bestScore, bestTime), this.victoryDialog.open(!0, !0)
    },
    moveTurn: function() {
        for (var i = Solitaire.turningCards.length - 1; i >= 0; i--) Solitaire.turningCards[i].turning(this.timeDiff) && Solitaire.turningCards.splice(i, 1)
    },
    fastMoveCards: function() {
        for (var i = this.movingCards.length - 1; i >= 0; i--) {
            var card = this.movingCards[i];
            card.x = card.targetX, card.y = card.targetY, card.moving = !1, this.movingCards.splice(i, 1)
        }
    },
    hintTemp: function() {
        for (var i = 0; i < this.tempStacks.length; i++) {
            var card = this.tempStacks[i].getLastCard();
            if (card && this.canAddToFoundation(card)) return card;
            if (card = this.tempStacks[i].getFirstOpen()) {
                for (var j = 0; j < this.tempStacks.length; j++)
                    if (i != j && this.tempStacks[j].canAddCard(card)) {
                        if (13 === card.number && 0 == this.tempStacks[i].cards.indexOf(card) && 0 == this.tempStacks[j].cards.length) continue;
                        return card
                    }
                for (var index1 = this.tempStacks[i].cards.indexOf(card), idx = this.tempStacks[i].cards.length - 1; idx > index1 - 1; idx--)
                    if (idx > 0) {
                        var c = this.tempStacks[i].cards[idx];
                        if (this.canAddToTemp(c) && this.canAddToFoundation(this.tempStacks[i].cards[idx - 1])) return c
                    }
            }
        }
        return !1
    },
    hintTempStacks: function() {
        for (var stack, card = null, i = 0; i < this.tempStacks.length; i++) {
            var index = this.tempStacks[i].getFirstOpenIndex();
            if (index >= 0)
                for (var j = index; j < this.tempStacks[i].cards.length; j++)
                    if (card = this.tempStacks[i].cards[j], this.tempStacks[i].canGetCard(card) && (stack = this.checkMove(card, j != this.tempStacks[i].cards.length - 1, j), null != stack)) return card
        }
    },
    hintOne: function() {
        var card, stack;
        if (this.stack2 && this.stack2.cards.length > 0 && (card = this.stack2.cards[this.stack2.cards.length - 1], stack = this.checkMove(card, !1))) return card;
        for (var i = this.stack1.cards.length - 1; i >= 0; i--)
            if (card = this.stack1.cards[i], stack = this.checkMove(card, !1)) return card;
        for (var i = 0; i < this.stack2.cards.length - 1; i++)
            if (card = this.stack2.cards[i], stack = this.checkMove(card, !1)) return card;
        return null
    },
    hintThree: function() {
        var card, stack;
        if (this.stack2 && this.stack2.cards.length > 0 && (card = this.stack2.cards[this.stack2.cards.length - 1], stack = this.checkMove(card, !1))) return card;
        for (var i = this.stack1.cards.length - 3; i >= 0; i -= 3)
            if (card = this.stack1.cards[i], stack = this.checkMove(card, !1)) return card;
        var index;
        for (index = 2; index < this.stack2.cards.length; index += 3)
            if (card = this.stack2.cards[index], stack = this.checkMove(card, !1)) return card;
        index -= this.stack2.cards.length;
        for (var i = this.stack1.cards.length - index - 1; i >= 0; i -= 3)
            if (card = this.stack1.cards[i], stack = this.checkMove(card, !1)) return card
    },
    hint: function() {
        if (this.gameMode === this.GAMEMODE_GAME || this.gameMode === this.GAMEMODE_WAIT) {
            this.idle = 0;
            var card = null;
            return card = this.hintTemp(), card || (card = 1 === this.gameType ? this.hintOne() : this.hintThree()), card ? (card.shake(), 1) : 0
        }
        return -1
    },
    checkMove: function(card, moreCardsOnTop, i) {
        if (!moreCardsOnTop)
            for (var j = 0; j < this.foundations.length; j++)
                if (this.foundations[j].canAddCard(card)) return this.foundations[j];
        for (var j = 0; j < this.tempStacks.length; j++)
            if (card.stack != this.tempStacks[j] && this.tempStacks[j].canAddCard(card)) {
                if (card.stack instanceof Solitaire.TempStack) {
                    var i = card.stack.cards.indexOf(card);
                    if (i && i > 0 && this.tempStacks[j].cards.length > 0) {
                        var prev = card.stack.cards[i - 1];
                        if (prev.number == this.tempStacks[j].getLastCard().number) continue
                    } else if (0 === i && 0 === this.tempStacks[j].cards.length) continue
                }
                return this.tempStacks[j]
            }
        return null
    },
    victory: function() {
        this.clearGame(), this.gameMode = this.GAMEMODE_VICTORY, this.score += Math.floor(this.bonus / 1e4), this.bonus = 0, game.time.events.add(4 * Phaser.Timer.SECOND, this.showVictoryDialog, this, game.user.bestScore, game.user.bestTime), sapi_victory(this.score), game.challenge ? (sapi_tracking_dailychallenge("complete"), sapi_tracking_levelcomplete("DailyChallenge", game.challenge.str, this.score), Solitaire.PState.addCrown(game.challenge.year, game.challenge.month, game.challenge.day, this.score, Math.floor(this.clockTime))) : (sapi_tracking_levelcomplete("BestClassicGame", this.gameType + "card", this.score), Solitaire.PState.addScore(this.score, this.time)), this.hudPanel.bonusText.text = this.bonus, this.hudPanel.setPoints(this.score), this.fastMoveCards(), this.animation = null;
        var n = Math.random();
        .15 > n ? this.animation = new Solitaire.Animations(game, this.foundationPositions) : .3 > n ? this.animation = new Solitaire.Animations2(game, this.foundationPositions) : .45 > n ? this.animation = new Solitaire.Animations3(game, this.foundationPositions) : .6 > n ? this.animation = new Solitaire.Animations4(game, this.foundationPositions) : .85 > n ? this.animation = new Solitaire.Animations5(game, this.foundationPositions) : this.animation = new Solitaire.Animations6(game, this.foundationPositions)
    },
    canAddCard: function(card, tempStack) {
        for (var i = 0; i < this.foundations.length; i++)
            if (this.foundations[i].canAddCard(card)) return !0;
        for (var i = 0; i < this.tempStacks.length; i++)
            if (this.tempStacks[i].canAddCard(card)) {
                if (tempStack && 13 === card.number && 0 === this.tempStacks[tempStack].cards.indexOf(card)) continue;
                return !0
            }
        return !1
    },
    canAddToFoundation: function(card) {
        for (var i = 0; i < this.foundations.length; i++)
            if (this.foundations[i].canAddCard(card)) return !0;
        return !1
    },
    canAddToTemp: function(card) {
        for (var i = 0; i < this.tempStacks.length; i++)
            if (this.tempStacks[i].canAddCard(card)) return !0;
        return !1
    },
    shutdown: function() {
        this.clearGame(), this.clearUndoQueue(), this.bg.destroy(), this.logotable.destroy(), this.message && (this.message.destroy(!0), this.message = null), this.leaderBoard && (this.leaderBoard.clear(), this.leaderBoard.destroy(!0), this.leaderBoard = null), game.calendar && (game.calendar.clear(), game.calendar.destroy(!0), game.calendar = null);
        for (var i = 0; 4 > i; i++) this.foundations[i].clear();
        for (var i = 0; 7 > i; i++) this.tempStacks[i].clear();
        this.stack1.clear(), this.stack2.clear();
        for (var i = 0; i < this.cards.length; i++) this.cards[i].destroy();
        this.cards.length = 0, this.hud.destroy(!0), this.hudPanel.destroy(!0), this.menuButton.destroy(), this.backButton.destroy(), this.hintsButton && this.hintsButton.destroy(), this.solveDialog.destroy(!0), this.overlayLayer.destroy(), this.helpDialog.destroy(!0), this.newGameDialog.destroy(!0), null != this.victoryDialog && (this.victoryDialog.destroy(!0), this.victoryDialog = null), this.msgDialog && (this.msgDialog.destroy(!0), this.msgDialog = null), this.combo.destroy(), Solitaire.s.onScreenResize.remove(this.onScreenResize, this), Solitaire.s.onStartGame.remove(this.onStartGame, this), Solitaire.s.onRestartGame.remove(this.onRestartGame, this), Solitaire.s.onDialogOpen.remove(this.pause, this), Solitaire.s.onDialogClose.remove(this.unpause, this), Solitaire.s.onHandChange.remove(this.onHandChange, this), Solitaire.s.onExit.remove(this.onExit, this)
    },
    checkGameOver: function() {
        return !1
    },
    gameOver: function() {
        !this.gameOverDialog
    },
    clearGame: function() {
        this.solveDialog.visible = !1;
        for (var i = 0; i < this.foundations.length; i++)
            for (var stack = this.foundations[i], j = stack.cards.length - 1; j >= 0; j--) {
                var card = stack.cards[j];
                card.clear(), this.cards.push(card), stack.cards.splice(j, 1)
            }
        for (var i = 0; i < this.tempStacks.length; i++)
            for (var stack = this.tempStacks[i], j = stack.cards.length - 1; j >= 0; j--) {
                var card = stack.cards[j];
                card.clear(), this.cards.push(card), stack.cards.splice(j, 1)
            }
        for (var j = this.stack1.cards.length - 1; j >= 0; j--) {
            var card = this.stack1.cards[j];
            card.clear(), this.cards.push(card), this.stack1.cards.splice(j, 1)
        }
        for (var j = this.stack2.cards.length - 1; j >= 0; j--) {
            var card = this.stack2.cards[j];
            card.clear(), this.cards.push(card), this.stack2.cards.splice(j, 1)
        }
        this.dragCards.splice(0, this.dragCards.length), this.movingCards.splice(0, this.movingCards.length), Solitaire.turningCards.splice(0, Solitaire.turningCards.length), this.clearUndoQueue()
    },
    clearUndoQueue: function() {
        for (var item; item = this.undoQueue.items.pop();) this.undoItemStore.push(item)
    },
    pushUndoQueue: function(item) {
        this.undoQueue.items.push(item)
    },
    onStack1Button: function() {
        this.gameMode === this.GAMEMODE_GAME && this.stack2.moveToStack(this.stack1, this.undoQueue, this.undoItemStore, this)
    },
    moveDragCards: function() {
        for (var i = this.dragCards.length - 1; i >= 0; i--) {
            var card = this.dragCards[i];
            card.x = this.game.input.x - card.moveX, card.y = this.game.input.y - card.moveY
        }
    },
    onCardUp: function(card) {
        if (this.idle = 0, this.gameMode == this.GAMEMODE_GAME && !card.moving) {
            var time = game.time.now - this.clickTime;
            if (this.dragCards.length > 0) {
                for (var found = !1, i = 0; i < this.foundations.length; i++)
                    if (this.foundations[i].isPointIn(this.game.input.x, this.game.input.y)) {
                        if (found = !0, 1 == this.dragCards.length && this.foundations[i].canAddCard(card)) {
                            var item = this.undoItemStore.pop();
                            item.card = card, item.stack1 = card.stack, item.stack2 = this.foundations[i], item.turn = !1, item.turnLast = !1;
                            var r = 0;
                            item.stack1 instanceof Solitaire.TempStack ? (item.stack1.needTurnLast() && (item.turnLast = !0), r = this.onCardMove(Solitaire.moves.MOVE_TABLEAU_FOUNDATION, card)) : item.stack1 instanceof Solitaire.Stack2 && (r = this.onCardMove(Solitaire.moves.MOVE_WASTE_FOUNDATION, card)), item.score = r, this.pushUndoQueue(item), this.foundations[i].addCard(card, !0), card.finishMove(), this.dragCards.splice(0, 1), this.checkVictory() && this.victory()
                        }
                        break
                    }
                if (this.dragCards.length > 0)
                    for (var i = 0; i < this.tempStacks.length; i++)
                        if (this.tempStacks[i].isPointIn(this.game.input.x, this.game.input.y)) {
                            if (card.stack != this.tempStacks[i]) {
                                found = !0;
                                var r = 0;
                                if (this.tempStacks[i].canAddCard(card)) {
                                    var item = this.undoItemStore.pop();
                                    item.card = this.dragCards[0], item.stack1 = card.stack, item.stack2 = this.tempStacks[i], item.turn = !1, item.turnLast = !1, item.stack1 instanceof Solitaire.TempStack ? item.stack1.needTurnLast(item.card) && (item.turnLast = !0) : item.stack1 instanceof Solitaire.Stack2 && (r = this.onCardMove(Solitaire.moves.MOVE_WASTE_TABLEAU, card)), item.score = r;
                                    for (var n = item, j = 0; j < this.dragCards.length; j++) j > 0 && (n.next = this.undoItemStore.pop(), n = n.next, n.card = this.dragCards[j], n.stack1 = n.card.stack, n.stack2 = this.tempStacks[i], n.turn = !1), this.tempStacks[i].addCard(this.dragCards[j], !0);
                                    this.pushUndoQueue(item), this.dragCards.splice(0, this.dragCards.length)
                                }
                            }
                            break
                        }
                if (!found && this.lastCard === card && 500 > time && (card.stack instanceof Solitaire.TempStack || card.stack instanceof Solitaire.Stack2) && card.stack.canGetCard(card)) {
                    if (found = !1, 1 === this.dragCards.length)
                        for (var i = 0; i < this.foundations.length; i++)
                            if (this.foundations[i].canAddCard(card)) {
                                var item = this.undoItemStore.pop();
                                item.card = card, item.stack1 = card.stack, item.stack2 = this.foundations[i], item.turn = !1, item.turnLast = !1, item.stack1 instanceof Solitaire.TempStack && item.stack1.needTurnLast(item.card) && (item.turnLast = !0);
                                var r = 0;
                                r = card.stack instanceof Solitaire.TempStack ? this.onCardMove(Solitaire.moves.MOVE_TABLEAU_FOUNDATION, card) : this.onCardMove(Solitaire.moves.MOVE_WASTE_FOUNDATION, card), item.score = r, this.pushUndoQueue(item), this.foundations[i].addCard(card, !1), this.addMovingCard(card), found = !0, this.checkVictory() && this.victory();
                                break
                            }
                    if (!found)
                        for (var i = 0; i < this.tempStacks.length; i++)
                            if (this.tempStacks[i].canAddCard(card)) {
                                var item = this.undoItemStore.pop();
                                item.card = card, item.stack1 = card.stack;
                                var stack1 = card.stack,
                                    index = stack1.cards.indexOf(card) + 1;
                                item.stack2 = this.tempStacks[i], item.turn = !1, item.turnLast = !1;
                                var r = 0;
                                item.stack1 instanceof Solitaire.TempStack ? (item.stack1.needTurnLast(item.card) && (item.turnLast = !0), r = this.onCardMove(Solitaire.moves.MOVE_OTHER, card)) : r = card.stack instanceof Solitaire.Stack2 ? this.onCardMove(Solitaire.moves.MOVE_WASTE_TABLEAU, card) : this.onCardMove(Solitaire.moves.MOVE_OTHER, card), item.score = r, this.dragCards.length > 0 && this.dragCards.splice(0, this.dragCards.length);
                                for (var j = index; j < stack1.cards.length; j++) this.dragCards.push(stack1.cards[j]);
                                this.tempStacks[i].addCard(card, !1), this.addMovingCard(card);
                                for (var n = item, j = 0; j < this.dragCards.length; j++) n.next = this.undoItemStore.pop(), n = n.next, n.card = this.dragCards[j], n.stack1 = n.card.stack, n.stack2 = this.tempStacks[i], n.turn = !1, this.tempStacks[i].addCard(n.card, !1), this.addMovingCard(n.card);
                                this.pushUndoQueue(item), this.dragCards.splice(0, this.dragCards.length), found = !0;
                                break
                            }!found && Math.abs(card.x - card.targetX) < 9 && Math.abs(card.y - card.targetY) < 9 && card.deny()
                }
                for (var i = this.dragCards.length - 1; i >= 0; i--) {
                    var card = this.dragCards[i];
                    this.dragCards.splice(i, 1), this.addMovingCard(card)
                }
            }
        }
    },
    onCardClick: function(card) {
        if (this.gameMode === this.GAMEMODE_WAIT && (this.gameMode = this.GAMEMODE_GAME), this.idle = 0, this.gameMode === this.GAMEMODE_GAME && !(this.dragCards.length > 0 || card.moving))
            if (game.sfx.playSFX("cardselect"), card.select(), this.lastCard = card, this.clickTime = game.time.now, card.stack == this.stack1) {
                if (this.stack1.canGetCard(card)) {
                    if (1 === this.gameType) {
                        var item = this.undoItemStore.pop();
                        item.card = card, item.stack1 = card.stack, item.stack2 = this.stack2, item.turn = !1, this.pushUndoQueue(item), this.stack2.addCard(card, !1), this.addMovingCard(card)
                    } else if (3 === this.gameType) {
                        var item = this.undoItemStore.pop();
                        item.card = card, item.stack1 = card.stack, item.stack2 = this.stack2, item.turn = !1, this.stack2.addCard(card, !1), this.addMovingCard(card);
                        for (var n = item, count = 2, c = this.stack1.getLastCard(); count > 0 && null != c;) n = this.undoItemStore.pop(), n.next = item, item = n, n.card = c, n.stack1 = c.stack, n.stack2 = c.stack2, n.turn = !1, this.stack2.addCard(c, !1), this.addMovingCard(c), count--, c = this.stack1.getLastCard();
                        this.undoQueue.items.push(item)
                    }
                    this.onCardMove(Solitaire.moves.MOVE_OTHER)
                }
            } else if (card.stack == this.stack2) this.stack2.canGetCard(card) && (this.dragCards.push(card), card.moveX = this.game.input.x - card.x, card.moveY = this.game.input.y - card.y, card.targetX = card.x, card.targetY = card.y, card.bringToTop());
        else if (card.stack instanceof Solitaire.Foundation) card.stack.canGetCard(card) && (this.dragCards.push(card), card.bringToTop(), card.moveX = this.game.input.x - card.x, card.moveY = this.game.input.y - card.y, card.targetX = card.x, card.targetY = card.y);
        else if (card.stack instanceof Solitaire.TempStack)
            if (card.stack.canGetCard(card)) {
                this.dragCards.push(card), card.bringToTop(), card.moveX = this.game.input.x - card.x, card.moveY = this.game.input.y - card.y, card.targetX = card.x, card.targetY = card.y;
                for (var i = card.stack.cards.indexOf(card) + 1; i < card.stack.cards.length; i++) {
                    var c = card.stack.cards[i];
                    this.dragCards.push(c), c.bringToTop(), c.moving || (c.targetX = c.x, c.targetY = c.y), c.moveX = this.game.input.x - c.x, c.moveY = this.game.input.y - c.y
                }
            } else if (card.stack.lastCard(card) && 0 == card.faceOn) {
            card.faceUp();
            var item = this.undoItemStore.pop();
            item.card = card, item.turn = !0, this.pushUndoQueue(item)
        }
    }
};
var currentSideMenuButton = null,
    sideButtonShallBeHidden = !1;