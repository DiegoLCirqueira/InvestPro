import { useState } from "react";
import { Sidebar } from "./components/Sidebar.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Exchange } from "./pages/Exchange.jsx";

import { Dashboard } from "./pages/Dashboard.jsx";
import { MarketAnalysis } from "./pages/MarketAnalysis.jsx";
import { News } from "./pages/News.jsx";
import { Recommendations } from "./pages/Recommendations.jsx";
import { Diversification } from "./pages/Diversification.jsx";
import { Transfers } from "./pages/Transfers.jsx";
import { UserProfile } from "./pages/UserProfile.jsx";
/**
 * Componente raiz da aplicação InvestPro.
 * Gerencia o estado da aba ativa e renderiza o layout principal.
 * Para adicionar nova página: inclua no switch de renderPage e no menu do Sidebar.
 */
function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  /** Mapeia o ID da aba (vindo da Sidebar) para o componente da página correspondente */
  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "market":
        return <MarketAnalysis />;
      case "news":
        return <News />;
      case "recommendations":
        return <Recommendations />;
      case "diversification":
        return <Diversification />;
      case "exchange":
        return <Exchange />;
      case "transfers":
        return <Transfers />;
      case "profile":
        return <UserProfile onClose={() => setCurrentPage("dashboard")} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="h-screen bg-brand-bg flex text-white font-sans overflow-hidden">
      <Sidebar onNavigate={setCurrentPage} activePage={currentPage} />
      
      <main className="ml-64 flex-1 flex justify-center px-4 md:px-6 lg:px-8">
        <div className="w-full max-w-5xl lg:max-w-6xl py-6 md:py-8 lg:py-10 flex flex-col h-full justify-between">
          <Header currentPage={currentPage} onNavigate={setCurrentPage} />
          
          {/* Área de conteúdo com scroll; min-h-0 evita overflow em layouts flex */}
          <div className="flex-1 min-h-0 mb-8 flex flex-col overflow-y-auto custom-scrollbar">
            {renderPage()}
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;