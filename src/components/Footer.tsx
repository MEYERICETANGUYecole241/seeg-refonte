import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t text-sm text-gray-600 dark:bg-gray-900 dark:text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">SEEG</h4>
          <p>La Société d&#39;Énergie et d&#39;Eau du Gabon vous accompagne dans votre quotidien.</p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Liens utiles</h4>
          <ul className="space-y-1">
            <li><Link href="/about" className="hover:underline">À propos</Link></li>
            <li><Link href="/services" className="hover:underline">Nos services</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/recrutement" className="hover:underline">Recrutement</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Adresse</h4>
          <address className="not-italic">
            Boulevard Triomphal, Libreville, Gabon<br />
            Tél : +241 01 44 11 44<br />
            Email : <a href="mailto:contact@seeg.ga" className="hover:underline">contact@seeg.ga</a>
          </address>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Suivez-nous</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-600">📘</a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-400">🐦</a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-blue-700">💼</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 py-4 text-center">
        © {new Date().getFullYear()} SEEG Gabon. Tous droits réservés.
      </div>
    </footer>
  );
}
