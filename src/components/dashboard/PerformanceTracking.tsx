import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const performanceData = [
  { category: 'Surgery', score: 85 },
  { category: 'IM', score: 72 },
  { category: 'ob gyn', score: 90 },
  { category: 'Pediatrics', score: 78 },
  { category: 'Other', score: 88 },
];

const PerformanceTracking = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Your Performance Overview</h2>
      <div className="mb-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="score" fill="#acc56a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
          <h3 className="font-semibold mb-2">Overall Progress</h3>
          <p className="text-2xl font-bold text-[#acc56a]">82%</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
          <h3 className="font-semibold mb-2">Questions Answered</h3>
          <p className="text-2xl font-bold text-[#acc56a]">3,245</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
          <h3 className="font-semibold mb-2">Study Time</h3>
          <p className="text-2xl font-bold text-[#acc56a]">127 hours</p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceTracking;