import { Metadata } from "next";
import { Header } from "@/components/Header";
import { CTA } from "@/components/CTA";
import { Network, ActivitySquare, MonitorPlay, Focus, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Organograma Dinâmico Interativo | VexiaRH",
  description: "Navegue pela estrutura da sua empresa sem precisar atualizar powerpoints mensais. O organograma da VexiaRH se desenha sozinho com base nas movimentações.",
  openGraph: {
    title: "Organograma 3D de RH - Transparência",
    description: "Visão estratégica instantânea de lideranças e equipes para melhorar a busca de contatos internos (Páginas Amarelas do time).",
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
      text: "Ao alterar o cargo de um funcionário para 'Diretor', ou mudá-lo de C-Level, a arquitetura da árvore visual é reerguida automaticamente."
    },
    {
      icon: <MonitorPlay className="text-indigo-500 w-8 h-8" />,
      title: "Visão Fluida de Áreas",
      text: "Companhias com milhares de vidas ficam impossíveis de enxergar em um PDF. Aplique zoom, desdobre ramos da matriz ou engavete áreas inteiras no clique."
    },
    {
      icon: <Focus className="text-indigo-500 w-8 h-8" />,
      title: "Painel Focal do Colaborador",
      text: "Clique em uma 'bolinha' da pessoa e a plataforma exibe uma Side-Panel com E-mail, Ramal, e dados públicos de contato (As Páginas Amarelas de quem acabou de entrar)."
    },
    {
      icon: <Search className="text-indigo-500 w-8 h-8" />,
      title: "Pesquisa Universal de Times",
      text: "Um analista júnior precisa achar quem lidera a contabilidade corporativa? A busca inteligente pisca o cargo exato no diagrama visual e mostra quem reporta a ele."
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
              Sabe aquelas pessoas novas cuja função você desconhece ou com quem elas trabalham?
              O <strong>Organograma Integrado</strong> reduz fricções e conecta departamentos em uma visualização transparente.
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
               <h3 className="text-2xl font-bold text-slate-800 mb-2">Engajamento Espacial</h3>
               <p className="text-slate-500 text-center text-sm px-6 max-w-sm">
                 Ao ser remanejado para novos squads, o senso de pertencimento muda visualmente na hora em que o funcionário acessar o sistema.
               </p>
            </div>

            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                Fim dos Desenhos Extensos e Cansativos no Visio
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">
                O RH não devia passar horas montando blocos e arrastando linhas porque um analista mudou de área. Nosso diagrama é um reflexo cru e instantâneo da tabela "Chefe-Liderado" que opera em tempo real, respeitando políticas de exibição de dados.
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
