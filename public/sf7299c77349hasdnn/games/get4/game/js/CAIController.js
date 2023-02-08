function CAIController() {
    var _iEnemyCodeCoin;
    var _iAiCodeCoin;
    var _iLastEnemyThrowCol;
    var _aColStrategic;
    var _aBoardMat;

    this._init = function() {
        _iEnemyCodeCoin = DISC_GENERIC;
        _iAiCodeCoin = DISC_GENERIC;

        _aColStrategic = new Array();

        _aColStrategic.push(3);
        _aColStrategic.push(4);
        _aColStrategic.push(2);
        _aColStrategic.push(5);
        _aColStrategic.push(1);
        _aColStrategic.push(6);
        _aColStrategic.push(0);
    };

    this.setLastEnemyThrowCol = function(iCol) {
        _iLastEnemyThrowCol = iCol;
    };

    this.verifyIfPlayerWinsWithHorizontalLine = function(iRow, iCol, iCodePlayer, iThreshold, oObjAdjacency) {
        var iCntCoins, iOffset, iFreeAdjacency = 0;
        iCntCoins = 0;
        iOffset = 1;

        while (_aBoardMat[iRow][iCol + iOffset] === iCodePlayer) {
            iCntCoins++;
            iOffset++;
        }

        // check right free adjacency 
        while (_aBoardMat[iRow][iCol + iOffset] === DISC_EMPTY) { // check right
            iOffset++;
            iFreeAdjacency++;
        }


        iOffset = -1;
        while (_aBoardMat[iRow][iCol + iOffset] === iCodePlayer) { // check left
            iCntCoins++;
            iOffset--;
        }

        // check right free adjacency 
        while (_aBoardMat[iRow][iCol + iOffset] === DISC_EMPTY) { // check left
            iOffset--;
            iFreeAdjacency++;
        }

        oObjAdjacency["_iNumFreeAdiacency"] = iFreeAdjacency;

        if (iCntCoins > iThreshold) { // player wins with horizontal line
            return true;
        }
        return false;
    };

    this.verifyIfPlayerWinsWithVerticalLine = function(iRow, iCol, iCodePlayer, iThreshold) {
        var iCntCoins = 0,
            iOffset = -1;
        while (true) {
            if ((iRow + iOffset) > -1 && _aBoardMat[iRow + iOffset][iCol] === iCodePlayer) {
                iCntCoins++;
                iOffset--;
            } else {
                break;
            }
        }
        if (iCntCoins > iThreshold) { // player wins with vertical line
            return true;
        }
        return false;
    };

    this.verifyIfPlayerWinsWithDiagonalDxLine = function(iRow, iCol, iCodePlayer, iThreshold, oObjAdjacency) {
        var iCntCoins = 0,
            iOffset = 1,
            iFreeAdjacency = 0;
        while ((iRow + iOffset < BOARD_ROWS) && _aBoardMat[iRow + iOffset][iCol + iOffset] === iCodePlayer) { //check right
            iCntCoins++;
            iOffset++;
        }
        // check right free adjacency 
        while ((iCol + iOffset) > -1 && (iRow + iOffset < BOARD_ROWS) && _aBoardMat[iRow + iOffset][iCol + iOffset] === DISC_EMPTY) { // check right
            iOffset++;
            iFreeAdjacency++;

        }

        iOffset = -1;

        while ((iRow + iOffset) >= 0 && _aBoardMat[iRow + iOffset][iCol + iOffset] === iCodePlayer) { // check left
            iCntCoins++;
            iOffset--;
        }
        // check left free adjacency 
        while ((iRow + iOffset) >= 0 && (iCol + iOffset) >= 0 && _aBoardMat[iRow + iOffset][iCol + iOffset] === DISC_EMPTY) { // check left
            iOffset--;
            iFreeAdjacency++;
        }

        oObjAdjacency["_iNumFreeAdiacency"] = iFreeAdjacency;

        if (iCntCoins > iThreshold) { // player wins with diagonal DX line
            return true;
        }
        return false;
    };

    this.verifyIfPlayerWinsWithDiagonalSxLine = function(iRow, iCol, iCodePlayer, iThreshold, oObjAdjacency) {
        var iCntCoins = 0,
            iOffset = 1,
            iFreeAdjacency = 0;

        while ((iRow - iOffset) >= 0 && _aBoardMat[iRow - iOffset][iCol + iOffset] === iCodePlayer) { // check right
            iCntCoins++;
            iOffset++;
        }
        // check right free adjacency 
        while ((iRow - iOffset) >= 0 && (iCol + iOffset) < BOARD_COLS && _aBoardMat[iRow - iOffset][iCol + iOffset] === DISC_EMPTY) { // check right
            iFreeAdjacency++;
            iOffset++;
        }

        iOffset = 1;
        while ((iRow + iOffset) < BOARD_ROWS && _aBoardMat[iRow + iOffset][iCol - iOffset] === iCodePlayer) { // check left
            iCntCoins++;
            iOffset++;
        }
        // check left free adjacency 

        while ((iCol - iOffset) > -1 && (iRow + iOffset) < BOARD_ROWS && _aBoardMat[iRow + iOffset][iCol - iOffset] === DISC_EMPTY) { // check left
            iFreeAdjacency++;
            iOffset++;
        }

        oObjAdjacency["_iNumFreeAdiacency"] = iFreeAdjacency;

        if (iCntCoins > iThreshold) { // player wins with diagonal SX line
            return true;
        }
        return false;
    };

    this.verifyIfPlayerWins = function(iRow, iCol, iCodePlayer, iThreshold) {
        var oObjAdjacency = {};
        if (this.verifyIfPlayerWinsWithDiagonalDxLine(iRow, iCol, iCodePlayer, iThreshold, oObjAdjacency)) {
            return true;
        }
        if (this.verifyIfPlayerWinsWithDiagonalSxLine(iRow, iCol, iCodePlayer, iThreshold, oObjAdjacency)) {
            return true;
        }
        if (this.verifyIfPlayerWinsWithVerticalLine(iRow, iCol, iCodePlayer, iThreshold, oObjAdjacency)) {
            return true;
        }
        if (this.verifyIfPlayerWinsWithHorizontalLine(iRow, iCol, iCodePlayer, iThreshold, oObjAdjacency)) {
            return true;
        }
        return false;
    };

    // CHECK IF AI CAN WIN WITH NEXT DISC
    this.verifyProbablyPlayerColWinner = function(iCodePlayer, iThreshold) {
        var aCols = new Array();
        for (var r = 0; r < BOARD_ROWS; r++) {
            for (var c = 0; c < BOARD_COLS; c++) {
                var iCol = _aColStrategic[c];

                if (_aBoardMat[r][iCol] === DISC_EMPTY &&
                    (r === 0 || (_aBoardMat[r - 1][iCol] !== null &&
                        _aBoardMat[r - 1][iCol] !== DISC_EMPTY))) {
                    var oAdiacency = new Object;
                    oAdiacency["_iNumFreeAdiacency"] = 0;
                    if (this.verifyIfPlayerWinsWithDiagonalDxLine(r, iCol, iCodePlayer, iThreshold, oAdiacency)) {
                        if (oAdiacency["_iNumFreeAdiacency"] + iThreshold > 2) {
                            aCols.push(iCol);
                        }
                    }
                    oAdiacency["_iNumFreeAdiacency"] = 0;
                    if (this.verifyIfPlayerWinsWithDiagonalSxLine(r, iCol, iCodePlayer, iThreshold, oAdiacency)) {
                        if (oAdiacency["_iNumFreeAdiacency"] + iThreshold > 2) {
                            aCols.push(iCol);
                        }
                    }
                    oAdiacency["_iNumFreeAdiacency"] = 0;
                    if (this.verifyIfPlayerWinsWithHorizontalLine(r, iCol, iCodePlayer, iThreshold, oAdiacency)) {
                        if (oAdiacency["_iNumFreeAdiacency"] + iThreshold > 2) {
                            aCols.push(iCol);
                        }
                    }
                    if (iCodePlayer !== _iEnemyCodeCoin) {
                        if (this.verifyIfPlayerWinsWithVerticalLine(r, iCol, iCodePlayer, iThreshold)) {
                            aCols.push(iCol);
                        }
                    }
                }
            }
        }
        return aCols;
    };

    // CHECK IF AI CAN WIN THE MATCH
    this.verifyPlayerColWinner = function(iCodePlayer, iThreshold) {
        var aCols = new Array();
        for (var r = 0; r < BOARD_ROWS; r++) {
            for (var c = 0; c < BOARD_COLS; c++) {
                var iCol = _aColStrategic[c];
                if (_aBoardMat[r][iCol] === DISC_EMPTY &&
                    (r == 0 || (_aBoardMat[r - 1][iCol] !== null && _aBoardMat[r - 1][iCol] !== DISC_EMPTY))) {
                    if (this.verifyIfPlayerWins(r, iCol, iCodePlayer, iThreshold)) {
                        aCols.push(iCol);
                    }
                }
            }
        }
        return aCols;
    };

    this.setEnemyCode = function(iCode) {
        _iEnemyCodeCoin = iCode;
        if (iCode === DISC_RED) {
            _iAiCodeCoin = DISC_YELLOW;
        } else {
            _iAiCodeCoin = DISC_RED;
        }
    };

    this._getFreeRowFromCol = function(iCol) {
        for (var r = 0; r < BOARD_ROWS; r++) {
            if (_aBoardMat[r][iCol] === DISC_EMPTY) {
                return r;
            }
        }
        return null;
    };

    this.randomThrow = function() {
        //RANDOM THROW
        var iCntCol;
        var iTimes = 0;

        while (true) {
            iCntCol = (Math.floor(Math.random() * BOARD_COLS));

            if (_aBoardMat[(BOARD_ROWS - 1)][iCntCol] === DISC_EMPTY) {
                iTimes++;
                if (iTimes === 50) {
                    return iCntCol;
                } else {
                    var iRow = this._getFreeRowFromCol(iCntCol);
                    if ((iRow + 1 < BOARD_ROWS &&
                            (this.verifyIfPlayerWins(iRow + 1, iCntCol, _iEnemyCodeCoin, 2) === false &&
                                this.verifyIfPlayerWins(iRow + 1, iCntCol, _iAiCodeCoin, 2) === false) ||
                            iRow === (BOARD_ROWS - 1))) {
                        return iCntCol;
                    } else {
                        continue;
                    }
                }
            }
        }
    };

    this.analyseArrayCols = function(aCols) {
        if (!aCols || aCols.length === 0) {
            return [];
        }
        /* 
                        THIS FUNCTION CHECKS WHAT COLUMN INDEX IN aCols ARRAY IS REPEATED MOSTLY (iMaxCnt).
                        THIS VALUE IS PUSHED IN aFinalList ARRAY AND RETURNED BY THE FUNCTION. 
                        IF THERE ARE MULTIPLE COLUMN VALUES REPEATED THE SAME NUMBER OF TIMES, THEY ARE ADDED TO 
                        aFinalList ARRAY.
		*/
        var i;
        var aRetList = new Array();
        for (i = 0; i < aCols.length; i++) {
            var bFound = false;
            for (var k = 0; k < aRetList; k++) {
                if (aRetList[k].iValue === aCols[i]) {
                    aRetList[k].iCnt++;
                    bFound = true;
                }
            }
            if (bFound === false) {
                aRetList.push(new Object({
                    iValue: aCols[i],
                    iCnt: 1
                }));
            }
        }

        var iMaxCnt = aRetList[0].iCnt;
        for (i = 1; i < aRetList.length; i++) {
            if (iMaxCnt < aRetList[i].iCnt) {
                iMaxCnt = aRetList[i].iCnt;
            }
        }

        var aFinalList = new Array();
        for (i = 0; i < aRetList.length; i++) {
            if (iMaxCnt === aRetList[i].iCnt) {
                aFinalList.push(aRetList[i].iValue);
            }
        }

        return aFinalList;
    };

    this.chooseColFromList = function(aList) {
        for (var i = 0; i < aList.length; i++) {
            var iRow = this._getFreeRowFromCol(aList[i]);
            if (iRow + 1 < BOARD_ROWS &&
                (this.verifyIfPlayerWins(iRow + 1, aList[i], _iEnemyCodeCoin, 2) === false &&
                    this.verifyIfPlayerWins(iRow + 1, aList[i], _iAiCodeCoin, 2) === false)) {
                return aList[i];
            }
        }
        return null;
    };

    this.strategicThrow = function() {
        // NOTE:
        //    -> STRATEGIG THROW ANALYSIS:
        //       1. CREATE A LIST OF FREE COLUMNS WHERE IS STILL POSSIBLE THROW A DISC
        //       2. DELETE FROM THIS ARRAY ALL THE COLUMNS WHERE, AFTER AI THROW, PLAYER COULD WIN
        //       3. DELETE FROM THIS ARRAY ALL THE COLUMNS WHERE, AFTER AI THROW,ARE GENERATED WINNING COMBOS THAT CAN BE BLOCKED BY THE PLAYER
        //       4. CHECK IF AI CAN PLACE A ROW OF 3 DISC FREE IN BOTH SIDES
        //       5. CHECK IF IS POSSIBLE TO GENERATE A SEQUENCE OF 3 VERTICAL DISCS
        //       6. CHECK IF IS POSSIBLE TO GENERATE A SEQUENCE OF 2 VERTICAL DISCS
        //       7. CHECK IF IS POSSIBLE TO GENERATE A NEW COLUMN WITH AT LEAST 4 FREE POSITION VERTICALLY
        //       8. THROW THE DISC IN THE COLUMN PREVIOUSLY CHOOSEN BY THE PLAYER IF FREE
        //       9. CHOOSE A FREE COLUMN RANDOMLY

        var aAllThrow1 = this.verifyProbablyPlayerColWinner(_iAiCodeCoin, 0);
        var aAllThrow2 = this.verifyProbablyPlayerColWinner(_iAiCodeCoin, 1);
        var aAllThrow3 = this.verifyProbablyPlayerColWinner(_iAiCodeCoin, 2);
        var aAllThrow1_2 = this.verifyPlayerColWinner(_iAiCodeCoin, 0);
        var aAllThrow2_2 = this.verifyPlayerColWinner(_iAiCodeCoin, 1);
        var aListBestThrow1 = this.analyseArrayCols(aAllThrow1);
        var aListBestThrow2 = this.analyseArrayCols(aAllThrow2);
        var aListBestThrow3 = this.analyseArrayCols(aAllThrow3);
        var aListBestThrow1_2 = this.analyseArrayCols(aAllThrow1_2);
        var aListBestThrow2_2 = this.analyseArrayCols(aAllThrow2_2);

        var aAllThrowEnemy = this.verifyProbablyPlayerColWinner(_iEnemyCodeCoin, 1);
        var aListBestThrowEnemy = this.analyseArrayCols(aAllThrowEnemy);

        var aMaxiList = new Array();
        aMaxiList.push(aListBestThrow3);
        aMaxiList.push(aListBestThrow2);
        aMaxiList.push(aListBestThrowEnemy);
        aMaxiList.push(aListBestThrow1);

        for (var i = 0; i < aMaxiList.length; i++) {
            if (aMaxiList[i].length > 0) {
                var res = this.chooseColFromList(aMaxiList[i]);
                if (res !== null) {
                    return res;
                }
            }
        }

        return this.randomThrow();
    };

    this.throwCoin = function(aBoardMat) {
        _aBoardMat = aBoardMat;
        // CHECK IF AI CAN WIN WITH A DISC
        var aWinningCols = this.verifyPlayerColWinner(_iAiCodeCoin, 2);
        if (aWinningCols.length > 0) {
            s_oGame.dropDiscByCpu(aWinningCols[0]);
            return;
        }

        // CHECK IF AI MUST BLOCK ANY PLAYER SEQUENCE OF 3 DISCS
        var aFinalCols = this.verifyPlayerColWinner(_iEnemyCodeCoin, 2);
        if (aFinalCols.length > 0) {
            s_oGame.dropDiscByCpu(aFinalCols[0]);
            return;
        }


        // CHECK IF AI MUST BLOCK ANY PLAYER SEQUENCE OF 2 DISCS
        var aRet = this.analyzelinesOfTwoCoins(_iEnemyCodeCoin);
        if (aRet.length > 0) {
            s_oGame.dropDiscByCpu(aRet[0]);
            return;
        }

        s_oGame.dropDiscByCpu(this.strategicThrow());
    };

    this.analyzelinesOfTwoCoins = function(iCodeEnemy) {
        var aRet = new Array();

        for (var r = 0; r < BOARD_ROWS; r++) {
            for (var c = 0; c < BOARD_COLS; c++) {
                if (_aBoardMat[r][c] === DISC_EMPTY && (r === 0 || (_aBoardMat[r - 1][c] !== null &&
                        _aBoardMat[r - 1][c] !== DISC_EMPTY))) {
                    var iRetCol;
                    iRetCol = this.analyzeLinesOfTwoHorizontal(r, c, iCodeEnemy);

                    if (iRetCol !== null) {
                        var bFound = false;
                        for (var i = 0; i < aRet.length; i++) {
                            if (c === aRet[i]) {
                                bFound = true;
                            }
                        }
                        if (bFound === false) {
                            aRet.push(c);
                        }
                    }

                }
            }
        }

        return aRet;
    };

    this.analyzeLinesOfTwoHorizontal = function(r, c, iCodeEnemy) {
        //              [o][O][x][x][O][o]
        // CASE ANALYSYS     
        if (_aBoardMat[r][c + 1] === iCodeEnemy && _aBoardMat[r][c + 2] === iCodeEnemy &&
            _aBoardMat[r][c + 3] === DISC_EMPTY) {
            if (_aBoardMat[r][c - 1] === DISC_EMPTY &&
                (r === 0 ||
                    _aBoardMat[r - 1][c - 1] !== DISC_EMPTY)) {
                return c;
            }
            if (_aBoardMat[r][c + 4] === DISC_EMPTY &&
                (r === 0 ||
                    _aBoardMat[r - 1][c + 4] !== DISC_EMPTY)) {
                return (c + 3);
            }
        }
        //              [O][X][0][x][O]
        // CASE ANALYSYS		
        if (_aBoardMat[r][c + 1] === iCodeEnemy && _aBoardMat[r][c - 1] === iCodeEnemy) {
            if (_aBoardMat[r][c + 2] === DISC_EMPTY &&
                _aBoardMat[r][c - 2] === DISC_EMPTY) {
                if (r === 0) {
                    return c;
                } else {
                    if (_aBoardMat[r - 1][c + 2] !== DISC_EMPTY &&
                        (r === 0 ||
                            _aBoardMat[r - 1][c - 2] !== DISC_EMPTY)) {
                        return c;
                    }
                }
            }
        }
        return null;


    };

    this._init();
}