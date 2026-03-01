"use client";
import { useEffect } from "react";

const primary = "#005B63";
const accent = "#F18921";

export default function Home() {
  useEffect(() => {
    const pre = document.getElementById("pre-loader");
    if (pre) pre.style.display = "none";
  }, []);

  return (
    <>
      <div className="wrapper">
        <div id="pre-loader">
          <img src="/images/pre-loader/loader-10.svg" alt="loading" />
        </div>

        <section id="hero"></section>

        <header id="header" className="header default text-dark">
          <div className="menu" id="onepagenav">
            <nav id="menu" className="mega-menu">
              <section className="menu-list-items">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 position-relative">
                      <ul className="menu-logo">
                        <li>
                          <a href="#hero">
                            <img id="logo_img" src="/demo-one-page/agency-02/images/logo.png" alt="VexiaRH" />
                          </a>
                        </li>
                      </ul>
                      <div className="menu-bar">
                        <ul className="menu-links">
                          <li className="active">
                            <a href="#hero">Início</a>
                          </li>
                          <li>
                            <a href="#para-voce">Para você</a>
                          </li>
                          <li>
                            <a href="#para-empresa">Para sua empresa</a>
                          </li>
                          <li>
                            <a href="#impacto">Por que VexiaRH</a>
                          </li>
                          <li>
                            <a href="#cta">Pilotar</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </nav>
          </div>
        </header>

        <section
          id="hero"
          className="slider-parallax height-100vh banner-agency-02 parallax d-flex align-items-center"
          style={{
            background: "url(/demo-one-page/agency-02/images/bg/01.jpg) center center / cover no-repeat",
            color: "#fff",
          }}
        >
          <div className="slider-content-middle">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10">
                  <div className="slider-content text-start">
                    <p className="mb-10" style={{ color: accent, letterSpacing: 1 }}>Sistema Operacional de Engajamento</p>
                    <h1 className="mt-10" style={{ fontWeight: 800 }}>
                      VexiaRH: Onde o seu talento encontra o futuro da sua carreira.
                    </h1>
                    <p className="mt-20 lead">
                      Reconhecimento diário, recompensas tangíveis e desenvolvimento contínuo conectados às metas e valores da sua
                      empresa. Cultura em ação, todos os dias.
                    </p>
                    <div className="mt-30">
                      <a className="button" href="#cta" style={{ background: accent, borderColor: accent }}>
                        Ver uma demo guiada
                      </a>
                      <a className="button button-border white ms-3" href="#para-voce">
                        Como funciona
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="para-voce" className="page-section-ptb" style={{ background: "#f7f9fb" }}>
          <div className="container">
            <div className="row mb-40">
              <div className="col-lg-8">
                <h2 className="mb-20" style={{ color: primary }}>Para você, colaborador</h2>
                <p className="lead mb-0">A jornada completa de reconhecimento, recompensas e desenvolvimento.</p>
              </div>
            </div>
            <div className="row gy-4">
              <Feature
                icon="fa-trophy"
                title="Reconhecimento Instantâneo"
                text="Elogios peer-to-peer e líder-colaborador que viram pontos para recompensas reais."
              />
              <Feature
                icon="fa-gift"
                title="Loja de Recompensas"
                text="Catálogo com rastreio de pedidos em tempo real para dar valor concreto ao reconhecimento."
              />
              <Feature
                icon="fa-graduation-cap"
                title="Harper Academy"
                text="Treinamentos, trilhas de carreira e certificações com visibilidade do seu avanço."
              />
              <Feature
                icon="fa-comments"
                title="People Hub & Comunicação"
                text="Comunicados, rituais de clima e intranet organizada em um único lugar."
              />
              <Feature
                icon="fa-umbrella-beach"
                title="Autonomia no RH"
                text="Solicitação e acompanhamento de férias e licenças sem fricção."
              />
            </div>
          </div>
        </section>

        <section id="para-empresa" className="page-section-ptb">
          <div className="container">
            <div className="row mb-40">
              <div className="col-lg-8">
                <h2 className="mb-20" style={{ color: primary }}>Para sua empresa, RH e liderança</h2>
                <p className="lead mb-0">Eficiência, transparência e insights para gerir pessoas com dados.</p>
              </div>
            </div>
            <div className="row gy-4">
              <Feature
                icon="fa-chart-line"
                title="Painéis de Engajamento"
                text="Dashboards para participação, talentos, lacunas e KPIs de pontos."
              />
              <Feature
                icon="fa-wallet"
                title="Gestão de Cotas"
                text="Controle de orçamento de reconhecimento por time e período, com transparência."
              />
              <Feature
                icon="fa-chalkboard-teacher"
                title="Administração da Academy"
                text="Curadoria de cursos, provas, trilhas e certificados sem sistemas paralelos."
              />
              <Feature
                icon="fa-briefcase"
                title="People Hub & Operações"
                text="Comunicados, acessos, férias, ativos e vagas internas em um hub único."
              />
              <Feature
                icon="fa-database"
                title="Analytics & Relatórios"
                text="Relatórios operacionais e insights rápidos para decisões de gente."
              />
              <Feature
                icon="fa-shield-alt"
                title="White-label & Branding"
                text="Login seguro (Firebase) e branding dinâmico: logo, cores e mensagens da sua marca."
              />
            </div>
          </div>
        </section>

        <section id="impacto" className="page-section-ptb" style={{ background: "#f7f9fb" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <h2 style={{ color: primary }}>Por que o VexiaRH?</h2>
                <p className="lead">Benefícios estratégicos e operacionais em uma única plataforma.</p>
              </div>
            </div>
            <div className="row gy-4">
              <Impact title="Impulsiona a cultura" text="Transforma valores em comportamentos diários mensuráveis." />
              <Impact title="Reduz churn & silos" text="Aumenta engajamento e pertencimento, fortalecendo o employer branding." />
              <Impact title="Eficiência para o RH" text="Centraliza processos, reduz tickets recorrentes e traz transparência." />
            </div>
          </div>
        </section>

        <section id="cta" className="page-section-ptb text-white" style={{ background: primary }}>
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-lg-8">
                <h2 className="mb-15">Vamos rodar um piloto de 30 dias com um squad?</h2>
                <p className="mb-0">
                  Configuramos valores, cotas e catálogo de recompensas. Medimos engajamento e adesão da equipe. Topa ver uma demo guiada?
                </p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <a className="button" style={{ background: accent, borderColor: accent }} href="mailto:contato@vexiarh.com.br">
                  Quero a demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

type FeatureProps = {
  icon: string;
  title: string;
  text: string;
};

function Feature({ icon, title, text }: FeatureProps) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="p-4 h-100 shadow-sm bg-white" style={{ borderTop: `3px solid ${accent}` }}>
        <div className="d-flex align-items-center mb-3">
          <div className="me-3" style={{ color: accent }}>
            <i className={`fa ${icon} fa-2x`}></i>
          </div>
          <h5 className="mb-0" style={{ color: primary }}>
            {title}
          </h5>
        </div>
        <p className="mb-0">{text}</p>
      </div>
    </div>
  );
}

type ImpactProps = {
  title: string;
  text: string;
};

function Impact({ title, text }: ImpactProps) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="p-4 h-100 bg-white shadow-sm">
        <h5 style={{ color: primary }}>{title}</h5>
        <p className="mb-0">{text}</p>
      </div>
    </div>
  );
}
