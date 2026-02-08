import { useState, useCallback } from 'react';
import NetworkBackground from './components/NetworkBackground';
import HeartRain from './components/HeartRain';
import Hero from './components/Hero';
import LongDistance from './components/LongDistance';
import ValentineWeek from './components/ValentineWeek';
import VideoMemories from './components/VideoMemories';
import LoveMemory3D from './components/LoveMemory3D';
import LoveLetter from './components/LoveLetter';
import Proposal from './components/Proposal';
import SurpriseVideo from './components/SurpriseVideo';
import FinalMessage from './components/FinalMessage';
import Footer from './components/Footer';
import MediaModal from './components/MediaModal';
import { YES_FOREVER_SONG, VIDEO_MODAL_TITLE, DAY_VIDEOS, LOCAL_VIDEO_BASE, LOCAL_VIDEO_PATH, MEMORY_VIDEO_PATH } from './data/constants';

export default function App() {
  const [mediaModal, setMediaModal] = useState({ open: false, title: '', videoPath: null });
  const [proposalAccepted, setProposalAccepted] = useState(false);

  const openMedia = useCallback((_videoId, title, _mode, dayIndex) => {
    const videoPath = typeof dayIndex === 'number' && DAY_VIDEOS[dayIndex]
      ? `${LOCAL_VIDEO_BASE}${DAY_VIDEOS[dayIndex]}.mp4`
      : LOCAL_VIDEO_PATH;
    setMediaModal({ open: true, title, videoPath });
  }, []);

  const closeMedia = useCallback(() => {
    setMediaModal((m) => ({ ...m, open: false }));
  }, []);

  const handleAccept = useCallback(() => {
    setProposalAccepted(true);
    setMediaModal({ open: true, title: YES_FOREVER_SONG.title, videoPath: LOCAL_VIDEO_PATH });
  }, []);

  const openVideoPopup = useCallback(() => {
    setMediaModal({ open: true, title: VIDEO_MODAL_TITLE, videoPath: MEMORY_VIDEO_PATH });
  }, []);

  return (
    <div className="min-h-screen bg-romantic-black snap-y snap-mandatory overflow-y-auto overflow-x-hidden relative">
      <NetworkBackground />
      <HeartRain />
      <div className="relative z-10">
        <Hero />
        <LongDistance />
        <ValentineWeek onPlaySong={openMedia} />
      <VideoMemories onOpenVideo={openVideoPopup} />
      <LoveMemory3D />
      <LoveLetter />
      <Proposal onAccept={handleAccept} />
      {proposalAccepted && <SurpriseVideo />}
      <FinalMessage />
        <Footer />
      </div>

      <MediaModal
        isOpen={mediaModal.open}
        onClose={closeMedia}
        title={mediaModal.title}
        videoPath={mediaModal.videoPath}
      />
    </div>
  );
}
