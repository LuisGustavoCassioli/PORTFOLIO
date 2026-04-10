"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Loader2, ArrowRight } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const WHATSAPP_NUMBER = "5511945028521";

export const Contact = () => {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        const text = encodeURIComponent(
            `Olá, Luis! Meu nome é ${formState.name}.\n\n` +
            `📧 E-mail: ${formState.email}\n\n` +
            `💬 Mensagem:\n${formState.message}`
        );

        setTimeout(() => {
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
            setFormState({ name: "", email: "", message: "" });
            setIsSending(false);
            toast.success("WhatsApp aberto!", {
                style: { background: "#050505", color: "#fff", border: "1px solid #EF1A2D" },
            });
        }, 600);
    };

    return (
        <section id="contato" className="py-32 lg:py-60 px-4 relative overflow-hidden bg-background">
            <div className="container mx-auto max-w-7xl">
                <div className="grid gap-32 lg:grid-cols-12 items-start">
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-label mb-6">05 . Connecti0n</span>
                            <h2 className="text-huge text-white uppercase italic leading-[0.8]">
                                Vamos falar de <span className="text-accent not-italic">Negócios.</span>
                            </h2>
                            <p className="mt-12 text-secondary/60 text-xl font-bold uppercase tracking-tighter max-w-sm">
                                Se você quer alguém que constrói de verdade, bora conversar.
                            </p>

                            <div className="mt-20 space-y-2">
                                {[
                                    { icon: Linkedin, label: "LINKEDIN", value: "Luis Gustavo Cassioli", href: "https://www.linkedin.com/in/luis-gustavo-cassioli-rodrigues" },
                                    { icon: Mail, label: "E-MAIL", value: "contato@luisgustavocassioli.com.br", href: "mailto:contato@luisgustavocassioli.com.br" },
                                ].map((item) => (
                                    <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                                        className="group flex items-center justify-between p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all">
                                        <div>
                                            <p className="text-[9px] uppercase tracking-[0.3em] text-accent/60 font-black mb-1">{item.label}</p>
                                            <p className="text-white font-black uppercase text-sm tracking-widest">{item.value}</p>
                                        </div>
                                        <item.icon size={20} className="text-white/10 group-hover:text-accent transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 bg-white/[0.02] border-brutal p-8 md:p-16 relative overflow-hidden"
                    >
                        <form onSubmit={handleSubmit} className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <label className="text-label">Nom3</label>
                                    <input
                                        type="text" required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-accent transition-colors font-black uppercase placeholder:text-white/5"
                                        placeholder="Seu nome"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-label">E-ma1l</label>
                                    <input
                                        type="email" required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-accent transition-colors font-black uppercase placeholder:text-white/5"
                                        placeholder="Email institucional"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-label">Mensag3m</label>
                                <textarea
                                    required rows={4}
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full bg-transparent border border-white/10 p-6 text-white outline-none focus:border-accent transition-colors font-black uppercase placeholder:text-white/5 resize-none h-40"
                                    placeholder="Qual o desafio do seu produto?"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSending}
                                className="group w-full flex items-center justify-between bg-white px-10 py-8 font-black text-black hover:bg-accent hover:text-white transition-all transform active:scale-95 disabled:opacity-50"
                            >
                                <span className="uppercase tracking-[0.4em] text-[10px]">
                                    {isSending ? "Processando_Chamada..." : "Estabelecer Contato"}
                                </span>
                                {isSending ? <Loader2 size={24} className="animate-spin" /> : <ArrowRight size={24} strokeWidth={3} />}
                            </button>
                        </form>
                    </motion.div>
                </div>

                <footer className="mt-32 lg:mt-60 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 items-center pb-20">
                    <p className="text-[10px] font-black text-secondary/20 tracking-[0.5em] uppercase">
                        © 2021-2025 / LUIS GUSTAVO CASSIOLI / RIGOR TÉCNICO E DESIGN BRUTO
                    </p>
                    <div className="flex gap-12">
                        <span className="text-[10px] text-white/5 font-black uppercase tracking-widest">[ LAT 23.5505 / LONG 46.6333 ]</span>
                    </div>
                </footer>
            </div>

            {/* Background Perspective */}
            <div className="absolute top-0 right-0 w-px h-full bg-white/[0.02] hidden lg:block" />
        </section>
    );
};
