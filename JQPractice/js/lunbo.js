$('.picture p:not(:first)').hide();
$('.number span a:first').addClass("number-bck");
var length=$('.picture p').length;
var index=0;
setInterval(
    function () {
        index++;
        if(index>length-1){
            index=0;
        }
        $('.picture p').eq(index-1).fadeOut(500);//渐隐渐现
        $('.picture p').eq(index).fadeIn(2000);
        $('.number span a:not(:eq(index))').removeClass("number-bck");
        $('.number span a').eq(index).addClass("number-bck");
    },2000);
$('.number>span a').click(
    function () {
       var value=this.text-1;
        $('.picture p:not(:eq(value))').fadeOut(500);
        $('.picture p').eq(value).fadeIn(1000);
        $('.number span a:not(:eq(value))').removeClass("number-bck");
        $('.number span a').eq(value).addClass("number-bck");
        index=value-1;
    }
)