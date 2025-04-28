import { Progress } from '@/components/ui/progress';

const capabilities = [
  "Desenvolvimento fullstack de app com Golang, PHP, NodeJS, HTMX, ReactJS",
  "Deploy de aplicações utilizando Ubuntu Server",
  "Configuração de servidores para os app com Nginx",
  "Testes automatizados com PHP Unit, default lib NodeJS e default lib Golang",
  "Automatização de deploy com CI/CD no GitHub Actions",
  "Implementação de medidas de segurança em servidores: configuração de Firewall, Fail2ban para proteção contra ataques brute force",
  "Hardening de segurança SSH com criação de usuários com permissões restritas e configurações avançadas",
  "Gerenciamento de infraestrutura compartilhada para múltiplos desenvolvedores e aplicações",
  "Emissão e renovação de certificados SSL com Certbot para diversas aplicações",
  "Configuração avançada de serviços DNS com Cloudflare e gerenciamento de domínios",
  "Integrações com sistemas corporativos: Salesforce, TOTVS, Tasy, RD Station e outros",
  "Desenvolvimento de sistemas de grande escala com mais de 250 mil usuários"
];

const skills = [
  { name: "PHP/Laravel", level: 95 },
  { name: "Node.js", level: 90 },
  { name: "TypeScript", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Golang", level: 70 },
  { name: "NestJS", level: 85 },
  { name: "ReactJS", level: 75 },
  { name: "Vue.js", level: 80 },
  { name: "AngularJS", level: 70 },
  { name: "MySQL", level: 85 },
  { name: "PostgreSQL", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "Redis", level: 75 },
  { name: "Docker", level: 70 },
  { name: "AWS (Lambda e outros)", level: 80 },
  { name: "Git/GitHub", level: 90 },
  { name: "DigitalOcean/GCP/Cloudflare", level: 80 },
  { name: "Linux/Nginx", level: 75 },
  { name: "Segurança de Servidores", level: 80 },
  { name: "DNS/Cloudflare", level: 85 },
  { name: "SSL/Certbot", level: 90 },
  { name: "Integrações API", level: 85 },
  { name: "Sistemas Educacionais", level: 85 },
];

const techIcons = [
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/laravel.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
  { name: "Cloudflare", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" },
  { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];

const professionalExperiences = [
  {
    title: "Sistema EAD de Grande Escala",
    description: "Contribuí no desenvolvimento de uma plataforma de educação a distância que atende mais de 250 mil usuários, trabalhando com escalabilidade, performance e experiência do usuário."
  },
  {
    title: "Integração com Sistemas Corporativos",
    description: "Implementei integrações complexas com diversos sistemas de terceiros como Salesforce, TOTVS, Tasy e RD Station, utilizando APIs e protocolos de comunicação específicos."
  },
  {
    title: "Solução para o Mercado Imobiliário",
    description: "Realizei manutenção e aprimoramento de um produto especializado para análise de imóveis, otimizando o fluxo de trabalho de corretores imobiliários."
  }
];

const Skills = () => {
  return (
    <section id="habilidades" className="py-10 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Minhas Habilidades</h2>
        </div>
      <div className="container mx-auto px-4">
        {/* Experiência Profissional */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Experiência Profissional Relevante</h3>
          <div className="space-y-6">
            {professionalExperiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
                <h4 className="font-bold text-lg text-slate-800 mb-2">{exp.title}</h4>
                <p className="text-slate-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Capacidades técnicas */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Capacidades Técnicas</h3>
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <ul className="space-y-3">
              {capabilities.map((capability, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <span className="ml-3 text-slate-700">{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Iniciativa Empreendedora */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Iniciativa Empreendedora</h3>
          <div className="bg-blue-50 rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
            <p className="text-slate-700 mb-4">
              Coordeno uma parceria com outros desenvolvedores para hospedagem compartilhada de aplicações web,
              fornecendo infraestrutura, suporte técnico e configuração de certificados SSL.
              Esta iniciativa visa testar diversos produtos web para identificar oportunidades de mercado,
              com planos futuros de monetização através de serviços de publicidade.
            </p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-slate-600">
            Tecnologias e ferramentas com as quais trabalho.
          </p>
        </div>
        <div className="grid w-full grid-cols-3 sm:grid-cols-4 gap-6">
          {techIcons.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-12 h-12 mb-2"
              />
              <span className="text-sm text-slate-600">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
