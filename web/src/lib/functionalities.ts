export type Functionality = {
  slug: string;
  category: "Cultura e engajamento" | "Desenvolvimento e IA" | "Operacao de RH";
  title: string;
  shortTitle: string;
  summary: string;
  objective: string;
  seoKeywords?: string[];
  seoAngles?: string[];
  painPoints?: string[];
  comparison?: {
    manual: string[];
    platform: string[];
  };
  contextualCta?: {
    title: string;
    text: string;
  };
  audiences?: Array<{
    title: string;
    text: string;
  }>;
  expectedResults?: string[];
  objections?: Array<{
    title: string;
    text: string;
  }>;
  gains: string[];
  howItWorks: Array<{
    title: string;
    text: string;
  }>;
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  idealFor: string[];
  relatedModules: string[];
  deepDiveHref?: string;
  deepDiveLabel?: string;
};

export const functionalities: Functionality[] = [
  {
    slug: "comunicacao-interna",
    category: "Cultura e engajamento",
    title: "Comunicacao interna e orientacoes corporativas",
    shortTitle: "Comunicacao interna",
    summary:
      "Centralize campanhas, recados, politicas, links e orientacoes em um ambiente unico para reduzir ruido e dar mais clareza ao colaborador.",
    objective:
      "Dar a empresa um canal central de comunicacao e referencia operacional, evitando dispersao de mensagens entre e-mail, chat, intranet paralela e arquivos soltos.",
    seoKeywords: [
      "comunicacao interna para empresas",
      "plataforma de comunicacao interna",
      "mural corporativo digital",
      "canal oficial de comunicacao para RH",
    ],
    seoAngles: [
      "como organizar comunicacao interna da empresa",
      "software para recados e politicas corporativas",
      "plataforma de mural corporativo para RH",
    ],
    gains: [
      "Mais clareza sobre o que precisa ser lido e acompanhado.",
      "Menos dependencia de canais espalhados para avisos importantes.",
      "Melhor experiencia para colaborador no acesso a politicas e orientacoes.",
    ],
    howItWorks: [
      {
        title: "Publicacao centralizada",
        text: "O RH ou a lideranca publica comunicados, campanhas e orientacoes em um mural oficial ligado a rotina da plataforma.",
      },
      {
        title: "Acesso por contexto",
        text: "O colaborador encontra os avisos no proprio ambiente de trabalho, sem depender de lembrar onde cada informacao foi publicada.",
      },
      {
        title: "Consulta continua",
        text: "Links, documentos e politicas ficam disponiveis para consulta posterior, reduzindo repeticao de demandas e retrabalho no suporte interno.",
      },
    ],
    idealFor: [
      "Empresas com comunicacao fragmentada entre varios canais.",
      "Operacoes que precisam reforcar campanhas, politicas e orientacoes recorrentes.",
      "Times distribuidos que dependem de um canal oficial e acessivel.",
    ],
    relatedModules: ["Radar Inteligente", "Controle do Time", "Repositrio de Documentos"],
  },
  {
    slug: "reconhecimento-e-recompensas",
    category: "Cultura e engajamento",
    title: "Reconhecimento com pontos, cotas e recompensas",
    shortTitle: "Reconhecimento e recompensas",
    summary:
      "Estruture rituais de reconhecimento com distribuicao de pontos, cotas por perfil, carteira do colaborador e loja de recompensas com governanca.",
    objective:
      "Transformar reconhecimento em um processo recorrente, mensuravel e controlado, em vez de depender de iniciativas informais e pouco consistentes.",
    seoKeywords: [
      "plataforma de reconhecimento corporativo",
      "programa de reconhecimento com pontos",
      "software de recompensas para colaboradores",
      "reconhecimento com cotas e carteira",
    ],
    seoAngles: [
      "como estruturar um programa de reconhecimento",
      "software de pontos e recompensas para colaboradores",
      "plataforma para reconhecimento corporativo com governanca",
    ],
    painPoints: [
      "O reconhecimento ainda depende de iniciativas informais e pouco frequentes.",
      "A empresa nao consegue medir adocao, saldo e uso das recompensas.",
      "Cultura e reconhecimento nao estao conectados a um fluxo recorrente.",
    ],
    comparison: {
      manual: [
        "Reconhecimento acontece por iniciativa isolada de algumas liderancas.",
        "Nao ha controle claro de cotas, saldos e frequencia de uso.",
        "RH perde visibilidade sobre impacto e adocao do programa.",
      ],
      platform: [
        "A empresa define cotas, regras e acompanhamento em um fluxo unico.",
        "Colaboradores reconhecem pares com registro e historico estruturado.",
        "RH e lideranca acompanham carteira, uso e engajamento com mais clareza.",
      ],
    },
    contextualCta: {
      title: "Quer estruturar reconhecimento com mais governanca?",
      text: "Agende uma demonstracao para ver como pontos, cotas e recompensas podem sair do informal e virar um programa recorrente.",
    },
    audiences: [
      {
        title: "RH e cultura",
        text: "Para estruturar um ritual recorrente de reconhecimento sem depender de campanhas isoladas.",
      },
      {
        title: "Liderancas",
        text: "Para dar mais frequencia e visibilidade ao reconhecimento do time sem perder controle de cotas.",
      },
      {
        title: "Empresas em crescimento",
        text: "Para fortalecer cultura e pertencimento quando a equipe deixa de ser pequena demais para operar no improviso.",
      },
    ],
    expectedResults: [
      "Mais frequencia de reconhecimento entre pares e liderancas.",
      "Melhor leitura de adocao do programa ao longo do tempo.",
      "Mais conexao entre cultura, engajamento e experiencia do colaborador.",
    ],
    objections: [
      {
        title: "Ja fazemos isso por fora",
        text: "A plataforma entra quando a empresa precisa de recorrencia, historico, carteira e governanca para nao depender so de boa vontade e memoria.",
      },
      {
        title: "Pode virar custo sem controle",
        text: "A logica de cotas e historico existe justamente para dar visibilidade sobre distribuicao, uso e orcamento do programa.",
      },
    ],
    gains: [
      "Cultura de reconhecimento mais frequente e visivel.",
      "Controle de cotas, carteira e historico para a empresa.",
      "Experiencia motivadora para colaborador sem perder governanca.",
    ],
    howItWorks: [
      {
        title: "Definicao de cotas",
        text: "A empresa define quem pode reconhecer, com que volume e em qual logica de distribuicao de budget ou pontos.",
      },
      {
        title: "Distribuicao pelos colaboradores",
        text: "Os elogios e pontos circulam dentro da plataforma com registro de autoria, data e justificativa associada ao ritual de reconhecimento.",
      },
      {
        title: "Resgate e acompanhamento",
        text: "A carteira individual se conecta a recompensas e historico, enquanto RH e lideranca acompanham adocao, saldo e uso do programa.",
      },
    ],
    idealFor: [
      "Empresas que querem fortalecer cultura sem perder controle de orcamento.",
      "Programas de reconhecimento que hoje acontecem de forma informal.",
      "Operacoes que querem ligar reconhecimento a experiencia e engajamento.",
    ],
    relatedModules: ["Controle do Time", "Insights Automaticos", "Radar Inteligente"],
  },
  {
    slug: "academy-corporativa",
    category: "Desenvolvimento e IA",
    title: "Academy corporativa para trilhas, cursos e certificacoes",
    shortTitle: "Academy corporativa",
    summary:
      "Organize cursos, trilhas, presencas, certificados e acompanhamento de aprendizagem em um unico ambiente para RH, lideranca e colaborador.",
    objective:
      "Concentrar a jornada de aprendizagem da empresa em uma estrutura unica, com visibilidade sobre o que foi publicado, concluido e ainda esta pendente.",
    seoKeywords: [
      "academy corporativa",
      "plataforma de treinamento corporativo",
      "trilhas de aprendizagem para empresas",
      "sistema de cursos internos para RH",
    ],
    seoAngles: [
      "como criar uma academy corporativa",
      "plataforma para onboarding e cursos internos",
      "software de trilhas de treinamento corporativo",
    ],
    painPoints: [
      "Cursos e trilhas ficam espalhados entre varias ferramentas.",
      "RH e lideranca nao conseguem acompanhar conclusao e pendencias com clareza.",
      "Onboarding e treinamentos obrigatorios dependem de controles manuais.",
    ],
    comparison: {
      manual: [
        "Treinamentos vivem em varias ferramentas, planilhas e links dispersos.",
        "A cobranca de conclusao depende de controles manuais.",
        "Onboarding e certificacoes perdem rastreabilidade ao longo do tempo.",
      ],
      platform: [
        "Cursos, trilhas e certificados ficam concentrados em um ambiente unico.",
        "RH e lideranca acompanham progresso, pendencias e adesao com contexto.",
        "Onboarding e aprendizagem passam a fazer parte da rotina da plataforma.",
      ],
    },
    contextualCta: {
      title: "Sua empresa precisa organizar aprendizagem em um so ambiente?",
      text: "Mostramos como a Academy corporativa conecta onboarding, trilhas e acompanhamento continuo sem depender de varias ferramentas.",
    },
    audiences: [
      {
        title: "RH e T&D",
        text: "Para centralizar cursos, trilhas e certificados sem depender de planilhas paralelas.",
      },
      {
        title: "Liderancas",
        text: "Para acompanhar conclusao, pendencias e progresso do time em um fluxo mais claro.",
      },
      {
        title: "Operacoes com onboarding forte",
        text: "Para ligar trilhas iniciais, treinamento obrigatorio e desenvolvimento continuo no mesmo ambiente.",
      },
    ],
    expectedResults: [
      "Mais visibilidade sobre aprendizagem e adesao.",
      "Menos dispersao de conteudo entre varias ferramentas.",
      "Mais consistencia em onboarding e treinamentos obrigatorios.",
    ],
    objections: [
      {
        title: "Ja temos conteudo espalhado em outras plataformas",
        text: "A Academy ganha valor quando concentra o fluxo de distribuicao, acompanhamento e cobranca, mesmo que parte do acervo venha de outras fontes.",
      },
      {
        title: "Treinamento costuma perder tracao depois do lancamento",
        text: "A integracao com a rotina da plataforma ajuda a dar mais visibilidade, cobranca e contexto para o uso continuo das trilhas.",
      },
    ],
    gains: [
      "Mais aderencia a trilhas e treinamentos obrigatorios.",
      "Visibilidade sobre progresso, concluidos e pendencias.",
      "Base mais estruturada para onboarding e desenvolvimento continuo.",
    ],
    howItWorks: [
      {
        title: "Cadastro e curadoria",
        text: "O RH organiza cursos, trilhas, modulos e certificados de acordo com o publico e os objetivos da empresa.",
      },
      {
        title: "Distribuicao por publico",
        text: "Os conteudos podem ser direcionados por area, perfil ou necessidade de desenvolvimento, conectando aprendizagem a rotina real.",
      },
      {
        title: "Acompanhamento continuo",
        text: "Lideranca e RH acompanham progresso, adesao e pendencias, com contexto para cobranca e tomada de decisao.",
      },
    ],
    idealFor: [
      "Empresas com onboarding estruturado e treinamentos recorrentes.",
      "Times que precisam de trilhas obrigatorias ou compliance de aprendizagem.",
      "Operacoes que querem sair de cursos espalhados em varias ferramentas.",
    ],
    relatedModules: ["AI Career Coach", "AI Performance Coach", "Insights Automaticos"],
  },
  {
    slug: "performance-e-feedbacks",
    category: "Desenvolvimento e IA",
    title: "Performance, metas e feedbacks em ciclos acompanhaveis",
    shortTitle: "Performance e feedbacks",
    summary:
      "Acompanhe metas, check-ins, feedbacks, avaliacoes e PDIs com uma visao estruturada para colaborador, lideranca e RH.",
    objective:
      "Dar previsibilidade aos ciclos de performance e reduzir a dependencia de controles paralelos para registrar evolucao, alinhar expectativas e apoiar decisoes.",
    seoKeywords: [
      "gestao de performance para empresas",
      "software de metas e feedbacks",
      "ciclo de avaliacao de desempenho",
      "plataforma de PDI e desempenho",
    ],
    seoAngles: [
      "como organizar avaliacao de desempenho",
      "software para metas e feedbacks corporativos",
      "plataforma de performance e PDI para RH",
    ],
    painPoints: [
      "Metas, feedbacks e avaliacoes ficam desconectados entre si.",
      "Liderancas chegam aos rituais com pouco contexto.",
      "RH perde visibilidade sobre qualidade e andamento dos ciclos.",
    ],
    comparison: {
      manual: [
        "Metas, feedbacks e avaliacoes ficam em planilhas, docs e ferramentas separadas.",
        "O gestor monta contexto manualmente antes de cada ritual.",
        "RH so percebe atrasos e falhas quando o ciclo ja esta comprometido.",
      ],
      platform: [
        "O ciclo fica centralizado com historico, contexto e status em um so fluxo.",
        "Gestores acessam metas, registros e evolucao antes de cada conversa.",
        "RH acompanha andamento, pendencias e consistencia do ciclo com mais clareza.",
      ],
    },
    contextualCta: {
      title: "Quer organizar performance, metas e feedbacks sem improviso?",
      text: "Agende uma demonstracao e veja como a VexiaRH conecta avaliacao, PDI e acompanhamento continuo em um unico ciclo.",
    },
    gains: [
      "Mais consistencia nos rituais de performance.",
      "Melhor leitura da evolucao do colaborador ao longo do tempo.",
      "Base mais forte para feedback, calibracao e desenvolvimento.",
    ],
    howItWorks: [
      {
        title: "Definicao do ciclo",
        text: "A empresa estrutura metas, etapas de avaliacao, periodicidade e regras de participacao conforme sua metodologia.",
      },
      {
        title: "Registro continuo",
        text: "Colaboradores e lideres registram metas, feedbacks e avancos em um fluxo que preserva historico e contexto do ciclo.",
      },
      {
        title: "Consolidacao gerencial",
        text: "RH e lideranca acessam uma leitura mais clara sobre andamento, pendencias e resultados para agir antes do encerramento do ciclo.",
      },
    ],
    idealFor: [
      "Empresas com metas, check-ins ou ciclos formais de avaliacao.",
      "Liderancas que precisam de mais contexto antes de feedbacks e comites.",
      "RHs que buscam reduzir improviso em performance e desenvolvimento.",
    ],
    relatedModules: ["AI Performance Coach", "AI Career Coach", "Insights Automaticos"],
    deepDiveHref: "/ai-performance-coach",
    deepDiveLabel: "Ver pagina de AI Performance Coach",
    audiences: [
      {
        title: "RH",
        text: "Para acompanhar se o ciclo esta acontecendo com qualidade e no ritmo esperado.",
      },
      {
        title: "Gestores",
        text: "Para chegar em 1-on-1s, feedbacks e comites com mais contexto e menos preparacao manual.",
      },
      {
        title: "Empresas com metas formais",
        text: "Para reduzir improviso quando performance ja faz parte da rotina, mas ainda vive em fluxos desconectados.",
      },
    ],
    expectedResults: [
      "Mais consistencia na conducao dos ciclos.",
      "Feedbacks e check-ins com mais base de contexto.",
      "Melhor visibilidade sobre pendencias e qualidade da operacao de performance.",
    ],
    objections: [
      {
        title: "Nossa lideranca nao tem tempo para mais um processo",
        text: "A proposta nao e adicionar burocracia, e sim reduzir tempo de preparo e consolidacao para que os rituais fiquem mais leves e mais uteis.",
      },
      {
        title: "Ja usamos planilhas e documentos internos",
        text: "A plataforma ganha valor ao conectar metas, feedbacks, historico e status em um unico fluxo, algo dificil de sustentar bem fora do sistema.",
      },
    ],
  },
  {
    slug: "carreira-e-pdi",
    category: "Desenvolvimento e IA",
    title: "Carreira, PDI e desenvolvimento orientado",
    shortTitle: "Carreira e PDI",
    summary:
      "Conecte planos de desenvolvimento, progressao de carreira, competencias e proximos passos de cada colaborador em uma jornada mais clara.",
    objective:
      "Transformar conversa de carreira em um processo acompanhado, com menos subjetividade e mais visibilidade sobre gaps, prioridades e proximos movimentos.",
    seoKeywords: [
      "plano de desenvolvimento individual",
      "software de carreira para RH",
      "gestao de carreira corporativa",
      "PDI para empresas",
    ],
    gains: [
      "PDIs mais claros e conectados ao contexto do colaborador.",
      "Mais transparencia sobre evolucao e proximos passos.",
      "Melhor apoio para sucessao e desenvolvimento interno.",
    ],
    howItWorks: [
      {
        title: "Leitura de contexto",
        text: "A empresa organiza competencias, criterios de evolucao e registros do colaborador para dar mais base as conversas de carreira.",
      },
      {
        title: "Planejamento do desenvolvimento",
        text: "Os planos se conectam a objetivos, cursos, ciclos e acompanhamentos, ajudando a transformar ambicao em acoes concretas.",
      },
      {
        title: "Acompanhamento ao longo do tempo",
        text: "RH e lideranca observam a evolucao do colaborador sem depender de documentos isolados e matrizes manuais.",
      },
    ],
    idealFor: [
      "Empresas com programas de desenvolvimento e sucessao.",
      "Liderancas que precisam de base melhor para conversas de carreira.",
      "RHs que querem ligar aprendizado, performance e progressao em um fluxo unico.",
    ],
    relatedModules: ["Academy Corporativa", "AI Career Coach", "Performance e Feedbacks"],
    deepDiveHref: "/ai-career-coach",
    deepDiveLabel: "Ver pagina de AI Career Coach",
  },
  {
    slug: "analise-de-clima",
    category: "Cultura e engajamento",
    title: "Analise de clima, sentimento e temas recorrentes",
    shortTitle: "Analise de clima",
    summary:
      "Use IA para interpretar pesquisas, comentarios e sinais de sentimento, ajudando RH e lideranca a localizar temas que exigem resposta.",
    objective:
      "Reduzir o esforco manual de leitura de pesquisas e transformar respostas abertas em uma visao mais clara de sentimento, temas e prioridades.",
    seoKeywords: [
      "analise de clima organizacional com IA",
      "pesquisa de clima com inteligencia artificial",
      "analise de sentimento para RH",
      "pulse survey com IA",
    ],
    seoAngles: [
      "como analisar comentarios de pesquisa de clima",
      "IA para pulse survey e e-NPS",
      "analise de sentimento para recursos humanos",
    ],
    gains: [
      "Mais velocidade na leitura de comentarios abertos.",
      "Melhor entendimento de temas sensiveis e recorrentes.",
      "Base mais forte para acoes de clima e engajamento.",
    ],
    howItWorks: [
      {
        title: "Coleta dos sinais",
        text: "A plataforma recebe respostas de pesquisas e outros registros qualitativos ligados a clima, pulse e experiencia do colaborador.",
      },
      {
        title: "Leitura assistida por IA",
        text: "A IA ajuda a classificar sentimento, agrupar temas e destacar mudancas relevantes de tom ou concentracao por area.",
      },
      {
        title: "Acao orientada",
        text: "RH e lideranca passam a ter uma consolidacao mais clara para priorizar respostas, investigacoes e planos de acao.",
      },
    ],
    idealFor: [
      "Empresas que realizam pulses, e-NPS ou pesquisas de clima.",
      "RHs que recebem alto volume de comentarios abertos.",
      "Liderancas que querem agir com base em sinais mais claros de experiencia.",
    ],
    relatedModules: ["Insights Automaticos", "Radar Inteligente", "Comunicacao Interna"],
    deepDiveHref: "/analise-clima",
    deepDiveLabel: "Ver pagina da solucao",
  },
  {
    slug: "radar-inteligente",
    category: "Cultura e engajamento",
    title: "Radar inteligente para alertas, nudges e prioridades",
    shortTitle: "Radar inteligente",
    summary:
      "Antecipe ferias, metas, feedbacks e outras pendencias com uma camada de alertas e nudges para gestores e colaboradores.",
    objective:
      "Trazer para a rotina os sinais e cobrancas que costumam se perder entre e-mails, memoria individual e controles paralelos.",
    seoKeywords: [
      "alertas para RH e lideranca",
      "nudges para colaboradores",
      "radar de pendencias de RH",
      "lembretes inteligentes para gestao de pessoas",
    ],
    gains: [
      "Mais ritmo nas rotinas importantes da empresa.",
      "Menos dependencia de cobranca manual do RH.",
      "Maior capacidade de agir antes que a pendencia se torne risco.",
    ],
    howItWorks: [
      {
        title: "Identificacao de pendencias",
        text: "A plataforma observa ciclos, prazos e situacoes que merecem atencao em diferentes frentes da operacao de pessoas.",
      },
      {
        title: "Distribuicao dos alertas",
        text: "Gestores e colaboradores recebem lembretes, sinais e orientacoes dentro da propria plataforma, de forma contextual.",
      },
      {
        title: "Conversao em acao",
        text: "Os cards e alertas direcionam o usuario para o fluxo correspondente, reduzindo atrito entre perceber o problema e agir.",
      },
    ],
    idealFor: [
      "Operacoes que dependem de ciclos e prazos recorrentes.",
      "Liderancas com muitas rotinas a acompanhar ao mesmo tempo.",
      "RHs que querem estimular adesao sem aumentar ruido operacional.",
    ],
    relatedModules: ["Central de Ferias", "Performance e Feedbacks", "Reconhecimento e Recompensas"],
    deepDiveHref: "/radar-inteligente",
    deepDiveLabel: "Ver pagina da solucao",
  },
  {
    slug: "insights-automaticos",
    category: "Desenvolvimento e IA",
    title: "Insights automaticos para RH e lideranca",
    shortTitle: "Insights automaticos",
    summary:
      "Cruze sinais de desempenho, engajamento, reconhecimento e aprendizagem para apoiar analise, priorizacao e tomada de decisao.",
    objective:
      "Transformar o volume de dados da operacao de pessoas em leitura acionavel, reduzindo dependencia de consolidacoes manuais e dashboards desconectados.",
    seoKeywords: [
      "people analytics com IA",
      "insights automaticos para RH",
      "analytics de RH para lideranca",
      "dados de engajamento e desempenho",
    ],
    seoAngles: [
      "como transformar dados de RH em insights acionaveis",
      "people analytics para lideranca",
      "analytics de engajamento e desempenho em uma unica plataforma",
    ],
    gains: [
      "Mais clareza sobre tendencias e riscos.",
      "Menos tempo gasto tabulando dados para leituras executivas.",
      "Base melhor para priorizacao de acoes por RH e lideranca.",
    ],
    howItWorks: [
      {
        title: "Conexao entre modulos",
        text: "A plataforma cruza dados de reconhecimento, treinamento, desempenho e outros fluxos para formar uma leitura mais ampla.",
      },
      {
        title: "Sintese automatica",
        text: "Com apoio de IA, tendencias, sinais de atencao e oportunidades de melhoria aparecem em uma visao mais organizada.",
      },
      {
        title: "Leitura executiva",
        text: "RH e lideranca acessam uma camada de analise que ajuda a decidir onde agir primeiro e como interpretar os movimentos observados.",
      },
    ],
    idealFor: [
      "Empresas que ja operam varios fluxos de RH e querem ler o todo.",
      "RHs com alto volume de dados e pouca capacidade de consolidacao manual.",
      "Liderancas que precisam de uma camada gerencial mais clara.",
    ],
    relatedModules: ["Analise de Clima", "Reconhecimento e Recompensas", "Academy Corporativa"],
    deepDiveHref: "/insights-rh",
    deepDiveLabel: "Ver pagina da solucao",
  },
  {
    slug: "automacao-documental",
    category: "Operacao de RH",
    title: "Automacao documental com IA para triagem e leitura",
    shortTitle: "Automacao documental",
    summary:
      "Automatize leitura inicial, classificacao e validacoes basicas de comprovantes, laudos, atestados e outros documentos de RH.",
    objective:
      "Reduzir o esforco manual de abrir, ler e digitar documento por documento em processos que exigem velocidade e consistencia operacional.",
    seoKeywords: [
      "automacao documental para RH",
      "OCR com IA para documentos de RH",
      "triagem de documentos com inteligencia artificial",
      "leitura automatica de comprovantes",
    ],
    gains: [
      "Triagem mais rapida de documentos.",
      "Menos digitacao manual e menos retrabalho.",
      "Mais foco humano apenas nos casos que exigem analise final.",
    ],
    howItWorks: [
      {
        title: "Recebimento dos arquivos",
        text: "A plataforma recebe documentos submetidos pelos colaboradores em fluxos como ponto, reembolso e rotinas administrativas.",
      },
      {
        title: "Leitura e classificacao",
        text: "A IA ajuda a extrair campos, reconhecer padroes e sinalizar inconsistencias basicas para acelerar a triagem.",
      },
      {
        title: "Encaminhamento operacional",
        text: "Os casos simples avancam com mais agilidade e os casos sensiveis ficam destacados para revisao da equipe responsavel.",
      },
    ],
    idealFor: [
      "RHs e backoffices com alto volume de documentos.",
      "Operacoes que sofrem com lentidao em triagem e digitacao manual.",
      "Empresas que querem reduzir SLA em fluxos burocraticos.",
    ],
    relatedModules: ["Reembolsos e Despesas", "Controle de Ponto", "Repositrio de Documentos"],
    deepDiveHref: "/automacao-documentos",
    deepDiveLabel: "Ver pagina da solucao",
  },
  {
    slug: "controle-do-time",
    category: "Operacao de RH",
    title: "Controle do time, perfis, acessos e base de colaboradores",
    shortTitle: "Controle do time",
    summary:
      "Centralize cadastro, hierarquia, acessos, vinculos e cotas de reconhecimento em uma base unica que sustenta a operacao da plataforma.",
    objective:
      "Dar a empresa uma fonte confiavel para a estrutura de pessoas, reduzindo falhas de cadastro, permissao e visibilidade entre modulos.",
    seoKeywords: [
      "base de colaboradores para RH",
      "controle de perfis e acessos",
      "cadastro de colaboradores em plataforma",
      "gestao central de pessoas",
    ],
    gains: [
      "Menos cadastros duplicados e planilhas paralelas.",
      "Mais governanca sobre acessos e perfis.",
      "Base estruturada para onboarding, desligamento e rotina administrativa.",
    ],
    howItWorks: [
      {
        title: "Cadastro central",
        text: "O perfil do colaborador concentra dados estruturais usados por diferentes modulos da plataforma.",
      },
      {
        title: "Controle de papeis e visibilidade",
        text: "Permissoes e niveis de acesso podem ser configurados conforme papel, area ou responsabilidade.",
      },
      {
        title: "Uso transversal",
        text: "A base alimenta fluxos como reconhecimento, ferias, desempenho, organograma e outras rotinas operacionais.",
      },
    ],
    idealFor: [
      "Empresas que precisam de governanca sobre quem ve o que.",
      "Operacoes com varios fluxos de RH no mesmo ambiente.",
      "RHs que querem uma base unica e mais confiavel de colaboradores.",
    ],
    relatedModules: ["Organograma Dinamico", "Reconhecimento e Recompensas", "Onboarding Digital"],
    deepDiveHref: "/controle-do-time",
    deepDiveLabel: "Ver pagina da solucao",
  },
  {
    slug: "organograma-dinamico",
    category: "Operacao de RH",
    title: "Organograma dinamico para leitura de estrutura e liderancas",
    shortTitle: "Organograma dinamico",
    summary:
      "Visualize areas, liderancas e relacoes de reporte em uma estrutura que acompanha a base organizacional sem depender de arquivos externos.",
    objective:
      "Facilitar leitura da estrutura da empresa e reduzir o esforco manual de manter organogramas atualizados fora do sistema.",
    seoKeywords: [
      "organograma dinamico",
      "organograma para empresas",
      "estrutura organizacional digital",
      "software de organograma corporativo",
    ],
    gains: [
      "Mais clareza sobre quem lidera quem e em qual area.",
      "Menos manutencao manual de organogramas.",
      "Melhor experiencia para conexao interna e leitura organizacional.",
    ],
    howItWorks: [
      {
        title: "Conexao com a base organizacional",
        text: "A visualizacao acompanha cargos, areas e relacoes de reporte cadastradas na plataforma.",
      },
      {
        title: "Exploracao por busca e navegacao",
        text: "Usuarios podem navegar pela arvore, localizar equipes e entender a estrutura com mais rapidez.",
      },
      {
        title: "Atualizacao continua",
        text: "Mudancas de estrutura aparecem no organograma sem depender de redesenho manual em arquivos externos.",
      },
    ],
    idealFor: [
      "Empresas com estruturas em movimento ou varios niveis de lideranca.",
      "RHs que precisam dar visibilidade organizacional ao time.",
      "Colaboradores que precisam localizar areas e liderancas com facilidade.",
    ],
    relatedModules: ["Controle do Time", "Comunicacao Interna", "Onboarding Digital"],
    deepDiveHref: "/organograma",
    deepDiveLabel: "Ver pagina da solucao",
  },
  {
    slug: "onboarding-digital",
    category: "Operacao de RH",
    title: "Onboarding digital com cadastro, documentos e primeiros fluxos",
    shortTitle: "Onboarding digital",
    summary:
      "Conecte admissao, coleta de documentos, acessos iniciais e primeiros passos do colaborador em um processo digital mais organizado.",
    objective:
      "Reduzir friccao na entrada de novos colaboradores, concentrando informacoes e tarefas em um fluxo unico e rastreavel.",
    seoKeywords: [
      "onboarding digital para empresas",
      "admissao digital de colaboradores",
      "fluxo de onboarding em RH",
      "coleta de documentos no onboarding",
    ],
    gains: [
      "Mais velocidade no inicio da jornada.",
      "Menos troca de e-mails e checklists soltos na admissao.",
      "Mais seguranca na coleta de documentos e no provisionamento inicial.",
    ],
    howItWorks: [
      {
        title: "Convite e coleta inicial",
        text: "A empresa inicia a admissao com uma trilha que organiza cadastro, uploads e informacoes essenciais do novo colaborador.",
      },
      {
        title: "Distribuicao das tarefas",
        text: "Os passos do onboarding se conectam a documentos, acessos, base do colaborador e trilhas de aprendizagem iniciais.",
      },
      {
        title: "Acompanhamento do progresso",
        text: "RH e lideranca acompanham o que ja foi concluido e o que ainda falta para deixar a entrada do colaborador mais previsivel.",
      },
    ],
    idealFor: [
      "Empresas com volume relevante de admissoes ou onboarding recorrente.",
      "Operacoes que sofrem com falta de visibilidade no processo de entrada.",
      "RHs que querem ligar documentos, acessos e treinamento inicial em um fluxo unico.",
    ],
    relatedModules: ["Controle do Time", "Academy Corporativa", "Repositrio de Documentos"],
  },
  {
    slug: "controle-de-ponto",
    category: "Operacao de RH",
    title: "Controle de ponto web com tratamento e trilha de auditoria",
    shortTitle: "Controle de ponto",
    summary:
      "Registre jornadas, trate excecoes com justificativa e preserve a trilha de auditoria em um fluxo alinhado ao REP-P.",
    objective:
      "Dar mais seguranca a gestao de jornada, reduzindo planilhas de ajuste e apoiando o fechamento operacional e fiscal do ponto.",
    seoKeywords: [
      "controle de ponto web",
      "REP-P online",
      "tratamento de ponto com auditoria",
      "sistema de ponto para empresas",
    ],
    seoAngles: [
      "controle de ponto online com REP-P",
      "software de ponto com trilha de auditoria",
      "como tratar divergencias de ponto sem planilhas",
    ],
    painPoints: [
      "Ajustes de jornada ainda acontecem em e-mail, chat ou planilha.",
      "A empresa perde seguranca juridica em divergencias de batida.",
      "Fechamento do ponto exige consolidacao manual demais.",
    ],
    faq: [
      {
        question: "O controle de ponto da VexiaRH atende operacoes com exigencia de REP-P?",
        answer:
          "Sim. A funcionalidade foi pensada para apoiar registro de jornada, tratamento formal de excecoes e trilha de auditoria em um fluxo alinhado ao contexto do REP-P.",
      },
      {
        question: "Como a plataforma trata esquecimentos e divergencias de batida?",
        answer:
          "As excecoes passam por um fluxo de ajuste com justificativa e historico, preservando o registro original da jornada e dando mais seguranca ao processo.",
      },
      {
        question: "Quando o controle de ponto online ganha mais valor?",
        answer:
          "Ele faz mais sentido em empresas com equipes distribuidas, multiplas unidades, necessidade de auditoria e alto volume de ajustes de jornada.",
      },
    ],
    comparison: {
      manual: [
        "Ajustes de jornada chegam por e-mail, mensagem ou planilha.",
        "Divergencias dependem de consolidacao manual e geram inseguranca.",
        "Auditoria e fechamento fiscal exigem mais esforco operacional.",
      ],
      platform: [
        "Batidas, justificativas e excecoes ficam no mesmo fluxo da jornada.",
        "O espelho original e preservado com historico formal de tratamento.",
        "A empresa ganha mais rastreabilidade para fechamento e fiscalizacao.",
      ],
    },
    contextualCta: {
      title: "Sua operacao ainda trata ponto em planilha e e-mail?",
      text: "Podemos te mostrar como o controle de ponto da VexiaRH organiza jornada, excecoes e auditoria em um fluxo mais seguro.",
    },
    audiences: [
      {
        title: "RH e DP",
        text: "Para reduzir risco operacional e ganhar mais seguranca juridica no tratamento da jornada.",
      },
      {
        title: "Liderancas operacionais",
        text: "Para acompanhar ajustes e excecoes sem depender de trocas informais de mensagem.",
      },
      {
        title: "Empresas com varias unidades",
        text: "Para configurar regras por estabelecimento e dar mais previsibilidade ao fechamento do ponto.",
      },
    ],
    expectedResults: [
      "Menos dependencia de planilhas para ajustes de jornada.",
      "Mais rastreabilidade em excecoes e divergencias.",
      "Melhor apoio ao fechamento operacional e fiscal do ponto.",
    ],
    objections: [
      {
        title: "Controle de ponto costuma gerar muito retrabalho",
        text: "A funcionalidade foi estruturada para organizar registro, tratamento e historico no mesmo ambiente, reduzindo dispersao de informacao.",
      },
      {
        title: "Temos receio de perder seguranca juridica ao digitalizar",
        text: "O ganho aqui esta justamente na trilha de auditoria, preservacao do registro original e formalizacao do tratamento das excecoes.",
      },
    ],
    gains: [
      "Mais controle sobre batidas e excecoes.",
      "Melhor rastreabilidade para auditoria e fiscalizacao.",
      "Menos risco operacional em ajustes e justificativas.",
    ],
    howItWorks: [
      {
        title: "Registro da jornada",
        text: "A batida acontece pela web e pode considerar regras como geolocalizacao e configuracoes por estabelecimento.",
      },
      {
        title: "Tratamento formal das divergencias",
        text: "Esquecimentos e excecoes passam por ajuste com justificativa, sem comprometer o espelho original da jornada.",
      },
      {
        title: "Consolidacao e apoio fiscal",
        text: "A empresa acompanha o espelho, trata pendencias e apoia rotinas documentais e fiscais exigidas pelo contexto do REP-P.",
      },
    ],
    idealFor: [
      "Empresas com controle formal de jornada e multiplas unidades.",
      "Operacoes com necessidade de trilha de auditoria em ajustes.",
      "RHs que precisam de mais seguranca juridica e operacional no ponto.",
    ],
    relatedModules: ["Central de Ferias", "Automacao Documental", "Reembolsos e Despesas"],
    deepDiveHref: "/controle-de-ponto",
    deepDiveLabel: "Ver pagina da solucao",
  },
  {
    slug: "central-de-ferias",
    category: "Operacao de RH",
    title: "Central de ferias e licencas com saldo, aprovacao e planejamento",
    shortTitle: "Central de ferias",
    summary:
      "Organize pedidos, periodos aquisitivos, aprovacoes e conflitos de agenda em um fluxo unico de ferias e licencas.",
    objective:
      "Tirar as planilhas do processo de ferias e dar mais previsibilidade para colaborador, lideranca e RH sobre saldo, aprovacao e riscos de passivo.",
    seoKeywords: [
      "gestao de ferias para empresas",
      "central de ferias e licencas",
      "software de ferias para RH",
      "controle de saldo de ferias",
    ],
    seoAngles: [
      "como organizar ferias e licencas em uma plataforma",
      "software de ferias com saldo e aprovacao",
      "gestao de ferias para RH e lideranca",
    ],
    painPoints: [
      "Pedidos de ferias ainda dependem de planilhas e e-mails.",
      "Lideranca perde visibilidade sobre sobreposicao de ausencias.",
      "RH sofre com risco de passivo por falta de previsibilidade do ciclo.",
    ],
    faq: [
      {
        question: "A central de ferias da VexiaRH mostra saldo e periodo aquisitivo?",
        answer:
          "Sim. A funcionalidade foi desenhada para dar mais clareza sobre saldo, periodos e historico, reduzindo atrito entre colaborador, lideranca e RH.",
      },
      {
        question: "Como a plataforma ajuda quando varios colaboradores pedem a mesma janela?",
        answer:
          "A lideranca recebe contexto sobre conflitos e sobreposicoes para reorganizar a escala e aprovar com mais previsibilidade.",
      },
      {
        question: "Quando uma central de ferias digital gera mais valor?",
        answer:
          "Ela faz mais sentido em empresas com alto volume de pedidos, operacoes distribuidas ou necessidade de reduzir retrabalho e passivo no processo.",
      },
    ],
    comparison: {
      manual: [
        "Pedidos de ferias circulam por e-mail, chat e controles paralelos.",
        "A lideranca perde visibilidade sobre conflitos de agenda.",
        "RH precisa consolidar saldo, historico e aprovacoes manualmente.",
      ],
      platform: [
        "Colaborador consulta saldo e abre pedido direto no portal.",
        "A lideranca decide com contexto de conflito e planejamento.",
        "RH acompanha historico, periodos e riscos em um processo unificado.",
      ],
    },
    contextualCta: {
      title: "Quer tirar as planilhas do processo de ferias?",
      text: "Agende uma demonstracao e veja como saldo, aprovacao e planejamento de ausencias podem rodar em um fluxo unico.",
    },
    audiences: [
      {
        title: "RH",
        text: "Para acompanhar saldo, historico e risco de passivo sem depender de consolidacao manual.",
      },
      {
        title: "Gestores",
        text: "Para aprovar com mais contexto e evitar sobreposicao de ausencias no time.",
      },
      {
        title: "Empresas com equipes distribuidas",
        text: "Para dar mais previsibilidade a pedidos e cobertura da operacao entre unidades e areas.",
      },
    ],
    expectedResults: [
      "Mais clareza sobre saldo e periodos aquisitivos.",
      "Menos ruido na aprovacao entre lideranca e RH.",
      "Melhor planejamento de ausencias em periodos sensiveis.",
    ],
    objections: [
      {
        title: "Ferias sempre acabam virando excecao",
        text: "A plataforma ajuda justamente a tratar as excecoes com mais contexto e visibilidade, sem desmontar o processo principal.",
      },
      {
        title: "Ja temos um fluxo, mas ele e pouco previsivel",
        text: "A central agrega valor quando junta saldo, pedido, aprovacao e conflito no mesmo ambiente, reduzindo ida e volta operacional.",
      },
    ],
    gains: [
      "Mais clareza sobre dias, saldos e periodos.",
      "Menos atrito entre colaborador, lideranca e RH.",
      "Melhor planejamento de ausencias e cobertura da operacao.",
    ],
    howItWorks: [
      {
        title: "Simulacao e solicitacao",
        text: "O colaborador consulta saldo e abre pedidos no portal, com apoio de regras e validacoes trabalhistas aplicadas no fluxo.",
      },
      {
        title: "Aprovacao e visibilidade de conflito",
        text: "A lideranca recebe os pedidos com visao de sobreposicao e contexto para decidir sem depender de planilhas paralelas.",
      },
      {
        title: "Acompanhamento do ciclo",
        text: "RH acompanha periodos aquisitivos, historico e riscos operacionais em uma visao mais organizada do processo.",
      },
    ],
    idealFor: [
      "Empresas com volume recorrente de pedidos de ferias e licencas.",
      "Times que sofrem com sobreposicao e falta de previsibilidade.",
      "RHs que precisam reduzir retrabalho e passivo no processo de descanso.",
    ],
    relatedModules: ["Controle de Ponto", "Radar Inteligente", "Controle do Time"],
    deepDiveHref: "/central-de-ferias",
    deepDiveLabel: "Ver pagina da solucao",
  },
  {
    slug: "gestao-de-ativos",
    category: "Operacao de RH",
    title: "Gestao de ativos com termos, historico e devolucao rastreavel",
    shortTitle: "Gestao de ativos",
    summary:
      "Controle notebooks, celulares e outros ativos com vinculo ao colaborador, termo digital e historico de manutencao e devolucao.",
    objective:
      "Dar previsibilidade ao ciclo de vida dos equipamentos da empresa, reduzindo perda de visibilidade e falhas no onboarding e offboarding.",
    seoKeywords: [
      "gestao de ativos para RH",
      "controle de notebooks corporativos",
      "termo digital de responsabilidade",
      "devolucao de ativos no desligamento",
    ],
    gains: [
      "Mais controle sobre equipamentos distribuidos.",
      "Historico claro de responsabilidade e manutencao.",
      "Melhor seguranca em desligamentos e devolucoes.",
    ],
    howItWorks: [
      {
        title: "Cadastro do ativo",
        text: "Os equipamentos entram na base com dados estruturados, como serial, estado, licencas e outras informacoes relevantes.",
      },
      {
        title: "Vinculo com o colaborador",
        text: "A entrega pode ser formalizada com termo digital e historico de responsabilidade ligado ao perfil da pessoa.",
      },
      {
        title: "Acompanhamento do ciclo",
        text: "A empresa acompanha manutencoes, mudancas de status e devolucao de ativos em um unico fluxo operacional.",
      },
    ],
    idealFor: [
      "Empresas com equipes remotas ou distribuidas.",
      "Operacoes com notebooks, celulares e ativos de alto giro.",
      "RHs, TI e Facilities que precisam compartilhar mais contexto sobre os equipamentos.",
    ],
    relatedModules: ["Controle do Time", "Repositrio de Documentos", "Onboarding Digital"],
    deepDiveHref: "/gestao-de-ativos",
    deepDiveLabel: "Ver pagina da solucao",
  },
  {
    slug: "reembolsos-e-despesas",
    category: "Operacao de RH",
    title: "Reembolsos, despesas e variaveis com aprovacao estruturada",
    shortTitle: "Reembolsos e despesas",
    summary:
      "Centralize comprovantes, justificativas, aprovacoes e historico de despesas variaveis em um fluxo digital para colaborador, lideranca e financeiro.",
    objective:
      "Tirar reembolsos e despesas do e-mail e das planilhas, organizando o fluxo do pedido ao pagamento com mais controle e rastreabilidade.",
    seoKeywords: [
      "software de reembolso corporativo",
      "gestao de despesas para colaboradores",
      "aprovacao de reembolsos online",
      "controle de despesas variaveis",
    ],
    seoAngles: [
      "como organizar reembolsos corporativos",
      "plataforma para aprovacao de reembolsos e despesas",
      "software de comprovantes e despesas para colaboradores",
    ],
    painPoints: [
      "Comprovantes chegam por e-mail, chat ou planilhas paralelas.",
      "Financeiro e lideranca perdem tempo consolidando informacoes de gasto.",
      "O colaborador nao tem clareza sobre status e historico do pedido.",
    ],
    faq: [
      {
        question: "A VexiaRH serve para reembolso corporativo e despesas variaveis?",
        answer:
          "Sim. A funcionalidade organiza comprovantes, justificativas, aprovacoes e historico de despesas em um fluxo unico para colaborador, lideranca e financeiro.",
      },
      {
        question: "Como o processo de reembolso acontece na pratica?",
        answer:
          "O colaborador abre o pedido, anexa comprovantes e informa o contexto da despesa. A lideranca aprova, o financeiro acompanha e o historico fica registrado ate a liquidacao.",
      },
      {
        question: "Qual o principal ganho para a empresa?",
        answer:
          "Mais controle sobre gasto variavel, menos dependencia de e-mail e planilha e uma leitura melhor para aprovacao e fechamento financeiro.",
      },
    ],
    comparison: {
      manual: [
        "Comprovantes chegam espalhados entre e-mail, chat e planilhas.",
        "Aprovacao e liquidacao perdem rastreabilidade no processo.",
        "Financeiro e lideranca gastam tempo consolidando informacoes de gasto.",
      ],
      platform: [
        "O colaborador abre o pedido e anexa comprovantes no mesmo ambiente.",
        "Lideranca e financeiro acompanham status, contexto e historico.",
        "A empresa ganha mais previsibilidade sobre gasto variavel e pagamento.",
      ],
    },
    contextualCta: {
      title: "Quer organizar reembolsos e despesas em um fluxo unico?",
      text: "A demonstracao mostra como colaborador, lideranca e financeiro acompanham o pedido do envio ao pagamento.",
    },
    audiences: [
      {
        title: "Financeiro",
        text: "Para receber pedidos mais organizados e reduzir consolidacao manual de comprovantes e status.",
      },
      {
        title: "RH e operacao",
        text: "Para dar governanca ao processo e visibilidade sobre gasto variavel da empresa.",
      },
      {
        title: "Liderancas",
        text: "Para aprovar com mais contexto, historico e previsibilidade do fluxo.",
      },
    ],
    expectedResults: [
      "Mais controle sobre pedidos e comprovantes.",
      "Menos ruido entre colaborador, lideranca e financeiro.",
      "Melhor visibilidade sobre status, aprovacao e liquidacao.",
    ],
    objections: [
      {
        title: "Reembolso sempre gera ida e volta demais",
        text: "O fluxo centralizado ajuda a reduzir dispersao de comprovantes e alinhar melhor quem precisa agir em cada etapa.",
      },
      {
        title: "Financeiro nao quer receber pedido incompleto",
        text: "A estruturacao do pedido com categoria, contexto e comprovante ajuda a melhorar qualidade antes da etapa de liquidacao.",
      },
    ],
    gains: [
      "Mais visibilidade sobre o gasto variavel da operacao.",
      "Menos retrabalho para financeiro e lideranca.",
      "Melhor experiencia para o colaborador acompanhar o status do pedido.",
    ],
    howItWorks: [
      {
        title: "Abertura do pedido",
        text: "O colaborador envia comprovantes, informa categoria e contextualiza a despesa diretamente na plataforma.",
      },
      {
        title: "Aprovacao do fluxo",
        text: "Lideranca e areas responsaveis acompanham o pedido com status, historico e contexto para aprovar ou devolver.",
      },
      {
        title: "Liquidacao e consolidacao",
        text: "O pagamento e o fechamento do protocolo ficam registrados, apoiando a visibilidade para colaborador, RH e financeiro.",
      },
    ],
    idealFor: [
      "Empresas com reembolso de viagem, alimentacao ou gastos operacionais.",
      "Financeiros que querem reduzir dispersao de comprovantes.",
      "Operacoes com muitas aprovacoes e necessidade de historico confiavel.",
    ],
    relatedModules: ["Automacao Documental", "Repositrio de Documentos", "Insights Automaticos"],
    deepDiveHref: "/folha-reembolsos",
    deepDiveLabel: "Ver pagina da solucao",
  },
  {
    slug: "repositorio-de-documentos",
    category: "Operacao de RH",
    title: "Repositorio de documentos ligado ao cadastro do colaborador",
    shortTitle: "Repositorio de documentos",
    summary:
      "Organize contratos, recibos, ASOs e documentos obrigatorios em um repositorio centralizado, seguro e conectado ao perfil da pessoa.",
    objective:
      "Dar ao RH uma estrutura mais confiavel para guarda e consulta documental, sem depender de drives paralelos e pastas dispersas.",
    seoKeywords: [
      "repositorio de documentos para RH",
      "GED para recursos humanos",
      "dossie do colaborador digital",
      "documentos trabalhistas em um so lugar",
    ],
    seoAngles: [
      "como organizar documentos do colaborador em um so lugar",
      "GED para RH com controle de acesso",
      "repositorio de contratos e documentos trabalhistas",
    ],
    painPoints: [
      "Documentos ficam dispersos em pastas e drives sem padrao.",
      "RH perde tempo procurando recibos, contratos e laudos antigos.",
      "Acesso a documentos sensiveis nao esta bem controlado.",
    ],
    faq: [
      {
        question: "O repositorio de documentos da VexiaRH funciona como GED para RH?",
        answer:
          "Sim. A proposta e organizar contratos, recibos, ASOs e outros documentos do colaborador em um dossie digital centralizado e seguro.",
      },
      {
        question: "Quais documentos podem ficar no repositorio?",
        answer:
          "A empresa pode concentrar contratos, recibos, ASOs, comprovantes e outros documentos obrigatorios ligados ao cadastro do colaborador.",
      },
      {
        question: "Qual o ganho para o RH?",
        answer:
          "Mais velocidade na busca documental, menos dependencia de drives paralelos e melhor controle de acesso por perfil.",
      },
    ],
    comparison: {
      manual: [
        "Documentos ficam em drives, pastas e subpastas sem padrao unico.",
        "RH perde tempo procurando recibos, contratos e laudos antigos.",
        "Visibilidade de documentos sensiveis depende de acordos informais.",
      ],
      platform: [
        "Cada colaborador concentra um dossie documental ligado ao proprio cadastro.",
        "Busca, consulta e historico ficam mais organizados para o RH.",
        "Acesso por perfil reforca seguranca e governanca documental.",
      ],
    },
    contextualCta: {
      title: "Sua operacao ainda depende de drives dispersos para documentos?",
      text: "Veja como a VexiaRH organiza o dossie do colaborador em um repositorio centralizado e conectado a rotina do RH.",
    },
    audiences: [
      {
        title: "RH e DP",
        text: "Para localizar documentos com mais rapidez e reduzir dependencia de drives e subpastas soltas.",
      },
      {
        title: "Operacoes com compliance documental",
        text: "Para reforcar seguranca, historico e organizacao de contratos, recibos e laudos.",
      },
      {
        title: "Empresas com alto volume de admissoes e movimentacoes",
        text: "Para manter o dossie do colaborador organizado ao longo de toda a jornada.",
      },
    ],
    expectedResults: [
      "Busca mais rapida de documentos criticos.",
      "Mais seguranca no acesso a arquivos sensiveis.",
      "Melhor organizacao do dossie do colaborador ao longo do tempo.",
    ],
    objections: [
      {
        title: "Ja usamos drive compartilhado",
        text: "O repositorio ganha valor ao ligar documentos ao cadastro da pessoa, padronizar categorias e controlar melhor quem pode ver o que.",
      },
      {
        title: "Documentacao costuma ser sensivel demais para centralizar",
        text: "Justamente por isso a funcionalidade reforca acesso por perfil, historico e estrutura padronizada de consulta.",
      },
    ],
    gains: [
      "Busca mais rapida de documentos do colaborador.",
      "Controle de acesso por perfil e tipo de informacao.",
      "Mais governanca na guarda e consulta documental.",
    ],
    howItWorks: [
      {
        title: "Estruturacao por colaborador",
        text: "Cada pessoa concentra um dossie documental ligado ao proprio cadastro, com categorias e organizacao padronizadas.",
      },
      {
        title: "Envio e consulta",
        text: "Documentos podem entrar por onboarding, rotinas administrativas ou disponibilizacao no portal do colaborador.",
      },
      {
        title: "Controle e historico",
        text: "A empresa acompanha visibilidade, alteracoes e disponibilidade dos arquivos em um ambiente mais seguro e auditavel.",
      },
    ],
    idealFor: [
      "RHs com alto volume de contratos, recibos e laudos.",
      "Empresas que precisam reduzir dependencia de drives dispersos.",
      "Operacoes com necessidade de organizacao documental e compliance.",
    ],
    relatedModules: ["Onboarding Digital", "Automacao Documental", "Controle do Time"],
    deepDiveHref: "/repositorio-documentos",
    deepDiveLabel: "Ver pagina da solucao",
  },
  {
    slug: "controle-de-fornecedores",
    category: "Operacao de RH",
    title: "Controle de fornecedores, terceiros e obrigacoes documentais",
    shortTitle: "Controle de fornecedores",
    summary:
      "Consolide cadastro, documentos, licencas e acompanhamento de parceiros, terceiros e fornecedores em uma visao operacional unica.",
    objective:
      "Reduzir o risco de operar com terceiros sem contexto suficiente sobre contratos, regulatorio e documentacao necessaria.",
    seoKeywords: [
      "controle de fornecedores para empresas",
      "gestao de terceiros e parceiros",
      "documentacao de fornecedores",
      "compliance de terceiros",
    ],
    gains: [
      "Mais visibilidade sobre parceiros e prestadores.",
      "Menos documentacao dispersa na relacao com terceiros.",
      "Melhor controle sobre riscos operacionais e regulatarios.",
    ],
    howItWorks: [
      {
        title: "Cadastro da rede externa",
        text: "A empresa estrutura fornecedores e terceiros com dados juridicos, representantes e informacoes essenciais ao relacionamento.",
      },
      {
        title: "Acompanhamento documental",
        text: "Certidoes, licencas e outros documentos podem ser organizados e acompanhados de forma mais centralizada.",
      },
      {
        title: "Leitura operacional",
        text: "RH, financeiro e areas operacionais passam a ter uma visao mais clara sobre a situacao de cada parceiro.",
      },
    ],
    idealFor: [
      "Empresas com parceiros, credenciados ou prestadores recorrentes.",
      "Operacoes com exigencias documentais para rede externa.",
      "Areas que precisam reduzir risco e ganhar governanca sobre terceiros.",
    ],
    relatedModules: ["Repositrio de Documentos", "Insights Automaticos", "Controle do Time"],
    deepDiveHref: "/controle-fornecedores",
    deepDiveLabel: "Ver pagina da solucao",
  },
  {
    slug: "ia-performance-coach",
    category: "Desenvolvimento e IA",
    title: "AI Performance Coach para metas, feedbacks e 1-on-1s",
    shortTitle: "AI Performance Coach",
    summary:
      "Use IA para resumir contexto, orientar leitura do ciclo e ajudar gestores a conduzir metas, 1-on-1s e feedbacks com mais clareza.",
    objective:
      "Reduzir o tempo de leitura e preparacao para os rituais de performance, mantendo a conversa humana mais bem apoiada por dados e contexto.",
    seoKeywords: [
      "AI performance coach",
      "IA para feedback e metas",
      "inteligencia artificial em desempenho",
      "1 on 1 com apoio de IA",
    ],
    gains: [
      "Gestores chegam mais preparados aos rituais de performance.",
      "Feedbacks e check-ins ganham mais contexto.",
      "A empresa reduz o esforco de leitura dispersa ao longo do ciclo.",
    ],
    howItWorks: [
      {
        title: "Consolidacao do historico",
        text: "A IA acessa registros de metas, feedbacks, check-ins e avancos disponiveis dentro do contexto autorizado para aquele papel.",
      },
      {
        title: "Leitura e sugestao",
        text: "A plataforma destaca desvios, resumos e proximos focos para apoiar a preparacao de feedbacks e 1-on-1s.",
      },
      {
        title: "Apoio a decisao",
        text: "A conversa continua humana, mas o gestor passa a ter uma base mais clara para orientar desenvolvimento e acompanhar o ciclo.",
      },
    ],
    idealFor: [
      "Empresas com ciclos de performance e metas estruturados.",
      "Liderancas com pouco tempo para consolidar contexto manualmente.",
      "RHs que querem aumentar qualidade dos rituais de performance.",
    ],
    relatedModules: ["Performance e Feedbacks", "Insights Automaticos", "AI Career Coach"],
    deepDiveHref: "/ai-performance-coach",
    deepDiveLabel: "Ver pagina da solucao",
  },
  {
    slug: "ia-career-coach",
    category: "Desenvolvimento e IA",
    title: "AI Career Coach para desenvolvimento, sucessao e carreira",
    shortTitle: "AI Career Coach",
    summary:
      "Apoie PDIs, sucessao e desenvolvimento com IA para leitura de competencias, gaps e proximos passos de carreira.",
    objective:
      "Dar mais consistencia e contexto as conversas de carreira, reduzindo subjetividade e acelerando a leitura sobre desenvolvimento interno.",
    seoKeywords: [
      "AI career coach",
      "IA para carreira e sucessao",
      "desenvolvimento de carreira com IA",
      "plano de sucessao com inteligencia artificial",
    ],
    gains: [
      "Mais clareza sobre gaps e proximos passos do colaborador.",
      "Melhor apoio para sucessao e desenvolvimento interno.",
      "Menos dependencia de matrizes manuais e leituras dispersas.",
    ],
    howItWorks: [
      {
        title: "Leitura de competencias",
        text: "A plataforma consolida competencias, ciclos e sinais ligados ao desenvolvimento para formar uma leitura mais organizada da carreira.",
      },
      {
        title: "Sugestao de caminhos",
        text: "A IA ajuda a sugerir focos de desenvolvimento, cursos e movimentos coerentes com o contexto do colaborador e da empresa.",
      },
      {
        title: "Apoio a sucessao e PDI",
        text: "RH e lideranca usam essa camada para enriquecer PDIs, conversas de crescimento e hipoteses de sucessao interna.",
      },
    ],
    idealFor: [
      "Empresas com trilhas de carreira e PDIs estruturados.",
      "RHs que precisam apoiar desenvolvimento com mais consistencia.",
      "Liderancas que querem melhores insumos para conversar sobre crescimento.",
    ],
    relatedModules: ["Carreira e PDI", "Academy Corporativa", "Insights Automaticos"],
    deepDiveHref: "/ai-career-coach",
    deepDiveLabel: "Ver pagina da solucao",
  },
];

export const functionalityCategories = Array.from(
  new Set(functionalities.map((item) => item.category)),
);

export function getFunctionalityBySlug(slug: string) {
  return functionalities.find((item) => item.slug === slug);
}

export function getFunctionalityKeywords(item: Functionality) {
  const autoKeywords = [
    item.title,
    item.shortTitle,
    `plataforma de ${item.shortTitle.toLowerCase()}`,
    `software de ${item.shortTitle.toLowerCase()}`,
    `${item.shortTitle.toLowerCase()} para RH`,
    `${item.shortTitle.toLowerCase()} para empresas`,
    `VexiaRH ${item.shortTitle.toLowerCase()}`,
  ];

  return Array.from(
    new Set([...(item.seoKeywords || []), ...(item.seoAngles || []), ...autoKeywords]),
  );
}

export function getFunctionalityFaq(item: Functionality) {
  if (item.faq?.length) {
    return item.faq;
  }

  return [
    {
      question: `Para que serve ${item.shortTitle.toLowerCase()}?`,
      answer: item.objective,
    },
    {
      question: `Quais ganhos ${item.shortTitle.toLowerCase()} traz para a operacao?`,
      answer: item.gains.join(" "),
    },
    {
      question: `Como ${item.shortTitle.toLowerCase()} funciona na VexiaRH?`,
      answer: item.howItWorks.map((step) => `${step.title}: ${step.text}`).join(" "),
    },
  ];
}
