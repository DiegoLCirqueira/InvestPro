import { useEffect, useRef, useState } from 'react';
import { Bell, User, CalendarDays } from 'lucide-react';

/**
 * Header da aplicação. Recebe currentPage para adaptar o conteúdo.
 * No Dashboard: mostra saudação (Bom dia/tarde/noite), data e resumo do portfólio.
 * Nas demais abas: mostra apenas a data formatada.
 */
export function Header({ currentPage = "dashboard", onNavigate }) {
  const isDashboard = currentPage === "dashboard";
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const notificationsRef = useRef(null);
  
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Bom dia" : hour < 18 ? "Boa tarde" : "Boa noite";
  
  const dateStr = new Date().toLocaleDateString('pt-BR', { 
    weekday: 'long', 
    day: '2-digit', 
    month: 'long' 
  });

  const notifications = [
    { id: 1, title: "Alerta de mercado", text: "IBOVESPA subiu +1.24% hoje." },
    { id: 2, title: "Recomendação de IA", text: "Nova oportunidade em ações de tecnologia." },
    { id: 3, title: "Lembrete", text: "Revise sua diversificação este mês." },
  ];

  useEffect(() => {
    const onDocClick = (e) => {
      if (!isNotificationsOpen) return;
      if (!notificationsRef.current) return;
      if (notificationsRef.current.contains(e.target)) return;
      setIsNotificationsOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [isNotificationsOpen]);

  return (
    <header className="flex items-center justify-between mb-10">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-brand-primary">
          <CalendarDays size={14} className="opacity-80" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-70">
            {dateStr}
          </span>
        </div>
        
        {/* Saudação e resumo do portfólio só aparecem no Dashboard */}
        {isDashboard ? (
          <>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              {greeting}, <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">Diego</span>
            </h2>
            <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></span>
          <p className="text-gray-500 text-xs font-medium">
            Seu portfólio rendeu <span className="text-brand-primary">+2.28%</span> nas últimas 24h.
          </p>
        </div>
          </>
        ) : null}
      </div>

      <div className="flex items-center gap-5 relative" ref={notificationsRef}>
        <button
          onClick={() => setIsNotificationsOpen((v) => !v)}
          className="p-2.5 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all relative group"
          type="button"
          aria-label="Notificações"
        >
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-brand-primary rounded-full border-2 border-brand-bg group-hover:scale-110 transition-transform"></span>
        </button>

        {isNotificationsOpen ? (
          <div className="absolute right-0 top-12 w-80 rounded-2xl border border-gray-800 bg-[#0b1220] shadow-2xl overflow-hidden z-30">
            <div className="px-4 py-3 border-b border-gray-800 flex items-center justify-between">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                Notificações
              </span>
              <button
                className="text-[10px] text-gray-500 hover:text-white font-semibold"
                type="button"
                onClick={() => setIsNotificationsOpen(false)}
              >
                Fechar
              </button>
            </div>

            <div className="max-h-72 overflow-y-auto">
              {notifications.map((n) => (
                <div key={n.id} className="px-4 py-3 border-b border-gray-800/70 last:border-0 hover:bg-gray-900/40 transition-colors">
                  <p className="text-xs font-bold text-white mb-1">{n.title}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{n.text}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
        
        <div className="flex items-center gap-4 pl-5 border-l border-gray-800">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-white leading-none">Diego Cirqueira</p>
            <div className="flex items-center justify-end gap-1.5 mt-1">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">Premium Account</p>
            </div>
          </div>
          
          <div
            className="w-11 h-11 bg-linear-to-br to-gray-900 border border-gray-700 rounded-2xl flex items-center justify-center text-brand-primary shadow-lg shadow-black/20 group cursor-pointer hover:border-brand-primary/50 transition-colors"
            onClick={() => typeof onNavigate === "function" && onNavigate("profile")}
            role="button"
            tabIndex={0}
          >
            <User size={22} className="group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </header>
  );
}