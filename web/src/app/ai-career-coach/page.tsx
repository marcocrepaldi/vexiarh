import { Metadata } from "next";
import { Header } from "@/components/Header";
import { CTA } from "@/components/CTA";
import { TrendingUp, Target, Award, Lightbulb, UserCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Career Coach | VexiaRH",
  description: "Conheça o AI Career Coach do VexiaRH. Inteligência artificial focada em potencializar as rotas de crescimento e o desenvolvimento de carreira dos colaboradores na sua empresa.",
  openGraph: {
    title: "AI Career Coach - Crescimento Direcionado",
    description: "Direcione o desenvolvimento do time com trilhas de estudo e planos de progressão profissional indicados por Inteligência Artificial a partir de fit e skills.",
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
    description: "Inteligência Artificial que atua ativamente no planejamento e acompanhamento da evolução da carreira do colaborador, cruzando metas com talentos.",
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
      text: "As habilidades são mapeadas continuamente ao final de cada avaliação, criando um gráfico de teia (radar) dinâmico do talento do funcionário."
    },
    {
      icon: <TrendingUp className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Autonomia na Progressão",
      text: "O colaborador consegue enxergar quais requisitos o separam do próximo nível (Pleno, Sênior) e foca a sua energia de forma proativa."
    },
    {
      icon: <Target className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Cross-Metas em Planos de Desenvolvimento (PDIs)",
      text: "Quando novos PDIs são criados, a IA sugere pautas e prazos calcados na curva de velocidade comum analisada no ecossistema da empresa."
    },
    {
      icon: <Lightbulb className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Recomendação de Capacitação",
      text: "Integração viva com a Vexia Academy: sugere automaticamente cursos e pílulas de leitura da Base de Conhecimento mediante gaps recentes."
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
              Seus talentos mais valiosos não devem sair por falta de horizonte. 
              Nossa tecnologia sugere <strong>caminhos de desenvolvimento nítidos</strong>, alinhando a ambição do 
              colaborador aos objetivos do negócio.
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
                 Visualização de competência para escalar posições de acordo com os requisitos em árvore gerados pela IA.
               </p>
            </div>

            {/* Direita: Benefícios Listados */}
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                Redesenhe o mapa do PDI com tecnologia viva
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">
                O AI Career Coach não substitui o mentor humano. Ele acelera o processo, poupando a equipe
                de preencher matrizes desgastantes ao prever o <em>job fit</em> ideal para cada perfil 
                em movimento na rotina organizacional.
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
              Apoio inestimável para Liderança de BPs
           </h2>
           <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100">
             <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed text-[15px]">
                    <strong>Risco de Turnover Mitigado:</strong> O modelo acusa estagnação de aprendizagem (skills gap longo). BPs conseguem engajar esses colaboradores antes mesmo deles abrirem mercado de trabalho.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed text-[15px]">
                    <strong>Curadoria Mapeada Internamente:</strong> Se há escassez de liderança imediata, profissionais técnicos com aptidão analítica validada pelo modelo são destacados para receber curadoria direcional de Gestão e Cultura.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed text-[15px]">
                    <strong>Simetria e Justiça:</strong> O desenvolvimento é pautado por registros palpáveis de dados transacionados na plataforma, retirando vieses na construção de sucessões.
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
