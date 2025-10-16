import React, { useEffect, useState } from "react";
import { IoMoonSharp } from "react-icons/io5";
import { MdWbSunny } from "react-icons/md";
import useDarkMode from "../../hooks/useDarkMode";

const DarkModeBtn = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      className={
        isDarkMode
          ? "rounded-4xl bg-[#1E1E1E] p-2 cursor-pointer hover:bg-blue-400 transition delay-50"
          : "rounded-4xl bg-white p-2 cursor-pointer hover:bg-blue-400 transition delay-50"
      }
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <MdWbSunny size={30} color="yellow" />
      ) : (
        <IoMoonSharp size={30} />
      )}
    </button>
  );
};

export default DarkModeBtn;
