import React from 'react';
import Navbar from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { FaSearch } from "react-icons/fa";
import { RiListSettingsLine } from "react-icons/ri";
function Home() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-4">
          <h1 className="text-center text-3xl mb-6">Welcome to Drive</h1>
          <div className="flex justify-center items-center mb-4 relative">
            <FaSearch className=" text-gray-400" />
            <input
              type="text"
              placeholder="Search in Drive"
              className="pl-10 w-full max-w-lg px-4 py-2 h-12 bg-gray-50 border-2 border-gray-500 rounded-full"
            />
            <RiListSettingsLine />

          </div>
          <div className="flex justify-center space-x-4 mb-6">
            <button className="px-4 py-2 bg-gray-200 rounded-full">Type</button>
            <button className="px-4 py-2 bg-gray-200 rounded-full">People</button>
            <button className="px-4 py-2 bg-gray-200 rounded-full">Modified</button>
            <button className="px-4 py-2 bg-gray-200 rounded-full">Location</button>
          </div>
          <div className="flex  space-x-4 mb-4">
            <h1 className="text-xl font-semibol ">Suggested</h1>
            <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-full">Files</button>
            <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-full">Folders</button>
          </div>
          <nav className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font mb-4">Name</h2>
            <div className="bg-gray-100 rounded-lg p-4 mb-2">
              <p className="font-semibold">Final.mp4</p>
              <p className="text-sm text-gray-500">You opened · Aug 3, 2024</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 mb-2">
              <p className="font-semibold">member</p>
              <p className="text-sm text-gray-500">You modified · May 13, 2024</p>
            </div>
           
          </nav>
        </div>
      </div>
    </>
  );
}

export default Home;

