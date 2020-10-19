'use strict';

let playerTurn = 'circle';

const addIcon = (event) => {
  if (playerTurn === 'circle') {
    event.target.classList.add('board__field--circle');
    event.target.setAttribute('disabled', true);
    playerTurn = 'cross';
    document.querySelector('.icon').src = 'images/cross.svg';
  } else if (playerTurn === 'cross') {
    event.target.classList.add('board__field--cross');
    event.target.setAttribute('disabled', true);
    playerTurn = 'circle';
    document.querySelector('.icon').src = 'images/circle.svg';
  }
};
const btnElm = document.querySelectorAll('button');
for (let i = 0; i < btnElm.length; i++) {
  btnElm[i].addEventListener('click', addIcon);
}
