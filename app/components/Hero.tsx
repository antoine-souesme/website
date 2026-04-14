"use client";
/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from 'react';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const animationFrame = requestAnimationFrame(() => {
            setIsVisible(true);
        });

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="hero-underwater-bg absolute inset-0" />
                <div className="hero-water-surface absolute inset-0" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <div
                    className={ `transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }` }
                >
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-gradient bg-gradient-to-r from-cyan-300 via-sky-400 to-teal-300 bg-clip-text text-transparent">
                        Antoine Souesme
                    </h1>
                    <p className="text-2xl md:text-3xl text-slate-300 mb-4">
                        Développeur de site web et application mobile
                    </p>
                    <p className="text-xl md:text-2xl text-slate-400 mb-8">
                        10 ans d'expérience
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full border border-blue-400/30 hover:bg-blue-500/30 transition-all duration-300 hover:scale-105">
                            React
                        </span>
                        <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-400/30 hover:bg-indigo-500/30 transition-all duration-300 hover:scale-105">
                            React Native
                        </span>
                        <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full border border-green-400/30 hover:bg-green-500/30 transition-all duration-300 hover:scale-105">
                            Node.js
                        </span>
                        <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-400/30 hover:bg-cyan-500/30 transition-all duration-300 hover:scale-105">
                            TypeScript
                        </span>
                    </div>
                </div>

                <div
                    className={ `mt-12 transition-all duration-1000 delay-300 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }` }
                >
                    <a
                        href="#contact"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-110"
                    >
                        Travaillons ensemble
                    </a>
                </div>

                <div className="mt-16 animate-bounce">
                    <svg
                        className="w-8 h-8 mx-auto text-slate-400"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;
