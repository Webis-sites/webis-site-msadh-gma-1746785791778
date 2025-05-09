"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Dish {
  id: number;
  name: string;
  description: string;
  healthBenefits: string;
  imageUrl: string;
  calories: number;
}

const MenuHighlights = () => {
  const [dishes, setDishes] = useState<Dish[]>([
    {
      id: 1,
      name: "סלט קינואה וירקות קלויים",
      description: "קינואה אורגנית עם ירקות קלויים בתנור, עשבי תיבול טריים וטחינה גולמית",
      healthBenefits: "עשיר בחלבון, סיבים תזונתיים ונוגדי חמצון",
      imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      calories: 320
    },
    {
      id: 2,
      name: "קערת אסאי וגרנולה ביתית",
      description: "קערת אסאי עם פירות טריים, גרנולה ביתית, שקדים קלויים וסילאן טבעי",
      healthBenefits: "עשיר באומגה 3, ויטמינים ומינרלים חיוניים",
      imageUrl: "https://images.unsplash.com/photo-1546039907-7fa05f864c02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      calories: 380
    },
    {
      id: 3,
      name: "טוסט אבוקדו וביצה עלומה",
      description: "לחם מחמצת מקמח מלא, אבוקדו טרי, ביצה עלומה, עגבניות שרי ומיקרו עלים",
      healthBenefits: "מקור מצוין לשומנים בריאים, חלבון וסיבים תזונתיים",
      imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      calories: 420
    },
    {
      id: 4,
      name: "קדרת ירקות ועדשים",
      description: "תבשיל עדשים עם ירקות שורש, עשבי תיבול טריים ותבלינים מקומיים",
      healthBenefits: "עשיר בחלבון צמחי, ברזל וויטמינים מקבוצה B",
      imageUrl: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      calories: 350
    },
    {
      id: 5,
      name: "סלמון צרוב עם ירקות ירוקים",
      description: "פילה סלמון טרי צרוב בגריל עם ירקות ירוקים מאודים ורוטב לימון",
      healthBenefits: "עשיר באומגה 3, חלבון איכותי וויטמין D",
      imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      calories: 410
    },
    {
      id: 6,
      name: "מרק ירקות שורש",
      description: "מרק ירקות שורש עשיר עם קרוטונים מלחם מחמצת וגרעיני דלעת",
      healthBenefits: "עשיר בנוגדי חמצון, ויטמינים ומינרלים",
      imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      calories: 280
    }
  ]);

  // Container variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Item variants for individual dish animations
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Button animation variants
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section id="menu-highlights" dir="rtl" className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            המנות המובילות שלנו
          </h2>
          <div className="w-24 h-1 bg-[#96CEB4] mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            התפריט שלנו מציע מגוון מנות בריאות וטעימות, המוכנות מחומרי גלם טריים ואיכותיים
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {dishes.map((dish) => (
            <motion.div
              key={dish.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={dish.imageUrl}
                  alt={`תמונה של ${dish.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={dish.id <= 3}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{dish.name}</h3>
                  <span className="text-sm bg-[#96CEB4] text-white px-2 py-1 rounded-full">
                    {dish.calories} קל׳
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <div className="bg-gray-50 p-3 rounded-md">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-[#FF6B6B]">יתרונות בריאותיים: </span>
                    {dish.healthBenefits}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <motion.div
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <Link href="/menu" className="inline-block bg-[#96CEB4] hover:bg-[#7fb99e] text-white font-bold py-3 px-8 rounded-full shadow-md transition-colors duration-300">
              לתפריט המלא
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;