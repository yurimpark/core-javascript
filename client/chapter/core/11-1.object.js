/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */

const { getOwnPropertyDescriptors } = require("immer/dist/internal");

/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: "fixed",
  zIndex: 10000,
  top: "50%",
  left: "50%",
  width: "60vw",
  maxWidth: 800,
  height: "40vh",
  minHeight: 280,
  transform: "translate(-50%, -50%)",
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: "user-id-asdA12k2klf",
  name: "yurim",
  email: "yuriming112@gmail.com",
  isSignIn: true,
  permission: "paid", // free || paid
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// console.log(authUser.uid);
// console.log(authUser.name);
// console.log(authUser.email);
// console.log(authUser.isSignIn);
// console.log(authUser.permission);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
// console.log(authUser["uid"]);
// console.log(authUser["name"]);
// console.log(authUser["email"]);
// console.log(authUser["isSignIn"]);
// console.log(authUser["permission"]);

// 계산된 프로퍼티 (calcurate property)
let calculateProperty = "phone"; // phone | tel

function createUser(computedProp = "phone") {
  return {
    name: "unknown",
    email: "unknown@company.io",
    [computedProp]: "010-1234-5678",
  };
}
const user = createUser("phone");

// 프로퍼티 포함 여부 확인
Object.prototype.SIGN = true;

for (let key in authUser) {
  // instance method
  if (Object.prototype.hasOwnProperty.call(authUser, key)) {
    // console.log(key);
  }
}

// 프로퍼티 나열 authUSer : 객체    key만 모아놓은 배열, value만 모아놓은 배열 만들기

let keyArray = Object.keys(authUser);
let valueArray = Object.values(authUser);

// console.log(valueArray);

/* function getPropertiesList(object) {
  let result = [];
  for (const key in object) {
    result.push(key);
  }
  return result;
} */

const getPropertiesList = (object) => Object.keys(object);

let result = getPropertiesList(authUser);

// 프로퍼티 제거(remove) or 삭제(delete)

// 유틸 함수를 만들 수 있을 것 같은데..?
removeProperty();

// 단축 프로퍼티
let name = "선범";
let email = "seonbeom2@euid.dev";
let authorization = "Lv. 99";
let isLogin = true;

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}
