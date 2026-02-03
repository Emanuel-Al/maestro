import { IoIosLogOut } from "react-icons/io";
import useDarkMode from "../../hooks/useDarkMode";
import { useNavigate } from "react-router";

const LogoutBtn = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    localStorage.clear();
  };

  return (
    <button
      className={
        "rounded-4xl bg-white p-2 cursor-pointer hover:bg-blue-400 transition delay-50 dark:bg-[#1E1E1E] dark:text-white dark:hover:bg-blue-400"
      }
      onClick={handleLogout}
    >
      <IoIosLogOut size={25} />
    </button>
  );
};

export default LogoutBtn;
