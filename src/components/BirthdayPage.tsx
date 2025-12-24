import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Music } from 'lucide-react';
import InteractiveCake from './InteractiveCake';
import SuratCinta from './SuratCinta';

const BirthdayPage = () => {
  const [candlesLit, setCandlesLit] = useState(true);
  const [showLetter, setShowLetter] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Preload audio from Cloudinary
    const birthdayMusic = new Audio('https://res.cloudinary.com/dwfz1iaay/video/upload/v1766618366/happy-birthday-368842_nnzm8n.mp3');
    birthdayMusic.loop = true;
    birthdayMusic.preload = 'auto'; // Preload untuk smooth playback
    setAudio(birthdayMusic);

    // Auto-play music saat halaman muncul
    birthdayMusic.play()
      .then(() => {
        setIsMusicPlaying(true);
      })
      .catch(err => {
        // Browser mungkin block autoplay, user perlu interact dulu
        console.log('Autoplay blocked, user needs to interact first:', err);
      });

    return () => {
      if (birthdayMusic) {
        birthdayMusic.pause();
        birthdayMusic.src = '';
      }
    };
  }, []);

  const handleBlowCandles = () => {
    // Play blow sound effect
    const blowSound = new Audio('/assets/blow-sound.mp3');
    blowSound.play().catch(err => console.log('Sound effect not found:', err));

    // Turn off candles
    setCandlesLit(false);

    // Trigger confetti
    triggerConfetti();

    // Play birthday music
    if (audio && !isMusicPlaying) {
      audio.play().catch(err => console.log('Music not found:', err));
      setIsMusicPlaying(true);
    }

    // Show letter after a short delay
    setTimeout(() => {
      setShowLetter(true);
    }, 2000);
  };

  const triggerConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { 
      startVelocity: 30, 
      spread: 360, 
      ticks: 60, 
      zIndex: 0,
      colors: ['#FFB6C1', '#FF69B4', '#FF1493', '#C71585', '#FFC0CB', '#FFE4E1']
    };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      // Confetti from left
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      
      // Confetti from right
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  const toggleMusic = () => {
    if (!audio) return;

    if (isMusicPlaying) {
      audio.pause();
      setIsMusicPlaying(false);
    } else {
      audio.play().catch(err => console.log('Music not found:', err));
      setIsMusicPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-pink-100 overflow-x-hidden">
      {/* Music toggle button */}
      <motion.button
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Music 
          className={`w-6 h-6 ${isMusicPlaying ? 'text-pink-600' : 'text-gray-400'}`}
        />
      </motion.button>

      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => {
          const emojis = ['🎈', '🎉', '🎊', '💕', '🌸', '✨'];
          const startX = (i * window.innerWidth) / 12;
          return (
            <motion.div
              key={i}
              className="absolute text-4xl opacity-20"
              style={{ left: startX, top: window.innerHeight + 100 }}
              animate={{
                y: [-100, -window.innerHeight - 100],
                rotate: 360,
              }}
              transition={{
                duration: 18 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear",
              }}
            >
              {emojis[i % emojis.length]}
            </motion.div>
          );
        })}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-20 h-20 text-pink-500 mx-auto" />
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 font-quicksand mb-4"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            Selamat Ulang Tahun!
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl text-pink-600 font-poppins font-semibold"
          >
            Enjelly Tersayang! 🎂💕
          </motion.p>
        </motion.div>

        {/* Cake section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16"
        >
          <InteractiveCake 
            candlesLit={candlesLit} 
            onBlowCandles={handleBlowCandles}
          />
        </motion.div>

        {/* Birthday message before letter */}
        {!candlesLit && !showLetter && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <p className="text-2xl text-pink-600 font-poppins font-medium">
              Tunggu sebentar ya, ada kejutan spesial nih... ✨
            </p>
          </motion.div>
        )}

        {/* Letter section */}
        {showLetter && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <SuratCinta />
          </motion.div>
        )}

        {/* Footer message */}
        {showLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-center mt-16 pb-8"
          >
            <p className="text-pink-500 font-quicksand text-lg italic">
              Made with 💕 especially for you, Cibey~
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BirthdayPage;
