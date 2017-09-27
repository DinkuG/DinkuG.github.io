function display(){
    var a = parseInt(document.getElementById("txt1").value);
    var b = parseInt(document.getElementById("txt2").value);
    var c = parseInt(document.getElementById("txt3").value);
    //var d = String(a+b+c);
    document.getElementById("p1").innerHTML = a+b+c;
}