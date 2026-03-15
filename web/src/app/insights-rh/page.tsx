import { Metadata } from "next";
import { Header } from "@/components/Header";
import { CTA } from "@/components/CTA";
import { LineChart, BarChart4, PieChart, Activity, Gauge, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights Automáticos para RH | VexiaRH",
  description: "Use IA para cruzar sinais de desempenho, engajamento e aprendizagem e transformar dados de RH em leitura acionavel.",
  openGraph: {
    title: "Insights Automáticos para RH - Gestão Preditiva",
    description: "Cruze dados da operacao de pessoas para apoiar analise, priorizacao e tomada de decisao no RH e na lideranca.",
    type: "website",
  },
  alternates: {
    canonical: "/insights-rh",
  },
};

export default function InsightsRH() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Insights Automáticos VexiaRH",
    description: "Analise avancada do ecossistema de RH com IA aplicada a desempenho, engajamento, reconhecimento e aprendizagem.",
    applicationCategory: "BusinessApplication",
    brand: {
      "@type": "Brand",
      name: "VexiaRH",
    },
  };

  const benefits = [
    {
      icon: <Activity className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Identificação Preditiva",
      text: "A plataforma identifica sinais de atencao e ajuda a cruzar comportamento, engajamento e rotinas que merecem acompanhamento mais proximo."
    },
    {
      icon: <BarChart4 className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Descoberta de Talentos Silenciosos",
      text: "A leitura dos dados ajuda a revelar pessoas e movimentos que sustentam a cultura e o desempenho mesmo fora do radar mais evidente."
    },
    {
      icon: <PieChart className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Retorno da Academy (ROI Acadêmico)",
      text: "Cruze aprendizagem com comportamento e evolucao para entender como trilhas e treinamentos se refletem na rotina do time."
    },
    {
      icon: <Gauge className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Sinalizadores Vermelhos Automáticos",
      text: "Resumos e alertas ajudam a localizar liderancas, ciclos ou rotinas que perderam ritmo e precisam de acao."
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
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -z-0"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 font-bold text-sm mb-6">
              <LineChart size={18} />
              <span>Pessoas & Dados</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              Insights Automáticos
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
              O objetivo nao e gerar mais dashboards, e sim transformar dados dispersos em <strong>leitura acionavel</strong> para RH e lideranca.
            </p>
          </div>
        </div>
      </section>

      {/* Como Funciona / Benefícios */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Esquerda: Mockup Descritivo */}
            <div className="relative h-[450px] w-full bg-slate-100 border border-slate-200 rounded-3xl overflow-hidden shadow-lg p-8 flex flex-col justify-center items-center">
               <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                 <LineChart className="w-12 h-12 text-purple-700" />
               </div>
               <h3 className="text-2xl font-bold text-slate-800 mb-2">Painéis Prescritivos</h3>
               <p className="text-slate-500 text-center text-sm px-6 max-w-sm">
                 Em vez de depender de planilhas isoladas, a plataforma destaca sinais, tendencias e pontos de atencao com mais contexto.
               </p>
            </div>

            {/* Direita: Benefícios Listados */}
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                Mais visibilidade para cultura, desempenho e decisao
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">
                Ao cruzar dados de diferentes modulos, a lideranca ganha uma visao mais clara sobre o que esta funcionando, onde estao os riscos e quais movimentos merecem prioridade.
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
