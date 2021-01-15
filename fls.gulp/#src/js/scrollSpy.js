
/*scrollSpy*/
let home = document.querySelector("#home");
let about = document.querySelector("#about");
let services = document.querySelector("#services");
let portfolio = document.querySelector("#portfolio");
let contact = document.querySelector("#contact");

window.addEventListener("scroll", function(){
    var windo = window.pageYOffset + 63;
    if (about.offsetTop <= windo && services.offsetTop > windo) {
        document.querySelector(".header__link--about").setAttribute("id", "active");
        document.querySelector(".header__link--services").removeAttribute("id", "active");
        document.querySelector(".header__link--portfolio").removeAttribute("id", "active");
        document.querySelector(".header__link--contact").removeAttribute("id", "active");
        document.querySelector(".header__link--home").removeAttribute("id", "active");
    }
    else if (services.offsetTop <= windo && portfolio.offsetTop > windo) {
        document.querySelector(".header__link--services").setAttribute("id", "active");
        document.querySelector(".header__link--about").removeAttribute("id", "active");
        document.querySelector(".header__link--portfolio").removeAttribute("id", "active");
        document.querySelector(".header__link--contact").removeAttribute("id", "active");
        document.querySelector(".header__link--home").removeAttribute("id", "active");
    }
    else if (portfolio.offsetTop <= windo && contact.offsetTop > windo) {
        document.querySelector(".header__link--portfolio").setAttribute("id", "active");
        document.querySelector(".header__link--about").removeAttribute("id", "active");
        document.querySelector(".header__link--services").removeAttribute("id", "active");
        document.querySelector(".header__link--contact").removeAttribute("id", "active");
        document.querySelector(".header__link--home").removeAttribute("id", "active");
    }
    else if (contact.offsetTop <= windo) {
        document.querySelector(".header__link--contact").setAttribute("id", "active");
        document.querySelector(".header__link--about").removeAttribute("id", "active");
        document.querySelector(".header__link--services").removeAttribute("id", "active");
        document.querySelector(".header__link--portfolio").removeAttribute("id", "active");
        document.querySelector(".header__link--home").removeAttribute("id", "active");
    }
    else{
        document.querySelector(".header__link--home").setAttribute("id", "active");
        document.querySelector(".header__link--about").removeAttribute("id", "active");
        document.querySelector(".header__link--services").removeAttribute("id", "active");
        document.querySelector(".header__link--portfolio").removeAttribute("id", "active");
        document.querySelector(".header__link--contact").removeAttribute("id", "active");
    }
});


/*Smooth scrolling*/
$(".header__link, .main__btn, .business__btn").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  }
});
