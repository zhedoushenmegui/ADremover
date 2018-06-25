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
