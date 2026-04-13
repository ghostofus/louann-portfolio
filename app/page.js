"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin, ExternalLink, Download } from "lucide-react";

// ——— Données (à personnaliser) ———
const PROJECTS = [
    { title: "IRA" , period: "2025/2026 : 10 mois", role: "Cheffe de projet", summary: "Souls like narratif 3D réaliste - Unreal Engine 5", tags: ["Agile", "JIRA", "Roadmapping", "Risk mgmt"], link: "#about", src: "/ira.png" },
    { title: "Gecko Pulco" , period: "2025 : 4 mois ", role: "Cheffe de projet", summary: "Plateformer 3D cartoon - Unity 6", tags: ["Scrum", "Stakeholders", "KPIs"], link: "#about", src: "/gecko.jpg"  },
    { title: "Figure out" , period: "2023/2024", role: "Directrice Artistique", summary: "Click & Point 3D - Unreal", tags: ["Planning", "Delivery", "QA"], link: "#about", src: "/figureout.jpg"  },
    { title: "10 Nichi!" , period: "2023 : 4 mois", role: "Conceptrice", summary: "Jeu de société coopératif stratégique - Univers Japon féodal/Samouraïs", tags: ["Planning", "Delivery", "QA"], link: "#about", src: "/10nichi.png"  },
];

const EXPERIENCE = [
    {
        period: "2026 - 90 jours ", title: "Stage - Gestion de projets Data", place: "Orange", items: [
            "blabla",
            "blabla",
        ]
    },
    {
        period: "2025 - 44 jours ", title: "Stage - Game / Narrative Designer ", place: "StellarPunk", items: [
            "Développement de jeu de société",
            "Animation de sessions de jeu",
            "Game design & Ecriture narrative",
        ]
    },
    {
        period: "2023 — 2025", title: "Job étudiant - Assistante Administrative", place: "Fradin & Associés : Huissiers de Justice ", items: [
            "Gestion du courrier entrant et sortant (tri, scan, enregistrement)",
            "Classement et archivage de documents administratifs",
            "Soutien à l’équipe pour diverses tâches de bureau",

        ]
    },
];

const LINKS = {
    resumeUrl: "/CV.pdf",
    email: "louann.barry05@gmail.com",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
};

// ——— Animations ———
const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { animate: { transition: { staggerChildren: 0.12 } } };

function StarField() {
    const canvasRef = React.useRef(null);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animationId;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const stars = Array.from({ length: 180 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4 + 0.2,
        alpha: Math.random() * 0.6 + 0.2,
        offset: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
    }));

        let t = 0;
        const draw = () => {
            t += 0.02;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach((s) => {
                s.x += s.vx;
                s.y += s.vy;

                if (s.x < 0) s.x = canvas.width;
                if (s.x > canvas.width) s.x = 0;
                if (s.y < 0) s.y = canvas.height;
                if (s.y > canvas.height) s.y = 0;

                const pulse = s.alpha + Math.sin(t + s.offset) * 0.3;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(195, 215, 255, ${Math.max(0.05, pulse)})`;
                ctx.fill();
            });
            animationId = requestAnimationFrame(draw);
        };
        draw();

        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
        />
    );
}
export default function Page() {
    return (
        <div className="min-h-screen bg-[#080f1e] text-[#EDF0FC] selection:bg-[#4782E4]/30" style={{ position: "relative" }}>
    <StarField />
    <div style={{ position: "relative", zIndex: 1 }}>
            <Header />
            <main>
                <Hero />
                <Projects />
                <About />
                <Experience />
                <Contact />
            </main>
            <Footer /> </div>
        </div>
    );
}

function Header() {
    return (
        <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0D1F3E]/60 border-b border-[#C3D0F6]/10">
            <div className="mx-auto max-w-6xl px-4">
                <div className="flex items-center justify-between py-4">
                    <a href="#home" className="font-semibold tracking-tight text-[#EDF0FC]">Lou-Ann Barry</a>
                    <nav className="hidden md:flex items-center gap-6 text-[#C3D0F6]">
                        <a href="#projects" className="hover:text-[#EDF0FC] transition">Projets</a>
                        <a href="#about" className="hover:text-[#EDF0FC] transition">Compétences</a>
                        <a href="#experience" className="hover:text-[#EDF0FC] transition">Expérience</a>
                        <a href="#contact" className="hover:text-[#EDF0FC] transition">Contact</a>

                        <a
                            href={LINKS.resumeUrl}
                            download
                            className="inline-flex items-center gap-2 rounded-xl border border-[#C3D0F6]/20 px-3 py-1.5 text-sm hover:bg-[#1F3E71]/35 transition"
                        >
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
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(71,130,228,0.25),transparent_60%)]" />
            <div className="mx-auto max-w-6xl px-4 py-24 md:py-32">
                <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }} className="grid gap-10 md:grid-cols-2 md:items-center">
                    <div>
                        <motion.h2 variants={fadeUp} className="text-4xl/tight md:text-6xl/tight font-semibold tracking-tight">
                            Bonjour, je m’appelle BARRY Lou-Ann
                        </motion.h2>

                        <motion.p variants={fadeUp} className="mt-4 text-lg text-[#C3D0F6]">
                            J’ai 20 ans et je suis actuellement étudiante en troisième année à l'ICAN a Lyon, où je suis une formation en Game Design, avec une spécialisation en TechArt. <b>Dans l'optique de devenir productrice ,</b> cette formation m’a permis de mener à bien des projets au sein d’équipes importantes et plus réduite, et d’acquérir de l’expérience dans le rôle de productrice de jeux vidéo.<br />
                            Parmi les compétences que je possède, on peut citer, entre autres, la gestion de projet à l'aide des méthodes Agile, Waterfall et Kanban, Scrum, JIRA, et bien plus encore. Pour plus d'informations sur mes compétences, n'hésitez pas à consulter la section « Compétences » au bas de la page.
                        </motion.p>

                        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
                            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-white text-[#0D1F3E] px-4 py-2 font-medium hover:bg-[#EDF0FC] transition">
                                Voir mes projets <ArrowRight className="h-4 w-4" />
                            </a>
                        </motion.div>

                        <motion.div variants={fadeUp} className="mt-6 flex items-center gap-4 text-[#8BA8EE]">
                            <a href={LINKS.github} className="hover:text-[#EDF0FC] transition" aria-label="GitHub"><Github className="h-5 w-5" /></a>
                            <a href={LINKS.linkedin} className="hover:text-[#EDF0FC] transition" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
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
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Projets</h2>
                <p className="mt-2 text-[#8BA8EE]">Cette séléction présente mes projets personnels et d'études , réalisés tout au long de l'année</p>
            </motion.div>

            <div
            className="mt-10 flex gap-6 overflow-x-auto pb-4 scrollbar-hide cursor-grab active:cursor-grabbing"
            onMouseDown={(e) => {
                const slider = e.currentTarget;
                slider.isDown = true;
                slider.startX = e.pageX - slider.offsetLeft;
                slider.scrollLeftStart = slider.scrollLeft;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.isDown = false;
            }}
            onMouseUp={(e) => {
                e.currentTarget.isDown = false;
            }}
            onMouseMove={(e) => {
                const slider = e.currentTarget;
                if (!slider.isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - slider.startX) * 1.5; // vitesse
                slider.scrollLeft = slider.scrollLeftStart - walk;
            }}
            >
                {PROJECTS.map((p, i) => (
                    <motion.a
                        key={i}
                        variants={fadeUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        href={p.link}
                        className="group min-w-[300px] max-w-[300px] flex-shrink-0 rounded-3xl border border-white/10 bg-zinc-900/60 p-5 hover:bg-zinc-900 transition shadow-xl"
                    >
                        <div className="overflow-hidden rounded-2xl bg-[#1F3E71]/45 grid place-items-center border border-[#C3D0F6]/10 object-center">
                        <Image
                            src={p.src}
                        
                            
                        />
                        </div>

                        <div className="mt-4 flex items-start justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-semibold group-hover:underline underline-offset-4 decoration-[#8BA8EE]/40">{p.title}</h3>
                                <div className="text-sm text-[#8BA8EE]">{p.period}</div>
                                <p className="mt-1 text-sm text-[#C3D0F6]">{p.role}</p>
                            </div>
                            <ExternalLink className="h-5 w-5 text-[#8BA8EE] group-hover:text-[#EDF0FC]" />
                        </div>

                        <p className="mt-3 text-sm text-[#C3D0F6]">{p.summary}</p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {p.tags.map((t, idx) => (
                                <span key={idx} className="rounded-full border border-[#C3D0F6]/15 bg-[#0D1F3E]/30 px-2.5 py-1 text-xs text-[#EDF0FC]">
                                    {t}
                                </span>
                            ))}
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
                    <div className="aspect-square w-full overflow-hidden rounded-3xl border border-[#C3D0F6]/15 bg-gradient-to-tr from-[#4782E4]/20 to-[#8BA8EE]/15 grid place-items-center">
                        <div className="h-24 w-24 rounded-full bg-white/10" />
                    </div>
                </div>

                <div className="md:col-span-2">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Compétences</h2>
                    <p className="mt-4 text-[#C3D0F6] leading-relaxed">
                        Producer orienté delivery, j&apos;aime aligner vision, scope et ressources pour sortir des projets concrets. Mon approche: diagnostics rapides,plans d&apos; action simples,
                        rituels efficaces, communication claire. Curieux, calme sous pression, très process mais pragmatique.
                    </p>

                    <ul className="mt-6 grid gap-2 text-[#C3D0F6]">
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
                    <motion.div
                        key={i}
                        variants={fadeUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="rounded-3xl border border-[#C3D0F6]/15 bg-[#1F3E71]/35 p-6"
                    >
                        <div className="flex flex-wrap items-baseline justify-between gap-3">
                            <div>
                                <h3 className="text-lg font-semibold">
                                    {e.title} · <span className="text-[#C3D0F6] font-normal">{e.place}</span>
                                </h3>
                            </div>
                            <div className="text-sm text-[#8BA8EE]">{e.period}</div>
                        </div>

                        <ul className="mt-3 grid gap-1.5 text-[#C3D0F6] text-sm list-disc pl-5">
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
            <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="rounded-3xl border border-[#C3D0F6]/15 bg-gradient-to-br from-[#1F3E71]/35 to-[#0D1F3E]/20 p-10">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Discutons !</h2>
                <p className="mt-2 text-[#C3D0F6]">Un projet, une opportunité, des questions ? Écrivez-moi.</p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a href={`mailto:${LINKS.email}`} className="inline-flex items-center gap-2 rounded-xl bg-white text-[#0D1F3E] px-4 py-2 font-medium hover:bg-[#EDF0FC] transition">
                        <Mail className="h-4 w-4" /> {LINKS.email}
                    </a>
                    <a href={LINKS.linkedin} className="inline-flex items-center gap-2 rounded-xl border border-[#C3D0F6]/20 px-4 py-2 hover:bg-[#1F3E71]/35 transition"><Linkedin className="h-4 w-4" /> LinkedIn</a>
                    <a href={LINKS.github} className="inline-flex items-center gap-2 rounded-xl border border-[#C3D0F6]/20 px-4 py-2 hover:bg-[#1F3E71]/35 transition"><Github className="h-4 w-4" /> GitHub</a>
                </div>
            </motion.div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="border-t border-[#C3D0F6]/10">
            <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-[#8BA8EE]">
                © {new Date().getFullYear()} Lou-Ann Barry. Tous droits réservés.
            </div>
        </footer>
    );
}
