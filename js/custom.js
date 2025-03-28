
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



//   header blur

// jQuery( window ).on( 'scroll', function() {
//   if ( 50 < jQuery( this ).scrollTop() ) { 
//     jQuery( '.navbar-fixed-top' ).addClass( 'headerBlurScroll' );
//   } else {
//     jQuery( '.navbar-fixed-top' ).removeClass( 'headerBlurScroll' );
//   }
// });

// jQuery( window ).on( 'scroll', function() {
//   if ( 1000 < jQuery( this ).scrollTop() ) { 
//     jQuery( '.nav-text' ).addClass( 'headerBlurScroll' );
//   } else {
//     jQuery( '.nav-text' ).removeClass( 'headerBlurScroll' );
//   }
// });


// ヘッダーの高さを取得してその分コンテンツを下げる
$(function() {

    $('a[href^="#"]').click(function() {
      var speed = 500;
      var adjust = $('header').height();
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - adjust;
      $('body,html').animate({scrollTop: position}, speed, 'swing');
      return false;
  
    });
  
  });