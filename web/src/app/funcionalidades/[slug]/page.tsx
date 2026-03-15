import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Workflow } from "lucide-react";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { Header } from "@/components/Header";
import {
  functionalities,
  getFunctionalityBySlug,
  getFunctionalityFaq,
  getFunctionalityKeywords,
} from "@/lib/functionalities";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return functionalities.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getFunctionalityBySlug(slug);

  if (!item) {
    return {};
  }

  return {
    title: `${item.title} | VexiaRH`,
    description: item.summary,
    keywords: getFunctionalityKeywords(item),
    alternates: {
      canonical: `/funcionalidades/${item.slug}`,
    },
    openGraph: {
      title: `${item.title} | VexiaRH`,
      description: item.summary,
    },
  };
}

export default async function FunctionalityDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getFunctionalityBySlug(slug);

  if (!item) {
    notFound();
  }

  const faq = getFunctionalityFaq(item);
  const keywords = getFunctionalityKeywords(item);
  const searchAngles = item.seoAngles || [];
  const painPoints = item.painPoints || [];
  const comparison = item.comparison;
  const contextualCta = item.contextualCta;
  const audiences = item.audiences || [];
  const expectedResults = item.expectedResults || [];
  const objections = item.objections || [];
  const relatedItems = functionalities
    .filter((entry) => entry.slug !== item.slug)
    .filter((entry) => item.relatedModules.includes(entry.shortTitle))
    .slice(0, 3);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: item.title,
      description: item.summary,
      about: item.shortTitle,
      keywords: keywords.join(", "),
      author: {
        "@type": "Organization",
        name: "VexiaRH",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((entry) => ({
        "@type": "Question",
        name: entry.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: entry.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: "/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Funcionalidades",
          item: "/funcionalidades",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: item.title,
          item: `/funcionalidades/${item.slug}`,
        },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 pt-24 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <section className="border-b border-slate-100 bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            href="/funcionalidades"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 transition hover:text-[var(--color-primary)]"
          >
            <ArrowLeft size={14} />
            Voltar para funcionalidades
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/15 bg-[var(--color-accent)]/8 px-4 py-2 text-sm font-bold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                <Workflow size={16} />
                {item.category}
              </div>
              <h1 className="max-w-4xl text-4xl font-black leading-[1.05] text-slate-900 md:text-5xl lg:text-6xl">
                {item.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg font-light leading-relaxed text-slate-600 md:text-xl">
                {item.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/#cta"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[var(--color-primary)] px-6 py-4 font-bold text-white transition hover:bg-teal-900"
                >
                  Agendar demonstracao
                  <ArrowRight size={16} />
                </Link>
                {item.deepDiveHref ? (
                  <Link
                    href={item.deepDiveHref}
                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
                  >
                    {item.deepDiveLabel || "Ver pagina relacionada"}
                  </Link>
                ) : null}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-100 bg-slate-50 p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Objetivo da funcionalidade
              </p>
              <h2 className="mt-4 text-2xl font-black text-slate-900">O que ela resolve</h2>
              <p className="mt-4 leading-relaxed text-slate-600">{item.objective}</p>

              <div className="mt-8 space-y-4">
                {item.idealFor.map((entry) => (
                  <div key={entry} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-emerald-500" />
                    <span>{entry}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-slate-200 pt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Termos relacionados
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {keywords.slice(0, 8).map((term) => (
                    <span
                      key={term}
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      {term}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {painPoints.length || searchAngles.length ? (
        <section className="py-16 md:py-20">
          <div className="container mx-auto grid gap-8 px-4 md:px-6 lg:grid-cols-[1fr_1fr]">
            {painPoints.length ? (
              <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_15px_40px_rgba(15,23,42,0.04)]">
                <h2 className="text-3xl font-black text-slate-900">Quando esse modulo ganha relevancia</h2>
                <div className="mt-8 space-y-4">
                  {painPoints.map((pain) => (
                    <div key={pain} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-rose-500" />
                      <span className="leading-relaxed">{pain}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {searchAngles.length ? (
              <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_15px_40px_rgba(15,23,42,0.04)]">
                <h2 className="text-3xl font-black text-slate-900">Intencoes de busca relacionadas</h2>
                <div className="mt-8 space-y-4">
                  {searchAngles.map((angle) => (
                    <div key={angle} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                      <span className="leading-relaxed">{angle}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {audiences.length || expectedResults.length ? (
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto grid gap-8 px-4 md:px-6 lg:grid-cols-[1fr_1fr]">
            {audiences.length ? (
              <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_15px_40px_rgba(15,23,42,0.04)]">
                <h2 className="text-3xl font-black text-slate-900">Para quem esta funcionalidade faz mais sentido</h2>
                <div className="mt-8 space-y-5">
                  {audiences.map((audience) => (
                    <div
                      key={audience.title}
                      className="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5"
                    >
                      <h3 className="text-xl font-black text-slate-900">{audience.title}</h3>
                      <p className="mt-2 leading-relaxed text-slate-600">{audience.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {expectedResults.length ? (
              <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_15px_40px_rgba(15,23,42,0.04)]">
                <h2 className="text-3xl font-black text-slate-900">Resultados esperados</h2>
                <div className="mt-8 space-y-4">
                  {expectedResults.map((result) => (
                    <div key={result} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-emerald-500" />
                      <span className="leading-relaxed">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      <section className="py-16 md:py-20">
        <div className="container mx-auto grid gap-8 px-4 md:px-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_15px_40px_rgba(15,23,42,0.04)]">
            <h2 className="text-3xl font-black text-slate-900">Ganhos para a operacao</h2>
            <div className="mt-8 space-y-4">
              {item.gains.map((gain) => (
                <div key={gain} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-emerald-500" />
                  <span className="leading-relaxed">{gain}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[1.5rem] border border-slate-100 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                Conecta com
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {item.relatedModules.map((moduleName) => (
                  <span
                    key={moduleName}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {moduleName}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_15px_40px_rgba(15,23,42,0.04)]">
            <h2 className="text-3xl font-black text-slate-900">Como funciona</h2>
            <div className="mt-8 space-y-6">
              {item.howItWorks.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-6"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                    Etapa {index + 1}
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-slate-900">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {comparison ? (
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8 max-w-3xl">
              <h2 className="text-3xl font-black text-slate-900">Comparativo de operacao</h2>
              <p className="mt-4 text-lg font-light leading-relaxed text-slate-600">
                Um jeito simples de mostrar a diferenca entre tocar esse processo manualmente e
                operar a funcionalidade dentro da plataforma.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-rose-100 bg-white p-8 shadow-[0_15px_40px_rgba(15,23,42,0.04)]">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-500">
                  Processo manual
                </p>
                <div className="mt-6 space-y-4">
                  {comparison.manual.map((entry) => (
                    <div key={entry} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-rose-500" />
                      <span className="leading-relaxed">{entry}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-[0_15px_40px_rgba(15,23,42,0.04)]">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
                  Com a VexiaRH
                </p>
                <div className="mt-6 space-y-4">
                  {comparison.platform.map((entry) => (
                    <div key={entry} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-emerald-500" />
                      <span className="leading-relaxed">{entry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {relatedItems.length ? (
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8 max-w-3xl">
              <h2 className="text-3xl font-black text-slate-900">Funcionalidades relacionadas</h2>
              <p className="mt-4 text-lg font-light leading-relaxed text-slate-600">
                Estas paginas ajudam a aprofundar a conversa comercial em torno desta frente da
                plataforma.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {relatedItems.map((relatedItem) => (
                <article
                  key={relatedItem.slug}
                  className="rounded-[1.75rem] border border-slate-100 bg-white p-7 shadow-[0_12px_35px_rgba(15,23,42,0.05)]"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                    {relatedItem.category}
                  </p>
                  <h3 className="mt-4 text-2xl font-black text-slate-900">
                    {relatedItem.shortTitle}
                  </h3>
                  <p className="mt-4 leading-relaxed text-slate-600">{relatedItem.summary}</p>
                  <Link
                    href={`/funcionalidades/${relatedItem.slug}`}
                    className="mt-6 inline-flex items-center gap-2 font-bold text-[var(--color-primary)] transition hover:text-[var(--color-accent)]"
                  >
                    Ver funcionalidade
                    <ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {objections.length ? (
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8 max-w-3xl">
              <h2 className="text-3xl font-black text-slate-900">Objeções comuns</h2>
              <p className="mt-4 text-lg font-light leading-relaxed text-slate-600">
                Uma forma comercial de responder as duvidas mais frequentes antes mesmo da
                demonstracao.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {objections.map((objection) => (
                <article
                  key={objection.title}
                  className="rounded-[1.75rem] border border-slate-100 bg-white p-7 shadow-[0_12px_35px_rgba(15,23,42,0.05)]"
                >
                  <h3 className="text-2xl font-black text-slate-900">{objection.title}</h3>
                  <p className="mt-4 leading-relaxed text-slate-600">{objection.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900">Perguntas frequentes</h2>
            <p className="mt-4 text-lg font-light leading-relaxed text-slate-600">
              Uma camada adicional de contexto para reforcar busca organica e responder duvidas
              comuns sobre esta funcionalidade.
            </p>
          </div>

          <div className="space-y-4">
            {faq.map((entry) => (
              <article
                key={entry.question}
                className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-[0_10px_25px_rgba(15,23,42,0.04)]"
              >
                <h3 className="text-xl font-black text-slate-900">{entry.question}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{entry.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {contextualCta ? (
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="rounded-[2.25rem] border border-slate-100 bg-[var(--color-primary)] p-8 shadow-[0_24px_70px_rgba(15,23,42,0.18)] md:p-10">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">
                  Conversa comercial
                </p>
                <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-4xl">
                  {contextualCta.title}
                </h2>
                <p className="mt-4 text-lg font-light leading-relaxed text-white/78">
                  {contextualCta.text}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/#cta"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[var(--color-accent)] px-6 py-4 font-bold text-white transition hover:bg-[#d97a1d]"
                >
                  Agendar demonstracao
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/funcionalidades"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/8 px-6 py-4 font-semibold text-white transition hover:bg-white/12"
                >
                  Ver outras funcionalidades
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <CTA />
    </div>
  );
}
