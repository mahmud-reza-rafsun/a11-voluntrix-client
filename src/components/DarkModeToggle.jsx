// DarkToggle.jsx
import DarkModeToggle from 'react-dark-mode-toggle';
import { useState, useEffect } from 'react';

const DarkToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return <DarkModeToggle onChange={setIsDark} checked={isDark} size={50}/>;
};

export default DarkToggle;
