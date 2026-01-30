
import React from 'react';
import { PillarType } from '../types';

interface BottomNavProps {
  activePillar: PillarType;
  setActivePillar: (pillar: PillarType) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activePillar, setActivePillar }) => {
  const items = [
    { type: PillarType.HEART, label: 'Hub', icon: '🏠' },
    { type: PillarType.WORKSPACE, label: 'Work', icon: '💻' },
    { type: PillarType.MENTOR, label: 'Mentor', icon: '🎓' },
    { type: PillarType.VAULT, label: 'Vault', icon: '🔒' },
    { type: PillarType.NETWORK, label: 'Net', icon: '🤝' },
    { type: PillarType.PROFILE, label: 'Me', icon: '⚙️' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 w-full bg-white border-t border-neutral-light h-20 flex items-center justify-around px-2 z-50 rounded-t-3xl shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
      {items.map((item) => {
        const isActive = activePillar === item.type;
        return (
          <button
            key={item.type}
            onClick={() => setActivePillar(item.type)}
            className="flex flex-col items-center justify-center transition-all duration-300 transform active:scale-90 px-1"
          >
            <div className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-inlife-blue/10 text-inlife-pink' : 'text-neutral-medium'}`}>
              <span className="text-xl">{item.icon}</span>
            </div>
            <span className={`text-[10px] font-semibold mt-0.5 ${isActive ? 'text-inlife-pink' : 'text-neutral-medium'}`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
