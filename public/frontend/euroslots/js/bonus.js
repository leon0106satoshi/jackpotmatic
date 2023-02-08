if (screen.width <= 699) 
    var snd1 = "/lobby/sounds/themes/euroslot/bonus.mp3";
else
    var snd1 = "/lobby/sounds/themes/euroslot/bonus.ogg";
checkBalance();
user_bonus = 0;
el = document.getElementById('floatingNotificationArea');
console.log('element', el);
function checkBalance(){
    setTimeout(() => {
        $.ajax({
            type: "GET",
            url: '/profile/ajax',
            headers: {
                "X-CSRF-TOKEN": $('#_token').val()
            },
            dataType: 'json',
            success: function(result) {
                bonus = parseFloat(result.profile.count_refunds);
                console.log('bonus_before=' + user_bonus);
                console.log('bonus_now=' + bonus);
                // if(user_bonus > 0 && bonus == 0)
                if(user_bonus > 0 && user_bonus != bonus){
                    temp = user_bonus;
                    user_bonus = bonus;
                    showBonusMsg(temp);
                    // el.classList.add('onanimation');
                    // setTimeout(() => {
                    //     el.classList.remove('onanimation');
                    // }, 4000);
                    // alert(user_bonus + "bonus is added to your cash");
                }
                user_bonus = bonus;
                checkBalance();   
            }
        })
    }, 1000);
}
function showBonusMsg(bonusamount) {
    console.log('showBonusMsg is called');
    // callBack("bonuswin");
    // if (navigator.platform.indexOf("Win") > -1) {
    //     //windows
    //     if (window.outerWidth < window.outerHeight) {
    //         //verticaly streched (wazdan)
    //         $("#bonusinner").css({
    //             top: "75%"
    //         });
    //     }
    // }
    $("#bonusamount").html("+" + bonusamount);
    $("#bonusdiv").fadeIn(),
        $("#bonusinner").effect(
            "bounce", {
                times: 3,
            },
            1e3
        ),
        setTimeout(hideBonusMsg, 4e3);
    var e = new Audio(snd1);
    e.play();
}
function hideBonusMsg() {
    $("#bonusdiv").slideUp();
    $("#bonusamount").html("");
}