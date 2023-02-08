function CGame(oData) {
    var _bUpdate = false;
    var _iCurTurn;
    var _iTimeElaps;
    var _iNumColFilled;
    var _iPlayerColor;
    var _iAdCounter;
    var _oAIController;

    var _oBoardContainer;

    var _oTiePanel;
    var _oBoard;
    var _oInterface;
    var _oEndPanel = null;
    var _oParent;

    this._init = function() {
        _iPlayerColor = DISC_RED;

        var oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_game'));
        s_oStage.addChild(oBg);

        _oBoardContainer = new createjs.Container();
        s_oStage.addChild(_oBoardContainer);

        _oBoard = new CBoard(473, 103, _oBoardContainer);

        _oInterface = new CInterface();


        _oEndPanel = new CEndPanel();

        if (s_iCurMode === MODE_CPU) {
            _oAIController = new CAIController();
            _oAIController.setEnemyCode(_iPlayerColor);
        }

        this.reset();
    };

    this.unload = function() {
        _oInterface.unload();
        _oEndPanel.unload();

        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren();

        s_oGame = null;
    };

    this.reset = function() {

        _iAdCounter = 0;
        _iTimeElaps = 0;

        if (s_iPrevTurn === -1) {
            _iCurTurn = Math.round(Math.random());
        } else {
            _iCurTurn = 1 - s_iPrevTurn;
        }
        s_iPrevTurn = _iCurTurn;

        _iNumColFilled = 0;

        if (_iPlayerColor !== _iCurTurn && s_iCurMode === MODE_CPU) {
            //CPU MUST START THE GAME
            _oBoard.blockHitArea();
            _oAIController.throwCoin(_oBoard.getLogicBoard());
        }
        this.refreshTurn();
        _oInterface.enableGUI(false);

        setVolume("soundtrack", 0.3);
        _bUpdate = true;
    };

    this.restart = function() {
        _oBoard.reset();

        this.reset();
        this.refreshTurn();
    };

    this.setUpdate = function(bValue) {
        _bUpdate = bValue;
    };

    this.changeTurn = function() {
        _iCurTurn = 1 - _iCurTurn;

        this.refreshTurn();

        if (_iCurTurn !== _iPlayerColor && s_iCurMode === MODE_CPU) {
            _oAIController.throwCoin(_oBoard.getLogicBoard());
        } else {
            _oBoard.playerTurn(false);
        }
    };

    this.refreshTurn = function() {
        var szTurnText;
        if (s_iCurMode === MODE_CPU) {
            if (_iCurTurn === _iPlayerColor) {
                szTurnText = TEXT_PLAYER_TURN;
            } else {
                szTurnText = TEXT_CPU_TURN;
            }
        } else {
            if (_iCurTurn === 0) {
                szTurnText = TEXT_PLAYER1_TURN;
            } else {
                szTurnText = TEXT_PLAYER2_TURN;
            }
        }
        _oInterface.refreshTurn(_iCurTurn, szTurnText);
    };

    this.checkCombos = function() {
        if (_oBoard.checkWinCombo(_iCurTurn)) {
            _oBoard.playWinAnim();
            setTimeout(function() {
                s_oGame.endOfMatch();
            }, TIME_WIN_DISC * 2);
        } else {
            this.changeTurn();
        }
    };

    this.endOfMatch = function() {
        _bUpdate = false;
        _oInterface.enableGUI(false);

        var iScoreTime = 0;
        if (_iCurTurn === _iPlayerColor) {
            iScoreTime = TIME_FOR_BONUS_SCORE - _iTimeElaps;
            if (iScoreTime < 0) {
                iScoreTime = 0;
            }
        }

        _oEndPanel.show(_iCurTurn, _iPlayerColor, iScoreTime);
    };

    this.dropDisc = function(iCol) {
        if (s_iCurMode === MODE_CPU) {
            _oAIController.setLastEnemyThrowCol(iCol);
        }
    };

    this.dropDiscByCpu = function(iCol) {
        _oBoard.dropDiscByCpu(iCol, _iCurTurn);
    };

    this.disableColumn = function() {
        _iNumColFilled++;

        if (_iNumColFilled === BOARD_COLS) {
            //ALL BOARD CELLS ARE FILLED AND WE DON'T HAVE A WINNER
            _oTiePanel = new CTiePanel();
        }
    };

    this.getCurTurn = function() {
        return _iCurTurn;
    };

    this.onExit = function() {
        this.unload();
        s_oMain.gotoMenu();
    };

    this.update = function() {
        if (_bUpdate) {
            _iTimeElaps += s_iTimeElaps;
            _oInterface.refreshTime(formatTime(_iTimeElaps));
        }
    };

    s_oGame = this;

    TIME_FOR_BONUS_SCORE = oData.bonus_time * 1000;
    POINTS_FOR_WIN = oData.points_for_win;

    _oParent = this;
    this._init();
}

var s_oGame;