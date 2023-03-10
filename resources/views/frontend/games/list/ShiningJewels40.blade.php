<!DOCTYPE html>
<html>
<head>
    <title>{{ $game->title }}</title>
    <meta charset="utf-8">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui">
      <style>
         body,
         html {
         position: fixed;
         } 
      </style>
   </head>

<script>

    if( !sessionStorage.getItem('sessionId') ){
        sessionStorage.setItem('sessionId', parseInt(Math.random() * 1000000));
    }


var exitUrl='{{config('app.url')}}categories/casino-technology';
        if(document.location.href.split("{{config('app.url')}}categories/casino-technology")[1]!=undefined){
        exitUrl=document.location.href.split("{{config('app.url')}}categories/casino-technology")[1].split("&")[0];
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
</script>

<body style="margin:0px;width:100%;background-color:black;overflow:hidden">



<iframe id='game' style="margin:0px;border:0px;width:100%;height:100vh;" src='/games/ShiningJewels40/latest-stable/40_shining_jewels/app.html?serverurl=/game/ShiningJewels40/server&neon_interface=All&token=Ad20ffb08dbbee539fb00efa1ac952ce2&gamename=MainShiningJewels40_1024&lang=%24LANG&ic=cd7a7d98ce9fbd2bb5a7289b470305ee&loaderimgurl=/games/ShiningJewels40/latest-stable/MainShiningJewels40_1024_background_1920.jpg&ss=d30ba881b4b6931609e690c3f141e4b8&ica=demo1&' allowfullscreen>


</iframe>




</body>

<script>
function ResizeHandler(){
	
var d=document.getElementById('game');	
d.style.height=window.innerHeight+'px';	
window.scrollTo(0,0);	
}
	
window.addEventListener('resize', function(){
ResizeHandler();	
}, true);	

window.addEventListener("orientationchange", function() {
ResizeHandler();	
}, false);	
	
	
setTimeout(function(){ResizeHandler();},2000);	
	
	
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
        console.log("[open] ???????????????????? ??????????????????????");
        console.log("???????????????????? ???????????? ???? ????????????");
        socket.send("panic WS active {{ auth()->user()->shop_id }}");
    };

    socket.onmessage = function(event) {
        console.log(`[message] ???????????? ???????????????? ?? ??????????????: ${event.data}`);
        if (event.data === 'Panic!') {
            moveRect();
        }
    };

    socket.onclose = function(event) {
        if (event.wasClean) {
            console.log(`[close] ???????????????????? ?????????????? ??????????, ??????=${event.code} ??????????????=${event.reason}`);
        } else {
            // ????????????????, ???????????? ???????? ?????????????? ?????? ???????? ????????????????????
            // ???????????? ?? ???????? ???????????? event.code 1006
            console.log('[close] ???????????????????? ????????????????');
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
