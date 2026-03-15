import React from "react";
import Link from "next/link";
import {
    Gift,
    GraduationCap,
    MessageSquare,
    Umbrella,
    LineChart,
    Wallet,
    Presentation,
    Briefcase,
    Database,
    Shield,
    Users,
    Target,
    LucideIcon,
} from "lucide-react";

type FeatureProps = {
    icon: LucideIcon;
    title: string;
    text: string;
    href?: string;
};

function FeatureCard({ icon: Icon, title, text, href }: FeatureProps) {
    const content = (
        <article className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 border-t-4 border-[var(--color-accent)] h-full group hover:-translate-y-2">
            <div className="flex items-center mb-5">
                <div
                    className="p-3 bg-orange-50 rounded-xl text-[var(--color-accent)] mr-4 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors duration-300"
                    aria-hidden="true"
                >
                    <Icon size={28} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-primary)] leading-tight">
                    {title}
                </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-[15px]">{text}</p>
        </article>
    );

    if (href) {
        return (
            <Link href={href} className="block h-full">
                {content}
            </Link>
        );
    }

    return content;
}

export function EmployeeFeatures() {
    const features = [
        {
            icon: MessageSquare,
            title: "Comunicacao e orientacoes em um so lugar",
            text: "Campanhas, recados, atalhos, politicas e informacoes importantes sem depender de varios canais paralelos.",
            href: "/funcionalidades/comunicacao-interna",
        },
        {
            icon: Gift,
            title: "Reconhecimento com recompensas",
            text: "Elogios, pontos, loja e historico de resgates em uma experiencia simples para o colaborador e controlada para a empresa.",
            href: "/funcionalidades/reconhecimento-e-recompensas",
        },
        {
            icon: GraduationCap,
            title: "Academy e desenvolvimento continuo",
            text: "Cursos, trilhas, onboarding e certificados em uma jornada de aprendizagem acompanhavel.",
            href: "/funcionalidades/academy-corporativa",
        },
        {
            icon: Target,
            title: "Performance, reflexoes e carreira",
            text: "Metas, ciclos de avaliacao, feedbacks e PDIs com contexto para colaborador, lideranca e RH.",
            href: "/funcionalidades/performance-e-feedbacks",
        },
        {
            icon: Umbrella,
            title: "Solicitacoes e rotinas do dia a dia",
            text: "Ferias, ponto, reembolsos, documentos e ativos em um portal unico de autosservico.",
            href: "/funcionalidades/central-de-ferias",
        },
        {
            icon: Users,
            title: "Conexoes, perfis e vagas internas",
            text: "Diretorio de pessoas, organograma e mobilidade interna para fortalecer a jornada dentro da empresa.",
            href: "/funcionalidades/organograma-dinamico",
        },
    ];

    return (
        <section id="para-voce" className="py-20 md:py-28 bg-[#f8fafc] relative overflow-hidden" aria-labelledby="colab-title">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-transparent to-[var(--color-accent)] opacity-5 rounded-full blur-[100px] -z-0"></div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-3xl mb-12 md:mb-16">
                    <h2 id="colab-title" className="text-3xl md:text-4xl font-black text-[var(--color-primary)] mb-4 tracking-tight">
                        Experiencia completa para o colaborador
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 font-light">
                        Um portal unico para reconhecimento, desenvolvimento, solicitacoes e acompanhamento da propria jornada.
                    </p>
                    <Link
                        href="/funcionalidades"
                        className="mt-6 inline-flex items-center gap-2 text-base font-bold text-[var(--color-primary)] transition hover:text-[var(--color-accent)]"
                    >
                        Ver catalogo completo de funcionalidades
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((f, i) => (
                        <FeatureCard key={i} {...f} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export function CompanyFeatures() {
    const features = [
        {
            icon: Shield,
            title: "Governanca, acessos e seguranca",
            text: "Permissoes por perfil, visibilidade por papel e administracao centralizada para cada frente da operacao.",
            href: "/funcionalidades/controle-do-time",
        },
        {
            icon: Wallet,
            title: "Reconhecimento com controle de cotas",
            text: "Distribua pontos e recompensas com rastreabilidade, historico, carteira, orcamento e conciliacao operacional.",
            href: "/funcionalidades/reconhecimento-e-recompensas",
        },
        {
            icon: Presentation,
            title: "Academy corporativa com acompanhamento",
            text: "Trilhas, presencas, cursos, certificados e progresso acompanhados por RH e lideranca.",
            href: "/funcionalidades/academy-corporativa",
        },
        {
            icon: Target,
            title: "Performance, metas e desenvolvimento",
            text: "Ciclos de avaliacao, metas, calibracao, carreira e reflexoes com visao gerencial consolidada.",
            href: "/funcionalidades/performance-e-feedbacks",
        },
        {
            icon: Briefcase,
            title: "Operacao RH e backoffice no mesmo fluxo",
            text: "Ferias, documentos, ativos, reembolsos, ponto e solicitacoes em um ambiente conectado a rotina real do RH.",
            href: "/funcionalidades/reembolsos-e-despesas",
        },
        {
            icon: Database,
            title: "Analytics e IA aplicados a gestao",
            text: "Sinais, rankings, analises e recomendacoes para apoiar priorizacao, cobrancas e tomada de decisao.",
            href: "/funcionalidades/insights-automaticos",
        },
    ];

    return (
        <section id="para-empresa" className="py-20 md:py-28 bg-white" aria-labelledby="empresa-title">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mb-12 md:mb-16">
                    <h2 id="empresa-title" className="text-3xl md:text-4xl font-black text-[var(--color-primary)] mb-4 tracking-tight">
                        Para RH, lideranca e operacao
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 font-light">
                        Menos ferramentas espalhadas, mais visibilidade sobre cultura, pessoas e processos criticos.
                    </p>
                    <Link
                        href="/funcionalidades"
                        className="mt-6 inline-flex items-center gap-2 text-base font-bold text-[var(--color-primary)] transition hover:text-[var(--color-accent)]"
                    >
                        Explorar paginas por modulo
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((f, i) => (
                        <FeatureCard key={i} {...f} />
                    ))}
                </div>
            </div>
        </section>
    );
}
