import React, { useState } from 'react';
import MacWindow from '../ui/MacWindow';
import { ChevronLeft, ChevronRight, RotateCw, Share, ShieldCheck, Lock } from 'lucide-react';
import { EXPERIENCE } from '../../constants';

const ExperienceFeed: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <MacWindow 
        title="Safari"
        className="max-w-4xl"
        toolbar={
           <div className="flex items-center gap-4 w-full">
              <div className="flex gap-4 text-black/50">
                 <ChevronLeft size={18} />
                 <ChevronRight size={18} />
              </div>
              <div className="flex-1 flex justify-center">
                 <div className="w-full max-w-lg bg-[#3a3a3a] rounded-md py-1 px-3 flex items-center justify-center text-xs text-white/50 gap-2 shadow-inner">
                    <Lock size={10} className="text-white/50" />
                    <span>linkedin.com/in/bafnaharsh</span>
                 </div>
              </div>
              <div className="flex gap-4 text-black/50">
                 <Share size={16} />
                 <RotateCw size={16} />
              </div>
           </div>
        }
      >
        <div className="h-full bg-[#111] overflow-y-auto">
           {/* Webpage Content */}
           <div className="max-w-2xl mx-auto py-8 px-4">
              
              {/* Profile Header Block */}
              <div className="bg-[#1e1e1e] rounded-xl p-6 border border-white/10 mb-8">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10">
                       <img src="https://ui-avatars.com/api/?name=Harsh+Bafna&background=0A84FF&color=fff" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <div>
                       <h1 className="text-xl font-bold">Harsh Bafna</h1>
                       <p className="text-white/60 text-sm">Content Strategist • 2M+ Views • FinTech</p>
                       <p className="text-white/40 text-xs mt-1">Bangalore, India</p>
                    </div>
                    <button className="ml-auto bg-blue-600 text-white px-4 py-1.5 rounded-full font-semibold text-sm hover:bg-blue-500">Connect</button>
                 </div>
                 <div className="text-sm text-white/80">
                    Helping brands build narratives that convert. Specialized in Finance & Tech content.
                 </div>
              </div>

              {/* Feed Items */}
              <h2 className="text-lg font-bold mb-4 px-2">Experience</h2>
              
              <div className="space-y-4">
                 {EXPERIENCE.map((job) => (
                   <div key={job.id} className="bg-[#1e1e1e] rounded-xl p-4 border border-white/10">
                      <div className="flex gap-4">
                         <div className="w-12 h-12 rounded bg-white flex items-center justify-center overflow-hidden shrink-0">
                            <img src={job.logo} alt={job.company} className="w-full h-full object-contain p-1" />
                         </div>
                         <div className="flex-1">
                            <div className="flex justify-between items-start">
                               <div>
                                  <h3 className="font-bold text-base">{job.role}</h3>
                                  <p className="text-sm text-white/80">{job.company}</p>
                               </div>
                               <span className="text-xs text-white/40">{job.duration}</span>
                            </div>
                            
                            <p className="text-sm text-white/60 mt-2 mb-3 leading-relaxed">
                               {job.description}
                            </p>

                            {/* Stats Cards inside the post */}
                            <div className="grid grid-cols-2 gap-2 mt-2">
                               {job.stats.map((stat, i) => (
                                 <div key={i} className="bg-white/5 rounded p-2 text-center border border-white/5">
                                    <div className="text-lg font-bold text-blue-400">{stat.value}</div>
                                    <div className="text-[10px] uppercase tracking-wider text-white/40">{stat.label}</div>
                                 </div>
                               ))}
                            </div>
                         </div>
                      </div>
                   </div>
                 ))}
              </div>

              <div className="mt-8 text-center text-white/20 text-sm">
                 End of Results
              </div>
           </div>
        </div>
      </MacWindow>
    </div>
  );
};

export default ExperienceFeed;