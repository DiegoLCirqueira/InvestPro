import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export function EvolutionChart({ data }) {
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    }

  return (
    <div className="h-[250px] w-full">   
      <ResponsiveContainer width="100%" height="100%">
        {/* 4. Mude de MOCK_DATA.history para apenas 'data' */}
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1f2937" />
          <XAxis dataKey="date" hide />
          <YAxis hide />

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
            animationDuration={1000} // Adiciona um efeito suave na troca de dados
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}