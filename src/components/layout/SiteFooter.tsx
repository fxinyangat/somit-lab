import Link from "next/link";

const social = [
  {
    key: "twitter",
    label: "X / Twitter",
    href: process.env.NEXT_PUBLIC_SOCIAL_TWITTER,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN,
  },
].filter((s) => s.href);

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-somit-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr]">
          <div className="max-w-md">
            {/* Typographic Logo Badge */}
            <div className="bg-[#F8F9F5] px-4 py-3 rounded-sm shadow-lg flex flex-col items-center justify-center w-max mb-2">
              <div className="flex items-center text-4xl font-black font-sans leading-none tracking-tight">
                <span className="text-[#5DBE4A]">SoMIT</span>
                <span className="text-[#1A5323] ml-[1px]">LAB</span>
              </div>
              <span className="mt-1.5 text-[10px] font-bold tracking-[0.3em] text-[#1A5323] uppercase">
                AI for agriculture
              </span>
            </div>
            <p className="mt-6 text-lg tracking-wide text-white/80 leading-relaxed">
              Soil Mobile Testing Laboratory — Agricultural intelligence built for the
              fields of Africa.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-somit-light-green">
              Explore
            </p>
            <ul className="mt-6 space-y-4 font-serif text-lg">
              <li>
                <Link href="/" className="transition hover:text-somit-orange">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-somit-orange">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-somit-orange">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {social.length > 0 && (
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-somit-light-green">
                Connect
              </p>
              <ul className="mt-6 space-y-4 font-serif text-lg">
                {social.map((s) => (
                  <li key={s.key}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-somit-orange"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 text-sm text-white/60 sm:flex-row">
          <span>© {new Date().getFullYear()} SoMIT Lab. All rights reserved.</span>
          <span className="uppercase tracking-widest">Uganda · HQ</span>
        </div>
      </div>
    </footer>
  );
}
