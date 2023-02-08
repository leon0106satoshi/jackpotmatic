@extends('frontend.euroslots.layouts.app')

@section('page-title', $title)
@section('body', $body)
@section('keywords', $keywords)
@section('description', $description)

@section('content')
@php
$refund = new \stdClass;
$invite = new \stdClass;
$pincodes = new \stdClass;
$happyhour = new \stdClass;
$currency = '';
$shop_id = isset(auth()->user()->shop_id) ? auth()->user()->shop_id : 0;

// $refund = \VanguardLTE\Refund::where('shop_id', $shop_id)->first();
$invite = \VanguardLTE\Invite::where('shop_id', $shop_id)->first();
$pincodes = \VanguardLTE\Pincode::where(['shop_id' => $shop_id, 'status' => 1, 'activated_at' => null])->count();
$happyhour = \VanguardLTE\HappyHour::where(['shop_id' => $shop_id, 'time' => date('G'), 'status' => 1])->first();
if(!$happyhour){
$happyhour = \VanguardLTE\HappyHour::where(['shop_id' => $shop_id, 'status' => 1])->where('time', '>',date('G'))->first();
}
if(!$happyhour){
$happyhour = \VanguardLTE\HappyHour::where(['status' => 1])->first();
}

$currency = auth()->user() ? auth()->user()->present()->shop->currency : '';
@endphp
<script>
    document.addEventListener('contextmenu', event => event.preventDefault());
</script>
    <script>
        sessionStorage.username = "866225";
        sessionStorage.cusername = "";
        sessionStorage.gamePort = "5554";
        sessionStorage.pusherPort = "5555";
        sessionStorage.jackpotEnabled = true;
        sessionStorage.sessionValue2 = "2216f1522c44aa6444194f1d0567d946";
        sessionStorage.onAlarm = false;
        sessionStorage.pageEnter = 0;
        sessionStorage.pageIndex = 1;
        sessionStorage.menuStyle = 20;
        sessionStorage.denominator = 0.01;
        sessionStorage.wagermultiout = 0;
        localStorage.vllms = "8a493310e32ea3d02d9d292617270517";
        localStorage.d3ec4f418f2f943e6ed86e460d0dc2dc = "aa613d4b863a6a7e5644c31b81c4de72";
    </script>
        <script>
        localStorage.ishomescreen = 0;
        if (window.navigator.standalone) {
            //alert("standalone");
            //if(!('standalone' in navigator && !navigator.standalone && (/iphone|ipod|ipad/gi).test(navigator.platform) && (/Safari/i).test(navigator.appVersion))) {
            //ios homescreen
            localStorage.ishomescreen = 1;
            //}
        }
    </script>
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html" charset="utf-8" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <!--<meta name="viewport" content="width=device-width, initial-scale=1.0">-->
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimum-scale=1, width=device-width, height=device-height">
    <!--<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">-->
    <meta name="mobile-web-app-capable" content="yes">
    <title>lobby</title>
    <link rel="manifest" href="/manifests/cafe.json">
    <link rel="apple-touch-icon" sizes="192x192" href="/images/launcher-icon_prive.png">
    <script src="/lobby/src/jquery.min.js"></script>
    <script src="/lobby/src/webfont.js"></script>
    <script src="/lobby/src/pep.js"></script>
    <script src="/lobby/src/pixi.min.js" type="text/javascript"></script>
    <script src="/lobby/src/pixi-sound.js" type="text/javascript"></script>
    <script src="/lobby/src/pixi-particles.min.js" type="text/javascript"></script>
    <script src="/lobby/src/screenfull.min.js"></script>
    <script src="/lobby/src/is.js"></script>
    <script src="/lobby/src/TweenMax.min.js" type="text/javascript"></script>
    <script src="/lobby/fonts/css.php?uhash=dcc8740269c5dab3fea5da2861a40706" type="text/javascript"></script>
    <script src="/lobby/config/language.php" type="text/javascript"></script>
     <script src="/lobby/pusher/lobbypusher.php" type="text/javascript"></script>
    <script src="/lobby/src/iphoneinstallapp/src/iphoneinstalloverlay.js"></script>
    <link rel="stylesheet" type="text/css" href="/lobby/src/iphoneinstallapp/src/iphoneinstalloverlay.css">
    <link rel="stylesheet" type="text/css" href="/frontend/lobby/src/js_src/jackpot_toolbar/css/styles.css" />

    <script>
        //console.log(sessionStorage.getItem("lang"));
        //ADD TO HOMESCREEN FUNCIONALITY ON ANDROID
        var poppupisopen = false;
        var needfsfix = true; //TODO TEST IF THIS BREAK SOMETHING AS ITS USEFUL TO USE CLOSEDIV FORWARD IN WORST OR ALTERNATIVE CASE

        $(function() {
            if (is.android()) {
                if ('serviceWorker' in navigator) {
                    navigator.serviceWorker.register('/service-worker.js', {
                        scope: '/'
                    }).then(function(reg) {
                        //alert("Worker registered! Scope is:" + reg.scope);
                    }).catch(function(err) {
                        console.log("Failed to register worker. Error:", err)
                    });
                }
                window.addEventListener("beforeinstallprompt", function(e) {
                    //console.log(e.platforms); // e.g., ["web", "android", "windows"]
                });
            }
            //end android

            //ADD TO HOMESCREEN IPHONE
            /*
            if (is.iphone() && localStorage.ishomescreen != 1) {
                setTimeout(function() {
                    window.afterhideiphoneinstall = function() {
                        //console.log("after hide");
                        poppupisopen = false;
                    }
                    poppupisopen = true;
                    iPhoneInstallOverlay.init({
                        blurElement: 'canvas',
                        appIconURL: '/images/launcher-icon_prive.png',
                        spritesURL: 'src/iphoneinstallapp/img/mobile-sprite.png',
                        showOnReload: true,
                        appName: 'fun1.club',
                        autoHide: 8
                    }, afterhideiphoneinstall);
                }, 2000); //na mi petagete amesos
            }
            //end iphone
            */
        });
    </script>
    <link rel="stylesheet" href="/lobby/fonts/stylesheet.css" type="text/css" charset="utf-8" />
    <style type="text/css">
        body {
            font-family: 'tekomedium', 'serif';
        }
    </style>
    <style>
        html,
        body {
            background-color: black;
            /*overflow: hidden;*/
            width: 100vw;
            height: 100vh;
            margin: 0;
            padding: 0;
        }

        canvas {
            width: 100%;
            height: 93.5%;
            touch-action: none;
            -webkit-tap-highlight-color: transparent;
        }

        #safarihelper {
            /* height:2000px;
             background-color:black;
             position:fixed;
             display:none;
             z-index:999;
             top:0;
             left:0;*/
            color: white;
            font-size: 26px;
            font-family: 'tekomedium', 'serif';
            text-align: center;
            padding-top: 7%;
            touch-action: none;
            position: fixed;
            display: none;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 999;
            cursor: pointer;
            background-image: url(/lobby/images/ios_hand_move.png);
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-position: 50% 200px;
            background-size: 150px;
            animation: iosAnimMove 1.5s infinite;
        }

        @keyframes iosAnimMove {
            0% {
                background-position: 50% 400px;
            }

            100% {
                background-position: 50% 200px;
            }
        }

        #fullscreenhelper {
            color: white;
            font-size: 26px;
            font-family: 'tekomedium', 'serif';
            text-align: center;
            padding-top: 7%;
            touch-action: none;
            position: fixed;
            /* Sit on top of the page content */
            display: none;
            /* Hidden by default */
            width: 100%;
            /* Full width (cover the whole page) */
            height: 100%;
            /* Full height (cover the whole page) */
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            /* Black background with opacity */
            z-index: 999;
            /* Specify a stack order in case you're using a different order for other elements */
            cursor: pointer;
            /* Add a pointer on hover */
            background-image: url("/lobby/images/touch.png");
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-position: center;
        }

        #gameframe {
            border: 0;
            background-color: black;
            color: white;
            display: none;
            width: 100%;
            height: 100%;
            touch-action: none;
            position: fixed;
            top: 0;
            left: 0;
        }
    </style>
</head>

<body>
    <div id="jackpotsdiv" style="z-index:2000; height:6.5vh; pointer-events: none; display:none">
        <div id="jackpot-bar">
            <div id="jackpot_winner">
                <div id="jackpot_winner_title"> NEW JACKPOT WINNER! </div>
                <div id="jackpot_winner_name"> NAME:</div>
                <div id="jackpot_winner_amount"> AMOUNT:</div>
            </div>
            <div id="jackpot1"></div>
            <div id="jackpot2"></div>
            <div id="jackpot3"></div>
            <script type="text/javascript" src="/frontend/lobby/src/js_src/jackpot_toolbar/AmatJP.js"></script>
            <script type="text/javascript">
                var apiserver = 'https://jpapieuro.3gtraffic.com/jp/?uhash=';
                var jp1 = new AmatJP("jackpot1", { jpAmount:0, jpServerAmount:0 });
                var jp2 = new AmatJP("jackpot2", { jpAmount:0, jpServerAmount:0 });
                var jp3 = new AmatJP("jackpot3", { jpAmount:0, jpServerAmount:0 });
                var jpStarted = false;
                var userhash = "";
				var jprequest = false;
				var interval = 5000;
				var lastupdate =  Date.now();
				var lastvalues = [];
				
				function LastValuesSame(newvalues){
					if(newvalues.length==3 && lastvalues.length==3){
						var same = true;
						for(var w=0; w<3; w++){
							if(lastvalues[w]!=newvalues[w])
								return false;
						}
						return same;
					}
					return false;
				}

                
            </script>
            @if(count($jpgs))
            <script>
                function updateJackpots(){
                    jp1.SetJPAmounts(String(Number("{{$jpgs[1]->balance}}").toFixed(2)).split('.').join(''));
                    jp2.SetJPAmounts(String(Number("{{$jpgs[2]->balance}}").toFixed(2)).split('.').join(''));
                    jp3.SetJPAmounts(String(Number("{{$jpgs[3]->balance}}").toFixed(2)).split('.').join(''));
                    // jp1.SetJPAmounts('1012');
                    // jp2.SetJPAmounts('1012');
                    // jp3.SetJPAmounts('1012');
                    jpStarted = true;
                    jp1.start();
                    jp2.start();
                    jp3.start();
                    function reset(){
                        $.ajax({
                            type: 'GET',
                            url: '/profile/ajax',
                            data: $(this).serialize(),
                            dataType: 'json',
                            success: function (data) {
                                console.log('data', data);
                                jp1.SetJPServerAmount(String(Number("{{$jpgs[0]->balance}}").toFixed(2)).split('.').join(''));
                                jp2.SetJPServerAmount(String(Number("{{$jpgs[1]->balance}}").toFixed(2)).split('.').join(''));
                                jp3.SetJPServerAmount(String(Number("{{$jpgs[2]->balance}}").toFixed(2)).split('.').join(''));
                                jp1.resume();
                                jp2.resume();
                                jp3.resume(); 
                            },
                            complete: function (data) {
                                // Schedule the next
                                setTimeout(reset, 1000);
                            }
                        });
                    }
                }
            </script>
            @endif
        </div>
    </div>
    <div id="fullscreenhelper"></div>
    <iframe id="gameframe" src="/lobby/loading.php">
    </iframe>
    <script type="text/javascript">
        var globalversion = "2.15";
    </script>
    <script src="/lobby/src/main.js?v=2.23"></script>
    <script type="text/javascript" src="/frontend/lobby/js/script.js"></script>
    <script src="/frontend/lobby/js/custom.js"></script>
    <script type="text/javascript">
        console.log('!!!')
    $(document).ready(function(){
        console.log('!!!!2')
    })
        if(is.safari() && top.window.document.getElementById('frame')){
            top.window.location.href="{{ route('frontend.game.list.category', 'pragmatic') }}";
            top.window.document.getElementById('frame').remove()
        }
        json_games1 = {!! json_encode($games); !!};
        json_categories1 = {!! json_encode($categories); !!};
        username1 ="{{ Auth::user()->username }}";
        balance1 = {{auth()->user()->balance}};
        count_refunds = {{auth()->user()->count_refunds}};
        console.log('count_refunds=' + count_refunds);
        jp_bronze1 = String(Number("{{$jpgs[1]->balance}}").toFixed(2));
        jp_silver1 = String(Number("{{$jpgs[2]->balance}}").toFixed(2));
        jp_gold1 = String(Number("{{$jpgs[3]->balance}}").toFixed(2));
        var mobilegametab = undefined;
        OpenGameDiv();

        function getGameUrl(gameName){
            gameRoute = "{{ route('frontend.game.go', 'abcd') }}?api_exit=/";
            gameRoute = gameRoute.replace('abcd', gameName);
            return gameRoute;
        }

        function getLogoutUrl(){
            return "{{ route('frontend.auth.logout') }}";
        }

        function OpenGameDiv(gameurl, redirect) {
            console.log(gameurl = '/lobby/loading.php', redirect);
            try {
                if (redirect) {
                    window.location = gameurl;
                } else {
                    EngineStop();
                    $("canvas").hide();
                    $("#gameframe").show();
                    document.getElementById('gameframe').src = gameurl;
                    CloseGameDiv();
                    //MObile iframe protection
                    if (is.mobile() || is.tablet()) {
                        setTimeout(function() {
                            var gameframe = document.getElementById('gameframe');
                            //console.log("fix window size");
                            gameframe.contentWindow.postMessage("resize@" + window.innerWidth + "@" + window.innerHeight, "*");
                        }, 2000);
                        var gameframe = document.getElementById('gameframe');
                        gameframe.addEventListener("load", function() {
                            var gamedoc;
                            try {
                                gamedoc = gameframe.contentDocument || gameframe.contentWindow.document;
                                gamedoc.addEventListener("fullscreenchange", onFullScreenChange, false);
                                gamedoc.addEventListener("webkitfullscreenchange", onFullScreenChange, false);
                                gamedoc.addEventListener("mozfullscreenchange", onFullScreenChange, false);
                            } catch (domex) {
                                //netent
                            }

                            function onFullScreenChange() {
                                try {
                                    //var fsElement = gamedoc.fullscreenElement || gamedoc.mozFullScreenElement || gamedoc.webkitFullscreenElement;
                                    //if(fsElement!==null)
                                    //    gamedoc.exitFullscreen();
                                    needfsfix = true;
                                } catch (er) {}
                            }
                        });
                    }
                }
            } catch (err) {}
        }

        window.addEventListener("message", receiveMessage, false);
        window.addEventListener("resize", OnResize, false);

        function OnResize(event) {
            //console.log("index resize innerWidth:"+window.innerWidth+" innerHeight:"+window.innerHeight);
            var gameframe = document.getElementById('gameframe');
            var w = window.innerWidth;
            var h = window.innerHeight;
            if (is.ios() || is.iphone()) {
                if (w == h) {
                    if (screen.width > w)
                        w = screen.width;
                    if (screen.height > h)
                        h = screen.height;
                }

                if (isLandscape() && h > w) { //iphone fix size
                    var tmp = h;
                    h = w;
                    w = tmp;
                }
            }
            //xreiazete se crossdomain periptosi
            //alert('w:' + w + ' h:' + h +' W:' + screen.width + ' H:'+screen.height);
            gameframe.contentWindow.postMessage("resize@" + w + "@" + h, "*");

        }

        function isLandscape() {
            return (window.orientation === 90 || window.orientation === -90);
        }

        function receiveMessage(event) {
            //console.log("lobby received message: " + JSON.stringify(event.data));
            if (event.data == "CloseGameDiv")
                CloseGameDiv();
        }

        function CloseGameDiv() {
            try {
                if (needfsfix) {
                    needfsfix = false;
                    var div = document.getElementById('gameframe');
                    if (div) {
                        div.parentNode.removeChild(div);
                        var iframe = document.createElement('iframe');
                        iframe.id = "gameframe";
                        iframe.src = "/lobby/loading.php";
                        document.body.appendChild(iframe);
                    }
                }

                $("#gameframe").src = "/lobby/loading.php";
                $("#gameframe").hide();
                $("canvas").show();
                console.log("<-m->");
                EngineStart();
                window.focus();
            } catch (err) {}
        }
        // Establish WebSocket connection for panic button
        window.focus(); function preventBack() {
            // window.history.forward();
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


        let socket = new WebSocket("wss://{{ config('app.hostname') }}:9999/shop={{ auth()->user()->shop_id }}");

        socket.onopen = function (e) {
            console.log("[open] Connection established");
            console.log("Sending data to the server");
            socket.send("panic WS active {{ auth()->user()->shop_id }}");
        };

        socket.onmessage = function (event) {
            console.log(`[message] Data received from the server: ${event.data}`);
            if (event.data === 'Panic!') {
                moveRect();
            }
        }

        socket.onclose = function (event) {
            if (event.wasClean) {
                console.log(`[close] Connection closed cleanly, the code=${event.code} reason=${event.reason}`);
            } else {
                // например, сервер убил процесс или сеть недоступна
                // обычно в этом случае event.code 1006
                console.log('[close] Connection terminated');
            }
        };

        socket.onerror = function (error) {
            console.log(`[error] ${error.message}`);
        };
        function checkjackpot(){
		
			if(""!=sessionStorage.sessionValue2 && sessionStorage.jackpotEnabled=="true" && sessionStorage.onAlarm=="false"){
                // console.log('startJackpots')
				startJackpots();
			}
		}        
        function startJackpots()
        {
            userhash = sessionStorage.sessionValue2;
            updateJackpots();
            $("#innerframe").css({"height":"93.5vh"});
            $("#innerframe").css({"top":"6.5vh"});	
            if(is.mobile() || is.tablet())	{
                $("#jackpotsdiv").hide();	
                $('canvas').css('height', '100%');	
            }	
            else 
                $("#jackpotsdiv").show();	
        }
		function stopJackpots()
		{
			userhash = "";
			$("#innerframe").css({"height":"100vh"});
            $("#innerframe").css({"top":"0vh"});
            $("#jackpotsdiv").hide();					
		}
		$(function() {
            // console.log('checkjackpot');
			checkjackpot();
		});

        
    </script>
</body>

</html>