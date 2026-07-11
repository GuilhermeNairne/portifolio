---
name: portfolio-site-build
description: Build Guilherme's personal developer portfolio website (React). Use when working on this project's structure, sections, copy, or visual design.
---

# Portfolio site — build instructions

## Who this is for

Personal portfolio for a full stack JS developer (Node.js, React, MongoDB, PostgreSQL). Audience: recruiters, tech leads, potential clients browsing in Brazil.

## Language

**All visible site content (headings, body copy, button labels, section titles) must be written in Portuguese (pt-BR).** Code, comments, variable names, and commit messages stay in English as normal.

## Visual direction

- Palette: predominantly white background, tons of blue as the primary accent.
  - Deep blue `#1D4ED8` or `#1E3A8A` for headings/emphasis and the CTA button
  - Light blue tint `#EFF6FF` or `#DBEAFE` for alternating section backgrounds (avoids a flat all-white page while staying clean)
  - Dark slate `#1E293B` for body text (not pure black — softer on the eyes)
  - A single mid-blue `#3B82F6` for links, icons, tags
- Clean, uncluttered, generous whitespace. No gradients or heavy shadows. Reads as professional/trustworthy, not flashy.
- Typography: a confident sans-serif for headings (e.g. Inter, Sora, or Manrope), same family for body at a lighter weight — keep it to two weights max.
- Responsive down to mobile. Visible keyboard focus states on all interactive elements.

### Signature idea (suggestion, not mandatory)

Since the content itself is a career timeline (career → education, both genuinely sequential), a thin vertical **timeline line in the accent blue** connecting the Carreira and Formação sections could be the one distinctive visual element — it's earned by the content, not decorative. Keep everything else quiet around it.

### Other suggestions

- Add small tag "pills" (light blue bg, dark blue text) for each tech in the skills grid instead of plain text lists — reads more polished and scannable for recruiters skimming.
- Consider a subtle fixed/sticky nav with the 5 section anchors, so recruiters can jump straight to "Projeto" or "Habilidades" without scrolling.
- The AWS badge deserves a small icon (Tabler has `ti-brand-aws` — check availability, or use a simple cloud icon) rather than plain text, since it's the one formal certification and worth the visual weight.
- Make navigation menu that link with the sections. It's a single page website.

## Source data (from resume)

- **Full name**: Guilherme Men Linhares Nairne
- **Email**: guilhermemen2003@gmail.com
- **GitHub**: github.com/GuilhermeNairne
- **LinkedIn**: linkedin.com/in/guilherme-men-nairne
- **Current role**: Desenvolvedor Full Stack at Romagnole (Mai 2022 – Presente)
- **Previous role**: Desenvolvedor Web at Bivox | Martch (Jun 2021 – Mai 2022)
- **Education**: Bacharelado em Engenharia de Software, Unicesumar (Mar 2021 – Dez 2024); Curso técnico em Desenvolvimento de Sistemas, Senai-CTM (Mar 2019 – Nov 2020)
- **Certification**: AWS Certified Cloud Practitioner — Amazon Web Services (2025)
- **Stack**: JavaScript, TypeScript, Apex, React, Next.js, React Native, HTML, Tailwind CSS, Node.js, NestJS, Express, REST APIs, WebSocket, PostgreSQL, MongoDB, OracleDB, MariaDB, AWS, Railway, Vercel, Git, Linux, Docker, AI agents, WhatsApp Business API

## Structure — 5 sections in this order

### 1. Capa / Hero

- Nome: **Guilherme Men Linhares Nairne**
- Título: **"Desenvolvedor Full Stack JS"**
- Foto de perfil — path: `/assets/profile-photo.jpg` [ACTION NEEDED: awaiting a converted JPG/PNG version of the uploaded HEIC photo.]
- Botão "Fale comigo" / "Entre em contato" abaixo, linkando para `mailto:guilhermemen2003@gmail.com` (swap for WhatsApp/LinkedIn if preferred — confirm).
- Botão "Meu curriculo" (will download my resume)
- Optional: small row of icon links to GitHub and LinkedIn near the button.

### 2. Sobre mim

**Texto principal (narrativa):**

> Minha jornada na programação começou no curso técnico em Desenvolvimento de Sistemas, onde tive meu primeiro contato com lógica, algoritmos e as bases da área. Na sequência, aprofundei esse conhecimento na graduação em Engenharia de Software.
>
> Meu primeiro emprego foi como desenvolvedor web, criando sites institucionais com WordPress e cuidando também da parte visual com Canva e Photoshop.
>
> Hoje atuo como desenvolvedor full stack, com foco em frontend, construindo aplicações web e mobile do zero ao deploy — sempre buscando unir uma boa experiência de uso a um backend sólido por trás.

**Três cards de skills abaixo do texto:**

| Card | Título                             | Descrição curta                                                                       |
| ---- | ---------------------------------- | ------------------------------------------------------------------------------------- |
| 1    | **Desenvolvimento de sites**       | Sites institucionais, e-commerces e aplicações web com React, Next.js e Tailwind CSS. |
| 2    | **Desenvolvimento de aplicativos** | Apps mobile publicados na Apple Store e Google Play com React Native.                 |
| 3    | **Backend**                        | APIs REST robustas e seguras com Node.js, NestJS e bancos como PostgreSQL e MongoDB.  |

**Nota de design:** os três cards devem ter o mesmo peso visual (mesmo tamanho, mesmo estilo), com um ícone simples no topo de cada um (ex: `ti-world` para sites, `ti-device-mobile` para apps, `ti-server-2` para backend), fundo branco ou azul bem claro, e título em azul escuro.

### 3. Habilidades e certificações

Group the stack into categories for a clean grid, not one long list:

- **Linguagens**: JavaScript, TypeScript, Apex
- **Frontend**: React, Next.js, React Native, HTML, Tailwind CSS
- **Backend**: Node.js, NestJS, Express, REST APIs, WebSocket
- **Banco de dados**: PostgreSQL, MongoDB, OracleDB, MariaDB
- **Cloud & DevOps**: AWS, Railway, Vercel, Git, Linux, Docker
- **IA / Integração**: Agentes de IA, WhatsApp Business API

Certification badge/card: **AWS Certified Cloud Practitioner** (Amazon Web Services, 2025) — give it its own visual highlight (badge icon), since it's the one formal certification.

### 4. Projeto pessoal

- Personal project not yet specified — [ACTION NEEDED: confirm project name, description, stack used, and repo/demo link with Guilherme directly].
- Screenshot gallery — reserve a responsive image grid/carousel for 3–5 screenshots at `/assets/project-screenshot-1.jpg`, `-2.jpg`, etc. [ACTION NEEDED: screenshots to be provided later.]

## Open questions to confirm before/while building

- Contact button target: email, WhatsApp link, or a contact form?
- Personal project details (name/description/stack/link) — not on the resume.
- Tone for the "career" section: first person ("eu") or neutral third-person bio style?

## Tech notes

- Build as a React app (Vite recommended for a lean setup).
- Keep all placeholder content clearly marked with `{/* TODO: ... */}` comments in the code so it's easy to find and replace once resume/images arrive.
