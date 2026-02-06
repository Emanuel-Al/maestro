import { MdFilterAlt } from "react-icons/md";

type filterBtnProps = {
  handleClick: () => void;
};

const FilterBtn = ({ handleClick }: filterBtnProps) => {
  return (
    <button
      onClick={handleClick}
      className="p-2 rounded-md shadow-sm text-center flex gap-2 bg-white items-center font-semibold hover:bg-gray-50 cursor-pointer dark:bg-[#1E1E1E] dark:text-white"
    >
      <span className="flex-shrink-0">
        <MdFilterAlt />
      </span>
      Filtros
    </button>
  );
};

export default FilterBtn;
