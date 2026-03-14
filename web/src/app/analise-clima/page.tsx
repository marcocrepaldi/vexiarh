import { Metadata } from "next";
import { Header } from "@/components/Header";
import { CTA } from "@/components/CTA";
import { MessageSquareHeart, SmilePlus, Flame, Hash, Radar, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Análise de Clima e Sentimento via IA | VexiaRH",
  description: "Traduza o clima organizacional em dados e ações corretivas reais com as análises NPS de inteligência artificial da VexiaRH baseada em textos abertos de pesquisa.",
  openGraph: {
    title: "Análise de Clima com IA - Pulse Surveys",
    description: "Pesquisas de clima, engajamento e a análise de sentimentos abertos traduzidos pela IA.",
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
    description: "A IA categoriza sentimentos e padrões de linguagem nos resultados abertos do Pulses de Pesquisa e Feedbacks.",
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
      text: "Textos de feedbacks anônimos ou abertos têm seus sentimentos ponderados (positivo, neutro, frustrado) sem intervenção humana de triagem demorada."
    },
    {
      icon: <Flame className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Identificação de Tópicos (Tags)",
      text: "Extrai sozindo os pontos centrais (ex.: 'salário', 'microgerenciamento', 'comunicação'). Evita o trabalho de ler e classificar centenas de respostas qualitativas de e-NPS."
    },
    {
      icon: <Radar className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Mapa de Calor por Área",
      text: "Cruza os dados da matriz. Se um líder muda para outra filial e a IA detecta uma mudança brusca da curva de tom dos times nas pesquisas em 3 meses, emite um alerta prévio de intervenção de clima."
    },
    {
      icon: <Hash className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Anonimato Intacto",
      text: "Resguarda estritamente a segurança e a garantia metodológica: o RH consome a consolidação de massa lida perfeitamente pela IA sem arranhar a privacidade da manifestação original do colaborador."
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
              Perguntas e comentários de clima em uma pesquisa geram calhamaços invisíveis.
              Nossa I.A entra aqui: não apenas extraindo estatísticas, mas sentindo o real <strong>tom da sua equipe.</strong>
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
                 I.A. treinada para entender as frustrações, conquistas operacionais e nuances linguísticas da corporação.
               </p>
            </div>

            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                Redução de 80% do tempo Analítico na Tabela Dinâmica
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">
                Comitês de clima não precisam varar madrugadas separando reclamações na matriz corporativa do C-Level. Entregue ações, não extração de PDF! A I.A mastiga a massa consolidando os maiores vilões e heróis percebidos pelo quadro de funcionários.
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
