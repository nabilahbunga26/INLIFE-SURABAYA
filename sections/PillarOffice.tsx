
import React from 'react';

const PillarOffice: React.FC = () => {
  return (
    <div className="space-y-6 lg:space-y-10">
      <section className="max-w-2xl">
        <h2 className="text-2xl font-black text-neutral-dark mb-2">The Office</h2>
        <p className="text-sm text-neutral-medium">Pusat produktivitas dan pengembangan diri Intern Telkomsel Surabaya.</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
        {/* Attendance Tracker */}
        <section className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-light h-full flex flex-col items-center justify-center">
          <h4 className="text-xs font-black text-neutral-medium uppercase tracking-[0.2em] mb-8">Daily Attendance</h4>
          <div className="w-48 h-48 rounded-full border-[12px] border-neutral-bg flex items-center justify-center relative shadow-inner">
             <div className="absolute inset-0 border-[12px] border-inlife-green rounded-full rotate-45 border-t-transparent border-r-transparent"></div>
             <div className="flex flex-col items-center">
                <span className="text-4xl font-black text-neutral-dark">08:34</span>
                <span className="text-xs text-neutral-medium font-bold uppercase tracking-widest">WIB</span>
             </div>
          </div>
          <button className="mt-10 w-full gradient-header text-white font-black py-5 rounded-2xl shadow-xl active:scale-95 transition-all text-lg tracking-widest">
            TAP TO CHECK IN
          </button>
          <p className="mt-4 text-[11px] text-neutral-medium font-medium italic">GPS Geofencing Active • Head Office Surabaya</p>
        </section>

        {/* Division & Toolbox Grid */}
        <div className="space-y-6">
          <section>
            <div className="flex justify-between items-center mb-4 px-1">
              <h3 className="text-sm font-black uppercase tracking-tight">Meet the Team</h3>
              <span className="text-inlife-blue text-[10px] font-black cursor-pointer hover:underline">BROWSE ALL</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
               {['Web Development', 'Digital Marketing', 'Customer Experience'].map((div) => (
                 <div key={div} className="bg-white p-4 rounded-2xl border border-neutral-light flex items-center gap-4 hover:shadow-md transition-shadow group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-neutral-bg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">📁</div>
                    <div className="flex-1">
                       <h4 className="text-sm font-black text-neutral-dark">{div}</h4>
                       <p className="text-[10px] text-neutral-medium font-medium">12 Interns • 4 Mentors</p>
                    </div>
                    <button className="text-inlife-blue text-xs font-black uppercase tracking-tighter">Explore</button>
                 </div>
               ))}
            </div>
          </section>

          <section className="bg-neutral-dark rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-inlife-blue rounded-full opacity-10"></div>
            <h4 className="text-sm font-black mb-6 flex items-center gap-3 uppercase tracking-widest">
               <span className="text-2xl">🧰</span> The Toolbox
            </h4>
            <div className="grid grid-cols-2 gap-3">
               {['Brand Assets', 'SOP E-Book', 'Office Map', 'IT Support'].map((tool) => (
                 <div key={tool} className="bg-white/10 p-4 rounded-xl border border-white/5 flex items-center justify-between group cursor-pointer hover:bg-white/20 transition-all">
                    <span className="text-[11px] font-bold">{tool}</span>
                    <span className="text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                 </div>
               ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PillarOffice;
