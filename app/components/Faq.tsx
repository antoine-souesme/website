import { ChevronDown } from "lucide-react";
import { homeFaqItems } from "../lib/seo";

const Faq = () => {
  return (
    <section id="faq" className="py-20 px-4 bg-slate-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">
          FAQ
        </h2>
        <p className="text-lg text-slate-300 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          Réponses aux questions les plus fréquentes pour un projet web ou
          logiciel en Centre Bretagne.
        </p>

        <div className="space-y-4">
          {homeFaqItems.map((item) => (
            <details
              key={item.question}
              className="bg-slate-900/70 border border-slate-700 rounded-xl p-5 group"
            >
              <summary className="cursor-pointer text-white font-semibold list-none pr-6 relative">
                {item.question}
                <ChevronDown
                  size={18}
                  className="absolute right-0 top-0.5 text-slate-400 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="mt-3 text-slate-300 leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
