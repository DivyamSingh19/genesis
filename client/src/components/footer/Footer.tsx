"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <footer className="relative bg-black text-white/60 py-16 px-6 md:px-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-500/10 rounded-full blur-[120px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Gradient Line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left Section */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
          >
            <div className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Genesis
            </div>
            <p className="mt-4 text-sm text-white/30">
              © {new Date(Date.now()).getFullYear()} Genesis. All rights reserved.
            </p>
          </motion.div>

          {/* Right Section */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            custom={1}
            className="flex flex-col md:items-end gap-4"
          >
            <div className="flex gap-6 text-sm">
              {["Home", "Pricing", , "About"].map((item, i) => (
                <Link
                  key={item}
                  href={
                    item === "Home" ? "/" :item === "Pricing"?"/pricing": item === "About" ? "/about-us" : "#"
                  }
                  className="relative text-white/50 hover:text-white transition-colors duration-300"
                >
                  <span>{item}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
