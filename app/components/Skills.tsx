const skillGroups = [
  {
    category: "Front-end",
    items: ["React", "TypeScript", "Tailwind CSS", "JavaScript ES6+"],
  },
  {
    category: "Mobile",
    items: ["React Native", "iOS & Android", "Expo", "Mobile UX"],
  },
  {
    category: "Back-end",
    items: ["Node.js", "Express", "REST APIs", "PostgreSQL"],
  },
  {
    category: "Outils & Méthodes",
    items: ["Git", "CI/CD", "Agile/Scrum", "Testing"],
  },
];

const stats = [
  { value: "10+", label: "Années d'expérience" },
  { value: "50+", label: "Projets réalisés" },
  { value: "100%", label: "Clients satisfaits" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-28 px-6 bg-sand-50 border-y border-ink-900/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">Compétences</p>
          <h2 className="font-display text-5xl md:text-6xl serif-h2">
            Une expertise <span className="serif-em">technique</span> complète.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <p className="eyebrow text-sand-500 mb-5">{group.category}</p>
              <ul className="space-y-3 font-display text-2xl">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="paper rounded-xl p-8 flex items-baseline gap-5"
            >
              <span className="font-display text-6xl text-sand-500 leading-none">
                {stat.value}
              </span>
              <span className="text-ink-700">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
