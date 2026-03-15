import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers3 } from "lucide-react";
import { CTA } from "@/components/CTA";
import { Header } from "@/components/Header";
import { functionalities, functionalityCategories } from "@/lib/functionalities";

export const metadata: Metadata = {
  title: "Funcionalidades da VexiaRH | Paginas SEO por modulo",
  description:
    "Conheca as funcionalidades da VexiaRH em paginas exclusivas com objetivo, ganhos e funcionamento de cada modulo da plataforma.",
  alternates: {
    canonical: "/funcionalidades",
  },
  openGraph: {
    title: "Funcionalidades da VexiaRH",
    description:
      "Um catalogo completo das funcionalidades da VexiaRH para cultura, desenvolvimento, IA e operacao de RH.",
  },
};

export default function FunctionalitiesPage() {
  const categoryCounts = functionalityCategories.map((category) => ({
    category,
    total: functionalities.filter((item) => item.category === category).length,
  }));
  const featuredModules = functionalities.filter((item) =>
    [
      "reconhecimento-e-recompensas",
      "academy-corporativa",
      "performance-e-feedbacks",
      "controle-de-ponto",
      "central-de-ferias",
      "reembolsos-e-despesas",
      "repositorio-de-documentos",
    ].includes(item.slug),
  );
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Funcionalidades da VexiaRH",
      description:
        "Catalogo de funcionalidades da VexiaRH com paginas exclusivas para cada modulo da plataforma.",
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: functionalities.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        url: `/funcionalidades/${item.slug}`,
      })),
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 pt-24 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <section className="border-b border-slate-100 bg-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-emerald-800">
              <Layers3 size={16} />
              Paginas por funcionalidade
            </div>
            <h1 className="mb-6 text-4xl font-black leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Um espaco dedicado para cada funcionalidade da plataforma.
            </h1>
            <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed text-slate-600 md:text-xl">
              Aqui voce encontra paginas exclusivas para cada modulo da VexiaRH, com foco em
              objetivo, ganhos e funcionamento. A ideia e facilitar SEO, navegacao comercial e
              comparacao entre frentes da plataforma.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {categoryCounts.map((item) => (
              <div
                key={item.category}
                className="rounded-[1.75rem] border border-slate-100 bg-slate-50 p-6 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Categoria
                </p>
                <h2 className="mt-3 text-2xl font-black text-slate-900">{item.category}</h2>
                <p className="mt-2 text-slate-600">
                  {item.total} paginas exclusivas prontas para navegacao e indexacao.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 md:text-4xl">
              Modulos com maior potencial comercial
            </h2>
            <p className="mt-4 text-lg font-light leading-relaxed text-slate-600">
              Estas paginas ja receberam camadas extras de copy, comparativo e CTA contextual para
              funcionar melhor como landing pages de modulo.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredModules.map((item) => (
              <article
                key={item.slug}
                className="rounded-[1.75rem] border border-slate-100 bg-white p-7 shadow-[0_12px_35px_rgba(15,23,42,0.05)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                  {item.category}
                </p>
                <h3 className="mt-4 text-2xl font-black leading-snug text-slate-900">
                  {item.shortTitle}
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600">{item.summary}</p>
                <Link
                  href={`/funcionalidades/${item.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-bold text-[var(--color-primary)] transition hover:text-[var(--color-accent)]"
                >
                  Abrir landing de modulo
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {functionalityCategories.map((category) => {
        const items = functionalities.filter((item) => item.category === category);

        return (
          <section key={category} className="py-16 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
              <div className="mb-10 max-w-3xl">
                <h2 className="text-3xl font-black text-slate-900 md:text-4xl">{category}</h2>
                <p className="mt-4 text-lg font-light leading-relaxed text-slate-600">
                  Navegue pelas funcionalidades desta frente e trabalhe cada pagina como um ativo
                  especifico de posicionamento e SEO.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {items.map((item) => (
                  <article
                    key={item.slug}
                    className="flex h-full flex-col rounded-[1.75rem] border border-slate-100 bg-white p-7 shadow-[0_12px_35px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                      {item.shortTitle}
                    </p>
                    <h3 className="mt-4 text-2xl font-black leading-snug text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-4 flex-grow leading-relaxed text-slate-600">
                      {item.summary}
                    </p>

                    <div className="mt-6 space-y-3">
                      {item.gains.slice(0, 2).map((gain) => (
                        <div key={gain} className="flex items-start gap-3 text-sm text-slate-600">
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-emerald-500"
                          />
                          <span>{gain}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/funcionalidades/${item.slug}`}
                      className="mt-7 inline-flex items-center gap-2 text-base font-bold text-[var(--color-primary)] transition hover:text-[var(--color-accent)]"
                    >
                      Ver pagina da funcionalidade
                      <ArrowRight size={16} />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTA />
    </div>
  );
}
