
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="gradient-header h-16 px-4 flex items-center justify-between sticky top-0 z-50 rounded-b-2xl shadow-lg">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-white shadow-sm">
          <img src="https://picsum.photos/seed/user123/100/100" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-white text-sm font-bold leading-tight">Halo, InLifers! 👋</h1>
          <p className="text-white/80 text-[10px]">Intern Surabaya • Batch 1 2026</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="relative p-2 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-2 right-2 w-2 h-2 bg-inlife-yellow rounded-full border border-white"></span>
        </button>
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
