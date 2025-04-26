// components/Hero.tsx
import * as React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* 左邊圖片 */}
      <div className="w-1/2 h-full">
        <motion.img 
          src="/images/background.png" 
          alt="Background" 
          className="w-full h-full object-cover" 
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* 右邊文字 */}
      <div className="w-1/2 h-full flex flex-col justify-center px-8 text-white">
        <motion.div 
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-xl">
            Welcome to the official website of Shih's Laboratory
          </h1>
          <p className="text-lg md:text-2xl drop-shadow-md">
            NYCU-IMF
          </p>
        </motion.div>
      </div>
    </section>
  );
}
