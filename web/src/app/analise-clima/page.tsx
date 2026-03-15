import { Metadata } from "next";
import { Header } from "@/components/Header";
import { CTA } from "@/components/CTA";
import { MessageSquareHeart, SmilePlus, Flame, Hash, Radar, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Análise de Clima e Sentimento via IA | VexiaRH",
  description: "Transforme pesquisas e comentarios abertos em leitura mais clara de clima, sentimento e temas recorrentes com apoio de IA.",
  openGraph: {
    title: "Análise de Clima com IA - Pulse Surveys",
    description: "Use IA para analisar pesquisas de clima, temas recorrentes e sinais de atencao na experiencia do colaborador.",
    type: "website",
  },
  alternates: {
    canonical: "/analise-clima",
  },
};

export default function AnaliseClima() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Análise de Sentimentos VexiaRH",
    description: "A IA categoriza sentimentos e padroes de linguagem em pesquisas, comentarios e feedbacks abertos.",
    applicationCategory: "BusinessApplication",
    brand: {
      "@type": "Brand",
      name: "VexiaRH",
    },
  };

  const benefits = [
    {
      icon: <SmilePlus className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Análise de Naturalidade Linguística",
      text: "A IA interpreta comentarios anonimos ou abertos e ajuda a classificar o sentimento predominante com menos esforco manual."
    },
    {
      icon: <Flame className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Identificação de Tópicos (Tags)",
      text: "A plataforma identifica os temas mais frequentes nas respostas, facilitando a leitura de e-NPS, pulses e outras pesquisas qualitativas."
    },
    {
      icon: <Radar className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Mapa de Calor por Área",
      text: "A IA cruza resultados por area e pode destacar mudancas de tom, concentracao de temas e sinais que merecem acompanhamento."
    },
    {
      icon: <Hash className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Anonimato Intacto",
      text: "A consolidacao preserva a privacidade da manifestacao individual, permitindo leitura agregada sem comprometer o anonimato da pesquisa."
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
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[100px] -z-0"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-rose-700 font-bold text-sm mb-6">
              <MessageSquareHeart size={18} />
              <span>Cultura & Engajamento</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              A.I. Análise de Clima
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
              Pesquisas geram volume. A IA ajuda a transformar comentarios e respostas abertas em <strong>leitura mais clara de clima, sentimento e prioridade</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Como Funciona / Benefícios */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="relative h-[450px] w-full bg-slate-100 border border-slate-200 rounded-3xl overflow-hidden shadow-lg p-8 flex flex-col justify-center items-center">
               <div className="w-24 h-24 rounded-full bg-rose-100 flex items-center justify-center mb-6">
                 <HeartHandshake className="w-12 h-12 text-rose-600" />
               </div>
               <h3 className="text-2xl font-bold text-slate-800 mb-2">Compreensão Contextual</h3>
               <p className="text-slate-500 text-center text-sm px-6 max-w-sm">
                 Leitura assistida de comentarios para ajudar RH e lideranca a interpretar temas, tom e contexto com mais rapidez.
               </p>
            </div>

            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                Menos tempo tabulando, mais tempo agindo
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">
                Em vez de depender de leitura manual de dezenas ou centenas de comentarios, a equipe passa a ter uma consolidacao mais organizada dos temas que exigem resposta.
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

      <CTA />
    </div>
  );
}
