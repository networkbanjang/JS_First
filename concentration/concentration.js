$wrapper = document.querySelector('#wrapper');
let total = 1;
while (total % 2 != 0) {
  total = parseInt(prompt('카드 개수를 짝수로 입력하세요(최대 20).'));
}
const colors = [
  'red', 'orange', 'yellow', 'green', 'white',
  'pink', 'cyan', 'violet', 'gray', 'black',
];
let colorSlice = colors.slice(0, total / 2);
let colorCopy = colorSlice.concat(colorSlice);
let shuffled = [];
let clicked = [];
let completed = [];
let clickable = false;
let startDate;

function shuffle() { // 피셔-예이츠 셔플
  for (let i = 0; colorCopy.length > 0; i += 1) {
    const randomIndex = Math.floor(Math.random() * colorCopy.length);
    shuffled = shuffled.concat(colorCopy.splice(randomIndex, 1));
  }
}
function createCard(i) { //div.card > div.card-inner >(div.card-front + div.car-back)
  const card = document.createElement('div');
  card.className = 'card';   //.card 태그 생성
  const cardInner = document.createElement('div');
  cardInner.className = 'card-inner'; //.card-inner 태그 생성
  const cardFront = document.createElement('div');
  cardFront.className = 'card-front' //.card-front 태그 생성
  const cardBack = document.createElement('div');
  cardBack.className = 'card-back'; //.card-back 태그 생성
  cardBack.style.backgroundColor = shuffled[i];
  cardInner.appendChild(cardFront);
  cardInner.appendChild(cardBack);
  card.appendChild(cardInner);
  return card;
}
function onClickCard() {
  if (!clickable || completed.includes(this) || clicked[0] === this)
    return;
  this.classList.toggle('flipped');
  clicked.push(this);
  if (clicked.length !== 2) {
    return;
  }
  clickable = false;
  const firstBackColor = clicked[0].querySelector('.card-back').style.backgroundColor;
  const secondBackColor = clicked[1].querySelector('.card-back').style.backgroundColor;
  if (firstBackColor === secondBackColor) {
    completed = completed.concat(clicked);
    clicked = [];
    clickable = true;
    if (completed.length === total) {
      setTimeout(() => {
        const endDate = new Date();
        alert(`완성 시간: ${Math.floor((endDate - startDate) / 1000)}초`);
      }, 1000);
    }
    return;
  }
  setTimeout(() => {
    clicked[0].classList.remove('flipped');
    clicked[1].classList.remove('flipped');
    clicked = [];
    clickable = true;

  }, 700);

}

function startGame() {
  startDate = new Date();
  clickable = false;
  shuffle();
  for (let i = 0; i < total; i++) {
    const card = createCard(i);
    card.addEventListener('click', onClickCard);
    $wrapper.appendChild(card);
  }
  document.querySelectorAll('.card').forEach((card, index) => { // 초반 카드 공개
    setTimeout(() => {
      card.classList.add('flipped');
    }, 1000 + 100 * index);


  });

  setTimeout(() => {
    document.querySelectorAll('.card').forEach((card) => {  //카드 감추기
      card.classList.remove('flipped');
      clickable = true;
    })
  }, 5000);
}


startGame();

function resetGame() {
  $wrapper.innerHTML = '';
  colorCopy = colors.concat(colors);
  shuffled = [];
  completed = [];
}