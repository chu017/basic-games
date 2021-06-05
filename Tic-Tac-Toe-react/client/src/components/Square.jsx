import React from 'react';

const style = {
  background: "lightgreen",
  board: "1px solid darkblue",
  fontSize: "30px",
  fontWeight: "500",
  cursor: "pointer",
  outline: "none",
};

function Square({ value, onClick }) {
  return (
    <button style={style} onClick={onClick}>
      {value}
    </button>
  )
}

export default Square;
