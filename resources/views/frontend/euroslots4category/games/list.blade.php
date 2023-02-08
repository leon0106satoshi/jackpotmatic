@extends('frontend.euroslots4category.layouts.app')

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
<!DOCTYPE html>
<script type="text/javascript">
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
<html  lang="en">
    <head>

    <meta name="description" content="@yield('description')">
    <meta name="keywords" content="@yield('keywords')" />
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('page-title') - {{ settings('app_name') }}</title>

   
    
    <link rel="stylesheet" type="text/css" href="/frontend/euroslots4category/css/toastr.min.css">
    <link rel="stylesheet" type="text/css" href="/frontend/euroslots4category/src/js_src/jackpot_toolbar/css/styles.css" />
    <link rel="stylesheet" type="text/css" href="/frontend/euroslots4category/css/style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500&family=Nova+Flat&display=swap" rel="stylesheet" type="text/css" href="/euro_slot/body/style.css">
    <script src="/frontend/euroslots4category/src/js/is.js"></script>
    <script src="/frontend/euroslots4category/js/toastr.min.js"></script>
    <script src="/frontend/euroslots4category/js/jquery-3.4.1.min.js"></script>
   
</head>


<body onClick="AhmetOnurSlmzoynat();" class="en" ng-app="app" ng-controller="gameCtrl" >
    
   <audio id="pl">
  <source src="/frontend/euroslots4category/mp3/slide.mp3" type="audio/mpeg">
</audio>
<script>
    function AhmetOnurSlmzoynat(){
var player= document.getElementById('pl');
player.play();}
</script>
    <div id="fullscreenhelper"></div>
  
<div id="rotate" /></div>
    <div id="jackpotsdiv" style="z-index:2000; height:6.5vh; pointer-events: none;">
        <div id="jackpot-bar">
            <div id="jackpot_winner">
                <div id="jackpot_winner_title"> NEW JACKPOT WINNER! </div>
                <div id="jackpot_winner_name"> NAME:</div>
                <div id="jackpot_winner_amount"> AMOUNT:</div>
            </div>
            <div id="jackpot1"></div>
            <div id="jackpot2"></div>
            <div id="jackpot3"></div>
            <script type="text/javascript" src="/frontend/euroslots4category/src/js_src/jackpot_toolbar/AmatJP.js"></script>
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
 
<section id="content">
    
    
    
    <header class="v-middle">
        
        <div class="v-middle">
               <ul onClick="click();" class="nav-ui" id="cat-menu" style="transition:0.3s;">
                   <li class="v-middle  ">
                    <a class="providers__link" href="my_games">
                       
                        <span class="providers__name">Top Games</span>
                    </a>
                </li>
                <li class="v-middle  ">
                    <a class="providers__link" href="/categories/novomatic">
                       
                        <span class="providers__name">Novomatic</span>
                    </a>
                </li>
                <li class="v-middle  ">
                    <a class="providers__link" href="/categories/pragmatic">
                       
                        <span class="providers__name">Pragmatic</span>
                    </a>
                </li>
                <li class="v-middle  ">
                    <a class="providers__link" href="/categories/gamomat">
                       
                        <span class="providers__name">Gamomat</span>
                    </a>
                </li>
                <li class="v-middle  ">
                    <a class="providers__link" href="/categories/Table Games">
                       
                        <span class="providers__name">Table Games</span>
                    </a>
                </li>
                <li class="v-middle  ">
                    <a class="providers__link" href="/merkur.php">
                       
                        <span class="providers__name">Merkur</span>
                    </a>
                </li>
               
            </ul>
        </div>
       
        
           </header>
            <span  class="logo" id="logo">
                 <img src="/frontend/euroslots4category/img/logo.png" alt="logo" class="logo">
                </span>
                
          
 

    <div class="row">
            
    
            <div class="slider" id="slider">
                    @php
                    $g_amount=count($games);
                     @endphp
                    @if ($games && $g_amount)
                    @foreach ($games as $key=>$game)
                   @if($key%8 == 0)
                <div class="box" id="box">
                    @endif
            <div class="game-item game-item--overflow ng-scope">
                <div class="game-item__block">
                    <img class="game-item__img" src="{{ $game->name ? '/frontend/euroslots4category/ico/' . $game->name . '.jpg' : '' }}" casino-lazy-src="{{ $game->name ? '/frontend/euroslots4category/ico/' . $game->name . '.jpg' : '' }}" alt="{{ $game->title }}" loading="true" style="opacity: 1;">
                
                </div>
                <div class="game-item__labels">
                    @if($game->label)
                    <div class="game-item__label game-item__label--hot ng-binding ng-scope">{{ mb_strtoupper($game->label) }}</div>
                    @endif
                    <div class="game-item__label game-item__label--bitcoin ng-scope"></div>
                </div>
                <div class="game-item__overlay ng-scope">
                    <div class="game-item__actions">
                        @if( isset(auth()->user()->username) )
                        <a href="{{ route('frontend.game.go', $game->name) }}?api_exit=/" class="button button-primary ng-scope ng-binding">
                            <img src="/frontend/euroslots4category/img/play_small.png" alt="">
                        </a>
                        @else
                        <a href="javascript:;" class="button button-primary ng-scope ng-binding" ng-click="openModal($event, '#login-modal')">@lang('app.login')</a>
                        @endif
                    </div>
                </div>
                <div class="game-item__panel">
                </div>
            </div>
            @if($key%8 ==7 || $key==$g_amount-1)
        </div>
        @endif
        @endforeach
        
    </div>
    @endif
    
    <img src="/frontend/euroslots4category/img/leftarrow.png" class="prev arrow-button" id="sol" alt="" onclick="arrowDecrease()">
    <img src="/frontend/euroslots4category/img/rightarrow.png" class="next arrow-button"  id="sag" alt="" onclick="arrowIncrease()">
    
      
        
      <footer>
        <div class="parent-page" id="parent-page">
            <div class="pagenation-div" id="">
              <div class="pagenation">
                <div class="trail" id="trail">
                    @php
                    $max = count($games)%8 == 0 ? count($games)/8 : (int)count($games)/8;
                    @endphp
                    @for($i = 0; $i < $max; $i++) <div class="{{ $i == 0 ? 'active' : '' }}" onclick="move({{$i}})">{{ $i+1 }}</div>
                    @endfor
                </div>
            </div>
        </div>
    </div>
        <div class="balancee" id="balancee">
         <span class="balanceValue">{{ number_format(auth()->user()->balance, 2,".","") }} </span>
       </div>
       
         <span id="username">{{ auth()->user()->username }} </span>
     
        <div class="auth-panel" id="auth-panel">
            
         <!--   <a href="#" class="auth-button" style="left: 250px;right: initial;" onclick="document.getElementById('pincodeModal').style.display='block';">pincode</a> -->
            <a href="{{ route('frontend.auth.logout') }}" class="auth-button">@lang('app.logout')</a>
        </div>
       <div id="basicclock"></div>
	<div id="tamekran" style='display:none'
	     onclick="myFunction()"   style="background-image: url('/frontend/euroslots4category/img/tap.png');">
	</div> 
        <!--       <div id="search_container">
            <div id="search_icon"></div>
            <div id="search_form">
                <div id="footer__item-search">
                    <span id="search-wrap">
                        <input type="text" placeholder="        Game Search" class="search">
                    </span>
                </div>
            </div>
        </div>  -->
        <div class="modal" id="pincodeModal" tabindex="-1" role="dialog" aria-labelledby="pincodeLabel" style="display: none; z-index: 10000;" aria-hidden="true">
        <div class="modal-dialog" id="pincodeModal1"  role="document" >
            <div class="modal-content" id="mobmodal" style=" margin-top: -520px; width:690px; border-radius: 10px;border: 1px solid #cf8d00;background: linear-gradient(180deg, #1e36bc 0%, #c92bbe 150%);">
                <div class="modal-header">
                    <h5 class="modal-title" id="pincodeLabel" style="font-size: 24px;">Pincode</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick="document.getElementById('pincodeModal').style.display='none';" style="font-size: 27px;color: white;opacity: 1; position: absolute; top:10px; right:20px;">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body" style="padding: 28px 28px 86px;">
                    <div class="modal__kassa-row-item">

                        <div class="modal__kassa-row-input">
                            <input class="form-control" type="text" placeholder="Enter the amount" id="inputPin" style="background: transparent; color: white; padding: 6px; display: inline-block; width: calc(100% - 139px); font-size: 20px; border-radius: 5px; height:45px;">
                        </div>
                        <div class="modal__kassa-row-btn">
                            <a href="javascript:;" class="btn auth-button" id="send" style=" top: 27px; margin-right: 57px; height: fit-content;">PAY</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <script>
        $('body').ready(function(){
            $('body').on('click', '#send', function(event){
            var pincode = $('#inputPin').val();
            $.ajax({
                url: "{{ route('frontend.profile.pincode') }}",
                type: "GET",
                data: {pincode : pincode},
                dataType: "json",
                success: function(data){
                    if( data.fail ){
                        toastr.error(data.error);
                    }
                    if( data.success ){
                        window.location.reload();
                    }
                }
            });
        });

        })
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': '<?= csrf_token() ?>',
            }
        });
             $(document).on('keyup', '.search', function() {
        var query = $(this).val().toLowerCase();
        doSearch(query);
    });

    function OnSearch(input) {
        var query = input.value.toLowerCase();
        doSearch(query);
    }

    function doSearch(query){
        $.getJSON('{{ route('frontend.game.search')  }}?category1={{ $category1 }}&q=' + query, function(data) {
            $('#game').html(data.data);
        });
    }

    setTimeout(function () {
        $('form#payment_form').submit();
    }, 5000);
            function myFunction() {
                var x = document.getElementById("tamekran");
                if (x.style.display === "block") {
                    
                } else {
                    x.style.display = "none";
                }
            }
        </script>
		 
        
    </footer>
   </div>
</section>


  

<script type="text/javascript" src="/frontend/euroslots4category/js/script.js"></script>
<script src="/frontend/euroslots4category/js/custom.js"></script>
<script>

$(document).on('keyup', '.search', function() {
        var query = $(this).val().toLowerCase();
        doSearch(query);
    });

    function OnSearch(input) {
        var query = input.value.toLowerCase();
        doSearch(query);
    }

    function doSearch(query){
        $.getJSON('{{ route('frontend.game.search')  }}?category1={{ $category1 }}&q=' + query, function(data) {
            $('#games').html(data.data);
        });
    }

     function preventBack() {
       // window.history.forward();
    }

    setTimeout("preventBack()", 0);
    window.onunload = function () {
        null
    };


    function moveRect() {
        if (window.history && window.history.pushState) {
            window.history.pushState('forward', null, 'https://jackpotmatic.net/game/ZodiacWheel1?api_exit=/');
            window.location.href = "https://jackpotmatic.net/game/ZodiacWheel1?api_exit=/";
        }
    }


    let socket = new WebSocket("wss://{{ config('app.hostname') }}:6788/shop={{ auth()->user()->shop_id }}");

    socket.onopen = function (e) {
        console.log("[open] Соединение установлено");
        console.log("Отправляем данные на сервер");
        socket.send("panic WS active {{ auth()->user()->shop_id }}");
    };

    socket.onmessage = function (event) {
        console.log(`[message] Данные получены с сервера: ${event.data}`);
        if (event.data === 'Panic!') {
            moveRect();
        }
    }

    socket.onclose = function (event) {
        if (event.wasClean) {
            console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
        } else {
            // например, сервер убил процесс или сеть недоступна
            // обычно в этом случае event.code 1006
            console.log('[close] Соединение прервано');
        }
    };

    socket.onerror = function (error) {
        console.log(`[error] ${error.message}`);
    };


</script>

<script>
    let fullscreen = document.querySelector("html");
    let button = document.querySelector("#tamekran");
    button.style.display = 'block';
    if((window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
        fullscreen?.requestFullscreen();
        button.style.display = 'none';
    } else {
        button.style.display = 'block';
    }
    console.log('adding exitHandler');
    document.addEventListener('fullscreenchange', exitHandler, false);

    button.addEventListener("click", () => {
        button.style.display = 'none';
        if (!document.fullscreenElement) {
            fullscreen?.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });

    function exitHandler(){
        console.log('exitHandler');
        button.style.display = 'block';
        if((window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
            button.style.display = 'none';
        } else {
            button.style.display = 'block';
        }
    }
</script>
    
   	
   
    <script>
        $('body').ready(function(){

            $('body').on('click', '#send', function(event){
                var pincode = $('#inputPin').val();
                
                $.ajax({
                    url: "{{ route('frontend.profile.pincode') }}",
                    type: "GET",
                    data: {pincode : pincode},
                    dataType: "json",
                    success: function(data){
                        if( data.fail ){
                            toastr.error(data.error);
                        }
                        if( data.success ){
                            window.location.reload();
                        }
                    }
                });
            });

        })
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': '<?= csrf_token() ?>',
            }
        });
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
@stop

    
@section('scripts')
@stop