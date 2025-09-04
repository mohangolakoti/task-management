import React, { useState } from 'react';
import { HelpCircle, X } from 'lucide-react';

const HelpCenter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 lg:left-8 w-14 h-14 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-30"
      >
        <HelpCircle size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl max-w-md w-full p-6 text-white relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X size={20} />
            </button>
            
            <div className="mb-6">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <HelpCircle size={32} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">Help Center</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Having Trouble in Learning.
                Please contact us for more questions.
              </p>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="w-full bg-white text-gray-800 font-medium py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Go to Help Center
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpCenter;