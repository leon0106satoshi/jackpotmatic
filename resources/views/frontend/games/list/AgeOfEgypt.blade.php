<!DOCTYPE html>
<html>
<head>
	<base href="/games/{{ $game->name }}/platform/">   
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="msapplication-tap-highlight" content="no"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
    <meta name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, target-densitydpi=device-dpi, user-scalable=no, viewport-fit=cover"
          id="meta-viewport">
     <title>{{ $game->title }}</title>
    <script>
        var startTime = new Date();
        	  
		var qstr='/?game=agoeg&preferedmode=real&session=';	
		
		if(document.location.href.split("#")[1]!=undefined){
		document.location.href=document.location.href.split("#")[0];	
		}

        var uparts=document.location.href.split("?");
		var exitUrl='';
		if(document.location.href.split("?")[1]==undefined){
		document.location.href=document.location.href+qstr;	
		}else if(document.location.href.split("?api_exit")[1]!=undefined){
			
		document.location.href=uparts[0]+qstr+'&'+uparts[1];	
		}
		var exitUrl='';
		if(document.location.href.split("api_exit=")[1]!=undefined){
		exitUrl=document.location.href.split("api_exit=")[1].split("&")[0];
		}

        
        
    </script>
    <link type="text/css" rel="stylesheet" href="css/normalize.css"/>
    <link type="text/css" rel="stylesheet" href="css/style.css"/>

    <script src="js/cookie.js" language="javascript"></script>
    <script src="js/gls_config.js" language="javascript"></script>
    <script type="text/javascript" src="js/gls.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
    <script type="text/javascript" src="js/viewportJs.js"></script>
    <script type="text/javascript" src="js/viewportCss.js"></script>
    <script type="text/javascript" src="js/lib/modernizr-animations.min.js"></script>
    <!--swipe-up already minified in npm registry, leading to errors during release profile compilation into script.js-->
    <!--<script type="text/javascript" src="js/swipe-up.js"></script>-->
    <script type="text/javascript" src="js/bootstrap.js"></script>
    <script type="text/javascript" src="js/chat-wrapper.js"></script>
    <script type="application/json" src="version.json"></script>
</head>
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

    </style>
<body style="background-color: #000;overflow:hidden;" class="noBranding" > 
    <a target="_self" onclick="sessionStorage.exitGame = 'true';" href="{{config('app.url')}}categories/playtech">

                <div id="exitdiv" style="z-index:99999999; position:absolute;">
            X
        </div>
            </a>
<div id="size-handler"></div>
<div id='app' style="background-color: #000;overflow:hidden;">
    <div class='scalable' id="viewport">
        <div id="size-reader"></div>
        <div id="wrapper" style="background-color: #000;overflow:hidden;"></div>
        <div id="system-place" style="display: none;"></div>
        <div id="modals"></div>
        <div id="tooltips" class="tooltipsWrapper"></div>
        <div id="overlays"></div>
        <div id="rotate"></div>
        <div id="split"></div>
        <div id="devTools"></div>
    </div>
</div>
<div id="hidden-content" class="hidden-content"></div>
<noscript>
    <div class="noscript">
        Your web browser must have JavaScript enabled in order for this application to display correctly.
    </div>
</noscript>
<script type="text/javascript">
	

	
	

                        bootPlatform();
       
	function CloseGame(){
		

document.location.href=exitUrl;	
var isFramed = false;
try {
	isFramed = window != window.top || document != top.document || self.location != top.location;
} catch (e) {
	isFramed = true;
}

if(isFramed ){
window.parent.postMessage('CloseGame',"{{config('app.url')}}categories/pragmatic");	
}	

	
	
		}
  
    if( !sessionStorage.getItem('sessionId') ){
        sessionStorage.setItem('sessionId', parseInt(Math.random() * 1000000));
    }

localStorage.setItem('SESSIONS_PLAYER', '{{config('app.url')}}categories/pragmatic');

addEventListener('message',function(ev){
	
if(ev.data=='CloseGame'){
document.location.href=exitUrl;	
var isFramed = false;
try {
	isFramed = window != window.top || document != top.document || self.location != top.location;
} catch (e) {
	isFramed = true;
}

if(isFramed ){
window.parent.postMessage('CloseGame',"{{config('app.url')}}categories/pragmatic");	
}	
}
	
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
<script type="text/javascript" src="platform/platform.nocache.js"></script>

</body>
</html>
