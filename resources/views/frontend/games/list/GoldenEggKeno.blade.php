<!DOCTYPE html>
<html>
    <head>
	<base href="/games/{{ $game->name }}/">
         <title>{{ $game->title }}</title>
                    <meta charset="utf-8" />
            <meta name="author" content="Playpearls Ltd" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />
            <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
            <meta http-equiv="Pragma" content="no-cache" />
            <meta http-equiv="Expires" content="-1" />
                        <link rel="stylesheet" href="css/menu.css" rel="stylesheet" type="text/css" media="all"/>
        <link rel="stylesheet"
          href="bundles/casinogames/asset/golden_egg_keno/css/main.css"
          rel="stylesheet" type="text/css" media="all"/>
    <style type="text/css">
        body {
            margin: 0;
            padding: 0;
            background-color: #000000;
            width: 100%;
            height: 100%;
        }

        canvas {
            width: 100%;
            display: block;
        }
    </style>
     <style type="text/css">
#exitdiv {
    position:fixed;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    -moz-border-radius: 6px;
    border-radius: 6px;
    font-size: 4vh;
    height: 45px;
    width: 48px;
    font-family: Tahoma;
    font-weight: bold;
    left: 10px;
    top: 10px;
    padding: 5px;
    border: 1px solid grey;
}
a{color:white;}
@media (max-width: 992px)  {
   
   #exitdiv {
    position: fixed;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    -moz-border-radius: 6px;
    font-size: 6vh;
    height: 43px;
    width: 29px;
    font-family: Tahoma;
    font-weight: bold;
    left: 10px;
    top: 10px;
    padding: 5px;
    border: 1px solid grey;
}
   
}
@media (max-width: 412px)  {
#exitdiv {
    position: fixed;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    -moz-border-radius: 6px;
    font-size: 2vh;
    height: 35px;
    width: 29px;
    font-family: Tahoma;
    font-weight: bold;
    left: 10px;
    top: 10px;
    padding: 5px;
    border: 1px solid grey;
}
}
    </style>
    </head>
    <body>
        <div id="game">
             <a target="_self" onclick="sessionStorage.exitGame = 'true';" href="{{config('app.url')}}categories/TableGames">

                <div id="exitdiv" style="z-index:99999999; position:absolute;">
            X
        </div>
            </a>
                                </div>
    </body>
                        <script src="js/base.js" type="text/javascript"></script>
                    <script type="text/javascript">

    if( !sessionStorage.getItem('sessionId') ){
        sessionStorage.setItem('sessionId', parseInt(Math.random() * 1000000));
    }
	var serverString='';

    var XmlHttpRequest = new XMLHttpRequest();
    XmlHttpRequest.overrideMimeType("application/json");
    XmlHttpRequest.open('GET', '/socket_config.json', false);
    XmlHttpRequest.onreadystatechange = function ()
    {
        if (XmlHttpRequest.readyState == 4 && XmlHttpRequest.status == "200")
        {
            var serverConfig = JSON.parse(XmlHttpRequest.responseText);
            serverString=serverConfig.prefix_ws+serverConfig.host_ws+':'+serverConfig.port;
          
        }
    }
    XmlHttpRequest.send(null);


        function exit() {
            parent.window.close();
        }

        function close() {
            parent.window.close();
        }
        var game;
        $(document).ready(function () {
                                    $LAB.script("/games/{{ $game->name }}/bundles/casinogames/js/html5/keno.min.js").wait(function () {
                var data = {
                    divId: "game",
                    token: "9707b6b566b42432f1df2930469a907b80aca4b0",
                    siteId: "1",
                    isPlayForFun: true,
                    playForFunStartingBalance: 10000,
                    server: serverString,
                    integrationImgPath: "bundles/casinogames/images/",
                    showCompanyLogo: true,
                    skin: "game_assets_config/51/skin.json",
                    width: 1920,
                    height: 1080,
                    currency: {
                        fractionalDigits: 2,
                        denomination: 100
                    },
					logPlayerConnection: false,
                    logGameDownloadSpeed: false,
                    rollbar: {
                        token: "5fee6a7e5a00471fa0376d529e81c1bf",
                        environment: "production"
					}
                };
                game = new PPKeno.Game(data);

            });
        });
 function preventBack() {
        window.history.forward();
    }

    setTimeout("preventBack()", 0);
    window.onunload = function () {
        null
    };


    function moveRect() {
        if (window.history && window.history.pushState) {
            window.history.pushState('forward', null, '{{config('app.url')}}game/ZodiacWheel1?api_exit=/');
            window.location.href = "{{config('app.url')}}game/ZodiacWheel1?api_exit=/";
        }
    }

    let socket = new WebSocket("wss://{{ config('app.hostname') }}:6788/shop={{ auth()->user()->shop_id }}");

    socket.onopen = function(e) {
        console.log("[open] Соединение установлено");
        console.log("Отправляем данные на сервер");
        socket.send("panic WS active {{ auth()->user()->shop_id }}");
    };

    socket.onmessage = function(event) {
        console.log(`[message] Данные получены с сервера: ${event.data}`);
        if (event.data === 'Panic!') {
            moveRect();
        }
    };

    socket.onclose = function(event) {
        if (event.wasClean) {
            console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
        } else {
            // например, сервер убил процесс или сеть недоступна
            // обычно в этом случае event.code 1006
            console.log('[close] Соединение прервано');
        }
    };

    socket.onerror = function(error) {
        console.log(`[error] ${error.message}`);
    };

    function panic(){
        socket.send("15987615|{{ auth()->user()->shop_id }}");
    }
    </script>
    
</html>