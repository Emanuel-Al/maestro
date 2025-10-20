import React from "react";

interface TabProps {
  isActive: boolean;
  page: string;
  onClick: () => void;
}

const Tab = ({ isActive, page, onClick }: TabProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={
          isActive
            ? "bg-[#3478F6] p-1.5 text-white rounded-2xl min-w-24 cursor-pointer hover:opacity-70 shadow-sm dark:bg-[#1E1E1E] dark:bg-[#3478F6]"
            : "bg-white p-1.5 text-gray-400 rounded-2xl cursor-pointer hover:opacity-70 shadow-sm dark:bg-[#1E1E1E]"
        }
      >
        {page}
      </button>
    </div>
  );
};

export default Tab;
