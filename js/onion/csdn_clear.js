/**
 * Created by PhpStorm.
 * User: lemon
 * Date: 2019/9/2
 * Time: 11:21
 */

function csdnDownloadMark() {
    // download 链接作用不大, 这里加一个标记
    let arr = $("div.title-box > a");
    if(arr) {
        for(let i=0; i<arr.length; i++) {
            let b = arr[i]
            if(/DOWNLOAD_MARK/.test(b.innerHTML)) {return false;}
            if(/download/.test(b.href)) {
                b.innerHTML = "<span style='color: #663399;font-weight:800;font-size:24px'>[DOWNLOAD_MARK]</span>"
                    + b.innerHTML;
            }
        }
    }
}

function csdnClear() {
    $("#csdn-toolbar").remove();
    // 侧边栏
    $('aside').remove();
    $('.tool-box.vertical').remove();
    $('.csdn-side-toolbar').remove();
    $('.container main').css('width', '100%');
    $('body').css('background-attachment', 'fixed')
    // 是真的sb, 内容其实都加载出来了, 然后非要点一下, 才能看全文
    $('#article_content').css('height', 'auto');
    $('main div.blog-content-box pre.set-code-hide').css('height', 'auto');
    $(".hide-article-box.hide-article-pos.text-center").remove();
    //
    csdnDownloadMark();
}

/**
 * csdn 页面清爽器
 * csdn 的广告内容也太恶心了吧
 */
$(document).ready(function () {
    csdnClear();
});
setInterval(csdnClear, 500);