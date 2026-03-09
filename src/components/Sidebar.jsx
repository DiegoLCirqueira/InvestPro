import { LayoutDashboard, TrendingUp, Newspaper, Lightbulb, PieChart, DollarSign, ArrowLeftRight } from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: TrendingUp, label: 'Análise de Mercado' },
  { icon: Newspaper, label: 'Notícias' },
  { icon: Lightbulb, label: 'Recomendações' },
  { icon: PieChart, label: 'Diversificação' },
  { icon: DollarSign, label: 'Câmbio' },
  { icon: ArrowLeftRight, label: 'Transferências' },
];

export function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-brand-bg border-r border-gray-800 p-6 flex flex-col">
      <div className="flex items-center gap-2 mb-10">
        <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center font-bold">I</div>
        <h1 className="text-xl font-bold tracking-tight text-white">InvestPro</h1>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all ${
              item.active 
                ? 'bg-brand-card text-brand-primary' 
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <item.icon size={20} />
            <span className="font-medium text-sm">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}