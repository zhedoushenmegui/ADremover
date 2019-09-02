/**
 * Created by PhpStorm.
 * User: lemon
 * Date: 2019/9/2
 * Time: 11:32
 */

var url = location.href;
$(document).ready(function(){
    console.log("ad remover>baidu search")
    if(/baidu\.com\/s\?/.test(location.href) ) {
        var a = $('.result.c-container');
        for(var i=0; i< a.length; i++ ) {
            var cd = a[i].children;
            var s= cd.length;
            if(/百度知道/.test(cd[s-1].innerText)) {
                console.log('百度知道已被干掉');
                $(a[i]).hide();
                continue
            }
        }
        // 百度竞价推广
        var b = $($('#content_left').children()[0]).attr('class');
        if(!/result/.test(b)) {
            $($('#content_left').children()[0]).hide();
            console.log('百度竞价已被干掉')
        }
        // 百度广告
        var c = $('.result.c-container').children();
        var d = $('.f13');
        for(var i=0; i< d.length; i++ ) {
            var txt = d[i].innerText;
            if(/广告/.test(d[i].innerText)) {
                console.log(txt);
                for(var j=0; j<3; j++) {
                    $(c[i*3 + j]).hide();
                }
                console.log('百度广告已被干掉', txt);
                continue
            }
        }
    }
});
