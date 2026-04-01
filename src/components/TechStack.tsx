"use client";

import { motion } from "framer-motion";
import { Atom, Layers, Blocks, Code2, Zap, FileCode2 } from "lucide-react";

interface TechCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
    level: string;
    index: number;
}

const levelColor: Record<string, string> = {
    Expert: "text-accent",
    Avançado: "text-emerald-400",
    Sólido: "text-blue-400",
};

const TechCard = ({ icon: Icon, title, description, level, index }: TechCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group relative h-full space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 transition-all hover:border-accent/50 hover:bg-white/[0.08]"
        >
            <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-all group-hover:bg-accent group-hover:text-background">
                    <Icon size={24} />
                </div>
                <span className={`text-xs font-semibold ${levelColor[level] ?? "text-secondary"}`}>
                    {level}
                </span>
            </div>
            <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 text-secondary text-sm">{description}</p>
            </div>
        </motion.div>
    );
};

const technologies = [
    {
        icon: Atom,
        title: "React",
        description: "Interfaces dinâmicas e baseadas em componentes de alta performance.",
        level: "Expert",
    },
    {
        icon: Layers,
        title: "Next.js",
        description: "Framework robusto para SSR, SSG e aplicações web modernas otimizadas.",
        level: "Expert",
    },
    {
        icon: FileCode2,
        title: "TypeScript",
        description: "Tipagem estática para código mais seguro, escalável e com DX superior.",
        level: "Avançado",
    },
    {
        icon: Code2,
        title: "JavaScript",
        description: "Domínio total de ES6+, focado em código limpo e lógica performática.",
        level: "Expert",
    },
    {
        icon: Blocks,
        title: "Styled Components",
        description: "Estilização modular e dinâmica utilizando CSS-in-JS.",
        level: "Sólido",
    },
    {
        icon: Zap,
        title: "Tailwind CSS",
        description: "Estilização utilitária rápida e responsiva para interfaces modernas.",
        level: "Expert",
    },
];

export const TechStack = () => {
    return (
        <section id="tecnologias" className="py-24 px-4">
            <div className="container mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                        Minha <span className="text-accent underline decoration-accent/30 underline-offset-8">Stack Tecnológica</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-secondary">
                        Ferramentas que utilizo para transformar ideias complexas em interfaces elegantes e performáticas.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {technologies.map((tech, index) => (
                        <TechCard key={tech.title} {...tech} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
