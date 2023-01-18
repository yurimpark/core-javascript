import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./typeOf.js";

const first = getNode(".first");
const second = getNode(".second");

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

// 콜백지옥
delay(() => {
  first.style.top = "-100px";
  delay(() => {
    first.style.transform = "rotate(360deg)";
    delay(() => {
      first.style.top = "0px";
    });
  });
});

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: "성공했습니다.",
  errorMessage: "알 수 없는 오류가 발생했습니다.",
};

// 콜백의 가독성을 위해서 프라미스 사용
export function delayP(options = {}) {
  // defaultOptions
  let config = { ...defaultOptions };
  // let config? = Object.assign({},defaultOptions)  //얕복 위와 같은 것

  if (isNumber(options)) {
    config.timeout = options;
  }

  // 객체 합성 mixin
  if (isObject(options)) {
    config = { ...config, ...options };
  }

  const { shouldReject, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);
  });
}

// delayP()를 썼을 때 반환되는 건 프라미스~
// delayP(3000).then((res) => {
//   console.log(res); // 진짜 성공
// });

// 콜백지옥을 프라미스로
delayP()
  .then(() => {
    first.style.top = "-100px";
    return delayP();
  })
  .then(() => {
    first.style.transform = "rotate(360deg)";
    return delayP();
  })
  .then(() => {
    first.style.top = "0px";
    return delayP();
  });

// async : 일반 함수를 promise로 반환하는 함수로 만든다.
// await : 1. promise가 반환하는 result를 가져오기.
//         2. 코드 실행 흐름 제어

async function delayA() {
  return "완료";
}

let result = delayA();

console.log(result);
