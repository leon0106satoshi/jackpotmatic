var game = undefined;
var wheel;
var canSpin;
var slices = 10;
var prizeText;
var percentText;
var wheelwin;
var betterluck;
var bonuswin = 0;
var bonuspercent = 0;
var wheeltype = "";
var closebonustimeout;

function startwheel(bpercent, bwin, sizepercent = "90") {
    bonuswin = bwin;
    bonuspercent = bpercent;
    //LOAD AJAX WHEEL TYPE HERE
    try {
        $.ajax({
            url: "/api/wheelbonus/?uhash=" + sessionStorage.sessionValue2,
            cache: false,
            success: function(response) {
                var arres = JSON.parse(response);
                if (arres['result'] == "success") {
                    wheeltype = arres["bonus_type"]; //"wheel1"; // wheel0,wheel1,wheel2				
                    startwheelgame(sizepercent);
                } else {
                    console.log("failed to check bonus");
                    hideWheelBonusMsg();
                }
            },
            complete: function() {},
            error: function() {
                console.log("ajax error");
            }
        });
    } catch (err) {
        console.log("wheel bonus js error");
        hideWheelBonusMsg();
    }
}

function startwheelgame(sizepercent) {
    game = new Phaser.Game(sizepercent, sizepercent, Phaser.AUTO, "wheelbonusinner", null, true);
    game.state.add("PlayGame", playGame);
    game.state.start("PlayGame");
    playIntro();
    setTimeout(function() {
        $("#wheelbonusinner").fadeTo(1000, 1);
    }, 3000);
    setTimeout(function() {
        playGame.prototype.spin();
    }, 8000);
}

function playAudio() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '/src/wheeloffortune/sounds/wheel.mp3');
    audioElement.setAttribute('autoplay', 'autoplay');
}

function playIntro() {
    var introElement = document.createElement('audio');
    introElement.setAttribute('src', '/src/wheeloffortune/sounds/intro.mp3');
    introElement.setAttribute('autoplay', 'autoplay');
}

var playGame = function() {};

playGame.prototype = {
    // function to be executed once the state preloads
    preload: function() {
        game.stage.disableVisibilityChange = true;
        // preloading graphic assets
        game.load.image("wheel", "/src/wheeloffortune/images/" + wheeltype + ".png");
        game.load.image("pin", "/src/wheeloffortune/images/spin.png");
        game.load.image("cicle", "/src/wheeloffortune/images/cicle.png");
        game.load.image("wheelwin", "/src/wheeloffortune/images/wheelwin.png");
        game.load.image("betterluck", "/src/wheeloffortune/images/betterluck.png");
        //console.log("preload");
    },
    // funtion to be executed when the state is created
    create: function() {
        game.stage.backgroundColor = "#ff0000";
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        wheel = game.add.sprite(game.width / 2, game.height / 2, "wheel");
        wheel.anchor.set(0.5);
        var pin = game.add.sprite(game.width / 2, game.height / 2, "pin");
        pin.anchor.set(0.5);
        var cicle = game.add.sprite(game.width / 2, game.height / 2, "cicle");
        cicle.anchor.set(0.5);

        wheelwin = game.add.sprite(game.width / 2, game.height / 2, "wheelwin");
        wheelwin.anchor.set(0.5);
        wheelwin.visible = false;

        betterluck = game.add.sprite(game.width / 2, game.height / 2, "betterluck");
        betterluck.anchor.set(0.5);
        betterluck.visible = false;

        game.input.onDown.add(this.spin, this);

        // adding the text field
        var style = {
            font: "70px Arial",
            fill: "#ffffff",
            align: "center"
        };
        var style1 = {
            font: "30px Arial",
            fill: "#ffff00",
            align: "center"
        };

        prizeText = game.add.text(game.width / 2, game.height / 1.9, "", style);
        prizeText.anchor.set(0.5);
        percentText = game.add.text(game.width / 2 - 140, game.height / 1.9, "", style1);
        percentText.anchor.set(0.5);
        canSpin = true;
    },

    spin() {
        if (canSpin) {
            canSpin = false;

            var step = (360 / slices);
            var wheelpool = {
                "wheel0": {
                    "0": [0, 5],
                    "15": [3, 8],
                    "20": [2, 7],
                    "30": [6],
                    "50": [1],
                    "100": [4],
                    "200": [9]
                },
                "wheel1": {
                    "10": [0, 5],
                    "15": [3, 8],
                    "20": [2, 7],
                    "30": [6],
                    "50": [1],
                    "100": [4],
                    "200": [9]
                },
                "wheel2": {
                    "5": [0, 5],
                    "10": [3, 8],
                    "20": [2, 7],
                    "50": [1],
                    "100": [6],
                    "250": [4],
                    "500": [9]
                }
            };
            var prizes = wheelpool[wheeltype];
            var key = "" + bonuspercent;
            var posarray = prizes[key];
            var pos = posarray[Math.floor((Math.random() * posarray.length))];
            var pos = slices - pos;
            var degrees = pos * step + Math.floor((Math.random() * 30)) - 15;
            //console.log("degrees:"+degrees);                
            playAudio();
            prizeText.text = "";
            percentText.text = "";
            // the wheel will spin round from 2 to 4 times. This is just coreography
            var rounds = game.rnd.between(2, 4);
            // animation tweeen for the spin: duration 3s, will rotate by (360 * rounds + degrees) degrees
            // the quadratic easing will simulate friction
            var spinTween = game.add.tween(wheel).to({
                angle: 360 * rounds + degrees
            }, 9000, Phaser.Easing.Quadratic.Out, true);
            // once the tween is completed, call winPrize function
            spinTween.onComplete.add(this.winPrize, this);
        } else {
            if (wheelwin.visible || betterluck.visible) { //teliose to spin kai edikse to win
                clearTimeout(closebonustimeout); //akyrose to timeout
                setTimeout(function() {
                    hideWheelBonusMsg();
                }, 10);
            }
        }
    },

    winPrize() {
        if (bonuswin > 0) {
            wheelwin.visible = true;
            percentText.text = bonuspercent + "%";
        } else
            betterluck.visible = true;
        prizeText.text = bonuswin;
        closebonustimeout = setTimeout(function() {
            hideWheelBonusMsg();
        }, 10000);
    }
}