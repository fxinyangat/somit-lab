"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const faces = [
  {
    id: "problem",
    title: "THE PROBLEM",
    stat: "80%",
    copy: "of Ugandan farmers plant blindly—guessing inputs instead of matching them to the land.",
    glow: "bg-somit-orange",
    textHover: "text-somit-orange",
  },
  {
    id: "solution",
    title: "THE SOLUTION",
    stat: "5 min",
    copy: "Portable SoMIT device + on-device AI: instant NPK readouts and fertilizer guidance.",
    glow: "bg-somit-light-green",
    textHover: "text-somit-light-green",
  },
  {
    id: "impact",
    title: "THE IMPACT",
    stat: "30–50%",
    copy: "potential yield lift when recommendations exactly match regional soil needs.",
    glow: "bg-white",
    textHover: "text-white",
  },
  {
    id: "traction",
    title: "THE TRACTION",
    stat: "Q4 '25",
    copy: "Field validation underway; path to commercial launch targeted for Q1 2027.",
    glow: "bg-somit-orange",
    textHover: "text-somit-orange",
  },
];

const prismW = 420;
const prismH = 500;
const half = prismH / 2;

export function ScrollPrism() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, -90, -180, -270, -360]
  );

  const smoothRotate = useSpring(rotateX, {
    stiffness: 50,
    damping: 25,
    mass: 1.2,
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[300vh] bg-somit-olive" // Grounded earthy background
      aria-label="Story prism — scroll to explore"
    >
      <div className="sticky top-0 flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
        {/* Dynamic Glowing Background Blob utilizing brand colors */}
        <motion.div
          className="absolute inset-0 z-0 flex items-center justify-center opacity-40 mix-blend-screen"
          style={{ rotate: smoothRotate }}
        >
          <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-somit-light-green via-transparent to-somit-orange blur-[120px]" />
        </motion.div>

        <div className="relative z-10 w-full max-w-[1500px] mx-auto flex flex-col xl:flex-row items-center justify-center gap-12 xl:gap-32">

          {/* The 3D Prism Container (Left) */}
          <div className="flex-1 flex justify-center xl:justify-end xl:pr-10">
            <div className="perspective-dramatic relative scale-90 lg:scale-100">
              <div
                className="relative mx-auto prism-preserve"
                style={{ width: prismW, height: prismH }}
              >
                <motion.div
                  className="absolute inset-0 prism-preserve"
                  style={{
                    rotateX: smoothRotate,
                    transformOrigin: "center center",
                  }}
                >
                  {faces.map((face, i) => (
                    <div
                      key={face.id}
                      className="absolute flex flex-col items-center justify-center rounded-sm bg-somit-dark p-8 md:p-10 text-center shadow-2xl border border-white/10"
                      style={{
                        width: prismW,
                        height: prismH,
                        transform: `rotateX(${i * 90}deg) translateZ(${half}px)`,
                        WebkitBackfaceVisibility: "hidden",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      {/* Deep internal agricultural glow matching brand */}
                      <div className={`absolute top-0 right-0 left-0 h-40 opacity-15 blur-3xl ${face.glow}`} />

                      <p className="z-10 text-sm font-bold uppercase tracking-[0.25em] text-white/50 font-sans">
                        {face.title}
                      </p>

                      <div className="z-10 mt-6 mb-6 flex h-28 w-28 items-center justify-center rounded-lg bg-gradient-to-b from-white/20 to-transparent p-px shadow-2xl">
                        <div className="flex h-full w-full items-center justify-center rounded-lg bg-somit-dark">
                          <span className={`text-4xl font-bold font-sans ${face.textHover}`}>{face.stat}</span>
                        </div>
                      </div>

                      <h3 className="z-10 mt-2 text-3xl font-bold text-white tracking-tight font-serif min-h-[70px] flex items-center justify-center">
                        {face.title === "THE PROBLEM" ? "The cost of guessing" :
                          face.title === "THE SOLUTION" ? "Instant field tech" :
                            face.title === "THE IMPACT" ? "Radical yield upside" :
                              "Path to farmers hands"}
                      </h3>

                      <p className="z-10 mt-4 text-base leading-relaxed text-white/80 max-w-[300px] font-sans">
                        {face.copy}
                      </p>

                      <div className="z-10 mt-8">
                        <span className="cursor-pointer border-b-2 border-somit-orange pb-1 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-somit-orange font-sans">
                          Explore Detail
                        </span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Continuous Action Video (Right) */}
          <div className="flex-1 flex justify-center xl:justify-start w-full max-w-2xl px-4 xl:px-0 xl:pl-10">
            <div className="w-full relative aspect-video overflow-hidden rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 bg-somit-dark z-20">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/xFqecEtdGZ0?start=3&end=360"
                title="SoMIT Lab Field Demonstration"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
