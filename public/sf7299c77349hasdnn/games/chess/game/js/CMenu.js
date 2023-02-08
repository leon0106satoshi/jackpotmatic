function CMenu() {
    var _oBg;
    var _oButPlay;
    var _oFade;
    var _oAudioToggle;
    var _oButCredits;
    var _oButFullscreen;
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;

    var _oButEnglish
    var _oButRussian
    var _oButGerman
    var _oButArabic
    var _oButFranch
    var _oButItalian
    var _oButPortugues
    var _oButSpanish

    var _pStartPosCredits;
    var _pStartPosFullscreen;
    var _pStartPosAudio;

    var _pStartEnglish
    var _pStartRussian
    var _pStartGerman
    var _pStartArabic
    var _pStartFranch
    var _pStartItalian
    var _pStartPortugues
    var _pStartSpanish

    this._init = function() {
        _oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_menu'));
        s_oStage.addChild(_oBg);

        var oSprite = s_oSpriteLibrary.getSprite('but_play');
        _oButPlay = new CGfxButton((CANVAS_WIDTH / 2), CANVAS_HEIGHT - 450, oSprite, s_oStage);
        _oButPlay.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        _oButPlay.pulseAnimation();

        //Languages ------------------------------------------------------------------------------------

        var oSpriteEnglish = s_oSpriteLibrary.getSprite("but_lang_ENG");
        _pStartEnglish = {
            x: CANVAS_WIDTH / 2 - (oSprite.width) + oSpriteEnglish.width / 2,
            y: CANVAS_HEIGHT - 375
        };
        _oButEnglish = new CGfxButton(_pStartEnglish.x, _pStartEnglish.y, oSpriteEnglish, s_oStage);
        _oButEnglish.addEventListener(ON_MOUSE_UP, this._oChangeLanguageToEng, this);

        var oSpriteRussian = s_oSpriteLibrary.getSprite("but_lang_RUS");
        _pStartRussian = {
            x: _pStartEnglish.x - oSpriteRussian.width,
            y: _pStartEnglish.y
        };
        _oButRussian = new CGfxButton(_pStartRussian.x, _pStartRussian.y, oSpriteRussian, s_oStage);
        _oButRussian.addEventListener(ON_MOUSE_UP, this._oChangeLanguageToRus, this);


        var oSpriteGerman = s_oSpriteLibrary.getSprite("but_lang_GER");
        _pStartGerman = {
            x: _pStartRussian.x - oSpriteGerman.width,
            y: _pStartEnglish.y
        };
        _oButGerman = new CGfxButton(_pStartGerman.x, _pStartGerman.y, oSpriteGerman, s_oStage);
        _oButGerman.addEventListener(ON_MOUSE_UP, this._oChangeLanguageToGer, this);

        var oSpriteArabic = s_oSpriteLibrary.getSprite("but_lang_ARAB");
        _pStartArabic = {
            x: _pStartGerman.x - oSpriteArabic.width,
            y: _pStartEnglish.y
        };
        _oButArabic = new CGfxButton(_pStartArabic.x, _pStartArabic.y, oSpriteArabic, s_oStage);
        _oButArabic.addEventListener(ON_MOUSE_UP, this._oChangeLanguageToArab, this);


        var oSpriteFranch = s_oSpriteLibrary.getSprite("but_lang_FR");
        _pStartFranch = {
            x: CANVAS_WIDTH / 2 + (oSprite.width) - oSpriteEnglish.width / 2,
            y: _pStartEnglish.y
        };
        _oButFranch = new CGfxButton(_pStartFranch.x, _pStartFranch.y, oSpriteFranch, s_oStage);
        _oButFranch.addEventListener(ON_MOUSE_UP, this._oChangeLanguageToFr, this);


        var oSpriteItalian = s_oSpriteLibrary.getSprite("but_lang_IT");
        _pStartItalian = {
            x: _pStartFranch.x + oSpriteItalian.width,
            y: _pStartEnglish.y
        };
        _oButItalian = new CGfxButton(_pStartItalian.x, _pStartItalian.y, oSpriteItalian, s_oStage);
        _oButItalian.addEventListener(ON_MOUSE_UP, this._oChangeLanguageIt, this);

        var oSpritePortugues = s_oSpriteLibrary.getSprite("but_lang_POR");
        _pStartPortugues = {
            x: _pStartItalian.x + oSpritePortugues.width,
            y: _pStartEnglish.y
        };
        _oButPortugues = new CGfxButton(_pStartPortugues.x, _pStartPortugues.y, oSpritePortugues, s_oStage);
        _oButPortugues.addEventListener(ON_MOUSE_UP, this._oChangeLanguageToPor, this);


        var oSpriteSpanish = s_oSpriteLibrary.getSprite("but_lang_SP");
        _pStartSpanish = {
            x: _pStartPortugues.x + oSpriteSpanish.width,
            y: _pStartEnglish.y
        };
        _oButSpanish = new CGfxButton(_pStartSpanish.x, _pStartSpanish.y, oSpriteSpanish, s_oStage);
        _oButSpanish.addEventListener(ON_MOUSE_UP, this._oChangeLanguageToSp, this);


        //Languages ------------------------------------------------------------------------------------


        var oSprite = s_oSpriteLibrary.getSprite('but_credits');
        _pStartPosCredits = {
            x: 10 + oSprite.width / 2,
            y: (oSprite.height / 2) + 25
        };
        //_oButCredits = new CGfxButton(_pStartPosCredits.x, _pStartPosCredits.y, oSprite, s_oStage);
        //_oButCredits.addEventListener(ON_MOUSE_UP, this._onCredits, this);

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {
                x: CANVAS_WIDTH - (oSprite.height / 2) - 10,
                y: (oSprite.height / 2) + 25
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

        if (_fRequestFullScreen && screenfull.enabled) {
            oSprite = s_oSpriteLibrary.getSprite('but_fullscreen');
            _pStartPosFullscreen = {
                x: _pStartPosCredits.x + oSprite.width / 2 + 10,
                y: _pStartPosCredits.y
            };

            //_oButFullscreen = new CToggle(_pStartPosFullscreen.x,_pStartPosFullscreen.y,oSprite,s_bFullscreen,s_oStage);
            //_oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this);
        }

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        s_oStage.addChild(_oFade);

        createjs.Tween.get(_oFade).to({
            alpha: 0
        }, 1000).call(function() {
            _oFade.visible = false;
        });

        this.refreshButtonPos(s_iOffsetX, s_iOffsetY);

    };

    this.unload = function() {
        _oButPlay.unload();
        _oButPlay = null;
        _oFade.visible = false;

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }
        //_oButCredits.unload();
        if (_fRequestFullScreen && screenfull.enabled) {
            // _oButFullscreen.unload();
        }

        s_oStage.removeChild(_oBg);
        _oBg = null;
        s_oMenu = null;
    };

    this.refreshButtonPos = function(iNewX, iNewY) {
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX, iNewY + _pStartPosAudio.y);
        }
        //_oButCredits.setPosition(_pStartPosCredits.x + iNewX,iNewY + _pStartPosCredits.y);

        if (_fRequestFullScreen && screenfull.enabled) {
            //_oButFullscreen.setPosition(_pStartPosFullscreen.x + iNewX,iNewY + _pStartPosFullscreen.y);
        }

    };

    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };

    this._onButPlayRelease = function() {
        this.unload();

        $(s_oMain).trigger("start_session");

        s_oMain.gotoModeMenu();
    };

    this._onCredits = function() {
        new CCreditsPanel();
    };

    this.resetFullscreenBut = function() {
        //_oButFullscreen.setActive(s_bFullscreen);
    };

    this._onFullscreenRelease = function() {
        if (s_bFullscreen) {
            _fCancelFullScreen.call(window.document);
        } else {
            _fRequestFullScreen.call(window.document.documentElement);
        }

        sizeHandler();
    };

    //----------------------------------Languages------------------------------------------------------------------------
    this._oChangeLanguageToEng = function() {
        updateLanguage("ENG");
    };
    this._oChangeLanguageToRus = function() {
        updateLanguage("RU");
    };

    this._oChangeLanguageToGer = function() {
        updateLanguage("GER");
    };
    this._oChangeLanguageToArab = function() {
        updateLanguage("ARAB");
    };
    this._oChangeLanguageToFr = function() {
        updateLanguage("FR");
    };
    this._oChangeLanguageToIt = function() {
        updateLanguage("IT");
    };
    this._oChangeLanguageToPor = function() {
        updateLanguage("POR");
    };
    this._oChangeLanguageToSr = function() {
        updateLanguage("SP");
    };
    //----------------------------------Languages------------------------------------------------------------------------

    s_oMenu = this;

    this._init();
}

var s_oMenu = null;