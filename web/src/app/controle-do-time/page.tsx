import { Metadata } from "next";
import { Header } from "@/components/Header";
import { CTA } from "@/components/CTA";
import { Users, UserPlus, Fingerprint, Coins, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Controle do Time e Base de Colaboradores | VexiaRH",
  description: "Centralize o onboarding, controle de perfis de acesso, e saldo de reconhecimento. A ficha limpa de todos os talentos da sua organização em um só lugar.",
  openGraph: {
    title: "Gestão Completa de Colaboradores - VexiaRH",
    description: "Crie, edite e promova funcionários com facilidade, alterando hierarquias e distribuindo budget de reconhecimento na plataforma.",
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
    description: "Gestão de fichas de funcionários, níveis de hierarquia do sistema e distribuição de cotas de incentivo.",
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
      text: "Cadastre um novo talento em segundos e gere os acessos do Google Workspace ou credenciais nativas automaticamente nas chaves do Perfil."
    },
    {
      icon: <Fingerprint className="text-sky-500 w-8 h-8" />,
      title: "Hierarquia de Acessos",
      text: "Separe rigidamente as permissões: o que um Gestor de Área enxerga difere radicalmente dos módulos sensíveis liberados para um Administrador do DP."
    },
    {
      icon: <Coins className="text-sky-500 w-8 h-8" />,
      title: "Cotas de Reconhecimento",
      text: "Atribua orçamento (moedas figurativas) nos perfis mensalmente. A base utiliza esse saldo para enviar feedbacks virtuais de 'Bom Trabalho' pelo mural logado."
    },
    {
      icon: <ShieldCheck className="text-sky-500 w-8 h-8" />,
      title: "LGPD Nativa",
      text: "Campos de diversidade, salários base e anotações médicas guardadas com restrição máxima, seguindo frameworks atuais de anonimização e compliance."
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
              Sua fonte única da verdade para dados de RH. O <strong>Controle de Time</strong> não é apenas 
              um cadastro: é a engrenagem que dita os acessos corporativos e limites financeiros de todo o site.
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
                 Chega de cruzar planilhas fragmentadas. O colaborador preenche a base e a ficha unificada espalha os vínculos.
               </p>
            </div>

            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                Fundação para Operações Ágeis e Gestão Distribuída
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">
                Antes de aprovar férias ou fazer matriz de sucessão com I.A, os dados e cargos devem estar firmados. O painel da VexiaRH agiliza o Offboarding bloqueando integrações na hora, sem deixar contas presas à mercê da falha humana ao final da rescisão.
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
