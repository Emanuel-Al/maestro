import React from "react";

type formBtnProps = {
  type: "submit" | "button";
  handleClick?: () => void;
};

const FormBtn = ({ type, handleClick }: formBtnProps) => {
  return (
    <div>
      <button
        type={type}
        onClick={handleClick}
        className={
          type == "submit"
            ? "bg-[#3478F6] text-white p-2 cursor-pointer font-semibold rounded-lg"
            : "bg-[#4B5563] text-white p-2 cursor-pointer font-semibold rounded-lg"
        }
      >
        {type == "submit" ? "Adicionar Música" : "Cancelar"}
      </button>
    </div>
  );
};

export default FormBtn;
