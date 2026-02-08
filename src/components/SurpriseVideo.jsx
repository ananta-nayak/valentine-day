import { useState } from 'react';
import { motion } from 'framer-motion';
import { SURPRISE_VIDEO_PATH, HER_NAME } from '../data/constants';

export default function SurpriseVideo() {
  const [videoError, setVideoError] = useState(false);
  return (
    <motion.section
      className="section py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="w-full max-w-4xl mx-auto px-4">
        <motion.h2
          className="font-script text-3xl md:text-4xl text-center text-gradient mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          For You, {HER_NAME.split(' ')[0]}
        </motion.h2>
        <motion.p
          className="text-center font-serif text-white/80 italic text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          This is everything I never say out loud…
        </motion.p>
        <motion.div
          className="rounded-2xl overflow-hidden bg-black/40 backdrop-blur border border-white/10 shadow-[0_0_60px_rgba(255,77,109,0.15)]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, type: 'spring', stiffness: 100 }}
          whileHover={{ boxShadow: '0 0 80px rgba(255,77,109,0.25)' }}
        >
          {videoError ? (
            <div className="aspect-video flex flex-col items-center justify-center gap-2 p-6 bg-black/60">
              <p className="text-romantic-rose text-center text-sm">Video not found. Add valentine.mp4 to public/video/</p>
              <p className="text-white/60 text-xs">See DOWNLOAD-LIST.md for details.</p>
            </div>
          ) : (
            <video
              src={SURPRISE_VIDEO_PATH}
              className="w-full aspect-video object-contain"
              controls
              playsInline
              preload="metadata"
              poster="/images/placeholder.svg"
              onError={() => setVideoError(true)}
            />
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
