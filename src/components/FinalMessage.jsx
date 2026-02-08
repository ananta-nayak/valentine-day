import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { HER_NAME } from '../data/constants';

export default function FinalMessage() {
  return (
    <section className="section py-20 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="text-romantic-pink/10 w-64 h-64 md:w-96 md:h-96"
          animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Heart className="w-full h-full fill-current" />
        </motion.div>
      </div>
      <motion.div
        className="relative z-10 max-w-2xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <motion.p
          className="font-serif text-2xl md:text-3xl lg:text-4xl text-white/95 italic leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          "If I had a choice again, I'd still choose you, {HER_NAME.split(' ')[0]} — every single time."
        </motion.p>
        <motion.p
          className="mt-6 text-white/60 text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          — With all my love, always
        </motion.p>
      </motion.div>
    </section>
  );
}
