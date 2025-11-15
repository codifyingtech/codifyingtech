import React from "react";
import { motion } from "framer-motion";

export default function Contact2() {
  return (
    <div className="min-h-screen w-full bg-[#081520] text-white flex justify-center items-center px-6 py-24">

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Talk to Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-lg">
              Expert
            </span>{" "}
            Team
          </h1>

          <p className="text-gray-300 mt-4 leading-relaxed max-w-md">
            Have a project in mind? Fill out the form and our team will reach out
            to discuss how we can help bring your ideas to life with cutting-edge
            solutions.
          </p>

          {/* Pills */}
          <div className="flex gap-4 mt-8">
            <button className="px-6 py-2 border border-gray-600 rounded-full hover:bg-gray-800/40 shadow-lg transition">
              Quick Response
            </button>

            <button className="px-6 py-2 border border-gray-600 rounded-full hover:bg-gray-800/40 shadow-lg transition">
              Expert Guidance
            </button>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]"
        >
          <form className="grid grid-cols-1 gap-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-300">First name *</label>
                <input
                  type="text"
                  className="w-full mt-1 p-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Last name</label>
                <input
                  type="text"
                  className="w-full mt-1 p-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-300">Email *</label>
              <input
                type="email"
                className="w-full mt-1 p-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Phone *</label>
              <input
                type="text"
                className="w-full mt-1 p-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Message *</label>
              <textarea
                rows="5"
                className="w-full mt-1 p-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            {/* SUBMIT BUTTON */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full text-center py-3 mt-2 rounded-md bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold shadow-lg shadow-blue-500/20 hover:opacity-90 transition"
            >
              Get in Touch ✈️
            </motion.button>

          </form>
        </motion.div>
      </div>
    </div>
  );
}

