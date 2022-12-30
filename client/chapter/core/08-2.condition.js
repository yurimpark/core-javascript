/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let age = 20;

// if (age >= 14 && age <= 90) {
// }

let a = 10;
let b = "";
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && " " && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || "" || [2, 3].length || { thisIsTruthy: true };

let userName = prompt("사용자 이름을 입력해주세요", "");
let pw;

// if (userName === "Admin") {
//   pw = prompt("비밀번호를 입력해주세요", "");
//   if (pw === "TheMaster") {
//     prompt("환영합니다!");
//   } else if (pw !== "TheMaster") {
//     prompt("인증에 실패하였습니다.");
//   }
// } else {
//   prompt("취소되었습니다.");
// }

// 대소문자 상관없이 입력받는 방법

if (userName?.toLowerCase() === "admin") {
  pw = prompt("비밀번호를 입력해주세요", "");
  if (pw?.toUpperCase() === "THEMASTER") {
    console.log("환영합니다!");
  } else {
    console.log("취소되었습니다.");
  }
} else if (userName === "" || userName === null) {
  console.log("취소되었습니다.");
} else {
  console.log("인증되지 않은 사용자입니다.");
}
