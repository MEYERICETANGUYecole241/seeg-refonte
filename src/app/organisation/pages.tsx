// app/organisation/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organisation – SEEG",
  description: "Découvrez la structure organisationnelle de la Société d'Énergie et d'Eau du Gabon.",
};

export default function OrganisationPage() {
  return (
    <div>
      <section className="px-6 py-6 bg-white mt-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center pb-6">
          Notre Organisation
        </h1>
      </section>

      <section className="px-6 py-6 bg-white">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image à gauche */}
          <div className="w-full md:w-2/3">
            <img
              src="image 1.jpeg" // Remplace par ton image ou SVG réel
              alt="Organigramme de la SEEG"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Texte à droite */}
          <div className="w-full md:w-1/3 text-right">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">STRUCTURE ORGANISATIONNELLE</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              La SEEG s’appuie sur une organisation moderne, structurée autour de directions générales, techniques et
              régionales. Cette structuration vise à garantir une gestion efficace, une proximité avec les usagers et
              une performance durable dans la distribution de l’eau et de l’électricité.
            </p>
            <div className="flex justify-center">
              <button className="bg-blue-700 text-white px-20 py-2 rounded-none hover:bg-blue-200 hover:text-black transition-colors duration-300">
                EN SAVOIR PLUS
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
