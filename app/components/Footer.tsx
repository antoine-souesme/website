/* eslint-disable react/no-unescaped-entities */

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: '💼',
            url: 'https://www.linkedin.com/in/antoine-souesme-07329574/',
        },
    ];

    return (
        <footer className="bg-slate-950 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                            Antoine Souesme
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                            Développeur Full-Stack JavaScript avec 10 ans d'expérience.
                            Créateur d'expériences digitales exceptionnelles.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Navigation</h4>
                        <ul className="space-y-2">
                            {['Accueil', 'À propos', 'Compétences', 'Services', 'Contact'].map(
                                (item) => (
                                    <li key={ item }>
                                        <a
                                            href={ `#${item.toLowerCase().replace('à propos', 'about').replace('compétences', 'skills').replace('accueil', '')}` }
                                            className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Suivez-moi</h4>
                        <div className="flex gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={ link.name }
                                    href={ link.url }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-110"
                                    title={ link.name }
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 text-sm">
                            © {currentYear} Antoine Souesme. Tous droits réservés.
                        </p>
                        <p className="text-slate-500 text-sm">
                            Développé avec React, TypeScript & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
