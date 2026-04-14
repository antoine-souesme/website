"use client";

import { useState } from 'react';

type ContactFormData = {
    name: string;
    email: string;
    message: string;
};

type FormFeedback = {
    type: 'success' | 'error';
    message: string;
};

const Contact = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [feedback, setFeedback] = useState<FormFeedback | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFeedback(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const payload = (await response.json().catch(() => null)) as { error?: string } | null;

            if (!response.ok) {
                throw new Error(payload?.error ?? "Une erreur est survenue lors de l'envoi.");
            }

            setFeedback({
                type: 'success',
                message: 'Message envoyé. Je reviens vers vous rapidement.',
            });
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            const message =
                error instanceof Error ? error.message : "Impossible d'envoyer le message.";

            setFeedback({
                type: 'error',
                message,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const key = e.target.name as keyof ContactFormData;

        setFormData((previous) => ({
            ...previous,
            [key]: e.target.value,
        }));
    };

    const contactInfo = [
        {
            icon: '💼',
            label: 'LinkedIn',
            value: 'Antoine Souesme',
            link: 'https://www.linkedin.com/in/antoine-souesme-07329574/',
            color: 'from-blue-600 to-blue-400',
        },
        {
            icon: '📍',
            label: 'Localisation',
            value: 'Bretagne, France',
            link: null,
            color: 'from-green-500 to-emerald-500',
        },
    ];

    return (
        <section
            id="contact"
            className="py-20 px-4 bg-slate-800"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold mb-4 text-center animate-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Contact
                </h2>
                <p className="text-xl text-slate-400 text-center mb-16">
                    Une idée ? Un projet ? Discutons-en !
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Envoyez-moi un message
                        </h3>
                        <form
                            onSubmit={ handleSubmit }
                            className="space-y-6"
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-slate-300 mb-2 font-medium"
                                >
                                    Nom
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={ formData.name }
                                    onChange={ handleChange }
                                    required
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-slate-300 mb-2 font-medium"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={ formData.email }
                                    onChange={ handleChange }
                                    required
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                    placeholder="votre@email.com"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-slate-300 mb-2 font-medium"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={ formData.message }
                                    onChange={ handleChange }
                                    required
                                    rows={ 6 }
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                                    placeholder="Parlez-moi de votre projet..."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={ isSubmitting }
                                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
                            >
                                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                            </button>
                            {feedback && (
                                <p className={ `text-sm ${feedback.type === 'success' ? 'text-emerald-400' : 'text-red-400'}` }>
                                    {feedback.message}
                                </p>
                            )}
                        </form>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Informations de contact
                        </h3>

                        <div className="flex flex-col gap-4">


                            <div className=" bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20">
                                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                    <span>🟢</span>
                                    <span>Disponibilité</span>
                                </h4>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                Je suis actuellement disponible pour de nouveaux projets en freelance.
                                Réponse garantie sous 24h !
                                </p>
                            </div>

                            <div className="space-y-4">
                                {contactInfo.map((info) => (
                                    <div
                                        key={ info.label }
                                        className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5"
                                    >
                                        {info.link ? (
                                            <a
                                                href={ info.link }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-4 group"
                                            >
                                                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                                                    {info.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-slate-400 text-sm mb-1">
                                                        {info.label}
                                                    </p>
                                                    <p className={ `font-semibold bg-gradient-to-r ${info.color} bg-clip-text text-transparent group-hover:underline` }>
                                                        {info.value}
                                                    </p>
                                                </div>
                                                <svg
                                                    className="w-5 h-5 text-slate-600 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path d="M9 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        ) : (
                                            <div className="flex items-center gap-4">
                                                <div className="text-4xl">{info.icon}</div>
                                                <div className="flex-1">
                                                    <p className="text-slate-400 text-sm mb-1">
                                                        {info.label}
                                                    </p>
                                                    <p className={ `font-semibold bg-gradient-to-r ${info.color} bg-clip-text text-transparent` }>
                                                        {info.value}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
