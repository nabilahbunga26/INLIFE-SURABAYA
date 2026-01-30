
import React, { useState, useEffect } from 'react';
import { PillarType } from './types';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Sidebar from './components/Sidebar';
import PillarHeart from './sections/PillarHeart';
import PillarWorkspace from './sections/PillarWorkspace';
import PillarVault from './sections/PillarVault';
import PillarNetwork from './sections/PillarNetwork';
import PillarProfile from './sections/PillarProfile';
import PillarMentor from './sections/PillarMentor';
import SplashScreen from './components/SplashScreen';

const App: React.FC = () => {
  const [activePillar, setActivePillar] = useState<PillarType>(PillarType.HEART);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  const renderContent = () => {
    switch (activePillar) {
      case PillarType.HEART: return <PillarHeart />;
      case PillarType.WORKSPACE: return <PillarWorkspace />;
      case PillarType.MENTOR: return <PillarMentor />;
      case PillarType.VAULT: return <PillarVault />;
      case PillarType.NETWORK: return <PillarNetwork />;
      case PillarType.PROFILE: return <PillarProfile />;
      default: return <PillarHeart />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-bg flex">
      <Sidebar activePillar={activePillar} setActivePillar={setActivePillar} />
      
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto pb-24 md:pb-8 pt-4 px-4 md:px-8 max-w-7xl mx-auto w-full hide-scrollbar">
          <div className="w-full transition-all duration-300 animate-fade-in">
            {renderContent()}
          </div>
        </main>

        <BottomNav activePillar={activePillar} setActivePillar={setActivePillar} />
      </div>
    </div>
  );
};

export default App;
