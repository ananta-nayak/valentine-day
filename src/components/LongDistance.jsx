import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Heart } from 'lucide-react';
import { LONG_DISTANCE } from '../data/constants';

const { me, her } = LONG_DISTANCE;

const ROMANTIC_SLIDES = [
  {
    quote: "The distance is just a test of how far love can travel. Subha, I'm counting every day until we're in the same city — until I can finally hold your hand in Ahmedabad or Bhubaneswar, or anywhere we choose to be together.",
    message: "Being your long-distance person isn't easy, but you make every wait worth it. I'm saving all my feelings for the day we finally meet. Until then, my heart stays with you in Bhubaneswar.",
  },
  {
    quote: "Every goodnight over the phone is a promise. Every 'I miss you' is a bridge. We're not just waiting, Subha — we're building something that distance can't break.",
    message: "I fall asleep imagining the day I wake up next to you. Same room, same sunrise. Until then, know that you're the first and last thought of my day.",
  },
  {
    quote: "They say absence makes the heart grow fonder. With you, my heart was already full — now it's just learning how much more it can hold until we meet.",
    message: "I keep a list of little things I want to do with you: share a chai, walk in the rain, sit in silence without missing a thing. You're already my home; meeting you will feel like coming back.",
  },
  {
    quote: "Ahmedabad to Bhubaneswar isn't just miles — it's every text we send, every call we save, every plan we make. We're already traveling toward each other, one day at a time.",
    message: "I don't know what our first meeting will look like. I just know I'll be the one who can't stop smiling. Save that first hug for me.",
  },
  {
    quote: "Long distance is hard. But you? You make it feel like the easiest choice I've ever made. I'd choose this wait over any shortcut that didn't lead to you.",
    message: "When we're finally in the same place, I'll tell you everything I couldn't say over the screen. Until then, every heart I send is a little piece of that conversation.",
  },
];

const total = ROMANTIC_SLIDES.length;

export default function LongDistance() {
  const [slide, setSlide] = useState(0);
  const trackRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const thumbRef = useRef(null);

  const updateSlideFromPosition = useCallback((clientX) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const index = Math.round(percent * (total - 1));
    setSlide(index);
  }, []);

  const handleTrackClick = (e) => {
    if (e.target.closest('[data-thumb]')) return;
    updateSlideFromPosition(e.clientX);
  };

  const handlePointerDown = (e) => {
    e.preventDefault();
    setDragging(true);
    thumbRef.current?.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = useCallback(
    (e) => {
      if (!dragging) return;
      updateSlideFromPosition(e.clientX);
    },
    [dragging, updateSlideFromPosition]
  );

  const handlePointerUp = useCallback((e) => {
    thumbRef.current?.releasePointerCapture?.(e.pointerId);
    setDragging(false);
  }, []);

  useEffect(() => {
    if (!dragging) return;
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [dragging, handlePointerMove, handlePointerUp]);

  return (
    <section className="section py-20 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-romantic-pink/15"
            style={{ left: `${10 + i * 8}%`, top: `${15 + (i % 4) * 22}%` }}
            animate={{
              y: [0, -18, 0],
              opacity: [0.12, 0.3, 0.12],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 4 + i * 0.25, repeat: Infinity, delay: i * 0.25 }}
          >
            <Heart className="w-6 h-6 md:w-8 md:h-8 fill-current" />
          </motion.div>
        ))}
      </motion.div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        <motion.h2
          className="font-script text-4xl md:text-5xl text-center text-gradient mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Miles Apart, Hearts Connected
        </motion.h2>
        <motion.p
          className="text-center text-white/75 text-sm md:text-base max-w-xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Long distance is hard — but you make every mile worth it.
        </motion.p>

        <motion.div
          className="glass-card rounded-2xl p-6 md:p-10 border border-white/10 glow-border"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          whileHover={{ boxShadow: '0 0 50px rgba(255,77,109,0.15)' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.06 }}
            >
              <motion.div
                className="mb-3 text-romantic-pink"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MapPin className="w-12 h-12" strokeWidth={1.5} />
              </motion.div>
              <span className="font-semibold text-xl text-white">{me.city}</span>
              <span className="text-white/80 text-sm">{me.country}</span>
              <span className="mt-2 text-romantic-rose font-medium">{me.name}</span>
            </motion.div>

            <div className="flex-1 flex flex-col items-center gap-4 min-w-[220px]">
              <motion.div
                animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-10 h-10 text-romantic-pink fill-romantic-pink" />
              </motion.div>
              <div
                ref={trackRef}
                role="slider"
                aria-label="Change message"
                aria-valuenow={slide}
                aria-valuemin={0}
                aria-valuemax={total - 1}
                tabIndex={0}
                className="w-full relative h-3 rounded-full bg-gradient-to-r from-romantic-pink via-romantic-rose to-romantic-violet cursor-pointer select-none overflow-visible"
                onClick={handleTrackClick}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowLeft') setSlide((s) => Math.max(0, s - 1));
                  if (e.key === 'ArrowRight') setSlide((s) => Math.min(total - 1, s + 1));
                }}
                initial={{ opacity: 0, scaleX: 0.8 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ transformOrigin: 'center' }}
              >
                <motion.div
                  ref={thumbRef}
                  data-thumb
                  className="absolute flex items-center justify-center cursor-grab active:cursor-grabbing touch-none pointer-events-auto"
                  style={{
                    left: `${total > 1 ? (slide / (total - 1)) * 100 : 50}%`,
                    transform: 'translate(-50%, -50%)',
                    top: '50%',
                    width: 32,
                    height: 32,
                  }}
                  animate={{ scale: dragging ? 1.2 : 1 }}
                  onPointerDown={handlePointerDown}
                >
                  <Heart
                    className="w-8 h-8 text-romantic-pink fill-white drop-shadow-md"
                    strokeWidth={2}
                    stroke="currentColor"
                  />
                </motion.div>
              </div>
              <motion.p
                className="text-xs text-white/55 font-serif italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                Same country, one heart — slide to change
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.06 }}
            >
              <motion.div
                className="mb-3 text-romantic-rose"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <MapPin className="w-12 h-12" strokeWidth={1.5} />
              </motion.div>
              <span className="font-semibold text-xl text-white">{her.city}</span>
              <span className="text-white/80 text-sm">{her.country}</span>
              <span className="mt-2 text-romantic-rose font-medium">{her.name}</span>
            </motion.div>
          </div>

          <div className="mt-8 min-h-[140px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="text-center max-w-2xl mx-auto"
              >
                <p className="font-serif text-white/88 italic text-base md:text-lg leading-relaxed">
                  "{ROMANTIC_SLIDES[slide].quote}"
                </p>
                <p className="text-white/70 text-sm md:text-base mt-4">
                  {ROMANTIC_SLIDES[slide].message}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
