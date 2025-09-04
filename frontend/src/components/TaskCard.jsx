import React from 'react';
import { Clock } from 'lucide-react';
import { API_URL } from '../data/api';

const TaskCard = ({ task }) => {
  const getProgressColor = (progress) => {
    if (progress === 100) return 'bg-green-500';
    if (progress >= 80) return 'bg-blue-500';
    if (progress >= 60) return 'bg-purple-500';
    return 'bg-blue-400';
  };

  const getProgressBarColor = (progress) => {
    if (progress === 100) return 'from-green-500 to-green-600';
    if (progress >= 80) return 'from-blue-500 to-blue-600';
    if (progress >= 60) return 'from-purple-500 to-purple-600';
    return 'from-blue-400 to-blue-500';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
      <div className="aspect-video overflow-hidden">
        <img 
          src={`${API_URL}${task.backgroundImage}`} 
          alt={task.courseTitle}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <h3 className="lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
            {task.courseTitle}
          </h3>
          <span className="text-sm text-gray-500 font-medium">{task.category}</span>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className={`text-sm font-bold ${getProgressColor(task.progress).replace('bg-', 'text-')}`}>
              {task.progress}%
            </span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full bg-gradient-to-r ${getProgressBarColor(task.progress)} transition-all duration-300`}
              style={{ width: `${task.progress}%` }}
            ></div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-600">
            <Clock size={16} />
            <span className="text-sm font-medium">{task.duration} hours</span>
          </div>
          
          <div className="flex -space-x-2">
            {task.participants.map((member, index) => (
              <img
                key={index}
                src={member}
                alt={`Team member ${index + 1}`}
                className="w-8 h-8 rounded-full border-2 border-white object-cover hover:scale-110 transition-transform duration-200"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
