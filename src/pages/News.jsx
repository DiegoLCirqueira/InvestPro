// src/pages/News.jsx
import { NEWS_DATA } from "../data/news";
import { TrendingUp, Clock } from "lucide-react";

export function News() { // Mudamos de "default" para "export function"
  return (
    <div className="flex-1">
      <header className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Notícias do Mercado</h2>
        <p className="text-gray-400 text-sm">Fique por dentro do que move o seu dinheiro hoje.</p>
      </header>

      <div className="grid gap-4">
        {NEWS_DATA.map((item) => (
          <div 
            key={item.id} 
            className="bg-gray-800/20 border border-gray-800 p-5 rounded-2xl hover:border-brand-primary/50 transition-all cursor-pointer group"
          >
            <div className="flex justify-between items-start mb-3">
              <span className="px-2 py-0.5 bg-brand-primary/10 text-brand-primary text-[10px] font-bold rounded-full uppercase">
                {item.category}
              </span>
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <Clock size={12} />
                {item.time}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white group-hover:text-brand-primary transition-colors mb-2">
              {item.title}
            </h3>
            
            <p className="text-gray-400 text-xs leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}