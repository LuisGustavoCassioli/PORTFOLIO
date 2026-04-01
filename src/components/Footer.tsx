import { Github, Linkedin, Globe } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="border-t border-white/10 py-12 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div>
                        <a href="#" className="flex items-center gap-2 font-mono text-xl font-bold tracking-tighter">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-background">
                                L
                            </span>
                            <span>Cassioli.</span>
                        </a>
                        <p className="mt-4 text-sm text-secondary max-w-xs">
                            Criando experiências digitais de alto impacto com foco em performance e design excepcional.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a
                            href="https://github.com/LuisGustavoCassioli"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="GitHub"
                            className="text-secondary transition-colors hover:text-accent"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/luis-gustavo-cassioli-rodrigues"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="LinkedIn"
                            className="text-secondary transition-colors hover:text-accent"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="https://luisgustavocassiolidev.com.br"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Site"
                            className="text-secondary transition-colors hover:text-accent"
                        >
                            <Globe size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-secondary/40 md:flex-row">
                    <p>© {new Date().getFullYear()} Luis Gustavo Cassioli. Todos os direitos reservados.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-accent transition-colors">Privacidade</a>
                        <a href="#" className="hover:text-accent transition-colors">Termos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
