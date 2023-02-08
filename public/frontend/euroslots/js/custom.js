
// update balance

var interval = 1000;  // 1000 = 1 second, 3000 = 3 seconds
function doAjax() {
    $.ajax({
        type: 'GET',
        url: '/profile/ajax',
        data: $(this).serialize(),
        dataType: 'json',
        success: function (data) {
            /*console.log(data.profile.balance);// first set the value
            console.log(data.profile.bonus.balance);// first set the value*/
            $("span.balanceValue").text(data.profile.balance + '  ' );
           // $("p.text-title").text( data.profile.balance + ' ' + data.currency );
            $("div.refund > span").text(data.profile.bonus.balance);
        },
        complete: function (data) {
            // Schedule the next
            setTimeout(doAjax, interval);
        }
    });
}

$(function() {
    setTimeout(doAjax, interval);
    console.log( "ready!" );
});
