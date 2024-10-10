import React from 'react';
import { Bell, Moon, Sun, Volume2 } from 'lucide-react';

interface SettingsProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Settings: React.FC<SettingsProps> = ({ darkMode, toggleDarkMode }) => {
  const [notifications, setNotifications] = React.useState(true);
  const [sound, setSound] = React.useState(true);

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Settings</h2>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {darkMode ? <Moon className="w-5 h-5 mr-2 text-gray-300" /> : <Sun className="w-5 h-5 mr-2 text-yellow-500" />}
            <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#acc56a] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#acc56a]"></div>
          </label>
        </div>
        {/* Other settings remain unchanged */}
      </div>
      <div className="mt-8">
        <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Account Information</h3>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <p className="text-gray-700 dark:text-gray-300"><strong>Name:</strong> John Doe</p>
          <p className="text-gray-700 dark:text-gray-300"><strong>Email:</strong> john.doe@example.com</p>
          <p className="text-gray-700 dark:text-gray-300"><strong>Subscription:</strong> Premium (Valid until 2024-12-31)</p>
        </div>
      </div>
      <div className="mt-6 flex space-x-4">
        <button className="flex-1 bg-[#acc56a] text-white px-4 py-2 rounded-md font-semibold hover:bg-opacity-90 transition-colors">
          Update Profile
        </button>
        <button className="flex-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md font-semibold hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">
          Change Password
        </button>
      </div>
    </div>
  );
};

export default Settings;