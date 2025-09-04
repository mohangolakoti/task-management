import React from 'react';
import { Search, Bell, Menu, Filter, ChevronDown } from 'lucide-react';

const TaskTopBar = ({ 
  onMenuClick, 
  searchQuery, 
  setSearchQuery, 
  sortBy, 
}) => {
  return (
    <header className="bg-white text-black shadow-sm">
      <div className="px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded-md hover:bg-gray-400 transition-colors duration-200"
            >
              <Menu size={20} />
            </button>
            
            <h1 className="text-xl lg:text-2xl font-semibold ">Explore Task</h1>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 hover:bg-gray-200 border rounded-full transition-colors duration-200">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="relative flex-1 lg:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search Task"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2">
              <Filter size={16} className="text-gray-500" />
              <span className="text-gray-700 font-medium">Category</span>
              <ChevronDown size={16} className="text-gray-500" />
            </div>
            
            <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2">
              <span className="text-gray-700 font-medium">Sort By: {sortBy}</span>
              <ChevronDown size={16} className="text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TaskTopBar;