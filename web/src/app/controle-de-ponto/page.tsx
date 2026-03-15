import { Metadata } from "next";
import { Header } from "@/components/Header";
import { CTA } from "@/components/CTA";
import { Clock, ShieldCheck, FileClock, CheckCircle2, MapPin, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "Controle de Ponto Web (REP-P) | VexiaRH",
  description: "Sistema de Controle de Ponto web baseado nas normativas do REP-P. Registro de jornada imutável, tratamento de ponto flexível e exportação fiscal automática.",
  openGraph: {
    title: "Controle de Ponto - Segurança e Agilidade",
    description: "Batida de ponto com geolocalizacao, trilha de auditoria e tratamento controlado das excecoes para apoiar conformidade trabalhista.",
    type: "website",
  },
  alternates: {
    canonical: "/controle-de-ponto",
  },
};

export default function ControleDePonto() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Controle de Ponto REP-P VexiaRH",
    description: "Módulo isolado para o REP-P com infraestrutura para registro bruto, gestão por PTRP e geração de AFD e AEJ sob demanda.",
    applicationCategory: "BusinessApplication",
    brand: {
      "@type": "Brand",
      name: "VexiaRH",
    },
  };

  const benefits = [
    {
      icon: <ShieldCheck className="text-teal-500 w-8 h-8" />,
      title: "Registros Brutos Imutáveis (NSR)",
      text: "Cada batida recebe um registro sequencial por CNPJ. O dado original permanece preservado, mesmo quando ha ajustes posteriores no tratamento."
    },
    {
      icon: <FileClock className="text-teal-500 w-8 h-8" />,
      title: "Tratamento de Ponto Restrito (PTRP)",
      text: "Quando ha esquecimento ou divergencia, o ajuste passa por tratamento formal com justificativa e historico completo da intervencao."
    },
    {
      icon: <Landmark className="text-teal-500 w-8 h-8" />,
      title: "Geração de Fiscais: AFD e AEJ",
      text: "O sistema apoia a geracao dos arquivos exigidos para fiscalizacao e auditoria, facilitando a rotina de fechamento por estabelecimento."
    },
    {
      icon: <MapPin className="text-teal-500 w-8 h-8" />,
      title: "Cercas Visuais e Geolocalização",
      text: "A empresa pode exigir geolocalizacao e aplicar regras de registro por localidade, reforcando seguranca operacional em equipes externas ou distribuidas."
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
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] -z-0"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 border border-teal-200 text-teal-800 font-bold text-sm mb-6">
              <Clock size={18} />
              <span>Conformidade & Operação</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              Controle de Ponto Web
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
              Registre jornadas com mais seguranca, trate excecoes com rastreabilidade e mantenha a operacao alinhada as exigencias do <strong>REP-P</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Como Funciona / Benefícios */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="relative h-[450px] w-full bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-lg p-8 flex flex-col justify-center items-center">
               <div className="w-24 h-24 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                 <ShieldCheck className="w-12 h-12 text-teal-600" />
               </div>
               <h3 className="text-2xl font-bold text-slate-800 mb-2">Espelho Blindado</h3>
               <p className="text-slate-500 text-center text-sm px-6 max-w-sm">
                 Ajustes, atestados e correcoes ficam registrados sem perder o espelho original da jornada.
               </p>
            </div>

            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                Controle operacional com mais previsibilidade juridica
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">
                Divergencias de jornada acontecem. O diferencial esta em tratar essas ocorrencias com fluxo adequado, justificativa, aprovacao e trilha de auditoria, em vez de depender de planilhas paralelas.
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

      {/* Detalhamento Adicional */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
           <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">
              Tecnologia Completa
           </h2>
           <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100">
             <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-teal-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed text-[15px]">
                    <strong>Estrutura por estabelecimento:</strong> Configure regras e jornadas por unidade, mantendo controle separado por CNPJ quando necessario.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-teal-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed text-[15px]">
                    <strong>Estrutura documental:</strong> Apoio a rotinas documentais e comprovantes exigidos no contexto do espelho e da fiscalizacao.
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
