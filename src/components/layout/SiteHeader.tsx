"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-black/5 bg-white/60 backdrop-blur-lg">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-4 transition"
          onClick={() => setOpen(false)}
        >
          {/* Typographic Logo Badge */}
          <div className="bg-transparent px-2 py-2 flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <div className="flex items-center text-3xl font-black font-sans leading-none tracking-tight">
              <span className="text-[#5DBE4A]">SoMIT</span>
              <span className="text-[#1A5323] ml-[1px]">LAB</span>
            </div>
            <span className="mt-1 text-[8.5px] font-bold tracking-[0.3em] text-[#1A5323] uppercase">
              AI for agriculture
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[14px] font-bold tracking-widest uppercase transition hover:text-somit-orange ${active ? "text-somit-orange border-b-2 border-somit-orange pb-1" : "text-somit-dark/80"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="btn-primary shadow-xl"
          >
            Get involved
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center text-somit-dark md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-2">
            <motion.span
              animate={open ? { rotate: 45, y: 10 } : {}}
              className="block h-0.5 w-8 bg-current"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-8 bg-current"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -10 } : {}}
              className="block h-0.5 w-8 bg-current"
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-black/10 bg-white md:hidden shadow-lg"
          >
            <nav className="flex flex-col gap-2 px-4 py-8">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-4 text-xl font-bold uppercase tracking-widest text-somit-dark hover:text-somit-orange"
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-6">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary block w-full text-center py-4 text-lg"
                >
                  Get involved
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
