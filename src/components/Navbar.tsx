'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'תפריט', href: '#menu' },
  { name: 'גלריה', href: '#gallery' },
  { name: 'אודות', href: '#about' },
  { name: 'הזמנת מקום', href: '#booking' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (href: string) => {
    setIsOpen(false);
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="navbar"
      dir="rtl"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      aria-label="ניווט ראשי"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative flex items-center"
            >
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
                alt="לוגו מסעדה גמא"
                width={40}
                height={40}
                className="rounded-full mr-2"
              />
              <span className="text-xl font-bold text-right text-gray-800">מסעדה גמא</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(item.href);
                  }}
                  className="px-4 py-2 mx-2 text-gray-700 hover:text-[#FF6B6B] rounded-md transition-colors duration-300 text-right font-medium"
                  aria-label={item.name}
                >
                  {item.name}
                </a>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#96CEB4] hover:bg-[#7ab99e] text-white font-medium py-2 px-6 rounded-md shadow-sm transition-colors duration-300 mr-4"
              aria-label="הזמנה עכשיו"
            >
              הזמנה עכשיו
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(item.href);
                  }}
                  className="block py-2 text-right text-gray-700 hover:text-[#FF6B6B] font-medium border-b border-gray-100 last:border-0"
                  aria-label={item.name}
                >
                  {item.name}
                </a>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="bg-[#96CEB4] hover:bg-[#7ab99e] text-white font-medium py-2 px-4 rounded-md shadow-sm transition-colors duration-300 text-center mt-2"
                aria-label="הזמנה עכשיו"
              >
                הזמנה עכשיו
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;