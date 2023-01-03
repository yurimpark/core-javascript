/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */

// 함수 선언문
function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calcTotal(10000, 8900, 1360, 2100);
let resultY = calcTotal(21500, 3200, 9800, 4700);
let resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  //arguments는 유사배열
  console.log(arguments);

  let total = 0;

  //static method
  let arr = Array.from(arguments);

  console.log(arr);

  /*   for (let value of arguments) {
    total += value;
  } */

  /*  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  } */

  return total;

  // return moneyA + moneyB + moneyC + moneyD;
};

console.log(calculateTotal(100, 500, 300, 150, 400, 150));

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현) 식
let callbackFunctionExpression = function (url, resolve, reject) {
  // if (typeof url === "string" && url.includes('http') && url.includes('www')) {
  if (typeof url === "string" && url.match(/http.+www/)) {
    resolve(url);
  } else {
    reject();
  }
};

callbackFunctionExpression(
  "https://www.naver.com",
  function (url) {
    console.log(`${url} 해당 페이지로 이동합니다.`);
  },
  function () {
    // console.log("url 입력 정보가 올바르지 않습니다.");
    throw new Error("url 입력 정보가 올바르지 않습니다.");
  }
);

/* 
forEach 는 내부에 이런 식으로 구현되어 있는...것이다...
forEach(function(currentValue, index, array){}, thisArg)

arr.forEach(function(item, index){})
 */

// 함수 선언문 vs. 함수 (표현)식
function aa() {}
const bb = function () {};

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

// var 함수 스코프
// let, const 블록 스코프

(function () {
  let x = 1;
})();

(function () {
  console.log("hi!!");
})();
