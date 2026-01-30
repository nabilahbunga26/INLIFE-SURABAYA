
import React, { useState } from 'react';

const PillarPortfolio: React.FC = () => {
  const [step, setStep] = useState(1);

  const steps = [
    { id: 1, title: 'Template' },
    { id: 2, title: 'Content' },
    { id: 3, title: 'Arrange' },
    { id: 4, title: 'Finalize' }
  ];

  return (
    <div className="space-y-6 lg:space-y-10">
      <section className="max-w-2xl">
        <h2 className="text-2xl font-black text-neutral-dark mb-2">Portfolio Builder</h2>
        <p className="text-sm text-neutral-medium">Ubah bukti kerja nyatamu menjadi portofolio profesional.</p>
      </section>

      {/* Wizard Progress */}
      <div className="flex items-center justify-between bg-white p-6 rounded-3xl border border-neutral-light shadow-sm">
        {steps.map((s, i) => (
          <React.Fragment key={s.id}>
            <div className="flex flex-col items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all ${
                step >= s.id ? 'bg-inlife-pink text-white shadow-lg' : 'bg-neutral-bg text-neutral-medium'
              }`}>
                {s.id}
              </div>
              <span className={`text-[10px] font-black uppercase tracking-widest ${
                step >= s.id ? 'text-inlife-pink' : 'text-neutral-medium'
              }`}>{s.title}</span>
            </div>
            {i < steps.length - 1 && <div className="flex-1 h-1 bg-neutral-bg mx-4"></div>}
          </React.Fragment>
        ))}
      </div>

      {step === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
          {['Sleek Professional', 'Creative Visual', 'Minimalist Tech'].map((tmpl) => (
            <div key={tmpl} className="bg-white border-4 border-transparent hover:border-inlife-blue transition-all rounded-3xl p-6 cursor-pointer shadow-sm group">
               <div className="aspect-[3/4] bg-neutral-bg rounded-2xl mb-4 overflow-hidden shadow-inner flex items-center justify-center text-4xl group-hover:scale-105 transition-transform italic text-neutral-medium/30">
                 PREVIEW
               </div>
               <h4 className="text-center font-black text-sm uppercase tracking-tight">{tmpl}</h4>
            </div>
          ))}
        </div>
      )}

      {step === 2 && (
        <div className="bg-white rounded-3xl p-8 border border-neutral-light shadow-sm animate-fade-in">
          <h3 className="text-sm font-black mb-6 uppercase tracking-tight">Pilih Konten Portfolio</h3>
          <div className="space-y-4">
             {[
               { id: 'c1', label: 'Proyek: Web Development Optimization', sub: 'Status: Completed • Approved' },
               { id: 'c2', label: 'Mentor Feedback: Communication Skills', sub: 'Public visibility' },
               { id: 'c3', label: 'Daily Logs Summary', sub: 'Batch 1 2026' },
               { id: 'c4', label: 'Skill Badge: Reliable Deliverer', sub: 'Top Tier achievement' }
             ].map(c => (
               <label key={c.id} className="flex items-center justify-between p-4 rounded-2xl border border-neutral-bg hover:border-inlife-blue transition-all cursor-pointer">
                  <div>
                    <p className="text-xs font-black text-neutral-dark">{c.label}</p>
                    <p className="text-[10px] text-neutral-medium">{c.sub}</p>
                  </div>
                  <input type="checkbox" className="w-5 h-5 accent-inlife-pink" defaultChecked />
               </label>
             ))}
          </div>
        </div>
      )}

      <div className="flex justify-between items-center bg-white p-6 rounded-3xl border border-neutral-light shadow-sm">
        <button 
          onClick={() => setStep(Math.max(1, step - 1))}
          disabled={step === 1}
          className="px-6 py-3 border border-neutral-light rounded-xl font-black text-xs uppercase tracking-widest disabled:opacity-30"
        >
          Back
        </button>
        <button 
          onClick={() => setStep(Math.min(4, step + 1))}
          className="px-8 py-3 gradient-header text-white rounded-xl font-black text-xs uppercase tracking-widest shadow-lg"
        >
          {step === 4 ? 'Generate PDF' : 'Next Step'}
        </button>
      </div>
    </div>
  );
};

export default PillarPortfolio;
