import { Metadata } from "next";
import { Header } from "@/components/Header";
import { CTA } from "@/components/CTA";
import { FileText, Cpu, Eye, FileDigit, Zap, MonitorCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Automação de Documentos via IA | VexiaRH",
  description: "Diga adeus à triagem humana e lentidão. Nossa IA extrai dados, valida atestados médicos, recibos, folhas de ponto e qualquer imagem na central documental para RH.",
  openGraph: {
    title: "Leitura Automática de Documentos - IA",
    description: "Análise Visual da VexiaRH de atestados de horas, vales, notas de reembolsos e contratos que enviam dados digitais sem transcrição manual.",
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
    description: "OCR IA da VexiaRH na qual robôs escaneiam atestados apontando a validade jurídica de um papel submetido em segundos.",
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
      text: "Reconhecimento de caligrafia de médicos e números de CIDs ilegíveis usando algoritmos pré-treinados para evitar retrabalhos que as máquinas burras reprovariam."
    },
    {
      icon: <FileDigit className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Automação de Pré-Triagem de Reembolsos",
      text: "Enviou a nota do restaurante corporativo? A IA extrai o CNPJ, data, valor exato e aponta distorções nas Políticas (Ex: Almoço às 00h30)."
    },
    {
      icon: <MonitorCheck className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Alimentação do Banco de Horas em Frações",
      text: "Atestou das 14h às 15:30? A análise computa que a ausência do Ponto corresponde a um abono, não desconto, cruzando com a agenda letiva do dia."
    },
    {
      icon: <Zap className="text-[var(--color-accent)] w-8 h-8" />,
      title: "Alerta Imediato de Fraude e Documentos Adulterados",
      text: "Marcas d'água forjadas, datas arranhadas e CNPJs de clínicas que não constam em bases oficiais são flagrados e encaminhados para análise estrita de auditoria da sua equipe."
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
              Retire o fardo burocrático do analista e deixe a máquina auditar as laudas.
              Da validação do CID de saúde no atestado à triagem do ticket de táxi, <strong>entregue velocidade</strong>.
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
                Reduza SLAs Infinitos de Atendimento na Extranet
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">
               Se a sua equipe de Departamento Pessoal passa 4 dias somando cupons de viagens para fechar a folha, algo estrutural está errado. A solução ótica da VexiaRH aprova centenas em menos de um minuto e bloqueia aqueles em desconformidade, entregando um montante linear e limpo para o Financeiro.
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
                 Processamento que reconhece mais que campos padrão, mas também a coerência jurídica das informações preenchidas nas rubricas.
               </p>
            </div>

          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
