"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const pathname = usePathname();

    const closeMenu = () => setMenuOpen(false);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
        if (target.startsWith("#") && pathname === "/") {
            e.preventDefault();
            const targetElement = document.querySelector(target);
            if (targetElement) {
                const headerOffset = 90; // Adjust for fixed header height
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
            closeMenu();
        }
    };

    const navLinks = [
        { id: "hero", label: "Início" },
        { id: "para-voce", label: "Para você" },
        { id: "para-empresa", label: "Para sua empresa" },
        { id: "impacto", label: "Por que VexiaRH" },
        { id: "cta", label: "Pilotar" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-white py-5"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <Link href="/#hero" onClick={closeMenu} className="flex-shrink-0">
                        <Image
                            src="/demo-one-page/agency-02/images/logo.png"
                            alt="VexiaRH"
                            width={148}
                            height={42}
                            className="h-8 md:h-10 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isHome = pathname === "/";
                            const href = isHome ? `#${link.id}` : `/#${link.id}`;

                            return (
                                <a
                                    key={link.id}
                                    href={href}
                                    onClick={(e) => handleNavClick(e, `#${link.id}`)}
                                    className="text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors cursor-pointer"
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                        <Link
                            href="/comunicacao"
                            className="text-[var(--color-primary)] font-bold hover:text-[var(--color-accent)] transition-colors"
                        >
                            Conheça a Plataforma
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-[var(--color-primary)] hover:bg-gray-100 rounded-md transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Abrir menu"
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div
                className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl flex flex-col gap-2 overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[400px] border-t border-gray-100 py-4 px-6 opacity-100" : "max-h-0 opacity-0 px-6 py-0"
                    }`}
            >
                {navLinks.map((link) => {
                    const isHome = pathname === "/";
                    const href = isHome ? `#${link.id}` : `/#${link.id}`;

                    return (
                        <a
                            key={link.id}
                            href={href}
                            onClick={(e) => handleNavClick(e, `#${link.id}`)}
                            className="text-gray-800 text-lg font-medium py-3 border-b border-gray-50 hover:text-[var(--color-primary)] transition-colors cursor-pointer"
                        >
                            {link.label}
                        </a>
                    );
                })}
                <Link
                    href="/comunicacao"
                    onClick={closeMenu}
                    className="text-[var(--color-primary)] text-lg font-bold py-3 hover:text-[var(--color-accent)] transition-colors"
                >
                    Conheça a Plataforma
                </Link>
            </div>
        </header>
    );
}
