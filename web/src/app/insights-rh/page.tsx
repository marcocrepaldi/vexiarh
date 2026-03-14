import { Metadata } from "next";
import { Header } from "@/components/Header";
import { CTA } from "@/components/CTA";
import { LineChart, BarChart4, PieChart, Activity, Gauge, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights Automáticos para RH | VexiaRH",
  description: "Conheça o módulo de Insights Automáticos da VexiaRH. Uma inteligência artificial desenhada para ler milhões de pontos de dado de RH em segundos e entregar os pontos-chave de gestão.",
  openGraph: {
    title: "Insights Automáticos para RH - Gestão Preditiva",
    description: "Leia o comportamento dos times, adiantando problemas no clima organizacional com uma matriz de dados totalmente conectada.",
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
    description: "Análise avançada do ecossistema de RH (desempenho, engajamento e reconhecimento) provida por motores de Inteligência Artificial.",
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
      text: "Antes da queda no faturamento ou absenteísmo as ferramentas captam e correlacionam redução do uso do reconhecimento contínuo nas áreas de risco."
    },
    {
      icon: <BarChart4 className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Descoberta de Talentos Silenciosos",
      text: "A matriz revela quais colaboradores estão sustentando e distribuindo a cultura ativamente sem precisar que a liderança os indique."
    },
    {
      icon: <PieChart className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Retorno da Academy (ROI Acadêmico)",
      text: "Integra o esforço de treinamento a mudanças de comportamento. Os certificados resultam no batimento de metas mais rápido nos PDIs posteriores."
    },
    {
      icon: <Gauge className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Sinalizadores Vermelhos Automáticos",
      text: "Envia resumos quinzenais da organização apontando líderes que pararam de registrar check-ins (1on1) com a primeira linha, por exemplo."
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
              Seu RH não deve perder dias tabulando dezenas de métricas. Nosso ambiente de Analytics é ativo:
              <strong> a IA processa grandes volumes</strong> em tempo real, entregando relatórios precisos do seu time 
              para tomada de decisão instantânea.
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
                 Ao invés de linhas em planilhas cegas, cartões de alertas proativos resumem os KPIs.
               </p>
            </div>

            {/* Direita: Benefícios Listados */}
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                Visibilidade Executiva da Cultura e Alta Liderança
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">
                Com o volume cruzado dos módulos, o esforço da auditoria é inexistente. O CEO ou C-Level enxerga instantaneamente se as verbas (Budget) de incentivo da base estão refletindo no alcance de metas e aprendizado.
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
