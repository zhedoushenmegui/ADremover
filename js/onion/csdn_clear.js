/**
 * Created by PhpStorm.
 * User: lemon
 * Date: 2019/9/2
 * Time: 11:21
 */

function a() {
    $("#csdn-toolbar").remove();
    // 侧边栏
    $('aside').remove();
    $('.tool-box.vertical').remove();
    $('.csdn-side-toolbar').remove();
    $('.container main').css('width', '100%');
    $('body').css('background-attachment', 'fixed')
    // 是真的sb, 内容其实都加载出来了, 然后非要点一下, 才能看全文
    $('#article_content').css('height', 'auto');
    $(".hide-article-box.hide-article-pos.text-center").remove();
}

/**
 * csdn 页面清爽器
 * csdn 的广告内容也太恶心了吧
 */
$(document).ready(function () {
    a();
});
setInterval(a, 500);