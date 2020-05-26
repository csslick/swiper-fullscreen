$(document).ready(function () {
  
  // 디바이스 크기 채크
  function check_device() {
    var x = document.getElementById("demo");
    if (window.matchMedia("(max-width: 500px)").matches) {
      console.log("디바이스 크기가 500px보다 작거나 같습니다");
      if(swiper){
        diableSwiper(); // 스와이프 작동 해재
        location.reload();
      }
    } else {
      console.log("디바이스카 500px보다 큽니다.");
      enableSwiper(); // 스와이프 작동
    }
  }

  window.addEventListener('resize', function () {
    check_device();
  });

  // 스와이퍼 구동부
  var swiper = null;
  var enableSwiper = function () {
    swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      slidesPerView: 1,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    // gnb 이벤트
    $('#gnb a').on('click', function () {
      var i = $(this).parent().index();
      console.log(i);
      swiper.slideTo(i, 400, function () {
        console.log('${i}페이지로 이동');
      });
      return false;
    });
  } // end enableSwiper

  var diableSwiper = function () {
    swiper.destroy();
    console.log('swiper = ', swiper)
    $('#gnb a').off(); // 이벤트 제거
  }

  // enableSwiper();
  check_device();

}); // end $