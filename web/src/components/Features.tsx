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
            text: "Feed Oficial com campanhas, atalhos úteis, políticas e comunicação segmentada para sua área.",
        },
        {
            icon: Gift,
            title: "Reconhecimento e Recompensas",
            text: "Elogios (peer-to-peer) que viram pontos, loja para troca por produtos e campanhas sazonais.",
        },
        {
            icon: GraduationCap,
            title: "Academy e Aprendizado",
            text: "Trilhas completas de onboarding, cursos internos e certificados com acompanhamento de evolução.",
        },
        {
            icon: Target,
            title: "Performance e Carreira",
            text: "Check-ins de metas (OKRs), registro de feedbacks contínuos e visibilidade de crescimento.",
        },
        {
            icon: Umbrella,
            title: "Autonomia em Operações",
            text: "Solicitação ágil de férias, licenças e acesso direto ao mural de vagas e oportunidades internas.",
        },
        {
            icon: Users,
            title: "Pessoas e Estrutura",
            text: "Diretório completo de colaboradores e organograma para você se conectar com todo o time.",
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
            icon: Shield,
            title: "Segurança e Branding",
            text: "Autenticação via Google/Firebase, controle por perfis e a identidade visual da sua marca (white-label).",
        },
        {
            icon: Wallet,
            title: "Gestão do Reconhecimento",
            text: "Controle de budget (cotas) por time, histórico de aprovações e rastreamento de resgates da loja.",
        },
        {
            icon: Presentation,
            title: "Administração da Academy",
            text: "Curadoria de treinamentos, trilhas de capacitação e aplicação de avaliações geridas internamente.",
        },
        {
            icon: Target,
            title: "Desempenho e Metas",
            text: "Gestão centralizada de OKRs, acompanhamento de avaliação contínua e trilhas de carreira.",
        },
        {
            icon: Briefcase,
            title: "Operações e Hub de RH",
            text: "Aprovações de férias, controle de ativos/equipamentos e gestão centralizada de vagas internas.",
        },
        {
            icon: Database,
            title: "Analytics e KPIs de Gente",
            text: "Painéis de engajamento, relatórios de alcance de campanhas e radar de pendências e auditoria.",
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
