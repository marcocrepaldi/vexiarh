import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

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
    <div className="wrapper">
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(jsonLd)}
      </script>

      <header id="header" className="header default text-dark">
        <div className="menu" id="onepagenav">
          <nav id="menu" className="mega-menu">
            <section className="menu-list-items">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12 position-relative d-flex align-items-center justify-content-between">
                    <ul className="menu-logo mb-0">
                      <li>
                        <Link href="/" aria-label="Ir para a página inicial">
                          <Image
                            id="logo_img"
                            src="/demo-one-page/agency-02/images/logo.png"
                            alt="VexiaRH"
                            width={148}
                            height={42}
                            priority
                          />
                        </Link>
                      </li>
                    </ul>
                    <div className="menu-bar">
                      <ul className="menu-links mb-0">
                        <li>
                          <Link href="/">Início</Link>
                        </li>
                        <li className="active">
                          <a href="#hero">Conheça a Plataforma</a>
                        </li>
                        <li>
                          <a href="#sessoes">Módulos</a>
                        </li>
                        <li>
                          <a href="#resultados">Resultados</a>
                        </li>
                        <li>
                          <a href="#faq">FAQ</a>
                        </li>
                        <li>
                          <a href="#cta">Falar com a VexiaRH</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="page-section-ptb"
        style={{
          paddingTop: 140,
          background: "linear-gradient(135deg, #f7f9fb 0%, #ffffff 40%, #f7f9fb 100%)",
        }}
      >
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <p
                className="mb-10"
                style={{ color: accent, letterSpacing: 1, fontWeight: 800, textTransform: "uppercase" }}
              >
                Plataforma VexiaRH
              </p>

              <h1 className="mb-20" style={{ fontWeight: 900, color: primary, lineHeight: 1.08 }}>
                Cultura, performance e operações de RH em um só lugar.
              </h1>

              <p className="lead mb-20" style={{ color: "#475467" }}>
                O VexiaRH conecta <strong>reconhecimento</strong>, <strong>aprendizado</strong>,{" "}
                <strong>comunicação interna</strong> e <strong>processos operacionais</strong> para que o RH tenha
                visibilidade, governança e impacto — com a identidade da sua empresa.
              </p>

              <div className="d-flex flex-wrap gap-2">
                <a className="button" style={{ background: accent, borderColor: accent }} href="#cta">
                  Pedir uma demo
                </a>
                <a className="button button-border" style={{ borderColor: primary, color: primary }} href="#sessoes">
                  Ver módulos
                </a>
              </div>

              <div className="d-flex flex-wrap gap-2 mt-3" style={{ color: "#667085", fontSize: 14 }}>
                <span>• White-label</span>
                <span>• Governança</span>
                <span>• Analytics</span>
                <span>• Implantação por etapas</span>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  border: "1px solid #e2e8f0",
                  padding: 20,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                }}
              >
                <p className="mb-2" style={{ fontWeight: 800, color: primary }}>
                  Ideal para organizações que querem
                </p>

                <ul className="mb-0" style={{ paddingLeft: 18, color: "#475467", lineHeight: 1.7 }}>
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
      <section id="sessoes" className="page-section-ptb" style={{ background: "#fff" }}>
        <div className="container">
          <div className="row mb-40">
            <div className="col-lg-8">
              <h2 className="mb-10" style={{ color: primary, fontWeight: 900 }}>
                Módulos do VexiaRH
              </h2>
              <p className="lead mb-0" style={{ color: "#475467" }}>
                Explore as áreas da plataforma. Cada módulo foi pensado para ser implantado por etapas, conforme sua
                maturidade e prioridade.
              </p>
            </div>
          </div>

          <div className="row gy-4">
            {modules.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.title}>
                <div
                  className="p-3 h-100 shadow-sm"
                  style={{
                    borderRadius: 14,
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div
                    style={{
                      borderRadius: 12,
                      background: "linear-gradient(135deg, #e2e8f0, #cbd5e1)",
                      height: 180,
                      marginBottom: 14,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#334155",
                      fontWeight: 800,
                      textAlign: "center",
                      padding: "0 12px",
                    }}
                    aria-hidden="true"
                  >
                    Preview do módulo
                  </div>

                  <p className="mb-1" style={{ fontWeight: 900, color: primary }}>
                    {item.title}
                  </p>

                  <p className="mb-0" style={{ color: "#475467" }}>
                    {item.text}
                  </p>

                  {item.anchor ? (
                    <a href={item.anchor} style={{ color: accent, fontWeight: 700, display: "inline-block", marginTop: 10 }}>
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
      {details.map((detail) => (
        <section key={detail.id} id={detail.id} className="page-section-ptb" style={{ background: "#fff" }}>
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <p
                  className="mb-10"
                  style={{ color: accent, letterSpacing: 1, fontWeight: 900, textTransform: "uppercase" }}
                >
                  {detail.title}
                </p>
                <h2 className="mb-15" style={{ color: primary, fontWeight: 900 }}>
                  {detail.subtitle}
                </h2>

                <ul style={{ color: "#475467", lineHeight: 1.75, paddingLeft: 18 }}>
                  {detail.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="d-flex flex-wrap gap-2 mt-3">
                  <a className="button" style={{ background: accent, borderColor: accent }} href="#cta">
                    Quero ver em ação
                  </a>
                  <a className="button button-border" style={{ borderColor: primary, color: primary }} href="#sessoes">
                    Voltar aos módulos
                  </a>
                </div>
              </div>

              <div className="col-lg-6">
                <div
                  style={{
                    borderRadius: 16,
                    background: "linear-gradient(135deg, #e2e8f0, #cbd5e1)",
                    height: 320,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#334155",
                    fontWeight: 900,
                    textAlign: "center",
                    padding: "0 18px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                  }}
                >
                  Imagem/print do módulo “{detail.title}”
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* OUTCOMES */}
      <section id="resultados" className="page-section-ptb" style={{ background: "#f7f9fb" }}>
        <div className="container">
          <div className="row mb-40">
            <div className="col-lg-8">
              <h2 className="mb-10" style={{ color: primary, fontWeight: 900 }}>
                O que muda na prática
              </h2>
              <p className="lead mb-0" style={{ color: "#475467" }}>
                O VexiaRH organiza o “dia a dia” do RH e dá visibilidade para liderança — com menos ruído e mais clareza.
              </p>
            </div>
          </div>

          <div className="row gy-4">
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
              <div className="col-lg-3 col-md-6" key={item.title}>
                <div className="p-4 h-100 bg-white shadow-sm" style={{ borderRadius: 14, borderTop: `3px solid ${accent}` }}>
                  <h5 style={{ color: primary, marginBottom: 8, fontWeight: 900 }}>{item.title}</h5>
                  <p className="mb-0" style={{ color: "#475467", lineHeight: 1.65 }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-4">
            <div className="col-lg-12">
              <div
                className="p-4 bg-white shadow-sm"
                style={{ borderRadius: 14, border: "1px solid #e2e8f0" }}
              >
                <p className="mb-1" style={{ fontWeight: 900, color: primary }}>
                  Prova social (opcional)
                </p>
                <p className="mb-0" style={{ color: "#475467" }}>
                  Aqui você pode inserir logos, depoimentos e números (ex.: “X colaboradores ativos”, “Y treinamentos concluídos”)
                  assim que tiver os dados e criativos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="page-section-ptb" style={{ background: "#fff" }}>
        <div className="container">
          <div className="row mb-40">
            <div className="col-lg-8">
              <h2 className="mb-10" style={{ color: primary, fontWeight: 900 }}>
                Perguntas frequentes
              </h2>
              <p className="lead mb-0" style={{ color: "#475467" }}>
                Dúvidas comuns de quem está avaliando a plataforma.
              </p>
            </div>
          </div>

          <div className="row gy-3">
            {faqs.map((f) => (
              <div className="col-lg-6" key={f.q}>
                <div className="p-4 shadow-sm" style={{ borderRadius: 14, border: "1px solid #e2e8f0" }}>
                  <p className="mb-2" style={{ fontWeight: 900, color: primary }}>
                    {f.q}
                  </p>
                  <p className="mb-0" style={{ color: "#475467", lineHeight: 1.7 }}>
                    {f.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="page-section-ptb text-white" style={{ background: primary }}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <h2 className="mb-15" style={{ fontWeight: 900 }}>
                Quer ver o VexiaRH funcionando na prática?
              </h2>
              <p className="mb-0" style={{ opacity: 0.95, lineHeight: 1.7 }}>
                Fale com a gente e veja uma demo guiada com os módulos que fazem sentido para sua operação.
                Se você já tiver materiais (prints, mockups, identidade visual), nós aplicamos aqui para deixar a página 100% fiel.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a className="button" style={{ background: accent, borderColor: accent }} href="mailto:contato@vexiarh.com.br">
                Pedir demo por e-mail
              </a>
              <div style={{ marginTop: 10, fontSize: 13, opacity: 0.9 }}>
                Preferir WhatsApp/Calendly? Podemos adicionar aqui também.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}