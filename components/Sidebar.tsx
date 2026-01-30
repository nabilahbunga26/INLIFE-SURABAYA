
import React from 'react';
import { PillarType } from '../types';

interface SidebarProps {
  activePillar: PillarType;
  setActivePillar: (pillar: PillarType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePillar, setActivePillar }) => {
  const items = [
    { type: PillarType.HEART, label: 'Performance Hub', icon: '🏠' },
    { type: PillarType.WORKSPACE, label: 'Project Workspace', icon: '💻' },
    { type: PillarType.MENTOR, label: 'Mentor Hub', icon: '🎓' },
    { type: PillarType.VAULT, label: 'The Vault', icon: '🔒' },
    { type: PillarType.NETWORK, label: 'The Network', icon: '🤝' },
    { type: PillarType.PROFILE, label: 'Profile & Settings', icon: '⚙️' },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 lg:w-72 bg-white border-r border-neutral-light h-screen sticky top-0 z-[60]">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-inlife-pink rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">i</div>
          <div>
            <h2 className="text-neutral-dark font-black text-lg leading-tight tracking-tight italic">inLife</h2>
            <p className="text-inlife-blue text-[10px] font-bold uppercase tracking-widest">Surabaya</p>
          </div>
        </div>

        <nav className="space-y-1">
          {items.map((item) => {
            const isActive = activePillar === item.type;
            return (
              <button
                key={item.type}
                onClick={() => setActivePillar(item.type)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r from-inlife-pink to-inlife-blue text-white shadow-md' 
                    : 'text-neutral-medium hover:bg-neutral-bg hover:text-neutral-dark'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-bold text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto p-6 space-y-4">
        {/* Logout Button */}
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-medium hover:text-telkomsel-red hover:bg-telkomsel-red/5 transition-all group">
          <svg className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span className="font-black text-sm uppercase tracking-widest">LOGOUT</span>
        </button>

        {/* New Correct Branding Logo Footnote */}
        <div className="pt-4 border-t border-neutral-light/50">
          <img 
            src="data:image/png;base64,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" 
            alt="inLife Branding" 
            className="w-full h-auto object-contain max-h-12 opacity-90" 
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
