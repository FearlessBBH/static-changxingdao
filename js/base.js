{
    // 搜索栏出现 
    var searchs = document.querySelectorAll('header>.right .search');

    for (var i = 0; i < searchs.length; i++) {
        searchs[i].addEventListener('click', function() {
            $(this).find('.inputArea').css('display', 'flex');
            stopBubble();
        });
        document.addEventListener('click', function() {
            $('.inputArea').css('display', 'none');
        });
    }

    function stopBubble(e) {
        //如果提供了事件对象，则这是一个非IE浏览器
        if (e && e.stopPropagation)
        //因此它支持W3C的stopPropagation()方法
            e.stopPropagation();
        else
        //否则，我们需要使用IE的方式来取消事件冒泡
            window.event.cancelBubble = true;
    }

    // 跳转页
    function PageTo(page) {
        window.location.href = page;
    }

    var tabs = document.querySelectorAll('header>.right .grid');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function(e) {
            var _this = e.target.innerHTML;
            switch (_this) {
                case '首 页':
                    PageTo('index.html');
                    break;
                case '新闻中心':
                    // mySwiper.slideTo(1, 500, false);
                    break;
                case '营商环境':
                    // mySwiper.slideTo(2, 500, false);
                    break;
                case '一网通办':
                    // mySwiper.slideTo(3, 500, false);
                    break;
                case '产城人文':
                    // mySwiper.slideTo(4, 500, false);
                    break;
                case '政务公开':
                    PageTo('zwgk.html');
                    break;
            }
        })
    }


}