import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import MentorCard from './MentorCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { API_URL } from '../data/api';

const MentorSection = () => {
  const scrollContainerRef = useRef(null);
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/mentor/all-mentors`);
        const data = response.data.profiles;
        setMentors(data);
      } catch (error) {
        console.error('Error fetching mentors:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMentors();
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
    return <div className="p-6 text-gray-500">Loading mentors...</div>;
  }

  return (
    <div className="mx-4 py-1">
      <div className="flex mx-5 my-3 justify-between">
        <div className='text-lg font-semibold font-OpenSans'>Recent Mentors</div>
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
        {mentors.map((mentor) => (
          <div key={mentor._id} className="flex-shrink-0 w-[390px]">
            <MentorCard mentor={mentor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorSection;