import { Metadata } from "next";
import { Header } from "@/components/Header";
import { CTA } from "@/components/CTA";
import { Target, Bot, LineChart, Shield, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Performance Coach | VexiaRH",
  description: "Use IA para apoiar ciclos de performance, acompanhamento de metas, feedbacks e leitura de desenvolvimento com mais contexto.",
  openGraph: {
    title: "AI Performance Coach - O Futuro da Gestão de Desempenho",
    description: "IA aplicada a performance para ajudar lideres e RH a acompanhar metas, feedbacks e evolucao com mais clareza.",
    type: "website",
  },
  alternates: {
    canonical: "/ai-performance-coach",
  },
};

export default function AIPerformanceCoach() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AI Performance Coach - VexiaRH",
    description: "Assistente de inteligência artificial para gestão de performance, OKRs e feedbacks no VexiaRH.",
    applicationCategory: "BusinessApplication",
    brand: {
      "@type": "Brand",
      name: "VexiaRH",
    },
  };

  const benefits = [
    {
      icon: <Bot className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Análise Inteligente de OKRs",
      text: "A IA acompanha o progresso das metas e ajuda a sinalizar desvios, ritmos e oportunidades de ajuste ao longo do ciclo."
    },
    {
      icon: <Target className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Sugestões de Feedback",
      text: "Com base no historico e nas entregas, o assistente ajuda a estruturar feedbacks mais objetivos e bem contextualizados."
    },
    {
      icon: <LineChart className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Trilhas de Carreira Dinâmicas",
      text: "A plataforma recomenda proximos passos de desenvolvimento, cursos e movimentos coerentes com as lacunas observadas."
    },
    {
      icon: <Shield className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Privacidade e Contexto Seguro",
      text: "Os dados de performance respeitam as permissoes corporativas e sao processados dentro do contexto de acesso de cada papel."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* Hero Intero da Página */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-slate-100 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block py-1.5 px-3 rounded-full bg-orange-100 text-[var(--color-accent)] font-bold text-sm mb-6 border border-orange-200">
              Novo Módulo Inteligente
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--color-primary)] mb-6 leading-tight">
              AI Performance Coach
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-10">
              O AI Performance Coach ajuda a conduzir metas, 1-on-1s e feedbacks com orientacoes baseadas no contexto real do colaborador e do ciclo.
            </p>
          </div>
        </div>
      </section>

      {/* Como Funciona / Benefícios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Esquerda: Imagem Simulada */}
            <div className="relative h-[400px] md:h-[500px] w-full bg-slate-900 rounded-3xl shadow-2xl border-4 border-slate-800 overflow-hidden flex items-center justify-center">
                {/* Aqui entrará um mockup/imagem real do módulo */}
                <div className="text-center p-8">
                  <Bot className="w-20 h-20 text-[var(--color-accent)] mx-auto mb-4 opacity-80" />
                  <p className="text-white font-bold text-xl">Interface do AI Coach</p>
                  <p className="text-slate-400 mt-2 text-sm">Dashboard de recomendações proativas</p>
                </div>
            </div>

            {/* Direita: Texto */}
            <div>
              <h2 className="text-3xl font-black text-[var(--color-primary)] mb-6">
                Como a IA apoia a gestao de desempenho
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                A proposta nao e substituir a conversa entre lider e colaborador. E sim reduzir tempo de leitura, resumir contexto e ajudar o gestor a chegar melhor preparado aos rituais de performance.
              </p>

              <div className="space-y-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">
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
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
           <h2 className="text-3xl font-black text-[var(--color-primary)] mb-8 text-center">
              Recursos Avançados para o RH
           </h2>
           <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
             <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Alinhamento continuo:</strong> A IA ajuda a identificar se as metas individuais estao coerentes com os objetivos e com o ritmo esperado do ciclo.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Sintese de contexto:</strong> Percepcoes e registros do ciclo podem ser resumidos em uma leitura mais organizada para comites e rituais de calibracao.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Consulta em linguagem natural:</strong> Gestores podem pedir resumos e leituras orientadas, como a evolucao recente de um colaborador com base nos registros disponiveis.
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
