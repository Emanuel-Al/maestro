import React from "react";

interface TabProps {
  isActive: boolean;
  page: string;
}

const Tab = ({ isActive, page }: TabProps) => {
  return (
    <div>
      <button
        className={
          isActive
            ? "bg-[#3478F6] p-1.5 text-white rounded-2xl min-w-24 cursor-pointer hover:opacity-70"
            : "bg-white p-2 text-gray-400 rounded-2xl cursor-pointer hover:opacity-70"
        }
      >
        {page}
      </button>
    </div>
  );
};

export default Tab;
