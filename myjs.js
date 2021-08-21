console.log("welcome to js");
//function currying
var multy = function (x) {
  return function (y) {
    return x * y;
  };
};
console.log(multy(4)(3));

//caling function like sum()()()

var sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};
console.log(sum(2)(1)(6)());

var sum1 = a => b => (b ? sum(a + b) : a);
console.log("sum1:", sum1(2)(6)(10)());

const dbounce = function () {
  let cnt = 0;
  return function () {
    cnt += 1;
    console.log("count", cnt);
  };
};
const tests = function () {
  return function () {
    console.log("hi");
  };
};

var x = [{ name: 'baba', gameId: 11 }, { name: 'khasheem', gameId: 23 }, { name: 'mohammed', gameId: 34 }];

let timeOut;
const requestIds = [];
function test() {
  let cnt = 0;
  if (timeOut) {
    clearTimeout(timeOut);
  }
  console.log(requestIds);
  x.forEach((item) => {
    timeOut = setTimeout(() => {
      const found = requestIds.find((id) => id == item.gameId);
      if (!found) {
        console.log("---" + item.name);
        requestIds.push(item.gameId);
      }

    }, 1000 * cnt);
    cnt += 1;
  })

}
test();
setTimeout(() => { test() }, 1005);
setTimeout(() => { test() }, 1008);
// for (var i = 0; i <= 5; i++) {
//   ((i) => {
//     setTimeout(() => { console.log("I" + i) }, 1000 * i);
//   })(i)

// }
