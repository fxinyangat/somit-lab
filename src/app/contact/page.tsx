import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with SoMIT Lab regarding investments, partnerships, or agricultural deployments.",
};

export default function ContactPage() {
  return (
    <main className="bg-somit-bg min-h-[calc(100vh-80px)]">
      {/* Short elegant hero layer */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/soil.png"
            alt="Agricultural backdrop"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#41431B]/80 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Get in touch.
          </h1>
        </div>
      </section>

      <section className="relative -mt-20 px-4 pb-24 sm:px-6 z-20">
        <div className="mx-auto max-w-3xl">
          <ContactForm />
        </div>
        <div className="mt-16 text-center text-somit-muted font-serif text-xl max-w-2xl mx-auto">
          Whether you&apos;re an investor, an extension partner, or sharing the mission of feeding communities — we are listening.
        </div>
      </section>
    </main>
  );
}
