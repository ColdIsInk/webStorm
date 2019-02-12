var pie = document.querySelector("#pie");
var myColor=document.querySelector("#myColor");
var drawing=document.getElementById("drawing");
var clearImg=document.getElementById("clearImg");
var line=document.getElementById("line");
var ctx = pie.getContext("2d");
var data = [
    {
    "bfb":20,
    "color":"#ff6122",
    "R":200
},{
    "bfb":30,
    "color":"#c3ff0d",
    "R":180
},{
    "bfb":28,
    "color":"#f3f",
    "R":200
},{
    "bfb":9,
    "color":"#838dff",
    "R":180
}, {
        "bfb":9,
        "color":"#0ef",
        "R":160
    }, {
        "bfb":4,
        "color":"rgba(255,58,83,0.67)",
        "R":140
    }];
var zhongxin = {
    "x":pie.width/2,
    "y":pie.height/2+10
};
var startp =2*Math.PI ;

for( var i=0;i <= data.length-1 ;i++){
    ctx.beginPath();
    ctx.moveTo( zhongxin.x,zhongxin.y);
    ctx.arc( zhongxin.x,zhongxin.y,data[i].R , startp , startp+data[i].bfb/50*Math.PI);
    ctx.closePath();
    ctx.fillStyle = data[i].color;
    ctx.fill();
    startp =  startp+data[i].bfb/50*Math.PI ; // 把起始变为结束值
};

var ctxD=drawing.getContext("2d");
//选择颜色
myColor.addEventListener("change",function () {
    ctxD.strokeStyle=myColor.value;
},false);

//清除图像
clearImg.addEventListener("click",function () {
    ctxD.clearRect(0,0,drawing.width,drawing.height);
},false);

//选择线条宽度
ctxD.lineWidth=2;
line.addEventListener("change",function () {
    ctxD.lineWidth=line.value;
},false);
var stop=1;//控制绘画开始、停止
drawing.addEventListener("mousedown",function (event) {
    var  evt = event || window.event;
    var  x = evt.offsetX ;
    var  y = evt.offsetY ;
    ctxD.beginPath();
    ctxD.moveTo(x,y);
    stop=0;
},false);
drawing.addEventListener("mouseup",function () {
    stop=1;
},false);
drawing.addEventListener("mousemove",function (event){
    var  evt = event || window.event;
    var  x = evt.offsetX;
    var  y = evt.offsetY;
    ctxD.lineTo(x,y);
    if(stop==0){
        ctxD.stroke();
    }
},false);



