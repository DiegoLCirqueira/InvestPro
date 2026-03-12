import { Bell, User, CalendarDays } from 'lucide-react';

export function Header() {
  // Lógica simples para saudação profissional
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Bom dia" : hour < 18 ? "Boa tarde" : "Boa noite";
  
  // Data formatada para dar um toque de terminal financeiro
  const dateStr = new Date().toLocaleDateString('pt-BR', { 
    weekday: 'long', 
    day: '2-digit', 
    month: 'long' 
  });

  return (
    <header className="flex items-center justify-between mb-10">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-brand-primary">
          <CalendarDays size={14} className="opacity-80" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-70">
            {dateStr}
          </span>
        </div>
        
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          {greeting}, <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">Diego</span>
        </h2>
        
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></span>
          <p className="text-gray-500 text-xs font-medium">
            Seu portfólio rendeu <span className="text-brand-primary">+2.28%</span> nas últimas 24h.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button className="p-2.5 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all relative group">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-brand-primary rounded-full border-2 border-brand-bg group-hover:scale-110 transition-transform"></span>
        </button>
        
        <div className="flex items-center gap-4 pl-5 border-l border-gray-800">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-white leading-none">Diego Cirqueira</p>
            <div className="flex items-center justify-end gap-1.5 mt-1">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">Premium Account</p>
            </div>
          </div>
          
          <div className="w-11 h-11 bg-linear-to-br to-gray-900 border border-gray-700 rounded-2xl flex items-center justify-center text-brand-primary shadow-lg shadow-black/20 group cursor-pointer hover:border-brand-primary/50 transition-colors">
            <User size={22} className="group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </header>
  );
}