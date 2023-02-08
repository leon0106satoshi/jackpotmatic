function CTurnPanel(iX, iY, oParentContainer) {
    var _oDisc;
    var _oText;
    var _oContainer;
    var _oParentContainer;

    this._init = function(iX, iY) {
        _oContainer = new createjs.Container();
        _oContainer.x = iX;
        _oContainer.y = iY;
        _oParentContainer.addChild(_oContainer);

        var oSpriteBg = s_oSpriteLibrary.getSprite("bg_turn");
        var oBg = createBitmap(oSpriteBg);
        _oContainer.addChild(oBg);

        var szText;
        if (s_iCurMode === MODE_CPU) {
            szText = TEXT_PLAYER_TURN;
        } else {
            szText = TEXT_PLAYER1_TURN;
        }

        _oText = new createjs.Text(szText, "20px " + PRIMARY_FONT, "#fff");
        _oText.x = oSpriteBg.width / 2;
        _oText.y = 36;
        _oText.textAlign = "center";
        _oText.textBaseline = "alphabetic";
        _oContainer.addChild(_oText);

        _oDisc = new CDisc({
            x: oSpriteBg.width / 2,
            y: oSpriteBg.height / 2 + 7
        }, s_oGame.getCurTurn(), _oContainer);
    };

    this.setTurn = function(iTurn, szTurnText) {
        _oText.text = szTurnText;
        _oDisc.setFrame(iTurn);
    };

    _oParentContainer = oParentContainer;
    this._init(iX, iY);
}