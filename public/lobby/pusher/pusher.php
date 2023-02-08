
var pusherDir = '/pusher/';
var baseDir = 'https://'+document.location.hostname;


function inIframe() {
	try {
		return window.self !== window.top;
	} catch (e) {
		return true;
	}
}

function hideWheelBonusMsg() {
	//console.log('hide wheel bonus msg');
	$("#wheelbonus").slideUp();
	$("#wheelbonus").html("");
}
	
CPusher = function () {
	pushersocket = null;	
	var snd1 = pusherDir + "sounds/bonus.mp3";
	var snd2 = pusherDir + "sounds/jackpotintro.mp3";
	
//	var snd1 = pusherDir + "sounds/bonus.ogg";
//	var snd2 = pusherDir + "sounds/jackpotintro.ogg";

	function CreateCSS() {
		var style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = '.bonusdiv { color: #F00; position:fixed; z-index:9999; display:none; top:50%; line-height:300px; left:50%; margin-left:-200px; text-align:center; margin-top:-150px; width:400px; height:300px; font-size:25px; font-weight:bold; font-family:"Arial";background-image:url("' + pusherDir + 'images/bonus.png");color:white;} '+
		'.jackpotdiv { color: #F00; position:absolute; z-index:9999; display:none; top:50%; line-height:300px; left:50%; margin-left:-200px; text-align:center; margin-top:-150px; width:400px; height:300px; font-size:25px; font-weight:bold; font-family:"Arial";background-image:url("'+ pusherDir + 'images/jackpot.png");color:white;}'+
		'.wheelbonus { position:absolute;z-index:9999999;color:white;width:100%;height:100%;margin:0;padding:0;left: 0;top: 0;}';
		document.getElementsByTagName('head')[0].appendChild(style);			
	}
	
	function showWheelBonusMsg(bonuspercent,bonusamount) {
		console.log('show wheel bonus msg');
		if(!$( "#wheelbonus" ).length)
		{			
			var iDiv = document.createElement('div');
			iDiv.id = 'wheelbonus';
			iDiv.className = 'wheelbonus';
			iDiv.innerHTML = '';
			if($( "#fullscreengame" ).length)
				document.getElementById('fullscreengame').appendChild(iDiv);
			else
			{				
				document.getElementsByTagName('body')[0].appendChild(iDiv);
			}
		}
		$("#wheelbonus").html('<iframe width="100%" height="100%" src="/src/wheeloffortune/iframe/?uhash='+sessionStorage.sessionValue2+'&bonuspercent='+bonuspercent+'&bonusamount='+bonusamount+'" frameborder="0" allowfullscreen=""></iframe>');
		$("#wheelbonus").fadeIn();	
		//setTimeout(hideBonusMsg, 4e3);
		//var e = new Audio(snd1);
		//e.play();
	}
	
	
	function showBonusMsg(bonusamount) {
		//console.log('show bonus msg');
		if(!$( "#bonusdiv" ).length)
		{			
			var iDiv = document.createElement('div');
			iDiv.id = 'bonusdiv';
			iDiv.className = 'bonusdiv';
			iDiv.innerHTML = '';
			if($( "#fullscreengame" ).length)
				document.getElementById('fullscreengame').appendChild(iDiv);
			else
			{				
				document.getElementsByTagName('body')[0].appendChild(iDiv);
			}
		}
				
		$("#bonusdiv").html(" + " + bonusamount);
		$("#bonusdiv").fadeIn(),		
		setTimeout(hideBonusMsg, 4e3);
		var e = new Audio(snd1);
		e.play();
	}
	function hideBonusMsg() {
		//console.log('hide bonus msg');
		$("#bonusdiv").slideUp();
		$("#bonusdiv").html("");
	}
	function showJackpotWin(e) {
		//console.log('show jp win');
		if(!$("#jackpotdiv").length)
		{			
			var iDiv = document.createElement('div');
			iDiv.id = 'jackpotdiv';
			iDiv.className = 'jackpotdiv';
			iDiv.innerHTML = '';
			if($( "#fullscreengame" ).length)
				document.getElementById('fullscreengame').appendChild(iDiv);
			else
			{				
				document.getElementsByTagName('body')[0].appendChild(iDiv);
			}
			
		}
				
		$("#jackpotdiv").html("" + e);
		$("#jackpotdiv").fadeIn(),
		 setTimeout(hideJackpotWin, 12000);
		var o = new Audio(snd2);
		o.play()
	}
	function hideJackpotWin() {
		//console.log('hide jp win');
		$("#jackpotdiv").slideUp();
		$("#jackpotdiv").html("");
	}
	
	function waitForLogin() {
		"" != sessionStorage.sessionValue2 ? a_connect() : setTimeout(waitForLogin, 3e3)
	}
	function a_reConnect() {
		a_connect()
	}

	function a_connect() {

		var e = "wss://s1-v2.fun1.club:" + sessionStorage.pusherPort + "/pusher";
		try {
			if (pushersocket == null) {
				pushersocket = new WebSocket(e),
				pushersocket.onopen = function () {
					pushersocket.send("A/u90," + sessionStorage.sessionValue2)
				},
				pushersocket.onmessage = function (e) {
					if ("00" == e.data && (window.location = "/browser/"), 0 === e.data.lastIndexOf("3", 0) && refreshGameCredit(e.data), 0 === e.data.lastIndexOf("4", 0), 0 === e.data.lastIndexOf("88", 0) && showBonusMsg(e.data.split(",")[1]), 0 === e.data.lastIndexOf("77", 0)) {
						var o = e.data.split(","),
						n = o[2];
						showJackpotWin(n)						
					}
					if(0===e.data.lastIndexOf("89",0)){
						showWheelBonusMsg(e.data.split(",")[1],e.data.split(",")[2]);
					}
					"11" == e.data && (window.location = baseDir + "/browser/")
					"12" == e.data && (window.location = baseDir + "/")
				},
				pushersocket.onclose = function () {
					setTimeout(a_reConnect, 3e3),
					pushersocket = null
				}
			}
		} catch (o) {
			message("Error")
		}
	}
	function message(e) {
		console.log(e + "</p>")
	}

	this.start = function()
	{
		CreateCSS();
		waitForLogin();
	}
	
	function checkGame(hash) {
		
		var data = {
			userhash: hash
		};
		$.ajax({
			url: "/api/shop/checkgame.php",
			type: "GET",
			data: data,
			dataType: "JSON",
			success: function (jsonStr) {
				console.log("gid: " + jsonStr);
				if ((jsonStr > 2000 && jsonStr < 4000) || jsonStr > 5000) {
					window.location.reload();
				}
				if (jsonStr > 10000) {
					//alert(123);
					window.location.reload();
				}
				if ((jsonStr > 1000 && jsonStr < 1112) || jsonStr == 1200) {

					window.location.reload();
				}
				
			// REFRESH CASINOLAND BOMBA CREDITS /
				if (jsonStr < 100) {
					upBombScore(hash);
				}
			// END REFRESH CASINOLAND BOMBA CREDITS
			
			
			
			}
		});
	}

	function refreshGameCredit(sdata) {		
		
		// GET HASH //
		var arr = sdata.split('|');
		// GET GAME ID //
		checkGame(arr[1]);		
		var gameobject = document.getElementById("game_content");
		if (gameobject != null) {
			try {
				refreshGameCredit();
			} catch (err) {
				//den fortose akoma to flash
				// console.log("Flash error : "+err);
			}
		} else {
			//console.log("game object not found");
		}
		//html5 netent
		try {
			postMessage(["reloadBalance", "0"], '*');
			
			// UPDATE NETENT HTML5 CREDITS // LOBBY 31 //
			var landgameiframe = document.getElementById("gameiframe");
			if (landgameiframe != null) {
				landgameiframe.contentWindow.postMessage(["reloadBalance", 0], '*');
			}	
					
		} catch (err) {}
		
		// UPDATE NETENT FLASH GAMES //  LOBBY 31
		var gameobject = document.getElementById("game_content");
		if (gameobject != null) {
				try {
					var flashMovie=getFlashMovieObject("gameChild");
					if(flashMovie==null)
						flashMovie = getFlashMovieObject("game_content");

					if(flashMovie!=null)
						flashMovie.reloadbalance();
			
			
				} catch (err) {
					//den fortose akoma to flash
					// console.log("Flash error : "+err);
				}
			} 
	}	
}

$(document).ready(function () {

	if(!inIframe())
	{
		var pu = new CPusher();
		pu.start();
	}
});

// FUNCTION BOMBA GAMES UPDATE CREDITS

function upBombScore(hash)
{
	
	var data = {
		userhash: hash
	};
	$.ajax({
		url: "/api/shop/usercredits.php",
		type: "GET",
		data: data,
		dataType: "JSON",
		success: function (msg) {
			// IF THIS GAME IS BOMBA REFRESH
			UpdateCredits(msg['score'])
		}
	})
}
