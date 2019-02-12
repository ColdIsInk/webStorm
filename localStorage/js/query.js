function loadStorage(id) {
    var result="";
    for(var i=0;i<localStorage.length;i++){
        var key=localStorage.key(i);
        var content=localStorage.getItem(key);
        result+="<tr><td>"+key+"</td>";
        result+="<td>"+content+"</td></tr>";
    }
    $("table").append(result);
}
function queryName() {
    $("table tr:not(:first)").remove();
    var result="";
    var name=document.getElementById("name").value;

    if(name!=""){
        var content=localStorage.getItem(name);
        result+="<tr><td>"+name+"</td>";
        result+="<td>"+content+"</td></tr>";
        $("table").append(result);
    }
}