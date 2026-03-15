import { Metadata } from "next";
import { Header } from "@/components/Header";
import { CTA } from "@/components/CTA";
import { Users, UserPlus, Fingerprint, Coins, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Controle do Time e Base de Colaboradores | VexiaRH",
  description: "Centralize cadastro, onboarding, acessos e cotas de reconhecimento em uma base unica de colaboradores.",
  openGraph: {
    title: "Gestão Completa de Colaboradores - VexiaRH",
    description: "Administre perfis, hierarquias, acessos e informacoes centrais do time em uma unica estrutura.",
    type: "website",
  },
  alternates: {
    canonical: "/controle-do-time",
  },
};

export default function ControleDoTime() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Controle do Time VexiaRH",
    description: "Gestao de fichas de colaboradores, hierarquias, acessos e distribuicao de cotas de reconhecimento.",
    applicationCategory: "BusinessApplication",
    brand: {
      "@type": "Brand",
      name: "VexiaRH",
    },
  };

  const benefits = [
    {
      icon: <UserPlus className="text-sky-500 w-8 h-8" />,
      title: "Onboarding Fluído",
      text: "Cadastre novos colaboradores com mais rapidez e conecte o onboarding a acessos e informacoes essenciais da jornada."
    },
    {
      icon: <Fingerprint className="text-sky-500 w-8 h-8" />,
      title: "Hierarquia de Acessos",
      text: "Defina visibilidade e permissoes por perfil, preservando modulos sensiveis e respeitando responsabilidades de cada papel."
    },
    {
      icon: <Coins className="text-sky-500 w-8 h-8" />,
      title: "Cotas de Reconhecimento",
      text: "Distribua cotas de reconhecimento e conecte o saldo a rituais de elogio, cultura e recompensas dentro da plataforma."
    },
    {
      icon: <ShieldCheck className="text-sky-500 w-8 h-8" />,
      title: "LGPD Nativa",
      text: "Campos sensiveis podem ser protegidos com regras de acesso e visibilidade mais restritas, reforcando seguranca e compliance."
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
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[100px] -z-0"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 font-bold text-sm mb-6">
              <Users size={18} />
              <span>Core da Plataforma</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              Controle do Time
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
              A base central de colaboradores da VexiaRH organiza <strong>cadastro, acessos, hierarquia e cotas</strong> em um unico ponto de controle.
            </p>
          </div>
        </div>
      </section>

      {/* Como Funciona / Benefícios */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="relative h-[450px] w-full bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-lg p-8 flex flex-col justify-center items-center">
               <div className="w-24 h-24 rounded-full bg-sky-100 flex items-center justify-center mb-6">
                 <Users className="w-12 h-12 text-sky-600" />
               </div>
               <h3 className="text-2xl font-bold text-slate-800 mb-2">Ficha Limpa</h3>
               <p className="text-slate-500 text-center text-sm px-6 max-w-sm">
                 Menos planilhas e cadastros duplicados. Uma ficha unica alimenta diferentes fluxos da operacao.
               </p>
            </div>

            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                A base que sustenta operacao, governanca e escala
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">
                Antes de operar ferias, desempenho, carreira ou acessos, a empresa precisa de uma estrutura confiavel de pessoas. O Controle do Time concentra esse nucleo e reduz falhas de cadastro, visibilidade e desligamento.
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
