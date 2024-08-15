import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { FaSearch, FaFileAlt, FaFolder, FaUser, FaCalendarAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FaTableCellsLarge } from "react-icons/fa6";
import { Dropdown, Menu } from "antd";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiAlertCircle } from "react-icons/fi";
import { HiOutlineDocument, HiOutlineFolder } from "react-icons/hi";
import HideSidebar from "../components/HideSidebar";
import { 
  FileTextOutlined, 
  YoutubeOutlined, 
  CalendarOutlined, 
  EnvironmentOutlined,
  MailOutlined,
  FileOutlined,
  ContactsOutlined,
  PictureOutlined,
  TranslationOutlined,
  BookOutlined
} from "@ant-design/icons";

const iconSize = '1.5em';
const menuItemStyle = {
  fontSize: iconSize,
  display: 'flex',
  alignItems: 'center'
};


const menu = (
  <Menu>
    <Menu.Item key="Douments" style={menuItemStyle}>
      <FileTextOutlined style={{ fontSize: iconSize }} />
      <span style={{ marginLeft: '10px' }}>Douments</span>
    </Menu.Item>
    <Menu.Item key="Spreadsheets" style={menuItemStyle}>
      <EnvironmentOutlined style={{ fontSize: iconSize }} />
      <span style={{ marginLeft: '10px' }}>Spreadsheets</span>
    </Menu.Item>
    <Menu.Item key="Presentations" style={menuItemStyle}>
      <YoutubeOutlined style={{ fontSize: iconSize }} />
      <span style={{ marginLeft: '10px' }}>Presentations</span>
    </Menu.Item>
    <Menu.Item key="Forms" style={menuItemStyle}>
      <CalendarOutlined style={{ fontSize: iconSize }} />
      <span style={{ marginLeft: '10px' }}>Forms</span>
    </Menu.Item>
    <Menu.Item key="gmail" style={menuItemStyle}>
      <MailOutlined style={{ fontSize: iconSize }} />
      <span style={{ marginLeft: '10px' }}>Photos & images</span>
    </Menu.Item>
    <Menu.Item key="drive" style={menuItemStyle}>
      <FileOutlined style={{ fontSize: iconSize }} />
      <span style={{ marginLeft: '10px' }}> PDFs</span>
    </Menu.Item>
    <Menu.Item key="contacts" style={menuItemStyle}>
      <ContactsOutlined style={{ fontSize: iconSize }} />
      <span style={{ marginLeft: '10px' }}>Videos</span>
    </Menu.Item>
    <Menu.Item key="photos" style={menuItemStyle}>
      <PictureOutlined style={{ fontSize: iconSize }} />
      <span style={{ marginLeft: '10px' }}>Shortcuts</span>
    </Menu.Item>
    <Menu.Item key="translate" style={menuItemStyle}>
      <TranslationOutlined style={{ fontSize: iconSize }} />
      <span style={{ marginLeft: '10px' }}>Folders</span>
    </Menu.Item>
    <Menu.Item key="news" style={menuItemStyle}>
      <BookOutlined style={{ fontSize: iconSize }} />
      <span style={{ marginLeft: '10px' }}>Sites</span>
    </Menu.Item>
    <Menu.Item key="news" style={menuItemStyle}>
      <BookOutlined style={{ fontSize: iconSize }} />
      <span style={{ marginLeft: '10px' }}>Audio</span>
    </Menu.Item>
    <Menu.Item key="news" style={menuItemStyle}>
      <BookOutlined style={{ fontSize: iconSize }} />
      <span style={{ marginLeft: '10px' }}>Drawings</span>
    </Menu.Item>
    <Menu.Item key="news" style={menuItemStyle}>
      <BookOutlined style={{ fontSize: iconSize }} />
      <span style={{ marginLeft: '10px' }}>Archives(zip)</span>
    </Menu.Item>
  </Menu>
);

const menu2 =(
 <Menu>
    <Menu.Item key="Douments" style={menuItemStyle}>
      <FileTextOutlined style={{ fontSize: iconSize }} />
      <span style={{ marginLeft: '10px' }}>Douments</span>
    </Menu.Item>
    <Menu.Item key="Spreadsheets" style={menuItemStyle}>
      <EnvironmentOutlined style={{ fontSize: iconSize }} />
      <span style={{ marginLeft: '10px' }}>Spreadsheets</span>
    </Menu.Item>
    <Menu.Item key="Presentations" style={menuItemStyle}>
      <YoutubeOutlined style={{ fontSize: iconSize }} />
      <span style={{ marginLeft: '10px' }}>Presentations</span>
    </Menu.Item>
    <Menu.Item key="Forms" style={menuItemStyle}>
      <CalendarOutlined style={{ fontSize: iconSize }} />
      <span style={{ marginLeft: '10px' }}>Forms</span>
    </Menu.Item>
    <Menu.Item key="gmail" style={menuItemStyle}>
      <MailOutlined style={{ fontSize: iconSize }} />
      <span style={{ marginLeft: '10px' }}>Photos & images</span>
    </Menu.Item>
    <Menu.Item key="drive" style={menuItemStyle}>
      <FileOutlined style={{ fontSize: iconSize }} />
      <span style={{ marginLeft: '10px' }}> PDFs</span>
    </Menu.Item>
    <Menu.Item key="contacts" style={menuItemStyle}>
      <ContactsOutlined style={{ fontSize: iconSize }} />
      <span style={{ marginLeft: '10px' }}>Videos</span>
    </Menu.Item>
    <Menu.Item key="photos" style={menuItemStyle}>
      <PictureOutlined style={{ fontSize: iconSize }} />
      <span style={{ marginLeft: '10px' }}>Shortcuts</span>
    </Menu.Item>
    <Menu.Item key="translate" style={menuItemStyle}>
      <TranslationOutlined style={{ fontSize: iconSize }} />
      <span style={{ marginLeft: '10px' }}>Folders</span>
    </Menu.Item>
    <Menu.Item key="news" style={menuItemStyle}>
      <BookOutlined style={{ fontSize: iconSize }} />
      <span style={{ marginLeft: '10px' }}>Sites</span>
    </Menu.Item>
    <Menu.Item key="news" style={menuItemStyle}>
      <BookOutlined style={{ fontSize: iconSize }} />
      <span style={{ marginLeft: '10px' }}>Audio</span>
    </Menu.Item>
    <Menu.Item key="news" style={menuItemStyle}>
      <BookOutlined style={{ fontSize: iconSize }} />
      <span style={{ marginLeft: '10px' }}>Drawings</span>
    </Menu.Item>
    <Menu.Item key="news" style={menuItemStyle}>
      <BookOutlined style={{ fontSize: iconSize }} />
      <span style={{ marginLeft: '10px' }}>Archives(zip)</span>
    </Menu.Item>
 </Menu>
);
function Home() {
  const [selectedTab, setSelectedTab] = useState('files');

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-4 relative">
          <h1 className="text-center text-3xl mb-5 mt-3">Welcome to Drive</h1>
          <FiAlertCircle className="absolute top-4 right-4 text-gray-900 text-2xl" />
          <div className="flex justify-center items-center mb-4 relative">
            <div className="relative w-full max-w-lg">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900" />
              <input
                type="text"
                placeholder="Search in Drive"
                className="pl-10 w-full h-16 px-4 py-2 bg-gray-100 border-gray-500 rounded-full"
              />
            </div>
          </div>
          <div className="flex justify-center space-x-4 mb-6">
            <Dropdown overlay={menu} trigger={['click']}>
              <button className="px-4 py-2 bg-gray-200 rounded-full flex items-center">
                <FaFileAlt className="mr-2" />
                Type
                <IoMdArrowDropdown className="ml-2" />
              </button>
            </Dropdown>
            <Dropdown overlay={menu2} trigger={['click']}>
            <button className="px-4 py-2 bg-gray-200 rounded-full flex items-center">
              <FaUser className="mr-2" />
              People
              <IoMdArrowDropdown className="ml-2" />
            </button>
            </Dropdown>
            <button className="px-4 py-2 bg-gray-200 rounded-full flex items-center">
              <FaCalendarAlt className="mr-2" />
              Modified
              <IoMdArrowDropdown className="ml-2" />
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-full flex items-center">
              <FaFolder className="mr-2" />
              Location
              <IoMdArrowDropdown className="ml-2" />
            </button>
          </div>
          <div className="flex space-x-4 mb-4 items-center">
            <h1 className="text-xl font-semibold">Suggested</h1>
            <div className="flex border border-gray-300 rounded-full overflow-hidden">
              <button
                className={`px-4 py-2 flex items-center ${selectedTab === 'files' ? 'bg-blue-200' : 'bg-white'}`}
                onClick={() => setSelectedTab('files')}
              >
                <HiOutlineDocument className="mr-2" />
                Files
              </button>
              <button
                className={`px-4 py-2 flex items-center ${selectedTab === 'folders' ? 'bg-blue-200' : 'bg-white'}`}
                onClick={() => setSelectedTab('folders')}
              >
                <HiOutlineFolder className="mr-2" />
                Folders
              </button>
            </div>
            <div className="flex border border-gray-300 rounded-full overflow-hidden justify-end">
              <button
                className={`px-4 py-2 flex h-10 items-center ${selectedTab === 'listlayout' ? 'bg-blue-200' : 'bg-white'}`}
                onClick={() => setSelectedTab('listlayout')}
              >
                <IoMenu className="mr-2" />
              </button>
              <button
                className={`px-4 py-2 flex items-center ${selectedTab === 'gridlayout' ? 'bg-blue-200' : 'bg-white'}`}
                onClick={() => setSelectedTab('gridlayout')}
              >
                <FaTableCellsLarge className="mr-2" />
              </button>
            </div>
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
        <HideSidebar />
      </div>
    </>
  );
}

export default Home;
