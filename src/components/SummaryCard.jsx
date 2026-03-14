import { TrendingUp } from 'lucide-react';

/** Card de resumo: valor total do portfólio e transações recentes. balance e change em BRL */
export function SummaryCard({ balance, change }) {
  const formattedBalance = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(balance);

  return (
    <div className="p-6 rounded-2xl border border-gray-800 shadow-xl">
      <p className="text-gray-400 text-sm font-medium mb-1">Valor Total do Portfólio</p>
      
      <div className="flex items-end gap-3 mb-6">
        <h3 className="text-3xl font-bold text-white tracking-tight">
          {formattedBalance}
        </h3>
        <span className="flex items-center gap-1 text-xs font-bold bg-brand-primary/10 text-brand-primary px-2 py-1 rounded-lg mb-1">
          <TrendingUp size={12} />
          +{change}%
        </span>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Transações Recentes</p>
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
            <span className="text-gray-300">Compra PETR4</span>
          </div>
          <span className="font-mono text-brand-primary">R$ 2.450,00</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-danger"></span>
            <span className="text-gray-300">Venda VALE3</span>
          </div>
          <span className="font-mono text-brand-danger">R$ 1.890,50</span>
        </div>
      </div>
    </div>
  );
}