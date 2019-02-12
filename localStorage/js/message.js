var add_msg=document.getElementById("add_msg");
var success=document.getElementById("success");
add_msg.onclick=function () {
    var name=document.getElementById("name");
    var key=name.value;
    var content=document.getElementById("content");
    if(name.value!=""&&content.value!=""){
        localStorage.setItem(key,content.value);
        content.value="";
        success.style.opacity="1";
        setTimeout(function () {
            success.style.opacity="0";
        },2000);

    }else if(name.value==""){
        alert("请输入留言者姓名");
        name.focus();
    }else {
        alert("请输入留言内容");
        content.focus();
    }
}