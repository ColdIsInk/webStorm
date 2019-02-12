var vote=[245,120,60,150];
for(var i=0;i<vote.length;i++){
    $(".column>li:eq("+i+")").height(vote[i]);
    $(".column>li:eq("+i+")").css("margin-top",250-vote[i]+"px");
    $(".column>li:eq("+i+")").html(vote[i]);
};
var index=0;
var m=0;
$(".person>li").click(
    function () {
        index=$(this).index();
        if(vote[index]>=250){
            vote[index]++;
            alert("sorry！他的票数已达上限，不能给他投票了。请给其他人投票吧！")
        }
        else {
            vote[index]++;
            $(".column>li:eq("+index+")").height(function (n,c) {
                return c+1;
            });
            $(".column>li:eq("+index+")").html(vote[index]);
            //$(".column>li:eq("+index+")").height()获取li的高度
            $(".column>li:eq("+index+")").css("margin-top",250-($(".column>li:eq("+index+")").height())+"px");
        }
    }
)