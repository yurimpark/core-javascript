/* --------------------------------------------------------------------- */
/* Variables                                                             */
/* --------------------------------------------------------------------- */
// 아래 주석을 넣으면 해당 파일의 eslint 설정이 꺼진다.
/* eslint no-unused-vars:'off'*/

let admin, name;
name = "John";
admin = name;
alert(admin);

let ourPlanet = "earth";
let curruntUserName = "yurim";

{
  /*let 변수는 바뀔 가능성이 있는 것
const 상수는 바뀔 가능성이 없는 고정된 것
대문자 찐 상수는 하드코딩한 것*/
}

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
let countxPrice;

// - 구매 제품 가격의 총 합
let totalPrice;

// - 1년 기준 일(day)자 수
const DAYS_PER_YEAR = 365;

// - 구매 결제 여부
let isPayment = false;
let hasClassName = false;

// - 구매 결제 내역
let PaymentHistory;

// - 브랜드 접두사
const BRAND_PREFIX = "samsung";

// - 오늘의 운세
let fortuneOfToday;

// - 상품 정보
let productInfo;

const PANDING = "api/panding";
const LOADING = "api/loading";
const FULFILLED = "api/fulfilled";
const REJECTED = "api/rejected";

/* -------------------------------------------------------------------------- */
/*         Lexical Environment                                                */
/* -------------------------------------------------------------------------- */

/* variables ----------------------------------------------------------- */

/* constant variables -------------------------------------------------- */
