import React, { useState } from 'react';
import MacWindow from '../ui/MacWindow';
import { PROJECTS } from '../../constants';
import { Play, Heart, Sidebar, ChevronLeft, LayoutGrid, Image as ImageIcon } from 'lucide-react';

const PortfolioStudio: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Shorts' | 'Long-form'>('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.type === filter);

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <MacWindow 
        title="Photos"
        sidebar={
           <div className="p-2 space-y-1 text-mac-gray">
              <div className="text-xs font-semibold px-2 py-1 text-white/40 mb-1">Library</div>
              <div className="flex items-center gap-2 px-2 py-1.5 bg-blue-500/20 text-white rounded cursor-pointer">
                 <LayoutGrid size={14} /> Library
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-white/5 rounded cursor-pointer">
                 <Heart size={14} /> Favorites
              </div>
              
              <div className="text-xs font-semibold px-2 py-1 text-white/40 mt-4 mb-1">Albums</div>
              <div onClick={() => setFilter('All')} className={`flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer ${filter === 'All' ? 'text-white' : 'hover:bg-white/5'}`}>
                 <ImageIcon size={14} /> All Media
              </div>
              <div onClick={() => setFilter('Shorts')} className={`flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer ${filter === 'Shorts' ? 'text-white' : 'hover:bg-white/5'}`}>
                 <Play size={14} /> Shorts
              </div>
              <div onClick={() => setFilter('Long-form')} className={`flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer ${filter === 'Long-form' ? 'text-white' : 'hover:bg-white/5'}`}>
                 <Play size={14} /> Videos
              </div>
           </div>
        }
        toolbar={
           <div className="flex items-center justify-between w-full px-2">
              <div className="flex gap-4">
                 <Sidebar size={18} className="text-black/50" />
                 <ChevronLeft size={18} className="text-black/50" />
              </div>
              <div className="flex bg-black/10 rounded-md p-0.5">
                 <button onClick={() => setFilter('All')} className={`px-3 py-0.5 text-xs font-medium rounded-sm ${filter === 'All' ? 'bg-white/20 text-black shadow-sm' : 'text-black/50'}`}>Years</button>
                 <button className={`px-3 py-0.5 text-xs font-medium rounded-sm text-black/50`}>Months</button>
                 <button className={`px-3 py-0.5 text-xs font-medium rounded-sm bg-white text-black shadow-sm`}>All Photos</button>
              </div>
              <div className="w-4"></div>
           </div>
        }
      >
        <div className="h-full bg-[#1e1e1e] overflow-y-auto p-4">
           {/* Date Header */}
           <div className="text-xl font-bold text-white mb-4 px-1 sticky top-0 bg-[#1e1e1e]/90 backdrop-blur z-10 py-2">
              {filter === 'All' ? 'Library' : filter}
           </div>

           <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              {filteredProjects.map((project) => (
                <div 
                   key={project.id} 
                   className="aspect-square relative group cursor-pointer overflow-hidden rounded bg-black"
                   onClick={() => window.open(project.link, '_blank')}
                >
                   <img 
                      src={`https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                   />
                   
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                      <div className="text-xs font-bold text-white truncate">{project.title}</div>
                      <div className="flex items-center gap-3 text-[10px] text-white/80 mt-1">
                         <span className="flex items-center gap-1"><Play size={10} fill="currentColor" /> {project.views}</span>
                         <span className="flex items-center gap-1"><Heart size={10} fill="currentColor" /> {project.engagement}</span>
                      </div>
                   </div>

                   {/* Video Badge */}
                   <div className="absolute top-2 right-2 text-white drop-shadow-md">
                      {project.type === 'Shorts' ? <Play size={16} fill="white" /> : <Play size={16} />}
                   </div>
                </div>
              ))}
           </div>
           
           <div className="text-center text-mac-gray text-xs mt-8 pb-4">
              {filteredProjects.length} Videos, 0 Photos
           </div>
        </div>
      </MacWindow>
    </div>
  );
};

export default PortfolioStudio;