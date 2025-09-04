import React, { useState } from 'react';
import { LayoutDashboard, CheckSquare, Users, MessageSquare, Settings } from 'lucide-react';

const Sidebar = ({ isOpen, onToggle, showTaskHandler, showMentorsHandler }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Overview' },
    { icon: CheckSquare, label: 'Task', onClick: showTaskHandler },
    { icon: Users, label: 'Mentors', onClick: showMentorsHandler },
    { icon: MessageSquare, label: 'Message' },
    { icon: Settings, label: 'Settings' },
  ];

  const handleClick = (index, item) => {
    setActiveIndex(index);
    if (item.onClick) item.onClick();
  };

  return (
    <>
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-white">
        <div className="flex items-center h-16 px-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
              <span className="font-bold text-lg">D</span>
            </div>
            <span className="font-semibold text-xl font-Montserrat">DNX</span>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                onClick={() => handleClick(index, item)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                  isActive 
                    ? 'bg-gray-300 text-black font-semibold' 
                    : 'text-gray-400 hover:bg-gray-300 hover:text-black'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform duration-300 ease-in-out lg:hidden ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center h-16 px-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
              <span className="font-bold text-lg">D</span>
            </div>
            <span className="font-semibold text-xl font-Montserrat">DNX</span>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                onClick={() => {
                  handleClick(index, item);
                  onToggle();
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                  isActive 
                    ? 'bg-gray-300 text-black font-semibold' 
                    : 'text-gray-400 hover:bg-gray-300 hover:text-black'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
