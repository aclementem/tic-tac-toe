import { Square } from './Square';

export function Board({ board, updateBoard }) {
  //null es que no hay ganador, false es que hay un empate

  return (
    <>
      {board.map((square, index) => {
        return (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {square}
          </Square>
        );
      })}
    </>
  );
}
