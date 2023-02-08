function CPreloader() {
    var _oLoadingText;
    var _oProgress;
    var _oFade;
    var _oContainer;

    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("progress", "./sprites/progress.png");
        s_oSpriteLibrary.loadSprites();

        _oContainer = new createjs.Container();
        s_oStage.addChild(_oContainer);
    };

    this.unload = function() {
        createjs.Tween.removeTweens(_oProgress);
        _oContainer.removeAllChildren();
    };

    this.hide = function() {
        var oParent = this;
        setTimeout(function() {
            createjs.Tween.get(_oFade).to({
                alpha: 1
            }, 500).call(function() {
                oParent.unload();
                s_oMain.gotoMenu();
            });
        }, 1000);
    };

    this._onImagesLoaded = function() {

    };

    this._onAllImagesLoaded = function() {
        this.attachSprites();

        s_oMain.preloaderReady();
    };

    this.attachSprites = function() {

        var oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_menu'));
        _oContainer.addChild(oBg);

        var oSprite = s_oSpriteLibrary.getSprite("progress");
        _oProgress = createBitmap(oSprite);
        _oProgress.regX = oSprite.width / 2;
        _oProgress.regY = oSprite.height / 2;
        _oProgress.x = CANVAS_WIDTH / 2 + 270;
        _oProgress.y = CANVAS_HEIGHT / 2 + 100
        _oContainer.addChild(_oProgress);

        _oLoadingText = new createjs.Text("", "100px " + PRIMARY_FONT, "#008df0");
        _oLoadingText.x = CANVAS_WIDTH / 2 + 280;
        _oLoadingText.y = CANVAS_HEIGHT / 2 + 150;
        _oLoadingText.textBaseline = "alphabetic";
        _oLoadingText.textAlign = "center";
        _oContainer.addChild(_oLoadingText);

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oFade.alpha = 0;

        _oContainer.addChild(_oFade);

        createjs.Tween.get(_oProgress, {
            loop: true
        }).to({
            rotation: 360
        }, 1000);
    };

    this.refreshLoader = function(iPerc) {
        _oLoadingText.text = iPerc + "%";
    };

    this._init();
}