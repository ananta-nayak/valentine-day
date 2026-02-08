import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { HER_NAME, MY_NAME } from '../data/constants';

const PARAGRAPHS = [
  `There are days when the distance feels like a weight on my chest, ${HER_NAME.split(' ')[0]}. I wake up and reach for my phone just to see your name, to read your messages again, to hear your voice in the clips I've saved. You're the first thought in the morning and the last at night.`,
  "I don't know when we'll finally be in the same room — when I can hold your hand, look into your eyes, and say everything I've been holding back. But I know that I'm willing to wait. Every day without you is a day I'm counting down. You're worth every mile between Ahmedabad and Bhubaneswar.",
  `I promise you this: when we meet, I won't waste a second. I'll tell you how much you mean to me, not in texts or calls, but face to face. I'll choose you every single day after that, the same way I'm choosing you now, from miles away. This is ${MY_NAME} promising ${HER_NAME} — forever.`,
  "Some people say long distance doesn't work. We're not some people. We're the ones who make it work because what we have is real. Every goodnight, every voice note, every 'I miss you' — they're all building toward the day we don't have to say goodbye through a screen.",
  "I keep a list of things I want to do with you when we're finally in the same place. Small things: share a coffee, walk in the rain, sit in silence without it feeling like something's missing. You've already made my life full, Subha. Meeting you will make it complete.",
];

export default function LoveLetter() {
  return (
    <section className="section py-20 relative overflow-hidden">
      {[...Array(16)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none text-romantic-pink/15"
          style={{ left: `${(i * 6.5) % 100}%`, top: `${(i * 6) % 100}%` }}
          animate={{
            y: [0, -22, 0],
            opacity: [0.15, 0.45, 0.15],
            rotate: [0, 15, -15, 0],
          }}
          transition={{ duration: 5 + i * 0.25, repeat: Infinity, delay: i * 0.18 }}
        >
          <Heart className="w-5 h-5 md:w-7 md:h-7 fill-current" />
        </motion.div>
      ))}

      <div className="relative z-10 w-full max-w-2xl mx-auto px-4">
        <motion.h2
          className="font-script text-4xl md:text-5xl text-center text-gradient mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          A Letter for You
        </motion.h2>
        <motion.p
          className="text-center text-white/60 text-sm mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {HER_NAME}, these are the words I don't say enough.
        </motion.p>

        <motion.div
          className="glass-card rounded-2xl p-6 md:p-10 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {PARAGRAPHS.map((text, i) => (
            <motion.p
              key={i}
              className="font-serif text-lg md:text-xl text-white/90 leading-relaxed mb-6 last:mb-0"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
