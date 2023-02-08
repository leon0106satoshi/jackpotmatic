window.onbeforeunload = function() {};
if (screen.width <= 699) {
    var snd1 = "casino/js_src/bonus/sounds/bonus.mp3";
    var snd2 = "casino/js_src/jackpot/sounds/jackpotintro.mp3";
} else {
    var snd1 = "casino/js_src/bonus/sounds/bonus.ogg";
    var snd2 = "casino/js_src/jackpot/sounds/jackpotintro.ogg";
}
var pushersocket = null;

function showWheelBonusMsg(bonuspercent, bonusamount) {
    callBack("bonuswin");
    $("#wheelbonusdiv").show();
    startwheel(bonuspercent, bonusamount);
}

function hideWheelBonusMsg() {
    //console.log("hideWheelBonusMsg");
    if (game !== undefined) {
        game.destroy();
        game = undefined;
    }
    $("#wheelbonusdiv").slideUp();
    setTimeout(function() {
        $("#wheelbonusinner").css({
            opacity: 0.01
        });
    }, 1000);
    focusGame();
}

function showBonusMsg(bonusamount) {
    callBack("bonuswin");
    if (navigator.platform.indexOf('Win') > -1) { //windows
        if (window.outerWidth < window.outerHeight) { //verticaly streched (wazdan)
            $("#bonusinner").css({
                'top': '75%'
            });
        }
    }
    $("#bonusamount").html("+" + bonusamount);
    $("#bonusdiv").fadeIn(),
        $("#bonusinner").effect("bounce", {
            times: 3
        }, 1e3),
        setTimeout(hideBonusMsg, 4e3);
    var e = new Audio(snd1);
    e.play();
}

function hideBonusMsg() {
    $("#bonusdiv").slideUp();
    $("#bonusamount").html("");
}

function showBonus2x(inamount) {
    var denom = 0.01;
    if (typeof sessionStorage.denominator !== 'undefined') {
        denom = parseFloat(sessionStorage.denominator);
    }
    var multi_out = 4;
    if (typeof sessionStorage.wagermultiout !== 'undefined') {
        multi_out = parseFloat(sessionStorage.wagermultiout);
    }
    var amount = parseFloat(inamount) * denom;
    var amount2 = amount * 2;
    var amount4 = amount * multi_out;
    var decimals = 0;
    if (denom == 0.01) {
        decimals = denom.toString().split(".")[1].length;
    }
    var samount = amount.toFixed(decimals);
    var samount2 = amount2.toFixed(decimals);
    var samount4 = amount4.toFixed(decimals);
    addSpaceListener();
    $("#bonus2xpay").html(samount);
    $("#bonus2xtitle").html(samount);
    $("#bonus2xget").html(samount2);
    $("#bonus2xout").html(samount4 + "+");
    $("#bonusdiv2x").fadeIn(),
        $("#bonusinner2x").effect("bounce", {
            times: 3
        }, 1e3);

    var e = new Audio(snd1);
    e.play();
}

function hideBonus2x() {
    $("#bonusdiv2x").slideUp();
    $("#bonus2xpay").html("");
    $("#bonus2xget").html("");
    $("#bonus2xout").html("");
    removeSpaceListener();
}

function showJackpotWin(e) {
    if (navigator.platform.indexOf('Win') > -1) { //windows
        if (window.outerWidth < window.outerHeight) { //verticaly streched (wazdan)
            $("#jpinner").css({
                'top': '75%'
            });
        }
    }
    $("#jpdiv").fadeIn(),
        $("#jpinner").effect("bounce", {
            times: 3
        }, 1e3),
        $("#jpwin").text(e),
        setTimeout(hideJackpotWin, 12000);
    var o = new Audio(snd2);
    o.play()
}

function hideJackpotWin() {
    $("#jpdiv").slideUp();
}

function waitForLogin() {
    "" != sessionStorage.sessionValue2 ? a_connect() : setTimeout(waitForLogin, 3e3)
}

function a_reConnect() {
    a_connect()
}

function a_connect() {
    var e = window['wss'] + "://" + window['pusher_host'] + ":" + sessionStorage.pusherPort + "/pusher";
    try {
        if (pushersocket == null) {
            pushersocket = new WebSocket(e),
                pushersocket.onopen = function() {
                    pushersocket.send("A/u90," + sessionStorage.sessionValue2)
                },
                pushersocket.onmessage = function(e) {
                    if ("00" == e.data && (document.getElementById("mainframe").src = "browser/"), 0 === e.data.lastIndexOf("3", 0) && refreshGameCredit(e.data), 0 === e.data.lastIndexOf("4", 0) && callBack(e.data.split(",")[1]), 0 === e.data.lastIndexOf("88", 0) && showBonusMsg(e.data.split(",")[1]), 0 === e.data.lastIndexOf("77", 0)) {
                        var o = e.data.split(","),
                            n = o[2];
                        showJackpotWin(n)
                    }
                    if ("11" == e.data) {
                        document.getElementById("mainframe").src = "browser/";
                    }
                    if ("12" == e.data) {
                        if (sessionStorage.username.toUpperCase().startsWith("TV_")) {
                            if (sessionStorage.username.toUpperCase().startsWith("TV_HORSE"))
                                document.getElementById("mainframe").src = "/racing/tv.php?userhash=" + sessionStorage.sessionValue2 + "&game=racinghorses";
                            if (sessionStorage.username.toUpperCase().startsWith("TV_DOGS"))
                                document.getElementById("mainframe").src = "/racing/tv.php?userhash=" + sessionStorage.sessionValue2 + "&game=racindogs";
                            if (sessionStorage.username.toUpperCase().startsWith("TV_ODDS_HORSES"))
                                document.getElementById("mainframe").src = "/racing/horses_odds.php?userhash=" + sessionStorage.sessionValue2;
                            if (sessionStorage.username.toUpperCase().startsWith("TV_ODDS_DOGS"))
                                document.getElementById("mainframe").src = "/racing/dogs_odds.php?userhash=" + sessionStorage.sessionValue2;
                        } else {
                            if (sessionStorage.tvjackpot !== undefined && sessionStorage.tvjackpot != "" && sessionStorage.username.startsWith("tvjackpot")) {
                                if (sessionStorage.tvjackpothtml5 !== undefined && sessionStorage.tvjackpothtml5 == 'true')
                                    document.getElementById("mainframe").src = "/jackpot-ds.php?uhash=" + sessionStorage.sessionValue2;
                                else
                                    document.getElementById("mainframe").src = "/tvjackpot/?userid=" + sessionStorage.tvjackpot;
                            } else
                                document.getElementById("mainframe").src = "src/innerframe.php";
                        }
                    }
                    if (0 === e.data.lastIndexOf("89", 0)) {
                        showWheelBonusMsg(e.data.split(",")[1], e.data.split(",")[2]);
                    }
                },
                pushersocket.onclose = function() {
                    setTimeout(a_reConnect, 3e3),
                        pushersocket = null
                }
        }
    } catch (o) {
        message("Error")
    }
}

function message(e) {
    console.log(e + "</p>")
}

function refreshSn() {
    var time = 900000; //15 lepta
    setTimeout(
        function() {
            $.ajax({
                url: '/src/refresh_session.php',
                cache: false,
                success: function(response) { /*console.log(response);*/ },
                complete: function() {
                    refreshSn();
                }
            });
        },
        time);
};
refreshSn();
$(function() {
    $(this).bind("contextmenu", function(e) {
        e.preventDefault();
    });
});

function refreshLobbyScore() {}

//var lastfocus = null;

function addSpaceListener() {
    setTimeout(
        function() {
            $('#bonusinner2x').focus();
        },
        100);

    $('#bonusinner2x').keydown(function(event) {
        if (event.which == 32) //space
        {
            hideBonus2x();
        }
    });
}

function removeSpaceListener() {
    $('#bonusinner2x').off("keydown");
    setTimeout(
        function() {
            focusGame();
        },
        100);
}

function focusGame() {
    var mainframe = document.getElementById('mainframe');
    var mainDoc = mainframe.contentDocument || mainframe.contentWindow.document;
    if (mainframe != null) {
        var innerframe = mainDoc.getElementById("innerframe");
        if (innerframe != null) {
            var game = innerframe.contentWindow.document.getElementById('container');
            if (game != null) {
                $(game).attr("tabindex", -1).focus();
            } else {
                game = innerframe.contentWindow.document.getElementById('game1');
                if (game != null) {
                    $(game).attr("tabindex", -1).focus();
                } else {
                    game = innerframe.contentWindow.document.getElementById('canvas');
                    if (game != null) {
                        $(game).attr("tabindex", -1).focus();
                    } else {
                        game = innerframe.contentWindow.document.getElementById('gameframe');
                        if (game != null) {
                            $(game).attr("tabindex", -1).focus();
                        }
                    }
                }
            }
        }
    }
}

$(function() {
    $('#bonusinner2x').click(function(e) {
        hideBonus2x();
    });
});

function checkGame(hash) {
    var data = {
        userhash: hash
    };
    $.ajax({
        url: "api/shop/checkgame.php",
        type: "GET",
        data: data,
        dataType: "JSON",
        success: function(jsonStr) {
            //console.log(jsonStr);
            if (jsonStr > 5 && jsonStr < 50) //bomba game
                updateBombaCredits(hash);

            if (jsonStr > 7100 && jsonStr < 8000) { //pragmatic
                console.log("pragmatic");
                var mainframe = document.getElementById('mainframe');
                var mainDoc = mainframe.contentDocument || mainframe.contentWindow.document;
                if (mainframe != null) {
                    var innerframe = mainDoc.getElementById("innerframe");
                    if (innerframe != null) {
                        try {
                            var innerDoc = innerframe.contentDocument || innerframe.contentWindow.document;
                            var gameframe = innerDoc.getElementById('gameframe');
                            if (gameframe != null) {
                                //NEW LOBBY games open in mainframe->innerframe->gameframe
                                gameframe.contentWindow.postMessage("updateBalance", '*');
                            }
                        } catch (err) {
                            // console.log("Flash error : "+err);
                        }
                    }
                }
            }

            if ((((jsonStr > 2000 && jsonStr < 4000) || jsonStr > 5000) && jsonStr < 6000) || (jsonStr > 7000 && jsonStr < 7100)) {
                /*
                location.reload();
                 */
                var mainframe = document.getElementById('mainframe');
                var mainDoc = mainframe.contentDocument || mainframe.contentWindow.document;
                if (mainframe != null) {
                    var innerframe = mainDoc.getElementById("innerframe");
                    if (innerframe != null) {
                        try {

                            var innerDoc = innerframe.contentDocument || innerframe.contentWindow.document;
                            var gameframe = innerDoc.getElementById('gameframe');
                            if (gameframe != null) {
                                //NEW LOBBY games open in mainframe->innerframe->gameframe
                                gameframe.contentWindow.location.reload();
                            } else {
                                //Other lobbies games open in the mainframe->innerframe						
                                innerframe.contentWindow.location.reload();
                            }
                        } catch (err) {
                            // console.log("Flash error : "+err);
                        }
                    }
                }
            }
        }
    });
}

function updateBombaCredits(hash) {

    var data = {
        userhash: hash
    };
    $.ajax({
        url: "api/shop/usercredits.php",
        type: "GET",
        data: data,
        dataType: "JSON",
        success: function(msg) {
            // IF THIS GAME IS BOMBA REFRESH
            if (msg['game'] < 100) {
                bomba = document.getElementById("frame");
                if (bomba != null)
                    bomba.contentWindow.UpdateCredits(msg['score']);

                //NEW
                var mainframe = document.getElementById('mainframe');
                var mainDoc = mainframe.contentDocument || mainframe.contentWindow.document;
                if (mainframe != null) {
                    var innerframe = mainDoc.getElementById("innerframe");
                    //console.log("mainframe found");
                    if (innerframe != null) {
                        //console.log("innerframe found");
                        try {
                            innerframe.contentWindow.UpdateCredits(msg['score']);
                        } catch (err) {}

                        var innerDoc = innerframe.contentDocument || innerframe.contentWindow.document;
                        //land lobby
                        try {
                            var landiframe = innerDoc.getElementsByClassName("game-frame")[0];
                            if (landiframe != null && landiframe != undefined) {
                                landiframe.contentWindow.UpdateCredits(msg['score']);
                            }
                        } catch (err) {}
                        //end land lobby

                        //NEW LOBBY
                        try {
                            var lobbyframe = innerDoc.getElementById("gameframe");
                            if (lobbyframe != null && lobbyframe != undefined) {
                                lobbyframe.contentWindow.UpdateCredits(msg['score']);
                            }
                        } catch (err) {}
                        //END NEW LOBBY
                    }
                }
                //END NEW
            }
        }
    })
}

function refreshGameCredit(sdata) {
    // GET HASH //
    var arr = sdata.split('|');
    if (arr.length == 5) {
        if (arr[4] == 2) {
            showBonus2x(arr[3]);
        }
    }
    // GET GAME ID //
    checkGame(arr[1]);

    var mainframe = document.getElementById('mainframe');
    var mainDoc = mainframe.contentDocument || mainframe.contentWindow.document;

    callBack('{"cmd":"credupd","data":"' + sdata + '"}');

    if (mainframe != null) {
        var innerframe = mainDoc.getElementById("innerframe");

        //console.log("mainframe found");

        if (innerframe != null) {
            //console.log("innerframe found");
            var innerDoc = innerframe.contentDocument || innerframe.contentWindow.document;
            var gameobject = innerDoc.getElementById("game_content");

            try { //for new lobby
                innerframe.contentWindow.postMessage("reloadBalance", '*');
            } catch (err) {}

            if (gameobject != null) {
                try {
                    innerframe.contentWindow.refreshGameCredit();
                } catch (err) {
                    //den fortose akoma to flash
                    // console.log("Flash error : "+err);
                }
            } else {
                //console.log("game object not found");
            }
            //html5 netent

            //land lobby // SAIMON
            try {
                var landiframe = innerDoc.getElementsByClassName("game-frame")[0];
                if (landiframe != null && landiframe != undefined) {
                    var landDoc = landiframe.contentDocument || landiframe.contentWindow.document;

                    var landgameiframe = landDoc.getElementById("gameiframe");
                    if (landgameiframe != null) {
                        landgameiframe.contentWindow.postMessage(["reloadBalance", 0], '*');
                    }

                }
            } catch (err) {}
            //end land lobby // SAIMON

            //NEW LOBBY
            try {
                var lobbyframe = innerDoc.getElementById("gameframe");
                if (lobbyframe != null && lobbyframe != undefined) {
                    //FLASH NETENT									
                    try {
                        lobbyframe.contentWindow.refreshGameCredit();
                    } catch (err) {}
                    var lobbyDoc = lobbyframe.contentDocument || lobbyframe.contentWindow.document;
                    var lobbygameiframe = lobbyDoc.getElementById("gameiframe");
                    if (lobbygameiframe != null) {
                        lobbygameiframe.contentWindow.postMessage(["reloadBalance", 0], '*');
                    }
                }
            } catch (err) {}
            //END NEW LOBBY

            var gameiframe = innerDoc.getElementById("gameiframe");
            if (gameiframe != null) {
                try {
                    gameiframe.contentWindow.postMessage(["reloadBalance", 0], '*');

                } catch (err) {}
            }
        }
    }
}

function callBack(msg) {
    if (typeof cscallback != 'undefined') {
        console.log("callback");
        cscallback.sendMessage(msg);
    }
}

var jprunning = false;

this.focusframe = function() {
    var mainframe = document.getElementById('mainframe');
    var mainDoc = mainframe.contentDocument || mainframe.contentWindow.document;
    if (mainframe != null) {
        var innerframe = mainDoc.getElementById("innerframe");
        if (innerframe != null) {
            innerframe.contentWindow.focus();
        }
    }
}


$(document).ready(function() {
    //console.log("a_connect");
    a_connect();
});