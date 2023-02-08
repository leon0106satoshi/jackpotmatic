function CBoard(iX, iY, oParentContainer) {
    var _bBlockHitArea;
    var _aBoardMat;
    var _aBoardCellPos;
    var _aHitAreaCols;
    var _aStartPosForDiscs;
    var _aListeners;
    var _aStartOffsetCheckDiagDx;
    var _aStartOffsetCheckDiagSx;
    var _aLastCombo;
    var _aDisc;

    var _oArrow;
    var _oDiscContainer;
    var _oContainer;
    var _oParentContainer;
    var _oThis;

    this._init = function(iXPos, iYPos) {
        _bBlockHitArea = false;

        _oContainer = new createjs.Container();
        _oContainer.x = iXPos;
        _oContainer.y = iYPos;
        _oParentContainer.addChild(_oContainer);



        var oBgBack = createBitmap(s_oSpriteLibrary.getSprite("board_back"));
        oBgBack.x = 32;
        oBgBack.y = 4;
        _oContainer.addChild(oBgBack);

        _oDiscContainer = new createjs.Container();
        _oContainer.addChild(_oDiscContainer);

        var oBgFront = createBitmap(s_oSpriteLibrary.getSprite("board_front"));
        _oContainer.addChild(oBgFront);

        _aBoardMat = new Array();
        _aBoardCellPos = new Array();
        _aDisc = new Array();

        var iX = 113;
        var iY = 531;
        for (var i = 0; i < BOARD_ROWS; i++) {
            _aBoardMat[i] = new Array();
            _aBoardCellPos[i] = new Array();
            _aDisc[i] = new Array();
            for (var j = 0; j < BOARD_COLS; j++) {
                _aBoardMat[i][j] = DISC_EMPTY;
                _aBoardCellPos[i][j] = {
                    x: iX,
                    y: iY
                };
                _aDisc[i][j] = null;
                /*
                var oRect = new createjs.Shape();
                oRect.graphics.beginFill("rgba(255,0,0,0.3)").drawCircle(iX,iY,20);
                _oContainer.addChild(oRect);    
            */
                iX += 92;
            }

            iX = 113;
            iY -= 91.5;
        }

        _aListeners = new Array();
        _aHitAreaCols = new Array();
        _aStartPosForDiscs = new Array();
        for (var k = 0; k < BOARD_COLS; k++) {
            var oHitArea = new createjs.Shape();
            oHitArea.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(_aBoardCellPos[_aBoardCellPos.length - 1][k].x - DISC_RADIUS, _aBoardCellPos[_aBoardCellPos.length - 1][k].y - DISC_RADIUS,
                DISC_DIAMETER, _aBoardCellPos[0][k].y + DISC_RADIUS);

            var oListener = oHitArea.on("click", _oThis.colSelected, null, false, k);
            _aListeners.push({
                listener: oListener,
                event: "click"
            });
            if (!s_bMobile) {
                oHitArea.cursor = "pointer";
                oListener = oHitArea.on("mouseover", _oThis.colOver, null, false, k);
                _aListeners.push({
                    listener: oListener,
                    event: "onmouseover"
                });
            }


            _oContainer.addChild(oHitArea);

            _aHitAreaCols[k] = oHitArea;

            _aStartPosForDiscs[k] = {
                x: _aBoardCellPos[_aBoardCellPos.length - 1][k].x,
                y: _aBoardCellPos[_aBoardCellPos.length - 1][k].y - DISC_DIAMETER
            };
        }

        var oSpriteArrow = s_oSpriteLibrary.getSprite("arrow");
        _oArrow = createBitmap(oSpriteArrow);
        _oArrow.regX = oSpriteArrow.width / 2;
        _oArrow.regY = oSpriteArrow.height;
        _oArrow.x = _aStartPosForDiscs[0].x;
        _oArrow.y = _aStartPosForDiscs[0].y;
        _oArrow.visible = false;
        _oContainer.addChild(_oArrow);

        //INIT OF DIAGONAL OFFSET FOR COMBO CHECKING
        _aStartOffsetCheckDiagDx = new Array();
        _aStartOffsetCheckDiagDx.push({
            row: 2,
            col: 0
        });
        _aStartOffsetCheckDiagDx.push({
            row: 1,
            col: 0
        });
        _aStartOffsetCheckDiagDx.push({
            row: 0,
            col: 0
        });
        _aStartOffsetCheckDiagDx.push({
            row: 0,
            col: 1
        });
        _aStartOffsetCheckDiagDx.push({
            row: 0,
            col: 2
        });
        _aStartOffsetCheckDiagDx.push({
            row: 0,
            col: 3
        });

        _aStartOffsetCheckDiagSx = new Array();
        _aStartOffsetCheckDiagSx.push({
            row: 2,
            col: 6
        });
        _aStartOffsetCheckDiagSx.push({
            row: 1,
            col: 6
        });
        _aStartOffsetCheckDiagSx.push({
            row: 0,
            col: 6
        });
        _aStartOffsetCheckDiagSx.push({
            row: 0,
            col: 5
        });
        _aStartOffsetCheckDiagSx.push({
            row: 0,
            col: 4
        });
        _aStartOffsetCheckDiagSx.push({
            row: 0,
            col: 3
        });
    };

    this.unload = function() {
        for (var i = 0; i < _aListeners.length; i++) {
            _aHitAreaCols[i].off(_aListeners[i].event, _aListeners[i].listener);
        }
    };

    this.reset = function() {
        _aBoardMat = new Array();
        for (var i = 0; i < BOARD_ROWS; i++) {
            _aBoardMat[i] = new Array();
            for (var j = 0; j < BOARD_COLS; j++) {
                _aBoardMat[i][j] = DISC_EMPTY;
                if (_aDisc[i][j] !== null) {
                    _aDisc[i][j].unload();
                    _aDisc[i][j] = null;
                }

            }
        }

        for (var j = 0; j < _aHitAreaCols.length; j++) {
            _aHitAreaCols[j].visible = true;
        }

        _bBlockHitArea = false;
    };

    this.blockHitArea = function() {
        _bBlockHitArea = true;
    };

    this.playerTurn = function(bBlock) {
        _bBlockHitArea = bBlock;
        _oArrow.visible = true;
    };

    this.colOver = function(evt, iCol) {
        if (!_bBlockHitArea) {
            _oArrow.visible = true;
        }


        createjs.Tween.get(_oArrow).to({
            x: _aStartPosForDiscs[iCol].x
        }, 500, createjs.Ease.cubicOut);
    };

    this.colSelected = function(evt, iCol) {
        if (_bBlockHitArea) {
            return;
        }
        _bBlockHitArea = true;
        _oArrow.visible = false;
        var iRow = _oThis._findEmptyCellInColumns(iCol);
        _aBoardMat[iRow][iCol] = s_oGame.getCurTurn();

        //ATTACH NEW DISC
        var iTime = TIME_FOR_DROP_PER_CELL * (BOARD_ROWS - iRow);

        var oDisc = new CDisc({
            x: _aStartPosForDiscs[iCol].x,
            y: _aStartPosForDiscs[iCol].y
        }, s_oGame.getCurTurn(), _oDiscContainer);
        oDisc.drop(iTime, {
            x: _aBoardCellPos[iRow][iCol].x,
            y: _aBoardCellPos[iRow][iCol].y
        });
        _aDisc[iRow][iCol] = oDisc;

        s_oGame.dropDisc(iCol);

        if (iRow === BOARD_ROWS - 1) {
            //THIS COLUMS HIT AREA MUST BE DISABLED
            _aHitAreaCols[iCol].visible = false;
            s_oGame.disableColumn();
        }
    };

    this.dropDiscByCpu = function(iCol, iCurTurn) {
        var oRet = this.getPointPerCol(iCol);
        var pStartPos = oRet.start;
        var pEndPos = oRet.end;
        var iRow = oRet.row;
        var iTime = TIME_FOR_DROP_PER_CELL * (BOARD_ROWS - iRow);

        var oDisc = new CDisc(pStartPos, iCurTurn, _oDiscContainer);
        oDisc.drop(iTime, pEndPos);
        _aDisc[iRow][iCol] = oDisc;

        if (iRow === BOARD_ROWS - 1) {
            //THIS COLUMS HIT AREA MUST BE DISABLED
            _aHitAreaCols[iCol].visible = false;
            s_oGame.disableColumn();
        }
    };

    this._findEmptyCellInColumns = function(iCol) {
        for (var i = 0; i < BOARD_ROWS; i++) {
            if (_aBoardMat[i][iCol] === DISC_EMPTY) {
                return i;
            }
        }

        return -1;
    };

    this._checkHorizontalAdjacency = function(iCodeCoin, aResult) {
        for (var r = 0; r < BOARD_ROWS; r++) {
            var aTmpList = new Array();
            for (var c = 0; c < BOARD_COLS; c++) {
                if (aTmpList.length === 0 && _aBoardMat[r][c] === iCodeCoin) {
                    aTmpList = new Array();
                    aTmpList.push({
                        row: r,
                        col: c
                    });
                } else if (aTmpList.length > 0 && _aBoardMat[r][c] !== iCodeCoin) {
                    if (aTmpList.length >= DISC_FOR_COMBOS) {
                        for (var k = 0; k < aTmpList.length; k++) {
                            aResult.push(aTmpList[k]);
                        }
                    }
                    aTmpList = new Array();
                } else if (aTmpList.length > 0 && _aBoardMat[r][c] === iCodeCoin) {
                    aTmpList.push({
                        row: r,
                        col: c
                    });
                }
            }

            if (aTmpList.length >= DISC_FOR_COMBOS) {
                for (var k = 0; k < aTmpList.length; k++) {
                    aResult.push(aTmpList[k]);
                }
            }
            aTmpList = new Array();
        }
    };

    this._checkVerticalAdjacency = function(iCodeCoin, aResult) {
        for (var c = 0; c < BOARD_COLS; c++) {
            var aTmpList = new Array();
            for (var r = 0; r < BOARD_ROWS; r++) {
                if (aTmpList.length === 0 && _aBoardMat[r][c] === iCodeCoin) {
                    aTmpList = new Array();
                    aTmpList.push({
                        row: r,
                        col: c
                    });
                } else if (aTmpList.length > 0 && _aBoardMat[r][c] !== iCodeCoin) {
                    if (aTmpList.length >= DISC_FOR_COMBOS) {
                        for (var k = 0; k < aTmpList.length; k++) {
                            aResult.push(aTmpList[k]);
                        }
                    }
                    aTmpList = new Array();
                } else if (aTmpList.length > 0 && _aBoardMat[r][c] === iCodeCoin) {
                    aTmpList.push({
                        row: r,
                        col: c
                    });
                }
            }

            if (aTmpList.length >= DISC_FOR_COMBOS) {
                for (var k = 0; k < aTmpList.length; k++) {
                    aResult.push(aTmpList[k]);
                }
            }
            aTmpList = new Array();
        }
    };

    this._checkDiagonalDxAdjacency = function(iCodeCoin, aResult) {
        for (var i = 0; i < _aStartOffsetCheckDiagDx.length; i++) {
            var aTmpList = new Array();
            var iCntR = 0;
            var iCntC = 0;

            var r, c;

            while (((_aStartOffsetCheckDiagDx[i]["row"] + iCntR) < BOARD_ROWS) &&
                ((_aStartOffsetCheckDiagDx[i]["col"] + iCntC) < BOARD_COLS)) {

                r = _aStartOffsetCheckDiagDx[i]["row"] + iCntR;
                c = _aStartOffsetCheckDiagDx[i]["col"] + iCntC;

                if (aTmpList.length === 0 && _aBoardMat[r][c] === iCodeCoin) {
                    aTmpList = new Array();
                    aTmpList.push({
                        row: r,
                        col: c
                    });
                } else if (aTmpList.length > 0 && _aBoardMat[r][c] !== iCodeCoin) {
                    if (aTmpList.length >= DISC_FOR_COMBOS) {
                        for (var k = 0; k < aTmpList.length; k++) {
                            aResult.push(aTmpList[k]);
                        }
                    }
                    aTmpList = new Array();
                } else if (aTmpList.length > 0 && _aBoardMat[r][c] === iCodeCoin) {
                    aTmpList.push({
                        row: r,
                        col: c
                    });
                }

                iCntR++;
                iCntC++;
            }

            if (aTmpList.length >= DISC_FOR_COMBOS) {
                for (var k = 0; k < aTmpList.length; k++) {
                    aResult.push(aTmpList[k]);
                }
            }
            aTmpList = new Array();
        }
    };

    this._checkDiagonalSxAdjacency = function(iCodeCoin, aResult) {
        for (var i = 0; i < _aStartOffsetCheckDiagDx.length; i++) {
            var aTmpList = new Array();
            var iCntR = 0;
            var iCntC = 0;

            var r, c;

            while (((_aStartOffsetCheckDiagSx[i]["row"] + iCntR) < BOARD_ROWS) &&
                ((_aStartOffsetCheckDiagSx[i]["col"] + iCntC) > -1)) {

                r = _aStartOffsetCheckDiagSx[i]["row"] + iCntR;
                c = _aStartOffsetCheckDiagSx[i]["col"] + iCntC;

                if (aTmpList.length === 0 && _aBoardMat[r][c] === iCodeCoin) {
                    aTmpList = new Array();
                    aTmpList.push({
                        row: r,
                        col: c
                    });
                } else if (aTmpList.length > 0 && _aBoardMat[r][c] !== iCodeCoin) {
                    if (aTmpList.length >= DISC_FOR_COMBOS) {
                        for (var k = 0; k < aTmpList.length; k++) {
                            aResult.push(aTmpList[k]);
                        }
                    }
                    aTmpList = new Array();
                } else if (aTmpList.length > 0 && _aBoardMat[r][c] === iCodeCoin) {
                    aTmpList.push({
                        row: r,
                        col: c
                    });
                }

                iCntR++;
                iCntC--;
            }

            if (aTmpList.length >= DISC_FOR_COMBOS) {
                for (var k = 0; k < aTmpList.length; k++) {
                    aResult.push(aTmpList[k]);
                }
            }
            aTmpList = new Array();
        }
    };

    this.checkWinCombo = function(iDiscColor) {
        _aLastCombo = new Array();

        this._checkHorizontalAdjacency(iDiscColor, _aLastCombo);
        this._checkVerticalAdjacency(iDiscColor, _aLastCombo);
        this._checkDiagonalDxAdjacency(iDiscColor, _aLastCombo);
        this._checkDiagonalSxAdjacency(iDiscColor, _aLastCombo);

        return (_aLastCombo.length > 0) ? true : false;
    };

    this.playWinAnim = function() {
        for (var i = 0; i < _aLastCombo.length; i++) {
            var iRow = _aLastCombo[i].row;
            var iCol = _aLastCombo[i].col;
            _aDisc[iRow][iCol].playWinAnim();
        }
    };

    this.getLogicBoard = function() {
        return _aBoardMat;
    };

    this.getPointPerCol = function(iCol) {
        var iRow = _oThis._findEmptyCellInColumns(iCol);
        _aBoardMat[iRow][iCol] = s_oGame.getCurTurn();

        var pStart = {
            x: _aStartPosForDiscs[iCol].x,
            y: _aStartPosForDiscs[iCol].y
        };
        var pEnd = {
            x: _aBoardCellPos[iRow][iCol].x,
            y: _aBoardCellPos[iRow][iCol].y
        };

        return {
            start: pStart,
            end: pEnd,
            row: iRow
        };
    };

    _oThis = this;
    _oParentContainer = oParentContainer;
    this._init(iX, iY);
}