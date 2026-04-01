"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Tecnologias", href: "#tecnologias" },
    { name: "Serviços", href: "#servicos" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
];

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { rootMargin: "-40% 0px -55% 0px" }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4",
                isScrolled ? "py-4" : "py-6"
            )}
        >
            <nav className="container mx-auto">
                <div className={cn(
                    "flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300",
                    isScrolled ? "glass" : "bg-transparent"
                )}>
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 font-mono text-xl font-bold tracking-tighter">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-background">
                            L
                        </span>
                        <span>Cassioli.</span>
                    </a>

                    {/* Desktop Nav */}
                    <ul className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => {
                            const id = link.href.replace("#", "");
                            const isActive = activeSection === id;
                            return (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className={cn(
                                            "text-sm font-medium transition-colors",
                                            isActive ? "text-accent" : "text-secondary hover:text-accent"
                                        )}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            );
                        })}
                        <li>
                            <a
                                href="#contato"
                                className="rounded-full bg-accent px-5 py-2 text-sm font-bold text-background transition-all hover:bg-accent/90"
                            >
                                Let&apos;s Talk
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="text-white md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Abrir menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-4 right-4 mt-2 overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a]/95 p-6 backdrop-blur-xl md:hidden"
                    >
                        <ul className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-lg font-medium text-secondary hover:text-accent transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="#contato"
                                    className="flex h-12 items-center justify-center rounded-2xl bg-accent font-bold text-background"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Let&apos;s Talk
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
