import React from 'react';
import { motion } from 'framer-motion';

interface MacWindowProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  sidebar?: React.ReactNode;
  toolbar?: React.ReactNode;
  onClose?: () => void;
  isActive?: boolean;
}

const MacWindow: React.FC<MacWindowProps> = ({ 
  children, 
  title, 
  className = '', 
  sidebar, 
  toolbar,
  onClose,
  isActive = true
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
      className={`
        flex flex-col
        rounded-xl overflow-hidden
        shadow-mac-window border border-white/10
        bg-mac-window backdrop-blur-2xl
        ${className}
      `}
      style={{
        width: 'min(1200px, 95vw)',
        height: 'min(800px, 85vh)',
      }}
    >
      {/* Title Bar / Toolbar */}
      <div className={`
        h-12 flex items-center px-4 shrink-0 select-none
        ${sidebar ? 'bg-mac-sidebar/50' : 'bg-transparent'}
        border-b border-black/20
      `}>
        {/* Traffic Lights */}
        <div className="flex gap-2 group mr-4">
          <button onClick={onClose} className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] flex items-center justify-center text-[8px] text-black/50 opacity-100 hover:text-black">
          </button>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
        </div>

        {/* Toolbar Controls (Sidebar Toggle, Back/Forward etc) */}
        {toolbar && (
          <div className="flex-1 flex items-center">
            {toolbar}
          </div>
        )}

        {/* Center Title (optional if no toolbar) */}
        {!toolbar && title && (
          <div className="absolute left-1/2 -translate-x-1/2 text-sm font-semibold text-white/90 flex items-center gap-2">
             {title}
          </div>
        )}
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {sidebar && (
          <div className="w-64 shrink-0 bg-mac-sidebar backdrop-blur-xl border-r border-white/5 flex flex-col text-sm hidden md:flex">
             {sidebar}
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 bg-mac-surface/30 relative flex flex-col overflow-hidden">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default MacWindow;