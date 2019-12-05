import React, { useState, useEffect } from "react";

// button group and win message component
const ButtonGroup = props => {
  const { position, target, initStart, handleHelpMove } = props;
  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    checkWin();
  }, [position]);

  const checkWin = () => {
    if (
      position[0] === target[0] &&
      position[1] === target[1] &&
      position.length !== 0
    ) {
      setShowMsg(true);
    }
  };

  const handleStart = () => {
    setShowMsg(false);
    initStart();
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleStart}
          >
            Start
          </button>
        </div>
        <div className="col-md-auto">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleHelpMove}
          >
            Help
          </button>
        </div>
      </div>
      {showMsg && (
        <div
          className="row justify-content-md-center"
          style={{ marginTop: 30 }}
        >
          <div className="alert alert-primary" role="alert">
            You Win! Click "Start" to replay
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonGroup;
