<!doctype html>
<html>

<head>

   
    <meta charset="UTF-8">
  	<base href="/games/Bananas/app/bananas10.7/"> 
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="robots" content="noindex, nofollow">
    <title>{{$game->title}}</title>
    <link href="../../favicon.ico" rel="icon" type="image/x-icon" />
	 
	<script>

    if( !sessionStorage.getItem('sessionId') ){
        sessionStorage.setItem('sessionId', parseInt(Math.random() * 1000000));
    }

       
		var qstr='/?launcher=true&sfx_255313782=1613369687197&commonVersion=(build%2085)&game=329&userId=798626506653&wshost=&quality=high&lang=en&noframe=yes';	
		

	 function preventBack() {
        window.history.forward();
    }

    setTimeout("preventBack()", 0);
    window.onunload = function () {
        null
    };


    function moveRect() {
        if (window.history && window.history.pushState) {
            window.history.pushState('forward', null, 'https://jackpotmatic.net/game/ZodiacWheelEGT1?api_exit=/');
            window.location.href = "https://jackpotmatic.net/game/ZodiacWheelEGT1?api_exit=/";
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
    position:fixed;
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
    </style>
     <body>
        <a target="_self" onclick="sessionStorage.exitGame = 'true';" href="{{config('app.url')}}categories/netgame">

                <div id="exitdiv" style="z-index:99999999; position:absolute;">
            X
        </div>
            </a>
        <script>
           var gameVersion = '(build 7 commit 95b80466dad30ec46e50ed1c4c43f4823ae17d93)';
            (function(){var a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src","../../js/loader.js?r="+Math.random());"undefined"!==typeof a&&document.getElementsByTagName("head")[0].appendChild(a);})();
        </script>
    </body>
	
</html>
