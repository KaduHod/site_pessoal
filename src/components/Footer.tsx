
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-800 text-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="#" className="text-2xl font-bold text-white mb-4 inline-block">
              Kadu<span className="text-blue-400">.tec</span>
            </a>
            <p className="text-slate-300 mb-6">
              Desenvolvedor full-stack especializado em criar soluções digitais modernas e eficientes.
            </p>
            <button 
              onClick={scrollToTop}
              className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={20} />
            </button>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {['Início', 'Sobre', 'Projetos', 'Habilidades', 'Contato'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Serviços</h3>
            <ul className="space-y-2">
              {[
                'Desenvolvimento Web', 
                'Aplicativos Mobile', 
                'UI/UX Design', 
                'Consultoria', 
                'E-commerce'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-slate-300 mb-4">
              Inscreva-se para receber atualizações sobre tecnologia e novos projetos.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Seu email" 
                className="px-4 py-2 rounded-l-md focus:outline-none text-slate-800 w-full"
              />
              <button 
                type="submit" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} kadu.tec.br - Todos os direitos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Termos</a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Privacidade</a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
