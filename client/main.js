/* global gsap */

import {
  xhrData,
  insertLast,
  xhrPromise,
  yurim,
  delayP,
  createUserCard,
  getNode,
  renderUserCard,
  changeColor,
  renderSpinner,
  renderEmptyCard,
  attr,
} from "./lib/index.js";

/* xhrPromise
  .get("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    insertLast(document.body, JSON.stringify(res));
  })
  .catch((err) => {
    console.log(err);
  }); */

/* xhrData.get(
  'https://jsonplaceholder.typicode.com/users/1',
  (res)=>{
    insertLast('body',JSON.stringify(res))
  },
  (err)=>{
    insertLast('body','데이터 로딩에 실패했습니다.')
  }
)
 */

/*
 */

// async function render() {
//   await delayP(2000);
//   let response = await yurim.get(
//     "https://jsonplaceholder.typicode.com/users/1"
//   );
//   console.log(response.data);
// }

// render();

// 유저 카드 생성
const userCardContainer = getNode(".user-card-inner");

// rendingUserList 함수 만들기
async function rendingUserList() {
  renderSpinner(userCardContainer);

  try {
    await delayP(2000);
    getNode(".loadingSpinner").remove();
    // ajax (yurim) get user List
    // then()의 기능을 수행하는 것이 await. 코드의 실행 흐름 제어.
    let response = await yurim.get("http://localhost:3000/users");

    let userData = response.data;

    // console.log(userData);
    // createUserCard(userData);
    userData.forEach((data) => renderUserCard(userCardContainer, data));
    console.log(gsap.utils.toArray(".user-card"));

    changeColor(".user-card");

    gsap.to(gsap.utils.toArray(".user-card"), {
      x: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.2,
    });
  } catch (error) {
    console.log(error);
    renderEmptyCard(userCardContainer);
  }
}
rendingUserList();

// userList.js로 간다
// renderUserCard 함수 만들기
// 만들어진 함수 안에 createUserCard를 던지고
// renderUserCard함수를 사용했을 때 렌더링이 잘 될 수 있도록!

// 삭제 버튼을 클릭하면 콘솔창에 '삭제'글자가 출력될 수 있도록 만들어보기.

function handler(e) {
  let deleteButton = e.target.closest("button");
  let article = e.target.closest("article");
  if (!deleteButton || !article) return; // 버튼이 아니거나 누른 대상의 인접한 대상이 article이 아니면 실행 안함
  let id = attr(article, "data-index").slice(5);
  yurim.delete(`http://localhost:3000/users/${id}`).then(() => {
    // 창을 아예 비워주고
    userCardContainer.innerHTML = "";
    // 유저리스트 다시 불러주기
    rendingUserList();
  });
  //console.log(id);
}

userCardContainer.addEventListener("click", handler);
