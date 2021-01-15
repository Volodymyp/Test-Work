$(document).ready(function () {



  //Page Loader
  // setTimeout(function () {
  //   $('.loader-bg').fadeToggle();
  // }, 1500);


  /*-------class for background----------*/

  function ibg(){

  let ibg=document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
  if(ibg[i].querySelector('img')){
  ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
  }
  }
  }

  ibg();

    /*----burger-----*/
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('.header__body-content').toggleClass('header__body-move');
    $('.header').toggleClass('bege');
    /* ---- lock scroll main content when burger open -------  */
    $('body').toggleClass('lock');
  })


// клік поза бургер меню
/*$(document).mouseup(function (e) {
  if ($('.header__burger').hasClass('active')) {
    var menu = $(".header__menu");
    if (!menu.is(e.target) && menu.has(e.target).length === 0) {
      $('.header__burger').click();
    }
  }
});*/

//change nav bg when scroll or resize
//   function consoleBG() {
//     if ($(window).scrollTop() <= 100 && $(window).width() >= '768') {
//       $('.header').css('background', 'rgba(0, 91, 193, 0.6)');
//     } else if ($(window).scrollTop() <= 100 && $(window).width() < '768') {
//       $('.header').css('background', 'rgba(0, 91, 193, 0.6)');
//     }else if ($(window).scrollTop() > 100 && $(window).width() < '768') {
//       $('.header').css('background', 'rgba(0, 91, 193, 1)');
//     } else if ($(window).scrollTop() > 100 && $(window).width() >= '768') {
//       $('.header').css('background', 'rgba(0, 91, 193, 1)');
//     }
//   }
//   consoleBG();

//   $(window).scroll(function() {
//     consoleBG();
//   });

//   $(window).on('load resize',consoleBG);

// $(".footer__btn-Top").on('click', function(event) {
//   if (this.hash !== "") {
//     event.preventDefault();
//     var hash = this.hash;
//     $('html, body').animate({
//       scrollTop: $(hash).offset().top
//     }, 800, function(){
//       window.location.hash = hash;
//     });
//   }
// });

});//end

