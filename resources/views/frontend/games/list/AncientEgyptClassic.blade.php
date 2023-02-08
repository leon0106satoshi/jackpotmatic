<!DOCTYPE html>
<html>
<head>
    <title>{{ $game->title }}</title>
    <meta id="metaToken" name="csrf-token" content="{{ csrf_token() }}">
    <meta charset="utf-8">
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui">
    <style>
        body,
        html {
            position: fixed;
        }
        .notification{
            background-color: red;
            position: absolute; 
            width: 100px;
            height: 100px;
            top: -100px; 
            right: 50%;
            background-color: blue; 
            color: red; 
            z-index:200;
        }
        .notification.onanimation {
            animation-name: notification;
            animation-duration: 3s;
        }
        #bonusinner
        {
        position:absolute;
        width: 800px;
        height: 600px;
        z-index:10000 !important;
        top:50%;
        left:50%;
        margin:-300px 0 0 -400px;
        overflow:hidden;
        background-image: url('/lobby/images/themes/euroslot/bonus.png');
        }
        #bonusamount
        {
        position: relative;
        top: 35%;
        transform: translateY(-50%);
        z-index:10000 !important;
        text-align: center;
        font-family: Arial Black;
        font-size: 32px;
        color: white;
        text-shadow: 2px 2px black;
        }

        @keyframes notification {
            0% {
                top:-100px;
            }
            50% {
                top:50%;
            }
            100% {
                top:-100px;
            }
        }
    </style>
    <script src="/cashier/js/jquery.min.js?v=2.0"></script>
    <script type="text/javascript" src="/cashier/js/jquery-ui.min.js"></script>
</head>

<script>

    if (!sessionStorage.getItem('sessionId')) {
        sessionStorage.setItem('sessionId', parseInt(Math.random() * 1000000));
    }
    sessionStorage.setItem('Curr', '{{auth()->user()->present()->shop->currency}}'); 
   

    var exitUrl = '';
    if (document.location.href.split("api_exit=")[1] != undefined) {
        exitUrl = document.location.href.split("api_exit=")[1].split("&")[0];
    }

    addEventListener('message', function (ev) {

        if (ev.data == 'CloseGame') {
            var isFramed = false;
            try {
                isFramed = window != window.top || document != top.document || self.location != top.location;
            } catch (e) {
                isFramed = true;
            }

            if (isFramed) {
                window.parent.postMessage('CloseGame', "*");
            }
            document.location.href = exitUrl;
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

<body style="margin:0px;width:100%;background-color:black;overflow:hidden">

<input type="hidden" id="_token" value="{{ csrf_token() }}" />
<!-- <div id="floatingNotificationArea" class="notification" style="">
    Bonus
</div> -->
<div id="bonusdiv" style="display:none;">
    <div id="bonusinner">
        <div id="bonusamount"></div>
    </div>
</div>
<iframe id='game' style="margin:0px;border:0px;width:100%;height:100vh;"
        src='/games/{{ $game->name }}/gs2c/html5Game.html?extGame=1&symbol=vs10egyptcls&gname=Sweet%20Bonanza%20Xmas&jurisdictionID=UK&lobbyUrl=https%3A%2F%2Fwww.socialtournaments.com&mgckey=stylename@generic~SESSION@09d71088-f53c-4c20-b376-f882fffd995c'
        allowfullscreen>


</iframe>

<script>
    if (screen.width <= 699) 
        var snd1 = "/lobby/sounds/themes/euroslot/bonus.mp3";
    else
        var snd1 = "/lobby/sounds/themes/euroslot/bonus.ogg";
    checkBalance();
    user_bonus = 0;
    el = document.getElementById('floatingNotificationArea');
    console.log('element', el);
    function checkBalance(){
        setTimeout(() => {
            $.ajax({
                type: "GET",
                url: '/profile/bonus',
                headers: {
                    "X-CSRF-TOKEN": $('#_token').val()
                },
                dataType: 'json',
                success: function(result) {
                    bonus = parseFloat(result.bonus);
                    console.log('bonus=' + bonus);
                    console.log('type=' + typeof(bonus));
                    // if(user_bonus > 0 && bonus == 0)
                    if(user_bonus != bonus){
                        showBonusMsg(bonus);
                        // el.classList.add('onanimation');
                        // setTimeout(() => {
                        //     el.classList.remove('onanimation');
                        // }, 4000);
                        // alert(user_bonus + "bonus is added to your cash");
                    }
                    user_bonus = bonus;
                    checkBalance();   
                }
            })
        }, 1000);
    }
    function showBonusMsg(bonusamount) {
        console.log('showBonusMsg is called');
        // callBack("bonuswin");
        if (navigator.platform.indexOf("Win") > -1) {
            //windows
            if (window.outerWidth < window.outerHeight) {
                //verticaly streched (wazdan)
                $("#bonusinner").css({
                    top: "75%"
                });
            }
        }
        $("#bonusamount").html("+" + bonusamount);
        $("#bonusdiv").fadeIn(),
            $("#bonusinner").effect(
                "bounce", {
                    times: 3,
                },
                1e3
            ),
            setTimeout(hideBonusMsg, 4e3);
        var e = new Audio(snd1);
        e.play();
    }
    function hideBonusMsg() {
        $("#bonusdiv").slideUp();
        $("#bonusamount").html("");
    }
</script>
</body>

