
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
        <title>{{ $game->title }}</title>
        <base href="/games/HighwayToHellDeluxe/wazdan40-176-3/">
		<link href="/assets/css/styles.css" rel="stylesheet">
            <link type="text/css" rel="stylesheet" href="hthd/style.css">

            <script type="text/javascript">
        var globalResponsePar;
var globalSendPar;
var serverString='';
var XmlHttpRequest = new XMLHttpRequest();
XmlHttpRequest.overrideMimeType('application/json');
XmlHttpRequest.open('GET', '/socket_config.json', false);
XmlHttpRequest.onreadystatechange = function () {

if (XmlHttpRequest.readyState == 4 &&XmlHttpRequest.status == '200'){ 

var serverConfig = JSON.parse(XmlHttpRequest.responseText); 

serverString=serverConfig.prefix_ws+serverConfig.host_ws+':'+serverConfig.port; 

}
};

XmlHttpRequest.send(null);	

var SID =  '51lHhhMtv1n6/N8tGyAt+taZ1gBnPd7T9vmQdfAVRRpM63hRmZwMQ2u0z5zlAkPUsrTiTuxAqENrRG+8yjL1LA49KJMvNZiwAKhrv1MMY2vnqka7wHQ6IDTp6ai8DtjaX2pLhggAnUUQ0lxPsvfhuXdGJf6LFq/D9LK98zd/iP8JqUjNpdgcZ/ykMX99XL3vmXFDg7DTak0JlVCChyZcoKATJDgDSi13aqm8pqY7H0F8n0Pdj/TEG2hFva8okNrZFgiUkBbA55m2UuWQYleIZlYoaITppquOfq2SansO1924KrE2EWj4+XBZIzU/ORWLJmB2urgv5WYNZI+28YsbJzlB5bvgvwOF8Bs5TEfHVk0KCpi2+qWTHT23kAdflGbCoVZnBnZPQaf2r8aFIb6hGcFnLLPqh48pU1vFsTGU4tgHIHS+hXCM2BATkpGM7vJNHU+6dEPEhu/l/NhF8tZoqrbuJhNh6I7Z/ANUkz51172QKL/wSAEltMtavgVgd9MKWsawA95AEhwBVXZiP6BNxWaYlbB3h6hEF2FXbUHU+uVLNB+HzC2HK6LHK0EnWuJjl3M8Iw9UUCazoqfAdm15C9XPymzc3uV93hSkBgzGxzR3ySxzlC+VDJ2HX4/Zi+NvVUrdh3F8dhImmAIRD4X+qtdnx85HpVSmRh0sxUEHLGbD1nO1vl3Nmw8Sxm4wdGVc1jsrlDGEy4aGJGF2y4dOkM6Ne8iWsUu1AzDHvAwz++faJx0p6VFzcHaT6N//Oo4f+VEYTAPi1AZ5djJnAftNzdXjZGC3Iyiy6epdLaUQjGFqdssujAoXk8tF3cXsj10Omofq9OMEYL9MX+ka1vw+90Z0lmVlZ3ZGIzdg/J6e1fR21aYCNE1bQqoi4XYMqnHMZefi7DENrxLwYAiJDha00mUieS2rONEzIYSJOdvvc0jWW4RbHveRjPwUZ4GtxIwYjFvMGoL1jtDZnX2o7qqqv/4KO4YhxBzDBt+da00SYs4=';

        function call(name) {
            if (typeof window[name] === 'undefined') {
                return false;
            }

            window[name]();

            return true;
        }

        window.addEventListener('message', function (msg) {
            if (msg.data.action === 'close') {
               // call('EXTERNAL_notifyClose');
            }
        });

        function send(action) {
         //   window.parent.postMessage({action: action}, '*');
        }

            if( !sessionStorage.getItem('sessionId') ){
        sessionStorage.setItem('sessionId', parseInt(Math.random() * 1000000));
    }

function EXTERNAL_closeWindow(newUrl) {
        
            //            window.close();
                    }

        
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
    <script type="text/javascript" src="hthd/hthd.nocache.js?t=1590416845"></script>

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
   
}@media (max-width: 412px)  {
#exitdiv {
    position: fixed;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    -moz-border-radius: 6px;
    font-size: 2vh;
    height: 20px;
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
         <a target="_self" onclick="sessionStorage.exitGame = 'true';" href="{{config('app.url')}}categories/wazdan">

                <div id="exitdiv" style="z-index:99999999; position:absolute;">
            X
        </div>
            </a>
                        <div class="spinner" id="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    </body>

</html>
