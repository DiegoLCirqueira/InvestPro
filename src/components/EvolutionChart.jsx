import { useState, useEffect } from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

/** Gráfico de área da evolução do patrimônio. data: array de { date, value } */
export function EvolutionChart({ data }) {
  /* Evita erro de hidratação do Recharts: só monta o gráfico após o DOM estar pronto */
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }

  // Se ainda não carregou, renderizamos uma div vazia com a mesma altura para não quebrar o layout
  if (!isLoaded) return <div className="h-64 w-full" />;

  return (
    // Usamos min-h-[300px] para garantir que o pai tenha altura física
    <div className="h-full w-full min-h-75">   
      {/* O segredo: debounce={50} ajuda o Recharts a esperar o layout estabilizar */}
      <ResponsiveContainer width="100%" height="100%" minHeight={0}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1f2937" />
          <XAxis dataKey="date" hide/>
          <YAxis 
            width={60} 
            tick={{fontSize: 12}} 
            tickFormatter={(value) => `R$${value}`}
          />

          <Tooltip 
            formatter={(value) => [formatCurrency(value), 'Patrimônio']}
            contentStyle={{ 
              backgroundColor: '#161b22', 
              border: '1px solid #374151', 
              borderRadius: '8px',
              fontSize: '12px'
            }}
            itemStyle={{ color: '#10b981' }}
          />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="#10b981" 
            strokeWidth={3}
            fill="url(#colorValue)"
            animationDuration={1000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}