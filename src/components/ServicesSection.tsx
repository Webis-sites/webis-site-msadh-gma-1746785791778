'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaGlassCheers, FaTruck, FaClipboardList } from 'react-icons/fa';
import Image from 'next/image';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services: Service[] = [
    {
      id: 1,
      title: 'ארוחות בריאות',
      description: 'תפריט עשיר במנות טריות ובריאות, המבוססות על חומרי גלם איכותיים ואורגניים. אנו מקפידים על תזונה מאוזנת ועשירה בערכים תזונתיים.',
      icon: <FaUtensils className="text-3xl text-primary" />,
      imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'אירועים פרטיים',
      description: 'אירוח אירועים פרטיים באווירה ייחודית ומיוחדת. צוות המקצועי שלנו יתאים את התפריט והשירות לצרכים האישיים שלכם.',
      icon: <FaGlassCheers className="text-3xl text-primary" />,
      imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'קייטרינג',
      description: 'שירותי קייטרינג לכל סוגי האירועים, מפגישות עסקים ועד חתונות. אנו מספקים מנות טריות ובריאות עד אליכם.',
      icon: <FaTruck className="text-3xl text-primary" />,
      imageUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'תפריט מותאם אישית',
      description: 'אנו מציעים אפשרות להתאמה אישית של התפריט לפי דרישות תזונתיות מיוחדות, העדפות אישיות או מגבלות בריאותיות.',
      icon: <FaClipboardList className="text-3xl text-primary" />,
      imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" dir="rtl" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">השירותים שלנו</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            במסעדה גמא אנו מציעים מגוון שירותים איכותיים המותאמים לצרכי הלקוחות שלנו, תוך שמירה על סטנדרטים גבוהים של איכות ובריאות.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-30"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary bg-opacity-20 flex items-center justify-center mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-right leading-relaxed mb-4">{service.description}</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="#" className="inline-block text-primary font-medium hover:text-secondary transition-colors duration-300">
                    קרא עוד <span className="mr-1">←</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#FF6B6B" }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            הזמינו שולחן עכשיו
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;