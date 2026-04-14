const trustItems = [
    {
        label: "Expérience",
        value: "10 ans",
        description: "Développement web et logiciel pour des projets de tailles variées.",
    },
    {
        label: "Types de projets",
        value: "Site + logiciel",
        description:
            "Sites vitrines, plateformes web, outils métier et évolutions techniques.",
    },
    {
        label: "Délai de réponse",
        value: "24h",
        description: "Premier retour rapide pour cadrer le besoin et la prochaine étape.",
    },
    {
        label: "Disponibilité",
        value: "Freelance actif",
        description:
            "Accompagnement ponctuel ou long terme selon votre charge et votre roadmap.",
    },
];

const TrustProofs = () => {
    return (
        <section id="preuves" className="py-20 px-4 bg-slate-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center animate-gradient bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Preuves de confiance
                </h2>
                <p className="text-lg text-slate-300 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
                    Des indicateurs clairs pour choisir un développeur freelance adapté à
                    vos enjeux.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {trustItems.map((item) => (
                        <article
                            key={item.label}
                            className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5"
                        >
                            <p className="text-sm text-slate-400 mb-2">{item.label}</p>
                            <p className="text-2xl font-bold text-white mb-3">{item.value}</p>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustProofs;
