import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_IMAGES, HER_NAME } from '../data/constants';

const RAD = Math.PI / 180;
const ARC_DEG = 50;
const RADIUS = 380;
const CARD_WIDTH = 240;
const CARD_HEIGHT = 300;
const SLIDER_MIN_HEIGHT = 620;
const SWIPE_THRESHOLD = 50;

export default function LoveMemory3D() {
  const [center, setCenter] = useState(0);
  const [isNarrow, setIsNarrow] = useState(typeof window !== 'undefined' && window.innerWidth < 768);
  const touchStartX = useRef(0);

  useEffect(() => {
    const onResize = () => setIsNarrow(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const radius = isNarrow ? RADIUS * 0.7 : RADIUS;
  const cardW = isNarrow ? 160 : CARD_WIDTH;
  const cardH = isNarrow ? 200 : CARD_HEIGHT;
  const total = GALLERY_IMAGES.length;

  const goNext = useCallback(() => setCenter((c) => (c + 1) % total), [total]);
  const goPrev = useCallback(() => setCenter((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    const id = setInterval(() => {
      setCenter((c) => (c + 1) % total);
    }, 3500);
    return () => clearInterval(id);
  }, [total]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) >= SWIPE_THRESHOLD) {
      delta > 0 ? goNext() : goPrev();
    }
  };

  const handleCardClick = (index) => {
    if ((index - center + total) % total === 0) return;
    setCenter(index);
  };

  return (
    <section className="section py-20 min-h-[85vh] flex flex-col justify-center">
      <div className="w-full max-w-4xl mx-auto px-4">
        <motion.h2
          className="font-script text-4xl md:text-5xl text-center text-gradient mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Memories
        </motion.h2>
        <motion.p
          className="text-center text-white/75 text-sm md:text-base max-w-xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Some we've made already, {HER_NAME.split(' ')[0]} — so many more we'll make when we finally meet.
        </motion.p>

        <motion.div
          className="relative w-full flex justify-center items-center"
          style={{ minHeight: isNarrow ? 480 : SLIDER_MIN_HEIGHT }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div
            className="relative w-full max-w-2xl mx-auto select-none touch-pan-y"
            style={{ perspective: '1200px', height: radius * 1.15, touchAction: 'pan-y' }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="absolute inset-0 flex justify-center items-center">
              <AnimatePresence initial={false}>
                {GALLERY_IMAGES.map((src, i) => {
                  const offset = i - center;
                  const angle = offset * ARC_DEG * RAD;
                  const x = Math.sin(angle) * radius;
                  const z = Math.cos(angle) * radius - radius;
                  const rotateY = -offset * ARC_DEG;
                  const scale = offset === 0 ? 1 : 0.75;
                  const opacity = Math.abs(offset) > 2 ? 0.1 : 0.3 + (1 - Math.abs(offset) * 0.22);
                  const zIndex = Math.round(100 - Math.abs(offset) * 12);
                  const isActive = offset === 0;

                  return (
                    <motion.div
                      key={i}
                      role="button"
                      tabIndex={0}
                      className="absolute rounded-2xl overflow-hidden border-2 border-white/25 shadow-2xl cursor-pointer"
                      onClick={() => handleCardClick(i)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleCardClick(i);
                        }
                      }}
                      style={{
                        width: cardW,
                        height: cardH,
                        zIndex,
                        transformStyle: 'preserve-3d',
                        perspective: 1200,
                        left: '50%',
                        top: '50%',
                        marginLeft: -cardW / 2,
                        marginTop: -cardH / 2,
                        boxShadow: isActive ? '0 0 40px rgba(255,77,109,0.35), 0 25px 50px rgba(0,0,0,0.3)' : undefined,
                      }}
                      initial={false}
                      animate={{
                        x,
                        rotateY,
                        scale,
                        opacity,
                        z,
                      }}
                      transition={{ type: 'spring', stiffness: 100, damping: 22 }}
                      whileHover={isActive ? { scale: 1.04, z: z + 25 } : undefined}
                    >
                      <img
                        src={src}
                        alt={`Memory ${i + 1}`}
                        className="w-full h-full object-cover object-top"
                      />
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 py-2 text-center text-sm font-medium text-white bg-gradient-to-t from-black/80 to-transparent"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          Memory {i + 1}
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
