import React from "react";
import { CheckCircle2, Clock3, Layers3, ShieldCheck } from "lucide-react";

export function ImpactSection() {
    const pains = [
        {
            title: "Processos espalhados",
            text: "Quando reconhecimento, documentos, ferias, ponto e performance vivem separados, o RH perde tempo costurando operacao.",
        },
        {
            title: "Pouca visibilidade para lideranca",
            text: "Sem uma visao unica do time, gestores cobram tarde, perdem contexto e reagem quando o problema ja cresceu.",
        },
        {
            title: "Baixa capacidade de acao",
            text: "Sem sinais claros, o RH demora para priorizar pendencias, riscos e ciclos que precisam de acompanhamento.",
        },
    ];

    const differentials = [
        {
            icon: Layers3,
            title: "Suite unificada",
            text: "Engajamento, desenvolvimento e operacao de RH no mesmo ambiente, com menos retrabalho e menos troca de sistema.",
        },
        {
            icon: Clock3,
            title: "Rotina mais fluida",
            text: "RH e lideranca acompanham pendencias, ciclos e processos com contexto, historico e prioridade mais claros.",
        },
        {
            icon: ShieldCheck,
            title: "Governanca operacional",
            text: "Permissoes, trilhas, auditoria e controle de visibilidade para uma operacao mais segura e mais confiavel.",
        },
    ];

    return (
        <section id="impacto" className="bg-[#f8fafc] py-20 md:py-28">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12 max-w-3xl md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-[var(--color-primary)] mb-4 tracking-tight">
                        O que a VexiaRH resolve na pratica
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 font-light">
                        A proposta nao e adicionar mais uma ferramenta. E conectar cultura, desenvolvimento e operacao em uma rotina acompanhavel.
                    </p>
                </div>

                <div className="mb-10 grid gap-6 md:grid-cols-3 md:gap-8">
                    {pains.map((pain) => (
                        <div
                            key={pain.title}
                            className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md"
                        >
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                                Dor recorrente
                            </p>
                            <h3 className="mb-3 text-xl font-bold text-[var(--color-primary)]">
                                {pain.title}
                            </h3>
                            <p className="text-[15px] leading-relaxed text-gray-600">{pain.text}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                    {differentials.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md"
                            >
                                <div className="mb-4 text-emerald-500">
                                    <Icon size={32} />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-[var(--color-primary)]">
                                    {item.title}
                                </h3>
                                <p className="text-[15px] leading-relaxed text-gray-600">
                                    {item.text}
                                </p>
                                <div className="mt-5 text-emerald-500">
                                    <CheckCircle2 size={18} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
