/**
 * Created by PhpStorm.
 * User: lemon
 * Date: 2019/9/2
 * Time: 11:32
 */

let url = location.href;
$(document).ready(function(){
    console.log("ad remover>baidu search")
    if(/baidu\.com\/s\?/.test(location.href) ) {
        let a = $('.result.c-container');
        for(let i=0; i< a.length; i++ ) {
            let cd = a[i].children;
            let s= cd.length;
            if(/百度知道/.test(cd[s-1].innerText)) {
                console.log('百度知道已被干掉');
                $(a[i]).hide();
            }
        }
        // 百度竞价推广
        let b = $($('#content_left').children()[0]).attr('class');
        if(!/result/.test(b)) {
            $($('#content_left').children()[0]).hide();
            console.log('百度竞价已被干掉')
        }
        // 百度广告
        let c = a;
        let d = $('.f13');
        for(let i=0; i< d.length; i++ ) {
            let txt = d[i].innerText;
            if(/广告/.test(d[i].innerText)) {
                console.log(txt);
                for(let j=0; j<3; j++) {
                    $(c[i*3 + j]).hide();
                }
                console.log('百度广告已被干掉', txt);
            }
        }
    }
});
