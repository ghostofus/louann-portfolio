"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin, ExternalLink, Download } from "lucide-react";

// ——— Données (à personnaliser) ———
const PROJECTS = [
    { title: "Projet 1", role: "Product / Game Producer", summary: "Court résumé du projet...", tags: ["Agile", "JIRA", "Roadmapping", "Risk mgmt"], link: "#" },
    { title: "Project Two", role: "Project Manager", summary: "Contexte, taille d'équipe, résultats...", tags: ["Scrum", "Stakeholders", "KPIs"], link: "#" },
    { title: "Project Three", role: "Producer / Coordinator", summary: "Rôle, responsabilités, notable...", tags: ["Planning", "Delivery", "QA"], link: "#" },
];

const EXPERIENCE = [
    {
        period: "2024 — Présent", title: "Project Manager", place: "Votre Entreprise", items: [
            "Pilotage de l'exécution et synchronisation inter-équipes",
            "Montée en cadence, rituels agiles et reporting",
        ]
    },
    {
        period: "2022 — 2024", title: "Associate Producer", place: "Studio X", items: [
            "Gestion du backlog, priorisation, suivi des risques",
            "Coordination multi-discipline (design, art, tech)",
        ]
    },
    {
        period: "2020 — 2022", title: "Junior Producer", place: "Projet/École", items: [
            "Livraison de vertical slice, playtests et QA",
            "Mise en place d'outils (JIRA/Confluence) et process",
        ]
    },
];

const LINKS = {
    resumeUrl: "#",
    email: "you@example.com",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
};

// ——— Animations ———
const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { animate: { transition: { staggerChildren: 0.12 } } };

export default function Page() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-indigo-400/30">
            <Header />
            <main>
                <Hero />
                <Projects />
                <About />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60 border-b border-white/5">
            <div className="mx-auto max-w-6xl px-4">
                <div className="flex items-center justify-between py-4">
                    <a href="#home" className="font-semibold tracking-tight text-zinc-100">Votre Nom</a>
                    <nav className="hidden md:flex items-center gap-6 text-zinc-300">
                        <a href="#projects" className="hover:text-white transition">Projets</a>
                        <a href="#about" className="hover:text-white transition">À propos</a>
                        <a href="#experience" className="hover:text-white transition">Expérience</a>
                        <a href="#contact" className="hover:text-white transition">Contact</a>
                        <a href={LINKS.resumeUrl} className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-1.5 text-sm hover:bg-white/10 transition">
                            <Download className="h-4 w-4" /> CV
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
}

function Hero() {
    return (
        <section id="home" className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(99,102,241,0.25),transparent_60%)]" />
            <div className="mx-auto max-w-6xl px-4 py-24 md:py-32">
                <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }} className="grid gap-10 md:grid-cols-2 md:items-center">
                    <div>
                        <motion.h1 variants={fadeUp} className="text-4xl/tight md:text-6xl/tight font-semibold tracking-tight">
                            Salut, je m'appelle Lou-Ann Barry - Game Producer
                        </motion.h1>
                        <motion.p variants={fadeUp} className="mt-4 text-lg text-zinc-300">
                            J'ai 20 ans et je suis actuellement en 3ᵉ année à l'ICAN Lyon où j'étudie le Game Design avec une spécialité en Tech Art. En tant que futur producer, cette formation m'a permis de travailler sur de nombreux projets en équipe, d'organiser les pipelines de production et d'acquérir de l'expérience concernant le rôle de Producer.<br />

                            Parmi les compétences que je possède figurent, entre autres, la gestion de projet avec les méthodes Agile et Kanban, ainsi que l'utilisation d'outils tels que Notion, JIRA, Figma, et bien plus encore. Pour plus d'informations concernant mon ensemble de compétences, assurez-vous de consulter la section « Compétences » en bas de la page.
                        </motion.p>
                        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
                            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-white text-zinc-900 px-4 py-2 font-medium hover:bg-zinc-200 transition">
                                Voir mes projets <ArrowRight className="h-4 w-4" />
                            </a>
                            <a href={`mailto:${LINKS.email}`} className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 hover:bg-white/10 transition">
                                <Mail className="h-4 w-4" /> Me contacter
                            </a>
                        </motion.div>
                        <motion.div variants={fadeUp} className="mt-6 flex items-center gap-4 text-zinc-400">
                            <a href={LINKS.github} className="hover:text-white transition" aria-label="GitHub"><Github className="h-5 w-5" /></a>
                            <a href={LINKS.linkedin} className="hover:text-white transition" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
                        </motion.div>
                    </div>
                    <motion.div variants={fadeUp} className="flex justify-center md:justify-end">
                        <Image
                            src="/moi.png"
                            alt="Photo de Lou-Ann Barry"
                            width={400}
                            height={600}
                            className="rounded-full object-cover shadow-xl"
                            priority
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

function Projects() {
    return (
        <section id="projects" className="mx-auto max-w-6xl px-4 py-24">
            <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Projets sélectionnés</h2>
                <p className="mt-2 text-zinc-400">Une sélection courte et impactante. Chaque carte mène vers une page ou un PDF détaillé.</p>
            </motion.div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.map((p, i) => (
                    <motion.a key={i} variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}
                        href={p.link} className="group block rounded-3xl border border-white/10 bg-zinc-900/60 p-5 hover:bg-zinc-900 transition shadow-xl">
                        <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-800 grid place-items-center">
                            <span className="text-zinc-500">Visuel / cover</span>
                        </div>
                        <div className="mt-4 flex items-start justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-semibold group-hover:underline underline-offset-4 decoration-zinc-500/50">{p.title}</h3>
                                <p className="mt-1 text-sm text-zinc-400">{p.role}</p>
                            </div>
                            <ExternalLink className="h-5 w-5 text-zinc-500 group-hover:text-zinc-300" />
                        </div>
                        <p className="mt-3 text-sm text-zinc-300">{p.summary}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {p.tags.map((t, idx) => (<span key={idx} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300">{t}</span>))}
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}

function About() {
    return (
        <section id="about" className="mx-auto max-w-6xl px-4 py-24">
            <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid gap-10 md:grid-cols-3">
                <div className="md:col-span-1">
                    <div className="aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-tr from-indigo-500/20 to-fuchsia-500/20 grid place-items-center">
                        <div className="h-24 w-24 rounded-full bg-white/10" />
                    </div>
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">À propos</h2>
                    <p className="mt-4 text-zinc-300 leading-relaxed">
                        Producer orienté delivery, j&apos;aime aligner vision, scope et ressources pour sortir des projets concrets. Mon approche: diagnostics rapides,plans d&apos; action simples
                        , rituels efficaces, communication claire. Curieux, calme sous pression, très process mais pragmatique.
                    </p>
                    <ul className="mt-6 grid gap-2 text-zinc-300">
                        <li>• Outils: JIRA, Confluence, Notion, Slack</li>
                        <li>• Méthodes: Scrum, Kanban, roadmapping, risk mgmt</li>
                        <li>• Soft skills: facilitation, feedback, conflict mgmt</li>
                    </ul>
                </div>
            </motion.div>
        </section>
    );
}

function Experience() {
    return (
        <section id="experience" className="mx-auto max-w-6xl px-4 py-24">
            <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Expérience</h2>
            </motion.div>
            <div className="mt-8 grid gap-6">
                {EXPERIENCE.map((e, i) => (
                    <motion.div key={i} variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="rounded-3xl border border-white/10 bg-zinc-900/60 p-6">
                        <div className="flex flex-wrap items-baseline justify-between gap-3">
                            <div>
                                <h3 className="text-lg font-semibold">{e.title} · <span className="text-zinc-300 font-normal">{e.place}</span></h3>
                            </div>
                            <div className="text-sm text-zinc-400">{e.period}</div>
                        </div>
                        <ul className="mt-3 grid gap-1.5 text-zinc-300 text-sm list-disc pl-5">
                            {e.items.map((it, idx) => (<li key={idx}>{it}</li>))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

function Contact() {
    return (
        <section id="contact" className="mx-auto max-w-6xl px-4 py-24">
            <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/60 to-zinc-900/20 p-10">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Discutons ⚡️</h2>
                <p className="mt-2 text-zinc-300">Un projet, une opportunité, des questions ? Écrivez-moi.</p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a href={`mailto:${LINKS.email}`} className="inline-flex items-center gap-2 rounded-xl bg-white text-zinc-900 px-4 py-2 font-medium hover:bg-zinc-200 transition">
                        <Mail className="h-4 w-4" /> {LINKS.email}
                    </a>
                    <a href={LINKS.linkedin} className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 hover:bg-white/10 transition"><Linkedin className="h-4 w-4" /> LinkedIn</a>
                    <a href={LINKS.github} className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 hover:bg-white/10 transition"><Github className="h-4 w-4" /> GitHub</a>
                </div>
            </motion.div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="border-t border-white/5">
            <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-400">
                © {new Date().getFullYear()} Votre Nom. Tous droits réservés.
            </div>
        </footer>
    );
}