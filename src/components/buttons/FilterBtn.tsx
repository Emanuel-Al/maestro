import React from "react";
import { IoFunnelOutline } from "react-icons/io5";

const FilterBtn = () => {
  return (
    <button className="p-2 rounded-b-md shadow-sm text-center flex gap-2 bg-white items-center font-semibold hover:bg-gray-50 cursor-pointer dark:bg-[#1E1E1E] dark:text-white">
      <IoFunnelOutline /> Filtros
    </button>
  );
};

export default FilterBtn;
