"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Star } from "lucide-react";
import { useCountUp } from "@/lib/useCountUp";

const stats = [
    { icon: Code2, label: "Anos de experiência", target: 4, suffix: "+" },
    { icon: Rocket, label: "Projetos entregues", target: 15, suffix: "+" },
    { icon: Star, label: "Clientes satisfeitos", target: 10, suffix: "+" },
];

const StatCard = ({ icon: Icon, label, target, suffix, index }: typeof stats[0] & { index: number }) => {
    const { count, ref } = useCountUp(target);
    return (
        <motion.div
            ref={ref as React.RefObject<HTMLDivElement>}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            className="group flex items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 transition-all hover:border-accent/40 hover:bg-white/[0.08]"
        >
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-all group-hover:bg-accent group-hover:text-background">
                <Icon size={28} />
            </div>
            <div>
                <p className="text-4xl font-bold text-white tracking-tight tabular-nums">
                    {count}{suffix}
                </p>
                <p className="mt-1 text-sm text-secondary">{label}</p>
            </div>
        </motion.div>
    );
};

export const About = () => {
    return (
        <section id="sobre" className="py-24 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="grid gap-16 lg:grid-cols-2 items-center">
                    {/* Left: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                            Sobre <span className="text-accent underline decoration-accent/30 underline-offset-8">mim</span>
                        </h2>
                        <p className="mt-6 text-secondary text-lg leading-relaxed">
                            Sou um desenvolvedor Front-End apaixonado por criar interfaces que unem{" "}
                            <span className="text-white font-medium">design excepcional</span> e{" "}
                            <span className="text-white font-medium">performance de ponta</span>.
                        </p>
                        <p className="mt-4 text-secondary leading-relaxed">
                            Trabalho com React, Next.js e TypeScript para construir aplicações web modernas,
                            escaláveis e acessíveis. Meu foco está em cada detalhe — da arquitetura do código
                            à micro-animação que encanta o usuário.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-3">
                            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js"].map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Animated Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                        className="grid gap-6"
                    >
                        {stats.map((stat, index) => (
                            <StatCard key={stat.label} {...stat} index={index} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
