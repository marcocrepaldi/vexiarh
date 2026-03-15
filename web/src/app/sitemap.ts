import type { MetadataRoute } from "next";
import { functionalities } from "@/lib/functionalities";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.vexiarh.com.br";

const staticRoutes = [
  "",
  "/funcionalidades",
  "/comunicacao",
  "/analise-clima",
  "/ai-performance-coach",
  "/ai-career-coach",
  "/insights-rh",
  "/automacao-documentos",
  "/controle-de-ponto",
  "/controle-do-time",
  "/central-de-ferias",
  "/gestao-de-ativos",
  "/folha-reembolsos",
  "/repositorio-documentos",
  "/controle-fornecedores",
  "/organograma",
  "/radar-inteligente",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : route === "/funcionalidades" ? 0.95 : 0.8,
    })),
    ...functionalities.map((item) => ({
      url: `${baseUrl}/funcionalidades/${item.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
