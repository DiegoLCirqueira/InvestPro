import { useState } from "react";
import { SummaryCard } from "../components/SummaryCard.jsx";
import { EvolutionChart } from "../components/EvolutionChart.jsx";
import { Assets } from "../components/Assets.jsx";
import { MOCK_DATA } from "../data/investments.js";

export function Dashboard() {
  const [days, setDays] = useState(30);
  const filteredHistory = MOCK_DATA.history.slice(-days);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch flex-1 min-h-0">
      {/* Coluna Principal (Esquerda) */}
      <div className="lg:col-span-2 space-y-6 flex flex-col min-h-0">
        <SummaryCard 
          balance={MOCK_DATA.user.balance} 
          change={MOCK_DATA.user.change} 
        />

        <div className="p-6 rounded-2xl border border-gray-800 flex-1 flex flex-col min-h-0">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold">Evolução do Patrimônio</h3>

            <div className="flex bg-gray-900 p-1 rounded-lg border border-gray-800">
              <button 
                onClick={() => setDays(7)}
                className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${
                  days === 7 ? 'bg-brand-primary text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                7D
              </button>
              <button
                onClick={() => setDays(30)}
                className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${
                  days === 30 ? 'bg-brand-primary text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                30D
              </button>
            </div>
          </div>

          <div className="flex-1 min-h-0">
            <EvolutionChart data={filteredHistory} />
          </div>
        </div>
      </div>

      {/* Coluna Lateral (Direita) */}
      <div className="lg:col-span-1 h-full min-h-0">
        <Assets />
      </div>
    </div>
  );
}