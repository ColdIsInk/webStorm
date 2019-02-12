$("ul li:eq(2),ul li:eq(1)").hide();
$(".describe").hide();
$("#open").click(
    function () {
        if($(".reel").is(":animated")){
        }else {
            $(".reel").animate({
                width:"830px"
            },600)
            $("ul li:eq(1),ul li:eq(2)").show();
            $(".describe").delay(600).slideDown(3000);
        }
    }
)
$("#close").click(
    function () {
        if($(".reel").is(":animated")){
        }else {
            $(".reel").animate({
                width:"100px",
            },100)
            $("ul li:eq(2),ul li:eq(1)").hide();
            $(".describe").hide();
        }
    }
)