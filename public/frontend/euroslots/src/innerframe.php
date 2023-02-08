<html>
<head><meta charset="utf-8" />
    <title>games</title>
    <link rel="stylesheet" type="text/css" href="/src/js_src/jackpot_toolbar/css/styles.php" />
    <script src="/src/js_src/jackpot_toolbar/jquery.min.js"></script>	 
    <script src="/src/js/is.js"></script>	 
</head>
<body oncontextmenu="return false;">
    <div id="jackpotsdiv" style="position:absolute; z-index:2000; height:6.5vh; pointer-events: none; display:none;" >
        <div id="jackpot-bar">
			<div id="jackpot_winner">
			<div id="jackpot_winner_title"> NEW JACKPOT WINNER! </div>
			<div id="jackpot_winner_name"> NAME:</div>
			<div id="jackpot_winner_amount"> AMOUNT:</div>
			</div>			
            <div id="jackpot1"></div>
            <div id="jackpot2"></div>
            <div id="jackpot3"></div>
            <script type="text/javascript" src="/src/js_src/jackpot_toolbar/AmatJP.js"></script>
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

                function updateJackpots()
                {
                    //console.log("api call...");
                    if(userhash=="")
                        return; //userhash not set
                    var apiurl = apiserver+userhash;
					
					if(!jprequest)
					{
						jprequest = true;
						$.ajax(apiurl, {
							success: function(data) {
								var ar_data = JSON.parse(data);

								if(!jpStarted)
								{
									jp1.SetJPAmounts(Math.floor(ar_data['level1']));
									jp2.SetJPAmounts(Math.floor(ar_data['level2']));
									jp3.SetJPAmounts(Math.floor(ar_data['level3']));
									jpStarted = true;
									jp1.start();
									jp2.start();
									jp3.start();
								}
								else
								{
									jp1.SetJPServerAmount(Math.floor(ar_data['level1']));
									jp2.SetJPServerAmount(Math.floor(ar_data['level2']));
									jp3.SetJPServerAmount(Math.floor(ar_data['level3']));
									jp1.resume();
									jp2.resume();
									jp3.resume();
								}

								if(!LastValuesSame([ar_data['level1'],ar_data['level2'],ar_data['level3']])){
									lastvalues = [ar_data['level1'],ar_data['level2'],ar_data['level3']];
									lastupdate = Date.now();
									//console.log("JP values changed");
									interval = 5000;
								}else{
									var dif = (Date.now() - lastupdate) / 1000;									
									if(dif>60)
										interval=10000;
									if(dif>180)
										interval=15000;									
									
									//console.log("JP values same for:"+dif+" New interval:"+interval);
								}
								
								if(ar_data['winner_name'])
								{
									if (!$('#jackpot_winner').is(":visible"))
									{
										var denom = 0.01;
										if (typeof sessionStorage.denominator !== 'undefined') {
											 denom = parseFloat(sessionStorage.denominator);
										}
										var amount = parseFloat(ar_data['winner_amount']) * denom;
										var decimals = denom.toString().split(".")[1].length;
										var samount = amount.toFixed(decimals);
										
										$("#jackpot_winner").fadeIn();	
										$("#jackpot_winner_name").text("NAME: " + ar_data['winner_name']);	
										$("#jackpot_winner_amount").text("AMOUNT: " + samount);	
									}
								}
								else
								{
									if ($('#jackpot_winner').is(":visible"))
									{
										$("#jackpot_winner").fadeOut();	
										$("#jackpot_winner_name").text("NAME: " );	
										$("#jackpot_winner_amount").text("AMOUNT: ");
									}
								}
																
								setTimeout(function () {								
									jprequest = false;
									updateJackpots();
								}, interval);

							},
							error: function() {
								setTimeout(function () {
									jprequest = false;
									updateJackpots();
								}, interval);
							}
						});
					}
				}
            </script>
        </div>
    </div>
<div id="gamesdiv">
    <iframe id="innerframe" src="/games/mobile/menu.php?"
            style="border: 0; position:fixed; top:0; left:0; right:0; bottom:0; width:100vw; height:100vh" allowfullscreen>
    </iframe>
</div>
</body>
    <script>		
        function checkjackpot(){
			var nojp = ["21","33","36","37"];
			if(nojp.includes(sessionStorage.menuStyle) || (sessionStorage.menuStyle=="20" && (is.mobile()||is.tablet())) || (sessionStorage.menuStyle=="30" && is.mobile())){
			//if(sessionStorage.menuStyle=="21" || (sessionStorage.menuStyle=="20" && (is.mobile()||is.tablet())) || sessionStorage.menuStyle=="33" || (sessionStorage.menuStyle=="30" && is.mobile())){
				console.log("Mobile lobby");
				return;
			}
			if(""!=sessionStorage.sessionValue2 && sessionStorage.jackpotEnabled=="true" && sessionStorage.onAlarm=="false"){
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
			checkjackpot();
		});
    </script>
	
</html>