"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, MessageCircle, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const WHATSAPP_NUMBER = "5511945028521"; // ← Substitua pelo número real com DDI e DDD

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
            toast.success("WhatsApp aberto! Sua mensagem está pronta para enviar.", {
                duration: 4000,
                style: {
                    background: "#1a1a1a",
                    color: "#fff",
                    border: "1px solid rgba(0,210,255,0.3)",
                },
                iconTheme: { primary: "#00d2ff", secondary: "#0a0a0a" },
            });
        }, 600);
    };

    return (
        <section id="contato" className="bg-white/[0.02] py-24 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="grid gap-16 lg:grid-cols-2">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                            Vamos <span className="text-accent underline decoration-accent/30 underline-offset-8">conversar?</span>
                        </h2>
                        <p className="mt-6 text-secondary text-lg leading-relaxed">
                            Estou sempre aberto a novos projetos, colaborações ou apenas um café virtual para falar sobre tecnologia e design.
                        </p>

                        <div className="mt-12 space-y-6">
                            <a
                                href="https://www.linkedin.com/in/luis-gustavo-cassioli-rodrigues"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 text-secondary transition-all hover:text-white"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 transition-all group-hover:bg-accent/20 group-hover:text-accent">
                                    <Linkedin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-secondary/60">LinkedIn</p>
                                    <p className="font-medium">linkedin.com/in/luis-gustavo-cassioli</p>
                                </div>
                            </a>

                            <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 text-secondary transition-all hover:text-white"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 transition-all group-hover:bg-accent/20 group-hover:text-accent">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-secondary/60">WhatsApp</p>
                                    <p className="font-medium">+55 (11) 94502-8521</p>
                                </div>
                            </a>

                            <a
                                href="https://luisgustavocassiolidev.com.br"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 text-secondary transition-all hover:text-white"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 transition-all group-hover:bg-accent/20 group-hover:text-accent">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-secondary/60">Site</p>
                                    <p className="font-medium">luisgustavocassiolidev.com.br</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="rounded-3xl border border-white/10 bg-white/5 p-8"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-secondary">Nome</label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/50 placeholder:text-secondary/40"
                                    placeholder="Seu nome completo"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-secondary">E-mail</label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/50 placeholder:text-secondary/40"
                                    placeholder="seu@email.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-secondary">Mensagem</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/50 placeholder:text-secondary/40 resize-none"
                                    placeholder="Como posso ajudar?"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSending}
                                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-accent py-4 font-bold text-background transition-all hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSending ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Abrindo WhatsApp...
                                    </>
                                ) : (
                                    <>
                                        Enviar pelo WhatsApp
                                        <Send size={18} />
                                    </>
                                )}
                            </button>
                            <p className="text-center text-xs text-secondary/50">
                                Sua mensagem será enviada diretamente pelo WhatsApp.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
