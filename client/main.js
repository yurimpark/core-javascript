import {
  diceAnimation,
  disableElement,
  enableElement,
  getNode,
  clearContents,
  getNodes,
  insertLast,
  visibleElement,
  invisibleElement,
  memo,
  attr,
} from "./lib/index.js";

// [ 주사위 굴리기 ]
// 1. dice 애니메이션 불러오기
// 2. bindEvent 유틸 함수 만들기
// 3. handleRollingDice 함수 만들고 토글로 애니메이션 제어하기
// 4. 변수 보호를 위한 클로저 + IIFE 사용하기

// [ 레코드 리스트 보이기 ]
// 1. handleRecord 함수를 만들기
// 2. disable 활성 유틸 함수 만들기
// 3. handleReset 함수를 만듭니다.
// 4. visible 활성 유틸 함수 만들기
// 5. toggleState 유틸 함수 만들기

// [ 레코드 템플릿 뿌리기 ]
// 1. renderRecordListItem 함수 만들기
// 2. HTML 템플릿 만들기
// 3. 템플릿 뿌리기

// [ 초기화 시키기 ]
// 1. clearContent 로 정보 지우기
// 2. total, count 초기화
// 3. 스크롤 밑으로 보내기
// 4. 메모이제이션 패턴

// const rollingDiceButton = getNode(".buttonGroup > button:nth-child(1)");
// const recordButton = getNode(".buttonGroup > button:nth-child(2)");
// const resetButton = getNode(".buttonGroup > button:nth-child(3)");

// 배열 구조분해 할당해줘서 위처럼 3줄로 노가다 안해도 되게 해줌
const [rollingDiceButton, recordButton, resetButton] = getNodes(
  ".buttonGroup > button"
);

const recordListWrapper = getNode(".recordListWrapper");

memo("@tbody", () => getNode(".recordListWrapper tbody"));

/* let id = setInterval(() => {
  diceAnimation();
}, 1000);

clear 만나면 중지
clearInterval(id);
clearTimeout(id); */

/* const handleRollingDice = () => {
  let stopAnimation;
  let isRolling = false;
  return () => {
    if (!isRolling) {
      stopAnimation = setInterval(diceAnimation, 500);
      // recordButton.disabled = true;
      disableElement(recordButton);
      disableElement(resetButton);
    } else {
      clearInterval(stopAnimation);
      // recordButton.disabled = false;
      enableElement(recordButton);
      enableElement(resetButton);
    }
    isRolling = !isRolling;
  };
}; */

/* -------------------------------------------------------------------------- */
/* render                                                                     */
/* -------------------------------------------------------------------------- */

let count = 0;
let total = 0;

function renderRecordListItem() {
  let diceValue = Number(attr(memo("cube"), "data-dice"));

  let template = /* html */ `
  <tr>
              <td>${count++}</td>
              <td>${diceValue}</td>
              <td>${(total += diceValue)}</td>
            </tr>`;

  insertLast(memo("@tbody"), template);
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight;
}

/* -------------------------------------------------------------------------- */
/* event
/* -------------------------------------------------------------------------- */

//IIFE

const handleRollingDice = (() => {
  let isRolling = false;
  let stopAnimation;

  return () => {
    if (!isRolling) {
      stopAnimation = setInterval(diceAnimation, 300);
      disableElement(recordButton);
      disableElement(resetButton);
    } else {
      clearInterval(stopAnimation);
      enableElement(recordButton);
      enableElement(resetButton);
    }

    isRolling = !isRolling;
  };
})();

const handleRecord = () => {
  visibleElement(recordListWrapper);
  renderRecordListItem();
};

const handleReset = () => {
  count = 0;
  total = 0;
  invisibleElement(recordListWrapper);
  clearContents(memo("@tbody"));
};

rollingDiceButton.addEventListener("click", handleRollingDice);
recordButton.addEventListener("click", handleRecord);
resetButton.addEventListener("click", handleReset);

// let eventOff = bindEvent(rollingDiceButton, 'click', handleRollingDice)
