import React, { createContext, useContext, useState, useEffect } from 'react';

const SeasonContext = createContext();

export const SeasonProvider = ({ children }) => {
  const [season, setSeason] = useState('spring'); // spring, summer, autumn, winter
  const [time, setTime] = useState('day'); // day, night

  useEffect(() => {
    document.documentElement.setAttribute('data-season', season);
    document.documentElement.setAttribute('data-time', time);
  }, [season, time]);

  return (
    <SeasonContext.Provider value={{ season, setSeason, time, setTime }}>
      {children}
    </SeasonContext.Provider>
  );
};

export const useSeason = () => useContext(SeasonContext);

export const SeasonSwitcher = () => {
  const { season, setSeason, time, setTime } = useSeason();
  
  const seasons = [
    { id: 'spring', icon: '🌸', color: '#F4C2C2' },
    { id: 'summer', icon: '☀️', color: '#FFD700' },
    { id: 'autumn', icon: '🍂', color: '#D2691E' },
    { id: 'winter', icon: '❄️', color: '#B0E0E6' },
  ];

  return (
    <div className="fixed bottom-10 left-10 z-[200] flex flex-col gap-4">
      {/* Day/Night Toggle */}
      <button 
        onClick={() => setTime(time === 'day' ? 'night' : 'day')}
        className="w-14 h-14 glass rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-transform shadow-2xl border-white/10"
      >
        {time === 'day' ? '🌞' : '🌙'}
      </button>

      {/* Season Picker */}
      <div className="glass p-2 rounded-full flex flex-col gap-2 border-white/10 shadow-2xl">
        {seasons.map((s) => (
          <button
            key={s.id}
            onClick={() => setSeason(s.id)}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all ${
              season === s.id ? 'bg-white/20 scale-110 shadow-inner' : 'hover:bg-white/5'
            }`}
            title={s.id}
          >
            {s.icon}
          </button>
        ))}
      </div>
    </div>
  );
};
