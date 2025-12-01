import React from 'react';
import MacWindow from '../ui/MacWindow';
import { User, MapPin, Briefcase, Link as LinkIcon, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../constants';

interface LandingProps {
  onEnter: () => void;
}

const Landing: React.FC<LandingProps> = ({ onEnter }) => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <MacWindow 
        title="Harsh Bafna — Preview"
        className="max-w-2xl max-h-[600px]"
        sidebar={
           <div className="p-2 space-y-1 text-mac-gray">
             <div className="text-xs font-semibold px-2 py-1 text-white/50">Favorites</div>
             <div className="flex items-center gap-2 px-2 py-1 bg-blue-500/20 text-white rounded">
               <User size={14} /> Desktop
             </div>
             <div className="flex items-center gap-2 px-2 py-1 hover:bg-white/5 rounded">
               <Briefcase size={14} /> Documents
             </div>
             <div className="flex items-center gap-2 px-2 py-1 hover:bg-white/5 rounded">
               <LinkIcon size={14} /> Downloads
             </div>
           </div>
        }
      >
        <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-black/40">
           {/* Profile Image (Icon style) */}
           <div className="w-32 h-32 rounded-full border-4 border-white/10 shadow-2xl mb-6 overflow-hidden relative">
              <img src="https://ui-avatars.com/api/?name=Harsh+Bafna&size=256&background=0A84FF&color=fff" alt="Profile" className="w-full h-full object-cover" />
           </div>

           <h1 className="text-3xl font-bold mb-2 tracking-tight">Harsh Bafna</h1>
           <p className="text-mac-gray mb-6 text-lg">{PERSONAL_INFO.tagline}</p>

           <div className="flex items-center gap-4 text-sm text-mac-gray mb-8">
              <div className="flex items-center gap-1">
                 <MapPin size={14} /> Bangalore
              </div>
              <div className="w-1 h-1 bg-white/20 rounded-full"></div>
              <div className="flex items-center gap-1">
                 <Briefcase size={14} /> Content Strategist
              </div>
           </div>

           <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
              <button onClick={onEnter} className="bg-mac-accent hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium shadow-lg transition-colors flex items-center justify-center gap-2">
                 Open Portfolio <ChevronRight size={16} />
              </button>
              <button 
                 onClick={() => window.open(PERSONAL_INFO.contact.linkedin, '_blank')}
                 className="bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg font-medium transition-colors border border-white/10"
              >
                 LinkedIn
              </button>
           </div>
        </div>
      </MacWindow>
    </div>
  );
};

export default Landing;