import { Metadata } from "next";
import { Header } from "@/components/Header";
import { CTA } from "@/components/CTA";
import { Network, ActivitySquare, MonitorPlay, Focus, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Organograma Dinâmico Interativo | VexiaRH",
  description: "Visualize a estrutura da empresa com atualizacao automatica, busca por times e leitura clara de liderancas e areas.",
  openGraph: {
    title: "Organograma 3D de RH - Transparência",
    description: "Visao atualizada de liderancas, reportes e areas para apoiar comunicacao interna e leitura da estrutura organizacional.",
    type: "website",
  },
  alternates: {
    canonical: "/organograma",
  },
};

export default function OrganogramaDinamico() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Organograma Dinâmico VexiaRH",
    description: "Árvore corporativa com ligações diretas de chefia baseadas em tempo real na raiz de cadastros da organização.",
    applicationCategory: "BusinessApplication",
    brand: {
      "@type": "Brand",
      name: "VexiaRH",
    },
  };

  const benefits = [
    {
      icon: <ActivitySquare className="text-indigo-500 w-8 h-8" />,
      title: "Desenhado pelo Sistema (Real-Time)",
      text: "A estrutura visual acompanha alteracoes de cargo, area e reporte automaticamente, sem depender de manutencao manual."
    },
    {
      icon: <MonitorPlay className="text-indigo-500 w-8 h-8" />,
      title: "Visão Fluida de Áreas",
      text: "Em estruturas maiores, a navegacao permite expandir areas, aproximar contextos e explorar a hierarquia de forma mais pratica."
    },
    {
      icon: <Focus className="text-indigo-500 w-8 h-8" />,
      title: "Painel Focal do Colaborador",
      text: "Ao selecionar uma pessoa, a plataforma exibe dados publicos e informacoes uteis para localizacao e conexao interna."
    },
    {
      icon: <Search className="text-indigo-500 w-8 h-8" />,
      title: "Pesquisa Universal de Times",
      text: "A busca ajuda a localizar liderancas, cargos e times com mais rapidez, mesmo em estruturas organizacionais complexas."
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
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] -z-0"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-800 font-bold text-sm mb-6">
              <Network size={18} />
              <span>Transparência Institucional</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              Organograma Dinâmico
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
              O <strong>Organograma Integrado</strong> ajuda a visualizar liderancas, areas e relacoes de reporte sem depender de arquivos paralelos e atualizacoes manuais.
            </p>
          </div>
        </div>
      </section>

      {/* Como Funciona / Benefícios */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="relative h-[450px] w-full bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-lg p-8 flex flex-col justify-center items-center">
               <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center mb-6">
                 <Network className="w-12 h-12 text-indigo-600" />
               </div>
               <h3 className="text-2xl font-bold text-slate-800 mb-2">Leitura Estrutural Atualizada</h3>
               <p className="text-slate-500 text-center text-sm px-6 max-w-sm">
                 Sempre que a estrutura muda, a visualizacao acompanha o cadastro organizacional e reduz ruido na comunicacao interna.
               </p>
            </div>

            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                Menos manutencao manual, mais visibilidade organizacional
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">
                O RH nao precisa mais atualizar organogramas manualmente sempre que ha mudancas de estrutura. O diagrama reflete a base organizacional e respeita politicas de exibicao de dados.
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
