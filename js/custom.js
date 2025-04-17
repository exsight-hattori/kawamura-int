
// back-top btn

$(function(){
      var topBtn = $('#phone-btn');
      topBtn.hide();
      $(window).scroll(function () {
          var w = $(window).width();
          if ($(this).scrollTop() > 100) {
              topBtn.fadeIn();
          } else {
              topBtn.fadeOut();
          }
      });
      topBtn.click(function () {
          $('body,html').animate({
              scrollTop: 0
          }, 500);
          return false;
      });
  });


// ヘッダーの高さを取得してその分コンテンツを下げる
$(function() {

    $('a[href^="#"]').click(function() {
      var speed = 500;
      var adjust = $('header').height() + 20;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - adjust;
      $('body,html').animate({scrollTop: position}, speed, 'swing');
      return false;
  
    });
  
  });


// cookie取得して１度のみPOPUP

if($.cookie("disappear") != "ok"){
    $(".popup").removeClass("ok");
} else {
    $(".popup").addClass("ok");
}

$('#popupBtn').click(function(){
    $.cookie("disappear", "ok", { expires: 1, path: "/" });
    $(".popup").addClass("ok");
});