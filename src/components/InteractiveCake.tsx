import { motion } from 'framer-motion';

interface InteractiveCakeProps {
  candlesLit: boolean;
  onBlowCandles: () => void;
}

const InteractiveCake = ({ candlesLit, onBlowCandles }: InteractiveCakeProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      {/* SVG Cake */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
        className="relative"
      >
        <svg
          width="300"
          height="350"
          viewBox="0 0 300 350"
          className="drop-shadow-2xl"
        >
          {/* Candles */}
          {[80, 150, 220].map((x, index) => (
            <g key={index}>
              {/* Candle body */}
              <motion.rect
                x={x - 5}
                y="50"
                width="10"
                height="40"
                fill="#FFB6C1"
                stroke="#FF69B4"
                strokeWidth="1"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              />
              
              {/* Candle wick */}
              <line
                x1={x}
                y1="40"
                x2={x}
                y2="50"
                stroke="#333"
                strokeWidth="2"
              />
              
              {/* Flame */}
              {candlesLit && (
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                  }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {/* Light glow effect - largest circle */}
                  <motion.circle
                    cx={x}
                    cy="32"
                    r="20"
                    fill="#FFD700"
                    opacity="0.15"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      filter: 'blur(10px)',
                      transformOrigin: `${x}px 32px`,
                    }}
                  />
                  
                  {/* Light glow effect - medium circle */}
                  <motion.circle
                    cx={x}
                    cy="32"
                    r="15"
                    fill="#FFA500"
                    opacity="0.2"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.35, 0.2],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                    style={{
                      filter: 'blur(8px)',
                      transformOrigin: `${x}px 32px`,
                    }}
                  />
                  
                  {/* Light glow effect - small circle */}
                  <motion.circle
                    cx={x}
                    cy="32"
                    r="10"
                    fill="#FFD700"
                    opacity="0.3"
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.6,
                    }}
                    style={{
                      filter: 'blur(6px)',
                      transformOrigin: `${x}px 32px`,
                    }}
                  />
                  
                  {/* Outer flame (orange) - static */}
                  <ellipse
                    cx={x}
                    cy="30"
                    rx="8"
                    ry="12"
                    fill="#FF6B35"
                    style={{
                      filter: 'blur(2px)',
                    }}
                  />
                  
                  {/* Inner flame (yellow) - static */}
                  <ellipse
                    cx={x}
                    cy="32"
                    rx="5"
                    ry="8"
                    fill="#FFD700"
                    style={{
                      filter: 'blur(1px)',
                    }}
                  />
                </motion.g>
              )}
            </g>
          ))}

          {/* Top layer of cake */}
          <motion.rect
            x="50"
            y="90"
            width="200"
            height="60"
            rx="10"
            fill="#FFB6C1"
            stroke="#FF69B4"
            strokeWidth="3"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2 }}
          />
          
          {/* Frosting decoration on top layer */}
          {[70, 110, 150, 190, 230].map((x, i) => (
            <motion.circle
              key={`top-${i}`}
              cx={x}
              cy="90"
              r="10"
              fill="#FFC0CB"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 + i * 0.05 }}
            />
          ))}

          {/* Middle layer of cake */}
          <motion.rect
            x="40"
            y="150"
            width="220"
            height="80"
            rx="10"
            fill="#FF69B4"
            stroke="#FF1493"
            strokeWidth="3"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3 }}
          />
          
          {/* Frosting decoration on middle layer */}
          {[60, 100, 140, 180, 220].map((x, i) => (
            <motion.circle
              key={`mid-${i}`}
              cx={x}
              cy="150"
              r="10"
              fill="#FFB6C1"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + i * 0.05 }}
            />
          ))}

          {/* Bottom layer of cake */}
          <motion.rect
            x="30"
            y="230"
            width="240"
            height="100"
            rx="10"
            fill="#FF1493"
            stroke="#C71585"
            strokeWidth="3"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4 }}
          />
          
          {/* Frosting decoration on bottom layer */}
          {[50, 90, 130, 170, 210, 250].map((x, i) => (
            <motion.circle
              key={`bot-${i}`}
              cx={x}
              cy="230"
              r="10"
              fill="#FF69B4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 + i * 0.05 }}
            />
          ))}

          {/* Decorative hearts */}
          <motion.text
            x="140"
            y="200"
            fontSize="40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            💕
          </motion.text>
          
          <motion.text
            x="90"
            y="280"
            fontSize="30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            🌸
          </motion.text>
          
          <motion.text
            x="180"
            y="280"
            fontSize="30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            🌸
          </motion.text>
        </svg>

        {/* Sparkles around cake */}
        {candlesLit && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 180],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                ✨
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Blow candles button */}
      {candlesLit && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBlowCandles}
          className="bg-gradient-to-r from-pink-400 to-pink-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all font-poppins text-lg"
        >
          🎂 Tiup Lilinnya, Cibey! 💨
        </motion.button>
      )}
    </div>
  );
};

export default InteractiveCake;
