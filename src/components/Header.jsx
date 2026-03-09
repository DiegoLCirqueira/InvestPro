import { Bell, User, Sun } from 'lucide-react';

export function Header() {
  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h2 className="text-2xl font-bold text-white">Olá, Diego</h2>
        <p className="text-gray-400 text-sm">Bem-vindo de volta ao seu painel de investimentos.</p>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-400 hover:text-white transition-colors">
          <Sun size={20} />
        </button>
        <button className="p-2 text-gray-400 hover:text-white transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-brand-primary rounded-full border-2 border-brand-bg"></span>
        </button>
        
        <div className="flex items-center gap-3 pl-4 border-l border-gray-800">
          <div className="text-right">
            <p className="text-sm font-medium text-white">Diego Cirqueira</p>
            <p className="text-xs text-gray-500">Premium Account</p>
          </div>
          <div className="w-10 h-10 bg-brand-card border border-gray-700 rounded-full flex items-center justify-center text-brand-primary">
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}