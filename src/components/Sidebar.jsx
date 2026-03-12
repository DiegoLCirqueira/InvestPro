import { 
  LayoutDashboard, 
  LineChart, 
  Newspaper, 
  Lightbulb, 
  PieChart, 
  DollarSign, 
  ArrowLeftRight 
} from "lucide-react";

export function Sidebar({ onNavigate, activePage }) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "market", label: "Análise de Mercado", icon: LineChart },
    { id: "news", label: "Notícias", icon: Newspaper },
    { id: "recommendations", label: "Recomendações", icon: Lightbulb },
    { id: "diversification", label: "Diversificação", icon: PieChart },
    { id: "exchange", label: "Câmbio", icon: DollarSign },
    { id: "transfers", label: "Transferências", icon: ArrowLeftRight },
  ];

  return (
    <aside className="w-64 bg-brand-bg border-r border-gray-800 flex flex-col fixed h-full">
      <div className="p-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
            <span className="text-black font-black text-xl italic">I</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight">InvestPro</h1>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
              activePage === item.id 
                ? "bg-gray-800/50 text-brand-primary" 
                : "text-gray-500 hover:text-white hover:bg-gray-800/30"
            }`}
          >
            <item.icon size={20} className={activePage === item.id ? "text-brand-primary" : "group-hover:text-white"} />
            <span className="font-medium text-sm">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}