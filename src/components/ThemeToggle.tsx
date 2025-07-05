import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/20 flex items-center justify-center hover:bg-white/20 dark:hover:bg-white/20 transition-all duration-300 group overflow-hidden"
      aria-label="Toggle theme"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative w-6 h-6">
        <motion.div
          className="absolute inset-0"
          animate={{
            rotate: theme === 'light' ? 0 : 180,
            scale: theme === 'light' ? 1 : 0,
            opacity: theme === 'light' ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Sun className="w-6 h-6 text-yellow-500" />
        </motion.div>
        
        <motion.div
          className="absolute inset-0"
          animate={{
            rotate: theme === 'dark' ? 0 : -180,
            scale: theme === 'dark' ? 1 : 0,
            opacity: theme === 'dark' ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Moon className="w-6 h-6 text-blue-400" />
        </motion.div>
      </div>
      
      {/* Glow effect */}
      <motion.div 
        className={`absolute inset-0 rounded-full transition-all duration-300 ${
          theme === 'light' 
            ? 'bg-yellow-500/20 shadow-lg shadow-yellow-500/25' 
            : 'bg-blue-400/20 shadow-lg shadow-blue-400/25'
        }`}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
};

export default ThemeToggle;