"use client";

import { motion } from "framer-motion";

export const About = () => {
    return (
        <section id="sobre" className="py-40 px-4 relative overflow-hidden bg-background">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col gap-24">
                    {/* Editorial Header */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 border-b border-white/5 pb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="max-w-2xl"
                        >
                            <span className="text-label mb-6">01 . Manifest0</span>
                            <h2 className="text-huge text-white uppercase italic leading-[0.8]">
                                O código é o meio. <span className="text-accent not-italic">O produto</span> é o fim.
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:pt-12"
                        >
                            <div className="flex items-baseline gap-2 sm:gap-4 overflow-hidden">
                                <span className="text-4xl sm:text-6xl font-black text-white italic">2021/</span>
                                <span className="text-lg sm:text-xl font-bold text-secondary uppercase tracking-widest italic whitespace-nowrap">Today</span>
                            </div>
                            <p className="text-[10px] uppercase font-black tracking-[0.2em] sm:tracking-[0.4em] text-accent mt-2">
                                Obcecado pela execução impecável
                            </p>
                        </motion.div>
                    </div>

                    {/* Content Body */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-7 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8 text-xl md:text-2xl text-secondary font-light leading-relaxed uppercase tracking-tighter"
                            >
                                <p>
                                    Não me interesso por código que apenas <span className="text-white font-black italic">&quot;roda&quot;</span>. Me interesso por sistemas que <span className="text-white font-black italic">resolvem</span>, interfaces que posicionam e arquiteturas que não quebram.
                                </p>
                                <p>
                                    Sou desenvolvedor de software focado em <span className="text-white font-black">rigor técnico</span> e valor real. Se o seu projeto precisa de mais um dev de template, você está no lugar errado. Se precisa de autoridade digital, <span className="text-white font-black italic">estamos alinhados</span>.
                                </p>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-5 flex flex-col gap-10">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-accent p-8 mb-4 border-brutal"
                            >
                                <p className="text-black font-black uppercase text-sm leading-tight tracking-wider">
                                    Luis Gustavo — Desenvolvedor de Software focado em performance, design e produto.
                                </p>
                            </motion.div>

                            {[
                                { label: "FILOSOFIA", value: "Menos é mais, se o menos for perfeito." },
                                { label: "MÉTRICA", value: "Core Web Vitals não é opção, é obrigação." },
                                { label: "ESTÉTICA", value: "High-contrast, high-impact, high-performance." },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="border-l-2 border-accent pl-8 py-2"
                                >
                                    <span className="text-label mb-2">{item.label}</span>
                                    <p className="text-white font-black uppercase tracking-tight text-xl">{item.value}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 p-10 opacity-5 hidden lg:block">
                <span className="text-[200px] font-black text-white leading-none">01</span>
            </div>
        </section>
    );
};
