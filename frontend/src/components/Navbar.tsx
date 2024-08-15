import React from 'react';
import logo from "../picture/logo.svg";
import { IoSettingsSharp } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { GoQuestion } from "react-icons/go";
import { Dropdown, Menu } from "antd";
import { 
  
  SearchOutlined, 
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

const iconSize = '2em';

const menu = (
  <Menu 
    style={{ 
      borderRadius: '30px', 
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', 
      padding: '10px',
      maxHeight: '300px', 
      overflowY: 'auto',   
    }}
  >
    <div className="flex flex-wrap justify-center mt-2">
      <Menu.Item key="search" className="w-1/3 text-center p-3">
        <SearchOutlined style={{ fontSize: iconSize }} />
        <div>Google Search</div>
      </Menu.Item>
      <Menu.Item key="maps" className="w-1/3 text-center p-3">
        <EnvironmentOutlined style={{ fontSize: iconSize }} />
        <div>Maps</div>
      </Menu.Item>
      <Menu.Item key="youtube" className="w-1/3 text-center p-3">
        <YoutubeOutlined style={{ fontSize: iconSize }} />
        <div>YouTube</div>
      </Menu.Item>
      <Menu.Item key="calendar" className="w-1/3 text-center p-3">
        <CalendarOutlined style={{ fontSize: iconSize }} />
        <div>Google Calendar</div>
      </Menu.Item>
      <Menu.Item key="gmail" className="w-1/3 text-center p-3">
        <MailOutlined style={{ fontSize: iconSize }} />
        <div>Gmail</div>
      </Menu.Item>
      <Menu.Item key="drive" className="w-1/3 text-center p-3">
        <FileOutlined style={{ fontSize: iconSize }} />
        <div>Drive</div>
      </Menu.Item>
      <Menu.Item key="contacts" className="w-1/3 text-center p-3">
        <ContactsOutlined style={{ fontSize: iconSize }} />
        <div>Contacts</div>
      </Menu.Item>
      <Menu.Item key="photos" className="w-1/3 text-center p-3">
        <PictureOutlined style={{ fontSize: iconSize }} />
        <div>Photos</div>
      </Menu.Item>
      <Menu.Item key="translate" className="w-1/3 text-center p-3">
        <TranslationOutlined style={{ fontSize: iconSize }} />
        <div>Translate</div>
      </Menu.Item>
      <Menu.Item key="news" className="w-1/3 text-center p-3">
        <BookOutlined style={{ fontSize: iconSize }} />
        <div>News</div>
      </Menu.Item>
    </div>
  </Menu>
);

const Navbar: React.FC = () => {
  return (
    <header className="w-full bg-gray-50 shadow-m">
      <div className="flex justify-between p-4 max-w-screen-3xl mr-10 ">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-20 h-15 mr-4" />
          <span className="text-xl font-semibold">Drive</span>
        </div>
        <div className="flex items-center space-x-4">
          <GoQuestion size={iconSize} className="text-gray-600 hover:text-gray-800 cursor-pointer" />
          <IoSettingsSharp size={iconSize} className="text-gray-600 hover:text-gray-800 cursor-pointer" />
          <Dropdown overlay={menu} trigger={['click']} overlayStyle={{ width: 300, borderRadius: '10px' }}>
            <CgMenuGridO size={iconSize} className="text-gray-600 hover:text-gray-800 cursor-pointer" />
          </Dropdown>
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
