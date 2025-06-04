'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulation d’envoi (à remplacer par une vraie requête)
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 px-4 bg-white text-gray-800 max-w-3xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6 text-center text-blue-700"
      >
        Contactez la SEEG
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Nom complet
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Ex. : Jean Mboumba"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Adresse e-mail
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Ex. : jean.mboumba@email.com"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Votre message..."
            value={form.message}
            onChange={handleChange}
          />
        </div>

        <Button
          type="submit"
          disabled={status === 'sending'}
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg"
        >
          {status === 'sending' ? 'Envoi en cours...' : 'Envoyer'}
        </Button>

        {status === 'sent' && (
          <p className="text-blue-600 mt-4 font-medium text-sm">
            Votre message a été envoyé avec succès !
          </p>
        )}
      </motion.form>
    </section>
  );
}
