
import React from 'react';

const PillarFeedback: React.FC = () => {
  return (
    <div className="space-y-6 lg:space-y-10">
      <section className="max-w-2xl">
        <h2 className="text-2xl font-black text-neutral-dark mb-2">Mentor Feedback Loop</h2>
        <p className="text-sm text-neutral-medium">Evaluasi terstruktur untuk pertumbuhan kompetensimu.</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Feedback Card */}
          {[1, 2].map(i => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-neutral-light shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-inlife-purple flex items-center justify-center text-white font-black text-xl">M</div>
                  <div>
                    <h4 className="text-sm font-black text-neutral-dark">Budi Santoso (Senior Mentor)</h4>
                    <p className="text-[10px] text-neutral-medium font-bold uppercase tracking-widest">Web Development Project</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(s => <span key={s} className={`text-xl ${s <= 4 ? 'text-inlife-yellow' : 'text-neutral-light'}`}>★</span>)}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-neutral-bg p-4 rounded-2xl border border-neutral-light">
                  <p className="text-[9px] font-black text-neutral-medium uppercase tracking-widest mb-2">Technical</p>
                  <div className="w-full h-1.5 bg-white rounded-full overflow-hidden"><div className="w-4/5 h-full bg-inlife-blue"></div></div>
                </div>
                <div className="bg-neutral-bg p-4 rounded-2xl border border-neutral-light">
                  <p className="text-[9px] font-black text-neutral-medium uppercase tracking-widest mb-2">Communication</p>
                  <div className="w-full h-1.5 bg-white rounded-full overflow-hidden"><div className="w-3/5 h-full bg-inlife-pink"></div></div>
                </div>
                <div className="bg-neutral-bg p-4 rounded-2xl border border-neutral-light">
                  <p className="text-[9px] font-black text-neutral-medium uppercase tracking-widest mb-2">Teamwork</p>
                  <div className="w-full h-1.5 bg-white rounded-full overflow-hidden"><div className="w-full h-full bg-inlife-green"></div></div>
                </div>
              </div>

              <div className="bg-inlife-blue/5 p-5 rounded-2xl border border-inlife-blue/10 mb-6">
                 <p className="text-xs font-bold text-neutral-dark leading-relaxed italic">"Kerjamu sangat rapi dalam struktur database. Untuk next step, coba eksplorasi caching layer agar query lebih efisien."</p>
              </div>

              <div className="flex justify-between items-center">
                 <div className="flex gap-2">
                    <span className="text-[9px] font-black bg-inlife-green text-white px-3 py-1 rounded-lg uppercase">Continue</span>
                    <span className="text-[9px] font-black bg-inlife-blue text-white px-3 py-1 rounded-lg uppercase">Start Caching</span>
                 </div>
                 <span className="text-[10px] font-bold text-neutral-medium uppercase tracking-tighter">Visibility: Public</span>
              </div>
            </div>
          ))}
        </div>

        <aside className="space-y-6">
          <section className="bg-neutral-dark rounded-3xl p-8 text-white shadow-xl">
             <h4 className="text-sm font-black uppercase tracking-widest mb-8">Overall Competency</h4>
             <div className="flex items-center justify-center mb-8">
                <div className="w-32 h-32 rounded-full border-[10px] border-inlife-blue border-r-transparent border-t-transparent flex items-center justify-center">
                   <span className="text-3xl font-black">4.8</span>
                </div>
             </div>
             <p className="text-xs text-center font-medium text-white/70">Dihitung berdasarkan rata-rata penilaian mentor di seluruh project.</p>
          </section>

          <section className="bg-white rounded-3xl p-6 border border-neutral-light shadow-sm">
             <h4 className="text-xs font-black uppercase tracking-widest mb-6">Actionable Tips</h4>
             <div className="space-y-4">
                <div className="flex items-start gap-3">
                   <span className="text-xl">💡</span>
                   <p className="text-[11px] font-bold text-neutral-dark">Tingkatkan update daily logs untuk visibilitas tim yang lebih baik.</p>
                </div>
                <div className="flex items-start gap-3">
                   <span className="text-xl">📚</span>
                   <p className="text-[11px] font-bold text-neutral-dark">Eksplorasi modul Redis untuk optimasi backend tasks.</p>
                </div>
             </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default PillarFeedback;
