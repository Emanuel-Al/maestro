import React from "react";
import { IoMoonSharp } from "react-icons/io5";
import { MdWbSunny } from "react-icons/md";
import { useState } from "react";
const DarkModeBtn = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <button
      className={
        darkMode
          ? "rounded-4xl bg-[#1E1E1E] p-2 cursor-pointer hover:bg-blue-400 transition delay-50"
          : "rounded-4xl bg-white p-2 cursor-pointer hover:bg-blue-400 transition delay-50"
      }
      onClick={handleClick}
    >
      {darkMode ? (
        <MdWbSunny size={30} color="yellow" />
      ) : (
        <IoMoonSharp size={30} />
      )}
    </button>
  );
};

export default DarkModeBtn;
