'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: {
    days: string;
    time: string;
  }[];
  social: {
    facebook: string;
    instagram: string;
    twitter: string;
    whatsapp: string;
  };
  mapUrl: string;
}

const ContactSection: React.FC = () => {
  const contactInfo: ContactInfo = {
    address: 'רחוב הברוש 15, תל אביב',
    phone: '03-1234567',
    email: 'info@gammarestaurant.co.il',
    hours: [
      { days: 'ראשון - חמישי', time: '11:00 - 22:00' },
      { days: 'שישי', time: '11:00 - 15:00' },
      { days: 'שבת', time: 'סגור' }
    ],
    social: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      whatsapp: 'https://wa.me/9721234567'
    },
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108169.92938331607!2d34.7457999!3d32.0879801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1654321098765!5m2!1sen!2sil'
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-16 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-2">צור קשר</h2>
          <div className="w-24 h-1 bg-[#96CEB4] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            className="bg-gray-50 p-8 rounded-lg shadow-md"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <div className="flex items-center mb-4">
                <div className="bg-[#96CEB4] p-3 rounded-full ml-4">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">כתובת</h3>
                  <p className="text-gray-600">{contactInfo.address}</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6">
              <div className="flex items-center mb-4">
                <div className="bg-[#96CEB4] p-3 rounded-full ml-4">
                  <FaPhone className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">טלפון</h3>
                  <p className="text-gray-600 hover:text-[#FF6B6B] transition-colors">
                    <a href={`tel:${contactInfo.phone}`} aria-label="מספר טלפון">
                      {contactInfo.phone}
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6">
              <div className="flex items-center mb-4">
                <div className="bg-[#96CEB4] p-3 rounded-full ml-4">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">אימייל</h3>
                  <p className="text-gray-600 hover:text-[#FF6B6B] transition-colors">
                    <a href={`mailto:${contactInfo.email}`} aria-label="כתובת אימייל">
                      {contactInfo.email}
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6">
              <div className="flex items-center mb-4">
                <div className="bg-[#96CEB4] p-3 rounded-full ml-4">
                  <FaClock className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">שעות פעילות</h3>
                  <div className="text-gray-600">
                    {contactInfo.hours.map((hour, index) => (
                      <div key={index} className="mb-1">
                        <span className="font-medium">{hour.days}: </span>
                        <span>{hour.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">עקבו אחרינו</h3>
              <div className="flex space-x-4 space-x-reverse">
                <motion.a
                  href={contactInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="פייסבוק"
                  className="bg-[#96CEB4] hover:bg-[#FF6B6B] text-white p-3 rounded-full transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaFacebook className="text-xl" />
                </motion.a>
                <motion.a
                  href={contactInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="אינסטגרם"
                  className="bg-[#96CEB4] hover:bg-[#FF6B6B] text-white p-3 rounded-full transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaInstagram className="text-xl" />
                </motion.a>
                <motion.a
                  href={contactInfo.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="טוויטר"
                  className="bg-[#96CEB4] hover:bg-[#FF6B6B] text-white p-3 rounded-full transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTwitter className="text-xl" />
                </motion.a>
                <motion.a
                  href={contactInfo.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="וואטסאפ"
                  className="bg-[#96CEB4] hover:bg-[#FF6B6B] text-white p-3 rounded-full transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaWhatsapp className="text-xl" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-50 p-4 rounded-lg shadow-md h-full">
              <div className="relative h-full min-h-[400px] overflow-hidden rounded-lg">
                <iframe
                  src={contactInfo.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="מיקום מסעדה גמא"
                  aria-label="מפת גוגל המציגה את מיקום המסעדה"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="flex justify-center items-center">
            <img 
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
              alt="לוגו מסעדה גמא" 
              className="w-16 h-16 rounded-full object-cover border-2 border-[#96CEB4]"
            />
            <h3 className="text-2xl font-bold text-gray-800 mr-3">מסעדה גמא</h3>
          </div>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            אנחנו מסעדה מובילה בתחום הבריאות עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;