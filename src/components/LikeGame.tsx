import { useState, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const LikeGame = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleYesClick = useCallback(() => {
    setShowSuccess(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  const moveButton = useCallback(() => {
    const newX = Math.random() * (window.innerWidth - 100);
    const newY = Math.random() * (window.innerHeight - 100);
    setPosition({ x: newX, y: newY });
  }, []);

  if (showSuccess) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <div className="text-center fade-in">
          <h1 className="text-4xl font-bold text-white mb-4">Yay! I like you too! ❤️</h1>
          <p className="text-xl text-white">You've made my day! 🎉</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8 fade-in">
          Do you like me? 🥺
        </h1>
        <div className="space-x-4">
          <Button
            onClick={handleYesClick}
            className="bg-white text-pink-500 hover:bg-pink-100 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Yes 😊
          </Button>
          <motion.div
            style={{
              position: 'absolute',
              left: position.x,
              top: position.y,
              transition: 'all 0.3s ease'
            }}
          >
            <Button
              onMouseEnter={moveButton}
              onClick={moveButton}
              className="bg-gray-200 text-gray-700 hover:bg-gray-300 text-lg px-8 py-6 rounded-full shadow-lg"
            >
              No 😢
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LikeGame;