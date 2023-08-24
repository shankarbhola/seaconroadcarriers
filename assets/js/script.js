$(document).ready(function(){
    $(window).scroll(function(){
        /* sticky navbar on scroll script */
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        /* scroll-up button show/hide script */
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    /* slide-up script */
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        /* removing smooth scroll on slide-up button click */
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        /* applying again smooth scroll on menu items click */
        $('html').css("scrollBehavior", "smooth");
    });

    /* toggle menu/navbar script */
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    /* typing text animation script */
    var typed = new Typed(".typing", {
        strings: ["_ROUND THE CLOCK", "-ROUND THE YEAR", "-ACROSS INDIA"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [" is a leading transportation and logistics company with over 15 years of experience. They offer a wide range of services, including road transportation, export consulting, and warehouse rental. Seacon Road Carriers is committed to providing their customers with the highest quality of service at competitive prices."],
        typeSpeed: 50,
        backSpeed: 60,
        loop: false
    });

    /* owl carousel script */
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


/* Scroll Reveal */

window.addEventListener('scroll', reveal);

  function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){

      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 100;

      if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
      }
      else{
        reveals[i].classList.remove('active');
      }
    }
  }