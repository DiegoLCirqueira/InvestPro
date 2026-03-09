// src/data/investments.js
export const MOCK_DATA = {
  user: {
    name: "Diego",
    balance: 127450.32,
    change: 2.28
  },
  assets: [
    { id: 1, ticker: "PETR4", name: "Petrobras", value: 18750.00, change: 1.55, type: "PE" },
    { id: 2, ticker: "VALE3", name: "Vale", value: 15600.00, change: -0.79, type: "VA" },
    { id: 3, ticker: "ITUB4", name: "Itaú Unibanco", value: 12900.00, change: 0.52, type: "IT" },
    { id: 4, ticker: "BBAS3", name: "Banco do Brasil", value: 11340.00, change: -0.78, type: "BB" },
    { id: 5, ticker: "WEGE3", name: "Weg", value: 9840.00, change: 1.62, type: "WE" },
  ],
  history: [
    { date: 'Jan 2023', value: 25000 },
    { date: 'Jun 2023', value: 45000 },
    { date: 'Jan 2024', value: 85000 },
    { date: 'Jun 2024', value: 105000 },
    { date: 'Atual', value: 127450 },
  ]
};