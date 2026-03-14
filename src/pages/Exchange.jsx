import { EXCHANGE_DATA } from "../data/exchange.js";

function CurrencyCard({ currency }) {
  const formatRate = (value) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(value);

  const isPositive = currency.variation >= 0;

  return (
    <div className="p-5 rounded-2xl border border-gray-800 bg-[#161b22] flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-white">{currency.ticker}</h3>
          <p className="text-sm text-gray-400">{currency.name}</p>
        </div>
        <span className="text-xs font-semibold bg-brand-secondary text-white px-2 py-1 rounded-md">
          Taxa: {currency.fee}%
        </span>
      </div>

      {/* Cotação e Variação */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Cotação:</span>
          <span className="font-bold text-white tabular-nums">
            {formatRate(currency.rate)}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Variação:</span>
          <span
            className={`font-bold tabular-nums ${
              isPositive ? "text-brand-primary" : "text-brand-danger"
            }`}
          >
            {isPositive ? "+" : ""}
            {currency.variation}%
          </span>
        </div>
      </div>

      {/* Botão */}
      <button className="w-full py-2.5 rounded-xl bg-brand-primary hover:opacity-90 transition-opacity duration-200 text-white font-bold text-sm cursor-pointer">
        Comprar {currency.ticker}
      </button>
    </div>
  );
}

export function Exchange() {
  const { currencies } = EXCHANGE_DATA;

  return (
    <div className="flex-1 flex flex-col min-h-0 animate-in fade-in duration-500">
      <header className="mb-6 shrink-0">
        <h2 className="text-2xl font-bold text-white mb-1">Câmbio de Moedas</h2>
        <p className="text-gray-400 text-sm">
          Compre moedas estrangeiras com as melhores taxas.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currencies.map((currency) => (
          <CurrencyCard key={currency.id} currency={currency} />
        ))}
      </div>
    </div>
  );
}