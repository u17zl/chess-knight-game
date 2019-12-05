import React from "react";

// pure board componnet
const BoardTable = props => {
  const { position, target, board, handleMovePiece } = props;
  return (
    <table className="chessboard">
      <tbody>
        {board.map((row, rowIndex) => (
          <tr id="piece" key={`row-${rowIndex}`}>
            {row.map((cell, cellIndex) => {
              let className;
              if (rowIndex === position[0] && cellIndex === position[1]) {
                className = "knight";
              }
              if (rowIndex === target[0] && cellIndex === target[1]) {
                className = "target";
              }
              return (
                <td
                  key={`cell-${cellIndex}`}
                  className={className}
                  onClick={() => handleMovePiece(rowIndex, cellIndex)}
                ></td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BoardTable;
