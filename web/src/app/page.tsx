import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { EmployeeFeatures, CompanyFeatures } from "@/components/Features";
import { ImpactSection } from "@/components/ImpactSection";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "VexiaRH | Plataforma Completa de Cultura, Performance e Operações de RH",
  description: "Aumente o engajamento do seu time com o VexiaRH. Uma plataforma white-label com reconhecimento, loja de recompensas, academy, férias, OKRs e analytics.",
  openGraph: {
    title: "VexiaRH | Plataforma Completa de Cultura e Operações",
    description: "Reconhecimento, recompensas, academy, vagas internas e muito mais. O hub perfeito para a sua operação de pessoas.",
  }
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "VexiaRH",
    operatingSystem: "WebBrowser",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
    },
    description: "Plataforma SaaS white-label para integração de RH: ferramentas de comunicação interna, engajamento de pessoas, reconhecimento com recompensas, avaliação de performance e operações como solicitações de férias.",
    brand: {
      "@type": "Brand",
      name: "VexiaRH"
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      <main className="flex-grow">
        <Hero />
        <EmployeeFeatures />
        <CompanyFeatures />
        <ImpactSection />
        <CTA />
      </main>
    </div>
  );
}
