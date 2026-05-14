function showPDF() {
  if (/shiti/.test(location.href) && /download/.test(location.href) && /zikao365/.test(location.href)) {

    $("#advRollWarp").remove()
    let src = "http:" + $("#viewerPlaceHolderDel > iframe").attr("src")
    $(".main .l-news h1").append($("<a target='_blank' style='color:blue' href='" + src + "'>下载地址</a>"))
  }
}





setTimeout(showPDF, 3000);
