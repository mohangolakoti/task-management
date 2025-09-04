import React from 'react';
import { Clock, Star } from 'lucide-react';
import { API_URL } from '../data/api';

const MentorCard = ({ mentor }) => {
  return (
  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 h-[220px] flex flex-col justify-between">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className=" rounded-full overflow-hidden">
            <img 
              src={`${API_URL}${mentor.avatar}`} 
              alt={mentor.name}
              width={64}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{mentor.name}</h3>
            <p className="text-sm text-gray-500 font-medium">{mentor.profession}</p>
          </div>
        </div>
        <button className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-200">
          + Follow
        </button>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-500 text-sm leading-relaxed text-wrap">
          {mentor.bio}
        </p>
      </div>
      
      <div className="flex items-center justify-between text-gray-600">
        <div className="flex items-center space-x-2">
          <Clock size={16} />
          <span className="text-sm font-medium">{mentor.taskCount} Task</span>
        </div>
        <div className="flex items-center space-x-2">
          <Star size={16} className="text-yellow-400 fill-current" />
          <span className="text-sm font-semibold text-gray-900">{mentor.rating}</span>
          <span className="text-sm text-gray-500">({mentor.reviews} Reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;