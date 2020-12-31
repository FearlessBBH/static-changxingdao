$(function() {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical', // 垂直切换选项
        loop: false, // 循环模式选项
        slidesPerView: 'auto',
        // autoplay: {
        //     delay: 5000
        // },
        mousewheel: true, // 鼠标滚动

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // 点击切换页面
            // bulvarClass: 'my-bulvar'
        },

    });
    console.log(mySwiper.mousewheel.enabled);;

    var header = document.querySelectorAll('header');

    // 点击导航并跳转
    for (var i = 0; i < header.length; i++) {
        var grids = header[i].querySelectorAll('.grid');
        for (var j = 0; j < grids.length; j++) {
            grids[j].addEventListener('click', function(e) {
                var _this = e.target.innerHTML;
                switch (_this) {
                    case '首 页':
                        mySwiper.slideTo(0, 500, false);
                        break;
                    case '新闻中心':
                        mySwiper.slideTo(1, 500, false);
                        break;
                    case '营商环境':
                        mySwiper.slideTo(2, 500, false);
                        break;
                    case '一网通办':
                        mySwiper.slideTo(3, 500, false);
                        break;
                    case '产城人文':
                        mySwiper.slideTo(4, 500, false);
                        break;
                        // case '政务公开':
                        //     window.location.href = 'zwgk.html';
                        //     break;
                }
            })
        }
    }
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var params = window.location.search;
    var r = params.substr(8);
    switch (r) {
        case '1':
            mySwiper.slideTo(0, 500, false);
            break;
        case '2':
            mySwiper.slideTo(1, 500, false);
            break;
        case '3':
            mySwiper.slideTo(2, 500, false);
            break;
        case '4':
            mySwiper.slideTo(3, 500, false);
            break;
        case '5':
            mySwiper.slideTo(4, 500, false);
            break;

    }

    // 水波纹
    $('.ripple').ripples({
        resolution: 500,
        dropRadius: 20, //px
        perturbance: 0.00,
    });

    // 列表跳转
    var topTitle = document.querySelector('.p2 .skeleton>.right>.top');
    var lis = document.querySelectorAll('.p2 .skeleton>.right>ul>li');

    topTitle.addEventListener('click', function() {
        PageTo('detail.html');
    });

    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener('click', function() {
            PageTo('detail.html');
        });
    }

    // 跳转页
    function PageTo(page) {
        window.location.href = page;
    }

    // p2图文列表区域切换
    var p2btns = document.querySelectorAll('.p2 .btnsMore .btns .grid');
    var p2areas = document.querySelectorAll('.p2 .skeleton');

    for (var i = 0; i < p2btns.length; i++) {
        p2btns[i].index = i;
        p2btns[i].addEventListener('click', function(e) {
            for (var j = 0; j < p2btns.length; j++) {
                p2btns[j].classList.remove('on');
            }
            for (var k = 0; k < p2areas.length; k++) {
                p2areas[k].classList.add('displayNone');
            }
            p2areas[this.index].classList.remove('displayNone');
            this.classList.add('on');
        })
    }

    // p5列表区域切换
    var p5btns = document.querySelectorAll('.p5 .btnsMore .btns .grid');
    var p5areas = document.querySelectorAll('.p5 .btnsarea');
    for (var i = 0; i < p5btns.length; i++) {
        p5btns[i].index = i;
        p5btns[i].addEventListener('click', function() {
            for (var j = 0; j < p5btns.length; j++) {
                p5btns[j].classList.remove('on');
            }
            for (var k = 0; k < p5areas.length; k++) {
                p5areas[k].classList.add('displayNone');
            }
            this.classList.add('on');
            p5areas[this.index].classList.remove('displayNone');
        })
    }
});