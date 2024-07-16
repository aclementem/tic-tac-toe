import { useState } from 'react';
import './App.css';
import confetti from 'canvas-confetti';
import { TURNS } from './constants';
import { checkWinner, checkEndGame } from './logica';
import { Square } from './Components/Square';
import { WinnerModal } from './Components/WinnerModal';
import { Board } from './Components/Board';

function App() {
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(null));

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return; //No actualiza si ya hay algo dibujado
    //Actualizar Tablero
    const newBoard = [...board];
    newBoard[index] = turn; //x u o
    setBoard(newBoard);
    //Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //Revisar si hay ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>Tic-Tac-Toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className="game">
        <Board board={board} updateBoard={updateBoard} />
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
