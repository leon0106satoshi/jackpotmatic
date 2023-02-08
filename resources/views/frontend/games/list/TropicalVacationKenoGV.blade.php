
<!DOCTYPE html>

<html>

	<head>

	<base href="/games/{{ $game->name }}/">
         <title>{{ $game->title }}</title>

		<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />

		<meta name="apple-mobile-web-app-capable" content="yes" />

		<meta name="format-detection" content="telephone=no" />

		<meta name="viewport" content="width=device-width, initial-scale=1.0001, minimum-scale=1.0001, maximum-scale=1.0001, user-scalable=no" />

		

		<link rel="stylesheet" crossorigin="anonymous" href="/games/TropicalVacationKenoGV/keno/games/tropical_vacation/main.min.css?1583684696569" />

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

		<script type="text/javascript">var base = '/games/TropicalVacationKenoGV/keno/games/tropical_vacation/';</script>

		<script type="text/javascript" src="/games/TropicalVacationKenoGV/socket.io/socket.io.js?1583660520587"></script>

		<script type="text/javascript" src="/games/TropicalVacationKenoGV/keno/games/tropical_vacation/main.min.js?1583684696569"></script>

		

		<link rel="stylesheet" crossorigin="anonymous" href="/games/TropicalVacationKenoGV/connector/connector.css?1583660520587" />

		<script type="text/javascript" src="/games/TropicalVacationKenoGV/connector/connector.js?1583660520587"></script>
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
    height: 29px;
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
    height: 25px;
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

<a target="_self" onclick="sessionStorage.exitGame = 'true';" href="{{config('app.url')}}categories/Table Games">

                <div id="exitdiv" style="z-index:99999999; position:absolute;">
            X
        </div>
            </a>

<div id="game" data-engine="keno" data-game="tropical_vacation" data-version="2.0.0-20160520T162016"></div>


	</body>

</html>

