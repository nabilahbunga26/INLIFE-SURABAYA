
import React, { useState } from 'react';

type MentorView = 'list' | 'chat' | 'meeting' | 'schedule';

interface Mentor {
  name: string;
  role: string;
  rating: number;
  img: string;
}

const PillarMentor: React.FC = () => {
  const [view, setView] = useState<MentorView>('list');
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  const mentors: Mentor[] = [
    { name: 'Andi Wijaya', role: 'Senior Product Designer', rating: 4.9, img: 'https://picsum.photos/seed/andi/400/400' },
    { name: 'Sarah Azizah', role: 'Head of Marketing', rating: 4.8, img: 'https://picsum.photos/seed/sarah/400/400' }
  ];

  const handleAction = (m: Mentor, v: MentorView) => {
    setSelectedMentor(m);
    setView(v);
  };

  const BackButton = () => (
    <button 
      onClick={() => setView('list')}
      className="flex items-center gap-2 text-neutral-medium hover:text-inlife-pink transition-colors group mb-6"
    >
      <span className="bg-white p-2 rounded-xl shadow-sm border border-neutral-light group-hover:bg-inlife-pink group-hover:text-white transition-all">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
      </span>
      <span className="text-xs font-black uppercase tracking-widest">Kembali</span>
    </button>
  );

  // --- SUB-PAGES ---

  const ChatView = () => (
    <div className="flex flex-col h-[calc(100vh-12rem)] md:h-[700px] bg-white rounded-[2.5rem] border border-neutral-light shadow-xl overflow-hidden animate-fade-in">
      <div className="p-6 border-b border-neutral-light flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-inlife-blue shadow-md">
            <img src={selectedMentor?.img} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="text-sm font-black text-neutral-dark">{selectedMentor?.name}</h4>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-inlife-green animate-pulse"></span>
              <span className="text-[10px] font-bold text-neutral-medium uppercase">Online</span>
            </div>
          </div>
        </div>
        <button onClick={() => setView('list')} className="text-neutral-medium hover:text-telkomsel-red">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-neutral-bg/30 hide-scrollbar">
        <div className="flex justify-center mb-4">
          <span className="text-[10px] font-black text-neutral-medium/40 bg-neutral-bg px-4 py-1 rounded-full uppercase tracking-widest">Hari Ini</span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-inlife-blue text-white p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm font-medium shadow-sm self-start">
            Halo! Ada yang bisa dibantu untuk progress task Landing Page-mu?
          </div>
          <div className="bg-white text-neutral-dark p-4 rounded-2xl rounded-tr-none max-w-[80%] text-sm font-medium shadow-sm self-end border border-neutral-light">
            Iya mas, saya agak bingung di bagian responsivitas card mentornya.
          </div>
        </div>
      </div>

      <div className="p-6 bg-white border-t border-neutral-light">
        <div className="flex items-center gap-3 bg-neutral-bg rounded-2xl p-2 pl-4">
          <input type="text" placeholder="Ketik pesan..." className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-medium" />
          <button className="bg-inlife-pink text-white p-3 rounded-xl shadow-lg active:scale-95 transition-all">
            <svg className="w-5 h-5 rotate-90" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
          </button>
        </div>
      </div>
    </div>
  );

  const MeetingView = () => (
    <div className="flex flex-col h-[calc(100vh-12rem)] md:h-[700px] bg-neutral-dark rounded-[2.5rem] shadow-2xl overflow-hidden animate-fade-in relative">
      <div className="absolute top-6 left-6 z-10">
        <div className="bg-black/40 backdrop-blur-md text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
           <span className="w-2 h-2 rounded-full bg-telkomsel-red animate-pulse"></span>
           Live • 12:45
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center relative bg-neutral-dark/80">
        <img src={selectedMentor?.img} className="w-full h-full object-cover opacity-60 blur-sm absolute inset-0" />
        <div className="relative z-10 flex flex-col items-center">
           <div className="w-40 h-40 rounded-full border-4 border-inlife-blue overflow-hidden shadow-2xl mb-6">
              <img src={selectedMentor?.img} className="w-full h-full object-cover" />
           </div>
           <h4 className="text-white text-2xl font-black">{selectedMentor?.name}</h4>
           <p className="text-white/60 text-sm font-bold uppercase tracking-widest mt-2">Connecting...</p>
        </div>

        {/* Self View */}
        <div className="absolute bottom-28 right-6 w-32 h-44 bg-neutral-dark border-2 border-white/20 rounded-2xl overflow-hidden shadow-xl md:w-48 md:h-64">
           <img src="https://picsum.photos/seed/user/400/600" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="p-8 flex items-center justify-center gap-4 bg-black/40 backdrop-blur-md">
        <button className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all">🎤</button>
        <button className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all">📷</button>
        <button onClick={() => setView('list')} className="w-16 h-12 rounded-2xl bg-telkomsel-red text-white flex items-center justify-center shadow-lg shadow-telkomsel-red/40 hover:brightness-110 active:scale-90 transition-all">
           <svg className="w-6 h-6 rotate-135" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" /></svg>
        </button>
        <button className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all">💬</button>
      </div>
    </div>
  );

  const ScheduleView = () => (
    <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-neutral-light shadow-xl animate-fade-in">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 space-y-8">
           <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
                <img src={selectedMentor?.img} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-xl font-black text-neutral-dark">{selectedMentor?.name}</h4>
                <p className="text-xs font-bold text-inlife-blue uppercase tracking-widest">Jadwalkan Konsultasi</p>
              </div>
           </div>

           <div className="space-y-4">
              <label className="text-[10px] font-black text-neutral-medium uppercase tracking-[0.2em]">Pilih Tanggal</label>
              <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
                 {[24, 25, 26, 27, 28, 29, 30].map(d => (
                   <button key={d} className={`p-4 rounded-2xl flex flex-col items-center justify-center border transition-all ${d === 25 ? 'bg-inlife-pink border-inlife-pink text-white shadow-lg' : 'bg-neutral-bg border-transparent text-neutral-medium hover:border-neutral-light'}`}>
                      <span className="text-[10px] font-black uppercase opacity-60">Mei</span>
                      <span className="text-lg font-black">{d}</span>
                   </button>
                 ))}
              </div>
           </div>

           <div className="space-y-4">
              <label className="text-[10px] font-black text-neutral-medium uppercase tracking-[0.2em]">Pilih Jam</label>
              <div className="flex flex-wrap gap-2">
                 {['09:00', '10:30', '13:00', '14:30', '16:00'].map(t => (
                   <button key={t} className={`px-6 py-3 rounded-xl text-xs font-black transition-all ${t === '13:00' ? 'bg-inlife-blue text-white shadow-md' : 'bg-neutral-bg text-neutral-medium hover:bg-neutral-light'}`}>
                      {t}
                   </button>
                 ))}
              </div>
           </div>
        </div>

        <div className="md:w-72 bg-neutral-bg/50 rounded-[2rem] p-6 space-y-6">
           <h5 className="text-xs font-black text-neutral-dark uppercase tracking-widest">Summary</h5>
           <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl border border-neutral-light">
                 <p className="text-[9px] font-black text-neutral-medium uppercase">Sesi Bersama</p>
                 <p className="text-sm font-bold text-neutral-dark">{selectedMentor?.name}</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-neutral-light">
                 <p className="text-[9px] font-black text-neutral-medium uppercase">Waktu</p>
                 <p className="text-sm font-bold text-neutral-dark">Selasa, 25 Mei • 13:00 WIB</p>
              </div>
           </div>
           <button onClick={() => setView('list')} className="w-full gradient-header text-white font-black py-4 rounded-xl shadow-lg uppercase tracking-widest text-[10px] active:scale-95 transition-all">Konfirmasi Sesi</button>
        </div>
      </div>
    </div>
  );

  // --- MAIN RENDER LOGIC ---

  if (view === 'chat') return <div className="py-4"><BackButton /><ChatView /></div>;
  if (view === 'meeting') return <div className="py-4"><BackButton /><MeetingView /></div>;
  if (view === 'schedule') return <div className="py-4"><BackButton /><ScheduleView /></div>;

  return (
    <div className="space-y-10 lg:space-y-16 animate-fade-in py-4">
      {/* Mentor Hub Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
         <div>
            <h2 className="text-3xl font-black text-neutral-dark tracking-tight uppercase">Mentor Hub</h2>
            <p className="text-sm text-neutral-medium font-medium mt-1">Terhubung langsung dengan pembimbingmu untuk bimbingan harian.</p>
         </div>
         <button className="w-full sm:w-auto bg-white border-2 border-inlife-pink text-inlife-pink font-black text-[10px] px-8 py-4 rounded-2xl uppercase tracking-widest hover:bg-inlife-pink hover:text-white transition-all shadow-md active:scale-95">
            Request Mentor Baru
         </button>
      </div>

      {/* Mentors Grid */}
      <section>
         <div className="flex items-center gap-3 mb-8 px-1">
            <span className="text-2xl">👨‍🏫</span>
            <h4 className="text-xs font-black text-neutral-medium uppercase tracking-[0.2em]">Pembimbing Kamu</h4>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {mentors.map((mentor, i) => (
              <div key={i} className="bg-white rounded-[3rem] p-10 border border-neutral-light shadow-sm flex flex-col items-center text-center group hover:shadow-2xl transition-all relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-inlife-blue/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
                 
                 <div className="w-28 h-28 rounded-[2rem] bg-neutral-bg mb-6 overflow-hidden border-4 border-white shadow-xl group-hover:rotate-0 rotate-3 transition-transform">
                    <img src={mentor.img} className="w-full h-full object-cover" alt={mentor.name} />
                 </div>
                 
                 <h5 className="text-2xl font-black text-neutral-dark tracking-tight">{mentor.name}</h5>
                 <p className="text-xs font-bold text-inlife-blue uppercase tracking-widest mt-1">{mentor.role}</p>
                 
                 <div className="flex items-center gap-1.5 mt-5 mb-10 bg-inlife-yellow/10 px-4 py-1.5 rounded-full">
                    <span className="text-inlife-yellow text-lg">★</span>
                    <span className="text-sm font-black text-inlife-yellow">{mentor.rating}</span>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
                    <button onClick={() => handleAction(mentor, 'chat')} className="bg-neutral-bg text-neutral-dark py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-inlife-blue/10 hover:text-inlife-blue transition-all active:scale-95">Chat</button>
                    <button onClick={() => handleAction(mentor, 'meeting')} className="bg-neutral-bg text-neutral-dark py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-inlife-pink/10 hover:text-inlife-pink transition-all active:scale-95">Meeting</button>
                    <button onClick={() => handleAction(mentor, 'schedule')} className="gradient-header text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition-all">Jadwalkan Sesi</button>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* Feedback History */}
      <section className="pb-10">
         <div className="flex items-center gap-3 mb-8 px-1">
            <span className="text-2xl">📝</span>
            <h4 className="text-xs font-black text-neutral-medium uppercase tracking-[0.2em]">Riwayat Feedback</h4>
         </div>
         <div className="space-y-6">
            {[
              { mentor: 'Andi Wijaya', text: 'Kerja bagus pada task slicing landing page. Perhatikan detail pada padding di mobile view agar lebih proporsional.' },
              { mentor: 'Sarah Azizah', text: 'Campaign ideas yang kamu ajukan sangat fresh! Terus asah kemampuan copywriting-mu agar lebih engaging.' }
            ].map((fb, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-neutral-light shadow-sm relative overflow-hidden group hover:border-inlife-purple/30 transition-colors">
                 <div className="absolute left-0 top-0 w-2 h-full bg-inlife-purple opacity-40"></div>
                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <span className="bg-inlife-purple/10 text-inlife-purple text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Constructive</span>
                    <span className="text-[11px] text-neutral-medium font-bold uppercase tracking-tight">Diberikan 3 hari lalu</span>
                 </div>
                 <p className="text-sm font-bold text-neutral-dark italic leading-relaxed mb-10 pl-2 border-l-4 border-neutral-bg">"{fb.text}"</p>
                 <div className="flex items-center gap-4 pt-6 border-t border-neutral-light/50">
                    <div className="w-10 h-10 rounded-2xl bg-neutral-bg overflow-hidden border border-neutral-light shadow-sm">
                       <img src={`https://picsum.photos/seed/${fb.mentor.split(' ')[0]}/100/100`} className="w-full h-full object-cover" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-neutral-medium uppercase tracking-[0.1em]">Mentor</p>
                       <p className="text-sm font-black text-neutral-dark">{fb.mentor}</p>
                    </div>
                 </div>
              </div>
            ))}
         </div>
      </section>
    </div>
  );
};

export default PillarMentor;
