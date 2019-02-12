//导航条颜色
(function () {
    $(".nav ul li:eq(1)").addClass("nav_li_hover");
    $(".nav ul li:not(:eq(1))").hover(
        function () {
            $(this).addClass("nav_li_hover");
        },
        function () {
            $(this).removeClass("nav_li_hover");
        }
    );
})();

//注销
(function (){
    $(".nav #logout").click(
        function () {
            location.href="login.html";
        }
    );
})();

//切换页数
(function () {
    $("footer>button").eq(1).addClass("btn_cli");
    var index=0;
    //上一页
    $("footer #up").click(function () {
            index-=1;
           if(index<0){
               index=2;
           }
           $("main ul").hide();
           $("main ul").eq(index).slideDown(1000);
        $("footer>button").removeClass("btn_cli");
        $("footer>button").eq(index+1).addClass("btn_cli");

        });
    //下一页
    $("footer #next").click(function () {
            index+=1
            if(index>2){
                index=0;
            }
            $("main ul").hide();
            $("main ul").eq(index).fadeIn(1000);
        $("footer>button").removeClass("btn_cli");
        $("footer>button").eq(index+1).addClass("btn_cli");
        });
    $("footer #first").click(function () {
        $("main ul").hide();
        $("main ul").eq(0).fadeIn(1000);
        $("footer>button").removeClass("btn_cli");
        $("footer>button").eq(1).addClass("btn_cli");
    });
    $("footer #second").click(function () {
        $("main ul").hide();
        $("main ul").eq(1).fadeIn(1000);
        $("footer>button").removeClass("btn_cli");
        $("footer>button").eq(2).addClass("btn_cli");
    });
    $("footer #third").click(function () {
        $("main ul").hide();
        $("main ul").eq(2).fadeIn(1000);
        $("footer>button").removeClass("btn_cli");
        $("footer>button").eq(3).addClass("btn_cli");
    });
})();