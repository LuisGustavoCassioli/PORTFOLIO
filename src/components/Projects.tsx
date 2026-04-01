"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    demoUrl?: string;
    gradient: string;
    index: number;
}

const ProjectCard = ({ title, description, tags, githubUrl, demoUrl, gradient, index }: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col rounded-3xl border border-white/10 bg-white/5 overflow-hidden transition-all hover:border-accent/40 hover:bg-white/[0.08]"
        >
            {/* Visual Preview */}
            <div className={`relative h-40 w-full ${gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30" />
                <span className="relative z-10 font-mono text-2xl font-bold tracking-tight text-white drop-shadow-lg">
                    {title.split(" ")[0]}
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0f0f0f] to-transparent" />
            </div>

            <div className="flex flex-1 flex-col justify-between p-8">
                <div>
                    <div className="flex items-start justify-between">
                        <h3 className="text-2xl font-bold transition-all group-hover:text-accent">{title}</h3>
                        <div className="flex gap-4">
                            <a href={githubUrl} target="_blank" rel="noopener noreferrer"
                                className="text-secondary transition-all hover:text-accent" title="Ver no GitHub">
                                <Github size={20} />
                            </a>
                            {demoUrl && (
                                <a href={demoUrl} target="_blank" rel="noopener noreferrer"
                                    className="text-secondary transition-all hover:text-accent" title="Ver Demo">
                                    <ExternalLink size={20} />
                                </a>
                            )}
                        </div>
                    </div>
                    <p className="mt-4 text-secondary leading-relaxed">{description}</p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const projects = [
    {
        title: "JCR Produtos Industriais",
        description: "Site institucional moderno para distribuidora industrial, com catálogo de produtos dinâmico via Supabase, painel administrativo CRUD com autenticação por hierarquia (Master/Staff) e deploy otimizado no Vercel.",
        tags: ["React", "Vite", "TypeScript", "Supabase", "Tailwind CSS"],
        githubUrl: "https://github.com/LuisGustavoCassioli",
        demoUrl: "https://www.jcrprodutosindustriais.com.br",
        gradient: "bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900",
    },
    {
        title: "Blessed Retífica de Motores",
        description: "Website de alta performance para empresa de retífica automotiva. Otimizado para SEO e Core Web Vitals com scores perfeitos no Lighthouse. Design moderno com glassmorphism e animações fluidas.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        githubUrl: "https://github.com/LuisGustavoCassioli",
        demoUrl: "https://blessedretifica.com.br",
        gradient: "bg-gradient-to-br from-orange-900 via-red-900 to-rose-900",
    },
    {
        title: "Portfolio Pessoal",
        description: "Este próprio portfólio — construído com Next.js 15, App Router, Tailwind CSS v4 e Framer Motion. Design minimalista dark com glassmorphism, animações limpas e total responsividade.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS v4", "Framer Motion"],
        githubUrl: "https://github.com/LuisGustavoCassioli/portfolio",
        gradient: "bg-gradient-to-br from-cyan-900 via-teal-900 to-emerald-900",
    },
    {
        title: "CodeGames 🎮",
        description: "Loja virtual de jogos eletrônicos com catálogo dinâmico, carrinho de compras com LocalStorage, sistema de autenticação, filtros por nome e processo de checkout completo — sem backend.",
        tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
        githubUrl: "https://github.com/LuisGustavoCassioli/CodeGames",
        gradient: "bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900",
    },
];

export const Projects = () => {
    return (
        <section id="projetos" className="py-24 px-4">
            <div className="container mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                        Projetos <span className="text-accent underline decoration-accent/30 underline-offset-8">Destaques</span>
                    </h2>
                    <p className="mt-4 max-w-2xl text-secondary">
                        Uma seleção de projetos reais que demonstram meu compromisso com código limpo, performance e interfaces excepcionais.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} {...project} index={index} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://github.com/LuisGustavoCassioli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 font-medium transition-all hover:bg-white/10 hover:border-white/40 focus:outline-none"
                    >
                        Ver todos os repositórios no GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};
