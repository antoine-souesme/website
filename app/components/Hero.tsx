"use client";
/* eslint-disable react/no-unescaped-entities */

import { useEffect, useMemo, useState } from 'react';

const seededValue = (index: number, salt: number, min: number, max: number) => {
    const hash = (((index + 1) * 2654435761) ^ (salt * 1013904223)) >>> 0;
    const normalized = hash / 4294967296;
    return min + normalized * (max - min);
};

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const floatingElements = useMemo(
        () =>
            Array.from({ length: 50 }, (_, index) => ({
                width: seededValue(index, 1, 50, 350),
                height: seededValue(index, 2, 50, 350),
                left: seededValue(index, 3, 0, 100),
                top: seededValue(index, 4, 0, 100),
                animationDelay: seededValue(index, 5, 0, 5),
                animationDuration: seededValue(index, 6, 10, 20),
            })),
        [],
    );

    useEffect(() => {
        const animationFrame = requestAnimationFrame(() => {
            setIsVisible(true);
        });

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -inset-[10px] opacity-50">
                    {floatingElements.map((element, i) => (
                        <div
                            key={ i }
                            className="absolute bg-blue-500/20 rounded-full animate-float"
                            style={ {
                                width: `${element.width}px`,
                                height: `${element.height}px`,
                                left: `${element.left}%`,
                                top: `${element.top}%`,
                                animationDelay: `${element.animationDelay}s`,
                                animationDuration: `${element.animationDuration}s`,
                            } }
                        />
                    ))}
                </div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <div
                    className={ `transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }` }
                >
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
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
                        <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full border border-purple-400/30 hover:bg-purple-500/30 transition-all duration-300 hover:scale-105">
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
                        className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110"
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
