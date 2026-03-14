import { Metadata } from "next";
import { Header } from "@/components/Header";
import { CTA } from "@/components/CTA";
import { Palmtree, CalendarCheck2, History, MessageSquareShare, FileSpreadsheet } from "lucide-react";

export const metadata: Metadata = {
  title: "Gestão Central de Férias e Licenças | VexiaRH",
  description: "Balanço de descansos, recibo compulsório e trâmites logísticos de período aquisitivo de Férias em uma fila de aprovação organizada entre líderes.",
  openGraph: {
    title: "Central de Férias: Fluxo Descomplicado",
    description: "Antecipe abonos, licenças de saúde e combine recesos do time, verificando o saldo direto do portal.",
    type: "website",
  },
  alternates: {
    canonical: "/central-de-ferias",
  },
};

export default function CentralDeFerias() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Central de Férias VexiaRH",
    description: "Agendamento transparente com visão de conflitos (overlap) da unidade para assegurar a operação contínua sem prejudicar as jornadas garantidas por lei.",
    applicationCategory: "BusinessApplication",
    brand: {
      "@type": "Brand",
      name: "VexiaRH",
    },
  };

  const benefits = [
    {
      icon: <CalendarCheck2 className="text-amber-500 w-8 h-8" />,
      title: "Solicitações Self-Service",
      text: "O funcionário simula abonos e escolhe seus blocos de dias via web ou celular. O sistema valida automaticamente as regras trabalhistas (ex: proibido começar dia útil que prece feriado) avisando do erro."
    },
    {
      icon: <History className="text-amber-500 w-8 h-8" />,
      title: "Visão do Período Aquisitivo Transparente",
      text: "Dúvidas crônicas como 'Quantos dias de direito eu tenho mesmo?' e ligações estressantes ao DP acabam. O painel lista dias ganhos, usufruídos e data crítica para férias dobradas."
    },
    {
      icon: <MessageSquareShare className="text-amber-500 w-8 h-8" />,
      title: "Aprovações em Cascata de Gestores",
      text: "O fluxo não cai no limbo cego de e-mails. Quando pedidas, a plataforma avisa os supervisores de primeiro escalão. Ao serem homologadas, elas fluem ao Backoffice automaticamente."
    },
    {
      icon: <FileSpreadsheet className="text-amber-500 w-8 h-8" />,
      title: "Matriz de Conflitos do Time (Overlap)",
      text: "Se 3 analistas tentarem feriar na mesma janela, o portal avisa a liderança, gerando um Kanban para acomodar o planejamento ideal e não estagnar as operações da conta cliente."
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
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] -z-0"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 font-bold text-sm mb-6">
              <Palmtree size={18} />
              <span>Bem-estar & Work-life Balance</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              Central de Férias
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
              Retire as planilhas e o desgaste de negociar janelas difíceis. O <strong>Portal Unificado de Descanso</strong> da 
              VexiaRH lida com as matemáticas da CLT e entrega fluxos pacíficos e diretos.
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
               <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                 <Palmtree className="w-12 h-12 text-amber-600" />
               </div>
               <h3 className="text-2xl font-bold text-slate-800 mb-2">Descomplicando a Lei</h3>
               <p className="text-slate-500 text-center text-sm px-6 max-w-sm">
                 Checagens nativas de leis estaduais, feriados nacionais e barreiras trabalhistas para bloqueio imediato caso o pedido contenha risco jurídico.
               </p>
            </div>

            {/* Direita: Benefícios Listados */}
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                Do Requerimento à Folha de Forma Visível
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">
                Esqueceram de assinar o Recibo Oficial impresso de Férias e a data limite de multa estourou? Pare de apagar incêndios. O balanço digital da Vexia integra prazos pré-notificando todos sobre os limites legais (DSR/Multas) e unifica na Folha.
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
