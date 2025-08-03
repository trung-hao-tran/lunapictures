'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import type { FC } from 'react';

const ComingSoon: FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Coming Soon';

  useEffect(() => {
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 200); // 200ms per character

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
        <h1 className="text-9xl text-white mb-4">
          {displayedText}
          <motion.span
            className="inline-block"
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.7,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            |
          </motion.span>
        </h1>
    </div>
  );
}
export default ComingSoon;