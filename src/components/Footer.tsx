import React from "react";
import { FaHouse } from "react-icons/fa6";
import { GiMusicalNotes } from "react-icons/gi";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="fixed left-0 bottom-0 flex border-t border-gray-200 bg-white w-full justify-evenly py-4 border-t-8-[#EAEAEA] items-center">
      <div>
        <NavLink to="">
          <FaHouse className="text-gray-600 text-4xl cursor-pointer hover:text-blue-400 transition delay-50 " />
        </NavLink>
      </div>
      <div>
        <NavLink to="/songs">
          <GiMusicalNotes className="text-gray-600 text-4xl cursor-pointer hover:text-blue-400 transition delay-50 " />
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
