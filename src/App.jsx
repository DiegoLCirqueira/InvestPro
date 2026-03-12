import { useState } from "react";
import { Sidebar } from "./components/Sidebar.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";

// Importando as páginas da nova pasta
import { Dashboard } from "./pages/Dashboard.jsx";
import { MarketAnalysis } from "./pages/MarketAnalysis.jsx";

function App() {
  // Estado para controlar qual tela mostrar
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <div className="h-screen bg-brand-bg flex text-white font-sans overflow-hidden">
      {/* Passe o estado para a Sidebar conseguir trocar as páginas */}
      <Sidebar onNavigate={setCurrentPage} activePage={currentPage} />
      
      <main className="ml-64 flex-1 flex justify-center">
        
        <div className="w-full max-w-400 p-10 flex flex-col h-full justify-between">
          <Header />
          
          {/* Área de Conteúdo Dinâmico */}
          <div className="flex-1 min-h-0 mb-8 flex flex-col">
            {currentPage === "dashboard" ? (
              <Dashboard />
            ) : (
              <MarketAnalysis />
            )}
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;