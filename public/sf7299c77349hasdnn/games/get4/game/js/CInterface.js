function CInterface() {
    var _oAudioToggle;
    var _oButExit;
    var _oButRestart;
    var _oButFullscreen;
    var _oTimeNum;
    var _oTurnPanel;
    var _oAreYouSurePanel;


    var _pStartPosExit;
    var _pStartPosAudio;
    var _pStartPosRestart;
    var _pStartPosFullscreen;
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;

    this._init = function() {
        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _pStartPosExit = {
            x: CANVAS_WIDTH - (oSprite.width / 2) - 10,
            y: (oSprite.height / 2) + 10
        };
        _oButExit = new CGfxButton(_pStartPosExit.x, _pStartPosExit.y, oSprite, s_oStage);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);

        oSprite = s_oSpriteLibrary.getSprite("but_restart");
        _pStartPosRestart = {
            x: _pStartPosExit.x - oSprite.width - 10,
            y: _pStartPosExit.y
        };
        _oButRestart = new CGfxButton(_pStartPosRestart.x, _pStartPosRestart.y, oSprite, s_oStage);
        _oButRestart.addEventListener(ON_MOUSE_UP, this._onRestartRelease, this);

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _pStartPosAudio = {
                x: _pStartPosRestart.x - oSprite.width - 10,
                y: _pStartPosRestart.y
            }
            _oAudioToggle = new CToggle(_pStartPosAudio.x, _pStartPosAudio.y, s_oSpriteLibrary.getSprite('audio_icon'), s_bAudioActive, s_oStage);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        }

        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if (ENABLE_FULLSCREEN === false) {
            _fRequestFullScreen = false;
        }

        if (_fRequestFullScreen && inIframe() === false) {
            oSprite = s_oSpriteLibrary.getSprite('but_fullscreen');
            _pStartPosFullscreen = {
                x: oSprite.width / 4 + 10,
                y: (oSprite.height / 2) + 4
            };

            _oButFullscreen = new CToggle(_pStartPosFullscreen.x, _pStartPosFullscreen.y, oSprite, s_bFullscreen, s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this);
        }

        var oTimeIcon = createBitmap(s_oSpriteLibrary.getSprite("time_icon"));
        oTimeIcon.x = CANVAS_WIDTH / 2 - 120;
        oTimeIcon.y = 700;
        s_oStage.addChild(oTimeIcon);

        _oTimeNum = new createjs.Text("00:00", "50px " + PRIMARY_FONT, "#007eff");
        _oTimeNum.x = CANVAS_WIDTH / 2;
        _oTimeNum.y = 750;
        _oTimeNum.textAlign = "center";
        _oTimeNum.textBaseline = "alphabetic";
        _oTimeNum.lineWidth = 200;
        s_oStage.addChild(_oTimeNum);

        _oTurnPanel = new CTurnPanel(1240, 510, s_oStage);

        _oAreYouSurePanel = new CAreYouSurePanel(s_oStage);

        this.refreshButtonPos();
    };

    this.unload = function() {
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }

        if (_fRequestFullScreen && inIframe() === false) {
            _oButFullscreen.unload();
        }


        _oButExit.unload();
        _oButRestart.unload();
    };

    this.refreshButtonPos = function() {
        _oButExit.setPosition(_pStartPosExit.x - s_iOffsetX, s_iOffsetY + _pStartPosExit.y);
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.setPosition(_pStartPosAudio.x - s_iOffsetX, s_iOffsetY + _pStartPosAudio.y);
        }
        if (_fRequestFullScreen && inIframe() === false) {
            _oButFullscreen.setPosition(_pStartPosFullscreen.x + s_iOffsetX, _pStartPosFullscreen.y + s_iOffsetY);
        }


        _oButRestart.setPosition(_pStartPosRestart.x - s_iOffsetX, _pStartPosRestart.y + s_iOffsetY);
    };

    this.enableGUI = function(bEnable) {
        if (bEnable) {
            _oButExit.enable();
            _oButRestart.enable();
        } else {
            _oButExit.disable();
            _oButRestart.disable();
        }
    };

    this.refreshTime = function(iValue) {
        _oTimeNum.text = iValue;
    };

    this.refreshTurn = function(iTurn, szText) {
        _oTurnPanel.setTurn(iTurn, szText);
    };

    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };

    this._onExit = function() {
        s_oGame.setUpdate(false);

        _oAreYouSurePanel.show(TEXT_ARE_YOU_SURE);
        _oAreYouSurePanel.addEventListener(ON_RELEASE_YES, this._onReleaseYes);
        _oAreYouSurePanel.addEventListener(ON_RELEASE_NO, this._onReleaseNo);
    };

    this._onReleaseYes = function() {
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("show_interlevel_ad");
        s_oGame.onExit();
    };

    this._onReleaseNo = function() {
        s_oGame.setUpdate(true);
    };

    this._onRestartRelease = function() {
        s_oGame.restart();
    };

    this._onFullscreenRelease = function() {
        if (s_bFullscreen) {
            _fCancelFullScreen.call(window.document);
            s_bFullscreen = false;
        } else {
            _fRequestFullScreen.call(window.document.documentElement);
            s_bFullscreen = true;
        }

        sizeHandler();
    };


    s_oInterface = this;

    this._init();

    return this;
}

var s_oInterface = null;