const steps = [
  {
    title: "Brief",
    description:
      "Comprendre vos objectifs business, vos contraintes et vos priorités.",
  },
  {
    title: "Conception",
    description:
      "Définir l'architecture, les parcours utilisateurs et le périmètre du MVP.",
  },
  {
    title: "Développement",
    description:
      "Construire un site internet ou logiciel sur mesure, performant et maintenable.",
  },
  {
    title: "Livraison",
    description:
      "Mise en production, vérification qualité et transfert des points clés.",
  },
  {
    title: "Maintenance",
    description:
      "Suivi évolutif, optimisations et accompagnement dans la durée.",
  },
];

const CustomMethod = () => {
  return (
    <section id="methode" className="py-28 px-6 bg-ocean-900 text-sand-100">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow text-sand-400 mb-4">Méthode sur mesure</p>
          <h2 className="font-display text-5xl md:text-6xl serif-h2 mb-6">
            Un cadre clair pour livrer{" "}
            <span className="serif-em">vite et bien</span>.
          </h2>
          <p className="text-sand-100/80 text-lg leading-relaxed">
            Sans sacrifier la qualité technique ni la lisibilité du projet.
          </p>
        </div>

        <ol className="grid md:grid-cols-5 gap-px bg-sand-100/15 border border-sand-100/15 rounded-2xl overflow-hidden">
          {steps.map((step, index) => (
            <li key={step.title} className="bg-ocean-900 p-6">
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-display text-4xl text-sand-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-2xl mb-2">{step.title}</h3>
              <p className="text-sand-100/70 text-sm leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default CustomMethod;
