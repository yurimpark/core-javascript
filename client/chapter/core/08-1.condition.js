/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

let number = +prompt("숫자를 입력하세요.");
if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else {
  alert(0);
}

let message = number > 0 ? "1" : number < 0 ? "-1" : "아무것도 아닙니다.";
console.log(message);

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie;

// 영화 볼거니?
let goingToWatchMovie;

// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
