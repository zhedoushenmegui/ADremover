/**
 * Created by PhpStorm.
 * User: lemon
 * Date: 2019/3/8
 * Time: 16:51
 */
let retryTimes = 20;
let x = 0;
setInterval(function() {
    // 考虑网络延迟, 使用重试的方法;
    if(x ++ < retryTimes) {
        $('.pulllog-box').hide();
        $('#dmp_ad_58').hide();
        $('.recommend-ad-box').hide();
        $('#recommend-item-box-tow').hide();
    }

}, 100);
