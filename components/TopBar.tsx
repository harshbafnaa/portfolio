import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Search, Command } from 'lucide-react';

const TopBar: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', weekday: 'short' });
  };

  return (
    <div className="fixed top-0 left-0 right-0 h-7 bg-black/20 backdrop-blur-xl flex items-center justify-between px-4 text-xs font-medium text-white select-none z-50">
      <div className="flex items-center gap-4">
        <div className="font-bold text-lg leading-none mb-1"></div>
        <span className="font-bold hidden md:inline">Harsh Bafna</span>
        <span className="hidden md:inline">File</span>
        <span className="hidden md:inline">Edit</span>
        <span className="hidden md:inline">View</span>
        <span className="hidden md:inline">Go</span>
        <span className="hidden md:inline">Window</span>
        <span className="hidden md:inline">Help</span>
      </div>

      <div className="flex items-center gap-4">
        <Battery size={16} className="text-white/80" />
        <Wifi size={14} className="text-white/80" />
        <Search size={14} className="text-white/80" />
        <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-white/10 rounded flex items-center justify-center">
                <Command size={10} />
            </div>
        </div>
        <span>{formatTime(time)}</span>
      </div>
    </div>
  );
};

export default TopBar;