import { Metadata } from "next";
import { Header } from "@/components/Header";
import { CTA } from "@/components/CTA";
import { Laptop, PenTool, DatabaseBackup, ListChecks, Laptop2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Gestão Ativos e Termos de Uso | VexiaRH",
  description: "Trilhe com confiança o inventário físico do escritório. Empréstimos de notebooks corporativos, celulares, e manutenção sem perder os fluxos de caixa de danos.",
  openGraph: {
    title: "Gestão de Ativos - Controle de Máquinas",
    description: "Logística inteligente de entrega de hardwares no Onboarding, Termos Eletrônicos de Responsabilidade e recolhimento perfeito com as assinaturas de baixa.",
    type: "website",
  },
  alternates: {
    canonical: "/gestao-de-ativos",
  },
};

export default function GestaoDeAtivos() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Controle de Ativos e Hardwares",
    description: "Módulo integrado à área de facilities e T.I para rastrear cadeiras giratórias do homeoffice, monitores e notebooks de alto custo atrelados na carteira do funcionário.",
    applicationCategory: "BusinessApplication",
    brand: {
      "@type": "Brand",
      name: "VexiaRH",
    },
  };

  const benefits = [
    {
      icon: <Laptop2 className="text-slate-500 w-8 h-8" />,
      title: "Registro de Inventário Único",
      text: "Esqueça perder a tela em que o funcionário assinou o empréstimo daquele Mac da empresa de 20 mil reais. Fichamos MAC Address, licenças, estado físico e seriais."
    },
    {
      icon: <PenTool className="text-slate-500 w-8 h-8" />,
      title: "Assinatura Eletrônica do Termo (LGPD)",
      text: "No recebimento da máquina, o colaborador avaliza um Termo Digital validado por chave eletrônica. Garantindo a permissão de desconto em rescisão por extravios ou quebras."
    },
    {
      icon: <DatabaseBackup className="text-slate-500 w-8 h-8" />,
      title: "Manutenções, Conserto e Custos Contábeis",
      text: "Quando a máquina vai para assistência técnica o sistema tira a responsabilidade direta dele e anota o histórico e provisão financeira gasta com T.I (CAPEX/OPEX)."
    },
    {
      icon: <ListChecks className="text-slate-500 w-8 h-8" />,
      title: "Bloqueio de Offboarding Crítico",
      text: "Funcionário foi demitido remotamente? Caso o checklist do VexiaRH acuse um monitor ultrawide na ficha dele, o módulo avisa e trava a saída livre até o ativo regressar aos galpões."
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
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-slate-300/40 rounded-full blur-[100px] -z-0"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 font-bold text-sm mb-6">
              <Laptop size={18} />
              <span>Infra & Facilities Integrada</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              Gestão de Ativos
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
              Perder equipamentos pela casa de colaboradores remotos é sangrar dinheiro. O controle sólido de <strong>entrega e manutenção</strong> na plataforma evita evasões de material e resguarda todos por vias legais.
            </p>
          </div>
        </div>
      </section>

      {/* Como Funciona / Benefícios */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                O Hardware amarrado ao CPF e não mais numa tabela vaga.
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">
                Ao enviar a cadeira de ergonomia e uma máquina caríssima aos profissionais de tecnologia do Brasil inteiro, o DP não pode ser punido pelo amadorismo. Aqui tudo recebe baixa automática com histórico inviolável de responsabilidade.
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

            <div className="order-1 md:order-2 relative h-[450px] w-full bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-lg p-8 flex flex-col justify-center items-center">
               <div className="w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center mb-6">
                 <Laptop className="w-12 h-12 text-slate-700" />
               </div>
               <h3 className="text-2xl font-bold text-slate-800 mb-2">Cadeia de Custódia</h3>
               <p className="text-slate-500 text-center text-sm px-6 max-w-sm">
                 Telas digitais e painéis exclusivos rastreando o equipamento desde o dia da compra na Nota até o fim do dia de seu descarte por depreciação pela contabilidade T.I.
               </p>
            </div>

          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
}
