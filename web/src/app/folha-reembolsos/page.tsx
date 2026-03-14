import { Metadata } from "next";
import { Header } from "@/components/Header";
import { CTA } from "@/components/CTA";
import { CircleDollarSign, Receipt, ScrollText, CheckCircle2, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Gestão Financeira, Folha e Reembolsos | VexiaRH",
  description: "Traga os lançamentos pontuais e adiantamentos da operação diária, comprovantes de reembolso e variáveis diretamente para quem vai fechar a folha limpa no final do mês.",
  openGraph: {
    title: "Consolidação de Despesas & Folha Integrada",
    description: "Um backoffice de adiantamentos salariais e reembolsos de viagens gerido 100% online sem troca de e-mails, indo do caixa à contabilização.",
    type: "website",
  },
  alternates: {
    canonical: "/folha-reembolsos",
  },
};

export default function GestaoDeFolha() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Módulo Financeiro Pessoal VexiaRH",
    description: "Reembolsos de quilometragem e almoço sobem a lógicas hierárquicas. Contabilidade do RH provisiona os desembolsos isolados na conta do colaborador.",
    applicationCategory: "BusinessApplication",
    brand: {
      "@type": "Brand",
      name: "VexiaRH",
    },
  };

  const benefits = [
    {
      icon: <Receipt className="text-emerald-500 w-8 h-8" />,
      title: "Prestação de Contas Simplificada App/Web",
      text: "Viagem na rua? O engenheiro sobe o bilhete da UBER pela plataforma e define rubricas, centros de custo contábil ou projetos do cliente onde vai cobrar aquela taxa."
    },
    {
      icon: <CheckCircle2 className="text-emerald-500 w-8 h-8" />,
      title: "Aprovação Transparente de Despesas",
      text: "Quando solicitado, chega ao VP na hora para dar ok nos R$500 do hotel, indo posteriormente para liquidação do Finanças da Matriz. Processo engavetado não mais."
    },
    {
      icon: <ScrollText className="text-emerald-500 w-8 h-8" />,
      title: "Extrato Direto na Ficha",
      text: "Quando o financeiro paga o reembolso, avisa o funcionário que o TED ou PIX da Nota de Crédito da matrícula caiu, fechando o protocolo, aliviando o whatsapp de líderes."
    },
    {
      icon: <DollarSign className="text-emerald-500 w-8 h-8" />,
      title: "Exportação Redonda para a Folha Nominal",
      text: "Acabe com envios de Excel de Pró-labores, comissões espúrias de Ponto, horas extras e rubricas picadas. Consolidamos as provisões para importar em seu ERP em definitivo."
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
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] -z-0"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold text-sm mb-6">
              <CircleDollarSign size={18} />
              <span>Provisionamento Limpo Contábil</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              Gestão de Folha e Reembolsos
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
              Retire as cobranças mesquinhas de notas fiscais da portaria e insira um processo blindado, que entrega
              o provisionamento perfeitamente na mão para a contabilidade operar na data-corte.
            </p>
          </div>
        </div>
      </section>

      {/* Como Funciona / Benefícios */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="relative h-[450px] w-full bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-lg p-8 flex flex-col justify-center items-center">
               <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                 <CircleDollarSign className="w-12 h-12 text-emerald-600" />
               </div>
               <h3 className="text-2xl font-bold text-slate-800 mb-2">Folha Livre de Estresse (Fevereiro)</h3>
               <p className="text-slate-500 text-center text-sm px-6 max-w-sm">
                 Ao invés de dias varando noites lançando planilhas pra fechar cálculos salariais, gere arquivos diretos para sistemas contábeis já chancelados por todo mundo até a diretoria.
               </p>
            </div>

            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                Transparência de Despesas Variáveis.
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">
                Esquemas soltos geram perda de caixa. Na VexiaRH a nota obriga justificativa, categoria, verificação lógica pela liderança (o supervisor estava em viagem pra aquele projeto ali naquele dia?), gerando relatórios de gastos mensais onde o vazamento vai aparecer para o executivo principal.
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
