import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const primary = "#005B63";
const accent = "#F18921";

export const metadata: Metadata = {
  title: "Conheça a Plataforma VexiaRH | Engajamento, Carreira e Operações",
  description:
    "Visão pública da VexiaRH: reconhecimento, loja, cotas, carreira, academy, comunicação, férias, analytics e mais. Veja cada módulo e peça uma demo.",
  openGraph: {
    title: "Conheça a Plataforma VexiaRH",
    description:
      "Landing com todas as funcionalidades: autenticação white-label, dashboard, reconhecimento, pontos e cotas, people, performance, academy, comunicação interna e mais.",
    type: "website",
  },
  alternates: {
    canonical: "/comunicacao",
  },
};

export default function Comunicacao() {
  const modules = [
    {
      title: "Autenticação & White‑label",
      text: "Login com Google corporativo e branding dinâmico (logo, cores, mensagens) configurável no Admin > Branding.",
      anchor: "#autenticacao",
    },
    {
      title: "Início / Dashboard",
      text: "Visão Admin x Colaborador, KPIs, radar de pendências, histórico de concessões e distribuição de pontos.",
      anchor: "#dashboard",
    },
    {
      title: "Reconhecimento & Loja",
      text: "Catálogo com CRUD, estoque e preços; resgates e fila de pedidos para colaboradores.",
      anchor: "#reconhecimento",
    },
    {
      title: "Pontos e Cotas",
      text: "Gestão de cotas distribuíveis, transferências e histórico (Admin > TransferQuotas, GrantsHistory).",
      anchor: "#pontos",
    },
    {
      title: "Pessoas & Perfis",
      text: "Lista/detalhe de colaboradores, perfil, permissões e departamentos.",
      anchor: "#pessoas",
    },
    {
      title: "Performance & Carreira",
      text: "Metas/OKRs, avaliações contínuas, trilhas de carreira e reflexões guiadas.",
      anchor: "#performance",
    },
    {
      title: "Academy & Treinamentos",
      text: "Cursos, provas, trilhas, certificados e administração completa no Admin.",
      anchor: "#academy",
    },
    {
      title: "Comunicação Interna",
      text: "Feed de comunicados, criação/curadoria e intranet.",
      anchor: "#comunicacao-interna",
    },
    {
      title: "Jobs Internos",
      text: "Vagas internas com listagem/detalhe e gestão no Admin > Internal Jobs.",
      anchor: "#jobs",
    },
    {
      title: "Ativos & Equipamentos",
      text: "Controle e logística de assets com administração dedicada.",
      anchor: "#ativos",
    },
    {
      title: "Férias & Licenças",
      text: "Solicitação, acompanhamento e aprovação de férias/licenças.",
      anchor: "#ferias",
    },
    {
      title: "Analytics & Relatórios",
      text: "Painéis e relatórios operacionais com dados agregados e insights.",
      anchor: "#analytics",
    },
    {
      title: "Intranet / Links Rápidos",
      text: "Home autenticada com atalhos e página pública de links se configurada.",
      anchor: "#intranet",
    },
    {
      title: "Outros utilitários",
      text: "Toasts, theming (dark/light), AppHeader/MainLayout, loaders e skeletons prontos.",
      anchor: "#utilitarios",
    },
  ];

  const details = [
    {
      id: "autenticacao",
      title: "Autenticação & White‑label",
      subtitle: "Login seguro + identidade da sua marca em minutos.",
      bullets: [
        "SSO com Google Workspace via Firebase Authentication (MFA opcional).",
        "Branding dinâmico: logo, favicon, cores, mensagens e KPIs em destaque.",
        "Feature toggles por tenant para mostrar/ocultar módulos.",
        "Ambientes separados (staging/produção) e presets em branding/default.",
        "Painel Admin > Branding: upload, paleta, mensagens e ativação imediata.",
      ],
    },
    {
      id: "dashboard",
      title: "Início / Dashboard",
      subtitle: "Tudo o que importa em um só olhar, para Admin e Colaborador.",
      bullets: [
        "Switch Admin x Colaborador direto no topo.",
        "KPIs: usuários ativos, pontos em circulação, admins, adesão.",
        "Radar de pendências: férias, resgates, cursos em rascunho, novos usuários.",
        "Histórico de concessões e distribuição de pontos por período/time.",
        "Cards configuráveis por tenant para refletir prioridades do cliente.",
      ],
    },
    {
      id: "reconhecimento",
      title: "Reconhecimento & Loja",
      subtitle: "Do elogio ao resgate, tudo rastreado e brandable.",
      bullets: [
        "Catálogo com CRUD, upload de imagem, estoque, preço e ativação (Admin > Catálogo).",
        "Página de resgates para colaboradores (Store/Redemptions) com status e tracking.",
        "Histórico e pendências de pedidos para aprovação/liberação.",
        "Regras de pontos e cotas integradas aos resgates.",
        "Pronto para cards de destaque de produtos na landing pública.",
      ],
    },
    {
      id: "pontos",
      title: "Pontos e Cotas",
      subtitle: "Governança de budget de reconhecimento sem planilhas paralelas.",
      bullets: [
        "Gestão de cotas distribuíveis por time/período.",
        "Fluxos de transferências com aprovações e histórico auditável.",
        "Admin > TransferQuotas e feed de movimentações.",
        "Componente AdminGrantsHistory para transparência fina.",
        "Alertas quando times estão sem saldo ou subutilizando.",
      ],
    },
    {
      id: "pessoas",
      title: "Pessoas & Perfis",
      subtitle: "Organização e acessos sob controle.",
      bullets: [
        "Lista e detalhe de colaboradores (/people, /people/[uid]).",
        "Perfil do usuário (/profile) com dados, permissões e status.",
        "Gestão de acessos e roles em Admin > Access.",
        "Departamentos e squads para segmentar comunicação e cotas.",
        "Base pronta para exibir fotos/avatars quando você subir as imagens.",
      ],
    },
    {
      id: "performance",
      title: "Performance & Carreira",
      subtitle: "OKRs, avaliações contínuas e carreira no mesmo fluxo.",
      bullets: [
        "Metas/OKRs e check-ins em /performance.",
        "Avaliações contínuas com feedback e status.",
        "Trilhas de carreira em /career com etapas visíveis.",
        "Reflexões guiadas (/reflections e Admin > Reflections).",
        "Podemos destacar cases com imagens quando você enviar os mockups.",
      ],
    },
    {
      id: "academy",
      title: "Academy & Treinamentos",
      subtitle: "Upskilling com provas, trilhas e certificados.",
      bullets: [
        "Catálogo de cursos (/academy, /academy/[courseId]).",
        "Provas/trilhas e emissão de certificados.",
        "Admin > Academy e Admin > Trainings para curadoria e publicação.",
        "Progresso e conclusão visíveis no dashboard.",
        "Espaço para posters dos cursos (placeholder de imagem incluso).",
      ],
    },
    {
      id: "comunicacao-interna",
      title: "Comunicação Interna",
      subtitle: "Canal oficial para todo mundo, com curadoria.",
      bullets: [
        "Feed de comunicados oficiais (CommunicationFeed).",
        "Criação e curadoria no Admin > Communications.",
        "Tabs de criação (CreateCommunicationTabs) para tipos diferentes.",
        "Intranet com comunicados, links e rituais de clima.",
        "Pronto para thumbnails e banners quando você enviar as artes.",
      ],
    },
    {
      id: "jobs",
      title: "Jobs Internos",
      subtitle: "Mobilidade interna organizada e visível.",
      bullets: [
        "Listagem/detalhe de vagas (/internal-jobs, /internal-jobs/[jobId]).",
        "Gestão em Admin > Internal Jobs (status, responsáveis, deadlines).",
        "Campos para requisitos, benefícios e call-to-action de candidatura.",
        "Integração com perfis para candidaturas rápidas.",
        "Placeholder para artes de vagas-chave na landing.",
      ],
    },
    {
      id: "ativos",
      title: "Ativos & Equipamentos",
      subtitle: "Logística de equipamentos sem caos.",
      bullets: [
        "Módulo /assets para controle de ativos e entregas.",
        "Admin > Assets para cadastros, status e devoluções.",
        "Histórico de movimentações e responsáveis.",
        "Campos para fotos do ativo (trocar placeholder quando tiver imagens).",
        "Alertas para devolução e manutenção preventiva.",
      ],
    },
    {
      id: "ferias",
      title: "Férias & Licenças",
      subtitle: "Menos planilha, mais transparência para o colaborador.",
      bullets: [
        "Solicitação e acompanhamento em /users/vacation.",
        "Aprovação e gestão em Admin > Vacations.",
        "Pendências entram no radar do dashboard.",
        "Histórico de gozo e saldo por colaborador.",
        "Bloco pronto para colocar a arte do fluxo de aprovação.",
      ],
    },
    {
      id: "analytics",
      title: "Analytics & Relatórios",
      subtitle: "Decisões baseadas em dados de gente.",
      bullets: [
        "Painéis em Admin > Analytics e relatórios em Admin > Reports.",
        "Dados agregados de engajamento, cursos, pontos e comunicações.",
        "Insights rápidos destacados no dashboard.",
        "Exportação/visualização com filtros por time/departamento.",
        "Espaço para gráficos/imagens reais quando prontos.",
      ],
    },
    {
      id: "intranet",
      title: "Intranet / Links Rápidos",
      subtitle: "Atalhos e comunicação em um hub único.",
      bullets: [
        "Home autenticada com perfil, feed e atalhos configuráveis.",
        "Página pública de links (/links) opcional para campanhas.",
        "Resumos diários/semanais podem ser destacados aqui.",
        "Integração com modo Admin para edição rápida.",
        "Placeholder para mosaico de links/branded quando tiver imagens.",
      ],
    },
    {
      id: "utilitarios",
      title: "Outros utilitários",
      subtitle: "Infra pronta para evoluir rápido.",
      bullets: [
        "Toasts/sonner, theming dark/light e MainLayout com AdminMode.",
        "Controle de adminMode no localStorage para alternar visões.",
        "Loaders e skeletons prontos para carregamentos suaves.",
        "Componentização de header/footer para páginas públicas.",
        "Tudo preparado para receber seus assets visuais.",
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "VexiaRH",
    description:
      "Sistema operacional de engajamento com reconhecimento, loja, cotas, people, performance, academy, comunicação, férias e analytics.",
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
                        <Link href="/">
                          <Image id="logo_img" src="/demo-one-page/agency-02/images/logo.png" alt="VexiaRH" width={148} height={42} priority />
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
                          <a href="#sessoes">Sessões</a>
                        </li>
                        <li>
                          <a href="#jornada">Jornada</a>
                        </li>
                        <li>
                          <a href="#cta">Próximos passos</a>
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
              <p className="mb-10" style={{ color: accent, letterSpacing: 1, fontWeight: 700, textTransform: "uppercase" }}>
                Conheça a Plataforma VexiaRH
              </p>
              <h1 className="mb-20" style={{ fontWeight: 800, color: primary }}>
                A página pública que conta tudo o que o sistema faz.
              </h1>
              <p className="lead mb-20">
                Estruturamos uma landing modular: cada sessão corresponde a uma funcionalidade real (reconhecimento, academy, férias, etc.).
                As imagens são espaços reservados para você substituir pelos criativos finais.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <a className="button" style={{ background: accent, borderColor: accent }} href="#sessoes">
                  Ver sessões
                </a>
                <a className="button button-border" style={{ borderColor: primary, color: primary }} href="#jornada">
                  Ver jornada
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  border: "1px solid #e2e8f0",
                  padding: 20,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                }}
              >
                <p className="mb-2" style={{ fontWeight: 700, color: primary }}>
                  Como usar esta página
                </p>
                <ul className="mb-0" style={{ paddingLeft: 18, color: "#475467", lineHeight: 1.6 }}>
                  <li>Landing pública: âncoras por funcionalidade.</li>
                  <li>Blocos visuais com espaço para você subir imagens.</li>
                  <li>Texto já alinhado ao que o produto entrega hoje.</li>
                  <li>CTA final para contato ou demo.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sessoes" className="page-section-ptb" style={{ background: "#fff" }}>
        <div className="container">
          <div className="row mb-40">
            <div className="col-lg-8">
              <h2 className="mb-10" style={{ color: primary }}>
                Sessões da plataforma
              </h2>
              <p className="lead mb-0">Cada bloco abaixo corresponde a uma área já existente no sistema. Substitua o placeholder pela imagem que você produzir.</p>
            </div>
          </div>
          <div className="row gy-4">
            {modules.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.title}>
                <div
                  className="p-3 h-100 shadow-sm"
                  style={{
                    borderRadius: 12,
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div
                    style={{
                      borderRadius: 10,
                      background: "linear-gradient(135deg, #e2e8f0, #cbd5e1)",
                      height: 180,
                      marginBottom: 14,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#334155",
                      fontWeight: 700,
                      textAlign: "center",
                      padding: "0 12px",
                    }}
                  >
                    Coloque aqui sua imagem de “{item.title}”
                  </div>
                  <p className="mb-1" style={{ fontWeight: 700, color: primary }}>
                    {item.title}
                  </p>
                  <p className="mb-0" style={{ color: "#475467" }}>
                    {item.text}
                  </p>
                  {item.anchor ? (
                    <a
                      href={item.anchor}
                      style={{ color: accent, fontWeight: 600, display: "inline-block", marginTop: 8 }}
                    >
                      Saiba mais
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {details.map((detail) => (
        <section key={detail.id} id={detail.id} className="page-section-ptb" style={{ background: "#fff" }}>
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <p className="mb-10" style={{ color: accent, letterSpacing: 1, fontWeight: 700, textTransform: "uppercase" }}>
                  {detail.title}
                </p>
                <h2 className="mb-15" style={{ color: primary, fontWeight: 800 }}>
                  {detail.subtitle}
                </h2>
                <ul style={{ color: "#475467", lineHeight: 1.6, paddingLeft: 18 }}>
                  {detail.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  <a className="button" style={{ background: accent, borderColor: accent }} href="mailto:contato@vexiarh.com.br">
                    Falar sobre {detail.title}
                  </a>
                  <a className="button button-border" style={{ borderColor: primary, color: primary }} href="#cta">
                    Ver demo completa
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  style={{
                    borderRadius: 14,
                    background: "linear-gradient(135deg, #e2e8f0, #cbd5e1)",
                    height: 320,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#334155",
                    fontWeight: 700,
                    textAlign: "center",
                    padding: "0 18px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                  }}
                >
                  Placeholder para mock de “{detail.title}” (trocar pela sua imagem final)
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section id="jornada" className="page-section-ptb" style={{ background: "#f7f9fb" }}>
        <div className="container">
          <div className="row mb-40">
            <div className="col-lg-8">
              <h2 className="mb-10" style={{ color: primary }}>
                Jornada da comunicação na landing
              </h2>
              <p className="lead mb-0">Como contamos a história da plataforma para visitantes e leads.</p>
            </div>
          </div>
          <div className="row gy-4">
            {[
              {
                title: "1) Apresentar valor",
                text: "Hero deixa claro: engajamento, performance, operações em um único lugar.",
              },
              {
                title: "2) Navegar pelas sessões",
                text: "O visitante percorre cada funcionalidade (cards acima) com imagem ilustrativa.",
              },
              {
                title: "3) Ver a jornada",
                text: "Explicamos rapidamente como empresas usam: ativar, comunicar, medir.",
              },
              {
                title: "4) Converter",
                text: "CTA final para demo ou contato, com prova social a ser adicionada quando as imagens estiverem prontas.",
              },
            ].map((item) => (
              <div className="col-lg-3 col-md-6" key={item.title}>
                <div className="p-4 h-100 bg-white shadow-sm" style={{ borderRadius: 12, borderTop: `3px solid ${accent}` }}>
                  <h5 style={{ color: primary, marginBottom: 8 }}>{item.title}</h5>
                  <p className="mb-0" style={{ color: "#475467" }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="page-section-ptb text-white" style={{ background: primary }}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <h2 className="mb-15">Pronto para trocar os mockups pelas suas imagens?</h2>
              <p className="mb-0">
                Envie os criativos e ajusto os blocos para ficarem fiéis ao layout final. Se quiser, podemos mover tudo para o CMS interno ou
                Firebase Storage mais tarde.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a className="button" style={{ background: accent, borderColor: accent }} href="mailto:contato@vexiarh.com.br">
                Mandar os arquivos
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
