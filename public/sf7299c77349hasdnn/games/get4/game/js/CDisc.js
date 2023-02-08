function CDisc(pStartPos, iType, oParentContainer) {
    var _oWinEffect;
    var _oSprite;
    var _oContainer;
    var _oParentContainer;

    this._init = function(pStartPos, iType) {
        _oContainer = new createjs.Container();
        _oContainer.x = pStartPos.x;
        _oContainer.y = pStartPos.y;
        _oParentContainer.addChild(_oContainer);

        var oSprite = s_oSpriteLibrary.getSprite("disc");
        var oData = {
            images: [oSprite],
            // width, height & registration point of each sprite
            frames: {
                width: oSprite.width / 2,
                height: oSprite.height,
                regX: (oSprite.width / 2) / 2,
                regY: oSprite.height / 2
            },
            animations: {
                state_0: [0],
                state_1: [1]
            }
        };

        var oSpriteSheet = new createjs.SpriteSheet(oData);

        _oSprite = createSprite(oSpriteSheet, "state_" + iType, (oSprite.width / 4) / 2, oSprite.height / 2, oSprite.width / 4, oSprite.height);
        _oContainer.addChild(_oSprite);

        var oSprite = s_oSpriteLibrary.getSprite("win_effect");
        var oData = {
            images: [oSprite],
            // width, height & registration point of each sprite
            frames: {
                width: 78,
                height: 78,
                regX: 39,
                regY: 39
            },
            animations: {
                stop: [0, 0],
                anim: [0, 27]
            }
        };

        var oSpriteSheetWin = new createjs.SpriteSheet(oData);
        _oWinEffect = createSprite(oSpriteSheetWin, "stop", 39, 39, 78, 78);
        _oWinEffect.x = 0;
        _oWinEffect.y = 0;
        _oContainer.addChild(_oWinEffect);
    };

    this.unload = function() {
        _oParentContainer.removeChild(_oContainer);
    };

    this.drop = function(iTime, pEndPos) {
        //MOVE DISC TO THE END POSITION
        playSound("drop", 1, 0);
        createjs.Tween.get(_oContainer).to({
            y: pEndPos.y
        }, iTime, createjs.Ease.bounceOut).call(function() {
            s_oGame.checkCombos()
        });
    };

    this.playWinAnim = function() {
        _oWinEffect.gotoAndPlay("anim");
    };

    this.setFrame = function(iFrame) {
        _oSprite.gotoAndStop("state_" + iFrame);
    };

    _oParentContainer = oParentContainer;
    this._init(pStartPos, iType);
}