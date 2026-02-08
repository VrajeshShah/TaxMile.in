import React from 'react';
import { motion } from 'framer-motion';

interface SectionContainerProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({ children, title, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.99 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`w-full h-full pt-20 pb-4 px-4 md:px-12 overflow-hidden flex flex-col ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-primary-800 mb-8 shrink-0 tracking-tight"
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex-grow overflow-y-auto pr-4 custom-scrollbar pb-10"
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
};
