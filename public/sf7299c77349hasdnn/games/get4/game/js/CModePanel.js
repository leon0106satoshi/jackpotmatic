function CModePanel() {
    var _pStartPosAudio;
    var _pStartPosFullscreen;

    var _oButCpu;
    var _oButHuman;
    var _oAudioToggle;
    var _oButFullscreen;
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;
    var _oContainer;

    this._init = function() {
        _oContainer = new createjs.Container();
        s_oStage.addChild(_oContainer);

        var oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_selection'));
        _oContainer.addChild(oBg);

        var oText = new createjs.Text(TEXT_CHOOSE_MODE, " 80px " + PRIMARY_FONT, "#007eff");
        oText.x = CANVAS_WIDTH / 2;
        oText.y = 122;
        oText.textAlign = "center";
        oText.textBaseline = "alphabetic";
        oText.lineWidth = 600;
        _oContainer.addChild(oText);

        _oButCpu = new CGfxButton(CANVAS_WIDTH / 2 - 200, CANVAS_HEIGHT / 2, s_oSpriteLibrary.getSprite("but_cpu"), _oContainer);
        _oButCpu.addEventListener(ON_MOUSE_UP, this._onChooseCpu, this);

        _oButHuman = new CGfxButton(CANVAS_WIDTH / 2 + 200, CANVAS_HEIGHT / 2, s_oSpriteLibrary.getSprite("but_human"), _oContainer);
        _oButHuman.addEventListener(ON_MOUSE_UP, this._onChooseHuman, this);


        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {
                x: CANVAS_WIDTH - (oSprite.height / 2) - 10,
                y: (oSprite.height / 2) + 10
            };
            _oAudioToggle = new CToggle(_pStartPosAudio.x, _pStartPosAudio.y, oSprite, s_bAudioActive, s_oStage);
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
                x: (oSprite.height / 2) + 10,
                y: (oSprite.height / 2) + 10
            };

            _oButFullscreen = new CToggle(_pStartPosFullscreen.x, _pStartPosFullscreen.y, oSprite, s_bFullscreen, s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this);
        }

        var oFade = new createjs.Shape();
        oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        _oContainer.addChild(oFade);

        createjs.Tween.get(oFade).to({
            alpha: 0
        }, 1000).call(function() {
            oFade.visible = false;
        });

        this.refreshButtonPos();
    };

    this.refreshButtonPos = function() {
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.setPosition(_pStartPosAudio.x - s_iOffsetX, s_iOffsetY + _pStartPosAudio.y);
        }
        if (_fRequestFullScreen && inIframe() === false) {
            _oButFullscreen.setPosition(_pStartPosFullscreen.x + s_iOffsetX, _pStartPosFullscreen.y + s_iOffsetY);
        }
    };

    this.unload = function() {
        _oButCpu.unload();
        _oButHuman.unload();

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }
        if (_fRequestFullScreen && inIframe() === false) {
            _oButFullscreen.unload();
        }
        s_oStage.removeAllChildren();

        s_oModePanel = null;
    };

    this._onChooseCpu = function() {
        s_oModePanel.unload();
        s_oMain.selectMode(MODE_CPU);
    };

    this._onChooseHuman = function() {
        s_oModePanel.unload();
        s_oMain.selectMode(MODE_HUMAN);
    };

    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
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

    s_oModePanel = this;
    this._init();
}

var s_oModePanel = null;