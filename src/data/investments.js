// src/data/investments.js
export const MOCK_DATA = {
  user: {
    name: "Diego",
    balance: 175450.32,
    change: 15.28
  },
  assets: [ /* seus assets aqui */ ],
  history: [
    // COMEÇO: Lá embaixo (O "Vindo de baixo")
    { date: '11/02', value: 20000 }, { date: '12/02', value: 25000 },
    { date: '13/02', value: 45000 }, { date: '14/02', value: 70000 },
    { date: '15/02', value: 95000 }, { date: '16/02', value: 120000 },
    { date: '17/02', value: 145000 }, { date: '18/02', value: 160000 },
    
    // PICO 1: Subiu muito rápido
    { date: '19/02', value: 155000 }, { date: '20/02', value: 158000 },
    
    // QUEDA BRUTAL: "Caindo um pouco" (aqui vai cair muito para dar efeito)
    { date: '21/02', value: 110000 }, { date: '22/02', value: 85000 },
    { date: '23/02', value: 50000 }, { date: '24/02', value: 42000 },
    { date: '25/02', value: 38000 }, { date: '26/02', value: 45000 },
    { date: '27/02', value: 60000 }, { date: '28/02', value: 55000 },
    
    // ARRANCADA FINAL: Subindo novamente para o topo
    { date: '01/03', value: 80000 }, { date: '02/03', value: 110000 },
    { date: '03/03', value: 135000 }, { date: '04/03', value: 150000 },
    { date: '05/03', value: 165000 }, { date: '06/03', value: 172000 },
    { date: '07/03', value: 180000 }, { date: '08/03', value: 185000 },
    { date: '09/03', value: 178000 }, { date: '10/03', value: 182000 },
    { date: '11/03', value: 179000 }, { date: '12/03', value: 175450 },
  ]
};