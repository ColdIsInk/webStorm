
$(':text').bind('input', function() {
     value=$(":text").val();
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