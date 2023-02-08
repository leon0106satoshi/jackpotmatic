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
   
}
@media (max-width: 412px)  {
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
   </head>

<script>

    if( !sessionStorage.getItem('sessionId') ){
        sessionStorage.setItem('sessionId', parseInt(Math.random() * 1000000));
    }

var exitUrl='';
		if(document.location.href.split("api_exit=")[1]!=undefined){
		exitUrl=document.location.href.split("api_exit=")[1].split("&")[0];
		}
addEventListener('message',function(ev){

if(ev.data=='CloseGame'){

document.location.href=exitUrl;
}

	});
</script>

<body style="margin:0px;width:100%;background-color:black;overflow:hidden">

<a target="_self" onclick="sessionStorage.exitGame = 'true';" href="{{config('app.url')}}categories/merkur">

                <div id="exitdiv" style="z-index:99999999; position:absolute;">
            X
        </div>


<iframe id='game' style="margin:0px;border:0px;width:100%;height:100vh;" src='/games/Merkur/{{ $game->name }}/gamestart.html?gameKey=adp_cashfruitsplus&gameMode=money&token=x9784d819ccd3de65f24b81f&locale=ru_RU&lang=ru&username=lolo&referrerUrl=&casino=whow-fm&sound=1' allowfullscreen>


</iframe>




</body>
</html>
