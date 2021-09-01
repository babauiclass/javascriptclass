function showText(){
  document.getElementById("container").innerHTML = "<h1>Welcome</h1>";
}

function showOverText(){
    document.getElementById("msg").innerText="Welcome to Javascript";
}
function removeText(){
    document.getElementById("msg").innerText="";
}
function bindu(){
    document.getElementById("names").innerText="Welcome to Javascript Coding";
}

function getTotal(){
    var aval=document.getElementById("a").value;
    var bval=document.getElementById("b").value;
    var total=Number(aval)+Number(bval);
    document.getElementById("total").value=total;
}

