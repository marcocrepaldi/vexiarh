import { Metadata } from "next";
import { Header } from "@/components/Header";
import { CTA } from "@/components/CTA";
import { FolderOpen, FileCheck2, UserCircle, Search, FileBadge } from "lucide-react";

export const metadata: Metadata = {
  title: "Repositório de Documentos | Harper Box | VexiaRH",
  description: "Cofre digital corporativo atrelado ao registro do funcionário. Pare de perder contratos, CNHs ou arquivos físicos pelas gavetas.",
  openGraph: {
    title: "Harper Box - Documentação Blindada",
    description: "Cada CPF tem sua pasta viva com a vida pregressa de documentos para fins de compliance trabalhista digital.",
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
    description: "Cofre atrelado nativamente a base de usuários do VexiaRH gerando pastas GED para salvaguarda de contratos admissionais.",
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
      text: "Se daqui 6 anos um processo exigir a ficha de EPIs e ASOs dele? Acesse a Box no perfil da matricula a 2 cliques e faça o download imaculado."
    },
    {
      icon: <UserCircle className="text-amber-500 w-8 h-8" />,
      title: "Acesso Condicionado (Self-Service)",
      text: "Bata o holerite ou informe de imposto e notifique os colaboradores. Eles retiram os recibos do portal sem implorar ou atrasar a menina do DP todo mês."
    },
    {
      icon: <FileBadge className="text-amber-500 w-8 h-8" />,
      title: "Documentação Compulsória na Admissão",
      text: "Quando a empresa envia o convite de vaga ao candidato pela Vexia, ele preenche os dados e faz upload compulsório das imagens: RG, Comprovantes de Base, Diplomas antes de iniciar a contar o primeiro dia."
    },
    {
      icon: <Search className="text-amber-500 w-8 h-8" />,
      title: "Categorização Inteligente de Pastas",
      text: "Evite sub-pastas perdidas no OneDrive confuso do RH. As pastas nascem padronizadas por metadados 'Termos de Contrato', 'Atestados de Ponto', 'ASOs Medicina'."
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
              Perder a folha de um contrato corporativo custoso é inaceitável. O <strong>Harper Box</strong> 
              mantém o arquivo vivo da sua força de trabalho trancado e rastreável.
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
                GED sem depender do T.I Configurar Servidores
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">
                Companhias tentam criar wikis caras. Nós atrelamos o documento na fonte: o Perfil do RH da pessoa. Se há uma recisão amigável, o termo rescisório ficará pendurado lá pro DP corporativo arquivar. Fim de impressões desnecessárias.
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
                 Ao invés de Google Drive isolado, a caixa acusa se a matriz for alterada, tendo visibilidade baseada nos perfis diretos (Apenas RH vê salários).
               </p>
            </div>

          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
}
