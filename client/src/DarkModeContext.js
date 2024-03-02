import React, { createContext, useState, useEffect } from 'react';
 
export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkModeEnabled = JSON.parse(localStorage.getItem('darkMode'));
    if (isDarkModeEnabled !== null) {
      setDarkMode(isDarkModeEnabled);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
