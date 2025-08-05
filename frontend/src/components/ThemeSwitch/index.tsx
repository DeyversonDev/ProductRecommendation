import { useTheme } from '../../hooks/useTheme';

export function ThemeSwitch() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
        darkMode ? 'bg-gray-700' : 'bg-gray-300'
      }`}
    >
      <span
        className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow transition-transform duration-300 ${
          darkMode ? 'translate-x-6' : ''
        }`}
      />
    </button>
  );
}
