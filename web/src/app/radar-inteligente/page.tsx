import { Metadata } from "next";
import { Header } from "@/components/Header";
import { CTA } from "@/components/CTA";
import { Radar, BellRing, Target, Sun, MessageSquare, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Radar Inteligente | Copiloto para Gestores e Colaboradores | VexiaRH",
  description: "Antecipe pendencias de ferias, feedbacks, metas e outras rotinas com alertas e sinais acionaveis para gestores e colaboradores.",
  openGraph: {
    title: "Radar Inteligente da VexiaRH",
    description: "Central de alertas e nudges para apoiar rotina, cobrancas e acompanhamento continuo de pessoas e processos.",
    type: "website",
  },
  alternates: {
    canonical: "/radar-inteligente",
  },
};

export default function RadarInteligente() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Radar Inteligente VexiaRH",
    description: "Sistema de nudges e alertas automatizados com base no ciclo de cada colaborador para reforcar prioridades de rotina.",
    applicationCategory: "BusinessApplication",
    brand: {
      "@type": "Brand",
      name: "VexiaRH",
    },
  };

  const leaderBenefits = [
    {
      icon: <BellRing className="text-orange-500 w-7 h-7" />,
      title: "Risco de Férias e Passivo",
      text: "Lembretes antecipados sobre colaboradores que estão entrando em período crítico de férias vencidas ou acumulando banco de horas excessivo."
    },
    {
      icon: <MessageSquare className="text-orange-500 w-7 h-7" />,
      title: "Lembrete de Feedbacks e 1:1",
      text: "Se um membro do time não recebe um feedback há semanas, o Radar notifica o líder para que ele marque um ponto de contato."
    },
    {
      icon: <Target className="text-orange-500 w-7 h-7" />,
      title: "Cobrança de Comportamento",
      text: "Alertas para tarefas pendentes, avaliacoes em aberto ou baixa movimentacao em rotinas que exigem acompanhamento da lideranca."
    }
  ];

  const collaboratorBenefits = [
    {
      icon: <Sun className="text-amber-500 w-7 h-7" />,
      title: "Descanso e Bem-estar",
      text: "Notificações amigáveis sobre o saldo de férias disponível, incentivando que o colaborador recarregue as energias de forma planejada."
    },
    {
      icon: <Target className="text-blue-500 w-7 h-7" />,
      title: "Rotina Produtiva Guiada (Nudges)",
      text: "Lembretes e orientacoes distribuidos ao longo da semana para apoiar metas, desenvolvimento, carreira e outras rotinas da jornada."
    },
    {
      icon: <MessageSquare className="text-purple-500 w-7 h-7" />,
      title: "Cultura de Reconhecimento",
      text: "Quando ha cotas de reconhecimento proximas do vencimento, o sistema reforca o uso do ritual sem depender de cobrancas manuais."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-24 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <section className="relative py-20 md:py-28 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] -z-0"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-800 font-bold text-sm mb-6">
              <Radar size={18} />
              <span>Rotina & Engajamento Ativo</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              Radar Inteligente
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
              Uma central de sinais e alertas para apoiar prioridades do dia a dia, reduzir esquecimentos e dar mais ritmo a rotinas importantes de RH e lideranca.
            </p>
          </div>
        </div>
      </section>

      {/* Como Funciona / Benefícios */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Bloco Gestor */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-3xl font-black text-[var(--color-primary)] mb-6 border-b border-slate-100 pb-4">
                Para a Liderança
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed font-light">
                O Radar ajuda a trazer pendencias relevantes para a rotina da lideranca, em formato de acoes claras e com contexto operacional.
              </p>
              <div className="space-y-6">
                {leaderBenefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1 bg-orange-50 p-2 rounded-xl border border-orange-100">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600 text-[15px] leading-relaxed">
                        {benefit.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bloco Colaborador */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 h-full">
              <h2 className="text-3xl font-black text-slate-900 mb-6 border-b border-slate-100 pb-4">
                Para o Colaborador
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed font-light">
                O colaborador recebe lembretes e orientacoes objetivas para manter a jornada em dia sem depender de cobrancas reativas.
              </p>
              <div className="space-y-6">
                {collaboratorBenefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1 bg-slate-50 p-2 rounded-xl border border-slate-100">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600 text-[15px] leading-relaxed">
                        {benefit.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Detalhamento Adicional para SEO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
           <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">
              Menos dependencia de cobranca manual
           </h2>
           <div className="bg-slate-50 p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200">
             <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed text-[15px]">
                    <strong>Alertas no fluxo de trabalho:</strong> As notificacoes ficam na tela inicial e no contexto da plataforma, reduzindo dependencia de correntes de e-mail dispersas.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed text-[15px]">
                    <strong>Acao imediata:</strong> Quando uma pendencia exige resposta, o gestor pode partir do alerta para a rotina correspondente com menos friccao.
                  </span>
                </li>
             </ul>
           </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
