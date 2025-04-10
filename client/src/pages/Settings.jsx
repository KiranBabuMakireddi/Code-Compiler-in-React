// src/components/Settings.js
import React from 'react';
import { useSettings } from '../context/SettingsContext';

const Settings = () => {
  const { theme, setTheme, fontSize, setFontSize, tabSize, setTabSize } = useSettings();

  return (
    <div className="p-6 text-white space-y-6">
      <h2 className="text-3xl font-bold">🛠️ Editor Settings</h2>
      <p className="text-gray-300">Customize your preferences, theme, and editor behavior.</p>

      {/* Theme Toggle */}
      <div>
        <label className="block mb-1 font-semibold">🎨 Theme</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
          <option value="dracula">Dracula</option>
          <option value="monokai">Monokai</option>
        </select>
      </div>

      {/* Font Size */}
      <div>
        <label className="block mb-1 font-semibold">🔠 Font Size (px)</label>
        <input
          type="number"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          min="10"
          max="32"
          className="bg-gray-800 text-white px-4 py-2 rounded w-24"
        />
      </div>

      {/* Tab Size */}
      <div>
        <label className="block mb-1 font-semibold">📏 Tab Size (spaces)</label>
        <select
          value={tabSize}
          onChange={(e) => setTabSize(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="8">8</option>
        </select>
      </div>

      <div className="text-sm text-gray-400 pt-4">
        Your preferences are saved locally and will persist between visits.
      </div>
    </div>
  );
};

export default Settings;
