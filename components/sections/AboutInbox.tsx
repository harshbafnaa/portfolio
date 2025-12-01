import React, { useState } from 'react';
import MacWindow from '../ui/MacWindow';
import { Search, Mail, Star, Send, Trash, Edit, Reply, Forward } from 'lucide-react';

const MESSAGES = [
  {
    id: 1,
    sender: "Harsh Bafna",
    subject: "My Journey: From Editing to Strategy",
    time: "9:41 AM",
    preview: "My journey began in the editing room...",
    body: "My journey began in the editing room, meticulously crafting frames. But I realized the real magic wasn't just in the cuts—it was in the story. I pivoted to content strategy to help finance brands find their voice in a noisy digital world.\n\nI believe that every brand has a story that can stop the scroll if told correctly."
  },
  {
    id: 2,
    sender: "Achievement System",
    subject: "Viral Growth Milestone Unlocked 🏆",
    time: "Yesterday",
    preview: "Leading a team of 5 editors and...",
    body: "Leading a team of 5 editors and 2 writers, we cracked the code on 'edutainment' for fintech. \n\nResults:\n- 35% growth in followers\n- Over 2 million organic views\n- 97.5% Accuracy rate in content operations"
  },
  {
    id: 3,
    sender: "Collaboration Request",
    subject: "Let's work together",
    time: "Monday",
    preview: "I'm currently seeking opportunities...",
    body: "I'm currently seeking opportunities where I can blend analytical rigor with creative direction. Ready to deploy my 'Creator OS' to solve business problems. \n\nReach out if you need someone who speaks both 'Creative' and 'Business'."
  }
];

const AboutInbox: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number>(1);
  const activeMessage = MESSAGES.find(m => m.id === selectedId);

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <MacWindow 
        title="Mail"
        toolbar={
          <div className="flex items-center gap-4 w-full">
            <div className="flex gap-4 text-mac-gray">
              <Mail size={18} className="text-black/80" />
              <Trash size={18} className="text-black/50" />
              <div className="w-[1px] h-4 bg-black/10"></div>
              <Reply size={18} className="text-black/50" />
              <Forward size={18} className="text-black/50" />
            </div>
            <div className="flex-1"></div>
            <div className="relative">
              <Search size={14} className="absolute left-2 top-1.5 text-black/40" />
              <input type="text" placeholder="Search" className="bg-black/10 rounded-md py-1 pl-7 pr-2 text-sm w-40 focus:outline-none placeholder-black/40 text-black" />
            </div>
          </div>
        }
        sidebar={
          <div className="py-2 px-3 text-mac-gray font-medium">
             <div className="text-xs font-semibold text-white/40 mb-2 px-2">Favorites</div>
             <div className="flex items-center justify-between bg-blue-500/20 text-blue-400 px-2 py-1.5 rounded-md cursor-pointer mb-1">
                <div className="flex items-center gap-2"><Mail size={14} /> Inbox</div>
                <span className="text-xs">3</span>
             </div>
             <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-white/5 rounded-md cursor-pointer mb-1">
                <Send size={14} /> Sent
             </div>
             <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-white/5 rounded-md cursor-pointer mb-1">
                <Star size={14} /> VIP
             </div>
          </div>
        }
      >
        <div className="flex h-full bg-[#1e1e1e]">
           {/* Message List */}
           <div className="w-80 border-r border-white/10 flex flex-col bg-mac-surface/20">
              {MESSAGES.map((msg) => (
                <div 
                  key={msg.id}
                  onClick={() => setSelectedId(msg.id)}
                  className={`p-3 border-b border-white/5 cursor-pointer ${selectedId === msg.id ? 'bg-blue-600' : 'hover:bg-white/5'}`}
                >
                   <div className="flex justify-between mb-1">
                      <span className={`font-bold text-sm ${selectedId === msg.id ? 'text-white' : 'text-white'}`}>{msg.sender}</span>
                      <span className={`text-xs ${selectedId === msg.id ? 'text-white/80' : 'text-white/50'}`}>{msg.time}</span>
                   </div>
                   <div className={`text-xs mb-1 font-medium ${selectedId === msg.id ? 'text-white' : 'text-white/90'}`}>{msg.subject}</div>
                   <div className={`text-xs truncate ${selectedId === msg.id ? 'text-white/70' : 'text-white/50'}`}>{msg.preview}</div>
                </div>
              ))}
           </div>

           {/* Reading Pane */}
           <div className="flex-1 p-8 overflow-y-auto bg-[#1e1e1e]">
              {activeMessage ? (
                <>
                  <div className="flex items-start justify-between mb-6 border-b border-white/10 pb-6">
                     <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center font-bold text-white">
                           {activeMessage.sender[0]}
                        </div>
                        <div>
                           <h2 className="text-lg font-bold text-white">{activeMessage.sender}</h2>
                           <div className="text-sm text-white/60">To: Me &lt;bafnaharsh3@gmail.com&gt;</div>
                        </div>
                     </div>
                     <div className="text-sm text-white/40">{activeMessage.time}</div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-6 text-white">{activeMessage.subject}</h3>
                  
                  <div className="text-white/80 whitespace-pre-line leading-relaxed">
                     {activeMessage.body}
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center h-full text-white/30">No Message Selected</div>
              )}
           </div>
        </div>
      </MacWindow>
    </div>
  );
};

export default AboutInbox;