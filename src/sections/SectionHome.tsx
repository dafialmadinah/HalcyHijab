import React from "react";
import Image from "next/image";
import { motion, easeInOut, easeOut } from "framer-motion";

export const SectionHome = () => {
  // Variants untuk animasi teks yang bertahap
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  // Variants untuk floating animation
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: easeInOut, // Fixed: Use imported easeInOut
      },
    },
  };

  // Variants untuk gambar dengan parallax effect
  const imageVariants = {
    hidden: {
      scale: 1.2,
      opacity: 0,
      rotate: 5,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: easeOut,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
  };

  return (
    <section
      id="home"
      className="w-full h-screen flex items-center bg-white pt-20 overflow-hidden"
    >
      <div className="flex w-full flex-col md:flex-row items-center justify-between">
        {/* LEFT: Text and button */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full px-6 sm:px-10 md:pl-20 lg:pl-40 pb-10 md:pb-20 flex flex-col gap-5 max-w-[750px] relative"
        >
          {/* Dekorasi kiri atas (gambar kupu) dengan floating animation */}
          <motion.div 
            variants={floatingVariants}
            animate="animate"
            className="hidden md:block absolute -top-6 right-0 lg:right-10"
          >
            <motion.div
              whileHover={{ 
                scale: 1.2, 
                rotate: 15,
                transition: { duration: 0.3 }
              }}
            >
              <Image src="/kupu.svg" alt="Top Decoration" width={80} height={50} />
            </motion.div>
          </motion.div>

          {/* Judul dengan stagger animation */}
          <motion.div variants={itemVariants}>
            <motion.h1 
              className="text-black text-[32px] lg:text-[50px] font-bold"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              {"Welcome to Halcy!".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    color: "#ea3697",
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-black text-[25px] lg:text-[40px] font-light"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              Your Sustainable <br />
              <motion.span 
                className="text-[#ea3697] font-extrabold"
                whileHover={{
                  textShadow: "0 0 20px rgba(234, 54, 151, 0.5)",
                  transition: { duration: 0.3 }
                }}
              >
                Hijab <br /> Destination
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* Subjudul dengan fade-in animation */}
          <motion.div variants={itemVariants}>
            <motion.p 
              className="text-black hidden md:block"
              whileHover={{ 
                scale: 1.01,
                transition: { duration: 0.2 }
              }}
            >
              &quot;Discover timeless style and comfort. Embrace Halcy Hijab for a
              conscious, sustainable way to wear your faith.&quot;
            </motion.p>
          </motion.div>

          {/* Tombol & Dekorasi samping */}
          <motion.div 
            variants={itemVariants}
            className="mt-4 flex items-center gap-4 w-fit"
          >
            <motion.button 
              className="px-6 py-3 bg-[#ea3697] text-white font-medium rounded-md hover:shadow-lg transition-transform duration-300"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 10px 25px rgba(234, 54, 151, 0.3)",
                y: -5,
              }}
              whileTap={{ 
                scale: 0.95,
                y: 0,
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                SHOP NOW
              </motion.span>
            </motion.button>

            {/* Dekorasi kanan tombol dengan delayed floating animation */}
            <motion.div 
              className="hidden lg:flex pb-20"
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 0.5 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.3, 
                  rotate: -15,
                  transition: { duration: 0.3 }
                }}
              >
                <Image src="/kupu.svg" alt="Decor Right" width={40} height={40} />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT: Gambar dengan enhanced animations */}
        <motion.div
          initial={{ x: 200, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            delay: 0.3,
          }}
          className="hidden md:block pr-10"
        >
          <motion.div 
            className="relative w-[300px] sm:w-[400px] lg:w-[500px] h-[400px] sm:h-[520px] lg:h-[625px]"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            {/* Background dengan parallax effect */}
            <motion.div
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <Image
                src="/bgBanner.png"
                alt="Background"
                fill
                className="rounded-lg object-cover z-0"
              />
            </motion.div>
            
            {/* Gambar utama dengan sophisticated hover effects */}
            <motion.div
              className="absolute z-10"
              style={{
                top: "10%",
                left: "20%",
                transform: "translate(-50%, -50%)",
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { 
                  duration: 0.4,
                  ease: "easeOut"
                }
              }}
              animate={{
                y: [0, -5, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              }}
            >
              <Image
                src="/Banner.png"
                alt="Model"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </motion.div>

            {/* Subtle glow effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-lg pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{
                opacity: 1,
                boxShadow: "0 0 30px rgba(234, 54, 151, 0.2)",
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};