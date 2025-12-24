import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);

  const cuteErrorMessages = {
    emptyFields: 'Eh tunggu dulu, isi dulu dong sayang! 🥺💕',
    wrongUsername: 'Hmm... sepertinya bukan kamu deh! Coba lagi ya! 🤔💖',
    wrongPassword: 'Passwordnya salah nih, Cibey! Coba yang lain yaa~ 😊🌸',
    almostThere: 'Udah deket nih! Tapi belum benar, coba lagi ya sayang! 💕✨',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError(cuteErrorMessages.emptyFields);
      triggerShake();
      return;
    }

    // Valid usernames
    const validUsernames = [
      'enjell',
      'Enjell',
      'enjelly',
      'Enjelly',
      'Enjelly Viranika',
      'enjelly viranika',
      'Enjelly viranika',
      'enjelly Viranika'
    ];

    // Valid passwords
    const validPasswords = ['Cantik', 'cantik', 'CANTIK'];

    if (!validUsernames.includes(username)) {
      setError(cuteErrorMessages.wrongUsername);
      triggerShake();
      return;
    }

    if (!validPasswords.includes(password)) {
      setError(cuteErrorMessages.wrongPassword);
      triggerShake();
      return;
    }

    // Login sukses!
    onLogin();
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-purple-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-md"
      >
        {/* Floating hearts decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-pink-300"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: window.innerHeight + 50 
              }}
              animate={{
                y: -100,
                x: Math.random() * window.innerWidth,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              <Heart className="w-6 h-6 fill-current opacity-30" />
            </motion.div>
          ))}
        </div>

        {/* Login Card */}
        <motion.div
          animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
          className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 relative z-10"
        >
          {/* Header */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              className="inline-block mb-4"
            >
              <Sparkles className="w-16 h-16 text-pink-500 mx-auto" />
            </motion.div>
            <h1 className="text-4xl font-bold text-pink-600 font-quicksand mb-2">
              Selamat Datang! 💕
            </h1>
            <p className="text-pink-400 font-poppins text-sm">
              Ada yang spesial menantimu hari ini~
            </p>
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-pink-700 font-medium mb-2 font-poppins text-sm">
                Nama cibey?
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none transition-colors font-quicksand bg-pink-50/50"
                placeholder="Siapa namamu sayang? 🌸"
              />
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-pink-700 font-medium mb-2 font-poppins text-sm">
                Cibey itu can...?
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none transition-colors font-quicksand bg-pink-50/50"
                placeholder="Kamu itu apa sih? 💖"
              />
            </motion.div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-pink-100 border-2 border-pink-300 rounded-xl p-3 text-pink-700 text-center font-poppins text-sm"
              >
                {error}
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-pink-400 to-pink-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow font-poppins text-lg"
            >
              Masuk ke Keajaibannya! ✨
            </motion.button>
          </form>

          {/* Footer hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center text-pink-300 text-xs mt-6 font-quicksand"
          >
            Petunjuk: Username kamu itu yang biasa dipanggil, password? Ya kamu itu apa~ 😉
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
