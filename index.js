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
  isWinningMove(event.target);
  gameResult(event.target, getSymbol(event.target));
};
const btnElm = document.querySelectorAll('button');
for (let i = 0; i < btnElm.length; i++) {
  btnElm[i].addEventListener('click', addIcon);
}

const boardSize = 10; // 10x10
const fields = document.querySelectorAll('button');

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length) {
    if (field === fields[fieldIndex]) {
      break;
    }
    fieldIndex++;
  }

  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};
const getField = (row, column) => fields[row * boardSize + column];

const getSymbol = (field) => {
  // Název třídy přizpůsob tvému kódu.
  if (field.classList.contains('board__field--cross')) {
    return 'cross';
  } else if (field.classList.contains('board__field--circle')) {
    return 'circle';
  }
};

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;

  let inRow = 1; // Jednička pro právě vybrané políčko
  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  return false;
};

const gameResult = (field, symbol) => {
  if (isWinningMove(field) === true) {
    let message;
    if (symbol === 'cross') {
      message = confirm('Tohle kolo vyhrává křížek! Chcete odvetu?');
      if (message === true) {
        location.reload();
      }
    } else if (symbol === 'circle') {
      message = confirm('Tohle kolo vyhrává kolečko! Chcete odvetu?');
      if (message === true) {
        location.reload();
      }
    }
  }
};
