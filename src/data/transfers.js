export const TRANSFERS_DATA = {
    accounts: [
      { id: "bb-cc", label: "Conta Corrente - Banco do Brasil" },
      { id: "itau-cc", label: "Conta Corrente - Itaú" },
      { id: "caixa-pp", label: "Poupança - Caixa" },
      { id: "nubank-cc", label: "Conta Corrente - Nubank" },
    ],
    history: [
      {
        id: 1,
        amount: 5000,
        bank: "Banco do Brasil",
        date: "15/12/2024",
        status: "concluded",
      },
      {
        id: 2,
        amount: 2500,
        bank: "Itaú",
        date: "10/12/2024",
        status: "concluded",
      },
      {
        id: 3,
        amount: 1200,
        bank: "Caixa",
        date: "05/12/2024",
        status: "processing",
      },
    ],
  };