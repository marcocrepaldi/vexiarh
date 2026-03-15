import Link from "next/link";

const footerColumns = [
  {
    title: "Plataforma",
    links: [
      { label: "Home", href: "/" },
      { label: "Funcionalidades", href: "/funcionalidades" },
      { label: "IA e operacao RH", href: "/comunicacao" },
      { label: "Agendar demonstracao", href: "/#cta" },
    ],
  },
  {
    title: "Modulos em destaque",
    links: [
      { label: "Reconhecimento e recompensas", href: "/funcionalidades/reconhecimento-e-recompensas" },
      { label: "Academy corporativa", href: "/funcionalidades/academy-corporativa" },
      { label: "Controle de ponto", href: "/funcionalidades/controle-de-ponto" },
      { label: "Reembolsos e despesas", href: "/funcionalidades/reembolsos-e-despesas" },
    ],
  },
  {
    title: "Operacao de RH",
    links: [
      { label: "Central de ferias", href: "/funcionalidades/central-de-ferias" },
      { label: "Repositorio de documentos", href: "/funcionalidades/repositorio-de-documentos" },
      { label: "Controle do time", href: "/funcionalidades/controle-do-time" },
      { label: "Controle de fornecedores", href: "/funcionalidades/controle-de-fornecedores" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-14 md:px-6 md:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              VexiaRH
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
              Plataforma para conectar cultura, desenvolvimento e operacao de RH.
            </h2>
            <p className="mt-5 text-lg font-light leading-relaxed text-white/70">
              Uma estrutura comercial mais clara para apresentar cada funcionalidade da plataforma,
              apoiar SEO e facilitar a conversa com RH, lideranca e operacao.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#cta"
                className="inline-flex items-center rounded-2xl bg-[var(--color-accent)] px-6 py-4 font-bold text-white transition hover:bg-[#d97a1d]"
              >
                Agendar demonstracao
              </Link>
              <a
                href="https://wa.me/5511985266582?text=Ol%C3%A1%2C%20quero%20conhecer%20a%20VexiaRH"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-2xl border border-white/12 bg-white/6 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">
                  {column.title}
                </h3>
                <div className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-sm leading-relaxed text-white/72 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/45">
          <p>VexiaRH. Paginas de produto, modulos e operacao organizadas para descoberta comercial e SEO.</p>
        </div>
      </div>
    </footer>
  );
}
