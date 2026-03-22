import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about SoMIT Lab's mission, vision, and the team bringing precision agriculture to Ugandan farmers.",
};

export default function AboutPage() {
  return (
    <main>
      <div className="bg-somit-bg px-4 py-24 text-center sm:px-6 lg:px-8 border-b border-black/5">
        <h1 className="font-serif text-5xl font-bold tracking-tight text-somit-dark sm:text-7xl max-w-5xl mx-auto leading-tight">
          Building tools that belong in <span className="text-somit-olive italic">muddy boots</span>, not just labs.
        </h1>
      </div>
      <AboutContent />
    </main>
  );
}
