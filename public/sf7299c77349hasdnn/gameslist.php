
<!doctype html>
<html lang="en">

<head>
    <title>Fun Games</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="google" value="notranslate">
    <link rel="stylesheet" href="./src/flickity.css">
    <script src="./src/flickity.pkgd.min.js"></script>
    <script src="./src/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <link rel="icon" type="image/gif" href="./src/media/favicon.png">
        <link rel="stylesheet" href="./src/css/gameslist-style1.css">
</head>

<body>

    <video playsinline autoplay muted loop id="bgvid">
        <source src="./src/media/background2-style1.mp4" type="video/mp4">
      </video>

      <div class="iframesite">
        <button type="button" class="btn btn-lg btn-danger schliessen">Spiel verlassen</button>
        <iframe id="iframeModalWindow" height="100%" width="100%" src="" name="iframe_modal"></iframe>
      </div>
<div class="vertical-center">

    <div class="container spieltafel">

        <div class="row bewegung">
          <div class="col ">
            <div class="d-flex justify-content-center align-items-center ">
               <h2 class="focus-spielname">Tic Tac Toe</h2>
            </div>

            <div class="d-flex justify-content-center align-items-center">
                <img class="game-ico" src="./games/tictactoe/menu/icon.jpg">
            </div>

            <div class="d-flex justify-content-center align-items-center">
                <button class="btn btn-lg btn-primary spielen-button" data-toggle="modal" data-target="#myModal" type="button">Spiel Starten</button>
            </div>

          </div>
        </div>
    </div>

    <div class="clearfix"></div><br>
    <div  style="bottom:40px;">
        <div class="flickity-carousel" id="carousel" data-flickity='{ "autoPlay": 2000,
        "pauseAutoPlayOnHover": false,  "pageDots": true,"wrapAround": true ,"cellAlign": "left"}'>
            <div class="carousel-cell  radius">
                <div class="container">
                    <div class="carousel-caption" data-ordner="3Towers2">
                        <img class="img_center radius" src="./games/3Towers2/menu/icon.jpg" />
                        <h1>Funny beach</h1>
                    </div>
                </div>
            </div>
            <div class="carousel-cell  radius">
                <div class="container">
                    <div class="carousel-caption" data-ordner="2048Merge">
                        <img class="img_center radius" src="./games/2048Merge/menu/icon.jpg" />
                        <h1>2048 Merge</h1>
                    </div>
                </div>
            </div>
            <div class="carousel-cell  radius">
                <div class="container">
                    <div class="carousel-caption" data-ordner="alximiklab">
                        <img class="img_center radius" src="./games/alximiklab/menu/icon.jpg" />
                        <h1>Alchemy</h1>
                    </div>
                </div>
            </div>
            <div class="carousel-cell  radius">
                <div class="container">
                    <div class="carousel-caption" data-ordner="backgammon">
                        <img class="img_center radius" src="./games/backgammon/menu/icon.jpg" />
                        <h1>Backgammon</h1>
                    </div>
                </div>
            </div>
            <div class="carousel-cell  radius">
                <div class="container">
                    <div class="carousel-caption" data-ordner="cataroundworld">
                        <img class="img_center radius" src="./games/cataroundworld/menu/icon.jpg" />
                        <h1>Cat Traveler</h1>
                    </div>
                </div>
            </div>
            <div class="carousel-cell  radius">
                <div class="container">
                    <div class="carousel-caption" data-ordner="chess">
                        <img class="img_center radius" src="./games/chess/menu/icon.jpg" />
                        <h1>Cool chess</h1>
                    </div>
                </div>
            </div>
            <div class="carousel-cell  radius">
                <div class="container">
                    <div class="carousel-caption" data-ordner="civilization">
                        <img class="img_center radius" src="./games/civilization/menu/icon.jpg" />
                        <h1>Civilizationz</h1>
                    </div>
                </div>
            </div>
            <div class="carousel-cell  radius">
                <div class="container">
                    <div class="carousel-caption" data-ordner="cut-it">
                        <img class="img_center radius" src="./games/cut-it/menu/icon.jpg" />
                        <h1>Cutter</h1>
                    </div>
                </div>
            </div>
            <div class="carousel-cell  radius">
                <div class="container">
                    <div class="carousel-caption" data-ordner="domino">
                        <img class="img_center radius" src="./games/domino/menu/icon.jpg" />
                        <h1>Domino block</h1>
                    </div>
                </div>
            </div>
            <div class="carousel-cell  radius">
                <div class="container">
                    <div class="carousel-caption" data-ordner="dontcrossline">
                        <img class="img_center radius" src="./games/dontcrossline/menu/icon.jpg" />
                        <h1>Lines</h1>
                    </div>
                </div>
            </div>
            <div class="carousel-cell  radius">
                <div class="container">
                    <div class="carousel-caption" data-ordner="firework">
                        <img class="img_center radius" src="./games/firework/menu/icon.jpg" />
                        <h1>FireWorks</h1>
                    </div>
                </div>
            </div>
            <div class="carousel-cell  radius">
                <div class="container">
                    <div class="carousel-caption" data-ordner="get4">
                        <img class="img_center radius" src="./games/get4/menu/icon.jpg" />
                        <h1>Connect 4</h1>
                    </div>
                </div>
            </div>
            <div class="carousel-cell  radius">
                <div class="container">
                    <div class="carousel-caption" data-ordner="kniferain">
                        <img class="img_center radius" src="./games/kniferain/menu/icon.jpg" />
                        <h1>Knife Thrower</h1>
                    </div>
                </div>
            </div>
            <div class="carousel-cell  radius">
                <div class="container">
                    <div class="carousel-caption" data-ordner="ludo2">
                        <img class="img_center radius" src="./games/ludo2/menu/icon.jpg" />
                        <h1>Ludo Legend</h1>
                    </div>
                </div>
            </div>
            <div class="carousel-cell  radius">
                <div class="container">
                    <div class="carousel-caption" data-ordner="mahjong">
                        <img class="img_center radius" src="./games/mahjong/menu/icon.jpg" />
                        <h1>Mahjong</h1>
                    </div>
                </div>
            </div>
            <div class="carousel-cell  radius">
                <div class="container">
                    <div class="carousel-caption" data-ordner="mill">
                        <img class="img_center radius" src="./games/mill/menu/icon.jpg" />
                        <h1>Mill</h1>
                    </div>
                </div>
            </div>
            <div class="carousel-cell  radius">
                <div class="container">
                    <div class="carousel-caption" data-ordner="mysticrings">
                        <img class="img_center radius" src="./games/mysticrings/menu/icon.jpg" />
                        <h1>Magic rings</h1>
                    </div>
                </div>
            </div>
            <div class="carousel-cell  radius">
                <div class="container">
                    <div class="carousel-caption" data-ordner="ok">
                        <img class="img_center radius" src="./games/ok/menu/icon.jpg" />
                        <h1>OKEY</h1>
                    </div>
                </div>
            </div>
            <div class="carousel-cell  radius">
                <div class="container">
                    <div class="carousel-caption" data-ordner="onet-connect">
                        <img class="img_center radius" src="./games/onet-connect/menu/icon.jpg" />
                        <h1>Connect</h1>
                    </div>
                </div>
            </div>
            <div class="carousel-cell  radius">
                <div class="container">
                    <div class="carousel-caption" data-ordner="pirates">
                        <img class="img_center radius" src="./games/pirates/menu/icon.jpg" />
                        <h1>Pirates. Bubble battle</h1>
                    </div>
                </div>
            </div>
            <div class="carousel-cell  radius">
                <div class="container">
                    <div class="carousel-caption" data-ordner="Solitaire">
                        <img class="img_center radius" src="./games/Solitaire/menu/icon.jpg" />
                        <h1>Solitaire</h1>
                    </div>
                </div>
            </div>
            <div class="carousel-cell  radius">
                <div class="container">
                    <div class="carousel-caption" data-ordner="sudoku">
                        <img class="img_center radius" src="./games/sudoku/menu/icon.jpg" />
                        <h1>Sudoku</h1>
                    </div>
                </div>
            </div>
            <div class="carousel-cell  radius">
                <div class="container">
                    <div class="carousel-caption" data-ordner="superstacker">
                        <img class="img_center radius" src="./games/superstacker/menu/icon.jpg" />
                        <h1>Super Stacker</h1>
                    </div>
                </div>
            </div>
            <div class="carousel-cell  radius">
                <div class="container">
                    <div class="carousel-caption" data-ordner="TexasHoldem">
                        <img class="img_center radius" src="./games/TexasHoldem/menu/icon.jpg" />
                        <h1>Poker tournament</h1>
                    </div>
                </div>
            </div>
            <div class="carousel-cell  radius">
                <div class="container">
                    <div class="carousel-caption" data-ordner="tictactoe">
                        <img class="img_center radius" src="./games/tictactoe/menu/icon.jpg" />
                        <h1>Tic Tac Toe</h1>
                    </div>
                </div>
            </div>
            <div class="carousel-cell  radius">
                <div class="container">
                    <div class="carousel-caption" data-ordner="towermatch">
                        <img class="img_center radius" src="./games/towermatch/menu/icon.jpg" />
                        <h1>Towers</h1>
                    </div>
                </div>
            </div>
            <div class="carousel-cell  radius">
                <div class="container">
                    <div class="carousel-caption" data-ordner="uno">
                        <img class="img_center radius" src="./games/uno/menu/icon.jpg" />
                        <h1>UNO</h1>
                    </div>
                </div>
            </div>

        </div>
    </div>


        </div>

</body>
<script>


function waitSeconds(iMilliSeconds) {
    var counter= 0
        , start = new Date().getTime()
        , end = 0;
    while (counter < iMilliSeconds) {
        end = new Date().getTime();
        counter = end - start;
    }
}

//definieren von erstes Spiel
var spielordner="tictactoe";
var spielname="Tic Tac Toe";

var ausgewahltespiel=setInterval(function(){
    $( ".bewegung" ).hide(); 
   spielordner= $('.is-selected').find(".carousel-caption").data('ordner');
    $(".game-ico").attr("src", "./games/"+spielordner+"/menu/icon.jpg");
  
   spielname= $('.is-selected').find("h1").html();
    $(".focus-spielname").html(spielname);
    $( ".bewegung" ).fadeIn( "slow" );  
},2000);

$( "body" ).click(function() {
 
clearInterval(ausgewahltespiel);
});


$('.carousel-cell').on('click','.carousel-caption', function (evt) {
    $( ".bewegung" ).hide(); 
   //$( ".focus-spielname" ).hide( "fast" );
   spielordner = $(this).data('ordner');
   spielname=$(this).find("h1").html();
   $(".focus-spielname").html(spielname);
   
   //$( ".focus-spielname" ).fadeIn( "slow" );
   $(".game-ico").attr("src", "./games/"+spielordner+"/menu/icon.jpg");
   $( ".bewegung" ).fadeIn( "slow" );
   //alert(spielname);
   //alert(spielordner);
});


$( ".spielen-button" ).click(function() {
 
    $("#iframeModalWindow").attr("src", "./games/"+spielordner+"/game/");
    
    $(".iframesite").fadeIn("slow");
    $(".zumstart").hide();
});

$( ".schliessen" ).click(function() {
 $(".iframesite").fadeOut("slow");
 $("#iframeModalWindow").attr("src", "");
});


function spielzeitcheck() {
    //Spielzeit
var gametimer=120000;
    if (!!$.cookie('fungametime')){
     // have cookie
     gametimer=$.cookie('fungametime');
            if(gametimer != "unbegrenzt"){
               gametimer=gametimer*60*1000;
               setTimeout(zumstarthin, gametimer);
               //alert("timer startet");
                }

//keine Cookies               
}else{
                setTimeout(zumstarthin, gametimer);
                //alert(gametimer); 
                }
//alert(gametimer); 
}

function zumstarthin() {
 location.href = 'https:/jackpotmatic.com/sf7299c77349hasdnn/';
}

$( document ).ready(function() {  
    spielzeitcheck();
});


</script>
</html>