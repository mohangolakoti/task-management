import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MentorCard from './MentorCard';
import { API_URL } from '../data/api';

const AllMentors = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/mentor/all-mentors`);
        const data = response.data.profiles;
        const sortedMentors = data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        setMentors(sortedMentors);
      } catch (error) {
        console.error('Error fetching mentors:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMentors();
  }, []);

  if (loading) {
    return <div className="p-6 text-gray-500">Loading mentors...</div>;
  }

  return (
    <div className="mx-4 py-1">
      <div className="mx-5 my-3">
        <div className="text-lg font-semibold font-OpenSans">Mentors</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <div key={mentor._id} className="w-full">
            <MentorCard mentor={mentor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMentors;