var huo_pic=["images/huo-1.jpg","images/huo-2.jpg","images/huo-3.jpg",
        "images/huo-4.jpg","images/huo-5.jpg"];
//活动图片轮播,banner
var pic_number=0;
var index=0;
var mySet=0;
$('#trigger>li>a').eq(0).addClass("banner_li_hover");
function rotator(){//轮播函数
    pic_number++;
    $("#picture img").attr('src',huo_pic[pic_number]);
    $("#trigger li a:not(:eq(pic_number))").removeClass("banner_li_hover");
    $("#trigger li a").eq(pic_number).addClass("banner_li_hover");
    if(pic_number>=4){
        pic_number=-1;
    }
}
mySet=setInterval("rotator()",4000);
//鼠标放在trigger>li标签上切换图片
$("#trigger>li>a").hover(
    function(){
            index=$(this).parent().index();
            $("#trigger>li>a").removeClass("banner_li_hover");
            $(this).addClass("banner_li_hover");
            $("#picture img").attr('src',huo_pic[index]);
            pic_number=index;
            clearInterval(mySet);
        },
    function () {
            $(this).removeClass("banner_li_hover");
            mySet=setInterval("rotator()",4000);
            $('#trigger>li>a').eq(pic_number).addClass("banner_li_hover");
        }
    );


//排行榜
(function () {
    var ranking_because=document.getElementById("ranking_because");
    $("#ranking-content .wealth").hide();
    $("#ranking-content .prestige").hide();
    ranking_because.addEventListener("change",function () {
        var value=$("#ranking_because option:selected").val();
        if(value=="财富"){
            $("#ranking-content>#power").hide();
            $("#ranking-content>#wealth").show();
            $("#ranking-content>#prestige").hide();
        }else {
            if(value=="声望"){
                $("#ranking-content #power").hide();
                $("#ranking-content #wealth").hide();
                $("#ranking-content #prestige").show();
            }else {
                $("#ranking-content #power").show();
                $("#ranking-content #wealth").hide();
                $("#ranking-content #prestige").hide();
            }
        }

    },false);
})();

//合作媒体的纵向滚动
(function () {
    var part1=$("#scroll_one");
    var part2=$("#scroll_two");
    var timeT=0;
    var m=0;
    if (part1.height() >= $("#scroll").height()) {
        part2.html(part1.html());
        function change() {
            m++;
            if (m >= part1.height()) {
                m = 0;
            }
            $("#scroll").scrollTop(m);
        }
        timeT = setInterval(function () {
            change();
        }, 60);//时间越小，滚的越快
        $("#scroll").hover(function () {
                clearInterval(timeT);
            },
            function () {
                timeT= setInterval(function () {
                    change();
                }, 60);
            })
    }

})();

//新闻、活动、媒体
(function () {
    var ul_index=0;
    $("#NEWS-title>li:eq(0)").addClass("NEWS_li_hover");
   $("#NEWS-title>li").hover(
       function () {
           $("#NEWS-title>li").removeClass("NEWS_li_hover")
           $(this).addClass("NEWS_li_hover");
           ul_index=$(this).index();
           $("#NEWS>ul:not(:first)").hide();
           $("#NEWS>ul").eq(ul_index+1).slideDown(1500);
           $("#NEWS>span>img").attr('src',huo_pic[ul_index+2]);
       },
       function () {
           $(this).removeClass("NEWS_li_hover");
           $("#NEWS-title>li").eq(ul_index).addClass("NEWS_li_hover");
       }
   );

})();

//职业介绍
(function () {
    var profession=[
        {
            "career":"video/career1.swf",
            "img":"images/daojianshi.jpg",
            "describe":"举世无双擎天浩气，精妙绝伦的剑术，冲天唤日的刀法，完美演绎刀与剑的奥义。"
        },
        {
            "career":"video/career2.swf",
            "img":"images/moshi.jpg",
            "describe":"来去飘渺眉如烟雨，拥有雷神之子的天赋印记，万物元素皆在手心之上。。"
        },
        {
            "career":"video/career3.swf",
            "img":"images/qinshi.jpg",
            "describe":"身披霓裳笑如止水，琴分两色，优雅动人的音色，杀人如麻的乐色。"
        },
        {
            "career":"video/career4.swf",
            "img":"images/yuling.jpg",
            "describe":"轻盈如羽箭如翎，锐利如鹰的眼神，迅速如风的身影，穿越于杀意之间的听风者。"
        }
    ];
    var occ_index=0;
    $("#occupation>ul li:eq(0)").addClass("occupation_li_hover");
    $("#occupation>ul li").hover(
        function () {
            occ_index=$(this).index();
            $("#occupation>ul li").removeClass("occupation_li_hover")
            $(this).addClass("occupation_li_hover");
            $("#occupation_content img").attr('src',profession[occ_index].img);
            var video="<embed src='"+profession[occ_index].career+"' width='230' height='152' autoplay></embed>";
            $("#occupation_content").append(video);
            $("#occupation_content>#describe").html(profession[occ_index].describe);
        },
        function () {
            $(this).removeClass("occupation_li_hover");
            $("#occupation>ul li").eq(occ_index).addClass("occupation_li_hover");
        }
    );

})();

//游戏攻略
(function () {
    $("#strategy-con>li").hover(
        function () {
            $(this).find("span img").attr('src',"images/sanjiao-red.png");
        },
        function () {
            $(this).find("span img").attr('src',"images/sanjiao.png");
        }
    )
})();

//游戏图册
(function () {
    var game_index=0;
    $("#gameAtlas h3>ul li:eq(0)").addClass("gameAtlas_li_hover");
    $("#gameAtlas h3>ul li").hover(
        function () {
            game_index=$(this).index();
            $("#gameAtlas h3>ul li").removeClass("gameAtlas_li_hover")
            $(this).addClass("gameAtlas_li_hover");
            $("#gameAtlas-content>ul").hide();
            $("#gameAtlas-content>ul").eq(game_index).slideDown(1000);
        },
        function () {
            $(this).removeClass("gameAtlas_li_hover");
            $("#gameAtlas>h3>ul>li").eq(game_index).addClass("gameAtlas_li_hover");
            $("#gameAtlas-content>ul").eq(game_index).show();
        }
    );
})();

//banner的延迟出现
(function(){
    var news_height = $("#NEWS").offset().top;
    $(window).scroll(function(){
        var this_scrollTop = $(this).scrollTop()+540;
        if(this_scrollTop>news_height ){
            $("#NEWS").animate({width:"740px"},2000);
        }
    });
})();

(function () {
    $("#gamemore").hover(
        function () {
            $("#moreGame").slideDown(1500);
            $("#moreGame").hover(
                function () {
                    $("#moreGame").show();
                },
                function () {
                    $("#moreGame").hide(1500);
                }
            );
        },
        function (event) {
            var evt=event||window.event;
            var y=evt.offsetX;
            if(y<0||y>=116){
                $("#moreGame").hide(1500);
            }
        }
    );
})();




