import { Metadata } from "next";
import { Header } from "@/components/Header";
import { CTA } from "@/components/CTA";
import { Target, Bot, LineChart, Shield, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Performance Coach | VexiaRH",
  description: "Conheça o AI Performance Coach do VexiaRH. Uma inteligência artificial desenhada para guiar líderes e colaboradores no acompanhamento de OKRs, feedbacks e evolução de carreira.",
  openGraph: {
    title: "AI Performance Coach - O Futuro da Gestão de Desempenho",
    description: "Inteligência artificial integrada à sua plataforma de RH para apoiar rituais de feedback, sugerir check-ins de metas e potencializar a carreira do seu time.",
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
      text: "A IA acompanha o progresso das metas e sugere ajustes ou correções de rota proativamente para os líderes e colaboradores."
    },
    {
      icon: <Target className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Sugestões de Feedback",
      text: "Com base no histórico e nas entregas, o assistente ajuda gestores a estruturarem feedbacks mais construtivos e baseados em dados."
    },
    {
      icon: <LineChart className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Trilhas de Carreira Dinâmicas",
      text: "Recomendações automáticas de cursos e passos para atingir o próximo nível da senioridade com base nas lacunas atuais."
    },
    {
      icon: <Shield className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Privacidade e Contexto Seguro",
      text: "Os dados de performance são processados com total segurança, respeitando as permissões corporativas e a LGPD."
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
              Eleve a gestão de desempenho com orientações baseadas em dados. O AI Coach do VexiaRH 
              auxilia as lideranças na condução de reuniões de 1-on-1, análise de OKRs e construção 
              de feedbacks impecáveis.
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
                Como o algoritmo apoia a cultura de desenvolvimento
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nós acreditamos que a tecnologia não substitui a conexão humana, mas a potencializa. 
                O AI Performance Coach funciona de maneira invisível no dia a dia, consolidando 
                dados que tomariam horas de análise para que o gestor se concentre no que importa: 
                <strong> as pessoas.</strong>
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
                    <strong>Alinhamento Estratégico Contínuo:</strong> A IA monitora se as metas individuais (OKRs) estão atreladas aos objetivos corporativos e emite alertas caso haja desvios metodológicos.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Sintetização de Feedbacks 360:</strong> Coleta percepções ao longo do ciclo de avaliação e gera um resumo estruturado e imparcial para a leitura do gestor no momento do comitê de calibração.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">
                    <strong>Interação em Linguagem Natural:</strong> Gestores podem "conversar" com a plataforma. Exemplo: <i>"Resuma a evolução do João nos últimos 6 meses com base nos reconhecimentos que ele recebeu."</i>
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
