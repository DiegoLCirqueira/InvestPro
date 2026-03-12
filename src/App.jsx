import { useState } from "react";
import { Sidebar } from "./components/Sidebar.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";

// Importando as páginas
import { Dashboard } from "./pages/Dashboard.jsx";
import { MarketAnalysis } from "./pages/MarketAnalysis.jsx";
import { News } from "./pages/News.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  // Função para renderizar a página correta
  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "market":
        return <MarketAnalysis />;
      case "news":
        return <News />;
      // As próximas abas entrarão aqui
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="h-screen bg-brand-bg flex text-white font-sans overflow-hidden">
      <Sidebar onNavigate={setCurrentPage} activePage={currentPage} />
      
      <main className="ml-64 flex-1 flex justify-center">
        {/* Note o max-w-[1400px] - verifique se o seu 400 não era um erro de digitação para 1400 */}
        <div className="w-full max-w-350 p-10 flex flex-col h-full justify-between">
          <Header />
          
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