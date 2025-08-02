import React, { useEffect, useRef } from 'react';
import backgroundMusic from '../assets/Majid Jordan - Violet.mp3';

function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Set up audio
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set volume to 30%
      audioRef.current.loop = true; // Loop the music
    }
  }, []);

  useEffect(() => {
    // Auto-play when user interacts with the page
    const startMusic = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(error => {
          console.log('Auto-play prevented:', error);
        });
      }
      document.removeEventListener('click', startMusic);
    };
    document.addEventListener('click', startMusic);
  }, []);

  return (
    <div style={{ display: 'none' }}>
      <audio 
        ref={audioRef}
        src={backgroundMusic}
        preload="auto"
      />
    </div>
  );
}

export default MusicPlayer; 