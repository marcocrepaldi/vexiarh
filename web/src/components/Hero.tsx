import React from "react";
import Image from "next/image";
import { ArrowRight, BarChart3, ShieldCheck, Sparkles, Users2 } from "lucide-react";

export function Hero() {
    const trustPoints = [
        "Menos planilhas e sistemas soltos",
        "Mais visibilidade para RH e lideranca",
        "Melhor experiencia para o colaborador",
    ];

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-slate-900"
        >
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
                <Image
                    src="/vexiarh-abstract-bg.png"
                    alt="VexiaRH Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="absolute top-0 left-0 w-full md:w-2/3 h-full bg-[var(--color-primary)]/80 backdrop-blur-md z-0 rounded-br-[150px] shadow-2xl"></div>
            <div className="absolute top-0 right-0 w-full md:w-[45%] h-full bg-gradient-to-b from-[var(--color-accent)]/80 to-transparent z-0 block"></div>
            <div className="hidden md:block absolute top-[-10%] right-[15%] w-[600px] h-[120%] bg-white/5 backdrop-blur-xl rounded-[100px] -rotate-12 z-0 border border-white/10"></div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="max-w-xl py-10 md:py-0">
                        <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-[var(--color-accent)] drop-shadow-sm md:text-base">
                            Plataforma de RH, cultura e operacao
                        </p>
                        <h1 className="mb-6 text-4xl font-black leading-[1.05] text-white drop-shadow-md md:text-5xl lg:text-[4rem]">
                            Engajamento, performance e operacao de RH em um so sistema.
                        </h1>
                        <p className="mb-8 text-lg font-light leading-relaxed text-teal-50 md:text-xl">
                            A VexiaRH centraliza reconhecimento, metas, treinamentos, ferias,
                            documentos, ponto, analytics e inteligencia artificial para RH e
                            lideranca operarem com mais clareza e menos retrabalho.
                        </p>

                        <div className="mb-8 grid gap-3 sm:grid-cols-3">
                            {trustPoints.map((point) => (
                                <div
                                    key={point}
                                    className="rounded-2xl border border-white/12 bg-white/8 px-4 py-4 text-sm font-medium text-white/88 backdrop-blur-md"
                                >
                                    {point}
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <a
                                href="#cta"
                                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[var(--color-accent)] px-8 py-4 text-center font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[#d97a1d] hover:shadow-[0_8px_20px_rgba(241,137,33,0.3)]"
                            >
                                Agendar demonstracao
                                <ArrowRight size={18} />
                            </a>
                            <a
                                href="https://wa.me/5511985266582?text=Ol%C3%A1%2C%20quero%20conhecer%20a%20plataforma%20VexiaRH"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-xl border-2 border-white/40 bg-transparent px-8 py-4 text-center font-bold text-white transition-all hover:border-white hover:bg-white/10"
                            >
                                Falar com especialista
                            </a>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                            <span className="inline-flex items-center gap-2">
                                <ShieldCheck size={16} className="text-[var(--color-accent)]" />
                                Governanca e acessos por perfil
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <Sparkles size={16} className="text-[var(--color-accent)]" />
                                IA aplicada a rotina de RH
                            </span>
                        </div>
                    </div>

                    <div className="relative h-[400px] md:h-[600px] w-full flex justify-end items-end z-10">
                        <div className="absolute left-0 top-8 z-20 hidden w-52 rounded-[1.75rem] border border-white/15 bg-white/90 p-5 text-slate-900 shadow-2xl backdrop-blur md:block">
                            <div className="mb-3 flex items-center gap-3">
                                <div className="rounded-2xl bg-slate-100 p-2 text-[var(--color-primary)]">
                                    <BarChart3 size={18} />
                                </div>
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                                    Visao executiva
                                </p>
                            </div>
                            <p className="text-3xl font-black text-[var(--color-primary)]">360°</p>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                Cultura, performance e operacao acompanhadas no mesmo ambiente.
                            </p>
                        </div>

                        <div className="relative w-full h-full max-w-lg overflow-hidden rounded-3xl border-4 border-white/20 shadow-2xl transition-transform duration-500 md:-rotate-2 hover:rotate-0">
                            <Image
                                src="/vexiarh-dashboard-mockup.png"
                                alt="VexiaRH Plataforma Dashboard"
                                fill
                                className="object-cover object-center"
                                priority
                            />
                        </div>

                        <div className="absolute bottom-6 right-0 z-20 w-56 rounded-[1.75rem] border border-white/15 bg-[var(--color-primary)]/92 p-5 text-white shadow-2xl backdrop-blur md:right-[-1.5rem]">
                            <div className="mb-3 flex items-center gap-3">
                                <div className="rounded-2xl bg-white/10 p-2 text-[var(--color-accent)]">
                                    <Users2 size={18} />
                                </div>
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                                    Para RH e lideres
                                </p>
                            </div>
                            <p className="text-lg font-bold leading-snug">
                                Menos atrito na operacao. Mais clareza nas decisoes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
