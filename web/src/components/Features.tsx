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
            icon: Trophy,
            title: "Reconhecimento Instantâneo",
            text: "Elogios peer-to-peer e líder-colaborador que viram pontos para recompensas reais.",
        },
        {
            icon: Gift,
            title: "Loja de Recompensas",
            text: "Catálogo com rastreio de pedidos em tempo real para dar valor concreto ao reconhecimento.",
        },
        {
            icon: GraduationCap,
            title: "VexiaRH Academy",
            text: "Treinamentos, trilhas de carreira e certificações com visibilidade do seu avanço.",
        },
        {
            icon: MessageSquare,
            title: "People Hub & Comunicação",
            text: "Comunicados, rituais de clima e intranet organizada em um único lugar.",
        },
        {
            icon: Umbrella,
            title: "Autonomia no RH",
            text: "Solicitação e acompanhamento de férias e licenças sem fricção.",
        },
    ];

    return (
        <section id="para-voce" className="py-20 md:py-28 bg-[#f8fafc]" aria-labelledby="colab-title">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mb-12 md:mb-16">
                    <h2 id="colab-title" className="text-3xl md:text-4xl font-black text-[var(--color-primary)] mb-4 tracking-tight">
                        Para você, colaborador
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 font-light">
                        A jornada completa de reconhecimento, recompensas e desenvolvimento.
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
            icon: LineChart,
            title: "Painéis de Engajamento",
            text: "Dashboards para participação, talentos, lacunas e KPIs de pontos.",
        },
        {
            icon: Wallet,
            title: "Gestão de Cotas",
            text: "Controle de orçamento de reconhecimento por time e período, com transparência.",
        },
        {
            icon: Presentation,
            title: "Administração da Academy",
            text: "Curadoria de cursos, provas, trilhas e certificados sem sistemas paralelos.",
        },
        {
            icon: Briefcase,
            title: "People Hub & Operações",
            text: "Comunicados, acessos, férias, ativos e vagas internas em um hub único.",
        },
        {
            icon: Database,
            title: "Analytics & Relatórios",
            text: "Relatórios operacionais e insights rápidos para decisões de gente.",
        },
        {
            icon: Shield,
            title: "White-label & Branding",
            text: "Login seguro (Firebase) e branding dinâmico: logo, cores e mensagens da sua marca.",
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
