'use client';

import React, { useState, useEffect } from 'react';

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded h-4 w-4 text-muted-foreground"
    >
      {darkMode ? '🌞' : '🌙'}
    </button>
  );
};

export default DarkModeToggle;
