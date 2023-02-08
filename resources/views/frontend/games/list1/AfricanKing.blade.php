<html>

<head>

   
    <meta charset="UTF-8">
  	<base href="/games/AfricanKing/app/africanKing.1/"> 
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="robots" content="noindex, nofollow">
    <title>{{$game->title}}</title>
	 <script type="text/javascript" src="index.js?6fb2e03a5abed8994180"></script></head> 
	<script>

    if( !sessionStorage.getItem('sessionId') ){
        sessionStorage.setItem('sessionId', parseInt(Math.random() * 1000000));
    }

       
		var qstr='/?launcher=true&sfx_496475945=1616496911181&commonVersion=(build%2088)&game=254&userId=003403186056&wshost=&quality=high&lang=en&noframe=yes';	
		

	
	
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

         <script>var gameVersion = '(build 3 commit e1feb23ab3a186950e547139bca7651f893ea6a2)';
      (function(){var a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src","../../js/loader.js?r="+Math.random());"undefined"!==typeof a&&document.getElementsByTagName("head")[0].appendChild(a);})();
    </script>
    </body>
	
</html>
