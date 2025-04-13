
import { ArrowDownCircle } from 'lucide-react';
import profileImage from "../../static/img/eu.jpeg"
const Hero = () => {
  return (
    <section id="início" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white"></div>
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4">
              Olá, eu sou<br/>
              <span className="text-blue-500">Carlos Ribas</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8">
              Desenvolvedor full-stack apaixonado por criar soluções inovadoras e funcionais.
              Especializado em Php, Node.js, Golang e um pouco de front end com React.js.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src={profileImage}
                alt="Carlos Alberto"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#sobre" className="text-blue-500 hover:text-blue-600">
            <ArrowDownCircle size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
