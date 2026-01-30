
import React from 'react';

const PillarGrowth: React.FC = () => {
  return (
    <div className="space-y-6 lg:space-y-10 animate-fade-in">
      <section className="max-w-2xl">
        <h2 className="text-2xl font-black text-neutral-dark mb-2">The Growth</h2>
        <p className="text-sm text-neutral-medium">Kembangkan kompetensimu dan siapkan portofolio terbaik untuk karir masa depanmu.</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        {/* Left Column: Skill Tree */}
        <div className="lg:col-span-5">
          <section className="bg-white rounded-3xl p-8 border border-neutral-light shadow-sm h-full">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-sm font-black uppercase tracking-tight">Skill Roadmap</h3>
              <span className="text-[10px] font-black bg-inlife-green/10 text-inlife-green px-3 py-1 rounded-full uppercase tracking-widest">Web Developer</span>
            </div>
            
            <div className="flex flex-col items-center gap-6 relative py-4">
              {/* Skill Node 1 */}
              <div className="flex flex-col items-center z-10">
                <div className="w-16 h-16 rounded-full bg-inlife-green border-4 border-inlife-blue flex items-center justify-center text-white shadow-[0_0_20px_rgba(59,174,80,0.4)] transition-transform hover:scale-110 cursor-pointer">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-xs font-black mt-3 text-neutral-dark">Node.js (Lvl 1)</span>
                <p className="text-[10px] text-inlife-green font-bold uppercase mt-0.5">Validated</p>
              </div>
              
              <div className="w-1 h-12 bg-gradient-to-b from-inlife-blue/50 to-neutral-light"></div>

              {/* Skill Nodes Row 2 */}
              <div className="flex gap-16 relative">
                 <div className="flex flex-col items-center z-10 group">
                    <div className="w-16 h-16 rounded-full bg-neutral-bg flex items-center justify-center text-neutral-medium border-4 border-transparent transition-all group-hover:border-inlife-blue group-hover:bg-white cursor-pointer">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    </div>
                    <span className="text-xs font-black mt-3 text-neutral-medium group-hover:text-neutral-dark">React (Lvl 2)</span>
                 </div>
                 <div className="flex flex-col items-center z-10 group">
                    <div className="w-16 h-16 rounded-full bg-neutral-bg flex items-center justify-center text-neutral-medium border-4 border-transparent transition-all group-hover:border-inlife-blue group-hover:bg-white cursor-pointer">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    </div>
                    <span className="text-xs font-black mt-3 text-neutral-medium group-hover:text-neutral-dark">Unit Testing</span>
                 </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-1 bg-neutral-bg -z-0 rounded-full"></div>
            </div>
            
            <p className="mt-10 text-[10px] text-center text-neutral-medium font-medium italic">Complete more daily missions to unlock advanced skill modules.</p>
          </section>
        </div>

        {/* Right Column: Launchpad & CV Reviewer */}
        <div className="lg:col-span-7 space-y-6 lg:space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {/* Launchpad / Portfolio */}
            <section className="bg-inlife-pink rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform"></div>
              <div className="relative z-10">
                <h4 className="font-black text-2xl mb-3 tracking-tight">Portfolio Builder</h4>
                <p className="text-white/80 text-sm font-medium mb-8 leading-relaxed">Sistem secara otomatis merangkum Daily Log, Skill Badge, dan Milestone kerja menjadi file PDF portofolio profesional dengan branding resmi InLife Surabaya.</p>
                <button className="w-full bg-white text-inlife-pink font-black py-4 rounded-2xl flex items-center justify-center gap-3 active:scale-95 transition-all shadow-xl uppercase tracking-widest text-xs">
                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                   Generate Official PDF
                </button>
              </div>
            </section>

            {/* CV AI Reviewer */}
            <section className="bg-white border-2 border-inlife-blue rounded-3xl p-8 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-inlife-blue/10 rounded-xl flex items-center justify-center text-2xl">🤖</div>
                <div>
                  <h4 className="text-base font-black text-neutral-dark">CV Reviewer AI</h4>
                  <p className="text-[10px] text-inlife-blue font-black uppercase tracking-widest">Optimasi ATS & Content</p>
                </div>
              </div>
              <div className="border-2 border-dashed border-inlife-blue/30 rounded-2xl p-10 flex flex-col items-center justify-center bg-neutral-bg/30 hover:bg-inlife-blue/5 transition-colors cursor-pointer group">
                 <svg className="w-12 h-12 text-inlife-blue mb-4 group-hover:bounce transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                 <span className="text-xs font-black text-neutral-medium uppercase tracking-tighter">Drag & drop your CV here</span>
                 <p className="text-[10px] text-neutral-medium/60 mt-2">Supports PDF, DOCX (Max 5MB)</p>
              </div>
            </section>
          </div>

          {/* Kudobox (Peer Review) */}
          <section className="bg-white border border-neutral-light p-8 rounded-3xl shadow-sm">
             <div className="flex justify-between items-center mb-8">
               <h3 className="text-sm font-black uppercase tracking-tight">Kudobox (Recognition)</h3>
               <button className="text-inlife-purple text-xs font-black uppercase tracking-widest hover:underline">History</button>
             </div>
             <div className="flex gap-4 mb-8 overflow-x-auto pb-4 hide-scrollbar">
                {[
                  { icon: '🎁', msg: 'Terima kasih bantuannya!', from: 'Siska' },
                  { icon: '🌟', msg: 'Desainnya keren banget!', from: 'Farhan' },
                  { icon: '🚀', msg: 'Super responsive person!', from: 'Andi' },
                  { icon: '☕', msg: 'Thanks for the coffee!', from: 'Rina' }
                ].map((item, i) => (
                  <div key={i} className="flex-shrink-0 w-32 h-44 bg-inlife-purple/5 rounded-2xl border border-inlife-purple/10 p-4 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all cursor-pointer group">
                     <span className="text-4xl mb-3 group-hover:scale-125 transition-transform">{item.icon}</span>
                     <p className="text-[10px] font-black text-neutral-dark leading-tight">{item.msg}</p>
                     <p className="text-[9px] text-inlife-purple font-bold mt-2 uppercase tracking-tighter">From: {item.from}</p>
                  </div>
                ))}
                <div className="flex-shrink-0 w-32 h-44 border-2 border-dashed border-neutral-light rounded-2xl flex flex-col items-center justify-center text-neutral-medium hover:border-inlife-purple hover:text-inlife-purple transition-all cursor-pointer">
                   <span className="text-3xl">+</span>
                   <span className="text-[10px] font-bold mt-1 uppercase">Send New</span>
                </div>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PillarGrowth;
