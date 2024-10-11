import React, { useState } from 'react';
import { Calendar, CheckCircle, Clock } from 'lucide-react';

const StudyPlan = () => {
  const [examDate, setExamDate] = useState('');

  const handleExamDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExamDate(e.target.value);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Custom Study Plan</h2>
      <div className="mb-6">
        <label htmlFor="examDate" className="block text-sm font-medium text-gray-700 mb-2">
          Set Your SMLE Exam Date
        </label>
        <input
          type="date"
          id="examDate"
          name="examDate"
          value={examDate}
          onChange={handleExamDateChange}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
          <h3 className="font-semibold mb-2 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-[#acc56a]" />
            Today's Study Goals
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-[#acc56a]" />
              <span>Review Cardiology Chapter</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-[#acc56a]" />
              <span>Complete 50 Practice Questions</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-gray-300" />
              <span>Watch Video Lecture on Endocrinology</span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
          <h3 className="font-semibold mb-2 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-[#acc56a]" />
            Study Time Allocation
          </h3>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>Cardiology</span>
              <span className="font-semibold">2 hours</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Practice Questions</span>
              <span className="font-semibold">1.5 hours</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Video Lecture</span>
              <span className="font-semibold">1 hour</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
        <h3 className="font-semibold mb-2">Weekly Progress</h3>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-[#acc56a] h-2.5 rounded-full" style={{ width: '70%' }}></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">You've completed 70% of this week's study plan</p>
      </div>
      <button className="mt-6 w-full bg-[#acc56a] text-white px-4 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors">
        Adjust Study Plan
      </button>
    </div>
  );
};

export default StudyPlan;