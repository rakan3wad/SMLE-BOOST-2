import React from 'react';
import { Brain, TrendingUp, AlertTriangle } from 'lucide-react';

const AdaptiveLearning = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Adaptive Learning</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
          <h3 className="font-semibold mb-2 flex items-center">
            <Brain className="w-5 h-5 mr-2 text-[#acc56a]" />
            Recommended Focus Areas
          </h3>
          <ul className="list-disc list-inside">
            <li>Surgical Procedures</li>
            <li>Internal Medicine: Cardiology</li>
            <li>Obstetrics: High-Risk Pregnancies</li>
          </ul>
          <button className="mt-4 bg-[#acc56a] text-white px-4 py-2 rounded-md text-sm hover:bg-opacity-90 transition-colors">
            Start Focused Session
          </button>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
          <h3 className="font-semibold mb-2 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-[#acc56a]" />
            Progress Insights
          </h3>
          <p>Your performance has improved by 18% in Internal Medicine this week.</p>
          <p className="mt-2">Keep up the good work!</p>
        </div>
      </div>
      <div className="mt-6 bg-gray-50 rounded-lg p-4 shadow-sm">
        <h3 className="font-semibold mb-2 flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2 text-[#acc56a]" />
          Weak Areas
        </h3>
        <ul className="list-disc list-inside">
          <li>Pediatrics: Neonatal Care</li>
          <li>Ethics: Patient Confidentiality</li>
          <li>Surgery: Orthopedic Procedures</li>
        </ul>
        <button className="mt-4 bg-[#acc56a] text-white px-4 py-2 rounded-md text-sm hover:bg-opacity-90 transition-colors">
          Review Weak Areas
        </button>
      </div>
    </div>
  );
};

export default AdaptiveLearning;