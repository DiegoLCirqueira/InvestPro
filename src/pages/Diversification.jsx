import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { MOCK_DATA } from "../data/investments.js";

/** Mapeia tipo do ativo para nome legível e cor da categoria */
const CATEGORY_CONFIG = {
  CR: { name: "Criptomoedas", color: "#f59e0b", bgClass: "bg-amber-500" },
  AC: { name: "Ações", color: "#3b82f6", bgClass: "bg-brand-secondary" },
  RF: { name: "Renda Fixa", color: "#10b981", bgClass: "bg-brand-primary" },
};

/**
 * Agrupa ativos por categoria e calcula totais e percentuais.
 * Retorna dados para o gráfico e para a lista de detalhes.
 */
function buildDiversificationData(assets, totalBalance) {
  const byCategory = {};
  assets.forEach((asset) => {
    const config = CATEGORY_CONFIG[asset.type] || { name: "Outros", color: "#6b7280", bgClass: "bg-gray-500" };
    if (!byCategory[asset.type]) {
      byCategory[asset.type] = {
        type: asset.type,
        name: config.name,
        color: config.color,
        value: 0,
        items: [],
      };
    }
    byCategory[asset.type].value += asset.value;
    byCategory[asset.type].items.push({
      ...asset,
      percent: 0,
    });
  });

  const chartData = [];
  Object.values(byCategory).forEach((cat) => {
    const percent = totalBalance > 0 ? (cat.value / totalBalance) * 100 : 0;
    chartData.push({
      name: cat.name,
      value: cat.value,
      percent: percent.toFixed(1),
      color: cat.color,
    });
    cat.items.forEach((item) => {
      item.percent = cat.value > 0 ? ((item.value / cat.value) * percent).toFixed(1) : 0;
    });
  });

  return { chartData, byCategory };
}

/** Página de diversificação: onde o dinheiro está investido, por categoria e ativo */
export function Diversification() {
  const { assets, user } = MOCK_DATA;
  const totalBalance = user.balance;
  const { chartData, byCategory } = buildDiversificationData(assets, totalBalance);

  const formatCurrency = (value) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);

  const categoriesRight = Object.values(byCategory).filter((c) => c.type !== "RF");
  const rendaFixaCategory = byCategory.RF;

  return (
    <div className="flex-1 flex flex-col min-h-0 animate-in fade-in duration-500 overflow-hidden">
      <header className="mb-4 shrink-0">
        <h2 className="text-2xl font-bold text-white mb-1">Diversificação</h2>
        <p className="text-gray-400 text-sm">Veja onde seu dinheiro está investido.</p>
      </header>

      {/* Grid: linha 1 = gráfico (esq) alinhado em altura com Cripto+Ações (dir); linha 2 = Renda Fixa no espaço que sobra */}
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-[1fr_1fr] gap-4 min-h-0 flex-1">
        {/* Gráfico: altura igual à coluna Cripto+Ações (row 1) */}
        <div className="p-4 rounded-2xl border border-gray-800 bg-[#161b22] flex flex-col min-h-0 overflow-hidden">
            <h3 className="text-base font-bold text-white mb-2">Distribuição do portfólio</h3>
            <div className="h-44 shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={65}
                    paddingAngle={2}
                    dataKey="value"
                    nameKey="name"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [formatCurrency(value), "Valor"]}
                    contentStyle={{
                      backgroundColor: "#161b22",
                      border: "1px solid #374151",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                  <Legend
                    formatter={(value, entry) => (
                      <span className="text-gray-300 text-xs">
                        {value} — {entry.payload.percent}%
                      </span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 pt-3 border-t border-gray-800 flex justify-between items-baseline">
              <span className="text-gray-400 text-xs font-medium">Valor total</span>
              <span className="text-base font-bold text-white tabular-nums">{formatCurrency(totalBalance)}</span>
            </div>
          </div>
        {/* Coluna direita: Criptomoedas e Ações - altura igual à linha 1 (gráfico) */}
        <div className="flex flex-col gap-4 min-h-0 overflow-hidden lg:row-span-2">
          {categoriesRight.map((category) => (
            <div
              key={category.type}
              className="p-4 rounded-2xl border border-gray-800 bg-[#161b22] flex-1 min-h-0 flex flex-col"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: category.color }} />
                  <span className="font-bold text-white text-sm">{category.name}</span>
                </div>
                <span className="text-xs text-gray-400">
                  {formatCurrency(category.value)} ({((category.value / totalBalance) * 100).toFixed(1)}%)
                </span>
              </div>
              <div className="h-1.5 bg-gray-800 rounded-full mb-3 overflow-hidden shrink-0">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${(category.value / totalBalance) * 100}%`,
                    backgroundColor: category.color,
                  }}
                />
              </div>
              <div className="space-y-0 flex-1 min-h-0 overflow-hidden">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between py-2 border-b border-gray-800/50 last:border-0 text-sm"
                  >
                    <div className="min-w-0">
                      <p className="font-medium text-white truncate">{item.name}</p>
                      <p className="text-[10px] text-gray-500">{item.ticker}</p>
                    </div>
                    <div className="text-right shrink-0 ml-3">
                      <p className="font-bold text-white tabular-nums text-sm">{formatCurrency(item.value)}</p>
                      <p className="text-[10px] font-semibold tabular-nums" style={{ color: category.color }}>
                        {item.percent}%
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Renda Fixa no espaço que sobra (row 2, col 1) */}
        {rendaFixaCategory && (
          <div className="p-4 rounded-2xl border border-gray-800 bg-[#161b22] min-h-0 flex flex-col overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: rendaFixaCategory.color }} />
                <span className="font-bold text-white text-sm">{rendaFixaCategory.name}</span>
              </div>
              <span className="text-xs text-gray-400">
                {formatCurrency(rendaFixaCategory.value)} ({(rendaFixaCategory.value / totalBalance * 100).toFixed(1)}%)
              </span>
            </div>
            <div className="h-1.5 bg-gray-800 rounded-full mb-3 overflow-hidden shrink-0">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(rendaFixaCategory.value / totalBalance) * 100}%`,
                  backgroundColor: rendaFixaCategory.color,
                }}
              />
            </div>
            <div className="space-y-1 flex-1 min-h-0 overflow-hidden">
              {rendaFixaCategory.items.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-1.5 border-b border-gray-800/50 last:border-0 text-sm">
                  <div>
                    <p className="font-medium text-white">{item.name}</p>
                    <p className="text-[10px] text-gray-500">{item.ticker}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-white tabular-nums text-sm">{formatCurrency(item.value)}</p>
                    <p className="text-[10px] font-semibold" style={{ color: rendaFixaCategory.color }}>{item.percent}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
