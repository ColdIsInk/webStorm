var mySvg=document.getElementById("mySvg");
var tishi=document.getElementById("tishi");
for(var i=0;i<9;i++){//横线
    var line=document.createElementNS("http://www.w3.org/2000/svg","line");
    line.setAttribute("x1",50);
    line.setAttribute("y1",120+50*i);
    line.setAttribute("x2",699);
    line.setAttribute("y2",120+50*i);
    line.setAttribute("stroke","#ccc");
    mySvg.appendChild(line);
}
for(var i=0;i<12;i++){//纵线
    var line=document.createElementNS("http://www.w3.org/2000/svg","line");
    line.setAttribute("x1",104+54*i);
    line.setAttribute("y1",120);
    line.setAttribute("x2",104+54*i);
    line.setAttribute("y2",570);
    line.setAttribute("stroke","#ccc");
    mySvg.appendChild(line);
}
var income=[//收入1200~4400
    {"yue":"1月","money":1200,"color":"red"},
    {"yue":"2月","money":2000,"color":"orange"},
    {"yue":"3月","money":1600,"color":"yellow"},
    {"yue":"4月","money":3200,"color":"green"},
    {"yue":"5月","money":2800,"color":"indigo"},
    {"yue":"6月","money":4000,"color":"blue"},
    {"yue":"7月","money":3000,"color":"violet"}
];

var m="";
for(var i=0;i<income.length;i++) {
    var x =104+54*i;//x
    var y = 520 - 50 * (income[i].money - 1200)/400;//y
    m = m + " " + x + "," + y;
    var polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    polyline.setAttribute("points", m);
    polyline.setAttribute("stroke", "#000");
    polyline.setAttribute("fill", "none");
    polyline.setAttribute("stroke-width", "2");
    mySvg.appendChild(polyline);
}
for(var i=0;i<income.length;i++) {
    var x = 104 + 54 * i;//x
    var y = 520 - 50 * (income[i].money - 1200) / 400;//y
    var circle=document.createElementNS("http://www.w3.org/2000/svg","circle");
    circle.setAttribute("cx",x);
    circle.setAttribute("cy",y);
    circle.setAttribute("r",8);
    circle.setAttribute("stroke",income[i].color);
    circle.setAttribute("fill","#fff");
    circle.setAttribute("stroke-width",6);
    mySvg.appendChild(circle);
    circle.addEventListener("mouseover",function (event) {
        var  evt = event || window.event;
        var  x = evt.offsetX ;
        var y=evt.offsetY;
        var j=parseInt((x-95)/54);
        tishi.style.left = x +230+ "px";
        tishi.style.top = y +20 + "px";
        tishi.innerHTML=income[j].yue+"<br>收入"+income[j].money+"元";
    },false);
    circle.addEventListener("mouseout",function () {
        tishi.innerHTML=null;
    },false);
}

