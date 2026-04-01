"use client";

import { motion } from "framer-motion";
import {
    Monitor,
    Globe,
    Layout
} from "lucide-react";

interface ServiceCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
    index: number;
}

const ServiceCard = ({ icon: Icon, title, description, index }: ServiceCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/[0.08]"
        >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 text-accent transition-all group-hover:scale-110">
                <Icon size={32} />
            </div>
            <h3 className="mb-4 text-2xl font-bold">{title}</h3>
            <p className="text-secondary leading-relaxed">{description}</p>

            {/* Decorative arrow */}
            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-accent opacity-0 transition-all group-hover:opacity-100">
                Saber mais
                <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    →
                </motion.span>
            </div>
        </motion.div>
    );
};

const services = [
    {
        icon: Globe,
        title: "Landing Pages personalizadas",
        description: "Criação de páginas de conversão de alta performance com design focado em resultados e experiência do usuário otimizada.",
    },
    {
        icon: Monitor,
        title: "Websites profissionais",
        description: "Desenvolvimento de sites corporativos e portfólios institucionais modernos, rápidos e totalmente responsivos.",
    },
    {
        icon: Layout,
        title: "Sistemas modernos de UI/UX",
        description: "Design e desenvolvimento de dashboards e sistemas complexos com foco em usabilidade e interfaces de última geração.",
    },
];

export const Services = () => {
    return (
        <section id="servicos" className="bg-white/[0.02] py-24 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col items-start justify-between gap-6 mb-16 lg:flex-row lg:items-end">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                            Como posso <span className="text-accent underline decoration-accent/30 underline-offset-8">ajudar seu negócio</span>
                        </h2>
                        <p className="mt-4 text-secondary text-lg">
                            Soluções sob medida para elevar sua presença digital com tecnologia de ponta e design impecável.
                        </p>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} {...service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
