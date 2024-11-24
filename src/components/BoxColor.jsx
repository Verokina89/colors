import React from "react";

function BoxColor({ color, inputValue }) {
  const isMatch = color === inputValue;

  return (
    <div
      className={`box ${color}`}
      style={{ backgroundColor: isMatch ? color : "transparent" }}
    >
      {isMatch ? `¡Soy el color ${color}!` : "No soy el color"}
    </div>
  );
}

export default BoxColor;
