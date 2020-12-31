$(function() {
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


});