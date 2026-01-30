
import React, { useState } from 'react';

type WorkspaceView = 'main' | 'addTask' | 'uploadWork';

const PillarWorkspace: React.FC = () => {
  const [view, setView] = useState<WorkspaceView>('main');
  const [activeTab, setActiveTab] = useState('Tasks');

  const BackButton = () => (
    <button 
      onClick={() => setView('main')}
      className="flex items-center gap-2 text-neutral-medium hover:text-inlife-pink transition-colors group mb-8"
    >
      <span className="bg-white p-2.5 rounded-2xl shadow-sm border border-neutral-light group-hover:bg-inlife-pink group-hover:text-white transition-all">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
      </span>
      <span className="text-sm font-black uppercase tracking-[0.2em]">Back to Workspace</span>
    </button>
  );

  // --- SUB-PAGES ---

  const AddTaskPage = () => (
    <div className="max-w-3xl mx-auto animate-fade-in pb-10">
      <BackButton />
      <div className="bg-white rounded-[3rem] shadow-xl border border-neutral-light overflow-hidden">
        <div className="gradient-header p-10 text-white">
          <h3 className="text-2xl font-black uppercase tracking-tight">Create New Mission</h3>
          <p className="text-white/70 text-xs font-bold uppercase tracking-widest mt-2">Deploying to Project Workspace • Surabaya</p>
        </div>
        
        <div className="p-8 md:p-12 space-y-8">
          <div className="space-y-3">
            <label className="text-[10px] font-black text-neutral-medium uppercase tracking-[0.2em]">Mission Title</label>
            <input type="text" placeholder="e.g. Design UI for Vibe Check" className="w-full bg-neutral-bg border-none rounded-2xl px-6 py-5 text-base font-bold focus:ring-2 focus:ring-inlife-pink transition-all placeholder:text-neutral-medium/50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-neutral-medium uppercase tracking-[0.2em]">Category</label>
              <select className="w-full bg-neutral-bg border-none rounded-2xl px-5 py-5 text-sm font-black uppercase appearance-none cursor-pointer">
                <option>Technical Development</option>
                <option>Creative Design</option>
                <option>Operation & Monitoring</option>
                <option>Marketing Strategy</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-neutral-medium uppercase tracking-[0.2em]">Deadline</label>
              <input type="date" className="w-full bg-neutral-bg border-none rounded-2xl px-5 py-5 text-sm font-bold cursor-pointer" />
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-[10px] font-black text-neutral-medium uppercase tracking-[0.2em]">Assign Squad Members</label>
            <div className="flex flex-wrap gap-3">
              {[1, 2, 3, 4].map(i => (
                <button key={i} className="w-14 h-14 rounded-2xl border-2 border-transparent hover:border-inlife-blue overflow-hidden transition-all bg-neutral-bg shadow-sm">
                  <img src={`https://picsum.photos/seed/intern${i}/150/150`} className="w-full h-full object-cover" />
                </button>
              ))}
              <button className="w-14 h-14 rounded-2xl border-2 border-dashed border-neutral-light flex items-center justify-center text-neutral-medium hover:bg-neutral-bg text-2xl font-light transition-colors">+</button>
            </div>
          </div>

          <div className="space-y-6 pt-6 border-t border-neutral-light/50">
            <div className="flex justify-between items-end">
               <div>
                  <label className="text-[10px] font-black text-neutral-medium uppercase tracking-[0.2em]">Mission Points</label>
                  <p className="text-[9px] text-neutral-medium font-medium mt-1 uppercase">Difficulty Reward</p>
               </div>
               <span className="text-inlife-yellow font-black text-xl">★ 150 PTS</span>
            </div>
            <input type="range" className="w-full h-3 bg-neutral-bg rounded-lg appearance-none cursor-pointer accent-inlife-yellow shadow-inner" />
          </div>

          <div className="pt-8">
            <button 
              onClick={() => setView('main')}
              className="w-full gradient-header text-white font-black py-6 rounded-[2rem] shadow-2xl shadow-inlife-pink/30 uppercase tracking-[0.2em] text-sm active:scale-[0.98] transition-all"
            >
              Deploy Mission
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const UploadWorkPage = () => (
    <div className="max-w-3xl mx-auto animate-fade-in pb-10">
      <BackButton />
      <div className="bg-white rounded-[3rem] shadow-xl border border-neutral-light overflow-hidden">
        <div className="bg-inlife-blue p-10 text-white">
          <h3 className="text-2xl font-black uppercase tracking-tight">Upload Deliverable</h3>
          <p className="text-white/70 text-xs font-bold uppercase tracking-widest mt-2">Saving to Digital Vault • Surabaya</p>
        </div>

        <div className="p-8 md:p-12 space-y-8">
          <div className="border-4 border-dashed border-inlife-blue/20 rounded-[2.5rem] p-16 flex flex-col items-center justify-center bg-inlife-blue/5 hover:bg-inlife-blue/10 transition-all cursor-pointer group">
             <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-5xl shadow-xl mb-6 group-hover:scale-110 transition-transform duration-500">📄</div>
             <p className="text-sm font-black text-neutral-dark uppercase tracking-widest">Drop files here</p>
             <p className="text-[10px] text-neutral-medium font-bold mt-3 uppercase tracking-tighter">PDF, PNG, MP4, FIGMA (Max 250MB)</p>
             <button className="mt-8 bg-inlife-blue text-white px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg">Browse Files</button>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black text-neutral-medium uppercase tracking-[0.2em]">Deliverable Name</label>
            <input type="text" placeholder="e.g. App_Architecture_v2_Final" className="w-full bg-neutral-bg border-none rounded-2xl px-6 py-5 text-base font-bold focus:ring-2 focus:ring-inlife-blue transition-all" />
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black text-neutral-medium uppercase tracking-[0.2em]">Internal Log Summary</label>
            <textarea placeholder="Apa saja update atau insight yang didapat dari pengerjaan ini?" className="w-full bg-neutral-bg border-none rounded-3xl px-6 py-5 text-sm font-medium h-40 resize-none focus:ring-2 focus:ring-inlife-blue transition-all"></textarea>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
             <button 
               onClick={() => setView('main')}
               className="flex-1 py-5 border-2 border-neutral-light rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] text-neutral-medium hover:bg-neutral-bg transition-all"
             >
               Cancel
             </button>
             <button 
               onClick={() => setView('main')}
               className="flex-[2] bg-inlife-blue text-white font-black py-5 rounded-[2rem] shadow-2xl shadow-inlife-blue/30 uppercase tracking-[0.2em] text-sm active:scale-[0.98] transition-all"
             >
               Submit Deliverable
             </button>
          </div>
        </div>
      </div>
    </div>
  );

  // --- MAIN RENDER LOGIC ---

  if (view === 'addTask') return <AddTaskPage />;
  if (view === 'uploadWork') return <UploadWorkPage />;

  return (
    <div className="space-y-6 lg:space-y-10 animate-fade-in relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-[2.5rem] border border-neutral-light shadow-sm">
        <div className="flex-1 w-full">
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-2xl font-black text-neutral-dark tracking-tight uppercase">Project Workspace</h2>
            <span className="text-[10px] font-black bg-inlife-blue/10 text-inlife-blue px-3 py-1 rounded-full uppercase tracking-widest">On-going</span>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex-1 max-w-sm h-3 bg-neutral-bg rounded-full overflow-hidden shadow-inner">
                <div className="h-full bg-gradient-to-r from-inlife-pink to-inlife-blue" style={{width: '68%'}}></div>
             </div>
             <span className="text-xs font-black text-neutral-dark">68%</span>
          </div>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
           <button 
             onClick={() => setView('addTask')}
             className="flex-1 md:flex-none px-8 py-4 border-2 border-neutral-light rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-neutral-bg transition-all active:scale-95 shadow-sm"
           >
             Add Task
           </button>
           <button 
             onClick={() => setView('uploadWork')}
             className="flex-1 md:flex-none px-8 py-4 gradient-header text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl active:scale-95 transition-all"
           >
             Upload Work
           </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-neutral-light overflow-x-auto hide-scrollbar scroll-smooth">
        {['Overview', 'Tasks', 'Deliverables', 'Discussions', 'Activity Hub'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all flex-shrink-0 ${
              activeTab === tab 
                ? 'border-b-4 border-inlife-pink text-inlife-pink' 
                : 'text-neutral-medium hover:text-neutral-dark'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Kanban Board */}
      {activeTab === 'Tasks' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {['To Do', 'Doing', 'Done'].map((col) => (
            <div key={col} className="bg-neutral-bg/40 p-6 rounded-[3rem] min-h-[500px] border border-neutral-light/50">
              <div className="flex justify-between items-center mb-8 px-3">
                <h4 className="text-xs font-black text-neutral-dark uppercase tracking-[0.2em]">{col}</h4>
                <span className="w-8 h-8 bg-white rounded-xl flex items-center justify-center text-[10px] font-black shadow-sm border border-neutral-light">2</span>
              </div>
              <div className="space-y-5">
                {[1, 2].map((i) => (
                  <div key={i} className="bg-white p-6 rounded-[2rem] shadow-sm border border-neutral-light hover:shadow-xl transition-all cursor-pointer group">
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[9px] font-black bg-inlife-blue/10 text-inlife-blue px-3 py-1 rounded-full uppercase tracking-widest">Development</span>
                      <div className="w-10 h-10 rounded-2xl border-2 border-white shadow-lg bg-neutral-bg overflow-hidden rotate-3 group-hover:rotate-0 transition-transform">
                        <img src={`https://picsum.photos/seed/dev${i}/100/100`} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <h5 className="text-sm font-black text-neutral-dark leading-snug group-hover:text-inlife-pink transition-colors">Optimize API Endpoints for Real-time Feedback Loop</h5>
                    <div className="flex items-center justify-between mt-8 pt-5 border-t border-neutral-light">
                       <span className="text-[10px] font-bold text-neutral-medium uppercase tracking-tight">ETA: 2 Days</span>
                       <div className="flex items-center gap-1.5">
                         <span className="text-inlife-yellow font-black text-sm">★ 50</span>
                         <span className="text-[9px] font-black text-neutral-medium uppercase">PTS</span>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Deliverables Section */}
      {activeTab === 'Deliverables' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           <div 
             onClick={() => setView('uploadWork')}
             className="bg-white border-4 border-dashed border-neutral-light rounded-[2.5rem] aspect-square flex flex-col items-center justify-center text-neutral-medium hover:border-inlife-pink hover:text-inlife-pink transition-all cursor-pointer group shadow-sm"
           >
              <span className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">📤</span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">New Upload</span>
           </div>
           {[1, 2, 3].map(i => (
             <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden border border-neutral-light shadow-sm hover:shadow-xl transition-all group">
                <div className="aspect-square bg-neutral-bg relative overflow-hidden">
                  <img src={`https://picsum.photos/seed/work${i}/600/600`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-neutral-dark/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                    <button className="bg-white text-neutral-dark font-black px-6 py-2.5 rounded-xl text-[10px] uppercase tracking-widest shadow-xl">Quick View</button>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="text-xs font-black text-neutral-dark truncate uppercase tracking-tight">Architecture_v{i}.pdf</h5>
                  <div className="flex items-center justify-between mt-5">
                    <span className="text-[9px] font-black bg-inlife-green text-white px-3 py-1 rounded-full uppercase tracking-tighter shadow-sm">Approved</span>
                    <span className="text-[9px] font-bold text-neutral-medium uppercase tracking-widest">3d ago</span>
                  </div>
                </div>
             </div>
           ))}
        </div>
      )}

      {/* Integrated Activity Hub */}
      {activeTab === 'Activity Hub' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
           <section className="bg-white p-10 rounded-[3rem] border border-neutral-light shadow-sm flex flex-col items-center justify-center min-h-[400px]">
              <h4 className="text-xs font-black text-neutral-medium uppercase tracking-[0.3em] mb-12">Daily Attendance</h4>
              <div className="w-56 h-56 rounded-full border-[15px] border-neutral-bg flex items-center justify-center relative shadow-inner">
                <div className="absolute inset-0 border-[15px] border-inlife-green rounded-full rotate-[120deg] border-t-transparent border-r-transparent animate-pulse"></div>
                <div className="flex flex-col items-center">
                    <span className="text-5xl font-black text-neutral-dark tracking-tighter">08:34</span>
                    <span className="text-[10px] text-neutral-medium font-black uppercase tracking-[0.4em] mt-1">CHECKED IN</span>
                </div>
              </div>
              <p className="mt-10 text-[11px] font-black text-neutral-medium/60 italic tracking-tight uppercase">📍 Telkomsel Surabaya Office</p>
           </section>

           <div className="space-y-8">
              <section className="bg-neutral-dark rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-inlife-blue/10 rounded-full -mr-10 -mt-10"></div>
                 <h4 className="text-sm font-black mb-8 uppercase tracking-[0.2em] flex items-center gap-4">
                    <span className="text-3xl">🧰</span> The Toolbox
                 </h4>
                 <div className="grid grid-cols-2 gap-4">
                   {['Brand Assets', 'SOP E-Book', 'Office Map', 'IT Support'].map(tool => (
                     <div key={tool} className="bg-white/5 p-5 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all cursor-pointer group/item">
                        <span className="text-[10px] font-black uppercase tracking-widest group-hover/item:text-inlife-blue transition-colors">{tool}</span>
                     </div>
                   ))}
                 </div>
              </section>

              <section className="bg-white p-10 rounded-[3rem] border border-neutral-light shadow-sm">
                 <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8">On-going Missions</h4>
                 <div className="space-y-4">
                   {['Review Produk by.U di Sosial Media', 'Daily Insight Input to The Vault'].map(m => (
                     <div key={m} className="p-5 bg-neutral-bg/50 rounded-[1.5rem] flex justify-between items-center border border-neutral-light/30 hover:bg-white hover:shadow-md transition-all cursor-pointer group">
                        <span className="text-xs font-black text-neutral-dark/80 group-hover:text-neutral-dark">{m}</span>
                        <div className="flex items-center gap-1 flex-shrink-0 ml-4">
                           <span className="text-inlife-yellow text-[11px] font-black">★ 50</span>
                        </div>
                     </div>
                   ))}
                 </div>
              </section>
           </div>
        </div>
      )}
    </div>
  );
};

export default PillarWorkspace;
