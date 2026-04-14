/* eslint-disable react/no-unescaped-entities */

const Skills = () => {
    const skills = [
        {
            category: 'Front-end',
            icon: '🎨',
            color: 'from-blue-500 to-cyan-500',
            items: [
                { name: 'React', level: 95 },
                { name: 'TypeScript', level: 90 },
                { name: 'Tailwind CSS', level: 85 },
                { name: 'JavaScript ES6+', level: 95 },
            ],
        },
        {
            category: 'Mobile',
            icon: '📱',
            color: 'from-purple-500 to-pink-500',
            items: [
                { name: 'React Native', level: 90 },
                { name: 'iOS & Android', level: 85 },
                { name: 'Expo', level: 80 },
                { name: 'Mobile UX', level: 90 },
            ],
        },
        {
            category: 'Back-end',
            icon: '⚙️',
            color: 'from-green-500 to-emerald-500',
            items: [
                { name: 'Node.js', level: 90 },
                { name: 'Express', level: 85 },
                { name: 'REST APIs', level: 90 },
                { name: 'PostgreSQL', level: 80 },
            ],
        },
        {
            category: 'Outils & Méthodes',
            icon: '🛠️',
            color: 'from-orange-500 to-red-500',
            items: [
                { name: 'Git', level: 90 },
                { name: 'CI/CD', level: 80 },
                { name: 'Agile/Scrum', level: 85 },
                { name: 'Testing', level: 85 },
            ],
        },
    ];

    return (
        <section
            id="skills"
            className="py-20 px-4 bg-slate-800"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold mb-4 text-center animate-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Compétences
                </h2>
                <p className="text-xl text-slate-400 text-center mb-16">
                    Une expertise technique complète pour vos projets
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup, index) => (
                        <div
                            key={ skillGroup.category }
                            className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:scale-105"
                            style={ {
                                animationDelay: `${index * 100}ms`,
                            } }
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="text-4xl">{skillGroup.icon}</div>
                                <h3 className={ `text-xl font-semibold bg-gradient-to-r ${skillGroup.color} bg-clip-text text-transparent` }>
                                    {skillGroup.category}
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {skillGroup.items.map((skill) => (
                                    <div
                                        key={ skill.name }
                                        className="group"
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-slate-300 text-sm group-hover:text-white transition-colors">
                                                {skill.name}
                                            </span>
                                            {/* <span className="text-slate-500 text-xs">
                                                {skill.level}%
                                            </span> */}
                                        </div>
                                        {/* <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                            <div
                                                className={ `h-full bg-gradient-to-r ${skillGroup.color} rounded-full transition-all duration-1000 ease-out` }
                                                style={ {
                                                    width: `${skill.level}%`,
                                                } }
                                            />
                                        </div> */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 text-center">
                        <div className="text-4xl mb-3">🏆</div>
                        <div className="text-3xl font-bold text-white mb-2">10+</div>
                        <div className="text-slate-400">Années d'expérience</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm p-6 rounded-2xl border border-green-500/20 text-center">
                        <div className="text-4xl mb-3">🚀</div>
                        <div className="text-3xl font-bold text-white mb-2">50+</div>
                        <div className="text-slate-400">Projets réalisés</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm p-6 rounded-2xl border border-orange-500/20 text-center">
                        <div className="text-4xl mb-3">😊</div>
                        <div className="text-3xl font-bold text-white mb-2">100%</div>
                        <div className="text-slate-400">Clients satisfaits</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
