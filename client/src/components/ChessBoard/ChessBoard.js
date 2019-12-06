import React, { useState, useEffect, Fragment } from "react";
import { BoardTable, ButtonGroup } from "./components";
import generateRandomPosition from "../../utils/random";
import isValidMove from "../../utils/movement";

// init board
var initBoard = new Array(8).fill(0);
for (var i = 0; i < initBoard.length; i++) {
  initBoard[i] = new Array(8).fill(0);
}

const ChessBoard = props => {
  const [board, setBoard] = useState(initBoard);
  const [position, setPosition] = useState([]);
  const [target, setTarget] = useState([]);

  // init component state
  useEffect(() => {
    initStart();
  }, []);

  // init component state function
  const initStart = () => {
    const [init_position, init_target] = generateRandomPosition();
    setPosition(init_position);
    setTarget(init_target);
  };

  // move knight piece
  const handleMovePiece = (rowIndex, cellIndex) => {
    console.log("click", rowIndex, cellIndex);
    if (isValidMove(position, [rowIndex, cellIndex])) {
      setPosition([rowIndex, cellIndex]);
    }
  };

  // help function fetch backend
  const handleHelpMove = () => {
    fetch(process.env.REACT_APP_API_URL + "/api/chess/helps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ position, target })
    })
      .then(res => res.json())
      .then(data => {
        for (let i = 0; i < data.path.length; i++) {
          setTimeout(() => {
            setPosition(data.path[i]);
          }, 1000 * i);
        }
      });
  };

  return (
    <Fragment>
      <BoardTable
        position={position}
        target={target}
        board={board}
        handleMovePiece={handleMovePiece}
      />
      <ButtonGroup
        position={position}
        target={target}
        initStart={initStart}
        handleHelpMove={handleHelpMove}
      />
    </Fragment>
  );
};

export default ChessBoard;
