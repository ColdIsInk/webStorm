//点击新增，弹出添加用户界面,遮罩层
$(".newAdd").click(function () {
    $("#mask").show();
    $(".addUser").fadeIn(1000);
    $(".addUser .content #username").focus();
});

//点击×和放弃隐藏用户界面
$(".drop").click(function () {
    $("#mask").hide();
    $(".addUser").fadeOut(1000);
});
$(".abandon").click(function () {
    $("#mask").hide();
    $(".addUser").fadeOut(1000);

});
//点击添加，添加用户
$(".add").click(
    function () {
        var dataStr="<tr><td>"+$("table").find("tr").length+"</td>";
        dataStr +="<td>"+$("#username").val()+"</td>";
        dataStr +="<td>"+$("#classCode").val()+"</td>";
        dataStr +="<td>"+$("#birthDay").val()+"</td>";
        dataStr +="<td>"+"<a href='#' title='删除'>删除</a>"+"</td> </tr>";
        $("table").append(dataStr);
        $(".content #username").val("").focus();
        $(".content #classCode").val("");
        $(".content #birthDay").val("");
    });
$("#userList").on("click","tr td a",function () {
    var result=confirm('确定删除本行数据吗？');
    if(!result)
        return false;
    $(this).parent().parent().remove();
    
});
//搜索
$("#select").keyup( function(event) {
    if(event.which!=13) return
    value=$("#select").val();
    $("table tr:not(:first)").hide();
    if(value==""){
        $("table tr:not(:first)").show();
        $("table").find('td:contains("'+value+'")').removeClass("td-bck");
    }
    $("table").find('tr:contains("'+value+'")').show();
    if (value!="") {
        $("table").find('tr:not(:first) td:contains("'+value+'")').addClass("td-bck");
    }
});

