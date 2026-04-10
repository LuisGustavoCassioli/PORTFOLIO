"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        id: "01",
        role: "FRONT-END ARCHITECT",
        company: "FREELANCE / PRODUTO",
        period: "2021 — 2025",
        description: "FOCO TOTAL NA ENTREGA DE INTERFACES QUE POSICIONAM MARCAS NO TOPO. RIGOR TÉCNICO EM NEXT.JS E PERFORMANCE RADICAL.",
    },
    {
        id: "02",
        role: "SALES & BUSINESS OPS",
        company: "FAMILY ENTERPRISE",
        period: "2019 — 2021",
        description: "MINHA BASE EM NEGOCIAÇÃO E ENTENDIMENTO DE PRODUTO. TRADUZO DORES DE NEGÓCIO EM ARQUITETURA DE SOFTWARE.",
    },
];

export const Experience = () => {
    return (
        <section id="experiencia" className="py-60 px-4 relative bg-[#050505] overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col gap-32">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 border-b border-white/5 pb-16">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <span className="text-label mb-6">06 . Timeline_Execution</span>
                            <h2 className="text-huge text-white uppercase italic leading-[0.8]">
                                Histórico de <span className="text-accent not-italic">Execução.</span>
                            </h2>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative flex flex-col gap-10 group"
                            >
                                <div className="flex items-baseline gap-4">
                                    <span className="text-6xl sm:text-8xl font-black text-white/5 italic group-hover:text-accent/10 transition-colors leading-none tracking-tighter">
                                        {exp.period.split(" — ")[0]}
                                    </span>
                                    <span className="text-label text-accent font-black tracking-widest uppercase">
                                        / STABLE_BUILD
                                    </span>
                                </div>

                                <div className="space-y-6">
                                    <div className="inline-block border border-accent/20 px-4 py-2 bg-accent/5">
                                        <span className="text-[10px] font-black text-accent uppercase tracking-widest">{exp.company}</span>
                                    </div>
                                    <h3 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                                        {exp.role}
                                    </h3>
                                    <p className="text-secondary/60 text-sm font-bold leading-relaxed uppercase tracking-tight max-w-lg">
                                        {exp.description}
                                    </p>
                                </div>

                                {/* Brutalist Separator */}
                                <div className="w-20 h-1 bg-white/5 group-hover:w-full transition-all duration-700" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Massive side text */}
            <div className="absolute top-1/2 -right-32 rotate-90 hidden 2xl:block pointer-events-none">
                <span className="text-[180px] font-black text-white/[0.01] uppercase select-none">ARCHITECTURE</span>
            </div>
        </section>
    );
};
