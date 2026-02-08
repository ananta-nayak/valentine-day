import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { HER_NAME, MY_NAME } from '../data/constants';

const HEARTS = 32;

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden hero-bg">
      {[...Array(HEARTS)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none text-romantic-pink/25"
          style={{
            left: `${(i * 6.5) % 100}%`,
            top: `${(i * 9) % 100}%`,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.25, 0.7, 0.25],
            scale: [1, 1.15, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 3.5 + (i % 4) * 0.5,
            repeat: Infinity,
            delay: i * 0.15,
          }}
        >
          <Heart className="w-4 h-4 md:w-6 md:h-6 fill-current" />
        </motion.div>
      ))}

      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`s-${i}`}
          className="absolute pointer-events-none text-romantic-gold/20"
          style={{ left: `${(i * 8) % 100}%`, top: `${(i * 7 + 20) % 100}%` }}
          animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.2, 1] }}
          transition={{ duration: 2.5 + i * 0.2, repeat: Infinity, delay: i * 0.1 }}
        >
          <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
        </motion.div>
      ))}

      <motion.div
        className="relative z-10 text-center px-4 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <img src={encodeURI('/images/Glossy red heart on checkered background.png')} alt="" className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-[0_0_24px_rgba(255,77,109,0.5)]" aria-hidden />
        </motion.div>
        <motion.p
          className="font-serif text-sm md:text-base text-romantic-rose/90 tracking-[0.2em] uppercase mb-3"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          For {HER_NAME} — with love from {MY_NAME}
        </motion.p>
        <motion.h1
          className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-4"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.85 }}
        >
          Every love story is beautiful,
          <br />
          <span className="text-gradient">but ours is my favorite</span>
          <span className="inline-block ml-1 animate-pulse">❤️</span>
        </motion.h1>
        <motion.p
          className="font-serif text-lg md:text-xl text-white/88 italic max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          You're the line of code I never want to delete — the one that makes everything else make sense, {HER_NAME.split(' ')[0]}.
        </motion.p>
        <motion.p
          className="mt-5 font-serif text-base text-white/65 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.7 }}
        >
          Long distance isn't easy, but you make every day worth the wait. This is our story — in pixels and feelings.
        </motion.p>
        <motion.p
          className="mt-6 font-serif text-sm md:text-base text-white/55"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.6 }}
        >
          Scroll to live our story.
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
      >
        <span className="text-sm text-white/50 tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-6 h-9 rounded-xl border-2 border-white/25 flex justify-center pt-2"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-2 rounded-sm bg-romantic-pink"
            animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
