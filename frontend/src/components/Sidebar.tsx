import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { FaGoogleDrive } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { RiSpam2Line } from "react-icons/ri";
import { FiTrash2 } from "react-icons/fi";
import { IoMdCloudOutline } from "react-icons/io";

export const Sidebar = () => {
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <MdHomeFilled />
    },
    {
      path: "/Mydrive",
      name: "My Drive",
      icon: <FaGoogleDrive />
    },
    {
      path: "/computer",
      name: "Computers",
      icon: <MdComputer />
    },
    {
      path: "/share",
      name: "Shared with me",
      icon: <IoMdPeople />
    },
    {
      path: "/",
      name: "Recent",
      icon: <FaRegClock />
    },
    {
      path: "/",
      name: "Starred",
      icon: <FaRegStar />
    },
    {
      path: "/",
      name: "Spam",
      icon: <RiSpam2Line />
    },
    {
      path: "/",
      name: "Trash",
      icon: <FiTrash2 />
    },
    {
      path: "/",
      name: "Storage",
      icon: <IoMdCloudOutline />
    },
  ];

  return (
    <div className="w-64 h-screen bg-gray-50 border-r p-4">
      <button className="w-3/4 h-30px py-2 mb-4 text-gray-700 bg-white border-2 border-gray-400 drop-shadow-lg rounded-2xl">
        + New
      </button>
      <ul>
        {menuItem.map((item, index) => (
          <li key={index} className="mb-2">
            <a
              href={item.path}
              className="flex items-center p-2 text-gray-700 rounded-2xl hover:bg-gray-200"
            >
              {item.icon}
              <span className="ml-4">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-sm text-gray-600 ml-7">
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `100%` }}  
          ></div>
        </div>
        <span>15 GB of 15 GB used</span>
        <button className="w-4/5 border-2 font-semibold border-gray-400 py-2 mt-2 text-blue-600 bold bg-gray-50 rounded-2xl justify-center">
          Get more storage
        </button>
      </div>
    </div>
  );
};
