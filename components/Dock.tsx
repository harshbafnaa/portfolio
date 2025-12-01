import React from 'react';
import { NAV_ITEMS } from '../constants';
import { SectionType } from '../types';

interface DockProps {
  activeSection: SectionType;
  onNavigate: (section: SectionType) => void;
}

const Dock: React.FC<DockProps> = ({ activeSection, onNavigate }) => {
  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50 pointer-events-none">
      <div className="
        pointer-events-auto
        flex items-end gap-2 px-3 py-2
        bg-white/10 backdrop-blur-xl
        border border-white/20
        rounded-2xl
        shadow-mac-dock
      ">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.section as SectionType;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.section as SectionType)}
              className="group relative flex flex-col items-center justify-center transition-all duration-300 ease-out hover:-translate-y-2"
            >
              {/* Tooltip */}
              <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-mac-surface/90 text-xs px-2 py-1 rounded border border-white/10 backdrop-blur-sm mb-2 whitespace-nowrap">
                {item.label}
              </div>

              {/* Icon Container */}
              <div className={`
                w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shadow-lg transition-all
                ${item.id === 'feed' ? 'bg-white' : item.color}
                ${isActive ? 'brightness-110' : 'brightness-100'}
              `}>
                {item.id === 'feed' ? (
                   // Safari Icon Mock
                   <div className="relative w-full h-full rounded-xl bg-white overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-blue-500 opacity-20"></div>
                      <Icon size={32} className="text-blue-500 relative z-10" />
                   </div>
                ) : (
                   <Icon size={28} className="text-white drop-shadow-md" />
                )}
              </div>

              {/* Active Indicator */}
              <div className={`w-1 h-1 bg-white/80 rounded-full mt-1 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Dock;