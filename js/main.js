// swiper
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 20,
  slidesPerView: 'auto',

  breakpoints: {
    768: {
      spaceBetween: 40,
    } 
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

});

// ドロワーメニュー実装
jQuery('.drawer-icon').on('click', function(e) {
  e.preventDefault();

  jQuery('.drawer-icon').toggleClass('is-active'); //ついていたら外す。ついていなかったらつける
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-bg').toggleClass('is-active');

  return false;
});

jQuery('.drawer-bg').on('click', function() {
  jQuery('.drawer-icon').removeClass('is-active'); 
  jQuery('.drawer-content').removeClass('is-active');
  jQuery('.drawer-bg').removeClass('is-active');
});



//アコーディオンメニュー実装

jQuery('.qa-item-q').on('click', function() {
  jQuery(this).next().slideToggle(200); // nextは対象要素の次の要素。
  jQuery(this).children('.qa-item-icon').toggleClass('is-open');
});


// スムーススクロール

jQuery('a[href^="#"]').click(function() {
  
  let header = jQuery('.header').innerHeight();
  
  let speed = 300;

  let id = jQuery(this).attr("href"); // id ="#news"

  let target = jQuery("#" == id ? "html" : id); // target="html"

  // 条件式 ? 真の場合の文 : 偽の場合の文 

  // ページのトップを基準にターゲットの位置を取得
  let position = jQuery(target).offset().top - header; 

  // ターゲットの位置までspeedの速度で移動
  jQuery("html, body").animate(
    {
      scrollTop: position
   },
    speed
  );

  jQuery('.drawer-icon').removeClass('is-active'); 

  jQuery('.drawer-content').removeClass('is-active');

  jQuery('.drawer-bg').removeClass('is-active');
  
  return false;
}); 


//トップへ戻る
jQuery(window).on('scroll', function(e) {
  e.preventDefault();

  if (jQuery(this).scrollTop() > 700) {
    jQuery('.to-top').addClass('is-show');
  } else {
    jQuery('.to-top').removeClass('is-show');
  }

  return false;
})



//wow
new WOW().init();









