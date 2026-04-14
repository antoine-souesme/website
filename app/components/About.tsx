/* eslint-disable react/no-unescaped-entities */

const About = () => {
    return (
        <section
            id="about"
            className="py-20 px-4 bg-slate-900"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold mb-12 text-center animate-gradient bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    À propos
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                            <div className="flex items-start gap-4">
                                <div className="text-4xl">💼</div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-white mb-2">
                                        10 ans d'expérience
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Une décennie de développement web et mobile avec React, React Native, Node.js et TypeScript. De la startup à l'entreprise, j'ai accompagné des projets de toutes envergures.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                            <div className="flex items-start gap-4">
                                <div className="text-4xl">🎨</div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-white mb-2">
                                        Passion UX
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Je ne me contente pas d'écrire du code. Je crée des expériences utilisateur intuitives et engageantes. L'interface est le pont entre votre vision et vos utilisateurs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10">
                            <div className="flex items-start gap-4">
                                <div className="text-4xl">🌍</div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-white mb-2">
                                        Bilingue FR/EN
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Je travaille aussi bien sur des projets français qu'internationaux. Communication fluide et documentation claire dans les deux langues.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                            <h3 className="text-2xl font-semibold text-white mb-6">
                                Ma philosophie
                            </h3>
                            <div className="space-y-4 text-slate-300 leading-relaxed">
                                <p>
                                    🎯 <strong className="text-white">Vision complète</strong> : De la conception à la livraison, je prends en charge tous les aspects de votre projet.
                                </p>
                                <p>
                                    ⚡ <strong className="text-white">Full-stack</strong> : Front-end, back-end, mobile, desktop - je maîtrise toute la stack pour une cohérence optimale.
                                </p>
                                <p>
                                    🔧 <strong className="text-white">Qualité du code</strong> : Code propre, maintenable et évolutif. Parce qu'un projet réussi se pense sur le long terme.
                                </p>
                                <p>
                                    🤝 <strong className="text-white">Collaboration</strong> : Renforcement d'équipe, mentorat, ou prise en charge complète - je m'adapte à vos besoins.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-slate-400 text-sm mb-1">Localisation</p>
                                    <p className="text-white font-semibold">Bretagne, France</p>
                                </div>
                                <div className="text-3xl">📍</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
