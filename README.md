# 🚀 Portfólio — Luis Gustavo Cassioli

**Desenvolvedor Front-End especializado em React, Next.js e TypeScript.**
Criando interfaces de alto desempenho que geram resultados reais.

[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://luisgustavocassiolidev.com.br)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

---

## ✨ Funcionalidades

- **Design Dark Premium** com glassmorphism e glow effects
- **Animações fluidas** com Framer Motion (scroll-driven, whileInView)
- **Scroll progress bar** e **back-to-top** integrados
- **Formulário de contato** que abre WhatsApp com mensagem pré-formatada
- **Download de currículo** em PT e EN via dropdown animado
- **Seção de Experiência** em timeline vertical
- **Números animados** nas métricas (contador de 0 até o valor)
- **Nav link ativo** detectado por IntersectionObserver
- **SEO completo** com Open Graph, Twitter Card e metadataBase
- **100% responsivo** — mobile first

---

## 🛠️ Stack

| Tecnologia | Uso |
| --- | --- |
| **Next.js 16** (App Router) | Framework principal, SSG, roteamento |
| **TypeScript 5** | Tipagem estrita em todo o projeto |
| **Tailwind CSS v4** | Estilização utilitária com CSS-first config |
| **Framer Motion** | Animações e transições |
| **Lucide React** | Ícones |
| **React Hot Toast** | Notificações toast |

---

## 📦 Instalação e uso local

```bash
# Clone o repositório
git clone https://github.com/LuisGustavoCassioli/portfolio.git
cd portfolio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse **<http://localhost:3000>**

---

## 🚢 Deploy

O projeto está configurado para deploy automatizado na **Vercel**.

```bash
npm run build   # Build de produção
npm run start   # Servidor de produção local
```

Após o deploy, atualize a `metadataBase` em `src/app/layout.tsx` com a URL definitiva.

---

## 📁 Estrutura do projeto

```text
src/
├── app/
│   ├── layout.tsx       # Layout raiz + SEO metadata
│   ├── page.tsx         # Página principal
│   └── globals.css      # Tokens de design (cores, fontes)
├── components/
│   ├── Header.tsx       # Navegação com active section
│   ├── Hero.tsx         # Seção principal + dropdown CV
│   ├── About.tsx        # Bio + métricas animadas
│   ├── TechStack.tsx    # Stack tecnológica com níveis
│   ├── Services.tsx     # Serviços oferecidos
│   ├── Experience.tsx   # Timeline de experiência
│   ├── Projects.tsx     # Cards de projetos com preview
│   ├── Contact.tsx      # Formulário WhatsApp
│   ├── Footer.tsx       # Rodapé com links sociais
│   ├── ScrollProgress.tsx
│   ├── BackToTop.tsx
│   └── Providers.tsx    # Client wrapper (Toast)
└── lib/
    ├── utils.ts         # cn() helper
    └── useCountUp.ts    # Hook de contador animado
```

---

Feito com 💙 por **Luis Gustavo Cassioli**
[LinkedIn](https://www.linkedin.com/in/luis-gustavo-cassioli-rodrigues) · [GitHub](https://github.com/LuisGustavoCassioli) · [Site](https://luisgustavocassiolidev.com.br)
