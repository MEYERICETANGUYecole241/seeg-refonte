'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const bgImages = [
    '/img1.webp',
    '/img2.jpeg',
    '/img7.jpeg',
    '/img3.jpeg',
    '/img5.jpg',
    '/SEEG1.jpg',
    '/img8.jpg',
    '/im9.jpeg',
    '/SEEG_logo.jpg', // Nom corrigé
    '/compteur-seeg.webp',
    '/images1.jpeg',
    '/images2.jpeg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [bgImages.length]);

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative h-screen overflow-hidden font-sans">
      {/* FOND DYNAMIQUE */}
      <div className="absolute inset-0">
        {bgImages.map((src, index) => (
          <motion.div
            key={src}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={src}
              alt={`Image SEEG ${index + 1}`}
              fill
              className="object-cover"
              priority={index === currentIndex}
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* CONTENU PRINCIPAL */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04 } },
          }}
          className="group text-white text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg relative"
        >
          {'Société d’Énergie et d’Eau du Gabon'.split('').map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 group-hover:animate-shimmer pointer-events-none" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-white text-base sm:text-lg lg:text-xl max-w-2xl mb-8 drop-shadow-md"
        >
          Fournir une énergie fiable et une eau potable de qualité au service du développement durable du Gabon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            asChild
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 text-sm sm:text-base font-semibold rounded-lg shadow-lg transition-all duration-200"
          >
            <Link href="#about">Découvrir la SEEG</Link>
          </Button>
          <Button
            asChild
            className="bg-transparent border border-white hover:bg-white hover:text-green-700 text-white px-6 py-3 text-sm sm:text-base font-semibold rounded-lg shadow-lg transition-all duration-200"
          >
            <Link href="#engagements">Nos engagements</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
