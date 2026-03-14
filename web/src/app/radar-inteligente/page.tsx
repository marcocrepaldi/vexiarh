import { Metadata } from "next";
import { Header } from "@/components/Header";
import { CTA } from "@/components/CTA";
import { Radar, BellRing, Target, Sun, MessageSquare, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Radar Inteligente | Copiloto para Gestores e Colaboradores | VexiaRH",
  description: "Antecipe férias vencendo, cotas de reconhecimento expirando e gaps de feedback. O Radar Inteligente é sua central diária de lembretes e atuação preditiva de RH.",
  openGraph: {
    title: "Radar Inteligente da VexiaRH",
    description: "Autocobrança para colaboradores e curadoria diária para líderes. O Radar da VexiaRH não deixa o desenvolvimento do seu time parar.",
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
    description: "Sistema de empurrões (nudges) automatizados baseados no ciclo de cada colaborador para lembretes de feedbacks, férias e metas estruturais.",
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
      text: "Alerta aos gestores sobre tarefas pendentes, avaliações esquecidas ou inatividade suspeita no registro de metas dos liderados."
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
      text: "Dicas dinâmicas focadas no calendário: metas e OKRs nas segundas/terças; PDI e curadoria de carreira nas quartas/quintas; trilhas de soft-skills nas sextas."
    },
    {
      icon: <MessageSquare className="text-purple-500 w-7 h-7" />,
      title: "Cultura de Reconhecimento",
      text: "Se o colaborador ganhou cotas mensais (budget de reconhecimento) para distribuir e o prazo está expirando, o radar envia lembretes para ele não deixar de elogiar os pares."
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
              Nenhum prazo perdido, nenhum talento esquecido. Atuando como um assistente invisível que consolida tarefas
              passivas do RH diretamente na Home de Gestores e Colaboradores.
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
                Gestores são ocupados. O Radar extrai tarefas vitais do limbo corporativo e coloca na frente
                deles em formato de <em>Cards de Ação Direta</em>. Não espere a revisão anual para agir.
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
                Um estímulo de auto-gerenciamento amigável e focado no crescimento. O Radar envia nudges 
                e dicas no melhor formato e tom para não gerar ansiedade.
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
              Acabe com a Micropólitica da Lembrança
           </h2>
           <div className="bg-slate-50 p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200">
             <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed text-[15px]">
                    <strong>Sem poluição de E-mails:</strong> Os alertas do Radar vivem na tela inicial (Dashboard) da plataforma e não dependem de correntes de e-mail que são invariavelmente ignoradas por todos na companhia.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed text-[15px]">
                    <strong>Agendamento em 1-Clique:</strong> Apareceu que as férias de uma analista da equipe estão perto de vencer e o funcionário já possui uma balanço em banco alto? Há um botão direto no card do gestor para iniciar a solicitação compulsória imediatamente.
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
