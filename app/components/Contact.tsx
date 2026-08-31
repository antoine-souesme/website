"use client";

import { useState } from "react";

import RevealContact from "./RevealContact";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

type FormFeedback = {
  type: "success" | "error";
  message: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<FormFeedback | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const payload = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!response.ok) {
        throw new Error(
          payload?.error ?? "Une erreur est survenue lors de l'envoi.",
        );
      }

      setFeedback({
        type: "success",
        message: "Message envoyé. Je reviens vers vous rapidement.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Impossible d'envoyer le message.";
      setFeedback({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const key = e.target.name as keyof ContactFormData;
    setFormData((previous) => ({ ...previous, [key]: e.target.value }));
  };

  return (
    <section id="contact" className="py-28 px-6 bg-ocean-900 text-sand-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-sand-400 mb-4">Contact</p>
            <h2 className="font-display text-5xl md:text-6xl serif-h2 mb-6">
              Une idée ? Un projet ?{" "}
              <span className="serif-em">Discutons-en.</span>
            </h2>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-3 text-sand-100/85">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                <span>Actuellement disponible, réponse sous 24h.</span>
              </div>

              <RevealContact
                label="Email"
                scheme="mailto"
                encodedDisplay="bW9jLmxpYW1nQG9ycC5lbXNldW9zLmVuaW90bmE="
                encodedHref="bW9jLmxpYW1nQG9ycC5lbXNldW9zLmVuaW90bmE="
                icon={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#c8a45e"
                    strokeWidth="1.5"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 7l10 6 10-6" />
                  </svg>
                }
              />

              <a
                href="https://www.linkedin.com/in/antoine-souesme-07329574/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 rounded-xl border border-sand-100/15 hover:border-sand-100/35 hover:bg-sand-100/5 transition"
              >
                <div>
                  <p className="eyebrow text-sand-400 mb-1">LinkedIn</p>
                  <p className="font-display text-2xl text-sand-100">
                    Antoine Souesme
                  </p>
                </div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>

              <div className="flex items-center justify-between p-5 rounded-xl border border-sand-100/15">
                <div>
                  <p className="eyebrow text-sand-400 mb-1">Localisation</p>
                  <p className="font-display text-2xl text-sand-100">
                    Bretagne, France
                  </p>
                </div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c8a45e"
                  strokeWidth="1.5"
                >
                  <path d="M12 22s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-sand-100/[0.04] border border-sand-100/15 rounded-2xl p-8"
            >
              <h3 className="font-display text-3xl mb-2">
                Envoyez-moi un message
              </h3>
              <p className="text-sand-100/70 text-sm mb-6">
                Parlez-moi de votre projet, même de façon très brève. Je vous
                réponds rapidement.
              </p>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-sand-100/80 mb-2"
                >
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 bg-transparent border border-sand-100/20 rounded-lg text-sand-100 placeholder-sand-100/30 focus:outline-none focus:border-sand-400 transition"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-sand-100/80 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 bg-transparent border border-sand-100/20 rounded-lg text-sand-100 placeholder-sand-100/30 focus:outline-none focus:border-sand-400 transition"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-sand-100/80 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Parlez-moi de votre projet..."
                  className="w-full px-4 py-3 bg-transparent border border-sand-100/20 rounded-lg text-sand-100 placeholder-sand-100/30 focus:outline-none focus:border-sand-400 transition resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-3 px-7 py-4 bg-sand-300 text-ink-900 rounded-full font-medium hover:bg-sand-200 transition disabled:opacity-60"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
              {feedback && (
                <p
                  className={`text-sm ${
                    feedback.type === "success"
                      ? "text-emerald-300"
                      : "text-red-300"
                  }`}
                >
                  {feedback.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
