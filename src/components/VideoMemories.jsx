import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { MEMORY_VIDEO_PATH, HER_NAME } from '../data/constants';

export default function VideoMemories({ onOpenVideo }) {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="section py-20 relative">
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-romantic-pink/20"
            style={{ left: `${20 + i * 15}%`, top: `${30 + (i % 3) * 20}%` }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </motion.div>
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        <motion.h2
          className="font-script text-4xl md:text-5xl text-center text-gradient mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Moments I Replay in My Heart
        </motion.h2>
        <motion.p
          className="text-center text-romantic-rose/90 text-lg mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🎥❤️
        </motion.p>

        <motion.div
          className="relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 glow-border p-2 md:p-3 cursor-pointer select-none"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          whileHover={{ boxShadow: '0 0 60px rgba(255,77,109,0.2)' }}
          onClick={() => onOpenVideo?.()}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onOpenVideo?.()}
        >
          {videoError ? (
            <div className="aspect-video rounded-xl bg-black/60 flex flex-col items-center justify-center gap-2 p-6">
              <p className="text-romantic-rose text-center text-sm">Video not found. Add memory.mp4 to public/video/</p>
              <p className="text-white/60 text-xs">See DOWNLOAD-LIST.md for details.</p>
            </div>
          ) : (
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black/60 group">
              <video
                src={MEMORY_VIDEO_PATH}
                className="w-full h-full object-contain"
                preload="auto"
                onError={() => setVideoError(true)}
              />
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors"
                aria-hidden
              >
                <span className="rounded-full bg-romantic-pink/90 p-4 text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-current" />
                </span>
              </div>
              <p className="absolute bottom-2 left-0 right-0 text-center text-white/90 text-xs font-medium md:hidden">
                Tap to play
              </p>
            </div>
          )}
          <motion.p
            className="mt-4 text-center font-serif text-white/80 italic text-base md:text-lg px-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Every replay feels like the first time, {HER_NAME.split(' ')[0]} — your smile, your voice, the way you say my name. I keep these moments close until we make new ones together.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
