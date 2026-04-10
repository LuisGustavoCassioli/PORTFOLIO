"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { CvDropdown } from "@/components/CvDropdown";

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-20">
            {/* Editorial Foundations */}
            <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40" />
            <div className="absolute inset-0 bg-noise pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 flex flex-col items-center gap-2"
                    >
                        <span className="text-white font-black uppercase tracking-[0.2em] text-2xl">
                            Luis Gustavo
                        </span>
                        <div className="flex items-center gap-4">
                            <div className="h-px w-8 bg-accent" />
                            <span className="text-[10px] uppercase tracking-[0.6em] font-black text-white/40">
                                Software Engineer
                            </span>
                            <div className="h-px w-8 bg-accent" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-[1200px]"
                    >
                        <h1 className="text-huge text-white uppercase select-none">
                            Produto em <span className="text-accent italic">primeiro</span> lugar.
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-8 max-w-2xl text-xl text-secondary/60 font-bold leading-tight uppercase tracking-tight"
                    >
                        Foco em performance, design de autor e <span className="text-white">experiência real.</span>
                        <br />
                        O código é o meio. O lucro é o fim.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-12 lg:mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-sm sm:max-w-none px-4"
                    >
                        <a
                            href="#projetos"
                            className="group flex h-20 sm:h-16 w-full sm:w-auto items-center justify-center gap-6 bg-accent px-10 text-white font-black uppercase tracking-widest transition-all hover:bg-white hover:text-black active:scale-95 border-brutal"
                        >
                            Cases de Sucesso
                            <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
                        </a>

                        <div className="flex items-center gap-4 w-full sm:w-auto justify-center">
                            <CvDropdown />
                            <a
                                href="https://github.com/LuisGustavoCassioli"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-16 w-16 flex items-center justify-center border border-white/10 bg-white/[0.02] text-white hover:bg-white hover:text-black transition-all group active:scale-95"
                            >
                                <Github size={24} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Coordinate markers - Editorial style */}
            <div className="absolute bottom-10 left-10 hidden lg:block">
                <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
                    LAT: -23.5505 / LONG: -46.6333
                </span>
            </div>
            <div className="absolute top-1/2 -right-20 -rotate-90 hidden lg:block">
                <span className="text-[10px] font-mono text-white/10 uppercase tracking-[1em]">
                    C O D E . D E S I G N . S T R A T E G Y
                </span>
            </div>
        </section>
    );
};
