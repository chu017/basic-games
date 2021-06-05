import React, { useState} from 'react';
import Square from './Square.jsx';
import Restart from './Restart.jsx';
import gamerRules from './gameRules.js';

function Game() {
  const [ squares, setSquares ] = useState(Array(9).fill(null));
  const [ isXNext, setIsXNext ] = useState(true);
  const winner = gamerRules.calculateWinner(squares);
  console.log('restart');

  function renderSquare(i) {
    return <Square
      value={squares[i]}
      onClick={() => {
        const nextSquares = squares.slice();
        nextSquares[i] = isXNext ? "X" : "O";
        setSquares(nextSquares);
        setIsXNext(!isXNext);
      }}
    />;
  }

  function getStatus() {
    if (winner) {
      return "Winner: " + winner;
    } else if (gamerRules.isBoardFull(squares)) {
      return "Draw!";
    } else {
      return "Next player: " + (isXNext ? "X" : "O");
    }
  }

  function renderRestartButton() {
    return (
      <Restart
      onClick={() => {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
      }}
    />
    )
  }

  return (
    <>
    <div className="container">
      <div className="game">
        <div className="game-board">
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      </div>
    </div>
    <div className="game-info">
      {getStatus()}
    </div>
    <div className="restart-button">
      {renderRestartButton()}
    </div>
    </>
  )
}

export default Game;
