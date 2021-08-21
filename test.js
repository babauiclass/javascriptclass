var a = 10;
var b = 30;
var c = a + b;
console.log("c value is", c);
/*function addtion() {
    var a = 30;
    var c = 40;
    var addVal = a + c;
    console.log(addVal);

}
addtion();*/

/*function addSum(reqA, reqB) {
    var a = reqA;
    var b = reqB;
    var c = a - b;
    console.log(c);

}
addSum(120, 304);
addSum(30, 50);
addSum(1000, 50);*/


function mulValue(reqA, parmB) {
    var a = reqA;
    var b = parmB;
    var c = a * b;
    return c;
}

var res = mulValue(4, 5);
console.log(res);
res = mulValue(10, 50);
console.log(res);