/**
 * Created by PhpStorm.
 * User: lemon
 * Date: 2018/6/25
 * Time: 15:52
 */
var start = 0;
function run() {
    // remove ads
    $('.wrap .mtb10').hide();
    $('.main.mb10.clearfix').hide();
    $('div.lbd.clearfix').hide();

    $('div.w350.fr').remove();
    $('div.jb51ewm').remove();
    $('body div.topTools').remove();
    // 2023-02
    $("#topbar").remove();
    $("#header > div.logom").remove();
    $("#header > div.logor").remove();
    $("#header").remove();
    $('#container >div.pt10').remove();
    $('#main >div.main-right').remove();
    $('div.lbd_bot').remove();
    $('.lbd').remove();
    $('#main div.main-left').css("width", '100%');
    $('.google-auto-placed').remove();
    $("#content").css("background-color", '#dddddd');

    // adjust width
    $('div.wrap').css('width', '88%');
    $('div.main').css('width', '88%');
    $('div#content').css('width', '100%');
    $('div.main.clearfix.bgf > div.w750.fl').css('width', '100%');
}

///
$("document").ready(function(){
    console.log('hello?');
    start = 100;
});
///
setInterval(function() {

    if(start>10) {
        run();
    }else {
        start ++;
        console.log(start);
    }

}, 200);
