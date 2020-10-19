'use strict';

let playerTurn = 'circle';

const addIcon = (event) => {
  // if (
  //   event.target.classList.contains(
  //     'board__field--circle' || 'board__field--cross',
  //   )
  // ) {
  //   return null;
  // } else
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
