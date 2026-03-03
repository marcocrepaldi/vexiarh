import React from "react";
import { CheckCircle2 } from "lucide-react";

export function ImpactSection() {
    const impacts = [
        {
            title: "Impulsiona a cultura",
            text: "Transforma valores em comportamentos diários mensuráveis.",
        },
        {
            title: "Reduz churn & silos",
            text: "Aumenta engajamento e pertencimento, fortalecendo o employer branding.",
        },
        {
            title: "Eficiência para o RH",
            text: "Centraliza processos, reduz tickets recorrentes e traz transparência.",
        },
    ];

    return (
        <section id="impacto" className="py-20 md:py-28 bg-[#f8fafc]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-[var(--color-primary)] mb-4 tracking-tight">
                        Por que o VexiaRH?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 font-light">
                        Benefícios estratégicos e operacionais em uma única plataforma.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {impacts.map((impact, i) => (
                        <div
                            key={i}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                        >
                            <div className="mb-4 text-emerald-500">
                                <CheckCircle2 size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                                {impact.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-[15px]">
                                {impact.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
