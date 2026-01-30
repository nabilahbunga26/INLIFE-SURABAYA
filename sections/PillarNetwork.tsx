
import React from 'react';

const PillarNetwork: React.FC = () => {
  return (
    <div className="space-y-6 lg:space-y-10 animate-fade-in">
      <section className="max-w-2xl">
        <h2 className="text-2xl font-black text-neutral-dark mb-2">The Network</h2>
        <p className="text-sm text-neutral-medium">Bangun koneksi bermakna dengan sesama intern dan alumni.</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        <div className="lg:col-span-8 space-y-6 lg:space-y-10">
          <section className="bg-gradient-to-br from-inlife-blue via-inlife-purple to-inlife-pink rounded-[2.5rem] p-8 lg:p-12 text-white shadow-2xl overflow-hidden relative group">
            <div className="relative z-10">
              <div className="bg-white/20 w-fit px-4 py-1.5 rounded-full text-[11px] font-black mb-6 uppercase tracking-widest">Matchmaking</div>
              <h4 className="font-black text-3xl mb-4 tracking-tight">Random Coffee ☕</h4>
              <p className="text-white/90 text-sm font-medium mb-10 max-w-lg leading-relaxed">Sistem akan memasangkanmu dengan InLifers dari divisi lain secara acak setiap Senin pagi!</p>
              <div className="bg-white/15 backdrop-blur-md p-6 rounded-[2rem] border border-white/20 flex flex-col sm:flex-row items-center gap-6">
                <div className="flex -space-x-4">
                   <img src="https://picsum.photos/seed/p1/100/100" className="w-14 h-14 rounded-full border-4 border-white shadow-lg" />
                   <img src="https://picsum.photos/seed/p2/100/100" className="w-14 h-14 rounded-full border-4 border-white shadow-lg" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                   <p className="text-lg font-black">Farhan & Siska</p>
                   <p className="text-[10px] text-white/60 font-medium italic">Topic: "What's your dream project?"</p>
                </div>
                <button className="w-full sm:w-auto bg-white text-inlife-blue font-black px-8 py-4 rounded-2xl shadow-xl uppercase tracking-widest text-xs">Chat</button>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-white p-8 rounded-3xl border border-neutral-light shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-tight mb-6">Alumni Circle</h3>
              <div className="space-y-4">
                {['Fullstack Dev - Telkomsel', 'UX Design - By.U', 'Data Analyst - T-Digital'].map((job, i) => (
                  <div key={i} className="p-4 rounded-2xl border border-neutral-bg hover:border-inlife-pink/30 transition-all flex justify-between items-center cursor-pointer">
                     <div>
                       <h4 className="text-xs font-black text-neutral-dark">{job}</h4>
                       <p className="text-[9px] text-neutral-medium font-bold uppercase">New Opportunity</p>
                     </div>
                     <span className="text-neutral-light">→</span>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="bg-white p-8 rounded-3xl border border-neutral-light shadow-sm">
               <h3 className="text-xs font-black uppercase tracking-widest mb-6 text-inlife-purple">Expert Sharing</h3>
               <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-xl bg-neutral-bg flex-shrink-0"></div>
                  <div>
                     <h5 className="text-xs font-black text-neutral-dark">Membangun Networking di Industri Telco</h5>
                     <p className="text-[10px] text-neutral-medium mt-1">Speaker: VP Digital Strategy</p>
                     <button className="text-inlife-purple text-[10px] font-black uppercase mt-3">Remind Me</button>
                  </div>
               </div>
            </section>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <section className="bg-white border-4 border-inlife-blue/10 p-8 rounded-[2.5rem] text-center shadow-lg">
             <div className="bg-inlife-blue text-white text-[9px] font-black px-4 py-1.5 rounded-full inline-block uppercase tracking-widest mb-6">Ice Breaker</div>
             <p className="text-lg font-black italic text-neutral-dark leading-relaxed">"Kalau kamu jadi CEO Telkomsel sehari, mau ngapain?"</p>
             <button className="w-full bg-neutral-dark text-white font-black py-3 rounded-xl uppercase tracking-widest text-[10px] mt-8">Discuss</button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PillarNetwork;
