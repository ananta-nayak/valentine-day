import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { CREATOR_NAME } from '../data/constants';

export default function Footer() {
  return (
    <footer className="py-12 px-4 text-center border-t border-white/10">
      <motion.p
        className="text-white/70 text-sm md:text-base inline-flex items-center gap-1.5"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        Made with infinite love
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          <Heart className="w-4 h-4 text-romantic-pink fill-romantic-pink inline-block" />
        </motion.span>
        by {CREATOR_NAME}
      </motion.p>
    </footer>
  );
}
