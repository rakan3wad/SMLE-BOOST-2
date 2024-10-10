import React, { useState, useEffect } from 'react';
import { Book, BarChart2, Brain, Clock, Calendar, Settings as SettingsIcon, Home, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuestionBank from './QuestionBank';
import PerformanceTracking from './PerformanceTracking';
import AdaptiveLearning from './AdaptiveLearning';
import TimedPractice from './TimedPractice';
import StudyPlan from './StudyPlan';
import SettingsComponent from './Settings';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('questionBank');
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

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
        return <SettingsComponent darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
      default:
        return null;
    }
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    alert("This is only a demo");
    if (window.innerWidth < 768) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Sidebar for desktop */}
      <div className="hidden md:block w-64 bg-white dark:bg-gray-800 shadow-md">
        <div className="p-4">
          <img src="https://i.ibb.co/QXHT4d5/SMLE-BOOST-logo.png" alt="SMLE BOOST Logo" className="h-8 w-auto mb-4" />
        </div>
        <nav className="mt-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex items-center w-full px-4 py-2 text-left ${
                activeTab === tab.id ? 'bg-[#acc56a] text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-50 md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="bg-white dark:bg-gray-800 h-full w-64 shadow-lg">
          <div className="p-4 flex justify-between items-center">
            <img src="https://i.ibb.co/QXHT4d5/SMLE-BOOST-logo.png" alt="SMLE BOOST Logo" className="h-8 w-auto" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="mt-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center w-full px-4 py-2 text-left ${
                  activeTab === tab.id ? 'bg-[#acc56a] text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center">
              <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden mr-2 text-gray-600 dark:text-gray-300">
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {tabs.find(tab => tab.id === activeTab)?.name}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Home className="w-6 h-6" />
              </Link>
              <Link
                to="/get-started"
                className="bg-[#acc56a] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                onClick={() => alert("This is only a demo")}
              >
                Join the whitelist
              </Link>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto bg-gray-100 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;