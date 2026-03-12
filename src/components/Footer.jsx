export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Reduzi mt-20 para mt-2 (quase colado na grid) e pt-12 para pt-4
    <footer className="mt-auto border-t border-gray-800/50 pt-2 pb-2 px-6">
      
      {/* Diminuí mb-12 para mb-4 e o gap para 2 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-4 text-[10px]">
        <div className="space-y-1">
          <h4 className="text-white font-bold text-[11px] uppercase tracking-wider">InvestPro</h4>
          <p className="text-gray-500 text-[10px] leading-tight">
            Plataforma inteligente.
          </p>
          <p className="text-gray-600 text-[9px]">
            © {currentYear}
          </p>
        </div>

        <div className="space-y-1">
          <h4 className="text-white font-bold text-[11px] uppercase tracking-wider">Empresa</h4>
          <nav className="flex flex-col text-[10px]">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Sobre Nós</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Investidores</a>
          </nav>
        </div>

        <div className="space-y-1">
          <h4 className="text-white font-bold text-[11px] uppercase tracking-wider">Políticas</h4>
          <nav className="flex flex-col text-[10px]">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Compliance</a>
          </nav>
        </div>

        <div className="space-y-1">
          <h4 className="text-white font-bold text-[11px] uppercase tracking-wider">Contato</h4>
          <div className="flex flex-col text-[10px] text-gray-500 leading-tight">
            <p>Maceió, AL</p>
            <p>contato@investpro.com.br</p>
          </div>
        </div>
      </div>      
    </footer>
  );
}