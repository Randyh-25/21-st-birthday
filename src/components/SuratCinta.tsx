import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import messageData from '../data/message.json';

interface Message {
  from: string;
  to: string;
  title: string;
  messages: string[];
}

const SuratCinta = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [allMessages, setAllMessages] = useState<string>('');
  
  const message: Message = messageData;

  useEffect(() => {
    if (isOpen) {
      // Combine all messages with proper spacing
      const combined = message.messages.join('\n\n');
      setAllMessages(combined);
    }
  }, [isOpen]);

  const { displayedText, isComplete } = useTypewriter(allMessages, 30);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          // Closed Envelope
          <motion.div
            key="envelope"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            className="relative cursor-pointer"
            onClick={handleOpenEnvelope}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0] }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              {/* Envelope body */}
              <div className="w-64 h-40 bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg shadow-2xl relative overflow-hidden border-4 border-pink-400">
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(20)].map((_, i) => (
                    <Heart
                      key={i}
                      className="absolute text-pink-500"
                      style={{
                        left: `${(i % 5) * 20}%`,
                        top: `${Math.floor(i / 5) * 25}%`,
                        width: '20px',
                        height: '20px',
                      }}
                    />
                  ))}
                </div>

                {/* Envelope flap (closed) */}
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-br from-pink-300 to-pink-400 transform origin-top"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  }}
                />

                {/* Mail icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Mail className="w-16 h-16 text-white drop-shadow-lg" />
                </div>
              </div>

              {/* Floating sparkles */}
              <motion.div
                className="absolute -top-4 -right-4 text-4xl"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                ✨
              </motion.div>
            </motion.div>

            {/* Click instruction */}
            <motion.p
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="text-pink-600 font-poppins font-medium mt-6 text-center"
            >
              Klik untuk membuka surat cintanya! 💌
            </motion.p>
          </motion.div>
        ) : (
          // Opened Letter
          <motion.div
            key="letter"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="w-full"
          >
            {/* Opened envelope animation */}
            <motion.div
              initial={{ rotateX: 0 }}
              animate={{ rotateX: 180 }}
              transition={{ duration: 0.6 }}
              className="w-64 h-8 bg-gradient-to-br from-pink-300 to-pink-400 rounded-t-lg mx-auto mb-4 border-4 border-t-0 border-pink-400"
              style={{
                transformStyle: 'preserve-3d',
                transformOrigin: 'top',
              }}
            />

            {/* Letter content */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gradient-to-br from-pink-50 to-white rounded-2xl shadow-2xl p-8 md:p-12 border-4 border-pink-200 relative overflow-hidden"
            >
              {/* Decorative corners */}
              <div className="absolute top-4 left-4 text-3xl">🌸</div>
              <div className="absolute top-4 right-4 text-3xl">🌸</div>
              <div className="absolute bottom-4 left-4 text-3xl">💕</div>
              <div className="absolute bottom-4 right-4 text-3xl">💕</div>

              {/* Letter header */}
              <div className="text-center mb-8 relative z-10">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-pink-500 font-quicksand text-sm mb-2"
                >
                  Dari: {message.from}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-pink-600 font-poppins font-bold text-lg mb-4"
                >
                  Untuk: {message.to}
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-2xl md:text-3xl font-bold text-pink-700 font-quicksand"
                >
                  {message.title}
                </motion.h2>
              </div>

              {/* Letter body with typewriter effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="relative z-10"
              >
                <div className="text-pink-800 font-poppins text-base md:text-lg leading-relaxed whitespace-pre-wrap">
                  {displayedText}
                  {!isComplete && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="inline-block w-1 h-6 bg-pink-600 ml-1"
                    />
                  )}
                </div>
              </motion.div>

              {/* Floating hearts */}
              {isComplete && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(6)].map((_, i) => {
                    const emojis = ['💕', '💖', '💗', '💝', '🌸'];
                    const startX = (i * window.innerWidth) / 6;
                    return (
                      <motion.div
                        key={i}
                        className="absolute text-2xl"
                        style={{ left: startX, top: window.innerHeight }}
                        animate={{
                          y: [-50, -window.innerHeight - 100],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: i * 0.7,
                          ease: "easeOut",
                        }}
                      >
                        {emojis[i % emojis.length]}
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SuratCinta;
