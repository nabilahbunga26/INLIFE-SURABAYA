
import React from 'react';

const PillarVault: React.FC = () => {
  return (
    <div className="space-y-6 lg:space-y-10 animate-fade-in">
      <section className="max-w-2xl">
        <h2 className="text-2xl font-black text-neutral-dark mb-2">The Vault</h2>
        <p className="text-sm text-neutral-medium">Simpan setiap kenangan perjalananmu dan insight berharga selama magang di Surabaya.</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
        {/* Left Column: Logs & Map */}
        <div className="lg:col-span-7 space-y-6 lg:space-y-10">
          <section className="bg-white p-6 rounded-3xl border border-neutral-light shadow-sm">
            <h3 className="text-sm font-black mb-6 uppercase tracking-tight">What I Learned Today</h3>
            <div className="bg-neutral-bg/30 p-5 rounded-2xl border border-neutral-light">
              <div className="flex gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-inlife-pink flex items-center justify-center text-white text-sm font-black shadow-md flex-shrink-0">JD</div>
                <div className="flex-1">
                  <textarea 
                    placeholder="Share your insight today, InLifers..."
                    className="w-full bg-transparent border-none focus:ring-0 text-sm md:text-base font-medium resize-none min-h-[80px]"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-between items-center border-t border-neutral-light pt-4">
                 <div className="flex gap-3">
                    <button className="text-neutral-medium p-2 hover:bg-inlife-pink/10 hover:text-inlife-pink rounded-xl transition-all">📸</button>
                    <button className="text-neutral-medium p-2 hover:bg-inlife-blue/10 hover:text-inlife-blue rounded-xl transition-all">📍</button>
                 </div>
                 <button className="bg-inlife-blue text-white text-xs font-black px-6 py-2.5 rounded-full shadow-lg hover:brightness-110 active:scale-95 transition-all uppercase tracking-widest">Post Log</button>
              </div>
            </div>
          </section>

          {/* Bestie Map */}
          <section className="bg-inlife-yellow/10 border border-inlife-yellow/30 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">📍</span>
              <h4 className="text-base font-black text-neutral-dark uppercase tracking-tight">Bestie Map: Surabaya Edition</h4>
            </div>
            <div className="bg-neutral-light h-48 rounded-2xl mb-6 overflow-hidden relative shadow-inner">
              <img src="https://picsum.photos/seed/map/800/400" className="w-full h-full object-cover grayscale opacity-40" alt="Map" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="animate-bounce">
                    <div className="w-10 h-10 bg-telkomsel-red rounded-full flex items-center justify-center border-4 border-white shadow-2xl">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                 </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="bg-white p-4 rounded-2xl border border-neutral-light shadow-sm">
                  <p className="text-xs font-black text-inlife-pink uppercase mb-1">Intern Staff Pick</p>
                  <p className="text-sm font-bold text-neutral-dark">Nasi Bebek Sinjay (5km)</p>
               </div>
               <div className="bg-white p-4 rounded-2xl border border-neutral-light shadow-sm">
                  <p className="text-xs font-black text-inlife-blue uppercase mb-1">Co-working Space</p>
                  <p className="text-sm font-bold text-neutral-dark">Kafe Sebelah (2km)</p>
               </div>
            </div>
          </section>
        </div>

        {/* Right Column: Gallery */}
        <div className="lg:col-span-5 space-y-6">
          <section>
            <div className="flex justify-between items-center mb-6 px-1">
              <h3 className="text-sm font-black uppercase tracking-tight">Shared Gallery</h3>
              <span className="bg-neutral-bg px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-neutral-medium">Batch 1 2026</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden relative group cursor-pointer shadow-sm">
                  <img src={`https://picsum.photos/seed/vault${i}/400/400`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125" />
                </div>
              ))}
            </div>
          </section>

          {/* Time Capsule */}
          <section className="bg-neutral-dark rounded-3xl p-8 relative overflow-hidden shadow-2xl group">
            <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-40 h-40 bg-inlife-pink rounded-full blur-[60px] opacity-30"></div>
            <div className="flex items-center gap-6 relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-4xl shadow-lg border border-white/5">🔒</div>
              <div className="flex-1">
                <h4 className="text-white text-lg font-black tracking-tight">Time Capsule</h4>
                <p className="text-white/50 text-[11px] font-medium uppercase tracking-widest mt-1">Unlock: 30 Juli 2026</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PillarVault;
