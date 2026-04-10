"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const cvFiles = [
    { label: "🇧🇷 Português", href: "/Currículo Portuguese.pdf" },
    { label: "🇺🇸 English", href: "/Currículo English.pdf" },
];

export const CvDropdown = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setOpen((v) => !v)}
                className="flex h-16 items-center gap-3 border border-white/10 bg-white/[0.02] px-8 font-black uppercase tracking-[0.2em] text-[10px] text-white transition-all hover:bg-white hover:text-black group active:scale-95"
            >
                <Download size={16} />
                Currículo
                <ChevronDown size={14} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 bottom-full mb-4 w-56 overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-2xl z-50"
                    >
                        <div className="p-2 space-y-1">
                            {cvFiles.map((file) => (
                                <a
                                    key={file.label}
                                    href={file.href}
                                    download
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-3 px-4 py-3 text-[10px] font-black uppercase tracking-widest text-secondary hover:text-white hover:bg-white/10 transition-all"
                                >
                                    {file.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
