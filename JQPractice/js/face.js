$(function () {
    $("button").click(processImage);
});
var zoomRate=1;//脸部识别框的放大率
function processImage() {
    var subscriptionKey = "b0ace215a1ec45f6b837462b5f912e38";//密钥，需在微软平台申请
    var uriBase = "https://api.cognitive.azure.cn/face/v1.0/detect";//微软人脸识别api

    // 请求参数
    var params = {
        "returnFaceId": "true",
        "returnFaceLandmarks": "false",
        "returnFaceAttributes": "age,gender,glasses,emotion",
    };

    // 更换图片
    var sourceImageUrl = $("#inputImage").val();
    $("#sourceImage").prop("src", sourceImageUrl);
    $(".area").remove();
    guessZoomRate(sourceImageUrl,setRate);

    // 通过ajax请求微软人脸识别api
    $.ajax({
        url: uriBase + "?" + $.param(params),
        // 请求头
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Content-Type", "application/json");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
        },
        type: "POST",
        // 请求数据
        data: '{"url": ' + '"' + sourceImageUrl + '"}',
    }).done(function (data) {
        // Show formatted JSON on webpage.
        //$("#responseTextArea").val(JSON.stringify(data,null,2));

        for(var index in data){//添加人脸探测的矩形框
            $("<div></div>").addClass("area").attr("id",data[index].faceId).appendTo("#pics");
            $("#"+data[index].faceId).css({
                width: data[index].faceRectangle.width * zoomRate,
                height: data[index].faceRectangle.height * zoomRate,
                left: data[index].faceRectangle.left * zoomRate,
                top: data[index].faceRectangle.top * zoomRate,
            }).show();
        }//end for

        $(".area").hover(function (e) {//给矩形框添加事件
            var index=$(this).index()-1;
            $("#tooltip li:first").text(data[index].faceAttributes.gender);
            $("#tooltip li:eq(1)").text(Math.floor(data[index].faceAttributes.age) + "岁");
            $("#tooltip li:eq(2)").text("脸宽："+data[index].faceRectangle.width+"px");
            $("#tooltip li:eq(3)").text("脸长："+data[index].faceRectangle.height+"px")
            $("#tooltip li:gt(3)").remove();
            var emotion = data[index].faceAttributes.emotion;
            var ownEms = [];
            for (var prop in emotion) {
                if (emotion[prop] >= 0.1) {
                    ownEms.push(prop);
                }
            }
            for (var i = 0; i < ownEms.length; i++) {
                $("<li></li>").text(ownEms[i] + "：" + emotion[ownEms[i]]).appendTo($("#tooltip ul"));
            }
            $("#tooltip").css({
                top: e.clientY + 15,
                left: e.clientX + 10,
            }).show();
        }, function () {
            $("#tooltip").hide();
        })
    }).fail(function (err) {
        console.log(err);
    });
};

//计算图片缩放比例，用于面部矩形框的正确放置
function guessZoomRate(url,callback) {
    var pic_real_width = 0;
    $("<img/>")
        .attr("src", url).load(function () {
        pic_real_width = this.width;
        callback&&callback(400 / pic_real_width);//因为load事件是异步的，所以需要引入回调函数解决参数设置问题
    });
}

function setRate(rate) {
    zoomRate=rate;
}
