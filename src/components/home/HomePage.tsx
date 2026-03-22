"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollPrism } from "./ScrollPrism";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

export function HomePage() {
  return (
    <main>
      {/* Massive Visual Hero */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/farmers.jpg"
            alt="Ugandan farmer surveying the field's potential"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight drop-shadow-xl"
          >
            Farming for our future.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="mt-8 text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-md font-serif"
          >
            Technology is opening new horizons for agriculture. Real-time soil insights allow farmers to produce more food with fewer resources, nourishing communities sustainably.
          </motion.p>
        </div>
      </section>

      {/* 3D Prism Section */}
      <ScrollPrism />

      {/* Corporate Solid Cards Section */}
      <section className="bg-somit-bg py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-20">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-somit-dark">
              Sowing the seeds of ingenuity.
            </h2>
            <p className="mt-6 text-xl text-somit-muted max-w-3xl mx-auto">
              SoMIT&apos;s precision testing technologies are revolutionizing the way we understand the land. By harnessing the power of innovation, we solve the annual $300M productivity deficit.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "The Problem",
                copy: "80% of farmers plant blindly—guessing inputs instead of matching them to the land. This creates a massive waste in fertilizer costs and untapped yield limits.",
                bg: "card-dark",
                linkText: "Learn More",
              },
              {
                title: "The Solution",
                copy: "A portable SoMIT analyzer combined with edge AI inference to provide instant NPK readouts and corrective prescriptions right in the field within 5 minutes.",
                bg: "card-light-green",
                linkText: "Our Product",
              },
              {
                title: "The Impact",
                copy: "Proper soil nutrition targeting translates to an immediate 30-50% potential yield upside. More harvest means resilient families and nourished communities.",
                bg: "card-white",
                linkText: "Sustainability",
              },
            ].map((c) => (
              <motion.div
                key={c.title}
                {...fadeUp}
                className={`p-10 flex flex-col justify-between rounded-sm ${c.bg} shadow-lg transition-transform hover:-translate-y-2 duration-300`}
              >
                <div>
                  <h3 className="font-serif text-4xl mb-6">{c.title}</h3>
                  <p className="text-lg leading-relaxed opacity-90">{c.copy}</p>
                </div>
                <div className="mt-14">
                  <span className={`inline-block px-6 py-3 text-sm font-bold uppercase tracking-wider rounded-sm cursor-pointer transition ${c.bg === "card-dark" ? "bg-somit-light-green text-somit-dark hover:brightness-110" :
                    c.bg === "card-light-green" ? "bg-somit-dark text-white hover:brightness-125" :
                      "bg-somit-dark text-white hover:bg-somit-olive"
                    }`}>
                    {c.linkText}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Secondary Hero */}
      <section className="relative py-40 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/soil.png"
            alt="Healthy soil structures"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#41431B]/70 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h2 {...fadeUp} className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Farmers feed the world.<br />We are supporting them.
          </motion.h2>
          <motion.p {...fadeUp} className="mt-8 text-2xl text-white/90 font-serif">
            Discover how SoMIT&apos;s accessible intelligence is creating a better, more resilient world where every farmer can thrive.
          </motion.p>
          <motion.div {...fadeUp} className="mt-14 flex items-center justify-center gap-6">
            <Link href="/contact" className="btn-primary">
              Partner With Us
            </Link>
            <Link href="/about" className="font-bold text-white uppercase tracking-wider underline-offset-8 hover:underline">
              Read our mission
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
