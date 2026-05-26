type TrustItem = {
  label: string;
  value: React.ReactNode;
  description: string;
};

const trustItems: TrustItem[] = [
  {
    label: "Expérience",
    value: "10 ans",
    description:
      "Développement web et logiciel pour des projets de tailles variées.",
  },
  {
    label: "Types de projets",
    value: (
      <>
        Site<br />+ logiciel
      </>
    ),
    description:
      "Sites vitrines, plateformes web, outils métier et évolutions techniques.",
  },
  {
    label: "Délai de réponse",
    value: "24h",
    description:
      "Premier retour rapide pour cadrer le besoin et la prochaine étape.",
  },
  {
    label: "Disponibilité",
    value: (
      <>
        Freelance<br />actif
      </>
    ),
    description:
      "Accompagnement ponctuel ou long terme selon votre charge et votre roadmap.",
  },
];

const TrustProofs = () => {
  return (
    <section id="preuves" className="py-28 px-6 bg-sand-100">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">Preuves de confiance</p>
          <h2 className="font-display text-5xl md:text-6xl serif-h2">
            Des <span className="serif-em">indicateurs</span> clairs pour
            choisir.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-900/10 border border-ink-900/10 rounded-2xl overflow-hidden">
          {trustItems.map((item) => (
            <div key={item.label} className="bg-sand-50 p-8">
              <p className="eyebrow text-sand-500 mb-4">{item.label}</p>
              <p className="font-display text-5xl mb-4">{item.value}</p>
              <p className="text-sm text-ink-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustProofs;
