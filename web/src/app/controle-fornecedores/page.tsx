import { Metadata } from "next";
import { Header } from "@/components/Header";
import { CTA } from "@/components/CTA";
import { Building2, FileKey, Component, BookOpenCheck, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "Controle Operacional de Fornecedores | VexiaRH",
  description: "Traga terceiros essenciais, recebedores de repasse da operação, credenciados e parceiros sob o mesmo radar de processos e compliance de sua rede principal.",
  openGraph: {
    title: "Gestão de Terceirizados - Retenha as Rédeas",
    description: "Centralize os dados das empresas de suporte logístico do seu BPO usando uma interface sólida focada no SLA de parceiro.",
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
    description: "Espelho do controle do DP só que focando em frentes empresariais integradas, contratos, licenças de prefeituras ativas e dependências da rede externa à empresa.",
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
      text: "Faça o cadastro direto de base jurídica dos escritórios parceiros que servem a você em pontas operacionais atrelando procuradores a esses CNPJs."
    },
    {
      icon: <FileKey className="text-rose-500 w-8 h-8" />,
      title: "Validação de Alvarás e Regulatório",
      text: "Quando o SLA envolve que seu credenciado precise apresentar certidões e notas sem débito contábil todo mês. A plataforma rastreia e guarda o que foi fornecido pelas prestadoras."
    },
    {
      icon: <Component className="text-rose-500 w-8 h-8" />,
      title: "Base Única e Conflito Zero",
      text: "Evite fraudes e pagamentos cruzados para terceirizadas obscuras. Como estão controlados e rotulados em nossa base-pai corporativa, a prestação cruza pelo DP limpa."
    },
    {
      icon: <Landmark className="text-rose-500 w-8 h-8" />,
      title: "Extratos de Controle Contábil",
      text: "Companhias de limpeza, T.I alocado em clientes, corretores associados ou prestadores comissados em BPO tem repasses e custos geridos na matriz oficial."
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
              Seu passivo e fragilidade pode morar fora de casa. Tenha as rédeas dos <strong>Terceirizados, BPOs e Recebedores</strong> 
              que mantém sua operação respirando na ponta de serviços essenciais.
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
                 Checagem visual na plataforma se parceiros estão prestando e aderindo a normativas combinadas no Compliance Matriz x Terceirizada.
               </p>
            </div>

            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                Rede de Serviço (BPO) Blindada no Corporativo
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">
                Empresas que atuam com despachantes, prestadores de T.I de fora ou limpeza sofrem acionamentos solidários trabalhistas gravíssimos pela ignorância quanto aos contratos regentes em gavetas escondidas ou em nuvens perdidas sem vínculo formal.
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
