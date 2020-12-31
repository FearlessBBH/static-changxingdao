function init() {
    var lis = document.querySelectorAll('.list .item>ul>li');
    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener('click', function() {
            PageTo('list.html');
        });
    }

    var cards = document.querySelectorAll('.card .grid');
    var zindex;

    for (var i = 0; i < cards.length; i++) {
        cards[i].index = i;
        cards[i].addEventListener('mouseover', function(e) {
            cardIndex();
            this.style.zIndex = 99;
            this.classList.add('on');
            switch (this.index) {
                case 0:
                    zindex = 5;
                    for (var j = 1; j < cards.length; j++) {
                        zindex--;
                        cards[j].style.zIndex = zindex;
                    }
                    break;
                case 2:
                    zindex = 3;
                    for (var j = 0; j < 2; j++) {
                        zindex++;
                        cards[j].style.zIndex = zindex;
                    }
                    break;
                case 3:
                    zindex = 3;
                    for (var j = 0; j < 3; j++) {
                        zindex++;
                        cards[j].style.zIndex = zindex;
                    }
                    break;
                case 4:
                    zindex = 1;
                    for (var j = 0; j < cards.length - 1; j++) {
                        zindex++;
                        cards[j].style.zIndex = zindex;
                    }
                    break;
            }
        });
        cards[i].addEventListener('mouseout', function() {
            cardIndex();
            cards[0].classList.add('on');
        })
    }

    function cardIndex() {
        cards[0].style.zIndex = 6;
        cards[1].style.zIndex = 5;
        cards[2].style.zIndex = 4;
        cards[3].style.zIndex = 3;
        cards[4].style.zIndex = 2;
        for (var i = 0; i < cards.length; i++) {
            cards[i].classList.remove('on');
        }
    }

}