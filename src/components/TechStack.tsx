"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Layout, Layers } from "lucide-react";

export const TechStack = () => {
    const mainTools = [
        { id: "01", name: "REACT", icon: Layout, details: "CRAFTING STATEFUL INTERFACES" },
        { id: "02", name: "NEXT.JS", icon: Layers, details: "SCALABLE ARCHITECTURES & SEO" },
        { id: "03", name: "TYPESCRIPT", icon: Terminal, details: "STRICT RIGOR & TYPE SAFETY" },
        { id: "04", name: "TAILWIND", icon: Cpu, details: "HIGH-PERFORMANCE STYLING" },
    ];

    const ecosystem = ["SUPABASE", "FRAMER MOTION", "GIT/GITHUB", "VERCEL", "UI/UX DESIGN", "POSTGRESQL"];

    return (
        <section id="tecnologias" className="py-40 px-4 relative bg-background overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col gap-32">
                    {/* Header Section */}
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="max-w-xl"
                        >
                            <span className="text-label mb-6">02 . Technical Mapping</span>
                            <h2 className="text-huge text-white uppercase leading-[0.8]">
                                Ferramental <span className="text-accent italic">Bruto.</span>
                            </h2>
                        </motion.div>
                        <p className="text-secondary/40 text-[10px] uppercase font-bold tracking-[0.2em] lg:mb-4 lg:w-64">
                            Sistemas construídos com as ferramentas de quem prioriza escala e performance absoluta.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        {/* Main Tools List */}
                        <div className="lg:col-span-8 flex flex-col">
                            {mainTools.map((tool, i) => (
                                <motion.div
                                    key={tool.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group flex items-center justify-between py-10 border-b border-white/5 hover:bg-white/[0.01] transition-colors px-4"
                                >
                                    <div className="flex items-center gap-12">
                                        <span className="font-mono text-sm text-accent/40">{tool.id}</span>
                                        <div className="flex flex-col">
                                            <h3 className="text-3xl sm:text-5xl font-black text-white group-hover:text-accent transition-colors">
                                                {tool.name}
                                            </h3>
                                            <span className="text-[10px] tracking-[0.3em] font-bold text-secondary/40 mt-2">
                                                {tool.details}
                                            </span>
                                        </div>
                                    </div>
                                    <tool.icon size={32} className="text-white/5 group-hover:text-accent/20 transition-all group-hover:rotate-12" />
                                </motion.div>
                            ))}
                        </div>

                        {/* Ecosystem Cloud */}
                        <div className="lg:col-span-4 bg-white/[0.02] border-brutal p-12 relative">
                            <span className="text-label mb-8">Ecosystem_Map</span>
                            <div className="flex flex-wrap gap-x-6 gap-y-8 mt-12">
                                {ecosystem.map((item, i) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.5 + (i * 0.1) }}
                                        className="relative group"
                                    >
                                        <span className="text-lg font-black text-white/20 group-hover:text-white transition-all cursor-default uppercase">
                                            {item}
                                        </span>
                                        <div className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-500" />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Decorative Doc Elements */}
                            <div className="mt-16 pt-8 border-t border-white/5">
                                <p className="text-[9px] font-mono text-secondary/20 leading-relaxed uppercase">
                                    [SYS_LOG] / LGC_ENV_READY / ALL_SERVICES_OPERATIONAL / BUILD: STABLE
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
