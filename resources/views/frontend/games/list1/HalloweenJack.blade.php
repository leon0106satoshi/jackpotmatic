<!DOCTYPE html>
<html>
<head>
    <title>{{ $game->title }}</title>
    <meta charset="utf-8">
    <meta name="description" content="NetEnt Game">
	<meta name="author" content="NetEnt">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui">
      <style>
		html {
			background: #000;
		}
		* { margin: 0; padding: 0;}
		a {
		  color: #fff;
		}
		#netentPoweredBy {
		  position: fixed;
		  bottom: 0px;
		  text-align: center;
		  width: 100%;
		  height: 3vh;
		  color: #fff;
		  background: #333;
		  line-height: 3vh;
		  font-size: 2.5vh;
		}
      </style>
   </head>

<script>

    localStorage.clear();

    if( !sessionStorage.getItem('sessionId') ){
        sessionStorage.setItem('sessionId', parseInt(Math.random() * 1000000));
    }


var exitUrl='';
		if(document.location.href.split("api_exit=")[1]!=undefined){
		exitUrl=document.location.href.split("api_exit=")[1].split("&")[0];
		}
		addEventListener('message',function(ev){
	
if(ev.data=='CloseGame'){
var isFramed = false;
try {
	isFramed = window != window.top || document != top.document || self.location != top.location;
} catch (e) {
	isFramed = true;
}

if(isFramed ){
window.parent.postMessage('CloseGame',"*");	
}
document.location.href=exitUrl;	
}
	
	});
	
	
function ResizeHandler(){
	
var frm=document.getElementById('game');	
	
frm.style['height']=window.innerHeight+'px';	
	
}	
	
addEventListener('resize',ResizeHandler);	
addEventListener('orientationchange',ResizeHandler);	
	
	
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

<body onload="ResizeHandler();"  style="margin:0px;width:100%;background-color:black;overflow:hidden">



<iframe id='game' style="margin:0px;border:0px;width:100%;height:100vh;" src='/games/HalloweenJackNET/games/halloweenjack-client/game/halloweenjack-client.xhtml?launchType=iframe&iframeSandbox=allow-scripts%20allow-popups%20allow-popups-to-escape-sandbox%20allow-top-navigation%20allow-top-navigation-by-user-activation%20allow-same-origin%20allow-forms%20allow-pointer-lock&applicationType=browser&gameId=halloweenjack_not_mobile&server=/&lang=en&sessId=DEMO-9365314884-EUR&operatorId=netent&statisticEndpointURL=/&loadStarted=1611750384516&giOperatorConfig=%7B%22staticServer%22%3A%22/%2F%22%2C%22targetElement%22%3A%22netentgame%22%2C%22launchType%22%3A%22iframe%22%2C%22iframeSandbox%22%3A%22allow-scripts%20allow-popups%20allow-popups-to-escape-sandbox%20allow-top-navigation%20allow-top-navigation-by-user-activation%20allow-same-origin%20allow-forms%20allow-pointer-lock%22%2C%22applicationType%22%3A%22browser%22%2C%22gameId%22%3A%22halloweenjack_not_mobile%22%2C%22server%22%3A%22/%2F%22%2C%22lang%22%3A%22en%22%2C%22sessId%22%3A%22DEMO-9365314884XXXX%22%2C%22operatorId%22%3A%22netent%22%7D&casinourl=/&loadSeqNo=0' allowfullscreen>


</iframe>




</body>
<script rel="javascript" type="text/javascript" src="/games/{{ $game->name }}/device.js"></script>
<script rel="javascript" type="text/javascript" src="/games/{{ $game->name }}/addon.js"></script>

</html>
