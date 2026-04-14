const steps = [
  {
    title: "Brief",
    description:
      "Comprendre vos objectifs business, vos contraintes et vos priorites.",
  },
  {
    title: "Conception",
    description:
      "Definir l'architecture, les parcours utilisateurs et le perimetre du MVP.",
  },
  {
    title: "Developpement",
    description:
      "Construire un site internet ou logiciel sur mesure, performant et maintenable.",
  },
  {
    title: "Livraison",
    description:
      "Mise en production, verification qualite et transfert des points clefs.",
  },
  {
    title: "Maintenance",
    description:
      "Suivi evolutif, optimisations et accompagnement dans la duree.",
  },
];

const CustomMethod = () => {
  return (
    <section id="methode-sur-mesure" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">
          Methode sur mesure
        </h2>
        <p className="text-lg text-slate-300 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          Un cadre clair pour livrer vite et bien, sans sacrifier la qualite
          technique ni la lisibilite du projet.
        </p>

        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5"
            >
              <p className="text-sm text-blue-300 mb-2">Etape {index + 1}</p>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomMethod;
