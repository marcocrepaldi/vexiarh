import { Metadata } from "next";
import { Header } from "@/components/Header";
import { CTA } from "@/components/CTA";
import { FileText, Cpu, Eye, FileDigit, Zap, MonitorCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Automação de Documentos via IA | VexiaRH",
  description: "Automatize a leitura de atestados, recibos, notas e outros documentos com IA aplicada a triagem e validacao operacional.",
  openGraph: {
    title: "Leitura Automática de Documentos - IA",
    description: "IA para extrair dados de documentos, reduzir digitacao manual e acelerar triagem de processos de RH e backoffice.",
    type: "website",
  },
  alternates: {
    canonical: "/automacao-documentos",
  },
};

export default function AutomacaoDocs() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Automação Extrativa em Documentos de RH",
    description: "OCR com IA para leitura, classificacao e validacao inicial de documentos submetidos na operacao de RH.",
    applicationCategory: "BusinessApplication",
    brand: {
      "@type": "Brand",
      name: "VexiaRH",
    },
  };

  const benefits = [
    {
      icon: <Eye className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Visão Computacional (OCR / ICR Avançado)",
      text: "Reconhecimento de campos manuscritos e documentos de baixa qualidade para reduzir retrabalho e acelerar a leitura inicial."
    },
    {
      icon: <FileDigit className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Automação de Pré-Triagem de Reembolsos",
      text: "A IA extrai dados como CNPJ, data e valor, e sinaliza inconsistencias em relacao as regras da politica aplicada."
    },
    {
      icon: <MonitorCheck className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Alimentação do Banco de Horas em Frações",
      text: "A plataforma cruza horarios, justificativas e regras operacionais para apoiar a classificacao correta de ausencias e abonos."
    },
    {
      icon: <Zap className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Alerta Imediato de Fraude e Documentos Adulterados",
      text: "Indicios de adulteracao, informacoes incoerentes e campos suspeitos podem ser sinalizados para revisao da equipe responsavel."
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
              <FileText size={18} />
              <span>Backoffice Automatizado</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              Análise de Documentos
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
              Automatize a leitura inicial de documentos e reduza o tempo gasto com digitacao, triagem e validacoes repetitivas no backoffice.
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
                Mais velocidade para processos que ainda dependem de leitura manual
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">
               Se a equipe ainda precisa revisar documento por documento para fechar ponto, reembolsos ou validacoes de rotina, ha uma oportunidade clara de ganho operacional. A analise automatizada da VexiaRH acelera a triagem e destaca apenas os casos que pedem intervencao humana.
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

            <div className="order-1 md:order-2 relative h-[450px] w-full bg-slate-100 border border-slate-200 rounded-3xl overflow-hidden shadow-lg p-8 flex flex-col justify-center items-center">
               <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                 <Cpu className="w-12 h-12 text-emerald-600" />
               </div>
               <h3 className="text-2xl font-bold text-slate-800 mb-2">Extração Limpa e Jurídica</h3>
               <p className="text-slate-500 text-center text-sm px-6 max-w-sm">
                 Processamento estruturado para ler dados, apoiar conformidade e entregar uma base mais organizada para analise final.
               </p>
            </div>

          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
