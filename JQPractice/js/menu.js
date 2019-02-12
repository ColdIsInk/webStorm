$('.menu>li').css("float","left");
$('.second').hide();//隐藏二级菜单
$('.second a').css('color','black');
$('.menu>li').hover(//鼠标移到显示、离开隐藏
    function () {
        $(this).css('background','#bf97ff')
        $(this).find('ul').show();

    },
    function () {
        $('.menu>li').css('background','#1471ff');
        $(this).find('ul').hide();
    }
);
$('.menu>li .second>li a').hover(
    function () {
        $(this).css('color','red');

    },
    function () {
        $(this).css('color','black');

    }
);


$('.bar-second').hide();
var flag=null;
$('.bar-first>li>a').hover(
    function () {
        flag=$(this).css('background');
        $(this).css('background','blue')
        $(this).css('color','white');

    },
    function () {
        $(this).css('background',flag);
        $(this).css('color','black');

    }
);

$('.bar-first>li').on("click",function () {
    if($(this).find('ul').is(":hidden")){
        $(this).find('ul').show();
    }
    else {
        $(this).find('ul').hide();
    }
    
});
$('.bar-second>li>a').hover(
    function () {
        $(this).addClass("second-bck");
    },
   function () {
        $(this).removeClass("second-bck");

   }
)
    