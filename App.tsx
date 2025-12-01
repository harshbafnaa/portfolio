import React, { useState } from 'react';
import Landing from './components/sections/Landing';
import AboutInbox from './components/sections/AboutInbox';
import ExperienceFeed from './components/sections/ExperienceFeed';
import PortfolioStudio from './components/sections/PortfolioStudio';
import AchievementsBoard from './components/sections/AchievementsBoard';
import ContactChat from './components/sections/ContactChat';
import Dock from './components/Dock';
import TopBar from './components/TopBar';
import { SectionType } from './types';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionType>(SectionType.LANDING);

  const handleNavigate = (section: SectionType) => {
    setActiveSection(section);
  };

  const renderSection = () => {
    switch (activeSection) {
      case SectionType.LANDING:
        return <Landing onEnter={() => handleNavigate(SectionType.INBOX)} />;
      case SectionType.INBOX:
        return <AboutInbox />;
      case SectionType.FEED:
        return <ExperienceFeed />;
      case SectionType.STUDIO:
        return <PortfolioStudio />;
      case SectionType.BOARD:
        return <AchievementsBoard />;
      case SectionType.CHAT:
        return <ContactChat />;
      default:
        return <Landing onEnter={() => handleNavigate(SectionType.INBOX)} />;
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden macos-wallpaper font-sans text-white select-none">
      
      {/* System Top Bar */}
      <TopBar />

      {/* Desktop Area */}
      <main className="absolute inset-0 pt-7 pb-24 z-10 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {renderSection()}
        </AnimatePresence>
      </main>

      {/* Dock */}
      <Dock activeSection={activeSection} onNavigate={handleNavigate} />

    </div>
  );
};

export default App;