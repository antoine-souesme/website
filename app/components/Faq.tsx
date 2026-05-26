import { homeFaqItems } from "../lib/seo";

const Faq = () => {
  return (
    <section id="faq" className="py-28 px-6 bg-sand-100">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="font-display text-5xl md:text-6xl serif-h2 mb-6">
            Vos <span className="serif-em">questions</span>, mes réponses.
          </h2>
          <p className="text-ink-700 text-lg leading-relaxed">
            Réponses aux questions les plus fréquentes pour un projet web ou
            logiciel en Centre Bretagne.
          </p>
        </div>

        <div className="border-t border-ink-900/10">
          {homeFaqItems.map((item) => (
            <details
              key={item.question}
              className="border-b border-ink-900/10 group py-6"
            >
              <summary className="cursor-pointer flex items-start justify-between gap-6">
                <span className="font-display text-2xl md:text-3xl leading-snug">
                  {item.question}
                </span>
                <span className="faq-plus text-sand-500 text-3xl leading-none mt-1 font-light">
                  +
                </span>
              </summary>
              <p className="mt-4 text-ink-700 leading-relaxed max-w-3xl">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
