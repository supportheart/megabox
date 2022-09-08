// 스킵 버튼
$('.skip a').on('focus', function () {
  $('.skip').addClass('on');
});
$('.skip a').focusout(function () {
  $('.skip').removeClass('on');
});

// 네비게이션 이동
$('.gnb > ul > li').not('.link').not('.not').hover(
  function () {
    $('.gnb > ul > li').find('.lnb').removeClass('on');
    $('.gnb > ul > li').removeClass('on');
    $(this).find('.lnb').addClass('on');
    $(this).addClass('on');
    $('.lnb_bg').addClass('on');
  },
  function () {
    $('.gnb > ul > li').find('.lnb').removeClass('on');
    $('.gnb > ul > li').removeClass('on');
    $('.lnb_bg').removeClass('on');
  }
);

$('.gnb > ul > li > a').not('.link > a').not('.not > a').focus(function () {
  $(this).parent().addClass('on');
  $('.gnb > ul > li > a').siblings('.lnb').removeClass('on');
  $(this).siblings('.lnb').addClass('on');
  $('.lnb_bg').addClass('on');
});

$('.gnb > ul > li > a').not('.link > a').not('.not > a').focusout(function () {
  $('.gnb > ul > li > a').parent().removeClass('on');
  $('.lnb_bg').removeClass('on');
});

$('.lnb a').focus(function () {
  $('.lnb_bg').addClass('on');
});

// 좋아요 버튼

$(function () {
  const likeBtns = document.querySelectorAll('.like_btn');
  likeBtns.forEach(i => {
    i.addEventListener("click", () => {
      if (i.classList.contains("like")) {
        i.classList.remove("like");
      } else {
        i.classList.add("like");
        console.log("hello");
      }
    });
  });
})

//swiper

$(function () {
  $('a[href="#"]').click(function (e) {
    e.preventDefault();
  });

  const movieSlider = new Swiper('.movie_slider', {
    // If we need pagination
    slidesPerView: "auto",
  });

  const benefitSlider1 = new Swiper('.benefit1', {
    // If we need pagination
    slidesPerView: "auto",

    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-ad',
    },
  });

  const benefitSlider2 = new Swiper('.benefit2', {
    // If we need pagination
    slidesPerView: "auto",
    effect: 'fade',

    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-ad',
    },
  });

  benefitSlider2.controller.control = benefitSlider1;
  benefitSlider1.controller.control = benefitSlider2;

  const newOpenSlider = new Swiper('.new_open_slider', {
    // If we need pagination
    slidesPerView: "auto",

    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-new',
      prevEl: '.swiper-button-prev-new',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar-new',
    },
  });

  $(".swiper-controll-new .pause-button").click(function () {
    $(this).toggleClass("play");
    if ($(this).hasClass("play")) {
      newOpenSlider.autoplay.start();
    } else {
      newOpenSlider.autoplay.stop();
    }

  });
});