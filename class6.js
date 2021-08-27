//looping statements
// for
// do while
// while
// for in 

//syntax
/*
initialValue
do {
    //statements
    //statements
    //statements
   // stepvalue/increment value
}while(condition)//-->tarvalue*/

var i=10;
do{
    console.log(i);
    i=i-1;
}while(i>=5)

//syntax
/*for(initialValue/startingValue;condtion/targetvalue/endValue;increment/stepvalue){
    //statements
     //statements
}*/
var divCon=document.getElementById("container");
var str="";
           /* str=str+"welcome"+j;

first lopp ---  ""+"welcome"+0--->welcome0 -->  str="welcome0"

second loop--->
     str=str+"welcome"+j;
        ="welcome0"+"welcome"+1---> str="welcome0 welcome1";
3rdloop
   str= str +"welcome "+j;
   "welcome0 welcome1"+"welcome"+2---> str="welcome0 welcome1 welcome2";
4th loop
str=str         +     "welcome "+j;
"welcome0 welcome1 welcome2"+"welcome"+3 --> str="welcome0 welcome1 welcome2 welcome3"  
*/
for(var j=0;j<=10;j++){ 
    str=str+"<h1> welcome "+j+"</h1>";
}
divCon.innerHTML=str;

var divNamesCon=document.getElementById("names");
var a=["raju","ramu","mohan","suresh","naresh"];
var len=a.length;
var namesStr="";

for(var k=0;k<len;k++){
    namesStr=namesStr+"<h1>"+a[k]+"</h1>";
    console.log(a[k]);
}
divNamesCon.innerHTML=namesStr;

//array methods
/*var arr=[20,40,50];
//push  add the element end of the array
arr.push(1);
arr.push(10);
arr.push(12);
arr.push(13);

console.log(arr);

//pop--remove the last element
arr.pop();
console.log(arr);
//--shift remove first element
arr.shift();
console.log(arr);*/
//splice--add remove specific element
//syntax
//remove
//arr.splice(indexValue,numberOfValues/count);
var arr=[20,40,50,23,45,56,100,400,56];
console.log(arr);
//arr.splice(2,1);//it will remove the 2nd index
//arr.splice(3,0,1000);// it will add the value in 3rd index
//arr.splice(3,0,1000,500,600); //it will add multible values
//arr.splice(2,4);
//unshift add the element bigining of the array;
arr.unshift(900);
console.log(arr);

var arr=[2,4,3,6,7,8,9,5,23,45];









