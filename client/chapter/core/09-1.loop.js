/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */

/* let i = 0;

while (i < 10) {
  console.log("안녕");
  i++;
} */

const frontEndDev = [
  "HTML",
  "CSS",
  "SVG",
  "JavaScript",
  "jQuery",
  "React",
  "Redux",
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

/* console.log(frontEndDev[0]);
console.log(frontEndDev[1]);
console.log(frontEndDev[2]);
console.log(frontEndDev[3]);
console.log(frontEndDev[4]);
console.log(frontEndDev[5]); */

let z1 = performance.now();

let i = 0;

while (i < frontEndDev.length) {
  let value = frontEndDev[i];

  // console.log(i);

  console.log(value);

  i++;
}

let z2 = performance.now();

console.log(z2 - z1);

/* let i = 0;

while (i < frontEndDev.length) {
  let value = frontEndDev.length[i];
  console.log(value);
  i++;
} */

//? 내가 한 것
/* let i = 6;

while (i >= 0) {
  console.log(frontEndDev[i]);
  i--;
} */

//? 쌤이 한 것
/* let i = frontEndDev.length - 1;
while (i >= 0) {
  console.log(frontEndDev[i]);
  i--;
} */

/* //? 생성자 없이 뒤에서부터 뽑아보기
while (frontEndDev.length) {
  console.log(frontEndDev.pop());
} */

//? 생성자 없이 앞에서부터 뽑아보기
/* while (frontEndDev.length) {
  console.log(frontEndDev.shift());
}
 */

// let copyArray = [...frontEndDev];
let copyArray = frontEndDev.slice();

while (copyArray.length) {
  console.log(copyArray.pop());
}

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

// while 문 (역순환 : 역방향)

// 성능 진단 : 순환 vs. 역순환
