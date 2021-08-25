var student={};
student.name="suresh";
student.age=12;

var emp=new Object();
emp.name="mohan";
emp.age=30;
emp.lastName="kumar";
emp.salary=6000;

emp.fullName=function(reqMessage){
    var totalName=reqMessage+" "+this.name+this.lastName;
    return totalName;
};
var x=100;
var empfullName=emp.fullName("welcome");
console.log("empfullName",empfullName);
function test()
{
    console.log("x----",x);
    var z=10;
    b=30;
    console.log('------',z);
    console.log("--b",b);
    console.log("- this--",this);
}
test();
console.log("----out of the function b",b);
console.log("----",this);

//arrays
var a=[];
var c=new Array();
var d=[30,4,5,6,7,8,4,3,2,4,7];
var e=new Array(30,7,7,8,7,8,5,5,4);
console.log(a)

console.log(c);
console.log("d---",d);
console.log("e---",e);
console.log(d[1]);
console.log(d[2]);
console.log(d[3]);
console.log(d[4]);
console.log(d[5]);
console.log(d[6]);


var h=600;
var g=9000;
var i=950;

if(h>g && h>i){
    console.log("h is big");
}else if(g>h && g>i){
    console.log("g is big");
}else {
    console.log("i is big");
}

var mat=40;
var phy=35;
var che=35;
if(mat>=35 && phy>=35 && che>=35){
    console.log("result pass");
}else{
    console.log("fail");
}



// if(h>g){
//     if(h>i){
//         console.log("h is big");
//     }else{
//         console.log("---i is big");
//     }
// }else if(g>i){
//     console.log("g is big");
// }else{
//     console.log("-i is big");
// }

if(h==g){
    console.log("h and g both are same");
}

/*
logical Opt
&&-->and  


if(condition1 && condition2 && condition && ...){
//statement
}


||--->or

if(condition1 || condition2 || condition3 || ...){
    //statement
}


!--not

*/
//nestedif

/*if(condition){
    if(condition){
        if(condition){
            //statement
        }
    }
}*/

// if(condtion){
//     //statement
// }

//else
/*
if(condition){
    //statement
}else{
     //statement
}
*/
/*
if(condition){
    //statement
}else if(condition){
    //statement
}else if(condition)
{
    //statement
}
.
.
.
else if(condition){
//statement
}else{
//statement
}
*/



//conditional Opt 









