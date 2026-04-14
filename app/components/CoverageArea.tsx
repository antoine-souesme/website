import Link from "next/link";

const cities = [
    'Saint-Brieuc',
    'Quintin',
    'Pontivy',
    'Loudéac',
    'Carhaix',
    'Rostrenen',
];

const CoverageArea = () => {
    return (
        <section id="zone-intervention" className="py-20 px-4 bg-slate-800">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center animate-gradient bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Zone d&apos;intervention: Centre Bretagne
                </h2>
                <p className="text-lg text-slate-300 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
                    J&apos;accompagne les entreprises en Centre Bretagne pour créer des sites
                    internet et logiciels sur mesure, avec un suivi proche et une exécution
                    rapide.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-6">
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            Villes principales couvertes
                        </h3>
                        <ul className="grid grid-cols-2 gap-3 text-slate-300">
                            {cities.map((city) => (
                                <li key={city} className="rounded-lg bg-slate-800/70 px-3 py-2">
                                    {city}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-6">
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            Bretagne et missions à distance
                        </h3>
                        <p className="text-slate-300 leading-relaxed mb-4">
                            Je peux aussi intervenir partout en Bretagne pour vos besoins en
                            création de site internet, logiciel métier et refonte technique.
                        </p>
                        <Link
                            href="/developpeur-freelance-bretagne"
                            className="inline-flex text-blue-300 hover:text-blue-200 transition-colors"
                        >
                            En savoir plus sur mon accompagnement freelance
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoverageArea;
