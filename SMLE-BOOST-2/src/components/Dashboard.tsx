import React, { useState } from 'react';
import { Book, BarChart2, Brain, Clock, Calendar, Settings as SettingsIcon } from 'lucide-react';
import QuestionBank from './dashboard/QuestionBank';
import PerformanceTracking from './dashboard/PerformanceTracking';
import AdaptiveLearning from './dashboard/AdaptiveLearning';
import TimedPractice from './dashboard/TimedPractice';
import StudyPlan from './dashboard/StudyPlan';
import SettingsComponent from './dashboard/Settings';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('questionBank');

  const tabs = [
    { id: 'questionBank', name: 'Question Bank', icon: Book },
    { id: 'performanceTracking', name: 'Performance', icon: BarChart2 },
    { id: 'adaptiveLearning', name: 'Adaptive Learning', icon: Brain },
    { id: 'timedPractice', name: 'Timed Practice', icon: Clock },
    { id: 'studyPlan', name: 'Study Plan', icon: Calendar },
    { id: 'settings', name: 'Settings', icon: SettingsIcon },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'questionBank':
        return <QuestionBank />;
      case 'performanceTracking':
        return <PerformanceTracking />;
      case 'adaptiveLearning':
        return <AdaptiveLearning />;
      case 'timedPractice':
        return <TimedPractice />;
      case 'studyPlan':
        return <StudyPlan />;
      case 'settings':
        return <SettingsComponent />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <img src="https://i.ibb.co/QXHT4d5/SMLE-BOOST-logo.png" alt="SMLE BOOST Logo" className="h-8 w-auto mb-4" />
        </div>
        <nav className="mt-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center w-full px-4 py-2 text-left ${
                activeTab === tab.id ? 'bg-[#acc56a] text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">
              {tabs.find(tab => tab.id === activeTab)?.name}
            </h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;