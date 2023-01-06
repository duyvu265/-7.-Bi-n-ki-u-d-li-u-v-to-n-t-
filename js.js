
function doitien() {
    let a = document.getElementById("1").value;
    console.log(a);
    let b = document.getElementById("2").value;
    let c = document.getElementById("3").value;
    let d;
    if(b=="VND" && c=="USD")
    {
        d = (+a/23000 )+"USD";
    }
    else if(b=="USD" && c=="VND")
    {
        d=+(a *23000 )+ "VND";
    }
    else if(b=="VND" && c=="VND")
        d =  a+ "VND";
    else if(b=="USD" && c=="USD")
        d= a +"USD";


    document.getElementById("viet").innerHTML= d;
}

