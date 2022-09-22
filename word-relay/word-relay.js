setNumber();  //참가자 인원수 구하기

const $input = document.querySelector('input')
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');



let word;  //제시어
let newWord; //새로 입력한 단어

const onClickButton = () => {
  if (newWord.length != 3) {  //3자릿수만 가능하게
    alert('3자릿수만 가능합니다.');
  } else {
    if (!word || word[word.length - 1] === newWord[0]) {  //제시어가 비어있는가 또는 제시어의 끝 글자와 새로운 제시어의 끝 글자가 일치하는가
      word = newWord;
      $word.textContent = word;
      const order = Number($order.textContent);
      if (order + 1 > number)
        $order.textContent = 1;
      else
        $order.textContent = order + 1;
    } else {
      alert('잘못된 입력입니다.');
    }
  }
  $input.value = "";
  $input.focus();

};

document.querySelector('button').addEventListener('click', onClickButton);
$input.addEventListener('input', (event) => {
  newWord = event.target.value;
})

function setNumber() {
  const number = parseInt(prompt('몇명이 참가하나요?', 3));
  if (number)
    alert(`${number}명의 참가자가 참가합니다.`);
  else{
    alert("입력값이 바르지 않습니다.");
    setNumber();}  //재귀를 통한 반복
}