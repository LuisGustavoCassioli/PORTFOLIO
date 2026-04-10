"use client";

import { motion } from "framer-motion";

export const Services = () => {
    const deliverables = [
        { id: "01", title: "IDENTIDADE DIGITAL", desc: "PRESENÇA QUE POSICIONA E VENDE. DE LANDING PAGES A BRANDING VISUAL." },
        { id: "02", title: "SISTEMAS BRUTOS", desc: "ARQUITETURAS QUE NÃO ACEITAM FALHA. DASHBOARDS E FERRAMENTAS INTERNAS." },
        { id: "03", title: "ENGENHARIA DE PRODUTO", desc: "CÓDIGO ALINHADO AO VALOR DE NEGÓCIO. PENSADO DO ZERO À ESCALA." },
        { id: "04", title: "OTIMIZAÇÃO RADICAL", desc: "SEO E WEB VITALS NO LIMITE. VELOCIDADE QUE CONVERTE USUÁRIOS." },
    ];

    return (
        <section id="servicos" className="py-40 px-4 relative bg-[#070707] overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col gap-24">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 border-b border-white/5 pb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-label mb-6">03 . Soluti0ns</span>
                            <h2 className="text-huge text-white uppercase italic leading-[0.8]">
                                O que eu <span className="text-accent not-italic">resolvo.</span>
                            </h2>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5">
                        {deliverables.map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-12 lg:p-20 bg-background hover:bg-white/[0.01] transition-all relative overflow-hidden"
                            >
                                <span className="font-mono text-xs text-accent/40 block mb-8">{item.id} {"//"}</span>
                                <h3 className="text-3xl sm:text-5xl font-black text-white group-hover:text-accent transition-colors leading-[0.9] uppercase tracking-tighter">
                                    {item.title}
                                </h3>
                                <p className="mt-8 text-secondary/40 text-[10px] font-black uppercase tracking-[0.3em]">
                                    {item.desc}
                                </p>

                                {/* Decorator */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Perspective Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
        </section>
    );
};
