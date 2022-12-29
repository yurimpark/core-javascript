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
let didWatchMovie = "yes";

// 영화 볼거니?
let goingToWatchMovie = "no";

if (didWatchMovie.includes("yes")) {
  // if 문(statement)
  alert("그 영화 재밌더라");
} else if (goingToWatchMovie === "yes") {
  // else if 복수 조건 처리
  alert("나랑 같이 보자");
} else {
  // else 절(caluse)
  alert("음.. 난 안볼라고");
}

// 조건부 연산자
let movieMessage = didWatchMovie.includes("yes")
  ? "그 영화 재밌더라"
  : goingToWatchMovie === "yes"
  ? "나랑 같이 보자"
  : "음.. 난 안볼라고";

// 멀티 조건부 연산자 식
