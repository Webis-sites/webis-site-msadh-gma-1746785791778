'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';

interface SocialLink {
  id: string;
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface NavLink {
  id: string;
  href: string;
  label: string;
}

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const navLinks: NavLink[] = [
    { id: 'home', href: '/', label: 'דף הבית' },
    { id: 'menu', href: '/menu', label: 'תפריט' },
    { id: 'about', href: '/about', label: 'אודות' },
    { id: 'contact', href: '/contact', label: 'צור קשר' },
  ];
  
  const socialLinks: SocialLink[] = [
    { id: 'facebook', icon: <FaFacebook size={24} />, href: 'https://facebook.com', label: 'פייסבוק' },
    { id: 'instagram', icon: <FaInstagram size={24} />, href: 'https://instagram.com', label: 'אינסטגרם' },
    { id: 'twitter', icon: <FaTwitter size={24} />, href: 'https://twitter.com', label: 'טוויטר' },
    { id: 'whatsapp', icon: <FaWhatsapp size={24} />, href: 'https://wa.me/972501234567', label: 'וואטסאפ' },
  ];
  
  return (
    <footer id="footer" dir="rtl" className="bg-[#96CEB4] text-gray-800 pt-12 pb-6 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="text-right">
            <div className="flex justify-end mb-4">
              <Image 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=100&q=80" 
                alt="מסעדה גמא" 
                width={120} 
                height={60}
                className="rounded-md"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">מסעדה גמא</h2>
            <p className="mb-4">אוכל בריא, חיים בריאים</p>
            <p className="text-sm">אנחנו מסעדה מובילה בתחום הבריאות עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.</p>
          </div>
          
          {/* Navigation Links */}
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[#FF6B6B] pb-2 inline-block">ניווט מהיר</h3>
            <nav>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link 
                      href={link.href}
                      className="hover:text-[#FF6B6B] transition-colors duration-300 flex items-center justify-end gap-2"
                      aria-label={link.label}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          {/* Contact Information */}
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[#FF6B6B] pb-2 inline-block">צור קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-end gap-2">
                <span>03-1234567</span>
                <FaPhone className="text-[#FF6B6B]" />
              </li>
              <li className="flex items-center justify-end gap-2">
                <span>info@gamma-restaurant.co.il</span>
                <FaEnvelope className="text-[#FF6B6B]" />
              </li>
              <li className="flex items-center justify-end gap-2">
                <span>רחוב הבריאות 123, תל אביב</span>
                <FaMapMarkerAlt className="text-[#FF6B6B]" />
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-bold mb-2">שעות פעילות:</h4>
              <p>ראשון-חמישי: 12:00-23:00</p>
              <p>שישי-שבת: 12:00-00:00</p>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[#FF6B6B] pb-2 inline-block">עקבו אחרינו</h3>
            <div className="flex justify-end space-x-4 space-x-reverse mb-6">
              {socialLinks.map((social) => (
                <a 
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full text-[#96CEB4] hover:text-[#FF6B6B] hover:bg-gray-100 transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="font-bold mb-2">הירשמו לניוזלטר:</h4>
              <div className="flex">
                <button 
                  type="submit" 
                  className="bg-[#FF6B6B] text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors duration-300"
                  aria-label="הרשמה לניוזלטר"
                >
                  הרשמה
                </button>
                <input 
                  type="email" 
                  placeholder="האימייל שלך" 
                  className="px-4 py-2 rounded-l-md border-0 flex-grow text-right"
                  aria-label="כתובת אימייל"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <hr className="my-8 border-gray-300" />
        
        {/* Copyright */}
        <div className="text-center">
          <p>© {currentYear} מסעדה גמא. כל הזכויות שמורות.</p>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 left-8 bg-[#FF6B6B] text-white p-3 rounded-full shadow-lg transition-all duration-300 ${showScrollTop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        aria-label="חזרה למעלה"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;