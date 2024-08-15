import React from 'react';
import Navbar from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import HideSidebar from "../components/HideSidebar";
import { FiAlertCircle } from "react-icons/fi";

function Computers() {
  return (
    <>
      <Navbar />
      <div className="flex flex-grow relative">
        <Sidebar />
        
        <div className="flex-grow p-4 relative">
          <div className="flex space-x-2">
            <h1 className="text-3xl">Computers</h1>
          </div>
          <FiAlertCircle className="absolute top-4 right-4 text-gray-900 text-2xl" />
        </div>
  
        <HideSidebar />
      </div>
    </>
  );
}

export default Computers;
