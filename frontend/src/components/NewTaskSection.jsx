import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import TaskCard from './TaskCard';
import { API_URL } from '../data/api';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LatestTasksSection = () => {
  const scrollContainerRef = useRef(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/task/all-tasks`);
        const data = response.data.tasks || [];
        const sortedTasks = data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        setTasks(sortedTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  if (loading) {
    return <div className="p-6 text-gray-500">Loading tasks...</div>;
  }

  return (
    <div className="mx-4 py-1">
      <div className="flex mx-5 my-3 justify-between">
        <h1 className='text-lg font-semibold font-OpenSans'>New Task</h1>
        <div className='flex gap-4 justify-end'>
        <button 
          onClick={scrollLeft}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
        >
          <ChevronLeft size={20} className="text-gray-600" />
        </button>
        <button 
          onClick={scrollRight} 
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
        >
          <ChevronRight size={20} className="text-gray-600" />
        </button>
        </div>
      </div>
      <div 
        className="flex overflow-x-hidden gap-6"
        ref={scrollContainerRef}
        style={{ maxWidth: '100%', overflowX: 'hidden' }}
      >
        {tasks.map((task) => (
          <div key={task._id} className="w-[320px] flex-shrink-0">
            <TaskCard task={task} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestTasksSection;