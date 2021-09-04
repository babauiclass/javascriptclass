
var testArr=[10,11,12,13,14,26,16,17,18,19,20];
var i=0;
var totalCount=testArr.length;
var val;
var res;
     
while(i<totalCount){
  val=testArr[i];
  res=val%2;
  if(res==0){
    console.log("even number",val);
  }
    i++;
}

// var val=testArr[0];
// var res=val%2;
// if(res==0){
//     console.log("even",val);
// }






