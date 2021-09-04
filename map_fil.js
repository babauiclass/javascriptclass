
var testArr=[10,11,12,13,14,26,16,17,18,19,20];

function double(val){
  var res=val*2;
  return res;
}
function trip(val){
  return val*3;
}



var dbArr=testArr.map(double);
var binduArr=testArr.map(trip);


  console.log("d",dbArr);
  console.log("trip",binduArr);

  function getEven(val){
    var ev=val%2;
    if(ev==0){
      return val;
    }
  }

//var res=getEven(4);

  
  //filter
  var filArr=testArr.filter(getEven);
  console.log("even fil",filArr);

  var filArr1=testArr.filter(function (val){
    var ev=val%2;
    if(ev==0){
      return val;
    }
  });
console.log("ne fil",filArr1);
// var i=0;
// var len=testArr.length;
// while(i<len){
//   var val=testArr[i];
//  var ans=double(val);
//   dbArr.push(ans);
//   i++;
// }
// console.log(dbArr);


//testArr.map()

// var val=testArr[0];
// var res=val%2;
// if(res==0){
//     console.log("even",val);
// }






