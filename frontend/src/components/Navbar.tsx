import React from 'react';
import logo from "../picture/logo.svg";
import { IoSettingsSharp } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";

const iconSize = '2em';

const Navbar: React.FC = () => {
  return (
    <header className="w-full bg-gray-50 shadow-m">
      <div className="flex  justify-between p-4 max-w-screen-xl mx-auto">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-20 h-15 mr-4" />
          <span className="text-xl font-semibold">Drive</span>
        </div>
        <div className="flex items-center space-x-4">
          <HiOutlineQuestionMarkCircle size={iconSize} className="text-gray-600 hover:text-gray-800 cursor-pointer" />
          <IoSettingsSharp size={iconSize} className="text-gray-600 hover:text-gray-800 cursor-pointer" />
          <CgMenuGridO size={iconSize} className="text-gray-600 hover:text-gray-800 cursor-pointer" />
          <img 
            src="/path/to/profile/image.jpg" 
            alt="Profile"
            className="rounded-full"
            style={{ width: iconSize, height: iconSize }} 
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
