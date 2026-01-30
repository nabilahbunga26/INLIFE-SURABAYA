
import React, { useState } from 'react';

interface Story {
  user: string;
  role: string;
  img: string;
  avatar: string;
  caption: string;
}

interface Division {
  name: string;
  icon: string;
  color: string;
  stories: Story[];
}

const PillarHeart: React.FC = () => {
  const [mood, setMood] = useState(70);
  const [activeStory, setActiveStory] = useState<Division | null>(null);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const getEmoji = (val: number) => {
    if (val < 30) return { emoji: '😩', color: 'text-telkomsel-red', text: 'Lelah' };
    if (val < 70) return { emoji: '😐', color: 'text-inlife-yellow', text: 'Biasa' };
    return { emoji: '😊', color: 'text-inlife-blue', text: 'Senang' };
  };

  const currentMood = getEmoji(mood);

  const divisions: Division[] = [
    { 
      name: 'IT Ops', 
      icon: '💻', 
      color: 'border-inlife-blue',
      stories: [
        { user: 'Adit', role: 'DevOps Intern', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600', avatar: 'https://i.pravatar.cc/150?u=adit', caption: 'Lagi monitoring traffic server Surabaya nih! 🚀' },
        { user: 'Maya', role: 'Fullstack Intern', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600', avatar: 'https://i.pravatar.cc/150?u=maya', caption: 'Debugging session with the squad. Semangat!' },
        { user: 'Budi', role: 'Cloud Intern', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600', avatar: 'https://i.pravatar.cc/150?u=budi', caption: 'Cloud infrastructure is looking good today.' }
      ]
    },
    { 
      name: 'Marketing', 
      icon: '📈', 
      color: 'border-inlife-pink',
      stories: [
        { user: 'Siska', role: 'Social Media Intern', img: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=600', avatar: 'https://i.pravatar.cc/150?u=siska', caption: 'Brainstorming konten TikTok inLife Surabaya! 📸' },
        { user: 'Reno', role: 'Ads Specialist Intern', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600', avatar: 'https://i.pravatar.cc/150?u=reno', caption: 'Reviewing current campaign performance.' }
      ]
    },
    { 
      name: 'HR/People', 
      icon: '👥', 
      color: 'border-inlife-purple',
      stories: [
        { user: 'Putri', role: 'Talent Acquisition', img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=600', avatar: 'https://i.pravatar.cc/150?u=putri', caption: 'Interviewing batch 2 candidates. Good luck!' }
      ]
    },
    { 
      name: 'Finance', 
      icon: '💰', 
      color: 'border-inlife-yellow',
      stories: [
        { user: 'Eko', role: 'Audit Intern', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600', avatar: 'https://i.pravatar.cc/150?u=eko', caption: 'Checking report end of month. Focus mode on.' },
        { user: 'Dina', role: 'Accounting Intern', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600', avatar: 'https://i.pravatar.cc/150?u=dina', caption: 'Everything must be balanced. ⚖️' }
      ]
    },
    { 
      name: 'Field Tech', 
      icon: '📡', 
      color: 'border-inlife-green',
      stories: [
        { user: 'Zaki', role: 'Network Engineer', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600', avatar: 'https://i.pravatar.cc/150?u=zaki', caption: 'Checking BTS tower in Surabaya West area.' }
      ]
    },
    { 
      name: 'Customer Service', 
      icon: '🎧', 
      color: 'border-telkomsel-red',
      stories: [
        { user: 'Wati', role: 'Customer Experience', img: 'https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=600', avatar: 'https://i.pravatar.cc/150?u=wati', caption: 'Happy to help our customers today! 😊' }
      ]
    },
  ];

  const nextStory = () => {
    if (!activeStory) return;
    if (currentStoryIndex < activeStory.stories.length - 1) {
      setCurrentStoryIndex(prev => prev + 1);
    } else {
      closeStory();
    }
  };

  const prevStory = () => {
    if (!activeStory) return;
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(prev => prev - 1);
    }
  };

  const closeStory = () => {
    setActiveStory(null);
    setCurrentStoryIndex(0);
  };

  return (
    <div className="space-y-6 lg:space-y-10">
      {/* Story Overlay Viewer */}
      {activeStory && (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center animate-fade-in">
          <div className="relative w-full h-full max-w-md bg-neutral-dark shadow-2xl overflow-hidden md:h-[80vh] md:rounded-3xl">
            {/* Top Progress Bars */}
            <div className="absolute top-4 left-0 right-0 px-4 flex gap-1 z-30">
              {activeStory.stories.map((_, i) => (
                <div key={i} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-white transition-all duration-300 ${i <= currentStoryIndex ? 'w-full' : 'w-0'}`}
                  ></div>
                </div>
              ))}
            </div>

            {/* Header User Profile */}
            <div className="absolute top-8 left-0 right-0 px-4 flex items-center justify-between z-30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-inlife-pink p-0.5 bg-white">
                  <img src={activeStory.stories[currentStoryIndex].avatar} alt="" className="w-full h-full rounded-full object-cover" />
                </div>
                <div className="text-white">
                  <p className="text-sm font-black tracking-tight drop-shadow-lg">{activeStory.stories[currentStoryIndex].user}</p>
                  <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest drop-shadow-md">{activeStory.stories[currentStoryIndex].role}</p>
                </div>
              </div>
              <button onClick={closeStory} className="p-2 text-white bg-black/40 rounded-full backdrop-blur-md">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content & Navigation Zones */}
            <div className="w-full h-full relative">
              <img 
                src={activeStory.stories[currentStoryIndex].img} 
                className="w-full h-full object-cover" 
                alt="BTS Story"
              />
              <div className="absolute inset-0 flex">
                <div className="w-1/3 h-full cursor-pointer" onClick={prevStory}></div>
                <div className="w-2/3 h-full cursor-pointer" onClick={nextStory}></div>
              </div>
              <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
                 <p className="text-white text-sm font-bold leading-relaxed">{activeStory.stories[currentStoryIndex].caption}</p>
                 <div className="mt-4 flex gap-2">
                    <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-black uppercase">#{activeStory.name.replace('/', '')}</span>
                    <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-black uppercase">#inLifeSurabaya</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Division Takeover Horizontal List */}
      <section className="animate-fade-in bg-white p-6 rounded-[2.5rem] border border-neutral-light shadow-sm">
        <div className="flex items-center justify-between mb-6 px-1">
          <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-medium">Intern Takeover Stories</h3>
          <div className="flex items-center gap-1.5 bg-telkomsel-red/5 px-3 py-1 rounded-full">
             <span className="w-2 h-2 rounded-full bg-telkomsel-red animate-pulse"></span>
             <span className="text-[10px] font-black text-telkomsel-red uppercase tracking-wider">Live BTS</span>
          </div>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-2 hide-scrollbar">
          {divisions.map((div, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center gap-2 flex-shrink-0 group cursor-pointer"
              onClick={() => {
                setActiveStory(div);
                setCurrentStoryIndex(0);
              }}
            >
              <div className={`w-20 h-20 rounded-full border-[3px] ${div.color} p-1 transition-all group-hover:scale-105 active:scale-95 shadow-md`}>
                <div className="w-full h-full rounded-full bg-neutral-bg flex items-center justify-center text-3xl relative overflow-hidden">
                   <img src={`https://picsum.photos/seed/${div.name}/200/200`} alt={div.name} className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity group-hover:opacity-70" />
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                   <span className="relative z-10 drop-shadow-lg">{div.icon}</span>
                </div>
              </div>
              <span className="text-[11px] font-black text-neutral-dark text-center truncate w-20 uppercase tracking-tighter group-hover:text-inlife-pink transition-colors">{div.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Main Dashboard Hero */}
      <section className="max-w-2xl px-2">
        <h2 className="text-3xl font-black text-neutral-dark tracking-tight leading-tight">Internship Pulse Hub</h2>
        <p className="text-sm text-neutral-medium font-medium mt-2 italic">Selamat pagi, Surabaya! Pantau performa dan misimu hari ini.</p>
      </section>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Tasks Completed', value: '24', icon: '✅', color: 'bg-inlife-pink' },
          { label: 'Points Earned', value: '1.2k', icon: '💎', color: 'bg-inlife-yellow' },
          { label: 'Daily Attendance', value: '98%', icon: '⏰', color: 'bg-inlife-green' },
          { label: 'Global Rank', value: '#5', icon: '🏆', color: 'bg-inlife-blue' }
        ].map((kpi, i) => (
          <div key={i} className="bg-white p-5 rounded-[2rem] border border-neutral-light shadow-sm hover:shadow-lg transition-all group cursor-default">
            <div className={`w-10 h-10 ${kpi.color} rounded-xl flex items-center justify-center text-xl shadow-lg shadow-black/5 mb-3 group-hover:rotate-12 transition-transform`}>{kpi.icon}</div>
            <p className="text-[10px] font-black text-neutral-medium uppercase tracking-[0.15em]">{kpi.label}</p>
            <h4 className="text-2xl font-black text-neutral-dark mt-1">{kpi.value}</h4>
          </div>
        ))}
      </div>

      {/* Mixed Widgets Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* by.U Integration Widget */}
          <section className="bg-inlife-blue rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden group">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-inlife-yellow rounded-full opacity-30 blur-2xl transition-transform group-hover:scale-125"></div>
            <div className="flex justify-between items-center relative z-10">
              <div className="space-y-2">
                <div className="bg-white/20 text-white rounded-full px-4 py-1.5 text-[11px] font-black w-fit uppercase tracking-widest border border-white/30 backdrop-blur-sm">by.U Intern Package</div>
                <h4 className="text-white text-6xl font-black tracking-tighter">15.4 <span className="text-2xl font-bold uppercase opacity-80">GB</span></h4>
                <p className="text-white/80 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-inlife-green animate-pulse"></span>
                   Aktif s/d 25 Des 2026
                </p>
              </div>
              <button className="bg-inlife-yellow text-white font-black text-xs px-8 py-5 rounded-2xl shadow-xl hover:brightness-110 active:scale-95 transition-all uppercase tracking-[0.2em] self-end">Redeem Reward</button>
            </div>
          </section>

          {/* Activity Missions */}
          <section className="bg-white rounded-[2.5rem] p-8 border border-neutral-light shadow-sm">
             <div className="flex justify-between items-center mb-8">
                <h3 className="text-sm font-black uppercase tracking-[0.2em]">Gamified Missions</h3>
                <span className="text-[10px] font-black text-inlife-blue uppercase tracking-widest cursor-pointer hover:underline">View All</span>
             </div>
             <div className="space-y-4">
                {[
                  { title: 'Review produk by.U di sosial media', pts: '50 pts', icon: '📱' },
                  { title: 'Update Daily Insight ke The Vault', pts: '30 pts', icon: '📝' },
                  { title: 'Bantu tim Field Monitoring Surabaya', pts: '100 pts', icon: '🚗' }
                ].map((mission, i) => (
                  <div key={i} className="flex items-center justify-between p-5 bg-neutral-bg/30 rounded-2xl border border-neutral-light hover:bg-white hover:shadow-md transition-all group cursor-pointer">
                    <div className="flex items-center gap-4">
                       <span className="text-2xl">{mission.icon}</span>
                       <p className="text-xs font-bold text-neutral-dark">{mission.title}</p>
                    </div>
                    <div className="bg-inlife-yellow/10 text-inlife-yellow px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest group-hover:bg-inlife-yellow group-hover:text-white transition-colors">{mission.pts}</div>
                  </div>
                ))}
             </div>
          </section>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-6">
          {/* Vibe Check Widget */}
          <section className="bg-white rounded-[2.5rem] p-8 border border-neutral-light shadow-sm flex flex-col items-center">
            <h3 className="text-xs font-black mb-10 w-full uppercase tracking-[0.2em] text-neutral-medium text-center">Daily Vibe Check</h3>
            <div className="flex flex-col items-center gap-6 w-full">
              <div className="relative">
                 <div className="absolute inset-0 bg-inlife-pink/5 rounded-full blur-2xl animate-pulse"></div>
                 <span className={`text-8xl transition-all relative drop-shadow-xl ${currentMood.color}`}>{currentMood.emoji}</span>
              </div>
              <span className={`text-base font-black uppercase tracking-[0.3em] ${currentMood.color}`}>{currentMood.text}</span>
              <input 
                type="range" min="0" max="100" value={mood}
                onChange={(e) => setMood(parseInt(e.target.value))}
                className="w-full h-3 bg-neutral-bg rounded-lg appearance-none cursor-pointer shadow-inner"
              />
              <p className="text-[10px] text-neutral-medium text-center font-bold italic opacity-60">Mood harianmu membantu mentor memberikan bimbingan terbaik.</p>
            </div>
          </section>

          {/* Hall of Fame Preview */}
          <section className="bg-neutral-dark rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group cursor-pointer">
             <div className="absolute top-0 right-0 w-32 h-32 bg-inlife-pink opacity-10 blur-3xl group-hover:opacity-20 transition-opacity"></div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 border-l-4 border-inlife-pink pl-4">Hall of Fame</h4>
             <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl border-2 border-white/20 overflow-hidden shadow-lg">
                   <img src="https://i.pravatar.cc/150?u=jane" className="w-full h-full object-cover" />
                </div>
                <div>
                   <p className="text-sm font-black tracking-tight">Jane Doe</p>
                   <p className="text-[10px] font-bold text-inlife-pink uppercase tracking-widest mt-0.5">Intern of the Month</p>
                </div>
             </div>
             <div className="mt-8">
                <button className="w-full bg-white/10 hover:bg-white/20 border border-white/10 text-white font-black py-4 rounded-2xl text-[10px] uppercase tracking-[0.2em] transition-all">Liat Peringkat</button>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PillarHeart;
