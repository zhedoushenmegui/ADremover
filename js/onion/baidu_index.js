/**
 * @FileName    db
 * @Description
 * @Author      yangchao
 * @Email       lemon@ofchao.bid
 * @Version
 * @Date        22:41 12/13/15
 */

/**
 * 这是个开脑洞的feature, 可以调整 "百度首页>时事热点" 里标签的位置
 */
$("document").ready(function(){
    var last;
    var tag = false;
    var tmpText;

    $('.title-content').click(function(){
        if(tag) {
            tag = false;
            $(last).text($(this).text());
            $(this).text(tmpText);
        }else{
            tag = true;
            last = this;
            tmpText = $(this).text();
        }
        return false;
    })

});