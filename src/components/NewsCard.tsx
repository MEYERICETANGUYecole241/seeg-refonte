'use client'

import { useEffect, useRef, useState } from 'react'

import Link from 'next/link'


const newsItems = [
  {
    title: 'Coupure temporaire à Libreville',
    excerpt: 'Une maintenance du réseau entraînera une coupure d’eau temporaire ce samedi dans plusieurs quartiers.',
    date: '3 juin 2025',
    imageUrl: '/images3.jpeg',
    slug: 'coupure-temporaire-libreville',
  },
  {
    title: 'Nouvelle agence à Owendo',
    excerpt: 'La SEEG inaugure une nouvelle agence pour améliorer le service client dans la zone sud.',
    date: '27 mai 2025',
    imageUrl: '/images.jpeg',
    slug: 'nouvelle-agence-owendo',
  },
  {
    title: 'Campagne de sensibilisation à Port-Gentil',
    excerpt: 'La SEEG lance une campagne pour encourager les économies d’eau et d’électricité.',
    date: '20 mai 2025',
    imageUrl: '/image1.jpeg',
    slug: 'campagne-sensibilisation-port-gentil',
  },
  {
    title: 'Travaux sur le réseau électrique à Franceville',
    excerpt: 'Des interventions prévues entraîneront des coupures dans certains quartiers.',
    date: '15 mai 2025',
    imageUrl: '/image2.jpeg',
    slug: 'travaux-reseau-franceville',
  },
  {
    title: 'Nouveau portail client en ligne',
    excerpt: 'Découvrez notre nouvelle plateforme pour gérer vos abonnements et consulter vos factures.',
    date: '10 mai 2025',
    imageUrl: '/image3.jpeg',
    slug: 'nouveau-portail-client',
  },
  {
    title: 'Rapport environnemental 2024 publié',
    excerpt: 'La SEEG présente son engagement en matière de développement durable.',
    date: '5 mai 2025',
    imageUrl: '/image4.jpeg',
    slug: 'rapport-environnemental-2024',
  },
  {
    title: 'Journée mondiale de l’eau : nos actions',
    excerpt: 'À l’occasion de la Journée mondiale de l’eau, la SEEG organise plusieurs activités.',
    date: '22 mars 2025',
    imageUrl: '/image5.jpeg',
    slug: 'journee-mondiale-eau',
  },
]

export default function NewsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

useEffect(() => {
  const carousel = carouselRef.current;
  if (!carousel) return;

  const scrollStep = 1; // pixels à chaque tick
  const delay = 20;     // délai entre chaque tick en ms

  const interval = setInterval(() => {
    if (!isPaused) {
      const maxScroll = carousel.scrollWidth / 2; // recalcul dynamique

      // Si on dépasse la moitié, on revient au début
      if (carousel.scrollLeft >= maxScroll) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += scrollStep;
      }
    }
  }, delay);

  // Nettoyage à la fin (bonne pratique)
  return () => clearInterval(interval);
}, [isPaused]);



  const duplicatedItems = [...newsItems, ...newsItems]

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Actualités & Communiqués
        </h2>
        {/* Tiret décoratif */}
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-8 rounded-full" />

        {/* Carrousel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ scrollBehavior: 'smooth' }}
        >
          {duplicatedItems.map((item, idx) => (
            <Link
              key={idx}
              href={`/news/${item.slug}`}
              className="block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full min-w-[300px] max-w-xs"
            >
              <div className="relative h-40 w-full">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.excerpt}</p>
                <p className="text-xs text-gray-400">{item.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

  

