function psw() {
    var password=document.getElementById("password");
    var repassword=document.getElementById("repassword");
    if(password.value!=repassword.value){
        alert("两次密码不一样!");
    }
}
function user() {
    var username=document.getElementById("username");
    var user=/^\w{4,10}$/g;
    if(user.test(username.value)!=true){
        alert("用户名错误，请输入4~10位的字母、数字、下划线！");
    }
}