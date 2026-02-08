import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { HER_NAME } from '../data/constants';

const CONFETTI_COUNT = 80;

export default function Proposal({ onAccept }) {
  const [accepted, setAccepted] = useState(false);
  const [declined, setDeclined] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const handleYes = () => {
    setAccepted(true);
    setDeclined(false);
    onAccept?.();
  };

  const handleNoClick = () => {
    setDeclined(true);
  };

  const handleNoHover = () => {
    setNoPosition({
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
    });
  };

  const handleTryAgain = () => {
    setDeclined(false);
    setNoPosition({ x: 0, y: 0 });
  };

  return (
    <section className="section py-6 relative min-h-screen flex flex-col justify-center">
      <div className="absolute inset-0 bg-romantic-black/92" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(28)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-romantic-pink/25"
            style={{ left: `${(i * 3.8) % 100}%` }}
            initial={{ y: '100vh', rotate: 0 }}
            animate={{ y: '-20vh', rotate: 360 }}
            transition={{
              duration: 11 + (i % 5) * 2,
              repeat: Infinity,
              delay: i * 0.35,
            }}
          >
            <Heart className="w-4 h-4 md:w-6 md:h-6 fill-current" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 text-center">
        <AnimatePresence mode="wait">
          {declined ? (
            <motion.div
              key="sad"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="py-4"
            >
              <p className="text-4xl mb-3">😢</p>
              <h2 className="font-script text-3xl md:text-4xl text-white/90 mb-3">
                My heart is a little broken…
              </h2>
              <p className="font-serif text-white/75 text-lg mb-4 max-w-md mx-auto">
                I'll still be here, {HER_NAME.split(' ')[0]}. Whatever you choose, you mean the world to me. Distance and all.
              </p>
              <p className="text-white/60 text-sm mb-5">
                If you change your mind, I'm just one click away.
              </p>
              <motion.button
                type="button"
                className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white/90 hover:bg-white/15 transition-colors"
                onClick={handleTryAgain}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Try again — say Yes ❤️
              </motion.button>
            </motion.div>
          ) : !accepted ? (
            <motion.div
              key="ask"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 120, damping: 22 }}
            >
              <motion.h2
                className="font-script text-4xl sm:text-5xl md:text-6xl text-gradient mb-4"
                animate={{ textShadow: ['0 0 20px rgba(255,77,109,0.3)', '0 0 40px rgba(255,77,109,0.5)', '0 0 20px rgba(255,77,109,0.3)'] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Will You Be Mine Forever?
              </motion.h2>
              <motion.p className="text-2xl mb-2" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                💍❤️
              </motion.p>
              <motion.p
                className="font-serif text-white/85 text-lg mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Distance is just a number when two hearts are connected. I want to be your constant, {HER_NAME.split(' ')[0]} — today and always.
              </motion.p>
              <motion.p
                className="text-white/70 text-sm md:text-base mb-5 max-w-md mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                From Ahmedabad to Bhubaneswar, my heart only points to you.
              </motion.p>
              <div className="flex flex-wrap gap-3 justify-center items-center">
                <motion.button
                  type="button"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-romantic-pink to-romantic-violet text-white font-semibold text-lg shadow-lg shadow-romantic-pink/40"
                  onClick={handleYes}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    boxShadow: [
                      '0 0 25px rgba(255,77,109,0.5)',
                      '0 0 50px rgba(255,77,109,0.7)',
                      '0 0 25px rgba(255,77,109,0.5)',
                    ],
                  }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                >
                  YES ❤️
                </motion.button>
                <motion.button
                  type="button"
                  className="px-6 py-3 rounded-full border border-white/20 bg-white/5 text-white/80"
                  style={{ position: 'relative', left: noPosition.x, top: noPosition.y }}
                  onMouseEnter={handleNoHover}
                  onTouchStart={handleNoHover}
                  onClick={handleNoClick}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 0.98 }}
                >
                  NO 😢
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="yes"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 140, damping: 22 }}
              className="relative"
            >
              {[...Array(CONFETTI_COUNT)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-romantic-pink"
                  style={{ left: '50%', top: '50%' }}
                  initial={{ x: 0, y: 0, scale: 0, rotate: 0 }}
                  animate={{
                    x: (Math.random() - 0.5) * 900,
                    y: (Math.random() - 0.5) * 700,
                    scale: [0, 1.3, 1],
                    rotate: Math.random() * 720 - 360,
                    opacity: [1, 1, 0],
                  }}
                  transition={{ duration: 2.8, delay: i * 0.018 }}
                >
                  <Heart className="w-4 h-4 md:w-6 md:h-6 fill-current" />
                </motion.div>
              ))}
              <motion.h2
                className="font-script text-4xl md:text-5xl text-gradient mt-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                I Knew It ❤️
              </motion.h2>
              <motion.p
                className="text-xl md:text-2xl font-medium text-white mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                You are my today, my tomorrow, and my forever, {HER_NAME.split(' ')[0]} 💖
              </motion.p>
              <motion.p
                className="mt-2 text-white/80 text-sm md:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Can't wait to see you. Save your first hug for me.
              </motion.p>
              <motion.div
                className="mt-5 flex justify-center"
                animate={{ rotate: [0, 12, -12, 0], scale: [1, 1.12, 1] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
              >
                <Heart className="w-16 h-16 text-romantic-pink fill-romantic-pink drop-shadow-[0_0_24px_rgba(255,77,109,0.6)]" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
