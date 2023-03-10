<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
        <title>{{ $game->title }}</title>
        <base href="/games/GreatBookOfMagic/wazdan40-176-3/">


            <link type="text/css" rel="stylesheet" href="gbom/style.css">

       
    
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

var SID =  'IEqj6o1U4l9V/zr5iFuzwQuiA11bZbfIKHNNNtDN2r2ebxYVwSnC3MEnV6tajVMur6cQRrZ/QlPXmlgQESn4JOY8CQqySiUD+FlKfCUmkd+B3sucTLGV5YCB/E2loQCjUjsTUYRmS5O2FXPgfxa3J7X69YRBOCnxejCM6RJ5czpJTDLEJPbALtUm9KRqtytyH19p/jwKoFZODMJ7cXQ9RHsQJE5b753LED5deIaMuAoXl8rxJkd0AUuM+RTQ3vl6iRPD+rmuUhrJ7YOt3VRjhqLjyb1q+0AmdAG8ppw52M5z5KNq2ITm0SMOaiIwOzB0c++8Phtpz7Lp7BeU1jla9iEYpnnZHcRHrh+ASqJ15UIIrnd+GVCr1XBFScrg48cd8jMofhb7kosJwdNYvnwjIZ6m7U5L5cbwitQgsgOG1Xu/eU0oj4f8wk719JJCwO1atNZAj1rBf6zK3cTy6kba7Lc0xxe7SJut40poBouJcfNptATcf7GZxrQrRC1On9S8LBqXkEU6xmNIUwk0UsMPaqcKS0tUKZUULQXCVwBBC5FGy5PZFOzSektjEV8U0BvgMLM77PhLOpguvmmeR2Nz619JM+hd1SD5KHAt9PZV4JysweXf6fQR4rp/TJHnyhvBDHHOu3GGbaPczA55l+SFKhackj8+XYt/RONb/U9HrBXhVw0Xl/pagkD/Erpcf21ygCZ5W8B/mpK0G4miQh7y2QXMRHoOEYulzOErrXBUBFrG4voJPKdxAXFF4rL6s80ZTCKvgtFrzGwGPKrsHyj1TxN+dknLXzu6ZjTaOZjgmCcb7BVNZZnm7FLORSyCVfqKaLXJhr28P6x3/zk0NoCKB9a0wvjOdnVN1FpTwodTTcfL3RQ/C8dquPLLDeF1nEc/q3duR1WgqvLykvMXjAAHAm7nw4/i23dLXMQYW49DVyQbjiJjOqxi/z3nZFnMSkI+49k+a3Q8xFNU2WLhEQ4ZN2rLTXJQ0ULDsLItQDroAok=';

        function call(name) {
            if (typeof window[name] === 'undefined') {
                return false;
            }

            window[name]();

            return true;
        }

        window.addEventListener('message', function (msg) {
            if (msg.data.action === 'close') {
              //  call('EXTERNAL_notifyClose');
            }
        });

        function send(action) {
          //  window.parent.postMessage({action: action}, '*');
        }

            if( !sessionStorage.getItem('sessionId') ){
        sessionStorage.setItem('sessionId', parseInt(Math.random() * 1000000));
    }

function EXTERNAL_closeWindow(newUrl) {

                       // window.close();
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
    <script type="text/javascript" src="gbom/gbom.nocache.js?t=1590333766"></script>

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
