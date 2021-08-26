var a=[];
var c=new Array();

var d=[30,4,5,6,7,8,4,3,2,4,7];

var e=new Array(30,7,7,8,7,8,5,5,4);

// array while
var g=0;
var len=d.length;
while(g<len){
    console.log("index valie is:",g,d[g]);
    g++;
}






var divCon=document.getElementById("container");
console.log("---divcon--",divCon);
var myNames="";
var i=0;
while(i<10){
    var even=i%2;
    if(even==0){
        myNames=myNames+"<h1 style='color:blue;background-color: #78aef9;'> bindu </h1>";
    }else{
        myNames=myNames+"<h1 style='color:red;background-color: #f1b5f1;'> bindu </h1>";
    }
    i++;
}
divCon.innerHTML=myNames;



/*while(condition){
    //statements
    //statements
    //statements
    incrementVal/decrement stepValue
}*/

//looping statements
// for
// do while
// while
// for in 











