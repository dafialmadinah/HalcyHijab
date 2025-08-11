import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";

export const SectionAboutUs = () => {
  const titleRef = useRef(null);
  const brandRef = useRef(null);
  const descriptionRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const buttonRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const isBrandInView = useInView(brandRef, { once: true, amount: 0.3 });
  const isDescriptionInView = useInView(descriptionRef, { once: true, amount: 0.2 });
  const isMissionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const isVisionInView = useInView(visionRef, { once: true, amount: 0.3 });
  const isButtonInView = useInView(buttonRef, { once: true, amount: 0.5 });

  // Animation variants
  const fadeInUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const brandVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        type: "spring" as const,
        stiffness: 150,
      },
    },
  };

  return (
    <section
      id="about-us"
      className="w-full min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/aboutus.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay putih transparan dengan subtle animation */}
      <motion.div 
        className="absolute inset-0 bg-white/45 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Konten utama */}
      <div className="text-center max-w-[800px] px-4 py-12 z-10">
        
        {/* Judul */}
        <motion.div
          ref={titleRef}
          variants={fadeInUpVariants}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-4xl font-bold text-black mb-4"
            whileHover={{
              scale: 1.05,
              color: "#ea3697",
              textShadow: "0 0 20px rgba(234, 54, 151, 0.3)",
              transition: { duration: 0.3 }
            }}
          >
            {"About Us".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut" as const,
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          ref={brandRef}
          variants={brandVariants}
          initial="hidden"
          animate={isBrandInView ? "visible" : "hidden"}
        >
          <motion.span 
            className="bg-white px-6 py-3 rounded-lg shadow-md inline-flex mb-4 text-3xl font-bold text-[#ea3697]"
            whileHover={{
              scale: 1.1,
              y: -5,
              boxShadow: "0 15px 30px rgba(234, 54, 151, 0.2)",
              backgroundColor: "#fef7f0",
              transition: { duration: 0.3 }
            }}
            animate={{
              y: [0, -3, 0],
              boxShadow: [
                "0 4px 6px rgba(0, 0, 0, 0.1)",
                "0 8px 15px rgba(234, 54, 151, 0.15)",
                "0 4px 6px rgba(0, 0, 0, 0.1)",
              ],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut" as const,
              }
            }}
          >
            {"Halcy Hijab".split("").map((char, index) => (
              <motion.span
                key={index}
                whileHover={{
                  scale: 1.2,
                  y: -3,
                  color: "#d1306b",
                  transition: { duration: 0.2 }
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        </motion.div>

        {/* Deskripsi Utama */}
        <motion.div
          ref={descriptionRef}
          variants={textVariants}
          initial="hidden"
          animate={isDescriptionInView ? "visible" : "hidden"}
        >
          <motion.p 
            className="text-lg text-black mb-8"
            whileHover={{
              scale: 1.02,
              color: "#374151",
              transition: { duration: 0.3 }
            }}
          >
            At Halcy Hijab, we are more than just a fashion brand; we are a community committed to empowering women through modest fashion that embraces both style and sustainability. Our mission is to provide high-quality, eco-friendly hijabs that cater to modern women who value both elegance and environmental responsibility.
          </motion.p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          ref={missionRef}
          variants={fadeInUpVariants}
          initial="hidden"
          animate={isMissionInView ? "visible" : "hidden"}
        >
          <motion.h4 
            className="text-2xl font-semibold text-gray-800 mb-4"
            whileHover={{
              color: "#ea3697",
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            {"Mission Statement".split("").map((char, index) => (
              <motion.span
                key={index}
                whileHover={{
                  y: -3,
                  transition: { duration: 0.2 }
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h4>
          
          <motion.p 
            className="text-black italic mb-8"
            whileHover={{
              scale: 1.02,
              color: "#374151",
              fontStyle: "normal",
              transition: { duration: 0.3 }
            }}
          >
            &quot;To be the leading platform for sustainable and stylish hijabs, offering a range of fashion choices that embody both quality and environmental mindfulness.&quot;
          </motion.p>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          ref={visionRef}
          variants={fadeInUpVariants}
          initial="hidden"
          animate={isVisionInView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
        >
          <motion.h4 
            className="text-2xl font-semibold text-gray-800 mb-4"
            whileHover={{
              color: "#ea3697",
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            {"Vision Statement".split("").map((char, index) => (
              <motion.span
                key={index}
                whileHover={{
                  y: -3,
                  transition: { duration: 0.2 }
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h4>
          
          <motion.p 
            className="text-black italic mb-8"
            whileHover={{
              scale: 1.02,
              color: "#374151",
              fontStyle: "normal",
              transition: { duration: 0.3 }
            }}
          >
            &quot;To inspire women everywhere to express their individuality through fashion that supports a greener world. We envision a future where every woman feels confident, stylish, and responsible while wearing Halcy Hijab as a step towards a more sustainable, ethical, and fashionable world.&quot;
          </motion.p>
        </motion.div>

        {/* Tombol Read More */}
        <motion.div
          ref={buttonRef}
          variants={buttonVariants}
          initial="hidden"
          animate={isButtonInView ? "visible" : "hidden"}
        >
          <motion.button 
            className="px-6 py-3 bg-[#ea3697] text-white font-medium rounded-md hover:shadow-lg transition-all duration-300"
            whileHover={{
              scale: 1.1,
              y: -5,
              boxShadow: "0 15px 30px rgba(234, 54, 151, 0.3)",
              backgroundColor: "#d1306b",
              transition: { duration: 0.3 }
            }}
            whileTap={{
              scale: 0.95,
              y: 0,
              transition: { duration: 0.1 }
            }}
            animate={{
              boxShadow: [
                "0 4px 6px rgba(234, 54, 151, 0.2)",
                "0 8px 15px rgba(234, 54, 151, 0.3)",
                "0 4px 6px rgba(234, 54, 151, 0.2)",
              ],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut" as const,
              }
            }}
          >
            <motion.span
              whileHover={{
                letterSpacing: "2px",
                transition: { duration: 0.3 }
              }}
            >
              READ MORE
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}