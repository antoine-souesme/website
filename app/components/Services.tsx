/* eslint-disable react/no-unescaped-entities */

const Services = () => {
    const services = [
        {
            icon: '🌐',
            title: 'Développement Full-Stack',
            description: 'Applications web complètes avec React, Node.js et TypeScript. Architecture moderne, performante et scalable.',
            features: ['Front-end & Back-end', 'Architecture complète', 'API REST', 'Base de données'],
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: '📱',
            title: 'Développement Mobile',
            description: 'Applications iOS et Android natives avec React Native. Une seule codebase pour deux plateformes.',
            features: ['iOS & Android', 'React Native', 'UX mobile optimisée', 'App Store & Play Store'],
            color: 'from-purple-500 to-pink-500',
        },
        {
            icon: '🎨',
            title: 'Intégration UI/UX',
            description: 'Transformation de vos maquettes en interfaces fluides et intuitives. Focus sur l\'expérience utilisateur.',
            features: ['Design Systems', 'Animations', 'Responsive Design', 'Accessibilité'],
            color: 'from-pink-500 to-rose-500',
        },
        {
            icon: '🔍',
            title: 'Audit & Code Review',
            description: 'Analyse approfondie de votre code existant. Recommandations et optimisations pour améliorer la qualité.',
            features: ['Analyse de code', 'Performance', 'Sécurité', 'Bonnes pratiques'],
            color: 'from-orange-500 to-red-500',
        },
        {
            icon: '🚀',
            title: 'Setup & Architecture',
            description: 'Initialisation de projets avec les meilleures pratiques. Configuration CI/CD et déploiement.',
            features: ['Configuration projet', 'CI/CD', 'Tests automatisés', 'Documentation'],
            color: 'from-green-500 to-emerald-500',
        },
        {
            icon: '👥',
            title: 'Renforcement d\'équipe',
            description: 'Intégration dans votre équipe pour accélérer le développement. Mentorat et transfert de compétences.',
            features: ['Team augmentation', 'Mentorat', 'Code reviews', 'Best practices'],
            color: 'from-indigo-500 to-purple-500',
        },
    ];

    return (
        <section
            id="services"
            className="py-20 px-4 bg-slate-900"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold mb-4 text-center animate-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Services
                </h2>
                <p className="text-xl text-slate-400 text-center mb-16">
                    Des solutions complètes pour tous vos besoins en développement
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={ service.title }
                            className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
                            style={ {
                                animationDelay: `${index * 100}ms`,
                            } }
                        >
                            <div className="text-5xl mb-4 group-hover:translate-x-2 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className={ `text-2xl font-bold mb-3 bg-gradient-to-r ${service.color} bg-clip-text text-transparent` }>
                                {service.title}
                            </h3>
                            <p className="text-slate-400 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-2">
                                {service.features.map((feature) => (
                                    <li
                                        key={ feature }
                                        className="flex items-center gap-2 text-slate-300 text-sm"
                                    >
                                        <svg
                                            className={ `w-5 h-5 flex-shrink-0 bg-gradient-to-r ${service.color}` }
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="group-hover:text-white transition-colors">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm p-12 rounded-3xl border border-slate-700/50">
                    <div className="text-center max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold text-white mb-6">
                            Prêt à démarrer votre projet ?
                        </h3>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            Que vous ayez besoin d'une application web, mobile, ou d'un accompagnement technique,
                            je suis là pour transformer votre vision en réalité. Discutons de votre projet !
                        </p>
                        <a
                            href="#contact"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110"
                        >
                            Contactez-moi
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
