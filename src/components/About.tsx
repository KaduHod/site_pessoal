
import { ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-700">
              Olá! Sou Carlos Ribas, um desenvolvedor full-stack com mais de 5 anos de experiência
              no desenvolvimento de aplicações web e 4 anos no mercado de trabalho.
            </p>
            <p className="text-lg text-slate-700">
              Minha jornada começou em 2020/2021, quando iniciei meu curso de Análise e Desenvolvimento de Sistemas desde então
              venho trabalhando com diversas tecnologias e frameworks modernos.
            </p>
            <p className="text-lg text-slate-700">
              Atualmente atuo como desenvolvedor backend, ajudando empresas a transformar ideias em
              soluções digitais eficientes e escaláveis.
            </p>
            <div className="pt-4">
              <a
                href="https://cv.kadu.tec.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600"
              >
                <ExternalLink size={16} /> Acessar o meu currículo
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h3 className="text-4xl font-bold text-blue-500 mb-2">5</h3>
              <p className="text-slate-700">Anos de Experiência</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h3 className="text-4xl font-bold text-blue-500 mb-2">3</h3>
              <p className="text-slate-700">Experiência no setor imobiliário, educacional e omnichannel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

