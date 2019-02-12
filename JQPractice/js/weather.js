$("#province").attr("data-province","重庆市")
$("#county").attr("data-county","巴南区")
$(".city").distpicker();
function search() {
    $(".content").html("");
    var county=$("#province").val()+$("#county").val();
    var weather="";
    var attention="";
    var time;
    if(county==""){
        alert("请输入您想查询的城市！");
        return;
    }
    $.ajax({
        type:"POST",
        url:"http://api.map.baidu.com/telematics/v3/weather?location="
               + county + "&output=json&ak=ohA7QHfg0BBrpiY4kyuIAAsD",
        async:false,
        dataType:"jsonp",
        error:function () {
            alert("请求出错");
        },
        success:function (e) {

            time="日期："+e.date+"&emsp;城市："+county;
            $("#time").html(time);
            for(var i=0;i<4;i++){
                weather+="<li><p>"+e.results[0].weather_data[i].date+"</p>" +
                    "<p><img src=' "+e.results[0].weather_data[i].dayPictureUrl+"'></p>" +
                    "<p>"+e.results[0].weather_data[i].temperature+"</p>" +
                    "<p>"+e.results[0].weather_data[i].weather+"</p>" +
                    "<p>"+e.results[0].weather_data[i].wind+"</p></li>"
                attention+="<h4>"+e.results[0].index[i].tipt+"</h4>&emsp;"+e.results[0].index[i].des+"<br>";
            }
                $(".content").append(weather);
                $(".attention").html(attention);

        }
    })
}