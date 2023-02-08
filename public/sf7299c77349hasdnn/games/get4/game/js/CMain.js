function CMain(oData) {
    var _bUpdate;
    var _iCurResource = 0;
    var RESOURCE_TO_LOAD = 0;
    var _iState = STATE_LOADING;
    var _oData;

    var _oPreloader;
    var _oMenu;
    var _oHelp;
    var _oGame;

    this.initContainer = function() {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        s_oStage.preventSelection = false;
        createjs.Touch.enable(s_oStage);

        s_bMobile = jQuery.browser.mobile;
        if (s_bMobile === false) {
            s_oStage.enableMouseOver(20);
            $('body').on('contextmenu', '#canvas', function(e) {
                return false;
            });
        }

        s_iPrevTime = new Date().getTime();

        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.setFPS(FPS);

        if (navigator.userAgent.match(/Windows Phone/i)) {
            DISABLE_SOUND_MOBILE = true;
        }

        s_oSpriteLibrary = new CSpriteLibrary();

        //ADD PRELOADER
        _oPreloader = new CPreloader();
    };

    this.preloaderReady = function() {
        s_oMain._loadImages();
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            s_oMain._initSounds();
        }
    };

    this.soundLoaded = function() {
        _iCurResource++;
        var iPerc = Math.floor(_iCurResource / RESOURCE_TO_LOAD * 100);
        _oPreloader.refreshLoader(iPerc);

        if (_iCurResource === RESOURCE_TO_LOAD) {
            this._allResourcesLoaded();
        }
    };


    this._initSounds = function() {

        var aSoundsInfo = new Array();
        aSoundsInfo.push({
            path: './sounds/',
            filename: 'win',
            loop: false,
            volume: 1,
            ingamename: 'win'
        });
        aSoundsInfo.push({
            path: './sounds/',
            filename: 'click',
            loop: false,
            volume: 1,
            ingamename: 'click'
        });
        aSoundsInfo.push({
            path: './sounds/',
            filename: 'game_over',
            loop: false,
            volume: 1,
            ingamename: 'game_over'
        });
        aSoundsInfo.push({
            path: './sounds/',
            filename: 'drop',
            loop: false,
            volume: 1,
            ingamename: 'drop'
        });
        aSoundsInfo.push({
            path: './sounds/',
            filename: 'soundtrack',
            loop: true,
            volume: 1,
            ingamename: 'soundtrack'
        });

        RESOURCE_TO_LOAD += aSoundsInfo.length;

        s_aSounds = new Array();
        for (var i = 0; i < aSoundsInfo.length; i++) {
            s_aSounds[aSoundsInfo[i].ingamename] = new Howl({
                src: [aSoundsInfo[i].path + aSoundsInfo[i].filename + '.mp3', aSoundsInfo[i].path + aSoundsInfo[i].filename + '.ogg'],
                autoplay: false,
                preload: true,
                loop: aSoundsInfo[i].loop,
                volume: aSoundsInfo[i].volume,
                onload: s_oMain.soundLoaded()
            });
        }

    };

    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);

        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("ctl_logo", "./sprites/ctl_logo.png");

        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("bg_selection", "./sprites/bg_selection.jpg");

        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");

        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");

        s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
        s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("but_cpu", "./sprites/but_cpu.png");
        s_oSpriteLibrary.addSprite("but_human", "./sprites/but_human.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("board_back", "./sprites/board_back.png");
        s_oSpriteLibrary.addSprite("board_front", "./sprites/board_front.png");
        s_oSpriteLibrary.addSprite("disc", "./sprites/disc.png");
        s_oSpriteLibrary.addSprite("bg_turn", "./sprites/bg_turn.png");
        s_oSpriteLibrary.addSprite("arrow", "./sprites/arrow.png");
        s_oSpriteLibrary.addSprite("time_icon", "./sprites/time_icon.png");
        s_oSpriteLibrary.addSprite("win_effect", "./sprites/win_effect.png");

        RESOURCE_TO_LOAD += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites();
    };

    this._onImagesLoaded = function() {
        _iCurResource++;
        var iPerc = Math.floor(_iCurResource / RESOURCE_TO_LOAD * 100);
        _oPreloader.refreshLoader(iPerc);

        if (_iCurResource === RESOURCE_TO_LOAD) {
            this._allResourcesLoaded();
        }
    };

    this._allResourcesLoaded = function() {
        _oPreloader.unload();

        if (!isIOS()) {
            s_oSoundTrack = playSound("soundtrack", 1, true);
        }

        s_oMain.gotoMenu();
    };

    this._onAllImagesLoaded = function() {

    };

    this.onAllPreloaderImagesLoaded = function() {
        this._loadImages();
    };

    this.gotoMenu = function() {
        _oMenu = new CMenu();
        _iState = STATE_MENU;
    };

    this.gotoModePanel = function() {
        new CModePanel();
        _iState = STATE_CHOOSE_MODE;
    };

    this.gotoGame = function() {
        _oGame = new CGame(_oData);

        _iState = STATE_GAME;
    };

    this.gotoHelp = function() {
        _oHelp = new CHelp();
        _iState = STATE_HELP;
    };

    this.selectMode = function(iMode) {
        s_iCurMode = iMode;
        this.gotoGame();
    };

    this.stopUpdate = function() {
        _bUpdate = false;
        createjs.Ticker.paused = true;
        $("#block_game").css("display", "block");

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            Howler.mute(true);
        }

    };

    this.startUpdate = function() {
        s_iPrevTime = new Date().getTime();
        _bUpdate = true;
        createjs.Ticker.paused = false;
        $("#block_game").css("display", "none");

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            if (s_bAudioActive) {
                Howler.mute(false);
            }
        }

    };

    this._update = function(event) {
        if (_bUpdate === false) {
            return;
        }
        var iCurTime = new Date().getTime();
        s_iTimeElaps = iCurTime - s_iPrevTime;
        s_iCntTime += s_iTimeElaps;
        s_iCntFps++;
        s_iPrevTime = iCurTime;

        if (s_iCntTime >= 1000) {
            s_iCurFps = s_iCntFps;
            s_iCntTime -= 1000;
            s_iCntFps = 0;
        }

        if (_iState === STATE_GAME) {
            _oGame.update();
        }

        s_oStage.update(event);

    };

    s_oMain = this;

    _oData = oData;
    NUM_IMAGES = oData.num_images;
    ENABLE_FULLSCREEN = false; //oData.fullscreen;
    ENABLE_CHECK_ORIENTATION = oData.check_orientation;

    this.initContainer();
}
var s_bMobile;
var s_bAudioActive = true;
var s_iCntTime = 0;
var s_iTimeElaps = 0;
var s_iPrevTime = 0;
var s_iCntFps = 0;
var s_iCurFps = 0;

var s_oStage;
var s_oMain;
var s_oSpriteLibrary;
var s_oCanvas;
var s_bFullscreen = false;
var s_iCurMode;
var s_oSoundTrack = null;
var s_iPrevTurn = -1;