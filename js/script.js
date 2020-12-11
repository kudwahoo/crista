$(function() {
  var imgHeight = $('.main-index__box').height();
  var bgHeight = $('.main-index__bg').height();
  var aboutImgHeight = $('.main-about__box').height();
  var aboutBgHeight = $('.main-about__bg').height();
  var contactImgHeight = $('.main-contact__box').height();
  var contactBgHeight = $('.main-contact__bg').height();

   /* ハンバーガーボタンクリック時の操作 */
  /* index.html */
  $(".menu").click(function(){
    if($(window).scrollTop() < bgHeight -50){
      $(".bar").toggleClass("cross");
      $('.menu__musk').fadeToggle(300);
      $(".index__menu").toggleClass("slide");
      $("body").toggleClass("stop");
    }else{
      $(".bar").toggleClass("black");
      $(".text").toggleClass("black");
      $(".bar").toggleClass("cross");
      $('.menu__musk').fadeToggle(300);
      $(".index__menu").toggleClass("slide");
      $("body").toggleClass("stop");
    }
  });

  /* about.html */
  $(".about-menu").click(function(){
    if($(window).scrollTop() < aboutBgHeight - 70){
      $(".bar-about").toggleClass("cross");
      $('.menu__musk--about').fadeToggle(300);
      $(".about__menu").toggleClass("slide");
      $("body").toggleClass("stop");
    }else{
      $(".bar-about").toggleClass("black");
      $(".text-about").toggleClass("black");
      $(".bar-about").toggleClass("cross");
      $('.menu__musk--about').fadeToggle(300);
      $(".about__menu").toggleClass("slide");
      $("body").toggleClass("stop");
    }
  });

  /* contact.html */
  $(".contact-menu").click(function(){
    if($(window).scrollTop() < contactBgHeight - 50){
      $(".bar-contact").toggleClass("cross");
      $('.menu__musk--contact').fadeToggle(300);
      $(".contact__menu").toggleClass("slide");
      $("body").toggleClass("stop");
    }else{
      $(".bar-contact").toggleClass("black");
      $(".text-contact").toggleClass("black");
      $(".bar-contact").toggleClass("cross");
      $('.menu__musk--contact').fadeToggle(300);
      $(".contact__menu ").toggleClass("slide");
      $("body").toggleClass("stop");
    }
  });

  /* ハンバーガーボタンの色の変化 */
  /* index.html */
  $(window).scroll(function(){
    if($(window).scrollTop() < bgHeight - 50){
      $(".bar").removeClass("black");
      $(".text").removeClass("black");
    }else{
      $(".bar").addClass("black");
      $(".text").addClass("black");
    }
  });

  /* about.html */
  $(window).scroll(function(){
    if($(window).scrollTop() < aboutBgHeight - 50){
      $(".bar-about").removeClass("black");
      $(".text-about").removeClass("black");
    }else{
      $(".bar-about").addClass("black");
      $(".text-about").addClass("black");
    }
  });

  /* contact.html */
  $(window).scroll(function(){
    if($(window).scrollTop() < contactBgHeight - 50){
      $(".bar-contact").removeClass("black");
      $(".text-contact").removeClass("black");
    }else{
      $(".bar-contact").addClass("black");
      $(".text-contact").addClass("black");
    }
  });

   /* ロゴ画像の色の変化 */
  /* index.html */
  $(window).scroll(function(){
    if($(window).scrollTop() < imgHeight - 50){
      $(".site-logo").removeClass("black");
    }else{
      $(".site-logo").addClass("black");
    }
  });

  /* about.html */
  $(window).scroll(function(){
    if($(window).scrollTop() < aboutImgHeight - 50){
      $(".site-logo-about").removeClass("black");
    }else{
      $(".site-logo-about").addClass("black");
    }
  });

  /* contact.html */
  $(window).scroll(function(){
    if($(window).scrollTop() < contactImgHeight - 50){
      $(".site-logo-contact").removeClass("black");
    }else{
      $(".site-logo-contact").addClass("black");
    }
  });

});