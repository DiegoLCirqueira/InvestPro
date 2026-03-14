import { useState } from "react";
import { TRANSFERS_DATA } from "../data/transfers.js";

const STATUS_CONFIG = {
  concluded: {
    label: "Concluída",
    className: "bg-brand-primary text-white",
  },
  processing: {
    label: "Processando",
    className: "bg-amber-600 text-white",
  },
  failed: {
    label: "Falhou",
    className: "bg-brand-danger text-white",
  },
};

function TransferHistoryItem({ transfer }) {
  const status = STATUS_CONFIG[transfer.status];

  const formatCurrency = (value) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  return (
    <div className="flex items-center justify-between p-4 rounded-xl border border-gray-800 bg-[#0f1318]">
      <div>
        <p className="font-bold text-white tabular-nums text-base">
          {formatCurrency(transfer.amount)}
        </p>
        <p className="text-sm text-gray-400 mt-0.5">
          {transfer.bank} • {transfer.date}
        </p>
      </div>
      <span className={`text-xs font-semibold px-3 py-1 rounded-md ${status.className}`}>
        {status.label}
      </span>
    </div>
  );
}

export function Transfers() {
  const { accounts, history } = TRANSFERS_DATA;

  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState(accounts[0].id);

  const formatInput = (raw) => {
    const digits = raw.replace(/\D/g, "");
    const number = parseFloat(digits) / 100;
    if (isNaN(number)) return "";
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(number);
  };

  const handleAmountChange = (e) => {
    setAmount(formatInput(e.target.value));
  };

  const handleTransfer = () => {
    if (!amount || amount === "") return;
    alert(`Transferência de ${amount} para ${accounts.find((a) => a.id === account)?.label} iniciada!`);
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 animate-in fade-in duration-500">
      <header className="mb-6 shrink-0">
        <h2 className="text-2xl font-bold text-white mb-1">Transferências Bancárias</h2>
        <p className="text-gray-400 text-sm">Movimente dinheiro entre suas contas.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
        {/* Formulário */}
        <div className="p-6 rounded-2xl border border-gray-800 bg-[#161b22] flex flex-col gap-5">
          <h3 className="text-base font-bold text-white">Nova Transferência</h3>

          {/* Valor */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400">Valor</label>
            <input
              type="text"
              inputMode="numeric"
              placeholder="R$ 0,00"
              value={amount}
              onChange={handleAmountChange}
              className="w-full px-4 py-3 rounded-xl bg-[#0f1318] border border-gray-700 text-white placeholder-gray-600 text-base focus:outline-none focus:border-brand-primary transition-colors duration-200"
            />
          </div>

          {/* Conta de destino */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400">Conta de Destino</label>
            <select
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0f1318] border border-gray-700 text-white text-base focus:outline-none focus:border-brand-primary transition-colors duration-200 cursor-pointer"
            >
              {accounts.map((acc) => (
                <option key={acc.id} value={acc.id} className="bg-[#0f1318]">
                  {acc.label}
                </option>
              ))}
            </select>
          </div>

          {/* Botão */}
          <button
            onClick={handleTransfer}
            className="w-full py-3 rounded-xl bg-brand-primary hover:opacity-90 transition-opacity duration-200 text-white font-bold text-sm cursor-pointer"
          >
            Transferir
          </button>
        </div>

        {/* Histórico */}
        <div className="p-6 rounded-2xl border border-gray-800 bg-[#161b22] flex flex-col gap-4">
          <h3 className="text-base font-bold text-white">Histórico de Transferências</h3>
          <div className="flex flex-col gap-3">
            {history.map((transfer) => (
              <TransferHistoryItem key={transfer.id} transfer={transfer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}