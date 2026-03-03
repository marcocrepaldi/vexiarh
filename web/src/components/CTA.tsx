import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
    return (
        <section
            id="cta"
            className="py-20 md:py-24 relative overflow-hidden bg-[var(--color-primary)]"
        >
            {/* Background Graphic elements */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-[var(--color-accent)]/10 rounded-full blur-3xl"></div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="lg:w-2/3">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                            Vamos rodar um piloto de 30 dias com um squad?
                        </h2>
                        <p className="text-lg text-teal-50 font-light leading-relaxed max-w-2xl">
                            Configuramos valores, cotas e catálogo de recompensas. Medimos
                            engajamento e adesão da equipe. Topa ver uma demo guiada?
                        </p>
                    </div>
                    <div className="lg:w-1/3 flex justify-start lg:justify-end w-full">
                        <Link
                            href="mailto:contato@vexiarh.com.br"
                            className="inline-flex items-center justify-center gap-3 bg-[var(--color-accent)] hover:bg-[#d97a1d] text-white px-8 py-5 rounded-xl font-bold text-lg transition-all w-full sm:w-auto shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            Quero a demo
                            <ArrowRight size={20} strokeWidth={2.5} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
