"use client";

import { useEffect, useState } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'À propos', href: '#about' },
        { label: 'Compétences', href: '#skills' },
        { label: 'Services', href: '#services' },
    ];

    return (
        <nav
            className={ `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-slate-900/50'
                : 'bg-transparent'
            }` }
        >
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">

                        <a
                            href="#"
                            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
                        >
                            AS
                        </a>

                        <div className="hidden md:flex items-center gap-8">
                            {navItems.map((item) => (
                                <a
                                    key={ item.label }
                                    href={ item.href }
                                    className="text-slate-300 hover:text-white transition-colors duration-300 relative group"
                                >
                                    {item.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <a
                        href="#contact"
                        className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 text-sm font-semibold"
                    >
                        Me contacter
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
