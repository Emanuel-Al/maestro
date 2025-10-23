import React from "react";

type formBtnProps = {
  type: "submit" | "button";
  handleClick?: () => void;
  children?: React.ReactNode;
};

const FormBtn = ({ type, handleClick, children }: formBtnProps) => {
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
        {children}
      </button>
    </div>
  );
};

export default FormBtn;
