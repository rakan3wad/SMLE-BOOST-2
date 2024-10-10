import React, { useState } from 'react';
import { Clock, Play } from 'lucide-react';

const TimedPractice = () => {
  const [selectedDuration, setSelectedDuration] = useState(30);
  const [selectedQuestions, setSelectedQuestions] = useState(50);

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Timed Practice</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
          <h3 className="font-semibold mb-2 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-[#acc56a]" />
            Set Duration
          </h3>
          <select
            className="w-full p-2 border rounded-md mt-2"
            value={selectedDuration}
            onChange={(e) => setSelectedDuration(Number(e.target.value))}
          >
            <option value={15}>15 minutes</option>
            <option value={30}>30 minutes</option>
            <option value={45}>45 minutes</option>
            <option value={60}>60 minutes</option>
          </select>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
          <h3 className="font-semibold mb-2 flex items-center">
            <Play className="w-5 h-5 mr-2 text-[#acc56a]" />
            Number of Questions
          </h3>
          <select
            className="w-full p-2 border rounded-md mt-2"
            value={selectedQuestions}
            onChange={(e) => setSelectedQuestions(Number(e.target.value))}
          >
            <option value={25}>25 questions</option>
            <option value={50}>50 questions</option>
            <option value={75}>75 questions</option>
            <option value={100}>100 questions</option>
          </select>
        </div>
      </div>
      <div className="mt-6">
        <button className="w-full bg-[#acc56a] text-white px-4 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors">
          Start Timed Practice
        </button>
      </div>
      <div className="mt-6 bg-gray-50 rounded-lg p-4 shadow-sm">
        <h3 className="font-semibold mb-2">Recent Timed Sessions</h3>
        <ul className="space-y-2">
          <li className="flex justify-between items-center">
            <span>30 minutes - 50 questions</span>
            <span className="text-[#acc56a] font-semibold">Score: 85%</span>
          </li>
          <li className="flex justify-between items-center">
            <span>45 minutes - 75 questions</span>
            <span className="text-[#acc56a] font-semibold">Score: 78%</span>
          </li>
          <li className="flex justify-between items-center">
            <span>60 minutes - 100 questions</span>
            <span className="text-[#acc56a] font-semibold">Score: 82%</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TimedPractice;