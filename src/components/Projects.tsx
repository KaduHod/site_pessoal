
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import cv from "../../static/img/cv.jpeg"
import edf from "../../static/img/EDF-TOOLS.jpeg"
import financas from "../../static/img/financas.jpeg"
import sync from "../../static/img/go_video_sync.jpeg"
import gym from "../../static/img/gym_express.jpeg"
import gymapi from "../../static/img/gymapi.png"
const projects = [
  {
    "name": "Musculo Eskeletal Api",
    "readMe": "# Video Sync\n\nEste aplicativo permite que os usuários criem salas virtuais onde até duas pessoas podem compartilhar e assistir vídeos do YouTube de forma sincronizada. O app inclui recursos como controle de reprodução sincronizada (play, pause, avançar), troca de vídeo, um chat integrado e notificações em tempo real usando Server-Sent Events (SSE).\n\n## Funcionalidades\n\n- **Salas Virtuais**: Crie salas para até dois usuários.\n- **Reprodução Sincronizada de Vídeos**: Assista vídeos do YouTube em sincronia com controles compartilhados (play, pause, avançar).\n- **Troca de Vídeo**: Altere o vídeo que está sendo assistido em tempo real.\n- **Chat Integrado**: Comunique-se com o outro usuário na sala por meio de um chat embutido.\n- **Notificações em Tempo Real**: Receba notificações instantâneas usando Server-Sent Events (SSE).\n\n## Como Funciona\n\n1. **Criar uma Sala**: Um usuário pode criar uma nova sala fornecendo um nome e uma senha.\n2. **Entrar em uma Sala**: Outro usuário pode entrar na sala usando o nome da sala e a senha.\n3. **Reprodução Sincronizada de Vídeos**: Ambos os usuários podem assistir ao mesmo vídeo do YouTube com controles sincronizados.\n4. **Chat**: Use o chat integrado para se comunicar com o outro usuário na sala.\n5. **Notificações**: Notificações em tempo real mantêm os usuários informados sobre as atividades na sala.\n\n## Como Usar\n\n1. **Criar uma Sala**: Navegue até a página principal e crie uma nova sala inserindo um nome e uma senha.\n2. **Entrar em uma Sala**: Compartilhe o link da sala com outro usuário, que pode entrar fornecendo o nome da sala e a senha.\n3. **Assistir Vídeos**: Quando ambos os usuários estiverem na sala, eles podem começar a assistir vídeos juntos com controles sincronizados.\n4. **Chat**: Use o recurso de chat para se comunicar com o outro usuário na sala.\n\n## Requisitos\n\n- Linguagem de programação Go\n- Dependências listadas no arquivo `go.mod`\n\n## Instalação\n\n1. Clone o repositório.\n2. Instale as dependências usando `go mod tidy`.\n3. Execute o aplicativo com `go run main.go`.\n\n## Contribuição\n\nContribuições são bem-vindas! Abra uma issue ou envie um pull request para melhorias ou correções de bugs.\n\n## Licença\n\nEste projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.\n",
    "desc": "A Musculo Eskeletal API oferece acesso a informações estruturadas sobre o sistema musculoesquelético humano.",
    "link": "https://gymapi.kadu.tec.br/",
    "image": gymapi,
    "langs": [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    ]
  },
  {
    "name": "Finanças",
    "readMe": "# Simulador de Investimento JC\n\nEste projeto é uma aplicação web que simula investimentos financeiros com base em uma taxa de juros. A taxa padrão utilizada é a Selic, atualizada automaticamente via API do Banco Central.\n\n## Como Usar\n\n1. **Acesse a aplicação**: Abra o simulador no seu navegador.\n2. **Preencha os campos**:\n   - **Dinheiro em caixa hoje**: Insira o valor inicial que você possui para investir.\n   - **Valor Aporte Mensal**: Insira o valor que você pretende aportar mensalmente.\n   - **Valor Taxa Anual**: A taxa de juros anual. Por padrão, a taxa Selic é utilizada, mas você pode alterá-la manualmente.\n   - **Data do resgate**: Selecione o período de tempo para o resgate do investimento (6 meses, 1 ano, 5 anos, 10 anos, 20 anos).\n\n3. **Simule**: Clique no botão \"Simular\" para ver os resultados.\n\n## Parâmetros do Simulador\n\n- **Dinheiro em caixa hoje**: Valor inicial do investimento.\n- **Valor Aporte Mensal**: Valor que será investido mensalmente.\n- **Valor Taxa Anual**: Taxa de juros anual. A taxa Selic é usada por padrão.\n- **Data do resgate**: Período de tempo para o resgate do investimento.\n\n## Resultados\n\nApós a simulação, você verá os seguintes resultados:\n\n- **Rentabilidade**: Valor total do rendimento do investimento.\n- **Investido**: Valor total investido ao longo do período.\n- **Valor inicial**: Valor inicial do investimento.\n- **Aumento de Caixa**: Porcentagem de aumento do valor inicial.\n- **Juros Rendido**: Valor total dos juros rendidos.\n- **Valor final**: Valor total acumulado ao final do período.\n\n## Visualização Adicional\n\n### Tabela de Rendimentos\nA aplicação disponibiliza uma tabela detalhada que mostra o rendimento do investimento ao longo do tempo. A tabela inclui:\n\n- **Mês**: O mês e ano correspondente ao rendimento.\n- **Aporte**: O valor aportado no mês.\n- **Juros**: O valor dos juros rendidos no mês.\n- **Valor Acumulado**: O valor total acumulado até o final do mês.\n\n### Gráfico de Rentabilidade\nAlém da tabela, você pode visualizar a rentabilidade do investimento em um gráfico interativo. O gráfico mostra a evolução do valor acumulado ao longo do tempo, permitindo uma análise visual do desempenho do investimento.\n\n## Contato\n\nPara dúvidas ou sugestões, entre em contato:\n\n- [GitHub](https://github.com/KaduHod)\n- [LinkedIn](https://www.linkedin.com/in/carlosjrribas98/)\n- [Email](mailto:carlosjr.ribas@gmail.com)\n",
    "image": financas,
    "desc": "Simula a evolução de investimentos ao longo do tempo com base em aportes e taxa de juros. Exibe resultados detalhados em tabelas e gráficos interativos.\n",
    "link": "https://fin.kadu.tec.br/",
    "langs": [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
    ]
  },
  {
    "name": "Watch youtube together",
    "readMe": "# Video Sync\n\nEste aplicativo permite que os usuários criem salas virtuais onde até duas pessoas podem compartilhar e assistir vídeos do YouTube de forma sincronizada. O app inclui recursos como controle de reprodução sincronizada (play, pause, avançar), troca de vídeo, um chat integrado e notificações em tempo real usando Server-Sent Events (SSE).\n\n## Funcionalidades\n\n- **Salas Virtuais**: Crie salas para até dois usuários.\n- **Reprodução Sincronizada de Vídeos**: Assista vídeos do YouTube em sincronia com controles compartilhados (play, pause, avançar).\n- **Troca de Vídeo**: Altere o vídeo que está sendo assistido em tempo real.\n- **Chat Integrado**: Comunique-se com o outro usuário na sala por meio de um chat embutido.\n- **Notificações em Tempo Real**: Receba notificações instantâneas usando Server-Sent Events (SSE).\n\n## Como Funciona\n\n1. **Criar uma Sala**: Um usuário pode criar uma nova sala fornecendo um nome e uma senha.\n2. **Entrar em uma Sala**: Outro usuário pode entrar na sala usando o nome da sala e a senha.\n3. **Reprodução Sincronizada de Vídeos**: Ambos os usuários podem assistir ao mesmo vídeo do YouTube com controles sincronizados.\n4. **Chat**: Use o chat integrado para se comunicar com o outro usuário na sala.\n5. **Notificações**: Notificações em tempo real mantêm os usuários informados sobre as atividades na sala.\n\n## Como Usar\n\n1. **Criar uma Sala**: Navegue até a página principal e crie uma nova sala inserindo um nome e uma senha.\n2. **Entrar em uma Sala**: Compartilhe o link da sala com outro usuário, que pode entrar fornecendo o nome da sala e a senha.\n3. **Assistir Vídeos**: Quando ambos os usuários estiverem na sala, eles podem começar a assistir vídeos juntos com controles sincronizados.\n4. **Chat**: Use o recurso de chat para se comunicar com o outro usuário na sala.\n\n## Requisitos\n\n- Linguagem de programação Go\n- Dependências listadas no arquivo `go.mod`\n\n## Instalação\n\n1. Clone o repositório.\n2. Instale as dependências usando `go mod tidy`.\n3. Execute o aplicativo com `go run main.go`.\n\n## Contribuição\n\nContribuições são bem-vindas! Abra uma issue ou envie um pull request para melhorias ou correções de bugs.\n\n## Licença\n\nEste projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.\n",
    "desc": "Aplicativo para assistir vídeos do YouTube de forma sincronizada em salas virtuais para dois usuários. Inclui chat integrado, notificações e controles compartilhados.\n",
    "link": "https://sync.kadu.tec.br/",
    "image": sync,
    "langs": [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    ]
  },
  {
    "name": "EDF-TOOLS",
    "readMe": "# EDF TOOLS\n\nEste projeto é uma ferramenta web para cálculo de densidade corporal e porcentagem de gordura, utilizando diferentes métodos antropométricos. A aplicação foi desenvolvida com HTML, CSS (utilizando Tailwind CSS) e JavaScript.\n\n## Funcionalidades\n\n- **Cálculo de Densidade Corporal e Gordura**: Utiliza métodos como Jackson e Pollock (1978), Sloan (masculino), Sloan, Burt & Blyth (feminino) e Guedes (1985).\n- **Interface Responsiva**: Design adaptável para diferentes tamanhos de tela.\n- **Animações**: Transições suaves e animações para melhorar a experiência do usuário.\n\n## Como Usar\n\n1. **Preencha os Dados Antropométricos**:\n   - Sexo\n   - Idade\n   - Medidas de dobras cutâneas (Peitoral, Abdômen, Coxa, Sub-escapular, Suprailíaca, Triciptal)\n\n2. **Selecione o Método de Cálculo**:\n   - Escolha entre os métodos disponíveis na interface.\n\n3. **Clique em \"Calcular % de gordura e densidade corporal\"**:\n   - O resultado será exibido na seção de resultados.\n\n## Tecnologias Utilizadas\n\n- **HTML**: Estrutura da página.\n- **Tailwind CSS**: Estilização e design responsivo.\n- **JavaScript**: Lógica de cálculo e interatividade.\n\n\n",
    "desc": "Ferramenta web para calcular a densidade corporal e a porcentagem de gordura com base em medidas antropométricas. O usuário insere os dados e recebe os resultados instantaneamente.\n",
    "link": "https://edf-tools.kadu.tec.br",
    "image": edf,
    "langs": [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
    ]
  },
  {
    "name": "Consulta sistema musculo-esquelético",
    "image": gym,
    "readMe": "# Gym\n\n## Descrição\n\nO **Gym Express** é uma ferramenta interativa que permite visualizar e explorar as relações entre grupos musculares, porções musculares, articulações e movimentos articulares. Com uma interface intuitiva, você pode aplicar filtros para selecionar uma ou mais estruturas e ver como elas se relacionam entre si.\n\n## Funcionalidades\n\n- **Filtros Dinâmicos**: Permite filtrar informações por grupo muscular, porção muscular, articulação ou movimento articular.\n- **Visualização Clara**: Exibe as relações de forma organizada, facilitando a compreensão das conexões entre diferentes estruturas.\n- **Interface Responsiva**: Projetada para funcionar em dispositivos de diferentes tamanhos, desde desktops até dispositivos móveis.\n\n## Como Usar\n\n1. **Aplicar Filtros**: Utilize os campos de busca para selecionar um grupo muscular, porção muscular, articulação ou movimento articular.\n2. **Explorar Relações**: As informações filtradas serão exibidas em cards, mostrando as conexões entre as estruturas selecionadas.\n3. **Interagir**: Passe o mouse sobre os cards para destacar as informações e obter uma visão mais detalhada.\n\n## Objetivo\n\nO objetivo do **Gym Express** é fornecer uma ferramenta prática para profissionais e entusiastas da área de fitness e saúde, ajudando a entender melhor a biomecânica e as interações entre diferentes partes do corpo durante os exercícios.\n\n## Contribuição\n\nContribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorar o projeto.\n",
    "desc": "Aplicação interativa para explorar relações entre grupos musculares, articulações e movimentos. Permite filtros e exibe conexões de forma clara e intuitiva.\n",
    "link": "https://gym.kadu.tec.br/",
    "langs": [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    ]
  },
  {
    name: "CV.Kadu",
    desc: "Visualize meu currículo online e baixe uma versão em PDF para referência",
    link: "https://cv.kadu.tec.br",
    image: cv,
    langs: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    ],
  },
]

const Projects = () => {
  const [filter, setFilter] = useState('all');

  //const filteredProjects = filter === 'all'
    //? projects
    //: projects.filter(project => project.category === filter);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{project.name}</h3>
                <p className="text-slate-600 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.langs.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                    >

                        <img key={index} src={tech} className="w-5 h-5" alt="Linguagem" />
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>

                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
