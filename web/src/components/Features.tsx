import React from "react";
import {
    Trophy,
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
};

function FeatureCard({ icon: Icon, title, text }: FeatureProps) {
    return (
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
}

export function EmployeeFeatures() {
    const features = [
        {
            icon: MessageSquare,
            title: "Comunicação e Intranet",
            text: "Feed Oficial com campanhas, atalhos corporativos, políticas e Radar Inteligente de pendências.",
        },
        {
            icon: Gift,
            title: "Reconhecimento Gamificado",
            text: "Distribua Harper Points através de elogios peer-to-peer e resgate produtos ou prêmios na loja exclusiva.",
        },
        {
            icon: GraduationCap,
            title: "Academy e Trilhas de Saber",
            text: "Cursos internos e onboarding automatizado. Capacite e emita certificados com acompanhamento real.",
        },
        {
            icon: Target,
            title: "Performance e Reflections",
            text: "Check-ins de metas (OKRs), avaliações de desempenho (Reflections), feedbacks 360 e PDIs estruturados.",
        },
        {
            icon: Umbrella,
            title: "Hub de Operações e Benefícios",
            text: "Concentre solicitações de Férias, Controle de ponto (Timekeeping), Reembolsos e gerenciamento de Ativos.",
        },
        {
            icon: Users,
            title: "Pessoas, Conexões e Vagas",
            text: "Diretório de perfis, organograma dinâmico e mural de Vagas Internas para evolução constante.",
        },
    ];

    return (
        <section id="para-voce" className="py-20 md:py-28 bg-[#f8fafc] relative overflow-hidden" aria-labelledby="colab-title">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-transparent to-[var(--color-accent)] opacity-5 rounded-full blur-[100px] -z-0"></div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-3xl mb-12 md:mb-16">
                    <h2 id="colab-title" className="text-3xl md:text-4xl font-black text-[var(--color-primary)] mb-4 tracking-tight">
                        Para você, colaborador
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 font-light">
                        Uma jornada empoderadora de reconhecimento, facilidades e desenvolvimento contínuo.
                    </p>
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
            title: "Segurança e Automação Web",
            text: "Design White-label exclusivo, painéis administrativos com autenticação via provedores confiáveis.",
        },
        {
            icon: Wallet,
            title: "Gestão de Cotas e Orçamento",
            text: "Acompanhe orçamentos de recompensas por centro de custo, histórico de resgates e integrações sistêmicas.",
        },
        {
            icon: Presentation,
            title: "Liderança na Academy corporativa",
            text: "Administração de treinamentos, gestão de presenças, cadastro de trilhas completas e controle de proficiência.",
        },
        {
            icon: Target,
            title: "Governança de Metas e OKRs",
            text: "Visões gerenciais consolidadas, relatórios de avaliações contínuas, calibração de performance e 9-box.",
        },
        {
            icon: Briefcase,
            title: "Backoffice Automatizado",
            text: "Aprovações de Reembolsos, Admissão/Férias, registro de Ativos (notebooks, etc) e Vagas (Internal Jobs).",
        },
        {
            icon: Database,
            title: "Painéis Analíticos e KPIs Humanos",
            text: "Engajamento real-time, aderência a campanhas, demografia, retenção e o Radar Inteligente para os gestores.",
        },
    ];

    return (
        <section id="para-empresa" className="py-20 md:py-28 bg-white" aria-labelledby="empresa-title">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mb-12 md:mb-16">
                    <h2 id="empresa-title" className="text-3xl md:text-4xl font-black text-[var(--color-primary)] mb-4 tracking-tight">
                        Para sua empresa, RH e liderança
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 font-light">
                        Eficiência, transparência e insights para gerir pessoas com dados.
                    </p>
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
