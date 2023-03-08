// 비쥬얼메인 스와이퍼
var swiper = new Swiper(".visual", {
    slidesPerView: 1,
    loop: true,
    autoplay : true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});