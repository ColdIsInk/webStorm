(function () {
    $(".nav ul li:eq(1)").addClass("nav_li_hover");
    $(".nav ul li:not(:eq(1))").hover(
        function () {
            $(this).addClass("nav_li_hover");
        },
        function () {
            $(this).removeClass("nav_li_hover");
        }
    )
})();

(function (){
    $(".nav #logout").click(function () {
            location.href="login.html";
        }
    );
})();