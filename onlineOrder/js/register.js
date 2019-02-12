
(function () {
    $(".register #reg").click(function () {
            var user=/^\w{4,10}$/g;
            var phone=/^1[3578]\d{9}/g;
            var psw=/^\w{6,12}/g;
            if($(".register #username").val()==""){
                alert("请输入用户名");
                $(".register #username").focus();
                return;
            }
            if(user.test($(".register #username").val())!=true){
                alert("用户名错误，请输入4~10位的字母、数字、下划线！");
                $(".register #username").val("").focus();
                return;
            }
            if($(".register #password").val()==""){
                alert("密码不能为空，请输入密码");
                $(".register #password").focus();
                return;
            }
            if(psw.test($(".register #password").val())!=true){
                alert("密码格式错误，请输入6~10位的字母、数字、下划线！");
                $(".register #password").val("").focus();
                return;
            }
            if($(".register #repassword").val()!=$(".register #password").val()) {
                alert("两次密码不一样,请重新输入");
                $(".register #password").val("").focus()
                $(".register #repassword").val("");
                return;
            }
            if($(".register #phone").val()==""){
                    alert("联系电话不能为空，请输入联系电话");
                    $(".register #phone").focus();
                    return;
            }
            if(phone.test($(".register #phone").val())!=true){
                alert("联系电话格式错误请重新输入");
                $(".register #phone").focus();
                return;
            }
            location.href("login.html");
        });
})();