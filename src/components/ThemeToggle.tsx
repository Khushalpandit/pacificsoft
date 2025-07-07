import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const buttonClasses = `
    relative w-12 h-12 rounded-full transition-all duration-300 ease-in-out
    bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700
    border border-gray-200 dark:border-gray-600
    flex items-center justify-center group overflow-hidden
    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
    focus:ring-offset-white dark:focus:ring-offset-gray-900
  `;

  const iconClasses = `
    w-5 h-5 transition-all duration-300 ease-in-out
    ${theme === 'light' ? 'text-yellow-500' : 'text-blue-400'}
  `;

  return (
    <motion.button
      onClick={toggleTheme}
      className={buttonClasses}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-5 h-5">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            rotate: theme === 'light' ? 0 : 180,
            scale: theme === 'light' ? 1 : 0,
            opacity: theme === 'light' ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Sun className={iconClasses} />
        </motion.div>
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            rotate: theme === 'dark' ? 0 : -180,
            scale: theme === 'dark' ? 1 : 0,
            opacity: theme === 'dark' ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Moon className={iconClasses} />
        </motion.div>
      </div>
      
      {/* Glow effect */}
      <motion.div 
        className={`absolute inset-0 rounded-full transition-all duration-300 ${
          theme === 'light' 
            ? 'bg-yellow-500/10 shadow-lg shadow-yellow-500/20' 
            : 'bg-blue-400/10 shadow-lg shadow-blue-400/20'
        }`}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
};

export default ThemeToggle;