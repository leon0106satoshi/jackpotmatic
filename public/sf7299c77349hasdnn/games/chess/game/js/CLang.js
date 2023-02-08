var TEXT_PRELOADER_CONTINUE = "START";
var TEXT_DRAW = "DRAW";
var TEXT_WINS = "({0} wins)";
var TEXT_CHECKMATE = "CHECKMATE!";
var TEXT_STALEMATE = "STALEMATE!"
var TEXT_THINKING = "THINKING";
var TEXT_ARE_SURE = "ARE YOU SURE?";

var TEXT_MODE = "CHOOSE GAME MODE";

var TEXT_BLACK = "BLACK";
var TEXT_WHITE = "WHITE";

var TEXT_PROMOTION = "SELECT THE PIECE YOU WANT TO PROMOTE YOUR PAWN INTO";
var TEXT_CHECK = "CHECK!";

var TEXT_CREDITS_DEVELOPED = "DEVELOPED BY";

var TEXT_SHARE_IMAGE = "200x200.jpg";
var TEXT_SHARE_TITLE = "Congratulations!";
var TEXT_SHARE_MSG1 = "You collected <strong>";
var TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!";
var TEXT_SHARE_SHARE1 = "My score is ";
var TEXT_SHARE_SHARE2 = " points! Can you do better?";


var CurrentLanguage = "ENG";

function updateLanguage(text) {

    switch (text) {
        case ("ENG"):
            CurrentLanguage = text;

            TEXT_PRELOADER_CONTINUE = "START";
            TEXT_DRAW = "DRAW";
            TEXT_WINS = "({0} wins)";
            TEXT_CHECKMATE = "CHECKMATE!";
            TEXT_STALEMATE = "STALEMATE!"
            TEXT_THINKING = "THINKING";
            TEXT_ARE_SURE = "ARE YOU SURE?";

            TEXT_MODE = "CHOOSE GAME MODE";

            TEXT_BLACK = "BLACK";
            TEXT_WHITE = "WHITE";

            TEXT_PROMOTION = "SELECT THE PIECE YOU WANT TO PROMOTE YOUR PAWN INTO";
            TEXT_CHECK = "CHECK!";

            TEXT_CREDITS_DEVELOPED = "Developed by";

            TEXT_SHARE_TITLE = "Congratulations!";
            TEXT_SHARE_MSG1 = "You collected <strong>";
            TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!";
            TEXT_SHARE_SHARE1 = "My score is ";
            TEXT_SHARE_SHARE2 = " points! Can you do better?";
            break;

        case ("RU"):
            CurrentLanguage = text;

            TEXT_PRELOADER_CONTINUE = "Старт";
            TEXT_DRAW = "Ничья";
            TEXT_WINS = "({0} побед)";
            TEXT_CHECKMATE = "Шаг и мат!";
            TEXT_STALEMATE = "Мат!"
            TEXT_THINKING = "Думает";
            TEXT_ARE_SURE = "Вы уверены?";

            TEXT_MODE = "Выберете режим игры";

            TEXT_BLACK = "Черный";
            TEXT_WHITE = "Белый";

            TEXT_PROMOTION = "Выберете зону куда вы желаете походить пешкой";
            TEXT_CHECK = "Шаг!";


            TEXT_CREDITS_DEVELOPED = "Разработано";

            TEXT_SHARE_TITLE = "Поздравляем!";
            TEXT_SHARE_MSG1 = "Вы собрали <strong>";
            TEXT_SHARE_MSG2 = " очков</strong>!<br><br>Поделитесь своим достижением с Вашимы друзьями!";
            TEXT_SHARE_SHARE1 = "Мой счет ";
            TEXT_SHARE_SHARE2 = " очков! Сможешь побить рекорд?";
            break;

        case ("GER"):
            CurrentLanguage = text;


            TEXT_CREDITS_DEVELOPED = "Entwickelt von";

            TEXT_SHARE_TITLE = "Gluckwunsche!";
            TEXT_SHARE_MSG1 = "Du hast gesammelt <strong>";
            TEXT_SHARE_MSG2 = " Punkte </strong>! <br> <br> Teile deine Punktzahl mit deinen Freunden!";
            TEXT_SHARE_SHARE1 = "Meine Punktzahl ist ";
            TEXT_SHARE_SHARE2 = " punkte! Kannst du es besser machen?";
            break;

        case ("ARAB"):
            CurrentLanguage = text;

            TEXT_PRELOADER_CONTINUE = "?????";
            TEXT_DRAW = "???";
            TEXT_WINS = "(???? {0})";
            TEXT_CHECKMATE = "?????? ??????????";
            TEXT_STALEMATE = "?????"
            TEXT_THINKING = "?????";
            TEXT_ARE_SURE = "?? ??? ??????";

            TEXT_MODE = "???? ???? ?????";

            TEXT_BLACK = "????";
            TEXT_WHITE = "????";

            TEXT_PROMOTION = "???? ????? ??? ???? ?? ???? ?????";
            TEXT_CHECK = "????";

            TEXT_CREDITS_DEVELOPED = "???? ??????";

            TEXT_SHARE_TITLE = "???????!";
            TEXT_SHARE_MSG1 = "??? ?????? <strong>";
            TEXT_SHARE_MSG2 = " ???? </ strong>! <br> <br> ???? ?????? ?? ???????!";
            TEXT_SHARE_SHARE1 = " ?????? ??";
            TEXT_SHARE_SHARE2 = " ????! ????? ?? ???? ?????";
            break;

        case ("POR"):
            CurrentLanguage = text;

            TEXT_PRELOADER_CONTINUE = "Comecar";
            TEXT_DRAW = "Desenhar";
            TEXT_WINS = "({0} ganha)";
            TEXT_CHECKMATE = "Passo e Matematica!";
            TEXT_STALEMATE = "Esteira!"
            TEXT_THINKING = "Pensa";
            TEXT_ARE_SURE = "Tem certeza?";

            TEXT_MODE = "Escolha um jogo de modo";

            TEXT_BLACK = "Preto";
            TEXT_WHITE = "Branco";

            TEXT_PROMOTION = "Escolha uma area onde voce quer ser um peao";
            TEXT_CHECK = "Passo!";


            TEXT_CREDITS_DEVELOPED = "Desenvolvido por";

            TEXT_SHARE_TITLE = "Parabens!";
            TEXT_SHARE_MSG1 = "Voce colecionou <strong>";
            TEXT_SHARE_MSG2 = " pontos </strong>! <br> <br> Compartilhe sua pontuacao com seus amigos!";
            TEXT_SHARE_SHARE1 = "Minha pontuacao e ";
            TEXT_SHARE_SHARE2 = " pontos! Voce pode fazer melhor?";
            break;

        case ("IT"):
            CurrentLanguage = text;

            TEXT_PRELOADER_CONTINUE = "inizio";
            TEXT_DRAW = "disegnare";
            TEXT_WINS = "({0} vince)";
            TEXT_CHECKMATE = "Step and Math!";
            TEXT_STALEMATE = "Tappetino!"
            TEXT_THINKING = "Pensa";
            TEXT_ARE_SURE = "Sei sicuro?";

            TEXT_MODE = "Scegli un gioco mode";

            TEXT_BLACK = "Nero";
            TEXT_WHITE = "Bianco";

            TEXT_PROMOTION = "Scegli un'area in cui vuoi essere un pedone";
            TEXT_CHECK = "Passo!";


            TEXT_CREDITS_DEVELOPED = "Sviluppato da";

            TEXT_SHARE_TITLE = "Complimenti!";
            TEXT_SHARE_MSG1 = "Hai raccolto <strong>";
            TEXT_SHARE_MSG2 = " punti </ strong>! <br> <br> Condividi il tuo punteggio con i tuoi amici!";
            TEXT_SHARE_SHARE1 = "Il mio punteggio e ";
            TEXT_SHARE_SHARE2 = "punti! Puoi fare di meglio?";
            break;

        case ("SP"):
            CurrentLanguage = text;

            TEXT_PRELOADER_CONTINUE = "Comenzar";
            TEXT_DRAW = "Dibujar";
            TEXT_WINS = "({0} gana)";
            TEXT_CHECKMATE = "Paso y Matematicas!";
            TEXT_STALEMATE = "Mat!"
            TEXT_THINKING = "Piensa";
            TEXT_ARE_SURE = "Estas seguro?";

            TEXT_MODE = "Elige un juego de modo";

            TEXT_BLACK = "Negro";
            TEXT_WHITE = "Blanco";

            TEXT_PROMOTION = "Elige un area donde quieras ser un peon";
            TEXT_CHECK = "Paso!";


            TEXT_CREDITS_DEVELOPED = "Desarrollado por";

            TEXT_SHARE_TITLE = "?Felicitaciones!";
            TEXT_SHARE_MSG1 = "Usted recolecto <strong>";
            TEXT_SHARE_MSG2 = " puntos </ strong>! <br> <br> ?Comparte tu puntuacion con tus amigos!";
            TEXT_SHARE_SHARE1 = "Mi puntaje es ";
            TEXT_SHARE_SHARE2 = " puntos! ?Puedes hacerlo mejor?";
            break;

        case ("FR"):
            CurrentLanguage = text;

            TEXT_PRELOADER_CONTINUE = "Debut";
            TEXT_DRAW = "Dessiner";
            TEXT_WINS = "({0} gagne)";
            TEXT_CHECKMATE = "Etape et Maths!";
            TEXT_STALEMATE = "Mat!"
            TEXT_THINKING = "Pense";
            TEXT_ARE_SURE = "Es-tu sur?";

            TEXT_MODE = "Choisissez un jeu d'mode";

            TEXT_BLACK = "Noir";
            TEXT_WHITE = "Blanc";

            TEXT_PROMOTION = "Choisissez une zone ou vous voulez etre un pion";
            TEXT_CHECK = "Etape!";


            TEXT_CREDITS_DEVELOPED = "Developpe par";

            TEXT_SHARE_TITLE = "Toutes nos felicitations!";
            TEXT_SHARE_MSG1 = "Vous avez collecte <strong>";
            TEXT_SHARE_MSG2 = " points </ strong>! <br> <br> Partagez votre score avec vos amis!";
            TEXT_SHARE_SHARE1 = "Mon score est ";
            TEXT_SHARE_SHARE2 = " points! Pouvez-vous faire mieux?";
            break;



    }
}