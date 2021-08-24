
var a=10;

function addition(reqA,reqB){
    var a=reqA;
    var b=reqB;
    var sum=a+b;
    console.log("a + b value is",sum);
}

addition(20,30);
addition(100,30);
addition(200,300);
// function 
/*
function addtion1(){
    var a=10;
    var b=30;
    var c=a*b;
    return c;
}*/


var sum=function(){
var a=20;
var b=30;
var c=a+b;
console.log("c value is ",c);
}
sum();




var emp={name:"raj",
age:30,
des:"manager",
sal:5000,
lastName:"kumar",
fullName:function(){
   return this.name+this.lastName; 
}
};

var fullName=emp.fullName();
console.log(fullName);

function addTextToElement(){
    var msgEle=document.getElementById("msg");
    msgEle.innerText="<h1> Welcome <h1>";

    var divCon=document.getElementById("container");
    divCon.innerHTML="<h1> Hi Welcome</h1>";

}
addTextToElement();