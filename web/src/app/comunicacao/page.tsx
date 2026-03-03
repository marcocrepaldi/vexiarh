import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";

const primary = "#005B63";
const accent = "#F18921";

export const metadata: Metadata = {
  title: "Conheça a Plataforma VexiaRH | Engajamento, Performance e Operações de RH",
  description:
    "Visão pública do VexiaRH: reconhecimento, incentivos, carreira, academy, comunicação interna, férias, assets, analytics e mais. Entenda os módulos e peça uma demo.",
  openGraph: {
    title: "VexiaRH | Plataforma de Cultura, Performance e Operações de RH",
    description:
      "Tudo em um só lugar: reconhecimento e incentivos, academy, comunicação interna, carreira, gestão operacional e analytics para decisões melhores.",
    type: "website",
  },
  alternates: {
    canonical: "/comunicacao",
  },
};

export default function Comunicacao() {
  const modules = [
    {
      title: "White-label & Acesso Corporativo",
      text: "Seu RH com a sua marca: identidade visual, mensagens e acesso corporativo para uma experiência profissional.",
      anchor: "#autenticacao",
    },
    {
      title: "Dashboard & Indicadores",
      text: "Visão executiva e operacional: panorama de engajamento, uso, pendências e atividades do time.",
      anchor: "#dashboard",
    },
    {
      title: "Reconhecimento & Incentivos",
      text: "Programa de reconhecimento com regras, governança e loja de recompensas para aumentar adesão.",
      anchor: "#reconhecimento",
    },
    {
      title: "Pontos, Cotas & Governança",
      text: "Controle de orçamento, regras de distribuição, transparência e histórico completo sem planilhas paralelas.",
      anchor: "#pontos",
    },
    {
      title: "Pessoas & Estrutura",
      text: "Diretório, perfis, áreas/departamentos e acessos — base para segmentar ações e comunicações.",
      anchor: "#pessoas",
    },
    {
      title: "Performance & Carreira",
      text: "Metas/OKRs, check-ins, trilhas de carreira e rituais contínuos para evolução do time.",
      anchor: "#performance",
    },
    {
      title: "Academy & Treinamentos",
      text: "Cursos, trilhas, provas e certificados para acelerar capacitação e padronizar conhecimento.",
      anchor: "#academy",
    },
    {
      title: "Comunicação Interna",
      text: "Canal oficial com curadoria: comunicados, campanhas e intranet em um feed claro.",
      anchor: "#comunicacao-interna",
    },
    {
      title: "Vagas Internas",
      text: "Mobilidade interna com transparência: oportunidades, detalhes e fluxo simples para o colaborador.",
      anchor: "#jobs",
    },
    {
      title: "Ativos & Equipamentos",
      text: "Controle de assets e logística: entrega, devolução, status e rastreabilidade.",
      anchor: "#ativos",
    },
    {
      title: "Férias & Licenças",
      text: "Solicitação, acompanhamento e aprovação com histórico e visibilidade para gestor e RH.",
      anchor: "#ferias",
    },
    {
      title: "Analytics & Relatórios",
      text: "Métricas de engajamento, aprendizado, reconhecimento e comunicação para decisões melhores.",
      anchor: "#analytics",
    },
    {
      title: "Intranet & Links Rápidos",
      text: "Hub do colaborador: atalhos, comunicados e recursos importantes em um único lugar.",
      anchor: "#intranet",
    },
    {
      title: "Segurança & Fundamentos",
      text: "Acesso corporativo, permissões por perfil e base pronta para evoluir com sua operação.",
      anchor: "#utilitarios",
    },
  ];

  const details = [
    {
      id: "autenticacao",
      title: "White-label & Acesso Corporativo",
      subtitle: "A plataforma com a identidade da sua empresa, pronta para escalar.",
      bullets: [
        "Experiência com a sua marca: logo, cores, favicon e mensagens institucionais.",
        "Acesso corporativo via Google Workspace (Firebase Authentication).",
        "Permissões por perfil (Admin, Gestor, Colaborador) para governança e segurança.",
        "Ativação/desativação de módulos conforme sua realidade (plano por etapas).",
        "Pronto para multiunidades: segmentação por áreas/departamentos.",
      ],
    },
    {
      id: "dashboard",
      title: "Dashboard & Indicadores",
      subtitle: "Gestão em tempo real: o que está acontecendo e o que precisa de atenção.",
      bullets: [
        "Visão clara para RH/gestores e visão prática para colaboradores.",
        "Indicadores de adesão, engajamento e utilização por área/período.",
        "Radar de pendências (ex.: solicitações, aprovações, tarefas e itens em aberto).",
        "Histórico de atividades com rastreabilidade para auditoria interna.",
        "Blocos configuráveis para refletir suas prioridades (cultura, operação, aprendizado).",
      ],
    },
    {
      id: "reconhecimento",
      title: "Reconhecimento & Incentivos",
      subtitle: "Reconhecer e recompensar do jeito certo — com regras, transparência e controle.",
      bullets: [
        "Programa de reconhecimento com regras claras e histórico completo.",
        "Loja de recompensas com produtos/benefícios e acompanhamento de pedidos.",
        "Fluxo de resgate com status (em análise, aprovado, entregue) e rastreabilidade.",
        "Campanhas sazonais: ações rápidas de reconhecimento (ex.: trimestre, metas, cultura).",
        "Pronto para prova social: destaques, reconhecimentos e comunicados em vitrine.",
      ],
    },
    {
      id: "pontos",
      title: "Pontos, Cotas & Governança",
      subtitle: "Controle de orçamento e distribuição sem planilhas: governança real.",
      bullets: [
        "Cotas distribuíveis por área/período (budget de reconhecimento).",
        "Transferências e aprovações com histórico e rastreabilidade.",
        "Transparência para gestores e RH: quem distribuiu, quando e por quê.",
        "Alertas quando há subutilização ou falta de saldo (controle operacional).",
        "Estrutura preparada para políticas diferentes por unidade/área.",
      ],
    },
    {
      id: "pessoas",
      title: "Pessoas & Estrutura",
      subtitle: "Base organizacional para segmentar comunicação, aprendizagem e operação.",
      bullets: [
        "Diretório de colaboradores com perfis e vínculo organizacional.",
        "Departamentos/squads para segmentar comunicados e campanhas.",
        "Controle de acessos e permissões por perfil.",
        "Base pronta para relatórios por área e jornada do colaborador.",
        "Experiência consistente: avatar/foto, dados essenciais e visibilidade por permissão.",
      ],
    },
    {
      id: "performance",
      title: "Performance & Carreira",
      subtitle: "Rituais contínuos de evolução: metas, check-ins e trilhas de carreira.",
      bullets: [
        "Metas/OKRs com acompanhamento e check-ins recorrentes.",
        "Avaliação contínua com registros e evolução ao longo do tempo.",
        "Trilhas de carreira e etapas visíveis para o colaborador.",
        "Reflexões guiadas para suportar cultura de feedback e crescimento.",
        "Pronto para conectar reconhecimento a resultados e desenvolvimento.",
      ],
    },
    {
      id: "academy",
      title: "Academy & Treinamentos",
      subtitle: "Capacitação com trilhas, provas e certificados — do onboarding ao upskilling.",
      bullets: [
        "Catálogo de cursos com trilhas de aprendizagem.",
        "Provas, avaliações e emissão de certificados.",
        "Acompanhamento de progresso e conclusão por colaborador/área.",
        "Curadoria de conteúdos internos (processos, cultura, normas, produtos).",
        "Pronto para campanhas: trilha obrigatória, onboarding e reciclagens.",
      ],
    },
    {
      id: "comunicacao-interna",
      title: "Comunicação Interna",
      subtitle: "Um canal oficial que organiza e aumenta o alcance do que importa.",
      bullets: [
        "Feed oficial com comunicados e campanhas internas.",
        "Curadoria e publicação com consistência (sem ruído e sem retrabalho).",
        "Intranet integrada: comunicados + links + conteúdos estratégicos.",
        "Formato visual: banners, thumbnails e destaques para maior engajamento.",
        "Segmentação por áreas/departamentos (quando aplicável).",
      ],
    },
    {
      id: "jobs",
      title: "Vagas Internas",
      subtitle: "Mobilidade interna para reter talentos e dar visibilidade às oportunidades.",
      bullets: [
        "Listagem e detalhe de vagas internas para colaboradores.",
        "Campos para requisitos, responsabilidade, prazo e chamada para ação.",
        "Organização por status (aberta, em andamento, encerrada).",
        "Experiência simples: descobrir oportunidades e aplicar com agilidade.",
        "Suporte a campanhas de mobilidade e crescimento interno.",
      ],
    },
    {
      id: "ativos",
      title: "Ativos & Equipamentos",
      subtitle: "Controle de assets e logística sem perder histórico e responsabilidade.",
      bullets: [
        "Cadastro e controle de ativos (notebooks, periféricos, itens de entrega).",
        "Rastreabilidade: responsável, status e histórico de movimentações.",
        "Suporte a devolução, manutenção e auditoria interna.",
        "Campos e imagens para facilitar identificação e logística.",
        "Visibilidade operacional para RH/Facilities (conforme permissão).",
      ],
    },
    {
      id: "ferias",
      title: "Férias & Licenças",
      subtitle: "Transparência e controle do fluxo: solicitação, aprovação e histórico.",
      bullets: [
        "Solicitação pelo colaborador e acompanhamento em tempo real.",
        "Aprovação por gestor/RH com histórico e rastreabilidade.",
        "Pendências aparecem no painel para evitar atrasos.",
        "Registro de períodos e histórico por colaborador.",
        "Processo claro, reduzindo trocas por e-mail/planilhas.",
      ],
    },
    {
      id: "analytics",
      title: "Analytics & Relatórios",
      subtitle: "Dados que viram ação: cultura, aprendizado e operação com indicadores.",
      bullets: [
        "Painéis e relatórios de uso, engajamento e adesão.",
        "Distribuição de reconhecimento por área/período e tendências.",
        "Indicadores de cursos: progresso, conclusão e gargalos.",
        "Leitura de comunicação: alcance e performance de campanhas.",
        "Filtros por área/departamento e períodos para decisões rápidas.",
      ],
    },
    {
      id: "intranet",
      title: "Intranet & Links Rápidos",
      subtitle: "O hub do colaborador: informação e recursos em um ponto único.",
      bullets: [
        "Home com comunicados, atalhos e itens essenciais do dia a dia.",
        "Organização por campanhas e hubs internos (ex.: onboarding, políticas).",
        "Links rápidos e páginas públicas opcionais para campanhas específicas.",
        "Experiência consistente em desktop/mobile.",
        "Pronto para virar o “ponto de partida” do colaborador.",
      ],
    },
    {
      id: "utilitarios",
      title: "Segurança & Fundamentos",
      subtitle: "Base sólida para evoluir: permissões, consistência e experiência fluida.",
      bullets: [
        "Controle de acesso por perfil e permissões por área.",
        "Temas (claro/escuro), componentes consistentes e carregamento suave.",
        "Históricos e rastreabilidade para auditoria e transparência.",
        "Arquitetura preparada para novas integrações e módulos.",
        "Pronto para personalizações visuais e expansão por etapas.",
      ],
    },
  ];

  const faqs = [
    {
      q: "O VexiaRH funciona para empresas de qual porte?",
      a: "O VexiaRH é modular e pode ser implantado por etapas, atendendo desde times menores até estruturas maiores com áreas/departamentos.",
    },
    {
      q: "Dá para começar por um módulo e expandir depois?",
      a: "Sim. Você pode iniciar por reconhecimento, comunicação ou academy, e ativar outros módulos conforme a maturidade do RH e da liderança.",
    },
    {
      q: "Como fica a segurança e o controle de acesso?",
      a: "A plataforma trabalha com acesso corporativo e permissões por perfil. As visões e ações são controladas conforme o papel do usuário.",
    },
    {
      q: "Como é a implementação?",
      a: "Em geral, começamos pelo branding, estrutura organizacional e ativação dos módulos iniciais. Depois, configuramos campanhas, conteúdos e indicadores.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "VexiaRH",
    description:
      "Plataforma de cultura, performance e operações de RH: reconhecimento e incentivos, academy, comunicação interna, carreira, férias, ativos e analytics.",
    url: "https://www.vexiarh.com.br/comunicacao",
    applicationCategory: "BusinessApplication",
    offers: { "@type": "Offer", availability: "https://schema.org/PreOrder" },
    brand: { "@type": "Brand", name: "VexiaRH" },
  };

  return (
    <div className="flex flex-col min-h-screen bg-white pt-24">
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(jsonLd)}
      </script>

      <Header />

      {/* HERO */}
      <section
        id="hero"
        className="pt-16 pb-20 md:pt-24 md:pb-28"
        style={{
          background: "linear-gradient(135deg, #f7f9fb 0%, #ffffff 40%, #f7f9fb 100%)",
        }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="mb-4 text-[var(--color-accent)] tracking-widest font-black uppercase text-sm md:text-base">
                Plataforma VexiaRH
              </p>

              <h1 className="mb-6 text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.08] text-[var(--color-primary)]">
                Cultura, performance e operações de RH em um só lugar.
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed font-light">
                O VexiaRH conecta <strong>reconhecimento</strong>, <strong>aprendizado</strong>,{" "}
                <strong>comunicação interna</strong> e <strong>processos operacionais</strong> para que o RH tenha
                visibilidade, governança e impacto — com a identidade da sua empresa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  className="bg-[var(--color-accent)] hover:bg-[#d97a1d] text-white px-8 py-4 rounded-xl font-bold text-center transition-all shadow-lg hover:-translate-y-1"
                  href="#cta"
                >
                  Pedir uma demo
                </a>
                <a
                  className="bg-transparent hover:bg-gray-50 text-[var(--color-primary)] border-2 border-[var(--color-primary)] px-8 py-4 rounded-xl font-bold text-center transition-all"
                  href="#sessoes"
                >
                  Ver módulos
                </a>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 font-medium">
                <span>• White-label</span>
                <span>• Governança</span>
                <span>• Analytics</span>
                <span>• Implantação por etapas</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                <p className="mb-4 text-xl font-black text-[var(--color-primary)]">
                  Ideal para organizações que querem
                </p>

                <ul className="list-disc pl-5 space-y-3 text-gray-600 text-[15px] leading-relaxed">
                  <li>Elevar engajamento e cultura com reconhecimento consistente.</li>
                  <li>Padronizar aprendizado e onboarding com trilhas e certificados.</li>
                  <li>Organizar comunicação interna em um canal oficial.</li>
                  <li>Dar visibilidade para operação (férias, assets, pendências) com rastreabilidade.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES GRID */}
      <section id="sessoes" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[var(--color-primary)] mb-4 tracking-tight">
              Módulos do VexiaRH
            </h2>
            <p className="text-lg md:text-xl text-gray-500 font-light">
              Explore as áreas da plataforma. Cada módulo foi pensado para ser implantado por etapas, conforme sua
              maturidade e prioridade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {modules.map((item) => (
              <div key={item.title}>
                <div className="bg-[#f8fafc] border border-gray-200 p-4 rounded-2xl h-full shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-gradient-to-br from-slate-200 to-slate-300 h-48 rounded-xl mb-5 flex items-center justify-center text-slate-700 font-black text-center px-4">
                    Preview do módulo
                  </div>

                  <h3 className="text-xl font-black text-[var(--color-primary)] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
                    {item.text}
                  </p>

                  {item.anchor ? (
                    <a
                      href={item.anchor}
                      className="text-[var(--color-accent)] font-bold inline-block hover:-translate-y-0.5 transition-transform"
                    >
                      Ver detalhes →
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS */}
      {details.map((detail, index) => (
        <section
          key={detail.id}
          id={detail.id}
          className={`py-20 md:py-28 ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? "lg:grid-flow-col-dense lg:direction-rtl" : ""}`}>
              <div className={index % 2 !== 0 ? "lg:col-start-2" : ""}>
                <p className="mb-4 text-[var(--color-accent)] tracking-widest font-black uppercase text-sm md:text-base">
                  {detail.title}
                </p>
                <h3 className="text-3xl md:text-4xl font-black text-[var(--color-primary)] mb-6 leading-tight">
                  {detail.subtitle}
                </h3>

                <ul className="list-disc pl-5 space-y-3 text-gray-600 text-[15px] leading-relaxed mb-8">
                  {detail.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4 mt-3">
                  <a
                    className="bg-[var(--color-accent)] hover:bg-[#d97a1d] text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-md hover:-translate-y-0.5"
                    href="#cta"
                  >
                    Quero ver em ação
                  </a>
                  <a
                    className="bg-transparent hover:bg-gray-50 text-[var(--color-primary)] border-2 border-[var(--color-primary)] px-8 py-3.5 rounded-xl font-bold transition-all"
                    href="#sessoes"
                  >
                    Voltar aos módulos
                  </a>
                </div>
              </div>

              <div className={index % 2 !== 0 ? "lg:col-start-1" : ""}>
                <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl h-[320px] md:h-[400px] flex items-center justify-center text-slate-700 font-black text-center px-6 border border-slate-200 shadow-xl">
                  Imagem/print do módulo "{detail.title}"
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* OUTCOMES */}
      <section id="resultados" className="py-20 md:py-28 bg-[#f8fafc]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[var(--color-primary)] mb-4 tracking-tight">
              O que muda na prática
            </h2>
            <p className="text-lg md:text-xl text-gray-500 font-light">
              O VexiaRH organiza o “dia a dia” do RH e dá visibilidade para liderança — com menos ruído e mais clareza.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Engajamento mensurável",
                text: "Reconhecimento com regras, histórico e indicadores por área/período.",
              },
              {
                title: "Aprendizado com progresso real",
                text: "Trilhas, provas e certificados para padronizar onboarding e capacitação.",
              },
              {
                title: "Comunicação que alcança",
                text: "Canal oficial com curadoria e vitrine visual para campanhas internas.",
              },
              {
                title: "Operação sem planilhas",
                text: "Férias, assets e pendências com rastreabilidade e fluxo de aprovações.",
              },
            ].map((item) => (
              <div key={item.title}>
                <article className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full border-t-4 border-[var(--color-accent)]">
                  <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    {item.text}
                  </p>
                </article>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200">
              <p className="text-lg font-black text-[var(--color-primary)] mb-2">
                Prova social (opcional)
              </p>
              <p className="text-gray-600">
                Aqui você pode inserir logos, depoimentos e números (ex.: “X colaboradores ativos”, “Y treinamentos concluídos”)
                assim que tiver os dados e criativos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[var(--color-primary)] mb-4 tracking-tight">
              Perguntas frequentes
            </h2>
            <p className="text-lg md:text-xl text-gray-500 font-light">
              Dúvidas comuns de quem está avaliando a plataforma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {faqs.map((f) => (
              <div key={f.q}>
                <article className="p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-[#f8fafc] h-full">
                  <h3 className="text-xl font-black text-[var(--color-primary)] mb-3">
                    {f.q}
                  </h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    {f.a}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20 md:py-24 relative overflow-hidden bg-[var(--color-primary)]">
        {/* Background Graphic elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-[var(--color-accent)]/10 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-2/3 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                Quer ver o VexiaRH funcionando na prática?
              </h2>
              <p className="text-lg text-teal-50 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Fale com a gente e veja uma demo guiada com os módulos que fazem sentido para sua operação.
                Se você já tiver materiais (prints, mockups, identidade visual), nós aplicamos aqui para deixar a página 100% fiel.
              </p>
            </div>
            <div className="lg:w-1/3 flex flex-col items-center lg:items-end w-full">
              <a
                className="inline-flex items-center justify-center bg-[var(--color-accent)] hover:bg-[#d97a1d] text-white px-8 py-5 rounded-xl font-bold text-lg transition-all w-full sm:w-auto shadow-lg hover:shadow-xl hover:-translate-y-1 mb-3"
                href="mailto:contato@vexiarh.com.br"
              >
                Pedir demo por e-mail
              </a>
              <p className="text-sm text-teal-100/80 text-center lg:text-right">
                Preferir WhatsApp/Calendly? Podemos adicionar aqui também.
              </p>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}