// 패치로 정보를 가져오고 그 가져온 정보를 비동기 제어하려고 에이싱크 어웨잇 쓰는 것..
// Ajax(제이쿼리) fetch axios 이렇게 하는 일이 비슷
// fetch로 url 정보 불러와서 받아놓고.. async await으로 result값을 반환하는걸 공부하면된다!
// 오늘한건 그게 다다!
// xhr은.. 버려! 퉤
// 저 합성하는것도 공부해야할듯
// promise 사용방법 모르면 바보 딸려오는 then catch... async await...fetch(가지고오다)...

const defaultOptions = {
  method: "GET",
  mode: "cors",
  body: null,
  cache: "no-cache",
  credential: "same-origin",
  redirect: "follow",
  referrerPolicy: "no-referrer",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

// 구조 분해 할당

const { mode, body } = defaultOptions;
console.log(mode);

function sum(a, ...rest) {
  a; //1
  rest; //2,3,4,5
}
sum(1, 2, 3, 4, 5);

export const yurim = async (options = {}) => {
  // 객체 합성과 동시에 뽑아내고있는..destructuring
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: { ...defaultOptions.headers, ...options.headers },
  };

  let response = await fetch(url, restOptions);
  // async await 하면 아래 코드 필요 X
  // response.then((res) => {
  //   console.log(res);
  // });
  // console.log(response);
  if (response.ok) {
    response.data = await response.json();
  }
  return response;
};
// console.log(await yurim());

yurim.get = (url, options) => {
  return yurim({
    url,
    ...options,
  });
};

yurim.post = (url, body, options) => {
  return yurim({
    method: "POST",
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

yurim.put = (url, body, options) => {
  return yurim({
    method: "PUT",
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

yurim.delete = (url, options) => {
  return yurim({
    method: "DELETE",
    url,
    ...options,
  });
};
