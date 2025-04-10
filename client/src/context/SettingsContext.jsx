// src/context/SettingsContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const SettingsContext = createContext();

export const useSettings = () => {
  return useContext(SettingsContext);
};

export const SettingsProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [fontSize, setFontSize] = useState(() => localStorage.getItem('fontSize') || '14');
  const [tabSize, setTabSize] = useState(() => localStorage.getItem('tabSize') || '2');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('fontSize', fontSize);
    localStorage.setItem('tabSize', tabSize);
  }, [theme, fontSize, tabSize]);

  return (
    <SettingsContext.Provider value={{ theme, setTheme, fontSize, setFontSize, tabSize, setTabSize }}>
      {children}
    </SettingsContext.Provider>
  );
};
