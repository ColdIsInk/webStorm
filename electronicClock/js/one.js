var can=document.querySelector("#can");
var ctx=can.getContext("2d");
var image=new Image();
image.src="images/number.jpg";
var picture=[0,1,2,3,4];

setInterval(function () {
    var myTime=new Date();
    var hour=myTime.getHours();
    var minute=myTime.getMinutes();
    var second=myTime.getSeconds();
    var year=myTime.getFullYear();
    var month=myTime.getMonth()+1;//获取月份、必须+1，getMonth()是从0开始的
    var day=myTime.getDate();
    var week=myTime.getDay();
    var week_arr=["日","一","二","三","四","五","六"];
    hour=hour<10?"0"+hour:hour;
    minute=minute<10?"0"+minute:minute;
    second=second<10?"0"+second:second;
    month=month<10?"0"+month:month;
    day=day<10?"0"+day:day;

    ctx.clearRect(0,0,can.width,can.height);

     function drawImg(x,y,m) {
         if(x<5){ctx.drawImage(image, 15+126*(picture[x]), 132, 120, 132, y, m, 80, 80);}
         else {ctx.drawImage(image, 6+126*(picture[x-5]), 0, 120, 132, y, m, 80, 80);}
     }
     //标题
    ctx.fillStyle="#61ffda";
    ctx.font="60px Arial";
    ctx.fillText("电子时钟",250,55);

     //年
     drawImg(parseInt(year/1000),0,70);
     drawImg((parseInt(year/100))%10,72,70);
     drawImg((parseInt(year/10))%10,146,70);
     drawImg(year%10,220,70);
     //月
    drawImg(parseInt(month/10),340,70);
    drawImg(month%10,420,70);
    //日
    drawImg(parseInt(day/10),532,70);
    drawImg(day%10,606,70);
    //画出时、分、秒
    drawImg(parseInt(hour/10),120,170);
    drawImg(hour%10,191,170);
    drawImg(parseInt(minute/10),279,170);
    drawImg(minute%10,360,170);
    drawImg(parseInt(second/10),456,170);
    drawImg(second%10,536,170);

    ctx.fillStyle="#ff46d2";
    ctx.font="40px Arial";
    ctx.fillText("年",300,130);
    ctx.fillText("月",494,130);
    ctx.fillText("日",682,130);
    ctx.fillText("星 期 "+week_arr[week],300,310);
    (function () {//时、分、秒之间的分隔符
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth=10;
        ctx.moveTo(274,200);
        ctx.lineTo(274,210);
        ctx.moveTo(274,220);
        ctx.lineTo(274,230);
        ctx.moveTo(448,200);
        ctx.lineTo(448,210);
        ctx.moveTo(448,220);
        ctx.lineTo(448,230);
        ctx.stroke();
        ctx.restore();
    })()

},1000);




