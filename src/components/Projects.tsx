"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
    {
        id: "01",
        title: "JCR INDUSTRIAL",
        context: "SISTEMA DE GESTÃO DE CATÁLOGO",
        problem: "Catálogo estático com gestão ineficiente e falta de rastreio de leads.",
        solution: "Arquitetura reativa com Next.js + Supabase e integração direta com WhatsApp.",
        result: "Controle total da base, performance instantânea e fluxo de orçamento centralizado.",
        githubUrl: "https://github.com/LuisGustavoCassioli",
        demoUrl: "https://www.jcrprodutosindustriais.com.br",
    },
    {
        id: "02",
        title: "BLESSED RETÍFICA",
        context: "AUTORIDADE DIGITAL AUTOMOTIVA",
        problem: "Baixa credibilidade digital para serviços de alto valor técnico.",
        solution: "Identidade visual bruta com SEO de alta fidelidade e Next.js otimizado.",
        result: "Lighthouse 100/100 e posicionamento orgânico para serviços especializados.",
        githubUrl: "https://github.com/LuisGustavoCassioli",
        demoUrl: "https://blessedretifica.com.br",
    },
    {
        id: "03",
        title: "CODEGAMES",
        context: "LABORATÓRIO DE E-COMMERCE",
        problem: "Interfaces de lojas complexas costumam ser lentas e genéricas.",
        solution: "UX Edge: Filtros ultra-rápidos e checkout focado em redução de fricção.",
        result: "Experiência de compra fluida com 0ms de delay percebido em ações críticas.",
        githubUrl: "https://github.com/LuisGustavoCassioli/CodeGames",
    },
];

export const Projects = () => {
    return (
        <section id="projetos" className="py-60 px-4 relative bg-background overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col gap-32">
                    {/* Editorial Header */}
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-12 border-b border-white/5 pb-16">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="max-w-2xl"
                        >
                            <span className="text-label mb-6">04 . Selected_Work</span>
                            <h2 className="text-huge text-white uppercase italic leading-[0.8]">
                                Impacto em <span className="text-accent not-italic">Produção.</span>
                            </h2>
                        </motion.div>
                        <p className="text-secondary/40 text-[10px] font-black uppercase tracking-[0.4em] lg:mb-4">
                            Não é portfólio. É prova de execução.
                        </p>
                    </div>

                    <div className="flex flex-col gap-px bg-white/5 border border-white/5">
                        {projects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative grid grid-cols-1 lg:grid-cols-12 items-center bg-background hover:bg-white/[0.01] transition-all p-8 lg:p-20 overflow-hidden"
                            >
                                <div className="lg:col-span-1 border-r border-white/5 h-full flex flex-col justify-between py-2 hidden lg:flex">
                                    <span className="font-mono text-xs text-accent">{project.id}</span>
                                    <div className="h-20 w-px bg-white/10" />
                                </div>

                                <div className="lg:col-span-7 lg:pl-20 space-y-10">
                                    <div>
                                        <span className="text-[10px] items-center uppercase tracking-[0.3em] font-black text-secondary/40 mb-4 block">
                                            {project.context}
                                        </span>
                                        <h3 className="text-4xl sm:text-7xl font-black text-white group-hover:text-accent transition-colors leading-none uppercase tracking-tighter">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                                        {[
                                            { label: "OBJETIVO", value: project.problem },
                                            { label: "CÓDIGO", value: project.solution },
                                            { label: "VALOR", value: project.result },
                                        ].map((stat) => (
                                            <div key={stat.label}>
                                                <span className="text-[9px] font-black text-accent/40 block mb-2 tracking-widest">{stat.label}</span>
                                                <p className="text-secondary text-sm font-bold uppercase tracking-tighter">{stat.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="lg:col-span-4 flex justify-end gap-4 mt-12 lg:mt-0">
                                    {project.demoUrl && (
                                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                                            className="h-20 w-20 flex items-center justify-center bg-white text-black hover:bg-accent hover:text-white transition-all transform hover:-translate-y-2">
                                            <ArrowUpRight size={32} strokeWidth={3} />
                                        </a>
                                    )}
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                        className="h-20 w-20 flex items-center justify-center border border-white/10 bg-white/[0.02] text-white hover:bg-white hover:text-black transition-all transform hover:-translate-y-2">
                                        <Github size={28} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-32 flex justify-center">
                    <a href="https://github.com/LuisGustavoCassioli" target="_blank" rel="noopener noreferrer"
                        className="text-label hover:text-white transition-colors border-b border-accent pb-2">
                        Ver Repositório Completo _
                    </a>
                </div>
            </div>

            {/* Massive side text */}
            <div className="absolute top-1/2 -left-32 -rotate-90 hidden 2xl:block pointer-events-none">
                <span className="text-[180px] font-black text-white/[0.01] uppercase select-none">PRODUCTION</span>
            </div>
        </section>
    );
};
