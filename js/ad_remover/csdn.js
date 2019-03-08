/**
 * Created by PhpStorm.
 * User: lemon
 * Date: 2019/3/8
 * Time: 16:51
 */

var x = 0;
setInterval(function() {
    if(x ++ < 20) {

        $('.pulllog-box').hide();
        $('#dmp_ad_58').hide();
        $('.recommend-ad-box').hide();
    }

}, 1000);
