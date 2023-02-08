function CTiePanel() {
    var _oBg;
    var _oGroup;
    var _oMsgText;
    var _oListener;

    var _oThis;
    var _oButHome;
    var _oButRestart;

    this._init = function() {
        _oGroup = new createjs.Container();

        _oBg = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        _oListener = _oBg.on("click", function() {});
        _oGroup.addChild(_oBg);

        _oMsgText = new createjs.Text(TEXT_TIE, " 80px " + PRIMARY_FONT, "#fff");
        _oMsgText.x = CANVAS_WIDTH / 2;
        _oMsgText.y = (CANVAS_HEIGHT / 2) - 62;
        _oMsgText.textAlign = "center";
        _oMsgText.textBaseline = "alphabetic";
        _oMsgText.lineWidth = 600;
        _oGroup.addChild(_oMsgText);

        _oButHome = new CGfxButton(CANVAS_WIDTH / 2 - 200, CANVAS_HEIGHT / 2 + 120, s_oSpriteLibrary.getSprite("but_home"), _oGroup);
        _oButHome.addEventListener(ON_MOUSE_UP, this._onButHome, this);

        _oButRestart = new CGfxButton(CANVAS_WIDTH / 2 + 200, CANVAS_HEIGHT / 2 + 120, s_oSpriteLibrary.getSprite("but_restart"), _oGroup);
        _oButRestart.addEventListener(ON_MOUSE_UP, this._onButRestart, this);

        s_oStage.addChild(_oGroup);

        _oGroup.alpha = 0;
        createjs.Tween.get(_oGroup).to({
            alpha: 1
        }, 500, createjs.Ease.cubicOut).call(function() {
            $(s_oMain).trigger("show_interlevel_ad");
        });

        setVolume("soundtrack", 1);
    };

    this.unload = function() {
        _oBg.on("click", _oListener);
        s_oStage.removeChild(_oGroup);
        _oButHome.unload();
        _oButRestart.unload();
    };

    this._onButHome = function() {
        _oThis.unload();

        $(s_oMain).trigger("end_session");

        s_oGame.onExit();
    };

    this._onButRestart = function() {
        _oThis.unload();

        s_oGame.restart();
    };

    _oThis = this;
    this._init();

    return this;
}