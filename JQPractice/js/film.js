function queryFilm() {

    var temp="";
    $.ajax({
        type:"POST",
        url:"http://api.douban.com/v2/movie/in_theaters",
        async:false,
        dataType:"jsonp",

        error:function () {
            alert("请求出错");
        },
        success:function (e) {
              for(i=0;i<12;i++){
                  temp += "<div id='list" + i + "' class='right'><ul><li class='logo'>" +
                      "<img src='" + e.subjects[i].images.small + "' alt='sorry！没找到图片'></li>" +
                      "<li class='detail'>" +
                       "<p><a href='"+e.subjects[i].alt+"' target='_blank'>" + e.subjects[i].title + "</a></p>" +
                       "<p><span>导演：</span><a href='"+e.subjects[i].directors[0].alt+"' target='_blank'>" + e.subjects[i].directors[0].name+"</a></p>" +
                       "<p><span>主演：</span><a href='"+e.subjects[i].casts[0].alt+"' target='_blank'>" + e.subjects[i].casts[0].name + "</a>" +
                       "&emsp;<a href='"+e.subjects[i].casts[1].alt+"' target='_blank'>" + e.subjects[i].casts[1].name + "</a>" +
                       "&emsp;<a href='"+e.subjects[i].casts[2].alt+"' target='_blank'>" + e.subjects[i].casts[2].name + "</a></p>" +
                      "<p><span>豆瓣评分：</span>"+e.subjects[i].rating.average+"</p></li></ul></div>"
              }
            $("#list").hide()
            $(".left").append(temp);
        }
    });

}