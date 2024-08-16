import React from "react";
import { SlCalender } from "react-icons/sl";
import { SiGooglekeep } from "react-icons/si";
import { MdTaskAlt } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { FaPlus } from "react-icons/fa";


const iconSize = '2em';

const menuItem = [
  {
    path: "/",
    icon: <SlCalender size={iconSize} />,
  },
  {
    path: "/",
    icon: <SiGooglekeep  size={iconSize} />,
  },
  {
    path: "/",
    icon: <MdTaskAlt size={iconSize} />,
  },
  {
    path: "/",
    icon: <IoMdContact  size={iconSize} />,
  },
  {
    path: "/",
    icon: <FaPlus  size={iconSize} />,
  },
];

export default function HideSidebar() {
  return (
    <div className=" h-screen bg-gray-50 border-r p-5 ">

      <ul>
        {menuItem.map((item, index) => (
          <li key={index} className="mt-5">
            <a
              href={item.path}
              className="flex items-center p-2 text-gray-700 rounded-full hover:bg-gray-200 "
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
