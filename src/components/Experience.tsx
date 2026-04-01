"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    description: string;
    tags: string[];
}

const experiences: ExperienceItem[] = [
    {
        role: "Desenvolvedor Front-End Freelancer",
        company: "Autônomo",
        period: "2023 — Presente",
        description: "Desenvolvimento de sites e sistemas web para clientes de diversos segmentos. Entrega de projetos completos com foco em performance, SEO e UI/UX de alta qualidade.",
        tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    },
    {
        role: "Atendimento ao Público e Vendas",
        company: "Negócio Familiar",
        period: "2025 — 2026",
        description: "Atuação direta no atendimento ao cliente e gestão de vendas, desenvolvendo habilidades sólidas de comunicação, negociação e resolução de problemas — competências que complementam minha atuação técnica no desenvolvimento de produtos centrados no usuário.",
        tags: ["Atendimento ao Cliente", "Vendas", "Comunicação", "Gestão"],
    },
];

export const Experience = () => {
    return (
        <section id="experiencia" className="bg-white/[0.02] py-24 px-4">
            <div className="container mx-auto max-w-4xl">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                        Minha <span className="text-accent underline decoration-accent/30 underline-offset-8">Trajetória</span>
                    </h2>
                    <p className="mt-4 text-secondary">
                        Experiências que moldaram minha visão sobre desenvolvimento e design.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 md:left-8" />

                    <div className="space-y-12">
                        {experiences.map((item, index) => (
                            <motion.div
                                key={item.role}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="relative pl-16 md:pl-20"
                            >
                                {/* Icon dot */}
                                <div className="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent md:left-2">
                                    <Briefcase size={20} />
                                </div>

                                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-all hover:border-accent/30 hover:bg-white/[0.08]">
                                    <div className="flex flex-wrap items-start justify-between gap-2">
                                        <div>
                                            <h3 className="text-xl font-bold">{item.role}</h3>
                                            <p className="mt-1 text-sm font-medium text-accent">{item.company}</p>
                                        </div>
                                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-secondary">
                                            {item.period}
                                        </span>
                                    </div>
                                    <p className="mt-4 text-secondary leading-relaxed">{item.description}</p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {item.tags.map((tag) => (
                                            <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/60">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
