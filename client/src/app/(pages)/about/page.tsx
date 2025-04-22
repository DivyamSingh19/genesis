"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { ElegantShape } from "@/components/ui/elegant-shape";

const page = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* Navigation would be here */}

      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-purple-500/[0.05] blur-3xl" />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-blue-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-purple-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-indigo-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-blue-400/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6"
          >
            <Circle className="h-2 w-2 fill-blue-500/80" />
            <span className="text-sm text-white/60 tracking-wide">
              Our Story
            </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Empowering
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-300">
                Creative Vision
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-12"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl">
              We're on a mission to democratize digital creation through
              accessible AI-powered tools that bring your imagination to life.
            </p>
          </motion.div>
        </div>
      </div>

      {/* About Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-video rounded-2xl border border-white/10 overflow-hidden bg-slate-900/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/30">Genesis in action</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <p className="text-sm text-white/60 mb-2 tracking-wide">
              About Genesis
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-300">
              Redefining Creation
            </h2>
            <p className="text-white/40 mb-8 leading-relaxed">
              Genesis was founded with a simple yet powerful vision: to make advanced
              AI image generation accessible to everyone. Our platform combines 
              cutting-edge machine learning models with an intuitive interface, 
              allowing creators of all skill levels to transform ideas into 
              stunning visual experiences within seconds.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 py-2 overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-70"></span>
              <span className="relative text-white font-medium tracking-wide">
                Our Technology
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl font-semibold mb-4 text-white/80"
          >
            Our Core Values
          </motion.h3>
          <p className="text-white/40 mb-12 max-w-3xl">
            At Genesis, we're guided by principles that shape everything we create:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Pushing the boundaries of what's possible with AI generation technology",
                icon: "✨"
              },
              {
                title: "Accessibility",
                description: "Making powerful creative tools available to everyone, regardless of technical expertise",
                icon: "🔓"
              },
              {
                title: "Quality",
                description: "Delivering exceptional visual experiences with stunning detail and precision",
                icon: "💎"
              },
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="bg-white/[0.03] backdrop-blur-[2px] border border-white/[0.1] rounded-2xl p-8"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white/90 to-purple-300">
                  {value.title}
                </h4>
                <p className="text-white/40 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

         </div>
      </div>

       
      <div className="relative z-10 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm"></div>

            <motion.div
              className="relative z-10 text-center text-white p-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm mb-3 uppercase tracking-widest text-white/60">
                Join Us
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white/90 to-purple-300">
                Start Creating With Genesis Today
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-3 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-blue-500"></span>
                  <span className="relative text-white font-medium tracking-wide">
                    Get Started
                  </span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-3 overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-white"></span>
                  <span className="relative text-black font-medium tracking-wide">
                    See Gallery
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80 pointer-events-none" />

      {/* Footer would be here */}
    </section>
  );
};

export default page;