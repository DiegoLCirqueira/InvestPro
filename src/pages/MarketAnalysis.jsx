const INDEX_DATA = [
  { name: "IBOVESPA", value: "118.247", change: "+1.24%", pts: "+1.452 pts", trend: "up" },
  { name: "S&P 500", value: "4.567", change: "+0.87%", pts: "+39.2 pts", trend: "up" },
  { name: "NASDAQ", value: "14.234", change: "-0.45%", pts: "-64.8 pts", trend: "down" }
];

const DETAILED_ASSETS = [
  { symbol: "VALE3", name: "Vale S.A.", price: "R$ 68,42", change: "+1.2%", volume: "1.2B", sentiment: "Oportunidade" },
  { symbol: "PETR4", name: "Petrobras", price: "R$ 36,15", change: "-0.5%", volume: "980M", sentiment: "Neutral" },
  { symbol: "ITUB4", name: "Itaú Unibanco", price: "R$ 32,10", change: "+0.8%", volume: "750M", sentiment: "Oportunidade" },
  { symbol: "BBDC4", name: "Bradesco", price: "R$ 14,25", change: "-1.1%", volume: "520M", sentiment: "Risco" },
];

export function MarketAnalysis() {
  return (
    <div className="flex-1 flex flex-col min-h-0 animate-in fade-in duration-500">
      <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">Análise de Mercado</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {INDEX_DATA.map((index) => (
          <div 
            key={index.name} 
            className="p-6 rounded-2xl border border-gray-800 hover:border-brand-primary/30 transition-colors cursor-pointer"
          >
            <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">
              {index.name}
            </h4>
            
            <div className="space-y-1">
              <span className="text-3xl font-bold block tabular-nums text-white">
                {index.value}
              </span>
              <div className={`flex items-center gap-2 text-sm font-semibold ${
                index.trend === 'up' ? 'text-brand-primary' : 'text-red-500'
              }`}>
                <span>{index.change}</span>
                <span className="opacity-50 font-normal">({index.pts})</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1 p-6 rounded-2xl border border-gray-800 flex flex-col min-h-0">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold">Composição e Performance</h3>
          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] bg-gray-900 px-3 py-1 rounded-full border border-gray-800">
            Tempo Real
          </span>
        </div>

        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
          <table className="w-full text-left border-separate border-spacing-y-2">
            <thead>
              <tr className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">
                <th className="pb-2 pl-4">Ativo</th>
                <th className="pb-2">Preço</th>
                <th className="pb-2">Variação</th>
                <th className="pb-2">Volume</th>
                <th className="pb-2 pr-4 text-right">Sentimento</th>
              </tr>
            </thead>
            <tbody>
              {DETAILED_ASSETS.map((asset) => (
                <tr key={asset.symbol} className="bg-gray-900/40 hover:bg-gray-800/60 transition-colors group cursor-pointer">
                  <td className="py-3 pl-4 rounded-l-xl border-y border-l border-transparent group-hover:border-gray-700">
                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-white">{asset.symbol}</span>
                      <span className="text-[10px] text-gray-500 font-medium">{asset.name}</span>
                    </div>
                  </td>
                  <td className="py-3 text-sm font-medium tabular-nums">{asset.price}</td>
                  <td className={`py-3 text-sm font-bold tabular-nums ${asset.change.startsWith('+') ? 'text-brand-primary' : 'text-red-500'}`}>
                    {asset.change}
                  </td>
                  <td className="py-3 text-sm text-gray-400 tabular-nums">{asset.volume}</td>
                  <td className="py-3 pr-4 rounded-r-xl text-right border-y border-r border-transparent group-hover:border-gray-700">
                    <span className={`text-[9px] font-black px-2 py-1 rounded-md uppercase tracking-tighter ${
                      asset.sentiment === 'Oportunidade' ? 'bg-brand-primary/10 text-brand-primary' : 
                      asset.sentiment === 'Risco' ? 'bg-red-500/10 text-red-500' : 'bg-gray-700/30 text-gray-400'
                    }`}>
                      {asset.sentiment}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}