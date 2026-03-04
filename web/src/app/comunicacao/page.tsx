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
      title: "Estrutura e Fundamentos da Plataforma",
      text: "White-label com a sua marca e autenticação corporativa segura (Google Workspace/Firebase) com regras de acesso.",
      anchor: "#fundamentos",
    },
    {
      title: "Comunicação Interna e Intranet",
      text: "Seu Hub principal com Feed ficial, atalhos rápidos e comunicação segmentada para o time.",
      anchor: "#comunicacao",
    },
    {
      title: "Reconhecimento & Incentivos",
      text: "Gestão inteligente de pontos, elogios em tempo real, loja de recompensas e campanhas sazonais.",
      anchor: "#reconhecimento",
    },
    {
      title: "Academy & Treinamentos",
      text: "Curadoria de cursos, trilhas de aprendizagem e onboarding, com provas e emissão de certificados.",
      anchor: "#academy",
    },
    {
      title: "Performance & Carreira",
      text: "Definição de OKRs, avaliações contínuas, registro de feedback e visibilidade completa das trilhas de crescimento.",
      anchor: "#performance",
    },
    {
      title: "Operações de RH",
      text: "Solicitações de férias, controle de ativos/equipamentos e um mural completo de vagas internas.",
      anchor: "#operacoes",
    },
    {
      title: "Pessoas & Estrutura Organizacional",
      text: "Diretório de colaboradores completo com perfis, contatos e organogramas da empresa.",
      anchor: "#pessoas",
    },
    {
      title: "Dashboards, Analytics & Relatórios",
      text: "Visão executiva com KPIs de engajamento, radar de pendências e métricas de campanhas e treinamentos.",
      anchor: "#analytics",
    },
  ];

  const details = [
    {
      id: "fundamentos",
      title: "Estrutura e Fundamentos",
      subtitle: "A base da sua plataforma com alta segurança e branding personalizado.",
      bullets: [
        "White-label & Branding: Personalização completa com a identidade da empresa (logo, cores, favicon, mensagens).",
        "Modularidade: Ativação e desativação de módulos por etapas, adaptando-se às suas necessidades.",
        "Autenticação Segura: Acesso corporativo integrado via Google Workspace utilizando Firebase.",
        "Controles de Acesso: Regras restritas baseadas em Perfis (Administrador, Gestor, Colaborador).",
        "Privacidade de Dados: Segmentação de dados e permissões isoladas por áreas e departamentos.",
      ],
    },
    {
      id: "comunicacao",
      title: "Comunicação Interna e Intranet",
      subtitle: "O Hub do colaborador (People Hub) para engajamento e comunicação oficial.",
      bullets: [
        "Feed Oficial: Canal centralizado e livre de ruídos para comunicados e campanhas internas com curadoria.",
        "Intranet e Links Rápidos: Hub prático do colaborador contendo atalhos, sistemas da empresa e políticas visíveis.",
        "Segmentação: Direcionamento inteligente de mensagens e conteúdos por áreas, departamentos ou squads.",
      ],
    },
    {
      id: "reconhecimento",
      title: "Reconhecimento & Incentivos",
      subtitle: "Elogios visíveis que geram valor real para sua equipe.",
      bullets: [
        "Gestão de Pontos e Cotas: Controle de orçamento de reconhecimento e histórico completo sem depender de planilhas.",
        "Reconhecimento Instantâneo na prática: Modelo Peer-to-peer ou Líder-liderado onde os elogios viram pontuação.",
        "Loja de Recompensas: Catálogo contendo fluxos de resgate (em análise, aprovado, entregue) e rastreamento seguro de pedidos.",
        "Campanhas Sazonais: Operacionalização de ações rápidas conectadas a metas e valores da sua cultura.",
      ],
    },
    {
      id: "academy",
      title: "Academy & Treinamentos",
      subtitle: "Desenvolvimento e capacitação acessíveis em um único portal.",
      bullets: [
        "Gestão Central de Cursos: Curadoria e administração de vídeos, conteúdos internos e normas (visão Admin).",
        "Trilhas e Onboarding: Estruturação consistente de caminhos de capacitação para novos colaboradores e progressão contínua.",
        "Avaliações e Certificados: Aplicações de provas online e emissão de certificados imediatos.",
        "Acompanhamento e visibilidade de progresso para a liderança avaliar lacunas de aprendizado.",
      ],
    },
    {
      id: "performance",
      title: "Performance & Carreira",
      subtitle: "Gestão focada em evolução com OKRs e feedback contínuo.",
      bullets: [
        "Metas e OKRs: Definição estratégica e acompanhamento frequente de resultados, com check-ins recorrentes.",
        "Avaliação Contínua: Registros de contatos 1-on-1, feedbacks qualitativos e histórico evolutivo do colaborador.",
        "Trilhas de Carreira: Visibilidade das etapas para promoção e planos de crescimento corporativo.",
      ],
    },
    {
      id: "operacoes",
      title: "Operações de RH",
      subtitle: "People Hub estendido para o dia a dia e rastreabilidade logística.",
      bullets: [
        "Férias e Licenças: Fluxos práticos de solicitação e rastreamento transparente das aprovações para o gestor e RH.",
        "Ativos e Equipamentos: Controle de inventário, empréstimo, devolução e manutenção de notebooks e periféricos.",
        "Vagas Internas (Mobilidade): Um mural para descoberta de oportunidades, exibindo requisitos necessários e status completo do processo seletivo.",
      ],
    },
    {
      id: "pessoas",
      title: "Pessoas & Estrutura Organizacional",
      subtitle: "Organização estrutural e informações à distância de um clique.",
      bullets: [
        "Diretório de Colaboradores estendido com dados essenciais, foto/avatar e visibilidade condicionada às suas permissões.",
        "Gestão da Estrutura: Visões por organogramas mapeando de pequenos squads até departamentos inteiros.",
        "Hub unificado para conectar membros do time, buscar referências ou gestores responsáveis de cada área.",
      ],
    },
    {
      id: "analytics",
      title: "Dashboards, Analytics & Relatórios",
      subtitle: "Visões que transformam interações em decisões estratégicas.",
      bullets: [
        "Visão Executiva e Operacional: KPIs fundamentais de pontuação, detecção de talentos ocultos e análise de lacunas.",
        "Radar de Pendências: Alertas proativos e rastreamento completo de histórico garantindo auditoria impecável.",
        "Métricas de Aprendizado: Relatórios claros apresentando percentual de sucesso de cursos, certificados emitidos e possíveis gargalos de treinamento.",
        "Revisão da Comunicação: Taxas de abertura, consumo de campanhas e visualizações de banners estruturais.",
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