import { WINNER_COMBOS } from './constants';

export const checkWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  //Si no hay ganador
  return null;
};

export const checkEndGame = (newBoard) => {
  //Para revisar si hay empate revisamos todas las posiciones del tablero, si todas son !null significa que estan completas y no hay ganador
  return newBoard.every((square) => square != null);
};
