import React from "react";
import { motion } from "framer-motion";

const brands = [
  { letter: "T", name: "TechCorp", category: "Technology" },
  { letter: "F", name: "FinanceHub", category: "Finance" },
  { letter: "H", name: "HealthPlus", category: "Healthcare" },
  { letter: "E", name: "EduLearn", category: "Education" },
  { letter: "R", name: "RetailMax", category: "Retail" },
  { letter: "M", name: "MediaStream", category: "Media" },
  { letter: "F", name: "FoodHub", category: "Food & Beverage" },
  { letter: "T", name: "TravelWise", category: "Travel" },
];

export default function TrustedBrands() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#e8f7ff] via-white to-[#e8f7ff] px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          Trusted By <span className="text-[#00AEEF]">Leading Brands</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg"
        >
          We're proud to work with innovative companies across various industries,
          helping them achieve their digital goals.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {brands.map((b, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-[#00AEEF] text-white flex items-center justify-center text-2xl font-bold shadow-md">
                {b.letter}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{b.name}</h3>
              <p className="text-gray-500 text-sm">{b.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
