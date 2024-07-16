$(document).ready(function () {
  const swiper = new Swiper(".mySwiper", {
    effect: 'fade',
    loop: true,
    autoplay: {
      delay: 5 * 1000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  setInterval(() => {
    console.log(swiper.realIndex);
  }, 1000)
  // const a = {

  // };
  // a['aaaa'] = 
  //껍데기let 껍데기를 안 바꾸면 const
  $('.con1 li a').click(function () {
    let btn = $('.lang');
    if (btn.hasClass('isShow')) {
      btn.hide();
      btn.removeClass('isShow');
    } else {
      btn.show();
      btn.addClass('isShow');
    }

  })

  $('.menu2 > li').hover(
    function () {
      $(this).children('.case').show();
    },
    function () {
      $(this).children('.case').hide();
    }
  );
})


// //tabnav li 클릭했을 때 할 일
// $('.tabnav li').click(function () {
//   //li a에 있는 모두 a class 제거
//   $('.tabnav li a').removeClass('on')
//   //(내가 선택한 li(this)안에 있는 a) a on class가 추가
//   $(this).find('a').addClass('on')
//   let idx = $(this).index()

//   $('.tabitem').hide()
//   //해당하는 tabitem 보이기
//   $('.tabitem').eq(idx).show()
// })
// $('.tabnav li').eq(0).trigger('click')
