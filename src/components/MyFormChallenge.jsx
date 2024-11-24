import React, {useState} from "react";
import BoxColor from "./BoxColor";

const colors = ["red", "gren", "pink", "yellow", "purple", "white", "blue", "aqua", "olive"]

function MyFormChallenge() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase()); // Aseguramos que sea minúscula
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Escribe un color"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className="color-grid">
        {colors.map((color) => (
          <BoxColor key={color} color={color} inputValue={inputValue} />
        ))}
        </div>
      </div>
    </>
  );
}

export default MyFormChallenge;