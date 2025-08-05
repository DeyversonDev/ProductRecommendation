import { useEffect, useState } from 'react';

function getInitialTheme(): boolean {
  const storedTheme = localStorage.getItem('theme');

  if (storedTheme) return storedTheme === 'dark';

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function useTheme() {
  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');

      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');

      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return { darkMode, toggleTheme };
}
