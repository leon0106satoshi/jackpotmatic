function CCreditsPanel() {

    var _oFade;
    var _oPanelContainer;
    var _oButExit;
    var _oLogo;
    var _oPanel;
    var _oListener;

    var _pStartPanelPos;

    this._init = function() {

        _oPanelContainer = new createjs.Container();
        s_oStage.addChild(_oPanelContainer);

        var oSprite = s_oSpriteLibrary.getSprite('msg_box');
        _oPanel = createBitmap(oSprite);
        _oPanel.regX = oSprite.width / 2;
        _oPanel.regY = oSprite.height / 2;
        _oListener = _oPanel.on("mousedown", this._onLogoButRelease);
        _oPanelContainer.addChild(_oPanel);

        _oPanelContainer.x = CANVAS_WIDTH / 2;
        _oPanelContainer.y = CANVAS_HEIGHT / 2;
        _pStartPanelPos = {
            x: _oPanelContainer.x,
            y: _oPanelContainer.y
        };

        var oTitle = new createjs.Text(TEXT_DEVELOPED, " 60px " + PRIMARY_FONT, "#ffffff");
        oTitle.y = -90;
        oTitle.textAlign = "center";
        oTitle.textBaseline = "middle";
        oTitle.lineWidth = 600;
        _oPanelContainer.addChild(oTitle);

        var oLink = new createjs.Text("vseigru.net", " 44px " + PRIMARY_FONT, "#ffffff");
        oLink.y = 80;
        oLink.textAlign = "center";
        oLink.textBaseline = "middle";
        oLink.lineWidth = 600;
        _oPanelContainer.addChild(oLink);

        var oSprite = s_oSpriteLibrary.getSprite('ctl_logo');
        _oLogo = createBitmap(oSprite);
        _oLogo.regX = oSprite.width / 2;
        _oLogo.regY = oSprite.height / 2;
        _oPanelContainer.addChild(_oLogo);

        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _oButExit = new CGfxButton(276, -210, oSprite, _oPanelContainer);
        _oButExit.addEventListener(ON_MOUSE_UP, this.unload, this);

    };

    this.unload = function() {

        s_oStage.removeChild(_oFade);
        s_oStage.removeChild(_oPanelContainer);

        _oButExit.unload();

        _oPanel.off("mousedown", _oListener);
    };

    this._onLogoButRelease = function() {
        window.open("http://vseigru.net/");
    };


    this._init();


};