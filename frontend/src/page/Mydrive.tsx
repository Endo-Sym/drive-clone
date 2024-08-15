import React from 'react';
import Navbar from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import HideSidebar from "../components/HideSidebar";
import { FiAlertCircle } from "react-icons/fi";
import {  FaFileAlt, FaFolder, FaUser, FaCalendarAlt,  } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

function Mydrive() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-4 relative">
          <h1 className="text- text-3xl mb-5 mt-3">My Drive</h1>
          <FiAlertCircle className="absolute top-4 right-4 text-gray-900 text-2xl" />
          <div className="flex justify-center items-center mb-4 relative">
            <div className="relative w-full max-w-lg">
     
            </div>
          </div>
          <div className="flex  space-x-4 mb-6">
            <button className=" px-5 py-2 bg-gray-50 rounded-xl border-2 border-black flex items-center font-medium ">
              Type
              <IoMdArrowDropdown className="ml-2" />
            </button>
            <button className=" px-5 py-2 bg-gray-50 rounded-xl border-2 border-black flex items-center font-medium ">
              People
              <IoMdArrowDropdown className="ml-2" />
            </button>
            <button className=" px-5 py-2 bg-gray-50 rounded-xl border-2 border-black flex items-center font-medium ">
              Modified
              <IoMdArrowDropdown className="ml-2" />
            </button>
     
          </div>
       
          </div>
          <HideSidebar />

        </div>
    </>
  );
}

export default Mydrive;
