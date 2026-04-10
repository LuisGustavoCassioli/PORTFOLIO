"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-20 px-4 border-t border-white/5">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
                    <div className="text-center md:text-left">
                        <a href="#" className="flex items-center justify-center md:justify-start gap-3 group mb-4">
                            <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-accent text-white font-black text-lg shadow-[0_0_10px_rgba(255,40,0,0.3)]">
                                L
                            </div>
                            <span className="font-black text-white uppercase tracking-tighter text-lg">
                                Cassioli<span className="text-accent italic">.</span>
                            </span>
                        </a>
                        <p className="text-secondary/40 text-[10px] uppercase font-bold tracking-[0.2em]">
                            Built with pride & passion <span className="text-accent">© {new Date().getFullYear()}</span>
                        </p>
                    </div>

                    <div className="flex gap-4">
                        {[
                            { icon: Github, href: "https://github.com/LuisGustavoCassioli", label: "Github" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/luis-gustavo-cassioli-rodrigues", label: "LinkedIn" },
                            { icon: Mail, href: "mailto:contato@luisgustavocassioli.com.br", label: "Email" },
                        ].map((social) => (
                            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                                className="h-12 w-12 flex items-center justify-center rounded-xl border border-white/5 bg-white/[0.01] text-secondary hover:border-accent/30 hover:text-accent transition-all">
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
