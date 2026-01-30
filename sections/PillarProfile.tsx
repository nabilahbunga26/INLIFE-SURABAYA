
import React, { useState } from 'react';

const PillarProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Feedback');
  const [step, setStep] = useState(1);

  return (
    <div className="space-y-6 lg:space-y-10 animate-fade-in">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Identity Card */}
        <aside className="lg:w-1/3">
          <section className="bg-white rounded-[2.5rem] p-10 border border-neutral-light shadow-sm text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-inlife-pink to-inlife-blue"></div>
            <div className="w-32 h-32 rounded-full border-4 border-inlife-pink p-1 mx-auto mb-6 shadow-xl">
               <img src="https://picsum.photos/seed/jane/400/400" className="w-full h-full rounded-full object-cover" />
            </div>
            <h3 className="text-2xl font-black text-neutral-dark tracking-tight">Jane Doe</h3>
            <p className="text-xs font-black text-inlife-blue uppercase tracking-widest mt-1">Fullstack Dev Intern</p>
            <p className="text-xs text-neutral-medium mt-4 leading-relaxed font-medium">"Building future-ready solutions at Telkomsel Surabaya Batch 1."</p>
            <div className="mt-8 pt-8 border-t border-neutral-light flex justify-center gap-2 flex-wrap">
               {['React', 'NodeJS', 'MongoDB', 'Git'].map(s => (
                 <span key={s} className="bg-neutral-bg px-3 py-1 rounded-lg text-[10px] font-black text-neutral-medium uppercase">{s}</span>
               ))}
            </div>
          </section>
          
          <section className="bg-neutral-dark rounded-[2rem] p-8 text-white shadow-xl mt-6">
             <div className="flex items-center gap-3">
                <span className="text-3xl">🏆</span>
                <div>
                   <h4 className="text-sm font-black">Verified Alumnus</h4>
                   <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest mt-1">Status: Active Intern</p>
                </div>
             </div>
          </section>
        </aside>

        {/* Right: Functional Sections */}
        <div className="lg:w-2/3 space-y-6">
          <div className="flex border-b border-neutral-light overflow-x-auto hide-scrollbar">
            {['Feedback', 'Portfolio Builder', 'Settings'].map(tab => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all flex-shrink-0 ${
                  activeTab === tab ? 'border-b-4 border-inlife-blue text-inlife-blue' : 'text-neutral-medium'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Feedback Loop Content */}
          {activeTab === 'Feedback' && (
            <div className="space-y-6">
               {[1, 2].map(i => (
                 <div key={i} className="bg-white p-8 rounded-3xl border border-neutral-light shadow-sm">
                   <div className="flex justify-between items-start mb-6">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-inlife-purple flex items-center justify-center text-white font-black text-xl shadow-md">M</div>
                        <div>
                           <h4 className="text-sm font-black text-neutral-dark">Budi Santoso (Senior)</h4>
                           <p className="text-[9px] font-black text-neutral-medium uppercase tracking-widest">Feedback on Task #124</p>
                        </div>
                     </div>
                     <div className="flex gap-1">
                        {[1,2,3,4,5].map(s => <span key={s} className={`text-xl ${s <= 4 ? 'text-inlife-yellow' : 'text-neutral-light'}`}>★</span>)}
                     </div>
                   </div>
                   <div className="bg-inlife-blue/5 p-5 rounded-2xl border border-inlife-blue/10 mb-6">
                      <p className="text-xs font-bold text-neutral-dark italic leading-relaxed">"Struktur databasenya sudah sangat rapi. Untuk next step, coba tambahkan caching layer agar query lebih efisien."</p>
                   </div>
                   <div className="flex justify-between items-center text-[9px] font-black uppercase">
                      <div className="flex gap-2">
                         <span className="bg-inlife-green text-white px-3 py-1 rounded">Continue</span>
                         <span className="bg-inlife-blue text-white px-3 py-1 rounded">Start Caching</span>
                      </div>
                      <span className="text-neutral-medium">Public in Portfolio</span>
                   </div>
                 </div>
               ))}
            </div>
          )}

          {/* Portfolio Builder Wizard */}
          {activeTab === 'Portfolio Builder' && (
            <div className="bg-white p-8 rounded-[2.5rem] border border-neutral-light shadow-sm space-y-10 animate-fade-in">
               <div className="flex justify-between items-center">
                  {[1, 2, 3, 4].map(s => (
                    <div key={s} className="flex flex-col items-center gap-2">
                       <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all ${step >= s ? 'bg-inlife-pink text-white shadow-lg' : 'bg-neutral-bg text-neutral-medium'}`}>{s}</div>
                    </div>
                  ))}
               </div>
               
               {step === 1 && (
                 <div className="space-y-6">
                   <h4 className="text-sm font-black uppercase tracking-tight">Step 1: Choose Template</h4>
                   <div className="grid grid-cols-2 gap-4">
                      {['Sleek Tech', 'Visual Story', 'Minimalist', 'Creative'].map(t => (
                        <div key={t} className="aspect-[3/4] bg-neutral-bg rounded-2xl flex items-center justify-center border-4 border-transparent hover:border-inlife-blue transition-all cursor-pointer">
                           <span className="text-[10px] font-black uppercase text-neutral-medium">{t}</span>
                        </div>
                      ))}
                   </div>
                 </div>
               )}

               <div className="flex justify-between pt-10 border-t border-neutral-light">
                  <button onClick={() => setStep(Math.max(1, step-1))} className="px-6 py-3 border border-neutral-light rounded-xl font-black text-[10px] uppercase">Back</button>
                  <button onClick={() => setStep(Math.min(4, step+1))} className="px-6 py-3 gradient-header text-white rounded-xl font-black text-[10px] uppercase shadow-lg">Next Step</button>
               </div>
            </div>
          )}

          {/* Settings Content */}
          {activeTab === 'Settings' && (
             <section className="bg-white p-8 rounded-3xl border border-neutral-light shadow-sm space-y-8">
                <div className="flex justify-between items-center">
                   <div>
                      <h5 className="text-xs font-black text-neutral-dark uppercase">Public Portfolio</h5>
                      <p className="text-[10px] text-neutral-medium">Anyone with the link can view your work.</p>
                   </div>
                   <button className="w-12 h-6 bg-inlife-pink rounded-full relative"><div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div></button>
                </div>
                <div className="flex justify-between items-center">
                   <div>
                      <h5 className="text-xs font-black text-neutral-dark uppercase">Activity Visibility</h5>
                      <p className="text-[10px] text-neutral-medium">Show your current project on your profile.</p>
                   </div>
                   <button className="w-12 h-6 bg-inlife-blue rounded-full relative"><div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div></button>
                </div>
                <div className="pt-8 border-t border-neutral-light">
                   <button className="w-full bg-neutral-bg py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-neutral-light transition-all">Export Personal Data (.ZIP)</button>
                   <button className="w-full text-telkomsel-red font-black text-[10px] uppercase tracking-widest mt-4">Delete Account</button>
                </div>
             </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default PillarProfile;
