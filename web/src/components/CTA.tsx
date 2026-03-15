import React from "react";
import { CheckCircle2 } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";

export function CTA() {
    const highlights = [
        "Demonstracao guiada com foco no seu contexto operacional",
        "Mapeamento dos modulos mais aderentes a sua empresa",
        "Proxima conversa ja sai com direcionamento comercial claro",
    ];

    return (
        <section
            id="cta"
            className="py-20 md:py-24 relative overflow-hidden bg-[var(--color-primary)]"
        >
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-[var(--color-accent)]/10 rounded-full blur-3xl"></div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="pt-2">
                        <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-[var(--color-accent)]">
                            Proximo passo comercial
                        </p>
                        <h2 className="mb-6 text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">
                            Veja como a VexiaRH pode funcionar na sua operacao.
                        </h2>
                        <p className="max-w-2xl text-lg font-light leading-relaxed text-teal-50">
                            Agende uma demonstracao para entender como centralizar reconhecimento,
                            desenvolvimento e processos de RH em uma unica plataforma.
                        </p>

                        <div className="mt-8 space-y-4">
                            {highlights.map((item) => (
                                <div key={item} className="flex items-start gap-3 text-white/85">
                                    <CheckCircle2
                                        size={18}
                                        className="mt-1 shrink-0 text-[var(--color-accent)]"
                                    />
                                    <span className="leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 rounded-[1.75rem] border border-white/12 bg-white/6 p-6 text-white/78 backdrop-blur-xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
                                Ideal para
                            </p>
                            <p className="mt-3 text-lg leading-relaxed">
                                Empresas que querem reduzir ferramentas espalhadas e ganhar uma
                                visao mais clara sobre pessoas, cultura e operacao.
                            </p>
                        </div>
                    </div>

                    <LeadForm />
                </div>
            </div>
        </section>
    );
}
