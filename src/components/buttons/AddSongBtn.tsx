import React from "react";

type AddSongBtnProps = {
  handleClick: () => void;
};

const AddSongBtn = ({ handleClick }: AddSongBtnProps) => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
      onClick={handleClick}
    >
      + Adicionar
    </button>
  );
};

export default AddSongBtn;
