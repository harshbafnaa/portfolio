import React from 'react';
import MacWindow from '../ui/MacWindow';
import { ACHIEVEMENTS } from '../../constants';
import { Grid, List, Type, Edit3, Trash2 } from 'lucide-react';

const AchievementsBoard: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <MacWindow 
        title="Notes"
        sidebar={
           <div className="p-2 space-y-1 text-mac-gray">
              <div className="text-xs font-semibold px-2 py-1 text-white/40">iCloud</div>
              <div className="flex items-center justify-between px-2 py-1.5 bg-[#d1a036]/20 text-[#ffd569] rounded cursor-pointer">
                 <div className="flex items-center gap-2 font-medium"><List size={14} /> Achievements</div>
                 <span className="text-xs opacity-70">4</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-white/5 rounded cursor-pointer">
                 <List size={14} /> Ideas
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-white/5 rounded cursor-pointer">
                 <List size={14} /> Drafts
              </div>
           </div>
        }
        toolbar={
           <div className="flex items-center justify-between w-full">
              <div className="flex gap-4 text-black/50">
                 <Grid size={18} />
                 <Trash2 size={18} />
              </div>
              <div className="flex gap-4 text-black/50">
                 <Edit3 size={18} />
                 <Type size={18} />
              </div>
           </div>
        }
      >
        <div className="flex h-full">
           {/* Notes List */}
           <div className="w-64 bg-[#1e1e1e] border-r border-white/10 flex flex-col overflow-y-auto">
              {ACHIEVEMENTS.map((ach) => (
                 <div key={ach.id} className="p-4 border-b border-white/5 hover:bg-white/5 cursor-pointer group">
                    <h4 className="font-bold text-sm text-white mb-1 group-hover:text-[#ffd569] transition-colors">{ach.title}</h4>
                    <div className="flex gap-2 text-xs text-white/40">
                       <span>{ach.date}</span>
                       <span className="truncate">{ach.description}</span>
                    </div>
                 </div>
              ))}
           </div>

           {/* Note Content */}
           <div className="flex-1 bg-[#1e1e1e] p-8 overflow-y-auto text-white">
              <div className="text-xs text-center text-white/30 mb-6">Today, 10:23 AM</div>
              
              <h1 className="text-3xl font-bold mb-6">Career Highlights & Awards</h1>
              
              <div className="space-y-6">
                 {ACHIEVEMENTS.map((ach) => (
                    <div key={ach.id} className="flex gap-3 items-start">
                       <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ffd569] shrink-0"></div>
                       <div>
                          <span className="font-semibold text-lg text-[#ffd569]">{ach.category}</span>
                          <div className="text-white/90 font-medium text-lg">{ach.title}</div>
                          <div className="text-white/60 leading-relaxed">{ach.description}</div>
                       </div>
                    </div>
                 ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10 text-white/40 italic font-serif">
                 "Consistent action creates consistent results."
              </div>
           </div>
        </div>
      </MacWindow>
    </div>
  );
};

export default AchievementsBoard;