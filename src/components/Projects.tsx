
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: "Sistema de Gestão ERP",
    description: "Sistema completo para gestão empresarial com módulos de estoque, financeiro, vendas e RH.",
    image: "https://kadu.tec.br/static/img/erp.jpg",
    category: "web",
    technologies: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Aplicativo de Delivery",
    description: "Aplicativo mobile para entrega de produtos com rastreamento em tempo real.",
    image: "https://kadu.tec.br/static/img/delivery.jpg",
    category: "mobile",
    technologies: ["React Native", "Firebase", "Google Maps API"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "E-commerce de Moda",
    description: "Plataforma de comércio eletrônico com sistema de pagamento integrado e gestão de estoque.",
    image: "https://kadu.tec.br/static/img/ecommerce.jpg",
    category: "web",
    technologies: ["Vue.js", "Laravel", "MySQL"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Dashboard Analytics",
    description: "Painel de controle para visualização de dados com gráficos interativos e relatórios personalizados.",
    image: "https://kadu.tec.br/static/img/analytics.jpg",
    category: "web",
    technologies: ["React", "D3.js", "Express"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "API de Pagamentos",
    description: "Serviço de backend para processamento de pagamentos com integração a múltiplas gateways.",
    image: "https://kadu.tec.br/static/img/api.jpg",
    category: "backend",
    technologies: ["Node.js", "MongoDB", "Docker"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "App de Finanças Pessoais",
    description: "Aplicativo para controle financeiro pessoal com categorização automática e relatórios.",
    image: "https://kadu.tec.br/static/img/finance.jpg",
    category: "mobile",
    technologies: ["Flutter", "Firebase", "ML Kit"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projetos" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Meus Projetos</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600">
            Conheça alguns dos projetos que desenvolvi utilizando diversas tecnologias.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {['all', 'web', 'mobile', 'backend'].map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              className={filter === category ? "bg-blue-500 hover:bg-blue-600" : "text-slate-700"}
              onClick={() => setFilter(category)}
            >
              {category === 'all' ? 'Todos' : category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1 text-sm text-slate-700 hover:text-slate-900"
                  >
                    <Github size={16} /> Código
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
            Ver mais projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
