"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const inquiryTypes = [
  "Investment",
  "Partnership",
  "Media",
  "Careers",
  "General",
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      subject: String(data.get("subject") || "").trim(),
      message: String(data.get("message") || "").trim(),
      inquiryType: String(data.get("inquiryType") || "General"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as {
        error?: string;
      };
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          json.error || "Something went wrong. Please try again shortly."
        );
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Check your connection and try again.");
    }
  }

  return (
    <div className="bg-white border border-black/10 shadow-lg rounded-sm p-8 sm:p-12">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="py-12 text-center"
          >
            <p className="font-serif text-3xl font-bold text-somit-dark">
              Thanks for reaching out.
            </p>
            <p className="mt-4 text-lg text-somit-muted">
              We&apos;ll be in touch soon.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-10 font-bold uppercase tracking-widest text-somit-orange underline-offset-8 hover:underline"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="font-bold uppercase tracking-wider text-somit-dark text-xs">Name</span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="mt-2 w-full rounded-sm border border-black/15 bg-somit-bg px-5 py-4 text-somit-text outline-none transition focus:border-somit-olive focus:ring-1 focus:ring-somit-olive"
                />
              </label>
              <label className="block text-sm">
                <span className="font-bold uppercase tracking-wider text-somit-dark text-xs">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="mt-2 w-full rounded-sm border border-black/15 bg-somit-bg px-5 py-4 text-somit-text outline-none transition focus:border-somit-olive focus:ring-1 focus:ring-somit-olive"
                />
              </label>
            </div>
            <label className="block text-sm">
              <span className="font-bold uppercase tracking-wider text-somit-dark text-xs">Inquiry type</span>
              <select
                name="inquiryType"
                className="mt-2 w-full rounded-sm border border-black/15 bg-somit-bg px-5 py-4 text-somit-text outline-none transition focus:border-somit-olive focus:ring-1 focus:ring-somit-olive appearance-none cursor-pointer"
                defaultValue="General"
              >
                {inquiryTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              <span className="font-bold uppercase tracking-wider text-somit-dark text-xs">Subject</span>
              <input
                required
                name="subject"
                className="mt-2 w-full rounded-sm border border-black/15 bg-somit-bg px-5 py-4 text-somit-text outline-none transition focus:border-somit-olive focus:ring-1 focus:ring-somit-olive"
              />
            </label>
            <label className="block text-sm">
              <span className="font-bold uppercase tracking-wider text-somit-dark text-xs">Message</span>
              <textarea
                required
                name="message"
                rows={5}
                className="mt-2 w-full resize-y rounded-sm border border-black/15 bg-somit-bg px-5 py-4 text-somit-text outline-none transition focus:border-somit-olive focus:ring-1 focus:ring-somit-olive"
              />
            </label>

            {status === "error" && (
              <p className="text-sm font-bold text-red-600" role="alert">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === "loading" ? "Sending…" : "Send message"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
