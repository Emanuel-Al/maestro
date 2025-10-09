import React from "react";
import { useState } from "react";

const AddSongBtn = () => {
  const [clicked, setClicked] = useState(false);

  const handleCLick = () => {
    setClicked(true);
    console.log("Botão Clicado");
  };
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
      onClick={handleCLick}
    >
      + Adicionar
    </button>
  );
};

export default AddSongBtn;
