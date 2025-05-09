'use client';

import type { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section 
      id="hero-section" 
      dir="rtl" 
      className="relative h-screen w-full overflow-hidden"
      aria-label="אזור כותרת ראשית"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="מסעדה גמא - אווירה מרשימה"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 flex h-full w-full flex-col items-end justify-center px-6 text-right md:px-16 lg:px-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl">
          <motion.h1
            className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            מסעדה מוביל בישראל
          </motion.h1>
          
          <motion.p
            className="mb-8 text-lg text-gray-100 md:text-xl"
            variants={itemVariants}
          >
            חווית לקוח מושלמת בכל ביקור
          </motion.p>
          
          <motion.button
            className="rounded-lg bg-[#FF6B6B] px-8 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:ring-offset-2 focus:ring-offset-gray-900"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label="קבע תור עכשיו"
          >
            קבע תור עכשיו
          </motion.button>
        </div>

        {/* Decorative Element */}
        <motion.div
          className="absolute bottom-0 right-0 h-24 w-24 rounded-tl-full bg-[#96CEB4] bg-opacity-80 md:h-32 md:w-32 lg:h-40 lg:w-40"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;