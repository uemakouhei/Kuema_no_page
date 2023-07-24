import { Pause, PlayArrow } from '@mui/icons-material';
import React, { useRef, useState } from 'react';

const AudioPlayer: React.FC<{ src: string }> = ({ src }) => {
    const [play , setplay] = useState<Boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setplay(true);
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setplay(false);
    }
  };

  return (
    <div>
      <audio  ref={audioRef} >
      <source src={src} type="audio/mpeg" />
      </audio>
      {!play ? (   <button onClick={handlePlay}><PlayArrow /></button>) : (
           <button onClick={handlePause}><Pause /></button>
      )}
     </div>
  );
};

export default AudioPlayer;
