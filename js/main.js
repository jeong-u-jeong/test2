// 메뉴 버튼 클릭 이벤트

function open_menu(){

    document.querySelector(".wrap").style.left="0px";
    document.querySelector(".btn_menu").style.left="330px";
    document.querySelector(".icon_open").style.display="none";
    document.querySelector(".icon_close").style.display="block";    
};

function close_menu(){

    document.querySelector(".wrap").style.left="-300px";
    document.querySelector(".btn_menu").style.left="30px";
    document.querySelector(".icon_open").style.display="block";
    document.querySelector(".icon_close").style.display="none";   
};



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