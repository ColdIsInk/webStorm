(function () {
    $(".next").click(
        function () {
            if($(".login #username").val()==""){
                alert("请输入用户名");
                $(".login #username").focus();
                return;
            }
            if($(".login #password").val()==""){
                alert("请输入密码");
                $(".login #password").focus();
                return;
            }
            location.href="index.html";
        }
    );
})();
