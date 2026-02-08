import { motion } from 'framer-motion';
import { Heart, Gift, Smile, Lock, Play, Flower2, HeartHandshake, Sparkles } from 'lucide-react';
import { VALENTINE_DAYS } from '../data/constants';

const ICON_MAP = {
  rose: Flower2,
  heart: Heart,
  chocolate: Gift,
  teddy: Smile,
  lock: Lock,
  hug: HeartHandshake,
  kiss: Sparkles,
  valentine: Heart,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

export default function ValentineWeek({ onPlaySong }) {
  return (
    <section className="section py-20 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4">
        <motion.h2
          className="font-script text-4xl md:text-5xl text-center text-gradient mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Valentine Week
        </motion.h2>
        <motion.p
          className="text-center text-white/70 text-sm md:text-base max-w-xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          One video for each day — for you, Subha.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {VALENTINE_DAYS.map((dayItem, i) => {
            const Icon = ICON_MAP[dayItem.icon] || Heart;
            const isValentineDay = dayItem.icon === 'valentine';
            return (
              <motion.div
                key={dayItem.day}
                variants={item}
                role="button"
                tabIndex={0}
                className="glass-card glow-border rounded-2xl p-5 md:p-6 text-left cursor-pointer border-t-2 border-t-romantic-pink/50 relative overflow-hidden"
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  boxShadow: '0 0 50px rgba(255,77,109,0.3), 0 20px 40px rgba(0,0,0,0.2)',
                  transition: { duration: 0.3 },
                }}
                onClick={() => onPlaySong?.(null, dayItem.day, null, i)}
                onKeyDown={(e) => e.key === 'Enter' && onPlaySong?.(null, dayItem.day, null, i)}
              >
                <motion.div
                  className="absolute inset-0 border border-romantic-pink/20 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="flex justify-center mb-3 text-romantic-rose relative z-10"
                  whileHover={{ rotate: [0, -12, 12, 0], transition: { duration: 0.5 } }}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2.5 + i * 0.2, repeat: Infinity, delay: i * 0.1 }}
                >
                  <Icon
                    className="w-8 h-8"
                    strokeWidth={isValentineDay ? 1 : 1.5}
                    fill={isValentineDay ? 'currentColor' : 'none'}
                  />
                </motion.div>
                <h3 className="font-semibold text-lg text-white mb-2 relative z-10">{dayItem.day}</h3>
                <p className="text-sm text-white/85 leading-relaxed line-clamp-5 mb-4 relative z-10">{dayItem.message}</p>
                <motion.span
                  className="inline-flex items-center gap-2 text-sm text-romantic-rose relative z-10"
                  whileHover={{ x: 4 }}
                >
                  <Play className="w-4 h-4" />
                  Watch Video
                </motion.span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
