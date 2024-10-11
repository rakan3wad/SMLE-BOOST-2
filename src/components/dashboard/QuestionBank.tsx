import React, { useState } from 'react';
import { Search } from 'lucide-react';

const categories = [
  { name: 'Surgery', questions: 2204 },
  { name: 'Internal Medicine', questions: 2610 },
  { name: 'Obstetrics and Gynecology', questions: 1405 },
  { name: 'Pediatrics', questions: 1109 },
  { name: 'Ethics, Psychiatry & Others', questions: 348 },
];

const QuestionBank = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="mb-6">
        <div className="flex items-center bg-gray-100 rounded-md p-2">
          <Search className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search questions..."
            className="bg-transparent border-none focus:outline-none flex-grow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-6">
        <select
          className="w-full p-2 border rounded-md"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          {categories.map((category) => (
            <option key={category.name} value={category.name}>{category.name}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category.name} className="bg-gray-50 rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold mb-2">{category.name}</h3>
            <p className="text-sm text-gray-600">{category.questions} questions</p>
            <button className="mt-2 bg-[#acc56a] text-white px-4 py-2 rounded-md text-sm hover:bg-opacity-90 transition-colors">
              Start Practice
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionBank;