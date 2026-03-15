import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { EmployeeFeatures, CompanyFeatures } from "@/components/Features";
import { ImpactSection } from "@/components/ImpactSection";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "VexiaRH | Plataforma de RH, Performance e Operacao em um so lugar",
  description: "Centralize reconhecimento, desenvolvimento, documentos, ferias, ponto, analytics e IA em uma plataforma feita para RH e lideranca.",
  openGraph: {
    title: "VexiaRH | Plataforma para RH, lideranca e operacao",
    description: "Uma plataforma unica para cultura, performance, autosservico do colaborador e operacao de RH.",
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
    description: "Plataforma SaaS para integrar reconhecimento, desenvolvimento, performance e operacao de RH em um unico ambiente.",
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
        <CompanyFeatures />
        <EmployeeFeatures />
        <ImpactSection />
        <CTA />
      </main>
    </div>
  );
}
