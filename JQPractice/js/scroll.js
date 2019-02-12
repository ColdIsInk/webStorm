var part1 = $(".scroll_left_one");
var part2 = $(".scroll_left_two");
var part3 = $(".scroll_top_one");
var part4 = $(".scroll_top_two");
var n = 0;
var m = 0;
var timeL=0;
var timeT=0;
//横向滚动
if (part1.width() >= $(".scroll_left").width()) {
    part2.html(part1.html());//将part1的内容复制一份给part2
    function change_left() {
        n++;
        if (n >= part1.width()) {
            n = 0;
        }
        $(".scroll_left").scrollLeft(n);
    }
    timeL = setInterval(function () {
        change_left();
    }, 10);//时间越小，滚的越快
    $(".scroll_left").hover(function () {
            clearInterval(timeL);
        },
        function () {
            timeL = setInterval(function () {
                change_left();
            }, 10);
        })
}
//纵向滚动
if (part3.height() >= $(".scroll_top").height()) {
    part4.html(part3.html());
    function change() {
        m++;
        if (m >= part3.height()) {
            m = 0;
        }
        $(".scroll_top").scrollTop(m);
    }
    timeT = setInterval(function () {
        change();
    }, 10);//时间越小，滚的越快
    $(".scroll_top").hover(function () {
            clearInterval(timeT);
        },
        function () {
            timeT= setInterval(function () {
                change();
            }, 10);
        })
}