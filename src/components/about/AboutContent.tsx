"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Hexagon, Triangle, Circle } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const values = [
  {
    title: "Innovation",
    body: "We build tools that belong in muddy boots — not only in research papers.",
    border: "border-somit-light-green",
  },
  {
    title: "Accessibility",
    body: "Soil data should not be a luxury. Price, language, and connectivity inform every design choice.",
    border: "border-gray-300",
  },
  {
    title: "Integrity",
    body: "Honest about what the model knows, what it assumes, and how recommendations are validated.",
    border: "border-somit-orange",
  },
  {
    title: "Impact",
    body: "Success is measured in yield, input efficiency, and farmer income — full stop.",
    border: "border-somit-olive",
  },
];

const team = [
  {
    name: "Jean (Sheshe) Amukwatse",
    role: "Founder",
    bio: "Leading product vision, partnerships, and the path from prototype to fields across Uganda.",
    linkedin: "#",
    twitter: "#",
    image: "/images/team/jean.jpg",
  },
  {
    name: "Prof. Jude Lubega",
    role: "Tech Advisor",
    bio: "Guiding technical architecture, research translation, and responsible AI deployment.",
    linkedin: "#",
    twitter: "#",
    image: "/images/team/jude.jpeg",
  },
  {
    name: "Claire Babirye",
    role: "AI / ML Engineer",
    bio: "Building models that stay accurate at the edge — with datasets grounded in local agronomy.",
    linkedin: "#",
    twitter: "#",
    image: "/images/team/claire.jpeg",
  },
];

const milestones = [
  { date: "Q4 2025", label: "Field validation", detail: "Prototype trials with partner farmers." },
  { date: "2026", label: "Iterate & scale pilots", detail: "Refine hardware, UX, and recommendation engine." },
  { date: "Q1 2027", label: "Commercial launch", detail: "Go-to-market with distribution partners." },
];

export function AboutContent() {
  return (
    <>
      <section className="bg-white px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Mission/Vision Column */}
            <div className="space-y-20">
              <motion.div {...fadeUp}>
                <h2 className="font-serif text-4xl font-bold text-somit-dark sm:text-5xl">Our Mission</h2>
                <p className="mt-8 max-w-2xl text-2xl leading-relaxed text-somit-text font-serif">
                  We equip every farmer with trustworthy soil intelligence — fast, affordable, and
                  actionable — so African agriculture produces more with far less waste.
                </p>
              </motion.div>
              <motion.div {...fadeUp}>
                <h2 className="font-serif text-4xl font-bold text-somit-dark sm:text-5xl">Our Vision</h2>
                <p className="mt-8 max-w-2xl text-xl leading-relaxed text-somit-muted">
                  In five to ten years, soil testing is as routine as planting season — from Uganda
                  outward across East Africa, with SoMIT-class devices and services trusted by
                  extension workers, cooperatives, and families who feed the continent.
                </p>
              </motion.div>
            </div>
            
            {/* Striking Image Column */}
            <motion.div {...fadeUp} className="relative h-[500px] lg:h-[700px] w-full rounded-sm overflow-hidden shadow-2xl border-4 border-somit-bg">
              <Image
                src="/images/soil.png"
                alt="High definition soil structure"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-somit-bg px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.h2 {...fadeUp} className="font-serif text-4xl font-bold text-somit-dark sm:text-5xl">
            Core Values
          </motion.h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`bg-white rounded-sm shadow-sm p-10 border-t-4 ${v.border}`}
              >
                <h3 className="font-serif text-2xl font-bold text-somit-dark">{v.title}</h3>
                <p className="mt-4 text-lg text-somit-muted leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-somit-dark px-4 py-32 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="font-serif text-5xl font-bold text-white sm:text-6xl">The Team</h2>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-white/80 font-serif">
              The people translating agricultural research into rural reality.
            </p>
          </div>
          <div className="mt-20 grid gap-10 md:grid-cols-3">
            {team.map((m, i) => (
              <motion.article
                key={m.name}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="bg-white flex flex-col rounded-sm overflow-hidden group shadow-xl"
              >
                <div className="flex justify-center pt-10 pb-4">
                  <div className="relative h-48 w-48 overflow-hidden rounded-full shadow-md border-4 border-somit-bg">
                    <Image
                      src={m.image}
                      alt={`${m.name} - ${m.role}`}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>
                </div>
                <div className="px-8 pb-8 flex-1 flex flex-col items-center text-center">
                  <h3 className="font-serif text-2xl font-bold text-somit-dark">{m.name}</h3>
                  <p className="mt-3 text-sm font-bold uppercase tracking-widest text-somit-light-green bg-somit-dark px-3 py-1 rounded-sm">
                    {m.role}
                  </p>
                  <p className="mt-6 flex-1 text-base text-somit-muted leading-relaxed">{m.bio}</p>
                  <div className="mt-8 flex w-full justify-center gap-6 pt-6 border-t border-black/5">
                    {m.linkedin && (
                      <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="text-somit-muted hover:text-somit-orange transition" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {m.twitter && (
                      <a href={m.twitter} target="_blank" rel="noopener noreferrer" className="text-somit-muted hover:text-somit-orange transition" aria-label="Twitter">
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2 {...fadeUp} className="font-serif text-4xl font-bold text-somit-dark sm:text-5xl">
            Advisory & Partners
          </motion.h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-somit-muted">
            Institutional credibility accelerates adoption. Validated locally, built for farmers everywhere.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-12 sm:gap-16">
            {[
              { name: "Makerere AI Lab", icon: Hexagon },
              { name: "Extension networks", icon: Triangle },
              { name: "Research partners", icon: Circle },
            ].map((p, i) => (
              <motion.div
                key={p.name}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                whileHover={{ scale: 1.00 }}
                className="flex items-center gap-4 text-somit-dark opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 cursor-pointer"
              >
                <p.icon className="h-10 w-10 stroke-[2] text-somit-olive" />
                <span className="font-sans text-xl font-black tracking-tighter uppercase">{p.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
