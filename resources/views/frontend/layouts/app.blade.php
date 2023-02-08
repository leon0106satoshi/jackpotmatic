<!DOCTYPE html>
<script type="text/javascript">
    sessionStorage.username = "866225";
    sessionStorage.cusername = "";
    sessionStorage.gamePort = "11445";
    sessionStorage.pusherPort = "11446";
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
<!--[if lte IE 8]>
<html class="ie ie8" lang="ru"><![endif]-->
<!--[if lte IE 9]>
<html class="ie ie9" lang="ru"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html class="ie9up" lang="en">
<!--<![endif]-->

<head>

    <meta name="description" content="@yield('description')">
    <meta name="keywords" content="@yield('keywords')" />
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('page-title') - {{ settings('app_name') }}</title>

    <!-- META TAGS -->
    {{--
    <link rel="shortcut icon" type="image/png" href="/assets/_new-style/images/favicon/spc.png">
    <link rel="icon" type="image/png" href="/assets/_new-style/images/favicon/spc.png">
    <link rel="apple-touch-icon" href="/assets/_new-style/images/favicon/spc-iphone.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/assets/_new-style/images/favicon/spc-ipad.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/assets/_new-style/images/favicon/spc-ipad2.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/assets/_new-style/images/favicon/spc-ipad3.png"> --}}

    

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="HandheldFriendly" content="true" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
    <meta name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no, minimal-ui">


    <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700&amp;subset=cyrillic,cyrillic-ext,latin-ext" rel="stylesheet">
    <script src="/frontend/euroslots/js/jquery-3.4.1.min.js"></script>
    
    <link rel="stylesheet" type="text/css" href="/frontend/lobyblack/css/bootstrap.min.css" />
    
    <script src="/frontend/lobyblack/js/popper.min.js"></script>
    <script src="/frontend/lobyblack/js/bootstrap.min.js"></script>
    

    <!-- DEFAULT CSS -->
    <link rel="stylesheet" type="text/css" href="/frontend/euroslots/css/toastr.min.css">
    <link rel="stylesheet" href="/back/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css">
    <!-- DEFAULT JS SCRIPTS -->
    <!--[if lt IE 9]>
    
    <![endif]-->
    
    <link rel="stylesheet" type="text/css" href="/frontend/lobyblack/src/js_src/jackpot_toolbar/css/styles.css" />

    <script src="/frontend/lobyblack/src/js/is.js"></script>
    <script src="/frontend/lobyblack/js/toastr.min.js"></script>
</head>


<body class="en" ng-app="app" ng-controller="gameCtrl" id="toggle" allowfullscreen>
    
   <script>
		if (document.fullscreenEnabled) {
			
			var btn = document.getElementById("toggle");
			
			btn.addEventListener("click", function (event) {
				
				if (!document.fullscreenElement) {
					document.documentElement.requestFullscreen();
				} 
				
			}, false);
			
			
			document.addEventListener("fullscreenchange", function (event) {
				
				console.log(event);
				
				
			});
			
			document.addEventListener("fullscreenerror", function (event) {
				
				console.log(event);
				
			});
		}
		</script>
 
    <div class="overlay"></div>
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
            <script type="text/javascript" src="/frontend/lobyblack/src/js_src/jackpot_toolbar/AmatJP.js"></script>
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

                    jp1.SetJPAmounts(String(Number("{{$jpgs[0]->balance}}").toFixed(2)).split('.').join(''));
                    jp2.SetJPAmounts(String(Number("{{$jpgs[1]->balance}}").toFixed(2)).split('.').join(''));
                    jp3.SetJPAmounts(String(Number("{{$jpgs[2]->balance}}").toFixed(2)).split('.').join(''));
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

    @yield('content')

    @include('frontend.partials.popups')
        

    <div class="modal" id="pincodeModal" tabindex="-1" role="dialog" aria-labelledby="pincodeLabel" style="display: none; z-index: 10000;" aria-hidden="true">
        <div class="modal-dialog" id="pincodeModal1"  role="document" >
            <div class="modal-content" id="mobmodal" style=" margin-top: 305px; border-radius: 10px;border: 1px solid #cf8d00;background: linear-gradient(180deg, #1e36bc 0%, #c92bbe 150%);">
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
 @yield('footer')
    
    {{-- DataTables --}}
    <script src="/back/bower_components/datatables.net/js/jquery.dataTables.min.js"></script>
    <script src="/back/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>
    {{-- Set CSRF token to each interaction --}}
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
			var nojp = ["21","33","36","37"];
			if(nojp.includes(sessionStorage.menuStyle) || (sessionStorage.menuStyle=="20" && (is.mobile()||is.tablet())) || (sessionStorage.menuStyle=="30" && is.mobile())){
			//if(sessionStorage.menuStyle=="21" || (sessionStorage.menuStyle=="20" && (is.mobile()||is.tablet())) || sessionStorage.menuStyle=="33" || (sessionStorage.menuStyle=="30" && is.mobile())){
				console.log("Mobile lobby");
				return;
			}
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
   
    <script>
        //Initialise lp config object
        var config = new LPConfig();
        //First parameter is the hero offer position, you can type "left", "right" or "center". the two colours are the H1 and H2 offer elements.
        config.heroOptions('left', ["#fff", "#fff"]);
        //Category to show in the Featured tab by default
        config.gameOptions('top', true);
    </script>
   @yield('scripts')
</body>

</html>