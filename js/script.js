new WOW().init();

$(window).scroll(function () {
    $scrollamout = $(window).scrollTop();

    if ($scrollamout > 10) {
        $(".menu").addClass("sticky")
    } else {
        $(".menu").removeClass("sticky")
    }

    if ($scrollamout > 500) {
        $(".btop").fadeIn()
    } else {
        $(".btop").fadeOut()
    }
})


$(".btop").click(function () {
    $("html,body").animate({
        scrollTop: 0
    }, 2000)
})

// banner slider


$('#banner-part .slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    fade: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
        {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

// gallery hover

$('#gallery-part .items').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
        {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

$(".snake").snakeify({
  speed: 200
});

$('.venobox').venobox();

// team part
$('#team-part .items').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
        {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
            autoplay: true,
            arrows: true,
            prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
            autoplay: true,
            arrows: true,
            prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
            autoplay: true,
            arrows: true,
        prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });







//testi part


$('#testi-part .overlay .items').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
        {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

// counter up

$('.counter').counterUp({
                delay: 10,
                time: 2000
            });

// class part

$('#colorful').colorfulTab();


// brand part

$('#brand-part .items').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
//    autoplay: true,
    centerMode: true,
    centerPadding: 0,
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
        {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
          
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
            
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
