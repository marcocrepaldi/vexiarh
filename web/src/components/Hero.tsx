import React from "react";
import Image from "next/image";

export function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white"
        >
            {/* Split Background Elements simulating the original design */}
            <div className="absolute top-0 left-0 w-full md:w-2/3 h-full bg-[var(--color-primary)] z-0 rounded-br-[150px] shadow-2xl"></div>
            <div className="absolute top-0 right-0 w-full md:w-[45%] h-full bg-[var(--color-accent)] z-0 block"></div>

            {/* Decorative wavy/circle shape on the right side over the orange to blend */}
            <div className="hidden md:block absolute top-[-10%] right-[15%] w-[600px] h-[120%] bg-white/10 rounded-[100px] -rotate-12 z-0"></div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Text Block */}
                    <div className="max-w-xl py-10 md:py-0">
                        <p className="text-[var(--color-accent)] font-black tracking-widest uppercase mb-4 text-sm md:text-base drop-shadow-sm">
                            Sistema Operacional de Engajamento
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-black text-white leading-[1.1] mb-6 drop-shadow-md">
                            VexiaRH: Onde o seu talento encontra o futuro da sua carreira.
                        </h1>
                        <p className="text-lg md:text-xl text-teal-50 mb-8 leading-relaxed font-light">
                            Reconhecimento diário, recompensas tangíveis e desenvolvimento
                            contínuo conectados às metas e valores da sua empresa. Cultura em
                            ação, todos os dias.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#cta"
                                className="bg-[var(--color-accent)] hover:bg-[#d97a1d] text-white px-8 py-4 rounded-xl font-bold text-center transition-all shadow-lg hover:shadow-[0_8px_20px_rgba(241,137,33,0.3)] hover:-translate-y-1"
                            >
                                Ver uma demo guiada
                            </a>
                            <a
                                href="#para-voce"
                                className="bg-transparent hover:bg-white/10 text-white border-2 border-white/40 hover:border-white px-8 py-4 rounded-xl font-bold text-center transition-all"
                            >
                                Como funciona
                            </a>
                        </div>
                    </div>

                    {/* Right Image Block */}
                    <div className="relative h-[400px] md:h-[600px] w-full flex justify-end items-end z-10">
                        {/* Notice: utilizing the custom background image placed by the user */}
                        <div className="relative w-full h-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 transform md:-rotate-2 transition-transform hover:rotate-0 duration-500">
                            <Image
                                src="/demo-one-page/agency-02/images/bg/02.jpg"
                                alt="VexiaRH Profissional"
                                fill
                                className="object-cover object-center"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
