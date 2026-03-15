import { Metadata } from "next";
import { Header } from "@/components/Header";
import { CTA } from "@/components/CTA";
import { FolderOpen, FileCheck2, UserCircle, Search, FileBadge } from "lucide-react";

export const metadata: Metadata = {
  title: "Repositório de Documentos | Harper Box | VexiaRH",
  description: "Repositrio documental integrado ao cadastro do colaborador, com acesso controlado, organizacao por categoria e rastreabilidade para RH.",
  openGraph: {
    title: "Harper Box - Documentação Blindada",
    description: "Organize contratos, recibos, comprovantes e documentos obrigatorios em um repositorio centralizado e seguro.",
    type: "website",
  },
  alternates: {
    canonical: "/repositorio-documentos",
  },
};

export default function RepositorioDocumentos() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Repositório Eletrônico Harper Box",
    description: "Repositorio ligado nativamente a base de usuarios do VexiaRH para guarda estruturada de contratos, recibos e documentos de RH.",
    applicationCategory: "DocumentManagementApplication",
    brand: {
      "@type": "Brand",
      name: "VexiaRH",
    },
  };

  const benefits = [
    {
      icon: <FileCheck2 className="text-amber-500 w-8 h-8" />,
      title: "Cofre por Matrícula (Dossiê Completo)",
      text: "Cada colaborador conta com um dossie completo, facilitando a localizacao de ASOs, contratos, fichas e outros documentos em poucos cliques."
    },
    {
      icon: <UserCircle className="text-amber-500 w-8 h-8" />,
      title: "Acesso Condicionado (Self-Service)",
      text: "Documentos como holerites e informes podem ser disponibilizados no portal com acesso controlado, reduzindo solicitacoes repetitivas ao DP."
    },
    {
      icon: <FileBadge className="text-amber-500 w-8 h-8" />,
      title: "Documentação Compulsória na Admissão",
      text: "No fluxo de admissao, a empresa pode solicitar uploads obrigatorios de documentos antes do inicio da jornada do colaborador."
    },
    {
      icon: <Search className="text-amber-500 w-8 h-8" />,
      title: "Categorização Inteligente de Pastas",
      text: "As pastas nascem padronizadas por categoria e metadados, facilitando busca, auditoria e governanca documental."
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
              <FolderOpen size={18} />
              <span>G.E.D Nativo VexiaRH</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              Repositório de Documentos
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
              O <strong>Harper Box</strong> centraliza a documentacao do colaborador com organizacao, acesso controlado e rastreabilidade para a operacao de RH.
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
                GED nativo, conectado ao cadastro do colaborador
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">
                Em vez de dispersar arquivos em drives e pastas paralelas, a documentacao fica ligada ao perfil da pessoa, com estrutura padronizada e menos dependencia de processos manuais.
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
               <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                 <FolderOpen className="w-12 h-12 text-amber-600" />
               </div>
               <h3 className="text-2xl font-bold text-slate-800 mb-2">Segurança Centralizada</h3>
               <p className="text-slate-500 text-center text-sm px-6 max-w-sm">
                 Controle de acesso por perfil e rastreio de alteracoes para dar mais seguranca a documentos sensiveis da operacao.
               </p>
            </div>

          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
}
