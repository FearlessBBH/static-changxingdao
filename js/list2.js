$(function() {
    var mySwiper = new Swiper('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        slidesPerView: 3,
    });

    // Introduce 按钮跳转
    var intr_btn = document.querySelector('.introduce .btn');
    intr_btn.addEventListener('click', function() {
        PageTo('detail.html')
    });

    // swiper 跳转
    var swipers = document.querySelectorAll('.swiper-slide');
    // swipers.forEach(item => {
    for (var i = 0; i < swipers.length; i++) {
        swipers[i].addEventListener('click', function() {
            PageTo('detail.html');
        });
    }
    // });

    // 更多景点 跳转
    var swiper_btn = document.querySelector('.swiper .btn');
    swiper_btn.addEventListener('click', function() {
        PageTo('imgList.html');
    });
});