/* readyState
0: uninitalized // 초기화
1: loading // 로딩
2: loaded // 로딩 완료
3:interative // 인터렉티브
4:complete // 완료
 */

import { typeError } from "../error/typeError.js";

// xhrData 함수 만들기 method, url
// 아래처럼 구조분해하면 초기값 설정 가능
export function xhrData({
  url = "",
  method = "GET",
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    "Content-Type": "application/json",
    "Acess-Control-Allow-Origin": "*",
  },
} = {}) {
  // const { method, url, body } = options;
  const xhr = new XMLHttpRequest();

  //  비동기 통신 오픈
  xhr.open(method, url);

  //  Object.entries(headers) 객체의 키와 밸류를 배열로 반환
  // console.log(Object.entries(headers));

  // ? Object.entries()자체가 배열을 반환하기 때문에 headers 객체에 대해 forEach를 돌 수 있음
  // ? Object.entries() 메서드는 for...in와 같은 순서로 주어진 객체 자체의 열거 가능한 속성 [key, value] 쌍의 배열을 반환

  // headers의 key와 value를 배열로 반환해서 헤더요청함
  // Object.entries(headers).forEach(([key, value]) => {
  //   console.log(key, value);
  // ! setRequestHeader()가 header를 request할 때 세팅해주는 함수
  //   xhr.setRequestHeader(key, value);
  // });

  // readyState의 값이 바뀔때마다 일어나는 이벤트
  xhr.addEventListener("readystatechange", () => {
    // 객체 구조 분해 할당
    const { status, readyState, response } = xhr;

    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        // 완료(4:complete) 되었을 때만!
        console.log("통신 성공");
        onSuccess(JSON.parse(response));

        // JSON.parse()를 이용해서 찐 객체로 만들어줌(문자니까 객체화 시켜준 것)
        console.log(JSON.parse(response));
      }
    } else {
      // console.log("통신 실패");
      onFail("통신 실패");
    }
  });
  // 서버에 요청 보내기
  xhr.send(JSON.stringify(body));
}

// 객체를 받고싶을 때
/* xhrData({
  url: "https://jsonplaceholder.typicode.com/user/1",
  onSuccess: (result) => {
    console.log(result);
  },
  onFail: (err) => {
    console.log(err);
  },
}); */

// ? shorthand property

xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    // 초기값이 GET이라서 안넣어줌
    url,
    onSuccess,
    onFail,
  });
};

xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "POST",
    body,
    url,
    onSuccess,
    onFail,
  });
};

xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "PUT",
    body,
    url,
    onSuccess,
    onFail,
  });
};

xhrData.delete = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "DELETE",
    url,
    onSuccess,
    onFail,
  });
};

// xhrData.get(
//   "https://jsonplaceholder.typicode.com/users/1",
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

/* xhrData("POST", "https://jsonplaceholder.typicode.com/users", {
  name: "유림",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
}); */

// promise API

const defaultOptions = {
  url: "",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: null,
};

export function xhrPromise(options = {}) {
  const xhr = new XMLHttpRequest();

  const { method, url, body, headers } = Object.assign(
    {},
    defaultOptions,
    options
  );

  if (!url) typeError("서버와 통신할 url 인자는 반드시 필요합니다.");

  xhr.open(method, url);

  xhr.send(body ? JSON.stringify(body) : null);

  return new Promise((resolve, reject) => {
    xhr.addEventListener("readystatechange", () => {
      const { status, readyState, response } = xhr;

      if (status >= 200 && status < 400) {
        if (readyState === 4) {
          resolve(JSON.parse(response));
        }
      } else {
        reject("에러입니다.");
      }
    });
  });
}

xhrPromise.get = (url) => {
  return xhrPromise({ url });
};
xhrPromise.post = (url, body) => {
  return xhrPromise({ url, body, method: "POST" });
};
xhrPromise.put = (url, body) => {
  return xhrPromise({ url, body, method: "PUT" });
};
xhrPromise.delete = (url) => {
  return xhrPromise({ url, method: "DELETE" });
};
