import {useState} from "react";
import { Sidebar } from "./components/Sidebar.jsx";
import { Header } from "./components/Header.jsx";
import { SummaryCard } from "./components/SummaryCard.jsx";
import { Assets } from "./components/Assets.jsx";
import { EvolutionChart } from "./components/EvolutionChart.jsx";
import { MOCK_DATA } from "./data/investments.js";

function App() {
  const [days, setDays] = useState(30);

  const filteredHistory = MOCK_DATA.history.slice(-days);

  return (
    <div className="min-h-screen bg-brand-bg flex text-white" font-sans>
      <Sidebar />
      
      <main className="ml-64 p-10 flex-1 max-w-[1600px]">
        <Header />
        
        {/* Layout em Grid: 2 colunas no desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Coluna Principal (Esquerda) */}
          <div className="lg:col-span-2 space-y-6">
            <SummaryCard 
              balance={MOCK_DATA.user.balance} 
              change={MOCK_DATA.user.change} 
            />

            {/* Container do Gr[afico com Botoes de Filtro */}
            <div className='bg-brand=card p-6 rounded-2xl border border-gray-800'>
              <div className='flex justfbetween items-center mb-6'>
                <h3 className='text-lg font-bold'>Evolução do Patrimônio</h3>

                {/* Botoes com Tailwind dinamico */}
                <div classNmae='flex bg-gray-900 p-1 rounded-lg border border-gray-800'>
                  <button 
                    onClick={() => setDays(7)}
                    className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${days === 7 ? 'bg-brand-primary text-black' : 'text-gray-400 hover:text-white'}`}
                  >
                    7D
                  </button>
                  <button
                    onClick={() => setDays(30)}
                    className ={`px-4 py-1.5 rounded-md text-xs dontd-bold transition-all ${days === 30 ? 'bg-brand-primary text-black' : 'text-gray-400 hover:text-white'}`}
                  >
                    30D
                    </button>
                  </div>
                </div>

                {/* Passamos os dados filtrados como Prop */}
                <EvolutionChart data={filteredHistory} />
              </div>
            </div>
            <div className='lg:col-span-1'>
              <Assets />
            </div>
          </div>
      </main>
    </div>
  );
}

export default App;