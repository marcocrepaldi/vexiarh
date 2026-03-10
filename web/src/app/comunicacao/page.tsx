import Image from "next/image";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
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
  Building2
} from "lucide-react";

export const metadata: Metadata = {
  title: "A.I. na VexiaRH | Inteligência Artificial no RH",
  description:
    "A VexiaRH utiliza inteligência artificial para transformar dados de gestão de pessoas em insights, recomendações e automações estratégicas.",
  openGraph: {
    title: "Inteligência Artificial na VexiaRH",
    description:
      "A IA atua como um copiloto para RH e liderança, oferecendo suporte para decisões mais rápidas e estratégicas.",
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
      text: "A IA analisa metas, check-ins, feedbacks e histórico de desenvolvimento para gerar orientações personalizadas de performance para colaboradores e gestores. Isso ajuda a identificar pontos de melhoria, acompanhar a evolução e apoiar os planos de desenvolvimento (PDIs).",
    },
    {
      icon: TrendingUp,
      title: "AI Career Coach",
      text: "A plataforma utiliza IA para apoiar o crescimento profissional dos colaboradores, sugerindo caminhos de desenvolvimento, competências a evoluir e as melhores ações para progresso efetivo de carreira dentro da empresa.",
    },
    {
      icon: LineChart,
      title: "Insights automáticos para RH",
      text: "A IA analisa dados de toda a plataforma — como metas, treinamentos, engajamento e pesquisas internas — e gera relatórios automáticos e insights estratégicos para o RH e a liderança, identificando tendências e oportunidades de melhoria reais.",
    },
    {
      icon: MessageSquareHeart,
      title: "Análise de Clima e Sentimento",
      text: "Nas pesquisas internas (pulse surveys), a IA é capaz de analisar as respostas e comentários abertos para identificar padrões de sentimento, o clima organizacional e detectar organicamente possíveis riscos sistêmicos de desengajamento.",
    },
    {
      icon: FileText,
      title: "Automação de Análise de Documentos",
      text: "A plataforma utiliza IA para interpretar documentos enviados pelos colaboradores, como comprovantes, laudos ou arquivos administrativos, facilitando os processos burocráticos de RH e reduzindo drasticamente o trabalho puramente manual.",
    },
  ];

  const operacoes = [
    {
      icon: Users,
      title: "Controle do Time",
      text: "Gestão completa de acessos corporativos, cotas de reconhecimento e base de dados do colaborador."
    },
    {
      icon: Network,
      title: "Organograma Dinâmico",
      text: "Visão estrutural imediata. Navegue por times, lideranças e departamentos em uma interface interativa."
    },
    {
      icon: Clock,
      title: "Controle de Ponto",
      text: "Registro de jornada fluido que permite gestão rápida de exceções, espelhos de ponto e banco de horas."
    },
    {
      icon: Palmtree,
      title: "Central de Férias",
      text: "Fluxos de aprovação logística de férias e licenças integrando liderados, líderes e o corporativo."
    },
    {
      icon: Laptop,
      title: "Gestão de Ativos",
      text: "Controle de entrega, manutenção e recolhimento de hardwares (notebooks, etc) entregues aos funcionários."
    },
    {
      icon: CircleDollarSign,
      title: "Gestão de Folha e Reembolsos",
      text: "Backoffice para provisão financeira, aprovação de reembolsos corporativos e dados consolidados para Folha de Pagamentos."
    },
    {
      icon: FolderOpen,
      title: "Repositório de Documentos",
      text: "O 'Harper Box'. Cofre digital de contratos, laudos e integrações que o RH armazena na ficha do funcionário."
    },
    {
      icon: Building2,
      title: "Controle de Fornecedores",
      text: "Gestão centralizada de parceiros, recebedores, empresas terceiras e serviços que dão suporte à operação geral."
    }
  ];

  const beneficios = [
    { icon: Zap, label: "Reduzir tarefas manuais e operacionais do RH" },
    { icon: BrainCircuit, label: "Gerar análises estratégicas de forma automática" },
    { icon: ShieldCheck, label: "Apoiar decisões críticas de liderança com dados" },
    { icon: Users, label: "Acelerar e otimizar o desenvolvimento dos colaboradores" },
    { icon: Bot, label: "Melhorar o engajamento e a experiência fluida no trabalho" },
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
                <span>O Futuro da Gestão de Pessoas</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.1] text-slate-900 mb-6 tracking-tight">
                Inteligência Artificial atuando como
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]"> seu Copiloto</span> de RH.
              </h1>

              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed font-light">
                A VexiaRH utiliza inteligência artificial de ponta para <strong>transformar dados de gestão em insights</strong>,
                recomendações e automações que ajudam empresas a melhorarem drasticamente o engajamento,
                o desenvolvimento e a performance dos seus colaboradores.
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
              Principais Vocações da IA na Plataforma
            </h2>
            <p className="text-lg text-slate-600 font-light">
              A IA da VexiaRH não apenas automatiza rotinas, mas atua ativamente analisando informações da
              plataforma e oferecendo <strong>suporte imediato para decisões mais rápidas e estratégicas</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aplicacoes.map((app, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-teal-50 text-[var(--color-primary)] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                  <app.icon size={28} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">{app.title}</h3>
                <p className="text-slate-600 leading-relaxed text-[15px]">{app.text}</p>
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
              O dia a dia do RH também requer logística impecável. A VexiaRH unifica funções de ponta a ponta
              para que gestores não precisem saltar entre diversos softwares e planilhas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {operacoes.map((item, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-slate-300 hover:bg-slate-100 transition-colors group">
                <div className="w-12 h-12 bg-white text-[var(--color-primary)] rounded-xl flex items-center justify-center mb-5 shadow-sm border border-slate-100">
                  <item.icon size={24} strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-[14px]">{item.text}</p>
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
                  Mapeando conexões, performance e cultura em tempo real.
                </p>
              </div>
            </div>

            {/* List Column */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                O Impacto Imediato da IA na VexiaRH
              </h2>
              <p className="text-xl text-slate-600 font-light mb-10">
                A aplicação embarcada de Inteligência Artificial nos nossos módulos permite à sua empresa focar no que realmente importa: <strong>as pessoas</strong>.
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
                  href="#hero"
                  className="inline-block bg-[var(--color-primary)] hover:bg-teal-900 text-white px-10 py-4 rounded-xl font-bold text-center transition-all shadow-lg hover:-translate-y-1"
                >
                  Falar com Especialistas sobre IA
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}