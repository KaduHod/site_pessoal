
import { Progress } from '@/components/ui/progress';

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
  { name: "DigitalOcean/GCP/Cloudflare", level: 70 },
  { name: "Linux/Nginx", level: 75 },
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
  { name: "Cloudflare", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" }
];

const Skills = () => {
  return (
    <section id="habilidades" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Minhas Habilidades</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600">
            Tecnologias e ferramentas com as quais trabalho diariamente.
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
