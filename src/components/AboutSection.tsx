'use client';

import { FC, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

interface AboutSectionProps {}

const AboutSection: FC<AboutSectionProps> = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const featureItems = [
    {
      id: 1,
      title: 'ניסיון רב שנים',
      description: 'צוות השפים שלנו מביא ניסיון של למעלה מעשור בתחום הקולינריה הבריאה',
    },
    {
      id: 2,
      title: 'חומרי גלם איכותיים',
      description: 'אנו בוחרים בקפידה את חומרי הגלם הטריים ביותר ממיטב הספקים המקומיים',
    },
    {
      id: 3,
      title: 'שירות מקצועי',
      description: 'הצוות שלנו מחויב להעניק לכם חוויה קולינרית מושלמת בכל ביקור',
    },
  ];

  return (
    <section 
      id="about-section" 
      dir="rtl" 
      className="py-16 md:py-24 bg-white text-right"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              אודות המסעדה
            </h2>
            <div className="w-20 h-1 bg-[#96CEB4] mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                מסעדה גמא הוקמה מתוך אהבה לאוכל בריא ואיכותי. כבר למעלה מעשור אנחנו מובילים את תחום הקולינריה הבריאה, עם דגש על חומרי גלם טריים ואורגניים שנבחרים בקפידה מדי יום.
              </p>
              <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                הצוות המקצועי שלנו, בהובלת השף הראשי, מחויב להעניק לכם חוויה קולינרית מושלמת המשלבת טעמים עשירים עם ערכים תזונתיים גבוהים. אנו מאמינים שאוכל בריא יכול וצריך להיות טעים, מגוון ומהנה.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                {featureItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="bg-gray-50 p-6 rounded-lg border-r-4 border-[#96CEB4] hover:shadow-md transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="order-1 md:order-2 relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="מסעדה גמא - המטבח שלנו"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 right-6 bg-[#96CEB4] text-white py-2 px-4 rounded-md">
                <span className="font-medium">המטבח שלנו</span>
              </div>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="mt-16 p-8 bg-gray-50 rounded-lg border-r-4 border-[#FF6B6B]"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800">המחויבות שלנו</h3>
            <p className="text-lg text-gray-700">
              במסעדה גמא, אנו מחויבים להעניק לכם את החוויה הקולינרית הטובה ביותר. מהרגע שאתם נכנסים בדלת ועד לרגע שאתם עוזבים, הצוות שלנו כאן כדי לוודא שכל ביקור יהיה מיוחד. אנו מזמינים אתכם לבוא ולחוות את הטעמים, האווירה והשירות המקצועי שהפכו אותנו למובילים בתחום.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;