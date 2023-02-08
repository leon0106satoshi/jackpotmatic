

<!doctype html>
<html lang="en">

<head>
    <title>Starteite</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="google" value="notranslate">
    <script src="./src/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
<link rel="stylesheet" href="./src/css/countrySelect.css">
<script src="./src/js/countrySelect.js"></script>   
<link rel="icon" type="image/gif" href="./src/media/favicon.png">
<link rel="stylesheet" href="./src/css/style1.css"> 
</head>

<body id="terminal">

   
    <video playsinline autoplay muted loop id="bgvid">
        <source src="./src/media/background-style1.mp4" type="video/mp4">
    </video>

<div class="jumbotron vertical-center positionrelativ">

<div class="container header positionrelativ">
        <div class="row">
          <div class="col-1 d-flex justify-content-around">

          </div>
          <div class="col-10 d-flex justify-content-around">
           <h3 id="password-site" class="neonText">Internet und fun Games: 60 Minuten - 2 Euroe</h3>
          </div>
          <div class="col-1 d-flex justify-content-around">

          </div>
        </div>
    </div>

    <div class="container content">
        <div class="row pb-5">
            <div class="col d-flex justify-content-end">
              <a href="https://www.google.de/" class="neon-button-blau">Google</a>
            </div>
            <div class="col d-flex justify-content-center">
              <a href="https://www.youtube.com/" class="neon-button-blau">YouTube</a>
            </div>
            <div class="col d-flex justify-content-start">
              <a href="gameslist.php" class="neon-button-blau">Fun Games</a>
            </div>
        </div>
        <div class="row pt-5">
          <div class="col d-flex justify-content-end">
            <a href="https://www.wikipedia.de/" class="neon-button">Wikipedia</a>
          </div>
          <div class="col d-flex justify-content-center">
            <a href="https://www.google.de/search?q=wetter" class="neon-button">Wetter</a>
          </div>
          <div class="col d-flex justify-content-start">
            <a href="" class="neon-button">Information</a>
          </div>
        </div>

    </div>



    <div class="container positionrelativ">
        <div class="row">
          <div class="col-3 d-flex justify-content-around">

          </div>
          <div class="col-6 d-flex justify-content-around">

          </div>
          <div class="col-3 d-flex justify-content-around">

          <div class="btn-group dropup spracheposition">
            <button  class="btn dropdown-toggle country" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"  aria-expanded="false">Sprache</button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="index.php"><img src="./src/media/turkey.png" width="50px"></img> TUR</a></li>
            <li><a class="dropdown-item" href="index.php"><img src="./src/media/deutschland.png" width="50px"></img> DE</a></li>
            <li><a class="dropdown-item" href="index.php"><img src="./src/media/vereinigtes-konigreich.png" width="50px"></img> EN</a></li>
            <li><a class="dropdown-item" href="index.php"><img src="./src/media/frankreich.png" width="50px"></img> FR</a></li>
            </ul>
          </div>

          </div>
        </div>
 </div>




</div>






<script>
  


//wenn 3 klicks zu password bereich
$(document).ready(function() {

  if (!!$.cookie('sprachenoption')){ 
      var sprachenanzeigen=$.cookie('sprachenoption');
      if(sprachenanzeigen=="ja"){
        $( ".spracheposition" ).css("display","block");
      }else{
        $( ".spracheposition" ).css("display","none");
      } 
}else{
  $( ".spracheposition" ).css("display","block");
}




  //alert($.cookie('fungametime')); 

var clicks = 0;

$('#password-site').click(function(){
     clicks++;
if(clicks == 10){
    location.href = '/';
   }
  if(clicks==1) setTimeout(function(){ clicks=0; },3000);
});

});




</script>

  
</body>

</html>
