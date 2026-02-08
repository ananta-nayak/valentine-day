import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { LOCAL_VIDEO_PATH } from '../data/constants';

export default function MediaModal({ isOpen, onClose, title, videoPath: videoPathProp }) {
  const [videoSrc, setVideoSrc] = useState(() => videoPathProp || LOCAL_VIDEO_PATH);
  const [videoLoadFailed, setVideoLoadFailed] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    document.body.classList.add('overflow-hidden');
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setVideoLoadFailed(false);
      setVideoSrc(videoPathProp || LOCAL_VIDEO_PATH);
    }
  }, [isOpen, videoPathProp]);

  const handleVideoError = () => {
    if (videoSrc !== LOCAL_VIDEO_PATH) {
      setVideoSrc(LOCAL_VIDEO_PATH);
      setVideoLoadFailed(false);
    } else {
      setVideoLoadFailed(true);
    }
  };

  useEffect(() => {
    if (!isOpen || !videoRef.current) return;
    videoRef.current.load();
    const el = videoRef.current;
    const play = () => el.play().catch(() => {});
    el.addEventListener('loadeddata', play);
    return () => el.removeEventListener('loadeddata', play);
  }, [isOpen, videoSrc]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="rounded-2xl bg-romantic-deep border border-romantic-pink/30 shadow-2xl overflow-hidden w-full max-w-3xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
              <span className="text-white font-medium truncate">{title}</span>
              <button
                type="button"
                className="p-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                onClick={onClose}
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black/40">
                <video
                  ref={videoRef}
                  key={videoSrc}
                  src={videoSrc}
                  controls
                  playsInline
                  autoPlay
                  muted
                  preload="auto"
                  className="absolute inset-0 w-full h-full object-contain"
                  onError={handleVideoError}
                />
              </div>
              {videoLoadFailed && (
                <p className="mt-3 text-center text-sm text-romantic-rose">Add valentine.mp4 to public/video/ to play the video.</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
