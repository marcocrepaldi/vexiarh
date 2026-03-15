import Image from "next/image";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { CTA } from "@/components/CTA";
import {
  Bot,
  BrainCircuit,
  LineChart,
  MessageSquareHeart,
  FileText,
  Zap,
  Target,
  Users,
  ShieldCheck,
  TrendingUp,
  Clock,
  Palmtree,
  Laptop,
  CircleDollarSign,
  FolderOpen,
  Network,
  Building2,
  Radar
} from "lucide-react";

export const metadata: Metadata = {
  title: "A.I. na VexiaRH | Inteligência Artificial no RH",
  description:
    "Conheca como a VexiaRH aplica inteligencia artificial para apoiar analise, priorizacao e automacao na operacao de RH.",
  openGraph: {
    title: "Inteligência Artificial na VexiaRH",
    description:
      "A IA atua como camada de apoio para RH e lideranca, conectando dados, sinais e recomendacoes acionaveis.",
    type: "website",
  },
  alternates: {
    canonical: "/comunicacao",
  },
};

export default function ComunicacaoIA() {
  const aplicacoes = [
    {
      icon: Target,
      title: "AI Performance Coach",
      text: "A IA analisa metas, check-ins, feedbacks e historico de desenvolvimento para apoiar lideres e colaboradores na leitura da performance e dos proximos passos.",
      link: "/ai-performance-coach",
    },
    {
      icon: TrendingUp,
      title: "AI Career Coach",
      text: "A plataforma utiliza IA para sugerir caminhos de desenvolvimento, competencias prioritarias e acoes de carreira com base no contexto da empresa.",
      link: "/ai-career-coach",
    },
    {
      icon: LineChart,
      title: "Insights automáticos para RH",
      text: "A IA cruza dados de metas, treinamentos, engajamento e pesquisas internas para gerar leitura mais rapida de tendencias, riscos e oportunidades.",
      link: "/insights-rh",
    },
    {
      icon: MessageSquareHeart,
      title: "Análise de Clima e Sentimento",
      text: "Nas pesquisas internas, a IA analisa respostas abertas e identifica padroes de sentimento, temas recorrentes e sinais de desengajamento.",
      link: "/analise-clima",
    },
    {
      icon: FileText,
      title: "Automação de Análise de Documentos",
      text: "A plataforma usa IA para interpretar comprovantes, laudos e documentos administrativos, acelerando triagem e reduzindo trabalho manual.",
      link: "/automacao-documentos",
    },
    {
      icon: Radar,
      title: "Radar Inteligente",
      text: "O Radar ajuda a priorizar acoes ao notificar lideres sobre pendencias e reforcar rotinas importantes para colaboradores.",
      link: "/radar-inteligente",
    },
  ];

  const operacoes = [
    {
      icon: Users,
      title: "Controle do Time",
      text: "Gestão completa de acessos corporativos, cotas de reconhecimento e base de dados do colaborador.",
      link: "/controle-do-time",
    },
    {
      icon: Network,
      title: "Organograma Dinâmico",
      text: "Visão estrutural imediata. Navegue por times, lideranças e departamentos em uma interface interativa.",
      link: "/organograma",
    },
    {
      icon: Clock,
      title: "Controle de Ponto na Web",
      text: "Registro de jornada com geolocalizacao, tratamento de excecoes e apoio a rotinas fiscais do REP-P.",
      link: "/controle-de-ponto",
    },
    {
      icon: Palmtree,
      title: "Central de Férias",
      text: "Fluxos de aprovação logística de férias e licenças integrando liderados, líderes e o corporativo.",
      link: "/central-de-ferias",
    },
    {
      icon: Laptop,
      title: "Gestão de Ativos",
      text: "Controle de entrega, manutenção e recolhimento de hardwares (notebooks, etc) entregues aos funcionários.",
      link: "/gestao-de-ativos",
    },
    {
      icon: CircleDollarSign,
      title: "Gestão de Folha e Reembolsos",
      text: "Backoffice para provisão financeira, aprovação de reembolsos corporativos e dados consolidados para Folha de Pagamentos.",
      link: "/folha-reembolsos",
    },
    {
      icon: FolderOpen,
      title: "Repositório de Documentos",
      text: "Repositorio documental ligado ao cadastro do colaborador, com controle de acesso e organizacao por categoria.",
      link: "/repositorio-documentos",
    },
    {
      icon: Building2,
      title: "Controle de Fornecedores",
      text: "Gestão centralizada de parceiros, recebedores, empresas terceiras e serviços que dão suporte à operação geral.",
      link: "/controle-fornecedores",
    }
  ];

  const beneficios = [
    { icon: Zap, label: "Reduzir tarefas manuais e repetitivas do RH" },
    { icon: BrainCircuit, label: "Gerar leitura acionavel com menos tempo de analise" },
    { icon: ShieldCheck, label: "Apoiar decisoes de lideranca com mais contexto" },
    { icon: Users, label: "Acelerar acompanhamento de desenvolvimento e performance" },
    { icon: Bot, label: "Conectar IA a rotinas reais da operacao" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-24 font-sans">
      <Header />

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pt-28 md:pb-32 overflow-hidden bg-white">
        {/* Decorative Grid and Glossy shapes */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] mix-blend-multiply -z-0"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] mix-blend-multiply -z-0"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Left Copy */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-[var(--color-primary)] font-bold text-sm uppercase tracking-wider mb-6">
                <BrainCircuit size={18} />
                <span>IA aplicada ao RH</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.1] text-slate-900 mb-6 tracking-tight">
                Inteligencia Artificial conectada
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]"> a rotina</span> de RH.
              </h1>

              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed font-light">
                A VexiaRH aplica inteligencia artificial para <strong>apoiar analise, recomendacao e priorizacao</strong>,
                transformando dados da plataforma em acoes mais claras para RH e lideranca.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#aplicacoes"
                  className="bg-[var(--color-primary)] hover:bg-teal-900 text-white px-8 py-4 rounded-xl font-bold text-center transition-all shadow-lg hover:-translate-y-1"
                >
                  Conheça as Aplicações
                </a>
                <a
                  href="#beneficios"
                  className="bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-center transition-all shadow-sm"
                >
                  Benefícios da IA
                </a>
              </div>
            </div>

            {/* Right Image/Mockup */}
            <div className="relative h-[400px] md:h-[500px] w-full lg:w-[120%] lg:-mr-[20%] z-10 hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-orange-500/20 rounded-3xl blur-2xl transform rotate-3"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-white/40 backdrop-blur-md transform -rotate-2 hover:rotate-0 transition-all duration-700">
                <Image
                  src="/vexiarh-ai-dashboard.png"
                  alt="Dashboard IA na plataforma VexiaRH"
                  fill
                  className="object-cover object-left-top"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* APLICATTIONS SECTION */}
      <section id="aplicacoes" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
              Onde a IA entra na plataforma
            </h2>
            <p className="text-lg text-slate-600 font-light">
              A proposta nao e adicionar uma tecnologia isolada, e sim usar IA para apoiar rotinas que ja fazem parte da operacao de pessoas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aplicacoes.map((app, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                <div className="w-14 h-14 bg-teal-50 text-[var(--color-primary)] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                  <app.icon size={28} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">{app.title}</h3>
                <p className="text-slate-600 leading-relaxed text-[15px] flex-grow">{app.text}</p>
                {app.link && (
                  <a href={app.link} className="inline-flex items-center mt-6 text-[var(--color-primary)] font-bold hover:text-[var(--color-accent)] transition-colors">
                    Saber mais <span className="ml-1">→</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPERACOES LOGISTICAS SECTION */}
      <section id="operacoes" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-[var(--color-accent)] font-bold text-xs uppercase tracking-wider mb-4">
              <span>Nativo na Plataforma</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
              Operações e Backoffice Consolidado
            </h2>
            <p className="text-lg text-slate-600 font-light">
              A IA ganha valor quando esta conectada a uma base operacional unica. Por isso a VexiaRH reune fluxos de ponta a ponta no mesmo ambiente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {operacoes.map((item, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-slate-300 hover:bg-slate-100 transition-colors group flex flex-col h-full">
                <div className="w-12 h-12 bg-white text-[var(--color-primary)] rounded-xl flex items-center justify-center mb-5 shadow-sm border border-slate-100">
                  <item.icon size={24} strokeWidth={2.5} />
                </div>
                <h3 className="text-[17px] font-black tracking-tight text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 font-light text-sm leading-relaxed mb-4 flex-grow">{item.text}</p>
                {item.link && (
                  <a href={item.link} className="inline-flex items-center text-[var(--color-primary)] font-bold hover:text-[var(--color-accent)] transition-colors text-sm mt-auto">
                    Saber mais <span className="ml-1">→</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENFITS SECTION WITH ABSTRACT IMAGE */}
      <section id="beneficios" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Visual Column */}
            <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl h-[500px] border border-slate-100 group">
              <Image
                src="/vexiarh-ai-network.png"
                alt="Estrutura de IA e Analytics VexiaRH"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white font-bold text-xl drop-shadow-md">
                  Dados conectados para apoiar rotina, leitura e decisao.
                </p>
              </div>
            </div>

            {/* List Column */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                O impacto da IA quando ela nasce integrada
              </h2>
              <p className="text-xl text-slate-600 font-light mb-10">
                Quando a IA esta ligada aos modulos e dados reais da operacao, ela deixa de ser conceito e passa a apoiar o que mais importa: <strong>execucao e pessoas</strong>.
              </p>

              <div className="space-y-6">
                {beneficios.map((ben, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="w-12 h-12 flex-shrink-0 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center shadow-md">
                      <ben.icon size={22} />
                    </div>
                    <span className="text-slate-800 font-semibold md:text-lg">{ben.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <a
                  href="#cta"
                  className="inline-block bg-[var(--color-primary)] hover:bg-teal-900 text-white px-10 py-4 rounded-xl font-bold text-center transition-all shadow-lg hover:-translate-y-1"
                >
                  Agendar demonstracao
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
