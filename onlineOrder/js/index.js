(function () {
    var pic=["images/index_bck.jpg","images/banner1.jpg","images/banner5.jpg"];
    var num=0;
    setInterval(
        function () {
            num++;
            if(num>pic.length-1){
                num=0
            }
            $("body").css("background-image","url("+pic[num]+")");
        },4000);
})();

//导航条颜色
(function () {
    $(".nav ul li:eq(0)").addClass("nav_li_hover");
    $(".nav ul li:not(:first)").hover(
        function () {
          $(this).addClass("nav_li_hover");
        },
        function () {
            $(this).removeClass("nav_li_hover");
        }
)
})();

//注销
(function (){
    $(".nav #logout").click(function () {
            location.href="login.html";
        }
    );
})();
//图片旋转
(function () {
        var num=0;
        setInterval(function () {
                num+=5;
                $(".food .food-content ul li img").rotate(num);
            },1000);
})();

$("#more").click(function () {
        console.log(123)
        location.href="menu.html";
    }
);
