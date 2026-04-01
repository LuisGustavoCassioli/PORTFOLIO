"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const cvFiles = [
    { label: "🇧🇷 Português", href: "/Currículo Portuguese.pdf" },
    { label: "🇺🇸 English", href: "/Currículo English.pdf" },
];

const CvDropdown = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setOpen((v) => !v)}
                className="flex h-12 items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-6 font-medium text-accent transition-all hover:bg-accent/20 focus:outline-none"
            >
                <Download size={17} />
                Currículo
                <ChevronDown size={15} className={`transition-transform ${open ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full mt-2 w-48 overflow-hidden rounded-2xl border border-white/10 bg-[#111] shadow-xl backdrop-blur-md"
                    >
                        {cvFiles.map((file) => (
                            <a
                                key={file.label}
                                href={file.href}
                                download
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-secondary transition-colors hover:bg-white/5 hover:text-white"
                            >
                                {file.label}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const Hero = () => {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />

            <div className="container mx-auto text-center">
                {/* Availability Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                    </span>
                    <span className="text-secondary">Disponível para novos projetos</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                >
                    <h2 className="mb-4 font-mono text-sm font-medium tracking-widest text-accent uppercase">
                        Luis Gustavo Cassioli
                    </h2>
                    <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
                        Criando interfaces de{" "}
                        <span className="text-accent text-glow">alto desempenho</span> que
                        geram resultados
                    </h1>
                </motion.div>

                <motion.p
                    className="mx-auto mt-8 max-w-2xl text-lg text-secondary sm:text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
                >
                    Especialista em Front-End | React | Next.js | Focado em UI/UX de excelência
                </motion.p>

                <motion.div
                    className="mt-12 flex flex-wrap justify-center gap-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <a
                        href="#projetos"
                        className="flex h-12 items-center justify-center rounded-full bg-accent px-8 font-medium text-background transition-all hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                    >
                        Ver Projetos
                    </a>
                    <a
                        href="#contato"
                        className="flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 font-medium transition-all hover:bg-white/10 hover:border-white/40 focus:outline-none"
                    >
                        Entrar em Contato
                    </a>
                    {/* CV Dropdown */}
                    <div className="relative">
                        <CvDropdown />
                    </div>
                    <a
                        href="https://github.com/LuisGustavoCassioli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 font-medium transition-all hover:bg-white/10 hover:border-white/40 focus:outline-none"
                    >
                        GitHub ↗
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/20 p-1">
                    <motion.div
                        className="h-2 w-1 rounded-full bg-accent"
                        animate={{ y: [0, 16, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
};
