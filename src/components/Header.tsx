"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Skills", href: "#tecnologias" },
    { name: "Soluções", href: "#servicos" },
    { name: "Projetos", href: "#projetos" },
    { name: "Trajetória", href: "#experiencia" },
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
        sectionIds.push("contato");
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
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled ? "bg-background/90 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-8"
            )}
        >
            <nav className="container mx-auto px-4 md:px-12 max-w-7xl">
                <div className="flex items-center justify-between">
                    {/* Logo - Minimal Brutalist */}
                    <a href="#" className="flex items-center gap-4 group">
                        <div className="h-10 w-10 flex items-center justify-center bg-accent text-white font-black text-xl transition-all group-hover:-rotate-90 active:scale-95">
                            L
                        </div>
                        <div className="flex flex-col">
                            <span className="font-black text-white uppercase tracking-[0.2em] text-xs leading-none">
                                Cassioli
                            </span>
                            <span className="text-[8px] font-bold text-accent uppercase tracking-[0.4em] mt-1 italic">
                                .High_End
                            </span>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden items-center gap-16 md:flex">
                        <ul className="flex items-center gap-10">
                            {navLinks.map((link) => {
                                const id = link.href.replace("#", "");
                                const isActive = activeSection === id;
                                return (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className={cn(
                                                "text-label transition-all relative py-2 block",
                                                isActive ? "text-accent" : "text-secondary/40 hover:text-white"
                                            )}
                                        >
                                            {link.name}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="nav-underline"
                                                    className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                                                />
                                            )}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>

                        <a
                            href="#contato"
                            className="bg-white px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-black hover:bg-accent hover:text-white transition-all active:scale-95"
                        >
                            Estabelecer Contato //
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="text-white md:hidden p-3 bg-white/5 active:scale-90 transition-all border border-white/5"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Menu"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="fixed inset-y-0 right-0 w-full sm:w-80 bg-background border-l border-white/5 p-12 z-50 flex flex-col md:hidden"
                    >
                        <div className="flex justify-end mb-12">
                            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                                <X size={32} />
                            </button>
                        </div>
                        <ul className="flex flex-col gap-10">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-4xl font-black text-white hover:text-accent transition-all uppercase tracking-tighter italic"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li className="pt-12 mt-12 border-t border-white/5">
                                <a
                                    href="#contato"
                                    className="flex h-20 items-center justify-center bg-white text-black text-xs font-black uppercase tracking-[0.3em] active:scale-95"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Estabelecer Contato
                                </a>
                            </li>
                        </ul>

                        <div className="mt-auto">
                            <p className="text-[10px] font-mono text-white/10 uppercase tracking-widest">
                                [ LGC_SYSTEM_READY ]
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
