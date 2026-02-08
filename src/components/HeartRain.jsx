import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const HEART_COUNT = 40;

export default function HeartRain() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {[...Array(HEART_COUNT)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-romantic-pink"
          style={{
            left: `${(i * 7 + (i % 5) * 11) % 100}%`,
            top: '-5%',
            fontSize: 10 + (i % 5) * 6,
          }}
          animate={{
            y: ['0vh', '105vh'],
            rotate: [0, 180, 360],
            opacity: [0.4, 0.8, 0.3],
          }}
          transition={{
            duration: 8 + (i % 4) * 3,
            repeat: Infinity,
            delay: (i * 0.4) % 12,
          }}
        >
          <Heart className="w-4 h-4 md:w-5 md:h-5 fill-current" style={{ opacity: 0.6 + (i % 3) * 0.15 }} />
        </motion.div>
      ))}
    </div>
  );
}
