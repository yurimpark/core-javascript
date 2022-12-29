/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

const MORNING = "아침",
  LUNCH = "점심",
  DINNER = "저녁",
  NIGHT = "밤",
  LATE_NIGHT = "심야",
  DAWN = "새벽";

/* let thisTime = prompt(
  "아침, 점심, 저녁, 밤, 심야, 새벽 중 1가지를 입력하세요."
); */
/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

/* switch (thisTime) {
  case MORNING:
    alert("컴퓨터를 켜고 수업을 듣는다.");
    break;
  // 조건 유형(case): '점심'
  // '자주 가는 식당에 가서 식사를 한다.'
  case LUNCH:
    alert("쉬다가 점심을 먹는다.");
    break;
  // 조건 유형(case): '저녁'
  // '동네 한바퀴를 조깅한다.'
  case DINNER:
    alert("수업끝나고 운동하러 간다.");
    break;
  // 조건 유형(case): '밤'
  // '친구에게 전화를 걸어 수다를 떤다.'
  case NIGHT:
    alert("평일 스터디에 참여한다.");
    break;
  // 조건 유형(case): '심야'
  // 조건 유형(case): '새벽'
  // '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'
  case LATE_NIGHT:
  case DAWN:
    alert("쿨쿨 자는중~");
    break;
} */

/* switch문 → if문 변환 --------------------------------------------------- */

/* if (thisTime === MORNING) {
  alert("컴퓨터를 켜고 수업을 듣는다.");
} else if (thisTime === LUNCH) {
  alert("쉬다가 점심을 먹는다.");
} else if (thisTime === DINNER) {
  alert("수업끝나고 운동하러 간다.");
} else if (thisTime === NIGHT) {
  alert("평일 스터디에 참여한다.");
} else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
  alert("쿨쿨 자는중~");
} else {
  alert("잘못 입력하였습니다.");
} */

/* switch vs. if -------------------------------------------------------- */

let number = 5;

// 0~6의 값을 받는다.

/* 0='일'
1='월'
2='화'
3='수'
4='목'
5='금'
6='토' */

function getRandom(n) {
  return Math.round(Math.random() * n);
}

function getDay(dayValue) {
  switch (dayValue) {
    case 0:
      return "일";
    case 1:
      return "월";
    case 2:
      return "화";
    case 3:
      return "수";
    case 4:
      return "목";
    case 5:
      return "금";
    case 6:
      return "토";
  }
}

let result = getDay(getRandom(6));

alert(result);
