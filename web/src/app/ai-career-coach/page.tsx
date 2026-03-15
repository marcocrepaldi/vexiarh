import { Metadata } from "next";
import { Header } from "@/components/Header";
import { CTA } from "@/components/CTA";
import { TrendingUp, Target, Award, Lightbulb, UserCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Career Coach | VexiaRH",
  description: "Use IA para apoiar desenvolvimento, sucessao e leitura de carreira com recomendacoes mais alinhadas ao contexto da empresa.",
  openGraph: {
    title: "AI Career Coach - Crescimento Direcionado",
    description: "Apoie desenvolvimento e sucessao com trilhas, recomendacoes e leitura mais clara sobre proximos passos de carreira.",
    type: "website",
  },
  alternates: {
    canonical: "/ai-career-coach",
  },
};

export default function AICareerCoach() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AI Career Coach - VexiaRH",
    description: "Inteligencia artificial para apoiar planejamento e acompanhamento da evolucao de carreira do colaborador.",
    applicationCategory: "BusinessApplication",
    brand: {
      "@type": "Brand",
      name: "VexiaRH",
    },
  };

  const benefits = [
    {
      icon: <Award className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Mapeamento de Competências",
      text: "As habilidades podem ser acompanhadas ao longo dos ciclos para apoiar leitura de gaps, pontos fortes e evolucao de competencias."
    },
    {
      icon: <TrendingUp className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Autonomia na Progressão",
      text: "O colaborador passa a visualizar com mais clareza os requisitos e movimentos esperados para o proximo nivel."
    },
    {
      icon: <Target className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Cross-Metas em Planos de Desenvolvimento (PDIs)",
      text: "Ao criar PDIs, a IA ajuda a sugerir focos, prioridades e prazos coerentes com o contexto da empresa e do colaborador."
    },
    {
      icon: <Lightbulb className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Recomendação de Capacitação",
      text: "A integracao com a Academy ajuda a recomendar cursos, trilhas e conteudos aderentes aos gaps e objetivos observados."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white pt-24 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* Hero Intero da Página */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-indigo-50/50 to-blue-100/30 overflow-hidden border-b border-gray-100">
        {/* Glows */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-0"></div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/50 border border-blue-200 text-blue-800 font-bold text-sm mb-6">
              <UserCheck size={18} />
              <span>Upskilling e Reskilling</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              A.I. Career Coach
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
              O AI Career Coach ajuda a transformar desenvolvimento em um caminho mais claro, conectando competencias, ambicoes e prioridades do negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Como Funciona / Benefícios */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Esquerda: Mockup Descritivo */}
            <div className="relative h-[450px] w-full bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-lg p-8 flex flex-col justify-center items-center">
               <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                 <TrendingUp className="w-12 h-12 text-blue-600" />
               </div>
               <h3 className="text-2xl font-bold text-slate-800 mb-2">Plano de Sucessão Ativo</h3>
               <p className="text-slate-500 text-center text-sm px-6 max-w-sm">
                 Visao mais organizada sobre competencias e aderencia para apoiar sucessao e desenvolvimento interno.
               </p>
            </div>

            {/* Direita: Benefícios Listados */}
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                Desenvolvimento e carreira com mais contexto
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">
                O AI Career Coach nao substitui a conversa de carreira. Ele ajuda RH e lideranca a organizar informacoes, sugerir direcoes e reduzir o esforco de leitura para apoiar PDIs e movimentos internos.
              </p>

              <div className="space-y-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600">
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
           <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">
              Apoio para RH e lideranca
           </h2>
           <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100">
             <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed text-[15px]">
                    <strong>Leitura de risco de estagnacao:</strong> O modelo ajuda a identificar lacunas prolongadas de desenvolvimento para apoiar acao antes que o problema escale.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed text-[15px]">
                    <strong>Curadoria interna mais orientada:</strong> Em cenarios de sucessao, a plataforma ajuda a destacar perfis que merecem acompanhamento mais proximo para crescimento interno.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed text-[15px]">
                    <strong>Mais consistencia na conversa de carreira:</strong> O desenvolvimento pode ser apoiado por registros da plataforma, reduzindo subjetividade e ampliando contexto na tomada de decisao.
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
