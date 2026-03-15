import { Metadata } from "next";
import { Header } from "@/components/Header";
import { CTA } from "@/components/CTA";
import { Building2, FileKey, Component, BookOpenCheck, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "Controle Operacional de Fornecedores | VexiaRH",
  description: "Centralize cadastro, documentos, contratos e acompanhamento de fornecedores e terceiros em uma unica visao operacional.",
  openGraph: {
    title: "Gestão de Terceirizados - Retenha as Rédeas",
    description: "Acompanhe parceiros, obrigacoes documentais e informacoes operacionais de terceiros com mais clareza e governanca.",
    type: "website",
  },
  alternates: {
    canonical: "/controle-fornecedores",
  },
};

export default function ControleFornecedores() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Fornecedores e Terceiros da VexiaRH",
    description: "Gestao de terceiros, contratos, licencas e dependencias operacionais da rede externa a empresa.",
    applicationCategory: "SupplyChainApplication",
    brand: {
      "@type": "Brand",
      name: "VexiaRH",
    },
  };

  const benefits = [
    {
      icon: <Building2 className="text-rose-500 w-8 h-8" />,
      title: "Onboarding de CNPJ",
      text: "Cadastre parceiros e prestadores com base juridica estruturada, vinculando representantes e informacoes essenciais ao CNPJ."
    },
    {
      icon: <FileKey className="text-rose-500 w-8 h-8" />,
      title: "Validação de Alvarás e Regulatório",
      text: "Acompanhe certidoes, licencas e documentos regulatorios exigidos para manter a relacao com terceiros em conformidade."
    },
    {
      icon: <Component className="text-rose-500 w-8 h-8" />,
      title: "Base Única e Conflito Zero",
      text: "Consolide o cadastro de terceiros em uma base unica para reduzir ruido operacional e melhorar a leitura sobre pagamentos e vinculacoes."
    },
    {
      icon: <Landmark className="text-rose-500 w-8 h-8" />,
      title: "Extratos de Controle Contábil",
      text: "A operacao passa a ter uma visao mais clara sobre repasses, custos e movimentacoes associadas a parceiros e prestadores."
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-rose-800 font-bold text-sm mb-6">
              <Building2 size={18} />
              <span>Cadeia Logística Atendida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              Controle de Fornecedores
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
              Traga <strong>fornecedores, terceiros e parceiros</strong> para uma mesma visao de cadastro, documentacao e acompanhamento operacional.
            </p>
          </div>
        </div>
      </section>

      {/* Como Funciona / Benefícios */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="relative h-[450px] w-full bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-lg p-8 flex flex-col justify-center items-center">
               <div className="w-24 h-24 rounded-full bg-rose-100 flex items-center justify-center mb-6">
                 <BookOpenCheck className="w-12 h-12 text-rose-600" />
               </div>
               <h3 className="text-2xl font-bold text-slate-800 mb-2">Riscos Minimizados</h3>
               <p className="text-slate-500 text-center text-sm px-6 max-w-sm">
                 Mais visibilidade para saber quais parceiros estao regulares, documentados e aderentes aos criterios da operacao.
               </p>
            </div>

            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                Mais controle sobre a rede externa da empresa
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">
                Quando contratos, licencas e comprovantes de terceiros ficam dispersos, a empresa perde visibilidade e aumenta risco operacional. O modulo organiza essa frente em um fluxo mais controlado.
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
