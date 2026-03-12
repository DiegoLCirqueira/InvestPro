import { MOCK_DATA } from '../data/investments';

export function Assets() {
  return (
    <div className="rounded-2xl border border-gray-800 p-6 h-full">
      <h3 className="text-lg font-bold mb-4">Seus Ativos</h3>
      
      <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {/* O .map() transforma cada objeto de dado em um elemento visual */}
        {MOCK_DATA.assets.map((asset) => (
          <div key={asset.id} className="flex items-center justify-between p-3 hover:bg-gray-800/50 rounded-xl transition-colors">
            <div className="flex items-center gap-3">
              {/* Um detalhe de UI: Um ícone simples com as iniciais */}
              <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center font-bold text-xs uppercase">
                {asset.type}
              </div>
              <div>
                <p className="font-bold">{asset.ticker}</p>
                <p className="text-xs text-gray-500">{asset.name}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-bold">
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(asset.value)}
              </p>
              {/* Lógica Condicional: Se a variação for positiva, verde; se negativa, vermelho */}
              <p className={`text-xs font-bold ${asset.change > 0 ? 'text-brand-primary' : 'text-brand-danger'}`}>
                {asset.change > 0 ? '+' : ''}{asset.change}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}